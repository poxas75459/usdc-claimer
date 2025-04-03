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
    "23oZ3qFnh3gr6MufwSeR3XFbdiV95MzdVuY6LxUt1DVMMZk7cCoP6v7hxDnx5u6pqZysxvz8Gt6SDKMBMschpZHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4paZUFkjmXd9JBK3RdF24C7WVM6nAr6apxx4n8594jDk9it4DZdEzBTYzb4xnEKzZrQWWTwraoHQKpnMRqSbjRC9",
  "key1": "5znQdm7DN7UzZkRLhnmq4STpvLtGTco9gWNqE7Wjc1z2bBBuyhpwdfTAGy3LVQrUGM67eHJZv7r3Gwug5TjPoqjs",
  "key2": "4bSbnnvgxBRr7xxXX5JjsjkE4c31AzYUZKePQGcH2H5YbvxBzNqKatJArMSty6xdeyHpzT4gp8uaMVLmk8o4yb5o",
  "key3": "3yuAceywKDQ9Lb82SjSqiNeSsqxL8d3RLRaWfxoTk1CwSDbqSr4HnnuK7dEN6P1KumHfVwShVimUGJqqhipcyqGS",
  "key4": "59XgYm6y7r9j1tNcv2RbWcersTJNbGUYiQAcWCPBzZTRTeqAQCn32vCVoMjZ6PPSdGSxTBsmjzhLqyvnp7JcfHLq",
  "key5": "24Vtzxm36jsaMJWNuS6PbZSb5Z1BeT3BhmYPgxcx4MGcntrAfTb34FF9UD7Z6MCxzHUBmjLDXTXvksrrNWFqR7dU",
  "key6": "oD5vWsJFq2VsCGopTabpB7AkHqXwh6rA1xmnJQavZdNETFRsMn8cEui6Zx7tsUKiE4xvRYnjfH3Vtgj26Eyyqid",
  "key7": "2AFvZDsdojVwSjUrFMXHG6RxRsGhnzPHAioVd1yqNikGUHNLBNe8n7ELVKtK8ci7poa4FawjVmWzy9hu7CmWWLmN",
  "key8": "2WLmeSkXAwvf5ahmUQP4Lx3e1PJVDRoAqn9szB6onAYyuWgcw5P9RWPZAeaPffpvJDY7iZNXoP6E1mqTojGQ88mF",
  "key9": "4JeYk6R8hYk1T7CGVQTvGjH7PEATEiQJmadx2zj2PhTHfjK1uSJFRqnLWmXs2Pqbo1pEudSvtP9g3LPeEfNMScVe",
  "key10": "5aAnHHhh4u34rAu8TNxZofyVsUrKhLb97r1GQ61JLxjYAg4UmnHFiQRSTsJmPd5JkeN7h5xxCzYPpTHGBTQUVFdp",
  "key11": "5zuyjtTm5sYtiiEBaF4T7dtDCTbbWq32E5B2b7Hmnc66MCcjyCmQgoNKF9QdFupzYTVC5BJzuUS9AUiR1okfVQ3G",
  "key12": "3VzrzLcMxEyQy72rgBy6s5a5tpVnisr5W2MZGrT21xcs74WFg4jT31TDCg6Xdsx8jJFarzSDb7X5um4vFxur4Ncv",
  "key13": "3WofJMr5WUrF7gVJv5U1tNRXV2rhjWbqvuzK2DBUpMxVkhE73nE4HgesJ4UVZ7N6ReMXBPRLoy3V7Ryg3H8RSXK3",
  "key14": "ph99fG4Yf765XHWAy8VkrJhN3xQFfeoLif2NeCSTJDeShLmBtJqfXiZZ27Pd6gwAnaxzGGabX44P2WyCyERbJ9j",
  "key15": "GbqZuRtvfKvnZuhJ1Xc5LrwejGKkESpBezosvhZCDLWHHw9vKWbZEVdJHS2zDNZ2JRLwAXiaCk78hL65muQAamw",
  "key16": "43kmfx13f6Fxy3ejeB7g9YxprPM5HuKgcAs2EwxSUaefCXupXwjkozvUZSkUFBS1kmxtLVXVTnZr4ZqEH1kUC5si",
  "key17": "4y7RAd7T7m6uqSfhdk7iD5awKZAa7nyh3QhuRfVw4NRxsaszi7CS229qaYKEnCmww59TWsy1WDCqWVReSFrRvbHR",
  "key18": "3JLpWuyhmR5HpcYH6cgqmXfsPKyUYSSusPTXp1ZRk9HzSieUf5v2tBHsfq9LrNYVQ97hgcbFenq4Q7WXgHf2RwAE",
  "key19": "2bNuii7QXrugUN36xFPxNMrB8nFHwA6DPWxppNh5iheisJzCUJE1hXQoWPvz6AaNZQe6AJVEPtGxZbHN1BFKwca6",
  "key20": "3KJGLn2YVNCUehXwAenUvLisRwyAKFoQEC8kMjikiHzaV6w1A7QP9n8boH67XnfUBwKiVEZouyAHAehzJcYty86p",
  "key21": "xVNGr7Ff7Wk7Rjjz6C1Cxev6VSx7wEkAH9EV91FeR58btgdYGiPqLcGU9HfvEaeugcZmBEpoW67KCejQghBoq64",
  "key22": "5CBxjxaEGHT8wgCnzebZnjWLm5owo5HF2tJM3CsyugkxAW72fm81bC33YUQfHKTobvDVw6g3ThcCJieS8Nxe69xC",
  "key23": "4YKvruUzZnLaM7FmfGevzwdA2XcS639sLCzR2phSNhjJBcpLA8opvJspJduUA5hSjeQU4wrJSSs3AF6pB2YDGEDQ",
  "key24": "3omPMdZPZBoyRmVTEwPLmLzMxU7BqcACPbFo8LcoYxWdyznWSMtb3bgYxXbVCfFDXTAGZCdfXM7QvGCC1v6YRdkh",
  "key25": "33oJVYixiHhi3pSP6GTCgZZrFxMK4H4dBBJorGqNqRwf358UUdWR7X7UyV4fPmjjpTiCgPUfHcU6tJiDxQsoHA8h",
  "key26": "5AqcFAj4AzqGUQJmMfDAQEGLtLiEpqRHdTqNdfHH1n91sEKG8tE6dpqhFg3vKh2W48Abjsiq7625NmWnq2t4FGF8",
  "key27": "tijm8pJvJRdMLkqsB7TbGmjmZLr37PZpwynvM6hnDiZqpWenjfkrR1by6Z2rwR9fpLe1pUhGgrGQi43P8dzP4hS",
  "key28": "yxTye2VJK1fwmoVGK57EbZiSQNNb9ad8iSHcr5J5oxbDCGK18bwfUNbmLp7xo9YnM4J7QrzYqB9irMngyXhPY1K",
  "key29": "y35hWaPBk6NimRBXy98Zw3ZSrjTY1zXdP7cyC5uHBQvWdq4Z6YAVA44G43awd7KRsjHPknHaVnf8h5SPx5voPAd",
  "key30": "3c8mCN5fbz1riufQoEjWJCWzCdwbR7VrdfmxRNxxabDFaLXYM5pks9vuq2EuUzhLs737ym4uLn9xo3SRbTzSPGNp",
  "key31": "2SSHPP4NHySqT2znWqXtHcFi8MuYskjY52wcZJrJs2mCzD1G1xJYSTe2KKfgPuhpGt8ktttAksBp7ZwCdB6Jxe3q",
  "key32": "upq4pmvoxihDFmtsA663s78e55tJ4Z39DH8yZC2yparu77MRrrHZ3hvvgYhtgsJNgVLnxjwoxkCZzpFYbu7wYM8",
  "key33": "2ZcGcXNVz9qFJJHKRAeifyapsZmokMocBFmRX7eq9jcRqSBLgo4i5eb8KnxF7Kw3CeeJBMUgjfmH83P1M517jxtz",
  "key34": "HkMTR6HSKfzarKfRzqUZ2qqKWsoz5Jjycx2RgH3h494w2Cj5LMdr5BhBqv498UWRqAbgRGvR1ZSohibiT2Lqxbr",
  "key35": "27Bec7uuE72pwPfgN3FYMdibFW5c8xnvm82ZAXEWEVvMvvLhBsaju2CoUVHBbbj8bjAfmpju6YYUt6fx542KM7GY",
  "key36": "5GAKaGTKmhvVs3azWW8xRtPssJdo61mprFgnYuBDvz5xwYLgaaoSrBg4qEMqRsHHF5JZ2yN9aT4WtcUXRKTGoZFH",
  "key37": "3mR8GndMEsThc7upqjKpYZmeAFKZqhHAvpdnMd79tgwyejSMHG9bwhofHrivCegXmQuVmfFN8rnoqEHicH14Yuop",
  "key38": "583wre1nTapvjSNcngQJsD6CiaXYMxpNUkunP9AdXmF2yVAVA9gewRmu5724FwphzL4vf1M37VNxufSmLqrNVamd",
  "key39": "3fWw23oaCynNTyo6E2hhvrjVJEZMKwchQmoWDmAmUD47Wwwe45EqdFb6DaSXuwYAL2VbRz2VNbH1xNh1TNfnNZeV",
  "key40": "5sCcDTcp87xXZqYGZw3qHwS4d1TdSVoEnoirPeiFgJN6Va6EoR5ieULry4A2cCgGAK8xyf5ubYgVmfbgogjZNSDs",
  "key41": "4mGLyzpeJhyy1xGzXUrcf6DkEoJ4cboD2DUVaRgvDnMDgMPpeo47BE3YUaMp7F7cdFJ9ZNrn2PV8bsDBPxUBGSa8",
  "key42": "4scJXz84GpfafabBMFPXbNh6tgiVfaEsqdRB6pVtBtvrD9CNUXT9uzCWYsDEYDfFLtLWDKbZJQbXbvEQcW9Ss1k8",
  "key43": "64B6dqqgbzvBTWWyF4ZKBwMqRsvmH9Bz8QoxYuQMczDgkuHS251YnqBkUEtKkLmQ8rivCAGvMRRcLCDfjdEtpWGc",
  "key44": "3jLYbJ9WkUncqErCvG5E49pU29SjMkfHyxyrBreWG851mseEKoemmcVRxnVVPxyFAyr6m2MdQMcpvP2Y4bxkxe4a"
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
