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
    "3zuxR6gkaEBKemXT19oho1hs7TVECbgknEKuR8G7h1xs5CU2BwhdpmG6xTbUc7QP28rsBxFLUSCLNWNoYoepFHqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oLBVGPpKbYrrTyVNpfVsH65HanAnpwPRZ6JuXZfun5jLejaX7G4mK3Gn4C6uoe5sFXyhUJqmuHvpyjErQ3QRDq1",
  "key1": "42AqPHSXwGYSVL8fJTh6Yr8wBdTGctsLXii1ZHGaMk1iEjChTsCMDNerEZNpTbB7QjbHfh2kcwC47nXT9KNRoGbT",
  "key2": "3f1wQJ6YG4jd8tGJe64VvWi56Apy9XqMiXqymqNTWELKkSWrgPMGDgkvW4X45DZYNoGdAdVTk2zeJNDRts3usfg2",
  "key3": "4Uw9LotfaSZ1B722QME2sg7iW5dssKSXMCLCmeENdBb2hpsWa9FmkcK3fnAUXemZzTF3MSvmxDDjbK1cFvpNpvus",
  "key4": "2mdthLDTNMSxDbpFBCnjzXQcNQjnFbK7fzY5Gdp2WhSaGqoUzPnFTBdaFQSzeZNwvWbt3WiwAfGNUJ4MibzXVYw4",
  "key5": "4ewbFrNfu6KWKiJhdVRbrRzaewGmyYPskahxiTQz1h1q5N9mnJUu8kDjJj2W4DQSWBZaaCJDvj3VBnVFEBciPL6o",
  "key6": "2uQeVgp4imzrLGCjHGGax3P7jgA5Hk3JtCZzrxL57B5Q2inRH9VzjSyLPTssRakoaTpnj3TJbhv2woeXwnajSjva",
  "key7": "mj799YVWih3JvmZDqm4HZ3v4seBq41pmEeUnKaeBqCgwBnF5rPkPv2bWcdfNwnu32dfTa9EJuqJPcRnGjAJEbrf",
  "key8": "46LdzLUVG84WmzRDc1dFUU8Z7Tu1E6ZfA8RdibjfF7oDj5agtypDT4YsJdtYq6XG37Uk81JExhB9mfdtgwvzKiEp",
  "key9": "35YVFwFtE6gJhkYPpZimDgWLVHKtfvxTdP13cHdsPufe9Ww5cGkTR66UFdLfPUZ5NLUzhfMHpLKoJf9Gz7YUvaNV",
  "key10": "3c9XWisodzh7XXzDgAd32sDfKcLpkTecejjJgTY55ouqA9iJs9DvEGDZ9yPFG2feyWPW3AyegDQZ2punVETF8t2v",
  "key11": "4ihXR7rvFTK7X5ApieFL8drdkSiTjQJAyyLp6gpnFMd6aJ1PdQijgvumzPXBkkdmisJAkWoDijzE7bvzN2QURZRQ",
  "key12": "4BQyfot5YUc1qmmRh9D4qSQwQKVj9h1Lj79cKZgCPZHZVtzBL1NZGHqVSxGMBdz8TFLZ9EViJchQ5FdoTStf8DSA",
  "key13": "2p6uFyQKKN7DwXs85oRBUbW4UprbRF4WbAtiMJmbbRC6okJopznFP2ubFa14z6StvPc9KsNdcSPsXRBBERbjprfC",
  "key14": "2jWjtwEyEAtehdwRrehqeW2NrnuAaGXHwMqti9CcjyBf3JqeVLTBSWVh8PsTENC28jHqh9bQy3L6nJrUZq3TJgoA",
  "key15": "PaN41wogeqPnXrj8cZx5hHigkBVXy3vgmWSLZphnAFfRpqaAVSbN8EqF8d9sZFyQD1ExT8cUrvJgpioAS1BM2jh",
  "key16": "Rmtaw5umPMuQVkmJVdmaxcQiK2dNUvK1ahQ5wgLrWzQMLjDLtZk2LuqYf7L6MnFnMPEhL8kwFmCHf8yDrM7DzXJ",
  "key17": "5FWPPE6h27NAcfQrDd63TFvmZJ9M7nwzxyqeAKoe1xd3152ACBM8vWTeLT3pSk5oDqfkvH3f8sXmAmX1GBMqosxt",
  "key18": "4uyGGkMphFXxZkoMPJkvLZzzTwuZrnk5z4inXx8n8uJCRmsngKv6R8ynb5K941JwpvbDbDQ9yy8Zu6M3GNiCx7Ny",
  "key19": "5aqk96e4xc6juLAh9NjqDzMewiBwK96K9vAy1FErcfNu9g9uxoi9x3mkxaymvvHWaaLWCCLyGLCFQPjvdiQ3fYNd",
  "key20": "2FWcHQis7nGh4v1LopkMn9FrTTCH5UHLRVL88xQq1QaufovbzGLWiasGoLXZFY15DG6qwman3ANVHbn4z43msLuo",
  "key21": "59HeDXegJSPzzzbc3zyRD4csbPRsDtdaHhKSnnCZ7WnDqMaPA7N5utFMh29hpivyHDeo41u17R3thGYD6n5TxNtL",
  "key22": "5BNK2HxReHBwfLngDHxvuvA8zapzoEjxoBQAXg5J6DzD11DCdYiTxkDUcgxkLasHfTZLTcTZP3uAnSxJunUepPLD",
  "key23": "2A6RutqN4wkfrd1sK79D2tAm3kifDgv12ZcaeWegCEaoNs35ChwYzg6zdGfWUkVSRQ1gBC2FGffyjvtTwM8yC7EZ",
  "key24": "3HHD4eW2kchprrAWCYLHFsqBMp5kw9CpU7Gj6ek5ngApRhr5r7zckBnZC9HKvd5vVKAyXxZMqxC9c8GZiQFVJQrJ",
  "key25": "4btBfA4ygq5NLCMFbD4PCkwapfzcMQF8nVK5SBH3x1vZQXXrxDp3SAjgrAFhHTs5Xasmrx3cNU5V3eVyq22qExsv",
  "key26": "3feJubiqs1Bd9FjyX2W1jJK2icKWmX6cC7nFJWMcvrp6U8kDP1YLYUmrTyyW2AoSs2AYcPyu4jQiCyVgr1pCWU74",
  "key27": "2coYzb9HiZfeJ5XkM5XhbTd8rfX9KTvcLmGXgUQDGASJjV28RsXpbiPeLNJiKUUzDUHtNbcAkVGftc9DZBehzbAh",
  "key28": "5rWRmKvxcj7CTjBVgW2mrYRGmVJNisD9z1559Hr3ZpkF4sSSgMUxFfeBKF36B2fLEXWKCeWJBjawVWEhQoTuwfU4",
  "key29": "5b2tjpTHR3x12XNkictPtKi4FCeJCVuh1JjDYnE3hrcDiyx32VimxsN5uo4gNeUWcG7newEocDWGChQdrDN9Hc8L"
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
