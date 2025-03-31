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
    "4u1UMb4cFAMrCHVKzNw47jzWosmPdYXYjct6CoRvztgMp4bnxgHrjEW1gyVoSTRj6evM76JahXbsn1udVjPcnyxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H4b2Eyrh5bcdnWVHJQW4e8VEc4UvdKhbMexCGfE28qDUHVZ4gXk2Hs8ks1sPNpmcCWHUU4zzSwPRrzQmBhznnVb",
  "key1": "56w5UiTZZ3rnJvMEE1bxA9WSLye3M2LNJN7NGaUXLKaGKnPHxpLHUM6nhL2fzk8CHibct3GSdYmpbCLacFPLQjLx",
  "key2": "tLwupSyM8pJ6tNKaWY2Qfct1ftSJVaRCZe1qHqKwWhxiQh7JHigmFhrDGvJEKazoguKNhk8Y89qho62Ep4GAWAv",
  "key3": "2zC87JWp2uvxdPJG7J9aTp2JeJfsC2hV12RnM3U6ABVrPi2DUnYjUtyoNMwrqYTFJcgg2B8c6MUZDDdDKPNPbc3Q",
  "key4": "4CfLrkabkxHyWdzs66xA9rn3YRNEEJ9qyQxsCPhVbWAFU3n9Hb57zUsyiuc9xohquE824f7HyMtKFFqPpWGGgUJj",
  "key5": "3Fmd4Xw3YnctP1yksANsxriLearfeWFnGxvsyZ8xpYgtcHojxyik3LeHY7RGFvYvLp9LwUAFPm3TGZSu53qaU3UG",
  "key6": "52TAjLLAY7qpWFbenLmNTaZ7VRsjDaRueKaEDBkztjjSkNxQuW3dLt9nxB2yvQuLeYdSSstEpB6KAo8vfbGzs2qw",
  "key7": "3Rby6qvivHGF7DdLzH9aTtmT7P8kBGfrYPLaPARCmb1PZfiTNcbB73QbtCWk1LbXgmQwhNG4BHAHN4itTxc6vi4A",
  "key8": "49ToE4khR2T9pB3kEKHrtdHWjgtTozZxPaCgWYszWpSYGgQzNEXM8EJCT8b9cPxsAZ2V5h92T8esZdmJbNJUtqSD",
  "key9": "9UCVLP1DMLWNxniYEQANchnq1pvDaVADan7H4LFVfTrkX8w7kXvzrQAXZX6rBmEqzcV4J9Bmcq3TeTQ8KuouhqB",
  "key10": "3TcsHoiydiiwvcgEgjtpVsSfnnApG9nRgnVQrnL9kackUx641KUkgScduHssUxmYFFnMDUwqdr7YbvUzxbgj2GAP",
  "key11": "5wTKMGqgaAGF2KoRSzvXqDpS6LdMxJGnrvTcgkVRYsh3EuAtLsg2TGpLjtoVMV8LVKPpaSryPXdZmQWq5iUz9oN",
  "key12": "32LgvueidDpoixvYoYwKvDFEMzVkByzjBtxR8ZsSNmzQHZs3gdATRFvQ8YuYK3cb3NmSsffMppvbGyiP2ebDNAPJ",
  "key13": "43ybxJsL2PbdNwJJ37pQgEBbanyxhMcv94rK6LTPWwrpfEtdJachKVJtfQJTZ7LW2ta1uPCbrTRtKT1S4Z9Ly42i",
  "key14": "4bgfTZfCZpDSEuPZvrtYpLKaUbVcAd3Tma1Qh6mfVbJfW1s1b3zenfosFd1PunTEw6WffX5JnoZaQ3qhVCvcGRDn",
  "key15": "5sfvSmeFuGog3SzCPx6QNkphA3tAFxKjzL9QiNkXw1tVww96XSbqscjzUcoSxFJrioXMiaRmarsJEtfpi2hweFFe",
  "key16": "2D9MdTrL9Y4w98bMv6FZUpJfWhHYHkpjHFHMi4eAwpuHCKCLTotbLJbFqM8CMASQx2DDstLzrXVS321475iUPm11",
  "key17": "36TSp38fVFhiAnfhc65u43hJwxgJEqfUPgsN9cjNEvCb5ujBLAWwmHjWgTu5whrfQhYwFuHt2zKma8xC934zEh89",
  "key18": "4raLLxzRNYzLjJfy23bEtNCTP6ewwXDS8F71QwjPsjfcq2aXbh6aETRcqa11V5kLkiNTbcAg4gRoPSu4Z2ricXPV",
  "key19": "2dRCeuNCgfxg89yk8FyHuJjKV6XANk8QBL3efniKw4BVbpp6JisNSRA8ZCvJMME5wG8HMJNEK1Zggcw1oLcAUPxE",
  "key20": "4wVJ95aK3QGffTEnfKEpck6GGPoof9D75KmUr8ATrCxXQAMJGuS1KCw9CKnNqNLCPXkCCX4bdTTtqzcRvjqkodtJ",
  "key21": "5FxK2oco9ej6syNhGPyQWoTFChqk4dSVLA6P7sYycazeuGx2zFManEE1WEsdMqjQhHJU6rCTkX73Ldt5GGtjsuy7",
  "key22": "35mzLnDKVh3FiNtDnQ5BaRZyASSFiDNmZesAjoG7TRFqZkpbQf66p2ePvZETw6wWQ2k4a7fejyMEjMeTNGVKmTqJ",
  "key23": "2bQQwAXvaAa1aLQD3cwaW9M51isYdPttvSG6cppXGqDMTcQyXNndm3b5zyE2WyTSyEk41iMq9qed5Nvd5KW5NoJ2",
  "key24": "3MQFR5A95yPw2U9vc3X4TyfTL96V7BkAXLsz1BHJgv4mjuzzf46DfGVMYVySchR5c4VBxasuoeP4g8oZQY3x5CC5",
  "key25": "4avwQBLLT6Hskh5XopxsePMDKv4moksHqmcRtU5yCg38PCtVa8vA8Xros3KPbuZCzWJRCSN99GDqcYeRQDXHFt67",
  "key26": "2iJz91QN8KfxXm8pWjCDBHjY34QQYCUxFVVCpP8qWY2LL3jtX4VtbPRQrPnXum1EQMY6tGv4wDkutNrDLFHRf5mZ",
  "key27": "T2ffkPbsf7SRi4z6Q5e9KpRBiRTCVL1hQYisHP3yxwfu7HEVZLE8dZ6Su9vR2LnFV3eKdKNrDPf2FEEuxCWB5cg",
  "key28": "M2mrByBUQmzsQTyfpxYLRPiStyeqH6N29UXZLxbE8kRstUXhbaxy1nade69kegbUfC9cCanbWzuaDqiq7aJvQYa",
  "key29": "J1bNbySZSjuHHNm3pk2pY2Wj27zgDB3ES5AfFAYvkc7MqQ36GxSjYkXLmUbszykzUJ5iXU3MWdGJ3mNp5MDsHpo",
  "key30": "2Gsoj7nr3YjDEiKYdJx2vBtM4eZpYVExKuM8RsLnDybFZHpyrB7Qpno38xYmHAFYcgHShB6BDEa25WSsWezKCy2E",
  "key31": "4kWFLWdtVanXbgTPSX3WMKPNnPxacfp2QH77EebMofaypkJkA5B6SMz9JTWgh1Fpkm2RxDuH8WBRWF24ZkfdxbWx",
  "key32": "2oEf9fRLeyVoYR4C7pLMNMuuC1FS9DvQHSq7KfKTkDpDVacTFc8dqrNccVRP3H7tpaMJ1Dbx3w7BDF5knc6ecb6P",
  "key33": "2EyJva4JCmN2FnLLxqPLmArDFS6CHiJfHAfu7DpLksktW3KjpvoLibipeH2MLWNUB7Ssuzm7rzfnUtiSp67824HU",
  "key34": "4KTAujpqmGDcEPYAye7a1BufWUXRX54LS3BYbMUmF2BkfeB9SJ3BG59LctPoSLrvwkc5W4hh7bGvx7xBhmomwp59",
  "key35": "3kstZnkPJTwEwpTNRwquKqL9X6thoqt67qdAQxC2u3sEkBR4WJhGAkmeBEAhWS1gg31Pb5ax39UD7ed8kYrzUYiN",
  "key36": "5dVELP2cMB8Uc1oTpmVBWtPcXH3M4isyAX5mYFk7GieNLwF9rkcnfdqjHe43z9YdweeHrcWqu3YcL1MyWnJ1Y51T",
  "key37": "CFEc12XJWn1cnCrWG5Co4HvwnzGwcgSwPaPryo9ZSoXW8KXvXmayAYzn7cAdcQCRueCSgJ5B531Au5j1gWQQRy4",
  "key38": "VbbjwVPkLvdgQ13khg5UjyD8L6cAUv7DcQkVAnyx4qcrxQCvZCDaF5bd3ybkcAH9iuGpAMWJxSzsLZFAaaESahH",
  "key39": "2bFsct9Wpp5TD41T5wUzY22fBf4nrEeYMPrrDGX2ZDpKcvGs14BrM7SHFd84pAanbn15LfVNujVnLEnpvhsmWix",
  "key40": "3nR36AxYq1KUaNLifCBYHGZAkorLrVrNjC6qCHG6Mc7NA3WUCjK3in9m5wDN2SPPE1pLrcDVBeByXzXhgpUwxj9X",
  "key41": "NizDaQPdcJg1ogdx2gbtW8yYUFRDCMnk6DscL8YRHBGt9Kadt2Kb2kTMpzJuxF3hQtKjwvvSP9iQxDgyXe6Zj2D",
  "key42": "5E79vEKmxQmGiFuu9niSztb46G15Vq8JBEM4WUbXtiZeeWeNrVX354mjU4PZ8mifTDnXvsExUtBG72TzSC136jsN",
  "key43": "5KhGK5czCiRZTAGRdhRDyraYpKoNX6DthTWRCTcNRQJBEtT99aizdLVSMUmcMqCL2yxPbFfQvnFfV9D9Yc2TRvCw",
  "key44": "58JNX7EWL1KPnmgP1urmQKKZRKHSimRR6ie77hD8nDuyRvvLDtjzo2eZCrHtJv9KSKzPjTpA5sdjVY3JjgBZjZcq",
  "key45": "55756WnQiWvnHD1JjtgRHW6umTVUaxiKkuQnaFgRuXv2RPQbZoRcxM9Pn5TEpaf2axYsF73MSv2KYCfcBWnBRkUF"
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
