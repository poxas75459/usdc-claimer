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
    "nfRw1mJAKzAym1zLtRHbbu3EX8kwnCihEDzWb9Ef7KK3kYYc3EkE5CU7nEMfCkjwQoZhKFMY9VXTAD79iJdkFhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vj2UQkWmG6WW2vf5mx2Vx85pLoCtQdT9LyMSGo3ESpyUggAx7M3gKm1o1P2nYc2ofQzpH4hgfkzEFXdNDsUipJx",
  "key1": "2Jf9Fears7d9eTUxdqrxtbHqjdJnWyd5LhfcqxoPVF6doaMB42WA7sWYxXjNA9c6WFD6B7CEoN6ztJGs8SQvTw2Y",
  "key2": "3ckQVEzcb7Adn6GV4eP1rbaePexNtq9pDqNZhnUs3pkJ6jKH7jRQkiK3fVPP2zW26XtVFEQN2ajwsZywMLXp7j1H",
  "key3": "38kb6v2cLH1e8GDT8HzkP4ZMX6dAJPyvd6ctrHMC5rmACmbLP61vcRHGpyCVvw9hJbTKtRFfPPygDSPd7WGMpETR",
  "key4": "67GKgL9na8RtPEN3P7tquoK4oKw4t8B8kVGNEvxaXA7dW5vj8QsNdPmK8arNpnrUi44YMaTHNw24iPFwJe6PYFSy",
  "key5": "4vsPzh9Dzm3geygRWX97yLXMhaYpsY7QC6UFC1jJQLkEm4SJQcL7yVwVh4Kn4cpdYc8pYsLedKjdBAQawfA9uFTg",
  "key6": "24nnwg5WJDfmBawPLvSPrWvCk9WZzwwmWkwZuMtarVb5EDxjHxyo82zHaTTGuzfcwPNntk4pF9N4BDPUEx79UywM",
  "key7": "UCa7FzDLpkarfaNaAprFMkG1gV6PuUBTCXALdwvX65n3bw5AnzQjuUuiriB6vKHcg4n1gcvYqX5DbKGau2bASYR",
  "key8": "21QwFLyM52tx3P5Kta4wwqdoGeMsja3XEDy1NhXWyF2raVHKyYodDXnGsWRWBQFncWttAZyTDv8vsdASaYxxRjCY",
  "key9": "2KbGc18A7zLnfZkze4G4dVVxcL5St6AL2JRiHKYiHykXNhwHbj7Bhfu4oZXEHNSd98wfLxagd6U4os4TbE3uZx4h",
  "key10": "5FaWSx9JutZRJPmYuD45EujfBACe3EmYwonvQqiHJ2dT8htqH6HbDi12qvSCirbhQiyHBTG4kroRtiDDopd21Cci",
  "key11": "2apcVFWNP2eoH7iMaQWKRCgVdmQaQ1HNAoC4HF4v7WVfiFeFZWECkRnHwnojvKnpbiBfuk81SLmSPw8Y5jZ2UGjq",
  "key12": "2cG2tyvFsGiLfnqaaE8MmAnrcw9VwrKvmLHXs8jhhYqwBnZ8ENd9R857ySSNKNXgrPDFxQtYDQkhV8cUutVpoUSL",
  "key13": "3r76C2N95juYiUpVMtNHK91BVAHmCAKPWygneP2Pe3gukbBZjo2bFGNCwPFcnkc1uRgz6Am9wfGFFedgQbg5vfYD",
  "key14": "3WmTWcEppWpaETTfKKVPKB1aKfYW4YByyexnU2KmcYPvuyYsRvZGxetYTCUDjyWYvek6n5U4KZmGMko1vXL2iADt",
  "key15": "22sxDFbLLnsNKVT89gsUTeD3dxgdg3UgGEjN8VXAccD7tNi3jJJLi7DidtM8eYRg2KqLjpAQCxqzK4x25f9SDuUc",
  "key16": "2bjJ667TT2wSCDVBeePYNpNKuLo5P9pXrMBNhZNHixjwnVk44GGrbay3fzTyqTw6SBkXCHKzuyrhPGyNtWKGyGkY",
  "key17": "69CvyS5XRbwwyrwKNJEy9a9zs5uDrNi9insoRxX14Fk6sHhiB38MTckN6G1frf6yyqnhJRDYT3XDV7DQnayafVC",
  "key18": "4X4jvFwq3H19tSsK9LEZS5vHUKMSB2CffCNPJ8gkxSRJUn8W4bATSd8dv8jMS1Ws13NAn4Z1UCEcKksMQGvJgxq3",
  "key19": "2V4CHpnyyPg4DYipWcCEf47UTrjsAwpq6Vzyh1m2x6MXvomddAGgMdJjXnZL69qCGNepgLvYrZMaruiTNwUgoWEF",
  "key20": "ywhKpRZvqS4JPHs6XWPLD863eys7ArcQ49xU727mKLLgZqkiBRWissjDg9v1qvqp8T7LdQCLrW3yMvztYSYLXUD",
  "key21": "5HoLKwi5zKmDcpcHqhf1bsTUXb8qGVoKRcw4xj6Fy22FEvC81atj54wmyE123Tcx7Kqvps5eCpqmPLpG9e75mxbd",
  "key22": "4K4cgSC5YM8B89k7UGcmdQZYXmN4N8BtkUeFGWZYhAhYu5rgCXSF4H5Jw6ocDBTcCeSxkhr6h44BAw5ogfofXpDo",
  "key23": "pjKXpHUof2WYBM9UG7SuLWbDoeHV9NvwA39EUvzKTwN4rU5h4UYeVtVrBN6hX3XdDmAeeaRcwiRNn72kZk3vjhz",
  "key24": "dxwu2tccP1yzu4Sqme788sMGbiedPgp8avvzf1LvdcH7KETgczShE5qdwpL4rcnnCoVsjCzfpg3hG5G29un8YKs",
  "key25": "Ld8qznuMY7dSkgZ5bniUXYDLbGSAtbYKVfcmoPQ8c73gV6rmuo7ynsRXW6sUL4jGCh5XGt1ssi9337uqt2DpVEs",
  "key26": "BeqvcAUErWv2fiZqYtpRrUCtWFaKQiBke5MkgnkoGnVr775WSkWBj7ifsmsqt9DD3f4J9z6Po47GtR2jTo7uFZq",
  "key27": "4WuhBubjp2DYCfyXryUYiQvobSctPwSqTmNZb1sVCb8oxhV67Ex2UKxSiET94ALr4eKpLm657cJnHemoP2ucM7NU",
  "key28": "3t1TYVhz83dFT7H9cC3fV1kGM52hVE75rERAi42ENEe3XXLFd3EqAnWcozN23JwtwaGnR8G8aMDhTmmhcYpUzcSo",
  "key29": "2cAWqXAzeNPpxJqmKYnXH1SSXdMKFGSGvdcRS3U7ELZQLrf7VcywGNbdThnFmPXNar4dhP79y2tn14gK3vt2cGQg",
  "key30": "jniA8bpjzras5VdX3N9ZFD1XzeVMw1Hj9kyrjey6YjBUwWkdtgDCVMdaaHRh6WekLdXuBYB1NtnjtWbBfXKAszf",
  "key31": "2fi5msQrJbjkMoDE7Sy6RLkkx8sHCfQejKHM2bFAa72bqXtDTS2zGg18SWB9BPARvSMVj2fAqK2zt9omMHmuxNoy",
  "key32": "5XEP7WqskSNEFuenjEskg3HhYqhNrMdZmAhf2k9osnSnytpvzPR5r6u1QCAbRQgr5oCeXZ1rgzRyLYCDppNB9NKh",
  "key33": "2Z2Tu2m1rA1S7gWn8R1EwgHbH3dtap8h5ZvcGbtxniQQaa5ftC54UmcTgd7VcXyQpW1bWRMfEnhixwUSx34THzgG",
  "key34": "58H2ar5kTxDoecuL6VYDooMsEwb4UxhRAq7WSuKjNvWA9rbX8aJgFxDqoKrdkUvap3tFthtbgMQa4eKVoECofMDE",
  "key35": "2crs3ZMj8UPhUkLkboqaEUsHyeDDLcBMBQPNXT3jzfpcmpUYFthCLsEYqERN4jvFUFKAvZw9WH2ExXx7UEj9r2JR",
  "key36": "w3KeWvjjF7byfJFZQGk4xEc39WokesQGMpzmUMp96K2thu3HuYEa24ZcTjRtWCrdxZiJZwo15g3VziZUfzD295H",
  "key37": "pUPNDS6WQmT57jywsU2RzekEDP452bySsLdVJG4NHAnNVdrmH6pNYR9nZYf8XQJug9PxLypJpnmu4vfimP2GLGw",
  "key38": "3zvSt5EJ2LtoXXnmWUEfPx7Mek1vHYphaFMVSBZFL42XVARp4GJZx6m2BBF7UZGtRBawmHhBGLqTBxfVH7zjQGcy"
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
