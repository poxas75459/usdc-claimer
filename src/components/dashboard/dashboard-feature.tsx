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
    "3EwKHGmRBrBoADRpoHtDz7UwWt1SRUf3R64dpvKxo2Nry5yuL7cQVnsiwMiBYgD2PXMnZYaa5ZhzESNHpo9h9QVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Unu8evhGxGSaRJz5spjwwcUv2SoP4i6GhGJG23aZu4Nk8goY9JVw8Yuhs5cFYcARS1Nd7NYtSkFjBCXdRfVJ9bH",
  "key1": "32EounfhGhfypwuoAmJo3PXNm1DcKyVn2gNSV9hovNimikATLjPkGGPZBqGnF3kN42s7NPBKebYaUgHbJPfKvuqW",
  "key2": "iysi7rk2WvTbMUq88ZnCveAiGbFKMdtQsaZM4wvNZV5ijAJdpagTJomrUE7RH27PL1D85Rn4gvwYSfih3AHDmUr",
  "key3": "3hqRKQzhrqvpPjtis2sn5jGNWGZbMrJBUjoU5nta692gSQFcRGesmoYx67EYagaW7dCnjzo4DXmyZRb2vFC4LGuN",
  "key4": "4k5vZtE4rMTXZE2pW4LuRUs7ZP1Yqv6wLMNsZnym3BohQW2aLaB991pUfUUsrEjgoUcJUch1w4ckeCPZFKD3pWmZ",
  "key5": "LahcMvgEYPtuoGLgB46hZNshMAuwFBBEtfWSyhzUeQ9qokw1sARLUK8BfUkTybeRtSVWerg6bRtsQs2pQ41n68W",
  "key6": "3YsUayProKfgbPbynZ5W9RpD3QZof9d1VHWeeHARYnodLXSZ5G6HBo9kEf5K55zpbFmFzVrbuQpscGMmD8P2fBMS",
  "key7": "2g9YFtMP4MaYi7Gpn1NrKCcRCwjnLVQxqB2zTXiP6eSHqvst8VXg4HR2rySbiepe754id7NnM2sC7UVVHvdH2wS6",
  "key8": "53wSB39MLmKo3vD44nJMgBC5X9UWqRVTcSEeAc3zRAapjziWtRNhjDJFMMssMy8qdZQpFc38LsB2kpUuyQLS2AT5",
  "key9": "c5yo1ApejvCzVXc4SG49pP4CEZAu2skfGhEwAdzrM3p5Wtfuy5cXpb75LR5mdpRrikg66MX29rA8RmUaEM27QxG",
  "key10": "UZY6m7yw2eFUAmYLCrpRqQX7uJjrDjCJdjz9HVmJc7Hh1kbMMyMQapQ89hPo8E5HNpsQvQyGJp5MCnZapPPAVQY",
  "key11": "236xk4zrtgesQY6mH8bs2GfFiiteWaXg7yJ5d8oMQ2WPNVaR5HMPY4uzWVed2qXMRb8ioaEWgE7XFiv9YmDzLLgF",
  "key12": "3ck2gU5Kw1dFfV1KSfLA3qu5bn3f3rdwF2T53sycP1sjUGERdkky2Xz81TKiksD9ntHbMG3fjg7TYuActGaRgNnw",
  "key13": "aDzVLtUHFTxCxRt8vTVhWDPAxsbZwkyF4BCRVyDbPFm3hU7G4b9B7mXczBySsM4Q8DVg4SHaAvDWfwGPtCS4SQz",
  "key14": "5MdAJSBzMKr1ya2wjcULqLYDk9gkkDgnagEWgbvfpNT2Am6rdzGAkxCcdy3VBmhvD7Ewcpz3WPh4AT5j5setkpMn",
  "key15": "2MnnWoHyBtJkSdtjoYECEeAVCLL1C3Tcvk8SpFfPFS7x1pV72EJUFe68SpKQPbBGHnhNCtJLtvapsaFR1gaQCc5K",
  "key16": "5tCaDP4R2GiMgf53yTNPQDGoh9Di6BmZMfyFvLxFP9uaDrdRQP3B34ZTCsUP5MaewfWoZNouVZCdY4g6ZLgc6g8i",
  "key17": "2aXPRPGXwCNeiYP2x4Hj8FHTRKWadrv2rxcyvytoEdyFYXxYorC1tv11pRmMFaQXxT5e3tQGmiPGv2UxiNb5MH2G",
  "key18": "5P23vkYY87uvxCF6yGwmyr1z4tCzHEod69LmZBvBWmzXgXeGk4nseWpYECTS1ZQfEnpHaLLJhgFn23D7kuVfb7J4",
  "key19": "WPFHiqPKuRX4H1sk6xunwGATa7RxDfEkpmegzJjmjUMN7FAV5wbLzGXiZkgm7wMaX6ABsujwyALDfvxorrLvjhE",
  "key20": "2NTvVvJ6xkmQAM5ww27asMNYaY7LqpqLzU6Uy3HKrDK9wUop79NgE8sbUrh4ygf4y5Gr41anDC94btPLFcdE4EN5",
  "key21": "91QK6dyXKdWDziMEbARam2syV7ysYCL2SSQz6YcUWiJE2eWNgdubt7b1fj9KTB7LkZF6wVUBb4G7ovssCxMKya2",
  "key22": "5UWrUhPvvexykQ4P8Cr9vAu9Tkv3iTeX8SbFNrrikeRGTeX9niFtNTqTXk4UgenkUEKnpkRGM5xeT3qSuhebqS2b",
  "key23": "2bHgGTcmnuTVv1RDBeLRBMVreRYmqj5RttRMwyKGcDTxDsPctKqTxyK2LthFdvDbZskaxxA5vFVeVbcWGypnYjtF",
  "key24": "TJtUVp3sDwpDi6ssurAstmbmHuudrzEE32b8b8zAQ792zFb6R47NRoSVMV5SH75oR6NLJPqB8cJ5aQ4hQ1MP6D2",
  "key25": "2e4LHfVzNVxBDtdTB4GZKdLmCdUJrXZE2bqvoQRWoYk1VMFYCYSMRG9h2uPQWNG5hPb8Wbg4iny3AVa3QEoqjyV6",
  "key26": "hYP7tB3QkA4Nb2VupPSKKbYirKXWStf1fDV5rKc7GAjKakNAXQ8XTuRuvC782v3bfVnfMkfQqePC9aCcPHxZc4z",
  "key27": "XfQeWKFUzyvEr1k8mGjUdxdMFrqorFgnot8Nk6Qi8dxxpFZoo8kk741u37ff8DtYFFKWQc4LaFHJZFsCdsfnmBB",
  "key28": "3VFdjK5RXvbQRA6minsSDibg4r9yfvjg6d1gzKAy5b99wS4zDr7Kgp95NQJuyjRYLkm9qB3x6CYeAyHkUK9dFkEb",
  "key29": "5bGcW29bMGf2HLityUa5oXNmSEpH7bX2rmohqwbaAHmPqpCHcAgZt6zZXZhQYcaYmerkSaNeqybNrLZY3Lu2HRFq",
  "key30": "4Twznybd5w5JxL7K1vNHxWofCQZ9Zkf6oDN6m8aSG6GcMuws4zvsV7int8DCMAnroXJ1yrGHuS9sMSUBvsSRoYD7",
  "key31": "4Xn3uwc5iqcugdBV3KTp6Vr7T57PvFboYzBxx9e9owAXj7tfzwtbhpdZ8drNU9PNaffAbucfeK6ebcfq6TZmPsbh",
  "key32": "2bX1eq9dBd9E4VN7uoBvBFpJpkdQ1r4ZGmfm2w1hKe4mEhQr8kZLDBsQNqFU4rQmXn5VZVNCRLSwXSpZH3fjDYot",
  "key33": "3skDnhYi9APRPn2UhiUhYPmi4piMdVdzcjvXgCmxPMLvaSitYGX6Ybvxbg7LFUxfVRTdGjf1iJpAPjZQ1YLyC4LF",
  "key34": "5ve4S57yjtWHxhm7J4p5U9tmh7vPCKLqMZ3Nf5cC7sqijsbi88e5XW6pGixpK1F9XekasTMQYBmgj2T2WUWhYE1k",
  "key35": "ACBeXnWrmGidkYftL6DNm9qfzynYaSVv4kE2TuQ4t1yZYQWiSCB8f7fgxJVgMRDR7yDKvnH99Qf58qU58kUn1ST",
  "key36": "3fJHB3cqH8QW7zysP4EPeEsotMeesL6XshMKrB3sGGYVsBVhU1irysYAWx3vjvMX6px39rQUsmK9PWDsJ1td1uni",
  "key37": "28MiQwj2MZJKVSwdxYbXJUKZAWwXoUssgcucjYRKchWJCgqa8emYrj13PVZ1qaYKvX1dDP2bDsxfynyaqWwhKADi",
  "key38": "35CMie8YHavMad15Fb3zzvPJKH8QVixdYLbCcE9QjBayqCnfgD9m1eFiRFKLMfnAn9sbQUsLswzGNitCzg2EbgwM",
  "key39": "2r5GQFx5F8WoLbNbs4cRA6W2mftJZ8VLiCJ3YTAXe3qwqCLtubz8sudckd3AbCsDs3TMHE3i97Wdy1Hr9s8qs1AW",
  "key40": "4v6dGaLsYzipLBePoCrTxtaSvdUkjfTyxEVoMt1aHgqnU8s3buRhzmqUbji6rD3JXLbRigTXZiajHBZ15HQtwifr",
  "key41": "65rqysKTSqjYw5eX3bf9nqRnDZa3SKzB1qW6xF7DfZPo1WdvRheWVs1tDpYBusti89g1fzpCg11k2uGRVEokPfux",
  "key42": "38L5yanut8ma7X87eTbrgv8s3TRCtPK6mQgqzeMRxa9JgNJ38kw9g6WrL8k8yR9Wa7HFfwjevUFnvZzCx1511T7t",
  "key43": "636QonNLDLtqhhfmWf3TFQBWjsTE94eJ12D4wffS4yW4v3mfWbwQLimtZZWX79ebXzJTxHRuWDgh4xRY44jm4gok",
  "key44": "3koynp4MaJoBsLS9HLTJG3g6f7s3ZJsqoT9APUiLwP5NA4oLuZT9gcrHnXBXGJMw4xEso1rvGwwvVnHw9ePVq3oH"
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
