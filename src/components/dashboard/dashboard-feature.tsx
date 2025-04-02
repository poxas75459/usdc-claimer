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
    "3zkaS6EYJ8Aey5r6jufrcrAppxwBtkJBSATrbrq4Yyk8iP85ZVFB1zxHNYYc59pkw9RSuDedhBtbKiHbtznjjaZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tbBonAhdeSmvS942tjqkLDQMqP5sxPdKrseD7DCZVXVXbJ7Fm6xXYdffMXVJcJBsqcjjTPPk2g1ZrQjuKUpMDig",
  "key1": "2f8tr5KhJu1aufXwoXb9FHmJ3b3XB6AA4k2DqprGkbz3CpcXaEpqE52ML2zsmA4nTwvfB9YqMxigJmUtNbzRcDYz",
  "key2": "2CTVnDpCCKiarEyR1jHuc71y7N3PRsbyX5Gu4MjCzDc6JkYc6T6D2PG6ZJkfRT8XAQJaLriEK6fN5XUT3FJCRr81",
  "key3": "5UyGngKC2ydWr91nQ4HzAtvYqrJTBwc53iVJpyMQcR6DTEwDbn17wELfjc6kAkUGTgXUdypthZzyxZPUzJSB7ggh",
  "key4": "qwH8fgq7vuiUZzeKxtysPGmGaBRGdE1JTkjM1Bnk3RKkfeY1Upfn5DpUugwtpZDeFGemgeCbUmfnuU5xW3mHmtj",
  "key5": "rggvmfGwdadNP4Aa5jjMy56JkFH4qdAC1R9PiNg1MfhA26Y1vgA1JaXaf5Hvd5Gzk53YGXrQTkN5jDnrTKBUizD",
  "key6": "5J3K9qnvwWhyGxxVm1krwhiKdTKMu9R4mArxmYHc1sgf5qNCs2TUjMRZg1P4NFNN3CKizReht3s36VUZPqddySdm",
  "key7": "6736BxnaXBz9WQWSU59zGeMfHGCHdWX7sbDNMNScPb6tMtEWnFgm55SMuugcXk1sFkxXmekiAWkSD9YbUCNoNdkL",
  "key8": "t2KtZ1PuauvVkV1QJfGfjNNFGCk4wjaMkZDjQCgXYXUkHkCZFKXGhUY1bvdsS5GqDdcqQGLTWE5MFYp4VDxNoDg",
  "key9": "67cNynCHcN7xzxuBvKdBqAev1PTUKANLfUeEgRvzE9W14YzFGseUNTzxcFPPva1EVt2dTGeL5e14tf7rDWcEjdra",
  "key10": "3FTp3W96ZJPDRdRjdyYVaqEBXEbkBrj8ZG5guEMi3XJUBwZZ7PiAC44AdzZJ8RAMaC4RoJBVpbP3kGT7pV5yN9Eo",
  "key11": "2hgFeX94ArSZtMMA3pBGLbXpr5f2X17EjdKJNdBLebidQon6QLK2JcaNxr1uxGH3TVqduJbRagxBR2T3KVg9yFA6",
  "key12": "3k4svRMj3uxhpjrt7KtCDmoA9ESWecwmcSeN98r6o9SSWvkChcC5ZeYuWMiVX2NDX7EZtRwZz6NJQFW3wzZUDHA5",
  "key13": "2ebEVRCz33qFJR37qtJEDr63wfp2Wf1pDyQ1NGnyeaJqcxVUaosYrV5m9pJCvpGGyaxCisiydjqzEznZyqJmFz38",
  "key14": "3Dss9VbwFgH6zLku65LRTucodTjwUjJzdiU6TddW3t3hvnbUiAzKhLrGSua3YjQyo5Xx63T6rqhn8rZFyMuLszEQ",
  "key15": "Mt5mg4bnc2gRKaVvFyKCS37iFkivbtUxD5X4tPJsmVBAqJSinL1JSygsmW2KGCoA9A5BN64PKKUgVPetqBikG9n",
  "key16": "3j5nreTiQTAnF1ZRvHZoKaFxVrvF9YbVaKvwLtUZksNsvJsKhWor5vffFKxTKAFeVnKxZV9nwfvf8DBh84t9KeZv",
  "key17": "2ruAngF1vDQEs9ZozijQS1vQDoPgatxYXhejyehpnj7SkrgFqxsFopW2Bykhdk8jTHMR9q45qpepgGPdKBcs7Dtb",
  "key18": "3miAfNP2CU9NQZVvPAQjAnKsEUBbwPUWwDraai5MnWjjEjjHWb1ZwMcyUAQUR4XvMKmZgR3z9B1uovxM6M7Xrmrm",
  "key19": "22GE7qQa4Rsh7iamiyL3MSfhEZLCbW2W7eytpjr44bSKanRtmeAuHTHq8HLa7PCpjRVWzttBg4hRY9AGgNGv8R7e",
  "key20": "3gz2YqPGz6oNmZQTXRVAQAwuWoK2zX8SysbsPxF8xxiY8yRa3huRFAwLdeF9qnZGRBMR2Q9Q4REmTGANmGeoNra7",
  "key21": "WvTaTxhci1nRxkxkf24y6DRFbtLCYgysNck8XJqU7c4fddXB8hntkeiU7q34uHiPVf3xafrAYJLAuVQ1Dhz2k7J",
  "key22": "28cSasia3PtqAHDYwgoTjXfJvcHA5uh2UFbLPjCoaDbTXUbn8sENvvqPHgygNh3n2LK4HD61xV9tDKmi92GA6bYQ",
  "key23": "5EAyyzff4hVLd2K9wqjQjNB74Uzn98q5C9k9Yr15JdKHqaiU1xBmX4AY2ihx1QScV5hUs1tG9DjFjZzMndPNEqck",
  "key24": "3QhAMPqfDVDi3GW8Q6fs2AsypuKhAXcXjTgfjfc65t9j4R7UKq8QzZvjaSUUTGzwa8iF9Bgt7Qmh9DBJjXPxCRaL",
  "key25": "Jb35Nq8p4eA792mAT9ViFPFp68dzF43ERC1R5D9KfyfuKXkmhoBb8Jqp6bvYcJXxsZZVokT45bW6vXBzSUaGELF",
  "key26": "5Se65p5uiaYZaUbbN77snEjhwyiBo3fca1nCQtGkN3rkpBcUmxqM6M1Cgs7ykxSfuiHBRyFPL9GgMMZrcmQ5TAV",
  "key27": "5KKyqQCDx1278wikHNoRFiQUPjFnW4XnbXaFuuzTgN2WPpeeQQN89PbuAtK51KLWF1eqqJMdsNXWFbFcrTw5WtWd",
  "key28": "4TwuceyWuuVYL3r8Df61pVvfxQYbcA6ka4DVEBF9tzbXUjQpLWjb9sDNbv7fkkXUTFAGS1Ldi26dMXTvCy8c6V4d",
  "key29": "2kzuFjFiekLotg3wvjtZvuhJaVBXECW7JELucaEgDwR56hpxCA2wbTjhsWGyJSXet4XeuQUHF4Zb218VrrgmB6pZ",
  "key30": "ysPR6pT4Xuh48XKqHmCDaVHgcrBhHYU7jDuVwkDKmsjvWjs1r8E6LM1sfyuD38odCbVvzT7xa6Xj9M9pPmCsgdx",
  "key31": "3yBbkcw5pvPgfDX8oseGRWHxfae6NegA4K6uScuYWXLXbM6weXHaxsGTUTsKTh8BHYSuXdmVjMe6TLGnAKJnLLe5",
  "key32": "5jh2E62hB4D3iUn85kGTG7zssUersN8F7bYNXvrP2noGs9xdijD2j99qmhmkkUxsm6gTSQzrkzA6Y9MHJpP6Z2pG",
  "key33": "3VRXskAAyncmsdSzj8z1Y7Z24ySk1oWueqg46TTJ9FzLnxPEzbifnNweU2xovV4pZchtNC13eqP8uBFTCecBrDgu",
  "key34": "pFxzPtZdwKAn9dsiX5fKtp2XyXHkYcu4JCD3SzUDQWKfKg8dQoBksshMJSwg8fwh6ujvBHEGfMqbHtBqz8RCB4X",
  "key35": "2fx3BAMoZekMjiGPjG13ykHxAPmzXeDfLC8dL1zfeeE8sBiKSPdzUvAdpWNYoiEKWFia4u1RoKbLHb9FDND7LZzp",
  "key36": "41PoJmmyRoAzoWrXwof7wau9r5SnRB8jrAKkB8LhH6Fh2CFm3qGj4SCQLX9rxifxKkqgn6M7XtnMgSiLk3jivzXL"
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
