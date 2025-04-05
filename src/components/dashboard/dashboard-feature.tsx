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
    "2pxLK9rQJUnMUi8PyczBDgECUsRowPmpNpa2t8AgYvxBd9n8zVJGxVwEy8K3CKw6ThzazLCc5t2doJoAM7pNxsSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54rYHSQTn6gk2ae33mj2H674aFAoJ5p5yoKN4ajDo9XuFeaHrb6cK3WxpUN2zRr8fFBZA3VDFJnGQDVaZeERa92R",
  "key1": "3dQ3iHy3dG2qzCR936gtUkykUpsGGqmBP9SF7mMudWjZsa4LRwciDYYK4LoKsYCoWpEmLZcKyhMcZVSu8ik5zB9k",
  "key2": "28cPFAXABjexwdXhoLhorxtnreizoz92UhuHMkkcTuwPwEzJ7fB5VtwUNSjTqKKxkKHGDbuWqKfbaAzT7hJiuK3n",
  "key3": "3cQeusTdRgpsKQSMQcfCdC88d6npFbge6Uf5RMZPeioMJVhorKFiDXrSgMP13wTeFoLEpeVFkbjTtxXuWVsXib6S",
  "key4": "4f8EGMGb1SpugWZz1xEtWAUF8m7iWQXMBjx8yVVYZX3M7UtWoX8c7zrntvfseDR1rswqQWxmDJyv7V4eLLPWQGCN",
  "key5": "38A2iJdkwZsWpuVtYyTXxTH6asQtiGa1CGJhTkAX6FVEoNvmed3xSUbxsxU16TKEjyXCjEPSzdENTXLBNeC5U2tc",
  "key6": "3joMFB5EAPcauTEKBN31W1dybNw4JcBZLNuJpkDCrTD43gmzikHoCPxdNVQcgK2mng7n2hDDWZepSTLxbXtdanKo",
  "key7": "gkU1KqaGhqcU6fxyXxKfEHZR9XRDjfuxbySpvxmUMo5nvjhtMSbkf1Dhmsah4cN5xLLM4yYaY6FJSdFER1v8AkD",
  "key8": "5uTVpcbmT1dWT7hGPAggEmyRYFcPiBkRQr4bL48jWReLxdnRYfBaKjgogG5SUeWv6UV6frYCdComXexPZAw5QR7h",
  "key9": "h9CdhTTwc154iP6rbejWELMazztrY5xaA6eV2NnXitU6wnE18BirVTeX4FZaqKsknYnwwwksdojUp5724JV7WG6",
  "key10": "54JueHCmqM3ZUQiewA9HQKtp17rhoHFDpSuyLVYGSHDAzTgtJw1gy4ft8L8SLkqexDywihu6G44W4Qxqa5JgJJUm",
  "key11": "2UnxyPsCzNNXtyVMC2aTTcFTydSh8WfXnWJQQGWbeWwwzowDBhBB8jC85CwgH7bRKMhktSANg2Ad51PXGeK7fEgH",
  "key12": "5Peq98uVM35rFQvjbmKiziPEScKmKTrCJZfcUuDKGRhjHWrhXuFgSMtBdqash2542Q17hZ6ARPwn8FXzGvk2iSbL",
  "key13": "4VC8M5Nabt1RXHdVnTu6k4MWCdpChDbS18YNQVCEU5rxuCRKb3M7RgjC6iUWTF2V1u83pz21dBaxkct9AdhsHFsA",
  "key14": "59zBAsqRVLjRMdSav7Q5dbYe1h2zsrAUwM7wRFjpxu2tEvhyNUDiMMeXy1gPxTfHTFFeus3HzL7xojzMboMEhKc6",
  "key15": "3mkdyc5KAMfKtmLVUPRtRvjAMHHr3TRS8kSA16otaM8rWABhEfVSLUYY2TpTbXP67VK3r7mTfkuGKYJVU6P7BCyA",
  "key16": "2VHSpxPj2j9AnnAfp6EGYG7pSD4wSDRDrQTrkeh55J2uGxujQLe8YjpQUEsp7Nn4saTbudK53ZEbH6fV664SfpcR",
  "key17": "yzPxcARr2ytjSi7iRcntyWnN9zSLzeKU8ESZk1s8tsMCVM9Yjm3KqiUXJmbZL2FrThNQRc8G9RuTxEsjGSdzKtE",
  "key18": "4V2jAXRKCFVvNNstDBGKerExMw84tPWECQjxvcM9ntn1N8ugj1gkgFxkfnjFhREJEyUisiYKAfMTSqqqoKDiGf6X",
  "key19": "5jTdvDW6tyVSNeTUkNPVR2qsUpMYmAgACMzyq6SnJGueoWxEccBd1ahdKiouga9omvm8vNAor68ojqvicd1GvNZt",
  "key20": "3wzrK8Zf5U3EM67RePs7AA2EZNx9TVgjbnKgya9FJcDaarw3BVA1SP1APfjRnbAPdGoRKeRKsfnteZprMBLgs4o6",
  "key21": "2iKt8RdduiX6pPGnAabzsGEazsPsRnjNeFfY2TjVZJnLDFvByxyz8JrvkVaSnRrKFhg6S8CEZeNPZLvYxMdD7eUQ",
  "key22": "AKhnWRhv5d1pHg5SMGVRS8q9X7ffRJz1eVyJeHCR42kFyPVSvPGYHtghCHMeuNRZhBMcNFKJjyBWczjrfGGg31Q",
  "key23": "dxFNEvDckKVytYzUDp8uKzYathHA1zCGJhSr4apWfUFkHdstM4YmrVFqMgtciakU54KQ4BRdrRJicsogWPfq6XU",
  "key24": "yRpAEE1AiGgLSP4dxRKwD6hY2F7DcqE8648YuqDFQ7U2bsv5EBwf4D5gpd1RzYPeapx5p9M6dnAmop8TmncAQ8T",
  "key25": "2y4LGZdsqs5kduTEf5wsKTZKWt4L4FDy8fkrBjNrVSWF1ceZytXj7d1npEvzZFkVwHHHgY4fzvJ5LbwaE7M7EAMu",
  "key26": "5xNLfQb5wVjUBwmPAuwtHQWeaD8HwZyuKTUWc49LABuZUFw4my3NDS7zFqAKa6Htxj1RshyuJi2Eqcci794SALC3",
  "key27": "d3NV3zCpZ3Hc87UbFzbFhehKHwCb9ynrtsG86SPvVp9gzjbEkE4mDetZsXExwXCfvbZDps9aZPTjxAnNt4H7Zo5",
  "key28": "2gD4Ly3CmQHtrd5x2CWcBZt4hSVi9dvXiP7defsgnir8PsRMmx5xtFPsDz8DSU1zih8ipyWyvXaL1FpAooFTsK1L",
  "key29": "3bFXPUjooTmd8pvKakDAFSZjmhw2ZKPZV2s2ofnV6VpaJxarcmx7NbRkLAysvbm5hNspWnK8eBBt3agUNEbJQLrK",
  "key30": "51CqM1pw7Nm8TA7qKwLZrSNwq2QLqj7h1WtwRhcYam2vqiStgMPcQe8sMgJ4bM2jKcWfwnTBBNaZHTZag9h7dG85",
  "key31": "3Kq89NWBgf1yzyWdCjeGMLW9A8dfEhV96K12s7f8oeugi35DSfTMU2E9ztL7kXK3mDpYVdmFvs6xhRtvyiZxJukE",
  "key32": "3ZEdzh8czdDdSWRxtBKGc7Ej6R3APVMsBYSqueeVYyvaogd6KEnTEWNBeEv9WxT6JqYGxULvxFysuMRoszUBXujS",
  "key33": "3Ln3naR8JASbxRVbZmv5ddmC6a3geKjaGDEbwhNzJqt3WU7hzgWQfedJE6qvCktJWF6dNu3Va1YuwQq1cgJFrjdV",
  "key34": "zoZw6jzi8PPgF4jU1o5NTTGaYX35BCX1HWq2Yw72GzTJrkJZHX5VFx4NDYubw43KV7QXGCQ1oJfHmr2QP7UmYTF",
  "key35": "5J9HWdBDMLX3cE5FvK92n4gjyHC9qSfTnKFV5WiPMe5sqqmoStdKMcExNaHXaPhtWnYTpnhYTQ2srsf732UapryD",
  "key36": "3otUhnHxQUEPsyZGLqQTzxpG4vtf4xBgw9wEn3Gr5yj1W1TmpQkDrCKeiXL4qtSDebgTJyKJDeTSAuYMiSWfM89N",
  "key37": "5354nPCd2a9Kvwf31hBiW4hEJs75hC3hsrD4B41vsuUQCPQBrJm3ynJtKRC7cphqSRiDb6Gkrz3ZKUSqTx1ig74k",
  "key38": "66T9m5e9JivfjfmyDvbikr6yYSKs3vayTDZP9dA3viZqe2dhWyGuugF18VcGvmd9prta4rLA9rWuy93ywKtWTmhs",
  "key39": "3gHKEwuKSiwECjD3PAdct13Qtsmmzfdbp4pYAw26Cg2kmZ9BDvwR13GACMguCinBiLHj8CyD8kKmauPeGbQcpE59"
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
