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
    "4KTEoPqk5ikwzWE8jybqwRzrL1vxUPQuwcXRbPo2B3nr5iQskswUHgCC9VZwst3oPaaBv7itaTazTupqtiM46S3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JUEsircApsszHtSwdoyyiLZxd1rLwSkyovxTKJTP9TrtbRSnyY7ooSx3WZ6aT1Y63r5Pg3Q2bJVrPeRf9r54pGi",
  "key1": "yAwCUgMXiDpmUUdmkQxEnZjaAFCz1YMtkE6bUmuWH8znYQkJHuwHNbSb2VmGjcHwKxJFPCPmeouh5tWYCUx7qWi",
  "key2": "585L3iJEMisakzqoWkPw3HX49J5BhGyxwzc5ByKRToDkNP1Y7VcBCFvaXYhnv86B5S3bvonQ2evcXYPs4am9CPGR",
  "key3": "2KRtYHkTpu3ePjnmoaLshUMXPQbn8mdakZxfkk6gTeLocXSGrB7QV9whe5EbBXAsMMdTpvmfYamnz1DaFU8wUoZ9",
  "key4": "4PGQ7Fca5LV83P6LynD5ZJJkWq1YCceinN9PhzJJyd6HzYoJhjhGBB6bYNTFtM766ccURV7bKZUZ8GoUoi3ibUZV",
  "key5": "282bnEC5r2J3Neho5PWryx1714X3oVUuMEkirziWTCAfcSUNrW93nYxWZi2Y7qsEfjndfuq51egSufFY7jj8B2yH",
  "key6": "4suRSMWKnw3yguGPavjoKyoiuEgwhPC5EZ1sP4XPeiEWi6TNG3vSuoLBXdAPHvU7fM95LMZ4xbnP9Zk3TFiBGZ1E",
  "key7": "3BdDjgBphT1u91H4kNr3CdH38PQ9vwas7PmUEA53eBTwVQCVsFV6FKzPyMuQkxH1StyE9ZxQ75DMYrhqeg2sXPjk",
  "key8": "5HFrTdaGM7z95NsCYtdLDrbERHCqvNeCprPj7seFZskL5bkfjuMYymjhfCe2njKDStCKG2nxm9ix8f1dWnsPtpAd",
  "key9": "3tZxrq7u2fomFuYALcX5eS82HykBYhNvh9kejtNge4sAvMyYCg1kRy5xCT8dNoQPdz1YGvFEmsPmsTRnb5hMv4VX",
  "key10": "3FenteS6yefRJCntWbryyNVjFFVS2RxC2z4yHPuLxH37bmpbddFCQgLgwTFN5yzCgNdhQ87hYJEjiJNv4FQC9YHw",
  "key11": "4k4niaoRmzyEMQ5bk2YuW7yUFVh2qWNSpJiSgUy4jrzxRVwq87XbfAdXhyiBrYC7acL3zKLoVmqjwyUtZAYeaT7V",
  "key12": "44onhQ3V4PDjoPzkdKCRAvMGXNUyMrxY8bBPyyUwcqcrGKZH6HyANPztjMzxeYxvfjriUzzJZTDiBpd2MKqbxPph",
  "key13": "28cav1LoZzBTQPfQxzrfgJrq92iTgn7ZAN8MS6f4SBiRebG6bgr21yYnbYiqa6XSCo4JvmwSFqJVSDBsFtWtoEf7",
  "key14": "3yNeibMxLVpyWjv4CDxAG2b4xMheYttQNzxSQSw5CxgKPFhWX334YqyVtXcwGmG8nWPn23qQaun98ddd9Hr4s4Gd",
  "key15": "2xvx8yi75BUM9V1kNeurM65CgBUU6aQx1fdfVvGv43KEjaYX8gbNRX7Wvv94dmMdn2MLM67QUmaa4kqNiu4r1MAj",
  "key16": "4Lft5p5Lm9p2pXLb4nGQJ3QeCRBwxvPnTQaK4F1iaDY4aoYFzMBBKDKN915Z9E1tVuSXzFw78fDzyEhrmT3oVyGY",
  "key17": "5MrYir7maSPQDrkd6bEBmtN8Yf6mz1jruL6pwZREgEmzkfgFFwCZzgXy55eNvoAwFeB7w2pkmasBD8xaEQP47jUc",
  "key18": "5CkMQ49Myf3rmGXcPHVJ2eVr56ptNEd8bxoTdqwa1NMasnruY1TN9KgCBX9R6Ff9vNrbCgC6FYftmaVeXkZRft3J",
  "key19": "5kiH314s2DRK7eLv2BaiLdaPeoiCcdRMZjWwJAchnPyD8xWYn4yzuzxuqq3whf4NTCQNauj8kGrLwfQxuRgXUi4b",
  "key20": "aBbvnHpnNa2DqsXB5bpmQTunizcTFrBxJx2mRDnyf5kcCDqLYstWmSGNFeRbpcYCrDBjzTyzJp7hvdG8RYNtYRi",
  "key21": "2EAWQ1n89SFeZq5SpGs2SJaNEVwU4pBckBdN38913FBqsnrWU3SxXuCF7GZxWo8dMySrDZMA8TFc7xSobzmFAM51",
  "key22": "2N2XPionB4LLC9uT7aPAQrpshpQM1xuamXU4QnWtrbiwukMYzyfVpVT7UTiYjwzfV2MEzXM4JY4RPPDMtsrmoNe9",
  "key23": "24PhTX9iFDozaMWbRYoynuyd8sqrNgM3XMPh4wUt7Z1tqopHWfik4dyhhHXvBUcfpXndHpgyfaq9eKSmAEb1bPjH",
  "key24": "3JF8QbyzXomEHkGQiy7KA1QPPpQmEusWydQGrxkNA1Fr1rF8Ve2kGcDj7jqR39n5CGurDQFEYSuLdicCNDfzL9rZ",
  "key25": "4iRUqJEgqT4TEc7hmVvYRVALSDUqDfwGRF2DRhwBvpreGGLCrAnN1xcadipnspHD8vnzSETLp5nPcz624y2p3LzD",
  "key26": "dhTZ96996tafj7HQb3Eu8tjXmoawGcvq1ucU54jXg1DA8ounxhMkgDqwqX2vSGTXH8chUKQSGc5meDfLxEYkDhp",
  "key27": "3mjdgZ6oAizcdmMHtvHjLq6yB4dEbRCLDbUwkXuJ9mYLas5xhAVQcLVv1Q5oZ57zWxGqutvV2Q8yd7KjcuV91vrP",
  "key28": "4CyFz26pZVLHhSSVmyVXuCiW97hzHUQ3ueXNQiEuWxW1ts38dMFU1thCg5nXsvW2oVECcd2kREb5qxCMJNNFcPou",
  "key29": "5qqc3Tu2sf42JXWmfqbHSyiTurXjbXfW9M6nyCMTMfG2DSd5RbrBUoJV8HAF5dEccrvqnABFVnkbFH4V2RDnp1yW",
  "key30": "27VrxTwy5CBZeXN9jRW7wSPVkJaLdCtQhpL4AFYdHRbsjEiwDHzvFmCzADSZ4YweKuS8fPKoxBFJuPp8kRugLn6G",
  "key31": "38f3KHwiZXqJPT2bpT285XaCZLXe5ZyBQ9LdLPvR2PLvqWvzNZdYwvg6dtNDpE7FNMFxnE1bCWtuvUPmWMdjL8Pz",
  "key32": "42qBLycPhqEsgkE3Ry62XXvUedhj1JPy1xPoWC7EuxNA4MA4Za71UQXXDopDCW4wNRiyaPYLLRza1coz59MeSdC1",
  "key33": "54yUWYZNmLsfC2HqvpfgNFomxhw6K5qAQS6wnfUFhNn8gsDFobjs1zoQryZsGhenoV89Dx35EnWsdjZT7kUcpzjU",
  "key34": "4MjwqmJMhuZmcpZoMXiQWWDs1RsECp5AZPKsS9mfX6rMJn5gFbS9o6vJHE89aRLWgiSSoLoSd3aYy4Kqcdj6UMZd"
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
