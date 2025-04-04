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
    "xz7VEcUto6iDi8z2Qr66aVUg2HqdU2KRi5n3LXNdJkirwCXkJhBscM6Ff36kaVLZvujSomE5BVFwzSHxtWWkBR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zn8XVXHMbADiqXqnUgZdFW6cinJML4MiCEUk1Ypf4jdoResDaecEet44oNNe2G3dyuNXnV3VJhKjLY5pAeTLYMz",
  "key1": "3t3gmwpioAaD4WLD3PP3v5nhs4APUErBhUcJS3pD2Ry9tmDEnF4ZSpViThhnUVef325rGUE8noJrShfFsBmGjkLZ",
  "key2": "34kVocNYCTXLCycoW5e4UrS6KAhKXXqrq1878LNggkrkz8mhjkfavR4taBZmrqcNC2a43vf4A2rbcJrdBi8wQhya",
  "key3": "24Z4Nh9e3JckLEguv2U7dXjiEkv65BNt32YnT6QCYcTdF8iUCfgXyBsTn33RKFMehaMcZ31pCTxYxLxpVq5BoTqX",
  "key4": "5A81CfAnNv9QWZnfk9EUsjBnsEUTMuhSyuDaEi4gCJBkRm4ZQJuok9JCHbgnbrZvrNNPw7XRyeboKd8ESMXG6sBb",
  "key5": "3RzrHVwAP9TjWVWZHstnDpBmWeEviad1cPgJdvFrjVi8zKUrcDbJwcFTMxZRioCqJi3d2mHNEKDNLranLvy7hkbH",
  "key6": "4nR1M84Cjb7cD8YcxvZNTiwBxS52mppkcgQnNYFa2QXuwL6nXTfFxvccsmLf3wfbiohQ3jBaRS5xGeYDuU34CWZa",
  "key7": "4vPNV598nvnM3xRunish4NULx3JUjvph2R3sBQsf1ZJW6PQ95itEMwBY3K51tf1irjVqMvKAf5394PBznhUh5oYX",
  "key8": "4CscyC5Wto7sds4JokaFFoqCkDkCLzwJRY5oqNC75w4xxBUjSUJ5JTZ5fQUWX2zM7qrBgvZdQqngmFvWx47aP7Tx",
  "key9": "2NmibLVgUQvjUSWH7uXvouf22EjXFZsC3tmZRjB8SBbbsFiJ6mCmwHnM88y24c9whoD19xCfjjKnJXAXuD8uCVpg",
  "key10": "MLhKvLhZNiKtY3Pwa2NWXT646JbzzAjdawyoeLqynsstBqQmAaa467Vf7ntJma63TGiPCukpWNh3wAysDwyEmwN",
  "key11": "23TdqzQY3XgaMjhQZBsCW5fPFP9kVmKWSrg6cJJxvmLxJ4oGhzjj96iu3Fdi96vVS8so1HYp4P6CUrGNuwNgd1iA",
  "key12": "Gv9bXBKLuiAXeZNk8W5VPF96kdYjEC7PP21gPuGBjCKf8sFsqUQHkYvHgG5QTNfsB5AWW692VsLURsTWtjg15V2",
  "key13": "2TTWPQYteUszuQpqqq7ms3DuPsLieSKgBRBFzWCcvcD46n6Di68DeAe4LUeYbGzZ47ksEoyosoCdS1rjLAzGkBVQ",
  "key14": "3bjLGfj2LEW8KHehTQNdiQu2wXeMEkRTnCk7YCAhYpwfZEKCtNzPCne3eNwYUrgYXfwiz1Uh2i2H4yTy3oWbMWhn",
  "key15": "42umvPdKUNa3RYtP1wbXQrQtmCUHPYr7x3aN9whTguQPQTAwyVkoQw7eqzHuVCqLPWikmKJuRAWFxpUrgE9jEXU3",
  "key16": "4e1eE4GhUVTRyXfrXTMJLVy2yZXXZEtVCcyBwrhm6edmUkjEbR9Nq5jmbPPAk3uuAHK4MX4cPHtF1YrZs6HHjVoW",
  "key17": "3U5hAJQxHUaZpTHw2B3i6HU1prbMrwMsCZDXyrvFsWPPY7oXr4GV93orcGXeu1iW9kmqGbDXb1APEzhAyiqLAKEt",
  "key18": "3XrVHHrBJkxeoaNL4vswyjnERnr2NHW6HkfgZiJ8uBrwYFXpBvm8sXog6iJhKBoE3MnpNjYPBgbd4bq2qTGbASHD",
  "key19": "62MtujUCupp8MdUfhrP2kRjAJQDkgZhk2o1gsA6RNiujqJSyEAcGghEmqnqCVQ9Af3HzTaEQZjUxGaAQk8kEYUk4",
  "key20": "2SS4ohRmTE77vpD3j1oJ2mJGUeH6CaXCzPerApSq1dAHUYVdBDSraXgrWtYTYXnduKiaAiGXmYkFczGRpZ7AW1GR",
  "key21": "osQJ9J1DUoH6vftccoxrUM7WgfV98RR3AWqBwegf6gkWepdZVQCj6thHw5sjKouCEYw21xHViKbjYCUpuQFcVig",
  "key22": "3HBxhPNiruGcA9DPYaTK9NwvTbPhHXbaBGP4FtVqAhan8T6CNiaUk5Nb4YYLB94sFLDbMjxaAceLpqcRbpWBjCPc",
  "key23": "5Aco996xYbvv1ZrjfmuTmdNiUbZzjgA3W8w52obxeqbwPm732y9qetGDBzV7p3CFCeSM2ARW6H6j1oLSQG3qpgqS",
  "key24": "43yyexa1nQxTYck6pk8sUa5i3ZAPyigsgskAAyFkfF5ZdKWp8SxtFhkJqLq5qFU2eVH2ctf9JpSsagC6d4veNFgY",
  "key25": "4DhMbzEbH74P72GVE4dfB9pFZX9RRqubuikbdiurJBgExmFovUfUVcFW4CCt5yfWHtDQXN3CKfRiiReYhZSs2BF9",
  "key26": "5yP8GZnEefXeh8MPyuNRUqgK4f1RXeYDTtLSHtCXcd8EvkictTT8jeBm9V6jegqRXBYKPNtnTkHbF93yxY5b97Qg",
  "key27": "2vMrZZFMw7kwTXF4HNthYegKbSMUcHJWPW3oAabNzffrQeNBLjQ8Yy3HUYGLNA2W1YVZ8vHArkgCYkAUWA4XVq71",
  "key28": "96ZerbhUA9vkiR5UBV5TbvfLSMqRhKA7GPDTgErJXTDPnkXULvUoh5WvxdUMj62WoCUYHpgV9H2C3hqvCRgTuLy",
  "key29": "3wwymhBV2KEPXfQkniNL2tDUvNAbXUkYT8X1BqowVznVzE3UzGoe57nASeWRphPJejFn72Pw7oyvtEcY8Z8fNjvf",
  "key30": "5XcuAc11GhnAXP9gCVzZwoM429faW9faR4df9XkoeULtzt6YhYTppwpvTm4iGo7Ly26DrDEkvBjJ5UxiB1ZQKrgE",
  "key31": "4xrMsNbXcMvdZtQujRDfvAXZKKR8kqoGvxYmUZoek4PDZv2fqt6iYPyGDy5T2ph4sqnKcAQvpt3Z5b6C7L5mvL2D",
  "key32": "2FxRWek1ZR3iXsDNPpQRofFnsPWfEbUymirti814qFGbzwcNT3fnbGTT5KRchVxo1wt54gSwwgheaV3rJcduewjQ",
  "key33": "59DVHJpsiLK1nMvzjNMMYuQaYx9N7rzu2Fkj8WnQJjJZ6txMzgLjrMWCMFeoV3aD21P8JzKse32omBAVmVdySEpg",
  "key34": "55ygu51uhDAXW3TLxwm6o5z2h32o4nusNuhsAG5d8EjJ84MppTF1qmgsuB8q11cvv97kYnrZA25TeFPDtpNS1zH",
  "key35": "3dzrZ51v7xy7wvyFLmQ82vZpx1wphLYgcQxCM9ojs1rqykWkUqnoFi3aFzGSiobKPMLus65QjHcmmPTpaofus1bR",
  "key36": "2kGfiA5NYPZDRdgMGNPWVai5EAQU4GpqjJYwe2YcCG5hX5CVsuv93xoZmeQSc2t1XSnPHBvWT9CX56SHuyB4J9dK",
  "key37": "41iPTBur1NJEAfgbUo3Sswy1tJ4eLiysoFGCNdKqjYM4t7CktW2GGEYT2VujCqGrMweXuXXPz7h1QDuyaEfgjDWp",
  "key38": "5MoGmfwzPJ5MrY7KZGQbDNGw2bMTsDebg2Gv9GwuAzTuBLAScpmccDJJhVgtqxzpm39TH3bzUHuQc9jRgftGgSvq",
  "key39": "43kmPZHNYbU24QAKbvLhmu2moEw6Qn9G983MsHqh4JBUVn2S7Bs3FAkSiKFr4emYHJRVFCuQoRkTqtcZM1R4YV9F"
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
