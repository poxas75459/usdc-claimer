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
    "5Ms8oxc5nVVkzMrgHHPDhj441GEowM2dUPGsQN4xaVvyP3zGn6Ko2iWG51hhxhXBzUzNkJXwXmTWcJY83ZVn3gbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XgpxXWMahsqr95SexGvMR31J5BRrmBXfp1KZrNCZfhJmcZUs32FbtnfuaBhqBgcuFnbjVSxvgSYjhyK15cB76WW",
  "key1": "3vDY6JrZ4GU8Bn88L1VVj9BCbQgifzJUuN2RuomfkAFxv21LrtYBSBXXXqxcTPRueEoKydqsUJMiEj75DmsVpGXr",
  "key2": "3GTFnxichMvgTnfiwdASWxZ96KXWCAAemxaSu8AUCf8b8n74aRzP9kKRAcvJXEYafXV8nzhwig8xWqCvMMvmxmLh",
  "key3": "4xZpPaLpgNwuZ5mrP3wmh5Aztj4ewqgBcXCz8YeJfrc55zfDECnVRZpsJpRGJCDLnZiD92uZQuXqmfMXDfuqJ4JQ",
  "key4": "4vPVZUaiLunVFDUmLic6Co1yEmT8ZrE1jPv6JrDeTpggUySfSV2UJbvirfqUVjnGdLh4of1KJ5kwKPv3SeWe6oWV",
  "key5": "v5SjVJ6s8Q8h57cj8zMQJSZzCpauQ7TF71p1NzLj46CG8Ts8H2GPGMebwfyvQ7GiwCTnsNR2ojvVyR52CBf7HjV",
  "key6": "4t64q4s1cLR2KStoKxcsNbSiwzAJz1pfbQFUpn96jNVrLhLEgqjtpnDz2iyhVpNZky9F5SuQadCpH6bY2MdH8Agd",
  "key7": "3mGBGFS1Z4KkcB9d8D445GmetBsXqrst5GcyHFYdBRsAMcnC6C9gyAmsSg4XgJA3GFRMBVgbH9f6QU4T1s2yvGHz",
  "key8": "3ivrvXo7tmsUSDbfzs4DwFxK45XEgqdabrPc1W7wUcvPgQ68YJRikJQL5j2mddfKKa7TR7tL54Xx4BWhbr4zHVXs",
  "key9": "5jtcu3kijgKq2JgAg6J8jkrgc4zmN8oJjJEsboBaZMu93eB4wy8TRUHCX2FS6qTndGwcWH1a2PXSFefcNPpSyfd5",
  "key10": "2zvEjxfTptxqqxbxfGTTbhxcx9HR9FcdDqYUEWNm3Y7gFgnJSvCH7b8UasTx5kVzUhZCooDAkew2sfZJnKvTzSyw",
  "key11": "BiWjNDViYoi4213EHwgJwXKGSoEvf5v38S46cP2QrjmQA6K1pWWk2Ek2eGwUEgCjGsT7Q8KG8ps8ZTByVpGMSPJ",
  "key12": "2tAyMBHjfkQUqyeJWm5eDiTMd1hrKih4myeTbVBBGYpyDx8qFC6BHx2A611HLwzfos9wuQma3wJfZ2H7BoWnCo1V",
  "key13": "52Z99DRSZeMmDP2pfk3v7h25j4wmvYRtK1rrVc2D5MrvrAZpbkDpBWRk9XXBC7ZpbYwxqxKHuMmAF6UZz2iiv7sf",
  "key14": "5mSC9MmkkwRBgjQGvWmpenkybiU4q7doZ7QcVeFhxqZVYh6K7JmRwoVP7vebZYwYQbbiDndyUz5xkcLUoVXXqAgr",
  "key15": "s9mHdYMjdArfLEkSHZPeQ2Td3B3UTXFSD4zmBerACnfvtvXnqthi4obVxjmXNVXqCmfVKCSXk5HiCGZKorGzPwC",
  "key16": "5BtGs4GysHGtwmtiPHkQPaUQto67daFdtMyAjPYZttYqBxVtw8LDBUqLwDg7GgAgzMXDew3KQN4denbgvP5jp6Ht",
  "key17": "4hxbk79NEsuNiTwRMhKNs6dXdZLZ49yTLKzjifanAZnHbcANh1PFjmAibjm3vCBPxyZaq7CeAa3BgFy2b66AvUxh",
  "key18": "2npx2VRVFMqJVy7reJ83uh3Xtw2kpeBEUeKne5atxiFb7XsJkhHGBfVuEobNZ9EKRRqNwV7h1DKBw7YiTFAR8dxU",
  "key19": "2eDREYRZ6tz6YtUpC78KakpALwT3ZLGnTF7ZiFkmx4ghUHwcpPk3mHxxp9DbGBuPwQFFxP7Uxn4gdEQ4SeAFHfSX",
  "key20": "W1sXeAnLwAdXWNcwDCdU6fAYmPrDFDmhjz8ZBk3BLg91QWM5BMXwVNNhvSPbZFngkzLE2rRB1W1ZWNcgte1fJhw",
  "key21": "4FQMjpkXLvNUNgYJ6UydogWRkL4NJacJBL7nkooctXjw64woGFSuDpfrbyncyGhcyGHAgJCpoiPTgHQBZyPB67cw",
  "key22": "36FLMyyMNCP487NWF19Vej2npD16xx6r3TXPgkZfqpxCRv6c3R2g9SioBSsVii3KiqzrmR9S3GrMoruLCUZEb141",
  "key23": "38nu5ajc12awfTxKPQgz6fzakfzrdhPf79cb7yuoPTvoaKoYr6WuksqqC5511cpe5pVSWQj21raRkuctBdeXTpeb",
  "key24": "K9D1vENUY2dXuZdJdaD9oQBTpmeEYj9rbG4MvC18oWr7iM9ZBKSiXbLfvFAWj1XZGXPcjAWmZH6BHPACju2uH4M",
  "key25": "5MHPE7nvfRpbd9aZsYH2HjnZdEruhvrRCci1C13iiZdqDHVoNRkjdxc6HY8ZwEycondEpptrDsah4U5rwhK3GXwp",
  "key26": "zn82Xiaoqw3tTWtSB5wP13CjTQCeKNK1RhMBzsewNHAe8cCugK1795DyXAGmdDeZ2VEkYWR25QTAtEwfyUcsQ7e",
  "key27": "3AuHLU3ddCG32LT1dx6TrDKL3TwzNwvRM8gf37VZjF5secJ9zaeUFLFALbLi62xxRGUyjYL6MNksZTkbGTtEqSXU",
  "key28": "4oStX2pHHcXMT5gQPVZhhsF873HUi7XxgL3coriYQFzAnAoaJBdXi3pF7nJCEMMQ1CFNUu58uTDWsNyNEg2SHZW4",
  "key29": "3kBXpZmjYHQxArJjE4ZTZ48YUSaR2vi4AoHRAG4re4NNMFSB1x24zaHWZC42ezHgJ4saMTz6syYtUBfqs7y4VTUX",
  "key30": "4tfh2A7EHSZ5VQCh724TWV6HY1GCD7Xxy6jyfhUdvxqRmQj75ByrhJn3sZk88gRN5HfLYm8jc6sK2Zm83mFe4Kpb",
  "key31": "5yjGBtPbP1XqauVcGck12avbPNh3gvkJ9wrYX4kSrcR2sJENMtiN4sDVpwoQ6CoofwtrsWYtWq1etkAXao4BQip6",
  "key32": "2GYiB3tDZyoUCtAyjEGFXDmpkKBUXsF7SBKbdF21XF9tsmGSE6bpnVGSv7CVocX2aFAWd5TKsT8CsuEPZz6H8UNg",
  "key33": "57U1sPzSH9evPowuxKapcNps1U5zCwbyxMDHdWd8PTU7Hjp4bBfpC6CmADeAKD8yRhXZDjZD2bW8SQyTfQ7BZJPY",
  "key34": "4TURCWW45948DRvnpmosEYbDZ4jR5RPxKEYcCnNxYmtTSHsKzDbRiLNJX39pFwk8uWdmnVghjKnqZZh4FLrCzXer",
  "key35": "5whXz4dmkiR8hZBYJAdHshFQpBALza3d6EU9rFUJhD3B9sUkUsAYvrYozqvszMXDVfX7pgL8kSsFCvaxWYouYPkx",
  "key36": "2wTymSdUf9kABa5rVTcEftn8CfJVsUMJT1WkMoNEn6T23VmWQPAH3r7YXkR2jR9A9i6BfVymB3doVxzwXa8k6kTB",
  "key37": "4HMHYNLrNEVDaFgkCF2TXE9wQbJSFsdb5qRXCgrgFTwrCGV1MbBnj9p5noZrep7ZNrq5dUsBCC9fV2bU1EczYEjL",
  "key38": "T9ZkEHG5zq3q9iB1ZGABzJRKXLHtzZakX5MN1GKXviPzdFYVymWJYhsyuET42BgkjVfGPHvPW1iKC5oyyzxiDcW",
  "key39": "3co4B8nfptaoApiVu5q2fGWaxJExx3paFnPpuA3nVshkZSo3M9WAXHzrKwKCJ4dXTMrYKMrLf4m6Yf8f6CXWttNC",
  "key40": "qRNtpMeFQ9HC7iWMe9p8PwbmjzPqZCnS14VzwResHZxExqa44bYyNUYLz72JPaQA51ESEPzrQAeZRNbFhTAhiZ8",
  "key41": "speREw14QZUZbshvf9kLPt23Gvz8vVzQff5C2mqsGXSCTRNguzQKHHqKp1YBrRUZwGHVjqedrDEPLHBA3wp1Un1",
  "key42": "49sVbty8CARvKQHcZmnZCPDhRT3YJZVAvgxBFJdegm55ooTpLuZrwu3fQLCXpFM1AEuVHhVtqKbjGKqCvV4QZGpw",
  "key43": "5S2AEvETooyepYw48zu8U3qh1Xiikt1jPkQfboKbdCkeukV6Uj1kaWYnUq7BYfKeMBjSXNA1yXCGjok81o4CD3kN",
  "key44": "opyedTkGrKameagwmhvkjMf89o6vUjantZ2VsZtSvdkLB69n8xooothCqKvE4ugpdPM21g65te1A1G5nr9wJ9Nb",
  "key45": "2Zy64pr178Wxkfa6ZZhaGHuub296ddpPemh9gw9NXfjjbczrpthkPVGsxgvc17oJx83Gf4cAKtyu8jmYSfVFvox5",
  "key46": "5RLTgfqF6Yk288PqJCe84Z5q4cDTM2jwhCraYeHdnjtiC9UibBGfN3oG5qLHVCLiGLjmhMWLNGmMY8Ex54gqAfZe",
  "key47": "5MwgqkYeeNsHvXz8gVaF9ZvzdWgMJHYnCQ3JGz5WWKbqRBqEs2EnC8ZSgFeYN2ypzG41PWyfrDMu8dRbsp8HirPe",
  "key48": "2WQ8omHufdsDybG1GFGfJQ222i2cFCQfQnrJRvir8wmDg4iqHiGmStqd8QXK9aCmwa93mQsXbhfjq6DZ59MyX6nr"
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
