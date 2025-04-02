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
    "676qYG3TQZhHpg6uthq4pAV55phUzSVFndP6kdxiLkW5JVM1rKdus5jCyouTvHNzGC3eGhhG51wmvqsStkTaLiXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yqvGg6aatb4LYpukvHhzNWWjdQuKqfexkuVaXcBs5SbZGPsHDQMtSgzsK5hzn3jA17T3hWdezikajahMZbm9b7g",
  "key1": "53WVXoQdz5NRfCYBbMzwpPuWFgueR4rE8TJNNcyVZReyGERf3LuJLc6DHamALyub8TB8vW2GF52eC2CKbrvPyiM5",
  "key2": "32zS75J5er2HaV8DdPfpURvgdXrH49JEuAGpmvVE2mG2v53XQygBoWBN8pfkRMEwavFW5AyJyDB6xyCSW8Atrq4V",
  "key3": "4Vou9CdvvGwrkiFFwe22m4RnPPLeTuNTUQbxhsmv7SyWe11XbnNe81EuxBiCXHYNFW1UcwpmNNBYNSsXeMjo6R2M",
  "key4": "4sb6EaxJpt32eJYoB1YQm6zTRenjk9gaeforsJfsSXwVVAD57os5dcECiMrKfnWBB777kmdjmJdrMb7CkNiYrcKX",
  "key5": "3yZY3vFvAQ8XeS7NUQkdEv13fr8Eo9U37HWPsGmJcBTHVk7ZWLzf4ycuFU9fovYhKaMu79ozJj45bCBLoA97Lvkd",
  "key6": "5Q6uSEZ7xMY2HGMmpex3PkSKRk3G576hKHjp3AGoTwGXEzk7h6b8SjbJDiVYan62772DTzAwjiN9KicwB36KP6S4",
  "key7": "4jDeMUBDoDrqn4Vi2oRJom3mdrdPwYHN9PXJV6BM6bmL4mAfxvCfEBWxqbVqNUvCoMorw8ydkQ9u9L8gb1FrbPn4",
  "key8": "3VLXwAE4ja4QPd6eQRCf5Q3b7MSPD7625B9PtCHvdF5whwMWfprzLz1cJXNT6SVixzbLY2rUvCfGs6UhvjZkxLtm",
  "key9": "pAy6yuSzFB44a6ajTya24jLNbfKJiqk8EnsP32Z1TSiAkC5r3gEfqq8NF3a9MMReqb9jeRWqUFWKdMbh9M8VqaM",
  "key10": "giko6qy7PPvhW5eGFFTDY26uxA4AvVHiyScVhFJzXihPa6bkJGkQrg4Dfg6km4pedsDzU5Y8XduC3nDtPYV2C6f",
  "key11": "sEqGCCNxWnFfW5CwrLmrFV9GLut6zCs4R9jE77QSLjEGTXesy7q7aWnsivAsQeQJbHvmH2usCHTvsiejn8L4JKc",
  "key12": "4Dn3KSiGswyrHzaaGZjKuS6DNZDg8b7XJ2pejee33vw3Mr547sY45y2CmsmXQoiaSyLGALAkawvkKFTLHAFgohpg",
  "key13": "616Z9iSCCeqZZ5v1opp7qgX5UR6L4Jy5H1i2ugkTGPNrpJpmg4x6tDf9zSEqHPWh7ZQwcEmWzLDtDySx4XRG3BHS",
  "key14": "34Ughv4eckrHVFWp5VEoEJFQ6YbV5BVZZ7BpxpYyGWGK9jLtziicR8gx6ZWad2AsSXbC2AvpfGgprRzNpMN7iEdv",
  "key15": "4NJVqtXRCqAgj6abKED8dhpCtZAWooPCi1NkMQA6a2CWedFrAEdLdnF5UYuGLckXfFhcWYJTgKa3vHSe8pU39ZCz",
  "key16": "3UA22zUsbY2oc9EHHPvfP9pHjP2jKBWX6cpCDQiWJiCvPkgrDbbbKeaECkDrndekeXVzDYSjnPG5B4vhNsvmqViZ",
  "key17": "6EEthNN6BgxKZRYcHGCSH1mF1khnGPhxRgd6AdvrKDn53J1vfNuvzrydV81cSTsTpYMrUGT1acecysuPVBCq2aP",
  "key18": "3d56xeWKVFzp1uKSdDFsq8tHFFYCaP7XV4jZLH3NtqoCqGS52sKXHpuSxcUWy6Pc67uStUQJpnjfMyESXDsaQiVG",
  "key19": "2gAZ6BrN8GzgfFgftBpHaNDbGS5EeckaHXjQFEWM8zQY5Q3GZwQ5pj9NLRionrKKw7g5hKSvMiqfbEzvnvLqWjua",
  "key20": "3vWU7zSsn8UqzxrFyqumRsZYPEW6s5ZrWqNh6xHkf9nbf6tFTRiY7b6av1ogJGuEkLPQLz34ocPjNLXEo6T8kCDo",
  "key21": "22a9pGdDE7SS8fox9JTxRmmjhkTvPA3hKKF3saNRRyFqdCvahuPrsw4787wKFsyDWjXjiQ819gQhEKChch44HkwJ",
  "key22": "4uptRyHKxysikH25znE4NzAfZeKj5VWFZLo9jAedrES5G5GXDQAViFrThDCAUzQ3kHeT6PefUDyBa6ntE5QKFvNc",
  "key23": "cQsHUPqLEsjqFLxUcXXJ3AYUe2YRydayfNjvokkTDyuhbn5HRhWmYGN39k4QzS4FFGCRqwQSCsZxdmDLghQV7Tj",
  "key24": "5RzmGDfNc2yZc8bvRXn6djtR32yN6pGjeqGrzJ1RL7iHjo15zmfW133sPgnsdFcPt8TQcGciD3Utg3jNpEEedFH2",
  "key25": "4hUFdVv2nvrYnXWxqRTgSLnRgCp68zGfjsBQyyightdp5xUMv3VPDmDuZwksWkvL9JeYEjdaiLQumgSv8KhRGXMT",
  "key26": "4bSpNR4UiuJDiHwjgVSZhRMxUVSQoCc4a2njVZpjdkToSXFoccjx3ocS5CRdUb6QjriQVRQcszuQKCyurfdNGyQT",
  "key27": "64Gyy6ScGU9aupHe5Lrnr3pwrmBtdCTKVm96dU3mTNSC58J8xD1vYbgcwJB5wVNMyDrzdzEUNP16h2Nq1hW2nvSj"
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
