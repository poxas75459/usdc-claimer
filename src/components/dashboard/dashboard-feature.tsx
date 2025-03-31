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
    "wBHgxuVPjotmJJmi3L7m3NX2ywibjhDnYD5Mbz1tUcniwyp5avsEicHTcwwJud7pgmgSRJggDyp51SWRTq19LU1"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "heqC3gFbhXNZrqkWDzu7EpsugoU6Yk13k8LEhTojizucDyNEf1D7bqNMWD5BvbeSf5qxK7oPhgra5wpP7DAcvbW",
  "decoyKey1": "37z3d932ZMneG7RY7dp452WwugPP99ozw3e32pS81UtU1JXNi1N3D1CopqwLXv9EpXw2EnB8GGvqpdMjiJuieeWk",
  "decoyKey2": "5F8ZSTEfG22PocJGKoyW3JdjHZBrivouYmZS8ULM8eDC8fG149qaTxL5hDEmMXr7ZWPkQuUU2zpyPyfoeMwwQmuM",
  "decoyKey3": "33bSGxsHXS5XZtdZcKN6SuPySxabiMuFSBkgrQ9Dg2ZSdxKDUe3AW6WyFnDsfCTk76sKquv34jmf5a7pWSsY7qea",
  "decoyKey4": "5XSC7C21dyL6zFfr6HuDyCVVTpDK7jPANDaRMgqsvdrxuKtuRFdRjY3ybMBzkKdyk4Asi77nTh9Wnqae9GehUbYH",
  "decoyKey5": "3ougyrxMMzRiSKnygdxcbiN6g9FpSsb82PwFLJPfpzQQFmoEFSshi6s4G2kzDDkVxYxQ2vzyCDHX8Y1qhnPU5x9q",
  "decoyKey6": "3DCmGTuXVXUdCpo1Ju9gG6AMpJbA5koVvbNgb4ucEE1k22HAfAh4urQL47cvXRwDa3bkmr6CaPTuCCUs8HNttGWY",
  "decoyKey7": "3ifsx9PMRkxqdkthhGrkWviDPPfWXTEjMuXrWg4VYKMPfXrm6t7PS46gHU8reJszv13dJpYMipMnjXZzcQ9qCQ9t",
  "decoyKey8": "67Jgosf4EdBhQKm4GCMHDuCkZg4DBtMCSqjnriHh7ezAPC1RAJw8QiFjthj3Yvm4HSJhJLFHZELFgCU5Qt6xEysp",
  "decoyKey9": "3NwdEHpRQLWDQzfDhkDWYZ2xMaSdAfoaB7ACX97oXJFiBPvoN5CHV96JGAp8LKGT9hXufJJXjx7MAk2H71Zftdkx",
  "decoyKey10": "53VRUpzySxvjRNhx63d1Z69bfL13eueZ9SiadmDsZiJVmgtG3sgZvN7Vft8b9Ydu93MQJDFD1x79pfM5U8f2aQvo",
  "decoyKey11": "56oGZxhsQwX4FRUwycAPAM65FNCXPsnJRCwctk9dGE6xSiZU1ARbbwDXjw6xy9vWfE6cARBtbrMvJQHoku7LgWnk",
  "decoyKey12": "3FHwE9EekQsBucXnHPYJBJaFTgFShT39QfrV7EJkrw6ehE61Sue2QsedeQpxYAWYPUpHY61xm4DnmDjTfnjzNknV",
  "decoyKey13": "23wg8Ku4fRBJpidetZ3TBNUdaBZoNxb9beC2DDyQ37948e9SUY4vpoT2BSnR2kMknsctqZq58YeV3ezvopwKakmo",
  "decoyKey14": "3wvwwM2Ztn7jncfwAWBfhvBHbjEcEq784y1gMBPC7UcK2NjmtzdVBz6m76SGB6DeJsxoriNj8Dtg9VTQKjWCrUpw",
  "decoyKey15": "2Zb4wza4pT3fRqVUWpYES392ppEEwC5HiGQBBxDMRuZrwJcNKUJ7n2DuA3fcEJupjWURta45GiCe4Auofg4LgA4P",
  "decoyKey16": "5fTKe4LTdR9pWCRZPpQnYgw7DTQxRLn9TNfDQwe5eQuMTHNtpgYqcc76RPtvbmxyR3MbUBpbS82MkDyh1mubagz8",
  "decoyKey17": "4cKg6mp8rhHGseM79Fb9KMk9z98WgRo9HXeGAzvCcKbu7x3X1cqz7vBJguxAded2RKWH1tnnavR9BvhgSGbicuE4",
  "decoyKey18": "5LGgP4aJTjoCo93SjrudrseNab8KSFWjFBUep5oZEUw7XN5tjHxGkTe9L4AvrqSQHfp3oZ2SHjm6r52edJnRJJDq",
  "decoyKey19": "2dF22gwQmEb47JMt4b3zqgBCpPej2dK5C1wWcoNBK5GcnFSWqA1vpqz9z2AX7CBrixx7C39wvHSwAKg1Rxq4Ucwn",
  "decoyKey20": "2vJaYnNMkYLsQohRPHQXGLy14NhYtmuynDPkKn3dLgXqky1sKDpx4H5d5ptzVvMEsf4YMtqAcjRpppARGRELn7pK",
  "decoyKey21": "2wSg7u6g45eQ53NbkZCrBGsjU7wSs4FevyDtEPMGzMgRC9ZUmHkhzXzWpXvazGpUdBGj6ydDmf4NifeoEt41idho",
  "decoyKey22": "23YqSPxH6cFjiBuV6ixKWCkU7QYys1JzMXDGo3jCv93zJT5cpdu9sYYoDaLwHRDpsHjavn1xrvfAukdfufgBZwUG",
  "decoyKey23": "WdqXQFNe9FyqrH1g7L1mcHchzrMt6TZ3MC4zgDuRDzGVFCGnGQox2Nzo6Awpf96JNKfz13s8CXA9yrdHjW5skSN",
  "decoyKey24": "2C4CuMVfxNcUjxByzK2ZJgE5gSTEPXnEvSjfLBbDZJBkEX71MfxZJZsv2CDr3e2urT8qkmBWY2FdMDgaHzrHFkcu",
  "decoyKey25": "3bsdJtnpkxuhenWqEVBUovTWEsWXTkpSHPchCKBAhhxZtM696g2SQGstohf2NATtud7SRL8FaSoheMjQunsJudDN",
  "decoyKey26": "sC8ddQwFxaE3Emgj63FwQ3xUqXM5V5QcWgy7AWx4bvJceY6NsYMjVBgm5EowkAfRWoYJ7AbH1gFeGEjLt53qwCp",
  "decoyKey27": "2sRJxm7awhqZ1WNsBFT9NmHhsowb6JxmS5aVDuwEUhRxZ6Q2TBdgBgoPsKP8bXEkc5rLH82RZWN1W2SwSNhNyvvg",
  "decoyKey28": "4zpCEW9UKG5GswEEcme5u17iFmwZ7M27HALXztJ7GndCg3bDPiu1buJdoC97mWGJ9dz7GjYB9c9DDte11gCfyBEt",
  "decoyKey29": "2ktZkwAtQNMeCfGELonqPybz2zoxxXvZdTQLWdTGWLdBDMz1iY1XYXqghXeySvXLsJGKjPJNxT6cXc1gaCDSecWn",
  "decoyKey30": "2T2hQhRe4ypQBsBFii3vCChPADaKgLRiVECC7vRR1iGiNoc7mywchpG2nAvrky7dX1tHVov3Kj9Z9ByrN56Wchc9",
  "decoyKey31": "3MdSwkBVB9WgiYHJdXaTfBrNvzaCTEfLiKDrmWFo3edFRFuEYyW2EPJZLiVWKSWuTFFMiK7YnM2LfAXWoNDD9LFG",
  "decoyKey32": "5ucpwEbzEtKMwXjJ9WTb1v4NS2ugT11tUvGqENb1qJBcJkMBJjMtEykiArBuY5kBxfq4pAFkgeYiof2XCyTDqrw1",
  "decoyKey33": "4LBM6tEbU7ZdZrKDeBuhkDihia8sSanMfC5EGCoFGzAQfwTUd7uwqJbNiBfzneKTZfAscsW9fsrPLjog9bSQSgWd",
  "decoyKey34": "5GUHdY61bxGxj8ky2Fkq1q4zPAZpwEsJJZGUAfwrFF8LvRsGsNmReU4tqHdhn5WHQbTz4JgaR4rpSepJ51V4SfaS",
  "decoyKey35": "5qA7yxNEsSVRGjLqo7jdLXaEjQkCH8A1eQawYP7cYjvT5SkSij5pRojK6nTjiqFxUCimv5LGc1rdrZFVotXCPhdB",
  "decoyKey36": "556SXnUoAtMim29bVtWVndxY5vezfKVqSBtNZjt9LPi1vQDX59YDrbHpsAKcRDg1dJHksJDBTKFVQttGRCvtZYzg",
  "decoyKey37": "2Tm1kTJgqqVsYiJo2quzZzFoiGCwqvqquN7UGZzDnRThatWo7vNYjQTSEgR53pNNQ7zfNHX4z2JYFrKueawH8So2",
  "decoyKey38": "3XT793dPQSrLaFRRbH9ZNCayuPX8Jm8eSnqJ8ozFBweGzSU5QxV1q3X8boFLCNjeVwVkEUGW6DC1yf4Qf4aK2ksv",
  "decoyKey39": "5g6CbPMExeH1PodZnzfbYnLCKgeqxwG9farVYkU8eTZyKS15Bz47AKy1XxACwGH8ogAceSC4EnpZFqZ6aMvbMu2b",
  "decoyKey40": "JC3V5G2ym8V5YGNoU6GWnkAmstJW4nPBMHMNREhT2kuKLM1Fwa5To7pAKfkNTzGcbgMhWfK331CQTzM5e8vdVTs",
  "decoyKey41": "3VG3tiTWBtJEf96p9WTL12e6nB44Q7LngveKZnWMA6mvnAXm5wJxfWmrNA2EJy1vtYYamVs5Mfg8bMQd3rbMM4Ew",
  "decoyKey42": "5eeWkSgVprK9ooaZAKaTph1pxiK1YXScMZiU8migfpEpCn39CPJhPB9tsZxHFBvTTZS9PQEdr197QWwKZj9pisNV",
  "decoyKey43": "4phxiWjPbgiHdabnUxwXiVhALeUBrPQY6gBSNy9Yqiky9j2KRCxmENKPmyJ9NYjqTGnkgXV2cbMBRkjSp2PH59E9"
};
// DECOY_KEYS_END
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