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
    "4Udhg2mrUNgKoxDXabvQrFVK8j8Qy3dNdpbUvdCzHWBfq9fLyMUBLKfCxoheRbkWrEagMoTYBDHqQJmHnfBntXgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sfcqDY9hk55NYibnkC2pQboqETVtW9pjLEkUontkB8S8NqfiP7BWemVjgyTjYVp4ZWZnKYTc4tJKehXeF5HUjUb",
  "key1": "TBpU2dxwMwbKQLvX37zsRHtf7P5SSzm4sGiZYrL8v1eHFYa7akHmWD5QHFKNbKSpBYkBViKWjf458TknJUMam5e",
  "key2": "66ibKBXpcm3iHZGL4RxhGekNTS45PDBF5vquZeJfEYP9RfGGiaCK1n9jECYzQDZ19SD5E3H8m2EVreLrk4MVUR5g",
  "key3": "55UF5fWbo6Haf8ioQEKPDL4256QAhuqiPDq2Dm4fE6ddhNGg8Ae1yWP8pg2qgtjjMxHPYM1R9vD3GjhV8yPM2hSy",
  "key4": "3vnk5tr6gqiYAjS6TAY2N2QzPwXWMph1rSkxNDHx8NW47B7JftAj9zxWDbj4zLskSLVfCzM9jKqG53pcJthNNmga",
  "key5": "4dnyfyy4wF9hbKG2j8bFCfaCxj2pd7uWAB6Vfb8ZVwiayDEVYa4CiJWptDJDJ88BPkVjki6ACigUknVKNxsgkaTa",
  "key6": "5vN3duZ7DhZs6Q192Fj6nwi4QVSngzrSZ4jqfzGb1BuPou7uC9gajP1VtHp2XeTBo9oGTTq5suhXeb2MS9XXPJDB",
  "key7": "4cYg7rgovTjRHyobUyn5m5qjFLJ2bCNGBLRJs5BsLhyjQs8DvZnadjJVhiAB4x5Fb26pTBD7gRrRqM5Z1dbkeVMz",
  "key8": "5okvnypqn38wf5YFyvgE5JtSYGVJXRoSMx6KmVxPi5rKa9X6Supb28kGuHXMPg6tGsePtBxxdHrD3Psyd8vuVRMC",
  "key9": "662z2xEasKGMwbU9D8gHGUGVDH1EGeDP1qiSEfAQwaXcfPD9oMgonbULu1oKdSVisHsE8Hc6Tw1DYgyMGwdc153",
  "key10": "7CREhgq2i8FJ8efeD6wCRS4iGFhJU8tSkzMBWgDbD77ENYQdqv163wRdv3pxhcDt5S2Wbx6yjVtLhU7hKWR3R2V",
  "key11": "sVndPpy7sAK9mrpQdDZix8rT7SexKXxVCu1mUxE5wwQEmFViYxVSFyAw61tw87b4uMRpLfdbhh9NSMZc1mc8DBu",
  "key12": "3Eh98UgzBaY4Gey55fveJFyQj3dw6ZnejurQCswCiZgLm46Vp42HizZF4bLSu883nLrr5f5RNUpKY2RpNPLFKM8r",
  "key13": "zR4DXXJrjWHZsEuWvvELYsrdqrQs8kuNgeRXFwkufh53uDBBhtwPC1uisrQwseCyZ7PJSZae62gDADPqYktTf36",
  "key14": "5FSD3CoUFomx74txa9WRgcSyDLTVpWzD3L3WnGsS2x9gkvqC3RbA8whiHatT63L3iPds41GGutXKxq2WoHfFSEHz",
  "key15": "4hQmBeUkGeErsPuwU8L4PM1sWUAvs6Vz6iD8MWzQiXtGs694fuME3LuPiKZcTUtmr7We1eJvhXjscLy8eYWNhuNQ",
  "key16": "45oYwiHVcwWq8gE12LoMpCDcrNgBiaeZTK53MHqcAHcBznAhxoVNQTEakdf7nKYnPUafzT7U8AsKBVVqcqP6dK6K",
  "key17": "29KuPwrjASxhuNJtTvYUK8BuEPDf3jUCi8QvDz8aFn6uhCSRq8eiLbpDQDFxNoZEqYCR37zJHGdBCg8nPvqVwx1Z",
  "key18": "2FvpXWiQWTyUn3MeVNWDrBTeYkrHnX2pnmCv2JHwssGn8eUaLV9BxhGoUGN3jVu53pFTFVC6dBFsMRWaJmxDWytn",
  "key19": "5fq3Dv5pxiFz1k7CPaUsLAK5gvXRWaJr7kHMq1imdGuZUGWuVFGjbvoHHr1gwaTebKja9717G7fEQqwuZ8r9u1z4",
  "key20": "3y9ZHJQYY7Sr4JdRJTPhkYviGJCUppPQ8iTBWmJhGxH3FdX3Zrj19VFtbxSmVA8wMvaPr9M5scfQkvM93a6Fddxm",
  "key21": "22CSEiLHsb753cgbSF5aMYdTYgkUtfFzDYVQkKP3EeN7sRv9jk9yxV9fCWj8uuhv5gc8ywuSfnSbGKVU3sgh6f6U",
  "key22": "2LwmRSzpaWAqreEoCmP7m2FF9MqitKjTWa3YeFaWhQPbpW2T9RMoLZo2DQkAAM8ZsLo49TE5UKASMesFEsWagpL1",
  "key23": "QttT9CFhPsqyHk3E7veicNNCfHJrNmjsFYPDm5MwCFEsiJZ2PoN714EYoXE5YxY8J7A6PNEemtuU7PdkT7eVm8c",
  "key24": "GpxHzSD2nAKHEstApkFZZY92peZTyFCcEdeq7QaLJVkxdVpNWaSgSjXwUBhDk2XmgN1Uju19a2a6sKZvfwfSLra",
  "key25": "5tB5eeVwtbJjy4yf9Rp1QdtYfJbyZEBJ5mRLzn1Jg29vBnXMD4CRAzoFX8a5u4bmRtUPDxDhEGfewm8Z7mnefSce",
  "key26": "4zeSTrgsoFwKsm77DkDa7c3Ch9Us2LGvicigyMrkKjQW1u93xJ4ySxoyb7VPHV7my39SJiqmfVQwuxGXmBCaMUne",
  "key27": "4xMBW26dWv8mdZeSJS38vYttHTcsoJi6T1zxnJwZJXr75PXEH6kenhs9Ai9FSJSMzXFJQu7sTqpWfHSgH5GM6yWh",
  "key28": "24tHMQJGisrFYBR6j8R76XgJW4ivVmtHzWDDUiwVTk4za1wYGfk9eY7u2SJkvN1BXpqxqLdjNSUhZQJmdjg6cuRy",
  "key29": "5C8nnpAETpRiSBiEJybSZbbRTdwFNmyfxARUDoLF3VA3jaSw9RbHLLeGtFsjrySnAaBAfuo7xHYuoiZJBBEprH7U",
  "key30": "mbiyBsjDyti7isbX9qWmETEMvHguf1fepwbVSP4G8jDiE1jJ1Tu2nyG5nLVtkwdKhXzfLPfSYYGK8z8E84orCdk",
  "key31": "4e1mJVXaQkFn4JcX2vGE8vpQou5UbF834fVFagZeRuR9sQtkdLkppENFDhdpuTqhwGtnsdcoXqXJZoC5KexHtyYg",
  "key32": "HeE5srSpQWUnJ8B9GMGejRcQ1ZUMZ377EnKUgivoMfnzaGEXxjVnszzA9shLGGjmLzm86A7LT4DCUp5tXfgPGjd",
  "key33": "26z3yHKaRdFohPyirWoRTwSkuFx4S9jxw2MJ3cE7pf7bnniDWnK2vK8kQmqr8SX5kXWSFSvo4cQjoHjyvCSfAkzz",
  "key34": "63xFGEiay1hdBChuMEgSySkyaLacS5toJB7n3DcGMkYk1F8f31YANPz4Fy9Dqu9QsHVE7ZQ1nQkLbCNfH2cvtdG3",
  "key35": "2bPQAmz2tYUWWg8KnWMKS4pMkAEskMyZuR9XphBSnvGhWb81fkpYKLAeBVjWSchzMq4SGwhCBn29fyPt4pKfuNTh",
  "key36": "66Qp1P9vw2NfoWNHGYnHe4nd9DtMreRGqmxVzjgfKAiDnFJ9ZCSW4H1N1eQABb3VicY7AAZgXfgb5cMqH3f5CFhL"
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
