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
    "2PnYLVHyNpRut2suBiWsBT7xGMgsyQDCwE6wqhiPuchb9GFwYhecZMfE37tKzec5imn8RDk2skbRM6nvVWWdEwjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T74TGLGRrM9SZ4VkQPMhZoo49Smj6QBgGMVwcs5JCtnNwmdvjTkyq6q3yNCjBZAnc5ocLupdLuWT2zBSBtd635F",
  "key1": "TvnmmU9syV3v9kTHm2HJfMoGWGX771KmU78y45AyPwBPrhjwJ2KJ68rTjaF5xipmx39MqmAsyThUGnAopjDgjRm",
  "key2": "37UBYEQ1wxrjPpk1PXCBtpzZCRgqjcyoQB2HNFFcB3ZvC3eDs6H8CUFtMsMVKur2PHyMAPnxBtgLSG7Y5YeRYH1m",
  "key3": "2uKpM1ua8qqbuV66YCj7Z4pHKNueM3yHKzdzMs119UzWRyRdYUBnrZVHgq3o5KKTnqRvgW8URKekKZMYXmScrbMv",
  "key4": "MNboAVKoP6Lx2h65rinG7gYh7J35Y5ykcJ5jy5Cgv6xaPr1SjWqWKbxbDd6VWwnYSSxBMKKmxFt9UoriZXvRxMq",
  "key5": "5Bf9W7hf5dWYGdR5N2wwPTuVFihfXptcmYHKYqF4XRtuvyWKL4TxQNs4ro1iyALPysJYTgkKopCHLzBeF5Xt7QHY",
  "key6": "3cD8s474q12u2sVezVGd5PwLtH75Bic8yWvSTuK2Xnh6Cs9mZ4nSBiG9yXeaPecnw7DyTWESz94asXMm8MW3eSPb",
  "key7": "54ULKgTG28RabVFGZDgbH9LRrVy39dhRqmYHz5jocFN6e8hBpZJBmTE7cNprcBhmykinhZrMc4ZRRQR9jN7qfJEi",
  "key8": "248QStsWEJZFvox1Fsqez6gR4EpAFKtyr1U2C9PuWq8QdiDYwW5n1GnrV5hbTczzFM1R7S3yCNaQsfQ2XXJbNT8w",
  "key9": "2YHzwGmD1oyNn9i4iTnhoNKp2Gnv9J6rCrdZ7dwFjvTAjAvsAptzhDtc3hKXUncBuh76GaQMP1tXMF7xrk2LiowK",
  "key10": "2dnKUC8e33BaMRuFzEJRvcvCneE3Q5GSQcRZ72oukV3uzhW2cvbkvdxGk6VZaeca2uzPxTMhscyv2QxN3zRZx1z4",
  "key11": "47jFwh31mXD7BhkydJeGP3fuxZRMV2yt65fKBnsZq1UJnn2ac91jUYc9icKhFvy5N76RSZ2KcQduMKxXpb2M4dKj",
  "key12": "kLBXLtcZtcoCjRNEvKWALYJzoQd2HD5hKwsfj6zviWkfAA5NynJ9ZySHprKQuYb1uaPh9rxfu5cjE8SMDHzu89q",
  "key13": "RmSEdsUvRDCDQ2LkF2K5bptKw9U2PznesuqG3DGUy3p6HDJDyZDJ9JsDX1in1WepKaMp3jLGDEa6yuSbiSnDZPK",
  "key14": "5vrn4LGjizyL6wRScEGgpbGSYNWsz3jFfF9WNRB6hvytfsUpGkGeE8UQzhEjn1oJEGqqMYGpro9JjMHZUiNPVvT4",
  "key15": "2xPZMj5zd6kdK2r8tYrSxXvtXVAgfCUhnPNwUvYtyCMEUcyNXYUKSrq58t9JiHnZThKR2tsKgECm6wiq7u1Ag3p4",
  "key16": "5EUEijvnd2RoMLhTAKKk9pEUeyMiekov5MMUNoafJgVRy4KeQt8JtRjhKzSGvDosod4mzghdonBujie9KhiRMEpH",
  "key17": "HgeQqtPfnnbm1bADQMgj3Wbq6SbQUVzAHs3YGikKVSvzpTX2YvBkyvsgrbsNChs5zzmfc7sK9jdAUdsxxMXj4jv",
  "key18": "5YSvQ6XeBHo2UMfAnmiweUfvBHxUqxtpa8ovbm6BgFEjy8JgTLaoTu47sHd1bUpTeYFera8631UrKCqwFenpwBac",
  "key19": "5xTNBG6dobNKmPVLRSZyiu1M5gSzRYTiSfApPstgE7C6PhsmjzTDnUkbC9wwK7RJa2YGh5ZYyYQLjWsGWJgSJtyX",
  "key20": "5g6nkX5cBxpxBWsYq6b1JSm6HjQ49HfZHoyASUArYzTEdpydD2Qi2X4HynM9kcmwikhFJ68W65taBEEBgeqWCiRY",
  "key21": "2Rf1Bp5gGuHf4UWNYHT9k4D9QRZXJ71zjKqBEPt72o4rZu6aRmbYpsDJyjQpZmTaNUQdQcz4Rjcyoj7BxYxapW7s",
  "key22": "4QyYPByCaAwF2G3Gvfyd98ha1yANrRoNrYrVB6GEN5N4VkjiKyguANPiGi3LtFrTjk5K441TCHzVk6A6mjubshZt",
  "key23": "4MDWvwqY61b2Mr6rKooPDwoiMejwouwsiGDH9zJ6ot5FHsjuj2NstchGe2SCDfk5HKBpbnVQ4cbwh9CxUPKNkazJ",
  "key24": "3mXtqGX9iiyCZX8dyoQGERc7KpaqmuC1wVbVVrJWV3ataJdMuCB94nPGrZR5vWJwFNB6isgKe6r5VHDYsNXjUAca",
  "key25": "4Zntc3GeAyPTLoB3VooTUjGL8hPHM64cdJ67GosjvRJ8BFX1VFvgvnRpCgi5ajBdfpn5nmzvqwdHsWmfF7ruk7p9",
  "key26": "mrzxVaF1dNWtA7UNaQmuyuHa5NZMxSKuZEkofZQBhbv1ST7B5Ah7ibntzJgdDGBkDRU23Q11N4Wwzoibgt3hA96",
  "key27": "2FG7P1p7iXbm7w8e4oKAr8F5FimoxpMojzHET213n9z7cpd6tySJQRc94qQKarh6A5PZJdUP2jjcvvmMBk4yJNor",
  "key28": "3eWWPb6ZwvrhprEcGKXsK4hTiQGVjv64N4dCUpud6hCLB9bkG4HngQpePYhykqKqxJcgNyUfERKe5Z2pegyf4iS2",
  "key29": "22SUYgC1vZ55EPoko3d3fHcjBgMLnhDPzt5Gx8yKvom4GC6MCn3Fh7tJkBh8gUC2ykJG32YbFLzF1ZgffJWeDWFF",
  "key30": "cEvT96mK4B8Udst9xkJBbDTu41gmuP4tbabZ1YcSGXuigfgAhPRizzhxThBSFnx67Gp4ybGkApeNNg8Wk4CUFtf",
  "key31": "5u6ybVXAqFaagYG7ntTGCUoSLAH6fibS7V3SzWijiwPzEumQEZJngJoq5n9Jd98RxMyCHhUvPUKLs7vUKajY7VE9",
  "key32": "aptqoz4Ei4dYyc6SAV82Ggw2d9Lc5WR5N3W7cQaAN99eCREwVE3C6nWuad9TayHVzaNqnWnCgyrTWcfyEQfhhfo",
  "key33": "3rzTT8xBPuBbRLS8fn7LwGh3a1pNknird5URs6XFHjUwDotqKYnrSgNe7HM4ux31Tbqf8rYX56XJskMVCzQwoPo9"
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
