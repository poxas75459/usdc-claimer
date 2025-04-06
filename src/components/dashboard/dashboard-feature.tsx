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
    "3vHgcpzoJXmrM7U279WoxnnkVnwqRZwZARhZzHBjQXx8iRtq8fHztBKs2WfPspwETDG5KKxguDNJV3TrhK4P1N1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a58Qk89TuCz87mF3aydWKfWQ29KHAC2hcQYEFgfWqLu4yKVq7UodzHNqWcgZNLPrhHgvcJXxv8P8XYYyw9YSaTp",
  "key1": "5ibp7xkRkoLnK9KFhaSFTyFawwiogABrNCMWVsJtXuFQcVRSqwepMp4yHbZ1jpFWBPK6L7rc936A9Jjha8tMK1sN",
  "key2": "55GpQhNNU3mZinUqL7eVaGho1smijCD9NQe6vn6RisqUVpTvEiUxnoutXk1qYnJ4munr1CPzVU5gamKmWA5kKSNS",
  "key3": "YiMsUY6y6nvJ7gd31ySXANY9pmPa8DRiY1jzXbYsD9sY2u54po1DsaxE6csmXV2dik3MdWzQzFckJSZA6d1gmLw",
  "key4": "5DEsntCLqz5hSVW5LYLuYCkiYKj8dN5APwVMbmAFv9jiCcjsp9KHfSFy4p4ZqW1jRVQQThzpBs5QkRhLrgi5yU16",
  "key5": "2Fqji8bGMS39WbYA7dTohmVKAsu9cdN9zHLfYiyCa2dyszpyhxoxeXnLghdUSMZ2dqeHUkuTF4sWMUn3gbJ6wjqX",
  "key6": "3kWFJ7yfJFd4ShB5bRT1xymoTrAN6skPj4REWs4uS6hWmSE1LsKn5mmKDH8yFeYTqq1in8zjput5A4szxpbnXY9i",
  "key7": "onSKTWBUU63RRED7imxE2fSJzsdyn1BjEDehXgYDQeSzywajjL5R4u2CGAoHFhxDeLemDDcc9ZUM9Th55NTSCWS",
  "key8": "2xb7txGvhyc7qdKxqPkKGJBkvi25YfYS7k5WG55TSQ1QqL4ygYV1j2jP4ZdXLgqAMtKvRdsxUv1ZtV9LdkZuHXma",
  "key9": "5zQARkFTM7uj9Sqc6LpKuY9qSmyuKX6Bn2HUQcmWmpXW3TytSwFEEC5eyfDiX8dByr9H3mgBhNGcnALJFrYaNTmZ",
  "key10": "2nqu2NiQfntDr1u1DgbqiD7wQreqvy9UhyVTcWSSRpyLGdA8vw5uZjYV1Y1WyFEqxTsmoqTh8VmarrPLpirfb9BC",
  "key11": "4nuQEkgkkEYyQ8iy4hbe6uqwnnD9UtK4or4odd2E5xx6oAhNr6GPmN1zuant3Q6kUjo2B1kH6SBP8r7nnD9XdX37",
  "key12": "JqeQjfaiNMkBAq9q3Nm5syYHKwG46VzSWTXmnUaRWMap3kNBLkZYm6Ufcq69sZLDuPTdWPCYgbwgLvx1nGuzzB2",
  "key13": "27UJBGB1z4GQ52Cte8PQ96HmhbpaaSgRq7zujiC6iZ4HsM2zs3gKhFyfg5RZc9bdpCtMUbhmY65XhGUUp4TuuHtv",
  "key14": "3p41vB1wwVLV4Qsrr5qHeb3Vrf2EZwGmdvewduHC76d9W6Ee2tG8E22RTHGoDRjdH6w12L9PqxGeLjBNuCpwv9YK",
  "key15": "pGsNJtZ8Uvi8nQGm3UoBWpfvzixofgX315sR6U5ySY7ugSSbcXNusV11dj2pPPCdfSLa13fgptGQxSdY9ggduWu",
  "key16": "52ijFKR1DwjJUpoUYSRyWAAsrFZC9VguLe64VkMt6ZBkzyKSvqQGpNTd1L3uXzSRLundQpV9NUhyG4NLsfXQsKqF",
  "key17": "5UYfgjdrFJrRb6cxubSH1a1MdrzNTcAFEaurS6T2xYnSMjbRiipAE9J7nXZnpoJSk8ux2h399hGxGAxdeyUmkS1p",
  "key18": "23Ngeej5z6J4nWWNn2PqfPVE3EVgdQZ6EA5JL8CjbiS96ML4FR1SsudgDR9FPtjAZX3b86C3ZPXrLB9UwBwX6RRh",
  "key19": "49iY2CAqhnrhrAH4sdRAo4AZujJ9A289YwM87wBP1CEVS6H64ksW25GRVaqTibksWUw2cZTaXiDGEaAiHuczdz3u",
  "key20": "3ya2sTS61QueBS6CcEomcoaVczib6P72xjJzyuGinqt16TRNUVmymCZ1q8KF5WDoLTmZrSrpokt9Qa4KByYBLUCb",
  "key21": "2fmyH18Pak9tUfA1e9vhtMqmgFBL1zgzaxbUTbRJw97wNziZh6Bwe8fTPVYxAPvGUK3Wo4Eq3SDoZJxjdvVACsc2",
  "key22": "3b8Xj4U7Ep5t7L6HBs1driXLiAJ5in3P84gJ9RfwMQ8L8nF7RrU16qZqLdCCNuytcn1hWTvyzfeRjTWfPvhh95SB",
  "key23": "3XGNCSmMNKYh5iT5xaiaQZnfpJnRHcha2vqiSmLZAvnQsnk9f2tPSZ3e2ZLHHkkVopUMT5StCeq1PFh942y5cf5Z",
  "key24": "5qyjjwSyUEAcxeMCsodPZjuBtp88y53t3up6PwHPFsbefpE7ajjcJhWVeEb1hsC5RcHiUPYTmxKmB8cW3eT8Qcsy",
  "key25": "3G7xgzcMkmscGGZiSTikJVsuSCAuqESzjD1wfuTG8EkwPs7XegEaFAJjSBrFfRfF8s7mFGAD87dXziLcvLkPkWeW",
  "key26": "3ePitGVwoytU7E2eC9djMRbSdatig1er8o3ge4LLjFJ7zzC4gGQnA7G3cxRjLYigkDuqDm1NJtatPqXd1aMHiv8K",
  "key27": "tVwBpE5DNYumpPzZUbDwpRoVXG6izy1fMXtizRUbgbr3JwUtNBD979hWhJxrR9HQ3x1unx5FUpZ2yyQcBrapGKi",
  "key28": "36ZJUDf8yQoDV76NHLRmMpMG1sejLbWirYYBM94a6PoECg3BDkBZfaYVkzfzvd9EsxCJHpBmQfQgV1gdn8ee5qkf",
  "key29": "2KvWL9uRNAapw28BwQmQV76EgD3TnHe3EJpUgJRNfSa9PGttywWCi4h13e3RHGZVUbPFVuyPMscQCEXMdMj52t3P",
  "key30": "2xNPKRvvcSWtMi3f9X7acpGhJxco5QkQTvW3Jea7gUBaz7FapMVHSULqutVU5YdPkt7ofT8Mgkzd8hicA9LNuHyD",
  "key31": "4gfmZsi3vnWfVAfmkV8vVWEPZJceaJQcLcLvATSK4TV8YfwqgkvHmgBKTwDk9wQ6U7WsHF7tNDUW54uEXQKfk4g4",
  "key32": "mgWgz8anoZjQrGU2oKJ3Z1EizE7j2xka3jGETGgcAjeiZBzz67TZYFG4xDsFvwMuA9ydFTj3esPo9JxQHFQ4VVu",
  "key33": "kHJZbNiqjozuxLkL8GccT6f7irVutsPAiuRBzNXvVTraX5xuqyYV9u6H82oEJkGKMtbYcAmWjyGjVhU7paHmZaV",
  "key34": "5PEfeDJ19ryEZrju5hpfHuqgXxNceDUXXmEWu162k55M3SuzF49ondZZs8R9ZyPqg73gUfnZbAHBJEE3rXfzRooh",
  "key35": "47r8ZqRLp9UCEbdAPNLDfwPicW2tRemNq9vmSJfjWy7aZUfMbCcYj46tyiN8AtvXv5xocPVhkGroJwvfSdiq8tdE",
  "key36": "31yMFgwZCAdza3Qn2vJErAgmDTP1yKHKapZu4e4CrFAPR8FVTyPDp2vK3EQXTKAf9mFFiYa1PvmsZBQdVrfZFw5b",
  "key37": "5zDNBx5KgfyWjwRFmajykdCziXqughbt36Zqem7NU1faRGDTqhB8YZ9dpiwrygq3PcfgkPjVchcte7NoLgYs43Te",
  "key38": "4ftqw7Px9Y74aDVk4xkVVbbyeQrYhu8WNAWLy4wJ4XN25o61Tau1tEQzrTFpp6mntPsGpmSJdQje1o1f2UenBtXb",
  "key39": "4uxH4wEJQDmoRvdrakgQ8asv4ibDNaHVUFUxgcnyokH87Fm95F4LTeYJyDMkaoTvEHMjjjKSYpV8BTKR9EZGGqPK",
  "key40": "2KzKc8bE4Wfw6AgE4DRCeiQ57jSNYY7PaRerEiMnwhiiAQHwmKPxxjstCS3TWuHqQZVXFrAHFsiGWdaEFNWTk1VN"
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
