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
    "YMeMzjsQpHW81UynjqXhBHKBs1rnrkccS68CdcSGwP7suLKsdEzNQ54Fj1Km7K7UZdJgrm2ja1djSqNX6MxjKiH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25xA2xQ6FeWc6pJ9pqQQo69ZcjybLJgdXqiP9RHWMuzFimiJxRaKuruX5yBF9nAJj5pPTnWXfCBqtUfu3yuU2xTR",
  "key1": "4SDCSfGGSJRjHK5cJs1NtKo5kKcyfUU8RLb6RuySb9V3yHw4bCP8k15kwVMbt9Vd3fn2qDUqkM2LcM94czr3G7xA",
  "key2": "rQDPXdQgsDHUJJgcudu5YvDLoo23uHTXaudpnc3XqDzCcNd7z4HZok6EiSH6MWrMYXecKRNRPGhrc9kXpvYgpMn",
  "key3": "3af19h9enswqGQcmYWNbmrfY8tVB9kumqMTeqAATjsnaubLjhigUq7QLQNqwEJD8AcS7quTApJHvDCQvuXrSpBQv",
  "key4": "5SquDhjEexKQ7bvfMReynvwT6oq8FxD762gGEmhQnmBxtruzhqw1gTFDG5S61dYw3uPAKVKjHm7zyQW1Ya4Py3qe",
  "key5": "3aHXEkFDNDx1Mb7kfhSSfqffDjgV1VF6vW6DNBMNDu3hYeF8JXgG4fX6gJwrHevWJyVmJXq1euQrc8oRHLgDLDPY",
  "key6": "2U6pvgtuNTmoe5KUNCUgqEdJiAbRLLLCaZNV5cqs1dv2LMqQ6U6yoFH92YbCxrqZThRdpAJariCZZjbogKNNQfd2",
  "key7": "2NLjXAQ3Ge1XjzAMgZE4HXj2wA7MRaLfvsZ9nxK9M75f45bDb7Pk7TvRZVpAT7Sk5uPTVfpcVSQ1uqGGT6fg687a",
  "key8": "44875Va32DpiKNw7hQd61suQ9wPtL2xVxaSYRWxFQb1NiyJdBq8SoQ2e9grXTABKUHTG9xYGWgxvK89SfxK2FNxu",
  "key9": "3s58bZk7PzihKL8m6APt7F6cSmAz38dL7nSJ896SRy4w2Hx5GCfDwXtS8CCxVhbJNkmagykURYSFkitnAC9umYXw",
  "key10": "4VB1wcfTZuLn8UiR2j4TYxj8oqmuu3PEzCvsy4Qkv9S4EH8CgoQZnKXEJRY1EC82f1d68MNnUgaqGUeMDCy2ez6Q",
  "key11": "2BP49851Eb9N8EmuzgpLUUndaJLshWrm9TnsfsJKzmxgjhSa5RsqEiPaRNaeBDsyngi352nSjbLvTKWViHwXtd6u",
  "key12": "3nqyBWGDviZgPV9RaLaHC6Y2BjCCsRcSnfacL7xfucUYr9t7wcD5zLwe8xFm3nYadBzzB9HFCjwnjznay7GzZqBi",
  "key13": "28SgwSMEYzdMg5x2A9HxjxxT1iSyY8srpgpxcXF6bmvgUGyEV5kWVR9ocn3Jo1U2522QSBEyMDRv9rbpBgcVXwPy",
  "key14": "4bxam5RRV2fvdaqz5mb1xDzpWsrLEFEXgLEtiPfaAuWtXDC4RfYs9vHnRfu7VHoxAem4NN1R1ai38kJCT1KG2x9o",
  "key15": "3H5pFfCo9yHXFfmzkwhRE1qpb4MMVXR9AfvVN8LtP3xtvTpDGhzRR7fXiCsNE28JcWve7QrviMkiaxtYgxPrD4At",
  "key16": "2q1KWWqnMtkHQKSeczKpifQgPJaxTEovdGHQ2rk8VEP29KgePmkY83QQBwns8XEoeTeX4tkNvXKoKntPzkQoJMJG",
  "key17": "2RLWGbUtkN1f8hFxoRjc1X3fQxC8HwtvhT11ZosEjjiUFHGYma7CEnVzuPLzUpMhjD16UQt5YahWhtHxqEztXvxN",
  "key18": "CzCd3DUsfmKdiF1Ctt1rAXmzeQyPyUTBFAThfDeCVRUsbMcVaSkcciqXsiu4KUyURgo67VDfM1z9oDJhUyhQzQR",
  "key19": "56h4PeuwetFtqPvKhigRfzGvBpe5D7jtCnxrK45adn1vKEBL43m21RWX2RG35JyYYADncoTK2urYrRqTw9aXWUFe",
  "key20": "XiunN2kp4RrVk8EDSKZPKNTWuoK74kQmBHchn79cWaR2sAca9vXTcmyHK3AL2tnkThEhWRoocnxrKNsQT2rNfgn",
  "key21": "5MQucsk3jLWNKq73aL4wtVEgdipFqongXJQCFzsMZZnYZTTuxWkPXfoJUdZm7GsXMcZHqnPPqJBV9deC1vnQuuHk",
  "key22": "2pA9fy8dqs3sbFVA9rmdQWP3dvw3Ph5wrMTBU3rtsRDvyWzUZK4XDaTYCKtKsKGmLVh8bHYDBBbTYWG1j5K3pZpy",
  "key23": "KfQmZBA8XrpVP1C4LzokRVGKVnmG28XCTaxj3d6fVuhaDC6bZsDqYmRkfTq1DHwu8txUBb3xdSagbf97WrFXJ78",
  "key24": "3hCVqxutSRXUGXKiDScASM7bSQY8XABXoZuY5w13Gi13jWKnNwDgqRWy6KWZFDaoEyFoNTwbVHBshPUGSSj1FuoN",
  "key25": "VfHzNonCGeMgZSZfJkTUPLGc5TrAGwfiiMDdrwWuGn6s8gyHZ8vES2HLbv9vUQUqRjcwtmRJQBvNAwRokTXNKwW",
  "key26": "yd5yhg2swBUv8sSN4wQ3rKbNDywdXwKQ27duudgFEgzZLo2WbygwTnqxFt37LuD9URQxa8cSUKaQmyfYSPeaAnM",
  "key27": "464Zb1pPEAnZW9nzKyidYYGsoAk7oECV8Jp6vvsNGioHWjyPUM86okVPKF6aDf58NyhBXQaEVYt5BA9vXeDgNp5Q",
  "key28": "vmDPz2qhwK8xQ42Q7ABx7F2nY2f1BdKU6iU3cTwzDgWJjjKtT7B62toXxY8XnsgfLf2v4eTd5hcUMNQ9RDtygda",
  "key29": "433b4ZpAR5dUpvujo4CuKmAVFk8Fyd2YUDRVBrndKJVEUEPDSDHooFLD2wwaREjyUhWAkJtEvdVs5nXZYYYi4SVt"
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
