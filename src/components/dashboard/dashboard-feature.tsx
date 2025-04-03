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
    "4cDZUJLCeoEvEZZcJUg4MLnET3uM8SaAzt6654KLpQSfhd5zCeB91fxkBiuZwpt3aHE84VRFRCm2UzMyQ1kxKkw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39DcSMHUG8AMWH5BHQYzNJeQkxrg4ixzYpVhLUAvwzs6inJn6Twtar73Twdkmfgr3T5hhLhdrZp4Eo7kq2QHSmQW",
  "key1": "538cxMyaGUiuRCfspjG3UUGKnPMZsxNKTb7UZeSC6kRvFF8vGVKSykcWLtBFCABrGAJ4qds1ewALGJ4NzTZUE5QE",
  "key2": "21LGagKcNiBkL9eUzEJZ9XwM6TZ8s1WBHYAfL27aAnqTon3fzxy7meLhyt7KVULb7mzQwWyULRgvUBXcy4NGC4Zu",
  "key3": "oZGZjZc4aj5YdUPvx2fLrvyvpTFr24pUzjC5WTmsGxUcNySUbw8fPFYPYheaXkxn59gdeb85ibD2KkVaQLoq6Ko",
  "key4": "CwJYa8tVCRjks6Zi9GhNxNZacHdVTR5tN6YdKxeA1eiSPHiQb9dB9MqPwYwpKYXrS95icbDbj1qYWxKYVFkLFPH",
  "key5": "3f7CXh4dKd8DnKhvpWDhrqVc61se782LzHGa7Z8DaLeamAEC8kF5t7EDcMySRhjma5TFw4yv34rYkcmLHBv5qxTL",
  "key6": "29wAUMQdvybqNR3Y6QizT55Wh8Pq7Ph8i4v3WoKLcuHLPZEr2jzMomiRFXwmDdt3SsUMo1ZqmzuUdh3ZSyq2vyy2",
  "key7": "2VQX1LFt4vPtTqYcPsFmMRgP2yBSwYbhuYTAJszwx38imou7AzUNZXKNFgfPJv1fLzrEh9CpZtjhMJ3eJiRqt6Hn",
  "key8": "3wQBihGP1qyyWzwkY5FCLQVLhzAez7dBdw6oyi9uoD5gCA5Q2vNQgom88u9CDnVk12DPzAPTnGLXf5w1wHRm42X",
  "key9": "4gyE7sHQbgjdfRqav6fgesmJ6RFiGHhmbZDu5R4kcobtkYU1JdLbMiWW6yTb6d2cyyFoLXQctnNSvnoBuoDFyjUd",
  "key10": "3CYY2fmZLmFJ95PGgZB9PYVfFZS9sgzY65aXBBqoGARDPK4nmGi5zkHDtEajRCZx8YcKVd9b4cR3bVUAKkL7inZL",
  "key11": "2Sm1CZaKbXxtCVy5r3AayMUMwc2Wu82LPyTeJgfhBGffBh5kjCZW6fXSRPqe1TEL2VmBux2y1CxQMYWqpUxQUqH9",
  "key12": "42xoicmPwY4EGzrHup7Bm37vioQkhw1w6aVq823rmMX66prfozgZNdc1URkztv7KnBa1phZHrRqzFV5geKiFzU8o",
  "key13": "UfGuL6M8JRAoywce3AiNJUxoFBoMKWADU59C6oWyB1QYF2FGF8uP28fLvSJmcv4bLeTw12VUiFSTdFUCERBVQSP",
  "key14": "SidrbBS9H3y9Fvss6uzNsc3iTNbSP5U3LHCzeuCG4tAQhpVW9XAdyB9dnvKW1G99FrVuiayQg7pm8hsXnpRez12",
  "key15": "5A7ZgGizvV59Nxn9JmXipZdwJn9yoa17FKFVGQZcjNfW2sy5bA1Wu5qsVChqVX3JfoFFg26gcVP3bNM6ZtcAhf7x",
  "key16": "2QNdp2yMKDVZ3ZPkTFU2yroovRA2qxCZBmuiuAsJYzDdqnCgSPksLmAyqFMm8BympiZVbMu3H2BER62ziq9J7b9i",
  "key17": "4TZdB6scSswqtaUgGrkwGHeuodCmoqrWpRS2VX5RqUhvwHk1Z1jbtepaQZ6MkdtEih4cL2aWDsFmDWup5u2cyDqK",
  "key18": "3o96HKhZQoEJQZTPD91mTAz9n5ogMyiMEBo6uGHRvrgvWwd33RcsTKEKt2iuTHR8u1oHw6RVuxoNKUCJRsC94BzL",
  "key19": "3gDqiiayo4n7wGZUt9UqxoLekA9UxaUMwQxBknC7Px6v5XFezpaVGwftpWwdRAP5WwGb68KZ2C99o985EWU63jpT",
  "key20": "3asjkL2thGLRjnxPQvxgRtfPa48vSbrybC44TLMPUvRcXfKDLevB4z6QPBh3M8LWLhRKe2B44hRSQ23SDs2XM8kK",
  "key21": "5AwbuKmQBzkk6PBEYzv6tB7DjSBJncbCksSCpczieXWdgAEWMCSKBAh8iWhNJr8KKUHxL5ibr9rW4sKcphK6j5Zj",
  "key22": "2FyN3h21w83wcktQJG8z2GjEPDwEHA6An6Ya9aiQdNghg4PWdG5zgu3oTYYJBep92EQsCwKiZqV5q8Y79cwqw8zV",
  "key23": "cqqt3y84o4r9ocm1YMz6rAkxrNxqtijDc5zokZcf1YhSEmb7TFxxeHeMLse3HZymDfGRBME3FpvcahVuUzvBEH6",
  "key24": "2wqnzerrMgMLBLBJY8r5fXyvC2qgwp6KGj6cx58GRKMgSKSqYXnVBfUUnRfZRMfAnbbwHELsKvfxpHPY92dgybfs",
  "key25": "3AXecYb2DGXZ8oy2m4Bt93qe21S3wWzNzQVCJZwzzCszCnXUHdBomHeKVMiaYwc7rFcm69Ca6XPYaLNQoYv6NMgW",
  "key26": "4oiG3u9FoXRRD4uuSLrw6RpATs3Xpz1e26UeBrmsNj7dL5PraUp2gSQcMw5W3bWTcR1GeKcknuJruKav7krAoWR1",
  "key27": "3JJ3fqYmyiCBC6px64SJVc3sCckcSoacMEZ7ANP7GzoF7X2THqp6dZTYWDgtuNx2Yhb9N4344Tet4PGVDZ1NtcD",
  "key28": "4P3njdZEjrmWa8EbssvySJWSudCud7QEreEvyKuEd7okfkgPqoZZmSPL6RxQm7vjmeB7QoD1wYUqzDZyVr2QbaP9",
  "key29": "bbrg3sPJJhyyXu4rpTFMNbzRthcPGWpnx6vWbqEUqN1D9PRg1QhhFHwZQENbohUXnjksuUx6LVpUKYgYXDvCoXk"
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
