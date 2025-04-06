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
    "4XnRjSeNsawUBBeC49RpduogmFxtqhrmosdSPaYp5HaEhE868n8RQtVCWAz94n5SbdiBPYUehgXELizE8Z5tTDKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wBtmgjAphbPga2dMwEL86csQ1DTBBJZzUcyWEbwSJf6qf6FnvfZg5aCsdVhGDCVt9jLM6dnEUSD3Gh4ctfTWp5",
  "key1": "63wpXUs5jSKmHfbHUUazhKq5wjpWPdp8uACbmUGzHbsrWa8hYQ3QXptguY3cKq96KVHnCqbhTC7n68KTgkj1QXSk",
  "key2": "2DqpntKDgVTL3UUdbBgMgWMsDEqykiUvfkPzwXMVbTPiF6dpY76XhUD4VEu8MnKD593CniYApyRSwnocWkS9fDp",
  "key3": "2Wtxgg9bnt3obhrRnY42kAXAgaewCodYHukK2qAFRmDLSb15yR6mepJHFSQqtca1wD79GbnRawJVNKbUV936nCuz",
  "key4": "jxxmVtQjmduoa6F6KVdx27pGmEudYsFkExMFgpRCiEPi56gUyWsjirgC34ZNGCfGf1ZeN4NKAUxdkjE6B4qMvQk",
  "key5": "5NVkA3yZRqe1MCRrGaZj5neZDNHxRCK53Y5KpuAHaVTWkyLrzniasqiU4up6CHaTxQYXJjcUjje3LeL18UBsNYqi",
  "key6": "65hGJQz743JDNVai8bmNTYcvaAmGRJ66yYxxsKfhG71PbuPCS2rDb5rYMxisXr9NDAzEn7wNiYhfhBUVpnY8dRG8",
  "key7": "4KvDdhyAj2ehodjgp9MYMEhap3dpsbhvZPg8oeTpZZXXPZqKkfCDHuMwcsNvwFaJr7XHLMVBPjTWavF6YFXQ3Loj",
  "key8": "4p1GCywKmUJjEs1LxwAjzzJpbVkNH24JFfKG9P4QuwniFmThBihYAUHQ8QCUwWXmHJ8M5YJHUbwPTUnJHXqoLvyn",
  "key9": "5rQQjmZmKw3w2aJu6nq7Gbm4MhNEiCNQHdHARcdAZGVmwhCHpTVQx3ChsSKG7pVKDxFqM8nUUqLKnG4Qhh936Yvj",
  "key10": "9dDWSQNdcP2jAKLxK4A1xZS74WZsLmX4tT1bJFNdTqPDi7fA9ZBn8NkX81EpnT8cf5RmP5osXYK647b4gk8mixQ",
  "key11": "3RV2rjiT9GLGqTr6Xbg4j3EkebUrEbSzLTHXhMBMExJQav6WfB2g25xPYtL83SWSPaxpcqqaEm94j6vgwwN3xwo3",
  "key12": "4ApyQ8NqtefeTpv3hL1fX5s1R7yibLgBgWQQ4g8ggGcA78toZsBGXnq2Lc1hauUgFCtx5CSzvFecRSXntCJaUAAU",
  "key13": "5CN1EkSjPWZU2QapW91m1PQkhcuJumuHZQ42YHPy5K7WKyFovmpZdDHAEH8rKagxgcT5KFLHpbphJAg9ns4qJFF7",
  "key14": "4MYAMNL86wRFHeuSHnnSBoRb8r7MYmF8VMhPEJ93SZmzUccaPCeWqefrs3nYTAVtH9NH6JBZqHPcHM1QWgsYSoiu",
  "key15": "N7LC61aE8GKXp4p2P5mfSedUhbf23fRG6iYcfCkZa5aJ9HnZ3K4cxu32VN8u3xTkXGdVs6nmE6jYjJxEht2AGMF",
  "key16": "3W17oDWCSsMVHwcWWpCUEhzb2FfSEFvXhPaLGz1au4NvofwFJec1gP9CihELaP8R2WMrvtkUPKEAa2zaM3MULyoL",
  "key17": "5KwcHReUCB7Zi2pBrCVqzrcka4QJfX2gqZztos6QpbtTdRy6SBjebLowRStZaXiAAVKo2saDvXnMg6DhocW4Kq1L",
  "key18": "4sYUQkdV3uCoFY4c7ansoReLxhtRbjBfg6Qs87SQNGUZXaniGJj2tkkZcTu6MEQQ5aoCX9SzqW5gVpAKksL3kXqE",
  "key19": "3CeYLgvegEgCx3z3NQz128hXarQaeMSsTWYRz9SQXsW8ATD6SVP519DRQAVsfqy5uqAKCC3YUW48gteiJeQNBeG8",
  "key20": "24sJbSdcNVBF4u22B7aNorMBWkp7GGXgFMPGchqj78DG1kxbePoTFrJSjbDr9xKzbsfstXxJj7SHTfwVtKemcXvP",
  "key21": "4bieVf5zBeezf1GoD7y936G5xpXqmW9W5T8NW1yrAVDAFnyU8GR5f6r7BCNjR5SjMc9cMoLQKs3Tr4qp5yhR2oYs",
  "key22": "5BBfGmNuiMxBhUhscJbJK9PiEPy4N2h2HDp2H4VWkDWvktxwXXkmwTSKVfSg6gG4Z4AwFRk6U5T6DabuHF7NTouD",
  "key23": "BK3NCeU57jVMkbenjimYUSLmzqWLHebMfNRbcFDTgJcFSjEVGjFWBDwDq1X6UmHZcZiBze2SpkS2QTDJtAqxVWf",
  "key24": "3e6xHbpNbmy1TPfigfFnWwAizYCT4MJSHVuyJAv7M9jjSA4XBU3HSS1HQ2Ui5BfiPGfF2X2MJycnq4n2cvKWrygS",
  "key25": "3zVDsPe17qRvr6582sT7tZrQSkYsKK5DP83e3SuArNqrut9j8QmdCyKT9TG3j4jRXYLpjGMCGuBtrAo87yBRwfGA",
  "key26": "3jyMK53xuJHpLFYyTaoX9xmjBM8PJh969ZzzpT3hvMctJWxByKxbFd9dwV4QuxDQa3SjLvw5txNZwaWfCV7cD13h",
  "key27": "5PJB6qd2edpsKKZidEMmQebKe1AotJqmR873ewdwQQr17cjh3XZkoWddSVrAXCUxLJBmw5v9dmdL91LpAHLWcTpz",
  "key28": "37QT6C7z9QRtA2RjGKcVSaWFAoirSwKG8EvvSbzcLKZUr4tHkkGvax1b86UDkQuPeic4xtPRWRRRMrvrXvHrmsNy",
  "key29": "QqpWKJjyj2bWjeJRPwa1pGSz1yN9kWWagNLTWJ85fXnYcQKQmvFoFGrwgGaaZTyX81U1DwyhoEfiPpCdTQFBDtY",
  "key30": "2L9VMEPuxH2NgD7zvb3vNX5LR39FoxyrZ1T1aHk19wRkef6PB5UK95KkG4rNBwoHDK9EHr9zoPv1dLFrnBk2ArhA",
  "key31": "4bnnViEaC6GpMNHvwAFTn87mAT35Ps7p4nEBLrdXHirmVgaxXrjuPmhHXd9SomyvZwQ5BpSJT3aaMEaBbKyZCj1A",
  "key32": "335jxcAWRDUJugMGki17cQN2N3SNMcDhJXFxwXV5KwCLHTq6Y2JLXg4vfFypATYj85JpvX7nPdJQMNnfAUcNXLQG",
  "key33": "2Z6RqfwooRm3psjyy1HUCQFW1Wa7ZUUWxjjwoMaYLtwFuo4hJEKSrBM2Q1Ehm97R77p4VC2yhaerRBcnkbGrEnft",
  "key34": "5kExQCAc4r4i1BvzeUfTLVBBvS98hicHFYiEjcCS6mbPXQHingijt5moFa4nb3325dPYLpDdegfC7RBxC5K1H5Ve",
  "key35": "3sE8FRauEjMZZ8ANCyB1C9R66GcTWzkauHrDpAuAg1CvFAg8qNEDBjWSBs3cjzd7KkNwJb4GdBNUEMc2dy2Z8sLv"
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
