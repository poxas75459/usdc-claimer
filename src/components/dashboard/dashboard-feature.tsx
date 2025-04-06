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
    "CoZYqyTe2MztUCc8HSMEnp3T4zkq8vNCsZt8YqpLS7yccukhHjBoW7WXtEwVMY5P1HA4uNGZMNP8rMvbM7gbRzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xGhC8r93x1eSnszcaF5vcxW7XWT2Ja3PfhCvXnizZSmSSuDUMwaUz4fymUKP3hsJSjCwK6CsvkLaMYY3bBsUiQW",
  "key1": "Z6iSSZJFKDDpA1BXQXxX9qaCGkkTXDb36AW2XcJuikZZbnDQi1rigupX6ZrfR1d9wsHREDhPyLQVQj5zgD7SBG6",
  "key2": "37jzZ9SCmGoXSVnDMiovFZPvo8jaTMXVjPKnv4enSJdWLiSgMWeH8YNDoyMQzcuRjpSZsyqkaZpyfDtbMxzV5x4v",
  "key3": "27g6jRTi3dKjFgWnGjG4teczqTCaeLrHh6ThvcTvjbaoZ9TgW82oZCtXYFzKeYS5U32LMa8R9qPXn7pT5yhuaLPQ",
  "key4": "2frByw6RH6e5XysfczJ8Ac8vLSxCQJBc1PEZenrHozXpbYEtc3R8Pf6MsmccT5BPLqzhMxaM6MAesfW6uSfu2Gqp",
  "key5": "4UgkDuN7D8guV5Y9oQDMyRVmAQwTKa25bikVi4K1YwFcZkjiM2bqjgXhe21kEGiKFk9Rwg9YxUQELW8XrdUDgMRx",
  "key6": "5ZS4LTfujU7KLMaTtkMdenMqzKgXxkJJ9QywnggAD5iAxu8jFGUqU56wyRbBX1di2iPeSGNLunTT4Yfupm4WLPRx",
  "key7": "4oMuLg7Jwr9EVB1Lr4WeScyBTP5t1hRVZToNXAGWvacrsRmfKCzm5dXN44ENNtJQ33foP4py6gkVwDdGVQysL4vX",
  "key8": "4mXP7XZywMJPFH7rwjRzvph83HwKJ9GviX2xo8TooA1pESZr869SoXCknfN5My1AxnvojPcouuTcVvYP7poqocvx",
  "key9": "3vzQuhSxDmKdWpppD47KUq76zqeNidBBeFnZqQkLypoAYJCvy8L6x1PLD9kou19mCj2uuHW5mSaAkw8ciMavA6mZ",
  "key10": "293A3skaq9toGaZBKGVdu2Bf7apEuBAAxJkijPSqC6mURGTsCG5L4WB1Uhh2VdGFHw1gUmxV25tJ65rdboES3Cs6",
  "key11": "3Ttj69paJWTw1zX6BbMJwK7vr3b5nFZhttctw9EDcJfqCNY2xNxVDCspk1D7a5KTn7VQkddDMGkAwEXfUMRFCC67",
  "key12": "3hLtqDKVBGqrqiKNxqkpcuxZ1LXUUevPufUX1HdemXYE1AfqANehhysNLYXRR9vg1EbVVZRGKMy5cHJWp1kepeQJ",
  "key13": "2C4j3WLRRKewKGHnSdStvXbwxcbqoFoH2fe7QbU3ocAQ6XHavyfb7taSQYZG8prQKupYSKe2GiuocSboeHEbSEgU",
  "key14": "oFftzyeKJqJdcD4tRjXbnC3LH7mLW5Nrtx7vDYx4wxh99KkLdtFVZP3yuir2fQDX7tKyWzh5yDA6MvJCVtmd4mk",
  "key15": "5VyYT7kR4YnKLruuhQAMqBqHF1B6xZAKAwAxvc35wQauUEQSKWtY4ws3b2nWZwvLuP6ptryuhBsvKhM8L2RzQevi",
  "key16": "5oNe1cTqmD7xSrb2LZco4S2vEskc5JgyDB5Dnq4u24rcFX7p68uDJgVBhbcDnoiF3rz1HtBvHDaZZt5vkyYnWbLZ",
  "key17": "4ca5pMTbUbCNGBA6sRWbGAFLxAS3txRsbwBKnNq9xhcfiHxkyKG4RjaiCduseBVcBm3TGZhAh2Q29CRPh93zoMhM",
  "key18": "569hWnwbtDoMW5x5eVmCw3ACiXEjRXypLSuhrebKcuNg94EhpqFiPrqijJiqgbTUCxpNVzpBdSqktoALaV7ZUHEt",
  "key19": "5DQDBsZ8G8EDwoEiDyDBoJGmie4qtANzj1BQsKVs8jx7PcFBtHkbAaQ67HeVaG5xynzLfuTSMi23UykRABLVXXAP",
  "key20": "4nDa5Q4saWd5uoCtvLkA7aoWTvvEQAJPiguVwXsY5geHAkZ7tLoL95XT48LAHehCTAF6qfUVYpnZJqXg2kpuLM5a",
  "key21": "3Cg6TAvcPF7B53dh8MgxpkBJMDi4JJ9cFrMGhDVznm7K1EZyX5EyJtxS1NaKwcf1XZd2LeAgSRVsBp7uwPrQ258Q",
  "key22": "uFu7zMv25D6RDqV136uHWpRhuf4XDoMiHwaZoejy64T2dY7VSgRkXLe7qFSYZeEFNe3B4dLkBwu9F1GWCe8Jiua",
  "key23": "2tAwUvyJxGyYTfpE1sBc2fvGAJn7J3MT8Yd6XTdWeQnee9PWVQYRevxqLtfJ1UisMY1BQZQDdDa1xXp5hND67yM9",
  "key24": "37Q98oFo4BQ27e9YTKGCcn7RQP43XTVRqJiuCjCejfEW3dpSuSfk5Gcga2TVgxkRgFqA75uZWsJN1MXrK7TRxavE",
  "key25": "QhEMQiN1Duysz7PJijkGxHkErwXTqWQbVxvMFLDMkaZrFhYZ6RAgYLbH3uHs9m66xFqPW3nWAp77pYunjUNdjL2",
  "key26": "4mRiB3CUehT27r9ocVfMrLNjtyCayx9zEDjTcrskjV8SQYBZd7HhaVrSGv7KZaFEbTTojiuH8T9ocTqs47UYDABk",
  "key27": "txWADuLo6cKLcRGXQRntsA5Xar4c5xAqs8P8zyBVKsCKpKX1k7UuFtZVpTxmkqupq1Ps64RBei5Z7wohRVkcMjj",
  "key28": "4vyvEG2aqhw2JFF6jCAyFdJZryTnvuA1sYCuLRVDEcZdWJt1DkShZBTW55RTpgdUhrZgwe6iXQoE8ZbEPz9SaPRY",
  "key29": "51UgvQjwJ5GEt5CsfHzWBNgnHB37odA1Me6VabCbYa3E5mcw1pB6W6DkgNKSvAuYkXjsCS598PnpD3vFuC1G2M8r",
  "key30": "CPWNAL3zah9Pde1zxv3edhX92kViYZBvjx74Kh1HMiMo9bRrGRR3hVrJN2d1qpva82CkxSPLRjdZCiygdC1dWcg"
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
