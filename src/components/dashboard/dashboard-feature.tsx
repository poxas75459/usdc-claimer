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
    "3PdFpSvC2s1t2WwdvphQU7e6n5hmqp31kDBX5SckHSLsDbPeko9v1VWixVGU8bJZtE4RwgLUuGkrc2b5dB7vQERU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62QEVzHEicKT1dpd86TsJjv2rrEA1Fbs1Pt6pmw9fGGktF2wyzqHZSjMY7efgUuQgjwuQEa56b2imB5czhUifKHc",
  "key1": "4fAQmLriqyhb8ArKShx2yd9kvENCRtZqUNR5NydgVH7g16RQQ5rfepojBwY8M5NbG6WicFjZ8FZPzR8zzS4g9dRc",
  "key2": "3oDPyvQbgWGauiJGJQoAxpMXVmp8eHmific6s7mcfVZkkXhjxpjL2qNctu6caBTw7B7pfDa86u1giNJ6D4ZDb9CP",
  "key3": "4QRHnBMUQjPTMaXQJwfzWhepwZWzGyiUmAHbEF6HCHaM9b6u2T5vctNvTa1tWS26zTsBLzJ1tWmdj8EYh12Kz4BJ",
  "key4": "2gMK6SSYByNd34BARevpwY4v2euD9XMn1nEPYxWhwdobsBADHAwvjSD1yuFo7QZAQe6oQnfSnsgqoMSLTQnFpciG",
  "key5": "2ythkiEaTViarbZWPDC3q1EzaVYumwFZCo5UskMu3FiSCcxHz1nUauLVZUdZEDPauNFY4gpwoeSpNJ7MbTku5EvB",
  "key6": "2rHptrT7qYzPz7esi1JLk3NnHNASBSsxDj9PToGH8vDjXtY3soy65WCvWFXgEYeNDAepvGUjNkFc3bS5y2Gqh6fF",
  "key7": "9XsD4QAP1rMG2w2XjPUq9VzPykrr4gSPEvwLg7jc2Sa6bovbToxtPDWpEEBdkRtGjj5eEqrNBdcAZ7HAmt4AHRN",
  "key8": "3ub3jnbnk8KCY1RoJ1BECsYFrJvEMcrhkAdJ7DfAYEA8xPzQNqJPWhYc9iEZyb5mqppYjXz2aF3H9KAvyY9JfQcb",
  "key9": "3EaMm7MipYLLhkyrbPHmLpvkdWWJZCnCYffHHmT3VRSCbpicQQJfGQArFYozKdG4dZcX1d6CQ7FoHnCo866gctJp",
  "key10": "46NDWu86cdjxd4CrZsHkSHKCrwAYm334iGFn1ViVduswx69TE43US4p9UrouGYuANNc3qmQnpZwpHd8ChmafKJ2L",
  "key11": "3QSKaBZtEASeHU26rspQBRpdYC76tp5E3AD3Bke58bFBnTYG2RuvF7eZ6y8RDekGNBV4P37q6EgLZP1rEjyRsKE8",
  "key12": "2reR7odPoAaVokN9kZPu2RG9iXibLDzT9oj2gcyG8VwM9BQv9H5T3fiYmL4hWoL2sTKtVb49tmbA5497M2tS5Lse",
  "key13": "Xi1M7VJEKouaSiahZgfNEXiSiD6xXSAECzkuwgJMpDqzp3tPLoAj9ortqh3DeP2w9QotS1SHhjq78iEG8EM4sMN",
  "key14": "448TzT8kU6TYXbtBuvaznaVo63LmtrVd15Z2Z3apKkKBEgYjGPH3kLFJjn7Q3dfABW75k5kMVwZtBQwRetNyXPrF",
  "key15": "2PP4NGqeUjR8EJRSXU7dSB5cnE9z4uq9tEdcYkvy2AFNrujZ4U27ny8F3kReLo141E74DgRMD5uXBT2sRFFP4QFC",
  "key16": "2meLFrkAwDbKmJ18YKeJHRJsTzWdM2ACKbcJijnLmQ7jTVTLKgyMMEYtnrEfyLaerdDchvygEsCoJVaZnNnxqexy",
  "key17": "Pc1Kj5g6iVGo1f6H2Ph721QJxqrAu6sNdzSX2VXpt8wgxGJpWSiNJN4fQCeb1qUSZbMb1UeUjqkrf9jZEx7atWv",
  "key18": "5dRSNgBm4JpsiydDx1U4KNstTrHRkqnHp3uCjPW5Mq4xnoc6JrWeCccV5HbstTLY1drgzHKWStQWpH9fZQPSQsDt",
  "key19": "4euprQ2VFHUDPbkZJvP4K4mLwtgv1qSsbHNNQ6wHnLCSPRrM7RzFRGdyv8scig7Dq1uES84fzXMMjBUGuFibhrdz",
  "key20": "3mxEdd2is9vV8hCkEjN1mvSquSPoekkMjA6r4Frqke4bfUTyBbg2GwFr74LV4nfG2eb2eQ5NuWKsPSGUmz9efcnD",
  "key21": "3BkgNcTESVTJZD38g8BWa2JH29KP1MiFUBzbpPjeFoxTpeyAN5qKDyFdmVxjAyt7xpFGS8s1AefbnzCbT7Mzohzo",
  "key22": "2JPsMb47vbNaZrgZQ6jVZfFyuWaWrEzV8TBjvuZyTxw15JBMZ6VDuQnM597PoPk3nDg98VNnkQ2W4UP4dD1hozW9",
  "key23": "4aC1VggvvipdMA4R44fSwt3dZveuZjQSQ78Utsu3weS5rvd3R6nMJWo1bEuRKJTFetdpniVzLo9pnudSNVAke5WE",
  "key24": "5Nnt5BgPryXiSjarme9jikUzaJu2g5URV6BFa4s4axG1zD2P6qG6d4SdfBV6fWUiuSpn6EYe9Q75zca8dz9AcdcN",
  "key25": "3TD3iTKm1V4bMLwLrJd5uUNP4gZxGnErcVd4kpymmgpQyUYZZwLBE1WL6AYUq2uAhAFYMTEd9iGwkxZkTeUfdhF4",
  "key26": "4JwH83EqDNu4Gk4jAM6JhRYeBZtXssLmQ5M3fPBud3mXWW1wnMaLMAXQaYTH9rU8trD9wTMbdwAZC4WE7jD3XGdR",
  "key27": "2aJPj4LivLUJH6UWmJK3WcZ5NqNWQdrnuJEcTRPzpSYqttwrUvSEig7Tc5hizuUwmf1fcgRTg5ht9HPG1pYAKXmw",
  "key28": "5qv2uY4zyJDoSSa8bTEoCAeTjkQr52uGrFPTKFEX6nGRwDuNZgiRraM2mqPP5iUtjD3npRJGSFweDzDtRgxnoKYL",
  "key29": "V8eMZ6a7FbSba7Q4Wb3ZPxCAuNnv62tzRurfffZpkQ8pUpctCefLunV59NnzW8NErQVvJxcgFeJtpgtmo3iXocT"
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
