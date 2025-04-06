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
    "WoaL5zXKtd7hU4DBZw5XRtHV6n9K1BGn1UVoyUf6BXTPBfnGzfnn7f4n1q6Bjf2RhVT6PAyNvs1YNaxwNsEyh8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22tyQCNQS3CRCUG2A6VvvEaa5N6xKrh6jWw2iDLdanf1JbtUvZwqf8KnYu2SBoSRqVBsUm9cLC4xL6ksvsoR1Zhn",
  "key1": "5yjHfo2L4e9gosBDKg4DPJ4kf7m8LWRFEFBCofkh5XYjQ6vY7Ebp6enCDnEW1QENLgSjFx9kw272TPvbdaV69y8U",
  "key2": "42mfztLdFmDff3BjLjeA6z2EhBauLuYpchGUjEA89Emfm8D3APUxR5QvhFNtwC5xY9aNUHe7r18jPF6ETTxGhtaL",
  "key3": "24LwFangmFYttnfA5yjg7c7Pdc5eiUok5cLRTRsEoUE1zMvp9ZK2txs4iL7W9XsFsuUah5Hka8aTbDR2YkmeJbtX",
  "key4": "2g8UTezuk6SBS9Y1GyASkKbt76es73v4bFPyamSAWzowAJpRAxDFAAP1GcjpQv1AyjxNvUCFvnhkVwrufH5z89iE",
  "key5": "3FRkEdBEjcyatUYq79uQpQSyV1EpSuMHucvwryaCkya84cZz1gc7ucGNU3FBeR7szAEDWrBZW69XsUiGzRa33w7X",
  "key6": "oqMtL4GWbRtHNDGVJSMof4VTT5sFDVTquCzKKtnZGjtaMg288QJaYRyfv8zcAg275i8yBRchPFmpZfkS1v32Fr5",
  "key7": "3FgwqsLw3bcMAAXN5RtBZx3auXqrrkFFUz5arNuJSNdYGESSoo861ckR41hAR2rMYpdtBE17P1vbuz4QaM7FeBwe",
  "key8": "2TJMhoJvCQ1HgrBknjNPuPdN96DAVrjyRv9HAmKHs1Z7fJobQPwDmSNS8s8z3T4gRDmmyBbpu3wF4ygs17baDpJd",
  "key9": "RFsF1osapKVUhf1GMvCN7cXn6SBACMfXAvgfzsGdgRjtVRBJEdLGtvKHmh2CzaEvZ4bnRtoe7qFck4qJ4YGNEon",
  "key10": "2YUrMKqz7BAo2Mvm8zzCB99cT84qsQUA6mxfAosRTSJ7FeV6XngAAwEaEjpJoYmePLj4sS3scesR3bE9FJ84v452",
  "key11": "4AMik1N4urFNHo3QHDnTv6tukrLYxRH9wkgxauUR72N7AUc1hhmcUQDWAcfrK1c3Ft5ErFBwVRt11JVQ9g2w8nkR",
  "key12": "2RoN4Kiiz62BYgBejMoUk1GZ6dkxU6h7XYs6YrBTru8kxjCatpT9yKx8JNBrP8KvnNb2bihfG8QxcSFzfWW6jT6j",
  "key13": "4DZz8JAwY3W9qxVuApVyomZbWoWvVcnbuMoK1vJsC2oZaeRk3cuHJJCoSSRCnsF3fns6VEyWKHdD9VLHryFbFhVy",
  "key14": "2deyM6m1iLJAiCk1KURngbfFG96Z9HFbAoFAQGLAv6FiPDTZtHCmu82KYDp5Tn2B6oujakpEH3DwgXxrr9Kws3qk",
  "key15": "32HzBMuCLDE86XeXAKK1DdZqzttvQtbfkGZ6tUAXcKuUE3jdiSpMGYcGU9XiGDYytXL5uHtLup3ZSUNpQE8VcygE",
  "key16": "4b9PikpjysVaakhrTV5Sith9WBqSLvjCs7hy4tHBWunCDZsyPhHc4ck21HVoMe4SnUxdzM4GvpBuqNGgT46gJVdH",
  "key17": "mbgCQBhMJapvZSTb7KMcH9cEti5ERwirsJgr9eUSoggrL9JSEJ81o3QnwysaAmgK2uHbAcgu5sKQCSC85tmu3sB",
  "key18": "39M53s5QF4YU6kJgbzivW1y66L5boSN5UCDdNMs2DhgZmcveo6oe5cJJ8y2cjJwm7yTsVPqAkiEh2bLwyLXgWHYf",
  "key19": "2Ppkgg236yU7si3rz9bw6Dh858mVwATSSTwGNJJfsWeVNUawo9UXP1rmZ5okxTdsbHmzDtck5eU4Z8t5vhbLq1AY",
  "key20": "4bcif6usBnTHFYjJPpTLcC7Lbkwovezjui4GVUXFPGqMXkY4Y8khsdsnXhU6AcDKGxUBHGBbsSNeJM3WiWuTSWkL",
  "key21": "5toxJhDfK42HEXfBfpJgwAYTJYjcE7cxQbZGHVMJby25LGhC2H6s6auEeSKwM3DeqyKPZSFA2BwrS7TZRS53PShh",
  "key22": "m9wmwuUPmY3En3WVkvHovGdncCug2wUiTxxqJ9PiNt9E8iRGK3jegTSoPGDgoVLx6YVsb5tDh8RiJHgi8LpV7LB",
  "key23": "7yfAJgfZjSiSeMFnCw7L9xQrboN4yTyWPjHgrQtFerojgHQRGXDyevNAKMAQkjYJJJmLMwarFBmBjL4N8g432Rp",
  "key24": "5VXCEzPWufG7vPN8MGkZ5voBSPaeAs3KwQhKZG35y7UZps6boEKEf8LsAiDm5AaMVwzwZTPkVsU6CeVHvmgZD5K7",
  "key25": "N3W4gvvtoFCs18vvigdNfXv2wpYZajZFzMVyDAm8L1uTWZDDcAq2UuUXGagASFuwBr9HjwEKgTgmZXXfz2fcWMP",
  "key26": "4d1pYBp7nNCwvR3ziWwRSDYPE66YTB3Dn69Ry263uSZC1tQJtdhLkSVFw88gWPiCAJkvLutzH1aToFfbSx4x3Xj2",
  "key27": "3u8D1NB9BZs5S8pk9k1ecZTDRoE6TmpVwvRy6TuD9Zx6VUxbR1Rmx2qmdsaUMEVkgmjNhAZVXKzFnbrsqfbgBsxx",
  "key28": "5pw5ckfm7bx3hNQue8bdWr2L3mm6WBYqmm83613ajg59tiZsF6YgkeKtjQcVWwX95HEa1F2vkT8faAq7HruoAD3H",
  "key29": "48UsaTGsPKvkG9YXGKesNAqwbPcCQ26GhD24NBmhfAWUTnhXedFhqQjoSrAji8gS7PHdLMyeNbwcdiB7FhE5BHBG",
  "key30": "2ht6HwtaZaaJbNmPRe1gZV21a91AS9Lid59QAQsFjaJF1gp4TU7XXTT3r5d4n3JYvbbYn1N1BSAbkNibd4HXLAg2",
  "key31": "2RMJdnnq3NimMHs7SYvTzMTWdn8FdxfNarn6qjPLdcBfGciD4pekST99YbZGUES39jNTKu1wd5cyZyXVxDNRY1ur",
  "key32": "2g8iRvZ92mTFavogxURhUAZi4wQPWsRxWLFX5JPszTidGBESD1GqKJ9Ffx1NZEboRnk292qpX9f31X3DiTDwbfDx",
  "key33": "52vDyxTw3H53taWrsM3KFT8UmnppsJxdjYXkwAr6e9674actZdQfYMoksciLu5gi4W8KYUUpQfdmry1ZUcpXsMsT",
  "key34": "4sPcXmZ1TutHi3bewDSw2FjxfpEtkWwJMjuf1RsxoZdethZyNexFWwWAsyW842HoC3o1eZ4v63GAfQBWMBjvreCC",
  "key35": "USiRDT6aiugKzLhTXCxEdx87AikunUF7VnUdWRQK6J2tnbp6ta1CxEi88ztD3Uzza5NcWXEUx6wvcC7yoQwN7C2",
  "key36": "2ZFktLRYs73LMaRMvXoUFDofV9sEb9t1WsVevLahKZz6UPdaKLaSkz4hzXdHCpiDA5mfNM3A6v3K3DtAnsKnAUBU",
  "key37": "3RNKb8Th5GLhSjrGxHYoxX3fBeyEYjZ2z2iH57fmnTdjTjsWUh8WHLDXDj7tR1pm9PzxbZqxQH8JHfiCquqhbX9m",
  "key38": "5bBR69xY1ofcHDBTpan5uWnFypQ5CFkax4ZeR9iLXbpBDtEXgED7N1xGWsY7H6da8nLBDbUpFLzubxe5C7bx347B",
  "key39": "3DJGQRGobQaTUPYPVr1CjC2zstgeKtGN5ZzYqhz15MysQmhBrLaMdzSpHf8tGyZHGfTqcnsvgYnuwGXY3BA24CqT",
  "key40": "4jKfFdBLbCiR9gr1qpp7fSpSqagmAMsuHV1Qo1KMw3DzrEqyxwfrBHeWaDcrmcx5zfUfeCwKhDBPoKifWnvtV7ut",
  "key41": "4LskjCbgdpVpKLXtMvHX2BqCGqwzTvbQ3vcu5jCAmx3QhsN4hdJTVUpFuREekECGimQbfKkupGjvTsESEZHpGGyA",
  "key42": "5a8YBAF6VDxDudUunZBXE2o4js3TAhr35gyuisLH1CjWEJYNAK6R1bm72K4ZKWvQsfQLLuNJETiAz7Rsrj5dmYsM",
  "key43": "48o9aH4Gn3GRrqtwrZNKRGotX3AViG2j8HhChCXnQUnapYKPQAtmFPhtWNQVbuCHMPzDp4RqsJxxMJ1csKJDgts1",
  "key44": "1icskyYmSy29NXDRx6xfU9ah358eBAwheCHp1JWiL2JjU4as6BSdLCRWCCoz3C96rrjxK29Rsz8fTtPzZzqUBvQ",
  "key45": "2tGmyKL5eSTdQov34UpYbHYUziC6NXf1DYZEViwGoWKeU5DiL58xKN6HKFC2BcsFk4GUt6fjPyYPrPdnyywNBWRM",
  "key46": "64aBaTBZ7U2N1W9A5mc3wE3fSexmBhTnumeddvdBz7M8GwJss1X44SeKm5LjcBbJWTNuHcAh6cECa1kw2NEEmv6J"
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
