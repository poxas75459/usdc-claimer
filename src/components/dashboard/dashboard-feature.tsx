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
    "kyy3MePEzuTmAEwbntkpiZYHNuWJ2dPW2VuiXGdpuF5vwx5ci2GF8pbaMuLS8Y2nGsq9yztk38sDwZEL1Z5KSKw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9wPQsrbkzfn9YTm7y1Ma3KozBZYsePs7EfwFBomdWXEKcZ975ZroRtESHMexE9qscXMkZD6D8yecjC5HVTbJ4Po",
  "key1": "24Cs96Zj11YEDu9eS6mevT7Lit7MxrgLzgfPLLCMcJB2YdWjqEeViEYhkd16YRd3XdKAqqtE2PqiX4hB55vxzJ4U",
  "key2": "2LQdBY4GwYZj393oRx7snmc3ovU3iUFUg5yaAvn4KGmJ2YKRNmb7SpTz7sPgSh3d6qWtXHubxQNCPJnBGpiLV88S",
  "key3": "gLX3nFgRmPdjVR8xBqFan7X9J7Bkx4AkMapmRmNRV5KFTuwXCvZ6zhoVpi1ybsN7xM5kFVRFBfHGVUgnvEBMa1h",
  "key4": "3AKqHXKEZaPguXWxCqCdb2GbHq2vMZievpoPp2GnrDryfCTVWvApqm6JwUL1qnHo4KJURCntngVbSsADSVyxRJWk",
  "key5": "2jaWXwKPfWY7JU5UtV1Fbmazbqhfeav2mEGD8vajD3N5pMAAUwoKbWcvr2ECwbgJXN83MS7uXBHjLgc9dyrVzkfY",
  "key6": "3yEfBrEAexUAarRnNSSEdNaew7te9a4WgkAUzEnLVRhjWZgQQvCLhKL4qbtj5v9zPduwvtDDiPDroHM5iRgfrGHa",
  "key7": "4fP5LNcAYsyqywnqvXgJ4QMWTX7a7TbJrx9cf43cV8AyTa5oU82tEFMMfbY4MMUAcsKdT4nwzLC8ASWNNKZ4iZQn",
  "key8": "2ErARQ7KpyAUuasLN2Z1qEzyNyyZZ8KYkhdUY8xWjbYz5u63gFqtDaY53dCmDjA9sBxdin1sM645woehuu93MAv6",
  "key9": "jD4EP5hSr32B8CW74AceoVP7MAoEXZFk6t2dVohLCHsSMmBBsuy6pPXUPGTgLLZpwhmhc528t5kbkUb6fyx9raU",
  "key10": "3xU1gPChbAWXZtgW64FbTL3vu1AWiB7Wc3iJ3FboKU4noo5eEUorFe2GCpA9kE5E9uqrVRPiDWaWxkbG4hZjR6m7",
  "key11": "dxDz8BCnP3MJt1UDmfVDnwLairqV3oxu33ScPw7rSXyNb3cVuXuEdrpcFmidS3PQ9LTjpevkZim8AKB6wz2XiTo",
  "key12": "VfojkEokWjR4RjYKtwRDH7GmNGURV8wYVvrPnzVupHHmxvvGfW4kaLhCp4C5ffUVW1hk13or5EgbFPcDJRagf8P",
  "key13": "6ruMXicxFfP2W71Ej35qL6yUXYRQRAQntYEgJpknoaiWCcpZphLu9JdE4DrSpnjKjc1MHx4vpiSgE2781Pp6EWG",
  "key14": "42T9kSRKojhqu9NGxin1WgxhiJfhKxu4JAsmhs2JbY4ok6mH5ZQDTgEgsQS1fpbxaD4TGGeqZgVDUjLw7VYzGBR4",
  "key15": "4x4XFLBBwfeNzXatCuazCL8GMQFVD3hQTzEZnpiUsRNYpocQa7Y7Ynba19yoDNM6NoRqFDVzsDqmGchicEfdHbi9",
  "key16": "2a1dofC7MDJMb2biCcUCaGbbDnP9mVWHdMnyeBaEJban1qd9UznaJRCPXgUUWT6x69x36BEC8961RbMdD3d4eKBp",
  "key17": "4CbutYZnApVE4yMM1G6s446b3tEpZL88QQGBvUfByAWMcpU1Lgkp1ossBi1wnJBhb1sHFMbBR1WEFhMP4BAWhZap",
  "key18": "5ovZmnQBZ482cs16RAxPx5xtMywu1aB5YgpzjKWnharBnqtiiBK2T9px5aMpJcf1b1vN73vSch84aF9tbvDch6nn",
  "key19": "dgFNakpA5HgNjf8QCEEmyNA2KhtGDkzqTsQYBEsB9NwjtVc5HPUVT1M1hPHeSuM9qZYpZPaPNDUUuHhpo4bfBro",
  "key20": "2X3N166RQZyM3yvAoooBxzA6nBQsDy4LhSzZfvTMVZvJWixja1SBkjAV35WRqTQAwkV43u6QFzMXVU9CQmAqWF7x",
  "key21": "3LMWSvg2koEP9pkRv4Y1jzY3EPGs61FdkFrGvjBxobVSjAhsfJragPKSmHdkAXA1hwhkDDuzNN9GuMqc4ZSBvdFY",
  "key22": "8SELqoo8SS1yTjAmeXoSHX8r2VY4umSJCnNqVgUkahwPeUuEqHirSCvXzQPxsTjBvvXbrKm2MWYKJNRaRrXfREp",
  "key23": "5h8rtetJza7qqtM6MHoSy4qwNjpqz8gZkJAPg8wfMojX8nU1vg5wjRRrFq86uok5GLdmfiJaPASFnsmzrYMjdAsV",
  "key24": "hSJSVBFyxg76gJvA42U5WNAYuEWUqxhEB8yMkApBPFbwyF2Tn9wzUVqFKCd5MDoopXggBPQXumQeVTexyyETJWd"
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
