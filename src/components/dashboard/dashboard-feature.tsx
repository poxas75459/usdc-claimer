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
    "2TbH88rFGZef2nzR7jKpPZM9b69PdYqpuMWxYKazF3gb1NrAzreed3W2dkL7NTdddi1YWvc7J7e5pc7jbhWQ7fk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1SVLa1Cz7X4igQiYEkxGQMLViqGdW3QYpkaMhj1tg4LfJSrZpzbN5YHTFrSGL8X8XKXZxT49H8bZWcuChmtYYKf",
  "key1": "32TSFHmEf48r1aV4acfGetygNLQadJcGVFHexTH4wHTS452j37j3YLccwwhvHt1bT7PEjU9giv7yp4D5fnrNTQBa",
  "key2": "5RZVb3NLw9P4doRHdJktAmPfe7PJT6fDRL5c6ayB5tWMTES1jUfyVVSmKePsEpADeJbz9ioLToy1zu6t5NvGtSJ9",
  "key3": "61xvQKaFb4zE5RcLtQ1ztZE5DiMVB8vnSdTVoWsrBdtMaaVWQGMvA8THpFQGHJUnxN3x3mjmRPQH8T4fHLTDPDak",
  "key4": "5wQpgBZDqwraRWGuE9FwTM7XMS6MyXrNxHB5a4rJ1Cep6iWxtQsFc7rRz9i9bGuXdWRYwsfVwxkH66Pw4HVLEKPz",
  "key5": "x8DVHrPaaegGyT9ze5K7741BGc5XvNHgApPhwYQn5KD96T5htG6mio2Vyw4f9j4WK1zpmfGuBd72jDFEYNXvwdE",
  "key6": "3h4MzmJujWfYuSrTNA35jGfvcCjCDhYCL4ASNHTN8R3sUSu5vP6YHD4utDecXPGy4gAqyEuVLcxmVryLtUVs9Eog",
  "key7": "4M5Ktwo4UVREeVypZjiUJnPLnWxL87sF5ygvvaJmo8263SeQugHTMVjegssM9v9ogQjrX9woGnsxAnWX4thWkWUp",
  "key8": "2irgbUNMuL37j552kJWsSWKjFPYAbqnjHHRWC9xJLCAqRKsmCk2WYzSG6bNL6gSA7FuKxiqLh78prfkzZxUADN4K",
  "key9": "4w5RcTXG9Qfdm7dPbkQxKh6KZEhj6nHQNBtGnSCzACeCbhKj1gyJL1d2y9fgttsrk5vGjvYZW4AAVua3LRmt348A",
  "key10": "55AoVNLEume5JpP5pi8HSqYpJ4g7Fh1GXxeeERacgAY9VCAazvayHT9WMTuMDPoRheREC5ZuevppS5vDnDeBWWG5",
  "key11": "Kx9iu1S2zXZAWUYqHTFw3BmG8Fb96gpXxo4WCQPNpHMKtiNwbkwUN86v7cbDqS8ejy7Mb8o7KcaBj7YW6yEuL6Q",
  "key12": "2PMMJWUQiN85gMjFKZdKnvUUuEhGYKBE2FSznz1uXPSv2v8s13pYhxNNvfcfK27nmcpBRYg6hfSfsCAre9wRmPBx",
  "key13": "3ykt69RbR76MxgJ42JqMHsKesU5NKcSXTnAYSFf4nV8XmANDwph2wTBjERGeg1TVmTnpfDXkEEH9jpQqTi9JauV6",
  "key14": "iPAgRA3D8VARipHgutih91FBm5NCwy7oFEqkQXxPFZ1muUW3wDEZMohiAMzuWmxhu2xmGtGaei61UGHJwj7jWyi",
  "key15": "CuwYEgRx2o9MaFiEuiFCv9to2MARQ1Eae8vCJRj1XdfTXSemfsQSbtuGoRoEHCkp1vfH1r15YQJzXGfDktRUrWq",
  "key16": "55UhRn6gUTif4XskRb44m5Kb8RsZqMB9hrzkWFokyGAbDZHJY6XCCY3g9Vym6vTGj1o5ehfS3nNBn8XjEUGPGYCr",
  "key17": "34CwokCqD2WJJPreRb2hrJbppzPjhKdhRYkgJ3izFLhCeofQFX1DMvJsBCd3fniovVHvrNSyx4H6oyG9QoeW8UnE",
  "key18": "27fdvq6igewh7pqMSHZLwnem4o49BTU2KSgogfsgaDZt6ow4V46LvHkeGazLmGVSUxcLcMZecHJtJc1KGJcMBhiK",
  "key19": "2tRS95eKthA4k8Kjef3eqwZcSkGzsFxVVM3qpYGt6D7Xphz8oxAbqvjeL849KWLaWbrgnLX9vcvqreFZtJGr2eaz",
  "key20": "4gdFVWWxSAtmajCRcWEJiQ29XZ744cXwQmGRQdaLKBnnBiMcwrmKpi5KssZfYhf5m1PHxFAeL9CU9XmQT5pExtTs",
  "key21": "5f1jzyNNrUzE5xqkxEf2435EUohNvCut1kzhH1BvWGG9tHfQU9UhrTWgBnW6WnD4h56fE3ruBKXdgHP7AbTNZBRL",
  "key22": "49xEgasysXU1o55m45XYrHkTxw3PJ1yxp3qM3mecjimD1ckvhAg1TZSpNTAB9z42QsD9CnVoc2TygXZ9eqDGxnkL",
  "key23": "48Pz3xNxG6wBiAY2C98FmsbDA88B3cpnDRTsLz2z2sLfsUKGkevt4d2FzZPrYYoeaSiG2W8k5XnqeiywwJKguqp",
  "key24": "bHbjdfN8oE6XeTveu7DeTVhChH1Z55F71vmrJB2aPpni6iJuArL4w51ZVBwxv4pYCnDxRM6P47kTsyqwG2okFZC",
  "key25": "4hoD2HjAhvaMPwsaa32UFCmpyAjLZPcuvQTKVoduyGvR2aGeMVqS4NFJovsiHGgzs3KBXYPqE73wmAEraNXuWte3",
  "key26": "2vrWxmH5cJ5ewuxU4VsHFDaSxPo5gHJph22A2xTwSVGLZUEcsJZr44NxrHZ2i3YnBq3tYQh3MnajxmGDwLGTpxFA",
  "key27": "SB9jevTW5NoS7MMcw6pxr2ni13iNCBv3zpGEm1Xh1kHLpMgCNFDnT4XPftSwvxb4VYDfFHtmPHRSUPpGgvbY7hU",
  "key28": "3qaiks8ghuKfrPaVqRVFzm6mEUTpJK5qyJKoQC8vDJWG2SEhkj9ZkH4VRQMpeqtJpGnEgwnCexJdNUiXsd9rHG8s",
  "key29": "5tujJVDB9jNgAiKbd2seaPoYyJGGGvirLTBHrbWvGCrUfCMPGeVERNKMoFZ7ZzDG7p95JcD9uqb5Y9Yjcm5759zd",
  "key30": "3ARLSDQ5RkbA7SMV6vuKrJrYub6RxGFDRXFM1H9JZBhgu6Hw274sSei13bP3W1TJcWwJKTo99nfu6wTVP3ntJNAX",
  "key31": "5p8SFjDWMgR7SR2SSbRL1YdsRHbriNS5aazG7TgvFn47Aq1icjWrv4sb5VRTVhciLMbsWCW7JaAq129RN8uV6Neu",
  "key32": "2KNGDG2mFXUg3rD2fN5nsWYieacpiQyBXXXNrXXM1MvS3LWYmXqQHe6Gv6XZA45VbNWqvC3nUWQvRVbQfNqwyPxa",
  "key33": "GhyizNdYHhzp7ZW8RsevXzZqaWoTxDLdb8UUAfUbQHDHV9mcVYHYEhzvRQV6f7us1yj3B1gWjBv92VfqpwqMGB4",
  "key34": "2ci5c3vkHQUh19TgLSVQPDpQ61aDYsqwEfpqD6FVLGYXoJeNWAmtGgJQhhMGDp7PLSW91syv2Fx5c86wQHV9pBeg",
  "key35": "4UGF1isgk7NsULakn5imHjxj6ZDS7T5ZAoJjTUKvxnUqfatcYBpqG14FBQqoidR3Vh58yUPUmm1rvkjf8eTJ32wR",
  "key36": "4UL7SxgpxqsNhiTmsS75PeNSuN3KZaYz4bPzHMzCQJk6eSdsxHkXuUFKEpfTa9uKm52jnJiFuCArcGJVH7uyQF4V",
  "key37": "2A7C6mpTm3p7TSi8yhLVWEZ6fw4ubsP9RpJswTVCW88FjQQmUtcBy1QMTzcDMeiQCW76ScVcDwnhdLDEW8fGhQpy",
  "key38": "uJpn4L4Ced9AYMmcjpVKEmc9FAK3yXk8PLshZyRE5FbTBwCkAXWpVJktYaEguHsxfMt4hFypFhi8u7Tmw3Cmj66"
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
