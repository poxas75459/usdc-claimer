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
    "4hDM6rkFFk9pySVs9tk1kV65YHTaTdZohMkCsQtTcSeN8ckQf7nP6ouC8jF4gEB7yrEAH1afbCqriqPfVHS9kLmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GsFCBKMR1R3N92kCGLPTWyJjk8tYsQba4nXnPWikSSSsVVCzPLuNHTfHpyBFHSvJJ7CFPQbpbd544g8nZxanWqR",
  "key1": "2DZjXqzBnrfTRcnfvh9krpAkRbtmGHUUywAChFBrbzJjEUtFsdqpXBQdVNaVETrWbSf6nvafPgxbbgvBhs2jyTG3",
  "key2": "4UKq5fyD9Z5kFhPx1Cvg6SVG3AR7iA7wAMduSDgzw8f3CsUjPKAUzrjuS7j3E2peDLMBo5V9gPE2GSAaH6wYQgqW",
  "key3": "5g1tbJCWuTkqpNoCxRnPhWHBDeUrhpSCxu49YLJTKjcrxYHjT54XcGLbSfJV3VXneDZBTVy4Dz1wQYVE19ZKjNvh",
  "key4": "4AEAQkBn6DWFvm4WojcZe74PF4rtb6A4UpnVDhcUhX7d9tLn976ayHPTz5VHdzgrzFNHGbhKmyLyHh5jia1vNAsX",
  "key5": "5wj6whfRh1Eg1JVTqyq1A12bE2MXv4NDY7jdHLfi7TBfRJZREpk4Bbm5ngWHTvptw5ypyFqGq2huWLuVdvMGPBTw",
  "key6": "42rhV9TFr4EJ45zqCBssMnKUbekVuhFyKkfpck1EJSHQNCCLRchEtPjzaMNwwq5sZRerGEocwkNjRos2KqKRaTnH",
  "key7": "5k6QES4jJwkZsNE2uQnxQbF5faKLEBY7tJ9zVuivF67A2eqtroae8T5tYCroYN3mtPGQinLymKqDXQ4YHXh5FfDu",
  "key8": "3Ntv5ch9eM5Gwbwk7jMtu79mqjvQnEs7zPBDCt5sh9TSwkq5cPSZyqZpWBLMoj6bWi4jQGsM6YQ58z3aaHrdyy95",
  "key9": "5apf88uRHGxcbdXBwvDXagN17dw4LbtTfQjusUSFyZLMJBR2HrG2AZYUfaUftt1ZpJzoq6cV4pMdCEDvzwYjnS9w",
  "key10": "4CyHV2EHBKCuSAMMUZAm3CF5rdwf5xy2KoaKD9E7NNnzL59M9K6zKAXD7nGDDWoqw7axKU1bc2zHH9m6jxm1DGUr",
  "key11": "4NFexXrWFZGPZzoufGWPacLMwxXdGEkWDRjjXXFYzAdUt1Y96TQQpR1RQSJo1rpESnWwNQnJX253aYuj6npaA1Ki",
  "key12": "ySodh35jMn7yr9AuLXVtVPB1GB83WSJXZzNCduKE5LpkyLRLgunrmUwRZrVGHS8KHf3TsCKvsLjwGxHR5qyDtxP",
  "key13": "5xhisrrzdwr8Sei47xXWsmCmhYPNKfnGh4nXjQ3qjMCRA9J7irSRVoTt8EaDZYjz3QqZZ95te8bviqajD11ws4Bt",
  "key14": "67GcEQytHvnYbHro98JLxKaH97EHZ3cjRjvKUoB79qqzrj4gLkYD2JxA5vxzvPmzXZbMQCFtw42ZirNzSup8L7nX",
  "key15": "TQmkm3YSbRL9haEKzQrpyDZbkBbxfTU1d3kn8wMq8Vs6qMSXFdWsnmpSzoG53b2qVYfKPcu9N2QLEBZCJUvye3R",
  "key16": "T9i5RWBUdSSHrBVa1y581zopY1HxZzaSxKWVYL4S2LSUtfyCSJYmuQhbzUhAsT9Qkjgk2xKALgYaAtXuVN6DdAe",
  "key17": "4EspohyvJmfe7Y1dwHwGJAQXqD3FSaRwK5ttC2NoJL9CWTwAqNCvj791y1J5GG7o7APLXNXnbffRDdP8z81pb1MP",
  "key18": "5uPbNo5PF5mfihH8Er2rDQe9kRSVbojMLLtsd6jv8xpNoxiGJVYx4aMxgrwKS7oSVz8wh8ncFsCgpRpUp4rV6PfB",
  "key19": "3BRFPqmA2kE5zPM8gt6p2gmAdzuTYw76LMeYrE89G8jA8kRzTN6WX4ayw2vzEkZvLLygjVcPYjcZME5nSCxnEkM7",
  "key20": "5AzzQBqiTujx2jPNBbrSyko43fYxP8HueDRMxDC6y1v2dP9tCxjuPpS7WpZbcV7rsLGG1RYt87aBesJFXFvN8ncU",
  "key21": "3eEKnZFfxhjaZZJ1qp1ypiG9VVxDeMQ9J21fY3guUfVwJDQzorMZgMMoKVtxz7FT2N7xPYQ44SGJgQCex41JFcB1",
  "key22": "xmMdsapAvjaQVqnVFGJzLtQ3SM1Exkmsmppg7VrFWsg81atmyfzB2oPk7ejBiFAXGuRFyaG6xxzdKkGmxj48fNe",
  "key23": "2zwdqQgMs5ctVbu8n5eYAyfhLdZP2obRZi318LUdmvHB4wXVeKjJAyB7ixeGxz9sZwZ4YTSVNb6aho8KsDFqk1Fm",
  "key24": "3cjm177eAGhPFiyiwYNP29WAC4QXjfqe7MBxxbYYSQLA86BLnQg3VpDV4mRD8wKZJxe79MLPYkWjaQRKCwdQXnpn",
  "key25": "4iECwsVgZkgczLHmSvvkHHavL8F74mUsLAUJYTUpM99UoQ2CMbzwRPL7ped2thLULBiEKiahZwiH3ma6VH76CyUQ",
  "key26": "3No9vfbHbRUKJeTZLThYonEcRib8HGFZyYSEYpjZErRw6udgVL5YQLsELTe5mposLfhEEKq5VLbcF5cemKei9CDX",
  "key27": "66gpnDs8WeqNN6vuzxhykttKHfiJRvWthSsoopXqQ4qaK7A9sZ8CMtxHbrMAzUy5tEs543kWfU4g1v6ce68Cayeu",
  "key28": "LPbBLeNhteUTCeZqpwThoCExnQRQZs4SLy2n6sLtvDMRMrXRSdVjd2yisSYBMN7YK9WHba2s2V6uh3zgDKg88i1",
  "key29": "4moRL99HcWporWHSD2NUxkHApaf6iSmuU4xiRnmWTgywbTASCFv3gdb5zQxCZWPcmaE71ZPhuey2NHjvk2pQFM6L",
  "key30": "222uymN1GBgcBv9M4te2EzeLYzA3y1tJoPLY14tSx4t1jJXhbyoNUnaft5HRNHath6kMseWJFe8y8V3M1me7Q5Ru",
  "key31": "3dLyEXGfnJLWm8havKMZdBqTySCE3QwoofM25y9h6viVphd6PUvqhhVpmrhuy2JtiwK6ViacLMg1K61Fypyajxtf",
  "key32": "4jPrfMNoyTDTr9Qziy4Dzfut7gJmdQ6YoFAqW7ePqjnKoxUwUYppHV11TquAj6teMiweXrUZC4S8Pcwks1kJSfu8",
  "key33": "rDBFbhD7awdV77gSxFuKyZUibGcfQxz8fC2nDFJoFqmgrwSCXCgYxZS8pkdBzjBc6kF7oSsTwDan1UCGRh1hBL1",
  "key34": "2qmmkm3cvXnrHEjwfJWZLqcZgs2KAhzBmu8qLaKbhWZeWKhPgYsWdBbcPSAULSEjCgFT6nV9g5rnXMuiiERHsSst",
  "key35": "5XBh178yz4vv9St373Ju5D7b3YePvtBTXXtpRUm46JJNjDE3U1vHaeUomsUpQ3VQEp7PxsmYhgRbiJMcN3xk4o8X",
  "key36": "36fWPTndctZwr7yiAh2WJyxXXztEKRJWofDhe45QJazsHpSf367vztoKDN9zPd3g1goUU63Jfru3TeH7u8wKQFJC",
  "key37": "2JeVePzkwqLEMCzuLKfaJco9KmwEDWa5zVwaq2wWQg1nTHjunYyz1TvTFvA2kGNAUZt5mbrVSj2DeNrQpfh4cZVq",
  "key38": "4MXcwF5FWDngBF95Z8wgMLSYdVZgvhhCBMfiyNBpGFJ1VfqyY5zkRy1X63qX4sqaVTkCzpBMmZjtpQpf36NY1yNu",
  "key39": "4jYNoZukM6UcxyV7YeCBxc33rTPUFKDCadRJBGmzXvTtRGdFmXn4dQPixpeeGH6NLNEmd8xWxo4J4Ydp7KVBG4T8"
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
