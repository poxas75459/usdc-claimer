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
    "3LJaAhVNRc7eRMZzu7vsmS9Yb9iQMH6NP6nza9EC1kVUc741uRWB3h4jbUyx2WyiaUcze9VS8hS2htDthgwYut5F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eK8wBixxRWjbMwanyaSe3r6DqguL7YVy2pTK2H2WvnTCzwjEPVK1EqHEEtiX6bijbkvYCUua3ayEuCEPg9otkD2",
  "key1": "3WfH8NRnH6MKr58yivLciXyxFqd4qnFN8rXLYgihHv4TsboUpMWtN4J3jM7DYVUhWZwD8wi2WtuVoV8KjTfmFG4L",
  "key2": "3c6iYTpeyQ7qtcx5zupRktKUdAuBZXxfexJ2Ezdw5Fyu2F1wgJa34NVqkSku5Q3pTAWzQSEqFCk4CfrwwDsnx19d",
  "key3": "4wCxkBvqSPZ1piT1DJwCUANaH5LZm6a9sAmsyn3kpBNniJDaYff7xFrQ9AQ7rBH8H2dp3qQtvwmjzKvGEU8beBT2",
  "key4": "5sgnpUeBUi1bTdmhXWU3SsptdyEyvuqo7DBn4QwSbn6H6mi2VyKaZkChnzZykZ3uYQMP2E23wvLrrXJ1KBiA257",
  "key5": "4FURy8jqjuCRVTNvQs7i7YV8csDAwaRoZx9tjxvoGk6MCZNTApLuSSoQ3J4RAtwKL2Esz3ghKJwpTZtdvnHjS9XS",
  "key6": "4NKPWYk9QxHvqBtXPqyxvJjkcqFxhefVSSHnQBR91484MtdH9fa8RczFwCzNrKpksDucXzzFfSqqg4ifpodYtCvT",
  "key7": "25B4yokNEZUHUPTYePNJZtwkHDRSfGPf7PAgnAekNtrFzTB1zwKmBjybRNaKMcxtSBcF2zxKQXBig5etxvE5jFMV",
  "key8": "1uScJzUdxUZjpGVErahRAiduH6KottJ9rwpPWLWBWtTvkc8ryagHTEyDDD2DDM4TLuDL4j4eMh5SfBsKCz29xNp",
  "key9": "41j7W7Jjxf8WrWmENBrtN43dfbxWZTpUd67g5nSnUTW7vrQ2omHu2Khmd79RPda435cYSFJ2xmAMZTZBKmKYYnEU",
  "key10": "58gTtCRqj1nuV63xaym6vgsfLPGUbKvagr1qKNPajP4wuMuboFYTfW6Wu66Eg9hMGj7uxf8hjBVKhkF7hbSoCriD",
  "key11": "2QJLAXr14Z96sVBcndmXmcdSLnCHakhK3AY8Qmgk6zmZAAwbALJRRyhdD33o96W2AEzCEHqMPTYxBKe1pj78AHvv",
  "key12": "5Q7Za2bHwh1an9sWHEsxV3q5vDmaWRimAWL32ETzWDqoSbrYTc3u5wz5Mno96KoSGRYByvYsPRURFpUE1prnvjtE",
  "key13": "5EjMmbzs2tyoXE9HXEp54fELyvfh1mwwSVpKAyLuoHMuxWd61CK8EbzeqopuJX9qr1S7DDnvXqWaG3icr8VXaDE2",
  "key14": "cprFhCbKaJsDbmbaU4UBdnekdJUTsV3tW7ArtFtWwpEQvo5idpTkUZURfPn9BMxoq4fLkJwYfYRorhoStSovneS",
  "key15": "5YxBwCuYHFTwdMzszoBPtFcPUHHKcGR1Z2fP4gPtcXjLaQMLiBBWqinTzGmnu3on2wENGY6DdGqsH4VT8Y5gj3Z4",
  "key16": "4tXsPC5E5gvSh5eA7jpf8wYMYCrLfoUsVmGymq1WekXdYvEq8zpjxjG9r3yu8jPa9dAYg8sUYKQDAsA3sY7Xe4dV",
  "key17": "5v9Kj9A5FmAnFrq4ytBLqfPmVzSYgy3ywbpM3LpQXoQ9hfY7U3xJNvzJmuUmdcdpeKdf2eSMzGJHiibzK5S6CoMk",
  "key18": "61nEhokPqHGt5Eg52oQHGqmcoXp8eQiZyQjNTYPVcTY9vKvmdoAstYHatmytagcVR7YpxzYaH6voBNi4WnN8QrYJ",
  "key19": "4Da6tC1SBq3YF7TvhpJS5tUeZfVX5z4fKmtHUCXX7sQZhjaoBjJGntziM8dtVCG38e5EQ2DRcKsCWrDnqivNJJ3u",
  "key20": "5pXGs8TtGiYrjkGFPnJjVdUPznmLWUJhGNVRfmNKToEP1zcfdyr2cDcYgUU5pbjqhYRAbcZ6Y795uLNvRCn4PQgh",
  "key21": "6agAdA1eGczTWu9zZiYgJXhYRyS2QuXvF1KEFBmeB4Bt3GKwgipLLcLK9UzVxdTF7UdJ3f7hTf2AxMFGjPe4sfd",
  "key22": "5o214eWeJdXqbj15u8e8rhtMxjECGiX8YB44dmJg6PJ6RdXsvTrJsavP8TE6rNyydKgVnEG1SKzA3pjxYzWUAopM",
  "key23": "3heVHcv66MirSnjvm7LwuuPpuvsiZH8SBieVYjV2sB5Nt4Tk7jjCJFdqDU4SBcbv7FS4tvqNtUkimxSJeu6evPGk",
  "key24": "5UNGx64tDy6ZDwkYkmY3C3VokZqdPMwFPkR77Ryf2pc6HTb4MKqBRRbQRVMTCSecnd7oShLcqgzYBPKxuBh37aty",
  "key25": "53s1WERZKsHZVT9DUzCPtHX2N9A5fLoxhqE2da5BwK19ha8vmNLBiu2BECUxm6tBoVy79Con1Yor63Y2bdUESrjQ"
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
