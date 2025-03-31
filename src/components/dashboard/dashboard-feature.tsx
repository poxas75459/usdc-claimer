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
    "22ghp4SbPs5awynS2hPG4B5k9ekToEQQdzpG9bnE567oh9fav4yw3gyxAWNgAh4Rc7w1wsVCFKDdMtvwQrG5b65r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EaYgeNwNwbJYGsrqauAjNfd2dV87E8yF16NXhGuTYvKa5U4oUjU9RXnEgmKvCndNAUEkMjNC61zRJgCksLrtQb7",
  "key1": "28YkoouFnM1QkP1Sum6LuwoZXxqP2E9emHSd1tDPZzrDQdEZ7BgqTDCLNDZQzhchDy6ah84ojcE71LXTiX1Au7Nc",
  "key2": "3XTat5yKdiqBK5Fph8867AZibAMTXGTgAKuicgf7ovjncKGx417Mv3sw9ZDpD9XGCmw2XSCgzP6zXiQHoMaE2CAV",
  "key3": "5PxBYYG91AEq7J8BNjMWseNHKZnePQG7QhY4a2bXco2Bmz3P9yPw8szLdY9Ayyws5zM3SadB9hiTJufNFjQFbRnj",
  "key4": "VFRQt8esDWwYU1r8hRvDFHQUqjUwtEbh2j6tbjTxWzaSaNhvnEpG3g6RXGjrV8bjN7WrLihTwJRJHggzi2Gonrn",
  "key5": "VdAz2ihwjT3YjeKRSkKUoJAVaXtK7etB4rHHr9Hn3oBzJjAD4xDYvBYqvp5S9kDVHEiuaHLc148BTAZARWfvA6h",
  "key6": "56UCZbyrZtX9cWKiqFXUKNPQEsT8fYx2FXHnr4dGMQW9GDeXxMSTDkTnEZs5RrnRxLzqW74KvSkmr8Dgrye1jErb",
  "key7": "3t2jkVJQFck8MfTi9htoMHHifCbi9kaopwTYiNRGcpDkj51wkTJX2H1MMNX6DGeYwP9ZCFcHmYBPC5U4yEDH4DP7",
  "key8": "2v53okGLnvWsJcgcTKACWca3XrEYoYxjdJc5n9Ei8t7QCAhwwMC6YvxNtziAMPUACD59ychrdXQf9fHZ985XGMym",
  "key9": "4oVBYNAitrcP2MWV3awjG3WVn41cMK7Hx4MczEQNfParvwrRrDUgrgvpVyHmAYJRqGEJB1dWAMkAHrKV46iTW5Ef",
  "key10": "2xLbLa15rNSpi7osAxRTswSBPLYwcJoV3DAhvHvh7ffVcgSYHMm9ou1aYpLqg2NKH6JC3RHfiv2449utQUFgTbH",
  "key11": "4YycpfVMsDJDWSg3oFUhYDbxq5YheYHe6zxiUS2t1pQvbvHBYv8HiTTySYLn5wVC8bm5xyugUSwNG5BU5LG1H6WE",
  "key12": "52kRxfLHXcrj3WUQWkTN7bd8BhdzVNt7AXWcZUhDvUs4kmtt21t8MX1YuqJ3V4SVeLr2agWkBMFwCq17z7NmGghA",
  "key13": "5RkqSV4Bpge8LfgUiTcMYiMRSKcysQEnwqqGr3KgTCDFVmTHbw67tdK13nV2TWSdtGPdPBqCJhTHHZJJ8qHHBuZg",
  "key14": "3GEFf2XFYz3hxfahYp9eRVZUgUqDhryM2yMGu1gPGyHGMwz4fV8d7MftDsYSZPqDSAPepBCWkX5wScyL46tk5ZxE",
  "key15": "5AEoDVPaCB8kTFwUxaGEAsJHw27dxvzbAGyYAuPDev1X1GNQS6egx79VYePfD6zguiJNwSksrG9ZjPuysfByBbK5",
  "key16": "rpYq7cNDfiyWZgH9GUodRsqja9H2Uf39jjMonszjpg2mhmW6AMnVPsXrG5XzD3jHADChwkdgiFBc3gJoPBvgj4n",
  "key17": "3Ax36SX1NGFbVDHsqRPhiCuGrc23JfrrKEMAAEkUMaed1C4QW5ZNg249nu6KyACsAJZJgphaZxfZ4JDouWSrxzLp",
  "key18": "3noBjVrG6VACqd3xfyH9XnFxgACCdYRL29RrHmCXk994xBmZBYF2bfFqqnZE6BRuPniDS76CpkqwjFtPca8y7ZUo",
  "key19": "5SEZueNwxm9VUPvmHfrUypMYrv9M6PcpGJnt4phFtVrkxy7GEEmGQpTzddEwvLUuasYPrfyCpXKTWYnesvK4ksF2",
  "key20": "DhVPQpp93CdgBoJ9xLzC5DTCawB6wjV3s24sw28jra2CdfModZnbKrjy4JSwWoCqMu8RS9xyWWb6sLuZMCcSQ6k",
  "key21": "2k8BFsMEYiL9jvrNZtNKrm6CfP7853bKqZ6vukfcK1w1KXw3Fx7VyvuUbPz3JXPp13e2pEGunUMP4Qi9ftq3idQZ",
  "key22": "2MrMwnU7iZqTARGkZL6ycdVKRNd17mmUaY2xDdczUfULkwtrn5nDVdoe4SfEjGjLdV4UbHpoqBtDnQEC3LixuGA4",
  "key23": "2Z6TSVjfH2wq2jCNHu55LmxPrU3JNdbUmpgX46rbtko42o2eYXRM5fJydnrzsX3bmacte6fkGyPEQ2KyZgFDMn5J",
  "key24": "2vyeTB3T1PArUzEWCYRtfLCQPe6WzYFEEX6dVFPS3JZdwtUeXGsSr9T5BaTyqFrArUAA3k89mQMsMRe93yBFPwaV",
  "key25": "2HqB94myD1GTh5Po51BNXTYNjykFq37cLn6EWMBMLhCZVuZJS8EcAAxDTuUozhsCRXbREwAhkmci8sSD9Kcppqk4",
  "key26": "5q8o2Q4SdEFRW9SDDxhG8AgGSqqhoQdGAampwGDbPdmKU563VzqojCk5ktMGPgtfgGZqjeromuM6Ntm4bhVFWqmT",
  "key27": "49UTbBCit6z3ahvZLYJfHqSStoNsbRAkcpczjoaGDVKbG37kPxTTXKfJVwGEgtBqu5nwYQxaC34PMgXoUjWr3gvB",
  "key28": "5nphNWNw9Gx4gLwrxHyGaApWiC668majHCv27AYZYHaoAJzUpcaYiv2LjaE9os9WhfGTT6KaGKptFqQ6qQERMMNu",
  "key29": "3m2W8C7bK7M4Z2VTZHbk3iCEb2yuKMzhMkLLQKLgafKm51W9T5zeeuv7kN1ymFAUBQUiacXNYg47yjNXvugwvfZh"
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
