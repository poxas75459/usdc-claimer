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
    "hQnC6pJbF9quZbZFk3pn56QjvbHP6BZmDrGWtoU7fbkkU5qRMaLfwREwrcKSPZQhgvZbNU5tLwTPZjbQm2QAEnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M9qMf35mXNx7aqMa4oGPFcFAcvWVWs9bJMgEz69wgpEHFU2otrTqoqFs68V9HCGrsxxZ2Akc71sAoeVMK9g9t8N",
  "key1": "4tjVkux61tuqdTx5bQKtQYQQuVJPFfxdUb66xWMYt1jiKDwqJAj91K9m73oYWr4UpLwAgmLa2HuQFwd1ND9qsBg8",
  "key2": "3JmZho8HzHWjjaeZ5C7TryMH57wfvnC26LrUqNgRnjpLv2Cyb8uduSK66GZZiaHcjJRpp1jJZn29rXx9QBQSuZoP",
  "key3": "Pf7eQRcKRd3izwMjvSkTX5cUbcLfxVkuEkwF5CAfwyFvVmHnT62KE34ffd6oPYneUFfM7EXJfiXZCSQiUBjnTcy",
  "key4": "47bv1GFhKjMtSAUJa695RnYuVHc5bcZ2smt4TFMTgnmUyWYY7koGfHgmiEfYDcmjUuQP6K6RgD3pJa19BdvjhWJL",
  "key5": "4pjgCDRC54sG2keNkh2CPskHFguv49s6MJqDSmv876ErUbnKJipNmNFxhP2w5edzGs2iwkAgfh2TRUCWLiQ2acFp",
  "key6": "62LstzyG73uAsV9diAzzwy7LCKcH7FLf3vuZ72GZ1g2Th3mhjzKieNpZe5xQTUYx1ZvfHxY2i1FBvkjkKRvQcZZv",
  "key7": "2jF3PoGhysRcUKgJEqc2Hj2N4FxM28ESSahPfQ4sJ9nsSdZE21e7cjcqfi6cGEC9fwyCPi8qMXwmJeMYnMpA33B1",
  "key8": "47vv5AQcJiYTEgBdtUobw8WMezrzhBJ7ZAnK5kaRK1xuCQPAcqdRNq4buzFR5aDQ5J9Ytvqit6uJiFz51GChETi1",
  "key9": "Fu2bKjQeZvZuaAhHwu5etWeu4RBCdwc5QKc6dyvpkjHgBm8gd9WcC32pYF3csdwfcrPxF98A2z12aGyqyCncttp",
  "key10": "21v5vDR6MA7cEq1goryGeA7FgZmeWhodCh7cZ8NFEMSNQGKhWRAzK7hdrr9Cbc6XxXq6NXVwiP5QxWxawqnC4W8N",
  "key11": "VLmafi3w16HgJqkkCgtD92vUaSaNpr5UYqxwpdgCJQcDke65aLn9pFm1XYyztKWmLJLUzPhJsPW9DoEK2Fkg7G5",
  "key12": "sTus5GmcQ5ANbQjtbqJH2QF7jqGCnQ5g8BgQaXdSRmENxcf9UYBFQqS7ZTJ4GYQQDsDL9NnfkvUExHqD5Y95jpw",
  "key13": "4xU8nn8HyftPfQaye2hRH9L6jbedAGUE3EcQyFkYdmftkFHUevdiGFJHq5BsD5TUJYEisVmTfHSgcU1GLCVWBJqw",
  "key14": "3bGMZjVfYB8PgEmiA92GCZZaCT1q84dK3iCVhfTjrwoJC8EXq9Xhp4iaCmUtGLa8M4RNRPeKThWBVja3WNhnmqmv",
  "key15": "VJ6vng9mdKqRXL29HZrf4VPg7cjKbg8JhtcX4SE4yHvpNRmUMXV3x3cAXWTDuDERAFKFzQtp9UTQQ41jh8bYeUs",
  "key16": "3QCFAsgdpfxdpjdVcZpMfrfzpsvzp9GiK7SW4xVzc7w5kJAeNe6jwge9vhtBvPhVSu3co2PcATR1NufJu6SpPiGz",
  "key17": "3M1mMFMsqUJs19AXj5sMxjkBX2ecNUhw6bDvAHXMJ1CLWHrTgYkhkk4mPqniefCKTynecUtnkzHSURSgCEUeaMS3",
  "key18": "B5YcsJVZjAZg4jaJk4z2h7a9hPvqLG8Aw7PXtYBKyH8GneWopH2sE4vJqZT7tTyGdsWK4snpsGUVYCoY2D4gJ7B",
  "key19": "Xz94YVoPHGGxbANFodixFct9HXG21uwDjRGoayMxWZ2KSwemiSxbKNWQUFzKi21mFo3qNKnHkr3PamXYmSjXAs6",
  "key20": "5B7kkpShFPNgNqzi9yQ4E2imLzBTbfSkJ7ympz5Zeoir3ZFT5JF9r1BRiQQR3CZJxmZDupeLueKAwWkicTCbCuei",
  "key21": "22edy5zXyg2pZc8xzurU378QiL1KUYmYQ5oRdpCheo6wkGHxZVC3rku4EG5zMTepQjSAiDzT1M7Y4oQypqJgSSEy",
  "key22": "2ggG8JLcxgxjA34vVh2WKZF8sswHdVULHf7VtdYkChJMaSKwmGWFKShV3VKR9pXwTNXY5cDoafuYiCPFb6xD4JjC",
  "key23": "2D4AviY9Loyvrh1WShjnh1pGSGVfnh7q5uWz65XDmu8egXvzdLKbRbzEvhgiUj5VHhyPMCsLBZ9Dw9BxJBGfK8Xz",
  "key24": "5orLpzK5F2cZiso6PEt2qrsnRuCqSeeo6jbDTs8DpJ2emicx7CRWSrgFvrrVsYtg8rciL7i1JGZPmLKGf6oerr6C",
  "key25": "3kUFYKYSYdF2LFBL8QK9CMfWRmyj5hn9FjKSy7eVWnNprSNWkadSkYkAUsVuw7T3WUWbEzK7Jv1QEabBY99x4L1u",
  "key26": "NPCxwpg15wx4xUVpmLypeLZ35n4WaFKFnMB6VVrBcC5jMDBC18ivTofLmUiVxHcxbzTNcyTFo27z9YhKMcq7sW5",
  "key27": "CS1zkX8f4am6DvwXTFB8RygxT7nxwoBtEFNtBipkZdg3WBn852wgf676chCE3kFWGUSAywrQ2EEHdB2SvhvT1Td",
  "key28": "49bgtLofiMMawADQ9jJn6hTheMbD9gj1tbbLGqvhAkThWEoA5Lk9UAKJjMoZqfw2CMEV3YTkhZL6ddJ29unEPaUB",
  "key29": "5AieUUCfVNWUxUEtYCR6vwi61wqAzAfeEGm6Na2r1uEworh6gzikSfFEFrQXSB3Bq5ip7j7PZtq1iqjoS22rdMmL",
  "key30": "xfn9ykwagDHVYr5rUb4nLxerihtdvfuyFfL7GeQ3gqLSjGfCsCASL1v2zmYzbGhu8Be4QCmbvE6kuyfUXsxQwk9",
  "key31": "5Wu5eHryJxiZgNLRvExDu9zVr5hohDA2xbNN3i4H2m74yXBT6Znu4M1NBHWjrU4cNMKAnouDLB2eSoA7W9pZmtqM",
  "key32": "4XbgdtoXConiBcsFEW8MDkHrq9DQ9xugaD6hEdxDJ56LHLHYQCAU6otfvJdV1L7rrSCcHv8QFSkniBCfVj8UQrEW",
  "key33": "5kRzQVNmwTmfjaqi8iwLdojr1nG5CJc5ntKAb1xyBVuDCgSkGC2D18eQeS77DAxFnfZE1PgvL3NDWBVKqJuhvM3n",
  "key34": "5P7Vy33GepHJ5s1MG5MPRZ4iaDVVM1R7grdJwYuEhPGQy4cQdKnqv4CAbHGekAj2WTTw5S8Zg8tLDBr74hbVKBaQ",
  "key35": "2SL9VJGhJpTWVJK7C5NyakiR6nMa8zCs1NV8R1MYwJZDAQhncfgQbReBEowAYHWByWLpS2qB2kMN9WA36Gnt1bvB",
  "key36": "yTpkVRfMm8RCrAcrDeTVRKmfDWXbY9qKdmVTcGNhac8q8jT57VUDtZUCRzv3RFBDpifc3AH2463SuQ5nzLjGYVF",
  "key37": "5RrnUcPRCYpCSPjEa5SxDrUtQHFJBLvRK8SMwdV7ViPwVa2LVkD2eFTQPd39owbd53jZZB7B6Db7pJ4VkCoUqiZ",
  "key38": "5C3HUD1jscBrjeboZZeGxwYDPzYaSPiap2CJgKy96wxqbzgZ2EX8MHxV2G3UpRhRszBrAEi5fx7cquuQ78VmQjwJ",
  "key39": "2NdLjwpX5ro3t33incwPvJEBgHaz9cBwY2eiZX1jPQes5jxMHEWeNQfWYa1ph294rVujXvMgwzZGg5Vk2vHU95Y3",
  "key40": "497TYi7gcifQYNt1wvWByxbMtgQRYAzotxcYXHTee5uqTuaEE1Rv3HUifsCAw48ZUiqMaMiwEzhTdnoQCTFcsxHo",
  "key41": "2Ja66Xzi7Qr3dKc5AcKrtCo3zurxUthKmDmjaTG7aKGkfhxb78WGtf8B1mcgeewLZZgQemufuuEgtoCF9xJ5QqiP",
  "key42": "4bmPttemkc4QFNpQzVvN2U8KTDW8nd11SisUXNGVz2RhFTSBz5QS2F8bHBaNz2jTPXqBvaWPPcgWM6oCGpz9Sy23",
  "key43": "5AZ4DoG1TkSjBh86qAQEW4ppXawa3PHgNokAh4cq8kG1s1DWZFQYSru1EgZ2Q8pLuChtok9zAcnFUosa8SEHW9Qt",
  "key44": "3NRhMNXs3BiNCFZo1vj8U7hrdLZXNRywW9RAX6myV1jE6GK6NKuv4Q6CTKLRY1q4rpDiBjcDP6BQ1euHGiY2cGyp",
  "key45": "5WNktoPXEaNhoPMNTF7D8pnHh57doppqaDKjesDDf9cX78oLRALLkAXZBu63EwDqsU4CXGPqNWtYzoxzCtMnNX9C"
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
