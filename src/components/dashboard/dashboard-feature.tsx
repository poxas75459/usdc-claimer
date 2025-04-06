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
    "2qWxYyPwksmuSHceVNqkZKNQQWoccVJnGwN31sgGw8LzmyZ2A39gmE4yhShuYhnwm2neye3Sp1TVVYyk8NvNBg4y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MLhviroyAg2vq3nhspqma3qGQZ7jM2yGyRdAWJEf5SpzF9w3tpc5uE2s8RkEeTRDNgiG6qPtfWsERiA1z4XEsD9",
  "key1": "3AwSFF46g8GwjYLvmrLbamU7DUdebhj5Mpry2RAHz8UAMxJxpRZiyG3atyTmj6MuarWgohbXkQkNcs4ukvNJBXfD",
  "key2": "2GW5tDvu6m94XN5gXbrYhvVA347b88fGjPU6VyskXwwwpQxaY8J8fyJfZgEQxJpqr9D2WwY4qp6VCdgma3DknWiZ",
  "key3": "523dmB1wGC6CR6BAuSEGdn7sgACvwpYUzxebnYGRu3p28BEGWqnafjepFLZRevS72ZwxbZtPKo73jMUR2Q9pP6rp",
  "key4": "4fz1WUSY7yzLrBaBpBehqkYh5sZPgyigm1Er7d2xnKRXu6UtpWZA8ffpLCmRkLYkHUetTvKSM8fsMAXMqgM3atLv",
  "key5": "5ApgcoxPdS41xwYhvja6GJnDxJbL16NLEYYYSJYUHjeZf32Qv2P8GqfHENSRSUqHUs7nwy57piwi4qwEVc7jhQRV",
  "key6": "5fYaDaoitMoSh83fsHA4Gq1csuXq1no18TNpjDjxk17kyrToEBWjeZtoaiaVS6c3hggkS7jVbBxaYcfk7h4BJ8J1",
  "key7": "URfLzZqz7BcZaXEihVej5dgJy5pTFZuijcZBJYpJ8Nr5TdQNsbQNp7hyczdm2tgzJ3kgWuMZQZcsHD8ZRTS71LK",
  "key8": "4wA6G6kk8XoJX6ZMoCp5RdXweNHxNKNJTRiKC5V9Ah5TEdXBnyhboFA3GDrSoPzRGGTdop6oWRsS8eCeXT6iYdPD",
  "key9": "4NZ1UMTxPQ4tpB4nmeQUWzENv6ah1zKGX3qRvztUiC7xf6zmHhhH6Cu6f2pLPi8qMtSKuTF6spv2W3r1GJQ78wFZ",
  "key10": "5F3BMuMwSZLp2B8RR3TiqhVwQtJT5oCWoMaUC8EGnPHc3P1Aaka2DQbSDL1L4LxXxt9DPVKqunJ9EAKZnVPRMyKy",
  "key11": "2ZPtiFLGbVb9cPeXBWkDUTkqAV7PBxvsYjjvnK8qYEeC8UkNJrDGM87ViyzycXjkwvFNJendrcVZ5e7CbkKCiZW3",
  "key12": "3x2Zdnhh9PofQZUva6eiuK2iC1D2CThEGnSfi2m5YXjMhd88LSayGqFtVQHQ1UcCXEj2QLJJMpFGsCoUYJpKMaPN",
  "key13": "1XwZV7tKE8Qrtopb8rNJ9tjsYA1MHfz1sp6vdVZKn3nteU8rGro4UST1i7qDPZvwcmFqvbfwNjWmrR7vEqe4E5k",
  "key14": "2m5XbTtGEY2x7af6jNcYgDEzpC3obKmixn9z1S7hQdYEQW46xWXFtUNpmWYuB2He5LLTrz122NUixkrXc3LXwNsw",
  "key15": "5MTUPVdGtCmivvyGX5L9jWiXWk9TS3jKgVoNDRenK9YDfnHvo5DdvaFip3XEG6EXFXHBGkAjgXpdE2GGHQjYBNRr",
  "key16": "15HntkEwELrBVu48Ys9dTQ2ffPW8kdL1Q9Mxe3EvwevoYMRxG582BE8ijrHJ8Hn3gQgecEdaYaMptEUq8z3D9ut",
  "key17": "Nxa7gtdfmnNi8R9xi2P9HPJWMzD9kLBHZ7C5ryBt3DthtxnJVS7Hd9ywPYvAwLwoXGSMiBoFJ1pLUgDD6yVFgzg",
  "key18": "4X9dLBsjcd3fYHMsDE8hoyL56w4L2PTnWaN2TEnsRRErcCYPquer8hAwJ4GcJHVQgFE4notDdgJC7uAw5UBucWT3",
  "key19": "5M8fC7zxhCcPKryQKaRzM2chjAUx5X5H9c13ZNvnepyPtG7ug7DUqAj8bGM6X9jJLRTCQuQUuFyPJiXHevZJtxuh",
  "key20": "4fA9fy3jQoQeBYxR2pa1R4MiGDC8qpU1zWTciGRRM4RdZVrKWMR4JpPrXzZ9mK7XSn58NfUowrD8FbPZsMV4TrKt",
  "key21": "5sruGcCaNMwqgPWy9iEgc4WCtksJeitBfooRhQcQCuqD9K6ARniLiiFi2jhsDP7kKkiAqMpHAtEan54EQ4CoRyBp",
  "key22": "rx5HGMaxckEKbrk16wpVAHb6LbNzbMv9QUnfm5fVvKnDYiWkd8MkL225TWwJpzxM8mKxDoxWMLCgTN941qsX2tR",
  "key23": "2cNUpVwTSJL12rLAu76vnEUbTXWmoDa7foTvjj1xvfEw76zMi9sqXZjuBMBFkedEsT3nX3swMdbNSEpasx4dDJC6",
  "key24": "2jeBGo8edVqNPj84Cikm2yrxfWW4nBSG8yFiBctWX3aQM9EXyiUBSGp94yG6AtKBsdrervWBZ4yKGiCm2Ca4ueFw",
  "key25": "5WjdPzHb9g47tvKHamcUKFbL21EgkHjMpxqrxhqrX1Bwe6BV8xMxKxmxQzCt5budMFXqySdTUVdT7G9oEN35BxFn",
  "key26": "4HXYY6oQQvU3o72ref5Q7b2Y9Ey3R1ciVqDBiPCqXQBfxknVsMh8M5go1xednmov3AZkcFCgWudFVcpMtDFEWXv2",
  "key27": "2Wb44dHTyQMfa5WkNzpyZhzc5Uw7tcetpTUZpHgbFRcvXYsQHh9d371iQcB9Bjo2k8w4WWQZrBG2VrP2hwSLxhTr",
  "key28": "5TC6QegWWhtEbw9D8RENPiydt1P9gEpR9QrPurNsE3d2pMbmhZG1GvyEFJ1erLSeqsJE8aoGCddDcWTEcrjCFbFP",
  "key29": "548bbkHerPECBpKNU6yUM3i96ALeigeBCgPx7aRcxXmWnaQQR6uW7QzaCNcmwwkMVPyMQDsVFiq8UidQeb8sEaP7",
  "key30": "naWve4iaUuc4L9TPs6uoSKncCGwDo1VsJK9sbsHfWHopjSepJwX984zjo2RbzJL8zK5BEbAo5hV3C8hNrs1MofP",
  "key31": "32xDDEyN8HezWijT7SvnkqTLXa7Y7M9avMLA46hXyCW1kFg1fGwFGMr9S7RG98TZRuKFUHFZiG53PPJj1uAibSpj",
  "key32": "4dkn3ySHwotBPsyMhQ1fVTxwRpD4LgNucef6G5g77t3ximk2kfBCjUZNcqgg2tEx5kWZo36pEp1CmheSA6EzgaTV",
  "key33": "MvyGaaD7z8igsT1pW9qzBtnu6PCAWH55azhMbEjXArgaJKRcgWwipfzc5h4QjDevyW6RtRCSTw1CE12bJBRz6Ew",
  "key34": "1tBE7ovxhnDsKQmirLX9ER7YmM5J4LcgaG1yp8VdAe7cWrTiWdHwurRd1ZAC5mYiMYnZmpYyCpRnX9939BvXdTr",
  "key35": "5nAm9bPDYBGgFxtf7Q7Puc9KBisDfMqLM5HMpfjKEzPH9wYC8XFiXM6v3aXcZPTCJRpYeY7DzXYRX3k1r9iKJArZ",
  "key36": "28dHswdsHUMdXJ1zjcpBHYudMYYMdWncEPQCDbku8SLMtCVrJMQSwQJh7ii3w88M7SEPcLFgdjaRYWDS3HtsuWV4",
  "key37": "3EzQ2gau7xD76bGkgFDKcxFuXiqZFSpUZpVMQXu1mQmZ4ZZuSeR7PRJoEhkG1Ubd7BVvYV9SnWaJdMScqEfKZSVE",
  "key38": "2j7yF9YHYFE3hkSNbLpyW24yakSXffYHiDwgNAHL5Z7CkqiZkiCuHcjctGwcdE1TfDBTvxEjmKRKv8JSiBK3vKV2",
  "key39": "XKzJPTb1UReA4uopdrEyyTzAekYsGJQ4BXk4784LjMwiG5pAeTeQMLE582Uk1zLL3r88y4fsqigsmXpvjSTqyUn",
  "key40": "26TCCPhXR3duCZeqSf7zKTmFnNrd8iGpfL1piCGMuxJLN6AFWMXPVJsUJfFDDkwvGYxcN9Fk4S66XGoq8ytHdZaT",
  "key41": "VsDi8pZFvFSJoePLjVgMmV6tyKSU6ryTpySeqUztLYMFFmn5dAuWAZMBU2Au6j37PZ8datzy6b3JqeivhndGw3u",
  "key42": "2Hts74dbfJoXfGqeZW7AEaQ2EpwzC5kAjGFdx4UYPPCbZ3uiiFxCy95Fh33Qqv8SheCALTJ4Pk14WtJQsRFMiNkB"
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
