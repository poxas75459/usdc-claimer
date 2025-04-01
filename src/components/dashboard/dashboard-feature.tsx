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
    "4fRmmyMGc1Rv8fHP5vPWfTAv453QSJfhUMcHmPNqypXNWrAq6ahNziFss5squN7fnk93eB6WrejjaCuobJXQGaMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cg8yUyCs5jgd8QmKUQ6wJGDv2askCnB7nUF33mG6Wy3XLRf2LXYPWtoHHKGhxd7fxjkmNyETtegT1JXNhPG1M39",
  "key1": "3FWQ98uXaMNYisDrx5HGhvk7XvV7mcDxDXvNGvV1nfcz7UEShLfzBqkmLEn3b9pcGzw8tRfabmBvZiXvRkhVXAvv",
  "key2": "4geE31nVPtiARNxa7k1EZJwVLA93CQ3eE7RubzH5k5b5yd5f8LxThuENfKb2VoFVFXRmo19Rvww64HqnXtVYAkP8",
  "key3": "zusZQTdnjiJFvbtYJZMeYiUodoerp96nB9yS4MAe4qd6yvfxLwqUYNSQbSnmG9n9AGNy8NmqvgKBevoaQoMbkHf",
  "key4": "2FqNBKq68pZTrsAzHGFqaEMAGr9wcpWyzDSQ6CL6RDARkumBG13ocdVdDzTLZ7CAaHtv2Z52HFXbwNFFkhHmRsXg",
  "key5": "3xM1jDcy5xrXqhDH5GB5YnfX8MhzxKzNKpVbr8Sdhxcc3LxQTrKVREke6CWyihxHWL91o7EFtg5h9zJWqMeoNi8d",
  "key6": "46sjtmgg22MAGBSde6dwHLfkircAmaXcBtoTGAf4UFizHLZjX23CJNkj5KiWDVwaePsbiwUyp2ueMJuF2cWLiXv7",
  "key7": "5vm5g9jbxYjEp4rnHEREAy5DjkBeDaU6f5KdduAAE3nHGVzwQBxyRdpw51YcCW5TmwSHNhjAsnHzDrTJpidGbPDa",
  "key8": "55tmWzRGMXR6FvU2NkiMhjcWhgcmYDx9Kj32Tp7aHAfQUmPcsgHujdJmw5Ce7YNKWsuhYxrZTvZXjderySz1SBWY",
  "key9": "3dBguHUvX7ujbkeJbBf2yvKLx46LXczQAwVFYhHV9k7F2w7BVx2qrzU7DAz1Z4qMZUv91R45cmHPfV3PLCCJff3j",
  "key10": "7E6AZnmLuBywtowUXPBmMydZaasY4nhGzykhoxVhZtZ5SZ1i5BL5qqqGyyRNMEQJ5hPuLFwF4q5dKKUC122kVDx",
  "key11": "5krNbGRpbMuMpaLSqNv9WtmQKzu96pbe7HRPYXjnv16p3PHpTYi8sjC5Ygi62haQTPm3EN8ygKoeLvy1Rh7o6PwG",
  "key12": "51LXMMw5X9Wt7JWruGqrc2TTFgwNUNQai2xFtUpWqNcN2swFcz2Y4CMqmttfd9rTjtfQMYFRnSekzpzwZNEiVZXe",
  "key13": "2y1rvM99hNFTGKHKNwNjDx4FQNsFFHc6cM7sypmbidAcsw4X4nuCWbyy4MSQUcqy54ZufAYvcYv7ddawrYn5q6Li",
  "key14": "5SJR7csHVucPUHwMFYCz1rgzKdJp7Ngs8wsTKLPqwHg1zKGCtZUKX2g5yySukkGycVUMLsRrjjwidjg2No2ptTLA",
  "key15": "za2KpnKBc28WLCigM4fRADbYiwzibwE6NnZ55G5dEb5LPuRPag9z7uDTy7wvjNYtJGqKFAmASyaPoBudyJyG9dz",
  "key16": "52UyWZHMXTBzGFwPuEB58x4VUevKRFzJ7A5yFaexzm174b1pjs7RPVEwnG9513t3U5DixLJLjXRi8kFHLFiHRpFq",
  "key17": "24MjMAWvoJwXm35TMAf1aBK8JMv4T7V9JabE6cDDXbwW62YUYcE8DcmvzUqiDqTJTAjSbE5gGiAbdEpR9XdjXbb1",
  "key18": "4iSKAKVJEuemyZjE5kjeddYPMoNjvV7dXXdB5SgfomjkdTiY5NeVjUtkNZVyBEa3cVJyv7xRpRBuGXBUNsuNmsRV",
  "key19": "2zVesk4K9fnjmTekV9N6nzLeodRPGngjpwZYWq1Ce35x6YYXeCYQyyridTf9N1AY5D8x6yMkLFXo7vDaxhPfiBYe",
  "key20": "3KAJUj9zTqsv1QJenybcRfNBifBu6dnjXwVpm9tjsAqwdEhXYiFFvoKQypCrqhyRXogN7iZndLdc2z22bmvko428",
  "key21": "4PkkTxs9YqNNYEXbzZRdWpGqRLCgcSYaz2Ugr4TnYsHiSrTfyzLSGHbDhC7Rs9zcxvgTbY4EF5PuZhGiWVz3vqkF",
  "key22": "3zbpsAv8wU7rZ8gXmZMYqveb2YeRWiq5xjaAd5MWtE7zihWy7FbFJUdxtxotbh3jHSqhUJW1eWdWWBB44xtANEiv",
  "key23": "45qDYHTfXC4PP6kdtsTGubNe1YvWyTrRHZthY23cAwhHEiJ5ZZACzr5SE4M5v11p7RUfikHwH44qStSKjg9e9cQF",
  "key24": "4PtvHMWsksZ8za9nMpa1u93vM2CM143MEHDaBqWyL5PwZn5AU3Y2rG9EvVVynKHjr5gwrUaYr6EPcN64SGoT16DX",
  "key25": "3C3FviTfA17CKKUB5YYY2Psiw27BjPgSq3tY8V5Rzfw6mxorL8FA59FG911QPXxoALvpwn2HdTsV3ab24KKZPL2u",
  "key26": "4HkvE2fofi9AtZFzrwEtBchpJqkULMhA9eHeL148oW3Fn5nt6HX18LAUw8Rt6r9yc51ZQqCcihEHpGKD4tCvMtW4",
  "key27": "4QE2QMJVtXMHvhCqRNBQoF6jd8ttvXStvBPeTwvBjFcoCP89RToAsa2WMwNVvHkahMxZ1Ni9PKhpdjLULan54t1W",
  "key28": "298NRxUJCHhDPj4WjXPpwFN5EbyWxUUpBdiqPecFFbmbAza5SJYWwQxzWni6Ahuy1sUTWhYPy59N6pG47eyn5MZu",
  "key29": "2gXuFkU3vFumgjTYAPCNTZXUhmHuxvwf4JDqdLK7cN6EpeuzKGmLbfSX3ka8kBvkTfrwTpkQByithBDnZDxC2Bpg",
  "key30": "2wLYeEGmdPcrvYUhMxLfgJkszAdySNk8LWJCTjifciwRUf9omXg7vUmm7EkNwfHi6tE1seugABYf9pFvJFPRKos4",
  "key31": "5krMwZu6kb5cFXvHqeS4225D9Qjw4WHVsG43xxGNZGsFPjJtVK3py4eQBGLTBThRBxvi33VACXcZP3CNZkrKxAhs",
  "key32": "3NaNcGnuci9T2AiCPw4z1v5g3tcHhxrASNvxmsgeLB64x2hFc1M1Vd79grRNCSzgxqPciZ6ndi4XAgDosMKvc4Ke",
  "key33": "u3REyeADTJ2vU73gmE2BLYuxsk5kMJTpZPZXrd9xnGWkcLoFjR18Mnx7kGJdmgpYFFQehiyuKWh2D1Agg7UZ9cS",
  "key34": "hUKMDrnNNp4MEgjqfedGXDnu88JUgjh96Zpa7PXQBHmUtTmtaCJPaT6r8udMHAMkzzHS3DJ4ASqs1waeUQ9932a",
  "key35": "3fm7JhAFHVzqXtSRcYV4Ca6izwi7S1Gj9cBYMTHhqvpf8G7UE4tkPRdokBMj3TxRFDNKP94DjxDcwm1mhewwcEFJ",
  "key36": "5GgsXp9178euS4XGt44hzaSyYJqHGkhLm6gTHZN9Qee5PPZ6iz2KP6YfQEUT4EoNEh2ANeW5c9Tac3bCm8sHgJrh",
  "key37": "pqT3EkPvjdTT2zrzBBymxBfmGUGCib2dCSGEq2iF6iA6wxx27QefkLG7Y6N2ydX9HzBX3SE8GaVGY6HzePxRa3z",
  "key38": "2K2GPwNUs6AHqXYTnh3SAEn3YfLYGFBGcb6kJdVWQWAp6aAPPp5H9bAc4tdWNtTF98yb7qG86MwnkeiNohVezEr7",
  "key39": "31LjHgsN52zyG1GqumBb1rfewVaw5zFP2fWq3FqG79bPkduTdC3ACk1re7o6odjyw66nHASrsoBJGi1YcjDKuzho",
  "key40": "3TGviFsNwERi9RTUxJPqdcPxBfh9A6U4CN47qGb2be7UAT2Qs5WsuZu4JSkda5gSpbkHWhLRhrtWKCH5kWEcwn7k",
  "key41": "3J2B7uHgeHGfhncr6sYW8cc8u7thPihhVyB1cfmrRJaE48hrMjM7cm94Zm1gKcFKPa47nNa5ZdRfR4gmb3P5E6if",
  "key42": "3WTyifqLB2cTJy87sqbxnxsRgbbgPQ3KDTPh86nfHRiw1McRCFz4pZ7ZQiJsuBzKFAgm6HzDrEJwy98RRG9SmVQ6",
  "key43": "4i94y3e9aDv4wi2n292ggM77KSyJYCfgaxYzDF3Jv6bmvFxQvSwgqJ2Rm5YP8kJkZ8HnP89VzVQm5KyCa25QYXSM",
  "key44": "zBXABy29DwfYZghEjfzDiNSuoEdrLesSuWUwQSk42qEAwEfGzCMn8ew4xuCr9jfodNmLcNoksWA5XeyjjRZHrph",
  "key45": "2dvKAXkv76JvhfLvk4nsmCfD1TsZkGrP8bXRE8BAnyS79ksc61pBe3prDhiip9rnKPqyEXniHDnU6Ronq6jNjqX3",
  "key46": "3ALUFTtvrx7MQWAdKY2Q5g25n3agdxURDX7FTrVVWBrbzmcjBXzNYagmTVZh7GhprdVRZneZYeyHQZJ1fc6DQJdY",
  "key47": "65BS7JdS3FKdGNZ3FTupZFhh1KKUejQ1nDBoezZwj1VSP5QwwVf12dG2ouTrfH59e3nDW65drU38gBDVQ2aysDTu",
  "key48": "5V5dYWLYtS9pURA5sXLBfjY5Tw9xm2JAx4AiJnEWf9FJxRf1u95bZiaPgMT51uJNkCeA7j9gr5Vr5Mw9hxGeU74f"
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
