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
    "3MJi5cCaKv6t4FZtGsnUFoVP7ZqiF5AXqDHXFAVToAHaLfsqyYnX83a7qrAxfnzR57t97znqDziTaWYy7D6cNwhi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48B2gi3kgJodMXLbAF4JT7H6N6VTdVSHghT4FjTWeHZU1TtezgSq8Xx9567tV2Kd2V4CpEZVUfRFzEUhZPxdaYzb",
  "key1": "CTfQHLKj4TmM75kbx55uvHTtSBZbGvdRgBsXM31pSKUBzR76sCFMk4wLG9NNMwL1qiuu66mupHw5JqCwavua62u",
  "key2": "121HeLbvfa5i8Mt1J2HagkjxpmEPivx8BYAqna5iABzBMHTFENgpd4nCHzWc1MQgx1LscDpidCq43SeGcqjiLGpJ",
  "key3": "5iXPNggqoFtYUYJvtiCoQoZwyTHnCqDEUbMqLZ266MXgSkuRGpyaFf5wXUnFvkrXNBkwrp2LUugMqtmjHsrDWuS2",
  "key4": "4voeoLu5wSLWihgM6EFpCk5b4Svt2Ra41bu5oVNXzWkojxvzGpU3Qb8x2QeWPKfH1FmVVzxcauXfJWtX3rgq1Sht",
  "key5": "2J1HdBwXiHks9h5opw1DKdgagtcx7zwG3984RJt3VhbBSSU9KjJAgthDXhDrhUZ6p12s2NZvwnqWG81Liw8dsH1V",
  "key6": "2fV9USwMZhfTGty3pkFdAUhW6aBTpPnHXPWMWqHNDuFqoo7R2HrwUN8dzSUYEn3kVfpddSLBJJfPsRjMGzEEDaL1",
  "key7": "5UNjMqVVyyB8wE7pvEtnHFFPgKkDwRFoFTELcQJUPTn23fbepLWDLH7huA4vVvjiChbnoiU8WmfuxXREntvc5Gz1",
  "key8": "jv4ntd5mzRhDmRomCgzFQZk62vS8stKGtq2X4rrBBDMzkiZYvzcXv7CRP6cBXg86KwTuESLTxUmjUZWidRMHyhD",
  "key9": "4LkaN2f7PVjwNLxfXah3zCBN2FRbwBPjUd8YK5LfKUPNeF8nkVSeGZVfGZ9SdzsrSc23ah5iqSMsLc2qc1z1idBd",
  "key10": "6KUR7g98BVdYfgoiGK2Y8gDoWxVdXu5skHvbYN6vnV7Ugqx7RhMmAqkJ4sd2HF3g19sn7s1zzYbwzYTCnVwaB7u",
  "key11": "4QU5SP33jjDZJ5QhrcThzyMGbpkQbVmy463XBXBPzcM7wFYujGWZgYmYMwrbGNDts1YDFALtjAYSVo45Vq1wNDUv",
  "key12": "2HRtYi6psfdGDktQ63xJfaMhGSeQyaxyM5cDvdwoHLQ2yzhzeMiwskK5vvEswKgzD73eg5ie9kS7BDaqHghvh7y5",
  "key13": "4QLhX7bTunJ9ZyYgDfvkuTkGsTH5u6RicjQKUZkKxhHdaadUB8dTbJVhwkoTuNpLVvPcXjogjhXSirnpNiogBQSn",
  "key14": "367zo7hqBnqN1J6BJR6FD4vrV9GWgYkWB6QTdsYzjrxp3KtH8k4tBnav2Uy6jq59SoBeoSQgHvwoZNuY3r1tmo3R",
  "key15": "aRHY9MTuEnESH1PHU5C9RHwgrBANdjGYnBH9g36dmjSQJgjNZ3wgDV84fg3H9yLhRm246KtQoMXNAZModqqDfNB",
  "key16": "3SiSzbftiARNx31Lo7a1ftncxUXE6baVa28fvcANCJ26ZfrRYTMhQN2cfzVDZXg25HMirGSZ3rtkHJC6xuM2LAZe",
  "key17": "2EHSYNtJmYQJv3UymrTdS7PycdvawFiYAQhtjw5DcKWPhAhLi4EhdSLzSBDAKXSCNwc352YbzrF7ocNcxkZatTSF",
  "key18": "2i9rwWAu3hTQvXwPc55rJ2q3qQy84jtPBstuFSCBKRAeBH9HrKd6oitC7C1FaCnoc7GYYnSxYwP36MZLj5MbekX",
  "key19": "36VZ3oTgQU4pKdXEz9qpk5apfPWnzFJRnq6pcm7ezEAaQhfopN3YdAkqUphReo4e78QREDPaDWozsr3CMU2qXWo1",
  "key20": "3cPEyjPC2RH6jbUktphv8sEEooyMvdEG7HRGmWAiRNfu6MMiEWYrvghqE3cYgRnftGTX8R45XnUz2Lzezz6Qmx6q",
  "key21": "5MpZyvZ9ij9Wu5gzwxyzvTa2vcyDCzeDy7VLLwgwGwEfZQAj1iuGLA95BAUTdeVNjpzyncQvHxNBccZStNC2NNrn",
  "key22": "5KnsUmXT6g7C2YWBQV1DvxAVqz3PJvmhiMWcNdoiFqpTeheMCG16weL7QRB5tQ7LfTN5FHZGnXfgrwRwHiscK5Yr",
  "key23": "2LBs7Xmb3xFKnuUDeyTSckjohzgpDh2RN1iyzHqwG4RQpHCZysu1WQHv8kYMKZfMETZZ72QtTMfgxo38ueNMYDz2",
  "key24": "4hzkmUWqmMN1xNiXmeKBcR2jKoUw2g1ZbFKCGQybqDRptHcZtSa21REn6rmpHe4ZLGBvduszrf2RDH2641XGrbSa",
  "key25": "3jdEB5CRsYxc1dYkvEtDAZVotKBowmv51nG7piu6ux9bN31XbMvg2oQDJe2Z1r7AhEqTEXdTnEg3ctMxS8x5rbeT",
  "key26": "2XXt9tGyWLsv5PPK9xYhdVuZMa5aXYX7ZRS7NPPEfdzQUD6cBKjDGVjAfDKkzSNqZjaUtUHXrPcAxApPs123owwA",
  "key27": "5smK9kgxfi6duA9qAd4V33gqguQyntuSA1gCtrEXaxWW8cjpXS8ikb7YGWBEpZJkwSbXZhtMHX4Bc85xNzaqFagh",
  "key28": "5PGGNBErX7d3YpzR4RMi8PyypQtZhQoAqLttPQFZ4Ut4mS6Hhzq2joMrTEJCXDAh6AufwH4GJyEFcWpSDGBoh1Xo",
  "key29": "5ngABehmqAKE3hww4HixQSxmpiJddXNVL4RgddqqAmgnHJ4CPN3JHrEdwdeWGaZMBtbVjnF4ETi4J1GP657A3SXa",
  "key30": "2Y8NEzy1AWSZiCFELFMYqbw6eXfhHcnDuXF744WzGWynwa5u3xWC3oiXrn2p6JbULPwURVp7MXGcUZigKqBdtLgh",
  "key31": "4ishgd2MXZ25Uwv3oQkfjZUpzpTENwRYHsEZT7KQGC3qUkSK1eMRyaU4uuGGxPXdqiTDziqD2npxALgJJ4tTN1MD",
  "key32": "3EmPsaWYSStQj3BBVfxVAVrwjRT6qeHdrETiw9YQobVGQpbv3a2uNe3zDGopAVJWkssYLvqPYyQWGaTGNtT2Wqok",
  "key33": "4wTDWvY97DYB977TnV5z8tRkvyD6iKSFZDjxcuY32ZQeP1DAzNudk2oK7nKUxfVHVs5CsvbhrUSr4C4PgPu8K2rb",
  "key34": "5J8nd8Qq5osSyiFhsCGJPxzH2T4Zgdcs4RUPoP97PVLgidWkn3BkzTwePTCzAAvoaeHx1hFUsJ7UZanfFPkB7hhW",
  "key35": "5dZpvtFew7C7uSWxHCPKcWdnpG4GWfpcr5vrm4UH78YjpEHeTKQiegmc98NKx9KJT3L8K3YzVZMWmm7h2sRutsh7",
  "key36": "3aN81R8DfUPwJhLtoMbdZAmgjXRSf62acc2f4uiYi79dgSSkUihookiBbVy29pqC93VFHTWaRFUYupSirEFv3zJf",
  "key37": "34h9RxcjkDnFFqB4oVwVY9DktSbR2N6Drj8ejsubogwb4hXe5gpk499pELDjrYnQ1Tet1w5AqrXtXRhHtyeA8eqh"
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
