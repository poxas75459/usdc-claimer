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
    "YFP25dZaCjCoKMtgaMayBP2XggC66EuJCSn1dnmFLPu6ov631Y88j3HYKGduoFAe2VyFY5HAc5XDhfPK52j2TVi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ggLRd1D2By7Jcqjv18W7rzVDfF5sss2HvbZBCmfQQCBeQpWndXZT11FvWWe14nVx7im4DjvrcrAsXQLyNUTJx5L",
  "key1": "3gxsf2XCiopXqdZsUobD6XdfzzE6jHNheDgaoRe4t8PareteQ7gZAEieNXCgpxL9F4gsQJHhJmSQ4yuaQeRVStVJ",
  "key2": "34UHRK2EFSANfQ9eronicgnbcUhXvHcgbNwGG7qMifWwMsM83aMg7Lkx5xG7Vt4gdhHciBDQZwpLDwpmvo89LHxa",
  "key3": "3tUh7FddKDJQTG9Jm5yZPWAYnRgh1txU72XNgrw4D3gPELhRLJScbMHhfRJv9uU5Ahw44jL3CCFiu56XbUJ9W27M",
  "key4": "2k7kGAcjPuc3QgFRyhqKX2jMiRgQoZ2Zea587kVK2rNoYkcWBUnMNmGdLLPYUqj7LQzNwyncPbnrH8rngMMyt574",
  "key5": "y9V46emqERGZLtM2HhJBXuMbeVsCqKvY5P2N8KT1Nggsi3yRF9rmEoVDAigqEz6CaQ4qmDjFue9MNyvY4MYAjMj",
  "key6": "wG2a9bzZinZcTbVu7JXzAP3xiEDtqfWUhZxbxPcprZGRFv6kahUxxmkDfh8hHxPDB7cEoksAb2aPKahqt9y8ttU",
  "key7": "G3RSU1jaEDG7Pe6GRLnLmFn86Mp98F7ELMcNc62H2aCbhm6boSfj26DuYZJxG7tEGsNrCAUXDW8wmLK4rLDfgDe",
  "key8": "5C3jGUuusvV2i76CUKuJJrYRNPXYvxYvP27vRVZge6YmEB2UoFumJxQLyN9bZBp4mpixJv4cqD22s2XUCZthzuMv",
  "key9": "F5V2AYDZXk9G7ua52Q9T4yWMqUs47nB9WAGT4gmKqopPVC89ozbyuaTpi1NAm8m8yLfjDq412KJesZyUpCg6mcr",
  "key10": "4nqWDSuVs8rMSjBPx1ttSpPwD1anPF1rLL6NJVr5ZKCQGMckjSASSMzNMH4WW8j5x9RT7KRh7xH7aPrV8K4joHiM",
  "key11": "2fDJTVqDGePjZqMhhuVGUKRwpNDafazYtoEsSkBxqvHBFCsUn5XevN4HU9KC8ehkvGG3ATikzejavSsvLBUd77xs",
  "key12": "2Y48Pb7rZ5BBd8KhobYTk2nnS953ZEbDH3M6Usq5KWNiGN2w6uWdJG6MZLLy5srKZb7jPFYUJ8hjf1yP6eGePWka",
  "key13": "3CMYiG8336G4NYbFfUbWq5TPSFWVL78rsyzRtucjx4YedRpncpNjkguAsiCcrnApUq1TzyW1nnnyYHLC6Go4yRqg",
  "key14": "5DNV5HTs64NTY1BZQYyMcbRZSg24Q6VqDRnF43yX44LMfJf2JAsM2n3jxmfVAkz2VekAjezDZVTNbTP5rJBEApZo",
  "key15": "2bxuz29VRMxgkdVvrbVUzf1smMAZS4utbGvx9bcK9ryj3hG1DAvNdZHMQ6BBpEkyesQ8e1Hmoa9k548DqnYNnK4o",
  "key16": "4YGHJLGEVLe2U8Fbmyd2vpZvzyjgxgr9e6DShokhMrZAMANBnmxamgrfJRfkGZrMbbuqQzTfs2zqUdnDE96XAWRm",
  "key17": "4117vKjnKNwtFcXfR3hXobLq971zFEP7fEZBt5S4GzWjbP35Uq6DTo6X3zMVx1X9g7kiEWEQe8UKVN7cADjEN3QY",
  "key18": "4YncAWNzEoRJX9LcpWKtzdGXTCVNFRbEJx3dYGAj3MbJNHQDc675ufbMJMyEsSZNbaLH7KKJEV4KX8Fs3GGbgmxy",
  "key19": "ffxWbwGxX5eYSFEZ5UXCDCj81dNwuubaioiK5W4kQEr6SbjoomCPAwWn72Gxtk3DduG5FKVMqqpq8gWPiigwxk2",
  "key20": "5R3qgs9MepqBj4Yv81qf7qJprYfJbPgAJTkrtHo2Ynh1JMxH9aX6QK2e9eX9FviseUP3w7QJ31vzsJeSZ8miryRG",
  "key21": "4KAcyiSuG9G423zfomS4rB4ZPR6yXege19GyENGexsmpUZ28oS1iS5JvM31nrjLVnXYysB4et7Aw4xvYYefaBcVi",
  "key22": "4eRLF79cDmHSt64G9RgLo137DTXqKDEtTDtSo1BmpDyPkUf72XXHhB94vmij7ng8NooazTiLjZrQqCoPJZhCe9zV",
  "key23": "4qGYjFWSa8YEQayLLoZSdnnN2vbC1t8kWsipWajEDinPU9Ff4NvEiHx7DN4eA8vfkofRwxjpRUMJoX7uDGZ8RNrK",
  "key24": "2xQkBe63SeeGdJm8Bm6xEqQihN7vFP7L4WUB67qehEBs9u6s6Kh5b8SSfMj1HYZTtoTBpFiTyuHRa2FN5JVc3qqK",
  "key25": "66r62g8vij41hmyHe6wzcwM1Rw8akT1rjWSUxjiydF9DZfgwgcHSq5hyuW64F63kB3Ycpwxg96KtUvYbZSnbQDTJ",
  "key26": "5JRN4uph8uJ44F7wGAHK3Akdr5P5K6iJf34EjZPJnkeapE7gqHN81driTbS7hWwDq9du8xyShcFYDc96wspgk3tL",
  "key27": "3Ja8GEqFgbqwQ8etH7Jp2azqcMsPfRzAi6aBA5TAx8mUBQM7LGt5kckqigQK4sErwkuBijh9o6eCAa2C1yE2ANhq",
  "key28": "2jmAuvYyjtKa551oK5zJ2sdcnFMhfiremgXYmnMwTWPvh5NJhV4JTXNtsJ8GgiFmwQALpDrYaXLpZAHfgniTxNuQ",
  "key29": "bMY6nAKdj7DCRKUNxiD6reKvV2NPYdLFat9V9R98FA799HKWjNMZibuRVuAmKgvk9f54G6gNa9sG97ho2WeFLaD",
  "key30": "258Btqo9995hBChQWhRyKyqCQPsFX1DPvYncy6FHYeS2HsCDiYnEeP75pG6rQW3FQaoza18hb3djZtztxmenF1bH",
  "key31": "5qgp9uirLK2SqdMBWPitD2BLikEGjRf5ymUZ6CbHsGgzcNcH8CjM5Lqyi6ChfUUGK8t3jyGWTKVJLYfftpRkdabm",
  "key32": "35SvtyLLL7LSFeUCeP27fhRbwwDnWY7RYtbjRwGA6pP4UZXADhyowpr8ayszW5S75jY89T2Jw4QfGz1DqC2Qqq8G",
  "key33": "4yM1jcsGZ6RXkwHvdgia5zeadHF8CfG8Z12qzo4V9BYHiobQkGNZAV7tN7q9pa5Me8oG8a51bk17PQxgBmo6bCmr",
  "key34": "BHZ1Aaj7vwfE8jHAFa8QE9pQQH8NVYbw6xnUsD3i2HDWUm4p1U4PQdUQKhonHgvvi7P5ojFrmDFUGQ4VUwqNWCM",
  "key35": "VvRX1uBLYPXUf46MTb7NRNoCM5kbuop31oRQe5ZcZKk3UfjiLFbMSLwtE3Cbbe7PL8NxpptkGpNe1C9pyw2Xrup",
  "key36": "2R6w4JegHpD6S7K7ZQbds8tU5xFEhh9aXGtznq1wudLYrkMqhfajE4VNCUbegiy3YN1jc1kqMriX3EQJrxievuYP",
  "key37": "5rAX58MSto2amVp6NqeozpdGQw7JkkCEP6qzg4MHKutDfPktjmrdeT6BX6ChSJbxf3XkvSc9xQHgBx1dMPYs6N9C"
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
