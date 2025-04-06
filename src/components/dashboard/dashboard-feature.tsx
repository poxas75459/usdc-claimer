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
    "5WGRsBLhUuDnxPS11MiV8yG8kH27GPvrV2cnT1tSThW47kKn3AbNWKQyH2bUKMv4NGvJYH4aoWZG3MeJUSaZZaKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56J92D9U1ba9A28ERHdzmDdmUd9r23sqPtb6JqJL8rqwhCMbiN3aQjQUtzaBR6t9NonjcPHd3mPy2T1o5UCbscdV",
  "key1": "5z7MAgtGTuTB5uhvqrPAVBWBV4hkKf68BntRLN3ctCTEt1eXyAqdYhrvgim3gGrcxFdNRFMyLzVbvBqDGNV3X5B5",
  "key2": "4GVF4Doe8qqdQPa3dU2t8QXrzxJZfUYQGiszPh5M9XgeDh55KE7pSrgzhbcTa5C5gt2A3LPWg642QpKBMx4WPVBY",
  "key3": "5h8q2tZdFhK4ja7zdUKkrSsCZPByM8bZGDrUU2ULnRPFmWdoFT5ELteDMDKD2am125azAUnfUJaFDLdz34UFvZXY",
  "key4": "2dkvcmtXRHaWQwo4hh3CqSExdcsv7FAWVrjbUFq2sgxcumHNZqGk523pv9PBiDFP6cbiPeQMxHeQAcLDNCq9Kvkb",
  "key5": "64LwrDBXzuEJsAevkQtESG8QrasNh1fGgyWEkXpmacCrsKa7Q5aA2GSvvPpg8YkbU9zh4NL7p9zrHeytd5uNcpQL",
  "key6": "2hR48rS9CPxMdqR1CQautf67tR7fjzukuDBT3K93swbAY8mEno8iqSZE4nL9MiVFSbKoebp1ciwUbpEZTSs1X8YN",
  "key7": "4oXsN3BHddhzhS3Wg5kkev7aSS6gf1S2GQTLk6KHTwdybB5nn7cCmpJCMRPei7kN1DAXaFxUwLLACBr9HKyQWe1S",
  "key8": "2kxv8axMnHt9XhHtpi4KdFX55Vhq6W4i6yncAnWuUoNyMifu3pTefq8DN4Du82hSnrRegiLDc3pxaxiJsozqxRnv",
  "key9": "5n8J4f66sk7oqRUNJt758HdkGjGpDr7ByduPdUmVrLygPoycXGJarvTz4Q9QmQscoferh2u3EGP87k1TMzp3Au9",
  "key10": "2YpYPBiyeNfr9kEXkeYic2HevG9eJLPxFjioM7vgSxJeJ8QCmXkhDZ9b1jHoX7B8Tg5jJYMYWcUARZhv8WY2w7P3",
  "key11": "7UbdKGArp8rVg8QH3DUdHqEch7sryLpPKR726bhkAWdNxwTsYKGt4vjVQ4LFSHtgPHmZ5fS6kwwmEUBLPcvpC3d",
  "key12": "5Dp3ocJvdLVLdigzG2Vj2Hy2iBN6ksNcQm9yDMN2meDFhhAc9F3FRAtN5qacb9MpPqLUZZcTv2JfZYyLvmHrDZdd",
  "key13": "St2xATxwe6AZKuAv1ZPDmUpvhEhkHVH6sE6kJjssiEgbxLhuUK7Qnzhe4uw5wNmeBdQwGymJdYaM7XzYnLFSqAs",
  "key14": "5PbqacNndDQCdsygGt1xJZF84GxU9RGHXqHrSgWpfD9p7BGdRfL4GMjLZy5vFCRg9Kqt6ewU9kE7qMSkkYQfk4B1",
  "key15": "pTKFggctFbuNJ9LD5xbBsuwfqdyDLLbLyj28xbrqsw6CYXa7NA28UqAz7vZA5jpyJW9s4Nn6gxLGTQvMBZjuvaz",
  "key16": "334zrdMT7bUcyGT5QzfaSeBjGZ2xkG24NSLba6bnvHzZTAHbtBppUcAEUUskn6rQ9zvPwnT168nAf8wK4fXQXx9i",
  "key17": "5fKaWAftRikHcfJPtmQGc6GUFaDKk31rNawsHz8ovTMKYtc4JggAFwXH3LRzjchGr3EL1XMmmqrDg56dNQv7zyZU",
  "key18": "aRFiFgAvv6hxErMJyYiuKUoZNCfpAXDdV9YTfxEavvyqg1YYpU5y6cDrE9ztSQEpjDGhDMyvx8Rdk2xUDscbkUw",
  "key19": "4NPMckd37mNwspBbnceMgsgxydayU6k1JaPNEEDu9TW7dYi4UZ3DRwQtZuym7hu6VVsjKBxRVh3xC7rk8hjck63h",
  "key20": "4tgBYzDgNR9cSschRTkqD5kqJNnnsubHTf4ShtejhrBYDkz4LfHrqAznzVW4pHFdsa4ZqqoYyjdAmu7NcM3qDvU5",
  "key21": "22cFBoRwwtXiswEvLassHT8x2u3AuvfNmLu5b3JNJNMbdLjamxG35E7pEumoWXSA5HrtC8HJoSi7B9BAY4d3wuTB",
  "key22": "53127pxeeFeRDjb3cQturY7MF4pm1HJ4wiLcA13uCQF6A9cZqTuEy35LsDjgm4oShJkjrS82mGmKic1LU21AWBYx",
  "key23": "dCApPxgVkaJ5XgNRyKBC2oTgV6YwQwsZXZCMrjABXX7AMaEZQPK5kACLENGFLFwzTE5t9ufQXCM7mfYQzZ4kMP9",
  "key24": "3cuoLZvRipGty41GT4SqTT4V8SvAv5fQvbbfLxC4hwmiX6ibunGfAZPYjBCyK4vehzWq2ZUrNzSzVFMhpPViwMZF",
  "key25": "5CNrLjqxkf6d7xr5ehB3m9K3RYS8Hb3Hun3PAd9Zf3D3HcjEpnfp68arMMsXyKFdREyRN2NHqCLHT9jbVzu8Wax8",
  "key26": "2MJavtjHFANAcfm3mYJKoFkohE6XWNydpkD9tdvFn47rQFudHJ85sv6EfPDAG9Hn1LoK3zu9qrkRAHJXJgV4HZtn",
  "key27": "kSn2W3tT5Mko1uiCXG6rxtqUy8ehLVrwJVTyEBgSDhM1CXnY4N8ZgaeCj6j5ydo7T6tzXqBGK4aFHPGhmMhXWA6",
  "key28": "4upNba9q2a8zHokJuX1BJVTrjxcGRujZirwo97q36CjMCyrTwDBYp4sQUo11ZFqB1XgUMCygqm4vFAv7V4bBYCgv",
  "key29": "d5ocMA9T4LuqHV5svitQmwCn6G1fVjCqMDRFqET73NAyXZzwZj4g7PCJSJZsARH7N8hQk2HHBrWpqbwZLUWKDDx",
  "key30": "2Zgqghrzui1zq9ccobZNu9fVuBNrXgvhBv77W7aGgdAx6QBa3r5wdDexTV5VnzmCj8EBKstUGmtPWh4qhzNpHmL6",
  "key31": "3eRYxYHgfLstrTXPBDcKwHSk5V32XvjhUUNyZMFtEDDaN1rfZeFqjBD6QNXAfvWz5ykSRvigPhESoHc5uBfZE2K4",
  "key32": "5cmWA1mvudsdbxUjXjxFrEv1EjkhYmTQJ3hzNHmk6TJCmXbaEFHGFB2fGLDzrSaM4uV5p4zMLR6xFig8d6CgjegP",
  "key33": "2y5VJrqy97n5jJCEfT8ZZ2CA58RipxZs9Aq7naP4LfcRWQS2e3R6JtNAQGvh64pcMTBZFzKndCnr9p67UgC8DcSo",
  "key34": "3aVRDCPEx8HkchaX737db6vKEUUL3oEBAejon1yLUG7cwDQ2x7tVmpJZ1wrA5MnZbie9d1fSAkLf6GyD7ZXxgR4i",
  "key35": "Q3TMRDRdJcDJJWxRFChGhg7xg6AFJnujsmqPscb2k5bWuXaGpJJuBRFRvBcP1v2DqQykzznJMpdXUgVkpucqA5R",
  "key36": "3wDTYMEyeN9mxLX1FT6PkHZuVJYDWRj1Gn8fRRXjuYySvqXXC3C4XE5QLidKhEdyk1Yi9zMgfZG9Hrg8dcvJfKGQ",
  "key37": "3RS5yAAhkbqPDKNWxgs36qcit6XE85Hax1L4GyC3Pqud4DLeWsDNuNEjhzYz6Gsot1NmtbdaifKHsjSGqt48ZiDQ",
  "key38": "DtUyfGN92BQ5N39vBM7fY2ucMW7pXrW3dM9LLkfcXJUpEcauppEYtVTfptroS1e2HtKc7mL6GegXqYGMicJGia1",
  "key39": "3nfXtwSAdFJHoUzrUkDy35DGFWTAx9gfgzSTe7coreuWY3VdLy6VeCABQRg1QDETPk23qRh63WXttp36jGfWDym3",
  "key40": "4HM5yXTU4KPkZhXuKZrAXnE364eye7Yvd2TnJps1zpNornrdhktQxeGRefrbrgpZx3DTJ9egC4mYfRTrTEPJQgaN",
  "key41": "4UNYFUvad8rnhC3riv8jeUF2WrSxzxDhknsGQqfLrMmoreoVHzYAY7D7VkAKfZozWwwFATsiCmSLj7hSQV9RcUwF",
  "key42": "23RGrUqW2PEVx3k82QQTCxNZQRF49uaApmzaycrhsQgPPugQudYUziyhNHnsmWGmjrsdDa2MR9qzMGWfF77L7KLe",
  "key43": "au7coVbLuz9PoKAXmgfuyxhBaFSqCSzTXkwR1vzCE5xj612bMPifWd3jBiQLXzuRbNVbHsX6mmrTWxKo73i3K3C",
  "key44": "2pVabYGLVSZUAkxtyPa7wrdPJ3aUtexTN8Y2SfxXofFtbcv5GxXc31xCa6a6rsFmjvEarbCzsZYHsmX2xj4X1bJM",
  "key45": "5pNMuToaJwY5mR5kFXDJfXYa7nQdDRhDundBuGntkeKXhdhLjB2UAnrhoxL2VCKVqQ13YaMkmAAe2XsNq4sxfdar",
  "key46": "5edgLRNYgdEZoCTbiYCjvmr7uS6wcKB4K9zk8P9kiJX8cfUJ4rUnhWvkHRLKpJTVtwR78ozcV4A9D7TkYt9xVQfh",
  "key47": "JzGYcJhdVdbd8VA2AE3BNK4JqT6dFbFsV5f4v1ZhJ29m87cKBSTP3qA31ziugaf5MejkP4fDM8UfAAiyheosdNL"
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
