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
    "5FjR2JY9x4nzwteGW9Ci8v8RaKoS2SmRbxdkiUyYR9aBr7gexDUqovDG7A49XuGFTCgGJezb4914jhjfh8ufKgBq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L6yMff7QUAVa9ncLU1rF6hxJ57NwAf1VaiRbQPBoRtm7Z15S5XadS3W852pGqQWc6zUUf1Un6baQXXQ4TfCy3N3",
  "key1": "4wxgYch1U3efrom49EvpkVd4i4ohSSQMR2oh4SMh5vGQU1WpMY8cYquqnqLnxmSHP9tkhLQdnfP91qU48orzJ61b",
  "key2": "nX1n97LoMJ6TWy42TbbvyU4YDj2nGAZTJGwv9LSQhWpd9grzLuadhwp4nqSYNXXxJ2JoqwvjU2kggSUiXrBJ3GH",
  "key3": "23z245xKtNCkcznBFLd5P3pXTsVqZBNtHg7qVSRpBw7rs6Dq5z4uLUiB5cGSf4BzMav18TrvFWKGdy1JiXLF4Nuu",
  "key4": "3z8SZrUfUKUCCuTodR5gq34DocCTbwEXW49ccRqEgeYcDfMDGAq9nvdfz9EYo7CTpM7gKL4hTvjZ83pV7jcfx4zT",
  "key5": "2boCtqDwkgrbd8p5SotoG6kNEFNhjWeAW55KW8qrZbdsW92styCTt7y757YatKJ1hVAUCoGEw3g2QoKSW5PMZzN4",
  "key6": "4bHgWseGEkLYL3sEzLgjKkoFd8bARsuv9KGsLAsPiMP3amKWncdL9oTkdgCVDxpx8eQG7Mne8Mo9HyJW9ALAPEHs",
  "key7": "piufinJA1JeEWor6nnxGFDoiBe1n7LLf7FS9Kehvwp2aur3oFAUV6zvEfR4kZDoQu6C1ZhzgXnJmaXiXdz8ivKa",
  "key8": "4sht7gB1WrCepV1xjKns63Bn5AMgBGqd3ymtLr7wgDhXb3SA8Ka1QcivvednNmrVT2fFHA3qRH56rXtRzxMtx6Wc",
  "key9": "2YHVJDFtx7iu4moXDfYTW7PRFm6QvQLNzry7eDr1Tk9LyRHUQkyeP44fR4Y3v2JjZptBTXW6xVaJqBPzmHDyEg5A",
  "key10": "2AnxiW8BAw2THGQ2yhmk39dJwfX8Sz79EqZxS9ESt76XwEWmtizw66oPYg3hG331xjvbB9zRdsHZxjkTFELSoVLx",
  "key11": "2iPdGKZCuKLEn91Tvq2qqHjKqK3GAD1uN42bpY3GVhSHNYzaZDpn39AXd5dZ89jg8rrZcgaN2KC2w82J9UPtHLkv",
  "key12": "22JShprrc3UXUvLASWiXZeMZAHNHEUzPyvDfpDo2U7Dk9JhLoHJP797FmFVHW1weDrcMqjBdLi2iPYFgo5Tjgmt2",
  "key13": "3Q2dxiT9vHNgNg5TonMwy5xr5ANvHYKqxBBNfBLzs3rR2cE3u4CEVAHXiuJFLH7KgFsvNCF8jeruEyUsEpUcTuCr",
  "key14": "2pfzLvDRqPZHJ8raFZMxYTAJ3ZrJJSkDntxmYw8e4XSSrijvVBxYjs5guinXQRZPntuVUEuADJoG2JhDTpNABLRX",
  "key15": "2HKMAwgAgWgaVkYoaDugh35ZpoZqzqPPHuk1a6coQKbpDPVN8xz3qVqNcAVXNwi9TfWX9jQirgboTisi9FpjvBrx",
  "key16": "2UCdmDBJyakDVmpb8oPXZo2YrwB479s8xtJsqQ4d3bZ5eo3SDgteszsXsoatqNu6M7STTJq2Sw7PJWUP9z7Wyo92",
  "key17": "66pEcpwXVUsj4xr1bftHJAVt5tNaFszuBceMDTmRA9U8SjvipUWW42mRwdjYe1saS9yN45PTZaLTxPXj5aJgWKAH",
  "key18": "5TeybPdS5mvnBb6w5sUSWJXaPCVDj5EGiaWD1qXZHAfrnaRQNDB6ZW5x9p1uaNnxKuE1CWDebfF1RNtKoBzdRXk",
  "key19": "3j3A9vy3c9r4u3jCZkRwvoF6kJdR6P2FsZ5WsDh7SsRLgBi6qaDyVBAKeLubYKgpUtrk5923y22DhKNJsWP5evJc",
  "key20": "MmdeDSTg2h4cQZ5kPsPyPgatWre4GDogJwybPYj5mCaEqycAyekAFutTUn6TZPKB3bG7vHMNfwJMjCP1LJHXUdq",
  "key21": "4XkETAsepkhWNYagsQad22yV4y3yLqKWL2stodkmUKf3U9MDvYaP6J3G93ov4GWcUYnBTVWTjFSBUuV66MZTwDMn",
  "key22": "3S4gncSVJXBBhURdZbnWKBwxugc4QjNiCVNnpXiE9MBxTBtHr5dfLs8jBdoLGJ3xtMELbA87PvwVT1Ez4FM1JMg2",
  "key23": "3BKKcy8GuHJHXqJ6ipR2id9RDEUxSbnMyk2AfzaYWKtQzS19UtfUxZzp16ECydi94MCs9RQEHGJGnEiz3k7vJJmQ",
  "key24": "5yaqPpfCpLx5ZdPjsC5KWVvA8G1Fqud1EqVZhGaqmki5Fn1pt2ZJw2rgjr22iVQVerCeSuFxt7thcxGdY3857U5m",
  "key25": "4dRDCw3CWP6fvwdML9DJtBw9Gn3r2wU4KEu2zpKeXeUdqgfLk4s5agjMZsz9uMdTg2Zwy5nBetjSjo52nJgk9PD9",
  "key26": "43vgwUWB1CjbG6ewj5Wec6qt2dAv72sd2gSyssekcKf4RNw4NTpKN63Ret5SxxA3trLFaYCzsXibGYWRBtubYxnH",
  "key27": "23Xh1he1v3JnnkUQfgwtKnaGxWoKp3a84n6xcVwmpWnRUhzZGUU4xCD4N1BHBMqKYQS2tqkZLXTrwfM9SswZKKKZ",
  "key28": "2Cz6Ui6Qc3vWJG6rvhMtLhmrts9HTNSKeC28xf8Yn3yvNCBESq3SsouBgGCBREKxGgiXKj6vHrpoZvn3SQ8AdP2R",
  "key29": "3Pq1vD2u8pdYy8SnFywN4p9Eow2UwJ4LycmpdaYGnwCiwiaCFGGG5H6PZRSpw5ersLi2VWWoeK6nf4SMdKqFKHtK",
  "key30": "2pH4ejgD2WFZ8KsaMzfkaZrDVw1BHaRru7gCJtXYaqA7b3nr1LAWnYVn5v8fXquPjTzgYFk5nXc6XXvvsbfhYoeN",
  "key31": "3YRFg78cgQWxKTGsSifYKnNZhGev3ReBsyCpW7Y63AgYwC6KB4RY8WSFrjSbXJAX7VZymxpHGBjuRtpX2mNs4HkK",
  "key32": "47ymsY4QDQkdU8pFPKJXJeCBBFkbnzEWzmGni5Ypfv1AW7qjkwouJgqkitcBbfhSMYLRB8g4GCZUmHA5CYiXHzW7",
  "key33": "33DDHc3wbgSW9ioNZzgnsDdT94HzN2C2MNs9FqwdUTcFfi2Ki1FJqVukzpP7svg9iLdaws1T76kukLLYEyWkwYim",
  "key34": "41FYarvVMJR4GYTopyWU8QCGBM2grWRxDjc5Ka3aYUeunytu21yDMUFuTixTmiFfFhrZ33AQTUY7yNJmzBukctth",
  "key35": "5nZNJi6sNiRbQC5qdDWnWXAs2crmb43MsrFYvkJyUKJVmThdJhDBdRq4zjov5c9nNJBGPseb62kNbu8w7wSiCHrG",
  "key36": "zb79ednawdAyMhn8WkDgtyC8LJksjimvATia1abDyr2eM2wQZntgNFidGH2tYJo4M54pV8xvRqW1TN9xwkd2WyD",
  "key37": "sz37Z92tkrH7oPnCoWvVAjePvPQuipT3wjnw3nHnjRfYNC1BDgJ53GZsk9SnHnjANom2ybTVe938cfcBr5NEo4N",
  "key38": "5jsf3SQjrXNbcG8Suj7YwE5JPMoGarprkoLPqotwLmuU6reRkuZQ7oDd8vMqgCyXi5qyoGWxNDx7TjGpusQvvH6r",
  "key39": "3Ta39TrWqLd55Er3PuL3LZd71YfFMamR8mUqh3uoH521b5W12z1GiS3YvrDWnQkhwye6VNCe7Dv8ZqvoGfM8Lwke",
  "key40": "5wvfmBrg4rrDPFao9fnEFuMJAy6zkUcd7ZWN99Wv7pKM9rNGBCBqfke3icyX6B6gbmK2ZoWKMKEMbnjJXFkoZZ7s",
  "key41": "2cPYbUr3jPvEKcZz9Qo5aaGQsheZq3UXrS4JBuZB6xPBd4YNnLYeVsNyKQPaka3Zjxz9AHFa7LQaAjJuwRhffsto",
  "key42": "WdFWNBjApRyRwVPi12LY6U8JxTgwbr2xtHKB99Yq5SaSbRFZ4YioYPxFHbR2ZWBRUghUznP58YAYXC5YFumSvGY",
  "key43": "3gdWgTR5Z2rqwo5ECAYzcyFfoCgZoXGcfrGTqtDtgsHJbxu83q5ozP1Pjo1HsdtrqttuK3qfAaXARJrXKisbH61D",
  "key44": "y3zzVkcuZkFA5ri9JQdK4ZeCYBaNtNLDtwYStgB4iSSjjduu2XXTrjewwCUSRN8rRDZn5obwhv5D2nYqn8BLv8F",
  "key45": "GcF8FdEfKW7pdh6bbxHnPVdbnNSLifbnCUqyFD3AcYGJs8ACQ6hpbChr2D7UaVs5Fgh17kbeKF1vx35twgSG4v1",
  "key46": "43WwJF2AEV4V78u3rp9JAP9SZp5QiQEKArGRciMzoy1ouas4LZzEmUH4c39hdxa3YYjrEDBuoRiVvTcP5XxwCHFq",
  "key47": "2cYCHn72nSTo7HDG4ThsHznyi5CQnu36LRQwtTWA8rb7Zkq4pogPMuEvQTfENAJqFoGGhAxrtJUmKopTPkNTW7y"
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
