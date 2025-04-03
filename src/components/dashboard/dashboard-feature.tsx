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
    "5TRjjrsVY6F3eNXE4FwG4ssGRPj8CmgGEqoCk3Dw5vfZJhYD8JeCZNLCgCFx29FSve6J7PCS9hMTm3qZbaPACqpB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QAqGS8vPY9FCk4S3sJxtDN4PQkEAmuGaebZ7wKTUr8nrpKGgPnVA9dBBnqCNYwTcqHqFaKtFJ1MLWFGp9t7cMjH",
  "key1": "qj3juJQzyJs8wudjSRgX4LkTS3cmJbBEUsq4CVLkcNmfsdGYitmPsKiS1mePV3EJEKfisHrSiNFcYbPnXwws4Qd",
  "key2": "5ddmA7UQcUpsUanpN5p4pwxtcMo3edtBAAQM2MCYqZ9SkALsqnSqC3CpRDZjVbfFguLe74KfgPtov2n2yAS1KkbQ",
  "key3": "3BRFXCR1JkY5jCd4jGzESMb9vVG4dTVNMCRcpPfiGwK9VQW6BrEZwZFktKmR6MtcXFgmHJVNNUEv4Mywv7nW4PqU",
  "key4": "4F7ypC7eq8R8A98uVJGYRBcKza4gBUhmMzsmVXXRgSj2nmwgmPEWGoohUEo63PZgVoTXbeUwXPyG9JuTv5T7Pw5H",
  "key5": "3YEpqSq6ECvd6wjbuLY12LK6pnmNbETihZr5Uyfz3BriJG2tJDFj8nvqq9B6BFiiEDeex6c1yzT6QSKhptenx5bD",
  "key6": "26SoKUsQG1iZigGfT78rJD44GkboxBNArTwwGphAh5HdfgqwxKayrHFAQ7YkLhjQkZcZizRupyKE78a4Mf1WJdWa",
  "key7": "3YrSbncEPDRAMFg55aarvrAQW9jbWpx5wTDRorsx64WoM3Mn3rxh4bRBHJLLFirmtvQE4RiosESgfCRzzX4bia4S",
  "key8": "2XvyxoZYYfQUeSedJsYwsQszMGQSkMWZUJbhqeziMynMCFcrSSM2TQLftuzJb2zeiYx4rcbymDrA73vWM67v3UGe",
  "key9": "5hEwBTPAzXfZsGZAnDod3vyCACiHCyg2HmH2zNDrqbCkg4CRM9NUWhrb9uV9tKL3YByYmWXhdYmw7geJmjmboGqo",
  "key10": "4kdCLsGFTnhDLnfsEppncxWEdhMoRdGfTDuKBLi3wxNquWJkYFNYQ81D5qvuw8rfAmWUJNZiLbb5svoc6d6cgnY",
  "key11": "3mLw5SkRW6W555n4qHiLm4KQgTxMwPkwAYCJvXHKeLg7nDuGRRh8NNhihzL7B7EHqmV7HhKj2SRizATSp2xkaUKp",
  "key12": "FBSKVpPxrcPGx7yVbTWhwLHrDot7eoy1x2WnLv5f6N3yMq3ZgXjqmX8kmP5KG2P9Wsj8Rou2rF8L6dRruoraaHz",
  "key13": "2GGM76Emd1WGJNxdcPL7bSMLNQqLUSSQ4Km8PZ1W4frvez6A8RH9XrnXvPvVXqbu9nRB8q8tmhqyGLwrvr7wtpUn",
  "key14": "42vXVdzy8cEZchrZukzW7BnY3gFXqXH1bAJjbTysJeP8ngE3UyNvbkbmutQWRD5QsnkBU5dijkRiyYp46CUZjm8e",
  "key15": "3XhFrmir7k42HkLGbem56crAH7uQU9kqSN4zEpgUo4EKEpULquGE2yQahf1v9ora32BgmpQ4R3RNzrNjLVnJ8y5n",
  "key16": "7dy6Z1ewBja7kkvqTWNJm21nXkJMnWY31dZMECVvJz47HH9A8PEnHw9wcZfWN4tYDALNx9nDuocpqk7xqJJtnc6",
  "key17": "4Xg7HAp8NPw6rYdyJ9midPgwEYYAgRJVaotMaR66RUDwzVL2zqctaiKV1WeLLRZ813GG8JPbPbXaiAEANXho6evK",
  "key18": "3JQF1UNgk8tGXNBqJiLWJPvcUGezUHvpJdjdteB6FxffP6EL3bXqF8XEaxcgFi5xQ8Jc86YHMRLSHfZtCEMhX8Gm",
  "key19": "5zCDnSqGSDozkZAW3QGS21tv4pHVEHwjE6RkEpsb6ttWDVQtHeX176ckAr8mSCB2xpnHVAGUZn7JrWopqYEuhdeQ",
  "key20": "5697c9uK4dib2ZYkcYUGWUFv5i6beodeg7HtNJ6xdvhHrWRyqr8Nqc7auEbmV6q3xyKDnJUCKss71UjMQwC7PN3s",
  "key21": "2q9TQGzvodrHquGKTTTnJWJwW6AnzZSnGVWXzRPoNxRycNLngCB5RApDVHKAXhttxwGdYMDV4mTNYqG9GJQjGApW",
  "key22": "uBh6znNzF9ZUUAoTfHXPTxKxejW5izW4EGhTCL2XYQoXWNbCvbHGY1sxCsEovGszHxgXGgeXfsvZqVgeJkVMt7D",
  "key23": "3KKQy7JziLQCqA9iHejfxjYoQutBFQUD6Q5arYP6PkQmRtwehs6wL8WdBD6cMv3bJjYPbe5gk5ZLFapojuyH6c3u",
  "key24": "56RPnihgJXoBDCcTZqxoaNoupkZfNNjHMjBiEVD7uS3HUeoedY2pdJMSjxMpKUwkxGnKmTDPPTfawTmjucM2uAgr",
  "key25": "3dsbAuXvS9SUYjj7k4dbxrt5CK6P8Ud6N4ucoJjqXTkBCfFjcN5vEj44JveQ45bMmpetosVv4beiDDJMqqD35D8H",
  "key26": "43RKNHZEnpvoAGnZ6AWPS81eoxAKLx9DiLGw5CbFpck6gQyK3g2ur7h7ArAHs3YJNQC9nUkjgNvvAb37UCzquuoh",
  "key27": "3vfVRFkw1w13udoB2ecAPrYUxAp4VCuZ4jk4EUrXxWhBfjuFbdUnkx2ckTZghtwJJNRZWW2EEohemMYzicgL1DKf",
  "key28": "2aHFjiGE6uY3buH42yqhydZKAXsQTT2gwEk8LJqyovdp942zASZGDNGAd7gpoQMy36xbDqiA71p4znYxCivcFgsU",
  "key29": "2ZYYBNkZjXBBiP3ZVBkPPDhEQ9tgzLkhtD3YfjE85PSbnUJ6jbtwpGU47UwLk94FWZFHk2x9i4YC2CuJk2SUPBt8",
  "key30": "3c6FBBbwVnXeTKFrFokUzVahvwQwkFQ3xBvbf7aD47iorS4sA5N3pnGx1snQJTvU5CNaiALQSsPicVTJdGewvufF",
  "key31": "4Qwgm6ES6PjgHtZpUcpZfXMmY34sZ9Sp3Nr7TaZXT9oKbvhrw7XvBKnqc1BfTckTvdZA1st4u9odpmQ26gS9te6p",
  "key32": "5HGAHJgn4QJeqeY8VokB2MZHFiw7oE1HqQQUCXKTm1Lnc93MyNbVjqVJcHjMPoQrFgBSPFZZ8qxUCk3rxxXepiWV",
  "key33": "2Cj4MWSyTCQENhxsrmVEnusM56dj6uLpdxnkXwDQikjo3VS2DyQSsHjmYUHKJSmucLacTNpd7UdnhueM8fybyi8y",
  "key34": "4bxMZzfKia5HiKNj9gkhThewKWN2PAbrkeq2eWs2vEuRpP4uUj81PjMdVqiHJXLJex56sJfm7mV9hQ72h8JW5KtA",
  "key35": "4uELBoAEPMvoNQbyZnPW9LX8BhmZoMgtDm14JLuqHffPKHG3mS9bEfbXSwxAK3GyNPLEoMqPi9GgwSYYD6LSVEbS",
  "key36": "5nDLPSNsZgJuAaNoHe4MzrN6Wu3N7YvVZHkUHbhSgFQ2AKQ1jT2KV5RBWdKk8gt9nsrb8EW1uEfizan5XuPWa81C",
  "key37": "3o1zF2gqJi7hZEiAuhULjhfuCLy4YwZ4J2TCw2PKiXXbzSkcL3ByMZhig6ySSwkNf86pany9HV8QpKQGTZL1Vxfu",
  "key38": "22AFbeerSwqgRhGEggErWje2oM8sqDVf8zotSCX5Tq63wfUSgxZa7WokZQfU8NJAm1xVkSJE4eAznfFqztc9bV5W",
  "key39": "vndd9ZzgEsnJiMgCFWG4nHfQM5JMxqnEqF1Qm9PTwUd7HLoFNj4AAGXMP7o3gH7NV2QA5XZgMEmRZmHb3io6ZpP",
  "key40": "5PgFbaWHyXpPSyuv7DppB3pCufGhbEBu3osmd4zhfbM7p1P69yUHFjdmCspNgp1K6t1gTSqyQePxGzmgCnYyUxu6",
  "key41": "4pRPnYRV3sqC5hjg3tpGUA76wHjhTDA6vMuNkomg3wU2CTjbjp7GPfzgRkz3U8PCmNQZPjcTuSyjdne5USVwNB33"
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
