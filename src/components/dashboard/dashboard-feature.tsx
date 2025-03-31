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
    "3S3a5iKjLqyYgkF5bK4U829P4NqRmZKaSE5AR6BefqQajERgb1N6YcfeQREJqhVewrdQQJof8WR4pL3bc6UoiUcz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ztzxGHskPampWY7s3nVo98uCBM1HzKxFrKcbYxvVsg22Whh2VtnHb43ZDZ63wJU6duWyLNNpcsLmg51HGztoCfX",
  "key1": "5PaNCVzCqygoawnfVZCVgjyusk1mRP2o5hnkFdnMrSGtEKEmDD8zU2zGJ9XCdQ5HfxfgdmvB9UVorZzXAAMu55GN",
  "key2": "28BpjqsJgM7QKKN26W6UEvnmGr8RzhEAEpCKgsWE3XCE46hzeX2wpHDu98L3FXbyork3WUhwoS49nVfNUgKPzYTj",
  "key3": "4sejjSNZ8xnye459KwnCo5qy56KAnQvqMaeVDFqv7nc24GsZA3Yd6DeHS5jxj8dZFLNkhjJDPH77djzXvhn4nVv9",
  "key4": "nBYaSM7ZxcCtUeWgYxZBXSNzNPxU6LQHtqxLEEijHvWErFKaNVAeJhGC3WCUs7hS6NY6wcc7YT987MYxUJ6evVX",
  "key5": "o6K4QG5SoHsn5TWiMHMygy4FfXtQqccyo6Hp6AfLkupqTz8kuiQcaoSwUTBUdPUdZ34iWm6ZjPpfYSmuzX1VYEy",
  "key6": "4uks38EQpCPAyTHLaHV6nzLfqzLiftAgP9uMnxERryLriXNwCztJkKM5YKTBrumShwuQEH9BmWZ7oPeWY88wPiRV",
  "key7": "3fWqHQDC6RHsVoDyYY3PgAkfLFXsNoyXvkikv5FT185iqzKmZDVhRSJmyfZkPBuffM7p1twd3LM5VNCFBJHd6hUz",
  "key8": "5LNpr7rqoAjuJic7Es84NZJT6oLFBBFTfoS7z3AfXhMSx1NPCEBFVJ2Xi5H4NreYwppcHjMYtLCv38eHje4LF58U",
  "key9": "4eebqxres8cbX5xNHTf9px3eNNfZboDR95JWa9cpoLop6UmQwdm3MwffJbKDTfaWT14wgUyMs4XvqQfAp7oUJLYc",
  "key10": "5DMBSgHihVSdZkEcaxrQ52FARNCJmokbd2vzab4mZRen8xgVYMqAiHNKAqvWityD375T7h5zmBYqUEHm7pezYXiM",
  "key11": "5LSu3tAWHkQr6mHyLhtdiapi1g1DpQ1a6hp3KbgpfwHN9sdFvj21oRcRSeWAWKPyHoWe5aofbKmPJsYQ5r3Y6HMa",
  "key12": "5upDp7FpitDxNkaThWCsPKwbcesfRsPRr99WDik9mjAjJ73QhzkueCiNJXiXp3p5MkoHpuwcFLGVhD1PXQyQCCTt",
  "key13": "42MhYuSUhFob3wyBC1x4PT7m5edZ5pPCLaRJYRbDrMi4pb2cRoY2ZM8hNso4JHLerAfQcHfpWgUo5nvcpGZWrYFp",
  "key14": "3q1hvFdQgN3ybZ7YkCnBDW5QUPAJwFFJqdBEw2q2gzueyoVtb5gNJbJMYKcjjAYE8YA5hwzWpapayX2rX5VRmQp7",
  "key15": "3kwtsfyrqowT5u3LJNJnjTp5pSTJmHKE8h4BNMVGWHJ8ggSknN8yhPLa6TdzF5Z2ZZm4VZxt82RXFEpUExSiJQR1",
  "key16": "3XVYv17MHnCCWULKHJaAGWJpQMQyTzDdur5cku7VagTxBdaREfPadgPneTow8gyasedwNDtYhu913sF341cGVsSd",
  "key17": "4Rm2moMYK9CcSYEsZxqvBpTYdtXSV28cPSoSgU55T5Jq6qNDYePzmus5mwokveC5Gj5wEJk6G25JXqsmF6uKVEbT",
  "key18": "7Y4joVMZudvmQH5QLZg1WjQpZd691CuUfrAJNYAaWtxuuToixadoT4Pk9cX3TztV4mgUPVb9Bzaz7mppAf9kC9D",
  "key19": "5MVKzPeZZTCViKZZ1iWZgLDfyiBtMAmdvKTWMpGpVsSHPKV2DZo9ysJtbAdCzSvsvsZGGgCxMbMxBgBZ4GaXn7c3",
  "key20": "4jC4zLrkXeNhVQ7HsCMBZvvKNVmfUWn7GUozDD6R5r7zRUUK9neoq8VfZhPA79nuXPjRpMZs8qWJJVGTWWvfJX5z",
  "key21": "5SSK89mUv4J45qCX321ekNU2JaczJCvBHFjmYnp6oGsx6hFht43ZtLQ9n3Vv8Pf9ypSYzTMbZBQUhqYrB6Pd47U8",
  "key22": "4RGfpTCAsAcRH3aVv1UN8iXhwqaD3cK1hJSRE1LXVYdiBusW6WQugfwbog3qEK3ZwQT9g5gGXqBKrszuSX1F6fD9",
  "key23": "2TEBu8pz6UzHkRF7J15JYUruwPKZStHiQDtq8qRFC9GDv1VwsZuwALJaWC9udqDAFBsWeLF5CyoahQoBBCqC5cvG",
  "key24": "4rhm6yckjztL6qUNNcZQzCiKTN6gcLXWFF5yrtpgqN9MYEyyNwDM7WUhPPjsaZ7Ahcbc6E64QqZ916ZA6BNsujzR",
  "key25": "5pdgWB9ozD2MnhSz527m4g5F1m44W6THBam7DGPxHqbe1EHxBqdwQX7rvdGPiBAYHA4b9bVhLyuK8xSCi4vp8ZNQ",
  "key26": "jQVd7yNLDT5XjBPwW9iX8zhAWtNdBRgb2MXrC5nYtFuiEHxeMU29fjXD2kcp9BLroLZAq2DbcYpNRHmAQpB6qwz",
  "key27": "54JqgGPoFHS3h9Kw7ECaheGoAWfRTYk6JVa4MxYJNiHuAZg97Y9pnAA9uJZdRuqp7evfscnUGoYdvgTWrYV3aV1P",
  "key28": "5nxMU2PRtaGRWYMrmK7NckV48JQiZn2PoT78BP8iKxXivmoDQipKdxfp1PtS1wPSzvALDv14EXn6spyFY7nnnr6Z",
  "key29": "4GMgqQS6F5c8mFq7NdQjNCkwHoGMEhGiDFQWBYGpfmg9DSQixH8cuR98aye26eXrp2k1RRwLhmL6A7wCG9P6wgcw",
  "key30": "5avRGD3U5jNQvkGmUZVrnbXb5vEkvRc2RE5Qv894NYQdYxDccf1pfsMAcugfabpPZ8P6zKptqTyGCM5YYE7cuMRH",
  "key31": "3MyFJkFYmyCSeaV5FGDaNSMvdbDL3K79dxBwTmigqE6dw7VR5zu9fRtvtSSBEBeKovCU6fVxpn5mozvtrkG5xDjz",
  "key32": "2BpsSdwoicZptcqfzhR4f5Z4WYGY7MugJgDRRDajw4dSEj6Ae7bY7NPtXZUMnv4fCidz5SdQ7dqHwq9xy4so4Pdw",
  "key33": "4NJ6CusrpgZZGFg4KQtxjf1eyk8M3gS1yqYkUvZqtaMSrcvDuFmDVXzaMzA3sHwzuR5XxX2xiswPXS5K4HaukUEn",
  "key34": "5KwTXSSbPatXQXFEKR82aRRQ3F2taTF6gNcGrF7VyRfvZxZr1FLvR7U5WFGaHjLrQfPfR6kNwmNmBHKGeCDyYztd",
  "key35": "47BhRuvDoqGca5hi5q7238ApYwjmocdrPwQYVAZF4i53PDrBw8T1nQghQGdsLzfEFQDR3SfHrv44Lo2qSFFB9aaj",
  "key36": "62Qhyfc1u7gDCs8yKF5hkMRELYtzKfyhhEABKNQyEBny6xyTvcHPpziZN4AKytEgsFEJHPXBnQxjXpDeMUkR5dpk",
  "key37": "4TsJZWVCLXXTJzNLRUPWX5buZeNAgmgg9TwGC7Zz7SMcoPGGoK1PQiGDnN8F9XYjX1bmoSGEt8qRRRFoMKrSj1iv",
  "key38": "37iJQcdTzcFzw6sSgXGV3a8fJHuBRMss4cztCGuoDc986nev5ihct8JB6Jmyx1wMb1U1ZTxHpQHVuoixnu347P9t",
  "key39": "2kHkretDn7nerQPsBwDUkTwJVN71RVTKVQK6nkFPTabMJtw5DkomLRuB4FW1nYm9UMyjkgN2YS8uC9n4pL6drwF5",
  "key40": "5wcbAXJGtfXsxg7Jpkfb4JfJ5LSjg2Edm9KvMy7FzPpEhUtah8VTuAs4cttzPWLTRyidJ967YLhymXoXL52CKT75",
  "key41": "3kr5nREahNv8Wc22eXxvosv3o79XBmdZMKo2kFuWq6XaozEuamJ936hcTanKnP82DASbfDnoQkCXpMkfxmEr1qF6",
  "key42": "2AAvpNZcT68kgqHHj75JZgRQCdh6BwLNRJ1U1iF53VYA2N2qvnPvvbfqHRapxpWtKsWZ91Dvpz7zLHrEnwyApXsW"
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
