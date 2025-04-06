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
    "4s27w6ofzPdM2uC43RLcfzkwkJGZQER7qnVhceRtTaypVLzK49NT2Sn57hBS2i1J3SpexBZzjmV6Z6Xboq9ZZsgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22iqWoqpYrR6tMzrzZhRD8eWNDFtaBk6WkUbVCxGfgdBnoCPv8WqTrBw49hbejPKcPhKXUd4CsDUJwKG1Tu1Nweq",
  "key1": "5166NURFyjPyMJQ6qKDSpeeH4jRetHedSMQzCBUTJTFTVh7r8ycstZJnRbreftwYoQ5G333zumw71DjB5uYvKwoo",
  "key2": "2FCbkYKRkxUQeSNM2LwuygtTyVGgRkTocr42GCEEy4HQkBnvheTZjnhtBakzX1VhAGoLnvhay97GxQibmVzZRZCY",
  "key3": "2anxjXTfwqSsXeMXXA3q4WxuuXrVwKe3pbCZaGDjrdygTDnRGVcQaXd7YBGpHzK9WEgjYAzshAJDkkidXQMB7HFc",
  "key4": "3Z3xTZeytjpk7RtsjN1EpnLAc1q8jDfGoxV7W6UwBARNbzNALh6JvRkcuATT6LokKFVW6H7zdPuyQFWN1mkchPZn",
  "key5": "C9axhQ5W9ZL2jYqS8oqmzG8g8TqiwAwHWtsJW8yQFwY1aHCGvUbyU5y5rvejzGpKzyPNYyeR2pfrBEMrXfBoBHi",
  "key6": "4eT9gY7rrGBYyWz4anPvG9jcHfqR8EDfso9s9XKFnaVMpJKNMU9z4EzegBHMxhDr5gEbq8BTg2cLqcy7MF2JP2V4",
  "key7": "1q66UdLSc3JjrMuDAJNBkbUQdvSxtrEW8EqPz4yRBrUBA6UjMaucEc3d11nPtKTQyNWDdtTfKcLuPukhXp3118k",
  "key8": "43My3MLWXX6rQyQM2SBSXWBiycH9U7w8X6RujaRbfBwPv9TFJ7svQ9Vb6y3Q1A4oJCNX6HQNy23UoBVuu3XgKuz6",
  "key9": "5zujn4Cp5kyottpGWQ2cnV4Q7KP1Baj12WxczTa5no5YUfsxxGqifz3FfiLEQKXgz6GyugtjcYAYJixrRcyEdCx7",
  "key10": "5ehs5aGPTzDtvRezTRWUptbTwgYLQ4dVRmjsoAFsx1Zdnv38m5yyAo8GmahfkQoa7K1kMRkhY3dfnPKAkjg4fJyA",
  "key11": "5VPvRkEXcu8SyijJEfC3GFGkuKDvR6KAfGC3STs7JAXqKSNLWggo2kdu42oMsmtMKiz3NSes7RaVamsjkvYhYorY",
  "key12": "YRnwSeDk7WFVoKV2uwmBRTDwcnaKrkeb6TvuewzYDsSgnfueYajgJa2mTapFoSyreHWsse2xCe5tDZh58VbPXdk",
  "key13": "5H45SoksqA84jQXfTjvaJ3PWQE8doco1yYPrzKgdMxry9i9ToVV4VY3viEb3gCZeBKa6Gx3pzEHWgLD74o6MrYKs",
  "key14": "TgpE89GvNAnHSPuZtJSKBXKcHVnguN8yQrxS5fHbLoKzVLyyngjn7CnKJUzHYWYVFUKhyQjvdBt2myf9uZNUvcu",
  "key15": "48pxB4kZzpDyxULNJLu6nzP1mtTjCnQ7uYgjwSXz411C47PiaBfBLH7Xe3Egb4bJhsMHdfn6peiDDNmEcZ1MHqfn",
  "key16": "5dBqr9bXHL1fYDYDcpLwjANV9WtZzkCdeYNEr16iKoncWmWUcz3nH11PcFLU7PVXva4AJbTnMf8V7Aszgjb3cpdy",
  "key17": "2Cz3X3Vy4n6o5XmsMXwWAz8ma6M6QUuoxnfGwy1cDgTb99A1M4WR6U5iokddyC1PdQxiWRz6MAjHftbC8QjHxZsA",
  "key18": "4V7Vnri6iajuCPsRLPNKoVSiKWh3QmE8ifmeEUM2drqALtPQNnfwYdr1ijRYPKpk8QbmFV5R4EQAv4eSQQdfFgz6",
  "key19": "3tfZVKhx5nAJ8ARMkCiRroFrWAiit6ViLCiUMTf6Q6VFGPedobedvdEt654XTBsjdLjRg4FyiAinRz1QSWR3zfs",
  "key20": "3Rh9uRQF5VCJSnwR2GmDZrswXaBBSBtHqPJ2ttZCzQ47xDFyvQGbWy9mAVhqtafERpFKDoG9oh2zTYHnZ71Nms8v",
  "key21": "5HRzD9Zy7Jm79JjYJXqTNiPgLpKYUucGbH7Pcv9AuRR77w8esygFygMRGTCh8vxHbqN1sb3pjJibQeAmP5n6QX5r",
  "key22": "3w7ETm1KjGmJHoSPPHw21v2QPYLmctrhh7mei4wcEeDsXpbhkKUYosAiW4kUEeBR1Zq3eg7aURz5m6PwsATBRW2o",
  "key23": "3VhwX4NyFPw7smmwvPr32WyrWks8BhPq6gjeDYbE1ojtN9yu6cnT8jPsTpLzxZw1sEDQbqVAFkDPhWzRQJEGspxw",
  "key24": "3jCWHQTrD7AbZ653F3mmTLyxdqFv4TmcqK2nmjLuHmKwSTyPnoQZT1w5o2i2FveuHi129HTQ3qzLRGQHneq6aK5K",
  "key25": "RSxyrcBHrHfNtQWFh9Rbccdkh1eS2vgjGfQb9vT3j5yLYDuTu1EauZ7ZqHeUVhUT49b2Rk8uw1uydGDAHSQT9pW",
  "key26": "3HvStxe8SekZPY17ZxW6Ui8icArfgdrvJyvCGRbLrfbY8V8hMVu1z7Rjz2MrytfsDWmkhGrg6azDLj7ykC3QDifM",
  "key27": "4z5ZshXzzpMGrMnGTL6UdL17sWfbHZbDbfxG5zdsvWqTUbxts1DE78NbdoCdJ74jqTtuKcu5haS3UcKZXdnNUMpK",
  "key28": "5nhdXgUxVcC7ZtupYMWt36nnrnYDK9s1EvsW8UzuJFFRERCRgE3DvMGA55CY7M3PHQNss7ZMq1GYiQcWNw53TtBm",
  "key29": "2C5TsyTP6NjzsBPmti4PZNWCkecJpN3aegQTFsB2MXBni15rytn7DiKCZecpb38NhzWpv9raewkveve8TCgTX47Q",
  "key30": "57V1A9GTUK2r4NSfmi7VoBFGFgchqcwCkP4oY7MEhc4YqdW6FZGCtJ6i86e38BJAvV1m19qHKMLHhU7f4HGBWPp7",
  "key31": "2fcfeLaUtAngs1rgSusSx71KkLxJj4mCiMgoCNy4pGkhN8898taeVMdATdXyexu7C2uUjYuyaTmWe3uPrBbsmMT5",
  "key32": "4h25egUPxJ6CMs3ocZbqurvKdT5sPCgiJZ8Ur8qg69cvfVbzCMdn56UF27BKWXK5fx9ijBsjYq29u8NePgwQEHDj",
  "key33": "3xo6Kj38GSEcE4BRd2vXNxrgv5P5Ca6ijpe9ES6FkzoT5nUbpZcNuxohRnBgwyzVD6wGgRvDAzerXY6gKQmAHZ3c",
  "key34": "3eZCTEiwoc87AR88ggnmDCrWgfnHS9MNtEikJEyhwNxM7b8acX3u7gqn3i4NHpHdx59UTHD8mvGTwvaHU9WfdzVA"
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
