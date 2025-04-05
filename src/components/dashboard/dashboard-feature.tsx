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
    "2NRT5qD4ezYfsgfWcAMUJC3fDZj5uMGHhWSwRk7kzgJyt4jYGGiwRWWXtubWUS5oFhcD7uFjRXraKQRje8QwYWhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ftywzgpF7QLMK6RY2ocANzGgSUoc5pNkzQ8sArjcBEMZZitJaK4cs8YQzx4KiZpfWYEt1FM1R1hbZrR7GAThboG",
  "key1": "4kbCEZjN6pvzmFztaEM316C1CR4JQDhSaJayAPH6f9ibYQ8g15JQR5MSDbMqxoD2XLS2CWicDVrUygM54Asq3FTf",
  "key2": "2181CtsTYiRo7SYpSKfvp5F8PqJxdfEuPQqqpeEHug9kcTLbRzKmNfPaSLmMgpY6skEMd1xb5rUGKp1zboUdHGNu",
  "key3": "5JotGcD1VmBAbUFExRgkvUn7eMuXqYakRXTGRoWG43QFkiDQS43C8q5B37ceRhTs8X3VSEAZAqt6iF9hAJWSfcuo",
  "key4": "mK2tbEG4VkrNcDAnsqTj5QLEvBwVGbtugzx38JCFYWUnKQL8UwGXVXumKgy7CoMzWoeGrA6BeEhjCMkDRFrpfEH",
  "key5": "21gct3nM1wuTqyLfbpR87b5YbFFVBJdM4AoBFLT5UmFcSZvtA1CHSjGhPLUM9tXVQomzgJnD9yR3E4xAMX3p77dw",
  "key6": "2PrkjYqPTp6wsPtbZ2hqxGV8KcRfDPi3BoLxCWnRjMMiWX3xMEd2KmeycCB3opf2VjbXVmrfJNDiiQ3QxppC9WLi",
  "key7": "jj1HSoofhnShQM2j3tNrzDAKv1ECJWYNHE6SU6XBdaCNF73zJ5uG7rn84dz7KB8gmsoJT6BaB8LMfgipJ1zEPPy",
  "key8": "2FxZt3sjhNWaH3a2VZQDAN9ajyjCudZBGkcr59hxt6D1bb8rS6rXkn9SFdXKwR3aH2GbBCBTBiJn2og5X4FcoECx",
  "key9": "2PS5p7gaLPYeVAfY48ecFdpad3P9H3HgvQfQLKoM9A6qez2xFNFYws1gUm5NJ8kg84fYc1gfmkorsAxSv8NGzY4E",
  "key10": "MUBUVYkFEi38JezLzuB8iWSMc3Ufz8k1gedQrUj48ap85LwG3XFoXZwdZDxvRPmvaKhskf6oS2YmScoqpg5rYpc",
  "key11": "2ACUtW1MgzpFdS3hJxYGuW8ez88z1kAQKXho1p1tXxH76YY9ERT9in935wBerTgRK4nBf2rxS5vPoEVvR39wDoEM",
  "key12": "RHutU8bkeT6nZbh7RMfrrE1Lx2eVRS2PRvSyJxcTtJWhrW9sq6zAiABBMQBovWbeR262Rw1xY4D9eEwGVz1eCNy",
  "key13": "HAmn52eVSG1YLLh4B3P6csdszjQqgQy5T2fd59cS5E98SLZXpPyjLgjuBhrRohmLupqwAx2XREVwuNs2vikEbnY",
  "key14": "4C5jDkuzDQA82foxo8RzPrFdSEF92PsZuGBhRHtmvXu8RwmxN1KQgBDpEkva9VsXRZyJPbN8RHhmkwW277YeqwhM",
  "key15": "Z3JZ4EJSEj2xseNs5VqJTbfTYXjME9cybDec8TC6DkNg93uVJSmCrxWxvcDWb98NUiZ598r5Z4j2PSDr81Ka8yj",
  "key16": "5nb6A9r5JT31zSoaypsfBcu2FiiUprJXvW6S7eTWhF7yDPbH9CvDwgchsC1xBvMBErYHMxGXpKaHUvHz8WH3rkcd",
  "key17": "48ufKEkinrZcVieR6jNrcD9qFbZwSN5NC5gNZYvRvHgZoQc5zjht4oFsv74tWe5BPGoYFZyssvGcHESUw2RY9cBd",
  "key18": "2PTRrbnRzGkX4svpeQirYeNhkbRjLCxsuTuSqZJEuhwSVMxJEZZ5K8CJ4jZmcq9XevkxmNbRdDqYxbhmRpgmgn9Z",
  "key19": "3xCBig3gdmRyLZswwh6TRekMJoBS2KDWEXArLDAuCjnHzRZyiRnjyz3FZ1iZ9oJa6cEqJT7SFJ4VvgiJwRHJWFwB",
  "key20": "34Zt7oX4kMMwMRy1h7pTpuKMFmaGKqd9SApWSxsyfMxtD1YqJxeJSNL3m8dQnx1H64aJFMyPZzqxuiQFBf961jd7",
  "key21": "tWFVE3Hwk7oNpMeixc6snTPWqw2C8XXTn9PuVaKkxpy1GQyxWUmCjPEpSJNLSXu4s67tMLLBDXL53mnTeMJhNM1",
  "key22": "qqiqnW7QSmpsnnFaDwt14zv1MTTeAGCVCYvAPwaZ7HUCGSbudLvzjzEYB6tJdbcausamqZTnK2dHyZxDoFX1ZTb",
  "key23": "5KF3qfQsqvRCjv9mZJK9ZVUBs6BPu1D99q3S3GbHSmitLWZ6t1XN9hrgqMySothtKn52qqmPX7K2k48KWB2w5sNn",
  "key24": "uuoWEbXW4b1u7TLeARGoTZZ6hbtjJSgqEXdhjGJDtA4oBTEH1AeYvPZUEztdmUNS2AsikpUpyjt3e3VTbau2YT2",
  "key25": "4u6TRDwKRz1mMKDbKM33WhszQLaGgcDEmrtRkY8EQK4q8uTr6UdiHM6ToUr8YZGxeqBgbG9oE6dNwFxZAhJN9c8P",
  "key26": "36xCcGmpQawjmAhAtbwnrdzmoZZqUAPH15JR2JkxxYwcN1BhTWX8aFpsouQgFWZkxCoxxRnWSdEgoSmGZF8TXbX3",
  "key27": "36DLcXBYzhucPH85fQGLE54qQeUXoEXbL25NhXMA4P5Ys29AhpioeyG5sLHxCbxCkkkiV773F52KiJv61wYouUjm",
  "key28": "2DSgwSvSTbfkWC8eNwSnbDRaqKhqR6sVS9vxXTrXMxCFms5iwBNeNa4szZtsgg7BdZCdrGXJtpUykuants6GUjRE",
  "key29": "P8WvNTg3kHfCseo1QHyV2uaUwmbX5wzeXREv5axdRkb5sM8sUPadJDNJgK7hMdPnNJQh7Tgw6a2ZEH422pP1zi2",
  "key30": "2s1BueDgseWb7Sfd7cqVWVwrymV88CLXT2sGG1Cz5fJnBRucomKaL5oQmBK9nD7m75fi2A3c8fVfKfwatNYE2DUM",
  "key31": "HmTWXUM5T1SHtNNrtJujV8EZyNZf3AQ7ZTVdDc8Mw7NWkTsdaXuMdLbuNiApM1RKUpV7f2mhjfzHdm7kt92rYRQ",
  "key32": "5yo2GTL3b1sYNF3ruLzqhgumqsYQZNfcAuyqozpQ1aHGe5PnNbPtkCettgU3E2JhBwiMH9kss8AFTGDYnSYeJxcN",
  "key33": "3JtjuW5RP7NW7JR8yiK9EaYHzckcDVDtM7NUyKWk3qFQkC9WHVdzJ8KjeB4MGud5RFEnaq8rBMqmCppAfPpbfg4T",
  "key34": "4yeTA6ShwawTP7ZEs2HdTbBUct4cLroMPe5aSPA7mnMwqC5nCSjWvvZZuvr4eJnrtJHXbHamogdauHf1d8TqFKkq",
  "key35": "65K1BMypWwmHBt2iPgvhJXeJ77K5tV2Dv2LRf9o7WfWWpoizeXAhiyT8mBTYH8WisK4jv8GqhikDZr4pUpwUVZU4",
  "key36": "4s4PzvS4ud42Rz8M5t7Q3Pnz9A5QZT7EMe6zh4CTv8pnE6fYRK7wPbf7U5yxErip4Q7tHhLX3w2RgxsfTSuiRi68",
  "key37": "23uAfBHJmCdesz1hnUz8BvusRWaH2ushiJCz3pacp2zztuni6PvobspKk5FppD47geN3dVSyYMK5KuFgwNRbKuEZ",
  "key38": "dhzeuYZR33UFnM9cVWVNjxV31LeRnDrPx29Qr69yi1RHJXDMGfwxCsVkqDo3rvsCeWVEJpSpPrFriz1ZGVozeRY",
  "key39": "28ZZBVP5TNdRJqYuJSZKt6NCBVowm4GAsBcZzWxhBfkvf7dHc6W717xWpRwBLSmKf7b1xBd19QCmfxiCx79xCXtK",
  "key40": "2oRps1tYHj2tPfuE3Df2TwA8Cx8o6oyzKJu4GGhkuq7jtQ7tJxGSaQdb8rTgrRmkdDZWHK6XCWsS7HDTeGUDWAVd",
  "key41": "5SNeBuc9cbNun2d98KSugEpnu8EMyxsn3ogB2PQvhxyopRrg2TkcyPwFbAZycTJLisp7ycssk87x6ZeVcgCJkYNw"
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
