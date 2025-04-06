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
    "8sF13yAqAkG23ivSFucMZPPzDPJZzLURB6cWxtj77Uwz8z36Ay2D7VoyV2wjBwVnHjRVzKFzJFdem9WLPwSntae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c2BAMeZLMA2YogVW18jD3a9C81pVL9KAhwDXANcPt7sf8DwJgGUE878ckFUgJHtXEekW4EkhVkrnABb6P5NCp2R",
  "key1": "3wRQUYKep49ytpmTwkXYLHkiqKfNQ6pobSjtVGeeKtmWzv7NnCyFDQkXzLMaWjZvy2gwwCTH5yNWi6epg68wrCbR",
  "key2": "2jgXshvFLkkkia5cxkyp3hT9TVpVhM5SSajWaAJTNXhUyKgHWEFuTD9zm6UeBsnrD4NS4Vg6XuaTs4sPdBEoXKJj",
  "key3": "3i8buR4L8W8FMuAa3GSF9CjGAtqEAhp7qPKUmkg19QJwiBqSDRmP73VTM5fHSvP5LALnz3NR1xZDJR524P9kauzM",
  "key4": "2Hiiy2zt1pDDG6NUxuNLog6Ak4A7ZzZ7T4jWEy8aU6xFLptFaoXLt3EvYgcZP2kSdK1CSDy7DMeEMh7rFtkKdrbu",
  "key5": "2VR1zyWNjbMXW9CdPTqyefhfqrEansNLFizXHoTMvB1JQpBRqLDYskTbRdrcuQ41zGsPU9jGnB8BEyVK7v2B7WS2",
  "key6": "E8KcpABKhX9DramoyopBH3asAxWQqhFpnYNh3LLWTVjxi46DfjKRfyvMn8bSEVQnozrkQwsK7d6ayGWaEovoez2",
  "key7": "Y8Hy6j2BWikENz7X95UvHybYojbkWe5MMEnSu6vrCpWat8ASkyLNTsCAsAmgLKgZ9AGcWxkysuU8171Qzvbdzae",
  "key8": "3t2ugb38Xg2BYCksmXH8vEbwG3kgREcaFR9cEWRXufqfgThH4huGQGdEnGPynGtWW2Sn5VbxkLbJKWgRiCYkXVGq",
  "key9": "d97KDt3ysbZWTiMHpMXJYQQ2Xp5TaK5BJDW4gGjJbEVKwgymSrLUgPFZSDH54Ufo2d6n3c57YCrYCTRvM1DxCG1",
  "key10": "ePL2njaiaewNhVHzQcNsyvNJR1drMARmPPnb4zWr2Ue6RztRTtqxz4Aqmj4fqNgpLYCg1C8RLnFQQLzSp3Xn5ps",
  "key11": "4J18wwTkjRfVXZzocoZK4UDzt2yQM9RHgBkvnZLstyzuLBhpS6AsX6wh1yZsx52yAzdpNkAmMf9btt5cZjUkCuHv",
  "key12": "24dSEhkeWuogVuynJ5qVC6Dna1HShCC5aLeSE3VXjPyB6CEWTbMmBSQxzfX9ehmfbWdPyv5Cmrdqx353mVdAjKYT",
  "key13": "3EqwHrHEWr8uphwjTo4B49qUaCN1qEA7DBucXBtUBvLKBG1BgVejxQTbdXPPxh5FsxeHkSdkwwx9AvSKH2wstnHc",
  "key14": "5WM7TESncppHvXcNeEDe27br8F33KFn4rAdVQxGr3YUaTWzqzuhHPn4hHc4WYFmAHJYEbQWdk2rG88vCzVKMAUSf",
  "key15": "567eKdz3bgXSkxv1gWHTG6ebmkbBVqxz3HmCWGnvunhBarQg1Nu5PAuHwGS71iZgh2hEaRNaokRrjW91fVQzVzVC",
  "key16": "57YrGXVRWHJJRbZhdaABhWWnXZU3AtQq3kwdLuoXAxn4tbEASBUWvbJiby77xkw7bFpRAuJPdqwK7gaQNjDuq857",
  "key17": "23rWULuiaUGheL9h7CDUyZ2FtFHHrmfYaVwsT15H9MSs1BzKxfrseScfMKegk2xSPGMqwYsxNFrZGbLxTBeWEvoq",
  "key18": "2cDYom6Wq4oQBBQJVp3cb2D39J3d7wFzSdVyZdCPcpKs9ebWNNUWp1TQrWSZMUpVeKfJz6krx3bDCLiobzycCnth",
  "key19": "4HwE1zR4PHmc7SSfSQm5xUm9iA1tB5LhFHitwZXFQjJvkfzQZS3JkoL18tC5VSbp9rBD29xLDGXCmuMKSZyQMyc6",
  "key20": "67YfvCrbdi9aCH2sDgMLyFSjTNrgUvr3e5UD4zymVj4edjizjH2xEhLJ256RMhKix3tzC6neJR5WSWkG12NV4T9w",
  "key21": "2h41eiu7SJcxaDQLwsrdxDy4b17jj3rhbQih8xxJ2XPv4J8nPEXjtszw7xt2zPkbRLzeXCK4LE7swjtUaPuyJrZG",
  "key22": "8HcpMwPCUWmhUWKfQ5UsQniccctS6mKh5cJuHnwdBNnSchZUrZpE9njts1Mbty4Wytj9BiFJZAFwRC4LU68wo8c",
  "key23": "7VPpNdtctLXDTdAXPccAfJnjaYqJijERyFCeoSdqWDgj8CH1AdCp7ZkZTp7g1nj28By6AaUjKN7JeYywQWGXcZs",
  "key24": "4RTQYWgk58waSrcf4qUK6V5ikDTaXJuYdoBMzHJ5XwLNzEHDwpK52UfFJosCVzoBM1errnEKyqevjoz1BnYbCB84",
  "key25": "58naT8qCWzh8MCdX8mkvvY7JvsFqq54TRpDXA3chUdhaFVhxw5eYTqyV2WLQAa2oc19Qe7jKK28HQpkB9j5h4Kkk",
  "key26": "2vufZR5unBD8wnbrY9BB72K6UFdbSo17tC28B1xgAou1TNXWsB52UTudteG2yXd2vNJUT3UQvvGgUaWNTYY9MgeR",
  "key27": "3njDnxPJZj4SWZZHiZNzdhtd4YwuHAxSc7akrerEU6opyc3UnR39PkgSo13w5qV3n9irbXf4tYBQ5VcvoKAEHZmo",
  "key28": "Ddbqet9Ru7jW5vJ4yPKmheCssRJPNTmgWHvFu7NZo3Vqipn91RbKqcq2GSSsWUVaNeniK5NyHAhcKjMeswq7NWs",
  "key29": "3DnTTgLAdT8s92qmZpEFdMFcfnoSd4ofceLiyE4vHLkhX3CzLCvsWRGSKoUiHatDXHrRPY7EQaLVVH1REdMzwrW8",
  "key30": "5YbhqsAP13c8F62YDcdM5HuL2pM2ipTXgRJa3kJQCBZoKNmrk4BxFATNdK8b6GGHihCR656B7W4mN2fQ34PpPfsL",
  "key31": "2Qzj1NsuppbrK4aF6KKm3q9N1ai1LQEwjop8ABasWSLjajzJmWCYzPq1tatSv5yZXKmEfXVjh22ZHBfAJXoiaJB4",
  "key32": "24Mqi3kTyf4BPRmcGesseC1JscegS8L8TUdJ3225J9ywY3ZAmLogprEJA5fy1KHkHF4so6iAuRiLJtZydmdSuw34",
  "key33": "6559snSwNuLcaVQN1239n3Q32Z5cVmVHq9cdNr2Cum5wtBRLh737JLeusoD3j4b6rzJQBgL8woiWdcRgyqT2NeK4",
  "key34": "mj7neUhqpvrGARnp9y5R34iGFB8FD7bsyTbVBqR6XhGsKAnyP2JurRy4Fy5kqTqfK91LJadWhf6FvjB9anQ2rKX",
  "key35": "34xbTqADXpkbGsfXsskhjfhJrdxjuUVghahmoQas1uze8XdrREZ6ysNFQLGmBeSUM3h4jSCWrnJQL3b7KMTw7h2A",
  "key36": "4rkfrzrHLhSF1VDeq6ozqXCZFrrrXdDFG4KjyvznWwYGgSAixyPCzzo5LwFoik8J1gaQqTpVa2LCeboe5GCxbQgN",
  "key37": "415EogWhGknPm9YZpp5mLmCVS85Jk4QNLhpuPr7Z1nW6A1vsyZoWUuAAYWQgitxNSMYSSUzLh3Ahnpm3vKD61jMB",
  "key38": "2CSrXGFa97qa6jw4d2XD5Jyu9KphcsFyVDKbm2CQRjjCmE5CRZbiYhMYL9M7M637QibNdrSr8X9SzJJVZXfQDoCj",
  "key39": "gesZTUmnWh8gGuyeSeETRtQHnecfHDnxAMWPEfBtzyaxqvhhP1LQQP7oTwwvGnRgQbn7T8fcDFdLMfiKCjdv9m4",
  "key40": "3TV4XUW3BMZkX32CrsTMLB4zghQ3oPC7Cvvm7i9QSjKQhPzZw2uCbYhm6NdRjGg8P2oMuoUv75rY6kL3JMrv12VA",
  "key41": "2pLMVh9n9rVrQfUHerKqCFHEqESptEzyd2kAXxtdfP3QXhZNbH5vJCKTFQwAPq5fgit8x6vAYT1awqWjxezGhJw4",
  "key42": "35xLLUkjA9byobtrd59mDLbLoExTBcWJfhH32prvJqqVWgo7EC2FCuVLeVynLi9mwbpweZEt5guBEY32G1TjbmKP",
  "key43": "4oZx4qXF2bNHfFYFQ4NxY1JcCqnfKLJiYeou3tGiMsKVx44nSZGgx1ZLRBkYcTTcx97pUie2A7RioTkF8kTBXiVL",
  "key44": "5x63hLjhjsb9jECDf9TdH13UMjv9fGcy6HFq4f8DL6Z2bKDAcijnEKeZibij1vFZwhtTexCNXDKA1G35887ZtrHF",
  "key45": "2QYkmWThNrx7Wwvi3c2Avy7xk9d7JRHL7rrR4BB4oYFFfirJm3y1ftRHQczDBPj3Jvz27VXXTeMqZVnq8iv2VMNe",
  "key46": "1AoqDzi5jRuG23MJ7LRvQWssW9PaHhKqVNwsjchM7UYzWKZLKHWhCEBH61y6bE6WYm9CFiw3eCnkiicSg9Mn3QM"
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
