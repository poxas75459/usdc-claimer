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
    "4Qwo79udG8BhbjDUhuuBW3eZN8hAW8YfFV4H5vQCRfLYUr6nZMmncPxvwFzPVpsKXuGNu3XdJH9Lt54V8QTzdKtT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JNKskRM1CStPaVrkU1wdBbp8EZgcGkYbo5mj1PoGdW7JRGMYp2PkrA8esCWjDrjL48Liuc2yWFjGLy57WkR1do6",
  "key1": "hoxQf2hYDsKA9au3EySE23XMpYHEeLvpyzrJbQ9EfCjfiPJ4DQU7YZrnCwRYrMv9DoSoAURFxrd5xjvQ561tsXz",
  "key2": "37wPVHTjT5juYNXpc5kXk2uJVezNdXehKxjaiv7Xfb5Wt69J5vQJqo7LinjwcBrtaJ4nKkKsTu9sDr95Vmzv8h7g",
  "key3": "3PBjVE7qRhvkz2FAnjMTN6BUYNzt5Azr8Sp9hqfAy74Ztn1F7xofopoomYER3T2WoHKLEWAaK7E5dtmuT1WySm3p",
  "key4": "2uxm2u15EF7uHnyZs8mfjpPWBWc3MLrugaohZV3KK7u41CMi7o8sPKQVUHkzZe8UP6Ho6EwDzbvqEXV1bDiHs3qc",
  "key5": "3Y7RQoBwD1VN4sFyiEUVU8bDvs6ux7zrJFr4QGBYWVxYewhMUHKBZ1UZPX3NkuaJN8e8MTqHmJ5788eHTSoxC5bG",
  "key6": "59L31WYHTBYNmauqd2uwvLvGbj2A2advbXLSHdCpuXjaUf9k11YXUuU7cVCDNyBgmbM2Z6uZYWp8ysN6fVzPNfrU",
  "key7": "3Ny5PoWyGYm2cqkW2rSdvuYnDqqVXguTHWxCrRiLfQzpbpdFTohWe6rX7o5EjxpudL7hJuJWAk6R1ZDD9uDJBpbp",
  "key8": "3CTYdf1ZfhMtP5JhNMsVTrvSHAdQeqGwiUhvAYYpDE9S98iyeKTRFhFT8eRQJZhvdNYvwxYH6YDiTV72pSfaiYaX",
  "key9": "29jaRbjCfQoWesTrtEQNkr1iLrE1P3bAV6xBn1STcQiphbr5m7YTXfJL6f5nHGWLZzTHJjqyUFXxEDVRmesYQ23b",
  "key10": "64Wypi4EqANrH9d6Lf2J5ERhM6tQJAXwaoDxNKmzYxg2ztLEU8eoDaqgAJCS7xkvndNN7n3rGg7Lv7nhPwYFUe5R",
  "key11": "5rfDiyYumGCmqchQ4ARvvREHnJU52dsk7KuQDdrNHbg4a6p1YUuqnV2KoLAjAum5Ayd98vu3r2VVWLZFSt32y7eb",
  "key12": "5C2QYLUy9ZNA7jTFdbyScgSF2TypqiiJtHY4ZVrNXaYFKn9yBguhmEjsWArVMwYGfEDkTkfs7e4KK6kBQUP1toi7",
  "key13": "5jRygY8CHzNegjyseXnqRF12g7z554QYeERVKHxQyogBJxEC747CZRBgzH24KrC5iQaaRKBJZJB3rReKoArLZ2v4",
  "key14": "593p3zcvxE5RRSCn2EC6eQnQ42yYdfgf82iA2xJN9fbfs6xV56ku7PQK2vyLFQP6X3sSGEuFDbTtEqnsQenC3Pmz",
  "key15": "5qcyV77s6v2epsVZpLHCA6HTujTmqdDjynBddW5ELSfcFYyFiL6J6PZur6RVEWcCdiKBGNjHchYrKPXG4Cgs2Yb4",
  "key16": "4Qxr9j2rznNHfAfmKGWZXjST7XMwCTiB4EwKJWVxMgUDkCew7uma9jgJbxP9uwEeMto4oq7WrX7FmZhmJMFDoGNT",
  "key17": "64HZ1rYiehHCeLAoCeRuPN9V2wbSWoL11YFQGoqPThTNyJiCEbFV1rg2Y747icNDJv1zVmPjSxsN4YXhsZpf54br",
  "key18": "5cQ5DheZabptcRsX9suiiFEs6v4esd8Wj5b9BskbAL5dmjczskKW55zwwZZk69iaef1xt1SWM2jJm4jiBXqerobr",
  "key19": "p9EYAVFMPtPo2jhMRFWa43Uf83jkP2S2f4F15xbNmhV6HuyRx4D41bjEnYiuHRhsBfRE1ss6WFUwBE5W8FswxeX",
  "key20": "5RBfHpuJJpmPJMu36uzKKq4XaQ5rHGGibjgxferD7yeEcE2LzsgfdZn2a9ty1mnMxgsA8g4rLG1crW9e2zeSnb6H",
  "key21": "5fcxAsQJ9GK79mB7WM3scX8j8tPwjJApCCQ6p1XQkPnYLPF62HSRByKpNf1SwsHBfPtpBA96FQpsRLPoRMPMD87f",
  "key22": "5gk4aNZTQuyRoqjy7xSYoyDZ12BvqRn8ejQP8FZXtk6ooEiQUJaTNH1nRMqbFa2iaN4eghC7NnVnaByLbF6mWSyk",
  "key23": "5A8jotF9wzWtxrBndAQvh2kNb2KbTA5znC432GzR4EdbqjXCQ6fWpdoxcMZAS1rnEjTZpqWt2XkHZss5tjHxYG7A",
  "key24": "qRnAUfYnRhzFXsZo8s2d8NqWUdoNUjvBZ8sfFugrq62SYRTepJQwELFaUAt5yQuTeDU81HUCCUZgKB3HGb5Afh9",
  "key25": "gKnXSszoQEhtjXZmGLYTASycov3GpszgtgZxxFexuQYpnSN5P5Br7m6kERVrrKXuUY7zat8ABGybJVWxFz293f9",
  "key26": "32r5Tr3JhDzJ853k8TkknEc4c4RPqubK95XJtYPqqnQ53KkNBsKmiM7grbrrv364iqJJTAnUfZmWDcbFK1FKfwep"
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
