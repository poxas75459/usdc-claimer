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
    "5Sxfi8bgAXLrZSJW6B7sLvJYeNG5db9bCrrgdqg6MGsmtZMPTuAUzMgZJYou3cvTbTadMmLoEspoX1eaKCrggZxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PV4QVpHroXahKExKzxNVoYxZPZex2LTP2GcMKhUFMZdEBsdfJH7NHCgJRNLhaPKnF7kRtACFwijYmrkBuFVAx2b",
  "key1": "5BvHrcXYXC3KMttgQXagfQBAkn37ZPDUcRU915jWFt97qe2aFnC9ProytJiWK5UZMTVvEtcBuw9Ncf2WqVPsMSRc",
  "key2": "597r9DSSzbcDGtvhnZ1Fn7MgwKcMWaCuGundcWnDKHEwxGw2kKBmd1j2fN9MJjxQnCbL33HkchRx5UbQqj9BEu5m",
  "key3": "5ZP29mUiUCwtkvjWb1jAr8JHnYBDygUDcUFs3jRY3X4pSbikzbBMtJFCU2Mhc2DrCeKPXZH3tCP1kFGm4NCMsX7Q",
  "key4": "2dCLJXXmqoNpmpNk4hdmnioKyTZFC9zQxUCKJ5xrcRXxnLnTVVHgNx9JEQmqKhhT8jPe4nm1EuZLegEtQ8Tj74yW",
  "key5": "21GM5ifCcRsi4Qy9JzwRqXzpQwHZJUnBmQGhKh8CmFkLnc8wykpHp82J9u8gC9XxWHkY7kXUWoWKSBrZzoXaBXKV",
  "key6": "2tjgg7TQYxaZi4eCs5wqrjfVWNphW4z2DShjdMA4jeFrWQ9vn2t9qaPe4wqzbnBGnwidoS5A9GfANW2dSdBfuRbn",
  "key7": "5mfkp38uDRgssC7YXdMULNywAZWDWqTi7DAgZdGj9fSjK1sKRyNqGmEJJkMuUmim8BFan692HKuQyhRR8tXvncxQ",
  "key8": "4QmSsR9J4SQ8oZ1n2U3bXMgouKhCBKgoyxzLr9NxxvZRiEB2ip6r6M6R1V7WDf3fW5XYV5ufyh7b7zQfGb4LttSE",
  "key9": "3NZAyReq4xqNCXwXFF8Q9pNgCVwmzkuuHWJ9KUsdESHDq2BZ3ZMHYgh31degDHxpiUnyhcCAK2qas3e7H1rYMhgr",
  "key10": "4gPWUmqTsKbpSaW61PHnUQXN68VAShWcmqAPVbrftm1DM2gvi8wsNP4ivwPWoRiMfUXXCUpwfkPUMqoEMyCDJPfC",
  "key11": "5k1CBnk9uWtNEqBtP9x57nH9B4KCx13rM5pVzr9cpLrBprSNHwXAdvupx6EytaR3XeySpkbmcYM54fWAS24WJU8n",
  "key12": "5yQqhJFpehsDHZgYukUg3zPcwjFpPnajPgKccFbXhVZKqqRECDw86ysFuaqdss9AEKZ3jKorVbURZE3xhz5F83n6",
  "key13": "48kAjsNCGT3owTmcp3EZEgGK9bGyTKqPXnVBxJLby4PasoN11kwC3zusnFayb7BamcRUrRGp72mDXBaxbdiAYSx",
  "key14": "3hTuJTThu6kgZvQnLLRUaDkejEsn7Bcgwwt1pmFmpau3P6oAL95Tfr4xUq2TB22LgiCAETCKXmmySuUcX68rLbKM",
  "key15": "3hTCGrVE2ADevzSpY6UWK7vAorv5UXrc3iW9AtkbBm3mc81ongGn9SiK2s7ChX2jmKKdG9BS2SgWXSohpauKmyqY",
  "key16": "4roCm4sEpk2fPsVLjMYcgUyQL4uQvTcgcyf8CJacsGkeZrTu6aUuhYDHDmoZxKUKvPeHRefphDAQPXoNkBJBV3bc",
  "key17": "2hKg8TebkUuZUeDWLDoQuMppNCYQescty7tqT8u2eUp3P9tVqcY2idBo67Rzfu3qCxwvLYARyUTTU5mg9QvzCbfH",
  "key18": "5EfV99ymFRcVGXVSeYZP4oaSskL38kz3sGYMzKkty9uiKnR79eYi23UhzLWM8pqC1cZFaRFdCjcatbhzpyjFqiT8",
  "key19": "3nQ2z3BQfEm61UL78LH1XSCVpZofv3p1XwY94xL2PUt2z45zy6XjEZtkwkdaCEWuR59vCNF4JdGXxnHzD4yD4Jps",
  "key20": "59qXEMqhKAci6PPQ3jaKN2ZcUSjFKQvNqDMGjLR1Kak5VizVeZksMDfAPQQpsTctNEfobGTeN3qLNM6WSxvALYjA",
  "key21": "2LYwWPHQqnnSVtiDTifoSzkS1FhV9veY4Wpox2M1xiV1NFM48oNEFwSCEYV6swLBYAUbjtix5zotGVdUjhmdya7B",
  "key22": "67HWSGZfSFQP2CFBS8jFxr7p7fMrn9dU15N7CEzC9MusPpbmQXCtoyyX5Ls3dVxiPy1BTxRrzuQeazJNUYkXgJ4Y",
  "key23": "vPMtL31n3gKYyhbYExcETqNA3piWkwkZpDGbJXzLCYYjUb2QDbZk21fB5BSTCutHRggaRfcZc8HY4DsDhUFv4ny",
  "key24": "5HLMutvg85Fqo6PSuxjEjA3gMKLYrhgvckbyNgM72qyW1sP6YESfKyzBzRttevBNRAX28RP7xZrpKfABAjtFR7HQ",
  "key25": "5SFsc6EEsBnEAK8Lvz9XVjaS9hdrvT8FVkiBMC1A2yYjdgSuf4jVeENQiny9zpzvzz89NZSxtY4VUkbsaTdkk1RW",
  "key26": "26uSa8NB4fDTj1jCJKXo9pzuWz5WB2UzB11kNYodR9AkA4WJ5EDm2QW5GnKCKDVAvuCKB3YdgpNSGBpLJNUq1X5x",
  "key27": "2GjbtrXRYMXYSrW78eXghXVb4r1sBMH85WNP2gjhsKjk3PnCNckTLiLyPRo3tqNJfWm7cgLzc7pihJyS7qa6cDtk",
  "key28": "4FS1fnCgnVVYZqVPVHpS9aZyW7t7KvkGuE2B1Suj8iLmMmnnhby37hPmZrj8MC2bqMLBs5Asr6tdjeG1KeotV7t6",
  "key29": "58DwjMpi9DVTnVEFgMrbpCJBaZDksNNVVEhvWJxqvhVdJhgjXi16ZBY9sMsmgi6L4KKkPJmKMEfoWoFtWv1jhXmt",
  "key30": "74Ry7Wp6DEftNjGvqHFLujRHmK6Psn6B3S9po5AXbctso492Kij1o5KaVMgbLbmvXhkoeU7ok1nFi2HHGmHw8DV",
  "key31": "vpf99gQ8PYf1zE52xWiWd8FzPdQ6LyjnLLe8eaGEnEd28v6Py6NL2uuLS9kzmSHHDVM3Hs2BY7Y1NV3gQhVgDfK",
  "key32": "2fyDqprPds54dJPCcgQoaqS3bUUYbkARDRW2vAJvrwFKrk5SpsAdNJG5ReYf5xTYMru79LtKjPR2Znxmoi6kL4fP",
  "key33": "pg2EBzheJMRimZ8PPv1BVvShzdDUvxPG4rQ2stAMuHN1FDingDAoyu4S2rHKN8DbUvReMTSGB7YLgfdNJvMsxfN",
  "key34": "2LkuC6WutzpPVxVSzc549St73qUDtF1N1TJHZrjMtwp2YxJp6p1p64D3u5TxE1rMNyrqBGBShjk6AMZLedG7Ytgg",
  "key35": "5pNyMeijqnCEyRsWzMRtY5ToHoBGBKg8ULUPCodfhgvE6gQykywoYXRdpGJgcbK2ChyAG5MCtWmKkJXYv5QPxZtc",
  "key36": "5SnyYjnY8JhG5d7jpCJx35qbUarUmK1VKdHdxdU8LUDYbxB5o1sgye9pfLsM21cPfv9FZ5bbY7UZVunPePyaptv8",
  "key37": "44H6cbgneSELaxrAP7MN51jyeWWSzXBwV2LYjhvKg7yxoqmTihcxrJ3piySEzyNDyp9tES38uvkDvsDKq7nMfefA",
  "key38": "3vaegz6pCKMQuHBjRNZy6E2wqve7jaZZ6SR6Ri3GkwZ7kScCNKz9kF5ddUR6dnNcT9KT1CZHujAnirSQTXMhivn8",
  "key39": "3iihAG2tChbaXA3VLyEFhsPXXG696nEGDHkUewXctrWuGobFADvb6HocafVkHfpLwGr17PCqSr66QerBxKTkaUNG",
  "key40": "2r6r4u6kBpahUrp11WyHPdspw2aArqkvXv1Vq2Y1bgLqJmHUW38KXBst1xuiSDxwGjZvsHMH61em9KvzppER26xG",
  "key41": "33P2B5rk7vjBzci7FqfdX83DEZbWmRMXB9MTCXkQYvoRZU5FPW2GUoabDN15rtSyafTZosJ9J4UAtySNdC6vuKcX",
  "key42": "5Fpc3VBTCxVMzcVhujTTajdyWRmM6LNaKURqH179z6trSqWu41KnNN1nvL9Ky71iBFYDvXJz8szrM9n4YRAwQNtT",
  "key43": "2LB4de1dZGF4BeqZgnGxvESAmKixBgNMXUoSg5c1qa1bWEzsxJ3ZYrZwAxeckdKRpuahJWJHyzdqKJbri69Sg9gJ",
  "key44": "pBtSNGTE5bRcKS1uVMyqUxW1Ji9g8CKuw79qt2TZ6s566g8iofNcm2SJJBNTt9kpeFvSN1XjmbYb61xGESrGqH1",
  "key45": "2Eijz9tiWfERawbTnjWVUbm47WvWguUnPJ3yyAhuNEnZeZvyUCXRDmdLYXsdeaSzTmNyhro6hHfye23uYogExAnY",
  "key46": "4JQr36eq81jqhu1sF6ZWZRghyDkYvRKB1W29CzLejNHdxqSXQtTG7okRTHprewGnptwF2o76zPQGUvKv27JG3yC",
  "key47": "9c2rhrTnWHwAcaPnB6v6zERfMiQEfdgPYwpT4jBZK17QdBMdiGPceNGUXhMqi7VSg4Wi2t1jVA37CBBjnPtQZYy",
  "key48": "57pCxrUh3ZUz1DWJPVkoiDDQroNV7omngEPxuRvP2Kn1WQiefqvWabgEM1RMyDk8DSSGs14nhJsRTxyMpzUDdU7X",
  "key49": "63Ju1irKGX6HiPuraAauMqADotTqpTB26bo3iqWeoJufQkjkc5beUYGUDMUkF1RTYLUQezMoqjp8AYpwJsHrtb1G"
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
