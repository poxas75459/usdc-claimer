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
    "2fBxQVj7ZYQhDQGn7cTrraVt8qANrS5fvPh7cMMq5T5VgyXdprPU2Ai5g7iEQgRWiFt3x3F2gYGa6sP5cweci1Wd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WrGrSxE9gJBisvyL5Xm1hrywxoY3Dm6uDSkLNGAcADuDagKWmCBr5niaPLT7c46jQYqeNK3ZJ2PfFv6jiZAof6o",
  "key1": "281wDsA7RLvnsqfNbaYDmvJL1bQdaXJ198jxHY7A7fgsAD4SUufNP6k6CuXBR3MKi1izssV4LLSx16eeiCQ4Cr9h",
  "key2": "3nQ9ceFvx2wp7Jv7HksBekLg3q8TS51ibR1xYEPVYAxvADQqx8rgytVBgYHimUPAh5FCZLusLxVybRLyNGnkNHi2",
  "key3": "4q484LcLDwua3zU1koeLH3BaMp357bEcJEGuKbjFsWLS8FPSQHfUTDiMxGRTxYuyhRq2v9f548UT3JvGpWKgjiSt",
  "key4": "5cQHLvWTFDAiNpecmR1GeGkjGEaimzyb7pGqUU9aLvLTV4H2QMG8jMxaCQ3YLeeybFV8YqyLURC2u21f1RerV8Tp",
  "key5": "5GzCUsANdGcJb5j2fwTjk8KNz7Kj8aKci2imo9q1RzozhhqDDCdoZxqR8atwYtACx7G5UnVaudFXPDPVeH2MT5jP",
  "key6": "5CVe5Y3jG1x9fDztYjtccAM1wH46TmKE4duxvn3W63cmHCcw6pf3q8c4dTEj4aiqoZoNsQEPA9T2r29GxbpFQPGf",
  "key7": "4WxheEawFzimGzEbYdH7xU65JK4hBjJcCctvaWnhwsKxjtncyiLFqtiLFXvgqiRmPKNh1FTTqhkaQJtkooX6833S",
  "key8": "2j7QopgZAaA3EnQrko2nU3naCg6BoM3ZAn4YGi4bEkRLkqr8iQCoA1pYgRpKjU8f1J6EHRMk8UpUfqkAEFiHLRq3",
  "key9": "5mJgNzczfPezEz5RtVFmk67zy1qFWzm2cEhWV7dUwM4J6ZyCt537smGCnPSExrPUNQY8f2sXEsuJmLKsNKKPG8r4",
  "key10": "5Gu4oGGoMLZqKRr7gxF3Pch9MiWtxwziJLfgNU6EkXvnmj7m4kdcMRXEgA7q9F69kfachNUaM7bLSv3pADB5VYmM",
  "key11": "263FW8S2ee3oqFS1NpxeRPeJnbEh2N8EisQkcdQgxzLzbor3pgYxgpQw6pz2kGAUnk5eEFBLT4UtX4stbfwBdyoX",
  "key12": "5waXRUTxw1EN2L7PSxNgMhUSTmb9y1XW1LkUBtPdXD7zaJsmqUBAF8i4PPgfD52B9S6vhQ4LrNt6Z9RrHSjfyAKJ",
  "key13": "4nKAnyUHmdgozDncTrKQ2VYdKqurA2grGgUckJfyU2JJNPQZkcisP5BbQFNhTTchx4t4s3fkFTr3Um97nvvLB4xd",
  "key14": "2snboQdQV71jX3n73KU4o8q8AUKVuwRi4vbjiCVqAQWKo2SBDLHwxgbuv3K3nVZUtdZK4FLAfJ7hb8XP66HV8NLT",
  "key15": "58WjtPZ333bswhWfdCwup5uJqKDJNoH5TnNY2QdScpGPatkwo2Xmdvnjk7caaEjdTMgJdS8BYHXF6f1rCELVtXRR",
  "key16": "5sHkZKJXjymVwJrGYHUFhFMN8F8QAsWqep6z81RvwTFpYJsTPQSaondrEwWHnTTfCJkbzugfyA8L7hvPc7zNGNLP",
  "key17": "4KWUNqAN6yPdcbh5e4LKeN2tgGiJrfWwMQ16DxZKneMFizrGEGreTrYHq1hgqqfnh2tUChsXTPDs1rURcmsR5VRg",
  "key18": "5GhLGWrS34u2xpk4ZQy61eByQURxuvdXP8YCPDdDbcnL3CoB7tMwFPZ6FAJPz8erNrDRE24QQnVoYuKyJmNDKy4s",
  "key19": "2wTCtEB5d1EbSbLagEsaMPVx9EbzM9xbxzuWJ6y6zwqUiXYvu1zyPrDuTFXy3LJ77PJ7tQvC4yXRPJUJY3f49YUg",
  "key20": "reMZfQRmKk5k9X2XXUnbvx63thZaTx7VpNbCP1f1ADeu6viMyzimQocX3ktAj3FsLN6YHVeEkTGSpFwDgXWRVE9",
  "key21": "4fEc6BbN9hBuu2epGpC1uFhfhTuHhiyzHDXaM4tYK6SVPzkXHV6xv8xf9mN3h1mxa7dhibp3iVJv3BNdaxnZtXuE",
  "key22": "4jnmCGVufL4m7WqApj7Bb6DnfVW1q3EWhGA9S9Z9J2ccqM8n5mVKv9DU9zsH1iX1ZqCyZqiJUmLr27wesow55HsD",
  "key23": "2hdHp1eRWZ1Do6FsoF46HanVemEtugSJWZRS1gecnud5LKwAekjJRpS2ZMcmU71CvA7NQSWQae7pqeeM1voNeR9M",
  "key24": "47sbnY2G6LPWcTi5ox6xyFNt4E1gcqZGckT9g62W47RjmH4DiFWXeeMD8q3kMgZ3pLfX9CPVXmh6McJA5tFtHKVB",
  "key25": "5AJVBrzztbPmLyikTk69P84aQ2HqqSiLVmKHW9TkR5wJYW1KHn5NtTUxZBLfDMub2re5q5CGmAFTAqnsM3x64oqi",
  "key26": "493f9A8g2MNm57gUrbKrBYgpUxX6CiuAXWw1sVz3udwYuz32fd2s9MNEXwJMapEcj6SsLs7kmxhKrXCu4d3FKiiX",
  "key27": "C6zLGbJNnqRidBDw71fsAgbJXnWsmbgciyKqVRNhf2tS6AGo5BEnQsfhv6KCaRzVKVkbirVmJoeigRZzRbqhvMg",
  "key28": "5kd1pFTkVZ1zFe9xHcPJXnKrFSuPjBYtfw2e1Fo15ACb15DRyozeTpk6TZiznSK9E1CfGLPABeMvccuWf2pnmViZ"
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
