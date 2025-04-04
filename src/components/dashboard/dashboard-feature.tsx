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
    "27SuX7RRGbuguA6bRgRiJHnDbbR8LjFPenpoZm63vfPjBJyMGJ8AHtoJnpKs2TPrbo4BYMXry3xkzDqnp5pvKcJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ybsXQ1X7y1Vwen226DNrAXQUXLq6p1yfqNoxjgN9E5oTdjhJGyRGrciaJh2zw8scVRRVJu19VPpFEySnrczTWoG",
  "key1": "4BN5rypC153fQHMCApkDD9THLPhK9QB9RkKNw4m5gdio1Y6CK3bvq1bRohv2s17LKeCsHGGSCnuzLJoUaKGvykMD",
  "key2": "5zE94iZhpeqptdQgDRvqGHpth8ArVN2qxRN3musBaentGaTzqkR56Aswm8QbKa7d1vZc3ydJ7Lwj8qs34UCihGy3",
  "key3": "ULB36H8WDZvMnykqoW53KJevHFUgxkCWh9tEePxyfELxtL9BdWdP8xE77yWdGE1PTfscKjpRW95n8MA3ebj4Ynu",
  "key4": "5Zi9J5ck6AV8N2LbMywr22PskmhvnLr8ySkPSGP9sJSkVx8gTaRn7jaPVotXEkTorS174Yx8mtzgEmLMRi4XWXYy",
  "key5": "5FT1ncQwJS5EQSkMibm11EEXynA7CbKcQ1zEn1XdUKcG4C4BgpS7XZR3AqiFtrPWbeiPLt98DtuBydSWxpU93LXd",
  "key6": "4tBUwK3RdD73tTU4mJ1yD64nVS1LMGewN4ZZqskViqFnRV1ypVGyUwNQJzvXsTkwCd2vnZ832YXsyisbLdBpzkLy",
  "key7": "2TjQrJ7Rj3LCW9cnjSidi2qd9D2f74iaAFvYQrhB7N91xiFqFC39h61rd6Tgcxp2matCooXeP8qEkDKnS7kPZWkq",
  "key8": "N4VfDTkFHFfEAPSTuFwSDUFcVhym67esqR7w7PUCkU9qV2Sj61gmKjvjuYHbe4QJKGsBhj9xUByNJvc2WFtEDQ4",
  "key9": "8FvaJp3nXw5yZrFSVpkVrMMCxc7S29SpgKEXTbRa75Qf7i6a82s1eYZHkeB9WCzjSzZWsRvvdUtGi9SLjDk7Cwe",
  "key10": "2AyHEQVxPG1bwc1ATbgN5St2K6dWh6Yea9zKTeuboJAyWfyuL27dUHCmqJDZeNzaRQY135xLMHk8w4faGcn7zfVY",
  "key11": "5raW4CrqpUN1bdhJKQsDdy1bFr8mdtduZ5jRN9dQj5Cqnm6uHpj5m6kkmGGmu9YGw66QGNbqq7UehvQRvGrdmHtB",
  "key12": "3bMQsZoSY7iNHtakvmy399f8Dev2GA7ENbvSACwqdrrLWaLhSBKKmQetd796TaqPVsY9dNq7QLcoGySTuFG3pZmn",
  "key13": "3rbggdRXTg7G9iizTsL7NKLD5BfVfBB7aiVb42ayUrDEfrjeSwo8mBKimifdae9hHEvhHK45tsnCn5LFm6kpjqM9",
  "key14": "64yopYBoC9u4TFEzFUTgpBc24THouETUmQ2fB8AP4r1mGCunMEG33ZNJSmHc4gArRAh4e6pXsrTvyAm8YHBPqq3u",
  "key15": "5izJFghrK8xKMA2bCtym1o2jMmyk6MpSTsV4VHpBA41pWcRZjiGay5DKXCsyUgPoyb9TKCGGq6YhqM64P9T55Uta",
  "key16": "2KANpP2hb1qRQfnzZJxxCL2aMosDiZxTqHsCvA24MipcLJ3XvczuKCt1w11s477sJhYxUwBPKL48CXoDbH22chU7",
  "key17": "J59v8vbxTkb2WRbtH6ce9YEt8EkUzGd53hhusKnJtfXFDMcCYF9E6A6S6JnSdK46L1kYmKrZG63yHgqzpq5EBCp",
  "key18": "3NaTR7ssbuwMcZQUVmahcujCphsrbxhBnHj5Dwp6LyWdNgo9CVcNJiWutk1MvPGyiSycfn6QnmXGf8vMW7ztWFfb",
  "key19": "5DaQJfa39DNBnUABvZpekeJypqHeixx2FUvQovixoXBZ98qvSrFRYSJn14NGhJRkJnDmCeCxfo2AKoe968daerrc",
  "key20": "5eTXRpDwxMau9RQnJn1TdA3dqsqBnA2fJoh1xWpfgdvP7rsKCzuTU7UmdHzjahmXYt6jsUSPo5VQscMmc9yApNSE",
  "key21": "5bDQ9akkEUEJNsD1ydZ5fqmHPigWLNiNfae5i5dvEN4QcGcGTL3hiyRozX8cUaCTQf2qodfEurQjsBtJZbf9Po9N",
  "key22": "2sf122yRCA3EBMLdajK6RqxWZjCNh7SFwxjFVpKFqGLr4j3WHMV9Ut3LP9y8D7FKKv7PqBECpGJcWBhkHEku9adX",
  "key23": "3s8ZTq8ahX68cd68sQNZFdKPtguUMoR5wQEoH7HnScnnqw9tLwcrXyd3iAkD7aYvZgnoVq7Y8NMRBTgLv7vNxcnD",
  "key24": "3F6MgDr2HeM8PWcmf9S9hjrHyK7D9tkRNWCXjyKwFJUP6RP5AtUbVWEsD1sFVVgv7iGWi3uJFY9oL43hNiUBymRb",
  "key25": "5E74LGWaD4HN3TCdK3meNSzULkJai4pzETV9v4EBKH2Cn7JN7GNutrjWgTRaTLfCxe9i5zreaFoxJtHntUSVRBCR",
  "key26": "3P3zSFL8Arr3yatGr8jDrQBki4jEuLdES8YQCHP2D886zyQDrSAzqytusXutFVdHMiL9nLKLvfg5PAon1xbgyPjm",
  "key27": "DdFnTccWUNAp9F7nsTXehqkPHuCzJvntFoxX5b8qsRF5WXNwLvxLuiKbSFokEX6mWuAhteyiMi8HmDRvPJihqaa"
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
