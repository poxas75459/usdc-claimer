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
    "4MWDM5hCgEWp3DQqz1jCaKNGheVBc9f7w2MtRqK3Ly8xtCD5FpPUx6TFe1uUExKzr6d9omG2SU6PphZvacAVJEbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KEP5FEoAATSp4YsWvhYDSoHNNtY73Jeto4XT7zXavsEVwVjJqUx4pxkXJuLP8dXhH91NNK1eC4qA8KHvHR7ZSpA",
  "key1": "2p6ouwj9UPerMCxsgTug2rWnxtqx6TfgmJFyXpadn9yqmX4ZdLdSWCb3EBV8YSywPWURJLqxr58TKAPzEqaR2KVF",
  "key2": "DdXFvBGkA5t2BJEB7MenTd1FWusZVTgaCn7SbJUYDpS6ggPubyR8vkygvfejUGp1edCpdQyDRNbA5iA28WrYRPK",
  "key3": "4bxqP2dfbkFKevqb6jKVBDkAtGyDk4zRBE7JB4bRzxT25qvAfN7Sns6TTQwCfd5Cw7Echz67GDUKZ6AKq9pttUHU",
  "key4": "mrM7vEVCLG8uosfH6dVakcKVzfy5DAXMrxvdR2fudKiYAUHwtbSAk15YsP6Bv4CPJnSgNEhNz6E9dpBQB74DfXr",
  "key5": "iqEdWCzKmPkX8wPNvezUaASXdexG7hm9vYaPzxmAnJReU7Ze6e62rfwZuPVhB49iprZfcRPis76cWCTqEEvRX26",
  "key6": "5pc2TaDAJSUhpCnebtc1SsrMNJAdyjo2bEA4hq9rgN12cErpP7LykNUokrE2bKmK4ZjVK7yLozU8LoeucLC45YAz",
  "key7": "32K9o62DcrcQJJVYJFKanjjQ3gEBvxHuboSfazgYT64h9crkEsnTEV5huMFJejvakLZ3wopT7trwXFs8fQSkARf5",
  "key8": "4nkyLq1nuXekQUbcsf2y5DuP2fg6GUEYmctEbzi2Yh6JeQcyLMyrGgy1T3Uf8f4GV9auLuJafTpRAyuk9mW2auRN",
  "key9": "3FWU57BtoGt2WL4LfT3fwLh89jnvGD716DGrtcGzwPYU4JkPADE84i41r5SSaA4uS6LCMyBwxQUFzfF4zhTeEKYc",
  "key10": "4Z6tff7HwGQW421hoPyuNqipjc39ksB4wzuZ5r9xmuX3cxYZXj22x9M553vbVxaTD8VN4fQPn838fayjkTEzk8h4",
  "key11": "4qSi1sk2WSFewFfgaw3cyqDPVJtnGLBcorU3oK7iVN6oSQKQnpV5gXQQyAE2aagAFFLLN6KuWaUfx3Q5Ri6GzpJT",
  "key12": "5fsWbQkyMSfk68CkkFD31WocGg6vX31zu5WAq2fkhruLo5JGh9Q8QccGv8zMfn68TWnpSetqfCej9jZr5xz7b8Jy",
  "key13": "3TWx7ZVCBRt9v9YjmjEGU4gSeiFSskaf6dg2na1RSPQsLBeM4wae5rvGjw5Jv1gUtDf32opXeH4Xgh4VnfrzeQkN",
  "key14": "jwj7yyAx5x8WjXZk14g9LumwcasVYyUHWXhnXEv8iPLsc7Y1cNoX9qbgX89idfQLvgB4iQwEPizt4MdhTf4wfM2",
  "key15": "sXPSYVuZ5oawhPc1gNkq627M7bVCKxxJJvnGeT1CYUVNdRPW9sipsGYcr54Hhi3oeRp6EghdmjkirnQceRR6jh4",
  "key16": "5kwhpLHMUd6L6tyvcZdyRL9tnQTcJV4Q12iJNvvXKXTSBY785d4mcMBTnXcbaCCFkF9oP6NYQ2saYwGoiBvURjBA",
  "key17": "4NsEwuYk1Ei2sJEqmjchWAJmQQmGHHDqzoqTUw8k8b9U9FtL1WrLPub4X7EXjtmpn96V4KQniPk8QxPdYFdfAZjE",
  "key18": "4beizsHaZhM8hJykQXF4d61xCWmrVoXLk8CLDMuJNsbeC7mfrDpVSXT4iRF3duKNpC7guwYRLX13ABGhaihTd3fi",
  "key19": "gHRSuG26zi2WUxqTiYhHhxyapXvrnXnrcd1LhCi1hLX7hQAZeU5hwLXqVyyjvfkkZHF1PPvthEEXideFB1Wp9q1",
  "key20": "4XFrcpw79HhU9M4qtCKAVp17PaMW1gd6a1WXBRXKUDj4fgQe1hAJmEzCbSXEotWEdVUZ8QrLGncNBLpUJdGapohG",
  "key21": "2TpShyw5eKUks7mSp8jMp1MxnMq3P5xZUYLpLXqpVsNDeBeJRmaiVPvVrfHLEZn1ma4LyGK6cQqEUCxXjAAnikAj",
  "key22": "3h9ceGQpLGFEG9q2q2Sdvh7pwSe9peC2Xjhpn7XRfZsW5oRbXVKjQDbZSU4ofSUfa4vHcjxLY6D6h7xrnikzh8xY",
  "key23": "4onCnhNmE2ngWebZ74igqTtNPyKURpxonMNaLdkYrSqjfEm4WiwL414q8rQQxaawyL6V8DmAi5CfnocKCEKnLUZi",
  "key24": "61sKs9ybMFw5cMVoQusLzrFWiG67Uoxr6FsMw7HfHTo3jB5tZcDSVNbmBVVHdduGRM9zM5CAFVZKk6GkUukGA13i",
  "key25": "47yKMwxuPCDietirkixZL5SVYouoxLjy9L7dDHM7xn4MemAVsbDcWiWarcDKV2cAXQWDtXkNBU9oAEUJySz1oosS",
  "key26": "GmkxbAsDVG9zrv3QYeLFqToJo5wCP3eDjCqTcG7JZeSC5CXbXrUVCuRrYGFELMRjjNmhcsuy1kBsmspUcqzifNr",
  "key27": "2XCEQ11YuGAZmXyuohsCQfTL1JKBvyxXXfq98oh2eswQxuWiefyd82PKLquqgT85fcuerisfRXdLnGUkycPJ1VAf",
  "key28": "39CZQDLmp9cJzS4WYCwt58QexhXogz72hiHD8uDX1eA99jVMuUVYPMUHygzsmVzz3r3f4bxLLZ6CkoroJwEGHPax"
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
