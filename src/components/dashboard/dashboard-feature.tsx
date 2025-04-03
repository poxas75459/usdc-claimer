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
    "4q1Vb2G6iBu2Fe8BQFezQhzYrtaDbhFTQRBSLxm9GmKUbamk1NbRtjHibsnbHZcHmYL8RaatWhMCWjftimBCKRJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bQffa3huoipvV2r2sDBZwJ1AK3UJ5v8foJEnJEtWndMh4f7jKNcqjFtASYuZCwopyUL8RitadkWAyA7kRfvHszn",
  "key1": "36j8XRwuKWETMWUpFjHDuJ4FQnEn1KQELfwBnGemzPYrc3rRpjMxjFBPcKHLenatZ9EUPbaCE2K1DYzuSmv58H2D",
  "key2": "ticmwXxpEbXvixsEVNKDrvBCzTvC9BDWRXukLnqJXjeTvjjhJBXgWJajDvARpXosvvt3TGzEKS8VgKk2d8qNoDr",
  "key3": "3CeuurcPD9oyfSQdpBBGuPB6JrgbZ9mnu4MSTJMgtJjDwR6m3MZR2N9dFW3npiymVzGC9uw3FghqH51RCQtoGRoQ",
  "key4": "2CZrCgReoxtioJ6XXkKVW4ccWCo3nXr3J9tCkk7VcoKq3yrDFubf9XjerTgeEVxDmt2QdoTqNFboYNtHQ1ZsBwgp",
  "key5": "6ZrC5eYep7WdR6oXjMh9pqA7EGppytp8CgUiJ6JZmAdsSRaAe1oEK4irxVugegLntPNGPeiwRjhd9KZ1oB3pQGc",
  "key6": "2ComZi7EVyB1ajgQ5hmX2SLBySGJYJNfjFLLrP5svgQvB9ULx64sj5VEcjDSjhRZ2SnXWCkCntNB8vSsCTrtJeYY",
  "key7": "r7xoCo69iJmesZiNaVT6iP5RnPVqdcm7Zkkv9vCHfcq5vmxftrN5ziGjorJCUCqkoZbTZ2DkpftR3N9SnTcLckb",
  "key8": "4ucpLxDwP6Mu3m2sCpX9rvnowitM7WKP4Zhe9jrPDJeQw987kTUAuSFsc9gL8pNBBAjNfLQPKn52DQoRS6DEXzrT",
  "key9": "55iPCNCL88wwiJrN668RFDFM6GtxieAqAnUCKgpAV76bjkmCF156XjJEpdKbzJbazLsA7RnQKdpaRzhUi6XSFegq",
  "key10": "nrfbx2MECPxhvSKYTRAvLcjcbQzMPiY5mw9MPyrw3UHS5Smr9HT77mKLWYNv5xzqs5i5NTSkSZxKrPwZAWWt8BU",
  "key11": "39PfqfmJVeAth82snGXynGSYP9Y3tajKfRUxdFKwoWpsv2QWWL8hXA4NsZv9r2BpE1pyvp5eyXZ4cVQ2HAR94Wh8",
  "key12": "7C5QDYwdjHsSGmvygSTvnP3ceCVpjqm8hrb1E5j2ASBEA8gBUiqVhBsvy7hbZaDw6gK3f1dJTU4n67JMSRc1UDP",
  "key13": "2hfp9TiSZRxsvw2jMk7CVgcpi4hXALyMS6o9XThPeyt2SS3s17yL3znPM5a48DBrXNXQcpy88eMoGqxpfVC7769",
  "key14": "3S8DVMvUkPtw7KS354RnwAagb2VzKwukXuwcxDUPwLsMGJxwPsvpzvfGWtSCf3PmN1sChppd5wvhzv6PEypTpiYF",
  "key15": "3rJYPWinhtsN1xePkSiVFXXvYkWXyHQEv5V9ixM1FQC89d78r3cbWQDVYpxJe127ET8FfSQPGWm2RT7vnYkxgGFm",
  "key16": "4azyJyoG2tuq3rMzza6LpxXNhQ8xr6H1t59zDw986HV37GVSiq9L4DJP8fAF7xJg3ia6rV4WSYLWav594Vp8ECHw",
  "key17": "2fad1xqmkMmvXZK8vhHHiPvqk5ir97aVhQuCNrGcNRBwM3dbzARA3AdxyCj9mW1LQdk3Y4m3VLEqcrKhFPZxx5um",
  "key18": "n6WTWFnameB68w6BuwgbM2EKwjG38A71NNSgpc6q4cPfKu9hSK54XSC2na7mzcN9KJm2TsK7wAxCuB3c5tY75As",
  "key19": "bcLuKoUNqq8zcrhbT3AzfD5BuDTiBnPwFssgkV66bx8ma2yW7nV2cR6y9MUD5g6C9jXpU4ubmgJXyER3WaJZkkz",
  "key20": "5MywoiLymoxpZU5sejP4XAN96EW3MkJRehEVHJAGxnkiJ5nKuWWiaRPKHpo92gYR6So1WuhuZYryB5QcrGCSiyY8",
  "key21": "5SQHVk6sKqK8zLjsWccaPkSoMS4ZbWnpM8v3oW5GBu4Mk714P2K1d2tYTh6Gx4HXm8AXv3X2W6QguVXvQ6wpK3ym",
  "key22": "54YBVhnBkJjJyCWPBsf5NmgxPkV39d4hw9EEM1YuMmsGHnKrB4q6AKxYr44opZWaor67wwpJEkaBBSuFitAMfixA",
  "key23": "4u5tf1WtVP6mjeRq22uN7NDoodQRTXhQxaNUND2MWXn1XVq27dFe8W8jCNGQE1Qe3Dib2E7KHRjAfmJzHDjp4Uwa",
  "key24": "2qiSsTSBDPkZLendTwc6h84v8WFx3dupMcMAfUEMKTh8kv9xBXaEfhrfUgz49kNBfuXbD8QQyXMXLZzqir1PmL5D",
  "key25": "3kLo98mL3zQUA2N21RRkC4yxgegWdqKVXHMJZcT9J4U75Fz7ncAYLFE16gogdyuFmtGkjdFscVM5U7cGwM9GnnQJ",
  "key26": "2ddKNm2xA9SABc3kSR8gjrMD5hV9UV48oCuNfBnan6CMGERMz9kwyMnC36ZpMTnfC9wtAugL5yZjwQHX2eXf5yza",
  "key27": "66UuT6SpT7ncXDyw43r34RLDw7haXz7pyybff2TeRFuxZy98SCRpdWhCn4NYJiQQLtye2MLvc2ZPBPsL4ffjV7kL",
  "key28": "4ucsNT7vbBFJ1es1yi2v7461mSW6mpWgRVeqgF9mKTN5wJpdR3BY3wAegaJ62EXxWwb5wXZCAMHFBf4tr8JpeN6F",
  "key29": "2bT1qwMp8y8cGrTYWw4YKaJRKeERN2dzQGBSwie7wVtuMXPNNv7DLBYxzPMPGB4emYSAQUj9afSyX7RvixEe8Pid",
  "key30": "3zaFjt9bpkUoCZVjQPTA6AsuCmY67XnaMS9LWCKUVXyqMQXRUu399FUULLRv48r4UcBkNDKxEBSGhBen9EsZtp2k",
  "key31": "mg581puVpk7nDhG8mPB7gPjoAjMpXm44RodEhkLTzy4fJkEXzDJu6wVnCc7Fmkd2agoKDeoLSJ8wVe6bebkaaff",
  "key32": "5oBADJDDkPX1SY2SGJFvfew4yadEGQrM1Shs3WqTcFnLdYY6NXgXaXuqTfnFofLxLHqY2mtNrajoYKKGB22zCJkZ",
  "key33": "3MzjqS2gF1ydKWyb8HWYcmsPeds9xh14dBf3m2XV2g5z6qXr6yfjKNfdcvTPLNdPhQXPjn2QBk3Ao35Yk8ALPZHr",
  "key34": "3czYzvee1NYfbjQ1JXwiJ5HvfQAY93YDcMV4Yq8UDN24wetPBeNBW34VTqaA5pVMMZgeThkqjQs1Nn5nmTiFXoiN",
  "key35": "32fggASs1K92VkRLnm8kVrBcB8n5b4KxS1a3U5gXGxbWDzsiY26uHWsqMH3DnHVsg1jWcWFchRMPuLo1q4XSJn2P",
  "key36": "2dp2JisekoBTiUsgCPVicSMo3ctXVqBzdgZdmECoLyj7kbSVVf2kkyQ3N4bk4y6mTEBpQgVjbxWZGgtDNTyi9S1R",
  "key37": "29XHXX9z9XHNm2YeWTpG4rBEJPLngXvAPsG49k6bDoqbJLDKuGTGSo8PbYVLebAfFkPiz1Y5yfJtwoypg4yHnous",
  "key38": "3DfrPDUQBy9EYWxZeFvqJUMJyrbsMCTmsPDvqFwamR7UyiRVw7NV2r3HvdkFPHZKpkELtK9aXeL1LtjUh9oZssTV",
  "key39": "4HzXeHLxBuMYTJUWaRhcv9iJBYNkyVdYKbHMcj2N9XzvG8A7q6rBQx5H312sUct3M2HJ9aLS92CwNajScVk4TGcn",
  "key40": "4LcVqKawQvyFen3o4QtnkidTsxPzPkeweyv3XBvyZofk9Bmsz98dhuiVW1pG6EphmkAdpkh7isr8MWquLC63tEub",
  "key41": "5e3efrdabkxrENp7BPAHHeAPKVThsXkuhyrgk6HxiRyg7nVSm5pNTBiVP6tRANp4DfozavRvioVVj82vEswE4njS",
  "key42": "HMWH27rMV3uGaHVSkvE4A592Q7r92KmBnyGPyX9gb2B2WS4d8xW661Xpdrd1MCSkkMgBGYLvDrLYhcXdwVSuEzx",
  "key43": "21Mr5PHtKGokc1nLS6K3PrkpRNUWZikxpfoB6WAg2iShD1APjC2jbnKSL5K8PmRZZdU4nCbrdgcLFWtaW3TpHgMh",
  "key44": "RKtq14qZJ7dxn6VFTV1ewxDkHjzVPVyiSJjD9mo7rAfNAnZeqjED3MTDrQU3HaqZs7pUh5Uzs5n6B5jrsVE9nnE"
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
