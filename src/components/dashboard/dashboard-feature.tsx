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
    "3AQaTn2Vy3reAgEbs1hCJNEHcTv2JoXBnDnGAtp4DTXA1KgjM3qti9vmY2rjPDxCye3CteoLB3maRszLz87DM7mL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m9aqKEG6E1K3gSHJYVYuHHUqCSpafvQaFsiZcnvb7ZhEkJAiXwJc27jfvrvoKVrk3bzrWyJsN7CLwutQ7HD1FEJ",
  "key1": "5Sf3Va4tsm9YCn3KSEwZ55geZbHPjzinu9kF5Z1URWq9QSnzHSJZoHsQALxDcgGV7khUeeEvtASL41WsT6Bxs7Af",
  "key2": "3MnG6UANafTVu93Uptg3q69Sqs1eRWH4e7iwW3dsQ5XfF9bWJEAuRxAXiEysK1MothKpE9ujjFngXahCg5D2CTjv",
  "key3": "5PqLJCy59ZB4CCp1Xm3EzX2KyPgfPgV2nrw9SMf48x3ozegqn96Mu7iUw4YTnnZLaPMXmb43FkNBb1XdWUUPRpPD",
  "key4": "49Msr94zbRTLuA8FyP7Cc9na1FnWL6p21B7SvCma98Gbwi6QXQBwaCKjddERdAGLBiHF8GTQUFMHJLvN9fED43Yo",
  "key5": "2X88eosHsa2TbDozkz1fh7a1ijRpQrHCvYDptur8TjCaNMgjjqGZtvcWg7roaDDPJkyRaQEcBrbL9jNdNCihkfy2",
  "key6": "27HfxxyVuL1pydrKsp371wtCaVVFPonJr1M9SXoh5ZGt76b3JJ4E6tJFx5BQ7PFQihkHqKjvxpiGgnosygxgvdNZ",
  "key7": "3EeSb26wV7Fpu3NmtBQ51Mx6tdV28h7SMGfxDonxZzyM4DFvAReB25t2dp9nbwVyTzo5jYdauXLganxt3NWNU4rt",
  "key8": "2Bvve6qDHg3uRrv8byXNpJ2xHvmcarwauQbi6TNDLW4Yqe2Soaq8bAoFs1p7J9DmD76h9FPMBweJCqGtN6J1qkAR",
  "key9": "28Pi3UeZdQUKKDY76ZrXsk5DzWrxhhRTfZrThDBkxP7NmT9tNZxsfYHLuEWHTPup5EtkFaTv1hEZt27vvVxGxBiE",
  "key10": "4tY2RrL42MBiCa6TtfrLW6SEtekPeW5mJWPq8kfAFMYLpHLRuqCdPqYZFNdxE4CsMHpPyLjbuaAszRvBtTsNxAZz",
  "key11": "FANyaciiZ4EFay1n4vbNQFjv7qYGUYRQnBoQKyXh7BYCrkDYAgMV8q2Y1czfXjpYEwsfdezHgcd8VKvX8aJiw4J",
  "key12": "43UveDPSmM2sxf4RfPA31wRsC8JRBT2sejkUgiCqSfBoUNxrc1LEBGMDjt6XqsBreYTpryNNfBCWQcsLv8QwZ8X9",
  "key13": "HNNPxMoai9uAvD8NtreGPbfcwLY34XaLVWTGB6YWVggpuWFyQryNwGgArd8CiLGBNSZUQgfKZKdDAhaKnaA1Ps1",
  "key14": "4VEAWbRYH8Bkk9zKL5Tb9kKpHdDBSxA6Ew9dmffkg7UZowADi1CjjTHYHi6X2Qu9LeJJy4iasjxW57Gj2FNckvaF",
  "key15": "WErckfeorhiVFuprEDqcHScraxUZPed27hE7kXXiNc2unyH2DixH9cEUUbUE4WWQvaRVvNVvB5RQhnLCHp3mDzA",
  "key16": "jr3AY94EifY9FNhoi4oE2cfSN6ZW3Tjp9xUAxn2RtSFFu6VWsTvGjiychAt2zvYXoSed9KU5Kxf6z25Qgs7gso2",
  "key17": "2v43JoPngadogDdAwKrU5Pga4ypHTE46jU3BrkWvh6vPvfQpqJW7frz15VF5QizSJZALGwe7Gmq6oEtrdg8Hovfe",
  "key18": "2UZ5aT2xRNjhG1M81vynhLa6NPK2BmY9vJStsU3uhtoToYWbTbGHgLfouLrBNtY7GWtkszQ5AY16QAo1i7Dm4KeV",
  "key19": "3p5DfphJxPEsX1SxBKtkmTetoPqasm8BX8AxbGBXLE69Qhwmo4E96biTSG4iR3QiS1Mx7rWK9JBkwTrQVbu8ekzZ",
  "key20": "3RLQezjyTFdKDueXTBxYr8KVE4oq65AVatdWdiKZFdeJURuK5vbpZpnEPdtZ92qewmx1Jq4djNffzJVHGpcsBEKY",
  "key21": "4r1exVPUDFTKkLjNTYpJ791zzB8cDyaWUL3xwbLm9jKDJzr519Do9hUhSVCuLY33ohJkaVjFwuXF99WAKe1eWBXN",
  "key22": "4izRfcRXwT8SJhBwUv61mjpCzRbJbQS1arWZWytQpoEWswoiLQs1B9zwi8xAQCa8vLGa2XCrezgYcixjLk3o4mZR",
  "key23": "5EmbxM627uzU4qiDBj3CzLuWGGSAgqvmfBdki6yubjmtrvKimaaBQC4tsij4E9Mb7TrFNnayBJhVJgoBh1LiWSYg",
  "key24": "5vXRzqx9b4BfB2JecqToASkQ3TKbctaZDh7m7mpG7qY63rDsrxKGdte9zQdA2AcbS1fEpmjWmes6wZ3Mdsi7YnRK",
  "key25": "5SSfiTYaA1Y3em9BvzQy7yq4hWKycdkVCKjPHxUFnL1YrCg4EswAGzxne7MYjn8J8g2emcQqNSz9Lic4nVMNdGaA",
  "key26": "3Ctn3tNHoFVEMVAiT7RL5b53SfiasjcoMnsM6JZH7y49pKEy7254WtrjYyb6UodHHXpwTZmEhftoA8wSrHUsUMZR",
  "key27": "46DFJF7gmmXosPMRj1wt75nQquvY8fxtfijHxAMsJoorZaHnnv1zK5o7W4hR86SV2zsM4mBkfSYynDcQHW8b9HjB",
  "key28": "42RyGDgfaMCXeEeEKa3kfoMKUmmqZ9KZTCSvNW3Mf1WN9w3cDBb9P9NxXQFkncHi5FWS3gedFU4RNhR2XiXebqEZ",
  "key29": "yUkaEb5wxfnhc5AhgeSeAkCuwm6YBbKHn6rso4TuETiwBx8Lpjd25hY4EpQ4dogZwdTpmN5NSpvcDxpcFwV6Lim",
  "key30": "5nmZiPAYbYkTiiuscSWBqJW5vPowJzmiAUFQ6tLthUPbWSqhumvKcHCojL1Tttd1gz8bGjGtTHwM22Jer7MQnQ14",
  "key31": "2ehXnSkn26R9TVzh1o6Uyo6G53Jrhe6nNM49jJ6RKcNfkQhuAjetGAKQuPhSxR1py8ftgCLSKKkPq5u743vti1Zf",
  "key32": "5MpHqs4LPScyfm8JBVzx7RM8VwXR72qjaKezahZJPKhP6sYG2Dox1gHyzefRvAZPwhGpdZ745exGNCaAhFDKX7kK",
  "key33": "5rqPr4Qxf895fVyiWRtam8HmEEsQjvvgbCfhsRDGxpGvtThhmCCmoZJqP3j57MqZ1XKn2ZB3GifDGqZf58mm7GJB",
  "key34": "d9dim8rYxYJ6ZgvWeiGs3T6xUo1jBQBCWQDxJA2q6qU3ZFVmfXL7y2gdFW8gASturEsBJLfnmTQovvxUfduaXKr"
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
