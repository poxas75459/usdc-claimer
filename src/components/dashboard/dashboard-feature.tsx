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
    "258937FFrSCx5FYcq9gKpHFEmcTbc9s6kYCvQc6DNLFA8NijQ4BK8sbMxj5DyQmS1kA5JyGMjbeA4ShEGmvWvFT2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XoK5HtCVrYX8jutH3V2xHGH9KBYjqscBsPf6wy2GFEZeWDSpRgJx9tGQomALneSBKJcUuvqJyj16UVmZNUTS64D",
  "key1": "QNTCKE8hi7CeWvuX3a8Y4Ja3byjhcjduMUdgizxVnS4JirH2HDuxF9P7zx4hvr7iHgtNCmATKMQEytHPRvG5DoJ",
  "key2": "3Fz6LzjFxXinbgQkxbaP5Jq5ugJXuTTnVNRwVmQFRmfwPj7FoP813cF7S2sN1AU9xjrHaf2Gv3YAjkPyD3dLtp1A",
  "key3": "9gJu1ThTohbrr6ED7zoW6g3J8jgHaKxPLrNZifTaAwgn1eHL61ZW9UCN7DpBrrLdrw6AkBs92xJyB92io47guUx",
  "key4": "645eXfcEX13XjVbbJj7cKjxt43t9wDhZwoBqhU6ZQAT4TpmtgtmyMcLGJpjFs96Y3TkdEYqnyoqyK7AwzuLNCUk9",
  "key5": "4hcsW4aagQBaeU89zvoUheJmrEsJnr73GNeGm4M1ubmDxmrseNse2NTP9mNtW18aNUrrYD4GwMQMq9Z1JrVyXZ85",
  "key6": "heN67SuGaXCwJgDfWfubLGnEPDv8YK8rKswBKsapPrd3fBzFGxZYF3HUNQHk5RYsUQFT6HYznLzz8gVdMCx2N1g",
  "key7": "2bBnDcXhE5KmTvd48BrUBPg5UpX3AnvHaT5frCZqrq88m12nrcRrm6cY4bZLYTgk6XKcZNhnPsGoNBJXWAJAsi4Q",
  "key8": "5xdjdpCPFnGPKUr4wiB1UiLJeswujJ9KibDHn9aaBALMrDaW2864Y2sXYbQyR1SPAk1h9qQnXUbERn1jSHcz1WHm",
  "key9": "2oC1e39wkPtzCBrnHTWWBDe9FBXLLrK39iKSAD5AsDVyjkCV2o7gh5B6kZzFjqEVw9dBuZiBPeAJxATipYNYj5ap",
  "key10": "2FTE9Jesqovfb9ZuEpP2TPEtVzFMZ8ve2Qw5AnwVFX1kvXM6GxKtfTYdLTFbXVt554qv6cvcYJb8ZjpjjdWiGatg",
  "key11": "CwLWZh9zhtLHYk2kjj3ut1B5nyfEtHb61r97LW45dNAbtCRzKoNF6PxHwPVEdYC32ZsFKcQd5sa2rbxHiX9qoCY",
  "key12": "Wbn5tx68QgZ2DUNHLPzXqzsgkAaUyfYfmNvBUgMo1Kvh5AKXPeybEPUbbTzsSp7JPGQ51SZLQx6Z8giYiMmPrMd",
  "key13": "5z5APJXufLfTuUMNGy6pwFdLQ48fuCus4QiXLeGz8kTGZtECTKCJkEnKa34dgfpAuQYPRvf3GkGg5nqyHsLpv7BY",
  "key14": "cqnUy4VfutdfMhFay61qFu7HidhLepLMrj8FJmtJvTt3y1cB28Zue21RpqKKmphPP2H3LCfE7YZdGkJG7U6b6sb",
  "key15": "4sNso3TANqCWzaN4MnysaEXHQQ8pkCxUmGEPwxMDV7BHyW1R8Hf1dCWRWocYdhuwcyo1efTRcFebASfRxJUdsdMs",
  "key16": "5xfmGCpxnLEYHsuvqp3jrHBTHKN3sNSxDHWWuN8KHLVPZDshESg44yDE6dkw3CH5br7Aitit5UHLtEVxt3RBjaMH",
  "key17": "5hhvgcNjsFgGGvZfBZNLmmM17NYpmBChgSVbxyGqJeZu8e4tRj4kVVBhvV8oydxwZbPjZVz31RRjHQFZL98xwnxb",
  "key18": "3xUGCBbFfxKvVE2mp24drAqZuThtn66fBWi6gA1PVANCgqQDg38e8uoqzbvzkKuoDkTUESCkAk92LdyGKGGcoSUd",
  "key19": "4EKxKjJguXWauK12XwjFuts7t2yHZpYBdN2cQCrjzAJiU6GsFvx3YckpACQkWtywmyfYaqvZfCCGabV8sMt6oDre",
  "key20": "5s52Nm2Fr3J8KCUPQuPMhxD94Zn2ouohQGRkktNvCxtCwMu4heV3zGmJCzgj8rqJK73rBt2JNeuCri7jU3UBzaKF",
  "key21": "3VdoYCpEEu8sy5XdP5XNJCDJ9JD5Kkza5Ws7eEosNe22uPZNKsNYT8bvHTMgZfjzwYTV8iZHrhMxFgvFXtTFCfsP",
  "key22": "56b2UPMFQqA2XFJhLLvamYCmDHvAiDCezyFyyPxeXQF4BkUM3tDw5hWvDT9G1cXYg4GafTG6JNoFmRv1HKQPvQT2",
  "key23": "VhmmNhVvkMRDi2NaRNnZR3YuegbTD9acHFKMRWENnLUgHJMQ3TjZmwc345j6cVYAZLG5F3wcW5DGCpUywDujcC4",
  "key24": "4bjMaG2bNVL8oDpZCFEPQHfV1EKdcjyjgWsG41CX8PDu5Qv3Nuhtweo5ECTqNKppixCQBPVKukjKMMFhq73soWH7",
  "key25": "4Tk7uJXtr6D9hxEeYMBKMBn4CwaWLRiLCpEDNam7GanQ9G4pNkf97zQrz7Rm3mHE7Vy22QL3A4yh6hR4N1Jsbwr4",
  "key26": "4zciGqZKGuHVU9SvUasHndyB2GiUmxV9noadbY3ac962TBWszZ4cZvgddRGRxkT7i2REyhE27VNEeUbLUDrNa9HL",
  "key27": "48T4JB7gyDtesw2dKRUJwj8wERg6qHBxjVxCxohPEMnhaNTrh9ghSaz5AeAf4QSNNJjpxUKBPdmR6jYapHnRH49d",
  "key28": "2PfJSjeRtY1q5F617QszJi3MivqUpHBm8jKceHVgJGcXF46eHcuqre9bwsU3bANd5sNJENPofSxbcAetdT2kd7dg",
  "key29": "3TjoaqsUMQdkNxbYXEbwFZw5Lsj3b9WiSKGUM4gtQVjk3FRAUBpDFmbkn4Bkh5K7C1V8gw6dKVsoKjjofZ4vJK8B",
  "key30": "3EXiiLu5bJR4u3MGvgmynEHCgxsmHUPt3J7KZxG9fCgF2uNFVFWheu6mDxUBWoyg7xfTQhSYgVASoE1aQKS5829t",
  "key31": "wDa1ucWLprabem3RBgGv9fWR7xoqwEHEpLor9HreZMAu66oFP13ujDb1hAkmhYbSU7PuA9xVpcpsxsR1qL8cW2g",
  "key32": "5TeSzCG5nJ4uT78wz2tneSREGUW198dzhamuahJ8LP4ctqhb5HxAT9oJ4QUdV6NZmimUBewBH6K6N4cqbGhX1tZ8",
  "key33": "3LuQ8aiXBmaUDTvRu3Wyta6PBSn5a6mQxgYAVgUhv8oxBeqG3CLFjyXqLY3Lc4fGadeqYGb8doBPggLEYV5E5yzs",
  "key34": "42fgQfecdWnc4yE14qAyFUs2xAGycBHfpbELZJcQwgGdmEjbiuVVRg9FVnu8jxGt2skWT4mpLx4M3r6e6jTBPBEC",
  "key35": "XqfKfFY4RWaPRWXzoPBAmXEaYG2M1uGRZnqVLKA3XbXiyW3dyNhEfetTBCoHUEzeMmuRUJXVsggNCDvamaeJQ9d",
  "key36": "4fcAEFCJkf17qRD6zmXjpWaJfmEZGy9nqUCvNrQzkHjPoG4F8dUetwzDwcQbLnaJQJd5538tRswZ2L2MaVuYoZRd",
  "key37": "YT7RPp6yongDcSjSk31hNS3HAxEG1NUZGUHHozdtpYcjycGQuvTLbFcVUarQWfqupZYCBgDWkv1MwGXbAeZma85",
  "key38": "4cMBE5b2eMHuvEdRNAZUu6Q4vXgZXSg8ZPaGjWLtbeZkf7BbUdS9VsJB2eCGDZTTTkBTA41kNLMbuWG9mnwp43Qk",
  "key39": "3zQNzL5nGLvs7YtVpuEFAmieZRyUnEeqije37U32Je1NJit5tnUD57SP59LVWjhvhmGnZ5c62WuEAUNWcSSvnkri",
  "key40": "2GiRoTpssUAUEeWEhckYKH24dayimvYUrDYNuR5bXcatpu8oAbqnneAoP8EJe1xmavHJPiRSSDney7TWXYh5x272",
  "key41": "ZaQceGcpJi7PakyDG5Gk8gmKEPumv5TW6m7vtQX5qEQgMQysPd3DAghdcvUxX8h5SCgyNBQDyBK5GGrERqknV3H",
  "key42": "4sgoZT6RW7veoczg2PxPzTb18t1MJf7PAjwejtUxxfyPeL7mZCZE4f5cpoqeiaWrM87RUdZP9ZVwTmY4Q1vfmPWc",
  "key43": "xXtJL6GWg7Pm3ty4Xk4ZhSv1HHST9RnLKSiFqaA6vATRVf3aSEVD4HgSAL4qp2vdueZYmgaLZ3XL4PR85fDtXnk",
  "key44": "4ynXZigcwMhnJYyG32rcQy4AUZkwLKVaKjKJDFwdWLh5Co9qfNT6htBTwCxN7acRi1RaRQXBgpSTr5AkGPwPVtvn",
  "key45": "4gf9tZcKzYgQYWkxEbSDpcBKxR86uyfvGL7zLWHxjkpfKSRMndBFdTHRQntMM9JYd9SGGnCGg6FzfMczS3JZBrNK",
  "key46": "2RCML1ZNDXA4Pr3jU361tMfdxetosj4oTT9ZhKyP6CJ8B1AQTMqVpFiZaeNqtxnte2eTbKtYyJrBH7vuwzyGoyiz"
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
