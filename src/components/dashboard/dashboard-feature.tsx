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
    "5weoVoAKKRYz31pzLpUSh3t14rcfbjg7pf1aLZ5BWHiurYPeBXzfHUDhivtWDjQgQShQL5SjW5PDpp15ZbuBrjJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y1jFauFBWUnTTc4t7XpgQBzxJgT6QMbhww9dQjcWzDpfuKJ3y4kBZpSQrBLx8wYN9KS1KLMQEaNMvStCo1KMUjm",
  "key1": "5V2RPGDuqiyx52iyuphmoJhRYYvP8nQeMUnm635HXEjsW3DyYegNZ8ZhnNkwCeWTT47tW8mXQK4WqS5iKFa6GTKy",
  "key2": "nkLNHZTyuHKkkEoDEySf32BYT84Hrc5nqfhAZG7neeMEFFpjqawBJfrajNL9ZLorXr8wv54MxX2Hn8ctEx67C6Q",
  "key3": "56XzszJg8xBkwEbQXngSWsyZvEXNH2VhCc8kMCcZvkoYHUtDvSou4xNwvXbVHgeRLPrvsGXqNrShgn6a9zvFZahs",
  "key4": "32gQe9tZxcgm6oMMuaiuqeBmJr8g4GGRTzYF56jj4sQbhRLdrjHVZWbdM6DRU44EMLGaeSfgycds8Vvb9XKvST1H",
  "key5": "3wjGDTqhBSpRg2x4t6vVyoY2Hr7LEA6YHid3otniLegwYymZ4DBWbSiT3ckjsMHm3kcDaMnsZaCN81LUbAyMHsDE",
  "key6": "5tmx8Xt3AHY4s2SeRVENXLAv9XTdHU2NNPzueAs7qnaexigfcFKJEbRoPrNYf7iAER35bZbCgKm6mj5ixLVHPSug",
  "key7": "3YEYpeuq6mx6xEjtKeWmofFANTEAxymq3WiNHaDG8GhoyTazJXr2MQPXDPG1K2nA2Z2av8aBSXDesiQinhmG99WK",
  "key8": "3iwQ3Pa9JF9PDCYxnqWYm9JqG9F5yhxQDponycfypTgpLTkHibSzzQBPXuGUSumDxPXxEVtJGHig3e8dFHxDVB8E",
  "key9": "58SE3GQSpmcGs4h7npDnKGYxWrf2RZZFWEyBJ78Vh8pwK8X81Rka8NwTZHLSpnPxsWKDTQt5dziHSDQ1N7zZumT",
  "key10": "32Yyc7nvUPgMPCJzjwoKRWAXEJGntCSFRL55bx6sGNV8ohpLLwvbGrgrqvkiu6eVLS4vMw1kYcPK7eXWxe5npnQh",
  "key11": "4SXExdPrk5DK8qqpB53mSXP6vNwuGMXfnUiM6EDKKjbT9KHSSkffeodmz5VPEPgsoQqfRVHMnsgk4JvgyH4TMfqF",
  "key12": "5ofg1tF8espgRQ49Sutd7CCLNrvCFhXeH5i1GFTkRKk9Whwt8u3LxoKZc8RmTD1QypX1F5WEuLjgqiVtgdsXPeNi",
  "key13": "5k1up7nE569DzT7BKmiYQnUC1ci71yQ2zaFEPhDC7FS2BxqmkjibR5sEgsVzDzaN1aF98hREbcQGqdcdZDb2YfGD",
  "key14": "3TCyicmYgjXFhYUj5DwFAqvVQsBDyTEdyQwb5fG4fssNqvWJdKTh5Bj5CsVwUN53FH8Gx1tfGdHeyPejaHmpzMRP",
  "key15": "4vegKkPSY7sPF4aGp3SPrDhwTMdokj6iiUZ5LQadRcRH6fzAcFWLdKvMy4SbXtxhytaAVn1wztmHSYNTmr6Xzhkq",
  "key16": "SJydqjtkHMJBsEjQ4DU2qEjBuqCa9PtbwQkEsZ9w4vEC79YsC8G426V9gmGo5e3UgiV55umzukKteaCHAyoGeth",
  "key17": "5WnpL7KjJwuhKoYeUWPNgf5D4fywBwcjB54yuSd2oHmwwf9Xt7D1bcXJzFiFbcH3noP21YgBh3javGxuN9DUpduD",
  "key18": "4G5xSpPAz18NzsHFJzUiHmhfzRWWWDUCg1Md4HvX2XVV1DvGtdrJFc5ZyJ8KcEmWSeLBgsXDjR7jfknR2cjGs8Gx",
  "key19": "4UMQkBu5xq4bNVb5MrTxUMg8CwHguLf3agQqm8haVVgjze2Q3pyDddzExVznPEJcSdjHZgABN4TzinCWx8an71kN",
  "key20": "4VmVGqqkacqKWrPu9HtYt9aYjHUBTtoSrrdkdCefaFPD1gnXs7zXBpvKXKXwUPiP8SwXUb5kxDAo2ZDGDFLmfmcu",
  "key21": "3xqmUULxxk62zC2wBKCQ3fhVqcMFK7nnKynJdx5kGiFcVe7QZw5vpvZ437bpTDwjUuFHwyTiwNgDPsGcnARsinV2",
  "key22": "5DnuasqfkAWQ9pDmM2UByLYa1uG22cqGmbm4SqncZaqoMy7dkzAdsNvtwmFCFtpjmrtqUoUfPUFJeDDeEvtEvZUo",
  "key23": "5xsAVA7BJ7GJmVyAEjnssrTdiTqA2BNZKgJX7bXZpiAii68yeMEXEJFuWY1m3EBokdGE9mERba1RhPEnSVTV9QmU",
  "key24": "jpWgFHavDK6WXhTuQechku3LByCRCwnY7mqm3CCSpaaeBKX4knASHDpCYEkMdupQLQHsQgKMJosN3irS8UZsYPX",
  "key25": "7PTN61KtxU7PjNAeuekdeaCG1bZZ6GYzuZbTF5eWCCJmY4jztxVWkmPqkfRDjxVtFwPRLN6vGLYWoCTEYGj9FCv",
  "key26": "5RLVK11akRuLxHL2YMKRvBi5vmibvXcv5r9fcEgy2ubPvUYbMNo7nnTPnzU9oW78GNeSPE8g3xXDo3HhMzFt6j1d",
  "key27": "2ePxa2mvxg6nWKXJqaYYUv5ZUCxYTew7NdzVvBhh2eP2VUYCX1wm6kXHGzsL1zjGjNpiUZUjJXubNKnHd8Chm66u",
  "key28": "2nNcRLnkTC2a89tpm2ZTeMtTSzjwJ4EdBWDG3XKiMY9i8r9mM2e1bQT7BEnA984xxBzr6zw2oZdebhoPJ8rjY114",
  "key29": "4vbhHmGdtHeWZqGbopKQG4BeBjkRiVxDtvqqKRTtvsLYqye1VaLXMWzzXUWDXEhgov3sF4e1BzR3uzGR2CLMeAEJ"
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
