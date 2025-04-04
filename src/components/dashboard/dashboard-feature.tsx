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
    "eN3ziU31ozu4BSD6q17Ww3meFFAbo6Zajf1MLARwpCanBLjZSTpzCpBRF92ZiFPZqGP9CDtZa5o8TpGBvjosMXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KGh8uqXLTQ1sGQ82nuFZDkVb12EEQ3futWRyH4VFoPVRYZNw4dn3iSNQZBNv6GHuViSKWjF1YL6gTixyioL3wUz",
  "key1": "5fT9vCHJutbjEb84NW6KkWHGziihT4G3ZePLkWLjHcCLoLUFdCTCmBT5sgBdTY5sYiXpfhEwvSJzgPpGWDWdWjwk",
  "key2": "4mk4Yn9ABHfcYm87UKwgnR2ZLwBX5yPDyHLM5bRNMMppCcKBTAsJAU2W8M19Q9DSAwYJNDn2D9az4Z2Pev7sm3or",
  "key3": "2xo5Re5ABYtS89HZg4M7Dj6sLp4LhenQVp68USNbKrj9YdZ98Xm8HTow1cviYfvk7H52zzMrEMESM2Gq7FH6rJKR",
  "key4": "2FuJg3aAjuvufLMtGpcDqhLnRXN1cq655pWPpjWjY2Q2aCYXWK6GeAVT67DR2SP8DSCciT3GcdhVhCKetVVcN1wi",
  "key5": "3fuqC1aze3HiZPAwpb6NzhMHzsmdPeUtzFXoJoHPpb1nyjTPqs38tLWoH2KqWHM65PWxRdQRe4HRpXCxRECLKSxY",
  "key6": "5KY3AzPStCmD5DEnfhRh3f6rQy832rhbhqjFL2CJiJREXkBfDKFUBRPD1NMCfxxZnUWgfNCNtj2XwDGCdMdnCKto",
  "key7": "3peyw6NpzDR8SuAfvRCGivnJRHxGofvSw2fFan26bEq3cdCPunzavjwrjxx53jP5tT5wGksZQdrFxcwy5pjAGXdE",
  "key8": "43g1Q6FedR6P4dAyFGktQMBkQzuJMAwXNmKqYmw6fnUGLV2c5uShkxjrfNZ7s5tkf3h7arerE1uyhKSM5hNh8Fen",
  "key9": "22nr4zwM3yVShrRP7LdhX61HiiUn5eXNfQwv6ihvgqd36dPTfnNPJ5DdwQCeGuQrrd3qBgqYjnzAPWKYMwFU9VpQ",
  "key10": "4h8ZPH8ndaxScjbWRmDhhVsbjCHqodCWQqkLR5BDM3wLgfJYGGB7wWr3PhSUkbcs5i8aQAvS8mDuezG4oZnpn5oz",
  "key11": "BdutR5TBgpTeG3ihq7dia3QGVPfXxd8SfyZUh3dt3CXg6NDoUtcWE4yHacLnwK91XMzPYRApUghLyyycjJ16snj",
  "key12": "bQLCZYD7MKXTb8jwxywNN4RCfnwsJnDGPseDBzeGvGor93Xzd8iPgu8jcDvSgZbnDYbeRos1sB2L92ZXVKWym8w",
  "key13": "5oeynuXU4TsRDspHip9NiUcVSid39D7ej5Fu5gpdF3ELg9mFxbVxuxFGgUYvoEmHTvgoZckF1TjPy3hm52iikYLH",
  "key14": "BjgKHef9kYsA81En9GKMXhZRPgrSSTS3NphcCaBRR4oUF9zA9F4wKAYoNpz53KhNeytdzBGdR5GfJNtDe1NAZfZ",
  "key15": "3mULZHwjF9ZQyyUdjXeYwB8kKGB6ez5CqAin8nPpbkDKXmjTUwGrjU8VdKM2sHtDDR4kT5Xyy6wzJB3kk6kaqwag",
  "key16": "5CWZUKEPk5QjkzDfH7EojtSzAtNxYjKkd2PRseYNSMVHUjQLoi9Jant5CCSJFYthVWa4GFmbTvVzwRRvu4RUbern",
  "key17": "46BGBCcJhwcvm4CRPJmniDR53feBdi2aHEsbNAuWb5siZFbhFty95WCpfTg7GNbF8t9s2izqceMqCX2J1sQRZqWg",
  "key18": "4e9uf57UR4XU1Fcv7RbbHk2nJocMbFAgKB2xtfd6cqsGmzSZYwGFYY737hstMWBhSgFUrsuXzvuDFEiSwjhd2DNC",
  "key19": "eX3bb3zJ6NBA4rSfxCqtmBYuifawEsfShyaM7cSPCoHJfviVHVZrcZ8ax8Zc4iertRG3pS8ArbcoJyu48AERGqB",
  "key20": "AvJRXwK5cK9vpbcb8RYNEXyQ8kM1RmSSPbAyu7ZJrAFdKp8ptGBELVTQHUf4kztjqL1pbYapYir3sFZSwioD4CK",
  "key21": "q5BdYXhQoQHC6Cn4j1Qc1YSnh3etssscB11eEKs8hZ6xRnd9qtGjvZrHYSKDq1qko7HXBnHHeDDa7Yzf3CVs1yD",
  "key22": "fz9MRTwDiWDewZ9x3eiwLAnvUftPJdBVmfSuFEgDkfoT8SpoBoA2g2ThysjbYsxZ2E9QJKbq9UV2hPmneW7ukwH",
  "key23": "59BP1cYqd7HS2GHmaesDbGqdMDqKv2RXoeHz5Le78JwyJA1hUoEQiTXM32dXWqcr7h1XCWapXvPhZFxnxJVYawRv",
  "key24": "3rKSrriw7Aq4SWvtvtXAcUgN4rUkyZ3uRz4jXAVZJZEJvSVKyuMfBzTKpRzUM3WMCJuM4dyAzziVd63WNjuM2oFP",
  "key25": "3nZmdkxZEVchc6PsMwLx37prcnhyYkqDHR4aLKEx3zf7G4XgGdmShks1LXcaZZF9YxVDZdWiXoyTL7nP4aubcoMa",
  "key26": "5i9nwCSXy4cQEZnV37YnrBzMAKC9oMhAf2SNAi63NAkewpioVKM7WqZkuWnhQYS2ekRibDPoqpVfLNSmbHmciKsW",
  "key27": "649h7KuXqKQkVq1t2GEidJuvibBRcrJ8Xg1sCyEmGBmptYbxSozUZ92KXkzCy5A2qRB2omVkbQefah9oW5grVAAM",
  "key28": "2gg16vCayvGVeazqcHZ7oKV2hkUfoMzv1oMgTTJvUjcRcEdGRXUcKGSSoQBP5jd4mZLVymFQuDAZZ7ZU5J9zUAMR",
  "key29": "whKUUdhXWDfQFq1VkiLWdNebqMYcadFBsFV23tayYtkW4BWPzDsPSinSvuigjg5DcwEBDCqTdk6qDEfTokLxWu8",
  "key30": "5AXrDqXn42TVyuQJdPfitVSYzQqjWKKTa4YPQb5eiEnW1TP8k5mhDrCnfMaVHSbRbXA8hdZjBuwac4dzu7hE7fxK",
  "key31": "5ejMseYfAkrheGs5EGgA6KD2YoAcvD9ApDDDWq5TkCV7PEzYeirW59x944y4334pioRAogH76XUN4hpqUrh7Bqxy",
  "key32": "4DimLUepivhjUJryCdd5EqBRWTkZQLGH191cKovm1GdLci99PsxnQ83yjYeo2f7AuDBryi5nQckWYJC8DUCpprxe",
  "key33": "29dFQ8ZEooAGj9HaEUzEpHd3fLgsbtxKDik8yJNXvfnS1GSWR4vaaR6XWqwyvQgEimMSsT4NWeJq1xr8GcJNXhnQ",
  "key34": "4CgqesqY5ttVR7jck6UcqdSkh8ByRjvtx7daokQNESQau1AX3WYsJaj36X5JikyKSNXK3TG9rqUGcVwooAkSgGKo",
  "key35": "3q47QjG4mqHEfe7gCnt24H1yykxZ1eF4ecPypE72H32TMJ8cmSoFFprTmmDvRUy8Ha3ta6xifJWwaFX4rjuEe6xm",
  "key36": "586qVh69HaDgfibwYxJSbAjdkBRD2t5UPuDL5Z1qJpT8WwG5esrBnbbsBKTwpchmKESMZQj2sYAA98evwhPKVwDf",
  "key37": "QdrnnZM8E4Gr1kFc3Zphzgzsfb3nVtuSdELB8aqFMTymJdX9GmYpC5kxDB5ReqXBmTxsZGtND1cbEankQbsM8eu",
  "key38": "yJst7p4R8quC9v5vztfCtR2xDWTvF7H2Ea4TiGm4BhjX5M52t8MAbEtboUvvTcQkVsi64i2SGusjWgRv8MXnFx3"
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
