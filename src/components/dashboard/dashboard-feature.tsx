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
    "3Vq65zfCfMn7nyv774ckTTSkSxN8KAy2JMqPPWzVDUcvjrwFAzrLQ5enUwHpfuebGs1T4gebYd7xy1JRbuiv6KYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33kuToiM8c4P7Pmzqf8BoMRkePshpF7UHJkqepCywvuyd9WufSfCfadPGDdrQogDiGbSS8x58MARvkbgzU2daqMq",
  "key1": "3KTkuZxhX7MarmhTee1HSVvGYYqVJj4BCHa257GgMEM12GBFJD6adiY8LTYLyTVBt87P1yeF1mHFpvtazyR6XEs4",
  "key2": "52g1b3YotmJzigQSYn214sWpBZZPQqTcC8mQD3fqf2JafFxUY8vkm6Vfr9TmAW9d9oxg8EUu7kic4Zt1ZSs7Qkr7",
  "key3": "4CZQ4fSkXXc68g5A3gmgFHSPoDJ6q8qqaY72WY8eyXD1RBYuEZwxe1vmDUNxHfbvoD6hu2p6P7C1BFihaAQUpmiM",
  "key4": "kZLuwKABaMt351TRTrpfhSrUwjxGjj5FfnCKeYXYZUKxs5Qe7Gsxfo88ppwgs23rypVBWMFxWQFS7A6wjbTywfq",
  "key5": "vr9MW2pbe445CBhi4bk6zuTuvaUEYZq7FZJC8fYSZ9eXNtnMPB5rkSwdfKbREzfpLKLhaLZUxp74MTTWCTyCfrG",
  "key6": "nZhWZmdSx2fXn3aN4NhAbLhraDBvRZnKMxdjmcdmk2Tu59xgC2q6K7KomjSyLwYDGhjLfSvqpCGchts1LEytWVm",
  "key7": "mxwFMp2ZmFL9yF8fomqkhVeFinHYd7jByqGrY1QhrnUTX4ieHv144QCTKjHSAFtbumLzQKQgNK6hp4XJNd71zJG",
  "key8": "2rqZEW5AfXHuYh4PvvApiKMyuX5cdzYtHQZyf2maUaux32NFoaVu2KUxCcbpebnDoGNXmCCJUFNvSksfoRCNdS7q",
  "key9": "41knBFGmG7tVyywMXseXDVeWhadBYbj3vnYjmf779RAqcVVXk9eBF76yFJMcL74LeYpdMfZJkqKyuMpF6rpw3nuB",
  "key10": "4tF7WrV2xWFWDTMeq6dhbC4k9Z7AvLyjXwatGS9AycWE2ZGVphjpxBFvSeDhCKxAjv4h9ng2LuxMdLPeNqWL7got",
  "key11": "oepoAEE2MnUKK2sJ61SYFbLRNVCYjjB58pEXTWUeLyQHj7f8iUjGV9qLCJ62Yyy5m2Vcqmjo6B7xExvjwUqBwmw",
  "key12": "4ESdDWFdDb1ixc8waxLskR5rNKmZW2dskZn9cb7d4BC5SdtUMw2apgJtxuhQXJ8j3PSZMShZWw4FaY3k9w9pNAL4",
  "key13": "vKXB9x3nGG8oWQ8rEpJwZBYR8Sno6ywD6Da2zjvSQ6UqRUZoTmuKk5wkjh8bG2LEAVSkkWgDXPDzQVQ3TXDEQYk",
  "key14": "4jJJNe2YXK8uEREZaWmGGCvk7hL4ahp8YB62gQ1XcC8PYfWWPaPWXR6RAufNihR4dcvRLdsb5po9jNpjjZWJ3RNK",
  "key15": "ioYfpAqNXu9MSiXFUH5w4J3Jv3Vg34McAdfMN43k9cSuVUdEjajCxYBHVqnECisoe9z6qrdn5TwBrjqsSBmpBDJ",
  "key16": "2Sdtmjw9we9itH7oSAEsCdTRXvzcL13pqQE7WeJMf2rrW1H4t9Pp6LcMADrW7ZiUm6tgRqjxWQMJtnjtSn4jTgmV",
  "key17": "23QMe7qHTaPQg7qCS43niSQ87PhWJuQF24PTfSY66jHedsiuqKN5LtsPJLC5e7iKpL65vcfMD4U3TVREWVQLdUax",
  "key18": "4ajDUqnn3aMLLeRhxVayeC3fbzs1ZLfuVwmE4A6ugGKuexdsxGopkj4XYJZZdp8sMN5gQ3Du5J8RPsq4xeihsqce",
  "key19": "zeH3g73HdWqjwp52wJGjNXCCfkeKSapxbhRux1EJkgvZigRVV1dRU7mrNHfdDb9PUi2bhGxHtewDxTCS7m5vNyL",
  "key20": "UkgZVVWFsjWds4THzVMUHE2pCuhHtubTvBQUcAccLhTfepYocDB4wF6srFcwFXDAdnwBjpviMicNtRSpsJ1VEFn",
  "key21": "65YPhh7Xh7onC9iUroJerT4VkhfejCDsjDjqfiB1wG5vzbbdL8aWou7uX7KRVKqjNXdLfZdna1Y3wmK7Wz3wCz4c",
  "key22": "3hxNwMdENhGgyZ4TDurDFqgiQeYXbDv3Dhw985MWXHvDFS857KyQp9pqCZpmVAadS8cfVdDVCGa4queTTn79Q2cU",
  "key23": "653rWpSZ3oNkvoHQ3KVKPdY2sck1hbhUcyB9tPZqp9y1BVnGcTK5Z8Lf2gwtUZZGxX6DdTTTiur9iEvwciso7xZ5",
  "key24": "3bnLDCWewpYqAhYgaNSzo8xhW5ymywCxkCrbEfB2XYmUWBrACHs1WDzB3xnzR62givdGxSo1pSrtbZyfsdofJL9v",
  "key25": "36nf8vrD6uQMP8cEoavJ86UVkgc4L9S4dmDHdSHMhMjVT5svwTUFt25EFZpcvKkhrubqpyxakcsgSkV5GpAF94tw",
  "key26": "2fQt7Bd97NxjXCVLCYYKTQpfMo899keYkWJQYt9SeBmCUduWAAkqgmDgaNzuSmMSTmzJUyzLBNrskU5rgPWwJHDZ"
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
