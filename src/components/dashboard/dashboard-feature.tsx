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
    "2PrGQHqMPxZ8EGjdHBctRFvYfUDEm7VbEDgfvV2CKrWAK8FNAirGm53Tx8ZBEdiULgRLw9RikTT7EGLAvnmFdaL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36tfHtbvx4MAR4qvdFrVg6w4jwswQAp1zsWdtpnVEzgKUdgfFWKuFN6Diz8g29gtWnwDwX63bWnEVAqwfRkKkZYC",
  "key1": "5MaEtgk3mog7byXy1bFKUMzX9JiWbc2c5EmVcDiTAVKUCzwQHq78pUMkBNTf64ea3pqnHGNfXBCFu4p6STWz1E1s",
  "key2": "2x8VJMDXikWRTePKYdNVyfMLzFyeMcKJVAcZtE5DJyBsDVcyFD1F87YUHXZei6EGjXvMcgWfvDdRYxbGUsw6qp5t",
  "key3": "5HybQx1v5kAWzzgk5QgjysSoCKDT1CU7M6a5gSHUUp8sRUwHL5v4U3bJpYLzuRkcnkvuSYFCTwGSFxiAuPfunf43",
  "key4": "2sK4KffWE4SLMhoxh9rGMjYeB1UpRaBuMX17YHzc2JY3cvS6uxuLQ24EHk8gEd8spog1SH9gA8ZfwcSs1wesCzy1",
  "key5": "3iibZyWALXtpR6aX7acmTTc7QxEZpaedzX2cFzx2ykidiFvDKmmaeWLCgZG4nVcc77AzELCJYBxzeDutphNW2v1L",
  "key6": "zFuQ53qQxrV6ophYc6dYW1hEaEfLqjaTZW8niX14hc3UPYSXeisEhPZUxwP2ESSiTguBGSSXWWoFbZZWv6Zacm7",
  "key7": "3s4NCDzQxjwZhsSqpVJdNGXp6zzZzs2ERq8byVmp2iWnJ2N8CEZAGJSSV2di4ALJ25gvbqFaJ6H6AmQRPehn76Q9",
  "key8": "2SD2YyFGPm7rAzqTnXCDasz7FRntA8ADqFymwb5vC4GGQV3qa2ZHwzmaGrwGsHH7u2ioGQJFMsZqDGGrwZGcpNam",
  "key9": "2mrZopzNDgeKqTxSHdf35ozePsvvDku2BLBZq7ztfN8Fdd5Bxsb6mUimRWecyg9NEnESbHkhHfN9kjbVb5Wczxcj",
  "key10": "5tinTXW1AJ6cD9VM9oqQTJ3McrreGE69C2Ja7CpLnxq5hxjUhbty9FKKSgMQkHmndQVjATP47ydEGnGxWB1SCQig",
  "key11": "aeM4bGoVZASRFBdkLnQhhTkCjWhbAoWTvZzL6h4fpDStDzvwQWYvYjECxMKVC31LVGmNo4pGFQRARjW3yaJELE6",
  "key12": "7qwv5n3GQeVhEK7qc1fxbtc3ujZZyM4GYsEUp5eNvLoyzhEM5f5384nX1k7k5rsnCq4baH14dBNjtGAEfDdjy25",
  "key13": "5GL9CgVZqvDmE4QjitiN7X4uW2MQzyNNCDmQNSwDJPJhh83b7kzL6qRFd8Pb81efhk1bHngg2X38uFDcwPvQfZ5Z",
  "key14": "22xqoByQWg1R3fwa7JikQH659UsrwBWzxi5SFP1pZvBM9njH1Av5h7etPw8f2PEbtEYRCS7LeCPNt9Tqqdk2wKe2",
  "key15": "4Guo3LoL12TJDMUx276aKb9mMztiWfosMWyc6TyKS1jTeZuRiPg81NvCehKRp3Xsx39vz1qi8GN7eCjr8zWDfa5e",
  "key16": "5WcvWzp1atc6sLgt4cSwjow4WDdLt2v6JKuFfnAjiGGKUxWnYemdp6hAvXX8xfiF7fCd6HtdadzWoXfXe7D2vr76",
  "key17": "5AfARUm6uiJAXNEAugn5YdKfZD1fq5Ht5eyEWWmvGniuypHwnZxesy8AHvyc6PjHHLFmeFt5cEs6H2b6gqPizcZR",
  "key18": "4KboF7hJoD3e8BDfx6nN89DcGZsT9DY4VnoM7mSZGrHK152P1dtMH6Cvda3bSCm5959s16LcxtPRARMdg5t1zC2E",
  "key19": "2Re8Q1kh1itWmizitksP1fKv41cDSWXPcpo1kghSy8c3C8xrEVqC2g4bEumdqhQgUE1KezWeF8t9vqZbfPkCZkYo",
  "key20": "2xrkFF56VbGe8ebWCDo9UMJQg2JAerY3ZJ78dTooYWhSs7LCSgvDNuZaSYiPJRSczhtZh1Uyw6aijyNhr4TSCGAH",
  "key21": "47teNNpJ4gSuhpmCyccP1avVioydgGcLAEgw1Z6JetoiP5dBR1kziTTntk7dupqSXpCHkP5ExgKC9xQewuq9pvV3",
  "key22": "4hP8ovmjXJwB9tW9H7MoNK8yfq3pC97zQa4HxGLUxNy8mgedYkWLQXUPa5upzzHLArmV48zkXFHJoSuoqmA9D6ru",
  "key23": "5KbfTQLL3LSB8hM9icVfaSCTuuqHoKHxiuT8xn8zAT4qGMM5QdZVaDyFp5Ju5ZKspZFAuasMGzp8cw2HzQ8gDYuX",
  "key24": "3GKTMp7GZU7Eay337qjD1NAhtTtaAhNyWz7MQD3gwdAcrU1Eca55DG2bAchqHqQPckyAY1vYrXWbs1Mem7xaetSa",
  "key25": "3fL4T26oTrFhukfoLrkCUPJksbgeDjVzLvb8LaFVHLFfZhggFZXZj9fUh81gKWzxL6BdcchEqNNEfvTxZBJ4WFQq",
  "key26": "2QqFaz7hBNpKev6iseiHDQnNv3iq8Y15egbVYmfVGXyE2Y3MJ1rXXjNEPfYzoyfns6hvB6DtSrRTzkGYaXFdznjS",
  "key27": "5ieyS6Rog63WMN6dhRzf9J3p7CzbVd8j1nvFyXJ9L2dkRLjqGToqNBgNPSgnoU9j3WL9GT8fDb1bZi2n2fipe9nq",
  "key28": "5n2NmExVaaPMp17jYRppoQDPtiEYCSjVGoaiybscAqB8bYryX6gHKUwr6NhKtQj5B5Hn5HuFG6E6AvEfkWTdqHX8",
  "key29": "P7tGACt2YfCi7CnKzTBWwaeJqG9tz2gKXPLkGCVCtMCEELWyUXinKTBCvfoRCtqDka5gqgh7MC1znQJL1VrTRUq",
  "key30": "5GmVWPmVagAJCwfYCCwh3JYPjMfRgHAyKZzNaqgn7qdThg2hgCxtRn78kga1sAxYg2ChNGL9ueQwwwfCjatqcdGW",
  "key31": "4Kgovv8kieDApN5Tjk8KXjChQ8qCpW7CPhj3fo6RvzXF5vMnRjjj739QhZGdWWdbPyMVjckfk1KdQAwMsUTs1Vqb",
  "key32": "BwyQMsz6wy7C4BN2rNpeti6cBBdgdGLfAMvwibufJDh48BU9iDuewNd7s1sbtpVisP76DmYDKHp6fcWVP2pjjrg",
  "key33": "2iNPJn8D2JmvGSMbdxVRWspedzCvDyiF1Kme91XivyiYgG4kHpFWHec5ptCExUqbQdngwYgbZHk5fkGGHhCdU9kM",
  "key34": "5wvkJs5ybaVThWcQUKb71F4AST5WfiBnpXtpBhTVm39hapDbXQBKtDysjr4yrEQXfotLr9DSjotGgqjKYMivEYbT",
  "key35": "2dPWQBkazD6Nu2qnMpkZnLD25wzECj8LigbbnLVH6AhwoRV5XMovBx8xfaeLZi96JVT4tXJDtYzQ2RkJ4XzbCsyZ",
  "key36": "3bnaRu6hKNXvpov7p9JmiRwLPbHU2ZVc84cMMK2Wt7X6Krxtu4GkLWMeTR35ZWR5dSNZm2hzEk9wv5xic2fsdfqJ",
  "key37": "4hL2rMCpRgpofD5ZuRvddjHTmVDXdD8UP66n2mYdtMgqeev15dimRYjQ5WatZDQkydprXgWYBccfEhqcGrJz4D9U",
  "key38": "3Ye6BWYLaS3KkX15xXzPuN2dpD179e3rCDSJdoDJDAhQkCgXhGsKcgGtthfdW8G17HdSL8xghRtukmjs5vhbMgTz",
  "key39": "5o8hFiFcacdvAseBcNsmcfFEEfs7a77KkjeFohAN8QFM3N2BxbXzszB98KcLuq21VWqLpsJC7gR59kRir5rjHbZN",
  "key40": "5muTwchwbeU5huN3HGod3WikwUDmmMMCVmdgb1Vrgmx1N2nFrCEuYKk32V7EQxEdRFRakPM1uVvodnUmsZgb21fi",
  "key41": "55BSD9LxzUF1FQhxUunPyTi5wFE6agZFrjcYtabu6P3LkXmXFHSzCBnS3ERntgDMAGnvjdGBMqY3Aqv1K2KG5WKB",
  "key42": "3uCnMaRMDpsCaCCteUgxQfgDwR8VAfN8ZfbvgzvHQwiVioSGtuGsQxqJXNDs3CFg4Uihy4o524ia5hn4gDCQXXXM"
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
