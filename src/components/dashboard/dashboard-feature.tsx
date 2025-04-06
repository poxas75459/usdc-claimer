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
    "2L7JRXVomPYUaaB2PvUewMcnMA7zgf9Q3zKGfEPTBioHXxYN8AQTC3UALWFfMq1xBnHyr5egYpMmxQMzuDjLE8mP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iRCowWH1ydLVwHHYCmLhZ5AJL7w7ioApSWyPHehqT3bvzRZ756qtZs1spf7JU8MKoLFi8dZ1F2uJ4VJuJC8d2u2",
  "key1": "3acGHDjMtGrG5dtnvkKDMk6XSfJkiVtSedXqcu6HMFBjNBYXVqY9yyNEfvEkf5xPGm7ikdYpSggeHGDkSMssqRNs",
  "key2": "wi3yNmE9Abr53dS4iqkRacWRjrTE8G6sHFsbME6mobQnwaphTG43RY4ynAvx31jjB8EiZgyLiYYXXTywPZ7st6T",
  "key3": "3aHTVQ5QUZTSGRFMyjC9ZyELioVkSjqtQaGegtuDAMWbjmjiqyRTJ42RBMzf4NysELFU2nC6UU7HiJhMNYLScB7m",
  "key4": "4DBW69Y9Wogyj5hmYrfAmuTwQZzfue7EqpcgMgw8LTaMkNQmLVaTvo7PAT5mRraZiSv4JVTiKNr71AebfQp8Eine",
  "key5": "4mLoKjpnHdBUQWQ7xjqLZCEUYRAwQ98n1knScTVYs2tYF37EZ18r7chMEdjJNUo4CcgV4WJkQasKpCJhxBcv6TLX",
  "key6": "273hFhfhxnYzRTwxju6wY8NofctzViRRM1Qw1jME66bvcJNmdbDyaVJRFMhYXd9dbtjRbq8pi4DppKBuJTPqUp1d",
  "key7": "p5L8YoygaPQyAhuBzpyFyHNZSGPz2u4GXe92si1GN2rcn9vdUkFtJehs3RiVDqni4D4KzAVdvk6KaT5WMY1ELfu",
  "key8": "2g2xh5pWfajyqCM41VqBWwXQWJeTZdvauy68Cue36iGGLfaVxoMDDwF5X13PA54gPdrKzihyU96mYVR251xxJq99",
  "key9": "53FMnR1Q9fahDb1F6srHxV5CYUQctECtSf9EQ1b5tY47LzeZMeGCTy2a8uL1k7ZTMovU3uCyWBXqNsbPJgc6pm1K",
  "key10": "3GtmqvJHsWvxnJm74kBYmiFj15Pyw1Hb4QJvSKmUiEhUww4BvZYpaBSK5KStNfGj4xBacGNkuY4g9yhfbq3iCkxY",
  "key11": "3vVanuYR5sEmn635M8VJ2uGJKVB2TYatgUpyCYRcXTuegDSaDhsPjVU7o7fuBt8htAbVMAKAgWoBbCMyXsGKVg3N",
  "key12": "4ub6i5QJPfX1k3csL8xKAiiF7njQsotq4NDxrrCGwjUyv46pncd4uGZPYhrYwR5dPnc5XbhRfCz734X3MJxgDRjq",
  "key13": "4LLxUvxHsUZRS134MoHhUZePr8mRdZaioWsUJAytgLQRQPQXukRwU9phvfRuQevxXwcgYB2cqivJwzKENceuPdjC",
  "key14": "3a9LNkoSDeBHScc3kUrBBexRR5s4MwNke4MxKyfkaH6zWTGrSWYiUpSJfeKFeJQKHihECJXUeeyFaqP3B3mArEsw",
  "key15": "55EXZn9sTvVaPvbMmq2YpDwuZSzc2jn1tuFkxM5LRBUW7S5VqyVYTE7Jwqe1gH76waAdjN4RKUHsaGDYfKMB36UU",
  "key16": "3utNnsTufGEvAFpjthd7fbMKAg1thS2JV4MZ7gums28mgmNbJimSd3QDgHSqUFVLz2GJjvZ7ERUYMe1g6WRLGktL",
  "key17": "2nHUqakBsxox4GhKqMPqr1MYUpFkTULg67uwKm9DoEKw6oLqQaZqK1SHQK1fTqXU7SApKcSK7CPdHsPCWLyeY74U",
  "key18": "36MbPyCfBZeRcX4Ez6vAmy31p8SaJ5K9uiKYB7hYLgHDpqcPJVbgF6jecYWGBaypXZSfbdAPVjDKbQEzwdsT3AdE",
  "key19": "44oWvLW572MY9bC84gz6GH5kJMBuSXSjyCLjhSAx7iB4rt5uQFd6gPsrriZu7W1fPcQ32uzEuQCcxnwNEdhmfRkH",
  "key20": "3iuZxYmZrzpRu3Lz3cxXwkSJwTDvJj5kGHjNqeBYufNBxixg1JdywYi67m5FSW2T2x2os8j1aKH7ajq5qcyJfS7G",
  "key21": "3BVXPXHJ1VpmN1LwxpNNHnL9ZTH6oS1j7woBPrQhyes42jEgZYtSdvopShhkx917gnJSSaUdYf65KYda1ZNd1Fvc",
  "key22": "2EXPigtcGg5NYhawWURuAZmQr6k8ubYUvkBhYmTyqgkj2aTzRGa5wy8WQsNbP3U4V382QJWvJbnUCfrd2SvWFK8J",
  "key23": "3aTPLqqH5i8W4XDgeCFohmM8ST7gzX7DTbaHCtAgytACFomUP2i54qm3UihYaVGV57QztoMrCfSP2bX8NuidxMbs",
  "key24": "3a1j4CXKzP8ZGHxfJxNZA3BRGKUBC4tqmWcuYM9vFgTb4udj1AdetEetrzaz2VjJrBQbYJrBFq37zrfjg6PCTJ5A",
  "key25": "2pd1Yd8kop4bhUHUcsxgKbbbUBucDhsMXJ5pcpiAr1qz6FTycQMeGLUPYBasc1paLsLzk9tRKkX5yFzXhyBX9Qpj",
  "key26": "3X8sCDmsYM7WrBEkci7aVpY3BLk3kvYRE5J5rgRGuwxC7SopXf9K6WG2DWphjabPR28ReFyPMvjXkFddxxF4sZRb",
  "key27": "5LQtPGN7TJRwEkGquc4cjJuSTVkLjAcRomns3Htq9THc3RmJjSTM2BQLhNPT1ScejdPrYXZDbD6ed9LJ7ksKYsYT",
  "key28": "548n2uQ5bD3uLNxQGx538GGg7fxzUGnLekmNnCqRr36Bhz7hWpukpnMtcLWJGHbbnR7WrY4nN61Urv27kdFFY4c7",
  "key29": "3b5eD4HwCTauZdixeZeFSsXfjsQKc8UZgenvXgbR1rB9CFkmWE3mHr2Pg5BwocdnCyV8T2qMx2nsAcqMWL6MPQoD",
  "key30": "4pBAzd2aWQ8i4vbsFGGgc1hzULThXaVGGxsZFSKB4jmFqkDQSiG3gxqduVNrmxgxUyA4YN33JTjnU9345Ea8eVtL",
  "key31": "5uuXLAgDUCKsrfBhrerFVW8vehWydipK2cUBN1tCDpz1978RL2rzwW4Dhuw7HSpAtmk6Rufx9LUmmHvFMhJSdeHF",
  "key32": "4AdPfsnNoZX89CDxsfefcJwJwbMv7xoNSh7QXXejcHZRtpGajXcv78b3gHaKLmqpAh35WaYqvpR31JsoDwGb8Y3W",
  "key33": "3WH8sUCZt42huJSiDHpc3XUssy1riCk42wuwhYsiSqLZ3RvT5je4iumHpFrTu8dPfggy8MavkcMBkCDMZr6Ba1Ei",
  "key34": "3WXx4SD7yJ2WmcEoCDqfK7e1PqHuLeP4f5ttu29MsnPgtC59vDvSXiBbKpU9XTch2ZNW3uVQvNCLVTUAYkYG6Aqq",
  "key35": "3wzL7QA69SX6x9WedriEPUuGFSd6DxjSAkziB6Pf9Ropq7E8qHTcbigNTnfoVet84uG353M4BuHjqLdDcUeJ9HZr",
  "key36": "uKQQyH1oiHWjkNqUmBVWcWo8Mr7PBxLT7L6frtxMbfbdevmFVDvRvMSHGWHb5znJUdxQ8hhn6o2WKn2s4xYydt7",
  "key37": "5buCqL5V3492fU6WNuQwEFTjJ4PpK3ZTZoYBrxcSCbmQfFDpZebBEd9fg5mpB7m2PHLt7iEoYAcgswRMHeUQRZW",
  "key38": "624NkK3PaXj1G4do3BaRsK6Lrw4HQNp6xqpTb5sGBiSNi4x4P9Ado9iJXVscEFE43K63WocTBLgC2ALecWEEk5Go",
  "key39": "2hZ3FQje1uy4D5L6dbYhCN2czfX3nPsddRtHcopWm4TU5cukMzbEGncmt479xkEir6WLT6Uiyz3NCPaanYbYa3wA",
  "key40": "29rWtVTXGzfCM4aqU5PC1TtiwipsJYCoXvMmya1ypesHbNsPyJwYhuaxvZ3RrpsdVBFgmwxVdVnntWLg4sfgKTRn",
  "key41": "41wXsWEF4HEuiDe6HZpKkpkjCPgx5f8Wboo4YcWTvjCHAAwXwv3GLNQPUJtKVdfHRsaGG8TCe8yDf4pNvTWjgtCB"
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
