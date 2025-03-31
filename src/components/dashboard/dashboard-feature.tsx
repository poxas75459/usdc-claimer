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
    "2k52W4Krt2xHt69MTcxA56CmNKF5XN6ssY87gbn1rYeGLM4DB3LM8THpfSabQxBZVWSod7yobAHxHQp9ZsWpkbp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ub36xU5U4JyjGm7yQ8cpxFodzgcgrGGpLbwS5Sq7RvSQP2TUW4n42YbSFKCSdKA53dc86gmYQTBF33zYw7Qia6i",
  "key1": "2536qiM2ebFRaPr1QEon3PFZybU7TcYhApxaiKAv98tDieZG1TzYSCJxWBa1185xwb53umZQHuCVY5qeuFCU9eSr",
  "key2": "3HeY9r4yWnXBNSz4Tri3SGspPUZfT8wNHdcesGL5ADK77SNamRgwCMtC91az1UKv9B3erm52J9S2ADHBnPMbXCqa",
  "key3": "JsHayMRBvmyTrkeE3gSq78PxBBoCfpd1AjWMLytubHLiy1jdcWPUoY9pyD3vYSi9sYWDUiWnwQvM54AmpAKfapi",
  "key4": "43Pm2K9XfTrE4qv9eTvc5C9CDGh9fPVeDhJwwR3iuew3CePnLSBNG7h3SHr4WdqNUZ2gh6BB7SMcTXSkwJicULTs",
  "key5": "8DvTpqsbGUQZSJ6dDiA2KXBKSXgbTx75EqiaLW3hC35hpfdnzj5tpjCEvZhmXSjzSfT3fPQ1FsRY4ydVciUpn2c",
  "key6": "3HBWzUv5DwDZf6Gw6nCmTzpop1rWcohbjkZ9Mu5cPz3MCD7ZjJJVAPPyPozGqixNK2K4fGKs4QCqzrrAHZouepB8",
  "key7": "4ZCjnDtQ2RT58jS8dKYKXsDcGXbjfcgSoe6xqNZ4jWcWUL2uhnT8cLZCHt9LQ8Xch3WLgnnwtaLYDbTLiC5UQ1Jc",
  "key8": "2EWchHMSMFPXhY3WX8m5S2BmbYAQcaHqAeZmuqLnu7ibPRkC5mDvwpdHSF9Wd86qcEX6jFtagrM1xmDhWfpFbgw4",
  "key9": "3VYQHPDtCL6NbXNecDeZNexGjR1tPqy9V6NN8HeeZ2yM4ozaD4kTkPW9K8Lt6ccBAp2hgXxZbR8A3eGyk4iFrqkF",
  "key10": "5hAmd34bepbBk3pAf6z57Vo9SjTzN7PpCPtXHVUHWvjHn8EZRhvMuVBayPD22FzxNXirb8sBkiv5sVEJimxivvem",
  "key11": "2JpvszVj989gu5y6jgtiaMYbSn1egoncaXNt36ajmRnz3GebvRUYKWnGettk3ESTbsHowXYJcWpG3kpwHZNrB5kx",
  "key12": "4kPAbUktMTpGq2waUqbt18d21t5KY4bn1uF6xhZXDWjPTT3hpFgoyXpEofZrpzZDK6PoZHT2R2MMo7Uaci7CqCzc",
  "key13": "4pBDqp9NdJp9xmgr3aidrsgtGnxZ2DBjuVXEJL72wACPcqDCUgzUKN9px5DmhWU8R2qMmRv9uEgQXujrERLxBeKz",
  "key14": "3Uy15j6WuhYWbWKgb8EZwxLrmrnqHjwBy3z8fFJaw4EweJvvcms2LvxNmR2qq5gFe3txxNcQYVkzzw6FNm585Pj5",
  "key15": "5qnZnmGrX4k9vhuKN83yGRhtkQK6YTeUXECVwZgUV4GqhhSyquE7T6cQsVgAX8RJp2aiFmcyPECD68cqtWnGT8rz",
  "key16": "kPQshr82jRPPUfjwnpZdWW1Fe6F3rG9Yeg6fpU6uNRNRc4URFLuBnQLo8MhzEe5rnfKVRPYTujcrcfcA4fhxgtR",
  "key17": "J5VBqdkAZTJS6x7DYAsXV8QYeSFyzge77nhEVSHVc7J9Hgss7m1s4m4u9R4aVpwyFqbQeajc3WHiPvug6uqnyBk",
  "key18": "3adtphukuqJvYSoTtTHWVfyEcj4Q7dcyo1SResnKZJojs1bhfxXPpF4DpTKZzUwzSiNDJGBW5MiPjJt2TQbTAQaL",
  "key19": "2ApYY4h15zbsTjm2JeK5d1BCk9vfLVUGFTj9jFfVquhRMa1933Yw1DPjFkwvd8GrkXPWUSBg3QzRV3NvhvTaSYm3",
  "key20": "9Sixs7ynhQrhoAFJxbwB7Fxsdbdk4Dk5bHu987hPTfMApceYHDetNzirMSbqyFemKdXcYFmDHGTZ5BRkHjP1pEJ",
  "key21": "24aJq1qy7D7X1SDdATeMweS8JnoB8Dz1jVbjVVa2hGaTPaUJ3nqwNgkaSPBkM3feMmVsfPnuuTpnxv4bqo7ajVav",
  "key22": "3rhbtYBndS64U8H4tERtbf8J2xuJEGi5spMXLgn6ML1wP3ucdZgCbnKyLfVYamC9YGMWtXpwBsvoan4t8gnH7jMU",
  "key23": "5xJcy5oozJvETyTpzoQrK1L5yhfy1CL7uJzzuxKqDeZFBVhKvqfjfb9T7zPWfGF6kCmG8fYUSLYUop7fG38Me4SD",
  "key24": "UKqXyBVwNGHtiY7FN5i8TpungKQ8noTXjE4qeTgK8UdBxJnQWkgDLL19kuc5JExesFLA2nUa8PKyMGtkXMij9Cf",
  "key25": "47yK6vW2Fsoss4fH7RpMWPntgSQQEepdrMeCrKoquTWQY2ArQ6qsZSbtVS1RQ8iYFJvpg4rJ4iJ4QRVkRvBiUJSV"
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
