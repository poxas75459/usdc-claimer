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
    "5vJjjvYYtq1KeSbxz2YAS7hTXzj3qwi5ZTts11W3rQvgkYjG3vnQgtbUTJ4iphXtyQkWfobazETPpX9sWhqrNYfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g2EpxoZk4eEbGGzmjNN5UrueNqj1KJw4dkMxrt1W4LdEKixaLuwE8xu5TEivDom3iC36FBnjcSKd3v3TQK2ZkSA",
  "key1": "7sranSc9cBv7DtvF1EBSSD3R7VtHdXUwSn5i6R7xgU7pjvVM6nSgUBxkJK87QzzqTQxTrd5eCA2xAtT5aSSyA5x",
  "key2": "29sGbzmYJJEijybjdkh2V64kyz5hcoJcNZj7MrfRZvnCF9ztxYoxwG6fM3jVSiB3ovvS4aDmKfhmHR9o5ejcK5Zp",
  "key3": "31qE2N14vGij9odSZATYmVmHT3Z1DWNKHJ89iAYBRJkzA3cfdEKLWo1THyRJwYCmiBRXB8pGUYpQY169fBHUfeiE",
  "key4": "56PfNubw4wc9s7wiy28W4EYCUaBsjU2N5w9npMgEyjYhd3a99mMYNt9fpp9xywWHZeKLPHgFgJGdnXG8AoxubdC3",
  "key5": "UkjLZwjFTFgkJ1yH7oaZs3kVyFRwuWyXQ38GBLZb2Brv6azU2LQkG7GqsBj8vJPDAiTi4Uv7ZbtQVT85b8VcVQa",
  "key6": "54NmmWQ9YxbPK5yCSHkcJCKcTzXnZEyNnATbCEJvbcZnwUrfQaBLqkRnmVHRcr92Wr3zst1AriApa6Ng7QB9RoLJ",
  "key7": "4e4pf3ZP1CuWVkRRwj5moANo77L18einHaUZiU1Wnri463fuGFXGB81WcFTZvcr9xNzWoJXFNcXb9RZL6GpPZhFj",
  "key8": "4T5Qoe5qbW5vALR4oSJttDwCozncEqnt59zgRKVVusv1Ww4kTtgXuPsgPPLohCTHpS1XfdZNEdNEJxGYfwZDUk1x",
  "key9": "3mu5EV3UJv9WLvLD1du9gwQc7SFKhqNgDBsWvJuLdsN549JGqbBJbYpuhNYiRbZaAQMstSuD4jThYx14gEKLTEQr",
  "key10": "3w22H6echXM63nn3a2yCJ3qxBYXXmiUhjD1TEJrbFqDRmxkFzE3kJzBNQkwrguVzpjpU2mMbM8CLgajEonCTx2u4",
  "key11": "2NQL7GSAx9KUUx24Gr3c3nwQKb2WdpiaG4ppYYqzJTvsrFCmaSME9ktAqpYZ2RBzr7i3hGxjvGLWocYDUX9YD6Y4",
  "key12": "2iHWqFfGAb3Z2NHYfwpYouwid4g77SksCJ8YmpZBFruh7LwwmfVs9NwkFkaj8K7HE8kPoAmpMS4eGZkzfMcZxxd5",
  "key13": "3bwPt9F5KWcYbVckwd56qimBi8cufNj4LbDz8VxKt9rgtirAD27rn1wVKJrn4Deviv5wd77khnvkY2H5tGSdHL3f",
  "key14": "5pZHLutUMfVm2oU6i96oQWPA8KQQ4UqvtSdu4Vh5ZLgNXbu2QnuvgH8dDHtA4rwWy6djpUzHhuPd7SqoPYZ4BKKK",
  "key15": "fMYHZSUacW6XTp9DxWdLFjoaA8dyUqrnFfPDBYrJNWp1JDcr1aErxubdUmJYAeDQnes5iyh8atUh6putZ1uwrdL",
  "key16": "4yx57W4Z2Ex9Le855xDyovYoDfUcjnjow4N1JTGywhNpjkuDd7qbAPfaS5nc7oET9EbEJd3SsZFqwW7vbAYkWGpa",
  "key17": "616CbhEa256Ccna5hAcpd97iRYF2YeWrdx3sa25dS99xfkVCFQpXaKcN6Q4xUTmZ3HRLNuAoWavsQTAqNF1zVLoj",
  "key18": "3cx82J46vGFbG9xv6sLgou2hUADXLqNVU8Lsj9RrmCKboFzVZEDwEbExRv7QYMgBYMaCzYPm8qgTd38Du3imygnW",
  "key19": "tVijzcY4zLQU5jhAktTYKnLBYv5abthBYTj1wkDZ4u1JYiiSFopfA7V5NLeqsVv2bGCwdrQ9tVTnmjai1QFERbX",
  "key20": "2DCXuJHQM7QgEunbhqDdkNkReZdhnyXUUhx3NwvVbs3iiuJGW4CS8XN6bGhLr4EqX9SoZJj4wpRe7SdpkEyBBzcz",
  "key21": "3un1nSP4KoFk83q2QRU8rA3CcP7SG2grQxuhtdtmyHdpa7xfDVd55hMU39mUhkFd7q5Y2ucBB5vUUfXjDGVsVvhA",
  "key22": "KYovP4ndnVgyVoWoBGR1wDM86E6u4gHcSP4A5p76yuQYg3SsTAMYpHnyFQ4ctpB5jWohzWas5MVPeoFd12cfLuv",
  "key23": "5FcdWVfAD83a1bmygqD3mYWrUetjy9DZRp7SX7hPWFqmF2w6ttuoqMdq9AvFhDMhEDSKzqtYHUHUL3rMSUWeARC2",
  "key24": "3QevRrfjKaAiDPNFzXMrwJxz3oUByhqrrys5LNvGLK36DJXt1p4nB32S45pynhiRczPGn7prtgbXGVkQBnQmDgqi",
  "key25": "5cc9onM5XqbQxiT7SyQWq3QNzVsjbb1Vcsz23cgHbRp5i42V2e7hUNvrimdKcw2ztSKJjazTUBXVk2UGsME3n4Gs",
  "key26": "297HU5PmG9ugPB55kkK93JLBr5DYeWgSmykSCfEgNug1sDGuZBDsDmG9JVHgy5Ahv6vXxJpWpLuzuyXvR9NEvGc9",
  "key27": "41H1JhypgQmWdTZppLEDXHrbUs296zWBKHaf48GAufp28kQRjSjiSSPawGeyT6xVoWLmgAWTKQqbnsQBxVCk88V5",
  "key28": "4K4sFr7RLLB2iScpoiCQtAXS6mJaC59CxoJmv8ZzDqNfhXXJD4cojUZataiyK6cFUcNKsB1WnSixRorBuSLrULMN",
  "key29": "5ppLN7zqFtKXe3ky67sz9QYKDor7Wzy6w4xMptT2HshZQR21sB58aYxrLmeLZjnNPgDgyV4rurkqZsm4niLand1K",
  "key30": "3cqi5z78NsfFvVFLHQrqscsxNWuQL7HJbGp43EnbZssk5atMT3BmH9xSZzpgwtYdB5bMTka3XftZeDAu5G1j2mMp",
  "key31": "4f3193xAK9KHnyaDXPUasKNQpwKvJdtL9SFMGFxAtN3dQe2hv7N5G2y5T2HZjvYuXg4WZauaPLz9misBzVvJ8JL5",
  "key32": "4cMZYC1qVFBUwbBaanrsHQBUonPDUn7XW8x8ky5VBmjMJYipdcthsqGxB3NJf45u1KqbRjTytzf14gAZ8tG8Ry9z",
  "key33": "2V2oxRFpzGB9xJk7wThvSdDVDfaNWKmnkgATuxJDmLEr7dXQ33Dnmmy24Y8RBgnPyHg9cTCJogz4jjDtKaUVGgbz"
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
