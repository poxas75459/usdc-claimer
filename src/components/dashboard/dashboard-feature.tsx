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
    "2u2YahYwicWJCujgfB9qEyJ9QVqFtQ4kZ4yZBPQtU4SzJA7SDDWhmkgmz882Gw2XSkYj4LzxXLydC9j237tiXGwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VUR5Z5Z1U6xBbq4HZDQKSwmjRccGUbvmAXHV2jrZMXbNXFB4kBmkU17LBfCXKh9WyG5Pd5DEzVcdLfxHe91rUvo",
  "key1": "5xFpdrirj8xrZfNPh1mBcn5eLPrs4HXBd1sFMV2aEpf8RJmbKXqmwsBqq31miFQXaMKgZPyWTXvXCckS7GCKyxRq",
  "key2": "53WZVKks5zCCiDKEMce3unJcXdf8qb769NYBvmusZW6U7uj8JBWxG5AkrgPvFo5XZLouAjc9V6x3AGAwxSfg22DK",
  "key3": "fXX44gNFgYNDmf93EToQxXt8jhs2byUxuSVJZ91sSYL6tStA1uQ4Vfx5YMyK1NXEAf88kd3n7nDyRauuWWqZKjy",
  "key4": "4H3Ldy2LZped2xEe7gkqk5DMLzYstqV8F1iEHw9mKkwkWXRtBNsZPh26jB2rmrsuQBLeTSccPr7Lmc1AaFbdYwQB",
  "key5": "bkEUMDa6VwEHAQWpQDKrS3er4XDxiKkDN1dGnGhdSdQMcfa1Wy9fHRDAMqXyNeRsvH11721XP7EG1oCYMgL11rn",
  "key6": "3iHaay4jYDArDYCaUnuqKMjZLsYbrYh8M8Zck1b42bqg9gtgY2aMnnaCLsBS63Urj5D5LxNCivA8WkHX9G7xNy7K",
  "key7": "3Fx133ffKrE2L3on5oz3MCWP6AR17FRPmSreSZXRzofzCCuV3r6M14YzUeQd8c5macgEkqWPZYuiHZHD5c2hpc5g",
  "key8": "2PBRWRo7168cQA11xAPLxwXbLGRRD1SJkCauSpZJLZJqWrewj1im73cny1ezDVQ4NT1eTreSfD8nS7xjD7UwkFf7",
  "key9": "64b9ocnh7xRGJJQPDswLUBdBhAcdp5EggBerp8xjmBWszBu9J8NHomBGAikto666mai4k7fxVHXH5icLjEnPapyS",
  "key10": "2oxgc8hQL3fPG3yYSHD84kg6DKwDGUEAvLui77ue2sDHLfgrgoWSmgiTgzVZms9STruoUncPtm7yV4V6HLnsiUZE",
  "key11": "4KYak4QkCHrtFvbLQ91CNiEb1vRrUb47s2fJu5iy9W5zaeeamh1wFE12pVxoaRVL6rNohn5FhwV6DtWSeUoMaRsZ",
  "key12": "4mJjFfy91aDVDJmuTBYwTZ3MaU5JjPJZeL4qVgiYvpiLWWWVJfd89WuaDjx9TgkRgeCAWmigx1Awi6unjsCgC6r9",
  "key13": "2uFuFizCAu9575AedTz3B1B4GEnjkRvrKy5nf4YEMmxoncZF6Lsxs3YBoiUsyU3BXREP1wSHU4UKKYEX2kYAmB6k",
  "key14": "2Ret2F3w7CtDjyGfqk7rbE7xYp9Jn2yTFvpPHTbTF9Rid3apWPR7G4SKtQ4YqbyT3cozH4NJeGtUkUhK4UCvm6gQ",
  "key15": "5KgSPKnWb7znpSWwmYYhum5PwVQ8EM3UvhxRssPfWd2r7MFpfSz3pfunK6CPLYmosAShpzeovNqno61L2z6ueT21",
  "key16": "4HDpUuLajXGQsVixv6eXJa91qRYMdBmqBUnVwVyWxHK9MxPaG3RPPyqgkCC16iWCeDdWLLu3dubyBBAuoRf8edkm",
  "key17": "5iBQdUzev4L7anU4S135nE7jhhX1CmQk1Vc9yvFuM9dSyStK9VHGbLsagMgi1q31wGAft4Zv8RBbprSDUJm8avBX",
  "key18": "3vUbZsWUUnL5KyoJ47cBiBc4KZVuXc4UHPtgGY25L7H5bHKoFZzozqAJmVNg9g4JLQ6YSksTv6ncjbTb3ruURrWS",
  "key19": "2dMn6zXAkqgekwoB3Bkyx2my4RUag6HHQwvDuw79NdnZSei2awZM7mfHXccVH4kiKH7Z141v3jer4dv156dPQ9sQ",
  "key20": "4ECn33kxfKtVgi3RUUQvWFTGCZEKVM6Nkwrc7Ud69AKZswhydgz5bjdYG5hJQkhBxYLdvdhR11BW1xGtfwRbJmVh",
  "key21": "5xMj2rayMg4YbakG5gzqYAM1uSHZDnfpKoooRn7fsNCbkTaLyJggbkVSEi933b3g4ao1sWiGWW3QLuTFLFkLH1pd",
  "key22": "4sTyb4LwemVZGvG4TNrbd5amfKFc4pjzgmqzSFhshZr1RzytjJVKx2LRTbPwbLkkW9bfcuPigTfX1GHpRLFHjTHD",
  "key23": "5pnFgGif8aLknRNPhgpuhpHPciFTbf2AoBFaimbLCZpcMRsbqMKVazuBUdxSZn531xqxhzQmpCNQTecyijD9MnqQ",
  "key24": "3P5kcQtx8Qfvt7s3NTGupFXuMCfAHPZmPi6ctzuPENdRrHAR9ommPF7spPuN1CsN7c5RxLos5gmxNyjJT4DUTebE",
  "key25": "5NxuyA4CaV8Ze1jCMnKxKjPSUpBeWttBgA1D5b9w9CLyL65zx6ar4r696gdgsnbi94XNmm6gkikcyKJ6FjBkPAyq",
  "key26": "3epaiYZWFWzeKCXp1kZTvqEfBuuFCcny6tScVGYC5cLM66CFy732j5UiWaWVCrxmnj2396CM5aoczuvnThgJQ2X6",
  "key27": "2Lxr4EyQceFZ8HhRpu2bnhgJZogNbohTbtAEMYEsmhACXoMUsgVGbezw8iY23X5TJ647Ypk7xw1c488zjX4cVWyX",
  "key28": "2c5Lzqzf6PtTykq3gJtqKDtK6A42dsBqiRS6hAEjdQsoiSfu8DYJNuBwwfmdTvBDQgXmpAuxRwqoDx451RSdfRGC",
  "key29": "5r88MVK2QVNxMAVt9DFTxoQjiD1byA2rxX1qRRQvsfmpYUVa4mUbfmm6xZLwWrcwp4sLb2Y3bGiAPQL9JXcZBKAG",
  "key30": "KPdkb4AnnbeQoCEsqjz5UgaJK3rzSqFeYrPwDzNYu8unmY41FvFcfZXBGQN1KwQg71qnrcnuSW8448hF2LnKmpE",
  "key31": "4kLj2V9yf2sod7bxSsV26G8c14idQYc6CAKALopKt1trHhWp8zzswFaCjgwysQskzNwkrKAgPyTX7tLbNzcLooFj",
  "key32": "33yU7gDbAv5tukaXrVZE14ppYNY38h6Rz2CbCuCK3fo9NyHJeTEUgr3iN1FcB836cpaAW3QxDkcJ8dpkriQWDR84",
  "key33": "3dkmkEa9BMcAUfBpoVNo5sN2aFWGLLPMpnNTHzBggANYBvvCSmZmfmGpSWHHrhYXDrVNqV4MLbuefYxhgpjuYeis",
  "key34": "29QL92p2yWdHmTGP4tYUFN6RXdjRkXgLkBM9Edr5RpiCbWCUYjUEWXKBqv48X2yj18hjiHrKedYPqtSUh5r1siZi",
  "key35": "4tRGSQEhZ1wcvSJvGJxu4k2cZE4dExPvWmRJ34mR4FC2KtFopckk9tnggtpc1BtRjg6RKvsD4QEKZBXYj5MWFjox",
  "key36": "2cEjk8RCnha3VeZ5w6yYRA7E3qYHPy3CmxFJgCxWk8KNfiQUDZEmbYR3XXo6jAoX6WzNsR25FnFbsbfgQph3GxXw",
  "key37": "5c4ftvpZ3W2oDoieeU1fxDzqG1ngL6mhp3bg1zfKpYhBB2DrMAw5qLjMGZjhhPzCC8v6SzTGYMTLVFvw8PJ1Vobc",
  "key38": "izZxNgkb2bgfCRHt1DHZ1CRwFAk1DNRREtkN59e2C6freaGeFbV1pyDEvGXRgDtFnuyp1gJt4KzCx8Mifgk4cWE",
  "key39": "4TsQUJCTg2YCpWqxJQdhMhPz2BkXsMyGkKkbG1r8RzccW1Q3Typjmb5E6TotBzA2fKBLFjqTNwmXGfJJjtFFxYSd"
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
