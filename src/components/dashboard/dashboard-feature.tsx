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
    "2BK6N9TudyakFyjYq7SpibL3xCuDrK488mLWGWCHsetNQpLzezvhhFFoo6pAv5BBSZ59CshEjaNQPJ1tahmrZ1Gm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xf9AMVo3mmBDEU1qy7zzT4Px8h8yfDwLJPC976SJoWEWdQ1qfmHvThy1PrTvX1CTGboLNJ9WCFHTUqT7iYhbeN9",
  "key1": "4zCWmYpku2oLzL7eSvFf7jT6jGFdzchfmM1xnBLqP5mFMwT1Vu8APZrMD2XoxWfFDB5K5R1hCDcWTSdn8W8SdMXM",
  "key2": "4C8mPrAM5PcarYPuR1SYiViTcPJaftCox3AgZMe5jCRJZsPti3wnwTZpqXWJ4oXKTc1GiJTmXa2qWJFjAwjiFu5h",
  "key3": "2kQmEQ1wUrxiTAxvRbgjsVmWZVxyMhRmyE4egpzz2kwkeME9vyJ9pp9BftWkHZAcvEpKup6GDbFz27E9jT3YckDx",
  "key4": "3Tr68xLqwRuZ74nwY4f1j5J1beUcD139ibhY6hvYU72UuCzk2NGtQdZ1CJuEE2CL5QbdGD7rWYFo6torJiP27WwE",
  "key5": "49gSQQUoccqLNfSRmQmgtqxGBoHU7u7o7QaTFP6BqbFBoKnYkhE1abYLRnvQPQCHfiCXupHSsCF2CuLXMRuahbHM",
  "key6": "4QRHMYPQzMpDT8f4TxPxA9C2WCYsarJsWepLiSX9mPur3YpCEPj6JDme8MtC6hUTzSPFJEAsUJq3i6iQ1FdSbP1C",
  "key7": "3BjFFmDjmQyxni45KpPJQM9kL4XtLRCJWT1UrGqSQ6vXsbP2MRhTw6sgmYoT6efPeU5PUbAfYUTvyh8XpFhdmZav",
  "key8": "46ftQ7LWRKfEPJ5XJG5Pzbs2NjADDswCnqT5QmaCjrXwHchumVpJirKHGXU4Vtj6Wuhd1Q3YUNit5ep5zcfRstzU",
  "key9": "Whryz3XBYmsCurupjNgCcn6awQNuWgrYv5ocpC85ieoVUHxnmQMzc5foGkAb9rwQwczgybseJPkTtGSDPA5AdVR",
  "key10": "5jCCp6of3qpb1VVHA7LXSxNAgsKsTEwV88gwiigE19g7v62BQfg6QE3uYbSMbPcPGJJgmb9NaMZPfrcWc1uHfC6B",
  "key11": "1bccD4bP65urU9h1eZder4JhanGRoVJ6vQTwE7WTpQPRt7ct7R4b3GpevGPFYCXT2SFuNpR8U8NRg5QcSYBVLEU",
  "key12": "3HRmUDgnSPnR4WKHr1jJBnLR1yDPeYgMgyf5TN95wp7BmaUSPC1b7UV4P7bjTXorokuftnRsBUHE3ToKJKiysaLf",
  "key13": "2zdjguZGvdP3yShDtTtLa2QjPiyxbVajQWJPiXjBsKj4hSuezKWmVnKgSTT2JE3GMb1aKRk2PkrQSMmotUkjdWVB",
  "key14": "5tqdD1yP9nsm17yuCSa1J54Dx5GGFA7URGnAGJQ2CYkeBFQVhmqRyFVBZCcJ7eJ9imKxFYQgfHDqTQAtiZ3NECsU",
  "key15": "3rGihvTK4rXXxVZJEvh7iwyUYR19Tf7DuLgDZaDaeoUjmke7DZKLS1UBtwe26HDeA7P5NJcYpBmfcuJRRxbGLitf",
  "key16": "5VLJxmR1eDJDUyEd9oJRSycZUrnxP2WuuUCLEePPKvskQ3KQbvWyGoNwnrns7syjwPX5Siu3951PyUb4Pu4o9GAp",
  "key17": "3f3hjUJy9EwthF1jMeaNnLad92t4SdY4dx7HsfkXUHvccxQgFMJbcMbvJxavMVb3zDrJGmH7zJnS9gyBWU8GrYPt",
  "key18": "3RBreYpALN2d7jWZwzcUmyKCdabTUfgbNDnRUPekVnYfDNufZ5LPYjmxksvqEje9vuBmnw7yAnjSxD7kVRWzsH5t",
  "key19": "4BZwEeFMHmxzqbvc5daC3AV7rXRECCM7armzE3ukzoCbjmYFq8Eb8Uv43FxD5He4bp9GLwicC34vHQKzHEdSkyPE",
  "key20": "3ohcjxqDQVZCwAjJojfDB4pD4oAvqrsMMXvK4kTYnMXwEjNqkQShHjtmNbJX9kb2xhGVaZxTbpF4kToiXG68Ag3E",
  "key21": "4DLKPAtWVbfbxX7TYzDR1AyNAdHTcpveFdAEfAZMmV8AKg8ALR6WbrZmb85p5s2tSSr1NsmxG9q9pFt5sfC2U9bq",
  "key22": "64UHS3RjqosGzUYQ4F8GHVt3Ts2p6wZdhQRn5a6sQ18PTgXBXebCnnm5MKusg7Kii9to31UPiVTBBjZxzJPhqypX",
  "key23": "3YfDkbryRHt53f7Fm9CMyMAVqs5kekDnp1aEueFZk7KXACD3GjXPv6zFEriAS69oDC2BwLPsTDkZ2c3PUrqYn3ZB",
  "key24": "2gCJJT2Q4isXYnyDoShNNMjiBbKSeN5MRwChzKd8RvxojYYxETjrAFh6LU2YLLmiikyFBN13n6NZyT7n6XB9JNKr",
  "key25": "2jVShbFNpqvhoJmAXDHHQHorDBaMu6kQwPmsnZHXwGN9UBLXY8o6uLuaJNkawyYMr3HAzuoB4s6iGfy9aVF2nKdR",
  "key26": "53dHKqschazAfrRKfqRArswYCUmhNW35TknMvUdbD9VteVzZy8jBSzjM1ShJpWwKe72ywLUjXrXj1JFoz56zVDkh",
  "key27": "C7gj8CZUHVYae5WjGGfTQ87AjEhqdXtF9LHwRoKvCvJ44Lc6czvNLGtgDWYKSUBWsf5CZmanfwnHYcLND21wdgz"
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
