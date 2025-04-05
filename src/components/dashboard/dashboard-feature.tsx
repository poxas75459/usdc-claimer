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
    "38DHiuiHHnN2fGEgvcfJnpw3auyeDBskNojdXVmZ3NU1NfhPAVVrqBoGBMSeuhpsxvDv1mJZjcLycTpHJ29kBJDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JHXWfcoyg4qNxYbU5sbHVSRSDoQBRLDfbFdJsudBjAZP2o5HYGjEpr82X8T5wmXw3uriQvEYRWBVe7LvqZBuY9y",
  "key1": "67aKo8zGkMCcsM4THL845xFTc9TJxGq3UUkQycRx2EordHdJpkAXELH448Lb8jzFbqdSrQ6MNbAn8z5BJjmZbh7t",
  "key2": "5K9FVPWBiLkxoF8Nbn78PRfkY39s3JYb237b17o3i7GzGSmaW63P6HWGXXkuQbZzWaeFaxPqXGpNJHyEJdH2PGac",
  "key3": "3ymED8xnFRu7MLnX2C45xCfbNgkQ22r9iKu2ykxkJLGfjJVYXqmzxQKYcCv7UuoKBiMBSJak3TygBTxHipvghaka",
  "key4": "3FpuveFyDbSHdTwwz3TRRbUDGfSrApJXu7MKBLmjuQtYohukNn641ASTKJ3Qsj3u8hW2KguDVdTEzCjEYJ4s3Rox",
  "key5": "3j3G819iDZDfCfcfzyp9rUPYVPQ7Wj3u9vsGMNdoX4uDCA4p5B9ukEVB7aPJ1eUdR9NCmrAGVZvbhBuwBsnTP4op",
  "key6": "emhiQL95iNefYbxFnDL6yTiLWcP1FWTsJDHn1gLQ46LfeohhtL5Ac7g3ic6Aecbj1vbbVMxwRWbct8re7AtKGxA",
  "key7": "5SjicEt9xwGHpcpmSQF1qw6qaUK6yRjAjGa21Vq6YbRa2vjzZAbgzrhQi4GUd82yCHEw9UVYmtcXNZtEHfHabege",
  "key8": "2G5SLbHh6zDrLjuiHFihqhWyKW4JcQy2tjGAb7au6s5ZsuTWFvJUizxtyGg7ccox1meRxLWAgXuZerfwRu61SXkR",
  "key9": "4Ex8FF51kDZ3qsVJU3YbZoFB1sUbmCmenZhrzFcfY8phRRe9mfG63wLwg2sgzDvo6chR23rSzMEbt9hUTf7MeqTy",
  "key10": "huESNRqU8ggLZvre9r8V8TCxs3UHK3L7BrEdrAnAcBuU2YzEpi1dpxf4yTqSbSpQHw2ZjB1HwSsWG7unMQiJJRk",
  "key11": "4FJ87NyqQ8CUtDFDWbYdepFnb8KvXMXLaZV5ukGGuTxfX4zXqJorRrNiydX9yRsekZHomEoy8iCe3GvDzqqtGN1Z",
  "key12": "3Rjyb656XigDhzDHkjQ23r3CLnoYA4xcMnGWFQ1Uab9e8mxcm7FNbRkfMnU8oEKyqU9Xh6riuorsvpQ6hpHxZNS8",
  "key13": "5ohBicWfbqt9cN9PugtVWNHP78C44nrmpm4nayx6Fwx4huMqZVxCGQSCpg43FF3ZjDR9txC7G4EmpJXAocjNeuxa",
  "key14": "5VvZVxcKDK4aKxWQV3ojAfeqBuCUqb4SyjhPkSRxfqdK2sPW8A5KcQyjaZns4vQewgmD94eAbMKeRQwzWA5XpZeN",
  "key15": "26vCKj8kMZmUqZYP3hjhSejd5jG32mC3NFyS9vBmtHiY6HgHnXgNWtHRgorZ2MeWieUqi2fCk7UBFW4BtcNoH4AZ",
  "key16": "z2NJtcTNpoCa77CAdoKL1BR4ydPhBcmBhu5gVChaqFjEmz6uBxhFgrBXCnZdMERbp4FQ1AaDZ9yjNqHkWtmUC8M",
  "key17": "3xS85Ay5FjmvgZLqZHmJhPSNF4qiBidXNHykoGw1r3KEai5pu5RQ41ErsF2aMSKXZtUqJwUPJybSSBeDhGFCFtGU",
  "key18": "5QnmGTQywYDRFyy4wv3ZyfF4QTpc6BmfxFeAHBFwTuRvbeow8rRFq2PV36Wbw9ycwoYh8nSi2eZVDkuG67JnHTtq",
  "key19": "5gZFitMNw5iP2xf1BwwVQNtJekmEYvFAkop9aKzmNyhCwoB8L2pfHcYiXjMczgZthwS2WnGjxE9JPZBE91QtHLUn",
  "key20": "26Dx8eP8oBPMz3VFUDRaGZ9wW2RAzweTRhYCu1zr6BQ7auxPrv4G5Ke78jM5MG4cqJ4EK9fTTVtJ7MDqneuGFevp",
  "key21": "5gmURP5KAks8i1ravk8Fnsx6QbiVqwNZaUfbME86cpTKtyviaCksdnXgRRQnYknoHAHPabPMGgo4tr1ZLApbQ6iw",
  "key22": "42RXN3yTEqgz7nKuygursEM7Agm6eNUWuqgb1T1RuRYtdjhgRJnZ3YaDzd1UJagGxkQQC38fosjo9FwS3xBtPQCN",
  "key23": "kir5PpRFedMErtBdAprWyfzkW21JbGJDaiaSXdsmezgyEMsG5XNXVmv4WgnxgxMbGkp1snW49wBc9zcFLq4yi8n",
  "key24": "5jfFyMVFU4UP4TGDo3AomSYk6ST3LtcQoASCnnQ3CnfipjMhrG6WbRwD5PdE2vXfrzHcfJxUrd7pu6UnVBiUKPUs",
  "key25": "4zzyVcAhuC3vz4QiepcbXVt4WENDXv1tJz9wRViCb3NB58jU6gLFseZy8tJrfzUMEVkpMKDf5gYXsMzCPz699eKX",
  "key26": "5LpFLsWYYga8qs5e31i6F5mbfHaQB533REqH4i1sH9JfvvdsNXbE6NmCUWm5frezuWDvcWtY4iKAHjWtYp9Y4JQ6",
  "key27": "5w6ziptZ6f2Txojh1AZi7qw1PzoQoSMTDznq1WYQzX8XLVzxwtVx4xPgeLAk2Vm4LBHZj2D3o6XMWK3oCTAygiJN",
  "key28": "4ypncxirpFjNvL1tqzjs2wdBdHgvsqidaFsXQpLrLYcBZaWewW1xCNRjvqzasz6mcwMuAqU5CA2KuNAkh7BWmus2",
  "key29": "85XGTGZCTRyJY5gZhsaqze8N1chhaym7poMe8aHc8ViyGYWWtR7YjbopDGDikxqN78V6mk8LEFcEUQYDr6z9Gt5",
  "key30": "54ecLPT2kwkBXrGbixEViEUgtHh3AuPhjEGQveT2zdrR6Du4N48SDNzKp7iAmdkEuvicPBnnj5BLSo3yoYWNrKL3",
  "key31": "5KwPiDDurbEe1DbKNQrzcyFF6hJknUp69ca26qKuBCWLaTuByMffknnJGYs94JFu5bCfXBcrzxANVgLvs86Zj3n8",
  "key32": "5EcJTgr86bmZDQKdJL9kfWwN6EXhRHmVuDRVtfBsixARkq3dj1zzFocJRLg36GwtTsZ8UZoGfLUs1ZmQ5b2GfTwV",
  "key33": "3BseSEgDJvnSHuyzG6crhhBZZ7iLgN2TXAgFryJJnMrKRJ5jeQk7FrCWtmGd6wwsWhvEP2RUiz9mWBdAqvAaFcKv",
  "key34": "4g6QjEsW5TzVYmhzGv3hDv3hdBWiTxG6Y5AGdGkVea41dCp5QQyZYADfi1zHQdetULJoaJF9DrYrzuxL888Me4CL",
  "key35": "48rpX5bWLn4VNBWr1paZfjuMUKU7iQSLaQvvtwoTqdL6b4Nnf6CQ3svqGbkKhR2ZHxsCHtLrTzBQBzz54WJ9A65t",
  "key36": "qPfMC3SeY9uddmLdbsn2NvxRdqYo9EjtJUFEkWpMZ7mXtbTX5fczU3bFK1NQKtDBVDQTpoiz6iMta1heCd1zsug",
  "key37": "3zDtLKHPdbgBbo8KJw4BoW842iurPvajW7ZFpzRUMJYguEz2DqGdFrf5T1j438Ey8hkyMMfcgzdJyYgofk3QHmCZ",
  "key38": "LMTSPX1QQTEBkKSyyk31g1UCsJQcf4eqTjSgmHPJvwpR4Ma3Ung4qR3bk1MVjk9w5bsJPi6dU8JYs2zc68RLssV",
  "key39": "4cXETYRZhKazB8XUqaJe8Q8vt9wXhKmoNZUVtPeevJzAWnWUMhJh3FnK94oNGErSHWBiVpGHJie9CRqcvuVpiatV",
  "key40": "2Fm266ixNMRu1fEBSSA6S4ZbWofP9TcKK4KNh5zRWN2Qj2bmYKvrMRuJ9ArXyfdx1qxpQr8EhM8baDWniUh6vTt6",
  "key41": "4Wr5svQUqtjAPoW5j2wyaRGQPA8GJa1X7iGM2Aw11h5YGn9w68mZnn64q4hjaX8g7RHzXg2qr36jNUvVaeEe2cc9",
  "key42": "2LS7CXtdK5fzWfUrpoxFXwBvYARuZt3aVsLFaW4z4NrGSG3vVc9mfavTtGm2XstAATW1LNVwuZ4c7yqXw24kTmRL",
  "key43": "nr6gGqXmy7cccdcPU2FwiV8Tc8Vzb6pGD5wWUnehMBoLzJKA2BJTTf7tS9kyJs7r2s4MBF2csuXQ8kS4kjqXCyY",
  "key44": "XxZguYrfMMiwcMjzmN1Mh1zHX9fm3azgbZ6jpxyAchtYyEGz2VZSY7QLDJuPwhPBMu6K3JErEEH6aUE1j6uuRjt",
  "key45": "4PR1p1zGjkd6WvBBLr1LgyMYVpnY2p2Vi79mqsW1QukTk6xDUpd5xw3KR6uwdrZkhq2cMLF745RujfBxsxbR7u1X",
  "key46": "SLD9SzWTY3FCKTzA2EYAXEFm4thBJGHeMEA5hedYddsi4iU6APZRGjr89s2YZQkmwzcBmvFLx9b645kHztNiA6v",
  "key47": "34YnDMwDTsGwH4LdChVkocCN9vTTdYsp73XhMQYdAPbuRmVPGLKUvGgatt9pGHqd1mEXeGoTgQ7yfJzSHHzX2evQ",
  "key48": "31qvYYwRQMkfBKwiARUYzEeV7yLAwX5xGrMPYanwV8ybtfQN959iwRsZmEUYR5pvt42gUeXNNVzqJ6KjHVTaVReC"
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
