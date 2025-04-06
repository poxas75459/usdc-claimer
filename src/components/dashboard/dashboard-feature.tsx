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
    "3Udo72Czj22KE4ZCZwWRsYcLvyamzHsAQnm799uYx3JDwymbpSczzPE1tej7X4UV4Zozyr3wYex1uvotnuQh65CJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yQWTApbL3cZ9pFQjST2L6jh7tE8r7MjL5GUzeW4LVXyT3SQbfB8ABp46zrRxgMaM94gVbeysvf1Vw2Js4Phcwx5",
  "key1": "4JFzeBPa4yrQQq2P37H6HLZy9tce6Ya7F7hY4Xe9zmadQBV8asFoD2zZ7msJNAjxDaRfZfSUdPf79G2DfPJciUG",
  "key2": "4dLm5btrnc8cbwGLKkgV225CTeHC8NaLbe6enRiyqDxehPXptYNuPzuSD76JTWpkiN1FeEyr5xq7jxJra2k1kbfm",
  "key3": "4EqFh9goKEEKrw9v4i8itPs3dZJNBk7uBN9y9QcXymzrSTiRJmJYcaWfd5KX4Y1FdhZ2Sx2RvJ8hg3qTbweLDhRp",
  "key4": "5UEdLq1opckPK4wYtx9aCCgcGHiFx1NvTrhxUh2ZWbktbt1CRKmt7fu5keJbqbD5RuKRcmDZLDARZV33v9iob7T6",
  "key5": "334T5ZaVJYDmyjuguaGeWH1tzNoi8Dqz9Lri7uBxhg7P1yGEMhvnXucPJwrStYb4y3CP4LdfqvGkTe6bQNQZ3g7V",
  "key6": "5QgbPF5a7YKsha2yznV8jAJ8EHVJ9HieMDUcFvgrKpZ5Vga9spuGeXCPc2XaxvV8bYk9AMuhaW8MsfswjswZzs6U",
  "key7": "25SBPRRxa8WZUWzmQwVEqN3n998pbvHMMq98auHTgUjxTkBnTxBYeNbLFwECNXuyT6DT2uswjb7hq7VFvWmdAu9W",
  "key8": "2gyP8Q45R43v3YXJZUWVqFA5xbcLwp7WR2RsvKBPjBZ9MCLkFVYgSWUgM38ZjDvvnQyfwySeyE9BF3vYV7jittZ",
  "key9": "2irTpo8XDJDgA6aGDYBFpPcQAsB4tXzu2r7JUpyXgeD31KFPQEgnhA7mW5roVn59yAJZgzrHiKvp2aEuk92r5m5M",
  "key10": "3ENLjY1Dir1spyFaufzvJP6eDeWv7dbsogdcty3LW5cw1kdo97sjd1ykpMwX9ebKaiFbGgc1V6eyNJASfefCXa3T",
  "key11": "31mTW9jyKJmUQfGLGaBhCbMrtTQxLrr1U2gxwydLBD72Dge7Xo7Fwrt4VAKwXr8qDnEWy2b5GBUckjTb3pMAJCtz",
  "key12": "4imsPwekqdr89RForjLNahw6M494SA5Fu6nc1AGhwPHq9NXe4za9UTdp32i6wHShLYJYHHHZQb6ARiB2Lj9Z9AH7",
  "key13": "4KrDkdiNiU23i5yirDuzXT8m6zEb1LZNBGHSW2n9vRUoRhwwd4YnxYpsBSsBCBe744zqr6cRFLutS5PHzfL8FBod",
  "key14": "2HGvqKH57XvDGhzMAk9dBHAXTPmpagyJ8GyAxbabmBYoEF6FNd3ZsacJvAe4hSZyHqhxSYcyqKMABapw532GQkuD",
  "key15": "4G3TzY7WqbbuTQ8J9KtEzATAsM8tsWQHp787R31EQE8AkWo6oCV455bsjgQETrHdG2wyRfZW92AZdBMnDrQvi1v6",
  "key16": "5MBrEeXdcYNcPU8ZyJAWZgRnZLP2WJeoHu3RY4nrM7exvZeUgTmtFcVdZkT8kaEHU1ENPEDAZsY66WXLGdxhnCAo",
  "key17": "5XSVGxk1mkJ9yqb9pvrRGLKGWbpbYeCY9XCMtqG84VNJSzV9bByZK16K8iLzA8XxkksFmTYG3Y7WDWv7P7HBFk5T",
  "key18": "2CFNr4zNjujwvXtUkv2ZoC8z9cSVAjHYcGSGC2CAijRoSz3GvWxhzMTcccMadi9oyDPvFgkbKNLVkeYCxcZzVYE6",
  "key19": "4CuwMMEEabNvT8UHNZJ4QFyFUH7AQJpYuaz7RGQN136ZozeUtNytnAHEghkb6hw4KySMT64xNZ54ka9SdFi9gTz3",
  "key20": "223aKQSGks4NHe6yDU7FokfVNMMjiLPQ4oLn6DcnjCkfPeV5mYxNzrW13ot1Px74QiVX3wgti3TziQ7Wgsfuc3M4",
  "key21": "4zwbHSzHggczPsTcmuuhTcfVn4QmAiuMpcmVV771RiQ1wS1KyQkb3brSGuyKMHvyVcgeyzmrd6Si3teV91Xh1fSS",
  "key22": "5RBXt3xd9Jqkze734oftNjKNX3URiz3qrjikiXZkots6VP1zUyT2Yxt41zo3VjAw8xTExwVTSgeQHqzMsZLCvuwW",
  "key23": "JuobGnEEWjRxrDqXMT3VSPVvhs9dsLcBfrJABuSHMnBrP21SAVK2jEGQzJXh7w2o9Z3LYMVyyWmTEYWvm5BSHw4",
  "key24": "BfepborqrVoooBLa66XFsANp5jUtdwMBUYZFUkJJgUPBMUYENhzFQkPuvBvnUv2fBXrsT6CiErVPoLWicrBZNsz",
  "key25": "2RnsVB7QkMZzXakr2CPvLHH4G5iLwtGakVogKwkjUK9tVemMrRXdZofVwoxNhEfAbotB1F26s91eqMajaS1V87VY",
  "key26": "55nHjngn933mHPzniGjJB7DKYTNtHZ4jZz6cuRyaU4ecB4coh8cjD8GekmC4iLA9XQ2FxL2nj9T4neGmCUEvLDws",
  "key27": "5TZwZvKVAusm5hh3Cd7JtDCvfDunFgnnUbpEFe6UqqwzRYhbweQLJsdaJV9LbFTDXBEQe8ptCRxNdGS45MRs17cy",
  "key28": "5pQfU3vP5jAHNvsVbRreQMmESBAARGDURAxYg7Q6jrNFpaesbRSBGyszf54GxesGseDuKAUxibvNZ8WibAEuN79c",
  "key29": "5f5u5u3LcTbzSyEcttYMa71qRsFzvsXHRFb6ZcbHZBwpQ4wATGW4KqFd1xDfddiS1DxgGmDX7Pgwe25BDWKWmPZu",
  "key30": "61GvknrWUrqPfznivpFAM2sV8BAaarpdWKmJUpKLZFJegXmKgx5X3LcidCXiFDy3SaqRagUVzC9Fq53pwT952agy",
  "key31": "5e9VNrutsCC9TsH46qZszMhkE56SwgDCDXXcF1GWQFZA7iZKP17boWjJqBezznXcLTFBKZ3YzMwobq76pHQNTEri",
  "key32": "3AKGqmifDGeenkpueHTxLqYoXs18DJDLyK8vGbGtMaeZ41B7LPB4DacNU76JoxQQag7BATuXm2ycdKVU1tdgzpcu",
  "key33": "5GzQGAqyHEAwWvoRFyUTB6dDAToKYAHzxkp7zoSPxKgoTbSD5Jy8vN9hsesKMKRs8a7AbqgdZtSxpdbmNGbJufX7",
  "key34": "yZHz8suhP9BiQFGZ1kHmhQCYgxTZVqXpjZLSV1zCCMDcYpq9gaiuDPLXBxey9U1tCzQ9KKYf4DXKgGsnQPqVrua",
  "key35": "3GYPhMuyxt2YKtgJ7ubXfRwur28x11nufYaPQS2ifzUiNu7sjHUcopwrWazPGhBV9URVBm7Ht8D4dmwRP6KHmWqN",
  "key36": "qBK5KWQCuDVU7WHgCLEUdEWErrQ11QdgFaXPaErFcUf4mBwt35KaxeYE6iGMauBv9qf23KNrrfWujec6P2g61wj",
  "key37": "28DEzZAp6ZY5C9WwaaDoZqFdBcgsstAfwVEBwU2hLb2PtF7f4b612yaZ7ym6ob6N8AXMXZAHkgE4tS8fDbBJwsor"
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
