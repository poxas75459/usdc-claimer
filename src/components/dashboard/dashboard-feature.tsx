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
    "2TWMrPqjVLKpzNGQ4p2tKoMBAboYQZqxS6h6a2A9c7o4a6EywqSmjf2AYsdXyhGDLNofmvhbcTeiFynxFT1VmBV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KFpZqNdr9Kp4wUF9iMZFpZnY8BQx7KgYEb5gh3b6fgXMJQzSb4ZmrBEpb3eGnkpmpdzCD7GvtPYoHfwyoiU9t9h",
  "key1": "3YhcATbFmGg4ywKSDxjPj9NhqNA2195KjUPtepaHtKSyhNYQDt7YZrqmq5EwNmyZ6Wj2YpYWDr6srFASJTwDPSSi",
  "key2": "3v7LQG26CNmVpRZLdg4uJ3vdiZbQMmUpk2SFx247wbs8QV99AMepB4CYo97EvCEWNmVXU8qTEk5YoqGSxjaWMsu1",
  "key3": "3nAfos8JJwxTD9JAPjwM9uopXUmVax8Ch7L3wjkJ25451A7T46WxrzC75g5spwsvo3oDPc8byJHeXSFUC6EQ98d",
  "key4": "mBkZS5akDnrNJSa5dWoKVGYgUDFVXbv8eUPmT8AUhQFZzJUjkabeSFXKZZYBF7ARQceDN2fvBndNQVzsseUnW6k",
  "key5": "37Z44cHAocRb1fWZDu1Pjeaak3qYbpEgifed4pq8tBX48YLU5BvEYVKb7wqdqk8nnTPQxqtsnrKmg6VfUEe4CU8R",
  "key6": "4JCQT2xCod8Bhbtnmut3NnnZChTaGQ63jtPYqQCZVo4yNNjZ3eYpd2Gajs3nCs524nMzDjFjemAaNVYswSo9NRLE",
  "key7": "2qJmX9hTPZfNhPdd4zuNBPXVE3hcbHUK1Didn1WwWLos4yDnub7YBPFNPeW9DSp2LAvSwYrnApdfh9BU1o9AVvZp",
  "key8": "4pth8PTfHoojkhNYza2XBvUMi84E9uUJxPdCAk6Te6r59iyRgGeWY6oEs2Ha6C1nSREbkVjBxjDRTqZxBiU7oamD",
  "key9": "5tY8w5B6a87MDKcm6491JBH61J9qZS72tGD91joipDQ49mV2XU2Km8DQSpjnQNzyCLeaqYX8JaKXKwptgzvT6PFc",
  "key10": "4b8npai3DsMXhc7PPjD7q49caNqAnnmhoTNnuD9dtEw3DM8P8aqGKYq6Ym9H4q2mjn2AdJqK8aWKNmFnAd5YSFR",
  "key11": "5dwDS2J5MBDuVpeSp7wjmGRywr2wxMoPWg7tb1nRHyVGgfse6HRSzod8fvxksSHrqBgtmyBmKCNFBBCVX6g8AGhJ",
  "key12": "356ziecqTHShfsfVAsGVEn3frXRXTSadXxiHBf7mK5qSA5Kg485rTzjdE2vpd8tEAorS1wv9uNYL1CZgAsQjf7u8",
  "key13": "2vMYth9EVcWm57QNs9QveXrPF3Ffda68fpBABnrRKz4PBufAW69Sbi99fcqKSb9UfnRLM4Dh9p3KrUYuyscdSBuM",
  "key14": "5dB62DQwv8SkQvVa56vMjgDkpruRu2vurvyXNc449MWuigodzvuht75MVCrArU7HPK6ZiwwwVw5M6hJf87xp6H7f",
  "key15": "2xMvBXr46NxDMWJWuLcRYbmCjNKHY1NfoexpgC4tNokPSPaJB6nzmvYazQJMWg58TeS2vvxjQZv2dEaLKBgMChsY",
  "key16": "3T3Svt2CTXHz8eBnp45dCnEYd2VUGjfgv7aFL1GBTzdYVhT3gYQrZzPpn7qGZEFw3XaZXHgTZH4aqUmLJtvSgrJq",
  "key17": "3VvrDEuaxn5K3MBAeaFfbxNRDaBsJpBuqBpgdrLT5DVgK7c37QsaTanUXYcrJy9rjsZRJ9r3kTcuVqkt5emd7NRf",
  "key18": "GXrh1kNqSDii2D1B1TzLiccTbVxbvoABjjqxdgR43Dfq9mGYgpBVvTGUoApnHLWbHhjf66ujq75cu21U8p6enqv",
  "key19": "Dxr7n7kfPN9zn4zYxbs6xV6oDu9qG6KaoWRfKekfZ7i3vk5cj4xCp7c85Gn3EQjTu9LkX27rsbNHVC2aHZn34de",
  "key20": "4sm5mmat57at3cazZyY2c8SRS3Qmd9BgJsQUMVYunLajtXnuNyTivvbgKt1CzeDU51Cg12ZrMWSUE144dKN9p2Ty",
  "key21": "5ueG7F2yteYya6TfyqF7aSJkRzHPbEJSSU6igd7QDaWhQ2yZDseSzbr1sqSXGe4BbFp26oD1zt4ma2bf9SWah7X7",
  "key22": "2YBeo2TLU3oVaLrMxfAGExfbD88aMdJyk7n2kQeLmK5jtFLpiG877Kf9UBSEebVxQgSTdGf9a3uUMV1s4Rd2kmLR",
  "key23": "3aWEzHm9RT1VhqDcjnfGn8BRyZ62oDpPa6cZ2WAvwbjSXyuHURTcRsbgKLBZhaTsKRAZjazfJsgvaF41yj5p2Eao",
  "key24": "2zQZXsmyWZ7vbyi2MB41cwSr9VGLgrcGc4ChfdhqHHbFudejCBQwJKfASfVLD6FGJUfHbYrYcr2TojLhvuW9heDG",
  "key25": "3LVqcjvofFgdT2mk5soGFjekPAd8Qs7KT2hDYnZUvzynDCqJcTeeRUiU6DeQnsRpFCfrgJUsSWCBNfWmHgCGfL1j",
  "key26": "2ftwwwsp3xSTDQ1ehijZvoaDY6SaUS99YV5iJ3JmscxCoVRWhqbKu7vYgmUKygzPDGvNZcx7WxTXBybzxUJSNMfJ",
  "key27": "5YG6Pxi2Cx5CMTYmzPGw6Em3KMt28L8Fjh5fVoLZwN31AdupamUYCsPQu6mzwdoCAfL7UubWLLuaDBgrgGRZN4XK",
  "key28": "63JhsKZBtL3dJ9U9JRTXdaWjLDZyp4An8deFjavoouD7S1zx9hXxBgMUZcXYv79sQbg2P4Y6JJKgGDj7Z1hus4jm",
  "key29": "4Atrit1NLjZTsQcFwBTGNahggmfnX6MT8AGJq67hSqJrHtUqoVqyFagWgjUBeDv1n1cnDYAcCoG5ZYw2fFTQDZsS",
  "key30": "3bZNs99z8dNMwwnVhHpt6XSsxmureG98GnDqcHmXh5prrduizaf32DNJBauNSgyrwvvmZD9YJ7uUhqFFU73f8bQK",
  "key31": "27uaTTfz7HaAsBt7isKQTmKn8D3ETA4XoFeGPBmQ624VssN9AoWxc5sdHE5ySaS1NiaLriaxM4uf8cqC1CJhrW9w",
  "key32": "27uxkWV2Ndcs1A7PVs6zb8WqhSWRVMLYufn8AXQfqSupKGvmwZYQ1yf3BZThsmJe1HmETa8txkCvNLpVuXxsXRJ2",
  "key33": "3jbzwRtprPbBggtERPCnKLDmzUVzEAF9UaGj2NSUpGJJrZvLP7FxTDGVhs7gHPF6zusqam45gf5DK7ZGK6c6pWvG"
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
