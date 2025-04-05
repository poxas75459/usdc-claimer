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
    "58xTCfNGLR7cBSwVS4aVHwe1E44iMV4F7HKMc26eS8FkDajNcE3MFuBHN4ykoeCFvTsbgBvoL6RrvYWqgPG3GytS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rua9GbDzjEQMUXZVv9R7ZWrrp7GwRJEu5G65t3HZtPsVDa5RjaVpYWDkEGjx1CTMv17cUMKD15o17TEGWQnPZp3",
  "key1": "3JSQkcWdbgsYbyNp24FJkduwDmUHdJ6G7r9V8D41LyUg4uhf8Cb5WbmoPshuV5BwdfeTFd5FvzbQ4ZrCfptvf1CW",
  "key2": "4gPVvKW8PCFbK9kdw6xoXEt6R9dMyfHqYTAZFqZbZuxyWPa4fbEnLk2V8rAu7t7h9VxfqEzuQ6SUbWSbUQL8SEnG",
  "key3": "5iUeyagHJGrsQLw84qUSoYyYnfuFaQDb7dBqTXtdEGCCeTJ7hRpLeDLYbEgnmMn41nEHS39Y9vkTgUgB1d6Doqsf",
  "key4": "25HjmoSLwte5zqxyKPYMzRCPWo4Yj7tfARoUF5LeojqXBURtxTFRBUw4bkKHfqK8VUHYGXkB8uLzx1kUiQH73f42",
  "key5": "5YTrFztHHgsennLMYSB15fSS9FMeSz68tDiNUN532f2UaAGaaEVeKpViLoZFKfwMY8YznCvUjb4Ms1mgRXBWB2yZ",
  "key6": "229vcM9R5pm2rCHACck1am8hSZcy6wHdmuK7PdLA8A7fGnkwWuEUtgXQ9bzRbxXoSUHjcW2MXfCcEHjwSgVUdrmE",
  "key7": "5PaagoVFuKmx8T5A98tgzMQD2mpKGTwcKekJVj71E17obdsRcY3dR39ThCKRtago5HSqKDpFGxGkBK2q4KSw3txe",
  "key8": "24mjSX9Wyafk14w3aLPFJDufL7ysRmkEemSuP3nv5m8x8RAfTmXURW7xVvGUTuSp2kfiNTa4vwRa2NJm1arf3N5y",
  "key9": "4D3qa93Xx1XoPuhLxJdbWUe9kZgYwg37rJjLz517dTUoDr3jmaixc7VRQuPbE6iUVjMj2ga1u3mxxubThMTGQoWj",
  "key10": "j3ibi1379nBW7S58D3AA6xRFqFB5Pj9AXz972ndKzyma3aLhTbvvwrLNRYho1xPeNwyLbW3w97yj41unHCHGzAZ",
  "key11": "2jBqWR4495N7WxKsitjcNzaydLYXFJGMVTk8JadobHDDswCfzrWjV61vm7BnBkN3S56W3tqt1ytUuyRxZyGrN7YE",
  "key12": "3eHzSje56axnPQRwQAqZSsMYF7mS3vc2wmtcE7ia4JZmu825QXBguXHnNsw1BRktH8brTWJVDTEWsALDi171fbJ6",
  "key13": "iSzo6oy5XVLrFVqKPTxw6Eu9mwPyf6U2X2AWLTXpAQ4D6f8pVMqAn8MpwvvzNvcGJUEqLDR25fBNSMbD71PMHke",
  "key14": "4cDyy4C43tEdpGC2zaHJMKx3TDUvbVD9sY8mVd9KgiWBpMLVZatKjVgEJmt6H8kTWb9HCqynTvJs1VVQv1neokT1",
  "key15": "JH4scJZs6J2qspkGaf5kCK5Zd5UGuyagrJdrJMiMEEbPUk4MkpUEVcoWPM642eQadH7qqZumgMnx2nVw3k4z3FS",
  "key16": "4gYUPRpQK43jJMzNg2rjRuD3Kigys9fgKhhcTH23pcg9Ucv4jLgR9mQDr1MVwKnjRCJZbyK7rBVMQQWPw2Zr1esv",
  "key17": "27thVgPshmuiUWdxWfke7YBuYcfbLKgfZhuBvjLwYEE6AdyMb3PFmCBJw6Zi6EQjyFFSDys8bCAaBYVMygNQD5ES",
  "key18": "WJdbgjf1TZTo43yfvv3PDp2Y4JkHWGbJd2z3AqW8d1PNxX5azVQNDniHyHiQCgQjptqKEWtAFzddXrNKZynfUms",
  "key19": "4aUEZbU9osASgLPubvXNCrBPCqFudo4G9dZ81sV1K1uocJqUBsYBUSUkEPNjg9GJ82xEoYcvmUQjkQPuYCRhtHjr",
  "key20": "5VC7Sq86qJvWZRUo2qJzRUC63AYnpM2taDtsSuGJ72Sv4pg2UGSks8D486QUaukmCefPnNdK1pDaQVbp8Hzbe495",
  "key21": "3YQ9b4HaGjJkt3PjkGJUK4RNnh3gwch4Epu3QLuSybwYFDfSJE82DDyGawoPnTp1JAX5Bvpt14seKXA3mQLtMMQk",
  "key22": "52g4YvCfDVACptL8XA5fkVNEHtQGUUAWjEPz19WNigV71qkM3QeKkuw4kxMRhoyG4H9y3Wv5gnui7kaYNMWbC5xS",
  "key23": "44YnWxfi8pn7pDg5KV93PRfgKopPPMPNZkbA3oC3YbQsTmFtbTLGwefgn3RrujcrGr6JhG4ZgXKfTjXCDzM8sQgB",
  "key24": "5V9fQnkL155u4Ys96KVuKmcziKgVs1fF3Ff77kdGnC1uCnwcraYgK6yPvZaDAFKaafc5xuq7wtEMmgi3UE2et8BM",
  "key25": "5whLBiZ3VfxFPBwJDTqXP6QUg3R9vPrEJ1yFCaTL6zxREJjsqrfcdSNn7CUtt2P5DiXNWzUMbgN4wkohio7g4BWD",
  "key26": "2GSMsadBbnGvs38S276UgY9E5n8K1rAjazrKAzRB3UxZxnKXWJkSnYYcpwJtP4XKokMZ9XMxfn94M38VQLdmGHvj",
  "key27": "59aoWw3iLF7yQwNJTCKTECuCUDBWpSe2e1hBLC76vYHsMeqxx9n3NaEoAe63NqswHEmk33eh5wiZ8sFdnifqXZ2Z",
  "key28": "1xqGbZ7kosXkJx6C9QKjccAo9F8Y9aoadXHRTY68rkfHRtbQ2bY2WpYuXjCzuzLNsctsUGShrTSa5NwKLtJ4eqY",
  "key29": "4bKk5ntzohFGj91XJNccCfRvi3xdkBC5Cws1BTGQBWpgfXEZ5U37HuDLGDjT1UeibmNYVMm9a2Lj3YfF7QPJopDA",
  "key30": "2XfTHEVPUA65AUoaGaJfPV9Kqd92byPKsTeNQEk1tKeNVwG5K4V8m3FFDrGjyv6jXxM8LH9Xotf3nWzqb2DJkCN5"
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
