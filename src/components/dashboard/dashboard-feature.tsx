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
    "8gRAsLYGbvzXk2zgnP3AsPtGnzikq13JkT9rFXUKSFdH4dFTKJgm7x3rFcbuqVaeX95NimPVHmocxNUYmVUPJDD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AupbrwwXG2yomU9R4yFneeN2yKEVFi9bUUW5L2xHsyzipQsUCrCW8ESmvGw1ckKt5JydqzKWL95DnK6R4oj8Kzp",
  "key1": "5XEfaXje4Sg7ZG6mAFL74hJUyyBgM3zR239JBGQq5kmgc6uuSE5k6FEpA3DsWQdiuh2zh5jYeJiT21ZNtPGaLXSA",
  "key2": "t52pmue6MH1EcwzdUQWozKx4guJf4JCC8RAAyWC2cnBv6XDU6Lj64J6Cgynu5bnmsxTnjFJ7utfg98WDCP1sVfU",
  "key3": "4XEfm1iAros2dpvxLpxvaYWGArbVWiAy4BLcMcgswtb4EA1pSU5kLDVaoNFsxr3K8wVSenDrk9UzwSocsNrxS8ki",
  "key4": "PrP538KYUMhgqomcT2FdDNQTjjioP5H5asSuCJH1zBTY913ADjTTKGCeGVnj1RfsuDoHyTk9o2c4wmgCDpP3Fca",
  "key5": "2ThKHAX3Gs1Wws83UiERjtm4ig3XbLUQFo8UNDbS4EX2cW6s1FtaAihg47PA44RMPzDTeUuvmUuFJ7R3ih3y311a",
  "key6": "5D1hhkw6uR5yjN1WdbPHczN3amPBz5Rn4vJAkBe8rBr5hLZuxN7hLk2q4uhyVpgLnfcD33YQvmMsJAUPr1jkNKoC",
  "key7": "2sFNVEGULFJbTRtpDCJJPEmtAbLW3GfCuNofJuXs7YpZCBNcpBQMFiehDFRGqTQeYbAV8G7WTcqqbdwp5fyF8fM2",
  "key8": "5tx1Xk3CvYLBbsaL53m76XPsLFyQe1HkUrYkZzBC132kSZnG6Yp9APUBcwSPYHud4HLZCKQR4FWofk9kbTdjocJz",
  "key9": "3ftMvbDioRmJSzgeRiujQ7Dx1GZWKT9ZVDzhAa9Qi4rDfvUHGntL5CT8mw2Cur2VTGbuLRKvaLj5VhrG1ExB5zFu",
  "key10": "dGqdsSkNXgyQQHgHHhkAjbBrefanXjqu6cys5JCa2PSaTdG8CC5DVgQetTfco8NmKhy9d3VoUjZoHAru1pnkaLs",
  "key11": "5M176kWk4feV2XDUMEZ94fLc8tL9r73pppHsGTPTFEJpo1ZVVtxbffKRRzruRbTzmWVLLvbBpV6Q4vqYNmY9WfRT",
  "key12": "3MtC68fChXtwUYBCtAYGHrTfToZ6HRfyYDAsA2TYB1TxyNSrAvBhJ9d9yMYSt5Q6wvEWYNeDjisg5G4fad3Y3zgS",
  "key13": "GPpRzMb3NbzTSNgJKsGanZQXZo4AGZBqKhAbJn5zKJPwqJS2C2UbzqYyGPeikZXVkyCCtR5ZLvEqkRXVAFkN7Lw",
  "key14": "4RfjpFDr8GLbWi2WLEnYnES7XsKhiwPJ4grM7Ms58Gf3g77d6WHU2uxNzgdATY7fos4MLjERJBJsf9pyabcpZR9L",
  "key15": "2ZPqeRot7u1X9V93FtLc11ie2p4NkoZBxFoaEN7SmJ7oEUqabsT8QecpXmCm9YiWGMcTNtbgLZgGGkupNtX7JQrB",
  "key16": "3vvBCyD7d2jyKY6sqQchqKVrfXorEGMA1dyaNBQU2eZfhwyoPze1ppPwanmuWnWZyLLfDb1DofujmTqZRbjGfsPJ",
  "key17": "3bst28NNREJPaUaUBuJdSir5ucgEB4mjGmYGk3mwJEmFt4KQnEMdeQaMUXL2G35nTCQ3LZZJZDwsDqhFdz5FUprj",
  "key18": "4VimY4qKyBwKQr5eeYA3c6xPJFUyYi6crLbQmmu5vE11VSzEVEf6aNqWTAmiWnoiNf8HPyyYLsai2rgjYhrxHQx4",
  "key19": "4Qwo2iPHTwJ3sMo9qvdDfnYddQHmzzF6RSPxBEtVpbRr6Am9Gp82wTnrNcJExUg4isK2Hb7RLUqgJLQJGVixTuet",
  "key20": "5XtAeDBESr8XXxFKcKLt9qUjStHVyQTkEvLpZtXyZ8y3HdBtsjVy8JZzmZFMWtAydLpAumEnsad3aTKnupRZV8rX",
  "key21": "3dTjhju4E3jc2rKgRRCNjqagcozN5BsaB5xDEb2bFtpHBTeQtz1uNhfCfK5mXae7pB7LKZ8jRhbBUtPRYGVtwwgR",
  "key22": "QcSNKH2WdekFMcShTi5aAxJufmd2qP7szdy8wMPQkYT7YwNqPezV1AzKKDwKshgX9G3eQbqm1XZ9NAq5GjW3yYD",
  "key23": "2isRv3BLba62pie36M2LAgLBBrxBGr9RskFo7FjvAN2LA1EPUSFC2Zb9DXBFxtMjujRcmp1hazR3CNCgDiJ7L3LU",
  "key24": "q3dmUwNf5252MVkrGtGGRekd6VDzkhcVVRaYqsoj9hPLNvQ1KeSQTEe9wH4e8sFVw35qxXcLxybDhhezSPzbapx",
  "key25": "5X8wvqtov3XdYdXQ7bmRXSK25bh9A4Ucj6XKE5Ky4YjHDdDazufmKnwncPNgBsAS9xtmqPRBNgEaubG4FeeS3jtA",
  "key26": "4BNymxTCorccfNHTMnaXBMPLrr7xzxkNqsSEmc5onzC1EgquBn1eExCcHGTCRaj1FQku5TJFswH7ibTMa4wCk1Fc",
  "key27": "4ZhGDJDazogvaN1jHE9EJKGaTUVA1X2QRJR4X4nVKznUTJyBCFswY7CRLyQkr6T6iwz8S9BQVSutKrAac1rrHCX1",
  "key28": "5jC9xiSJfszvskG62VbDorud9Hrw449S2FugNDTkTHBW9umYjTpco7Z38jrCbbcktpV4XffJZSsXMMPVHQPJAncB",
  "key29": "58UnXeiWRuUiXjXHJhHtSXS6Ue8o1gMZmqo6LbViNKa95Ei3RUMEbney9fqNztgofpQhZfHvMrB5RgJVSicj3qum",
  "key30": "5CGcGXNBLcyGwFc46E74njnFSC1qdFrJJ2H6fCthwWWRg4q4p3VuunT8hj6RdULXGmmAQCFaNVkEDn8mNExtukJC",
  "key31": "8pSNNPsSzUK2DWfJ5xcWr6FTUvGNAAxtcbEBQ4qmxoPhNehZKrfp4e9y2eaHX66YXt21Vxh3UNytUziGmNCdcgX"
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
