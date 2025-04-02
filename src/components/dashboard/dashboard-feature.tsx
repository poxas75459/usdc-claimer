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
    "4G1nKPU7DYyeh3JcX5UE5NZpAb5Ue6tXaUjgwoFS6R3PvFVHVYmTJM7PvXwu9CDRUr77cy5j3JjrRBi9X1o8Tn5y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4spHJ4Go87ASA8kGeWere4DE1ZLPsPojKmN8KN8sPiLeDrBpWBTiA2ShqfbfaKyydBGeej4om4gutGdw1kJsMLyu",
  "key1": "2q9JRNaTcYwXtMvWguME7LLdZB9TiYF3qG3fAF54u3u1p2c4iwMRQ8jGyrvvJ8mH2XZTFm5DwtV6rnzdjBQkqwU3",
  "key2": "3UQQekM7bdWx8cQMghQbz9RLq1ET9mmSLkcT4MsS9hCMj3zc5bE8zoNe3tbZBwxZz1kF3nSLuAsDgxqFuVwB5xZA",
  "key3": "67kdCt8fUQiNAgLddtdsFbfYuHux7A3BAeRqXDwRXdPuKCUYKvTCD9D2MUWd8hADUSjRCCaE8B4CbqT5npca9j6X",
  "key4": "523e4BKdZtQoYLg2ZfzisUifQuZwTipjLsEgVmvH44fEycCkkrXBu9JPmRqKqGwrfEzbx2VY9aQtFyNXSxrftRRW",
  "key5": "4vQHAv72fLJ8PJ3sJi81mxJBWLnvwxp4jCXDiSJUEcHiggKb9iCY1A4zXbcTCg7S7GWo55ivVjaWtFRj96JZUedF",
  "key6": "4t2AAwyht4tjY8mJKiKfL8HrcbTfb5vNQyuQqi6nwHqy6Y38i4kg48Hx5iHXji4aQRUTUpVPLBbaMQ5rFemzgeuw",
  "key7": "74q1NLnsBZzamAMWAAe4wA32a75djU5twQVxXWqGWu6U1fAk1jvTHq4fbbZLaYnEs2SRyFnqbcbqe98oD8mxR4x",
  "key8": "3rM4MpWEYqRh3gBStwHptR8EP8VckAq9sdFE8NE5BiRzu3CpNfSamZ4WXEFaNq2szYy27WtkwEoDRPZuC9QDRHuT",
  "key9": "481ky34dMUjbsjQVdAKPWpuCF2he7BFMxz6YUT7frgxepL7gEKuoK64xcmaYBVdVgsSFSRnxDx4W6NimTJtNPwaL",
  "key10": "4Gjo15AwDrD67yeR8kVeoA3zKywJdKWyhAwAmNPofHraosX6a2j9Qjs2AmEu1Z21kNRgnDavyS6QmDee9kkwkNHr",
  "key11": "64D69XRXJhGuAY1fhhjBoatQmYkFtKDgHbJdGdYiHjb6VcA1zSrXdcVYsL6S9VihoxADr5iqEpFQpGUP2eGzbNWJ",
  "key12": "5pzR8kLDz6Hxr18cBiyuotKCx3osJg885uD4PBcEGZUkMajEWK2V16FJbrRKiBfyWLN6uPoTuYg7EsRZKaQycdmN",
  "key13": "2GB5y5oyXwR65nsj8wjbvscUGXLnRH3y6aVCBMrsL3k49LhHvapLGALn68WbDELQKH7Jb14QwC7BFzxdsxJQQ67z",
  "key14": "5vMTcBhEVtYcdrRr8yK3tG1pmHUxycLgfx6AipuUtocCnShebcmnGULBVUXV2msBToMcbo4wTvL7E2FCvfaTUTeC",
  "key15": "3ifkfHCqU8Mu8mzwKV7D25Mzk3JK3CBzFr1FB7DBimGW2jERqEPzJjAZvgfwPWpP2DuvfFomo8GMa3GoQE3Av9nZ",
  "key16": "5B5im7YQCd8hM4eL73AhzBLJzgQ5impY1mzWauP6kPRhdzcTNnZU4mPc4ApKjTT5g9AWRDf6QXgdK13YTUgtdSU3",
  "key17": "4JWBQgDQqappw5fw6ps6aLeGapPH4m2Vp3ZbRAYE9se6bRZnx2BGz8NdNLmKSYMTcvUbXQGjAZ7XocMcAWXCMtmi",
  "key18": "5HYqbpJPbD5xntEHqghMkLBhchmjMSyyti8eopa3DhnYehp9XGCvNSJApaXfhxYeFhHY3RyRs49gHgZGPD7LPubQ",
  "key19": "KnGdmssfe9mCkbp8JiUx88D2xrohUWK9HPpVAjsYYJJrTwcZ5PPoPAK2tjJvUv5vyqPg4qMNPsPj8BvEnMTt6yU",
  "key20": "PtMzGKZXM9kwFWKgBycfJpMh9A8AhC9WRQWTpujF5zgMjwzD9J89wzSnHGHzaksHsDfvAyckXXyK2vtaVcETsq1",
  "key21": "3A2ubqSDs9bK2PfQ2jNHcadp2gaTUyPJjERGRzARKGC3WouJdMnAqmpGxZAuqQMaHnfhKJy4yvtVkZzGCnMvP65d",
  "key22": "jW8mbhZ4mn4Zbq3uGXWwumxGJuirm42e2amUkYrLw41FyqswKF7UA911V48vr1SKQ9oyYEcDuvpHMxdzHAWjbov",
  "key23": "KwGgpfxLjUNwkxM3JYwSQZze8xU1WSBwXE94ygyWUQNuNzkLqoh6HjnTeqZuui8n4g5SHK5pRJS6uFaeyqk79yU",
  "key24": "5udywsMUrfoktYDmWao9GzejaeP7XvXeF4nkwbtAjiiXix5j9Qri5qHFhD5euHK2DSxsv9KJuWRJf2yYXKVvrand",
  "key25": "4BNjAqrzUSA4MLJCEWUAtLPzo17tdcon9uM859y3tdJwBTN5imu4J98DhZ3YsJo82WTNkWgwXSbZmLcT98HXkgpw",
  "key26": "3s5vxFLCS6NiMFENU3esVCU5F2gCNWUJYmoFp7bAz9Kc2e9PFWDWYJywXtykJ5ioPPR1Dx3WXWNeZd6BPDQMvqaQ"
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
