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
    "5XDvziZjSbrd5kV5ZxfYSfAXGaa7TeCFd8osRCMkzqdLZa9XZjLJ4aqAgmnufpzqiftJBKcbWLfCmuX1TujUwsyj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rQdFiMyh5DumFYy979jGR6LZ9DKbQmoYGS5bGbWL2ZDnXZWQZEKLFxvsPsyXE8qb4pBHhDc8gTkkehkJeixWxA8",
  "key1": "4n8FyRF5gd8KBS23WkhGfJe5q8uK6u8KE6DvEEpcjPNFvQSKzYyhHKJajs4WytfQX18o4z78TboRkx3GHBzDSJet",
  "key2": "5QiHgwF8biZYA89Tz27mAuTYJsdAw6WDyaEv1V9apagnNyZFfEm5Lf3AXQ4c1dCLxuxnsmQrhLn1YNTzBfJ9DSvN",
  "key3": "3hV1GKEPtkmPWss3Gitpv29nXsYhd47k22hHfcdn77iLyivSB5Jpc5wJKQugsKkseQVZwSTfqc3yuboYDnsaXpR3",
  "key4": "JH86pQhXN55an7kVUGQSPdHRzCHuWSqNCitMNL4W9PUPec1JhVgxTRg4ca1nWt5CHVE3sg2c9oiCMZLydpaRBLQ",
  "key5": "5fvd8K56bD954wWaLMXUgZsENydDVBrMEBRygsncSawzwpbSzQoYBRaFwsXGFPnuPqxE5usi7jtyxZ4xmbDRu7LN",
  "key6": "3nutJuGjFyG6rNCQ594H8zSxfXoC6nURSdQy5NDMTjL4gZ77CXwGpgH9RLYEqTjzeu1oTojkwKcr5nTZADobfRr7",
  "key7": "5m3vSiS7ya6zygjVwEZLjoss4Qp4ELbmd8nqCYFdeQmk1VcEZVw54L3BbtvR28zPTTzpxbPj8XLYvgak4csLSDQz",
  "key8": "3gtNGj2K21N3uFmZzPYtqVUuf4YStqiDXvYnPkjzoVyjm8jjVuCb6wr8o6iaVsywQhrZHcxdBYsCZTtX38nwKm4q",
  "key9": "4VmFhuWpeLCSXSJskUxqbWCT1rdkUz1SW2BGCf2VRwFZWmc386u6wr5kV6DmibdvKA5FtqLFZaesfvz34XTygRXf",
  "key10": "nnSBJvJAbAKVN7P6EAyQzrWAZ9gJTqcLb6DEGGWn5PCFPwCMdLQf7F2W5gx6KxahyukV4UFi3PyumZfDWsFdgvr",
  "key11": "2m63c2fuBFGBNGwuRrcdYDA5Tqdcz8HyQGYmiQRkBnSHaUWAP32Gypw9tHTd4o9BH6UunaikDuqgTuSq9bwTqX8Y",
  "key12": "3mJgRAytUttpnubbThL56fTsPK4qXSPSa9mX1scc9k2HTYsFLWLACAhTrvmtKfU4JDnxwhbfAWftUq6eZnFzJQGZ",
  "key13": "2pkzvVfNyiw61rZ5Z2K4nEkUb6PdsNQJMGpqkUDje8A4nDbDXx7K33GS1vevmMk2M9Kjp2TD77qkQTBNVU74J3V8",
  "key14": "2HJjnViLGMZs5QYt1a4D5sVUYc1218aFZG7Fs3VqcFJPXBgfkURhhFjyNVPJk31DSLACxvK8HsDkFZMoKpeS5TQG",
  "key15": "5RvjPvyiizMDGfrJJDPFjjcmLE1DtQfc9yXB3ruZW5Vuv5KBRHX3tE3NVTbicWpGNEyimSDbNydZuXvFm3evecC2",
  "key16": "38g2vuCniryR7kyR9s6ZRnZtBYC4bzSei8t3R3Uk4aJoripFmKkCSsaDLhYDqJBfkmsVJ9vQAGuc2fRRgGUnYDwe",
  "key17": "kzaJUENTncQszi4W47kvZaaC7Fnu5i7LUAN6gC2ZALzAfx7aJLrgESDDkELj8Xrn2PTJ2C1X8Jw7MxrHPVE73q7",
  "key18": "5nm3XwouJMcnFBSamWJHRfvfmEFVQ1wGYExzA5jwAF6yuax5C4P28Ru32zj8tiUarMwoNqdUTZrKs5GSuRjf9gmc",
  "key19": "g8eQMU54434TFst757V2Zxe8U5FLrMTUJmtCtA5s6oGUEP9TAsdQ3UCnCkq7cN2RWHEaCFGjoDMgo2SqFcSNTft",
  "key20": "3HxcXoTyTSdgo3XycX6ZVeYhzPJKhEkMBSm51pzRndA4GzBytoKGE7vuiiouofds4Jg9i1AwnYYaNagVjVkzA7gR",
  "key21": "59two6AwPaStypWtdL11C6Fmftjo8xr6iWw7fe9vnAsJqpUjDfzotfioMZ8ZFtK7cQyteM74nBCPgHsaMTnxxrSn",
  "key22": "5RErTVmuDgjUDmmqtpvjifMnUaTi47cTaDapqNXovxw5f4Dbx7g3nW2qDrvApyscpkD5EmRjojckVM9ki5v86v3",
  "key23": "42fBjm9yNnzzo5foB5oPDkGdGP5EDhoMn1E6wRPE9pYLfj5jc1pRXSiiifQoigcn3bhhokqgwgUu8bgE5Hj8hQos",
  "key24": "3USfimrCfuGpufin5vWWzPNpNdBFRQtcRdarj6PWiCk4kg7HAUArpRD68SW4GesjWNNJNaQDqfoDGnrPXvQaSoHG",
  "key25": "5xX4FucbFut2bcdU2wzUYqTSuxq2Ptau4hoTwHcGv3Tyaq9QNxeXjSfnpRXQjph7r1Xh1cqWHkt3yf8cF3UGBkm6",
  "key26": "2SXrQmCARGg99uA88C2PBqRUKL375eF4rmcyW35K9HbhXjqzQA9DaC2csczKiQLB5QdbjWqYmSPUi8yjRGwyXryr",
  "key27": "5GNkSLeLW6LMJBMYsuEBBLXaHCFQhJzJiWNoV6Shj5mNG6Hwft2H4YwHm3p4nCQxYu6HG2nWxpe1PtFmifHvgECS",
  "key28": "3S4g3VUL9jbibsfyLaADPHXiFUz987pgBNFdrZVFD5hQBjCGYgKipBWPhfvzSc1jovx9nRjKXSk2fMWtn7JqNGHi",
  "key29": "63xQ3f1kHwAEgEKTzmshshiKi1f9v2H8CpyGwarTfhmTyfQCZgBdMeyX1mg9pJfFNMzMfdXEGonUx74wmiMud6q3"
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
