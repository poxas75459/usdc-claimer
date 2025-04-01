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
    "5mgc1jahvoVLXkGfUGJRnkgoHvgUPw7gMeQ1ae66Dk8hz5DkkpsdyJv9pAs6mFKSrVQud2UiVoQmRJnGnQyTTs1g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66c1EQkRQNxm6KRfR9a3gi9ZEKoLhw7P5DNT3u7mLHUs5L6RcDk12SAzFW7vbm1LM82FeBTDh6P1q5sNFEaaAJva",
  "key1": "LSSqSu3hmkCFXrgM1YNvMNbMUzNcBPN3h6KPawfgisvuDiWJtF8fMbZDWKUvm4aoDANH8KDZErP41WfrdwXBb7y",
  "key2": "2c4Hs1XmubdoicYUjzKLgb5HUm8QFGjhLLSHxQb5XWLp8deomuARnHN8nnXnB9MPJ4QW2pi6QvXewkK1DWwNoStM",
  "key3": "53VEXoi8Cx8MH12Q9U4zN34iVz35zMCSjQBzmLkmP8FeT7542XRekxRCnaDf6HgXkhc4Ma5wfKL2d97G3jqmjFz6",
  "key4": "2ABCdZKFoCtr8ERBnt9WosRac7bi6xMoGb7nU5f7dDm1ruvgveQrPRTG1DiExfvtf1YjHwxYJ3kor9HqzfpHWh7j",
  "key5": "3Yb7RXeEwQW1b28Du8ncRAcu478M6fRiygMkJsoTkUS32CbALmMLmvmCykBPZDQXfGdmTjrFyN7xzaBFuYd1Aomk",
  "key6": "5VJKbLHWJ8MfMWVAoW9qxg1bA9mEUQSJW42PRsDiUgNG8fWvuDDN46GsX8bfTLpMDfRXH4PAnifZ6FKCtajCx4ET",
  "key7": "5dYQbiVc29nwdwU6QEBCvEKcYprWKSFe3LuocqZYDe2ExFZS4JnaVfWy1gAVJByoASSyBYbAP8WaoVbtK6RpdeqF",
  "key8": "g6UviQk74jd7r14vWrZD9qF8Ym3VxpiGuj8rjaEewjcMTAmLXPSdJpa2ipRGvJGjvNGrkUwxf9dqpncWHMGCkUF",
  "key9": "3JMp9eFDxHEUK52UhLm91gTJWJqWcw4GpyjidUUVwK3zbFDbLbbVJp4ADHXiFkop74Z5npqLsybRaQ8h59AiNVWh",
  "key10": "2YAFYFjJN7zM8Vnhem9eVGGZP3KWAfMrg3Cn5K6S5bRPJUq8FDntSsB9e4R5FkkgtonfZr4AzvHVWZEwtg5TbBBG",
  "key11": "2vKe5XjXUyV2Bzbf4cNBq8trqTY6xETWgU4MNBHDY8swpQn3HhonKQeNsnmX2TTFhAqNnqndnbdQu8sMJSvEsGer",
  "key12": "5ay4yUZQjLEcA9rRgVPoqLkUftqgUEmJvfrPrqr6a78h8y3ASASQHbqmabTkwuz5CLfWm69P75pLc2K27RQ5xwSi",
  "key13": "66ztfauDWX7iqdidsJ5bcRnkRLiWLk6S83YVUHCNF9gvvzGQD4zzqbA8Sz3T3FqRJnczkDfnyfYqJER5KpbhukQh",
  "key14": "4QCbANC5zvS4zgckwBbSCxpUYdMbjRn7NLM3YUv7STBGBRSG9NmWhCUPcM8pvcLcrYymV2TzttMzh1PjL8ipD32V",
  "key15": "5BnDUw5g32RuQnB7jR7cqbbLJc9wfGyCg69NHGPX1nmuFpqSoWhYxnyNWSSNpXK5gQk88j4kepFF3ipkJsnrpC5i",
  "key16": "34N3TQpTwSuY74meywPFCYLrDhPPqfi8wtioih4P6J7HkairCRSxJvKVLFctKNp7RgtgkScj5vcz6vTWndXafNYh",
  "key17": "5KwEXXNhsi82gYpUzHz9bf9GGFP2PdgWNXFe9BFVzAF8HiRcwKJmjDnszSUGDo7SPDcc3AoncyHdWdDwZXyFqT88",
  "key18": "5iLwLiGH8DargUYXo3dDS7aHRqhCryp7DWCYEDQmxzHD4MC6s1uovRVDJveZtmC4NBQRXBESjCYZEGyXgdpQ8Pjn",
  "key19": "5V21Hu7rQUW7SEY44jnYc6aCGsoTAjkCUjhahBPy6xwGaYB72AtRkFikvPRma2VoRNBSMsekcbo6GQaR29zvnm7F",
  "key20": "44tL6TvMHZNj3QQdq12r6wqvCQ7KL44acDSrpvMPABvEWbip3qdBTJifTSsNPzJ26hmfrBkMn8cDS7csvMTgEe8h",
  "key21": "2Pj32mfxq1SrmUvzRKpthz6z4PGZEvA7EifW6aVwc4Ci3vKr6yynkHHiohfGMorgHaW3CjJZti4GoiABhVvVobZi",
  "key22": "44tYnbt457d7ypdae83fwDCAnxCQtCtT9Bos4s3JQxEbvkdc5n8mWnp6q9Zb7MwazK9viqT6qmM4wsetb8XkXmb4",
  "key23": "31zSu1Fe1goGK7434cteGuKkgQivVKqzckkL9KknZ78zRbjaoUBhcVVZ1KQSg3ZMeV25YPx7iFnrCa4pMYFLHaPk",
  "key24": "468RqDd4HdmwqZUpSPRMxG26x8kXfd86TiYp5ufCUt3A6C6ULcSqWwH5HAFECM8aqoDTsAh83Nfx9zonP1FvbDD4",
  "key25": "yMtmEcvfRfrfQyjdhSmipdMKTFpuZA9ip7NWKtneV9QpuLhSytH4YL8JcesoRVPTMzxUsZM38JetNjgyDTSoJcM",
  "key26": "2WhcCypY46EWtEanEpij9fUZ6zaiTMYhqsomAwA6yK3oufFf1jekyULDHYg1RUdey4wZ8EJoES3bY2JbuN2nJkk5",
  "key27": "3LxriZ9mDBpFDHeC55JmHmvbNTfLd1uV28b5LULMcmrks8xiaMdBWyCUMTvTvHXtfeELMjQdbq3iwMngJRet3qrF",
  "key28": "5xbvXUVyY3MXuFK3qiij95qqsDkrNMoXwJvPNRkAF46hjKtz8hUz2H1vMj5b9GeroHNZTgWcLnUdC91xsTUy1UXQ",
  "key29": "3Tkh97TQpybTEJChHDP8z8AQSm76uKDY4ReGq7ig1vX2qNgyUhtkNTuiGsbH6FHKoCQFGnA8E4W3SDc5JWCVvkfY",
  "key30": "53jiFeCE6Vhejru1YcyqViDBaw6AEpnVu2mobjqSXw21VYK65GSBwn8iWxnDuByDqLRYXrytS3MWtCCBymADPs2u",
  "key31": "5BY7UzB2zb26UYvFyKquQPHaAZ6rjY5msT3scyAkebVztupRQLe6bgGFnC3YBdnx4SoMuPt6nrk2eeWpAnjMvxWq",
  "key32": "4y9KnKYLYB8BieFe2SCUN8hZsNsomnmDfUTJkXEdT5vUrpKihAz2LbM3fqQWAUDrbxvxQiciMn6yvqTNFsjEs4CY"
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
