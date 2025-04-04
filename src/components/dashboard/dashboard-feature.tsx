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
    "65eVq82cmqgS5oGtKSqo5eLzreDxT6Pzy2ZmobEgtv28y1BGmuQN7mfYWiSKq13tMuvemWJSZ7QnW6Yf9noDYiNH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EqmAJZG9T5ryDK2TNZqr4TTp2CGVbTRk94S82C36CUnmQEGhNZGvYtwN43JduFzg2bgb9WgSV3YuxqAazxBSKgf",
  "key1": "4jBqRrMhTKqeCJ1rWh6gofpfY9qkpx7TijVRwVU3rYGq7rEBb2WfvGwW9zhfyJVTisetifZGAsSYF5M7jWMUQnHf",
  "key2": "2NcfZF1kZ6hrsdMLRapvbDXPhv7wJsy8MFy9EX8b83EX2f4xjtbeWbPXvqXmQpE9aNQRQqnT6nE6WPg7R6uKyxRK",
  "key3": "X392Mrp5JZGzXR4z1BKPAphusxf8UcDGbT11UZbjenm6zsEkj3fzKxfnDWTKsh7avAknVuCjpzK3nLJvGcqp2y5",
  "key4": "4uG4QgVWsJio4GEaqphccecqHBSgVNymz8sssRVpTy9kobyQzHoPSEnk5JwsrMWgaQznAypADGoMtMiYotnxZ5Yn",
  "key5": "sPaUkMg9w3kK6xMf1Grvii2rfBLs9g4wCaWojvTdDBGmNrpQ4YRvkW9X7kRC8Vd4snLoWoRrhgxgRgDsLt2sjjz",
  "key6": "39P9j3a4aEMb5stzxFYUYWQe5RgaWirMKm6CuDPa1ZttoE5c69Dqe73cbJjwQvzWRXTbXjGXTBMc2sRWWHuygDRC",
  "key7": "2d4fHkDD4dK9YEAVKwFLukVGsTV7oWNgKCEYYQpZqBCoDkoPFWVAqJRq83aXJhiBRYsw575eZLi2nm3vjnXN4LR4",
  "key8": "4vDnn1L7R8xa6XwK5UdbwwRAN3GPzFodDY6V4uofYuAeHAD1rhVKENqvEXCrJrVEHxRpQ2tnrMMw62BVU5RJQAxt",
  "key9": "2Seu4aF1hkcQ42nNmqwpEAHo9PoLmjxfF41TMRyG8XTvG9L7piYQcQGMZSU3Eoyc84TjqGv1wmfohsqsV2J4yrYk",
  "key10": "8sko4SfW3f83wABxn59XciWn6Uvffu1jefB4RH7anYma992XPiNuNBkK5ykokf7D3kmZMz3Wc3uPdogHY5aRzoW",
  "key11": "3KZyXaTS49eVMWMMvzNRLaAGR5K39WBk7Q2Ft9VHur4Vcfi8UTfsyGjw4YH9JyoffV3oQcYNauXNaykKVjn4hYsD",
  "key12": "4ed1caHip7fTe1xQxPfLdrnymjTFviFeM6qSVnTAikZcudLNetbEWmJWgPn4FiJVUuFPzJqQoLu1y9ZhXCzxqPRR",
  "key13": "4Es1StUCZzB4RvR5b8YoJ6rRHmrK6ayogF7r1seW4iXrGfW7Jbu2PRTyWTmBppNrx3PSbPJ8biGTYSectdNEqn9s",
  "key14": "5yajqP2KaucrET5vJbv5NX2UTZWv7gfBTYoihWHdjwcBXWgFRAjEeU6SPoqNAHyyn31hgcbTZiXsbirZZnDwCM8c",
  "key15": "3acJpLzRi5wpnjByBcJdtexLYsZXYGvwbnvkb12J3q4DWQ5MWm9topjtbAb6yqFtyAKTNukRgqf4aVrV6xyjkHnR",
  "key16": "4EJWYihJg9UZKRUuWxr36cu8fmjDnJjc9XMABMqKbPdhSTcbPsg4BVCzg8no2JKMMu5s6B9EkbTj2XFDdgnyhsV9",
  "key17": "4Jjyqoc9MTYJD6BFH28Rhy6w876qopv2hFuHDiqhDLF8wAeUQDeXeXLXeXg4qmFQk1Pp5nowaZp4KxESFE3VTACB",
  "key18": "4EtYiSFJ9TFSqB9Q8yNbjELdmeH3S7HCPNnkfEUeMT5Zi6dcvPq9B32fXqsUdX96bud4CMZiwJJbMWfNsyLHxmiA",
  "key19": "kxmjvbv5eo68cGEjj9BY2dy6AdZjPX9C6UQirQZ3pQDYrmsyg9jycUSBc8oikfSMMXyGhB5zKbQ81evveE5rQpX",
  "key20": "QoLbf6d5nXMbuCX8EQyTbEM3pKDcQVhoqNGQ8gn1zonKZEN4os7mDdKNBJmxhG7nx2FQ7P6sJi6VSnSTGKUZny4",
  "key21": "4sXz6zqHbfMuSUNXTufhorCgB5zmjWkqDhvcJ9vWGPm6cfZrSN9t7QRiWa6vyymEbqWbnW318hwvoaAn59mC14TJ",
  "key22": "b14KpB4LL8RQpHb8oZBUnywzxSpjYuJ582dJ51Juj67Eov54AmHh5Xz9AJE6k323v6HCTEjk2UH4WiSB3v2DBTs",
  "key23": "ZjivhA4GxyG6sykvxzn1sq8NKPqNABsnzpu1fYmYjeYRVSBtoYBqTSeeFsT5z7WqJ6Cp6YF15DvPAk1qG9E6g2j",
  "key24": "AFKEt6GXNA4Gmhg8J7mNTeG5HxMkKdhGdLKWzV66teiM64dt3p6JawbfffTsssbu7DFE5njMSTg6bfXPjW7WWqF",
  "key25": "2HvtKeBzbjP8cG2rGyqj6dc46ebFmDu37CELVH7CPP4Ar3qrhTX3heYaHkPW8oaTN2UxC6wwKLEJh8hnNxbfF2Yd",
  "key26": "5iShrL33Dq5PgDAq78EmXYcxSPicSg5CSeE1jeRzvUgWHP3de74Js4GQcbBQRMWsSkajsdjTr64M1TYYZ7TH8EtF",
  "key27": "5WBvK943TuazirX4uD9gA14c4gSymKMLJYiB96aj28ynNCAABEXuKeww8dmM4gK8jvgNqt6GnHegTBt6ZRTW43dk",
  "key28": "5v97o6MASRtkRkcZH13N8SwQYsmy1zceVnqDjszDMJsxkRW3h4Kg4kUzzGhccfTm1hgyDmhmGFLiu65UairpyAWL",
  "key29": "5HBjpg2mjqESSBnFYGD5edPEwC8KkEo6Tkoe1gJqK6srXKxoRuxKswe23BZ6WYLFsHfpK2nsgwGqUCR38CjnY3m1"
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
