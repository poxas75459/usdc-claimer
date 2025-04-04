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
    "33TtceG3nmavjJ9q2TLWw8DHDPcA8kdauLgD7a8KAf4EBn4U4aMnhCy8X66bFc9k5wBDoGHTNUxWbfsmz3fFdPzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kNvkgDgktaysDYnF6Zk24G5zPk3J2sbuhbrXX53PrAaMBgnNt6JKiUbowAC7CoHQ3S79jnnQ32VqTptKDdQf9DM",
  "key1": "125kp8juy7vRT4gCCGNJVsWGJvwZo2jNsWszNqhtB3A7YeBe3AdE9yJ3j5WDmn6dt33JXCiSb6ayc6LscJRtSM6v",
  "key2": "3uYXLbXvpiXWbnSWKbhmpgEREgsmYEidfYWNuKPbreKANzSH8bVFAjsuB5tFtvyLsqy5mpCakJLGAVUn3z84RuGH",
  "key3": "46UZWXa8EvDLakw2qLrZPaqEMUeNUjDAMVq9NXtbypvLYYSHkLZ8HgNsCRNoEYjkQa5msSEEJ7k35od87LPtJA5Q",
  "key4": "2mRZXipGvMW6Yi4hYzA1yFdGshHDiZMzGdESfqfuruhxNdo8Nvgiu1UxSs7bbGEqJfEmVFqY6qXsA49VvWfmPXyg",
  "key5": "3qSfKAKQi17f3tzJbkybGXNtoc9Ais64aYdHiXFGikXwRh9mQGqWGX6pgGkvvU7kuDCgHW3HwPy2vBcZhKB4MfSu",
  "key6": "4YK5esbNA5ANFghiCyET8AaERvrWBCtZqgWixEt2eHPvwJd14PjZirXJ8965yJ2rnRxprZakHBBCJNJF6pw6DiEt",
  "key7": "5SSxCpCHCWsYMGLc5FfA6J4j5nF43VWqJQBAm3q8txxK17Dzdez3ERXi91fLKrXv4MtW3Aim6n4P5U1fwDC8tJV6",
  "key8": "2DxCZFHFJbGXkvs8xhDyoXX6PgXKTgo7uBr2FGG7aFspuQ1rzP5imZVRC4gnGLagb1Q36SmpzxaGhhBExzVzE7tG",
  "key9": "4CkjwWToZ5PP7xkMFwCGHk9eDYW6AYbn9oV2Qzh2XgA3bDq7L2h4kTXysqvyUbDEMsbdAerxKPA8PoRNyk7nsVv7",
  "key10": "3MniZBFroXrHCWiDv6GaJo9qY4AHYBTkN5hcVSZ2WcpZLQJHzT95A1nx2sHzRDrf7vrtZKEf5nNY1pg9JMQYUTpV",
  "key11": "5cFY8jwHtrpN3zDfDesXV8cKuXxRx4Hd9nfZhjeNC8Tefb3Q3MxeZ4x6PMZxJU8WjR2M5KSWqtyXHfZ8fC8WG8Kq",
  "key12": "SWKBhEDcLTNsj3nbFisCSQWSzj5umfXzWRD1ux5NizxXTFSfctASrXD6uFp6xPsc2mHvRgm5pBAE1MyxqeckUat",
  "key13": "62fCzccJV5oqZEoaAFhnekKbSy4ZrrQKSFYiz7rJjvTRgtzMnXrPZwu9iArRXAys2vgeF1CW84sg9KHLMVR75b1x",
  "key14": "gpmsAvDxgsBMPtpXoGPoX2FeZQKxdPzhLBzERkiGx52ypws1NquLPBaaHamu3TUZLmeeJrbZx4PkXzVrEBdcsSU",
  "key15": "4ixNpdaKgg8m8wtqxpvKHSBGKvBNzKvnK64LjcnTBHYmrKKwHEHiESAhbwePPBax1WtnoaLXXYBtSh5TBxUegZZf",
  "key16": "3LG1QfG5K8ZuAJ6NanicwugzgGS644giqjoHi2jSyf9Ua8mgHFNPN56K7SAfipJnN3GZcvLqJ6Ct4tVmvhNm5GS6",
  "key17": "5GcdaCYzmoQdqkJdddWaE6LZqLiMGnUvoPWMGMvSzSSBRpXS24NS7V3kxJD8zEaQsBSQECSBNRhCS829cyjBwynm",
  "key18": "3baD4PLzjogq8bMKFJyjLegGXyLi2HPhDYXPVTpmVn45bjHgL75F9saGhzPTkd6jpQC7R9EtzkiM5s9t8mHuBpEz",
  "key19": "HAYrtGKdJdFrn7jDP2XA5W4dA47XnPWbgd16U8ACg2j5gEq8aThEduJAAW2kBmADH5NdEawm2ezg6rDFCfzKSSo",
  "key20": "5rCDjFPhpFeEJTBRgYSBXUm6AgPmTNbFXMFvrUbyu7JVLKdLG5GuNNWkUcza85z53d9sLjfvK25t2eEq9g12Yhru",
  "key21": "2NZ7WxhHfiqTq4hXN8P2pFyxHeymBtoMU8cKd7iCA48daKEuYqi45bz4rYgwUzsBamu46xbN4Y6p1QihaavXnBJL",
  "key22": "4L7sXna2A3ttp3j7D9Prqn48M5FnHt6aRGqBwYxnBbLteNuV3sgKTYhUg96DkrA3k2UgenAtXRZS71yvwYHvBqFH",
  "key23": "2jCdSyAAtxAuFs82j2RGoU5hSvjdfGdRjm3LtgSJqd9YJZKBeFSj7gDmHBh2X42jdzEft7jN772nxdb9kCTFBLbf",
  "key24": "3ifvPDMBfaBz7Vb5nYszPGq7iBymqwwwspEUEwnqLh3QmWzSNYbqG4BkLSAaeqmWQE5dcbSc1yQBXtLzrhCkM8QS",
  "key25": "3FCtQcqQGCktUS8N2rh31yUmQ6TTmWXMUfZUm3Z9forciY7uNN4ofDXRgPceA2iWD4FHmktdbkkgWEqzgfYfSufK",
  "key26": "VE6moULhREqVWYSNkC4YUqxYafZjBeZSK3NFzjP2UEFqEsT7yFgnHtzkWfnGKzRTCE5Nw5q74nLcZuNMHJsuSzm",
  "key27": "riLfFm512qgyVoApoYLeMvJjKQ5FEUNkSTmrQJKoR7Fcm4urAyatVWUeUpQbdCvw8yL1ZVBgWg2ZtyEn5VEEjwc",
  "key28": "5aWqMbJTGZYn3kUasdKLP8UpqUNYzqRTyPZVuN8Ch4qP9fVoszsbdVvt34A616CAxvkct4GmqEwxMvkLZMjATdkx",
  "key29": "5AJfomoNQUxi2D8jsebQvy6DXG2e1w88FEW7WVeghffqPB1efP4WMFkf5NTCZKtgCR8P1gexySgTGG5whxzAFkpp",
  "key30": "4ryxhSjhaDMymprU75aTDJ2NepdmPqRG637FiEmJihoE9Am8sxAu3RB5EAAv32RLnrq1tbFSR9t9X1jDUdyUH17m",
  "key31": "3ChvYUbFrEXh6hB1rCYW859KBe5cURvq22ZZ2ccLfNJ6UFFmHg1f76fHUjRUQWEu7jXFGmYi4fSqsZjnML8AV14B",
  "key32": "2H7KqpRjp59vW3MM7PcyjbHPZMWDbBBe7LL1tqtfy6b8Vx53fHX7Mt7xRKGWBjPgzKmrJFW2P9ixRheqzYnqbBea",
  "key33": "3z1WWcqRMPHoKnchPyujCUCgcEbCpidSjA1X8eBxVjyBnFvEnYKWREscFJdrZPozjACK2r4Jxv17LnSccT8s9Jsj",
  "key34": "5B63Ncqjz9A9PUeLAM6xh6bwZKJLoYZDGHoHmwzT6AnfQ3DzGdiGb8GGNffk1vrdxDYPX6sB6BcYVWfog6rjqWM7",
  "key35": "3t9ikXaYebqusbYzcgKdev4haGf86toznJteuJYW6Ck92yT91edhuEH11h3CtiRt9SctvVJ7GE2G9hWgaXTUVsGk",
  "key36": "5QYX8b5t44Akw6aWm7FJyL53eYVfoz5YUhZjntUAgsWoEiwvGuYge4pNDsiJVi8GBhC8CtizYiL75uh9rHPj8whE",
  "key37": "mTxY8zHzkSwEc66BMqueoDmj42eHu9VKNvyqjFVTvpKiqFt8yQNYTaXbzKa1SQ8fujp1mKasbvJyp3f2cfo8E6c",
  "key38": "suEP7igCrMRLG9npPQCyKezZzkqEFxjcdh63aRZMkfZFW7ZXSNpQsceoP9SK92u5e2iyZA9LpStUb39ohcVr8cB",
  "key39": "3NSCouEsoKwc3VF1xfwL5xxyPEkLPozqnMZKLSeuibumxAASqbnKqrNpF2DmqprGBnqKEN9BMJp8ocKzaBF6ED1G"
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
