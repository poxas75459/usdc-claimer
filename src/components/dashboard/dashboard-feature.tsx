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
    "4NZB53jK23edz1igsTHgVKr1fh2vn21qeexUt7JM17a7tX5URDNJMUBHhw14DzdVUPgehQLWLfuDYsEe34wTczfJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QokME75kLJcuXXW5Av53qVzVnydMT4eTmLv523PrZicSGeekScBYaeGEDegV6zTSmcLACAFFWyKkVY7F2k9JRf5",
  "key1": "3DD9PoiPLi29CMmNcNbce9pJVeHPoXaRVcbY7XAbx4gyzBiCK26LdFpKwycG5cC6Lz9q9v4NW1AP6vpsM6DpyVoB",
  "key2": "3gRBrPoCrGBC1QAq3F9gvxkFYbC7gEdthG2pPuHukT3J2tCt7wLqQh9LeJXobjHYdvqaRfH3LfiBoTsbJ6HXz74E",
  "key3": "3je6DD2Su9MKjhModFGKHQHTz1sYmbju37DuFJda5SsBshjgXDiZbCJVEwAa3QXuM7yCvgXeoVfRwyAsyfJybGtR",
  "key4": "5Z6mSzb5YdyWF4KzWB7dRijgmmUm4V95VfFXr5VcqrwpC5iVbXqA9RA5cEm6NfiDAfXwUJzDcqPMrLtUkdi1N7Eh",
  "key5": "4Cww97TjFw1zM88sR7LybKhCYHhWnqC458aHsHXBCNeyXzDnN5t2QsazaDJ6LLpGuJ2qpUmE2XXjEDYfXxLbxFad",
  "key6": "i4a4v4R52q4Wttq4qK4apFDhrZVKkspti3gi89BykDrBLSbYhquXZN9oMdHiZ3Ba2GEzEiwx3Ci4G7jVGwf5hfp",
  "key7": "3fweP2S9kiGXrUVsKzHfiuU4RVvj7UmngwxEPkRdFDoFa7AUMwpWvZC2eEEV8baf6YnCbScNfvkbUsGj1jxvgcCD",
  "key8": "46q1C4LR2FXmE3WWMhqR4s7LR6skhb9zRDgkCfw5AgFwimb3BTW8mVuHFUerfLCq7dWKb8vaTUaSe5fXnFEa43cR",
  "key9": "5tmf1HmjTgeZyQZWRBCwRZHZGEH5mD49wPwJTKVsmCPhJYdnfNEUsFWgPV2bZkCcmqstxbGRqiGxbdfEKCGHM7Cd",
  "key10": "4W2ht3pEW3WYmLFmYFEGR5zVXnDokPowUfHhbiQ8yjyVRCMfAKJEnSTe3QwuhxdzWncnhJfsYLjvcKqYcftwMYtZ",
  "key11": "345v9JRnZiE1dbVFjxrKsgkwKunk5PVAUQgDEEyKdqEthJkog38MKC2fJ7yUHsKhYMmgaX2fKCSD5d61JDH3stfy",
  "key12": "44A7jBkznUwZeUZFyQF3tjY3bxRJieguWQ2A4TjvKLMbcVhyQDnDo9wRt2HzktTZBMPVNwHFz5FWNSjFYYZ8dnm8",
  "key13": "5yRJkoEk4wTdKJVmFaCaEmNoBwFsZQUeeSWtt7tZkFWpuUWiUPND6rYzpSjXgKhcq1yjLNf2GEWu91HQXM1yNJ7e",
  "key14": "25C48qzdzWpTT8yT21zra2Fhgh8hXd6QLddQz5BWyruhY7itrcgui2QxMruJ3wzZ3Cjva2buZABfRDYUGXukpsyr",
  "key15": "3jmb2kwbaVmTNKpDYjSm2JnWygaiS3J1LNVVZbfRN2uhzzbNsnY6sZ8m9JR3ov26ymewDPtUnjVT9FdUynG4rtDP",
  "key16": "5YkkA4eVVawzLk4F3Tho7JcTaFszbNwfLUwoovuRPyMbbERqBQfzNrvV4vbwGvamA5ih7uB3Xm3XUseACr9idfyx",
  "key17": "3covkb9QZvg6eRMey3TbePTXnVw8eTiwQbrAUgVkP4hA57ryzYTHFfi2BxRJ6Ch7daT2tBePyivS5XDHmnXNWhW1",
  "key18": "2sjngXaFN4FyJKq4QztiVfuuRbqRPKCJbrpKy9nqKcjGRsX7tTuWjtf9BvPqNuYa5fiiqeNQpkjswTxpbHrC9siM",
  "key19": "6ybygdjxxgaLhobM3Bqdbu3TRZdVQbu4UDmmpu3T7cB19viLDPQQha5BuUpz9uNsdNQZ2YRxLBYZumhCzxPw4GQ",
  "key20": "2ppRfZr5QFVoavt6YDPSvn67AANvAEsKwpE6mogegTkprDKJVTtBYXeYZSzpesSSfERqPeCGajSnTitDWfsPrpfL",
  "key21": "5ajBaJNyr28ZEeF3YzNNHLkDxWpL59gjEtQwUoSwTbhD848Rc6HgHqxq6X6SXK47DN9SQPPL2btqZKibYSysf2FF",
  "key22": "2fcR7sfkYJHdf4FcvzpQQjXU4szvxhdQLPrEXJ7sWT6t7HVxwXmvzpU8hU9CZXK8SwsAM49BDDSKCGCataNa4NXv",
  "key23": "2ZZFe1CNXe8z57Cao3XAtbSE1v7tTvRTZwoZBbvqXqALNPNMbyCWFwnwRhs8NKmPZJ8G7aifAdFytRzGor1gpkpz",
  "key24": "3f6Mkr7enSN7qDTqu6EfG8Scg1iFnnKuJRqRnq4SDNCede4AusLZk8cAQY9XLj8c57WVFkaGrnCwRBc2vBFqYQvj",
  "key25": "5WwywvsqZTJzKBFSQzd946YhjkuQw2xKxeYGELfytDD6X5zwHBscqSxSEXWvPmk5dEFV8yYFXragKgKXUCswvrs7",
  "key26": "2PVbF3fu1zqRVE5m2vvCQYgjoMM2bFzMz6KwMBWMBFeK21EGw8AMrtbJghNVUJ5afGJxFcJxBvgYbqGJDoR1KHAc",
  "key27": "2Pt2cGnjHz2CWvXRvKwqsgsCJeerFawBRV3UPA9dTVt4YxRAUMoHGZdg4RofuqNAVRr1A62RpAyuFRPmQq59wK77",
  "key28": "5EiwTzMXCh5FriRVoSGJBPYA6inVU9nrC9WMyuY8Ta5EMnhGvEkNZLhwebpdFmsQ3eBpjymK4iyfNhAvcE246aJS",
  "key29": "2TVP2gSG6u7aFe69qtwdJvNQsiJNCgCJJAMAjGjfSMJsnmrF89KenRDFdqMrwyoXBYJbpcpfWj6E6yoNHxPBaasb",
  "key30": "3WDGhbH6itEYvgAjH9oP6fDAsLRqLLgnd3ThXbB2UxHiAY8TYkgsgDQWeYY3wHzCgd2HUATZXAA6wPHRRYLBiaR1",
  "key31": "tWYVwbf6y3J9QCQ1rnLRMuK8JXhWg8Hzht3mKFHWyYi5AzSzQEfv242CG68vhpKekgbM2N7nyt7bjyVyJ3nrMNc",
  "key32": "ohtAXTMjWJ8hjKJGJTzqVeAVVsr31HyrEUSVGmXmdFBBgcfpBb54oLSE8PBiPchH6DhrzaHQNuwYGX8vdAjrzpL",
  "key33": "4xXKbk8mNKCqv8CpzVuTctLrVcZojNpnRL98dWBee6K6XmFyh9iioqY55EvPpYa6KP2N2cPNxQcQ8p2AUj3iwqVY",
  "key34": "2fs2eLzax8c8TP4ecf3CCJ43T6UnzTUPpd3uJQr5EiKysTRd9odsaLRZUHn2RAXH27uDqcDNkowbuaAtaWWcNvFf",
  "key35": "3rgJq7XvTc9LPCQU8WrHRbDXRtGLgxGsosvu6a4ekv9xwVgGFFUosxdtttLrNtHwL9njze3mwGRcY3eHemcpT2qs",
  "key36": "4z3AwTkcTK1AGdBAjSpkMMD36getNbrWuY2yZTknocjuATwX9u77YpX7jrN4xQxKpjXbBahLLrW79Ggk29NRAEXS",
  "key37": "2cZPqDQLoEjHCkAzb1hNL3rQQWxoqD9LRkTG27BHsBos4CTjUDfqMHVP7qVzxzG9ohYDovF4iaerKN2JfBPMaZbm"
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
