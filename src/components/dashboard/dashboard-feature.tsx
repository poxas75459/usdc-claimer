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
    "3Cy2FwBtA2A3N1DbZEUr7KVDq1pkm45ZKZRctLFYYCGuoKA2Ly54fVwmnu98RBgM29jV7ik1MnmhnEtvSjaXnVzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hge2dax6AicELwPqP2emUN7Qx29kLMqW3DuxCsXmZ1tqKrEpj9cdzpC6j16YCK78LmwuL5Vy56ipg5iWyPJ6Xx7",
  "key1": "6DeWqMvuBHDNcDQZxyzvaRdCqVk7Gtm61dqThUF3Fdte2HooxzM51iG7iC6sfUR9RZE9qFPynQEoK1FFhY8ApNh",
  "key2": "5xodg9fZTCBF33VMbM89gGWGpKQnNQ1X81NXgzWEo9MATguPicfpQvP548jXzWFtbeNf7X9vpQ1zTLLzRDcym6xr",
  "key3": "3LTpuLvkECyfLuUmvFUsBW6k7hnzvxBc5vnEak2AY2hTDXVfuikowPPBDefrzpazxwDU98C7s7vtkaJz7nLSQt3A",
  "key4": "2YFbXhyYX9sZsg5h5QS8gFoGEWbEsXCfd6CHNEVLhMUuyEYJFHY4XspQ61RpXBGFbFJguJ1eddYRgrfmFrGMziuH",
  "key5": "3AbS5BvQihP4F5QhYjqApjMJSd4ayrMfnpZKNhU72o9DCCig8QySpzGmgQhd8NFkeAgT5Si1uagnCr5psbEYAmwS",
  "key6": "2mR6deeFL9jbZEKWAEB9wydMZaq97JdHBU9r8pNyWyaZ4E96HcuyH83LxKRkk34P5NrBWrjBe4dqpC5UN5AL13x4",
  "key7": "vskCr8wzQLELfwtZDNMcihwLFQ5pDEG954ZcJXYmWf4yz3XZjygety99EAP1tnqbXWSy8HWeFtVPgB1dQzFNsST",
  "key8": "4aSSZtaYmfa1gBrFAF48ywFt6amiVBis25rf57WrSEnBYUUvysVzxCAgVb4tAxXEavJY55gGpdo1PM7LqVsoKkmt",
  "key9": "5JNAHKDt2HTtjBj5qkdho88eojzTkytZgBTrEM8GMsLvDbRc37ET4ioiSniFG48h8WEJa7dm4F86SGqUFLRcmK1d",
  "key10": "46VGP16qowDh8xwYACHQahS8FXmBVKnG1mSTnkzZ3hBWaAuhnMy9fvYxdTh33KdHxd6uJSELzSanZur2ETJfcbgb",
  "key11": "3c3vWYoGkPUNvjp2yRVsvjVk9MfpuTHkVMFN2kZPz5G2x9rWnhPcHX8MiepxnSxnUESF4NU9Jx4ePc81ZBydF8GS",
  "key12": "dJby8wCo5crFxZQkgz1Xt5oNNocVdKAt89LkvU1npFqrcjqQtkGzxL2kxpQPVmL8CX4kFxWNxhR9KfiB2cr1Y8a",
  "key13": "3gGjCDMAD5zK6URBjN5MsFckVsTYCUfDVZ3JTK5ar5dTXveMcXt21z87ryBHKT64aj9AkqgwvrCwKs9c8A1ekFoX",
  "key14": "5XifLwzsfdv57HLBFLnYQVcoQBRbDjsHRpf9ir3zGBcpiJVyYUr8nLQoEb6MBKdEgKWuYdyfrYFKgFeVCv78yW6D",
  "key15": "2XFahcFcd2gAzYFXpj2spSF8P7XNZKJsX372vV3ZidKh79nfHjdBgJs1igJ2PncSg6PZ9hMkYHxenPWdRTyqGFEe",
  "key16": "brermQdHUNtk3HBES1wbMAchPGyg9wfgXuoZeL4T5JsNvfzr35HQBNqJw3wXQHxwDqoTzTLw3ZGSeTbRK6VYYqu",
  "key17": "arRqJGSdSbnqbiurJuXmayvPLrzCBdgS2EffzT6vHs9TL1nzZXGyF7ep6yfCNs8ymYqD8Qv4Qskrgf1pDtCKNS8",
  "key18": "4WW3J9sr3jn8yDeWotipnCsWJ5TZZ4QCtYtbJLQMAm13aPADvSkiYzxP1YSEpxDj5pnSLeWcT9YhKZY6Q84avDKk",
  "key19": "5tboUewtEDnXhg36A4Z5KyyHuChUnaaTp7ZMeiMwFZLZ4iSPbLAEu8hbpuTRkXXJ8TTwMaEt5SoV7iz4scRQkcab",
  "key20": "2VTrfKSxYcGn9MHif9tHHSzL7JHeAxE8DRjtSrPhFKFRrw872Uwb6tWpDpsnoorgY1DV5odCDhD3d36zv6N5GPgM",
  "key21": "5boVNpCKqX5Pf3HncBHyZgi9HvMwE2RAC9HjZJuWHdirU9L6MnnKSrk8JJyzisqDKY8pro1rRCPYebPKeC5ncSPJ",
  "key22": "rBCZXFY8VtLQis8zMH5kEYj3xnrhaFMBYBwQYUN38NNULy7zD8fn2b1qu8vRHHJ5C1ASww3Gb1HjiE5Ey1CyYfe",
  "key23": "2H6bPcWLwHbi7kqevbfdRmcZRQhkVdc3hheCjA4gCwiCdkAV9F2vgt96ptNDsVRHyU5QDx3GuwrtdSWcbsQqgx7Z",
  "key24": "4AfkCdpJauKJNttMAYtNCeQeCHHpqiDZhUmmq1Yb3YnCxzhumY1EWBg3RdgkzXuoz1C5GMYg4wwUzQ6dc6d4QBda"
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
