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
    "5hLFa5yg9o7fxEutWzwGfnuAcm6HznDkgdTnRsVda1Se38JkuXFx4xod6fyVGBecWKz8364MSt2LPt3xe1nHGpZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3axfkEg5L2MNT8nzLT6HRixKVFjyRdEnRdSeANwg4svb86Fiq6AbK9uUTQki5cEnTqfh96VeVeSjGtQAsqk4rdbP",
  "key1": "Fed11dRANmimCPRSTcRu6hZEyqGSqj3N3xwKAc8B7CzWqyi1fsfMexxjQtAFGV8E26gxW1uuSiFiexvbRcNNktD",
  "key2": "5YeMZFEZRPycD42Zpu8PjG1kaLqPAFb9WiQpRvCbNmYAUeDnxzW1HdZiTZBfYRNmybB3ocoKSpUU9SmhdobB1cfq",
  "key3": "34kn4NjGbw2DCV18ehrkbiDfrH4V8wMHjYXBT9eUGygHT7Lsv864uQym35M2dRMByWcptZjQZvExrbmB1CeiBiTr",
  "key4": "jMarRHZTWtdCsrSngWkjZ6HYq4zkifkuT6xjmpLAbNpktaJsxYM9qKyDp6XgCJ2YRLmqEB4H3QEoFKPiSSvi1e1",
  "key5": "ZW4wcNbSxPj5XtWkv2rr1LboYKFzWzxhLSien8bEs3MZr8kio3ZxKZgfVowtpzG78LEeNV8Xaf4JgT7L4nysZ4d",
  "key6": "352ogCYWutjSTneCCaKa23efa3usDbkGgHskrae2dQAqfUXMp5ywRDufXKq5Meu37uvhfpU2tp71XneRvFehhVEG",
  "key7": "3ixmDZ4EiMsCco3r2NTUuJKsYnUGB9VCH6A6SuepkaDfzVrRKJ3PYBK6Bkybmq4XFZ12gc5fpFcgmuJzU8WpeFxu",
  "key8": "26BnzTbwH7KnQVb2kum1k3pbBYwrGgmx1PTQ62YRrAf27ugc9pqXT2cNBFM2fX32JcQaTWcdnPUQdtbNvQiggWYW",
  "key9": "5fuX5NZzVC4tSnFtjaxbViQzG1mw9csf9GM4JZCHEqgPzVDqkSCjFdbVtojV4NdLuH4VqV4UZZ5WXnEUJxQ4rEYP",
  "key10": "3J4fcQE1vsd31xdhjNtEW6DdmiLwKzECkLdPpx1wbSngRhTuzLCbkrtH4TiWuKzWHsDFALam8XF24hkmACxXPMdh",
  "key11": "5Ak5mjkrJBbzkzzNnenPZbJShNSVx7DUgwYGDsHuhViHmjAdcw5Wr18s3yGyz93WV1vYj5syHRABZL5BU9NiYNJz",
  "key12": "5uQTsGQtcRQX4njJYmCdK4EYHPUtjL3kCMySVr64QonToHBF6EnYuSsCr9WMWYxNv57drBP3zs4YiwzTWC6eHkft",
  "key13": "2o2RxKUxCsidPeWkC5s1Uc7JjJ5zkz9pNpYxqnVYh51fLY1b1tVRWfEYkmqd6w97bm1CtjHeXqg1PJvFoszA5dPh",
  "key14": "3aujZGZpMPF4Kt6RQsgppfnX4SuY5mpMTkxu47FooxshCdkU4TuYmAVUvEXe7Vxc3L5Nr4HUxowzqLX42owCD6LE",
  "key15": "3s5uPkf26wL7UbzgTMEj8LBWs7aR7uJDk59j2CaXFhGrRGNZ5dcfbaQ7v96XPVHrBjarVtAFZqiQH5VxmuaFyH35",
  "key16": "4LenBvHMsqEyQRKPhgKvBEN6Euadkvfbeu9usuWVK97gx8AmPnAAWqdmkB5WSeUWy7WXehsxmkjpRTW1hexg4o1y",
  "key17": "88vVkTkACE1WAkJ6eJwJroQhcCnes5SSeqzBt5PW5hYCkoXkcZHsLSmqqaB46TxsceVoHLQioPF8v8xdQbeX9zs",
  "key18": "5D44YvhmJBM4Tq4zMYAUPfkbR52XMvbocL49SLCqY9c5y5QfjKv2uUVhYntBemUKKzhSG8eJY2Vh3AZ3qm9EW6eV",
  "key19": "2QrMY7snkGbQrx7BfHRoWMC2SPBHo6jto2iTMwgdmEoMqbVcTexnJYGZGMhXFQWKYfaowCSUvMobGdaSKKSBXnoD",
  "key20": "2wCyqtnove3Pkc5nDYsfEh8Rg2VrZXXvnDSvxJKiiYqtfNDNAYHkGS3y4Cm6j1zXMPqx1cuYWdmsotsxXTC41MsN",
  "key21": "5mhnxE9A354qXnUFBWnkabgH5EXaDvANvr8gkLtdkNLgRhE7C5Rb5ZpF9Eo1etxFirr8BcAQh8YF9qbFszZrYvjp",
  "key22": "4UZANNZVR3GXAP7u7SDFR7PNLnXC6DfdxGzdnMQSyKnA67uzJ7aMS1dvpc2WoQ7MEPFQHU9Yk16n7zkoQXzJfM6d",
  "key23": "4FPvkozmEu6DNNB9ZuRSLh4MwifzZHbxoQexgSm9wA9P9gpjwL17dXt3t8opdU49BgDSR9bp6vhSoHk1zAdncK5T",
  "key24": "2JBJUhhWnaxiUv55p7VsiFCVZ5AkyB52yLruSe7TyAcHvmZYaRvvPYqtGNMzHKWCJwsQSz4qLGc7iJUnmFWhc7nq",
  "key25": "4L5LAMEtnpU5RxsagSeoLcRAtdebaKLzfq3hnSMGUuuA4UJyVTUaskrruQf3EwPei8HQicEpRBWkE1jj6E8XKVhq",
  "key26": "36oWx5oq2NsqoSCUHh9YXQKmvknRbkQ8dn4BG45Uw4dDiQSCgV2CGYCtawjG5jfkY8nMDd45KVrHijSoyDRWFHt8",
  "key27": "3gbLDSUewrRL1cMS26goYVEXnRbmzLR5ZNrpkfrnEhygzPonqmesVrXm4sdTcEPRxGsYH7wpbPmDSh88w4s9v1md"
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
