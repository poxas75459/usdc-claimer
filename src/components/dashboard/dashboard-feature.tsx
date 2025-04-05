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
    "3HdR1csV5X8BpyPBbwYWn7ad5NYTqc5CwE5KeeCzKTuDYBks3p1TCmmKcTSZCjoVHVyUWc43LqkHy46oHHnHBQbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5twDUT4uhRg5tBE9cLQRX9q25SrT31bHq4Qg71yuPpnxicC1tPAMX99FEtqjDm4jTB8gkP2ixyhSyGb1AetdGREb",
  "key1": "28Upbi2DPE6e3JNbzGCgCMdjWUBnXZDZ8J8TToDowRGX1NqwvW6N8zKCWk2mnCLu41JFgpJXUhXTPUNsuY2XY984",
  "key2": "44EqFaNvsWSQuFdto5NnVKegtxgkUC46yGy41txvi37PxVK3dEdXP3LN2tK8eySgbvXaLnJDz5AeQAHngKhnLh97",
  "key3": "3dtZ3svugR9qhdSB17mogPBw1QimtgqiyDENP5KpvW7GWhzha6Xzxu13B7BYuagxFVe6rDnVnqqm2LweXwVnwoKc",
  "key4": "Fkdx7AYqWC2Ybtz8V861ajrMBmfTJHR7qyqFVzXoqKrWH26BJRYxYmXW2mg7xd8wyJtDGfHTLJa8otLGZChTPdQ",
  "key5": "3nHYECyRq54jytxEW8UoGmD9WnBPnFSjc5M5GjLxdYUo7rfx3mUpNa6HaGUpsGGAC8V8mN7bY7M8zgaGxb3BTvHX",
  "key6": "5faBavg2tExq67U6g5DyEXozTC2rtUCGXgTbMugPDKv4gHwKENHCUxv8MhmL5xsSZedW3xLifENzh9RNtbT46J92",
  "key7": "E6ZPHasK2cyX432HbMSEiAJ3vYqZv9pw96ywTWPT39doL3u3A29uBxjcUhD2SAs2Qv1Pvb1RgXz9kBCwVPYrgw1",
  "key8": "5NQH6zu9FZFJV11Y7hFiAW2hTPMvhpu4yt5gZySkmQszWwJpi2jetRoQtq1ZZSknxfbfa6LEfZrVKBoMz92bHT6E",
  "key9": "4LL1g4WqHApEiifGEh5gRDJPwdUsG8NMysnwmNrjYmxcDUhYmGojXPrvqgKP5mxR3hfn89nMgFj25UTUQvMsnLns",
  "key10": "4fBVKcqtR3dts62nEqDCJutG9hmuTwxTRUgGLn2WzmmULoV5W5iA2XnrWs45icEtayid5uy8xKbRF65wnQn7uATa",
  "key11": "4bBJcbXwUxmJNnD6jE54Ecw5t1SSgUQsDtuxpRZKH4mGVQwt22oCVzJPcyaEepEm44jkoMCj4aqyPWF3fQ6e1dz",
  "key12": "2izyAk3o8EDY85B5WFKXwPbgSZzDfG1oTMM4jwjdpDsM4k4ZN8gCzHe5PS4ByzqprabGBWz96eckueeRoqH7KJHB",
  "key13": "5CeR5D9szL3KiJM2sh8UedMn4YmosW67iM58ntWBbDeh2FeJzV9R8weRj3t6CyYQnm9UYiwwb94KdW9MLhbs7jTN",
  "key14": "Z5xQ7XRaTYvHpYv9jsgY53atUzgeMNbWa6eqFyqFm5YdEQAgpev8RSziGSt4pEPoRTjYFVDXXys57iDnPLpxChg",
  "key15": "4whiK1yMXRPgWNhzX55qn8jizP5moTHPVoM5pfbUo3MbKCwBjLkaFYiwZaJuyKVbk9WHpMVcTmdbFKcLukcMVsgp",
  "key16": "2qtpxLSiVtrBHrztXQY2f4dRz6K85Jie7RU4uEtrjC6JeBd2q4ya7BWeTRm5Nvd8QCf5WsWGmtTNGndT8VYchrUJ",
  "key17": "TgN7kLxmofWx4nUPfxPcLZb1Mbkj48harBYmNMu5nnaRgjwNdhA5eWP4vMid6JGqcrVXTZvWNxTyahXQQpe2jLw",
  "key18": "2zngEQ7hPLu7bt7StpjvQnG2wH6jtXsPxj8A2Rv9HaKiuaavfrkuUkQ46eD4YRvE8DcG6LGFreydv69jvenzzVqk",
  "key19": "dqWaJdCw4T9wzApazDdjQLKEYWd6xbLnSZHCiKSieAGkX56brYSbZaVNoEzDfFhRwBGXabVrKnJnmHS7U6bWdzU",
  "key20": "3AaRAQquaaE1o81VBpt1qeX3166WxZE2ZeGmvLdbS45wzVFSmZWSwxAPvLSPfR11imcB7Uaxixa1pEN6JVpNk14x",
  "key21": "4Ybj9ksFGnNT5BtyqeejvFjBnEazPS93R37tiShAEZcvGmgwbZ8UztpwE3R4vnCvoXGUS9Z7aNxkXsatWXAmPawH",
  "key22": "3uBH46qDqJhAr6qSaNrZXq387rEz3Xk3s7zQahzRHp11CaMhDUK2QZr2RSHGpxxsck13xTsMHZt9RbafzNcrTU12",
  "key23": "4nqJ7Qhu5SDr9uYHbFbi1YVjBeqy1XNtsVYY288vfvxRMEEpb2EgTNRUyvyJq2mK4F1Buqbvy9aNtSbwfKUUXwdQ",
  "key24": "5vytBxMawGX3kmnypWbX9dP3atLJB3oVTwBkZNL34XMA8Hr8CfoShS39w8ASzgu5s3r8tps8NTd8yzXyW2hqeGcf",
  "key25": "2mXYDXLf8PyHL3ofQWFXnfua6LHqX9sfvVPSCNTAJ85DRmzBxnAG5SsesL9JkKhXyhS75rmhADZJyXCdemTQpfoP",
  "key26": "63tSHwdhKivKq5kwGCCZkW75TXjzmZGj4EReozR8XVhP9FjmJMCU8na2hLm2mDHi2Mhi3z249QgMrCmetYEF1ENj",
  "key27": "apYGNbJAfqHafyp3GN3wgmoNnCrWr5M111ZAYPhDRfR9mjZPupYVgBY4RDPrgEiXvNPMfdHUDViT6p7CKKfg82q",
  "key28": "66KrePNFGVjhoBMJu3ZDEU5hMzcvsxhBmGcaJ2LxiposWF4jGAsmaxPNZ53k2Rp1TNeC6mBt3cKLNJAbWCSZwHQg",
  "key29": "AWaXo5KLJsrY4jKEnSvDXWCLuyZjCZZxZJKTKiVgkwb19xYmkeGAhczYV44MAbyU9pT2BqGFnMgJ1pauTbxex4A",
  "key30": "2RTvpQLaZWMmaD4y7r8XeHX5tRcnfZgXouxEAuMsYLhx5LPcBvxz7VJWCMoLuKyU2MrNmQp1CMc6eNMRqPUXevPu",
  "key31": "3KjhGgY1xJDGQPL9pBQNzbYUHEr6D8q4WrSPFy99EYMFCAW7JbVnML3bV5NhwzzBTZ2ryMkQsfsicsQVpAWbApVn",
  "key32": "47ttEwYXGxS7Px2jEeVY4s2obNnRGsvGhjL2UhvyP2cd2KM1PhmDUmhap5EWiZWEsmFqDxDhMK8asaSjEeH23aXX",
  "key33": "45784g7Yd5JVxc8yiwLkeH6TxqCmiJfJxCm9YSe8S6cqkxzzpFdrgpbuWD9rCnz21vARqM1vQ7HCNMvpXE8dX3C5",
  "key34": "5SzjwHPpYzPzCHXNrvd6UKa9gWGPGpp9tNu7z2e7RfiRwndjSg8TvKwqwEtVpDa8NDYfu8iArn4CmkB1jH2pmGdB",
  "key35": "4hnRXPFiHmzBwSqs4rwFo4k3Bhi1vVyuRm5mJTqgzG9SjVMDAkYJyNeSkUd4YgYxrZYSRhDQXtyd3QDcVfKdf29S",
  "key36": "2sEJeLohLGx2mUFtXFhxbj37PGPy9ySkau4a51ikfyQ7e9eJQ1HUqWdavnTXu9azKMCdcVJLS9WXWdQXskLvBJ95",
  "key37": "2dVvVgujvLhtfranVDe25aZvDmkxGgu8mFL2aqVaRVBJBxkYh22K8kqJSR5s2qNzAG4Q8q8kUmj17n3gNnfqYNok",
  "key38": "4apM1QHtyc7UA4yu2MTo677v535fd9QF9sEt78XXNtuS2Y2uDqfi1VcQUtZbSrRhYHEQPignjzmNVEfDYCDPPqAL",
  "key39": "2nk6EJAP9PfZ9tRT1djr78794kTCMgtE587ZLsNDzdjhMBxumwDk8XHy8XjYiTUBTvX7DuqHAX7pfPgadCV17tH1",
  "key40": "iiBi4sHYXb5MzUxx78rWegFxX9U5G1mhraTdtpYUqedHJuVGepymgb18tf6if3pC2sB49YHWV483XRXGzDcappp",
  "key41": "5E3Hp7pnkSah6s3sH5k3oTyFBoDDo6VVypAssvG2eoNY6RZVUbsWdDG2kY2D6ZxYo6njDfCr1QtW5XhAiorXWC13",
  "key42": "658WWBdzzQnu9zpZSxaeaTMwtsGDDA9fJzYDMukGDdgSBb6WiY35evEmNTSBD2gtpUUfMDvsM7dWCuHqje8SAabn",
  "key43": "2ZEZcvb5zTWZyEbRe4fLgEfdPgG4t9pS4SMhoWT7ALU3uECWxEVEPdNiMLLdzX7fdmkxTADwjhZAPYn2BVJ2HCoa",
  "key44": "5Sxw5cpJSw5wirUizKmugYgeGDXSjvW6TNW8LHbcbBZ5k7fYVu1iG5XYWaeZzAXn7Bz4kdSVEHhbXXgvuGUhYBXq",
  "key45": "24fo138TKke8YrptuXeDNGXdRm7YoEbFkABzE9to9GorKQThapz6f9nKjWGaT1kB5LW4gKtYr5xFtGhjVb82h9Ma",
  "key46": "5JNs52ZWdp8WtRtwwfV3CXH2whXs3Pv2qqLtupjZuj5axqF4GsE4EN1UKWPM8mTo4phJL5sfHas4Qq6AHSNS2rnH",
  "key47": "67FhExMFieBSbPy6xtKJwa2umZ6U3ZDXCgcdoFK5LERatU1on8sxCx3UK7oopV8FsqAwYKWA5vL8E7tywSsx6Tdy",
  "key48": "52FkHdDQSZc8FnG9Tk7zM66FcaC1Atp4toLvpueHnieLnV7TjF3VJxSHLiRTLKbFv3us4RCYMwUys5yp7KGsP6od"
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
