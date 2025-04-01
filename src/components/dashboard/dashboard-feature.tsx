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
    "2uDuW5QTDn1wTgsvuxrSzreSaSpwNqjMgZZPeaWbS1CXDXpzQdCzZ9X6KvEwpzUQZqLYdEV84tS9oMobAuiKPm2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hQfC5XfFhre9ubKn2WYpdxvAYaE6QCsaTEzjUc9U6hDZY2ubcNN8PNVwnRv6yR2zrKYR98cSJA9tM1dwTX24KvR",
  "key1": "3Uppn653hRyNht7LezjVLMjWsLAPeEZdEN83ojkcNM3D42ZCawe4M5Noj1HRpTaCAaG9weMw6sX7MxJZup9QvfVR",
  "key2": "2DQTFkSzTapuqcBeMAtmXMq6GK3QK9PsbxnEBPDkHWnL55X6mHnigPhwae2H8rqV5pQccFPaGtA5zoLoqmKCueH7",
  "key3": "3tYB8KstqfGMy8xFaWdpvq6UK1XCHJNNPpp9fqKmKe6mPZSmbiXDbQBA4ZG4LPKPK7Kxt53cbTvvbRProGiMsBEr",
  "key4": "4xyiK2rzWvmUSiWLdKWdh9UgfXa5FpND2rnN9x5J4mGGb2o6mJ9EVu8RUuXd2mxjyvFSsjAbeuhYEPeQNMZXahcC",
  "key5": "5f4ti8YWBDq4Qp4opmUZkqZ9zD54EMDJUMSpQ5F4J2RHnAPoSpMbJrdP9TP8JBvoZzLcBFTy14NNt7YfPhZ1cVs6",
  "key6": "3q8gvrZiigK11m8V1KZ2P1bBFnLoCJo6JDgb96LGVHBrMdjLMbmZw4SuVyCnEYsXdLsrAdSWEAdxa6T2v2x4YFDZ",
  "key7": "n1qCxaxLQ29SCRVQTSikGoSQEoNB1b4G87QgTsqKvcBHn7qj2ojUdcwkDZvASYw2KEKpkaEzomn6UWaGvkQUdUW",
  "key8": "4g16ZDWLe7bdHYC1n553s3RCHfn7Cvnijc4FdfHDG4RC5CrHBx4T4iNKHifaPpPchtqJ4LvMdBeJnckcVfRvJwGU",
  "key9": "2BswPyMwhqc1P9dLbuEkniUv16VkRqme2BT4rNNDt3ZxjACrzzoevLLDDAVqREVjya2e4e2RYqbDPvCvXgKNU25e",
  "key10": "4MRqLPAxuP7Lv2Dxq41otg5DWpDectpeecaaGVgVf3HqyhE9EEj98dYLz8q22qv3T4nF9dwhcT2WMW2gzhr3ZZrm",
  "key11": "3s6N3SPJNEq69xqtquZo15ftiTayZSgj3t9RAT2hyXRPZZJhWmZegwpiEgcHVCme1FoC8PL3es7rdPV7n1BoYW9y",
  "key12": "2mQNmXC7ojPUSrqxPJbbMey2oRfHNdvqG4EUB71ELpkC7Snnqs782uNJENB7NtcjqpuTfhp4rivYutSRYnDgcxTt",
  "key13": "2Mr7GurefquwTWyeHu5UujtL6zpNdW4exMq7DVoM6qW8F5nMdesZcvwnsp6qn3Kr1aZYuau2PBpathpaLhZR9Ba8",
  "key14": "fcafsqrnPCCrZk732aHuFXkNhDxp1DQKa7Do8y3bg4nTBiMvYJS2kkDvGEUeYHe7mEgCNyQ5humAxJT4KkRCWjM",
  "key15": "RYvFXd4FxcNytrsSWzCFP3bSsaitiJiiCarH2bKh4wN79XcrkRiJo9TsjKeLMh9Q6e6dAdHh5MJaQvcXefGUjJ2",
  "key16": "2JPzjsMvPLqzA6TqAYTkbhgQLfdoKohdc5gCjyzBEXTkCbPsFbFwptsenY6KY8Taw8sSbutFcL9EvQ1cPaKa32yc",
  "key17": "2x3PiP9kcU26vf3nuBJ4UbQB7D28krgKDqfWn85UNpkk1aVmkKbkVSdsLfgj5STETHBFsQKm5vm195mwomEY3RVP",
  "key18": "3bJNLEwV3t8hQXrEiKBYMxyygS1a3cq3Xu4sEFhVGBjQvyuBHsHM3W9Gf4priiXhaRCqLrjE7cy4yTUKkSPhjiAJ",
  "key19": "4xybiJEVgmUYfPQqS35nvmCx6mp3FA1sofXouy9sHKFSmNz5FpKRbd9ECxzS8YJjzgaat7LtfDYy5GEAT56o5vH6",
  "key20": "5bZGNDsGj8KnrFjEbYn2Qb8P1bU9kpndQ6ym7qeqSxQGAhVHxtpuRhUwvTQrfwKcnE9Qx2A7cQX4LYzsJfeuuAXF",
  "key21": "4sEHB3Cr5RPQhybZGTCbW3VUNJrGBqtLbXJLqZyPNN3WzsUE9EZuEWaAVUy6MEWNtzZ4J7guibko3BA4fykdHEfM",
  "key22": "441C2G3LmYQt5HsQ2yKUBCZ3TBfeLjkqMuz9h2jDHvzz4LJr15Cy6w3CZCYF9iApunvLUBd695mRXQLYQwL8Gex3",
  "key23": "soGaGCULHJcVxL7HbztLLw2mGhamuUE6sd3LMfiLbLDznRBWG9g8565vfzZevCcNJBTSrnibpU3thVqjuS8V2fZ",
  "key24": "5LrDD1anLyHykqh98w2fRd1VHqwtRoFfTRsrJUA1gp5JLUMrMnariDiKkQYtneUoYNnFQ8wMkWZiFxKyN5BaKf8B",
  "key25": "2rvgpLvDcXzi6ooY3YJYg1arGwNLXaqtSwPPH3gKm3svu8gaTqcaZE1nDbttycEV6LgxAzug4PtzLfPF3EiUhxQs",
  "key26": "5NjdntLRfjx4RxKurDaWfypfaKHTBhJrqS9Uw3whh6uV7esW6rFSRzTGAyxEkR6c8Dp7DH3sfQ3pyg1QJaGoV4Zx",
  "key27": "344UgAMBfQzQmapjUbcFBZE3zBGyGvzpvYmMrJLigQKuAWL3TjeizajJWsiGr2BTCxgrHxyvFkyRWBobGao2j31F",
  "key28": "3fRnQQ1TPYacQz4RjDcnJ2paXu8unUVe63Z5z9WJPyEGSCJpTKy6Xz4w5RTAGcy83V4DfPzi2TNG1LB6xBrNBP3j",
  "key29": "5vTcNBq6eECZBgvSHEQZvTHi5ht8orhiaizK1rJX9ABHPD6XxFzYKE12hpCP2JcYjV2Kwgjy4H9tjfZ7nJb43nYx",
  "key30": "ir4eo3J2vh3RnNW2haxneRoeQYPgeJLcabm83TZD2S2x7RHMsBH3Jbkv8nSBAW2sJSAuVGMdJnBYe6KC9c914je",
  "key31": "4p34Q1wYuT8uzdLCytSAtxb6sdoykpT2ZWyWFwfkYswcdjAPHiYfJStpxbKPWLWevPgzif1BGsCWQ86UHz2uySGC",
  "key32": "5oebn5MUBQ5RUgMo2uJaSGNhJzz8LtzUYaHBgSwByjSpNedNop8ismvTubjPFhZjBqBDgySGixwahtxoTAvmaFXH",
  "key33": "3GgMmH9rEAQWni6rGvtHgdLRootP3X6n47YFVFkY76dY8NWBrcSEjxKhpye3MX7Ws7T5ibmfTr8KKD2doSxvG65V",
  "key34": "67LKFdiRPvGWB6GmZNG2PPp1SToVFWRiVGk7pqbhXikTCLUh1MA9FwHYsY3us387JEeqUoLLDHbFAZjzWgVk8R3a",
  "key35": "428gassTV7TWaxZw3qG2tgBAjM6fuHXv2EobwZ7j57KcfYwqrnQztL4tGo2EyucJuYGCv542QCT8Y5bMcBDGmkvk",
  "key36": "3po17R1qEYBekg3tZAHXxzNJPswybMCuQV44n83FzfjytPbgjipezge19vLnGpeFumADG2mdn5oyKYDQATxjhBLA",
  "key37": "3DbKwEKDaJ2MxLGDe64P9bhY7sjiiXnya1oCTESHC27gDsGZVC2VB6Sa8DJjbrHPCsqiXAJNnaocJHicZsx4t8Ty",
  "key38": "2b7kQj7RVvrMuht9cfGBcQQhrgnjgyfkEVJPjg5AcFiRwUeuJbxnCWXbyW18HbpUbnE4rLvfvjbH3RhNW1pEHUk7"
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
