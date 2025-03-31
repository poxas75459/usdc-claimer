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
    "4RPGwXMVsrwGUhtha98EhppkuJotouBucurM7NwmbvV7TbASGAJKp2cTySq5onmmHErtbFUTP3W7noMfHhjeTbFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hwU1AJ7eqsUJqXcxn3TF2RJradsDxzRme2nwwJe42b7GVTJZveKDDzBPT5TWzZJocYDAQrceedaCAJ8bysrbyFD",
  "key1": "4H8Ho6iQZK1Dxa9azqrVpssmkL5htX6jKmpnFbGDHv6YNQpbFP1ei2CNtK8mJEhgCcwgxAbgSu4WFhiJE6YNr29C",
  "key2": "5BLbw71W8ikGMVVZGtLgSTnmoVWhow21joJFiNqJuZ2pp8jck61TrriKRgNKuobMtLAYBJCA7wWu14F3FHfQxhyA",
  "key3": "brKoVu4w6X5uChrf7NxoJPgxutjqJ61Kj8XtmjLXuv7LXYKT2ADS7Ry4t7SxCVhCurKgQzZHbxYp7w6aQ3XFJG2",
  "key4": "tFonK3zNd4XioKHwgtj7RDMJrL7cvtw8qS37ckjgaxVXKtz3YJ15yK1gxjZpynZ4fdGf6XULMCunEbCujv1xBLC",
  "key5": "tEqH6GW3xLEn6E4BFfsw5T5omPwCrjR5MpS4rcnE19H4nFFeBZ32xV1MDQkELETBEVEMFAodo8vwknbubPXt76P",
  "key6": "47NR3vFa2ZaMARucd1h5oa5jYuZHYUXs3zUNeJYtjUyuZRRX2y64m7EiDveQpiXQS1WrXvXp7gzoKVyxekmEtM6R",
  "key7": "3yT8FA6ke3UrFDkHdFhQs1Zhz6FVgx9kJcb4pncUxx8TSrHRQUVq6T3vwz5DSoS4nenLKv7UcYknTYMqixBTo4ha",
  "key8": "4X932jqy6t5xk6AcHitzdz52p4yiprNjazN9YyRoewTYMcABMFHHTetkEaZ7tNRaAQFhxgwWW7NnHqaCMc3tc4g6",
  "key9": "kyeDcTcbk3kJrKRCxSCXhDT3dWr7kKdytD6vTj1tw8j8jQ1wNYyw6bZeDbArgYykpcjdgUekxVJHjnPi7tmU9Dq",
  "key10": "4cVGM69iL9Xip3fZFpG7jZJoXURuWfmx5PYkzeWMLShe3JXT4j8tnVjzTz4hG1725mSJwf73vhpQspFyC1HHvf4w",
  "key11": "2ABxPN2gfAdj514B7P72eVhvKHR1LbSRXQtnGiGUAAmdMybimdtawtnghLv9C7ttANUBGm2uGsLWX1YciBMnW8hy",
  "key12": "3Ui13mW36nSSeENf2F3iZho6PFtuJ1AM9KKMac9byopHJP91fFZDroBkGnZ5pRuJN1nAzq8HvBFEgPksqf7dRT1g",
  "key13": "5Abs33M4g15ougjgk3BQ6jFr4oTGVRcMMfwAo2J2Ns7iUpo1BXmEpUZFS7Vh9YfoyXNjPRRWSjC45Du58GmpCaFF",
  "key14": "2fHzgSsSK3esY6Y9upqenUJGEK6yh4XTGD22hJAusbXyeizhzcL6RdshMJbRAPS7UFdj5JBBcHpSpxxd7H8vQngE",
  "key15": "2Zkc4HLwNUby9gKzd25gDax8jkhmD5qGSRZ1w2mnGm41BaLCVBws2K7sndZ2gikwTCNTRp5Bq6vvttmzdx4CuX2j",
  "key16": "5n3dVie5bze1RS6XKbgZagcE1DncrbwVojZMTswbPXoU2cGjYftfBsNfT4WonJGfyvs6T3a1n3bseWcoB25gEGju",
  "key17": "4LegYMp7w5hu6369zJb5Y7bv4sqcxtzv6pqnLg7zYFEheaRZnLKuhMZ7mhoJYfLLCVNr9HoitxQJPL5dke2tT3Lj",
  "key18": "2u7TqLx133uqnuUJkwHoVTAKBub2SG8Uw1h9KzNvMmT5KbU4DGzwZSZ1bZT8zgBgnusp2npsMjM9sFStSB6JnU1",
  "key19": "4K3Z5WqcmqNpEB3vDinT6s6Dz2wrbEunTav6uNv3M1Ht57qRqN2YXSjDD59si1annrP9XFr7X2PrsEyanvWGKn3c",
  "key20": "4b8drhSfSSLC78hNkXMDtDkS7oF9wj2SE79sZi5z47N8g2iTcDckcbsT4bocnZxLodS1hs4p4nKeeENQmJNQheBn",
  "key21": "3wJ6zjFHc5gKsHboKZnpNVtJk7LwaLgKqbwsLoRrCFn36BGCJrfS284pPXW3J76w75JHQsZQNXSKDv5a4X6K7TuE",
  "key22": "2ff66y4p2BESGZyWfJJfxNE6JWLPd3Yjq6sb194qwFyC38N3o4kxkdsmCX8miLq2SRcvXYJSEfAav9pobhf6c2vf",
  "key23": "27eb7gGZoubDk9HbetQ8Cvp9kaqMKR2wQJtdJas3a7X47CB25AbF6GDJNS9dhpH8RfPpUVXC2nsqJ6iYa8o3SJ2q",
  "key24": "4cBT56CEb6SGqntG5oMjfysj3WbnPzJrK55zv9CuAAESjfciTVmB98JPAQzLcGiCGdz4XFE8d3AuhPRPQwSdRLwD",
  "key25": "3aXnG425PkxHhVYqfTdRR6BcYJxhKEEPQnNj1f3AEBpp6qu2oWJGukX4pbf8fANg352vCMceKtQAA5ucCz5EQVj2",
  "key26": "2bNwmgYJQkgKTrAwB6ydJCz518ygUGB3XadJMj4ec7NCmNgYPrGpSwmzFKBSaBBQBAcBWNznWrt9ypPAxEfkqVCJ",
  "key27": "41Ge4nbMFh24dWrK2rM8aZ6VPR6J8XLbibVXA1w5VNbz3GpDpu7KGvgk2gP2y3g2LjaSPYjjUH8TB9M7hwgATz1C",
  "key28": "66wAb3C8HTyYRfyGNNbVRR959Mu1WsLWmcvFPxGKjrsYY4vuL4iTQL1yYHoia3AZnpVAmjPxhuZEcDwUorJC6NDP",
  "key29": "3mXu9EgDhYXxge6eCdXhmcvLyR8eocj8FutmsEdth13odsCpAdvVgzLDk2YyfzcFkFjA1ovPKwBWKqifz1oW11wq",
  "key30": "36fEGYrXT5LTDCH8PBqr3fwoCQ1piHN6LynxPft9aCj52cxPn13pw8uZjocj8G4HrhCnFHwQzyfaH46CkU7DjWpQ",
  "key31": "3xawfkEvr3gJVoye746MLcYKHVQD2XYKsb4yywQjqznmYSAQGYzpczD4VgfjudkiBqFoeWgoiS5gPUbjJpcHgEFm",
  "key32": "3GGkfHGsAfqTmKzbXs7Ur6eZ5yHCux6cMuvM1onTn8MEnkaNnbKK3hGGmBM8G7pfe7fy86RKC9jqhvcM6mFu1RGH",
  "key33": "3r2Pu65M1HcJ6xcED1WDp1cBC1h6xZibGEUox99wkY6ufiqX6qyA55ZxAHmJGiTkC8U6CikJRxaSevAaThnwNSbT"
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
