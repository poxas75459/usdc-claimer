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
    "5Ao33nd5cfRGTMW2UQdsJPgDpGdZne34jdXpWbsryLACmnYYZvXBNMJ1ct6J7bZXLkGdSCQRnWRtGEdQq8gDR4Ga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GvsNxVLfTJuXSpELobAJSnsUMQZzdohtHqBv9TQ8tKi8kY2L73pi7xTQJE1gEsDYooGUmg6q4BHBTkx7EjkiZG",
  "key1": "59cbZKVS5ycX8jSuJWmm5iYJTGE4dPAh5XRBHiZSw1KzGGYSuYM4ajqPfPByPEu8U77zKqgy9bpY2Zn5CkdCRb4c",
  "key2": "tVN34dqvVTLHEs6Dtd2bJdAVUjJd4ihfXJ6gR5CrcGvagJcYo3kAgDJMGnfdM8SYYAZNV9Scgz7Qir9BNurEaJK",
  "key3": "2f5W2Gt94nMo6UN4h2kmEfxr2XbLVS8oi85UgxGzw9LZyYHCm2fEnUWPRqN8eRUkvQByn9UAF1FUwUDKkMja5dsi",
  "key4": "29axtTcbNFXeRj13yd495VbmsoL2BJS8SbgsiXm3Dw3ybtkcfcNcN4kGNA4b76GFAGQFv9jmyNBGJyYT1WBiYU6u",
  "key5": "NSq7V73ree4JjsHUj6jpnA9YhZbd2P39QAGpi4Kiy6w1KCKVtHJF5TVFSYKvjpFL3beHc2GnoheGtKuxSx3Hdax",
  "key6": "5kctZ8ZeeqhshKcLxuGWdstyY2uYiqMtEdFex3MxSkcjJZFMdK2cXBCDXL3RVryS1yXuHzQSN5z8f2tHW1TzsmCe",
  "key7": "2Bvnq8gZa1Cc5nGPD3soC4ikbMf5VLmwHHx1uw99jL59e14YVWXRNybXzWGKhaFMHnWC6M5hjkEH6zQWskNW2JDy",
  "key8": "4gpoqdcDtBVARSnnHJwpBZQh7cy9Ffz4CqKwn5bJTGdDZDUcp5AZrWirEPpg1vcboDd2nHEn1sVwPWTJ5gMU5ALL",
  "key9": "3as2C8UvMydKzfCxAhsXq3wtQKFwAmamS7QSkKjZAuTWzqx65MwH6FJn8C5zXZjJLCccbZ1q3bw56tQvNcQQiBAx",
  "key10": "dbXRfPmdp2ZKUpXWfqHVCxntvL3cPyiPHK9dZXWNYSXhixXSCQbKpYgfXx5TRkxMsbq9qYvuqkbSpLtuks9ytVk",
  "key11": "4qfRCY9HGnkJ9EzzgiXSoxYHtyZaYjC2AjLcYoVshSc12FENq3CmfJxxG7UQJUeZCetREnjYCUvftUqdizgDXDG6",
  "key12": "39JWJLZPYqKPxxGYgBbw3t9TEwot6y6UZubpPkMjrW2JXXawF1MqQS5EuYw64NwUC2UTtPaNsF2ayn4ToueD9m4n",
  "key13": "PeScPedZjB9RK58fXW1wRW63gJYSTUdyc3g8GfVwxDpXdRuXTKX4KobAxb8UsxPjLyYwb3aLFhCgsW8G85guQXH",
  "key14": "3G7pERP5Hr5CSVe9Skhron1JiGudbA47ZCex2cTsS6jrTRj5c4y39JbRkafkXDTtvoZ2LzMwYc9nhBF51Qu83G9M",
  "key15": "TejMeRQaXLxAenfTvtw4iLSjdt4WfxY6wiyT67YJvFipbf94dNQj6pe7bK7fah9MuUkPoysTievapG4ukwLF9Xz",
  "key16": "2CpYwzQLWuXR4MuqZZu9xF8kca876BjhBRLECFE9nh3gSUbrycwndyWKLjVTzdEzPQkZGrifTtRupK3tBJyyLRRC",
  "key17": "22CNuVycrBeQY1X6kABb2vEKbEShBvfSer51VaGBH7gj7cRJQbhFf7XBfdakRYBAmFm6XZDAFpVmcRPib8gztDXd",
  "key18": "5edkfptwKAq5uTGeon1TvbXGRSA3WKEs6YvvnUGp9CRBarAJzB32Y7DF8vPvh9MiVvwB1gHFUzCz7qnDVCsmPoXA",
  "key19": "3RDonGvdxJq8mtUHoqmkyBnfA5rV1jkMiU9kJdW1kPLjGmcXDd3zUHMEtME4QhtptsVfo3HdfMqms4tN7vXqaUZx",
  "key20": "5dPpKoiheGfJjkgezUR9jziSWhj9wvwk6dh5SjbjNSD1Ly5uVF3HnC7ShAff4WoKcYzEbD9uBEXAcNSnUGkaDJni",
  "key21": "o9GNXuGN6DTDkToqAip8ezLaE59qWvU255zSWqApaVNenjA6GrL9Cz5HbWxgCuLhuFsfKRaSk7F4aN4B1kPqU7Y",
  "key22": "2YrLRpWwvhMZ4GdgaU5w4Ns4VvgHyHtqNBTdrNYeL3ev6uig6haCEnuYf1DjF8YthxkGQpRpjXsjbRUUJJhTokiG",
  "key23": "5vvicpBgsmXaPtLGVLYhpQ6Ed2mc36re4Sa8gCEAQ8UqhG1x6k8xDpTiEKBKUtQ6rnmCpUZAoqsazPPxVPsnMABq",
  "key24": "3fkKumvfefVd2Cy57oEhmRD9mSzU3zuxSmaW5okUHydcMUJUF1jkuwVg59FdgXyNcEK6UuaENtX7mEJv5kS78JiF",
  "key25": "2d9xJRxZyquLu5M83MLUXrWpL1nhu9xdvinZ6n7b2ZgvKqEL8ig3nk1zBu4GUyyVvr8PLH8oLjyy7nFH3m1A7ksp",
  "key26": "25CGgmZFJCoUeN94FmeW41FZK8jk39Y5mZwrAok1BTFBtfVQteZSAnSNYZsfBaMkhSvEfV8bMye8d2p4EYuv6B8d",
  "key27": "2ZcdP58JrXt7ixrc1UZY8ACJ36zxm3XGajnYH1Mej5AUTk5SPuqZGNqmAebfRF36qBHcPZffNaug3smXMf25VGPb",
  "key28": "4cLbSSHaMf1KGKtoA3db2r1U9iBzNDohn2pmbDhsQhPmsQtiqGTDJgaLVPA7Lku3BbQfYyF8LZ4qD5dMmLPFzj2h",
  "key29": "2MUnsZtoqjCDshFA6osEs3AMhjLqKggqKanKmMxJjD8Pnvno6Y2ts3XL3y3oow8bhGNo65ibiA3GJFogtGMqntpG",
  "key30": "3YHrWwh3M2rfAYRWfRBQ7vbJXuGRrztYhxbxyGJaupM7KvTP8YhkMZb1aCBLR6ZAj7buHSibcN8MVaHQVGXemtme",
  "key31": "2srnoXcWAyYryNGCvfzkMFPEkgytLq17h3p1HniAQzuUhXPHGHonvRueSABgaiBQ66MHgHw5rAQ6VhC7HCuAnNed",
  "key32": "42zRzAMLT3Kvnq9BGBN3BhKZ3Dr5ZEB1z5uw4SFZ1fCmVG8StUkhRV1TsAJ8UhsXNdqgN6EtDyWv3jSdKAzQWyFJ",
  "key33": "4u2vwDsh1f14ddMZkQgVC7qZBMzAWDwpmsdKgbvSP9Ctr1q7m8HwhTZ9HR8MGX66fjCn4utFHeKzhdVDGwFRRgjD",
  "key34": "4KhPohaANW2aXVyQ9CPqeXktFMhHubUjpb8zh6Me1THTneYdCL8wTAPsfYfEjLAQ1ojYBWFeWbtSfF5fgnqQc4aR",
  "key35": "2MRQaiHjX8xkkLWrzo2GfYvDtJLuSVgB8874UsVW1oQA3bKeFbDcegGYuQ2t3bvptaP1EeWnwSii9xxFbcN9xtzM",
  "key36": "264woB9fcvkBBk2P7sAGaq3KZRWGpFjX1FHugmWMJewg22vCdfxwBhDoWYXkuDUepQGibBLpwomxyhHRXw6E3DTq",
  "key37": "392bznvcsQUKrquhKxMio1nGo1vtvbhh2QTUbMcAVDSMJCDNMfvUJhp6nUA6RPsBbc2zmkS8H32WbnhbLHiqNzrh",
  "key38": "2c5NzSM1QYbwLmsLsV5r2SV87zAFqUf2GwmLogd3dtijgbN4WQv77Psr44chXwsRPEDGZsqM5M6w8AH44Vvy4e4Z",
  "key39": "3tqVfDc7eC7PW84iXHi9cknxpTxcXqH79GZxwcZY8vLRm7gVeCnG7xacZepc4KraJFfJuuCGDZLRDefXuTfoBNzA",
  "key40": "5yjASnVSgGutaSxYSfpfMhXis7UfG4A235Pp9LxVwk9gpTHt6bbmjP4PSebn86XV4Ngs49UzTFgdBLYXJdAGMjBd"
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
