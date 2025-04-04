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
    "3j5iN86W8JiYCxFanSCJDs6AU97VnzxjfAJqjJEV6QpqGaCJjLpU2HDDdVS8oKt48hPy9m5taJrWcsQu21iKKkQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iLdKzn1ZdccgubWo8Si3PQS4rDZWUH87Q5zA1FUhnnpxxH3gKHcPeqAbQ9n8ong6PQELg9LN2opQAfXpw5KocRr",
  "key1": "3G1WeckBNhbHJnf3Udk771qyMkYLZSZw1D4SVakikFSMRwCVJfAKkUjasbpcHsLug4UVUrwDC3KrUGteiVGnvMuj",
  "key2": "537siXJnpykNaqfSsxeCmZka5wYaS8D6PVrr3NXipjADtXzNDr62WSdhpSGVLDgqjtrKdFU8zbPCytcsNVnFbnCf",
  "key3": "56tZEBhMxM1wg3EFsFcRLdea2y98uxE6NoMN1Q8jAmQatcvrxnH2gx52NukuFEraCzGAfeD8HMjoauEKizndTrbm",
  "key4": "4xBnog3c1GCZQmHeKkyocXysp7bWh82pmFR8rUTZaVvLUeLkQ2yYUuwFXVUZMVfpkBFg8u6XMn2hsMiZLJ1fskaa",
  "key5": "S72hTSpGN2cFp8JHYNW7c4wEM2vLwUsV5vMrR7mg7MHUGNEFLqVYKHzneSTWeaG8TUi5VxTBzD2uA9UB1YMsxGq",
  "key6": "57udRkafY8q4EJMJtjVKttEAmtD5pBKiruiC5g8ZT79BNyqCCYULhUhTZ6pFuoLNH6ZMRbizrST3eVLUFrXdcJCm",
  "key7": "EsE8mp2x6ij6Y2t1mhz6qo5JZUT8i8e6y97SxDkwPvH7pz2GCnZABaQDNcBPe3DCMgtGLW57aeBi8kLR8pDvaFa",
  "key8": "4SSwJrbC6qqh83E9wU3ZjPUDgiGWecHcAxxwWUwnSTD45Q594qqdrWapK5Fbj6HDFCEYQmbpHM9qhA342y2GJtfj",
  "key9": "2cTgWb4s94NEKeRqRCSD1bry1aoHwWAd3AoPQpqBL5GSJDPPSUTFKoXw743NjSSQ8MkB9EgHiNs8mNDf6tbP8rp6",
  "key10": "H54JBE3un6XzeViJVDfGCynWdShWoqdbrDJqHjWK5bcJvSrbCysMTUzQSueSudPr18wHFmrpMLAoSRrCzqpw5sv",
  "key11": "AfuPuiBwCWhuFVfWrj4ED2TbSgy1uUoPtb78j3nAFm7wdqRAWsxFhvfFB5fgcgqHk4xTT2dY4icvhgK2L7KNJTt",
  "key12": "5vDhyiYRcoYvUBsjRLbhbRdqcaAE5oEnjKCDpn1ZKjQxWSLGZv68tzXqw64MUzrrMcBknNKFHNrGMz2Pd9yB6WTV",
  "key13": "35f8Yod4FH77muuTEKyxLZRtnvQRyNwNo3iCXH2pBwZ3WKS1WiMN3WiBU4XweB5kGvgyEiRCeFr5XGg24xFH62Pg",
  "key14": "RmUq3zVmJAFUEMdxwevzwM6NyEMVJ9qVJCK1PDth2Bj2yZYsh2gTvL6rUm9HLMcxJf3Ufju3c3CypB4nT2WX33a",
  "key15": "5N53PotFBJZbdxEPvwqXfVrXCZvT8j2nX7oy4PaBud6qKy2AcThnwotFXYJwWm8GT2H9oNPfGZBhzurvA4VARPH9",
  "key16": "3YWGxanfhjrAds4T3hijRXhw8TDP4fJpNWDudbcowVRPAZRkbGaDcUrwbCifriNgmkYKJAerE81odfnUPFi7ehvs",
  "key17": "2GKrfyT4BCXNjZyWWy45K3wric3w9uhfbhnNw6Axt5Z6VZe4QtL28JWZTYTMboVrgHVHBHX1qtfCeuz8woKqu94D",
  "key18": "2hYXxWMFimRwFztStLTobm7ady1aVWgY2UqfMkuX4mm9weBUmYXzwyBkLK2fCbSS8JNfrNBF3KqrwvyMLhtUWP43",
  "key19": "4cr7eCv4K2TktpZg27qrMXtz1hAPN3fnHjtCJm7Qht7TZDVbEjnv1mN84uGSEtszSZ9qCu2NsLcV8qwsHFZNmXzx",
  "key20": "2UpLJRfrTBiR7UmDac1g3HVtHo1JTmXPxeNeDQkdXqkAUqiZXw3vX7qhCyF3cdm1MNFjeJ8so1RSG1docnRfQsoz",
  "key21": "5JUMKehSFEZDAVPZNu3pRppHN4ZzDsb4LN6Z4Rgay65xt9mdu9jWTbjNArVk9546qmuJD5mXjnLctuoezygPn1nv",
  "key22": "F2aUuFtREpJdusJHxDmRbrXTnrSeakycP7vLDFVxMXCjQ6MGiXocyoBWQoHn4PAJjq23dWwjHb5Jiu7VQw4qPKC",
  "key23": "4KvjFHvyT3QPdC9vnyGpKx57N1RjCoypScGmRMRnmkrNCYBtwGNdVgiofQkEgnLoE7Kw5hxBFbXc8ya8z4rykzF4",
  "key24": "3bLjDBjFNtrk21JHANMEd3d7C5zGYSNXh6RuoLRrJ8fYxe32MYNVYGNb1DA2FBYLvg7omnnXuwU6gP7sxY6ZN2oW",
  "key25": "21rXQDagJS4gSJXJRALjWKvfrW3o5uBkLjNM2gvXtReQPZBANKwwSyrRaXWLR5SzPVBUwySmDpxtrpoiqTtjQf2c",
  "key26": "5Y4rBgPbbEMNePnGfQFGUn4g6DdnR2Cnv5r9uroNcrvYm9bE3YExL4VvV15cLqJDwLngHvujxQRa3jGUQn1GjhQn",
  "key27": "3SKRB8WkHEWEduDFdnR8uUZ5xzXzTwmyn5o3YkYCZDYoXygy7cbqnuKGnPCj2wg2WTAeKmYujM9EjEhGj6TkitcY",
  "key28": "3YZJQHVSgxWGNNQoyKV6qrFjnZgj9m8eR1Juk25BWMnMfhGzhH598VrBk25SwjsknM6Kpv8bYacp5HNiGmGqXPB3",
  "key29": "2PGeSTYy7SE8frVT8QURXWPmPoWuuMxxqF42L7fVeFcdNRaLpAkBwDd9an3io3pjJwG7fnEKfsAUmCVEvmrCxNwm",
  "key30": "3a42Hj4QvzPB3CFFMRTMGzzMmqooyjw4VEMagYos9zg9Uhz28MPtUxQjWn4a77mUBuMBoivGNAfcgG1jBT56VRQg",
  "key31": "oN6zcbvVSaSmkvCWgeLeboXdygVNsawUNdu3u21NhLebsy2m3f5BqvDYfLE5hSxW4rZCnG9FqWkRewVkgYzhrx8",
  "key32": "4Xc57ikLYd5cTsV3eVjnQsoj74njbGZZgSZb28ccXrh7uqSopZrWTsUeZPCw2mYUgdiw1uv336UDpFyJMmpZtZXV",
  "key33": "3wonZY5gJ6DnJ2aqKNaWpdFRQKsx994EwLcnKhgF4sbXeG5QFyE4tRUjgCsMoSiim5aEmJE6PurGWKysUkU5Epo2",
  "key34": "2QvmAVdbmzTYyeJzHNr3py9bBg5kp7iG1iVsN6bv9LVCLSZiKxUXFLNjhX24CcemXhc3Wj1Y25eTmdKNriyiuD6p",
  "key35": "21CsyLrj8rQ6cjn1GeE5XLjLocsYuTrdWXChesZSCvQsSSUU1aPQcCNQBJjvmc76sATepbnBhrCru7Dt9RzQpvRr",
  "key36": "5fFzSVm1Yo9u2ciekBgPjBkyEH7wZrx9seQxrgzqYPxqJCnKidugP46oGZVkK9GbsRhSPF5U4u1k3nzXrCXp1ySM",
  "key37": "4KPuLGR3LVxVZf2o8yKq19W8EXyMPCBguv1VM4DbUSAHwxN1c5PGdPTepkTe5YpFrXZJv9h3D8w26VCEuZEhFkzL"
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
