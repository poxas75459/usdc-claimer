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
    "3xy8jEzFMZFsrKvscXeCpoFtGYFDYqvgPAdjWduJMbYBBY8EuEN1LGGkrk9B1wanDfK7oTknj9FYGaDRqE2WkXos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BnrpQ27dFa15Q77XwcMBMSiXh5retwWBGkvtq4HpEWxgRGHjTFGtD1YyG3CUS3YfpXPGrjfx7J4g2jf8Md2J1KG",
  "key1": "2hQk3zHPa612ZCvqR3nGhi46yGS69QeAGWLL49Da5G6vVSEtMMbALzKsYFeMtEWinE84YzzK6VwJRTPAmd2bm2sF",
  "key2": "n34zz9b12gWPWhHZnpoe3Cmdp9pLT82PTzmbiqtkJJiqHk8JR6U6N1SZCwzfYv8wdCeMGDo8mvTj3xxiHSbKZ5G",
  "key3": "3CeaNwAXa8uREn7AZvspv4QZPRshvsPEofd44eEfCUWe4RaQxPpF42bZXT2tR5DXkWFAdW5buW9XFwZ8BZUgYvnR",
  "key4": "5JuvjcLL2piEvoAySDTcpaeKdj7yqzQXZXCt52xAND9shmrk3fmkLM8gg4xyDiE1nMCxnsAE1MamkYJeUrbQ7ZB4",
  "key5": "7cQ5cVW2guL2mGuuCBK6qmtxjgtz3zY4qoixvXhVKAneVimyqtG1mnR69PtZptxwbBm7XvSQmpCRcf61wCVGYEB",
  "key6": "2vW9Aw7SwPWCCyGjWd4nBkGMktbZgxgUvSK7G5GwnbG7FEBijLCkJ2DxsKLXQbgJ5pRewABqz4Tjdkq91MTXNUXg",
  "key7": "4yQJUUMzTvWN6TRL82GyTs2ECsAiVBTd1Wr1Wgnr2qKXS4JbNeQqDTKmXEjojX64W3Whw5ii2hWBc23MpmLXvQNz",
  "key8": "5ZfQB5mzybboLSHXsBPSfXFiBJZbYuHrf6gkfKbYebFa9eehgw9rgEW1bWe784HaoHe7rsmBxd8CpDCLaHWct3Ya",
  "key9": "qtGzgPnhaXQjzhu1ZYn4Xfjqf143f4WDbi5weYJ73QrodgAYNe6hNzrwbooXLpUxSswuvhqpLBVShtGrosRccnE",
  "key10": "3qwVV8XKejnaywiMQsFRNopM2GPGtviVbMdXFL3ujoHSm8jAt25RRa1g2G2zMMrD5iTb58rFTmw3gdFcayZ1KcwT",
  "key11": "36CjRnkfDyY2tw7vG1X3SUGNWQCWsdHP2raN4vRD3XzBmygiy3wjxTbzPs1h5LW2BJxEjJijkUxm7xFngZ4rdq5N",
  "key12": "4mFHJpX9oso2Z8JfGoZNGjtMT7NhZBAFezPb7bgqQTjYb6WdG3oV1sS5yEzzUiBAiJfU3YGNW7wwsSSLzaRPCXVJ",
  "key13": "5qcVuZ1BmfiiNndwPaDgeP9AZjmGS5CQypC7xqPkzTuBqJidK3BXcjqt9Jj4m333ediEH5tYYwPNy2wA6VXGaJKg",
  "key14": "328nBjWcE1xRt8dahQGkPm13AjqjsoY2FJYGGkiw7LqDXqSnibmmYRCGiqiuTh82ZysTAUmtn7AoXZkFFkcBebmu",
  "key15": "59yUW1YzeJQNNoTFDK1ka16gLbsu5QQAFU36ASQLC6MPMxLJNMVrdHT4VqMxe8aHPX4o1BRSScWuFBzXkpweSeDF",
  "key16": "61z7ve1mmpQswQDyEAxT8HwzmZnZAoyPwQUWQfriTWhoRrkXW2dQSDMDwK5gvncmZaMFsdMp8tydAGQjanxs4SA2",
  "key17": "4RcGYkkLLxDTmkEeMmV2cFp5bzh4cPAgLo1ctrRGezdvf2xuXXyV1dua1jZHLALcygYuStorZzAb61DZfu4gqLhG",
  "key18": "9u7C7HGRThtrisPhwseZwCHyWBRJ9VdVg2ov8Jw1gTGNGukUccXHWrM3dSAfNGTGbfgsJKX8Qjrm5qbtaVRRo1d",
  "key19": "sjyMnCMgQ8FANbkw6XRpfKFHmra7vXTGiy1kuSPxxpJeCtBE9n2ynkeQdLahgQzabnAPWocyqQibPxE9E5yDZoR",
  "key20": "281fM3GPDkRx58RxPM4sSXvQiXsZX2zL14Mffv2g1cdwM39HopjnYCTJirnitZASY9hBj8diX9BYUu9HKXQvdnPF",
  "key21": "3GPp4KDoJGhZuWFUD8sUnGiJdQQ9kxNyWpeQp2gz7jAZjr9tEnqX4y3sLPCJ5dF3AQEH74XXjzdyYwRXxHxqGJoZ",
  "key22": "2c7TdVUnG25N3p9DFUvMgccnT2oFU2oZu2qLSykNiBU1QA8sGoK1tgoNHiphMULfbW9RRkHPSTG2HSnrwQy9sakp",
  "key23": "373CCPqjV1mB2Dnt8zWd3SKHDH7fdXi6WnyYoVnKgKo8EnEii61GQN6xy9cSQwqHWGwkLD4vFQTmHH9ohBWLEJRh",
  "key24": "4NhJ5qeNfwC69aCE7kL2hMxdYn1mrPkYHN15XqiQ3sGuXaHsZnZ49Gw5vzLqZb3GcvNd9W1jLgB8HDpf3CMNtDc2",
  "key25": "2uHAaGJpWLXNPhfV2f3hqUMp3HryHKxdu92ZLereCm8irs9FRVMkM758iwJpyT1fF7A9rGsS942KUHyc3yhKsBUM",
  "key26": "5SbAmUbCksBojkAmKz3Nw5P3vt5WP1uA7jWdWzHbqWKet7Mf6NTJioZkNZU7KpcfXNEPf7yjsjeGyPH6RzUtwc24"
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
