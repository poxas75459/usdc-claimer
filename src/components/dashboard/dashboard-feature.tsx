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
    "3pVL32zuNRAYxZbPoAt3xysL5daCdEgBdvegG5KnPWVBLoBdCDa7Fc3ZDnhwLXpZnf8ayg9b2LCFT5dgSQqapFxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41mpT9fQpjc15ZhNBMbCP6zpbhUhDL3LLKSzLc8j6ECkAr9HPa4hqH9yoCRgyhqFFFRUqkZM2uUVxRNnYvLtAij4",
  "key1": "qDDkvf5YNThRvJmQhT6c6wmUv7twyN8f5ME2NFp3VGb6cgqQ1EtXA1HxXdDdShCyoL1vwc15qcWcHnmHx2Zte8y",
  "key2": "258Uq4XizcobTTpnkvLXxWByu7N4EvTLpgrDQfDz4DHoauFobZs2YqxyoSfP9hKdcfVRovNe8t22yoYFg4YsMb9C",
  "key3": "4Yjq34yWbCk7t4wkHJU5WDchozD7NMz2WCfFWbP66otgoWd3UWbkQ9J66qYSVVPfdcpx81KJsUXAvyGUvHvnVzaN",
  "key4": "48bUcumnjhzPTPQLVVpg1UBXyk46wF3Zt9bNZwJ1s3taVoLEJ3X5iYtLhTXMvaCVL2bRtLc5uswywmT1BnUGEWX2",
  "key5": "3tK71o3Hz2riTrrqhXrr2fg6aLRtFyj5RPWFvnsSunNrLPTTkeTRyW25rFVh2S4yfUQqwf9diCJJgXEM7zsauewU",
  "key6": "5sF69rH765pRPtvT8YLGgEKMrBnb1vjmzAE2vSPcGbx8cV3VimDh8Gsrg3tWKhD3VgeGL1obwdzVszoFqjPBbKWy",
  "key7": "3oK6oSxB77BTECUFoaUiFBB51KV1pmKJ2N6hurEfXTohrpBQLcAZw44eiQpzCjZJxBsQRHKiHsE9dNBWyyJjUYWW",
  "key8": "4bE8NAuJiCUfv7DsoUkLDqJdY1yk8EVBwStgdBetCtYo8kpUa1dxYzo4Jzs2FPV8M8gEwajZQvkUQxnPrzEvxoYC",
  "key9": "89tG5Kzgw738gHoje2AnHE6ih9mczcCoSUthh7XnSqcRHxFTcCqRuJYn2MaPvfw4VB1ueDTQkWQjrmM4ssNPmEi",
  "key10": "3RRCpVA4ahJY5bFf4PNPRSnhxDbFaUmmt2LCo2NyjWTHaouQBSWzxbrfSMJ4ByGKwkjaU9Z6WbQGK5aaGZkJcPY2",
  "key11": "5nBLajmkfVz8p6tTPiJf9547A2K2TguS4sMZSCneobHUi3pukEDfmpyaeMDfYqUmASGQPBwNPAzE7WiXCMk3QepW",
  "key12": "xDcQktBk1eEtW6nq5X4mAxjpDePCTAXkAAP1D5ibVgsXCT4mBVBRxWQBMZwrj5Xke1UxMKZ4MXMQ5GKRGXHHbFM",
  "key13": "3kuduUwSryhMZHEXKiHHNckqmxkvqJpgovKuR45PZjTwCwksCZ6RzQpK6aTgoX82uW9FGEhk6BzBP5y45hdZmhy9",
  "key14": "4oj9oFAjQiBsL8cR328xhTTte3c8kF4MNx8zbdSaepZ8X6VLtq5PsHZFNxgghxxwYpY6yqRaL9iZ4hkuDijartv4",
  "key15": "4JQNRUWwBTbY4fhXG5ApibtxnLL2dudMHGz1uJNVJxLa5uBk9TyatwZPZMF62v9RTNxWETtoUhpNAuHjN7qxLHzM",
  "key16": "41dgV5g2a7vsaqHUoRAZyQ3wKzAWbjjouXRgmDD5VyMuLbwgNsN3GYoQRE1AVVuGMYu4Rv1AGgcGE615LdGrAqaN",
  "key17": "4LTjdKqmrvey2Yak1Av7THrreWARpnHJV8tNLdwSJ4hqrPs7ZC74PTZkpVH4sCA4vLF9pgYM3i9Y2XDWqLr5fLxS",
  "key18": "FZbvU6aNoiADD7vR6nx8GnBYqQeumXYpyRxEkAwjEsbwEgwZpDKFWNqZoGYGh3hdF4AMqtdQ4VD6oRX4PDYVx93",
  "key19": "4wxwFvKsGvT7r89WmoJrvChaiYh4yu8b4nrJ4zbcr8jsmZm3hCmnFAnsYDGZascfzEf4oN3rsohCUAChXKtuicAb",
  "key20": "4UVfthWZC6BE1svzpVr4mq2VxAA4terWjtXLCTs3HxgtghJGpUmyBtzAmazCvYv8GmdDacgUURuFYWf1gakyLvoA",
  "key21": "45PufAsbujr3sUSBPFwZU9rJUmoBRYkmog3B3EmatVsqsF1vgT7tJxgmLamCFigcZeXGafTFDz2MrrxK7ocWELp8",
  "key22": "2guqB1tpk3u9b6xFge9cqs5KogRgbG9dPrSVH6fpFKSj4PrKBmKYFLQ5uh167hRZMd2CixU2dwXzTmXPHUrKrmTH",
  "key23": "4quhx3Uk9i4ozEUijxPvMe2z1KKzhihrWFm4wSeFKvBGKTAK7V3vQoCe6QvkiEXxNYMT2rdxT9huAayfiXvpViWc",
  "key24": "5AxzrX3os69zyM23zV1Nk4SSqE5xiW1k6GEZnneqR5dQ3Z8dogrUwmYWvrQh4Vr9py4QWXi9xhaKGDLZMu6JDjGh",
  "key25": "5iBQcHYGfPRZSENcLqhs6CcUMWj9iBThCCGktYY3VqBE4ErKKVDkFv4xB2t9zByQU3g19sQzVioAEMeY7EEmzqAo",
  "key26": "Cm2YgLR63jtxtszmtZk6JGZhjvadpf3F698AiVThd55FXsjbo8EFGdLySHsxUANVcK62YGVZyj9Qhgxe4uwwnao",
  "key27": "2jzR7KmkRFsUS38H9xePmUowfwyMziNNtjjPHWr9jXTa1q3WKAfNmJiJWadxKj7LEhKmjFJb9Hay2FZpPY59QHpQ",
  "key28": "2W24MzUtM7CcUkFmLfzhxosJKCG3JqEvntb814zgb9EBciWV9stGrEzt1jYibdCsDHpzWHjjNKEu6StiU3A2g3mi",
  "key29": "5ediHDFgAdcb4yfNCSW1mqJdSDiFrZptk6ENvnVUDwJNvYFwyhTwN1g8jTpvJpbYJ7senpQuYmwv1uwWZaF23Z7s",
  "key30": "6EWw8suvFVxpFoTsjZMUjUxaTjyfSJngBvkdnHTUqoJQX8sVc2XA814FjzQ4ebBSQ6G2S8oCsBx17Xb1b5rE8Qq",
  "key31": "42QWBLQc6JmyZZMh9Q9h9YidMWt17CPS2S3aZ4U2cSjbDfPWS5jyzRNeRE5XsS2DVT7A45K2yTq6Ka1G9WLbCyb1"
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
