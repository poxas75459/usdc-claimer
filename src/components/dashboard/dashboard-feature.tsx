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
    "4VFTuAARE9sb9LR8QnWTNUnMarqoTdUzJzYGUVi3jCDfsFRaErmi1DDGmBVotGtudUUjYSoNVTt5JbKaqLyaUTij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hi7zFgLCkQvdMhP4b3V4d4MdnWTMECLHskgPY6vJsQ7Xvj1TGGY24nDV4f4m1J33k7e25ANPHep8qGUmSL5NBYx",
  "key1": "4ei3DDdiscX6YRjTn7m4cgUNFat3qHWoPkqVzkk35wXAarCfQLtQTJ8DXb3c1fRSKe742qnXbW9qPeCx3zH2EptP",
  "key2": "2Ba4A28zf7kFF8RBuJiMynj7QMHgp3cbaThbYKevJUMSUbgZ2hLZATghLEjZJuQT1RXr1QsPwe12pDDCcbEZ26jq",
  "key3": "4Ar66NEDh3sXhYGMi7HEjRvcA4dP15bX2DuSjoecpjjHiqTNop7Z2TFkB1hG8J3BRx5hF58gM1PjQd35azguMQ8S",
  "key4": "2DY379vqPizZxSD3ZhV92jWbUT5CkdPLJnYAVEHJEn4LxSyvKazTsk7JpEaRaQVFzHp1ckPABVUSpH2E1A7AWMeP",
  "key5": "22f8oUrADvBWkVMir2tzgGAiVsc2DJZDF4Re9hWE8eHnPP4booviznKzqbxSEyj5Gs8uukTqH2aKB2KprAf6RuYQ",
  "key6": "35sTedsgmYEhBsEbb1HfJng3rQFHdjkV95UK5LkD1GchhpNqVsCUhsYf9nUkfUeaLvo3RysKjEbx4V6uJhMvjLnJ",
  "key7": "4gnsf6ULC2VRJLANrTaRXwmwRyF6LZWUTKoBLbqA9tui7q8ZmkydS2DK9JrW56xHSVCthRqQTsxB7SRuUUA3oSYE",
  "key8": "2bNJs6RapEpd5bQMDBbM3TDquSi6vVwYmy8xRXviv18oKtHpEffJZHpC7bkLULoTof1sefjE9Bgy6CkewquEWH8y",
  "key9": "tNGMM64AzWXcQr4xYj9CueVPJXeYXEX7Hi7X5fTEFRt1FRh99kr2kja9MzytrWEYeEUcDRTMVXWgp3Mhe6qVsox",
  "key10": "676K1DGwysgnFqJKMMvP6eykq8yXrBhRwnazEEWzUiTxwHu8PD4ADr9WyQgzGQCMFotuQu8v1a1BZ2zEQa7UWir8",
  "key11": "3zNg7MfCXEnEJEFjPwswGNEkdRT7RjCRuXTdJWZePHiooFqmAhd2rQ8TLPi5g6uSvdWRzz9YtSkFzBUZVnyWwWXx",
  "key12": "55vuEGdjkzggZpUZD5oqn2tKXgnM3f1JqyuS3h3zLEdZUVzNiC4H4Rei3BP8HUUwDgjVAnjVaK34iwg9GHqvyn6d",
  "key13": "4PQa58HCA7uT898LsK49XQsW362eTZXTUZvZeXk4o1dpiucyZQ7VEFgEyvqPKrGETzWCum21erAc6uDxtwPtfqQg",
  "key14": "36eAdWJxvwGLeuYk5UoZmWHsJfXkab8nckrdyTZcdPpviTQC37pwCGZ4w5CRA4A7rUMZinzefLLce3toJB8kp4hD",
  "key15": "371oP3swEikHJ6quCkQ6urKfmujUFARSMkeY7Eh8uFqFrQVmWRdwcdAVBAohR4wyW89RZBcdx8TzJHkFSxHXkikp",
  "key16": "2GGXteUSiuM5uGMsfo1FKexCE1cJxAYLDvDXXhBSySfJcDYwfQS3E31L2ZuBYpvywh4hTnU7Xm3mpVzR4CUgFqjU",
  "key17": "22Mc1ssHjCpo9ndrohbYZVuuSDDmyAKaiTJTCUfXXR98MGmkkn8QUExScqrZfwiFCjd3uVouEA53mCN5xbd3hTeW",
  "key18": "27kYbrsFGssRnZKey1gxLVAGyyWo9zh5T42ZNAcExnsP4bNqUfJ1kGgzDmcc7PCS5oCBcxe4rvdsiwhAYgXaQpnn",
  "key19": "21JRYf6cxdr7fesxcv9LoweWtEqGTckKDp52AMWsTfHQgh9RuBSKXjahNAHKnBAnpAeQcJHGHEWkgdbgVHc51o27",
  "key20": "2Ncm12C7zkofm75JbWj7huJZ1PRg6QgY6RFmmraCFpURkkZi2K1NN52Ebyg7M9tTXKBaUVLwPwSx3dwVm3jVXDwr",
  "key21": "4UnxnzpmNPPScYR83S679844fdXWChCptYdGgHb3BvtrcYCZPXG5YaJw4jiJtWWr9ZXyuyZ4fCcSrhLuK85S4M5b",
  "key22": "5VhG2Krwn3V7qSSff2wXPE5D5S3HeNYkxMFyXmkAxkRGxmzh4BEUs9h6m2gMBRVYP9BbBg4tDcxQJCqhDxxjFXXe",
  "key23": "3fyKZ6sTWDFDRmG8rSzdkfN3mDt4kP4dxaUShv9dPQBC7KJyEWpRH37xsbSfAHRAURZrUXNvn5ci3Xq6cVxGw3Qa",
  "key24": "3QCmE621EbEcmRrh57ZJ1b3qQyvoWXc2eb5uwKpA8wWtAmZ5kVuvipPD4c11GsxKmFSiXGkwxKWCCdJ3QzTKPHwb",
  "key25": "3FTPG5g6btzC2ecSVh7jngGM3Hui9q7rF32T4xYk58wS4sCkkK6E6nzAMt53RcSuaZ5xCCRoZphBVKkewMKngQw8",
  "key26": "5aNeNHVC2ipd3U4BMKcvNyWKfLz9SJ2BHdHsbLbB1QQ62mn78CLCorUpBmKMN5DkDESQfN4vdE4v1rrBuGvo9AeE",
  "key27": "HYg25YfkL3ffAiaBMnpBZJBrgH6ZL4Nc8xtmjEdhVdKLkoVtT3xuoS835hjjHPUMn4XsAPQCDpkAW55DJEwc4oW",
  "key28": "4T723uUHCRdqf4ggJSgSTfMS5FbovjGBZ7qHjL3qekJbzeAN3jAjy6bYdEC92by6vM5bgGwcaVy8YgH5WCpSbaSM",
  "key29": "4XzxYvrNKhWfCBChTyEQsK6mMYneHBFStfyTmaG1qQX6eTGwudVauL41PgDJsSUDeFDgRJZsS7uWykNSY4yrtjRx",
  "key30": "3T1U6RCuPeoLS9HcBssuxQ7en14UJmvi1SMLByoqT1yMRZK4cMSK8YTC41YK9XKw2fEFjqtqscsUQY4vKihDNiRB",
  "key31": "4VetRiTnpqKwcygiCPr1AzJFpa5E9ycAtzSNn8iX6cHBp97tzzD5vtdW425YzxTisJZoG1ANGPfdBxEyXiJbMmiB",
  "key32": "4gBjVBQEHD3kiXfiKi5ddu5adSD1GoBzrQ1bNLzT7jNTGRMEir6zrFZAohYjmPsz9azZELKVwJmVzYn4Fqv9HTiP",
  "key33": "2QSvmRp95pg4TV1UeFXD7rfLA4o2rvgNNmyoAm1hWTQQHHv1wpN943U7GAy8PRdQS3JSpYnV2TaVqneiYzQ6tZWP",
  "key34": "3xbLVw7c9bYbnRRKyYh6VmAviF9kugjxRRgVkvmkawrDLTfu9KdVQvVauwEpevQpQAps3App179HmjugWtPZvGif",
  "key35": "2RLT8z8jYNFnoLecHfziPMRWmkiPVm4Fovb2jqyZMTtpGCghV69wSdgzEY4dGyh8jEXz2GSny5wj43u2o5XMT8qD",
  "key36": "5VdB8WHwDeuQd6ekhMVycrQXv5Y1pBzc2E59E1meFAHwzJhSdiBofoobNrahUjGx6wQGDeFBQhMxKZR54X9Xk1M9",
  "key37": "3fYgnXFG7YyFS3Rk69TpG7uAbMB14LJy24m6SaKc5QdLNPypaLwkkA4BMcqBfysX9rmWZSaWvhra7zbC8w7iNgmL",
  "key38": "4UyPNW66qf9NsE8ovDrr67DcXqwbxTTBMj7CH2mDsx54meDT9dFXCAQeaSWoaYTqdzPxuasokMENJUsQ9MGSxWab",
  "key39": "4RrQCUtfDATquDtCTLzWyyDMKrdGk1hjtjqJNfUT6z4JNW8iAiBL82MaXeKHCCKXPHfLXZNPikx8RyP6DmY1SeC4",
  "key40": "4gviu7bjc9uhnCfgjDhq1wTeHzLzg6oCJLCT3cZLyBK611gConyMGjKKF8kJyHRuT6y4fjbtXT6RVLYiS7avhAhf",
  "key41": "2s5TiSfWV5GpLHTkAsLyB6LvT5CMmCoUAMF4fMxS6RKXYUKF3MHmDDccbkhwxrrLCy9v62zGZ5CqC6HM9findied",
  "key42": "2PwQYmiosAhmVepu2TRBaEt2pZMtJJwzQzZS6uowrhLBQwBDaRWcAcKr6JdJ35EWpH3hCEqeCewPovmKFtWNnuzL",
  "key43": "4wixFyt8x4stovCsZJf1wm6EdGhQMPPEKXqQVTPNqdihnDkjhq2zPThiwdVfAVGZKCJv7hXZvjpNo1pvBQjYagjF",
  "key44": "2sS3F5bLwdndaVq4goMw1bxe1pQs9i3QsqMGJm5KX2aFcX7aQToKD9jkiWCcbfFbHCTFXH3JJsGkowszdBybZzuD",
  "key45": "ASr42vZhfCdGMmUVEToMUZpnysjCGpX6gMvTT4XL89eVUN5Uk6epogAehZfKtB3vVvJfCRF8t4Gwjb2qkL8AYYC",
  "key46": "29inuvgHGGPr61EwcdYmUiLtgzYk1SLaz3Mz87VxavpZPyrJJcAaCnXzAit9qVgEcebbixMDCML1ofZYhd4azXJg",
  "key47": "4kM1ctJAzHyySWWkNxgpDKu3v5wYScuaHL4UspkZ8oTLgfo1YDyxdgN37arUVVcN8ropXfg99DwgCvic5DBWi9pj",
  "key48": "2npzxf1AvRubrzesvbfebFp9jTNGu8kA6LKmsNeJNFEvVzxMZ2CV4mqJcZQp2DqJZ1aXPaWojqBphv8dH4QQF8XS",
  "key49": "2GjvaZQsWMo95icaidoMry5JPQzRDBfDzVtMtzRBR1MesSA4aUh6BsRv6eKMpNv6rhfPL4CARJLqV9mbQBr7yf3z"
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
