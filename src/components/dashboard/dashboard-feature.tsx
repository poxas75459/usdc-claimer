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
    "3zkMjoJfqryGSMExsnJnJuT6bBzeeABeUA4mYyotkYwT6YYhQG2UXupU4rDdhsUgYqRM1jPU4aZ8HRPvcsMtKQEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65vm1BRw5d3ixMUy5ymAiAZ5ibhb5WmSZskqyvLctZUrtzJkH5nJEhjdG2VVukdfY8rG1LdmDTeusQ2WvaWMnurM",
  "key1": "8iTJaFXSVhdyxGtJr1JCc3iJJAco4GKEboxGJtGQBq7SqRzZJ6RsV6FqvwESJVV5xT7SnzGvmdAvty2JjQGJUEV",
  "key2": "4SsK2izzApr6p3mxCB7QEMMVnHtLrYCXz3QuS9xm52BRWks8MwsHnh29iujdBFwuVwmA4FYmR8cFh11RoGMRDumZ",
  "key3": "SscESS5o1LWSjawvLPPBPWVazqNA331T3HJ93TGHo24wZx9cSu7abxmcx3GsUPCMPvPZY7XTaHFM6WM5iGaAWnv",
  "key4": "2xv4jtmUwrsM7DP5HjKbbBVH1xWfjmLcCBx5vncyvj18MRqZvdE6hpsFAVvDwz2Jnt9g3ShTTRkDqo9YKMN158na",
  "key5": "45e5xrYLwz52hw9dCd9r4mP8wsDzTHBAEwmiwWyVTktWeDg9Xw9x5eSa4GyvecoZW4XFAzBPwvdFrycHhKGgrdXt",
  "key6": "37yTY9DDnNbL2XmLdB29mhXwK5Q9EShSeiudd8BBpbKBcKDBgMXRUUQuKK4BqGb58a3z5czyJVLxzKY7pytYUnNH",
  "key7": "RYM6Kzrqmt6kaHXK8XqXQhGcA5mSPrr7CHgRMN8myjEHyRpT9ELdACdWsV1jieakR9NMzSn48MqMYosCKPs6EAL",
  "key8": "4e9fwZKbnmWGq5x8SoZNkxxM6m8z5XGEsg8CrE8curviKeg4Gv6aPxJeKRPYho4WzfRbQZHmsv9JpHckFbQQXckW",
  "key9": "FPGeyvo17StyJydSZU6Tkr83yB52isghz4tekDkRJsiQr8YaCyLtLUUTUTufp9LyHad6A45U4V91UTEz7weM4Ef",
  "key10": "5JpKceyLvW2e7VVKyYXiy7P3KWwivNawiX9dTi81xBTSqNHqkgpLGuiS6BRx7gsTq1WHGLYb14jZuQ8DZw53KYv5",
  "key11": "uwgCYRJ7L39EfzYqbefUXG897ucCDHMB1o6fjqBXf82nWjf1Tn9nVzHPqEEPmRcMq3KMivFAEJVjyD7wxdPyPby",
  "key12": "4JGmgkzUSzKcw5QLhSE5yAcc97yrZULJCuyBi1G5vkWwt4xs9N3E3p2sGFvQAATQnD3iQU3KNMFv3wrv7UgtkQD2",
  "key13": "4hP3AR5tTD4GdXefpVYGSwmsUZ6HKGGZDuDyCwFY5LGvuiSkK1RLKinj3wLvsQkLRFBUPjZsDiZHMMSCtK7MHG5d",
  "key14": "5TTr99jTd84jfq5fHMN363CjPoWbue94GgNAyDRsKEhz6AxEhzgwCpKj25D3RYHvgqQH67dPPWTrGZ9QY7iYe84k",
  "key15": "3egcfgnsv6DEimiBgvWw8bcTvEVhfyBUNKqjYNpMoNWGDpJapxA1CBvuueq8tNB812QJnyfqpXnUodYyitvKjDmN",
  "key16": "2uZaTGR3jHQ19nNsJLYsLZ9CxA3u5kQuBNJYoM5EbDf39GAKjj6zvQk45nwFQQHhNEtaFCmXsujx5gpK1r8VUEpa",
  "key17": "XdrmKYDtauJwrbvSfRAw4AcrqixjnyXkmKVKPgwPG53yEvM68tERSd6MtqoF4qEUyx4QKaXndWznhYYk4cp59CN",
  "key18": "A9ZyRLXyKsXKcFo8yk3ng1Cp6C5oqFodXnvbPFkMee7so4wBnk69jHxuSJa2xr4NStQyp7T762Bv5QAQjUkMyD9",
  "key19": "2kgm6PbNmPczhPxjFKSDauj3gdNasDHXEwCRqMwQfn8S4UTTPvdgJuie3PEtAsAUya5pPvyfXVtNywKquZFyd4rT",
  "key20": "2kCK5cietnAeCeApLx2bUkMZTdoBoMvY2ypogFFfUDmEvvC4xWtpqyLrVhW9idA98juoY7SAu4623ZE6i5ZVcGws",
  "key21": "2DRFZqFp6ymf4TFmacomT6zyAgVdhE7Lib25AjT22jVrk6toFtZY4fFPX92JmaM6iPW8mkvKCDGCCLMvj9nxX2ZR",
  "key22": "2TASuVvF1HfFysbL4bTYpL941a2LkyLPSPDcXVNs7PP22mwpVwSahGd9JtQ42kziXp49NCHby5AC7Hn6CX5FgZLv",
  "key23": "2SeHEEN51shuwe7uQ6tNFs1A2DcF29XhNYSb3LMCDv6ikkJMW3oc7ApVcHbevxzouq5DE7DbSm2VBdqw49tm1TrD",
  "key24": "46koU7TPpRq8rwrSK8FohyZe7V84nvCMpZVX7SEbapBbi9zYsPo1p9HnfpfFgFnh5ugazfajSEDYzPVuJnwe5Tpo",
  "key25": "HshDgW4dKjYtcNwchYaim1sJvepcGVvEiiCSv5TGiW6N7toi2jeGcAsexbKjjHAXr7DpSeY22sWdGJMmNNz61h6",
  "key26": "2DhKLTyBfk2MB8GADYQuWz5UgMqtr9jRTDsDMcpPuCgVrNdFiLnDnSx5JLnrk2pj3zbzjaSromquRNyhmwkXLRWi",
  "key27": "4M8rywbPLB1M54DRN6Y4EX2mfSSdtFzDErbS7DduGTqm55mX57h6VFmpNj7bDddoDZVQUnnVL4pPheSUwvECMQuA"
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
