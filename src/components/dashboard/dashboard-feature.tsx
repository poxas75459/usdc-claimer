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
    "YdqPLmhmx89Cw5mc8VzpqUQ2884wqkcdBJGpgdxV3CzTsx9PvWPKBwWDnR4JjoFbmK5tmrN1WA9vkhvNAJLZs8c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5foPAiUWDCU8QrD7axR2AKtdGEBdT5XReDD1VYvcptN3EVLPx7PVwXzehSS4UneFiPaPPZQEmkhfkEGTHw9ieR74",
  "key1": "j7EofRHRwSjsKwjvs3Tq3ctEymmomgNa1knHYPBrJLSLtATDFWmYzmzDwPBgJDacxCwb7N8zRP5ok2wSaX6XPw9",
  "key2": "5YCPtxdCE4v8hxDHv67So8CeP67XBUQoU99JZUoGi9KjTMkDA9ZJCSh3okZ7vBo9Qft8yFygaQbGYGcEnR5x7VFv",
  "key3": "3SyEUpFHWrshyWN2qSqLs5FsVxsSPJLZZjz6TtWS6yGvW9Zs3vHieXJYnd7EjAMkbHekd53M6rWwXUwm87vkLj4w",
  "key4": "yER4csTNs5SJgH1bRj5z794C77c5iz7ckd4YVWm41wJHqMDyH3BnQHNkD93ZbpVqNzUEWnFeX7VdW9hbkqY49V5",
  "key5": "dq1i76r7kWbmJAyz2f1xjEKVc8FkCwVFovSL29xoh237NQELWGnKmL5E9uhY5nmpeDWFXYH9cfvSyX1xiDBotwJ",
  "key6": "PQuPUNJ9QoHytpCRDUvC9L8Fnrv3uWzTkB8Q33zL5dauUwt4gawG65vm1iUgQnRY6tzKgdFGzmJUBBuMZDkSkdg",
  "key7": "3wDPvgJcfgN2HDQ9PGxWF4DdvxVwPoxx2cJy3vkMBKkQvNXdtzLDPBd4vjKcoNcT5cW6i3g1Y7yWEyKMCUBaMuiX",
  "key8": "QoPSCtd7BTaoAGQh8VvYSyuhfUCJpN67o19aPuznKtBMTTpuJp2EDzQy2aCpJFAtmHHpUhWq8Y1CrXYAW1j2owD",
  "key9": "2zsT2UfFMjBjV1PZsRD7ZKJbR7wA9zRBrYbD1QGihsudos1boDzNPkNSMERTrVVwcBjoyakZfs35SeWXS7X4XDYi",
  "key10": "4hL8HsXDBW3eR6ZpXAgaUnqLUiGjvTXQzutQuifLsTa5SGgeqsPktNgXVGrserQx1cvx3NXWeXhdBFhnpCaVASbp",
  "key11": "3p7owNBJRoG4yYeGJDuoDP6CCjmoQ5bNv4U4HY8zJ4JxFNryd4XWseyrwXceRuYKmyyVps3oxXGELHY6J21sHVHt",
  "key12": "5w8HdpZAAJhEbkahds2uX9aLorrXnPhzThdfwED2vg1e3NLzpdyxBxSYrwnwzT7NVNSStjQ6iBAjWQnQbt8LsC2X",
  "key13": "4NGLvX57s33fAEQCTySVXXsy6TkEhJxVdaPxtgs1yuxaCMspZRYfiA3kun7yGAzSxK7N6nrs8QzHwMjzdDHZz8vZ",
  "key14": "3os9xwNZWP5moUyPhfurk3FduwgYhi1NAzXoShJrfZiwgQ8EH6LnhVBUNjpKfdPxdGosYrWJ6zP7RsJyKouc9hUf",
  "key15": "43jm9ddj872HiZAtcriiVMWVar2Gx5kANunrBQmrBqkv59FW73CaxrGBJXGmpLRXmGrMk377d6zjPJ9FDPvCPiBY",
  "key16": "3exuwCJ2TjDaVjy44st4iK3G3hdvjHjeZoQVqrQwZqrTgowngQ7XD1U1rvp66VTWj8qT318c3hF9qeFxQEZsmUei",
  "key17": "5ZQpjrpQ4HCNpRGFbqiT36cgcpYGuJ1iQFVLbZ1tcsVRsu3nTk4CEMhqJrVwHsuPi3WBDofpcaLg29BKMjapY79R",
  "key18": "3QyztyCUxyfa6g9swG6CYdE7AYW5wFU8DwEjmA5eYTv87jeqLSRqou6dyj2Xg4rk4TdKfUcctPp5rJaqgLARGVWN",
  "key19": "hpwqyJds8E9egQs57R6yZ97dvbAnLo6KSy6wpEGHPnyywfAyXxG3YEasjFi7TXoRg6AE5WFm4sW3Q2TfGn6jBwV",
  "key20": "rxxtDL293eiWCmYyAQsZEpHncjeYXxA8RASHXeBuVr4V5ABDxVoNzpqC4TZhdtEhuSeuX9xiotGr2AyjAnkEPvX",
  "key21": "21kpbVnEE738hgwi7P5E8aXdrpUJsZxSgkXEe4g61uM8YdPrD37joQPaUPGVKc9vGQB4Nc6LwFyFThsWKR9Q5q5L",
  "key22": "4rQdBRVbBQcHRTFdZ79Z6wCYqiappdVxiXSgn8i83WAEN9F8FC86rc5ikXGRjXJSUH8g9HzkUHvVh5xanCccgaio",
  "key23": "3rj6oeTQ6hjZcpi8SCXUH9eF7JwdEf6YbZ9cotiViDQUA7PH1hHd8tSTpMPQhR7yBmy9QCjoLXsLzqLr1L2VseXE",
  "key24": "33t1a8AtHzqZHebCZmcE62XWUxVWFnvDaVPhZVENJhtKDoax6txNZFY2Ez6Qk3NjEMYioFRD6BuHv7j2gChwWgFV",
  "key25": "63r1i2N2KXNBxYHuijm8wxaqVRZR1MTmowRTBxToSW8LZMtS88fm3FJByEtPwrQsASQFT6ugweUaqbt4XMuAdgYA",
  "key26": "2aqhZ87RM6kiAQovhCDVJtn145MzWh2M4Es5h321bokmnbHoofKWtfPcALaFR1uLuWyDj1hQ3mZjhaGkn834XSWc",
  "key27": "333kRscueqaNMnq4RBQDvYCbWkk22gpqcQQzR4BZbcHupME5hJSHhRLG6pQkabK49XJ6HBfEuFYLTKMwSAiTgcHw",
  "key28": "WiCqphX6y8AnhKTzQhDrK9j1KhKmddqEDaYK8RanARAJbKdxePDU2hpkMtnxX3ifhLxP88sWFxib6Ys7wWPxTZS",
  "key29": "pLtmruRj4NJeyfHPng8gj8YBYG4uSNFvekdoAB3mfwy89D65g1udNP5uKsBGwsd4neu3WZCKB82fv1FgMRrofCm"
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
