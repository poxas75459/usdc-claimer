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
    "BsLXLBDyuKByLkJHypj9FXgGUV5hz5uNyS6WPASg7KyJZhj2E8ggkUpwNPmYCmBVDDcgfW9ZMHVkQCzcFewerwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zh7FhNpnPU1tu6F3y4c21Tg7bZjDCfJg8y94bBxRzd2g5eTN9VfgagJQHBN2Ugqye3MQYJwBU76xiYc3bu9invL",
  "key1": "3SUahSKKXMDTBfVNq1FQVUWXbxh437MgAvVFQFBMrrFJs77SgDTYkHFZTHt3u4JQXkMqbYRNBb9jiMjgJM5qQmbA",
  "key2": "53dBCtpXdUhLQbhfDHxH6f4XNN88uheZBDtWZHCByyc8waCgLmkmEjSM3nUWFZrrLr16KSD7DYGLCQ6doYSxYej5",
  "key3": "5YbmKUi4LFcenWVA6GxJ3AbGMbFeQVeX9T92T6p2fz3yYGsxLAHzPBfyTyhB4m6xy4hrBm5Tm5CVeZojki6R2t6E",
  "key4": "vdFznLrJn4LTBsUrQvkwhr5AUP78LCiQyQHmum7riXC4khiPjVkvPNrsFwXjhbNoicYiu2Rg4uxJpPiEN5wMD6X",
  "key5": "2WJweNMV9cyYkGpn7MUhfyc3r6Wwqjqea4nBKhkaW81Bt4qoLsyRgKSh7oLeRoVfWcb1ZKt31hUrBduGG49JcZ5",
  "key6": "3YbQT81Z1SYP6bmpHcK85RKmLXnzTUFbAvqcty65SwnYSNWRb8U1VRpts1wAnAp8c5kJ49wQZYQwXJM9Tox7yX2v",
  "key7": "2cJ52uSydhf4zU9EBotegEDmcw9UUMvHMoL9cNUqiPKyH9bBuD8SzWaRWqyNS2V8jAFyv33a6oq9w53maFjVihGT",
  "key8": "4HJAeXAQMRKkfg8kFZPUFvf4kbR81tFA9xkP1bhaQC1jWfUNVgzCPyauzG5inLfY5joxxu1tDpWQS6MzCcMK1pzs",
  "key9": "5cFM7kBMWuitJD1DDXWSMasCDcz5eiEPfLPUTN4ecWQ5HgE7w48QfdjUKPpr1fotpw9fGTcfdCEmtiThzMoPpDw",
  "key10": "eXwTkxAF9n2JYrTZAVq6EqSiZR2UA3psmJAFCLQScDDR2ELwaoht3XEo3B3VDrvPX6mdADyDQf1e8R4s3LjKGdL",
  "key11": "4RiEcpfFVdRwGKSWoeWBLGs7JkY2nNPN8RtdaBkNHpDURMwaM1fMh81pnN2EwKakRYPgEqos5H5NyKE69UzgsmQE",
  "key12": "4Nqc4Nb8DPVzDf43bqGUkc4Be5khc7xpk8oduH5LmrXC8axu4a1QrukJUmKMKohpAFboEphvngHAUfKX3kxjEUmw",
  "key13": "TqeDPBYLcJVe9asUkKmb9nAzKxtGoK8dMWLFRnoR8UxcEQetknabHRjhSvUaSttuy7bFGx5AEkrY4bUUWwkADs9",
  "key14": "V7rfX3aGGBPkg4LE1hzYTMj2XHDdDa5fuguGnosCYhQnfLEyQEqdn7jsz2rV1padCDTZN9SnGc9KYiGqHyPnHEA",
  "key15": "2UfkhNUejg4QjbVozEjx5kCPxFkwy2cNLeBtedyw247VNsxHRqpAjHorFszhgm7B25iFb2ggGMwWx8pRFGD3dvct",
  "key16": "rUbcd9Btrkogz5sC8A8YE8EdatBbXS57XUMrCn5VUqybeGUGEgkS1LmMfz1HSjR51X2jRrcM1NnPmf6B3MuThES",
  "key17": "5JE7ZyiYCPJSMyahXpBM4pfRiDoj7XZXRyv5Dxrs8o3TUWtsKPBs4uBmKreAcZBrVaC65GCw5cEJ83UmhrzkAw9Z",
  "key18": "3heVpC6VbGtEFLXHGmRazZn9x5yTSQCk9ZeWEJD7tKeu5qHudyPdgndpccfk9yrgpZfc5WvySpP5rdgkPUyyWMkt",
  "key19": "4x4kwkjynbV2pSYHMXw2GCpFnfEXrvetf4NNREptz4u4gUnzfiTMCj7Hy7CgiA8zfDqitK44xSNgXwRJkSo4yWiq",
  "key20": "5xFpnz8WUDkjKsFJth1E9nnezeW68MLVEayFMF5ZgcvuipM718vqP7eX6a33Xz72zD8yGEpLXV6M81qdhFuKFH1k",
  "key21": "3urmaqRSwFiRfyJ8yV4J1N4WD9trSWN61ryfcbjL5ZW4NKkN75ApU9tWiWHw4wLoTHzHrKZ5sG3Wyx6iMcaAiCzc",
  "key22": "3YvhMPoVVM1Veqwtzqgu2Vr99pAn2zTsERYxNvuyrJrdUv74H6wdwbHnWw3WrrUdcV3cRKR5Y5hC4Wej92R9vAVs",
  "key23": "245eK2MQtHcJDFkpGJ5yxZgzEFWvkRMpqLpbQGGpyQLQtGCk5pS9vHuMf1P1DMyeF4Htg4bRTsn9v4LLbPBeUoLK",
  "key24": "2z64CwgoT9anvn8r1gXb3KhB6HTsu7XMSQEZTH4hqLPmXGxSL1NWXsHJEYteuuCqmysCiG3LuDtNXgDB5hPhNM6S",
  "key25": "4ee3W1tMmRhKTGu4MRi2whRySBH5jvD8ts3BhW7CNPajmvgnkcTn3zuU8tNWjKmdWjaPUhPiEUMQ2rGbLHFjAqUu",
  "key26": "RM5bxphZB4WpkYUpwN6p8wFqLVZM3wqg9LoRSih3D9Aom1bseZhBpg1ynoXzjRqU3gWndXEaiKUHVuSSZUmFs7i",
  "key27": "52Qxf4Xcw1kh53a6zgh76GGCFgF5av7TL6hvQxKtNHpVwLMUhHaoo1yzZQLEc4YoTKFhyyzgyYAKhfewikqBVxKC"
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
