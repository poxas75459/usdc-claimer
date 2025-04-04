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
    "2ELSL91o3nGa8uJ4hs7wkxZecQVeXCSreq92bx4ezuJiVp7W23WVaYvN41xXnKvqBGpn3h67ccngUB7DvCT6CWQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xs8VXq7pKDdUdV5kzERhEScPNrQFCcXQCRvr51nwUPLqRhKxAuYKscBKr8ofXoBjrz3v5Y9mrZ8VFbjUZSCHDPV",
  "key1": "2UkfgaZ7fbJLsZ25847E6EJDs7YFK5bGGiGBGjMRGJ4defBacjitiH3vHCffzZNyyva5rNcYkErjyPhbEM4KQg3k",
  "key2": "57LQRkVSDZ2jRP3E7MUuyM7my5GX52t5ZaYNPpB8EXV3RTa6U3DyXwQXqdUsSv2L8TAXZo3P3NCoLbgi5vyvWERF",
  "key3": "49QLa6wB4aSXNbD88YMrVf6dRjZDv29NPg8Wp8o3BXMSfUkyrHhVH4Jy8zAKQfNAAW8TRZkBcDpwvKw56USRiC8C",
  "key4": "31Xi4KFBYrpoRCX3WoUeXePSEAZdTuSemn6hsPcz164FyK9N8nFeMSN8V7Xpc5qL14aFcMdtXgbAi8YaxWNDnCv4",
  "key5": "3sE3JxPxXHUsYRvmfABdvsR6hN56xv7rbryfWsLQiKJeUDEk5r49fZMocM6AuoWfyhqG9jbtoTYF2SoJmiseFNTE",
  "key6": "4JhVpAAn8brMPQCZpsTnfTmzE9z6a16y3kYrQW3ftj2bwvUhqwmZkk2KEBkGvxGA3bpv1Rz8Eua8VgcC4Wx2xhjM",
  "key7": "5JjeksnfNVahhGGoexUUyij57x52CHK3DJ6smJYqeA2oBswdGknVzJt2a2Epri2xYypLpv81qXME15UWde5FmSSU",
  "key8": "2aS82eFxWX4oeDGXRVWNjhb3fT8A8rk4YyYtxnqfRW3QGVLGrJBBYEELHSG1ub9BWB3DeBQjrXG4Hd2aaEKrmfKd",
  "key9": "5WK52QSsyr6H2YeHHFgiuQfXhBoo7mKEgj9Ps78CSoUzd3bqCSwPSPzSgP6gQzQkvJGbZjyeUDoUbngqgSog8AoB",
  "key10": "3Yp6WZX48J7ySg9Q7tydQG1d4wkRtRpsswNrNgmyrQ3am4Xa96wZfMfbjq5khEFQuvBvXyEgBzF87jPDWDKTdzCS",
  "key11": "3UreNyYVLRdzhdPZR9zSfggTc7a8MXcpQLTEEuEhyWPBzkQzWnkDxAQA6JgqqZj9cqJnExeyUnGSZqyigFMmdxTQ",
  "key12": "36jmtwrUGWXRm2aiH2c1ubPV4Wf9iADZd5ZvKKD4CvSugq1pfkiPHK9rc3Pb7Co4cLomWUtK9pJMXmBrafBgMaeF",
  "key13": "59ao7wN5h2aCJRp7FGdoRDyvwXq4h45n2jDq9ejYS725zRQAEJmUsHbH3SmDTaoHHouSntkBquGqJvQeChn7FFGW",
  "key14": "628VV6fBECXyWg4F7foBTEPvW6n3mVJFsSfNQuXnAirMhcAQuUBeLU8bxHrzrSyjYjpbPm7G6ewatLEcBuS1v5ix",
  "key15": "YfpRATpr2W8YdohX1kfa95m8pA1QgpiLqNxqst3Qpu6HjPmfPEjX5VbFr59am7njNdokUJErgPJ1r7WJQJaT1hA",
  "key16": "4VqKKkqzfZeuh4WbUZcteFRaoFTctuhsXpncxU9D7vX27yEPuGeyfVzvzo6bU41ZeuHc3BYTRe8nw2H2oy4kVYvX",
  "key17": "66HwDt4vmBuqmkqAxkxFnn3VMoTCqqFoktHk9xPTD9ATwAo8LwzETzTDrbBCt4wwGvt4XhXk9QKrr3PgSrz96qyW",
  "key18": "64MmHvWSo1jrVkexwziA3aBBKjGoD6F6LDQ3N2yno76BHFJ3i6vYTi1LMCCsr8ha5xFpYv8mFDhEkX3PQ5N62Y7B",
  "key19": "4A1iBqhw5NbCirvTgGC8PxxWx2ZWPeY3Aa1Xxd2xYo89CFxyC3WahVhRWQRTyW9UndLyVRj9b44VC1DJ6RYcY1Tw",
  "key20": "UFwfwu6fPchU8ni16zYrs1j1cyT9mgzW7eCk9yqvYykUexJb9mxQ5eb4fW75ch7VExo3uJwfmsTeuf6bmrHXVRU",
  "key21": "5GVAGkeDqYciGy3mW1YaJFAhx558oBTytnKeRMLJo98hZJnZEf41ffJ4ejB3ZFCdJ4vs4pvR6JDQra2m1yN7pg3Q",
  "key22": "4PyWXx1Zvmz3nkf19mgMjchRDy1U44Veeb8PphRGiBJovLzMzpCuHcxh3BSZffgqNAX8QL2ZT1qKBXPPFxeDgaQK",
  "key23": "2wMhx7kpvYYJG6hmJ8tz6mSVGDstujmhStFw7eXxR57dazBuxtdEnCA8cTFsCZt35nQkayioDxERaPyB1NdUb8Hu",
  "key24": "54skYopi7HC8BDZEuncDDTxZQ2GLb437tU3FZEZYKvwtCcrHA4HoBKcv5bcESBCEifdeKyXsUiC8DB2yMBh7h7LV",
  "key25": "2n4d7zpp4A9ieheX8Z7drucw9LZeBnAZ3ysdzZw61JThzshW1T5e5MYxUCpvXZjPpEFN7Pm9WRWx6voCtiiJuSKD",
  "key26": "3K6Zur5j7hkHKQG51u4zneaSCPd73n4EP2tT7DsKsH4Tz5a6r1XXiJcWvVhpkTqUZ3HdwA1irFbRvUfvzyamBFD6",
  "key27": "V3kZKxpnxtD22MTiGNnupKJE2DBqctkoRZ8Gq57W8tHex8hM7qntmSp2Ajcx9oratBbZ17KK8LsRTribeNeDU1X",
  "key28": "2w1dFtzvbHYje7sMPdojnaxoAdp5Cpj7UpZY558hHqCb9J7KosyMRPUHW2CXsb9aeLV6AHDm7CsJCV3Kk62LKQHn",
  "key29": "CFkCYNKgBTMS767PHFtLNYgoQTwyz7WpKWQwphKE8cz6rQBnvKFcCe6hQmXgKdZf8JZXG3W2mv79uh316anP4xz",
  "key30": "ajZy8k4GcuhbaFGz38Fv6fPfXnhWk1k55Ntgse1BW9s2RKmfAMv1RPz5CaHjswqDLZap9qm9g6azDrpg8ioC3MH",
  "key31": "fskPaDwovzKyA9qjKtTxRaeBYKswxieiUyyhqSWG5iXaad1RqkCntYm7FmWx3rbttbHufhZrT6D28T21M7d2rg5",
  "key32": "3nX21Uos49gM8h8Eb1X2oRehN478JFmUTp1YPw4hN443NFphXQwYquZ7UCdD4E6ZPo13iL6rqqRjSn8jac4cTCC3",
  "key33": "4Pn87MYffPg1q6m127ej3RhAs59a8PhgFZNAoZ7muhsknEgBk75jwHTQryrSUWgc3ZYcf3TgwYochNDqNSA3C2ME"
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
