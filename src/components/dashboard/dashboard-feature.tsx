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
    "3FYQGqss9QjUaXFZUaJ4vkEfKU3q6hEHCFiaCxrhrdxHybjYU8T6NgTAzoXFiTfxk3UnKfae7TzpXkC4zDUwHUE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NUY8ynFBFXVYkmqmTNTWFq4L4Jk33GBNEvsnnKE8TrHNsaU43nwmmb8SL7BFZYxC8brihoYXMKYDFE6P2SVn5b1",
  "key1": "7MzgPoT4AwaL7rnqRPqHDDtTurgDpM2b47T739EsbtRwx7vqkpYXZ1jjEpoRMsV6ctFduE5WWDLHJBNKFqGHKjT",
  "key2": "3R8frDkwd9R9UgE7Mn8jD7LfSR2CWmsXxNXtbPiYQJnTHhZioH94ocsjNFYe3hE6txGxnoJUUaKrKJuuQsw4CCkp",
  "key3": "3QvLsmFGmhTk3LchMFTqxXSyX8gk449kFN3hUsp7tzQuXWcMFCmCgiLXKfaSRMebgRHNgeYLE5d65H5hgEjAsw5",
  "key4": "5W7ap99mHmKftmGkafqYfN5q6jXQDkwvoRfqhqKi3whTh2jinJyaJgg9tTvF4sc5xAu4L9oR3QVDykqyiSF1KBE2",
  "key5": "izrMiMHrNUohB6onaeHKzwzHnftJndeaNF7ffKoDCr5JkgeormvWtHUmBr3bVikL81pQUnaQnx1gM5PnTDxxub7",
  "key6": "2g9CKiB9T4589Yg1DR2CYk4W7t4JQp42WiRqvAvVow8uBPgP83VggT1Wqrew9Wb21SZ9TVEWzY7L7iWdxWhBFBTe",
  "key7": "3N4i3XvheERTSqd8sFL9MmWPtztHe8paS3PmwzPjmRTJgFDZ6xLTMPGsJDueuVr7Y196EL6Vz3pmyr7i25ffREYV",
  "key8": "37c7mCgztKzpHU2GRmiLy6gCtm9nrbUeYgpxCecwhFcbiXdZbua3Vg3hzXSKCaKR69u6iQ45zY6uPjwymQ2MR7Sw",
  "key9": "4uZCY37UNxU7bNjbJoP7M26VPSyWV49n3tvjzcJs33tB19sYd94Dv4RUbJFqBazeYtWSTR25HuHHqzfGBmqju6sD",
  "key10": "RfArCDUjSvmmvm2oqrip2cLF96A2Pts5W9SGzYsu86Y11B7yDbxk22qgmsdM4VkfDymQ8M7JieiUzG7gNggSihk",
  "key11": "2kAiaLq7Q2iGCrW6iot9EiytScvZYGN3FU76VjZ4Jv9QiFzbB72cEqRQpMmP92K8L7BUaQmvBanH3S7jdX8gi2Gf",
  "key12": "rtkej9Kt9g2pSQ42AjNrhkKUSrZCWLgkKNvRcokUc3FU7D9wXtYCr7zvp1JehgFbxd1eEsbdEsTzJd38QezAkAS",
  "key13": "5Yu7pK1nk61scrkM9vDxDQa7QuEemPZq7aYX1QQRjyvLF6dBkTMvfmhzLYUYHqms5UWoRwUFM94gMiXMXT41AM6Y",
  "key14": "5UNkDQE18ovVYVeCBTiRp6GtgxcybcS6qUouqyaXYMqDux29j4bbymzkDbL5Kw5544XyXeYebENkXWufWinLvFAe",
  "key15": "4jisnPQmN6GeK7dbLsyedi2F2VMnWJQc24tpvB8Lkx8w1BAHZ5vYzjYYMeA54mf2UJJE4wV85bU8SrUFCwReuhKq",
  "key16": "4sCKUcq1mo4bJmVSQkudzbvXJpiLU6jHT69H7yapMx7h7rwXU8GeTP3pN8x4idzr1jP23VzjtFEe7pW3UNER329W",
  "key17": "3eK11HmXg7FzJWKSPCBDmeXts1sxCC1X2rSXH1yTR5RtmJbERSCKDAUvo9ysraD9fHU2J1MLxK46DaRrtWBFUHPP",
  "key18": "4brBuEwL4cp9KCjWDVoKE4AK4iq6KeuGtGufSfdKoxah9eGA1X14uQbeXZkvyjRcUfaadRj6Y4FjMBcVWNPVTh8Q",
  "key19": "5mqUj7SL7QAfnaNqDi2wfYAgLgDCvUqKexfsbkkhXR8uDcZNPCs8d35hcU5dB54oeWYrKBYvnaXrqAxPUzuo5KBp",
  "key20": "514M2nujv2HVBCmnwzxcqjhGKeKdVGvWJibxqppKZnD8DKX2pWqFuyeR9hwTEdtnKF4uzdLdVN77aBgj4gsBtzwR",
  "key21": "4tqxq63N5wZLJSj5WWm4ZWiBSaakninnDX49Vgpe6WoYn7LwmUGTUzs2BQ1R3P7fsDf8bEuVfds1kA7CpX1t1nD5",
  "key22": "2hdk6SHtCAVPf87BoiXfjFyYJCJ7oHnb7tNu57EKKw6g4Qg75EtFnujDWpeePAycToksnTKhHTrG4LLk7Bz6D26D",
  "key23": "5XYbxHyuRpZZVgeipHLRf3uSttinRba7G1NSwTRnWZhtZuWKziAwwr9LvHGridN2sVfX5Ey48VWeGbRMUmHg9t64",
  "key24": "5b2zijPhrVmYWWBDFw2BmWWD3uLhGS7m7wEueJeV1KU78AD5fqJyrkWvhnmu2AA1B34JJf3ZSKwBiuhWoftsxv4Y",
  "key25": "pFVQbysCQd8df4s4vRrAKUVP1YKTazuLsLZ6btGaVX9NTh4FaNVemoBnLPMGgZdSBhjSVHRdGRvcgBuK2jmj2MJ"
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
