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
    "2qq58Gc8zZZAXXgC7c879NUDfmymgjkd6rsUzbenS9Vqqfne6gYQnui78LNC6YEyeri2KCKmvajx1ZeVWc3RxT8L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QLe94uYtLonmEBRgBhAtdzAH9eBdrLru6m5dQk3Aa6QQNkf5y6gqVSCXKAuoBdS5UsUvEG83yUTLfQKaqzm2Rkm",
  "key1": "5HTujBSkLUz4BaWJ42ubEL83WNqczpQyYPJm3zDyMrS1ZmtpUHsAiFAnkVkmLz46YqohrNeH6zcdPEuMZkN48mB8",
  "key2": "5BTPFT5XwmGdn31qPG2mcggLPKKFXALgfdmsyoD5qaXogsz1q3u52bnPZVhg5XFbc8eHNArLmBfcEvNMmbpaVw1i",
  "key3": "2nQwGRxBuh8uWCf6HeHRwHSmS4iCBLeMWLYVJEByGD6aag3TxzYg87VednFvCUnP29zEATqExmKMxE29627Rk2Zd",
  "key4": "54aVft6AcZH5cP5PGD2r2xHxXqBWM8L2oS1UB4BrnnPtWaFrjKUJxwiVBFLxo4iyPC2A6XMGdP69ZRWGfMAGVp7t",
  "key5": "WLm7pq7NdEZGVK6LYrWYsH53nxQd9yUdgRWUsCMRn5rvLB1cTYaxpZ9Bu57QadWWXy7ot1NrcjJyjGkdM4c6dVQ",
  "key6": "3fE3T8jczKSeYBqA7BvJ39JhjEyQfeA4zV2BWd5qCSoEy5HbuegimVtzGBmo9X362LC5GGEHVzVpTgXG8bzokGDh",
  "key7": "DJqzpMBFqakk82gVJ9tFVrWptBxWaXf6CUsDtM9To21HAW7KFs36XPWKxzyjyj7hbrGSyio5ssXKHxDrin8sb7T",
  "key8": "3aqeZvWbF8DmLMwycY4VWoh7anEsLaq6vUtvgESU2a2gFrE7ftvjUPTm6wj8qzppvziTwSQRKMF587vH4WFkiXdx",
  "key9": "477B4Ls1J6B5TS31vmArpE2DDqzS8MAgnsmtL9XF2xFh1KieMTBvkQe12bLQnB6HCP9zh6CzQL4kBLHdzRjtvsor",
  "key10": "2GUKxdC93UKLGUTQsQwQCyBY1cBSeLQCMhEgMdz1CcNUQrtMdkK81EHs7oGrznLhvpMfuUTHWTJSQPF2WEAaQLjE",
  "key11": "3mDCYBkD9iwehmkTkGyH3XDDtDxuCMUAKcZTeMjFhWSZt4USKE9Y84AsodzQcFWkdytCdy13Kg2AeLUewv81janA",
  "key12": "4MJM44vgkSbdTS9sraM8bday4u7AAA5bje4SjaiVPUHw89ue9GEGaRtT1A4nXHFywZjy4QMYzBv7LWCF2YG58CZ8",
  "key13": "4JWhAfc3b3PpMm8ktvsYipVFc1M7R9tDdRW1Zk5xxZoHGa3X6Q4KxHkSw6QLy1X9nu9RsyghouXmUHs2YigPGsKZ",
  "key14": "HM4TyqNANDGER5zA7ay1ubteTsdn9gtv7uyjGzag6Pbfmg5CeAg4W6EL7bpXbScpqB9HSoPg1PPxmXHZ6huSi7k",
  "key15": "3ZUcnm2QC3HdHRXmRYeTB4ZjdLrvSZZFpLrGxFtGqxz6eXgs3A6zkZgcvkPjAsoGLPhUXnaZNv2L4Y3q5CFGsQuh",
  "key16": "5odN5yUmwnvrDk2g6V5GL7XkvNFv2xVw5JRmZMbVgnQPSxS8qmV5tuykk1gaNf5WTUywaDwHQiQu3J99wDdhKv7q",
  "key17": "2uWMdeN4Bs2LRhruXyNBxboVvqrsv7dWrVkkdLaM6qX2c9M69SsZE4YWtBrjJxyKf2kJLJ3HHAqfeorDhJeuzuMu",
  "key18": "3QYELbG9xxB1QrwGg319t65LwiJC7HQS14XDzM3P7FZL8kd9CABPNWGrWoTYZ6rGtWcChkSJPNV3dkzx63WqoWiF",
  "key19": "juu5LAS4X6nTDyBHnz5v2p7i18tkPQ4vg8ToTUQMZCURpRHFw4qap1GfpBKxAmeC9Rs47bnp3V39FxJRbtMZg5L",
  "key20": "ruyhN54EcSxAMkcZineNkxaykCqawtHKBA25w5AtgCq7nicXV8Gtxh5HHQ242oojSzeJKesHXtnUtsXigHtTDr5",
  "key21": "4JWfnVowajT9wyVUZKmfPcnZJDGWoy8c8qR5vzaKbdc4y6RrwmLeJLfehHUQQz97zhLUBduAPVKB4ptYuY4MdTew",
  "key22": "evuLv3qzA5yFgQ8bXzfTqo5vtcMFuhT5CWdftPNJ5sjEoMJ9VQWf37p58NGeaJHYatwEniDFAXnkp4ALoR5ARNy",
  "key23": "4LR3LVvZf53f4jnVLX91NELKyB5n5pTsznTLiUVMPh8dVd1HnzTs9f9768cbHF1reNfe4kiJtpSTKGf3rrdwPUgr",
  "key24": "3d91G5xuui7HjRBcvzxiCxPUFhZbdLqDW4jXUAWTUf9Z2miEcWLfSxLWFgNR6ByC2JSQM13t1EJmUBth2oXtjF4v",
  "key25": "N12mxCd4JmEDcktRby4CAN6gqZBdZDB9WCxJT3G472tsbKnX31cUGKPvhahByB7gyKoeAjrgHC6c9Ft48iYfykR",
  "key26": "2gJqF8Zxr68TR5PaX2R3bvUjxQXBs1aDzW2wZQegki6B2guuT9irH7jJzcKBSnEojx4ZBRoxh9EEUtWSStpTh18Q",
  "key27": "udu9ikFte58okdapZFZhyCb23nMjRvQAnWjzct3NYbHvhNVB1GhQQAtW7SKTzZMMmqRj3rNqdG99q618MxNnsDi",
  "key28": "4cdbQ6PNYv34whoA5eirc1HLgoGKpssBxzjMw7xYt1PxMTy2e75f8PM4DAwdHmMtePba9Xha4tEgJx7QESVYc1FL",
  "key29": "2C7RVpkW62vrhgQxuP6JUdR1bErBqE2EcwdBAyFx36Zq6Ra9rwFY4QAL4CFuh8iboTqiSTeqZmkY8myscH1Q1AaJ",
  "key30": "4VfV3iDNL71kA33YAYvv2tZMRi8BU75fVQqTp1TFCkcyfyGwffgZVM6cUbfUyxMsEYaF9cLMUo6X725t14Xodgt4",
  "key31": "4trFbUA8Q6bnZFhhB2PCPL23gtCBuKohqdey5oQefPh7aUGggtyfE1VYbvmKeLhHsxrwoAdj12orNTg6eiJ8fMze",
  "key32": "4MXryAruvbhFxA5eY9GxFKV3g57bVzK5sDq1TzUZgJiXtxfLq9LzkSaUBS3Jsw3irfuAr2Kqvod7v4xzNmjWLxMf",
  "key33": "29NoxKqixAafRNQFC5bKGCvnm2gHrZuNV3ZaLrH1zFof7R1CiqCNqL6LuQSe1YKXQMoamr2yXbSU6gJ7xniRNMur",
  "key34": "5Vqbe2Y9LarkQbEtdYsQg1pW7prKeY2MK7Ym7greP5159DTuUrrLedrMLz1VYeQbdYEMxmrhgehtWP1NP6K9yM94",
  "key35": "5ghoJBwwoy4GK5YtE6RDQDodPtewyaqZzrLqHfGqCWUng8URQ8vW1MbRMjcKAjsYkUEjCbnxxDnYCXNjK2WFcVQn",
  "key36": "2h1damaKfaQ4yeoYsNebgXgkspSox2mUiqvcP57Yb1DcvdvGTkdqXNHmXm4TR3LSRF3JSLGHfMGvFbiX97UpX7Ah",
  "key37": "2PYsHUfFMXsrEety22SEY6dGM4aUU5B2o6y4aCrCL763YkSN6s6WXGgNtDyGmN9S3YrCwokiYnxiguHbQkEQ9mTp",
  "key38": "2JUyDsi54dyygKuhVjqxRsxK2bkFPG9w3jtER2DYJLNBeKrgWkuvxpmePCJWxHddZoVRTjvzvu3wuARtSKZFa8QZ",
  "key39": "4B5vfJdZq15fdBHP8ptqG5k49x4L5MRckigeUJzvYdrqAdhHMwKYPWD46jyWZKdg592qgdzyATENFgKtfEiMCXyk",
  "key40": "2WJd3JMZXvDy1XSaBjKk9muU2g9puQBjyauntmeEbdQSBjB4FGkdfvGTAvGEusGRnbKah4bgB9nUkqc5ZUKzxLJX",
  "key41": "CnY1ms4EP2aQgh9W935qZcrE5z9xx2TshnbbYkiGDuuzYwRdAYUpjoGgsCv3xMjLVUswDJBBXfxKpB7RsVjdFoV",
  "key42": "4GPH4EVcg2KBtBQwYi8jJpKqftjMoPDsaXvmjoMYb8rpCiERdWX6AfL2pgroPg6uuWE6fsByHwjavAtSudcnZBXN",
  "key43": "5Kd8VVLpsD8TqMPHKYFUnCaBw5AxeeqhbmdSpgRovKVyPunskHETAHibSvtLJK5HUFHVY6YYSTAWvWKheREJ7UJN",
  "key44": "4WWXXemgiauDtD9ajyjSo9KxM5VweQXHRtvea34phDzuVohcsw2RmkxZnv66UcnxmDuL5Zr2GczfVTdQeXkYzr9w"
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
