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
    "4Y1j9JENwHzGoEWmdjAbRMtcdVeNrBmocRKAnX1FQwifwLHwkxbEGDcv6XhBMW4mcWeeQwAVdj66jUEGitxq8RAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J8BwQzU1ABWpBq5xiQZkMwVQASoKVnQtXSxzVvNvVWg9Wreyn1ZC8tpvFrwHBLKkhbdzRgm5fHq2wkX685JvLPM",
  "key1": "2H4YwbyhoT7b5ikM2znneKdbW2za9ADVVRxHtAE5pDs2tVA7p1st1Q5jyBapYhTTN9vu8vTHPAi44R7vfM8Y5itx",
  "key2": "3erz6WpYMhhce9V4Lnpv9ZMTfAzfpx7ZjERdqyVgJpFUti9wU7JUuGtnHXckRENdUv6GVeTQarNWNsCQKKTRptTH",
  "key3": "2FLRcxFXAH6qHx7gsCp3LWSzR1rFhBotJZZkF5xAJApm8XTLC2Zdto5VThLdT1gzEtRze9vpz5jBF5UkQjMWNb2o",
  "key4": "2z5ToqcftgPBd4hGmjqGnxhPFpTCyXEsY3y49LQrY3pe3A7qQTQrfLKU6gtk25B3iz26ppMw4rypVDp31gxmewfJ",
  "key5": "5DUJ3x7JqAzsVCVYEFgGN6iU3kruh6GfGrkp1RCeGTnzcVTLWgoH4RVfDRD59xxS7T94WibJzFMoE66xZ446TGsb",
  "key6": "2NVaQ7N2PzoCitUZab5vKJ8f1U9S3mRC6KfjYSwyfaqxJQamXKvjCDYw6Ez9Liu7U3aa3ofsHCrVsnxRqJVEW52H",
  "key7": "65sB1F4oZVPNrFJ6z6AFSYWTAH5PpUS6QxA9Qg9qKaiGX77n6FitEP2nvFAvWNCozyRVETJZtfqZYxygGcCvpNu2",
  "key8": "4RYFo1sSyfZStqs99m3sQKqbWhk7QVX3RcMKKQgYjMS5kRGGpLU2V8jtanTdCNCE6wDrAP4yc5fwmKWS2kHYjMtd",
  "key9": "G5ssuRaFTCZ9GRZQEyn91QQRrpW99aanZPT5PJt3HAL5sfd2oGx9Qn9kfJkiLJ3GCJa7EtXruzzALT7d7EwJoWq",
  "key10": "517dhEztpqPpqCJMu67L5dMjpTcVZrRsU361uaPmhx7zWKopycVBc1CL1XGR6nXV6bEYr2ygEjrqXTRWCbKd5TjG",
  "key11": "4daj3HHjdDWBLRUHxrkArUtsqHZ2rTYo5BZ2zw2gYjj5QNrDaUFsRVuQvkbfNncGchn7ARMeMyNzK76LRFqVmAS3",
  "key12": "5qqthDmCgDVpbqjYw8WG4hkXoaDaSTdmsi3uCsV3FhsHSYhTEHpFHy8WzGPLujyjg61ztKzsiy19yvcspiuQCDV6",
  "key13": "55nrBTjrvFCD4odW2SXGkmY23pVmPfeybXrJ3vTpqDsfscRBMxGDdp93z4uHD5KszSP5dkRudGParpkC1NVCgiMa",
  "key14": "3tM32GzWA7wbBLbUMbMHMPrQx4TMzKLfPFJHH1u2DBAUC4KYcmj8vRAxm7Cs4P9fWhLsMagtAM7U98qAhn3xuSvD",
  "key15": "2BvpZvrAHzr1h86rJPMxBtR9Y3DiftSgt9QGf1iXV4t2KcUjqoBnxpYwbY4cvzUxsC5fNTUmp3ou8kFoJN1ZjtYL",
  "key16": "KWUryChWNK9g2Uzs57GFSN4sLAYb5AGCTotFUAmANRp4LmPSkZWTmwM5hyEQajqj1Yv2oXHUHXXZpkvZEJWJ3uU",
  "key17": "2munu5MqvBR3pEkqCquR9yrXbpRpfPBcyTtFr1d9jTBiA9g3wJS7H3cZNdCutyrR87jRGzgKYeZiAvLi59qV1vwJ",
  "key18": "YDRr7tZ7gcUZd8yHZcXxtK4cgjWBA9gsQM6VvJDVzpW5MP3vbLKxck5GQ1f5yJWEnyvQLQU1E2yjgykC4BmNfjY",
  "key19": "2osCV4jaXTNp9ekqSrikkphzUL3ebU6ytSkQGZ71DGh9cjwYjNnCQMedwtysMTGuS4pgAcLBiKE1Zge2AARrBVm7",
  "key20": "JZfbPjY6WGY1z1jmzH7SQuymdJbxCGMAyjQZCJanQ6437UT8Ho38nkS9s8fwVrBvQdP4JjXruxWVkcV4XZGsmq8",
  "key21": "5YhZMxzVjDWpXXDJLiuxRvq32Yzak1i3iqKXGLMA4BxDbbxgoTZqwvQXsFLkde3Ag93rB88wrJP23biqQbuim79q",
  "key22": "3r8Vk3JKwWmEKaN7vb8wA3eUbuZ1mNynRjuHx7fCtckH3DjeCiL57pQLt9dsef9XBbQHacpZngbmFN3akanmfXDY",
  "key23": "4yZ94u8qXezsvjjvwjFtp4p6jqV8GbNfpHzfAfKdBqR3GxNJn22epuTmYpcWQEQKcnNXssyKf42Vo5xqPxyKEhE8",
  "key24": "66t2GRLv5TAGrykAfpdZD4ruw9DV1x9aSQYGhMPDapqpfFAAbchS8ug4LYvN6A2AjKnnHSbstVYzgBKkhmj17uEV",
  "key25": "SByTURT58Kqro4vV58PTkaQatKvzrM4jFQGAgVxHM9qvXRSqXgVF5KW3uddD8KM9E1RLme8cSKnvVCX3doU3eZj",
  "key26": "3euLz5eJzPP7AYrv7LCzb14ea4N2TeogDSAXBag4hJsgqcAT8fARCV6VFUDE3x1YRxtocjsYZ7HJAYQPgs8ExjBP",
  "key27": "4rF1g6CwLtSrSbX9M3475jYmC7nNJJkzozzuzDxNB44o6H9zqaJ3kBRn4u1XYsAhyRnBwboCR9n71cKaJntyinKA",
  "key28": "617wVw3UW8TzjzHzeqLjksyZJ7F7uN3nkddqJPhEh3MvBZx2amd8Wp9PLQRM7APyY8i6NjFbJn7NHzcHdYqmHNgX",
  "key29": "4Y7AxrrWXTkuFY9yjRpizfgbQXo3ksWDh6ezBXjFYRuV1a5ASL2quznvVteHpA3FYKmpstuvPVFm3rkHEeqN6o9n",
  "key30": "S7312Xu9EFix14s2bBMB5ffAEv6URHRhgKgPwximDzbQyzgyCryiPSZ6UzEkTJ6MXhFfcypYZmfAo8AEBpu3iX1",
  "key31": "296JpWHeX1s38iSJD5ah3T6FyjnyjFFRzKxTb7q3pjztnwNSWFGR8x9UP69JA5kq5KeETqhmtZjjidx2q946e1Br",
  "key32": "4xQpjyrH8ByYp6TLBKTNcg2TskrDEodC3TwRcQ7wY6UNMkHdKdei27kMnomZuNhyJ9Z4Ktth3zGmBEV1dsHBJw86",
  "key33": "2tgQMHzh5FfBZPbphhEGH4dH14RsR5Vmc8gEnyM8DbNx2kKjfrYDhGhMaYA2xZEU3ruLbb5sShu9gqRJVSjKBBnQ",
  "key34": "634KVKpYGqHSNFGWjodeUds1fwrzzir8DVig2xdsLgHVzmnhE1VEFkxjcLEH5ZhVt3L4cjTjDeLqDVSAuBfZU1oE",
  "key35": "jbT1xTRdr3kBg3NDExGzdJLfWNaCQ4CsLq6TUuGLW1vEWrD4uiUFfxC9hYE4FGhL7xumj6u5wpWNj8hCHmxe7m6",
  "key36": "EGGVYGgPDi5LHw6wW3mxU6tj4ZyoPKrY4DhzG6o5s1DwYBWZMydVHK557wLQmBtuwURrhQmQ3N6o9uTunx9KEYx",
  "key37": "4SgwYubzJak6AuJbRMfm3hPyUSQfFHz4kdnH3oyhs2kpS8e8c7DwT6SwenGiKnymYeSG6APzP1TGttqTRNzPgKNR",
  "key38": "3uwKeCfzs1WUaB6fAY1PCrisSep851oSeHT2rjcF5wmM9kTyz38DeQsEVHhoaFSwq1SBTAPH39GJZpfCPS1Eqnhe",
  "key39": "3reyTxiBg71rrr1CNngYCUQGwcfuBk3RwHMUisCFDFc6rLsVaqN4bF5effrvQK7aPgAEMxowV1JmBqkHtbrM9Dvp",
  "key40": "2hkSauAcZ7ELZBXv95rXAFb6uMpLcoTK5T4Xt5WwfcgeSdvQj8F5JxAos7NiFxVCjYwXa1GqzEQNFgGuLmdeBsB5",
  "key41": "3LFpro3SLqN85bgLZFP9ixz1mqEuERukssHcps1hPiUL9iq8xoUpfmiYcKNUxnLmRCprnsxfxU8TWFnSYnBojhAR",
  "key42": "BrnsMuH6pBkgm8wMTdZc8jCYDLrE7q7eoc8TtTBMke2B9V9bDWtHF4HKEutzz5ygJnsPSxvbcRXVyfavTASBLXN",
  "key43": "EMDXsNLsibKwhaUHTwfeYbqP86uau3Dj2wESSj5Pnq6iNZYHXXC6oT6VDbowbtsnE94SqfjxiTkumNTX7NHDr2L",
  "key44": "4X2qZfJ1ekTDYmqkE24J9QrVfrS5GEQ7hWkkHKqLErTZWqGt9hRAKrcTf7Lc9N5RHsYWWDmkb2JH15NustPsc3ZS",
  "key45": "4Fpe6QWzQRXwqgbqF6PQGve5Ag9vzQPkBiiVqTxtEz5JgZQV4X9hGx8cKFCXWTbYv4fhGLjnechF56bVGZUYMGGW",
  "key46": "24bUXmRhYDrBbMoqyy6B6Hi33FM72wnRMJx4j6ZgVQbbLeVCEJGyj9LreZcAXDvAG6YBEYQesYLkSR2mWrx61AtP",
  "key47": "545z6YrjH6YHqumSm9Wk2WRrLkgNhXF4qYFf8xfqDhcrcCa7JuJgu4LjunQniqsfD5rqeAMUSd9DDsU8BNT4o8WB"
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
