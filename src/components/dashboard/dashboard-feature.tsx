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
    "3X7X6G8ofsKHoRbH42v7xUeghmFuxSayda1Vjz57Q86riCUMWTy7Lj9EzroW1P5Dd1cGybze9mfGH56Nqz7dqyzP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yegwPqv9NW3wnq9qRN7RD1ekGiuvb8bNqrsEhvaN1cEFDVqHpkNfC8S6wEyXK38XroBiR78btEdGG5GHfsVmwET",
  "key1": "48JyLKRR7r8gAbJWNkDYzuQ88RKzRm84uwpvPq7MqV1jPP34M3ALZtBomFecFqjmLWem9bdDbWJRu9kSwWDrgVod",
  "key2": "4hs2PF9MDk1gWy8LSGht9zYFWzGNphJYt9zgm1iYcNRRC8rdpEdwDi15RZ5q36n8oFiPxeci46E7GQFsP4xwzkQk",
  "key3": "5XHQbu2BZxenPhWYF2DSYTViyWYsXmmWfTAuoPfngg3fTNbJjjkaKbwANa1aBL5ac7mShfhZYh7h3uwYHaCLsKUq",
  "key4": "56q9hP1hhTdba4P92HqNvPyJDs57AN42Cu5b5xTfWeqct88494RiWEp6hx6VXWKpXkr4AGTiJxjvmEiTyALxcq9r",
  "key5": "TAtLAz9uhmRsCJwxknuJjs6G5LWJ5cAEt2UszNVnMHJRrJ8KKUZNwnzhfYxuHuKrrE7n16wGYkG2uMeyPkrGryX",
  "key6": "3e69F3f8gUtAgmYqnNxkEDoaNwSXcfQYiSbzqub5ngV7YjPaRArCrjdUb8wpaEdkPtrTrhxyj5FfDULj8uz3rQja",
  "key7": "2r59Dud7wr3zPG9pkMtx1nzqGoeStkMfeAr2MgtWwUuqa4SqeRRTALZabCR5NqiXe35gEx5NJExs2UsA7isHgqAy",
  "key8": "5pYjQb4KD8EbMqCWWWe4mJ4H21g2d1bno51nv6jS9HGyeyZMvEpLZLAeUHeaD7eSCQJKGhUx9kzwqtEdnoVJFD5h",
  "key9": "2GknPLuNjtWY8mUF1sFSqod1Lq1pydv6Cr7kNVEqMmgfeKHqHcVS32tCDc84m85WH4nyNCo1Z6aH9Uxqkrw1Vd6e",
  "key10": "65fuXdbwFT4EfGTMc61jPAPRuNDTBAErXqw5jKnLPpAgKufYGgT1xMkkzG1YpADacLXjHYUM1Q85GxVofEdPBEXH",
  "key11": "3XonKwKCknyMCbnLf7udpdAjWhwpyUoDxSQ4B2iYh6e6xLyknxg2EPyeEBa8sv92CGhpNQhjwbbvYvtzsU2gJvYF",
  "key12": "5MHtZSpkvQCHZZk8AteCtkbixDG2BCd3D4QfDN8vkwkXQTimcRdmvYfNwxmAMFvhXCUbY7yFdTUCfBt4sZg3XbWK",
  "key13": "64AU1rVzmWQRkHcZdczYJwsuixSmVmAhbv1fZQDrv7ym2P2fJb4NctaVpVnuEGd7WLPRu2J2ZBvJ22v1CmeWRf1g",
  "key14": "2fvrDTnnCcWQTZcYQFM9SgHSFXyWFUeZyFBoeyM6mTz2QkwQMXyBqA3zBZX7gxZ2YLe7nt5srt5Knu1svKFd9JQD",
  "key15": "5ZihV5wxe7jsNm3Cf3fjnUX2BQynuKoRZzaEtbAd64DVZtKydxDyPL8xEFuyqzY2QNGVChNVntHad7WA24e9ST2i",
  "key16": "3ANtgsTyvcHSGsjxMy3ULCXoi79V3j2KEWhomdwWGM6JmQEA4SLwdPCwNehVezW4Kgwfv5yPTzMc4Q7r5F18XV6v",
  "key17": "22y6ndcfhEq4vfmjUhjrjBMiiJjcumo65Z5wrL3LkswJgm2TTgcQbCzfp522he521UG8u4Gvct5WUoDp9t6gGDLE",
  "key18": "3BZuthmTG8zrTtBWihKypyjm2a2NxxdRAyTRmdkViGfHfh4Wbdy6kq6U8sKSkg3RD4nHwCzPCrH9mArWsD3QcDRp",
  "key19": "39CpY1fnNYb7ihbUMwtrgmqhFE9bQZnq76LV72Yky91iptgwqDgRoyNszY6DuvKuyqs82kL8YT4iNmXgeUd9LPoc",
  "key20": "4JcAYsg8t2TYebJWenSQmfsj2V6fEGzgZmXt35ch78E5VbvmGxFzqTmp5cPKvwvEpuhBdVNFWQjPot3rSBx1smug",
  "key21": "5sVAB9D97v7sLvwjhg1V661NsUPqFH7tpzhCBWKmCPRSVLPNPxaibcX8UyW8uE8S93ooYQGkcN9sJHF3rYrJJ7na",
  "key22": "2ZqyjecZAXo9FXHASRoMH18N7yUbRUk8iB6vegv6FYD59cFqSVhJ8uAHhDQcp2fDiUUyyYYpbBUyDw5pDWkwGmmS",
  "key23": "k6JtKCC4YknZbRfY4FAXqPRSLuTBirNKCpXKxQH1KGnhzxdDoS2hPwVaKHuWkhijFXzkNsvcXmyQGtozB4r9e4q",
  "key24": "2FXXyMJegaRawTiCDJHwgm3MtQJ1s2tZYT9qRVe4jPUKvUuRi1EM1bGNPy54WUnK1vrWbUNmBXWw67jUdoSGDaB9",
  "key25": "55uGEwETDvuMCbBJGSz7cAhP4NrLQksGHQGgkgx1hWKuN9BXdv97dCEi443Dtqh3dGCQKGGhPT9HXA9GhZBkSBga",
  "key26": "4wc3a2XRVnvwFG8msT169movhKMdgV8BSSFwTbGUZKuhyGPdYUiDXKEnhTsX8prpodtr8f8EvrA4zYp3Na9qpnDj",
  "key27": "YE1AbdmLd2yfY7bas7MXWde5sGiVjXmYAxgnKd9jNvGuM4r82tbvYKMAuD9JumYCHdTgHxZ3L2T6yCMsjJ4osg3",
  "key28": "2QKX2csMzXGQVnvHbmXBV5Cr11epv9cGLT2ipk8vRhMfnSuiAajZJAPj8ZChX3Q5LkiGBjV1E1KjvfAsvZLENSpS",
  "key29": "352Z8tMaoyrBQHDLt9pK9bRPwMj1NqyAijhLF2EQoGqTA5DyNWkgFSQY4Ai4Q4CjMVJSq53va5ADKg4NtxRwiBBD",
  "key30": "2Qis9cTSM5oECCM7RKY3w7F7XGiTGa125P8d4oCuXqsudKqmiQWBmkkgU9oKXBN97Gj1gZHJuNRaabiwqEFL3p41",
  "key31": "KX7K9a5A7JPz59BLFebnvrB42FuSdfDG1FC7kJdiMkWAoDz4YeDAZ9izQVj1AmhUag7BVUpXT4w34FSViwjGpeA",
  "key32": "2LTdZWVbphNLYgL6Z2Y2ExH9FuF6FSnfZv3zYeUxxqKShhhcgTjSPuZ9EqqLhapwX2yMPBgTKVvYaDfW4zNPYwUd",
  "key33": "5p3RfNnU2VrNBxsRJJ2RbXaPeief6LCneibEpbkYZZufnwxi4YwCW9DDssMbXNtRNmT4EVKUUREpy8gW5yq9yGcu",
  "key34": "61j95fH4C4zgoMJEPAtYgvPsAaa9vh2JB79569zvsLfR31UiqTmLCyzGQxE5bmw7E2d3uEqZFi2MTVu4Nx3TXSxn",
  "key35": "nSoGdKXjR2kzyWVU64ZrMLCZS6XenRDXcWLERyTwjGyedZPPa4aFLK2txbq4dqsjahVh3b4xoqwAEuuF8x1RKHp",
  "key36": "HGMaC7HjeXFADzpwvo436YpswF2wFMRiTMYWtdeTmaNbWjWBVNeJ2EJ9RtvmQYTyZjPF5SEFQHfPMBv1wuRsSXS",
  "key37": "5yTZSVQz154W4jcF4oTWM8mChK3CKpMcffWDUXaBfcDfKP57R6pcXzm27nDZNxQnG92MzNNqNhWww2qtRdczuHns",
  "key38": "VgZ8yVD9dY3xdVhiYT2wXwZ1J4nsG2xW6UZaLtGugVoZQ99xXustUkpmtwp5i4LXQNDzfduGwGXESyMUC7uiQZN",
  "key39": "3WCV48k2XpWjNdaaWwENbq6yYbDEAHkK9q1SkRsBkiFikRVnc85RV2gnKyksDafGUPi8SXNQxzrymxpWBAh8AqmM",
  "key40": "2BaqtwmV98k3BN94ZWgd9F7KFTatB1LnSCzfQJE4wtiU3TU6Fmripr9Gvz98LHW3PPjpZpHYztbiP8wyPTE96sEy",
  "key41": "4FAuNvhT5DFzmkXPEGkL74dBLYxZEgktmKmkhRoV9D2doyRP2a3WJFNrYXBftEWHoCidaogiWmM22aGqRz5WQBVB",
  "key42": "4XwevFNThaG2GUFGiduc6nkeAMLQNJCodrf5RvtuMcHyedUNFj6Seg7ct1aGrNKNZb1qqnJ7ERcFgUJ3ZpjeepDf",
  "key43": "2XTPdnZFVfhnZGVtNmgKeHUxVxhs2AV6LpH4qVi81f5eYvaP46oeWkzX3SeEaGqd8t2inJCBmypE2XqJmhnjcpJx"
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
