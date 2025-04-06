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
    "3YoenogwmZ2WgVfB1Svb4stzp3dBdKiMoWhbMWvv9Fyw9af5PmvAEs5jo3mX61UzhoUKMktvTzQHCyZ5YmJXN2J2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "483US5eJLj3rC5SEiYeLNJXefho7eXgpabXnr7hnYurKferqCAMt2T5xXpg7MW1Pr4iHscMU2dBPRGNoM7SVo7z",
  "key1": "5Y3jrVXS3QdnFhxXra7r6eRX8DVFS8x6ULqpHYCpxPYuWP2YR4fV4gf2eLB5VnGG9CJsqwvHzrXZjxtnxDqCeycr",
  "key2": "2hjozM1gRkAswVx6Z2nBv9WsfJPRM3dqX5CJj9szqf7kWaubS9XGdJBsyt2ZMmEr9shYYAmZpppmQU1ttvFRmiih",
  "key3": "4mCEKJRotTBG1SuTajY4tzK35qDjxPq9DgykvWHHzeCxUtcriBgw9uVTKL8HZnCk8J28AT55Xbn46PevUffdmUoD",
  "key4": "3Q6efeQAANwpS2X1H1snBFjreMkefKpHMBZjtet4QgtLMZhT3LbjmbMCs3eeGcjeDsmjzbPCKjbjUBd86QGuUigp",
  "key5": "41o1b6zAWvVzRAyyB3WpKq3JUuvyg9no7dhSpHoXrPtn9SpWocc8n3QYF41MDdEwSy7D1fRnxrmUHjuinNkkvXMt",
  "key6": "5rSbHfnDtsgdFfmBZ8UApjCJBTuQsQ3WHxF91jmwwGCy2W4BXE9A8bnX1K93RXPhL2atc79HoeMnG5UdhPRWxkK9",
  "key7": "5hoqi3bTGbjQSCfhfMkkXQa1DYq7kBM7Luo1DrpGkYHXvE3dr94YLCntMmx3hY16Fb5c24ZDyn2QDVcnBJW5Vjj4",
  "key8": "62N4NArFimk9gYx6WTjh2YuYSddcYvk6nXmU9yWE3vsqAQa7rL5EsP3Nq5vuwGes14jwq3ZEvBxgTrMRbWEaTyoq",
  "key9": "3Nv6QKWpYY4XLteDakUYEhANdGdVtUDm1du5zCTm7E9sFEGADkvrYnsuBhFPEunLnuwGGawHUvzxLLLgWwyKnj8D",
  "key10": "5Lh6e4YS7ckny8hNiSPLFjrA8Zxteh7Vm4E8qDD8qTA3ihz2h4x4kpt5CHJmfcjgkZzJPz1iMWtiqAAEij5Pasug",
  "key11": "291LPFTaYw6RFxDhxrZGQtVGnMoafcB3S8pP9VyMdxHQUEFpSiBiW3JHXmHxJcEqHaAgXAzVxJFKWD7EC3jP9Ucc",
  "key12": "vVSFEEB2mQPXLVRq3PJBEBgXy23Ff83TeAwRi33XviUWpL8FTQByhK1xxwK2zKRsr9X1W64AEksSMW5vzFTRJia",
  "key13": "444Xager6rWset6K6WrRMaT1fs7GojKn2oidq2DecNoYexCzxFodsVno46FYwhRGguXm55MauekZfdXCJYyK7Hqw",
  "key14": "3NeS7ReYvagR1r3fnFttGrqQgJKk7qWJJva7L6rNfArXM8bc1CKzfBjDoTipYm4KJi9WmoNo6CacfYrCDirznoW8",
  "key15": "4Kb9F983WnaqQetyB16TwX5z7Kz3R9dadXwpBkqFBuyadHZqZJwXBYA8wqCW7JLjeq7SBuFpmNYv2NC2NVzNPimm",
  "key16": "4xvgkQV6qvnybdX942LwzQ6tA5KBTrU3iayRD47WccPcXrFqgp3fmcZ1D2YgbpEWECZ95QHUACfhdhpuSDhFiNri",
  "key17": "2H4ZJTnCCbx1SWRhDYz3anjiZA9FHkqVtC5h2ku7UY6mj2wQaLz998U18UCdsASMDgKQiY5F1Tosn4ysQtmAauQ2",
  "key18": "4H4kK7RG5tjKybcG1U2ZC232FF9C9RHEZUHuvnEf97ceGEnVNJ9E1r94PYUT3UnTWSEjndwD37KGeZN7xGwmcado",
  "key19": "37mA57ZowBD8mm5Lpwx6eAZSfmXu6VP8YuTKG7e8DcmUnDMvaoo9z7f8FpGcrE2nqTu9DHHtsBMQyfXfm7mmF7Bq",
  "key20": "2Qfa3jCYHeR9bx9zkc5Rokw9QZvHTbCPHEU1ANtohXNqukoHgyL34X1b9bKuWsx3c8VYHMHpYETAa8VXPeEa4kkh",
  "key21": "Z3WZNgt5shJNtzZ13J2FYvfaFTMTFeQygAkJdrHEdtcar4Dse1uRfoFvoEW9uYRJ1ZaiezzCr7KZFHgtRNeuy43",
  "key22": "3MrmgyRaCVp3GE4naJH2FMgqrpgvfxDQLqcSBj4Fg5oLMv4dkLn5Y3LhGRxLqJReH4jYmbZ95G1MZJiw71aVJzn8",
  "key23": "2bR7RJRkx2s7TvtPENi59P2f1CFHW6JnGBkpCNfBfQKh2rtcBPPcjnPMzjN54Gwu4EhYjfGpfbVJmYqeGDvFvD4P",
  "key24": "4S3xqV9XNRvxJgYU3u8owph4YTSigG5HyFfW5yPhyZMip2ebZGDfowpGaiqaSYMP85YFS7hsYZx2YNMuVVVnpEfZ",
  "key25": "5UxFG8mvUQHmzQEWgt91m2HmkG9sZncwqcSWPxMNhMyepUHX8oGz6gYHsaDEB9EG5qNmgE7eg9hw4P2AYFo5xpv7",
  "key26": "cMfmVxCLkwvsUbmt4wHzMV75sCReYMWLP1BgWffsffGm1nzK3U1Bog5m1G36SmX8fvbti6k5J5kUn41fyGbeSDR",
  "key27": "5QBGAXLbVsEp4RWe1myD2far986uBM7UuekD79wF6DDJMPt6WzjnMvbMbMMBWnARGpiZXTuwh2h3gEqTrbkU8aVt",
  "key28": "vgwekaRbhseEbMJdBxQjYXb4dXq24EaHCinRwzY2qpVn2oxFiZxgkVqbNmFy7eZaSn3wfsrGBwKQysocvf4Njtr",
  "key29": "5rPMgabYW1pQ2AK7HA8BUEVdAuMEdnWc8pAoFcAXw5NaChcEPMJQQeJWgP1MUnf7SwDmMGeQPvUeJNkJ43o1hLU5",
  "key30": "449TwLXnETxH35cW55RthokKy8DCxvyf4EmN3PojgXSg8A3ht2JBhicwuxdLchSoLAmteJDvo4hd2Z8bfLi1ngx5"
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
