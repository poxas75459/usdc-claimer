/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "Ri2fM6vmmXaJZF26aSCFMenZ6JCEZKWnLv7we9JNdxjCPQjSuSrkjzusgJyJUVirBPuJaPhS4BhQk1zy7thdMzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WJocF5wwYzRY2Xbw7q9DSHgwUvMVK64tuK6uZ3dwcJwNuQavZhdMnHmtKvb7fD2A1eSxqicQmR83h9XY8guQ4sh",
  "key1": "5JZA5EkkTVJmzpXmA7D7kTJ9wyuLgM8nUefPjhEECmyiexkMFNSNw8SymKdvPcFZr8NqA8Yym766FY9PirNPTi1K",
  "key2": "vyCo6GSC4DWkbmQuok1sks964UQhQ9wbBDDjb7Y4igXfVFd2UW8H9uNtXeCJZHwiVdsC4goifoD5m7FUueChVZv",
  "key3": "51pBq6vJ4SAUGxAFQ7NXn444ztEJ6GmjUQPBRMyxBjtrvvt61uPjZX7PJdRV8hEmcGTuRATmmjCuDrp7UiVcC6DE",
  "key4": "5dAZno7NSQkPQ689zu4NWn8zoZ3MDJL3eMPvoUGwRRYZYDwcLN5ciS34N2KEZ3DLJoVM6cDKMjHtDVp8JXurigCg",
  "key5": "oG24xRJ2jME6V51sevjNMotKjXVgZY8Z5KvjQtQ8PFwtdkcUTMNZQtr1jBAhJkCiagdyEsmwskrQPpSh6wtQ3fb",
  "key6": "5B41aTsGRz6AMv121bBPvVruMaQ9EDm1yfAmrRJV1FGEsJBxD1JvBbv57eRHRFSwa4hVCNYpfQ7AsqqhH5ha7bBV",
  "key7": "2BXi6dA4HAJNZiQrnBHJ43Dpd758MmszkTyRsVzmsR3xmAu1iUZNYsFS9xwVj1fK9ZwyCVkWwazfL38iaV2Y58hx",
  "key8": "2VaH1RTbG4wLPmjPYDUk265P5ihTYrJ6pZknHP4LwaMbJufLpwKcSAqXj1thZo1qAS242ZPKaH7gnu23u4nKrouk",
  "key9": "6kvnbnwbbeGwNBveujG4Ani5Vbg3d6RxBXkyV2VufPr6MeHrYURxpHZH3evoC6A3mnkLzkkkamACBwd3RVg52Da",
  "key10": "3PNjZvs5RCdyHs4NraDQEk3iDrf3cjk1DrHMwxVW5thvEUQuiqtaEVFZaayyY8B5xNt28nqFGzMDxo5p3eTiLcd6",
  "key11": "4cHEan5CAXganacLntaQ9PTSYWRB6Wzdyw2NqG7GPcTzjGa9XdbtZUVNEEWqBJgPVkWczH3J2ywyszz6tvH2EvU6",
  "key12": "fXkgG8YTaFp8711G7XMHzD1rnqokL7ybUEqPN3pyF4UeGjLwJHjrFW1Yu3Fj9NtzzKhzGzok4dE6EBoJe6m5qJi",
  "key13": "5ZANZ9b9zvytErbr98vwRBuiKRb6BYs3tWcQTwgEHYNzQCrKRjchtc6LTp8FX7BUqRFzof1FY4p4jRsu7kMFHDVM",
  "key14": "2kCeLTRaGuVXd3gLnvim3eW9KBQgWhA5Pwbe5kwqJjCTyd1NQr1eQLwxpAcCekdGuxUTsyA6Q6s8T1FkGBRyHixo",
  "key15": "4bMz2tdHK8s5tu2Xhj3dRZdnH1LqEG2gCEwJ9nHpypyFTDMU6ZdRcBTmWj2FrM9pBdbgFNCtC6oTspS6XSzXu6SY",
  "key16": "5UiVhyHsUnBXqPVuY2BouxhJBCYdxMfyrH6dnhLGcsH3RDKQ1khYodeDBGmKYSw32W5nT7JhMaPhWp5wpcUBbFsG",
  "key17": "2yYZkQ3rbYMTYWnBCkbg13RWJhkwsPskNgKUL9uqdALXpe7ExuiC7awz9UA61MCKQ8FV69DQJRptiXJp33Wtjhj6",
  "key18": "5EH9bKtM9QmAAN5U628YWGboorRgiVNL9hBXAA7HdeazQTdNKiF1C6RDSfvpj12WX87t6LU2Jh8UGcM47JScuXEC",
  "key19": "246d3YrxsswXq5aoxTM4YF1igfPgMdGK66ypRF8utYK2m6fzUWUwBPPbyEUz69BPAG86bMmDntoEyEY8VeYvbBr2",
  "key20": "4DbaBu6ChMxGpxSu9tMwLkBvLfmcaHeRjm6LRyLkgpUaAXk8xLAn5Yt5EX5DVaUThvBzPKFhVDAdgyGHh3Yvos1q",
  "key21": "4MXCWLjXUf8tm9rQ2BcuuKAo5mz4KYhd8fi4ZVT5ZLUM3h8d9m3aasyHjDtvC9SmGNauMu8PizDL7QAwKY2XS1kv",
  "key22": "4JtXFAU2m6H99zf6P1Qjr2UfVseAwHZ77Gw2ymKS4khQntbseAk3XxxvqQz9QvjoMwZQwG5UaSUMzjgMZm78KVjX",
  "key23": "5SFpNeJQAo6PPVTBSSxGoNEHu9HHsLgUVZ4xS9PvG6f1BwKvVet4f5XCrbvpdcD6sBH2QbjMxUVMxovoGgLK93FJ",
  "key24": "si9AmMRPsmXf692Q9qdoEn5cSdCZQ3zWt2CaFmXxqXApDUYKkYyMe1CoczDgagpkkFmp6Z7QN6Qh687LvFweUJG",
  "key25": "5WjUtbkhQGb7fU9fRnr8buacJhR7GPgcrDDcDmYDxvZwTnGtZHriJdNFaBie78FYqDwcFQHFK2cjHsi7y4jKCx9w",
  "key26": "4GRRxD64gfnArbC5dJVDCgMcvKtxZtVN6X1ngKQ6yEDSf2PM62DHA7VjbT4zW63LaQShBACK4Tr9PmvofsBihG3Z",
  "key27": "2GcVWRpK8z5uvqsHmgdnZh7nPYv4QGahpGUUSYeW3HpZ1CKTbDFqcRnsyqVP1LofdHqT5xHTyfAjudcdgEJzUdUG",
  "key28": "4anmTLag5xYzDxwfUnYELj7i4jtG2UWYQM1mFtX5JBtogzpUTwFXaf5gBGKT5B28yYeXgX1iNHjpvPLdn9iACBa8",
  "key29": "637bu2QXB42CsLeG9TkBnmDX3ex4THsZxA8iwnaZTsJhXt1R89dXWYhXmRt6TV7ujbCLuTB9aqmHDgZkEXQfHQiX",
  "key30": "5MHDAUjbUkAmG6g7boNyoie63ecZoN6SD1ARMxkhV3tbmgJo93q6XFu9hSzcdgQZ7feCTbG6QkrZYwEGoJcCxV7U",
  "key31": "nNstwbkcDonemFru3FHgvDfs4Wzn9uSE1crjoR5r1X5y6arVC6eJtDBDdMc2xGtNVXFBsyWv6UeXCUBZ39pG1Wu"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
