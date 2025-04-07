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
    "7DMV7gZEoD8TYbWi9A6W2JQUuoqMPx6NNeEXfq5zxFBBEEeRgqZBM6hBcLRNPu4QgtdLzXV2tAMRnttydmuiARh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BUpXnRTbUfcmCfd7cvsCDWusuectqSGLdUehykSxrEH6C2KhcMnvJGBKBiAWDUjh3xQJw4fU7XczdxuwPndXufP",
  "key1": "A7KQQvTWD2Yk2m618b8cxjxXMMjRcBd1ULHXSqPW5rJgjHeC1aB4DkjFcHUQiTtVdPDe7zwZebfPK8TD1MHyrjD",
  "key2": "bn1Rh6R8tB2zMQyh8UNfVmCf4hFbwSw72JsSJreD4TJtpeSPWjhV5wgHXN5M4yXy9W4cshJF1Q2aCpuBiWLRZFq",
  "key3": "PgCEWv1M1f2efLZQ6EFbB9mVs8CpnXDTBy5oeK19tKXtzrPRoeYUK56LJjCPxiDypAzJ5FWahjR7PoSNK4ZmMhN",
  "key4": "65VQj9vidrD8HPwb7K9QhxLddVEV1YnWmi81SbVNPPqBHAKQ9kdE5A1FdZf6g53ZALvv7YbwNgY6okAiAAMi4ATn",
  "key5": "4G9dvR1sU4mFCwxHYvNcmU4GXiRasaLPhXL5wRJBKKL7cyqKs3mbPb43WiVzWwVHsQukVZEjBRonG5tUPsiUcExu",
  "key6": "5emX7JkRfjufkL7aQYpFSNGWpwTNjgsE3gssmQgWJ6RYpcFNGgbErggbjsAp72joRnqHwsS8mMJQApaajagsmR73",
  "key7": "3MbSvEZuxEB5n5ZjMmMv4zuFHuv4aj55EwFyxybs9vhNTA1oUg7CFXfmY9EXyC5Vnrs1PXQZSvriXBYqzZDAiXpc",
  "key8": "2Roi8jw6w3ewKUMrJbJDhazGmcc1jJNrfSWTx9hXGpXaLrr5cjJgHcosLuDBMwC99q5ugt5dm7gxUZGca1SqhMyR",
  "key9": "4UFo9T3e8z1H3XU2fuBPLS265w6HoWb4DNsrevJdAmNEJycLBji7hFs77KMb8KYmjrGBRpkGjoiJnM3mcvnbiCJo",
  "key10": "2hQZZqPFuQNHZPZuxaMsyCHGZxzXCJpkVAZG2MNy8kQQSfpTRATnNiu6n9apH9vo1343U5ARYJTnBQr7ht98Fedg",
  "key11": "KaWWZLByEuuZ9h2wfYKcRkYgbxipE6nFGJU8sYcSkhTddpbhn5HrQvop4wRn5ThYbH34UyUrRyCGcr8pgdf8QZd",
  "key12": "37fWrZuXxMunuosHuj66DYa5a2ccFkacCAedELspyRNT7chffQzrHL9URwQeUHaSANTXykMPgrfrrYqs4WECw92M",
  "key13": "5DMQnCT5f8e8Jgpy2rChugxkZtY6Zdaz2mxxa7APCdhyGdnz49EKbsVMAYryTuKsbbzUHpqgTiZKbobbfW79UuVm",
  "key14": "5DDDJpkNJJXW3DcGtCMkhQE7KkwgdXBhWMmvRRSyUpY5wH32AeooeGPwHFX3JaRZHfjAH5ieTc2GeZHTuyHnCm1A",
  "key15": "2zNRqqGwuhFgdQf1xdTuGfvbFUmhnMdTuxnVSRAodPpv755xLudRXsrFLSSymMWQnya1tvV1vwFRVoXP1J5hqH4N",
  "key16": "43K2TpRGDH2enhsSVEAhd7iPUb89gtvFjbjwbAFdRu8Q4jg4pz1w6yn6bEoMi539dA2jejREpqLZ7xXyfZN4X4KG",
  "key17": "5mKCPueZ4bWH3B77PY889GU6WkV9ALFKsgaYwUYhypUt6HPw4EuGAPoSNy9MgpL5bBdAhZjSQtNAVcrDoCj4DjH5",
  "key18": "46Ar2WPZM7zKjRF7L5x7a77TpS7dbCtSpsHCjBzhvkDJk7TEWdm5vP3jZNfy7MYgBgcTgFJwKc3hwmfNKWfkEMnC",
  "key19": "4q6E5qgXhwVVyZwc9t7SBKaHJcKRw4dBXQg86jCVWhDQUa7VNmhhii7YE1ETJNt4Pk4pQxDy9PZjX1LFokoHp9ki",
  "key20": "2eoreWXjr5v3MC2TBas6cy4nETQZm2SkdMPVJZVS6eGZ7D9n8mMTUABwFzAJ24ioU7zrydFwctSTQmCVwxBvENxX",
  "key21": "3xQMekY1x1DvwPAFPULseyuYwQ7FJoDALaqZ7JFXUZMVxAkYRzMTRhp4f5FEqTZg668aRCDxLwT9QkeW3qNf192C",
  "key22": "4ut9GaFoHbAxe4mGmkJYU35718pCNZmvJnaDedZ8nMRXTVi73DgcfpjpTd1emYpnaPFVGdJpaJkBtjugpRQxL1uy",
  "key23": "3cTJpxXrz2YGsKv3ijHoFrrGvGcXDbPfe8baahXLEHTexv1reX9yGEZaVRTA6EFwkTDmAbWzjvK3zgBi15PvPoUC",
  "key24": "2XRAXghxpfZ23UYFg6bjaRWDGaMX9uQzEL1SLxErYnsaU78xsmMmfsDx1AY7Qc8h3AHYQ1bfKAWvCDtCA7dNSKqD",
  "key25": "2pWTB8DfYjTskiGQ7LG2SNrLrd9PyYeXhC8qdDsXJNxwYGFDn5zwZf1PD9VPMcbPkX95bNFWnqPdBkjSHitBPDqy",
  "key26": "4M71nuErUcREJp3fMxStdLPPj7BYLpXMnQSorPoiQWmPHD1TZatd5evBHnFz5cfjcsFhSexHMNo4HwAri2j3L6Qb",
  "key27": "3zzvho3DNoUuHwXZMCJMvu9zv72YsZiYwzLLadnrtZhUw3L7wBgu7XwJtVeMrVoKJdWJYAdAfqARXEt3AjQ9JrK",
  "key28": "6edNkh9r84bF993iWGRue1PTeF8zim5GjptkbMxnmhFd5AnsPZF3KtvPXFXziQCsezyVp3Bvnevm3WW82bcRoTL",
  "key29": "4gkv5FWpXEVeWDLSBRus6tsBnGU2fT7WtPnpgNBo43CDAstafRiNvCWSE79fyQgt2Tp6LW4P9K8UNG1KYQxehjvt",
  "key30": "3HGZdDK3bvYGHaQFANucYM4mddmDTB6QFU98wuVPVXWys6qs7Nzb1u1JHW3iRRmpdjwrpUyYz5YDu49YRhypoJNG"
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
