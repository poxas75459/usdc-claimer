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
    "45ZixinYHhkh4SEVJFLUSrRsDZPE2utCra2dMBeAnzuFukdGHhNFJnrqb6KgPASLa4bb2E3DojAoJFcnDDvgTCJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wEWTNozqpHpYvgMRLvbdS8MZv5B4bFDiqv4AQg7ESN779ajG7B6cuW491xqmW3uB5PrEyixHDx1aDGe7Gd8fJgZ",
  "key1": "DqursiNZF8vYUxRLhACiF9t5S1AkizPoUSotZKcyPeLvkFa9QtUvPpED4yXhbxPv1X8HerDqcBVFwsKye2Uj8oo",
  "key2": "hBdzDJp8MRddPf8Et1BTi8XqaDa3ikugYmDr2rcyKjptVLm9m5nU7CqbF7zAdibHYZkGBf26JpW5xwkCkhBhFtA",
  "key3": "4GXkwJAywdYkBcDFVD7VLGtJCWUvR2mG7wxHuUxta2EGkCGBqAVywZQ6wTvRPghyzYqwU5FTR2tcoMwwmT4FpCYv",
  "key4": "44FSmMstyKmvMdGuzk75ba2nKXuNX5dvi1YCaKYRt5wwcgigxjCo9mzWAUeACeGUbcqVpwcUdAweSe3TKjD33M1z",
  "key5": "2WMG9r5mNXnHpop9CyxfYvWNvVyXrYbPpWeGnqtmbT7bDztYdaLu3XUGjfttZXwdWxUdujYhQveZwHvMKRNEWmKW",
  "key6": "5AqMcuiszEhW5TpuL6L73UaPgxeT2qf5mtFsybEMHBUWscWHEdGw5Z3iUu6mafKWYqSF7FAAtr1SVX7HjQ3sMgnX",
  "key7": "5ZYPJoVfnG17LBFQAbDXwtB4VczA32zs1jxU5KRz5ntnTnxTutJnLhD8tpMEDv2By89KYATUiYm5H5BiGmZLVmkM",
  "key8": "3QWe7jQFjhor6kVZZmYtPM2kocZ3gudgnxgpG4vLEGRaqTji2aUJa8mfnctDCLuNndJpqBgHYZXvHFmB5LbUg3SD",
  "key9": "42c68Kv8MEtpUt2mQQZNGwkLXGEyPuktssRr2UdhMcfm7FLA8ULVewHaWNQLcuXUZEJKbMThjtYTWRqtXsPuuLUP",
  "key10": "51EQL5C7CeXsMV24USPzUDjsAkrn8fKRAkME1GoAuNqdHUuJPgyctqndBp9HsUe9LiEHcGWtLmF3BVeFqdwhh7pD",
  "key11": "2ziu6Ffss8VU22JVBG7cKLYEtBib8VvQDLvNqHXQAtnbmuD6MvNqppGLsEoo7qnThGM9WWqVVHKDVXFSyXFqZLhS",
  "key12": "27sh1Nxt4GpAJdd8iYXqZbAVvWfrJ2dK1qxVEQ4yUDtvyFRsDTyFAjm3CyApkKY6jSNUMKrMvbstsiMcFrTRnhv5",
  "key13": "2zYPDqEistEvwaJBFWHF95LdzyYFzLeWhHcYrhQPM2gjQxyC4v1gHQYdiVhM5YmGHV84V91vGjwYyuYvmFHgG5qF",
  "key14": "5WbuvB6ESYiZNN4tWqEnzZgYEeceNHP5z24uuJnuZK9ZQA3HDozG4KyYHkJLiG7C68fgtmUTCaHg5jjqLepGyFJ6",
  "key15": "5gU7S44rc56EaE5XU6XAYwfmwaaU1QoVdqmrfsy29joYRoYhafQP2eu3GnBnY6VGMrtoAzFP1NsPAbMbdjMeeDZ4",
  "key16": "28SMaFsJstP2eXiktMxc5MpowzAtzuQYM6ZVL7x8hM7DaGbpi5Dg1Ps1rWyLVMppsvsGtvsSKDrY4EPrDvJy4iUW",
  "key17": "5J3wusg1Knwn5QZ46TbX5b4ZNKtnbLKUjnm5nuUm7xVVEYmiayEg8XKJ6ygYNrVgewe2fRvTrYWqndmLaeyQ7FvU",
  "key18": "3yjAnK9CJoG4mDCiPkENdEsUtVXRyiocVSJqA8TMjVS3nJ1k8dquVAtHAV3umtE8gGg6vwUYJayFrTtstMSJvbyd",
  "key19": "3Sbq39r8YdntMrJB8BtrGWKJRFUzFrCmzewpbHLPQ3mtbygLhrgPt9oVFH8nHebjdLCVK1BTpo6N2PXewqi1FUrQ",
  "key20": "2FvD968Q3bpXt8Y79vfoDv6r2cMcYaHPAF84fAkYVcoAQFvaChvW1cpP2Ubxh2X8ngqKVX6LFMvRwiLsG6C3usGW",
  "key21": "55WsqhPV6qhiZ7hY7AXSjxbLKCHSWoJcyieBmGaXB8fJHiP36NQX8YfGuBPCpXiVFx6txnKv9VzSnBGHNzRFPtxp",
  "key22": "5iyj37VjD967f4bJSqfmsgZPpQnTPu2bb2EZqMnXMzbPPYc5uVJ6EF5C7GJKkYZt3qh9L1inEs7UQe2XK1Xg2z6U",
  "key23": "3tQteoreyiRjejrSUvAAHzJAZzizmJM1rQceYQJJV4zVoWrZKUDU3jiHsrjUFEEYYGbQ5WScgjn5KEsAzGAin8iQ",
  "key24": "2uArfCX7TLro23W98giJzbkxLzhpzJmkQFLNfrSiL13GfiNaiCS8P9yPQcpnDKvkmiDVGy3DgKLHvuHirKt2MS8X"
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
