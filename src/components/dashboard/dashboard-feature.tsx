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
    "5tMN6hfhbjHMCteJxpd4ThCLFgqNGw3wodnqaddM76pLVaGcQftG1FCPUDPFazwzMQ9gkBh1cfexuKdKn3NqKLzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xa8xnbqvRKWhNaxpLGxrnb8DW6fjMF9ZECfgHFXUjVY6owAG2BJHQ2ELCLS9DjfFu4uYWAA34jq3PiXGihLLDZn",
  "key1": "5SmyzXi8Cng4mCNdDSu3SNq6qfb73am3A5H2AepNaSAr3NrZyvYV1PkfPYtdehMzQirbZ4jVTCvaMjQ4rhmdSCyM",
  "key2": "2LcmsGVME9WAFjZbcA1bunaC8ebAyZKcYkcFbXGgh7m2bhfge7fLbnnLSuZYLVwsEBGmaUYeEt1utmTMQoB5BPcV",
  "key3": "4zUEnXMFxr9PCt8H1mzN5V5iDENKQoCf88bQKXbqwpwB4bcLE2RnmzomGaBnfxxVjzNoAez7P8w38h5nTb3Wo4mj",
  "key4": "4whxzXsEkuCCxHibXY1BCkBmrh6naexqHXcAfrhnCEv89jAbp2biZTLH4zSt8VpaacLXqimMTjBVXz5qss4kk3fF",
  "key5": "38xuk85QPWfLaKJ1Yazm6gipET6KPnRvVHy1ZYEDB8Tn6R5juS4uTZ9J8NgdGx7L4Ca8XH2M2AcyggoVZy8ojtN3",
  "key6": "3avTkUEij9ytjA2pgsoUsaa22M7Sq2bLtvdMbHSVFA29QjH3bvNtovfrEakmjpBwVvnDKBGuvTnTkb1i19RooDdA",
  "key7": "uZnTjpdK69vsjV7Z6rFVVMtHCbuQjS7mEPTDbGPeVBfTh8rzvPUjVq1NGCda3Ypx4GdJJMaSUoUXuiz4acrRJX3",
  "key8": "z2rjHvyW9mp2fAsx7d9jP8tSsD3yevb8KJt6AL35HVHFSWyMrxyJPNi1YNv7xNZbTtRbr1Fpd1VCU9r7HaR5ujj",
  "key9": "4gtUmztKRetnVxiQNRK7vFqskr53uTg6ZTP1kM2UcRP7gbnA8J5w39e3BX1wPaHhY5gUpwABnZhixfwHmtetbdV3",
  "key10": "5avKvMXwH7X53AufBykyoyR46C2LAT2D1UafcJbvUdf6VPLdw8x96PWzxAgCDBBw5oLVa7mkVULwC75ApkMFz8d2",
  "key11": "4Sk49eGLnnbz71S4auzVbhFFmr9MHi6MFju4tVep5brkTRbugNYQumaaQRUX39zXNvMhafXuoVnywUK3aJpBvJFV",
  "key12": "tfMDdnWpM8UZ3hjmqbHHBA987YEMNYugtEpAiCm4E2fQjWpg8m1wtsyMJ57dpGB2Xa34FGh5xgTicXJCPmdMz5B",
  "key13": "2JKsgMmbiXBRxe34AF1Pva3LXnKWuJTseqBas543zMDUEPSBHYPvXG1Vu4iwzMCVyn9jQ5hdbzLUfcYwx6kHNp3p",
  "key14": "dW2YXnSKUrkvFxq69rZ1JsSnTyxLkiQ58bB8ZmoKiC5wFqwrByAuTfEKFkufKDULhAw1Rp77EJwSQYzXUPjBEk7",
  "key15": "3u2cPNHDxi8Ug8DGbECB5hD8NZFQMcG6qAPutNxP7cxfWsSqzFyUJ6EHisxFUudhweNCbV6RnGdiMdU7Qwuk4mfb",
  "key16": "4wGVZxT8mySPjdifTTNzPnqNwmb9gbgGVJNgTeKrj647UTDPCA9Jnibqza3Cx8cv7bfcAqKxhPunsFEpy28qfWYv",
  "key17": "3APGDG59RzR7VDXd1P8mkptBdHeV7xAEaywitRxs4WetSqtiXJ9dcVBrVh5HewPGJjt6nrEnfP9L53tQKMicN7Lw",
  "key18": "5XruKMtZH2Py2vsoXXVcnUC7VeC4Sfz3EaRTCNRnJKPrE8tjA9KND5Hu5WtWLvEzAFo2gA1Mr3CZFsar5BtrX7ds",
  "key19": "4ucMZ5hbKZjRCKsiXt1G1neK2LrmWeegABeLrNZVfrk76i15HZL7dd6SF4SmC1kVgTQaJhznFUKEooitrbkxsW8e",
  "key20": "5VKZFPdMwTQ8wkS1RuUjLi1KSbNDZG8QJLZ5N5VeyfECqgjfdNryQGbitU1q1Jdq5FVzt7rVuBEGd7UxUuWvHHSv",
  "key21": "4broCuEPjtNLAQGpKUk5qSu3w2A7tewU4fSGxErPG78YVMRdd61a4qzh4uP4wfryE7ztLfYEumCjLG5WPo1vVT1V",
  "key22": "5ukz94jqLRW7k2hudkarPXY2CaHAdeNdhpzi6vsrUKZQYbEXyeFJ8L7NbviinQcfyhuBhfm73FRqCWUG3cRhc3Hj",
  "key23": "4EbpQGc28FZN1odvsRNVWAprLDRUiaz4NNzxNn7KGbZ1yH7SUHaDoHmo69mRjLLYxPyuWUJcwuDzjH6cXziLeFut",
  "key24": "5Yh1wAoAmgH9Q7VpsJEQdKbcb1vZtLqjxNPcWNiwqzhaBc8zukhd2ubcjZcy46tF8QyW64r8bVBNr2fGo14USuDe",
  "key25": "3ztXWrGMmXBpx9iqWoED4KVjp71zSJeoMoWWNjKFLbYxmTTDix6MsV6H9noM8NpRUCiyGbmA12RPyexLgkJbZUZA"
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
