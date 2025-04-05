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
    "QMbFzHkVLu8P9SMY7m3nt8hFNzWVAmo1AcwHWeVcAoPDsmdAtbDMJ3ahb2MAwi8LhcgmwKRd7RBAY9zGbkogHxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eeWkuhB5KXixXQqeEVvtkJbVs6ENFYCGU9F9KTr43mi4oNgXRsWohLU2Vmm7LuJjvHKipwVhFRMrVSHppfMrMBo",
  "key1": "i4bSjPPQ7sUxHa8HifQdQPBRxxEyEbMph44zgocPCBTfn3a87oVGBpytZd2VqwRXRY1VLrdmqFKwf8JnBdpvRmx",
  "key2": "4MFnwiRyEDveRaPgGR6oYJWb7gER4H1jhUdBEbb5F8X3XE1KsVXnPwd8bKnkoFm6kp3QRVm9WDarDY3ZvFf631Nf",
  "key3": "4UrHRtZagwd6F1zUcczkRCW3fU8i2czrUMfw38Rnqn1RUTzpUcF6ooQsji2ck8zF9RVgMpBWwrvBxFu6Eg165gDd",
  "key4": "2MjEUxWdgyLL6tPbMg9zHayCjd9qY6yaTXwD2cPqV6q8hvMkQP9Q3xdW36XXuoyknvKs5DAhKXUsK3m3EUxUbMpC",
  "key5": "5QYnN1qffyHhpCeuC3HiNAgSLk5PqN6c5nkp2VAarHxEACfWdNdz1jJU9wfRVZuF5QgQ4UCw2ZJZ7VGwsHKFtZd6",
  "key6": "4WDqSnAc7qRbtfi9aty9S2asKiMZ9HVYeVnQXy3pH84mbhoRg8whHRBdFSDe3UDuEcdjiENp9yeBkPsy8VCKyiif",
  "key7": "3EvwqNvzxCzCHRPzJmHUNoMeBRypQpmAfrhXPSAu8SgS9bnvw8KnSg8MF8myEPEzcwuY6sPWL8iwwM1MyrNfkbk9",
  "key8": "2MAmxYBn3UuDFv55BACkTdJHnq7xNLjYnmUGSLUw1hJNxaeFWiD1Xe8fsAKRMXiaQNkjvGBPpQ8ir17JWH9JF8KH",
  "key9": "2K1ZVD84MzMdoq1MqoHnHDf1VMKrF2sZETvP3WJp5VhR8zfvAitwBaa8rXyehppBXh4kJs8rz4uuX8r4hVLFFY1c",
  "key10": "25cyfzqoakeUh6t2fjjUNAbT1PafCg3YnoFYYF8cDfb8DEZ7Ur6F5UjQB8S6vyZj4RngtxSPNmWjYfGhfLw5YLov",
  "key11": "jWiuYoSNZv57SkEEYB2CCWvpPUMUwPuhgS2FEq4JB6zyF5UeQfpunQFu2VrSGQT3yJsTJjWyWZ3GcxBSVgX9JPR",
  "key12": "4sbMVdMyvXCfQpDrkggdJumDceC8bjqqC79ktLPmBNCBiv3gexnJePqDhgjgHJy89rGoYwAw4mXZyjmJ3pDYYfru",
  "key13": "7monBpMKoRz7ABuCNrsb6vVSd83esoqv1S6JGphvCKLNvNDm5LqpNLDRFkVrgJrnP25GZQ5tjbmGjbSiKaxJbCB",
  "key14": "PUCy5v5Q2xxuefDNr6ovpoGBP7JqQkxwA1zRYHfqPrzmYBSfnkJ1qB9Wbk3fdDXVSeKCELrCSgMxaBwqGDg4Y9M",
  "key15": "5JbJn8DJN5MFPguBR6rmJzKtEy5r1pPKmXVrYEf74mtUhtzokxLizbJnVaZbmP5YboYyPAEjgTtMX31bCzXj2BZg",
  "key16": "5pC3Wo8NkoPEz2AhmuX4VftvmVzBgtvWaRDTPB1fJ8ChzkrTQEZgLwgmSG4uvMWNKWYRTXdgQg2Ndd4kTcVgwTzv",
  "key17": "5H9xA1JtDRipzgrj7b84ssNRjNXvvFS7wdE4QqmG7r5nJPrBehyQ8QnrCzyxHe64x9XtPQgoUKMPkrUdReM8wBoZ",
  "key18": "2pMejhHWRitNTjvEx6et2uPwvEbBtDQ8sdJ7Vdy2WmJJZQgaY5Gqf9tKfkgBZoSgnMwkjvyisH2Mh1w8kn4MmhsZ",
  "key19": "2L6549gz2xKL2GUdMQk5WmiN2QHfmkRZ7N48ZwoUWMnsv7zqC6MeET7LzakA8q8UajcRbepTsVknhXhGSW1Tga7q",
  "key20": "3LqTkCRU1zrzGHQDzh6gtXExtrYYwNhw47du1mifkjPztMYfSPv7RNZLVAh9z7LrLvWCPR1rrzNMZoFt4jG9cmLN",
  "key21": "2FipHHj7D7XsajocKZaTAKjYJbvyxmTapdHEdRUvifXgXtV5tDPJ7Bw4vjNRujhYRcKgwpyBsv9TqCKBW1u8tnMV",
  "key22": "3Ut2jqShr9k1Y6A3TRgsdSJFxa8rioRzWVzNpyWVZ5krgRkmFgywEj3hrU2ixKRNn3bK8Pg3qhGeEeZofCMNaoZE",
  "key23": "e98pUR9jJutDVoMp3ArfZiSLE63tGrmANGmjZrV23RQJUU6AZDRsHj5zCeTXyam6hdTmyxheFNbh8KtP6BT7QhX",
  "key24": "5ubjQFNcUkU8H5F5wkhN88NRiohJ2t5uGFok97AFP6qrZVs3GrhhcUYTt5FtTJUxLsZZ3aqWLyeHq1gNAfi2p9LR",
  "key25": "66QrttKijx5FGP8fCrVvqJB9MYSzUas7upCLKehAyZx2vxqL5tcaWZtuCFu6tUmL7mYrjxteCGCdFKNnZR56gtRs"
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
