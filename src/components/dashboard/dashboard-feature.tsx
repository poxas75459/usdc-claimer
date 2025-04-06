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
    "262EGCpLAj4thUpTiQJA3GaPD4dxxDFBjbvH4pXhp6moLUUc2EWXVmqNAuptZShUnMXw5Kx3WfMP3fQUBbrrRLe1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MF9ygKpuqSX7jXSt5bvuBFUeNo1BtPYCMSTUuR3XMD1K4FUMnZQpa4QkPdPgcYkqhGw8MT4Msyf5QFp4qH4e3KJ",
  "key1": "2f61fZzR6uudwYjkZeM3jqtDF1TWD8et9FqeCivdKzHwiedNUqFXk5YsfSKBoBxgHjbAwrJNw2itzTZ2jbKarWPC",
  "key2": "3LyduGo81tHrhsQzPp6deBJSiafr3Vg6iFRJiEoY7c5XEGWLKduxhReH91Ar2LVr31PiBStBCYqkminuv6cnmSaG",
  "key3": "4V3QHgmHkmhGZnCULsuY7GFe6mHhrS1vQmsJm5MUvqKhf97CL6fXrQ6ygoSMqydU8rUELbqVkQV6B95DyWTDWKSZ",
  "key4": "2JXzYwY3cGicMJQRnsSi74vpJAV2qm1pkUBzhvxK1p4Dn1hoSLK3XUpNu2Kx68gHajfG7SRY3L4mTeGfrcAyDTH",
  "key5": "4LLPLaFNNCWcnoFfBiT1PrAjADvmYsvTHuBBo7dy6V293zekMaXVYpL175ge4xH3ZCZ6RhxuuyAiYcQS5VtJkGR6",
  "key6": "4H5wW21SpZvDfRJ3hGyaEwgaSyMkCJ3W2fjKrHDv7oc3mCeRzaNFRycqnNYPhYeejJTE7tpViPpsBX7T8ra2eXFK",
  "key7": "5kvPuLmML5PobJhyrVNUmjxGyZWXtBCKwnTW8DX8wisxCM2jNqubPN5L7hZ829Pw2R9DSdnH67Nj1i2C3KjYq9Cr",
  "key8": "Are1EiAHz2phgouEfAkJxA4274bnCD5yfK5xqBG8KVc3pUaxbegYXK92RKkHxsTvWvRTfZixFLgmDFAjwmPQony",
  "key9": "3CpyzJtbkiaVgrJLmoZ5f3THgkHkMTqs6u4qMYvnTAnHQACNqHBhNocCJYE51hyM9BuBngfsnha43sQjzojuow9d",
  "key10": "3vrR64FKkRnUpU7bB4DxRrapUiEvaqFcaWnzRnaC9sz9jXdwHQJgLk79Lmzo2YfHGU5PN5Yw6k5DSKSxFy1Nk86Z",
  "key11": "5wvshV9cM3QbwqC1NkUyeiR7UmPoTXAi81fr9KH1Y4fBoZhekCfxCLyQFx4nk3mUtu5K9TdAKz4J1r6diB4zziYj",
  "key12": "3gyG61rUcJTNsaELM1ion9CEYWfW3HQ6B6aPMmvZn6PFb1PivpCGC3RN6iKqoWXRPfejqyYsYyzYwRLZvoVhPuyX",
  "key13": "momVodCxj5yWDxF3zywrSeGjcEqJwDDxQpfY4Rndbm4maA1C1ASpd2TCXZAqxoY52m5NTzsWWMhpM3qxmkvmcpL",
  "key14": "5rz7q2gjSg5vXVmJaFcFkJCvRgopsCzGd9nSQjuzHxLCNM6T5ikR8kcPpP317n6BHkqJDC3a8EkCnrR1JcJZ5LT8",
  "key15": "4E2rL4x9nk85F7HJcgLue3ALtVkCH3pnfj71qEgKb6RoLZvSaAfMSVBmPqDR86LhJy1BLiDaNbLUmNQPyGf4m6Lz",
  "key16": "32jB6wBhpXZSuzpWgPYyYT5gehUBbcSYFfL7quDZDcZgtF5z9w3PZeu9XmVzP6ptdCee8ia2yCSrpR9XGn8faWSv",
  "key17": "5UcJyWy7o3zEW67wb4cktffY78SEs5qCo2M4nD79PuiP8Rr1BDmfrpz4Pwgr4Ut3DqrMM6tytVtUwXcztoB9iyfu",
  "key18": "5LEn8nQuUi7Sa7Wj4SHBi2tJKLshdEtvVceweyQzkZRYx9C7uSZrdkP4zDTkRpXKZ4t6VzrP8Xiga6Nr4rq2jbHN",
  "key19": "3f6xc1ezsLeLCaXZbuk1brymwdpkY1CZaW8AsP3TrCSY56NPoWhw7Fyr4EmjgwLcRBrYqqdTn7yCqcEYdxb7Q4mq",
  "key20": "5vZtppkbRvfTYBatBC23k3bCitRjFa83bni9oc4a9ixnF4sk1dWMYguPeZ2A5i7qHwbwevPwtM1nhWwwAYijVJEB",
  "key21": "4d4HtENegnyYhBSY8LMyi6WLQddDirjJCvkfpzdmYSfCSS1j1e5Ny9Djjz4x45YWeJes9EJMSGYQGwTPvbwTWKR3",
  "key22": "3Zd2umrDYe6MZ98kwEyTsE9FXs1ZQ59qpSXwQk56yKUqACDY6fWHAmjGNcJXn2PJMJNgpVi18qeWTqKs6pQMfzMu",
  "key23": "2gwhHccnEjpkMFNEPmRsDvENGzedYg5MZkbH5WBPPEFatHRBdAjGZYYqNGUjwuoG5duDoKT2Qu3XYY3fgV54PJ1W",
  "key24": "2HrgQ8CnHUgc5zi8giuYguuRwbxqBDJKjY19VTM4zGKWsWDJnCfvSbgdiGg2idgQPu43ez1uQm1CECE3g8TNLuB6",
  "key25": "zGa3Na46MRdP4vbMoj2gVJbDa5QWZkyVXUzUQGAStGmWmutGhKPCkViQSAjxhYYtrZ2MaPGE41Z7en7Gos1NNFv",
  "key26": "4kWKn3CPGh7KCnwU8mFYmc78Dm5wm2aPXrf6r7LrhiF452UeWN2JivgAdAnsHPjknv2kvR5hUJqudxMdjGutEJdn",
  "key27": "5oV8dK5R12q1dTAdncP7sGrDPLcKNRZgCcR2AJN5iaHQaSYkCUZMHQZ9a4dSYCw24werwrNmswWAiNpkeKZ3qvYE",
  "key28": "5Q2iZvjNQHXAiacjmHEv9j1GXTC83MszKRduiR6xzqXBtb9A4AGyfGQjSr6s7XisWyh168fvdfdQuxue9TNPTa4r",
  "key29": "26zPRRUEoTT6wGQrQEvjNrQBu2LRKHPVbx6RCrg6hxVzERxJeQRNmLG19GfqDgBmVKTRxhUrHRu2ipSgFBKpXLcV",
  "key30": "w1qWhWq4198KUVC1S9TfuCGJi9PEPXfACnoS9JiQfzchcV4jS3RAvUyhLntXryS2y2bMq6yGyMNb7fMk6HehxfX",
  "key31": "3qMjjcBDSJiTe6E32GmRDX3k2ryPvNjRMr8BvVoBssV4JHrxYSozT8MtYBQ1zMhgU3KNsPvua6XpUi2UrUvYMUn3",
  "key32": "4yHMyY88RDgnsDcgqaxX5cEs3svYKB9jTayuwXCdyorp2WjJbFtJmqszR1761v1vFxHRwB9CAt9aGUQijUCefWNw",
  "key33": "M1WkPteCR9ukZb8yoiuoDx9vJxsYx9ngUPmZdBsbef7tuyKmfMCratx8Qm4HFAvVGpELZcVsocZRNDtJfLVRNrZ",
  "key34": "4rVNcbZXffgn8QfQeYqiFUkPopDyiUNezE3Tn3gs44kqg8WRj9uZ829b3u8rjDK1mnFQBXxZKoT4NVP6S12U4x7J",
  "key35": "58N3UqSBwjwe4RPp38F5FB7vVjFPTcGaiv9BXMKHhJQijN6Fv2t3yrYGxDtNnPuFsGCKVc6nZbMzmNQ2K7cBXHwu",
  "key36": "5iZp8QdNaYys6o4m1kNSXwrGy6ieQmCEB65VQJBuXgi8cPCnXQdW8gcz2YFyYzxPiCQQWNkSAYrWK27Y76ZEumKX",
  "key37": "4KH9Ym9JSkPdpnmpAJ7a9sqmdNQ74sveHpU52yZL2FSg5V1Prk2hbNcGaHiAaCC2f4GwD3eJn35DRHNFX9BRtmVo",
  "key38": "4o7JTBfozEyvLLfd7pMs6jR6jhnLCHX3GXZxAFdTt3TjR86FmXE6kJcSyHhFNbFyhAa3QpKH9CA3jQUDMcZwKCTE",
  "key39": "5jV7WwhN34pPWFS4sWNDTtFY97ukJKBZtDiyRjg2BnysRNcU8KdrMPc9iUD8nGDnyksvBPgoFW4eJABcrGuiVDD9",
  "key40": "5BrfCFVkLFjPB9JjWRiUi1dX1NhEoREroVLsfeJDD5qsv26DqnPmDWbigWBXKcrr459AFHWaQRYQTpDtxXDM3puu"
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
