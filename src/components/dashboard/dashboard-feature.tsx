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
    "k1nn6uHBMzrFzstf6JhFtJNLMqP2yf2ntBeCnwCkN8UCu2Xbe2HKg4qNbBU2Di7jmbpfYRoDgHFnRQwA4Chev58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kPpbgR1Y5GADaLarbBsL6aJppzvAikzwqhMMFYYMe8c8M6urBbYPZBeP7F8JX4VMuefX8k4CfNTvyMY49ZNcRwx",
  "key1": "22A4A77DMw8TwzHj7HbK4SRAN24Tf8EgsNRjrqagRjWuchgLw44jE1kqMjHiNjRpsGzCfU9snMEPKnfNN5WZvsKK",
  "key2": "4UzsU3xmtUE9RiwtyTS4oMRREgGvQimGSNJX4cpDqJy9XgxeMd64TVPR5yzmuLobe3fMkytPz1vkwBruXQjKAuc9",
  "key3": "3QVsyAvZtNeyEQ9uxNiWiUj4ao16vdj7tbLpCVpUkTSVrTMk6t9zgwg3tTAodNtv4Xq1G2ZYXrXjkwDeFHw7JjpG",
  "key4": "4mVnXWBdBkcY8y4n4ELz3iLTQnXddhvL88mwxT5M5DAcC7pJzfW4s7x3BMjYJA1KMYuaPBSrbs7zMZ2p48iRzypD",
  "key5": "2NHko9dyFLoivQxzW5eUfE1VesmfuDuyMbPcRPkB9aSfs7DVQqUNx1pveVH5xruEre4kAVG5Kn39HuDB8Nwc3JcT",
  "key6": "4wAhAzG53mgzrAuaKqQicBbg34iT8ugK1nNktKNWsibNM6PP3CM9YtZchpbtTBkCsFnBjdHDUk1e6zsj5SGkizxS",
  "key7": "7DHKFajAoDKCeJHy4M4F5r2gQxAQsHnTSu9JjiNBQwAxYJM5gZDTZMtVyWkST6uzTVudsZHpnDR6AqXoresnVjT",
  "key8": "3SNGYiXFT98sVrCsM4XLkcXdL4zZ5mAvdgGLFeZG7WCz2n8SYkvHfqw8F4YGxsrUi8gKVdpYZmq2JsqGoHZ8Ntv9",
  "key9": "28YR795qYwzhvBCCN4EVy4qNf2mHuM9VSj9AkgiNaE7vM28q1fJGcNaVfcfZfqAaSBgcmHn2A35RGSYhMtFbWYbP",
  "key10": "32L7JzNQ1G8RP6ZMH2uSYWofaXhyywYwpQhuJMNrovm7Tk41sAofxKeyBqjBx3kh9wTzAJmiLWL2Z3kRcKWvEptq",
  "key11": "5iWjrwofbRvPcCA6VZtc4B1NwgKcaTpbi2MLkuQh1obE5ocSF1J2RoVR7pwgQMsAVzYRyUg9gn4TNrWLeHxGV2Xn",
  "key12": "V5MTzd35hvPWjLMQqk8HacUprwa6r411XKCodmGm59iN9dVq2asyLfpqZsCA4Md2gK7VirVdjwnKtHqfbeNkDuU",
  "key13": "4n4x8j1CuCFxRb5HUTKANsALAtPjmsfD9URh5okQk5kXFq4UMXeh55JJLXX74dD4HARZ7G1N4pTVcS6RvfU1o85a",
  "key14": "4Q5F3Q2KXwXP4MKMZLYkF2QajCuc6MsZXxShRUa2vxdtE3AxMF4xciuTPnu4oWAPNXmv32bwbA36QAUkSJRkbnPr",
  "key15": "2rMwUnwBZsL96djT7WmRzP3H47NqnHMNxFgaVwGRDmzk2ADzGq9XK943AtsPadwWndXY3pTkt5ymYkeotnv2w3rt",
  "key16": "4mSsBinGadrMnAyewotfQziER6ZFBSFDWAaegCgU7HbxmQfbXadSMa9g5i4m34RuHQuuHoRTANdY5qQJNUivVUG7",
  "key17": "4kFFawh4FsbSSWGRFEXqBUTtgf8hMgEZsD7GaE8L21RA8m9uvTPUuXRHxqEn4n4vQ7WXByjjsMD5dn1H1FJiTsF6",
  "key18": "22TawofGDJZ2swhx9UM1fbXvsVSK97Qd4CqMsHPELJ6xswv2CdeDAQYueZCfBp5aVE77v6PPWBVWcCAnk1EXv98Z",
  "key19": "39dynJp6jSdvu24BcS3qQDcNR2DWQgttGoEysRJPeMH2RUuUYRAXJsHHUzNtTs9onc8ixPaibPwhZSkBW3RiQrBm",
  "key20": "2FAtAs2EniMtbAFS7eVQfY3JA65Wx67NUgRxpDdoMAY73VfwehjXNiR7BVVz8Xi1mXDJ1LFUs1tVkKL8iVEAMCWS",
  "key21": "fJsyVVwrbBss7TXeCGUJ8iwZqfrgTZ5zSp6NcUyAsYdgjMno5akjej6rFTQqjv26N5qAcMcx4Q4xidP1Nbm2Rgc",
  "key22": "5iWZMCSqqfth6vzv1CEgQckqk4sEWKdoFe2dYA6NkQA5xyyZkmp29GVD4iobGiFiJtQP6p6z6eRGqzNZaA5uDgkf",
  "key23": "2AjLQnz4jSGZfeJkRUXfypTahYRWGWfYV5wsu5tV3jGBhyz6cegmug4xKsdYHaZFPHJzFX9jpfZ5n9mEzB3YoJUp",
  "key24": "2cMh2qiDv7rkRVr9ZG2Y1Fy52BXTFDRYRLZjgTE7NkNmyJYiV93rGemeosFAyH55Did39VyRPo3hYhNFHmh9MvVd",
  "key25": "ooHB5mSbbWDmKp1gzggpZoUsywSkZyua3BV3T4reowCwtqoAGNM2577tSkk6TEy73TJy3KZPPGKKH3DkXZg28Fr",
  "key26": "3gGyAJtsUocuXytXXmCLww3eNZgTk6tH9Rbfy94zW6u49cAYm1ADL9Ef8fMisjjuEhbW2UvPqjp9PPrEJNdQazke",
  "key27": "5Tky4sXmHE14Y4kwFDKzMcmyZAskZP3Gce8LcrPuToL6hL3weL2y7KacNbrHWtrtDV3k2gjbKeciLX71w3UShFC8",
  "key28": "wrFzr3rszST2JM8ednuPAXPSC5oW74noFbZuTud264ijBSyNbqh2M2ugypX8isNzP63Rgax7coWJJRvYhYgcFPR",
  "key29": "2b4zcVsQuepnpiVk2d3yat2mYFkmmo9p5Nhu6gWuuRvPc19PAxwbUY3i6KuPfGfaZivo7dH2XYA18QskyPP9N2EL",
  "key30": "4waneGn2TWdFo97bzRY7YqHALR7JVEnd1D54eHmD9qgC71oUf2F7xaAemsbn6FaPPfWeXtg24sehvHjWny3ohfb6",
  "key31": "4KBdhazzfvmNHvmrfLmuPUcwckCnRoiTUEWceuXFyjJPLE7hBdP8d13xZmtjxmbaheg6YikE2mruadJGn6PLHbhV",
  "key32": "3BjuFUZKuWH5HoAeRzYKrQkJTr8FcLcjG71hYGxrNzxy6N3BchXJwJj1YzF1tadLN8mbXQkvooXxoMsrr66jYnFU",
  "key33": "45ZdWanN6K6kE5bNgdeJZ7hWYtFiHWjzVfbiWEJzPWbpdV8Wc6u9a7dP14p6GVRZZKNwD2wYtwLhmTWFRVzDGyq5",
  "key34": "3oFwSSbadpzmuWDjhWBjJdjs94quCR7S9BQwMJLtWbJx1UfLeCcGGwzUc1C66kMPbxBqj7QgXG7CLQRUCCGX63yX",
  "key35": "PPda1ifM2EBS4qp3GwgPNMC9K4ynq5W27YDaEWPVBvyUBqUPpJ2VjqjSwZd2FTX9BBFLN2UGsRzvFo9DUqEiiws",
  "key36": "5daFFQVZeEaeNBDWM5rzRm9pv24iXyFpQWBuWKYUHtykN1jRqyRJpCHBMayfbsYyeGSyPKwnH8pVA7bLNNmQDkXZ"
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
