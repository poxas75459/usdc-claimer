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
    "2cyoqAxxcSG4Emae96yGYfrBTPbiLgqyxyn4bo3YiwtuxCUy4uyaTExnkX8Emxgvacy8r7ocMboCmiNFEZM3XLpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nnQUEZQoNbw6TTjHTNKe4FP4ptbaJhfDh5UWqbCyzHrpehfL3njbnk9oaHMVhEZMVpN3ai7JNjGeJTL9MoQojkX",
  "key1": "ZeAutHoWxch376xg4J9epCnuSykDXcnqZHDTrQHR4tQ7uToPG6GPhZz4zvALnpBxaBijtiVuG6wUknkNvKxeoDN",
  "key2": "3yq4kcz5FdB9aaebD58fPMe9UTc6hSAjD9SWDN2zv9APtFgWH85DeB3iEgaofH8u8JUvqNzhvSE5jZkWYpv1Kpa",
  "key3": "2sSgUKGRti6Jd9gtVf2Qm92fGi61iBvd6RZscj4Ukos33Mi4Z5AGpuiP4pLhoxNWgKG4txpE4T1BBXxKR3caGzzC",
  "key4": "5wMrsJVibwdxxkFyN4vH8x7jpCN4fJMdzjcU3NSMkoXL4k3sQgYkJJQmvrnfaDRgSBhdtMDZhDZweiH876XcNuS1",
  "key5": "ugVTeMpjcLDD31XmW6ZEAzd3SHibHVZ478L4yjXWtQYrsCKV64jEyFxnngCnkJvLSsYxZa8SZWHw6HHZfsj3neD",
  "key6": "3fftB5XBMxwXsamz1A1S98bVBks2ZDmPqo1jmJa5CbavNXi52DHLc8hnct6emQTytSk5VMQLnri5Mp2QEMxgoHKA",
  "key7": "4rtvqz59gmbWivsBvHzEuDRFDeMZa9iwVrFVtWALspnxLtWS4MvdYViXKPUy1rspaez6oTAMo7bpu6n1j3eWf589",
  "key8": "3JErswZXwuH7mGc9BUFLoPPzeJJv9Wkzqxa2DWgDpisuKhrwAcy7A8Yzi6D3CDSfutQtu1MWR15mf4EaxNQcuM7x",
  "key9": "5YLL2Ni1Ypd4LnSpbbKJyu383n9Vf9bxAZRMNmKkqV1EM6AyMg7feLgFPYZKLaKb7VKtKhpS1i8tB5gGt5vxbVU4",
  "key10": "4dmXuo1c3fmjXiszi5uAWm77rEUBBKA2mx6ednm8m5VBE3NJwehsVVTDqsJqAQN5avxM9r2ugRYCMQqYNNkYxEcB",
  "key11": "5hctxk9tQFs7LhUsifspki2TJfn52WqkJ1jrVMAKH8f4jvE1RQAKxhXKevDMm2vea5KZXJC3JebyHF5xjSfz6MSp",
  "key12": "1FSofZw54DEzXygc1B5EoprRVzLdaM44FfcLMTMoxqhemE8QXBJBU2qQtLTszbgcXdQ6JiWVQ7fSTvyfEVas9yC",
  "key13": "uS6AtFFPtXJFznx45NeyJWA2KrRvacYFmvqkhy48LZxqKy1sbEqUuFdkHBJpkpXw7gKTN9oK34WiRkDkcP8zAJ9",
  "key14": "34RPUqH98nC6p9y3zMLeescqF2QyoXMWVHzGSFr5SQPT36DRxUU1bqKyzrG83khjJDq4So9QtNrnrHEU2ywkPAEZ",
  "key15": "5pzcsyxa2AUAbWaXoXDXPacYhRwQLqHw7NE4MhvJ3zS2TaKLmU1XjhJNhG8GwKrcWsyNyTPcGNb1ctBG29j7orj3",
  "key16": "5TtQJUxWBmS1FGVDSv8Ko62dHTuRBHQwTg1DsjXLHCPLcD3QDVn7mzX1yMZ6M2TL7ZibQr2B42uS7BxRy6vgoBww",
  "key17": "37XUwvSjbRG5FsBBRP3cSm35yFEh9cVST5ohrLTYfySRTVxW2JWfYuZjCP5yCyy2Ca5HNuP4XF3NPoGSdKQHyyTA",
  "key18": "5Xq7BjyrubVbQoarMViDHVpxLmFqvmP9PY1kzrYBSKVdbTqAVGfX1biqMgmxsiSiooSP5WEEdEjL6wHWLMdP1iMe",
  "key19": "39ruozBkXzGtvSWWLwW6xk1iEhc4sE7ACTCzNu89tKxvJ6kHpyJZtzG4Zzb3MuDXMMi9va46ddBr3YQxXssSuuKV",
  "key20": "5wrAJvVkHwdFV82rCgu8N8hZXpdu6kDdT4pPgZEE2wVQK3825a4tojjWCnNtkBXY1yhpv35hfNFxQRudXH1S2MeZ",
  "key21": "xeVBJ9MGUjvnSMzi1PHWyraw1UaVSCzcxLa3EnWewobEPRuQBe166pdDvReA1kSL573NkgWx4z2Vt72zda2KQp1",
  "key22": "2n9HXSuKspKmAjZ2VmZzAZxmvffpQcEFi3SwSQVE55qAoamyACHiFv36T2SiXiBfedvFipKZ5QHvJy5WdrkhqYwm",
  "key23": "euc978mJPw6eQeduJ3q88F3fGcV4GyDKr11Ea7peHpvabzWfBRFFzRNE4NXksdaXQeAPk5ZQFQ5eTPGnnfFWHVz",
  "key24": "2ZnV5AX4aMJytxZahWuArwHg4LzAxszmhjzAhzrXekbpRbFBXY5gAiH7uTJcFY3G4V2TYSiMf8GLiH6oJMUUB8vQ",
  "key25": "T4JTWcy8mYyjDVHjqHLGc9hk1wDbrMM3qBbWVkdUgZNFF5jJmj4Zkk3qJj9s7siPPUko689fekVUvHJ3NGbcQ4T",
  "key26": "5J2uGc4V1KRdKuYEAnkQpVnNR5wzXryzyuejadtuFnRH38eHDJM9FVAkf2jML6KCatuLxvnFYA93MWh37P82wmZz",
  "key27": "477VJjBdnik2V4csYYgDFG4FRYyVR7cYXNneWsXvkWH3MPxQLuiXdwraQ1sKqgxEP6fZP6Mq8ouWG2EVWMFW3JtX"
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
