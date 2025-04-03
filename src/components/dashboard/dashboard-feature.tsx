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
    "GtogCmjYzozs2sWaQHrSSenR6pFN8gEN6pPjKZs4WtDe3oAnThE9S8D7pKP1AVnQsUtCi3pf16kUcFBZDDCfpsN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eWhPu1fhiXXQfVn5RQtmX7P9KJMvmeWNyff9mNods14gnHZekSzDbKn5menRfgTDvdhkPdfcUGCLAna3HfUx97i",
  "key1": "5RYB7HrrgwjrKyMvSsNCzrzfaad2assF5Na7E2KRxwr2oTEnxid9ErsUrqGPj1tbhALxuvNoeCe3HK2z48nZkLSW",
  "key2": "3FwaveUBAeUyB8aNocPRhFeoetgXfNMRxXj92SRShCoVGjdNYeLxo7LPCWNxJ1joMr4bcibGEemXU15UGTC4eQmC",
  "key3": "27j5J6Ep1FsNptApSAyUBD319oDWX9kMGmMqfFKHz9z86xo6Nuz4oyc2QmfczrH12QA9xEWomzooespWNLXKqbd9",
  "key4": "47r4XsSsdqy11QGMGkzwv4LDrbiHK57sqtDv2EaiRGQF1vcsn1JBNVAhfnzNzTjb3p1xhtqfzkGC11VJ8fy1HCkj",
  "key5": "2GV3h3zyeGgMR6KCXUv1oBgdnWURbvGc9F5yj5UHA6cBSWxcKCb7b9hMJwBsopLioDoT4jmZYe24eHZmQtrcsMfT",
  "key6": "2VTHcJQp9X5NWFTjfJdy8zHqQ72ZKLx2wffxRgEitQ1Lq3enKiZTT1439WsrNhH7NRaH2FsEi6VwQzuncmQT1CCR",
  "key7": "3F2VFVAhXtbLcdhXzn8zBqHrxpvzTxZ1JomfdnY47aS6P8wbS46ZdeTEVuHZ6RAnShfA2eEzmEBj2jXGhaPDK3cY",
  "key8": "5sPcr8sVkWdNQDQ6hrK4BwCChBThUWB1vXFaGgHbrYVoxCKEvg6nC9PiwqbfwbzThMrs34kSiCZv2Z5yj5MJTFUe",
  "key9": "3cHNhMNfVZ7ZSjyZU4c8ewEWZVTnp4g28pJY48VMusfqfjnvsN9wUCcavQnafFfupMTsV3FyPSHJFCcm9BajRznK",
  "key10": "XK3tb9x7Qdxds9ANtjRQxb3b95MM86mcNy4zjyZf42vZwjxvNgtiQYvjMHM2BeV2HGN74d3ZxTDiLuP2mmcREDY",
  "key11": "5SCXkM5oWJeU5ypGaRMDsPRoJQp3vAeYNDgZbeKMKKZ7qPRyqq5PaLQJA4VPW4iP2zqNm7pKwkvVH6FgLY9kCARX",
  "key12": "2Mi3g3fPUdgW9kra49kNvgyPCoTLF8jVJW4ZYRdnN8Voa3TwiNUqpuL797NHUiZRcFpsJaqYjkEatKUGQgBzuAFy",
  "key13": "2NNXWjWwqdVQvsqvgwUkfMSzvy8ibcwgMwHuTYH7uW4DqCNUc7GbpDiu7am8CVPSG7DZJBKgYtmP2RSCYHFEMxxC",
  "key14": "3MVUa6k94CbCmrvwNUiUkqjAHSvVbpoB6mCAfQJtbtgzxHJHuoRKLsiTzwtfGBKr9H8SUBcNDnYZBKF8eSYFodSL",
  "key15": "2EX9pYxyJpGbyodN2t7iPcF1Hpy28AKqgi2S9gQnbZ3etLmNW6M5tDAXZRHsbNJQkUfDU5qr6TwCFkjzCH1UqRMF",
  "key16": "5L2ofbGFcatBEgeGSyqtKDvbbuHLzNozyLpXDFAmw1LtcLovdAYX61mLH8tm1ADFpA9yD9jwsVukuzp88K88oMgp",
  "key17": "5gGieycMCJc9Bfq31A3kfbMCr8aHPdsUq7SR4zCvJaBtagL2ZnBkRubqsr44eqnsTLdnqcGCVokfzUPMg5A2VRzG",
  "key18": "5LxjnDLWctDarnqz6qret2m2d4mXMMD6ekK79H8kFFaDrCckxQxdjx88T1wvLKmNxx4q5iarhNxGD38rwxG1d2dr",
  "key19": "5yJmp4vYmoBq1FLmNmAqLPjAnLfDzw2AcPYufc7tvQCug8GmijPP1r6A13g2eTXTg9FDJFH4HK4PbQkQ9TveSmVm",
  "key20": "3WCmtJR81NGjhBW7P6WtQ6gCY1VrgJbUXNX53fSEsd2REc44eos4eNoeTyKriKiKFzSyynJzb1AmUdBgNrjpESKL",
  "key21": "4ZcFEYnxPK1gQGZ8BXwHkxLPtW6UyYag6nMqb6GMjKqqFxUEdiSbkh8maENs16937Xtmk8MKy17VdvifkKHHUGDF",
  "key22": "3p65HjqFt8RietCqd5ywpK3ViPu1gMZSDasnqNMuKF7pPY2bmPoCLRKmFktJuvFjv8ajhhWzeMX2Ndv2ehbCJd6v",
  "key23": "r1k6jq1rxBbgCNW93SDj1ZvfXpFNGwDEaMKnfbm8SPAAec5sdNXFavmYHAgCR6YG9r11n6ZbZbXpVfDSKz2MUeV",
  "key24": "8NqqstaK7mHzbCSfSyVUkPTTkcCCkatuqSUY8wnppqktn5iQWXQhiN7EiB4UkJ5adRnjFQ2ihiKQxYLHgADh6pu",
  "key25": "18Gupue82fM9Y3fpsByYFaS66EdkzYjwmQYsTQ7RwYTT64k1g31pYWfEUKscP8SyWExR82X1mPpBcXyD9WsmnY1"
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
