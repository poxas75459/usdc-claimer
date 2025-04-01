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
    "4pCiY2NkDaoWqNLxVMarNDqpq8dBLTy9yon8n4sa8iWwY6RaKKCwwaGawRzdZctdLNzEDFQxcM8S2LDnARjThws4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32GhQEmdv6CDfTA1xVorqxiz7ZN7Ni1VPraoGx9mAH4C6bGV1HHtwhE4o81trEXTexaetw8kFMArA17sAZF4pY4s",
  "key1": "3utVNtMqHvG71hw7AiNK1tfZLuyyknsPGd1zTZ1QGoW8eA45AuXvq6TiSYRka5KDjsjzGgcyh1BWCsFttDwKTkki",
  "key2": "2Ahr1jvDb84jbbLtaSs8saCZuHy1rK9WX51azvsD7kxq3QEARCcBNKLfXWuwVHByfRj6Jq9dFN4GBvoPBvc6reHQ",
  "key3": "2difRwWjsV5C68JJuqzKRBTAEw18xBBmgzzGowoFsUgXTvkDLaeeXscPS2GXuFeN7ujVCCUJJQSbMHMqNxvVjPVj",
  "key4": "5nugaS54ZCLzvWkgyTdvPvC9dRXVJ33w6arohVwoeabyaiP7XAFsRrdecSRf2xKd3rKS2Twu5ykbZ63tTAcEk94f",
  "key5": "5pSr6u5vrfUDs6PmFeYeZQ4pDr2JCHPxzsKoPcYB1ju7LWX1U3kia4b7KnRwrRj15HP9E1YwPN6oP3s2SoZDLvvq",
  "key6": "2tDA2ddjvbtWpzhfJAC4c35bKhZUgH13Tf7sVhj7cCk1RPFnyh5LhJrdzHmiiz3PsZV6iyWu8amx5ojBDvwfKD2w",
  "key7": "3m8Z92cxSAZiYGgASqg9nJR2UTCMhvjZr5WMxsLGYE8TYuxsqsWqzhswtidjYz1SPVHGhvjttV3jEgtADBwbWmPm",
  "key8": "4EoPSkRNqY2rcQ5rVxow1GGYeayNkiTuiCaBqUK6CWWBuSx1sWH3LAPxmecpZbxGVBnmuJnEwgKXdNioxMuHsz4p",
  "key9": "37JKg6WEmCuqZtWhN68dGYHySTgxAEPnpLu1wBWzwoXaZNKv6abYNC5oboQhWfecB44NTrerc8G3Ah84MpNizs6d",
  "key10": "GymrfW61P9rLq1F4QPVtd6Ro6YByeeaqj2wA7D7wis91LnSzLFaTVSkceiAAXS3JZYMG5xQqg6j4ZuNYA3vuiqo",
  "key11": "v8rtntYefvpZvqtLc6t29DcM9L6AJezXEvF7du1z6yKHSTf6Xw73pRxpMmJHBYzQjPu3mJUiSqZXSE3QbuBzKXA",
  "key12": "4QcCq21BbxpvHZcVfk5vQH8Pci4TmTdYWzM3dTgop1WP1bKQcdsyXkXRK2gquS41Y4Uj9tAb9ZBT3zVtqVHFyVyk",
  "key13": "41tDDHiLy5Y4reWH29WZMBGhws5DVjUqaBmoyFADCXez6qZ1RMxYSnnwStYFzE3KSHyqSvB4zVYsi4qocuUfvCst",
  "key14": "4bvKnwkKQTLTHXQ9yQNyKdGRJRFfLrCFZfznZQkQMLjjYFNwA3T229aNW46v8QjFQ8sNob4nPLXHq6RNFM7p9L8C",
  "key15": "yqJJbd45KUcVy6zhSefrf7yc9whh3pCd8QPTANYA441ZsHYEkMJR5ykcezUX1kLi8HhPvu6hyEjWucffeE1uRcd",
  "key16": "Ed3jLBJPeEfJyfDpceUx61hUBNw2UokRKHAvZjEowFZAtZTrepbXdAxZHskxJ6qzo5cJoaZdArzkq7eH1WidqZP",
  "key17": "e9LTGEGnVpLW3Nzeg6d22bFuCPeSFzeRSBTg5nb6t34FnqFDajJ6nJ4ftySMidNoJpd1bMwXUAB9zFDWFQPVtAe",
  "key18": "2SqMUYRnyrzg7Z4D1Zp8XakbnuLA4wy5JcZ57vmUYFFWGRZG8XgnGqiienmLErd3E7Z3sysSMW8ZtrbhiCHzHPG7",
  "key19": "3ELYSgGexrAgCyqz56Rx9x6ZyUH4ur4JrCL332TFAmwAysKYxEwMQsCiybXVs7Wqcw2GzPFDxMQDkRjqSEsHc9R6",
  "key20": "2ggE5QCemdnk5d3dGjohZhLfyHqwSSUdNFjrAWaPDx7YoxSFfBFJmxZmfK9sa7fhwXrzL5imvEiTajN4Jzrw9a4X",
  "key21": "3aVAt6EcpCo5U8DJNXM6wyiGZ7urTCF8V2a4NGSsTyN3hLU5TiU7feY4Rm1Daov7N3mEiwk1KUR2qn61RJKTZ8D5",
  "key22": "2hsVciv3TSLhmjhv4egZMAMZ6HyZ9FYpgZssLsZQmPNP3yEy9urZ7JYreMhD2G7p7pKgs12TUowhkPaNDUJVg2B6",
  "key23": "33sW3N73Z4rByyQV4nfwsFKrTZS5k8M6ok4mhr86UeQ796dVU2mgHkHhR5ZtHpjGRY2yA3gaDZQstX5T5Tc93cbX",
  "key24": "2a6nnXhb8dKFq9bqKrbyvfPTKMco1KLgzf1cVX1NZ2CnsCk57hddEMCSpVgs8pRaqvqUyxAAnmV4kWfJKf9rcJQs",
  "key25": "NVRXGqqniPAobPF3HxfqDW6u6h573KLAtVMa3z8xLZhRvL7mRhbvyUB8QNZxp1uvXsWEPGPEKyYLtq7Rc8aQp31",
  "key26": "58yacEX3DFpqUgugYBYVTR22yKTah6c6WKQEPFvpu8xB5avX1D14wFQdA1tQQBQNHnkfrVDhAryBHL4Kg44TRTD7",
  "key27": "57uYY6bQ8gicgYj8N6iKday6CEnAca9vSU1xC7LgJkGpb4K8CQLMsEsEFw2gnH9RUcrQkYcuaZogAvrzoDEqA49G",
  "key28": "4go1xDuA1fAk63nRdamFGzpZxmSrA6dgexN2xHPchkvdcEjWyi1dUrGiTWsALq7dooVhqbm9nkhoJVmaQqS1TurC",
  "key29": "5th5E6NZiGc4FPrxyYKQQGydhHjP5RFxamNZecGQb3b35BzBXP2n6Xq7Y9FKZFexnaPcmckQ6s4xYNJhUoMnksNv",
  "key30": "5ggSnT8bxqMBP35TqqccbL57VGTWCoBYsW5TAtieeHhRaxe6MmAaVQJWvjW4DqMtvUtJMHtsYHQaGXFz4JiGud7B",
  "key31": "2nnWzx9BJHfM1ZzZWaT9oCcApPSP8ebDBYGQrDmUkxymjawkRkjqs26hF7c6puLtz96Hf5kwC8XHtVqS3XsPLj8o",
  "key32": "3MfaxA6AGCEqeC17SAGBAckzjwueHF6VTiVfTBQQNZZv7PN141nBmNLEAkMnZqvzf8pRKqESc1GgT6AZ7tiGoqSc",
  "key33": "3FLxwXMPHrkJr2HGawByEtY7QG1fuDcsoLLk5PpxfGEspTYzJgXxaiZiBoLeaHNTHxSQcPUZZGm5erSiXvhWvJd3",
  "key34": "5en6sfBmHM5SAZmBRDGKC769ENpP9Sx6M84pT99Bxuyz8Gkeb9tJqpEh4Xzyq6CJnnei4hVhvaVd8LTShqnGZf4z",
  "key35": "3Kwv7pQerXfoGrAXkubtpJBwLrHSJAHTUNAgrkTzXyyz1LpkDjriA5iLQnmV1oZqovJRHw3szY3bco4wNNbwh2J4",
  "key36": "2caTE2oMyvWXfgDerJJmJzhEZqQtVykBxsfUDF2fuHC6qfW4ZigEKJB2sw3nfSpmWjhkN1NXBE67rqyfFoFo7kpB",
  "key37": "3HqmcTBwncZnsKGY1goUAAcxZkgDXLx9CzYGPtPAGnyJnM87q6hGkVU32HtrxfhhEPwaUdgoVaCupunvtExNRJKV",
  "key38": "5DiajgguCepBdJSx4mH7EdBnZLC4iUhZ4LvhRWtmjKM1qFbB9yKLfcU3FwQsAsBq8eA2fZ46w3TqSEcEBvSx8xNL",
  "key39": "5DjJfK5iB9Cz9RkonNVDwbbqG597Mgzz5VYCjj62dMMvhQUCBHKpo7fhANgALedajJaFeJpoV673hLhbsY4wSMxi",
  "key40": "26Rief1iydWLdvHjqEwmaNGz6xNNjGoT1v9B3Ptw5AxjFP6mXCFVZFTS2oGPiZUjfnJ9aBUyq7iQqDp7AZJb9uUC",
  "key41": "ZmMydWc2zSi1qgqbYFMxDAHg5Kbpje3TNC5KPhiWvSJtXVT8YuGdvKCLkKcbozzcmpD6fy8tqurAuubg2Ng8NB7",
  "key42": "3Sv6rc6eTUfuy2GmzQfU1QpMaG4BaR5hxsEgtdoSHKXxjQQ5S8bdVnKrq9Ts32aR9GNHhzbZepKuKoTMZGVALMrK",
  "key43": "4A3BZR5PR3fbLDw4qiMxgRjb6cY12JC9Xpv9BNTATaahUQheLM5EBkC8g3Kd5VaGSGjnHA25SFfywB18Gyc3UBcA",
  "key44": "oqB8vE61PwjpYMQoxFLBc4s8FPosfRmGRn9GbKxzbTuK6hk3peduNGTE58nU4ub1VxAzYbvx5RmBHDwT6bXGHUW",
  "key45": "K658PFqGvg6jdWMBNu9pw9wUum2WTrozxnPq15aMEG9AetBg19PTDBQV58K7QijHwNFWKpG6A7U19va4oVUpgum",
  "key46": "2ksAqKThxm6CiCsbeKd8u1KjTF82y1F7wrQotQk2m72R21pML7gao8dr5SKpirwBrdJiHYP79ZWoqSPx3LsbZfEY"
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
