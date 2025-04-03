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
    "67NfzwgGhkduGomWP8SHE7q5ra8BHR2n7HGS8rgp4UtEw9A9JHejVUZRedbqCX8zYTcypFccNL1tyMM4KT3wSCE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63mAX44Y43XymWCn4zR8e6TKMTKMtZWwp1ohzX5ZYNJnoqqZsatFmMZCS2qPBgcKhUp6RHkVqq3nbhQnbfW3A2Ji",
  "key1": "t7p7tME5fXYchpTBoVifHoNoyHkphx8R8HquedGuyeiyTj8JZXvPgGYxw1mfkfbzyGrohFBmhSdcLK73PSUZDzZ",
  "key2": "3AoumFoLEGTE2rFr51n12AYQkUQm7yPeb39SfLnFxxXpDKB6ePZigNSGUKfSLdzKKTnYN9M9qhzBU4yjMt2ABeAi",
  "key3": "5RBKCb1MEVEPDcRtKdb63UEgcMXs8jv28J1CVpKTi5kYP6mSeZuZp2HEZS5PR2jSwd6MJvmpVeEcJdP9dfZpcKGm",
  "key4": "WcfPQrWxV8KAQrVWswZEPTw5sPhSjDnwWabqWaeb9yDDh91LWTGu1gwqiV4hBsAmRiwXYgXW94hYdxvSFTAKimC",
  "key5": "YVQsS2VeSLefBprj74BYHkStHqmmvXT5HQ3RxYJ6jjbm5r26Tjmy4DhC1CfRc8fKhop7WHfZhZNdVn6a35Rq6bP",
  "key6": "2C1FQwrucXk9A4omC2RNTkpicYFxZ5wv1QnXVoMnzkBT9YBERd5P46Dvbg6ZfNxbyqSeBsiWbboFm7cZrEEs65Qv",
  "key7": "3HQ2TpH6Kqg9jPBGh6iLePYwcArY1twWvNe5UjdUXtTxWNayTT3F4WTjVGS5j7EDBj3C6A1gXPb1VMwSKZoCRhQs",
  "key8": "UVWXoGDWjT74RU8876V6cu9msUXptwJ9pTnYqWKfToq6YtLsFwSFBfWJHKf8VkjwFAHSGVMZCGo4auNurqSDzCc",
  "key9": "3xVSVDhQHrRGDVien7T1Brhkioe6uP1d73ppnvozyZhCpNdCWoR3U6D538JsoLFasn3YPpssctRHmiaao34tEEM6",
  "key10": "5arfnrsK2tz94NWwVuRWXPeJjv8YFCHvz4nZsxtnZPju6atQbcSuQUPxrXBLiYgyxn7AcE7ZKHHoQL7KBWyCiy4Z",
  "key11": "2qntUVue9SMXC8J3VYRJp8USRLp5t7aHynbmyBEnLh55S91tUxPdC5t9cgDosV25s2T8BXPTqvXyhaFAGF45NAM2",
  "key12": "cXqJX9LkXwPBtVihJXYtaziKj59mqK7EdrZJnBtCeCdgcYpmZJF8RqA1LY1xBpJ8fEyTDHWTVP65WSkyrtw1eDB",
  "key13": "28UbiDVHavGrUS3GvJUhSf2G4xf9os6tkjqhWu3ZCRDUuMxfAUCmKSai2UDjNDyuaTxfEHhCGjLy1k5T2SxseZxz",
  "key14": "3fJejSCHYQ1MXorMYMbCsoh2xRhui4CY9VoXFCEHwvjxESFgapebBmpaBXRCRNgK2FtDjPFCZveNnPFStYNWsZft",
  "key15": "3gqmKw7TK3vr2wf9eco9BXhqGFCipPsAWjuXf2fPzBGUxNNBEdCBfPoWgQBLzCvLZTeETiQ7ej5TyuALZPXJ1Pgf",
  "key16": "4c4N8QKtU2h3Y5iTLnzPcDRUthqFSC5BhTkvE2r4r2HK8dcAAGp5gXzPQUYum4SJNPf7MgRrZZMJ77g2eQDjoHhz",
  "key17": "38aJdBFXdA3DVRU3rWVT7BmkFTDhkbEaDE9uWHCoeM8L32hWkw7eF8Jmu9U3Hho5M2cdipJ2ZpBa5o2HvrzUmAKb",
  "key18": "3TFtWhSXTcmUTa2TSXbC7RgiYqrNzn3o6oAfr8Q6xv3P7yaDXeraLKhxqAwYh6chd4wbvfAX35TGF9m2EzmYQPj6",
  "key19": "2gREq6jcpQFWaaRY8aUtD6r6wFNz1htFbGEYuX9wKwff7DebiAmuCNeA9GymCmXGWVCHCzDoEXVGkH5yGr7ysuqU",
  "key20": "3ip49AkfPy4BUAgiHKPcYoa8CbTQofrFoymDwib7L2WjAf9vAWvQAgq4jCkt7kb2EnWV9vXia9wQVCqxvwMrm8mJ",
  "key21": "3Q3G93HYszdidN8iPcr2YZB8ZZP9Wn9oN7nQSmPbqqCrp6HCtE5Y9Ndg9cbdeh1hiPFXvJVHqTegDi9AHnwokctN",
  "key22": "3W7HzJDuSZeVJWMVsYEc2rHD4kjxDFD7eLnKNBGQsRA7QtRNsAKSaneCVqbgCXrDCCFdLdavh5vKU3pNaJBjqcix",
  "key23": "45v1UYLA3DSKRfHHQ7FDav6cMgPZZwyZfqaM7NPWsacLQ4V8VJQBgDhGZQrpLegY8H8ZrXngXBBCoW7fEp9sZ795",
  "key24": "9b6mppWmRpn6G86nN5DUzmQCStNu6UkG79qKgome497cBmQqcqaCGkaEb3CZLRgS9FTbPn8paFbPaXcdZBeWgHM",
  "key25": "2d6LiUPQiTk8e2wafU5o8bRDL6HkjFJC2qgZiQ9bepLDQUBmFntQUNZPUkZYrudHaa2bVefJjZuK3BSSZnLM2VN5",
  "key26": "4qBdLckb4caxfhfY1rchMUkuDFZKXzisT5jMiJCDLb1ueDKDB6fb6QtjeY9PPmBD464Z63dK8ehrbigtnA9tnmSf"
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
