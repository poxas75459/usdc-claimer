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
    "3TTUhbDrVNsxMPrTt1G1j6TayB89nkwz1TSXDxk3GCj86uQfqEwud2rhzfkwEfh1rZPyPzAPCRQMWec1bz79ibgf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ghri2zy1SLEdTXsrkwu4K7oC4wySyw9umamYFcUPrg3J7FFAuTr35PLyK6QKk6dXhqzM5GgGtWW6Vusf6s5piYi",
  "key1": "h1r59WjYxGky8PzgxFuJTkxBJvNmBbdYiMqMidDtbfaBy9fsRzQLCMqZRpyVKQSEThpiG5tWdBr1MSf25USgMPf",
  "key2": "4HeVfmy5aJjG1pqtZibLajJWyfaqkTnq7spzdZ2Tifte7UK4tcfbDMd4EZpBbDpWVHoV6DByH3RPKhRVB8stPykP",
  "key3": "4wgoAEBT2QHRk29XMDCNrcCnhWaqpiUWTWhKTkhxUCLU4Zi332LqTWPV1BHrUkwvnox5jy7gdxKR2y37dyUvWseV",
  "key4": "3JNSiK8DWRWgoXevntANYphqghNKYnxe7rg2x8HtP9FdpWzmhz3FhmyVywPxdLNGVS2ehjc4QPw51XiiUuzUmMMX",
  "key5": "33goHTutk4vxUVLfzTvchFCbP9hHbUAgCiZ9Qrv5MaoDFRnfXJMq6QY5zYHGLPdhqx9npogQHhxCK2vEVnUcX5Se",
  "key6": "3zru21UJ1ReoPoZwmdwmwdFLMxjBAMepd3UMGkUuugT5VC5Y2kcrtN823Ag2SE3eZAX6GDeCoKUj8G6whoWeZgzS",
  "key7": "3fqE8powdd1G76DR7Aw1KxnTZQXJKXNYZTK6FppohNAv2JNvN3QmpAzZmJKg3Q15w8c7AADa8eHwYxuCvAYrjeGK",
  "key8": "3NoNL81Ny5zsiGEPF7Tn4zDyHYBUfDFXqNJS7S1AA2pNNLgjttZ8qqTJ8cAn4sUKM8fszwMXRnYdQUuFNDhYYLYn",
  "key9": "2BoiKdivUeAovGvvQypohMKDmiqbWxuzCFgMXCZn4EJEvKCvMd2gEscyKPoaF8BakGAnGaoQmgfR7uwBUBzVqDoX",
  "key10": "2KcAhqJMmUUofiky9tbWXzBmgw49awTiw7872jXvyJ1JuwPfNJbdvHZhHwspcEoqzaubq5q183atk4RTh9U95GnB",
  "key11": "2bSv5ScA7oWN9A3nb5ktT266maKcMazneJ1PnY2JVdXGsZdpGx5XeYBTySPv4KCc3Mcbc6rYuSCxqzwAUT1DBoc1",
  "key12": "4xtn2zHc21GJiE8NJQZDKwAqKbA8jwHdonR8VeTURRuUmPVkmBeVvjC4EZww5e8eMtuYV9WVoyC64dx8A52NHUr9",
  "key13": "2u2q9jGfNFLpix2wB21eUxhhgYmVGwn3yV7eW9rKaR6wXpKCe5ayyGdUun6LuBMyA3KdeRJ8XZWVS2uFRiGkk9BV",
  "key14": "4qKm8xkaXiLBg9Rr4WqEe2C1mfDwLHjGE9KY8RcoK9BmhGjFXF2mnEvYLLWurjrjRBpWd8kwcBVowFNwLHb3LwUY",
  "key15": "5oR554z5JhWLxdVB33NAgFzJQLLzrqKgZY2RPvep7o13CVUNxh3VFmzYAXBrmH34w2CoXWYqpCRvFa6rcqwG2EmR",
  "key16": "V3hMX7mPcZpj4qVGojixv5E9n1AQ6d9phseFgj5ydLujPbnc9ACikz7Ge1pXU9DDvfUC8TFybuM4mTzfFaGa26W",
  "key17": "5coagtJjPs7ZE7h7mYze66Dh2HDndk2BeFEGjsTztgmmp9Ppxsk81wv3AJrv1eDuEoHPEF3v1br3SHzW5C7Z8UsX",
  "key18": "k7h9fneTYGWyyNyEwkCrFCGrwiobsbmrh7ZfNw93dBEiQZ2wswPBebgGLtHzrFtYVxgqtrXJ2omBQzkhnKN3iwX",
  "key19": "4GJGyiUDEwa1gTzdUjeCUGNUwi4Ejf9XJGuUyz9brbycxZFUev4qzuAaDvGaLhjJhwzmXV59JTkJ7FwY4FBSfvh2",
  "key20": "pcZKH2tkP9y6jwHURPSk9PgsxadSxxfSRVfZm5njtQnKPVGn9X4ffYzDCdjQpDG5QroMmssQq59pyKfzKkKYHPF",
  "key21": "5RYmv8oVBqkfXxwBf3a2Wvaw8nsk9HXwqN9xLtSEqoBvBVMjqp8nQEsB1UUFHWpEXh6vDLB2VCeGCA8w182mwSqi",
  "key22": "5pZ35upBoaRVwuRM6YYkmiaM164vzzaYBQ9HVEY7ce91k6istwfgPPKiZcde1dMubuwK2497yxm1ALGtbNJFKMn8",
  "key23": "2QgXaZNCsVkseXkrzQwB9ZhjaJBnY5rZvD1u48yvcmomk1zSEkLNvHwwU9QMSRcCyQjexMg87GErqT8B9Zymfhdu",
  "key24": "5vBtZwXgXdueYjSzsrRyrYg5FpBn3y6z7Cyg5BxYF6dBXvdkLSjc49ytg1ReokWtqBUZo6GizZvJzkqEBwiHNZiM",
  "key25": "26PutsbT4gktiR7CsQdPjNkvSqMGjWDmLhWZZQyjjmxsYUtbZ12C1znNmahwRsy1cF2GWDxESs7ShxquZP45WrGZ",
  "key26": "4WRDBhGmHQm1iD1cqwFUpYFK4DHYvwiojHTT2n3A2Zj4CR27Euoo6yZBSHKnkG97Pb7wZsZQAR6LHVKzuNanqum1",
  "key27": "2A1czEARR9vtoprPAihhuce6iCKHNcf3Xuw41zmUeKxDbZNRKpQz3BaaFMsJDMmBi6rwnxjPp5nD6xeqkUZURvir",
  "key28": "2z2dBmWFyeArk2UifCfx2Sjm9ZxFhgXGHvJ2JL7WHjpUfsojZQ4RPDFZMBNk3mky2mwVWi56WmmmhtmPRYYbfZhF",
  "key29": "BscugpJS2aMLi9KMMsZNgvyKWE4xut898VGj5sdbAnRshT4d8mDUEHQbUTDRf21MMcEUKbutZ5a3gsjNhGCWwmt",
  "key30": "rrETh2196X4KkejD8ugbvjEokQqC27BP7HeN1DBAbEpvtsj3SwJageo5mBiRzC8b5v4pvjM5QpSkRU2EnF4ifgM",
  "key31": "kEZoMiwneX55d5HYcscYfTihEEJcyfakW8eJAfUH6CWDcrxSv7apmcBoJzsHfnSxBQqneuePWKMn5aJhCBjdWoy",
  "key32": "24aXVhj8xm6hidv7kvRY35YDdMUdGBP6gvX2pnm5G2aBd1dCjDBqd5GvMUzSDsDJNTPScQXachRbSASkDdptLxVV",
  "key33": "4zsoDvbmwuoesQJiaK13JEb2DTQdSMUsZBwRziecwYHrEMJVPZKJ7yw79tRTywLSNuLAmLD1kJfz6H8knWUbCvJy",
  "key34": "8arWUNSCpDNGWUNp4nvLFGVDV9vH2Cvc3kvCUfj9ugdPRbSkoeNMDjxWCGXNABqsm3yh8ZQ8z7YrAFFLR7P5e1R",
  "key35": "2d3aeg3Hn8PpMYAyEgfFRuRh6oj9KgBNCxTngyuGvB1meoHDpTDg67qGVKd2u83RgaPNAgzJT3kYi7ue3eKkC7FA",
  "key36": "2mLhP1vXp3PYBJxX8UopdjrBnECnib9q816c2rELi9yhAMJ8jjoSvxabBsmrMvP3dHAMJ9XkrjYeVyXHyPqmzZtt",
  "key37": "5si7DGMNEqsRjqBTVFUef4ckKjCmGirvREJXAFb4rzenbCCJxvGn3fGr99VWog1DiWnt4sym8ADgCLfdjXviVpJP",
  "key38": "24S9efTJmcvcZgHEA8ovQnXC28eb7WGX1GskyFCJEiBEAHHrsUVR2PJLiDTNAuR1KSQZg9FnCRTeigeExR1hYS8C",
  "key39": "3PVohKTu9sY8r2S2wcss7oEzkLD2K7iZj7QQqu1sz7PF93GzTxqv2CdMdRoJVceCEv7in4YzwqWGkyaJiQD7sJhb",
  "key40": "5a7SEDsg6wDYhPSwmrZhWkppsLNGpNSwYmzEmEju7cmfSoEVvygLM3CXjcwnijdy2iPDFMA23jxv47gmD47f2sXv",
  "key41": "5b11CpwbR3MVZ4VwGsXonBqJxunmwxy7vYAPAxTqFWTLqrXiHPLrRLHtGzMqi4YEMPdxUstGo3pjgNm3rHDWEWyA",
  "key42": "2ruDxSBxM6C8CVEEBYyDYM7sjGS766rBhVmHgVomJMMmYsX1tXkTuaZpRPM3pRJ6DLiaZ656qFsoWKepxkpsGdoz",
  "key43": "3NiEm5pqEn3iXWdHcTtXyEfSZYg3qiH8WZJB47nhjSi9TGkzY2BRg2hJyH55WswR4x7SHzwr7PeWdtDr9aNZSmaH"
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
