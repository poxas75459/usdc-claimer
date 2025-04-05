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
    "2AUgMQrPLqCnBhUwp3RuSNgX9T6iPCQ4d1f2Km7JSqBoApsoVbdyAE76EXG3T6JkPmookh93WCQTEJ2gaYJ5Qajr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eeFJz1htzNA7kLxH9Zdrb5pJxbAW1oJ3JzuSCXBZ1CwoT4N6FP4d1Ekjw66BTCsPmu3Av8AKMsxn8L3hkAskwUx",
  "key1": "z9ZwJFm9B3UUcpmCgwN6Wzmho6jbUUQCr9ZMCV7KmZBrK4Px1CVgx4PedjVijebmj6iXQp9CczNcsJKKf8f6aZE",
  "key2": "3kQGRvXzAoRbjwUhHwZujdJ4WqgGRB7KP78W6yHpQkaoJjbBxZjxDx4karVnBRNQmPgkHGNcH62CS5yUVDHZNGj1",
  "key3": "3qBH8mX9H3m98BDZ6yVD6hi648DdXMEXQHjL9Lk8gR7Jim5SFd2NyLErmKvxYxkShs6tNzsKjXs1NRVVESVduL5Z",
  "key4": "5MzAf7UBCR8H3hTtv3WnXQBgrMywutvf7YsfSxhGg9YquhAmbsWjxsjW31eqmzobQdJHE2rN4X936e8JxgTTqh8S",
  "key5": "QBdsPrc1BFML2UhApA4fXSwMfNKTjjJ4mGu2oeswcHMqbKzzmC6VjnhUsRHab3W2ETFMhzj9Qu6GyJofiNp98FN",
  "key6": "4iJyc7fqZzagPJrvC4qKuWaohTsYkYNeorFYmJey6hf5AwD3pAnsAWonZf8d41FGVqZf6VSerDeB7vokKnG1UXRC",
  "key7": "5qiAMjZJdrfU2RsxXMv7jm7PEpHjCQmWbR5euG8JAfkt2v3x1ZXyzU95zD8jY3NNgF5LL8BMnb2aff33T5RvLcVn",
  "key8": "5ZPtn28tiJsryRPA157uaYYt62CreG2Kzf5tXHTxhcEnpvGAStco2nHeNKakFQorYeqJWUJY9BEaMoFpLdn2Lkf2",
  "key9": "5v1mT3i2St9kLVnWp4CL2gF2NRNhq5PHqS9mk6N6SWiQSyXBHUsLJF6DKwUu6A12KcrBPEsJTieuEMXTFk6i9geC",
  "key10": "4gejsUQKehaquYYm3fYucN1FVvNMG5M7bHP9wN6J7y3WjdrVkwADXRDE3SrHWyb3ZSPEoyKWNSvmpgPzwWuP6Qn7",
  "key11": "3rsFN14RGG77bkFNRQKreLAY1wE5Zin3HTj23iKemu7r1KUHorAVp11sFqiqByznqSJsxRCMGK5pXMhGAjVCShCJ",
  "key12": "ccQVL88MxwjckNNYLynpB3dJjSWRMmUcRHGxBHY8GYqERoMVVybKZ4Lh47bXUGeDiDGRTvKwwghVpavBFTA1FqC",
  "key13": "4QcqJDX9Ar5r1NZAgiQyFeaDLw5tQbH8BATXT52uNDFU5KTeJ3bg96rwrJY6exX4hcddX6Uz4kegDkncedZfJLjo",
  "key14": "2iei1CsPSxTZZTCq1boHwsVSM1qa1W3bzH85Vj94xuE49ZK6zhnzfkJTtP4PHoHfGCbv9CJkCQspopTW57sAqUVq",
  "key15": "5cjcmo22BxEQUjnSFPdUE8zztN2xftjriqbDdktAdU4Q3USsRvTFS33LSkUYUip9WUHUGuDfb6F5GszkMPaPVSiZ",
  "key16": "3TTwtutJVC1AYKqP7teRTZd5Ey4FbtzZeK775TovCJVynNL67p43NAk1F47HoXzAv2ruHRBMBQwechuLSSueqosv",
  "key17": "4ZbHDhrdVG3wYhYSN3L9dCxYdVBAnhmaR8wBS2tPVUE4JBmiB1ejrcrTwzxpyNCpgncjMShUQZeTzxwAphNwuxrv",
  "key18": "5CjkP7TCvEGEukSPFonjjE4BLvJGHWQL8pTvTvfSgiPUXnUt2K92XnZHv4kZZ7ZERUDBxrkE3U84vJcdKeJDYn6N",
  "key19": "Hv5zoyjj24gDaiE5hVi9aZHf8rc3vnkVFxh1tmrc96GKh56YPrkDyXhDBUgKERCUHmTnkwKErD3Vfq8tqxgt1Be",
  "key20": "27RGrm5UvNW6iin1nyGaxemtVSnDM9xe3YDnBcrDKpzasG7yCYvRusKvjitFBSfNpaVgyunVZRFnDDJphXgYdwdC",
  "key21": "3U9guR8e2mqxbQddFvT7VzV4oBWtpwZxm5YvLb85Riqot8P2EpN8y1RGfcoMtxMt6MGz15Aqway53YAnToEs2owy",
  "key22": "JWsEDiyHoZ6LNgwUWubiYoyaJrZhRRpzHVBBJ7q18n2ysFZxNfCad6NByyLzS1DXQcuBGFzqmJWBDAvAcL92sX1",
  "key23": "xx1shKM9fzkmjZhHqfxBeDXd4Ea3Z1HjChHmPLVXczVbrW8WoRzSLswYQ98bBtG5auT8thzegcst1xhfraHVWCV",
  "key24": "5HUz6fgDsGU8vyfWgjKYcGLxbwNDz4Y3jqp1uNE8WCcXqFXZ4A9ALKwdoZasiTYgkEDoTCDJEjpfn1MLdB5fkNAV",
  "key25": "5wCFRFdDhN9d6T6azAmyXkKmRYcC9PTbMtTxagLR4tsfgHfhGoi2aYGD53kdHCmSWDB1XobLfv8bJ1oRwKLvsp1E",
  "key26": "3pMhjT86Ne9KxY3arf8UqC9sJ8toFk4j4zxQmFdyp9eJYjGM25M3qVaTwgUdwb1zWaFS9ou5LYT73k88DjZrPsdM",
  "key27": "4FDGQoRqSyW4nuh13WcGBPwaYKevwEpkYMf9RXFadyhZmBWCRrbiUxXfp4Sf8Q1tt4sZ4mE8TRXqDR7jCADJ5k8q",
  "key28": "3KBept2KnsWXK6bX9mjdPeQjYPmkDA5tnFcGgyvt9vzrjYGmBZ7wsb9Q33JBfnqJcKiv7qPLsUHmZhSjAuHtskgY",
  "key29": "zeDDhoZcSBuiqvQyZMqSmusLwujTdNrHzqAUpmRzSu7xUKBxqXSdYvAeYB6eueTE9Ad3mWjxuTHtdc1FbHwz8fb",
  "key30": "daZmUeD5gZzcu1Hm5hEeWUCVzR3ctMTS26QE2nfJWPDyQnvSm9gq1njVGCGkqjyM3me7zNSMyFNPgdUWEGCgyzk"
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
