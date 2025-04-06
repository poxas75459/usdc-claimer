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
    "rJGnEWoKgEouHTs3m3DfYn3aY1wLVPDcmzg4tBnDZdt39BKhSUeVzWoxxNd3B9phNT624jzXiF8B7bHkwdzoGJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45xgHAzp8Y3Q7pxUMEJTd2aJpjBi4336FqBd8ctPzpuaXBMvJRT1vUJypCqYU8WZHS3xF6kKPt38vSReNfUpJ9bt",
  "key1": "3hEqmgKbsM7b28W85QFUycCc975sVa2a87A6t8qmkq6RyUm6rW8329pcTaeM766m93QzJ5WVtPpcyx5TZpCzqvjF",
  "key2": "29doSQdEqerMYDUBpaNY3VGvPPQHqEpjxdRmDxmENy9udA992exTStF2Sv1gu8ayF241Nxu6yx9S6M8vL1iqaNMy",
  "key3": "35hc81U3tpBE7M7DsMYYeyrsG8YUn1pHxZMRsJuQ9A6ai2XTqDZcYywtPEGySnsyz6MKo5ThUvfukcdmtQucRjpN",
  "key4": "3rkGa7NkdCvMJ2EjyRemUwtXXoYMF9F15E8uLRUZE4a2STU88Xjuf8fSYNqL2wRQhxwArHMEk4aD7jtUUa6GsKbb",
  "key5": "4mPbUEzTbnurdRAP2ovMVoZVkxV6czN8PrEPeSRPW7sWKKLeTYUftcgxdS5TQYTDTeUYYfbesF66bXKHhxeZeTLo",
  "key6": "2d4xJpHMDgrrZGWmpC5yfVe8AqF8VEmFrVaWxQViGwS5MT2VeVSpoYo3CcFA4EbvgfrUvCyCSjMQFuUrj4YZopvy",
  "key7": "5zR84Ce4tozSdbdwNrNWfqYZkfr5T1ZENAGSpjcEBN6tdSZQyZGh9oSdKhdBauvtTMS8fakHbXVY2JH4RMQB7diy",
  "key8": "428We9uEAdNYbBQnNNsQzoDDAuKfF2U1qGZaN4GUdh57dGrfDiMhWgVR1wK3jmHHjNUWPeuuTByJPMfE9hoxzS8d",
  "key9": "65VfEq9fMucYdbPmJHQbjReqNo1TZzxBHQAbjRYvBrehW3km6M76zh8hF99HKrHFeFZb78Csp6CCKnRiaSCgkAag",
  "key10": "QFbKK7m7GR1Ld6w39BUw2dJQSUKu5sqGVuZDGHY8kwd6yoCEd7c5ERNFRChxnLPPncim7ypcm2yzTZ8e1s5A2Kz",
  "key11": "29ZfPgaqxDXGEHLxfPRvqovguYbmnpJvvVo4EJbHKnyszm62gbboqLA6Yc7v7CpWEV8YFx1Qx4JnRknQZJ4qDoJq",
  "key12": "4JppdPQ24TyrRQ1QDd3outqXu4NryfcTXxR2eTfreCmrX8Q7q9JGwffKAcc7FnxqA7EVNZ9Z27zg6en1kCNaJuLt",
  "key13": "62qWAFaNYbHkcmaHxnrQneka1F68z2hU55DtZjPuDzLBMH8q6xZ8CCi1ztPT37t6W61XJ4hGzScjdtDtDRUUSJhz",
  "key14": "n71cE2VaVXY24hbYruy1RfAUC1dbCGt7KGeqstVyR5XpQawuU6QNQ1hbR7VuB1u7gsfyBhHTcnDp542e5HMbTko",
  "key15": "PTfiPsUeEC2a9eA5hNWmXh7aUvpupUMNueTBNbRE7kgz7eEy2ovA91JYQG5wvoiPRxR8nERfFBiMoDgTrVrW29M",
  "key16": "3XcCNnzKLTZn1bpt6t4xZYHUteBnsSxaHNcPWxWzYWYrtLY47uLZA5hE1VMyUfsiPi7XZgo7N3xkw6fm628fubjC",
  "key17": "34BZMGcLjMUsZH6kVcSYeyGsTDgKes84iZpjhKbGcV3meUBgpPuhm8MDL8rrWETBDWSv9x37iUmFE6azfeaSetFH",
  "key18": "62Cs8hLF3jyb8sBc32A8gfWEwNbEgK4ZwCq6xJCFLbTie1bVDHcekqQ7Awv7eDLECviG3NL4N5ryAUtHLgg2W2PE",
  "key19": "3DD2mBPWgQzG13dbxCGAZGDVrXSYChfx7FBfTDtkCsEXhL7yNiwmrhQo4sSBmUMakaMjNinCLkExtMzHxr51HhRE",
  "key20": "4BdvhZyUMvPSEsDJqaz1DYFC5XMDYMuvt468ABRd5uRtCyizMm9J5pwjxLw4Yq5nFAXwWZjjeDooxAS6a4BQRgD7",
  "key21": "5zaAXTmneG56Sdf8KKVkFXCXXGHgJqnRQeeVFpoWg9DRygVB5QPKxxXrXqKrHPWzydeihD6cygUjvN9UifGVHfzS",
  "key22": "26oEAmhM16Ad28r759kwahSENNTKV7xLzQ5sXA1nakTP515yC49WSnv81coDQ1NJ2ci8h1WQZP4b9AtsTR4xxBwF",
  "key23": "45E2hvPW6oobL91N3HhxmjY6BFo5YxZuzJUNmDt8rD5MVRKcjd43Jzka54w1wJzNAxUw26SNZkXAESxe8V9L3b2S",
  "key24": "M695ff5jEJyARNxYqBs3NXr47D6DTUXNmcVf9j2qvwXcTfHjK9evXFa9LLVydFjeWtKX42CM5SRpkkpnQzQ1xQN",
  "key25": "5mJKxhkDy4KUt3UKUEriD9vhzKh7fYPRrfLgFyuKD2XcfjWkUtW1kjSzjsPrZKhECUX6NsGHFCQZzhdRjNqk9YUk",
  "key26": "2b4EzpVtm6NeiN4TazNxWQsqsHfFkgrqgk8PEAD8o9aF5wmk7DjAysFs5NdchdanBe9gjfWKUNckCQzwHjdskbed",
  "key27": "5Qm2gj2cQSCAJaY9n8SWmMCi57mctuQewuYL6fzQZfVicEfiFV7vTdL3ZywjXXeMycgEePTK5TUdYnzDq8jyrxDJ",
  "key28": "5iEfdRobGxLKFA257YgtKApAAwvYGAaee8qqfW8nZ93EvC6XKVTVCfzrGowGdLnobuuspjdHqjvovgvhSnKtNb5e",
  "key29": "38XmNBEKFn1JQAusQ4SxFnDsGyZYY2JVdX1UFifsmC42jGQicjuk17AEadR8BjPcdLTspWPyMvJXrvpqXdyfux9D",
  "key30": "4dk6rSQoNYFz43xvWFM9fvN5qeTFUo7boJSzcbg49JGyKWo9xGy6x98Z8DrdkVbpNkRuzY2nPvwZFwKCfAixNEzm",
  "key31": "4ENCTyXqsQkhAAyM2aKsinuxT9AAh2QQpyLGe6fq98rZ3FdgFP2JAFAT1wr9KNq4dLU8SQQG3NT8MxRggEP1Gedr",
  "key32": "5uMauxeyD2LGhMScRSce6sKpgnf335vXMtVi4Z65gpY47oVxx3a6NUeKRhgjWdxz55tBaShEHwxhuY6sg137Lig2",
  "key33": "49kedcD5sKajLt1njvYzBFbSVwj2jPNesPRNbiDBD2vLtaY4F64wj5VQZwegfJ5GoMDnAzLxTiM5YNMSxuC5cShY",
  "key34": "4KvcMUhzCRbFcsfkCY5hLhYL3iKVAFpMmoXiqv4jmY6LbbYj7fUcaUK1AJnXDP82VHFUy4x94k2ZLLnzQa6R6b2r",
  "key35": "mjRLjN9BEMw676YX7tq6Qribsiwp66kupi8dYoff5VvQkcoKefh2TnjEhaJ6Qjo9GjVyMPyTCz1NLPntSCQmgmb",
  "key36": "4UXbVhHNwXhwaKE7RTt43ZVE4GUyNL7RxavNto5P3GC93p5tHYdSWiCqVqFcD39K9FURDugjmZyqraYJjFkD4xpa",
  "key37": "5Cw3b6qSde4cXq7vuh1kefcbKknajQ2ohikbhzUb6o3hohCEeLrwUi328U4SZZtpZaCRUgSXjS1QVW2pECtQASaJ",
  "key38": "UqUaVy2TG9yZUPLEpCsy23jb4jA8TTyv92yYceAhrhXpAFgZ1A78czvy1C3hVVDS8x7vMP8MxqEDUfPTytaWFfm",
  "key39": "34UPffZPAqHePYdekpDadEKEdpKKzTz3HrAJEcyE2hTgTSFjQqYYk8jH1xevpr5wCpVTiB4Ukiz3EkywV7oFtBXW",
  "key40": "5iNC8kZJBJxX38KAiWvhb1pGzNuuEgGrQJtYTDHw6iZKh8WbJue2y26rWQWRcnL5W7zVzBtNR18y1QNPY1UsXhnF",
  "key41": "5gTTs5EaecWG9SseeVYrm32a2RXXQAgpfWT9P2dWLeTMPEvkvrBUiBSwg1CWR1FqjR8WxTtsbrzBFop76oGyd1YV",
  "key42": "3i7nm7v2SFpqr1ECfErzg2Hdf6QSR83zY811iM5yZbHJnMTK49dccNzTehNFevVfSuVXyumfLQ7kCX9g7CbTPHnu",
  "key43": "28iqMzxeZw82L4iGhHAFXTX8ekFCD1snSQjgRviaeYGpJGrHf67UKztmHx8NhfUpqmNrMnJa1VoexAC3HYT7MHA3"
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
