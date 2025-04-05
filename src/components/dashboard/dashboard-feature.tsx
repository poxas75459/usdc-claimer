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
    "36wnXrPvBGbqZhzUGPeYoRyNWKstwbEqA52U3bhfFUm8xrL9iGKDT6Aj3Vu21qMALu22uBBWjPxvL3NfWrjgkxVp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RTZVh3Zwn3164uXiSrN5RL5boZypNS2yoEHhRpSXiG5A7TsgJPpWa47CyFisjYDzTLwgJmkE8Ex4K2SvQ9SYjzx",
  "key1": "L8yzWSXBRT6Q3M5hd6uZBcZFkKnHPrqQ3roTzXpMAwAJ13rpYgUtVEgTW316iSctCNZuq8XkwBTDT6343qqXS6h",
  "key2": "4DjBd1KBDCK9LkPaJZhkmaB3Bj6UuE8zKpKbWGZzDVThhdzUQ2QjPPVweKCZczZHUDMv3UGjHeMBoG3wSGAXTVtn",
  "key3": "5eFdfd4E4DmGSqugB3eAekHvLWrtGGGPuR5xdBghkiLtucwTFDPYQjFeN2u2fdbwge6hX1BqrCJvgmEgU1pDc2ML",
  "key4": "evnqnGUzTMvJZcJaLPMcaeTPjmfr9AeriiTB2tudT5YbrWYVm8PRhhp7w21iJzvgnAxYMUe12sPaoKCyHwPJygg",
  "key5": "4YUgTBbWaeNMMwYFfs59RV2t7fFy4Vj6WBRkVxqRByRK8ZN46t6xTW2TrUf5FSBFwm4XZS2vpVuh9BgzkoWZqTDq",
  "key6": "5M241Neky6SSKf8oTsikyhXpLFXFZrdD9bc6A1J8TirSZkV6jNFNSVKSZZRk9yoQF8BhNGKMBKyo4k1o7A9wQV8p",
  "key7": "26x6sRHiMUgbmj4w9RBg8sBKteq67SNT1U1zFFDfCyZAe3bmHAtVftzU5kRmj4CSyr2qFY3kmzJjVjJDaXZSHcxa",
  "key8": "3JtiHudfjCM7qFtRJtCfjn6aLZ6GMSYnA8u18it2E56SwY6JehVSZvXHjM1aYqfbs763mF6Mm5keByjBp4KS8cd6",
  "key9": "DoizjvcW6XyP3JeWPw5b3Bgeh5Pz5y4Yo8zibybCNNrv4GqQtykBCxpo7rqj4WikM3ERavGKb6gJZypNjDbNQmf",
  "key10": "5bdDnV5E6i9SVpTy5ZnQocrWmJFMbCDxeUKHVavLoZvHGjeFwxpaAa2UrKjqfcVPicRdqQZCJZ5rPohxUa6zf5t6",
  "key11": "2UAEMAvThjeJE2h3vdn1XP8HkfkK1DBkBLmfV3sWG6RVKF4SmDWp6tRbyLtmot1bnkrAzna3R6ZT59YjZMoukE5Q",
  "key12": "qM3qFhbjMqU771sPdtzfsfGRQdKvKSUVJcFmZEe5YVSzd6MM6WosHRTDFJDBJ5DuHtcWWQHNN8yUjHwTiUbChst",
  "key13": "63vsZecX8Le3HczPt3SMU8EiuxWB7QpRhqjVK7QwXcnc86bifXRwJVJ2ANCZDn7KRx9XSsnSVL5GEd23EoLKCvxV",
  "key14": "4jgKKddkMEiGkdSBg8XE7vM89Nu4MqUMahBydGeTfAdWcxs9bSAxMpdhKWFvVGx2SXFHR3G1AdZMz7ybDB7bxrs3",
  "key15": "2Eo2DUYHJaMH9jeWjzZbQ8o49XxLySUu9Zs7mVb7mQRx8qmQyQMNKPPDTy2HQyJmBwGthF4KqKZN4oT3JBWxk6JG",
  "key16": "vipvshfKBh1aCnbQcuWrfAHnETfez7YkMaunv51MxDCrsqF1hunEbbPEpH7TMiR7e7BdRCxbLhBfJ6haWQHnXfW",
  "key17": "QDZyNU8i3VAACYyZygbFpqqAafbSjA6GctHRBA9Ztu6LFYWu1crrR5r5Wh8oozqyNXzKjFjyWJAzEVHqVNBXQFs",
  "key18": "33TTUHpCK3MuhM2sV7Z7YErRUxGdqiw2L62Y9FHPDq5noFcCDG35uNTPx4wW2y9QUWtTBxRF1aXmkJHfT3qNouoa",
  "key19": "2VJzJxqrBqcgQ3apK9U5c13mQcWy3mxAx2e8uYw2VGEYtKgAubckGb5H9WX914NkWMdt6hg129zbb1kaHkxGVNvE",
  "key20": "2H8tnp9GX4r3ctTbrufnxBzZ9MdgJNfn9K9rJ24A4xYsxWZPMTsmFLyX2ta4Mx8e1JRkDpwo4EwGAcHemdWiC3d8",
  "key21": "Y5FEWDBYXfVN6cbNb9qx9vxbhYdRAbPQKex9fHjZ1jN5mZTUiJu9isKndNdDzphT3SDwsU49t4Kb8CR2KrufFv2",
  "key22": "ZSS2Vy1HHKhBvJYeXjC6HBNsCYhpvWJc252JMLMb2qqqiC5E1YENnbnUsdNqYkD6WXPANxDfnDFz4C7WY6YKUR4",
  "key23": "2mWcL3hhUkpGQ2jNyGQjQSnCtQYv96tfh3zZUVQ9XdeSAazBjr88aZHdpvrhWo9aAQuYS46dJTwopcKbTmmqNBwX",
  "key24": "3dz9atuqotQiwDCMwqA5m2U1SMd2E4ep8FTDgdsL4a8Z2rvghRej77Sk3JUDFFsWKizfWmd5JsysfnvpS5PFAwfv",
  "key25": "3oAi2J4VMaogvYJHAembdR69qbHU5MNcvRLADdBhE8kGN4dtoE4EAd6AsyzP1sduiotNz9ELEQt92f21oEaNuVQX",
  "key26": "5dvwrpvWyencw8eGygceiK3jqkmWihumWr89bjU8tninVqNZWi7zwmBisZgcgre3HYxyKrdbcdeFGrzjW8nwmNjJ",
  "key27": "4fohTnhRvFjXNLvg4Fo4Ad9kgwCLuZyCsC2KxB6fmqWbBx3MHb5TpVdvbywM4oj3PqS3z2NUddkmkFJs6tTo98Fk",
  "key28": "uSzhGeLH59VYY7etfCvxxWpevK3mv17XJ7ESLYnxgd172TAy95Rr3NaVE4nTnTDi5qHF4e8RLvLJXNNxXcQupmx",
  "key29": "5PQ1LJkAAVYZseJwj2ZieKhy6qrABzZ7t8ERBQgEw5jrYzHbAVBVLDdDuKpEWrZAqwbMg7Nah72HRaeqQkeq6fje",
  "key30": "YwaU28s2PFA3EUDCoDDkn7ACqQFtMAdqb3RF2qyUXUrKLijyj5JyrL5pEnVeaMkD7H7H6eLjY7RAjLjXL65vZ7z"
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
