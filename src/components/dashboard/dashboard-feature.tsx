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
    "21g6CLRy3Jhtxoo9UkBvJo2HdPUfzfK2uoEqHdk4rMJaSk1ZDQMUqFdhHLzAYa8mCZQbNiNUQmVAgnH3UCnjeupG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nacszh5HiQhnyBevdzZ9q9abaaTyU9o2i8pk9aXQ9XaRsxujooHVdk9AiBt8yCAgRGzNFX267bu5tRajFhSZ9KD",
  "key1": "3X9zRaawKD3CgkYAKeHoDDVoHwoR8DmEPCeJaaaNy71zARtTN9bsJtrUNDufaYSKnXi1FJBEKNVmKMzpv64fCYU6",
  "key2": "4SAQ4unhgtC76Q46SqK2w64hSWKdSPx7k1VspKUMctDf1xfn5iusGQ5Kd83GnESYz6ap6G2GhuB2bnKch5t9N51C",
  "key3": "398E5GDDi9YCuUtx5a8Fx3yfSnDhbX3vpqFGz5BJjGNqUc4DiqBnUR2CnTzzaDLRoJf9y1dsM57xW7VqMgYhGXaY",
  "key4": "4KgcN9cR4jYHQPh1oR94mPLbJ9xXLkEhJGPjikS3GPP5dj24B39UGiHL3mYYEQ7XDsvhZPgDDuBWu3HTqfhkuUp3",
  "key5": "5LZyQbAY35m5aUNeRcCR7swYKRCc78rUCcb7VJwmMkB4tH4ox7mVuBkpdNNLzZ5kYmSpDECyRmuTGDd5sdbd8fvX",
  "key6": "4LNk6MXKvJyLnJHsdo6r7Y294g694MDEK34dtf59qDwUzADpt7ZBTbDtzHACjqUtEFhWx8RDhBdHTvcLqzhF4EhL",
  "key7": "48HrrMdwMLQaZinUTh8vC3amhyA1DGd219VqbLbCk9c5QWber7KBTvHt3FL8Fuk8y4kobNBiVBtq8deHcTX452vS",
  "key8": "3gxR8KefjHuwgqs8JtQQ8hJJaYhdMczGH6Xk5fFf7W8gMh4EpDoHHBniRmLZL7ex5CNcWy7VvdYLFkdUx6gHYkyh",
  "key9": "2eEXvtWxFUcbdKb1YF2hTjUaXtur9JAfwse2NQ5YmBaYHWrE7Vn1yru2TWTnd7YhqsA7Sm2bpj9gmE7QzKGVLhSe",
  "key10": "rZkjhtP368DBnjEPVty2YR2WCXoG8gKze6PGEahw2g3wAye884qtXwVmhDQnTjNYbpZyqY18Z6JmTTMD2pj3FVm",
  "key11": "rV95QjgWkQTUMzHVr2v8bKLFPHkze3HXJWvArpTmve4WUMFNFTFcSySQJLwqUgnJdMwuVqNCJxfdxVxarmuJyHm",
  "key12": "vWoKdRmywX6uEL6djwSYE4A9iWh4wDvZE8Pq69wPaX5DCQQ2XTzHj6gpQU7ktqiQPkfZ1CF5DZrvFPyPgGThQBq",
  "key13": "iQuuqw4QXxXFirBigKHMDYZ6hgv9F3oSLWArSLXkcGejfGvmuxLCJ76nwKeEcEy4Nha1WUTh4vpwWYRDXuqyVt7",
  "key14": "4ACE4Kiq57a8fn8Bz1gnKKMUyyahYeLVE2dhk4183LhUAWEHbGN1Pq1inCMLd732BeseuiJVDsrB7fCVvH2CCany",
  "key15": "2gkCYYzy5hx8VRLHwrbKSayoJ5qgvPgC4KHUGVm2fHVaXaHPKq8r79uJJLHX2ZrsdpKLr42k5CSUijki5uTQWDzX",
  "key16": "5Tp4vaN6YT78NEEiHyJSgejexJaUC7ijUKMeRJmA3wuyrTXfZUzuhxLGt5ymr4SVMkCq9AcSdGwjsXvikcSfkx4R",
  "key17": "4EpZ2Cx9j3zFqN4s7LXFrqmvbBynyeJ4g6cXP6Rpkmv2tvrEMKcGjVQojBgcQbhQqYiLSLQ3XjREduVyrMLty8SC",
  "key18": "8xJRjgU2nrm3Kjp4teHEcAEz5A2VA6EbLUPF4uFm1r9Ay96CZkGYXgEqLcuJzwyi9gnR8GzryK7fcn6j7NwAngP",
  "key19": "3srg1XCfPzv5hTFCC2pK6RDeWEXuoqPf6iCUiwC5YbRuShuFYx3wZU5KcysdtpQFrVcprJLXJ4e9NHSuxKqZhEQT",
  "key20": "5a96aXaRyWKxVVjdcNaQeU1yy5hyQx1PjShneskzbFGhG9ohYSuopn4kDar5TwkqtTgi6ttEgM3xthUSuzikxMRK",
  "key21": "3zikxs8UQxYVp9mTm4PCL3d7jfEHewLteosAtHwcXsgoCQuBnc3NXs5Uf854VJno1LtFxCg5hvQDzoLQx3PteYxn",
  "key22": "4rnWuAZ6ZexnXDzK38tzX3EbFEjRy4tAVAY5Z5Z9p6Ns2tvyWcLjoJsHMe2V7Gtqgqe4PCJFZMJ61m86xUjaubpV",
  "key23": "2jc29cYCVCozXXJHzruPzkKcb6bnXDw25Fc4pfG1L1yahFGoRKwz1LERDeCp8gxwcXowbzRjPJw4ij6sbF9HXdR9",
  "key24": "3N7T6HEuMJB2CiRFy8Kpnf3xDFHYnCTYWpYmsKp1jiy7WM34p63oj1e5D4KomSZUcj25wWiLKrMV8R2kYNfkTFk8",
  "key25": "4aUSWqCSCd1cNFehzQYqQKyaPtcf3h47SiSXq29ivjVCgRnrRzLWJgVLJLsMjBGLsugVaJuYcJFVeyheQvigc5Qp",
  "key26": "4qw3mpQ1fybyBdoxhAa5DBtA3wGQC9YRNVwrhwmcF9oaRWzgd4fciz2Hkn64gRYpf52ek26XQyK85hTbY4ZRLaQC",
  "key27": "2bEityDVCdu5Kv1cZLHVpEK2nbaMyCc9gA137MiKkq3ughNb5JbWNE6X2pfMuKQCe581mfJawWUJLDXQRzfcyt1h",
  "key28": "5yVW7DJJEzfgLvFfCvP714PyueuLSnMtDFjtCG2kvGPg8unk7VYdW3HBCJPbBVeRxepHQTiay1ykg8xiKoGE6vGc",
  "key29": "FF2Y8YEJ15hRtwfvuvrS4gnX3KsB9c9UvHUT7zAMmzNhDpC5KBWxTP1RcqiYnhTvLiAkcwadxzg3Rm1YQfTUvib",
  "key30": "3n76i6UqL6nQd7qfYUWrmPCV1PLqMxeaYoCaUfLxpQonCR1pvkDfvcGTnXRugixtdGVMJayrYsKvEYLWzbRezoTp",
  "key31": "4xkgmk3a6oDjvYguPhrMU6fXt5nk3RxRwAdtdN12zYWUq6qMr7Brk1dcrUYgZUVoBHoH4yPwu9cKn4SkBULLnNbW",
  "key32": "3HvUunadMiKYS36W97wzoMQ2R5Kk2kGUL1Gwzng6y9tDRXvH5JLPeqj9Jom4U5C8aagHmpk294KkzfvNHagAsnHQ",
  "key33": "4LRQnR9jwS7U7AnDYKF6h4jGUnTm24AVvgnxhVouwdiPXjxmR4AfBrJUgEQ7u22FetjEa7rh5hyqyS7WgHTC2UA3",
  "key34": "xLpKZ1JivYsfs4mLPxDSpKtJRsvmVBjnN2W3URi4dnPHskT4m1q3T1YLAw24C5Rp5yTTd9ND1nDm1toBMAMgCVh",
  "key35": "2dVW16rFNEGDbLqo8pMqeREYTjEMoPwmTwTU7kyfB3ddvc9QLroLjQdXj7PTWhf3sghC8HvT7hjaVjxRJwoHDWnq",
  "key36": "2ntzzVBN8XhVsKTiYYs3zY9pz8oksHDpLARFUPyFFSEVJF4HKsrrMPorZU1dXWX3oeTa5AiKWvT8TRTrQPkwRFuH",
  "key37": "46gWDuYZVKmErmY2x4uc9qaoPyisaHKTM6k9UYyEFFJ22H2rCtZwrABv5m5wVw3cvyaSsqVzMh9mfmTF2EBtMpxG",
  "key38": "3fzYCmZr6h5Hy9oA3Q61iDUmfEpnmwre9MS1AUEg9aYKdsiVJyZNBJJymE6P5wpduKQXXJTJpybQLiabBHzB24wj",
  "key39": "2jvYjHQZZAKasfG43hEPuas5H2oQBMpTQueJjCPTzFamF3UoofhTYLxq2Sv2gCwnfPvGRxMG7zyrNUqLMTh3p1u7",
  "key40": "3TtDyqnZoJzbhQNRQ2utqVPPKcqEqWMUpaUKSqw6miXXijj4DTKPgRB51Qv7Q2NqtfG9vHtHDssmrNPFJ1kBVxLa",
  "key41": "3uAxykYHPnZYAy8npoRniMfYaSe7CuLH5sByvm1ZfWaLXJ7P4t1KF99pcgdqKQ6WYMKK3X13z6mHbehKcxxUQe9f",
  "key42": "2b6o5JGzcSw6VYu984qD67V5aUcLRfqGag31vhQ7WkCnSDuMbY9FPPoyvTr1FpY5uQ79XyLZJQjxb7hZG7w2R4HC",
  "key43": "2tNe9BuR9EZikdrbSEgMVCWaXJGgGHEp3EkLZ7cmH85vJkxCZDfShej7zb2NGdnVS1Z6ufiaxEwTX68G6DNxd8fX",
  "key44": "2pDLA5cJ2xBTUA5oBjSrkWLSv3T1hjTsJtaDZRdc3vqeuHQEKPiEtxHxsRSX44F8X5ioL5M91R1XavSdsMbS95zm",
  "key45": "3FHm94yrR53vXmP4XCZs8tFYRug5GKw8Qk6XLroPMh4xPZsUW4BuLvd162qHh8GVYnD9W9vfnf2vXM4LcF8cbsyx",
  "key46": "2WjpYdwjX8igecBCR7neQrssU1FLvB9wWxnyXmmwxW1FwPGcxXgLmw2ARwKHTjHrXVJdJF7TeJCWQLu4SxDpRsVA"
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
