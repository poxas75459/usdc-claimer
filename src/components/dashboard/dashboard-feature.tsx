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
    "3XAPm9XqK8tTdXMvpYx3hQt3sJMwoYJgszBX8vbDG9hGQLALbAwEv2amEdygqDf25T5KEzyM17yqtJDSCa7fgHXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rQhdnoGDNFUUAiJE8w11R4zPg7shMbJ3gNVKMGGDp3bJJ7vDcCgLKZPeN8sj83EgFGcP5NKBF62AhwHk4wiZGZa",
  "key1": "4654oNWVJVsX1tVxhJX8udayzrNGcF9LpMwZXmTxn1uB2fgcvUJAFVsnNKfhpbXWHhk63L27jJaqDDGx9y1wN7HH",
  "key2": "4u6vNqLsggga2gCdmJ5vrYwfiVtuVTL9Gm1Mhmq3kyEVH3Hzm37j3mQDyUgN1g25iitXFBHuESV5wmQHT7t4RMnY",
  "key3": "5Qms9myh6ynAeh58HByR3KVN5GM4KhYpNtaRLLPXB6TbAHUkjvfuGfcBZnHe6jYtWMzuhcPBfkXkT298hM79UR77",
  "key4": "4gMewDMZHkWa7VH2admdiFciRZSVDK93UdR2mQap7apfvvJRqsBtp1TBmfutVJYui3FQB5Cnza4Sk51nXUAVsLGm",
  "key5": "3oUCjLw9vdBPTT6j97ScgGJf7hP3TD9vp66SMVhmWQDE28o7VnAR3r4v3BYbPqm2ZX4yfmZG5cjCdp1hPzdN914x",
  "key6": "4UoDTqBQTrQ56zbkFCETF1dzVdBwtz2zDsHUKxzAV5d3uw7zQGb211FnU3senD94qfBFTySF7EWEvYxF8VTRNrdh",
  "key7": "3vQkZ8jCjUgvdGpi6aDLA58EGS9mqzA4qdEE6qGgg4F8yHautw2jDRzRynWMVyAmzjYnLZLF6AUYNCqFWUDTcsiN",
  "key8": "RStJsGiH3HCDDXXxnUQdesVQZ2nbeFHdqbJrMThuApnf2A9F6QyByuh98qyHpwGyzdjf9RuVsE7v7U3Xjk9XMYR",
  "key9": "e3G6fmrBqbHeKikNxgoF9M24xYMTK8GsnnAZr6oxGb1TR4tcmWKrWMHwJyWGsNSpjA2d3su1Ka5SsKVD6ZqTAMM",
  "key10": "2cUcmZFbtRnQwdxWdq3ytpP9AuXB84dJZfVxNFM7Tdh7gcavMmJDoNFaJGqZuqCDRsd42enTGs9VvLpcdiiyDB3F",
  "key11": "3h4Ai9X49ng2XQaXmXcLMY4rMuVNfK4v7qTfE1gfQWjP2d1yWCxbQXCEjoGrq64Um3X6F2DkTTW8sp92vyM6n7dS",
  "key12": "3VRqocovsVzobHQsDw3vzCQoWHqo15yp4fHdWkS9G63HLZKqRqfDyt1aK5F6DNa5Tmih1JqvtoUr5GdFQgDcsPLv",
  "key13": "5CPAMS6D6YV5VrXitwoxgP7oRhejhmfitjZmca4ZiVkcaujB9eh6jwiMT6zm6HV9JnsqFr8Q2g3fYwLohmxi71fp",
  "key14": "916F65q3UH5VkSgQecttdb3x6qx3SWCKopMpnAmnrkjUPU5s6REApH6SCkuHnr2a5a3GRE3Z16NrTHBXvhezCTA",
  "key15": "FA5kZZNnL3YFvcRrSCvg2BBnQZ8nWFESoiA2Ua4W4kzCQU6kwqEqdZqJh778CUDhaNboBRJ4hspyajsL13bmtvm",
  "key16": "4MagJ63zA5TqXqaM18qu46qceDYHP6HvF19p68FNTmAaCCzgufL4RjTizpSiNCR2yMsw8LPp3TMJxzZsqH5hoD1P",
  "key17": "56XkjDAidiKi7kkBDEfpNZxJma8HQzuKuWVw6BLXebbtNGV7r3yxTdMuvnQKcpA6T9jkVcWx64gAyi9K8vGT1x5g",
  "key18": "5G3bWf26Y6UT9JWvzZWB4gcPD6Vy8jgVajr6jGUXLhag6QMH615wkNXQtgQd9YA1EAL6DYsW1Se3QNkvtq7XHmWu",
  "key19": "3T8ApAWB32aNLme1nTde12sFXfYbG1ZUns1h1hLiVw5p9B8Qkp32d4Ap3K2U7v9uZJyF5Bh5adtkJf43tLY63DoS",
  "key20": "5JCGSubCwKPJRUqYUp2XnYx4NtLhTo4K9T6icBHcvEupF82NWdX71ayKHNRpVK8n2KT6MBA5y2B9fyn1Nt2SmTGd",
  "key21": "E7FfaqjG1ADrCVSCDVrz6WymWUGbr1LHpJkEAdFp8Md6WERd4EqZucjmqCAV4DwbKjpsWnsKPcyob1XUQvfzb7h",
  "key22": "28pTG9EtbbNGfSLavhJhB3miidgBbDhgAYZepyQ2iELhDWCUvbGL5b3ABCFth9Aap3sKvwGwuMNf33QN1aJVLahs",
  "key23": "8Wqq5GJHdb2kNhRRcq8Hsn5uMiJiBkHDjXB2JLu6vkD1dbUSJrMo1gaKhJjCiphCKxb5CvZJcYxiw9XA4n2trDF",
  "key24": "5GeHszYBp4EMPXFtGCD3VXHB5A29cAsJqAPanXC2nNJPBDdBsfgkyJg1HgYg9Qj9vrpegvCLzsgw3B9Fp3j3qZ57",
  "key25": "5Jseci5EMYgjhPpMTM4etPtduTuwmxJZKATzQgKSHSctxqayxZvbscB7W7Ry8YkeG8yhzN4TSeHzNDEs2WT7JD4a",
  "key26": "sF9WMEZ4oxxLNef4NUMjvbGCVmuqjoUy3Cq7imfeJJktHC9HumaaN6rFTFEU2C34q8oJNwsyLghoxqxJu2UEcji",
  "key27": "wuK7ZDMEUAD4KgbJH1TVR8Sk3kQm3Bj5wcgeFTh5bciwCEw71CSTryTmg2iTmTCTQ4eB4zk6otGhoMkxMARTdzV",
  "key28": "3wvE35Ykn2NPzJuunnSvGY39cDDtXfs4CbbpAYKzQu31J11ZgDzztYjzuA4MvVNHQ5M7oVt4WQNbZHC1WDj5h3zf",
  "key29": "2rL3xgYtWWwgG52zDCHXErW9pGVCpepCxcDxxb3CBawmEa3s5TJXaCP1gz8FDbWVQNf5a6vYNDYzJRN4YfQwg9kx",
  "key30": "5bWi4d6AMVEue3ZDk9gPZxTqBbofzwZ47MLcDNPGuAnPkfkyNXTT1Cy5Dc1tToTvfo2Fid1eJBK36QKYUXBoTPEZ",
  "key31": "vGkKWuDcSEBe2vqRUbqQUDGLjRe39AKZv9NSAPo8SwGFbEAxs9MWfCarC5oDnpoGtmXSFC1yEBx133E9acSDbwM",
  "key32": "58PaCzvW1s44mQdnBYt3WmbydCMa2foN4NFiRgXGeZPmdPNEyL3hukHLEDcZKgTaFDU4XUjk6LT7wjB31oYBbk6T",
  "key33": "4yb3SmjV3bMGkyZr8MxKVgbaRrzTNgYP5poS26JWanShDJFagxUMF1TqVQFgsEQwxKnNZnxYtpDUyqzj9weNFTgc",
  "key34": "3pv2CR2vadoX3yYXj4nBHthqHxFwixJ31KDzFEDX6i8AqKrEijAG45LDiBFtVsdXQyHAXkT6hLFLxAqL6dwqC6YZ",
  "key35": "GhFocAPM8Bank3kPB7NTmHuoduwXKawYEEguSAUqVX6AAHeiriiXrrszF9Sj58UT1M7KjCUztbqHq8ZuMrbq4ds",
  "key36": "2hMq2V9BkT15nZvvw2z1UrQGAYG65Vcs4GgpjNCeXc9R8hfZSzdZprm3JbEp9b2SartiaFG71tkobtXgttiuJuUC",
  "key37": "y8oJC9ZMVCamzQEvN2bMpRtCt37ixWF8d7nM8niWrAME8sTd28Nc9zwR6gXdjdg12wen6ryDGXfaNiFkrBRpqvt",
  "key38": "5EYMYrPTXzuPBUUhAssCbpp5YzDzFSbdtQtq6gJ9e6EJCnHVmsS5pQBXjQzJTC5CLtYtY6rUV64G1bxCW6kthXPC",
  "key39": "2nvoxqfpf4NrWJDJWpHhurQGKKGsb5Rv7aGbkZccSGpHNFh962JaydiA5qWwPVxz5thaiu2fzC1dG4eSCR4Yow29",
  "key40": "3HxpyvtEi8XZysYqowpSEUN8ZMm956qnMuwm8jot3ArV35AEYYmjqccL3FtGqt2kiUbtTHHX2tnugd6fXEmsdM7T",
  "key41": "GsM5Z7FNyafFTzQsPA6PASKGy4uky5Y9KZpewdSAhtf4uWLwJjZLFaj9sxRyV26hDD8XnuwUgnJRjoq4VrXTHTV",
  "key42": "524L3eCx49EcV1oKhmw6A1fzjBuyZFyXHu1RvtVP496w8VMC1wDuXzfGAyM45QoxmXVRiD7b4DqBts5ZuWAMq46A"
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
