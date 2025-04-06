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
    "2iXC2i2ragyTFgX15WQ3axauk3JoKNYGGyPFw4GG4JPg9osygsvXSDMe4NYKrkwRCTVRHrNzsN6ZuVc3SuQh1vhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TMWvpm921RHFcDRtUG8q3Y5v67aM2TKgZTuuX2bWkJcimSgeC4Xzg4Jiv4pkCAgXUVh1CUmD9frkEhL7QPT4MWo",
  "key1": "4kxR97WuP7JuxEiQQ87YiFMZEm4VxeWiX7AgTk7zc29zwNEP4X3DUxPxZpL83GwnxcM6NqJRkT5Z9oHSzvpLadWB",
  "key2": "41qvZXDTPH9wd4R14cuamanj1rJcy5gjfvjyH69hF35yVkQwsBfNB9CFGBMBkR2uzqpaVm7vT1gMDt3E7GrGYPPB",
  "key3": "5331jhKPNz6yP6PfMEeWX5cY69nxXMeYX6kzt1ABHhS78pZMbEYnccNbCFSNU871H5i7AYmcsfGkxvLF1uLVLCaj",
  "key4": "41MJKSz1wNLa99988x8r6xfFKsGo97twjCQNBiM8HX8L2c9yg2zhQU7DWN1oEvKMxKmVTpCDRJ48Rf95d7o7FW79",
  "key5": "5gJLgHXjucE8oyJCjcckyBnbkFfdTody3ycEK68iTPzeVfFBzSHtmmAd4i8TZVTxHn9urVSaMKESpoKShqFbareN",
  "key6": "5Xjo2CtDDydYufXLXNJewEwpKh8uCAtep1YpKmRZB2dVknyWiDzB5RECJkEqC2WSSepcCmjLYyDu3sokC8DjukHY",
  "key7": "3pBA3Gr1Z7dsB2rquMywSew272RLBS4S24EFU64VTUkJ36Ke5ufaoe2nCZXp8oxQye3zCvXgHceCU6431yezZePn",
  "key8": "51Dgrds7zYajabzL93w8BAk3pwA1y7pr1MZMBXrjRLLPumXUibis31yat2DaP7peK6kJgSaPsfQKDnChLkPgnnNA",
  "key9": "5tMgaKZ43Yvm9xfZivh7pbZjgb797EMDHTmv2316zmhCuNDhpMyFrA3sY7zzNQz26cdvPDCuRV75V3DtN29gF6Hj",
  "key10": "4MTXY8SMrYW6n5BsPsJSZDwdQ5JEhnBMPBEG63yjBoSZXcab1vYvEpF47CDUpfEHWJhtofE6nLmf3nGipYqYJng",
  "key11": "SAXVpFo2qbqmTaUh6V6v1cDmsamqFMyX3CAsc775xomneEqu8qbKBqoZ5MsAt3rhfHjGQPrDsVXtz4RhPuwjSfp",
  "key12": "4fud1f6htE2P1CrivxeU7F8uQGSBVKW164MhCLGkySy2ErDSzV3hdT5qKD1QtMfu4gn69A265zga9BU5H2YFzgx",
  "key13": "3TM5Rjsp8AkYGcWR7G9mGsnAVVbaCmeKqeHxzu4PkAwKmXuD2YA92WXvs9i5erCqEVUYdGHLCG6FNDW88ZHrwcyn",
  "key14": "5dYoHjYTzFPL3ckHMmYvga5XJag83j2eUqF95YAZHrWnJocn1tE9e4SonsMWXcXaK1MFEQb1izCGmtSNG4H5ByZv",
  "key15": "5fCNKCU5JfUaWXmXprxUzFzkurUhcXrJXRekgEmUYddo8nxLPER8xw3vF5NTDDVgNY8gYZTWDaEqefxxhuQ6zyyv",
  "key16": "RYqm2RG5oRYUYZjaEwvo5vQRQvDiHsADNvUP27KEnY8CH68ReSG8gnNJPysYcxii424b5H7JD5oTTUwR8YodNKb",
  "key17": "X4sdGqUuG3kADvtkCCZxQLARr2bNDcCNijMDW9X486eRuaLHBMBBuscuyWZx1LF9ZDfxyrMapBWE54PBL6HxQvp",
  "key18": "45jiab9mk1TEK8LxahUXejytpbQdXTnUrpNJMTGvDHB8ofBDPc44egoitF62zNM336jHNxZTJGFfjGRTQE9CBHKF",
  "key19": "3d1ybB85crxGs43g38ggCgJzUGGLQzv6JFWgSYEcqV5gMRXjn5nuyK3FGrSb2oesh9NTvwa4cVT4DYK7heMYKjDS",
  "key20": "2AvKoRDtUGVzCf3BDL6AN1xkQZaMyofRdnPLGV8pHzDTCCWC8hay5hDbtxHHk7G38bpruEbpQTZshfwQmFbok1as",
  "key21": "5aRUcfDNd6TP4m2j9sfXspTrqc3cUanScTHsf46eium5CWLHQAmPaz2q94eTehfDjmDVqFB4VEHPvrvtYzLS1Qi5",
  "key22": "3E8i1ovpLJh8xYNtMSM6JutzB8BbXK4YY1nzAG3PmJgXvpAu3uEAsx39CUF4KBM3Q7wgWnzMSp7DjS49qHSu5dfj",
  "key23": "5U7c6CDyMvkreisFcBJS997VgNCPVtbXzhHk1fiEbkzWeiB2v37LFGg9iqcCVn6FyK1tMmYxhw8NPVv7WeUTRXSe",
  "key24": "4iHitDKSA8quutsGetV1eGkeSeMoWJ5HHo3tseEgv4UzNNDjAuqMvH3YXcE2oVBckwkUcTgK9FKrWqf8CZH96X9u",
  "key25": "koMgfdBgyZDuU4VhxHPubemrD1AWB9TCAFQUsyUVUYChTJGeUwvLiNUu6ASF1GrHbxi7XvkvXaBgdp7N87rtz4f",
  "key26": "5z3KKJanKijv9GBfUkEGfSJqJ5MkRvBFj7wUUU4oHuMTVTZhrASPBNnhnWu32mhwv6t7hHiU68qHKe9LwtQKaEty",
  "key27": "4zdHUZcp8w3ufNAVMX5HpU5z9gRiBYfpLfwQR9hBaqAt4TKiuvsHD2rBRKD4pmJMf5qyqAqJHi7o388Nct9V2G1h",
  "key28": "5eyKqmSKTUKAsUbbRUgi5srvyXgZ3W8oS2mWNeLkSjAbyLWsr5XnoeF5y87N78AqGqtdDxeDg7Ka4TiJYaELUVgF",
  "key29": "2cr8X1nmAZnkweBKh4XvbKQXXVio5o6evfj9qnzH9t2sEf85BdeyXm5o117YKATSzg5sQt1Yj1GG8MATVf8KnsLg",
  "key30": "4M2HMA5wjRGg4rVBf1Qg9RGvKU2fNQ78fu1TWKMfi6dSUHLdKA6E2ZM76Hq1cWP1wAfWQFddf7EmdVX2GeyiKZHU",
  "key31": "5zo6QryYBPMeUHw1tFhUpQyhJh6y5DRH33viWQNF2Gcnt4EFH33zgAhmjGHxfQHgpYRyZB3uyAGe2PTTwWdmKrZ9",
  "key32": "56aai45nLRYB8u6ogxFYSSR2Rypev5xrRzt6Fzoom2Jd4h6EZesWmgXCYTAgux9GYF168v8hvDmHY1pxtAYyfQvN",
  "key33": "3qVxDj9rVrbY8nnrirdFr5U5SS2k9wYZ87BJhfH5RiSfNKdydMWmdtkCa82j9LpXkhcJfbrmyVdmHfRQGPNSZmey",
  "key34": "5UaWmBRJpQSoMt87UeRZxejcnhRd2vMjuH44ZgWgnXkBeKdZ1hxPsrAaruzAd1U1vBnCHWR2FTv8phJmvJBXgAe6",
  "key35": "5i5KcftgodVzD1udZeqdChcZuDAVSDy9qUvDxkGe7GqVatDCJQEtpFinKSLdhCVQRKNdQxJi7wPgzKzqavDdeTZB",
  "key36": "3oFRqGXzxELU3AYM8hRrJEguQsectGH2wY5cYcZuFM4gtxACqZDdboC32VYSLhouzuu61PBytZ2hUzUjjqZUtnz1",
  "key37": "62gvsDABVfmeJTPK9wFJkiHuLUM4ad6cHGGwuBBv1JdLUoYLgMauS8inNq2MsC242rcgBEL7vnpw1KzoCH2ZDJaL",
  "key38": "nLx5zkyvLhpWF1zXi1c5jWNRGN6J4btWZq8Yt6B34Zobq2PoyUAki4SbJ9Y8qkqmrqBb9FEjHPi9ASXMbgBkN44",
  "key39": "4er71qjPdyE2esnqggTSYvUqaKhP84KVV7hAefizxVYgRPACRa91DdbqHYwGjA6JpDZrKYnpTjMToRNN7Se19oXm",
  "key40": "5h8eeS1eGq31veMJ772mCsPuFFaKmqouKRP8jTVEVTZTivui9erPM1dwchATvp7keeNxRRtmdBaxDZ3AZfyhacjb",
  "key41": "nssyYhviNCYmhsu5NdaidJkt6woeMwquZV8wuSC3HrX2SbfUdj7RFRM2CAsuXLxBTXJFKtZzNnfk4MQ7ZGA6Hn5",
  "key42": "5hgb5F1RGKTNELauf34cLiaQvHPgoY8CHErJCw8rzbaGnMc7ntxenLp1E2y7vwRUqbNK1BoYKNjqH8Cj3Kd1iRQb",
  "key43": "3yzo2jnY6AkefA2XfSYuCXTwyYKSaVdhG3yGEUQxozNXSERdN3hC8qVwPbHRZ5yamBLv9huAAFQLzLUY7dwEEj77",
  "key44": "rMRNJ4Ttt3n31bLMi6U2MXNU482rjMwjAPH4NRgpYzBsxiBTrVeH2xXV6KeaogBWmgSQZLg62QZEARtNimLEyMB",
  "key45": "8MssYgFGLgaTvFj2uwFnJuYz4jDzKorjJqB8YGpit24ZpJyU4Q9Wyz4CgV2bYpWN2YzdfGBTiMSQ3ppcXhPXNTp",
  "key46": "4ychLW768mG9QxtALoZowNperFkUJ8YoXyoLZv7tcsb1vYbeDFbBMGo1gJ1gA3A96SVty1UZdNueHYvpwURGX7bT",
  "key47": "4WB1DjagmNTUmVpaYy6vdmdqNnyewLxtjc593DT6fDtStctkT97Xu3joFpBjDcarwCqcYdQ6WxD8uuJPj7SNBbHF",
  "key48": "2G1RboxrJGKdFABDdqLwcby6KUx9ihZP7Jchp1kuKx28UcJitWCybcfJVcKYeBtw78fMCERKQgYuv9BJ9Me3yXMr",
  "key49": "5H56DXh3ZrGMjpsKJTrXtRGuDfQ7M4LoaDczfJLdp91zEcZL5C2jMwF2MmTYdmpad3YDE5LTp6E8d9Zr74MeP8ef"
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
