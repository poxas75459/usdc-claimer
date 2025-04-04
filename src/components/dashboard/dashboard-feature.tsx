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
    "Rkyf4wLoYyy1VtyAvZj6EX1NwDbCeUPfhGS9AGHTrohzuUaHN8jNzQLsppbXpcEmaniYqqpnWoXncvGK9wPpnTR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CRi967wAW8XVqNKZe1ZLz9TZhVKdoH1ZMD76GVmADqQoivL2GYEBu3Zv3kv5JkDBkXcTGEjsT2mRCn2Pz9z9nz3",
  "key1": "9KszR2a6g2kKbTXLYAwZonLxXSrgXiTytA2sPSP9eEaSVA6JLZQaxuFD5arSCgLNbg2T9kK8nomBfs8ZQ598axc",
  "key2": "ahu8H7tt6U2Dc5oAwNwA8owMkCgxRChaAaJejBBWzzWvCkg3fVUryGyNtPFKFn3bV5AJb58t5TjkmXE8QcaWM2f",
  "key3": "44ymbgE7jwNAqCvKEykEYPBHrQ7nB9jsjfMvxH7N68PApFbq9nL3zXETTqfQBuiuSushDDKjGXHr5kyatE7rQSVy",
  "key4": "xdo4MPSEeTSsuPjBJ8qPqFTsV6riBgREvgpE7ujneXVmromp5ob8ZsgaSjarMwqU5VfA4wEoGfD3eZeu788EGDD",
  "key5": "5YLRT8Z9NKG5zTB3fhUpP4msF9HTDmmcjv4XF2e9XTeRf3vXHkcgm4wGd88xCyx9Juz3HHxRaTmPcfpfnCwHRSEm",
  "key6": "5wg3y35wwvHgTZtF5e38rbPQU9kMaUpKWdB2LvR6Lkz2pnz52UxZqJx5bwUECVHMtR8i5buD3jdCwH5EiQWZvyie",
  "key7": "tr3fs6KknkjdutgA2HvD3rBfyBrmgcv13kf3CWyeb6seg3oBbnwpgFkqAkUjELfCFqyAQWXNAfJJ7YLXSyo7VYV",
  "key8": "565s7nXVpY8dn84C4p9jwD8YrehjEF4Ap19V934DBebp3BNj8pWmKCW4JihB3c8tE4sV9sTQa1Sf8my5UzcUVMZr",
  "key9": "3MbdRZDrMPSEyA9AWX2XE6Kzw4xgkZbQvJiVxPHEs5F3xUVmeAWgHQjBpdv8JzgzNj4KhVJ8MFxx23JgJ5G6gLVD",
  "key10": "3UzLFfDBFPSN5AFTHky2hRcrjH1YLjq6SUTQLJZEttcRMPWrxm5gGWgskxCxn4orJwfJFrwf2PisGfJ7Yv65bEBM",
  "key11": "1PVwzd2ucxyzuU9F6Xt3tQvo9ckFHRv9H2o8MubD5zLrTcfKYZsso8KbNTYwrrmwkqk31G5H7ky25x8zmBZ2nrB",
  "key12": "Nsx8VufGtdBpYbuSnWkWKB43xbey2GNL3Mp59DFyRpjkEwVyATvHGwB1FmLNGMK83wLFfVJ35vZA9dPcuQ3sKq4",
  "key13": "5wWbuvkrmQtwBs8qtHMKKXeRWnGx5VDivXDhMP7NdejgQhJ5YWdjk8ZyxZXft5VVxnhc1DFaamitqbK7nZFbEwZL",
  "key14": "4MemLF8G1NiyVBqwCe7SmDpqnxfaVPY4Zh9MQSKxesdt9af67oP86p8X7M19ALAApHMonw8rHDDVaTCqEV8SeWeN",
  "key15": "JaphN1tzYyghFkCe25MAkLWw9mj48qgoDhjMyAYB8y3cjGeU4UW7kfwD1b8DcZCUnuXvxfrSrqn379N8CfMXThb",
  "key16": "qNS1JWmdXxR7ZhmVNEGxUhmmXKsvdzYrmsADRpYvkJuW5JQSXucCNFFMgPrSejnRadsTRAi4iCXeKJo96wv8DPz",
  "key17": "44QUskvduCMqUiJPtdypG1g4BMNja2HW1mt7c7BDVdnHU1bUkzSzjtxUFsFy2nby7Jk8xEL5JbeW6eZvVXZYAUcV",
  "key18": "5bX95hdvyNCfi6wnyz4Pu21EEpBBJY5NP3yLpgmm6zKwHL8eV9SMUUtsBwtHhDDMLKgaR99KZdfT2dPJHQ8XF7hX",
  "key19": "3KwagUjq5zfp373jkJhDv6pFhMHJcQm7cDTLS78a54QFEE6rcgpr6eaWSLRdLDMhHs4cmSFzTwvwhnRvNsFKwuGy",
  "key20": "hE9eCUbttJ9Unz2q6DYSoGc77PwF4DbC6iDK54HcSwNLqj8HXdEaPEfXfQM8pPfBD43XxSAjZXdKb1sMrPjLBoU",
  "key21": "4CJrAA3b4zzn94Prto8RxumTkwPemSrsntC4jPVqMuKTSBtyxeFjN6y6dySnyRWhVh7gSKiuK7YuGCA425zKKe3i",
  "key22": "4iJ2dBDmGyPak25RLRtw6Vq8uJ6AnrMnbNk3Bpfcq8NiNRTE6KEdBA8vQv8dnibRA3DxZ2LRESXFhVxfgw38xLns",
  "key23": "3XLkcRXciPzRMzCng1vVPFa8wj13bZVUMnv4XuJxoKFRWh7CZTUcqopcgCZrncvDyG1Q7gomSxQXzQanNb1HakUm",
  "key24": "3cCtXtdXjKbnDVpKA2BZymPTrqmsJXXSZVtKKRF42wq6CtaCotC8QQjcwnDQJQ2brRqara75igycUBacB7AFNuMA",
  "key25": "2KAPmjXRuwmrYkGjZqF4s2YGBcd98QmbNgDeeCiWDt8ViXGYUzP8fDtQaNAr6AVgYBtHpTyT6aGz6i8qX7rBLuRf",
  "key26": "5Cr9dXydUyqkP8HWKpotfPCgBFbSFmKFLyqYzw6sKpuRLXS6SVD8AEvo8wjMpkm1wtWm3bw99PYgUstKqbx8V6bv",
  "key27": "5UR4dXsnHuqzTS3TeMMC7gsDeaknVcRtd1oHTGefMHXiJh7xE2MGgh8g29EPRnQUPXt2UbeUv4ZXGUQ5MirXVSWu",
  "key28": "5ejSWFDLv798eWQ5Yu2Pmhp9kME6pAGhqzxKUWRvZLjuwKZUjhSt26gzRPQGi6RccSp3DHP5hpnyj2ZiJvQDM4Av",
  "key29": "4HYUwALAosB9LZAp8qmmLRStMKqjRDrokscrgR44wEXukCzu9VTCGYEGZ5okEccFd1MLdpGjVoejrPwiCQHGV6ZR",
  "key30": "5rzTc7NrGdRS2yRJrqsV2nZZdc3aXA9AiLAdrmrcFTA7hiE98Puj9N1J5B1ynhRUwPnEeZ3fza9Fo5pbDPpKECMZ",
  "key31": "2tWTze7pFcTj4b86vrbjiLGN5Uk5ugYpNaQqffRT6L6GQTFJ229VnmZJa3Y48vYGDuykzFU24r7gE3ryfJB5opBF",
  "key32": "5LnuwWhFuQueqXtkWS3st1ofazh1iCnTKRB1pKhi3XkrNHvztDdXy3XyojTZqZk2LRkgZbZfbTKCKgfZxv6TicPj",
  "key33": "1weCVcu8uVVgfJ3DneLmXnYq7UaeBS1ZtaRk91u9RkvdsU1wEc5KyXdHQWXEgX2ABhdpUq7zNTM3LktQ28eKcmm",
  "key34": "DjmXUYzF6yAgUKvJXyb8iW6PSyTJ7EaFfzG88AB4jdxtWBiZV2ns7iL4vKH1cwLyoSSyVJjz2gGq9XEcV6ymbcs",
  "key35": "27YqJURBEvwaVnksXLKjku19j2oebCqAJtbdpwrwiMmDUyVH1Bj3npEqNsw88LrDtaP63ghEgrkymKBwJqzYNeyD",
  "key36": "5NHeWVQwYaWLvsVumZQSaWm1YnjrC2RXTuooAnvXvnDoGB3PyvDC5BjzMGTQfnU67SLLM1tFjfzztDiDahMx63J",
  "key37": "5RbdnjxMyBkfudfDZJB3ch5dNiG4EjDeaSko2WmGgTNWBVwYZrRXkbH2ZsoxNFSwu7RfjxUBEAm1FBGQTG3YGuWZ",
  "key38": "2jjPzTkXuMDWatg4EMjgT8MyeSP6uMq4yp199pKhQ5tbJtzpfzYLPWXjsmQZmh1b8AqVQg4Cq4bmpy2UfnPRXquv",
  "key39": "4RD3SrfZ6C4umMGggnjBTEwY7tLDjJeTzVjQoeVUVPfAtFHZzt2qaE7QhLF7VcUTGeCYPmNH8gu4ug6FQqfyEoH3",
  "key40": "4fYZDKpXEtpLGpYEsh7uGaeEuSL16ZiArGaXuFk2UC2yTEDENRbEqWo9dRAtf3sXcmm7opVfLFpr3uUSTraqeSy",
  "key41": "3VhW525qe5UWHZrLD1CSWdCsTNrJKFdGyh3DDSdcaZmoRvH8ChchaxMrsrfjE3xdQM9JuTtPqi3fj2t9fFCRpHF4",
  "key42": "2NLC7QwkPRKKDdA4tjDeqAAXJPhjHHZTFKBRJZrJwLyZbr53i3MZHFFtmarvfLeSjBPDvEj2WyBJ91FGVw2NFLiL",
  "key43": "2L3LaWeSNsSzv9bAhEWKaWMuXwES8PbPonQZ1m3oFSB6p63gymcWgxJq1cQGZGVjeuPyeyTf8YqL1hMX1FjyAsWV",
  "key44": "23ee4hA57yRsr5JaNtBZD3awP6PGMLMHXomjArQww7sRU1mMB6MJSZrtGLN2diiHi7BxVsWJStA3cr7vnzZx7CXe",
  "key45": "5GHNa4koTMTXYafk5d7ySkz1Y1LH7GbbAUF8ric81KNrQKauE917fu96U9gXeo9cWBYYmrCJs1DRhttLpU7RTqWG"
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
