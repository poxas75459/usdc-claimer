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
    "43GyxzkgzPHp93vyAyptYToFb6kbhHMjXBoLDdY9FaNWs3wwicdjGwhEMmn8UWkfZm59CTwC4y6PBCT7TTU1RtVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gat7J1q9WGUsKDD3UxEUDHQ1EwK46a2hDghJXTWDzwGutsurwgHspsa8N8VueQBmSD1RKEf1UM8LBxFCXNcRde6",
  "key1": "4Drd4UHUxUoBuZsbb9Tiyo5Jvv9CoeeJKCz7JeVxzPfD4jXw6nMtx9SyHFeAoEA3V2U815ABgakxMKfSqbtjUpGR",
  "key2": "Xj2rGitYeHia8mEbLuQTrf14xxj1ReY6WRh4Lg3F4Zuokjum7vG2Dz98BvUtPkC5LYtrie5uu3Fy5ACfQ3nrAfp",
  "key3": "5TcmS9KKUPGGhb4Sm2vjDftEfraN2yqcDxwkrqLgeiXjbsrSp2dAJikgouXUUnBDfE25RMUjkYUPis78d9Leoonn",
  "key4": "4KLhpFZJ2naLpncgnEs8juTeYwgv14o5wKZJqMPtHwgrSHZ5mDHEusSUzEdiVB3Kf4uXTk1TcAAH89TCGw7PNTZ2",
  "key5": "2HcfQd3Zs7g2RN9LbX6f6Gad2cXaNNXJfG7fqRyHJGpGdFcEm37tPAtWeLEVZiegPFKz1iq8H9st5ejpm9oFy1uT",
  "key6": "3CmBsNedWBDVpKocHJ7kmtgtT3qunJSC8iJGYzcfZm8SsvJkekQ4DoptJWinnLbcZFXSMnNx4MM3n52NqLrTWPjQ",
  "key7": "49Ja6MVNVBQLL8X5ktjNyaFczCFB1d64cEt1vVi7AcQccTduBWxt2pMpfKzMAPBUJZmmquWw2ECiFNxusxvZifR1",
  "key8": "55bFdNcMM1SKje1AgVxYbqF93cu6EtJj9wT9hap272KvpJQJj8fZ3Vdp2Rz229BjwdZ5JDAfSg1doc7QTKizxNA5",
  "key9": "2Nms6NrRfdwTFeUC43sHR6jxEJWFD18mBkKs6BNLXnsDE4nthd1S3ewA8CWoxCpgjANxzXckNhbCt4AUVfRPbQCT",
  "key10": "669zFVFj5sZMtEyMSLBvnkQksBfBrXwFefm3nZpCRy58GsWz5PgpjF2PJoXyS51giCgajN871TAmYkCYkod7jjFj",
  "key11": "49SQBWe7U9xpUKzbC7yTMsQA9BeKRexyeVAB61BEwWHcgkPAkwtWXps6BZRqhRQefWXcsqXz4D6E1aAHtSBxFEXs",
  "key12": "5nUsYRKH1fhZUPgku3CashwmNt1BKZXNHMcCMupDfVtwc58LXMgMiTBtQkQT6n8LeQdFd6eAkdxdZRwoLCwdbRgs",
  "key13": "2n1CQWoLtmeczYaxLBnqVvYBBU8wsHQUrtd7rsCU1gzthPszytRSPys6y8em7pmF6o4KbMAGErW2VirnqsA4rfC1",
  "key14": "3HXMpnFYDUwunG92WzwNMQxWPCM5cr8yX7TRMzSPEkc4agKKiPUe7QbYmfth4Xrdv2D7Z2WGFUmYFgP3cwSzd788",
  "key15": "2EWCTRef47E6U4uv6YsgPSaJuf3YW31sHoorheqzJNfZLvZ4UhnZkdXuyR1eHHoKy8GY6VHYjNWxKeMfavVzrqu2",
  "key16": "3LbHCikUxpYq4ZUDSjvswKPCwbPEa7zEu6LfqWEhU7cbyNxQXw3BXiXyLfJoNXjSJV3iuxqUQ616e2MwRnWJdqA6",
  "key17": "CUWbtxTmEv26Rp5idU8EuFP7G1DgzfuQGDpQXDT5avmYey3mfjcxkEG3Ehg76D7ry5DKAxw38j8tivZ5KczCxFU",
  "key18": "4f4px9bYuhscWZiDNuvJLK7K8m16YWxYc14Lx8mM4KpQYaJjoKAyqyAnq4VGwWk3vYgo4P9kdrfeauiHGudXAvZn",
  "key19": "4hVRbiCTLerZyjWQm8ruktRA6wHguGShCRRudNkqQ4qj3gbCrs7zhZnEbMSNbSD3bQZZ42kUJZfT48goBGTcnVqt",
  "key20": "4ZWyTaybGjWkBhisjMDnxR55kgepJPHFksdW7XTbCzqQvWJC1tr8Rdpz9aiEjz6wsv7qTAxa6GDKQQ4L27A28vec",
  "key21": "2UqK7t2hjW3cQSJiw9wadNtn3brrpxM8HP8GmaJYkM9YgeZp3J7ErnmoRVQ3LFsRKrnCaH8WwD1X4KM9qe33r8Z4",
  "key22": "58XLmjCEcS3dtCnKkj5jdtEZnXWYjcE8yppN73Rh67HUDTPMaAJY3CaGw1GNnvWcrNY1AT5mJj4dYALzMc7khFg7",
  "key23": "5oTmx9YeWG4w4QiHpyZBMBCojfWYF1obxGhtmA7gUxpYvy5PSKhX6PWHaSyWEZaM4jUqHDgm2xRLcLzKzBHeEp4W",
  "key24": "4bendHFfz2kxrV3QcKfke3McejQ3sdNL8vhR84uut8cVdzqzZqhCRoVyoKqPceZy16GYLoGCzRaMohp3fc3HB2XU",
  "key25": "3SGc7hMqGBgJRuZYQrKebhfH6XBxNaM12m3T33f4PActwcd26nZ4cKvh3sH4K9F5CQcohCrfBcEmQJQTQ2JBpWEp",
  "key26": "29fRJbWoWDiXG6upzJaGnWzRu8wbyidCcKMPGxZVgVqJiSYXmcGBuzxhmSU9uwCCkLmpSpsLbrJe4VqjhQMz8mWQ",
  "key27": "58F2faJDSwThgrXrkTmnmFnxeEw29UsSnrQkdQcvNZQ42EfkVCV3hViJNdncC4NPPbSgGo2EMBg7EKuhcY6wvDYZ",
  "key28": "2yah677UxWX4y8paT8qbft9f5NtGcxYokZL7UYuUkRHN9LdKyvkCAnFczAWdi3wwMDUSiiyrafhcv9wpMqkQxds",
  "key29": "52rpPJhvM2ENeFaGdThwytMPeXZXHBUXwo1bgvuC4Hz6U5aUHayudo8EXe8fHjVYSrb4ZHawCEfJqnhYFswQc7pf",
  "key30": "3Q5xeQysebo7cmsjMvGvTPG1korFxn2WkvcASu8ef63KngDR6TqrKs1u36ancHoWnMKGQrhjPntjCC7LYnsXDuXT"
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
