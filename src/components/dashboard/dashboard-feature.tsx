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
    "5rmhFqmTUEKEFHUZh5bW45GWtDNEChfHaadDdqpdqP9Lg2rcpBoMYQdz4YM6x6kdp7jchSyX7RY1vU3666NV98TN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37oEecxig939Upp8MGAKsgXsqYKiCyePjgePnhwsoLnccuKtnzaJd1ECzVt1x95da62fdDFYHn7Mbq3Asjh8SXhf",
  "key1": "4cb9xL8WvpwzR7MbBVQx8yWtaAF6cbNTxTt1Xaia9nQumT4Q2io4ZKqftow9sA8vgv33KetqxrmAPkRGGSqYDL7c",
  "key2": "JWY7QpdJUt9DsQFZog7yUzmuii4XyS42GHTj1Si4sTnBTde14bXFRF89MWoqy1qNCkTz43yvmrD7Yav4YGpirss",
  "key3": "2jdTZqEGTfE1QHkTbnDe3AQvMWGCTFuxQYfWACMRUHkCg2tJ6iYNaLjWctJg5VZqWfvdqzpetUs3rtWJhzxNwdim",
  "key4": "5uFEiXwKG46sWJ4gJHLkEBLdo9bLqrFPt6wXxBp5md1geSD7uiYy4Gt5RUDfV6kPzrRHFExzQBWbebqofPbssF2H",
  "key5": "5wc1Y4BM77qTVSjaD7eLsAL7j5e349jha3fANu2ZoYjufAY4AmR1pjMfSV8MFB6jWBgu2kRwFAm2kb5ZMPXBXEvf",
  "key6": "gWUiysEbtFuKdH2SUb19GvEtUiYEf4b74o8dVg4Xgqx6v2HZZdVjCJBb45dCKGwjkYRtXaDpnGXpzDwgNTpbXtj",
  "key7": "4rcKzs12zXAKjiT5SpEXH1tAzpX2ttsk7NxT3dSn54f5Qb3anjQotWfdUpEiyDbYPZASbmq6pKdwZkd1SqMbtVdB",
  "key8": "3dKF5watSP3Q53VAtAco36N27rNJYmnZbJwcPjC4TrFz89p8dRhtjLNqtAJoiasRKmX5n3rcp9QrkMa8iBNGCz5Y",
  "key9": "39NqP9RpTUcbkDDsfZ5sCkjjRPRoheuDPDkL2Ta8YUPbnd3N1NBVFwFNpu2rREGrXsKjMJLyQUYpzVuU3JjvhrJ",
  "key10": "K6egx8RgtuRcbecPtyJ1GLfe4sFTfcNLUpcfFmEirqgN1cg1QFcLBJqxPt9SFSsLdqA1MofQpbUSTUrSpbn4iF1",
  "key11": "45A8ke9VJDL29BveT8xKKpzjHVdKK2Lee4BG7ieWNU8FxYhmjLQgX86Bi6izSvaaQSgMTCnHjewyT3nioseu3mEy",
  "key12": "5P8sivCp7T25ASRPZ2zYCG8myDy1wuc4Tm2VcDZsocxGiicqTPZxn5LBfUt3eNKW1Qh78Rp7w43gmc6AEzXLhN8u",
  "key13": "5PsyPnyrT3KeS98jTFHFbbB9sSFEyKLonztL8uo2F2ZFicsCUZGJqjr5HHMaVnq16z4GBK67Py5KhsHvJf3uGeqs",
  "key14": "5JbtxyMRmzntLxWqT3k9ryvrZazKPwVDUsRRfbsrNNaJLxNqQEyKeaVfyew8RpHM52ERKhEso88WUXANpSRYPMDf",
  "key15": "EKdRp1bLf99kQZ5LJcN3Pf6EfHBZjFrdWY3m9FyCcQV4ngr1ZFKa4NKn4628ovBUPKR4mCRXcPGpJyUyugVUHvk",
  "key16": "2H1ewPHzcCcnjH19YeEsP4BhNo5Pf1w4LcdnndYeuiF4fa45vQEwQYTf7DujT6d3jJiaEebiBbqayWTPtY44bZY6",
  "key17": "4o9pJxYoiCmSkqdmCgBA6eVJ174hwqVcPNKNCaryNwyuQV4qaPikho7V5BwSrMp7FMCYzhSwhUQPcBYvkFAcF6uJ",
  "key18": "K3KVyvVnRwwEQA6Z7gCmQH6Cuz71Rwdv8rtrufzVCkBcH8M99eCJADDsgF3v78ZPsFnc3sUnLwJ9gfeghctuB9d",
  "key19": "H9vkZHfJjhmdz7LYBTy6jPdsS63MAWFwbZqVeVCJYga87wkMJWnZ5U8XDC735mnmosRVbnXhPUCu2UpW8vYAwd6",
  "key20": "2MFqTFFMK1MqHVDYf9DxQZe9hibT83C4kc19MeJrZjRFvXYJSqeGs323sxNYxzkQRM8GuzsokiTkdhwLMoaJJrZg",
  "key21": "2VesLAgcNm9iaQTwfpakLwNRGLGGLgD2NeYczkYvMAyYKmncZoopQDqmXbLJiLiea4VZeTHt7ob57TtsGj8B4vZp",
  "key22": "XPhaEVzB3jKtgtnBxsTDzai5cW33SZUexsNSHZvWomi82UUgJnS8BatyKxxpeUiwbFarYNdcom4tVxDyANtG6Ki",
  "key23": "559Fut8g8gVBwjxyteBDqpKob8nnG1gS7n6Y7j4HDp9j7zpwSN4u5ohjhvLAL1Jg3hT4afkwkAuxMbgSXF2vnn8M",
  "key24": "36mABZ3JJW8DPvxqyqZfDzhZTa947JN8uYNXFxc4i1LMDWJKzVzein5c8QxUsFtZiahVyE7EPuWrgKFHVTXVqzCd"
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
