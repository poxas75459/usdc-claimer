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
    "7PXxuyxDs62ivQFcMw2C7Gxq8vVsAyvf6PiTwKY7pDC7JAokC4youWQKzFcQ8fQj7MP1p16baVyWt9MvjRASbKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pq8ETCvZHvsunGAmJpJyyVtrL36Rtkwbv4iv4sbKEhzeDPyLMFpCw3m68SyvhjRJsEMzmkxXKnELLaBZwtjPHPV",
  "key1": "3K6Xqpgjhp8PdchQmx8LXwRg8bjRFm7tKFXNAPLzCNYMhQ3m8z1Z495jt9M4XyvBmnYa4JTMUDvCApfL1CGbgnAe",
  "key2": "5WQ4uLdRsZuBvYLKFv9Yg7DAXJKecPyZvghr5hUbiQ2KMjNnv5WEK4odBJBEJudBqAcaAGhKW6cyhDxTKztkCDRS",
  "key3": "41Tf4i3gHnQ5KCQT5a5AkZzY55nF32XHbpGZ2sEQEWxijFrA8ysQoMEUdwc2PqtH2tSHAJPtVw8MdVpt9Pc3D7zD",
  "key4": "DiT44yb7EmAomjZp1xoPoGHWq2UhTKFoDYXd1CMV6nBQ2KYBYMT2kVQvXRa7zgmRFChfLjiYjvPy123Z6wsSZNY",
  "key5": "4sour5TytyeRX1un9xMcccsD74FmNAH8W8ATZHenFFqbHdYmZyTBBcVsdoJzDzMXu6Bpxdj2Md1xNHNMrwy2SKAQ",
  "key6": "2GEBp5Y3ZHjujYdM9VTean5GPcPx4xNh7UAtKz2NSMiiGHDigTr1Z4mijH5pZuCPxZD2jh3GdE4jgLB3jcNnapyn",
  "key7": "zocTZh91qstG6K7xtYow3xn1NzsuPLehEq6d34y5cVdQmBMqV7eDcNvmWvLJ21o4btSjqLeVChVWTN5JvnFtS3L",
  "key8": "5B2YoPpNNe2wMnaNWGPShSjaT6WVnRu3rXB1smtpGMnyNJP98KDAzecPFyQeZYCnm52YBX3snoVqmF91VmifBFuq",
  "key9": "33hw8FXc6EiHLvipdgpXj6BDxidnZYfQHLU49u6wpZdYQjEtQSKbPwZyfcJLWgzT6LFxw6WrUHxB1WAWjrMGMLQ5",
  "key10": "2JiM8DPtyjt6WZhGFKMCFhoGr8L9UAjFJmjDVQGpsszi5s1zPmm75EGBdrTUSCBNSfy9vUMYzFMs7E4vuYei8igs",
  "key11": "yRtEcMYXkgY7twXiQQbELGBxN4cTJBAX5SDJyKXm5PgBaFKc5pesqpqXodjzw7s3CzMPD8igEhZ8p8TAtxkhZCh",
  "key12": "3wPCg1d8ZfzW9CvwGBpS5NJ4hLBpA6CQuDbstqWvRbFYGUHHA1wWuyZqBa524FfzENN7Ngodnu4m1tPMiHyphdvN",
  "key13": "3bVfZs9ZvQPLY2MSFY33nhh3y1sm8XYe1K3sQhHvaWMmsihkJQe2hnLZ4ZiqXiaPcu8iAqU9mTGjQe3EQpXFjSia",
  "key14": "5BDud2QqsZZEprzKbQsyzBFNSKJtC13EbaT4oMN8j9wL4Rqy1FMG93y7za7aTC11hS2AGCJeGJGU6hEuBcz6WxjZ",
  "key15": "5Jv8kfYpNHQ16J6p7qdCTTV8cvi8JkgdruFsxqkQzxhccVy12AeR7BTkzArHgfLLM8nN9nXwi9Nj3uKwdV15tPFN",
  "key16": "5JZUD3sXu8j44t39GnMpgqwEbLLeHXP5mGdZ9UDYfJ8ks2GgL5nuxjuPjfDWkn2aPRBfpBKLCXCdjnM2bZHke8XH",
  "key17": "jhGtkWc3r6RuBtf3rFLmWKa1XM2eJPx99mzbko2jtQr3k9L4LUY7YKWKaoXwyBGinrNhxw1e2PTvMC225iBzHoo",
  "key18": "3UhepsgSRQb3pcpK22gsKwMJ5bui4WT68ArUoJjZSg8gfRrMdGtC5xGW3XoHiajVqzWujZ5qUUuvtcV56qCd18c7",
  "key19": "gCLKz3hEXHxDJy9G21HoNEVn8jpin6Aoo7z39MmBQ3QE9E86NnhQXuAQ6VnphFyi7BmsNJMRagKU7RcmaqAssnJ",
  "key20": "37T5GsXPHEZpugxvHY3vXFtorTApcWvocJ1Y4D8ei6tGC5YPv7MimwLNPypaCQ7oJnpU5VuydTSTyjyXfB8x3Zpm",
  "key21": "3GeCEaMRcih6f8uewN1wHjj58vUyCvVHwk6gartpZy3vCv4P82sE4ZYfsuv6ov7JjpajHhKZUcrbZDMCzfSJ2rpA",
  "key22": "PsAMFj2vrTGASU3sepAwMjwVnt1DF51mQoiqS8ozhSUabwz9jtSThJv1hJKLK2cVDonkSuvQUrTqQp4mCEYmQPh",
  "key23": "56T65HfG61fQvqpjj8Rz5PpAoKHzi346mjknbuiBdFuNCcZwmdnkNLkKLxKeKNCNjNA6eyXSKy9PeHzPgNR5XM2h",
  "key24": "43XRcqr5qeCKoHZ7yrV8neeoa84qKZ8KmsjSgaX9Xwe5mxJyxRUifDA4skTQJ7sgp8iTA43XRe8CesaV9kForzaX",
  "key25": "cV6fLpfr8tc9C4LxDQBzqSXANjyCwBDRUPMpJMaYm7S7RKX22D7STiY1xSu5aDGodx3cLMmPWr3y42j2LNZoZAm",
  "key26": "45DMAo3NFtk56VZNrSiLuCftZzzgn7dVpYBAcmjruevtS6R1MdhWEJxrGhudsXD7V9L6n4zhV7hcs7e3TrKcgwYm",
  "key27": "5wotBk51vf7a2nrbwDJC9LgZcsdbmjyWUEcLAXo1A8NFhn1RjZTAMPcEAKYjJRqPuez3nHjV5vvj8mt3sRUAT8hY",
  "key28": "25qdbGfnX8yHTff7TyqwBWdYZAabKpjvBXFmDEgGHBpbxsyTiiDMuCZ18gHmAQTE2HiNbJDeKALSCxtWA9dcJekS",
  "key29": "357jK4fG7SQTn2PfVPBYT4kLGfXGHPfn6BeYEQrpJdcs6bnCVEvuR6AyTtdMVZoFmAUxDo1oo38PmYVnsyM2cb4X",
  "key30": "42Ahh4R6dtdbE3XndLpR9HJkguKF1Pfi4Q4Smhid1AUS41mxFZTKiG9PTBihbU2NHaqxVZCuQ82wCNfPqkHQixN9",
  "key31": "k3wGDu1K2t8sDNL1JACEbFMq4vyf1d8dAgcrfBPe3RXS7VfveA8EwaoevWAWWzggsTNZ7aoUJXNap1eJ6igppLV",
  "key32": "dFw5oi9ZgUakPVXRVNctCdEN4dfTnpnRohjiPF378XddKaVtzUhg9jXuDj6GH1Sca6qugb2GgLyGBhWBDqUFBJE",
  "key33": "nnwVUWWUKDJH8zVk6DPRvTKd6iAGxb71tfXuynvC5UgdHDH1SzQR6pudsuQT92NxcZX4Mnhke2me7rzhDgy7R1T",
  "key34": "4NS9PrPtyb7nuJq2VfnZiPYuie2yXc7dwvhcYnjmLu3yKfJMiEY83gPe55LQeuzGNuoa9wrGCiVbc4EBRZGV6yyQ",
  "key35": "5xGG7yRdRLmzX3ddYtwbVtmKeGJKVbiStacaSdoEzGVz5YDXhnDae54Wv4JcSaef4prBP7rL1AoYruKTXAFJCdQN",
  "key36": "3P9TNwLoZarXruKfNNixJtPRn8WcwQpgzf6V9Cs8XQTg5gh2uquUai5PZtSmS58GytzzmtikKWN1nNu4SDqPuuWt",
  "key37": "2i9BmteGR9G33rG2ojaxpg7YsMY7unSo5Pj9YUa7myvnfWx1UicYHF18vTgrDFPNyn2WWK8xSb4h3o1NiCBjyfdY",
  "key38": "3smaVQoAGaUKzooFdADTSfqPqRJydbU6BDoD91YSsMrwRnLvHWCCoZLrqZ1Y44j8X8t1vjUoGpfALNig7g8FDg2u",
  "key39": "SQBXq3L5JAiARtN68pWVm1Ly2Rw3AMg2G52EtxdHWMdoYo7yLJhUiMepjY6rmua4szEGwnrFjEKbfvA6utTVacH",
  "key40": "5ZCRv6AcGyJF8taNmjakqUZqiDt8fqAftoJznNcymg53CL7N9yUyc98pZGjoFK2oYvn24zmCdjhf6BvJJ5tfcXHr",
  "key41": "5FMZZYKZsXacY31AdRQXBxs1zK3QLfJB9bktXgQjjFPHz1HMZpARP2af2JvjsKv9hBxQux5Vz3frdW9JFtWnp3cR",
  "key42": "KpY1KvCwcnT9vj8PZFsiY49zFVk19xDtrugfGg6whHsbpCoN9ZAdhKLLmgZ1gT24NktpH5VCvRaShLayGZFmuV6"
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
