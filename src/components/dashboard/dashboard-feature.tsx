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
    "368FCYNrp8K6ZJEPNUMYF92xVu1qN2idCw2WRS798whs2Eot3bFAjmbCQ4nzq77q65dApMZ2wjCPyrC1EBi82Qnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sJbGgV3jaWzJFBdVitH6w3zmf7WST7GmjZFT4M5cGmp9ju8Dz58GwUnDzdQezpFpHcVe43VsdZostSz9qtaisYK",
  "key1": "45c5rkmN643qtHcvUutyZEYskSBsm1nTzwzMUrz2Ettd8N1MK5URZVg35kXRxMsTf2VVhXPtU4TScouuhdqPh5H4",
  "key2": "4MrzADGqihwSb4PbmyuRL6fp3hGEKTGEEakReP9CjVamFnNebbWJp1v8hZiP77kDTDehuS4VuhiV8TBE8k21ZoSD",
  "key3": "4ueVavt5MRTAPPYvrXSDfZzA8nEWzs5XZrfYem5peayy4t8CPQ434JsEXHhkUVgjBW3E2mnW8K1u2PYzs7kfM4sB",
  "key4": "4y77evZ4E3uJR3ao6XTRejgRAjeU29dLSDizBQnRFwb39RfJtAba369yJFqH7WxcNuSnf5ov8PMDj7NLFN1KyG7D",
  "key5": "3qc6FabuxETapmnwz5C98g8rwAK8jX9EhzUei3NrPVS6ZRQYPAk7hXJNW4Cx8GXXph4mwcE5K3hRyn1bsCesnykR",
  "key6": "5GK4oXkvCRRcec4jYz5MXGFhZEbSLHmncLKmk3pAcuttCudtGzPVK3W2fiuheeYvhX1xNW4R2evcomqRvmwAcjKv",
  "key7": "RgpanxQG5Zzcs6aBxRtAqnv4d9eBrNMeBAHNSpFUCJzgY6j2jTdGhFXXTKz4drnRrVokV2ohrDdSTywTeWoNFaP",
  "key8": "WNRthyjDWw1ToP1sFvxPVY67FjhmytY3d45FduYV51smGCk1p3aYnZqhUssMFixGyaWwnA13hftuxWZs7UFczLS",
  "key9": "5ytowVeUNqmTCocZn8S55hz7nKxpVaZBg5pVjwew4zSMxidDtQ54wJ8QRd7fCMu3N3c1PveGdsj7UXQ9cA5QD2gA",
  "key10": "4r6YTbgpab7DAzrFVcLpB7hx9P7qUmPfrPA2XKMGrR2Ndg1TeeS2HtdMRnw79zQTW9thhgCHJLmz7Qh2suEUYrqx",
  "key11": "4voJ9q1ucaym13s7ynWZoe8E5tB5m8CNZiUTiue6bk1MoVPg9e1qo6E4iW6DDn6xce7ZWTgJ8y3d9x9PKETMv1en",
  "key12": "4mpehCwake28FG5VQ35XxgM3j256W2J8SFdRxrCicN47kKYpChsGRKFFoGwFN2Qpp3JnAEYeuedJ43fSwNe35Wrb",
  "key13": "52nJQhJCXsQpiSEvq7tSBW3435cWKc1eoovXYg4zTVweDdTQpdAX4XKeJ8Gg2bVUzgQFFwdQUrm6CUAoSWctE1Rc",
  "key14": "5978LChjBCvduX1YUWQB4MQp6uosKVp1k2Re59FZ9RgYWd4UXtXz3yYFf8zPRVasLo5657RfsdAiDg6sPShkCpM1",
  "key15": "yxv66BzF4FKvyURBvuzperZFGK42aQRFrcHVjgTitzU6CtttMVNK5wBishRanwxopmfTBh8kYGgxzKFjJY3ZTYA",
  "key16": "5PcgS4PnV9bJvHK7gWFHRwy5vwSJvVWpBr3kLwWEoCmvYT1cEwGcebWXT8AaJQsPzKhZHLpi8FdbRYzgTZKDhv2",
  "key17": "3WRwwehCWRcMwCm8gbfi8arGuoJFuajMvcB9z4p8oMa8Yx8NbFuz3D6Pj9PQGFEjkVmGvr73GWFn6voRhF46yHCh",
  "key18": "2UV8tKzhtdM8GfTjUxui69nMobETz8G9g67EWmyhjso6EE6ofw171mqoWabigA8mktSMgNHFCEf8XisDLdXPa4qF",
  "key19": "5tvRiVXAm5wWsibDFNXX9TJGp7Jst6tzZhC2mPkC3ZJKT6kuZ2Yex3GoBwN4YpUhbvuKSoB31uYjoT8F7NungKhK",
  "key20": "2S6dVEK92BRG4jYMnn2EYdpLYiWaoc41BaEkFxJCTUSVKxMZiEYVUTt5ZTvtNFGobALXFqVdAw5apJ8jzfRaWiKu",
  "key21": "61qv6mf3o4xDWZeQWPxWKCnL3hNYqHejbRsa7LohcZRT61fukbRviXBJwudshdxAr4N4Ezk3hEvNLm7mLhwazYnT",
  "key22": "2RZvH6SA4A8Y8afHcaQHF6fdhaBhTMr7Voq9c6xojSkkpQvLHpC4sJjnNeSNaDroiu21T1nSbAmCLdzvFxrTM7dG",
  "key23": "mpbk4LLCcq7rBiNqrsnRkb64brtdGjZt9Tj1gmhmabMpPbm9psUQP6tcDLSgvTqE8jTgfDN9LLz5MSPFBhEef2k",
  "key24": "3qL3L3Ve5F2YxmF2nESBhsACnJRMxttBxZMSAVwPodJDy7Vs1JBVceRUZKE5L8ZKE3NwYsVfYNqVkVEzLnzFexiq"
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
