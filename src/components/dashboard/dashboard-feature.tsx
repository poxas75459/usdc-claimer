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
    "3fhzz1Mr3UjqoSqK79fhofCnTatv9LCGQHVJs3uQJSLheZEzMwqJYkMj4P7hZDB1jLTuUKEjDwXqun8BgdAN3jSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BYXMigFdwrE6kEbKS3bDEozRozGVXcro1pULRQWpvrEZhakqrGAE4e54YSqkfkevpTFsBmVBt52PAokRCSw6eEv",
  "key1": "3w9o4eJXQnb67eGeWZmRoHimj64nzhe9uaBVt2qMnDd9BHdEj7sQzSK92i3f6ASS1XMFeAgB3vZgW8ZeyWnCfm6P",
  "key2": "24PG2wzZvo6XzfVoFdxdwR1Tzb8zdFW4CWtakK4Tx5di3yWdPAgXL1KGo2x7Po8d5MoUJ5T1jR7ywRNtyuB7wFDX",
  "key3": "2iD1du5fAxqzEi2AqSBa1BgAVbLc6PLP6NV9B3E6r82p1dW8tzEzqUC1LDqFekshD3P6ViNVQQ7YYiaSigCQuDxk",
  "key4": "2LDqLdyfQRrHzwg4xFj9vMUkXQVRwwJWBKGeTAKygqtFUU9TjJSqyhBYerWbAc9y3giQKbPCxRBijm8sn4uKBg8y",
  "key5": "47thqTg3cjnUrVyPPuyWg7JMJ9sgTCryWyKVzMwWQVN9vP6HS1y2FcHTzECLvz29FCxj19guRfr5CBortyPjNKfY",
  "key6": "2RDh2L9L44iCHEJSuPs6iRRMrVN6TpbXBWeRtsobgC9pbp4T7ccSYVN6KLwRvwSQgbDXNDMJap9V3uEAzXTsQBWr",
  "key7": "3YKeKagEqkUCqCm2zLBjKx9ALZVBBVXagtBkU1ifojrBC35SCaF4nBHD48MV54TwdXZ2B9YHjLkgPNXoF3Bnosx6",
  "key8": "2s5TyS7z4Uj9FkPrTgLKfrQ5K8YfmN2LjwjyaxbGK85dcvJeNwcpsoWZj26qJQSnkh1nzqTZqUC3tFTZtu6eB2TU",
  "key9": "61nT9XfYHBx5H1kUMBGLnFL29EuUfmLmHjbtPmcU5GtKtH4fMX8DhZhFWBfQy32eNCD763tBnKJvCQqS9gmK1UG8",
  "key10": "5ApxRm6FYz7Sj54A5Xk5agR7kkp5YspiN5xkFnMKB4JxdKvux1XVCmy46UoHA5Jv5NjQRyDyxNq5UsUpkFMEo4pQ",
  "key11": "2K22nNRggnpDSMk32P2J5eibqoERpbQf1HVgjyP3KMfTQZdpAKw7ZMxKajySrmRA2qjKp567id45hbPsoiWjWMjP",
  "key12": "1qXcN7FL7cEhnGxPHA61L2sCnpzjdwPgnVN9j9SnaYUrX8CCHD5BBxsWKcUcNyuMUCuz8kC5sSHZLP9ugU4gQFA",
  "key13": "5pmysJZMXyjMV2RPHebYDvQ2U5jBevWjPJY4QAzB5DvsUAm3HgTNvKw3yow7XzaD1tfY4r45Sxgr8JbbpcNXJBZN",
  "key14": "5F8n4cJDDRySkSk2qzkAAKT5JEVeEtnnT5VDUAfSEM4ketk7yWHT1Sq2gekLeTMeVBJGeAN2ZTjBJJurvGxXrpbq",
  "key15": "TNkw72bdFBd6jmt8zVfGHGw7AH1sPjsWaXbWxD6wa3NBLMBmqRr19GdPUBANy2pXioGMYUN5BpBRBMXWR9PHzj2",
  "key16": "4E2FBWYBrtpdXesXLMyJTs4drzadxcC2zaXQTUA2Y2sso6pf3rzw8XAvpowaD4Tc5cVzMPf57byydTPYgkWWBSmf",
  "key17": "5hpf6Y991X7oxex2ZZ6r1CcK18FA8Ra6EEvHST1fRtnUnY27MFPruRZG2B26V9fDHM8HzbePZV52Q7LA2TCfbBWt",
  "key18": "2xu55GMGDwkfq8DKKwhjvCBwNbZVvsMKkfDCUuzTo8JuqzmadJZRyKH1J5MLjLnmaN5cv3b7CvxsNLhStHxgia34",
  "key19": "3BtdmtqRqwiCtxDMwCvK8DPWxYpyMa7rUMf98YGMVnZSKVLX3Y5XrR2M7msZz7ezArevGpJyagKuVo2d9StZVbqY",
  "key20": "2BbAdChQG2ubYuYLnpd9D6KPrVYr7Xekp4v1SyHr4ZiP9t6r5jnPbzGtwLS6g9kKDZPnPUsBbdLepvXxU35jGsp7",
  "key21": "LjCAHmAB4vB6CA4wjqQLkVNhNYikquJTC5iamef5Zb6xzA9ixHjaaMALx9N3ejzJePnDygFyW17zTcruD14zuKG",
  "key22": "2SkgFtY6HdWeRvbRhXtuXb6DzFBM8WBvDPjaiwzqvMJg4vV1QEPmPTiW8xvvcp1BuPfBssdeojbqCTpieYzhFgy7",
  "key23": "4jTUrnGWQAjys8B4ziJbZjFU62oouso514scbsq4pK9Z527wTZvB5SNciGs8wwjdWef2QdJ97vS5uct8cddCa4Yb",
  "key24": "3s1Kgbn544afqXqLXE4WbU498QT2xueJQi687TDGzsej8KBW1374zRDLAphJZRgiXq8J4voKVpLLpZxXboKfrsDk",
  "key25": "28wX33ddcobtvt6BrND3hZX3PVLHqkgeCfbxSEDHBBcS3mt2NTtySbQgEYGB9AXALTcudL59xvCNZgFj13UNQiy9"
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
