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
    "2SNEnCr4JaDTNCBMa3Ck1j9VSFLNVqSBXbgmM4b2GUevFdcbQLeRggz49F3i4D9ZEUy967PAH18u7vtPRuxapst7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A8i7f2Z2scHy9BYRU1dob3xPJcQ5pHC9ffgrLr4RAFXVJ8WofzmmTRX7E2Gn9wGFT9PadaksrvW5UBhK3GdFrPK",
  "key1": "4dNahh5kq6d8Kos6LQRu2gxCWamsWSVisWm8FMoEG8SHz4Lnuqy8YbXJd49EP4aLBHFnfmWzdvLYiQYEJ5P4TR5B",
  "key2": "5qGAEhpEpy6uQQMYTEvMNctg6eCNDEa9RGjpjSLeEGjbVVUoavuYZAM46TaXnKGVi183GXE7AoLqdwXpXFxoi1kk",
  "key3": "4qYZVcMUJqcQrZGJ8zMsofmRsDmYmTomzLXFaeisXCdi2oqG5asUNWrxxD1xeBeJ8szzCWsSVQ8Kgiz2kCJxCE6h",
  "key4": "3iCbux4xj7m8RnS5gyj8jmgvdMutTkoWgYPLTm7Sd8WLEyWxTkyuiubhKtcpuFMqGKwUZZj836zoqTbCs3WNxAC2",
  "key5": "22K6MdzxPDVstkVkAAbbeULcC5CNVuAKfE6ZGsp1y4XZJDc3KMu4JF6ChSosE7yosvYiJVYg9ww87xQW5Da2X1sx",
  "key6": "3sHPTHCeFztgj9DiVGs5gpTDiYJuffzeA1cKyCajbvfNnvx3ndg9jAjyJQ85bBkusPPYxxaLmpXHiFKaU2wcFTyC",
  "key7": "3SNZ3cD79GqVX9GQQyPWy6XJmXX9faE2rV45Gkn5g4JWCrXy2VE7LkKmVK6LLfbfFHuK978WgJsFUF8xSPq3ff7a",
  "key8": "3mTjAz57Puma8DQfRerC2VJXqNrQ7JoCDPYmUeSMb5P6FgZWjeDA4SWA4GcHWpqQHPaiP6J41TkGtEJhmssD2GCE",
  "key9": "3j1cMCsnvF6vQKJxQ6siQR8471JZ1X4ktVTVtCK3i7wMdhWvtmLsAiTtqYoKVkoUix3Hu4aPeVL7J8Gd7JMDHjaa",
  "key10": "4bqAA7jRBEK1T9GYY3S2LGzkLZt9q8cJiDe76NFfYLREXVb3zT6fJiKqYKrDm2scvaHH1G525sLbgZuftUNnd5Ny",
  "key11": "43UMG7kLKjHmLq46SGsDB3443G7ict4poVDTFedanmc1UjUvimCZKLjPqkQHUXSgytYsv71JXfRHLu5VKiL8BaH2",
  "key12": "27kuTNtqTQwcmXf9aqL2NEC2GvDwQKKf1rLj3ZLnmNBYp6diiBqENQAXYubx6kMc5VrJ8wR7kV9R9T9FhbxXt68Y",
  "key13": "5Yzbc364RxDoYCbB32yjWUsCMusds5UwL5W8Q1yK6wnragfWa8XrFxxP5iBUzjyVHyk6AetN6dU61bvHc7pE2jCm",
  "key14": "P9nKrYoGB2oVoMqx2VRXgCj2iooE4m1rHDssH4Cng9mYKou6BvjL9L7qrJiwb5sfvTknTNBRK34G5ei2dhnxv9g",
  "key15": "2QxftWvv2fGAaGWd6XRuy7weyW2dspeYSTedVsA6ePftbdGshiEXshC4m4G6vfdE2f4DRmxu2JSxy7Ud8TTWDtWQ",
  "key16": "2THTgDKL7ejh1jwiZE3bvMCxfLmA1RypgatbNRSteK5ZzyZxCXLqwoL1bhrevfTbAFWoxZ2eW66TRwUR7zBGqbgU",
  "key17": "J6J3uxtAvaNitJCK5JPCFFDcKfHfkKSNNDgc8ihhnhL4xC3Y9R9G8nGsuZ57aEJmj3XARq412FTrtMnMqEu8Xvt",
  "key18": "2gckF3g4viY76eMjitdHaoZUdzkj1htpQLcppEezYo7exJ5uGYe1rJsrU9C4ZsbvoD2czdAqeHXseWDjArVuU7uM",
  "key19": "4unuAMHGtEmU142oyuxuhNVpvMW64Hj3ECXnM9UmN1c3dRaAvWULytV8dRCekYNTAXu7iirR2Frr8vtaiE4ZVBRm",
  "key20": "4DE1eP8JYXMa4jtqnc4ZU8W2DpYQDDo29Zrb3766yHsNhh7scS31MrTY9e4JjSvjADKm6y9F3h4SRu6dCVMaVbKk",
  "key21": "Vb2mnEPFed4DHwS9Pg5QmDvbgfHyCSzUApUFuJqSbAsWRzvqnia2SHM3giUg5ZoYEGBzaTkRvsxosjPpvGUkfoK",
  "key22": "uJr6DBcoY3qth1PZeDod1Ejce1G4siMqYDLD6sjmmCz4dBhAnUGQXzCAHmpdwFKkRoxe5mEKqw8ysHunfRD2qG4",
  "key23": "5e6hDwV5rA3JPNEUka7Vuv5TugEymD35EhSwM47DMiqMJycY7j3nqk9YArw7ySQkFZE7tWiEMQSapjjrceeAR9jU",
  "key24": "4fmXZbzhDsbt5qhsbsu69WndFVRkhZPRgDF2cyCX2MQhZkjLbFKBNKCvZcKz7bBpd9DsTVMfx2mwMr4Rg9sxznrF",
  "key25": "2Gyju3VygDf4f8SrWwn9iUaDrZJTpNyu7oQbEgG9Tyxy77f3MawAXW5tHhBq9u8Lu663MjN6F1SMK28DGR5qgok2",
  "key26": "416yHm12rdCQhHJdyEXG18SBCJDzvvjjWcwy7u44CuMVga6JLXCwSyA43v55NXEAHJUpNwcpQfsa3MyEQL1arZW1",
  "key27": "4PNHdJfK2EUnrxbbSVp8dpH5j2wJbgYP2goS5mgPhbfvHMh4ZnYHRCokFfETtcGYzWvZkzkxm3DjnVfUvZ9ZkMMJ",
  "key28": "5bpsMCRn9u4ngTfbaqvB8hDx2hqHYzBgmZ8NHoBsXvo2xgkc8kkAzaiMvpeJv8AXsifP43CUg2chWQ1jLPkjpx5Y",
  "key29": "4DJYykLR7jMLNySFDcBkmoLmK8QZcnt4iB2wmozWbUTQRF31we2ufVFvMbVTirxw6bYe4CJNnccd1HnXXdAwMcXH",
  "key30": "3Y2iLhLJHDcjZPKNEWbE4JwAzrNGeyLFZ9HbhGFiaT4cBB8V6iWNRD2Vjzu88GMbwo5yNq1RDauGozCGATTvQedw",
  "key31": "48TAqui5PvdnQZi6TCrrAdmrjwH1PV57rTcJzCf7htZhUE4GDFeRJkrUtczZBKMqUap1H2aDBJMaUuW1oGKDCews",
  "key32": "4guaJMzW75HXSZkm4MiYK5cS6wEza5ZKn3qxuNJFAbEhymk2k6CwL7TU4zATMvqUSuPH1Vu1b38pPX9uKuKqEqGK",
  "key33": "2dC2XtM45vhCTwTQNVnadtrfJBpmZ8xDATzFasYxxof5FULqc1XpA8gNByHUMisSgPXoCR8puFAePWnCMeLvoU1k",
  "key34": "5PrfUbY4hjZR7gmYbmxKqQ3dKhV82XfwpFzqpXBW1QizrVVpYXk5mNJQ3NnAeJvzWLZEPCrGsXgbPXbhBapTairP",
  "key35": "3VV2nyjkboszUEtCyU6F72mKhdF9XqPox3QdfGkabu6Pby7CnAgDtkW93FguE91SKum1YNhgaYkVHH6uggqigZuf",
  "key36": "m3mjNLSEemeyG4pyW8pnbVhMN19GkaFmuvu9iB38Avn8hvfhSXvD5WXymtbJsYkkx1aWFK1F6TEJKY6yGB9h2sY"
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
