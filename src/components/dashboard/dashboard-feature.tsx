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
    "61nS9KkNUn4iiNFezpvieC2iB31NFE4vZwSsDNMirHuB6fufwXdui1HtM9VM4ZTQ9c785fBkGdDtHVTH8pPA2dZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VJAGvRhGP746yBju5m5gpGf2vAuTwtvijeGYtDrUYte52QBCXyFfGCGQEEHgkoEz82XzfbQS32ifX8aupXd2gDt",
  "key1": "2Cw1uo1su4znkKBSa1hQsNwVF2TAP9VPfdQusnxe1zQjUb3crVUYyNvVihuky4TEYQ2muddo9rH6ksKk3s4oRbRG",
  "key2": "54MTbaqwgzCLtUQgnukftSZw2WxJPASW5gzLWEynAd2DUCGpHzNmbd2iNbGxnZvGinQ4zYRpyVtrxkFQ7z6sghML",
  "key3": "3mFpKeHPkPfam3CKEW5oSCLAcyNjEMztdiuS9SvwNfERc4tus7oVmSpzxjCLgULXQXNnjhk7ibsZXwPAMxFBTjPp",
  "key4": "2Z9UXw2k2NeYt7NYe6XhUDu9LBXuYPLWuaK9LSLy33dkFVBCLCTBJJgYa1P9UgXeNdbKv3UU8Ujq2bEtYXy3Dm7L",
  "key5": "4kBZr11F4NQbDBoA5WKubWtqyKHzLs7qLVDsGZnLh6rZhzVhBAGMTGiRMEj52waUwECfQM7tZdL8ZjarX2ydtPuX",
  "key6": "3SWwK2fRJLgL2kR5WuJFAKtNaouYMPPmPe6EkdApr24RLj9JQ56otBKGtFXTuz6napJYzMYEKui7Z7SbVJenfvzm",
  "key7": "5TaH7suHgRMHL1Ug2Nkvbba2MiEbigsebrHdVroJ9j8nii8F7E6P5dhQkFLvfdpr3kQQuVwzxx69Zt3EMgdNBhm4",
  "key8": "2BNhXz9m7BvTZZqPy1Shak9QmCZ4xdrP3TzGLYP2SGrzgTQhcUo97qJbkpcJmC8T5ekR8La28gaisoc1PLWj2SsJ",
  "key9": "439KxkJamuoAbob9xdEDVdNetm5HbnqCCctEcqpWTEhU7o7oAcdQvBeXWZcWWzwmpGGUq1CwH57oTmQQyst8GvZP",
  "key10": "2LhdMiS27Qdmh6z61jrCHJJ5KSZRMgA6m7TQTK2A8UJCtL98rSZdBVgdpLF1B4x4njwiZL3d2hV1sGd5f55qYqE7",
  "key11": "4V4tTs5f8eumf8gS2zropxopBUK3fJX8sYm3JdqVUNnkwSpz4P18GQqJppwZ1PUcEm9FZHQFtxFSoXhzB8ZYgHyk",
  "key12": "63GeX4SnUpLNLFBaRDEhSy67HgzcTwAxJwH2hbZ924FSjAwWTnoHrJXd22MkkpEMMjL7HaHBzNrFiqvaRjvSzUMc",
  "key13": "3YdLNTvzKHgCMJcznNEigMG34WQnErz2Gz78KDYAQ5nU99BydhTmE9bUd6i4gsFTxzsExE9cg3e2gy88oBdofTrt",
  "key14": "zUNW2spj5DSPRuodcHrWBBM9UTTYvZbbqitMtXtX2C7xoAH4Q1ZZS53xwYEj3Jj2m78qaJkCzHA94X2Uajp13Um",
  "key15": "35N3ikn9YrihiWYEyuoUEjqRHLMQkaxF1x1onmNb5Vm69qZXd3SZMvNuzyQbspohAb3aVdcLPRcUm3TrB6jdxFsZ",
  "key16": "5XycXqsvJ8FYdzzyaYJGyUpVnS5vjuJQZ4r28kdMg2pUeoMATDU3RePXMF5k2yUDQfo8pakroyRLwhYzHjMbj2YV",
  "key17": "5GcetR58eqVneBWurj4ppkAwYrnVqTMjAYAc2UhjJLCnVjoWJXKYihmsrpL378VsUSJ6y3nTgER6QFfrACMrxLT7",
  "key18": "5e7mXT7jaZTf86A1285tHqsKYMzBMo4UCfrJw93uAZwh2TaRpTroHai6t16Qj2rWDVZBiPm5cbNoXDjjvU4LZ6hg",
  "key19": "3gASR9LfhyWyvBsxwFteWW2WtSgtbDtuN3CzfVNNGPoJxnSzr14rjfzz37Z9rzLZP8uy622HiW9RoQ6WFpyW82Pj",
  "key20": "2TtGHJromiqarTKUdodJJmZZLPVeiHWrBx54P35iDawNJ76dv8inGg8MoUZb93Aqbs9QXgAWod7PNK8WNfv8tRyQ",
  "key21": "2VEahwGyQNmCuPSNUAEiEgzVJutWG7FGuVV2y8DSRoDC6hd4YZ4Fna2LPNqYaKN1BvmpDDuoQAAJFFWUXfEgrCQA",
  "key22": "4TpkRPTkq8kFaa6EF2eozqGuqF2Pz552KTig5kqCpfN4mWEzNCmhpbzM7C1FK3McP78iBjKRnaQwwNMXKabrvbGV",
  "key23": "NUo1tPKq2vSpe588YodnfNLNcwrMqCocvBKas6fqz9DG5yE2BMgCnK1hoFX4i1tUotoGu9yvizSijdxifRKVCL2",
  "key24": "56Qxsx6pU8X5V4VCVUxPtvC3xhHL4DVHxFnFmmYZdzTwcHuYcS268MVH3cpPYoWe2K6jLJPiLtiW9pHK28sZbKmZ",
  "key25": "3W1NrgUbUevJpkx6HPCwi1VrASyz2XaHTCKsXw3svEHRrgYT83DanrajtEYDtwzQwMwwEEMzJe9YjxriKToUMMUk",
  "key26": "2Z42L6Gs6F4Py68RVyLZtPirrodxvcbDNGKK51AcPJhLRfFxytpx9iDWcMvYCo6b1LRoZrVdi1jrHzSyjDeqqsbT",
  "key27": "5zCUYkg9UKgZAYofsozFY7AqnVozzm2hT7rsrmFq4zbZ6LCtXY5ZaBAmezvNrEfWA19qwLFkTXv2nvKgAhhwnvc9",
  "key28": "5LKGz53YpkPoRzkggdGro3SXutRPbpwHXxEisiv5nNeytDdZYahcLHj6umtaWmHrG1rkri4nJ1ozas8jB7TzA2DF",
  "key29": "2Dm3gE8MsBEUiPgVrxN88RMbvzzuxQeJT5sN34UFc42279D3E7js7KMbdbrc2j2gyEiPAwDs4NUCXj1xW9goawzS",
  "key30": "3UcYRxH1bjr5mbpKpZa6qCxQgrZpEQmywwojkskiYeJBa1NypTzJsireujoZbSRg21dkWJVnWk7uZrruZNGrB4B8",
  "key31": "2DJ68YHZudmseer3nqJA1CbUQ3cXYJ62BjEiu4yfUky2WRLem3Za6nf4yLaf6pbE8WjjDMu81nwziaZd8FKGfab9",
  "key32": "4XoemCdJYPBTRSFRnm3EkNcUcN2KJibYzZotE17jThSeuiegC2HyXRcf7LndTSFBvs688eC5n1oxZ1anCLNkNVJb",
  "key33": "5RJKfUT9u4CprtmY8yVJtpoZNFAp5enVxoGTJCmYwmxNEw5fSaoHzPcJnfyNmDCgsFHQzoAedrgDZWGLWwuXuKQN",
  "key34": "3fYTsmVgh8KT5fdvDFNPmPP2Q5a5PCG48aAr58RkVGq3sKR8NjbCGRbKGEpJtxHhnccmDjVrQ59Xw1jkt2kDsSZb",
  "key35": "63iwWgtR6BPxFQ13egtS8wCxpJiAJDYHJpRiPDhWxr17XubAygHym2VwVc4LQcZPacyHmo8vHC17iAGpL8nqXM5N"
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
