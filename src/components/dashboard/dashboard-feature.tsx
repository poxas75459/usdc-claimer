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
    "3W5fwP2KP8hi2HZ1xhBY5rgR8TKXsTe47ApoLsYD5yHApNQDxL8YBfw875WJdKM2Y7WPVzeEk51wU5AEDimvqmPp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zdq7VxNPs4cXUAQew4z2K1eWKLbECQczDmZ4kReZgp4Krxy2AiNzRhh1vaHE9P4VBiPiLnQnfrupWH8Wv5jMswZ",
  "key1": "5VG5iErY4Tu1kkwJbJL7JFqn6Hg14GbaVo8LbFgg9VqPuUN3G37MzgBD8UTuhxcqNJ5pMWpeb6LP4u7Y2YoxL45D",
  "key2": "41Yc859iAPzvAifPstJCK6VmWZDriCoAVV542H8AZ3z58sVTuySTLzdfFTD5E7pTMYyMPXMQDZFTWoUjboCHUgMt",
  "key3": "23hGzHQH88bsmxErtU6jiU3bWoEmZfMXsyGDBwvRxJYa2MDX4f3uCFG2ftb4NUEMra6D8LLft4FRKJLAopMV7EV8",
  "key4": "71TqLNJjCvgmTETT4RZwkJsGTw1X1wKDxHVYKWneBp6ceizFzW7QoK25xTpz5dcHuHgLZVJokR58XkLdy3GReVr",
  "key5": "42GhaY47kpQwBTAekruVwSGjwLJHXU7i1u4YtwMr1DfC9eLCqQwzP6nNeeHo37AVbZJdJQ3y3uoX7ejr99xNupLp",
  "key6": "3b9Z4ZcYHzZzYjHALewCT6kjJQXvvxGDn5HF6caP4voia1L6Y4ZnkAKwJKz3WvzMNkw33rKJPqWCgikoc47tptLf",
  "key7": "24XNAxhiG5pCrFsjmLkoJQD6D8jow3wdbJmXUNMcdbPUBy8sDuwYKxFmawpYKGpdSeCygyguzxfrNdFidzFVa1xi",
  "key8": "4cfbc5vTxoJ43fTQuE3UYVffCuAoNuqvu48iNpVMGLAw7YB6APFiVU2rbi4iwRXBm9UYrrMFtN6Ta1HMVj2didUV",
  "key9": "2aZaJrDWLmR9jLkjGePEGMRV6zvqmZzy8z51KXkcFwwt7zAJoPr3yXHCsMYkSGVdgDFd2rjw3yzKiNj5g5G5Hdy6",
  "key10": "dqKfwkVe6kFtGV2pTyH1GUor9TRG88cgg8zoTkZqpqLAAzTu1aPnmppJjBqefCuChvTUwTxP9yQ8BVFGS78VYY5",
  "key11": "Cz7zfEHQxSj63E8bR3wmDAoEAwYhjXYGDqjjDdVrFe7gXDQjEaNS13nVx64DnghBWTkQQnfagtbhwXKNtVui34m",
  "key12": "3G9HGsqU4ybaTL4fkxpitKa9DgYNuCZU8EjRoTyyg9BjDzATgbb4Jr4RggUt7tdVuL9aN5SsCJmXPLbre4Xf4wC5",
  "key13": "4LkYios4P3HoLAD72rkDD8pj1dDs2PrJojYgbB2DZdzx5NrwWEvuBcNK1r6JE1NnW2LoajjM7wy4L67bFbj8mzP2",
  "key14": "353MgcCTggaemjLCNsZWhRui1c8UzU1NmpDXpuFJG5BGTWVnDH6ANkgcQfdPrAMnHHWtoBGhsLA2HsS3jJAaZeua",
  "key15": "3WMbCfZHZ1XDGnUsNqiq9VHRK1ZfxDLCu7pvu9h55RGKw46xivUrR6LfvVondcqz2SWGTV27HShBM483u5WNhsVV",
  "key16": "S2M2MZMB6EEWDdwxq6xxWmGkhbPjxuPMH6xACSthB33wNCxTChdQJWHWzCCCN8Jp4AqquHrG1wK9DLtCYaTjG8W",
  "key17": "3Ck7aqvk1rjefMpG2rqGj2R8x7BhxQrvcd8TzKmWBBgYS2ChitPvNDPueQk2xPH2Rzj71Vx2D8e5BGerFh9ESsgW",
  "key18": "3sUbcjFZ8kKGMHQEikU4qKCRN1MHH49NCwupBi9L6rTDzggkkcKQTZfSzLLS5sCi27sUM8JxRgqPMKpSkMPXvoua",
  "key19": "2jyk3i13GPPcsfxpeSkx4afZQUxRD4mETvEYNUPs9ZmWvwzAQJ1rNfjQiqpmsqEizsSf7vHATmLbSx7nVnKhpWpU",
  "key20": "4mxLMVMe8GFV4XwFmQEHeQGq3cUyRiiVwmZTNCRuLBGxnRNu7py7zwT7RRd94vFDvF9gCdid1PxTNgBDvyFQGBRY",
  "key21": "yEbHSPJVZGhcfriib3NARvHCzZkFPiAPpokZjYbz1qXnEeaoj77VZfC3NxygHJ2RngN4t6XqrRKZRxNuauHJPu5",
  "key22": "2MjhUwHroeXdFkJqNowrc2HFCLUD1DRpDQHhXCgfbVNeD28jqwVmtg43R24Uo3uVZqSmLR3TbtGGV6FdNmwAh7Lp",
  "key23": "VL56BGNQKGw4PtVK3eRAGaqNCx5aemQyTiq3A4vidFUjWdogVhkzc6XSFq6nrkaABde5r8H6m8BVwhgmvSHWhao",
  "key24": "5kyP8EzvprwSxcRQQEqH1GQHhUcA427sXxAZoP7KF1EtwyNzGfWoazdqsn8Xpwoub9phdXNE9U9buJjREJtjpLUx",
  "key25": "3xXrxKcxwksRFP2SRFdK6o3jfLrCSm4FNYdfAxG9xsFrQ4JpKfumdX83ZJU33PEEk3M4jMmsNAuqJ5CeSSx5DH65",
  "key26": "46UKS8JQumXr2fZUPBVZhApTbpPokziTr6eCS1rz5WoZ8bUWJzjCr4cDXmPYuGAKRGACYP4Z3kXi8WhxSzaZFDPb",
  "key27": "2uNV6vhqx5ewMq6y7wvkBLaRSveBuay9WR6jTBEYbXzDXEB99FsrPKQPGGswcTyMcMnHeU1RaCvQH1rEHV7iet9i",
  "key28": "4Z3wgWrFzmFsVrW7XEk7Uhc7DygRnWvpoe1pMq6pghSKRrL9Rddb7iBFsixXmYaenpijkuAohwRXpHKzkYj99Tix",
  "key29": "4xJzBrEaFLUk4jk665ZqPvtMxbKJf3AXdsYHFJQcoUcpogA667vnmkyThqHh4C76eaZuLFMhaNsEjcg6bdYa8iPi",
  "key30": "sXco7qRFzqha6JHsU68Nv3XLsZucz59tCFiN4FJx6DJWdrQvzE1M8pcTZiSDYhkrKLmgwKouWUy9zKv5GsqNat9",
  "key31": "2zQbU9K5KSwaRWrKDFKmitmRfUrHappAy3zwREcdo2zGXmYayW6c2AwiZpuj5swAtRU3bMTbns6C69BH9ssZL5Pc",
  "key32": "496iziLSJuMfSiFkeiNsSc992yb6qhTCaktWyrUA4S49fWrQyfvSLEuC1SrkcZD5P6wHsLicqG3hcE3H88X82Qbw",
  "key33": "5eWabkPCriruUN9yP6YpUnfCSoKDUF7rU7Lv3tbXN3vZfotC1sq8b5wr2jgWxfyfPoaJ3S3XYkQ3BnHXDQfBwHFr",
  "key34": "RwN2sNEkiLnspmf3fDpgg4ht6vBqUdzjGP6hmXD3hPLXZFtEcBAerKzPaszPSiAeeH9yQjr4YMusRYM6GyDJZA6",
  "key35": "2MWZrHeucdcXpZ6NG76k8scphHFjywsbApzzt6e1zsurdB6qWLSGhmfz6bKc2be8zeK1QN1giGKuT3nWU3QLZUGb",
  "key36": "21qvae8NM5Y1dtgkSyWkxNuYdR26pJ4KpSceWvBYFRFqGAPcJGm6gAV8GPpgFs1YdkjgNCBZ5UZoQEmzcZUF2St8",
  "key37": "51qLDZcuQ6aC3xFNN4c6tMGNiMDgdjL4Qc1CgDVqqbDDG7syjpzZif24byDwGFU3uBT7sm7k5i9r2zHhyWQ2p49u",
  "key38": "25hMti5qqUoRvHcVvNaxPXz4AKHn6M2WgcJ4HKNDZrcPtcWpAsn9pnyKUTZvA4xBXiTe8GLPxGBfFoa1SjLq9bmW",
  "key39": "5c6av2e3UMufNSaqmgnQzh8S1qi71hpRzYDiMZcsV7yWq33cx6yUqPtQM4GzvAppey9tgsJgaMm28bUaj1Xg6uQ"
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
