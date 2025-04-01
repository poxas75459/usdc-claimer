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
    "25v17FM7zewKw38etDdYAcJnQBhfh3AyGn5rSvpGz3uFmkY7kNhkoBgcp9V4Uf3VDaEJ7jp5SpxdRwsFPuoqdSwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xYiWhGgeF2kUQsP5YmECv7Vh5n2j4NHnduLGDzZvJM8TDg1L9hmitozcJqhBcWqpFk7bWUreddQJSTzNmxWZat",
  "key1": "3aECdDPpMioVbu45oDYaqYgz2ZArFB7iJxiVDZZTi4bdpadDSPzSLQbXJecaFkzW9wqPLrjep3R4zFySh1AN8NuG",
  "key2": "4tPbk8919zK3Jb33WjVGi3FbMHJjWFzirfSu53G7uc9sdrYYNCwfA649hdPGg1bvEq82NZ773yNgTsbXoh3uN9Yc",
  "key3": "5NFJMGEemn4SLfQGpWyN6q9YEHXV8DzcBRDt1JLckLXNrLcvri1Egebyy5afEDv7iXp7hM9YzwWUHVqLSJ32SZM5",
  "key4": "3B7h7s8nBgnU7Heh7DJD7kaR7zzqu7YPAZzBGaV1zwaSgdHSwgpNmKrQAPCgsVX2XjJfQtgCB8GkW4DN62NA9jTC",
  "key5": "4yyi6fwr6BGYhDHE1wSZbYBKzLuurxoU2U9krzhsJPdEdHnygNPa7fAk552dF4n2idgNrYgSMkGtjeEPjLXiRoW4",
  "key6": "a27eaWYrEUQVxgFgm5W96Q58q3fmm7eVkBdsaHg2nA3T3SPNs2SdtPZdZ4iXwJtzcSKxk11ZUQFj7K81FW9cULM",
  "key7": "4ADamQCKeZMpfBW8H5pjwS2T299pHZrywK1XgQCswndxXPqWVv6JDRKe72rcWDngcKTUgaX6yXVk4u1kwBNusPZ8",
  "key8": "3fbv2gfK2gaXCzeCRf29qJvm8y1QqCPWkQ4aXfcM3VrQh8cs6XpJCJ2Qib71t8Z5FPvCDCmpb5yWaxj3xjx8VX4N",
  "key9": "sue32yx3bkRSjLTyufkyHUKA5mpbFksXZYtNPqJfyyw4T5GX95QNP3nS1YTVgCi8VhnL7cGj8Cb6Mpnm3b5DFBx",
  "key10": "5gXz7u2yxuceZc6pqbDszGkRM5C5PqeQjZQR58NHGKdQqmtgRXaBYSRmvqMQrrQf4XdBFjT5EFM8cu5mBGDZtZJQ",
  "key11": "2ofiNtQ5jm6FdxgdsGV6ZTdQixsQ3X46p86ohJWbqa7ibEN4KkFcMNT1wG4yYCnRHef2ySVMW4UgLD5wwV3hL2Qt",
  "key12": "3k17U7NhzxCbzrhYKtQEbfftjviEjTCBVFYdwPBZaNVnF95RkMXBxm8Ei5t8yCpSKSwcqKicckdphFYn8s1ZHMBe",
  "key13": "2MhfJ6q4ZzNjxVsRda23Ce29wAE8hcva3PMQCmKZqy9KYvndpwNrhfkkJHQMNHmZy7qBXaFGwd8RDove7Nf7i9yb",
  "key14": "4THU1hm3yZoiUEb563s54LGvFMkFRSPwx21EwTX3DvYmQcaJNeBL8b7KfVovL59o71su8SEucg2bNmoPhW3w34Fs",
  "key15": "2dibyU2X24p7DWrqKcZB33wGmp1QtMDX1wKj2LKeuZbr4URdXhHqGsgiDDxmkryB9hMgsv3z2EDwnk1VJcLym91E",
  "key16": "548ddEGTob8ynNDA9uuMoyfkzP6wqAV2xgTkJsxXz4EBoouChgBhUyswvsfk814SwjC2dbRJrEeB9qaweNA62wrh",
  "key17": "5S6mHnJV8WKsv9SggZcgKq9BtAoHQJRdWMNd8v5er3YKcZFdg9PdkCtXBhdZKqiiMycQP9sbpB6CM13X4aJLjSxC",
  "key18": "3GXGzTA9K6YSvYCd24XYCXEzAtMbchYaQx3QHoE6wkxTJzse4tERoqrk37kuo1QEH7UycQTfNMie95qZb3NPekDV",
  "key19": "3xnUFXm5NFuJ6sUVgUeTA6D5b8JfCaQfAAPSGoZkvXXaDNmkkaPLUbqtZKWEL6JEbeVUxFm572UA4wZAwtxHXHMt",
  "key20": "3PkDCtvHQ3ozDobdnBtnVrLrSqm31gKMwyDMRDruCCRuzNvn181t4MmxFCdFHt66hrWVFb2XMiC1sMhib23BUjdQ",
  "key21": "3sNtyZ4un8Zg3oN2aChvCfoVChSWj2V2PybQKwns2ZuWgEKF1Bs5Rd3s4wuEHqWRdCEyPR6KDdRMMGZbEGhkg8Nz",
  "key22": "3B9ZE8LgshFUcushkEvn6RusTqJj8zXBhjbWiZ852MkCXXkdDN7RN8CXgKQDhq4krh2Q5TQiqEYYFLfrBBbohonf",
  "key23": "2ig91pSgwzx1i6m7LFtnN9H8Ytwskk53JSv2Wmurh6qJiwzUdrX3iRbPeqG5UfK1HuvYp4Te2HLjF7NCbH1c1BED",
  "key24": "nUZyecz1KcRKMYHaeYR8JK2ksGskgm6CHQnEx9cZ9a6B3EwTKtGVo7ATFXuQFijckQdDGbJ6BFoJRVYcBYRAU3y",
  "key25": "5RzjEP57BSu133q2fwxpfRaHcYde7pt3jgji8kNzedxJ1LQv6uPiKXkk4vMMFZbqXsai8edzkWsnjFu1F4p1ACf8",
  "key26": "eT1atPosiMS6zrvfwPRvBqiNGsiDqpfjySdRnv7SWDy5CpcJNeVYbLcaYpWBp4sASxZZ61M6X7So6Jyj4Tp5ufB",
  "key27": "4cZM9hVpakkXCht9dfv42wLDPMEqrjNXnwCioGoYeA5fmyNvYtobJ7nd6s7iyp9dovQjWHg2k7CZFdCFA9VJ2q3q",
  "key28": "55YkDeZQCC6kfNN7cwjNZ7BY1PmxzsACDPELiwFyNyZnxkoATZRFMjpcW1vzTXjtj1zrASArDxWCnebS5MARis4K",
  "key29": "CePzYp53eUMPRMc59LUoR4Fh5tcUuxXQ2XPsf26kN1rEtNW7fwEBZGzXA2YchsJpdSVaEA8FdAvULYJq8sZBncL",
  "key30": "3tFtJhZJJdGZgXcMNZppCXDi6NVimja1aEjUR52hR7NvPNBVp4TwA3s74qVMo5qfiUEDGD1UaUQDpuMs8TpWLkjY",
  "key31": "5goSCBf8hia854BHLU9hEwvn62aBhndSQSdD2a8PPfpq9ZwAVHTL9ii4qLoUzwBTpzrtNQt8yJbY1iABsbtAW83Z",
  "key32": "ET6kmZxxUcny5FtJReFwuDGJ5BFe86FfL9fi9pE5m2jTDPYC2pAShFGgKeKiew4XsLLbAUrJL2JFyFJXkUESRzB",
  "key33": "4W7pVzQTiiZUS8xKSqh4ddRiwGVtSWqYjosWfjiM2EqvyBdDoAjyaBFgfCSacPobeWGQGqcaodVy13p48yhUNWJi",
  "key34": "Dum4L5q9M8eT6umeGhuqMhGELZ94LiLTg1DQE9jyD2dzZzmfM7U42a2e4fpYF3e1qAmRtSmHZoi1vqyaJEFzPne",
  "key35": "2zBXkDVXDGqq3bCPtThEYzLQwYXPXQTU8XAK6mmWqSjt1XsQu2VqYxALmgkpCwgt4bVaHaKgpvzzYLqWKJtCZHgq",
  "key36": "2LXabb2kGWm9TiCxwbnh85NFFqVnpucF87jpNweKnVHBc4wk5S9AbMGr7RqZXo1nPg3S39QsPAtyr1LvdjY6KsRz",
  "key37": "44Zj7xoRo2rUM87k9bwnpmrQJ9BWi1FJYh3dMvfPXrjKfSGgGAJM6snibCnALDZ1rbdmi3VSeL9Ts7dnUrB8UGuh",
  "key38": "33PMS4LSup7j8cehqE8XTyDoxxpT6awZoGPrTV7XcAKKZcAvLmDuHxHo7K988G8T1XycHSq4aBrsA3DhLHa6aNfi",
  "key39": "3VSqfJjAiurppprsMvmpDMujNyUGiSUgwvFrnNU8wMhfwcAkpLtRu1198fvhdzMz4sY8V2LxnMrH323ByKb4W5VR",
  "key40": "4t2QBdYkMWGakmyeMw72LeyuHABfhvGRdRmNwrrdgt3BLJgY32w4FqXEgWEQzTfPfvg4smfoFFcTXcJCYXgM1fQy",
  "key41": "4abjkndoezUVs2G2u2JdXbP2HG1bxxAEufW4MDhsZmxmm9qM8xkHWyaCLQfudmTcYMkw8WHuKnbquFfZu3fV2hkE",
  "key42": "2weG5ddq8dbkfAVGGWFyHM3vRRwJxP1XyFRYXNrjS4onFzZ63eKNokZitaUURxRok92rbrQHNxQWJhcTEGGuWN8B",
  "key43": "44HdPyqLEED3hZHqKyRWp6gx9VvTnpFQ7KvrEw7n8khFp1dSfsEfGUuHY3Z3HGK1o2YvufpVYPxxWy1odCyWvYs3",
  "key44": "49AUEfK8SHqUwRBGzdXyegELCm6E3NBKRezxL1m1mC3dyjJEJ6L4uMwC9rtWEjiuyBY5ojUKHf3tkMz1FqR6apWt",
  "key45": "5ePHayoZ5kjbEXU1KXqLR3YUBamKmkvRictFVoYiCp6Cwjgcrzca2H39PPMsBmVNftdqyMLdbT9MYPFtTQ8HpZmt",
  "key46": "3xC1XPX6kEQP6zSVdFSSLugDQ8iufMUcyUyEGBYD58YqQ1nPXYNKucnp6FsGh7vUXeSq9dYFEvaMLm53XQLsnTMz",
  "key47": "4gAwzSY7bd6yp2kcHxhqubnzARXfpsCVeEsVNvdKfdDhaAut9eRgq1FHcNdfxW13UXuSSpPzVVhtwnEZs2h15jUh"
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
