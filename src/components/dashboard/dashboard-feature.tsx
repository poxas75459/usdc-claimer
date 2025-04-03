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
    "33CvmzkDJoRydP92SPusfooHmsXHjbyem14MQW43dbi5UKLAnjT6kLJyRZDXZgPgRVAwe3GHL6kxYwNPPpDC3W8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7mSMWg7u5LNa3gUHwfXAhx1c3Kcf8HGxJvpVfajVKMdJ3hWMiFUUkAQkEUrhi7p7Y8fj1pWs1ojcP2mQ9e7GaZm",
  "key1": "d3RP7CwbrD5v4m87M5hEepBjr5NWyjrGsShbDZU95UexiDCUwTfeo9P25hXgFcP1HPotVBrthSt7yMGNKwPyRjf",
  "key2": "5Rcy8psSBAsSwc6vRymZJrPaC1Se5ZXJN6hRV2s5yHYV1Vipfyn3As62x1n1PvjxS3Us8ktNoMHEDqu822uwKWJx",
  "key3": "4Ju3ZJMRnbfPCuLRGNCZ8r3dZAQjevCcBCxFzrc18fkQmYWNSh42TDjdbZ1CjmTyLBjfGH1xLvmsapW2dJRajaT6",
  "key4": "4Q93e1vP6KwwovQFu41TcoAnNcFe8XX6pDrJ3fUq7Hb8GakpN9dvJxAJ4dPkpPW3A4sEL1UNssXwDaTA7BJHYHQs",
  "key5": "2s5vowEqQcnDFiCUv97tAxV68FhR8dy4oMLwf73sUagYisKh9fRqw8kMPJEDkxEwuMeDnsATApMwBvRDq3PJKVPx",
  "key6": "turGwbKc1GSymtkewjSo1pdRao5TNATLB4cUjdwBHsMK2GVaJSrae7zxt5vxd65VRJ4csHGbH463To9eHBFMTvU",
  "key7": "4J7p8a5yEjfor6y5M1mEzjdKrjKuwUkULgZSmxLLxwHhReJDPbX1tVZewpQrsCV8bW3vvj8RahRsQAnmDLcwPtmW",
  "key8": "61MdcAAnVNPYkdse66QMEYWGC48udAurPgceuP6Sj9doBXX3Dwm8hvjuSpnDdRyBau7uyKY3LFvMuf4Cfc6FGLPW",
  "key9": "2CoLmyH1yUwF9ejTFHkc7buJzW798yYCge9tmzx4WyujpSF6YBpjsj8tazRXQCUhaJikvVg4vHehDUnGFpJz7Bye",
  "key10": "41M9kS4RpPh53x3Nfev6F1mm51VTFbMTzbGVJVs8khxk64xR9oVgvgMohG27vsXUYH4bbQcnGgrrzsiCBFZnK8Qt",
  "key11": "3QjqYWgCMEA8GPYmrACj2r514jKF2nB2w4ue66DKRjFfu8zjd2DT13134EoQ1HEMQazoQeH5tnhNWg3x8KmHuNss",
  "key12": "3UTBhQZcniEG1Mw5sLM74Nye8eubPDubS59Jw4uXboXC1gauw46JpYUz7NrdEk8WzbbSVa2uDEHf5EVsvwRpP4uw",
  "key13": "5zua52pGVAA23dcz6jpMsHToeHeTqykMDJVrcRnAzLnB4w4o592zNMMuu4tjKeqNVVLymJUF8fUNEd4kuC3Ck4QE",
  "key14": "4yUEfWh3s7p5Cz7KyHhWKS1kw4pP5NsYknsnhLuutV7NCHf6kidbBUZj4a7wYypWAQmwjfQHjuyNouU9xX1J2EK7",
  "key15": "3KxEU1WvH58JtX9sBCcHuCv1x63wFM2eTDr7cQm6j6SNrxnC3QCAkHogxWDzsVRpmUKHGwBYpBE5W89B1kx8y9Kx",
  "key16": "1L1HPq7LFt1vrfbr2yhkVm45ZZDcGQ6fQU3KT6mS1tXAtgmiGrynzWneuwcy52MnMN2DtTLDqr5yyX5hhkuZxER",
  "key17": "3uuMkqGy86EQbrnCKNmpMTmPAfXHFra7KPYkSzVuTjv38fSyZ84u3JkRhcnvVA8bkDymtsjqcep1HjZCZU27jKH4",
  "key18": "NfAAYnx2XTqwYfwrDsVtZV6VeQ9wRCBoZyJAnPEtgDYtMWrbTQR2XL8Qdvnc22bgXT5oQhtZjSHaSv6GF6v5p6R",
  "key19": "2jUESa6z9utSS8aoZbVXZ3buF9zboqhhdcMwC9jKgcgLvkPRvcNtyp4vNcunxP138Gt7aqCFQWrDDYrMwUeYLkYU",
  "key20": "5ov5CL1FBiGsb512EDPNN4tRV7iDZzD2ueyGmqtAxTwLjS6SW6dDweG9F5tNXDWUEtLRSEnawJd2tBotNac1M1ii",
  "key21": "5nB5nRGpz3pirjYq1D7JjdMhuVQXvmdbCQ1nJgDBaSw4gXEqoLEhkRW6EpEqUxxrtbiXemPHwCBxek6ugqXMsgDi",
  "key22": "2wWktk8HZbwsajZ8yujzFFRdoUN5fsmvyFwqh6GhdD5cNWszPNTP4ZAYyVufpEqEhe71z6W8kWLJQyJj2oEVZNNP",
  "key23": "uh9JmAPcRtTDsJgYnYjSAsfnwhpYCYpXFHYFVmur1MWaV6bKEi2hSqZ7pR3TBeCUNDNFrfucp16k6hwb88E1GrQ",
  "key24": "3Z7d6Y3ZGXuR3KJAZwU8XmwU1Aj2AKj6rcuhMrKKkkpdFd9n9E6m44cpq5zjpdNCc7pUaUa8Kk51g8EVh7J8RNgC",
  "key25": "5rKxy3EnSdU8MjxS5ubiVGv3pk5SRRAXNXUdbLRfoj5y67NAgZD9rjVCWzCPuGSy9uBDbeAvKdG5ZLFQ5mEvcr8o",
  "key26": "4xWEhSvdHFLbAxamnLFpVGbmZ1sTRnZqqsuQUTkDpmiNbXM5vRM5v1d6DaBu1XDtPV3t94E4yULAqvw78JpmcxDU",
  "key27": "tR6Lf6eZorgvYqL4BYWEVAWTZb7jo3ewdDToqP5yWw8QgwmqfBV6t6huQCGunpXswjuiaPqupT2UBcnPYBYXTzq",
  "key28": "2jQjvJdUKYZNUoj3nPWr1N4Lextpogj5LUHBVzTVFqMvckKXdm9wTDzmQvfLHRW6NYL2R8CNNEJUgdSqxy2GNTTU",
  "key29": "783j2P8KaHByp44AJ2ZcmCDwdNSy9s8yhJCGaNsSqfGGtNC47gVuWFZJmg7uExgeXU2ZEyrVq9VVAdvxj76m8zS",
  "key30": "ufBCnV2YyxkLknMHpRPhpeEvwPpb54j6GLQYdvL4xYHTJuEBc5JYTSGcZwbfr1pEYLkbJWi3bpgguz2dxVSrveq",
  "key31": "4rs6FYrqTzvovTSiaVeSperfk2AsXboF7wfVaUaCTK5qjQRLScoZ3U45Bn3raYJb7u62HMgLpsDZmEGbX6axXd7h",
  "key32": "3aYWPBjt7HDykgcnYwnRrZjWzTA2WiG6ahUTGeKDTAFAJQZrM3pQFZxGNj12KPmVmkjTnPQ1hasVWitLFEcNHUuK",
  "key33": "H7jaSZVrRpGfD3bmXwuAAaHeUqjMinnatm9uA3KvJJitMi8yxK96TDTS8pTwhiDWxL7JEcPEwEHW6ve8KN7Ho3n",
  "key34": "2xKnWB3efNp1TtmAMQHgvCZSbyZYeDSafoHyZhEotSMvWCwtKkX2EmwptgKCdvZvxrCy6w7SN1Y6d5f3qMFeXb25",
  "key35": "66WQ5FsPGuQPX3kq3SXrRfy2YXva3mLfNMnEv2c87vZHp6qNF9SqqpqKJeuWF2wbtTL7KSApPGs741eocbaPsRHk",
  "key36": "umrZeH2vsmBGYQBHtW5PTBxggWmnjBQYM9Bxo9f7bqk3VQHopNPwgkQ4MZdHiWt86ktymDe48hf5AJ4nikS1ogQ",
  "key37": "3Mk2eECMHPsXCdRkB8t989APCyS6XGDWNWDiFXd5FLsbgV3vJP9r5NsW8Mx9iZUY2NBM6MVydPagYGxZ36pKkRPQ",
  "key38": "5WX5dj5pXcf1AkqoA7NNt1Zh33CfRAequFKAEzMBie5YmckSXv8s2KQ6cbuThB8Pfv6NjqYXE9CWAkCxN6vkahQR",
  "key39": "65WCbsa7DaKEPmM6o4RJtPhtc7NjcZmgchSB5RgkQTph6nXsZaJGStsqP5ziAwxzBsBGirgBSLUkx7Wo8ZjeauVq",
  "key40": "4Q6E4gVzgpDNmQhx5hzfxv9nWrag2vM9s2CqpWicrvxpuwBCPznoUsNQGvU7qh1tdNfBq7SoTboUu49wN4S8z7Xb",
  "key41": "53t5x6XgR5TGGYdgZYbThziEGDhQh4WVGCWFx3kdhC33w1Q1DoZM1KFw78xPvFaNWk1WJvtBqw4cRZuezvffbC9i",
  "key42": "TDiFudy1QzEurerXTuv84Y4xRPdw3DcQz2skrZxCrWwrjQm9TypmGme9RD1a2xy8gzYRpfPeNEi8jaTbH9jyBL8",
  "key43": "tKirc2RKSoSwoyviabsKA9HKr3zZPfhy71YTcbxwkKJZe2oZYUPyYMfYngGJUUEgzszAkBPn9cTZBXjQJmHZGF6",
  "key44": "5SKTNssP9mRWg9f9jLfe57DbMmUmEjf5hVThZMqHKRHPbyBQXkBkAXPZve9uTbXU8cYGzozNqZHvQr72xkvAyUwC",
  "key45": "2cyHy3xuH5uPKPediVhpsjCmiqqqztBnT3G7gDftkJJXqVZcxBNTiZubSNpB1Rmk9oSUGuarqZmbvRPBcFiPK3Gh",
  "key46": "457jgbrNtWVx8csRV1f6MuQBy1TLxLuEkn1dJxUHtFrcBq85PJ1YVRvGNhYedfqXvbxCj6gLVYeYWAHUCaPqGNVS",
  "key47": "3EWGivh4zTWc98geRBTsg9RbGvBeTdQGxxk3sguKb7VhVdiAyy37v8A6GMsmMxaBCNGbJNyRogtXKERBjHYFDV6r"
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
