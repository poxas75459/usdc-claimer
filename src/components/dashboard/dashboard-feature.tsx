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
    "5qbBzdFSKVBS29nMQpVHLDRPEmjxCMWBudPVruPrsjtr1HrZS3TxLSbeLWwsjLQoLrr8n5tj5aeHAWxMFNpBesrd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zijD7NakwXJkxjxEBUjV82Xmo8Bmy1Z3NNPKGNcgXBBS3H9ZX82Q1AP6LutzZZMGmsMct4bEaaBdN5N9Kz3RXfU",
  "key1": "2ooRt72gJ82vdFUBJEpHL91GebL613LNDEth8YbKf7UWahHdF9KZjfJju5SK9dLDJaAMnoBTDbCgetizqfTfs2ku",
  "key2": "3bYe52wDckHdhdApYQL8Rqp7jmGBJLWKhMjQZpcPZ7BCYAPkv4riDtE5dRvZTWoVxDGVpQgUAP7QVcooUkWjAnBf",
  "key3": "4pL5uqsz7ViAbXV4STX5qJCPdARW6swhWQ5vZGT33UTifGVGXizEXQxsAkX6o5vQn2uW9iwxh7u58KWMRvYfV1oA",
  "key4": "Unq2Rt8vBR5pao4q8yt7qo8rckXa6WMpy7UHC9tifJcoDHcMxVFwdzEkVYEFeC74CC5LQA9xKrVJLreNt5Aczz2",
  "key5": "2vMiigm5prB9CHD1pwmTa6cu1FR3XC2Nr52Wa7ERYdJ8WdtPebae4zdqeDZkreJVw8hMAkTbdQQdwJD4df3A8gex",
  "key6": "4UzFSGt81S4rAPdzYYA2YWjZg6n8ToQeJdZf1v8oGQMd4NLBHzKaDWFCPEEKYdK38zsWumbmqYu1HcnqSbeggGrK",
  "key7": "2RN5BurFK38sMc8Rk87sFkf8Xh5JVStEbHs1LuC6je2t8FReQm4NwDmVoEMGX45NseC6zq7Niy4keQQVWE73wKXZ",
  "key8": "64GoqDj7VxZ3vmXKbvACiVyDe2RXT6wj7GX3b11VXJDLrmqu4dhCFfsD8DX28UhY5ee3FmdicNoggGivMKfEoAMH",
  "key9": "8dqsRW71zLEeRniMEg1KaqGiZ9cSFyTDs1jpL3jnpbe8716Z7F26nN8kfcg93CXwcvrVKp26ubE9r6xgpyQggpS",
  "key10": "3K9Q6NyoCxuyp8vHH2qoJPWF4CGYC4uwps7JKiQTdhvCFy2L2AyW8r1vozjUDooeAHcYnCqfnSNPQS5Cg64uKpeA",
  "key11": "9o3mWkq16f7TN5DvzzWqX6gojegRzwab4Z1w7ybm1VGBeQAmPpavLnR83vvwoQoAvXD5fAcmjR2hkGrtK9BVSdc",
  "key12": "3dwoRA8X3zYjZcLeUajnSMCTo8v1oZuF8i3nqcnKYGRq6J9twMQhS4iVYo3ARPPAa8RYinijvc85TeeEfx5BKG9k",
  "key13": "2Nu7HBd2aNV2YHtJQgqEL5j92ocJZdhe41crWqCaiBdNV4PQNXxZ6HoKWfNePzFUofsLsxTXP5G2RHT3Cr4Vzr3r",
  "key14": "ekFaDrLbLv8oib6xp9Fxj6KLmsXFN1cRVVNrBA7WUx6N8neRVq3KgB552c1Vk2hFstS1HimdMt9FXRnonEHvD2B",
  "key15": "2APy6J5anwkTKx1qHX5Yu3TZ1gseJqg2JsMcZwQvjVhmZZAkrn8JxUQGuM7No8xDeY5ANtV2fzjBB6sJ9fr689yS",
  "key16": "CCZM8efQz8px4hEEQbrbGqa85uPrqXPhLhFzJxrVtWpMjLetsDzE72DWBtxAp9uDdD26qKjhZM4jSSK5bfY2fFn",
  "key17": "5JgHgAF28ZufaP9E972w7boBVmhCcozXmbwXzvF3wMphiaoYZLwkAY8zuivSNBcpqmoif7x1FenUhwVKbiQV3rhE",
  "key18": "tpREMc9TxSFE8FLkaTegCj6tFLwLbLUr7BMobd7EkpBVnz2cMFExzVWbGmY8sd5BEMKeDGm76ZFW3NKYvyKgaBH",
  "key19": "5DWfJaxFQz1uoVpppFw3uzKL1di4dGHnWr3HrguVS2Wt3WxX67Ym7wCcVHgB2Hq2dzJ9BLRfwUjhjibAN8orR1jS",
  "key20": "5sto2nmYfBsKeJUDsGobtpYVrb3vUXTsTeDUF1cT41rNX1WAwqTTQ1hDNGhgpT5z2kCBjNryZYdMQS1UkMxKwB9W",
  "key21": "2fXepZtiRJxvhzmbGsr6Ecd9LuhrsvkLeL9Hp12aFrzHC5YmdQk62DdTPMy5kpyuiZ5mWBRSMzVjw6y6fS1i8wHj",
  "key22": "5QPr69bhcscvpPrTA3oMvMw1fxEGdwAFabDEvqmdtWYhNyPPMcCh89DK3FbS8swfcgkJmbgi7T1Rod9UsFNUpd8x",
  "key23": "31DKQES3TgTqbPWeGb1QkyGikDWp12tBUJupvExJSKAXeK19gtDnijwV5vXQhuPxM63Qurx1z5BwksPi6MdFQRZN",
  "key24": "2p8WyrRaxpZ4i7kdGhNkFWEEdHiaHzf4BfWxdo9qQMSj93dmZuKZaZ3WU6Uvc38FXttvtiWh92JpqPgZ9DUYchD4",
  "key25": "56KLLwiC2dNqkj4jPuJzn3MTcixBj3szXufHmv8KrMH5Md9vTcJAmXrZMXCJqeL3TrUxpGRriJrU5RXXJCoqg4Sh",
  "key26": "3eytNMkNyT1WjnsNmSCCd1poMSe8rKTJUMXLXbF4k7eWfBbFtc9rtpiT5dT7jESpLTQZRHrMJzgb492akqYZyfs2",
  "key27": "3oQi3HtdVSSfEP3qsLSbxbnVy749aFK9r4b16vv2QsdQfRdsdBbDMNS6pitfULMcdx3kJ32TAW2LqEvC2pARLXoj",
  "key28": "58oUnigAwNNf4VVH99zDZiTHXVK6DtvH3NFerQhZQgPNGW6hAxJJuj7ah8hUCbCfp1DN2HqZ4qMoFup5kTjQy4te",
  "key29": "3hLgHcrPsjyGu1GnxbwyYwckVqijpYUDpfJdn2cgYHUe8vN1KwzGbLZALRMCBJiKH7RuisMVFYhNaPZpMAkWjmtR",
  "key30": "2Bwz7BQm3xJLZd367wHpmLM536NxrqCpt2iHcJpaFRxhEnrjpMEq6picxuA9eNKM2BxwSz6kh7ZsuL9rXm915HYw"
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
