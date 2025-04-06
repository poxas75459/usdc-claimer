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
    "5eh9SeSVvLRpPsB6s3yuLp7B9mVaYp17iGvEfaDkuKCRhDrVxbzuoY4cfLLThQXHeZVPxtYANGAuaY5taL1qayJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BQJvspJdpAtcmewXft9xyDkC8jg7bPkqeKkgTMZAyYxKCZxLFmhmm8scsRYkq5KLZTN72jHtNjtehdvhSyV6WnW",
  "key1": "4Nn1igx8dexnbXcG6QasbUoDj8M6cCKRtYkA3iyC3iHo9d33n1S6xzbWArGQxCQ4hNhPtxNqZ3YfDJjw3s35sY9A",
  "key2": "5jJ5z7dRX28eDhZtrEK8inexqQJgikw994uUzrcLnkUHkbCo1noG7tXw8TH8vg65brVZskqPqtjpK51zndH3PziZ",
  "key3": "2ESretkJ2Zupg5DHLVThnrFpWFr1rwn1a81KeKeSvkV37RKmd3tzhEAajvuckmj95fFT7EN9pwX2nJdfP5E8B2f3",
  "key4": "3fBYkoR6RZPPghbn7ZhbaVq8TKuaZd4pb425GzVz5xcQLoSxpGfaLKj8TFwmTaZjqK9mvMJHFi6Gkamwie2MySu7",
  "key5": "4DxCsoyh9cT94PbAUngcHat5iUeQ4xRPYAAzF6G1Ng23ZH75nFxyKzWpzFEvfvVbDraj6manPhdnWBdyDnfs42WK",
  "key6": "5aYL7Sug1rrkaQhAVHCAakX28E7TxgHhwmR3bpzXNS3iZG6gPVfycroQvf4ySGJCKDtDA2bk1ZpLXhGnV2BjNQoi",
  "key7": "2QREL3NizSATTfEJHGQHEETFKzJMdMcC5sAyQDmPfcWE4VNijhdD7Y9RVPQEBp9knFY36bWEC1j7ETiD81KxDmt1",
  "key8": "4CtExx2sFERshTTLfLYbx7KbUb5m7zKcXzg34GNmGmXTpPVPmx87Qwxt2GZhxiJS9ULhuM48eXsi8bBUhsDyTLW7",
  "key9": "4Tco9tr12d7xkt6EUGEzUt8X6FgCVvXYXYSGAXp7RFWjCiT5F94GhPVV6KaRn2bnYnqDmBY5E5tZQU2ugQFjawRw",
  "key10": "2hw85S2Znc84zgevPTsb1v8FQPgaAxV3EDeRT9dfdPU5cQUTLz3jjAqCDvM9khhB6t1X6BV8h6Jj4SqZHZnZUTnw",
  "key11": "4K2btZTkhJiv6zr6g8NcYzRwiJWi52XqKysiZuKcMioLmfhgyLFNL7PBnPimcdVWT5fw3kxszp2Bu5BrVuDFcxbJ",
  "key12": "3YBznq98AtFHMYtJfEudXN4agjUzExG8qz6RC5vLU71DjEWRSwSLEMLXQ1gk1hqyeo4b7xBQuasZkWW4qPefhL45",
  "key13": "5ysFpETRm66WhgatgFJPwN1qZsTsD4uGESaDnBCvqCWRyf3WQbgiS3dSYbCQ3C48sbJrFXGnESP8cXoq5eMNC6GY",
  "key14": "3m4mw5RT433UnskAQW3w1K4m3Vk7GYrJ1UDudKeuv2TW7uWHWFDNr3pqVG4UFdym1WbVXsyxcdFdiizK3VWJkTVm",
  "key15": "61Uj25Refk1rSna8HqgkuAzsKMW7Q4Myt8BWyURjFQoqtpynt3bspijKVrRPXD3h3WUU3daLikdfZicxXtRYbtFL",
  "key16": "4F1xLWv6LgyukkUPhfS9hmUPGCQv11Kcki3VkV4xSLUSdf2A9VMom2zBU545UFzf7hCYG2Dp2SxfFYzZJeiVnFFt",
  "key17": "3roCtAhj7uKybem95AaUkNULqHUzeUJEjdi75fXphyTSfngcAofZ3mjgBwYr677ptf71HK8GMtVJpGzaBjM68omB",
  "key18": "396CZhckah7KPYXKr26L7L8W47HjQtGucR7pWsfVi11QMKaNierk5CKbRR3fPRfzQMvBhmSbk1P9pEcUViHi8pL5",
  "key19": "afJAAMXSoRmzMZM2cSe49ePZrETJFNDvvHTHrMBqi8XT6p1R33PjdVqeBegPymVvqKFXeEYBEWFkFceskwrJ2Bo",
  "key20": "2NtFysfnip8GjTL9d1gUW2MS1xm2wEPsA9fL7WANZM6UGFmd3sW5LUWC9CGhGQMEeakGCC2g5jMP2RX9HsvkoVwt",
  "key21": "3n1x6RQ4zuHsGTFfsjiwsfL5VbmtGXFt4gVi9aHMCJGXLasNSRHWwcQbD8d8kkXh4N9o45RvhPPD3PG5iWFb2nYd",
  "key22": "47NhqWj13an1u5ngNXxu1hsdK8TYPzsfChwPkLWbbKPB7gMGFT7QrX94JPSGVb3eVz7cuRmvpW8tk1PUaYnBAnrM",
  "key23": "3rWtWbQ1vK6fzMhXSs11ZMSjMbmxvcXhx9EqZG1r9CLSEZ136dmAaR9vdUKLqj7WbWAbmhog3T7Mr538265eT9he",
  "key24": "38h7wJTpgDFsL71X3WXtCtqsqeE5kTrcUkkZQeqea5jMv88ZdX76W1m1TR2o4KDisLwR1sa3e2P4U4DCEyrdqdYJ"
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
