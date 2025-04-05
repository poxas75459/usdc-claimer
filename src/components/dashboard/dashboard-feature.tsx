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
    "2tDGaiPz6396PX9SeJaNsZqtR8HqsDgxoq5iXdPVooKVUCs7CmymnzCHdj5XpqeWRjcDQdC7ZN29VSZicqk5vMEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43JzM6WC1jNwUiKy5EZb9MHowV4iCoHkNB4EJEXGaY9SQwF7MCVNnJBSt58TxJrukrbg7XKoHhLCqRwp9pqF5sCY",
  "key1": "614DJWzjw9YtkB7vYZo2ip5MUAhkBZVf5X889T3oCa4279E4L3WPJ8vN9XWzzGRXhwK18TEBqtqrHEnWpBWbE5kb",
  "key2": "5L3wi4YkADU5CL8poJPLcSNq1Xhcdmd4EoANTpn9VEYFRg988bzLUC4CBcYqVYBSU1gFD3dDhahVVCWwVu9Wy311",
  "key3": "4Vqqm7kBMrWYyik6ZrMAeJDZ11bjg7wX6mxPJL3NvKcXznWWh7YQ9sh4oSMSk9bPh293LPQBNwabawufN5fxFvZu",
  "key4": "rZByZdRzJJ3oWtUJSCMcaDs27A2C9E4EpdhKBvQqbrENbdw9V448u4pBMyGEjDss4p5spMbZ9EdsRk7yBwvGKa4",
  "key5": "3CbdnBe996DRx5MnJMaRArP17mZyT4xYAJzNNaApjjMo6XFWFWnJf7XUWNnBQjS12EfUiTFgURdHrisWVdLTWAeR",
  "key6": "5zUvbnNRBmwVWw1A2SEnUPBdFrBaSf5zNgQtCdh8RHzfu2LzJDXWHqt8grXsnPZA27v4N4NdRzC5HRib9Ag4uwoJ",
  "key7": "AUbMZgexFzLjoeHmJfvDty9V166jtdzjNyBcnaPQ69AZuz2pNirxrwKALTpqZdWrKncKDUb5fWxC2Ykskd7owdb",
  "key8": "2hS7WzVjZ8ahUG5BJYgB7HRTe1xjB2Sjsn2o1t9byNL4j4b6T9ry9CjDAjiQJY2JaBjoCu3pE6cL6X8CEWYB1EW3",
  "key9": "2Cm4BkCCRjXBwcA9sEYicRFjV4Tig7KtEBR8Bk8pAJJ4MQQY6U1qGWFfBe4LrehSW6tkXSnWudi9Fig8LbQA721e",
  "key10": "5rHYfq9qYYZvaCyQ4shjhhr6uHavjK5vZhXDRd9Vt7W9wdSjJ38UFBaY3dUmmgnzLiZJNYPaKTDpmfwVk8t959xX",
  "key11": "48qtqGgBkKcjbcxJcZSgkuXALmMac7si8fCSJKJhYgH13cNuwLz4uv6M8T8XfsjznxA2iotPLS17gxhqnH9dB1JR",
  "key12": "2n79qhgHu4ED945DSTAvYN1b9qg27ya6DJj6a9JAmeeTq5cg8ZgB9nAtrPZDqbuaX3CJjVpbHRqbW9USKV7L8WEJ",
  "key13": "4xqpAaxJJJPkqDbiiXYgP3N8Mr9DtxfAjNcem1QuiLzuY3CZSkHBD7Lw5sxktDeiiRWfwhVJCH6RaAm1v6cCPLTF",
  "key14": "d2Tf5VkGiejRxEqQyNBhKJAMXTL4ppxRYV5ex3QXDw74cd9WemfFKkWmYp49TPQ1uHgo1r3RSLgD2MuBJHxT281",
  "key15": "2mzKQJNzoX2GHLTzgwAAJFsV9miN5RVTYVjKcW4cZwQM5rKgiq96g9JXYXgiBmyPkze89LNETm314gB9YFeXg7Kv",
  "key16": "fpAqZ9WYMFXdzHkrDBLd5WVLBaXDwmULNsYHt2JAcmqCxF3scKbnBuiindzvfuKUUWcDGhg1Z9hiizoxJ9PgBAV",
  "key17": "2Ew2cjYqHCKSNX2nqTbyNum5wmvsCX3NNYUnV8av44vvyf8msspWVkAepD8bcgXf28TcP3zumGNupDLkigSsuVFq",
  "key18": "46SB1GvLshcGaq2mCFTNDnPYJWhLJABcJ29QSyGqgArQ5fqwVNs5hNAWbtDkcwu4MDDZrCMrLWQyPrG2kZ4DrA9m",
  "key19": "5wyPgB5Dav5YBFwqC4FakpyGSvx9F6iiWEK1vG2n1EDXiqbSpbK2Qh4usNVMgEAoLQnMjSB8kJNCPDfsfk5Q8JCb",
  "key20": "3EMhWk7wuTHuuMFFCvoTX5dkJDuJXu6seTAGEn29t94QMmuMDii2V4kK3w8YK8S1SDkcdq6SdMgmFxi9ykrmHbze",
  "key21": "5mwTvSfMuuKjsjMT239Hxkgtr8Twv2jz74uiU21F1Psh6K6h5CGRYBSZt4TkZySsLgtVpsp1spSi5BLxtwJa2Ex7",
  "key22": "5jzYiNUxzMxt1F8gbMhaSmbivYYupxDZqkiHRs177pn2tyni6NyUpgNH33GjVAtfTj1fRayYi8tQx6s2PZDrBWHa",
  "key23": "4uUe7fYkedGo6f9EgSN4yExw5Heeenfb69pTZ2d2QVZA8hNTobHyJXdnyqviYaDa4w7wDt4pcNVorz4dK1rViDv1",
  "key24": "2fQj66GKwsapdyd1w4iZxf8teAjEx61vwXfw4w8y7D1ZwnXYXWczUTQZG5C3dH7BbLSRFmyjXBhrYHP3b73XHRaj"
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
