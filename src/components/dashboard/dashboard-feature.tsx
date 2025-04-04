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
    "3oTTTa3KAwbfFinKBEE778Pgyn8DiNgHKW6YYaksDTky3tnsSZD1w76bTTGBKrTUKfthDzvcUGPVcHU4WHpP158K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48PXRSNyEqGwBpYwexT52XuFkJyJsNt8AjZFU69WPejrjUbncjxYa5yo5EWykSxQsBgA6YyrMkgjyThUByDqbDwX",
  "key1": "4n4zUjGsk86yV6YhZHsUx9zScHdhZbGxjhq7V3L7qHdPmkkvKFMSo6yUFb4V7yxDdPMroyje7edG8UZWdiB9dhbH",
  "key2": "2CEHhmbRNGNx7MFjJdDPXFQuiTTfSB72VKEmKEAswYjeFUm8K1jpASkkaL2af4nyyWPSCK2Qprv9NAmEYEVL6xpY",
  "key3": "4KGJcazhEpXYv54jLPtUzWuxqM7NDkRpqsvGYvmYQZ7WyhyhtgzLFYMQZDn4bRRK1omf6jQUjyex9XjgsEsQ8zbE",
  "key4": "4mH2Rqt6k4SQRHS4NQKz6CUhVhbEoLxBWpQLNWq6D8ZywwBn9UngtRYc1rT7y3TXdpp3zNzGB9k5sxpsadvr8m5j",
  "key5": "4fnCFQWN4dNpojUjjT1wvtMx6imQiSDmhYmL6hXtttPBP4vZuyfh6akMsNrYdhn73VbTopPMB4Up7KCCfQvbokhh",
  "key6": "59EgJakb2EELcz2uD1kKhHVQRxASLMsQnRTf5u7DGypigaibKJh6wCaYxAJYYXG57SskXoSDYnopm8CmZdZ4PbG9",
  "key7": "3yghzwPE7aYt5yYaLQdat5gGXeoCUGt27q4ryotydstbkqzza7zeSDZj8PKK3Qp3Jcbjqp7tAhWoHgwX2oNmJwqh",
  "key8": "5JfiMivkxn8oLoA8zXTRK7Zqpt2QCiMMoNHgFTM9MQVHPuKo4fBdQhqskcd47zMqZDwA5JR8A5UZx12RxZhZtxfq",
  "key9": "2yMYGTPHMp6m5cMd9hneRNgik3HwCvdXZowCMrnPSf3C4UnNRcWXXB6mw6fRzbVbLfrHdKzChfXRi7QtiLN8Nz34",
  "key10": "mGpQ6EVg17eUVXbwCAcGtvpCTkEAQrHBouEYpXssY9MuZK1u4QqKnpmvoZEG38vp6QYncY11pWhYUi4utjwy2cP",
  "key11": "4oJXpWxHiYcETswqgcbqUMVRh2E3Ahea7n7A6gwkyhpngXKt88hnePfmHkk5U4ZbwgK65AStDKtMZiRx3otant3k",
  "key12": "4o97G6ZcUtbWqRqqdj55d7yUCfk6QQZCJ5divrigeikVUYaS9RzkpajGuSayyGPSuoUxq2AWSaWZ36UVoFLy7zwz",
  "key13": "5ivSKpQUkqYy2Gs5WccjmGaNXCNCy2xmsoB38XzWmDK7vKfXNAay4RSwcC2UVySDFB89AGSdfLcRwGw4DF3RU3qg",
  "key14": "3PFjpjpBh971DA1ToaxsEf4tQGXjBUUykfFYiQski1LhgZwuD4aaTgJRNcQKBLGtX2dmSME2iQjcYMQfmVBqMwYa",
  "key15": "2S7DMKYUfhcY8NzoKwHRJMZ9k855vp4icAySSAxCaH4gvaqWfcHTuNrWzJg7s54XyCp1b9sXL2kZ6QtwGff5oavC",
  "key16": "4YhrfQAX4oTGitLFtQEi9n5qrPNHAjYmmcpVCrXBBnkdA4W8Eoh4guLvd5QFeBsTaaQTswhVuvu6ME9eFjcWRS5L",
  "key17": "28VviVwv1Yfoco6jPhfeHjve7pfKbnGMiE2xkxbSCP5AJrp31EoPRnNnSZ97i7kXmQiapmqgTcNatQNo6F7qL6ha",
  "key18": "62NYKfcvUA3vuU3zMAAQ46PbbbcbBzXSTxYSisWH6Ywdk6oJAoGT2JN8e878S44kZH65RBrhm5Spm1PePfbtVc3X",
  "key19": "3jrxujx7pByxqyTetVQTcgBqZepethPzgnkb8Nsg1a4WBzpUWXmaYPgvL5qrSVkLLDoAN2GzJQgpPjL3gpVt1GU8",
  "key20": "TFLY4GQgoBTDHbpPmSf7uH1pYHPHVSBS18YUpRFQ5P5VH2kCLEZy417Gq4hLtsGSSYPdkx2hCzJATfCHCKqUo6h",
  "key21": "2NeZUyinChTy2WN3YgZZ6RpLkENS3P5Vviik7cBA3i1rgUGnD1Wj2eqjYW5zGoTX1P429jkdHeckowkeTNMGS3Yw",
  "key22": "39uwntWHXs8qeZBUBn8jbr9vByWwhsa2ck9DtkywMaXgFnbe7X3Q2L6ii4wLvpNRGFd1ebcns5fSNNwmwY3NWaPN",
  "key23": "5ySiWheY4RNpQzJ6kMtJ3X5pPESK8Cou8pFE65jySwWN1bnu1Z5B2nNmYbyaTxHZHmhjD2d8LwV2c3Be97UefiVS",
  "key24": "xi9Kz7FGwsNr2NnRzyG7ck6tPEpE4EUZSQ5PYgSYrEpvAu7wnzByXRa2BkLbwPZ7GYRa6BXTtt35QMckeF6Xny5",
  "key25": "3v8wHjToeeF5MpjbW8b2BvhNz2thHFQwaRigCmh9RST54cDxJ3oSaz9td8T4cBKHm72hiPN5cKhrQENiX64LPiCX",
  "key26": "3zxX5UYxgs7tmjZsUJYnMNtxkeCJf56tVNNnEWyCmh6xAbggTicQ8xCyMre1f6GWooWNQtxQrjf5ukNpKUkBcz3D",
  "key27": "5zLVHVWvesGFaR82XorwiXHjCK2fuY9iRup7buCVhF24uRKjJZod1cTCUbexp6LYKV1TSaVLpqpaYCUHr3oTxX75",
  "key28": "2AR2HvQRc33PbVHJjacW9W9frWt6SKbMcbYa6mKRpGc8qiSmt5HfBx3M69RSV1NmdReNUeUCJytyK4mFmgUwWygi"
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
