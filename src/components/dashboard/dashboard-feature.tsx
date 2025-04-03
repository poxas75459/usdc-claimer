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
    "5zrYgvCBAaAG3APdFGAiUC1XSP1wMZacmsCfaqWEVQBHXb3WksjTDWZf7doVVtGJJFsFr3BbVFSmZ5GYVS5tbeuz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oBUq14YxuXZU1e6TanSjTvyfaADHThxMZagRrVmotMQjPUWNmjS68iU6VghBufXwjsJUveNB4NSbuJBykLtWEAH",
  "key1": "LCk31bSKbD1kMs7uscL3GRoj7iKx8L7UfeiLXs6Ci8U5zRi7YNkd9PW9DSjJFFEPsjowT5CgzvJf2ssdPufBAEm",
  "key2": "473wEw3cBFSFv6gdq8p9jJ7fdbXfyVJSt2UDWkEcpjSpK4tHyafU6oueHnmZPhDwZTCxn2bJkUXMYcbiqEpu1tAj",
  "key3": "FnyFPzrWZQD2xGPjdWrusMz7LH85qEqExGrTepqbSfezc2FJZnJN2GsRQwMMcactPeuhDVQXuePcqJhMKtnmbMA",
  "key4": "2N3QcJzjUthRcTjkRAgZiikqfcWjGx3KfUiWLpUGpJUzbvfNWjH9igYgq7WkwwfLZXiBuhPxfYGqYZrvLtqnGmck",
  "key5": "2ogyy6TBucrUM8mUj5EdSaduy9aVoCoo6KVCui8sZN333AubKZVas8npXxtasjZRx7E6VCKzBVC7ZGQPko6pW4h6",
  "key6": "2hmR3yMPeujrek7hsSubJeB2H7PXqiL1FeDXSdiguRAsvYyEBABiinXmNzmb1kHYSg2hZDzmbbVWPxQKt85ox8Eo",
  "key7": "54QkcAUHjcaEpLaokFAS5BQ1rxDLpNdz3PzdWTSazV2en9B72AEyHGaVXwJvEoPEod1biGKumXX7tPGPP56KEHXR",
  "key8": "3wtwv1GnwrqgsChjxx8z2Snez2r32bRNLMkUQ3i7H1FGVwi73Hyz2RA9ZzC5qSkdSbsBL4hyfWvrpoAYF5YzWUcW",
  "key9": "4jWz7kwaM7czB7cq7eb7ztaLw8vdkLyU6KvJ5qiB58N2UMDCgK7NKPciL9tmhEydwZBzotXFrsW3YuiEK6x9rTPc",
  "key10": "3Fm87w6SbvxGNDUBb58qik1UYi8TZfUB7nKwC2J9shw6k5DFvojxq9NHSKghTRuTH6n6RXN4PvmEzSzqkyDDNTxo",
  "key11": "byMjEWrwmiRDdVVuY6TyTEnP4xLrKFqynYTANan5JtA6iKxKwUyhRUUZbu5TjLPqFmzfP1jCq4B3TVnNAgtVTkU",
  "key12": "485w4c39LssY9uCnj1EQnX62jTbgi54j8dvCqDeWmYmNQHnhrF3mYRteoPuyC6SYWbXxgVt7RzzVtVjMzDR1ftsq",
  "key13": "27CX1T7n7Jrq2Pk3LbajN6ZkB3Ne1FVU6wNKG9hNo6LDDFuQsWZr1ynPY1fjoVM246KuXQnQc3s6ttQFbF3DHmzC",
  "key14": "ooVMPxQSmhKeBMdFYigLkUm1PWgd3os3yokJKjZgCxWiVFAYaguZTEXgw3PoTGZ62Eg8i1nL7zavUa1qSiLkQyg",
  "key15": "4QBhKc1eQVvH3g8ryANAsrqoYohPaycS3BuN6b4HQrjFHiuD6cZqxUugR9UyWb1wetCtWpzpkK9t19WRreHkZfdZ",
  "key16": "44cN2p22oiNdRv5aS5htPcy6etWcuiSM5fbRoHcWiJq5EPagtyKY3rsT5rFCLFMyP4knokdr4zYsY6SYqdERVsg7",
  "key17": "5Pbwmt2RyAstyRquTURzNPUNi3oMjzbXDKtvNjzs9yBdbiyeGoQ7vLjr7cggejP9xCudGDA7bgc7udNNpyUZrrVF",
  "key18": "2ATUPZdftjkmeaTTRXrSzSoNqJa3PTB11Ni71TyjMhdy9FeAg7eb8TiTgeSUi5b9K8rUmLp6MNnoeFUCQHJqW8VL",
  "key19": "5G7fc41QEKod1aHbJovtcqoAb1XFaPjaHeo8TW1zUdkAwTM98SrFeF4MjyEVM3W8ihrdbsQCT6ARDxH5bUhoJc7J",
  "key20": "3gUFGXBfyy2A5zszRym159MtSAoMXGZtQGaSZr7RMbB2ge4mJQX64Nur7VsvgcjKtWq7hHKw9dJpR4DyMX8H41WD",
  "key21": "2NCPnZUwP7aQKgVTXcqnBt77KPSCsMPo1nYLzgXPMEPCG9GJzJiVnempJMEmNoEjBZWP7XgueRiWyfgoH6uCNeSq",
  "key22": "gqRhM7BHebkxxoJNR5PwBd24jQyL1ToJ6CLjXgjpLdMEo96AMs9CwDp71qttu3eBQ6VvhMmYSaAqbfvJmfpggb6",
  "key23": "5qiWGwz7u5RoFt5SLMWPKeS98cbxC38HmmC5yokYxVNcB2smRd1d3TnRPEmv7EQvQcG7Gve4aLiJ6477SAA3GNQX",
  "key24": "3Yx312sdbn2ZCjioxSRYQ3RYJJxj1JK6PZDwKnVfsNjcWnMGnPqBPt839ugHJrFjKtZ87up5GgDfd75hPyCVFiqn",
  "key25": "25YXfjvtgFwoAfwZVzxhJjTtZoLTtxJq75AQuLhRpRD9Bowt74f3a7GLt6uwWpdc6JLApMjf9UHempKq1ibtmg2J",
  "key26": "2ovL7hqF3FPsXJDy3kt7bD3UiWfVpEfRe5YhdHi3m8BC9s7NARjsmXX6KgGRpif6anePQ8FmfqoypXFHzXMAG8k1",
  "key27": "5U3xLqKbMfZbySj4ux8bundbNRaooST8DLbiXLB9e4oH4RPUi7E38fWmK3NBXNB8p3mdhRfHmGkMEv5PqkkckSSE",
  "key28": "2o6qgpjv5zNjDX4FGndPa7yeo2F5xQBQB6qba6QXHFuihrxGSgh7TRnsQztaNgYECHhDjYLMZCjrDWWXW7xyFe4a",
  "key29": "3vdeQXfuPoMyMn3cAdgo4PxXm79uapMTvMA3u89NTC12kaNTtKfgqhLcn1Eme1xKpMa9ykWymULRQVZZS9sAGUcs",
  "key30": "fakterGtjZBDoG51KiNCsfYWF7PhSsWTm4BRhrnhizPrrbWaeuHBDtsV7D5EUF9fo7JjsqhJH5s3gH7vaT85e1t",
  "key31": "et13hFpwKWspzuVVLBxrpq8iDVXm9BPLALknZEx5FMaUjTdqA4FYFkeWZU7AgWRj31CVTbHwQDyqqjwvkQ86Aa5"
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
