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
    "27QvYbwueMvDvAYM5QXbh6kzCgt3ftw2nbyXXtKX7z27LCk9WPwdwUuhDgSaEgpAtHqHX7REbEobNN1dGvWarcqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41j8wYACCdqfodEU5XzuXnnoxYqChXRSYeobzn6wD1auChcgJAWvUcnoCFxfUoAD6Ei8wKbkXTE6qmfHTYtqrvk",
  "key1": "2JQVXdgehDbFP2KZfgMJPSXbhKeFFjWQxxB3aHxX1qDwSwgqQRadJ9NCMQigjW4ZgwXxvk9kZ86EDfBJo4NVDaWD",
  "key2": "2aHMU5RAWatMy75mtQZJQxsjrN2zazeHrprNpGirLfxpY1Yi1f5SG6SJQLvZ1vxeqME9kcTNB4X33Rcyn4ZzrWtR",
  "key3": "3x8535w6bVhMTvX36Cbo2PebsnF5bzCPR3cSP6Wn4Q1E98Y34tSkBrUwtxtDQ3s8BxAqGZ1RYqNVKAmsHkr95G9Y",
  "key4": "zFqrREXfp5Li7PjmvPeLCZ8F3V5E4fRqZv9CHENQip5GFjdHTWPMvaEA3hn7RmLdSQrRBuS2EAPXEKdf1QLkGbJ",
  "key5": "61o6mjGmWT4q2tC1YRi4dnrpnwVZLiL7HpSaVJZHWXoK4kYhTYPvHSaRXYPAS17nNjeSciL26Co3GJKKQP6hGxB1",
  "key6": "VxSVLCEwZMMuE9axYjUYFJLLunQh2rnA1KZWEfp9VtGYcASPrkuoahuuCZiRGWLyybxkpotYpGk7nhLFwnKDUzZ",
  "key7": "3wt862MgcDyiCNsijRHoFknZFJeYjG6AXqdNNQEsELB12emHG3qyC3hJ2f45VeNfmevx9YQG6dPi6jhU1VhN3WeF",
  "key8": "3NRJiRbFU77SaJEcbBea3tjLQ7Mhx2vFNNFoZSDp8WzUhdmDRb7WiJiCTHFaGPGLnPDyyiz1PHnNP4qwJJLoNpiw",
  "key9": "3zwwcy3FZN7nYM179NpEC8r4u5fg3prUGPdwJuJvfmAM18Y6RE3NUyWN8r5jUGCQWw2S6r8heutC6fMj8L33AKmk",
  "key10": "3JXfeskb6sJFfTDy8ubA91622BeYnM9VNvRAvuwN8XEVBMb6SK2TCsushXmb5cmKVEYGEj4d4iRd821it17TP8RX",
  "key11": "2kpcMU4Mwbs4rQ3RQgzqEcrAZfPnNwCsNtUaGwQq3chrqskoYH38RJHJiycooxDTxQXZJ1BoViCFVcQL3TL3rZgw",
  "key12": "fBFmndFfkChEkrnZoc8peNCKuEcAVWGp3VQWXg3MevHkVaPNMj5d1St8SrfVcS3KjxCfBTDQUzEpN1tfeQSNLAZ",
  "key13": "2NhcpT7hzeoew3xP4JVb5kcXbRgGyzGo9tmoi2rCR4HTFndi8zh7WjuGYGJADSE4MVQUGc3ZT41oZiqRYBMoMLfY",
  "key14": "3msSqYhZZaFMa1UgST9qvPWSnAMD2PfD9YS4Q8JkU2dCmXowuibeYw2GvzjzqrRteZ1rXf3AK3cZdxxCcCHXYoxi",
  "key15": "d3tuE9TZgmMHTxt9RTakGQZeQ9YQDJB3mZRbaNVQdkXp2JfHHEMGzCF6pj7kd2BXqhWaHf1VmYndtzVsLMSEQxd",
  "key16": "5npDzsoSFS91n5gDVV127RCpPwN1c7tzk8GAqp3koLdPhZnmxpuHXjz93Ax3EgRP97Gz4PerSCDcABSjETKDCWqC",
  "key17": "2D5apr5mmVUHXBaoVyqahMCarnVXDKVvSwcbeL8Br9DWo86maKnztNe7ZG56BrBy6NybLCoNTWC7htowx1wNZMEP",
  "key18": "2gVenufinWnuw2wP8QryaXbqmEh9JrYtUuxyN4GXPqMp1TkccemNDBDWMU3psbLoqF8fozbc4nAGmUS6vKsRUteV",
  "key19": "4bD53n2o3VcyXbzfYao5abR54fm5f4zTb8DcYiHAqfe6a12Rz7GdCNF3P7vAm39XCE3c9DDnHrakXB88tASL7H8U",
  "key20": "4cqg1183RbfiZHYVZ1cmaQMWfdv5Sty7vrNpb9ytVmyoBQ1cV7nS3unANqYtd17fdzjiTECFDvNWoMF2F3ETitef",
  "key21": "3vYxgEPc1Av3AqFM5Pig4JXyKBsXo2zsxHndApS5ZZRTFEwdCNuX2GtDb4xQmi7RkmbDCh799Zd6nmtyViSfC3cs",
  "key22": "55Hnfjatp3yBgwmcrDLXC8t1YKQbwPjKyYKpj5cT89rwgUMBqb7vV21RjVXBCjUvC1oV6dtPERb9iXUVm8y8MVw9",
  "key23": "4KPCffkBzseVZmoheVuVwNUa2oXgem9WAQZVDrU5svSKqHwue716yTpocxhhSdLm7GbSj8RdCTnfLbq2WJC9hbwg",
  "key24": "4iMUoDSLDPzaUjpD9tqPmDAQocmTTHgSJhB72CQxm96CjiQBie4P5mFmMDFw2R3UD2xcFzdvQkmpy4foT5pSLsoT",
  "key25": "2szbawky6Qfd2ZTiZfxUHkXCC1e7Js3caQiYnuaVMjtrqhBHgjHfHrz5N3WcxrPa6BqsDgCo6UC5e3GfnPMAXGh4",
  "key26": "235zwkBBMm4ASqgRZMBJY4Q6wPWfZ77cLX3RMZkmpjLe4pbbYyKxmkvfPzUF5zQoGxY4jF6DwVsrpRvRnpq8eQ8c"
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
