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
    "3GXREgfjhiZ3HNXsnZZsuPft9pcVn3g4vPDWW2awQvTEzo4nfV7VH4LQnY7GQrPmxVwz5q6SySizLLHAyD4yZfjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aJSZrRLvKpaHf9XrmGsxHQAgvmmVkeeMbcqjFjeFBBV7v7db6cm9x76tkU7uSnFwqegcwFwUE29iEBQKgkpTMcs",
  "key1": "VkRRq9YaxMWrCcLG3p5PzFGZbiLwKEMEznnByF54USTRB6hHAN7WoEhKg1GCeKFSJ7R4nbVRKrf6x2sE93yhBSA",
  "key2": "2eh6GbLfVxmBL4AcpqASnQ69A6qXWjo3nDizPeiAEa42xBFYSEJ5nTWKmUMLkPWSBViQgEZjpubQnraoGeRK8yQQ",
  "key3": "3w8TNYtj3f14Z7st3FgVQzoALZEWhmaPXzWYCCkX4a3jbzfSjwFwS6aLiLe4p4p5TgXG4vBLr8EZrdUbSF462rCk",
  "key4": "2jsoft2r2vR4EMMa3hSXRhGfSopWXwVHajJ5Jgg7WshZHzrprU5xcDC4ygv81cUvikQSL7bPvNndQrBiovCW19qL",
  "key5": "3nh25jFRiDnXKtp1y7bTWwPFCqf3KaHZZvPpatrG4tFB7jzBJiiWMsuXz2qGi5YqUrRSxQkMrE7gcXibFmXfSom7",
  "key6": "2urAtonhcGn3nAmt4h1p8XZFfc6jNvcrbmyFF4fekDznZZyR1FnQTrY53ea9nUAhmCdDKfGaTyphPxeKXtDZvXDG",
  "key7": "3qGf81236CM9mif2bBWwgJV5TtJgbv8nsmbz3miZ5LcNH1UghDYj1uSzyB4bMYQYqrF2UDJYdBMUX4bgW8H8Xutp",
  "key8": "3h4hHfYWZTBTjdDpS7F1e5uEB1RsS1RnF83eWBbYRkGY7RXmC1UwfspUHpmWytfP9VxRX1XkuT9Ska9cnPvZqw65",
  "key9": "5Z4uK4nzdmp7XFPtLrCBzEamXoFp48k1KNLzHgEZDXkitixgdxoh6co3BQPiAyFfV3dmBPR2GpRF947Zz1HyQQuQ",
  "key10": "5kDZNGeXrQLb5nVKeMdiFkLikSf1wDGE3VVsYHRPEw1ZtxGRLQ74ebegAnLLu5XN4wC4Y13JJssY3Dqmvx4pFu4C",
  "key11": "qg8dZHyK5544Gzn5Srv6rMFQahwMTimZrriFZaFCJVRdHcmUxd8oq4vL7nNy4D8yabQ9tkqXbEi2TvebD5Du8RS",
  "key12": "3QxXHkgC8eSmGqbXiFsH431nGwhJWCFTgSNuR1AvbEmSEthPQz3Z8Z7tsfYApkXDLbH31LAfCeZM7vaZjnvC7BKu",
  "key13": "SMZ6qTv4r8pwYvuLZZZ8FWSrvCr6dmSE9HtHEYASL3RUFdCXVnu5rwCFjwLNawsVV6SFk6Jzy8nLJWgb5nYyVf2",
  "key14": "25u21mVsaSxyyRJf7cLJ3khTnk4Xj25ccSZRVywEDCAnwBNACe2yVFsBE1Ku36yB5dvYXGZFpSyhfChNuhL48u5L",
  "key15": "3w865yKRBgsBgXktUpxZuzo5WQAdCiBvxZyEekgeBRc46WoAL1PtycMFRGjaxrDtPYb6pNq1MpzK6CKXkRwdFKNq",
  "key16": "3W5st4ChKmkdYPhhJ4CKwwngRySRwxTBT4GRNHKSxQ87xFEpw2Vtk9gnSnUPqdv7EbTRXg3sHV25wxrekZqe57Mz",
  "key17": "39EEMqtVkgstvfH3HyS2bUAmgZkokyuSSWtdtnk135FWrGFanEFA4nt9BPV8EqD7KBQY7jFrM7ioeQPn3ohRHmZ9",
  "key18": "3TXAsJGcgcXeeDNzLJmAtE5aR48gRQ24JJkcWY6PT58PW3yFU4exgkUxYfKCyCL6LrnAdzxBxeiFRKwm7wZiT5u9",
  "key19": "2tsCYnGna37Wm5vioxJwYNiTUbpbpH6ZHSWZoGtH4bZgjrEwwv5eTF8C7tWjq11C7jNUip5BykfxfmorzWRrf2EH",
  "key20": "3oPQgcPiqrzytdM3wM6vmCSR2i5yEE3a6CCVwyZtDi4x14TGJh77y5UWHb4P1Vp4xkurx4GpdbT3D7kTHu7SuveK",
  "key21": "fzZXpQ4uQpyGLawcY1ywvXk7zvPMMhBE24jwPWMKdyaseirA6JT9X3hKqRKaN8vjhn4tFzasKoQWPnzaQUZpZf8",
  "key22": "3o9HpUPN4JKRsHTQfnP8GoA33W3mZshc2eQm1Y6h63V28p2UMWtWYftBL4KHHgxxPsprXFXweXavG2xsunTTNFKb",
  "key23": "4zx4LSRiBwKe3s8EaAq8iZNE8cu9BzQvnQAzi8KV64kDeQbd7LxbCfj9XtcLqpA84aS5kmwcZrLkUoNuocPfZPby",
  "key24": "5WnNRyaN1PLKVZrySk9Nj1bMSQERNLSCz6QvTarXy1gY5wNfyDkEyg2xX3TtTUn6wnGKRiyLb41zVnuMjUoePsyN",
  "key25": "4MZ8ZfxDQzvvSobohUZP8TzLvhhbYnunQZhxMpi2mMVnHtVJDhXV8oUqqbS8jgbGSgkFS7eEZpUd63tHdFjHiHsP",
  "key26": "4qGYkxfrQUygBnvJuXWCArq8AZta15zU4G37VLWGP7St3oe3pQAxRKgeNNfnhyi9yKASnsxmC4aJRfQ4ZSo4y9i2",
  "key27": "32bTvG1DUFnnManbzEwCTkPTsyQhXDDNRay7ERKeQ1EvjB8Q4LfJmSn4Ch4Hgar4BGMBdCy9dd6GXxDnHAq9XjTQ"
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
