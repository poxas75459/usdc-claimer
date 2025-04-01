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
    "NFQ9mwfG8755N8fum9cwDD34Bti8GgBPaiANEPwMyajhUhjHCfg8QqrP573cjeSM9n379LFo7k3hmFHdnCfiFcd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "veDsXNsKZYp8ceGt124arQasuFf2oJ9PFdom9f9eVLfN8J7jRWvWQB2pKkAZ1a2BjEKLwWsQaG2ZFqV7pMeMVwp",
  "key1": "2ffAkZwvQdFjGdpFKUbPN4GLqsS8H7BDUkcj9MADoNtXj9VVe45PpeHk1pgQgZWE5vDoTfoorZGm8BHUryy9gYM5",
  "key2": "5kNNjgfGHuqTnpQ19HxkZr7GVC6wDTbc2eiC8WLUxYSZa3fHA32sihoPLPjyngfUkuSKWinik7gChHwc7rBcvCXh",
  "key3": "5rhepuFh1RXvyLc1tb4KLAT9ZAAeiSGsNycJMMYcXggXcw6vUL5Mzw91JnUG7ShAQeNMJ97kSenBpJ9wEFZv1LjE",
  "key4": "2m443orNVUa1CRdZxBVhQJSEo14gr4EV5w9XWhCigAWQHfhVpVZgRHnUWPPUommHfzvE8LNjCob4xHPo3339Kgce",
  "key5": "5hCi7i9ZJyF8LwLrJ2D9T8e15CghT5BWRiJVjCAHVgmViGk1f2ZVj3ViyXgukq3LFMPPcPr4MV89W42m9reU4YnT",
  "key6": "5HLJytq8my6eAh9e26kyjStuwkRdro8sY7ASy8ZJkhTtJXFzr6e7Z4bWu2SZ5v7EGLPEd8aFCDfo2GQMsXTZAcUL",
  "key7": "3HgeXrKYhRWjhykUSev6V8EVCSgEeQPRJhGada2wpXiBvfkj85jr5tcNwF7KyHd1zn6AGkK7CkLZMoLg19GX4rgZ",
  "key8": "5W7RPVPYdGxQHV4ACb2pGhAk3NRKqh5v8UAbPKjytUKKvd3YA3958eGeWdFBaGsFrd7bMqmLobhzA1sWbhP8g1dF",
  "key9": "4XMbum2h4qz8j4dHiqpydgUNM7SeLr6dC49EmNCxz7EhZe3n4spGrGF2PUoZM9dshieARmU6sdisjTC6a5Y5gPeT",
  "key10": "5Z8FCfnxqu1mYa3Q8guVYtKwo6VLaGK4dNU2Lvk8jRBBikvmQew5HhbtH2tT4YmNrXAfaGGVidvNiJSXUDUnWBZC",
  "key11": "4nKfgtjxfme6crC1AdCe67cjgexG1cTYzUdkYJYChg9YB1LWSCXWSS5f1Ab2vduAzdY2QxVUUHXynYDspZsyiZGM",
  "key12": "4mVAh9DW34LhmQBZbkKnbLULQtp2t8GrguSsm4eURLoGSmExgBP9Vnmf3Ky3tVqGf2GCzZ3wXNHT3Qp8LenCia9q",
  "key13": "5RmJm6e4mSB22vvWALp5XkhCe8W36PeiQfW6ev6V4decXLzKbYE42boE4TWq9Us7DE9hGs89teCDjbj22eZSvNCz",
  "key14": "3YoEkDS7o2gGewPWB86L6vsJdQpFtuMyikCmuEapeVvyJgJursVYbih2UTw7YY9hbQ6o6wu9qCD9i2ZcKairKpt3",
  "key15": "4EC8D73bmxFwetBc3b2MFBxVbWfDX5AP6yrWgVrbu1nBuTLMJ1fnQFZBhVuCnaxaYW9Qw2Hp6iVYdX1Bp6CMGzk7",
  "key16": "PAKE1dANTHZ9y5vLt9v4WomANmQu3zHqvZDRWuxDWA2iYsdNFQRsijE49LcGoPgTvvriNEqJNbcZn6WuA87BNd6",
  "key17": "3DfsUi92u8k3Hzh3ddvvKRCKLuTy6UJsa9ihVb6zs8WJyUqsNEv3rDJcjdVnUWqTnxakewioJrB5tVE3niryam5d",
  "key18": "5XNFLW4tvo5aQeA1VPqgFZZSjzgj7HRkEA6A1TLqAigvPMPjPNwXs5sLChcsSuERRv1pWV5ayo3QPUFrW5eT7G7r",
  "key19": "wrGZvHHBHHk9Tt4F7cQPHrdkvQ2SdtKiPQhMoNjBJcVBc28tvCeDHRn9y1e5G3uRfjza4pGV4m7E8s74mJ2WVFk",
  "key20": "4YQyUwQyXpNSLQHTZp3Mwtd9FR4SEZW9Wy3Y7cLxQqVibjL8mxsXw1xC7CVWwE5U2WLXhg7d3Ep5enwZjP7yWQuW",
  "key21": "2BwP9pSvJRBn2GWYjCQzEnoGR9vZU2SfherNgFzsh4yKyFbpvMo4GxPT1yu3xQoDthgfwt3WH9UoFUy781MNgVgU",
  "key22": "4v8yLUuJvb1aLpJUt7PPG7x6AvHeXGjWtHfc25mYeWLx69u8VMW6F2bjUjQ7VWCMDDc4ef5vLaffkvH6u68bwC71",
  "key23": "wGPqTmRKPFjqiSkh3CqzetmLsH9qDyfXFYoCDcaExH733Dvjv3hfJXZtLLCvAbvrEU1Z2DhZuC9S3RYiHAHWuzk",
  "key24": "57MkXfb5mUcjLqNxwqQzg9crwp8f9TNbA7PNQxfRndEMr3HoTRu32VZcofmGVmgkM8UmhZcZp11EVnCqZkTH71KG",
  "key25": "3ePeWKUArVWSLw5K1xJB5xpzcMeQDuJ8N449mTcpdggtrkJzvmQvQcQVcytvy2oH9sXHrCgmPFHY4SGGf7Mk2VXF",
  "key26": "3b8fwPCuHiR3UGgFwxh6YmRiesXxmhn42kKw3TzFMT17BotrvS2Uwnv2yYNt3wW48gTzKiD1bZ3gMCn2gZqDfgYz",
  "key27": "3RvsDLmt4Sdg59DunLHMn4kV6WtvHx4qrZmi3eHDkBjnWfzhdfA19SZuwhr7vYGmWwJPqM8zsGmW9j1Cuv4jYNfT",
  "key28": "4iSuyDgHUAggivaSsVHqhQ8xCJsbXoEQdug4Y7UTqQvKxEW8VeQTFms52Qepiy4KMJR2aqPeXxraFYaTsk3CwMHg",
  "key29": "SXXy6zCEGCpH6RG31joQfvhz766NZVG89or6G744ToNUgK9y7dwXinb6Vyug7ETK126PDaiDf7JJYTJg9QmV6Kx",
  "key30": "tBkwZWsYynP93GdAtS2wqX7sapubtebxetrTTjcrF23Ho7tRfXuuJsHV5ZZMfsLvp5XvMSijJXFuWKQXnVts2Db",
  "key31": "2XoQBjCvvWSYYBSYVyp9s5BuoTetWrdjsmgbQKsz3mFtcPkryAWwtBfgWQH94N2NBDtohnvguy9zuL8JBYEk1Vf2",
  "key32": "3eDyH2XNEC34Ja3LxNnNGc1BcV3Nw8NqZVno8iGwptsnA2rk8ZzFYHW6saXkDeScNJKPKeMECptrqswQz7QT22s1",
  "key33": "crqfzYsW6KGpzyTWKixYQKSnwwq9biKJTdov7DLGGCHwZz9JcyXuuiSr3YBrg6XsXrxi5pYTZ4Av11CQEpP8EhQ",
  "key34": "5kpQ8RfDLEJQtgt3J11K2Hw6Rw5iY99ZmRjYi2cFvLED3eqvbREm8nhHhURRmrFGr7tx9ZbYnpQMSbpjzAwVq1uu",
  "key35": "3kRutv51YQCC9N1prZxbedsdFchWNhqwBbEN3AVQ1qFbSKzgDCwAgkcKQ4xmGsrTQj7VcYchcDcWoR39fFq7Fq6S",
  "key36": "4ARG7SkBCWWHN9AtHFHhn5ZMzTCxupJTUfz7q6NHZSuiyYhDXiP9dTyN5vV58zNnbWaWR25yWnYmP1f8mboVNU8R",
  "key37": "2P97aoxzqxekQ61teRVjNsx3ggHpFsY9t9fHPRagFXxqW5Jzfx9dvErgxdRSJSCoXzBx2SpmnUY2MH9yofLoHQCX",
  "key38": "65n5pogPMyVxTo5pFo2xT11bAfSuzQdnz2itsJFRbS9WVc2wXtynvv7TSFb6YtJFgpJnVZcn4UaHFKSeqvmK1WMM",
  "key39": "45Y7rmsxht7vf9H9TpmDCQHj4sQGntHpA5C1qpZB2Zrh1QJRn5CCjAJXptb2XGmk7kU5N8PfTB1nbiGB5EHYryVB",
  "key40": "3i66shamMPyi56crkfQr2mnuKvshRHFuXLeqMvmKi8hs8M5zQrMXrAY8XPmwjYQm1SCATwjGmMwL9KLKGARcnYgS",
  "key41": "2NqhTdUeE2J98ngv6bzQkJULra5J48yQUn1KHv72sNDMkfQMaSDZwmpQ6XBBqGrpm3UhCwqPcvRYTyJzP7A2SqZQ",
  "key42": "3EUSiHrfvi78MuL8fz83yEn7Fhx6tcExPDVWtuhPHaNKaWtrjZWGQ3LXfUdCukhLh9aNs1DJaoeNDFnCVCXZP6ys",
  "key43": "2FhsWpYuz2X3BWFMLzs85mVLA5ggxCFjXgowYdiXJBHF4PCbfZaX8EAdaVxTML247LfNukGq6xRPCUJWD3dbZaX2",
  "key44": "3mhWi3J3mf3BTfWGDvsHLmrTmsUn4jjBCm9W1VHosCcKqVasrCXYgTrkP5LVudtWFDMujTw8U4KpdD9GikPqFBK8"
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
