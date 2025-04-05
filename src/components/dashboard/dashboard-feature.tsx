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
    "56tceqG3E9sgHJb9fMVRn5vRG3mRx6B9xTuzMG78J4CD9NBJcCn9CRSiwqUVhbNTc6vxbuJqggC6ViMunsZSxsad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rrb3Xo987jWbBJs2GikK5npGak3Xnc1xQpcSx3HDR3Jpfb4QHh2PjKfue8UMH3HQuhQMxSZoL9DCTe1Jo3ZS9Rq",
  "key1": "2F7QGF9tpCFGQ3vbHbkGDGuAsd4YV5Eb5hiKR5GCc7oGbr4G6osCbLzWXXcAFfZqoA5gozNxJDafsrgGAr5FgMDS",
  "key2": "2KXjrPy9GF9YQBprsJAkf85qmJUKJEtW5HYABp4H6234t2q6YsMAJxdf9AmysutTpxFRmZTrbGGdk5Zf9y8SYqMi",
  "key3": "41jzngvHqCZQz8XShxzYUy5T9UDsbFT7xvApVW8aowqjYSHjApy9aETMN9rD78yBoahChQNtUEug5PvXMKNotGrg",
  "key4": "31Qh9LBuAkCWPT499ghowaweojc2jCn74GgfMs7N1SjekSfad5uCd8RMnw1ZPEqvYMx2kjypQqGoxmELLeZajb5P",
  "key5": "XtQP83GJ54kVxKogr3JgXnF3o1R23De5LeXsgreeBuX3H2Vk9mWbxTgGGzABkXUywzCKmfUyJqeG5MPyw8Dopmo",
  "key6": "3UVDMwf1tuULGsSyTiJo6PN6goRqLrtVCXqpEaiNLte2GkuoGQ6Uw5konwwwgbM3oEGwxFtEyq9t8yFL2h7DD9rY",
  "key7": "4JFtUeWFrLyHsDaFg4TeGr1gfohohRQT8ricuncURp18ND3gcEtREv2TYHcCyHKQRe6aWg7Q8gqNqdUUnxvEBNj4",
  "key8": "2i3pHnXPRhucfv5UbpD7YebNk15tkeaoK1X6ZBoQvTLsk6SavcegraAgG2PZDF235cjBSUgVaPFjNbABGmUxw1zr",
  "key9": "vvKtnUvBuSPjdJmoLJF6j5JEjdKp258CRKYHNNK4atbp9Ff1ef7QJnms6STz9v7hVfyeExCrr2emBwgmbzqd5ka",
  "key10": "4dhm3eGTht2aZ72fRckRCHRwgWTYjMubNd714Lwc7zijXfP1GKGZ4arWXzFYrWVKbSmeWSkgfEgnq29pmHzh58qP",
  "key11": "FfkgdYN7XzLMaCb7632UJMGaHLxN6H9qD4PBQemEqpScHpBXn7CrtxWYbGTa3We7rcL7Lp4FvKDTDWrAxjwSLCU",
  "key12": "5F4i45nHojuUpXsee4fFaqDE3ndSR9ZPqGxBW6A1TxoBfZ23qhFBYCeCwnQEQqB27Y1RyZ3KXfnVqhXqxPaMaXUQ",
  "key13": "28ePkNfuA6pDbgVfrADmUqmAzfkRpQdHoGtVFTh23fnqCUrsEvX7q9PxgsgY9CJ5JsVvumWU9kgBUcsUDAipQnD5",
  "key14": "j4f7XH5FNh6S1128nYekmgsztmLmvMxm8MNXGKSE4LvgAuPkRdDVkhkvSensavNz49jGAAQNX2urHeuP54YFpBe",
  "key15": "3XhggjtHHanFjCGnZ8x68wJmfPhD2qwpmK9WeC5HnYak169LbofHDzLJXENzc9nkyKzZ8gt8gx4z8SyKQkF8jg2D",
  "key16": "5fhbxKdDuCHM2aJxZXZHQ4CSvV8Ax1gYabDbUVJrzJBxEeUbp5QRqyUvgtUayM5jnGb45dcAq1i8PHVPhEvFKSk6",
  "key17": "4SQVghm1io5os6XjjNwysJMzXK6Aa4r5MhnfLqiJrKN5cCVPuNb7gwHtKqj7rU59jEkQhNB6kDW8dmonXN9Jsp6K",
  "key18": "33RF35U82m3o2CAaKwPPbT4a2sHFJo6bNxQPCXE7bM24ztQGBPaZaocSih3f3aWoYZnyeFdC9PKuDZjApzQMhHeJ",
  "key19": "3Pa9y8zHt7SYwFNAZU4W9S4CD38arELwRXqfArDRht383MNyvCANegmdCvJYf1h8z1mps7EqU8Z8Rn6sMjTMP9pS",
  "key20": "2FAS16qUVN9fvoESqqB5qrQXhc32bpfUDeWzURTcypKJEd9pC4CEiCtTiVfrm1WQqhByxm7shNFBL4fFTfxz85mQ",
  "key21": "4h9UXrfj3ntscbTWv5qs9GeNrRXSMRF9ZZFcMUMPdjrEKqZUGg4EEYZtk6dLa9SWJSGDonFkJ9JbJQn17wqdG1pi",
  "key22": "52fx7gjTDncCmNX2wNFZBSq4BMsKfn11FEDszVhWtCeVMC5ywzXVFXDtgCFLM4e2g3sc41oPnozDXXBsv3MWL5FC",
  "key23": "4Dfyk1BV8cB3meZ8sBcpPHENt4xdagtueGMcW7kQpyq93UKHHcMbdyWz5XciFqk5W9jxTuH3QPVQ3Cshu8QqZX8Y",
  "key24": "bsLYzDZfa4vXCf5R2QuQDctGKnjVuh3mUj56trm3id2j8FHhdBo9cKCxKwSG57NqP5c9NKdiZg3v2CrVxu6qbiK"
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
