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
    "563F2nVnXgRhhp3webaJ4GRhm4DZLXsiMmKbrZHT2zEt67PjrNEsZFyjYrrwwnvBvTibmpeBujm38hR2xhdB6z83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UQSJgfKXpTevEfxL53Kten8mLgjc76Uyi57P8bTj3yB2erBbo3XKfVEtZyG8MZA33SzHhuMp9myMQvNSa6oNNH3",
  "key1": "JoRwuuAvT5TDruz82HUPYkBGtAr4QHbDRKM11QJkgfozB4Rbh2NfbxoJZCLN3L9bwz3JGsY3CA763BcVQRdZBwX",
  "key2": "5bBC43ajFdrnecpVk4rmmQ2bQE4Uoizk2qQdvcpVbaKxnMdpjgUe9cb4ThDFT3fTTNY76Rgg6hKQTYSXmSbc7TNy",
  "key3": "2omXUbR1U1GPJzYVeAx8hBzwwQ9xkSxQcEn8YM9dUa79nuE7BsaNhA4V3m8a79rgT4ySV1QC7KcVh2XJd4XWUmW9",
  "key4": "36C6yDFcpPgL9HiC5cVFpX24XcrjZFXR5Ykg8Wwv45p2GbtEJM5KDoE6kwfm9dqCVdqpXV8inE5x21stUHwgQQH3",
  "key5": "CXoBjFh2ghqoc2ceTvAZPiNkvmhLj6GnN99PFoEuQVp2YSvbaHo5Pdca4ipK8UUvjGCvzs3E3ky7L6edJacXJE5",
  "key6": "23r8DH66EhNBnccUu8gM3j314M9JF695mePrPRjmCZoCRpEzmyU1rJN4PZfeuttFSoChT1i7qXUJxaGutsZMwPvP",
  "key7": "3atGy9tMdvTtwBEZUa14hjyNorTwYmVZPDdoaTSZBtT1RPSM783r8PSC2LGY7tXsrfpF1tdEKVWMGPmQkSdjbKGa",
  "key8": "48Dxx9qeT7RWT7jw1az2CrN6uX1JahLeHBeBfDDQfgmLVV5QXLWd28rAMSZF5Mj6KTwwPXKEMdMdJww7nHbPC1Td",
  "key9": "32svWrxUuMsz1qmEsC9ihp4FWhFYyw7dGPo7Avfm1ARzq8gFUHp1uivoL3xHwUQRNsbUzwWTc9DhDYQjK9ENZA7X",
  "key10": "EP1GrcNY6S7XQ9EHusCMoHhcB9YgeUNZbAAf3qdqqtY8Vidj99mxnRBakeE5wHnMWKZnMsk8ADBbjYySBym5hPJ",
  "key11": "55QDapPiZ67Lo788jzZgUTsFd7fvg8ugBSang9pB5bHFn4nhXHskwYrTK22r2T1K4F3H5PvXDDzf9cwFAVgbBLkr",
  "key12": "RW1U9T8KZzEV3wry7WmdJUBReQ4yNbJPAdgSVmZkhWQHGPHFzxCYkaz1mGmwXMbDyPm2o6HXJSao1b8QJGc8TJ7",
  "key13": "4MGbENwkRDv2sKRqHS6jSdGq6cBu6BT9951PvbsMUvErBzFnnBkYY4EzMnAHNmemeyr66ocWrUFex7Vj27FHFLR7",
  "key14": "37Kw7LdsonX67CFgRvAzdB36tSEtDh6bgDLPNGv5SPVeffqzTVMKuS88k9mUEhSUqH6Zz9ctVqPtnpac2ygHLMVF",
  "key15": "22Z7VdAYokLvwG3K138qwc1xxevxgjaQzo2oJi9sjtZmuCKaXo4sJHgdnkw8L11RTzcZNUEhBVmdhSVhenyT3sr6",
  "key16": "4sAnYYod2QG5J6GZfo5UPZLk9SqNYvVka4mEiKW6ReFJhqqRxhqkiwd4huwiYibdw15qKA2V2NNGDoeGcyB8uvLW",
  "key17": "2D7EmCSvAdpwShnYxYd6QyBp8Nc8Pm6S1gfZ147TRetMPCygeRFq5fDPvkbtAFLojFHwXJpk8CGBmduaYtK1eH16",
  "key18": "3dU4P5ge1TAp4mZ4nzRtkieu9UHgYdrkzwyDJnvmLdak2XooZ2rGwCp9QbYVMXXuceSL7RRk65RBDUb93FBiD9MS",
  "key19": "qpzAqv14r3icN1ytUcEfqRChHpGEf3J2KKeAa6wS1wEQVe8RZ818xdoqGhLfhrdUTikvcrVYh4dq9bsiq9E3quf",
  "key20": "5pfCb7T2c4ip7J7A4mLMttu6NCfmUc6t4zt8mxVnxysKuFAuoiHCycoWfr45HrY2bEQreFAJEEx3BYXNqXm1HxJ5",
  "key21": "4cxrzGNLtL2URbvYiXwXr4pwHEQbKNZG2PdwHLEJtKnGMMechjQCFQ9XXR2AcHuH5cv4sqBo4Fw1XX7VmnscCjvR",
  "key22": "63yRuGukR9k2R1EF5FKoyRhEityRMDt6fjyMsp2rTbzPtTXWtSFVLTzoRC87HsEgEGEBMTTFFwMiqP5EdUXakndh",
  "key23": "4pU75HawACeWRtgAot98vfsJ55qMr5T8TTpHC9nc5cXagUCRs9zsNB9Bbs1wVxvAHHsBmkvD12jRMWv5xSqvzJqp",
  "key24": "7vYWsy3nKp6HzJBcRLUCcd2XAXbfXzSA6vvhSYSwJQbVrVXHyWQPri4v4aaqhMYwuMxYQoPtqymYNkDX5peS5tX",
  "key25": "2sWtNrAQPVqsfUz9A6tShG1S9yUZiCqzMhPuCDe6oE83AmhRVV9BsYECb3DrXhWuHofLyXhGWVzy9ELWKcqqtpH1",
  "key26": "MfLN9zxKGuKo8gzjFUVueWN1v9mLR1ZBUr4yNi4UepU7aVUgWaEfNs7agvfybumNpdBCCTYqM5f86KeKpKPrtBf",
  "key27": "2JzSwsUnUyRRnhvvqHY8EivaB1NuNUyYUbxmWnK5T7qFb22SbJKyJfdpwCDq2Xbrd33AHCEte7gPxgTgzjtbtqm9",
  "key28": "5EmnKyHZERJVJpqK34CXRHtKNoSmvKmV36W1dYpNFpfd7GiHsDNG6EmMauiMUovv9W2aPR5QHbYYEgK7SAH4UKWN",
  "key29": "BvVw6oobHFVzoVWvH7Ay8wiEYAchxZRYrjLyocFi25NGAkQuSNKutuJb89XHERFzwNPKMNid6rbLFKmFGCL6EkC",
  "key30": "2xDYZ7T7Aw5tYqK7korAT88Vy7yCQeTnJcHG9xu6GdEVksd9K4BfYMPKVVnJJ2nTJVenYqCeD9AjckapQYacgQMw",
  "key31": "3Jryz5pboxGxLfAgydESHv9QHK697mRDLgEiMu5yvh7hZqb99JFYEkfLgQngx2zFh5TgdzpNN2cZrA7y5v2cb2z4",
  "key32": "5YBLRsQujBEofwhvHX8QvdLDUsFmfGB7Cjye9AWqnVZ8xxvanW7c9gKZWQ6CSM5akFmD8xe4KxGVFYs7ygNDB14t",
  "key33": "4NPWMFAix4ubsFsvwevoxsFiHGkQkvRP4FHdokYmT9gSARQ66LyeshLQugC6TvbAVAMQCv4o25Gv3sByJxTGU5gm"
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
