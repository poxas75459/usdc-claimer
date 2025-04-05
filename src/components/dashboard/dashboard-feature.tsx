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
    "nzZo4kiVM5Z63Yen165UiAidv35mvCYbNRq83w54vizt7s2VVVtg9tSjeZPMPCUJes4Vk4P97mExUWAVeSHztNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ibdBAHuL5GGv6E95Kd9oTw4v7cePfrPR9JzHniwbtbhfaUfSz7jUrkjow699aY318npj51pAYSpXh3wzfG3RVQG",
  "key1": "2AXsAVL9YhBSFkc5SF9bZd7PDtXho1hPKJfNoBhsByzcCeDHAJatrmkQeTAbv5DeAStBXApqpXvceoEF96Mts9Hq",
  "key2": "3m7ftsc8D8EFyscJz4xmJDWMU8TLMGspCf3Ktz8zhpjWftoKe2iUT1mzyAJn4Srv2hR7qtFGxHmgssBJTmwsQQse",
  "key3": "2j5TzbLeWLEoJkoWooU95XViWvFebJsL91usfPRabpBCjWQZQMRPMmuHguQUhQE5cNCVc327ei5uMUA5sT9NiSVG",
  "key4": "4vSjUwuGo1ZpK2MHm22sy6JsJvgsBfAeB8DySEs4x5e67o5J3wJFqaMQH3smxzcceQcp32H242sRwn1q7AMN7Pei",
  "key5": "46vUdBMUVFDbwU5dRqc9cbaUtkMWb2CqfRpdwTfcLWhiMAP1Lhk8YA5e9H2ebu5NDWUR89QvLT28Zn6zS2oYxpMA",
  "key6": "4MBkeoALHdKaCzw9iuPtcuu6oEZhbqo52AH4WkKRJvYykChhdjBPFU2yvNcHinDmJF9REuZ7kFxXZAeJvxUTiUdV",
  "key7": "3CGDTaMAuqWm5Dmf51SDWBopyaakQCjbcURuqYRRntnabJjtaUBaPbYH88ptt4yoPcacVPXJxXha9MLTajwQf75Z",
  "key8": "5g7VR97TNLQvK6FsoyG3P1C4eH3chpc3ruFptAzK3h9nKVsD9aZP2Drnsszs3cUrmfvyPsqytWQAgKUuw3r7g38w",
  "key9": "4EeQhg6ALVJDSr61mrr3J2F9XeruwDJnWGHntQbqwSfDSD3aiDQt2fzhUhivoWRQYVfjhZcSMZkGsfX5JNYCvtZj",
  "key10": "42yL3t1zLjZg4dg8LQm4NUUBFFqACwnhyYcmHqk2DufmfCp7SQYXvsTNmxWE7T7cWP3hSudFhdFrCHUFQX32CFCp",
  "key11": "3Js2xqURRP87FRqua1TSSBFKteq7mWMzcVU9uuvJHAe956v9MPB13qcz93WibQ8zSwGuURp1e5FLa8FA7Fe3RfwE",
  "key12": "5aw3ti8EkaPGVAxYAsXsU5H5WUksMakaoSyQwt2aVJEDmNYkBCAHN49z3J4xCEsZeCmL7qE5X2q7PK4Mg1dBoWFe",
  "key13": "q3oiaSo28CCrNE5F1bsaN6CFaRgytYsmBD6iAaB4vvRMXPY4jWDfypFDMtGXM6PxCbtprNHwjunYempF1YzusH1",
  "key14": "5xt8fjVndGtt7c7ugkcxg8R2qUBJ3npq43dt2x9FQ81eA6ZAKf2uXut3BCw2EuCw9FPYoGWFfVR38eumMWxuzGLh",
  "key15": "4HjPz2vYZZqLsuNgyLCPqrZypvL9Lv8kSUa4SiciRqww3M3iDkgcG28qxs123eGAKkNKDm2TViWXXqfZa92vDTk6",
  "key16": "4NPinsVr78vV3PFccdQKEGu523Y1mNAasdcRdZun7KxNsWecQNLdD6XoEio8D7nJzGMHvFyY1HUqn7CMVDziz3PZ",
  "key17": "44cs9v2nsrRm7LcENBK68A52kZGhkmzxzKqqinmNsGAk4qYmpdJiJLS6cXTwKyF17gtKu3JtQjVnV21fDsaHkNAy",
  "key18": "5ryL6dvReHCmejBKnxyyZcJh63QBzPSshFkUspABiSGZEQeaiSmNUYfRZFuPCWLgkxsyXfPKVu34gUR5teF7tcks",
  "key19": "ms91tBsYoSnc9mKwY2HSoj68zmdAc3SNNY72N63jWxjBToDkcfuU9HCHtdbHh8ZwL9eBrUx9sUcnfcSL2hbs7Ce",
  "key20": "QqztYKsVMhDwWxfoXBYJRbN6iMCjiLBkK6Nt7nkjbPAgs7oRQnsxbitunxgqHDgorno5v7mXg2DYVujeDyAhaE5",
  "key21": "4rm76xsBKQWcFg1pLzTrbd9MB2DvnBNr7Q6f4Fs9NhBPRnb18jHYxELv6gkLLFthEiEp72gzWgAaM75nNN8UDTZ7",
  "key22": "3Uo7vWnn6C389THerWTeYe3CySycQZ9qnLZe2fPyHxr7FV4D4cna2w3uzTHLonhTHGef2LFZQ8uP3Rdi3oWsxXL9",
  "key23": "4eFQ4pyygMQWgqCT6nWA6gNpB7PNgizgayvn4AixirXo1E2MKrMAnYsiEn3DBXBfALsJQWLpMsqFFnBpmTGCuSMB",
  "key24": "5fK4fhp92rofaBPMCowgq8ee5WvTw3SnExQSq4qU11vbgSvk83Dvcd6YNnz6EdUbJpXRh7vGqeXBWcDt2Vxiuxu1",
  "key25": "2RPgDTpVoWSMcA9P82cK1s8h5gC62WcN22QkQufCkiSMtYuHWHKMYEmsKBDa2j7HXCX3JycoEXps8HPx5rf55UVM",
  "key26": "3rcF2PKP9uxcyEcwW3FLcRCFycBNK49CUby7nFC1w7JrJtmETs7YxdpjvZE4FPc9TbJKL5TnzRNnnvpysX9MijF2",
  "key27": "2NhGkQr5Kh7dZn15qqpVmxYQT8PdHHBbpvZ9CfArT8uYrvbrGaZNK48EaGnBXd4SHCjEc42wu1ZqpH5UzaTSFVbk",
  "key28": "fj1DmT71a4XFzbLaeV8YVfFkfVk6HdSAU1w2viMWxBAXRoDBEf7ZBGSBAKsKCNdeYep2R16cYDwwjeizHjiDbWP",
  "key29": "5irbn2UycBEoqKKMf2yCCeKeoyrfbhkq26B15iARXE8aETJoST2kU2dHoifEEst19vNgfJcaiAJ9yQ4F1p7LijyE",
  "key30": "5zh7YT5UKzUfzedqEmzGPVsTetEjG5bvA7DQAtDAkKV4XUcRrPJPj6YdbZccmgs7qYGQGFwcpyR1KswWc7DJ71Df",
  "key31": "2Rz5xqAzia2BgcZHiw4g2rv3AFWGTfSGaQWypYaVxD6AHrNKi9BisyxWw5KG5pqX5GccTg3ZAL3JDtCqxRZaFpKP",
  "key32": "3tgqZnFx5eXrNBaACShz9ySVTRj95azqdmJYVpydKHgNkkJ46dTKUSkwGsrMrV6KDL1raRya2CXGSRoHJFHfxGvt",
  "key33": "3NcG78YtgdbUe3k3UDS9TSWUS3DLu2eu3ih39z5JWk4DQjnpuhaLv3Hyvprs1CyZVN8g51cttFXRVipoa7t6o6P7",
  "key34": "487jqb9MEthw7aqtQuWjupdGop6Cj5JYp1tkC95BoCkSXWoqBTnjiF9pJ5HsNFbW4rR4ZbLxBxwqLxrQ75cnmDNh",
  "key35": "QbqgPd4xZE8YKZbfcY9Cif3M6R68APf4zaoMh7k27Vw5FDreJfMFkm4QDbwMLvqVe8c7vaLigJNhkdQmC6gW2Rx",
  "key36": "2Zc259fDKNTitbEN3KCNHof2yQTNpF76UogKcchjYCdcYsdUXffihu2mDzjurUwEhoDk3cjvZVkHVHRu7ManUbaE",
  "key37": "59pCeGyZ62A5ZqPxBcmFhruihE2MVSoDEZizmXg8hGrQyW4LtuN1Fu3m2KPTNfTCWrXt8Rd6hrahPB6k7VipZkks",
  "key38": "4RSdAZkNqDB4WE2oBRL6X9tVFF1c5iQXGgUVKox9TMwMyauD5raqGxoBtKM9apa8BraAfxNTqXPjrvP4Kvhd2sRE"
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
