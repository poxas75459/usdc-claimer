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
    "228UD62B5KKdzhzZQCQ6k1Ljq47MHtsRhx71jd1SpgfFPFXjGxcqxp8TZdAwRTqMojM4EmAu4fauY5k6dF4Lao3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dbRSVai48SAUZfgbYSoFVLrsXpeYBib1hfCGdz5iRvD51oCd9nDGXXePizuSZor8NhGumXbVvMu1eTYHC6A2VZN",
  "key1": "49rGsZzmM9Fk9PR8CaKerB3FCdYxHU8HJ7eDLcEAbttvg1psqyiphvuv56ANYnJhsb9aFMQw1RyquQ7fu8YJpeuH",
  "key2": "4zEFNwq1X8v5nkUj7ejKaw7N2x5uXY9wm6fwTpvsrEQRwjymh33NcoKHjizbLqgWdj9bdfBKJ43KGzigsDsPVwhJ",
  "key3": "4AbECyAzne4ALKxzCZvjsTQiuRf3CrRvx2mbmALciJ5wbpA9neSfLiDcd4RuwrL5C3P7dTBryGXDnpPR9v3sThcD",
  "key4": "c35BmDWS4Apvs9fBvQ3NCbjpkijMWrVUsr4NCm7Fu7NWpEcV5WJG2SvdcHqvAVzD2DWT9ApBy6UGnucEPhqzEHz",
  "key5": "2YcjpusksZVTGanE9Zi8F2LTQgFz5v41XqA3mKwSopJ25fEjLN2BasjFEuWCtU35xbNMryau5TxqYLAdgumhzoBm",
  "key6": "4vG3nUQizTm17CG3Rbfa9GJPjax2WbACp7MRA9TLPxS1PEttv62wWVT4Zv5QvhhEyP5xJ1em817Qfrx6F6WxGxhF",
  "key7": "5WZGk9NJQEVMqWqh5cqGn8zGj3oXUWdgEroTCe9tksZh7vGoxuJprKTgH3eGYyf2tLbsDpwS5jki19PJ3cgg4ekH",
  "key8": "4sCFAd8DXJsQY7CnxcNQJpt7mQMTybgMPdFXajG1fviwoFYbZEsAsVASV6RvZP9F6ondyz8NgAHgHcyaQzaqHFaw",
  "key9": "3XYivPaK7vsfijiXW4sh58dZBShtBGzVZ9ngA5CfFVLc3jb1xVAuow5ZF6QeFhgUJbT2yrwGcWcWezBsHVJCE9ha",
  "key10": "47w82xyfViZQQt11bBikS8Jr8gCt3fzNwrbubrsbuV61TCyE5fSZStENH6fUdXZUSkmBkKoKxCQdLdUoDThH56sC",
  "key11": "4b9en8XkD3CiT41c5C3hPGX8kMmZ5JH3o2SKsDiFJ66T2U7puuZAChzjwZFYjLA6W2c78r5V7BJJ2AYnupmgq24Z",
  "key12": "4RvyxRocDDyFoLfALeA6uo8qjH2dh5zM7q3eqCCRaQEzrCFS8SnmBqr3YcdSfCjHYY4SftnREwRWkXDcLByerds4",
  "key13": "4YHu2cRpFgBdWQA8qWt5tsNk5Qvpi8MYkLujuuDQmj5j8nFvibMX95LU7341CinPVVFiRn789U8oAvut5fxRrChL",
  "key14": "5kV2os1R2QqnGXbtY62hRzxRPu4mbezpQd6Co7LEdKLbZ6rS8h9brx83Hg1Thxsv4CcC4aPULSKmeMN1RVxffx7i",
  "key15": "qfF3frqZ4XBh1UREPG1jbFNLK2AaKdiDZauVEZq7D5MXSV3QZx85rrRM3DPXoDqZBzQ4YTBRTj7aaLJ8jfhQE93",
  "key16": "3MvQnU6c8gLPsxWyGZ4KFrjw4tejJxEeGk9ZZ1bF3oborMVpSMmNEQ6obG8oZZ55jiPNbHqYicHCRnB1nKSQ8E5d",
  "key17": "3htUetP1ZqtSHTvkDbrRa236k52KM7m63fBxEy2aGWmsdCrKovUpWPTLk8yqCiTfeLwTF7hPF4b9w4Pc61JXNaW9",
  "key18": "52j6JacWsbM1WAkL4uSncVKossxTxv31c1sugxsFvfcsMDEnWn4gjJPbP4UAya16Po4sMDbJPAM4oMou7WZwQSBg",
  "key19": "4F1n21UxjUzkYj64SxeRVsbSHVHPJLCM19UBx55ASvWqyNX13ZTLdDZawfzu5TS3Ye8g7FuEoHmqbyx2jGvQHsAq",
  "key20": "txpCxsrpAM6sWeu3arDrndxFkrKCL85GXgdSTqAkURjPViZRFpGhULV5KhzmCBJm4j2bR72tQAj3Ptegh4oABeo",
  "key21": "4ae41aPwpnq6MsySEMHnSFJcfq7M8SndjEu62BguWwwaT91CejmjzePJiABN6SEjfwWmz6tdhc2ZMLsj9234gowP",
  "key22": "66RvVnXBeFhGGkwbDh5kPKgZPjSMrucYkNJD6fc3FmhhhmF1AYb13Mqz5g41Sr99EXJbyc4Tf9yt4v9hW6cPDz3a",
  "key23": "5fxbMcA81aPp4d2xuPRBsUTtSp5HSz9h5X96nQpam9UapFe7LRwvXFXV6ASH8oUWiHaoU8Vap5NZ59RvnYVhzGRn",
  "key24": "3v4RXwvjspUW6Ub5FYRU4f347jjz4Z9EA7H9gUAcHxstXy2U7XmpdQPedof8Ri8HYuoeT2yDGn9TDR572XHANtHW",
  "key25": "2da951Xcrfs2o5RYNpJocfN4VxjS2Hod8sEdjeacUZZ9BSJdPrazvjz7DQT3VrGsfKF2Dv8HuKShYMv3HwTmXDxb",
  "key26": "4fbmHGXQUNVrmv7scXXuKDQsKjrTse6pUNLGpq16DLUQ3TTKkC48b5zRLDtfumJgPfEWEqrNHkVNhhF6gwhKQGY",
  "key27": "97v22FWTumz8uWjvtqugnZcnbyWTiXEsYXb3ByCWEbm96L7bbDxmkAjst1NxBnx5NvyBzfSE7iinETAYFgEK8js",
  "key28": "hTUFsaAuGGPjoEQcNoBtm2zq9mCJv7qa7naxRdPhYXfPMXMbbPGCB8xuPkApY2CXvdhZiFuTmdtmnM1wWjKGjCb",
  "key29": "43rhXJtQ7CRaGBKunx7YrZjMxy6wjAytMcX8rhrimyPGkCrsXhbd6FfC3oqpuBjQxg2tCPc3vuBgFQ9eAphTYyQu",
  "key30": "Fabg6v3TcKy7tcNyUkR7FfBfkYr2hCzXPwJBmyQRvwWDx6JVWGg2iR9oQTMhssFNYX3W4QT6zfLr8C5CBuhPEvN",
  "key31": "wPTrEVR4aZhfA8gYNvYVUk3JPhDAs23b6dduAgfbptubmp359b3e9PEmg3Ad7eAFzFWDw354csSqfXZpt4Eyvfw",
  "key32": "gF2hzN3NCTZjGwwxL5vbMT5pWZ2KoTs6oVCTSuqtrUrtdAobdwtUsqUQAYETaTXDJnX3nvqg5xLCxpKvtG1GQU1",
  "key33": "4jJXvzuQuhNdrgLK4zmabhZ7a97E1sH3vedbd81ebvVts8bjp2w1eWCgvRb7hzHKtX9a8Eix1NmS6Qyea7NuSvpF",
  "key34": "3qu3U1eipu9WhjxQHVC5yqUaDZfa2Axu9LLDXi6bsPQTzMpoHeUFDm7hBHipDrJq5CJyiETVpzFqPPiA2HQnb2uv",
  "key35": "3iK5RtRuLe7VBrseMNUfzUJEVG4snFCkzHqiJBXbhsEhhEDtAeGa16BiZG2ZNDfUz7yPtCae9PG8NUwUj7nHfVpv",
  "key36": "5fthrfRc3HZHAYjXtk6wJQdnD9XeLQu3W6ci9A17cCRWq1VpvEr72pj2nnZarU2dQcrPx4iAmjtVYqaoKEjMcSxD",
  "key37": "4Hgy8zJ8N7Req1hGHnrMPLLnTd9XiFJDWXAoRTgGvAEasZ5pzYUNZBejJQfX66LVdxnHuNNGs6mc8psNoJUovzeD",
  "key38": "4W2EZBHZipzvWTWHBY2zaF8gC1dXMu7posGp6BpSzLeZjNPz7vvvnZ2XgGm91x8gLqBh6YQ98uT7VYfzjrCEwf7N",
  "key39": "5xZWbsUbLTeW1EZA8XRw1YnGDQvvUzXyR8e7zjdytzm7YXmcKGz9KfffiV5M5M9TNAb8s12Co5D7m3RcQWDyy58D",
  "key40": "4CfrHZ1mShk2kyS8vqdFksAA4sBYeKDyPKWkK2rMiWkYC28wQHRbGuNmx1WGDTAoJcBvdE94wZ7ZcUM4ed38U43D"
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
