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
    "3zMxRWPyozMa7n69ZdSL53FPZ4jJfhAFEDK4Ab4K63ZFxbqCN2PYMFE4MNtaJo1Woba1ajFgEPswT6oicceVQK6v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wn2bdNLJfkNWunwhJRqkpsSvPZmUUpB1nfVMGDLkBrhkxntHajW3QhmsrT57TyxqWQq48ShWEMYmoxSsWkQor22",
  "key1": "2MFUdKPWvghT3xBuwikJMfQ1BiLssE6KcA84y9q4fsZbitYr1VZDnADPe459PtLs9KFymBRiUy1zGxcBvkp5FrFo",
  "key2": "h5zQxZCYx3t92As1o1Wr1FJX7VuS9XgNvNbn7fJgSPmZhghpEWrPqGQdCs6tRy3Vf1u3Vvw5UESRjBevgs1AXkP",
  "key3": "2sUwjSvPDPZnn8nWEw6qXn4RdZvG1reJjAxmiqmP6jtsFSQVUpHVHgZyRyFVzuib2dFzMFHqFJ8tvj2EL2VTVpkR",
  "key4": "4wAst1F3v7SzPHvmQ5datSyUK56LBEj429cjCsswzLYRXzP9AnGLeCd1XngWmtyax3aE3FFH8mPZRECrxM61tTm3",
  "key5": "2NonSUQJuvVpCyvkvfWvU7YSFoRpT6Xjq79oks8B8zSvFfUQ5RhjFCebcgv4P2tmS8rYVTXqrDPXNQnVYzftFZZy",
  "key6": "42i4HKKVuLRxbxd1BcKDMVda8v3jd9q7eRnv94jwb1AJWicQJoL2GF2wJU9yWScP5Dme9jNzQ1dby9VFNCNY3FhG",
  "key7": "3gqfYrccYM4bxQWzcfhCHQ4mPaExseAafqmRZBxbKphogotaxmksHyFpjMt2kZ9z4HFr7QbK2AUp3enFKoDKB9ab",
  "key8": "3AugD57itLfResY5KbGioUjvyutFybVmMuLWVJVHYpYRRBoGhqb6mF9tC33mX36FmkTrzRUpvoo7FiXskDtD9k7f",
  "key9": "dcWRrrix1NetgaA6oQbTXEM64gi9GxHPk2MVfDQDNt5H65E214gYR34Hfb6xiCofRRncgpQNXBEdi1MTYjVtT1v",
  "key10": "4LYJAtLu4osUWp365oJxEVHqbpDKyHLWQVbbYnRVa62HZiTBxhn3a7bfsgcERhHApvDSqwXraZaBMMM75epBvJrs",
  "key11": "4kjx3hrco1GFkR8CbqSvaes73xjr4YipP5ypmwjWjwESK3paeupSqbFNrtaaJKhJURcUA224DUMHjEjM5ssugS5d",
  "key12": "3fNLLUdupGQWJf2YyTGSRqfr9AzvrurSmNLTaVfuMWbytMXkHsucj6sdYoLcm6h24zTibwZLfTFBvz89g75XhvNW",
  "key13": "2QEMZARaH6RuPgvA1C6r2waa1g9BrWXdAonBnAzqAiDGHVQz1Cyp9gnn3ymz7dm7rmcMy3Xrk49D2jUHJTBGXZ6W",
  "key14": "4y2pKcHx1dBEJFpLUZqRRCTjqBw5HhQxmvERAXBkYDpAqiCFBk1JRLLbK5E1RqZnoo12oyRjuUjeh5Ju47E2E9pw",
  "key15": "bPfEKJoryZud72gHfJgaMzn9Up3F3UdZFsdn5qhQ9ErFhiJr6ki43omU4KgpzzYD5W6uxmMKAxWfJT43qWCRahd",
  "key16": "5ip4TFis9WVNawiar49hUzsjWpzjgztvaNg6und29idG2sSnSuB7ADmAhxpQDMtcb1cDfAirKw7o6t8hGb3wQMHH",
  "key17": "41CphTbSoc64jtbNvvtdjFG453ebThSne1xfQRfyZhM2EjLjeXchqNjHuwV3TQc1PB9fdexMHbRYFZmUG7ZgYvCr",
  "key18": "VMRCmJ8jtF7wU8moffkD8mt6eTVPGTyxpcCX6ARhUzwm1BRbAd5Ttb9Rfjo2e2VFePx7SqpzbzdZgS72C4wfpTV",
  "key19": "4uM7sUpbroWqZGR4RV1wFU5GYeYdUpFT7kZEbXwesrvEP8M8YT6TfBg2RTe4aWZPo2y7fKG4UkayFe5shKk25Z81",
  "key20": "4AXp27jMsjnLmT6NNHmz5eS3zD1zQyeVEAbGX3LCQwtzWheNqSbteEwUBwyJQfQMysHib64jGaXzYbDmzJVxwHc1",
  "key21": "3Dgus8QdfhMF71iHQwc3pUDp7aieKykiHsPYvLumtKMBnM5ocSC1K9xi1KFpLdpq8hmbKGfKVrYWo3FCTGMZ5U8r",
  "key22": "5R4aPPtgfUcz12mMx4ykGJtVqhmJZBVD4nucGbEXphBQoVcFQTRhGF2oUo4duVj2eBBP9rBU9YDX31ZE8qJ2SDba",
  "key23": "ChrquzYX3Jez8Dee7TiiyxuLaL28xVzowt1MwaZC7moYC9NzXSnNb47DCeZoniPVUEPTgy4KQEAt4GcN9bne3QN",
  "key24": "AKmVapZbYJEkg5hwv2TWyRA9nzPxwedeNwTCsQuJB5qcEypaE7f9pvAvhDPGNJ6XALi96VY3jAkd7FoVm2TPKt9",
  "key25": "MQKY5NQytb4DhV6J7AaotNziFaBiPmFf6rnEBQwXKERjYZDK2N1sg5hs4jgjm8AbcjAv33t2fA5NQBgrm5964eh",
  "key26": "38s54srxunAdYya8zyVC1657a8e2REiUREuXPVk1eU6gVApGcTNWSXF8oyrTjFpQ1WntVc3Qq82BYQk7kdWa1ton",
  "key27": "aVii8q9mknNiEP2y2y6zpsJmtQvzccALm7x11JRzysZPxcKafzp4g5P6dFNmPFAHHHviDC2tFPVke8nq8FrdAbn"
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
