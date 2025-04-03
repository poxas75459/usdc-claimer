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
    "37B3unyMvPydyTD2GyYca9cwKhScExdRxePiSfcrB9UVgo99qn7zXLuNQULLBKLvSTiRh588gfFuHRCXonmAAZu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f9aCwuHdsvgHBbrEcBcX7aWLN7voWnZQA9PmZ9aj16hCRY39FGbKcTqZq5Yjc9FeQR8tLR589uKUAC7dNiWRMye",
  "key1": "3vUmddE2EuefuiZ5TWPjP6G2vvpUcrXZBgNWvvTsPEkCAGu1YwGkZJpzdbsSow5Qm61j38j7xkbQMYuC3xxjoH6e",
  "key2": "2qjgf58QVDfSshERxYMTauE2w5yBxQoGv9aKa5oZnRobY7pb5TktfM1hJrL8VtrRC5KiPpSMaNdZ6Hv3N9r1rJjr",
  "key3": "2U2GKNVwozQvaXg8qexWmysSRHmVMgcbq9NpkqCpFu6Z8oFvPeVyNT8GUVsgVo7qkP4HorYE4VaWxtMdDDD274We",
  "key4": "3pr7fYg8uWnCS5Yf3so8vQMrHxXzewmpy3A926VzTgXsFDHAFYWxbsnD3cWyjrwsy9s4nQ5tdSaX9xN68VF5EuLJ",
  "key5": "2hhkXVZNXUbTNdNwMwjDF7mJSRe8fvSnKDkpCJFCv74CfvtdW7qcaLNsY1rG68tFUcwQt12BNKj74F34iwJ9ED2p",
  "key6": "2WT6TdmYkNVyCp13uBimNoBU4aEg2yKxVpw48EYzrEQwGs7H3LpJfQzSXFwSBRewgd5A7FR1Asug3cktrqsr8gEL",
  "key7": "4kX3Pzrm1qYKM2H7zC7zirKtLFYJEudEnjTyWg1DBwdMWN3zMP7RJjsjqzBrYX8Jh9v1XR6mFCL5DZCnU8zSYC62",
  "key8": "4x5bRkTFTbuhWbazoQPGL2qSxXWDYHe1EcaJs3VFPSS5Z246L9gV6f7ojCsmgrvZdSLbpbEEQmRHyzsxyigtykvq",
  "key9": "3r3YbUWizU6FbgPMScyBJyfbGeTHprZNLpmfRPt7zR4tma9PXSNAM6T3mVZUexAEGiHJjGDRM3JJPVNLonj7LFA9",
  "key10": "3PfjmvQ68YskeALiqaPKpvVLyufRZbo51y87uXptHwYXit897VtTJ55wzwxR49vrZPEuZ8Z18FXKmd4aWzXgH4Wd",
  "key11": "4c3XUHmwGB9sQnbRfbmni8WLBy9QMkpHS9YjM2s1GJjoLiKFEKiQhNuQGT2v3EPJ6caWNxDKmKxPsxKJobW3Tewm",
  "key12": "3JwStRMmAJNKZ6FK6RPzEPzF5n6b5TmLs1gtobkCWvqF2SiTwGehdC4crE8rXfFXoooZDA7msyXzgQcaBVh4uCbe",
  "key13": "4ammBq4rdXCXVF9G7W2BSVbvSjm2rvEhpVPcL4Lcaod836un4msxE9GazxXgJ6GihybUxHrLHHu8NbZHekimKJev",
  "key14": "2P6dDxNCFPxA1jQG4ewY6Py5kDV78pc3Q2q6WRGjB1X5RBtvMc9Q686yvasAMiXvDGtUQbdAGeUg75xXt4EoM7Y3",
  "key15": "2omJw2aG55wZbwDdf7zAKZaVCZ5BfUtfz1hAk443BXkistppGBBQAXA1WrbVMtmW4oenft9YhHLLHysqyHmWa6xe",
  "key16": "2xHRwtzUgvwwKBsw9GXqd1CFwVW7LiCtxHP1E4UHKWTKCUJjE9aD5JdnERLear8ZfVeBs3dyFhkX9ShytAFoLcto",
  "key17": "MDJcWRiaRCo8x1UhHz9sy9QbEyN2hEcbKuVq7XFkqFBQVuMPiEYBmaQnqjt1kCyzg9gTqWb3XoP82dnLzyksDHj",
  "key18": "3grg9qGo2B6zF7LPeVy3SUyMSMRDGFT94wWWqz29SaMuCUXhRyF18snxkQRiJgmu4ssCiJwBFeYuqwGF7vpkhNdW",
  "key19": "4srrqUDxvv2Pq39sJfL5T5MWq1cD4pT1bt6qHgJiJS5PPJjFJ9QghAvmiwcf39xNdpi1PwE522YWqPFfd7k9ZiaN",
  "key20": "4mg71b4YaTefa9pAL4NNNbwnKSwLpisnZkEKja7aTyVQj4ddbC9xo354UmND4G4pWWUADG9yCNw4rar8CAQ1DBrd",
  "key21": "393asiKU95Hj78GewoB3zXyvKsEWkPvwXmZg3BquecFVpHb7f51zGDWBKyyU2gD2p5KZCWDi9LvUfaNu34AW1F57",
  "key22": "3WFzfZucyis5JoQVQfAsXayUjfbYP8qydFwnCkqQgUKu2pCQkyNZTNgaSvRYoA4wpYaRjYKJcAZxZhWDXE5p9wLC",
  "key23": "5q9GcDEoZpNRVdmgNpXjH6j6d7wvqB5QSwYzc9YyK2VdcgwzHmgCxSuY3q3Ji7aJEAPd3jAyE3x3Mfj8ShhaiycQ",
  "key24": "2wMHPRcYjG8HRtRnRYW4Z5rsXDFXazjHDjjQE43X2wPA6T7BmeDAHZ1jdtN5uXE5kQQi6SrY2uziXCfKWyKAxJ9q",
  "key25": "q3zExyACL8NwcfuJLuZ6xMrvRJDYDN6Q1yP9srWot6GeciddsA4KdZeWqgNufJeskiuBLbfWchAcjSYxJV5rPxR",
  "key26": "2c1CA3dezsNcRRuYynPbaZFHENhN7ZmdX4NUkp7KKLDHUCYUHjtsst9zW9CKdaU5HKVwV34nFedi1FimMM4CUfMU"
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
