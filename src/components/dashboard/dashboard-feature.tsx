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
    "3KUB8QaKVYTfnESrY8qNrQ51NqEe8Z7sdrzmaX5VXD5rRkUBbuYXgciVj4DP8aZ1mFyM8bpoV6pzLpUMtENe1Y1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k4RnSuQc8yy3JPQikExme9nRQwGCaYQ8LNnEkivswEr6gCjCySEZfptjfhTzrRh17H62VbUbHpUCz9Qtt2UjZQa",
  "key1": "1qHTx9MZgh5k46ZqPV5CnoS6a8YrT9M1jYWLDn9WZqWEdJTT71zHRMT5BH58si5dvoVjsscpkTnDsWJGPgrGCtJ",
  "key2": "2YM9n36r2CBTtJZmobUc8qFZjDber8qAJ9YW1xfjiRWUqKFZ6JdwoH9SHs1QF1Q5o6yKNrknYQ6aM5foK8uwRa1F",
  "key3": "3y91HVjZgWQ57hLqzWusSq25zxCrSU5kg9jJ7BmRb1i5LvvfNRo8hzbBdTLoGBycZV1uc16AxmhJMgQrW4u6pbMf",
  "key4": "ujqopTCfKsS4bR5iJ1FpvG9v49iZye9cZbmSsYFrAXmVBGZEsrAfcfekbn1ZvDi7tuB9gocKDRbT9sC5DKLVsh2",
  "key5": "fAyRZcBuAt88zAYWyQu2Ly1xzLn5LnSigjnGty5c82P7PkzJZhqzQovL5tmyZijPrGdp9bswhmnvwRpQmFRZ4au",
  "key6": "3TuK6Q2Keg2WL6cbEZkUV2gx1WS4WCv4ho5xJ9prKpbkR58GGgEtKirKZmcTXT7nNMv37Yi3n6YnYzgapY3ge98i",
  "key7": "UNkzY563W1ftiDLndmgjC6WPrEwV4bRYm3Emj6WaGo8X72iBMNw73NdZFoaw5P5St93KxNi3CoXV5rxJvpd9goG",
  "key8": "574Vh8UKnbYDXdEDcKS67ZfVrLgmSsskGy3GnK2E65dA9HLR3mdUEj3k6nu4S5KBR2LNMBxrnnxVnKJT2BgL8MKL",
  "key9": "3jbLsayJNxPW257fBwbBptwTr9Yi9gkikqT49C8qZ4SZhksFwWQVxrZTg5vPJ3gDXtyjK64j1eGLYphWr6GW7sWd",
  "key10": "4kG3V7Ym5kUzdHuCbTCX3mjydmGWzbcWwEvVxXY8aFCFJd5D9VU7HJ3U3CryU8EGf6UE7G2L8WfzbnFvgQK2m8yo",
  "key11": "9njSXKR4ct8K9VBfv6rAihdKxuF85dQ5P3Z428VunsMLaQzbXudMkVzM9YtpBPzV1ugYEuawyAS9tZLhP7csLk7",
  "key12": "4MBeweadakiKReUXDPfyxgErjkxvuyPJ95qY4BdK3B7KZ95EejcDdj4BKPUXUGcZPkmkMfxSn4CHoTLrgTe6V6zh",
  "key13": "2N5WpsHsYSPGqD94Gn5yqQpwnDg6igXNDdm9s1LDWwxxE9NL8HpGxT4cef39PqHkyMXr1kme9D1nNs5QDzCSxz5U",
  "key14": "5eaqhxNWBPVVu7wVTAtAjZNVAxW3HtsW8Ax6gHoqEWwatXiaam751WjcDA7zKTen7URCJ2Co2aY1nMqGLqaTnj8T",
  "key15": "nf84UfLwBpFPihUfWLCZr9sFqjyUoxYsffBi7MrkYZHCVKVe64jjQWhcTDmymb2Pc5VaVWw5GWfUWYKTSSxyLhb",
  "key16": "MJAMLssxusSvBHdAp9QjANFXhYDxmtxfogP3PVvuzkH4jUMWuxiFi7LkPf5UBHvcNUk3J8kpd3EnKow1SR1YBhD",
  "key17": "4XpoBbuJhjHNevmacVfLhwH3wPd5xywhYDQVVR3EaRBMdTTsM5EfAsFYG6jN4EhiPy5uhm3qX1V2it4GkEAbSad3",
  "key18": "4UyEaBLaoJeYXbfA2DdHNgf2zF98a5riBSLCqj7ydT4Vz62jpVTqPtPxmSycA6axx1rAU93hu5Xecx9oyvmZhMTY",
  "key19": "WRenMyonoWb7bcAKsgTMuW6G1kSu3PkdzczF8BNJCXy2cHNSwEvgiAz5c2H2hNNmhEYtZd4vpA2LR3tqFygYcRT",
  "key20": "5ejgdUNWMCvmxUrqMn6chJq1YE9pJtHTvdFM4iQbsmyc4tAJzzNTYpSSCu4cMuVVN2Sr9anhSpxQ1RBVwq7me9ZB",
  "key21": "2yD97nFJ4DfbZWZWZymJuPEessBjeWFg6GhZtzJGWDgXX3jmCrTuCfx5a7WaFrZ95ShjMREVEi6PWr1ZaTSp1cqH",
  "key22": "49ohTP4U6hFh6JECssbSvUZkohBxfgjEgMXmjKq3MX576ip3atAh1xiTFzuYvJYf8mamn9J51uH2xLuvW2EHqPKe",
  "key23": "5rzyd9MdiA85EYuxuuW33GXnN6Mu99e25UNDQ4ZQBAnhkw1JEQXK2KJ8HoA7ZrHFH5VjA6uuFQguNHttpsbwiRht",
  "key24": "4dJs81jHoKHyCMoCxzx38661c4ouNsvaoRscrwchfSr64o66ixG7Z1kiuMXcRz5z4VhdmKgWeVztBMwnLvMz95DD",
  "key25": "5A6BfeyCpVi7QPoGy1dbu37TeSA3zd5qpap5H2isEBWV5HdRPdddioUo5kjqcH9SCaUDkKHArFxBGYGFyuZuxZqQ",
  "key26": "tiy3X6eaFcLS8faQj5MhZo57Y7jGMhhsVEWVxEBqy13WpXLUm3Z98K54VEDFMZu7K1Ep49zoh234gQATziPLUGD",
  "key27": "492tZbddHsjkKWYVVixevqWN6keE8mBzrDRY3q8ijxAtWRL73Jna7NSbPjHuEZdQRBi2y8YtrNZagXE4P6T2Jrfc"
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
