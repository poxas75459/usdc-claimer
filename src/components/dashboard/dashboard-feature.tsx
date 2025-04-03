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
    "25TNuzRbMiW97jXPtz9eo5U34MUevggkMXuwemDt4Uka7G6WrTV4aHeBymyTymDKQiPtzenJmuCJNhWTFZ215Yxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yJo6mhBPrST53qSu8jaBcpJ3NDTe86HwUsnMuPp3t81R6K8M1wtrHyWnrJF8KLr3PngZprgpdJoq4B9s6VE1pTh",
  "key1": "aoi488DwUyfbMJw38uJiSkGf8LUrTYi463enKf8Az3kYrkDR9z3nWfm32Hdoxmz3dBcMCswkkPESBAchJgDzuuk",
  "key2": "42V7j85XNU9soqxi9LvXqPVkg6fVSDynyimnye17XXzE9yQgy2y1DX99DetfGNBPcE7vdWLxQUGddVpm7pYxBGQz",
  "key3": "4qwkKnF2UVwjqEMBb6X8TMWBPK8uaUJHTdkBLrcJ5A2v5hhbaSBcvMi2qw597T3K8ZweQsRiquBJgbnF8KsMpXbs",
  "key4": "5XJnTwVuoSkdHyLaRGsAvZZDPk41vLmMbFEN1QNBL5CpnNKuLrSEqTCqB2grhz98uskdaobCjqHv4yx4ZS21WgHd",
  "key5": "3GHZWhSLvoeyL7qfekjcq8Dqz9RB5cQQxrPo1oDWuHjZ6AYed1Nz72bnTqqH4eAc6PQMrGBg684Jm5mgXWeyfSXU",
  "key6": "33p5NBKRLe3E9Q5CwSmiY9TU7CJtUqLPZWSV59EWNXrcsnDyD5AvcRvJEUh1JXWrwXHVSdfZ8BHLbL2EytXbgCrt",
  "key7": "2sPkxmxQDcAdLgB25fip6ednCYiMmygH7MDBD7CUe6G9mQfTMAV5my5UffjX9cHuGY1wHunBVchW13vSiyvrdEYr",
  "key8": "5SgwDTQvMRpAxnNjtpgMwgcXVGNqJQQZiHZSPVgFkLWWFaUAy4FW7Ubwa9koqS9fVyFWJLYJ3VEcz3pMVupQVXK9",
  "key9": "qBSNtSUHaPGckHhYVKbFU1PDrwHGAXHjpjuTXxSkqkRLYv6ERc7h5EbdCCiNyziCHgFUmWZFk8jXnPYRWwB8Y8C",
  "key10": "5vh2Usncu7PPrNFQHALWMWLyPXx9MxQRpCsd9q1SMmkKBoo4K78KnBXSxPKejt7uYmwMLS2T2KijNhx1rw5r739Y",
  "key11": "5zL5c8jAukUQFgbkKno9bLbohhQdgNNNJM11jqbMYSo9bK3dkRFLy4JHYgmQyqcH5dGyNcTfC8RVM6RbHjEqCf9z",
  "key12": "ksFVH6VZjY7iGhhpkGbEzQEicMjcFPHGYMgKU7AJybTJ2guYWDrCUwUMk8g9BkvkBZpFPH9UMTEgyynZ7MqS2n3",
  "key13": "38K3oLqhffp2Xa6jDvpWC5gT6k5ux2fkurgJcNcneYLyyqFkCBLqfrwEz9J1H9ztyYDWdCoMXVibP7Hs3QCY2We3",
  "key14": "4sz1acsVeaHjWVmmrMKhQNue635HdSuQDQFMMLPMBCpjtEGTmRKMprs9mo6Tn3atZoHybx858GPHDDCnhRNWGChq",
  "key15": "2fL57RQHgoVoX6rhAH6dMsjpwYHj8ram4XQYekz2TGDKXY1ZqFbMu3HDFWHTVv1HYuNjLF6ReipsZjjnFo5geKjj",
  "key16": "ojP8A9n2cC9GHgLEeBQoiH9gsnALpjJ1DLEvsT1EP8yT4Lde9ruUxCBAojaDHgBrRLmJhM1V9XEsmPde5a8L3za",
  "key17": "2xvfQ3Dt8nC9uyFj1xWorxLUNWjNPpVhBvdW1RwDMWCkPJQbkKH4Wjrw6vk7NzYuN9X6LpC6jnAMJErA4RJex4jw",
  "key18": "46GNPmZrGgohrXtybSFjS8rsUxECuACaTBgv3yr831REN1twBgzdMYBVKcsb1UPDQA1AMMdc87whh8M3K4J6T1R4",
  "key19": "59yAxfaSXCGzGKW47wBwCukJoZEcWcJdGRviXPqPhcs3yDS4pquCnAZtDjcCXpbozvdXpWZ6xxarMg8h6JR6HsMT",
  "key20": "scbdfUL9kZ5WzEekjAvcVpGNvT6Xzzm7cKwWt9RwE6EYbYz4NxtLiBZPocskyQmi3BpzstbMif66Hkk39X8dF86",
  "key21": "pE34MLkNc9U7mSucPufcmzHHNjZ5JVPtkjKoq6NAprKw3waCQUrC7UMjJUPDpqweopJA3UigCuB4GSRnbUazoxC",
  "key22": "3vq1DjVYdvUiJJ8pmN7PFiEYAb6W3zBxM4La66KKzaHrL1o3PQhFhYSCuNY9jayrC6x9DKrN1NzwWKyjqo28VNAa",
  "key23": "5Vog1S5rw6hdBQqzQkd2tRGxMiAQU9vemk7nUH7vYGaFGp3YiDf6XN1DwPRRRfCGmEQeqytZELZdEyDjKqCAYDc7",
  "key24": "2UKLKAynrosxHZog5bduZioGHKsmpBaaph55Jvf744bF72R8XP39XMqMcihuUvPPPB4X3qj52Ux24CV1FjTBF6Q5",
  "key25": "3Qg9QXUG92WMDQaFqteqS4uUbBGpZmvgbFVsAFYDQ3U6JR3P2uxivw8hMecCur93nUTYeXF9btfNPY1Ro1ZBZ6Pf",
  "key26": "5rRo2aBFnVked2wLYk4Dm6tWQcYXiUsG4EjgdEntV3RF7DkWwooPRjYf48ZgXuwRC7Pp3rBhz5J1asYRMFdqMk8K",
  "key27": "NCZUTZrRt5hqupsXwsGMnQqJqf2DhVgtowuo4BY7YYhBR1U8j22GpAFPaddS5DxV6Ezrc2QF853RyPJo65nAzcg",
  "key28": "4LhyjfZhNoquebZE7DBAowQV4F3e74FQTeszJMgLsh12x2TaQHNzCd5NKqYW9csHPCFv4YCsm3n714FTqNcAnVx1",
  "key29": "65M9Tp3eHF7yvtP41wgfbSejqArNFrHbmMLgCCfYaoCAZrqQhkBy8FKnUde9ycuR3fjD1PE719dEDqhSPgDuoKRx",
  "key30": "3E1sNWeEgu8z3tUnpLjLVgNoSJgxTawVjvF8qgWLLKRHhL2TjVpmTkYkWcMh1bDzrZacPzEeLdHgdDZnt8m4MD6j",
  "key31": "4foa7s3eHrNRGffDLKQMeXNyq3gAeSpYitW7VuNM2hutHUAmXE7DzyXwd8UNB1r3BFyG2aNH8MnZbSA4p6f7Yxdg",
  "key32": "kLiyvh6sPxHyca2nU9o18mTBYGBXHxmzRnGgXQyt7gYoLQoHZ6fQE4YuqVyP2J62dzeceAKdC1dBQZpvWn5eJdi",
  "key33": "5Epa9FBdWT3mV4GKxF7hXsKbCNvJK9yPLN46QZL1gJiQX9LVk3S4HaxQxymbGbP79Zbr5TnykNqxxbtYC5YgVvN",
  "key34": "EnkkVStafrivT2hoPErVz4zNynqsvwuimvcVgQxincsUZxaPPTgVPWVBJYB47wzrLu7mcZQ9tx6FXxdRgaFLTzN",
  "key35": "4fBEnW7qhVCGw9iGzqWia7BhQHZUmkRTP9mxkktEtGhzreTsyPg5ujUoYixZSER9SWiUm9hD1yxshuS3FjNY8nbx",
  "key36": "3Q7hGbWL17LpMrHxMmamKX6HyFvaxoqUs4fxUvV3HzNwJGAyG6C6Vji6v92HSKC1aRtznj5ukj9hbSQzYze6zBvg",
  "key37": "5frgxVdHeftfxuk8Jvsi9Fe8N227mUjg3fsmS4odbBWxM6K6pnxjXsLzYS4HzP4URyqEMJ9L1if9ixXr2wWpZ4vL",
  "key38": "2hkdMcJGG7LEHaVJUacmPPdMoSKDf7woMSwv2XKMchnxgF3YVTzpF9ZhzhApCPvYgfHfFR4F3YH2yNDSHxYCC9ub",
  "key39": "3DQ54oBFenhdkrWRnYZK4wm8Ra7Qdz9GdEMPdiCUMRpmm2P9X5QkBNxhdCUostxNMUbzsahZ4KH2QiHp66wiNb9n",
  "key40": "HdjWhHMSZb3SXHFpksXZhzsms8dTRQ5FkABHh55Uc5sMGuZe3D9vsxfQPax1SQF4kRsBzrsfn4RyEaxJ4qG2KyB",
  "key41": "p3xsHtFoF71LwVaxtTvJUBjtFa1xyQAfdaHdUfmTJHj4CEtujNggVfyvhf1iCKzaoZQxKa8EQXM2TTdh1XwusXu",
  "key42": "GW3KK8synXvYRQ7Ae6FCn7Ao2cqiKGkAq8GNk1jKYkVRFdfNKtvSEsUAFJ957DXMRGQV22LeFTqwdf3e9CRBu2h",
  "key43": "3VfSQWxDbrUeRVuDho97asbzahHB8zeBmJijxiXZ2vVbLHFibsm3F1SX45W1TVsbCn1XqsY3jXZpzLKvgj5372iS",
  "key44": "2mMiTcLR1krGUa6mELrFse4M947spYHqYvcUU94EYtux3WvdkYnRz4CRLwFUVvieLqibMZYJ8jLa8j2suDLLpG36"
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
