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
    "5W83mcq4REs1jatMou8uTg2Lm9mAGzL7trMVVeZohAVJtfmUuZ5NzSaxQpvGf24LV6Q3TKQxC3GHFfCDFkmnuevB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44245CbfdUAgdbcdKj75KMAMcS8WvT5t9AxPA84KakWFDxPLyXR2svtn54giAneDVWbeQc53yE3FMZEqyySKBGyb",
  "key1": "3rJRj1sNdsVGcaxgsCz8jDcNP5MW8KysqAUAAEbNpBiotSwnyFpQhMsLQxi1KK9FXCjVDvxFdptg1TE6Dhcxg8g9",
  "key2": "2m1bMZrpgeSgVR2GhYzcvxQyEGnR7TFoCrxhDwMMoGyNWe3BczRvT7VKvtoJYYVEqP8DcyijFqPQya5mi6VdAoVT",
  "key3": "67QFKBAY5aCC6ZGvDmW3GqySm7CppUFcj4e4hpeCLdx1PaFAXKxVe5guzhhZsinduBFfK3v1Y6jzFn5LHVT9hdrR",
  "key4": "FFDHhEtoz3DVNJTxKEsy7mkwsq1hCCdpzFgVAYLk3LshP8aNyQZA4bBLtyDhFktyVcP9pTLr7UdHgPh4n6rmc3r",
  "key5": "4aPRiCxtZ4H3zEPJfrkHviymwT1QNSC3K1UgFjkbpe6GGUr8U4nC4PrYXqzt4JakmqHmMjLAQDkn9k3RsNZ4HH2W",
  "key6": "3aoL5QsugNcmy8QfS6BmehBVxtBbeL1meWbyXHGdjmZCmU8dZVaFR5knfFFLdjB827QyV5vWmM4CdBhueLfVa328",
  "key7": "5Rci6mheuKthUGGFLatBLkPTrXQwQsZo9i8V9JVc81fUMV1JBWD4szTKd4XSei56Mc9gqLc5AKY6Z6aCcyy6FiQZ",
  "key8": "44LWpYehnFiiQwsLfTRWeSNU6oMfymCmDkn7fxracyeVitpGRxgxH5HwkNJBDnNz2QRoDqJWNHNca8skvGQmyExk",
  "key9": "21PBSRvqDmbvv9TBmwjRARQxgRPkBwReotmqLFQDygjGDDzf5BDBFKSC9b26RsA1MM8zf1gfuHtuhT2gDmzD8bqP",
  "key10": "5hMfLoj7fnuJZjVVEaD2Z7zCgixqgDKjd94pgfR82R6Yy6hANLfZhiCoynV1PPGBSdzUnwq7cvbSjyEEEw7TEZTS",
  "key11": "4ApoHdeSQQq2yEBSZYuoDAmyVU3WsR1HP5Kw1t3RMLwheyUJcGsDQae7myQ4isr4EGuqJ4pdRfzK7GUsqys1FSWK",
  "key12": "4ansKHknitxDvWnF3oKjV3qYbCtLPfjP8KEVrWiJPe9dCaBCTvTvhA8pi7qCAXXVmjnhWHVqZhBnyGSbkwi3mJeN",
  "key13": "2pkRQVsMeAHhXBBYtLCNQe5asXa1GTDtau8auyGu6Yb5BD9jKmGZmEtVU6ySTHyhuiwdvVYeVqnKroLaKhGdFeq7",
  "key14": "5vkATDb9u8f6FSxFJ7jH4Rvg1eE9rBkX13sCjD8zaCes7h86XnB4LbykAeqkfpBNGk4F2iGeHeFDvCkHoYg7pdbV",
  "key15": "5Mxuu1HmJkhQ6Z7NmGZaUX91NnikaGkrDj32ajtsGhNNGQm8H5VhAAGH5ZopngVfz2c55ZhfVKLQ9heUkwcs2eZJ",
  "key16": "JWqUJePJePB8Na7mCSanYpyM7sqxi9fEp5GBbvDj5a9jonqbXg5yzmGkBFnnDGxPdDy1aFE6MAVQ5PS1FzKhWVe",
  "key17": "FwmRuxVzXpgHCQdD7JgrCkGM3Ls4mEXRRBVLw1QRZQ3PsVAPBBD2bkiDoPtfbWRfZqeZJULCGYSNYKGjGEzujxW",
  "key18": "5vPCAssUf9GeNzAkw8eiMjsDX3TSZheZNBA3Cqo9qs1Yc4LpJaPU6i4FPVMQhpehAp1N1ZRKPGMh5m8ans44e2vS",
  "key19": "2B2wmghizdEF8r1PCkrJo1NinBrHc9i6rMqz9eP9YMGDn6Lgr66sL5YB3XMuxDT5qSrT6aQfzh3zskuyrjbMegZk",
  "key20": "2uegqTCSva1rbH9QAXTWLqZUjd5eN2oWkGdbJyYPxZ7WrnqPe4uc4pm6U5QkvyoqoA7THqYuhzynvHRk3yMmS4CE",
  "key21": "4jPYZRd6GMZ1ZFFLxweqeXWgiCv2F4x3tuKxUB9PX8W8UNQvxhBop9M3RNF2tNKqsBtgxfKTcBPHxwpukxWXAA6",
  "key22": "2F73dtzw8cXGHbJCcRBBMxGGBcBhUX7dEJeWBNEMHtSk8NZgEKdSkr2uXntRAhifZyLo2a8viYwPT5udKC87oBKP",
  "key23": "5MPDnnKk6pYHjH6GdUcYxn8mdiMYY34SfrNSvvymw3YvjDPNi3kdnVm843FLAZspiyrcvEkXL68VRoYDVJWW4mRG",
  "key24": "4dskUa8KZ6iaeP2AkG1EJYarZjEeGmLBZtRbBep6kNuFShw4WfQzKbPqQfwggU2ZNH3onybZAuaacf5ZHWFJPsoR",
  "key25": "52PjudpHJubHV9RaJFjqEAg9RGBzPfGcR1wQeHXzwkyaQ7S2oeyi5pqFP6dNQnSRm8vhXhcAq5MLD9AQgfwf15Dx",
  "key26": "4PDNMQGJ5S1QnPzUDjRs4ZCRsW8PFgJqegEGebAGDqYCgF4bzH8AYxebjW3gjnFSgqatNio6yT9Sfg9jNNj5H1wy",
  "key27": "H9s4APB6s2vqRBxe3bsFUhyfarb9RvtiN1ee8t3APVKbzfoN23V2bpRoVbvrCKWC5yWeGXyTZbp8UE2qXMQZkXH",
  "key28": "2RHF1fBzGbrh55VCR4LS4YsciaMqnHnBmeBuk7wLhPpv796vuabv3b5Erdy8DDFheU7APZqobJNWJ3otBSQtjMKZ",
  "key29": "4U4VjiRkc4z3dxi4ynLqxAiikDs6Haorr2rbiXK4oZ5Py9AKRJS2NxhSVEZqe1XWAmcmiCrSYmQBMrj1mJvScy6H",
  "key30": "peoEZ5n4sfXJWo5e2BoPpXtaMVwpBa89eYxR7NRGr4X7LsgBNMn38euMvXMUDNMK9JhkhBDAzhqpkE2H8TfqoGG",
  "key31": "5VhiPbT6tpTrESnvcs7wfBakzkGbczbpH2eeVSaJnCmX9nedyTfdgtMjwDyJH8SvEgFTC4zhEKmA8PBt3zf9oKm4",
  "key32": "4EkSWpc9cabuzSYKCteXtMFeqBvDNB5tz5DsCnMxF4xmubLMoKsWKQ8UD1Qx6Wwni9e9XirUTU728Ex1PLujVrgo",
  "key33": "3HmKuyRbNmVmC2k4JrrN3KejEZEncA6myT1S8jH3x9Cji1iMFooKW2a4o9XqKW7L3LFaRkT6ZCDWVPui8zYiDSGL",
  "key34": "5MMURqBqD2sumn9RJbvbXv6f6mp1F1Z29EF8DnR1P62NrQZVsNSjgcSQxmd7pqBigucXa5sQm6beMBgQmyFRA2o8",
  "key35": "2ZNJTLt7oBVJKyi6MyShCwu6BvmeG7yw5SEJQtHyFUxKiu1JqaHxiNiipr617Aw8QfbU4tKFqkA5GsapKoueRjF8",
  "key36": "4jVH86tCPLNzFJ7EfpLYFxGn2ZC1BUzA2V3Mhxa3hhKZNRiAkLXowPhSArrUZdd2tDg5ih7rrsnDh13zA3jCg6hz",
  "key37": "4SPw2t3RvCBVTkJMc4JA6u7Ub4qqeasGiUtdR3t3vpqztL9WJH8SagSgXcrmdxGQGvHMC6tCh41qx9Dz7aNRrknB",
  "key38": "5hLag8DmSkNbLGN3cF5s42P5JZZBwPDgk5R3XdkRsLAdvzNpzPSr4Wxxv7GmK1NBMTHWAQs3xPubwJNFijxgkjo5",
  "key39": "2MTX1jjdCCEx7bfamEvwrU6jjjsMemgRUp7kPSMM9q8q41y9qz5p4i6kS7z8N9sxwjWyCdLmNJqwmM2sGrCL72pj",
  "key40": "SeYLqwomrwzBjzjrEKtStEz6w44qoBjTERnfkDfSK2HBCRyKajT2dx3Q9FhY9wkFuBjCAWxoGM7RKRkxQTp2eua",
  "key41": "5N8NuAvMjJMtNauN94eo3Tp3twNxP9CDKE5NhYQeLdH2aH5KSwdnfy733NCJfyqMVjUAwivkYkRXNeQGEzxuXxf6",
  "key42": "5ZuQ91ZUk5aRR6ebUaWtju69u3NfoXVM789AuW1QjpwHdp4kbv4nforcVJ1mk3PLwJyQ9dbC3Ak2eVHUGqypknEa",
  "key43": "QeTA3LDa4HUpbvorLPYDvoswFWjmZtKzcptSzsjmxkuETKPswDtDmJ3rLk8RqB3WxG6TFVrnGxB1JDYdcwtLTQr",
  "key44": "3kNgaLFKT14eN1s3dEBDx1xbJNJQznSshyXsQ31tyq2XmZuzkaWCUbH51wchWZwb5dEh5h1gKvgbh2iawzB8xme8",
  "key45": "2PRfbgQRHR6Rb7wgAH68xcNmb28ECXGkk7mp9j2QNwrd5r5NXvKZBWGi8NQ8iWuariLfs4DLfaYi5My9WvUqPMkD",
  "key46": "2ZXnWMMq2xxUuJKGwAnCjDbZALU62GcuixhjPBPWBScnrHC17oGBu3sYbDBZhU8tF7brKY4nF5JemUfGz47qJv84"
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
