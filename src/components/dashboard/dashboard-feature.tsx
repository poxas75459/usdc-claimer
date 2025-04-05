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
    "5RqhbEtRZuUWYqcD6hjwkACMSEGMoP2MsSTMRvFKMWhWAnzno97QdSS2Xw6PriozcQfavYTa5VWR5BRo8oUkS1dP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "392AQuQ5GtD2WygnyzmvcaY36uakmB2VDXb1H4SALC5JytqCNKwy29XihCDDyg2rD7AbQ4YzM5zRpqJPw7vzEhZz",
  "key1": "43DZdps4fogrCx7NSWJjTmm17CoDWU8yQyH9s19gNU1L8AZ5PCpXVEJf2sHHmkKPtN8z6NRjPXLUsJNbQXzvK5rE",
  "key2": "25GPj1wvPM5EfKL43GJpHtdrLWCJdwxnNtZyzGXQmWjz2ToJwspjM6J3TjghjMW3aCdxRLhxHys9KStTrMrB5tp6",
  "key3": "hP6pvoidgS8soownVeuV1D2Wcb83Rowp55s2JaGnYrB63LwL9sWE1ccVziPn83tKXh5NNG4CMAA6REZMWjRfuYe",
  "key4": "4ruebySKZXvhHp9Xvsrux4XdtdVnFL3pGx1yMB132rvghczbyoN3ctAYFbeTEejFAM66eoKgz2Bkv7y8fgVtmB9X",
  "key5": "4CJntQ6WD8jnzdf5z2Gai2L9NtRv8wYFffLq6HDt9NPCwyWbUYgvP1dsAsLC5ugA5fvM9DvvnBMXTLM3Yub3JTi3",
  "key6": "5PkQynzEnL3hBaRHa5tW6Jvhgg8MHJnCQNmCeW5NQPgWknQSio6MDKsUfcQ3rKpFPhpCVg9z2gFHkFF6hG5AsAN2",
  "key7": "3FvWZvZ1xFAzWjJzMggRthgnbUs699sntS1HmP3VDc5Ew7FvSpQzcetgJhJAxtkT4kcbm34eSekydsPNFkTQudsV",
  "key8": "rfBRmB1sqHMXu4E26P6tKFDMFR2ZRS429V8BePbFjnwsedqpCnEC8QnqEUA55oaFPShakfFy7EZkHoLA2pjUfFN",
  "key9": "4W7ckhXEs7QHfsvXCYi7s6knjG79Rs6fHuQ1UXVUizdAsNV3PHexPsajj1K3HwMFzsuroYRVdz1BGTSuiGRz1Ze2",
  "key10": "25vkirmZJxs6bEnCFxqbeRsqBcoAKZyaM2Mscoq4FQgdnMesa62FgNQ8KhLtsBgFSuFfQMS68ttzqy2x8mw4yj4X",
  "key11": "3qQRiGo8vJZNRmpsD5wQB549p9dQiX1mxATkwmueuUAsciooniQWkkNh11yBBENuWATPTNDp3ZeTA3P2GkoX5pGZ",
  "key12": "4Z6aEcHbmrcNCPbWusMCNcJnT2sZDC8V6wXwm2tjLfA6TgTdRALvCPvHxXAFp6Myo7iZNqE5Ax7XHTkGDHSAtBAM",
  "key13": "4dNTdtrZVtKGkEXaJ8tP2tz2z1i14yoKtpd44dVUDxcxNBkGh3idA1Ck6637AUApJTBABLwCURTaehZHsgpzyMTr",
  "key14": "5FNgEr3Dp2NA8c7M68R8ZHQb4j1wqCFP5gsH4qs3EyaKcwgJm9VBhaif8DddfCyJUrD3ZTNXkexXbbrXFvZXFniN",
  "key15": "5gai3SuKx1gvNeDrxMSPjMHYWjsXbGmFXJZTQw2q56a6mMKscZugwN2HYcsqg2cn1YkgpuTphkxCuHQ7MCVmRtv7",
  "key16": "hBkefUtr3qnZvtCNwmEMpkioDvwmxaYyV9aFyeuQxTeGLWYHDrCzQKZWQtXCQYsAjpTthX7aiidkfSkS6H64tVH",
  "key17": "5f1Yz1F8nfz7sbt3LrdyEH1C2bnUH6x5pwcZVwNmkCWKY92kaV6bxXFmb1HPDkCrBJ8tTq1NRpyoYgv1TvRAYxsf",
  "key18": "3G2j4rkosyzDoEdixbtD7tNf6yYqKa8ch3ZShPXP1aChB9kcpSeMxVSHjFcM7E61H56QtsPT6kh5amYYsUcRpCJv",
  "key19": "35WBmxtpt45Qu9kygeECG11HUcuPhVLj5JGxHP36q6SsfA1Nace8agevkdTpMqHRaj4Q6gHgDgcABqVR2mxfRUWV",
  "key20": "3oFw4NuHe2nAPr7Gh2BujN6sh89PCkbF6bHCAt1PGJfQC8txqbRj7tjWAwE4cksu6EFHBzhyuVqpYowb8hiPC5te",
  "key21": "2YYaWA6ZtyYYsSFYkyfrMgg7sMUAChuzJoCoLSzaboV45rGJKxxbE7NhbwYpdp3HJ6npKV5Hy6DLNqZizguYQsCD",
  "key22": "65kSS4toU2BsXH2mCmAx9112139onf2CtYmf7N9nJrLjbFqkhp1tEqoqSkU1jBm8EANYzSZPXmDzATw9FDkjK7Vu",
  "key23": "4bepfafJgVCzewiufELhGxnDpVcC3f6pUwXDMaRMXg9wvL9mYdFexCD2fZvLAxgxjBKVqEh8RPzReTyHgqDH94nC",
  "key24": "2fab8idyPPHBp8nwLnNAh4XAtmqKvEgwVCkjvKP623HuQ2KYzUaP7pEPf87q8Vc5ehs4dfZDUEnZsLYGJBtSNdbY",
  "key25": "2CDN6wrhxhb4jUp9Xg2dofrKqSt8EGcyogtjAbieiZm8XWgpwfQbQg4y7ffmkQ5VU5yrSjZKEfAfZt8QMP26HBff",
  "key26": "4FAXNPawbwAwzQp2KsvBairx9KjkQwBmN381LkzERuoxi6HrzmG5MpiVAdne9nRxqYUPLguX9M8KmyPieYH6jaeD",
  "key27": "4G15Gbkq8zBoUj6ytZaAvY6oWXiaRrhu5K7Yq56JzBUPgYGCiUvUGBVfSXddJsjYH9KyuYSLNdsWiSagbn3hwMtg",
  "key28": "2qbtVTpd3L8uMAUBdUuaYvTMJUGEdYPaUXEnN5F5a3WoJVkCHytE3gdtHfTnu3LNa4xVPqKkLMgHQdLbrkdfjq88",
  "key29": "2JWDQaNER95cwiEzjW7iSL1WAZp1pRBR7jLNsUjJeAeHbNYXsrcQci5fPQagBuz7q3EASU9GefazDRY1vfft1V8v",
  "key30": "AFucifD9JdrT4b3fRzMfRfe97uP6Q3fYrTzNyBAwEJHViWZhPz2migyuvSvWZh8bcJSZmgGhiqzhczoL7NG54xD"
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
