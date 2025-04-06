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
    "naET1YDCUeB5E7CxGf9MwNeB7UE23nS7w3AeusTwyhsdje4v4pGNCofZB8MasYNRCAD4R1Zhnv8NHFcTds4QxH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F8bVrCHKbRgRhFrRoXePiNa8dkw3y6sesUn64hrPART8YpksBA7RrnCLPbtnQNbZE8s15tSYrBBU7CJoKFTe4p7",
  "key1": "2pYeBPbwS9QB7mpEwDxbJ9574LeZ7ZNqRFuHeXArzsxsoAfMSMqLjTf5cvWywBTbAU3Nghaftevj2BXCwfTZjxX7",
  "key2": "3SMZ6fXGNL86WfRsaPBZhc39tJjpNrYrszYzMTfc5fhfdLq7umGNXjNhz2yfy6hJ7P8B6Pj2j9g4e2UWyjrtjPq1",
  "key3": "5qJWK5s9Z2QR9ucKj6F7rEJbWnPwj58kHCha2GFp2AxwtUhVryvBWesoZbYHqmyBksm2zwdQ7zkaWGn9oVtf7Npm",
  "key4": "4ga4pq19qQafTTvdie7T1x8aEurwzhr7T5XDTieuvM7VTbUEmog6qSEHEFAEgbHMxf5zfdciDB6VsePjvs38vMbw",
  "key5": "5vdXXhtbzPABTYCxgMttNvus5Ao96fsScCF96pRLRGrt8jbKwuiUi64SpjA3sj3Z8NWh63WFTEsxiG8WqxZ3mpgP",
  "key6": "5pubBB46crGYhgyeCSDaeoBX5tamKrRjm1QGFLDKdmPzoSfNemPkbJebeWczqGsYqRDBr2CwYHhWBitKnTzLQLF1",
  "key7": "4dEgzm6re9GYSvU3YrpKHE87gic6uzmqgokkcxMhJZE8g77RCnmNKr1A856L4H1LE53YSdQKmZBkN7aBKMa4KtR2",
  "key8": "JufcKxcZwCHP4wwbxeZKXtJ64FuAdUeVoYmu6X3CK6MmEqjLpu8f2pFf5tSARZHZ3YhMQyaAaAFQgAv3GoPUkuA",
  "key9": "2kiJvevi2MysqUEsPhER5BAjz2MET8ztKJyBYKQT8Mx6v88L9atodQDbc9w86HYLRvZzuaCCReZirfmLmxfMDGdt",
  "key10": "PMRNNk7YpHN48MSQ3AQbZ8h7gPbQbGKdgtWiJewAPLtobrMYzNrLYmMLVAvv7Nn21onyHbeetAkwdJZKkPjePJ4",
  "key11": "VnHK5sXciGmY6L2XXs8TPvRSLsKoGDBqKbrp4BWreeAixAAL1RmDo5WJdT4H8TNTA69YoPHNN3CnUvGaSrmEFab",
  "key12": "5TDaRmqFHM4C6MPB3wF2SPWvfcGRMh1wwF1pj2BaRqqRrNNDH5nEKP9TUnaYoDc5jwfL8VWUHZX82vDWsWHCkbcp",
  "key13": "XgJb9yfb2dHPe1c1Xhjz4PcfavRob89ytCZcL91NXNu2BvXVCMaK9BDZorfgtjfS9YHHbtuAjz2Hwp5Gt7dXJ84",
  "key14": "2Mqrr9AwrrVmfAkrDMWyZABVV8kZqrr1ACPB1g3GpzRWFVss5qAipNLfaX14YDdbcmZQ8HtdRYU6hBDxG5ggRNoX",
  "key15": "xr9MZtns22HdxgoGELTSGkUDpoFYD16ip4dnjKkRRUEm3tSHVDjvWa1rMTLQW6mRV7VhA6VRS7FssxjqruR31J4",
  "key16": "4xifnCHzYrRySK3o8XME38wMecbUSnzpNYuTm8Y6E3aipVy3kxmMgZFhpwiveNfE7K366cXVLkvqZae2aYWpTsns",
  "key17": "3AnUuaBbmNEHQqxP9B2F7BhAdaYc99sezgyYQVAgCNAYNv3YGZ5BHBVYGdBCsfdDcwzrek6dtYe3f7nA3Ak87ftd",
  "key18": "5CiXkutM3biWd8CUDV1zDNnNdWNKWDpZvwqGNjgNGueSnesGGYvfjgGu5uS3sA28aYaqPe897ACugB4V2nzfe6Uc",
  "key19": "2RyK7Bn7daSVyXdwwEgYhGC38QVLzfWhwferhGZjrMQ9wdQny21LMJmWvDAede2Khn3kJi2jbd9wL5VxyQpuTVEY",
  "key20": "2eVPHFnwihsXrGqzDkgUqTL5FGu9sieB3eeakvuCaw5ycwpqXo9JgDAaAdohmvMwNWx3yE6t1gXa8M9XVnYc9AnD",
  "key21": "N24LpFLn87noRd5aeUB1CFZbKrxtvEfZHbShvPfzpoQwczPePkAtFsHzRudZ1pae48AxFDmpSxhumTnUPKTgTGM",
  "key22": "2GuxZQKDFVDWh9gpB8V4SYfAnSHipTKcp5VzUSYfBsjAAcDT9rSvWpG5ZH1b3Epjjhf59SZGHnvoAMhUN4mufiZk",
  "key23": "2sHMHKPPRExBVF4bnAqvZfnZ21udyqBwdhLfiGw3qvKeSSmAvNKVedAqEfD2XPM2kDTuyaVYZRj6B3Ko1qpkFizr",
  "key24": "5WrCJjbwjqSsugF3SA7YhYPjcDZMxDGYDtervfSpuMB875nPrMNrVRBaN68idZm9rdmjrpADpxND5tkRCAdUuiTG",
  "key25": "2aecG4epjLsmuegaFKkoZcMUYvVwDccPsBx5EghqCCjkYDuVtoVP7dUzUTrFtdkLWg2wqtxSndytMnK71yTLBtuv",
  "key26": "2yzJ1W6wsqPov6s76hcXtPnGsLdPZHL7oQJ15QeSnFYQn3bVmQLASDEVaDpacNTFLdiTN1QYiyfzsHjB9fQvbMm",
  "key27": "4o5TsHYhok8CAmzphWze2AmADFoqp9N1hekiZnmm3ysvPpSuSkR8jBkJuYBnxyRZhW5wqpMxnrf2Qvcm47zYdWnh"
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
