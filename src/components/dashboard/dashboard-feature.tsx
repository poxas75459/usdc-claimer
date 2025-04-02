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
    "kDvShctFMDjBedaWD6ccBbvyooFeNG4KZRrR5fQ3zmJswca1ZzbRBGKmXwRbDhf4dhE4Wys2Mz7Fz2AP9ApQSB1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21hDC5oG6hD76ia9z9Zp1tBPmbQ3dsKBkJxdb2SSNNgFvbJAeAkrJAaiVsXSunERq77CWaJWp3jMwhZE5CHVukoe",
  "key1": "63Pj9Wx9t2NGACDFtkSPdaHekZSwQw76QRMRPizvq5vPwfLkKrBZZbnBTJ5DUGWk4hvJjyWutKDagdsd7joqqSo",
  "key2": "4JasGajAmK8d4P6LpLMy2rzAYW9fBWvxLXAEyEUqfdTyUJusAxyB47HjiB5KCVGYYiz9GGBUgfvvTyR1ugp9fxTe",
  "key3": "nbSsxX9MX4ySQRBKNdCFJsc8Pm1W6v3rEjvuZHDeWtEXgDHioeoetyqq8XCi38LkY8scYWuct4zEhemxuNndG5c",
  "key4": "3vTk3mkX8Q5bYT4Sbboy2DYcW6F3LwbfLMTxKQeTKUXWDHmTFREDyiXGpaX8jKTRSGkz5q1E6ZPLwopoajzQASv1",
  "key5": "3APGkQxzmNi1TK63TT416RqAK4Rxw4v7gN8CSzNHTw54c7uy5rz46CUj9sBLRQCD9LvnWCip1ma7ATR5KGzvet8Z",
  "key6": "Kod1MoUKQi5azydikFbn4TnGMs7rrMNNmtK3DCEdMnNaASpednn4Vf5KYSoiVypvn2PHfDRHm3KdJnXATxnF7c8",
  "key7": "31FPqJ21BdxpPmNtCTcX3YkRACfCaoMQWBENQTDqqeKyhUd2opec38EFFssiKS1S32TycjQRsdBYrL88c8kfNUTU",
  "key8": "4R4a3BgtF3Wx3FZcKUJmhXaJkaF7SFDodxPhjFuZhAbgTFwy8P7q4HazveUfPek6ZpnoBsyF6W5K3Fr92GaUTjzg",
  "key9": "5cGUDNURh16XmNh1s441LrXdwvdPu25sSRZ6967s2YpWcWRQ59fUh5YM6CQciqawE6YnM6z32Xuh9wzjne6gLbRA",
  "key10": "5qivmjo4W9oPUqGsenYonmJ3YnoGaqA93Nf86B2SzwQPTCLKMu5yPgqvgByZ6kx7TzVAYD7uv8nYUcysGod9W9Ac",
  "key11": "4TvyfobWQWmrw5AVVVbHWVYpJNkLq4aWWSUD9DUyZQRjC69dmiq9tywSvEYLEXfF6RGdZ6WpvfzHe4MQdA81TLwW",
  "key12": "3yX3GwNQq6h4xEBg7i7riyC7WRxSbeZsEvt6vQXYV73gddeAdvRX1ZYu98vm1bPeQEhMv3UUZjXzGd7gb1eUyeN1",
  "key13": "2TQihf4pu11pbc25VT8zJHcLxJVcxo9eXZUmDUFxmW1Z8z5By9FxGp3nmBN3cUYfneqktrhQATFaHvn3tPAP3VGc",
  "key14": "38PB8xzQpGsZLBaTZK8Bwjc3qSgijWc6ArohHHc3faBZqLUTpBLPxa3GxEtTj8iDtAsE88w3uW5xorkmJakqnsS6",
  "key15": "5Jc7Z8jTPi7WeDzjKnkn2dHLn46qyB7puAsMBnN6A7SUwVUJNKyxULAahhA6TvFjgjv6PJsy51G4avHPRYjLUPDZ",
  "key16": "66tqTJhjbZCorxHqQCG41zqDdgX93y47PETaiVZxQPRH8Tyfd8phDoFCPYEHnrUGvACQNVwz3g9CnUCmmSfkSLTA",
  "key17": "4Afj2tfXtdLzMqRkRDycddzhpdZvfBgjBuSuormJsJYH8YTiSHe38VFqSsbxHv6goU48vMNjiqzmR1VJe8Z2z4qa",
  "key18": "5fRhZZX7pPUDNPr1kN9QRc6PxvMRDpXsKX8KeFUsKojn8o6dK2MXMUatxE2p9fhapXSuYeQBGtSXAyrm9iJPKX3a",
  "key19": "2FLApDejBdXeo4TaQWr2yoVvDavf4HKUHkudNhDcUiQPcKeKF2itEFtArXhH5ss6toPxwpNcPB8myq7oQqSrXCp2",
  "key20": "mUGXcVhnPgUAypeXNDxxaQcZjNfWZ9VgkBCjX5THog5o8CBurZ4cXjd1aMSqBs7bMyhBrBN4MWsPWzC1JHWT1xz",
  "key21": "27asPz9h1bxE1MKSmPbJL9znsqFbziyrVfn75Zc7fpoKpGyaZWiRFHgP1WPq9m2YS5WyNgtrdxLtvWeCyUdDAieK",
  "key22": "JLiPdNfSzWuFUZuDSk87k7A5wEkVZgKodA8d2NBqgX7QioXcMhjKNwkHgBrUJe4s2d53wJnJtGB6fCVRKsW1TDa",
  "key23": "2T64wuM1beDwA6nd9BGkxWjFJFMMkwa4rs7h6ec2obiN3AKsFnoH1cCeeUU1wJf4KzVdFP47Cegu1SayQ6ZezRVQ",
  "key24": "J2nQKdjtW2xW6qSGWKrqkXqKwVDdZ2C8UHFJn2FRPy6MK5NtJ23yk9qAemHkAiVvx2XscU56ebTjLWh6DEgAKq4",
  "key25": "49cDRvknwQQqegkGQVZp2SrSkXTWjMKPBpQLaDUYZ7H7DjuyznoUoqisAMuULsbj3gkYj88GPFuM34ncG8giugT8",
  "key26": "5NH7oQ96zHKdPscjAmhF95tSi4DE5KHrU98mhkwLRw9K5Re1KoMSjwmRJaBE6U3Fwv4QrJWyVijUwQZ3GgPKYkMQ",
  "key27": "3PatHhh34L7TZhx3EP3b5917nKG5sAM9vVnvy27GNj8hvdu9ww6pqN1aj8Q1SQhRcp71UW3tKo1fragfQa2yXRFg",
  "key28": "3wiRYhvdEtgTtg4j4rjLSVB4i6XPv4H6u9UBnjPHovRJ2zM1hhSXmGz4bC8yiCXtJTdbrmbso21YmnXmDDNpXtpY",
  "key29": "43PL2Tctz71fGfpeDBEDUdMjWrSCm1RyLEG7DFpGTNcC6DUNcZgqXb9bkPcTjjLmGT8YLWvz84AMYYs4KqQWJceM",
  "key30": "3MY38hJT3M8RBq8rgjD7mmQkktcUFEimXhJC7uR3WBe3yo7AApdkB4hvPqQzTy61tsZiHdDac22SUe6N1q1zaxfc",
  "key31": "32UUDSeMhb5dgYPx9bKQppjzuvuMsbhki4L5UocfwFou8LGK4TwQqsaxJG7uoEPUMa6b1nV4FAQHJXg97j5NsBu",
  "key32": "4XBETuVyoNd7Nv58EgRhkTp2Zh8Bu6QLUYzYPRgHAwVqjhPU5tC6T3xtxf4Bz9fgsJTzkXW7zM4Pd7aGoFivF2zR",
  "key33": "vLDLk6XWUi5U2idA6W7pthCX4S9Hfr9LBBzvQmvyP2ytRBaSmkjUGbTi8G5CfmugiaovHG2Ew3dG4nVAJTVa6bL",
  "key34": "2mfcKrErorLB7SHw42n2Jm86bREk1GmoP3MYZZPtY1KuigQW5otkyPZwaVtvd1GAVkYaf1rgiFhsUaFTRCfrP2iN",
  "key35": "iH4DQf9id1SrTejQgz7Nr2kLUtqganvRa7MtsDsU9FQTpjYxy4iLfShJTAGVBAJsefh4rHcX4dfuDSFaRaUoZao"
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
