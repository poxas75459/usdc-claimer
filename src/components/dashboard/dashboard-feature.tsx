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
    "4RR3Z1VWf57QWaiJcHVY8HJnb8eWskxi5LaTtNtJX8iZU1Wyjg3nzgNPLXd5PetQKGnYh1MDGWQg7NLuUpqWCXYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kiNdfZuMDhbzTZ4ZFoQfPg4hTi1WABZCzQUucMiPzUCfcMhG6hiJ1BzyJ8zJ2CZokmsBV57Xfvb9x2yqEYNjx4a",
  "key1": "62B1ABxxv2n9yYSWvCcndnecnjdkL2N8rtwCdkhG9fn6qtEvP4mHRj74ANzdiYhur3aoAHqarokUUtkzKkbY1afJ",
  "key2": "65wjAVRUoxaMTgKEHL5oZyayDdC9R66NEi5cCMZ93t1o1JrLGpvQKC73yrshBZzJEQDhBLmuCdhwYTsXfiwMv2Mv",
  "key3": "2YaZQZGN2LcWUVZ17gBpPbQdTmNLKhv8xDfrhzmyKw1zATKhtRbTY7FXmfFifix2sWU2nLt88apDN1LRUwX4o5hY",
  "key4": "4icgDYFP3RLGvChvGLdHZmMhnDGoYwpR7yLmDZc8ncsd7wK5KRvLjK9N5biEna2XGzdXs3L7gVc4j3rbZmPZDGTL",
  "key5": "3o7rqhnyS6hobm61FemjXYuj4U5FVFj6zPwdfywXxjRgAAPgcPL4r7ms5St4uqXrQuKdEwBJ5KY89U2ixoZoAaUL",
  "key6": "Xk8tW39iqQHvNYu46osdPmFBdHqvrAXJ8VVCubZJECUueKQCurU5Foujq6iiGYa4abPymSHvPooR4pv6jzsFiv7",
  "key7": "4ZB8S1zgSkRhQ1UYDX5jYPRjFAryJdZAxLrSXjn8DL3w5NcbtPDLkbzHG89tyuSkcu9cGsEDoCUdbKkNBSUizzDV",
  "key8": "7V1i2T9nNQ3H9wCRUuyNSTc6gbBVZkRLaZcm3PBczskoyMhmUZ24Rh4qyiHcLq25j8eCMGjPT3PcpzmoJpgM2w8",
  "key9": "56xUnz3npBCEh3Nf9dyGbanA5oS4PT2UEQo3XwBBQJkCDNDgbDHLz73AXBGLY78oXkLAhCjexj7NTsH1qcCHrTx1",
  "key10": "2VKxg5G9aKVEKCpKzCNkxDunPgxUJiK7HG2u6CGRkKDFbmFwcFUyGGNKCfniMn4mcoVtB8ojqLwpJUR6VdFFBQMS",
  "key11": "5rB5mVBZFKjFVo7fbT271MdjThRwv6az29UiB1UrVgis5NBJEYJxqaTAzaodZE6ZA3ZxiGTVHjZqHFQdQ6PiQFq2",
  "key12": "4Ex1V99fam1YbxJpDQ85t8A3Jeuud2JNoF2sNDvUskWJv7sQmF9LJVDBGemznfBrBhPoVY2in7dqMxicZ95AE6oX",
  "key13": "4A4nzDsAGEPQxKwAakKn5fQwCjyVuPBoRPnjWDXAb3nP7m6zahxBgXNBLYP778Y7Ty9qJESjMeXfqmLvU2RdQQi9",
  "key14": "5F4VPTa6ULf9LSFiJYbGCfP2cuzgpyKpz8zSDipYMwD7nx4pSaGKCqFBuRKYvdtJKfzNRJLyrWBffrE2QdesUV6P",
  "key15": "26zNsYTo7gm77CUbAf7Jj7GaZnsA3SSyP1rgiEjerTmzQQSU7QnmmetRnNmVUVJgfUHYHk4EGpXQEe1h9b3HGZR4",
  "key16": "4bPM2kH9XieiHGCZsGzHM9AMYK1oqfdrn1V2rtaZCmGf3tBVJd2NfjPnCnP6VU6v7i98dfD7WHGnfhdQfB6bNrXr",
  "key17": "3vdAbvHvtZpPPHLAqgkH39JFvyB4Tg3FYjfKkX2ZPgx1rQDN3EW8aDg5mCeEngMs8QwvXkXWiBT3evtt3eqM1kaM",
  "key18": "3vhdvVzE3Uop7LszkxgwjJFmsqqprGhrwTbQqUX92JnQHsV2Txm2NyhTnwTPnLxQGVz3zz4MjX8TX5HAJWNzgqAC",
  "key19": "4HA7c2118Dg5NaKoJ5FRPdhbCicrd5YccWK7mAzXPruR1i31VQYaVbEWrCdmvfBk1UVerWGH8Vyt3K7anoURdWRD",
  "key20": "2TgQd479jVq4JY6jQrqh1axuaZav85ERqrmjmXXAJPpxnTmz7JHyKyPRLx3MTC7fT9W5x58Diwpko3GRibZBrv8V",
  "key21": "63eAJpz4GXbjZ4sZ1bFfCc9N85ExNmu6qonkatuthMhFASLMrepcriyPJyafQRkfc7hMpH5LcZ25bUGeZHeZjW69",
  "key22": "4kYQnMP7bMiFbtbq5rS5A7YW858G3yyAsymJoEHmmufgPKZa8qTLKuKk5ot75JKX28LZyj3UFAVQzxvqDbMaVfCh",
  "key23": "LTajg5K3h9Ex9GodfAVA1TzTJYhSiMJcYnGkbYLGCMApVYW9kdUMgmXNk4WvbCprJ6JPwXVYknMRGMPQcaVkRHp",
  "key24": "5YP5M7uZjfMsYfSeE7dV11FxSs9jitiGigGnCC9d8rTYMDdviZBvDLpW2U22SEYrxvxJF2chUSdCLWALufQx8DzP",
  "key25": "2Dgs5fzFzbyhUGzJX5C6QLPVBhiK3nkvBW75NV96X9mm6cFTVgyqvPK8JaEF6fxjkZrmnmSxeM5USnGEr1vPVjCr",
  "key26": "jiXcVzVvfTDWuwTNFh28kqSTtast6gKdppqzmS9shxP6VipkNf57tX2CQker3hAn4NvuSofDhEVPrCLdiB7jNXs",
  "key27": "3LAkMsisiaRLJ7jsWoJ4wtmRGt4ifmvxET8LQT9XGtG8fb6K7fALvFRowd8PYgVkxrxrZDuADKtdPb4y1wLqhTpC",
  "key28": "5pkfrxKfCuXC3LfGTCDjidpxX4pgHyRsJ7bR9mceuLctmFDgJyVqg2kdMURLJSGVZnBJ52UkumvnGxZWBRHxaY9d",
  "key29": "5uvUmE1Um6ebqTwaGRZ93Zv7J5peb18JVyxZQgcAzrcW66HB4KRqt5bUz8qFW33RbCVcpbyoJbAbLws3omiZVdna",
  "key30": "5ecwT2RQGifYLdB2RTE61muGJmRCQ4yL96iXffg4vzkNXE1feVhHbK8wJEZqpgQttRg52SHVZzxGzQ2DExMqccfn",
  "key31": "2yRLuR5nmJJVzQgPL4iDmfSqETFgdnzPZQmbKqo95s1Qy9etYaTzZFxthKHwFoFbvzS6fxHTSKAtHG2FxhBTywsc",
  "key32": "5Ah1UnDxXjCsLVDaK2q4y8fxB3yJtFAtbqRJxZ2HzjhhjCmVUvLkp3BUP2y4YXdnUPwfqYnHVBMVNGgGJzMPqorh"
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
