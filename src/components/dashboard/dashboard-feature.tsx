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
    "3ZpjMAX8D5s7UcBnxzSqHWUFReqAhdT71GQHJLDsmKjcLXGC2CpKpqHozVQHvtxiPsgWysy4aTJ3UvqrY2gan1wF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UxTBHfsZoUaCMAPLyYGYPcx3wPbDYVjr8bFi2tbUc5MYiEL9Hzg5c61jxUa4cfCrGUvMRxZykEE1Uais4vBVcDi",
  "key1": "mB2WNcRY6VvSbQ8RYP62mwCGrdryaPoaQTdjDPvjK4D4aX5YbSEveko42XALreLM2hkDfmTD5poDR5ZkPdg62aw",
  "key2": "C6DZR6eGZ27BAAv9Ev7svfb6n4Ax8idFUJZWygDkt2cooVGuHpLzSLNcWLykbdk4wqAqtHPTFxSLWmVqcp9xGvQ",
  "key3": "4jUcgmpf8FFRpAPvB5ujDkUgTDrYvbecUDXE3R4k44vCFBssqFbfMXD6DDjp11bmzBHnDHKrWUq2oGx3hypCXjbt",
  "key4": "672M2pXfwNN94rQUVnHzkoKXLKLvYhrvp4Fspk3tqxWHtPTX4YCUvwGsFiNMbHeVSy9zhrCMWV1BBgp8WNhMrvS3",
  "key5": "4CEgS7GPJXbbdyxnzFSYiVuwNHg1DdissnarDFExugREXbnwdLe66cuZvrKf6idFDHJ5HKLjBSgjieJKL4MtRanE",
  "key6": "6756X8rHkKem67u4AJRjst27YWc68C3ozvSu94MmvV6J2iZdtCLFnYWy58gGXuYdof8yoYrTVfTDtKLqUcRTQiW4",
  "key7": "3qpr4H8DfksXBsEEUHYzV4v4YeQsVzzRp4xNT5Zex7BZUXc16HCcUVaFTF7Kcwdhef2Vhrq6DLDmkUxFQ9HJyt8a",
  "key8": "3B45vgPcHy7jc7fCQ8oUkW7ajSk4KikT1oYpX89mtafq8sBpDuS8aLd415gkiLj42rHC4cqWeq2v9nZ9PxMWk7eq",
  "key9": "iU5J45Z82p5XkgYXPCS1KCwHhPYkd6nYnngqrzPbZExXe8VJ9ztzcAYPNoiEuq9cg6fcjsraRVRFWnNd2ktJSYB",
  "key10": "Bc26TZw4zKAxPkzdDjPPMVLGMsjg5XNjF7kQzzXDzMGcshb8fhZHNuMhcGBmT3E9TFHEDM9jbDYZt18WqgiU9P6",
  "key11": "3dggCxWXDtpVAMujhh8tuoaouVgGVZKEGBzo9SqnsBGur8jv2trDCtQuqL9pH3gdmpkvPSagQBxCLn4WRmTVjQkx",
  "key12": "2QX5Mq5cLm7ZGQ8feWLhhSrhnVBhQjLp1byvTi7k7GQNNbXPcMZr9DWAGECXnb8CuRD95jn3ynckDXFJ4fpgryxn",
  "key13": "PrsaqmvujzjwxjRkmjusWYrorkg9nC5s4jMHWHJL5jQJwaumU8q9tKVnEGNnNtSiCBmaSxJjhX5Q5hiSgDxRiHD",
  "key14": "4SvMNvWdRvV3V3REmKLWgtxgBrUFksJ5z5GGuC5NH43mSJxJ7z39hrZv45X2JDL8DN4MhUtKkfYrnurGCh4EEeuS",
  "key15": "26N3PN6JMfSkdSYmi1mqbbWKXbmWaP8ExgMuqYHq78AN7DzqatKHmxGv8YyQb7ecYFLoxS7vS3fWWh448Xa8zRNR",
  "key16": "WAo9ZoPBxRQvUbQ6MDjMyV3RUU9zPDe4akk3PMXHXuhQy3PeWQAG41GQgnRULdamY98GjvvaFvnoqkyESZm7TwD",
  "key17": "4S8EmGzjB5nTJYZwWQDaZYjdxGk7oGAk7fjNbrSyGdX4YyKAJJchCfTudpnpC167iu5GBHd2HHgmCNs5PoRtL2pY",
  "key18": "2LP7yhhyYVLbxTLASNbX3hT99h9L5Ydyq6tpVzRvE2eSzev3kLFyDoSC3vJJGdV5uhWJMp1m6XPAEZah2a1GXMM3",
  "key19": "9Z3KmraMnuyDE5oyzpHjxdsHionc2AvVEhwJ8qnyY7xyZxX4tu1B6bcCQJ7NvQLb2m7T8ATxzyrXzHAGgLE7Kex",
  "key20": "4Ddgz5ZGg3qxHi52MRsaz8YMKamdasTkVzhnsQeYoCJKQLudWvgGTYoeCku1PR5EyNpzkgH5UjH8hxQbNR3ZzLQf",
  "key21": "EyqbAR5t5vkvQNY47S4TrqWFUqJE2tDu8dBduh6XM7XFhHyMyHybeGdC46hfp3cc3Xmx2eT1wqhZZJ1HTBTQCtZ",
  "key22": "mgMEUkFswd9JhZ9fXbbT29EtUrqawQx8Thne965hizERR5CLKtPDoHrxTn95rwTps56Jjvv3hpANwcYZybXR4PY",
  "key23": "5Kwbkx7cfqLyXALqdBNLQY66eff3C9V1DvAu49XR4o1td5QXsiFA8nnTrrKoZ6oX3V7TwRj4TN5yKkFuSrTJN7yY",
  "key24": "5ejEGZTjKrxNz2yYmY8PhQdLuS7CmwtuXPVpvXMm6yKhhQDSQQG5vcYZAizH1Fcuo3z4gzcLv5GJj1FvcrFKu3iC",
  "key25": "4Y39zqo6fx7x3wQSAasn3rrngncJ7hksL7XthNr9g3foV3Ayuac7wkvxqUcbTA85LFsELGzqJzaQiHcCzJb2h5mf",
  "key26": "3QWjqAQSJyGgy58tMW3wGYRwApX95VMaswgMCirzaT6HRVyDN8cKjRG8cgF24ny8sNtKvDtcQ2kEKkg5LvMU6UbB",
  "key27": "22A3fqQTFaPMNuauruQBgE1gN1fa5QFizvdf395j8Q8h8UmCJY1XVoK5HG58m32WbeSgWdmHEJ7fxMNKmosR5UrQ",
  "key28": "459TUe7zoVFKbuF65DxvK9t5qco4uSsyScAKEJETyoLBfMQxQF6YPbBdkTtSqFpr33HeQQ9JXumm56HG1xVaNZ5W",
  "key29": "5EcdDF1VAiihTtgUSL83eVTWVezhWbqwpG6L4hvWgFxx4cLaNuD1nCbjn1dmHJMBmPd2vm9MCyqWVFL6H7wJvQUn",
  "key30": "2Gge1aGP7VJ7Fgn3gcBDqZY4pcw1dwR8aGHhttxoy95VsKENmHwjVFVz5N8QtS1wW2TV8q5rrHs1APWnQWEu93ex",
  "key31": "4rv2GuF5h8ZS5Z6kLhVxnHGbJeyUWMZisxkWDQs8416baGbRbANHfxoagwa9hKGLWJf8fVAQffVKJpM4mXpffL7G",
  "key32": "5fC4Dr1SgEbGLDNtusHArU3PT411SDsZvcmoPssCoURKcfzJCsBoPx3bTPMKUNfrBA6Yo6jBJLqN3t21pJdEWgWu",
  "key33": "bzEQ7cPhbQMCLV2YVyS2S31KKVCQHasN5HifmkibawvTj5kCHN73Twcf9mxgfU8pSGkUJskXYh6YDDdaqaQ6XB6",
  "key34": "aBTQxxcWkReswJEGos3CZWWCeygzuR9y5m2RyWBbc8vJsHj5Hk39yxfvdqJW3Qe1GqeYRFcVbgygxxN6YTYHbo2",
  "key35": "B5Y46QTDAPEu84CFnNn5RJQqn5k86GYRyNXoZNXosuZWFa5VNsZ9tWGsHL1K5PbvAEH6y3WBwiWZELXuxCAsGvq",
  "key36": "3QCZknEg96BybfdGsioxSDm5G8fursXXVeD2CEQgyxQnWtfinwdY8Cefgv6vEA1sYWNygyxM3ndPmC2mEP1Uq32e",
  "key37": "4avtRTu8Cd4nKPpVsmEkwaLJPskfi3hkotsupN919D7gvokeTmVtVS5SPCvRphaj6aahHpWNujxY5wb5pViicjAy",
  "key38": "ZG1hYWUmKL9MNxCULFEyiST7fZ4iakwLDubr62XFEzcNRkUuHohmNGFhoekK6gNQ9sXVgCbxW4BfpQpb7n6W4DA",
  "key39": "BPdFNVgEgE2piTvpy8UBCGes1MnahZVYYovPoSkkbqHkyZk5EWNtNT33oiVE5kCp84nUj6fvQkc5FinYEQ6qLDv",
  "key40": "2onCUkTzJzRAFkAUzDrUncup8sGgkqKtXLiALvJyrkPywVPkpXPCMVxFQeFyBrALq6c7HJkq5mZC6dLM7ZGPYUmV"
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
