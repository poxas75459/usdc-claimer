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
    "2NdTtfXy86jz8eCaPV1Be8wwUPge1ac1dqKnXPw4pVwjvHv9s3zgPfdpovLkiFdxzT3bQ3pq1KgotRNqfHDmsNaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Meyhzf4qcUAyFMnFrZPcd8RpXgJuPAJYyvtPfcpoUzi2p8YBWarJmCW4fgUi6f9bXGZSygo7NxaERthsp8FLoZc",
  "key1": "3G9HDfGzLkJjoKjF3sznSXt2DYgb9G62hCbw35vGDEpRM2ohHYEjuJzE9GEguT6nwMnxBVuXRXXVAHNqrLnDnvrp",
  "key2": "34eYRLpJjG5bSNNRT2Htc6UgAb4Ud4wQmZpBTW427JLMtiUWsC7uoNUB8Fs2gZMSUnXEhm3kVhc6ecTpc3Jqd4Cz",
  "key3": "4f7YFbGQjb6GYMKiRjssTKMT3QPUMY5Cu22uzJfAPFKxWb39Cj3T4G5CsFAZyJQcm2Cdpv4wm8d93cXcDrHWUtXj",
  "key4": "5u33k2edT3wem92dCWBmuVQwrGLXCM5gyEoEQDY2t7TiX3pCaoCk9XrDMGv85uo6R9dKxeEBgHq4nDHSrdvHTa1o",
  "key5": "348DqsRLJ3wgis7925PLDhLpcwv48xWr64RLaXJ54iotvhJYGDJtHDnqeTMSB4t3TyCYmPP8fqsaMZeU2xLuD1iH",
  "key6": "1uoRW9NEYbTBCzHV8yryAiVy3siPvLoRAL4JvgpAzVTR4fjhh9mF3VKoohLiE2NJwYCZEKJASDnC3sbfNhP5Dbe",
  "key7": "aGtkqbWtKmaqh2b1t9zNHpYp9YaFhiLYroY1L33T2twRkKcT7PQcsrGhtZCiik1WHX2ZnzpFgYiMMDzznrGHJoV",
  "key8": "5CxPhteUmSA1P8M4xVTp2iW2qn97WJi1oCt6ocCGDFTmAYqyHo4nD9t6Ujxhv8yLfrYbmK9ZdpdGA4dB6NLydiNV",
  "key9": "4o3yQHLG7YS41uq9pB9Mo92oeeysbSB4LmqnJWGNJjzkR7tHQ6aWeWyLgpppD2YpMZ1weobarnWdoQqDHwbXLcEL",
  "key10": "3VFt6BZEqyPCYQzXYGjHko6QFSbCdfMcBg1Mn5YPQS7ZpXBeqDJoiHHUAFXpDRduBQymSHZcxXRQF8kRKo4SxnoT",
  "key11": "4NtzTucm4upiPEe8q5ki6HwEwKynwqCd8ZUu2AeyS3aVL6fAe1t8ZBA2juZgXwC7QYv9mu4XPx1QCJgVEweJYTfD",
  "key12": "39NSEMAayAR7mCUT5RcnVG3SFakUE4TPEcnRZyGU3ED4s6n4kfn7L9GfJvVhiPDVmZg2Zn9SSVxeAYB19XrVHngS",
  "key13": "5JV5kUC1tDCmirXJUCyeL3UUHvtSXEeJe5LX14po1j8jce5762khEa6sWHdJRLBGtLt2wHYySyFUjBnEgEdJ5248",
  "key14": "5BkFjMAxfXoBiC3yQApFehT8FZxnHS4zNQ8NDzhy8YpDzkMmvLGdHNMPgxsYLyNKYwywrX9aQzUTQLwZAnAr4KUZ",
  "key15": "4FxGj3eh4XWDwvd6sk3KL5FSxTf3XTNFD1MsZWkg7CCYgBWNujGZu1toYQvg7tSyhTPhkpV1itmkkaa5jGNHBCpf",
  "key16": "iegQ7HtommuprqwLXvMY2AnJ7ycLw7Vc2xzi5Rz7n4XLvks4eLdfzCctoxz8xt4r19WVZFf5oHCdZKMbPPfPPLe",
  "key17": "PGngLZ8DyPSPrYvUphTTCLzDtrxRp1fmXqvcUQnCf3gkPpCZM5J5jVq1WMH72TBuWEzzS5nysdmxyqGUuJhW3yL",
  "key18": "79jipRuCXTvuqL2PcSUBzJHmrdyGj6vKd4iCW4BGgj6gdnLxY9xgkC62wzAZUhkSAQygtQGxXRenhCH4W6vB5H1",
  "key19": "3Re3FaDt11Xv2QgrjwrCrLnxSRumWAF7C1eynSAxXcow2eRnpMCgwAXnA6uyFNyKNKZBXDmfuDGvy5EWbk8aQ8EH",
  "key20": "5QqVQruaV6YnYSVT9L64cHfNtBCRirAJQAYEV6q4rpfEKJnFgUN7wgzttNw9MczzpcSb1BqLtySJdbynFVKVr1E1",
  "key21": "31kAu7zVBKqfSsNczyi6g6WdBEWaGk5Hfz564McCGHZrKcmmgeULsysnpVxCuWovisg5VytFCykfp9eoPcvwt7fr",
  "key22": "2Y6fC2P1vxNJvD5TG1omraBBFFgeNDvZRNVjZvtAQsof3ZSbzQjg9EUkxqSKLMKAvicyjX83mzHYbP6WBHSEFh7R",
  "key23": "59SF2xryCfy5M7756wPDvCsYPwDswCawx6xrPiFNrpCZhBHk4dCbTUBaKtiCVsH5uvMWe1ucY2GNu3tQ2buUpa8r",
  "key24": "3rf9XScs5ntAiR3FwXb1zdmfSQ3ebjoS4SX5cnNZxQU5xmW56ophuKyEuiHqCN9GcjPtP7Ap5eukVvJXYTZTfmMM",
  "key25": "3suM7Z9fMgsgCzs2R5iWJ2a9kXrMLb7t3pQrMLUBmK6Bim7kzBhyS5R6c2DZ8N92Wc3mbEBbgL18HKqYs7Yaiz1y",
  "key26": "4hJVmuKgXeGs9XN23HLYW2WF8B8XTutTG1i4iXHYkRNvzbZLzUHbM2HMNAcmAcLZZWp34gUGxbHkpDxzhxMRHNEb",
  "key27": "5HGfe2b9gZ6yx6uGq2Dq2BbUaWejhxoSZvww7gc4DNAVvHGKfPKscV9fYCRHqHzbZ98PG6s3zvvXeGCRu59p45an",
  "key28": "2TtdEtXeaWpZErcvHLaeBKGU4aUzwURC1r32iK5wu1abVZwkjMNmKLZwpbupCxfxVRb2kkQE9jEvDDYfQn6LA67P",
  "key29": "4gTjvmyPV4SN7i52ccefPorCBeqVoUkZEzmKYrTnG11zSxXYRskqd9VmzAJB9a1P1iF214pt9RbNemYJ4aTwe8sA",
  "key30": "3QRWNhcniL3trfGWovdVfKBE49L4FQYArj9E8WogLzVVnVxBoE1qQqTQZrupAGfGU5NTq4gWLT8gphgLHgWtPXnD",
  "key31": "5AFouFHqkHRRKyyEPDUJdpgUFdqfMJwmjKHV3LdCR1bA6Kmt6rAFuWrab2SDDRdNNGRN9zGsF4RAtEVLyxSpE4Uc",
  "key32": "5jJ74gbhNqc8QV4PQCYwwPmAdoW7uAmAjp9Uop7E9DjAk7VGnkusfLZHGDkUKvCYURjRimGhCyWv9cTSe369e9rB",
  "key33": "5DgiRqkEfWkRnjxAeEf57L3v56JZdRnkDo9qQQKD3D1QS8bJnQbnhZEQu35mQ6U7k165CXpPS8C7ifLXA182UoqC",
  "key34": "bvEhxuRwH2eLHPQSeqD4vjuUfMHWEBYCtZymb1M3perA36aKUyigKDuwChHYM9PPt6ooMb7ULwoFJkjNXPq2K2g",
  "key35": "Avo1ZPZv563ayrV8PSkKmaAsXajS5SsuAkY8cpnDt4uNi3U7QiWujVoRr1pDATgtuExYDycz4ntgKZzknR7Qpb6",
  "key36": "2oRFD7twsHNHbFVndAwZ1vTTCYgPYrCVNLBYACYnFWMQo2jLitBBsPAJbdLxopDRT8WiKWkVd7DM8GHYJLHm4ZXW"
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
