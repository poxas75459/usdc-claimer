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
    "3aqkH2JfVGgw9mxnEfLWFUVAvDfNc3rsXeMLR5Gn7AD3FwuBPhq1vvu2QUC1DeURHtpTXfhR7BNtrZg7hHwskuzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QoeUbAvgPuPCqTSvKdkeXNNAby8ieyZ8ktYfdPryXJ1CUfbuUZVhAE7hbT7vcj3wKkuQmMCHb4evyFMXgU4qJqt",
  "key1": "4L8WrNRcdLxH5k138LDdgu9xRTfuiwYqvkDcyct3GEUTfYXcmNAcJAxZdtgokKd2QCNy175nLRxoRtgWS7aLnXrh",
  "key2": "4a1m3yBgiZppCZ9WyhK1aJQrxLHcNAWD59WH6YtJZocjd1DtapPPmSdCQzPAoj2mBUc5iW9HRdUpnUmj9qd7hFtJ",
  "key3": "3XQzm4HJi4gUgWVjGTyCLae5E2TCGT39BJnR8KHrXZ58iZZ8FRnTiTPov8u9XH43ygr3Rof4LaHaVmJTVPp5DttP",
  "key4": "4BgCa2K4XXgNBGNftVgvgEAhvu7bXSJiYNWfp8Da6zHdaTDoMpYnv6mAynDt7eWBuQ7aEz9zADAakJ1ePd5LzyUS",
  "key5": "mPPNPiTnXaeqLrU2Pnvj9sLGxGXrNCT3n3rBquaXTbNKcjHs6wKZroggevxu1wpu1tyDhhY76131J1RTKi14jU2",
  "key6": "2vSPgH8zTGSJuCR5zk6tFpUKHjg5aQce7szUgwFxRBDjYKsHDi5u9fgZf4nMDNhPRhsWZXqBTGHGTG1k2PSNXG2Y",
  "key7": "3LKvmMuBYBWNZDPvj8M3Q89P9YnmxLyTHdoSKegS4S4atxTzj6ij4jiy68C3AwdKok8Gt2o8HMEhnAHiakeoXjmu",
  "key8": "4Maypvj1jXZBhDhaad5GchBVxoH1ZDQG6Z7tivALc5rQgrJYTGDhjd9J8R88ncHbY8n17Kgpbcmuf4szwR9Kjm2j",
  "key9": "qgDufTxZEPJiLAoCVWNhgzJCxBmkSQ2XvuuatpKMJ56UYNkLFu1JekncdHXFeGoYsdiEVxxn3mRjSmSrtp2hXbR",
  "key10": "5ZbthaVFcHNUpd8r8zRLLiQUXBsZbWLTcvfHGnVF8MYxkfizi7s83mk9f9vo2UL3yAkGWkx1JFi1vbtdhw77QdHi",
  "key11": "2Ztg2N5YW5NEzi6YddiTpKjKVD2wJZc3GoDxXVcyJiEJ6Jp9udkRsN8SLn2bxVNED5n2zESbWgMUpG9yCRx3MuRg",
  "key12": "272KSHPe94x7PWaahRjjuC7Ey55Dwe78j1KPmfZ87QtuHQbktZpVRF4i9sZiYDSNM2RdJk7xeNPFLi7GB9FgAyw2",
  "key13": "5o1nLRs2xWKJsD4YmDpGKqrk7NtVsZpAu1EX4bNCpr3zBM5YJ84geEyGtrnt9NuTkppghdDJqMnCyeS9r4MuhSDx",
  "key14": "2gamWZNdCw3QhXiQ3kJV99qg56FzxgDsmsHZWxgmVYe3NCUcRYSLSWnZK48656Jdu7hCPEQutKWFTfrG5zo7oPk4",
  "key15": "6knQD6F17aSsPg8vay8P1dyeQQXJvQciJc65LaazP6VVzGRTaTTXqUJATZRebE2VXp3wDQ2YWbQYwFj9Svbnn9A",
  "key16": "57H2niPRseTpXPFv5DoYeKVhJab9xnHJN8DMv6mPZEeTsYJ9yA7dTejnDyR9DzyUCt1iqXx5oDvXtXrB6ZebH6FG",
  "key17": "5cUBLbaENXQjbBx8NqEdKQ6mLRA3jB9vid69bAfRU2Xd2D4FDWv4F2XPD51otCXs4WjKEJmBRhaWMUWd9kTa1Yn4",
  "key18": "4qM4JNxHwjh7r3pSPZTHaq7nzw65fq4i7CLFmwQG88gutPfmREjLMCRTncXg3o7Dkhx6MLgBy6UPkEBnsVxiwbkt",
  "key19": "2qAHyoPeK5mVoUs1G69r9ZgDew4cJe2SrEDkNyMs4jWwt6W9UC3PsM91SwEHvciS1gN9jfFum4PVvCLEA2Z2xkTe",
  "key20": "4kJ45QaWK3MX2jH8wdfxfbEos1zvy4dqjSoMHhACwVJ2bSkE8oLB5QFFNH7VL1zhHXvvcXHp5CQ5ZtEnp4b2c4P8",
  "key21": "PqqTq6FNULJG3xf1wyiYFta6BQVFbd6MWrwwaWfERru5JRAoHDUkkjudNxHLU15wPHed18eAKfq2xKMYvSoRYm9",
  "key22": "2TUFCNJdA3UqZXNjjzDQrUNJsGJhRmG7qu1DXBz8b7GuLhdgxbfn7pTtG9fCr5bxTQg3kVsy1yxVgU1Ej4MxN6b9",
  "key23": "3Fxw8ktzBK1UcLAfSiGKSbAZL5XU1cG6vzdcUafDC53SByJtJB9agtqmXFvvbz81N2euMh6sUALEz9XKP2JM5kar",
  "key24": "4a8qXwA4dbqdHAhjfAbRy8BdhQjpM8XutsXWMj51LSL2F9bxN53qS7qeFLktnnjWeu9kuZfSNvNFZjvyKcyS2vj1",
  "key25": "3sNMWks14AuNZKRRrKqQWc3Rbk3qV4KyMmiaqrxnsY7W3n8CSyhqEnexvfnpBafprjnK5qq2mT2f1RxUbfik9RS6",
  "key26": "2UooDBoJq51rJC4MtiMEWGk1NJYA88Kx9W47bTBJtatkWFcjutMT5tRzzakXPhQ5ELLDU9tCUm5tTvgrFRwwwFEC",
  "key27": "YNJ7p8HjZkXGBJ5D3TW8rSVM55vhPR97ZQ7vvcFpNu7FdTKFSc1xN2XCDVvqLvChYY6GAwP63gvHLanoGxjMEHr",
  "key28": "GmBj9P9hp1H1apfKjpe2gEnGX6eyxkbrMx91jCLKUkrWqxV4EbBFPcySaSF9jV6cM9dV1eUB2g5vsXaFJzDM6Sg",
  "key29": "3FskGZU7ztcCE3YkxHWJZpp7ZE1AoeyTWiw2hVZRQTkozyWqWsE1D7ynaCrQYt8h7m6khArsWMEB5tR4369wrFWe",
  "key30": "4BLgniXQBAFUXiCWXCvVj9K3xZ9DbsbXWEXVQtr8nBuUDQPrwac2DiSM5JNXmTP61E1HepdXdwaXjhgt6ATTEubv"
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
