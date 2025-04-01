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
    "bMfuY88H9GnS1YhgqR61uQVpFLvaq2Kj4miHc42PkCL9WjFqkxvfw75XDSsNMMb3wUjA2BNxspMhUSZgSHg5sc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KCMFsyTwGj3Q4vkvvxpYPtYeBerjqK1jX65y1yFBNxdPBLrmwfWDXZsVnpSC94yYacLtfpARJpXY1GxfxmDu9oE",
  "key1": "2PEvcQoHTqBa2EnodtmUkaak6sKwfqYyrMqp8Lcqy2qMUfmowyiDEy2CTDpqZWXkPbsToxSyCbZVmi9GEbvduaRC",
  "key2": "5eG7kfRRRdeGj5ejg1VMVTgrhSL6rsj6mmfbEkhagVNSwLE2NRXqjNiwaL6FpbJcBKCJF2A1GyC2shN96XaSgBK6",
  "key3": "3Mii1y1Kte2kW7HaKMDqnZX2hKcPkjzuamDWVfeYUiQ2KTNsb4jeF1gYrKGtFyM2NkXnc5ThJNnpy5dhwMV5VwgN",
  "key4": "5iTFgmcnHaUsSYJp1yraMJawcK3pUrKFhYbuY1TN4LiAvbsBorSLBfYPras4EEuBr1beXNUmaNjKyJUJb86xCBpw",
  "key5": "gEBLurYeF98tqNr3V3tTK2XVoizJN1XDV2w4EtVMkyA16mbKr8n9UZZc5ENKy2LadjzKPh7tyFMrwRUTNwJSY6S",
  "key6": "JLho4x3M6HCVC6mDJTLb9KttsauWH72NFc8HFaFs61fEZ8WSKmFE2MMTw11xCVmaD77o5VLMHvp94cC3W5x9CD4",
  "key7": "nWH59exCDzdJswqr7xsdwvWJmsoAQbSj5ARxvxstSNdQ4mCUwq4i1Ca5d4GfJnfA4FpWYZNzNsVUDcfWXoqNaa4",
  "key8": "Kbn8yKWAfBUGmqS7AtBXecZQYSCBpsrBgi2XPhBsUEKPFw3rM2F8NcaECW4KHRP4S2zpTY5bWXjWUqY9T8Dz1fD",
  "key9": "5qLc2WY6xQWT4sUz4hKukhojeFTSGqArFkqcU9RfSG4GK9oD6ksbwzFBEjrddQNqqi7JRMnkDrQfurtL36oSAq9F",
  "key10": "3kLquiA1TF5edK7BG83zeCpNVntrb6pBMTFYZGYyTz54hD9Ph69uhBAZ8V1Ykb3cfwGRSujov1igeKkjnynkUUr9",
  "key11": "3XAMM9AogyKsS3FwvvteXs6rKJvvcTbXreCWhwtLpCs2B3bMZ3i12mKyMPzxcsSiwv7GUJH1vEdxFtHVK3MYVybW",
  "key12": "2vtcumjeLu8dUEKqXKaYJCJTsTqhHidvopmzTVVRM6b22Z8N5razLPLuWHSkL2nCaezH4waWTRcJUqEMZwUPwoUc",
  "key13": "2De9aBuMtCq7nX9ZCcjEe3G1FEGRZ1BUtiNraXbjhMiNkCFr2jTH3cMvso6BXrd8199KiMu9NNaicpP4CP6jP96K",
  "key14": "eFyu7ainxfLDeDRcRkGAqfkLsHdtiEmJ8joscmFMyZfkCa1yLqFyv8Th4UyABfDsyfmmxNvVoz1ke2mJSWBXdxu",
  "key15": "3cAeTaXiCatnnnXZL2krAX6EGto6KQranFAc1NPD4a14yu6sXa5fuu4txLye3UBKCiJpcDiyWqwfBJ93Xv1zUPt6",
  "key16": "4VdAQhKmirFFWAtZknPVkGczLdNaHRtwa2CBoa4ok5fUApCLaP7hVaE8GWLQYwnXAkUup3XYu4HxaEReSM8AkQbu",
  "key17": "4QzT35eyrxQmbwwU6gDpqW38qZxJtTgh1pqHFtXNNFQk53sTMK7tdGdoPPo2Q93vJJNnoSYQP7wP5L2sHJCg2a6g",
  "key18": "2YAdDPfRbLEBs27XJxtLMAgtXa7GLvkLqh7x5xVHBY5HfaYifNfTdsaeF49a5YnmKW4mg3Bpck7anaTzkg3czf8",
  "key19": "2baTvbU3wJQARpzSNAs4NPmCK25R5RriioVwmVz9CeQsBArWBS5517oHipASStV3AAGJch5XrkeCsfKcSttPhfWW",
  "key20": "3h6YeQoH1VsJCabUqVSwh1XLya8n8MMKBuRvbHo7be9UubixGnZA2mFzoqQbmiJdDJJWPdQAv4fMAy8HbcU6qfQb",
  "key21": "3ZYjvZxqVoywtoBBh7P7pnbyWh3Qo5TM66Kgsg4Zz6dDghyw1K2Et3pwHwkHLF5BKDs6CrFwCtdirrVdkVh1nN6S",
  "key22": "5u93oHzcHbPhBZTVtenttZg3pejzSkeRP2ajnYnJhuJUqWJhJMwGmYePyy8ozMHH3ZLEfjXNowYhjMb9gBFdJiVa",
  "key23": "5RZFcfzQJwhemqYn1hx9mz78bqnr7pQTWi5saETxHZYE7dTQLtwM7VtKvYPRnGh5bm55XpS68UfCxMfhfbmJjRu2",
  "key24": "MfyMdMu7ydiQKoNjS6WcLuPcJdgQ23qQ3w6gA1B4bn4PVnHmxyJL56ySqze4kupHgXmxBmm3X6UmA8A1MWrNKPa",
  "key25": "3JdcKemJ7zKEamcosexY4EXsQU537mgbM7bRnWLhD5JWEC9NQJ5nMMBzdpaitbTNqCTrza5A35ZUaRcbAxkgZYLm",
  "key26": "5LSdywGFCVY64V4KBK6kNNKxrKiwZ1pLAY85RDsfaR29UD1bK3GiNurHBMQ7TR8X3ZqfMBvfb6kwh2ZVzMUNqy4L",
  "key27": "WeAh3UyxMjrbWQhtRUBvvfAQmJ3XU52MSb8XgGeZQk63Auv791kybwXnjULKTLm5bfxP9tWfbADQo4meD13R4pP"
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
