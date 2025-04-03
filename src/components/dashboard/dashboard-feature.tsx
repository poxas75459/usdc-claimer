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
    "28yJ9hPX9SKTqyHJKUTAmMxTDdkoXFv1C1Nrt3jmqWQ8RrWg9HDGrDkqYG1LT9iRtGLzv2LiD7SSqUYNUjbgUx4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LF74UxTkNF6f972DRQAJRHjoDPFCzVrB7Vr6LWXF6LyqGnXXAcziTi7NS9GaiMeQqx5L1fdiVPZKZxnZ788Ednn",
  "key1": "4RraUwsvQKfBfTacU81teqKpXaKyb562zNQ2Jss8ZttKJ2uzNsKzppqgRge6JXCXcefcgXNUY35BJMdXpj1pzDB9",
  "key2": "5u1NWmoLXBiuXeHCwQvf6Cv3LsxueCetq8kxqyjHdXAgD4BW57nZ8VB8tT4LGVTaNdGcfno9nbrsDR8mi3ZgRbPe",
  "key3": "2hFpsTHUGwJCFUE1agyd6rW292Fqp6eBpGugo5k6HV81iei8n8ipdfkJSnbP7UpikByGGh8Ybhejy9qgFyXjbRVR",
  "key4": "5ctEhuTaQ7YuFZ55JtqyqJ4PrgntoePsy8cEzkKErpCn1X7RHDkVSMR1knUSUmqenMxfPtR1CH8gCVBvTnR3HRiA",
  "key5": "25dePJXz5J6x1FkHUvLYV4dNxRufkwxDg7sXWmFhir6Pb4pz6fXy2RCQdyeF54uvk2eHcnmm3EDFwmQg1YFPUSVC",
  "key6": "2DBoiN2VzkhMDNc8zrtqztgf3WvcB1ZYDAqCD98jWVb5AU5zpb5CJAbSofSatjXZQtWvT6fuFmpN13jjC4FbCLNP",
  "key7": "35WqUoXQQ9ExyDdYt4pHHa3JWgMAAXkGup5C1hTThG9nqx4isPE4bEqiLziHvPbidVCwzusiuBrctMkYENVa1piQ",
  "key8": "4eCPwryucyAdaenJLaHwVzDBngqTo3EtKDwkkdx2HdEtWjYKyA1cMMNBfKK1BHNC7vDJCRG7PwJm7A5XZo51XVcL",
  "key9": "5Uw9JSs2h9ubuUM8nbQdiRmWZVqfaetd3HRG55UfUk3Un7VPHTyPJ9H5RradygNdZndMs4NAQghjQn8o6FNb32nv",
  "key10": "4K85rv8yj1drrk6nj3BcdVJV3n88Znfnk81LVr9x6qaLexvtMcJoBt6vmdZdagKajAppAgWvUAUJPcKSqT6hWcDj",
  "key11": "5XrkigfWGsUuW7irDYE8voFPWhHFg3eo4RDXkLrbqmG2LdA4VGRU7jnZ68pNvxMsYfTLWKyEwFGQSPhUvP8NCpsb",
  "key12": "QQ725FDhahf9w84XRNFBpkTgxUizngC9opdfDoHV95tRwAJq2JXGH87CDJuZxA9jCodi45U2jas8gUDZ26MzAaM",
  "key13": "E3HBHhYjYT9hRjy6tv2RbPJ88gcDMgdfwnY3v5JAbozv8kJTseJMLq7z2gQ4eb763htuwwqKqfbua6ryFTUGEMw",
  "key14": "4dTgDZbKghubhArPwsu7rNRfzqhAQTvXgwcbkGyNCZ55nTcpiHxuHHeoN1RuQPXUQPkfy2DLPFEHq6n8VSUUF4e3",
  "key15": "2EigEtaMT6VFGPro77Jo5mtKnnkuKM75nBziCWLn2hmjvxBbKbbjoNSGSPNLFjKKVqGqi8js9KZnworE7yMFGfH2",
  "key16": "35uSQxcmjh6FLw5h616P2sk6sZN7mYzPULrr4Wx47aB7xkFzWU7ADN4fVk9SRPo46F6VbUCbv1eEJrMcmeytkug2",
  "key17": "UeEYpDGdTcvBiBPJDvsJZuA825k5REJoQga6FVocq73WoDTdzRV5hzhvKMV646WksVzsScvE5CbWdWZAwUzb1Di",
  "key18": "4CjPMW25igN9xpy6dxHQLYejSxWLz5sUwwZcs6CF6igVEo5SX6cKwwSsjsD2NPKmLCAbCtfMhzNKyNA9ms4DCxBL",
  "key19": "7FAVLjgQxrAfDLktL7KkBYWPSDBvchVDWzqtQXrnV9p4FN5oXc5qgcKZq7ErxmSGyREkE1fkC3CquwM26Cuy95J",
  "key20": "3B8T4WpF1G9hPnsawMxFHz6mAvjbdGz3rZEMpJVBidrYgRgw53TBXjPc1hqBuyC1gzsMSrQ5iMR21rPw4WUYu97N",
  "key21": "2zPDp1grWf9P5XuorTamm39XRixJJw7F7wgPiXxeRcY1MDLKDyPNocXaK3J32nXxc4xYY8xVt6KiDh2VEY5Nh3US",
  "key22": "34B3jBEXHeRokDmGmyMaMbPF9A68pg5sccQiwyzkKpe2F5dSHqH1jG3D6eLLDhyivqzKxGPrDca4qvtM444FFHRK",
  "key23": "2hXgQh31QwcgzAx4213NxEodUaFZREFd1WSpHtxZ9A99sUCc2RBzC3mopp1XqQrCPxPCe2oe6jixw1y9RWETdG8y",
  "key24": "4BXK5wbndxpz22qU9hoeJDKhAQzP9D2jxu51QZ1oe2Veg4hiyq2ztpKzUwMetTDafSWxaHHgCAdiwZUQDwZbXnRe",
  "key25": "46umRuuRP29b3sj7DftfZhq4PmNvwFFXWyMLQCLcWwm4zN7aimkUf7HwWuXqaueYq5bHYcu3nz83Mj2VwxCjSdSU",
  "key26": "47Qe1LbeaJxw3sDd66yjNcgymuKQnF89zyD9SjL9JuGqLBcem3NY6WraJMapvNbHDEp5Y93efsRA9JbchrvA2e82",
  "key27": "nvpxTC7xC3KG2tmJo8qBuT9g2RmmqJqPi7VnTwSY7hBRGq15BM83H4t3j9F1sFEctfq5RicKic8yd6J5Pf5eknk",
  "key28": "59dxtMTJqGwdHh2pmJxUfgnSbP7C6i1KdVsZvWbeRtHHQmKCUrwXCuGPXBTmvvLAafkDMjFUM33JgjBQzDsAb3Vq",
  "key29": "oeniP6twAC9cyr7UYoxPwkkhmNEjmyLXqPm9kdADyYnEv5ZghsX18B3nfYotyQ2jnH7wihwJGoknkTTzP54QC2Z",
  "key30": "5huYo88o7xneDhgzxedhQ5SjdGi2vJiyjZhJpRYK45VKr6CncKHQfXYv88ZMzCgprcmA7akhszsxQ4bAs326TUdv",
  "key31": "4TJnVhV6hE2YyeF9SrssRWCcopEaK8DkTqh4VzmaLg38iz2eRJpCA5R9rCSwit4V3ckJvUh1WVjkPpbwNGpCHo6Q",
  "key32": "4qTUfmb2GAmf1sSFbjEe7G5ZgNSFpPKtwXJEwaTXf8bRyimQtY6mRF4vSrNFzRcF39T3vMA4UYGtZxsrN8rkkeWz"
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
