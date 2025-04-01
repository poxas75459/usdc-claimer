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
    "2LyPyeyK2DCH3Kfth7eiHGtby2gfDqS5WUrQhdpcFKnLXAEQZ128fLFMF8BSnYxKRHTfvJHKMN8oVfCsZLUD4E2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uj8tjYYj7MZuyWuXm4ppBUCAYUnkKTq8eeyzmoFihqHPrL3ef14v3xb5GmjUkd6gTCbYsFyf8YRUfDroT9otVfR",
  "key1": "5EHeZhVR3Aw49yjQd6xerys3sZxNXt3hQ1xERLvTEU92FAW9EogUuV2pCS26NUaMjGYroXkBvHmk8YSBufnipc2K",
  "key2": "2yYnXXe1sWFk7ZYmaR92WqRxb1vAzfhbwqFup3Nq2CU4T8ySxP7bsmgaZ5iUZannW4vQYDYTtSaw4if3wmq96Vh2",
  "key3": "1XZL9qogRrDAHmayY2zQqdxwHfnSbYbUZVr7V9HAuZPunMVoFCSgSkPBEvK1LYozCs2YXcA9yEbEgw6N5pQqJw4",
  "key4": "FvNmPxJvyptnyyp8bKeWiA5HCyPWFPwkUm5Dobnf7GDypD9wtbj2LbuCRLuF9ztFPp4EYbJXXPVTbxcjhBuGUhK",
  "key5": "2Y2FP4fSeERpspsRQeJxw75mTp3yGnvJFFkXAFFJL3gWwG6qu9wfmmmRcXGAUf5XCunTE3hThXRzERnnrTEgM9Ek",
  "key6": "2izJQ2Z8QpYUCb4vB21QpFAG7MhwBjYfcpCoDoMU6pkY1Tk9VxeSGkyH9P9ajdmRM7SGwunmzN8gtC3iB924oFN5",
  "key7": "WMtx23mcfEf6o764CxBMZThokNY6H87nDCvpKgZktvDw5w5SqRLyk71mfKLRmYr17HLkxyrtCpHwxbaQXjG81BL",
  "key8": "2qrGSTc2vwYNAn2u2ePkBbaPrS2qtAEugmo9G1dRHnFXYd4iQRNQKQcLbD9bE5RNN9eGePYoeb5ZMnCp2rzy6JJQ",
  "key9": "5pmDf5skLZgtgtfGCBywWhZikuTSjCsEuDi8Dg6xr2bkm1sAqREzVMoQqai5gLtXFPn9jMkg521wjLaLDvNGB5Rd",
  "key10": "4mfn2FAEZkyFUALUtaaQVEGxUGDqcnHREyQbKLBDkuLQNuJs9SzjpLRCoiZsFsFChaoVoMrrSC56W2HMWTPLxaji",
  "key11": "YpErSDefZBjaqw2E112WGmx1ZX429eqp9SE9RKWFLQ4xYmBeg4Vn24Y8WzpqBCKChvynN7DvECEztDx8qz43CnE",
  "key12": "3r8w6BdFpxhL9Px932hJvraWxoBwoFhu4iButdBPUc1L1Rozfm6K3qH7wfmpjA3a8xLF1iE9BGjRgVMqCg8R2ACp",
  "key13": "4yHUHCCmHX6G2fEqMZbmGroecyYA4H9REERu43psasGA4YSLQr4GM5XvLSSPWjKvbvGx642N3AAqC5k21sXPg7Wf",
  "key14": "WvfUBssSXKLWB2QqXutZeTZevF5qBNZcBbVHEkrUoy4uuWDW33mphsH9FCK9v6yGEqS6GSDn64VSYBsJaKm7c5T",
  "key15": "2zU8JgT836cewTZbv2BmFv3ciJc5CqGChw3CZ4BN5R8UjoQLex6iR7fFsmDXBBwDWRbts8CRpXpEB8BriFucjX6H",
  "key16": "2sZAMFzAz1getciJbUXgTSCJWrqL4vdCdQcNnpnCpCpPMZhhRgiPJBKnfK8inGKETH4esg4P8g48zsUniB5Z7NfF",
  "key17": "3ToeLSgVTJCd92EvPkbwAJPju6w2S3BJHeYAYGcpoGD1ECPVc4K7JBF852kX3XCkUDV7u1FcYbEfYtwrQsewYten",
  "key18": "4mQd3iTniy54dZ7xV5DsTdyhUo8gtDxqANUsRTBVzJhczpgQm9c1S9s75jNESGMQWngSG5gCZsLD1zCpL54YK6wa",
  "key19": "4t9KHY7NA8UcJQHNcGth6JMrcGizCupqHiC7j1TUHZRSLsarqjBbHCPSi22RDm9n32UTYwwLzJSVPeP9AMTtr5mh",
  "key20": "eT8SVHP7mRmEyzCBMAz5VwawpuQGqdZ8DKpzuH32RwQm84H3yTKAAxtTMcCJ7SDif6VEBo8AQsSDpzq6mgQoe1J",
  "key21": "2W8ooGg75LR4JJF2QTryps4RZTzZ1ZCJMLZGoScDNc2RgitWWfeMt3dfA3sS5PLgpUib7SjqvnQr3sRoZdcUncNr",
  "key22": "2nv3p46iGCeQr8foEdqwak2KLhpmTys9PUGj1rqvM2kqL9oZaSrZXDBrZ7ygQtu2ZSfu1sgN3TenkswuD28cEhb",
  "key23": "3dfCYzWBJGPP4vNDpgjure6oVvHxPi2vKVTgz8cqzb3WNKT8bnhnjABeQj5MjvHaeUi44TjkhK9iHuyEwdNuXTf6",
  "key24": "3mkMEdWPWJ1FMJ97DmsGcB1cPNuSQbFcNP5TBvEwUszQTDrkkVawBQMi6Wko1Cn7ZSfZGUR1vtYhTjRdeCb9mH7X",
  "key25": "5AtwXUc5FznH1Vm6suyPMno5pxsQqSTJR6TNt9TwWJ9M4xkgWvqhosihYR7mjBq7ugzT4dWHAx1EFkvWEsxW8cBk",
  "key26": "3DBV2Nfm8WKvhtCTwJ8Y9j6bbA3XH6QjNavVap8srYV9wpkbC1JnhMpbi4uKhsLbmVz9UspRyU1QbcJK6fGrf56r",
  "key27": "4Ro3mvPdvNhRamRP2GzY23VrMzvzSwMDdbYDYppc2RWhkbVheauHG35JbBwEncbqh2EcaDnFSWT6Gm7uM8Jd6dYa",
  "key28": "4g6ZyV7TaxKzRUBWWgSNbxXpPqt9bK7CPbkCyNCaHp6TBCGnjwoWyA7HWEgRV71EQb9EJ3ueMUd4UD7qHVrDyw3U",
  "key29": "59NEFDQv8BcPxXHqpB51WTYmMatZ8cXASH4jrigvWhXUS84XoU86c58MCfoMufpZ4o56dJqsjYFZojNTU4XsKjdg",
  "key30": "3QdjtiKeEwWBZpyPnBAXDW4aRYK2X8SWULYy1SWY5nih4qknwjacwafXNTVc3eC39VPVYsWvQcyBNK9xygag8VuR",
  "key31": "dnjyb4mEq4RGaGxXJobDsU3y1NSGKma79UDpgNUCvGn7a1t75PVa8cVuiNtQf9mykTNmXroM4Z4eWNjvwot6Arq",
  "key32": "3f5oC8cyTKGj3tDrFc6XcP1yWTV54FTWVBhKdLcESqzRrae5bU1TMcKrVLvgrmf861EnstwgnXtzsjVYN5h79Fpj",
  "key33": "39wuptcDJ8nQzb4YaZbT83P1GTy8VuCuQtPjKAyqXDmpXpZrm7kEFnDsApwRJG3tWjUFXfpCehTdsaYWtHk3nVK7",
  "key34": "hW1gGEto5iS2de5Vi2qX72gwSnXrAV83uA4prDSHh2k4cebw9fPZ8xnDLgysBgAZGLsHuM9EqhavZoTDWezivGv"
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
