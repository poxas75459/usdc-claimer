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
    "3Z2AZ7FARgMz44JwC1mciSXxcc5VgjcRv5WG2Mp1pZruySRroH9DU2X7B5cfH7PwkambjecY6YJfinoi8ZMEBKMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23aUTfDREBTSzoKbFaFSPXqq4ewz99AGvBumaVTwZGii4eZ4hMQHhELvCHjdekRepqJT6QUA9skPrrSEjgKNhcJr",
  "key1": "4afYiCXjaPhHqcfCGHY9xXyuwXj5vYX1cw5EzHWrDgfrs6wRs6dCnGaBM1FZvGAbxafXVGyhUtje3gWcm8JDeptn",
  "key2": "2Ym5c9sA6jctPYfwZAoLmTkW9vDUAeSH9KU333EPNxq21Q2ZRPgxBVDuykXkb5CvFSEMvjyJYjEbkAVYggPDUvrv",
  "key3": "2ZzjcSAZ3edFKDVMRHKH8SUizHQshisx1gfMWB9N6Rc5zJW7N1H5XgyAUVoviTg5P4Myo4XJ8PXkS8F5jBe5rEQx",
  "key4": "8Gk9huq5TuTsZmXGDf9uqqGvPXGMfCZV4n3oaEBmD6XsnVStYwMUSeruFgvEUwS9NyYRKw5gXTBfkzartT3FbgU",
  "key5": "4s2W7y3KPUQXMuQFzo9Y6X5oxUnBKmKFxATwyzHk4U9wdgEfWzUypFeuDTwfzF6mWsihuGj4foYsXDPPudhomvEv",
  "key6": "3yGx77FyyxQj9gRFSvJTTGkJyYg2ZViuEftk2zyhhZkSq3qhgq78mBdAgaRdoQjth61SDKLBN6NXAHgnWx9giake",
  "key7": "58agddHgXHtRV65JfbvUdnQ4BotoB4D6JXqmcGiTfiYGMPRpYZDZgZmKbdfVY3FZJW4AUebfwkr5kpJCrg7gszqF",
  "key8": "uy3cSPhYCpR1st5ATjs9Nt2AffY37U2cC1UhFR1XyLz8SL2SyvNn6TeDFXxTs9pbeqLSKaQkXPRLHfaHrkxjuFS",
  "key9": "4XcwnK7hQDDtySD6R8PW4M2iYWhuuN77FbuZjoRNZQizWCyf8g3Ng8ZphcXphn3W6jVFqT2DHvUicimeUbJov4Sx",
  "key10": "3JQMhS8j8j9szNX5sPYM9h3GJRZhhBMNLMZqKnQos5Cv3LQquhb47f1yCbuwpBeEF6FeXLZhmigGhC9Kwc1pspbL",
  "key11": "PcNRWyMPK6z7znqN1HBewjkXsT6qwhoZ91Qv8Du4T8TyqxDwJ151iJ1Di5C1ocWUgBVjEtDd6fjXHr5phDjcKMC",
  "key12": "2ZRUbUQL2y9c5WcMP6Tq6aerZa4atkZCZ3ciLw9ay3ScjErgPxk1oT622MLvod1pARbcq3tdySCpN58GmU3v8P4Q",
  "key13": "29gaMBGCYDn67aLgweU4jBqZ4qEKtRXQWWvfJEtYwXmPTbzHeoyvHjKrGUWaitbUSLe9KtiYQtty5FWdbVsYNcr6",
  "key14": "4rfizSWx1NPCsmp7MSzXdovZLWdMxjMFx9ZGqPxxvVzbaqmMpBcbgQUyjfUYpEDFyiBKp3QKac2hZR6ncHP3a4QV",
  "key15": "3gJNubSb9Ha4gVwKZ7jKpmzhTN3FibKMmSqf3VguH6g3eJJnjA4i6vAugEUMoinnNKYKfQJfSD61owNfCxCUbxhm",
  "key16": "46Uc7m6N53VaZUmaqisLxfe6BqCVcTziaZjnUAafGmaZQSoa2aHVKtfgLPWSPZfzJzr8z2nwJXgHXChw9QAsy3wb",
  "key17": "34ftzxXYvRmba5qATBvBapFbb6gqF92iDeXYhjjQohcz2ghdgnZQApGF7TEoym2QuKwbCRPVeMjsRRPFrLDpa8DW",
  "key18": "3rqTvmwrujtb4yXWJou3bHC331Dfc4V8Zvg7DdTW4Fxtd2eZR72mUqRsB934ToYxivJYa2csxwMYkhoKcb73qc59",
  "key19": "qp6xWZMCnECMZMUz3jzfg6Zru5Y1qVLZdcXBiJNMtdAXppueN8R54hcJQnySn1yg11MHc5ZZcs5RKRubSREZ67R",
  "key20": "4io6r7WUaYaEpYxVKap2dhDkoXks2a821VYXhBqtF84nhUiHQ5TdFg9NZXkreX8413XJqbNFjJWUanLYhRt4djub",
  "key21": "3Rc9GVMPqu6AiRtDTigjgFycH6am7PnaAt6n26snL6YjQKtLTpJBaK3Cx9LkssoHU7vjpDjwBV4Qz8QHJJmjqDwv",
  "key22": "3S9J9pFMKT7xigGxx4dnyFqwd64gEHmYicYd17jY1xXcdRV3ToJLa6gZk9tAFaMXsWrHy7GZJEKFg3WFL5QJvD95",
  "key23": "5qD7RZb1pgZDAcgttPEJkqGmSpk46EoM16VbefF6KyKnZk1Jc9yyCcgMpHs2Z8pREYAv5C54svprKyYYm1Eaacnt",
  "key24": "WxFDU34zURSphV6Enz9dQ1w3ZvZm9u64WKJoMcNQpk9VQmrPUVXcUhMZ3UJTbpAVpmc4NZSF6MreHK6oYd6vvJf",
  "key25": "4WrLmt9MhWUrCmk5H84tY1gQuoSuWRt3ct1JNCaRBG8jSkCLc94CHnTaGGof4NYParhDD3z5zDCD6yWHfMUabxNB",
  "key26": "5f6yRi133uQugWFPnTXxKk9iWG82AyF4RqfCYrEtNtqTn1sX3dbQeVFyRaEDjB6KTfX2UesKvLuqoXfJMwaKwbUb"
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
