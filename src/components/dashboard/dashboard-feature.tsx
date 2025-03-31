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
    "4qAj9fS4VojQkrRXnNqqBmzk72djZdvhdRhuouVQnKw599eP5aZHdDgXhzwkFSr9wvoHEqAwpyMwDZiScgnZct1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ofovc9cH99L4utEHvV9DMRGsWXLX9LCq5e14qX6AWK55RHBABamMG1cAtMWsoRAHjACiMxXUCxTXZx5bDnjvhVQ",
  "key1": "2zmPkjokwUWrcS9fhEK2iZA5uskWkFndk4YnxRQZvp2jBpmAS4dP3uTgQFV2f5NAzcw29LUR82zzsrt6b94tFXsp",
  "key2": "9FuWmXE2foUFw7vyWUgMLM1SMSrD7UYtuoWACFCceTU7CjoQYKQBSLbmaNN3FBwS7og1h9Y3pT8jWaWHVDKzYnf",
  "key3": "dAF3X2qopqmew2tfVAMyZbazcmoZD4LEwFA9mhJZvATJFY5wtxx3b5V8fK3DgwKVjgQno5NLDKe7ME3hoMBJV9f",
  "key4": "4DoevrKNqRp52X8cgxVT77Q8XKRJ4C3t598sAURGhawJbdrTFGVtdLinNNpuuVZQoGNJUp19KrY2GtDFd1op7E7F",
  "key5": "4Yby511mAoNdvWG8c52oAztuYdkZsfT81vr4pfj3thfBupjDg48nCevJP4UcXtnBXRcxwYeA9GXZwtZraE7sBmKS",
  "key6": "2MYoiCWphqGXDSpsgZm5vcmMr262zgqRggxgEH3YvNmjvCnF1py31ZptAb4FpH3RWtH2wXdjpxenedh6yqvFsgJs",
  "key7": "5RTsbm32fnZaToFa6WExWFguhzz9HvjipEgmqqMWoVjtJKoY4UXSZo6WFfDzmN6m8eR3GWNJNKzA1hsfUacWwCLp",
  "key8": "33uVSRGS2gzv27AYGRXzCdagpDfbjJxWhpKPzh3hhvpcpnUBYgtJKSez29CM2u2xnEntvpFbi2XLZAuyZKQduoz7",
  "key9": "4Yz49eNk7hrhahrXrLYkfMEro4ZxyaJdKYfX5ekrnBRFCL3erT1KstZgPHgt88n5YUtjFvah7UZQW9P3Zei94n76",
  "key10": "cUHyhUoP1fCwAUC84LD9vXrmnjSBGUYC9p6v4S9kfdDwJTauc3jZZaK766L1X6VUkHBkmn4vhsGd7zW2fyFr84m",
  "key11": "nnun4gtmjkkLbnUXJtMoXGbGbZaUtfKuGJrnMwuwcyBbp6KF466icxMpHEp4HNmHiNtrmBczKb2HwaSuypxRizu",
  "key12": "58PcZGz6snSga6CaGDrN24gaRRnXKeL4qVRt4m4uRBQRmEHqo6RJVsJPDWdtCUjRCcWMhscuCVuPTzew1BPS7etF",
  "key13": "3ACHptwiH4o9ijcGxdpQ6iGiot2pqKA5swFfHJNi96wRe42y2aF6E7pYif52A2QBCHH7Jqqrzvs7sKJW6NsjcZAP",
  "key14": "2D3GR6wx8WCSWS6vGSTUEEeafgBBJiEzc57YyQMMQVEgkQfQWhJ7bMUvSZZ5uTtWqAFxednPnsoQWBdwhcfN5sDk",
  "key15": "5cpx7edWqozzsjEVuTEm22BHRUi4cUWC17exqFLAcUNog8QGs2fPNSYsQ7gyzLpfKmGXkpMD8VYXQ8yhVrAAmJbE",
  "key16": "4BLwGHSyQ7z3fZNg4RVsifZuecuek9xjFWUntnPJLEbDXEgbgRF3BE3nKFwuSVF8tg2Y5EUuLwuHcohwSRB5HxYU",
  "key17": "5VdkXygLYSDBSvtxMSNDm9E7BdRqYrT13Scia8oWKE4cPQWaZLGFHyVr3Zk1NTaLTkzpmL89evNohtDnGoBGjB2X",
  "key18": "3Wjm8WVYKYjjgeBT6Jin2dyNJYVRq4s6v5e5KYe13nCW2vGnYEsceHs6S4RbosmKGmvmddovUsyxqswZ7tEMNs9r",
  "key19": "4AWWoz1hXVQXDscpb8Ad9R1KrpiHcD45xJ9AiiaERMszZPd9Hk2dcFYiR9kZrckAFy6CtZQscLT5rCQYwqTD6Sf",
  "key20": "2q3UkJhsXUGrdKXgTnh6QzATfHAuZnUzSZWWvHPNRrNLQVQEPFiQQoqR3EET4rTcn2kV3AUAAxJxR8XFzkLTV7Nb",
  "key21": "4sLg2fAFf921r4dVqcnHZME3QWrdK5G8GXUMvfR4jKZAfXx6qPDgQV6xoJE9NFVJySqwK6k5uTufVMy1RJPowZtH",
  "key22": "4mMYFzEtdumN5dumpdJB5MBoeHHtJRWi6ttAZz15CuKZFZwAZAHaESMoD8KVb7K5yEYftSpZdZoG8HiLFznmNka6",
  "key23": "MpdNEU2gK7QZk6S2D7krXcK89X8p6buzWxQSEkbabwyWKp5Xpm7eZNZ9Wa8QMHJPHM27VDft2XHgR73VDDK1r9K",
  "key24": "529pP5EyP1Ff4u8W4am8DG4Xw33W9noATViAgnPeG5eveuBU91abNpj5TBkc1FJJuGq9CxibCVLC8WGE6sjP7uS4",
  "key25": "3TrNwYmQy98duFG5PgV7MHbiJW8t9cyNFwK87HFKw8YgSAGponfutKj7pMrhXT11mYeNKuCnzBwakf6P3Kcy9tJA",
  "key26": "594XvksmzpGWb4DKC3jEbZgwx9eh4YaiUDNkGRnPPALUmCCNwMfpwnM3QJoWrMPmnXo33aD4EDH3cXumcNkd4sBN",
  "key27": "Hj38ZrnaDRm3E4jACW1BiYQwvfEHpKSLvYD4zcVaYdVfoeTdyDZExYUYLJv1TK8JGgUZF1hknNgJMRZQsx6EutG",
  "key28": "49mGMt8pNTau2pBJd4tJQzXcrXpjsbmU67ppZmF9m82NSJU5Bk533zeVSnUFkzNXcjnUppgjZHeeQy1Z5xecSYLd",
  "key29": "5rDsMrp5rjfyHugxWZ6ucYMaaf21cepd8HeoD6yNFvqe54kdscvJoF7cPZEhJMC3F5bwvmW24YLRbEDvuk5nQbuH",
  "key30": "4WWDzBBGHHy5443Sf9iU3Eo2JffR9Em1mdqtGnfvvR3U6Vybdysh4cpht2QMaEiET2qFJZsWtncDNMAETDpRmyrz",
  "key31": "3JYpRoovb9kbtFFDnpsE9PH5fe2UodqsQRq9nVwagPgS52yFjLkc1inzWK3oJHTz4qadtDUn3fEoY2jiMinSqntD",
  "key32": "2SJbG2SbERg1A3h9VaYJDhSGmrcqPwRiRVZv1kgpjCyFktyaoa3g2ZtWRquU9Kzfbrmw3cMdg4ERevkXQS9aKjyc",
  "key33": "4kZQWNqkyEfvBiJT78Sj5EaeApen7wU559WGtWEJoSGfcxs2ghXcXkVpCUTWy4VPfRZEdPF6gg5NR8KviPmSRkaD",
  "key34": "4HHovRm88YnGy5Cx1dR5NLMoKJgscmkxUoLcQwJn45mBTiPfhciL9grQZPKEnGWXRrHs771AX38tdKRmyLoY1yjq",
  "key35": "3XbVhfcZFkdnhDxEBe3DA3Rn7LYi429UCJNEad6tTyneAxvKSj56uhzxbiQABiQFN278nNxyxMn2PEAz2rLXcA5i",
  "key36": "2BUXLjUMbTKmwZHeHQGCM3ixfeBcmzZLsmypddYkfHiucsn6dWrbu9wT2Rrq5QFnK8oRryt2QYmy4UBSCHLkxCiV",
  "key37": "4QqEVW3cxKk3XHzUey7gm6VVb3JahhKT8ujELitqeYyzZJaGx5tVzVcRjS6xFqnG1cBPjCkBQ8GTaUNHZ8En6geX"
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
