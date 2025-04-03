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
    "2qFUhugALj8UXT2DSYTEJeduqcg1nQ4yyqKrUDNGhY7oqVt1E5f4JL2Rb8RjxLtXvtZSXBf9SfFuAQE4pSiv62rC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g6ERwoSYsWD9WS8VjQgmAradAVT6owCkrRLKVqVAoceXZRDZSJb13QADBMR6ehykh4934SqfHrNunC8Rd69Z7Bz",
  "key1": "5jg8aucmxr4oc9oVTSRfsRVpq3yscfyGEpXag4tNz3SAL4ukBGoVUVnwnjmUooEvv2c81jBX8wsbxuRtNPLZ9ZqB",
  "key2": "52NA3v5Qumy1UewmK997QyZrBq2Hb5sdKBkrtUkCZgDxqgFtqkdPsVZfkD1p2dHvGS3jzhgD4ZphqoZiUJTQuSzJ",
  "key3": "7qGTXDmahvhQpbCaK4LaQxHdJzeqRSQtkRJwWzyRAbjdDHkfmVcunfq3VxSHJqQD1NjjhSk5j2WZiH9WiGnBrKy",
  "key4": "3QoSYSV3GVsj75zaWYwgDLQ6hNPw2zEsTgMbuhkz1YkJqKBbLxXsYtsCHaQGWLESThiD2bBo8kXsqWChgU7Tg9Qp",
  "key5": "3onYU8ZgbiBohgMAvc7PXkLKwzxZCjVDkiKQ1Z49UJ21znhjDuB9KT5QAxLZDSUG1ZpuGsZaH6bWTNGraMeuxqs5",
  "key6": "dGE2sgwVZysv6Z9TBML26bkNTrh3eKznF56TaZjcy8FGXjrv7jQTj456YnenFvM7LUxwn9DAL3E7o3gqdztgpkg",
  "key7": "2jiYRqfU35DQgEnZSV4gsWkwkNLRdy7ydBM54VWX6pKF899QznMRYBcno8PcD7MZZijYonSYuMNXC3p5J3e2iBxE",
  "key8": "VBkLRq3rBL8U7EFkHff9Z2zRosoPJVReQ5DQCR96avycgAHfVp3EdkFFqA2cqSCp3LWGT7AhE7afYU5uogPXQkc",
  "key9": "3icuds2WspqH4rT3b4oPtfEWYSTERZorB8pv2GrH85EubykGoKQNWZN37WpQsSWJNo2ghEXrUzM2ttAFEPvcZkNz",
  "key10": "5T27CpdUecADBpZrfxqSEonhoKSG9dnDeTWRCt289tt2US5uV49dgNeGCWzWWgNfRJ2m9y3bjMCnTokkZNXLk96w",
  "key11": "5H9kGyuN58a161pi8wtFnKik6qhdQtsLCMAhZirJdAFm21W3nfNDxKiYwKkcBvUs4Kx5hYdq5asEKwLxS33T6K92",
  "key12": "jQRwpu83vQUsCaaZd8kYH2WQvuWFMbYSJQUTvdcuXyGz88KWhBteRLjZFF4ARvDqCpw6awn1WqEvQRPZ3qAJSCR",
  "key13": "5xnByK1L3k5hdkeJsWDYTpzt9hYLPHVeRheG1CdWhkD8R4p3uW3aTvquRG18oPsrZCZwrWoUbbqCkW597tzmx92x",
  "key14": "3bhHSPsKyHATvHSUi4idgQu1ayRxCxAWxjSE8UonTWHhjGiEqDwgJHshRSyMS4aSvbvU7LEQvAoqd5WwghjkRDGk",
  "key15": "5B4YXkai7hqryjAD2nvzRYZherMqyXXd8T3TtUvbzNb8qWMxBzpEANnnkKVrTVViWkTkkv1KxFovayeLaXmGek9A",
  "key16": "5wv2mjWNkCC2vT1QK8KTcDTNXSdLv4VgRwjNg8X7WbCz9QCE7KwCP7YXxphNLeKRmEetcAeLDvzFmJhYT9woeF8F",
  "key17": "5RjKwo3XxmCQsAWvRoXqHM7RyjHCnxQ1Fbnf1XF8MUKvcyV3Qw8NtK4c6ALzZG1L3qD9SjYb35sWas9uUaPaT2FE",
  "key18": "3dT2cXWS16WbsGn4mPLp2CXMXhN3iBewzZspB6ap6oN75tvUHRFW1J9nVhSuZjjfnez5hjhjYE1WiMr1UYvz9gQL",
  "key19": "5E2hBcsVCpPUPtmVvTNmET9e3zRAA8Thiq14mDK93zrwjMWCxX5aQgRaCamh7sXYPS7m5ZWP2Dwm54of8p1E8Mbk",
  "key20": "3cLJb2pyZy8Lf4aqEvYZ43xALkwrPbL2zEMLKkNBZcFrmF9d2S616o5KHWWu6MbQpb3Ww57VcchTxVsfnj2Te4Wd",
  "key21": "iNyPcvD3Q8oCSqFU4eot4ZYbpoEanBcpiLECfbLXg1R2yH5XHKMi7mnDq96JosJrNtKYnEvn76Y11XYHuDTV1Ur",
  "key22": "2vZ8aH6w91MhoFdRQgvJ1h3w98t292bvuYeFCrKrD7CbhnpycMh7fY3i1YMjgzKC1xRjwCbWpuitgeYupCqYAHDo",
  "key23": "3y8jiGrfbtGryGy7Ei4URmCKEnTCcSd5qepGTKubakr9q1qLNGJPzA8mRWXLQ3kmtSHiJscSf4H7SUTxSJ76zTyS",
  "key24": "5iMJDRKymmxn21rXRrWwvRSruJphbnwGFvVHJmzoGx6UwQyrhgJyWvMF59jSRQHrRURdtia5S5bLnzbMYS4Lku8f",
  "key25": "26jTxibgT6G6LPdAw2BWWWME2aWRDurizGCN2y9U67d1tVVG3HXrevD5A8399B34SuN3d9Z5vB7oYpwh8yhLrKis",
  "key26": "31GfXoL3QDxUR7HBKMuvA28SinkaJmiWoco2SGW5vNLQP8zfr4YyfhuFxf2xcSBfBjstZ6LyMT9oDVoC4RpHqugV",
  "key27": "UFRf37jBc7v3CRjTkAC7NCYeZAyoNKAArTtXF5sszxJzXQkVzZ8uVMuKC599XCAb4gcd199i6r4sBgVpbXggQax",
  "key28": "4XbnuewweTaV9WizC6tn7wtJuMfEiHKdErC8CiGH5uMzTgtDXae39f3Wd8RExqW8q8VEH7yHokD3NphTZifR8jwj",
  "key29": "4nWzNBpaAsaoiaECpuZxt33y3ccsMggWAjEZexuiDTKU1VPbvx6uAwEbFtkvLQzff4zqKV4VfpMhJLJkGEQMZHnc",
  "key30": "3sN5CFQEHAr4ePPrwaz4246y7ZjbVSJAwRbzPX9u5u4juETBfXGMzqaL8DBpzqjComvE3m9xEAk2WnNgupiQoMsM",
  "key31": "4x4tLQEV5nUvZvWv8aj3mzYnmmb1exsfY7MJ6aV4UZazsgrof9mDm5DEePCrbxMFcz75EFb4eGoYcjC78KKer71",
  "key32": "2T3uV1iCU1vRKeER5gLhPaV3ycEUgNFWzwXQNSWFWua3fH4FYugWvWQDqErSouKmBN5b6UC58bVy9TDxT1qjLSRW",
  "key33": "3pk9LDg57pcHE6Vjpvb8ifVof4qeQiv4SpWKe32YNmVS7sKTXwiq9gAJ5pLeusM11XpqzCgtbDm8bMWoL24kjTAv",
  "key34": "XQMwtU5DRFx9gwarKhb22BrcFqZKwtzymNu7tgDwtoxfPiAYchqXqmBmBpfqrJB5ARobDCyfyqsktJ4eDtEKcFB",
  "key35": "3MC3Q7CuVnfMc71S2CPVUsD194eMd7BH6awagTqA8oaHadBLFNPuT3bfpthyz4sS4E9opX72jWjEzwgCdWbUSUw5",
  "key36": "64k2rVm461Sx1fSNUa9bRAjNdWHBK4VD9xbwH8vXUB4ni8TtVWZjJpUdHhDdvfu6vCK7HQNHxWGzzpBb9WTqoRrc",
  "key37": "2BNkd1vP2LLQjwgrbUZhHa4yJaZvFCYHLf8CtakfHVEMShLyGxdHgoz5QhhdxRQk823L38gWbRVwYbxu3aATxNDC",
  "key38": "3De36YVYxcMdzu2y8WWpbHTqgPcWVP8u6PG2oird4X7Sz63tjCkVKAcjjZqvW2a9kShcf6hVJmXVi48CGPcMiwgV",
  "key39": "4fxT9HGH1rros1Y1wZ4dCEYoL3uyPVHUPduhv2N4d3rhTuSP8bUWzGdPyGzd8guj9aLZEwN7XGMRH1bRDgELYp2Q",
  "key40": "HSAp3dba9xkfpKNDP17cA5tdwbBtjg7Tvi7sgZQ2R5upAhnY31dxAAVghDcVdBgQp1TwbduMdrbihqywHgBnj8p",
  "key41": "4fmV6TXXxHwM7VVsJhnbt4HfougoL759hujm4TwxFGMVnrhS6qYBoMeVeDiTjhDqPdg5SmnRUmjMw4hR5errpwGE",
  "key42": "46doZsS9huNbsnnyaJkj47Dd67Z8Yi9sDVY8krEB85FPtKiJssmvmz6Ry7CNqTTaBdY1DwNE7DXekiNW6698ECBc",
  "key43": "2RaFJzizdNdNk5jwz7r5Hzkz2PShodQKk3SNucFcwgBcmzBbEbZSVJVXiLpSTZyUVasVYiosvp8DGNgATkF2i21h",
  "key44": "4JKsa3YR8grXidSjHp9dSVtKLAFotWF2HZtvAykkPhvjqv5JnKbjGdHTqPQBP153R7tSLBC6hjCDPTT2gsDjKD4r",
  "key45": "63LT3Wj9ZAo3dK7BF7QgPredY6KfwZcdkXhgMaqyvirisweBLTJS2woUwg7WZM4MESc6TsjGoi3aL4P4HhcUEEaj"
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
