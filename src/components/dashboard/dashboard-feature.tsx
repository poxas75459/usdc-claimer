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
    "6114Zwrt16akmZJGaEREfVAhYHXA24u9mimaH1XJ5MeDtphuyUxA8iuPs9j83XnUoxKwu1iwvgbizcjPxtL5f4Rd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34i2CWZJcKLt7YCDuvBKaJV9YqvyycQBrZnvnb3h7ZFp1CeazgRXf6eeWkzdVXRcLsFfEWBc9JZTTm8Hdc3LQhaJ",
  "key1": "3breDEQ6DXZoUYs1xumFAdTNrpKpAAVKr7CAUUNqV2HodT5fgQvgRowfhkPWu2kcweMpPYdtSdgjVPbmDoamuiWb",
  "key2": "3ZJz3NQJuoY3gt1UXetUVDyt2eVqLi2hshQiT5dXWNgjucB3bfkKDBcGdcVkwdopbGi9MDX2eHTbxCJFEgzM9XwW",
  "key3": "5Pn5PGFM61CNgUFjPHCPnjpMngHT7Tfu3n8atZmLojdeJc3Kfn5r86pTtmZBjZnysp6TviUjMDNnYoax3kEebHGU",
  "key4": "48dPcDmnsKcitGyWhmZtC9uXY45sadBPReMmt8dB6FH2VGCfCtyPKAZ1XWJVtfoixhisMYLnA54YjgPeTMACwnwJ",
  "key5": "4n53LSUAME2zjgciJeTWw95XoEvdW7gURh8zRYTLwat17AvpfGTdARGVTULuWT7AEGwg3ePjtt2QBQ6TNWLqh7No",
  "key6": "54jvgUh4v1NjYQ487Qw4czokwVEzP8o9StxwyxkhLVSxX17WUT3v15SBn1NhdA6zXSfWpqALkkjM8Pv2jWarYLAE",
  "key7": "4PCASvkExSZFvkCoU7jAoiq33mfV7RtNrhgymgHUEK11odWzzBuat8kSisE1Qn8qS455UDXsqBhW3rYErhehNYYy",
  "key8": "24GaYyjpaLCcqrcWwB7cEo15dfXX42mBU7K6pvY4CuorvrPFn2U5gCHJYu4SVm3P8K939GUvcGDAx8WDCvt8JQ9k",
  "key9": "3YwtZfy8PEmrsZ4wokR58h1b38QRQ19uCaAWYMx2rpjyS6jjWLQ4eXPghQ7n86KnNZFEqU4x55c3xfaRRe4e5o1m",
  "key10": "mLmmEcaCTr5vo7bA9HfVqRkqwLB8TBmWYDcgLrh8C7vVc3dSqFumkcLLSRzYzuMPnpWQjfMM7YAos4HHfuNZ4fT",
  "key11": "H4yog7fn39MNvB37GH1rLy4X8ckusyYGwn8bfmhRxHLcriSA1b6VLESwXiPoo38EzPBDaYLo5KAk8ixEQLvS4fr",
  "key12": "R6T7abcQxQ1e5UyWThcsHZFFnUwRDF6uq25sPX4TR3tQBQU6DGbfCVkS1zcaT3biwGgdkBHQcJdxDXDrNryb5nY",
  "key13": "kyBfhJkXsNATgjqGXoMDUBaYz4RGSSf3WdRC63AKR1QiZasEBeRUYwMwB5ieqqq6BrR5TcTuHrb7CZ13tSA2SQi",
  "key14": "4Ef7PnVbbVBPqJyMivMdGj5uhuBS1z3Jt6yeBkupKKCxKtcUvkeCKbS4zgbU7y97opKfJf3RtZsRN6KcbhjLkL5U",
  "key15": "2eVad5AEgNUVK1U7CCY1dowcpZ8yi4nev2qpTpjZ2eSvxvkiccnB5e4cZKWttyTp99wrEbSteydiPnWidG7ZnrXc",
  "key16": "3K5rdKtSzRR5LxeLnPiS2nx3yLmXzeJ3PFhvtKAfKDbqxL5J3obHVgqjtqu6yjxib42JN698JFxQaUMvSnj41njJ",
  "key17": "3aZZ3Vj68JhRnDvsFwBmCbZiXww1SJrqLYy3b8eu8hU2ow1NRuvUf6HNTFUrJFLxhrWTX8FFBNeGvNEzvyUPMxk3",
  "key18": "4JSUM6jLMKNeEkCF9gCuGsXyGaqqLKH1KyDTj9p3QAAhhzSHYmKXi2h3fF5UBc8KHJezZVcJTdNc4NFeKVSztGLg",
  "key19": "3Np8DXrG1zkeT5zCspMZzH4jgDxfxZCuivxPeTwbJQt4EmRQME9RJU7ZKFcWk9dDbJXA5Adqc1SBQfJz4amMsaVd",
  "key20": "JqoBcxVotpAv1asephY6PgrDvGA1DYaRsr59ZrtdgrHh8C5Mt8zh1ecuwi8Yp9h79ubfNCHxCkZ3R9yx9NqLQn3",
  "key21": "63eVVpdEGqW3D4t4NnGakZ3T2q9WcSAx1NgpueshhM62ynXcf5JEwS3vDdnLdujQBjWx4aDRvVwH9C6dobzC9fAB",
  "key22": "2fHKgL2no2QiQgkgXscMvfzHH9atkmiLoGLCivQpg1xUhmEzbQiQGRpaCMaDcvnGrHgsCPVh7u9oiewJusNkgcaX",
  "key23": "3kqsexDEJLiBk5s9hXEPkucLgjrMrE2ekVvBVr364eKgxupYzvigR9T2St6vQdyqP6Uwcwiim64BussyeQ2UpMQg",
  "key24": "61LpFg6PU8HWEPtSUEjh8TTbxxuZioxLaXuZZi8rFdk5bvHs1ohjmkVvnmt3sQ4En8hvr8PJfvLPj87SLHcqAod7",
  "key25": "5KuCA6UtChRboEzcBJwaLCBNfyUY3xVYVDGUBP4aVXmZRueKtptnSzq5irt4Sp7HVg2Z8hTY8ZVDkBu3oQvHpVmA",
  "key26": "5dC1s1J9ZZQT2TSxxtsAkV1QGzGtR8L6wi2xw15TthDdwhMyeJTZfFcuqX63xAEmTHvmhDhVS8LAGsk4dURbG1Ya",
  "key27": "qsSxzVDkcqaKpSXtsxNe7ydwJRFitkKu96JQQ7RmR4R3q2Nv84k5Fj4ZoWpn7z5JUQsM9fN7VwMQ1kTcj46Dbhs",
  "key28": "2SNqcv7N3qfmJNnHTVShzBF1BVQafTzCkZgw1jVnN3BrJxZwgKTht2dWNtcs6B1MeFPwgjSLqKuFX9HyE22Gr4t9",
  "key29": "44w4nP9baHHC7DxSy3cMSB1beLpHBUTbmuS4BMNTQjaZsv3BNMYiWrq7YJzNtBjKXTGuwopfe6fBtjvj7GdTUGXJ",
  "key30": "5qKTm9ozKuGZcHzNGWQbGZQuBzBc897R7D3eeQw1xrALJNHTB1yBEkfwyGQvsy5DEic4W5qD6UHejJuzMDfoQ7A7",
  "key31": "2jJNzXkq2vawXG52Uy7eZrJmeL5Z4sNYaLSiXn6D8nt5iFDMbsUdzC8JprQGdeQSSGQF1Zoku1w7c8JRNueiaPRq",
  "key32": "5gBNwxSVg2LQnn7wMZnbkpeW2xY8RxKP4ftxq7CgJxRrqjfw9ucCSUxv6jALhw4DdrC4zVnSsCfGAF8mfBymh1Rs",
  "key33": "419M6HK3y9Li4rrKg2jroGHDR2PaiRBCKrnLhSAD2zkamYTBWQRS4YHKv3338zbn6bPQotY31BKo9menm3oyF3Lo",
  "key34": "4Pr7PMjyhpLfR9u3j7Sec9MBDn1vN1rFaFGC6rpPvFLyEYBVXPxvvasN46VK7sZTGFXMca9mwbbVZVA46hS4qYa",
  "key35": "28Waoh6UK7j1U3uKk2dj5X8ShjN8WapjbCN753if7Z1GJoshY8MH2j1h5nkmgTZGKGEJd818vNkm5qFHTkKtYhHn",
  "key36": "595HVYAQkPmNB1DhCnZ2s5CsjYsedrsi28SnH6PUpey3WgPQvjvxxE3RrnZpvW6nTb4xBQbQDagmaHhA1qoy6WZm",
  "key37": "4ArLyENAjcXZULEefeBdKgbektpBiFWbJG2gUzo4B6RxRWWXshG3AT1yhXttVj139pckVRuyYpeZjYqDc5i3b67r"
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
