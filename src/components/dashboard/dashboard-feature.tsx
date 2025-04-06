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
    "38xj2nPjG5NS7WU1DQGuk7fwr3rXjD85Lmy3bDJJQn1XP8oNP6Tpf4ebeaSRbrz96MiuUav6t1dCuWKNsGyibYWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y3C1ps5wfHhpfrNcaPBsZptHYax6YRtqxRWJooWRJA1AxtofBwvPfJh3LFLnNTGR41aygCJg5ujAvM3BKpkdHgp",
  "key1": "2SN6WJcXKTLQGcn4q1Y9bSuD6Hi3N5z6jiune8bCb12RFV1o8z7LTfBYLZrEMvKunyEytL9XaFwUGv2iZqo89G8Q",
  "key2": "4LhsTsWXiFdiC8opxfWk7F8Q7xDsEe1DV8EmEQv8cQfwbHeQ9FSpS5nqhgtUuHFcnLAbFk1rD1Kq1kJgZ5tUf1vr",
  "key3": "35u26wQGiipCfD7o4gQ4vgqM1tWx3mdVDsAkXnFd7aPow5Qw8HERjTk9UtUDF8BXB8A48LH2f414Bup5gdK15oeN",
  "key4": "2scTkDf8A5MPMzbeWqziY2PyQk9m9MWMK9U4CVLhCk6rRB6t6pLjCZSFTzBJFNfi2Vg5jYSgnKiZJCDGWaTbrAwo",
  "key5": "4GYwtj2uid7YGCGuqFbceXianoxJ7b4pKecRunb1etVkkAwdsiGdGH6uZV9ou6Zp4NoP9g4txQtBeuscCcQRgwh5",
  "key6": "4hE2gG1cDCJSpAaf3qZN9QvphcvBNEe89Y5H7S44bw9Wzhu7ZiwKRsWPUczSSQLhym3ygaM2TKZWVpFeZMzcG1Jc",
  "key7": "bSXf17DkDnX2wwQM8KbuZTxGQfH1v2KjnSDYDghEdpuvjnYM3mDEiN39reDZyLm6Za6RhiAE7uuXtdSU2TJu8t2",
  "key8": "4TH7V3tsTos23ksojKZr4Y8by1cMevwURFgB5qg5LoJUwp3PUWcTrNB43sn6F9jSsJWLaVrb3v2nhyQEVByWrPVP",
  "key9": "2eYH7g1ZzaUkdPGjfLxN7vJXMbzEqWoCFk2XuzmMuUR8iRLei8o5iQxyJvtRYTp17TJLh2oYqgYon1RPdZgxhm42",
  "key10": "y7x59Bo49vQEFRF8N8kSABzHeWNN655bejDQk9KR5dea6PBTTjEZVvJL68RQrZvR1eeDfLhqjHLrKMFZ2KSxMYW",
  "key11": "5s7LvHih1cXoLZajBEyHos3Vbq56xL3XmYpAZVTqVvbx6c3cLQRSvKbBbXAKmHqUBFPTwLUyHxogVmtQm23KVFhR",
  "key12": "3nPEh9rkvuhb1vDDrquMJFwdvQCvhEX8wqChqrfX4gyPiDz1WA3WiXsatMNzZG5MrPFt1ybMzpdjjQUQAd8tssZt",
  "key13": "SZPVsRZEwei4mdioUP4D9S4D8uF4swUNmacJwxU6GcduU27gngxxvwdWWTYVJaAtG4xi2LAWqjm341ED1BaBoWj",
  "key14": "4XAGCbYv4gJTWLJ26meY1rA8JGB6o1K5E3YzJF64RdabfrcvxyZ27QFu3kWhSuYTNYKt6xAdSdvTenZ1KeyF7hWR",
  "key15": "3oZpaZJykkpAH5RRYjC8PXpNMx8ov2iqNcBwYaz5UNysu5FSF55vCMpDBBepK6FXpKw2hHLmzb9SsRjgtAcnP7q",
  "key16": "13Lur5LPDCsaCMPa5R6dLzcPZ5koVbnaQSzf4beyn9JCRNGNsNMAHP4DbtPLKhCCzfixe61UKHoXC4fbBXxrWyq",
  "key17": "5cBBDE72h5U16QmowTkrbYi5krWZp6cMfESX7WvRFRnJEB9v6iMx8Ahg16yVmbfqxdFeYY8Ev6nZYWzDh1zKaoBr",
  "key18": "2PXaWYcbAwgueQ9rjpr5KzQBw5dm7KUjEim3fjrsSihEo9tcE9gmZzydKG32qScjQvGQB9GxjMMaVT8q7pCEbE11",
  "key19": "3YyJKj7U79E26aTjQG79WBPg6gWk441z1ifD3DtXUmCGxi4avwQuTgpnNMgQNMcjp8gt2H8FGr4RHdxtqm67DNGq",
  "key20": "GChwmP7nESgWEZ6oQcJ35aLPEaQqEHRDSN3U1mAsTWTFMD9QLECMRHAYEVtGSnbZ2tA1t7R17EexHDBjPxe21wp",
  "key21": "4PvycidHV6qMbuEqsiCh6FUZs2pVD6Z3gfTAbjkQ1gm2HH9Bop1NLmfbj7aVHJ1SfyfeFB56eRUZhG39JeVYEXFq",
  "key22": "5TmNmVCtgSPVsctDZ4Lj7ALLB8d519z5hvDjahxj4CAoTUMd9Co7nxaNXKhJiFFeb4U69mawkCWYsLXnnJXgbzDj",
  "key23": "5d6TGVsVV74Zm78Lxye9gKrj8tJMBbyxMK6PDtp4N8shbxU1bFRmETTEUR4aMoVDmUt4JBJvekXZGhc24ZMvX9ZD",
  "key24": "4C7kfj5TXePB7Qsq9hGiTiQyPwJ97SRxiuhKfd28QPKHvssMcj4yqTbmSk13Zk7gAndEKXSKq2X7YFLHuenBY67m",
  "key25": "3AqojiUK2CC1fecB7cESZXcRwua1WZfkKsWKhnALaYnQ6ZXVNJEqSfR785qdtzyW3Ub3fRmacpc48m6eAjJ35pSs",
  "key26": "2Xayf11uBAeY5ZaYWoxVPi61guDvUwqnwG6jy5BCLcN2hmZ9XTR8mCQ3aWMWftosmiRy3ifXvtrseqmHn7s3LpMP",
  "key27": "2qHp4Y4Vekif9j7GQwrCtngj4e7y5e1tquHgdwi2E7STCgFKbGMdaZCe77mRQiyXuCtqTJuDvbjLsasLaDXZ8WaJ",
  "key28": "211Zmf9dr3MKVXHeWWfuuRFDo19EizNtQjBx4h1ciGcKtEiCiBSqur8QgtUnHdVvAHEXKjZBERHPhB4htpQuXGLg",
  "key29": "56XqEN9UvfJHC6E8HJRcF3DDCisgaGqMPDVvToSYKf8Cecy1eCS4yfTYbyuLv7iFC6SNPzi9p3tjec9wvkDhXCA7",
  "key30": "3nr4Z649RYgXxpeNEArktgPow7Gv4qqaxsqcVvU9pQys5cuvfshDTkLT4aDjzfNm3uuMdJuAY3XBQbWSrzgEeh8T",
  "key31": "5SVYuXEk71boN3S5EgFQ7jdzwpSYkLRbjkDQ6ZwPcyRziqTfBzkhyoibW9qwDcBp8DskfFApawsS9t3DAZGLfLPY",
  "key32": "49QNscjY71RV6Nh7Tn9zrBJTRsBeSgZb8iuxkGxrQ5GRB5kpWpR6iuEkhSHVh4siqRM5b6XzRamVsCtb3V6eH3uE",
  "key33": "4CSPaSEBEvCnYgPV9ocQds8tcTgGZedGawpfFstTugRuZYWSBudL7EKk5yezHSPZa5XjyA5HW56sGhggQP4UExDX",
  "key34": "4uR9HjQRwoLaeb34v6rAbY4EqR1CeV8LtWUGTqDVvpj6qZeHhx8gxXfQktGC27XL4qsRfCqed9g3uYAK1x1JyMhE",
  "key35": "2QPquBifJFbFiWQQVbZTpNXfo81HmazhZjMNv6tmSHMiJCMcMRq4ohbdbdCoYNtTJUoFHjHsdY6kpYdWcP9A6FC6",
  "key36": "67conbro6sNVmqvfKv28yEEo2tPdcw3Ck2StkWQ4HNXCieymTaEZk6Vixr659FqU4kySV3mrk6cMmsSvHXv3QBQz",
  "key37": "5pHBX75m8eQXxqGM4sYQisEhFT1o7d5Q1VsVMfdwoXC4J14j7frBZTrc72ui5y4VtnnSqHYmGqxMuz6sm4JCncFP",
  "key38": "3wZZ2KWcj8Qh9NFyj5PyrqQtmqB6gaqaHVYVDDTTF2yqWC1neWdp24yWTvx7AGCn5i6Ed3vBDbnrc9LUPV6tXaMd",
  "key39": "3HJPMvHeTvwXv8rpjgJ19Ltz7dLgyYon7JYs2sSEyraWPLKmfoNzM11RXBqnh2sQtyqfSzS4bx9Wi7FfzUJQ4xAr",
  "key40": "3fsEC6JYeKMbiF2qHY7Q4rRsSycYApXWXUgMqXd5hhYP8XvzmHN4B8JPZhSjmFzRM29tRbFfndQ8xDEhokjiV1Ga",
  "key41": "2yEfNTDMx6CwqLdU7Ry9wooZuQNo4uhRcizZhkY3f8bB63gMuGP9Ycr3TwvqvZuQGsMHxDSeVixVRbcCoB4SN8x6",
  "key42": "5iSpvx8ZbDLVt8eWo6ZSei6rszbaG3kjaQ13WzQER9KJAbcbSDNDSBwYL4x4AkDp595YeGQcantZ5L2JtKF6ig6h",
  "key43": "5LK6xpSrqpGParnE62vofrPMtCZMVBSi2xU5KQK1ros9tJ72A8FHPD1hDvdmjm7PzngUcW4Dkdv3TF1CKMN7VXG5",
  "key44": "3sjDeaTDSoC7da3u1Ttfzg9nJyLNeym2tGScZhpmbjePnfpqVEV6ZLsVqKTL5vqKMS9Nq4FUUBrMxy3KLLXZWdah",
  "key45": "5diA7kNTdHmmAUehxTgYsvNW6iingnu9pdKX87UxTsMo9AZEmPz7JdNohXaea1gsNHN1bZfSrXJtTmq8pSNGvW11",
  "key46": "2HQzFX4GhnwBG7kHVhTrXz97dSdAidXBfoMguwkrdtYRxW2AoXwnD3AmKJuYeQ4bGd7ZKDC8h5MtBFhtgsXkNya1"
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
