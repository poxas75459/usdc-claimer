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
    "qh5aKCVamcsTuoLcM2DFsGMbYwAG1fCGet9BocvfsHfNXDtVZT96V9RuS1cFeY42MdyxoQp4k5HMHm2CPERfA1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JukVzEuEGqS9MyHokLUeZzFe3hgtsSG7eVgxcFeVv1QdFXvAH2Qx3h6TbitKV6ifR4CX3pPdQe3QoXWkFGVws8C",
  "key1": "3dXRC2YtrVJ8wfayG6SL9Zz6UKSx8FNvfNvkgoYz5seHx6HBuM1fq8G9C9P43SW1DacuqWzkboGwGaYE6iMCf7jU",
  "key2": "2YWM8YYtvDqRDDucxp43EmixrRdHwoFCtaWk4fhMxdqSn9R8GxFwMFUfKuybhmNaRXZe449CaVcPzwqcYowZ8xku",
  "key3": "2roYSc34o3RKhDzeHSncjV6wbwcimAyW84mkMeaBJCa8ip6RZ7azQbqdh4JCx6EeCXwCuu1hKiFpfXVuMsvd1rcG",
  "key4": "3RFsRrmJQaor8f29MFD7fGQpjGga59hjiSDfXhsQWR5cLqDf69w8c69nthwG5dSd4D3HDqQVAqrGEma7sonE63EF",
  "key5": "4F97Mc89itRPSDLUr6At1Yf3pDsxUhiLsK4hSwaKJVaBYVgmgfeoJ3PzTzS8A5nTiXdLgRnXYKY5AsSZkL35f6K2",
  "key6": "2mSAPsEupcSfScHhVL67bqo6RDQqNHPsKugCUJ4TE3CVtuN7K4oj6d3P64Abxd88Qc1cyYe6SYZMvRASRKUhtHTx",
  "key7": "3kNYWqYCSCF1zdFZXYKd6mYPivMcpbABkpmgfM33TcUzTXJvRYeyHUBovwK483RdBV9Tziabz9RP7GReG3w9Jf9Y",
  "key8": "3bWZmGpMqRytfUA98BXDTb1AbyYHhw3ck8wmZATNeTGHgYcHXfht3gEChD7yMcKjNSeCjDn2DdqGWvfR1JS24eV2",
  "key9": "4k1pYpKGHSQpTAdd6giBMcUmrEZGLUumCMg87TZuhBEQbSyD2WxWM7sLUkWRBA288BkJBzZ81PMq23ZiF7bRc6R8",
  "key10": "3Rz6jjTW8hEqzeMFazMpaBgH8F7h7f32duaJyEwVKCJevHThLRbUTRHmuoTmtVSLcYeXs2RcywqrK14Z8T1HrxBy",
  "key11": "5cKno9DczesLQMmVYTVzwvC9a3xzwnjF8UsPQbSR8hKWvdrbybisGwJij7RKo33GMH8GbjEjou4ySTZwhTZDQC1k",
  "key12": "DEK6Sd7tT5zKNTFYBhNs5rCFoJeeg719VsG3Jw6iEyJTUoqDoeHxhY55m3uhAFMeLkwfWpHr9U8429ETPiuY3Fe",
  "key13": "2CTeJ6qTzyyEq2krhCbZkRfypmjFYWonkVHnjqnVkzvE26K3Hev39AksbZTMgRLpPc5arZj2Ld2XXP5BMyC78zbd",
  "key14": "9B4eahGB9b1Ro7cHpX5ott1Ud9PwtMrFVNvQzYwH2myH5eRAbPPiyp5AEeQBB9eBLnUXKSBL6v95d4kGSCTLoT9",
  "key15": "g48FSmc6SqGnFaJ2FcAbQEJLY1E7Kk3zAX6iUJcZYV6yyWdtjVrafn2jCvnUD8pykGo5rm3aegr3YGdk5fjcQ63",
  "key16": "54oefBwTgBMQLCGAdgt5U7ydKk6zmt66E96Xh1Ab3rnwr1U7yE9JSuSmee49w1PjqLdjUjhG9qq4yoUuLTftdeBM",
  "key17": "4bdSkUaUZCdNtra8CMpX9dY1YMDteLtsL5dJeHimNwyakm12vsoj9CAo6QB2Fe3A9q5QVqpthxVvmcrQBrzb6EHy",
  "key18": "5Sd9QM8qZuHcjLmYLyurmcuHwsxXSxthdZPDKVYZkaVoE5ia8kv8Qm4Mjw2Mj4TSsYnDterzxytqsGQt4zWXnEsg",
  "key19": "4DSuTbsT716eFhntcXkxuxupN1HPpFbATW7mspmmfSE7LSQrGh1GZaQa19MTFywBDVts7P6FxEa8fteeNjoCfWry",
  "key20": "4UqP2iRo6smJVHvmxvKRV7Zra1J2u5ViH57hAPNeYRq4NJmcLZ3Ykx7Yc7DAEpZNh4VaMyAmtYumiogSXJfoC8SP",
  "key21": "5wDLembdZnDdak9CkyVWKLtaRYHu4fV79D7EZBoLwezZPP3uM9tZGe5nMTQXXbVUmqBfq6mJuk6H938tUmYQeEYA",
  "key22": "2JydqGY1fig6bNUdPSYMXZtoeAJgcgW3swAm5QQZSDx8seBV5o1Uki3haoeZRM8i32hnUDrFfk8Hutfk1eE5jtmW",
  "key23": "5stLXH3E8cDxgWLFGoXkpiMdR6M8DE4geEKwSGwz93ac3riWDutpXcUZzDbeomva9zsy2YcDxER263FnYT3L1cZp",
  "key24": "5WGmykaEgmcZBUFZ1BSdKQewMHrNrnCkMh3zXrWPBh8gxDpkUyt9dqMuSHkb9oGjGPNXsUSGTMhDS4cQVtBsefew",
  "key25": "y4cKv2jWC548QHny1zdLpMdUjECSJAqvoDXpoyt7xviq4z2HpWgD7uuG9T8vBu99vJdn1E8nfE9jq2RHQrKdQRf",
  "key26": "3PoATy5B8JHzdJYARYqgXppATZ7HDvEZrG4RiLxqoG33jR8fBgZGekrmsKrYvsPcD8fhY3GT9A3VeSmbRRZcyt91",
  "key27": "nkoJLzhNmCR6v5cR43uv3W3tgy56fCA9DNnPckiDR4WX6R6QUnns1PHLZ362VYHT6othzRMTBYuuSjKjvpmHzLF",
  "key28": "Z91RxkkiUA2Du3tMMLi1vBCCMMMiwKkdgihgxaUWz3WsPxXS3z2rUUz5ok9CW8Hbq3oMGJjnQhY84M8L5mCCpAU",
  "key29": "2i1jaxhQYrVMg15UW4bhkmv2CZkfFBFYuBvQ53zobxMd72XxC4N8g9vcFHzQzmuZHtaeMUtCKgbnFHo7t9k2iUwJ",
  "key30": "3f4jSrTnnW9MDtrksr5pg5ftQSmYvcj4zC3b5B9F9FzNG6Z27gsBkkxjUhYXoC5QeG1MaVjTtqnJqUpacPhnD2k",
  "key31": "3XAdETgy8fFXFG6Z1QQs8aoAxYdBKFcj4fygGbF6bBt3SqSLL6mqzHJnVw85ULQpwEgHdfXjsduCkmrUjAK9eonJ",
  "key32": "4gNtqZxypiwkZDES2C3B5Bdi3uGfbpGjxoKVrAx4biAP5NXj5tiN7m8MmvMFjKUDnWd3kfAxXLZKrf4gZbHGboGw",
  "key33": "62QB25fQ1TFNRUBcFDYwvu84zkZ5j2iaNRyMcvnUrQBdQg5aaGrNwwcHf3eaLCQhWsX1Qthxo4txmW7N4RF17PDQ"
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
