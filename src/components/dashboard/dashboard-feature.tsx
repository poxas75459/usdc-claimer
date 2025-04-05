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
    "29zGUtExYzVsXdSFgZs1VZWgeyfSsugXVwNLJrt3pUfHNJk3aqHphX8NwALYAGbxfvafFou6DsAmuZCzFqTbRdQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZHrNyohFHySJBRgVQKy6z3cBdmW5zwvss7DuJFXPyfK5szVgMKKEjVmN7tU6V2Ack7t7NLXbYWs5xDVS2seYZrP",
  "key1": "3NBCVg37ePFDBbRnyWcdPWnYaS8ETLALS29tekmiYXhmXqg1Fgv7rUdxKRL4GLwRi4eRWQnnk1RK31yNXP9U81Nh",
  "key2": "23LkKKCU2dAcgttzHigrtzT2ZQREzsH2qbrEzdpqK6PVjuJsJKyJTr4RaQdeyRGMpbtt3vBxLQdt9jh7XxXdwTgS",
  "key3": "3KVjjbmdLoLhR1BT3gc2Rwpe31b1kwSRd5nytrhPQxXf6QtH2fcRggn4H4Q6G1eNL2BxL76V2t25Wn8kXMPomMnY",
  "key4": "5Tt3aoULiE1qfXVeds4FM9cSfC8vUTmj3L1YBjMrznYRA1hHhHBeNRzyUMSoD1NubcWt5oF96CHTnop2LDjw2tYW",
  "key5": "5XY2BjCFuMriRa9n2Y8Zptg5c9Vra6nhgHFTBVNRf4recH8LqfSPSDVeFgJjBFtDHevx3dTPkxk7reEz9SH9MuiX",
  "key6": "3yY3fPrkqp3hvavNaFtmqVK4vt8zQDkfk786q82WkZtVZbKLFGfLqYpR59CLUAbPKX76arUVaU6AAdzjkvKdLntT",
  "key7": "3pGV6KBm1FxwGjAKDQaiTYAYE292av1yUjEbAJ9Yioo7Xf8E7JBYbuvz25Bbdsn12FuAaeLFaBPorZWDnG5f1XHD",
  "key8": "4xkW9vkqnFz2NbEL9WLSkBkGVMXnkVuZXXQWdnE9cUM5wBe8u2MAgFdx1JGYwH8fkWX1xfFqGBw2urqU3QTRdmFX",
  "key9": "3WzfL9p931Hh9zzsY5wUZ9zegix8z2dWL3g41RNKN164MnBp443XttgHpsgwmZdsgg6L1FcvdccdCb9DgWjefnd2",
  "key10": "EkeJCnpw2n5CuuhNfrgu7DjF3g16BfTyrZLLzL3pjLFnMuuVJL38zmQe4f1stjZ18VdYBVtRycuXUGeWNDN6YBz",
  "key11": "5Ler2eik2veznLjVQpa3TP4abtGRPYCy4rzrT5RtpcnwjL5eA2PvYXKZQkBjnL2xpJKDsvA1crPZ6fctpjXuRfAz",
  "key12": "3b3PVcpuXLzXF6hcYBK9hN8VcrfPtNmC7jiJLPyfVv6p4r3ghv15mmc4UjqVKWZHGCy9tTH5UFvrob4aiZuw2Jep",
  "key13": "GBHFNQ4YHAXyGecnersM6By6Bso6MKdiiny6QKDbp5CUAezL8ebes8TigXhYdsmo9NPsZC1Mf4gwkpDG96ycqHg",
  "key14": "geWRkgf4pARdJoo1GUfUrnYvYJk3C9BavXXHniwnintybfceEXzYzHkXeGvndNLuuvCcXhwgGFTaE6yULizVLxV",
  "key15": "pMFo72CuhWMFwjFMUwQsfQ3R2pMC1cMg1QBsKnT3nWgn3iAVZtzVtMds3JhtoGkwMmderpuLmivo4NS6oPvZsTU",
  "key16": "44i6hcvrAdkrE5CmyP25BrJTieSkdsgykzDd1qtgXV4cYTVUk2cFxnWeWT5QaJgScUSN7EgyB96ezd1wHXLFF18a",
  "key17": "2uyRmejWg5hUWod78RMnfqJA2Ji6SVSMyQu9Tav9gDTVo7mxKm3HZMRnrrQuucKcd7EFFFhZBKfvDsox1EpPmmzX",
  "key18": "2wgixE4kiRgu7frr3npoqaY4bXdCpuRa8YenLBiV14ycq9QMcfM7vwZtJPiHQgERiDHBdjLT8HGn76k52xuyu4hB",
  "key19": "54skEKeJBNiAakB2ok54KgKv19FW3dwyr9jUTKDUdJgqApTvPSEP1GPfNZjBcx7ZfowyggHQVduuHz2teVbvEXfa",
  "key20": "57gAFVkedExjX4QwRXc6HesmcCbzkbTeQyqyXZJ4GdPdNwo5tmrsx8SzmrSwADD4TbiQWtJgfKiME2A1XQfVEAJr",
  "key21": "UghWyBaiqAsnPA6x2Y7A1FL8fPqJm1vvyv3nbc7WECm9xTdsNhxNzYcpmmXDiJDEfkJaVQ1jkXeRYXXpwrSbG3x",
  "key22": "4a2MYfyBMpHJRPboiuShLmipHA6uesizKsxwby3dGN1JDRRaADWv3ucBRastngzioyNXKF4Qw6nDu59VyfahatMq",
  "key23": "8bkwn4kf1G8Z9cNPLfX7c6gasBe47wjCB5RTT9DL7jLh8sgHivDrgNHvNd8roMYDLSM9XwNUGkHoTcdRfgcYgUH",
  "key24": "3stYsJFV5z35AWDANZdoRWEZ4fFrLKw7z5M1DgJGpALE24txHXF5tzukZGdiFsunRN2m2ioptCaJekVwGGS3tJME",
  "key25": "3UPL8V7nAkfkvJYaTLyeAdnCxsm1rt29RexuY8rHPtsKN9u7ovYJVcnortW8pvKW2FXpaDKNsiQZAmZLULgcrYqA",
  "key26": "3odLe7mNxKrywuTesemtgRfcQhBxBrfKp6uYrHfFbXspSqjkUyVLGVf35bg9a6hQpXrtmjEaYhFSuLBmmbYACYqT",
  "key27": "2Q6WSuvgyEg6disWL4iVqSVr17rReQUt1JwYajZ64KfV6PSY5fR9eCwZSy8HZ1hAG5pcWd1WG2Hd2oxaykGD62E2",
  "key28": "3VpmaSEe2sK1x3VWTwjdCz9SZ7MM6pJByFTUogDJbGBr4xg6TgAqRirs8hR5SY6jYogxp3Tz7pZjFivWL2w3XBs4",
  "key29": "5qPJ22zzrHdqqq6KKDxCRHtv7J1fJp3B8EKYuhQEpqTiPuHCkUPGxZh12adoYRnTkfkFmmb3bemE8h9zDiZ6T9tz",
  "key30": "3CeivMxrUHyqTnQX2dS9q5CDS8opZ6ZuVXKhXb3gium9wJKS1PtM7GSn6eMCJJD3PYuAVo5USkrCYjf5rcSs6yEg",
  "key31": "4i4xRfNeesh3KiwnPRLK8zfeCYgBSyQuN8VFqaMedoHVcPDFRpTddNz83Z4WDDTPunfjRpPaYHKaEYq1u6nhK5sd",
  "key32": "5drDGDgQMEX6d9Gugady8us28t4q7MbwLv53W4s2Z5fFYnBnhJVBDra61wGu17K4XhAhUKY6RnnsBZy6vs3o2vy5",
  "key33": "285hXunPMg5E8TJKKAgsRTos5u6iC5pQchnd3KQ5VJircq3oNrwRLaznYxx1PJiVS4QzhHiH1L7pGcfZNJ4m42vR",
  "key34": "5Re3Yccey9FsHcPvGRrz42HyE5AfrQq6yGjr4KZy1wRbnB8HgHe9WMN5gZvPvVyy61Zey7Gd8f5Swc7iBzCKQ2yp",
  "key35": "2hYTazakxXpwHfGxeMYBisANviywzhfcgwTbuQG5Z8fkAw28sm55k1YsdbdGzR7XiT34ceXTWWqQHRCAz6sAPPfg",
  "key36": "5EFsJDStxEfPwodG49zwEfvbnqS4L6V6rXZ3im3dq1bBB4xf27TjX4XCNjGL3E1qbJQSCM7QJmdmHNtBGrgZZj6Y",
  "key37": "cRuevrwz9QngrGBB7mCgzBS2ay5hk7XPxM2uYF4oMZLfSPXKqqfwBWcufWzmqYicc8uipkUMX67Xbuf3fQtGkXe",
  "key38": "5j5AsQTq6eDx9Twif7nNcQnJyvqcqz5nRXHNidWQycGg7kfzdb3HPRqt9K42q3QNkU5Nq33MHQs8Ljcz5NA2hVuU",
  "key39": "2uw6qZMdUyU7cedma7oT6kQH7wraG9DnQsnHz57DfisujhF9UhAxvk5H6W7YiQzk7asvTSpxXtpkhJHjNv2TteiL",
  "key40": "42WLbr9wsw3FA5iibk2t1uakkn8DGyD7tf3wgqPrWdAFxAPxPkxuKn82qVGc5XhcxSMV59nijHfLzWxus1CL8Uyp",
  "key41": "DF9ysz4f9GyidhzoygShJAhQ7k8dMUgCXec5qeXXnNYVXzNf6tKWFq2mR7J8Uyk2JoNhtyT9Ab8UZufCCpLtBn3",
  "key42": "5S3LrMZNHCXXZZLRYeRioFZRS3khS9ZHHGmCDC6buyZcKWw3cXxXnULwEt7L5VBnJisz9CUNpnHSJUuzHU7GwU5P",
  "key43": "59pqZGJCebhaJSdvdPp8a3Q2Jomc592crv2neeiMHngsG9n271Yx1LBma2Z6tDokxPvwtzzBSRv6sk7zpQSPj6RA",
  "key44": "5CGiVtANBAYoa8y9wCBKF18TGfKJQcJUsJLizHg7UJoontfyLDK6he988N3ite21FtzooMedJkrj4hx3Wwe9fmJZ",
  "key45": "5U75FutxLWHJCzavBV61ag7kTJT1MsekcZbxV7b67KbUiFqmcuXVojX8b2n4CYg85FKaxnqMBdhTjtzHbDWrP8B7",
  "key46": "5Azm8K78SMFR4aJqDcttjgq9Bh7YZab1n5p4Xz1VBP9vF4gkzVzAFp7CiDKHK4uD1sCq713unzTs5CAERwijhXsL"
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
