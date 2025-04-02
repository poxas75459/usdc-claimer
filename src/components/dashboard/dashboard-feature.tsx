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
    "2FTwoHykesTCLHRSek7bTBU5sQoV2Q5DyzVpq3ZGfUdtQ55UxxzXNEcY7QkTbrp4q66fPcJzDmSoUdQf3kxNQ1Hu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hWjeDSh22mmCUNWYKPfUptBLmXwq6isHwQi1NVrF6NsEB9cMFY2Emr99g9ga3o7ZmVA61sDDrgSkJi6JvtDXsCx",
  "key1": "5LZAUFEDmNauHY4BiF6PYFNcbr23ZdNRz2iLcHHwzej3L1qjx7JWrXCzhccZaXifXyKAdi2trqGM3hdj2a52EFtJ",
  "key2": "3akVEm67soZ4YXw71m7FJatLNQNdbCz4G3eXhh7SLcRjD9ihNtZigAUvWiuJk6KADDjfRGb2fDakWhEWqXX9hBDM",
  "key3": "3Yax5uB1oW1cqPGyy6Wc2RByxSTGjjUcVYEpD1WnHawaqaynsUbkAr1C5yGNeG1aDhkbE5pk3qxNokdTJJ6swcUQ",
  "key4": "33JCEQ4JDUAS8ULe6nW3fJsa5whbP4LBxEg7WusSVmba4t66hCNoGC26KEUo1LvcYDtJLq7UJTRpb14rHmSmdPPA",
  "key5": "4wKovqJygkv1udgJqrBtXg1CnTMjYYCNoAMy2LNoshukC516NfsZGqHoyRiEtKQv1KoQEzGCxW7UgkRTFnADBQBZ",
  "key6": "3YvM5WGJPZ7yckNZD6H5VV8Pt1EpKsEj5EGocw4fvGFGYLXQEWHUvCByKB6BARm7CTF7Pd96u3TUMBW58LZnAp3w",
  "key7": "VH19Rf1wuFoJJ5hRupWw4sFJ4T1GfxzekbitXu2NpidRQqsXu8rjMZx5JppUyALBn5q3kHcyHiqPvrJut1jHSK1",
  "key8": "dyNNzTHMEvBdsK72oFYWe8K6dRFFyPSZkGYMTsMFf7DMt9qb2ZGnwa4CsVLiTapQUCuivqHi9UcCn8cbavvQk5c",
  "key9": "23Mf5vXXqRyJ6yaAnnTQRyALPMoVNeB842Bhfmo7F7FYuAe8qiYvMiWnrnEyeFuRq9r51FRLfF1Ej44179Kwnjvd",
  "key10": "4x75kHJdVY2V7ZeiGmv3DiCqvPJGi288bC1PrWkasaJmP5aFtGk93xhSjYky9nYKsbxoqrin3ircGCyMGGK9eFxn",
  "key11": "659mwv4oG1RovngWVwzH3qardHoQEFJpFxrFZuUVbT8uMjPwwumUWCYbTEk9XgaK3MFYSuJ6a8JwqjyLWbn8WfC2",
  "key12": "PaCHzSuqq3UAgbLSDnXsDHadPXL1Z34pdkdwXXTWcWX5JtDp7cVykjA7JJJ4eiDATf4jEXxr2MYvfhKBFDXfKv9",
  "key13": "SrLiBiB2jHGVT7p9pxSrBAWefdVLwGPo3sZeEiFYfGdYGdgUVoFCZxvNa4ZCgc64K78RQmAZQHwE4FwTf7Rc7KM",
  "key14": "4nQJJnhgtgigmgQWSXwQ1eMjeDE9npKq1LkNt7LV1PKrCgS4YSb2p3jxdtDHDXyEqfkeEx2YbC5M5C31SUj8hxh",
  "key15": "5skVQxG2SLvzzaWCKZdevXTQBckYBVRZADh28mpqNstbduU6sQRVV58iSzVYjLuYaXT5d4uH45jQeaqdNGvEu45U",
  "key16": "3aKan8ttuWL777Leg87bPV8M18G1g56G5wxUBMjQXhDnBAcwrFHaMXjpn9wK8BfqezDBRASFAGD35t549BrStxGL",
  "key17": "43cBYjWyNPC26586GmxQXgnhnhEnD6s1xnMpEKuViCmnbfR26dJRSpVZ4xEaZtppW9352odWesgQwK6CwQTMEHF2",
  "key18": "5ZvdyYvP2bKqoSmhgNUe9VWM9iruELtDzaeQz6myEqKgShVRwrzWGvFBtwetTgTnrtRSNSyvrxZTc81VuMNMohW3",
  "key19": "d2owJrjukRMgxRJmN12r3r69MdVq5uk8JpNFWJWMumJRDqiPtvTHnbmrSqWZLPEHUbzwQ2oisfMY8zrmBrg1Vgm",
  "key20": "8g7FKdEpMtTMocUHoZ3S3nJ3pGD28j3y3rFdBLY8egHHmbeKANra6ms23Trm6PycZnCeCUjhq9itKzz7wWygP6U",
  "key21": "5rm8TMJefiG3SfKG77s5ZdQrEZ3mVyQcccjQgNocLJeSJ1oyueccgLd8fqPVvexnU3NBQzxpoNDQBP7qiNcfcDTR",
  "key22": "2SZM6MyFKKpFVjSznAgVhp69HBnzGQ75RPrZcAxsv38HdPAn9upK5PxVbJ6KuXgVwjKAz3GQnxY59DknFfNp8GQY",
  "key23": "5oQwNk5aQAR5jTkdroswgeKCbtp9TEMX3Zh9DKGJRQ87Y49CrRu8ngcXjTkzKLAMb7bLmMnjfbPWZnfdCyaJSEmM",
  "key24": "3VF8EzPhkASwNWFoUdsCwEGCnFvREHH4Ap6DhyEzqp3UaK7yvepDNDwE8i3DfvHYX2jaomNz5fH1goeEW4vrbQbn"
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
