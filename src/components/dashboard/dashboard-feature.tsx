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
    "5fGgeqKVpVBCGjA1AvN2MMyYkqsNdz2chxUEMGYNLmy5xdCs1W7Z1eb9ydb3yZ9nrMPGEEoYUC8F5TnsvwVu1d6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P52vad3vj3Nj4YNkUk5tbbsy4juKQyHYa1kDrD9s3Qe3pyR5gYEHoffxKeVoNh1cCKqDAqGDkbY4nt8TsVbk1zh",
  "key1": "3gk8zFNf2eKdBAZWMPjXNKPjrD4nfBfyjfNJ6ZwCHHZj1UhojRXoxcfaznxqzgXmEfkMi41NjdsPXMLX2unENd4D",
  "key2": "3Xgrt7mxnsgkh3S4pqGcf47vouko7N1WTenyg9WrG8usrELA8u3DXekgPZcJu7XRNXvLjRfJ5bMLSHefeg99Ypav",
  "key3": "2sHEZxj6vLts5Gw47wEodzGFUHAwL1ZcSNWvM1fzAdo1WCiKMRuwNWJM6ssvPhXSASjaoLoWDd37vhj1YzmjV95L",
  "key4": "2dvmNQSCEKEUNQo3j7wLqpPttE9dTvnSuXBCJy6PZGfqwDmmkpzWZigNTkgGiwNinyuxLYcdaAz7EPWdbgp6BqCL",
  "key5": "2JxfdoJPdi5jqGGPnwQHGFN1khHcfbCnJyJtntk4MC818sRyLVF2nHFuXQL6KwWEV2aBkHjhHbA7pk8srCrcZxcV",
  "key6": "4TMPYGzVuXNVi4mujNK5PV1fNAse8TYkh1AadwwSdLWpayrXzgBUxxPSWa6vR4k1LsfNZu9JrEbUPeNjrDMyXiJC",
  "key7": "MhcF7NRsghpu5ECuvPrzvHm6DkYYe5VyeU9VoLyvQcRf3uYkocBiP7ZQUU4Sq6GMNLM6ygeETDJvpKMkvsLAujs",
  "key8": "BTBAThe2s6oG6aJQUZ9UWBJhEwct71Q6SmR8ycWEyvL61ioK8iG476kMr6VZTaZCUFhD7SqExWHBfpyYrGdhVNp",
  "key9": "3EjXHDNvwKiUASs6onYLPtPGSDYTJQT5L6oLaRAdy94bur2Pa3k8CnjNk3kwv4k9fUZiuzTus2aEh3x3XdwJA5g9",
  "key10": "4Vn2tC1HN9y9ABPMSgGPf9Y9jvMSwDpA3eMrzmcaTd4xtAexbe2HcPzedmXzxRkSEUwt8cafjwaLkzLfhspcDQPV",
  "key11": "25j1H1fgCwHdQM5eoipWmjpmdbYP3QDw2emwTmWPwYXdEJYv8MmX3kaU4xsotBZfVbrRP6mjPdzAYYQ7Nb3QTDBr",
  "key12": "3j97RT6BbhR3gpwZ3rSBcnhDT12FKzufWcTxY2wmR3WpQWuhsSbPuSMksXSbHG72mj15PqiJQ1JKRCfyWhNys7ou",
  "key13": "5n1huiCLHXz6XGQpCQEnVmsS34bM6Gri9YWSd49aqDc2qzk2evBMsSwuHq6KFLd4DJVfWUpdSERMb5hpa6BPgoYc",
  "key14": "yPVhZ6qJmtb3Nfkf2w7FbSNbefSSieyidU1iKtHo9dqYA6zjWq5ZBQM86fBpBUtFoR9TXEMPkksqH3AKoS3sXXA",
  "key15": "4Q99eFA3oZ5xrRDNjvbJUEvuetAXa4qjpNJWiT1sbnomLY4yyrCvwExiSUMiwAo6AyC3aDGx1waHZNTCNzw55msS",
  "key16": "c5SUYxf7k5d44EuieYmP19B1dPbCNd37pzCyiCXLKvQ91xgCx93ESzQJvqC35zjJxmjnxm15Wm4U2uhYSyjhSrw",
  "key17": "5phwkCnzVsJG8WW4DmzAzZhbCw9mvrRWCZfQXHA6t86hUGtgXppsopjD5XHWUAGG1XWs5ocjCCFhsUteZf1QwoyW",
  "key18": "3hphVB36uTz84w5ZeuJp9WYA5pKUJvBpDmfjroL4ncT54LMsqGa3Gx9CgYSJVjTYCCrRpjVPEkGmL75xYXSFGhoP",
  "key19": "4mGY74affRTaGarZ6XYvabYJop4zj7AvDegsV5akmbSY2CFrZzDJmEnFbWJcfN8oNF6bAJKKcTQm1HbTjvBiQPKD",
  "key20": "5yw9ekwTmCPxkVLwqr7XLagv6zjGuyW6s2ag1ywpAZkYKZFDFEnWrQhzaGByvMxdWqFkZjYUTGZH6EGN9AfrXxDE",
  "key21": "5UDJ9bcb43MfH5WxiNEWXMup7D6EU6W2Q9WGuzihweepzCtDoo2PuptAv52nnxXAuBTjwWpzJBofm33EoYKp4gbX",
  "key22": "3sooMSzyzBwNkHfcVojHw8txJH1eJjbR3GgdKdN2knH7xW8PYZUY1MzFpo7U4iGykB2YPxh1yGvyM8Las5XCck58",
  "key23": "3q6JVgqkBLQv9cxiqfbaPZLypDRfQWjL5BqYVgo4zuALAS58FfjTc1wJ6KAF3JrtT64Zxtzjw7Pwo2msU74WwivH",
  "key24": "wESmvWgUeXdgVSRLr4HBBukxoFXbTaSPuMoqCTnEZLmf4dZxoLs4GM4X5quUtMSruNfw87kxgyDgGJR9xThUkQt",
  "key25": "5dVaUNNnccKZWhLTq641gdendU3TU1ZrHGWKHPshdR53zPFiYFxnfYm2baNuVgYuGT2xBEsdBbozVpkRBL8Ltgw8",
  "key26": "4XKG8ywjZkzzQC9y5iE13YKs62AkSGfj8FVP2EKZYvdBgePqBnZgo6i3wtXea76TqNVgpFQTgF6FMizpcyJdoNcE",
  "key27": "2ShLDNa1LE6pQoAnoa6Sf9xuXXuwT7nxBgV2FuAEXE1t2njTkSm4VKTJ5kcx2oEZffZN7SdpgPkmtnQYQdjqwp3n",
  "key28": "2GZnrZomj8k8V6KwfixWNHaHJpX5ora6TEhS3PFX4CEv3nichuykNiNgJAYZzuxPjB1N89ypsn9PrZmKXeXU35Ph",
  "key29": "WfDmV6WmxFstZvuw9ovKPGew9cS13SjwWmqk4iLVVBr55tE5s4tb1K4iSk1yfWVKZCBsLGyYKjgAmvegiFQSrCq",
  "key30": "2H8azGkqBypvd12GSz2jCJy9KabGYnyCVYqnzrMY59GxrmJJnCks4qtLZPzjVNF7hcJEsLnjFpnJLY1GPz12GEVs",
  "key31": "5EiQeqJnYxGpHNg8NA7XuhAfhXJUH9Urgs1Jp7XZBNiFxW2o63qpdYdqMGhvjvFq2syaYj2JnzBL9rNDGakgNoTx",
  "key32": "2fj1ayEaLj5QfiHBaPCsW45qFBjiSBRjZqxXBmdpDjhXHyphWsmxPwDg1GqzNDN1JegmBPnNAfuUwYjAk8FSyJHU"
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
