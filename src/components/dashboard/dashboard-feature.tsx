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
    "29RXCK1YwX8Y7wEtYgyXj6ugkCJcznX4P11NaohW4SFRMDeqKYYnuG3WnWntvVXgE94K9Q6CK1HCg95s3fPsaRGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ze4qd7i5s4cE2DBG2hZFHmbfA7QSqFfSxLNx7h2XY6tLtYujvg8uNcPr3Pa8PCkrsJF2c3gMdZoTXHGxEBpU5Et",
  "key1": "3xJcMiGm8SuLaGLLexwTzhvKBBcgGr2e28r7R7YRJ8s5vZ9hxepHxnB4sS6dBLiecEmhKFBaohShjVqaLbnw97yJ",
  "key2": "MUn7zQwTEwBq9ZFnV5J9Hk5GcL26yNwfX6ZLWxg1u8hLnukY7eT9XMUMzDZjzY3uWpCfsfqPSG7ZcX1gARzMmNH",
  "key3": "rmgPwmbXG8FDdqizk1zgkvo7u5aQJtMLP9MuenSmqh1GybBECbCAy1XAZKJAqGQL9fDBx4TxhqUNhF3HXLXWApi",
  "key4": "2R6CCddTKaMnMbxEy81mnSLpEhFNfAojRiAuyqCtkwZrkt8rLx8GQt43stUgJ9TiBniF1ZPLE4vPcNBYUvKXzHYS",
  "key5": "5you8jCDvy8yoCTcxRBwitmFQexkRJSXF3vkrDrjGwTT8eYm7zw5UDkBxKMwHYmWfKm5PFDhFrwNc6kGVM5wxGDU",
  "key6": "4QBUBjEQnNFT2P5fhre9hJyfanaQuKbiXaVxwW5ud9A2UBpsdbFtYiocWdUcbkmWPv1ymLcc6vDqiYeGf2auTs88",
  "key7": "4YhWFzmqdpKcwmHgpgfx3tQx6GM9SNyQosg3YNkrtac4S9nToxgqFrpfp3JdjiSgPiSvBnAQZY2rhZmFqHGwKetk",
  "key8": "5MD18FjLB3nfrUwktQ27btk9fTrsdiFhYPDykwigGtLxKk239rFBvaJ6GsSbEM6BVwdN8434yXabgfP2YHoZomdd",
  "key9": "3Xid9GtbBAZEvYQvz4hSTbfJBc12VZpDEjwqd7CEyH8mrvQRRp5atkiZbtG9nWAaPeRK4p7vz3ePwgBGLQcPSpKY",
  "key10": "51kn8GVn1aHNQ68jYcqjmwQ9t84wiMp4DWNunLKc9ovmaYrLfTuV8qWK3HsuaJZQ8iaHNjBx3oQZDCeKodLDtiN2",
  "key11": "5QLudFcqwBmsd2gv7bz7UxmTY8iH4A2AVWksTZKQxpFL2tvzWsFe1Ycwh8CFQZSXnrTz94D8AHcRafDhHNUJsA9n",
  "key12": "294xYzxjEtjJZ2KYYdZ7hwCXPTAR3Xw8oHZjfTuL7MuLSJAEGPavoRfmtCE69vy1nBGwnYogoAEpUKdd4q4MnauB",
  "key13": "2B6PvdJfxkqbnXGX7od63ADemU6nLCLeAezAhVCWQnTMLBTUgMxSr7W1tjisgwRpPCMjRA5qWwfahA9DnJt5iXXi",
  "key14": "3RYjXhZQawTKhrCh4fa2UFAUFDMbwd9bciaQf9ZrrEKeXn5G2jvL3k7zWNo9iMQjHuoXKwBtHYmfvNx3FTuUXWE7",
  "key15": "2cLU7BZ3xqYvLMdFLG7yFnppYk5apwHAW1maadKonSpiavaBNVhXPuZg9sWGfegtgATJdPqtUDML8RyGCfpEAK2j",
  "key16": "27by2yPyymLgVCTQHakEJth9zxCgTLWbEqzjLqRZ6m3FnJqG7q9FZmQM23PVCGqXpRe2nU7HRDp7Y7iFGYoMK6JL",
  "key17": "5qzM5HpgVH6W2mzXU7FH56LnCnwZLZYpr4RT6tXaAXuWrXz1HHwtj8Kszs6m3u8WEiHULDd5fNyHdXAWDB1viqpg",
  "key18": "2arzb4rpJVBurJD7vYemb4jrbhFDKT9APLGAWMCr7GCaCyiEB8sDFY7kEHfERKcrANkH6iLgXPydRP7n7Ck7kBFK",
  "key19": "27yGRceRziUPtUJ54uxdGpNF5GdLDcXmUjLbqRUnfUhcVaSgnpwKvM2k9EeSH1xLWXTKtRtNvwW9irfLTCv9cokQ",
  "key20": "5ZnemUxpkLpkZfVfZ68gc6wPp7PqFghmtr1jhF5PrVAGiG8saWpcyRuqZ8fL3sq4xz7rdt1QgvbSYPNUJAF3UY2R",
  "key21": "5q8bKVqkt48qRXrTtAxF8Q4GTDx2dDVLVHa2GHhH7xkyvJUwaQmMUu6TPSxcqJaj1WZaXS75MLZT8vBfoekjhkTB",
  "key22": "3wdbzDp6AgwadQfX2PSBm5msgCGQzkTxnnKe96vtjttQFt5ZkMYMSfiTYidfN9H5MKKraieyHHrTdiFwPKEtTPbh",
  "key23": "5BzGWtRrY64W5BhrkK8GZ4ucsVntQPPcRhE4TToM1JyLzohfxbwekcti2tBPQSLT1vmrHiu5qoUNbQ3fLYXN9Rdo",
  "key24": "5o8z8p1yRQkmmtoAyzNotVu8j5gP7VM5DTbY1bMa63RQwxvjWC2vzLVSadfSryQ1JExX3RLWRmS8P9qw4j5FpUC9",
  "key25": "yY8KhVwQYcnc2rXiqXx9gcPBF3SKRCuX8iGvtLPAsLm17EB8ztv6aDXb9jfa7t6s4bgnLcbjUfVSX78QN95YseY",
  "key26": "32wH2gSicUUNV8GdwHJvkko6o5PPg3Sy1tjM2yZCVC81Yoj2824KT2bZDsGopW43d9Cibh6CgZLRrvQCwriUiLeK",
  "key27": "3in6Jv6rnV44cBPRKtAUR6BJb2jnoUN8JiMRV6u4SXKtcojFW6RjdCNFVvQGtDNfkGWCMryjYQ3Gb3mHu1mvoA1Y",
  "key28": "3S6BgbgfekxbCQHoYxexGmAcM7MMte1FUiy1rvCL9uutmvJCXGUSsNRfkQruCL2TyfqGNCwvBhTSrntHTxpmrwXU",
  "key29": "3HakCo4KzgTeiQC38gCKWvqKSG5Qw5HCN9g2bWeDQHEG6CEJRtyAuGZwNpPkP3zPdS6ox97GJEiTnG5HXjijs3Hh",
  "key30": "2mQrwC2di9xKCBqmFHDw7D6F1HnxaRupPaZRTHQZSABS4k4gJ8RfrhBesELNcUYSc1zZ8TyA1DHUwSpjE1dHDymP"
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
