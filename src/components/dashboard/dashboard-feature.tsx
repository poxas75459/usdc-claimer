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
    "5dUBee6YPjjzr1hDAL2NnwffakMs9YiTibWs4TX8Vo2ABDWYT97uCzEbFUV2Tr7UKXc58rb3D7G4M5LMPHXSqW5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UVfDbrVpV5yMZm2B7rvD1tZdZ1xzFVBkbiJF36JY8tyrhYzLrBQFGfWhUnoPyMGBSYnwmQyyqE5abCoyBbw1AjE",
  "key1": "2ebAxG75xqjmcdBJXbzdH7UKooqYGSSD31uLtCEQNNCovGHCH3ymxaC1YgFDAMcwR8LRC1izUgQsjLct6P6XniV1",
  "key2": "4HXZH7UhBRBT5e3caXADtYNx4CNuYhjjhwPpDvEicVcwi5SoSkLXcCVZtaB5ikn8AB5B6i5Bc7QytvTtbGTAcqgG",
  "key3": "5ZsgEQLBH7JgdLiwDSZMk2nvrtHLcQTdKBsoXBVKqz5Z1xYB9JGDKuFfKVTzrcJwyQjzeiGacPQvYhyh1pHaHGZ9",
  "key4": "4Cg12nBnsGFGBgBR83JzwaboTcRjkZyBttySAh4uWnuVL7XBGNkcE7uMY3Ad9e2NeVCMDFKuy1fuTZtg1TsrGH8j",
  "key5": "4o7GA8cY9CYuCEQNrQQpfEyp8TadgfJ8fbBH4bkctSMQhRT31ZJJsUHy6J6YoEgetaEUCQfXopRjbhEGywkTng25",
  "key6": "q4xpgDxVLW8jDC62WuJgHqPtm9Vo7coVTeSRZ94NpLQ6GLpb7DVAvXSCTskp593eyzsqczbUj9DsrbbZEvXGKRt",
  "key7": "3UU8a2JUFBvyMG34dUvd3PxaVB84hPqtb8ZUWzznDT9X2V2wfpjJqK3faRTj9PyMrqvBaMT8F4FgQnu1kCJ4tTYA",
  "key8": "5Rg3H459XJVnsNusrJerFMAZLNwJu1btcAuNmjNjnWFwWbZrAJHa1ssXdz8rCHzhukL4NxizUNrcxTuZb8JFwF2A",
  "key9": "LREPjM25vhKYVxGSWcPgQAfkgsq9sku5ev11L4bvgmtVgsCsAstjbPqpcPcZqQN5XdAPEGveXWE4RXfzDtFBv4w",
  "key10": "531U3Ft1h17gBQme9FmfPZrrGmEY32VbVoFkJdtVa9oirqXopqG6pst7yN63TrruWt2BytS4iz3fwiwUAazrSqxQ",
  "key11": "5ksULon2ZVpzBhp1pyk58yBL1B2VWehWPMrtfZaBB2a4pRmgMLLqEtpfauHFePJoUZC4wrZCU4JSZfav2H4EA3ks",
  "key12": "4YAfNxeAYYM9w8QbEojW1Bv2Sn4Hj4MgXTfBs8AHasvCYSqxwWEGYUM83o1B4nYuN55tKivvXbJ86LyHmHHU2ZVQ",
  "key13": "36yGD388XokEKyZRCVJPSVh4ESjWat5s3TY3sE8WgYmMy1k3sczAYKZSW69JHEyf6avn58SJ7XbVpmnU8jk5UMsp",
  "key14": "2g8Z7s351a2jD2kJUpqiCfHVCvag9ifPsJHtFbKau32rxG6H2ofEu2pYXdGozyrnxsFgSLoPAsTxUzWDYnpF5U1h",
  "key15": "3EDwURfE2hbfKkFEtfVSp8YsSh4J9X4Wg5MjmBbMVPnBKrCVx6RhpgtjDySskAtTPSUMAdQk5VqQXKorSVc9RL4f",
  "key16": "5RjTdWkCackPogDEtoMJPCJKCMaYKKF4EoA3PBiqSMnKYHZmAcudJPKU7TRHQotQALhn3FFGaaqTJJLJ1W8qm3c5",
  "key17": "3XHhZ2bKgzfJtbPQYQKf4Prd1SfpP1P3RLfScadZGUZaF55YtvdQPmYWNZeVnN8ixmSxccq9wcV5fZen6WTADq6H",
  "key18": "RrkxMoqFPusxMfZm4rH9Fo3d1xh5DWQxyyjF87VyRRKi3oqgFKg32Es6DxpZGQpzM5KivjQit9tr6KHxQA5khQC",
  "key19": "4izBB1qWcoeexsK7hsgYLrQYSdrXhWjyVmg6oBC2RT6CwRsjnbqMQxR9HJzUpWSdTjeFdUJiwJNo2CddEUB6A5V2",
  "key20": "2hfx63aefDQ1mx2DX98Ynuo8Pd4DwEHmxbewRMSxaf7NkSb6NDkN1vJz3VeF9HgZfhfJW6nisD2LFCf9kxv2wKve",
  "key21": "29FnJALxSHNtKoHTH8vCJpsN4JvyZ35pqYQH436NzcSF6iiM1G6S9L6ckpjXhGebopaULTHJLpizRoBTCqreyCny",
  "key22": "X8RbDWKitMuE3YZabzuGAhBHbm6svTwZbtjNiwRDEfahXQsyjcsYp9C1sViSvWg6SB6knnMf2rpu7VJvfNR4UaJ",
  "key23": "2XV55CrCSo5F2XG1BjLyUk5FobHs28Y3yLc4rotci6TEona8xBD2NfjDW8GQVsC9q8eQK7EfzBtUN8r7JMbqrdBH",
  "key24": "GrEMWEHPwaRe3CELZ3pxvs5pxvaK4MV6aw4F2VYchJmkBP7W7BMfxzspCRGPgnHUryEDyGBodbczGCJPdkyjBEH",
  "key25": "3Xd3vtTRmWcCkPpoQ6VkUnoWhDTCFZNwoX5ziyzvXXTDPXGdgfrDKKojcx5S4YSDfZD16jtWatMc5sjznNwowZKE",
  "key26": "2eDF29z37eGdrRFPadkm38fVawCe37evTeYrbMfwMhcJg4ESXrsPgoJFktopG2ZtjQWcNThHSiGjpYAayDPA7TcD",
  "key27": "2MBpxzUmbnZbp1FXNX78cFWVB5nvFar1TaeTbrNsmhG9ecBoTFP44S89zMzZKYrXEHhnkiPGVC31NwbpEtMzNYT3",
  "key28": "4B3RZ4fKdwHppJyMWSRK7Q7Dy1keZegrTE2dAG9FmRs25P5HHVsVf4DxXqkpWQaWYeRLz1rZ7zpqdwSFEB3cjE4C",
  "key29": "5WcUEdRxsp9hSMCV3ahEfMS3jtgxsmuQw1SusTVL7wZKPs2ygNQUMcncpRsCj2sqfMfCwiKkzAWpaTAcmUeUeBkG",
  "key30": "5QS9eQXuKfn6rYYQ9BLSJaiYoEzG6AC2mvTtSktiAYjGMWw3QuRgohg8MvKWZU7Xh179aY7SDaF52qrN1DoiXFz3",
  "key31": "2EuCuGtrjayJ55c7ixNrnQkDkTdJ5PHtrhnQBi77ArPx7MoDVSC5sYuK61SXB6aWs1PoDXBQPAuuBtsqsvb6cWoq",
  "key32": "5Gr7TTFi71f7fghE4JupKaVGGg9hdUYZr1rpd8G3gdNcUUTe73VkJpwaXzwmwijzzuULGSoFh24k1hS6ZF2Nma6Z",
  "key33": "14PxFoGZVPQrZxFyYSRnzq6U69MwnNYCAbtEocFaLQ9qKbqEtMQAibQmSKK9Jwx5UgTEpRcEmRabbx86nVPZVkP",
  "key34": "4apZuR8RVMLCGfqkjKuQNE3RjAwdDK2nkJrNeNNhiZWw48r3dLCnCYsgnwDbRna4NqRDqb2qbX7U1WFcS8sX7NWi",
  "key35": "daAxApMiGhqkdtNWKagnABMv2hW9A2cu42SFk9tVuueweko8Ei4HqJC8dEhvNvERBC16zHd6N1nt6T7GomiLh5T",
  "key36": "3FB8bPYDm61aSCVccWcXC7ovoL3jDFMTe4swEd58V3auWQ6gP4Kia8osgV9KwRzrwZG8sRbekGLeyZAj6YCCJ6j4",
  "key37": "2j4NQ9p5mRmhh989wfmb3H94yZTSaKSo2pnQeV7ou3V3cWjMEuHvV8QdHkvZzt71m2uQb9SwZyA3TuLDyi934uzJ",
  "key38": "2eeD5uzSYENfmASkmLYp8mcfcPmqijyUeaKyipXHVLrxeCeYs24ogbaEvxDXC6d7yJo6VL8P1ruYQWXhDGnd3TK2",
  "key39": "5xEykgM8cnSm9mpwc4VEEPG8tVtsapvWz9Cc81Lw6Z16miteAGn29D71C8xecfn6Zsa5URCtZaun6kCxUf5368eb",
  "key40": "4B1wtip3iJJJor4SgQHUNTRAAtushquqb9tuQ7HNKXdQdQWNrHZi4zPHogtKw25jQjt5qXTnFRh4emtk426FG23c",
  "key41": "21s8agPsrkFK7p1HbS2h6a3hVuiDrNaGYTTjf7yyKZDJoBmJjChEBPkkDkUFV9QqapVKSiModnB78WeGFi6gHuys",
  "key42": "5VMEG1UA6mYUkYzhxeJM9mNwA7sWitvvnDCRqEkYc7xbx9txN2GLxjvLE2VrHFt6htNa1acyjF1KjVSoeis68o9R",
  "key43": "2ithtXn2c5nFXvwbBKEfyhXEAeagsfD7UgvYKgEq86aLHGu2Rrry59NKJw9pYerqgJUSLZsjL9iGh57uDAXSLbm"
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
