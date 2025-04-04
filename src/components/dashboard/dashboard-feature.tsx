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
    "s8hR34bXLXNg1qU7pkJNSJfYuqY9oFerqAX7qmY9HdvafCCmzCMiuHcCJcBhWUVX1YBw4YJJnVuqtnwCowno2Co"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GxiqmoUAim2NduJoHgEw33Q1jHKgEdLo56mYvKxGtZ1na4Mo1L3hPRmh69HFfWZMapkk23m6ogcJ8t2JavEDZan",
  "key1": "bModfKmWPjH3LUs7G5ReFC2w1ogkGtXf4qE6yvvGrqcsEtZDU8tWR6SwTrfwMviJ5m9XwF3gJMjHrQ8oQSQuRqW",
  "key2": "4qjR7yKpBK4ro73Vcdf4zANzxnha1RD1bqGLZGEvnegqWjwWp8tXYeVsJ4sJU5abziMXhZVzAzpDZGoRUmY8xqY5",
  "key3": "2B1KyT1FGgHp1xz8fPRzfxUDpuSX584GaJMi98s943ppKvnmjD5Kkoy9TxZyGcEGGDqcPA3v8JucNvxSF3jC8Ht3",
  "key4": "341zi2n4yYAbVvmB9SrNR5N4TYd365EFGN6u63ZiEty4dNz9t3z4oJ8QjqRHXb4NvqvNxxUtQJDUNwhvzgjn78kK",
  "key5": "3budxCnmFGnRXJfCX2JUxxhrxm2CMMCATw7mTAM6XwiJMm7hTcoPQU8pmXYzP5eNf2mfXRhUQfPnWcRW4x8Cxgnu",
  "key6": "62YndAzg51g6wZqKYSU4y4UmgT1h4B2rYw8kXn98h1TmFq72RhUXi3ZjZW46vfFTPvLW4MzFuzwSChkVfz18i2nm",
  "key7": "2NXDLYmfMKJ4cKYbpumHTcbDMvfWBnf6kciCiZaVRyc66sxrfyr4bGuuxR8UAKTYzoZrsvrpVMZCKKt9FWen6DZr",
  "key8": "2D4UArCPWWM6z8fTqGW3w1m2UHgVYNpWfn8ne7wWMd3sMmkCkCxxYZGRkC9M5LpaMJxUTUgqgyeB52qmX9miM4NC",
  "key9": "4rdWtWbxsPveSWtc1dcbWaVNwRgExmYHUmGMnMxDFPEjBRCMMfUEWRZeaMBVeXRdCaxKsxJuAEsxp9RaCDuAenPB",
  "key10": "WJboZsKRQnFCqb2SjZMDztc8bKNTgMv62bJB5q3Pe3FTBpCjBCzr2RYzBFpz5j5o5EmR6XesJPKPuSctoGBWUeS",
  "key11": "aH8oA1N1Mxqb3joWMQfbHtyP7HQtV3vgfFsXv1ePSjCNCdnP1pgvesrFmakftnpHtSnxPc6VFVLRhvo42XF1cap",
  "key12": "64i5b6KR2iq4vtuBENubNSwPgbLNzizEgi2am4W5CNNycJ6AocAEMtPwEMtwwVUWfMZh6CERWXPi28ybsRU8YfyT",
  "key13": "3WeZMMuN15ZcRYf86oKkX7czyNStMcyjavdbEswAxfSw8ZXE9Wk9R6g3fxaqm51Zw3mqFvbQXkSXk8KYcSJhjpk5",
  "key14": "2DipNJbJfZqfRkPG1U3h2fNK369AYCWn7DYSQ7JCU5Bi6zowPvGbQiJtpfE6C6RVNSezomGAMFDPPpaWE7nafB8",
  "key15": "5JQeYHktXnXf5nTJB6TQgRGnPkxTHx9wfRkec1WterLYFtcx7cWwe3CQFo5yWTLW2eLCYn34g5Exag2rDj3poQsW",
  "key16": "2Ff7FKvHds6joBrXYz6u7fKZCDj3BTRgF9RSQ4p6EmXNCtUpBbmVJdyxNTgrBCpkLgfLkghMRZSsx1CHDWgoQx69",
  "key17": "53FQpL8MoGyRPefXZ8j8pzuBD37QGYXBT5uehR3bGtD6cgZznW9UNCSTWDyouhHyVeRycSUXrQF3u8FfBYGNTpet",
  "key18": "5vMYCaCUJT7BdNVyymWa8kd7mQEVb2g25VX72644Zx5YPPUek66ET2g99URaF6iEg7zxvRRTfVAET9YHFgKDQtea",
  "key19": "cjDfJny9D9tSmzJswh7gy2JGg9CpwSFjh17EmjkLgxiUaCYCvog1Avz6qvJ87whgTRNrzERxex5hXStNSfnkJxj",
  "key20": "3AF8SAFpc8giDqVfsvW6Ti8Pq4AP1Nom98MG6RGwFTDeRiuyV1bCNmAM111ejW791JkYdfs6wFD1byd7h5WcJZ7e",
  "key21": "2gYAH8gbXrd98VPbLtNbpZjVLsZd8RKTSeTmr4ba2dVfHNQvmtK6RNaTHDkVFQocLke9Azdxz4zHDZgXgVcDCcwT",
  "key22": "p3EQuKod9cjvNQaCxs2QUAqrP7SFjDL4d4CeEbr9eUo93fL9Tewp3fgRBn5ELw878CjdrNFpMJToPTwED6nbHzi",
  "key23": "3yL2LuxYDFWjMiL558PZqD3XpVukL77MLLhwnpe3CaJVNoVYJ4fDN2MS1PeJ2h5JDq2NNr3fN5JZAN59UGgDu639",
  "key24": "4jhzbDGkP2WbuZCxC2kScCtbSjuQo5Ctjjs49kmdfHzWLXwaVzwoJtjRnU84Ya8iQgSKWrQGYbjJQbSuJGH4AtQy",
  "key25": "WMU6ALWezsXVVUmVedaru5dRRRnp5dhbybwWp8idugUd8RZqBwoJ6bLXvzprKFkFSsLSgQmgu6JrrCghYboe2EK",
  "key26": "21zkaqYFMKPejTmTHeAqN8UM1Jmnzm6CwAnEPipbjRdpuWymdFySLuwV1Vs6nzGA2e899VBmYFsgQFJZA4uNuAzg",
  "key27": "4GSUaMPNd3rMbuAkaJ4k9DH76acTa4KrA94uY2exp8Wp8XPo3mrn9CnCCeZpdYLmVkuE9sfzzNUj4cmjWGpoZ3Tn",
  "key28": "5NtPNWJQkt9os87iB21x4xNLjoiXZ2Pn1jgNLrphBHajkcqsDuh8DHCb48sVk9pd6MKvSKiBmGYq6Chvbiu7adP4"
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
