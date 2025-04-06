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
    "3DGLHRLFzzqBUPhbZL3vCNR1zqcbkx3RZeSnaYMfq4dbo8M15raJjVNYZfkJwxZtE9mvzxPuoT4tsE2uWuxWbtTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41GuV2sXs8mC9Yf9VEbKLRpyG2a6dtut1CLeXAaCh5wk7bASJ7xj4jZrVitX6ff4GxzXN12b9KDAGeH6DGtbUiv",
  "key1": "CvYBa6wwpW4xz68nbfbQVcewsk7WsSnhRCxZvmeFiBWDGqkyfMimg5kMZ5TsnXEHcfWsQXNrfKHJEBRJKnLDmPr",
  "key2": "3osZNtuzTHqf9oQCSiDTWgACJzAUbX2uLQyCX6yCWhsbkfUigjCwAaMsnbVgH7ouawzLPutMUq322Wjet6WYprtk",
  "key3": "5WV816CJSAa2NRx5ZyTDJWAcSjhZKJ8sHWC4P2mwoVh82btgk6E8GTpfdSveiQSpRQe42tqRkuzBm2tXB5XuUdye",
  "key4": "3E5JjvRubFRcrzyPKiHBpXwu2VNTjbzYkPaTRFqeZQas6XZbhfV3yhkydSM9cZRfSxW4TV1LBsG4dHrW63WJEpoK",
  "key5": "3CkDufJQbQ8ePNbDyTWWX5D7hJ2qM4PMMvPj4owybscDxWHmR3ddAauKhzszrZHnvym32qyLYjjrrqJgi7abEJBT",
  "key6": "5hxFEtnKaDhLZEMBZJtumZJb9GU32v5uSdM6cZBumdvqCPKAAFHZnBDqCG5hJi7kmKpKGQYST46EdwB3AmjtKJJ1",
  "key7": "54cSRARcfAoSGfemRtPeFDUfUfipFhhN53H73bC1vLrejeTN7Vu9e3uvqR1vpFRyWeW8zVj3Cu4A5eWza2vMiUxp",
  "key8": "2x7LUC4dsjKypF7Wa2oS8ZpWNvc2Ev8d1Awm9HmUhyxzUPMqRzXQe5kTbPcWqP5Agk514RdARn1DKQQNwTJp7cYQ",
  "key9": "2VMcmwGiAneZdqLE2CPqBKPytch5jasCiH2cv1Kj6bci9rnn755qZhxYX58njwwQJLxRmouuRGxKrDCHESoyrrR9",
  "key10": "3XmQYeRm3NKw992g5LvmWccsMkvtKk964aGf5jo5xBjMJrTfRD3R2rtejwX46rNhMUszDMs2XoPZBF3dg9NmSNwR",
  "key11": "67FMz5FVgUL76dzUNiwzDucZiNBWBtzKPFgTSy7xLetVdpnd8EqgZ1Y33zbBXEcARkS4yUokcqR9rWUxZoASwjPB",
  "key12": "51ETYRjWs7GGwLuQiZpGbjHRGvH8PpzPzbLhEHCtHa4M9F5mzzDErzsYL7HcAToFWZUrjWDCZdRCfEtokW2rjUy8",
  "key13": "3jmm4ZsfSQwo4Y2eetrW6N16SXUSJ13EpZxHvoZzzdQNBDxJvg2PKF9VUA3MdMD5gTQZiQdJxf1AhnNRMwqqiXpp",
  "key14": "p6T2sWMgPCQsro65PQzUeWKvKV73a4sCENFp5xUcsXiAoNc4Gek3M4zGrxBz9SzTmRRWRa2UyMDTUm9K6qoya6U",
  "key15": "2y1mgTsryA3rHoTFTkgApz25RBCVP9728dNnkicnuhuYrXK1B8XenpeDqkkhJCurFbNcZWJGeuCJyFwt5NyMPwMu",
  "key16": "4WLih7XDqdsruPY7e511oPKHC8QFqWDNpKnLtRiGD4x2DsN44H875MamyQSddUfuhRxxgWMfYW75hdC6KeDwtiBH",
  "key17": "2i73FtcFAJJvC96AxYpoNDinfLR8NRe5Nf89Hb4LL3xNTHucGpW4AdMaiJAN572yWsYJRM8e511xsaXYTfLbJqxZ",
  "key18": "CEBxGxXWQbUgSdv7drGBFoSJ1cXezYupX3a7bKAuCCYocBQz14A23DZC6WHSSQNQvWT7LqCA7WmXmxT8XgSVmpk",
  "key19": "wXQJ3dV4PYkH8H5MVTgdKXVjrx5dZknS7rPeMdH1TfPpM9ejt5ZVyDnUuG4EXQqz9SEsDecsBcEUiorHF8acmLJ",
  "key20": "5tTCAspTz82ucSkTPrqSL1htbEU2NXDxZ1XpeDJjx1xJWVEmj479rToR7Avf4m4EQwxXJDALbGt8GGomgt9e3ewK",
  "key21": "tekYuxHdxqhwLMR1KVjsd41T86ZbLeDjZao4LppJV6gUCUgroLYjeFuqayMcikRVdQfqtGFSdoeVsks71vvCHYX",
  "key22": "5bpC48n6LJQcpLKKz956DD8T3xfkhRfnEbK24q5jB3x4P1M5tLgmTMenB3Rw7tR2D7L3j6EEs1wpVCQLKQ4htJUF",
  "key23": "2iGw95Ax3harhVreEGobvNXCmBXr8BSaAjoP5GYXUM287kAaCFi36b5zFofMxYRqtEPUDNq9HBx5sqgWn8DneZ7A",
  "key24": "2eG688QWhrgSPqymRx9C84oD4PrGt7muUWvrvGvmnWa8HjNB73xC5qKV9HsHREcuhfSKipjffeRKCjkbcasa8zvm",
  "key25": "5Vj3dM33j8yzi4oe11yHnJbpq314r6Fs9iv63t4jZNj7YWztcTpzCuJAjAmGNwmRwtSGqzftDnohfDp7GyAKKyKX",
  "key26": "52hrvLvpwY5auH2MEXwtrVNTDVW9JZzdebtYjKpqvzmswa5tEdobe9UoDXvo8TAoTZ8kWtrZvaJzjzR9FThnQr7R",
  "key27": "4Vw6g3GyCoQaF7cbNkJEYktCn1yRB7fcRTE3i77EdtsUQGQa4nuMxUy2JMHepFSsDFeE3hg8YBD94fW9NkbBEBLA"
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
