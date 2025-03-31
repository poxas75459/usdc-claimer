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
    "52MFoEcsVckLRSBc7Y8VnQgXgnK6XJYhKuFzKKPQ2ykHhEHoYnGPLivxNbEWiwkFaA22Pa3u1oRHYmZFHtT6E4C3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kY2UFh65RAKiKZZqv4Gt4uLvCgLVyBBErtmUZqSLg2EzGxT9eGovfZ3jjAkjUDgbWdEN1ZcnSTQJjvNkbiZ8p1i",
  "key1": "3xdvBP6YHRWHhGUzUw812umeVES5NuwmGjczXowZsaP1tMTnqXMGRiJcCb7Wj9bPX3Zgcb5nq7KMxct2Dsg7q655",
  "key2": "3F1AXxaxiKD8wDFrjYbJvStHEpykRMvQ1qSy7ht1pAWAAPDixDqdA6zugGVj6oz6GJeGYNT6TsUjEaf27ywnucyn",
  "key3": "5E6gGNtPmMicsgN9haeQpCnQbfwpxFVyGyzDtQs6Wgp3z6nXCXLz4RcNAVPaRJbifBunu3o1hG1zFtSjvxmHzRLS",
  "key4": "2eZ7M5ofhjsxtPRV1g7Nc9frz6pefrru6xz945hxkKPA3gNf5RaVzah5eRy2QmmEuw5QHAipp5Qz6hyShh1UJfW2",
  "key5": "5Py1a6A6ncZJb9XpdSP9Jh6PMLQr3vhEaz1eBX7eSB5SfTFTJ7EY5GxS8E4RN3MdjdqudmrSSW9FZPynFfUzqVpY",
  "key6": "71U9zk317jTQ1af19v4DiGA9iL3j9MqghdTfiNf48qkvKBLz6YvEjAzVNAWRDVQLJ9LkAWmTUuiousfz5ixf1Ph",
  "key7": "5MpBFP7UEKy4enEHDx3MME6NhK1PioHUVhfwVZTBcaBWjaeX2T1wWwo5PgCRn6wgHzgen9fdmpzRLkMZtPpMaheA",
  "key8": "4qWJe6LwN7QpUf2pMTaKCh7tKiecAgQjL9ei885pEg59DJPyMfU6aSde9e165mdN7Pk1FuQujSiH52FjQGHYWMWt",
  "key9": "4cWSvEYqDewGUYZGW3RRUV8G6Bv86a4V4DPaQJK7ePemq2kLjRnqbyy9Y1qcrqVjPrBq9WcmdE2FcdN3mkv6VdWR",
  "key10": "4AnwxcJeZq7eKR6ETzPehZB2fk8VsJ9KhhYohDadyxBVDYd5cR195k7L8D74KkF2HN8YmZ788b5GMmuJhEG5uQrH",
  "key11": "dL6C358ogTKB49rRzkoAH6WWNuC5JE3aMUwS45D2qcVvw9tcQvAaxtBzseFMt2NobNWee82kNRiGA2QZvf6tHs6",
  "key12": "2UDRSfx4PK7VJAZkE6ccjmHouz8Ny73jkJoxzmhHAQoZnKixcak9sU1mzeAXipFpV5ZaMDp4UXb9kPAYFEGVJURY",
  "key13": "4KEqqaq94t918f1Kb3VEwpSQsGJJLu4UfwY2SKKZWMCwY8ToCycw88eDt7ScpKrVZ2iyRiM47SVmXhyevP4PuLq2",
  "key14": "3K6JNmqmabymv7V52M2opDS8ERibrRjm91MmH5WeashSZi9qEcS3aF3EVySSKDg4a4UTEB8kJ6XshuiRCzKheam5",
  "key15": "5LDR88uLb4ERUSi3GYTrwQfuES5iVN9AVxyiYXRU7Q9A7zvfoiDtDVitdTGgcDvkxsBk7rwQWcmRKNmBH2XimyqY",
  "key16": "65Jf6w4WNbM2xKDt42rpHQ5uoFNTtDm4Pn5oNLPC3CKPNLJawnyBEDxD8NZrGCeEdrQCWM2PjYCWS3YUjJUQCuQe",
  "key17": "5BF7JMzD1vumahE63w6e5dL5eD1EBb3NFuRmdWinoDitkeiQtFMN2HJJyJRhMjMJfBRKcv8E4vuiUetr4a5GxW5e",
  "key18": "4VxCSwxUbUb5A37WeJDb3Gukwu3KhmZHp8RrMted425njL5vDzBvdvPTLFvDezqkNpKFKc8sdGK6vPCHY4DKBw9c",
  "key19": "3Wq5ou9zragaSDpjDC4PogS5m1XEvnNjS7zWsXskLG71i4XNjCLaw34ypTDXLRyTgVQdE3Wa8xX5qFpmZ5BGV7a6",
  "key20": "28bBgTpupwHGMzyfwFNkEiqV4Y29256WdHucggYHgM73fsDbYTacro8cEXWaGsRJBoQSR4vzC58v7zk8brdRGBV1",
  "key21": "4BY1wS5FS29eFs8m65JZoeC6Dmyh1foNt5SL8zX3FcDHjitUbmwQhgCtaXHU1RLcF2XrPsPcGt59m2riU1THHktK",
  "key22": "3iTb8u8ByRoUE7bAqwCpQhmF3ALvsZ913XKLKqHwAHbTFVxdGMBRV8gSwtwdigB5AjA8mR2RA1ndfVLqLLzvfrtz",
  "key23": "mu4uigaBicHxkvKYsaY2xkYgxJ7TzmDmo8rPVQJkzbFBWYsn2aNjkhRdVgpztNL2sBVMehXQDiwDNnXGDXGCo7u",
  "key24": "3inapgyWJho8gfFNk5jbSZc1fg95MZucxCV9pMgzGSA4gMSTWEgF4JC3KkbyP5P6uXfEL4ydeiJYQJyB1GWdj1mN",
  "key25": "2LkDG9PHAAwaau7RWHKiEHvMACeuprjUmacHFKTTAQKztSjAh3CvDJdXgBKB1CWanUDKr5qLtDvFDx6DA2rGgoRC",
  "key26": "BQE4oB2yJhbdc8nqvuswsP43JhDe5ZceCLpPdyGcEnCAyqJU33PD5oVsAB8XJSnZAEvVw8H2yitvVXRdk3xaq8N",
  "key27": "2wwFUcndvEaYRPNpDU28sJ2VVZdpYzxTbBsebEEE5eLse7QnobUbTcdmAgs9gdVcnujrndgFBM31K4E96Dn26QDr",
  "key28": "4C9yG26WxYvWLXkXdvx9d8WKrM7gspqHfmnHR4DxCyEkH5UggDg1gPAJEABfhGYHwfzevNkYN2XtWersRYhWgz6X",
  "key29": "5822Rn6yRjFDtHLUVh3AFxxUPdkLESQzkZP87aRtqXauS1gdKU7U46xuHYb5wMtPFHcAZvMrm2p7LWvjwnQFyPgY",
  "key30": "4WkatqEA8V5hA4Etk61BQJjEiJozuNGEJv7h5t76H7FapcGoYqDsrCjUHieL9Cs6KW7ZtBZLvn4vhRpKUxLz3akH",
  "key31": "48nbkd5DsCH1zHsETNebzKQUmYtym3CxcWiVeEV49iE8RNz4ZAiyiWv3kV1K1VP2rB2Lix4kHA3SKYLQ9Jjn82oe",
  "key32": "Jhd1bLRKea76w14rqreeps5JYroXXsUyY7sgrcTeXifkVcpU2TopiCpLLawGWLorKW8EfJhYkQoAzPS9TCvBk78",
  "key33": "4CJpx3yhZNy4cZFNENR7v6cG3RqeLn8PukC9N9zB8JVhfohgzC7W5wh5nN6CpdghDva6buhRhZGxDPjwxzRDxLHv",
  "key34": "5XnEMqT3v83k61kjKzANkDKNGPj1DcsDKv5pXDyPEFwoPNFEynniptaN7oqBzBxdAxEiKfhanGigsdUiHcoXLmtB",
  "key35": "3uFWs4mJByDt3XismmmqSCARZzrEL18hYNomcNMMLztxayqMMB64ZbEXLPEZKsq3WsY1QSc1Bwu1nZe7umdgucZp",
  "key36": "3vqfV7Hk6cEoxcVv3cDTx4PpUPHFoZzs6Fu5fWfzDkfC39ZuB1GFVz2khVNR4ts9TGP7wu3b91HYuXHccffzxM9J",
  "key37": "2N4RR251sPzeG6UziZwDNt3LPND7Gnk6kCr4KCxR8uEpfXtXvDbmyxjNnE6DDtKHNhoWkvusiwAKbJmz941HrcB4",
  "key38": "5FaAnf271DC66eaYmFJuMgAcP9CQTJXTdESY7AnyFG2EjQkY97s48uFk4hfnv9fctE22trVmxaAK6XggruJ6ALMo",
  "key39": "3KStEpKA4y34tb7oEaBvuvNSPuhfmr1g2CsgWfmzggKBkdZ1dVLc47iQ7V4vwqHnm7rJc8VjAvpNB3V9nGu38ccc",
  "key40": "3SHeqvH5n4QuGCe1TkmLoZpEeZqikinehJEtp7nsEcqvA85UEzNe8fwTmGJrzoRFdBQx3CwWKhndSWD7xiaRMoX6",
  "key41": "5EhMeJUU5eh1aEqD4Yx8FofpsC468turUocUk76pZmyD2FuYrioMGPjCpiBaNJYLWvBwDnpub9Djgm5tn33Rehc",
  "key42": "5B8b4XmxdhNJDW5rz8i6NzUYPijn1eXU6seYHWjrkQB7BftgF1nsea8CmhA7sq9Cf1wFTEMnXZihc78TSrATEGEG",
  "key43": "2xgKhaCJgved9pAjUmS6PUrZKybvq8fZdwtu4X7PmDg5QqWMi2BxxEuMTmDATyr2L8mqpZG5gKD2U8jfswE8wwvQ",
  "key44": "4KkeYHqQvkiepJzW6woHy1eEDRSEKFY9r9eShi9R2tVxN8nDQTkE2Dm5fMmQskzFGxRQLjdhRCwbJihDptHEvnbs",
  "key45": "3YTBTxy1BwYZvZYkV1iZMbV83UpT9enZZMANb8nvPvkh31KiHfwuDFmCVHXzmwPXaJ1wuWea5Hs6Z4CcANG8d7FE",
  "key46": "AkoFHaqz5ZK1Hb4mayuxRXoRSs3atZFPzh3je2FGjZYG8ZgdMuxTbjtPDRuwC2y3kMWZfod684uHFrikKF49ZpG"
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
