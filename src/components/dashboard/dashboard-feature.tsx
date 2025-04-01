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
    "5LnQnWBfgWxdedNiGbj3FDUjSSmLRtzN4YVB5DCBZuuQjzn7M53JGckRUhb73Xamqd7q4GTdRRxNgsvJFki5HaL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HZwCzGvB4JmmXrTqu7P41n1ZuzSkKZic6egKSJRDSENkMpTaWCkEJjNGKHkph4WW88iundZfd93eU6HGU42auhj",
  "key1": "vVQ98nDNaCbG2TH7S2hWgqpixfhdCS7uLM8LvbBsaUsTPAf2qkiYDfa1hiFWsvf57vjaTKNihERxnwX9FnpgcMg",
  "key2": "4ZsinRDDCWAh2jNiTewcFKUvUR5vq9uB5Bpbd3RPnYAMPGvWUShqSVuXNs3wc4tY7BVH3UTfuXqbj8hd9MUpUGA",
  "key3": "4ovJbf1y1cCBSzthCMKPDYMQcEKE6T2fWiDUAAWJ1UF9K37TufX7UpQcG7LgGkwuW8CHP4mgySWxJgFSg77Z5TRW",
  "key4": "eecsyWQQ6BhbLjakaowXwbrRcF3UNGZdW7bYowzxuavitYjR9NLbeCDDeSAQHNKKgpGvKn89xVgLcjHas7u5S44",
  "key5": "JiEGJv59wcJme9k8GPxCQmvPEDkDGnK4ScMNQsEy3EYHPb8YZdPZpDNTm6hvXJaS154pw33B33bhhijD7TkpDNo",
  "key6": "3uJLfCgwmcwQqQqivn17RMiVF64DUKjm3EN9YJznC2Qw6k4UgT4NAdkmGvftAvH7dNRVCYX1UW3AD9zqHM2wW5ck",
  "key7": "2EQ3JpA4kWPZhCwvBM9XNDPCLW9rykxa1Tk5GK4WgCDchdFmsbsamcCkzrMVxt4c6C6DKkpsqgWTkDEacFMQ8x6d",
  "key8": "7xSqmLcqPr96wo51uGvbfHEdHvfYRdLwgNaV4Hfq4Uj3xChu4jdLLDtY3VSzH1qvqPP8PNXyFJB98jPPEsznQjc",
  "key9": "3KDSM5SrEHNSrBLmoG83MNER4gZ8DWWoPZRAn4hTE2NJnHBF7rwy7kAj1pdQBrivxaNYTVt7pGeQxULeLidUgvAx",
  "key10": "3D7uSr7v5gqYMB414yqhmkF8sxxnongWNMUJCz9V2imGF74aKPBzPZhkukdvngvoEPUoqaSrhyWrbF1FUybCZtxY",
  "key11": "y7jZaZUY81JHBfoRqKixagNzNrwfbNgAj7tfqGCZ4cf2Vf1jMNoEaD2J5uJ2AFxSPkrKYxwEijfRhMGLiGd6XCX",
  "key12": "4FL42XoqMELFa7Ds3xWCdWWYw3XnpgiKf3VRh3QAtLLhmsRCSHW1XuXhuv7cBrz4cRPEnf4ZBBEiSJUKQoKvAthH",
  "key13": "5Y6XPEPkBMaL3Vg8zDU2b9mXTaaRPsjBbjS7qwXjZMNsgKE1zj85kAMVrsUtTT45JhRY8E9ubThtts9qFQsv2Qt4",
  "key14": "4vFXhMPvdZNbdkCVxA1EPYanY4NUVSkZx2CiafR4BCocpDFfcNWVvzi7ZMap4bxrAS8pWhrW6yJovr9KGRtc6iY5",
  "key15": "5GAwVuBGNpjBncPXNicrZAdgFoU9AUnFFewYdYpYaGL8LMHvQeuAwyLUFd5gZJvaLtX3jbYXBLXaTDv2zwrMFbgo",
  "key16": "5x88KZ6TZCdcXdJzBECf9iiJdsiy66awANU5727cT47kdDZKauH2wJ4evLiSLwcopgqqd4MXG978b2Ffqg8rnXE3",
  "key17": "4Wjo2aXHoWg6v9VnpQoHMa81hhcu4Zxq27GJym4y3v1wGBBgGXH7KtLtLULKEmWf3Ju8tw2oqmr39B4QrHkkt45h",
  "key18": "2gsvSSWDZFjKZyDSrEuoR4FDcZAmz7n7Zor7AtADmvAjtPwZguxjjcYJVRAJMsjYZQQosg2DWWULNDmwQ3UFCrXu",
  "key19": "4DTBLHfvPZUMLKyPETvBoxB4q8SR8SVgCxpPebb9H9hdKUHEQ2xqojXpnW1jSvMGpZGmik94NaoJtgvrgEK4iw2m",
  "key20": "3ZfCFyTYXYEabdqGUoP5sUpw99sCC5kjenDcr6cbN2XucTNU8KSpQDeeAjz3LzPxeDF6GuBWdaGHrFeDFoVeEoqz",
  "key21": "3FPJrMjBv2gRbAdeF7RJyfmBNeuYxFGvfW9hGoJXqyjUCDL7yuqtVDjkj63Dh8Bv2PNnqHWDv47wsHf4UdyYDQR7",
  "key22": "5ftAgu46vDeNJdccbTaX9Zv2qMHybmjjq2btFJVACzt3EBSkSHq7mo5cZgNDtaYxxeXcn65LcJvdof1Axf34khWU",
  "key23": "62h2p85kwfndxVdwfFQ4DKrkKt1WfbtqzeSEUwFrqUWcSfAo9v59SBh8JKTkozhvSjeVBu9jNxFohzwUoTYyKRAS",
  "key24": "3oZj9acC7PajMAhewA7XiX2XyXDGPc6uqD28zp5DC1sTLyPqnYChXQLHdDuKqhQvTRgU1apWBhoXSAsLi2RLQ89Z",
  "key25": "2o7dXayP8FimLKmB3ivavTMjnr87wfh52xwbgi29Ry4ghGe5ZiJ8Tbc757pF3Lvn2ry5HGU8EjS7FeS5TNdr9TGL",
  "key26": "5c9BMabze3vP7zfm3vQZMDkAJRRcHmhffZGRS1te5bBnKBgo71xNSv3cRZmoQ7YvYJo4wvGrkQJaT8fKWkSM3csz",
  "key27": "55i4Kf49Zr4q3YuLbkhhccRLKHR9S1stw8WtssWMyLGtP51iNPCG6GThZFYhxeFd6XgV7R5m7RhmycfW4MFut5aK",
  "key28": "4Vn1c7taUCoQZnxNBsQmGgJeHbVJ2m2QG4Q76njM6jhMDqsJu4SSRy9hz8689qaQxkvuy32GhRfyYSzUtRuhSWou",
  "key29": "4858EnbkC6v5cW8zn899VucooMV9Hgsj6HkQsfwvX4qW8zqdjK4DnNJuTp71KEm6F6iidMVmgwJmreb8NxqbYj9G",
  "key30": "23cAQ49omuaow8JYCaFmcfiU5R9JGTqNc9z8bWhFqkD6eVYwiAnz9TK3XaX43yyUnbgKPoK6jxHwrzhKUK1av27G",
  "key31": "5G2TpMWsXVHwqnju6bUQKxCafDXmmQhb7fSA2gQmTFGRFjmm51GgjR36peRBoHHf8Rv2V5HmQryM7T7gGiVzbKR5",
  "key32": "4DfCJYE4B9RJ6H6Ago78roiVi3Qiaadunv3esoRqMJfGtA8noGZAD3L4SiEN1JR26VDtgpxsHPMghAJMWepJT7bF",
  "key33": "4wUk38u5i9a7hkTeRoj3orowxrQdfokgbmyixr5PsDvCbgVmFs7KnVGQ2DMVQXLJ7Pveiis2FsNbpf5Xx7thw6Kx",
  "key34": "3gzy7qqfPtw7unAmnFTFzeEiiCxtY7BqbbkoP8QG8Bs44XEmnHsLJKhwfDFDSdab7Q7QFbdV4cpwsDEHVWL11wPS",
  "key35": "3XgturJrxfF7aJgVUHT1omboAvyzXPPFopaULvLm8aHHGHsbtGiEMGd75FQeXSc78L784EArPXuaM2j5snyGbZpF",
  "key36": "ZNpaoPTsqzx12SN4vkJHPmAztnBn1RBTyTmhgFywUf2R8ppRmV4P9dar1k1BLq94LDMvtmJsi3ERPhQfwwohSmG",
  "key37": "2eZo9U7hUJs23Ya4bomXP8hRfR53GoBGiVrHd1xVE2G4fWSjjx3aad4MSqJm5Rdxzvoygfabd5thZouCbV6RXubf",
  "key38": "3pY3ifaed8few6qam8Cx3zpQ9A2pJvEbYAfuKiR34v8ZCgx7J1HyAmrQVPMccycWGGySLxV8LtBbnWosS78xSuQb",
  "key39": "42eUqpj38zNGJgt5sfdYLMg9BuwCwJPRUs67wuAf49TuhnBeXyBVsxVmByyobZfZ9Ct2JXPaD2iR9DiXaJEj5tXX",
  "key40": "VnnhATfgzm5VXWegAqRgqcEd41oMPnjj2bKZU7wDHMciiKrU2DDtbH1W1yzeVFZLA7MpJ7VcMsQCKAJUQDkwZkT",
  "key41": "62aaNjHL3F4g7vHfMQWZYWKGiB4NFsQ1JdJWE3DM2YNhYVWi4Vai2zrDDRmzLVanL9NqoBwdEB1TQiAWDzYPx79b",
  "key42": "5x2rpbUHwCxWmCzPJixtbLjAvNjsx5JwZ8mLV9fFjLGmqdNoNwZXENdPPhsShAquTajQo4Bs9s65cbrZ5GCL45Nk",
  "key43": "21egX9YATfZVDbuGhJgbD3q2KgKbs1q1hCk74dCssRNi5MVGXdn2LBVgZwARvCSQxZFy42HeiN9yEyuKnC481DMj",
  "key44": "2tcLE2rrE4H3fq5zUgHgazVQddtPyRSWR7Z3gUdz8KMagfBS4h6EomyQZmGgcS16opA4DWPZhxWbMzwbsHzhkmue",
  "key45": "3hJ6qC5RRWpRtvEWKUZV3GX8aHcHAzDKJjNpeuyJL6Zh7Tkaig9n1ikHJZPeFQx5qP8iCQoDTRwhzWawnSaEVTNk",
  "key46": "3BMQ7Xq21zq6tPwz8V36pnACms51impP7NuM3B7cgrFeiLRWW8mfHYAsmDp81njqP3zsErQrMQhTg7snijDiRxLf",
  "key47": "fJmwrWfxmwTS8WFhRpE1Vwd4urmpuXzZYK2VVgmZbYcPhZCrCth9eDfdegWZETUHCRdFJLMsK3QHTChEwJvNW7C",
  "key48": "34NaV8gGpa46Vmra6V7Fj3rVR69615Qb2npie4NvhYLSffLvAp4ZHrrSaQMi6tK2TukjLNJd67Qf1EB4JpvfCgRi",
  "key49": "4axV4MADppFaH99ZgQ98JXm9Y6fEVNJfrSkkp26KHRxEBs71Ty9uVR6XxjDkqnzzXZSHnuhGo5vBMbvrWWB4SeaQ"
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
