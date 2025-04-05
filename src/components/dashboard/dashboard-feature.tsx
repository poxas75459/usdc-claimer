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
    "3kE7S18LtUVmTQcTmUbTgE3R1ucdBqgsRL2WMUgvMykXunNtPKBBFTVvrtNN7ufS9bW1HqgoLpSerFE9NrSziBCF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TGvcVcj8fNUWKGajyCQ98p3aWbeJaJCcfzKk4xVkd5QEf7TwGjUzio943tYwi2a93fyq6fvJDHNApGJsNc2W4DK",
  "key1": "2uZcMuG7HcKN86Czzw3gJLoaPDtL3hjf3Hoa4EPS3zeEgWQ3qvhRppA1nvbFPTb3wdWuf5QWdEXw4kmkB4XcV8zw",
  "key2": "2w8w8HAx9ve2TeRD1AtxLDJxpsQ4T6L7HpfYWLWQZDfkG1JtpbXcEiNPqnFCeqmjzmc2PyApiYFW6MKAgWcKSQR",
  "key3": "5ZykLgkRFEt3wBnX5hq7rGjgRZVtMz6rXbum75KyXyXnYN3screSavJfm8qHDa6zBkR6NdxH27TyGnXbSt7NRTds",
  "key4": "yiqgaDppZbVQUsiHDj2Cr8poaxwTmazrUgEPtb2NZtrQasVx6TecoVaQhuFysCvjxDkkNX53DfMRSexhdKNfQ58",
  "key5": "5MvtGDJGh2bZssw1iKPM2gQvANF7jzpRFqSYk4ctn1YipxCWmJPFnfqZBetFnEmytzxviQGBgEJGfZmxW5yPDGXY",
  "key6": "4KWi2NU2Ueq5qmgAF2eqBJrGi3NxZZbthDpoxf6W9mJ4GPuJS1gNwMNwHu5HtWo65bPAESH8crmoHB9yV3CHTSfM",
  "key7": "4ydy1pWcCEVaQpFLKfB7CFvFk3oByrwPGQ4JSEWGxMsPhBFDzx4PUeX1EPgsuTHuDtq6UwJ1JxgBQTnF1jaD9Dpd",
  "key8": "51dqMESwwrfyHxde6tXXFbDqAmwsWKRvuXsLtbr2z2viKtkEq6ALN5rsPTe8ZKFgb6MvYbkejHFrBsv61DTeXMjx",
  "key9": "4BHa8LmpZJZC7xqj6n2eLGmYMGhj2Rr27QSGazQL3XPpXXNGeog32bZ4cScTuqPgpecDSoYAooXHtphF2JtajnKi",
  "key10": "2XdJfXkDd82mYgJvtYThad6CGxUW8uGWAUNPuFt9MS5F55mhPVWu756zwyEji6iW5TMW5wpzfkwtdi1iSF9G12As",
  "key11": "615GFesnJrrWK6JznjLr4Jz7DLsZPgNW6x1roDwPsfDyydBcz41AQmLKZitBKCsoVpwnamKBaQmSyumfJvUkDMXT",
  "key12": "5iQg4nTMqMNCjrj4GnU1Hocm2PVD4vwkup9ECcwNmfgma3V3hfMH3VGdCmhShwNkouTJtZZNXc4ghDSuuz1vx3Hf",
  "key13": "2EV3sH61daZLtBriXcndf6CXBrmsFkWcogYainmSN5sBVGShEE2GrE8YEZE55UfvYCBiy9qmbb9QphdxVAmRiYKJ",
  "key14": "28BudB4NibGckEhtZ3sJDB8bj6JCxnzv2R7pyxYWUJC4wezWVAnVUMAzeYeN9dRPx8BKqV1uA8VQoNwcrwuQxd4y",
  "key15": "3o3fwL5jy4KBBT69BxDBodDWDdYTniCEnhGpQzLjYzENBtCi7R4mpSc9c6o3yvTvjQHZ7iLQPtkTQqKqF3DdRipF",
  "key16": "3ABWVjbL5PX7dshGS4d5rZuDMGxHUnw3Gnk2B3ZVoAPWKLrhjxQRsQPgzia86osMtQPmzXnJ2z4nKCCpVai3ssX9",
  "key17": "53k2kz28D61ki126omDqG8uijz7fbYt9nGuWN2iM1bQu5ShLdcamGaqKAktt8Krqu8oJKCUoEUSUjPSZpomm1kzy",
  "key18": "5z9EAP4qFoDMmyfpV7V2iy5dzk2AAuvubRo2ybMapAGdtK2XsL3tSYG8BQkEpvyoinoK6byAbAFeLZd3jA2fibtK",
  "key19": "4FuGzkq3bC45icJfvzAvMb4QuhN4CVv366MDgMrznfdoSgU71TEFDhsd77vhvauCMimHDtbxd9u9Ufjch1CsNM4d",
  "key20": "259K3gbYYm7V4RYov4RkXbGQ6oymfijneQorNodgdGyctJc9TPc8SxQa6A5zPniuRLQoryDvjh2uXuXmpkF2uRkf",
  "key21": "HqAB9oaCJuWPCYQAvUcW1bkowZVCbxDd2qgMeGrx2rE7bhEZsfaqCTDXQSYVygt1eK7QXFNAt8Q2tb618vp2NGd",
  "key22": "P8zooJQSSvmTjNTWZ3Qg3bEpFu9tmmPo1NMp7XfcJnnaCVpnZX5mv9cj3eevq9ff8FxiwkLsT7XAUqDU6eZ8Aox",
  "key23": "3YfY3McJvJVZ1bXJL8Xz35CEUaCwJqMJkDUQhco5VNTK15daCPt63CXFj48XXN8yjZviJDi99McT4CxQBBhDwE3w",
  "key24": "2snCQi8h7wwRoih42YbiCW629w9MGpQNU2KVudgLhkttkQDEkf6DWxNN7bPSzLgQW89EpAfQ98Kkb2kkS8ZpVH8h",
  "key25": "4vq3xPZwy2hrJ3MwVr8PUq7BCkndR8hH6tAGcEScK5wsSXKty34Fh9JR12bzVUdYkhwVXveMEPZrVetmsjkctC5n",
  "key26": "2fgDYA81dLGwVRb39PQguKpZtjDKcrDZ3pwPRgPqva9FpzmZcX9pPxgdzBQvXdGhGP281EN76MLTiodRmmudBJod",
  "key27": "dnP83RPkxVqQaQ1MnxgiKRpPTt5cGwTFDKCzrJHgjrXnqNdmMvoh9khr3VXmtKz7gBEgZPAKsEAMJVTFgLLwLVL",
  "key28": "5DvkVmG5wgm32zEQ6d3mC6xxnn8CszDcU7iKmGsfaPPPjEATs9MnNXPvbVjXPJLFj79JoFD1VPj4Dt8ixtb3HFBT",
  "key29": "63dPRdydqtKHXaUunuGq6MMuGLr5B6GJhQ7WBGUazRxJpzK1pUK6yyAZADRXCHz5DZa3Ubc2RtKmZmc5t2xX3MBT",
  "key30": "6EJDVT71moT91BpjqNwgnsJ1D1TtmqBJ9cLw2TayCEmfKE8WEwqHCCJc4MVBGYMBt4QHWVRR4Uj34fXm2ktLJdb",
  "key31": "4mDyFxTK8BNtgAqmKQ41TNfySRsd2pQTLQ4v8W4uypTMh7SPnEbedMdfdp53HZesYxGfnkaRcLEy8vVtihNYKCde",
  "key32": "2TgAUzhhwxxfx3Ezh4mr83Jr9emk8y7cvRCBn442qq2BtHjZSwWGkJKEqjiG5JRxfzGT3BeGBSTek3AumUABVNfx",
  "key33": "33Fo5Ngh5SVmGFR2FSwCHB7qa91BQMtgKQUEqWUxibgFVkqkFuMde4BFxRsWh9FwVT6aM4skfvwCoEd6HnQNSVdd",
  "key34": "4PwGnAcuutuirdx3ZxujkCm4LFmu7gwtSLksE8LQthBczk74Wwgjg8duC3HgGyEfg1dt8quybWiFuWDN9BZfEzMQ",
  "key35": "21z8oacKCZdwU3xnAR5Xm8GwZWpYryZZCtu3LgDPCDpWzD1qk4yeUohAiYeMoToY4evdeC3S7ZS8HvwrQgkh7rKY",
  "key36": "3t84qz56rMgLEG2kQJTFJwvLgFU2yu7B6N1YcFrDSL1onegyHn7oMHtfoG6zUdmB5ipupJb7KYT4xftnWRdUL9uF",
  "key37": "4GogPHXqhtMdMUhhZ1AqVeFBFogk8BtT1C3f9L2FP83HXeeQYfUe5bmzZk5bHUTURyik5BMpZpesjyWVK9bSTBiQ"
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
