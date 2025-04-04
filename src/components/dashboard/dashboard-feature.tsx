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
    "jfjt4F4DD3npdofRntwf1MEtonK68mFXUcpYTuXJqBjdLqDAG4dEE1TDqCXQnym6jpk3vZ1yQookzUkBixxBodq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aPULNa3tQCMSxhmCqadvkhSXvp8Mn1MLegmjxFWDBNqS2uszpm4rEs13eDcz62S3dsaiTfiyd22QeKs3khj62BS",
  "key1": "5DmBUmwUc7fuRLPGFXJWQNiggkJH2cTVgUMLcTxrDFLW8BF3gx7sg6p948P1GzuSQbwnPHwE9PJWNG8aBJqYLbHv",
  "key2": "iqBNcUzjYHGYY6MJ8ZnHCYrn8kVyFJC8ADxPJpw636XquvHBjevwV1SPuVwm2shoEyQRxVk9UaHfyaF6i2gqBMT",
  "key3": "21MHUY32xQz3F8r2MqyrWkSWn656EeVRQqV6BFkS6PLFEbMFmVNzrBppV2zeXBTxKxwMefKxMsBB5YRrNYapRZwM",
  "key4": "2BvJFgUXQMWkDxzfqvT4nV7ksS7igwwRQHibesjr73m7fcVZSa8mvDaxE8CfLbit2dyHHT5MVFj29PWoFc1at96T",
  "key5": "2Pu4SSJ3ZmRjk1jHPATvv6cT7Ve5c5NE79fnTy3CYPKQvMrVrscCc3JLND2pbfLX2MW7gDgF1HRwMteknbboDytJ",
  "key6": "2sF9NkkCupvanc3NTGEd4BF2WFHrFtV7idkJq35uMx8AaKRSb75zCtDf8qGxptQbdCycqYVAnbV2xC4TNxpHqN12",
  "key7": "524HXwsF8eoPur5aTyh74FfRPpwmEERQZPhkxfawWRoNTutY7Hay2sKUYX4LtySmywnBnB6ptsQFggaFiB2gkP1e",
  "key8": "3UQnk6BYGnB4vkVCU4EdeN2saqHrYyvd85UbHL5KqZBN25Zmw6PFu8BWJsUKmK4cXR69poZjgBFy1HpgFYAo3ePU",
  "key9": "B5N5SfWFmmSCPb5ih1aEj4qmt7pQLVycnk5evs3dV3YKXaJN8QpKuukzuwQ8xVFsBfwQuid4wn8goinByxH8VUr",
  "key10": "3H6jbnqMP9gK6nKRtGyLwoWEYsn5Eg9u1Z1smTxH58w9eXjhTRYw473STaDoDNF5AGiNczuKNGuitn6RcEY7dJUh",
  "key11": "4JRqQFPddFAjdHXsfPEZx8CFvVL3ZNMTmwfbGvW6658R1fPwv2U8yoDpkkBjXhA9xqMpbjPGpo5Zg3WNSpBF8zUY",
  "key12": "5YrZXcNNkzztRideLN85oMQunb1Q6TQGEt6N65MY8NaP9FZ48XZf5nxqHgHs7KiaBQsgGNyLvyP5E9rpbzjaQ67t",
  "key13": "XfN1RxRiGJbLpnov9UFKzNSvRuJBYf9QkBw7zWTWHriKfNte1SDGkY7dXog2LNtjbnt8poDG6pqjFXsCYb5K7GB",
  "key14": "XMkkQo4ypeEGxUyk2PH9j5turTc9Th4auLGXb1TEarvrQamDibZZTi5vRkCTZU5ysN755SWEizYGvrX2PyrwhmJ",
  "key15": "4vDwTXiWCB4ZNyEk8UMLuSJuByETzLfxwwcADxxg4Nr23Rd8wSJt83bEwBqcuW58UxBZTZE98TUw1M9HZ27YDLPC",
  "key16": "xxH79zNoihhWuE9Tt2Zbm2eiEoF5vuCBJD4qCDRQdGWzfPmAUeoZc1WjKTdtMePYwiYuop2n8bFu27gs9cKoU8i",
  "key17": "3PsEYpvLRqgHU47mhfYS2PS2KxUFzQ7LkL9zL3HKsbUBTQB3LfoFkZo7HCQBh8cH1KScPWo9x6wXfyx3bWRhjsNU",
  "key18": "67RyxiiKysNkef5NqApPA9hQLN7Va3FKnNvG3BNmhipFEu3sFm48vTcgtEA1ytDtfeAEKZjHmZttFTrijMD2Pv8j",
  "key19": "51V2EYkypyCHXuhvvNZzmUGPeDaeFBaTETqfSzWNKCokxozs44wnZKWFqzRt5mJxYvgZPzRUoc8MSrcMu9Wnn6Wi",
  "key20": "T3KuKAwJRDPc65mgAiNmeoA6iEHzPytW8cQXTZhJ71h8BhuCyMQAJkgHAysu6n3MHJS4Jv11ka6EXJbErmbPH62",
  "key21": "ou81ykfXSVBbbCZEHE6t1VvoYrghie811mZc5JF35VPPET9C2XKWQ8KAXzPWHcVUjYuUybZ3w7Wnpv3sEPCXyDg",
  "key22": "4P527nEPUuKSQz4mqy2MsV7VaDvapVN4KksWKSgBfVTa9Cpav2UiHuQqCxTcL6jYN4RBRVL9ZkeSmnPipw2fcbK1",
  "key23": "2ueXj2pfSZXf8fvVYu2432bFLYs9wCvETL2paeYsTDG7goGYbrcf365w8v73SogPxPPUjU5kB2DEh5BoUL7zrpb9",
  "key24": "3K2uTotgbYLqk8mfAYups1WPEZnyTBU2iMhD5w1n63FBx9o6LZw1T3iMWfUyfmEtuJ1jAXPF9BxrL7Lin7pDzUEC",
  "key25": "CajKZyMP4fPu6N2c5Y18uSd5J8QrbYcW5tk7EQ4ioLEabHo4FnbbqaRPtC88p9pab3unWRShr4SSEDEd8bG3mAq"
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
