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
    "3petzQLboXCrGG5YNxPU1rccwVwWHv3uhzsz7MefeUUPQezUWvLx6ynEqG2K3DTdZ8hyLnRCWmm5LtPJbpHenQS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uGEhw3MPLDRzDwZqAnbut5M23GfcoAe9VzoZb4jQPNEdymJSGiHz9YEA938kwUVxsYNZQkCfvDNFMVToJM1Ywq8",
  "key1": "4FBcuVcPZmeGZ8QkoSCsqS61nFvkzqsj8y1JKtwaGtdQgM7T1bbe94CPuC9BE5Ram5wA3NbPzivp9ce4YHn1Rsiv",
  "key2": "4RYxhM1E1uPHdyCAUU1WzwooNXn2FKHwjvUgLUo36nJhgLsU897cZyuNDaQBkSuY9zU1fWfkiC2Q24EJi1mRPFps",
  "key3": "gctXwBVJWxSb2mDJvwpHESVGgk6pGbLzdy1nUxhMr7cVksWq8QBaJew7ZnNi2Ui3tPBHcK2nmEZH2k2eG7WQWgF",
  "key4": "48jdcv1gBaaHEpqUDxoQmzGuKsxS52mf48MixR5iXU78p2HPcaKvDzcTZGe69gNJswxDJgvZbGJFSXJtz8mpzPqp",
  "key5": "5F2DyLaxXpx6dXreyZHmEg6PHfny1uds49NC6QBfEaVCKA7A3PdXpyLELySbLsRLZ2TYwEyqVLJbqmWxjWzyjSFX",
  "key6": "2oUNT6fP6LWbPteGEVPXcWAsnZz4NoQCMzjuVUzVkQvSo1HqrY9tL76FZRqsoaSyic8hko5TW1gfErFF2bjWZ8EE",
  "key7": "A6CoZ5vc21itbiaLbMHQ9r59o7mvTJTHZPP8txS5jD15EX1nrVbkL5iKUjULiYqepjnyDkJxfVoyuwMQ9zvfwMj",
  "key8": "uFY4fyULxAdHeUx1rMvKLAurFuTV9Bx3fkGa6LyyU5HfsXjsKcusZegbs2WpgxFJywSgD9TaNnDMQ82znf72adc",
  "key9": "2iQEf214RP7EyJh3XMBuqsE5znjKCtsozAJxg9bostDkmsiWZQNkUgiACuvuj9uYtMjhoaohjtZ9kPximLmkhibB",
  "key10": "2MnFem8aoRXspNaKXPg7nRSzZCi1gJXajm8JgUMYgQp6VRoFL1az8bYuytjEDSaPWnLLnCS24XnmZUaqCCxrq69W",
  "key11": "3tiy2DxjFAvTrgB3vTTSBnWQkHSLKKBtvv9xZwzt9pjjE44Rqqx7QrkWDZwCZVEyw4Xth4VAbHmKSBji1SMa2H37",
  "key12": "21ig6VcJDCsmk3ZwjTUTsyUhojkVDyoGo5EUdeQJz6bgJ5BuGCpAWmuBeZxKZf4qptF3qadPB82aq3UsRgmUw7RD",
  "key13": "5esb2nkD21GQjceNRMscQFqxLC6DFfskqwTe7w2ULfcCniXrnSV66FRyyx5hEx2ACNuRNTQMMUTBJfzYuaQjWquo",
  "key14": "3qRhyFzFkjhP6tQ6suP53azzMU5zCNhcjatUdBDxaR6CiamBVENyhFgUPixHEZUGipPvW1WXsLwcD2rP79m6dr3M",
  "key15": "4gQrjeEftpxHjgTtwzKVmwqiyVHp215cobp5jrAWqaUQ2GUv2FnAGJ1wbUDpsPWhqWU7ahThC8p3UHGkaHrKgm2",
  "key16": "5j9Qq7PFq9UZWCwKCCP9oisuJpgqyQS5xQH8WE41VBsgRs9PMKwgjrWT4gB1EZknsNupXLaDNwQgsdUMaSGPdtDx",
  "key17": "5ixj6yCYfNQHDMUo4pimHN8vDz8mZEQStiB89SbDfYPCG2QmujYRestLjdasGdAzqoTgt2NH75JTdkpCcgPwDV9d",
  "key18": "3GNeNVrjduwLDkp9ULzZ76wq4vtrsNGNLK2P1KNzvEgpsJYzAb1pTCRNaR4bzrTkYYyXDTk4eXNGVxMTCPqAFF8x",
  "key19": "3iYdr4VGg1ym1c1XdzeAW1UHoa2hQnViiUKfnAjsrxqifkNhPT7bB7yxNwCjxKS3W23VkjRgoswoWhKvyD3njmc1",
  "key20": "8f48yr2KJp86Y9hQ7L1zdTPfF3fFiejCQHyfzriNj6JT8fCDr3nFmQCyxTUzgMJ8tGu5YEhgs5y7Y7HRNS5qV72",
  "key21": "35dqPm16F6ajApDgRA5NEaVRsfYaBW3C5gJCnTSAoBSSmRE5zu8KCNF6B2WQxiDvRVx8tnqgejJ17UoUta1CsqEj",
  "key22": "rSxSCMnBxRSnmFKNcfSRgE3grM96bC6TKLvpH5B4xSR9UVxdLSJxJ34UcmTbwAZB5mz9HXGD5Mta3ccFJBLSAVP",
  "key23": "5SuWBL85wJ9hXENFNVh8EBEi9741i1BQqdMEboRSy18z1pPFRNpn6HYd5jaxRxkppxHAeeUUH6AY3u13XExuta3N",
  "key24": "5GzDiCW8vzVFViHgAbXHq9qHEaKD1dEjt2wwF4PQKdx9UpxsRgBimECg6rpdGWGcVHuKyqPvbjU75SmDpcjRrw4Y",
  "key25": "61P3gAi6qgWwMRhDckJEDBYFoF5TbFf4ykGvQyci9qGTuhL6rtkxFJQzpyhAZQPbvqpY5WtdP8ufiBd6sJasXQ6q",
  "key26": "eRUvQJ9ChY6FjTSVAJL9Dgnu7pXBz9meckCJkHqXS4tyAScwH7rCNJ2qoTN5C1g38iLxVetis2vXuSYpPkWLse3",
  "key27": "5PTE43Ht67nSvv6ZX3DGUytjWxnD8BSVYmNL88yWR53T9igxdd2TfTxQGGGs1LimVXD8UpZgFRUVLfWP3Vd9ixsG",
  "key28": "AGYERf5tdFRbHNUQWDm53uaVpJjHfhrJ6vEXm7aBTcHKa1xzj9jY4MakFmpc2HX2LzSPuDFLwFjr88peDSsaBew",
  "key29": "5LjaiJC9LjBJwk3Km2qvKSm65NQkuqi4SGq2YhQCGMcfv1EDjJ6TepNDaKHfwpsAB9pgAdpw99iqFrbAFpbDJrGu",
  "key30": "1Bu1EtsCaFnoWsbBhKCqm7HsvvwNwjxqfpnXv4sVYUZEgjK8yhk1xdqscJzTMVEXSETgzm24wZdtjiUBK15vtkX",
  "key31": "tB5b8TSQHGq5Vy3HewXoA3xRbzRawcQaE4PQLdx1mj67u7B7V7M2gErewBzbLK6zmEW5wrAoEpJDJUoGGoZThZv",
  "key32": "5nv7wtzT9JmGCDQ9eNw6R3wMDk3QHNKsGR6Duyp6VWKoYYSESzXrqb9GF3YER5d4WvENdmdAnoE8nXpZuj7Y8Bwc",
  "key33": "3WU2pcLW5EgXFU5D77Ra9Tcr95tRAVYA1aFUqb7GwaedE7YbbyjXEyp32fnNwFqczSzzaAX5WTy1LsS2MKEfqJQk",
  "key34": "62dHSDy239Y8VhrE5PzVgVcRyc6PPdhe4fDtRGRCj6iXFaA1DBcLj7g8d7jaVNudfcHbtRxY6mDdY51oi9Jejj4h",
  "key35": "615DdjoZTZ994M1oMwDHwxuSDynAHPjygXkzitPezUhmKSxtgDeGDZcUFJy544Hgd9NW6S18V16BZBaQMvjNdU1V",
  "key36": "2y1KhuvniLV5MCN2gKeKTeRk2JP6VBdENVwedHTPWNRASyswn7Snw5Tma1JyK96pUbB8nTjzgEUfLLyAdoci8YA6",
  "key37": "2dBDmWzi6Ce1JNTcMdXgUJatYDrLUhnrNNaThfkGoooHNWpYwejmX11768JkQ246emuoB97tMvhW4HDMmjP6LNYS",
  "key38": "3gerA5FyjU5fpwG1tMUDMMs3d4YB9oNpcGuYWxrfZYkPY148ZfZRczxjq3D8ecDpcgiyGPkziaXv458gidnPcyEy",
  "key39": "zM11FE3yuCizaNto4FpD4aBXRbSLYJKrhzq2fyKiCFEkuYdEB7xDa4vTXHRdQLb49saeVuB5dv6gNo5NwPRkhnv",
  "key40": "c5iceoqDFUYRDNxKUhwBdUeGpUx461ckVgeFVnEb8eKGwVeRqVK7b3qYowxanfjUhLD9QkYsdJR3wt1QUoy4iKV",
  "key41": "nT8vzqNuPQDzbYnpXj779xztzXudNM5xVN1LJywwPTnsbnN2n5P3J6PUCosAXQw5R7oTuDCgzexoVKwiQEvg1Lz",
  "key42": "3aSUrvpNujrgPCBm9YHAKuuzYgofEvyzBJeHAXN4EAxbMaZtaD2soHF6J5nQ6eUHXS4ekt7yjrDzCn3CbHHJLy1Y",
  "key43": "4pGP4ELRJwQWRP4GFYwRj6bMtmMWUgUQqskr74f5nwgYoMqZ3tSgRRMR7w5u6DwmEyRvMoDzC4s182apHUZ9vhD7",
  "key44": "5QomezawruXg6xYCaUqCfqCEz5Ztqiqh8qwVaYZ2VDFPab81eo2tXZV9bVVVzAwpL8d2MRDnW5mZwVE5uPs5sh9z",
  "key45": "2KaK7Cdn9pktJxdowBLVaEofWT7Enw2Gxzmkv5mc8pyNV88QVsBBy4ahVhAvT4J9AfKBKuJM7LzSGf2PhrGH9xpY",
  "key46": "mWdoaqoAViYFEctauSrpPZVmsV3FYyRLeB5NNP4eWs9L1JbbtXxp872kXNxNBwxGAeYFSM8WdF4SDcna2jd8x9W",
  "key47": "5RiN5tzHdyCkjHXb6rKVSTJ3njbg5NeTBsM3NBLs9jSxRAHxmSyUYabSAHbpmjpFCnrxiw6qCtk8iqqpYUe22UvL",
  "key48": "34mSHVtQiZDjU72hCJ3yBcTGi894114kYWdJp58vjZXN5S2F75tgvVxiCfRedUu3Qi1DNZqU1MLPVPshC5LKY92X",
  "key49": "2Y2zbvsNpXGE27SJE9JTGoX8fYdHQ2UEXpzNKE1UbVKjEcxwBBS3wJDsxrk9tpNECuhr6oAN787133KG5CREd4ai"
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
