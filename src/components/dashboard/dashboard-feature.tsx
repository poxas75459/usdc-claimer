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
    "K1PpeswN1diotMs4zKpsaTkMU8XPXZ2RNVUPqfKWTPwVWJKyTaCeeDWGVyxjwJQjJfAtWedFqdSAoYQPNi4cRoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XF1JNen9spDTB221PNbHN4JzTQMbBRPrsqXmWrEujkQa95cYQ3s5gRLVkDJC4q6aN3fqzcjAxiLnZwNuGD2ZciU",
  "key1": "3XfR7cW8SbFgwnHGJYNF2Ks1kZni51N1AP5vKdCGHMxTfVzSBZ3WRubTQvSzk7fxqac6KEVw8AzyK1MQ19SG8APm",
  "key2": "5VWm3NCcn9YpQBWwUrYrTeL9n64HheQY8pAeAdKgcaYStDuBdzF9ScsaxKGtY3hegjVWiLA56uFikNm8y4fZQS81",
  "key3": "2Y4H2tgP3bP91T4TxCm1QDYQCV4zYtf93NM5RH3YxEVdeZAziin2zmbk4mvr4bJQB21HnAbALh7bun5RhBDXuYAn",
  "key4": "5Yifo6wAaE7QXqTnSbm5Jkj6kBjbHLUeZpDRX8FKrHFkqUTbJARuYEknSXc2oNusUxS7ry9H5TKsD9NMp3bu1dg8",
  "key5": "3Cb3X1oTCgyopj2c89vF998f1saFL4e6Rh3QQeJYFAduji3m7iotuqiKfmiQutvPRVSsmqtDt7mVkmqzyTbiQRvB",
  "key6": "4k6kViufKtn5N9uLAUsudTLJfHMRijEkhN9VFFxtxDgurTKveA3EqZfsF2EdJKwYzrptZzsjtpZ2s1cf3vCD6qJS",
  "key7": "3hc3awQ8i8eoUwxkcu8B3DrHeqGRKYztu6fxrxhDvhNhNdnhRT4QfpnvBFzuZP48MxAHPz6LdTmptMbLtb7NhPYb",
  "key8": "4V1qHm9cnCPZJbj3NCU6icwGLbJXMDXSgeYpRTSjKfCVNhQuFaNTyaGNwWVSnzxn6bgGFiBvqLep7TvRobMAbVMt",
  "key9": "3d1VBamzPv42mJrcQyQ6K7g9g4BGkJK3aWvdQanyuDgQZRNifL59NGiuaJe2MEPaWfBQgYwNUe8iZs7ztrueTNQU",
  "key10": "3g13sAuXCV4QAMMEtAPGzz8XXQfABu9FTXebKafRwUNF1GbuJQZqCHtfTjsvXsMQWbaZengWJ77NHEoit7WMcdiz",
  "key11": "3GAL3vNrbsTjxuFCUUq1usmzrYoNiXWkXZeRdSfE7LCxwA4TtHG6YB3zQKytTJ6V4QUSKaM6EapZqSntcGmp6bcS",
  "key12": "2LJBFpVg6RUazrzut7D4cWfRt5UsJeDzutnBFD9ki3MM2a8c3QAwG4zqZ8RczTA2iLVrCnwqLvgn16wqvDQaTTaL",
  "key13": "5q7bwB9rJkxWcx21jGe1xJu9d4tkrUtZcCZ5A2wgKnhzWoavFvsVp6nbuaPVhpZBjXwqWkQhbR8uF7G5F8F75Gys",
  "key14": "2dDYpCRuzDkTgNLD82UQyFoyah1PTrsTpmbCfZmDrhXEc69HEB3zC94oi9PNRmvfuxVpgDRTpEhzMUe3YhHiLwHJ",
  "key15": "2Gy8eoipCgGYDnrcaeQcrxEgUBWAJwvtcPDv4isRWb6HtUdDcds6VRUazhbzpTAquR9w52NWnwdypZ4BcJ3xvSH6",
  "key16": "3G7JEgLZWwntSKQSWyP2Ckm6acyjZ4tD9Nr3PnBTCHiYFBb58vfKsfDF4r91Vdgfv1NjvyM5c9AEz1JsWuKVyxoU",
  "key17": "3U2dNUiqwuPGzg9HthTmXEXGUWNviTYgVBPN7N9JvF57epxSZ1F44qiFFLzmr2fcGzWnTxmgMH1gWxqD2SHdvYuU",
  "key18": "5Z1r1vPh6RPi7NEVQQywCfmmFnBxC6XyK3Kxy4Ce26dQQ1qKZCMyvKmBGVoVRF4AxbTitYMPqJccN3UU2tMXW7QH",
  "key19": "KRLLAuzXGrUG4PNvNhDMSEQWKiMHTDD6YSrryJbCy5k8F7jedFTonv9ntevnSvoar5gbCh6QNaZ1kFsbV8thXaP",
  "key20": "36k3qWdo3aTq2eiKtq1bbcGStfvUMGNiiBmCAciC1ki834kVHZe8nzPwe15cuW8N794q3XNx4HSANwwN6V6f2ZYx",
  "key21": "624Nn61zXVZtiecaB2KMxD3YExYAAKYo6dWqeLmFzFqcjPZ16jU9U6dJEaATGbJWcEtAJMP7aCRawMnydDPpjuxF",
  "key22": "4SiviJBubdh1n6CdsjjhNWy3JhX1uYEdnfrgmbuurry2ew2EKNyRNkyGCDDjvtbqWRD8LxZ9rpkcJdsvMv1ai7Ex",
  "key23": "oK7RhjokJs8vXPvbHs5jfJYQuYKCbnbLvnYHxq48h8npvAo1Z7EDAPGbTSpvG6MpVqe1SFCxaMbVrcfVjpKRb4s",
  "key24": "4HKUWKSmQWDHoWv3v6Nqf1xkoMY5V7AsMqFPzH6J7BPjWp1skRyNJUXzWHAaK35WjUyiQGmiHPNUkZJMGi33CKLm",
  "key25": "446FftkdZdaqnpw5MczknyVMM75vBGt726ZD78TKJJjNEYaVCH6sCTAWZYDmoPRg3P5oR8DjHW7632etsMxp9ybA",
  "key26": "5ckpWWZu7Af7P8SpSwLpxAtXvNz5ZsuuTeCKaTKZDTGWSZN5Xa86DwCKYWqiQuuQi8TixSTVcdiqd2xLnzSUeQmR",
  "key27": "2JmEJAzLmyrXSfTDSGCNAfSbJ7mhbW9qo7uJQpgcGSBGr7yzk2awuANDzczEpCiyXrhtLiadnFHqfz7LVt69fySv",
  "key28": "5uE2PPokMGNGCojeZpcsMkM2xwDgGNEGrvazdk8kTcnQ7vFyk34pXCe24a1FmFVwZQubJoVQncno9r6zCcTcWCrr",
  "key29": "2vih3DHtSoKMKJZRdRnhjZWbtzhXbFBjnwsy1u3mQfQSgZi14EUcCHNrht21MgnB9SapFnFGHL6qH3gU3Yp442Ay",
  "key30": "5dqmFSTUHiMwzobMUxdNyrth1L6A2Jbe5jM8jLVxqTXaqAR9DMNjmD6TKBf9wNjUHZeFh7CpfwEYY3TUrQ27ac7m",
  "key31": "3qZUh6Ni1TptbTrxEr7zs6RmYeiuTr1t2tuixJsJyB7Tn2Ki65enceBQoT7jvc2NQZetpnVfN3SaFumkB6bNimX1",
  "key32": "4fY1YmdUHkiV62q9hK1g1pK1aPT3PDqs2KSd5BydQmzvpcegcTW2J3os3cVWd4kY5fVMo5UPFnSCt8VdfwKmN4Ao",
  "key33": "wZcpQ3D1M7wUTPMnRQaDcBTevhs4ZTueH7JYEg18pFNwKSGfWdbsRi37bzn7xgtVfMFttX5ovfCJv7mi9jSR75P",
  "key34": "4mTUKcb8uCjNYhZPcRidcNvRigpvthwStkhFS1Vdj4i5h3a7fV9ZfwLxwZFP5URhpXwRM2hSKh8yPjKk1qJ2EhE8",
  "key35": "51XJhLUjiLzP859ZeVQAoxLgcuL7tzYVE8qPowi3QdfTeiNgdz6mfgMKS4jrbURHs5Y14pSmtWCQ9e6BfTs4r3Cw",
  "key36": "5VBCpqJYM38mbRJnJdR362HHpjCmVatihWP2gNCRbbDBXrvFVVsKQjPYAscoebRuu3pEvbFxv3UViMr3CUAeSx2N",
  "key37": "2zt8nsLB2cBkjpTBdrqtCPM91LxcUnPzyokBqYt6NegGMeARpFiVhTsAKhE2id65yG4AEeY6XpV48EBWDfEF7jRc",
  "key38": "p6J4zohnRePForS5Zh4kcki6d4TY4f2uWKN4VJEd6KGJAu5YzrmxV3EpmHcz9z8reWFs3gxGDNaJrX2mAcMVN5B",
  "key39": "MoHTyZxr23Li6bC9KeEeb89XYD3HxvU2KNHpkUgyr7wAp8toTWSH2urqLyFKvEdHviEV4ofpDM3ewf23PGrGeA6",
  "key40": "3xgmirLARKjaGzNoRqc83RGpuFEvA5F7F3Us9XY1cQ8qo6p6BGRS5WvYtY1nAbX9exymQtZ7zYAJMJimbkrqABrm",
  "key41": "21s2aBibTjxJEKjd4djazfLcXjeh7yXnn85umVR88vNFvSxNubjmMw6sDpK3Jb2nXgMG5uzmM5r9s2b61MVeZM9b",
  "key42": "476S2diqXVXM2XMm8khWtxiAPkVZgJ8PtGs4HGXUytNBfFTZKQp4gHk1ibpKG7g3WhoAiUneYcRKX4Hjpu4FxVHw",
  "key43": "3oSWBRdYaWB1FiWXeFPn7GXyuQcZwxrm7L1SjHEfZTUATtz1GMiaFSTuSUX4bsfsZUpnC5LeEkRxs93gwAg917RX",
  "key44": "5huLHwZtPSfiwczCBn93VzQXEqEtAwuT6vZqedgt2SaRMjGAmsePRdNU9vkspn8KRk2a8iuwF6a9E8u6cbD2eZAx",
  "key45": "4EWuEkBAQHZEEQidL3KTm17S9arYeZ3s8Q1soVdXzxTrBrjc4zYB4Jn5acVoePscTYQQFuxJ5wQZbEJRYXsMz3KK",
  "key46": "czkYUth58kYNoJHYqJdzrSf6fg29gFavACzK2AMpAba5y7o2owMvjZBrDdzCSvbWBZ43MSrqqJJS7DWJnDgrcUE",
  "key47": "reZjg1LVdwkYkUGZ9gQy7wxPwYo3C6PTHyoPnGho4az3LCVmFH9yF4JtsYymYQgLmWTWGWu1CB5rN3on4PogsKP",
  "key48": "4ADqYyc9f522HfEFqT6t5Qoech3XiPxWQSvpUNqz68pJqd6yfzXW8XVLBKNxgat4UHZVq5Mryt74S5EUsSVqSXoU"
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
