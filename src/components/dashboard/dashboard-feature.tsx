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
    "3dMucZckGj8irmN774QpzLUtpp4dCbViz9vW5cuD3vJT4wMWeTjfzXRq1wKgRt8mpjukXJtXtXZJMkhG14KjSm1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VjdMQSxBv5csx6Ue6E5i2oHCaCwUwtMsaxqz6mhijPFVKoQXkPjoXt9pGn596hoUntWHfFCvTKKEnRhCikjZ5UV",
  "key1": "218mGAHBHaYfnRRAxx8YBEGHRUvha65YqoeAoV4HbEd6vH5x4n5oEWgCcVaUDQmukr8o4XqiCcQXkutNPDsctPGj",
  "key2": "3sV82DPdaQ3rgZPMRZTeMTw2HnAmiPUNRWUmm8uGD3P8fpnGng9gNoWWXoFmD3GJ14C7VnrgJS3H9WQqgtwL9y5a",
  "key3": "3VNxHGpJaVACaQaUyiQVxShKv4T3XrqpShzgKayp3DWGDJwQsoXjcjkE9Jc1zX4R8eKiyz7ju3URPSnqnBUUkcPS",
  "key4": "4NRArJK8F7uPLb46McvoXizgsALNHkXsDCMRBjpFBo1x9iuWTiHK4EbF5UBpkNWiiFj2WoMfSoH9SFtjLtTcseqb",
  "key5": "4n5uZYYU6E42uAVKc2S1rkYM2w8xNBVSxzASYxA4rnNBZWWap8wDEcfeXboWZLpxyHYh5vZJXKFNAAUjqjYLUXRh",
  "key6": "4RNWQs1ZcYkXZhNco593ZLQF3RieVKdowYxvDMu26ubowaGSxkHWj3MpS3tawAjfuHo48uqELYUyfF8jFXxQ5WHE",
  "key7": "3oUGNrmQKB97w3z8SVWb5K6xsVAe1UCvttc8Udx6j5eWLQ2we3cQaohTV3Yk9fY7Xk8GCUFhmEdQHtyXRknDGGud",
  "key8": "5U8Jqkhq1A7ExxyXArrJCFJgJfe6E79fAjn4Y177tzYVgZUgJmABCqeR3MHvVoeje8Bb6YWLTzmbMLwvYSyUQ92X",
  "key9": "5NVR2rttSrQn8qcqhgKMbNnU8nZHhQUJQMmXzHjVukuexrqzTY2U91o8no1PFaAsh519Z2JsvxEKkvVu6C7EFb9S",
  "key10": "GoRrmH34LmSMTU5EF1mVdiyYcqQsqSNjxPHYj5LxKLZfYefHSPKhQudPSj3C4fmwvN51rwiVo8j6Cb8ZSMmnLFL",
  "key11": "YZTEuCTmdX4BL1R1ZHz3cy4Se5ZZHoctjt38W7QDTSAkXgZNLQVMy3ULRwE6k6eNDeUKTzDWsALbratx6FJy115",
  "key12": "4gwPTHjpwpdox1NRqFXJMhzfjnWBJ8LcMda6JW23YrFdaaE38ozr8bqCUZtViEzFa4GNseUYacL3ZTxTF3YCavi2",
  "key13": "dLQkQkrKUuyCvmQeD5Tv4QcLTH49TZQ66JbbLYrz55khmboTdrHKqNtPJ2TuTAm2Qzmbd8AbWLUA7W2G1jarYzT",
  "key14": "2ueP2n4sKSCkHwxe76tFbhtZiiRfQ5MKoAP3MjQFt81ojqhktPeE9vwNa5YQi4R9nGGgyb7fkHDb47NCmGJDKJD5",
  "key15": "4r7hQNmYT2zoziAhVfU5yFhzHveuKSi29hPzhxZc2ppebLiikUCR2EgpV4vBv4UncTWG87jVbSX6ca8EdDyjG3gn",
  "key16": "39A1bNdpMeBNEhcRSgAWUmxNmyzScRch29U7vZbFWfLtmwPzeuTzu45GatCTT1tEsVWjwsQuXNjBHTXdx9eVxn5P",
  "key17": "3fYGPLr598cbhv8krcExSQcUQrk8zH281GWMwuQ9LyUsBJ8CEBRmfpA4GjXJtsCBtauYoZLUzukeKQySDb5hb4h6",
  "key18": "4nekKQWqMn3sz6q3njpWjKFUz45r82wrNynbcDJV6hJNCvbRXfJ79VpuUMY8xKU1uWV8xpsfatyKB2DvB4Bz5d5n",
  "key19": "438AYDEszRCmQJTk5DqmBQwyYk1qadRN2ivjdQfLHmUARZfpaUVRDsTNNA91s1PLFt3R9BwHJrYcmVEEWehb1LfR",
  "key20": "2g1Wwb7MfmtGD1kfwkw7FceKDqbkttuLje5hvztis8F4spJH34sfhNcSkvs5eiuvEMhgc9Z5MLw4MmEsskHGtbjx",
  "key21": "tLxhN8b8G5efJawuTza4e5vGZ83p4HdoMzjJDZUKRi92XgABAsU4xoX5uFzCuymqwn2vf8YXGch9H1oKStzb8Qi",
  "key22": "5MVZswhonZiP5g45CamRyh9o8mE2FkTGVysz1zpx3fPQhbVNgHYjGb8MXRADZi7KJU9DNLXexX1HfM1sW9vjvbwa",
  "key23": "51jUbRnV6XWiVVDrG7d9nQeRVCN9kT8Wjo16oqy7QqwSNGe8gZnFvgCRjgHFk4LnXd4H7BkjgvW8iysayUP1mXtk",
  "key24": "2iTpWz8bsZmLkdFhonWqxSXUknGR91YLDc2rDqr7pkT7UZ6isnfP6nEVEsnavKWtfzo7TNvogXDcLHGfHsPFHhDy",
  "key25": "4ktdm8Y6dVnjJqCrWVvNfkkwdaYtgM4ywdSL4pQAEfcRSYPU2EH7uVJhFdzMcXGtVRTk6kZZEPkwaERVA48f6VzJ",
  "key26": "4cJMCdxmC18iSdaYyFyCuYwUGZVPwPWPacFejAhyrgfbTVRQtGmxWnKz1pZfZHwSjdEjnRWBNfBjpozudyeqVJYX",
  "key27": "5vA3GqF15hxfs39dUsommXuxzF8YLQW6Xwbp5qTHVHHdmCyt7sWuds4eQJBzwov1BBGnPj2MGNkjQQckBvup44F5",
  "key28": "5VrDjwzE4bDMdYD944TLgQwcnRYXyL3WZFpttDua6Ld1yKEzopuog6k8WhMeUUSgfw5ndGJJBMZNm23vkEd2dksZ",
  "key29": "2acxsnit52VfemdJ3uvPoMSjPAzQSgmCRyHtNSB2D9f23s6uZ1idRMCxUGM6UtV2EM46S46CxBo9uL5Vf8nD45XX",
  "key30": "66CdT3teQVNE9nuXCXFvpBPeKyYJmnUtVDLjVxMvvVCAXNqEEFyEuwxhJchruYsf2B5FpoKpT2M4ZknhM17kMeuA",
  "key31": "DTjnyH3A3EFMaPCg6CEVFNdEjwcQgASgmPyUq164bo4gRszw3iyJpeyzEgfsiuLeTPhSecXX4Zog99HWxDwr9BJ",
  "key32": "5pggqy9jnBznj7Z9T6hohfZxuVuBP5xGRbNvuLEHGC4cjCHNavzfFSSkmnXCaCqE3jfsSWS4rpEYZkYfvfrZxrv3",
  "key33": "45QHMnr2zL6eL8ZbGs4MPq4Rhk5sQTb9Bug1MtvQ8ZXE1EguYnZPnxw3TqF2Tuf3FtrvxEvY7ofCpQxam9zwwQvW",
  "key34": "3sD6Ay3z2Vhye8V99Jo7xgwsjzfRxANAKCPQ7BE71t1rGBEvaxJNrPdiyGhuC7TqPLSk11k6ynwkSHNmGTeU9AeT",
  "key35": "39yccwgLg42VY5H6V6ox4kSN7zZRFviSjVDQLpvAFwnqcM4cJDzP758r7aJQu1yd6FNGz8iPaZRW5vZbiEBMvhXU",
  "key36": "43px1FzyG5Cv1qLMgAZeVEiM4LweYvnvTzh9GqRjGPCmePLN8rkbfzArd7R38qXdLdjs8zVdTHtnA2U6KRVXGKsH",
  "key37": "5Ae31asbL6EHfk5evdJKQK5QRrhkuvyeut4FwjT39mRdZD7gzKM45AaL16KbhHMarc3Yhio7qbVh2oPVpDzoe69b",
  "key38": "22NgfPUEsqp7xTHAQ8S1DnEoFxHPWvbgxpkEUgpK3DYKjD2gZ6Hcd1i9nxT3vXRzQst9WgaUWdTaAj1Z7ggZXAAy",
  "key39": "5UdXjnQzkts3SMEuKf5tiV3F2ZAhFMCJzeNamCWXRxjg8gsDuxqLFy9gp5UNxES3G4XCP6kjsQ6keXVyyuE1b2uk",
  "key40": "4VnNW1oJ7aP4VdvJY8mahL6eA2NKhXsyRB9szm3VXGJyi5EXydFLzcLydRrMYehzTN46RFpWko3BPdzq1n9ZG1qB",
  "key41": "3FYCXWYwQZXotS36jTdbhKfFTVh5dw793Fbmd9jbZz9ZybL9ZKWAkic5ojQGGNJ6x127YqvfLeiYGv6BJesDkdUX",
  "key42": "3yVAU5vFySPhW983ya9QEaoLqayHAZk4EMoWoPKbkzbk5sBhrFssiUKKoPdfboCk7Kv4R1SeamMSwtrB51J4Qb6r",
  "key43": "5Yu7GYLu6n3MDCF9ieSHBJ2w16J425JQ2oRNhhiesErJefpoTHWcz9Vqam4wQeATpA5x8tjKiG7EpFajCfXxEPC1",
  "key44": "stY2BuWdFEnEFPhB2BKr2pwxu3FTysoGRhx3pB1npgH7td5BWrvGri45iQ2DSuCnEg1oKtr1GVrAhgpvaaVYN4n",
  "key45": "3NfbTCUmcuqLXf1QtmFdDoqU3f3zWCZdzY6LkFS5bArrS1wTmVRdZUs5JtbG8A9mv7nNgcY8MZvkjBr864J9Kp2c",
  "key46": "3fTTmNJKw1JXE66V3Nf9BZ6Hty7N7UyX9osDNb8zaMvQqB9mJeZuGsdoTsB6P5bjnRFr9kgiPA1LxFq88JrtcMZ9",
  "key47": "3xagsqG85nmSJqyDJoV4t3FSBdErVFkvstzNF8Q6eA3x6N8ij4gHYFwMwYebSUMkRrzaegXYTesyzCHqkRhsmaPg",
  "key48": "2magEVig22bQX3MsGuPkG8b1e7maT4iTEEmuThTeE6vwJgiMRC1ji8Dmp5tjpHvVnQoUVUSA63BoQxrS9T6Lnsna"
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
