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
    "2ejsA2qDzoV2qQDQ2mit3YGpRqKoAgGoWqjFANMP6D1cWnoJvUU9nVTPk8dT99MhnenKmWc14xw6ctSqL3dYApdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rgqeoiuegMfYr8cAc8tPr7GqWXjd8Nbqhi2uTNscdtTmiLED1chrmwvz79UfMkhmcV5k2XUvXaeqogTKiJKZJnn",
  "key1": "pJM7ZFk5fiDfL2PeYKfykmaH768sBAugqzhuAkQk5XkPPqmu6vKRGGAqYS3aj893BvBA8ZYpfEYpuQt3zoohL7W",
  "key2": "5Ai6d5uGZcEpCUb74vYoth9X1ibFDQwEeJ46THHXMXz9APX3LCby2xKfVR2Ziqpprx1HS7fEmV9QSFiMh5wgdxAt",
  "key3": "fNHEvMcY5g9B7LgDSZbdi4FnWeCea6iAH65ZCsUhHYy9QC2JM23r6xkrjEdK6FiAG1c92xtTHb45fTtTNeDwaid",
  "key4": "3hGBBhGRSCLpCezLeY1vbtXz4iztPJVwfzvddWYzfeXrRmZD7chSGmn9kNVMAZMGHY152sJ187F9861HbMaVoG1Z",
  "key5": "3fZo3QvbgttLWDo9FSnWQhx6RayEkhyqPpQPBG3rtewiU77BYpbVCEJZriQoy3SjeBCB2dxFp7zixEm5LC13w6Jk",
  "key6": "51X1ZmdeAoYxuxbsfLjnqachx5aKExrn1RmKpRzQEY4MMqLT5SRh7qjzCz3FMvqvN1vWtEXocQE9sgDJaJ8bq1fC",
  "key7": "2GdEexxxfk1567uCijbp95dVNRtV3Nj93G2nhPr7x335b2tVhRWbWMrEn92KKkuq7avc6uPbwy3M8oQ8sQjBMLvf",
  "key8": "5oUts7dKSNWqsLH8qFNaVzJrnjTWFn5VnhQrC6ddeqe8yjEr8GU3xYaTvJAgHciazoCFfE3JvfyHbWuYkLkD6s2K",
  "key9": "2R6izRjGzLqw6ngubUM4Qx1ckJVyEegwipASgrGXcEf8kXV6wTXASVEFGqKtkmMngtrmVth2xMb1jTe7VveFWyqX",
  "key10": "3bKV3TU4BogGAbyjgKYh7dt8sbxzsnHAUN6e55R7PiVZAmfZ2ShBbMnXeAXsQ8at35n5ondbfwDjCheFaWCCRwsU",
  "key11": "iS1LYBfsPvyaZJfrPsJfejSEs5gZYffANRsr7qZPwAfH2EHCfgueKoFFvbM8dJngMLZDdwjYy7D2DHFAu82Q3Q6",
  "key12": "3ek4g7bE5tFS92eceSzVcCRz2JX6uBz69YQHuPobbf7JzDuLDX6z6Wayz5fQvsy4tTy2DMCCS4xfymfWzQHpbGiD",
  "key13": "21wpEGxzosVx5ZbJNmxM1CKpgDi6P6d5guLnRzrmkv5JgLFeMUSCcvufuuSRZPvtabbYnmRw6nRqCeQBRYC38545",
  "key14": "CJCQ6qCYnX7kfeVkBhqTCXESgG84sCQCmk9tqmHaYJPdFvZuq4k7sqvQtWaZiGySXkFjAxwx7GBuUSUUcRFVSTt",
  "key15": "2qe1BVkp3UbTmXqcM86Ww8viGkzZtGez8epCNEJUETacgWR7ddtt5zHHBRNcpurMDw6Lh8imMaK9vSa6rjGGNq74",
  "key16": "5C1LPMKtrzmUvRV7UQwbXEsWbCsJDxyzf1ywE9sii3kQEfce9Khn5qveoTX4vQwv5Q89nNhqE92EFNy4BhxW6d9z",
  "key17": "3iPnUJSxCQW1yMcimbUq1GRkSUEs6oJUUVWwdR6Ru5ryktABqipHyBVGq8nhi9uSSsZaS5QxxGzowCSJWRyVNuJN",
  "key18": "4Hk6r525futdiB8FAjUcgG3Anq9xzRtnra35KwaoFqUHpefnmxTHUEirFDbUyHZaE31EP4JSzXBmTqMkVeXju11x",
  "key19": "2fA1PBMsS6ritMuVKUsnjgo7G7oN3tqDuFkdG6UkF4d8viipKL2VwmWYvKryU2bJAP46K6SPrbfGF42MZ2gTsco4",
  "key20": "5prAgA49jYqSL7DvSLV6Q3BnoXeREJ6eHFunnj7SUvF5XDTZWpFt7UHRETynRYYqUner3AJebHtFTdMW6rDTaffM",
  "key21": "5JCfT1NDM2nYoa9JrZgDDv2ndAV6pYoCjdP6gGKRq4m4sZVykGYS9JN4M8nssCf6FFRw8QQhu33KgkbDd6X4dHmk",
  "key22": "3HdmXzDwbBQgFvrNkUbN6Xs34viQGhmEUJrTt6Np8NQAWxX3ZpUyhoofDWC6vf6CwtFbsySvQosFomU8SWTc4BKp",
  "key23": "PiovWUUvX1PZvsSPVnsvHQsFzhefCqFRnBdax2bV77yAUPsBLSziHV6UCQAvqjTcRmPEncSZXQfcs5dksPKQBiH",
  "key24": "2K1EgbpSteNGmNvSTQuHYDVmzZreEdoGDoZuYqYti5zSmjac71WhrjnWDJjHJXHUuT9D4nNRSNefdrZAvaCwST1n",
  "key25": "3y3SGFMnsqFnxUCP5wP8qJpLXZdsM2TjDnjJiTZUy2kbLanUAT56rituQ2FjUovDxUYsfBCj9XSMuMBMV7BK373M",
  "key26": "3D3BNrBinB6r1LVMCwVen9kopfSjdGLEr5RR3fchBfQS9KVpLasGzg61ytqzCCEuBWb5dpZ4wiPUXezEwMyBS86J",
  "key27": "4chwWEygLnGupR4jJmVdvrYkpm3LcGDRsPB5SqxdNi2f6wgNfnpeKgq6mEhpzqLUBcSyStDkx4RkxDAmYM1RKAyC",
  "key28": "5i2oLFrCxr4T4ZvvmPdS5AHkoL77zfeXwtCJ61dr6UE7RmpHQnimvHphmWAkfcH6F5fJMGmboJUTpVhqRoR6At9z"
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
