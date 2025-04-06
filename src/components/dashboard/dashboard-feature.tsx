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
    "aEnjB4gSUxgoLYciktoNRceqHQLUZ3EG3oD7JgsNSTvXkjSXyeVircxo2QF317BtkPgBqi5cy6fpJ9LhWkCTZcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yZAPAHgjweLG96r3F9ycjCay6nJWm5nmThmZUko1aKzGGipQGHcE8cbqCFHi4JXTrq2pxfNu2Y1aZTheaVLy9sK",
  "key1": "2Fv2zK1Z83bS8jSgep1rXAxTcRFW9hjuw9BLSvHKLKGRFqq5eLaRGQHZiWPQUpY8w9wWwJ6fado7xiWPX5MGU8XG",
  "key2": "4Egx1G94eCtJwUxVKSKozj5YmdHoNHvCC7PXhEyuERDRUdiHjAtX3RDtp6aN9To9xTEGPjKui7k8zWwGi1RNzBHj",
  "key3": "63e3K14RhgJHLGM5UTqwDxHJYP41UqPidXxbqM39E7uwBjAmvTWMKbT6fMMVPDassN8hU8GYXa1b2xnfrNQQkTgF",
  "key4": "5kHRmb47Yi9WiwN2sjVw3tpuWQUC9wuRcaaDvcH47z1ypUmTXXpZVNYEQq2RFrVLwPXL67GJQcyjiyQCHRz8g5EU",
  "key5": "3rrPoXaaaecmN25EsFQyEA2584C7ULKrnp94Pw3uQCeoecReXTU4PusswYdfu7o5fW1NwVajWSo5Drt1DgYcrTf3",
  "key6": "5evvFmju32XN6J3LVNQk6ZbAmBLJW99o9AA9fhcKMdRLTxEZYJHr3YbrXPyNQ48g8iLXzjSFmhgpXa7mTt4WGe1L",
  "key7": "3bWuy6cG5kxCfxxMA1h2onckgGdCK5B9G3Yd8EYyK5WjPniNcWffecKSVsu2Rmxt6qicbydUVJRY5bibwsbpQq65",
  "key8": "21MPf9QvHACm1KWGZcfKMJZ5B8yHeDDztvdMufj4FEmn6t4rdrwK93wEVrcY7BiVSKzERfmpDySfqjrYkLfVnUR5",
  "key9": "2GCSGEhy7QwWkEkR4pZrXTHQ1b8E41Aau1kSbKKtjZryr9dSRcb4sETH27QVaBMyTPPetKBVUT5jAYd67g33qiAJ",
  "key10": "5jCHCsboDBdBXo9EWuMNDUc47XWj6fCZZuuoj8DiL5WrsyaZ3qEpUKviMB1zQRCrwPUNAzghjswdnLrRWBFPj1T3",
  "key11": "35LY2r4CXW5eQuJJdEC4UgwdkkrxuE7X2qUryCMjyn5ZBiHoKzmjcp8QX7X5tUjLVeWGL8uoBshEbNJZNnUD5wjv",
  "key12": "5EzMr1Nynox7jVHUJtyLYdyXZmZ4zvJP3gBxmr78VLxSNVGwCjCiBR5wJpobzR5786FtPJRNMnJ4HLkRd18jVHK1",
  "key13": "55wxtt67tMZXjvUD99LQmoeoBNNsnrQLixVgkLNJf1Ygjp8evHJxw9L8y1owVWcidmvYY3av1gfQ9ndZ2GwToyhH",
  "key14": "5nM3MEHRaidG6JYxGj1r1b5X8snzWPcbXEuSHyPoYioK23ycsBNxJJRfjpkPzDC5MBNUUPtyaNGT6RntNJfV8f14",
  "key15": "VVXwDW6LjKP8GEq4FPyyyvcUEQJnhHFMuZruwhu4Sq1hg6cVzbjiXmicdpKhNvwSMTVmUkWQKKY1zCwbN6gNiCh",
  "key16": "YvToEDkTc2FhNdVXmcAvZvRykWL76KtqmPdvZjASsAbYzcoNHMSfBY66cTiZHfKnBmTxgYvUJya5keEkAn7Sws1",
  "key17": "tWYFoUT8NVfWn26CjcKBuyhvsQLCZL3Ke7253nM7kT3HxyfLve2Tqa41zHn5U9eBQ31YXCYZDNtK61rNAYevEtb",
  "key18": "4eLckJ7zP1yaEgV2H9F4WdPQbj6u9EmuMksR8SBxsd5T11nnnh4nNq8amPwKXX3ZF1Hvb8t6dZ6urUnS9UezN1qc",
  "key19": "3Rwg8s1me7mMMhiaueuWeMP7H5o2wpnbqDqvL2V6TCDeTNDML46aQw5E6cGsy9CcLua1q92rGYJZ2T3rMNTs1P5p",
  "key20": "3NG6YKPanin5oTVVUAR8qqsFm2rihnNodvyZTCA9bbQwKMDH3dHJ1yXScbWx5oKT89fgmsyvQFRNiWikS5Kh6UQX",
  "key21": "3H9kYepFJwoKXUrz7fbGfAV5PbbD9PCWc7kntUxwXeLu2MZ11UXPbc2NaEbvhRPSvGo2ML1EvYT575gWM48jEfpZ",
  "key22": "K6SerkaBYUtF1SS2A9bMe7LwY2WjAANHJ8L6PEgffGMy6zXZzzCeELWAfvCsf7wkjEtYB1i7JbDeroVyCWLtUYG",
  "key23": "2ejgyNM5ouryCz3DrNDPh95Yq8J3LfVHkvfCz6LzVXCMYM5uvXdLSh58SUw4dnx8N9BqMcsuMoT1MwvqTUa2HoBd",
  "key24": "4DUhhBqGQjDQca8gGvhoTEveEuntK7agVodSR4Zr6vig4YQ3ZrJDDH7NzKfQoYcsiEnu79KZtdN3hoerKuc8Eypb",
  "key25": "2finUR5sFhJV1o3XfFeDXsUVuzvRxnnXUoqreo3XhNEyLHbpoMuXRnErd4pDvtfKdtXN3kfxEyV8k9ZLHHVDXQ6X",
  "key26": "9AhvPTmcn4muVfFZFaVBstgFKmcqJvfrLAKTcF2SpC9ZCVxGYvCcvJd9cemvLGgJWrw2JWRFUck141hca1h3RtV",
  "key27": "5BiaJkP3n1v57KQBAfvb8W5VGvFsAhN9HTzFxNfhE3ggngRhL9xq551JoxvVGUHBmExe4pZB1pRexJvKsFBvC5ZV",
  "key28": "5QRgH3Ce3nf7XH2wdCoEH7VXAAgY7mSYr2M6A4xkkSC6axGUghPSQ88FD7ohTXnkv2tmGk12ymjQDoK9UhYURHuC",
  "key29": "2jhxXquaH8iz3me19xQn1xgnU2GpHaoZQ5N9KvReqpb68XYZJn9mS51FL5jenZtH65WT9i1FfAuDxaZNHtyZ9ZUt",
  "key30": "2XSJg6gDTBjcNQjBEcPq4yxBRTqP18w4L9qVJ3ememBPn2pt9fxnj1ETuBSj9AQsNfibXDN6oQrZARPnUwELkFrw",
  "key31": "43dqpxaLcDgA7KTgGhnin1yYyYx6fak3yKedUjSNiJe7vo4HLJkatRgBd1UM2VWdtxLDi7aqnLHS8jnPfww18JvR",
  "key32": "55fWsrsgveiD8HmLRz84aT5e9kyygEEdpSEvZ5CXiaSSAf4Z83UQTPz9VMcEdTkuvS4r5EVTithjrGLwSMeGHyBm"
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
