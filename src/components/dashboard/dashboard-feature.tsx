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
    "2aY9Pn7hws9iEHgfeDH2xquUBcivuyaruCQeon2nsej2McP4juvxBpsSPp7A9BtJD6AMH82YVQirpRWp3sz4WsfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bBxiFsZSxdcvkxD8PZyVJWNEWbNvLwakicypSovfqfwCEDcZJknJMXbvrDwRMUx2AP7chtFbsqyT22JgwTxNUuj",
  "key1": "5B71VeEkSWYsWC5KRMJM9brhxSeiqBFc5UnpvPqmKtwyrGb5P9WbMeJziT8e3V3AsXqhZ4sHEXUAnptawbkJumhT",
  "key2": "22Qc4D9HomyBdfMTT8fqdWXVhwWiDQ4agey2wesckT5sDz7fpTMbDTaHuMiAMMurHh7t3artYwcVZ6rzv8AMFaVv",
  "key3": "5oJtp2MFEprZvzaTLvU7fn4roSCd8afnQjf6TmzS5Fu3iV4hqHawZxNEq298i6LLexi94YJwBDU4VYixyA5BLKK8",
  "key4": "3syxD2pwGmfWSxrc4FPLNRDgk7VhVccZ2Fy6tBFdCwDU7JbkbXshEFvvh7Ykgea1cfYnFnWUHNCoz7ZDdTyiqckY",
  "key5": "4P9bvQmCnF7S3bnYxHdMCmrz6tUAum34HmwRpTuiXAS1ju3DfeGDZVBuNB3D7nU2E7cbUNzet7CEjYRX5etMAWeU",
  "key6": "4zfcMCT9Vz88FZbvbGnSKNHJ3ykEacWqiMVSgrtEvfG5dHLtpu7eXiSYjDixhLUK3RHgeVafgZaKGx8BzJTPdDYm",
  "key7": "2sVAsnuuf6e3S3qPru2CSDMS22DZUr2VJmsZrvzDkDAD87t5hXeZYRTmgrDjAP8xBw8duPL5S6m4rQB1JUW1PeAz",
  "key8": "4BNgB5Z7zUcZKDhv5DQG1bgBRiHA34dBZ382u4s765bkMTJZ3xeCEerdUdLs2XvbkMcsk2z5Jni95VWMRTZShqJv",
  "key9": "23LmT3Tmtc5p8HV2iJDVr5r9AMNCrtZpbScXAW2BiKkawuz6FTacppnQGPfsjrK7r5S82oZMJeafHNF1kDgqokdM",
  "key10": "5xHrxrzRfou48AzwKUFG8qY86A3HiqTxUJa4KXpsBhjjMsnG8E612auXWkHYQbKmWKhmwup9Es1tKXAYtbcFhUpt",
  "key11": "5K6571S5AjACWGuv2jjZShAdJET244q8rkS8CQZcZnxnwBbMsbS8iFXY83WCP5CpB8czo3XFyFbVSAbNyPU26vCj",
  "key12": "213JSCnRGQBSidoiC57Vzte5hdotNVpDAixLczdhfU44UE4jVvVQisKoT85UeqsFpjpdBZDmGKJPQUAE9mjJUK8w",
  "key13": "5ZPognMDreeV2DghqZXAphzUJqLVrpTNka2pcMkuufp72AaTPxogD5HGRqRGzRd88mmfHNkm2xfQR5NwRJiY5761",
  "key14": "5TdfTifJbyeDy1Rt2vZ3RTmd757gWBbja5MYDMUgjutqSASE8FdHAcH3YyNGHcLapR25iW1FtY6brbL4Nyn1pYNF",
  "key15": "22Bhna4yA9A5eBAf2HP2GAaZ9Hk1dG3vquvNpEhXBw5v7DM65JiifF2ioqoQLsfhfhpvNmHfPaY7BKj1dY8iBZy2",
  "key16": "7k8fBjGqjrPAMdAAHBnUXWFsK3K1h7EJiLeF5rkNU19a3fcN1yYQKEg8iMnzmRh2EnEZX74xpnrCsLDS4Upai2L",
  "key17": "59zgcDa4dnV4N7UijW9zCCKAzqUVBSuWY4b3rn1LMuYGBrCvyiU1W6UBxo67cJHVikAWhGBbV4yQXH9pVerAzTq9",
  "key18": "3XMZUMgZHQsY2MmVpFANZRNZym9r2nYc6ij2Rdn148UrcYdGZ9uria3Z4xYFk8dNkEMN4HPj2fzYzUbH9Z4vCySr",
  "key19": "2y8VN779LBW3eNJCURBaHPxkGKRoNSKWCpV1HYHPBBJgJznkR2Bb2wkWaz43fmB7pAkcwAXJVux786VGpgjiJeBe",
  "key20": "5f8aS5mb7Cgg3LcaGMbfR1crFeWBYXLqUU1i8FgRL14fkhRmbf7SYKKpUYbB6jdj3W2PS7PCyzAkQ4kejAD4jiFL",
  "key21": "3FznXAJq4Hda8wWYPTA176wx8NoEeXpK7tm7md4uewrWsZVVgbh9qzDV32d9kQRfoVbwUz5yskXGruH24LK2eiP2",
  "key22": "65JAdEe76d1pw5YGxX9XjNUkHn3xfX3arEaiCSJjuhfxUSP99jT38acPQVWwbVYD5iqR11K3aLK4ASJfJxmz23JY",
  "key23": "5rSNFUfHzQij73xswqD7FDuTo2PJf4WwGUgBK6WKDWVhrEGM81i6yVSQ2WUCQftf9iBPvKdwYwMQ1kV9wzTvtdkV",
  "key24": "5XFLY2tkvENV6u3NYk6e8v5JSkPtLVCfGGpeArmoDSHm9wy2i7hHeg4Nqew2gquTEzWY5LGUYrSRQ2aDu38DdBWo",
  "key25": "4GgXL4j9oWGtxFzBA6U7WsSthMYuhikjNynGjX7gBUQ3uxqsJJt8dCGqXTJE68MJPS6F8gwGovqyCJJZ3UPTrHFS",
  "key26": "2T1AmLYKdCG5zE3UjFXcy6SEJeozePg77TXiMiRYJpJ8HgXVcKzX1ZvUU2mPTVZdxaE9wa8qYJfQRr6q2Z2KTkap",
  "key27": "2GQJ5ngZmZDRpkgs1MWZCg3uXdDvDB63cioNfvNdAWYFMmgc7NXeMLV91PQ6JbYA9So55gmLkKySeEQ8iroKA1XE",
  "key28": "t4r2iMwhUttPRX2Qo35zuW9KDP5cQPyYYYfJrjBMYkHpjtiE9tNiYB7GrsZq1UaasHyS6RkW8YFuRxutmoBmyb4",
  "key29": "4284BrHWeJQBHGkxEf5YJmqkwWQ9NxR4fqVp4A6zBrA59G887uXM29bhtcb5PawejJX9HtYYbJ5nt7GM5oK7FMBM",
  "key30": "3CCYfq46CkZ3DvSksxGW1nW1ZUmGPW6Xk3BXLVjHxgVTnWHuMJrbEgXkhUmgVTrve5KZyLToxZLu4Bc8joYeVfQj",
  "key31": "5W1sbXXotdsjnb4aNGU8pwvdEX53xABgwVyenPodtNQhgxExp48TbnbpBmZALdy6DaAoz2hQWwpcAX5tT6U3okcK",
  "key32": "48Y56KpK79CvvwWrtMRqgs44DHA3hbjDN4dSCydGpbGZWAda3q6jEKrcLpy5j29qPi7V8s6MRU5XivWSAwpabGGj",
  "key33": "2Y8JyKNdYrwGc4rLo3ynTMC9ui5rLiPvdtSqmcbQpVT6v31VW8NYrHS9cznrXjVg83ownMdizDsUb9Xi48z4s2Rz",
  "key34": "4XwWjNZ5t5GSxQo53MoS4CJsZniUkv97iGG5J8JhUuPmNdDdixUzU8jEN2w1veEjSQ9pDkfTCrFukv5t81EwS7aP"
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
