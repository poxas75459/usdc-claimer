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
    "wqfpqKHVY1dpDLMgxey89N8cbU7k166a3mnJQ4MAS7sisA4CbUVZuNXoi49CjHV977ek3Mq3b7EBqSDMWfbTbzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wsy7dQY3jy1UcoeP2GoKDV1eG1e2zdwSptbtbwYHEkqaqipXG6vypY9WYEnDb6f3uZwKvouqNGqaWAW1oyKVDMJ",
  "key1": "m2yk2dM2cHMjYiRCvQARF84ZKdf2hNihv7RWv5DfUL5vWswHtsnMGWiDrbKjFSnzzLv8b4t8TxqUubTrZcZLiMk",
  "key2": "2P3zSNC3J44F4xLoFWTYnZg5Pg7Zrwdv6j1WCa8H2U9cp7YKZDEXAWcNZWEbQfNhff4te6zCB2qkAm16HMUi7c5B",
  "key3": "3RSBMtioQVnfX5oVnDDUFuR45PWBuSd8AEwXXhS95ccLhUmnCyv28d7k6kqAdNkkyxcUKCY1vyZMx1mcJNM1oRQk",
  "key4": "25P4g3171HoZ3ner8iYGskqbjBpzcUE9sBXwVJ5HUDmNoNWSm53YQiMtbX4D7kam39qsp3WbtPrLv2dFK9FAsqRK",
  "key5": "3ZojurmKCuTo2PQxYg9VB2zpPyBvt5stsA9tRJ5SMob4dCajpU5UMyCsT6R4VEvpPvEZStSpkapqiVNaZxFyARPY",
  "key6": "2RtccA7QpV7HT53y24z4Mx6HhC1sVzKZakQ7x9RyN9dKHsGHU5TtNy9d6LiknqPpvfKcK8r2ioFwgTFTejJ48H42",
  "key7": "DafzPm8K6n46sccaBxgxKLk9MEV4uZqWo4erHaRK9ZnkSpr3sB5xbYbxq6cUq1qUiANcxFCFiBPsZzKGiYw7jtg",
  "key8": "4yvPkue4fyoSzpA9ZeL3xj81RW7XCo68HAJ9R1HwHgQF7CthfPs9a7UjoQxUD9x1HVFhnegSGSrdyXJBZ79nWfJF",
  "key9": "4zgiP2FToLCVHpax69tsxpoFWpqrcTbXLRuWGDeytXh6w6D3LjSvYdFqNkMwU72vhbrNdtMQWkzga5689As5onJJ",
  "key10": "4dYkL1p2oHQUcLPm4qs5ci6NwSxQ8yfcyQBoM6MrBKVi7B76YBhS5PWGGimXR75DF7iuDzVafdKzBeohRcNmah1m",
  "key11": "41ywnGcd5XLzgNsi8dfMwQkEcgBguaicHQoKeNFDKcQRAD6KMkp1PRUUPRiBuJV75h1cMMKrhGcKJx4UmzM4Zhom",
  "key12": "5qjgupNXdMWTpEynPntAqYEjNPmbbeuEtUcrppT528zH5jyoryxxSYSdPc4UhNMkxLfnz5TtuhfaPuNR2bhaAWTh",
  "key13": "3nzjAJQtXZNpV5E7ukYiKeNYcd9eLAvyvrEskTrfkG8mgSzjQucZyrSMtAh1DMe9w8VpSKCufU2RMvzeDLBhcqNC",
  "key14": "2LBRFKJvWKdXv2iBSkjVWG2XrF46Wpt2j6nmjTMBAT6x6TFPhiDocLAT8h7LqMyXf26VButWePe1KoiJm14mnRoZ",
  "key15": "iYf3rirEhcxMA3zDtc3URn866YLgxQB27Q66biq6x8S2tUCX9ehqEZi6GmrCKdjq95M8rmxn6acoYfVPg7EKeAj",
  "key16": "5ehiBLw41sxiHhm3fAbRZKGPEnLZJ9zUuKps6KnhfDsHeksBYXjouSn3Xbw9kKn7M7fp7Sv83FzT6fCWC5b81KUS",
  "key17": "5SY54y4cq8oTQ2i46HFCTVMTkbztbDgCFWbwa2xVqG4tT5agsCw5oC7RZhh4efkEbdr5S6HmkXRMXtgdox11N25A",
  "key18": "2K4ojuYzKXo4CWpKZq7jhck7Yp1Kd8pegsA1q99P1edty27FQD3GK5SbMMGHd9LC81LxUeGUBYKXHQC2Bz4oue2G",
  "key19": "53jVsxdsCqCeJQJ1cbgnhSupq76mCA9cP3nKMCBo4G3Mn8hZKwWcskBH3EQSKME1XZ6z76TYHPoCSwKR9rjSY4Vu",
  "key20": "27PvXsnmmBDTpFZ9DFqNGCXh8eaFUArVWBWhok4crgAaBgrVAs547dXKM7KRLsmbGRwM6Va4Dx5Z17Vgj3g1zhqt",
  "key21": "8PcoTojDC9qp9Pg5pFrfQku2prCawj99b7N5HsZ9A82VvEL1sFGuBaodNQEZKx3CUj1xvhgSibdA72TeoRTDXmb",
  "key22": "34bkHqp8qsby1cK8mu3YA2rNK41XpeKfuMCxYTLnuZ6icMjBVUi5ZH9Zx4dR7sL3hn2JyGtD6fzksZehCCJX55xB",
  "key23": "29s1obuBYERzAcmHq5QsB9eKbFhPi8tDso3CvcdLAZ4dAMZ2sZtNY879g6KDcYMcGzkT1RqrvGPrFvKYVtgCEyLD",
  "key24": "35f1MZSTnT9v7P34oSSB877qBiVAPzZjr1tniYFnHKxPfNGsdpT1Mymz59pySwNcj76LnaVsb3LT56UEvgqQyne7",
  "key25": "4Q89g9KpTBbLTNcT6bU2BmnjC7EMUAwzrbriqGskym4PWU2wq4tmdSbycC8gD97Jd8xipNhfvCjRA8JHZNYsDEQT",
  "key26": "3wx3K4B4k3o6CA5Rri1V7orS44mvD4mRQPdA5yLMMizsymAknPxd5BwecWkgXBBzKMX2mip3xveBjkWUer9Bsi3y"
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
