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
    "WK3V961r4fbjtQ9dTb7nWrWM6BaY4tt5922CUCBfwZGPNog6ZK9HNXHTnxYJ2UMx43XGSZ3Y35vR7jCkGE6JbMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JPnCLkLo1ciV43enFFwsGfh1QaMk4SNUkeHmsjDoq64tG8umevFpqxHkHiabtJLWtbDrAkUQ4GsA8jufeYqn7Jo",
  "key1": "2ctZTfeYHnwp13c6qWhzAKWvLUAbCaggG7Xmbm97KY4cn15tQd2AafEGYgavYDsYR3stsGpD27DR5FCWG5VJJX5e",
  "key2": "5FJMbskqqBfL7wwJFC5sERq6fczhvTkLtZuYwg3FTRkRg2JgCj59BWUDbYuzJpK7AkTMvWRCJvrsXEwM7zFv8FPt",
  "key3": "2WWFyXxHJZWkPd4yKZ7LDEa24az9yUdRsyRMehrNAvc8WqrB6uzjmsgA7PwLgaBjnjXVPewNLxqFNHVmhRAPfyFX",
  "key4": "5nVbzb5M7L7g7G45KU5nEVSS2Ek6kx7ufQoRHbXjZorJCGhUmd4h9ENoq9QsE1ygNYRa9N5P6mVtj3DG8k8XLUCj",
  "key5": "3H4GuzUrR9Y8zvDRtupBUePmYVBk6LHjRFTmUBD3tyYcq2t9pZEMrKVRbR1ZA5tX1KwgkBHRed9kdkX7kHbHDczv",
  "key6": "5buuSTkZuQFb6sTpXjG2e26VcV1JvDTBWD6Y16Dwazt1SQNVxdmN2SU3ZF8JgZakBaFyooXWs68p395HMMgdHoq5",
  "key7": "2ZN4hbNS2krTDuPbrGfPyz5SLzg8NRpCLhX193Qmmv7WG8d44xaKKYdr8scyannTyZKgVnDmuXxyfBUG5QDmNr9d",
  "key8": "YcooWtSDvujpTAgbE6oGSoSRdgJGgjj3C8dDitD5cGS7U4TRG31J4Yn2UqWjbfkPM8MUhMFWB17ZXgUrTugUJQY",
  "key9": "5PaZqabVLaSRX6JxnPKCNQ2FtUdgCFSRx1Gbj4e613egsy4GrtyAmKL3Afb3bNVqjv2s86gFHmk99buahtjZtW7Q",
  "key10": "56SMBUJgk3uBjrEE11KmqfMyCZ7k7Pz7D9GoRpVX5vWyRcbPsdLZ7ytW8BRgDqGAKLDX1KoXiD5b4B64M5LJ4usW",
  "key11": "3RSig38R5t4V8yDY8zzwEqKfkUUsDBADTovqoAgoJfmsYGJ4UNT3gWs8xYyRkoRk2mgowerJwiz4RG9WtBjtgFvh",
  "key12": "3Ys1JXS2A18GxmfSFEQhfQ3fb6RKcuN93usvki7nUxYgqDhvAUiqWSWDoWi5pALvRpKeGYbsKGG8TUkunuei6nBc",
  "key13": "3hDYtaRRhH4eGnqh4AD5T3ngSYkQnTzwJ5TiWHHxr2k4d6XTQi6q9RB4EmKjCo8qKDk5dRdph9pU28TcQvbeQ9kE",
  "key14": "29vuMvdNbPrkG86ubokZesRP7iDyVqC4ye8vbZMGNovd1Ntcx9DUh2bgkaxHjGA7t3cDZauwu8s1Tvtzry7Sr4GE",
  "key15": "5KWsZoifiBg9fa2t47ugFWDVURSa7EoWNBXx3ZwidwoQVXhipB44rsamKXFAfttS62NHjbqS64dyrjW1qiwnDPEf",
  "key16": "2kCL5Zz1UYyUNQrbahzPsebztqeZ3MgARK2JFPq7GF9At7ghXH4zNH5DB1kFMo9EVQa2qQR1DauanG2B8TLuMzjp",
  "key17": "2qzXeHfSSrsFFcqVw3fnSkRJxmzdVGkCTDK6DKZXEcmNJXvHQ3H6tD6hJbBYRbMPez2F99NWUF3hPk2gJEGfroNM",
  "key18": "51LKwRZk8Dy9GgnXhGow8uAk9MyJ3GJ1tBBUmavEs7gmqUyEYUPhqMFaVwmzCj9VavnSWitDYN1k4DakGFw1c8kU",
  "key19": "3YrveRpp5DGvYHYb5DWkuD6u6SHuqpnnop6Rh9WToaKGXTFddf4cwVta4hXStefZpJWeDYJZSdKXttkku3Syo8Zn",
  "key20": "3gtXrmXQczdNbrtsawNQsMtqD24zUbvtaxUQN4jzgcc8mCS2syyGQYpbGVNw1dvTByRNjijwWX7qGViko2ASFbFi",
  "key21": "gY7wpCFQw12W7sgugvSfQjB2BF8v2owrY9G5M9dc551vF1i2FdiE18w2f9JJVG4pBnVo2LeEQhdVVNuXBnZzbXj",
  "key22": "3YA7y74DrDD5t8ktqWU3X7bW1D9mRsP9ttC8ZnMR62z5kwy5f7zvz7o3qhupG8yPcfdZRXgVVmGRhhH6ve8beGMM",
  "key23": "4vjW9cvh77gN6hwxPYSdV5p8F97HQibbmCFuybsq69HqX5ZJirLoN75g5yaLxbghrjaZQjPzJg6QicxeyJCtBYSg",
  "key24": "EqHQcyjc7nM79CU5yNAVJF6Ha66M8NxdxsYuihds7oWnJfsScB2mFeCHpp1cGJMhzFc1xf9CffySMqBY6QSvnMr",
  "key25": "2fnekV17y995pkRjWdfnytYMD1J8ejCmaSEDucxefPNuE34zoQ9BTUszWKnzCfGvn4idixYmzTdPEdmo4DTWoam4",
  "key26": "L6Gi8TjAwWzWDhUbbkiRZZ445RazeJn7hK8TJ2rQVoqmwHht2jGuC212o3PV5mPRKwSa4FjZ9rn7Rh9455uivMt",
  "key27": "4orwpCcfFJbFtCaR1hfFjwgxJMSdE4Dg7k3rwnYht3WHPs4vCRqwFAeVNpJ8NUWKv6aTxSBxzE954Fzxf6Z9kiAD"
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
