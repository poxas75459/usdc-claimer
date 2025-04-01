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
    "2kFsW6sHTW4FgiGU8Kc8RvY8R8KzxCWWSio9eUcNGma7UFzXaitfDkK1fTcV6TwmWQrW37wqzy6Rq2J6N3bA7jYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CoUjGagy1ayQSnDV4iaj7qRPGLRxwTWA7ArCJjKBMfHGd5cAMjmaPMRDxyLKxADkMDxiJfzuLumhr95Z3ah1jXv",
  "key1": "4PMGhtrhr4VWUEUeb1qH6azWMHpr628wqmzrHMT3DriJeU1LSoseUHtX9Gy8bQG7TitsLRqye3mBNc2nc9fQpZpx",
  "key2": "2o6d8mdMb6dCaAG8wErr3qfKY7p1xQzH1y6GUdpPw3JQ7dByD3qXShS223yBmD6wWe3uS2xPMzymcZmHgFCDKDXs",
  "key3": "2ftRArTXncHUbmPFDm7f8cwfBuntnrjmPAW29nn6NaXnpgjnTYBWnnpaYx4vQg8Q7kaZQeQ96bqQwdbBdi7sevYR",
  "key4": "3zHRicVCAJGBMspzdjhnCrkdH3vZR1GpYgS3t4CuJ6bQwYRLCDu8vDt7zoQehnmcxQSaSM7ZTRkpjphkXaR4c3XW",
  "key5": "4dNRmvqaNyTejZU4QWkFSpDPDRCLgvxDKK6RCQMtoPkN3p98bJbfdQdX697JqwufaBdDMBPXZm5BZVjmgksqeZgj",
  "key6": "57Kn2zRvjnZTrEyuYertdkg5ZkHqNmPZLkoHFKuBmmQ4TVa682s5R4oMh8ywDR1WufJ4XyQRuZq98riPNbqaX5R",
  "key7": "K9ZovqiuquE4prrfKHYGu8jRQDkCDtSaQDEapCgeued7westCp7BVZqUyj1uQsiZWbYoPcztYN3iPjQ6qTAWq2j",
  "key8": "5hzJe7wfyBx6zS8ewunEK2TqsZ85q5dFeUoEb3W4isX5yMBH2aNQsnpXT31nw54Mj7AnpBqVN1bWbWFRo8wGwzkU",
  "key9": "4eBQi8Pod6k5mUbMjiuhcxrACg2NVivf8KAV1Udq26xkeCKzTrFn5Fqxy8NRer138UcJYxxgGqmhxRmnkzs2jdXN",
  "key10": "4SH2reP3hk7b2NH2SU8LEjpz8ssv2Rd91WWik6178XhKTyB9D3wpMzhoZUi1xACYv5Dh1f4KRP8kLuJntQZcy4o",
  "key11": "5cJGG8DcKirYz935MUsFvGro3NiVuLr4hbqQ8tjXhi73oBE8mq8Wcu4zBteAKXHrVqCTGzbVkWPo6T8HhFY9ryZN",
  "key12": "5wxQDpXhWRMPaRfVGCX5XEpNtoh7ex9QA38xW857zxVnCX4Cw652xRdK9YoJfiDzYVAtNGm8BXPZBiqE4Zaiqitc",
  "key13": "2Paz9MeksCqTLoTaNa5pWVbX5fsrDkw1d2jyQEeRiVyuzPsWm2N7HxckqqZ6T3s8GAkJSdcbBdLxYwVbQh3jaASC",
  "key14": "43Ytj2j3d6imw52vtCL8zrc5fk2MR24eeD8iKcx7GgkRibP1noia8zqBNEwPWqZDF441sR6i5Ddd4BtpxbXNZkw4",
  "key15": "gqFzPqo54rUWorgZkTtowT59dwgYzofztuX373PirocNSu7HZwS1P3bim4uqtKkjmY7VtismZKSoJwGTv3wCHZu",
  "key16": "63D2ZCEQThMEjK1AJWm7b2Yzj49VU95DVDNiewXXUGSNVsKyx9WVfASq7HhrEbUnFni1dvbS3sNnsb5wuomoAtMy",
  "key17": "4GFq6Y8oAn2PYhdSQXUZPGyagVXPjCGmmvWP2BhMHdJopnzhzz8GFkRj82FJQDZAdQRrWcmRJF7576NMoQDocvXG",
  "key18": "4fzjV6BY2a6bRTXVxSxs2Z6ywLuQ4srhD1dtSv8X5XftURibg3JvfdgdQvMToj8Fm3Px2CfDAqkhFDUumXawoRcC",
  "key19": "58ecW7uTFiyN77Zf8uJudJvhR8RmL9eekV6FPgP9C9cSM6kPrKBzR8W5QUzuJJFyGrwfjspbkG82zJ9zXGTjpb2T",
  "key20": "64GYd9ai3hNdokj2uqRd5bpsiHKZvSHJhGEXYLvs7HSPLQmGRd1GXRCNVV1i2qM2cnHPn6fPrwBiPma24JLDrLAi",
  "key21": "iWznaJFiAvi41hc5qcpaeDdDhuykDx8CcfRKFprdTPeA67RFsas7WL49pVXZWieRG9cYrFXFxV7pVkZZFUBUeCT",
  "key22": "5aznmoGdr2k19aBF9krdXaLQ3gH22MD7nn52Fv2nVbNA3zEZU7Qz9nYNXzYAmozXGVt8wuBzhPaE5Zdyqru52YHE",
  "key23": "5tj4hgmYsqJo57zBnkLcRFMJzFiNSmYv7mcHvmNmXqRDk3YjELwY4aT7HhqpYZHLcaFLnfQn9pgxvBwWVwZe2wxt",
  "key24": "pmrvdQgvxcQtchSVYKbF9LU7ZTE72JMwH2xGAqwv8z8PtuSXXzUaUmUW9sPKbxpa7tKd2LggdKKFHQRMZ6qGZ6G",
  "key25": "4ZfuqSBSHWoQYagaRUzYLH8RJg1nP5TRM5grGhUmdGvD4kjStBZBbRXdQtk6CCktnUEL7CPHYsvDALdHduXUe3RH",
  "key26": "57KcjH2B2uHTQHnb4LArjvJZ8DcvEVYhCGBeyjzPS2ypk7qeQga1ujPiyTWJ3Y1ofd1siVmtLrLeT6BASArGrtbX",
  "key27": "3YU71uMeRdpAzk7HDyN471f4s5cvT3tHxrZhDxqRBWrxMV5aRcAmeMEtSJX1WipsgajYgc2nygHALMxVZURnrURE",
  "key28": "4mqZrF7QziNEhjuD32GQdQUFs5a86o8VT7t9t7HL1ynH8e8SgYjDqA2F5FbjJ6pgsSvj6tQkRdfCMMH221L6z1tZ",
  "key29": "ANtA7qiWaTLTuG1C8GHJwqzydqY95z3zc7h9tKATPWgiEHQZh3LsnC1mmxvhknwmqjQH7p8hEwkmJscKPod9Qhd",
  "key30": "96e4pNMnVoKUdf5FWgHeCYNpy7EZ87RC9QxWceoYsaySkXBZsFYusE6vUYwxjmRKNoY8ExKnvwX1SHiHh4m5acx",
  "key31": "3fVm4uLLxXuF5LAucXG1zSrLe8E58R2oZoorLuNe7ZDaKJa1RyG8sYQRELMPdvjE3A1fLXqRAfckHy48Px693n8P",
  "key32": "8myqxBre6u2dVrW8iEeyyieaCFeREkBuc3fwgqtReHvQipXhEFrhuTYyMi8a2n7ZKY9Q9L4Dk2D1pMCqvxDsHvX",
  "key33": "48YHZw3X2vvbFccpxYfL6bXMn4tV4UtXitHTY7FW9RJG6VuFQammfwdZLnbsfeKBHBEe4xmZzdZMWBZkf5S19HwN",
  "key34": "5hBFFpv2nnfqj2Mcc26SAezijEnFKHD9mwgBe1oqyhUSx2dHyLaZXydDviNj1zh1FhYnYC7GoWBuGDhFsg9VWz7f",
  "key35": "39DJ67jKeKc6V4nCbQ9BBkjgATTtUxuBorMntWXpKWE3aAKJcjxcysufNNNSPvpyLzh7E166ueuXGPzCZUyHAakT",
  "key36": "4217kZRWvrRF2L5e2JW6KxpZj5CSVYuBPPDF26ANZ6GfmGU2yQbiHbkWX3p8pmhpT8uaGkL3aeftz4AUjYtNu4Eb",
  "key37": "3DYUxSb12jx6Rpvco276tqtYQrNz1G39BP54U93nKwQGxKg97AXberGeKU2ow2dtW6ZfCYpsKwciE5EoHp4PRkes",
  "key38": "5ub6w6Hz6VX1oDhiZ9rgBXjSs9mi9mADK74acpsfvM2M2aAWvrKPzbpChaCiEW5s4LfUTkCiJAEoRfVw2cKE1CgN",
  "key39": "4UTVbN7Y5n7qV1J8epDohi8bfHvsPjHE4JFwMmSs5uxYa4DTJSphaTto2HLfFe9Mm2cVMcTv1EPxjAtmHKxhU7fj",
  "key40": "4AHYKEzorBnYwcsEYmGMMkyqAHLNk1SCddcxtAoECtUpeqXnwDjqAHWYUWcnuHJSxaiYuuVmtZ5JH4zGvskEG6rY",
  "key41": "p9gGqohw6kEezWkkba8i4uhqHaTxmxhTxPJS2GDyn5P9RF68ncvyGWg8uDipW8rZzWBK8BnHKJDXFt6uEwHn8Pj",
  "key42": "2WoKdkPfwUspE5DRBjznX4JnYBRfVKLB5bwQJbMJxJLuiQ7epgVp3k2RAZDDfsf8kc4j6xDhULkFmy5VxR9M4Z4d",
  "key43": "4QTAeeinM3k53gSwJMZJcMu2tBnknutUzTtgXjAzXqtmDzLrUDtgAuA9fkpML4SVJCmx1t8bCpBujoBp5r9ZLUYc",
  "key44": "32qZWSGi6v7syJ3rjsQFVQ4Lvyj7rw1U3JVaPjhke8uJm9KGUoHrqbuzaWcZfuWNiPGZXYYfgNk93i34PBhocfyX",
  "key45": "42kFwkNiu9GoFVbuMFZffGiNVUbAhJivvpZAJctC1JGC5HBde7dPXti7zphKYVrK7Gsj14oNKamrZNdeQAF5G7R7",
  "key46": "2Cuc7LwwqgAeH43NVpkKVEcHqC3HGmNMHre3Tsu6um9t2bMCq9wpRNk248QaJZFdkc496ihw6MinFPJbnNw3Dihe",
  "key47": "2R8uPs1wx3N1hmHVSefVHVvNDro4B9Z5F6UkwGXBfZ8MRmpDWbSPsNV5L798TSBoBskHQfeuXiSpMuonvn4smECD"
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
