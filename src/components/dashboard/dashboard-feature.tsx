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
    "5KpUCVJ8Zsn8QdTD2TkQWrtZkKmiFbi2qfH51Uyw4gjrtjtWabKrX3eS7DF3gY1cc58GMi1DvbxTSGCqzBjRfbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dy3DaXi7KsfrUj67tR3dL5QTks1NSLTveuLiC4CpxaGayCPDynYBKCiJD3AqM7vpXso8FNKhZv2gqGAYbykKf6x",
  "key1": "2nif1WCXGY2cmwyAUWSwCsqzRBQbs5FKsmNxCRm3TREAPJtER4iyJ8atxddV5Ewu58168sGqUFqmq9oz5WP7CWLY",
  "key2": "2rpSzadC9h8RTrMvcnCDGJLHkTcAq9aw1NhFN6cMJTyDhkdsoNUQhZMvJv8qaNx6vXiwcipz3zbjAQ7w6HRuyERo",
  "key3": "AYqqf8yqCyHzjfpCDJh5u9U17dKzZLyH54ee9jRAoiy38nKySRNiUzG1dLiDFtM36ztJhd5LHHy9cLdAKQo4Wtv",
  "key4": "2hK4V3gUyYJrE8UuxWshE5UH7QuXZLxun7CHDkqTtyKJ47rU3B2RuZ2DMQzehDx1KqpkAKe19WCTTAeBJhHSuhFv",
  "key5": "2XjbdauKgEmwoJUuh1NKygB3RGf2JPGjrxnseATPiijz6V3ehVUSViAuBVuX7CLucJvSWqirttBHHmG8enyMS9Ym",
  "key6": "3x12kheuBtV8YgMHkVFQKAgFUnjyfwWWVqXw5yQKFvRxUyHrLTS89e92TZghcx8xGoD5Kp8V2Xfj4JPMwu2cDeJo",
  "key7": "6753tWyMw7UkhkWzZsfEB2tL4i1a1is5WbihtDVYVHfsBzoUFowS5oqia6rZYGrgsZUCxg8NV2SQ28HtLk1NgVx2",
  "key8": "GUyabZCsdXjyZabUhaqKxX2azZtYse6dAnBkxcMdumM1CiiixVTPCTpW4UHSRvTv5B6HNCLvghPUHp5hzmMGGRP",
  "key9": "3QuX2ViaiYdDP9gtDzS548VRrVS6YVYRf2iHcdX8Yg2zwyPauxgYU1AmgHT6S3xptQMoGfDwgb3mXoMTRNW2Qx1q",
  "key10": "3jwp3i3UxbYENAqR15yBiBVYNQcVDy2nA8Hfb2n5dJsMVTAiba5x7NkuruhPXmFoa1Fqu6hM7yWmFYeeHjjzerRa",
  "key11": "2twHBTEiswwRtkjVApKLhfcKmoYWtg6JfpVCPMac2An9JxXXpunxSFhzagZSpjxYwUMaCNYf8711ES7CB7gT4pNN",
  "key12": "B3UAtQ1zEz3AzzVvAHNknM5YcFtNZPqh6Fin1vbkzesYFoGWMWEx2QDFBRq6ncr8yYMxC4W9DmyBDmQj5HSyAM1",
  "key13": "4nTLzFwFnTfpvZKfGxER6K9BxUCE96aL2SzAkai2TVqE2SNZxVs91ZmBGHR2gW1c3KwCVQvbugU2RdgXxyWsy2gK",
  "key14": "4e3QAQcmToeHD1HHNw6jCrtZN2QfnG6WffKi9xr1WiBRnFDCdUM4gZbmY2B1m3BcncTjd2Fv8arLogpHJ9h83SkN",
  "key15": "2yF8pcdr5Cy1av7w9weeuiDLTNQk8THktkSioRZwPbrNaxLYjMoid8NqMsWzjrfT7bcdukGBXcMus5G3URhhokfD",
  "key16": "4D9h9ospGwWWaNPZfa8yps8KnG6Eft3YXZ4SNW27y4gLjduuibXZ63KfHiT7Egar7pVhx7bLtf3uEN2PwfEQ8BVP",
  "key17": "3gFvVeT6PuemD5dy2GMpxc4bBbVSNSn4JbKmgkTDTUzaCwGkpfXMRTA1MhsFzUwhNJsTHVxyrYuQ1x9SKSxKJvuA",
  "key18": "5sqneHWEBA7GU5Zm6MHqQEAo9i6yCNK9chqGwybQq3j4bK9hrXrYsbnXw1fhNvgj4fJsG3UtfVnTMkZeB7pTpE5S",
  "key19": "5C7htpLiF9G7Z5tc74DNeTTj68GyvQZkmSgTQMXyfWLeqzPu8MDNaFh4AMWTFd51Ri2LmGStZiahLzF2RXo9R845",
  "key20": "2LWZS4sHx97c4eYF17Hj23hYfqxRq6mjPTRGo1yfjcqAXUwF3aJkYPqzFtyoaWWQikFQp2dgLzKyd4Q9sVbE4jJw",
  "key21": "3wFM8L9itvQFESbXsjpb2355kF1acK8bGQbwbPk1ZFihvSV4d8H94yXJkSSrsiuXobuQmmX2SQChtTYNEUCx6juy",
  "key22": "e826mihTJtwwk3MxgE4FLREGcT6NbY7h5rGmcT7trcLYqx63zKWRKurdfoEte6fjk4R7wTtMpw7ECnJkFKdMfo1",
  "key23": "4Gp2ejqEiTcQqyGYnAC5vXiU4ASoYLhcQ2Eb6xcjd8c6S6Q8Gj8ScC8SFKZMjYXeQEKpw3mhvNZSVRyL18CZgvCE",
  "key24": "LKrkUZAHRX1sw7CBZQwsVfSCi1NPeks9DKVu7n4ieHEBStMdaos2DWMYgLeSUVY35fSqMJnbyrHmxP883m4cHSs",
  "key25": "3SUbT33F1Jcek3FwNwNqJp9ShoSpgNiB6H63B3kBFb6sBBdiGDac3572AJnfeCjxB3s9vn4s2vNLDfBHz8pwStd4",
  "key26": "2EtGBstQ7m1TY9vuC6qVc6wJTNzPSSxVXBanEnqWs3BAGApuADqCKfNA7wmfrPi4NzbrLkdpQQaVU5MyYLKj824x",
  "key27": "5X8NzTkrswS8R57mmMBjYTJk5zCv6Uv8Uosh1WwXboP3osWqyW99FoYtfFEAAcHMFxsunWxDMUt9bLqJYuKBETKa",
  "key28": "62vxoVGTuxczTRC8EjHm1QzHTphSFgjSWxSpW7B3bfUQdxqaSrXqN9vozzb6og9nmkopJxSQJSJxB6ksu2nMtRac",
  "key29": "e69Sm9veFCSq5wmHihj9op6d6gyEA7PZT5KEsCQrHiHsVPVK2RdvgTaBviNiANHnzRkR7A2xk447mWvsWaG8TeJ",
  "key30": "2obt5LhnHqzUVK4uYUZ3o43KYv3gPKxbb92pLB5WZmQvLtLAj3qvsAud6NAL2QH8Jo2UTcasyPt41GEBPzwSNijs",
  "key31": "46e5DB8FSwDXSSNTZaMUcfwXv1hYp2Yzz19oVfkyGZAxqR7cFMsCLwTe4kBEKsdut5A7DNd2PjwxW7nGRMRSxh3G",
  "key32": "54jAxwRXjfRW8SxAoeeusD2MH8gvH3xSXSUy67exhgokVu3hHBNeGoKnJA8y8VVnqaKijTkf56Fh3puBLt9fdJFC",
  "key33": "aLGnDvu8jAdtRFNyZwpqpeZ1ucDGj6nd54Qt6XvZhE2u3HGnHWSMt3yVERzArQ63A5d2mLpjNnozLdXEEhB8bSZ",
  "key34": "5HCH4e3CSGLoC8ygHjCCMMymPpjdyQ1Ace2XVwDj3STGzUsZDRGapnvQkkp4bnQuw8RXbpxnx9WnjzrDXBMaYame",
  "key35": "WdTswGnvuhxcQQdAEwDPPpDN215YLgGmSrqh7dfDAHWScfu6yWCdcYJWyJPNbtwgd26nsfsUJ8kPSqQm32QScJs"
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
