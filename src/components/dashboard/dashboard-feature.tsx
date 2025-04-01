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
    "N5MVGGJyZaTM1exoofuLAxNxsxT2VTn2ZmFYUFgP1jrSECvYMXFDTHzU2FMQzotWBfpv8ph9prPjsyTeRWNxyH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f45S5zPfmDLutpzn3AbNyabfoMz6Z3NWDdGsC2UEfurQnPD3BqJ5VtfHUfPnfcZMpwPfTbcHgzfkM9penGESPah",
  "key1": "63RXB38G3EH6ZgUTHZfdwaKPTG9SyjCUxP2znhcn8ohh7GE6LTiiQHF8Fd2fQMpaP9LfHNM26hJ4hb1Bkesm4rqW",
  "key2": "2jedh4sdP612WgVTihPTjczESRYX4pRX5hMc8PJ2Jcdh99MZHwXZxG93SA3RHoA9sndEXCqzoL9pezHC2s2ntVpY",
  "key3": "3CQkBH5nxEh9qDhvxVhV66JRbyv2HnzsZW9QGaWCZiUEaBb3XHMc9gATi1fHu49GGxGuJ29uByoiHCPQB8XdgYHB",
  "key4": "3sfQowLYzBqQC8vAApnwki3TMS7tfR1LtaVQAh9wtyRPCq1b77thDjTRNBkygnQDgTPVX5cLAcaW4pLh9gQsrYdq",
  "key5": "62so6agPAoKWeq2JvAhw6tEW4j7jZv2dFhFUxRy8mLLW2BpDngJ6FuiGty5hp3rfp8tZ9PLcJASfLzpNQtYrzA5w",
  "key6": "2NUvUWWrCK5aFN4Ki9PV8iaFXWV2gwMU2AhtBbZU7m6VYZC3BVZPzhWy3L2HxpJDWh6t7dFiNeiKWVVpkMMJcJxH",
  "key7": "19kBecdrJw97XaiQ1BR9EpcPUMbsVV6Jg8NKvAMiqczcC4e7Mg4mTqYPTVDPJ65w6KVjmtf3dz12fdXLq54pyt1",
  "key8": "nEaP2huF5sz7M8xYhP32DjFnAUCW2qMuY6pV3enjyYmkjfj7LgHMF2hp3mPjfcfykEaACZqa8LitYaqBBZegeg7",
  "key9": "3nDwz9LXy833AXRBiQnsgu7p9u3aCLdDo6Y7RfvLALmNWDtjpLhCLyu7egSECFbwHMcxAqKtNho8yf2RgYULDPbW",
  "key10": "24E17fo8GvKJKrUGdbcizN9rUXUFZH7km2fnm91s5iAjhT22U5J6AVz12D2sbTwtr5xkgT4XfarWnhrLEkeJYmh2",
  "key11": "62N3itfMzdwTs6WsXAbYq2PKty8pbHsyYLs9NBMZ8S8KxCS6WevP1ZgJErMYaCPXYWCm4E4YdW2cDk9TPWcdA66a",
  "key12": "hqSCaVHvnK3SMqcGUxuJNGpDchQ9t16rW54D8ZQrPEZkXSueL9QPp49U5sdsVPHybpCkifMb9RBPxLYRxgsc75J",
  "key13": "2ZkDNcXzeA46BfX1TRUUKGV4Hey8cEFCqdvZY6q6AGNtxgWdXL1Y6qjEDQqxwTX3EhkNRsnmGoYjhPabZgoSo4dH",
  "key14": "wTGLqBaEDVgNFJdq7k26HSKt38zy25MiieknrrXe5QLvyTQGMQDUkQuVSfExf3gR3StS6KkwUytY7LZBG8RB9Nq",
  "key15": "3GPCZ8wf6EYvYPEr1retrjGt6frtV7j8UvLi4ip8xU2Ctb4EBv5LG6vfPv8mpS13CxYXd9XcYsQMaYUjcHcyaxgG",
  "key16": "3YsrNJeKKym7KtAqVYrYCSqcBuyUtgh1oJMuU8W5g7LXJF9ez2L67TBSs7CTXxPCyzFiRXhmS6kvQGcxd83HmoUb",
  "key17": "3auNaWGUPLzfVxDjhvCHKrJMxqztsEKSJQUZ9mcHo1fZyUVLYEQ1G6DyFwCMjoutaW9UVTBbGsNxRPxCEK3WEZ83",
  "key18": "5231mJTyfmLSzG2xd2vVsvDav3eJYPA3rBkdkCUjS3QcuGgS9JornSk3KwHt8yazXUeYKLHWtWvrTX2zXdb8ychB",
  "key19": "4sPvazHCUC58kUP2zqMpX5UsfNsHqEZReVvbKT6NuxiQ8XrQLq4ogZKPK1AEm2ys1irx6k9DiDeYcJG799ybcapq",
  "key20": "4Ud6h1k1teTosWprECSVrYCeZ3LD7BD9qzw5U6NSJFbjSqXEUHprZZAgoRhdZojgfN9oZi5SPN7uiZjmj9GmiLiP",
  "key21": "5buteWrABgQmAAwZYeyes3wspN7wNwvD57LbyK4d5mQzpcSj5WHrtDWn9e9xjUFpkFkY882YmT3k9oEBg1dFiLng",
  "key22": "49e21XCw3EKmN771utSbgpab5ENXYBfN5pU7vvcRVFFAmFNr4FCYi8TAxsgMk1i3uzfhRbB5hZoU7UpSWgHjGp5o",
  "key23": "3YpJx4CswE9SqrG168AP74tVP9Bb49tMaSchLpbz3FW83VQrU4zkQbhThMFRwqUdHEVKyHDY3UViwXBLHEZojNHh",
  "key24": "5VYKQURMYqygCjq5YHuVz2XZuegC1yzUp9qwFsPskdSjx2z2ptY2UqGhcbJYMcnjax79uR1pqPgsfSeoFJo8mZ1c",
  "key25": "622mRdMSh6qGVW9f96Gheeb2EEcoJA3R1vxjEVWMpNv87SVNH1D4TDczTovECm18Tv8hTBkhKniUUKt8cDNjAJPc",
  "key26": "FzzujUi1hJ3GW8YwqGM2XJ3w5Pzbi7rJ8xFPqrTDqtLaiJViKd8qXK8gfoRKw33aPx6oambh6dUkrmnH83eqD2E",
  "key27": "3SceuXZqnYDBEu3ocVbrgSC6Y65Y53f8RvEo9MXgkq1HsywPN3jVsc3pLwwSSdozbS3fMECD8NW9TqwXyiQiCNLd",
  "key28": "skiLCoW4H2rnFJKHueP25etAnEFBDxpfHXvFEL4BRamxS6BLBZVPEB4A3ZFvK4zivRioaKYNfF5kpoqU9yqHkBX",
  "key29": "5DsM4h9zeRCgJkHWLrMkRqbSs8t5xBFUStJvH51zuNrArxW4x3JHqdnYzLMd2Gempd2s3B1d6pccHag4fAi8T9vW"
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
