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
    "4Fc7QkSTK54P4WzjQynQM7RDtG99DwTDdk7nYR6AUpi5oz2bTgPprASgmGhKk8mPEowjyBEZuvRLrGuTjMXkpVGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7LKY1H2HHDaVTHynBuophZZktC2UZFTQ3PbzBWZnU4MBHLocc6pT4ZftymKPXnufuUf9syJskM4CuwpE1kxYgvd",
  "key1": "4AV7fnmQyZwA1R16aTCqmaC5vT7qs9aUsJEaUB581xae455dN5QJxsRzGHRJgk7wgaBUsUzy73kGZtYyYqrjsyjo",
  "key2": "ueTnYQz2JQxJYsdzbGwgYHnuyLdHBRVzhV55W1tRQUq1nL3ao2r6GY2kT5KabtbqE5tHFfHyXx8BFFExfYpNYm6",
  "key3": "2KKqxdQFNCJuu8MAB2oysRTAJiEHmtoNd9cYivsVpVCzZLick6YvJ43CWJyT2GdrrEWEAXMRDWj6k1GzRb1Jt9F2",
  "key4": "2Ymf6VBaTQLRagrpd3GKMrvm6dRBSEn4Kxav7MSou1eb2puxcsaP6gU4PgT2pfdM92m4eATAHvyPABh9wQCVzvFM",
  "key5": "2vW7n34rjhxQFRPZkTLheLUbaKWLypajMntCG5PnqmnXSXVX4qunXKASwzo7quD2nJYqgSqLwdKxgrT3Zm2cDKKK",
  "key6": "51vcuVXCvED3xCZmgTeS241FBDZyZH8mDLsspoXFCAYXydnMpwUkeKf21q1eH9wjfeTwHR44htXSR1BnaCXRdyg7",
  "key7": "5aWpVf7jDbNhHT4iMd2x6MFLiLdbhuNFZvxsC2yHcbHX7M9dz8mMYHX3DWBLbMfAfCyAdb8Lx3cHeFMJLPzkYvDN",
  "key8": "5KpsDwdM36YULZVp66PaUX4KV3U82kxcmPRhPKeQYDPbWufa9b7mKWCqEgraHkQLWJvJ9dVyfpydP6o9UemmDmVC",
  "key9": "7XCwHCRcZjPq29aMh9oQ8XiYHWaRGSjTmK7V7nGqsk3jTES8699dgnczp7eSFdtCbtWaWuwvfKgnPsDHbgBFBN1",
  "key10": "54X3tJ89TM2U2pkdm3Dsh5kyQ3nhNLoL7TrvdEk3FAw939eL1Lp9ym9ob9G6c5yhmHBzLr5XffTWiHNAZ3M64Xdo",
  "key11": "5rVMkNvfkxhPiCWRrGTUDJ16Cmqe5noTQcVGFNS1eYFuMHeYgqAXwsnZnjYtUYwFbpNUzKQYbq97Xan3ayLZmH1R",
  "key12": "4694kfeZbYaLEJseXuXPsw641nkTAoAx1wr2gMNBUY7thHeyp1oj9myb1XiyhxYxJxe9h56b1fxRhsBJZwFvgwZK",
  "key13": "2Pzc3GWB2dQSMN4hvvnN9zQpY1huNXpQwpCheNZ6DYUoFt4PYQ1x32QbwMsTBdWPzoye5RkKC9kVYK67GFYyKnAH",
  "key14": "36SoKwL7mLV7PY77zMzuqnQsG9ouJuQqXT6muX3UonYUaAxkXdDvv8YHS5UDvziK7uXqV3SmaxoFgHNL4UAMjcp2",
  "key15": "9kBgZG3JcqATUG3XxdGNmgDF6JdLwTacGTbnV4JvSBhQNkPUHZveLFAmtWFNnks9jaDNutSFy1LKU2W8N3p7Mib",
  "key16": "62EpLqxVDxQjLWy6pQNpEfYoVX4pZCZ63PDTqjrbPTS8a3DGfvvH2hv4n1ReAAitCLCXnX6LbpBsvnCSd7AyNKc",
  "key17": "3Wo9PKGRDFS8eGChaSnM9z1aR8J7xFzsCXhVdytgYEKsqUn6A2ZTu6JEMYJbveH4JLRQi21VhTGErnsv5fi2y3gs",
  "key18": "pXts5PTQPMfADDVfXKsCzcjnmM6B5nNjCQurpUUKR6CrXeyuELMgrmoNFNcLQqs2tUwX543iaFuoopYjaSAtu9L",
  "key19": "4kt1NsfD9LU6b3eHcQDNmqXkmHVyucqSXa3oiLvv7wo85XjcQnBav7TrYHF7gECYDgGCAYcKnH1beorv1dBrpxnv",
  "key20": "eMQKEhAuaeP4sARhzzcd7catoDS2mB6i6z15gn6WTiBoc7arowoYYWafLAEPK2NiHU3noVSfs8vKPgJFXVUKpei",
  "key21": "4CcfT4gSjgMaoU3AKVmSikqaFGWMe4Ryri79XzeT8jSgcdeMKn1wBxDuSGb6FmXbAWcC4fuY6bbD5Dvqs7nbPfHM",
  "key22": "66X3keJFBSb612uAjAB1NmUhHTmHBSRGVveq2T1vV4q3gJF5EZAyHAX9Ai4ci8pJPd6mRmaUEWd4Rqj9NwinpBa9",
  "key23": "tifFDuv2nsWL6dpXLx3NkrSpWoxHt2thWZu6QmcSEKwNNkrNnbtfyb8v1R7ELf1DE3hR3Va6TQ5L1PZSyzrzNeX",
  "key24": "NyvZMKHe5WWVz47wZGkf7voEPB4YAegBmQ8vjLErTESiLD1W4wmemXyoBvEC5uoQEuZgfWGxySMZNUc3dWkF1Ve",
  "key25": "27NHZmY3ZHhE6wYA7gRx1YAx2LnbMfV2baPyGxtrCyAu8PFopMxYAGUgNJxLM2JB5xABH1PUWV5NVzcM1tz3rnhk",
  "key26": "3Hgm1XX97EDVmW4px33dWhUS8v13LV2p1f9RAN3HTMrEpNhPD82ZSijpavwWNiF97dg3yzxE2dbCfMoGkzwgaGPn"
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
