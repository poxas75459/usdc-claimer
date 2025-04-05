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
    "3h1dpvUc4ZpNRYLi4Kz8qvbnkJRTyfbfKDjWobc8SKYWn558gFdYfsXGcfNtFnPDcgyeMtRohKdqLjvdGoL2jeXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38wdCy8hoHm85QcmGZ7ZeKx1oN6qwMYccWtp4oCQDirNr1Q7J8aVV9uM4VNgc6eyavoWJaYYEGRDuGhn1wpCbsV",
  "key1": "4LQkvzETN5NLuiBdy5L4AMDYUVY4g28iWxQHAk5Hj8xh8h3GBCRf7H7r3tcjHcnn4HvBV2ePe9PqQZDHUi3gEmDi",
  "key2": "3mLTEwWGpgUdksjjZjTnk9wzfksxK1w3Wr8GyuHWJpTRzBRd44d5WYPzLRB2Ecgx2oKdjZvbtKkRJwCCH89smdS8",
  "key3": "3ukshZs3ZJUcjZWVYsMRET1S1d3tqH4vC2jh9x5rt7K4u2fnnV1DYEbLbSKt9i7Ct1iJEF2EBrBnTH35n8seYv8S",
  "key4": "4RLBT8LiNgGNVDGigAiq2iu2EpY7qqRhgzKhmKt2ozXbvHG2BD9PYg8pT9mS5nueNum6zTK798DdFZwcfvcsPmRd",
  "key5": "3VZvr9gexAuZf5dGXpx7eM29C6QJ1BNbjCCUqoEkUcv9k3Rkm8FefZ2QP8Fyvd5FwJnd4WvGkkUx571EoKpqbgFu",
  "key6": "3f4ixWdwwkd7cRm8fYbfL7FGLyVW4kVZ7wCnhJQPqdf8AnzVo3z6C8Yb6JPith5kyP5p2Gq7Nsor4nrgTZZkZrtS",
  "key7": "4dHftyKhEUneQsMuwGBPAjgjowaZvk5oCJ5pQRZ7DwPC5WKDNPkHLcZQghYXLZQjxH18HsQ6jSWWbf5r1iA6tFqh",
  "key8": "gvkGFDWCpqiqPmWSK3rS6DqUCuRVYk6zrQvtTcrLdvqcFJMjCgpPXqv9TRfNjjYMYKq7Z89ndWrxvCBJJp2abDn",
  "key9": "4Zg9rvNb1D2soCEzgffqfcbpYJjcLucQLh2QRbVBepLkwYE9h4y7CXEV4hNnYTYq6MJpPG6u7bVhjvGshNQWfdja",
  "key10": "65RQtBJdvBxFEWQpWHg5PMQyxSt9Rww4HAPFw7yhLWHn9QG94QmkyuaJiY3wi9fkua8Nm6uKaWdLs3smztqKZ9Yw",
  "key11": "EQ936caVeBkeVc1YD24mQkdQzmrcGs5g4uaLW3pXUXLwXU5LFRWuKAJZsoszATTkBgfBffePZ1mhejUCoDMBxrH",
  "key12": "36R1QDRumRd2Tr4ebWYU3SZ1e2g3Lv9y6823XeTBLzEjKXXgWnTumt8WzJ9gY9hTPTXAotT7H9jC2mkhnzmsM4RW",
  "key13": "9wBoLVC9hr23rGwA43zhYXKA8WFm6VPh1EgEmqcotE2tbzW3hg8vTmgyjRAFjrM35D14AKGPJDwuju1BYux4DMV",
  "key14": "YyNkFrVqcP1tV6nj22RehrBmiRY9y6sFcf4FomAzAKg3GqsQz3NP5cgUvi3tEAEm4Y89qtZWaWTZ8fKLcFYPycC",
  "key15": "2byJBGW76SKdTexJXq9b4G2gqNnaxeGX7sxmmBu4tENMjGNrfUNqxAgwp3FwL2uc8wUVnBQUNMii8tkjdUQ3FL11",
  "key16": "3bNVBrgDtTTnvTzbNZGJUaTXLj6t7QcZBgFNiJHj1VD9bVcFe679HhguPkFGbGBvioKBJhS2SDypUh18PZPJiBNP",
  "key17": "3wnpueDL2kiy9pkhoEtb7ZVTwBP4zSB8kHQdvLz8N38GY5jULJDqRiMs8Qurz6ThGJeV8gKsMdzvLCh8iSjuZ1tU",
  "key18": "35QtpsyQd3aL4Z7jyGzPq1ZFAUh6onPj7x6WACL7NSQKYuguUaLGMpfnHMoh1id6v8TFrcqn1wp6CUojXnWjFxuq",
  "key19": "K9YABs2Ck5PMRAxqiiEwStv9MnipKVGRcVHXCgMZoMtuCVaKkfLjrpecJVsEmVE96R2bzkowcFVFHqJ15URdbuN",
  "key20": "EnajjMkSiCf3969dJUXn3hCiwf6hJ7KFiZYj8ySUeuv2WizhorhMWe5V7KHqAaMwFAWdeRiCHHysTrUXvPBrjAz",
  "key21": "4YigCjFUUvxt3P76Rb7ui4qrGefMMo4f2njnMUHxHRS9Y77B63tqJDJ6c563tyfi3vX2W7GiNrkMmNg7EYPdVKRX",
  "key22": "2AvYiQxVtLw9m4NKJUFURLk3saviFaBEwHty9qWAu2aBxGrVbmzNYb5Lk7kYMEhzNjU9KE3qBMmVYtWGL42Lk8AB",
  "key23": "2womrZ2Vs44oHB4fgbh2BLA6H8Wnv1xxuxZBy1NFG7UCDk4Y2F8ftSyHEV6BnT3asGLASRKJU3cSo4R4Fg11vZvm",
  "key24": "27BQZ4KW2Br5ws3ggyZ1NoPFVJRWatFVd7V6yTjggqFjRm6uD6Kg8DHvgjLMPjinfwBghnbYLPgQMFHin82EUWDi",
  "key25": "2NoBKz1Jm31N6AVWEpJfFiUedmAFJA4Pn5oE7JG714RcsWkPKqCMJw9RqNoZGU7XUnsdrpr6HsLEpvHK6FqjoeEd",
  "key26": "4qyp8DRf9g1SmxaqZQ79eTrHn5gkUP9QPuif6qY74KZYZ9xakQ2AXpWTvsPRGa4yyPs2Kt23ee8uEZtUHRsSyGL3",
  "key27": "2omJayxitT1pz6cuYwNWdVCDvACxQ9ZonnL34gTA4fFkr6teoLtdQBdrvJgA6kNW9G5x38qBQHoCwitR7qnfAcGY",
  "key28": "5thNTHQncSMHyBsTBpLaqB8MfcAUjYbKZ4jHKNtdXdgvyXNDo3QqDFsLp1usmxhiPbQLpyMprKABRLsDTgCtJEKb",
  "key29": "5KuYkJxP52GTKNRde6cFZBNDLdotWBxSC5ymACN21Zvp76SXcHXqYsTsXc1jGB3GA2PFczevqvMupcbpLfcw33jc",
  "key30": "4qGEccr8h8BxzazSoGg64USdjia8wnE4EEm7BcfUQBE3n4NmRMnqyHPbkHtq7ZKEgsULdF3BWmb74AZ9oe9VXtJx",
  "key31": "5u1w84NWZuGLcyCSkKX2NSTty62jyqvqFLKkEqvrvWXMdtWdZhZw8mzHfGj7hwWCaEYXYzovMTVbLRcdTmTvF7ur",
  "key32": "31nqvB8FUHkRDE5xUS2jgFRbvBMUxAwcLS3jQenrWwnQgAAPviAne92PWqurydTM3gEXkWqg8y415QyCqn7m95XS",
  "key33": "5unzC1e6ZcXjSSFCZuZu4eDGhm82uiK5ffx62aDEuKW3nxFYDSsZndTk3DxSbVN2GCiYAkFvrkd7L5LHxKnxn7GZ",
  "key34": "jHwk4ZeqNS4H5mw4TMB3UEDu3hBpbEoPgaRpGPdhjcx354aiukbqqVAq1mNjCZYyeY1ZcyyHcTfcvSY8CRLmqXX",
  "key35": "58A72rCSuHnC1WGVE7USapMeTZdzVnUTC7Hi1iPKLXF1ZYWvZXnpSh4KiUCabwGcbyqARLrBA4V9Zq1RU1mY9Tvo",
  "key36": "4WHKCxgxiQZeX3HZq9eoihjKHG6CxPdCwbiKZNKG2VzXM6TUB5SyrtEUTy1ZHXhpv1EA4LhZJckpk9BAGZwRFwsc",
  "key37": "3Z4qxXkufLoiDT2tqkoCGFx3SGV6LQwjX11Spu6qZKSqxaQFP2hXFo78XVAQWMeeP3yBCFaAjXXLSHiBNy23yK9s",
  "key38": "5XVhyWbfe6ie3PYxvsoPNyANnDk31e48iM7p8LoFJZacCDBnGj9dMTasn6tjCnVmcdeGxFA1JpUD8P9hoxKgqJyK",
  "key39": "2A1vVLUrDbvWqfatVPuVFp6qmWNLud1sFdxRgZ5jGRSPmktDTmRpKJWJhRPgNTB1oxR2dghQcuvqZ1n1hekdhx6e"
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
