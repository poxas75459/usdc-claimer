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
    "2YCnwSEprS5ZBqbr75DFxABsJbrdSLZ9n3bcFK9yJ1nRDUTdXHwCggwozH6g13AeDscUFpBRGvVKP89BwxuLXJVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JMwH4CJZhqQCUeyzuB1sFgwPBtSSWXobhDzvDVAAhWKcSjF7R4hLyqpAV11GDt6MXzMHqoBqatHT3nPgVwqseo3",
  "key1": "3Jv8v5RiA4iXyaLxhY4rPDt6oUeCHvdJSe3JNtJa2N8qpeGDqTZUxcNY15rMyAWNSdUUH6x3ZHE4qx6NQWLh8UBe",
  "key2": "2jZrhf3vFfUkKAH2aoWp5RbEozrrEhScxBD9BLzexFW4hatA6nmDrf2MTuJ5PiuoD646dTRKrMputRK281FpzuKT",
  "key3": "2ffEVxwiym9e7kU4yt9LHxsJzck3F7pgoohkF7tev6tLJyfRPzRAX3gN3fCbvuZNjGaQsqhVSqgJ3gN9p1DZTcBL",
  "key4": "3PiKEGvCa5ziGKcr72SauCSJVMEahvYsCDCidgbrk4bmKpP124xmtAamoXjP4VHaLjF2f5PVHvDztsZJhUReNpH",
  "key5": "2muMZQSKGUJyJM12L766AbN4fKUT4BSwk8SQTWJ7obN1cJbDqszVLWMq2h1QCf2YvdE5Wk6J2CT7XmESVFgdnexs",
  "key6": "AhQWinE6rxw1gaj2RoKb6fExRi5h4FLzL9N8cViikpiqW98tQUfCB3W66d7BhF4E5Di2NK2F8Tz5zia24Yjet5Q",
  "key7": "CNSMAWzGsohqwnfKs5VFKZyr1JT128tMXBjvKHSw4wyUNiCazj6oaXns9AEDbiws2EpSqdPP3pFaDaZknDZSQpR",
  "key8": "3saJnFVi5GBnEfkExpjf4ZQLn138KAudFC9a936CqaeZRHQEE7SfVMWSU2aUJ8Xr2r1NuYnceYJdBVYRFxAJo5He",
  "key9": "5aJhevrLj7rAXHwkPmF7w4gQYkLAbC4Xpt49vAxA9p2JuKUybw59wHki3Tz17FnPYoF7Wjy9fGbVjTCSqNHDGzY8",
  "key10": "49XuuJUJz1xzXAeGJ5bWgn7NCK8aHfY9x3fTxE7oLSomq1UL5v9ZSErgHQmoPsj1WrtioTfGXomJANXbUwModB8w",
  "key11": "5xAfuvM6GXkSikuKxtr7QBtECqhjC5tvYfW7RB45Sj1wTUMkxiE2i27vEJikH8H5CMSS5Qd85QBwSduuv5PZPs51",
  "key12": "gACFiKr4MTjta8uFa27dn2UqmUS49hksdXVo4GjPJy1GvAetaHwGvSphs9tSf5KYv8znfmic3K9ox74gu3ysnC4",
  "key13": "v2bPW3hJF4sCmX3c6xf9UoPJw665jgM1KPA6Mc3ia1dn2To1F5z6fgu5FEfW7cbDJwi2NTEZdct6KYAjUq6jqhT",
  "key14": "Dt39EnLxiBrQ95umRNL1NdWNymPPKGRCD3toD17URRYGZXmjcdnfTCZGLMA7btL24FhyLnctZdAVckzgvNTBvFk",
  "key15": "25Aye7WSEw4jLSddpdtAerzAz42oekdwjRke9JEcEykTVS9uX7QRFHAhUBfHyBUrvXKwUmSEA6Ca2EtDw7eH656e",
  "key16": "2S3fvBV2hwZ1Srtyjhboqwbku4cA9e4GdySGiY6GH81WAt4g74i36L77nPjQSxF4QkYC8u4rEhHbtcEAts96A1zq",
  "key17": "6wFQmCoRc1qW3DR9QeJAZwBry2NXYCvg6MjA1NahDhgwCVffBgDnX2gMoCS1PGmexGwZskyT5nMvRUNBk8cstzz",
  "key18": "61PKwSLuzne5iT1nK7S6noifRmAmeTPWxiRsbAvTVWBGbTzPnkry6Zhi2wbFN3qxr9BE3V5ty9hzjUp4Grw4Pygp",
  "key19": "2M9MV7kjLkXY5KRP5gXJoWRaBWJ8vb9sw7f4zqo6XyqfSNmsiZKYeUmHEzhAcPGKed3HJTGGXm6BtjVrYawTLYAB",
  "key20": "2BVcByuPLjuMYxj5U2RUbXS2rNSN2uGcPudNTcBKudGzL6PZCdgbAPyDNUY6qLtCwWybWZ87HPxDkgbkxGB127LW",
  "key21": "24arLMkv8ELQHGZRjiGceHvxCqz7WJSd1dzMtXafGtkLiJSZyiu8mEKF6Z4AiTxXzYyn4ZRRAEZU4WVzL7CS2SZf",
  "key22": "4ocdFTXSEKx5RwizrWMU492XwmDKnLoU7oSZzH7XzUk8w1SQHnDTY5DXDNn4mJJaut2idXYTpr7SukrTsnurnDde",
  "key23": "2R8tp9A2jZNfd6h5QtjDDCKsTVNu2gXqck6mdVux5sVKzymLXz26HmK3FwnwQnKAkBSS38mNKrMLVN9UjL1B4VDF",
  "key24": "3Lawj2DrkCUJyNzyc3n11ZKK7oP86u7qNK5efQ6gzHRrkDYs7DqpXwpQZ5AmCjggnaYGVp4XV8h2mafC44bcbe94",
  "key25": "4DYakE8TWhbEAqHn2Ph7vqRHy3i6dsN9wepfJvFy5tb3mka9RbwQdCHN66TWLXr4vSaFs8sQMaNK8Qvdzs1op6se",
  "key26": "56JbwjaF3yCnxmQt49g7q1AVzoeTNsVazgJ8JcXnEDbbJeiH59oq82W6sPAPtt4uswtB1RSHt5RQih7SegjU6kkm",
  "key27": "vowVe5jdFJGfCcQG8f3AUGKAGDNUR7f6XNccEp1bAip8grPQ8Ajt39dP1hndo7eDvyfXr6sVVrewG7ttz37XBC4",
  "key28": "3Yph5WNbsJc6qCRQGS8qx3qXhy38yQ3n9C9XoFfqz1Juez7HTd57T8V2pTQYgRA2ouB8iQE28zv4Bck21GwkcGkK",
  "key29": "3DrAjZbTTQuQzYLLNZrqTs2Rf4bguMp6Dv4PiusjA5pL5P92tApVFa8ATrTKLdgg64N2MKeA2Gd4VbrL2CNPGS28",
  "key30": "2ixY3LoC2AW6jn7vBSG15mEsud39X18zNFk7J19Vk7AZKJD7xe8i6tC5gQSYtLDc4JwbrAFZhULFBC53GXsortWW",
  "key31": "4yvPh4AXVKs4xs2BatvizJUSoBcdRL6dY14pVvZZYMnXW18DU9pMTR9FRJAin6sHrBNq6YcRQpMaqgYy1L7ond4e",
  "key32": "67iYhq7GTNY1Py57mkQpYzkKG2CeMpLokWgRZ2kp7iTkdmAEUFLmNwkrz2JvNggSKgmSCHZFmmUJmCzr387R23tW",
  "key33": "5Qw8fa2bBhn7yXXVKvrY7Tug7JDAPthqtufNJfoDQi9fsQp8JYt2j1qCJ4Nkb9WD67UkQta1Xo8rqx6HAvLKMY9R",
  "key34": "4iNzoZjCJMbPdju9ybE8dtGYkRBVzbjDSsmdwtpDy6vEAS6FBfWd6QvzirDRurd2DYH62xq4AxUZNKxpZwhpqmTJ"
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
