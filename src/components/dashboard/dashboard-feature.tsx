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
    "2kQ32X1rprx6KJbTCG5H229g81TYGrxT1jsNZjcQajUJetj6SE1CQaSAK46D6hXGDJZURAJ64mPXF5nT9nWvbq3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yADkfeVJ2WKbPahCC4FX7cTSJTF8tywbsUQvpJ7ha2E64eqb2sB7ZR4WuoYZfHYddP9ouaayMK7sDFYozh8qsSK",
  "key1": "4iS3RWYz2s9H4xKeri9w4PqiSRstjbewdJMEHac8cyRghKJVawhARSvBS67AatDgYHQpnFxN8KJ7zq1DWBpWrTgh",
  "key2": "4z4gZb49z5LjxijoUAihkXhFcY1XmQ8sZtHjVYdgZW6GuRQemYd4mBCcmXoKmmuM8b1aMaMfoFhZwcPXTAHyV6L7",
  "key3": "3aekdDtXdnJZZTQdNytkXUcqcjNtj944SUs5PuuMoEH8ZZJvRNPJRPqvtrmH1L2W4rHPBvNDQGJVHij7YWx7bCun",
  "key4": "5buCowPrMcFiHRFW1BBWzn8PnHoVuLpPqoUWDbUYgzKp9kH2V1b24Rd4zwBUx7r8Mu9hiwbKsRWKNFwEHtzFysX2",
  "key5": "3nwwev123sKBLBeSDzJk5nDjtqfMy9hikRJT884Q7H4YceMhLYorn5XvsCKWFhxxXQxh4NfPk45VHzdqNmYUEYTG",
  "key6": "95KnuvTRHmHZqE7KavV3ESveED4yZWrR9pMvcZXR9Do9jSA1gMsLFWwj1xJbi4CkattMfgBMSLnk8aag9SLn2eb",
  "key7": "2MBYtgJwAhyYWKSxwNho3W52L4BN4wTrUMo9mZoU9bVH97dYKT9LS9sNEsYnP5gSjHCfR5oZMrfkcKudfm7J1XVC",
  "key8": "vcvVuug9HTTXjcXaK9nLiE9rDPG6Pnbeejvh6AALsr2XTKud2pV3YDS7apdtTGqgYKm8QabtTvkXBpmoh4CqQAL",
  "key9": "55FeveUwqhtPYDmirJF7Z2VxQbKqiHkc19Zd81U4b733Y6YYR3zGUCw4sZ7X7n5cAyAzekrGdhoCtGpNS534SK8z",
  "key10": "41HzyjdDKGowxUXoUvk1DdfHUSV5ZsZTzw6Y9v5weQBQA1nLjGzpNZK7egUshshNfPu5g6PvmXVmu9Tz5di9VB3x",
  "key11": "2gdAzjwr1ZTHvJKoZc4rajBA9fRsPhcL73SmyppWB6kgxdHjX3KqpGgKvBi2oN2xgeeepMhwcNCHXgeVc9EhBDmU",
  "key12": "5LFs4Yrq73WS8KFpFWHx71i5nZCbJUc4LQjAGj6zq4DAAtXhC43mCUpE9RZYwJZHzowSxBijducUz9vpm2FDidth",
  "key13": "aJZVFr2SCDjBru4uEtuisVLL6Pb6T5EiejwJrgRrFQvywP6gdUmy66wHSmQMHF5HEUCwTy9ic1oBnY1wxpCL6KY",
  "key14": "3r5xjvVzG3phg357XQnXw1jE7pH2h9bhRPFYeWTWivTXY3bV5uD8mt9fmB78P7EH6KbjvaAk4E9kFidw7hx5UzXK",
  "key15": "2EsudTicsUtyekWafUTyvDLsHg6eBPBWbTbTeSxaVyLEuX9crVZqmRKv1ynj346viVocFVN9xp3g9dekKtrQ4fhD",
  "key16": "57VufPPjGZhoQeh6F4tmoJEM4mjuXwyFHbFpxrysnPWRCDEysWHc3NMjhgsbE4nb3fSt9dGCJXmmgew4tZGHpARo",
  "key17": "64XEiyMJhQ5qxwbUdDHUmnCZRaFH6zo4kYdsyCHMyFqqABKrzbG4qmjSqBRRL5wwMoCHzhjXsmx7D6eK455wMUwo",
  "key18": "39zHqttks7sh7JeTKDvUi5Rrs6FoqifbHu5WcNQCzf8b1aLN2htVATZ221BNejnt7wiw3SjNLsTw9q84GCJSd9p1",
  "key19": "94KdX53DCHzqNHqNKcBYnCYaceFaHFoiKfRYRsrcxFaPtTXSskLpf3UJ2nzjiKsYs9w2zd3dsfLcKvDvvMhniw1",
  "key20": "3cwTvrabyj1X41ZGRaSVs9i9mzRMD8LvAmjNYMCPqng8YaMjm1vn3VWM8MPYQF27VsQFYJ16CgWS1YNwdihFJ2Cn",
  "key21": "c4u9xrtALdZFaNP26bk6v2r4hubZP3X72ToC7Rb9nLv1qSVC1Tw8MMckT8X2jcGjSvauWeAvtBN19V8LaetxvWp",
  "key22": "vWR6hJ9CtoEQTnPXxvyWYQa9Gfvue84h1fNDuMoUZeE7xruL2o7CQRX9fcSNhxrVT89GvoUQfo9vfb31VLBTQrs",
  "key23": "T8M5RFakjL2byide32axZK2xDpjgBv7CkAtuYcNf4TfrUmCYgyk4cJ4n1uuF78bxhwfLHH39ERooUr3cJoAdc2z",
  "key24": "3LiY63gPeuS9rPJkhnzXyLPvwwEphpkYqHzqvh7BxzLf1iJ64bqdjanrajVG5WeBEnTbVfbnwkthg7MSjfkb6ChD",
  "key25": "3Lj4ymG21R2FM5uyoPqAonSmnWdjSQXzXWuFAB8JpQfjoiq9k1UKC8MgukVcSdZ28rLYNVdP773bNrtdHhctER85",
  "key26": "VwKoMxzD8snuU8bHtj4HS7BAwBC5RGvhTYeXeBE9MKdUzPBrnxeP3RpatSgRo6Km63ZsGaEiZcf754tq45Bmmft",
  "key27": "BawR4kGAr8Yh3fkF2TTnKkTYB3mDCoxubkpaGV9rVHa9FbsQXmPnMfMbWmZ5e1yXQtgr2DC1b31nVjRZ4dsUbwR",
  "key28": "wznKrktD3vEoGjThKxHBjMiTktPEqvHMur9NGymzapLAs7bV5iL6zBUMitm7jPMkeE9ZPgunev64DafanuJzqPV",
  "key29": "QgPj3WbtpuVKxyp8mUhKTPgHte1Zuy28tY3UsB2Wo7qGrpZmH225HJJ6BsV5SFSLwXBHD4STDCN7cx1mwS8XWkq",
  "key30": "gmF4xLdnMRpLB4Ua7TmC1gfHV4CuFvodSrs4VLfKZJVYiRa768ExFLraNU43avwvCkECg2odgenZs73X1jj5LSu",
  "key31": "5GdegnJeRu4Gs9sLPB5jfnkkiGgwRA6kdhdTvH4MUdQTfiw9BcvBjTWswqVuxuYHiWUHCekEN46ATUxY8967gnzt",
  "key32": "5nkuvdZek5YQZgFPJKHJhroSGW3uPRoesVsKqAUqPZEaY3TPQdZp1FVX3pxRZvi3aMG3vNta7yUo5HeJqrff5qQ1",
  "key33": "EYKVz6aDL1opooxrcvbQtzoNmLQAXp664YY6tMvpBqp2B6s7qyzVaJDTiA8YidcDPrkrp4zpqaWgGEka3V6Sgux",
  "key34": "5eAnXJpBuKQjvURZafHFVxgoUaTU3xz7E4Bq5T7LEQynokqimp7SmPzmb4tGEKFQfwwSivEr1ws25UmPPqJXyGMM",
  "key35": "6enVyeP933VCja2o2BnPUyVUrUfvBXzk4tFWrk8N1jZCqJ3xNLTKnMjmuYFSeSTnrbBC2LkQWCmEggBfk7Fg7xY",
  "key36": "2gdBLt1YVD22jBCjndDaDnCB7iYNDKDVJv2uqNkfMitnZDEdy41JS88c8Frt8b73yjipCyWfugM1PM3gDg7Cdtei",
  "key37": "3ssw6zVojUbmjCeK2s9YfphFKY2Q97riZif1Fj32FJtVAz5dvwuNdSPZcQuBQG4UUznXwsZXzqJec5DQJtZy7rrF",
  "key38": "iMS7YYrZKZDvw6vNqaZ5aBYHVqsr9RjKZrdfzNiPi5J8fxPsYmNCBA7NswCKPJmoWYUGtmLd9aRTTN3DGT1RZYn",
  "key39": "3j29uvHMqobHDRBMBKtjHrUon3fG7zVHcpggBBKg4MGivV1neXi2WUeNMLaG9DFPAUAaRSgAM5xwhD9RDEyQDiCe",
  "key40": "JKCykiVV97aWvfbNoYZqUb1A3uFkG1LddtsyRoL797vyHprj2KsFQgd5TTLuMvK8wHasjiUWq9f6MtgQ3KLwYB8",
  "key41": "3Me3qPe4KQiFbFmJswBpj1LApr6ffRt1JEMKHme6KyFxZxKPDe2PLBr63VYic42RKfM6TSdn9bzG6zhUiGTgp9kG",
  "key42": "4kCs3KZdeYL8Sgxf12RVre2qL7iv6msq4DNJW9EeGHxgHvriWH64ywxccAbWrXe6SUYt8H8AuTXMiTS7AiDDdsGG",
  "key43": "55Pu287RHNUrH7UFZE9frCSJU7LCDgcH8pweNpL8xEmZ9CfM2xSFjU32ogszYNyCNh4qxEBwt8pVUxUnSxpqodPK"
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
