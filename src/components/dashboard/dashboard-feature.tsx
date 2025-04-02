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
    "56utgJkkDB2kAjnYAKxESTJaGMsnWXX4pp9URgvjLb1XYVtmeLQenReKd6gxreVR8cKZPx6Cyd6PRUPJcpFxvLcR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YNJFAUa1kjDhUFhnT748xuS49PynUcumrpXM5yVmZzucnLvyh629NDiSsbngca57SL9Pm6vogc2UtnFJsrtv86Q",
  "key1": "2uEaCaSyTCWvZWsMKqW2X2njxqTxjMdKdxworRnJYf6vzC7ab2fnrAQcsGfWeTfv6guZtBSMdyKkXpCU6MYuWUK2",
  "key2": "5iw5uW35WkkqD63sAunCpZV1S2J1k35JZ4fbtZ7oshgh27iMpBfJcrvKZMJ1KCkCbmpbvf3cR2y17ubotwAYsxqS",
  "key3": "2KzjVDtzUN2Ade94ZR6NM3YZqq7GtLiy6QZeanmB4XDRU8pJ8ocE9ZYVnvTCdcNLJCX6EyrAMTW9apH2pKFPifhu",
  "key4": "5AP727RxjiUZZZimLmD1fZA5D8ZaB6pbSRsnBKf47pLjBZcFx3cAX8fdQFS9RGKECi9u6Hmrr87RbnRXhRAYVGRB",
  "key5": "4jVrHfa7ZgUx2ecgMW5XBNeP8PE1EMhNwKbZdFaLrkj1XdfajSYptHu1Wkcz8ttBwen14vj353spYdUJB4ZQj3sV",
  "key6": "9hBuzuXNK6gC862u7yGAPfGCpQzKkYWdcpZMtun41ADCBBNfiAhGbmEtDaCHj9BW596KuAoAu2otzo3TNZwSs6v",
  "key7": "2gTPTvKsUV4EwQ3H9FhUy6uJ1S5XnreVcgK6G5RoG8DtodW7XpZk8f6y4Q8SnLXD4M2H9EuuBpPMDb6CbLB4Yaau",
  "key8": "4nDdNpujrBuLogX5FVfTNiFpL2XeB4VtTG1Ug6P5WP5ngXZWADF5SDH5ZQVwn9pmLbJrjK4octbJzxs5hhAxWAFZ",
  "key9": "ZqS1ifHfJYjGakTGu3CZYvfoy6VoXzAAMw3KD1ydhnVLsaifcduhe3Ty85jxxQh4CXVxS1vc5nQpMPg81xPNNim",
  "key10": "G6JG9b4yxeXu6t767sXvoHyoFMCrXBg8YtRZNX6VHmETnDa9ie1FW2W1EZxkR2mS7Nf46gSAdgVG6p3FtXLtsbm",
  "key11": "5d9AM4DcUe5soGGn7Un93B3qwMPnnkHJR78wDH9XiFquLshav7kUWk3PL58jBHRnRJbq51wo3ej2KpKuMxm84H7K",
  "key12": "67gRuSqVcbKiaqD1MhgphCKxJ6iC35GL5Hr79otR9YWxeEnsjS2uXnKPJWSMUMHURpj9nBX9wvgm586AX8Gvpx74",
  "key13": "3MSFMNnfS1X81StyWJ3MW5XetZ4iH6vPeRv45FycrJdVchhHcFZo9XkxkZ19kp1ks1W4UoYKYWtYHjrpFM6nRX9",
  "key14": "2UmAbpzGWGveGSbF2xPfjEouSCSazEJeRV1UXP6KjcdyBbGTktaLHfcNijDyzFmEUghRn9ipXtJmJhrMP1yEjpRU",
  "key15": "4RfmEgjkoV5Rsrbwt24emKmJtEdREjZNx2W9nYiQ9ybiqmF62QwJ36akLyBx8BVM9Q4g2Tqw6if83QqoAvRKStc3",
  "key16": "4jPVcfbNrLxvKDfXhBk1hjwQyEd6ZWiLVQNc3c297RTnFMiTDHbzbGYiyKTcdWpujxVHdk4J8VtC6xArGd7QtNzP",
  "key17": "3Hut8rf5qzfTkCg3NZCR5kjPGAKM7Du3F1hAN7iJMFyQK72asFFx5unSx43CxoMW68NpFy1Jn6dKQLieorRhi16A",
  "key18": "4hYFo22NNU6fwjKKJzg5xAkLRMkN7bgyXkhYtUZ3J8URdHBBapusnxgen2L2moNgyTkAGHmMwHgddHT2TxCBypjf",
  "key19": "5nNtEQaQBPCin53S32VGczHqv8Xr9mmcVpfMLPKdUpLRvSbKsgxRYFhpitd8Jqvaxiu7kuUq6U4vofbHkTyZn3rn",
  "key20": "wGkY3sJkUU9RRG7TDWqcKRgvaq2NRsMoji3azBEzUt9Ae7KjMsajhTSS1CdK3yEW1HQTf7KNiSXvNqYg31SUc8L",
  "key21": "2h2g46r75Htg5qremDzh2BRhprLiFVB9Fs4r1EGShz442BSyhhivxbXWKWDuhSH8ikrNKS6CMsFLurpbk9uYbXVB",
  "key22": "3WTtY6jYkzecUz9EVbrS63oimqgsRWbcfk3MYyWgWrPns6nHzW9dqjApsTQheAX3d7ReAYthffy6gT1xx5MVwct5",
  "key23": "E9BiWFGzQvSdqRRJhtAZXNRZW8exjQVRuikxTqKs1izg536iSejYmzZJakyC34X7zczCY5TNrVtp7BZktX1cXmx",
  "key24": "2QwDythvaUoDAVtnS5mpu5EWHkuA9o6JYGaRutZsU94Fd6S9Dp71Q5WXGZ9QFi3vkygi2UzdPCgPaffhrrnPw16L",
  "key25": "5tmBonVoqLzNakDgDoLtSthU1cwYXkuAXkQN1uZso91ytdK75qujZiWqUwjwjjMe9RNLc6C1YqXQV4wnUqGXZqkz",
  "key26": "5wUh6Cnobhaz7cLvq7a8AwoPzmXgDm4gjqyH2WgedAB72wzS8mQ2tq2uKKhYgoVeNp18nqog7rtaFUMQMrkvrYKu",
  "key27": "3syyXLCsEcs9ncEZe2UbykJfHxjPJoSkiofuoY8H4oG1dHVgqLhdNk18Hcuhk7DGoEbqUMiTFa9JHV2jvrPuqyDA",
  "key28": "2z4SpZHmVwLiBNHcHfUXTMkrbWByw7oSr4dAc2mwJFTu1MQvttnh2qc747ZTPUn7ssRx3Qu422JJKXhMFCnxRdT2",
  "key29": "3pHBUjD5hkxbgBmo3wEJ19vpnTYbbWeyYSka25uu71AsDp4A73JmmF9nhtsPes5891Yth47xH1JPPAjcgc1tXor5",
  "key30": "pb27EEyEJdD2m3kxeVsqpDP848QoYbH3pxd4EcD3TccNL2SiKQbv2pJou2hSXtTZ6ZoGrXa5EfSobuE4o15ze4d",
  "key31": "337gPRXgArSTLDMENMkvHHQ9xN7FqB2TbBpdhT9EJQEAwvC1QtW9X7hWJbwns8Bz6CG5hyqzy2QehB5BWmrrJNhx",
  "key32": "5tzS53FMDnYBCNh3r1LLp3YsLffFSgCsQuZe5mwKTxFb513A3JpyUuqKXz9ngujYmykkwVnf6Y6TCHFomc6gTMHP",
  "key33": "Dw5KRrEVwMA7kHJ7SstnuWFSXT3SavHfBD9ejnG1mtiJPW4YimJohsQTQ8EMrRXHBKS5huuNe3juoBYUAmNMDkK",
  "key34": "5ZPdTbFse2TDkfuvdfkHrWjXLCwE4uF8zv6L3BKYD3CP91sJFq7ZbayEqrPF3WFU8kyNgmshLAqznQTSLGwPzwGL",
  "key35": "5R2yEHnQpdnZCje4Yq6fZDidfPf4oXbasm2sLrAxNvMeYd4aUmBVwB2QLkrSyTxhuNNURpouMf34Ymt6PzqVju1R",
  "key36": "4Pp2EgzeCUsjwLHKi6W1ZB8wdvTimBgxC6rjUZjRbYFJG8Y9vweXPXEyrjTAU9XeuuyZgaVQfFKy4YbkA3i7Qm2f",
  "key37": "2jMev8i5E996x2JZdA9ZhkWkisMHKUxHUqoBunKaXcaeACjeVGKCCW9M4BsJXVGArMGybkPtj22iqw4g7Ct9a1JB",
  "key38": "5LjNovc6xo4aNzC3TJRSDuwy3rwz4BXqge1TjzN2p42AirhCEe1TaD4gX53ZhooP5vqhjH95keekdtFjXgHjxcsC",
  "key39": "3VKrxRWdy7WQxkZAGb4Bk8hcwrf2BHrBfqStEWkAYthTDzsH61m2Nd31kQqBHPvgB3MXYcjrjTTdCaxHKbcVCyZM"
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
