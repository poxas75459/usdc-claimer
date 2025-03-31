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
    "2R7uLcbpgg2KayUaztkM9yNRVsoGsmL4d1ZFNQfBwac3LyTgweFu95Pv254wahvwKnAyiVdqK65nQN1UEmJKJX4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aVToiSH9NTXGFSY4WYvET8TovBm2Ystg1YA5b8A7dg5TZrD5h5ushCUA5hmQJ12zZvyPiE7o7aGt67PxC5snbPx",
  "key1": "235dWHPNkfFUeJwzPbdgmFNRtcM6MKmMM9Rzd1uLKP44GF3rT2XZA6u1EGyytaNKB8kPsv17DpbrNWJB6F2cWnoG",
  "key2": "2SKLfqe1qpeJFpLiW7wRitqT6oBud3XoJNkA99moBA4XzARt159s2mk9KiN6Jcujg39JXhf7asA6H2uSmjmJocpC",
  "key3": "3zVS3AA9TJCprMmwixgXTFyphVjvZWQsLNro9mP3XMHrbZzjUTjgxgCEJDo8qiW2wtYb7BdHTS44iWpbBMZ6yVJ2",
  "key4": "2z7huAEUKfiLiPHfS8KzXYzD8k7N9VYchSEjQA1Q7UtLoPz1kBmUArMAiaQEmagJrHFbPkXhwgjdfLoSBHSAEEh",
  "key5": "5FgGX21jzomGSboUoM7jn2Cgny2VqaZJ5ZsQBZBpCTvg6KVU56mcm7VsVaazPa9DG5vsmVvgq8CzKezN7HgVK69x",
  "key6": "2wwAa4S8gRQaE7e5yRJ8JWgJjLond9RniStLD2BEAUJazbELaRHCiNZqKimxNK5imLjAVigPPwPBVgYgNE4Leuvp",
  "key7": "3VNTBzykv7oTtx69sivs13axx2M5N5NiETCMXhKZbyQkEEG7Cu69zLwGV8ayv95tXTT9sQ4cM1jZq4BQT1oW7wqY",
  "key8": "2qXSg5WuqGmmmJ3DAdq3WJQ9Q1uVDZQ1rs9Ya9bMdrisAAf7FeJjGQ3nzAuka3rKvZ7HxBnKYQePkLNXgxYwCWg5",
  "key9": "3NVg6oCCpDvkzSC32yJn3UV3BwK1U2j427yoGph1VF8kreuXjbrQhE3QFBYmqLv8u8819SJS9Qw3nvBGbgfcH1pj",
  "key10": "SuEzT2Ggt11b9FBNvaaYihvFzC3KegKzjAVkr2tKUr5yALbGM9AuNJqe2tusURV23MbiFvwf66yepKCvyFrENSj",
  "key11": "3QZXgHNvgpg8gq8a2YHKLsCV2s8aJmykA83bV7RLV7LHtFF8mXGT76WjxSh9UUCdaEgpU999N9dv2EAP91g8SEkL",
  "key12": "4kzHAZHRZQnfii4Ae9bKKmJcPLnaLbjoMBSYNgoWUrgp31ML5gUMDHNcSTpATH1EAmbqXKVoNDor7LNRCkQJeEb2",
  "key13": "5CKkA6dYWENAn72r3xvjMf7rQYf46BNuCrmfVoZjdgvCneXtXrk7J9BxtQNnrGe5kKJRnYmqQAtVgZgHQdk2q6eE",
  "key14": "2CZDBJrGCbJK8LMjZcgxvuwpEhEe3k6zXJVA113A6rGHx5757xoh8TZw2tHXStF1UogsNxDthkGiiKRfxyH9NT3e",
  "key15": "4o8P96uLvsZ5VfH9mYd2jbag7ZCG4nXEpSzQ97KjmyPXBaMYK36qvwcVnP4eP4AtTDvMe8uWcf9PJE6zeKh7aNjz",
  "key16": "2tiLdNXpVTEB4Cvge9pGfRFgRyHbBnyCCjUA2pXHuc5wMARwBg7ZBduF4rcXm9XL3k52FR5588M8PAhgxd9YJiVo",
  "key17": "bjuqcJWkpzjAGeqAxf1QZWbKRTnuRJVAh29r14U7dHen77QDvseArEpHmZURn6Jiur5q1nWbZt9EdVTheJWWyT3",
  "key18": "3c4eB8PYo6T4t1F3jfacyRLM9cWf3iobcPbXGAvRxsuqy4maLaxvFPxrmmBPZ857vz3zvANfQ9wa8R914h6tmRf2",
  "key19": "5Htyei17emRJSVeiQmN7gd8YFHQiToZozpD6xCzhS4wDZeoABtSX8ek8BJULGb8kpx2b9Gmxo38WmRC4nNVQmhCP",
  "key20": "EpDJariSFe2WUieLw1hhEzkD9Nz6t31LBy8EC7FTnmiwYw6f2v5ARV3iy9Cbz4bF9xvNqvp75PyQJSXoG9zfAcH",
  "key21": "2gRL6ZobJjN4cdbWhcYdwJ2a13TtexSFD2n35BsL3cbShYQNHS61Bmfi7VmkdKyatojLdbbcBypTdFMyy9BVr6zz",
  "key22": "5NLz37yA2YSh9CQ5BXsswpqcuhAYqJdnB7gj2UFqiLSM7beBa7zb8c6eqtMBc5Ba5d7TDLmvRknJ6ic1yBcyEWdH",
  "key23": "55om7wQSQyyQe7yZ1fBg9ugXMLLzdBMus4PrSS2eaQ9KkhYjum72CRWKtA85A5VLxhQzsLvorNpBsy8nVvw1y5Kq",
  "key24": "2PP3oPKftnbBgvVf9UT3yuWSCrL6KapctjJE6ngJT9AJ71XFzUMKWajt4HNFMY1SRas4gB2yNchcJNXYnx4u5RPW",
  "key25": "5iPewW1eJz3h9BBqVyXwPAAkgXP8NWknjqoPReXW8HTACKBV5t93pDZ3AQ9wc7azNzCJa9yswMdFj3gnzjGsuZsf",
  "key26": "5hNV4vgtW1rKV7G6HuERrUrcYiTv4Yp9yL1GhT2NM3JkEK5vCz3nnhpuK5xnoshcdtnxsBPTzCR7LaKFzS6rRnrR",
  "key27": "3tLvM92aAVQDMdWm76vpjhVXJMALyomKGHXQJeQdtjtkkLSnSibm6Tq6ZJZW4qyn8WBBEx7VpPsT7qVwqE9T1ixs",
  "key28": "2YRBNLsdxRA6g7JdTScpjRwxbQXwUq7y5MRFobyFKxJ1RCszTvAwAU6YmFhH9XYbxT7gsjdfGYUYpKmmbSosW1nB",
  "key29": "KX3rcRtpnvasgdGYDWjvXGKguu1rkFzfQVS8wq6fzCeCbuzPDTrqjLN99rPWRXj8q2MJhiadRgUKbr3puEzu2n1",
  "key30": "kh4SvFW6AjPR89pouUPe6v7Q6Hw8jd1h8Hgne1Z2haf3VCcHaC249yrj9g239qfdSfDhtjeSMmURh7Tv5cMiXAM",
  "key31": "31W1zYQWvTDvu4DwUusjGZLXX5vEyB86AcWmsm9cMsZt7iPPtepiPa3YXnVLdbmC8qikeuskia4u5aUQWsdRpcKq",
  "key32": "62Y5zu7WxmgTFBmuES3PehyzVXT4PEVp922WYFHWy8ATSmhSi3EPbs5ZZ6et5kj6WXfXnZX59LpJTBecFL1CZajz",
  "key33": "4z1MHSrk5P8qhBqSxAjSuPqfak8wGMvGZJrSJNffz95pv7Gg2azoZ4DVDpwCLwHmbGzZYs5f3WmLK2T7kazxc45H",
  "key34": "y2JxUvNkxARXQ6xokZyomPR1yJ6zmphLXG2HRnFEUJTuUPThvpj9G8VGtHtuBrgs8HfDbKCJmbfGQLi8GSYTTnP",
  "key35": "2BUfwfBqK26jfLQ5NZnQWQ25CcPhd7UTTPnRfATZUAzgz42iwnGkmqosG3Sr4ja5HPFFeZnGWTex8Cfh5xrFNncy",
  "key36": "4bK2M4A72Rihpmvx7caAT451gBi3djEC6vEkxPu6e77JhGpyzgwFZWgJhPcg6pLgQpFauZMFYFycNLLdCMiwMW13",
  "key37": "3JNgxfdJDPDYb3NENnjkLUVmDynKb12Q2Vfbkyn3dhKUsQ2Kd1Juh6CtB8SVa3S2Ln4oLRpWnjRFckYot422Sqqd",
  "key38": "5T6ABvgh8kyvAydpN2oYBTZUjwXDrTCZCboe4meBXVbmzA6h4EGMGrz2W8ZtSVvyJnEN3RtSqoRHAXQ9w5uAar3o",
  "key39": "qPyfAVby8wAWG9yh6iiFb384twWdR5YyMEM9CxsfJ7D4iL6gFYFDMB9aNw8Ai2UKVHSmusdRDXWPuJzx8FCoXKs",
  "key40": "3wACkeA6Lk5pSLkm2YHuWoNeEKv92z73Wrqo6xLhan6oDpkwZMtaJzTKfCRSWBNumiJmf5RAarAQMQUqXALH4fkD",
  "key41": "2ZLbjSGvTHJQN1K6UKiu8mowRBswxkCuS8CRoeLdJ8ZTDMzZfv99usKtFf7Khhvi485Ugy8HVThDPsctMuXzoKr5",
  "key42": "2kQp3mck3DCCbfUA5N9tYThFK2LwMqVKpTxpZFFBEkKbKoivwZY43z2wAvNMgwyN18FZBvkMcg3LPAUyfoDhFLXq",
  "key43": "3McGhFkNTAH5Hk7HsRbdniq2YwUjogtFAWS4BH7hnrEdg6jZX1kCj92JMuLyEQx74CSVbVA7PhhVN85rsLjYRqJH",
  "key44": "4768VKZoxT6VTzsbEdb9Nk4wZd5pn5q8fmhuB7wqcTUi6dwt1FRnsTbVdj8LKWDSgUxzLjQBX6icqoGZg9VKLrUh",
  "key45": "5ULyTSBWhcJqzLERjq2UF8aJyXeJcoq79jcDUD8LaFa4UcyMhHhc2VzBBaLG4SxzfxFZgjn4mMxtZf1XPNwSg73g",
  "key46": "pN38A9GLVJd98mFkjnJWVsfrRAEqCgUH8kRxZ11GKxvYR1yCFtEvcjrhYNcW5HanQro5gzJMeqBdMHKb1cBYp87",
  "key47": "2RUbF5aevWu8pyU1CWsBJtts6zRZzovJan8xoG7PxyEUgmp83jYyeK1VDXbVLmqKGk7hyeBE8uUdrNhtmxbHmXje",
  "key48": "54YhQ8tAn3vCSsh8aeJ5gdkcWb8VnfdeiNWRXYrDPhkaQvC7YMHPk4bjaL2sz3GLayYFpXqfdA2fuvJ2RdGHaUU4"
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
