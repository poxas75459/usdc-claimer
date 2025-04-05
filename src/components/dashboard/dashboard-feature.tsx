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
    "5DGTqYbBTVA8xzve1nq5GCwSYMbh3dfUGu79prkNmAjgiML5VLmvr3sbQTmNRnVPWnRSUyu3kviGePdPCX1w8fcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65drLewxngJg7f3dJXvqMApZtRtCB3jnJg8rT5bJwmrzbuYYhBdGHuV6suEqjXZtsxqm3NsnikiFqPqprQPksp46",
  "key1": "tna69XosCHeDZo3niZZkWbaXWwMXanc9SZzUDhLMmMTrwVCqexaqZabqKbn5NyoG4wcMVKMPBQyy9kJcRb4Qutc",
  "key2": "3qhwgG7McwF2uRHUPioGw2okyv2GeA4EPVdGy1vWdXp4zWrvdtGkzWqxbDV7wFhu8pmNz1H2YWMXPrWga7jAjfhS",
  "key3": "3x8BpqSzkXKh7zxXSbK9qriVQrfMhxUQChQfHL8Pfmo1jgkgt9WZ1PzxWszTzs6NMQbxXKawRLA5BuMWFf9tDrZk",
  "key4": "2yTuVgr4afofVoeQN1JjLN28mLS3SmfUB2R7qJYRYX83LQQ5rA6nGY7ySUwkQBbs8KGCbWc8UjK5S3DBbpPuZWNS",
  "key5": "5xkd2VpLctVmfbq8GcCgBhsSKxsejGyA3EvWmCqVyg26mMRYMjszEsn1Pw3tTzymnDMB6c3Bm6sDZKwzDR7nqcCU",
  "key6": "4ifrcPjNdwoLgr46cETFmUXgM4to4AcxqEmaq7HTm2hUyhbFiYa9UidteE53jUoFXUdmHkpuWfxcLRMDdp86uogk",
  "key7": "ckgQNXND9dgwwHFDGFCRsB6UuMqGyAU2cmqhRaWeaZyEhyR61vrPq3JfWjJtLfkEZryNWYacuuYQstRRdNnoTvo",
  "key8": "3qorJBTJURmencWyjinMfqHVkywYMsPke3LmReU1ytbU5ARMg1XpLb2CVHx8NrMrGJ2brC1JL4ZPC1B94R9L5SoJ",
  "key9": "72ebZzFavKweAcd7RPS3e8tAvRVe1km88FVmySLUbJDURDqTtwXn8BNHcU1qEGB3vQvjwZFjJzjJR8ynzrcxhpa",
  "key10": "42qAx2bmPE5FAsVmcwGEJ3DtjsPyaLnjEGekZuWPDFWyfwdpHUfCextYkocefYxr6k42dXAWEGvi6cSn7NWNrBqu",
  "key11": "2t1UkoVKwFraEKNZMuAULoDn8LEsQcQTMri4g1smB7BLm5ypt7pqKxam6Du2RYhmZnMwjt4SNPzrMUKdkjYvK47q",
  "key12": "oRTWstbxnfb6BsuK6bzHVkrxLaVw22ecZwzsf1GbUAzimKTMtfRz4akqeqQ8vujPNYqGJ6PNJBFbX53ivSMfFzM",
  "key13": "2h1bKLNP9pZmn9CmGHJ6mjFnKch3xuPULyRJX3yW9ypjdif26yPyZfdXumEFgxWaccUxVAnj8sFAAB2zgVeBjqX4",
  "key14": "4e7Yr3ZccpUM5Eb3zi8MM8haM34U5K4916yzqnWDnfTShjASaUB7cHjRV1YWF8pDs7BUeLFuCBq5BpT8xEwrnoHK",
  "key15": "2jboH8uLiRw7Qs2FZg4Q5YihpPGPdniBEjU88BAH941gSzQ5KuaXSVLdne9GsNGguQvRsPuGEo5Juratvr8BuRP5",
  "key16": "5aq2Nhx9cB7DVnfwEJFycGxhRdpmdahXcoFmMBvzSw74aoRLViuegrULMp9q5F5HU8mqAP1DLxS8cAMjhnhsQUz",
  "key17": "5czwQSs1VKeRmEnUuruxxi7fwMVg4HuQYiaVyRXC9r7R1rW2Mt6kJZYGTG2x5MyLMMGuVC3wTwm7aJH8nNNQv47n",
  "key18": "3AADSANuHsGvjedfQ6zA48C5jaNWCD34bsT65JchwvauWAexkmU2qabm1HGWSomGESPk4DfvYVM6LKgmHLrC45oQ",
  "key19": "55yfDVcaCmw1KBH3E4zT1qQTRVyABq9s5BcKtQg1e2iXDmDxFayae9jcpMZvPnvAzwxXydG6ziFRbmHwsjWNbrY9",
  "key20": "4oE3XYSCvAV1XXSLavnq7jk8KQWoHhWGswPWvo1zoPtVGSM8dpj5UqNPKSgamJJj2FoWr77A9VMPkLTLikAHTQtj",
  "key21": "RD93ZnQmRXD1q8kSLfwMjeBZ7Q5qjWaKckS7EDRbeUthx8LcGJWPRSVFfZY44nydgPmG6qs8AZrTUiNU8ogjkiQ",
  "key22": "5rTHJ96VDsDYU9yuy5e1g9KYRrEqe29iqV1LdWxn51JM7c5kph5QLAWoSLDxcWfMN8hrA5VpWgH1h1NtpcoJwPAx",
  "key23": "4Kux4ZpU9thczn7ZSYGLmnkVapjuQjuo8hrTWfKDrF9MGnxuHpqQ52tgBVnmMWR5ejxvi3w2gLZmnSYqKDjWATM4",
  "key24": "3FnRnSgG1CTw8BYNAY8b3bZNxTRSoauEcRiJrGebjvMUQ2bbz8TX9wzBpq7DSLjmUGGFNiEzn1pkuRaRdz6KFFMQ",
  "key25": "3VkN6SXULrPA1zx5i2JwsXxkT2pyxLeJne3eE6w4wzDtxs9Hd8tHBpn26GGadSNzFR15Ltx6iRX64KoBMddnH9FQ",
  "key26": "2nZy62wniUMuVYa72Mf6qGuJ5XQGASj9DRDz3hgVM6GiKFayFDdrWzLuVnog7GUeugqz9KzDkTpJN2qwrz9ffV3L",
  "key27": "38sQSvmvqDYv6v9jzbCtMAoFDjS2xX7mZebVxSZJk8Y8Qon9t2Qh32uceiFBBPeC2zDF1uGzdjwFTweHcpE6t93o",
  "key28": "3nPdWhFi1aLGnTYJxbUHrhjth1wJRaKF5fTpLJy4vWH6wyH3mXL2bFZYgqSBPPX4eQvD2HEib5bjzP5i1Ay15wdp",
  "key29": "4B1J5wG6EUXWcGGUmoPPciBDvP4hm9fqa6ADTPwFDgjnyy5Z3EBkxCxFKG1iHWyrxQRWktC4wqU8xhDmdWHMpQxf",
  "key30": "3QrJkXV8irhfaF6AaTY3hzVb9MTt9iEz2gHNRDdq6GoF92knJ7mc2k3TCTMojaHPznf4F5vYQc2xP3KxVBpxgtxL",
  "key31": "3sj9CRiyZGmL35zBeiyCaUp1kfEcrLXAkvwnkrNJ1cdR9i7w3CeFddtQWs5s2tsEQKUEwq4b8xGrvK8chorsk6KU",
  "key32": "nJ5GcqHCAAVguYeffV8azxKqfFkfHeEJghrEGghSiwSVWTCHNfDhdYaWYdewiSTHd5AASM1QP5amaoPM5rWGtnR",
  "key33": "5p12xcnWiRLftvvsfSyyp2tMkS22v1ubjUL1YikGRTftBpwn6bNP1XmUzQDcBxVDQ5Dup45RSZ5Nnu5n8z1tYkH6",
  "key34": "5PN6ve1Z854MYUkmXj2i1bpE8XQSkedKYR3GW5S77RU5AS6xoamZ6QHLrG2THtuKp2FgAjiU3aiJ3JHfiUAsP9qp",
  "key35": "29jEDyVg5v3uE3wmZ1DSjbNNERT6KiTJNMGx6523xw4WAqd1zXymR7iUaCs5kUm9FNKDWiPcsDeXswNbR31kVRG6"
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
