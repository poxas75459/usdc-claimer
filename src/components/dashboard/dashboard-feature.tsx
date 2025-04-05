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
    "3sHaP764DGkWpuQ6Zpz5C1TVN8DjM1ZmB5dxoeC5XAPe9KFwevyBe797Aa8nNQRKWbM8A2vFyEeVmgCtSZd9492x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9MjeK4CeKxwdaNAqExXB1utz2NMYGrQ8Ly6p7dQZNeKNVWvAbRoSuyfYu72F1BVhXKM64NWx3EsAaFFzQH8mz1X",
  "key1": "5weZJSUsGCtBcNkTUPAeHeKTCyFibZCzzgVgjGfe8SS2v9M5VCXhaX4zDSBjjACnnTcd242xDmfEBtUT32At2sLr",
  "key2": "Fy3ziPhXtfHYycim12PtYpH8mHP23tWGGqdEzbzHgPUc4NCZmbQCX8SRB577Ny1wzkgz4F4MCkYEQMyvQYvCF85",
  "key3": "3wSimgfzQfThib6EmNMS7QCw6MAVCMCmWdLNMwRbVArizBFpUE1cjUpcdYBzDfP2XwuP4vnzea7zZX2PbJTfxvij",
  "key4": "3x8j8QTcfVtnY5wd2hT4hts9ESkQm55HrarR87ybDvx2RnrV7gzv91WPsoFdZhVrNMS9MgJUfN3GvT3cEUo8rcFu",
  "key5": "4ooSsQef8hx73KSjCK8FFdAQj4gKXPJeifKQW88kqTJv3PtBo6SoS2zBKho9db5Ew6NDmXEXRL5ZEckpRRYrR11i",
  "key6": "kQrJpTNSoeVRfvYhwnR9k3Fc8vu2V1JU8WR52fgzz4PU2qAkqbEpDxypucVs8Nv3UkT2K84duWG74hyGo7eR1nb",
  "key7": "2WRnz7EwsQ8VjZ5S2TkbqSHA3QdYT6bEYAJ7XmBD4pUFcdDidRjT5zgZW2Qz1jHV2KDHWHxynJWZr4D8e9ThDxWH",
  "key8": "5YybBCTXdofXj1fJb6r8uSjmu2Vgo86hbPn6iyzf8ZkCUJTm8yWFhPchVYDUdHpK8tzdKVcjRb36Hs44UVKPGjt8",
  "key9": "2oxZJrCJEG64kQGTSWbWy1GHedJysRzX2V8iURVnA5tbQjJ4Y9sGEizNvDAzqNrWwZxFCv79sWaDXU9rcKNgZY1P",
  "key10": "2dNZ8iqbwCmz4jhyVzq5yrW7vxgQsdtAiWS72cnFE4CVxPBVX1KHsYgABRPdsiwTgRfewQprdS1cKKUfh2zcEeNt",
  "key11": "5C7iB8LNmBbjTAWAvba3i1Q8QKfQXjivvneDMyuf5ufntHJgmHGpPwVAkgitNNb7tCjgCzV3cqk1WgjdQvUef9AN",
  "key12": "2wpFNwMG29T8zbg3YC1PYJ8gyNYZ4vaejHbP3LAQQUaFu4WJnDkc3tGwT5m3MUdp92UXVNSD13KtsMLVNEzwRhos",
  "key13": "4bvkZYrqRujMyR1eHFzkiCjaThopdio8ey6fg8RSjmRFvBij9NY9ht2Bxu7VFRdWST75ivCQM9wtPrBHDyWEQaJq",
  "key14": "9s8qP4GAUTzcg2dMsNo1J9nRzogEhAC43Pxp1YxESrArhXLoy8D3g8usgTPpPXf1MAT95T2A4CZjUfv9neZcNQk",
  "key15": "2b3Xp1TxUPq3oAp63Efc9XqVbexn6xJPSJihQL47F6w8ACLYWSAbm4xoRkFb1ekRdAkMVa3NkCrHWb9eVj83ghBx",
  "key16": "5fwCNqP2ruLmoaC2AWkixiCvcGtYJFeHC5J5zUumH4HNy2EFMgdxbb6xZcLj1e6jubLWCLm5tJw12VTW93AJBbFm",
  "key17": "52H8G2sqxTUEQPiXn6fcbTCQTm6NgJFvrMqKdES6rW2bvM1ABRB5XPoUd3LNyjdiwqyqHZThLrp983X9C1wVb1XA",
  "key18": "54gLStMaCHSKaUf16tmxkTmNpqaGbX7SYgF4YL3snrzmYSDHxQxXt3WDd4XrWdabvxFX51k9qGYEvpnGBT1yEeDW",
  "key19": "26yQxyhNZUXj1LEY8ooyMkSuea9rCKwnms7nqdKb34SC453mgcq7xspsVjjDHThdMJUV8RnwaKhoBGUtT7xG6sgz",
  "key20": "3ifSALKbUbTqUfkLKhtURb8m226vb1jiwtbqnszRoqo6oP4VZdWMcoLQ69BM4AusqHW87BwUSMes3TpkLqcd88Na",
  "key21": "5er8V6xKJyHpMys6DkG46oFu4XNoE6pvNVBvbfkKWvAYjnrBnm8isGMR5X44e1dXmHcxALFpq6oEi9mBbED49B6C",
  "key22": "2Be1ui64UsnwB4qcrTFAbtEGvjYAbPt9HqKFPvGuasWayL6KyEVeBRkTpCwSSdJoWzCpGcrjcdLPXNTCjhWB4rXQ",
  "key23": "3S6AKQv4g1FSy8UKXM15PzvmHvZFFZyU4m4LGwUoVkvTX1KY9fdZSmiYHMLSPHKt1PwnBcnX63SohdTR8e9cd8DX",
  "key24": "493mzun94qLkzPCK4m8L84pyPJSZSD7sP2yzwr7fPH4yuDmzvVM9BCesVzWHqQxX3t2K9zb2RizfVkyuPR6m7SGQ",
  "key25": "5J1bpzA6wpBMYiKHF6vnuVixhvCf3kGYjdCRsYesHCuvMxAEEKiADXRt1niNhdsbCBeSxV891UqMEeE92mXTsmDP",
  "key26": "4geGvryLMxybJtttpE6e8dVYMKbiFTj6Y27rRD12xmQadFRbrw322LCvk55FEkADwBm8zaHp6vDES3C5trYt6HMn",
  "key27": "3SBgQV3opyJocyfyVCFFFm4oCqByYG2s6ZbeVyo6LbBet5d22UqCnbGDsfCiJxyrRK21DdQeVVpcXgGSMdRvBUkp",
  "key28": "2FQx4h3SBgRgGN5m8Cm18gw3JwAMwHjnBta7V3Yqq7GLQLtVc8fyDsHJuTu8cRDpfgyuxx177ypeEmyHFy18bj2S",
  "key29": "2iSRF7c3o7KDBwpKq5BrSczfxjC6UE5sTXSChBfpTjpu6oqaJUZC7e1kuhbTGGuAX6qJagKpAjzsppEH8HtUsdgw",
  "key30": "314s8RsCbNQyCgiYaqWD83gXUN2HdXtRpeSR2A1DJ1DomVZdLHvKAuRFP9EmkTzkdYcrYZjEX4y1T9RViteb7mSh",
  "key31": "4oZhsGVSYKcij6iELQYkDvku9M19fFWNZtyTf5mAfYm5niwxZjcL4agm6DAGfHP6xKr8UgSDmy6NwE5TVNKXK96i",
  "key32": "3hUyUJBJuxN72YRXixfuJbkMQ3FnAyEM9AUTQQ1NLdzfNMkLaq5wmUUg949eQ8VHJ1rxqaQKJ5rxrbn97Cryz3rb",
  "key33": "2kZdrHTUV6uV4qpNS5GPBvpfS3dsyd5yt99YqD9ziXWfg2jDcK1N3LHqWJU9gRPaSg4a7CZ6EU4RNgif4Md5u8ZK",
  "key34": "5s5x7SVSdaHSbmvWJYvduByr8XG2aKosRVjL6e3bt1o8uhiR7Ld3MmvPV8b2gxiMwBbpA489EtLmLCgvsrmojY9z",
  "key35": "mEQv4gAheSKYCVq7EfswLFQAk5mzPkcXZ2dFEEP8qwBoJEmDpFcZBPdwzVMoQPzLoRSF69vcXoqVEfMLqciShXb",
  "key36": "45BZeVLLFbTBKGb83N5HuodawK4AJySnsbhnxJo1obQnsVphzutzJAsuA1PjUK7TH2k9dNXMq6LbBA6YKMPpD3p5",
  "key37": "DwmqEVP1pAfu6G6m6Gt4wxWys5gkEmhQucbAKxgZ2Y1hASMD3PjrXk9EC9ti8NtXugEg6gzUeVd5d6qRSQGyS2J"
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
