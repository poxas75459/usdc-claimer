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
    "4XY4XMwbiXUWgPpQpM3KxWsedbC8Gp75mZ74A2RoAssRhKDyaYSdkKjZvYChHt5TMaxoDF8vdxFpJKgCAoLsGAEK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ey2wjwUcXJUdMgMQMdGjYJAXPQ3R5LahfVzySdHYjQh1B86eyEFhVjdY3ZSUiStgydT3PsjjMHV1TvhcCaWjfAP",
  "key1": "3sfBDfaE9uauNn6qnKsJ16bYt22uq4Y39mzywguXnw8VHqrr4kW19hGRj32JQcNaE65iNoeqZVCRG1kk3AMkkhbg",
  "key2": "2524J2XvxSuj5iXSpXUEhgfwLe3K6pS2KNHqYHmgU5SdyH38Zg2T9nDHo4apxNwL7pgB771DvTho3gmveuXjiLTi",
  "key3": "2Pt1FjUSpAnwgH3HYAiA7vKBttBgqorHSLtp4jj9HChh4DWDWiemvv9fiRgLeud22JMnuf3apgvsqiJUQHC1WCrb",
  "key4": "3ComtZuivzH2Jn4DdqPe9uJYeDDXqVVrzmznZgwvgdoTVEqKmrfWdF8roCqSt6PcxRC3SgcjLR65LuAwaf8jfpu2",
  "key5": "2Q2pYgXUnDtQKifxHrPGBtKsWXmpgJVSxiVmWyju5FddA9V2A2CauSedr8xHBJ6bR7WTi65hDeC3QkjZFxxp1ZNF",
  "key6": "4dyy3W5VHcxzUKWbnCzVQNK6wAX3rtEL8nu8ucKhyyFQKnxK1fvK9rtEGiDY8mCpAPxLoUa5CKvNPjv9vHA2bmED",
  "key7": "5QVfg8FVNsmpyCVfNEKAWStmXEUn3ggHmJ1CwTrGoq5CZn2NdsoyGYKhMJsFnGGLDpRGwb3b72xDhYv2twjW5ZX9",
  "key8": "2psMDPw2wG89mi58mCvEVvFahkA4PRvUrEErkhs5byrgfJkr5cUBPZDLiUYyNq8gYGdiMMPEUyGyGgfznUCwzQ16",
  "key9": "4bwTHF7e78Wv5jWVJ19n9XpJBpLGJhHqQ1ZRAvT6FsSsPW2fnnrdPo4mgxyZ7mT3YyYAYbqfKAXsFwDGVYpPD4Eq",
  "key10": "eDGRuqYXP3dBAvDZCTnXHWynLbHCbJHc99HFTBhMdrub5SoQSdUEbUNnDVLtmaFxHJmUh8eRayVdmuvU2m9WuNm",
  "key11": "5T5jo479XRQsS69yKRuLK24zPSyVTSW58FAqYA9dmanXr9iCytG44hLA4MpTTCo4u53ng4oWKZf7pjrstYNe8nMn",
  "key12": "5gU9rJasGmb2F8AvFDdQYZV6BDqNRFrG68BHNCEKsznnrvvMpJgXtoEcDSZXQRNVHcth8fkhTb5iEHqCYMVSpo7A",
  "key13": "45Za9J4bQDHMYwiUtS1S1boW8DtSUTU2NziSENuPKixUd4nwbo5zkL96TAUkeRjLqZt8NNQ2HvGtAR9eHXb9Hs7D",
  "key14": "3jwnTsp2WuXxVgJgF4EMvKXUKpnAsom2ieRefoVTsXaDwSZFkpYArQERx5id8Th8TNXzGba6JapA2N97Jz7Gk4io",
  "key15": "4u7XFsK2MCoTf1uWqA5hNJ82yRoV1FM5XLEsS18WVTVHPRjfNdKFnx4YrDYzXX1WptDdKy3oUmJZXXodanTjjQio",
  "key16": "3B7QxEDTuZGuuMf4x3A3147St2D45RV1YRYBgURJJp5d1DPZRURky5rQ7VcUawDZDygHQE7ePU9y4Cj4Wib76mfK",
  "key17": "4bsaYupH6NUpfhrDF4TRT7CiPUux4g6SKeLgNJNedzSdzsjJtaBaic2Q38LCYXaPWGUxoqnmCmm7BxD243piNuZ8",
  "key18": "2wpbUQPuA5ouRbfzdMaWXc3B5KdtvoRmqX1ejvBwQxKM1veNEgYFAyjQCDf3oTAcoXGVXhTUiSeDaM6ApN6cpuSK",
  "key19": "CfhVH3NfoHpmzfLEuZVcHUyV9RrSPNq6Rp97RMQkGGufBxcrZC5hvjsWk8CuPYgz8PgNFqu3ahxJyVnfzMBZ2B8",
  "key20": "5uVK1k2gYUex33BHSJtSjy7jxhvZ6wsb72TvwWbqDQssgorQScrhRQbJSGh6v6SkBdwVRANn2KMq1UGuxMkDrNDq",
  "key21": "4jsWwwDwGUVYvHZcJWvRzrsDV2F8zCEryHRM2M7ixUEjTHzp5T418ikbFXBQphzCBLzsiSLoQGDRufgJEZDkBwXz",
  "key22": "2kVZqxZQZZ8iHuSWkjZMaEy3UqainNHytyLo3wAJW7Qvw2DmZYMPzjnXdHBHiexnRYm3Qxxok8gECYc6aRmqMfNy",
  "key23": "36khdU9YzXy8Rp938ste4ku9J6PEnF4D5JaUisBCqW6m2hVAixKoMEjTdqbj99sPgHxNZxVcnFvHQ7DzevMWrSsp",
  "key24": "4QLKAMqX9Ep79DMxvLPa5JWEMhzjGje8RmodsFhPR2WWm8z6vX5mkcWNfTDjpFkMvxqrRok887K2F169gPkZf4QZ",
  "key25": "Z61wCyb5fn6tbA5s846uPzzvmWjh8S686Q71M5fYaCNiVXcigQTnrGcgs6yLdFUeVt5jN62dRmibKN2Pt5fqfka",
  "key26": "2CN7ucMvSDMQfS5fgfHbX2SrhVD3fzQKYtgtdtJMTXE1FbbYgJjSY2jBUmAxkRnFcNhkGJQmrhx2M2emwxaxa3Xv",
  "key27": "d55vZzbh2MdFYwxccFgXDsLTquZ8aZTK9nzwLhgUSvFULKo4h291VSYyPTB3RuYzkXQvLbJrJeBe37fEqqfNwBA",
  "key28": "DbpyDCW7AYNeN8ixibHCLNbZug7Uif1QyntEU9h1jiSjKkXPqE6vF1HyRnAGQGtcMHn1TYonWkhQCNVKee4nBE4",
  "key29": "4trkZ3CyWckM7yd1DYizM4oGwY5QL5D6Fm2i7Dh1rDKAXDZpsCVGh4joJzwPXYZ1hu42WVt95r4NRrKjbeGeGZ2Q",
  "key30": "5i87J1K37swnyFMnvzyCwKuUmJKwXibYhkpSat7MDAkEFV8pUMavQo5tWhBSfYXpjsrcBGwdGAK7b4DeP6AcQWFd",
  "key31": "3HgUj5ZQqT7YLq26WodU2spAHQ2DoL5KDjR34RSLWoEtvVsetwKKryLrGYXCwRFDcKB9CVBXq7rSqwHg3oxaptki"
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
