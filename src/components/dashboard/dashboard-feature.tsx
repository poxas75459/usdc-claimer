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
    "63d2kU3YEWpEDkRcKiQMSLZthwLCfDP2TewrE6h1N6im6hrYTKtGgUoy7rpnnN9yG3XyoX2NtGdWfRUKGp3V2GWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fWCqoVKPxcbfZAqv1TehHJsAibvRnrk4wEELuoEbLr6L2jEftyZQQ8xRCzVCkuZVSvRjbfpxL5sVL471uPpeJRA",
  "key1": "59VqyKhMY1ZhC85fgbeYN8kTZ7rCb1DKeTCQd1NEvK84kL7j9DeZGZoNqSErG2uWPqFsuJ7xU4bVZZcaBwEb56hX",
  "key2": "4aBSmudKScshGV6FpPp3CkafChZFwYs7cdE6kVQwdv5EvRnATULovp4AXXKoKWfkLsVGRrYyXqhgyNWzkbvxopC3",
  "key3": "2HmUfB7F4VPnKWB3CfquYpVKNUPW2SJhHbiGpMuPkCiyi1ipCD4wqyXED3D8G5ksfoGURHjCycKje9aNVsrqh5Na",
  "key4": "RidHyNGcNmg6DAGYuszJzC7aUUN5mpTiNUkBJ5q4drEhuCxLG8g8snE2cg1PRXwM2tyt36EcaM4m5eZ8rcjHHuv",
  "key5": "4MdLouvfaWLC7P1D9c8w66ky6ETut9APWpKuPEfrzx2hwGvgBwmEpyJgoGaXknA3ZkYCbBmYtPeoVZNYbjkBXi1q",
  "key6": "5ApvF644gXNpnGyFasEHYbwmcYqiZApjs7nSSyC8irjXWQJ4p3i7hr8Y2AgeymQ85o4KKg9iKsxxaMtHquGSLY5x",
  "key7": "2AU3DaEZDLLsxX4wsLjcEtdyXsxyXReZSrwe7aLkvGzFhWJ8CUSuSXeehYZvmU4YgE6ZYfJChBCoYEoQ7WNu5LDF",
  "key8": "4kwDa8ugREVRW4mAGGz2iMa9bKGb3mczaXfJj17Gv8GwMP9HaNX4zCJ9eZXvm4K2e1vxux2G3nyWdJir2zFcHELa",
  "key9": "3X1wBE2FNsURxKxdi3nMN3d7JqPLNUR9P5P1mvCM3ZL4dN2WVEY8dUL6Q2uekzcaVRYxSQHoU6vDN8SUjT5cJEXH",
  "key10": "3JJDsWfTBoKYzeWuKBVaJjbNFPehrqcsnAdXZnZNS1Ctm3az4nPiCVMjAPc5fxooz7zSyqMbz4cVFyzWjuzPW1Cx",
  "key11": "5WAw3ry8Jr7efqLC2he7J4fgDSrwxNp3PF8QbHiFBWL4qgsBAabqU9KjRKkefUNY2hxbPRFjwJQ4uKnZiPYv9Xkf",
  "key12": "3iUhj3R6GtvkfY2JtxWcvbZGqt1j2xqE4wo4MH6R4jqCXbK1QKcNXpKYZWShbKCD71kX5hEVA3wSi6pXKANiBzdY",
  "key13": "4Pm4ohGSy6BuEregqSTgUtEsBTxPPChB4fzmwz1MiEzz8evLUt3RxGLbd876B6hhZNymq3Y9xkQHUFyofJGTnKs6",
  "key14": "iS2vMtkmUuXEB4fydNRdFKCPnALvzsCHFkbZgP7pN2mnciBpsyFn4Ks5KF6PtKybNvVFhokHwNKsCAQSzjSyZxU",
  "key15": "5ZVt263DYv7EEEVop5EJaotGWJoaK6mzDJabV6xCvH2s3UCppRM6LEyRHePD9dfRdy2Y9cWmG1QJRM3dnkG99Zny",
  "key16": "2rbMfUFgdtgwUxxjSRjdXnQkygWCwiEfkE87cDK7JzNhkvK5FcEZzaJYEKkJr2xhSLGw7JxNFGn6xMbRWubrxj5x",
  "key17": "3XWEh1Q1MpZXU9XuRU1zLMSXo3XzoKVN85ocksY6ibZX928uo7yX3NZCCVppnrLyRp9cYkqQJ2tWSa5L5aejrXkh",
  "key18": "4HeY6LKmEuvn8pAXN2NSxdzM61HkaSpodiY3az58YsZz69xLLPtLgViYJ1VFzgzqq7FbZY3pEExdwodfMTxJcmfb",
  "key19": "5543qiLWA6mtZYoyRwXCCWufB7rcMHGdPjLrad6mYt7GCQh4o6cAFrq5jLGbH3xnmjyHhmVrX135Wrv7Tiah9Ui6",
  "key20": "43PaEZGxzfNyXj9QD2qcqmwcxswQRwV3GJpYRbJ8DLWraecwCY8ANqmBqoZYMin8zzCUUzsPpMJzkUVS1JH7LEBk",
  "key21": "5g5XesqujNZwM7CSF7PHPj7j2epssAQuKtH7h352TrWXwrPiNzZ6tztC8yRtLcUUFqNVDR8JRoB8Pyi5hux9WxdD",
  "key22": "5bjEPxzPhBTYjigqQdZ4ScZLWNMK17HNu38uuGtfdX9sSP4izJ3ZVNi3u3FXfYUwNhwLV4hpf9HjbFmA1nCKYodm",
  "key23": "UTrh1d9DkTygoW5FV2jrkGQmnxwaVQDRCoAptrcebkQVi4iUsregK29Pmd3yf2qBb92DfhGwUuUYsb57JRxYbf7",
  "key24": "4fnX1S6noRupifK2E8t2z3PkpqydUw1Z6AptSxCMSnfsANmYESEWEZwd378v1j75k6N7yJE77nQeMMoe5PH3389q",
  "key25": "2RiHb22TH2jzYGSYAoK2gf4obXLiXRpnv8guHKSDnf6rt2EbN1eKTtUx9UqbAT1YM1QGNUYoU1w65wrgKaehQvc4",
  "key26": "2n9mGPzjBty82s3Xe7gBHncWzoomSRFkz4wf9HsyrbvBinZE83sTN6xWuGnKNSvAxT6PFi9J2ba1pj8XdgHCnNM4",
  "key27": "ThXzgTetsSGPoiFFyKcHUz9CoBCwG6SWMnCqQxg6aXZW5QxptdUHKRPbNHNXg929XP1r6VwJXTDbS3w5Ms9MZR7",
  "key28": "5LPPe77fw5m4wcHCxyRvdKbyz5XvoJviJSgdxG3iyPFqQ2bRHH1uxfPTEPsagrUVVAo2qU2T6E94p9aGf7xZwc68",
  "key29": "SygPEiVfbCq3SLAc9sx6XcQhe3sCVHhY3zVGDzzGckVmwntXahZXHg4Z4r4NRxwRR2vzFZBt6Bh6Ha2iTzoNPrQ",
  "key30": "31gK2dQXtFyiCdL2WuTPkm59ozfkK9xwn79r996hQmAqyhVKrUmNvYYH3hCsep71EQL2CapryXzpupmL3zBC96Px",
  "key31": "3nRfnmceRdyPvxaR3xxQcrt5GRczRmdQojirGC4zZmC5DDWd5Jtez8Jxp2GC5YH77WhE2bUSDhK1e8VxaCKRqSx4",
  "key32": "5ZJCUhnXdGsL1ah9B5adfSVSNURcebSivJdjqASF56SUefQsDcqXsC46q9efg7cPWxf9bBQjcsr4ZyZCb6GbuEA1",
  "key33": "4CdQAHwmJSCS3AMMKFwdFH67gwgtUpkM9U9rGRLAwVPfbHmyxQg3DLGcpJmvkjqNwRkg4xbmcr38QjYTjriYuRao",
  "key34": "33NuxYmyc3ggpma71MMMUigaDwMwJjL5ba7hhKwq9D6vkJ7ydz8dvqLAVesHXXQKVQXmjGg9SseG86LDR8mfsiMv"
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
