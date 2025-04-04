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
    "2mNRmqZeH4U7AYJjRD5HCGsZMnjjQQ4V7cuCeQZpyeCWpY16LhzPU1sScgeY4AZuhRHHDYGRrtdLP13dwoGrkpvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RCAUv9Hwd1KrTAjTKxvndgSfCMpXajK6ni6iWg9r6enFSGQo9TdebohFM6jSgtT8XMj4sxXFARuETQqXoHc3mYp",
  "key1": "2su6Z4Q3FK83FaT6LCXs766r3Yfwo3VsqkKChYLpLBHj2bP7jHbWZ6rqAg32MRY1PhmGsv4d5DHJirb4Y2BSbVk2",
  "key2": "5h6VKtNQcguvNQ75RN7n8dggLySMdrasQjzzqE59D3EKhZSkZB3JawAdumAp1NnzedExBMFmPuN5fB9cJD9LbjGB",
  "key3": "31hJBEg29RDERtSEXwmi45ngDM1H4Ns26JJ2Tdda4gJnU8WcMqyDto6ruun9Tb1gnXGV5wNP7vvdrY3cRYNQqD7e",
  "key4": "38gxQWTBpXcuv4UHuquTWZjgwQEx9dHkKU3dpbbH8Y7qF7vEGAuaCpxwPTuWHyRhnpMLDiB7UoAD6tN8wVTGw6NG",
  "key5": "2ehaaokn6Z5WLiJgkcc77WdQwRiRvWAmzjBAwepeCrvBjXh3Q2ZXA67dUAWs8Kn8LyXTGBYzzz1CUZoFGgjFs6ww",
  "key6": "5RSeWqczYhfzu3a31BtWmwhQorYYn7J1iQ89FVuU9ChpgwerS6ibaVJhKi2P1HD3xuNueH4RyosSfPWWXoBCQKqi",
  "key7": "4kxSzRViQAikDqfpPXFrt4mmBa1ajzRgBvATJ6DZkXJ5H8TH9V2Qx3oqMLrDKTUhbNqtM5dDN4DZRxpSrKAfhQEh",
  "key8": "4ZWZmJrA45jqkfKRTnAkpT2kzymgHWEmRe5CuNgHWKBazZxsXK2VCYVSErrP7XWXrqru8b4ToqDMgmCZh1XfnReA",
  "key9": "2q2zUXGBJP4Xk5ULwFEyKCBDK5Nkm5CtghtXibLN7F92KjW38BDo7iy9qYvNQXrmjqkHUSaf2JyM6KBCPwftzTfG",
  "key10": "2PA912fAipmCAnWdSbsEbSNtBDrw1aCCDvHDKT54wjviryPNQHeqbcRGRZ9s3McjKWqZMQ8DER6HNSPRFVPxcCHt",
  "key11": "22rJmJiqx4b4v19tDs2G1F49uPb8vvRD1gxvRNa3HMdPh3REmUyyqd5xxW93LqgYkqtfESfCEh8ra55ez8CPygjB",
  "key12": "3wooYPHvKepuv37Y4CHU7B5gSFhoquYnQTnYRnkQSiiDSip1JeFgwomw5Rc3q5phyUBHrSFYwSmNsvzXYhxbZ9V2",
  "key13": "2aWx5UentYgCgdxX3vzbhsfueB4eMb6gskRo61RCv7n3wV6YMirSdbaHz9VGWjdQzBiCvx8JuuaRH78nhXATZSbX",
  "key14": "2SAUfhSEf5eqGWpDy56xqf2NWVtuQnWCdV5Vcf7xcmYk94aLrcq2TvqUBSbzTkKzsp9ar6QeMyspqrdWP9PHhXTC",
  "key15": "65GeeRJjDFd3aozer5YHVYtfa8PkjZAcT5B5ouFZzWKGGE1PXbYeYyLvtFV6MEoUFHfGUipnbWwELSX9p5EmRqLb",
  "key16": "2PbbVo9j4BEc18uSGjcxf9X3WrXp3ZrXaMs9ujUiQhnhqowfe1HmPxwv16AcXeVjL9SwokaMUFM3qVovQEjPyaGz",
  "key17": "53U5kShE9XqALqcVwU7BZdf9KK3TKRXo6suf4J7hJp8mSrFX5GebLWPi2QcvD2i84Hfrx6kL4jhTydaV5rCLiAAq",
  "key18": "2SoWV9aoaJPCfrPKg1nVBkfU3XZNgzKXBrgFmkDFVSwsvh2iWqYaMapDivAojj1BegdEAm3jVeHQoEGvieKP3QFB",
  "key19": "42pDHRev13mV3x2KxAoW6TWUuaSKWYPUTbMGGUBQdoGPyeeemtU6KpuUCKyea9xHtUkEm7vakehBkFWXBRXoEd1n",
  "key20": "2JZqf8rmsBLD8wtc7pkEtioxjJTTh4cvByYum7CZApmKzcm5fEfYnrxDFVeQAHimRDgAeDseSjX4bfXs9HdUMLDm",
  "key21": "5kEvBEqtZTNyntdw49t7vnVaAXtLZbZJkHvPF7hqDsuy1fLboQaXn7ebDAqunPsKEFAj9RLQRrgsP7b7U91GfdSS",
  "key22": "3N933rEMUsXikod7rteaYdFND7fxpWFSVTAoLS8mt84scPCG7c3RCibDXV9qzjCbkcqAeiFpMdw9TWTowkr2GJ9i",
  "key23": "129TBye225VFaFVfwoAEFMWbCpXHm1E4cqm1XAGqhHgKZ6SraRscYUxE38mjjrtyHgDnhhBQcUwV6w6QD6xHgQDG",
  "key24": "4py4sc5W5UkXW5caoZYEbjSJtJoJq8nada8sth3r1MDVAsip5FkdVh3yFYPJYZAnpFkKLCPUbcCJfqv5sJLnH37e",
  "key25": "3M6h1uJZYep7GmNRC52aoaoNkLB4SFEeaBqixLKmceyKULZrHpythKBPRYZBLtXRMS4rjV3N6a6s5T9eMgunc3Ti",
  "key26": "4uVErADDomz14oytg7TVkmXpCcqDhTGqm6VDwigeE97m3veEXSTnFNcMShM7Yjn4mKGoLMX9YcZMJ9jmLkeovKWV",
  "key27": "51o6zHrEmUR45j6a7wN8N8YM3yLS5rnDiKAMaSCzpbTptC1iEgd3v5jfyR8g1onEXTK5hGLQMAnMs2XW3YNvJhJy",
  "key28": "qFTFGHMT5sWQwciRt5FLDoxt7iiUEUBmkh3qspFcZeH6QwejiCkVztstoYoLv2DGMcewRtKE6Aigs9My1tbHYJs",
  "key29": "3narmFfGkcAL3N4uQZRBQvVuMJR92dTHtBNt1vxT4kEL1on6538eYJ1LQpC4Tz1y3knSq5NYn9Aks3xsQv9kN9om",
  "key30": "5o1YP9JxzzMZDvg6y6macAuiVeWdZ3nrKVgHYa33CJYW1kkUqKwwhRHjBGM9Pstgt47uvDTrZErKc2pujyU3p8ZT"
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
