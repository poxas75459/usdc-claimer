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
    "6hFaA9EMCSgCzHGZmmxDjBYnDLDWtVqjbyAX2rxZM7owfyNHyK1mBmQri4P4FdkkZtAQQBh5PDtabZvmVW7JP6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37p2p4YZ5wLyGfWuhSL6rrcpHogfkwKcK75LmmJtWGjZE92eKvQxussPq7dWu3PW5pFLoDtZbbe31daiGoz69bf4",
  "key1": "2rTspFJjUELhjw2vQwWfkTdAmPnj2AGMfPexTKwosk8bPCdYreQPWpLCDZH5a1qMAx52HWfHAJGuJ6ZMojdmZi3R",
  "key2": "3girdtFF8SzJ3Xs7X4dQhKwevBkoQBJmty1KbtFgN6kRpfeVzja3wKXRTZbyNuYiMYasHbDKmJ2bfNP6eXYwuxcy",
  "key3": "vzFCKMXgvxgnu6NtWMaikvKVxDsc13ezTmwDdQu4BRVsRAP2tW1ru9jCpeKvpmpEokf3xXSMWt5YCZSGrsU5Vgg",
  "key4": "ti5B9dWw7o18qUE7PbkN98CzC3nYjqnYd4uXvxLcok3VgJz42nJwvTYCHXFyZSn4Ak2nYGH7duX2cP5gLakoVvA",
  "key5": "2RUcXozjaHZFwes4XML1uRSqc1tCqu13tmb5hWQq8s8Xj66CQoxUMbqh9uqxu14X7jAuoysz1gKU1Dek8p8D3Ed6",
  "key6": "5FprWmNg7iMU5j4GUcmmNJEATvj1N6DViGmNXEC1gP8pu4D82Pv9wB5QmAqGbh8uyJ1otdARcsaiyykPE99SUx3L",
  "key7": "3QCsEGNwEdNKRbbbEH2pNqpXcX7RfGVcq74HWgxJgCzNXvVeMUYTgZhy2TcDBXUGJ7Lpc1UEaeqoHzDeq5evE5oE",
  "key8": "5hXUnDCmwqRW2iUhRw81CyWjNHMB71HywGYu9ofgHPVRA9aHTeYCfEuzVaujLozLTCF7yxav3gfTtCJsSg1bjqhB",
  "key9": "4ZC7BBJFbMY9xeVVDhf4QXyLK9i8P48GaMjaMUpdouVNP8JupazJEv5cG57Mpic9zrqArkUEKKWT7fbU2m2qRPmA",
  "key10": "2EGS4evL25D8yo5ektcW8m2Y4h9GruPnaoutfEvW43SErw42CPaBjnqkwony8bjCCD9BDjSy7J3wgMvtSoUFcTKJ",
  "key11": "5NDTe2nxoceHhNr5cnrFsHvSfoyvAWDoNuAQmLdUEAKGL5zALPro9UbpJiqzTPxkv1k7xcpREsiL8Vmekx5CVrCK",
  "key12": "5xdCJ8EC5xco173CF4c6NKo8QCtKDwV2DtAmLDPTY7RPm4q8anVzz7XM2meiVVNvVjgKp9j1SrBVNbjA9ET7hhJS",
  "key13": "rJcMxeQ5Es58XnoXVZj7kpXHrMPhLYXZXwh8LbxtMz9NaLB4MHL8TsCt3K8bKKYTykJqSTJNcpBMH3wJzxCYgu9",
  "key14": "4jiyZz5V4rDSU42LRBmkcu2JFyoQxGLjf4JHgy4Ev3N5QcnLTrUd8VGuF7ckjYLco53A6BrWFxx1v2ZEcwwARqeK",
  "key15": "4AhSyqDt5UqCfCCHQaDEHpwaYZEEbKEouWWHs8XX3ZM8hCHeLpoGT1i7EriB4r6r2r8pXu4orfLo7yzQwGBeaTP7",
  "key16": "47VsEQAXEfv6eJbVnDK4Ed4BGNocK7wKxsJmPfjULZSEkuytsyivAKKjxYSMKgGW9pZ2ZWMnjWu4vS1giW6st8wD",
  "key17": "67nV9vMwfiGi1SiuPcZVj2YkAoDU4Hwc7QQDTopPbR8K5ocLrdDixbn6uwyM7WRBQABJ8nmJ2LX5dGtjCntHjmbM",
  "key18": "4jv5bxRrsBeKuM9zZ1rgxmSdzkUWJXc4nKpUA61PDpfecpHqGYeBPuMpAjokDi8vexQpMDZ2SkHtjRb2r2YiVxiN",
  "key19": "628YHYBdWe1mcHhqJqEquK2RePMX11tkkip2NxKtY9WK4nBFTvqqDoorEzUYXtcjeawMJdxdGb9jEQHG5Dj4qize",
  "key20": "3djvKE1ixTXUur7B8Ly7xf4iDJRQthDR1FNeFPsCrZWvpWgVfsGoNhTiJBznT88NCqqy1rYWcNhg976SXkRemAn1",
  "key21": "3w9a1aqHuPeLWsV14hZNW4gVCLPKQd458DgmPsps4Z1CenbHNVtsueYcP5VHAqUNWqwQgn28eKV35JZJ6VKShxH7",
  "key22": "2jkFJZGSoy3Fa4Jk4iX1oSGPFPr2UQq32hsk7UCMMo4NDPKuoRkAtSQaQj9GSaEPcSscM1KkiTcsx8CDTif2C8xo",
  "key23": "5i4YQ8ixcq1LZCP9z6iRmW1ud3CbbcrPR6uCnYSCqURUAqy43PPnnrDtKuaUEPLYU1VfEC2TgnA3gXsK4Z8n3MBb",
  "key24": "42ssEt36VK6Z4k9tmkbc1842v4K2tRTuYaiB6FNfftmNpaGm4jtqbxYo8qWpERR3QvRzvx8yKzs12pdv23Mp32Dd",
  "key25": "MVis4cmjdBEjcLkxjQLHTN1hqogCLTDDgjWQuPkcFE5YKYmvLEjKj2kmd7jjpKSRufyogt6mFK7tsUe34NAZqbh",
  "key26": "5pSJgEmiFiEbw3zgwDTP5mVeGw35qjbrp9ZoL3hnctLTCjbpe8FAAQ44gt2QyoGocyLfyGM37uWWSJmkhEnd9aV2",
  "key27": "KiLGNmJub3uq8Hxcu8tq8W8zwE7C3BVtWzwGyKWQbAYU8xUyzPN4kbzoDcwWP9Q594jkrm9akUpKms9PuyDZknH",
  "key28": "57YasDdcEy8gaNLGSAgk7Ttg6HWp9otU4XduVHU3P6QbVE7ebugEQRhpiqv31tLJaLArqsQZ2XwAVR1gG1ZctNNZ",
  "key29": "66uqNwcJDdQYc7JQKmQwZPF67G7e1LEzo1Near9vRFzXdBirrTSPe4hvWWNwsJNKexS2oRRVjJxjyq4JsUdYkrVG",
  "key30": "4jFNXDBavs6mET98kSSb3H2VywGGuED9q4s1dh2KLjfZayUkk92emWjUiur4Tanb7UTy7bzmW3A7Yf2AGmJvMF1K",
  "key31": "55sPKPST9dUkvPd8byK3hwujG2JfUBZbpaYnWLSyD3nt6faMnyz3AqJi9dztAR5hsMpxXpAPJCaKGg2NbeAG39T5",
  "key32": "4vQcbmTq4WU4U5KpDyZ95WQbG4P5gLyKSH7cHdUGb9YUNVRfYhqL62uMZicCcNenBubGfRo1vHy3E8usfcH3rA4q",
  "key33": "3cMnsnVNvBsk1DZRNibxFND91iHUGNraEx7V4kqiY3FWw9iLpxnWPdLC9Z47Nngww68omJFpPESjCiNjWay4qkU7",
  "key34": "3MQcQgmwSLii6z3vHscFu4cgU79HAwHBaca4xwjMd1K5HFQxLUSVa3NUEvKmSPW8vqJsBi381hibvHCTg9td9xVU",
  "key35": "eM1WCNhUS4ESx94REFRjDhqcgjVPQHq8w6YN45pRR1U7xg1t4ALMtwsJ1hWwVhL96S8y9Hs2J8Qqa6sgZ1np7F6",
  "key36": "9MJLbivVd6LjvYV8iAw5hSEbysRqFs6kUbJy19ABy5aym77iYjZnnGcx6SHqQVmWdSmTS6Q4FKcCw1P91ga48WX",
  "key37": "ZduY2oU9xKJDKiydP8tt8kC7iqUH3vK9EEudttuWTEaJUE8FAdRJ4KykxFxuT3WTk9VdiT9zrKRMx8mZG3LJLCa",
  "key38": "66X7s32sCMPn5RYrMhwffDN9j5qEM7PhkmGgjshp61sYbAnEPKrr9EN2SxjKyn5V4GoFbrgWPnyaauoUL8n4eNRz",
  "key39": "xwxihLFpFqRv2Kagjm9VPM5mU5ambzBXMzNfY3WiHk5CtinNC4C4nVNm2wKr4xuccqqmCSse7eovsM8d13MRQuT",
  "key40": "5ew1zbSjrkUK546GvcNGSvLjN8xguFdRdpKbi2EaxPg8DR7m8i5nfdyae7anSdveMS6mApTSaAHNXPPh3unoe9a4",
  "key41": "9JQdm3yELst4oqSuxPYBXFNs4Y8CqceB2yDgqSc9p3kDyjAyCeamXzJWSa7ayD7HSD7qBAN5RWrRp6hc6zkzRkL",
  "key42": "5d1Kgf2xvCVroYZYct4B1TiRpM7jooy6dTEDUFud3fQocVTNMsWw7AuKiFzZh7nqtkvv3Y6mcRLvN2tAMK7AYR3a",
  "key43": "3gWKEAVvmjnWhg1M6bmRxN8xPmmjXEYrGfqcrLs2HjoRr6nxJ48ZRcxyzVzEcaLr4G1VEVZnZKyDFud4JZKJvtwJ",
  "key44": "4TyUmZD239ozSf4JqJWeR5nGMZfZLtDkBSQm3aDREtezionmPhND7mF9c6oy7wPSjhJcRNuzFuihKnUAzydeEipJ",
  "key45": "UoJCFjCYeNg72wGtguEbhba13TJnsHvnuj432kYVdCUoDWfYd1JtfdtoUQS1nwzWKDq3PwF1AJcgkx7JK1gx4q4",
  "key46": "55vNbt2cHk4FHeXjzdvDVkN5symrSLngQ6weRvUYCF6YQdzWKBJke3X9bPK4KZfFssCMGxz41aibKPFvMD2adMEn"
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
