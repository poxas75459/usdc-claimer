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
    "2JeFRyYQpFdY6bGst7rgDhKvE4YH7Rx3qC82526bfJLgt9WSmbWhBDSBJDyyejLr942VSgseY3PmZu8m9bAkSkA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55eYmnkrGdtptfLMtDVZd5zFV9MSjoyoGvpwDwFBHf39anTgeGh7neLkY5fbfBJEdkMdXQvD2Be756BMtyyDdLu8",
  "key1": "33nYUre9VehSmbXqkEL9JwJg4Y11GhhSKLr98BHrP8ad1vkRtAmcNQ1h7YjsPrpPV1r99zDfdGp7TpT7ddrgYUns",
  "key2": "5rS8RDiHH5q46XeuYCxvgrZgBv4nuX8c8Yp9Ws9aKnoyYt6r2SeAdeA7YNCWwSzYkM7a87CuQ5dgEg77Hoip1oex",
  "key3": "zhfLUAP3GReaZ9jFJhGPX8ovJQ3oYvt4TxW62amTmG8PKViZK5pkmsf6pdu5rmLZZvjF1AWWxNFTWkYczoL1oRh",
  "key4": "29Bgqx7bSbR2juEzCh4GxmQskNTGL69y78oiwCNFr5mvWQf51Lyz439PkC8Qa4RqkvHjXtYkKc51FGjT2ks4AvMK",
  "key5": "5VcRvopTW5jGw1QnJP8mqsSyqPGhbgiDdHkUU3yorQn7gbTpFGyMLv8uMmbhCShTwwxc8Z45MgRxufiA9wufhnQy",
  "key6": "18GW26GjbEfJ7Pk36TDcWsq2ru6nz3BHqNNXZgnarrxuspTqn15Kc1ixJXe55A5XRCbSu7cJccXEqt8JZ5NFxsv",
  "key7": "5nnHie1VkTPUrwezbTGfNetWtRsfkuNTJn8j4cnaYPLVMqrdL8sv8N9eNeNLqyuAmJZqQD2wjD6wsZ3mkWKhVYAP",
  "key8": "5pwaCYFfiK45wxMzZMjqEcFkSzrody9waau7KPadAn3vo2J7TWmokh2yeFPSTthshCRW3QLWaXpyyVf67WtJ3tMH",
  "key9": "5N1zft1V2KWfm6i26mvxdg5d4ADPEXc6Nc4FciEyXNrckggwBp6CFFfufH1F7WXugjnrcTTRfxTKeMMKxAzhdDzZ",
  "key10": "2zUdfxgSsiDaRJ3RdW2ADshYxWZLrvmyJYFo6jMvMxGiuBH6fKyNvMjv2VGZ5vF2Jp8PwevHVn69S9b2mTdvpkNZ",
  "key11": "vLecyLgwGZ1oHHiXcMmGbCwGH3tJwZ86eYdz9XPXdd4A355au1ojdBuaBFvwu38bkrif2duexDEY61aLmnenj4T",
  "key12": "2Lwe2oxJxbSECcFwyDzCUGPZvMAQvjUrXtM434p8xfv7ysysUyHji5h65Xigj3FZ9v4ZaFe64B92TPm6P6j1qEo5",
  "key13": "2UQjJTy39uJHfgQkKqvAYPLZqfK68iit83MbnM7yNZyeJGsav6fvV25tW1eZDn9L2jH2V79RMz89uXwpRKjX88MX",
  "key14": "3Z1uBa5Ff9rsGvpxfLWqrcua4z2KSk17HFBPpo5RgSsCg2ALHgLr6LCWqXHof3uYm1e1owM7G38ESrNkXhw2x7Rs",
  "key15": "46wcQgnvwGJcMqDGuVMVksLkBkNHM751Sg3rCbWgRFQ4FjCzz3egDnux9iULjexVBadE11qmGuoCUpvzEZmSjGet",
  "key16": "5CWWk9hZm2ArpL7yg998hWbQ3AyvurWnNhhb2aLwaeniAM4MuMsBKhZMrKV4tpHNDawCVHhj57bPH1mm5itGGCcY",
  "key17": "FaXNGYBbNM3TNwHGNDWoxEUjRqikssU9t41BkfLFiGptkwkfnSHP8vZmJ4hp45rRRGfTKhhqzBUnEARCs8PGYrX",
  "key18": "4yS8DenRs46TjsiodZj2u1xgKLdq1Dq5SsG4Tz3JcZvH8xTPZW6WVj65DnS9ruKYxM4AY6ngpYVEva7vpfP6jS4m",
  "key19": "5XBtGDk525w4n6mpkbbXPfBXw32SCrPx5F1Chbo1BmfMSN2AT5qsayYF3wsj3PuVXwLP9n9rkPC3TMCiG28m7HDo",
  "key20": "SMvfue4D9cmSXXwB8EEZhhu7i2jj6rqsD9ERdLzr3V9RjMjFFNVxRznhK9Bep7HTCPBnZP96FgjDWAbwQ1vfY6F",
  "key21": "2itKKkyDjmLPdCZsqor4Rhv2Pj2uxuNay3NAkkZ5SBLaBHr7UDRKh16FWGkJcB7mzsfSJwzqDyyTTAS7VynYw17u",
  "key22": "55k44pmCUGgUVrP6GtMMHhEFivvqsNsshYDfAMnwBf9ppUmGZdAkgKSApaVK5smzrDM72U9eu1SRPL42kKY3uNaD",
  "key23": "619ByU8bECiwGtSi8fX6CMpDfBuEB1FtDnNGZWJZK2z6j56PULN8WCHSqHncDtqp7DRtRL5pvLhKMiMCJD2jQMj3",
  "key24": "5jFpcYJ9McRFFNMDhRXeJMeSvRHKMMEZG5u4Fcd7pc6hbQXaYutRDCapQ96d9aXt2f89FdF9Ggd5Jvt39k4c2tDZ",
  "key25": "4c3y5m5dV1wt8HUHfyczEKtCU8Zd3LeAQBLkBPTAZu8Qcpjv9ebRvH2DfdTsVfZ4pF6yzTsk1t9NCoaXFMAHkaW7",
  "key26": "WCbeRuUeMbwL8yYv2pnmu9p1tuN21S7Jp2PRkW8bsbebVr88jBFk8gfbjeqjrJCdNtsxYqFyyi1urtZm78cM9AQ"
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
