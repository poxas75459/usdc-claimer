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
    "4c5G6jfPPPaKumiAYC3SP9AhG5WFKhKZgC4vgHYJrDBekq3tRbAtj6fr3b4f5sCbeCiJRqzqUmKmRPAS4FDYCk25"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R4hGL8Bep7TxH5EjbS9TFNG13gXFupfB7fVBchF2MpnWYE5R3WPfWnRW2f3pNARweqotv35RS5sVu3gtR3m7WrJ",
  "key1": "3g4caTBv88pACziiTt5P8JtYrjCgjp82JkeVY9VXUGm2LD5gbFU1mWddeoQpCofrY6xuJtAf8rD8ApnLieGcoT7u",
  "key2": "2NxJPRznBRzYfYiXkQW84mERt5KGxhVV9iiREmk7C7VFVj8yinK91TjafnZG69T3iFW1xjfwn2dH1QVr173ajZ9K",
  "key3": "3bBycRN567iJebpHaCxgGqZHfUtJ8d6PgFt7ZhvRVfd3ZNgewYTFRYQSmRx1XF8mWPoVLH6bEDPdTNoYcMi2nQAX",
  "key4": "3FMksHZZQpjd4uLFPCC5cjVMahjSstmpggFocuagffACmQh62XYyX8fTEU9VUTpjYqmvDvK8dQVozMkYFLXcuSWA",
  "key5": "2ia2gBmL26biXQeJjX7ZPv8g6nkXRiEjpx4fzoRGr4ZYzfzxybx1pQqdhACwt4iZHseJb9uaMRD4eXJp3ySxRqeJ",
  "key6": "5yZLJEoSDqbf3F6c3DkQFzABpP8fpygb8tRQfSeteS7HzCVqFnmHUfDPqXcaBGWsNCGkcN33vB85mFBNeZiYTh2d",
  "key7": "njCSg3nygMEqoAJyEabRDVcaTScMTLV99fHtB7QEzbFioHX2XbSe8gCJuCtocnwMpmXEDj7r2o9TNx92aZNsXU1",
  "key8": "2FgPgQCFjXW2TPmuc7catDLM2zKFSfq24ZqRkzhouMhnFTWBV5gPEog1bSwcoZmJKeowKHtCzornKpAE6fzbF9hk",
  "key9": "e6RTgtpnUqrjUTEKguh9cnQWjJgr2B2UvmsoVDoQGdaVduArcVRCFQAc3zAHqrQCWN62v2HwGkn6iAaAVRU5qGj",
  "key10": "4cNrshL7GCxxDtwcSDbvDq31uWUo4JeGZRTzW6kZGUqx8WqLEy21y4dt41yFANAa5nwXdyQtwUDuFEE3N9Zppht7",
  "key11": "tDKqP4kx41RZ4GWTJsLMpXzE4y1PV9SCxWp99TV5WucXnvZPzLjjdUHm8wNbKUr7a3KWfw48zpTgNHCYopejSpu",
  "key12": "5TVJPcuNTipYB6H4nsSAd67jsu8BY1KvuWJ11xsXRSvQnnxomBJZHLWnw51CoJ5csqpk9pH64pMnKEWBTofMdNVV",
  "key13": "2QAJZi13rn1w8M2HXPRGhoF2qFo8CntHg8WLYex7xuseHX2XtfrH2sv4t29NSMUr9JaRgCQMvqPoBQXNsxwERqcB",
  "key14": "RqWST7wVkQ1SceUySsjVGABovs2ZamzcciazrA7ifpwyjvxvvUw2EoQowmbCT1xNnB8vFCJU6xE7MCRip2gFi8w",
  "key15": "GCo9c2JKxhp9VzApcd531MbZ2y4YTPNpz5RZENG7o6acbTNPBd1TyXMMw9suV4VpQ5qMFCoTPcHq9wzGgoxKs41",
  "key16": "wx8eJnRQqmPsYpZk4Rx5nohULQwKwQDR1osEysq8EfB8MirJWp22DBwMtKGGpr56efVMLmLpPgfBywMoLgyepyL",
  "key17": "36NpDWiCWhNcmWZvPwVcLgBbYGWaaa5cMScXM4zeo11M7iTTfScDgWosHPitxfDm2TCHjtF5H2TTN5ygtgdoQ7dU",
  "key18": "4UHRKww7vxg5wPz6ot24JVMWudSKWZDve1C1w3X5iroKkPhwBUTwztuRGe1xCGog6rD2aKMvtDkKuLcdYgN1kwfS",
  "key19": "KzBr8sm7quYbAsPd43pPDaWqmeDHeimHDK8SYJAGgrMBKDhucbpKkeX4YA4Sy3aw978783yL5zejGxeYKVQx2vH",
  "key20": "2KpaAGE61S7dpvUGCqJZsby2PJuCtMNWou33RXFpKFWpmkstEXBrFjKz9F7jHJcmKgXbi5WWhFZv5eN61Qj5fCLc",
  "key21": "4YJZzJUY8wYFwXTY2K9QozW7m6GT1xd1yyzi5Mvdb9hmRVpxCnQ4xB8GxF5iSrSkDSbWyLLf2hSFxKMKo8UmRjpX",
  "key22": "37Gb6wHJkCswtGm7wtb3pYpNA1N9LGvRMUWtdKZeDHiAeBsVgLSjv1jdoCZxxBTquojHzVxbNCvLK7xyUeXjqaVz",
  "key23": "3q1pVdUEBsgbG6gJbCEkkh17HrMfNQCGPosnCPr5nGavSGEumFyWH6DssoFD2XCp7tW6gH3sB7xVD3YgcJySahNb",
  "key24": "4t4bci3rKPmKS61Q5dSJ6pUSR5tQn8pMN6SGf1fTxUhgb6iYkSU2T7T3kEeDdQixevWuLFX2BtfJckM9dEnJ4FYU",
  "key25": "rAiANiAxwtGEdtoFtjpkFmDwtarFHN56pzAx4DnQ5JRiofCsePsqmMpyFnc2aKjsfFQEtVdXJ3fFGzPgeWy61HP",
  "key26": "4YK2wAe7N329dQoBtYUSedbzKAd9fVKrjcY8a34EN29RrhRZSYu88q7LbmkEG3dKaHbQ56uBiFizLnPejoABTwix",
  "key27": "2FDBaTAyjQyWXi5qVmMf75GTQjp4dLcUV3h8kkkDq1T42Usk82aXxNpZssH5VoudK8qBjBjEUWc62J2F1jXxj6n1",
  "key28": "2UtgryApELx9NfA7S8gpA5DDasUPu5V2gLAVSchiHrFQXpenw2rvMpJgNhDVzJrX8yQuJqTzBvqqs2gpcpawTCsm",
  "key29": "9wYdiyGSpmSgXVcNKejw7HLJjwq1ny3hzgd9zFW2iAr3QAx9NVgEyyRgmemLwoHFpi5AEe6iWYpUJBwfPJKRkzc",
  "key30": "TuSAvXP1ZNC4MsJRjXKWEfUEAUkUUT2gLFPJSmqkGDsgX7dwy1nk1uvjzJjnRyoXfvufgCHSQVYX8DMWEZf5UPz",
  "key31": "4SzXr3v4ag4cw6pBeguEHzow76mVbJJNSK7Xnuwwyzabyq6CyDpiwr324aTLy6deswQS7zcbRYncv1LdMVsVAMPM",
  "key32": "2ryNr691XuK2zXaP9qJ1dctDrppT7xmL53wTMRxrdcG5YaJQKgGKCr1m5aKiCaNqZ9yDNdNzwRrsUqc5ha2mLjgF",
  "key33": "3Kw5kuHbgP8f3DVyxxqh4E6YVg3qn3XXbPgNckmCjNxh7xu7UHF6e5X6Zc6TRU8AAE8Sfih1YrYSbZ79KRcsxJbK",
  "key34": "itJEMyf6WD4g4KjRmStsybd2aHzHhP1v1CiWGUKcpUHSdYJrS6JGMN5aFAFZ8WfLe6vifB3FgdmntGoeKK5fKAB",
  "key35": "xu1HQUqGAarsRitmUPhnUMsG3P4PPtjAovvfdGkXDj3M89bqce4VJJkxxxbPAwPUMCgdCncDiWNNBZqJeQPMLFV",
  "key36": "4ScCGmsJMLWYQz94a1BxSNbAdNnqo8zFFyMcKqKFJdWQNJXRapq8xz2V9jnSQryVf7WVCixzYsn2rkKzJsB1MuVX",
  "key37": "4UuyLg5wiZ61S11pDJg9DaEcVY2Rz4MX7QW3N2wHex2kHTLUXtMwNB4D8sAxpnb4YU9M3fqGYoDu4bP9AFAVedME",
  "key38": "cSx1F3Y7Jy3jRbM1PC4CWXGN6uTsU58HWNZfYFWQDX9XDbPv6agEGNBZg5U2Dw9WuZ8m59DVXeGp7hsE4D9ULeD",
  "key39": "3Arre9zrm1jcset63rBxyYjL1UbF8BveWTDHuGzgfWYTWcMtKDxmWdX3BQpJVSLjbdf6ergmuxA7QrwvZyhEPi3R",
  "key40": "pZvcSz9tLUdN1fYLeeepEQCwDcwgFosLUHG83B2L1CAq4aSTxRD95KKEQ7oESsvTCsDTWY4xW5JBnVBbw8zrPis"
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
