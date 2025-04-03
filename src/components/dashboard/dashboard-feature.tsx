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
    "2xFCvh7aCo6WhTBRf9cv2wSXA9ywcJfXAwDAv3DTNEiiQapGqZAs6Yv3U7YRC6Muve4ZaMsKfydVFkWV5NLe4oW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "592Zxq2tcA1KcnMiaZ9vhydMpYrAUaLrctdq919PLVjApG7x6io4GY3NQfF7sndufabfAuqquNi88NxnY5qDSBHS",
  "key1": "2ZFwbwC3fyLSKtkxySP3CcaKibyuQHrE1Zc3Qhqr8nhDMfYVi5GX4cqWE6uwd1PLxNrkT65CikUpPGVQ1YsocL5m",
  "key2": "2949zZUvj2x3XR8BnfFsUN2FwFEpVsaP5XC3nVG4p1B1UbgUa45jgmvV9rm5L36BFysMWP8xuGtjDP86ZxgxJCLu",
  "key3": "E1AzmSnzEDWac7rwQ2Af47mZ4J9vCsxYedY4KETUJPTiV1jktcXoQqZxy4AeZQUoNKGWffDoP8QtrErzAozncF5",
  "key4": "K8ACQtW3CJT5BWKyCLgEkTN9cKjkegWoYtcnM52u6RMe7kXr3hn95VdXv5xaP2j17kWnXnz1B7sByX5wXDfJVvb",
  "key5": "5dSc4J1DjqBGKkZFNRn2a6eVj7uwTykGsH4DjR9zqDyq6yHH1mZGkC3LCy4aEDzSR1Ainh3aCXjBUTt8W4h6ytCW",
  "key6": "25aUKoB4MCmTz7Wt3oVKNmSfPFDqhtZebFW5aFiuuKNdNKMqi8eVDHEyTpVNmaZrF7UM2KskPuLaxZi82AohaBjJ",
  "key7": "3kRdM8huVD4LrUJ8HYoAeoCiEH8AdCHevHHqSPtVpWp1RtASENNwxc4JWLVkcgTwRSJF5ZtBwFGcTzZqiZ3wJ8ct",
  "key8": "3hxHX7nYmnZ4fHyCyq2e8MWZbi1zZJNhqrrdj8jknozexjn92WM27wP2eUXvFR2shFAjK4QmRbt15h9gjGyE33ch",
  "key9": "5cDnsw6yD185xVTLchXwdLbsou1JAAEkVXvmFT3MyTPcp9wprgQsqtfz9JuERRKyQi2Z6e24nP43LT3mj8hcfa4J",
  "key10": "KNmPC6MTaT9WxrWNNeAEMViSrpmZ2U8MztfziTVPX7v5FB2WA162Pop7TQCZaX5PotJbXPL3GAqtaB2xdJJfsQg",
  "key11": "2AyYV72jwmAAmfqPPPXYDnUEGybeGCAh7E4NYnUhiftuvCp5BJjYwVdMV5UkZu3aBEWTFoA4g1NyPxfY6cJ3s7dL",
  "key12": "3cEfXkdEvfiKavMKPHbRu5mpVgnfrVobN1fhqaBgZYQfnCEdtYSk2zzRnUh2XvmhCH6uBF3cGuywjqFBJHjtEeX3",
  "key13": "3BShR4TwMSo6hXuHdnGcaCcjri82vGMDQE6HNaTF2kFzqfbRNUg1ztEHiR7HrPjBHiHAt7CvCZcuVKYtVdd4Hztq",
  "key14": "2JPGqf3rqETQba2ZDfjPSGG4pQKWmohWQRqsvRt4tXyFEcuKnibZ4fiQ5dcjgTeAZidzEGg9xdbAkmF1uydd5y5W",
  "key15": "2CMVUvmCpYtko45LgyrAoApwtCAGKeGh7R45BW43tpLDjBpwiwuhpW5h7Dd4Lieq3Dz1xwEsxXrW3L5geYBr9dzN",
  "key16": "5Nw1wepMgc64GnLpjYaqXuqr1HiMfjMCPh4pn2qkBgMaCDtapHNPV3Nqt2hBFmuBbSjRybQNF9HgAYZQ7P7rwhYt",
  "key17": "5aZ3Q8XY8ZRfhhxp4vHw1wv2DLjvuDZvAt1CNn5yAVa283WDzzsWfV9nWEa3ywYhj8Ufs2gRn6TWQ2HG1Di14caT",
  "key18": "4BUMfUoDKF2QHd3kGnfdqpHZo9RSo2a93hG8M6JadwgM31GcNWZbTiQe9otaDyyhbgU8x769eCRa5K4ecAop87UK",
  "key19": "2UkQgiivQvNpfScCdMNU7kLvVUz7V1wUt2cGMmAQqmL738LMzbeyPcepCyXYz5wEAoZwPfAPcAf2mYab59q4EM4P",
  "key20": "2hzj3e3TPPA3V9RTBryLVfWNvztRfkwc2MSEZ7f7Qv3Dw8CumrRSzhz8UX2Th9swFcqcFUPGhPmpwzikeFGu1SbD",
  "key21": "3Mq8h8843BQoN95aPoh9nWrHUiE7HgDjrPdpUcAUAHCHZkfg3o4Ln3P8HqGYdCRHJ5wYMKiVYB4i9Na7ucV2iD2T",
  "key22": "3n4kYkjkpxKRfPUFBMy7oSbMXgJ6wkoXSNYqnkPr4KZSjxCq4cd1j7XG4aegprULj9v5s2XAYDuZNcS2Jee1tFdz",
  "key23": "3FX3iKUGtmV91mqs6CQ9VG9N4VFo21sa3Yuou3V2GrgMdRmPh8XZvpn6MEk1APhQ5KrbhsSR4aqnTZvh3LQPSszG",
  "key24": "3RSJvmSixUjnW8LTCkKduuf5B6fSUWd7EJ94PACdq1u7evUxKcuEWtsBMUNEtSZZCDz7SrhDcAGBqhqM4YAmCdu1",
  "key25": "4FM1FSbWfaQSnNpw3mdFmix4xsybt5wWkST911ovAN3VVywHaccdXM6PgNXgeMkGBU4VoSFdxd1MEQ9B3URALwiK"
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
