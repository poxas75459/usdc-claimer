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
    "2htBbjvUt4p57U7KBfKJa2wUNXPAawEpFNzy4R4kDKs4n5wj3Kt9bdyciVrnfZiVKU3UV8LQGV5aqzHqQ2TzdQNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D5zoUCZArvTrvWjD9ef2wPE5Tm2F8cCZhSFVqCbS6D5LzzepUH4CQudziERYzEuJnfYupGfSf1GMn8nS5x84e1k",
  "key1": "2aYpRsNNTmburPfgPBHMT5Qhv827feP2F73Rizy4zue7V1fz7ChMPVy5o5aBVNvWC6ycZ3s5K8rkByvEyAB3TWSg",
  "key2": "3wbbRYWZFFFeErUaMvgwahtNgHbRwjvUs4kgKUakgQmjL965LfuvkJNwVtF5Tej4Yqnbes9RMrmqcoGpZ3vVvXWw",
  "key3": "5hCfc6T6fRgpgUWPsD9JC7c43nU3qJiU3t9xKUQLMM4AKcmZH26CDviXrHeRQd5kpzuaPWpeuZafkYHkMmfmfNdU",
  "key4": "46BHhm142XNPpTDTEMGfe7ESaPj3uKNVDHfjMBDDQfsAzxXr22A8AokA3Tpf4C3eMyyhqMVUiBrAZMWdeNPToFZk",
  "key5": "5Y3Tt8crqiF8DUy1Fsz2yBckUvuzZu3JSLi6Jow4BqnWWX1NedRt1Vcc61QzE8DoPTspS94JubmNiSry9tQzuqwa",
  "key6": "dpyHDYwmzyQ7nEwXhRUMav2UeKovEFKQ8ANnuMwShr1nbdzk22PeJ4yf289RfXEGf4x3zaY2hzBF77AERMxwtGj",
  "key7": "4x2Pi4xnYXPwCcJ7ieAqZYTpVerxUSYFBaiS33yvxWSFeBoBaErnU1vcrjowEKKBiGiSNeY2D2cSFmgXzVnbAgvS",
  "key8": "GsuupSeeTFnQzMvmvB788vM8oZ31TSM4bGapFv6VPa1GzQzfGv5SWD7auKe6ZTJbXFf6Pp9zFL33VWWQXfiVMTv",
  "key9": "4Bh2oZo1dfNSapCukrCvBQiuexXuc2LSjsyhu6jFCm4L8e43WNpqew924Jso3cJp812mvDQk4Qu7UKZ2GR7SFbou",
  "key10": "6jcf2EWajbz9ihm2SBGwBXmFegNb3dRoRhHf16S4rW3kSoK76SaQcxNceHTyQj69kEpMczwHF23j8Jg7f3SQsRq",
  "key11": "5Ki4Gjq3FsjZLkVdW1PsCwJuj2hWTm8AxwNWwWKbhLpAUVzS3LdLWmr6u7oUzqJjuuwmupYk6dfDBA5fW3TMAo9Z",
  "key12": "2tt8nQ11ncYa8M5BgfE5pApyvK6csWZU9XMPBiWYCkGgaUDy4vCXJ1WcmteEyJa2ULMJWGibaupykxRgL3VyaFoW",
  "key13": "3PTba5ZkGRek87aZhFypJAiHa5nfVxdtgQH9cZFpW9S6aXDx1pnwLhXWkA2XyU26H9syc6mqzSCP9VMaiG5p7xVX",
  "key14": "4PsCQTxp4SSdmY6sPNHcLpsFG18s2uhC3VRtttqqpdLzqRp1kqpJh1zPppgypgmhkfvf2sETByKYHj8ismbVU6tk",
  "key15": "5iXsQ5dhNKqzzzuPzpZF7UozXUvfdZnWdRwfp4Qs4miWL3qff14oCEjgteyz5TTNLBFKo5VZsXReXYjDPx1YHUnG",
  "key16": "5nC2CDg33jraridChWDx4rFGJJyJ4U63kGRH7MKSJ9jcAq5NxCJDWPUoCp1iH1xg3ivXhv9Tr6Xb97Thq6WaREgu",
  "key17": "5Vnvbsmh5V1btHn6a7YP1ospzN3FkM6BSNyE1VYxLYuWot6CjfV7CRYdRuzSriJgG9Ym3bkqgsdTpJstDniehQUj",
  "key18": "42LikVhB6PVLnznLwXa1CDndqTrarbm2vowjwWphcSoogUjcwDk4TpnKfetfdBhmx5xkN3n9BVeEJ6CGLv3ParCV",
  "key19": "2h888FZRUc7Di4oJCvedQ7NVRJyUhb7HPH3n9JRnxKBxJFbpQn2fHo9FPUmWj1Q11KQoDnC3jD4nNq3bvUtMze5S",
  "key20": "2miiTVPxhTJRMg1U1bBzmC9S5R7eo2ayKiQ2TeR6iLvMQii3MRxXQro3DVqZFVJ5eH633BX9g4gstYQk83zewxYK",
  "key21": "3kc6xPftK4oo16veEg2A9PdcSUJM4grPxUgWQZQ2HEXvA3RNccb28RxvHT3oR3KkoyVVAxCK8opmA9s58rbJCSXc",
  "key22": "seeGTKVSaHNexeLWKERUem3onBk5FBax6fQoF1bkf527TgXK5J3eWB75sYGn6PJS7cbpy5C7SrJL6qZmwJzREA8",
  "key23": "5vviJCxjmBXB8ntJA6EBGWza9KsuPznUJwiaHzd9G75f4pCNMW4UVQjhZRJqt3HUpmj834g7sHEVJuDhoygnNDjc",
  "key24": "4CEiFaTg3Tfzz5MAHzASNyHX8xac4auUdKXNc3NNZH25SN5iqhrTCu9Tez6m7WgS4vn8k8SVrP2nc6KVdHLGbNvt",
  "key25": "5p53uBkc9h6qgnp3CaNT4FUhpuMdAjL2XaZdm4NhcQCxfNCMmqvYngRT3XfkJxim3yj4v2nQEp16G4RKz7AB63Ah",
  "key26": "2KzJCgqXXBkuxZv9yWhH5SCq6FiJC6hyeBEbkhjAZfojMHDEJrxzej4715BW6pjzU2Ci6PRUQfk5DPENJAtjof1j",
  "key27": "3oMp89KphSn4o49sFXeLZKfbnaRkHTDyhfqenrmNHTPfSmWjUmW2dEwg2WnsFBtDCWUMgXvQ47eg86jMSGBMjeig",
  "key28": "5QwixifpFWmbkHpwL4p6NV6y5oQgH8HMLe8txXi64wRN74iChLvqDUFQ3mVTBRJP237UMd4dgVF32b3HcQasxGkk",
  "key29": "2ZojdM7HyTS6yCA7ipmvGbZVqCo9MTzFSMomxHsQaaCYKhrrXDaYUtoy8rVSRjrqYt6hRnYV3XkW6cFKTFprWFP1",
  "key30": "3FsFZqRLY1LPx3nm367DueSENraTdNVx877RoCQnG3xZNWigSoPngYEay2YbaVgXxKRURYNTJTXDwprBiT4cWmyx"
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
