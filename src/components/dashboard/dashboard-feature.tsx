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
    "5A8CMpm6UEHdQoVYpc3Bu7pWGimoyXbg6XdPjjud5tMEjcywbRNe3baBAnSXzfWSpWK8hFstFYaVa2ezzqbRsxGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pkc1dVXZj4mdVnPj2SSKCykDrtqGHmfj42sN877UhQKfdMiSwMVuzpo8LwpP2EAJExwnzhU7c8e4PAJ35eWmEvz",
  "key1": "4juqND1fxma4L8qFxYR1yHV4LEN4cM5Cb6Jx9spi9Fkba2ZLJrhYyaRaZadbE6V1jMLfDLcvfm2JDFKrio2RQtge",
  "key2": "4DmV7YdJdVkEiL3mqYV7Hr8MpaSNkQY5Qrkdu8gFDa1YBFp2k7sDnRuQ9MMXurUk83rn6G7stAcjPZhdBYJn3i4d",
  "key3": "DR8TxMFtXvjBMoMinrBLToY7CoJHPM9RWxn63ZhwgxJ7m22GGLt85w9DVJdrZeU84t7Eb2F3fjEkdtBK7VBbuRC",
  "key4": "LpaRA22SLxXh2zShisLUWjeK9Rx42CFwTiFD2ZpiomB9vRCCvWUtkdCejWmL3T22Nni5zxJxDEj9Wk2jA4duDjF",
  "key5": "5s9oabpW6bHMAYfw5ThFGR8k9MfbfhRiQ2F9kkGW5PTgrwZRoUUBbfCso2SWqGdaXbbjR2Z8mqhVHCoG7JxoTNq",
  "key6": "5ScdwfCdVz6rMCDbH3ZYo8TrEcFswGo66QQfxjuJwqyv79TASCizbb2qaAXEavT8sH8Eddgm6Edb1yT1H5oeugRa",
  "key7": "3XMMQJ5GupLG1e7LXYUjLFrEgi46bW23cEZLv9SnEcgrb4rzy1LP4TLSPrRSGaAwHG7zZTMdr1pvpdTcWF6CoN4",
  "key8": "38jLjkPZYEuA4r6jz8YJnuD6nR5fGMvbeZuYt21D39RRiGt98ZFUYiZ2QnvNWNRuFwX3CUxSs14RCL221YXR3aUd",
  "key9": "pHmMtqRMCpFousLjVzsowby5xioDknahNEaFefeVpgoc472L4weDrH3zkyguJTu19wkVtFgi41zoe2x2k9rWT4t",
  "key10": "2BbGNvBKFcw64Y5mWxswT3yFSfvrSoN5rbpyMBreK37ZqVMfoUZEesVR79UwNYqALvBbxndfAcdh4Aw9tRbnRxvM",
  "key11": "4wkJNmRjz1mcbnuprW5MbT84uZ7CQ3w42gs1JsoGPbZE6iYRmg4ULnL5wxJNykVVmrPgCJmJCt8rqX1f1naFQsYE",
  "key12": "391Khwr1PYwUmggw7cK9LFWtwDQYw2WgwCpZsLS9KbDmfFDhzJDjEUiRAvJQDjBCtDy6EFq5Uf9A6HnRL3mCDUK9",
  "key13": "5TVQrxUP7AopjCgvzQgU4wYVmf8byrbyQo6W1XnsZ5mcxeHKDiNnHknMJrMQL92giGMtHaYYjaUoMaa4rWgez2Dc",
  "key14": "3E2q4RgsTZeWk8M26FFmiSZb8HjjzoLqdYsv5KDPQdzbfSzhPHcbkuwi6U8iVvAZDebLn43rcmYmBGsTAeGyz63G",
  "key15": "2ch4RkDCY3e6wonB7az125MoLWobUg6GAy9zsbxMHjW9CvBt8sNNFGw6nFxQ8BhAV2ehR38QKtBDPdj3xcQyUsY3",
  "key16": "2iEtzGr1vLf4JWGwyRsoTV2bK3zEbHebU2VZjRJM5N39XMt38Hbv8eUWhHG6zReRoDnPMpcaqDuRvHmeu9V6vwdc",
  "key17": "499W5nkyVtqBDBdDSRBWC8LyZp4Z15AyWQjSvk534TjExK9KrSPbAqsLY6ik2VJtmNcyoMRJEoEQ1a1PdA7Jwohm",
  "key18": "41Q8RvwRxGVv3X2A8w722666dRvfWxZWubi3aXJB6m4ey63KCKtwxarh5hNwaHXcE3bU2NzRKCndJp9dpb2dhT6U",
  "key19": "4hhAQ5fYTXqaDM67T43RU4L2b4Do1Wd2BeLaNsjMiZG2VALz1LZjHSjzGaUbdLSmF97V6HQQ5LdPGt26bbkka1uz",
  "key20": "UhRSXx4FQAzFsofeP3gxpsrTUid4PjTXtJzFjgctUv9QVkcpFrWriM3NQ63sv1Eev3pHs5ySqiWQZN7cH9mQ9vv",
  "key21": "24AUZYQY6Ur4HRHsctr2YGv3wmKdAv21U17Pseoikxh8aBKN8v4xJKQuk1nqVp3e1Ap1yJ2wZj4YDeoN2oqndqNY",
  "key22": "4Z4VRWJu5HqUn8JL1NBP8bFT5v58hdoRxkJACN4dy9rTjUnpw4rWResybSND213AZxqZXLvthRopYxagTuPh7ktz",
  "key23": "3rSUkrRGCAyqTmXDvfWUV3P8Ba543hnSjaDc3FjQxa2HY9kRAjWn3zkADLeTJtbw4Wkj6FX5NdKtnmZbQjzurwrt",
  "key24": "5JnTxryKgvvg2zq9XfctT3mxm4FKQzxgqeSSWh2UpHmJGrDwEccN6HXpXmLTyHXhNi3rkNmkfbkkSbFEuRJWypog",
  "key25": "5M3YaaoNu9EU6uA9xyDsYz291rMBXbjkXnw4LddrnjVYAUZMcWe4gdhPkbQXQXBcWF6S2cinWudNyquWN4uh4Q6d",
  "key26": "24t9VXt6iUqvy658z4HhPEd7eZ4JNhae5fjyuzGWyAU3dFeU41N9Mv36kQaXM13zPYQoDJp3sj1PYkGwm3ZvLTFs",
  "key27": "37SmYHpXN92nVuKAUWSrYVaurvbXM3eBzKkxEEBCMsWtbMx4ra9QbYSstqGKsDuGPQSqsJPRKuAqZSuqDfg7zLJk",
  "key28": "3YGZABmfnHJEPyLdj8kiHPJR14zEzfKrJ2CX6hkpq9hJCHh6cRCuBWhUwzzM6eicKx8jeU97DCnCEs55E8U8amov",
  "key29": "3Sn1pdAFRsqy5BdwSYnnKM2qdqBDatwje1yy5gi3tQJcJmVidGgCSaiwk7oafncCABkrJKKpeqiyBvzSFBLidcXC",
  "key30": "3QJhXFpc5CMQcvuf4QnTDGt6NVoXWnr3nap5Vd57GXVcgVCToSXyhRmi9JZkdBYLnSQEmbLvSuMVAbsRk5XsXbgs",
  "key31": "4xXTEVhWXw56Z4HNQRTggreu5M6KwFnotzxFJT48EsxG1Xcjs8uYFrJkxtGSSKgZCg2NTAUBRdimTbL6iF4WnUv1",
  "key32": "4xrfAgj2ZQDxGYiLnQsUYAmBfD5YoQcjVChF1mndz3gG9tJ2jCWEFaysnXYtmKA4KBwtD337hPceG97Y4ALo6F19",
  "key33": "2Mpj3tWFV2d941gbcZyJ9MtxpBZU8UDgrGkye3fgLxGRVt8yQZ8zjjHqZsvFBbSbTKZdp55k19nU37NK7XToDHaT",
  "key34": "4MkLRZqph9eNJLL6VjEzBAZyiJPRCAkYU6CyTNJj3JMLyVvvh9gLwZQaHPCmMNwDtPym9zPFyGhfTkMs4gyDAN6d"
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
