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
    "3paVf74chU8C1XurzAGqCXcLt2MueT4evnLsMEJfXbrGpj45KqSLs4GwYn52VupYHd6eeQ6pMskHEyZwKedDDEQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BDGXo3LpZ6wAkL27T9FrQUvxFV4aUrYrUqcoAx8k57QxKZVWjWtVW3nqTGeFvKfV4UE4E1FaUdDT1HsFMg8CMMS",
  "key1": "2xc1zWB2i6ZqWuRySdPqS3BRq1VHGaTjBpKafS5keAEuCYRALvY25yNXQLTZRhbx3zsXbWsyw88qytVxuT76RkSw",
  "key2": "3njZob3eEBN2PmFAuQkjAKsiWJtN7frMQMAbw1eXWL6zW5PcNCPVufacpQXpz7j1YzfTuqwHxCJa2eTfAD4Bv45j",
  "key3": "3SdU6NWj4rUVEWcKPLArTaiUb84DsHENxPf3Kfy3LJKmSrVp68p58zGWJZLTfEVRxYmYEniDiZjbkuBQxb2x7bcF",
  "key4": "5T1fbkqDbF6Y5mYa3acidsUoeLzko1F3uZYkhMf2g8YhrmPUGxqXnJeGrJJAiyKxSXdjqf17jvvUdfhXUGpHdxa4",
  "key5": "4wp9moTzHkKpc6dkmsRBeSDqTpX59qb4SoDbf1fuL3tHY4ZntgK6WM7JywKsmUKAFv73SkLYsBwkkyYXX7aPCuBM",
  "key6": "3XhrYheQgLDDqwWyRHFwm9uBaBd6hia4gXUjzrDtsAQ7FFoSTkjoPKsB8JFdFKUfugKwFfnM5xFto1t6B8Wwi48F",
  "key7": "2NjMAvt13a6JuDvCDabz2yuyp79RQrbw6FjwxS7ist8tfxf8k2Q3AGvQmW23eJ8vKbJUVLWXPXBwKQUMFDjg2hSW",
  "key8": "qy1Ca2FeYg3QeRCpTVJJCW5yn3koWJKsWiQ9GzAuucmCRPpfz4bnpANTsUXEWrp3MRKZWkT62j4A4XRhjXY6uXg",
  "key9": "5fVRnhLYUoQF94gA4kiWwh5vfbzp6JdxD4p8EhV4oVwXPDS9AMpgXMxc9wm18xuZoT4ec8w3q7MrWqLhikSUFmy8",
  "key10": "2UWvBujqsV3T89KjfvxPdKN6oAHkRJV8FbFNxW2fTiydfSHQwbGABtL1VSKx6Za3UHnUJLj7QhCUfpNLNEFfh63t",
  "key11": "5PnupxzXEZ9K2ALhqLJd2VkpqutDxGAKLmdjgEbjUrJ5EBR9JPhAbHtwaW5zByhaQvaRdZ6gGvHEeV5LXpsxNayB",
  "key12": "57Gda5cRftxEJmhRJAW7WZheant8G4cBFc2YTkyhnoyXMQ8cVKedK1YJ8ZWXbtN8FeHwNAB9vq1pMpmU6TfT5Rvg",
  "key13": "Ehn1hFeePbbGMCKvdoQwDUpjjthLKVHZLo6JqCVx1JgzgEFMAvihysWaLx1SiYH3PufjyVHHJxkknaSy9ngHiTX",
  "key14": "fxsgBAJLtZC3RrkDanJ9Xhj71uB3A1mxcukwXrrUQMRf6cDhHBPhNvdJQ5SK2kFCYHYZz6EtB5fcNkndJ1XcSHA",
  "key15": "2fAGFg8NnRjPXGV3a5j8jCBS36tSQRDWBjH3Ai2XuNB2WA1CqX1cgEVDU5gQDfGtVy1BJtgxzXXjK1vnHWUS8fq7",
  "key16": "5cVzp48CELEhBNQvYcxaXWRsWEYkoPwZ41bHRTaedeWTGmj9mPQbyk5f7DXsyS4TYhFFnf2EiCTCMTM4Aa17yvCJ",
  "key17": "fsng1JCP33qq8qV1NKqKTh8eBYn9aqFiRVHywRfvM2ARZSKWdTkYK6WWquCsDbYEvsp66xr2J7b3sitLYTWKmcr",
  "key18": "3wjmbJYNm7Nger6jxSJrLn4xz57m4FW5kWCVZJNYmMN593iVZuf8e3AJb4P1bBApnkSNhCe7FXtUofzwh4AM3ifo",
  "key19": "2eTTFJmCSfYzNXHaFAyRWbcznokAzAErBeYExV4nknvQ39ena37M6JSTQx23TLCmuXq9CoirdMCTrP9WwWLtnrZY",
  "key20": "w89LQSEe5tJKjPBLXdKCTPK4izhoTqVbptBNX8DhDBPD54WQziyUx27i4vcqefAxv5L3zuBUQDBzWdoMoqLtNdF",
  "key21": "oVWooZzyuCVuzn4wg9HiUUgDbMTqkWnSTkXs33R1jkuxWBd6aoiSTiyYzk86NDstW6hYm5fg7Mk1XQQWfxEANyh",
  "key22": "mxRiAYGfhXqqFbdivePksTHbExdMHbhUE8ELrfb9Fh8gPrVEyMKm9H8Y6p82ambwkq5Mx8keaFsrzGwAqe8i8J7",
  "key23": "5VBiBVMastkSiJpDzZHQwpHoBDQfmGR2pmfk66PLVzu4N9tRerupVpvi95e5hVyvittveVf9N3HxkE9tXBcAtSfz",
  "key24": "5J6YfWa7KX36zbCep4sTF5iLrwmKX8ryHxPvAJqV1BN2DwbLLLxywxp2dUn76Zg2GQ4kcQEbYNES4dcAmP1PzTVf",
  "key25": "4zgUnGz7qwHNkoWKC9piS1dqn1PqYfW7Se9h7fvjUy5hdVAeCf7ZF9mubzfTgzybFheqAJ2FvzDPzCvM5MYuqBer",
  "key26": "5pmdxb2LBq2sHumG46U14aZDZcb9zdSBnhnmnAsBzuMW4LVPZPA518EYpryyp2DTMjfpdJGHYN81gDPjXEYrAiEe",
  "key27": "2uHVSrva9hfwc7BSigHxLdJbPAxq8vbFnybHPGdQea26UfLZHNnjjhvZ4mdpjmEkifA928tAdUmommJSgy5w58qw",
  "key28": "5C6wzqfTu1wQqYbTcdbecVvew3jSuXTRHnHvmBiRmnwS19NNGu4xQHaYwHeFqocBXKzePzZNSE9RXf6wvHYaiqTg",
  "key29": "3aoFTBibqXcoyKamaYYdxhfiSvg9P1pChiJ2oLXoBvcsSLSUqZqH4VpA33M5urtBQNmnWSCTia8LnayCyK6gK1A4",
  "key30": "38nUfy7ya5FmiSwjed85FL1BzbdHvq1mqibXnAZbp5guiM4fRoDxNAKBjDJuiKbzGf9putr6opXTMwSqTghnW9tY",
  "key31": "eUSjQby4VUQU9pa18k2Ax7Ma59eEie31NhADtr9K3cSCB1nf5C8KfC3qKhbCDrMEJRyhK2FofAwinDgAxKn1piL",
  "key32": "JxjWtxs2dqTU2Zw92C2Wskoatp2reccMzcDmYg7riep11y8JgD1QDxCjWCn6Mi6oX3es1WQ5EtTWzRaq98XEFq5",
  "key33": "3v3HDTrmcgoU3NRkxmDiv9HZ2kbin7VLMZ78F6VpCFcuUDME1MDpR4WyKELk8DGcJ8uvHArYpUVjjgUMZYyETG5s",
  "key34": "2ENRsedLT4U4pyA9gSW8uWKrfqZcXezwLfDzh8NzJvg9fH1VBWB6ibRqus7PZwWkAY1qpabgHDRo7grj3HjxAhKd",
  "key35": "5Rn4Uyn5DAGq6kRxpiRaiX1xQr1uTnpMxRVfTwRhRgxX5BZj6dEugkfYvY8zZMrubnWUxxQhk9EdrfujMLJYXJTg",
  "key36": "fRbR6VjZVVev6ydeeGX7ABxXFRpmbJQr1bktiGG5MGevGQZ2Fsry51TRDUeRZPQaEDMuEAg5jJoBtqTiUdsnMVA",
  "key37": "2HPTvPAiDagmNsNH7YqBykXhd8sy8m3Kw8Czn5XipJvbPJvQahqQDHqLsDtFSbuqBdFEMsypftGELCYpdi7tM15q",
  "key38": "4o6ZBD4foMhzSmoDvjawPCWU68DXuFYG89U5W7mCLeGre9YsvZ9k1toWMpmfHANS1ZnZ15N5W1xdDpPSPdtzKU5A",
  "key39": "2EPtjUq8tP2HGBnpFedamypzjTGUyP3QbWDR4MaYwSAAbz8T9uqSqpMbQxmj4WPRiykoUVwSkgeZ9AgRdV51kLKb",
  "key40": "3mJC5cAkCJbJAmEiXWSeM3RSSCaDuVbh32heJhEpaN2KhMV5hzzNFzfnS3v2E6LPNqcbkP7tVMWP4LsBdKBDpEzM",
  "key41": "pd8hrBB5Je4zgWYyZRqyL3wsovfRE5XKM24Xjg5PsBP1ZDZ9SXsEeX1tZHNtTuP3YzZkzyeHXLbQ2RhenWawcSz"
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
