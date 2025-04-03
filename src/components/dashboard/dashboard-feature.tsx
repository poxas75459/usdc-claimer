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
    "3utnBX1c2Nw8crYL4jnmnH7vE8exPvak3ZPW1AUN4hLJvNXR6ffSEL2kcf4ZoSshXPzCe6Agg1JXDjiQhnJUH7ua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s1Pb4YR8dVhryJvugzYqWkgjuUku7nUxHR3RpnhTZFuPNHia7wq1qLM6MzSFavuQ7B9NHBrdTYcyyeUKy5KKbNc",
  "key1": "2oE7AaPVKWFqbx7M1q1c1UdRWx1NpK6y5K4Y3K4Ndp43eeAv9h3V7eXiKdyJWUB5WFvkuC2MuNENehCfQLM4VcSD",
  "key2": "3X7YQ3i512v1T7zVM2bnyKyujYq7gS4ixidJpg3ehipQFSX7hCfAwrBqB5dUVfEwhVKkwWSHYAJ1m97zWjHqk8MC",
  "key3": "2C1noXAdHraAKdTemPjUFVL1SzCHf7275jxoyFiDAmJReFkKCzbkiDaRtoTnnmu6R4RZFN3xfqmdzYTxTbdHn1mz",
  "key4": "5URNJwhMDCCvN9KPhLgQt7ypCpztjp9GQvqE29TTFoirPgweTFgHG3biTxsfKYwUayf46ZSeEtFibQdfTZMgqLDf",
  "key5": "5L1BuDrehTz9n1E8oH22CqRr7HJd4nNzeoLU9p4KBWwrjTLh5Adq4SMQAUd9s32FzsQxHdysNRN1Bh65uqcGFrNS",
  "key6": "4NR9aVM2HAF4CZbh1dWehCKK44P5UWpwgWPvkGSLJeWiFHCRhj781Tobu9rUHabHQ5VJRXFaj8J48Wah6sBrLgEn",
  "key7": "3HLpKMVgdaqBRVGhegSVNQNJavsCbAmoN2UuYSBPCLi5oEBqmVYvj4rJyrSngAdvHcXKupQ5cJhDpgdurfvAuZj7",
  "key8": "KthxeAhCeF5823PNqSp9SQsGhHgwB5BT3GGDojn8Za5V1metd15PVdwP6PnXSweboqX3ob5Evwxs6xVJcsHYKCK",
  "key9": "4TcZV8SyHDWyDAe8mhRgHeWfSad3aJVhRZ6cqCCs1u9JQC9oYjhG6iBeqTMF1RK7CZ9CaTXZsCWFz22iVpvhtkRj",
  "key10": "5RWnRWfDKPm7t2bETaonaKs3cLtbUAZCq7vkoNfJk1khaB1Du92WaeSE3RJ8BawEfiFzDHFoC91gDZgs9WwNreLh",
  "key11": "uP5UTSafNkyaq6hZej8UiK9mg2oy3HWhuzVXyLPV9rCbTPfgAPKJGPGmFV6gsxigpcPLaFFScp8BpQAYex8Cp54",
  "key12": "P2EqJtSLhFNHBio3hBPRdm473t9Tuw9gpeAKCUD64ez41YetYaHLFGqQZe4UvXejCKjs3Fb2Cqw83jfXL1hp1sk",
  "key13": "PqSRgCZiE6SZwGuFozCphf2WLaGUcEu2KMRXREi1mofWiQjys5Z7SQXUpQPm3uzZjxUiM7LdtzRvxyDpk4CXt6z",
  "key14": "31xft489scommusn26MajMcrTaFKM84jH1yxivVD1HAcSkxD9cfKHNhkzFAcBf7gBUn3AjXkwkDC4QNwakbacyRT",
  "key15": "3CQ51v9mUTuESaMcoHCG2drxgHiXc9kqHtzEDsxBDwvJhArmHHsSfL1Xs46izewPiYCvZMx29tzhidioJxA7mYnG",
  "key16": "3iHptsZ7U6jaz1GyzS4KDQ3WV72Y1dTYXsCyNbduwPdQ9qmrXyDFyMrFXS1j8XjCencoYCNPCxuBp46cNm1ES2mx",
  "key17": "7XWoo2vEyt67iErWodbfAdcLuTy8JFaZ98J76LaXXe2Hxk7QAQbeNekqb69WHFwSJ2JU2DCn7yau8haAyRV1BXN",
  "key18": "2GdbcRbsXtgxPjuEJFJnvRDEcYGPQJiagj4iyFJd1fvPexXMJruGjTBTMP4riDha4qKGkfv4wDBULdCRj9A7B2F8",
  "key19": "3LeAWZ1xeeGe47VsmyTYoBZ5q2MQkGaDkgkSQaTo1c69SMVaWBbPnmvyTz7yaNLLDcSxefv1CueULmT2FasJGdpm",
  "key20": "58phsBMVrLpNbb9dAyvjKkrk3PdZSQvVDmfQdmRwMgX6H7aRS8JoH8n9oWChimZFcip3k49Eh8Gp17U88nnBoZP",
  "key21": "2EUxeU9KfsJDEbtmYisgRueMg9UA8DY6HZ8dY64WwTrf7bVXgP9EEYCxLM7H3hrBxgTpXPyG47wKTaX7ATeeGCM6",
  "key22": "5RtpkoEBTw3pqZKxJErtx6CZEAtvXkSz1J6y8ajtb3b7Ym4KNrjjTL8uNMLDKwwLWBETu14d3o1c5kenteMXiHDW",
  "key23": "4AUevHhrJVUL68BwoW21fK4JnUhGUdCDCNj7AtmumhEXqq4YDnzyiBMMCEjiXd2HtN4TzeUQbVABrtZDGD3ZegpL",
  "key24": "YeN6dD3zUdFj3vGtzGVMTxCBoJ2CgahcaQzPVxYHvNn1eruYLXesyxJh13CUsUUaKKEbMFgU6wmjqBMtLU38zKm",
  "key25": "21KL6nexMparbru7BdAiLfm2PFHKsJowy3Jzhq85pggXmf7kBTzmmxXUoe3mhfePmWcpcxNS7ohHUfqcNxXaCkir",
  "key26": "4yC3ssoykrqCKaDczb1buAHYwARCgGDEZJVmtfcPiiWt8eBr89z7pts7y4yC8dXHXy5VVTZE5FKFRQYu3wFXuFuD",
  "key27": "4AZQRSWg2CtLoTtYnnbGNgaAprwYuAA4JhWLtMnf1d5kRebSXTZPwVv7Vwct9UV2SpMpSWqnsRYRWA2k4jsg1USH",
  "key28": "5bvdh4Z8E1LFcggUGZPdSNhsGMmfQNrsy1DGQLDSyRNZuFcky5oAEQ17zn3U65iUdvJbQh58izAZCtkSYeVZf2ZY",
  "key29": "4yuzLY9NFk5d7W3PiGCeNvSmKPozZjd8H5GpfwszTKxFyUenb1ejVVisSAwuz3Akgpq7S78TnZ1s1PfLjQT6Qn4q",
  "key30": "2MP79At8NfVYboYARE5YUJio3TqDTJN6ZXNLw27p1TLLgJnuK79qwKpy4e9HAkvYECLmYB5vJTV4SwvH4K3z3knz"
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
