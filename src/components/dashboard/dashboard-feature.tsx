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
    "51VcogeXjJAopXytctGAXFixnznBBWhC14eKHmSebbcYo1hm5Bbp1zNonCu1sbH4E2ZgcxoqRBnZ6a7s6dPqR8po"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Aru7xNp6YaxpTNuybYy26Z5o5tV2RdfKwf15PBSKM5PWk2gn9uUhr6gvns3LGTBH9nqngKRsmv43w3b7k79tarW",
  "key1": "p1Bp9pNPCjPPwBxFovhnvu4PfJSKDoeLPfogGPoZpe3J1KbtP5XZv1hzsZXfnY9bFwtoNDN2ecttXm6mXsPQCuE",
  "key2": "5S3i327YUbGLNv5TGYMNZTBUd1v5TPVtMmpdBrKRdncuXR47XR3y2Zambhn3ExnX2dt1P7iFYVDLgibCu1C98ALh",
  "key3": "389oxHhWA78Ut2GVjuVssRxYFd38pcSyvM6tbZ4faXuBrQ3DyZqHzgyhH9pSRVN89WY97DVSWpSvcK9mau2kinAm",
  "key4": "P9ynReSKyPARJxmdxwbkjKNx8GMR2P2VRpNBmo1kmTrNbA5quX4k632VjCxUqhPgPtniXx99sPqXU3J9PvT6tKg",
  "key5": "2s5qco2wmq7gK6QJzaS1Vm2512wMhUTo2ASSBy7f6TuRh98kM9VX3oCcDDKTJSouYCpnjC71AqXX3ETztgdJfyMT",
  "key6": "vvLRedDPUBqnAHUeqguYihPjT56kShivPP4rwqCnn819PGATvUF5eQxvEJ12ATAvjHcfB6h4Szdipkk1kRsiDhQ",
  "key7": "TgZTte9G2WnJwPiJQCH8GgkzJg4Dpm1ReVA56ZR5PHk19ZxXMk1c94Ev121xWGybcJA6dzxSzhRfiPeWGYUzwtU",
  "key8": "4FZcJgvCPLzoHieCq9zG2QwjnasTsoZ6HKNzXakCfDG8p33WezwZSZCUZ5Dr8S9n1ycaRotKPkvL9JVR2j7c3NMz",
  "key9": "2UstipgcBtsy9fiVi2WyxnNMxAiAufPRjL2uSyxZPV48Yf6M4X8SFhmRLvF5Jzyq7yjFJxXUC28fAF8pbGuM8CwQ",
  "key10": "24KJL4D9mTrBqzmZmBYYbu6DKB2NStjeG2MYVgParqoa2CtbDpSNf3XcXQNW7i7p9oQBTjKqJwPn8yESMgJ2XAVP",
  "key11": "FyDSQycPrZkKqEN4LHErJNEraJG9VG2oYb2bWwwhXp8fc9R8wVLHP5zk1YsKgGbtvYk81haHKQpdv6TDawZMP81",
  "key12": "58e3Jn8dyHw6vGaVWvSXLyrd4ypYyHw3aQSRtPgDpoLir8vwGndDvoLTJLPmKNP6TjShyhsUYGavZvo98o8wa62k",
  "key13": "67qVr2AUTzJmwCue3m1aMVNuUxmsVPoQTA5XzGy6zmvxmM6o9zo9BW252gzimTC4Mp1hhqzmY7d6o9viwxDtfr8Z",
  "key14": "4FHK4DE4m1cH58i2Q8K8cbi7eHwre1bxfcJhCT6vUPifmhns5nb7UtFSifHstweapKx8iY7JeH4p1TTJ9CpeHHew",
  "key15": "4eU2iVC3DAALVzM1vy5tEpJRnwVUEeTYvPKnXuscWJWyK4H3bk5gemvpTwkFwNNsPRRpvBuX2exonrTAyY5Kj8AJ",
  "key16": "5eSXeiGgnZdCHrKMhLKryumJfa5bW3gCsXy3v3ZxseMFNyZumVwyghEehX2PvVK2VqXFy5UdTeNxh7XoG2zNpFFe",
  "key17": "2z3mqjebUScCrUmsq6SDouKwYU79okSRVqjBdWuo4K6W7fsGtb53wGUyXu6PXoivhNHxPQGEsevsjycQMSNohhM6",
  "key18": "3smLdghFtX5hEZSDcxgqrg4FLtVZCEu5cZbro88z3HB713TDdgvEAfg1S5NiKyrW8XbjZKZ5oWZ7scYsj99oxpaP",
  "key19": "519scDTNSfymEwHcx9vXNSFi8NRdn7LHR5nYgUA2Cs1J6LxiUdUN1sJB3ZV7ezzoXtDkrRbBPmitpn4kyBFBEtLL",
  "key20": "2GJCLPNTURocq9Q9SW8sA2nXuH7MoVVU8sqj45E2f7RfBJUeF2EaVaqTQYvRn37F8NeWYA19sjjzYz8SF6AyzAA6",
  "key21": "ZY6whXDd2de1KQYFsNv9VYz4GuVGEqm4Ga2cWoH3E94GFDpgrJHCZd266hgtoq3vf67Tg5q7uVRVK3rYrNHt99W",
  "key22": "57UsggkydihRzvZfiuGmbgBKNAfHaWzEPMkzx7Xmng4ZZppmSusypVpKEEHvkaYUiDh1rCCQg1eoiLH8Ni9kTk9b",
  "key23": "2oe52TdWfT5GwbncAqDSenecZDsqHs616ARnVuL7ES1qjjJV3PEYebNH9brPBsQ1BkFiNVAfnjMnJCk5ywmKVHi",
  "key24": "4dAccYtpSDNAVBxjRzeCZojycXNc7f3M8KCJBQNmHfHB3ph31Cxk9iWd3En396wqWPnKwPrNfRzXrf4v5FbjbQF9",
  "key25": "RX2jTvYcd8QYLjZDb59PPNLRReAULHruKGC8Ng8Ay7NxNdnfKYEck4USseAUCu52L4TyjUm6bxAJRWofedE2qUj",
  "key26": "3XEqDnuDA9VdHCG1rwE3PNAuuBZfNkwQKNeaZDzb6ef7seNqqp9GdJcW1tayVJ97UzNBRW7prwFYLPJChQ1X9cgb",
  "key27": "3QJRcW1yLdhkmkhznL7kGBK8zB9hV13aeBEVY6Ht5dubMewuD9MeTkcYTtkXbJCUa1bUq9ijk4CcDpv2r1wJyJsK",
  "key28": "2SXA2aJnJ3RYnVGUqdJqV9nPyc28gFPjpw8k1kQ9RiymFga3b6r61VbcqYnNQQ9hS4r7zHgafB3ZHwwWGYjLkX8u",
  "key29": "2SLEqa1d3WvuAuqiayH6ghsDGxJ3orocUqnxj9R7JSs8oSaDgiQ5vQn7G7WnYStakC1KX8rK1beyRMUvcWJERqSe",
  "key30": "4izFBWyvhhjySXGTDyCTa2igt5VmCzTonbN7DmZoVgCb7t4DRaTujZToQBnaKwinBFwAJij4GcvcGbj6ZjfZMNNc",
  "key31": "fT8NNJezQyE7ZFThXkmdS54n2x9DBdDb9vi8d6gCeqQEPEFDwywvcUU8a2WTcUhAL48dBt6dYVFMGgJm6QM15jR",
  "key32": "5iHZGdp7pKRtvFxDZmh18vHRWCapG3CuKqq9AadVwHkYz1tG1CLvJr8xwe7AxstSxHcGp6hpBsfcsvLzHnVu1gAx",
  "key33": "2rYg14C6sAWyyaMCza9i9XR7jhg8fnARFe2WbYWSH6jYgNwCAZuw54iGrXAp8fAj6531FBE8RK8zPJSxo3zZuVSy",
  "key34": "3GPum4SreZ9nfnZPSXcNrHVGBZktsVPWF2NmU5ULjXA6WLEsDos8sXqHwLu5nsup5gECDjeD22vkf5gvUZ7wSnis",
  "key35": "5ee3zdbFwr6LcC1GKzPjNpnw7sF7hhH3TsZFYgdii3GUu3YVrVBDL8gTfx1Z1Lq3mahedCQTX6tdn8EYkuXWWx28"
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
