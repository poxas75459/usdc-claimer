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
    "2hmt6gYB2Wfuum8oNnm8ucMF9bju3ABtgDhXfVCkwQ4nSTvFgYy5FNhR4Wth6sRNyfmgydtCJ4wSCaE1ZKGr5KPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZRbrXehqCghduVpsPV6BQDmgrJRSc37pLbiMEMXCtvEUZSGgUHMhMLwzwTaUvHedkcaw2Dy3Fp1cuWYNgWEMo4N",
  "key1": "rs8DxbegbbAt1pQyFbThEAsE3jhjabaHvadUaPPdgtPQq3uQhVQaVTDHE2xmh2zwXe15e67Uq3BSECHwjbEtLAV",
  "key2": "4J5dq2iyqbkG675SvGanj12vL1fjUTjsCUzEgiYBtM5VcD4Du2r9e2yHC4KKKuFjt3QukQTbEkNJfhJCsqZ146cq",
  "key3": "5D3FjPB8EkPevqt6AvErbb1Q7ZbMwXQ9YjpNpSZqqEB2zWaRKAMbf4MHcbCAkYRKRCM8jLLwpTqDyRwywHRERYQU",
  "key4": "3HiAbxGKc8ZaKwacDaZv6T65jmJ9J3XHyBuSx3FEmJpwVt1VSrzBKKkSQadiD2JqWJwatRH2ShNTVE1VSuPdtSw8",
  "key5": "3hhQf9RtEpjMbATTJ4fLRfD1P79SKoJmwdcg2MLPEA7gFwNpVLrKa4DLrqkhFnymtPWoxaupzKU8PRERB7o1fSrQ",
  "key6": "2eMpvhMf6CxJaoscwT9pWQJksMf3sCCUSLWNNPrsiEM6BGBJhqEZZDphQDUTfdkvLUfSXXKHsa49otEkjonoomDs",
  "key7": "2Ja3mdSzt7V7CDGWuj4s9TiNRUjMzX43Xuwdioh6QtRmEYS8xzH75UwNs3Btss3qetkWzDtWf2j2HmtHYm6iwLH1",
  "key8": "WfafzyZXtgNQN8VQ5GYDERqdRfM2Lj9CehwCvMV6Fdj4kz7ZnvKqSD86VB4Sqh7TQmBKzKbXzV2exgcPgdhG9aN",
  "key9": "57ZCjwEGaHbdwB3F8hjnn7dDMarAgEKvRaBopovDw1PwY9XBHSj1kc9WZ4n2KYriWGm43vB2N5hSKaPJCoY3McSf",
  "key10": "37WqV9dgGcfW2dnoB6e87WQbi7kwNfr6mGEYTRNu2z5okkDscpy3LQEswSEYhpYrKmqD3JVpMJbmb7bN79CWTtEg",
  "key11": "61sMTVwe4WQa3sU3eaNLswBwUiVQ3yqnX7fRhap9wUrE4renpH5nB2mdntRZAoszeTZgw8dV1q8MrUcGWhco3My2",
  "key12": "5Xmivmj5xmdxNoe1HaHDcNMouwUpKDtq6dg6Ei3U3yRw4NsjtrP2Jk2VhpwtpeLZp7pWMsmyRQf2iR5hbhUN6stt",
  "key13": "3bn2anZfKRsFT1QsoyLKK82ocETseqDhHrhk3fruRNSkNW4PWbufsq9QGbzL7UWfyysS1thxp979dAzpANWvVVDo",
  "key14": "3o4QdtZigvaWZPQR5YLtJsioEwcefsSYpLJDgYTSC4g7Y9xpoL32fQX2u4nHoXMFm2v2xn8oYGKB2j6mQ7SSSXNY",
  "key15": "rGVJQUJqFDxSLyjUEwpqgLGv69resedNCwQkFt2Ztm6wqjXB9WVbyiLJa3PV67Q91hnzouY2j7d9FLf3pdYt4qk",
  "key16": "12VjVcZ5KDCmUkwmvHsjrqAMdFpNAnJzmdziC7stn9h4n3FyLjFoQiqk1m7HdBiMTHF87SMTJBkLndEP6rMgv3q",
  "key17": "29e82W7bnzLXwAVmYfhG8n56KCAhvSy28QhUDmsTTyw7hk9pmDanKkaYrZ7rwUFRapKNCWya3XWySSoehuG2MDjF",
  "key18": "61HU3aLFMzf9Xo2jUHKUMUDj97wqiQh1qq17ncoRvit1mUNjmvEhptb51vAPqRZdZbbdjwLkkLfuWRJmm7ugt3hS",
  "key19": "4HVbexhhoEPtW5T863EnYKEAHsqUsjTDXzBrqnisBPKm4ZzSdctWsVvUc9jNnWaW51tGjfWvm99fG1sBNKELWzEa",
  "key20": "fJXUPGX3joPvWZmMacuAeTpH6E3ixDLwKdj47BTB4Ve91GDPTLu6MscRHHv6XXbGGNAu3hCNenCPFDpJ9fbYQU8",
  "key21": "3zAdEFqCD4ShSxA5FjCtWw8MgLiFUKKzvzW6EtiS3xmYEqngYzqgPx8pRQfHMYhvKw7uQemH3k5tcGcg5vhzEe6o",
  "key22": "4gbuPvHPsujarfpYpAX3yqHM4dQLvNKhdTiX2b1Fv1W3CEVJCQrtzA6AKwJM74w75YrpTo3j38oT9MRenaer3inj",
  "key23": "K6RGm9eJb8M2Kxiu423iYg1bL1ZTmRRv8vNVwbNJHhSkcBf2DjQqjGusgaPBZq9Qeg7VZejCptDHfWRqGH4HuJe",
  "key24": "3D8ZjEmGayKvHHAT9s3ScoZ9RFzjH4BXghATSSQGcHvHgvSWxxXBjzPJrNDyap8hN2bKj7c9VpGde5dd3RmmTuwW",
  "key25": "m5frTVSKSdodYwxkHCX3ZWFcqLP3pNpyqQEPsDMuCnCBoTMKUVex9AJdjqwiqZbQvL7RdR66wZ1dgjHAqEumPqT",
  "key26": "4RWkuGZSQ46Ao1YKLHd998ebpM1d2fkpR7RAE2TNCzREENn8JeBjVyu5pEYauRiuAceeL6AHuapqfrXWDH5LvZxf",
  "key27": "dbyj8LsiWKGLUE4xtpuRy5vCSEahK7SjebCHqqVeQG3LqE9GFkwDJCHrAbwfbxeqg8axRatvjZGerhMhmFo8BPN",
  "key28": "xwHcNPqaGjkz58kKkt64X4QhPVbjZQfkrKU1JGHupwpqNvtUsfi9c5gtSkMoBZdEaE6XKijyyyGgBhsAppPcX7u",
  "key29": "RJhHr7rS1p9zCvxJfhWf4DunoQSVM75LTaq6Vpe9Wwjvd8TjuFxCVvNR4E2fM3mwvJVoqQrocLMVyfEJjPk5UMr",
  "key30": "4azGdk4hkUvLB8BA2W8nAcFaQF9SJ9tRTxMT1jgS4SUDGvLfwB4ERJvvDEJX84MbFco1UEGr5zwLCr6Rgpx87F16",
  "key31": "4gUZmopYaYAvHkh7WnEE4L7T3DeqH3DrAH9tZH5ec2BcWACvPHfJbEovRgSYbvbT9AmKtsmQHE9JVjTFL9Gkv8gD",
  "key32": "4ArkZGfxcFcV32ggZhpQy449j3Vj7B1qvqFwyeeRfW4skecK7cAxuV671eB85XpUujWJgMmRVtszENiwAmix1Enu",
  "key33": "boBj6u9xPFYi2btHqYxaJN2RMyg6pFd6UtMCptuPRcWEBnvxQuD6mC2YrQvYj4f5Mu7EzsLsHjbHi33SZLqjoa2",
  "key34": "3iP8uX42tfRHKv7o419VfndY5MQjowBTRmJYdq2dczsLgbi4HEPuBpfLFiDEmFqCHL7goaXprcMSKSqdRWEoqq79",
  "key35": "2aibPB2DRATYzg5gumZuQuA7VuhhF3B2vzqyc29Rsf6ZGBueTRfm5Mr4mgYqcTsmQ9aERVEHhaKAZRzvRzQCiRcq",
  "key36": "5NogQHUVJJtxDUX5Nxi6ZjMMFPXPYeR51KBzzazcRTGSicD9M91Y7zj2suKr3dHJBoaYvfP1CKKmGDtUe6cALfRi",
  "key37": "4inC7q5WtCcU1NdgtvcZ1z93ArT3i78WYkr5ux8ASNTCRCZuw6yB5rjwUpMK1PgbYEhxa2DzLvaVasC9v9jTHgWh",
  "key38": "287jrVbNZDm15AqvNzYZSDAceSZDGodJ4XWZJGtRhC28zxYUDijSf9sNsCTXTNMsjJrwCD6QQMFqDbLPdDb2DW62"
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
