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
    "3SvFNTFHqLmt9ZVxmt4aL3Y2KydRwZ9LnWgQpDJYLFRh64jKDpz9Rq8rGXRodPTN6ayDfoB8DJX2RxiKMkELUfoH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uYoUdn3gRDojkvBuvsra5us69AXRBNXcv3k1yMQTb8ctRGxzTda3AMZNd91mDDNBW56xYxF1oykCiya7wXEns9w",
  "key1": "5miKgKHzqkNozb6fJCQx4bzM3UkZEhtbMNSZpyHqHtaCyBj9uPGBq25kMtrx89ExkjUVJqrDFJ52VQY9DLQxfVgc",
  "key2": "2wRL2NuUv8SpRJtSSbvwDhPTvkAg3Fq2CrQWtTeemfmAVkMfuRrbLXX4xtr4qezmVt7zkD5gwVKCyaRE62kewhhK",
  "key3": "42oAy1934ixWMrxM6sSYFPKFtKgWBvhHbL5h4pKu6JzjEZge6iiEVxx2nZvaDqsK1DN4EkSvptjADfHMJKMRFt9J",
  "key4": "Tv5CDiqjfvvwSSt1AHvif89y9SSZrheC39QXBBq3rA3B2ND3HZ1bcHdNXpzdGPjTHHYsKtHeVtTbgm58qNii7Sm",
  "key5": "3HKGqqZhp3Rcb6gV9eeYe9Wuy8mZeRjpF4FjsjsK4yuD8qSF4AdookANrXzcFXNZd2MuKbRVeWNjZGQwRKVASzq6",
  "key6": "54Z6wXHRCso7krYfxe5eeQCzrpTKbLgUop7AMFHCWnzcQpeiA7EosrxPBzohvRWuhC3ZjFvTKiP1xPqRVqtYZsLR",
  "key7": "32JsGagmZuRgWfd6utv4pEVb38qvd1vaNDqnoaJSymBGsvYNCpN54S13YpnX2uFq52TPnE7ZdxEQUoe71QuEhneD",
  "key8": "cnmQn6w2SLTuv4YnRGNYm99MWy9hJNJ9P2MadbxFku7zj562XY6F9yvnP4zafChLoMaYnCbBw7UJp3Cd8uEHiNi",
  "key9": "3j1SAQzuqk2dKciqRcp36QvF8ZvSnzQTEoX1ei9HNGWnFAcDtuzj7b8CEUgDzm9rY5y3z6CAprTcaqZ55zkWZcmp",
  "key10": "3LTBkEGYiJjehGEzhnorxgT1sVTPJLxLbztG62n6MD7cVKN7ZjwvGAAejpwS46tt58hkYEh2i8Uv5GViU3iRCG9N",
  "key11": "2ggLzeszWFytAMQaeuAHSuXVSqpAUgkeHVicPEP1X7ky84cDpXeEmWHLAEzT9zzbESrDhAGe8RZBSxNwBH4KDNm",
  "key12": "3BpqdbTqiLpp6oL8ZzARvzzsvKR8v1KbkSAJxtf9KGbWHFpY7n8WsMkq6DECRTpCTFF9z4b4UgDLEdiDixHTL3Cc",
  "key13": "4KbDjWqPRLkkJKHEzi5MoJmwgqzhxmyLDDCyhfPCbk8EvWBr5mQVi792xVsEMZ42WHnwtBbVmJpyZXUX2hXwvcY7",
  "key14": "5mqage5zNwG3M3tkqgGYWuZcFpUqcp612zEzWtxUQCmAnTgEKMmK3hEw3ZswearpZqpc68oChfQgCSHckSdeQTVN",
  "key15": "5AbudCUSBY1tew7d8WSiH7izRKC95Vuvyafidyf2uQU1AcyT8kdPT33zPsfN4dNBs3JBxRzbzX8mByqs6AQkcgjD",
  "key16": "4G9T1rACJG8d1NHG3iurd1EivyC5z52PsHp481MtJD5dLr2uhnPYL9NZfXKM2gJxao6Q6s9ZfsMKZjhtWU3fEh7W",
  "key17": "3pEWquvz4qKtb5b2rPSG3ucXGMsy9zTLZ9eB7zum5pLwPTCCjM7jiEH9oa7DLbaCyvdXx1Xk2cQLrTuSj3J9PNLc",
  "key18": "4yvChYW7UNqQ1Gr4WDRybSrCpdGqTmjDn1HxLJft5dUjMeRrjkfzmzr6yjs1kWznfmD21aGcSDkrTDGHQeibmpvL",
  "key19": "4FoTXnFhmQTa7qF3rm8E4KLQT2fgf6NmK9VZf9RHevSUPUTvN2S7VuwRWdwW6WzJRYm5cN2Keg2vNj2p3Zq2Bn3j",
  "key20": "5T4VWiWQsMe4esEZs95VU2Nc4hhG11dHrNrN74MnkemgeBciFTAaDKNrCcijvndcEgeK9tVQyStEPQ7CjpEiHkfh",
  "key21": "2Bw9TcoWAAm2ibnxmDs4mK3CUtvT7CdWviQTyc91ZzVAV6dsmCeU3hUPVPBBq2kzcvKFgXQe3unSLVkdmVMGP4kW",
  "key22": "47PHY5SZUh5zRVDmnU9p3MNdnLYwigKUqkdfFWK28NtwFxkMXaQ5H7kWzc89iWZxMZDrXtVVUPnnR165dbmp9dQU",
  "key23": "21NyapKLVKCxvqf287nT8mnSL394jKWyJb2BLJqphsSp74CBnM5LiixcXfRdHSY6bA8ZXfb1m1E8gfwf32zX2BA3",
  "key24": "f18MkSWjWkgY87anciHtVGcY1HJiEkEmddJMiDTVeetMm2Crh8uJN9fnFgPcJm8YhivSgn8HrU5qMbNV4876EdZ",
  "key25": "3FXeRiecpyREPBHGnS9yRDe21monfJnMtEcirHbvnVP8t7RnfHmBh8f7sjydTMpFGimBxih2go3v3W59ujzKsCi5",
  "key26": "598F9p1RcuBNDfWxjnarmu28W7p2PUc6Fm3sAm37JbUk1pYfeiEeoL7dPJnYSBipqjbpim2Q4cG2eXfdz3QSDKue",
  "key27": "ysUh6N119pR1RgKh4Bkf8ESFnBjXCnSRZ1h1YzrEGsRVMnMprRTy9Vxre7rtwHLttsGL4xAc2tmxUyybJDyMWMf",
  "key28": "5fVsnCin14LEuq11o24Pw6tx9kkA7vaPD38t2hAphttG1pASx9NFWFzXwbVa6LmsJCM3b16NmQW36afLEnTdEtu9",
  "key29": "3uePhxyb5N9sQNbWastnBpV7xG9qRziUo7eyTPNBcds4o67xSpwLEKDQdGCxU8P7dLbA8gBPZ8tMfooPEYg65qYX"
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
