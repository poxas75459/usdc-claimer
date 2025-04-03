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
    "3yEUsdni2oPXzMc2B6Dkj7J1Z5dRmHwaXDS4HmgjLWbNKNfWToEP8SKNjKd7yMWisisDx3R5jtjYKPuWZt83reNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SWfcAwTPNjC517xrXVCHTEZXX64XAm9xiw6s7YFgTYciDk2CrpZCLBNnGTSTDDd5iSSqikRv7Rvfkij1kYCeKTY",
  "key1": "4H4N28AsKWAbxWZ3fou1XQyAsR7sa9yzjrT3HLQfbHZ4CiLUnV626T6iTxHeby8EjayHYyYSPR5C7fJsbibxsW6N",
  "key2": "2Czj6LQL12CiArvtYKQzcpLMNgvb9Mr6EkNuRfc6RPje2FpBxTozv4VB65Sai4sxBs2PKmmTR4GTU9gSGh1qB2ze",
  "key3": "5GwFnNe7JQbRVosW2QSXbFPXPzYPG6KAQoWydkak5NHWEGwx23YPgbp9xFAmB8anikZhtmYkn38ZHvYvHCn5u6QU",
  "key4": "4z4u4cFEUSBYmaqXmTGwN2D4x9Dzc1UZs1ida9MQx2pwY2DmcB4JjVdMUh4swfPEeKXhADpMyhLWoEsc1Zie2Bv8",
  "key5": "4EuVvkPEFvF6j3khfxrjkBU6DDTVt1pxyarAwmbDEXSoKXQvwWuoBvNGk6Kzs1HbEgQdi9PLuwBsJriP4XkqqKhs",
  "key6": "49hM8ZNM25iX2NHqqNeKKphRHXrPDn89SJ2TbYsqAtUTkdChfvNTcy5u7oMkuy45Zy4bMcgZqG318YRmJEPCZrng",
  "key7": "5RDjzoeo5PbxNtniRF6NF1sVGaryy9GX17b6vPQmd8mjXCf4KCkBoKaVkAGVRMxL6rmtGL59B8RVtVpRLF6jdU1p",
  "key8": "4gkivGwtHTjgCj5U9XQ6RTkbF511YpJycrB2FnmtWi3V4Ki27bLR3PV3o1wMDBGMukhEsyXB1GjPvG83Tu7QDmKd",
  "key9": "62h1JjHksrkoHqoAYisMpfLASWjGQgrt76AYP5JEpH4HA36CYTGLzwUgBJG9kRzGgkuCDkHReDbn36xpLXTTWZjF",
  "key10": "5DGdfwucDAsaDvNbCmzr5H3SNJAmT8hcWmgry79Z52scZDvQbrggwGAUE796LGH7y5NdCcZAuYEQodmizwjUXQ4d",
  "key11": "JqpZ6EfhCit2hWyHERy9MYiakPucMconVqhu98ySwXdjMk7yqnTiGuMNkqcThMx7eMNwMetZtTgvPpnmWA3NHcw",
  "key12": "5XXAprT4z98AbYqLWt9hey9w3wwJ2vavVMh2sBiuXLYd8Ef1TsJm6MgN5LSDsRuVsTofW26neEXkHQbZAfhF9P8M",
  "key13": "qgZwwm9uYsauXgY5jqWuro37ujqGn3GPnNNRQQK9VtWRGJpPWT2xrB2tFtbikB3rR3FwTzYbb8jGQL8Ti7pPYs6",
  "key14": "4KffdnVchvKMHCCzDEcF7s8jQi28Wj44ZNHrJ9hMjiPaQ1qjYYRMmnKdH1Uo3FoqTvQWnuU52wsva4NbH5qcm1ZH",
  "key15": "4P8AJj421GRNrTh76BK7QUyvfKYUx74VdJAgbPxLopVo8gq5zKXLX8BJ9q13HMoXUMNKohnJhQiWrJeR2RzLVeQG",
  "key16": "2KfxSAxRzKL4XMRkfZGmEU2jkv8sLNabKDCDcxdujgzCXSnCu3QTUM9MNhBbEgeGma1DFYk3soQpSeb4yn1AeH4B",
  "key17": "5PheP2ZP1EDj3y2CaFup7fVSJppXJ2uWzhWwAnpqWFzL8JAxKcNsQgACCpRi5XCG12XJsZNPHS167vMsNyMXS89H",
  "key18": "4J988FHAbkKUqKe5bSqgHPeeFsLUhc84v7F24PHFtksekuMxAj12u32Lvp8JKVGRLW3gh9S6Chd84kCRQbkP7snt",
  "key19": "2LZqQuT4gamQxtRci7PcVh7Qwn1tpH5qGsCqhzqg6Jqc5AVUojRiENPdMnUDZzw3uULfcsTaXfVQHCHzzGVGb2k",
  "key20": "dfh4PbFZnazcnyQw7AYf27SWgE8KC7vsuT95c4fVEmumgALyt7U99FT64YkaQjTfdNBKAaGevMu9BrF4pkgzhFF",
  "key21": "2CT7QrrvnMWWc8rCzjUxShH5X5vFqPGHqZ4VGANSi8jCvJZzXqiuNwRW4aR63pg62GzJaatyx2pbmGBfGkcEENuc",
  "key22": "52jixUuqfaXjoSRxHc5T4dWJms5Q7Kh8BUCS9weyUbV1hbUcuVhUhc12R1cTQ3JaxiWf4Pz7bHSFH87pMWxWGhX5",
  "key23": "5nSsrUmxkV7hm7qi4r2EUYB3qYDw6KAeLKGYGFBdgqsCnT9oEytePx386ynF6wEUJSUX1hityCs8qnpkMD7GdaDc",
  "key24": "WWLYsU8W59p8yKUQSHYbb72bS8f5GBi7xh5jqhzTZDzV8dt6TJGxA9s1nXR74qovWFHmwnZuCv27eaJAAucmWts",
  "key25": "25vX78nDw21xSKBhYgJXdZ2n1nRycBnmKPdWiyH8Rss9AgHBX5mWXtZQfXXRE65ZPAQzCwZWseVv6xaPTEzLfKPG",
  "key26": "3mcDHn5vM5fP9ez1hxpJnqy65RoAESFYZ9P9CSy2S4MfLCdQxEajyywQYZtcgPor6LpuvZKJwSYJYn7YTV2HRr6X",
  "key27": "26dZ2wCbFSdaRJb87mQy8CHeiDjCqhUmEWic2Cevrv4YNri8M6CCEFySmBe7oR4EFtcCWEPe7ZX4mQB38z8eQRfY",
  "key28": "52aknSiaW7xTUzf8W6iVkT7qsD4drCndKsVKDLPEoAvaoK7vB3gxcPH9U7XUoHNHvFi4T81LB9BAZ2pz6jqwPcnK",
  "key29": "JCXqbHZEsxQnCnkmsSy8Ty6f2dHr4rpgjyWHARfi53drdZCufTSvDFhk89Mho5gjnFzHBbD3Dp6pBhWJoKcFTp4",
  "key30": "4yBTtr5bJkFFa74x1yi7RQvV4dkszTgzmshjrbfSycVYe5ZVznAVyzysbdwRfAXaLGenJwLPd31XZoUpSL5SugX2",
  "key31": "dJ2jh2BCxUb4AQGgLHeyKSLWxW9x1HtUjovXo4Wvpx7AuhrLy3hKYHQoRsYyGqHzVWKeqS7vPVHnMS1sbQaMDuc",
  "key32": "uGmWDdd1oBaomE6uFt2ghLkDfch8eH7u1Wgchmjo3ij24uEEpKRvt1d79mn18R8TQVzCfZgY6z3bLoYGxQqm7AA",
  "key33": "2hKFK2pc37aEvfM2puNvX2xsWpiBGnzEsfsCeePxuF5zBSEqgjKh448RvuM2acE5z3UCQZSh4Pb48f8cWn8PAnDV"
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
