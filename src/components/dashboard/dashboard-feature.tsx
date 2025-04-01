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
    "3zWLgsE5aGtLAfrABG2qnmoPaTSdxh3uFxMfk27emWyCc3jXozWqVmVsiR9AejthdakcBi4FkixMxE2ELbhLnbeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hof86CVv3pFyUSWpNK5v3E34u9ov1xUybCXetxsSReuhyzBBTdJm5PPmD9LdTkmipjjZqHhCDAtRfL5rPrDsCHJ",
  "key1": "4dp7J9xj56mkuQW3oirSL8STCNX4B55SGtymJUWX1U2qpJizVjQYSaqKhUv5n1chT7p5n9452fqcW2wJ9HME3Tfk",
  "key2": "2y9QjhcSWY7E72Yzv7jRjw1nCA7N2QyDpymLbP6c9Lv98Y9gsRZX7y42Y13amDW9enxnu1zUuVc9h8DRRNvkjwDe",
  "key3": "5i1srb4YMmXtfVUG3mJEWA41E5cUsCZNMKcGR3qjd3V9C3toAJrrdHxmp6FvgjfG7zXKHL1TjEGd4NqqV5Gafo8P",
  "key4": "37Dhd49tH2uGT2TJd9v6L8qGDyDH5a7xGkzzvrpZXnbbdR8aX6rdomJRhLPGsJ1DWTvM2Mzk1tyd6jYPs4ExG6wx",
  "key5": "i8QmTLqjffuYvbHNuu8mjwq3XZ4cp1oiRweD2h2npXtLCPxfgUQsvYrJRcurcFw4Z7btD7daf2BSRdgYVzefLY5",
  "key6": "61sGa5bvz9qcbikZ8Tz3h6xo4i6Qxy7R21e2zFyrBuh31AujRrDWZashxbR8xvz4PLmkcVBXybnmHRLChc4MkA78",
  "key7": "29XXzaWTnmPY4Y65AmwG4u4jePXmbxsmr9tdhrDKQWVbC2QJSCCik7tJzFPtpa3y59fH946QtHpYSFVXpaSbyoWb",
  "key8": "bM67ShZt54Nc9QEz3FmcYWmYJJzhKqADF1XFU3xFjzv5q2ocvW9nnKkjnULPRbsXkQbAjkn2AzyN7VyweiRSwgG",
  "key9": "55KgR3KHQaDmicL83nDnN2wKcCeekdNH2hJmiwkJ6e81Yuo4behR34rLL5NutWNNbtSBUtb8anJgrvYgMq7MQhEr",
  "key10": "YGjrogeADKHsVtZAFSNiX3XTr1MMaod7hCDbGeVoKoD1WbroGgooM3kuLXo5TyWTApX4dGDau91itRV87MaHXmn",
  "key11": "3e6zSAzkG8mb5tR7nBDwDtVEuy7HEfvcjUzg1zqWeZSn2aevuEj49oBf2H4znGPq1iPBj9TSs42ur68AWY1ibAbw",
  "key12": "4mWp6358YrFFjWo3PMYwcKLhfVWh4vzhQDs8XHfb48Zx8EzGJaDcE9wUiewWiKhjbNJhiPKqzvF9N2Cat5zoxaYV",
  "key13": "4tcDURXPxmzpAAFwELUc3JmbDMFEvKDrgymytYKbVGjLf9wBF1YVPb6YTub2u1D5SyMhaV6oiHQzAb1JhGsiKDWh",
  "key14": "2sPUtiNvRm8pH1U2mP7kYyFMHBzVENoMGiGruffs1SP2r6egnNjdSWpr2YxmsJt8Ddt9x3PbgvUkNFg6hAtX6Q7r",
  "key15": "22TWiYfeJHufeQimdui3tuxDisKu4WnRzaCs3aDTiv7mzRSygFC8VruQy3GZ2SYtbCTA7ySNvUXSyR6KSk7CmQaD",
  "key16": "3C18UsrBvaaorUTNcTQiU666xJ7pBckxN6jCiB8Qurk7ANutYv62Vo3ciE1yygJpiVmcWV34zjkkNAHBJC1WKVGr",
  "key17": "4tZLtckz6GtLFVeZzD75yrY94mFWjv6ZdKZcHgtyEByERbVvVmfiZm9K1vH2ohtsEEU34WkA896wX8s57FRjpdXm",
  "key18": "3jGmvhEXJwM1quN5qLSbtFn2LqJ6cv6ZBZkGc7meojTRHmdy4GTZDSsHcdYRAND4WJ5NCTZjepR6cVzSYJNssRR5",
  "key19": "4j7GPHPUZ1dCjARHUtHu3s2XzA1TCa2e7T6kR6hseLEY8kR8HLRy9gS5JfvYbznY2mGWrLRGtV2xwJqSFeeBUZNi",
  "key20": "5RbJ7jsabaEMW7JezGa2GLM8i8bVznHm7NWPeZTSM6D3ydboRWadozuEMRvnGXSJfY2CgwLDamhw5Z5yWzbdShP5",
  "key21": "2HH4MPQ4UzAu8Fr9R3z5RHyxytcra9gTnHLd8gQ1QU5BC9UrCTWAZbuM9gWRZNSAvTjihapUVjbVfdZC5u8Y6puK",
  "key22": "5aq1uCRAk7wuedbqGFmc4TUdx95aUjx1tCxFvrFDzsbpDBCrW4vre5GUSupQXwA2KaBZTwgDaaNtUUinFywuAGLJ",
  "key23": "4N1TJ9hFHCgxzmY1A68WfVWhM7xd6NpVN3s52R4EK3GepXrXNmJtLreoYXez74rCHYkzAmE1uNJ1oSdDag8DnyU1",
  "key24": "3aiP7FmiJV5L5e7tKtttRnpnNPFTsiEMnYMD4Jsb1U1KznhXVhFod6Xb9cohsPrewvviNP84s9HyAC4fATpBkJpJ",
  "key25": "KQbmGD5WP4fJF4SSjpzahFoPs1mnwMrE4mvqStfGtqGKpa4FFKzMCu1Hbi9rdYu6XtZcPzMFVDYCxNvkGwTRo4s",
  "key26": "3i7SivDJyqPtoR8qTX5AQcGdv2gERQdggLrC7zx6JY4cbqxag9C8GgTthoqr6f7vZxxmRx8WhzaW2gcbiksiG88Q",
  "key27": "4VFzgeijrjStLUCLMhHs1LZCg2oFktarvrWntFHPG6AcA3PAhLmcemLrNTPew1HSyAj4FUcA2GQduqFwfxuXoSNE",
  "key28": "4mXypMvrBa2vVzUXzu8j8JmMedAV5W76qbBAKMrVKNU8WAJxoeFeCMEyBuueLH4YHp5ooLEtGXBGt4mnvCpaa6RY",
  "key29": "wu2zzyVZBe77GFyMJnmbf5KLwRZm1q1ThHxiFrdjTEiEJFUVMkyCvqxW3afYnu3N3e8KQsMjN6Q4KhpoV2b9RoQ",
  "key30": "2KEDeZUmJhP9scptJmW7ZfJHZLZm4Md2Mq2UQVZWAnxKfkaMxDSyXYHecm681zJaxzKvW66KD7gcC1cKcZUDksuo",
  "key31": "VaqvRwDrAmuxCxC35UWF2ECkVwLY7EtDmUsjMLenUXxoYsKQGU6ncwJHrbCM1HgTjADzofbAZouNAWvzmzbhs2n",
  "key32": "wVfyVG9KVSXGNd5pyBLiGB49eYYApqQKtNfonKkShQCwTrdEHibudaTKZejdXWxtCgh4NaXXy8dBaoR9DCaDm83",
  "key33": "DHMYeEuJLxb9CkGW6Dh3iVdejUQd2JAwjZTDc6TpK3XfQHV2VxWPUJdSirhv8jAaEvgq1MzTgN9A1B5XqB53bCD",
  "key34": "4mzNW11xUR9iD55eSAU1ajTvARhfCPLsSSHibFbe8C9d2phxWMEPGdA6gjK3fPJ5MH4JMmCJpu8chFD3qn9HUmmt",
  "key35": "3CZ1woktgqwesuaWUrp7FZJpM6QpVqHtT3eAiKyq23QhYfgNvDNXDLkQseNtgPy3wjvsNfSQdE4bfDCKxSFsHdkv",
  "key36": "5nQ7hf2sKf1rEKCCBY4pyNScvRMaRba82uYZjaj9Gvv1HefBYwBRAi2c9m7q1muFx2r2pzaKkrjNyXSQQtGBzsWM",
  "key37": "5pM7cNReXF83GJHyqmHZuVKWctzy3ggXarEyWw6XfjNtEZAnWLjrkf27Cczy8sT4XF4jAds23k8oGZugggnbBXPH",
  "key38": "2AcDYCGcn54KFML5fNyP1RKbKMNoiHuVvjtjZVgKttW81GcsGVvZpFVAJ8ABonAX5bXqeyGmYJjZBUCak1UnNi21",
  "key39": "4fQJZoTRix7cvYMgZqRaYgVieoPDeTaW7tZk3TNfnte3fF91BEqYfdydfziqnZ83CAwc4aP18qXdX9qMQyXLaZin"
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
