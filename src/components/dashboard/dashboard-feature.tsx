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
    "DMnvszm2Qg2wnX9d2y3ENWAwntCNNFGJbRXr9ia67Ysm29wgMPYm7pM9EzfxgLGgyA6h12zpa1Fn3pzyGZ2FxMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pgssEUubsoxHnFGMa1susqDmUDRfSR8bHX8suFVGPdJ9tPJvshpAeDWNvS1JzNFNtXekJxTcXGrokfFqiuu5iag",
  "key1": "2TWwLNURLpZeLjqpnkAQSRbkPAQHKJiLBx67QxEGgRuUemD93F2wmmywKK1TdEuU8FfsHKsZ3h7Yrj14vTmwvvg6",
  "key2": "3WLeweouMZF2EbtC4j4vbkvATMNQgNQJ3RLUhc6MkEnLvf2xE2z6BQBxF4SmFksLWd568Gg2cSVh5Dh9PztAbALS",
  "key3": "2Wj6nWaCn2K2dATDAaBYKt2gPkzaypQJmEgwAz7NYxg1ZUoJwQNnAjh1AnG9LR1zjwGPeQ6X65MmTPs6hRe31yLg",
  "key4": "5Yzu5KR6zQroCyHR8q3HVxiQNwn8EXhw2SakqAwd12ehk5aJhptxBxbk6w2Fci3jUkbu71r14dJmBVzVxNpzjf3Z",
  "key5": "3xQqCRTw7GZt8YGAqgFX1sZMWDtNj3ZqtGm9CYcibBL5uQrrWXJ2qvGktKFo8zm44RJkiCrn8MgHcPHiZCEBZvLF",
  "key6": "5Vs5j2uJHU6AMKabJha1ksP6HEywrC8oF1SULQMMQexMqCimsE8rmrkHTVX8mZypiRVuuUvdcmk1zV48iksUo9Xm",
  "key7": "MQoiJBj9NicCgYnF1S14wRJSnjw2apDDFSQSp3dRTDVFHFXGApdoHDtGpKyT1faYMo4GG4amMt75n2a59UQ4LBT",
  "key8": "2TH89SEG7ep31hRgAtgcokLsZoSTHLu27kscGJWQ6mpUh1YfVFJvdKu1tUp6xUaCkfQBRQQn98VTWYwjvwmW29hF",
  "key9": "4p9ai1WFucnXN8PeiCFkgyJNz6XBKwDPNU1Vdk1ygcZRs119rwgQnY3uPPvbUqmXh8zkVfua8t4MBjarV29uiFXt",
  "key10": "DF28zzfaSn4fQACvj11GUyFjbMD6FyjNJts5Faratka17j71CH4fFdcq3NdiCmQbHcLxqYv5wu2FV8QNMffrPNc",
  "key11": "DXSk7BtatcBJ6JAM66zVTgGAvhj7sQ64VUPj2NdJUVv799eJtNfeFfynu6MB5gAVUC5SYuoW3Ca62nXoJSThXL2",
  "key12": "3FCB1TUmcYLmotTEDFtubojFzcrXv9JYpr541KnPXuS3SQ1L86SWMMdSoktbVSfGyHrHM1FPXNwmhcb1DwPMrHLf",
  "key13": "6188xrqSL7gu1roKLb5gYHEEjukuP85YxRKzj21goUESa8qTNBP6HmhnaPkBpJSJt4yAzM4q8PQmj4smuCn7wXy9",
  "key14": "4QqqEtRuQ5RpTtGmoPPWVjWfmCbgyfjMXMHeA8ECSTA1SWRp38sqfXWPUhsux1ofHKmGuyU4ZpTJHALggr8cBMLE",
  "key15": "28fjbZFzJSBHW1ZYY2XeyBmpdaucGRks1U3x2KJmdQJtg33QErgwffKJ4mSBtVNneZj8pyVwchUFgWp5u3Q9SAkQ",
  "key16": "22Ag9cyNrH9Gha8UX9VbpCmSrnyQNS9x8t3QqKEuY9KGtX2URcuZuEjd16EDvbqzn9NHYyPjdpwdWtG5pwyhg1VE",
  "key17": "4pdcDXh9EHKXmPxG2zDLpWjnkcPPFFqrgRKNDJZDgBRstqn7JQniNexsNXxjSBvDmVGx6pAmTrgQcpCK4WyFfTUv",
  "key18": "iFu3z49CBvGMvoY5nzGLZwhCSkU98zd5qcaCNVwYdpxjFy22G6VB9ZkgjcqGrtxr8D4DvWv9ikw9YVsgr7PCGfp",
  "key19": "W5Rw42KUsEejPewAVHyRGRFyKHFbkdsXJSDoJz9FoZFjMdosv7Vx1zKQ9t3oLE4tzLKYRwqH3CXr3VvxrZnBMX4",
  "key20": "5ibV5SV9rEqRTCh22io6eTtfgAa3EM6CzGNcMc53FbBB1f5jLUqATSneAsqyAZAniCqkSC1Ax8E6hMaebVGVEEec",
  "key21": "2d65t8CKWwFtm8Q3awGEUQkmdpztTwbhkdDop4rt4v1vksqJCvVfgtNGZYi1nPoKHULCHJYAEuPq19RvqLSfFiEN",
  "key22": "67dvM7bVd89YSKmMT6QBtknPtrisL9waYFE6xU5GriFur9CteVeyVc1GofAiLMxn1Zaru9JS1GX9rW1Dp2AUHoLW",
  "key23": "5enhNUX8XKzDR46vhKUWYJZqsyX4Z49ejpVCCEH7zpJweaC24CgbtzddS9w8ASbKGTSgkXddd4iHaV5Q9zALz779",
  "key24": "53dSHws4QHR4VVnpS8WiMZxDaSsfy8eNtA5mBYgTsCJxtC41UirEQzAZhKBB7XkspCJssbzhyCNUN9G2bJwsB2WU",
  "key25": "5sebttfWJzCeRw4yxeG5zRxFGfg16NEMdZ1G1asQVjGgKNkDPvZ3axirF4U5HQ6HhESY1bLXJsSsthLDC7NNQc5M",
  "key26": "5Aum7pbDKaPABtNXE45K4VdXgdQYjC2Beno78ZA23474Vt8UTSUFTMj8ZgdjLpwETaDWDx1sjRD47jd17CWskzd7",
  "key27": "23fQR7aQqDtS4TURF2EK2moE7yrdGQm2BQqiwAXjZWK5T7Rf4K5i3KnPuWprEKcMfvMbn7YphV8AbGdUyXEWc1vU",
  "key28": "2uTMCWxfSVnpUags4cHhDyK7rCwZvTPihiR6NSs29YRjgbybMoNo93XrTDZpUALFVMveKUhN6MAqwxWazRbZLJRZ",
  "key29": "3C91KKdTyAZnRb9Nfpuxs5FwNW3Y8GBdKzbh81by3EStLguSQi5XjueVEy3W9VeRXR53Pf8LQs2xwKmuCQE1vPJd",
  "key30": "2ahLRdotv3nTeU64G5xfKXSFF6mS3kS87k4DQL3C9WgbLi28FwuwdbQwYbfrZqSPmiqxVwWW2J4KVHzYRMTtashy",
  "key31": "4ygkyusqYucY6LMRSAHNh3kU99nBpj2BfbMsjVD1QJYHX9mjgQdVjeBNxih1LAmYGCeFarzqYp5WrSxgxpmDcf6u",
  "key32": "5TZdAK7oVtsdsmgBrvomRBP6r6LLsY58hW2Ya68LhSatFw8N61Ao9e9eLnXDSeMzzMdF8zgTMywC3wahpkaiM9a4",
  "key33": "ba42WceYYg6JPu7vbMdsDSDiBYHbW3Gpr4Cpu1EPd1DNCPtGJ5Cg5K6dXGwwkPYLd8ZU3KRGj7fWVeiUq1AcJv5",
  "key34": "36GzTmdrXS7Eb4yKg6cP1Q7mjGBMhHjsbDMgGtQdPB5yzvWfwPMHKvuKKgu5P7FSNTdDchmcChBwQLEjQZTuqKcB",
  "key35": "3YH6v1yr5dTzuEWtRWv8Kr3KiC7GDgNoRUSoSP6r5uK64fbcYccgXWNDvnMyefr2eVnousNG6jxsCzEC5532Z3Pp"
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
