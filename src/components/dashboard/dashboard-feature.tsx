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
    "4RK3t77oaoKf5ARML7RQt9xXp7rFuxfNsRMoAaiBJnCmqxaJLNWxXBPdWqSyGkSXf3TtkW2uAFxKtsDAZWS3yNTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EW9tq99U8tjVWMgyWJbBpdipNhuLkSKjeLxGEs19Fvje9NMx2qvij4bBTBT3r3gkpZ3qgiLZwh5FTzpwCYM6qdk",
  "key1": "3GozasEm9SPLmmuipRCiHQBmPbZPeKCPmV4vdPQYVtXR5UkrrAAuDFn3Pdsm5XmU7XpkH5dgDX62zzUkVEZWJSZA",
  "key2": "3j3H9Rx9NTdErw6G3VCHK1vfjWHouespxZoUdzUepeSvB2ma1iYUC2pqTt5BTzcC4ZvdvRAUe3nxrtYB3dWNb5Tw",
  "key3": "125xCo4SyQ3xo7S1yzDPqzGoLnBAcqiMnriK1UBiVxPcasfab1jTKA4ZmnPGurrBFGNrseHsZnZiE1YuTWr3TiDm",
  "key4": "2UqCE38AHufK3gFANPFtBVrsdR9t2pHSCEryVT2WZc8inDbk1dBQuycNA8X4UY6MaxxZv8o9JEQje1pCPdYP97sy",
  "key5": "32N3Ajs2kLLCGiKJavgNvd1Mt8uQhkWujXGHbZssuK3cAeytH1AzB5eiNDdmPAbbvfH3goqxzfLuowPkHQKJiy9F",
  "key6": "5VHLAKQEVAEVuMwfBj593EJmA6suT9ZK8bZy2SoLVYMdhWBiCnXSyDrZ9ra9PYXVVrYYUC4StWLqDuWFqf5we3QQ",
  "key7": "3xtgY288FPwMh5VCFre6zy71ewRx3uHSeM7Lx7kKu7no3EEKAbUugDEEf6WgBjGqZRvhjWw49B3cgv5ahMRxXqb4",
  "key8": "5FvjfpobUjGC8ER3vJwE7TSmR4C4VKPBswHsjYDBUfoAiwDe7kFaUi78NjRYq6AyYUXUnTxuHU7YFrkAMAx4qdMq",
  "key9": "3fZgx7rK6Jjf3cSMhzFPpFiN4MAUZnesu5DMx7Y65nTgU9XWWFhx7ZzygnQYcpkXvT4qNnEmovMHPekKExnppHZY",
  "key10": "2gc4LzrxQpMDfmdAEWZCEwT13ZtASqYJCLTZwBThPaMrNndqEWDYczE3eaVr1xwdi2ojkncB6Wod8MK35VWu8DSS",
  "key11": "3LEjYMsC9SH5AnGcEjJsjRAZkpktn5jqeNCAheTWSNASuXGrMDfr8LrfKeakBgfQENLp6FwE1XsQ6VXnLUSEzETS",
  "key12": "3ado1bMBPe33ps2tjH1q9SCbpTFbViDXAtL21gdJabgZ2guJfVFaU5VDBsQ3mSTKyb468sDvUexgYoMqszVrteTR",
  "key13": "qQTFUVnj8Q29Z9ESujQTTdcBRaMcwWokERyMAT89NN6RCrQ9T5tQyk5uLWYF9VPf84M2HwUXFpZC8PtedG1UZjr",
  "key14": "4Qjn7a8tQ1Sa39YSPWSxEDL97rAs3c8E4f6vPLypCCQiGaF4fSoKA7KMVxdYjcNmYWSb1XNvXkb8G4B5iPPsUDJF",
  "key15": "28ikvznEY7cRHJsrsTngANA49wcQENK9nxkkorz1g6jyZMtgbSmn7jqWGCU2zjWP3TMKG9TF2FQSdpu728zxqWzq",
  "key16": "CLUmKsBZgtEpS4QRNgPh3aDqNKc6GJLwRToU7EX3qxe8C1WVK9nBycq7tLjPHpLRSteWiDAiLWTAnycRVZBhW2v",
  "key17": "3WcRFvzsTsZu8dqC6Lyfm7tLfZoKDnVSyEWP7ver3owspDk4MhPhXWFLe95qqWcdCLCWqCRiDzWQuPLnuewUFunc",
  "key18": "3ncjmW5rZhmwE4tjgGHQ92bAeSmUKSMCXpDjiUDFGBUWAb6RFtdBm7dCHc9nzBTt4Q1Gk4yAwZx4osD8ZcGUApnM",
  "key19": "2cnnPcgjdhUEA1Ke2hZKdi7viSGAUmMDpZ4Vf3Rcuj9YM1mV27otpTcGnUFysnBUFtFfcQnPTHZCUTKQ2v5cJu6K",
  "key20": "5ZCezWP1udRK783zfjzCH92RVCSP3FdSRfXdNpi2Ddqdn128L8CdgxVurW1fGkoiDLbBnCGcARtN1tiSjAw4XCT7",
  "key21": "5E8u7voZpW7mmvtHzYp9VkpuEjv7V44UWtRvuwdwMnJnBj6bKkpz1WDbRBNHQ1yCeuXa3osmW6GJa8P5UDvZWfjL",
  "key22": "3fRr6dztoHGtoKtMAExiy7SXLaNJEUTEjiWQz8pJHLeufMy2j4C7Tp6dFm4qkCy1xK5aWKX7KbHDLL6VNskEfNLz",
  "key23": "47aHaeQS7f5NUHEt6hr3WGsNE77AQTHU89P8zmeAaPiZqQdzvZHRmtaPSmBtXiwqiQpDSXpo8gRhCFipGiA3iHt9",
  "key24": "u1VWyConvsME5f4QMtBnQkajSFg28ymE97H55SnxwGAMACXvCSa85haUGmeE2mEqHNeXz6B6oX2EnhxhkxsgBmr",
  "key25": "2EKYsgM3EXeAY8qY2kAuCN1AqCfbPkZseoNqYFKFzq8R2cpt8k1uSbBWNPbdiJhYNbs32Ag2CGyuL6PkXj8f8EYh",
  "key26": "5WLSPaCqcP7UH2K9wGTdTTGLR6a43APQMUvaoqXkBW4Ershun7LRwBLp1KyrgpkfNukk5BcTqnR7WwLZBNoD2Pgb",
  "key27": "5xN8snM6UUgZG8KbdneHWT1arSBS3gZgSotpoucXh7U5tk9Gh5ww2ZNcGz8DHwTkyUS7oNt48gmgkmwv2nd9tU3t",
  "key28": "F1KeMTbqPrf4NADvfE2ExaDmXUWE71UtnQMoim545Eij8RbLERRiCcURB1zwYDxLZvt7Dj7CdXE5cgotkeXNoEc",
  "key29": "3pwEVMSNePg2VegVxHujTAWzPr8rAZ1sf1DU1ZhzVkZYeEqPoDCf8ZWm6eUbXwJy3pvvxNS5YxxK6BPByqZykHnH",
  "key30": "3uHW833bGwASrPYoJ8yFGG4P5SYLGQHfZxzo3a8AkuLNjjB3gxAHkfhtjp6wwgtiMhbV4TfHKZYxKju84fvMwF5J",
  "key31": "2cEWBJsj8esMbaTLaorz8NCWVhuNHmRhD7TUwo6WVmedWWL4sCmStwXnBnE7RbbaJMNWDS8qbWmCQgXzWh3Vcpxw",
  "key32": "38Be3fE6A8KgZBY6yh4eL9LwX547iipZ3ZvuM4euFrA8VS5JWDhGPiE7hhSWTW41nm2PUtMUiRqzxtBsiw2V7Xya",
  "key33": "5BtzttVu2PbDZsf6UdKJ5JpUd9vGKBA4zewYSXKU3xw3W6jz72KjzsM7kWCZokzn9s21FSxsiXmwhcwNpgndoQrR"
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
