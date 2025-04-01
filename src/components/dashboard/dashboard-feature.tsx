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
    "3s9JgSYkbdHpRVaSXszApNBVxfMWTvsdz9cuKogUrEvTwCB4GqSPBtoh3DX4q2X6Hqvprrn2PWXAXU4XccBurez4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ixbC2RWUgYzUeFJsQ7FRAARqT5eKuYWh25SLFvfwwQHYG1UEFXpEzWo9PsKy5CgRWa5SXZ83cidwSe4tEBvxqtj",
  "key1": "2PqwGsTpMFgT7GM3N7ZyQ1Hri6BEyVihYUXyk5k4BqYmMhkTGF1RuKnSHDjQ3FYzCXdc5Z9VjU6Kth1Jk6GS5abY",
  "key2": "3VG9bws7qcAuuQ2dFWj6Rhzwtz1EZAz2F8jAYPRnytNpXT2VQoSJKq8iJD7UMrA6HZzBta18LavkV3nCfhEN8zwM",
  "key3": "2cBXbSdpSHw7FdJpYvp6oEB5Aeyt9PLdw8xczppeAjFgbcombAG2tzf9vTmLivA2X8i1szB4GrtBx96h38A9upUk",
  "key4": "uytiXQbKiDRxtsTiwzwACAX1inbBxhyEvoW1Thi3mSQ8AYm1da1ETpxL2pRiNLMTa45muY2KPafRsWjEoNNYSEd",
  "key5": "2SxKmoUwaw8vrA2hP9xhDQRytANNNyYPTq3igE6rQKxwnjfNkMP8AQkoMtSk32AtTiT8ECdDbbJPFHnDyp64QBrv",
  "key6": "5WS8cmVn7buVTtkPVMUxzGYyoFiLvHayoTKNiddAdNzUoNk1D1QRpCuBhqxSw3u2WzooomNvec5ebAvAxXFzTHWN",
  "key7": "43X1rVR37E9LyXV8utnavbR7YXE63Kz3Ug949dcBREH7spGfhf2377ngtw4NUUehN6Z9ySsxGBQHxFW1u5U24AQe",
  "key8": "23SLUpnP39fMeHuKsoHSWvMReTr1UXwPdqFvEPikuUE1JTmEUGx2F7hrKW9KE4JdiPZVf2UMCA9UE6myWeTiGz5r",
  "key9": "3nK4WNZ5C8Qx3mA8HbhuuNDN4pwdeZCAWVz75LpbdJyjnLjDRmtCu1zc79kJDSz8pVdpqmE5epXH3rYeSdV7AhVS",
  "key10": "2JxQzg4HVbhr9Ej2EXRrJCFrYNqjkuBsV23gKWvyNMs8sGmcLHQADXtD4jUmt4UHp3zppWUgK6HJJYPm5mNpUDLT",
  "key11": "4q1KB1mQgBLsWBa4AVFFGTpEgbjkmWHWWry7tpJsQSRP1idXFX25jZkFTT3K542EZ4eWJGjCgYrKBL8KWxnGZYKm",
  "key12": "3dxR289ua2ZeAcGt6mKY5mUVqFsqMDmqzUEDk9hnzFegE4LXJYVVVaA8SyNTfoqWbxQ3mVeiarjLZayc9ij1XfAM",
  "key13": "5nWWCDnvfReP9cZnGFPLX7rnjwrRcmhkjGBSmdnjzvYqnx5HKyqeKKu17WZFya5qQXFDZFSc1AExvRgLxUSfuAAc",
  "key14": "39UDqdcZqQnqfW9m5RtWNSB1o77ubbb8w6WCSbTe5PRrbkMBxoynheQv3m6evtXvJJB1jsvnoZtV9KUPNAg9FaNd",
  "key15": "5zHM1fcwtzuePXg5AffM4caW2xd3XQM1vZyteVuCb6CMyqLMEfKD15Atd88JgzG6TwefPEU5J3SK7kfVNNeHUbDM",
  "key16": "4SJNo2Fa64EbUeh6DGYuvtDhNtGXzzz6VE9FGY6Ag1YHHrQkaBzqGRJKFPF4yzmSZfDzCT4i5wJ4qhNZ15YsDUQn",
  "key17": "35w6tTuB3EztpXJ1vCYYBgG3KrUGhnbBL62LHX9pLNuYkNd1SMG5AMiNYdLNf8Ec4aHagRD43c84UXtUPwiNnuwg",
  "key18": "43dwLK5ydXqibz54XFae4ouBR7VTCiuCpQhAEriiZTcJ1HKBsKg8TmVgkP4oQ3Hcj2J8oBZdtBp3mpYxEtPoAuYQ",
  "key19": "5PM7qVYnSohS77SZ9QiNvaQk8wyBwVzhYX7sGStd4b1aWcNfdZw1K3EvQANm6gAjytD7bPgj5KosmSGYcT8diWhX",
  "key20": "4pbvbc9RtekFYrKUPYXjUx5n11FjkBSsj3G7nvoN7trZvPECMQLuEWGfZgaYHq8VPVf6rt8W6kCMSLsiccdTjuuT",
  "key21": "ZeroNTDGCzRE5bNt3Ukrms5VxbTs8eV1HLesRDQEYP6xKCaTuuwNrd8MHgN3H1zToqeH4TwGjHJ9QjiW8TF3SfM",
  "key22": "3uqfyBoeLo6h1bubYcavnzcgzoRPeaJ4wD9cGZCi3c4R635qsNcsNfQh79MG5fRUGzJmHy1xFwKuoXXmSBq6asRB",
  "key23": "2GXKgpN7bCqQpkjg1eGyecZN2YaQ661PCQNKrwjF1FtycxRdEJxxoeh7ZCaPXv4pMM4fpzpqQpnLs9CWVtdY5DcL",
  "key24": "4MoWBQH62r6FtS783o7tEASYoT3w5BrwesUh5m8RhDqR33wz6Re9bhpMPGkWta9VhnnHre9XqZeCZQ9kynCRheaE",
  "key25": "tMjw4sh12SLSypLWH3jLRAi4Z8mtaAt1SZCfgykCyLBFwoTXGmT9Krk89sc2oQJQ8ZCbcSLAQtRmkxqda3MKAoo",
  "key26": "5SDzRVtJ8Rmjn65DPBgJCUi6pP61KHEakVi3cEbw6KksvxtjcLtNvVVpYTU3MWuK8BqYumacFToMa7BPPoa5T3Z3",
  "key27": "2ZidSJgbu3TLQxjD7eCBDZyun87rKTyMgYNoe2aHk4qDeMuYkoYtX7gjHXFjNrw33gMDjqFCqkeFPMbsdhwvCfQg"
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
