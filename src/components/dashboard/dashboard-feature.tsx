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
    "2PEkpZKyJFkKX5NMJci8tLSadCDpmrUrRYtvMyZgZ1bMiuf71satg6k3L2LqV2iV3PZJmpRPiS6fd897JWWZpsMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AyyYcj5vFTmF9FqeaWx6qMWXh81WdhPcdYCESXcVRwbGLiWcBzybSnosZdvmewKufKRBhyaP6re4zrKPSjf49wh",
  "key1": "3tnW6gsLiMXqhFjejQvsUVtRsyXVci9uAZhPeNzXzwBsFRa9WwrSEcR35K5xTanw7D6o8kLRfJomdkEB6c8W7ydA",
  "key2": "4iDCi1uPKjmC1xgR716cbC55HV65zQYv9XARXpxTgMujGqY23FfjDCLDQPPn74113qhS8eAya5wdUoWEpf9KRjUZ",
  "key3": "37Vp6HpFDofd7T4s7ze8yk8gtBW4pEUmPPwhgpNy9heWpZkE6u63hkfEjuefzyVcApt5aLJQQiGQSGR4jndAFiyF",
  "key4": "2rs6kx5FxzurVRM2obdDXh5riqpBNfEvB14tKvh9nXmEg3VWCCcvfKg6pPZAVisLb3Sw5NjfeRFHuLb4wSE5Zbgs",
  "key5": "4pSPhvptLwLaVicyc2nNQ8fPUTdfrNGj5RTMX9EPpxBiXFgwqV2q6ZZukfwg5xQqFoQdCcaA9TLzavv4KWQa7Cqb",
  "key6": "2p5bczJCyxtFDKQ5vawtGiJXCv6Yyv9q81jJ1NiZ4oMfk8pE6FQNvs7kszAZBUVCErbCHSjB6ftTSGoTD8Ruh9QW",
  "key7": "tKrddVh9WjunB8Lu2tyAcvMbcL8FmXEsunPCjvcn23sSxJmWtshjgFV13GZMBBVwKc3FV8dWQuNTWPyiFCvgtmJ",
  "key8": "3xWrmcPtczjBqQFb58NiPL7hsiheTb1kc5oR74958sLAVv4sC6kgBxBs2yFFt2SyydNgYuJdu6BmKJVdXbzQm7y2",
  "key9": "2nav9nvyf15XSpDhyPNZTFY9QjNx8HaGeEbBy8mxvHiRaCZrhCuHwvxeyZdjqefcgc8eMa3GZXDfFhvFMr2EL9jd",
  "key10": "2BgugotxvwkYfUmuC6BgZMhJFE4rE92Xvq8jm8pf8CUA8fMMDMjkiaLiNQbduhysEUv4he7XnuL78Y376CFyXv4U",
  "key11": "3qYKFTcujciSBBhgziYKh41nsQxdbqBBPwTMXZ2VdiSxUKwmaWAijXc3WRWEZDqKAfaXUxk8djM2utvA2eAoMqZG",
  "key12": "AP9zAYdDZvMvmARYugi5stXM6dWqEXckp1xUJGqbZZTjNmMg76ooBGWVC82g6oXkTkaySteeczM7jVxS3ys1QQt",
  "key13": "DuMXrSPhppAZo9Rur1SMF9zGn3s1S6DrnwpKqdDSSB4VBRP9FXQNRe8hhUDMPQjnkv3wHr5ckwoNzYTFaCZsB7c",
  "key14": "4J4hmyuC2LVk597458T91KcUX19s5p7vrmQBz1qxvGYEk6zUraZYL1ZkAPN9qpjQWhAPFV5eyojfuQqWTR6tPD4r",
  "key15": "dK8L3GLtGBJCkkrteCbiWdogatjKRbNLg7Kf6tMboWNxd9d9XzqS27G38kLSRvXTkKr8VpNTFaUcckdSCD7W86y",
  "key16": "3XZ1rusWihGZQiPiFXScQMqAzindxVNf7CiVbsqed4hCTUzjCjsouU5cXi8cswCtbKTGqhcZXJ4Jymr1W1juLqEB",
  "key17": "2vDZxxeoEssY7GM9rX2zy4CDpcZUKw4WGgjnaYCtR53w7sj7g4zv5NHrbQMGZfm7165DRJtC9RnUKZpSVnxCbZD4",
  "key18": "5J4GuSbJPx1dyHHUmxXivnFpx8ww57iTBNjgWamNAcGKv8ABzo2avRMxbohpuFtRptc5HVAMrEQAveH2aDcPVKSP",
  "key19": "yRbSTDbBTGgvvpbvpor7FppgdVDJ5GAvg9U7qJdm1Kuqv1i8WAWJSh5DgADR6xZHqxyqVGK3H61Z8nDZRjoBbkj",
  "key20": "5Zv1jPho2F9NP4ooq3Bb39KJ8UjQZVGnJDCPjCnDJ1C7danvF8yB27eM32GeUDaoWVwFPgKKKL6Nv7gPcCF5CAAb",
  "key21": "2pdHJdi3VHPwLiCbfyZth5BpgmnqsmU52K62qyCsKCz4cL2CLu3rEAmb9tPTUQ3ZmtxDrSbhhmeddBSMD8FdRDjs",
  "key22": "3TZpfkcYwt3om4BhmqwE75Xx5ULp5XZhBscJkUBrTDzAq7ezUi58fqmoVsf6hCvdJKdbJaZBvebfXRkUndUHp1eg",
  "key23": "2Mrej5ToEfsrnjyHSrXWmv3NcMXN1hUMLBHLLNWYNUMSSbzSvqwG3gvcUM1knetLdkqLn7sYYn4WVmMgieEZMCTv",
  "key24": "EHuRRNpYpFFQ8Srj5XE4YmYpxqBY1sRZQ5zfAWA6iqSAv8cp33cGeryg2rG8BYGMR6D7ubDCR52T5wVpuZYK9mD",
  "key25": "Lpi2kbeZyCCSjJKL8sWGL63yxPf2BoV7qWynbxetT1Hs4YpFWnzKCoYNg6ArHER9AsX6nF4bTkPs6v2wwoMhU5M",
  "key26": "2GLXASvohKCAFAY44ZmCgFGx2zG7m5SsANXdLXf6VTwDKzdkyBnSA2h9PguXmsL1gu2PDYQa5sJWQwD896vzpbRd",
  "key27": "5TzjqiygUAS6AR7K8GGNWDK8Hwiug6UxyZWR5oweAswUgpN1KGVdo8diauCKY1pKwZuRDtSD3oSfdV8DFHxCWpMM",
  "key28": "iDFgxW1zUhn9EMMp11yCFZPGXVpSfAVQWdQAu9sN5Ro6iZrbcVpuV5gBsyHFBe9K5Hi68VAATwn14vuaEX2MgMY",
  "key29": "2N45kBGekWBqYzy8y3WqXyaqHpxNK484nuxLkFyRLbcHek1F4GNDkgP943enPWxufFNvckmp3YfoFifGRyLHhVgD",
  "key30": "4pfbK4rpu2Q1t75WKQaRdhJypyZatjFW24pwBcXqsi5C9wrzsHaZgnnP7vAGn6QERe6YqhtKAFFgVLEaZ9LS6icV",
  "key31": "CQmjqRXEcEXHFegT7Gr1DYfRcBEzhMAz8TojCpTyehzPyWhxPDsU6SwKeLaWCocNnVZku13UpFnLeRiEkKFAvFs",
  "key32": "5T82Xw8qSxLTFqbWWZZnCBofndpNUpQHzHuRBBg5RtJTdVkuvfZCX877g2xCSz6DPTX7rX5wG4ZNM3kyC8xafm4e",
  "key33": "5D4M84ShCYN9rS4PEkMyRHmPp9ui9FVKm8pX1dL7FJVyunCgrBdHCLB9sQbkPws7QjtxN4fdi3JNWyDE6e4CjTUR",
  "key34": "ePVbp2b8JCKPAX12LZpGm9TGP2nAnysi2FQQBdcNc5eLoZuJKEH5Bh3DD9sQCUfQDdoAwriQtoNZoiREMU9vh27",
  "key35": "5vPDUKsfHdpsUdtwMtSdqbcN2UoY3XZVuxo8U8Pq8ZBvPGnT9UvJTKPVYr26y56bivMzkp2zdeS1dph33XGm7oME",
  "key36": "4smyd9UqrAm5rvZ6E3xomjSp2r6qbXLEnkF7graFJNmNCHjQzgudcCx3iQtg9JEuhDQtqzg72sYwUMrGCsd9iwFd",
  "key37": "yYuhr8DTfUa5njvGeX6sUwVDxNh8hpLXvw4XvVajWSpZtGNNYSeqRFvWvdE8cNom2kFun6vPELqGRYaH8ScBbEM",
  "key38": "nJMiZHMrE6Mz6ssa5JaKqH3aSkReRxD8nXUuDxkAvkm62BEQTFZNz51KwV617D5M1aCZQF8gto8PweMERhpHk33",
  "key39": "5NMFm4NfED7VFiMXeqdAkm4mzjFni9cqCfEQMH2hx6YdSDef827r9n3eYAtnxEgteNhvpsmc2731L3Z4Az3DSBJG",
  "key40": "4hCqhBi2bAw7tXkd7rmSWkuD7xRvaPucKiiAbAKspFb4KLNiWGrEqzsfgkNmn2SB2cCKZPgvs2J1SS7dqfqDhmez",
  "key41": "2mhXEjXR6YScyVsfb5ZKYCr1DbNMdU4ZmTKdtarqxtDamGQML4NobE6an4r7hLxhohb3bgdtxJvoJKSqvwrp2tx8"
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
