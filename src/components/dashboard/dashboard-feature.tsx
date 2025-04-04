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
    "ppWWNPyu2WZgTme34ACYp5jhm2GZwvN2eU7q8HDiG637u4LSGMhFjZcoEWKN8vmSsZS1GKsKo5beyBDyiseoxYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fdD2Yc5oir4YAwWSGzNpPyvhesE6hv9YDPorj5mwAPHQsNtgYRqqwdZpbsF5hxnYdCy3ACvUd9nDQrVFEHBEsP7",
  "key1": "vFYsNe7Gjwx5dLbmfB12Mm9fAW3RrRBPxFmnRx5GyZ2vfmvvwQY72PZgEhh1Qh7AqLf9k4LDQ2FmUd6sC4Bbykm",
  "key2": "3PucTHcsQpK2oUkKLEonNywApa2t7mevGRowkEB7b1n5YZCPva6oXMn2tKviatTWZ7Z42bwHCKFAFPNamjhNBPn1",
  "key3": "2zk55rKCeUBkYYibvuMgZPmqSPzkFXFoLm7HYVESahi6oYyTZyEWc7FNw1QFSKcLL5eQvWXgp57JHUBbJt2D5wUv",
  "key4": "33fQCFecf7mMyjbPaukQUsCZWhVo5nP3EXy4vjw2oQ8ckNChqPk5RZZRgMJK4L6xBXpRsRa8pVhX9N19bTg7aH15",
  "key5": "2Vf7XMP2BetoUNYacd3jcCwfoUikpq3ycFYD6zXihYw3zS466oS1ZsHpeumQHaTGLKjyz8rxo2pEALzmcL7GeiXR",
  "key6": "5we4CNy7NmdUaejJj3EJ6ToM2iSUqjdsUwcZFWHX45ohdw9EocYEUQBKtizYxwf6Ga8WJN9x5ksw6tWzJK37SVbo",
  "key7": "4vDNWTMgB5qAyXPJU2R6GD6LknHKtqgmDbFxD3c243JJioSvEb7YE5waLRjap6XWXoEtAXAtnUgzjbnPA3w5qUo2",
  "key8": "j5HanfgsmA438w2qX2Htwu76dYPQx1TPPqWx86VXsUBNMBLXwNi4pmwMB4hEHeYKoRcCy49UDtGjr8PKWDsoRGN",
  "key9": "2Yzr2fd84esveJ6JFjH3isDXmJJMhzeKVC8hrLWh3bPeCd3K6Y1CQ8KsKwEAxbBvJwbfvkAhSGHc6eVAVNz7UQs6",
  "key10": "5uTnvZUYcdH8GYYe6JzPVFauiJRKXAau4fWZzRrKkBf7KkDY94YhnNNwkCZQxbkXMMxbNbNircNDBqntopJpJRs7",
  "key11": "3vZojaPLztKCwna5cNUmEieSKou13HFYPdMgkxCLBe8kwng7uaBaLo33JWrJ2WCdhuTT44vHQyjriqhnt7veUbz7",
  "key12": "RyY9YFczdMXXynmHgyLwC3FTkJ8FXc85575WgYVj8rW2zzoEnktNERdNKJ9CvUy85D4noedghjt7qvMXEdsEBLF",
  "key13": "42XZhgZWkik5Te6e4hYV3YRsWmNiR8996BA6LVx9g1fckX6dheCDuNfSh8pRGZMQ5vYkZczk9gZcczzPKhYgUq9x",
  "key14": "4MeN376YtnmktdPqZ8S3oLWgmoJJ4qjDmRLGFMKT85TV8VwLRtcZK4T3puxRxoH6ZMLg5mRc5WSagVsFAwrzo3uD",
  "key15": "5f97fKyibE5kpipPjV6R8Tfqr23LuNdiy6g7btrdw5uSs9CcDsKs5YbAKuwnYXPxrepjzghtFharCYnaw15rSdpp",
  "key16": "5mGcdipTrq6ZeC5SsKdz53LMUEFUhPhr7AyDFSPjV46XxVwh8BSbPmdGuyFwLRSaeXfaC1sFLqgRVD7ZpAGr66g",
  "key17": "58ER2wc6trLg41gSmxMixxkYiV7p6Wc5Z56DDvpR9aMT1aQ3YUAsJz2NceEnQxNXWKJhkpp9XbSi9GPEoJ7j5Cre",
  "key18": "5JSXpjHyMoPEBFna2QJM7qDSC543XMejedYexiAyQ1ezZRgyZDkpysf1eCkrp63jVxCwjnah1cjaxC3fusxHMxmr",
  "key19": "m2DrTsLuneJnBFXETSAdBSx3jpuAzxop95G5ReJAkBJbLpF2keQtWW5JC6ffKZL496a2uN5QNdh8kvAbRhmK1aE",
  "key20": "BoDnj6czTxgzJmbEnB4Wj4yHAWzhhuVnEfz8RPkScJFCLjp6KufmWpYHPdrNNcrrqgMhFzb8cc1tYEQyHp32mRH",
  "key21": "5bDJnWP15Z9KsX8nR3BN1AJibHzsMTxZuPS5s2RM5WBu3FTY6gcgZXXRgLqfk7ddbCfQEfYqh2wP1jKDYHuTmAQY",
  "key22": "2GTEkBwFMfmfrvaCjxmwugBQdfwqkDmoC6rLRa1fsoipGh8R3GjTjyUD8qYh2dt7MB2FrkmDwT629w76t95eqT6R",
  "key23": "4y3v8xqaD6LytxxSDykTB4TmjA9nZv42gzLAoRVrQj59XTGqfBEwxA5AkKiz4MD9Coht6LYVBRHoWQRctku4azYp",
  "key24": "2qQcp8WD7zYC3BCaYAzFZcRYAXqfuLXksSn9ic9rbBLcVp6VjVr8psMQ4MHJqzy4gSYWyZRApxjUMCYEM6nDzAVD",
  "key25": "3oFhnFbLwds9v1pUdtgfjz7Dpu1ZN2ypcmngskiTBtoYovLkuLiP16X8D1P9SbQbPsRVdeiwYc9xade9ssCFWZ18",
  "key26": "3XLUv9xdvRCCPo3YPtsAs9Nc7rAq2ML1zEj318wQXmYtKw9os5wuH4kVqX8waGtujepdsYbUckP2hTowAEQx9xn8",
  "key27": "5L1iCGiSUvYxxGYh5rqvsdc7xyi6cmtBqry92PSTJDUYkbCayJuqV188HGtEJAwcAe3kHqd9G7CtrhQGHqwtsFSJ",
  "key28": "2MWCHgoYGqHBowXqaDxi7sw1equKETAJKD2gSYkWtsc4cVpjsvyaeazgSRT2dAA8i9yMnCVESmGYU8tQcjqnpyM",
  "key29": "419xBH9NzQ86rKifpWJRipFh7gmd4BJEkZjikfeAbjtt1MZeX1tEGgGSkgrEPwL7E2tGfwRVFJKV48f1NvqSgFJW",
  "key30": "5ndxDiJzWEVjBbPvRTdA3ZhaGexcXiHERALB8uYAKf8LKwYHBAA6T5oUiN9F57V1BcsbnZxmgGBAecxZE8J1hqG1",
  "key31": "5LMujFAwfZVao2uXpgpokYapH9SugVn9HDhUAbyJxx84XRk8JkJm1u5edJnKojKHiv5Y3QSuBZBsxna62Vpr4gZ6",
  "key32": "5gZwdKgov5o2PuTCqoToaSqvmkTnpehw7bAAecYybXNe7z2WLLMP213xApGveBF5tZtUdWAoeA2vnK3F9YchE5HX",
  "key33": "5k5YQR9E5raxZGqVhK2HGkkLVyTrvjm5uNqodt9uDa4EWDocDfewDCZSLgiZ9E9tj49zbpgPTZ6fmS1E3gsXLEoa",
  "key34": "3TAi3hqTWEFRx7N5FW2GjSoC6ZN9d3K6p8tBh3isxW9iXHRZ6iBdrKexoH1DZXAkfzUarwnU5tHL72pv6ZaZKebS",
  "key35": "3qDYCMT4iAgwXQH4wugEMXtAmCoNvmGSvaPoQYVxrF5pZvYvQFJdMYwWGchwqKWE6mgiWNFkpQ27D3mACNrXLDAC",
  "key36": "AXAU6LjXVGEmeHQvgPxznT3CnGzgeUwWV7ABxD6GGAYDDV2oM2VUdFEDWtnBe3D4gD4rtW3quPuoHCMLw4RTrFH",
  "key37": "48EmMyrHKneWP8LcUnuFeNrhcLJkUmQoZwWjKPcp8t78fiEpUMAj7aZEA5Ve3Qz7hLwq5Z5ZrZru3e2vN8YXUwmJ",
  "key38": "2MQztR5R8gPrpFxjYFfzGaLUZ28pLjenVC2SCjZvwy41Y3HLceuPjXXemcTZdcXJbpqZzJaA6TV4vBWqJp6zeocT",
  "key39": "2DxNfK6po7Ytk8RzPw1WsP9oQvk1NwhTqc2raNV4LDA82d9wHx7rigPNY2tQxurGonzM13JdHFjW2E49Dv1tyFEn",
  "key40": "3LJzVoQgHEeXfRz6XUsBFcf9dnuhW2NXo6S6PmWaaRpqT3ZNDz9BK3N5Ka2rtB8BvFTgvWmWfiZyqEYUstdivuPB",
  "key41": "4HyehgdhBF8rsBiAqhYvkRdTGT1aKvhGvickRhHGejcSuNw8LaUKLPBt4DP7qTFSRnMAdUoWGrz5dS1Kx5ZRscDA",
  "key42": "2qxNARqWHapC9yaeQapznaQuufLthHuyJhWCgA8GpihAGcMwyn8py77eREuGVbCfdTWx5kj1XpB5MpM24TXPBfDT",
  "key43": "zN7WWNdBT7KP7YFL3tscmRaT7mpMx6BEsBrm7FoCHtF65kby9ADHBpsUKo31mQPKJAoUpZaH5NzgLNu5kxp4vdp"
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
