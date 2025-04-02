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
    "57PaUyzXFMDTs9KkYtRCVnY83qPUPMEYve3P9QvugWAURnAh2Kpf87fun9LMK5ZsgLVdPCEdwEg5RRNy3f9SAdxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LRWTiZQdR3HHCQtSYzSqeNjn1gaGqmY9379WHBR6ubZTe8TDG3eTNuiB27zZJLLSaqchtsg67TZKyyfpVa79MTw",
  "key1": "5wHnXsgHS9mxkutooZz3p92foxd3Hx7x8DNVwAeg2KasvfFeNELSqQr53TuKTwE2iD3YHGC2q8YJjQBzuoW1u8Ys",
  "key2": "5bBBdbAZdvCq7wUpv6p3NEG93rXms1bEcLmyLRRBv9x3PiUMDV6rdKtf6A1ifxu2qTX5B7jXWWeXiAKyGd9T9UyX",
  "key3": "4Q6aRiGRsuNkVAfz64hjT8E5NzuUHA3XefUW6V1fc2dHhRM4Pju5eDu7z1NAd7BJBT5uH8QF1bWtfF3XNj2zxFBk",
  "key4": "dg5gdMsstsf8LJMVH7LPSsBwG9zaTAU89UEosumo5fMFKzSQLz47KnJ5YivMqsor29ioiF5e4stoNPEnTuiQXYD",
  "key5": "nGznvcPvYH4xQqmza9K6h5zYmZhJ21zQvWEgANfthrY3VRJcX9o5Be1KSzZrpJNRDTtNdq1XjmU98a2grpyVD5s",
  "key6": "9ax6W3ENwDwRBaWB6USy7jY2jnoC8febYqiwdLeUQC8tYs3pBsj8dKeCsYz56S8GaS3ssbh8ZTFBENq7xCqAo4G",
  "key7": "5GG4sPci3HuvHyBHkFkxa46EDQ6T9jLYBTxyJmJcfmQfrqrb4k9EMppRDL9Gj5it7u1rxwvcrTrc9cch7CMqeFLP",
  "key8": "1j3wt8tsYzGdCf4US7oYYTrAmnaxMK1JY7mQNEWtN8BivfqrRTDTfkF4eJLQgx42Xcob3fNnybifkeHn1xkq3Z",
  "key9": "2axoiPstp4HvV4ew1fFJrghmnWDmDFgLxNzStYZqMCunrvBN857uAkcghidMyVqvmQ5RMBCskfhtyaKHx4VvqFQC",
  "key10": "2THHBvFCX15VkkvQJ4MASupMzLHMgjF4fdZFGGkN8BGwXoUkVQAeyXTSFg2cMyLwYukxr5Md2z6J8Sq7PxjYbXWb",
  "key11": "4csE1HeN9jLgfFu1obNM4kJ66wzDwUu4oengGRGyK7Xfz9HjzviyfQinwnCiyFPP12EYt9GuBJKvrKvB171wJeuE",
  "key12": "3cS6ws57y128U6GCxzkmMjwG846mnHsbCyJTvZNSQbtKdR7XVibBwYYEjdSnEGn6U6hBFSTADYu6t5F9v585Ph9p",
  "key13": "5LfuT3xv2HLHVxgZFFa7gHjBw4fvktEviMV3gjG63xf1FDKP8xjkF3YZqL1549KGJNKcPZ9hB3y8yJiyDVSCrZ8S",
  "key14": "3FmEZNBhASAt7gb1R1STp4seb9kTYdreL66pjdKz53G6QoUeEfyiEuhmyLYvVtBr5RivBcFMVEjs7Lgvq7Gz5ReQ",
  "key15": "yxkYVhGtZze9pEppRSryoWKsqqbszJjR8pUTkDuine4Fmgt9hy68zVXmz3G18T7V9ZheZALq6k2Xkr3WRkLaUBL",
  "key16": "3shn6gXz49QrddCicJCw4P9wV7YWYBQVzmJVMeEGu9E4ZwyV4E8FBEVnH6wSdayiSMBkjVyETme4PhWvUnH2kRmn",
  "key17": "F44CmNdeQn9HVidaqsHpXYb93KCaffxrn7auQ3hfjNSzd6WXcdL5KMguSReuQxKDugkBxC8Ez8EsxjKnVyiRuqi",
  "key18": "5BhwhJTH8vyxKWkrszKY5pqTgEJtXdbCESFzkBifjDbc5iiQuZJUC3773EEM82L5uiAYCxcUmh9UkXSSbyXCHAny",
  "key19": "2uzjWTdKhMzgX63k57GW2fcGH444xveiKf6rZpzWqWdRgB7sxSX1yMqoTZgXE3Ctj7jncGKndbAQ33hr8wVrZn3D",
  "key20": "2TiE9vLhKYtxsdLj77Ru4jAoU97Uv5af2BEhSCc3He4ieVrHPSyoozdynjiFeBamTnAvjftq2WjhNGbLZSxZky6t",
  "key21": "35nJWtG5Na3pA1ZK8NCvxGGgee7qtMMKtq578qoEY7odrT9JYeRp7zpgKS6ZM82SqetQ7Hd3imgfxNLZZ8mdkESU",
  "key22": "pwKvZzJkY8UxswkvHbxavfsaMQUQ5Jxe4dVU5Qe5c8cr2oMBBi6rw53PH7fpQo9egZ3ER8y3QzG2o94EKmS8Kn5",
  "key23": "2CLZgDqGVxggPtQevSo6kSby5hQvYiRrjiujJkK9mvDTDeYW84MmBqNZRBbVZqK86rRhBVVPWyPMYWojtzAFpRYu",
  "key24": "4ijJHqTU22i9nvCcTn9gueyYTf1CmoK1muQADej7sonFoM18F5EmePNYVVjSkKxC2tpARDQJm7aPF8QGp31zf9mY",
  "key25": "4fXAU3RD6ZVZq8VnvceddCFSTweiG3m9rW2b1Z2shPeciLKi72rH7jkishNPBwRn9cBYau99EaXAnfLLAWraWQ74",
  "key26": "4BNFqCbwK49Gf5HGBHTtyqUYvRRQFfwNePsUQW2sQqyrT63rqkrRXT41PejrkWnCKKpcX6bnSouWunUjLzKcBpjP",
  "key27": "c13XLh83H1DN8rFZtD3uWzu2L9P66ktu7pa7otVYSZnVaAqo7p4WVVdDx6CKXd128aq1awQ6D9SiH2UarMo7zwf",
  "key28": "35vLC4doR6kwreaW8KMuNMmDPCJYN5Kgx4xWZiQM6thLEyiM9crnMkdBNxNufBCZmyhMTAPgTqp481nutoBkDhuU",
  "key29": "2zhZ4KBg3u3Wn545TzM6hUXhuAi2xJWwjxS1ijUGdg95dpvJd2cenvcgKeGq3hqMquNAuUyT4RxJemFGj3PJKBVs",
  "key30": "4R97aAPWbDMoZXasQV2gWDTcsJHQpVgXsyhvVkHGjHpYTDPDnw9DFeyYN3qedw4FnAdXADF9byMJjarV2sjhes55",
  "key31": "Xzg1deg2FCgj56R5VVgg2VHoDA6sB5fq5rNy72VbDavmQWV48Se9v64oeTbVPh5XJxRiZsBbxfhj4Q8psqxzxLR",
  "key32": "496kJSAFw78KF5ig5EArGG6PtxVkx1vtyP4pWiPbWqUFZB4kbKr1YbvJuMHTeamSVMXqfv4yTupwKgdnyTPjeJFq",
  "key33": "bgPHyN3XjmGGULX6wpMCyimuzsAF7ehddZX4U67JdVmk5jyD21oXNxbehvdERwQSHn3PWVHaE9eJAFhpJpGZYBC",
  "key34": "3NjLY6Mp9qhwaKAoTGHVR7BJ647r4aXbp1fYq8vqqGzAYcyZXzwL8fwagHnjd9NZpgGXi5DpAK6Tvz4ntrxhrJRW",
  "key35": "5gorb331TycX3FqNG5Gnb3e3AFEuccahMVCx1C7ddURati8iDg9Msdy1reYQ3ParhU4LnnYy2DhjpgdpUdGushTj",
  "key36": "5MdvEJDR6uUJ8FGTAh5gQFJzSGNshKRggaLPNMAo4uPEY1FAbhSxAPQH7pn9oxAK4TSBLuzi5Gq6DFbQQNHGvX2M",
  "key37": "2H9SGBUC7GhNTE6ECJsuEXoFCzzWvLyEAiFCWvd1XiyiubnjGttQDhkEDgfbLDsUMhHJ4DgjyxYxmvmW7j4X7WFw",
  "key38": "5FNDduX6EmER4gcrbyvPY4LF7i4PhRRanscENhPGgHC1b5LM1W9MKceQ6uBzPfz2cKsLmy3jiDAoECtACJivztJ6",
  "key39": "PqegSkFojU69kkKfi1m3vpMtaGjKMFY7QK3JKJe1dnhLnMRPYY4y33xebyu25fK8E7PRack7qpiEcX1ExEBLWq8",
  "key40": "4dVFvYbeyBFPzhfgyh1atM17PMKc5iMdh9j68oYjQBHFChPrvbV3BgCMNTCgqjRrFUVsDPjzQqmSf9zvxW5qnD5D",
  "key41": "3jbwHpFZNedAAJ24Xd8ZrxRWbk7RmHSuBhoK1Vido7Aiyysr4iWq6booawJFm1mzJoHhcQgndPFCQs11zzMKQke1",
  "key42": "539dTxnFYiaPGeHvtgwZz7rnuHtEothEbuVTW6GDLsZiSm9AEgf8L5rHom6EHKaZyf7N9t5TbE7VweTLeLsoajAj",
  "key43": "571J5kMThKtbATu84sAmGp4n1EHooA4tLSSNCyaujee6sHiepd9NPBDPpttYCfDMvnNqbgcaCAB8ESN54nK9U7Vo",
  "key44": "4Vz6scyNBXSWVwW3gREwSJksJ8sHiBKh3yPL63AjXp8MDUSfPQqjq6wt541hsDYfKhbzQLPVFU7ZUDTVSpskcK77",
  "key45": "2Ct2JxHrUZrihax2PWEQTVaRjfYAHWwDLS82NYHJyoBztGnCvTGq3m51XmZqaMbB1AQvYvgXFNkbmPfkkpYN2Bjj"
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
