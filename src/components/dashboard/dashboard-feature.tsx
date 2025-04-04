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
    "652Makn7te3owfRroyTkNZNxiLt3yvL8xfEyHambydzWieUSC99U7tntnDjd1i2FUxdCkGCzDyRXezrKjFKZf9Sn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Nfo3YEadZQxRcwBFU8L53doaqeCnCA3e2euYzcXELXJQcHg4su5abU6eSdrbZHc4JbstJpP1FLtgNwawaXWQkw",
  "key1": "3J8wpSRKXaMhz2rPZHp3vXdjrgBVfaY6C4sUytWKRdLZ165qe1yD6Hpt8swnCC5fsyhFnyxRvLtsUAjeWBR1jTRW",
  "key2": "57xfXcXhh7XokPYqzkcNGjhYobPUMUeYTQ6bc3xFiVNzvmQeRiL5vQbs3e7iRwMFa5peJrJF8qMuJYi3HYg1dvwe",
  "key3": "2hDrmX7vT5sPBEnrBJqzFSWptnTZySeuqu6qo2dRHZzsiYZA2Ww3zNZqeBAyNieVd3M9vSPeFJsYQXjNjJQfPTp9",
  "key4": "4QpQauHrDeZ8ufg5PhFTQpVv9ZGspom63xnzaqXr8r4yy4Mqn3XeBK5hBukBvb4iRiRB6xArWAegt8i22cWYSSVu",
  "key5": "xyHaq8d4XXo8CH5AGkYoStZJDydSFPAzrXxXbmgz6e5rq9zkGoxZ8BTU3VeMVeiEDBHy8GvNo2WwAT4zz7NsVV3",
  "key6": "2VB4hLEieDAaeUy6YFUsCDv9SccjhnVCxchYDfdH9PWLX5sFujM4wyHSZwNt8UExnp8dq1MdBQUyFKhNB1AeLQqt",
  "key7": "4fwmH5YuvfShG4aDTxhFyZKTHueNF2CgcVy5g8th7u7pAEVgpryC6fXcLFy4wGApxrUdWhxbghvvMff7zth5HJU6",
  "key8": "3maF4i8Cp6fGh5m57bWjoxzR8Q25GWCYirQ2ry5DsKt9dJZV3NkuVupE4FG7d7SngXK3nZDZU9hQvVyjy2JQSKeM",
  "key9": "2HbFEuEv99t7BHqCmP8SMs7onMPZLNWq9wkpyeruHxZ3AjHoy4LAgeyk3YQZvMk8M4GFCMtK6jiLHAvZHXumFDD4",
  "key10": "3xtrMT87j9T4zwSSiDYKGvPhqjDGL51oBLUEnACS2ZaPXSrgGhevUwvK6NUWiC2ktz3SYfoQqT4vxrBfDVvWNCzq",
  "key11": "3o1NMYGAGFEH4hZjAfhFAMKDLLcVUMSBjobHv8KunmCNsxKBvQ5KbRo8TGtUee9nieK29E4PK3Xa5GGPPv9eZMHa",
  "key12": "gGdsGs45DMw2E6EyZwpunVFYgKeX6pFfxGocVWRZqkM9uc2jDsX71S3tAE2GbtQBZa5euRRLK3tsx9bN7ufzzW7",
  "key13": "45mf4aDyceLM5yZz5tPno7irkd2my56D3ZLBGERxuGSjPgxDXCsB6u2d3JfVQdPXxFzi7iz7AbjgV6drbg9CcLRa",
  "key14": "4h4XPh4P2ra9k6YGcYEsCoWTSoRN9wyuB1fQtE8UkHaTT5q16gFTmirXnYL6YSRxJ32vf9XqE7s955snjaWa9swP",
  "key15": "3tCveFdDTQpZ8dgfdTs1uviHRyq6Yh4WeYGAC42ycL2NarRhgwxuLZtQqh3jgTAXUpwwBtbdnewxaqC5xFm1S8TM",
  "key16": "23euWwvfWSLxoBdFC3MGdprGbvbsZPsyxqoZEiEjsydreu3zhdPZdKBsLnhVjFMQhzzv7kcTeanJa8PWnzN3fdZV",
  "key17": "3zf6LPU18NCn3gk55T8NntEVhxd55ytGTbrTpjCoihcWEovN5zBbs5metfpryDD3brqeqKS1yWxdCVaDMj1eqaZE",
  "key18": "3RFMRYTwBdsp1WNbtWKEUep2Lx53Ckt1AhgLa3SmLe2VvXAJajKC5EP4QeJzcgUFyABHEP9cat76qSQxxqgGiHMZ",
  "key19": "2i7B7suHvCeyZwCXFxjubyNgPvBuRo7H8e76XcHQ2B7Zx4MbZncQX25irxcq1JxujX1o1iA5wGHDyU1eGPpWV3zE",
  "key20": "4yskV49sZ1QsYzxtdYP4eu6JmnTsyQAfB14tUvVFjzUzmF8GiFSyuryp5iikyUcqfHhurpcGH37R29Nqc7EF3RtB",
  "key21": "42pKmeBmiPF9GKPNtPvMUZBF63HMttrqu4ALvTwBfgq9zuPRZAkr3K6AqG5UhoLv7NWefYCW6j2dN4fLBjS6QoNT",
  "key22": "56oiwo6yGmJYA2pMTs47iav4vdJXVCeXREo2DaEi2W8jb3R6A9euHisenrfWkRXAyvSuQ51u4p3XLtv25TmL4YyH",
  "key23": "5mAtvTYHhUZ6svoKrAo9bCmSmpvxdpDdWfTSp9ZKkh62wFYWnQUE8qXSX1t6TcTcs3Ro6LJPRAM6T16iFG5bNxcx",
  "key24": "27isw3wgRW6WPTMpL8aP9FpiT217oo1yHJExDdSvVy2vvKeQtpvvAnzGTsHF2NNZu3faAJgfUGLSJBz9WPQxdrer",
  "key25": "2ivp2me9fyyS1nZAntKy8NNBAYe1FRTNUiPBvHmTicdQVVy2PNdvTGWE6kdmNuMBgQnpgWto8jYBMzKainhs7esM",
  "key26": "3pYe4j7Dy85MgemTgrkDz6TGJRiMNPPEe2YoPvEshPSAyBFkHZvzhZKep3LDgvbp7UMrjx7ftsfYeiZewC8tY8nF",
  "key27": "5pVm4TUogMPMPR6hY3xmhLLmZeZCADX4eBvuQSFaeQAwZKMUDpwJXNy2sVSe7WNoWzpVQcn9GXHrhrmoVSYeT5T3",
  "key28": "4obiaVi5WFxeKCjz6goiFcWdG14pmyWncoVE8Wuwx9kLomBsQ3GKQYtWVUAZEsdoW2sRMow8hUwZzNTTkFBybj6W",
  "key29": "4guR31DEw7gAjQxDc15yJpiCU2UyH5EqBSc7eWjJgZSLA9VsKdAg9Q79YMXHrMNbzrMDrg4A7uQvniLfK1X6rF3Q",
  "key30": "451eZ14yh7dQCe6HgtJG1qHKWkCL74pSNUxbnFA8syNAHTaS1atT2U23aW3sWXcQpnJY7zgR4PaTaRN3Epry7ZR3",
  "key31": "2AhcidTczFv85Hse4si8D7RAWhwUMvTQHcYRjpkNcxhfU26t6wizAUbUyJkG12FJ3ZMryWw7XaqGWG56L1DhzKf4",
  "key32": "3nBioMaPE6xszWm5SZamDmbXtfF2ry3Pd6sLtv6TD7fPvsCqDTiPyW1Cii92ce23dkTphPAHpAfSCYiuvwCUEBeV"
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
