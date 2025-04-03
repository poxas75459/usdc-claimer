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
    "ihHouagvvraT9zAJjFPC5JC7VFRAMpdc6Buvt4dUaJmWgmrAspJWtt93wh5Nwc7ZtMBVJnLTwSvFPRGsLMsyay4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t4g6TuFKGpDy65xmqL2U1shRumHrk8zaKx4GbbUqFXiJBbF4iSMhZbEBo9TxWfRUBvSJsxPiugnygDttLANVtLd",
  "key1": "5PtY7Bz8yuzDEosdfmPENTgJDC49WAnHpb5uZXMhxfa2mk5nxRZKUnHuzKbbtJVYRv6Pp2uW2Ju3Z33SPtQfLYek",
  "key2": "41UUcNWmRGFK1J5hV5Sg9i69ATFkbpArxLdJTCEZ8xdTD66VVhsHSfTBdCXJGNtoZRzdRM7jwHuKuJ2sLSsJ1dds",
  "key3": "2kdrRkgzmDksXvgGc4DMEDDZ1jjQbh1ZLEVZJR2wzY3Rg7UaqAdjKyoiJYe2hb5sHghGAnDHRDysSYywGXjvPUS9",
  "key4": "2qfUNcgR4WCPQhyhwbcHkWrdjprquSqwjUyU3NJyysYVn2A4AwUqiUUhaiwnoer3uQKLpkU5DSVEx3NFSYwPDffc",
  "key5": "re6ddECNj8wYQwThPkMGELGbR4Ae786v4NHPe7g29fkecxuHrSFXiT6mXWFuVxw7vdWgex7opGvBzYStwurDFdy",
  "key6": "2rtViZbakcZR6DNUW4tQT3pgtzZUBZtVBSoZntVzMdn6DCvpnKDKDSf9SxVdu2Mb7cVmGcvb5uexBYUXwasbQ2FW",
  "key7": "2d4qJvhg2vMJSKGov35DPmSb4bTLTUQDNHeTXepYT2hy7jrotbketkF3xy9b9WdUauoHnqHEntJ94epQsRsWbkew",
  "key8": "oWqRnNcLG84K6eCaE12mB568pvid7pKbHbs2Hi56Yhn9EjaKYy93Y3B18XQqZW99XkKXg2xE742WTLVmDDN81sa",
  "key9": "473xMAVJJnaqxwgcJZqwsA62ahwDRtzc18TEkdmgs3JV9Ex8zJUD8X5ZmJMWrqb6ZtMQigACaTw3xm4N7jarzQoc",
  "key10": "2XDCa4u8M1ARXLxVoqjCsa1ESwqPAwx4VMANLbo2qfH3P34YfYvjr22vj77fj2RnZgrurJm2a5FekqERzmtoyWKi",
  "key11": "5wTP1KchXcu6yebDeHEtqVRzvtAfeg8Ph6wv7aAJDexBj6xDSrGVv7rknE2kvextJ4tXVDXGiWXNZdK7qaeUH33X",
  "key12": "3T2vtsQWKhGVe7w2wRBXFgSoQ6rWbsZypPuZnSevox49aQFSZMmR2HcgK2GDNu7UnBDt6tuDz6WLscDBfTEwz6Tq",
  "key13": "4Y8WrvrhKunDt9SSmVqxn5sUJvGoLT1nC1SpipgiQD8cwSeFc9nGa6TTP5QaQUrBHDC3JEcX8KhEeSnrzdg7XAaN",
  "key14": "2cqZi7iuuGkiYtwiUJBgx4G4HsFrrKScUyBTrximc8P7VGEfyWPcqmJtEqXiPkKcb8EJrBPkZBNn3nqrjhgFj37s",
  "key15": "2ekyDeMNS3uHHNoHLtgr5vSPmNrmUQSCwXSpRdntZR6AAhRpdrcvtWtBoWWbv2xULBhFJe1ASNvErKzGQoi8TePX",
  "key16": "5hpyrHzdRFPBQgyFVpajE2yZk7wnrug7BXKaFzSfANJF793cDcvfzp3txMrT2M2AUyy9SUw7iZD4kBL7h5rgdjs5",
  "key17": "4wBMRQa32VrYu8qmGyR6674QAodUaKgNdxzqXhJ1khVADZrMFSff48GoyrydEZYKH1kZ5N8WZHQLDHbGa81z3FUi",
  "key18": "3pLAhKNDJnaEfUDHQCzQ94nPg7ydriD6YxgHSZuagH2VEk2umqw4zqHWkp6BW2GwspsEC3gjRtEhoQionfi5wyCJ",
  "key19": "4Tqmrd2JGARy4wMXvJiS6RTbeQpfsVeZVKiEFHZcbbyPub16vWjo3zkaeCvKmNcXtDFcKepaBTu9KYWMUJf4f8B1",
  "key20": "28HYQDf2HCZVcYJjuYrb2yj7NFAop2ccRAQzVeEJvJcM9NttaMLPwnK94UUXHg22UA5PrnkZfgn3g4hHpnvTZsc2",
  "key21": "5433XWmWWfqH2BJAxNBYSViyfGXG6YJ5JGEyMbp5Vfu2T4pJWUXnc2T1gm3iwdWuV3BSpxVjR3mMJ5sR22QQEzjB",
  "key22": "66Pz7zTNLDfgrBCR73g6LsfJbXT4nZimxgfJ2VHPgxBZCJxegShJvFctwdgdTzz8ykLitEhWaucks6dV9CAWcSh9",
  "key23": "3RKGa3wbz5rJHEgqe442xQsEfRr8AydJiLVvjVa6noMGkPwkYKqmD65iMes2CjJfjaSBAPA6Z4XzNL1dW5MDKYDi",
  "key24": "621zJFZgTM7cu2LxDVvCVU2syEfHJBRWYEcxC4tLPE4wQZUZfsBLfkwAhBFfYPetNURqfUXtgh62LUk1cp5Vn8v6",
  "key25": "4uitHJz443JKSEcAnA6Yn6rvAWNpZV2DVKobnjZLeyYqhV68JxWMFD8B47tBsj1xqBwzaHwem1DfdryRqygb3p7L",
  "key26": "2iFZi57wYFrwtcfuZi34ueJYt7Y452XgRDuA6U87Ygmrcqmnx8iNRtR7Gu6cuTset2AiZtGncNC7vLJU9YrCqDY5",
  "key27": "3HEUdBmWvZ8NdKYStEUWCoKuVhEeVKKxs8B25nymEiDoZVfZa5uDRu83mkUkNiPgNua73NbTpB6Ua9ZpMjvsrmbM",
  "key28": "5cMaYTPLwfy2vc4MCXVq9rWfpkSVH2bbcb2SwPqrN9HVtUW94oXfy5fk57LHxE566cojN5FMZWTpeeez9Qepitox",
  "key29": "3WvRd6sKc433FZNDj6NQu5PyTqGHVPukjov5vhhPoQS2YshL7UYiMdeeR7CHDhRBigkGx6BbctEvDYEj67F29kbj",
  "key30": "4RTMZagAd3VhJUkogWKSuxxDMtuecqrCSbGMsxGZC6jyNuW2qV7mLv78YeGPAUGtEDPk9yHHuWGPB2ohrJQJqbxG",
  "key31": "5ckVTmX5eF2EvJwTXjJaMuUWAVKPfGEjc6uxcG7QfZguNBab3rZBTYxsRKeux56KzBnLQUqhNrU28ADVLJ5siF8e",
  "key32": "2Wun7JH6y7N8Ho5DY8K3qGYN91gkKqvgntrSKQ6H2xuMUURpD4eWD5pJVmXRGmtsBtT9xQXMXPqMuHGt5vJmnGBZ",
  "key33": "3AixDz3xtnJhSMusexdvGGqPBKBiShgaf7MvP4Bk58Z5YEhMq4z2cmfsiuiApbgJ8fgECfPJQAZRbM6w6Y3FJxEm",
  "key34": "x7uopymb7emSiXZRu6SfdrWHz3qGSgbjbt7yozHjGCuj7nc7TDL8efBS5s4mwBgQdiwBcviCqHChEWXHcxiy6c5",
  "key35": "PhDJDJp3bJEuE7XwCgpZ9nSrp3nGdX6w57gMHm2eXqyxFSSqZikfmme3ExY4dLvtLEcLkywhwS52RjvPnN9uAAi",
  "key36": "4bTkaBh5g1pCT64Pq2HpFZzfkqZcDEG3XL2wzG5P2HvtrLXF6Bm1xCv8TeTneruE7rcbM7eFxhu3rWSfznpxo1NR",
  "key37": "3ui9kCV3ZRQeXeGWiG1Ziezr6Tbqp6WxjFkqMAaU5gU1gTwoGaEehwDaHWkvmNYLHiQF6SiTRrVkpzuWeSP6nC2W",
  "key38": "WeFX6gEBoLEfmxsRyTfakdjnWBuV3RERfxxdUoZ7DYm6EsT7NLur8znHdP1vqz6PQDQegmZPhAXqfC4oT6LCCxe",
  "key39": "2PTr1HTyQ8b9ung5x1cbDhJkxBjbYxgv9zUC2ZRDtTvQpdmMDdphQhwNAdQrWPfij8N2cNLc4asdtqm9AXStUtNh",
  "key40": "5gTvgDa5PdvQeU3vxp5E9BCrMnZnrqCPVwentehxmH9zJhWGFCZt1Nyx3c9uGeREVa9m9EoCD1KDhP6mSXjnFSvN",
  "key41": "DAG2iymcyR3FezNV2gPtHD7x1E1BkCjs3wfCr7wDNSmN93CW3MxRsWQw4oQq8uBTKxgwu7HgkUAfxZL1EDQRcKd",
  "key42": "7ZfrABXAVf5Ad3CdPaMHsC4askCcbCv2EFMu7v5CjkzLZE4d7dR8r6UD3m6QNpvyAHcZ7U5uGoArzezc7WJ8ef9",
  "key43": "5zfhQrZEvB97xcgzqTDnVD247UYP89tSRCzz3BabuvgDgoL34cV8FMA7qtWcGqdWkqZKjbByTkq3A37DuZzoiDn8",
  "key44": "NLT5r9dbHyVtkYjF6CL99S3Ek724oSCdhp1d6iQJSdc8mi6sif6yv9KhvufaxqcKewZ2n13pqo2jRsA5vyP7aHk"
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
