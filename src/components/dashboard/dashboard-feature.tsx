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
    "64qwbDLEkd2wWH4U1rw7Law6iGap3BCHMyjH9UQvaLkjUzxxtJwefrXdELyNgaifvo6f3y4FkStj4HkzL99R6v97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kb7PpbfqcEZtKfjD7g1EyqjJV8tWUvBVCcXLQGXH85KHhHFa97PofG9pkHg9dvMQUTrS2boPM5R8P9Gaze8CWZX",
  "key1": "2cySxaoYJgpR4M4YEg42U2aQmmLM7FxK6LMf1DB3JB9eaJKeXqVvgSVSStuwneJ4toEPzTK652CCaRsxgYCJnWzU",
  "key2": "4hCjfrbM9rzfSEr5f4NvmhgJL9TTmmdWPRQzRNbGgtXJkvPCBfRSonQPgHRVFMwAYS4E2269rsfQDjbVRFfgiZM8",
  "key3": "4CbVzCjhH7GU8TBv6emmTmurUd4MuQGK2K7ats9wudhCzSNysbftGp2MG6N6vkip9oQbJqHk4aCpbynFUmYuipc1",
  "key4": "2uYu3o17VhQTP4pQLgkx34KcnBCbdjyfWsrJFDAUAiqX2fKyfxux7nXWfVi8kdTscKfDW4ySETckuDaxVADNRYDG",
  "key5": "2kUMx1kdsrxG6BVWLQXArv48whATSz4s1HNVL9wV61gpV3brgMqxPAFGzZcN3vQWrKtxyKwDdsXvvMEztnSosJ5p",
  "key6": "2Hd8ND4CA1PjPh8MoT6WNMgNXLvEDF4sNA6RoQoLo7as7WYjLYi9zbGo56C6ns8CM5Vd7XgYQyNUMvcWxWtTQjHG",
  "key7": "3h9gjn3pA6C3zTGen1dSiBUAqVPABpG1qGqsZK7r389uP9F52wi5Rqw5ESZREMQF2drKZ5KQQuCQGCehg56NGNf7",
  "key8": "3DFDSp4gfCF4J6UGm5HLcLbCNVGaFCV2hXUqx4ybw2DSDxvrJZExuUw16wjTcs3U5vSyE2rh8GU27WBKDcLpgLQz",
  "key9": "5V51gui1Mkxmp4L83UJNktJ3Vo3CYZG4HRGpntvth2gbYKGxVTMjMbg8dZTewyCEg93UfEFbtGdPqytmDJaejXTk",
  "key10": "D46gxMtwdz3yMFvYBtVsvNXxGJQAnxh2WWMdnPkdA3gA24F7SrY4Vd743EETbRN7czwm5tFVLr9cHirrL3BGbnQ",
  "key11": "3RBVs1nzs1GizJsvVxmz4YwdSEW9G1DWZSqJshURuyDfbrNLWfn9k56LB1f35zQca83sYeVDpZCm9cGMkRT5oR6B",
  "key12": "65n5mm7twY8Qtm1xngBC2Y6mZSGxj6TsjspLkdQPP774Q5JFKarcRvvz3KbsmBufRnv3z2ghWBnSCWGWnetHNKe3",
  "key13": "2cnHE8f6gMeAfpGDJvTnbfVEnqhLy1tkGKwTNU7WysstF3GztcPzPXr4uNEeS2kDgWLvQzM93grxxVPsHr5rRhWX",
  "key14": "8e78S4T3vgMuRTH5naqrkQsGLg1nfjSSZVrrwe4b4b3uPdj6oiWTe8hJzYawa6GoZAZ75YT8ccuMMiK3vwKUneg",
  "key15": "hht5qtGDmXA8b1TqWMmqRkvHJaLPcSD8iQEDoiKr5KVPeEHJjwE1zGGc1xHUJp943HAPue1642VB7vc67Mab4ai",
  "key16": "MZqCKvDfQ2qa48AeAKrCq6eSQNCWVzFboakbmYKwTVqUwZ7yJk7bHUYxHyTEUKLzdJLTPaANbyYbzzawqAJaLYX",
  "key17": "J4SLPN7MhqgmeGowxH2oHfy5sHj3bu7dPPdWCm2TmSfC9XA4sfwSDx1iqg81wh1FKkZrmm1JtXG3PgdYk9i8rep",
  "key18": "2MhcSVZ9sn2drRDXvQTnUgt2WZ1YaRMnGhQVjpEbExbiYfU75iXAHUacEBY1AKK2MP19PzzqmyiJxboWviZxNMiM",
  "key19": "29xSpyUTELNCDM58JZeqBZvNGX7RMzHqTxs5MJyZMaVaczQpcAgVbXAHEWCFT9iKjw1fVHRpuf5T5HeCctPgF2Ea",
  "key20": "56MfxyJQjfBKuoRLEiKWvV3En4qBdm7Q1Z8Wyy3BnLpEzAhT3gi9kes9uj3hm6iyCvF9aDrkFCbYobjkSefP5bW7",
  "key21": "4nUkeNQsHfnY25oyrBzZkSXBGXApqwhbWmKgJ2Z9UVKxxkeqRPSwTx6afHiQ7YxBkf4U6axyeFj7VWSo4mKMa8BK",
  "key22": "3sJU7Z63XnjUDc1mA2DgozGwTp24ExtR43dypPaFeRwV8tsQwNiLJKDusDURaQT9h23WLL81S4gbJaWNmJkRghA9",
  "key23": "3PQhFkWVgq3YimVV9b81ecEsLvKDJy4yJdSJSXYLqqemLiXxpp7MzXCjvAyY1qWhg8qvn9kGcxszQvgUKDHmYXaU",
  "key24": "km5KBXPsoQrkC9zzKYjrSbjPeo87fSAevwvaLhW8exAiwFYqa8ucA5fMcKo3JaikgqS69ZraPJma6ghawG1BMN6",
  "key25": "5sK479Pokzp8PRsadxqyLTBnDrdYXKZdHtVw9cWq8DARacBhKcfs6WRa4Ji7yNhVjs7aMbRyXEopuUkrEaGU4KM3"
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
