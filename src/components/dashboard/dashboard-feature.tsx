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
    "37r63DCPHzhfS5VwnSyT2gxYNAmLqJ9v2kikw4LgQNzBZVSSjuR9omkBrMvCBZCpaHK8y3KGJB3dqHm7oKKV3jpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lm3tutMYtU7znpaetq8tkQ4d2Rh8AcE7Cm52eFsnoxPPmdWiGnwkvx5wm3j5rjbTdxcn9rakX6PDgjKnNemqm7P",
  "key1": "3vC7LuRHj6xCM3kYrHc6hSYkYDVg26WEFQzDkS1HjkVMxLt6DAeGs6L7RxvwgbwsvsJP94xrbZ9qhxgs9BExN8Wc",
  "key2": "4FhfTKbeEVHELtXkspobXXugwVrnYkL1TVRrdc399YNgrDCyJchh7oiKdH6mKEizADnPw7zq7FmcoKNAkkX2jKys",
  "key3": "438nvECYfFQEJoTPHN39Zvuhe8SNyDP58NYwxNgdE9cV1Z8WcDqvwZ9kyDU5Q6rGCiXMGU6uaBSnT4T2DvWncfjA",
  "key4": "2dtoUP1TPy76TDjhoCrkB3QXMk49ap1NTNGy7pahr181SDPeys7cbQBGPGXAfHFW21CqaJEyrZZhru1CpvtzX593",
  "key5": "2AzbPhS6di8DTH5R6ZzWYK7xBqVwrdEPsEwgPDddPL4V69jzGxLpUADvrsYog6T6rpeWDZzG2Xq9dxFDf9TnVWVb",
  "key6": "36aDAwqYygrfrKsyojv66udURk2SdZE3JMbLxUceKSoegtgnduLNeVBXzv2aLo9MHT45LPWv7wicausTNpCZNo6n",
  "key7": "61pr4sCYP8mxG7Mti2o8WjAnyu9P5MykwLVzHimRV94aV5vVMAU298mSnP66pGWNAwxcYVNmKNYGs2CUArhw7hja",
  "key8": "LPTA3cPaM4VxNGRudXhJ54QL9sdh2xG4ydbNx5FChrZYeZrr8BtfLwsHoqP9pd4oZ7Zw8wBMvAMMHTJFd2sVMfX",
  "key9": "4VfxkpijpdfaRVPTKaSmEByYKAdbjQyjA3u5PHHAcBr4V1esVa5uRqdgBNY492viJvjKXxB5XE2cyWYrTn1xDjbg",
  "key10": "2uN3X94aA1Prcqau2GnueWCz3ktq4fHDGVuzZzrcrutQXFbXjtx5z9ZiZH8aq25UJLpgrj8KKo5F3uayWsU49w7i",
  "key11": "3mHEiLCJiWdiz1LCHN8H14TmNXj6HKLmYRUpT4kmruPjFJ73VYGWj5gLkQCSzE3jkscEKLwRokRJvDBiZUPEvLTw",
  "key12": "5xuS7MQfCJYUX4cF6fnVBgX1MHc3CBoW6WR5xTF2tiEzcqSeh1kZZpdeLzrRcFwCdFC1qCuTfrCEEYXdyd1YWxuY",
  "key13": "2UDefpdE7LNkMvNVELh7e7jVkEvxyKKyijAXV2iou7QaJG35LDzmBvfkr4WLUFtvoiSNc6UMoC3WcEZoUwNURk9i",
  "key14": "2Na1crfhk3heyBQxr1Bb6CFKEfzUGZTgMaBZoxnbLdWt1zmGeTdHxZv8AjNvt4i6WsfN84GnQ7ZPYYrtoWEKAKmu",
  "key15": "4TTHY7vSHiJE9ejfDPCFSJiH9xvREAsoLXyojLMn4DUmgkW87TkvGKeZgFm2hJBSnUe9BWH8qNeEuDhih8SR4Uv2",
  "key16": "5pNC6bnmkkf6SLmBw4273ehjUmrsCtovz21x4Xx73usdF2hV4VAs7QkapdwG997aJbwQgrs7YunGgqdJoZfZvGoZ",
  "key17": "22LQwCLQ2Smw8ggfG2L3WMyZdXAjo4dcpsYpRZhirb5dhAFibZJRbAGgv7hGvqTTk4g4ZyYoHZZNdiLDNnRZoUA4",
  "key18": "4tAYbyZoGTNzcHrqmeZfUTWmFKC6BzJj92Lm1NL5ukJcBg56QHxZ7a7siskfswS4U8sJzLnRSdHCwJaJrwQQMQWC",
  "key19": "3kgWBfjzomyoUPjmxnxpg7PzRYgYUsFng9sCsnQ8xFo1wJWkXVRG9qjZ7hRAEsXkFnWFLaRJzyALDwvBjpUTfSgL",
  "key20": "3ivkpirBdFvHc6htsk6Tu5F8chEyHLqiE5T9bU4yTqioqS8sfmWUfU6KPGNpBAbAfYLmTTrCWmQrbNZaqegRVVwx",
  "key21": "2tDyhHN7dZAAVijVPpF1AXzycR1phDyaaLRAX48bUoByTeuw89qo13wvrfedGHqfrKtpyCAkBUz4VcnmR7UA6fEt",
  "key22": "2TUwn1DeQKAQ88tVwPGRQBLVCPv41SRVmqGGsqZHqNVT9yEug1H1uqGCMqnQTKRcpHxNi2qppShA28vVrBWRD7Bz",
  "key23": "ksgbuh1kVAy3QfRMoZ9bvd7xPfu3HdoSwwvbxrASnSLt2WR6CYNLtCYNoUGrEmBkebuRRnKm54H3rVtARR6nNtz",
  "key24": "297FNwSvdu2zmmpArBscqw2HGxFj9erfzjXVEnUbz54GMjduhidBWjNEELzjf7Yso6rYn3rstGeji3wgrZh1mRXi",
  "key25": "59wznKF1CvTXYoZ97D6YXZtz8mp6UqnNaPy11iZMzRhUeCpmUy63m73ee1JvEJRsK7BnrK6v62hTfm9aMn8kQgXQ",
  "key26": "46tLF6RwZT632tiAyn3d8ZBaKzjoGij5Z3mAuXBnrrAtGdeqnMHFWsBdmnCBQ8cD9L9EfeQJGMqPQDAJMemv3K5w"
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
