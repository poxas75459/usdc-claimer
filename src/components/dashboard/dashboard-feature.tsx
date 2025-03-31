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
    "2deLrgcyzF3DHpLfSVMrjrj1yaD71SBKfr4Bcnt3Eauj3arpkkHcoA2M7ZALdiJYmYQWVythNQVVnxz5UakFLyGq"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "p65oi2PZW4Gx91oRSX7mofo64Xi9ZzDwMYvxiZ2q8gd2hXvUFKL9oCaWHDGb4kgxVntJg7nFQBEHW3zGJZc2yBo",
  "decoyKey1": "WH946mQizTiT4dV2wU3gt7KQcHtSNRjirUJujQAdicwoDZEw5PFiqszKukPkAiHmMzCxumWx5tXiF9p7JiywdJh",
  "decoyKey2": "dSvEPr1RNAAQNMjvnErewgrejhxPQCDi2jHPhYGYqGDuyERPxAtVNmZWHXSm4omRESaQqNCzDaCukFMuk73a2Yn",
  "decoyKey3": "3xWqTAkShEGkYwukE6nCiwuLbgkm9kPmYu7LG6YMKcYXxQHyGvsbke1zXBtRa6XUoyMHFFSat77KXAs7pUjSecS3",
  "decoyKey4": "3E4bWHMw6Fvx3e7gzRzETsDkSujEaAYrrHt6QqctvT5UXfMDr5dYQsygBNTjGPEmuB6F9cKTFahLCivY46UyMUhQ",
  "decoyKey5": "3e1PQqxN7wD93MDyAsPPApBAZ2mrNpQkBanqGmex9f3WKrESMD7hL1KaAVvA2hRhMcJevE2Un2Ky4cPrPaB3ZZ71",
  "decoyKey6": "2JFE8YLTTgkqvXDN6V9Kfq7JeFoDkKSAAarRUWT8P5DcwJgVxorrJLXnhCpYfK8T543xNwPBQgysx6cwEmnm5KBm",
  "decoyKey7": "2E9grDtJKj2CSPqHycLjKBbekRr1ZnW2TzznanCvjTPowXUfRB7tCofyYLRTpzF82efoymSv8KjmhUPGthNLV5Mf",
  "decoyKey8": "3x8CpTCHYu9iqc55TUsLpGu1eV1qjbvyMbKrhm4CzbzVwp7Sbkx1Azi1NhDEMPzgtrDBbMnQhrSNv6wBUUcgVEQJ",
  "decoyKey9": "5HSuj3dRsri7B8Q6WatmyMqT8DpNZvUZ6NjbmKegVVmFtGBVWFDhCRSc5GQEoumXWzHyGntyoXjN3A4Jt53xQ6Zm",
  "decoyKey10": "5nFkAAQXBuAZvNPdbg7v4dFafBzzcsugeaaVWFA49gdZW8PJiN826v4WeGctuhAqvec2Q2RpHWchaogUgpbDXJEV",
  "decoyKey11": "4fV4rrdrK7F6XyLP795dwiKTTHmmxvR1V51ZVTGZ5vBmBYDaYkxgQ9Ug9aCUpmLuS6FRAbX9HweXyiwyxKYpXHA7",
  "decoyKey12": "5kfLNhLthsjLEBoxM4cdwaJGoVyWrqkE8koskSQfdcLYggdHz5ZrhNxvJDdAQm3qmXTFSDZMXrjaJuWeutskR82e",
  "decoyKey13": "3MW1M7AQHqKaUJrYRNkTUCBqhR5wNLPseXmcBjcB4YYfwRABGd3WLUj6kJGqSqoF1mYbyVpxoT9FW81BKPXZDDDG",
  "decoyKey14": "44NLF8ghKZeriuvAj9dSHryZPuLdqg4kaoR7mPfUPrCu2VvWvxehW6MmfbMdJSDGP7Y5we2pGcczXdqCPwGvk66d",
  "decoyKey15": "4xK3GkiRPMFcP1CcVCUSja8inA7FMU4VTjEFeN8Ah7Nu7ersNjBEuHmGX2RATVeE1k7EX4tBHsa95Z2qbggr6ExG",
  "decoyKey16": "2MjLpHWMKKiyX7bBAcXF6LKrhvjrfdKpf4kEVajQq4bo5qayZXCvfwf26bB6G1tT3mKx6Re5SepvwQToMCbqfere",
  "decoyKey17": "4o1vNvhQxGc2jJRGNxMRjNnRkphieSocZ3H7iJ3gnjy66vfQaj7Kokux46M49CD4auQYg8DCiJNT9BNz5QZU3Kgr",
  "decoyKey18": "3esU8Eg4XnQsRyeanUWYgZMCJcevvcJVaj75wRKsL1LntCE4sY29ZKFmacg48EEPJuLSpM1wTJHDJeyL7FtCynC6",
  "decoyKey19": "PPCD6XkgKpS2zRSiNQbvPusUn7RN7rZRFExEyet9t7bWFz3s79Seq1C4quZdpXjfdY5scrQz6nUNnqeQ8nGvEz6",
  "decoyKey20": "5e3QET8ckDzhxaq9dUS8e1M61k6T728tdD8uJa2s68xKjJvqRrj8rCPGnhmxxteJTW4vV5yB6VmhFPLPWvGWR6od",
  "decoyKey21": "5TfQfCvDteVHXYP1VYGw8WiQaYccRwZc4Z6icPyJDhN94x1a54CNfpNH9S8fdm1zMuXvmwGA2CjZM2vFhCXGL7xc",
  "decoyKey22": "4ntFUqvascd1BGAbCDtoaoKEKBmW8ZMagChzpZLDS7HHhWNwmaZKhU1dR18EvypbmPRw4jLdpzqfLFsaAjNYNSwd",
  "decoyKey23": "4t3a9joDjvK94gSgmnGd1tQLQb2QNa7v1nQj5KT78HtEm16p73FTEWpgXjNU6K1t43RbFqSLxtpkssDyTqzqwVTW",
  "decoyKey24": "5LYsz518ggabW14SPUNVjnyAqG3R4Zcmio1bEKgHCsqrty7A2Jq8aqGKPvGc6LczmRpoG9RfAyAapbAgJHyk3fY7",
  "decoyKey25": "2X4LkUfcnyiAej971oeoiAKNrLqnSJAWdeBpYqGkUcFEziW2yzVdRMmjb6gVzsXW68Q4RedniZ5LpbRXK2MaRhzt",
  "decoyKey26": "5vXeChQ6QaU4nVoNU2Y6o7S2X6XK1bg9jvh5X4bb7ciNu9DM1sf8XMMchpkhaJJH5XnHfcSXgXhUkFmTFRJXZxSj",
  "decoyKey27": "48VXbb78a6Utpdi7YTCNepYaPVsuXXaSP1zBVH3kV53oRPfc8etiRA5waoNJaGfesSaatMLut1jFiKkMMj55AcHt",
  "decoyKey28": "VKr835kqPTjg7HDmxqFsTMSrwaWzzqCk6tGVNb3oCQcutqCD7fBq9LoA5BTe27wZYUUAdqLDbp99DsMmf95W4ih",
  "decoyKey29": "3WDpW9tauUhTKw77PBx7cieNtRf5w8vULkExHTaoxXEpryNQ9sxnwvRzZM4PJB1n8DULmYEHcfEP7JB6m9nvrbyg",
  "decoyKey30": "2iXahtGrNgSds43mhrZHza4x2ufKK7dUKHzyok2hrHhfBVCtH8Fn6BvZKAjVs6nMGkJEpxNpreCrpEb2wtVZiFYa",
  "decoyKey31": "5SCGukfXxkjakLeScqEbA9kaY2TJGFeuoWqrDonqDdMEiNVojVd9uyByAwAA8tuX1U2Mes1mNj4Vxx4yHr5WuYmH",
  "decoyKey32": "4bFm9iGpJR1Q175W2z34y4WeMyrCHaPnKtiQYZybSbUJ7bFB6MMwzkZRKdKL4tzbhLxy7Ui1ohiNww9sU3N42Wrq",
  "decoyKey33": "5d21HV5XuYeqYmrDt9gYtA29npSau6bJWh4m23wbGQ8CYrCbYK5dRKBipvczPvnG2b6dT6SFQ8M15UDLT6NSkGfR",
  "decoyKey34": "5LLvAXuWZnqr3ZtmuY99E5M68vDEpHqneoTiGGfnFfMSmw85WWDJKiUP6uxUPFNUpfcBzwEFavZ4GZUaxAJuUwdv",
  "decoyKey35": "4hx9PPyqYWxbj1cWd5zLqefZhfJrLPtUdgzXVv9iwA2AZAMtMeqxUY8t5oudpNtKXJoZEPzFWTbkbPgux3fwEkDx",
  "decoyKey36": "5jCcyPigr1sYvDpuz1GnPzY9KW1kbECeUyXZ8zeWfiDDEhEZAsHykZu5VvxtzhAP6gDRUSxaTVF1eC6jZaMYvSy5",
  "decoyKey37": "X4PgfFYhT5KAEc7EwNjAahCyETjjbdcVq9ECKg4iS7f9tzrE1L6jifie8YGgFnHmuBiGuuPdCUB4pKrPJKjphnS"
};
// DECOY_KEYS_END
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