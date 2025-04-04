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
    "4sku7NseRX49hSoeC243fYKAD7HhKHtKXc1HFwbg6hzberKGyaaAuJFbTkUCzppBt8HKKRLZymQhTrwYSPZ3pjvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kUvw5hgyppq4AfBJYNViCZxyXvBxoKuRYxcWYS6NUB34xS1S3tTAREwBFfXSPi6DVg2TKZwQtpatyQrDzbtg3cb",
  "key1": "3488JBJXGodRYjFP1AQxEaMSwj5t6ftftCzDfpWYhHaQYJkbB7NZHJaKykZjmPB16LoYYptpuiJrC8x7GhA4x5rh",
  "key2": "54u9PGm7A1uUhT5xC61vhGytC3ZKx3aAs13wofBWabS5bMQDtYBZ2RuAyWRaq5i4Ce8JwjnDQhYFGqsjvBWad2L3",
  "key3": "4vi7oWbxUi6WFSvnuufNnrtz665k1f2vDfcAvhJh2tgPQoLyxDGAffGtkKLz1ctxQBRt46XYRWJnTVfrwuPdMhi6",
  "key4": "41kvvGn3jW4k91etroK8AzYkUGXsSvTEBUJTKRpWRuAi779oG6xfeFqd39ZVnAR2k8Xg3dcE4rNinRoCLug6J9cJ",
  "key5": "Z9bn53zBqeSa6fke6ePaM28CVqqBUYXzQ664XCvF8Dzbs5FNaNnLTPnW4d93ccZgBWkvhCgRJZ7qz7tiqGFvqcy",
  "key6": "Z9eETQUnAcARUQ2dLsj21QaZBXyWsKrwumQtAi74KNi3UU993qtYGkL7ZRQAKyqMtqS7ozRAdCZjryheF8Mgf5c",
  "key7": "2F8NFriHksPc6kJdxC7v3pgRpgpqdKNwfFdGY9vFBGTYtf9Pvyib64YCES8HCTdnscqNNWcQtbJ6yqqUEPbPSZyT",
  "key8": "5a9JWm1oDj4ThMB27RdkmRmPuyWkufqAaeQHB6wkwcnFr6a9DJ4dGX4fWEiRA6PTPPJabstaHyeky5KvNCR2oM3N",
  "key9": "42qHAyGGMoSpu9YMe5hDG1ibRq1tToaX8vbwuviTNypGihkJDGyrGHvMStnuHHURRCBsqYZvHQry7yghwC9m3o5T",
  "key10": "hM8L3pq6QawwkvLn2Ybw6MMpGoRjA2hNqpPf1zjnUyRtMT7QgV7BeEZN7fxuaw22o3FHoQBbLRQ3ALLACYC1p93",
  "key11": "4rpaws27z32JHNXUkSYi1DB44Rb5Um372ZLxvJ8dqJyV1m78m5jHu3nuDo8t7k5gEd9g7SrpNkwjzEg3ayiuwur",
  "key12": "4vzXvrK2D9nzefCQmGiTjo7auaFcnsh5AsW6sPtzSEFkiR31NdkiPai8SMyuQLo4qWzncaDFhtU3z5eSLE2LDB16",
  "key13": "5qxXubyXSSJ517nyvWTXCfdfe7KgGsCMtSEPjWwya1fdrMsGb35L1vUWe9TKL8wFcKQtro4KAVQywx9bT342AGkG",
  "key14": "6CmMnX3sUYvecUriiJ2DCfFUx61591x2sHUam5SgUh8o84GvebAEocgcgCBVT1CVMXx2BPQQvswP4KmvY2so9m5",
  "key15": "3RQ2zCYkXc24RnH6QRhCByP65pwE3FN1FQ8uStBgNEFYFyDpDsfyDNbwz26uL9bTTFXXLdpNVuXaSHH5Wdi9wvKf",
  "key16": "3uhVM3T2dVgntXXkrdu32n4BxCQg1bhUimGgoJCtGEJvFixv2BHNBtPivL74egZgvfBYuMB1HNcPct2smoqmLqmp",
  "key17": "BTkbziXJwM5TGWMrm2vpGovY8MECXHEuA1dtsPZ3m4r58wBrypyKxDAjXYd86YJUJ8m4r5Te6sHtoxtD24nAMYX",
  "key18": "2DuiHUSBGE8Jx2yuKCWzjyhuXi7dPZB652Ee64WXD8T1h3zXYBHrebyY6iQjvzkC6NPAYx7Fudo5GoUK4DBUt8eB",
  "key19": "WjJHetqB73MKPvNvew8Rt7jkeBo8f61moUdZPqw8T3PDaMLL6PeQCGMKDL4yZmRVBHuExS4TuuRrUCdAVskE2Cs",
  "key20": "4kmeaVAbg81NHPzK5G34vFonEE7gRnahov6xPpBjyxRqsqX6GWs59WSPFUbb8RCPVmegkmtAC3pySHXvVH94cCaG",
  "key21": "tZG8NdRu4PE2Qvn5zSkc4BHP5HgkhduzWkrrBMAiJsgL9Sh1fFZtQsHrZ3iG7gFEf3Y44mo4qMzHXFdwZbLdXXE",
  "key22": "c9MevkzgMhBjMCRnwogXQQyYLD2Kpgw4FDgkZmZhV1SeWejFa5MMiRrgQpxdEwboPH4UDvm6bgZjAshZUZdn5qT",
  "key23": "RHMfdhfuwGkdcbmwWY8nSWih2XHKZfew8GEwG1BuKHKQLx1htYEvFmMWTzr4QbhPGn7uGwjkumqGmJfHtR4ieSc",
  "key24": "4PrFk92qvrTmky76G7CYgeYw7uTQygPaSAcqfuDKurhPnQvNzof1mSoVv4Z6VzWd4UxzdcQMxqirrTTS4H4U8w4r",
  "key25": "5XRFhyBJiNLmopDCgSK55NSWGdcz7STF7em6S4sW8HAeY4FwSyX1XQ5Ac7QQfbr6JvkzwQ2b4M358dQogFR1S9Pr",
  "key26": "gYzTYsoqLhHzYi3ut9PyQAR6KEBPojDw1QwoXsu8GP8KXY7tquSjDNiEGQLDn9QpCvbtkyXBCScv4guopExvBYv",
  "key27": "tswfJmpwAEQPq1JavhcN3eoGtgAFRqxHEzjRDUw9JXbdbs7byZ12sHMG1Rn43Te6w9FGfjC9ymibxTpLTjA8MF4"
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
