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
    "4kbGepQC8HTtUBBRFvTJdNSCYtszMivR924H8VfPvPxEumYDWfTgyLC1L4QDvfrh1fwYHPgDbmMDhZfM7v4U9Dg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RsfsPmnEB5ftEkd8g3mPgpZaiLsUFCjVHRP5YKokhSVsWnAnqpX6pgSbccJrZW4H4EqyUSyDZbhY6xg8GHqisVg",
  "key1": "DMXAfvGouRwnCKkBGEyBGYwvdteq4tEZrA4W1VjRtvoGKtFayYescsC6ugDWiwdRvYrSStS4yiRGjTJr66M964V",
  "key2": "5TRAcnr6o77AUE5qAhNAibhEeHr6KyEdjWfDcq4W5JcUpeGXU9gb7tv64vSAFMreK2ckYtohrEZK3HKLtofEPcP3",
  "key3": "3q3DTMRszq25hKqdPLsoGRA3mn7nwfr1zxYkYhhXQ3pXvaBhYDpVZWWSQzr9Gc9kp83p1bYpVUyUrhK1Ggem2yPC",
  "key4": "24ryKYe27geDCD1KnvBn6uQTNrCrw4XwPaYDm9A2p1gJhiSt1uvhYVZjVtqX535NJNmpkHtERwsWxseWB1geuZRq",
  "key5": "3kDwPghGxJSvP3dktxsHrdcKWijKVJQ2qstiZXLCtnaX1nHFQoah2AUAph5DSQsGoATsR4Zt3w3KViSq5BkwynrW",
  "key6": "5yh1BMC46bopTKwXbqxiiSRpeUjgfXpDdATwKN3EbQq96KJFkqbvYJK1HocCXZ4f3891xRUvhXm7KDkexUtiF6Bm",
  "key7": "5EevGbfBGTEmxm73VJLshjCgurTEmHevj1w3i3swdJk6oHtAfKNJNdCXznHCq9AJJ1b34HbdxzYeWSJVtqQEgwcp",
  "key8": "3gJLMnx8WcJTg2MafRtvdX6ks6kk6vhB35m6QwMyFwmJmfZab8ckZcAqX2jmP5nD9ukXkqVUQZZPfJGEKymquUbn",
  "key9": "3X1bf95SdJZVaURrauh8NvbskAjPPM4xTnPPWZBJJKYYcs5Gq7T2vC6BtuMhX9E6YwyE5Smt6HGsknZZh3x5cLT4",
  "key10": "5kCDKyVvW9yw6iZPc3RN2cw9tpnXMRXMiCDer2vAYUNboVmZYnUkHEzA6abfgQHXHA5g1MNRN6Em73m9rdV7AtLA",
  "key11": "2Uw5HQABqCoqgwy7yZKs3Gt4MNxFt7fseBmrAntNnxG8VNMW6K8GUBLVXY7XsB6hwjiFnBEbrMrHM8wxdbR8Kywo",
  "key12": "51iPEtBbaUe7BJqGYaqQTXEkaLRGoAZrnEog2X54cnyPeTBxfMXBy88XvEmw3w7di5RbYEE8TSnnseSLEJXdBomn",
  "key13": "56yQCpVAPZtApE7A2W3zaThEcdQ9MzstfqtCU46SfWtjqb6CgAkMP28gXh6UjfM722mmogeKB6rwDd5y5A5Qwogb",
  "key14": "32tHHEBUFMFWuxKjCcAzEpbGjaJGwckwCqMGWUwzepHYGyemY8bx5tBqegACurNZMcERGJrRExm9N6Vkkefd8V6c",
  "key15": "5fsQjDBG8keVXAZ2VtfA3nhDqKb4FCwQBCNKDS1Ctq6Qove9Gpsk9MU6CZax5Cvzbg8fY9gikpjK5KLFYyNAVBMF",
  "key16": "5eCPJNkpFAqhKcpzDoRu3kuGgSvQGtGZBrJkYSx5CybVHugHLWuQQuSKiuh39CeCmfbTbjpMfY7edgp9MuTHUM83",
  "key17": "5jXQUht9haVSHQYaQFXtipbv16fZXfbKxRJj4NwyL89KfR7dVDJibJXiK5LQmC92UmFrSu6kz14uosfH5JVFWrcB",
  "key18": "2QumS3kyB1bDAwMmm1tzSM7y15LqjkLqURMnXKsLZWSAkjX3vzXT8YWdiCMb8SyDitkagYCPp7NEVTXCsz5tFiAN",
  "key19": "4z71RUWStYkSwqrY7WTY4yYPywzTY1eb4NPzvuDDJUWorb1viRC8afzjaTy3VLbLS9qXh8Pv3NTGyKajStjy76jK",
  "key20": "5dDpdvrGBmbtPy7uPfwMEdtSWtuNp5EGFFRApov4V4yPYGSjS4Au555kxqXVX3kHpx3rDPnj7V5kqBVJD7ERqXNv",
  "key21": "4U63gDvkAHesSWPMcxX9ToRjntX1vuLReVbCnwxRExFjECwYkPnEsKu8Lvb3dDUnTqjdp8r4v3iZ9kjM7KTQfpof",
  "key22": "4mncBJqzGvuwcheSAmKE1x9UcYqjbWDDxozohaEfJ3Yh9FgbhzQFgiHcnM94h5RQfRFncV8d17grntUz1wg1gCcw",
  "key23": "tEmMX3SLFEK8p54a1mfyCFJ6TBz13uooMfaKZRC2tRDb81Ey75S1LeJkp23h8iSzCYkuLo2mn1vcuJTMHV7TR8R",
  "key24": "5T1aRRpNsJN5TYRxgPdi4WCCTbKdikCBhLYYW5PtxjzKko877ep8M4dBWLhgaMq8KcyregumU2tNwzNh5avo2Rjz",
  "key25": "3utU6Kcd3hTiLvTznQ5zGLw4oJvGFD2h51wjx2tRfYbZwefTbdLJQuSJjS2Y4Ne59daMJ6xF97LtkSqq1LgfuGH7",
  "key26": "2Yv6wZ5Xw9zyoAgMw6YGGJTYUKiGdwy9hubBaURFXJ79VpnfeHv8p3Jw3DfbgdAvnaLf4YoBtHdauws1UnxFRKrE",
  "key27": "33Hd1kRWUtcpvveEVzxbnxQVPhNKEZJKQFFiZrfPUeBiu5CXUkD1kd55GPtMEvfmbjYWX1EcrPh1CYF7NnzTEwWH",
  "key28": "jUsS3WoDL4B8npUJS7TgXGCKD5JJQ9q6MwAE1PkjfLeJdQuo3cZsHg13Ax8ABR3kPLdVydrX4DKgLb9R6kt9ibm",
  "key29": "22BTHTUGwRnuWCmFd9KSg4sY179KayMqj6ntuLPkTYtiAjSnbceiDrHAQ9H6t4kySjo2FafoHt6rfdKTX9C3gVcq",
  "key30": "35pMkYyozH1zJMzqpPm6nWu6UEcTMZZt2LpBYAwbhUSWoSPywKD1tYf1HaxoBGMQLJbfSwgsqpMzp34RPgHD3iVh",
  "key31": "4h9PGFJCZvrBquo7d98v94LenBjDGMYiVPeV9RSdAfWt2HYbfU5CaPZp9fcQZiUUjNoZQmEDm1ttepx95URJAMTx",
  "key32": "5726N2q7aZrn6CCMNXg2oWApFVgKJvrzYFhDT8vNPg71sHU8kjGQUNQfN613KG3W5r7cGVMLfyu3nBSKx6vu1mWC",
  "key33": "3MmngLSgNkXBB86YuuvpeXuhNR4z7xaXzZ36b14DQnNHi8UY7LT3mkDAjP2S1pwkXExt7W6soPuZGq9wfBvJ812i"
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
