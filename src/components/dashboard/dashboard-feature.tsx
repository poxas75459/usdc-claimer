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
    "4sexv816dgQzyM6Hh1ueWgdoZhBdYNv4brYcaL4sZsspAFXWXkX35UkmuTtuE5S7rAfL5Na5s9529Ba4x6DM7pCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N4FP5CPrECQYbphfoqdfkFQiyx5dmvEfKNXThTejBXrcjmMQ6mkEYPg4VTqPwGkkh9wYR3YD3PrxzBNa4v18qyy",
  "key1": "5egJJWTuoEAvEP7XyqWL9EcPNJRSCmD6o6unQm3HDcGrzDFqpko38AhrcoB8qmAvZorLjNTjwWQEmsGKK8HpgpYh",
  "key2": "XyhTW91ZdU6dQY3Nfi2jNLFiXunjLW5RMmj9CMqbtvqxAPHrKKkePmfgeMqXauzQ55VCNw7ZicRyLFhuLfZf1vk",
  "key3": "26r1EUa9WWFbq8bMg5xXw23LpUueZ6ThkqZ5Ng5iAh3Hwm4uzjnoUzeGMUKGBdX82ybjNLqk3C8kcEtf4yMDuebp",
  "key4": "jHc7s5stb5FPSSSz1QUQcNL2NF1PGdbmMY9umvDigRihA7CrWVXiQMky5Ce6pb32TJNLSboPXjZzVCFwsmEcXQL",
  "key5": "4kiRA5uzxpo3YDaetR5CbiwuoFQNVf8nBtYutSuRFp2WrQXHwp9XYW9DEYKY6z9cmAC1CXnHy46gBGh6NtUPp7od",
  "key6": "2TetWrGtGC8TS9bpkqbDsj9NL48MxopngxXkMvVny9ziRFz2DXVNQhMpHn2QWYmzQvF4rFj8Rnh63WDuRTmaoTFC",
  "key7": "3ThB2KeRnX5hh1nrkT9h3mxHZhzxv1dQUEzYrLrccAAFAwJfkE85Jcsbrv4gsBucEag7ybruC3FNVyuA5CUGM7Wd",
  "key8": "3GN1uiqH9Q72xoK5Br7ARTeiF4NqTLuMT9mQzEHj6XHMBUt8k6umXe84wX1H1Txf1MZ1jTcvUzDRsFhEKEGJ2CSg",
  "key9": "5wxJu7Dg6zF4YFWeiv3T3ERB7q1VFT8GHXsrjcfhhFY1SpZEsXYxmTCa8682UDBMh2FNweP1d7PfG4P8t68yeAm1",
  "key10": "4kQC5RBdJhYhCnPMh8Hnmw7sraDFdzbi8Sa5GCWzgSsUZdq8Z8jDdRdGejkVSkZFrsJYQLAFmjv7R74DbZKRVzE5",
  "key11": "38Pd4e8Ps6r5PvRvbqXPhM2SPfo4EgqUhaUdTrpKt111NcZ2vGkq8R5MqvrKSdnS94KNp9kqeKDfzwNf4wLxk5ft",
  "key12": "3P87NdTd1YHfaA6BjUJkEEvcdg6TkVUx1QYRVkoxHsQt1wh4C7Z3hNqxt4YJCFSpshxrk79jEroSstnSpYEgqmox",
  "key13": "2g8WwaMktd5rD3XJhKNMEejPNEr35BVUjpNwU2stAQtCm6K9Rbm4WWG9cbZ7ExtceYRzeuTjXJjHhMe3hksc14C3",
  "key14": "n6BT2PFVX3tZ4vTCr8qGKsb4rYd2zDZ2pQStf4gcSMKb5hqQxKv97epEYTiiGU8hnujsrnNihVfhc97sPbrhwCp",
  "key15": "52xgnDEzrVSCriaNSXzBMtLhWptMo5AKNzgCSZ351Rj8WhYkGkh9aKQXzdJZgBVz8g5no5KNaT9y66sV158NMUK5",
  "key16": "33bSGyZUbemWbw4mPdqSb8aqvQtTsgaitV3xiyekBPmHa9BTZjca64YVWK26NdRbwVkKJVfGosM5ZiwDaUQmhKNQ",
  "key17": "661xYU9yYgwCnZsfYxaH8UFSxPgjv2bsxPbBcUfjGN2JDKJqJJz4jvsNAEVBTRMv7TRwtdB12BDTZ2mr8CDGiBvm",
  "key18": "4eKvanvG8BWxWYtAxdhnGmT7L3k84xzD5mYMGhc1dFNiqRHx6wMXD2dBHChpfrkwM32Vfx1bs1ExP9G5vYpDBxaX",
  "key19": "4wnFr99Le2ghQpt4cDeskjzBJHV1iL1yz5FGwXsv6hHoLHxbkhvyYDstDc95nfj48YXXM5hNW1F55oFMgJfueYfv",
  "key20": "BoZtwurPcTj2DeQcrgnbfVWGkjmvUX34k9EX1J4M5kEtw1jwzr2BcnBgLBwoTxiny8ac6tK9fBX9Koy8XSeaWYq",
  "key21": "4v6mj2z51gfdFRALZGJDAcRxGKVcJRcofyGukHAEgpbm24Ma7RiMXrmHPVoasMjAAEk4f5DwQTjEvL1qS3Bn61CU",
  "key22": "47MKRF4fb6xyZ98vSuiqcRbuKwsyPSJnDAH4NRSML3nBP5r3gCuA4yq2WZ2GvDAE6NNQqdhaDbkxtj4sTtUXjuab",
  "key23": "3YQsGUkTdDY2QpT1TzSh4cmD8Hy5unCrmoYKTzgjQhN51BKBfXRrG1mjQt9qBzT9sBX7W3mpdqjbDsycpzoMc2K1",
  "key24": "wppjuDVnZeEviK84dd4JcehgnWdTR9aGz8cSaDsoxnr66o5zKBHqS5QQiQJZCaqHetNcLMCvvnYJzsj9caAP9Zp"
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
