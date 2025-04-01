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
    "28erZZv51yMmHygMNafNCJwExEvajxN7iswfTSKqASkXJ5ZbRpf8Ut4ZcUo6n3Jq6sNAUHnDQp6QEpXk9UUACuD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ATH6Xqe9Bg5ihuDbcbrCyEUwoHU9yuCsLWFKG6J6P8uib9gtuG5eCTy4sjdaq4j4AwkiCCuWVcBboxXMcVpDVQY",
  "key1": "4HHK2PeKmo14D6wzZWffakoUjJiSKhfXUuCRNoZegfbxE2WYJGrz3YtvrV2tatAS8erg8fdJB5VaM5aHns83qHnZ",
  "key2": "2waVQZekwVLDuGYwn5xZyVS4D9Jhq1JPpAeFYL8PtvfD1hkmF41wSWR3vQz7FJAPmwuFJfpT7L8HHwv5Qi2Rd494",
  "key3": "2nEn2BRnAVrvtwvrW3K44m3P35Fc98dFUhCTypj8uLQcyidjcLBUU7XCiwi4LXpWnRrbKhrpjHaLhtWcByFsieNC",
  "key4": "3gg4LvbDJQySXbqRHvwfsjTEyj9T2KRJiiT5nKQTumtDvM4uckn5N7MpnoH47WXW1o1GnGnN6f23RqB6miyGLxpk",
  "key5": "3f29xmKmVmuTx7p2HdXif6XQ9qfrgjwmxfgtv4gVt3ZYG6yKjGPbWDD8TsAjFKLhkHceqf3uKvBMgQ73srzb9Mgv",
  "key6": "2Xy6yfrj9UvHqeyRqAXdEFZK4ByaFxPkuWEZbe3qTMQyRGmJNtGaWJ6LDm1KtGqXy4enDHGi7HCL2yXY1J6EwpSv",
  "key7": "Wm8yzD9KCuAid8PXDFh2K32KnSqpwPrcgYhW6gYSRDGmd3YQPoeBLDnSZxZGyBpAFhPueTT3KGhqqHu6QfZcDVv",
  "key8": "2ToQjF9URhxionbEQCSShYinMPKCogm68DPnV6bbUdQeCA7qCure2YmDNGxYqRzdumego7hso191U24naSUQn4Pj",
  "key9": "5oyxUwfe7Gx9e2UrTC7rTGoCwEC7AoaKfPoqv8BZCH4wWYwmJg5Rscv589GYzEXeMT1qLh8fADQP2ZTAcZc9wHAf",
  "key10": "2wCjcFe98MnNej8xUwP7YicjUVAaLMdY5Ab9EsbZgnjJd6HQnuRgd6fi1UGa4S1gZEjK9BEVFiKSicShmmLYvnoz",
  "key11": "i1WLep9Mh7Wnkm3jBL1TVTDUrmnfz11GuQQrjsnFMh74We7C5nV8ZHMqPkGNHFZhXHLV1SxdjFqp3vZoEroKByp",
  "key12": "23DoZDngDZibT3EACkRYfggyt3yucSHnCEB8Mbd28hHmLDtSdEJsM1b7PwoxSUdv8Utcdxm4G9AMQgc4ERyF8meR",
  "key13": "5p84gqtmL5YzdAE4dcForQ229iMagvoYLp9vprKQ33VFNhqxyT2iBEqoMYQxZsA7gGQZvsjjj3r6t6KPkZ5TVkre",
  "key14": "5ZdReZxjwxvr5HA2G3wDuhkceTtBSTVD4e5WoUqa2FuPxo8pEABRsntydukK5FHy4WmevbWXqL6ztuwNVs8L1Nx4",
  "key15": "45DhnkDj3VrN3FPxqvQ9DVnCBSX3vywYRCvcUfuWa1Ez24mUnHUJxNL53c7SSjfqzy4Dd5bvSx8ct5wtFuiY1u8r",
  "key16": "4JyGi6jyZLAGX4YXb2evHMYpYqJKD5qc58BpaF1jmNq6shTz8rRFM79MM9HFKPWBfxKHQu7N9xg8viGMWiLBPFnT",
  "key17": "3k8ZzGCWgigvJQurKKXTwob7x8kTEN6HiAVuYzjjYRk7qMbN1N3KBYUtarJHKMGoHUZAnCoTcv718hzm2rfEs6YR",
  "key18": "LsdXxsq3gpgZv179nCYgV8jB9jJBSa8rdhu58EXzsJ9yfscmedwD9BRUVqx2y9TvFtdkf8cMqnyXKWPE3Wusaze",
  "key19": "3U2VdEPAxfJZMg5rsLKw6nr2eNwyQix8jQfuPV1ceZ38Q7DZhQ524nbyMD5U42JXsAiSwN3qh4FEWJp6YE6XvfnT",
  "key20": "GjS5W2e8eaur2cGwNoj1uK9hjMk6joCZC9hbXZRaFU6MiExxiTeJaFeTkodhU9VzHj4KxSwPqQh1hLdCPJ1c67K",
  "key21": "14XH3UjscMqc23A5YoTJfynr7M8euNtrdMZJEBRGF2UAZLtezrCRe1TpXuhYqv2L5nX6ekXcyYghWDe6oZ1Vv9X",
  "key22": "5JwqhHoCUX8nz4iU9BRcpsUxEiRNg3DuMiMUBiPx2YHhLz7gtKMhTig7qHmpjt2YSiy9bvSViyFvJVAn1yJvr8SE",
  "key23": "53TxxsjSjB8U3YicpxpWVJRSNAk7qqzLJEyymk2it8jx9LvkYDiE2yrHCJMej4U9P8AQTQ2uCEAso22iFbzkV6fp",
  "key24": "52Eo4ZTkKaz6PpLZQ1kBsosCPoe52AWFTNeFnuHAc25hSZVm5ydmHtnMGYky1TYoyRMpJWpt6tSCQd9YccL9fRxt",
  "key25": "5FJx3QBe7HBwBwVnWTAmZpwr3NSrSCMQFqjcL9JEyKsheHo3CUM6WiRkXhtafwabWhEjCYraxWcuoSYUU6bf4nSS",
  "key26": "2ZUVj6fgSAFNfUfb23mQT4DZURJ1N6x7kWpvhSfCMGjhD8XFKMDDyqRWH8dD71bL47mjbGdad7kXZeUSBryPEyXg"
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
