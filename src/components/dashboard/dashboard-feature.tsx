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
    "4n7Wq5ofLwEdKMctFk3XHVoF3HqPZhFnQCWW2Q38BXVYZZykB7521pCs8iP7ips3CspkAnHBKugsw6QRPNMDqWeP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RfSqFWoZApKMj7iZVfkfS5vDxHRcj3xYjSeg7r8Fo4yxujakM4gSHu3TphW1yf4viKRzfPhDiJG294HyWKK9p4v",
  "key1": "2YbMQmLgR2zWHSxw2XQJkBTzYuh1kkG5wGy95wtZRxzPSYUAV3dnw2sSKvEsMa3xDn3DMxLuEzWypnRCkU7nDL2Q",
  "key2": "263qF3edqW62VH9dH26RxRHVLzANTbw4HxF6XUSDQdVpLmG1oM8AFj1EfMgNEKbmKM3v3bNqUezf5fC1xByicyt8",
  "key3": "67ozDfZGS4xobe2TVRSiQFcevizZRE24Zq4vtb6dc7uB8czmHdXNyP7V9tmkYvS194wuy1tizUbTc9GqPi93HJRh",
  "key4": "2De8YjvqfaAv7ErhRkNBwWvdWzyWRTCyES6tyHAq6GTUw9NW7TMjC3SUnvP3LCsFNnUrcgZSSSZCGHotAuSVSQe8",
  "key5": "qzCurG2Bnai234nKixWHS2zpnZRbKWXDotNMV2FuTUG3U4h7SC1MEnj9i6EBMQV7Ax4atqxmJJ4hVGFBf4TZXcu",
  "key6": "5SLPHa9DhvPYgtkTdeZfjRZPYodMiCpFQpjQotfEEAEmKsSrUhYX7VWbyV6Q2DQjFkLEiGjQTYP2Yp8zUTpJ6YvS",
  "key7": "2ncCmbqj439FwaCFfj7gg8Ca83eZtxGuRUXGJ6JSE3owicj4MA2Rm6vBVtULr9WfnAySGWm5pMTxfWqDmPC4P4z6",
  "key8": "MJkTcKiFZzUNpAWok2U7CenPPQPQJCp4vtPVR3nzhxg35hhiHUbFzeYDtB3g8v9dkcR985oTKL4EfiSSVKnjoe8",
  "key9": "3y8dTaYcfxpcCXqzRvraXz4wWL9uBvg9aqGAm3oE7h7BevLhA8TZrM8QdjFP5gS7QzWuwXr4TVHvDt7JLZsMyet8",
  "key10": "51PJ3CTq2rBbkVHgY2gjfPquJxYqpqCJy39bjLUGEAP235SeNj4wuYDkSQSfAGAGp3nAWZS7jcjFni581CDieBdj",
  "key11": "2jeajoDqQ1GutU1Y39L6ccbEiVot4vP4kuDGgwK5JavmB4jUnWcr4QaBiAhswrZCxWaPXrR2JwHoWe8C5VAt4vUm",
  "key12": "4kke5vAMHyzhUBwyVAH6sDbqkfjk8cCm9rN118hSgd5ghYo5qPc5us5KKTDZBUxUmp6WTEUvMVGv9euotWezgs2Q",
  "key13": "4SjhXoejZG4cWrBdw8988AGhEffGkgfBzLurq143ScHNP1HUrwSZqxXPbvxtkMR74B1FXTjbpPkMCnb7zbCpK4Eq",
  "key14": "2qbmMB7ZDQViJAxYtV6sfS6UvcC4YGh3L1b76ZqPXXS5AD6YKV4CDEWWjrUYH19gy4H9Pv29DRNUuF3tz7MdSRzc",
  "key15": "2hBbqnzqLk6886ESLU5WHWFem6QoGegHsqMQ94satTTKCR7yvRMz672AQec8Mu6QRiXZF9cGFbzWaLiPNjiwHknu",
  "key16": "3LGQGcK93ToN5ztCh55fWUKEortC4sUpX19RcAAp6BmCKNnnNHg1EeW5iDxQJL73xW9hBKbbKZ9XUpuYTNnjogrE",
  "key17": "5X2EMEJr83N684JArGbrcKvUeiweRNwSLpabja5MigLF1HdzSTBiPxQFHVsksYKC15A681shqo9MC1MKfeNkDm5",
  "key18": "4BevapQ1nGMBoESqYmSxuNyxEAqi71huKPV8qj1KhQ5wt2AT3bWBAFX4cMRjRc5cve2wUHpm1V6RkDEfaX2vjoTB",
  "key19": "vxNjDCY616e4U4SFTvovLxNCAByoQuczGzuf3wVDjgZaUry3Uxz2hDxJu1buuf3AoJJ3Fbt6ha5P2kx5BJmquf4",
  "key20": "43p2AbSbCACVJvkoxVvvrG6aZB2173ku7vXu1rxcDvWWBc5idKr9ThZkWQ6RU7FqufviPuPStSPhQ7hbVkk18FX7",
  "key21": "5Q3g3xxdkuuUdhBdmV2iB2FKouMLiw8qrmFAZ8HkcFKSkGNHdfQRm63wQwvA5n6GLCHVRQEcxbczggNsvggQoMuH",
  "key22": "4ZTqobeeHQriZ9aGPPPDTZ3BYY2wajaTKhiYbeiHGqMY97A6XkbE8JDd2sZJY9538ZNkdmKo5EdVtHtzp4ycMZMV",
  "key23": "45goDhe6iGupFrpc8NvBFdxZWtFA4X1EVdipaPpKmD6wQF4ZU3yeKQgz3onwDxTVyPRd672Pscy41r4h7P3ojx1Y",
  "key24": "472LmcY3RHM1cwdBj3J4aUGjPNm8BtA5AcT9g1vTLorW3WxETJo1ejuoysuejE9ZcyF792nDSjmgnTYS7mxbm4rR",
  "key25": "4VKFthtfCzuMnah8AirSkcs6w25cbvv7uiXxTR63vHurt7Xz9Vx4z91aEceRYjP64bTK2F4tkY5D8yTuEgMJUxhb"
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
