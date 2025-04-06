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
    "5c12ytLCqRBpqMkLRSRQ8HYSa5cmS492F1J3G6t6HhsKgKECvNeeWTKLhJXNUANQL9Tv2hfDG61dNviK8GnsxUVW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JLmdUSfnxfJwDM2NLsLRT9U86uvESWXZ6vSYj2kfxouXxcW8BNZSeNk4snBqX4sZeXAfPAhhSiqXHMghhU1QeJ3",
  "key1": "2sFEqUxsqTN4ozxxySegywnaf3r8wRDrTgCh2xwqjxEWGCxmQzdvcjbYwV83913onMsAsJo7VxM8Pm6Wx4Sj4dYC",
  "key2": "2RXzhUhqpMQUvqpvZEu9LsMBZ5RwQM6M9VhWqG8QW96EX3GTNbm7iyWmkdmQkf22FcyxpMkYDQBkRC1HdHqre8zD",
  "key3": "5QAm3YBcPgwkViTCB6tGqVZJHttktSYiHmZwHdjpzZYzptVcUBPpMvQWdhs31YVdJ88wJBnb7rnyAt2mscoBbPiV",
  "key4": "rFyeH1fsjWx4TDvGibmHt3kghWATBtoAjmPh6WtiJbSasAoQYU14oYnbh7jNCedkQcGjH6Tqkuu9kfzkx2DA92d",
  "key5": "jiQzRFHDvpPw2upxj5GiscrpGWFEDJp8NWGieMpXepZG98TiEV12W4JumE8bR8cmjAs86aaN4v8ZEaPh52bgcL7",
  "key6": "4qLgsmzoqqoqNfP4T9GbTmHRq2pDHByvgZfd6EsaGSuZpAmxUQ71boT4hvFrzqBEwuWE1buxV3VdA4WqQHnr1qPu",
  "key7": "4quCkxkwiqaPrUeXEuRVeyy4GEiZqBR5FhSuEmn7iZgUZ9qsSUj8jsZiFuRTk7Evazgj9gg7HfviGn8LcpsZrJLH",
  "key8": "62qCFPLuecfHzAKHoX3PaFf4e9JjxKa39TGwTnEuTB9gnNyiKnNj6aqYxnknTRXbVFqQYRKPZjAUXd6px8PcTB15",
  "key9": "5NDw4WaeYqEx2BSYgeXkFPQ93UZ4wBSWAgUHTL4MaNnQz2q1Rin4bZEej1Z8rTwWRHSXzPcXFPgpcqwJfGovMMYJ",
  "key10": "4ZgRRABXxFLGU8VStMj1aHhrQSCLJbftCzjeXeM8YeYtmkx5br9AnTbtWnBD2tqp8zNqiRMYrnGNuiHGZ7PHg5Ud",
  "key11": "2g27mkHPTABEeKpUcCyj6eLZXyUkrrtx9yEfUddHjjkCvxH9tXzAavkAZx6hovp8gCPcrpQusA563fMrw5NeDZrp",
  "key12": "4wWGk9HXcdiQ3FH1hc3Z3BgFMwYTXDR6GxGEuy4BnH1x93o9F5pBaWdSMqHzxnnpH5tE9qeXb1WGENd1zis46wHy",
  "key13": "2y8vhxv6pzc3B2iq4PgpunHPUjgTvuS94aJFE1UJyZFktKQZHWYYxY2nrJro9PvUKx4gsCLGVh9zZFv3wgMcTBv3",
  "key14": "57efpRxXfpYwhEoeQMCqpX7orK8jjCUkJqzGYaTw16BPKmH9zcWaggwGJbhCiRZeP4ZHKpMYRVmuT1rS4Mq4nutm",
  "key15": "3FviDAX4ekRdTNAGDGWmimwnb6x9C1HocwXa4QrrvUfpWG4ha9C3L6NYxUqJFDPoMCYctvGxHUNaq2jDmJt3ff8W",
  "key16": "2z8NqgQS2e9xEpeRk5YSsaGNPHuw9DciQKm6bKfUKYq4fBVHHDYgZ7qnPV5vRt8WdN1QpG7HkPebLqApJt4RQLBJ",
  "key17": "5PPMjn5PM4Kkv9ykaAGWdaUSFdnA4pt7VZgci9Ka8T6G4AKHA8gSALn5uk7hemjnbmeA5fqM7vK6QBV8vgAVz6kj",
  "key18": "2JQ3juryb2M64Ab37h7cyz6V8MnVjfy1MKYWjWKmsCz4RraqMCdHfKQTASZzWVhMELMhsCWGCqgGnVrSdP34PQjd",
  "key19": "UdDZ6utzWgrNF66sRzad6e2bXWJeFzjzKtiGJm1Eqwj89T1ZC8eMuh2qZQQdRDoJr7w7CU2LkzUiB4bhdtdGVFb",
  "key20": "375ahCUhPnfVMNuxB4JVmX5Ehxh9TZhqPgMgZnxj9UgJ2R8s4fG3Mx7TgyPnjhVF9kbfhY4X5vTgieZUM5MBJ3pc",
  "key21": "oHsqDGzWhr5Q3ajBFECvvUPYHkpRnB8HKMap1ombSxG46P74ATahGtwdFZxGQiB5Z2fsLwYQLdw5xMsmd5bp5Ex",
  "key22": "UKuHFhs8LhWU2GXGnP9CFk58VnW3hoY5vq6J59q7ySZ5vcpiTL9JDWCjzvu53JSPo2ECq8E92SPsWr78NMrfX7f",
  "key23": "2p5rnBuTsJaVeLn36pv9iQDwTQmar7J7RCjgCPfSukvXYS6S7ZtVN468Uhz8HB1hA9T4NRCyguAh8AeWwZivZrn1",
  "key24": "5KjHu4aau3wRMtoou2d3WnJHyiugGpt7S2eyVbnpW9jpnLkdUhGMuyqoTUHL1KKqfLSoxSc8kCD5QXQYYfWoz9xM",
  "key25": "4Wv6z3BgJQLr3AWQBdsdhknh95ueoxNhw6smUueGGYPQdGN8VJ7pZdymq5t2aETWh5etizfyF9DxgQUtHBS7xkkj",
  "key26": "4xAAQyAc37vzzA9ErvBG8UPDJNTxUK1Y8pDqZL7zVvbJbYsphp3QLzgHHTqESH8gYWvbkQMdDAqTnDfFFhBa3xFP",
  "key27": "2EFGug27iEpEJvZcMfdzHfrLihgaL5Debe5YZv4y96EbwzV2FGur4dK4seM7fJ4QQmYdDmmDV3V9CppGVfpehYtS",
  "key28": "2NthhTcALCb2TyNZBnfFDtZnRHQDA9X8wmDKfqCCJxEgcLEy9kTE7WsMyctKzXe37HBXbPE3DNw3RPSHquqQaSQ",
  "key29": "4tA2YE6QepoQsnsLpRDLCAWmJp1KQBwzWciDDH6wzQcGBJGLbYkuZ6PSLfzmtjpRMQNJZZHsfQvPnXj6QU6AqNXe",
  "key30": "Q9UVUAoYghwyABxTJweTJ8XoF4xLHspTztg3iAc2wLLWr8AAjmEiLqxJmsmKPYD3AvnNrKb6c6G44K1MCvVAWzU",
  "key31": "9Dx7hJr32X98F7V9rvsE85NaeDdXSfN287wn8pr4NTtan5vs3NXzuXjBp34ZSjEQXEU9yQUxmveqVQB7Fcs3dqB",
  "key32": "5c26jYdV6yP4owZEFKqJTsbWPorB7JbqUo3dR4MoCdRNt1dnmvBwezQQwFvVh4T61ZpSqUsB9x2Ei7DwinRfogJm",
  "key33": "4ZxkBv4HxC6jJmSP21k6u1vJNDcBAqWMcZnUCg29r5jxREFgZ8c6ffNMYe7hsNDExnEfPcmbV4HidmpHEGM39pJe",
  "key34": "3Jb7HZU9r7LPUcNJ8zAKK69p8RwDJkwU2M4v4EnptFZBoJ7duRYybmD5Ubv2LaS6kd1Pk3fM7mzv6MSnptS5JnEu",
  "key35": "5b5eMczHw5kdX8ssk6toTmC88S5K5rJ8qHGAW4ttH76tqokhshL1KRp3Fq8VqkpCXgFX7wYDu1iMbbpjj18bKPL8",
  "key36": "3f3SqTmWqfDrzoxXyoJuCJnAKJN4XkCvb956GYZuxvdfUJwygUXoCcJZ8fR2rEcTFHaWghT4YGnV1Qy3raRoq1Zk",
  "key37": "x5tqLR5sgVcnVGbRMABdva1YLdP2zERKnNZ7p9NUY2kbJiNRuVi3jDwjHx6pRL2VN5NrwCK4VHSmf591R2Mw2P2",
  "key38": "2eCnRawNrRLB5HkUyQaSD1TN9icAdxRqihRHb1pXvSfHLRovgtJt2S4kxDkBWuu1voMdZFq6whMecfzrQGHFqWkD",
  "key39": "52rRv2GvtB9rKW24HHuXVeFqt5uE4bWvpFPhVB1fZN2EQcqwRNfPe9uTWMK6A1yttCa3McyPkwkMqjBzo3SvGrLL",
  "key40": "5YnX9Ax51SigiaWZHSYdaQr3W6KtCRt5PtP2S41khXnpUv3MvE5MiKKK2vvVLMh7qfzhRwCh6G1b6x9Fs2ct7fWG",
  "key41": "4y7cVcw7e1rn2jFXfgNh7pTZAG3aVHKoRTRJrQvLJz9XB2MBDzd54LTVZAo15JxvQzZA22fTN8s2aHEj5FMoRVuv",
  "key42": "62TAfDxWqkZjxm2JXUZ6RRF3SesnSnJcXBS1HWd3m2BPwffrZ9JRUXVofNFeYo14m6Gqm7Jt4TQ1Sv6orAN4DWdX",
  "key43": "2F84uKDuJ8xy4ewmzvKdVxztayxr8UkGM9Kjgyd5oTF44Cz5GLSxgMa3CNcQfagpRJ6hHQz1kbEsHSQR4jGqUbWL",
  "key44": "2rqYRc6mSTBju8ywuky8bznS29FfEnBwcvE35yjXPB75AEGTRrA15gq8QKYB4zHyiQ5Y8mYoEFvWpqZmpUqHHqK4"
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
