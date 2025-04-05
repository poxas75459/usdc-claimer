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
    "5erUQ2LxontANru6ncrs2w1CiYQWx2etn1KqNuL1ZPCEQEfKVT4AFp5LzUk4XtW6KAF3fDtjogSLgpFbmMTJQFuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e56HhvZrtmyaaNRiHofBHbWbF5niqH4pV9p3PUvhC3TMfyFv8mwRFzsahX7Ai1LHsAesTHiVPQ692HTC2jeRvEi",
  "key1": "3wn17UGnq2jBQ2dfeYexbmS2jntjiMv1bjyZDy7yvAF1xs7hw2RfbypdYMbRKQ4gDv19VXWtrKJa8izeupN8of6m",
  "key2": "4XZkyzCAvpAE5ACoYV8Egq3AgQ2968uqnTgegj21d5vpUAJwrRfYrTYkHeTujWGRSYTL2Gjb6jAs4L4L3ue3Ms5U",
  "key3": "3BMuNvud3jQMNEbbhgpAawiPW5xCfMAWfC9jfoNwvMj68ZQTUF5H2rzoxSPrSkekThYmNRSDXyhd6sRHok7nfckQ",
  "key4": "gDjVp23vecV2uWYFwnsammFdiY7m2KKMwvns8qZuUW991X3KrFetkuiVN9XnB5ptHoSsvNrivsDx2rPww9Jkwjj",
  "key5": "3vQcdUy5VHmyXETc1omJUFWL7ryNArKBtFq3qhKuC21oXjNazugeWmXMRGLrCui1X2BjVUZ7yGDGjDc9H5Qxja9Z",
  "key6": "3wzt7X6T43WyEG3AbdLZpn5uRBjjHQPsjds5pKbFvFN7Nh8jKxK2wqSi7DtNoL4evFz5n6nFPfWc4BWrDGf97PVb",
  "key7": "5TniWDh5DZJVZLs1dX3xznNjcMbPFC3FGAWzD1Ese9Vz46EsuArRbfCBzCFPT8axbkoaibqKr4yQ8tL2H9mewweV",
  "key8": "5kwLttLpdqXgZhxsH1MBPP2QK2Gsqo8Qcp7LdwedwxK5SK5R8T8BQ4B3cM6SERC1h9qrGWDYR2P5gzttT3w8EhjQ",
  "key9": "4GKyDPom2s2TKuAJMrgypVPPSr3CFMFgmzj34zGdzUx49qYm4jDCtzsefDtZP3X6rGg8egpdx3mT9iPyZobyoUEc",
  "key10": "2Dg7CtX5SA4YsJjGARm4XscjQFvHeQc6ckcJeLJJ8TPvCuZ2xr336TPkAEgMVnTzegMiuwxYjQJ84gzdN3Lki6pu",
  "key11": "2BNbwnJ9JhXg8vFvTkkGGY3LjUFoaQ8YA2HMHpgptGc54CzPawPDaKkrXNMt6KhK4ty75yokKmFiyjmgFcfxsjKY",
  "key12": "2oR8U2f9CFQCKWKga7LhRXT458odLnZNRDXXmSsGu99ud5eCqdxqeRaJD8xrzFLMLwbeZtbW8hSydc2KwRnRZqct",
  "key13": "5967xh4Gn2ReW4qmPymuk7vGEiaS4faAzTvi8cxpYBBeEnLxEXrHYW9SV1ajyxxeS9HgERoUGhXdDnA3Lcn3Rfjf",
  "key14": "4k9Tj8VasP2BxAcxwn36WQDK44bZM7p6nXY7iNz2rdW3sSjhRZftAF3VUA5TJdYQrxRyTorkXw5DPmQDqAn7HUGA",
  "key15": "3oLUwhvYcv7JA9zYAANMUY2XMW7dvbeyZ2f2LsdR8XBVGPTnsBVyA7KuY3164gXvQjgRWUZr8f7n6u2FbVbmzYpx",
  "key16": "3oSNLxbukaPjdDTENYRFp8q6Ajh3Fb74sNJRWzD3DyB4b4tNh9WTFkvtGBdWYfMEYY8b4ZaBELPxonz2HzyoJkFi",
  "key17": "JqHh2TDGuBdKJtMVQYFPTh818XNQriL9iELZugiV4RGzjiKdHcMpn1GfXtdjV8SPSsyFaCZhB7SMMdKF7uYtGQQ",
  "key18": "5CZGYEvNqZJtyErNdV3hK71v7WfXMmrZPhjH7BZYofgNYWNUo8pUswB32s3GrzK6Rk2CLdeWXKy9XTjnHk3Q9hNt",
  "key19": "3gZkeh5BwuTm2RfrZErfiLX3t5F9p5Sd1TDGEeuwW2iYsZvpfFNh98iRGzoPt6ASCsB27NUsNCy6tPr8uReAzzhJ",
  "key20": "4WG584Rnwi97YsAWGzS7dNLgLhN1UmAHCihnNTXVCnzxesNBd4MtbtkCyg3UQ9cehHRBWZJMUVncEtmUsTs3RoUu",
  "key21": "4PDaUbLDXWhvf94HfmE3GBBKaPDEJnnLbgLUP3rqwFX4zP2CN5H3Jdt5nVzK75uS4NkNVnMRGPvHXVUMEErQT69C",
  "key22": "1GvUUBW7gGdV5j7j2X6QDB9Q4kMbJ9g63BXTmoWfUwwFR58TVHY2ChYZGnzuZvzDZsKS2b1psUqeUbifhWw1ncQ",
  "key23": "4VB2SVac6hu2s6f1YAS41qUzmeMw3tpB29TXjPu7eE1t7AwRH85rpc87AYAFQ4QmwAU7FVDEiqY1RAFEbmFoX5i7",
  "key24": "4iLeSkaFAjiaGigJ3MnUs2sursSazDENZqXETzeX49D7N177nZ6DJpCxsi5JVUC4NpPgrWSJGZqAeEVWTQH4eX3D",
  "key25": "3THkSEsTe1ojCvnBe9Qx44tYDqbFhv1ervTRFYEtZyKunntchTE9CsE4Qv76NCwxMB6Dm9Hj8qQJRgLGF33zYu1z",
  "key26": "39Jsqub1uvRdZpvq4ciXhM2HzDeaPoH2ZF1FKKyo6auw61aPYfAbMis1fgyuA1aQh1UMXnZP5bnap7qujhNW85Lx",
  "key27": "4Y9qWR6fj5M8oeP51ZMEbHvW5k9WJXw7fbnStURZPR76a7oY4846meU6h62toZQqivAzEkyYcUrfu1ztJHC9X7ZY",
  "key28": "3qHmYv8KjBxe1z46u2xBVhetDQMoFCeU1br2AwuZ1LigohMF4B37SxhTjgkTxfvbpkRmbKw6wxQ9W6Njh2n7yyqe",
  "key29": "4ZRwVH4SU7MoCmUgVMG4LB9iTRnUNoAzPFPGxUU2quVJfFnDCuUbvHPmcYTVSeaaRVN4i1PrW6Dgox6bv1pgFnTb",
  "key30": "38X8cGKAYFiVC56EoZW45BipWJHxy9wAjoMLTTTVpzaboGHfZ71WHxG3aDcvERtkxVYH1fRPXCS1ZU7BzGMsPCpb",
  "key31": "43HW5EVeS3grtwhohoV1a8zgBLtGqkKswjCUfCVGgbmBzXwpKsSwuLpQcWr3pXd4ks571bEM8QfVvADgSHf8f13f",
  "key32": "2y589MvWNxLJzTghvARAMXX97KwwPHNBBeqtMQ16LGMkCNkKvduJtD7sQYkaN8VoBBz3QBfEFVAHD6BgnuDSocP7",
  "key33": "23mrXwczVnYNnR4m82JddgYjowdHxr7r1JDQrx6dHhWeMRUSJWhfsuJzy7BRJTQAx7sCwVrgrB31Tup73h4sfdQv",
  "key34": "52EDUfni7Wir3K7LbEf793qchiopwRsfG7gtcTZz1Pmkr3nSEihbhVN6s3i2dJoMWatkdaVzPtWcaXgjepj4zPpj",
  "key35": "q8CF8FdTYkQUj3iDGZH75S8uqnyTGMmDmq8iGjoQox9vxVX3G6XdKnySwrHMktWb9sWuAF8bkGVSmDFjMc6djQ6",
  "key36": "5XcxphMXZcSvAqzggDJRRRkfc5A5krsQeybyzZPsc9zMV4msj83ijhTFg4xvf5bL8rTGbAdUTwNVvCmFUxBbFk7X",
  "key37": "2152mhRQwHDRBAkosJ4yAnSnssetieZKP8hwprPfMxzgk5ruDfBLTxRvVTvY8QCvd6dHETD1ovNrXg8YZRBJmXZC",
  "key38": "tqaaTsJvpnQYnWP4SMcYknpwDnLqvYaNNALyJbN6DKhALwP4QtyxqjaXEDK2URs8ssANeWDykgcHkzzZETqkPbk",
  "key39": "5D89EKFGcBEUXLVETNmQFcFaaByHP4VFQmiS6eiR64VF65dc5ePz9yLQjPXBRHCSNn7otUi7UV6cknKngCDpsKUc",
  "key40": "QZeXjtd6tCXsSXmSvpJPrVUESHRWysA1YsDW2Yy3Nc3bob1sJTJX5WRjyvfb2umjpv6Ahe7b2VrZ7fKenvtU9py",
  "key41": "3NhpfjYT2WgWZeC9pziJLYHNwLzqsRqRhYuJYAgdsstMfAFAUcPBgyf9CxKwcBwTe1zmpmfWbyPQhNTTX6wpxr1K"
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
