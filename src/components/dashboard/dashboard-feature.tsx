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
    "5t3jgHigut714sWbK7KRV1cKox1ZsvUjMkUCL2ynCrVc6dT1XYyU4UC9Wyu7nBagTsgXypKuwDiaWP6H2wJz1Wkm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s8BGEzWiEz9zMHQjBMXdwAG516bLEX4nCMsKRxy6E5hTmX4f1qQ1YroCAUTotgrD5oE25EBgfw7cycNggt9sLrv",
  "key1": "5qAB48qKyPvqfiMo3ccdiSro1qgpUpwcteikUt88zVVN4X6yfaRtvviLj5f61TxHSgFYBte4JodYJ8uZsALfNYdR",
  "key2": "6vZf5HUkCiWhWgBZ6YcfrUK7GkmJXSyBWufnWuY4RpQZfN5asg4iMTVN3WBKTnjkq9rFBZHeptjg8uCe6qgVJRG",
  "key3": "kMqZM1KJiSBBLptTbYLQJ2bEp1maGD39xpuZ2proD6KMpLZFTznsL6tw5fKyya9UkF8VVKzoRpPXfafnHYxUxzG",
  "key4": "5noPw2ofXmaj3jQZ236UhEJGv6AM28vVzQGbLgJw9d3eq8odwXiDSSvwtUzaDekYAq7QaREUUb1WdrdHhkMiamok",
  "key5": "5zumSrunnR3gWvuaCV9iDYou6mqkDjZbdoBe1Fp9S4S2kQm4mZKYwo72gXGgPJoTmkKd3Hx3LNio13oQnkRkELwq",
  "key6": "f4xpKHQ1DaKWp2DwGfPXdNUTE6J27pAQYYdtECiQKAeRY7fzjwz8qmUAP9NQuyVd3EA1s9Cco1MmpJqNnG1Kf7G",
  "key7": "2MLYUcY92vUz7Avznd2RbFZ7j9cRwRNa7rU2ZAGJknxaaSZsAPyYSQ85PGrxLEbERTHbp4HjiPi7hADcDBP8b4gP",
  "key8": "539goQsxtAMwudiggyTxCKLpcdD2FxfHS8do3P9AqoLQgaKAy2N7BnP3qs8dc139LyiXiNnL54g4HWS6zu3bErqZ",
  "key9": "53tr73ZHNzNcYrhSWicto6XCcijaj3jhtp8oAhxDio96Mkz1zcWdZARQpuCYMtSED5z2BMPwdsda7aWgeJ5JJj3r",
  "key10": "gGR6HxGkNjdhXE5dreu9XqWuNk1jquESHKyTREhqC482wHGYyV8kPZU7j3z3UJ3KTejVUREH33ERbhC1dxZYobA",
  "key11": "4PwZx76nVQCpV6ULkEBtNR3DjzWjXbDd6rVU2tKEnbbfmApqpfsVYPLXsigSXMjWp2akjkXjsRhrwPy8aVWfTFQU",
  "key12": "4P3cNg3PcVsq3eFtd8qLWCv71ZGLMJ1YWDtQTJ5Nw3UP7t2eLuGJfbRvqxjcZuX2bfM4nGaWtedP4j8AwHtmktXx",
  "key13": "3EzSZAVTk33mLPTNMU9GKJisMPSb1Y5w8SsUTnBvugQfPRYrAt34htpEmv8bg9GuHjyVyfN7fpB9ukxmJHee3nLQ",
  "key14": "3BvovHWwp47rx958YHuskULMB7XGisLsav5hT8TdJEF5JqNHBu9ty3eN9BPYTg7XK6N9CnGpTAedMfKCpEanqhea",
  "key15": "2EYeG3njX2fDKsFEx3pgB3YY77BhM8FDU2XxQGbtKzkYjEKLhS3H9FNhq3cFrkR6wGyfQoRr3pHiqSRfWUebLvUK",
  "key16": "7rJ9BAs7RhHZjdVHVut4jCa6yKfE3kDuve4cFs3gYEjL3fMbAMw196cdtLRtCuGJ86K9Z65dfPKrCFpyBAqxaQY",
  "key17": "2UvBPdTo22FGjHqaFioLVinDaSbgsG1ZLG9MVJ8G4HZEPiE41jTvAmQasLa8h9fwzUpVtXcy5aqYz5YAdBVkvT2d",
  "key18": "4Y6SMaNhjtKf3eTqa2TUxgb8dKP1wPKig5tr4rzQSzSjruNf9DTLRABUBLof44sbhJsbeM4fxNqiXrAinSoRkAwf",
  "key19": "4w2WQe4oKq5GEtTybYWAYqm4qRgPzBWQSgfC2tK8zBqwG562okyp3uigvRRFktkLHatgwYnuZ9tzXsCfcW1EgYzo",
  "key20": "DQYwApDTwzT7moMjuwX5DqvX3XEVSXJTVsDmssdXawpd5Rz1Q1gfGZh2pG9GigpVKkKJvpeXyqFrft64zDXsD6e",
  "key21": "5bx7ghw6SQvjmrTZzMKBpWeZtUqgNig3RfKQkbr9HimbGMSbdd1ivZYuR36zU3N1zH6G9GXHC1pKnALAKeiAYPBo",
  "key22": "5vFwPxBL68UWgjoeLziohuHqot5ZNRMusoDnyqGQmSof7xaovW37fBt3FQQjH9RHgtyWLkSLASQX3ZcoL2BpWxtf",
  "key23": "5Z7P4g3HVqRK61aUSFqNSfQaHK2xsUghCtCDMA3E27Fyx5tMCfKYuNhoz6pB15ReR8rKD8x2mit91cD4jF12xmGE",
  "key24": "2JqUYvvtcsZJ3CeaCLThpZBK1hfZHphvwcFkaaJUjR1NeHs4bp7LkCNFGHBp2PcNxncmpdLhzjrfyZ8UmoWgqntx",
  "key25": "2PA1pCh7QkCCX2zK1CMHb6PqrkrGd2jpaUmyN4TyDEQqPybpgzMMhRfJExYBomvkT32uVtGUmFQ42M8oSn2rdyrz",
  "key26": "8mMjoZSzQMfsfN8b684YWnGNpEZGjtxvcrxE3PVXNPBwmA3wfUvRhenQfizdkLcuJKE339p5AQJZS7zfDZmke5Z",
  "key27": "5EFkecKJ33ubKucvZQGDEawanGau1AqzMqRLRBZcn5mrCN2sjPYvwpgN72K4k57dWCu9PJ41r1JbzLh7no8kyQLV",
  "key28": "ZkPTkziF7X3zme59C9MJMZ7pcwopej75fHftnnXdjK9AYkMwvpmom1v3TZW4XxCrCPSDCLSgxG3KLybaA1cgZJf",
  "key29": "2ZCmhH1qPm6YoPE2VBgD8N5XxH8vNfLmLfVxYH9X7TvAiVhzEtBp5TJiv6wrGUPwWmn91FUUwRhmwPyU3edXbCSp",
  "key30": "3GWfbuHjUgnsNCRxRgfDV9s4HrBPeS7QfGrKMmc5gH3vuoaskC8J8fLRpnQXxWX5ZojRShCRYRLiYpxJiaJSeU9E",
  "key31": "V82mXa6FC1YAH6Ce56nRViwbib4dKrR3fH7BdHKsBh4ihz7xJKCLirnwPT79MZ17q8m8NpzQyznsEaaVXUCuDKZ",
  "key32": "4HU1KippwU3d6QZzQfTTB94MKpPk4iG63g9WJyVwFSDdkqGfBtt4ouMqSZMRPWUjBmehtx7ANa5vno6ZeFKjbuKf",
  "key33": "4BPEDPvB6FKdrfjD9RY3AZX63NikpJoaFii2uzPkmfm6WbuB93wBNa8UmrjhT4u35o9WydqPrPszUbkGB4P6xbb3",
  "key34": "4N7oHDNuJ7WYFdFoYdWbjPiLgRjNuwpaajCnSNd9UkZK7NNp6BWp4kXD9cJsCh3C72zrKPZfhcc4iwW1r2fJokLd",
  "key35": "4mPxPqLRyfKFExe4dFdbBGHLiRMuuue6aomaJ2JKFjoRDzQrNCc6buuAW1Dmzi2cn8gK2x4ZUySip2hx6uvtNxmr",
  "key36": "3rj8U1mEgkEr7GZGP1KJVUyy98Qw9nArVh2xEyY4r55vtvTVWJJ3MeqCfiFGhmEtM5WiyvzD3RNuRD4kjeSg8Sx5",
  "key37": "35aCZmsbwPGj62z1DG7Zsp1qTrMjRkBvLqJ7feFgdtaA1wR7JCQkAbq5K2p4ctpi2CR68YNL6oqYXdiAan8BdMZL",
  "key38": "2vGEFj8Ff2Mz2gmj7okf6hY7ufFFkCGejgUN414SeybmdTif7oFCmsEoRQauVV7kuP4NT3gAzEoJhCwLtgLwyeDm",
  "key39": "5PD842N4mBWMa894rD9MzFfzFaUKZjEXjbz5m1kkzJ65kT1TqsSvic792DY8ZwLVyoEM4gpAmVP6b3CyVfgihxin",
  "key40": "2kHojYWEQi1g7ueCyQ2aZo8AfGi2RdPjtbJ5Wopc1B89bqWfvVFAkmEXbH3D7rtzSk5ZJ9JtCC9B3fM11bhBhkso",
  "key41": "5MdhifoaMFqvXckN8hry4PnWH2r51KqY8GscKM9p5msVsLw1zaT2oXcSJWuE13tzQWrYr1nuVpxkXAQXkGf9sjf7",
  "key42": "31A2CZSSp4xVRTTHtzV8y2pSTKrjbJajPzo111e67vYFoMQ5JZ6wELbmHm3o4dy7UKo3a42wsr74wL5UJqjbZDPb",
  "key43": "21aYDG9UDLdouVAhfTXWG7mjR6Gvjf4ZbtE8ovfERe7ArfXDwbs31hDsqu3zZTUDBQDCeADZT5JGFGJVFaA9r3Hn",
  "key44": "SvX3yJbdmK3jsfxuPNdhFBs4PKiaDwKFxQEVAnHdBfAnhdQ9HgptKXLVfNXQV2zFQcEi2y6HSLt9Pw98gh2JWFB",
  "key45": "2z4xHBQzhyCY3zJ5PEt9oH2zLW5gk9SAQKqECFWaceNKH3MSq75pSe7SritjT5hbiF8akm29PXMw8P65DexgMPa9",
  "key46": "doLagsDvs92GKM7tKgFEXkNqnx2nxGaAe4abkCcXuMi7kn6Rf3rRg7VoLxPL8BCDS7384EsezyEsXwEkkRADBSU",
  "key47": "5VHk3pWoBKVAJkKRZxgpvkk7hNRUEYxr9uo6pc937JoikNtxXpQwmQquaNzpcerfQNwWNCsfEy197ppuLuBmBHTx",
  "key48": "5DsdaK82ns1cQcy2Ywt52hAH9KrLgCdp4Rj2aHjF1xDH82UZfQxLx9fu3FUcCjme6RAtTGvwHZmnbggQUniQpETv"
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
