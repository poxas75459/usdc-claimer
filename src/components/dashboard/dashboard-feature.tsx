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
    "5v6wXaQ5BWopbcUgHWoG7oGahvD3oGwTtqictc2QYNtcTXkj3tMnjUWCcEHXsEBkb5fTuZioggyrtyfMn9Ach5ud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TyQ9mVAfiRYjeJJGEcbv6LqgKdABiMYTt4BqSnX2xNeXpLyofsaSMtJSyk1FvsLhh8uJVdhLhrwh2nKeXL7EupX",
  "key1": "5wg9jJCuU3u7PMXPhDTHEBMzhHsEEEVH2Fb9qNWpfVgjGW4KyCUBcM5wp23Bpurumh7XWfo5QbNWm6Fnfvk9bSbL",
  "key2": "54G2kj6o9HEKydC8N6d7PomUyMqSUWCgLZJiUt5ojcU5vMuB4yHADjWXb3mb4a3fH31r9NAWLBnKSdLqZR2MDVGW",
  "key3": "2Ney2QzNWzeMTLurCceMwgAxcASH11jiw6H1KnEiJFytfQPGW7uC9H8svRZFPoKc5kAjEBGzvrxV4Z9NYs18cgkm",
  "key4": "33m9S1AQaRDPdRnBiAxSSG8xbEKF9FZj9Kc99KneEFUnSVc5e8tZMZQm69nWc9PYaApc4AftPcC7kESNVExY7VdQ",
  "key5": "qZfPXU2nNaVkmpLS26n5gBB9arn6194Rxa5LbWvsAbixVRWzNWUFmpTi4kf7ufpYnWXBSkD5HZpfxvoRXtoYUZ4",
  "key6": "UdGV3cHEJZ2cUUuXMer1XgoLtqCqSxT6YtR3KszHyV84iTjBV14LQ6aYHw8d4Vmara7WDxGvKqATqHvyPQ2vayX",
  "key7": "kWnXXARtfNkfrC5MDrkYxc7FsfKmizkxFH1iZDi3XzBuYvFDCVGRgCc5wqcg9dZu9hLcMgAMh7q6ewdwzC2y4fD",
  "key8": "67buThJ4guiD8AWS2KMwi1uRb4PhraJz8E5SJc1YKZkPubCzPKvqV4VGZAopAWY8BnyvwTdHDnirjkRAAUJvHSh",
  "key9": "56PkuajH2hDJoAaVABWyHniFvsSkpDGp1YiGWT4qAaLrsHgMJdoQvKrHPLu3aMo4RuKE9N78vSFWjCVHULFXrUrw",
  "key10": "33nPVSmqTeBbHz3AV39tknVLZTvztrSaYeBUDnwMDmmtV25iLah6oCF4NqSGcCMg7M8BynJhzriUMGjukhhR4ofB",
  "key11": "59HcNzBAh3JXtxraFLmL8jW81cyArsR5r5WzXX8ttRf2SXviJLbtQeZRxuh6xsccmXrKq7jtUqNtM2qQDh3Yu6PK",
  "key12": "5j7vHWheC3KZq8ykhigq8PPZHCBZei7Uh28gE88mFKPsv2J665ocjbzPia1SeV344h4XpV49brLiNbFg9ArGFRnN",
  "key13": "3Qw182HzB6T68BuFzH2G3HtjFmvTbTHorDn6EZy4pUTCAxXj4KsJeXry8GAphtXskAvVQ8dpLZdYKHHufPFpGr3m",
  "key14": "2S1LuS2APKbUHnuJ4N8fPZyUnWiYUQMvns1VGxnEJtsWHkvyy58PaJZL54Qsyw4AXQYR8ZEZ7m3JEPrpGkLMLtWE",
  "key15": "64bBe6nFMf3N9dwqekJxYdFU4DTemBL3nJazYG8Na3mbSXfkU8eBoGPijdVfTJf7UTUSd7k9Lonbtsof78kwUzUs",
  "key16": "3gkqbDpy6eVkWYFMgw95Z1kBWL4aCEd1KJFCt5tTqMRhNudDmVQAdsZcFrW5XKYrg95du1dD7yFTarijwxMuTNR4",
  "key17": "3sGG9kqkbuYCLXnYSwKcfFsCfPHJfqTw7S1dYUXeAw9M8xnfJeobY7wBdAyw2b611tWpE7rgPwcPxqCkBaHTqsnx",
  "key18": "2oQL5Pia6RyyMq7EJD9jwJD539qXar1GfbN3hfsQuf2QZip8ajJYd6HuwKj9v7gfMKJYhFkoAv9dcptVX95dATA2",
  "key19": "3eXd1dEKsr9coXwE1wLxyQPYDqZHXLcx6smbaVVB1NGndAZ6c7tAF6FWQGrZjgBEwqsRCcZid7YpYkvgNzvzvE83",
  "key20": "bfGojhEPtNMTT8wymXRKjA4aGTpCu2sTcxnmSgJEUg6zocpu22syNCYfmTwK3HfYWf5NciSVKTgjTTHQjAysp42",
  "key21": "5meVFTfYhA1i5cYQDrt9JBj2ZDNdi47u7GvrUMMGZKam9B9EMp1rUZkpc7LG87mJSws749LzJu7Y6Jc6eTZarQFH",
  "key22": "5Z1QLd2KoARL8AvA2UJ21ijwE59d1wMhJvBTb23zoTnWPEUwbDfvukqghNq2dVmgguL62YZyeuSzyeQkFCDALHpN",
  "key23": "5cQrk2v8aRf3a88JXerPHFdxhHKLZLZmbHnka8AyGc1UkdDoQyvoSAeZCJQWFm4Q4QJ95Y7qPeZE4UsX1LXLRKhX",
  "key24": "4ANw7kuDQqQ7UqatoGm21Lb5vZECZ9f5EkvbDLSyw6m1DRy4nhNu8A9PFE8XW8qXzgRcPt1JuGEoeGpuG8npCC1W",
  "key25": "4GwHy8JgEmpCsNnz1UJU1TjNEt5MVn1h2v3fPFFBoqRLnBeaz2vY1TUo6D9XRBQDK7i3RxuGTTLvj5XtqehARxog",
  "key26": "3eKB8W1dye9ZmJqEGLoCRTYkqwvU85gM9AAboCuFT1J1BCkpdu57a8ZH6gJsqPhcM8BbD62wSBrCngX8fqqpyGhf",
  "key27": "2cSQ1h8q2RrXV2m1eihTgoy1i2s5iMvJiBQYNPisxn3iiyrixeFLuEc7f7APBU2eSKuZW537Npv7SgChDa4TLkmX",
  "key28": "yutfzrtwrM83JjXuu1JPfzFnAhPuHSCgcrbd3M5AHY6bWJoN4dMWik4P4dkcM8wVAvAsQaoiznJsyowbRdNcxAe",
  "key29": "UiPD5hbVVXTC1CzfDPBXunbYfJ4ZJHTt57tG3pYLk82FNsoB9eZrVsgMx1ENpHToq5zcaQT6xKGbNxooav8C3wV",
  "key30": "2j5bsjbt9sRSi14Ro8ug2Cap1YDzH8FkeHHgmrKJnNRQeXSNpghFstyeukqUsbmPbBSmxnQnzmnUQTNK1p69Md5r",
  "key31": "4WEz7AWXtEpVUkqrX8mG3KjzTRJRvyQzr8KDFyX7u6if5Z2Qj86deBedrmipXLBprecFRXnReb6CKatYAzkoEv7F",
  "key32": "3fJUGz6TCbZLK7JESkEbyNGCd6zR3ZVKHp4H6qJxMXBBowjcJh9y3nPfEC5wXzis4FED1zqZeppQsCp5rCzMY3j4",
  "key33": "3hj9Es8Ws3bqwFVQhoBwpJoBioXYimLPa9b5aSottrZ21Wono7j4aeXSuDuCF7p1zgQeF9B5hBs5kH2LuqM5Btc5",
  "key34": "LhEX6svK9GGTVhPBdCZTfjWFUr3qXhrpJ3b5mPHYtRnSaprXZDVmyAjbPZD6B7ZGSn8YPJiy1qAd7TzbZQ5D2oq",
  "key35": "3XE9R1tAC8xSRhdPu7DzxpEPNzpkbXCBjbT2GoBzNPheVTpP2mGiQPM5xzazfhJhnaEY5eEFyWntd2TSuKJjrish"
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
