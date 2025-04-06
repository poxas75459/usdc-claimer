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
    "2zumAYqumTT8YJPNd7XSCiVbTL34xtqhirAraeCbSruqEPBVrG39pdH5PpHpKHdqsikT9QdNfzc11eKuFASrEjWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zPFv6mLXtFUQEqeStTiM62RKfNVVUGkr4gWQwu7Hj1KXXwnWxPaeXDgMgWqdFYRHi3NZjRhSuZw5svTsVPQvqqq",
  "key1": "tXNiT17cH4YcHXXxm6UBiSaGM8dESQzzp54jYWheLFkZczMtnCqW5bEz13LRBtovkKVq4rb3qRfbPRkc3g55GxL",
  "key2": "4GZAJwowi7nvCWFw476C2wiYrtd36bZKUj7xjPaphgtJ2r4rrADYWZF2Aqv3tWqF9MvFPqhiLoG3gWgvCssoyHgL",
  "key3": "KMSnkhTWrnHgPudUt2vS623bHsrwvep8PQfwMuTqY16e2To933egDWqiyrgTTCaxHVnoG7CHopundU2dDtp5Rwh",
  "key4": "47rC5jQdcH2ravh4svcdEkBsZTxhZRMffmqV9csAXrsmqTWiqUiWLRLRuYcDseRQZmEFFhFYFcKRbzaKXV3s52vY",
  "key5": "22oxpNLN3FCh1FQxTojukK1xGrGQKjN8mAUBjHn8qJgVbKettJ7FgBVH3jaU7odZiSQKVohRyy2wW7LHkw66sbG8",
  "key6": "3XNi6yiDR41Cg8nRnUrrSKzEnAsigU5cMRoWcKxyYA3dYtZfbqd2jJBroVS8wJtdvogAizFiSJq2tCs398WQiu9E",
  "key7": "34qRVPWtWYba5bft4uGMmgTgm3WAL6o5Uihs6x8kEkCcW1iHjwB9nSyjYnZqAoM4wpDCAdxHGfeav2frsb4KaamK",
  "key8": "4qtGkPqUjdVDiXG3io6sBxvNaJBLHpTRY3GyDv1GeTiaKsA4G2EdFzTnRWZApGCeyScAeYq96CRmA3rSnS6jKFNW",
  "key9": "5JCotEy9AvzmUiXgNhJpyr677JYQKcgGVRmDaLRqsGhSpAttFiCytTZoXFJxq5HUAj4zwg7rB58eneWqfgcgtUSF",
  "key10": "ebydnWoSPpPy3xWDbScU6mVdL88K9ku2g3tQ5pZqXqmpwWfphpspuGpC6iPZGAN2ymutninLgRQKR33vhdJmZzw",
  "key11": "4gTiHX2T6uCUWSwkTfnpMYiENeAPwv9ajNVgPdcwASngydyCmYfb13KCbqioN4UZCEKHhFf8DmqhAMKohbSXUHY9",
  "key12": "qiqvUX2WzWchap6D81rCpCQ6N3iE4Td8SbqvkHkZin6FuzVecGi5RQpk4PsXanWA1ESTs2WkJU5637LLjhDU5SG",
  "key13": "2fiFf8pLwmLemHa6JPdm9iCQSrsiDcTHYv8hkRtHVYFrSP98a8BfPaVqocEQFYYjeLsSheuaxFrWKM2NxmmEc7kv",
  "key14": "4iyE544cB5LUbJzWXLQYxb9xWV6HmQkVuGnLAddwbMXbGT4cs472NJaTCrMSvNdjrvGvYY4LZch97uyhjGkU5PD5",
  "key15": "7yg5jz1rAcrjGkZsh3rXrkfSU8zpydcyeDVNfbF4zn2D4w6vUsf4CKFqjkTJrmp65Aq1dCUyLWg5zkEYsL3MNHp",
  "key16": "tzmLjvpCuBdPLvXhF3dFiWA5hK7Kg9hjFQ4hMeTkLprqAEJPqZWwBA8Kt8k1HY44QfDQUZvyRb5yesPXxt74ARe",
  "key17": "E2GzQz1jUTz3NP9hgjksFwYbdy4yejE8psqvbEyAwYnhGPvXqbzrMj191uKqqJYuiVi3QMWsjeHAdDKd9PVtoVR",
  "key18": "4RXjXgB31oGC9SJxnPyeJKhKyZ3zmGdpWQVfMdrX2mv15dhR9nraWbLuaBjcxSiewZqFNi6ZY2WUdJrBySxHPmPj",
  "key19": "V6TFUtbnGoJaSKJxdAzSbjveuKtMJzeDQagH6AwHqoLqK6mckW59tM2B69XJzuR8j7s538Bf5u3792XPyNwHULZ",
  "key20": "avAMfhHkxbSbqZjaWJHtR4tS2cY3Pt68LGSdFT3iEpyUmYEJHz6VgjX9q8mBZKqogPdZ8x5ZyDNkdpmAWuWtW8d",
  "key21": "LmV8qRKTUVEdgvjxyjamnhuj9z9fYxkfobYczTU5faR7V9EptUxHVftQBp3sSBcTYSaQroST9aQ8V8ykkFRPdzi",
  "key22": "2YxQ4ZXkcpR71FwvPWdEa5wm1vNrBfSZ4aYndcmBhePfYoueLdoEu23v6sDPjU61kCXzqqY3W4JtSonJpCZY8sW4",
  "key23": "5C3e5GpgvEnMUERoxrU1EPUkmAuFEXCun7CHZb5vt7Qke86cR8Ta1WVBRgygixHm2uMbjZHsUwQktuLYTqKquq5h",
  "key24": "5rMxjxzJF5bx35NkptGnCSPny5xKmhCoL5XLPSiZVcYZPKnbS4gMUe38Xde4YGEFmLB39TgticYQttvjk623uQKt",
  "key25": "2FsNDa99JiDYFUQQfbMj3Y1SMMgweoh53Ff7nKT4KUMm1UNxYjpzKbuGWSKAZRisc9F4FgRPyk4S1GPedCpbJ9ZN",
  "key26": "5uJas9DM6EnaCZaWWkxfMh96KriTE48Aip3JiXpw21uUf9FaGeCfSMMeVUtJ3vALVFajt2F28oVkBwCFR4RyV7wt",
  "key27": "2ffKV1sJPeLSSVMqL9RtpCL1sJJUAj8EVyM8LV96AUnt8wbysBPsWSqojAu2gvuKE8F6LYa9jWvbzXbYGxs13QSj",
  "key28": "24bQXsH8SkQuHw4SmSNpPHkJ5bp6snyqznx8D6PvmjLpunJBFdsHEne3ygHv5K26AGzAtk3iKvq5p4d3HdZR5h21",
  "key29": "42HQg33cGJoPQiLjVEnWWBToqobfpBEQ2cu87xNj97YgieGHtuGpJBVJEuoNddDq7RqfmH9epxHE1ucWCnX6toj8",
  "key30": "64yxyX9XCxsmipDXu8u5BgNBqvu7zniYVXzMgawGqWnEbPbpJevamzzMEoZJmMTVGNzVmUiDVBh7NmhoMqXTyskV",
  "key31": "5fR5TUbFL9DeLD65M4UdHxUwRPj1gzLYuezcEcniiz8qCKYptr6vpyiytJBHjZZGn9qhB2xkEHt31v9PxhkghpJC",
  "key32": "4tK2qiH6JGAuUEsCKi149nFtaWZFeQ1SM4kZyBtuUKdat9J6f71svmGrCXQfFFZShbuwueRBJZmdqJZa7oLqoAnn",
  "key33": "5y6iYMFbsVNZbcnurmCAFZCRYFCuPmMKD5H94L9nc1VXiWaUvUVV8sAgaHRutCYJVqnvrd9wTdVVhg3pGtmgGWAb",
  "key34": "2bxgKWiw9N2qYpZMaP7aNu3MKBPfPZeghR3HgVgAYmk5wqYVnbBi4w32Rv8kndaAMXKBu83NqJhNkekeoVtqYP3w",
  "key35": "61EfDvLxFfHxKtKDDULA5YC6KGihG6JDLbVSSt21oxHfLjFbm77xDbPRKPxRghg8ZwEJDP4YJ3pJapGiui6vLUC4",
  "key36": "5tf54hGezC3PB67QZ4WdWDNYZDKWPpQ1V2YZ97JJPiudcGKbUP6ieec5HoMruvAQAwb8z9shxV5FupFKWmZg1dmo",
  "key37": "2Rmh6vjd6No1upJB2zGSFBukpTgtesHTJs1arQxknEfZyBcjCtgKqqzNd6zuiD7F6iFuLUHjSYe5MNkgzjPHqcG5",
  "key38": "5DTVEZuWvEL8KGXrCFiDxNzKfGxs3x34cZdDUMfbuR6Sz3digTHfxkDyfLJ73rVXTZvySZTPGMopobtmyM2Nkdnn",
  "key39": "4oxfqVpSc4YhzFkR297ro8jccQcWvhSHj6BvWFV7q17HLCb9yqbqmHRtvnXvNiaPJtT92myw9or1FsYPnygtZf2a",
  "key40": "2VuQRVkmbKKHrTkUeKMG2qWPot5pXqbtZ32yd6gVZLeuc8ghFZGmy8TXf9py4phqS96rqu3QXzyoANVYdNHaVTeZ",
  "key41": "5ULRYB1heuV2V1vyuzj6ky9Ngwp2XTBEUtBHGiw3tyETgLF1C2Rjt76EPVXZQFgTjS12Nx6RLzrYRt1qoRo7UekA",
  "key42": "5bho8yuJgXGQ5xWWr9XubL9z4G3r6VT4BV9meW48vf17UG7cAmJ3ZedoNSguAtPiC8uGRhfUAfVMG6d8UKxhBvLY",
  "key43": "2NHviPFFneLHi2WCx2sCeykC13YRj9yW8CtVUGFy4WDUurNroNABmGSSDR1YMi5Lfs6yFusRqXCWfkd7unhY4Fs9",
  "key44": "4reN6hKeXtKuQmSAG1pF2PQHN9nrrvQkJGhxifjRbaG8G4Rj6dX1si9B6CTpCheDicqQdspqXDuaN5Yj4ccWBqLU",
  "key45": "d7EQJf5KE6SmGYYnXS5VwHSy91s2ypiooSwL4cHE5WCS2Uf6GLEi6mCDAHtwNV2AmFhsWGiHeUU7gBsoGo1W8bP",
  "key46": "5dNxCgHtrZxAympX5v9xDJ8g2bNcjWZe3G4jtWZsULDcV36W2ZtwCJyLTpDAH4NZau45cmMPGrp9b1n9Nj1YtWXi"
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
