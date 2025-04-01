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
    "2EVeuCocUd6k8t7N3JZor7gUkuQmLMYZTCFYmWBAgSp4AUDFSG6aAuHSjHkCXnkvMFm8Hdc9kdvjGDfUrJn1Nigx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RoUL3pBxLmf2ziHWSEf8hMyLBr5mz7fhL7KcPWzitLcm3eYFVm7VWSvBKpkpmiqKrjQWwr9eHbbVKfCkgR3Ta7T",
  "key1": "3Dgx69FKoJQwzcoNMUuWPu7F5Z1xfJdkTtEq4SHgqxqAVtZ5AxkR5bYQdMEiQ6v52mTcLbwgqRfeN9xgiGBEannD",
  "key2": "hivW6bCJWVZqYyrrxdbJoWvXKboggQbDQjvWBj7wvufynLW9D6sYNc73JEWAM1Bua1dyqSZg7TxSLPVDyqBBHqU",
  "key3": "5Edz56aVdwfmFE4utYA7FRWs3VGy7rJcYVAkkVy3RqmyPrtepEii6xgCNixWycfmyoUVoii3HkJBCDF2FMyfthos",
  "key4": "66NGipYK1YWz4M5wc2yXvFYoYvn7sz22ftErNuHhui69k3ikZ2erE4ZwqTFtuJYbacHsaQy5bxRaH1CmGADfZXN8",
  "key5": "5SMRvkbMhg2QBELKUNUCAJowPSQ2mZCKCAt1tWqo9YNVGzoSxhVRLvAup2SNqz4C512SJL3noiKBkezZKX39ZH3j",
  "key6": "2D96tZwodGJEocL73xetS3tNF1uCKMDfLmYN7rrnqSCAkQcX3v2VuW9rr3yoEypF3dQRVYdrVCNDhsjPExQWGCuU",
  "key7": "4NqvYAUfr18qi91KWowfaUxsFKFEUpSzg3KcUSb7gax8WKho9AcksoiXvQAnKiCrjdkqPvbYGGhhkwowUgYYjFL6",
  "key8": "y6xXeR4Zd2DkTZHTqphqiA3v3YxmqdUo3xnN4xohmVsGWYdLLBNKfhZAyGkPXrCgAjB3WeYZsvmteCmJZ2m87ST",
  "key9": "C1sK4yrBtoPUcMUxyRAs7khuq32Uu7qDYs1iVHjjAQQFxVCLG9CaGXcgneADzQD47WseikwtMmW75z5shhMBimK",
  "key10": "5sJyL83BiJQjthMAjkkN8N2RNz4o3N9X7e1X3rVZ3a9kgySdtRx7xwQUV1N2VMY5TXuFoq6QTV1F9PpvSGEt3meB",
  "key11": "52G2Pr2UQ23QPWzn5FP4J7qeXDinzMv5p2aipDaAho3eN2UbcGesvYZHYpwzBUpqmZFGByotLE9QbWPkSX76o1GV",
  "key12": "3ydeLHNdHYzEzFFJFA1t24YoZhkzGHi7JECkxSpcWZsc2mxuUWHrMbUPqGQQb1f828ig8taMzwsuaYJAuSZPs2br",
  "key13": "5hjiuhteSVihfVEwYb6uFZ3yHkvihSVsQ5c21tLC5vN7mzty6BoBXmDgzatXt8Y4KvQn8caWKtH92gpqJK7BoDfJ",
  "key14": "2FCFwD4Yj2ZnabpZZr9FenxNbXw643myt4mQL9X75kaDMskFNJzAzmmK8ddokj1kq2SFr8YqqHFQPAMdkmWBR852",
  "key15": "2UCTLUX8KagHMwcwgYXZQKiDBZQP1XoQzNVe2FXVsJW52JH96wTUNPHuwuxXxTYk34shW4pBziPTZfMto4Vgp9kw",
  "key16": "3WworA7wMRZ1aB9VApjxVW2fk8aqbPE8GM57cYnfnFUmhKkG9nDbRbMVJtXkfzyHgEsybCXQDLuPPbJNdM4ivczp",
  "key17": "1LXspakxsMP8PiTrT4brvuEz1Bd8zvDebhwcuc18r9MtFgSBfV4ha5qETYEWSyYGkDseeKKeYR7NPeLAxWvC9xY",
  "key18": "43ffG3PjMMHBh69EsEGvnpRSd5Gh5SNch2Y2o4Q6E4czwNNk7fBuWofeFEgAKgwTUYm1mQ5x8EQhw4yZu4yBYEHs",
  "key19": "3TrJR3viXQwpEcSP1DvqNA4wTydPqGgz64PcE92Ggixy18631vF6DPXdCA8vTmwERbFWEwJyexAHFymdi6uvysfA",
  "key20": "2g2jkhUAmMY3Y89HCkxPL43RNedBfwMtNLKLv56yBfwQ5jJaZATXzJHwSDuyzEJfenqv3CZaxcmuxqoWpX465h6p",
  "key21": "4sN4s5dUHAAWpygmGGc8hUe9VWSSzXfvP9EZcFCpuYgsrayGNves9huAmuQVwmcWgqYKouwnzz9um8JTZZXGTwVF",
  "key22": "5fdjJjco2QNHbXph8eYcqezf1Re6duNzFvyPEMnsfLdR7yjcjcB3GnbxMLWWwLVZUDoNW6FSHcwqzSDtB2seohtB",
  "key23": "ef8PpqjrfLkQ5WMk3ZhPjKvc4EQcy7negz2mT7jvuWzqHtKZrmWi7v6Kq4S6d9xzmTPxjiKNNQpHfU2EwcErfdu",
  "key24": "2VjGAKjN5CPy9bdXx7kFxZbsCrQTp7yevKkwJxrcN6MjQPQnSQTy5C9S68yehGF1AKzK4aFf3w12h5N1iJ2jXGH5",
  "key25": "TB2mLqCP8zeWFEbo3CPaCacLmTLLrBUGNetHjL8DtBDkohcGe1zbdQf8onECm144doy6FF9Ym5kKYiaYHw3xF7N",
  "key26": "2pqwq8MxhBQSugc5cf2hVZUU9rpCSeUvEPb2P2pobMdLV7BQqzEE2BMhVk5g53RqQeefq6QVp349a6au5vjrCFXV",
  "key27": "3xbYhKKBcraTnFMEVAUjhSDfAfQ4j9frhLN98nG2QWVuTWfTHbxVeRNhd7cNmBTMMnoa8sDBtxBMxXiDyfESwcLz",
  "key28": "2dAAsogpHHq1GsnqSTmtPnT3GYnC4ghbbC98JudyjMzohSRRknEJM9cAc4RcAQnRjFPp3JdJbGXRDDjcS5WL1A3p",
  "key29": "2dffgjuDwgVXWU3Hf1h9JUtPbZuBdPhWTYsCBVDV7yM7DE9nqbyqs3hGHD4eA9m3PFoViVAM3Tc3AhoezdfMTjj",
  "key30": "2whmTiEt5KHyWzacHjnKZf962cUFuiKiQACd7aSFnJXcniJJwi7rF5eMFBMCWhNhraDF3Yw6CfzwgGpZ6CmBbMDM",
  "key31": "5h6MkbyaPismfvDr6dQPcDHZCGXbiPatbLyDGwFMPM2rG6efnRXj9bCi6qhrUrv74cm1BtvPdUXcGUX8s2fAdnVN",
  "key32": "cMAiGsKe74VHxZTjikQcoYfdpkcorWyrboQuj2EAtciwW8SXoZtjTyyCtyoVYZ9bXXthbQZLeKtawLDfN5zS8bW",
  "key33": "3rkMN4LLJ6AH2b8Lys5wUfzM9qcG5N3Kmr7xUGx1zPZ1WrdQ1oEiTawkXkgT9F6uoY3RQwWPbjm7JwtkxUDF8BiN",
  "key34": "5KYewiwuHpQkk9yD6tJY2uiNkDgLEpFcEJLMAkMcjmXfRC9eaiySQwuormZFGRb3HyRdWnkgHhvQEfcMPxaNsswG",
  "key35": "4fnCmVJ3E1dot8AtBnwZK4rjokw51UhHhogipue1Z8b9f73irjXitxWtonA14rZd5YNsCRxEm5SG5BQg5Jm3hhe9",
  "key36": "2Jb1vxwMhaw2nRTxNhD7ocGxvqAYtbiqPTM7gTbHtJYtm64h3SHEgimc3FeygZnDWpXbZbPUhD4wGbxnjfErkLYW",
  "key37": "3uxRvpWqRcdQwQUc4RrHVc9WYTytV6EHyMBc7j1VU2iHDPm6N7DLE7dknU1gwo85KHywHq3dxYDTx2yyQATQ3ggQ",
  "key38": "2ZavyBL9yf8YxvxeQY3Qzu4PyfqpGRueQxs43qpM2jkJCbyaXxVqUddKnGbBNPSNpvchmhaXLtLvgUtHChQbMjaU",
  "key39": "AktdC9T5LChJkvKkxaowmN2HfPTqNp4n6LAxd53eZXR3v9bi5CVGR6zUDryH3xLQvpVcUhQEyPBkM8GXa1VxpaC",
  "key40": "661FcBupt9ShyPmtiL9STc6kvk8Du5atqrSR7ybXrFviieFLA1b5RLeA4KQnCsVPrhVCR2FERiLt9cReXFWubrq2",
  "key41": "3oXRdJbD7eKMMadvZiDoV6kLRUMjzCJNKrkS4JSayzJ2PUbHKwJe52Eve5zxnzfuUSK9EyMjWxpUXFuH8M8zvbbD",
  "key42": "3FMC6CwxsCFYHn3FZb1R5RcCmb4YY3EJ9mGTmJ6XsW8Li7nMpLZkk1mGA44uPbV3VXwAjJekMYQm7EYaFngdLkdp"
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
