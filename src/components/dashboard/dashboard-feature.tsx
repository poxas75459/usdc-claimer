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
    "271mZwWgNsQ28vVKQy67J4CJccAj1fsx1bjNvob7qLFBwB7stQ3MxVoosJ3LkZcaKhBWjYrmmL7o2dY6TJ3qDEtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dFkESssmdZRaFWbJ9tbChsp6kKK9hDzd88Vys4SLUrDCt68C1vxFfvNHjB66gfLJzebz4WiSDymY4EYYrgVVd3C",
  "key1": "nS8kZ4HmNgUTBqfCt4qaW5LXmk3CxFUP2eYxLrSReiqkTAWKgv7k8yxZVB9GsXo3VGPnCja1fFJuvHvTXLFCGBb",
  "key2": "KRigccwoUJiWqEUgDBCUY6Dm8PEe8u8iffGYshegESU4MMUuu6Q4jiEC1SjVGCdQhsVVfGfdrQ1kcai2FenATZf",
  "key3": "E8P4XUxCpkL61DVvjxsKMeXh6J9jNCtCb4csdEDSAsaVHvtvcGhbPfwJPoX1TUNjtEzawQ956qBaW5d1m3rnuwh",
  "key4": "2pz5DupsUntYei6KwyYsqugo6unJ2HorhpGby9MTyRKRHaNfSJjdyXhXxN2fvuidA4sZ6yzCzKtFuDKGCnRYHsYY",
  "key5": "4ttAi29zwVBP7pQCN1aJoH21wWvZRcjPT49stUb9XApbSPCA8HVGPqiumhiRYptLgUaptj8egAqE5n3ci9T1SoHU",
  "key6": "38yswgChdaX7hkZ1cwHfm1rfhn9ZGFfNngizSCXcb1VqgbdqYWBXsdtGKvHBFFJteqaAy2A9s4sNMgTZouzZ6a7L",
  "key7": "5omrLVw9FxVAZUK8syV5kF794gtM7mBLck7zTw9rcS8KG9g3DmKrX6G93F5xQPYf4oVFhoKYhhw3RvYhqns7T2Wr",
  "key8": "5m5U4Sxsjt28rEAoX6Ly6XHjw5RTiEwhKYcfC62tuBEfbWrpaQCpmdZURSTPdgtSQW6AkESq2JhRxW1L8DY7nhAM",
  "key9": "3TWfzGYo4LoJZjLtQt67cyRmuBWemwRtse378VUyJwmGvR8ScuVRR5NJHEfY88rhFCY4HsHpM7dgCVWxr2DMZbuk",
  "key10": "3J1zwHhEZFrFcTTL7YsNmJuy57VDFdmUQBey4jUfWffAvvZfdXj4MEsyFs2cJMyU1kdNKGvs5RWmZh4dbDxHxYN3",
  "key11": "5CbzVVjQQj6EgegyeykQcjiDv4fsbtpLkcbrU6DDevEmWkoCXL8nY8Rj8572YSPDL5ar7eHN6nzXKMzm5zZoZkEp",
  "key12": "21D16E1eTijmSe5swKXswFWAbjX9YJVdWuTX16zFFS7KFY3rqw57dCJehT7fibgRiJyHPf9oCqnNrC2naJAnU9vN",
  "key13": "9bwFnhw6mbcRRFaHtm9Lm2rEZgdkm1mZmZ61FiDTQNmBuAQbiPwbzEZ7ZonfdJYRTBdH5u1picHmkcLZRJyL9SN",
  "key14": "TYYytssNDNeo2Nf2WEoErUz8MWuj4J4HRwp2Bp7dtLXqWiafJEFfpeCvkTGnUC4CvqehuowmDJNp154t1tY6kxG",
  "key15": "64FE5G2Ke6eoS36nrMFxnaJjAuREea8BcjbK62j6s2xtHVv2hBW1yLVXW8oJBY4hBxWy99Vd1CFnAGKMPFyp3Bbu",
  "key16": "4tU9Uwdn83gD6hWpupuZBcU1Ahyrq5iSA1SgNbAguF4XJHqYeR4YFW45dbxo5dgPzXzvpDw2hAw9t3LhQsorTTNo",
  "key17": "2tezEYNQTx3JmZ39iA2M3kD9uawZkbPgafepDB1SeLk79hdK2vPn5pfRqdsAM3GiAaG1cxTpyzP8Y2igyAKJRq8j",
  "key18": "5R5RsPXzuGVYXTHbQt2uqsu6AAWQFAsBhywAz7nqV3kkPv5ZjBw2YYNfRZDMDPd4jCEnBoosaCBsBzhJmqSTPGkG",
  "key19": "3m2bnJVdDUz5tPtsJ8AZ5cPLFTMk2nNYXWfH3SL3mvtF3s3cdSqTrUCH3Qw8bToLyo9iusrnfggdaHouwvUy1648",
  "key20": "4LbCPCET7qU5VZhCwkEor3FCJr6sd5zKeLq43jVbgqkdxozdzP77vFbxMCkqST4rZQiJMco7xYrYKqeqXke1xN59",
  "key21": "2Hopt4nQgRm9BDQzpF7cQMcjfMWd1DJQjMT4kdmJU7Z3AVYyDMVFkyknRKA5T2PTj97crb79F4ZQWf6aEhAPWm7U",
  "key22": "ZqnUubs1mJyS8UpHuUF5UqTGmmUNRJPx6MS4xRoHjWRdLtnMPdLoBD7QSQi1ZFA7kW8fbxiiUetiyxDAhja74jy",
  "key23": "rkWTyjGy1SiRPc9TD9qWgjTwTE2a6FzQAvrRRuBWktnkrP6URrnZjjndX2bgtsDvdMyxa1tgSTAqyf1HvHcWr8x",
  "key24": "mEoVinztvxP1ktHhGzB5AZ1rnVi2Frnw8SFwUAPF8E3heYpsajQt4ibv8vPMpLRMJFDUJtQhFrQZFdKMt9uexT2",
  "key25": "ezkvv3H5vapjQJTazkfRD4DfrHmxffWEdL3LswNKYGt8Drg8Cv1KpZyRY4PuSoWxQ76jNWj3s8kUeCGjJkVqR7M",
  "key26": "2otH8LxBfimXVazaK9XzBcTjuvYdzV2Et4kH77z6GhCo3bfUQZvdtApNRPXyg9rKDSDJj8pTDac22odVK4Rs7tMN",
  "key27": "3VnoaTomavekXCyo5cT9pCLLEc78xg7F2iJiwzC9aPHYysZtVzqtuGVSHxWhaEYLkXmCaeGmwBmp6GcsaboZ6uYh",
  "key28": "KhcNpuyECKQWKBcsytG6V8CNuuQFH6JbFCBR38a1n4nMcTkdunKQNQadLJATn5m34LhVJkyBEa3CSvWR9TGVnr1",
  "key29": "58VFbNMbscjtGCgPAmwxpQ8oRUB1WGUGXersSKRYQdSmVvTxzmDLxn3j7fjgrSedgLwHCiaBPcRmneXR1gWdSfWu",
  "key30": "2umU1VHUbAHCJCofjLiAWngq8vkotDyk5U1LxMCGv9oGQMATddKvM6vC1FyzXG3pdDzCFmpnLcSdojGbXjtHiV6P",
  "key31": "K97L3RmV9STqseuwyeN6L6u6qN4xCEf1geR2mBrmP4VX6S2Wky9XHcmuNnbm4KqvKTHwwZwA6DnL8yZpjeWqR9V",
  "key32": "5BRZSLUu81m7XMynaJGi3CtPBnwuiTSEFYrEBDdUx7mdj9tCgkaTxgDUXm9t3iDq4ex2VkfESFarzeWmBfxPPJ9H",
  "key33": "4YJASK6tMinZ3AvMjNJveVE4tST6c6va5VY4wm4Pzu93aHJ2TuUU37toBKf1NZ4HfaJyX8MPRgBVFP4YoZ4pnWds",
  "key34": "2bRSGwtmPDWMX6utR37m6Lbkxgu41XgCGQv8Avi5np1h3a5iqvLp7xg4wPRE4hfhK1Qwc9TjdRfTFLo43BqvBgMw",
  "key35": "47Dw6syRm7WJ4Q43h9GW732XLzrtji6XJ6ujdnxMgQtPr8N7VnwX9Qfzs5FJNitAoPmTPJxwxdDacJxeYedCyfZF",
  "key36": "4UsLpZ2Qfjbbg1xT1h5bJ9MY26dgSArzuk8r8jSiDSbNkg6Lq95AcaZxknZ9XNBJbbWvRzoxFFdPQfQdtV4bnV54"
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
