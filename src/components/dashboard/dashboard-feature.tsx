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
    "3EgyUpaHskjyZEVCgaLyX4hqx4PbjS8Rjps8UPY7bsQyqJQJ5ae2DzPHppN4gV9SbajosvL6QcQ1Zp5CEt6haQtH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LyCxcC4VMsp3YAQzLqK2fq2UnDiqqTgEgcLinjqLH6RH5B5dtzej9DvdngXjaSKDqDvWqB8PNH2uiJ3vyjcHfpb",
  "key1": "7WXzBJ1GgrT899KJNj2msrirYuvA5nHYSCCCq5kFKjSvLbWR52tNTKawJXruvUHq9x7vXT9wewLFsXx735MzeYW",
  "key2": "4kcCqbsN9gnfRsccYZKpQSg6WtzAvcudRqnSykxhbVmNLAHJaxMBAwtsA1Y5U1zmd2B9VacMiHyvqp8RoDmqwzuQ",
  "key3": "2zSoteiXb8nsN7evdS7FAWbLrpgRLpFmtpYPug2SEAnMChkHekFMmFXtYeWYLJDpVuXE3mTGFM6Za8ZhhnkNLYUg",
  "key4": "2qHvhLuCjAqmLqjfdcDpaeZofE3k3h2pfdb4tKFmnCqNpQNUJE6DdBM9px1nEgLLeqLvDhuWyY1z9Chq3fR6F2gJ",
  "key5": "5ti9LUe7Bm7wcLi76SrR4Q33QAh8enGuz65gweH4eTEj1T563gE1YenrhYUtRH2tgCAdmkL7k2pmEx6XqYYS8hkt",
  "key6": "5WAPeaCWGKfw2hL1JfPVrj5EVMS5bzWfJVcNcTy95fGbjX3bM8Lw1zjyVhPLtdD7UL6xhQEnpsaTWAfqE6RsqJjr",
  "key7": "5jMRA2ikxLjuzNnG5vUBcHxTiNXiwPcRESVR241SYZvpQeoSee89PtJCAngAA4ypp925CaUKMTH63AG9j2AFmmLS",
  "key8": "3PTsbLiVsuEkQ8af1MqgkG3w2Ss5mnSFc9MzmsQJdVDALQHqXugkxGbYyMG8cDW7wKPPFP2nVnwcnufYH3iGN6zk",
  "key9": "4KhMkpCzRGo8pVD9HN7Qa2CzaqWU88SkybRT7dV2j4aBF81mpHGED2m857RvV54yNdmD27sR9nqmRWHnp2UPrXRv",
  "key10": "51ACDHJGwZ3oBWao5tKACTxZfXHSpcohNTEfB95hzC8LPsKsHKk1deGcXJvSsEw9SgFSuzT5GAvNyygRd3Y2GQxy",
  "key11": "4pnaaEptFAAWar3REua4NMse79TWo9Kuvuu3DPKvYBPq1M54XGd6mSUwPNFXaKz4Ec72jV6S5LEchNq2Cmq6abtg",
  "key12": "46eo4pNUQa7eMgLxq1gZan8MVhHxuXHoqaBSc3RrGavj8zVdkmKEb8AJA62Z9sw6CgoCayfutuPLiSJTtFGUtFTu",
  "key13": "2kAyqW4WjBZmvLcP7w77b1m2r5ayEayaCUgPBeMpihAxEf4W6rZxpG8csh2U1nozdN96gii5wx1VFTDKguVnnPXy",
  "key14": "5qPT3zTpr8oTQYPoJiBCiEnUm9niN9YZDGsqEjNEDmzFbhh2kQtnsFupLKdGRycNEWF76Db3vpz3szwmvtzSHnjV",
  "key15": "4nREjDfv1qbskwBH9KWjHk93hYXWKxUu7evmzZh5rAYjisy3KBMCvheecKVAAGiJMc9zPRhPDmUjSGrQyfU3CfkX",
  "key16": "5Lfh3nrvqyiMPto2r12dHoC3Q5gtZpV1HQpnNUikmnHannxsAVrNiXazyAZ1eUnaY1XbvBiyTQe5BMjaJSs5LMwz",
  "key17": "4RMTuBATuks9nmaTbhoobzHu8HPgn9CeNeNPSLMefsBSZUy2sN121Rj8TcsMtffEjuiCHywQYw9WLHWQLRupHRrD",
  "key18": "2j1Qmgt21hfmkTokZ1cTZDgtyjdBuUw4QtMQrd3rikHvgzc5jzCdFw2LkUPuStm7oFBETAVwubUw7ByEBksnaEmW",
  "key19": "2jjgXFKypkNMZPSLwGwTpxsQEo7Ry8oZujZyPTQQWStEHHUmBMeYZDVWjG99iwCc9GPg91U2NScJREuTnrHod4H9",
  "key20": "2ieodGWMj8zuaq4QHqD1qAG1u1mW2yxSitrVYppbe9kXXizUiVR4raeBBujQLYHriFUBo5SGMERj6pQoXy3tZWsw",
  "key21": "3bE1Na4rSTZij1ZuUGu1rCP2eFF7sDPNpvc9ui9TdXD9qmsD7FgSQs7SA19tEBg69DfcSpcfphiGvWvDLne4xTMJ",
  "key22": "3oMc5JxdCPLPnhV1i2WKqSPhDBQCyTaRoW1GMYhfNinzAppcCQwBhaz1fhnXpXy5nyUyqvhL449iQm4gVK33TStF",
  "key23": "3oPbVxVUf8u1NEz3oERPA2kZJ7Jsmxbf4bog1tirjioTU7Rw81YVed2gVwwJKUMkuj62AVJdXaKos3WEbxNuZ6Vh",
  "key24": "4QYYZV1UQ8aU4qcejNv1FexxuRr3rgPgwLE5ee2iGj3dWY2QQK98Ammo8TZF938C2u5jFiGs87aYSY874ZWJcWPo",
  "key25": "hZLSootGPjhMffNx7o3y68RrehD9N13HdL5cgeH1zCBSWLKsdUGDHJ1TbYDMJQ5r9DrnGcEJZZTJFmhB6UnDnj5",
  "key26": "3sdr9GHyuPqJtJTMxCzneNqak32w87YGxa3z5KKqXWBELx7rxwYZPKXp72otbjCswVEqJnocZ19yXQQRDkyBWZcW",
  "key27": "23qGedH9dW62Grnj3jWNGiPQRWPtp2yyw2CzxyJEiJtJoyzyfZ4H4kg7HNKe3A94ZnFCjEFEkyQc3sDXUYRe65qT",
  "key28": "2AF2DSA9kKjoViq7yE3e8yH5wPZtUvFogcB9WhzohiS2BFbd6P5d8Bwdkrsdq6tUqhe9698Sbktk2CRvwuBUEAFE",
  "key29": "3jUgTVHpKCoR5jyvUvhfr6MP4gMB4rD2qQW4A5nnTausPwWXK7qEb5JBVHLd7mUVxso1dRsPkZyjm6tUDPJ2Z4LL",
  "key30": "2dA8GVxz3aE93qATQrQiCdfbr255rsf5MJfgdYSQcLVvrCJR112TbJPCgruHeMgwHLg1qtjZBKsZondTSU6FyvLk",
  "key31": "5D7u1X7tSjhA4K2C6dQm2cN774AT9mqWhjRjVrksjcV9ZpgSr2BN6ePw2Rs27dzJsm3p2yLQgmBm8aAHeWhGGj19",
  "key32": "5pBrEV1Ut8zfABFwMZA7WzMSCWHki5yP9rsPb8Ng37qhpAbCZSQjuNfcubKS2MRnKybNmgJoWx3Ejb1drrc7CWMy",
  "key33": "2mTWEqLaafvdcmgRvApQ5uMugmtjvFGYvcqbZDHfETVEksfnfRCeq9CHZ4TrkzB6ERhfF3qNz6Nrbz4FbBaFMmPA",
  "key34": "56UVBRc8qRnMiwVqbwn8sjuAxUFSVz4CURAohi7ZcrJMgeN3sR5RpdSfv8L4nF2dAegqXwN6yHvMhqomDCG5Vc6a",
  "key35": "JthRVdM1S6LAFt6y3SfiwShkHH6wimuzYyMvihkMZ99BTuDmFqKDD9q5jmACSXqdjFbPA27VsyYqfgNK3QidKeh",
  "key36": "5ncq7ymRy1tytG93nGLWM5dC5sJY44Kqntug1HnUaaAiwinBTya89DKjM1eyhspexQaU4Bp7VKEdwo5fgZmzet3z",
  "key37": "3fBToMBNpAGLP6YyAgnhABTgPa6rfRtsJXaBSmevppT7nCMoQ1bPFUNTkipvqWiHBvrK2Zfv59HAxdiZCfB447di",
  "key38": "3PLPDXRJJ6y3sC4qwBpowuGKHR3LJPCQ3WUyqQVonzSPJvtWQRpUBtfnDHn2zkXjfHf29f1ao9fc9szy684AHi1r",
  "key39": "3aU5uWz8M5GqNxFZXn9dZLbVKxcQiuYRxkC2v2paoRYSDGkvd8jEpyaMnfm582Wute2EZcgF5mkYvU2ZTW7Ko794"
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
