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
    "48kginX3MmXHZkLyUSBXfYHuer5YkqY2KSHTrJYvBnGtqQCATvsRNQoGh4s6fZPvgdZwCT69cvUaePJoPR9fhvWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3svKmh4E41krxNGgUZ2TdsLabyrMGCZ1RddDQqFKSdviL7XXgCVecQePimKTKbRPhSjdGwbg1rZGMpMwUE2gNCXa",
  "key1": "bkEQnPK1Vf5ikfWXgrVxdtP3RbHTpL8vagKmJ8TG5mFK2uBtDH4cbfCzziMyc1h8SsvcrqBndhMKhbga6QBYyKz",
  "key2": "3QQ3Sv6Q1y7qerELqkzLiH7o79dBmZ8ARgCaZC97Pu2yUvC1m8ybkzffTeSSyHJU3kAx4xiozQXU1BAyVg9o5P6p",
  "key3": "53safFGspeikVuPTsmLnwpajSYjZt5CfYUnX6U2s9gG6Yc4SQqKqpnktp1pf9LLeNnr2LPXM12cP7A9H5BSsp5Tr",
  "key4": "4P6z9u4NJo4kxSCysPwoVv3KF6qtttnER6v2sCrBqqrcVWSYnaovEZPeuUqhHRnY6bhgtaAQpJmaMArMhzmPNLSQ",
  "key5": "3787Y5Z56hXf6t6ZCf6hG6jjSHbFusEjMY2GFxLFb87GFUbsZ8Yx9X49DMNoLJGxgKATb9CmPpmHwUY2RjfdgwGZ",
  "key6": "4yESuidmVxS3K814ugWwPrMwELH2EYjrtA9rUrkxNd2GY1DiBRcEHues4nxwNnjn6jcqQjhdgQhZnK66xdY8Spcn",
  "key7": "5owVssHCsJpZwF7P7mpesxYQFkTokE98eQztWiMufjmHHkGpy2FiruJbESoQrYv4j4yNCHfebR9yskxYBma57A5Z",
  "key8": "2Fgcy8G7ysuHwyAwND8XZXshqeYhprQ6QjWzRGUNUubUzgK1m23cJK8YewGRdEFkKTLxzWkhcqTXXS8wTVHjCGkK",
  "key9": "2ZEiTaPuYHyfzPNWLFwA4LM2ypE6LAoormV5JRedxxXTRt5hts6iJ15ojkaD5uXc534DVKmNxtXMJ2M1UxSvkkzc",
  "key10": "4HXQsY2jiTTbdp1kf9fTc6V3wSkFaRYXSZdR2TftodouiAshJBafHcNA1mahz3QEwFauphmfXnqXGCsdDVxRMeQ7",
  "key11": "4XFtcJAaqyVJYAt6Y5UcV34ptB3GYJAQYppwkJrskibbKbFXz63eDwydwyLjduE4v38vQfnZzf3k8fimqojMGyJy",
  "key12": "3bkzJv1CS9fAswDq99Gmsrsq2nK8ydEPbLB4CjBTBAw3PUD8Ea9YwC5fXzNnLSg96YET6hrEop8ziwNhcC5tPmqb",
  "key13": "5RBPenBoNjmu5FUukHGUcpMotoWJcRT8bimaE3gSDgiEMyaQJBtSjzVZzUfj3f3XCzuiPhybPEygHVbT7JMH1PQD",
  "key14": "4CUnBZ7RDfGfQGXfGWUVejQuwa2CJZEFX2g8fLudL65NtFMuwrUFfpE6V4jRxNUDH5x9NLZaqAm1VWRU121Gq63g",
  "key15": "4RDYwnspkwhcn3cbP2nR1WSqRSw9GcY9zbvQwS7MCxv47vHC98JiM5hVspGrtfU6UhdY74srJQudycCueh1vTYTE",
  "key16": "5Ci8gb2QBEuYH9ERg8VDH55J87bE7rCHoNCtT3AJsvvbSk85mtPQujPUgDczrA8MfBNU7AW56yqwMrjuC3zaViSQ",
  "key17": "BWtkRgaWJbjQUptBSEisjjeVsYNLw2LcGSUAYxzjaZDM2vezJuSrJ4S4GbmrTGE9gnFptP8ieAJH7YHSsLKAWPN",
  "key18": "3anGBcnAaZ9ka5kuWkq9ivCVSuxNBVRk7qL1Qt2UmigmJ63R7hKufCKYFBNZiXZ8Po5G8VpvrZSJBs4KD8yhdCjP",
  "key19": "3TwNej9Ttwydyc2FytJ6NqSieNMNmtoHqbknbTL4LoYKJ3uheDEXZuVXmom2uhuY8iUpTYvbKroH56vRK4oJCFpK",
  "key20": "3ARemaJE4psU7ygamn8EtoiZ1G7kXLT1oFLYxyoSM1PoBhsUTD3m5RTKm1BVWDnbjKdzuWPvcAsN8ALgztAKjbEJ",
  "key21": "47naBj1PbrJgoNRhT9Q3CBQotq5iwT69KrUPqtQGWqKyp8SuasdCwbFFfT6QWTGxojqBpLv5K9hDG3myvieJEcmR",
  "key22": "5YcB5FTqBs7DbQuudkoYEjNycBu4cARDkp5VcC6kzQD9rdxk2BaS3tE1nsJRhgRXyQJKnKGGayjoCNVLMa7EdBpM",
  "key23": "JxxAAnzV6sC2gJAH6jM7hWMKrGvEtT2Zpnwbn4Qp3k8etiQPudNvvcNdA9rQSLabuMBeuSQh7acNX5DBTqxCgwf",
  "key24": "3rcLKiUyVcPfVLKP31PKr9yCaCSgiwyYVyDHyZUHSSVCenmhFBhUA2F2MEyWBmA5b6FLtKaUWGdwzwM8dhL1x2kA",
  "key25": "2kkLsWf9pUiHc81LpWafMMN5gk7pnRd1j3jhsZkWyfUi6nGGZ54WzPQZF3uLxEBidKjnwNru71GXQzJCxLiiGuC3",
  "key26": "F5uxopXLuoMrbwaTV1BSJzmrDkis7v5yEx7VPRaThUzc8CzSMbiZbq9ShwDWU2TKCJU6KR6SHJrKVKMLYf3ehCW",
  "key27": "3HpEpTLNse7y9PRcfrMXyJMFeSs9txGyRTPhB3b3nS8wvbfbVh9H39EYBn4nND7TSRTmEw34KQBg7Uk8TbCBtU6C",
  "key28": "4MMZJBnkEcPGxyfFsMM966o2TsskYiXEvxL7M1qK8r3WTdMXX5gr1AhSALBsrSVzzoJDYe2AFoA4PuDmaGZYDvLr",
  "key29": "4Va938XUpdNHGnKjkR8Mom3Z31BKha121KYYVixyvdPqkksMrkErjdnH7wcanhUjHqm1nWS3ahWNJFsJgdRWkSkF",
  "key30": "3wj3UcuGNGu48HrNFL2ip2v9nucXVqM7kbsBbncw5sfimNjY7DN7qF3abvgvsteeRdiUpuHtd6NLiaqiJijCvUtW",
  "key31": "sstmajBYAytp1RGi62UkSwivBtcAuhEcM8jgNhQptR9WayaYY9NnWtoi1NMAFAL1bm1GUzdbkLKuFshhfaAUP2E",
  "key32": "2XCLaTpyGYgukx47m3cU7z7HWRqHwEdAYWQMwAWHvh1AExWWGFojUg27JVxaGJszGxdtoEKguYwkkbqq2ncUZv2Z",
  "key33": "5PhAHZ43g2EWmZJpuo4ejJRrChyMh1SDDXZRzmLEmy3fWqqUPZDjJdx4eFLnFwhRPSukgMKYQ62sPzfChodzLWp1",
  "key34": "26C32Cov9TsyC7a16wRhW1iCJQs7n2FghzBdGCTfc1dyKYv1DqqZF7ydK3NrsJsYzHnuuRaVnViVo5G7YpXBQQqU",
  "key35": "5AJ41VatX3YZ3TPC2FrbsM9hEPE6vtDhi7w2K8dQD6DTn3KihtRymfUf5bTmsqdXtUms27uMRKmPJktZPMaVo7Ve",
  "key36": "2VrCkU8yiBfkh4BAeAygYsDD3H9zwK7LjbAQNyE9dZSrESAFKjt9BpZcz22aYwXkVv9uHR3PSkpWFbd8uNcpq1C"
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
