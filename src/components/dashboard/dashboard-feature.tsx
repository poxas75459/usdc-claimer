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
    "3jqt3X2ZE3A1xPKZUA5JUbcxNamJzMyJAzTYGLxFUHppAjaen2cJ4UAFG4Bhz5q2Z9DfwpyxC8EKVFLihirwstGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kdpWRTLPEDuHzAFZyHVkRfEteG5BnrUVySJaafMsyE3HAu1oePWuSh15ecgBwP6pG4EKNEs4Po3ZTbDXDheinY2",
  "key1": "3nTCFA1HkH1xGrmx8ke2F2AtfjYPbAsUy1mrxXt9xhcXXDa2Y7oLXr2rnTn2Qj6XW8VQdX1m5QL5mWx4HR4d5mDv",
  "key2": "57CMXox4EB4he5y8W1DcnNtNDKJDgEhPkosg32wu6GPHuB2CfmxmZjz737DXApikRBKHnYWLAWu5dH7GwJ2NmMxH",
  "key3": "toQQoej7kxXkd6xKdEShxWSVM8wiQHiyXPsHcQb1kkohUsFBwwzLV9XjmEHxYLjfxeMMjVjXUBGjsFrE419NXrD",
  "key4": "591ZUFVVAGX5MWTfBpNe9TyGHR8VQUcdJQaHH53eBmGKoRRJjbyJ8i5AoR6WesmaFFLij2HmNXbdAxw52Zic6wBV",
  "key5": "3oFwvijkThQy6KabNY9DGg6KU9L9HmvtNCjDfibJeTsExTQKXwhk3eyfJBTJFm6Pe8ULwh8N7DbvRwS2QvVe8iZv",
  "key6": "4Sc4tZJcZCDtfNWm2p4YByPDFrhAJFRh9PEzsmJ9podFhXyickArq1Jisn7YVPnxfKmQDbd5nKUGspJeXbREkxNv",
  "key7": "5UJnEcpKZ3PdazdPr5R4DNk5sTzq9dLEiXQHmAmSmZc4vWWvY3hjmyYH3ZfrXNf2oD5s6CmZKf6wZLBvLDsiNNvF",
  "key8": "2PWTrHkKYFAeAMP2dYt9uhwVnH9rwewWo4v1cf2VKBGiNGiC3ucwMJADDwvcWMsC2LLKyVPkitQJFcDY7W9rp5YK",
  "key9": "G9U2Sit1EuWoFfjyF9vfMsn8VRY7fQPta7VyGQFmBxN2h9aWZTaoGJcaBncWgD6GryaWC6pQ88ETd8pymzE67dR",
  "key10": "5ujGCNBawqsDHHTiqAJ4XhBFYD9gr3hivWj5pEY8wcjskiYMbiocxRTFcJhGNDyuwNaM8vdGjE5EaESh9p24tF2V",
  "key11": "fowAxFNGSEWNFQiWeYmEPSfSgveXUzYvUZhoB3F9LiLZZFcrTDWYh6qNHwUMvgHXXMZZMTfMV38zobebTYPrsuQ",
  "key12": "4MMafz9PPnY349sKD7ymoiYLQKWce5qEy7KnBDjygD8L5bXtJ9omW5YVPqT8hqednsebwFUu8WXRTqoEjoJEBoK9",
  "key13": "41ay6VTwi7LBJo7nRVQvF7CbCX4yLAWVusW1D4xdt7cXTpnvu7dWEakXyTdBoyCJa3Wz4o4cTYoHDSbuyQTcuKKo",
  "key14": "5bw4ccWjmTYRB5EJGWMca7wDSQoWGR9j6EmCKhZuwkRu9YXedZNXfDkouWzh8YLdWcJiJWN8MMF5mJMqufQF78xP",
  "key15": "4Ak3FFcMCiiyHtkbew3y7yup5VJvdx4SPvjDDhHoyjXNCJ2MZA4ZemM31cywaWyYQG2sq6STRLByvejc1V2ehYsf",
  "key16": "5YAH9mRuNyMYxqdwfRkEAcAdbgfkDXP7CXRBqwPL38C1FzRuBxU1LZrA3gHCeBwUpJCSpNvLdBiD9hDtS272Lxp7",
  "key17": "2SvVSBgUGa7rSf6ch3kqfkR19XZFBQHCi6ryDHSKwELBHrHt7tjZPRum11FUGrHyGQDGyNbX2EQyfWzPsMKxeDbL",
  "key18": "2XGve9MusqdwsJVwzY72aWjtPkjA1z188LKmvmYkMdBT7mywkHPHAhSd25hcKa7ycCHME9rVSeU5fdwe46ueTHU3",
  "key19": "4bC8d7fZAyebi5sTHknBkqDHBobGX8Ftoa2QVJGFeypqJFL6FazFgPJSYdQWTmZj6Yi6fyHKWaBVeiPv8gAJcJ5V",
  "key20": "WgSeeyupcmvF7ZZV8mnAYjwxjBwnGPb4mrmFAVjKFxNujCTHdNBVDDTTDnfq5xUn86TQLvx8CQDvjnJ7RSJ5KaS",
  "key21": "4x9vq7Q8f2N7Uz9f5sF5PWTkLNcZpia5k6JssxdNTLmSFm8DWgD8dhUKVCST7Qt5nWMWVxv79ew3N1KcbwNKsVzJ",
  "key22": "4LnaFvYA1ZWF9DmLaDT7WhrZRG8GhpMQ6y1rvUvtvDBhbdjLSPWRabLZnpX9fMfvUEmNBRYL1sJyUAjRoZtbaHP7",
  "key23": "47S32jqEaJkqwmokdjAikU8Epyxc5MrLpYVeAYzvsTnqFHMynb3GmoaVxtKWz8Yc4xcrT1mLtZvJWrCmsqajFqbS",
  "key24": "41E5t7ncpKTYvVx48rDQEk3LZcHJvksz1a8TkDhyTr3XKt2uCUG7x1m9QHR1ZRJFgUxfykYaHpVuvL3C4LjU22A1",
  "key25": "4S8PxFNov3pLTSLACz2sX8HWit8D4A6hrZLQdR6m1htqBk5s5ExckNiC4shWRyn1yb5EhHEL41pE1wS9UyiWAuoR",
  "key26": "2tuTiFi3nU91uZez4xjpxEvhMm572CuxWYHNVzoq9YsgKLtGYqq6vaFfcRDkzeR6U5HxBWaC5qWUiontRFciQLXv",
  "key27": "5sfquNxPt3mdijXwWdyMQAzvirX93LrEp1JauyaGoBnvgmGzc5XYaP7jXwpyrnaXkWDpB6vVfR86DTwRQJBXZDx6",
  "key28": "3pvKsGg7vsD8xpgL82X8rYfqLXj4W86o7wwPgaNQrS6aRQhjDGNAuNURuamv11G3EmZgS5rXPR3DBuBYMaYtzPz6",
  "key29": "5aad1oP5WqBW7S8dTpjR8NygMFit8abJbLueGxTCuQUx2SWqkQhXLWsM9hTYTKPBCvH8KEZzGRpxsx3zPAbHdt9E",
  "key30": "5a9DLYFk6PLBshpkykhi3oPvRpiSnpemdFcoCX5pnJeVX5J35A3zvyUKmTo47LXgUpkTYf8MNBdxpKpsZrvxd9Xh",
  "key31": "3JBrAnWzrg3XXBpi41bceLdgynR9EcDK31ozd1Vqe7bWDhuDNXMxTGURARkiLK3QnmBjSTGDDzzUp7XcGh9wbJzU",
  "key32": "5bDmMKuX3gA1LZarjjGDJhGvZtF1M2eMSPEL7EZ1J4VL4yifZfJ2xjLxo4hEk1p5r9NdQovXLST6NjhgGzRb2ebu"
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
