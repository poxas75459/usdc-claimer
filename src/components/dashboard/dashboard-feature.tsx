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
    "5msHqu7s1EaXeVSmhnsuHmKVqTE2UE2mWMvMv94ATkUaeuUdQt2URzqBAAyNRuTYLn8D4STFujhw84ZXu65kV5kR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yJe8fpoJQUy2hhZh5hjHTJeaKnLpG5juTCQjZVwiQUDPMLuQj19tzuqtHjrHAQnKZig2GjykKfTbH6AEWHWtsVX",
  "key1": "5m6yy3vWCZR7XXNNpThaQnpSNhN227VTaHLWpHBSztHX71CfbqrnJMJDVf8z94aqiSuPmPAL2Av4nfdg7epKHr1h",
  "key2": "3k1K8qZvnQXvPN6quHWn1Yo4A9reJyEWFLK6Gvms4aB9ya8s7tXbpS7uZYzgfD6E6B9oEqaDJAUBLh9sKaVazLZA",
  "key3": "66zTaRAo3Pf8GPs3mxUhZjM4yCUPUhvCF8r6wJZ2y63cuQCzWu23GfRE24Ba99WhDVDyyo3ZXhWm9UGPf9256sxE",
  "key4": "E2sopfpwsrTSfqRkbs6ndyeukGPdhJUTPdXcDjv4eWYDZBcdKFzugkdnqMKgpTmK8nmvVFVu4KpQbag8fjZXBTZ",
  "key5": "2RJYQktP38yYbnGSDty33LYWqx4aPzJtmouP1oCGSdsWjx4iHnmAqrna3HbQa4GR7QBoe1k3qiDgQMpcvxB6aWZc",
  "key6": "5qYiNpHE1UywKfTomtoy1r94QXnCeusP68EmJeAwd1DrSUjwMmBb2ehxcSo5ZbRzXUPUVJ1q3spyqMdzhr9crxTc",
  "key7": "4EAC4SRNN31t6UMZFDfP2dZbBAwNA6yrcCDn79pqjjst75Ji5AoHvyUfhfjAZ4evQ8PvgJgVCqguCZvHdK16whR2",
  "key8": "4XyhWjF8Pu1ijiNjNvvKLgigBs2iwifriK7mBhK6JF3DiwHUyPBM65hryL8oM2q2pEus3YMwB5Vv86T5owZNyH58",
  "key9": "3eARLgohstzDLVFk6LWfR4tZzrbu5STN4ARS4DmXucZyC4RfrjYphF5swkJgJLZQP4nBJnW5pFvDezSoh6JZLaV3",
  "key10": "478LCFgS9LdM7rQHCr4uFbj77Ug7uQZor1NRiWVBN5ACb3psN34ZFXTKbshJjERwGqdnbNgMihcjVS2nMFVtgFDm",
  "key11": "3HhZtmYgGpUEeEgBQDfS1wANjLGoCWgmizbuYDJTtzfP5bZBHCgFkokZG8KyKXzEgHTuYheVc4dHzJCwiw5Xkb3M",
  "key12": "2Xrx4qmoDxmaHpjWeUcorKiPQg6gFbT8QRHUo9artGLruwk6yne5KPgYnAJY4nXzciwfhBvTYT9KF4KXKnc8HKc6",
  "key13": "5eFzdb1UCedoBKv9Z67MKcwysTRGM38rsccdrCwToiLuV55Rz4qgGaATp9paQqPUPwEA17NqiVKSEArf6kz5inLK",
  "key14": "436icZ28jW5isqZYTZArtiPkaMM7Z2RgZgDBJTRL4nNtsv33veivVe8GGX8qDr1jp3rPbuwwMtvA7V6HjpFH2AMt",
  "key15": "4ppseMkZ3hjfJiZfWDorJnagwy6V9ETD2DiNuDZGwYcxDVwvViK27VSBAWbg6gMDFLhoe2BfLvqx3a9tkBQTtdLp",
  "key16": "54NnANt4gjmz4yKr44bucJJ5MXUTr1RGZmLQ1A69NiGSokJjyLrFHiXL4BU14hgbZabVrhqCeTV3t15wL4sWYuZX",
  "key17": "384L4Gs3vAZnP4QfBPBRDVj6EibLYuVCgUqJ3irjniX1yvpQbW2XLtMqSWK9ndpw6QmVmvqwpTkkF98vRj3Lycti",
  "key18": "5vS2SKuUVxsZ8E7kxRh8jZAckhLqeF7mNMs9yLARPampDx2Gh7UzBGS8tYUzX3e7TFL7AkhgtA1rRri6atGAC6TK",
  "key19": "42FQFYd8JEWbTzYJepjuVdEHz8qt3Qe7ZXWF8xQ28CpFUmTTpqrhBSHmx4x4xQ7fY2agt6jFwgkrfhvrqXZuAhze",
  "key20": "r3UqLXQKPbCBmTZYzpvguyFK9wxmTYZZgvQ8NV8koP3EQs1X9rig8QZsgUwjyEqHdEzh93GPP9htvL2PDyWC3Hm",
  "key21": "3SYouq9sepBPFWYh4AEdQH3yNGNwjb6hb9fnJiJsqvFFCjs8oFdKPTgTYSD6R3HhyPny55omB5LrP5JXWjeihpz9",
  "key22": "5WR1Sg7uuwxkhin3RAmbsMbMRmCTQSdWmJgtqy4qVou7gn8h7G5Z93jeYYRawKQa6KKNeFVNUkCg6TDeEK8ZzKEo",
  "key23": "4EmV92NL8zvvtmicXT9LdpnARTm5ToJ6nyMhFWBk22PLU9EFEVXSTTzZjBPy6CvERMjJ7AKzQr5ccRCcj2SdKYYu",
  "key24": "4hxcQuUdH56FfyKVqNKSDNg4PfUDphqCY8Y112xDyyKqfjzSg7W8pnTz96QwpxEKszMSvgS5VsdDrL7cCzou6Fcp",
  "key25": "5ep8hWZkgBvyqgUirTy8ytGyRuqMSZwvZXiuQt8YSVwFmCYzeSc4JeWspVWvNHoVzbzq8HR3htXyT3AGQNU88ejv",
  "key26": "6Uw1xPd5MvBWWWH7PAEGG3o82UjGFrUfC27XPpd78751qHUkgJrZjcXx87rtCjLK37MnNGsicVx6MgHDohVCPHB",
  "key27": "4tsB9EsWLPtiRs1tkWV8gKhb8dR8H5V4K21XFBYTD2nMTtZAihKJ8Nj8YbGdgV2cCLVpu9F1Q2JCtLYUdnWjgedS",
  "key28": "4hecFDmBVvcXmemJ1yGywPecVT4NN2jbLDPEnMYa6xcU6FdX7iL8rceFwBxVRaU8DTfKaX6LmKfv2wXdsiYavVxD"
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
