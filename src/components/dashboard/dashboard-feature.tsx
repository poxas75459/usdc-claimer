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
    "2Sph3ZqcFg9wbNxRNEuvttwT1kC8CPyAkEeRbq1KFhTkAhM74s1aeRij1ZLEuPVeSCbTDtAdYUv4zwiEsW7tW2yR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EWdofBuxA8YrbDDfaP4GD3jKcZQccBxUA7TJqy9GDva7yH6XYz1o1zMxaceQNK8X66WZfkmsNrKtofJ9fcnptZH",
  "key1": "5twae9zEmqrVWHLjUUbvkPc9efbaBnCvGjoXfxLELfX571MrqhHRXTQnqJDDTt9W3t3JoDiuAzYC53RpUgiLWbBg",
  "key2": "35kULKLFuaJEkjzRU5z8VGaHkd7Gj7KPUe5jgejQ3eqXMdAdXZXGDuvduzvKLZvHMEz566pRKjMRzbTjGdFYzCcv",
  "key3": "4HnEVg4Qp8h75nXEcUxzvJfpHXfFQsSt83Cpsg4Xn25Tj4mGEkLAhj8tQresdSVfPdKPEe38fNvaNEsKeLNvmGEb",
  "key4": "2LLFNpdLpTVbJjF3eS98vDT6tYU76kimsZnmE4N6MiKaEJWfNxPEzQJfdqEQcyjTarBW1N6fVGDPDacYoKTLbboR",
  "key5": "3TYbmvsY2xCqXeekMxij75DocVBJQhyowypYFZseB2s49Rycr8ZXjWrogGmJALYaAqceq1ZRSZWQHe6sivmcErN6",
  "key6": "4AmEUWDhBaVR1f5dgRCRsJnYbogzGH8VVfpfXKbZ7paXWZsS8GZ5rAQHvk2goMCSiZiJTTnRPAm8Ffsdmd7F7E9y",
  "key7": "4f8oZs2NyeXG5w4XHKPAkPiGhuvzwcwuqAN27L48nzsJu8EcMQ3hxu2mZ5KVjFd3mttj5PCdYgtHBRcYCGFsySbu",
  "key8": "5WxBWdWm3G5R5RDzZoAatLw3gWb6YHMTJLtkCggy5eezPWfLP9GwgoxoXuqvuYieaJ9P5h3xZGstgmfVHaGwnAWt",
  "key9": "5XUxryW9QZWSM3SSNRYCc5s9ntogsJmt4nfRLGB9zf4fkPcTpws7i8jShH5h1ztJoyXVmkyVXpUppJeXdmjdfFnm",
  "key10": "5zSHUuhHZasrCJLgMxc3uVBnpsTKuXWpYnq2E8jK8yw597paHjU4qnFAGA5yKV6wxLfoyB1UMrhVYqkSvRzWcB2r",
  "key11": "4eRzS7Do8ZyJ16oz2KUAxK2Bpm2MGj4vq8wHw9RSJigsiwxDPWUYBNDbDsigoBuK8vHQpH3vRrZi2WCLH7TvrZaZ",
  "key12": "4NLctyg4hRxRg7YHGBijBULcomV8x1hiNMjNSm7gR13SZ9GGhr4JmxLwXLw4DJAia2ZXFvUfurpnHEkPMrnd5nbB",
  "key13": "27HBeaPBpMBXWCsAbpUiohUddikJy4W7eYoXVn7vF2Vxki3YG1iR2kcQnWMw1VFyJrUrj39Tr6ThpK5rH1Q8uowP",
  "key14": "4rnB2Ao6QX3okKGRmHdgxzP7N1m69Aa4wC9sKAtAZe2Bigdt9nA14LM9R6MXGd15GyUSGRCqGza8CoQxkSKpBhe7",
  "key15": "2VV3anR5pn6PDVH6KApoGGEgF8pwXgccJqjxsPT6w7gYtQwaLiF2H9ypVTiCygai2RQL6nF3QcFgtUTcSMiNHtGE",
  "key16": "3Y579Vv2nc89mhW7k213EjPfodqBdFL3KTu5VHZJegP1qKB3ZDPAyUVVJqCQZtGHTngViDcLjYRVDstKRNGgh382",
  "key17": "3JpJG4xyPYd6dotv4jcuj1qnaXgumxYXD71mcNepd5dkT9fv9dT74BYZtcqFsFM3Q4g8cVcudbc4yV2vcq7TTmh6",
  "key18": "EmzauS5WJuPXdojkReRPCQiQKgaC2Uu9khTj7UsdPZDMrK8vHFgwxe86omyqfp6QnJc8s2MhRtszERnhiSCENsf",
  "key19": "4wwAqaMmDpjtsesxBpF3owzu3oQJng8AwbbyBmkH6wbxCna7T9CvqwFb7o2P5WHdxDHGwZpKyVzuzvZye9LnRkaM",
  "key20": "2YVyDhR1CmfXyp6Cb6ffM3rkvzgzRT3PeakWL4pvj27TU5TnJxz7qbdmwrVAQBPFRGajkrPnJ1izeQF6H1sDTEhN",
  "key21": "4k5xHAwCsFh21Q4UU9DXfXhX2qGorcLAUJTEaAXdVKfTWhD3Up1NfKUV9Fz7nPGKWR1PUgbibug95mtfxEnzP9R",
  "key22": "63zWttC1njKHC48QcF4c1GV7aUtGuBbGxrDfV6KoMg6ycHUWkpLTxGDTByqc43S4VeqL2ufKcwPq6MVkHQhL1YZt",
  "key23": "3wfjuQp5BVwJg6bGMTMeeUpxZ5uCa62ocAUYbvRj43efLuWtK2KEix6pV2UfXFCE2FyfYxvXuxUDM9iaAXx5jZHX",
  "key24": "5vtArHe7GhyRavLziYBSBgiBZctcJpYQtF1TZyAcaNycHjjS68f9tnTaMtvG4JXpuruGYUPTxg8RUQSaz4DT5SyM",
  "key25": "ixKP4FWXxSCkrirqmbKdCKrKBWxSwhswLxSHcLmD1QtxcXKVvuzzUroQPNFbTXxVhP1CSiXT4T9DutJDX1ieJPp",
  "key26": "2MWu14eYppLJ7iPzNvyJCeNTZ7cAJ8ULqqdrHxyt8bSSQz4NryxQPSgu5XFxj976euyrw1j2Moue6Wtw2Joujyez",
  "key27": "fC6H2koRBCjpuDNa1Qz7Kx3BXLGGrzD8KNACFHSJRXGLnySsy3R35eg3XdUvzTzY3XyGSkDRTPKBp76hwyLFHte",
  "key28": "yRTsHEDFpG4UDaAr6D9YGLFhDSbTqBY2jsupFLwAsc9ab3zW4p3dvKqj7z9EjcfHctLbqg3xQRz2kHbvuALN2Eo",
  "key29": "5hsJ3TNzziokdziSAqQuHzutVyKFXBbCrhPuRfUhBwmdLBjvVwQWJQVbbdtBeoVGwgbmR45ir199KfC47Pec8T5n",
  "key30": "5H6WTjpUS7uRE1noUHzAYnkrq58yAhLz8JtKkfdrG7hTTqgonZ9X6BPJHhtnqJ1Rtb2AyjVAMxEumKWqw5CGWj8g",
  "key31": "3LtZG3a9ZKwVHxekuPS1dw1iEK5mJzft7BEpRPY9F4n2fCZ2ebKt4a3iyzrWLo88eVtXLpmMrhKJ37MECu1VqGTu",
  "key32": "29smq9uBJyQ9GeA9v1ymk9F7V9i1S8j6Hhjs7iNrtaSCsZD1A5CHPusCkeqqbi1B6yh5EdbUQ2eWbxxzNHrEazE4",
  "key33": "5rbuxsL8VKVwnGSP1YPZ2QhPWuquCBmu68SzWt1bWxnHW9c47d3pxiPYhCXYjyZdt8JPVq2x7JY9Rv885paSGUKw",
  "key34": "4DsrwHqK9uviEzsFt9YJQW4PoPQRM7m8PPYGeMGddnZfV6brLshWMNs8xm3skkpY9EqWGgxYrK63d4YZRmBvwh8h",
  "key35": "cMA8FpeyfU51HZmQHeGo56oUzh64FqA6LsbLAYBG4kPgsLmJANM8NAscS4qJxdbcJZ9TAVp3gw1cJcyFGys1HwQ",
  "key36": "2b6aVm1sHNRQ5UFuMjJb33WeaZfTuJGKyAjzS8MbvxMarroFjLSkThpM4pTgj8d8tpV2Xe7tAYHXqqSsTiMDwfSB",
  "key37": "2i6L8bW1NA7iCbW7xVVqGT7Afb52ELd81DMYiP83pWL7JxjbyX3LtDWtWUZXh929EHNvaxTn6mXCPaTm82Y6RNha"
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
