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
    "6tNpjN3cxE8kJRgthgEyG226gkGWAr7BYbkHbYtQr6DAysPjGbUPVbFdr7gyvnnZkMGy4ExauoSF5ix9o4ZW8R9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eqPvPppwisqgKLqCvK633Gwb617hE7u3QaUwDi7EWpGjqqEfaiXyS7UweTmrJ3uY4XDWgneqoQw9W82P6qZ9HFb",
  "key1": "3J7x2X6Lz56Rjeqvu8SPJj9qVyavtm5odKXHakfV2RPyQCMiVYjNhredsegpC4FdXsCJojLKhSwsBxTRNBvQ2BQC",
  "key2": "32BM8VkE8F8973MkfJYchmEmyjSPmwwfGFHdRkNsN78ULqDV5J58UZmUpBAuN63WqQJV2seMqswEhc1H4T5WKB8V",
  "key3": "32JmcW8dBQPBkK5VxK1fxR5Mpc9EHFHVkSNE1T7bDhsXoSnMwHEhjoLZ3T7TJ6ypetXLwJ5dTKUrK7kMALasCdBA",
  "key4": "3VQiur2VuGFo9CFb7kPCvzEv3sxBp46voBcEsPqmfaw1KmRgFt3i3Y3ngny95hoTvXvLmEAVQaxMPvDnF1abQFJZ",
  "key5": "3orthPXYa7711NPsF9NHfaCMfxYEor8g3A8i5ancLCi7p4KZNn4hTidr26uJVKu46vnSbaZcB5aVEoUt7EiEKva7",
  "key6": "9AdRyHvHgvFUXpkQiCf68gYVFrDZZhb3CSxdmFyyuss1iCe6zmTExdbTYt11q9iLvFak3NvMjkRDZDgbAaqQixC",
  "key7": "3TSZFz6j71VZAjGd11Q4G9fC1Ng75PjdfyJnYR5qLsnPezn3Yo7A2R9FV7esbDubGVxSsU3tAG3UHDqkfcNpD7qT",
  "key8": "2EgUeUENRJRWJze1ZKkmRbUnTXVLiKPFwJ4QzU1VUdAzVrCKJr7xf8w6SkF2BfdmhztygX83HMQFjWt2p77ytDsJ",
  "key9": "3YjviFrYaaC12nGEnPg9RPsyiG67dNo4YQvnSuiFgi1DdFpFZQdmipWqfo6bjNrjfGacXkerTpm7t7djobCc8REG",
  "key10": "3c69YjDPkugQbmhEaAdGJREsfTD1cQmwMLkPmPTukJgLkvVDiXvU3Pdh52tCF9ySZGLVteV8eQQWebHM7dS6JXsJ",
  "key11": "2xZcjFPWQMFe5VMJXgYNLTyw5KPBAwYVp6kLBG2Cgj6Bz5XBLd2bQ1r2rDaBJgqveDr3DmHjkYrKe766y5ja2pWp",
  "key12": "hSxcXYuVTgmjaAfpvVvsstqk7Q74Mb6KVNvzhP5bF8xTuXnihdN1oWtLchRDV5RpyHBP1J6zHkjNjwkDFWC2f8g",
  "key13": "2JhrqHGzrnuJa6VVPRZG9sFdqLMuzAgZS3CqSWgJaeCVd4tZZeqG3XZkrrZbcr3fBxperdZJE2Bk4JSxk6GaBWFF",
  "key14": "2Su9DLZiXmr7rpzh44t3jKjnyZkB9GJHzuJqGBYyzwz7Vj5kiHLg1L7ohyG4DsDy4vhWviSgaABg4DrkZCSLiF5u",
  "key15": "RmhAUgo8qpRBhaJuJYcTfvZpAp7MMA5QNCec7SejfhrH4eghuZWY6FtnPspStk7FZWEWhW8Cz6m3dXvsFha9q5U",
  "key16": "5uiZ7Zau61Cu28T74tzYSZ4WGpcmZmu5am2uju61KikbpUnEUWpS2HRKZFeomW7WF4D77gYBWqtHEKgAkUHmTw6V",
  "key17": "36tNq7PNSbjUQtkqgMNwe5PiPUhnUx3vuCSq2i79SHeKw7KDsekHwxFTq26ez5idsSfQ23DRMs2TgZuRMwo1uS3U",
  "key18": "4zpip8qTosWDL8zY8jK5CJVLrHez5gpSHQAQdko3w3Fw4hEL8nu22ZWXxsEna3dVNhv1nqT2tiDVSuUHj7HK1z88",
  "key19": "3SyFe2Tyh6ZWJbzK3wLY2EJ6ZbKRkcK5rxknfQV6qzBPzj2VfEZqsSV4S86ncFWvUZcUt3ajFzuDngNBFGSUBsfN",
  "key20": "5tv8gXiaz5UhyZc3v1ertdC3schSjR1u6w8rqS2dwEA5wEQctiJjfDDsTWu9dPtcU2W4uxETWq5zGXXTy1HWhUcA",
  "key21": "5kVdenbz3HpmAS9nwNYJvGu1SYzJVNuMgsG8EksuX5Ytrxx1fu3HccAd8NMkbXCDXy7DdcZBhCR4oSGowwkaKkM5",
  "key22": "28bjdEwDq3P4Lgk3BXa6mpAjRcfqi812KoE18LxBMHY5h7og4ZVPah3vf33dgiHPYDTqZavt3qQGW92bybgmDypS",
  "key23": "3wdFJj7PN6GrWuEXd6nx34FnQeVi3yJE3d4Qm7i6VR6eF2pDQyGzVvzs5jYXSmjWiaH38FzP5cMFG5LbKbKrQsxJ",
  "key24": "fxb6gFuSzXBNKxfcTBDACMseAA3Kh2ErTFUoxDBLP9GyDBr9RW2172dS9EVtQqf17hoGn6ZX2T81t4ehaQtUheh",
  "key25": "2tG5Rt7uXwV4fpEfjGp39VfdXKbEaTrJzc1ZjMpxcD838QTHehb7R6Vi58ganFso756txyBmjXiVBNSGTpAqLaSd",
  "key26": "3UsfpijKxTk5oK1NjKpPoRrCpFN1LKbP2nQXm9ixscBVuYi4PZMfXsY2uUXJ85LnsxLp928vRUKnMu79m3Lgn4EU"
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
