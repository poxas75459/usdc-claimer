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
    "3LHaDfYMwKbPev7aMn7urx7p2MjfAJQEfS7852jtj7Y9SXv4z5n722CdkbXLC1k62CpNK7GtXFfhXcTEJnpJv6or"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jvUAFqE9PpqD7R3rPbWrnFq1b6QY4G8RXBGUwLCX6UrqUXNxYRZ5G6HnYT6nD7aZ6khf6jTsGXeSzQCij7CbafV",
  "key1": "2Ec8sFkH58srfAu3Jp8CcMuDYcASNCT7nrLniGYdU9BtpTXFB4SfRgGjj5fbAL45XCsdFf8xUXzQ9TKM5duaGuv9",
  "key2": "2Z9niKh77JmQwi8VVVi32Dxwftduvu6yu4MvD96cvu4PAhqjVfXxSVemi6Y1tSM3hJQUa64Z9CmojNABSbRUbjBu",
  "key3": "38NsUtmHvZGymZ8DUci2Zbrh8d21tbuUFmTewkSZ8JUHcB3ukYDmJUaF7PxLhxtKQDLSEqvaHyzLb22rda3iEVme",
  "key4": "4hGexzspXNf9szHua6jMFPSssPrpNJEPqu13wqfuCcmeTHGyEePfaoYhVJZYEzmeXyf3ugvViaF6gRWy5jymBiHU",
  "key5": "3uqDRTVjV2Z7KoayE92gsZFeRAdMXpHCwix77PQZsm9gzAgDesy28NjEaAhpA3DPjkuyyVzXVACcyKXauddnLCuk",
  "key6": "2fnLdwmJ7QqyVwUBYmdEbCSJvQdYgd1VJuqR6hcFn6ZgCsp6odGTQmsPzVJABLSvyx639RcF4aNeosBHP6tnZAdH",
  "key7": "2GzAQHuhAcLXSMBXaq5n1ZSxphSWDvE8hwEpNTKXdCusSmsiMB7fuq5qDpQCdgRtkFHb1d48tmvCnhCbqaA35TvH",
  "key8": "5Yz8wGV5GaovEiDqiiAQKqLzJgt8dnJkevs2sGMmemeYgKwtykAGwLRspj2JNAF2XmrkbwALJxxbEm4ezVQxX7rd",
  "key9": "N4NQMsSZXTiHWNqS3XQRQ9VxiGNiWLp9uejW2uAyjvv7zWikBoHrZPc6FESaULaSjJuasBYEBrVe9WBNqiDRTKo",
  "key10": "pqrM4pzY5hSRVCE9LPT86Qfr19YKRFTDQYeXLCxcdaBQkzKJLP47QAXujoV62uMEY3j3zvS7hX8xnFE7L54ZGvh",
  "key11": "3T5CuGipvNyxp76szqn41Gmq6Qifz3s1pyxX713adDwLvkXJmRap15vstyWXzdK5gRpFk2BPmYqprQQbGbr3ewvJ",
  "key12": "3MofB5hURjZerwCvVTg2pj4vmabyE6aGEgjnsnEcDSkG4mTC3D8Bb5H2d9CQKqJU8stHW8WQtNjVQHEyYM37YKXe",
  "key13": "rQf58cMi1ByiV9yPJg5frSpkvL1ZbZb53fmzsxhqLoq3JVEHRPxDq88noJpxdhxGbmtHR4rHCjXPSGGp62x5rSc",
  "key14": "a6omqktKDJ2ssihjLKT6efpvdcZHKHFt7njPSznbYLYF68LPdzTVq4Hd9Dqr7ZX7Lg1RDX1XrbMBAnMmhRyvWED",
  "key15": "5Go4cWmfFfQ68rZanVUQABZuF2Buhm3BJJMeFQ5hh7w6KxVJzhk7GZguh9sK2uBUxYpZ8sPXtvq7Ra33Eh5wSPc",
  "key16": "4S5RL77XZ7LUL9wk525UU9dCJhXaXwRwXVBTfbNc2uQjnKK3AhtZB9BAdN5pkh9kQtWyLFdY9sPG4xo5zXYv8jrq",
  "key17": "5kVZWJ6NuoJNMsUzKiGj5xT8o8nFZH1kmAeU6Gb8syhuL4mTqoxMnV94mc82y9mkTvQUyqQngwg43MxCjrJcGa2c",
  "key18": "4meuVxdh3iAW1D9wiyq5C3xShJ47SsDnEYayvHrWD437p1J1KxzAaMSVnhKNW6g5hSiecXhRRjR7Wy2NPN2CV9c3",
  "key19": "2GwrdUY811xWM22BCjjczPHvbVSWzd4LMcs7eyevD5ZQV9cfXhxYkuvuKtrQraCQURtP1DBWfTyStCRZYD5P3NpS",
  "key20": "4myTAUCR8L11zPcTecgZ9oSM71KdWCxEujwZuK174xwaMswBu4Z394FkVWhY6JvS3jENhhTABrwPN7CUAmyFSyi4",
  "key21": "2iqcoHkkDskKSANMSMwVudLutoMXnwd8WRJ6RV7cdbsg39XSHie9BMpoX5QumLFYEnuJSN7TsVWmwSDzViBcnS3a",
  "key22": "5HxJYzuPVBVUHhYPrwgg8NRSAt71uNxRi2v7SFnFwkzq7JWgphCcM6reRYT5CES9WzQPWnKru467NYSt3o5i8uDt",
  "key23": "2xKckZeEzrFHhBBeE9kgQKLuDNaJELe11doydykmVfQ9qgQ3i8XtZ4gwW8x4XnK89eYS7k1fa26bdwhPqm3zfUP4",
  "key24": "4KPaUM8WiRiTmGknEXQV1aqnPbHkA5LzvPJ2VZU6icmj86rKBBLDr4rkrNL3vGTPq4tE11b1jLv77iX7boiARjNN",
  "key25": "2drgjWX7amp4uGbYiYeFB3UdcVdqTWsjQHdFdYvpMdh1hdxPvQf6rX8bV4o4XkY2XCNtdyckJgAKLyugb6FYzVQD",
  "key26": "Uaj4QNJTZwBi3tRymjohy8jee5crvayDQ3NUBfJ5GyUjZDhN84Fx39vy863pyfRvXzpAQYUKoLdoVpNSh3fgjhk",
  "key27": "2QZq3AzAqizTqC8cjKFWCchhKsPfzg9dbong1gV429btZtQ8fTgYSR4namshqd9ZEMqJT4L9z7tPqC1HrxnTzirc",
  "key28": "2GN8MNqttWFRpVUTT7FoZjB7fPbKXJ5i285K2s7K4jc2c1YxVRkTjoXmdksnXVyUtzSKtZhoUYsjoTqJJ3i63rcX",
  "key29": "2hmzMqbMsAAaurTa19UukSYpKLwRpjfFT3JwdNBPwkkY5SNs2gZNqoJpaDZ4SmPLd4TFqXQqgNLfNPibWxmtk9t2",
  "key30": "4MWzTZg54VQKNMmdjVt2AsXq3ghFLghYqedwbR5yLTvi58J1LYcB9eL7bEG2CZtZhpLKZKgHAjCJ641ptj4MPjUF",
  "key31": "626rJ9muRGkdi9wkbFjcdysnFziCDTQRpyZ8kXmfebcvzqbesoJYsTrgmNxH88oZVSqz5iuscLspCQL5RQUBeVZT",
  "key32": "5p32tdaPGp8oe1Qc4VgBmePEnfVmgcNFGPfwPUtupZiKDMsLnZ1Em2ayX5ef48yt9Vg8uxvynS4gy8q3uDPzNm1v",
  "key33": "2LRG2aR9cQdepZN7XR8BKRso5frbrDMwX8WKGBiLSxAkGRE61MVbZcdh7BYT6T9eoczjSdjyLwFuBC9SJr1ejF56",
  "key34": "5yiwx8n2B5oGpKApeMkMYmDmToc2gs4neokKv93VJX6B2gpcDy8JWFVois3zkhAK44V8GdLffDTuqJ24xCzsAEc",
  "key35": "21efSnuoVYkXMbSANWbbSeNLMisRWr5JPPudem8MrS7dh9GioChVUm4aC5uhBxXp2xToTMBD92kSCKcy2A4WQ4aw",
  "key36": "4HLDRm5LP4oYqQXBn9TzaHLFHVLqPeLWtYfzNMCyG7LckhpRJSNAeuqENCRmKCP6CW8FZ7xpo3d8Lhnjo5XYq8VB",
  "key37": "5F7q7nXawAqeSrRQqP3wk8XquChGatxXZoyeY1tU4JXspcxMnV8wA4AmUymFL8f1ymYyjg8usRPbfxjYeYv6AaEQ",
  "key38": "4phkgjWPoJGJTEGnTQFSXoeAencjNbPC2rPiaZWXpJVv2oDqFDGxYMiNMinMTa1ZCJcuXqbyyzJJiwrJ4LDCD2r",
  "key39": "2ugqkNcZWo2c5CcGLi8QbwC9BDC1BdK6q9hFwcpPtUUKDqJ8jfpJGTcsJ66MnBqxwz1Ms9egHURVsSaJRgV3hues",
  "key40": "ffxDC2SPe4xD3RT94Mfg67491mtWKrnk7x2x7R5vrYH6E7CiGvXZR5BVyZ6WLM6BbZezggwqvTEZ6QgPC1iETkP",
  "key41": "5cY1PW63DVAHa8dUfWBuML8Mt4FpXHjLgzN9Kg9gkMxQV3aSUxKH5kYE6riLcRzXR1gyDmTDyMCSM9EcBmZt8tGi",
  "key42": "2ib3TRN8t19BKL8a62XiqUAwgf53etAi5TGothV1sz1sKWnsnD8aCdvFnKjsBqbKpsybkm6WF7Pcr8P7eBdS1W3N",
  "key43": "33tTr7vsuxPw5Z8x4g8na5gzgGVRZEn91mPVpmcbxFgzKtGfCEm6uuMTS3H9JA7ikPuyK137zExJptFe1NZKLgUc",
  "key44": "4ayMvhX5gvjEPMR3uwrEYK5oS9cgHkd6ZB6DymEArfBiJTPJySrqDcebYQoLU43q4qbpV2LKR7BF5XXtTAZLezpw",
  "key45": "3fWnKVfU1kVpX5c7AdHgTt6zQ75kp16FxZWF4ZxSqT4cueoXyfC2unQRnp35E3NnWUaWTMRUH748TBgjmc9Tmzcm",
  "key46": "48uZNKWGT3G9JBqFtmCLH5UdX4Ue4ABxG5UEuffQHKrBSjV1BexfQaAnqZcwzuAh4UmBuZqaAipss4X5kCsnzgV3",
  "key47": "D7fWjPKFSEXcDrdm47F7YQzBxuX4kGBEhX1Fn7eekfJCvjttYntDQtfz7iJdor1EX2VbBBWDk4uwppLK4NXEv9B",
  "key48": "p9BKWUPtkbThaY5KajKvHy6e7sV5vToyza1H5GLAPJ2WdBV4KF5GGTAaAXE1jo9Bdu6MG78xnd31ehpwyd2vGFH"
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
