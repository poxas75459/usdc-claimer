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
    "2Jb7fKKNFDctM3cT1eomr3o918RFGDBzGoagYP2ZLMoxkNH7tJJyYvmhpwVcJYsGgvCTA1syUhVodua4WLPrnjmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3At3PHnDBYH5Q78DeB2RWPXuVCRug4ik3riHRPC95gdysMXUyqdHWb1rTC7fhTTLGi3o3CfGx81KjdX79NXfhR1z",
  "key1": "552WutPp3vbPodm4obvsWLS9mC2mYa7LHk5EJwTdZpPLsjyEoqvn9LxmL7HZZqzyDytEPrTYUXrgU3v7L5x1Qcqi",
  "key2": "3uxiqCUWZsJsRRBMTLyqFk8QpVVSFByJe72hCBdWApdGguweGKNb9zYbQ9yzZokaMax9ifPhRnpnHTLpkv3xsM7P",
  "key3": "5rvoiMFuWugPG1yP3PumacnTPgjnLoDWXX5z6afUVFrqTHB1f4en3w2noGxhAciuc572roqHg2w5JofbSFAaUdCx",
  "key4": "534CbK3CsoYtaacPxV7KtEffL5VN5RUmptrfNDNzu3rcnRNukXDsXg7f5N9itJsSZLn1XHMMznq7Gs8H5tovWQcF",
  "key5": "RXwHSWuYavmFe2ghsixjiVogrEnQitCVDVEifeo4xFEirTAPMtgvH5U3mF5begfWXjuJgnqp3t1kfVztry4BuhP",
  "key6": "2vjenrS1AGrC37AcaM56xBd6JVgEFtcyyYxaeTRissSEtVMfwrFu24kU12NJ8KSYAQViii14VrLkpqp3CsL5dWTf",
  "key7": "2gD3tFUAsES1rGyyGXcGbYCj5R61fnVDdXL22dJcF6jRNJ5gE98csspe59GTQMGAM9FZTpKJzkdb5pp2ARQYJY6E",
  "key8": "nfNaQdyTUdhRakifkXT2goh5Jg5s6mixLfiSAwh8iCm2eAHWSekd9dGnAy5MBiqx9LFx5471szJJWtVEfHAgAfz",
  "key9": "2rpH7SSSBESDU7db8sx83H9U7iCC9NradCkdEc8qwPRNHPEmpU1NcLwdMxaCQrk3ZKJPBkdybUFYoyyBeuMezqSx",
  "key10": "474bz8TMiKimidfWai3XsK87nQnw7CYkbBJRsWdY53jdEn8KvTar9Bk5yHJ5JMJHeUD5KGGk6LtF97KgBZbRFiYo",
  "key11": "2TFQ2pKrFVXibGQCBKW6MHDRBENton7qXtxFs8u39MnvWFCVXj9edqsBoq3ogRqP94VWMBXcxyUpzazi1TWmqpyV",
  "key12": "5T5yXzshvcHHXzRRc6URcxswcaDLym3KrS2vJ6nR4RV5rpAP1R6qdsSkrSwo5r9xdiVEm2DDcdFsbxSWttTM9bML",
  "key13": "5xN65xYqWjq8cE3xthy5z7dKHqPVfr4HvdsD4uoiPVF8bz5WfevVZsqxJzaFHW7TyxpcwM6QW11hopiMu31qXkBK",
  "key14": "531QRujjgWYCp5v7hqi1dHWtXFQDt17LhVgPdC2PgimxkLRDbsWnrMteJggrShzujnT9VXPngmD2cVq75AvweFAJ",
  "key15": "55t1LzFhT9uDC9NJXL4PMnutqYebY44q5KHF2dLGkJvpBhAyxnNPgbzsCbTFdrdFzDEpybWhCLKwnA2ENwvrojDo",
  "key16": "2ovmJ7zZXipQY1gAysorPUf8beqmD9a7srxLiv46jRXERdifpUcUhyxaBcPEAt8TMGK7nCM5ZRpEryeED3HE5e2A",
  "key17": "2dvHoqgb4nhu9FjY3DzCZTbYSqAWgo7HZ14JdyQYpv9FC1ohYz7Jf2D31seUjXhFEidiuDtruEm71LkCUxw1s4j8",
  "key18": "XRiXPYgyBaW1KnwHz2gBXbEfiToTLsVnTwzHgoQSvUvWJdhaNEgY4fAjjoqGMvWQr2vvXH5jPS1Xd2b8Nmp8pF4",
  "key19": "4bzc3vUgfohLLDz4Fep3CVcqeN3P3WC2HUkBfo4S9LeW9RkXuwNjBLQuWYQ27caxPLsxPE29j5U9kRBMUpFqz5ad",
  "key20": "4nQnGgpNnG46w8CCFemdu7VNvqARLAPDUWF1s7VJnSqiNETGHyimqrutFVnoYgQC1kqVzVmqq27AFU4eJSfrzCJX",
  "key21": "4zc7pZCjhppnbGtXDDFQMerVRmJgTDAsSMwpXyHSxNemFQXcRt33RSFR2wFkDoAfDJ1AsW9xG4c3PbSy1uEwsRA9",
  "key22": "d7W8wT5h3AK7EkL85WA5R1zYjW8ezGqqARP1jBEVFPkGFRgoJNAPpcSMMmZJxfw9zFCBTA1EaPvs9J3HTjsbh9n",
  "key23": "4moREy2xXGauBmtrZpd44w8iHJzih9ruicyCk3M9VinMoBCcDia4XVXvx9Y9oUHxBe97gvPMqUeRKfxNzXBunDbC",
  "key24": "5y5j2UtRTPEqTxhhjZu49tQuyZKAWE5KgyUZwAsrnD75eTGCeiAvVkCSE2Uwn4jTzMuLXemsBB4aHMAHPpW4wnnK",
  "key25": "5k99L2f2zSAhUke2cV4sVxFyYWLp7QkvHnYxwChaF9YhdwbrG399GrNfNpuuLqLiP2egPq43d5YmCtrJgB93s4az",
  "key26": "42nWckjcoFCvuDAr72y8ZWSfB9fUjw5Ti2TTrqUHbkNPimpHTCyX7UrLYc4wvkuqLV2XtTx9bC9eQ5XQfEBUzepB",
  "key27": "2oytnn4ZuDTkgDxmrSTxNpqrs2aSg1Lz59NbdHgQYKyDhbxW4yrZGs8LT3kEQN81AdaBL8cCBAKgq162qNs4oNeo",
  "key28": "DVGGwFK69EN1wbHC2pxZMDyRbtTnH3CAepmhxmy7p4PWjUofiHPxoiioB7gVFB7x18m9zKHVK966jtNWcrpkH8U",
  "key29": "2gTDCegq5ND29DmKFtU8kGhBukDocuLBUfRBCvC4TyguRtpt7FxsvQLXUUvFa5itSdxkjLFkVqcg9VRi1LRgCX5G",
  "key30": "45TqS9fMvK11NhhmdMmLwzANZFf18SYo3a6eLENMkrZFUA4TEUW6rV4AqiE3DaqerCTsKTqnS3ZQmAgcZ1xms5Tr",
  "key31": "46XsNhHo4LoZF5p8WqiFBmMkpCv1udUAStmPbF8dYuH3A1ByFNnZd9NjQdJqqUD5JBMrCaZZpXY41jRyH9h7z4Tw",
  "key32": "cTqvA3hdhEQtwsMGkJXuMGZ99XYpLfxbWqMPpQ4MRDNLMfYjkU6N6rJhhbikNtDxLkATLMXttd8UJQJLH9uzvQc",
  "key33": "4t2ed6k9HGaWtfS9u3mwboCTtCyUdcqarZiZopJGh4L9sPGjBKggNyhjdy5ThjRaoXDhcAeH9fdA2U5zjmFMCYSV",
  "key34": "4L15aWeCmhj6jJVHh1q6R6frz7gDYQ4q3Bv3KjtQStLYnT673D6pZQQNRh56hf3gZpDHpGXX7SwhLrqeXTHaceXN",
  "key35": "46UNLsbtMTj1onUhnodX8YP9PEX1TpTSSbDDSuyB9xqJxTap4QQ1yxAT6hN6diQNBDWQMXpiQgUwd6ccw3VFwkvi",
  "key36": "5hek3LHpEDfnyFMNZxdriUV6BQ3D5PmyTn2uWrXgJxJeUuyCppVsxkz3nWNUNTKEEZrFbyiGwCeX1XB4MPhZLqw5",
  "key37": "4zcLKFpupSzkAju122M6Ez7EBMS4FeNWxKwM99Zxfe3EDkh2C3J8z4A8vB57E6jyR7qenmkgn5RR2wdrChbrRXof",
  "key38": "5AFccYu1qCPqdd34VB4w8vW3jtwk7KT45tEaVxU1VdwHDRQNm1cSu6a3MQbJdgDBfVwwAV5MsNErHXeUeMyGLbUH",
  "key39": "3wvLF5pwMVoBK6fBtVPJGq3ZiZ56ciWTa35ErmS4LXrMdCjkhceyCWvo9zBNzYh3yzHL1Air9DtFX9sFtz97QemQ",
  "key40": "3tVUH6XqDeAwCimskUVCNFrwsQ9eftAzYaf21gHqKHgxwjsKd9oDGvrVSmi5TpSDbMv3ES5G22q4hQutcRC66zsQ",
  "key41": "4JGk7VNTQcVJdnNd2djDpdZVNVGa1hWipi1T2KBnjcJd1uVQJjT7qmsejrom1hjnPKjPQ9UAkd6cKZagAMWQXVeD",
  "key42": "2WF1oXaMAXoHiFLCEH3M9pNdePmiDmC4eWD9pTMf6FiwCi1vKHqJ1VsGmvbS1t1snQD8Jn1BLa5KZLi2DuY8bemC",
  "key43": "5G4URrC8vu9ALX3qvrxTfEWUhqXKdCTdgznVZhJV894tXaBWi6Rg2wzULAjQfJs8siTXrNmuqRc2Ja2LcLypVspo"
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
