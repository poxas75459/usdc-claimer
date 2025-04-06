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
    "3hY6n9myDvf7Bxw8rXv29Xp9WtmKs9HGF9Kdkutp5m36R6j2FgWfjZx74JK6h3D5oZSwztjF2yttezoCyZ7ScL43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pcSALVc6tRjALFrR6VZ6eD37yXP59DL7u6beCamTYFZHXB3sxbMeSJkqqaqvCFitNmUW2nEnKmwWVs8GSwaV9w2",
  "key1": "21hrtBLZfUBMqqga2mD1f4eNsFsAcfq8zVqmaTEoBamAaU17Ym8h5EmuLuMZWtrPUCZ9P8EHSG4y8KeyijiJiawi",
  "key2": "3PuxC18w1J8tgFbzLn9cBTQhpQiG2AndqgB3U2YKVy4CrVw7bJX76Kr6zW3pMD88PfWj6gPW7Xd8ZyHuZ3ZtEwjS",
  "key3": "oKqgxKqoZJ3ADkcFHELsE1EyWSdA2Qv64hxXmbPVjUjLyELeGV8TG8PVVPHXJg1csPvzxap9E9bba28zUFyHgJF",
  "key4": "5qr991k5TDuzZHrX75n3oYWGpt5oFdoUahFpA9qNiW4texzRj2btXYy2RjAwKFaVSTewGxqaMF4xAX41UBb1LCxo",
  "key5": "Lv2RAgKaB6cwxdkMuafm16sLPgMwbzMwytsHWoDoQzNpKxCg3kkvMDU8gtTT1TRFbCsYHguCejo2se5kQFf6amE",
  "key6": "5yaGWv2XvX3rRWfrjTDprxPxdfAAvnkpiE3PdQMxkBu334ZnFV6tvMcqCN64QXryYZdHHoSiGMeiaw15qbVmckp2",
  "key7": "5pxTkRrktHpnWBMpD3ycjp2nS1dksJDaX22zCvpdbcaT9b1r5TukZRa3EfLg7PGKHddex2kxmqsoiF2Fo71qk985",
  "key8": "4C1FeQu7MdVBE6mq2qE2o3i1VTRJZmRmCKw261wCLZJSTqtKVKajtw3ysVBgLSvhs1HUS4JMinscoBNnBpK6pnTh",
  "key9": "3u7GnjnUh2bNQT3jWVZjjbZCuKhBqNKwqxZzY7r6AYETm2XZg8raJgE3kPybDdNoZbeNA9SgGp3MGzCMREF3MR4P",
  "key10": "3qkHTTVG5S13JiZk2ZUEoi1fYkurZwiAT9x8QpD7H5wxurwbBxA3Xb6M6hjbmd46vXb398ybtw3Kf2Yx7Wk3xWHv",
  "key11": "5fUFa9fJPU7xzokdsvBMNS6NVA5ovEFtD4tb8F55RwKF7rT5cjaxeJqRxUFYny7EiMh4JYSGho6oj2vJFMPyG5yW",
  "key12": "4oAr2fyoWJDbjrTKvJLw6gsAADKQT5vKtGfi4C8s5PZC93pvVxYPu8evxjQ7JPJn77X8VmptsHNGnoLHpK9GZWgq",
  "key13": "HMQihcAparqKsMqbvAVuwftpnaH4RDNRvVxzCCBu1TZKVq8cuweNHoJYpCbXLEtQAHFxpmSPU5YLWWGDJ7PMpKW",
  "key14": "3iKHuzVhc8mPogndb96siDiydZgeS2Nvixigayw7pV2RsrKSe6wLmKwSwqzxgacuB6fNMxUkf9HmzVXFpStxMER4",
  "key15": "52cKEcugB2rXSZ27ADZrDkG3Hvt3BXq24BsMSRgmXzkufTk2hJmFrpkA6waSfFMknZTFfM5kN9seAmgkvZHgxxvt",
  "key16": "4ZdobLYJjjbNUPDRSt13GBJgqiyDzGx3JbXu3RrhH1dZX5KKuDFV9rBaMGuPNu6N9AUjpeYt17nBnGhh8jkNnNj6",
  "key17": "SpQjUucYGkvZ98KBtSTCzwn5obxT8u7msDtmqrzxF9tptfSYTNtoMp7MMVcXn1QMNtNFyXh67LqETkZJ6UnwLh4",
  "key18": "2rJE9KQESBmhTaa8mzUpaNC3P3J2weZdoF22pKCE8W2P6fbCTeTDVjtVpB1KeHyiQnhpiHteP28pgrn9fYrxLC1r",
  "key19": "4FXCi2kE89EhViGinqtVEYajnGWxQNSNJfP9d1VFt3YbREHwVSxTxUnw2Cu5SAt5UK2Mx6SHiSEBfU2HTAGQMFer",
  "key20": "44uCPFuXRyVp8DrJ8oFiP2nwA4jpdCCZ68GtTRGoSiwLTqguZ6bEDowaU9Kx54SN4G8op2sVfCbhfmXXRskDPW9i",
  "key21": "5727ZgeqsR12ckXDLH2e8MS17zEpJ35ZH99iqr8cGrZ1Rwi8Mia2nBNYtXiFLhU3Dqi91dRMhNm58UaCPsVNVQkj",
  "key22": "2ssGR5NYXNb6WVbXxscwsjhbui9hh53W4wkktfDY3eUeSUB14PswNop3LBv431jp7iid4evbLeDEyooyTCxAuaRc",
  "key23": "3ZbP3g5q3C1jXZaD8DW8WBaJEGVaQRjJZrnJ6jRSeP1K33ML3NC74fjyx9i7vTZic3QYpveXd9EDSKdqVephSCj4",
  "key24": "9FHSEPeZbPjVaVg789cpP3PhYmj6rnQQcM8Jdaj6gykB8BnZJN131TexJi5jRQT794drNkKZt6k27o9HPkxmmor",
  "key25": "5CZSU2s9s8TT9wyQjac83m1QEG8D8rSLZ6vkAMfo6Ee6cQubJr3PamRBmTTK3wbhBErwZzMod4k4KpCd46emfnHe"
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
