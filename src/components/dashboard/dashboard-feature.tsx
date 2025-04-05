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
    "jXUoLmU5RiijYXj3TjahsqiDYNW5nRbiNESFaprNc6CoS5XVAvgPA6BLd58PJdsLwMSufygo5xRFDkBjkuBamZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FYdjcDjBnC99y6EZwhM9G3aJGoqeiNGupDWcWjk8tQxw2tfauSpeFzaJJdnSwG8sqWTkWoo2dafar6eDxDm215u",
  "key1": "4iuxw5FndM51dbqARvLmA2yHyyRqxGDky8wRs6mWkNbTC6vxnSsj9ZistqDwnQGV5H2xrPCe31nNeDyUEi687GLY",
  "key2": "4xgQH6esa8a1c2gFZgmKyN3xPcfB2rbaWvZcwcdqgKBqTfke7hjTeGQr6iCRf9kFsc7zrHr7nyA8fN6u1h8k6Xxm",
  "key3": "5jESoDAQW8xz6Byr3QThsAiTsd3WsVEhggFtryymaB7RWXsb3Xj8eSHcRzD6dnTrddbnYkvoLLHHzVeeLcR7rbJF",
  "key4": "3F8b8J1gYEcKcoTUE6RJhE7nVvuJ75sGJLqE819c5AiMmzRp1peqcNAcxVFks1ieUFeJCecaV7dVhCR88MdU3TZV",
  "key5": "3TABjLMjhgfBJdeJwr74Q7dVAAboNDWZukvfzextn5mfFiCmU6yzebYTqXcnFLsTL1xRx6WF6KQsxEUpr4QaayG",
  "key6": "5ZdsD6UcgAyRhDX1drQWFYP22XeuZp2pqHhAExpSdbqECESxL1rQjv1VXHiGTHDE8rGALj54CNhfmYcR4a7CZ1Lv",
  "key7": "Et9HRqMUpVpCYRyAW8dCQWsCCaYSwUpALrV5ku1Skgsu8JRQwAx5XUrasynXMAPXfpaTCrGRAgdLmiYsDtWPFtp",
  "key8": "3Uwsy46YAEFjrQLtWDCzsboAWLcwbBfV5ZdsgZNaiAJ3kvCdCRDCkrRt3LNxeE22rFv8668h7t2BtZFQXtQDMSsY",
  "key9": "YgtPMZ6AmWBuCwvQtpayL8AGfi6gdnCYN2RLA7bhNDPQrCZgiYykArYvvrPEogr9mgtRY49xoGtvJn6phYQ2Zsx",
  "key10": "2pK6veahCjbZzCL3jSa1SPMBmwM9nsyy1KyE2NAifazcRtGs2rycbY82SZuih4wo7fjLxM5rKgAN6ApWYcRE5HEm",
  "key11": "4wXavBvG4gFFwT8j3gjB5JyXbgrjdCdoh22uL2kgJ2BVQeS178jENCumuqvKW3sbUEoNH7L6TaQgurTi9TkNCgrd",
  "key12": "3WQ621nXRwnW9NHURGNKRkhWqgtQqrR3hSrJ1czFrnCxbafDzPpsuCgEbPFjLecz9MNFqsxDCi5EkNdt7FFaXLLX",
  "key13": "5pJLyLP2FoXL2EmxCXCZ1yZv1q2jqoAKb4L62ut5c1PXy8RtvNSb4FKkfdyS5JSABSeyqMuZnXdkphfAeYGV257Y",
  "key14": "3dBmYwkHWcjwkK6pHQnH8p3ea7mnkJawMngXXViBz7XxyrdZgqX8CtPAxL1HZkp61tJpCBdKWvJZqb7b9WhgzHpm",
  "key15": "27L3rFz822M176N5pkWrR82YtoMM1CFGUHWhowJBMyWArS3LCFCvEz4ctfzwhUiVDS4D8fFyLQ8SsuC16FU5Grkd",
  "key16": "3xvATm66z2Gvfvk2wdwB5zzRmtfKsKGy6weaNvnss73ksvb8uEmBgyM85WFTY39nx9vgLH8YpQtaUd5JFs2ABQmj",
  "key17": "5F68kBxkKrhwBf5gtVYoXR3CWNgXTgBYxsxwGCdtwfAEyBam6msHiRbSGeGsVmRd25tZyF319VDwe3qJdGn6c2s1",
  "key18": "3WY5jH5DEUxdDu7ZSntYZpmpaUVfgrA5iMAEBuz61BnFSVApq4b8suXddswh84v2qzk3LrV9vfNPWvkWWCJbvuSD",
  "key19": "2VAyjVcMJErcHDyXPcA5QWnnftuCUzGvwxajhSKyWP1dSEji54UsuRJoRKjSYWRzqADRsUAbbFC8xA5ixNa3Gh68",
  "key20": "4axeGLCoUjQQ7hBMFBfKcTrYobTceHNXbFjCC9mMhRQEpsnY53EiXX67An5DLhNSPCQzeccWfcshToBZQDyTfo77",
  "key21": "2VamhFAPZPNrt5bGBjfVm8bFyhQkmVMWd2ymw8NBnM63C2sbx5LxaX5ubDUi2r8RjuTH6BcLFK6z3eKe5GRoXhJ3",
  "key22": "4YmCTTb4bLxUoowvdvdjSkX33prT3YAgZedUq6WAtrsJfGh76NCDFTJo6JXGrzyNtHygYyAc29od3Z14HqmFYvKA",
  "key23": "5dYpDqrx6meM2CLT47PRooeBsn8vmvAkdqPhSuFPXZf2qq9qkjtN1HQE4jJBsRMiZW1TiowC7LDD6ZKbeMnTbBpo",
  "key24": "4UwGVqEGCPjjjMKggCpQUYiNapnSwxeYrqGdGDRUJCTPNwPPPVVwnoHv8RQUpjyLSwXhq2xf15qHw9ZaNmbYXgjz",
  "key25": "maUwE3AkSaGvGvRWBueexgHvVBA3RYrMMYoLMofz2BuZXZhJ74CiX16svcfsEewLwpmGWxUQXWM6skiWAnqWSBo"
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
