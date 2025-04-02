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
    "4TLENXqN9bPL3eCsEyNjb5tu2RGXB6Zy66HY3MpWKdHVAK62sRhb3j1d2z1RmDZ341BFwY8KnenoocpwzzchzC6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PixCpYf1r2ttR7rSELhq3V8VrWtySuJQtRnqSzdxAtvXafmDKS1RTC2FMJbnLhQenUjUFiGVujCWax8rGohxPy7",
  "key1": "2dPnCjPwNumn3zEH14HxMbCzZNUXQiXFdQoEj6YZZkaHhhkp2PP32cYifLvU36qgtJGN1zdsRpAYyb7PzUXGyCvr",
  "key2": "8imqgsvKC5hFBtxjLTRi5YMpciMrNTBUB56ffnVLb97Wmj7WmcteiszDN1DCLd471tfoRVDFyW5RZUakL6J9zxo",
  "key3": "4NVY7KEKwfg9yK2Mrc4o2C4XHRiUmFd9qEPSNp9ZtsrS2CUSHHuQ3uXv9wYG9eSvd2cP1d2vPvBdJvoRjsvcenTL",
  "key4": "2eX2hiwgqX1kFgrB5Lu6kHyuzT8YCFF23TUXha9fhFZHH5CRj2XDiSP2nN2SW1A6krJdKs24SkfrA4iuyyGouKkh",
  "key5": "4a6E7cGxL4kAtR2x2RKFvWwu4cC279Ea7hCV9ThHamAdZCZkfF698dSMEMtxE6N7crpuZnTSXEzLz2Aab1r7Je6M",
  "key6": "4hg4AEpDFf65EPoL57GmSRYqPvDRtbqrPTpoEY1DqbuA5EZewgMhgTYtXQtx98eDY3Yqchy7JwJ63ydzjC4B2kQN",
  "key7": "2Xq6JDzjmYttf4VFRKiybkJTLfpHhTjq9nusw1Jk5R3mGjCwmkipbD2jnWV4BXLJSmBfJShQi63eV6BC9xs1nGNj",
  "key8": "2KiWUDiiqMyXQB9JhNW8dP9AmjKR1mDb9xNWVwMkPzH8aq7tsLZZTbCzUw1KKVjCfkc4s4rBexFWf3EjjgWdWUsJ",
  "key9": "543T2ZLQNH26AHvwPsysaLYC3rW7mR5KQxoaXdmVtwWwQE2qnDAnRoYLHeW5uFCp3zvjkwm3taU8Vk7MoPHV8PXu",
  "key10": "25oohmo8NDcM2pBtRH9ZbRFiPTJty31ycb6JdhoWUJ4kmnnzN68NrmN2kGwRBRPBxGkTieb8fJCpKTNyvB1uGc3K",
  "key11": "3Vzp1khEnRJH7GqWFV1tB4bAnC2WC8LrPmcKp1YbHueqf44Tw6qvwhP8ZBRRKiYERmehTLsjJfvGJD5YrgJJXxXp",
  "key12": "28rvA7Baku55rr7v369qWo7D9iEbcU3KDzdho7dUjcrJJR2r7hQiVM58ikXMbEj6HRkHWCF24A1gjKVYL77QW9x4",
  "key13": "5iyPc4234TbMXpx5h1K9ZpNqNCb6NE397VPmiwTPfrMBUUsY225fTeqhi6fRWRhvMQoEpqzy1AJFfHeBNyEMZ36g",
  "key14": "5HZp6KjsU9DYnP1quK1Jse7rgMm9wkHA6aDUsdGzxFMaDEjqM6VNpjPXkKjAgySicVBPDVKfC859RFAckekf6Be3",
  "key15": "3daGBokPtMdpVHJFGMKHXaddtBvraJqY7FCXJiKVeBYJBTf2jwXtQ3RJoMMXBnPmDLbfEvn4c2Lag7dC9Xx3AK6C",
  "key16": "3aGpRTKBchFBw3K89rLW16eUQQtpXX2Mzj3PvzKGhjRjUrPH43abt4qeGybZcLkzDZk9xit4mHMWpDVucdtV6Fzs",
  "key17": "4eDg5Tpoa8iDKK7QJY1qSZLvecaZHetNA1gNbtEiWoc6vbi86e2d3Q8Ti5jkWKAHVfocNypsM6RwEAYVQkTrT51W",
  "key18": "3qWy2xL1jYwVwv2LtY5pTdrX6QFquaVfkqttpCfCuPY5URUa8vXFd3Nd4pJoLMspVftNbMbEgeSp4ZfibB1tfp5b",
  "key19": "39Ej9qDEcCebJoFM6uyPcPXNpdQBpvQowzqik543MqjyVp2jXnhiq2QXnBwus1BpZ7RrfzdjGeeymAR6CnZ6rZJy",
  "key20": "4rekCaWRXqe44FJEVW1gnGv94jm8g5UjoUQSbKduq4HKcZ4w7ie9yrTmTTBNnYo21hohqXLLub8BWoHvizSmyaVD",
  "key21": "4FPrPKDod7uD98ps9pByro8r84pLWuJvYvny8oDqNXCum67RCmgN2TtGigSGKSV9D7USogm5xLLjtSxkzzZcYdvv",
  "key22": "3CERAuZTj9GQW5PUEjWwihQWc8kZsBDSA1TkswDpQ7WgGLkPDxH4vNZ9PGUeG3xbwebPZt2P1N8c4p5aL26Mc612",
  "key23": "5nfmGePpvoQLkFA9vzog5dErtQAHbTsxsYTvnbyz4zi4r7Poy9nqaw4pzizjbG5pXQY7BSw6vbqjZuncBrFSaydE",
  "key24": "37sCT8kU8g7FrjfeSPoVDXhpeNbeVoKEE3TJX8p4a71cYrLE7xh3i7G3mdusUze4ShbvZXfhBJrH4dLvfzPzYaM1",
  "key25": "4bVaiYpHvMz2CidWJiU4naiVA91ZAuv7mx8hNYbGmJCkP2cnX58cv17b546P5Uay4L72HTcjj9VkZBNxW69xtMLt",
  "key26": "4gNsg1cZgnNMdbBoTutvz3rLQy7y4V5LcpY2cgdaqmNkH5RULun8tjnLTM1oJpvmiQerQV2JKeA5VeA8mPAiQW8K",
  "key27": "3KZ55YRikHSbLzG59RfF4UCMzeK2sWMeibnY3GYM8XY59tdCimcNpuwmc8LkzapjbknyTaHecZzevL8AkFe2cymW",
  "key28": "34KMSRHPBzhhTUgTb8NHrE7zARJtryY36x2emzMNr9juU5a4JtT28jhxG2EWaUG2ZKqN3UbhfWQqSLFad36j4pAQ",
  "key29": "4qt1gBNpD5MDarhrghsVt63o3W3oJgcHejb3JiqW3HreXm2F4sFo2SYLfYQVTnAhayi9c2oU2V32uHENMgd48op4"
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
