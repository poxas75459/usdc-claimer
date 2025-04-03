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
    "2N1b7EYF2qdaBzP4fan6JLdiZJx7oe9aGc1YCxu4ZP96Aw2YCuH8iu289XcMPGNhgkXpaktvWw8cdHf6bp69Xcc2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s9hTNCgSBUiJFCqeiLXw7eviGWvgCk2eyxN3A3YEXxQM9Yra8Qaz46WrSnfTvBEArxb9fV7uaQtLRF8q3vZ1Jb2",
  "key1": "2LYDnjeFtqxcpDni775AaGzr4hooiqaRGGb78x6Edqi2wf54Rp9XQDgPRP1ARcCHCtZMVFgWBcmibGPHqYWp2rsC",
  "key2": "5xQREv7yqRCnKAcwnLwX8ZFbB1ShyFCaaLyDy7ebXGztrkauxEhMfB56ZQVdwo8rqVTySdQYPDKLdL6JxUuxiUdZ",
  "key3": "eAAQ3ABRDSLPw6bhcKErumZYPH6naqkNXtECL9tXs7QJ5X1yGgbZ1F397hkgaSFuBogdS9kFNn4KCQaPBjGHsWR",
  "key4": "53UYuLtk9DRjP64dH577fYngKKTch9KPtMV96Qy3XfXGY2Gq1trfWVcCWexUCArr4VkAdsygQ98sSpKsbBELmyUT",
  "key5": "4t2o6Htbd5uk73jeS83USVga7i47SUnSUVvuFqD1WQHWYZBhV9YCz1YHfHChWUBP3KG7kQ8ScFHGgsMvAApMfExX",
  "key6": "22wAkfmdLoPRvrGTHQvTHNzXbXWbWGGH8BHqbqVTjG45XTeCz67LkLw1yBtRKDfRE92J5WCrL6tobxbdeLZkx9qQ",
  "key7": "zTXpKvmax7tWWHiavsh3AaJm4a6NxBTg147toJo3LBJcd4uDtBEMxBHzHqDqJyeVSYDMbYLYwXFCFnkXxsMVQkP",
  "key8": "4xgdFLDRrU5sUUT6bcc7LCsqJpekQYXM1kPniQRKyU6MyCEsJUiMHe3tP2So3wG6dPExN6dQWvThLLRaCcTzZy8c",
  "key9": "343zy9qLCj6GAiubQY5s5p1RhbrCV6wiZS37puRPhS3dViz6wpdpCfUUGP5Qh6mALfsAcLrHgwEaRBj49PuQpd5k",
  "key10": "3V9SWBTUsiiiid54ma1p6JreWRd546wAyZbrf9LrFpUKxNusQd6siSnjiL1UZK5qZY22WMoGUDoFYsEoSF625ean",
  "key11": "4gyuphjTJimZpkT4euKNJhGVtzprvuwpzkG6BRvKsgUhvqCSqYDuELzjZRNKXU6iGwXGkanTd18Tex6gtxuxS731",
  "key12": "SHE4PWyT3aGKDEfua1FjJPFS9872ynb6FrcJXBwwv6Y6VWwFdxvHdpGN4A4ys1Vdj3qots72HVQtKaK4h9vrppD",
  "key13": "1eZwcZwrMLRSafWEfSSZjN1CDA7ix1FdqT1QqDDoAyQWT5zQsEKi9Q8EqXqdqYaLDUp9iemDQNGtZMBzAsXuH7r",
  "key14": "39wNV6P76aaAas2H9iRPgooUPmSfcb4xRNkSeo3dNmrQHYhbnoho9sM1fkvx8Di1KGiSE8EzGSa2W9rvB81w5QG",
  "key15": "23FcKwFXeHeR3oZ682wW3SLN4iaq25pZSyZSf6YnwMGhSFam6bmzDWwuSu2QxvhoMcGaVpFgtpCuaKZKp51bnSQ7",
  "key16": "DMa88b7z1FzhyPVuMujZ31uuRvVDRSkFBCRWSQgZMTPCAAEjz2hVRuZMKGYvsPzRWtP6htR7eReh7K7uUefCcnU",
  "key17": "2v4MLgFGE1cyzobsnWDFDnYKx3QDDEkXP6Pw3FogkP6pyz8X5gZDaB2ddqpCT6aBkcikNqAFkSe5WehPMEBdMwnC",
  "key18": "61mtR5iV7JTMuACtrkCJWBvhHfSM6zuXrKYchAMjQVCwWGHEaKmrZQGH56TfVg24YS8xDgueiaD1uCnUuCc5NvBu",
  "key19": "4SkDuNLYqXEyKGBbAMJQj85c9EZ8rpkMMCRWSmy1yHSFDdhAhs55j2byDy2drAkHvQfNgKiLYUfrm7qUQx8ezkqW",
  "key20": "3dXhYtK9V2cNgsWREE72Qe2KCdgFv1rnzbc7J53gXdVjCECt4kUXZceFCQCk9AAXfVFEB1UgxHycS3tEFExhB46o",
  "key21": "295f81nYtWUVAREmYe67KTj6o9no8kaSQCRFZNVr3KxmWEZxW69EZEzX8unVSEDrjrvihy9PXtKZudY7DQSC9Nip",
  "key22": "2DRoH7kwvGun1c1FByiAijM3N2gHcrP8QgfU85pqS8gwVKRVzTuLPku8pYkuH1TqeDHeznDSDnv7bjAva5vs1tuB",
  "key23": "52CEh8s2nMNTCosjDP1YvCnpkVP6XNqZnJRLX3iQs45MWnYSMpBQWVBGnPWeREin4DPQB3nB3EvRLMoECcxWn6Wx",
  "key24": "4ULJvNwdAPgD9oWSozLrnjdXtsqbKS2BV9A5xLUQxaRTWVkqm26CdBSnuqy59JgN3ZiqHaaERPKa4NqfSwygHxrk",
  "key25": "2reWCjg1PdCEqhK8FN2vAXdSXJrPvEwK4Hj7QbW3FCMrkK9kStr987q4WQyEFv6eeQUBWrefmX39GCfkEFrsBFHs",
  "key26": "2mkTCT9tfVKCsb1QeuvbH2xq7cUikCiJjFFtow8yKfKVq4WsCuG3pEFmBweim6ZNESzS3GiKGBxGTzkAnWkRiD6A",
  "key27": "23eK2T2nvJFfNv69PFNNjaNK9JNJCY1pWA1J4hiiHuuavPTXNmLuRG4XDY1txYpeFSmRfzrZj8wpHWLEyGRtmixU",
  "key28": "3uYcoCyC9mPrvSFkfQy1zDsi6b2ySA5FZz7nqeYdLwwzSKabZgbppz9atYhm8CSGYJkrLMgbwHPZgX9whi1d19dU",
  "key29": "4UYMX2urBCqZ52eeZ2kaHEAZWP9de3bWbCauHgAEJqeEi1d3uSVsYPAvHvXSjASLNfndmcrCE46H3exQ1h1Kahhh",
  "key30": "67pXnjZ8nSP9HYt1Txp2ACYdZ2e84QnbRCg8mV1CLPqNUAXtCGNhULGtSxCJuGLosxzSxNRtSsmFHdc4HGBygf1",
  "key31": "3CE68QjQbfikABG3bEaQdrUu182XCDdBQfv5ajLqzj4H68b7PAhSjfZbj8Rn2fcNoyxrxzVedAtxra5mdd9ZcyZe",
  "key32": "2R53uykiUog5XUw1Y884YSNkhg14vNzFeyVKrp8rm8k5EWaGiosER5DWEupwGi2zd4doFR5avZSavZVNeHhYGxQk",
  "key33": "2kQxry9NCvp1JFCCJVDuR6vmC5JxWsmL1H6rKQhmbcFtg3QSsK8SPucAfLJW76NBNawNfKK283QSLf6w2RBkY5sD",
  "key34": "3Lcja9z4rLHyi5tpSk9sQGeuN28nyn6mTE6mT3AAnxY5s5L4aVnaqMNsZ6n3Zf8SubuNbHXv7JhiB9BqEaaL9c8u",
  "key35": "TEBneBzzs8YZr5xXZ8WhqQsRQ5LRdsccYw2Y6L7k2sc5eVvZNG3fSJCipapkr46qxiunM6tgfs8vdfUCWgtSLn2",
  "key36": "4rkzNGWfGRew5U3may34nmtS3SW5cMsxq27JQah3eA5gwcU1u52UZqwRJWucwLrfKPpKmHixVHLuCVGBg1EdFGK7",
  "key37": "2WyBCajHHzgC2JdGbsSLGCn9fvBcq798xXZcERVm6YBH4EPwvuMxX2duvCp3wC6mAqrgS5N1cp7SNBa6SH7XCcA8",
  "key38": "4dKV6VdKURPrGiKLETdwWcTXj3JqB4Meq5sbuL1UVShXUVcAJKL9Zy3me2vGmy6FoG7EhRHcTR31sgySm3cy3baB",
  "key39": "29xN6FS9GNRqcBUZqnwQXXJtQ9osLafspYK1JQPxtDz6LwPjngp2S4CbwvaUTjDicKmt2wAr9Y1kyQeKoAGiSEN3",
  "key40": "5gR9PquFrNwxRNxjra1c14hb1Fdtw7SaYHsWcB89siT2oU3RnXAmm7pvvv5kZ7mFjy6zKhNJWqCJXMjxScQKMd7S",
  "key41": "4PC14vWCLuG5uzsLQqSRHJ8gr4QJBAZw4kqSdnrgaoCmVuMTUKFoamLt2tYuaHXj8nBCafD9XQgCdX6K3fhawRLA",
  "key42": "ngtS1LmaZJSQN8dzZW4hxT6rgLmxcSqQUgcbB5GxHMfVc421FR871ChttLZ72CbNonLWsr3b1pPkSJ4aY42oima",
  "key43": "5yQZc2NrAB3qDQyWxMk8jbAfpVXXHsHSr6peb3ZLDz9vwbvpZScNSjSMRGEyzdqbudsfq4VrMJtTDLh92YLpSkyL",
  "key44": "39zwXS6PGQgYFzfAg21qC9KTmzfN5uuKYjF4UAX5qJUvW9u6ZuSHzc3unU4m72qVt7nmLm4RaKkionZB8XRUzjtV"
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
