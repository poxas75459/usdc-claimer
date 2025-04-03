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
    "Breniu1RH8C8KxwE7fanzg2aW1yjvnXMmxuCxPBqDu4HeDQdX8pM3NeqtCL19jLMSZrsmLogW4MNwZCfvLpJ8mS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fpz4LXGafPiKhUSgLqXgQcaFq4QffaJkEqoeKjUJXQXdmdEvM9Hye3GiuSXTAkKna5ojzb22cd7kVoNvUXZxTny",
  "key1": "VDs7aSsc8vRKkXQWhdnZLFMaeSXGeeqrerGM5kp19H2M1WQqXrUDyvG1NzACXLiuLL1sGtReCisbWbfpx5iwUc7",
  "key2": "LJfHRpcFPowA3kSgHV1FZXA8wQMdjZLL7zFydJzAfNptJ4Z5AJ9s1pPbPtpb7qUGTDQXA2aEWiNWoMuqt7gdipA",
  "key3": "2XtNV2kXQXj7qjTduztc9Tq5nDAN7FeP1xRPxHuCP2ZTWos9EDeiNzQ8fhu7fgfyFc8rKTYV54hetsffTRxcLBSS",
  "key4": "2TsGoeEerudJDJYAr42ixBHfr9bufFoJj3CBhghqtEfehg7Gs8epqC2vc2v73pFaqvCoz4cBMYCE1HDu2VKgz4mm",
  "key5": "2MdwNa8iBErVyvT7eXuXBK5uJT1cXuw1S4diJMcZifEUUTNiD7EBMftwWX9A1cQwuB138RLbd6LAPEDWMpnrkqPZ",
  "key6": "2FBQ3SKpSbzoc8hc9Sc6YHhP4mahGC6CJ2Hrf7M73j4aj2wNG7EuMUQLMVah59avEuQWaRYKPXgaskARoiwiAwik",
  "key7": "4jT3Vrh3xEVjEkBBnuwvn68MJ4jiYFRZPpgfwy6znjPdetJuYasHYH8KipjU1yVf3wC1uP5zaTpTraT8HUcWfCuW",
  "key8": "2Q2dftAKXayWJqPYzVWz2Lrmr3ParSkQ4ZrseBcvda687UeUXRgPfBoNYXoDEbcAGeXepmN6NthZCCd99UY5WCmk",
  "key9": "4GL7d91pgLU9PrRWeSdbtTLXSvXV6sCXVHtQuom2HUShFsbLcxRe5fZxYKp7hGeJr31N1A31ATLvUuZo9usB9tEJ",
  "key10": "3VU3F8KbxmiFb9Pkg9hUbem2jMajdyygPvNF7SheMALmcTPSxx83Bn9jDX7iQNUdZmT2YTVyo1KkMuXyoHbxuuLY",
  "key11": "3wjyMrryj47Qw1XwdyeCo511pD4g6GHG4pyGmWXHUDf6kYUT2rzhfJBXRY9DNLcymFuV4HkN7dWPSsmYmJMbr6V2",
  "key12": "4p1dxLNt4bg6He15NpdXo7HgVynQmDnXFnzbj1Cefguqduy2Ppux4SUH6qoiWmUficYJ3CsYA1tjBymgt7t4DjXs",
  "key13": "2ZPdbVRL8Su4JcwUCxkjMhYqaSRYewzZuJwzLM1nUDLTHQiucjfZMTyJ9T8RGs6x8iVdFqMVP4UVW5xAXwbSCK74",
  "key14": "KjRuGFbnMAZGp6yYBkEmGayfLoKR78UpLWo3HtuxqwXHywCH9mfJCPcEu3fp4NDnSz7aqCD5ctNjBWy55yj76MX",
  "key15": "2UtoLHPBR2PupQLLg9WjbDGzU8J5hb2kCvq9YsHvhDgXqr3zSegBwHh7go7gbRtrYVpvYrVsjYsTQYN3edtM2YNn",
  "key16": "3oSGTK5c7vnDXShCMsaxV4EdraSr21Rj4kmsS1tY6xj9u4np8CYcCUprqAiMau73VF6XDXJ1artC2EoL7M3CMevd",
  "key17": "26xNxYKY6SpdJJ8UEXgZjBcLb2VhdsFYpFaoWCv1WQxP884zu8yQNzcuxYDfr6D42PDFjC7zH85YXkgdKmUXKR1E",
  "key18": "4iTj3aJTKJbrg7AdGySUtDrAMorQMHJP9sn7kzeoEUnsQFZX587Y1W3vSrvNHEbE3Dpy89nW6cM2oEQiYttzJKXi",
  "key19": "3d2axRxsTcgnf1qDM2YT9TuLkJ3h4b7fAVpCW2oxYL5zRzotFViMPMiA9vGDi85CvRS8hstvd4gTdaiwN43YMb4E",
  "key20": "3ddivhLNwjRFkY4nuayrrgoXMj6nX2V3LRbVeRPNgSXcnTiAU6o9DeEfc7tuSgXUbQXMvbT3XCgjyToJSfwuWe39",
  "key21": "5veWKCbAQWeseR95tFBCy5fKuapfseZ57mBVkgmJh2P65s1FCFRjK8tA1J62tYaeVA8C5phktUJ4pTdv4Q9E33ab",
  "key22": "2jvpmsU3aVP5PKy44otsK1iJ86jLymkEfn9MwkvndonYtNnLBxbsHpkheaUNeKa3JrJQAbApCiHfMKvAr4wiHLTv",
  "key23": "wf2VM6mV7qfEHn6GYr7QTbrK9gVASUhtNJTUa93d3bGJTNsFFr2Wtf3gvH2QH1uUYsXLxmQQudeVnv9dF2nqATP",
  "key24": "67nnQKQThzWwHAH7UKHBPFhBmdEgAATGrvhna6ztYEwCAH6rNzTTdEEYWP1ArAQLY2fbds4Q4YJQVJ1hu3bBbdWU",
  "key25": "vWGYBtrw1SDmoGziTrd6qTt5Hi3Zu6FHpL3Fy2hQH3Hmd1Au6J9KdvqhowcFASJKHDwGeoBZyWkVXF6Uf6BA6r2",
  "key26": "4f7yQwzPJRWY8vrGrsQQBbY4TvZBGw2fxz2K3ufZLpQgHdpCJMJKcwEJNn8FEUfGEduxiVAzUN666Z4yQEex7w7F",
  "key27": "2gDjfinX82AzthmDtEW3VTXywWE7M5SnUZMDP9LwRqKoXz8Va6sRwDztqVjFxdJFCyKXQfEaycfkzQ6JzVz9iHxb",
  "key28": "4MgG7gwDmVL7GrwiZGTp5T1tUrsNBFe7VKgeBc1PDo2nec2yh1WGWysX1Xoedd2CnnErxnxUKcj42DhxtdY5AVn5",
  "key29": "2X2qBm15ymGJWVxL64q8kjnfaxRqVnJdz5TCJ4KDLNhDiFVLcmkkuHwTMC38kyhwnwM1D7w75kiBgvjuCchotLSx",
  "key30": "5Zrz82epZ7VBTNhieL9xpaN613cL5AKGM4FSGUYxezxkifXtquzyWPyUnfHn43hmb1iJk1s9fXaQSJy2J9QhmoDq",
  "key31": "5iF1rs2PCDn7zZW5Y7L9iWr4m23Fgp974SqMrbRHeEvpvE3gEWXEz1581ZcGcvNUdCAZbzsCPpY6TpgVndzLgGZK",
  "key32": "qrYNX9YYAS9mg7dfSQhLPsRU36yqk6H2NAy6AimpueFyoD8RbkuHJJ2cQRBBVSrhw98mLQj38JAQ6rrfwCMjh8S",
  "key33": "xhscFmFZs6VvEkjQuP7AuHWysuE3AQ13DLqvZNNkgeFDFGZ48QfJtjRHqZkxkVVqeJVAX8quRDrZTzntqtXr4tw",
  "key34": "YeUNai3F8VmkVX64bqkVfhZyq7KBLDvoMdh9K5eMC922v3ZkzPpLj9XQatAaVDResrETRLzUi7BAMhF8X2TZA5F",
  "key35": "edu2CDD8bjnjUcDFSpcNy5hgDNqtNxica4Q31UTknoRYxn3tr2h28ZDokLGQXwdqfY6w84uzST3tFtazFqY8LJr",
  "key36": "3nU71Bcp4yAhDJqiMRbzaWZvaMiUbcgCAu92k5kmZPRmbhYZ9LdZ3wuo7Xg35ZKdcko78n9x3DrUkzW6CfHmpzaH",
  "key37": "4EVp2gxGvUSZPf8u4fZbYa17fBYf7529SdFW7Gc5FRyCgmsF8DC28e1SmooEZuPMCbAD66zRXvs2jFjqNwTaRMD7",
  "key38": "2wsiaFf8tvRxBPCdbEmHzAiA7jLpzBbNJnQvmpQfT2oCMUMoCHiYwAEB2F22EJ9uFnGA4Q5xMQFHYNjaWUM55Nmp",
  "key39": "5ULWHAxETZfbq1pDfJmWheQchaJHSQySheYDpWK6JsJY39bH9ynB8uxccKSEB6dXob6ABQZSjYNQQVFbrJrnn3V1",
  "key40": "2Nc27TK2s6RJEUDuzyAJT9ng9yX2JvbHtPFCQPN2aAuLdQuKXHq4PWg81drQANWy4ApGFdJWY3AoLv1viTUBw8if",
  "key41": "26qcCpB3iYTNpD6oy4VaGpdid2m2NkbLnvBNKN2LverYi2B8uX35uinQuNpxVp1iniaTx4xxGzjrzSGe25fLNP7N"
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
