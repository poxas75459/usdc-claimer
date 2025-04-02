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
    "AniiN2BGA9CdJAPLWMJYhnYE5R392Tr2dmqjvXFanFU4TA8Yad65VMAn52v4M8g7b1yJezGbgor7XYa8Co8Booc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UvwiCnfDff7EXU3siXHrUr12t9AZYTNoa6NAmcJHsFkCFPHjLwVKVr2nzLZPeX6omvQXnF5f6UFisxiYyKbEGsX",
  "key1": "3NffYoM5rLnbA9A41pqamtEcEjsAfRCXfE5rRReGmQf8gDTaBeesNxE2PPBdMTwdd4NurnMiVtnQyiSdduRFLTtu",
  "key2": "5FuJKFtWqDwfbK83bUaa6fcmdk5V9jKcAhuDA9nKnTy42gNTzxY2VCfTHbnPPNw6KJtLkedeMCsf97VAeaX5BZSB",
  "key3": "3YEn56TrumUACgjPZdYAvUgFwnHKeQdFc9fxMvTugi2VoQ7XPU6pN5d7WxFnMecv8d7CZL4RPqZtECcuhuhETsKZ",
  "key4": "212bmGfKvCojNNXR9Az25LR23bWSYbzVuYQybHR8YmkdsGU7RPcZU3g9JYed61tN9MBTtjJQGhKDxbaTmhQpfjG6",
  "key5": "4V6NhRn4gpQR2kq53A8yMTReKV2nP9r3oZui3SdvL1oQnvzP1fZEBodZ4ZQ4uVqrFuz9yeoWvLuAADFhME4VeX49",
  "key6": "38f5PpRGCYatVM5FjwgdWhNnNdJYPq1tH4aWshLw9raAGBMsaLtoCR7Dr8hpU5rE6xt3wBYNiJAUCpLunzy1Ywfk",
  "key7": "c1xgMqEiUb4iXgELawdNFW95P4JTvrrpBYjpZhYRGvA39yZUyR1FMwpTQ2yUPnf4fEF8hxcQct7FmGdETv8tfo1",
  "key8": "63d3sGD6YFnM3mCd11esQkUU3zW1H6YqsojSbB1v8wpNYh1vrC5viprShnpKBi5r2UNHTBZ15oSA54VkyDT2YGTj",
  "key9": "RXy1AL7XYXyE1bdr1n7D7Vizusjjfq7vBE6AMGeiVCBdQDRVnXF3RsWteCxLHAEHDsmcB8ZsREQztBwYjE3nx4X",
  "key10": "WnkqNG8QYXCjbD3K2LxcjgRkDoyEoqXRnhB8PpszVBhfs12BV4HnBUttDHWN4mghFcxyByu5vRazyoqPF37vzNX",
  "key11": "whZqyxbHd1yVCepa1e4gzJtVN9cE4VPAJLM2M2QU9qsTCkFoj2CThJ2284eutJwn53Yh99UL6JG6R5khs1XwY5Y",
  "key12": "4hm5qbcpwsHRTwhppbqGj4oss8MCfZtMjLaU95dBxRcjvBxSGE1hUDyKNP2H6uaECr7T9Cs6d47e59FXbaTsAE9L",
  "key13": "c2ZYDNTU2G1818C2jYcrye8JxM5p1exx26RgWbURJLTJfmNSQ7z1KC347xuXD1GqbjL9irggBvvxbyVRMDoE3FR",
  "key14": "3w5wTHDGb3mgABRs3B8jPZBLmtwKqVntV9TwUJrK2DbfWGWEtY5vjFYRZ1mUpCn2cT9Kq48nnVhvyqZSPZnzydoX",
  "key15": "bQzfGHxDL9Yp6u6DUwrCpC1tnr7nLWfPmCkxhhkb3xo3W36TmW4QjwKganXKvnrVdavvERYbhmAJy8X3jpe7o68",
  "key16": "NHWeEgcxphF9M9Rq6nBafAMboWYWzQUZfGZCNX14eBMUBz3ZJ7tzNvyVs48T7XNTMuJj257pbukUSCd8JuCBPbg",
  "key17": "4JJMJB6MDQekPgDx5Vjg6UGigeDVTkFtd64PWZPT52eCT5b717D8K5jXrLidu7bJF2nSQDkSuH8ncHLqEyQ5ef3L",
  "key18": "aMB4ZXCDrrBz3kRgRRVhHp2aRdPbpodhVGSmgbRH8bf8DdSNcDHzpNCZ2qu5aaJ2jP2CARqQhfjBkUzpRQH5vft",
  "key19": "qdHRdaST9hFQb7tF2yYcbUKH1hdhCNHyRmDTAduzRaqeqjyuo9gS7hgAZYHjQxnqQwphGJBxn6QSWDwGPuY4vkQ",
  "key20": "5Lo6LFwU5usKM1JhCruqMM3nnZPWE25DXZN3nGiFrdCNDNj7jjqLXZyBTPjKkihLxyKfJzJ1dVh6uMYJgbQCwdCA",
  "key21": "2Pv1oMWg8tAK3xZ1fxLWNoVHjQeyH7hEUTRPa8H1z9VjeMSosHa7TfHsybueczyGixnCb7TvKZczd1E3hd6EXsoC",
  "key22": "2WL5WmfnLFJMr4CB4Yzo44hgRBurnmbDrw6887GiJRgeFQCZW2cX8tncxcqwp22bEDzuhMJgCnCJqCeERRBiRG2X",
  "key23": "5KokCQe1rtwFNvfDMNXUsqWnskjPSfXhPDHcEviiCxM1oXE8JTy1SKpsoqcfSVUxXPGJbWKXLGxALQ71Z2DRKeLA",
  "key24": "4XmDDfb9HPTuAa1zMt8BsYcshnyiJouLmCHvkDfGyR52aen1USiweZk4QtfLVxtVNWdbMsCG6ChEKdJNhPVD6YJk",
  "key25": "3cK8xdS7Bkm2Pk6CSPa1ZbV3TshGVKP3wAmsyDsRn22PN6JTnBzv1o6i3B84VYug8hnEQe3UHpG6vA6i7tNJTZMj",
  "key26": "25CQL7jruBzSm9VGfgLHcxLLgf9oZXyJFDZysjgi3ofRFTJioZ81NRiXSXXcqfvVxLWzbnnvQBFtAbMFAG2piXUQ",
  "key27": "nXfM7wzAeTZLZJhnbkk648vJgdCk8tzy2E712GhPustcWoEEZqrcg2ECFhNC9yMw4JY7HznJEPL5QSkShY69bBj",
  "key28": "4112wRYA7aLyVQejG8hduRh9rTMyPNMjRJ3CTGi1Uz5ohmW8JK4Evea4ParYjMnS6wnggGckyoGTd9MP6CRbjXqi",
  "key29": "41Six5WFWkjqE8rTRDVkWXiWGQoznHqpBjLtEXi3DfuFvhxgztRNUmFfyw1snVEq9Qs6VWUJxAkHmL9otsW3Hpy",
  "key30": "3QAMPNX2Qu4p4poMmGpmWPPJH4zdjdALXJ7DhyGN1cgCodPmgrystrfvsuvswAiHHom1xNf8P7TgbfR7ofox8YqP",
  "key31": "25SN5LwxKa9rYhQTUZ7yohwYPaRFivXp7wY8ng4YwfEZBneAkTFwo9AMastLEPwxaYsun7zdV4RWcnBTx77tG1ua",
  "key32": "3qvbPEzT9RLVkMDaxs1zJFHZ8CuU9TD2TEYyyo3qYEpue7vqvvFL66exB8uUoXnhJRD6W1Tw4T61aTuCFqoseFi9",
  "key33": "KNRec19KU4GD1enhBHHDJFBabZfsmiGXHT893dsuTTUrhEqioX6Kw1mttDaG4LTaTQnUAtanPS2RH6yWTki7mnf",
  "key34": "4QAJjXEWiAAD6aAD56y7tYxamVySfNpMT37J8sX6WEZEiUBDWoMYCXnyYh5GU6wUopHnJUmNkMiZpJuiKv5Y5NTB",
  "key35": "3X1NdLfLZRwiC5XfZSE47cda6AzAFv3xAg3o5SRAsQ3jGFwR2KR1XTJujVLUCJEgZQohwSWNTS3W7NEJpdJ7VHXT",
  "key36": "5FBFf7nveCYgWNNgTmESpE6PSHYv5rYkmAEhazRgcQg4zdAdWuS8X9vJxWMV3bZCHmFDMZmDqwE5xHKvxhPGtGny",
  "key37": "4SkN93K4bd4BwNYh9mCjtwy57WqcgVbyw8w8Zqa1sij6maS5q83PF9w4sQcNzShAFM98Bnm6xGL2vQBPHXeaRop7",
  "key38": "4Vx4eq6sEYxGu8MD22bjCgzQ1EHSnwPCsC3z8jRQmpznbKEnLcpVesQ7pLJX6qKRcG4dXDRLQDbQYDuzjDaFGzqd",
  "key39": "56Q4cGLHLkKU5VfmpcJhm4bLBRknCa8LofUKzf2LMochvvpiBdynncn1hVvZ44gZJG5vYXtvj9CYjGghndn1LVoK"
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
