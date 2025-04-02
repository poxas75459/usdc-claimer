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
    "4menKpVFz8Jgf74qiUzR6hrxpw73SDSL5kRmXu5JLj5kSHptYzkk8LkNJRiCrZkKiquaPfDT7BsLSb8bBWnE5qab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43NjXWjc3MLCCBPHM9M6mqrZ5Zxw3e6qvfsfr2kRryoYC8mAQ1iJjWneKMHxw1LYHszA1fHuH6dMvXWEXNbQpHGe",
  "key1": "tvzgXMJ1km33czeJDftmxYR6V7AbQQoYDsXqEVwN2i53wrozgodX74tThaEeAA9FQQ8h1FzUF4GuUjqoxySCRyi",
  "key2": "51WGqvcftcUhC1GZtA5cfPkhZS8xdeaJMHdRGKuu6dAeTU8h4c2MekexSwVbw3Zoj5d4f3ZcNBHoAsdNCWDbDd4b",
  "key3": "5gu6mUn2LF2gir89zXD8kvvy2uYYc6mHNdfsrxn8xcZWigEA8r4g6MVStv2Wuc1ajmpcoMyZq5KPDN842p4MFEbv",
  "key4": "Rs9RxFiRYPPoPowxLGWxBzxYoCRDSbFC1n3nfZ3s86GBy9veY3M3yrVmYnQ1qNYjPtjtUeVBx2skFjs3y5heupy",
  "key5": "5B7xeL3wEjGKc7pp6iRnd1TzGAk3PMJ2xnWoutKE1jM9Qz3ZJoQjUwDkpm7fZ32sEW7Q5pmjWx2dUuUhkGwK88dF",
  "key6": "4ngqsXdAJVey9nU3uo96ZQULTZEueP5TVK43hiEyYzRLYujDK4NeNp6TKg9YjeZe5zFZcrzoyTexcurdoL6Q6NNQ",
  "key7": "4KpeQd9ZD5j4d6Rk7aDKLVuQ7ySbpxdULWifHEWYypbzXV3gYVAZprBaKmGSJbS34fRiTV8JUBAVHm3TVViaFmNk",
  "key8": "3fCTsUSTwArZcWxPrZ1bZ9sLqFMa9zwW6HAC7S4jBX95LrgBJf9ft7P2tLZgXcwXb6rRygtAjbtBAuGiGQQjufdU",
  "key9": "3FuskJU8EXKhya7HFgVETPa3wVELDfkLVyjHvKtkBViGdEZMSh2Njb2Af6LNfKoGBv9LLGsVt7jqBwwvSAjc6o5Y",
  "key10": "2cocrCihj8VyUjhhk17SdsU3apC56qsNf4u5YrgZvfW62zSmo512XLv44C6s7866zCFuD6CEg1MBA5Z3AvCzZ4sN",
  "key11": "3xQLSxUXfpaokHCHF34KhmTzk7CRVHFBYveGzkJwbV5RJ4xmkX1Cubd3r7XrmVoqR644kdwrx5fUKUgKFvFFGMga",
  "key12": "3292JDPuJZYeDHxCoH3U9qWhE1cWzStdtCj5TKbKeZesdcPPm18wgQ4xzbdVFfp9PjvVHtR7G62mX44f45e3VmR5",
  "key13": "5UwpHxMUjcu7KwtEL9JkdrgnsCLe48L7chr3yypaA5GrRLVgG3V9feFyY8X941qtos1FnZ7mydZUFFHLHW6Zbktd",
  "key14": "3N13zqLnVJkyD6avWAQxbPaAM8qKXzstr5A7mx6pEq8jJ2MJcXi5HRSLWK3dFxnvsuVhctuA3nfNTiqPfa28JYon",
  "key15": "22X8wb3CwRA9ozaq7oD8AtK9sYToF3izrZx5D67xubbRHw6hPexYgtWrpPssn1KVyEd3x2SGWAxqo6aafg4fqK2n",
  "key16": "4kHhvcVFwK6xJgaJeU1BgpTffCfWnuamzVJ1UX4HR8QER6cUDx2ZQMDHUUnZ2HBnghMRUQqVyr2kiapUcYUNWeAc",
  "key17": "5nS1x1xNuSLZWTDbmDTCBTNpQTuDmekczpv4W7Ad1v3VxPKrtgmJfoi3LoCsLSgFZAvs9xMxSn4cpZaC3akuwf9X",
  "key18": "2oJLjBFtCNJg7m74PAwHcfGo7kwmpqu81DjzmKt6b5croYSJzHURdyKYT8tMHSb99h7QE2AnnipvC7rdiFTt9YjV",
  "key19": "5yyNk47h7TF1Y74AdD8ztWGuuW3HHzfsAofoeLfmaSJXEQvS723M1tgtLqmiqxXmrzXz5apNxV7KbQosJxuBAX8H",
  "key20": "zcE8qDHvmJMRo62qm2aDrMp1bE5tLwMPbRFxrK1QNaADkX2hHLYfC2eX3tQ8ex5VeZztTymoK2qhVpUY1tZRvTu",
  "key21": "pXZVF7cp1NkrcsijFZdcuFa7iq5acN4voL3Tbsxpv2eU3kL73qKZmqU9sezEgJjd8Ewaizz1qSUH9GZwXoHrpxV",
  "key22": "csaSVxwCkEtYAefcfcqHtqLtVuCQjaaXrVYx6s6idPuYPhtNqodUVxvzsET1Z7Gmke4ndYGpygu6nhthqRRU76R",
  "key23": "5dUBSpqJc2DR59Na7rdKc4cUAmTv3EttgnpCiu2Gq7nMgiGeEbcYuRZbbcuCtRYJwGF9ZkV71KewfaNNR5gxkiJu",
  "key24": "3RuKsSYd61EuBXw4GaiCB7gxJbSv6hGZYqvEWpLRYaxUMwtwZW69PgAgLAdMESvYrUehLxgHYDMsAaphE7wzppfy"
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
