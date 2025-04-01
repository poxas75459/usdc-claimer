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
    "5ZEExDVJC3TmfUPxvaSG9DiQmumiwU3cxJaLGbwWdZvnqB7MWmgKQwnXR9KJMgny6MY94pSvyrzhpoS6GD9b9rBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xRAvsF7eQ3X9rG2dBkggBmDbeA8abjn25aZESyaukvhSgwKMRnLcCb6rSfRapZvt3R1nqsm2yxzh3UGvu4daUou",
  "key1": "4Nh9F8He6aaoDkuWeaZG5skBApE6oX2LYDTtwjEUo8oHCcPXTYCdY4wvikVPeF9qMymxD1C891vo4p9jQWiZzxiT",
  "key2": "4v2VgRhEWVtuUe4ZS7atVtoGcN7kBriAp5c3ZDxxYKjpMxqW7ChduQbVSXpAzULC2TwqvHWK9jPdCxJTMxHgb9Fb",
  "key3": "64miA5m8rXNG7vMYFx3nLe1aUSVRgphKg6hDNRkqH9ztWVYoMzVaTBfDJjv1iNRUdjwLfERCtgmu3XyXcJmAJJiK",
  "key4": "2GbrRJdniipVMZwKRU2UpBiojQxAuUbo16eBjd3DRvoAqvxzC2XGrZYxiikSmHrgrFeLUHSLFLLEni2DbVwCuSgn",
  "key5": "2SMYvj7FbsLc8YczJFMqiragNFZJKeKQh7z9uwjyS6dHZRPhaHTP7wBNd8WWxnsHZpvok9dPCPYLjNHW2EXkzJDQ",
  "key6": "2DXXGjd1SbMLxtB6H4KxqmaMHwyexg5R93qTdNwynvQH6zNPa2PL61ednksCwbrFiAAJdw27MCxWZes3NWhrJvGc",
  "key7": "3LBRh5GvzB5MPZrHf83W5JyTqxFHwT9UrVUeuvc21iMni46zKs4cJvoXjDaM7Xw7nwHYSAkM5MFXAZ2UDmMWQgpM",
  "key8": "3m8bKTH7KCPKrUeV6wsBrhRjJ8sGSiewCwah8ddqPjhZnP8eAaWX6gX3bbw3J44uSRMhSzNSdZJivtAnFAxkMtwK",
  "key9": "3NTX5gw8STovubTnaWfMcLs7h3P3248jzmMiWQK6SiykyCndVwa9nHYDfedjDx7UvP2N1Ko8zqws3oyUZgy8GSrY",
  "key10": "D6DVmdqwtf92Rynn9fqySqxZFXo2QFogQNxhBAPZxNgho8BhsKbfhsx1vJdvVcsubPasjxpuqvDTuAVTJj8KEQw",
  "key11": "WNLAsCCDh65akarGxxASPbJ4ihrXmsLvKC9wURHfQpHLdoGGQaaJc8g9EkjtADkpKTQzXUKRActHioQoffh4nmZ",
  "key12": "i3mr81rKtMEcFBxvMjayrteuqrYt9aUtNioKfaF2oHT6U5DYTYSnVbwprNLnRDWKfwmVmmJpggyqDk4g74mEb9b",
  "key13": "2QUzBEdwcTrwdGKqQJbKzwGj2QodRUMtP1XZe453pNEsg9yZfBJA1pSiLG7kdjSfUhhusjy5ZmVd2jdm1LTLo8u7",
  "key14": "2Mj96aRCR1mMYWYgCZtbUkj7jJvunbvhJztd1mqwvUfFKEgJZH5qxg3CCrxs5pFHu8u3PsSSg2pDa5Tcd34Kpeiv",
  "key15": "bMsxWTJesWg8xAY5eHC11FxXroTBmZSjhb3yn8YfjaUFjT4X26UvPMpekMHF7w4aB4X2uTvrYs7Zien6p5o1eQa",
  "key16": "2iWpyVTVCNKrfT8ejRh77jQZwgCLYEzbdxuW3tuoBTd4GkAdse5VyCW1cykyV719Qj48a4PsongfFUMbHUeWGHJc",
  "key17": "2fvSB8wJRZnDZ9UWyCDXaDBDraafcFPbrgWQv499jNCqEAiKX48V63VB2sf86uBxeWvAJ85AAdA4gcaz5JmdmGes",
  "key18": "4Ff7W1osa4i6LYTfWP79MJkchoosEXMmXLp8AN52TcyQuzDFcqFzimeCta7BFWJNS6Vd6FShCjQTnvKFsasAEf3p",
  "key19": "5DrxEx9sk8ZKzGdRNeWpLwUCYWyH8RDNfKr5NvRG7DBNinPm4htaBdSo9CAaNk9J9d1fhWHce2spbHXXAGNSDrpw",
  "key20": "3HfqQHkfqVMAHn2XDRiMZGhZwLiwinWp4gtFqnbexdRdsAB2ekmhiEKuW9pkZHhWYof5FjQeNmEXuTcirEDVTX1A",
  "key21": "dxJSaouagWmVmfh93woPrDPMbiK4gdazKFRmio4jCgo4ZfchyCCiLBSAwmhMts2gyAxPgWtDP9HwPimwVTnPQHD",
  "key22": "5PishFgrd87xAPt5V2tWUPEhCz85vR9Fc5q6ne8uEdHN72cdDB4gNciN7AHfpFdVEeDCjT4ZQ659uFwFef5qVovZ",
  "key23": "2ULfcZs2dKgRMMWjUKYtdeif3nGVPSbFC4EUREtrWvwLiEXkd5PuJGETKBwhpB8Jom69HMYMv1DYh9v1a3EhFPBh",
  "key24": "Tb8rsFrAcNN8oYMXm7tEeASmSnPeQPTJS7fSkfg8jDzitCvKXFybocHbfYqwrJr8g5ab2dLWum8GPn4K8JLt4jJ",
  "key25": "5WeUPS1Me9L6Kyzqb5XHwtnv8xzkU9grU1VhagnvqJh53p2eo6kboGdYGFi81MedPMHWiL3nzsEcVTStbxCzEeke",
  "key26": "9RpmDuHrnEHdZyUMKz2TTCTX7x4eWF6svNcsTmgJR6Xqukraj2KGtGzcsy84KDnyCe4ct4FXgFmEM2bzbFnHwM9",
  "key27": "TBz1EFZ7JfK2SiTzACEYvdgPBKge47yiwH1WRrRhA2wt8jBddPMJZxgVGuPpPULn8XoRjmnPZ48srLwKLGbh79B",
  "key28": "32NaC9Ai3kfCG6vP82MqeUn2nQzSwcptZLRose7K9ph7tq7xCDJDJssADSVjxcvnimsknPZtjdxez9fUdpq9YTeu",
  "key29": "5EKg8XyTUL1SkVzQsTPqzDN1BhNvRoimmexBNQ5ibVinhyF64zKyWY5zBZSPuhEikGcgc1sXuZvuPF1G6ufCFGf1",
  "key30": "3TaWroivCdvKyA7t8GZ7XNRep6hEvV8rtFs1DdT1BaxLEnet656YGbJDgQK85sA9TBxTepur3cuKKQQTTPEi33q8",
  "key31": "2b6dutTVUHvxRy1dkwBPmrKsY5GMn6qThSzGogGFsZR5TCTsMUuk7Ud3b8JaToELb2TGrdqtrm1PdutbAbi3RmqH",
  "key32": "59BBspZKPjFgkYVMC8uvsUuEuk6nFdyLzjzrAnVPXLXYb4M2TuBq4ifG2wyqJPirBqRLa7rQh2jqCeg7VuynVDPB",
  "key33": "3rSPqxH3gN9Z3K1AHHUkRTJawj5cZo5nU8ssogHPJonfvYcF1583jTwjoL8R96djjiYAPdGzHJ2ZKywcAeWJJLCe",
  "key34": "58LNNGtSbtXxJpDzh5UKZNcHnaRvaViUFouW28nrpMdZPcLYc19nQNkwKNSvscXCX6xAKg67GYetiCk85WUyNZGr",
  "key35": "2Kp7nmzbqkABpJimkNkKjQhJzf28L2yKvhtxkMWyqriSwsiodMwAtUNVNdNpMQJ774UHoLxPiDjPUR6eDT6F3WMn",
  "key36": "512fYuB4QQe1i1z8VDFkWNABbGqmvfhgtuWWAPZvUnJ7vsfNykEawtCw62KqGkLvSvYDsCos3SjfJUx4Ck7tSMo5",
  "key37": "2ECNeys62eKaMavNhrSqCAZHi5HqsGeFammsFMA6QGn7m6Js1MK2RA8dWCfSLLQnZoDGzpidyyzZPzizS9LHFNRu",
  "key38": "2u1iujxAj2e8qCagvPmGtZFqEVpqkQhbz2C2xReg4u3mKn2wDz6GtPswXsJVXHe9nHapv8swFaPaFS7aVbDAtNgY"
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
