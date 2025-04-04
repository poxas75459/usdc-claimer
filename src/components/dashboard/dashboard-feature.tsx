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
    "3EiTBEFbgs4CLxYXbCCTU1Ai4dKTCQY5thSJe7BjqZZHwxEYJpAXuZ55tCYr7FdYwH5CnTeXsx1ZihciKty1zXpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yY7psZKDH6yrL7du69DQPznSeb9WpkznXiYpPy58hw3tZAJV2DypxKYc5AW4tJmytg75dW4mwjh5LBREvCJxw1E",
  "key1": "Cr23DYPo9exXr5x2qfHy9HwXbKMNGPggFUCFSjFrZ5KvYZCRucHQS8zavXQAbr5qw1K7EHvieb3nNZZnLPCnLQG",
  "key2": "2Hi8ZGKZf6ZA6b2WMzThvajVG9ZrCoMk17VgG9ZTBwJUV1X5sVrv2dWTS3dLtU8LVnJWi43XP9cwC6JgbtDYfrkx",
  "key3": "3Sc6kxR36HKs8AArmPZ3JJPRMm8vVdiosQdEB7qS5ZJTZPUw5yWx3nYm8kE1z58LN1TjDkr5MZGE72W8eWaDk5nT",
  "key4": "5rM7TSsAzGbSnnXWsTARazzqrVRCFdyxUshpRk7DpWUprrupg3h17gxK7W9V4h6cGH2Vu8M3tVKTqtpZuWZEjPPv",
  "key5": "2gkAQBAkgJKCAVYmbXKjrACNSvtpTSft4d9rmjPbmSfbfewCkLzdw8BhNmo13cMSGGvHVNgMfEBLpULA8BCoiipP",
  "key6": "3fpxYnYjcucFS1MqczztSy6zL8gS9gNv42YD9tmtGTpjZz6iw6dKxD9pgy71y3HZ1TqZQjjvKJh1MZyuR4DbGbEb",
  "key7": "4dBsHnDPumcfF2d6jiVv4MzyyDk1rt85CSsQsYiMT1ynWh94yuYE1L1332Ssrd5cNpCPSHSriat8vzdLNqhzkSSg",
  "key8": "3ALanfmArQPtXbMvV1nau1Qcb79C9Tw8V7upoSabjmrwNrgepd7fPUTVPoBKQw8gcXwrQFjV9dVmJHvUB6KkPAR1",
  "key9": "4f2FNRhYkz73rmUoafY35oYpJSfj1jKyGd9LGk3qUu2HZJUyGB57FG4sXDhv2S4KEms22YuPAMvjTxBwn3v6pFK9",
  "key10": "34vbNvADk3XjHn5DVVnoxqJeMmTiCqcRd7rryQ8LKMH9e6yiVZJEtPFNJcxov5i9gBuVkg6qVonXXniEmbbFNNyg",
  "key11": "67pJU6sW6ahXDsu8BJMh7nShKTYeyyDm3oLVZyFqBuZKNVFTFcBuPFvSVJbPYWP1X7qiqZpoxTAJzSdoLEoKaYh5",
  "key12": "57k1A5kQ9AfZvCii5Wg7LkZfNo81S7rdztn64SPYDRefFqiYkHc3k8AFGPih3Hn4LpakHKAgp76mC3FEPDZeHpht",
  "key13": "zPV53H31UeqkVwKWQ1nuERA8KeC5r1eeMDoDCgzMWVaPxRrkbVFRTmZnHmVZU7C9hf8d2zMpo8Btjh29Kcm9k2m",
  "key14": "XUQVcYrZfUCc72eKpvLH5PbeCAz12t288oTvaSK7FbqNndYRxK6rAkYipNJ8m3QDftRbhZRTrWg1tG5PdR3Zm7a",
  "key15": "4MVhFsFTrJQyfTWH1UHdg6nJVVnDL8GjNTBnVyg9EznUfymkJnvPdU8WozArFqPU28JJwYiJz6bpkMBCpk1eetZC",
  "key16": "7oEheUe6XxWAyYFXKjHdyo5pNsbKsoh8XSgL6hjT6rnEPprGxgvAjQkDMEWrcZ6NHJncBU4DiZNqoD6NzsDvubT",
  "key17": "4fA3jbyoMJ4L9tTcRbHGv56ENioqnW4vtYyhp68HaMLmbQ5A74DWsVQ9ke5gFQgNdW1UrjXoPzfyFTReXp4BKej1",
  "key18": "6RB8p2Q9iaj9A2Vkth5igJYqfduys1pGSUKskjCSrA6jmqaVVeTDKVnqqHQNwCTjYLYWiLAxgpGjTVZmhCy6Sid",
  "key19": "3DpZiFyP9w2NDfPwz7EYu56LZsKB19BGuAk1sGxvYNhfNEkReVAg9p9pytLAjNUbitx36fwsF3AvwKhryD9UcnP6",
  "key20": "4SLPBB8SH4db4z2jVq8eJN1NnWJUgrmHU1QGDuN8jt1G6gChmAA3s93Zv5gRvxu5863XVtM4drwJNcZwvojWSEuv",
  "key21": "5Ze4s1xdEjw66tvNr7EEiuN8KCqfBA8MhDaeDqK4AJqyN9vP4ry1UVZNYqJeLn4fL1L8ysZa2HAzDVmcmPTRGiDB",
  "key22": "2LrCNkPmLzazMDxreMS8nS7EnRKH553vCAz2M84BjpiPCMqD3wuoo4aJCSmySUwn9QJ1zAAafLYMSuqcATRiFck1",
  "key23": "4rtihaFRFyiHf5SEbeiKL6uYhT1AcJegj1QWm6R88jSk5AfW7Bez2iJ5gbHKcpRadeR5T9Dc9mLv4F1UDUA7Ston",
  "key24": "5c7vo9w5r8EXZhM6pewevmg8grmi7J4bpun2FmVEcYS157gYmYf6CB9GKXrG3RaNjtYaRRSegZkEZnjm8qTu52CK",
  "key25": "2XtvJFimgiFumLu2DKcQpQgZ9Bghx3cEr8X7pb95AmwHvvP61CdAFTxy8BQ7xuztZH54Prk9Dq7zKeZ1naR27cKr",
  "key26": "57XGfpX5UNUt3mHaFeDscjgfc5amUTy3eFJTKtpHPi1W3y6uNoRVtf5euvgQhVDFoaeFU3LZpKL6n9sfckGR7CgA",
  "key27": "3LGZSpsxKTrTiwiApjE33sWcA1Hh9Abz2GLGYGSq99CtbEwCqinGNrtPe1Bb26RQExgw22ctqTcGhQ5vvghb7Rof",
  "key28": "4pCfiquCeTKxL6CXS3tZ52VGnihbWjSQBvrYgkX4LV2TRmGGcr23LYHjnc8MwKDFtwcUtMvzLko5zqoGDoe7LXcd",
  "key29": "ddAB14F6QZChyTc8nAKbHYA73Ufv21i8mSwfPp6EC8V4p2XTDMb4v61gbNV2hrcrSDWYm7hzTzzp1g7hnJNG9Qj",
  "key30": "67jZNUBvCAEpaHumLcTdbWo4K3kcGFCfm5Xb7DiXrZzXJHAQqdSgXkrPsTc45rDf62A2GNLSatoZWx18BK3CtksZ",
  "key31": "4dWNhEdEdX3sJoxgFPnbxAc7Dh61vhN1NF1b2XfvZsaT4Sv94dwKWKVJabzJ5T2iwH7dYXxBEgxKDPFCPTpoKHpg",
  "key32": "3EVm8WLqbhUb8e7PAwGL7FAUqXd3U75JTgqxcVNhERzW8ZEp45FyNeRjwkrZH4yZZGs9yK2ZQZ3E772AoonzpRJD",
  "key33": "5Qdw3FabL4ncEv1JawqU9dJZQfDJwN5GExGXo8t2xwTKG6qtNTXtKF6tepggnGHnmEtgXF4atyp7UGByHhVVQ7CD",
  "key34": "3auCDk31oju6GsuopyLbrS1gAFcuTosX1sfE2DWZxeDTX6RAUJr4xpmUchSKUre6pS4QFUizKSnH8fKEdVGiVxhC",
  "key35": "5rJS67nZ6d4xTqjKr66MLMfH1BxDTmrQEQkqQ3PLc3LojtmZ56FQDAm9E3saEZc1nUMkicMnmbD2MuCiUevayN1e",
  "key36": "4jZD3jrsPUyxnjqTguTHgGj65ZtjexPz4kWaCHAfec965gyrrCzZ8PqbdpUuWwzyvwZ81XrB75MK8R3FizNmVHxz",
  "key37": "55d3gr3xDhFimPftW26oZSjRg2whWuCdPYr846SUQQ13sbvg5GnnHzDzJ87FLg2NAAER7Wn8uRen5ikWCn8KoV6R",
  "key38": "5Zj9BhtjNqDbQjcjHjMLeHPRy19yPAFd6Ru25WsNEeZECDtGwJyjKXyRNz75zmPHFDqaY7WoLQNYrqfkf9k8Pq9q",
  "key39": "4QuTB8YA91QuXSLzyZnKhhcTNKkAu6Hi3au9kaArdZQ9nKBvRDbfm2MKShwq8P3cM8CafCAPpRyE41ushLdTmVs6",
  "key40": "4XA8QJiqrcvSPYsPUDUmRoU2x9QGDzYJ3uaW8oAHg8HXbnpzertda6gg56jZoJ6RfnvzK6M7p2fRxLjigtVo2iEq",
  "key41": "4hdzBrXtQXxoMR1jXKsPSeEfgqCstBehxX4HYZUtVYJ2E9xkxgHoEzvtZrjbr8scr4vPV6Uq1BwfVD1KtARJyu4a",
  "key42": "5kWwzng88XkER3D1kRQVUqUBQuDqR6ofwKrgBNAKmJRWzGT6a3z1MAVuFvWbjEBLvAvkh8N1c6WG2gfSzxDTM6A5",
  "key43": "21gVm8a3TcdXRmr8ky5VPDbXazQ12dbuzuYzqwDasLtNoaMdqZjigwgyRJ7xsxWnWGJxRwDMCrE1e2u5PDtCQ1nD",
  "key44": "2WCeQxqWczoLEoZo8VFoR6p9k3JPggQFJxxtBqZBhkaHo1Veh9Wvqxpr5JMVH3KuKYQvR2Ukh7Ewswt4KtYUgyKF",
  "key45": "2MvqP2PJ3R6Y3XSRKA1oNpw7TPZtN2tKDPdeRZG8TmnMNmB9C11rDyNmMGs7kxncoRzQpXxfy4JoTWyL5reG9cSH"
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
