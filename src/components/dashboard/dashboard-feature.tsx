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
    "4XCJqioWgqbZP85dycwZQSKFBGU1QW6P39xmroPofnryrgrZbbfAPCcCpqhrkEc2wcHdoTV7R6LdXsW6ukto2QTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uktTEGL6Qz8YD8CFehatnfC4bACfJ89C1J15ogYzFwiwDf44SnTT6PbpqDx3j1W1gN6oSqeduoUrvdo1UYXYpGt",
  "key1": "GRJrXXWzLfjscVAiCWQjQ4ChyFtuYT1ZcvrdEznVKePkCwSkKXmibDN7MAfqn1pjfLdL25Dw94zE4L5QLwzoALH",
  "key2": "zSHnRZPJMvis3Q3x6kkFVTJVWQSmrovnG478pBDX2Lu6EPLSBDmKXbca6Zp5UujPWCycC5ZSqo94gvsSCrj2JTZ",
  "key3": "286V6eG7NFAAJvXxHYCD3hFYbCLP2fDnNQGNnhrMKgzuibtaYkfn2T4TzARAtTo8kMR23v8BeDWJk2jLzPSF4WLn",
  "key4": "2ytSCbB5KUN4DcRMaR5uGeq2cP9tDCcoRQAYmBJuXLXL1yE1DHZqgmcHEcLE3CeGRKdFMMzipARcb5dEbtb7ZQNp",
  "key5": "RYBFGLcvtLZPhKwJPGwJfk6okr78nbYWWP35oqMX265TESxPcZurocsr7h4ZYrUkwoWRxC4TyjGok3SE7NYaczG",
  "key6": "29RAysWbD659fV87Qh26oXxUNyeu1eMpNTuqYPAW9c69eCBWvtweFTQ1W4g2gvmthLoScQUSqMvPEmzhunNAJJDC",
  "key7": "25tHMuzPZa8zN4avnWYkDqr3BJ8NtDLyfta3ShqsWMsBwGSj9tzY3AgfVRc863G6kKPxVtCwxZ6ZroQLnTxF3a4j",
  "key8": "3GJTaffukgt8j6daZnDrFffydi5cdeiUcbH8dzUsFGmMrpYK7ZxGyivCWo19QuVM23Dtmpf7hG3AcRxM5SSFFcpG",
  "key9": "28tayZYkCMvwnEYeriqVzsnPa4R5nJq4Sq5ra2m8dAAcKV4GDB2dmHyxbHW2iAaVUAPu2jhcwXiksLwmy3L6mDf8",
  "key10": "4VxBgnvrEbJHRrmSW4izfxnaoh2xfENQYYrP454BYzHYsSyvye5LXfdp8f5j61xvnkDMSAgD6sjkjuNXBdihgykZ",
  "key11": "vzQmnWDZaucKbddwwQT2t4mj6eco4HE1rwxpgDVGZnRM6vAYLwdX3Y3c91bN1riZaPZUmard1eqFqJxW4hbxvBX",
  "key12": "58khtCAAnAcQp8ufHDdD2CHttQTBiG1fz3TCbWfK7Pi72SxE7e99qC1frMbwD1p8JkJ65MMVHk73z8RRvBSeAeDH",
  "key13": "2zra6ntX7Nom2MbR7MNDBykxiwdg8xD4bL3iGZpvEZFjyHMqnLzzCv9yFGDU9gcUmSZ1n6cvFeJyukMUS1PfWp4R",
  "key14": "D5Dn3WzupxM55C4MSYTP6S4DERD8qc7nFLdFDJSDmYVPEMoTkyTh5XUv28B5qmic6MmFEHvxL1sMZdGiTSvoPjK",
  "key15": "VJffLX7nbaw3ufvuFQ7vFS87iicnZgh3ZEiLBkpAznUEV7VR9WgK6mTDZR9Zi2NudUpCcGm15BbCQ2fJBrb2Lg1",
  "key16": "4voJcATs1xiynBwaTzmViT3zRn555HhxmtUcbcun6Vt1WH7bvafyuhoXCind9FoPEarRydy1uiyottcc2trBVhte",
  "key17": "3oofgHEBc9bsHAKvG1Qjcdvyq6iFgVprTF8ydqydnDsrbnFRSA8aCb6gZ28jhraSUhSAfWb2qPAa6kJVK1r3wQVv",
  "key18": "2WJ46KfGJmyTw5C7P5ggjDUjsBzsZfLKb4b6BPXV3Ujvsd79mmSbGTvAWyvwNv8n97t1nfJrzSsG5yZBzmWZTMMA",
  "key19": "5g5kNELpCs5mqphevsK6U4MS58XJFsT47SFyF1G7vAvTbkXwC6KpQQRWEiAUt6JqYhSrNmeYWt1y1eexeGM1nx2x",
  "key20": "sBwDUtscojfyrRpsmWBgEwuCzGAX1Pf81UYgUhAXe5nrmUJd81nqF388ubDuqFTTZVikNGofrVMWFDnCCJCu4uJ",
  "key21": "4u8hU6Gaa8uV7XfvCPYRha3E8pXFocNp3ZPr4M5dN5t7tqXCxG8uE6PFxZKKKA5NrMC9efXpVZoz5zkeMHAQjCgo",
  "key22": "2PHo2KtxHQwJ5TthL3fxHNKp4L5n69wkYHhaZVpHGw7CrEF8tzdWFLHY4thgCudCAoNHq26v614ect6vEMs1n77h",
  "key23": "31rFjXrYSYLXaah8rU7TmYp9MiwtHCbiv1WWnyi4djtngeY3X8nBzREfyreh9Gj5JnKunFLW9XtfXwHUg7fvZD2B",
  "key24": "2yEBS3emC1bTT3rmyebi6LrYfgV8tvXZKJpKb3huhJGmosHKQF8b2vBamQ4H5P8JBvatiEhvTrETMPJekiR1jEso",
  "key25": "3UraWmE6pD5xbCQrCYmwRsc5YxE9jmziPPgXcwGnvn8GkvqyU7QgchRFgZHDLycFbdw8Hoiztn8XuG1DfFsGtkTD",
  "key26": "35XLsgBMMxt6FFRjkrGN3x38czYQHjkHr5nePbnJdpjFaPi1mnPdPQSBgKPHKmpDswmYiCKHJ9dftspUnMruTcYD",
  "key27": "5uY7ck64FgDAW9UXhHoFrE2XQP6UW8yezagYqPmcfkVw9K6NKceA7eaGA4aCvLyrEu1AHV4Q1tkh1bWvZDoKrrez",
  "key28": "3DpY4KwqMQeAbjDJuWiB5UfW5cEJ6fHYV1TVG8zPeiv48GjadP4ymksENn8oeDt5uJ6KGnJw43ssxfB1wjHhCfnV",
  "key29": "4kFbB6MhhqYECPvkFySixzNt9g6xjU436a9dKAC7TKHyv25osLJ4mPeaA9HUXi4iY13tCeNtDy9dVY8xHKNAoUq",
  "key30": "4qcU35WvFMn5Q2gRYxTQv3fxdx5GbEZcYwgezGssHTHmpUXqLQP5GyiNvnPPD8zhPMDLiM1fhtRSRsqmwG1ugfP4",
  "key31": "5Y7fnLj1fNxqiqBChghQsjcLBbqGBnyZfPZ2zRFA2MtevTqGkCXd8xVaXwWvXbbQRC71oLXv8U2nqk6U9J668ffZ",
  "key32": "48iBDgBwCr9Uhsddbi5hxhDCL6h5HXsDsYRtWDtyZVZ64tZAfEg2aNfUbYxWAbbSfrcuensUDsJtkev4CMoMfQ6o",
  "key33": "cbrQ2q9LJjuRLEvBdAmuBD9enBWPF48nonVwEH2Uy47AeLAYwo1phSRViJ8s9sF8SJi9wne263reGMvGMJnxCW3",
  "key34": "3jPmp8Wm7y8UZtwadKjJqsm3wLyGSNKVo8PG7FwZaLPKCXXeCeWgUdyPfqLbKe7RKMnMrrUXJUTCkMSsa8URsByG",
  "key35": "4tp4hbdp7eHvo5G9xpqbdqtNsSiK3tSsRAFUaz4UtD9e385TBuW3AFBGWuLknKn7ioMqdjnsjBr6FgYbidtDvzr2",
  "key36": "4MK1ynUWNsurLffy9QrpkZkihHw4ZMEndvQswA3fHCbEi3XBmyse7FkndgMLYEXqvShrEcmoo7w1Cdtu86c9QBBx",
  "key37": "51TaE3sEPWqaBvnvqTQjVKMzpKg9ZTpfFzNtM3oZ4gs4jWE5nbAqvgGPNBmFdCFdSKtawjYkVtKyhUJ39FiS4Rc2"
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
