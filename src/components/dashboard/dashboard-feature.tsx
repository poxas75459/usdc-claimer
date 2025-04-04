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
    "4oQeaRijhuiUYj3ANi6vKvFJnCbDdg23jQwg6t1DtXCskVwdzYbeL5s9vu9sn2D28Ktd6bkb5bKvvi49vT37XMe3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dH75PcWKACMzHG3LPfugv1zqhbkdUrH5Tphha2P8SDb2uy7CNbJ4tK5ZxwEWY95BfBUJBrban8zDa6UC2b1SPJ2",
  "key1": "Yp75BThHHjcJKBuEeM6wny7dHXK7A47Mzhh4pAPBSqa1iGg4vX2aaynuYzexpVJyr4iJeaZzpbaxEudv5eBPYUq",
  "key2": "4EEij3zV9JkccG4ykxTnoEwKFfts2z6Lp2hsj4anJkLzeYDxaBnAQVoDL4iU3ywzyLqEJ2Sn36YwcPYA9WryJVrH",
  "key3": "3J7V4AGREXBcHjh2mrnJAvQuF2dWZgzvFixpe7N1xRqGd28DqWyW8uvGLiDfENEQmHcnZuYao88nz8cfYKBdkiDS",
  "key4": "2kyDHmE968trXUUWae5FQZqrFzDKFgqLZaXUwe9hUVJyQq7ULrrkTZj9RHzJnriXDDAr2K7UwMBjtsJDjiuiM3dH",
  "key5": "429k5LwZwPMVi8beRys2xPQiYN8R9CHMB5DKjuPJdwMa3vPmgvBdTWbxa7ptcQEytFnRn7BdKMXdsD2uSjN6SDkL",
  "key6": "DbEYqTyG2NzPYiJBtdckgG23HAfgwxj1HuxsWgXdFaorV31vYTSWKyNEnmSSNxfm63zHKDD7GHc6YPCm71fzmsx",
  "key7": "5DJVL1y144ZHLzQGdN4S4YzrPsnuUJiCRG47AcvaJ34tTRtbhYmRPjte2dX8iGngzuSbSzKms262NGqCgDCrLZvR",
  "key8": "5fjqctEiusgBPTaqrrFeCowF8D5znwxQ83kNvYNRxbbppzH8MmPMjXbvvGANw6YR72yNmNX9kjZXV7pcxGnmgbVR",
  "key9": "4SUsHcz4KzFYFsZz7xGTiFMuCst6s1ETNX4HKj8xq8uNBm1EwVRHhnSj37yWQQ7ZhV4n7RK317TpwuVAQ16BxJXA",
  "key10": "3LM1hpkTBcgiPGeVe2R7rC33a2ERE5SaWr2JF3DXWDyweFsPPgRUfrtTmjgYkBMCxQbw1hFmjfcSGfTpZ4ZCTH9b",
  "key11": "tSrfNwmxriHS6nsXFw6MSaxwahdKWhLopeuidQg87vumeN6cbcQdsnggzmPU79e4bLWHXUhrtetZSXuU5JWYQai",
  "key12": "3uqSfAFCwmGM5to2kmLQCXF9CuXWp5wvYdx1m4MpS6NdiRbnEqFmciUCZJcDTqDbMoyYvsWpP7fAn78GzjeqTAfT",
  "key13": "om3mDqBhPDkXwS9UJZLnE62VdoCvvprHbhCuoqG7TejXwdRHRpVc23w8UZ7LrYLCHPeK7Ai9xriJWBy2QtVN6qZ",
  "key14": "2nMZRjJ54ok4Snf32VzxqBkK8cR6PpoiBUwi2BsFcXdUyvAzWZuVyeJsfV9HHkNFnN6qa1PLUnWkv2X1PGCdkhwx",
  "key15": "DkmiUnAvdMB2zn2qSgryqcbKaT2EoUphqKTZabc46e9HVxMJGZo4xYVjouonwEuqiXEmzmU9F1m4smc1gtk1x4Y",
  "key16": "3RND9i9btE6vBqpQ4L3kd8aJWr9ATBmaNizFvEqpeFr7gBvqvZabnE5hKi2BfoT8NiEBoP73Wy3V1Gdu9X1qtw1R",
  "key17": "47WekKEYs4LcwmxtB8gWMCQFFVS7ipGGGBxXfRnB8LTpwEQrVcMcN3BeRKbmHJ4h6V3kGKFoLbLiemrC3Vq9SqyA",
  "key18": "4Ww5yiV63EfsTXpQ3RdWvkyL85nNiJ4Ca2PtQkwz1Yt7YQmjhZoPsGNHsSqe3MNbJkGsZB61BnzfjdsyUMpaTzve",
  "key19": "543Lo5nYK8oPBhh92vHCnSLQ2mjpDhaUQphVR27rYRPiPZk2quAo3L85CExyqQoUSo672iah5eVKxntKcAKdybBf",
  "key20": "3hkZWGRDa9wBfBTVcA42oNWpUiWz9CfkAaLXaeoqKMcjztntVjZvaobZ6iF76NcCDWNW2NghaTM7Fp9veCXMVqMv",
  "key21": "39iCV2RMf3zBKKyKoMLRDWNMaN1uWtYUZod7pQT4qQUaZzYXFfPcSCZo8qap7r5Ru7XEJvpnaAnzbMoUu6v4xb9y",
  "key22": "HayDtLkXaoPD2tcJ3Js6iQWAbBE1GyHXtAWVBib4PLrDaiLSADngsSK9viGtrdP7fGabtjpG54CAZ3DmUBAsG6F",
  "key23": "2Nnk7hCgLVzjXYPPHP763EGuLhpnrkhxx5dhNkhTG7imLcfhoj6PQpb7bEq9Nzqi84Sx6h4qotRgp273Q7qbi9SX",
  "key24": "4QULhkJaNWUyAyGGvm9ekoxC4HpbrXmgoS7a3XaXMAuzPjTVyrxCvFe4nekNW8XQjU9xdTJr7oPWJNCrvmsQHEi2",
  "key25": "2xGHedhnvX2VRxMM5HkkAposmJ3CafEDuN6a6P7hGvgZS12nmVZbMXJSbsuuSigJoCfpsicFC7jYWNhkcvJ3Jn95",
  "key26": "TGJmSHZwmsy4JDXXRLX6HQQb1NWGdpEgJ3HvmFkVnQgywhjow1xgu1voVEgGV62Z3ti5gRjwGCyApE1ci6CTAFi",
  "key27": "5hqQmZV6PSgjTB5xauCN1AAjnkFbvaDEnddF4T3ztMHU4AR3nuPq29LWrn8pc8JbFGPWJ28VxpqsXz3t3B4SG2Nr",
  "key28": "2gpj75h2YcyBbNqXSRSuCDkWn9s2fTjKmUrtLXaFZwYARPeEBaWkAz4PQWMWVzkWNpjvKkgdFFXXsFZrVcwcJYqB",
  "key29": "2q8JsYZTSgTmu3UdrT4Hw5AMnPZJF5wnhBsuqJajwNbojNxJpVT3J6eLHPFtwUrMYQcBc9aEkfiD6LRoxr76VErn",
  "key30": "2RcYXLWK5Zj5pAsXx2UXYpMVSVVJcAzQwo69voq6iHdnqm8xFdGqYn9rWd1BuXGoQbEqBdDTdgiSsx29EN1H9Vi4",
  "key31": "5dUdytk68S1dVzfquPuJgnFcsCDERzP4jgqcVjB86SgDorYDj59a4WwwxsewSNRRRQ7EGVuXnc1x9rG1G76FCFBz",
  "key32": "3CBa3gYVacPZBo3yc579i5Uqkdnnri5m7XpeeM1AScUUP1iWKj5P58FxZmfh39irux6bRoD89kBwCMzVhxjWkoBK",
  "key33": "8SgdniU8F6QUs93zbaXbAva4HC41xSgoTo8WqTEcA6t2QhkdY127mscnEad8eZ7fTGdDMCCvqozYFj85VrubXAX",
  "key34": "41AtQy14fWCAUUfX2Ly9usQWRCrNLXuZmVByGuv7UR3whngFfyjgzZdQuu6GgKj7EUSSDfJ755RntqQ3yDbK2Eb",
  "key35": "4wWYrTi37DiVgdZhHNCa5Xj98RW9WhV67Jp8ZPbhtAY3LxwWaGVCFcECvMa7ZEbkSGH6nryAuUZRZYkGLf68eTgZ",
  "key36": "4YseaEnaipDdgzHnP4mqhdSvZ3t51cJ3C4T4z7dW4U8d5nCSTVrgAJUEAK1Tw5jZVEmXygS8U5ST4WUWfbyqHtwZ",
  "key37": "5qDGEuRdHa5NefgdYPnhdypquMu81fnhpTghPDRTePC6YXvKQ58Ftfbon1DgSqvfnRyf6EhTsw2MM29Nvq55Wrfs",
  "key38": "232Lv3zGd3P8vFpPa5HkSA5Bj7gWqFuVweo91rb24e8ufz5psW3CPxnLKkJ8NpGpK4YwivYNegAnyg74CKFwPPEQ",
  "key39": "2byGnzBmCZ738WcTgywcghMAikRTKtdPrtWKmutQRnPYoMDmoSDRTf9QxoKrQWvbkRLJyhQAoCoWphqVu1fJffyK",
  "key40": "47fAPDg5fiGvPWcFmkqvQWRJMPPxkrzuPqvigQufA2AUB7SUjkD1jtPie4F44fcCDaxvqujesZoi1g9AvesgULxp",
  "key41": "gaK3TmT7yKkEZoutsjeiXLNg3u5WmtVkfurXartFDAupXQ1x2SczEfrrjBCrBCbWaBqQuQJt4HNcRqBD3fhsBAa",
  "key42": "4qxWTn3FPoE9zSjriJ4uXp2ESbziNDaDT4uih1fWRqrzMpQZTpPbDKEj9e8wfBagiAtHdBNcDTvUJV6bx17MQsmp"
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
