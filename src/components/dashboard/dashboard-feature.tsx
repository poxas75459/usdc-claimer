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
    "2D7iwcUKxgU6k3F7K8bNd3zUM6CMRZRDBTzFeMzMHiiHey7Lg2dQqKk2rJo9V71zDbwXno3AJY2UuUF2NYzBDqT7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55PAUWUDg5u7VX3PbVwnBfbXWEeYxhSvfVxMCyt4SyiHeGbL7rqq2PhpD8zWoVHShPAWshLRBbLjXSNjrJV8TDGn",
  "key1": "2wLSthXK6cczfDnP6RqyjKkKzbP9nbKqmKkWe3mAWuidFoUMDokk1ESQYPxnaerxYeUiAMvfzQwVpXUPA9NkgGmY",
  "key2": "5T4RBpgCsbuxQKgoCiNFdK5kuyncFLTsvtJ1YYEv9xqEjjnQuFqpv6fiTQZDBPRB2K2sFbn2hYYvvJYsET9xUbD2",
  "key3": "2DXmoLRpmbY64uzEoLzKPgiDyv6dGPMx2PxtpiELXDEUMjVDvRBVoFJiGthE9sRmZHaTFV74XbnY9zBhvEEwrek5",
  "key4": "5tnN7qYDUeiDLrwX9NvC7qZq8FrLKnExMER8HoSg3FSzVpqvEKm25Y2mnnUrUGzjB8T8T7aRL8XzjuMWHiaKs9xJ",
  "key5": "sm3pwvCqTMMtKdT4sunLoiL9PFyfdRt2CeYDZg4vC7kqDcPajmYRi4LiehXVAP9qweRa3QD4RYpS4YF36wokBPg",
  "key6": "4PJpcWYW7PcuxAF8feAVKPiVAFN6GuZDzZnkJ4eJWCvBVKFeGMQabiFyCFpfnaeeDpqxhQLi724xYRSv8RxkcqAb",
  "key7": "3R2ZSZn2YxmEg7XKk2J5mEpuXjSBz1iC4ASyn5GYuzxkoVe2a16sjyxMQmpv91JeHC98kimg9mEJE22KaptS9hb7",
  "key8": "2oT4JqTECF9kNZG6zw9W583VrERqr422yQXH7GrDDpQU58yAtCD2LRfcAufvLhbyLXr68FnNnTJUg9Now5ovFhpm",
  "key9": "29QcFtWepyMAMGrTp6zYYUJ2WXhLgaGYyyxPWqggsAsCSGNGorUEcih9MDfZ1X6sQcacPoTvuAosmUPY49PaaKpu",
  "key10": "vypfPQVfuqF9LKGvaMEDBgXwYXXYPxPb2XaBFV7ZD6qjYCTnKLixkmFkuSPfwz7SnGKyFbMc2FUyZ9UW9sGxfTi",
  "key11": "4FXpwTndX9uAvB2ApYi94c8EuG1D9sZ9GXsuisLEwS19a7ZgQ6r12ycWSvxz45bkUSm6ynTbojyRt6kuvSqfpJjp",
  "key12": "3bMnGiYXURNQUxfE4Jnikv83tR5srR7PLwAPyVHAz6hYwsXZrAGWeVxZe1ZrLwy3qLLi4vG6DXg5NUKLJ7szQqMn",
  "key13": "4w2n81t635bUj6fEToRDAKYLee6SZNwwwybCjNtdYtgVHdXvKMwQrqWG1dMBKD23TyEFZsB7ZWXUD7cCmVCbGnXP",
  "key14": "5ULj7okG2MtWJQMEoDZvMokS7wACYzp6z3Mym5cF38SLs41BsGEgYh8wdywFCdjY8pwJYpA3ha89aMcXE4HkQkz2",
  "key15": "3jmkA2V5y9jnphteySnaXLGEVQehTVLUDFzgunaoFnnXsoASt1smNjR98yZGAATtxFy2vjqyAyTYDeBudEVETP3f",
  "key16": "3s9GR3BCMzAmroGhfLSp3tjctv9S1d8mTfYfm1VBh7WT836DRAiZdKnDyRTum2KCHD8jDmvueFFXkfhHRv5sg4LG",
  "key17": "4Y4CAGSX9CtqmvZxr94ThZdDEw7U6KFfMuhHvgoNzWUdW9Qbz45bL9KBQCBFXgaU7XSH4uKdbyzU5xMV8MhZoqTS",
  "key18": "4zqCKVJn9CwjartbaqGaSyhVaqrAgibCJaDdAi1Z3js1UUjjLVhyLUbGd5T5RZLuvt6q72nwhC9MbbHUBXE17eGc",
  "key19": "Eg1xiJUNYzYqzQRsjXH452MAdedTiFxu4RgiGWuGohsjKXnqaoR3rm8iHSbPLbqUsvt7u1SJWydD6hoyhZcfDeU",
  "key20": "4J6aYcpE926xvkmPrvNmJPSKEHED1Bm1aTP4LNkLzKayC6rYYhgcmVbSBty9DWRNSiopk4Z8xJZccBkF1tqeS7VJ",
  "key21": "3V9LemWYCgzML5EV4G9DyemoPYfAPwrXmRTAonV9HYRa8Ei5kxPjzL62Yy1kR6GFFH7uHx1gcjUZMQkpMwjzmeGX",
  "key22": "bHGEUcP2DSwdRPcX5RUW9LHd19QwPLxvNisibQKZPWGc7dU9TQySJdRXWRsnqA5RYAFyzNbtkWShpgXQdUDVyja",
  "key23": "38djDAabfmJTjyCudMxHbr61TgcpzLgeiL96njMMyHncpZXE6qPnWtkqYdrWV21L2MKEiDWZBFtksEgHo225Pf9c",
  "key24": "25Mo53rbrVtEZxuBN9YHuQNfEhogJtL1KH4tRJxYDDXe5A656rLFRuKaSCBTCAiwnL6fMJQXV97Yb5yrLopnNXUz",
  "key25": "4MFQLBBY3apXEotcpSZogrudLzT8Epxj9PCctW6xvqqXdpae9j4jC87QoJuKCuNGLCVVPN2WqpEwuu22ShF6zJtL",
  "key26": "kvKXqfmG7uzjCWDb6GK8ZvSaxnSxr5Gsh2caVyFiSB1sdG3xvtEr7DvGhYXXinzKmeudQwLYaL4qpXV3cHPPp57",
  "key27": "5uoXFzQTsJJiTFSyB5wkbgWsarosbjRKhcYXui3JGMLR4W7qGEwurh32Pm91LyucoKTDtvVBpPHM283AiCpaVzvC",
  "key28": "3kKDiE7kmR38FwGuZZ3VUQGHRc67sM89U5pwNSW5Pj8LxpbrhvGRthaFaV9CdDNqAtuVVErL9pLmiYuqaqdgvp2s",
  "key29": "4YwfoeugcaQh1uVoQR8jUdSZ6QPByMerZMEYeRfKp9e5GuMSY3xuEtd7SJ1AS1Z9T5HcwQd1ZuZSkVP99m4R9v1r",
  "key30": "36ksadiTsbM7skPC85UpJ8eHwcQh5A1TQRmRZ5FqNDqRMGWFAbe1w7Z5NiBWUJ6HT2dLLfvShsWE8y2amLKQ1qQJ",
  "key31": "4oqBV1jozRssHqkoP7145hRXj94dZiCGJAL5BH38K7WBgKXRoTfLn642J5QSEjpmiyHApnLYAGTRFKuCyuNDhu89",
  "key32": "2DaZMnoMNdCso57znF6iJYUBkepDqHRLNww9wYrouJZmafGpbjZ32ewdtuxauwEASm9UbfmsvyQLHwrz2Tbbu44H",
  "key33": "nkcVNd8tmauxUSECztBVaFxGGqyDFMqjZASHWmQh2iBnMPU2dQRjopaZyL93fEeXdPxLztbyZSxVYTdHf8UuJPP",
  "key34": "2dexnZVp3MmDyPpou1psHV2uZMfPjg8yryVNCEjjdETUq37eNuypRyYLTHoVFJHPnPc6Jq1MSsfMLFcXAQouqyCT",
  "key35": "4tVmjCgSFr6HAiTBZFvtJvXDUEt2qmYbkvMNvdWNGuSbMoQYaLZFbaUG17iLnR8ZcxMMUzjm6NhC5JWoNoQWH7t7",
  "key36": "3SoiHoWMGc8Y5EMEGffeKbejkG1Bnf6Gi99y1owcPivWWQixL1psCSfmtLtURMb2gJQAH7v828vpALskf3v9MtFv",
  "key37": "3kKeDH544HAgCdJfT8WGT4gUff6NCiTEegJXBb5FFAJtaKiEGTRmYs6xWTh8EvsgYo6fp9ekL5Pq9JAQyyFWSVnD",
  "key38": "4cUMnRdAt9KnoeR3VPje8vQ76GRLv9h71fhpHxARBrUPii3UFaZcdEdQpG64CQFkmX8WtnHbG5nX7kNUwdCQjYzq",
  "key39": "67KF5bxX1ggSwzvE1rF7UsHYji6CWDPuHAe6LCPec2Q3fr2iqtbAQmMm76dcr9ngRSpKC2zmw4pNty275QBuQvan",
  "key40": "gxbU3gwwqkNwaxvoj9fqVurd3LWsM9DNT5oUyKGAh4PWBEcVEPi1RnxtXNbqoMo14Ccmf284ucsjyUj1zKmth8w",
  "key41": "3YYBgWhrRHDhV2Fa4y5z9ofNF8FpMAqnXjkqAEncFthUKPkkq87enoafcVXrh37NZpuKara6dBvALeEyQE2wEYR3",
  "key42": "4wNesc3To8gvg13yWL1k5ZoS2ps1ksS6xKMU4m3yUMNhKC7k8xtmcXQjhcMqEEhCvpDFCMLoy7ZMCAYMmvseFo6X",
  "key43": "5mEcq1F3F63Bt1txsigV5CgtHMgf8vMX5yvm9zeegMTP6Qg8LBSS8WyjntUYbh4iRBSqv6aKxp7YtMyp5oUgpv7m",
  "key44": "LjBzF5MTyYEv5Fgt5wFkLqup7e8NEaAtjdyNYsPdu5BWZHkxQFz8UZVLtFEfoYJLQ6UEv3eyF9otcN6UmUAbvwq",
  "key45": "SvktG7Nmm1fHzk6FeXR4ibKyyTp5o9Dq2rxXjyp6Sm8upuXEvXfVbAazjV5FMDFfgGRKQH3JRScNYPBrAPBy2Dy",
  "key46": "3nvdAgKuDeRqhne3ckQgFmxnGYQXXVXjVt7UxbaRCKcc3BoYgeiveYAiopHUfKPQNRLkX3ZySP3oYDzBRjv1WhQ4",
  "key47": "4zDB1DYC1EA3XsSXKypuvL1ozntPVKMeWQ9vVC2E2ZUpZqyBMMnDPaLsZdAHNXyVwsDuo47mbHGbJNAojXyerzEB"
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
