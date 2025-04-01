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
    "4hnhQqQgpg6W5xGjRsEJdNdihFJ3pdYNHoJge4LpKgUdQ4UeDUncQsfxrdq8UqdjRp7FbZSx2Hjvk8BiZ4thM284"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KanFEHX1nZmpoRaJuyw45YrG8agGfHJE5LY9X9np4uUNfXHvioKKxcmfwi7Tq3Y8gRk3zuPosnChqiXjuYtRADD",
  "key1": "Yagdt4FuPiDf66ZAffLnEsfLB7b4Ht4iVp9mDm7JVeLdpJaNUXSo4X8F76F8JVP9USptVemsmAyBUp3jDrg1756",
  "key2": "24Louyhpzd4LVLLPicEKA9T86NfuGkRUezjYCYuni7uJHZ4xjefDnMCEFifajejHAfojBBnde12wtzbTcjr4jZK8",
  "key3": "BrWhaHbuMMcGrdThmpHHwTagNEDxs1sdhAiJtJewhyFsvd2gjiee2BReivWvWh8NQ9jJDzfqfcMfXYtkgLBhBhv",
  "key4": "5XmtVdFrnFsGNo92FoMr9VXMFKyBFKco2kx9FnUUU7vyEwCPwjDYbNzSd2roGxBroJgnCfoVVgfxgQqBUjk9vbHv",
  "key5": "5ALhBwSUaSSE2MLfVZiagFDcH55PkcDmxLru9c2iQJEWdrW1z6MKbnLGBvWf9jyXuwhyR84jet64WqXaSRMLwppb",
  "key6": "4pFQGXb5dzjZMFWWUFq4FT3HZLkroXzU76nvE7FY4hak4tNiSrvSqZRJFPxWK7Wf95jNAhtLhHnhZdDhC4H1Lir8",
  "key7": "3synmPX7k9BuDokTphLZS42hR4Agpe97ApXTse1RK63QDeyEdGZfh7gy6tjtAnJcAyQZntKMhogNuGTsQ1JCJJTk",
  "key8": "3ZNjauZuSNNTHrUVjEA6YDcSP4DhuCtUTg8sdUVExgoCKMppfjKrn5Zd1LS91BeCKPWJrG8Gbaq4ydFxSoUMSASS",
  "key9": "4XzngrtrnTWibQzGacsjav5LjtHDcN4cgny7EufX6B5jeRYVNnYfPJQsLbTQZRgj2TyweDxS5X3FLesKfGpCGkbX",
  "key10": "2zc5nxmxH97dAEogrWUywmiBuriduUZ2hAPwYRbGK18CRVfVoqbnHCKV1bPvLTcirXeK44szxjyxmBqrLTWsUuwg",
  "key11": "GkuKLy3rJ2Uk4rKJnD9yoHi5c2dMfnCsrXth7hdtTSsWV47Y3x8Bk3GpbyEeu27coGSb8MbWsNysxtcMawoMjmw",
  "key12": "4iGjoHVWtMMMC3GDDXRXH6LeGKo2Lgk1Wq5Fr6CNoQDWhwLWNNrPMpEw5xGGxaX9hUpcLPA5fYP2tiPBFY1UZHQV",
  "key13": "ifEHf6Y7Nkq6W32KtDMFgDgaboPfCNsDYV3DWdWgnRE97GdnkUdvDxmZQFGsK2yXW57KMb2o589YfQY173nspdo",
  "key14": "3CkuQkxcNfnj3i9xcnpWLLxDLSQ43eg6A6tiFZhzbzQWycU3mJXHe2wuf5QaHuLYo2wVhfsMwvbDbG3kN2iZswuF",
  "key15": "3yfD1PX6Rm6HQpAm8hvQFMLWvNS3zhpbBbQWebA1tq3RB85UahAeqfqwToYSj96pYdkXh2EhSA1Vzbf8fiqLH9k2",
  "key16": "3BDZpZvSQdLkmW5DCVHGKrXGjry6R2MYCKR1dUKXWnwFh5nvL81kPPZmTc1y8SosHKkW3ERAQQirVBv2ao3jVWPe",
  "key17": "2MicEM5PTvdaL5vtWNSpkH3wWhWPjnnSw9zN4gciwdkb1ssssuCXkPFvDn6k55u2ec8ckS2HYQHdTfF3BbxvMXKN",
  "key18": "3MYhLMYWhT5tK92CMrAWrM9VRbnTdAwPJmta8Y4vS6JyS7m6y96BX5huJSWc6vjwgmGKU89UfwmM76c5dFfT1PKz",
  "key19": "2kaHYuwgJkGiepf43JkrxiPTmGmbwowXBVzdgLpogWJeY2KygbuURr8PU23dvd5rTFvVcduasFeLnewtesE7Lf4b",
  "key20": "4YYrbs24wpUit1qXJCh1HoZTFV8wftPAjgh41a1bfR56Rnd6URpzHefqoQSVu3wQzwPtQoX1QLrSYuV5GS6aP5Np",
  "key21": "EwP1L32Wg2osMTu1yFH931eko5oNNmReoXywBYjkNzFZCd1poNfEeXx1JdA6EVnTu9Ff3MNZCAY7Q6wMXnpgR4L",
  "key22": "5KBzYAueTom9R9kMQ5oydWigPhhb2LJupcnryWug7eoWXmdNXdZubTWCWoXVSn4f1wMA4UswfvqTSJGMrZD4vWQz",
  "key23": "2GHFUQGXzGi63oisSd4ZVBzB1x4KSRHkxr6i7MibSoGB76ir3uyQGS6hpNpKcSmx18DfyRnhn8sV9uH22E7vonZq",
  "key24": "2dVgLY8dk9shNjT8EHxPsY64iH3wxePVEhUK5pSpANbV2n9Ru3nSW31mBryMmGTgMK2hzjjWkDrhJFhZmJazu829",
  "key25": "23Sm2EWQFrHd6xtJpRKjfXwFUPMxQqsoHJyf8uaFToVsYAvKzpQgaTF5pQ8FVhoewzpvKQgRbe34z9YT98tp4rbm",
  "key26": "36LeB67rc4AwwUPLmKtuS4CtELjYrLJ2vcNHa6MEKG28hh7UHywGew7qK4VB2vVWWvaKj1kxuFQU9Lw6GXHG8PFb",
  "key27": "5bjCU85bZPU1J4CdVgkguLe73e5dysXSS9XZQWgD5LaKtATWLwJQwPm4X4oefGsTCQTMam6fe4rPXfhZABPpE8e3",
  "key28": "2Ajf7Q1AE3SjzDd2zUW5h6GYUAiTDiKetXrr7gwPvPwpdc133Xn8wiXeckKxfy9zdZiF2GjKfu9UVngW35kSXgQv",
  "key29": "3RbfEW4TeR8bVJ7nryjuTQzUGUTpxTGzkpFzUb8xiDfCpNKHAtDrB2mdG2uoQ7BUCemsD3HY6aJnc5e2jrgEKDFw",
  "key30": "5pj4mGkHzKWWv2GQvtRnWCPYS6UKH4e1uoPXyxcTyHaTje2AuYdDDSdJxfnRt1tVr7ugc52oEKQyFseQxKnvr1Mp",
  "key31": "xiCm8KRTAsgpzjFVTxKiLRna3eqcPovLkT8SwoPWwVQnuW2UXjXF3JVCgETc93Rw298Bs7yi3JBjRG5McSa8Amo"
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
