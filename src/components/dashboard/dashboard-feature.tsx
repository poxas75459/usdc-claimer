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
    "4dro3NQjs9MjXJwg5QAsoogZY5JNMDPnhNGtMacdeYZXEFgpyCgKChG8Um7BG5Fc1L2pMTqN74m3VvU7B7eKPHBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uzt8oTX4XZ5u8WDH5YmC33Jd8aoFiaUqzGRWdEvjGbS4qvncHWdYo9JvtTZWu8M9UZhVLifssfQQLBccKmCSP6x",
  "key1": "JvDkgGSVZoCZVR6zDFDkztiq8mRJHE9NQKVbV9SjH2TXCY8ssyUkYKGfXeMwib6rVtygudxvvnvx4u7zp3MzFAc",
  "key2": "26wnQz9LwjZtQX2UC9xqJnXqk2DptL2uZx2HV1vwnaB3GADEYnYwrat9w6bYsuwNU73EkbDeUyhkzuRpTohjkHfY",
  "key3": "4ZugrrMb8ATGuGGJxWpEbJiVy5bJZf6v6mdvvwKHZSZgQZBTjPvwmmrWz7ckoN4225XXECEJfqySoGoD8ngWAD4N",
  "key4": "59h98kBFJjyaq33bAUVmshhLKAxAe2AXj4yfewQG32KGhkcctyHL5KPt8xwpn5nm9ZSksZPZqYbdjcBSRgpKa9hP",
  "key5": "2zNqKqfzFWDMKBLsujxbir1szudbbzHA2KrMs8149AuQdrzQC2MB9YZG1VMCdMg8hDRKMQgZok4pDc1FRxbfR2Je",
  "key6": "4nmULJGSviNHeV7VatcfvmeABfWuGzooWD93vQMLFD6xDNKUw3whQRtQ1TJpGDXrpGDwj8QcPMqtVNnFdMtGAHzF",
  "key7": "5HwbWLzAnDqH3ccJxUESzY3ZTaCLDWe8Nfkb2zhz7Df7ARqwesYH7SqDagNbKUM3Z9GxkXpKaHxjvX2ZFc4SdjCs",
  "key8": "W1HvwNuppCFMJ3rh75cucTFKw2hkjrGu4CoUUXtHYArQevTYrSWhQ8agSQHGduQ62i6fzF4u8cdjiBdpWdYdXhZ",
  "key9": "55ekC52YkGh23s9dUbhHNW4Fm97tojJ6ma6tZwqB1jJ6hTQwyEJWsqC6aWtfPrvCfakjwhmUaF5gsrDmW9hPNjzP",
  "key10": "3tyTDX2qWrY7yGuSL5eQKtEHZUyyLJhr7B694bfkYS8NLqKubyPzJv2QJ7ZwVzhZh1b9TkWpBTATPL8u2FQzAqZT",
  "key11": "51NZZxwwKfS6hrYqFhScwJPr9MEVdfhhNMvXEsUYeAaSiogsLze8iAcEEJC2y2MRHzJhqvBzAJFcm61H6d3KBpse",
  "key12": "jELwukCxPPQ3o3B5PHzxgfoR2W55SpVVaN8zvfrJf41phNJd3oj4WYSFoXDVBHCk311W5URe2Xs3LgCp68XTkxt",
  "key13": "3EEGt1Lzre2DajBmk4UeGKfyt1xtpZgZq4G8SNRCYb8iJ6ghnu1ksXNUAJLok1RaxJCJ796aDTHnjMv9BtSfwr9",
  "key14": "56dSLk6wE6u2pkcsaLENzhnbGpsjnkGXfJdGafR5TuV8xZSezHeVkzQade28DnmnFSBFniVuP5iQ1gVwRBvxFXrz",
  "key15": "5MdaTnKXuC7Nx1Y6MuLVQ7vPqeoZHyzeoAFdupMaiDDhjrkvBzzV9KLW4vKjEf968gpf39kR3mXSxC9rpsWZ2sLM",
  "key16": "3LaQR76woMzvNsiSvLn8Pt7FnFegVGZ4VpurU4FYVgmP6TogArWYg8WKp9xRZP5m3KANdWDzR3bpweVy4LUhsgtK",
  "key17": "So9Fybja2eocHHpiFmVefxZKds85MdQkEhi8RPtauK4jU3TErVhbtaurLxEYJoXdY68qKmSrqtgLiizk7VmCZ2C",
  "key18": "5x71aUrgYuHCEoawndTfXAKgfhnfwpsXkMkwHLQf3HH8d3hBt3wPETafCw2u4qvPioLx9Tr3ZHrhgkrFsphMujfR",
  "key19": "4ohy3uBZQRHqLBMRcm9TSgAKmJ1EAhtxxSoR8k587bcwhqhL3u8N8qZowFtpK7DS4U5UF1u8yzbKqrT6hwGdXytA",
  "key20": "4qKvaSSyFpNZ9GQu5ppXzbeeNKesXTRuuTdedSgjsRoHJQZteNUQUYqZ3PcA1xrg78WxV5X58wMrchczbjFfpof2",
  "key21": "2b1PZzpBbeAmBAzARFYsRzRnofr9WN7qeztT7Lhr7ne5FuJUCgdnrDU6iohLGwbmPnbkZjvRyDVFhJT3jqCEyM76",
  "key22": "3QgwWxu7LPA4yWsy97kM8cJZSHoZofmfrGQoj1siiwWAoSkB7898w9QW7ontgUKoaCnbzQ1rNbU2WDSpRcCzpDsp",
  "key23": "2KFAcNgB2hpxcTKUzrkrFJ8LhNL1MbMfiKHfYpe1boCcSFuecUuMmz8UY1xew769rSyD3Z6pufSuFKcbd5udaKGV",
  "key24": "dQhRWQfBmY3qcT8FCLEW9TbzgRQ4tsb3YZaskGRT5e7i6GjjpPACUVXVdPhFdNo3Nz7DYjx6sU975mb6YypxVKU",
  "key25": "4iwV1FE2CCt7PNYNYzVRgt9rKPzpsPiFuEfvMJyTEBBA7XsvcyPikd2jgxS5AzcCthTjuxG1xwr83q723PFKQ3NL",
  "key26": "42BTMbkd1H18Hupo5VRY3BJWpq7h9ZuEdR9GDeMdULEf92D4Ts9ai1pu2oEbioi4yi7sQzpSGqoaTn6iWyRL9EnP",
  "key27": "25bAvkrvp8VaFBHnMtdq3Q6JdiWi6UrWZUp36jgfTb72dRypp2GXARBFX5ntmYjWp8zAi7CwzkAM4Z9srmLTEXwL",
  "key28": "25qvQXPi3v4ADGx7tCSzQvcSdti93ds8Q48EfYvpWJjT5N8tGNysiNcPGyZ377r8rP2byzGoY57VsGV7E2tkHHsL",
  "key29": "4S4nDNjJii8bAv3q7CU8oEAN3GLjwnAPFQ3D7fKHVRRxycacAhtGpASEuVnXrGzsAzxCJzygRN7vDMFz1PhEDQkp",
  "key30": "45KbcuhXvKfCTgWXLgdTkiLF5BD3zAoFN1uRXjp93dWTfNihVe31FjcUm1d883UZFrCokqoPtymz15MM9pFue9Xr",
  "key31": "3ZsydiAVnDv5brT8bjZhCs2Y9xZ9wno8aPxnvyTm752Xp3efwmf7mHmEBGfr8yteisxmy7cJWfcs22Dw8zK2dwDo",
  "key32": "2ScjMZWu79LPvns6TosuVf1Eqa3Yrvq59tDWMzsVcWKCRpvT5ffC8BfJdNve73n4SUNhhPG6apC7sEP7tdmG2qoF",
  "key33": "3gRKhSnnFsvuAmDYUGiHhLyyW3Nh15dMdfmuaYy1NmuHhTmFPfSGA9BcDaZ4fEDMSQxE3xZEhSkPhTpyVmLo6E5c",
  "key34": "5A9LAQT9f7FUWbssb5QMz7F1xzpzVnPE9PBpTaphhCmSaCg7pe9aRuuZLTVcQAmBThsBmJ4Y9c6yDUAR7V4QCk8A",
  "key35": "3GziKxMpJu8jhhv6j3JDEy3aid79MeVCUyfifPyDqYdgmo4Abf3PWVgcTEtasaeYuwdgZRkLbjPHzK8TUFy8A23N",
  "key36": "27vQDeeKnu7sKsZt3TSMYdLN9gZNR65FphX9oBoURFjFWVUtDULoDgEvUVnuUh85bCjbJbWwuuq91hqYGVow5Ahe",
  "key37": "ZwJh8WcbsHgAhXhm8Nq9zndgshswkqJAxhjdSnMjemxNUP1vjapSTwsvirHXq8zma9nSeSYoLjE76mjsVsFHXyr",
  "key38": "4qGhdoTdLQn1N7ZXhQjUJHdvy3JFKkBqb7PnwXZXvt1BwrhBzvTBVMGANe1TFcvYZcGu9wxB3pqAWxzo93JyZaM5",
  "key39": "79YqKqRyxw9FhYbzGgvyB1R5idWJ3Xkx1aGbPeADxLfeEZuVvte66Xy5ZywZoZFs2pTjReaNkiNwjWRsVf6PH8d",
  "key40": "4vZAVWmMjUFwo7keBZtqLX4ggUongVCXEWBfvGrCXzUDj5uyb5GYbmjFtxhU9kLUdq5hpNCTGCjJHiM9jKp7DtPU",
  "key41": "yP5DXAJye28vvreqmzi7MDanJajmWw9K7W83mzdFT93YoRgmGwzcSpvWLKk67agyRvFDBjj1j6ngWVb8atzTHCD",
  "key42": "gXgqaEN8YtTWv79rPg7gq5qbCbJaTuACZjTG21eGh3pzaNpbSwHUwW4Megdd5cjWuUu3YLyBD7Z3Ke6A5GKjgG2",
  "key43": "2NTSyhjG8HJ3k7cFf6bBjbms2HFvtEy3jaYeX2MJjGgrrSKfoU7PMCGukgCTrGyWPLks5Z518SL8Gxtuop7qctXi",
  "key44": "24TtmCX72YBYjEL1nzUHB7egi8QE3BUxL1eeF8zD2ycGrX6A1pMxaE2JoLuMHrdssUdbpXZ8E8i67cTrBF6mG14k",
  "key45": "26D19AzRMEpLwwA3Vi5E3fkVHxVrcNYNW6jAsL7nc2t67AuqiusVs89kkNfnGAqx2s7XZd5Eke1WJ4bBi3pSVenw",
  "key46": "5GEXgQWoGXR1FZAvH6nUYLgfjrp8E2XeX9kgPcLHwkfvkVa1r2LGDynT26ykKBNtZZA6bwnsk3eCWgvgm4JmPuWp",
  "key47": "oP29MRvgfUDLvDT9gzQL4etQENJsQJianypiNCvRVDDehbxqWfHgCLZGE1Fdqp8TYYvBynn1EveXzpLm5QmnU4g"
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
