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
    "5Ruxsk7BndpdqdiCBSoqZjkbF35yDnJC3oc25zKjbyb2bPfM5mND133HwvQesjvFRtPdykLbYQUvwT4JtA4BjoBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wAKUCCoyokL26HoMmCzNPZJab2VmSdp7K28qCXmebc7iJYqrVk9XcS2wx5PzbEPLhWkhnbNbUaLJxmDjg452Y3j",
  "key1": "3ALDfre4QMyepG7FzobhZF4imkoaG6BrNHJXR67etbogyPQGzV3FGpteEBSYaRjvrcnmaQVtfLqQDDcGWeEHQmad",
  "key2": "2VYruv6EidS6xrfXLtskv9bb4PF2LJPaxaLYJHHLDEb6mseTsA4VFUHJxqhU7Lhy5asEfE9hSdAdtue9QpNACGNJ",
  "key3": "4eJSXAiwL47tiGTANvPNperBdzCmuVtjXgiXPAA5CXY3ZM4BAoCi1AmbV7GnzgUSfzzwnWdC5LgdSR3sgBoBHnTb",
  "key4": "2p1qgmr6diRNkPiW5iXzbfiZqPvGtcq8kQSwmVr5GRtSRuBgQB6hvMXjmcB2DnYZuFXz3SDRJtN7k1bs9zNsr3Tv",
  "key5": "2cLKNkjSohHsG1jYBx13ikVu8r49ix5hvVxvy5tmqtgU6TTnVMeogcVjVt9ka3w7JyF4ngYvGR4d6iNfV4f1bfSw",
  "key6": "2wSGJVLKzwFwRMJDH5XTjqpkv4HL74g23fUGh6riyAnL3ccGuTWJfSjwHJCP4CFCDu9FpRVavvW9YRfJ1H2qywaW",
  "key7": "5P8iF675MmT5Me2dph8fneJnhKWtZfvJ6mrRXpTg2TheFpx2aQjdDHVJrtvpLNvJMt6QNMg4dLaJU7QPDF1ZnsLr",
  "key8": "3cUiEMFWBbacnAiDKFtSkhK3cMmLc8rrgEUbDBHTTXPgSXYsxJfi5APf1P9dtRvqxdhf3LZn8T7HyL92UPmXL2a3",
  "key9": "5YSzKjT93rCAtzRSdV9CNxLnF7Qhoqfd3FPU2bLFrukMvFVREBAbUBwzHRoqu7keBDAnEhcCHPKKZmodKB6L6eMD",
  "key10": "2HShMcUrnZYfhNkc5aGVHe6WMHSPxLPRJSUytaEaQbp83afD4je8kWvxH4QFnYBaq25nRhJZ1hj6Fozyrs8gVTA9",
  "key11": "44KwRoVetRqU7mmmdX5g3vMjgCQh1MU9mMBeUD7oykzXSpej6JNig1DvvHR5kawDiqSDajJkRp2nS6UB7JoTGz2D",
  "key12": "2z2iKWeMBUQ1qTipXBpA4kbvJRTC7E5RJM2E9mX6As7Zxb5kHDFeaB7rTfXRGeAeZi7Qj389YZ1PGx8LitFZZ5Dp",
  "key13": "5DKRbveUsZ6yDY6UxBztJf2uPbCwBFRMBbM7QCj7GSaDi5abwAQsvyHARurFasTaBRMztwukkeEkZGaUQATdCXPm",
  "key14": "3P7YsLwezoVqezLxRQgxRZa81a5UbzXscWMc2f71Q5sHmD69iT93ez2U4TZd2G5Jp4o3Sa5iSMziaV3R9qxof3ET",
  "key15": "5U52skPdPLNg1AJ8rYXzowaN8zpK1QjtkJfHeXjasrwJmaKyefmDMC7oGLc1YX9jrFLmjBHRgoUUbvpesWu4n2HF",
  "key16": "4Q1Vbi78qp9QasLctnAd4AjgkcESD6DxjLmUjJ8pC9DCzXdGTKhXYZU5844xcYUShsitqtZKstfAhYrjbTQV2KjL",
  "key17": "CxvHXjkA4Yy7JehBmXTwhMXiybvvrjpwckeYzbEHhMbCWdZAR9v6uPWqGGWyZ9PLgVJjxSveAvXnT5sUFV9Yo1P",
  "key18": "4SpbCxvXPHTVyzEAKVE1o5D3RDxs2ikgpDdRj7qi62Di4hsqYhQe8BEfuGUY2NUaByygZrjhNX5D1u22tE9AHjNp",
  "key19": "nmjmMrQV15Y6DEXN74kgDdP62sWa1X79HcF9Vpx1Vp4zMcPBYZkFGQ8EtXHE3YmrwqpCwUg6BRoXeUgeHatn98N",
  "key20": "3ruykWsQvVVYeUUfySNbf7gozQy6mtdLFudj1TcDYZNYuVUgtCnG9rwjsrXwqRfFsCgmcfomxPaqWrq6pm2V9am5",
  "key21": "48Ev17v8jcfPx226YEDbxWK9Pf63QFGc9KSaaW2dkoYZT2ZRrGQFw9S3wVJgNb98eAMjS6e6rRN1RjrrsoZuV1gj",
  "key22": "3Ed1GqtsaHcvFGhzx5ZMfoZ3euheRJ2SB3tLmQqGBnFQvbcdWjivznLz9x59iUeLJUPE4pdaM5Vkx3o6WAy8GpLV",
  "key23": "tSkPvPfVeigTx2A42iLyeQoDx3KWaoy5saDMTTfhHagKeRXuSE2DcUxUrRVFBAFTwSmTZtjrfFzUNjfMogEa7H4",
  "key24": "4nHKRrT71mQvqGQAbwXnK57bgLUhHtgACEf4x5G81hKbry4jvj2JQ72U12t6fZjcJ1haJFKZ1XEsA1tVUzUMVygS",
  "key25": "2gxtWWJ24ZFpSsCAjhLL7EBqPfjsW7ExE75eX5JmfHEQCrsTgnDxkif3DFVKHixh39Ub4EugjxqGm1woYCEXtgaB",
  "key26": "5tfjBNxBui38gGgMgx5vWCAN43oWgDGEGVGUctpcxRgPMq9EWxLBvyAs9XbARrzDJ6Rm7Y8up9ajVVcyi9ZYeFPz",
  "key27": "51N5SEczLAj8ja6C1RFK4Lb3L2KGRwjHNELP2cDDEig88wxkTjYEnQnAWqHoK2RXLhWsEpr7tGai3esnLD6NxQ6N",
  "key28": "3bTwoL9bUCrDxGZofo1UJG77VYhsKvoxbJqzzSi4rnUrxAH2eTDTZxeV6HR1bXxEPr2gNbLCkr5NJDfxRV8XHA3S",
  "key29": "35cSNm52z8jD7XCv9PPVedEbbQdQULGdznDJkLNxZtj745jYfDw9Cqecv4JCowp4gRfCjQAzUtSLsmAigwLjnjEf",
  "key30": "5KyVPE6rq7WokUbdLXjRAvNaNPt1ehoj1KBnqtXUMKCfRudaDXDF1LcghYFQYoUSnUVp7HhBPcbr2sDdBscYgW7i",
  "key31": "4u2XiohC352Gs3yDDuGD8R9Jq5RR7uG6yZgckCaE6vuXo9DkFpZhTYrvvFnA56meXmFCXBEYknmh5ACXKox11a7w",
  "key32": "4a425obdQToyW1sv3QMniZsKKcGMV59h85p8pqiozWyYrqXc5geDfCVv9jSYm5mkAPMAxdDFks2nQ8bmeQSQnd2o",
  "key33": "48T38eBmbimkrCsx5fz9th5W5wyQSDv4M7nRQwXCPiFid1KGeXspRvV5byYBQPYtitYYFjWPmdf1VFmFmwcWxyX",
  "key34": "9kTLy3GTprcfQWqahDYtKYmcP7Bzrq3S42aaowYieoddmC2EFDcDqJuwGfL9sT6dk4Gt39D38ykwqLU2nc7KX9f",
  "key35": "3vWK28Xi2cB8r7NYdchgdQ2b3wv5mdWdTWFMiZxnUenQcaeB5T8CQoi9NoW8nWiG5sBzgAiF8WkamgCZENk9zid6"
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
