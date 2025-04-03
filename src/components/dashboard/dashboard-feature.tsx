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
    "4k2rrN1q8WeGY1fazN7znnuKcTytqRj5YwMh5zc2n9hXPN6y7CBoFTxo3mkBiHa2WJRuxyyTUkDForJWfUEZYpFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gb9VENmdF2ypmHZ7WXt83d6PWtMrdQPbJVe1C7C2HiNj87JQqCUuF8jkTmzZPKHe3jY9u25bhUJpSoLHaPkpGin",
  "key1": "fs1EXY7H4W41L8pq6Jv1QaZB3Quwb4amYTAfqQuUmtr8wpnCTrshf3irGvj3PmvwASunYPmhrveb2hHZi3fVD7N",
  "key2": "46BJggqWqAe7cGG6j964LbHXbtZr5pwuEeJb6ZEEjamxj3kzV4VRje8DQy5Y4AR4gRs36xYenTwJpdHYS1kXVJbE",
  "key3": "2VELRRpgfPhRCTMqjZSWmsdT8s5UXwiYbtDPMp5n3yAe8kADbTYg7XcQoGSiX3KkdutWcYveLMTwV4rewWQHqqvg",
  "key4": "9ofr7X7jFrUKLrmHEtYtkaR7TX26w4gddU6A3mwzqEf9DRG7boAyjWEV57iMarBWvYG75XKkghGAoWuD7T4JZVi",
  "key5": "3iWGqowzBXkEqXdgSDJDnzdKth8Si8K4SuVRVxUbYp1HJGjwpo3Qa43n1oNNXUfaz7AZyDULMvCxuLeHxtXBfkG3",
  "key6": "4ERSAqyjunBj7UyQHzdU6MXSuzkBGFfhboRNqgAD9AGH3qKL4PVKhdjKaFMefi3vhE8VvAgKpmhALXDqToEcQrnJ",
  "key7": "xP1gVjyQDAt4zdXwSv2FHcHNYLWGFvruSgp9jFhqt6oWmNjRTFWYcNS89DDfG43PxA7qRJf4yPpJSXBDK7pqVLy",
  "key8": "KRghpS2aTRe45Uh8VX568Gxxvo55fiwWPtvtXQU28cM9TSgggLvxL3C7Rz8UwBB6CH7mxdKzbBoWE2qgfnpthad",
  "key9": "4jgTDbjUBb45zS3aiNkySfSZxQP51jnJAmsukm4Lv7ZYMm6r227pwVdPsMmVbTMCPW1PaDfsjtu9fRyxhvrTci3o",
  "key10": "3G7zydazjta9LkTRdddiQybdMxeorPDUVzqFoWZWcF3nWPtC5YDaH8tnsY1kTpfZR77zAuEeDAAmKXDKQeY7oBmR",
  "key11": "5jZciYoBmetUQF4zd8GkubYdV67a79VsZZRgn4ufcy9DtsNd9QcYPYrevH8CP2gREDXyXmNHoshBAw3y9VEaN5KW",
  "key12": "5X18fJLYKFt3f1fhDZJeHCFD3rYP8Vk4ebzjst4kzxbww3szq1n4EimrLrmiafx7bwRf5MCZERCXfybiGgVwq7ES",
  "key13": "3xWH4DG2fRNTaYpkBJFNiWDyDMJtMS76rVYTGYFYZUacjWGTsXQ6FfaprJtPhSi7RxXoumcK34rfy22VNxHLsisS",
  "key14": "59JEdycBsMJQUmhhJ32Lrb9MoqVvsMX3yZmG3GtWikTuao5dzbhEMig6oBvypeW3ekP2DYYK17VmByxeg1sCbwEC",
  "key15": "4QeSZCwB8ufg4nvxQzXDySzNHYpbjQ6MvXivdzqqXteP5JtxbVCwacpKAJtR1KUi5BUvKfh1QnqqCo6GfTrdiERA",
  "key16": "2RZY2FhwdN4tTyYUCCxAN9cLN44n2mC1VZRSjrbX7bcNiPod6N8hByKVx3YhorUugEoaGFvPxtUnzTPco9MmbDGd",
  "key17": "514RqK4PMyq8nvExEDi9EYB12DDSVni5sHytnMKYKeMG4aPSfWW2DvScCWLQfTxGp1jN87PLzVR1PV3s7CRjgwAt",
  "key18": "2J7TpyZ4uVtcHArNBMTqwHC4DQ45QAMgcfosCqugDaWcRZgBwd8faeY6MjwLRGwJfGeptTUYcUBjLwM7dFxbBKW3",
  "key19": "5EmzKchvRQzScesERaECKEH4xwgdY9u2mMBypy7hmPKz5LbFKW63csgEZTaDVRTpLYcSX68YdNiPNyBaWeqSmNx2",
  "key20": "2ys144drUnWjLdgsWSgLFdYRoMgGFXKN11D6YCC6U8RZXdsjokPH3FAH79788BprJaHh8mMEGA6a66SM6vajeTkK",
  "key21": "5iKV39miVxr5GAgtZrtVoUXrydzo7WvHoR7z3npeTVG1Kk17zBr5Mdjo8r7KArZCzKScsobfgytWLWmEqE6LiEJR",
  "key22": "2r6s9gQkCexXpPLM51yU8YgycWNrWX6Viu16x1TAoYQrN9Kv1rcqYa79hkZ324qzMNaPHHLrCH8wWSuRPWYn91av",
  "key23": "4jxn2LgRGbEHfvJmcuZGTNBg89ABhXnPtSvPa3CNRR9KXeZ5naWEW38AwTH7QZG4hbhrynoJc8ZDfAwj5TERCVPZ",
  "key24": "4VMiWYnww9fjzpJsQcehgdoApkUjdju9FKV97p3XacDfntDkUU625c8pEX7GWU2u1FAyEmMbTV5b5FGxhf4YkHFu",
  "key25": "3dD1GBm4k8d5CWgbWuTAUHsnkTPM1oPze2wbm1HbGeXGyEfjAFR3PA8CK1iKxc4pCoJ4XRpkHhXWJ7JqNqdmvVYj"
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
