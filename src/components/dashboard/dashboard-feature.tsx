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
    "3UQC7Do5CnNuBJdSXzmeuoSC1DETLgfzYurEm8FFPKwsB91fjFRwEfqrg31mJMhhdacqMjatiCXWYmomaWkX8DuL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M6fQaPVGvk34h2zZwL12sryz4vDaZchmYdRyWh3UnWh55u8hm9Hhb2iEW6DuHMxZAv3bygZWCCQqBv3B5UXS44o",
  "key1": "357XZ3KefaaoTZB2P5ibmg7NyH2hQxR4o4xiUsXz84zpnuAe6FeccUCbCaKyUMMuLas9DyRwH71q6frHxF2V2ddK",
  "key2": "5eJ7B2ksBdbMpKARte8mGdNG3P6hDBiUM91x8RrHPi331eFGYw2SH4rZdjGuhJxFWvAgGqkTYp3bfeqUf2rcV5sK",
  "key3": "67hsQyGAACU29pc46y7V1kZH9viaSKmUsaRXe1JLwZQmXz2x33FYtk59pfvd5t6yBXNSnbzSNq3VhTd6qGCFiQTj",
  "key4": "4mbyHE9au4J9TVzjAG1U3HEDPAovvekzJxBkgeKU8vjwVsCNTzQwGBCxKbBAamZ41pMBLrwoAiuWeSTyibEiY8Cz",
  "key5": "4sP1a6H7iXWP3bHKsuEJ85X6ewHGsdSDPGWVCLgHEmDbHWP5bsBLK7y8vD6V5bj93maghiejwMuYjtTF2dFzZSDR",
  "key6": "2ebpUBxaCoLEAMke5axanT53vqmtwphpsNdxdy1hhSQtf52rpooYqNuXCUNJNNJsG969L3fMWWjfYs4h8ZvfuEw6",
  "key7": "4ftyboo8bNY3pm1cW6UtecGdnSrSCvRnFYdqyGVPNqwrEhZpEWDNQmUMTEBngBgCepTansymZ98swrd77bNM8mV",
  "key8": "4qtBTS6qFmqf6h5hDXqArBHoUBLdGjAyzZYvHntSJgyeEp2j65JHZEwpMq1ZNd9sAFqBQ3ht16uaLDaFBNUT7cmS",
  "key9": "62VETVwm59DvHvgzgPREVBMsQ6qBPk6TyX7r6B1wUwBeQkJfn1vnJyWjE22Wpcu23LXRvspsKA4VXAwLbe6VDsa8",
  "key10": "4VL8fQUMHTWLvZ6h2PYE1RGr9pAQg6qB1qvT2HmMS28jdjrTWYK3CStdX7PPhTXCwpwaNFPdJqLpaVXwCZgYPNB3",
  "key11": "8AB2JutcrWdSUUEWs2psGc8giZ3gNAPCaeEA3j4vYGsgCNdh7q731NUQ3g6HTWnzwrKv577UBPzYanHKxLz5PhP",
  "key12": "3iURuu12YW6mybaUxdRfcqEhUFSAm4GMiqTaLmdAX7xKZxGU4gAvasUkX9t6w8Ruoi9B1te7zSbVK2AxDA7xrCaA",
  "key13": "2VEhANpYF2BYnP6JxjrYzjqcDQjrvWbghHsinNbsZABRNSjSHN8q1W9W68aD7CayhQprPzCBJ4wzb2GCBAhCrKFe",
  "key14": "59J9Q7FRCm9tFPsYqvsoifYaYDJMFLNjexoh2FHNhFzEww3BKrqGFdcvo2JJvCiN6EQ7EHdUXsG3UyS6R1iNzECM",
  "key15": "efiL7KXyYvh7cfJUaY6Rpx6xgMhEocPddZdDheUns6WAVoXdUZH5XGe7BaWggeaHHvdfigCPn66a5e3yRV6qfXX",
  "key16": "4NgjztTbQ1W2kbEULsEuRitduAsL5bNUQrNxqd55PSEmU83ubhw1q33jy1mvW26YrxTxZkqHJWza2eVV9Lt7sGzp",
  "key17": "4NZwAE2FtCHRocJkdjSQGvf84g8d2U2p59CUKRjpGFiaSuUCN5xpRyGWHiHzgDTCCMZT1Ki86Q75LTbdtV2zWGPL",
  "key18": "2nVHbLNmiqmGAfmpK55CPjGg7vM2ve5GVHrd3mZ2sUT8TLxsz1gy4eGWTm3etpc7q11anvSaqGpSQtwWqvhs2ra5",
  "key19": "2f7qcZQZP1xrAWEXU7GH42T2nV1joybycmbrP2vav1sxaFtT63g7wu8hTqffPG9PeB4WWCXN5Mf5GKhaZDRSCKTq",
  "key20": "5EwxEGPy4VxHQiAxcYuC4i1hsMFM4QXBiXySAUnJh5aKH9sMMa9tVJR71PfFukxPAKtX7HBGPMNT6bQzcbCwWBVd",
  "key21": "pNgpps4BNWG6S8ndTD9FA4wcAUKu7gTq4aoo91EUF4NdG7NhwUL3XNjH9ivHTa8stdaeWbHefBcHRvWDE3pvHnd",
  "key22": "5cetzmgievV8ZJrRm6z3e3W9o9q6TNe5Dsb5ZHerVRDgGPjNUCdMJFhRgigfzF3rYFPyxtKx52XZ2mLj311AJetH",
  "key23": "5yMeaBKFRAxJhbPjNEDgZApQ4ZFRg6HaLE2h56fsUFW9HDFTtNeek6wzZswvbyeVyzNTQ8CWbVzYT3KPkVDo67wa",
  "key24": "3qCdsXWmqM9jVMdS8hZdE3h67dkKRVrzu2zoniZbrmJEWN3GsqPpMHRc59i7bdFT8j5Ck9pVuahxfzKptPYLmr5K",
  "key25": "2xjbaab8cutp77S7Z7KvLXfFBrejicDDZ7SHAXVApXGjGG2kBPKkxPGLPg9ce2SoFzdgY4bGob9N8DsggFxjfnLL",
  "key26": "298XLxFgxiriog8vmVb3CaJxzMjgNXcnKDCXu5SK6ncbaQvPfBaDtNcQYzXauJDo5BACYgGiMVNXXoNoEYg5whFt",
  "key27": "xEVsxfH6tFGKU1ayB2W92hwp7DnEEoYzSN5qPZDrJHfb5r8RJAxzGFECu8pxp5cVy34xt6FfqshfvejPJvy7mti",
  "key28": "5iJycQQpMpUny3mt1NKvVCcs3rR7R6k23FZKkKFWkxnHLzNWR32duYFKTErxL24zEiYQm3hjguBE1G2dgtN77QW8",
  "key29": "5AJhQiTsGJLYUWxT3rzKznxz4cDoKo54fTufY8Trm5UkaVeFbGx6WzvVkLgjdhrdP3ZuEtc2fGoYnqb6REVUxZx8",
  "key30": "3zKXoHTUaagjdts2dmHF5NcTG3kfjEaYB2qx2ZU2mqC8Qq3W6dUvp6vsAZTiUZJMk3CQ16sWvbqo2c5YGchmRSHM",
  "key31": "4WuM9MQskFMW2d3y8qnhmmVGaef69FkmEMikYYuNAiMXoSPdrmyXxkaXTPrKhC7NNZQDdx1AtoM8tkdFSsEKAXcZ",
  "key32": "2f2k5GkUjhpf9Ws9ADhUQiAyEbBiFYGXSt9dXcvCqTcCtDZvRtU3ikmStBP7sxkk2xi532pDJxKFowKTRW6sNyqx",
  "key33": "5J35QEKKGWZnqbjTnRjvtudeXMPUGZae6QuL5Vg7iAGyskGjdsjt6Riz1EoVxEcFeDN7oHdbQhxV5aM3M9zGe1UT",
  "key34": "22WoLnUuwd3QYBTMmeVC5DdszZ2SDtmmHRvgx9jjULkNMYZYYwBAn2urvMyNBRDmSmW5w5pj4qiYQkPqFLzsTi4h",
  "key35": "4rkSku7Lq5GW4Gef1BDmdxrBUxKfZj6qubkWPxGTUGkUK1HTLERaYimAVBZe53nsJq1MpHw2o3BUin38Z6BUVfJ7",
  "key36": "2K4Zm9wEhm5vyXh5ebBEsPv9deHE4pJw2VnhMhmE2NEzAYPBUhARBY1ufjJEEkqi8ZHsKSN5fLgb2LjXGzL9VNSt",
  "key37": "e3M9tGKXST61vmjXqgJnQSbuRdpg7Jv64PrPjJBeguXPkRJpYZrasQvTv94NCuSYwFd1tHsLvgo2ySDxNMuq2iu",
  "key38": "3QCDTvQsXgzt6qE6178xuCxqimXgGNmdnEBMwXvghHrFAgFSc3VcTfi7qKFugB6aD7A4jhf9Ms5gHURZSBP2bMc1"
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
