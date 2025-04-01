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
    "5LPq3qrVCjHHmbszJFWDtvSjZsUPAe6eLr5xSQjcGefztx1z1QKcXBQ18FC6CgGjvVeK1rwVw5ETr46iAPF27WXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j5HAco6EQnwbeLUWJNsxNyZUYsLRNpTZYbwgfPrL1xygnULHahTZA4c4bUDtcnx1Aep5nqQ8y7SkKeZf8Be7fxM",
  "key1": "4GdqQUmJqjU79bFLtVUJf1MQ8TV7us2NEjzntCFRX2C4pynkXqwP8D88FRWsAnD6x5YDMudCwtnJW2iAqPdnkv57",
  "key2": "2UTn8pwWVAo9A4xEpKRzdJEsuWxHWWeEsTz4ht8cAi7pS1FhWnJ5cFav7fjtrdKRqeUB8gNLQ36uieTY9FQTcc7W",
  "key3": "FhqaaDq5ApWj4CCvqv9dGDGhqndfj5LnUQQD2Ec5JVGpSQLuXS6pWsHtkPefT7bnPQMstyRwYZzo9LmYtomNuF5",
  "key4": "3P2M38yzixkaUF47u6mGBoFZ4fsvtpwPXgWsj8ZUyLPxUVLUmjnZQvk7t8NxU5n8jAKkb3SSzFcuJyAheq541WgA",
  "key5": "31KLf523A5wcqZhh9nCZpvmNvvcWk3qLYAcPQvfrYVSJRjRkWaaPJPvCRTgHyVqoMzdL9W8WWB51qTuAEb2sHe34",
  "key6": "2m3WuMvhc94S2Yu9UCD3JnAUaZJwP8BVpRMdMbYyCBsee9mSfs8ZPJRKWFC9gov1ySXEavgfvKpP9ioNYsf8PPzQ",
  "key7": "4xkkhtWg7G8H2uS33WjMoA7rDG6reYPZtvyYbD2CDQU4MSeW7BhPyDbrEoP1RZY3a9uQepj1MFrLWnmKXZkDy9kE",
  "key8": "5pupTpq4bVv3ZqaXRhfsbz44JLuf7eGKDifcaUm9e3fnEzX53uiupZCzGgQCzqCyXhMf5TKTafmF2VxYaYpXK4aB",
  "key9": "2XeNaXYakZZxa3V2J7wX1N6YuCAwDtjM958JHUAsZN92osihXYvUq5vkE5SAe7bcJNygCj49Kkvk3kAemBF7WwxC",
  "key10": "cVLwDTkCMAysRMr6zGXxQ2HsW4cNj4zmZjxKnrRdAdCgXLpBPzqJ4CiHF8FmkWWEEuSqp9upQLuEMzecrWZtS1r",
  "key11": "4oZA1wPWDZeAjdnz9yhWfTzxP9F5EX9HrrEZt4V4hSs5hXZuiKc8HBqFKtCwPfpiiSbHsCPwcc1qXRpEKoyf3As5",
  "key12": "2nf38hBoH6YHY7L92mFMGvwe8J1Y3pCwi77UJswa1kVDQsjZpe1KzzLy8bRZzGKcZQJxBWM22y237zfwSh5QPprP",
  "key13": "5ykrbzCz7XcQ1vfoK3M7hWX8uboP9Fi9QcGZpUyFKPhFnWhAstRYVwVn5Ea458dzn5Xn1TMJWtU6cuAL2PfWJzV9",
  "key14": "265AfScwRnhCQ2dShpwvkviyFeDQW4gNSoKEeAHtTsBG4XGiTRqXWbLKeYgNBsvTH4QLy5Kqf97LSEcRG8ihqCus",
  "key15": "5HrRJpDHP1tHNmqnuzdKjck3WLSyBgJMdWZRcvCrohVtAqPTJvbumKEUavAKG4psewXHB2Q1R3Xwd55xHp4sjfL6",
  "key16": "3F6pCJTMW6CqBq2ss5zXSKHpt643pD3QHjpbgcWtoJd1B4DwNNab4ZsfXdH2x9oAmh37entmjPt1cUwchm1u11bZ",
  "key17": "23UkwJwtCf3Cxry2MmPT6hW7miSpbmmB4VrELBqppv7BktJQXu6EKbhouNLLBxzRz13bd4Tqh65v4qxAtkio2Dq2",
  "key18": "2zxmsnNUX1WGhrBJou3pBMAeayCHojFeSNSpQGAptoTFcsppRQg7xUdSSUbByuTPTS5t6Gc9tS2ShnLxaRECqxds",
  "key19": "3UV5TYvchLfJYu6NevSbQ8gChV6DpNfktQEoJSGWtstCaBFX5BtuCsCGkjFkekwSDxxHh3oJ2DBSejiczaQrqHky",
  "key20": "3DWzw7DAC1AFyCSoo2B3zXwhf1nJ98Tcp94sfjr6AsBKDZa2pm5jRGpNQS7xCNcUqnbVt6PuTj4tpKRKZKnh1uec",
  "key21": "3B4hdhygypGUTbRsNfVm4WxHnHX1bw4sJbnvywsEHN2h2q5PVQSYwkbpp8LJxoLjorVYTpnsro79VYjdgnX6w8cD",
  "key22": "3nQGyndLjz7VKXaHgx4ndSRrGZByjGc1ag4SdrNgq5GnqhrRpMyNgGqDmHPxbERkViBbTcB1p2pDVZ1PFUNgkMwx",
  "key23": "vPEGdTERk7atHNLHYC5g8nLuGUBioWWhoCfPUhFvgLKug4T76Xv7YQK56zWNkqDMZvuGNR5wfMzhk3WeLWBV2vG",
  "key24": "52a8WZQfyEj9kNE57nSZENrBAwBFKcWXkq9xAupoSkrHVmTBCHfPJFQGCeHsLFZ23U8yo75Fhnc4TA9zQ7EJtoLX",
  "key25": "2eLDnmSLNPxLR7Qb8sVPpHhPDwfVFMfwZkZ4Fy2bwZkQcD3W98XVu31ietU6ZeEDwi6X6LnuCPPQjPpL4P1Tifmo",
  "key26": "4KfSWr7BZyBY7XF3tGX6GKuy2CopfwrcccghSdzhaXNR16NqVcscWQMykE9xoATKje9YzPN9EKpP4Des6iYi17dM",
  "key27": "3VzxoLoBmRLAHcLQbpPTEii4oKMjeRkUXJFvKh4d9B9PwM1QmmdmwiCL7btjziVTCRdjfAeUYAnsRpFboRBqKdBm",
  "key28": "67WNjqKAUcL2NqM1LvYKnMfWwabksbeMjeMgN1y2SSTYnS4kJXpAfSqZWVkty4kedFjQpaHzvwCUYTJTjB4pPnM5",
  "key29": "3UsuuGaUJeSxMf5ZGL2Z9ZfJxDaYxFzFSERuEdBu98fkN8iFHb49fj5ursyemsFzG98YPi8q3WvHN618zLHQtKxF",
  "key30": "62dz54d8JhHzqAdQjUkjbPKgvTK4hZCSFvGaUNqjUbuTCH8jByfVUdhqbbxZF9t1Cp7mNNigEXicCJQRtPXKKTkT",
  "key31": "2we4WcoCX6WYohhxDinDkjzmw9p2zLfDzFHntUMQPd94j7DRkUMWeQBMSDrLYK9T2VfRaQtaabgVJehmNoN7Ab1Q",
  "key32": "3Nk14XFX5QJtXnTRrgmm4eXcA4Y3gMVerDX3qjzJS2YjHS9RSaAoRdnuoNNNiGznHc3r2FTSvtYriUap1845asBW",
  "key33": "2or4qYG1UK2CQUujCCxKAiXhucujtW9FvPXdvJpSML2qZVaajGjYwCnZdWLvRZWDaPUpktKiZvJXRz5xkzVVjydP",
  "key34": "3NQr5hWxibFYJFXQ1qbJfd8esFfaTrzLyfXbbLpNMxji4okY7ey3B7rLmeD9Z9QXJUfrV8CfBjnneDUyAkxDXUpc",
  "key35": "4YDp6UveFfCScU4P2wqaRCKg7DhwnMpzTNRhCpawCogWfMtivjk973VNjEBYKuP8PorQDaycmaAVe8dm9m7cQ1w3",
  "key36": "4bsC3Xc59FRCYXmN73dd4PKahfEwt9dptfozCFx8yfDWyKX3yxoDYbmKM7jWz3wZU8PwAPPpQRH86Y3msUgGUQdc",
  "key37": "NbFNm1eMkKo5H28rq4TzK98KrESm82XmaqN76CrSt1DTm2psADpNry1dec4ULVc2SWtcgJJHfZGxPinmqTcMkAo",
  "key38": "2wAmmZ6JaubAYpKZeXKLKtNUGnBaECmeF7NxdnBa82qC7pkPucjUencn3JMV1sr4SUqzHQipyo7jBy59QZ4dZS7F",
  "key39": "2Zar8VWEitkHBY6U24nvKGFKgb1NSZ1aFxfBRGb32RXn6sEGFwswb7VKimg4M32FJ2cn6T4w18q8fFa5RVQVE2Fz",
  "key40": "5HjA9QYzyfJDWrET5aVWSEtcPSLLRMALgxrEVfFntS9FpEPwgEAZErpYMmTdNAquZnfd4MzcSj4zRW7Cp1JU3R6m",
  "key41": "5xCPUH44zPkSAqnoYi3iTB93aBzmgrnpjxWoixdsUnWVZAsn7mtefhNUvefJ7DCG5KH1FTNgGdaYZpeBo4GDNjPb",
  "key42": "3xGTWtaLukw84So8Gnahz9S6kPAifQnu8zcs9HVt6v1MtDZKDKFrAKGxtUfacYpmNaSfTFaeVCzH33aoy2wS5Sgm",
  "key43": "8CpMM2CJhKWwQJjbCAWv7WTiXMxv9zJ87ZQQNtmPirKDyBdJrzym9vBkMivhAvRuvQ3QkZ547NRMeEiDwZvEqg7",
  "key44": "3inEWfQQD9BTXmUxvMFXCD6EPeB4L8wxJqGymDHvrt4dnctRVrwr6BpABwgYnKntA6QzuhUZoeMnTwhc6jcKB2u1",
  "key45": "5yEzJxFS7bmupymAmjAUk4Ps7TCzc9pGNiqR2CbFVey8znyv82co8cMBWuuNpB3DrY8PYkwZqHsyDVHySGXyWztX",
  "key46": "7pUiGVnAiLBdz8N5fjUQrHUF1VFAWTkJn1ZrdmmUsofgzX12NXzxmfihtMHzxkzTQH77ZrS98JMmUXnCLYMTWGH",
  "key47": "3u5wWCijBeRKr2yod5nmr5E7xWhydg1VNnw2Q5dZu5dxNx8Qfui8iX36b7dogtfei83vrwaX8T4CZEFm5Gkowjo4"
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
