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
    "336VC5Xru5BQ3Xiwi657qB2DvUuofuY6U7Xg22y5e62c8ZQAonwG66dgXFtVRkF6ZSMyHfTXpf5kcR3DxrLUia7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fjpyW6c7yutrkNv15zE4onAonXwaRm8nis3wZVQ1ac5imnv5JGRpbuGjWryLmADHUENLeihms6e9k2v4B5Lo9AY",
  "key1": "22csda4ac2Jp8wMtFXBZ5cwFhjoEqtGR4bF6ut2ZK8NQy7r2FQvnth9zkj9dxMtA5DBuazPf42uiRyAszn1JtHfh",
  "key2": "pwqxUkLWTzv2aV2gcQvxFHjPNoQ8KYCRd7VUDyrM95akb5EyGvo8u3dukdwqs7N1WXp8PtLAa38AqWweLrh4EMN",
  "key3": "tef6SY1bLfz3zfUy4F2bPfqTzVS24qAXVR1CknQcwkBsTPH1ADGqyQfrKnhLfQ5aXBZNHYMpukW9JCMrYGQDtUx",
  "key4": "K6TgyDAhy22GsP4qn67b1QWH1zU9mSowE48uq6aNPeovaSRmVMbZrgh6vbTvfPvCVax1qr6LskvSdkHShkyQCT5",
  "key5": "26h9ajFMeFzJXjYw8vqb5dktfrg3NCgnkspTDSjrHtGJ5XmTPAJmxgMrx1sk2353mMRPSUBzaPR3DaHp9A6h4f4D",
  "key6": "5zvvrLaU8inpyfSL4VmJBGbsRpjp6edvSeVKcsGFaNWzeosvfcbhputogqvEEf9LeX5Gmwx79iGgGJ59LuqgUmig",
  "key7": "48CuJyV5hNsi8Vk27KZ5jVM1gEJ7LBSrpHgZBtRAfHVmMtTcoSqpupzuSM1sFR7ShfpxNW6ErA3W5YB9yTQwuYWy",
  "key8": "4EkoewbCjCAMG1xL31v2XbLXx9qxW3Dcz6rfGnsoZRhppVRhkF8by1zPRTA955ZVNyhQsY8xSJr9A7cnimhVKh2E",
  "key9": "XAj8qcApE2Sz5W4hJw5Cbd1JFupYtDPw1sTtRf6SPtA9xmmRUDci9eYqzXmD7wcwirkYRVveqBqFweZTafKXAn9",
  "key10": "46UxfnvUP4ZDJSBsfPDM4wRxRNAFfzvLtAXLqy8khq8Lkagkfc59LcAJaYtDDLjkk2a4pFgRMczTAckkBReLkXh6",
  "key11": "5MWfLPPv5EkrRhqrEjAiZrykbr7HYkwpeFmfqeQ75yCkGfpNKFAQBZwBohCiWnDy3eg1AHYhw4UUxtc4eCPXXFgQ",
  "key12": "5GtX5mdJmwbyBpWAYqLMcz2Eiy7d4A7bYFuCLmqjuVkXgcFarcMqZjkVrKzWpkep6CHqfH5TjgLAW84xDkGTpPAD",
  "key13": "zjES68XL99J1FiQARrry9Uko4xLcPs2HHxhBzwmifz84B84qDEGrUkP18vYU4exruudYjDQhMqt42daCJVcnMcN",
  "key14": "39dgD94WYQ14NxxxpHG1yKUs1n24jEMnt8C6etX7h4PAqCYDaybg5FNUWBUD5mVtXNj6zdJQTfQqtrkCKuo9Rjuf",
  "key15": "43M3dwdy6RF1fviYM1JLjTxkNEaa5X7DGUei4NMQGf6XNeu5srqFqkgL83ZN2eNaTR4RiJpjJp1dZWcdt2RJ2gfk",
  "key16": "4NAAeWbo9wzaEJxrfXvJVpi9B91dWQwus3XjvAooWm6TcoGs3Wx4aZo7J316S6j3KN1sscxqmL5L1NcqJLsLvxEc",
  "key17": "oZdJUxMUGWjV4w1tHAuXneNDRjZi3DZvpJudnM9ydAgg35zUHUL1vUuXJmGsFdLz1C8XbcqAkr6wbjwoLLYEYay",
  "key18": "3eKKKa21kqe8HTH1sKMxnvV5koHT9HYgGxArqMD1bn73CyvK7Jw9NfJB63FkcVWiUWvyS47fbVanrmgdAnVTZzR2",
  "key19": "5Yv6rSsacSRGQMspzrGedeocxfPe9gTdMPK9La7mFiHYJxQZTeihpTGza5hZtx5ks9jGnr5Mnrsmyd93Q44g5WMy",
  "key20": "Ma6gSNfQjrtQndFKgAi64d2yaarmENcyPFhvk5qpojM89444c7Zjt3vRAEUKb2TvJanwLa6qZk4NEkzMVtbsgKu",
  "key21": "5sqBc4aoAEpAzEv9pCpNkzYhANdMMC4NHwCrpkbPSZb1BKe8oh6FshdkCX5sqCN8cQ8Bw1M6ckgMLkyipKCdmC45",
  "key22": "5ioTCBesPgxpzfS6yh5WQuTm4ChPyw82F5geE4DgWVFK9cvgxvacEQdPPwzg1WVdsUxowhegArpd4vbRaSYsJTNC",
  "key23": "fqpmLGN8prx1akjkNaUkYcM7ZjmDth3YJYyFQDqmcHxj22TnTaTa45aqb4vCp1kuRr92ga2eD77PUgZyZ4xHpWo",
  "key24": "2WPk51TViWwZv4VrTQ4ahUTEfKftWbK72eBZ7cVUmXtDhQ5pUC5jh635krGiBMjvDyF6aZ4uRBTMa6HyNPWFi94b",
  "key25": "w4U5tkxzx61mbzPVXd3vfjZAapyGfBWawGtMRpzQqCw2CTKNKVrSaPsfXnjV5ojYykDDj3RFRayPmvrKR6UUUAf",
  "key26": "3na7LP3j3wjC9zbUfjSDEPReqGe9b6XbgbjffTnQiZZxPE1oEQAD8jYPrcnrTv2k13DvkzJQ6mN2893QCiX3ZKXr",
  "key27": "32aH5RgD4BuLkEjN7EMJcTyWstWNVNTEcV9kCuHRfh47PahtvJYYkET8P6CeAVmuUzPHBvXCm2hpGS1tKR96pYnR",
  "key28": "hkaSMB1RtRg2X1CETyPabUJ74PDB7ZmXNxbfCqvhU6ygzgh9qYJzXjSRv7mtxaSBXE9msEhB8ft4dqBvzWi41db",
  "key29": "2ry7MgLb7EK2k9iXWjQwXtXdbArFBv2JVhGwWNb5a8NwGXRe6Qb2rEK2BUPYZVAqaWenMTTAqwvhSa1SyP3ViVZ2",
  "key30": "3yL3TbQpzMoDncHM2J1UsEcXFQa2QnKQf5zExD1n8QMAJq1oHC5UytDEYp9sdqVE1iro8rqAbXYccGJTddiAgg5p",
  "key31": "626jZRLbXpKyyU4auxGaarzkeYCCeTLFQfJ5nHfh93Sp4GgSMuBzoYY3TZJbhAZjPE8SSegqm3QJiv1NbGwKbGPa"
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
