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
    "3bo7L5PPCEj1CHGKPcMMg1aFAyyz2LzRk8qkmfAWanR9dQ7jpwkwMDA3tZrWe78dPB5YPANt4GG8sAKj6vEDDsVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nXESLsRpPLMchKyUaEvxa6NUUy7p4eJSpxL6t7fxckg9i2HSU1s9U7MMzXmNvmrSUJQaDPvCCPZ6hFFgXY5NZcr",
  "key1": "4sEaux6nn9UpjzAbJGeJuYfQdxbRWAoHMqYjWzQboyu1vjEwof4tVLhmYbJPdGXbPfYLFYkUTThkhRFmou9Jgv2z",
  "key2": "4kp7Q4t4pNkcydVBjRJgJAqiCHaMo8mvdEJ4Bt9QrvhaRuNJBARW5YMrNBjaVzv8p2P3nrd4coTS97w6F12BAik3",
  "key3": "JCBZJPd8YmtuFNeqUiCngUUKoe9SAwPGHwe3GPDyxBtAhfXP9PHKgWkZoqGZpTcABUYMbodQhTvpUMMEcP8wFCo",
  "key4": "4ut7qQuA5zjvAJnTAcuzBhweMiCyzz8iEWEBBpNBA4J9WEomiL13wwNapSXtfQTGgvXFSMy6mHmcjA4SjYUZLQWY",
  "key5": "VL7oyYXRaMwhhPzbWun3WsE38ke2vemTFGFP9AHU3doqv6nyZnsFaC2sUGMsicvhfzpNExKWinVRQa8S859wBhc",
  "key6": "nEZ8mRLn1VseBLY6QRuRgXNSAYXBLPUX6rtFntnrm11o74vxWD4MZQ71ZDZGaxSVcKirghtkjrxN7W8GkVXXmYz",
  "key7": "2he6rEiyC9WA9Ad7rghSDKLjfAcXWrcYz3VhfzXRpfymtXQPxQg6DYiDet9x6MRgaV8xpQjhoWAwD6W2PdxGsHE",
  "key8": "esddM5nCgsRfYabuFDnEqJDL4ddgT8B7kGpQbPAek2yJ2caahxKi3aH1dny1ejc3th4RhvahXh7DwZFsSZU9CEb",
  "key9": "wmXAV8vxdubL6oWnW3RyqcMhbfctPb7L7rVS1uov8K4rHT1dop34vkten4pQoBQBumFyxUDez5AtoGuC1jiTnSg",
  "key10": "5VugvsoMD3hQwhWrkTSp8c8QUNatcuJGVL6VJNAL5PsAUESPGWVmnNU5zrV8KpiYWcoens2Wn9AwXZ3L7wHRCqxs",
  "key11": "4S7uWWYyEubCnf3v7NUpxL1GwnjRkUF7beG98QusrBybzCa4GFozZ7fKBZkCdEVMJRovxL3vySJ5uX2D68CG6umQ",
  "key12": "2Mi4awXZ1C5ghrtT2EVqWfVcjUScQensXzERY1hdV1VAVvZL5y427ucPpmLdsMt7xyuXNB4oaYGQEDh4bEE6KQzX",
  "key13": "5z6h5VDtk4idLQpzE5tQW8FTh2kY4bc6zqtPUckftMwfQ7AaYmCowoSypV82oQWJNvxLM55eH42w9qYjsXYASkt9",
  "key14": "5WnyCLJs5d6AuybPSuCpExkPMxXC6KuXvnoo8MXLEUkAq4jDiarvq2Qb149zPV8MCSG3bf4h7PVC8Td79oXMTTJ3",
  "key15": "5XMFeu6DyP9pCjmdF4zSzCwzefV5dofm3LmwqQgLUtWoEhtpprt2MvMRP4V5VgDZrxFmULc6H2nYLxeQj2wKfmFf",
  "key16": "2yF78sQzbkAyaEztkJJhNrfqz8o9FAsWjBfjzNsJ9xeWaGgcCiFQkzgyez3FcC9JDgwGxS7NgSAYQWMRgm4THBk4",
  "key17": "59XiRaBd6mqrKwtky2ZpMbDkkNrYC2FMViGRtDGA647ZD4actgfVdEmeKzqsyS4KZB5irAKmymUZ2hZjZxbqduxx",
  "key18": "2edvDZaAPNnrhJgWmkdN5vW6EDGZPoSXesRMcsrA7MWTgBVw321aY1Qwn3yHyjWsDyAmtM7o4mB7mUZW634jbYwA",
  "key19": "3RuM4MkhBqXFxRRzUJCrBsfy2GbQAiQXzj8FTGXBUptJBnSQaQP2F5SyanntdTPgShJHfT1s5ETvzhrrq9yseCAh",
  "key20": "4dQUPrD8tDeWn1W8Y1E3Gch2xRsFweRz8bKmTxhwpSCv6Y2AGZNWhq6PePEKnGooGarzCvGPSy2upsgSze19xYDv",
  "key21": "44siEYVdh5xWjcdB4abHaBj1Ma67MSmrqasbHTunmrKFUtkVeQ1DqWqrj3mGkma5dfvSrJF7mf5FKNHH4i5o2LAm",
  "key22": "ue5NVtotUaxM5xfvZAArY7wU7LUhxsewFYxEqcMUNvpYAse8UBzmRCQj7ZmnmB6AeDkGSRfaCjkaNzSRAYA6nMu",
  "key23": "3T7rsm5Ss6sgMePtxF9tieJACZZs58T5HqLqYJ6g1oEmndsM8YuugdNwPVn7FumTtVyhZMp4Xbe1Rywc6xk3DnSr",
  "key24": "37XzSMEQ8pDkC3ufddykzHkY2SadutzXX1gMbHHF6VjqQn5kHLdu4jizCtziu9XwUm4yKNQG5Z2M9DuiWvrckW42",
  "key25": "5NGMEoJJsMXvC1yf775Gpy4gvvc4Ngabpn4tCY1HbxXij5LaRG1SYsBGxc4niRV2XuvqDwqqMwrf1zFtxWmkjtQW",
  "key26": "3F3bZ7XJsv6SVmXP6u4uQqMeENS4AMwXZRKNGZWH8FSwaEpBgxJZGuYtJUvzhd5AXy5TtTMWrqpvV721T6fGws5D",
  "key27": "37ffVtmx41aCaxtUtHbs9ejcP2rPavS34JW4Jkkb7jNedPpdDfVHsNdS4t3SsUf29BUF9JHAGnXn92EXKHh2GPdr",
  "key28": "2rY4hQaA1bfbRdrUJ9RhVPQvMZRokNUNnRGd4wtsY43uRqBmTWU5aNAYVrpoHJe6HywZ7eEFYzzYspr6csgLGCuF",
  "key29": "4p1VjLX3HAGw4S9TMGMDDSJTqApetqKxj6nYcs7JxMN9ouS53Y4bXuj4rAzkv6yn9UPiTDW9BD4gS9gFrF6ai5Q1",
  "key30": "AFzbMsiAfFQZ4jd4F3DZSbs9B2eySaL9Kj9vMP6TGFf9AwRwz4NTbeuGkhdFMtRveYJMjhBsx6D1d4WWQq4f7hP",
  "key31": "f9bJDjsbeuMKBpsg8XdzqnydSmWKm8oFCBH4whYdHVSNjhiNQspCH3pEZEfRztKu3jG1RmgjKXgRsBtFmrkcWem",
  "key32": "5MnKHWTGGU3eYuBLzP2Q7maFVxzM7cA9sQ8eK1wm5wz2XhqYjng57Jr4QqaMWzm7KA9JXKGyxvXXjdVbVPTjJrkA",
  "key33": "rKhtxGVBFRLzTTUXAEsn8k11AfxSDEFPou5H33q7r1dGNUxCDMFKBkMUHjXt7ZiqQb7h5PF4daddJzipDAUAcB3",
  "key34": "itA7ixYM1UDSfeYtwpSxBq7NsbrwDQWMemt6viQtEr8k4NBjhuroZ8jWsVBrb8byUqKWBXXUHG5ZC9xtFMVSHZs"
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
