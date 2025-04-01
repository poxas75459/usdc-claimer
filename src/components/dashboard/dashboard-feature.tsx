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
    "27yhUwjWvVibAQkbGqLDXByDSmpu27pXrn4cs4RjDk8A1aucTbhKvQLRUfgx2cDmuDhz2xRnddidrAK3Pry4UG22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wc2xgoJueJ555oHXv8soM4pphH9UwP4ex69QpVhHJzss4LxaaGAcuar5dfZwEma2FDNgdk99jsShsoB2wBbi8n6",
  "key1": "ibHc2z9w9jrjtmFGQz4JKEH6JWedCr3tSgg6zYa6wqpUh31NG1x4pECGUtUGyAkDdYxmaweTMMGKmdHp1FNffCn",
  "key2": "67r5DZHUUkYdXFwWycKM5v4BQo2hsv76zj8YW89TnFgJVZ7GYUh3dsqCFyNTpYQf4vu3brHhVHJPxeaXz3vsrasF",
  "key3": "413ZC8Cni4jatZUz8vEgBAPqF5L1VNzqaWzcJ98JsWUJoo6LwNGFWk4BMx7SY1g4Zc59zvbaY2vUTNkae59scGxt",
  "key4": "3jWFbiWkMtA1Mfa3PKNFUzux5Bphna2VA1ivLUCkkEN4p6y1sVtnjqMgRWWUhfv3um8TFFKJ1ToEhStmjzFrNSuY",
  "key5": "429eLPCYqPaDjq6br44AiLawZhqCZQsgA1DHj92irm8Rj1ki5EXWN2JgZ7fLJ25Hyg5EGgQW8qQ4Uw5eyBqn6FbZ",
  "key6": "5A1Ur78xrsWN3DvWux9VmVLJr1ZVRmA8Cz8MfVo2iii8YN8HbHpJPAcFGCgGEsBwZdDc7xwEycMXHWCGXvD2PjK5",
  "key7": "MWAsrvFHXRXdFK11diyZJY4zvvNRhzXBQrVjkdAMXyfLgoUccHw2Cza3CQxycX4xJ3HrFA9JZfMbsgAMWY3PkC9",
  "key8": "oDu9B67kuDCznu6tGAEk4uGDNc6mEWC3NPN8dXuwNhq6amNTwjmMYB4Bn2gqc7EnVKREvWYvhwHpVjpHjvZ57fT",
  "key9": "3uwueCMVXtHwAdCHgarP4DQicwQ861et7BEGyuFer6xhQEEXWzEXMGjnW81X4KrrAVC1RvP8HGN2nEsgkPbSBebi",
  "key10": "2UjEKUJB4kRHb5aoPMvjdmxFs7t8u7FcovVuvx5TjU7mngiUcm6qce9HhCQZ5XLHCnwmqn275zzDBgDRseVSEQgL",
  "key11": "4AbGDXmLUTLF3Txvkdkz93pfAdZ3JqBkbj58UT1dHz7WGfCSXtKuTRmtChA5GdVDymVwBko2gzuBwHNfsFGQL6FJ",
  "key12": "4W6CxLmsTNMYkzd9ydtc3QVhjQhmYs8LcwN53FtrFfMcKkmK7HpZnrtBHDe5YedUxzoUuEyRCo3R6ZY5cSBhwEcK",
  "key13": "WWtUaA9bJE34QgFwc9N5aa7MruZDHmQNH8ukLs8mwRMRkFjxXRhuhcdqtV6utwHXgtfTLk159s1MSJKDBovsVPD",
  "key14": "3z6uXGnVgw2UVNPRkDRrdn2TPQ6T2YbNYH9AgM7XE9rFmvUi7dvMqZ68W3B5TgRJCA2HYK2Nii3sbYKbLux6RMBM",
  "key15": "2yEx4DNsj3YKdhfgGDfU2wi4RqxZDyNYq7cLRzc25Vw7YT79q6WGGTVFxCt1KMZx4ej6TYSCeWWm5qseEA12xzqd",
  "key16": "cH84oi4sy7pZxgHA4v4bmf1wWbEHSoCMTD2YbuSTK8prhaH2JQ1XDzjMKu5awDc4iETGFcuNXMrZTVUCMpPJbPH",
  "key17": "2NA6jKDXvWQa6UPMMmKTu8Pg8pkTsVF5bs81RX132gmLMhvwkvw7U96d1KRN3e5rwE1b1YaSUHCVU4RCzESpKnVP",
  "key18": "2cRYH8VZke1fpmon7uhogKe73RKX4tYiDR4tG3fw5cupVsdpvcGDbXJvzRATpuVAmkX6vyNpsyrcxVVdfk1MF19c",
  "key19": "3Sfr7VAeC95yLRJpocpr3oaBeoUwGbLniwqA4SxhQ6Uza3KBnhNHoacgMXbGUqbkk6ZKTFMe8c4Uu4AMcEdWA5E1",
  "key20": "5zNWvCEM47k9Qo7HtEbS81ySavUdUXG7BHm755A8yLqT2B9V7dn8FV7sLBp1B5Hiv8MQGd477KVPtAPgzHKo99as",
  "key21": "2DeuhZXe5fky8jujvw6HAeWAbSB14ti3x8UmdiGxaQiKVNPTdqxSkHVAQU2EYC9RzSAJ2g14KqGr5f63ctoZcdWo",
  "key22": "4v9msVXuXSqvGT2u9UwJFMom9fSb3RBdErSxASRp5SK4YUhcqLXGmi6h6CHB9BsBzCBWXjRvcPY7VLpcJss2dDt4",
  "key23": "2h1eikMWM3Z7JdEPPkWNKbjojchoeEMJY1bFkNsszBr8UUg2zGSg3WXPjZrPDqfhWMRGGEmoG8j7MFkqPxDzXdSv",
  "key24": "4Rf3totfAz8xf2FNosnNetYsXDyArvNV71cQedvxp9eas2bc8X3rje4bdey4jYsCLeQjJ5fgo8cLdxc4vHMPU6FY",
  "key25": "xYTyqFCTrxS8RQ8wshBPJTQMuMRCgpzmeFFXyM4PwenykcwxJrEeAVrByD7wRBa751SAYNMFdnUbKcDKhiA2ijf",
  "key26": "jVPB9GCnjSTd9kqWekM4s7MMeDS2eQ3j1mB8Fm1cj2NpNuThq2nKJwvV6wG9hNcrGYnbwf4MRc3jEgXieDKimco",
  "key27": "5MEnpS8ceCCNfpTNxKoaFs4MpUKb6qwuscXXaFwN3Cfu35Gvp8F1GESqJXRx7mKdMCS4iFf4AegBQ5ynPPcTqqhE",
  "key28": "5oQ4cBxdB5j2XBmTgejqB7B5LYhMfzKXpN3Vz8858MiZpAR6iz7hwARVA6RhHqDsrTA8x7FMqbWiwBzHhxXDEjhp",
  "key29": "5EXi87Zx3b2oZGGzkgJ4HBbWJZLUCikHfSoBNddwsLBsti9zp5zApuLtKEEBzur1KUFFE67UBDMcyeR5UosGHhR3"
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
