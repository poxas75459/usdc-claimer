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
    "67TTSb8Mbsa3iwWk9YECo49N9CEsM4bqQQGp3GRCDzcmBoyVLrTkesS6spmxtp9gVpf3zHeciDqFbYDHzv3c6Xtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oEVKvLWEwx4iNpbGTXsY62azBLJAzE1PxPtX89UpzZrhcp46YUzYbE2ombVphsac4hycC1155vowXYh9mqKppGZ",
  "key1": "22qYjvTmhYHw17zw1M54BpnJcCxquN39hdUQEesxFuVhL6igvTnAKCGxF5kArGLLSkxiYNqvmcXHS5xft6t8EU5x",
  "key2": "VUaiKxLNHSijDLVJnH5QTN6a4uzumPdYtK8qSmTZDhKLjeqSmy8k3Z1v97Gio6cUV6TtJuF1bE5vee29iWqKUV1",
  "key3": "3np1TypYZbTjXUXpuLtSMP56pBoUT1eT36u865BRGpqk2xfHrdjmAXC78aYBbkM8smDFCMfEHHriUqH56SCevSkf",
  "key4": "4BGipDRR75dY3fe4nJ8sDWXfPZvcvadqqhcRKCyeFPsZyWBddRJCnMRjmsYkj1jqvYutbJ6UYqMXzdRG7e6wa6Bn",
  "key5": "5J28bPwU5J5PdHvDVe9U4dz2t6arnTSLD2NHwNAU8oiuxX2jeKkQ8zf7m9vbq1AnBqyqq4FznrqUH9nE3gRixS5i",
  "key6": "4RuLY1XwuVAGR6x8Ka51VL9pgu7sHSuQRpr8UpLANEDEWsUPRG9QidDR74W1ES3ao6ZfrAzhJA7QEtC2f11CoRTa",
  "key7": "3mU9R6HEiwVxdvkLym7hiq1vEVsiwM6GLv61X7CYBuaT24emFTbkLQYJXNqUK3bD9eypozfZXAMoFtmUiZnTmH9P",
  "key8": "5bwg9iQYEAk4T27apqHJhXh2G7TZ24Bi7HQQhref6iL9oHtp1EeynT9bMJ3VZ1g4wkj1aaiycdxpCnF2HZw66zEr",
  "key9": "2mXKtk3FYvonBbchq7pYNfNxJMwYGhdWjd2ASFyZaGKqCkGrxKZWjJTch6aTuRtnKY9p1VwpDYqEG1njpMY8u1Bo",
  "key10": "4ncYurqL82UuUrfbFN723R65LkPJbQnq7Qoj6j1LYYZwfpUZ4et8V2QYLjQnWzjA3KTmB9DVoLAfEA7q7rEQA6sr",
  "key11": "4AFZE9oGVXGMeyViJWSMwXVy3kkEjsqDQx2xPkkuyMwGFGi5q4uZZVLFQLFcQRf3sfo7oox1m2P3x5ZGv1LAM5xD",
  "key12": "3q44CbDJxNuwgNzBh18noER3zxvo34fatPR2HYWU4qxaFggeRTXRqTE86AB5egM761xbqg8MgFrqvvEjAHRmSnqj",
  "key13": "YXpVGJCzVnRTYMPors1sRC5NdDcnY5xwPy7DYy7Ptu4zcAVsK1PUbu5pcwj6mEitW6htDi8ZT3zRsyoPeJoB5zK",
  "key14": "L9Y59rcXiWXYSA8Apwu8WLUYNbLKqXmcaUgo2QYHG4TojoCnvFtzbsmjeBtEYDT4VR8jjP62VM91PaZhWxSctnp",
  "key15": "5MdqdNTh9mhDdz4uv3QbDVmVB1LYh8sAgPNkWVSX7GGeiNBunQkhc1vf6g7HmfjUhqEMrVBmWHkQbVBxThejJLy9",
  "key16": "3vRARnXiLaw34HT38CzKBzKMq77mUmtZpn88xmGKTyT1k9eqCBxESWywwry9Hv9p66RgB3pByb7xFEapg8G9SJE5",
  "key17": "3oKQyucEiy9sWQYDt1pNLwH2e1ZtSSTX8dxMgiowV7z6DJczQ5eLkc371eS7Mm82hKiuYmmys1Ki3caTHUQsjx2y",
  "key18": "2bPCjo573wvgj8Ue8gLsPitj1WFioJPGqdAo29SG3SoFiyjvUAk1hPHNh4b7wix3mCNupcf7EbpiMBsA5cq2a78G",
  "key19": "281FtPB6Y2oUKeJTJBDNtFfwbUNkrjGxv5P9weFD1UL6s6WvsEYsRfxcEApW9eijUoBarkRFuBW9ksXGAiZMkjkn",
  "key20": "34HY7ejSeQPCVyynYCs8mTr2LjTDfMiKyzaXYLMjqpDWtqZsgAhuaw6TcKgLCdYmmmZZtgLtQNuu4xJGfrBWfKkP",
  "key21": "5ajoD2gdMk8DJPQa26DzQxr1obcs8uiHxP4fj34cVUqWWq7ijZzbceEEQs1h6Z5BJds3DSmvAeZvbdcSW1bgAvo8",
  "key22": "fKVr6HUxsXqnMW3M4shXfJYTwtrqP57F2tUXrdM7B28ZaxeoQapCbeJ4b8itFZ8wHdWMfMiNT9161tqd8RT9Tzy",
  "key23": "RUJ7jVXLxQvrJuSeP3FQnMGPmnD6V5RFBbmkJv7JZ4S6HTS3qDJEkBaER38Ybq64toU7S2cAvuH9iTs6MLu2idu",
  "key24": "q2ne1f2X38g31vKRx9rarepMa5pHwM33CMviCZmMuxjzvWnaGN3cVnjGC9U2yGGrxgn9Ebxy1XtGBisaqFDzUpN",
  "key25": "aZgLKeToGybnKXp4HAHRnbtM8bFzD5Tm1u6xGA9JAwkSCHZg6LGACFqnrkKmgCUWf7PxxTnE51PXqL2fzyJsY4R",
  "key26": "76t73e1U2G4VQuYESAptsLn9WCSrJ6DwMYLvEZbGh1CrQexdVm58nf68riuRQYRuTdYPCduMMCpuckk58CtwrJ9",
  "key27": "5eNBhT4SDoHefg1ftW9CaNPFj15JpdGBaX4ybwR72bmzF8vBSYyKgR28BW3orguYwwxkfo59rSQhNNMkwbF62uyW",
  "key28": "581chbohirXFimoWGGjz8o9275GCmTAwqWNmiH4X1jFrQqXjeZfAky4tr5HdFxYNVPzTcSxSgW9HNbxcivmdpdBL",
  "key29": "9g1YtQADLf2WDnExFLj21kxJnx9Fqd78P9YVLhMgrEp6D43U4SBjnGUwV1BM6SYxUZfvP52KhZFTBTAjmWfc1Nw",
  "key30": "3dtX7c3fDNnRXZSFWtpoBAG4rNjAWZjgLweAshVjNwVikfPeiLPMzcyBQoQzgvFL8RSVBW3Pf9zDURAfXgJfwTnG",
  "key31": "3EjoxC5ScnNGnhbGNWXy6sVTrxymHBK4svHU6V6qDWr3hQfZdV2xgTGae7S87rmUF4KuRnPXZ7tWCHomtXH9EUqm",
  "key32": "3NY6jYxjbpRXshkdGqUmBZFtuo9RFhiPyUYHmpZpVde4ph4DSyrC8PLgCRo4VZQnyoLzZuwHqLEbXSLLkixLE147",
  "key33": "5d8XAqK27JWosi5C7EygMNVqGj1D5SMkAvPR9r86q82dUnMmDte6QzYmVaWdePj8rXTRLNXcHUQk1vbyJry9dtrx",
  "key34": "57QP4HiqBm3bNTQDekbEw712EgJbSjn5t54WFYvvh1LnmqzWHWG74sSSBnD4Mn72JsdRDNLc7vuzAhJze7fizwVz",
  "key35": "3whWZ4aX7G46sUQ6UrdvGqbT9bitQhZwgmbNJDfRAubvyW2jmr91edpsg616UvKJvfewtGd6zUdPV6WZwUXDEg7d"
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
