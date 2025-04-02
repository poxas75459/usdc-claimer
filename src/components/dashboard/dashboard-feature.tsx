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
    "2yd7vh2AB9BURQfNWLmMa3s8EQeua1My4JywsP98DuxWDCbwEnsYEhd8mTF4zikQS7pitB4dMnJLnzJPe566Vba2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zf2BwXqtV5oYAKR4Wy1nJqBM9GvHw4yishKw3pnKG4KEnokQCAJetBiw6qmyZctU4nyZq8zAWgpyS6fxFWuymKE",
  "key1": "EtKUuXKmQxnRMXqDDVj6SHRxoAfGWDzWCF2eF6uWUpk2EzBqjauGgsbpaqsiLPLqTxPjX4mRM5F1xs1sc2eYvDU",
  "key2": "4cEuXdUh7Q5VjQLXSLpBLVrJkcyJUT2ha1GtUu8gMbp3xQYuHSfAo7AbiK3bymHU1kRtYG5RDD8YmSDbQcirnWhB",
  "key3": "2EsjagmzdLekD362wBiMFALRQ3fufhLfK7h283HAwqqvTdATRW7qcFZg1whmboqd25VfjCcyDxzSvQK95TEaKuLh",
  "key4": "spyzMzYCh82zkVC1TfPTLU8iucnKtZA8f3JqBRfZThhitunFeUN4aAA97cczKqLaPeZGDtA1WiK8U8c4PcdJ3dE",
  "key5": "3mKSeTfJ1h8q63Q13pCb1HfkXnKYY2rjtRpxqpm3f2XcmrETVoj9xWKMqRrUD6Ax7Djz2EaPSbvqJKBtRZRZEKzU",
  "key6": "4s9aC8MrotKiAYEkv3LTExRdsFLp6xUv6jRjqcog2bQfu7MQBKyzeiMP7XnN4VYGp2Vfru7DbwTByewAzazqdpiD",
  "key7": "5ZS8KvTnZuG4NPidZAFcUAh6Cjrnsz2pxCZrxD5XgyeqmX9L6kHyqw4uTfzvo6sJU1GzpCyHRUHDgHFWDFJJ4qHx",
  "key8": "uG6wUwVn4Nrt3L3K3DKJgnqnp7NYP7fq2CutMCYdVMVqSZV6uDoKPHGTMkXzcQBbnRF4xFbp6kVzQsrs83iaPeP",
  "key9": "xUCFc1n5FgCG8bBhhCctUj56ChcyHcoEsfGVLz9RzZMJQ9CXAdXWL7eHLYpE45Due1zqbn2JpRwiSamUH27yzky",
  "key10": "5vVWhwMicrW42tEXt7j4wg1oj4pvJr7GA2hdXw78zFAEKBm2E4K1ZPq7HcqtQeSPUWde1wMST8P2iNmRVGM3bw1R",
  "key11": "2ArLfddgrhKPRZJjQG5xqBmVj6JqMkdvKKcxm4xS6oGHWdh7eRp2ZBbxWsgaQsKHtWJGCFnV6i6ZGbvRK9HYV6v5",
  "key12": "3ods364z4RAA3LCXReq51xsxzsu8DMeAccR9otp63kFokujKBeA2DqJAnkh71HmpJyYsDyXDWoi6hVEQmNhbbMGt",
  "key13": "XVuHFNrCyPXCB4rDv6My3egzSSxqZEvaPX6LBuWjLKbZJRFGa2kQbYM4KzEjecpMJWmNeQ8Nz7JvGYjgc6TeaBU",
  "key14": "5FEw4dSkiM9Cd5hnxkt5YnJbmWx5tAmkUG1EGCq3Dscrt3zsX56v1KSKcwPkpopqDg9G8FP8Um2ro3raCMWdSFgi",
  "key15": "2znhGrKdEHPX8vBPZFAqpL3Q7AHtUNmf2a8RkBQBN1qnc6NNW1hb8vmtiAYyBmZ9FyR7ykYU3EEjhCXrL4vJ3KsF",
  "key16": "5GAmUQ7edXKEPiwYZqGKLMpxkJE7uaQp4U7MNwgHWsr18NzjVxKdrej6ypDgspuKGUA1W17bhjXQNLhpCyGtsHkZ",
  "key17": "4VRQ7PPtWt7L5FnzwdPzhtWE7XwZSKW3PHfoGgCaHmZxovUvqJCoR3kiHBLvqQYLBHTKWMEjay7XDs9YNH5vsxg4",
  "key18": "4kzhMoyP1hNVTh7DXyatHacz6LLBd6iaC3gMU2AvqKnXWN9BuuABbTKysRMsEHQ3CnVzgjePLcvFB5FCvZ5jTTV8",
  "key19": "bq6YGMdZBxw4hwssanH9RncsVKGLdxujwVu6mt5awP24arSVqUYBQcZGyZ3nK8gGwbbyQKs2Mner7RZXJdGQmYo",
  "key20": "5zZXWXRVR8HNtt4v2hQHjQx3r5dQ7ejo1baTyDYWr921njq7ajg54oojfGXf2UYDVsV53zNqa7TXerLDp58Ci7N7",
  "key21": "3Vp31saEj4VSVgRQAictdz5V8UdwuzPHVLHevwDFtRB4SgeoZ28UeC4ZFKAMMwmSFEf5Nt14XBhxyAR7Um6NaxXk",
  "key22": "5cFVdvXt1m2mM9PxkbfiYULVkkEMKnFMN9vhbfdhjdh8N8CWiF1jPmNzS5YB9YhK2jy6DMrKWFzXqqVxWVJHEnkx",
  "key23": "3Hwr7fb7Aeis11DcSLgZYjeeoARSueyTspTe2W1SoNBhUGeUmX3uCTphcTLYLmykaAnigM11HTHJH5gJY59BTvFt",
  "key24": "oSiHv3KnvcKWpKRKprJt78zWkDA1aoSwnCoW3SMh4pjaKp5851yjjpUFVkw3jWDBzr63aKvUWv8EfMHcfTKKk4W",
  "key25": "2dRipn6wCjkxd57FgcKq3ovdG3aTyq78FVyWiupBQJc6QPZwz9fVMpPTmy1vYmuWBtPA6bbDTBFiMqVbtGQP74Ho",
  "key26": "3d3bZ1RfZFcJTTSVzWB8XpbtgqoXyADjAH49FC3ZXNUzSScpnLzBNTpqaiwcGP2CtDcP8vrH4tU8ZEKuSTmmu4L5",
  "key27": "2rRg4Bri6hGVTmKNEEbVmZMM6iDrL8Xf7oPqjCMkfRj896iqJqocffdCekxZvGpzLnuF8xEqzbJLALTPzcKTE4FM",
  "key28": "5VcEQCzKCL2daP5spC8ySrTywzWq8Ck6BYX1YQqGHr7t286q3aUik23jufvPxD3wn2u23YjVKQ546hDnMgKt2wC6",
  "key29": "2vtZ7tfhi9YR6tRjC3toRWSzWjf4Ro3bXMFdVULU8mryQ1rzMVVPnXRp1ufqvQE676yyhu1HHM7kUHpgnAWnBtTs",
  "key30": "5XZ6cUDAWL2KLiUCw2pXpKhnwwgt2tm5jiu2Y1Uhk27iah4sEfyFh8BbA4hk7K6iW65wg5n9H7qJyhsD6G1Pyrk",
  "key31": "51zAydg4dueL3s3wevV7xw5DxLJ8vV2Fq9EfoznCf3sGe9qjzfshg7bDnb5x3t8aZVHRv8HiJUQbyPkdBio9e8Gi",
  "key32": "2nws6MWzCQcNFgJwEGWfAk9cJeooo1yydaeEpND7w2quTzMP4McCcrCjHFNHR5fN9FMsRo2DfHuBgH7LKoMnFWs",
  "key33": "5C88cwNfYnaphydq8XgcMehWfkLR3jQh261uUki7MRm9AmSxHHsyvscrEq9CU6Tuqr54Fd6ySNDTnMeSxFyYuqb7",
  "key34": "tPhxcDPdgkAEbkfGiib1iUih2azicKkNUdLH3aKCraxFkwaAQJRvcFV5r7QxKySJH8CdBt5fxGRjqdmEDfZEirs",
  "key35": "2BNrXger4Xd4QEisDmkN6UPwdy8Gud22Be5KZU67ZZzk8GVcWrswu7g3NMxvcqeKuEENPRYGEgTdWHtF6CyrGViP",
  "key36": "3USgDkQRSqmyZzURBvr97FASsf2szFiMTXG1S93u2wgLewuQxnwnT8P2vomZPrDDqXmw4WZB78Qsx8YEHumdh3KU",
  "key37": "4LUiVaKKwFjeEdfUVBxTrujePZqX9Lc2dM9CCgf282wvGoGu7tqaWiaNEac8s3Se8dmf4j8sNsghYWa1hxMqg2hw",
  "key38": "2ERCGLhQ57qD4HUSCJPGrJQQix8KG6uMZxkXUabBrLXurMHFpLq8KzAs4UyqeoFxgCjXRjGNWgxh8cH5A8zshHzw",
  "key39": "3mxjrKMJoXopHgBn9CWoppu9hGv94uAnk2KxpWMmuMMZpuRZt2dtdCdCYHca1YsUU6HTB5kp3z2TdTmQaE74Ko7S",
  "key40": "2HkqyH1FaDPhzSRgtTtR8eZQP88U6ztqFWdhm8pwKqHwo17eu2mKYD2oYnfYRM7zLGPcvuwUMtUfc4tqoH4bdB4v",
  "key41": "4CV4FgNHrGfx1n5B8mEWCEmNgC6supQLzbuomkbr7aakRFP5JxunmyKscpBhGb4QeYjzrrLxnmoJBozStszuLm9D",
  "key42": "4G48haCLeVdKgdCcYfBKD3H6qvsSFNBCB8grDiHHnrgJszVyCcEev4ShnJqHJzsYh34mRLJFSBQ6gx3y7uPEGo2t",
  "key43": "4WPToMNpa3bscmsR3khFZxttqQPKkCb5mbq9PMk3KYJzdafNdqHaKyXwWtYHcpXRs4GTZkaPNKkuJ1PcQ7DV659j",
  "key44": "E1DPputej7YoPADr1byDWfLAQ7wTDvjJU2PGiG6NitaZkx2pm4qwQiUZH33ni6PJWCwCyfidxssnNGrxEL6Lhy4",
  "key45": "39cySaQUjugMrD5wufJF8wzKirHwNqragfkWunx3VJdtYVV7G5dgbSrmECCnr8uw1CZ2iifk7iScZiyjSvFWAk81",
  "key46": "2odEXMhpmM1baCVzgBj72g847YkG4NXYNntzA2CBVt7TqncdeN8tP4RUKovKSMUeWCGRCXmxa83b1QkbWyUU6E5D",
  "key47": "3XHg2n4XoidvtxffCPpvgcfdQR8oB18ssuCacUyQibunDwAVvgia1VMHBYbixV6nWvrQW34VrviDBWb8eZtMot2X",
  "key48": "5x7ieqAFi6vTMSTJYnZKmFshfHtpQR3LCdmv7xqWjejz4QoskcnYuh1jBgWKWWcKgGmL4YPUJrEKazhVpmgbuTky"
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
