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
    "3aryJ8ThriW5p97x2beRG6wE1En447Z87itENd6jz6HK5TMJx15GLD5rpvU35UTwfdor6bRBueVLwBStpuWtdeJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EzWBxsepQNuoYjspGt7ASzvwGGZsyzPZvyEWNNBXV62agR8QDtymAbg5SJJmUuM8K3F4Xsyf92J92cFFZUU6N9",
  "key1": "8JbQkkp6dhr9Xv6r1YfRpbrRhDzBg1eujq5at1sNwVS5RGn6uUZwcjvGMnoyNuvyCRYw3ybohLMqVZoGJQaWzzv",
  "key2": "2ydQDUjDGBKcq6ZLeHpgdPE1KZXB1eiAemshvFWq7NXCAb5Q9TFxfKLSysEAkyDcFsv6zTtb6vmnA6QVeVqyV6Xj",
  "key3": "5jFJERJy6PSgNfajkQWm3u7xqWv4QdMPgATpqbdoEhv7yugYg6NzUkYggtAnYjdzFbrA6tVYtPwMKdHeFyTFApj1",
  "key4": "3ReZtdt7G2dVHwe7bFyvdi2A9s4AcFMqGxbZYcdA73VhnRhLMbimtbo91jkKDLQ8WG8zUWgNg4pR2r4ffNfRAFEG",
  "key5": "W9cagCxZj8Y9pGLk4NRBh2S5m3Y5KSUv58E1En2tbzjsXrkMMGLmdMwFv9XZdSJo8UxFeXrj8jLeG8xPZ33QBeY",
  "key6": "4iU6VnWyxER97LFeZpMtpKLEortmwSfbJYBseq2UBEMvXoDKWxCkdfXwst2Z6DQ3n7uvGZwZVrRTDhXrofBc2Vii",
  "key7": "3ymXrQGyS2npS8za2Hr6Z1RCgmSFM12uS9JPLXHkiQKzf37TfELZMJcArnvY2ygXUN9CDH541dTc6kj4KQhiBGxR",
  "key8": "3pC5CCRh9Ch67DQvgwmfpCokdnRxRqr8ZtjQbbZ4XPu7mfWrbNnb3wgKdFr16XhCiVPKTsPZPuJK8cqn6mvqyKGS",
  "key9": "5vSyCxKEJXncgV4kECasAvqq4BcUxher8VD8ymrk47oSff7BEELC3eNzR6oJiVM45fWimQUJZvQsDG6zeJtfA1tA",
  "key10": "4Tm5FNqSnVaCbmQL2PPfjRs6cR5P72sNuffSP6ctUxfiWKCFZzoQrFkmAWPU7xtx4bXSGtqnuFRcM8GYo3iCGgyp",
  "key11": "eCNDPUAzmCjUtq2mvWpURkh375ZKm6fU1UakiYY83BQoz2jGe5Ej6LJnAo88SsfVn4BivtE26JHCT9kZwM71ahW",
  "key12": "3thgqqiexzPMvDmQ9LpzvfCPJvZUqGvZJyFHpW89vhTegMUHnQqirjCMdcbcizDnq8nbz4P5gR4XhCHABJMuCG8w",
  "key13": "41cejnm6cqYXA3xUgR8XZPSAHmnE3waptVV733rwgNhxcUKeGtunw9B4feap3Q29PKBXm1kf6CE7jTqR8pjam5rT",
  "key14": "3L1hbS8SD8LBHQtNAC2EogKtxRHimvs55W2FfswS89xHTVPJaBoGYTgjR3kJK4WFRJ6uNxVazCa39Bj9outtcQCL",
  "key15": "LjD58Syw8fwoA9U96p36csRPxFuViWCYGiUQfAeLGeTTpph1amGen1tdmbYyYDPeoHq3qBargrY2SPcChL4TNYL",
  "key16": "26qwoG1sU5K5heSjs27rSsWdNwyH39skLyiXFxzzLtTnVfyFPCkeJw9Cp486f1Ktv2FiivVGwUTjiCLuRcWqQu3C",
  "key17": "54oZ5tM9Gqn1kTqKHdxUqAwRZbXH1zphUMyroAm7f4LuXfJSVaMCp9mXR5kTjiPpbdi2w5JqgsuU3SFXA6aG78uv",
  "key18": "5xh87pXM8A5tGTqBBBUC6dgfUvDkvXfpSYLNryRkdZbScHkp4PNBCqMCEtAqAqUAPkH1Ku1zNe8pT6xSQys5jWMV",
  "key19": "2V8kFocAdBVUYF47x7JLNVMYHq7MLhoAPoTzpPdqGPr6UyTsC668nJArHxQVfvZ7VKjnzztCdUe3V2U3SGW5YapG",
  "key20": "5WSvGWk3UHKpMM8KZAnsSBRhpAM8j28VXsRDPcSvGaELgzXXHNBYL9fqszn7jmWSt6QY3cMZBjEUm7LZke7ZYEWY",
  "key21": "2Sg76CzY3xviw6PvpaEeqtDJ7R37QMNDFKfUqqoBU4DztkuFPmUg9v97hHWXTATWNk7QhpzzGM57Ezeu8gVFYu4f",
  "key22": "4nF5cgtq1G4NPAJGx9LjBu3mYLYq2Ui6ipKsi4tSwVif5ZBo1NEaktZUtgS54p9CeAm8HXDY8bFL8ov4wL5nsSyc",
  "key23": "3AcFVRiryQkEQ72XNhonzfygFaivF6FYHCsAPVSZ4BZYv62iNmNR2wnFjHu1BDKv67SLqkUhaaatbazrqYRVLCpW",
  "key24": "4fCwzYUVxFAMo3s34KzyrStY2cdbHDuCiP1epjF6gEXHcHxzbK1TFXFoyt9nnzvzwEaoxc773GuEuGnnZuTaAsrK",
  "key25": "2uwdbth9BMQJZcKQXs2NsqKt5W8fydaQj3GFRpnkmdU3CNyqdfMEmwfxtWuXkxnnLUw8s3wWxJQ5jj6AwV6bEdYf",
  "key26": "41acTTAZ6XgjKeuswvQiJ2sPqXAmrDQJk44mV96M9DtfrwGP1hFQF37oqBonbpRNu2TxD4nj6kR3Lzm4Hs3K2z1a",
  "key27": "5YdqZzceMjMZuKQijbf1ut41Hbv73RsTaGJBaPceERxtfzMDMgze1FsRYzKwwCke4rRaKiLrShXVvNqAa9m85juN",
  "key28": "2vDHqs7J1RuTbRPPgNjmWSA9yrByXCqTs7o3yguHTd7zWp8rtwfEKuTbQmQ3wTbbTz2it8tuftkhZykJxVByWWah",
  "key29": "smWt19cnNnTq2MXZUvUCgBBfVeaHzuBCEuYLTeSBWqpAZey3Mt3rc1VHybayq14CUFcTic4nDvgKcMng2nHrLH5",
  "key30": "54dU4S4op8vLoQ7qeXm7a3x7TVkPRuwS3hea8s2Bo6qdxw2LQ4j1sNwD5CqovaUXSxDGrpx5PPFtGTeBvSysJ6r8",
  "key31": "HiNs6WFc2rCFRJwn2ZshuyJ7zeXNJFByy3p57op72uSoG6kCu19XXcHXtPxtqmxNdAuk2oqXSnGFZnC4NSYFTB2",
  "key32": "4d2waEJ27pseLJMXZNCMMPifmW4NWta2ZqSZLN1EsucKv328D8UwwJLYuhmoh5FT6bM2JiMwh9JkqhABBFcPVGeq",
  "key33": "2ezt8vrkct3CFwGuzTp2QaoeEVSpaz1C8PGjQYkZvjxi95X5haHsVXWyEqAYfB347mB5c5hyDGTJLgX5nqKvfepm",
  "key34": "4NvPHdStu2MTWKYMJaF33uvbfuZmQAsyH4m1rANZF3DutFGfs48oknyHrVE6TNiPW8mJEq2juu5ezLTYuanDzz1t",
  "key35": "2jmcMphBanhzeKzfEmkhBWz2eKiCVjTrBP4j2isrynBzfUeidnUTnnYiojixwkshVYKHyryQSkbteTJBXo9m33dn",
  "key36": "2rPmcFMDAPQ9LfswgkMAkHYhEWp2YjkNYJpoMayY8hjxkja7Hv9FXpcUkxsgZzXkW9kiwLA5GXGnebhVi5RHC76s",
  "key37": "2XSJL1MAPr3sewn6vtoZberJNgbh73bXPLQPCPzeytBWXA2i2rvMh6dsG3kFnHGyQ9hsecsZy4KBwvRhPFhHy8EF",
  "key38": "2PdPz9UH6DuweW7s2HNPisyTu9ZbmcEL1He21Q6v5ARtNdQwGsMN7HZJvpB44r5vT5hCGakHRu53H2h2wk28JaKH",
  "key39": "4r6Z69zfPmRYSBkVXhhwYfzzXeCYKH1Duh8hHT6W6CiCZDbQeEJWwWRpfbCaoeruL4bPcNdptsvbE9RuQKY71WCX",
  "key40": "2cTZwPXeRzBkGfagaXYjh7QMfrUGmuFhL7NueTDx68gkCHTC2kDfigEtvz3sKkB6zkaYRNPYpsqB1J6q2fpvvobB",
  "key41": "5xVmG9SF89RWcujSpKUskzYFoyRcpXLmaj5fXczsEyKSiEMP26Nw3jdh6Ti9Bh3kAEKuoy37ryjWM4oYEhFKbyKo",
  "key42": "44yzwLoSZ313tt741yfNfiYitF2r5skqwPXcVsRuaXQhscNMigkrSbyZPqLL8FE3DTwZgDyXtdc7HQMuKfoPnTkn",
  "key43": "32kB6vBdmw18GWWFmwGLnEnEXSoTCA9JNuZV8k4m3DhUbcKNsrB8pCeSV1XQFpe6JCfveFAtduJsr9ZZSc61uTYb"
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
