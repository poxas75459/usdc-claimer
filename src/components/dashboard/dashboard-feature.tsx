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
    "5zotdyAeAvKb6M44tWV9W2PV9TopE2nubqZMRwAkgm5ZvR8iKrWg4U2UBZQig3px1mmHmhEyyoyy47LpZef3uZUy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55nxmmJtP5BfvwVkHEktbe4SPMNTh55D9u7DURpkNg57CZ2ZqyR6UZ7rfRPKu2pqo3NMNW8JWktv5v3sB13XnbSQ",
  "key1": "5u1s8rNsMgJJ2LkucLA2U41P3DRtQMryznn43dYJ1zRUWYSuGUP1fbMUmPNQrPng4tMqMdyP4drem2mViNMC8TGH",
  "key2": "3PrLTF5ewNR45tM3jCS9rxXdX5aEu52947S5CFPwkzBjyt7TEouFXux8JJ3vhRWnWmh75uryZKh7kLqNN9vfc5t3",
  "key3": "4Mf6AtzniGQCujXfw6eHm6bzLEuzbY6HwXj1njyoYTmdokAVC9Q2Zjep3qzd9vh2oMw7JcJrPBfiid399mqpEm4h",
  "key4": "4PgDKJrnxPo5vRupYoSRPoZ49gLUAuPcajJi1mTGZvfYCi62k9KzFQ6PBSMZKEyhoaChgzg954saxXv5gAiAqSqy",
  "key5": "4rwc6tJbonxAzor8E66BBmht71tahMdQvitLRQcA3DaXgp7DZgCi9GwxeKS8cez8kztDdh9dgb2z1CUadh1xjcsA",
  "key6": "UE9B8ec6izkGHAJpA5Vvee7x1UrxbDrZwMbzp8xgWScxwyWRMWUrWGdQAiSrz5aRuoATHgYPmq3g6fCTi6wsLfJ",
  "key7": "4JULdxLtKEbXq54yVK94j5faVaqnG89ucTzwzj3zV9QzQrb4dRbS7D6jbTXN2AwwnZzupgBohRu2vQrFGMHnZqVs",
  "key8": "29xLFDD8t8Tf1g9cFMFaAWK25RQpAvUcFcbvZo1dApVoNAoQKhNiFGBdxaf9MefpUDYKE461ED1iKVYeXuLk8PUy",
  "key9": "2VRWPjmonVAEw5GQfRhYipVR4Nkuh1V3HBzD5A94rEWA3hLoV4PgZzNpzpCyenYie2d5tYCCAVgFq1RRT2fsuYxE",
  "key10": "wQgwGHvYtA27psvpJfdRJFKk6LQkhMNE6gLa7cuNoFCNPz5xrCG9wTwQqeQ2bouu8FqZSbcXFE9D4Khygu75RLd",
  "key11": "4FohLV8n5cLLTCMLfbLd5e1H9sFargoQ23j9ToQ49HMaphWVid1Ejo85jkrt4c9zDFk4hByctX7MDp6ibzkSvjHn",
  "key12": "2NserWS1g7i5sqyzgGtzjg15tM9tVbyLp2gChZfcyh4A7E5tBDe8XazKLHS5r6LudVQs7fKFAfSLCq5BqwtZyXva",
  "key13": "3GVwfs1mn3LkNiQVoSXiRNapgbDmeBMeodmfBo1n1pTmNAdpxbPo3pDdEZfKcjHy8JZtwzsqA95z6BMsX8AFqhmx",
  "key14": "2c7dykeBexe3L3HTMPhShGKbhPfagHVvEf5Ef3dPR9czHA36sGqHLGex23R6aFkDpPrw72xxqLTQDd55ZNL1WVg",
  "key15": "34YagXCWAy4VSzbKKTP641ExLF2KiSgmE9L2ia6az77tGjiqZTULyxkZiy6RTZTSQUt9xYQbvEQHTtB9GwjrX3mQ",
  "key16": "3dwNuQTzsjzuHTUceh8BBf7jBsW5cnRbquSGHL56QtwZ91FvDzENnyfTMovnvS1N8d1DZPzzG9Ud4kihVaUSP2yj",
  "key17": "678cfL7cZKQKSAcX8uYzFez6u2xqb7EN5qBsozdx6pQedvMzHMUvxqJ3hnvKV28gunVVwQAXT9hvqhKtW8uu7sua",
  "key18": "4HUk2gCgK362cSrPHDbKZ1qXn6hKuN2URV5WvU2pvMZPxEh1aYTGS6gM1bt4Qcds49z4XxnzPJyNsUYbaMVwr3Wv",
  "key19": "vhwoz1dP9h43dUUYN46uav6Wn3wzjoxY2w7vJknbnLKbTG66BEVMG9hmxZhdsJ91eSfFin1iZQY1uEWwYTSQpbf",
  "key20": "5Uo61Av5sGizePdzQUkRRVuMYQkcY4L3wPtz7AwDc9fBvmLNMxqzRJtG6XfuGCWPoHedWRKzykbGRqbap2sLMNJ5",
  "key21": "4bRZRtg6GYrvz66BDccJH8kAHES5abowZfKNiFP1cdyKBwufZCHdstQp76C9WuUiMKZ45sfvMtK5LUuxrNaEaonJ",
  "key22": "uwThJ3tfvmqDtbT6Da1oSnwP7g2jC4W5Cn4uy4zuYLLWpQdQesTYMU5zABRCinX2PuBwn5pFwiapCsw9k3svwdK",
  "key23": "5Q552RyfqFFTSjTa7js74VXNfqhYgQAPUSxFVwrZbdcrUz4GPkxKXvy5zDeWedPfcquUTL98m26xRvMx7mmDuYCm",
  "key24": "3zmWsEXmEJecJAktYW9JhMdG6mG7UsbdS47S5kjNhzqtpGzJthjxkRuN7D35pR8AYWHfVapnhvYGJc7mrnWqud15",
  "key25": "5s2ZveniWizgQCrYtAB2pMh2w7TsnAiQqd8rHaczcfug3LU5oJt3n4cRGgeLe9u4Mn56ge9pw6YLrMGK9CXzttQx",
  "key26": "bXsaAAprGywCB8Shu6CDSKdQ3uRKJyf4EzUUm6mNH1vHSxvGeAVZiWmm8V5KNQ39djtb6WJnwfmYJDf6LJkRCtr",
  "key27": "5jkQF9dDA1fZjZXkAaU41kFYYJtxi19Sh74PGg4e2YJDPWMEtTWSHrPbBY4FR2EA3ekMub7MY93habXsBgpEKvFu",
  "key28": "51zrZq5VakUnd5BzRrUZXa8xaPjAfVenfEo2CYvQqWUgzX85zKY7xw3KRcdAsRHUDqUzr8wDUD73iNRZAuGJYgZ5",
  "key29": "4fNnGuVeaSGMSf2YepNAosxn2xgNYYtudSReVgzn47r2qGrhn9Hi4jjR9ZxweWNUxFsUYfkQueuK8Tp34JxWmQfn",
  "key30": "3YyrBj2cezXsJNvipgH8z444Lbm8TrdWQ4xY2MgLUmV4uno8nJMRwi6BqFmV1FuGw8nx1SZyyhGPCTdbxdDHmckL",
  "key31": "fHYAqQYQv81qG5aBSz4T9xPGbmNLfQpwyhSeq8er9SJ4gSiujwu2TmsxzxfVBoC1g71EkMXd9pmhSuP9XyVFDPD",
  "key32": "261XudP2Wj9XiS3ZGcYUVbfJThYTshNgLnvDoC3M2wpjdH4wg7pW6LEex56pTGD2uJm69UbkJLoJQ9ziC4iig2n2",
  "key33": "2vswSEdTdqgCAs6N1kXMSrKNHbk3YA26bhY1gnVc6miC1oSjBSY7XeQ42FXhY4dhSuRaq71ZAx7FgoAhxcNboFqL"
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
