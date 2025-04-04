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
    "4QZqpGWq2LmTfuprc6QZ8Jzo1yEbr3wYh7wn8W2n3dzd7mqyNHbhV4kQ5xaM3aEQ9FcpCQtUn3xvHaZuE1qqaGir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VahpLksDMqehPxDL9bspcwrPnMikUa5tPkpVqyUCuNbzV9VkWgzEyh8j29rco7c82tNdZ8FzYt96Cbv8X2h5f7w",
  "key1": "5362JKY4dWrXYq1rNYq5AE8i3c4xnCWpKjf9gyrBb6C7RbPPea2KJit6p6DUq3JkRmiupuhyNZ9gRS7DKRZq5k2W",
  "key2": "3ooGpuQU5MHJaRm8yCKQ1khbhrA6TFcgAyutJUYFt9snapG3WzH4deP57eGKpbk5f4rE1xbTYnSHo5aBsRXoRxwc",
  "key3": "58wVfRHTy1vKZk9dkhyfQ8EHUVV6ciGnceaKyLAXCQb9SGL88YrstfT539rS4SvrHJmr3sCei7wmBCYyRUmFvGw6",
  "key4": "5oMGtocyWVWjJH72ifpCx2YpN5zAyUThcRrmNqkD6AeEK5jFS4ucXqUCLQQNiRvwHds9iLppU5wwcJzVmgxd1ih7",
  "key5": "54WwRhPCJZiJhSUi3wxJzDXRDEu448RiXVxRfpAtHJdeSuq27fM9Z3ffSZxFsZojUyrH4hT7XHW41ZJZuMixtMA5",
  "key6": "2wk1BLb8Q1e9zMWaZnUoZByfARExgvvUB33UaK7Ek8daScDeSbxLYjM7A8EDqMrXztH1DALma58UMEyCtE2oEimK",
  "key7": "2fKouE97RnqzEbLwfab1DBezbi2FX6na8ZirNwGRTfNz6LTdHqdffuPrEK5d7n3KPJxdw16FMZjYhfPtSVJYT2Sa",
  "key8": "3tvjxj1BfkGiZiEm5mc7RyCRJ1K3FEtLpv4XVPcqxBjnW2vtswwB1L3UD4phidEWYoUQXd24uREnxWEWbgFxZ1gQ",
  "key9": "3a8nwRKG1fPNdg3JmzxzjewmZ9MCJS7MbhH3saYFBj6DbSKzaJfX5hUkBAFL7o5xEiV5ewWf3tzQXHzfFdqZ9ai3",
  "key10": "SGZTMpzRaRvgzmqkHzY9bNzxpDCfugPoqDKqiSZRj7xNRwJ5TniQETMZmgLTJWNZqS9eRts3QDYa18siyDNcXps",
  "key11": "3wcYC3PNFauazHcfswwH15uAEPWFCpVLQMFHpBjgZmBt6BX6RRVciry9Gug76X8aEJoSJyBFeAHXkK3GpBi6YFjX",
  "key12": "44NsJw2Ks4NL3jAvFxNorTMLXmB23QgHfidU4un3AB5vbB6SxvojzvyFLFC7rCah1zFKTZaBUntWE7Tz3MDjdhdp",
  "key13": "orwtoss8GprvAELxmu5mG3wc2H2qneyh68xeimyEw7fjWdhGUEjvQammKVCCnwEZoDSsWR4G1r4qBXdiLFCQXTe",
  "key14": "3zqea5RbjHGbBLkZnkdYFgNJxVs6nFqdPYr3cZnyaWb9xSqdBi2rLN7NN3q1s9PP6wX8MQHw2cFKbeuqj3pf5Ko3",
  "key15": "3WxA5T7nMPmoGdvBvyZH8gqsD2iiJfsBHzF2JDXUZ7ZMop5BwgoBVHseYCfUSnthP69aYMhTU6LfhywpBk3dsAxX",
  "key16": "4BLZqTokvxfPV6FfxKMSriJQ94DFHqP255cFyiZVCc8RH2xJoLpTbfaCPkbJLYBvJ1wervQLDFt621Z1z7PGovNP",
  "key17": "4D2q1js8xrJUrdVxa8FU1Ki1LgWmeyrtJ6YZkmFVX28bLhjmCTE5fwANfg1caTurGffkBK11sCEFqxgSvpWsYV78",
  "key18": "88igRBiBmUCA9hLZuc17r9kGAHaHcdYHgNsjz8VL5ekLxjyFqitouT6d5vN9DLu2SJA6RgTgBf7k6vLF3wkLopr",
  "key19": "usQ3qNoMP94Hi5EBwor8hmAEePjzQpjcfwaR535jXN8AAMCNDRHbi2WahPcd49usNJNUMJFfvY5GsKpGg88rdvd",
  "key20": "64sRyGn7P8t8XVK3Cswnj62NMm4ok6zdiKJN53TuzZud3syXm7U8d6hZJQ7AhR7f57VcWfrASCxrekCcitLAZTRs",
  "key21": "x9w28JbQXcYFBingv9eTkGuFHCqNZrHADwyZde9WBhJzVCe3JZW18AnV3mxy2y8DFdq4L9s2X8dpRrKcuEVSVmm",
  "key22": "4Eq48HEKdtjQbeaXGHnmZq3xY6yoPHdjTcSrgwEBKcKLpHwqe2Y7EADYBthnfr9aawdiarRdAY9xkyyuDzmXxBEJ",
  "key23": "uemQM3cfhus8KYqHg9yYp62SeukUt177Vp83pNczsKfWRG1U7DSG49Xtj4nHmbC1pr5sG9kCpNi39jjhTrkuw7v",
  "key24": "amxMxmBdyDwvxX5tFYr4SbFL4n8T8aMthg8CZBT2k8VJzWF4r2zjCZEz7w2TfYz7ayw8LKWkYtCeK6pvrXsEmeG",
  "key25": "Ka1J3ctayPebN8iN7x6MXKWUarVyAL6BzpRie5ueHgNFLD17caEhnBhzqKN6t8TMBJ5KcdV9jzfE3ojGLS1uYNC",
  "key26": "5WYjmayFdcbBAithauo9saFxJt9pdLs9JBHvJKAc6tWWSTecq9ofQKKTct2qebFSyhTmzHLW4w2BaTA5EMKAzUnE",
  "key27": "5NZoro38fs5dZDmA5oxKgAN6KS2QZabucRkW7WHTNoG98v8s4YtvnSqvjBTKypaCbBcyuxvs8d5vXKPeccDcVxXx",
  "key28": "4SWSmUtm4e4wDBom2oRnqDNcWrZCmBdKhRowoD3ZMzzMbtGtemU9nn9dKQCR2VFv9yXPc8wionqWUWcogGRuigHj",
  "key29": "icggwJovgpMBizaAFqKmKsAckXvPL6QruUkHHyxmxegfyM6qMsEPWX9We88rzXbooEFy2gC26fQYbkrCHqbeAEV",
  "key30": "2zfKwUfC18aYASXRwjkL5MN6D56tuGJkkHgnTCtFSuLSeztchUTdDhyRLPvufYK957HuFdygqVN7jojbM44BPiNs",
  "key31": "2KPW6jSdUDtrY2Mn4FWB8ViXCh1e2uchNPxtyKZmTugsWv8GtZsErTvU7TMrVEmPCqQLjHZnf3SQha36bsyaHJN9",
  "key32": "ee5e3Y24rUW7ktemDxRRVKKPajBSZ8Ln391SCnLgLhyASXUnz5CLRWHXFgS6seqk1hvZhip77zJ6TTMFQATFbWJ",
  "key33": "4H2eu4Mm6NiAU5KQzw3MQBkud3WbUVwt9Arkm1dyU7iW92MdBDLuYZKRLcu2DyL6kS2NaoNx2rCmKn498QftTNUv",
  "key34": "3N7fj44pQP7PAN6pTdUQtkzHKXTLGcsPLd3trUq5PPC61bhu2J6a4f9L8AamTbWoJeXHJvR3hQ5sxG5LXD76gJuN",
  "key35": "2cmgieC5Sq7TCYdnmSAXriTHRV6cT16tE8iAS4hddd6dRceRmeRTZNjWuLu8EsJVAoWRCCoNVmdfbguhVDJ8uGov",
  "key36": "3F9oXwCsBQiAtqApBVDDYRPmpT3LCx3QBYWjR8wcvNMK7XHkUra7zx9TQtyH3osqnyS26VtKDrZ4nSzt6wfNNSnd",
  "key37": "3HEU1st4E7MwyHuwKSLiyZ3Kxkc1WQpmMEycdaJUDi59dSHkw92gtM6x5TXSWy5wTf9NrB3AnjeC1BH2ojb4auPj",
  "key38": "3h5TYb6WkMFrAx8RyjbtBD1HM8b4j8UAmnM6BkXyQn1X87ofjBMg1EARuiXQ2cwey36MhveSZiXRPvvSS6p59bv4",
  "key39": "3GUnGkKBxojhX6n3K6qqWkbgh3vf8dGL1YU7TeZ2Gs6dGr4hXPHx45sT37rng1QJP45EjHeWmW3qNVWnRYSmsPb3",
  "key40": "9RTwxhFVr9WSkdQFh8HBAAWU3gj9QWBzdGMjdDdt1uLSmUxAow3tsCvuaTrQbvVTwrNK4hwjh18YnPhNtVJWRhe",
  "key41": "4osKEYrZzxssfShFFyfQnFhL5ZGmsUELnccRCteBP3Ncpp6kAyg8z7uXJRcZF2RVgMMVCWnoFpEZsZ5d36anKmrG",
  "key42": "oN4vXrGJ9ZaG7ta6mzTSpdDzD6D2vox7bHQYWzDJLm8HESE3DSzFQkmYb5ALoWnWGr5897d18e4nvQ4VzPiYTXn"
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
