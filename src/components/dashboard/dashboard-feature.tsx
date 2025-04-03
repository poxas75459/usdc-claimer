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
    "E1zudpwwZsH3j9d8BETmfrHgwJrMGHqExKZRnLvk4U8EpgtD5VNo6iRyMgjMVbqFKA1W2N5YCvwJcHAkgh65WcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tY9FjfN4zfEwo3qhWzvbqAEsbREpGFERszf5t6MfFXWssHEBENoxwbWVy9PaMuLP8jxgWSxqcqnQWU7JVYU5e13",
  "key1": "4vW2Y3p4iD9m5pxX1UZm3rVeqSiEtWR15CHSb8Lsp3uZVPbBnsdHfK8KESS8yNRTQ7JwBjGM9whkaYA74pgXCCXQ",
  "key2": "5hByxji51WDZvc672pciMZ4KYTe6pgTYTYtM7fcZKC7Jh3T7kvCmFrVf4MKnbLmVAkTWDUNPzwQGb4WoCn9khAWn",
  "key3": "4a415GVLyV4ygBJ2QVzEn6Pwe68YWHc1wzEL5igXddKSYVqfASKusNNUSj3kpRikZQ8XpixRYP4APXGqv7dcdYiJ",
  "key4": "5TRKdoe9qc8cJGxV4X3KRPFnPBSPkmgGZi1pNS4tmM6xGVRF43Zn7d75qBkasQinjrK9UUV6Xko8Ejf6Er7wQMUj",
  "key5": "4XEQb44cMpfJ24vCnSrHUcVZDfqWnZcUyv1JU1qxGCix86ZJUYgnmYuNmu8rJ93zbrMrq5CNGRvcnqpCqjyHbz68",
  "key6": "5HamskkHhKVLYsLCaYxPXChx7T1iFYoVrSg4tJXNdWSpPTVFHbpJ2g1y8RxrHvXkyMBJGkY3QUvRhYNsV9LQGtBw",
  "key7": "7NJ8nMsACz3pXy82uwNu7A93nHij3VubYYSYdSmkwCsCsEG2hzoFPRCSfZ2fNdDq4Z1nsNZSnPEy6wJzA4dZ4SP",
  "key8": "3rXR3syu7ZjsePGoWB1gVan9hBas28SivEG8Rrgnup6VoFRYpdLJocZe3pGcy8HFvAJSCfXr1GMSZa1yyHm8nHXi",
  "key9": "3dR4Xg66P6kuSpWL7Xx9cZMjS38hUY86ZPeKpGXiDU92gDaie74WwqLEgFEUQtxv5LwNYFe7v78dyE27JNdppx4v",
  "key10": "U8mkRUxjY3MXSMKCvmwsSKMjo294y5M7nXoFL85CiNBL1cmyeLkEXXsLFFUdK4VuC4HaGR7WF4KKFgJktyLRR9v",
  "key11": "2ZNdEAB84VhHijRddLeeoCPKcXhhzZF5ZN5zUj1aUZJqbzG3eh1tMico2HVQuHUForj5hWiQf4SRB7uBwm5N5gah",
  "key12": "4K3CnJ2yHVGiGMRyhR6XHehQu27AQ1GTEpoVPjzzrS9VVkUA12HCrng5AEgHN3FWDhNfP1Njjtgqe9fmERYyCUDi",
  "key13": "5Btbr7RVnMmUL4NvDc3gTFgYyByRYeJm2HNdVa9tYgTAiT3nGZ8oZQwywGn6uZqCVss4GskXDFJ3xfJBGoD7AhxS",
  "key14": "2QzbS3mSLtqdsShn3PibBDo8FRaYtx1FoLUPqUSo1gaDbp3U2GGBud6muVvye3sUT9EAE4m7TMdZHj6mtEAT46Eb",
  "key15": "5YPkZHKXnyfYdaKWBpSiyJUehAEAbfVvk2PnwYpHRFj1MTNUiadrK4WExr2uTTvBdCNZzQfFxTZEZp99gHKgMoyz",
  "key16": "21n7ad22VwaYcjiKUjKzRNn66csFtefeKj7M2vxwXAc5BNgwQcTxmdZBrED5Gh4nVZxQ5KqUTH5v2B7nDpoDoJEP",
  "key17": "5w32bZxYVVQ6Uh2KnioaxCKUv8tEQNpuDkRRgPBbcpAZoMmDirwAZkWKDKkaFZKQTsdaoEvQgGgrcxWva9RFonyY",
  "key18": "58jnp8CDFHc6FCinpghf982i7ZgzbieZkTvCC4R9bNhsnbSWA57NJ3YA9P2ZgPYPHsREVMC5JyW9AYVK3XcHRMzF",
  "key19": "2iu9C5hFNJuuRccRqQ9dbqHEcxZACMhz8qcHi6TvjGDjiaKDSjvwEWcauY6WqcoJG1GNwQXYFMqRRGmchazsH6yx",
  "key20": "4SQ5Nn1FY5gxYvTCVfwiA3F69BtZGkD1q7PuKGSmB5K8SABigshhrc9MLQFrzujgdmVCTMNSxtUVDjPFjYAmvpm6",
  "key21": "4k3Qhx145eTNeNpHEpQ1DkhtgNYKPohWa6cciCA5EkvpdziiNixbS2i5s3Af4T46o9LFdhpze786Wbc4mPpjC4dq",
  "key22": "3NjtS7MWmYgQ7Z8PfCkSEQiAnNuHtcfF7U14m7hHhwvtfRjPcEou9HfFDtZh2Qac77scyP5Z7xRrtyQxRydVKPGj",
  "key23": "3dSsaGVgm9EKbVo4WAPeBRnM1iC16xTasuYGQdLhXx2Z9ip3z3sy2U5848ijuwX3hueu4oM2zEN2zDhmdd4E2hng",
  "key24": "2vA6Z42hs6qjMDZnM6XTSFPLdMPBmuCTXosFmgmxH7P5HfhrXVbFFruoLfK2qRHodvfxLzLXGHXDoAq9s6bd2hyk",
  "key25": "2JW4cKEvXWBEADAsPnriRc7ezcpDEzDTaD9enLrDgjhfGJtHjP5baZr1D6TfFjt57FgAz7UgQxiQHvs9WUqZLs6v",
  "key26": "5RhM5kCJUQG8RcdohTEFQmKkM3serwYMwaEBq84Tg5VU3fTpeakAtzUfZo5AhR6qEEtEwEBSui2bXthH56hSAqKw",
  "key27": "5vwjUwpwPYBZJJtDyriujFY547442FhVMt7cbF98givDwPL8LQVry1AtEvEw2ZDdsBDEo1kZJTwYb5LgC1KbBCsW",
  "key28": "3tkTzzaZ166EdSFyf7oDafG2WnfPaFXEDtkpdDMeDerR5rrSEytKp1Da5XN9hKp8gVQPfQAjoUAmagm4MgqicvEN",
  "key29": "5Kmp1Fyyxb52eztJVGJCMgVVneeSB9vCpxUr3CZpchX6UuiajdbPVg9hjUdTVE1eMkJXDnuCDYMopWArHfJgcrX6",
  "key30": "3RiKeDa7ZXWZ3nXtD31QJBae1y1MJsE9FjGGSDH6tRZBnVQdctj6PYmuqHipTAN9cdWCohXdghHyTZDqojMDFCkN",
  "key31": "2JvBzxLbHXfG8aicV3yfKMLhbcDguLb5M41guWAWntRFW46n4Xgt59FXcsjhiftonUdqYKSdrijcGbkEDE9nVZ6J",
  "key32": "2KFHfnzfp9oXmrifhmYPwtTpeUUVmq6Apff6NanpCEfv9njPkyPMghPTm1aTY3Ei1aWqdiQDq5cK5RboitcKgQPN",
  "key33": "3K5KmQhgphMhCQqkFqrTYLEFehxKXX9PDUpS6WYd1VLTMQqc7avu5V2npWzuxxSLhtLWKDmCvGevrNbMM7BvGPym",
  "key34": "3XUbXW5aZ3rx5KMLVMtd2mhn5Sp55cy9uj6g6kLNaswsKHfA8EKNuE3i42F6ausiBtGuJt4UbKnY9g13LnSQAZvK",
  "key35": "5gEdmz9q5i4PSESs2HbUoem9btx1j6U7xMfhTcDxEQ7PBesD5yox8VoGEh1nbXpxZmvG4LVAtgmFkpxKDqzc2ey3",
  "key36": "56d6cnnvdq8jnhiy71HCSAhSgB7z7D6qDoJHdSEZ7y26dYP6zUTfTnYaBivF7HAC5ncZRZqEK2N1cmuANhKDDn1r",
  "key37": "4iw3YcN2Aomr6xZDzuWpnevHNePf8sgvffBVLhL5TxPFXYAU2vavZ1LbX7EsGcaRo4c8esoje5yhuAmTf5uBrdaM",
  "key38": "5b56zGgtYKuzoVuC9QJk8gcN3i3FgAxzEjHLoEGPmcNTvr1vMSakNT5fLFK2G6HPuestgqZkewktr8nxmhd6UBqH"
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
