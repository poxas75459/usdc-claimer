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
    "5qKEtcSTNurYaCugWSQXRcZFPXcSk4PmTSxm7yoH4Wu9L6FdVP3fBXk2auwXn86suJzjpKmr9EVkMttBaKqN3jdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ckkzaunFz3uaf4ZxsbyAPZRHfJc2gzVWza6UPt5kx4bGdEqxue4xx7JLZaptQ2FbmPba92gzXikzcLxUED9TBGX",
  "key1": "2MLCJs6SfzYZ9qe6oCUrCwWFxdJEG8uUHJyMbwaarpmu88J8ZrxmyXjqkuonaHSD2Fn98oRZt9SXhmsu9ixvoneU",
  "key2": "4fRRsnf5TFULYxZeuejZZTsMFauFatEcEjpd8jzG7CyNz392Apo4yX8ZPPGjjofiXr7pYRMdR6wgpZEKkg9WPRt3",
  "key3": "3zRM2imqhNsdpQRzj72TejUe9CHTZDiVuhrhSZVkHn79hihea2jRKXbN3avawr3zA3qjYnk7mxZSmX3SBjUjkLF9",
  "key4": "3CbPyJe4Q5ZibsZL48hBpsFxno6D4ZzpmVP5SjVMv6KKZgpxRkai8fMqZWTdduxNqTAb7ZBZySwZgGaFvcuEHsUg",
  "key5": "4MXVD6ricFjTm1gHofmD56T6C6MwAwa3TqfhPspyLu48yo5cYKj4AnCGXYzM1oXzHC4G4DcxiGS22wYHEDYUoxa6",
  "key6": "3JKjut5DzYtSLKwafrXnANbvYBMGdh8pQdXKLbRQfvv4U3fpX3jyqRbDGGpVLjUJPAoqRMqXVb9vCkfP37SvXwzb",
  "key7": "5RXMB1sahy7joiaaERYn6dYupYQvXyftBgmR3v66tXvgxWBWFyMojeEsKUeXRFwTJNgyQDGbYPoJfgrQVPYUeo5Q",
  "key8": "4UeQ72bTsndfvQV5Q6inmLkmNM9G7Zh2AyEEDdaetpHKJP5Rhc1dVBWt8SMn7MxogkBosLxoQJWNdMATzM9eNceE",
  "key9": "pdWbiAH38Fai27Ur4di16cpFdqinxw2oyeXGXrFLZTrr5K25NcQPUKwapQGV7RF7yPxoLhYRYVfm4RMZfsbhxMv",
  "key10": "5qX6HjYqnFWFm9U6xypLjuuTT8ZtvytRwcNEdDVPvJkumQvih9fMhJwYe47K23HCR4Hm7pyaGahopUMNcPmRYwDe",
  "key11": "hbZXE4GXyXarJJMnAgy6G9j2uE73GRWa3JCUkRokFLFpjCzLjoQsovFBv3ZyxtkdyTtzXBe2hVUARSeKTcm9RNM",
  "key12": "2DCi4smHat1U1TB8ZFTrHPCkW42JbsSquTh219FMnJsvZqkm28mng8fmVz6127jqMxz1EuUtahY1y8Fj3cdrB6HH",
  "key13": "8i9dNeET8Gq18TcfKvkapMpSVfKgC8v2mHXNHobB79DJ2oQYsg43WEUV5uY8C7L6JB1ErxzyTznxrJKphhP2Rzj",
  "key14": "4LoSJaeqGHx7Py6k1gPKfHvzbeZUKvvf1cDvrx5gnK4cLtT2n6jMkcvQ59UZypEPSf4rp3gCC81CsZNtx1bXtLhC",
  "key15": "2LHTsgXCnnAYHUayZr8geog23pP3p4YNtpU9U7G9SAsYxXgqwKtduUDqfv2MN2KpGDSr7N8Pp91SzjMZqvsPXLt8",
  "key16": "31o4vWAUw28wPPTfsaQ4rQNDhfWRss9Z6Rg5o6jrBTYcC2XeY3K61PGKhtL1PA2Wtc1HtMqdjL44muTNTghuCciW",
  "key17": "4bGdNhegKrr4DW276hfeyFNCEntpGiuoLS9i4YujGBqUoU99UsG1DRBvFf1YVmTDgATDYyvZbM3FzyELRXvUnCRe",
  "key18": "4neNMCHigZhMFtiTUVsRc8dksReZL8MZ6z4E2MbRKdjqvmUBenjANZf6jSjs8VgGeKBnwygpeGXjzD3QuNW9kixp",
  "key19": "wGMtbnNJSr4U27RnQk9HT6u3Qf8T7ab94pjpQiA1SUkSgHp81UjQGVcDtgyozjMQUZspVemxsrKUaW7a3kvdAeF",
  "key20": "4ygTFA4SGrwYnfrs6ViyFr2VXG3iw6kuJNNFfGCF5qM9QsEriCC55b5HLtRJTy6jCFEvQ7Ap2CDTfQZK4QjTmHKp",
  "key21": "KxcHhWhU3hZXr4UL4bJEV3zfpvzQ38S26tj5BKz2pvSFge6jozLJ7CL5jMM85mHhMzwrZjX5PZWTzkjMBkMjd2J",
  "key22": "5VA7GCbN8LMLtZYkDfZnc6xuaSb52wXZYiBXKHtPDy9SVv7HfWxvTE7qZz1esppzJGsL9PKfXeuYd2S9APXSX2Rf",
  "key23": "3iGhmkTD9t2wh2f3JTi7a18T9z8RCi8m8JJw6cTUY9curzdQjfmgdG6qmMWrdNpTLvjKyDh14zrqqFjixMydaY2D",
  "key24": "5YjHq1cM7uMjrHTMVEArxjtbRGeGEEGV9FEYC9GKmnts8kJGkivWS9XvDWKTd7ifRz1vAJihFnJR67UUqbnHexaU",
  "key25": "29CSo5WX9pUuja8FiTV4haWPp7v5zo4wNQoc7skG42XWEj3ZfbnRinvGdhcfmwT9ziac6zdsozgJx6RV99q2EsEq",
  "key26": "2gTfwnXdbK5aYx1TSPP2rn7oVgAp6obJ36oHSHAU3kW9EpvWEQVgqCAX5F7AKem3My7ZVE1hMQFKAVEtCA6xTySB",
  "key27": "XXUdwKZPARzBH8j7R1SngskA3zfJKtE3iG9uXXm8oDdse7s9LWhkXp5KASrcVkoeCjsGNzmUzqjCvRmKVzjwYr9",
  "key28": "CKBopiZhG89aGxkBNomU2MgH9tFDPaYWdy4eaRGxaS3Vh5uVmx6nSwhaUbEywBZPdzqYpHho1jgaEq3rJCwBARy",
  "key29": "fRLEcAm1imv5DR3PXerxdHUx3QePSWU8sZKM3uFkVWbyXJDPMQnqNXskicKyUuve7VTodNGRXEDTrzh1WGGryki"
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
