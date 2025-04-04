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
    "4cSQ5ymz4PA8aNCfuydsoB2EiTMao4sLacTBvD1RyiPs3hV31Da3Ni2EhLJZtuuA7S8u4cW4Lm5VhdEG2YSrPnbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "232qXntjxuWJjJoopnk6Eep64Eqb7Rar6e5hN3n5i7vHJ5tVcmAHFqWth8CsXApN1zGDXXWzrR1C4hUuY7rqX1KF",
  "key1": "2g3eLRVEp7F9LWo36wxXvupBGDeUzsVArm1BhRaU1J3fjMqrkacmWsF8B5RiUX1BiCgbv47q9kyLy4kwdGL8qjR3",
  "key2": "266NQ1jPtQ1Npbugp7958oKenM6bX5honUygYL3ghjgnfmAWxY9gRaEeKH1cUAggT3Zs1pUAGhfNhHCmLzwqH8Xn",
  "key3": "34joMfey7gTpFCRPCaepcpoi7YxJRpjTM1qVrWXN7ZB5qkaX98gYHto99BrouCC3C2UHtDhjsEhK74epgMnXCesM",
  "key4": "FgyeSLRWpMJzwP9vq1fTSYr6tvj3xAw59YrU6FwyvLMx343GwDbvWoGNSnSAVSF7pHvhBkwuog3S8bct3iViAf6",
  "key5": "3T22zwPbni8dEzA1zQRHMi8qhc7S2pSJ47Q7CU4cL96gFRRKKJGMEDpdJewCDNjZyXQKQthBa5jRdTWpEbKXzWaX",
  "key6": "4D3dM9UvWmjN3ooQBas7yipZXPfswPZwZfXvUhfQZHxgPUdwJESWTXSWH86rtTCQs7Az5BaHM94Je7oamFuVD36n",
  "key7": "5jzorbyA8KkmeFkQznDJcHQ8EM8SYErFYXbn95LQKbzqqABYd4KCkqr2Q83eM1V9W8gZZWpy9er1RHRNHXbyf4E4",
  "key8": "2rbo4PyhVzoMJ9R5ZLgyXqbVZ6gW19uqFMcHW5sALuz1s8zoKfUJLwthgZWGXV5rkCPfmePxshJ72qC6eFxwExZb",
  "key9": "3VsT7mhwyqoNA7QPetZsbebv8EHdQmiPvhnhVZ8Xqwt47CCVeLJDay8AGFDWS4fQ3SuoxkBwQVKC8sAq23bZMZck",
  "key10": "Ce2zthyC4UDNx3vqDtMvQwPjpynTngeVQZnN2E9b3Nvam7HWtV3hGeontJRBAuXT53hJRxgK9J18uQu9tfm4JRv",
  "key11": "3u9cSPg4qCKWznHtbfxurE2J69hGo59y7oa3XVKrS4DhaeAukuLSUwebkaN8djLLKwMbSNdHgviyDrjQDGSJkiSB",
  "key12": "xgowg2ZbZYeMXEi22VmDMeeMhhd9PJCsqNcDntYmanaJ2miEfQQRLeAD19C1yJ3q7hk3AAD7WxwX4BMaHBaAJfV",
  "key13": "5bCmojobAuspF5378TAWvqPY4T8y82PjPYu3K4ySwVGEDdtz9sfMChNvdjzquoe4ebWdUnaHfy9fkXzsK11aSGpx",
  "key14": "5QJh85DhE5AmS66KLKEiRaAzoZ3pgc8DhPJpooFZ47b6F9c2WqNpKHo5smQcrRU1pKeVoGVaJoV1jkhAexbD7gSk",
  "key15": "4V9H8zMm7oUmCuCmLGZZQPP2dBaebZ8DMJ7MxySPEHNHiK6yaRyxeT6bBWdHCNt4uRsi4tk2EpGFwbLMcYSDfrfs",
  "key16": "4Pu4NeBvBL12CrckGPeVPgz4YiyhQj7Vr1qZzRneuidZW2AcGBsvTvvu2tzQiAtbHjX6prCj4uFRSwgKsqwBvm1F",
  "key17": "28bKTz1E2TobTLEgCEP4APkodjdZdTAQmA7Wmm54KPp4y1a6WKTRNhJXikYLbWfVSAmJXv8xpJNKopWkbnpJVT28",
  "key18": "4BdQJNFv4Av1YwZbx7E3ojJosLWubvMepsLqvHpWK5hdxuKDSqMPkvtMyE7UWQ5pqnEBxf6XxdgsCFvrxJSVXpTU",
  "key19": "4ytiF98K6VPa8PXzxGJ3j7zWvsqZ82PW6jU6ADoi8EmRoTNL2FFcKfc7hTsaS8Wte97odXqy9M8xgybKxd2FTWMK",
  "key20": "2dm9xnmAyLU8CvheyBhRDR7KF9rpwrYaHYX9rQSVm6crEQWTnwsKE9LrXfLuKJwxXrXXPCuhhNQe6xbTdwaLhH9r",
  "key21": "2TqWc8FLXvcRBoRB4NXeu2pDkYY414raoaCnp9nkdbJyzDC6gUe4prhoWEseJwb5DHw9P15kNmLmzfNbLqNLD45y",
  "key22": "5PJ2CcgyRuHaMkxnZiRV1EYeqtRaghVyZ8URaGJHaKojFeM4EkgJNeniogQ9AM9YgwEFbDw8PDihawYXYTFExaHL",
  "key23": "2ZpCxBAJTyMGwgR3cEq7bkYqgcCptzb4qTSXwZSPcQwSwFxh9CojKwEhAsoVpf2y8mRpvmbkC6YXiUeBWCyMw69e",
  "key24": "5jvdqJvC5JohRpkXAUSeGcwQpkLMc3poHtgsYYtvag5E15PkxET2mFZx72ApVcEBcVmnSDZLvQMhUcW1fGCgi2EW",
  "key25": "5cjRSkAd4XBTxzXiBJREjywiDVQ9KZaMHbviUh4NHETJf3eu4XWbheFUXxFkM1Sym8gB5E5UjS9ufGGRWxLgxdus",
  "key26": "34qsRYa9mCWgJfgLCj9dJWv4DuZxGFAeudcqCJefDe4VhKUFnuo2yp5MMzuXtiCfNJEY54rsyTw3hCaAeroPVN4A",
  "key27": "2JnwPm1t2G9Fd9c532BNap8GehBsPkZcSHfE2CXTPo5ahzkZcGr2Dq2tUjhVEhMAYxtJrody3M6ZJxTj3Rnx4Vrd",
  "key28": "3DCURRAsfjQUTxuW4WwhsP5YdgGeFvwCD64WxVLdRLxdAen7iufYefqbh9GGHoHHn1DNcQUbJ2iz2J6UtfkRDsnA",
  "key29": "5iQUEkm3HJ5aP6EER3fAm4pir1dhPJnU9eya2A3mScyHK1m1cho1Cfh7syqmjctNGBEaD11iGxVSQ9Yn4j4bQNcF",
  "key30": "54FE894uGmpVaNKmtLJ8PB3adrhjKt8iLiiJmb2vcK42ac6uEyQ8NNNHdsTx62x6iBwhNJQWGTSzpgtk9PRwcQo3",
  "key31": "3RoXMREGE66sBcvEAevwr3dwLu1xPg67HeaZUgytbVSUW8EHiEJ3DbK9wSUHeeTAuHtJei8j3fm2VczjCeYuWq8b",
  "key32": "479J1z2Krtth3kr1tK8ftN9FsD2kpZQh4DSpAsxS9sFmtetGe9PR43XqeDWcAPr7Q3HoTFJ7ciri9geX1kwryDij",
  "key33": "62d3AZu3aLrJrgixeXR266v4ya1ngc1RvSKnGFmW7nh2DqudWMPrbWSMZ9uWzXJvjdcZQyz7bfr7VL6msLZcXGB3",
  "key34": "4bGNFkm2FeZFDXyn2PnVBFuoKwEpWY2E2sBRNDRbvcrGvnxRh1L8NbJQaYXEVNcJjbm9qiLM5nk22hWtcpGytYRE",
  "key35": "414e4hM3RUjcbwD8jraNJ1ZZVeToAxS2MbM7MpRY6d7SoQYfkigxSnE6fpvxoerkXiTCjcx24Vq9TMZHBSwxpA1E",
  "key36": "4cgBbci68mWjEh4JjMm91zv4ajUfLJgjnrwX2vcVjqD4XrsnRep6jUvAkm1qzWiNQfAxRkEMf1fnzj3Ze8po15Si",
  "key37": "5Sw5Z3GtNfSxFNzc5Z9wciCxrenb6GzSf9ErGKCCSksd7bkyW8f4hmZip9vmqS4HrLwcofgbG9kozZTRUsYEsGow",
  "key38": "4Knk2eMqNp1CaC49Jt8K3E4zwE7hXY3UF3Wd85haPKBHa2bjnbkSZVGK81UiPHsb3xo3hSfifXnGi3AgQL32p274",
  "key39": "4C9Dr9HQQNH8ncgLcZMfmdNb1XGsKQayH5M2LDZBNzpxaBaVTBxjUL7nqaYQs2dkNbwxCGDmoeeMRKo5PKn7Rd2h",
  "key40": "yMBF8Wd29Sc9hcHEVmkVxwpuq47EkrbqCmwahr7svP6mbuuWdm3ooznvMDTATnJqKxKkfyT3tjb4t7ALYPoCoxC",
  "key41": "2utHd96t1nXhAWZBLsvMswGUDy5LPYM9Muf8iu2HDUQZhRfzrfNiMyWedxpdMzrDW85XPAGVZGE1WpfzxE7LoAXn",
  "key42": "2oB7UJFGsQAUpgwY8fwLGEv2KtE3B1izi5Yv7r57pQgZyEC6ofSnTBncT6pyieaK6vTN1EusU64HYUpsVqwrzu6s",
  "key43": "4giXwYYL5ShqNvcTxGMtJ9vBkpU9z6jHNUbUgEVMeADu4g2LLozFrUshEebQ4cZD4JoaN1Vr2TuQxhpnUNBqaZii",
  "key44": "5Evd54umc9XmSXTXsxBoFW1tj1WRcbAtS2bRwBty4JimJJtUW1Luh2JE5BrHeXfNcj9SXZUbGH6pk59PCBbNjD3T"
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
