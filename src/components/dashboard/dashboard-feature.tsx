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
    "3YumvP9pBEUBGX1T8HXRXKpcgGFMR3sCjHBKNV5aFJhi21Sw1KFNWFmpnbqaFZD6v4wqCzMFBDQ6CJrcx4hTYTnD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UxtW3UGTDtDYv4C67cbU3wRWvawTQwAvHbdVKThiRKaojuv91MJsTdALS5Ti3MU2yTQZid12QtsJ9mHrBJz7zn",
  "key1": "4cSrQLQwHEsFjjXEqunRS4hKZmYyd7MPQAcAUpoTSoa2CcNm1LiPq9tFem9JX7bCyu2YaHwagchUg83rTrK9fKBJ",
  "key2": "NtGE1V8eT9Ra9sY4rsKXDn7p21MEwsGkhRT3XYfqY3oSjQ4uXP3EpLvw8WTchJCktoapiEvzdsTh7hhwm7WmyXY",
  "key3": "5WqaASWnqHzy6i3QWA4JVo9QvNFTQ4cBfhETgHWQvA3nMTuy8ovsGr2bYcVtsS92Av74raECji8aEKmCd64F7J4Y",
  "key4": "4LWxtyhCH8GHVvH9qUZvKmLfHNYKsacMGpZzBBsEVJDiZYTBfbjB43KXBP5czDiS7XATnKRcejFEQo1FvZCyrDQi",
  "key5": "5Uwq2mv7eyqGPsi3s7A47wLaUZQtGvoM6iGyryXVQfFmSyei65zZWGp5WjVpXphktDEqoYdTi9eiZnM8qXVy7fP8",
  "key6": "23TqPGmU6Lprfiykvp9zBBSeBYCDd4yQCTeKnuYnPejq8twZT2uzQkDuQCnaExBhtYzHtHrEQqA1gC8aAWjEoaS3",
  "key7": "d4NkpjDr8DnZhhbhzvdYKnNdWfyax57e98AvYRYSprGGupy3fcvAWSHV5Fb3vTMFPoYXnTKawk5wbG5hLwoiN3j",
  "key8": "5YyTK7bCk9xbM3vDuHZ9JhDnfKmibL17qatUcU1nFQucoe7uLa4AGZ2wPBgS3hCLxUXMTTjwuZCwxkcEk7UeKF8",
  "key9": "4Qk3w2tm1Wo2Euidhouf19fqXumSXCCkv2oQGBhMSNRZhYc5fGCSLEGBkgjUzW4Jc2ZEtBJ9wKuCGThevfWJ1gPo",
  "key10": "3mMcx9QAu2fPBo7v4SxsP1vQ7yYbTuGZGPsGK4vQciaVJLM87mdtCUpCKTxVX78h5D2oCcrXL893CB6CZ8S3uJp",
  "key11": "4Evfky1QJctJexzsy3MawS69vpeuobZANKPgxXutKuQjNnv5VWsdeCqxtbKLRBgBKULenrxj54266n9xPVsm6EGZ",
  "key12": "3Tcom5UhH891kSMoNTZoEgH592a7E3HTSZhgkto8y2JmHkENdA9fwZ8pfWjSYCf1dT5u4Bie6pRGbYgBnzh7VcDi",
  "key13": "51gfLukN1STioQkYXh5oc9YFSeRE5p9VbMdyJ4LZACYQJdahxfEYdXHQYD49sLDvVkGis9oiVpgedMMhtt5wqVAJ",
  "key14": "4jCVHzNUCFe8NHw2rvaLQMSmTr6cQ9hYFTdv9bU1LDjRFKJDtweLBreT3Ak2zC2MokBThtJG1nuFjcMhG1org17a",
  "key15": "K3p33y5HSsteDzezx3hJxLkP5RZNfzcfwfVHWCZouqdMFLGtxpMKLU7pPfJSkk2YFEtMRAV45oWqqGa8PjqYtJ7",
  "key16": "5jBApxy2bkA7BpWjqXPHuiPSVZxpRosmKbnE6EVTB1K5qrv4vqQ5XD6JmGnvQaGGtYuAXS7Ubc5XnBV1bA61FUfa",
  "key17": "au2UJpqBCT8LWk84fhevncLGbQfAB12AjkEZ2PKkvLazH92VKPnYSKvREB2PHegsdcDopHJXJNAPSoehcNNF3To",
  "key18": "isAjr86groNshtpEZJuxBMdWh537V8n3G5y4RHWYzh6MipyLQzi4pZFY22scnVbgRFyt7sieEHEiyKwaoHUoKgq",
  "key19": "4ktgzaDXjj6GJJv6Ap2B1G168F1wmJS5BmUwKvRisV2Kgv3jGUNErLjNsiGyJWtbWiyPbJkkV5mL39SB4JsUUJS3",
  "key20": "4cuMpnijJ9hNVCDj3N84oFwXEZA53M1jJrLHgDbVZTeSXdGTRV1xZuAYMGTisWaWgcprGqR4YmQTTZEEsCa4gMkm",
  "key21": "3hD4ZjDhtuRWMkZ1n4bQohZT8RTYisyL3uRA2bVXyUi6J9gtePftgTgupxQ7FEPaTE1GBCc53X5Y9aqLNmoKDwsb",
  "key22": "23nZc48UpGN76ropuUbx4aqk6JNYbsJAifpByLBbXzuQs3jSEExXnhQWPVyzMFe6sUrHp7x6xA3HyuFdv6qZpnTz",
  "key23": "5Ae69r8Z2CXaYNCMC21YveBS6A9oiqDuwkj1at7U96Bhi71CT9Dk4kYw9tFcfB2tQY2yds9aQmsN24Nab7SXfcnx",
  "key24": "36HCTCqRcbVMAZiZMPVNjTeQFJ7KEJQF3fLNPJtcyL7ZXojVs6cAgFBVR17PDBc87odziUM5nLSGkYxh4iKXXfkh",
  "key25": "5ZGv2DRcGL3paqFAqX9C2638ihwAm2gSxZ8VvsZ8TDfNrUkNRVNdxAeUMxQxHrjD9dq9eacgrtjHjk8zHVQPcW2N",
  "key26": "2XnN4kkoADQqZM7YAst5QAqe3NVdCGKaUahCx9BafeGJ3YTS8VEUcvcumkv86GeGMaC65xR5W9jpe7vzEqr6ush9",
  "key27": "4dkiUoQvggRJVkZwwcrWeZVnf8f7MswZih5zQPaWfgnjRXtK1yQRzMTyyrgQeZEKct3BoSiqVtWTeWovsggkHPud",
  "key28": "2hQdyjvzJsJJymS7dfH8z2zgGy8L5TvGY84UyHyFoVzzkJcTGq2AVkH2hBcaXKaGrZpNEg1DgBjWcWeEC439drjX",
  "key29": "2phgCk3hYAiVgSznUVmNDTG1nAPLdCYXSWtTvA5osEp1RHfszSuSGSkpRVfc59j15YK3zvH3vCDi5pcXduoFJ7iQ",
  "key30": "TpZ3ZNPchGEPokTbc52xqeLEgXtfpKRUwg31pgfCPL9Pfxe8DHRRJ5mv9kHAtVgVnRTmvtDSeW6gemqmf5NxrRA",
  "key31": "5hrdHH1SFHkRateQmNdeGKoFW2iWQW8Cpd54uGKZSCM9sVm7HzaA74B1BiG752CibRxpTpv2c78NAhEeE5iACYYr",
  "key32": "65ZBEozRwsc3M2z5M7qWZZNvmqrXgVHM8AAyEoNqGtzcDwwMJY9fBtieqdxwN9jmWuLAsfodTUDjYiMXga4eS4dB",
  "key33": "2EDWwtmd4cUubUqztoaMbmEzHuGRqgzMVrmfBRkmdVXi6c14jjmbXQQ7X8UMPyQjK2DjTP9Cv9QMEjcn3qxPSULD",
  "key34": "q5VoG4kJL4ezAY5tzSBA6sVpHKNSaY9mLbkJF7U19rJzNAgqBc3V2CEsbqj1YgWUZHfxkUUX4scXJCfs9hQyLVV"
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
