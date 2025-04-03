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
    "51NgBUxNqfCQ9Te8vEPWHshzFrW9rb9dGd4HF8UReT3VaEvNLy4Ctoj1PKVYWrG3H7LpoDeGDTwucyh5CK4BfSVp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DY75Ww2fmR93Q1Q7rEFfjcdnWuEtUVVv2DmWEZ17f7frkwsXgDqyFQ1xL1vF89vBmQhM5HjMD49MGU8BNnYBXvs",
  "key1": "4iWQwrgfYADTjRC16KWBGqKhixGk7NNLQJFxyVFRSV3rkr4QpG2sAAYjPNH4z2cmyhPdXwFaYZREgqJnw8ZEXuxM",
  "key2": "2E1yco6FsgBSCTjNB57ZkcewSs64mjtanb64MF7PU9nZJ9ev1CrdPt8msuLoq2N2WmxGWdowpBzzZEhaeHQZQHgM",
  "key3": "5apggVVfPoLQBJRxWog1VbMgqHWLpeoZPiwoFdmsUsXk9jVAEWMjJ2HTynaiMBHzMunttrsTX8sFdarwtMyF69FX",
  "key4": "dTghAyqFErjpUeH5EPZdzEmzDmjL6GPkn7bCrdUggvxzZfWdU8AwTg8AeiSHXg8GJmU8BLwSngcCrfEdK2Ehhqq",
  "key5": "mRyQ4CR3ZbqbgZFKa4GTw5711Qghh6BjetkfSgG5EufBtbPW9RkuiWrYPx78DiEqLBnBM2Zf2JXDMygoAhYAbFk",
  "key6": "5MAgAyg6y7bjQgoRSJmNjYctAmK9Uj4aSy3PPAfMF36hYVjvhBiqx4QQhkvgFU2mBcZjRbLJ67nQGWUyedHBj1Rm",
  "key7": "55WCHX243hPyM7gs3SRgBEfL4NtTb1Q7qMEBny3Rps7gG4ZqLApFj5itHrSrn5SgVjSeZ9Y8LJxbHUF93tS6XUF9",
  "key8": "5JWJXBssTw85As5icUVLs1ecqktWx1FiBTP2gT5xVFN6R2ncu8RXdbrJ4te4G5zAQrqN9hPL47aUDe6d8K7JtQzS",
  "key9": "Vd64F33gYMvUp5MsYkArbRC2nWmwZhD8jxRkCLUtXtsooKqTSp2xsuwadMSJvXX5wysTtXcv7f5rPAsu8hoogQ4",
  "key10": "k4gtfiewwTG3AqCjrKpfrkYykuv9HASAnbvEG6r8oFE2kBZbHPsc1RUEQSrwwnSqbeHipStu4ToEPuQnfLWv1ob",
  "key11": "4fEzFgyc1QQpi29anpK617UHc84fZKZqMrqs5b4DK1KJFZUtz7XsH6rvXdUn6sEt6HjCWZ9qcfEtRidxTqxZYcRJ",
  "key12": "6pNVA9Sk5zahHPyD9MmHnURsdK8ncv5vEvE7Qwbn53ykUvqDpB1dYr7YgAevGe9yQuBJ6ju14hJP2J4kh7KmKfz",
  "key13": "615VpNVgVyZMFEUfUgGzB7zncvi6QeGwAy4nuceNdGNxJ9futAKCo8r34SpTyhZzBGrGcxP1Huh9e4FcWquWgcF8",
  "key14": "4CktQGQA7pdQfxcd6q3Ra5UArApdRHSiPFzBFtcEeN3cp62xGVjMQ3mLytUUyLvWAqnq1t3V71g7BBqDDNEqAGXw",
  "key15": "vMit6DfaCx6MdJ6JJh2cBC6KgFqxkCCEGobD3g2JdGTNR5P2xvvwRVWUX8hp2ZX62eP2eFNL2kwA6CFUcv8qTkX",
  "key16": "57EbE9qfptrNZH2fDkVDFK7rKxoFoPmo9bVjeuUo2X2Fcy3Nx79CKLcGqWchugxDtXypuTa8vHZDnXcax6TB8g3o",
  "key17": "3gnvTUqm8FKVYXhLgdySeuEgSkGEJdmJ91RD3MEADb8KYwnegezqXkHVf8q4Qmpr9V9a5Gb8W6Sd5H3kVVa4S3KZ",
  "key18": "5ATWksAbcN241rUCAmNKk1drngpHEGdep2pqL1tCGmQU9FSz8JjGA1LHp1eJGcJPzzujP8zw6k6GEJ7QdrSeCADx",
  "key19": "4nyRDTkLKEiHbeDeaS4zakdLf55CTGYnSQHdwvYauBULRD3VzkzgiKLo1Nhp5493gZvJXFSRsw1i4AYn2EGWCY43",
  "key20": "4UsZVWujKumxQU3QzVsXCuk47Pyk3y9Ar969fu7FmY4urNsmUbpwAKq1JZ5wJRnFPrN5nk9v3bHLUDhTugujD8wy",
  "key21": "3qDTANF29s232thsmjzvZFT9WgK1S83iwxpDAD146MQBJh5evAHZ76HJopYRpyDUBnStAAzFhryZNNdjD4HZ17ZL",
  "key22": "2vi3SaDLXASupW3rBjCjEvhNYjbjaVAx62oaRRgZW7Wj8Pr1Nv8VTGcM2xWeu8fefLurThAu5QSgyZsTZs6czPEp",
  "key23": "28k5rKEbcFqoTt6dNKNZzjg3hoacsqAXVUBacaKDThk8RzKoXQ2bFtDf5iaYZpKu5cPYsZ3FPV6xXNtodvzn47vS",
  "key24": "5tE7WcxtHu1gNbby9PaDDvTrHYVYzinbgMKaKgSSnDuuYqvqNvWs4ryaQTzngytJFuqRF9BswahZ1g9rdeP3afit",
  "key25": "66GgMteF2qybyx6z2q7JJT1rgDqmb8fJpT8kPQk4cFCAC6m4sqyzbX2HSq4jdUHFSHmc43VBMKHGhU7pZVhGJmBu",
  "key26": "3j9z6cywMrr8FMrGdfGgNL8yuWYtCsE3MGDcW5Fbg52dA1GCQmrHbo8GopKHdHCfZdBTcjryumdD65cu16M7ZVPK",
  "key27": "4zEy1jAR4Kdtr8tFWCp1tz2qyM2wMAsjkFVvDMWQcno9BSZpAQS3Grk1Cty7tHSJ9Y83GbsD95G4kqKiPbXVJLhU",
  "key28": "46nVQ2D2nmTeme7NH5X21xvEz752qJ4q316w6eAA3AL2moKg34AeZgSDigfrLvCWstu1m8J6DSHmimYKeCSB2KHG",
  "key29": "61QKvBLjA6MCmkrAao2r3zPaF189FTpJ9qHfMwE2HHVwjqq9a6o92p2bbpZvwHnNjTds9jbGYHqqwweaVyMEm52x",
  "key30": "3YTCAsge7UeSPtomsaZmMPajmeMxm7ayqDN45Qm1pfg2VNzDP33xwwtoD9TRretrcDuiSZ1xvaVsQEq9E6DRYvy5"
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
