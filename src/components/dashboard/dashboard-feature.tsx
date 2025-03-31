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
    "5CR1NTWG6GFYvsv7yVjfVx1nRCYWcbPmk3a7VhXUvEVNopt4NcuHDapxPWU5Ght1Raf81gUJH9pS1UeZdvo5JrxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "roxhwNQk9ukAtQFkp6ehzzEThSuygyQcNKvjwopny7L6TKud8WZrPkW1XTUF1PhfxZUJtmHxEQtELkSgL4wdVzx",
  "key1": "3CKNow38EupYX3RLvHmTWw3aQRQDc4vzjULvCohPBGi2DXtP2vVkoTgGdBUv6bsMM2Q9SRknprRhiJeGbNadcpVa",
  "key2": "3ScpdHH1nsBMEUKk4e9NaG1mGkYULM8UX73hz99jWiqL6QCAxeEc3dJW7yiR4GtYCjsoELd4tfC3sE8LFAkwBgTV",
  "key3": "5hZbDxJ2PaZit128eh2kDHmcTJrAjJMn4MNSsMS9crq5b18CkzZCFJNxzt9U7NRyqBXUUXWPqyP7xdqTgceUKBte",
  "key4": "4e1sDCmFHj4VFWZqzfaHxNvYJ2aA3UmgNNwUnyMPUFGFVfDrCqNnibSaa62RwZcZhokXWHcXpawpjSrHGWGwGafD",
  "key5": "5nqXy7xvXqY1S1SVuu9TyQmKeqnS96STEM2RM59CVwECJSmM6ujLPsrwuLwFwqgP6yKdwsUXkP1ZNEeG5jQdLXZK",
  "key6": "5bTA5T9L57CxqNSRu7CP4SJaasYLq7TPBu565MbL9zkAtevJe2jaf5efZjnc7qRaNHJSQy5URa72nusQsVE8gLT2",
  "key7": "2zMxBf5nexa7SbUDKjfV1kcQT2CXfEZshr4zkwymix2f9CW1cgHTwdtVXGaVsMk4wJ2Ws9zjc7K85SWKvLPk2c9t",
  "key8": "3SSfkUvqVEvutL2dZHoGBtXRVTpP9Nsz477yJnr1XGeVAAxUEi8HxDcKAVn53gBM1hYETpACU8mK9nj3oR4iQjT2",
  "key9": "TrhTtgWHEDcxzhZyUuvXBSwBmX8u6rsia5WYMRCDYZuF9972E2aktTDkGkrJd8WPSrxTWRUHiE99H4dJzQ2m6Kd",
  "key10": "43Ce68HcJDUPXEB2L6TDMFvTyFUGHLVqBxbTEf6g9fXmMqnaiC4rYbEZvwhKq64d9V5nTwXKUqbojCSjGZcaWbCm",
  "key11": "35CoENg1TNcsY5U3wyQx5B78PsaJXagYwMbEhR5QfpwkRaB1Nad9ow4dJXCzgMCsX7efX12LD4Tz9fovhFrHcKbg",
  "key12": "5fB9SRMqyphHPHU6NxiGqtu6EYT78QbvHYvzQftWVpypAjq9EuWqX8fFERbWhnq3CVnoAaXC5CSCqsDUahY14f7s",
  "key13": "4QpnviRpmoA6Cbvo4NcfMC8bo5KuLX5ojFx6STRRkvtAKgGhxHLJc4yXb9iHC6hSXLhhMrsCmNGm3nkSSebU78yk",
  "key14": "RZDuQhRvmttkx7rcyVYshkf1mz26UEUr9eq4VfpEMs5ujYHGZKeLmo7ts4cUjccurAw1XcJtuKAx2dZiB7XSCuQ",
  "key15": "5ruaF3vsVXD1ycDBrg3cVQTbrnr1DoLcVLtBUeRPTgpqZcFScfsYvAKmRGBtrbTasGoRX2ng3jQuTaQBRwUV9eTc",
  "key16": "2cdHgnv4z1nEUJbX5TMwdsW6694MczvS7R72L4gGQGGYK3SWs8fMiRLSuWrVX736HmCmGP2uTKDFJHbSXhPhFp99",
  "key17": "2k8LiAS4KywvnMxjngHR6dvVrpx6X8EPXB3bpjCfm1eLS3nfSuaTC6F52LgjvbPCyhYUJg59NsStf1xcWSzs8KDf",
  "key18": "3RGfWi1k9srejhzM4nCPf3xfpLJcduwVQbanuyCgy9eVJfaXjYNUKqThKuW3mix4XrZLfU9qz3R7GB3nUV6ShGxb",
  "key19": "5RJmf5HfGQa6ghFpwZvGkZwfdaPhBaUcHSdR73uDZWP9tAWLsvrfzfThsdkxGKv4j7oY95hYo44JTeWrTqz29PKB",
  "key20": "5pPtY1sswQirRNQxrt9uQ6Z5kQLVAgXfPVUjhexcZBEsFD5qCkZzbyi9z2RR9mpENeSRJyACmzmZSzSTgfx7XVYt",
  "key21": "3AozSTuHaeoTqouF5FoNRC7BXrrEoSFXPWN61e5Lp9wwgWvnPFumUCdXeeah9cEKqKGGwBem8gaZsdcf2doerjj7",
  "key22": "5SdcA4iWzQZwVw57PafUgC3UooHVgsh9xmKSXys2XLqV874mPxRgX3dvacqvxXns6X8CnwpedLUB9DHyyQGNCXPK",
  "key23": "2iW5wgWFxdpwCRNSp7uB9kiQkUiJaDv3S7SdWLwdFrc7Ye6zUTs2HEbJtg4eUaReKULehidinRjDJQgPdc5d5i48",
  "key24": "5eAo6zB7R1ByLVnLwxL2gBdxbFd7ufeY193j1d5DfKNoiGeKHGT48yUnxmoQpAHNqVjkeLHuKkuYBGxTbSH25wJh",
  "key25": "32pvg4r2dE75P6aA8cey7U2qb9VTJeVdiL8xPYbt5np5V3wXRNswSDQA3ZboS9u7FJXWUC4EtDJrpEpJxLVwPLhZ",
  "key26": "JP8cYadHePeCiDkQ1yAWpGrgoegs9c52UnQ2bDwoNFidSRFUh3ZjhkHx3jdwefMwykwkvhuVxtrM6VTgScxbeVe",
  "key27": "53C9UKPF6RzvbPCGVJ8U8fsjXi9biUcx2M6SzEkAdg9rCtdBCRBSfwAeusei8jAAAC5Dxbxk67tfz84WquDvsLkp",
  "key28": "2m92ZdKRvzJZUtXQ2g2RnEj5hEMbnuDVx4NdDFceUJUPNm2KTCUzNL6DEHsRVSFcrtoAh1mkwXQM57218v2PJgvn",
  "key29": "4nUQpNAWcr1r59zDmXu4ovEyaUmL67BKm38u5EM7cEMniPjxQRPJ1rMfDiJKs7iqXeoE2raqKESR2NNJQ9WZW7LD",
  "key30": "4ZLhXmnGnn7tjT4KqiaUkQKBj9HsmxHKSi6LnyHYNwg1xPEawCpWr5h1vm8HeRaP77FpX3JFPhr6soXH7tVYz1kS",
  "key31": "sDe3zG2mJFzMsMCqzdyJzxpKVvyNpdkQZixwN7iCR3uKvoT2qLiKmvGV8cyTi1uyUmriA1UKoWbAmjDxVmwL1dH",
  "key32": "2zroGqcM3q31XdA4kAA2KF7sr4Ge43MYUxqJaEj5PpUpitpPFFaofMSp9Hbt69mDjh77zq6K5Bc1twH2feNKK6ca",
  "key33": "2rxZYbuLWvYdXvZ8UWpg16kVpLSumorgvvCDssXAYmCmhA8WrMysf8ChtMPKuZbBz2T7P579Bxy42RDSLLQPAVvH",
  "key34": "4497aqtBGfu32fvntMFUkFir9MhMhvV6NcVsVtx5y8DT7tbk64Yh2zMWmJwnFxwTfVAtWQzNff48nY5w3s2p4AJb",
  "key35": "2wddc8MguNZBrxw1aQUkSkVeo5hQ5uXH2RtBYn2hRCpUvtqTKp52u6HEWYdknHtH81Mq25NJo1o8fkfvtyEh7u2E",
  "key36": "596UAgREc9JAFMotX9VEHon4KwMvuEDGBLnzj27Ltn9dg9yjKhMzdWWaWwY149GpjJgRKFkc7eNY6HZDd8VHgC6s",
  "key37": "2gCXDcuD22bs334zC6PWhPgJ9HA68wGvK9D4vkZEe4FUZ52Mdrz2ZJGHcy3N6eL7NZtaH2XLdtV3wtPZAbBsS44C",
  "key38": "TRRNh23XULYtviPg7EjrYAeGv9hXn6ntPFz4oXM4NucRSgHxp44XUYiLwTmTWWHPHAu9un9uYP1Qn7x1Ytqu9Rf",
  "key39": "5CMRQxW4sStBzB5sayWgpLqTidbMekFvx5XEJWeg8qHQHgWTSRBWYRdg21XXhLDeHHXycGLntWiaDd2SQ2VBXZgz",
  "key40": "5B5uW6z6z3G9LDT7Z2Py4WYw2s8MaKcxCJVerZLL91Z3sxUq2MrW6h7HrZRHYDTxmSCddTRS7RdwRBMBmZfEYZT5",
  "key41": "5547iE2if7bANBDSbGbnj7ejQcqCxqjrDSDECV3yKUy38h6CrYHNamfXJfPRin9wZb8Ec3NFWHsmL3NDMxjbWLsB",
  "key42": "2xufgK3f5C3Voz4zu5cfzxnxTdNYLE85s9ByEquo6B72NcmRwM3jRnGTaQ1LsUyQfKtkpr9FN7VHcGriyqpBp6be"
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
