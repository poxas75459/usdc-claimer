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
    "3MMbJSqcN8GbJtdjkmDSFundLveSQqYcon13r8omY613dwCkUraTKcPWYr5yv8PbE9zXE7HiNTX21WdEf8nYzGXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3re4RD7GLFg1drvsbCpXLEC6B6T2Vy3ftijGqaKpyYAhznrSVFX5XFvuvf2M8ESF5MkWaC4NQi3h51LZPNa19mMR",
  "key1": "5ahAwnqavJHqK3Rons6AnNqDjRHm4CRvePCSaWaW6s8QUo46DtHir7U5dk5jC5TjUB7F9YgG68tV599PHks2a1XN",
  "key2": "2bxnnQ85H7bmzGfZsKXe7v4XjcFL8UGSXqG1xB2zTjQEx39ZsNrEc2FoHGNtrLteqCAf2vhzScjYHojK7L233UHk",
  "key3": "KcFeWmwP6p7hSEnXTAdTmitRox7xs4vK3H8FKFjZKcqJHiXNpL6xdgBLvbRYbFCriSVdHeEmdYwzpzCLwKv8TTq",
  "key4": "2TjyCB7dQvVubbsHKT2TjpjWUkSdQckyxy75U3iETqDkAbmCsA1eP9N3FdYGHvW6Q6dzTi9MzEYmEuvsmPZbwpLy",
  "key5": "2WN6Bb6KGzUoDg8SAvLor2ZsXkTHresHBd4rb8YBx4RzQ17q2Pc9Et4EnQ3nhtAXUJt8CiZYAqnX2yb44u6nx3K4",
  "key6": "278DNd2Qa6tfYoqQnaAL1xT2YeSAgQ7SMfvEuF9ACCxKAGc7PD3dSE7fdyCTw9Toy6BJNVJBpL63mwN1vFrwPb94",
  "key7": "Zc2raXYPDWWyXYK9KBky5MH1SVioAwZarRyF7kR1LASqcuJdyRN6MEh29t7aQEg7cpWacgFfFXaRQ82nWheq9i2",
  "key8": "4ZukzJn9uCV1ZBsEpQrPWu5XCaLwbCdK4QPnTHqATkvkW3KZiWKkLkxXVQ5ybpMFZ8xLt7Kxs45ZoCfrzMSEZfKS",
  "key9": "7AgN37PdbRLXpyevWt276ACzG3ZUkfhH78ZB92U8zvYkPEYay7A4qnvwrmUTUuJAtMqMvXSXdmBMD3DihwTTFsP",
  "key10": "57p1KJ4svoWsaQB1NA37yN9MmFnSDzUATLaYgEmQ3uv3gPde4ZHNptg8sDpcCrTgufY2jKvtfHUyaZpuFRQxVb2Y",
  "key11": "c9XLgFafUZeVf1ao6UV14RbrtHxh6AEqdeHNV2witL2Jg9ihSTbjJu8uJdFZwuNMsi8fLpzPpsv8hiNviiqsNtH",
  "key12": "2tyNvk7ZFp2f4JWqBx2gC6wtkM9VK8WpgmmKZJfWZnwZpoEUL9LGXfJZRiRDwWb8AuobXDoQ8rxX3GrbhDgXd3yB",
  "key13": "2SJnAdDGAck1odUG7wF7a91tvyfTQ2mS3c4MxsZE4vVidna6CpVdbzDzungh167QdYiM1N1gaA3z5FgFerdJZig6",
  "key14": "2iNDhDmJyoWmzRESYkEHfLricbGLNWnWXJUDgFHUTQUhtZD5xcCKYbBLQYJssiNRa8yJSPTAsAudnYTfvXoGPMCo",
  "key15": "2bYZuJtMHtbH7ot3nSLMx36adiGQdmQshiT6aGJFRX6pb5UWRi7UR1ixztWCDUFvDUTurDasyCUcdEHSwg75iwPR",
  "key16": "2CrGdruMgCnbbmB1bRKq2Zaiuk4R6gLZLNQsu7W7AVDtJiV4uKqJi6gooTFDkBisPkHz9RCicPj42ig5dy7VHboU",
  "key17": "5u6PR7UmTVQ2kzgShByYCkoeV3aGSM5GmyDJryqPRnkdfKWJEhR6E84qMTiiac9NQjYTQ1Nqb6mjvYYz7s1GRYkT",
  "key18": "4sP9kmhkF5M7khi1fjngEKWxt5VhUTp18dn4sfovZxr7AW1LU6RQiuzbJWvuynUF5nBNebJfM38teLUUxwWGDjGX",
  "key19": "28CvWTcW2CETEpC8UXeA1smghcFk9spszVK6ef2mqgDBj1CYUQqDvqTiXAUDPfqFaKP9ceF3WJXZJ81cHjrfsms7",
  "key20": "62qWdcJDtM7CWy7Z8KGjNkFL8Ny1S4VfMyX7qQoV3KNyYLfRpYcWB6DHbmCpGrYLeaARrLURP38EnxCzVK6AqrgS",
  "key21": "5k1XfJjJsMJBb81RCbuNrERyg7gJAVyFKZjeaseAmkFJmF1WYEvBj69bQujYucM5v5Hy9zSdTmbjxrhvBVuvNfdU",
  "key22": "5NiGRCyymBUR7c3xRgnhMQsmd9nzqKqBMSPzNs5s5KCoWnT4Gs5aw2R7w7qsL7cKWVAz8XSYggAL29aQMrNVdyrh",
  "key23": "2VUiYBL589annChGnohf4jaVW9YfuL2uDUMYKS7fxofpJrPyH2xsS8bFgp6m3B7CwRw4AzgGHLYbvgA9dxtYK367",
  "key24": "26JpHkY1zfBXEV72knsy2ZU5DBz3iEzjndqD9uEq5je4xtpLiN4sUybwHCcnE1iry9MJ51W9WFSgZ95jvLE3KXiy",
  "key25": "4kYocysqkVLKS2hGoZsmoixkxPCPzRu2ywCdYeiyymGHEDKBtAYiUgK6S5AUrcBySpDwHpgknySSRXz8H7xHA2JP",
  "key26": "55L5pdnvAkvi6ULJ9f39kyzEGn9CDTVczg6PwDDSkxRtFKXo6tSB9gJVy8AHFx4mu6V6i4oNojweijzgKxxUpkfn",
  "key27": "3nJc434mSqQJWuYXDyRe1odfTxhvNdfVQRUvsNTyrjXYYeFoEfTsFM1eD9pFKe4CKD2r9jWXuVMXxt9tYd23rxMv",
  "key28": "vCE55MHvaw9EM5wLCfvFsQ7LimFvrGrkFfuNs14RDomFgoUJSVjaRhRSgbnf2iaXa9HLcE97gBrWN93jtk6ZWPT",
  "key29": "55J8pH859koMth19UWCz1wtfL3Aoegc3GcAB6dVKpqz1GxFf34Z9UzbqZ2wRvi71KmubjLECL9JNodEMHFBsgsvz",
  "key30": "49Kvmudx7rZVGofuXvghDYj1HzTqTJKGigHkawc7czTsjfNLKib4xgHqyvNuCFwMYCHVM7JhWRuSCY7LqRcuepnv",
  "key31": "28sGP6rX5Hwr3yoVdowQPzEyA48VTqyGZiMq4QRJeBRnWVrq8Gk84QyemYtKGkz18QmULsuUjYfTyfyy1w7ynhwv",
  "key32": "2XDVAxrDBA7V2gm6gEVB8S68oe8CqBGCnJqrwrWAEwQ7hDJXWbK15PY9qMF89iDC98y74Qj7zutF1SVqQYEKgXzj",
  "key33": "2yvH3CwZVQk1P3pSz3u2QcRSeoHfrxVQKJ8T8VKD1wuPx4aJdufZGa5e2BFGiikHDAZboUx1sZusP59h8XXjdfbt",
  "key34": "21pg8VbfxSb4Dihvw9mb5EVQXWHapsyoiBrVfDvh6PLnUTaceBTZUvM8tmjQ7xUV4N6WCFHPKKbtb7vDyKASX1RS",
  "key35": "4wa1d7YKRHKWnyRurEDgG5B8QM1ivCyS7WNPrPAMqnRRscKm9469KL7bGBu7aeKRZwpSRHoWT5y16AfGFQ1GUuiR",
  "key36": "4crVicFnTYNaFv5STSXRGHi8UYrBfYhh6ATeDUAttcF4d5xiPyG4WmiSwtaVC2gRw4c6FUbu5MedEDSguBmmtAUb",
  "key37": "2qPjwsgEzgm7rjPM86ZT3fgTtp24eejaxbgnk8DjkKyGxBd5iCrihZ4QikropxrU77WbSSdfYDFctEFhfoQoDsBE",
  "key38": "66dRjT24dQ8n3KLa4buCuppHXx1ESiJLTuadTnQai5U2fauic1RgFUr5U5JPKmyVY8xcuRWrqppYXy3zdYcdsSJE",
  "key39": "5gx8FnckyiLdqQZaCbXyeE68vzgHoy85jgxBuSztPezQvsoKsDHwZpug5pqtPioxxXRuRqbcSoBpLeD1sJBQgyid",
  "key40": "4AjKZzq7gsumpYbnns1wtERdNKsTh2UwXmEwqQB1BrUxhU1zJDPw6Qta7eGsTaG8HGp4nq2Ze6uttT1Bt6aXvy5y",
  "key41": "fLFC6yze2uWJUKK2h2GrjKYaKnjL9WquvroZszr6H2sQwo2pGKnpJJefkwZW47LRwt8f7XCei5NgRffpxno5VNt"
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
