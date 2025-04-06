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
    "2SGLuUoku2dGFonx2hi3qJHMBF4QCPjGgd68uokdRr24tcVr6htp9tqah71dYGARWy9sBMRUc4six74pDG1XUK9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5msiemY31LMbC53HCZo59DAPNu8KScMSVkF2yLUHuC6uM9KS5QSP71zN4z8ZqT1uRF8jseXpCtNxVUzWemL5c9CD",
  "key1": "5veDmJ3CNETtFgUji9xqMn9Xk16oxvQoJazzrHpFmKM6k2QZ7Nqx1zWsDSuUwLBfPbSXheFnat2aAfwSHAaHTnkD",
  "key2": "3xxwLhczCHC3VbeHym1GT83PJRYMYNmYXFAfHZXcRZMxSy8pmuwz1jVQEqQhBw7if6YGNpdX5sHzdifk3C99B1LQ",
  "key3": "5TdCzxvwCX2b18AEJkUQuP94aZwvqkwZ2VTB8vhQVDvktYDV7BgKLnDvK5PLzE4rTht1YC3MzajZTnucZDddz2Pq",
  "key4": "5cJjXoQoGNnEwkRjj9u2EyREkEJVRnK84Wuuse15ey45jg5uAuRrJbTg3jAwjvFuM4tmpVLT3Bk7Akdk8xgqGgmM",
  "key5": "4zbmrLWBLo7eWNn1EFZh8GgcvZgBVqQK2cwwKP6NxBi37nKcpz2GnA1VUbp2z89SMQwYdgjFjeoFAMatuhXcRS7T",
  "key6": "36NxNkA4mXvBpSe5YUjmo5Qxwj1Bwsz9nkGViTMdKAPp91vBr9Lex2YifV536ZDimaPidNYHM32JzsAY9iLYkoFM",
  "key7": "4en66BwRNqgK7pyAEVM9j4MbJuYm2aiB5UNsYRyUxsxcWnRhAwaDX5qQiMNHgSkvK59u8bftwVhPUAjV1x8zWZ8C",
  "key8": "Q2rSJckzXQR8yruGQLzhdybCgDFjpFQ8nbzHjYrCvUtX37aUPQzWHu1k7cqe46P6ghcbEXjqkn3b9MAHCTfzFpC",
  "key9": "3VZMsiYZGDjhCW5S82eWZ82ByaRvEcu9nzQmWj2ycAVpwhLqFu9XQi1k3eV1umfCHDBmxib88P31qonGf7cA7RKg",
  "key10": "3pgsbY6tB8yLgU4uwJphgo1f9eVkupB9HPtgnn7pWZEtCpZWNMZy16ZfqaSKzRWiJUTgCaZCoJAdAscrC7p9RNnG",
  "key11": "313DKgxhqSwo5ERwVCYzTuzjkNNeMKMkDUYhVjNqgBxtooXhHKcyMGnCbZKXfzdaZdSoCDttiNR8RHLe7ani7eh3",
  "key12": "5EV5cNhbAUfcwuTc2StrhieDpyzGupqRLaCat9Fht2h9WpFnBfPm1LoM8p8gE3LUD43rdBoDmm22neHht5juW77F",
  "key13": "35hqRfAnQV9TKBcCcLZqM188ihjGhUw4LE2uUGJq3432cL8jtau539dKnVsuGT6km17mfca1spq8yz21m2wSnrte",
  "key14": "4UbqvM69r373skRAf7vaAQhzSUBdzwgg3pNbk4HuDpjrc6nnHVcadrfbAzQSwCTv2Xtk3a6wCGaJ4R8Ve7Vpwsjh",
  "key15": "3nFqK8GJUo5rWP4LEnbxaw3DQiaQuDC4ZWmkxBUcj51b25czQzjJyMCZxuEYyVHqUrVNEBJ6kVqqQXbdUAmr3Yj2",
  "key16": "3adbGWezCbsMLkNtBtnYyCjp75wxnq3PDJYLeTTFWzz6SHuKEkYPz2NKwDiCSBnkKJNG4GTWHCu7fKUthxgs3qAK",
  "key17": "4adDUMTHA9NWmWPK78pRUGjij2rcjxyv78v8oiaLUYt9mjaebmjy4A6SF8HXgENhbWzs9nYWBUvv7h8myUbEJ4t",
  "key18": "2HB9jPvkNJVeTNmLW7gTgzcKY7PWzADXupziapRcMTsyW5P2nkiC4dFLqqCtMSCp7DGXWUL12TSf3zm2bGxJXTAW",
  "key19": "2ubzfviz9XiJ17FhbQvRdgDE7VSzmWtNbpjsynivSY26pNxQQmuabXCzzGnqtd5NysiCnM9zSCkZA5mSs1BdfSKG",
  "key20": "43vFBU7ZRYPFKrbBo9TygHLUNjSbmExPMw3oqqkxY2grVUyKYcXBxfB49JzHf3h2KT1ESeKzmV7doKU2781w8CrU",
  "key21": "5chf7MKbWZ5hBpCvnmzVSh1ppbfsLzK71M4WbV5KF3nNnZm6PiutJ95xAEcrbsHafhphczhCY9wk4iRH1xV4GGmE",
  "key22": "4K13ZNUfv9AuqFSRep8GmoGZyaibA5csD4NsndBNFPfXDTDzdY5TdzYaSSVxr4yLmuAwckdwkipAkqS3XzEPUxqc",
  "key23": "4D2cFB9vSLbX4Gbhzcc5egKN62Ab7WJmeve84uFa5JAWapYBzfgSdQ3YaF4EzRe4Mxd7oh8kEPDiAwLsgPkcvT1i",
  "key24": "4zPH8qx4AD4ivp5TzaxJ5Ze91JA6kMrijFKoW3RWsunHEtiNKT4MZKC14zAX2LwdJWukPq7AGTgbmTc7qHdWz7SX",
  "key25": "2Dg3d2UcDCRcU5xL88CMk7rpajdJPRhR6e4N2BzJx7GvZgEotCSQsnmqBQeXfFcEec9HFqEypvvpYLvDo5DPA63",
  "key26": "5mS1o1UZ4TFn6YiWnMnLbk32yep8BVJk4eipozzQfua9qczW3Nyf9gSL7vkzQ3z3nuF2yNZBw1Hr5Zwhe1wCz4kL",
  "key27": "2xonKztLi2ET4rUf6caixznJjdcmSEEt3edQLSdm9jmkhHzCX9ifjXZ9MQX2jrcSR8Sjhxu76LgioZv4MuT7vpDS",
  "key28": "5XuS9XHm3WzuSGiqDxdBGzs5ESVGLiykd6yoQSckPC9KS3mxckWmaQji1CfFCybu1Pp1Lvopgs2CpMhMpZ1ozFzj",
  "key29": "HjtdtkxTpYnrdfpwtWfN2mJf8zXX17Cm4ZhR9i2MJuBeGmYMxhJ7z2dd7BQw9eEoU9R3Vp5yEr5Ui8Nx7KLFGd2",
  "key30": "2r6TVcUbSVghAnPnno6ch46kKwUQHQxKcpM3GymK3ijs8Ye9Jwoy8Yd862a57TcFa5iTs5fndcyj6ecjLnHWUVdx",
  "key31": "4c7b6XQHjU2PbsiKPYNMKgjoL4DXjZ3j73wRiMCGWa7qzWLef4Tb1zMeMHugc9Xci58TaFZ4daYYVhfHWYD2eSoT",
  "key32": "4t81eUJZfsoP9wbBpBNf8tScqwP5Y3XurMdeQiXcEr77J2rFrDNxUHY5CXVUBtSLdvpBsxkFtr8grcVL22Pdkc25",
  "key33": "4iSwuNiyYHDk1dkhEndq1uudSHTfc2pYpH1ucQGYm2FcogQ2zaSArXrJ5DUZjGyEhjR35Vp9GvRPpHXakVDSGFLT",
  "key34": "AmNTkhdtzFnuT8CcqJDt7CiBc6dtYaEZr2BDxy7tdGiWbit6E6pa3tGY5QLGGLcQEcWEyJXttQG5N97AYNLVkg2",
  "key35": "4y8r7SYkMJjcTxpuQPe7EpUjLctzxomCaperYgz5Uq76W8Xrdw2KLSKwUM38dMcapL9MucLQ59h91Xaj8FincHbC",
  "key36": "3Mx8ttRDT1fHVXr5ggWpN8kn88GxBEFvSr7ryY4HqUvYmjhRYA4n6HmCequivkES9r7pdLU8fHpivCY1QymewsAr"
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
