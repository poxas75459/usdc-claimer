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
    "3ffJAcaKnEKyhVQ2HvNrvGC2CtCmrShrBCJpcDZBPFp7PVgu4DsJtyDhduDN75D47R58XJM4orAzp4GFTpu9wEma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S6QAk4qSpz2n6YsSbafjURiA17wxW2eiwVn4jrQSFfo4gTLSRRMUA4RZazcVLx5QNSQPhxftA9LMugPcLPwX7nk",
  "key1": "4sqqMWeN99CjeJLEEwhaZxrNAK2pm9SbXt2KTANLxUvAd2BfaNzKqwujuEm5ZcqaxE7zdr7BzanokWNU6dS69Z75",
  "key2": "41dJzXZ7N3xGRz6Shgef9Ru7AfrezGVm82NzRhLDHFCRCvbRHqsKGsmtNBp4BSZzgyPZxb6QPU8odu8pXvNvigLz",
  "key3": "5NsyRCtiXfAaGQDa9MbuFBNFTiZrKBGwNv12N5yQGwwxuJRVPXkKXmTHEgnonsYRjq6NUufQ6sFCFSEtWW1Q443k",
  "key4": "dik68HmtdcUsnWqpnT99TM8y6kfzV2xo5zN81raq9PxeCRJZNTUVkNGttixnLzJSQAvgcDTBEgu5tLENzCYYUQu",
  "key5": "5qThYRALPeqbk54vdFeiB1WgakEhqBe93or39n1s8JySu38NVPmaFBUfe7XsZcpEJoxNBxFnCMcmy7dbXSoJCcqv",
  "key6": "CfT5xYHNuxsSvk3qY4DCeW88W24hGxM8NUgfAjkEHKK8aet2XQKWpmYzobyUM4CzJF6xD471DKh2fAu6bqtmFmm",
  "key7": "364pT5MLkyFxRuMoJ9r7vdzsGGu4UZ8qTGTu5raUgCMk1vz38Pp69gi8Q4h7dY1apZBmRsp5dSWzRX8asVoQVz7r",
  "key8": "43kNo8KMBRJg9SSiCA7Eh5tNWvcsrBuwScBbcV1YUZvtnQsWsG4d9SpqHMjb1LGhZyrGQyvQS22c3RMNCszg8kXB",
  "key9": "57mBtmwXFD1JFUvgaaexboYJ8c9fvhdYpGPGkFsRPTpGkvjWtHzu59m4RMizRiTn87GVBCN4tqBuLdGJQeriF3v9",
  "key10": "319otPkwst3Xo8ZgU7skwaHAVJ9qSruoZPYU3b8h87CYoHpZLhdU7ecQnGDbGZAfr2pvR7fKJScM65Yhht4SHAXj",
  "key11": "YtJgc2S7AKr1ZoUmL24ncLRaqNf2ZgDG5uAfJschz7iRhprhUWnR3vLjLAkWBmCdcNT8ZstD28zuQaoESqVr5gj",
  "key12": "4Kidaj4GSSUcvFC9Go5TpJM7Y1hUNrGo8gtCpbAB86UJiVKKD9VVB8iuv5SGiPb3uU3wZPdpDeLoR1nhX6b6f1kh",
  "key13": "5APspSTUKrEbUnwkBU32GPdC3LuM2QrhaAjs1CGXbQfnXhHuQdWJ6ztRo8CekT3KSNsh1g9mpHiv2Cy27iiA92Ho",
  "key14": "44PrR2X6218aaCK9g4wUGHqsgicUiNLfs44iaPAwqpM26hxhbjj1UAsoBERoc6CegZz9oLdwiHNgJKDJFM1111eQ",
  "key15": "39foTR5qdMBX1oyY4hLGs7s9xBGwtWooaMZ4k6TbXTSTzcS3uepz3FdW2rWV6rbK4KoY7au5NP4TCJMUi5QzF4tu",
  "key16": "3KobTqkWfdhK8TM51Kc9dRgHtP9dLhyqfhrcJq4pAjGAhNR5zGvfP3TK5FzeVhLKKtRtSQnRqJEqJS7wbvpQu1pU",
  "key17": "3rD4PoD1ZnxHJGfryTefMCRDwCdiVr7PpfKD6pAcSmTkAsoQmnGfJjHm4FHCarxXWSmkgtGoRFGRuidH1s9ns3hV",
  "key18": "3Su919XbGqTNCuXvvHwZuPfXUv1gEyBUydL2R3FwfbcRR46ANAJ4cC7EkfkMxZ42cFyJcJorpc6Xuhoqbt3CrGhx",
  "key19": "2iJahE8qhFvps4gUHcQkmNd5ppZoBa8ba4uRfkSCtNTCLcjtXMFoh6aKw3UhyDziNWbHMhxGbvfyxwC4LQUTnCGr",
  "key20": "4rjh4owqkgLYRPXhKR7x5R8YHyuGV2FuGbV1Ayf3G2xYdtz6TAkz5xqnwQ85yDHvWydpzSVbmTuxBgs2Ahh5TdKS",
  "key21": "2bztu5qMTmsRTXrytNCtrrbX4rTZvu3BDYy9Sw8tUTaJFmsbWjsS6visCsrha6FedDURqUMTusQREP9M3G1FWpkD",
  "key22": "2ECMz6BgD8hybNbNWvt9JDZkEQ8aJEQN2UiurVvtGUjKz4kzSxfqgDYqrEDU5XuUHeRUVBkvF64BsoDq1T28k8Nk",
  "key23": "2xDJosy7i5uuV5PEbQNHFgQ2bhAhFwE6wn6A5YxG5FNJXDa7jJMBiMoeU52zhVHmQZpM8sbGEdt26JsK7EncZFto",
  "key24": "2EAmfVs9csauVJhYapeaZoZV7ZLo86rz4f5m9fCBvD35ZXZb87h2ZwCd9w8v5uxmDLYY23riu8eY6wRVDnEEkAuk",
  "key25": "5Jme1SprShJe2S12Mi3JhZDg65PYR6wa2E1pKn5BMESdrwRVrtfp13gkh6ZF4RBq2bCqYyWzxx4wJ1QL2B2U4KeX",
  "key26": "5o9BYaLph1ExesPhJBENvvGkisa68NzTXuxa6rWtMKG2FgnmAxC8jSVQghUh4qvhrudFxLbbFMsHm9seQnf4Ybj2"
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
