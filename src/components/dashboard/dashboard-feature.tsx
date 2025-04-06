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
    "3cfiGh6mB7E9c218RR9m5ig4u3P6ETZcWyYBTjT8VmV6Q7VzfGXxtwetW1UEB3VUmmL5qnZfrCkWGqMXWBWL9dtW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZH42XM647wpp15PpY4RSPLHv7dzWK4pyb3Tu9Mus2S2hojJn6B2s2aPBmmN967cLuw6G9A7GyhjvYNNDjkSg6q4",
  "key1": "2keZSC538SAzmW445SjyPR8dkCznNYkreCHM4H3Gmx4DeUe1fVNqRJtD7enBCKA1BDHP7VKTXNiKbZaGeqhvaniF",
  "key2": "YaW6MDgGWBzU4i4ayFAdh9RK7t48oFa3pSN2JPEzXtmygrNcufQek7ZJhSCXh3PZgbTxNHMe8SWzoNcSH3hv5ZN",
  "key3": "4CiTRg3JbmLWg2nQ1s9xXApN4BY5XjUoFFF3fouyXyiXUqcEynhMDuWYLXvUCNobEonEJBWt82R3YLsxrQBNhBxh",
  "key4": "4vWgRB37j1Z4PbuxgZF9Zm75SQpksPMsiQGW3qfq7kE7CCNSNERpih3DpT4H3vG6ny4RgaqQweXzssKvxgiPj7TY",
  "key5": "4CkxE4proipPsUJtBtjUcBYSAWWkc6Q8GQKTKcLn3g2CngxbjzpzZLDEiHXTdU39ECxmVqCDD4rYWBWN9UjFjvri",
  "key6": "4QCcV6ezJrp3z2CSJpohuWXEh1gRrVtCvVg8ntr6q1Pa6JFrXZ6tSrom1VYMUmwqnSzFHyS5GMHnHpSaB6bbwiN1",
  "key7": "5LDRGMCH1zZx4KiSELVbVJdmGjhP4ih8J7msUURMJCtEwvJ9nTMSvTVhiZRNkBZTFj1Lgr1BEteC9TigLCyUdRiu",
  "key8": "5eiGQmkh66dADNifM2LDY2i8DbwTSpb1GfKgz2oiEStqAB2Ukcv3ZVQvyAC3bwvucxg3MvsTK8Fu44E3NKeD8cRG",
  "key9": "48FyoMVLjQpYMLEVjrumh79ZvpPsuASRjw3snGios25Y9LikPzMXgZXjU6zGZNhRWyY3FqKQbmQ91LQYqfx6HCP3",
  "key10": "3cWRG7uxugFfSWCnGszfxqfVdKBByHXpGbwJq6uL2VC16sh99DnEvaSLE1ptcJoAPh9RoDjWWoe5b5jvAfzaVGcJ",
  "key11": "2qGZNViYD6m8J5a1aDCQHWnFDx9dZy2VKS1ow8dRVbVZaP38Scq885hfSSRrVZtAUq7eSJnR2FmBdsHRRRsdUXuM",
  "key12": "4XZSmYB7ynQw4AqUAbGABehtKWEQ4RijNLkz4ECYeWTTj6WRiXwxxfPwnybmBcbqTRoHet79AKiYYtZh2PWUWJXf",
  "key13": "2kYzwPJLVRkkxrcJzqzUBmmCfQMbQDK2Ko2cQikhGxUmhLr2b5CgkfBan5PNo5VR2DiLpZNywmyaaPm9G2QxUzuc",
  "key14": "534UQyEZ4ygkfNBK2pzAB4NGdhjY3wWQfXqV8JbfNdxztZgrgEcURRoreFkweWpTRLRZDG2c5z3iGBGyxLsDq3NJ",
  "key15": "KMkd2q38H67nN7JVUVHTto4WLQfQK4EXoQU6P4UzPW6GXpwgM3boNhTB6ioGr7CMYTimgLbkmi3REHpkiByWvHi",
  "key16": "3jGmWEtxNdFWKGzsDePz7889spqWPNTBcXQqhswHWoudA4agUFBoqKbtksuescPjNBGrBTRR88UmDoeUVHpTCxjF",
  "key17": "2t8HvYE1SKGP1mvr7CpFy2NZvdVPi1J1yPDfek8zsvnZV6CVXYYsCoGjoWAd195mQRja8z5kaHw8SRM79DwZk4F6",
  "key18": "4qwmeSiPtEpfvvR3Wi2CqNJh3fFdAMT7m9UjkHticJ2FDCUCNeXFu63McRBsSNScqRXCXtVCBgqRXgefU85znkvt",
  "key19": "4h3LCUnZewcUHjmx4nPMpqVV5WHFUQHgYPb8VdqfN7HAAXoNWCuCqhsphZrZFFTcXHNBAFgh6MLTXgm4rWzy8c5X",
  "key20": "4n4foua7PCMpjh6mZmAumPbYCxFjhhXcKeEg2W4YUz4ADET6E1D7VEZDzn7fueQyP9ZD2vXu62LZMeCP3ewwC27e",
  "key21": "2zFnTjDMyhMxGFL4La25NpJ3Jm9mPsoueVgHeuBVE8wA3hYF2B1nsPR3W35mBSeS3kZriY43SERGJ3UbgskBAvyc",
  "key22": "4uTQq97yfY75Btxj1mf8Fak4K6pMkPzBZb82uLsK4nwS7x7tSvTUyJxpEx7jxwBenqZaG1SeykfWPyxgFt1HNjtz",
  "key23": "2NWgJULqHGE51yR1BGBdRUBsMgWF8zrct5dNVZPexxiqKfFUYjXSVF6QN5Xu73R64pAjrKj3qchVQda2DwL4PmUS",
  "key24": "3kBpCUasyhiQp48nL3qnWVd7iahFjGjEFC4awnpDd2SYkrNx1v4Lv7RJo7QQmreUWvH1qAxsGyqFF7TQtrYVpWge",
  "key25": "4GiJy7Juum8UrY88Dkc2QQAEr5SMt1bid5a1CTZQF3H3cCa5oxqP5gHxKeH2cwhhLh7P8aAaZu4svGLwVJkCVaDE",
  "key26": "5jtHbT1FGphAoxBtZQZBcQwq9AhFLW18GTkvXV1AL5EpqrGHfjW14guXMXNAjY27zPGTk945pbCWEUmDK1MmWhCM",
  "key27": "5j6VrGqJcWbvia2aw2hSizHDJtohVDXRXowXguHFRe8kxRpQx9Hz9h3KPh1Jv8CLWC94UfNy7grQnyuCoySyfchK"
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
