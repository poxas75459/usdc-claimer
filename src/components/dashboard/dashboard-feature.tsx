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
    "zHXvttqxT9ocVwm4MCtXvLhGR4b8jDCS2hwKGuZWkA1SYBvejDU7VXeYLFc8h2bYddpyR2p8zpEprwLFfPDhcbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9xuZcaE5BuztKNrcDiuqyWn5P6TcMow8tgUAvtuP9GDEbh1Haue3uBCL8jKFqeQSQPiw7TZWyLnMj6XHg7W7Q3E",
  "key1": "4r9NeKN3wefaUGVEm2aQfyED6cFzkMv5fdqziE1kJUCwBP8C1bH4QvCYC1aoy7Xpqqsrv3Kr25my3NQLNRBx1Qun",
  "key2": "5hTRzyuy7pg3qSHSSuPUeAFBT6JCqkRpmfPVG2QGGg8bTNxgFtWiHVntqxhAcfXWKhHwf5ch9ftqGox9moRtBx1M",
  "key3": "47zPj6d8Xa5XpGfhxsxmFKKY4CKHzxxay3NJHTQttymXcGfVcBjpBbapRHH4aXEnm2Mr8tmN2d5fiUvPXE4WYKqR",
  "key4": "2DK47hR8eT7vWbC6rZepWjb9KN3QdKn31K3PzC7XgD5Uzs9ZvCM5UJcaioispmNepi28KcsGuAYnDKdPFNTSmZKA",
  "key5": "KLqPYi54MG75Bfho7UN84gjh8sTnjdHSqQMRjBmJiPvWbStJo99DqDp4KaD4cznLPRg7n9uowHM3xMELCsz3TB4",
  "key6": "4ctDUihQ1iq1AKdmjxzMXdALDazrAM3GQjDnki4odYMJJFCVorvcsCcMyzsjSZaK5FJvwtVQoQSic1LYAAWVmRsc",
  "key7": "3j4QTHhdRk6NgEeXoeKsz8zPD8cCYeRU4wywF4eKHJvCUXBYSVgXdGgp7wvTFboWVW72t1x8keAYXeMJm2seZghJ",
  "key8": "7d5vVVyUZ6vjueUiF77ZFVMo75PVv8Y2DRDPhs1LLhKjNjJV37AfWt8RSKDJCHi1jHrCKViUsjYufZnywNDqx96",
  "key9": "2njUczXhxfpYNzmh4Z4XrSMebPzkm7Qts33oTPcjJkahwYXVmyJuNd3ka4GyMct26ProsVkubdZvM2PRGVpKcTZn",
  "key10": "49sPwX4bMLyxmy8cUneDctaEVWFDypPgVh91meBwdbdrdTnUMBhurQBzj9xmYS9JJ3UC5iyaQCfQnVTW6sPS2Zi2",
  "key11": "4dJguXVi4TuDAHam4bMs8gueL2vjBYXCaTHjJGu7aBgB53MeptDxSSDGJr6eerhaNYwTzRWWQfWFxo345g8iBcGG",
  "key12": "57FcDJsVFNENT4jX7QdBqrZ9o6E4U7tdsqS3WAA4RR2z8wsgnwxtYVB7NJQYiDW35WzbZ2GabA6LT1QFeeAgPgw1",
  "key13": "4ufrqExPZ3tZZcyQfWCYKFNNQT8u2Kg2XAhFevxD9WnqopYYnaUSjeDVoJeu31QVdzmErUyafEzqVAZ98b6kXMNs",
  "key14": "55UhWmuWcn6ap6Nwr9UqpvhDZoPKvLZEA9pTu4BYJpVUP7ckcfYKz1fd6xD9K9q5sU523jMFYJZdcLzJ84Mk4fqw",
  "key15": "YJYQ3YqsLNkmo1KAMeMfwp1Nm9shiPkAyzikkzToCkes7KanMGFfMmHybjtdevrp7DotjYS8VCRV5skMY31CQGU",
  "key16": "4keeFH3wVm9EZUAZsnJYBgbJEHCw7zsno3bKsjA7SdBDVogZrvmo9rH8FH5DkXrJt3HPSr9EKQLBrNK61fcjbKG1",
  "key17": "3CzhDjShzRxW95aYf7WqZsYe3eZn9fhrYsvhJw9TQ7xcr7XdRPaKsPbbGts4rdtmHzvrYv9fFGBovxvA3Hmc3WvG",
  "key18": "Np55brmPrvL5m1uJ6P1uMAeFwgRzN9EeCkgkaG5r4WwQWnhu2yabdx3LcdxMKRwZGXqwCL6G69rqjhx6KuKiZ1R",
  "key19": "5q1DHTq8dwoxdSDgqLnkUwM2XqnYodqBkNDkh62o9aGuwTkH5EpSHqe1QVDF5GxfRvLgJ6eSNvXDWi7X1xmj3cXF",
  "key20": "5T6ieCRFqRgcAngGVKZRiRPxF8cWo9jnc6nKTLRTN1GqewhDqQLqvwWjqdD5ckYfLzrozCAn3LkYbfAerypz6R3Y",
  "key21": "3AY4g3jCb738BR4eWCfJf3R3p5nCDpHHxyJkouTriJM1NwapKTy3dQiyHc3BPmxM9bj3RqzxJCHBXKXWMZKGjYLr",
  "key22": "2AaC5fvJpzKrZoYwpGX1Tr5oG6mxraECi9YPqizmerUM6xMCX68XaSfeqciELGupP8vztNbz7RATgFJde91AYkSP",
  "key23": "3A41Y64NyeEyUY43mwsHBnCLZBim6ZD9pNBB6hXWKMTnKk1aLX9QhnyaEAjaFSZK1wjH6k2BHZ39LzwdBUdjitUD",
  "key24": "2s2nDstHDDLoZjVkWYAhGu9SiUDB2ChHWrLHqb4Cgz4BPqsVzJXSgTp1NDjjyGAKou6aSUTqL3vu5S2QqZGuKbzn",
  "key25": "21DN2vVcLUy75qCds12Kt3aPrPJ5grVtUxNhHG67Eixbfz9ZLBy5A1LjHxLFK7kzKjSGjgg8cLNucyKNVkpGPWYe",
  "key26": "kM3UVHhtNVgkbJ2PPeCr9ciA4WNq6hEJe3KtQCWiiYQWRw5BCZtsoed9h8opZEL1sWKbo47mq2ukF48vtLuxnem",
  "key27": "NcvJip1Rh1AeCjUKrdZaZ6y3YJU5ug4zv6iVhnQWj79DmbqrAfbkGm3WtpyguAHN6mAEMatqdHttoxHzvX9NZ72",
  "key28": "39ETJBP7kpmASarbWWXFaUoSZoAy7VLtjKciQ1wjUW3nBvyRaTkrS9jiJUMZTcM5AG127HwfbwkDxjRrkfzg4XNP",
  "key29": "58pdyAjYTgdA4YTzX6fhw9SERXVknYrQ8GAqBU71dnBSqMGNXTzEmLMEX4cgYzNdVnAdCaSzQN88yWFX23gUffWs",
  "key30": "2NBp2doXhNrxSp3vfnVUPhbC8iFVfGRv1PKigfGA5xyiqU671xwZZmLxahPKHTCtsBX7x7Nwh8TanR8gnTcbZh7G",
  "key31": "5UtunRA589MToSSPr2mF2G25WXaEjYxpJCzkufu1wJga6Bpdw2DPzTcHXxK6ntX5Ku375ReGeMBsaAP1UiokpdDb",
  "key32": "41uunHvvBtKs1As3wBLBTakezspnefeUvEnc2Pak45xbyBXyXkCrwVZSV7i4KeRVRQAzz6vcCXqrPVCcc8i1dGhM",
  "key33": "J5UvFMExqPW1smiKtxg1s6CtqAuTev4jHzZuS6qmVgy6BprCnmrK5JpkFmP2dApWGRZZRBjrhKiXsf2p4zGNtvE"
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
