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
    "4nxJ4TtaMPQ31FctxKeCNKMW2k8GF5steSoPwMMMPaH5snXymkwCwcywY9YUrHgALNiJW6rTviSaxnXbxzo6HFVR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zvP3SfCywoSgySveJYD66AmHyN1T8fCYwcqUEYHJ8j3d39c3XyookTRkKKSLJBweceSWfT59BY6kYNu1cmy92oz",
  "key1": "373cGcwxP9X6YNqkaCpU89cX8VCRCUnDb4xa3RsMTBExsK4aYExcWQr5kDq6mwZG6Chsq89N3vfdYZ4VtL1LFXLZ",
  "key2": "a9bZzBDMtvtXAc5G9VDRYBbL6DdqgH2SLHUdicUooWRVCgvSc7x6W1iSiEP9ycn5eFBiqYtveRmTshFfcFqKXzn",
  "key3": "4Lv1jLgtkYkv2fduEMRK9M28pfKxt8UCHxfwJKetUYaBdFbXsZuzs26nP2aw5gPqank6oPusMdNc6UYonqLYrMCv",
  "key4": "3EEPtvEpcPDeFT2dZunrZbeTmFjGtf1CACzJXP2VBFhpkZGPfycikH7rZw6Dz7JgPMgdvnCERtyYb7heBjo5h5Xh",
  "key5": "4mN23XzTSxuqS7vWvKbf9YYqee6i6AgqQRh3WBywJrm84asT7YncUG7aa7u1gMgxH7PE8TjmsBakuYiGjy7YMWHE",
  "key6": "3CwEzzBpxBQn748v8zAMs3juGdSVhRmZ8J2wziWTce8H6S6haPw5xANDK9F2dEdHGFwhNEBQXYPS4Xkx1TmBd293",
  "key7": "27SiXrH3y3a2gpB1zYvnTFjvAzVg65KVs2szdWTngPbpBkwLKnkKS9zGiJzmkG6GoA1Dw9uBM7EQiSVNT8cHht9k",
  "key8": "4L8Kj6EcDqgbFJphPuGcLJCQq7aPDhnGRJDrEBrkb6Mf5KCkTVUwfuyi7k3WrTRmcgLnow1Kqqzqj1yRGQ1pRRcT",
  "key9": "fnUbBhWBty6HPo8QSYh9PS87T7i14mfWHQQVAE4i7nYsQKT1vy7WyQc1j1chBGwgPu3y57ioDtkwM6SHTuEacZK",
  "key10": "4ucirrGibWFs8qJmAwdfcMK2z8EcFzKoSeeLeYpLHJyBXpY8FR4uFduY6E3PwMQeDScmuQrBKaCLgsmE8xcFXVJu",
  "key11": "5XoheFrXtADhZXthQ2Whx1VuBAyKFb52np69hSTxqZWWgyBND1XBMcjNee6tbwKsrqgQDaM2e87LqV9DUozzA9Cg",
  "key12": "5S3eJpBJ6npUdv7tjdPJQbL1BdVy7JxpWyKaYkGTgh87MasHAq3V8sTMeTJGSy3V7YGGTMxKMds5cUgUop4ba7QH",
  "key13": "55yHKsfFS5yH9zTPtqT67ujiX9avZGm3kzPAzaXH617am33aA2nHphUwJrVFgGZ51vXEaVJTETAh5zBoFZtUWpGs",
  "key14": "2yD2tgnzrF5EMfka4oiPcgpvq2TTyjGZoCXc59spEjZ4pNCvWNtj8TU13LYiUavr9FEfVRatKyRAVeNMcovRNuzK",
  "key15": "4E1Q19Jb7pA4W89Eeyy2mxraT25U35VTJqnP8BLVbJFEeZzwzq2jdVzxDssCB2WVbT7aNCUruMWidg4eZsFe6u1h",
  "key16": "4YQy7hutPXVimooBWa2DogXwAU4AUebu4i3EHWy1FTjduq1SGUg7ys5AU91JsRPCKhbvh4c9NyLddm7wecsH7VbX",
  "key17": "zdqVXmc62CnwF1CmiDbnuyyGFQWNpTFHJypHtJwMrvrxuyN8gZBKGr9pGWhmd8gxkZQdSxDzviZwTVqKWjy3w7N",
  "key18": "3ChPuwmgC2Cm7ooP1EZarR1o4RzZppkyti28B6uVDtGq3WVELm9RPUtnAd9C1je2Am43NWfVCPTvYTNg75TdUEif",
  "key19": "29Jwfn2EqzmzxBftsRE5vwgUeqcfjPtXFnwmgKVDaBXwzziUkMGUEeyD6Ud7FgraxEeekgCLYXXYX2YJ14knBiL3",
  "key20": "2X7jN2keKgnyFrzswZ4ztiksXFpdxNyc53kSL1ZVrwKo2JuTWp5pji29QmtJ1pnAKWkWDzZFxajpkiE2RmG5Y9pr",
  "key21": "M2pBX3ne2CkxdjYr6ze7kqF2s5xYLsWNz2CLSDGnUJsgRpV1BvVvheNK2Vs5K8WcSmHKexocQtRNgNdPqUy2nSc",
  "key22": "tJsntvxCXQgVpXqb7XkvVhyfRRCAhLoRaExDQBBVCNvCvbUNz2KKKC16DiEPtKhdPfBCdSfAK438EJhazv2Cjj9",
  "key23": "3jo5AUGoQ2ZtndbpTUT4P7Msc9T3CnJh3tEtCqdUFNMHc5BiS5ks7bZQptWFRB4XYP55v75mqEGw9R8mirxCtM5B",
  "key24": "4N3efnoARbAoPEEvzJpReWhoDVWbWty7EUcbhUY66xBCdtFCW59aRGTL7vieS3sgDYwPRBm6VXEKgQ9JPsoSLxss",
  "key25": "4mHY1eWFDH9oziVFgi9k9jcYqgYhFQggChYY9PpCM1BspPFirk1CdHg9ELEZQ7f56kjRLyweiqG6pKKpRzRtJagT",
  "key26": "5nebLcAbqV6R9MB1t4MyTieUUsFmjE4KfiQDzXkTNDRRUsigWK8Y2Cc77ztL8MBQoV5hUJJexyoCE37xK53xkDMx",
  "key27": "47YrhtYhFZgtxGy6FycJAKvCKqLPsCLVQMu38yYfHzz7G9aPZAAegr2HpwF5XTTEwq3P5u3Mhuqs1EnXsgd8FvoB",
  "key28": "kipjUNBRePpLka9BguSSiagkkUra9y4DmGP2S5BjDmkAiDeX8bMtC3xPmFDG1YENoKfG5nXzEcM8zCnJYZGC6BS",
  "key29": "3NAvygSrqD59S6i6gDSyQbvwhMcrDCg4vJGVkfYdDCnescmAkUxo9s1dfptgv8sSKGF5HYgoUnWSvagNm2qwVmgg",
  "key30": "3TPx5BBjsLQpPGLmN9VtnrRNVK9Ck9TwwmRMhpaqWojCsHePWmUUCKGyCRoaaNsCzEUwRjLJva1qScSfYWotC6F3",
  "key31": "3wHnZdgGwx4RFSH6KxWa1N21WuVJYbTM2jL1rrQ3SpBMB9fcutEX9kH9UzAJL2fYL7EVLR3S2vXWTTRz6Xi7tkbv",
  "key32": "23KXsny2DHPtenfAzUbTC6MKM3YPWraaXPArfc96iDQuNoiPMbUir2ZnYjDRnQN9jmohWhY8dDPg9bjn9VMeTLzT",
  "key33": "4emPT8UjdavszJZc49XE8BXzuZULGwhiMKT6377pFeHKLC75GMNs1n7ZxfDS9pa3deCdVHeuuQteiUknQWZpA3GV",
  "key34": "3VbmMnFk8tenhDdkgC87mxNGydgS2KuvJ31VV6ZDLoRAKbbNGdJ79U6M4a6JDrZ7nKHNMWwmaktPZdVUgH9y1suM",
  "key35": "2h8qyrB7t99CYytLXJfBGP4ESNgbK7VDwo263mAwhNCZgpNUZwNH8C4FXUoWEtLemPzEmuHzHeKuNrGGDdbM6pXa",
  "key36": "zcZvrfigCz469BoAKT5rqQFD5m87wZGRf7NyheoFFfwFSGN5YCcopF9638UcBV9tHeVVbGWMFKWNMPpRimxdXZF"
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
