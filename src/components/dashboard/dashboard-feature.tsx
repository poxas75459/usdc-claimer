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
    "uDGvwpLNmqbUe3zPn4rSrxVi8f5r2cKp8mBPgeQ3cLWjq4GPEehJWjWGi6CQkTMz46AvsXKJwz1ro7UEy5Mfkch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a8ubDwwLa4XHJV8qFZ9u1CToZ1gHUWLTU5QG1RkLAsKMcqUyE9W8Sv98Ba1ZfV1ybP6d77TM1oA5LU2Q4QU51Fx",
  "key1": "46ma1X3DQCYxPrzxXjNGiCDhi15xrWigJ8eB8Cowum9qyQgzZvwbv4r4pMcEbJWXPv3JTXKWvnhS8qJvSMqQjb1q",
  "key2": "42o4vKg5ReqJFvrK2pYA5bvntYq1viqqSpdtX9uUC2HpLQHfWrNmZzpTRaVGKH6kDjc5bKgeF5qEk9rtAfeeixLM",
  "key3": "RhvPWjseEF7SRJCLDvnD8uZPyaYbkzVh1MKWKdDuenRg22kTxG79W3L7z5QAD8yBbJzJN1KK8tcfM7gKr7gohUP",
  "key4": "2qKrssKnnza1PtaG85vDxH1wmK82XAMtohkoqMKJAM3kmWEdZ4Kbs2Nmkb7h8sD778a5G1mJE8t2FMAGymQ34cX1",
  "key5": "XnB8T6qdBByW1b9ScduKQLwHtvrRp3NbuEkkRmxTYMkxEmNWyTRBBv8CtcupHt2uW1Y1c8p2mKd9yMhReyY9J1S",
  "key6": "4f6zyP7LGaG5jv5Fs1GbvdjgoMnvKVDdF5nfQz1KV4MRze3HPqE3J7hbCSY2faECaCvijxHakv9DibF9ysdEwuk6",
  "key7": "3w7Dp7f7bohwgGiK6B4yeuWwQpuHr5iL7JXfLcLyF84j96WvBpY42jXTto9pYWCwMYxR7NLuyx3Z8c4HKzzgR9Mb",
  "key8": "56PTEVE6vGwxNkyfLrKpmzyyxQzxayDf2kV5B6FChP6n4N4TQtmJyzKPqukrWJWkDx7rQR89eo3PdfB3eypcf9oc",
  "key9": "jSp1VDWznBsD5tPhyGK9x3jddphFMfGT2zFu9NkuoHiqErPHKwnDgNoFXjiXVWH7HiJosoDM8PXNDp3Z8caGJfN",
  "key10": "4firEQTcvh3UYeyQT7SiNBpBwbCmvJCHtkz86ejGaDgQKBE3bVrb3rP6R3MfkfGS7HjLVuf8xnqWGtv1cTny2cNx",
  "key11": "4oPWHczQixQs416yc1LHnHsg7Ze7YzbBhDZzaRNQBU7tFetQRx7oneuJPvTGVof2ze6s4yXY7G87aTn1iAWoD4JM",
  "key12": "oi54fVeNHbfdBHXpaWFr5aM8sQuLGXA4faxkSy3z2XNEo5i1WZQvyAw5UHkxkcdqniW1qdT25PZYmehUiC8WgjW",
  "key13": "rhMSQoSzMhV4LFbhSyBu85TooZMmF29658QHYavft5Ez9dqKN4vncXcQWpWmazS1EStPZLTZpm7FLjb18JAZoad",
  "key14": "qSAS2HCZa6g4GiGCiRtKd2js8nNZVXB135sHhjRWPkwCYMSgFxc9b3TCMDV3ZEM75TZ6YzPYm5kSSDkU6jUMTWv",
  "key15": "3G3WUxCwW6ufwSUMt1nsdC5WaRrjTd9JcAxR6MG8YWtZuYETyZ1WwfpQx2oaifzBLBBgbjMeX21X5Fpt8PhuC623",
  "key16": "Vg7jQ9mjj8HoGYG1RzetBRgmKkwowQjoghusa9FBrxnBqeUUUz7y2kBodd1ztbH8QYb3pVdAwjC4CAgMpvXzRbo",
  "key17": "667Ay3jzdYnXkpoa7BhdZkcmDpcRXz32r1n3PVNX6ASkkB9upByhANE1kGgakVHzRWbt6Np7TADW4J6fbeVsmjTF",
  "key18": "5XbgJuGumHRo2KHBJAxQj2aKqZnDhLT9HuH7pzsC7ZfgXWCZNWBGw1etAkYBFRPAN1fSA6vC8uRa5KBSG6zhdTo7",
  "key19": "PugdZT74HQjb1Fk5sNiQ5jG7LAxKDgE8vL6AtjqZJYc86w8v9LW7pi7Y7NamJnw7t9eys1fj7wwX61265Z8Hfbb",
  "key20": "3TRQLGQjihDuGdCkw1Tx77MExs68fhGZCQVjdhhT3k7eS2BnoEYnN7yUV2Fu5zC1RyGUmqDSk4GBKgYrTEZYSSmQ",
  "key21": "22P6v9zyCpuFX3pWfjiWXmA1Zb6UD4d9ZS1qy1pFeiNi8et6YJj9ABb8PGniQ8hZyriEVpSqGihfiaGaHd5SDa1j",
  "key22": "3yFUbYptJNKRNCkiU87Nid9KddmQGXadjj7fWBGEnZYL7VCRguR4CPQiA8bDofwvFpvcuNe7ZaoNMw4m6NPyqTrb",
  "key23": "3wrmzjEM7czv2HiBpHNWj6XHnZ8BFmFfPpWCY2GCuZRbkshZym8kzNXygbK7aMJeonkxRZbmAosrqK1vFhufJjsC",
  "key24": "2yKWWKP8ag5d1hEmq8YyDjHyCD6H9tqZwtAC4H3XNw1rE9cyDb14xYHUGLknLVpeEs2ucodsC1aFiwF3ajQpgS7E",
  "key25": "5AdBS3Vy78TfDakJWrzi8DsX5RTKaSN3x4LXiWQXxL9Ekq8QaYQKECsbSKPFBnBqGkMPJLP6uVuMXK1cf96vZUfb",
  "key26": "2NRaAPzhdoggvLNSwXVekcQRK48LmREW2uNYtzXu3zbJxgugj2gtnt1DHwQDdxCoNNtKBS8xXU3fFm7K4iKb7KXD",
  "key27": "3KgQM1fdhkHpo8DYRn72arHqjmecKfcMKDhH15L43YrTMxNCrPa7rfR4oRYavYPTFLiBhpHgiGWbSBE5mphAE8bu",
  "key28": "aWoL6RnCwR9rnDv9A7MzHUe4v3thpdYdAdkb4uzXFSnA4FoCTSkUyqhg2KnCuXFfe5jP9MxsWqLcJRzwC95LPnP",
  "key29": "2GZEB3WFR1W7LEHUBDomyvsyEJZKv32hCbCfcA15TtPEbdumLG91kbKNGPe2HDAh1Mynrjki8E4VdNuddmtTxsZy",
  "key30": "393MgnKBzoJvAqbfDNyu6BaWN38AaV3h8CdVMaS557pGNz79BZCS8TzgniwUhPdry7Cv4XMgNoKMr4fwYzuyXRgd"
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
