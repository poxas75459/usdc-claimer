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
    "4naXT6icqL4B8CykLzrfLfLrKHW18Xw8TtYu7vQxyMZTw9bqeFuBLuvWcUSGLAVr454Ed1Ttj8m6JmVd8JwPB3uA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YVUjYFhhEt55vUcY2Ya8TR69FLnnTFHYtNZJ16XHcJbgXJmBeQuMy6x6QWYk4ZbbDb56Ja9zgUJRJUzqeAo93Ej",
  "key1": "3Svs7jTUX2euQzMyAro9XTieYDMWj9aS233iqqm3Dt7hgdXTa4WSQKt3F4Cemw2nCpbwBpLTDLVuoo7mS9MwTYms",
  "key2": "4soxkvwNAEnb68XhGwCRuALGxh9p6pbKdjYVwEUWLBhFH7tCnFafzua7ANHoYNY9YV2ZYUHqmbfqBpxCu1BYfopu",
  "key3": "AHErGAt7X9p3nKeCfuqHpjzuCMkaayhkqH5a3uwV3KKSTeJcvFdJZXGv5diAFjSq13yfFhgHBYmpwBjfF81RQC3",
  "key4": "4BPHCzefy4LqZx8RK2NkY4VjRZRymomAduPk5jDxsUWM459vaRsk41e9jioREp3xQaWjPnSByrFT6PYWSSXKZU6u",
  "key5": "39SLQ6veTfbrNyyQK4owXoJQV5S9WsQWHy3nAH8oNC9DForHiH3EDXEcezyCdxZ51nRYxYoADDToGJy5c8nGxpqT",
  "key6": "3QUfjqMmLeSZfkpbkW9fq7Z2xm5dgxvZv9TpJiXx8QWsnFpjqistBDWzRM6YmrSG8eRXJRbr2xu1atysDKU6vFwR",
  "key7": "S8h6rVVrbrWoE1jjbQ7svLUQxKhxerDMFCZ9B5gNcfvXtKSdpxxZK2TyqMRVJR578VqKkbHcLBRcDT5S8GYrJva",
  "key8": "2yseiLdraa8RDKyUcLjmuVLqHMCwjivw7oR13Wgge4H7uEZLcNFtKr1DJtjBiuv1EAf3i72oBnFb8XyZhAxY2h6Z",
  "key9": "41GSXZRFPUAeWp12Sy7VxZb5gjYDKbJ8jXr4JFSuSTxR7gu8CssyMdkQ7PdyGKK3xtvGNSm7bP86AaNhNYg4vvQH",
  "key10": "4fH28ejcCgU8CxURbYj8wBZiPz6NgeuxY6Mku9hzUCaFPPBA5BMfPdYSnZckHVFE3pcGzzoqTUk1UjDQya2VBkd7",
  "key11": "Ns6JR6LcF65BPx8gYnccBzN5RdtPZ4SDeve783bfvzsrrDN6Z2c7Hbnar54ruAq2iM8iGaJ4yJMQQMJ6fiskPV6",
  "key12": "3M2EV7jgu26e3BSCpE5fzKkSkebYgkQy2EN4YssmssdNV6K5GnJergBPhXbehQnao5AbDdPZ8sxMF2iimSxiComh",
  "key13": "37GzamxigDrcC3xJa6FudXBEK5Yb81akZ4mFzwveUG986XE7HdaHvqAQpH5TrcdbeZc6bMuS5vD6AKidzpKHFbMT",
  "key14": "KXVc9wS4F59QHCthDRuDQNvpufEzo6e6UV1r4aur386qNohfXd4aUBJVeL993S8W4maYhYZNhVAg8fUTD2bQHtm",
  "key15": "ZwejymewMyLXpaaPKNe9wccPdJ91NushtnAT3JNCTmiLxQTJfV6syBLGuCHKMefb5AaiqE1XEvgajXNfRR1ettd",
  "key16": "xCobt4Z1pu77j9XmRbR8YUjGqHApNY3zkVeB9wY8Kq4EA6LczaRj8JSrZELNbvW7ZPAN2MS2XdjhwhRc5YX1PC4",
  "key17": "3vZtKybB3Hk5tyqKGGoVrc8sHHaL8zHYSB9vJ56tBaJKVGNPCND6wWqJ5S9EU9XXSeipMZKnUedDmzjHYAyQz3uo",
  "key18": "TJbLBFj4ybFhvxbxDXkKx19q7jg6P5G8aR6teJi99ThSWVRwF224nav6azmwTzTjyGrR34N1xg4tt7yBy6Nk5fr",
  "key19": "mqgvtw9kKNcYFkpdRbW5PKhtHEoYH1yqJhjvXTrm7yRAx6Dc7xgME6MnhJpswK5S5wkSHsPFNMUb9771pzrP33U",
  "key20": "3S7rFWwZ63vnaRYFJfQPCGfX95GwsmzcpBadG8LGpa1BDSMBxwtNaM2r6c8MVyjYB4aPD8fGVYDHqF75Tvk7QG4x",
  "key21": "3FnpkTRHLDiwBsGpT5zM9fHR6K76PSFPETGPqqiT9zksDVkxbiESwWZsHVgnFRdEePuQgGVDExz51piTNt3CwmiN",
  "key22": "5LqyGsgdf5MK2s9eXLBLrVBqrqG3WQqmv3cnuKnjHWSCqJwmk5VuhTsiCGd7vDqvzqJbzci676GPygmT9wVwB9KX",
  "key23": "25j9HvVLrtEf2W77Sfc8ZdP6ehBgJSUUKk1iiVFuiVvTtpHyZYZUnqbAEHYz8oKfjKZRMpLHF6h1wFFXnSkZ6uY8",
  "key24": "3m1yUSe355wA6r645F3vhb71CoJNXXSxsyZkwPZtpvdj7GaG4Pd38eV94ZzVbPYoL3LNmPBkZfPQrVb5v4Nky6Z1",
  "key25": "65957hC9DrcScbpksDHg4ouhCnkyJU3wwzcHBHTqC5QkD9pyiZYGFi7f89pPHTXWAK2wz5p7e8YauE9pcA3HVJ4x",
  "key26": "3YCBQ91St3WGHnZScopFHN1UzrxQ5cWmSkExDLjvLP4YtKmqR2y3WMjKqjz6sv4FDvJ9jgRzfW8oDkvxnpSFWjr5",
  "key27": "v2KcybNhmEdEQxegLboNKUoMRnCWYw6ri6NfJGAaGUbCqNhbWgVyPuF64xoKQodnksY4WGtoFiyKMYDQdm3stJQ",
  "key28": "v47VYQw8kw4BMKEqPri19djjtvVbEdgMLKrfgSzfru8UC5mY9HrmCCqA1yZ7Lho4ZsL9S4JUXM9pzK5YoKhVyiy",
  "key29": "P6UvKA7xfEVVAgazud8iqN9PVyRxRSKbBqDPGTMgHZhbd4T1KyyjyGmmrVNACtGUT8SNmYgizm8BnDQmoRqZBDH",
  "key30": "2bn2dA7Psns8mN2DDV1qBrj6chT4TrDRSbq1H39MCyESxogtuM5RMtRKdVNy2UwdFksQwaiqdecyc4xUYbcTYtfx",
  "key31": "5XKB1pdwyDVVHgr4s12bjpXzkW79EPwEFt2uivVbr6hoZSivWvH38NbRoStAgxWzVMdxHDAUxgMdUzDTHVjHhmWw",
  "key32": "3zJwoqPttVuRWSVLWHSnfi7dDnn6wm3FKwqwD86x5tm91MSxkgx4SUumiDDphEHUHScuJGiNCYLNFbmMRBaJ5SS8"
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
