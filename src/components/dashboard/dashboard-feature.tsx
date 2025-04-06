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
    "3RmfFBjyfUrUwj7ju8PVWoGyBcNC5eZtavD2Sheh5tyY2DP68uoqD6QRBowcji4iWUFavDUD4xNqg19pX8GfiEBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xk9Q7dijBJqBE5sPiRQXKHHYMGhAXm6qEs3WKdFaFhHLvtHsZhfAB3Rtc8dnhNkseQATZx68ciiAP74KG5pUXfB",
  "key1": "GwzVj4LwiKL1GmiCBr9V1cSLNiHzFcTaGPFzFCaDzJpeQSZrZKS5w8R5j2JuNYEGzNjP6Av6VztXJCV4u3fYxdT",
  "key2": "5E1xTrx7waEQdb41uBo23gWHENmLE4dnguPC17HE4V9niiPaqjAiZZ4wVMwzJNaTTAYxNRUHZsDjXqG6rWcgB9c9",
  "key3": "3hbNHznG8CvQVFFqjY6GTbs9CfpM5oQT1PoMqJ3JXm2CxcpFib1DZoASKtM5VWqkkWDfYrkxrYvzXYBo5Jt5ef3d",
  "key4": "ma3iczdzN8SVHsmr5MJv9FiurUC7cmk4p12rtkx8Dneivx8SnFfdGTkhr7xmTvcwdwMW3rYwA4Cd7LYTXkGgjqw",
  "key5": "5o2zggjDAGCzMdhR8d9d6hR3rLrov28y4VWHC4zQ7u7YuHUc3csj3JZyswgJ9ZkuSYBSeViwjWZ22Ngtt5sfCatg",
  "key6": "5xXvnqG75LhmuyWJQdCNCy8wuYBKyH2GvAU4NnnmU5y1VVM4ps1sNJGZWzma5W2V3MbXbkZCQyqcEjyRfSJYD27V",
  "key7": "3QNPJkGrSzNvXbmJVJhWttPbUsvDXTXLSfLp9H1t6ES3CGXUvdMNz7cxbxE9rZsxUy4VXa4CBUaZeLw3u1DUKnsM",
  "key8": "41KMveGK7Nk3dyzjupLhkhxrVkg2FEcRimFhwBoYTJeu9f1ecU92AZxMx7KA468vvbsUCjj7dJssK6kJGMAcyB73",
  "key9": "4jP8ZjK6VA6Cr3Xh7APpYN1mfUcusfWSnDy4tUxJLcENEFE5cUqT6XD9R1wVm2CWsLjDpbUKARV92SvHomFbLU3N",
  "key10": "23uHurQy27DPzNWPgSEnGXqzU7MKPDxP6NQ8m2bdrJUgJXADZq8m5cXe5q3QPegoVt7GVnahDdm2aWRGn5TWhFP6",
  "key11": "4eDVCXRJhPdjFUGZ5ertWXBVKr5Qqk9cfixdurNvKfzZHfzdWNgSkmHcRmdd39EYhTCmGb3uvkdD1sBNH1DLdoh3",
  "key12": "bVcqyV7dybHoUHwHMCXrJyxiS2hhSG4XqnfYBKKegKa9zz6N4WstAiYHXhuA55mGraekP6Z2Hn6kL9DGfmoqMNC",
  "key13": "3bKv29RrV455uMQzdq9kKjGUybfMyRsjeGoz6zMxYh31Ei2QiDPoaa7b3AjEoAnezcPzUb7XyaBtDT1PGRic9Tvd",
  "key14": "ayd5kmAjcqtkmqiVef4TW99FYNNLxKRvED1GLeQah3XWvhuD6bF647Djj53SLHpGbha25iNZKaBKLWsbKUj6yJF",
  "key15": "5jcSfA7Ps4wqL5bMpVpF95uST8J7d1AkTRNBLLcCgKYVqTyycvThEXNivg2yymYdr5qy6ZNDbqLjCne5yXaqS8VY",
  "key16": "5EW8S9qCY5gMKzQy2XWz9r5pibVpvpwCaFN6Zmz5iwdZvAnSKSfmKLogMkAfdFsfPbDXDaaEPgz3kTLu649MNpD4",
  "key17": "5XcUhv8Jz11R66EtEqG9aE5ywZKPmA69uDP6sww7eesaDtvd1AALqYLXP5GATAit4wiixAxSE6vwACaDkFpkGaFm",
  "key18": "2UCC1J9bG6KURP6fzQZLsiSWXV2AZtzHTVr8wLm4wtsM1eBa78nLepxvDwz9Nt99NQbYeUwv7mssHC15AnBxz9Uu",
  "key19": "548e1vyDnMNK1uST2d7uQ57aRqEgLgUTyaV254L2p6sDWa74efJtEUk8EHYhtmyTUaA4ExiRpxWGDDPUMmUNtBwE",
  "key20": "2JTbeuBKWFgK3cDSfGdw1FeaFX3kfzK1R9BeYnqybj4MNcX4MEQkhbaLqQo5zPTxxGhL7HoLd8aH1fPCE7p2jPyV",
  "key21": "62KpMneSRgpCUUuFxBBWMdkF1chv2S6ULgHXB82BQ75zHyeTggbL3HKA4PfMWjrFzKZxAu9oQHXfTjxmoHmQ9aHJ",
  "key22": "4dFFd1FKh9SnrvAkcd8Qo9yeR6htrBnUQzqGVPPcb4tVUFGyW9JNjx8Ta2EpiBa8RYGNRSb8fYLEpTsnTFCUHAWV",
  "key23": "4DGo8n72XznMzQhj1Gjf1SgpXoR84gaqpjivKKzUMvm5yDmbdfhp5EJK2xHFW4UEbp9rXTdFsqzzUFsc1FyeVYpu",
  "key24": "1PnEQYbTCR2XCPjxzg1U1yYk7eReKYSeQmGzujGdrMxF6GSKuRAr3sm3JGHcZVGCPedzZsStsMkwoNwkcjz65ji",
  "key25": "3ETLWZoCmvq3zMbBBJ5MkLkMUdq2FqMLZayegUZS6GjRZtg9g2yMG36ev3dWaNYmxdFCoKXx7x5NviBPZ1R4Mmyk",
  "key26": "2XABe7Aof16wg8Vik5Vj5J1dXhegpdWcEHXBXmY1fXcTCfkmAfpCFhPJ42MByzwJGfbjfXxHDzPT34WaWuhwdVpd",
  "key27": "2G42K435j5YoRvgssvjNE3Y9TbQLY8pJjhG4x7NjtKAvdFhjqMXKwXyaWpQRh3Y7KZyfGiRq2xKRLHYzMuENg5Jb",
  "key28": "37fUKZr37kTg3VBu62Wom87dDv8uPvg6cs1cNJDTAUQzqUUEQPNFczi7ogEXhcpgHib68BBqqpiGSaJdX3nw69ij",
  "key29": "4JysymaX8ncS2rvGh1i3ESgUtgCrcyUVJVtvGPMPGZRNZUdTA3VRdhgQKc6T2iFCNt1DCUXRVBqwbhdpE6N54NEY",
  "key30": "2ikJUyed8mjTJijgZNNDHX6zZJ6Q4vCp5KMXZMywZm1H5U5TScFq7WNg4gh6Ybw9cBMTz6n7RMyDxYZqUh2EVzA2",
  "key31": "2JUc256ADkdnsvohezY5MRE9VEF5cpvzpu11mAfu1cr41TPpk3r2HTiXRjZnnSpofeqPWoTV8dZSijgh7jYsfRB5",
  "key32": "247nYy3rWBS4nMzPXJgkj4t9dDKZdo1kM6Qg1eZ5KyvFBSLwDfTSueCF54J5GFKmTSvXX3YjAsj6Fu1QH5xTg36Y",
  "key33": "48VE1GyKKHkqWY4MKotMiDPjyZMK2DCsRbzND6WTakjcb78ojqCvo48jj5BBZAMuHHVyqtZ97FyzxachqUJkfN61",
  "key34": "VhhWj9fVVyVQkEiFNtzkrmtWpTKyW27PnJLPVyeAZhdHCfuhr53yfDLchBT9rbPaeBAVWR5o62gR5qGDdtP8YBy",
  "key35": "54ZNtbEKSuCBipQYanWP3oLWYnJu9u6vSZp7tUdLG3G5WKCCz55iAmaVwc92L1AfzqQvSmBxin7MDoRYhYYbChKU",
  "key36": "NhVgzmpwRQAuE9XHEpwgMjeEUMaEzMB4j74f7pzNnpYSbKyry4PE91kFZHvxVNsaNiyjcgRT5i27ryaftXYCovB",
  "key37": "LQtWzqqFKpWH13RHsUvp4b9xa5MD7VhhQSrBQuqSxaMCKVskikuy1A3LD4F7HUgkSdyh7XEiKFvZCcjWru4dZhe",
  "key38": "3TpbY1nqvJGkVqn9VfL4963LUQBcCuHFXCyXnprURUZMEBuYiX8WF23MPmxU4gG2M8TaQxQwHbdbEhR9FBNNZHYN"
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
