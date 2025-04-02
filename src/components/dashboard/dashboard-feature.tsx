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
    "3qmrdEB4JMBTLezj57jEnEpuWJ6dMjn8M9cGW1bcrGs6xNiFfaa4EU4GiRjFY7raxeCQN8HbShNNjX3f3cAzbeyU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HxR8GiF9w7maqdYE1DkF4QMDC7LVQFQnNVM5Xr9tL76EyrLFJAYGFeMB6zcWDHPY9UtEwN3zreoDXRfybMiRTAu",
  "key1": "5Um8o1mJJwK2xnRxsK31w62BL6gYxZUmifG1bDRMoDWKfET9vY729ffHq9hsPchvoPQ5wQARNf58SbNVGacqVC43",
  "key2": "4TaYm9i5tW7Mh8eNnqRP1Mv5t9qLwmcicGXNqURjyW3LURC1ZuTfs6BtBoZvSKrCamePLngq8uF79MryU15v2A6N",
  "key3": "2WFJTQBdy69BNhVYTeZLe8cJ8v17AyDCm1jxevdGpyLszXYVQ3cprZ76Xw8XtriwHLwtCshZfbFsgWaMDNcRQ891",
  "key4": "49TUCTxzYUxQtFeywYEz1gTwoeMs9vvQVKDHNeLuL5DpV4M7faPf8RmMEJgyMD5cGAiSJi8hBcadBBuBZKGZ6WJz",
  "key5": "3WCsydqiuawukGLD2Mk65SCHJFhLcYjEmDs488S627aS5CFXbcKrfHpBEUnevqCFeHmvNtFMC2aNW5WsYeEAtThE",
  "key6": "227SBqgJQzje87mgLPp1dC8DGU1mddoQvRFpGwh4dqMPHnZEAbPYY8ppqexjWbphiVdZsyCavKBazPMdTNnWuPZ9",
  "key7": "3PmBCFoGijumuzzT79t6DASvZviD6gsfgwwqeYYq8vwRSqNA3ZA3GUSTqwBRsUkV1VjT3iAKHa8eEK7rKWNB1cmo",
  "key8": "4wYM52F4g6RjiNX2iRa3NeYSZNscsXy8J5RdrnftcMYg9ynkpHr7pV8SVwf15skdLPK8GuR8nJ5HNQQzZiUa9epm",
  "key9": "5bdUZvD4eR8XyvBVybbYMJGB71nP7kA8Mrye1hSedQDQ1BsVNVz3HkmSaBTwJy2qDKaP6cd1jffHC1n3WeJEktQc",
  "key10": "2aLijDwV7cSEyqvWheh4CvsD8Zm7xAuzgsqaKQMDPufKWPsbttJAtpzvsLkHVasctGkn3raK2WjyWD4x6veFW12f",
  "key11": "h5WNgwVkU2huLwQaQfYJQtxejPFKQ6ViMb2j7CdFxtXfbMy2tSHUwccpN3c3XN2FRWwPsGg1TBQ99MctNAZhoJj",
  "key12": "3hh5V8WywuLPbpnzBk7pAStbwqGrMW5dheYVba3Cygmi4i4sr9AYY8MYNVpBrwBXBZT23xabLw8kYQpGTm2yw6vp",
  "key13": "xEpc8Rgq2VmqThCv2GDwKDHjdy8kHfjr7hCnWguuw9oqkWin8doJw4UzCFjshdWNjzub6ETznhvzmxYP1kwzuFs",
  "key14": "37y3Czh9VZ8PKRvZAWk696HSUeqkxva7pNu7wsZrckTR6zxhs173xDxcVHvCrQZqtssuijXjDrwqTTzbM1SjfPTQ",
  "key15": "6r5fCcgSD15i3CCAjHMF7JGeUEDmhqjGWxpkEdwE7sTRFy7hWiXfDHZALnKGwzZHWk8VgVBDjoyUQxG5pghhjQP",
  "key16": "2bYPp8nEmdBozSApnJzB8iqVhGx7cJThKto8sD7zGWtvm9bfeCnBvvnpM7RoF2WJBMJn61gXb55LJ9UbMCibx9W6",
  "key17": "5R6KMETdFhgw2oEuvk5U8H8Njx5XSFR8zeyhX3WCcBL19HCYMc4BB7Fcr4iW9FbhFiE6r3AwbK6BkPi1oo3UWPRN",
  "key18": "2SvgVN6Q3h5b62WDd9Uv3T93s3xUKyZtf4KyVkVM3zA5JfsBaA5wqhtijxs116th3LG2TExDxWmFri85ZnTULhM7",
  "key19": "5qZ8mNhrFCBc3zXUCjKggc9ss3JYxiJ6LanPWWTBZAfacddKi5ZnBdmaQgBYxMU8AtPHkJziSWqW621D5maKiyco",
  "key20": "4igPnEr1ScApqFjZpPV6eNvWdpXXzJowKZLJ6hyEd85y8cETZXcqLesQvpw5vBKz3ToP17kmPpTT6386zE76UifN",
  "key21": "2KuAMP8bNdjVUNJnPWF9ooxNzfhWvmW6rdRZXQR8nQwtDKkVbbGb6nce6VWnroR1uBykmb9fhc9AnapRS762SEHe",
  "key22": "26unP8B8hDzXXLBnf7zjq6PZbZ6QMvcM6DXFjJvBDNheorRh9V4FCq4dzu7iu2N9PpyFba1jqbaewkqa7hANpmxd",
  "key23": "4qGrSGdNfxLVFtiSxomutbVBCUNzK1AF4f2NVyi8Q1PMTYEBAyTdj2kdThTpEhXuVrjajD2h5v2jF41sycS9qT4X",
  "key24": "5EguZ3DGzG2gvZLF5t86BFN1sa84HSk6D9o8kFkyEXmWRrDpm8SVfPt67WMWjhDNkmWCZDXWrciotb87EMpvt1kL",
  "key25": "51PeRZCM7AjCoDmt1jXf32Fhx8fNby9f1fjEnu61Q3ymDoCSeUdCpxXcS9ZHoPeFy2V6XtbqVXUeEk6XqJf3BgpC",
  "key26": "4CAoEQjCBBznV9C5Bzq84pXjBQZYhnJWk2EXMwn6E8gkKa5aVe4dgo4FXYFW983s1jHZ8oMMpz83Q1hAr8q5Dzqf",
  "key27": "5irpdJghRMUyrSUEZrkYpJQJ5Qhek24fVQaSsoG8THB2iaVcsD7y4uycpkMBgsRTmHwzWX9ohhcRaRBbM9bxsCYN",
  "key28": "3rVVFZJL482EMNQZYD75RsEDNDUxfvqRFmmyaSSyNE7HXGeUTn1yEFW3pWAospjmUZFSMaZ5eVLkcWbbYQwWTYQx",
  "key29": "J8cxEnayDqBc8ByJWN3wbrfKnqUS9g9JeqQTKToYgsLPwEsraQNxXXKNsQfgcK3H1MCr5tPi5bBhh9uBz6SdgBD",
  "key30": "3VT5s3NT27zM9vKHef6Tj6MoNZDFENCtHg5NC1xeUaL2kcorevrQwfTVBMrY54KHbrJG6uMRfRQN425pMdFA4f8g",
  "key31": "4aRo5zGLvsmaMNssUZy5ybo1LFc7g6Kksae6yKoyCEWAFcMyJDc9oWJAWdNLBzNoSahEWf5tEHox9RwCnqgWGQJk",
  "key32": "3QaWApjgLpFDBsoFnm8KsTQEFEW8pWNg8N298HonX8MB8qUBtMk1BYJYAHtC9tBivTLscCHAvcdeVwiBVfKdPYwJ",
  "key33": "8WvwHiYzWcV5m2nSTp26ecymiCLJv9WWFdUxbHPLPNVGESo4NmDhRnQNgpGEJZ16GmSgLqVDvnq6CSeaynmCwjy",
  "key34": "2dKgQ43GsiSPcDNwFGrm2V97wCTSsdPCtMw4maKcePoEoNgVmQjGB4V7uYvjnXfF66h8YS5BL3To6WGfQMGxnGuJ",
  "key35": "2581NED4LWYrwAMW8fpjQukWMEBHGcLHAKJZmjnZ2pZKoZ9sEkMUw2ASnZv2bVrmhefWywGgizLdKqD9LoX6TdQ3",
  "key36": "NaKP1EGeXJVX5ZSYYNeKzFX4SVJ4DJuQqft3AakeWaDwMceLgW3bHGxFzmoj8NMheNpKF2tvwkP7Fb6pJrqBzpY",
  "key37": "4Wwg4KNSWaa8DS6kR2kNmrHDJnhowjAhP3pqxnTQbVixiihjeXicuUu27zE1G6pszpqTHMf83x9pAMzz1gbBtYyc",
  "key38": "4FY9Ths8XKVvDnP1QStg8NB97RnJ1JJrpFri15BtF88qNxrQDV8KSGV4FKxNyHK74nLzmHEcGyjzKVorsy2yoPH8",
  "key39": "tmHX9xvNBsdXThBebHLYtdmYowWD7FypzEJ5SCVfMHikZTVsRj6fn2UKqTgc3DafiNeU6BpvpWVPMkCkmPZo6Xo",
  "key40": "4N9W7vzsYop1bMpdNrjAdrXKNEMWK4PUKKNyBPyFwe5muuoVGYBF4kcXrRYdLxJZnqvwSzoXamLgkHF5NGZnA2SW"
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
