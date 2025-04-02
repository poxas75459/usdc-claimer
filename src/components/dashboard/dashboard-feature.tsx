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
    "4WPzxPkLko3qqkufCG76v1wJETq5njKbFeDyNqPMFSSgdWkgmRJXgXrTwckXGGdtht7YjqmLgn7j2DdYysBR6ESv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fa6faUcCqbDnkybdwMD5WpP61DPhF1rgv42EFUEzZLZtMjHkCnohXdn1kcjQmh4eNm9SB6Twf2gZbfm7SR5qeZA",
  "key1": "3YGxnbPtDEdNFManTaZrcjpHD2TtTZcfHJyviUzwHKkjdaFn7xuJVvMwYNY8n4Xs194oUkGjko5SRXtyqsQvp8xV",
  "key2": "2xLTZhyPFnFrFBkrSdvQvkE2jhGkucMpQmfLQL3xPi5bNTaWPe4ys6DjcSywQJoCdhEb4zq73aUfQJj2ZpgBzc1o",
  "key3": "3uydWPxpJ7WD7vMConkqSfCeTzxuk77LT8Kpax6AR9aE7F3BfcBTG9zemhAFzxP9GPhjQsTPbQbpqCCzzvFsCXJE",
  "key4": "2PbRX3Dcu7114A3vGBPephVZjDVXz8DCmi3p3nSmy8jN7sAMA8gJ9ZirNAk1YjAXW7jQRFtv6E5THvRBPJTjq1bU",
  "key5": "ymfQvB3EsaYcbQAXGtL8XgB23xYRy6mnafgpnVgvzFbmm3EVed8rHEBwN6kFx5RfPRnXDuk4p3ZNnJS6QTDftpr",
  "key6": "66g5CEsheLjtfEnDvogpoQPQRxwwTNBfDnoB61oLSZrDzpf3mCZ8Phk8UFHmzW2swRcfvJisYbDWNirvuTrLpW8y",
  "key7": "35rCpFDXpEp5fDpFrt5HZPpgkjxZrscqfJ9Jwm2gCNyZRhGGZtc4HNNZZXe1KFygDUYZDPKiq2nsMPrcAKNKRcYE",
  "key8": "3PCKTYGYSCrxao936s2L7AJGfLcChMiTKjpgKPtp8HfGZNmGUfT2aNNdpqpghqFFfRLN8SLp4rX6tKdvQKjzB5sH",
  "key9": "rTCmNPBWNWaZEJmWfeWsYUbGTXCNudRsPnk7UU83MZJXayhYQXfaVhNH8ieEdbJNkh3Mf7SpNA5DuprvyrDxs7z",
  "key10": "4Meynst5NHy2haJMd7Jma8nX3DzM6LKGdbZaSMaTahaEMqFgoY6ZK5HiL6ffR2S5eKn88sZs8w5qfKdufUKxtU5v",
  "key11": "ZpL1eKcLvxDDo4X8r85jE9zEKzbkaAViBGoxwxjEShVckHtei8tmLniJTxc9jbZGWqMrVtftxXH4YEpS47EC2gu",
  "key12": "zraK3eeUvTgCvs5YJC18UNPbrrp85ypvGLZTmKzanSWQJJwiqkRzTTuMvhYCEiPubMHLayDN9NUpo9yXJAPkrqN",
  "key13": "4bFd7dMRMNX5gmZzWHdZi7ymiQGHoTvN46qqqfaaSg23SVdZKsYVoHtreArm6Uu4Fmh9w6hWhKW5KCWBtUqtdAeM",
  "key14": "4rhoCcFYJ8v6KYKLvdahSKBWgo4xhVqMmgyigUvKgUFNVwVcJw7FDcueh556sLtJhT8JknipPBQ29F6L6KHby6Pz",
  "key15": "4PCMn9313pj1WTmSDdj9kMqJDYtBPkRoX43bpqG5L8fomo6BuaEvauerLL5fnfGLdKbeQFavrDNY4ugoAvo7nYxc",
  "key16": "5f9BDnvz78p6o7m6Tbehvp55n8XaZs4qQuoHCrDNonXFTTFT4CVCko7H63zNKovsVauVsPi6a51oiK5RjLFvaDY8",
  "key17": "2BtyNexWPMp1kF3xeQdoj37NZL2vCE8jpr4CqcRoZR6cYrSWL7gBUTSRgN9rhgFoMtU1crfmJAxmTSgRaUFNQtTk",
  "key18": "XJQYWcVneV1Gq8yJQz3QwYKPrnrWmZK7ixXtQVC33agHDFMCwfmp6DFqDbmcvKGssBATABYVSfVHGZJjNTuUktD",
  "key19": "3iB3uUtrmGs5tKs3v9NcrkYPR3oBScZND84ZPzrhcuhUsARYEtom5u2GqWmJaVdmmwtYPib8b9Z64fxmCsbu9mGW",
  "key20": "2ZeStcoh5FLtdbBDfV3KX8APNEP6QzWUD6cFYQA6gHcPLQhYjiMRvvYHVBnhFxAtrEJBWeE9wtXWp2mJQKzJkQPF",
  "key21": "3XggxRSgh28g3Hs7D5cqBCFTU4S4y9EbMDZvo1izrSAWqqiKttoMdFRm7JpHa14pEKwu7fVxxJpAjL4GnK3MtxgR",
  "key22": "25UPRxwXKGagwcQ3231Wo3MrRqtSJP5fYPt5cdbBwFMJj3qNKKRe9zsZFXhVj6WhHR5e8iHCjdGKuX9az9PhNoaH",
  "key23": "5s5KGrMyAv9iaw3SNPW2iZAhVHVxLTggpLkzSLzQ9voMeVuHDNPPXAeD7fticrwWSUW3AoHjUJ5J3jh7E4vWKRFk",
  "key24": "HHWGgLgXdP27RCVDUPqJhU5VVebDuW9Pt6bLDv1215wW2HtRK5TygVdMrEavmPYmzYVJDt1ASbeswCC47qdZFRh",
  "key25": "3Ln989zkr4jTwLEHyMPw1XAkyVvGa7JUcWg5ShVKBHKkh3auwrJ4gApa5trth2AbhbDQd5jodDvQgyYdmjyK8wuf",
  "key26": "4dfQ3kkyp7dtsZHGHjNatXEK1sJxaed9M1pDkBU9gacBjs4rhPvxkTFk4CwzhdKNZ68QD4y7bh8LXjbUnFHRxerx",
  "key27": "5YXLsLUXj85DicZ9Wvi4hM3VPTSdfJ5v4cqb3pvTHwUEcmYJRQRjZVSAgj75i7o4QwGcMwU6X9yqECMYAriuhCFj",
  "key28": "54fGr5bvR4omkkUFqTWJ32Rc8QJC1aa4eDqxs4rFYBQMhPCsfrgB1UysyEw1E4Uw67bfyUN1g5jCXWSrTSyPrFxM",
  "key29": "5Bw6jyVu793ZykRHZb3RDh9yMcNe6Vp8zpJtAZ6PCNq7UdKQgayHYVJ7yAvMxrsxsNSrbAoKbmNkzsdZuB1jyxvX",
  "key30": "dp6LU4bcdC16R4LSyNqStymCYBt58A3aVhF9ovpGrBW5m3tcHpSj3S983bXneau6XbCWFfztZdzRUj2yPwFF5Et",
  "key31": "4TTGLvTGAmF5C9XZu4UZjSdrryfcQBgEeYXuPAut5XxxnRPGTcsm8iRuEHvCJiV2ewudwsTbvAW1FWHZM1WwhL9C",
  "key32": "4kJDGra4qo8xYjRW3gYUast6Wm9QRhc6nJL4oY8dZS8hYpFc9BM6GwPB7uhBDUj9KECm59jLp15MmB6ibizh8gtw",
  "key33": "55FDKuQtQsfUuydKqTTddrqxoYrN5pALosdZa1LTAzBUSdnXrcn2UfjmVuBoxmn4J6JVvGaNKbDb2DiLXM3FgVAG",
  "key34": "3gfpiKE8bNBbXVMHqMxXwCLAK9WWN5gXXCeS3zA3qnufhkvupNQDXVERiHzMyBE7NP1kN9htMAHuSoMPbg6yYfSv",
  "key35": "4UFZCyrAVHZFRBrWpR2USF8UPV7qLdDNiNya3U4EPUwTWifHtBMtjiaHZEt8RepgiNK3m8EY2RZ2eN113Rai4pU9",
  "key36": "2fAVL9FG1eU3YA1cQAGEma2iDFKFh7hAKuUDpeStYnHK5e7gBLhxKiWVWEnUtzdGWkTktYaDj3nATDBgwtPcuCWD",
  "key37": "56E2dr8xey2z2kDMVbAvGQzMi9wMZ6YogMnbrZjbVSvJc6Cxg4yjseVv8nxKitvuU22vYXyevTJq2f1Ecyq8cWGd",
  "key38": "5eiafUbatJHJnYzRHg7rgr2zprvNsQbKnEqRxKaFQiD7iEPZFuQr6qt4aS8Uj3Kk4S5WEF6YjTjzrA7rDiHL2yH",
  "key39": "5kAh9jPNPsjhLuiMeHRym2qVtyUR2tKHph1dzf9RPq5chyvCDUCzBZi2zHZ2iR1E3AWcp9kccobeY9yAki6ZTxPG",
  "key40": "4BjvabgxSXhnxkeBdcyNFi9SZLWAQ3ikdpF3AXvUMtu2MUJimbfq5usuydGiM6pxpHs77WosksQLnbEisHsDcQVR",
  "key41": "5jARNW91qFUdVAgEM1YRrn5Pn8wMqoFBVTxjA52H17zVDp6wTXqsoB9mQFiyGCmYkB4Vw9bVYvkwcSecMVAaXFuF",
  "key42": "4Nwr8BgNRHQgfdMw3mYgGceFE2y7a2PuhEK2wWv8tjWyTDgKGGyWFdNV2UtNULiTh2a8gcJJyuM1T7A1wJrFmquH",
  "key43": "5R1NWbbf3jLdcXUQbhgZKvgUng8b2eVXmHcPzrx7WmwnK13aEexnyAKo8nzVfZPBFWi7v5jcGCbxszTMTwebkroT",
  "key44": "36cSbzqGT8Bmf1YEPhSPEcvdYM7EBpJGYeMubeREEndTv2JjLX6DPi9VREuCzBqwgHR4yEXXqkaj3RwMEusW5AnN",
  "key45": "3GwGJd2rs2jcvqCVcsbcVjeGFCPxGZThT2QxjKA6u5Uge7DaKzVL9by4eGRHXVLZekTe2aVCoZJJZFjtJZmoB9x9"
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
