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
    "2rTiZ4TBVUMNVc8L2wdLsq1C4E93VgEuksF9i5QYHDmw1FiDSkhzY77YMH368w23D4xKmHJnVDhmRz6NBidrJYVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37PxvGQtY2Ar7CNVq7TK7jJtVCU6phRtwosKnbdUdCbYc21Nm77wfvPcezjhNCki6ACZ4yjcxzTiNf7X5R83Ghef",
  "key1": "2YdAWJKQPdExmcvB541MkywyCE5jXZ7P2sLQZio8u8rCq2ELL3ZHtGeksUHBXpvmM7uDRBARQT1k2oFLLWreMT8Q",
  "key2": "9cCTJcYLc4FJKDxm2mMY9FMM58NFSan1dpwUHf2vvfNtFSNgKvwkeem1eGBRm4HZ9yet8CtJGmW8C34m8Nw3KVK",
  "key3": "7aNLU9BRzvNePQrueKH5Wb4RqXaAKRHoKLQzBH8ZLUYbzQCwATQXUNVnyPdwrMhdbzaviWNBydjRKv5vzrCDFZc",
  "key4": "2LfNKgWQmfm9ghAKbS3M7VxMxCg7szq5EYWRsaaTnVDepUC4PZgZwj8akLPBqthRQHGcmNVT4Gprpj72TmczGj6q",
  "key5": "4k4BqfHun32qVcYr6nSyx9kAo2FuZznHtQ38PrcTLr7pREPVnq2TPqkpzgqFevZ7iCrJzFmdTcX5Ac988qYpW7aN",
  "key6": "4RrVnt2XZPPQZRyMCXgKvuwkUzhuezfem3fBhNFSjPwaZSRE5ASqX2MAg1icMTZ2GVCsh3fEt33CnDT68cyHLZ19",
  "key7": "VbbotchTLEZxyuJyPPxup8b1LK8AYTrtiFUMSm2mupTJJJH2TR1zXRcsErjkMkNSH1qMDLy4Bito1CAQVJBtoyZ",
  "key8": "4qh3KnxhMJTzjh4FEP27ahVcMod7aP5ifuvkeunnTH6FrZw9ABmtBwRE5DEwd8zK6tDwckJFAkeZxuEmicJ6y1t9",
  "key9": "3xRJrZWYKFEJRpNXSkPQ738YeswriBi5RmXRKXavQn7S4ag3vEb1uYr6r2B1GpeTEWdwoP19CxgrGGDm3U4P5Jbz",
  "key10": "4XSycUp3BFGPgx7X3pewCpxaAZijL1mgWWRCcxQXK44pYpVdt1SyN2fhnyiDgnqsRL7CMEvBdJn9ueyCSrdyS65b",
  "key11": "5KANvLpe1Kvd45Umidt1bFM9gLsGe6EPsbsdy9db4mmN3acZU1xeKDMBsLcHXzywMSJSYoLKsmXW5J36yPr4KreT",
  "key12": "3iWBoy14F1mEEP1sLJ2MbtMt6shb1YKmkDqeSdehZYmPnoGQdqS9joVrDii3y45JnqZDk478M6D5utCeVFxz5vWY",
  "key13": "9WpAKRoVKYxVHrXqWp5N5QQ53FVs9JGpETdyiNtytL5aqeoxfEFC2k1k1MAuppuYxwZFMr6dnsGC6RvVG4Dmm2x",
  "key14": "5Td2ZNfYueVKRpCDU94sKiciboGX6KTmNXa4zMhe9cSUEpPPcQDedC9eQyxqrhj2nduKWynE35GBkoNBohpoaXea",
  "key15": "417JnXBDZiqePXHdofi1vV9kwBiy4SYe7YwKgtxYqCrYJvdYoMo51wNYEC36SZ4WeGsqQKLW1ghifv8ctekAY8T6",
  "key16": "28JF63YwBqJwvaSKzAT7YG2SnKXvwwrRFkX8YdWrECxe8nYFSR5WdDVP5Ea63otqBwu566p74exYF8EBWbGfb9yN",
  "key17": "39DPf7J4cuGGJjSiEWaVKpgnMRkvuYxNyL6pP8BrR6wvZUgRCepFKCnfvgoF4NVu1duALDUaL476tdKdWgvkEyhn",
  "key18": "44yEJswJtpaVWyfLvVdDKAVAa3DbhLctsfhvDJZaJzUS8VFBjrk8KDDAPitE5a9p8EWniZqntykFy36J26LE1GMH",
  "key19": "3RZ5mDvb95AhxggSidfxWreTPABmz1KkGpgjJsNJXSuHbzqZdbUaKKZ7o6faf7e1BUXp6yFaKHskJMMQzbBDQCYJ",
  "key20": "3Dcsgjwf5M6jEDkKXeDG3Y2Mg253LiL1inX9w1QNfftgmiNBQ2UaZ1NcSPjwaND31bSnnK4naH8fDRDztdswNPkA",
  "key21": "rH3VL9j57hwXvRNAQdxLWQB78T8Cxdqyoz5CDekiPaohExmaxNqw7Xg4JzsuaYTMHYJ6Yznhi54TDGx19JGuhCH",
  "key22": "3o8pTBn6U7m8VamfgnwUKdspQ4cQWHXV72S1eHhbuaPUTQetgDQTB2vzJzT9dBsShor29A1wYKm8oa8AAx7amres",
  "key23": "iDUxdTSWwNBybVN35e1FzmVCSG5n87PCEt7QuXJ89hsuhjKFq17wLhycHuj5jAXN1Ux7BbtKUZ6yhuG7neJMdVc",
  "key24": "2xqgagVYCjVHUPqbkwbZLCQRF8pF5GmuSMihpfZyeJj8UsTxi28CSwrPNjzDBQo4jE1SDnMMdHYucpSAJyv1S4Kk",
  "key25": "YSb3F4YNTHgXjKsp5UkdTGbihrEBdWkXUWq4Z4wL2DjAYaVQzkb2tae49crw8cHeCgXEzRn6B95XK8XUHNfTTok",
  "key26": "5qa1EqivkhUufPNPacdESvVEqh1prEQV5chXGYm9mJRghbdR2m5YXmfCniwxDoc3yaUojkH2G5nGJK2739jYg4Ph",
  "key27": "5pM48CZoHHtip12EdNmPNpQKeuqk2T3mcTMJC2YhdYwYpYsJm8PETjBpiW3iaUn9VwLurunXxEPuGtVtiLEdumhB",
  "key28": "3XEMHgP9bwb1zYXyaLGWEG9Q9RHwS93pLEEX1G1s6piAjfFMbnPcELXxNs3aZe1cdyuo3LTzfMhxwS7RkL2gFkuy",
  "key29": "1Yk454sguUvLHsnjm2gvN9dGHnPF7WjsVj54N4ADW78tg354ZYAX2po38Jbfyr8Rdck971LbENNsoi3WLriHQ9F",
  "key30": "2UbdMvCSjS3p3JDo4xL6PgRweZ42ywf6rR2fz7VuGwy6d2soNBf4NHzQm7mHVD9jtcST7pTFmwd9pkgTT8ttFDpi",
  "key31": "3fThKkNfe8oCC2NbJmvuiJrywJCgQKCW2ssdccQNzFmV13mZebnjFosnnJMRNWAU1GpeGkenE6eBZymbmxkwixwh",
  "key32": "7WXgMpQoUBoj7WsLjzwvYZEvNqGrGss9EJDcLWCHdUyy4D8HTrfdW9WFdhxYdTQPCsm3mucynvhcqASUECJ4Xqp",
  "key33": "4q9mx8RnSMeSkvp3jAGfTEpTYWaetBAxtLQEE2oapzTuLn5MBDU6nVETZaAtY5hVP9hqB3DwBFCkaAEPXec7pEmf",
  "key34": "58zUHSwNRQigRRFoxy5wwna5B7dZfrQonpgfKaaZuCMR5SonzBCnLXHa8RvQFoaYgW8qvtDDH38tMN1jJp6a2Fy8",
  "key35": "3qgjQf2qCEotgxkNmtJRfycLq3zUsu9YafqQMDovTn77S3Gp9c58pF8iMPKpm8McHzR5qHQUfpnz7B2Nk4QQqsUD",
  "key36": "2Aeiu6d5jG6azikyqSzBgHmn521CKT63ScKTnK2zpDsLJt43zmZkbsfe4LRwHEq8uZRbBhxG6RnQGQ7BWgdBdzX4",
  "key37": "5DLZkkRRpd9jNr9PFr65wtJ22xRPLsdbhKr8wtUwjZqXXZKXc9RJXEa5ivHPACLZEvP84umX9V9SUT5Hv6FKLMXC",
  "key38": "2C4kfeGHF828YWsGKPmHy1h5XNsSJxkBWxtGoNhHwknm1e9GT6jYLpbzT4RaAS9hH1XZQJJtdZXW6s6arjuvG5e",
  "key39": "5D7kcE4Db73Q32kdaEpo38npL3WJVuSmPzpBmLDqsDeTS8dS1GiZGtMm6nUNaooMtYias9htJ23YS2bddtz24pJw",
  "key40": "29n5kV2JMhNGvttUUgpv74BBk9UQTpATjawdPuu371KAQrDNw3p8421kqcV4MVBwSvCLnS78H4zzbtHfwPvvJ1De",
  "key41": "2o3mmCBeDHoAvkDtxkRSo7LBKfDEA2NR9nh2rpmPUqD6yJDchpMkcd3TyrGiJRru5YXjKW1ANEvtwwR7Upz6sPAD",
  "key42": "P6Lv2qCqK88pGWkDWSJ23jBEgVQpSe332dLRxPG5J7fKZoFz5hK6i2xnDQz2eMcwCm5NQzPh1immPoHHDF9Soqn",
  "key43": "QKXV7c6oeZ9s6MB1P4QCPyPsjHenbtMaeL3hTZR1kwAiihGA7JYx8262JgwDoj5mkh3UEgsmxKdVe8QC2TTnm85",
  "key44": "4aWaLY2YbgXgMM82AaHyvJ3v4vxxQH2u4NWqw7d8akc7nUXBdGa8XQrzbe83S4MeErorMBa7wvYnVn46drzL76eJ"
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
