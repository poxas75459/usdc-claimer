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
    "2Ti4P8sKj314Q3VnhUhTv5YJ2HNMNzJJAghisvCtmj2a6p24EQZ64KoKnvmdSvj2KEPCdQ1mrNZSqC4zaS3oZ6Lx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46KbshyGH8KBLyLqQqWEJYrqPbpsRPk79ameJbLwGTE1nwb794P6LJg1AGFsiCwoLFkJiwGyfxZXnjYb1QTj9ge3",
  "key1": "b7nqR6XYn6UJ8oVdG7shSBzjVJQnQpZ1pkGpb6DQ8nHveruUjizGBteCTNKb54YavkMFPbkNguZKJSsTTRbZ9fN",
  "key2": "oksYfQJ82MKUumcHh2zoUWVQ2ufgt9E49Qw87vLhRtmkxXujpHpamtAGnuLZ3P2f8WnKFR9KhyNCA3ZmZPrd2dS",
  "key3": "3FiAMxYJXFGZiNvPs196wKqKTpD4zMHb9y9ykodwX1UpMSEJRsLBw3ajoYE8tSFAy25STwEzs3KVS9sDvAb3cgms",
  "key4": "9mYVZHiTWbQ81VmzJ8uoJJ6UvYEQe3Q9CSrgbk9Ug6j92Nhdiq3ntAdeeYmMhoY5DgCrBPHJ5ypKAmUneBHiBei",
  "key5": "5yWwQBbLayCUEWoY4SQXRxcKMtL1VRckhVtpWUvDKuuMyw1suzF2jsvftcYDoNvLbPMdDSE3Be8AXrTZuqvvLXaA",
  "key6": "5o9Uq42CfiBWZ8KzZcsqZFB9HUZFMQGvZymb8sXfPCrs3PoKUJnXjXZK4GmUe5LMibnSFUAPPWZkzXjJ3K8R5uBe",
  "key7": "4bqwTD91msNUq4v3zwDNK69s8hG2j62VY533cYAoRJkeYApSC8Lrn7KT9TMRiCkumavyi6U7dTzkXmu61hAuguBy",
  "key8": "4uLXZJQ3jmRShN9dCHtxg6B9iZYTEnoNMGmzuJ14Twgd2vXrqy1FfV1wdv3j5KuNJqZ3AwJiDdvyBxFNSGg5BRjJ",
  "key9": "4b2Rcke6ySejxxvejdjbJiEhVpPsVuxshUyDLoVMd9B1nUJXHSTma5APsw5GRyKNv3LdyG1Wox1cmtbXRWacBUnT",
  "key10": "4divdoKbhoqeWJYEDDwYmALoeqgpnYxWTrHfPds4W35bG8g2h3M6b5ipeL8XZ3WgyfjsoHXaaWdLZJTr1wD49gvc",
  "key11": "5gPQbW1ohAcgzY2dZDcagRUJzu6kdM8NULiS9eCKB59CgRh35yNSG6kSaDjboge3Qf6Wsp3R7h2gXXSPwo2X9nNm",
  "key12": "64xcN5r3A1n4FszVPbAxv2yFJRPMsXGaB6BmHdrMGMhDZHRRez54MFXYiW1HnUiLooc8tjeFTQmdTJvFdb5LfgTp",
  "key13": "4gRTUmk5RLpjjnTABmHBVep9H2wxEYkx83PUxq7KVPPE1XqzRFTMCmt1LcLd8mkh86HjhXhYzPh9moJLCQC9yauh",
  "key14": "RmXbh6sWvVqRGbHJAFNJNmrw3fhx5p1Da7DyMdecMguVPHCGFaLMM7gpy9LogmeX2pTDWM24kMsrPWKDh7pLyJ7",
  "key15": "QVtWKzKjdJ6h5StML5V7Wjz4DkRsEhAkS9eLZcRQtwGHZiTAAa5AQe3t4wxMffBGLt8hueoPC2MTXhutPEinkhL",
  "key16": "4EhBGCfksV9V9GC5wS6YLFWjkNeiSN2hrs1Rxdd1dYLaYGmbfARJ6jgXDEptBUwU65Lv9icbQ43Ltm2FznN7TChS",
  "key17": "43mVW1LAagk7GxTMzbrSX4n8GNTxHyu6KUYqwyatJPj2FDzzGMFKgv2TZD4qc2wxLsqY85dvYovYWP6Y35HZ1fpY",
  "key18": "4ECwVumE16hKFsWqgsbUqg5sDpCctD7KuWRLsTHEixbgTXxzjMKJHpZ76ajdXhjJCNrCsZeh8mA4BkiMJXXgH8Q1",
  "key19": "5tvGqyHsgB7f4DFBCDRN3ZL2iDHauX8aNjgaBmgZ2ZQrHHkpzLkC3T9Q9CokAi1JtWU5X68s9peE1ocCXmWTogWc",
  "key20": "i4Nc6wM6GUx31SQyuc1nh2ph5sQ6JYWWxm4g6Jokv7BFPRpdzGJLKoqc6kJAuHmAG8t8uv8Z93gjUgmx2yUELdh",
  "key21": "31GXTBoTZ6jLBNytaeGCEftEjFrr12Q2a4VNhi1Kj9N8sQsdPvz9Pafd6a38dHJTj1E6iGPnXBUbvmn2MGFh2nsE",
  "key22": "293xH2AL98CFPStQmcXCZcRbBuuQ3c9kw2Ri4dZTJ4uCPpnqo47uS71eSTgp9q15TawZc1nNugC5EghKcwNpRxBv",
  "key23": "o318hCAs68tu5vuogQUK7x6rZ16rk6MaWfFQ8eVDwo1Uzi7FSAT9aZEGg3fSYTyQqSWdHwLFa5nXhw75KdkrTok",
  "key24": "5PN5tUz528yTQJNjENgsUs32T1LBkjWDZQrRZb18KRb5F4Jko51oBW9aVfghW99hg3opXENifRqHhFdGGAUfjNm2",
  "key25": "hfEYL6c7Bdrdz9eQ5xAbca51p6WMztp7hEoq3uXy6xdi3Hy8mZqJC5ZDeiiKGRqmpappWz9wQZBVbs3ayDaP9sz",
  "key26": "3F3aRmKnU2dcGJ2tyPgAFiVFmGG7FCpi2mVCwyKErSf6TkTugJpVgT5t2boeLvhVdd57SRY6HAuLFGQ5vYgR4R9J",
  "key27": "dTGZUy7ioqtzZifkjX2BWEFznbBApPMHAFoDvH6HAq9oQPxD3eDMyMtGzQF7xfusdaNK5FSCM9fCnV6mXQzyoo9",
  "key28": "3pMKxJWPQ6vMjGJNv9FGqUCVxyCVpyvq28AuPPeY84ba3kAcZVohcaEDsJQcoSGQVv8eidbPfrhLgUDDsYduc8u7",
  "key29": "uJf7dkp7dYjTVhD5fUbV62WUdokdfEDdFPoXtceuVPpTPhBBCgmh5hthYeyFjtqbX9cJcwyQDdrvQMETiM8Vwm4",
  "key30": "4gLowq58NzmJPCuqWKQdr1yMTi47iMMZRs2FxREKRq51VbnVHkQqaUfsTAaRiJRatg2btXLyD3RX1aCH3uhnEsee",
  "key31": "2MzqqUX1cahoBZw4f25QMrnuxGWP5VHiJdXYtYR4YwjMm5W2f1QcGaeYcQUz3YjrTaeMCZS2dAr7rsVZpnTvCxyd",
  "key32": "C3mXKvTdRXWUJKthXrfetRCH49Eephv9qSgfQRqxkePuZZ9qZBB5gZ7RatcsEwDgbAiA8AJpsEuBpVPmihcV7fA",
  "key33": "2t2HxjMLM1mRgNKVCjuegEfsz2hXyxRgWcYYPJREejpmtrMbzZEpEMMhGQAKYxnLo7BjzxvD3t2vaxgdStCsuNXL",
  "key34": "3H4zGPz9zhDNt3nTUnAF9yr1HFqVkwXh4hFJ9p9LKv8fbffWt8hWxELPyH9fpCv6dAE2BTF69Ayv1LJFwcMKrUqy",
  "key35": "5aVfzhdetvfePRAEuzt41fVcGwhX352fNQvDRkpeX1Uh28XahBZF4cXqdeiyUhJJf2nwfbX3eXgJJY5SFrSoCPUi",
  "key36": "2Eu1cFJrggyErQwFjPv9hL8yQj5GvHzfPg8hmTGtigHx8iRPcSMDsMUDqjYL1nd3hTxYb44WzBcVYvJ1dULuaG17",
  "key37": "3cCR75FdKSsYrFRJGCw17tewFzSmYANeMwZojgTWzmZyG1cQSqfS9C515EyQbgyaRKLAUH66pxBywEyq1TWh51UY",
  "key38": "58PeeAXaPZ73zqP1bQdQSpZ7VCLBRVbQDS1yG2pdSeM23y9scoy7vYmsrtkZDPq6R3hd1JR6dLm1CSqE1gDnZpzy",
  "key39": "2w9BzdM1SPRUR1VyF37r2433Jgq2PVdMJipfuSZRKKcwkyKAjt6NmmuaHf9bKN2CZz2BB8AFZbBb3Ls5DHk14mV1"
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
