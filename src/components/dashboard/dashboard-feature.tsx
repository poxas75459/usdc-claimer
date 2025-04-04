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
    "3QPdWdZBjQ18FLNVoehnvejreRay8Voy3Hzj5sCaEStcGJXHjN3UAra7Cms3v1Cg63kJ9uMNpnTA6H4ZnqwETZLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E6qgaKEQseufMq1oVf2JwZ7rsaJz5HZaabC8pD2znPWAZHtnCzX7J2BxWodWq6YVojo59jjTX727XLPubmxBTKv",
  "key1": "2sL9m6awoEWzyRJgNe3auv1pz5SygTetTfZn22FxNMTiWNH13urB2bvSchnUedhFW3HcGp3r8vd4DdrU2XPqnaNu",
  "key2": "2zw37FB4TKDSWifrkNJw6RqFWmbnc1FE1Rxrj6A52qKGiA6xw1TSG3JRB426DPfYexZtiJTQA3HQmdw9X5NfbdLz",
  "key3": "fPNBdj2aVDSUHR7faCEpaSYke6C2rtwCjHK3JzqaMubZqEeHhtkiFT9kHUiGRGH6AGk9dUQqiitj1GvDiQTvMC4",
  "key4": "5gxgHF1r3Lx5r6znA1Xa8V7ZY8zK4PxHZ96HXQfgGLXk2MjkpRK6z5pW7uCs52t2H2saEQX9eJHQLarf8AzyhHMa",
  "key5": "4Zv3oaPyFyXr3nSJw3P59cg3Mfip4xiGYiNvgkF9Aoe8jEjgAg59NRmwe8PAFTULQnzuKVViuK5eryhdbLCBQJKA",
  "key6": "2A66QsZCqVmTWsRfThhH7wkMy1q1qnL3vm4AZPa7gy9k9NhKXGm1GsYAFtGjqXmUyqzCVpow2A8H3i3mVe1Nf8L7",
  "key7": "bMLAuBQnVfY4PZfd23xpv37vtdqwuXVjYGRLN8mGjBK57g8tSfwMLy6JyWNmjXQv9MhHasPhsbBTMHv7ASsaoEZ",
  "key8": "3QNXjck1ikFE319Arhnka3T72fLNgfuSTm1J8egVs8Fq57e21bKTjZzMHZyB8hmGGHD5wm8GKnMEv9hcxSUG7hfD",
  "key9": "4oAnNPuMxo45M2U9kR3R5CbJmm8EckmmWymEGU8WEsfx9tHNzdc6jSAgCZyNA5GvnLy1kipSQsX5Xsi5ZbVvcwTY",
  "key10": "41CBR1MKBET21vRw61aA5SErKUHzDHNJUhbZq8NK3Tpyj8qVddDKpFgrk2j6iEiVyaBgmKTQydNvAyFSRE35kQvJ",
  "key11": "5FAoR91aCthi2kWd1NpD4CK3enyaQ2QjzpNQgeAAFhmkzQ8GztTCLgtCxECSHkKfarMDed6Qigwu4KrywJPH9VU7",
  "key12": "3nsBA4vfbouSMcRuQ75hxw2kbmRxWgnKYwLrbaHRe6WPQVA8PFfHN3SUZtdNekG2WcYzxszbwwjwm3NmSPxSy4Ws",
  "key13": "4qVpUaY2YZ48tCh2AzX71vb9Zz3g3A7hP4WSoC9meBHY4jYh5mZB1TCKnqE4EDxnSjLxs5cCNATjAeuBbbcxgVEY",
  "key14": "3D9HTfJa5V4V5WNWa1dEvfgkcRq9gPuJKqpCcgxMQo6fUK3vRGGaETqn5Wy5FNdqv7PMfMJsSLafUtgbemWtBN9G",
  "key15": "3CfiNrfZHBHhavqzXeMbKdENbrDwtupB7YKczimfXv59g5PWcjYyZa61NaaZ7ZvGRR4EEiyDaRK1gULVrY4Nunjc",
  "key16": "3ZC9mMhDFGYokVkZ3HkmhGNtEViivXP9uCGiE4m2fsHuaMmCbnQmDWL2b9qVkLiETjgxTiyYwETKH6H53hugH2a2",
  "key17": "xxqi4cDhRAB6cDqTe4WYofoCRcwEM8MRvGg9QFKmk8jhyjatrxBc4NamZVJVQ1qp4Zkpw2HZUwuMJv1E4frZvCJ",
  "key18": "5RRZnE3cph82yfCyrNPR1g6opRfeyPfA87DXvi95u24J65BdqG18skJCip7cdnnxwTDVQVpyqJiGXWB41EfGctZV",
  "key19": "g2heet9BuFDTZ3WzWBQXuL1WX36EDpyikPxbyDmWmyFXyv2U2H2NAMHTnjL64D4QsXAt2KW3osXw3TVpAX6udup",
  "key20": "ijc4758GTYEMRu65BwQj8btavbQraqH46scGr3CZRhwpuiSmHkMiSL3mHEzVncN2Lj9pG2JkHRwfeJLGob5zCDF",
  "key21": "2FjhiDwvvzpEPsjbom5z3Pq99m2qcpiJFyUtXHFsRBX8dwaJbWAnuMguWH4RpZsXhH2aSQJWSTN1e18U7YFT878H",
  "key22": "2vHPoQL8DRVMB3gocw7EirtC2xGsfBGUR9P5bHGmoafiXQ4hDDsRUoMKaJiSF5VhtntqKZMG5eWJDWN79LFuNC1X",
  "key23": "NvMgffXrSbKTZTWob5jRhAoqEUwquWMcySWVTx8N6t2j7gQnkmSQQgThiAeji2c3ZjbfnqgdBNTpqXEneSeocLU",
  "key24": "5SwubAj1La1Gs2tJUuATBurYfdnBH6SuHk5HFXAv7ZHCT51KmjoYYgKRcLE5iX5GpYzKNhFE6bsmwL6gqz47HHSL",
  "key25": "5J1a63G8yRs9VGjWTYvf3pwGAzuQzhnKgNmRkVANoiBkqm15eDRhhHoqU8ZMmmJbBecH9z6GAng9kWy9Jv1Y5ixG",
  "key26": "5HA3AwgJCWSdmfC5QFv4SwLpdLLi7TAwZvAwMKukb4sYiugmJq5PCNWuQAJ2NZozmgTVkAte9pmapGUHeXxwdaXh",
  "key27": "3FhTg87CqJmDJSbMKYwoJjGXeXtxYF37esFfoKMKxJubuy4aFseh9ehUrXpyRa41pFiWfbnF9vokSpN4ybJ8eXaE",
  "key28": "nxfgPePRcoZwi1KCXTqZvoQBw9KdEiQT6orJoqaxs5twfuedjt8mo85C2VnGAgwag1rUm7kwARcjqXRptrrwcuQ",
  "key29": "23KmRjJ9eZn6Bp9uwzMJusdvVJFFGJouNWFKNKVbFwHSLf5YKZGcmwV4JxGbQvhe3yUGHLhLQvwK7Ewppi7U6emr",
  "key30": "3Qrzyow9XcJnYL28MMXLpmGYqUFkN6cgW7rhor6LxrRY3pGaYJiGAkYVMocH2XhHBp69XsMgUhhwufKeuGe7KUrZ",
  "key31": "5NUraqvaM9r5Sk5NBHqt6BLZfTcBL3zLUjrTjucXbGWKBMXdsnijFvNEnqkcMzEzRR2pxw8k8dnNGzPXqXRBjdks",
  "key32": "dZt427Yj28kH56Usi6okEgNewtnLW92XpJZQULmmJ8om7P7GRBjzQisceEF1Rck2thBUdvAcqjbkHNh9x5khHuX",
  "key33": "1bNJX4qLRD28fDYEFz4pkSeGz5VzKTxSzD4JmUrUgwZYzPxRtnhSPe9B8emCZ7G7XJWJ1Cf54ZyKxvS3Sn1mtMF",
  "key34": "2YXGw61gPEpvjSxxzxY8ckxZnrmSbcZSv5qemyfN9tpMWJHWwJA3CR78Air4NtZKRnEJmFd8595oiC2oAgEv6G7R",
  "key35": "5ii9KUhUatiewAtQ62dfnHthkmFzekgC9jcZXQD3pM54DzLhazts2c3UTWHeBmERLi9i8E7SNNBARFdT2TACDnwS",
  "key36": "2cp9tv95nfsuBXp8E59pg8fmfHZShgRgrsvtDGeK8MnwmrmvVCK2E1AVo52uAuVLZiSpu3tbbfRLisdURKy2xt6W",
  "key37": "3kFYoBogS15RT32y6Hd7Pw4QVuHJditQhZGUpW2N4M8sX1RPXDZsiDt9K4EFXHXgLL5TbrjaD5X5BA2uP4myFAhb",
  "key38": "5N5dCE5JDx4L3vz1WacWCAr5z7yfPXbYDeZqp86zgGHsgLe9UU7d6nbgMwbXi6TuFtFXiVDmYWAdxmyrkYv9cPvv"
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
