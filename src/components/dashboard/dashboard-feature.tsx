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
    "2JZvW6A6Si9TgE2Mst9nyE71w5Msx92rhT1JvSpzuTvVpcQqvhEcqkvr8sCMxNE4xVArGbTeQN3cWR9ToiG2efi3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38w8yKYVwLwzvUuAoRdt48mxsLvC1aqWXRA8eyXjYHNvhHR4HR5tQvkaLLjiR2d3ye585gqfeLKQdtUBrsfCg3xY",
  "key1": "3g5wZ6VJsjnCBxSE2q9tFJdUELLNQaAe2WD5j6TW2RbnL2ycLmvEXeo9FFwNdHLHVgcY8JdD8ZHhBn8XPzaVTvC",
  "key2": "4QbHW4ozFgMr7grkA6e68hvT7Tcwp77RY2TmFgf7LWum7nz6Aty6wQgqTAaVhfDZQ6LDrLrUaGnrmjVkAxsq7xGM",
  "key3": "KepKhx8h5jbKzkuzmZXHCLBxXpWj4j3SqS1t4PBfP3c7BPnyRP5XYpNJabBqrtnoN7dsUvQxkiYxQPTCUur4w63",
  "key4": "3sJ6DbSdtBvQRnVfWwy5v32hWfg36DDMeWk7mJNScVptrB2H5XMqNZbSBhotrNqHmWLRgsha9AC5Eif6FckYQAAk",
  "key5": "5pxKbYQTGGFD3CSMFnfgHYhRAZGJ7nMYdZPjGAGgtZikrWbcPN31aMDf33MMcAWKi21zRaNtBCMWbcxqfS29WSVp",
  "key6": "4TWMC4MZ3sMHod1J5zJwKoyoaZYGGKchYvpKyiU9PTXBRDLbhkpmBoerbJzuRW39N76twXMvGE3gZJCDsvMgZAvr",
  "key7": "2Cv8Xz14Q9NkxcXSYxjqmfQTiS32Pe7cbrHDiMtPcRSbzMouNSUycMXVWMhiLnDQrz5im9JEYvV7g6H23xcu9vNL",
  "key8": "bVgX1gViQi8yLEz4S3zQX8v7rbfex1JxVxTnYdKAzGSeSr8aNJSw7pq6RLdCLbz8o8QbBSKhL81ELehwrU1MYsb",
  "key9": "5JPZsep8Mqcg8FmsouM8vbqjyyMJk9oNa2zKViq8G4xzHsSqyLjPKwn5MorZFd5TxHHbQJtcB2CJjG9BUomGaiVB",
  "key10": "jyqWsh7Sec8y158SJuJYhtgXCZCw7T4WaaaRxFiJFTyHqMvbPFjcDksm7DDmT5BgoH1uaHPPK8t7DPtfX7EzWAm",
  "key11": "2ntmte9HifdEqt9Y8ACQL7Ts63nVwHpsu1sKTbErbddmZfjbaghzNmm7EKVBv5JjhbyZE89LkUD1y9fs1Wz3KUiR",
  "key12": "2eKFBjqbVfowCQgdbbN2K1ePmP7Hd6GStTvQRekM2wFbHQXR52nfpT2DYXrXaXx6WJsARkMXpSyCEk9aPvviEAHp",
  "key13": "t5gVPDdBQnyFqoUzykusY9kWTD8VsqsL2rgKAdkuv84ivxch9Y529USdfFnKKRfmDtL9bts4XG7ntU8tdMc42Dc",
  "key14": "5ZvERZrw2ScU42gDwJFwVkgzm6AmFeJLgZq2mYDm8mzPoyWKa9Fxo7N83AriJtmY3jiVWB1bhXzJB5Eib3aDWn2o",
  "key15": "5kvw6ANE68ajA6WLgLj7DXYUsf92HnFR8baDZeqFsoX3baHLaSvKrGZm6KsAdCMqXWTnbMA7frsvRoJpkMQPV76w",
  "key16": "VbeyofkQqqotqH1LXXM19d1S8h3na7nnVhxbV1e2Dab7QmSRvHzeyFwvwV8siRynzqcBKBFLTFW6gkJiFmoNRLm",
  "key17": "opV2V4aG9WA11k7Y537KMLykEwfMVP2ctUDiHaVZTuXxcCR5dqHBQVfdV2Egx5yMoP8pYoPbJsRxi3G6Sn5394n",
  "key18": "4g142gD8XdExZYSKMLHidygi23LFWbDVAeqb9srcuzp9zUTerfDQACuLSmoZtrR6tLfiC3apk4VjLFgLAWXjrwJ",
  "key19": "58QsR2TcZgbUAoVcVw4iM3gyvBJM5kii6aPLUQ59ZfiyFNmcZxPfyJacqpWBYmajTXqVgKHYbWo5NNSKnajs4Tu6",
  "key20": "2yr9fgqWfn7Qp6wuLYSp5zmj8gRuCBgjU18BbdWvLWazrTyUvp2zmMdAV8Zy4et8t5gsPcjA5qJRg5h1LYLwVhv4",
  "key21": "2Y77cvhaW2np2oWxtPmZGEo9r3jUN8QbcdHatj2q1Sw3zdnGL1sPkUw7Mhh6tuoLGvCNouvTMCAc9qnfqwLeCYY7",
  "key22": "n1NhwX9hphhUMyAbAyo9gjLHnjEVYeg1A9276sLYK5rBpZgg3bGXdL5rzPgUm3VL3Ec3se24Zqjuykj4d5zMVDn",
  "key23": "3f6fbbdRXB41ibhticc2aUqn9iWMnhA2SQSXVBxXTWQthRh7a5hMddFKdXLbhi3DU49YVcW47kFBW2Sm4GwAiYz3",
  "key24": "3MYiD6HSY1jM7whWUE7CukUVBN9x45FxfFtBJBH8Y6X4YAW6MwaLUqQJMjSMaAqHyWthgNqx1B5DEiPZPxPtCPfr",
  "key25": "39kXfy266tn5wCJmygmBMupKPnAf7hxyqX2FYxgF3wXWsB8hF7CubZkEiK7hc9tyE2jxEqiEmpXB6wbXBxSx1Ds",
  "key26": "5yEqtwbReh4UhJ2kAHurZBLr1dV9q2qYxjybtBwKoJT9442CmigFXPJwuPz8hzG6NfFB18VoMGgW9G77vZR63yqt",
  "key27": "5dNfFgmrioWs3tdBhmhYfRvGrnWyzGGHCK9MBTeXWiDRvnPVpKi7L5dJ1uqyNr5Z7rJRA4FWcghEeuiotfGMxSMV",
  "key28": "4C8XDXoG1nxNkgAptvgyhuyPk1fB3Xp9xtTNSTRqY6FN8MqidJUmgBFsCpm6fahe3nYfweXYd93mJkR6t3MpgG5M",
  "key29": "3PcxJYhb3c4Bxf5ovf9YbsucpRRYRiYifdxrksxV7N95jzcBCMcQv73Ao3WvAdUiehY8qVX4ckyEkjhW81AL2d76"
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
