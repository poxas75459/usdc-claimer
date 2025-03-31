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
    "qkU7Jda2GQFe9VejyryeQjH6QmaU35d6Esmpr9Wv4Uew69npujx42DFgYMw8yv7gXsNCvDd8FN3rxkjWphVg1yq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fZqjtDLqQ1HPVQV21MSD7RpPoSif95M3UkqJc5bwP8GdN9zW2FpBmkbNPhuraQrsFUAGL8srT4WwRgtYgLeXerS",
  "key1": "3YtZJTt4QMnjX3JLrFwkyTDvcs7EXJv47CquXJBp9mF6w4MnKpFyQxgqFkVHR3Hc5j5TcXNum3HYXwcGrTbqM5u6",
  "key2": "3MmVqGJ5xDzaoPHDPfSJ6VrutqPVMWtrGpKYBVNTC2f7H5RUjLF2A5z6geffVjvyPwv683vhMoAtPFfMQc1vaKmB",
  "key3": "63CRBeeSbZSXYT8A12hF73U3JFQbZvAu4zNNDrdwjZsdxH4fN6EqKZQrQKcUYaGGiBkAeRFEakGQizhDtDbpFLN9",
  "key4": "3XJpqvduTxqJi9oEBsJVHrpDJgk66ge47qrvDTaaWSHKwUtmwGntAKirQGLcWJBuRi1asMt5Jwuwr8P5ttYCH7DQ",
  "key5": "2PC2m4tEkiXWsxKKv4QXgs8oyhUcT3Jponm1itZdGsXfUiRhRwqB7Awc6Xi8BE7ZvRfikfK72PsQLXNv47h7e9MQ",
  "key6": "4HqEpYy3eUT6kgPb54JFo3Vty4FnjxutAk8B7CE4ghdoEfsg2utZsMbUtaQZGbSrWH9iZ1WT7So8BFjiZkYeMhpS",
  "key7": "52f3RHghmiqCjthRrAyjB9PpRrdxmVjRYhWpNW3YxyEti7jvQNGHsj4j8VgEFd6JiFdzGZ8bjRFA3xJxFgEQuQgn",
  "key8": "2DV12RrPscnCKQhQt8DPbgX7hFbPr12w7jLfTJYLvbEvFmCZ3xFcKEeTLXNDmX5FeF6RbD29DZqpEmBqstP5gHy7",
  "key9": "52LqJukE4RhGuniFX8wLi9NUM7k4ViHiokSqADuT4PqUBxyrXdNAUbmVPpz6tSMccty96BHJkHaqJFoRy4Ku48Vb",
  "key10": "3ktR234vK69yBi6TPvtfaBTceEKenNqaDBHPfcJs7MV5kgzZK6hADED3zNXHZ78RX4rSmPvoVcfrZitvTVWrgZn8",
  "key11": "3GYhEboMV26yLSiYhY3hj9U6dYz9WM3FpPkuffTtbJRKtEqXxAAgW8CbV8vmRDW8mz4GjYHohR7vZ2UnaC8nWpPi",
  "key12": "3hfNmtjzbWwTN1Jj7ML6nFA2RcfdNMpdrvRQhKHrGecMgEA9qZ5PiF452W1vGMGGiZd7P5a1aGGR42whX91En7Bp",
  "key13": "66rLJAZBDKUZByLttbnqfyvJrNT3BHMJdSkq6MfDXdc2CMF6iF8aNE4swJ6D1iJnwAedyUHDPxMBNfDDN52DF132",
  "key14": "5YVdVE5iujqPk2LwmsBVrpCTS4aYun293VrUHkdu1ZLvg5ex6UcjQVhQEn4Hwnytwrfs2meawqvzuaWinjHuQ6BT",
  "key15": "5w2VjSmePvQZg1pxsRrd2uQQjhz8aa2E1cnyVnr6buEoPgYeq8MddHotMubRy4BhEmBSabJuyEAzZvaPVLxcvuzH",
  "key16": "2qPY2oydv3h5Qt9RfuHheQ2wwEhBsQR6gyoD7mdLPV4DbdwgiV4SmwtP1wHdAG965RtcTxtrZiMAc4roU12xBWnM",
  "key17": "3wo5sVWhkkXGpd1GhPdGoijimnAYvdwXE7vHNZWruqwcmwmQJPyByaXM4pHhG6v7rupZ9BHb11DbeFFDXRwQBV3D",
  "key18": "5ouqGEzgFfvQQJGSkLuPXK9zEv8HQdA7hzRnpkoeVkqdq5FBwcwnyssBCKfkpmn6Nnpoidu3NamaTjezqzaVCqfK",
  "key19": "5uBwm9Bpe3tgsJhk3qS4Xh5ntx1Uqe4YYkQAhZL7mCSP9K933qPLYC1MTQyue2Z5o3PPU5PNGnF1srmQrJycxtav",
  "key20": "5GEdrstPmyUDz6m91g99KnsFAF3546W7CKeG9h8JHJPFP7Z87MKKVfnfsTgQy4yWqVeZQrAhuvXxTd6AutVSsKAc",
  "key21": "65WHhakpcFu3RqhZBQCZvUdtEdw26QxAjGc9Z87dtQMTB13yoKATvvvXeDfRZ3ig4eCuBPjUNkYxZmFjK61qwPBw",
  "key22": "SLwwf1dArcLtamMFjLcmJW7hkLUeW5BKoahdxyPf4YfB4GC4Mr19d7KUZyNcHrEzAa1Mp28UrATwYjPSL9Bv6ZN",
  "key23": "3CrLkPXUJ7Wr8AZMM34zPVfNJU6mHLTRMGP2TUtGgn5UkrQSou8jCEmNQQqa4EK4g5ZmkSDkYgujn7CF4u9kLAqV",
  "key24": "4yHJsrTmDMv9B1DrfFZ7MW7ZTCcdbK1SoMayLMuAJKmJJZF8ekdPdgE48SMGgmd3o2XZATPyMMoeWh69dvZ1KTFp",
  "key25": "5A7NpoC85rb2KsHcpS7UpuVeHQSNKR6PBE9ki7TeWjE6cQAsZ43LpYFgxJC8R9amuX9JvNxfpTnA418s4WQQGe1h",
  "key26": "5Ziwr69tiDAwKb933Wj2Euixpabp6T5A3J4ZHjf7AvBMdV71rGPcGbuyKvZS9ZFSmK9X9LPMad45qqCsyThVj5dh",
  "key27": "42Ecjjvkj6Pwxz5P8Lys7gMfijzEwstuoHXHuxfiB3VoF38GCwc2vBQqHATBZ5FcLU7ZeHjwvAw7xjfvJMDSSawj",
  "key28": "5Kfx9eRJ9KUbautLpJpXdNyytWPtqC5GKjuzT6Gzu9UMpo9CMD7CTG2cMpavwcRjoPTnXZa9UJFRJx8Sy4bnJNhz",
  "key29": "2HsK871CKoNgBUMS7z5Xxo193KuqEPqP7299AaJcwtC62khMEymHmop752j8YL4uYmGbh2RfmPxTXy8192jxcdTq",
  "key30": "3LP6A7HFqnKk8TWARVtRVF99sKKqHWAJ2QZbbUbtnZNkoHbsbEYTZJVeTumcY9o6d97VXD2ZFCue66uFKeH13eMx",
  "key31": "5QgD8nRn97kXX8JBaDE1fAt48dysxXUAtDyT3FSoQZ7vkyW6j64J7HVyZ1s3TbUdxTcpGDgYtGKvjKgb8vvup9Ew",
  "key32": "27wLfdkUjxpdV6Fb7XgPGgcoCSvcWhrw6hA7iPMLNYMaVeGX7E9HeCZjYNZJuFVscywxeSMgsasLXhcrrR2jwFn5",
  "key33": "31eATXDpkRVST5DiuZFegqYQ2pYUUTi4YPMrGCMaFsm7HszLcBHo8EsnAkyUAeiVE1BVjLyWpALvmJkvHHGSaArQ",
  "key34": "dqrazcMSJpjSVKNEGQ37kYX7mRoZcCzwitkzrpWMsGkyzcbxWefRynhTucDqpHAiKF7sRKpFj6wrW81RGBWC5DJ",
  "key35": "24kBnccMJQQj9iou4mev3iBpfNuBq7ThEruYzzmLY4oz4tiTbXmRs6AxbhgeDNM6GFhMXCYFDJBdv2aV7vWiJVzF",
  "key36": "4QTVk3JB6PD72hJUAe27Mx3muhZWqeKdHnZyZiEst7aY5PgjA3qQeYyuum24stB3z7qkzbcnBPBWxcZj8ksedQqM",
  "key37": "zxzx2NQcok5mCHhR2AXjXK6G5oYYSqCXTeQiAsPsVL5cdxNDoaXLtjL9r2Bow9ADVsJhcCr2gLmPfFRngbhpwxj"
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
