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
    "Ah9Rjrx3sEskiaontxNfrZD72jBfHPTvxB9gWbyAX6MHRyELzreRzh7uFkPoHchH2e9mBRaX7huahQfv3GcHzNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BvWk5AuXgjHoZpTAqbokLmRdwY3fJ4iq2rUAcGLKcvxC6LHNgFQ9zXjPNA7gnUdZcmEi1t8GvWVEQL9qAvuLUux",
  "key1": "4NtR7pWpgFkk6uFSytoUyYN4RcHu2b4s6RfaiGKXyUTUZsfj65h9WPHXE6Y9jRwmzMorZVfLuPnLobiXzoMa3PTy",
  "key2": "ga5kE5ubAHtqjTJDkufoqDRdyHCGgKSkxwgLCfcrtExXi1RjyB73W4ms4oSthpqZdBzshZ4hKJcgHEY9Jfp2jMq",
  "key3": "5rHAoiWFCBkzEHLGdQzQFtqfxCcoMMCj1h3D41p4pRwp7owWFGhFRjWobJQzoAf9CPdN3g71dMKH4gGFMKCr4B2u",
  "key4": "2JdiMUbknqnFqn8SrpFYVpPjzZUg63EBEewakN5NZK2h4qQ9YgUA5PZ2nCnKrAkWCN47xU5EenSSZbCNDpT8bMSb",
  "key5": "29ia3uzHXt9NM3f52nVUxxdzaTewmJBL7eSqjpjDpGRabkkRivDyHBiqNVxzfzuDuaTKDixosaDeKngNRmB9Do9Z",
  "key6": "3K8qEqEiW9AQM4xjZUhxu2p8gq299mDem4t22bg9zvEgw8CYQg84Z8mEY31QAL6xewJ2Mzq5uSReynVgvyHFnGUN",
  "key7": "2PZrMzDAennYRTFfByBPG2LoBY42MLRguUj9agbs48dzSxchpBsoNhjCkQu1ypAXrDiwTSVRGj9XXCgoVaLgjhm4",
  "key8": "4An1Ds4SWYUoJPTx4rn1zBjLpUohHbeFxZsZ2QbutVvree9inoT1ivubMsJBoshBK821tsvDLGxqvotFLuvWxLPR",
  "key9": "5mjbKhSTCKCr88jGYTKi9mkaqReDdqvSqLj6yVhboUrMQnXsyPg2uGRTNs4Xvy2H148xNqx6qpVzCe35BpkfV5QG",
  "key10": "5usAKtu9y6XeebUrTC1Rq33RfDsaVxz3TwbJEkBwsnpgAz1q9GBVymH9fziVR7B1pf1C3NcoZaMfbJxpTvZQcCfk",
  "key11": "2Rf1ZLtJkbuDiACHAHXYJ3GvyKy6xBfBjhbajkUP1s1fWN4dsQwmBjQHQZwdEUt28tyrGRwEXtWxvoEeGcvFd8Zi",
  "key12": "3a9xW4LHFc6m9PP8WS6qeg33xTCG1aYPkrsaSiSsx5f1orLzqWSxddkoW6FBpCm7ZgbvSpty3jNTzYE7QRM4imQw",
  "key13": "5rSvCMPpmH7kCkdUiY8VM7emmAbKfsY9QShgFXk2CDVZ4XRV4sEbobRGb1djA29Tjuf36g9jrP5qYRhhosXiN9Jh",
  "key14": "vNg2P4D34F9UD8jEgU6J3fXDvHt3bQd6nXXoWVYpMacb12LLxsNp43vHGtF6KCjWdWgNxq4zcCVFWYwjsdzeD7J",
  "key15": "sS44FrajjFP649UFVPqAtaJDYYFJnLqdKyMToe163xcbYeJs2gQZHMtdZN3xRcPLKrxKpdTpsnbSRNWA5Ss4jTM",
  "key16": "nXeJ3XxxwQLbUJWT932BRQrYHiQGErXYLMSSwADcaysYNpgewzibvsGYGuqwjmbM9ncAvypKBUNuy21J5kDtXEr",
  "key17": "2xhSpVTdJM5XsVQrYUvLfV9EoXemtopzhtNYeiURyiJUpbQ6VPueZjq9x2HzSjU388NUWBiBfbKuVKKZ43Ad2Tko",
  "key18": "5TqLKj2wxdW2zc8E1s4yXejmydmuEXoBAfhoJ4rGZoFm6jWuQPVUERoMcd6xjo7VX5GRybuoBLUjhbjCZSzgmsit",
  "key19": "5kAddZhosctsa8Kk7F7yenqT2mqzNJQhgtAyq6CAgjb4HABQbRBzNuciSTsoJkgtrXGxG4Mx3HPL8GgpNG6vzCgr",
  "key20": "3A5aDKuw51mWRsRZRafhBD6adwwb5sLFAeF4tZ2j71zn4ZhvjF5XjyHRqeqG89SnjmSQfgDBYyrWDtDZCA2CXqTY",
  "key21": "3gaD5GLS32qLZp15ZPk3WQRKiibJWT9XQwiv7KDggpxtk6vJQLYHFTaNsFgfnqBukZ4H7DcGY447RHSP87mTSvtg",
  "key22": "5jNCqUfKA5VJoBjYafV84RgXwd7Ee6He1jVoxJerkmg2ezas4F5qR5AddmagebyH6Sx4kbPGrQLMjRw4C24ujuNp",
  "key23": "5mrn6BtnqzHquPbksi45DwCZHbfDUVU81V6PMEzMF5J8VG8r99G7Zxeo6XcazC2A9DtJwN5j5MKNA7YphNvtEEV6",
  "key24": "3kFqx1g4jtbiroAQFysiK5nMzLQEVCTrjLYif3rtCEGVnKWP4GWzTyaWa3cs9cw4CE5CnoESiRhvjgTdC6L521RE",
  "key25": "XbxMSTcjtaVrDzWezDsTu9o6jFmNRe1sU4BVg39naNqEQzhfKWNRDWsrxF6yyfdqrkVB5csZApVmrp3cwvn3VmR",
  "key26": "42x2aNUf6PyfinkBU5fen9xCcWJGhFqeeGeAkgTjtBLDsiJnDCd77PWy7yVzXgbGgNXiyWbz2U3RpAQSTyXbj3Vq",
  "key27": "3i7cPSW9xr3xVv7w4wD24kHCCzQy43NxPyNa8xfYdkjeJBXiegdyw7ks7pGnaxi1Ukwktz39SL5X1oP3PRVURv6X",
  "key28": "2wkbaiFBV7tSG1uvf1CQDsLvPfqAyYZqraZVSMqp7HCgNTyrdeNmGXXYTd6hZxBr9jXPKYmHWnFp4yqg8hGFQQMe",
  "key29": "5r3M8p8t4sMVDZESzJshukknybcPDfthQB5zDbV8EcxjdDHUdtNufG7gPAgzGkS2dFgNjP3LKcsSg9w164tUd9tU",
  "key30": "4i2mxKueQAquLcP4uBuc7cWjGpLW4qkKd6y2QLixxZzemZecsrfNNd7fq8XL6UzvGEDicGRKkV7wqwF2uaPBFTaG",
  "key31": "29vHwrScpoS61xsyq1gnC4sRppqHRFY76o1cggFLHGfBTiodM2SEcdgbM9MB8hm2SA6vQfjqHKE9Y154Eg3CMvs8",
  "key32": "2dUoKoqnb9z4Q184B5gbooHCMjwGpxV2tuGTof4kzcmrDDW4aHA5Eo32SpP1T2rEjct213yHqoCA7MHeqLqQ73cc",
  "key33": "3soeBwKx7a5E2kcfGUe7ooX6GFgFVJS1Lf4VRJ4EH7dhLEWumrL7b3kKgWSaLieYD2EhyvDKRkeB1wcBN1KmBKGm",
  "key34": "5hD3AhEDP1XimPwiVADssCpDo2nHbJerQ7tsQWYVRmKKEhfUBBhPkiFDquu27GB2v2j9TvYbmp69ruUzSSjBZ1pe",
  "key35": "fdyNtJ4JSceVEhvU7cZ35Eij9exu5N2HQZu9iuWuEeREyKqMTEtVEu9Lgvqsftxp64BqCvUeR3qn6RuVndAQrCF",
  "key36": "5mj9EE5Uguiq1DZEfv83W7rBgfq9URCX2Syj3V9uiACEMuWEHskwPrpx7soY884y6QmyBbkKHuPr8p4ZsyKzbDjo",
  "key37": "2R8m9VGUBMdJ2Aqs35Rqnjv8HwfWsJGPck37DainjnCSxXTWzv1wynpLrn1qZHTiZ2WoSMviPQyR66Kai8TLbNkX",
  "key38": "4ptTDsskmaHDU9VvcKDbxBzF5ZDxjddCioygETJrPfPGfFZy6UhiwQmav7HrTFRVuqKYNhkqbAfHa2n8adghbpTD",
  "key39": "4qtDe4B8L1TkMQKCkNMKbyBfT7Rjwiz4mhuVf1mixHdGn75GpxLRAST1Du6ghXetp4aB56Wo6JZv1C6y9VNtsp4B",
  "key40": "3nExAyQYXDtkvSSwPAtH8TYev7deXx975GtCK582f6GiNJn3RixiGCJcRDjRM2szqE852cW2w78M59erP7nposkp",
  "key41": "5dshSjmveg3XDpsYo6tLjNxB2nVi811NSYEEo1nLaU9HdXDqzVX5Sp92LCfdGL1FDGHpsPp5GQCXTc7iH7UEzoLf",
  "key42": "2rXgLtCkPmnx6NHHiec7HBvH7N3GTaEHGFGxhDMES1NT9kgstYP4K7ChH1Puvhvwc27xBy5LYN6SwhXCVyGnw4oG",
  "key43": "3eqkDsXAr5AFY3zpmdgfSuG137AVbjSA2SW3CzVzJyWjzwBb3G19PLvwuGCZVYHxFNPy26p2nnGodujuSaf1qr7j",
  "key44": "3orbkMsK9snVwnVicWu4G4TjmM3Y35PTtKKTT9uc9xoQWXUEcKsBKaYSpPwJ2qqVP2N9v7aZrDx3EDpb2scLdpRg"
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
