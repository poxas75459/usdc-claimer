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
    "4xdLiN7ttKG8mBwNWR13bgdeZizFKTnHjzGa6vCQ98aKqezh2ySDJ6gR4iBHb1AV8DaUUqMPLXqN4mRqjh93ugZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MMYUWDc9r6Sjs43asj1TeyYABQUtnQgyjJyYtNgkAtqSd83VRr2bYJL7fzzS9rGrbBUbuR1QRjNNnx2VUoUitQN",
  "key1": "3gkgVRWzmRvhZHWcrEE12zPmzKY6PTjrZ3e7Wo1WpssLpaDu9go2dPRaS4iXXAVUh4f5ccXdpKhn2ShVnAyk1bBY",
  "key2": "t8ojA1GRc9h9VD8ePW52nYuUSj9g6w1Jea2kP65sk8rmUUy1pDEdquVE8XGY3SdRjhgrJUMD8hKa5p61uC2s5pd",
  "key3": "4BcL5ny5QDPDSSicyqsXDnSbV5qttUnprnPASSH8SEk4ybDdaeUDUGj8CSZuFq8Jm7BmaAHUPhieJs5fCbno7K4R",
  "key4": "5b5mRxbdxyffuqn5FC1dLgPBZ3NAsqSxQsfDQzSeegSsNiRfiTYmiBiKBNaqUFu8E6zJsFwZCN71uxLJCJESppLb",
  "key5": "2MxyPK5sfaRnKdJ7xqStKQkfNDXP7nknJ2DsHTgHVQzC9aEUag6jQ5edE8WsDAWzdk1KC1xHFeLAvtG953wjSBSr",
  "key6": "33gaHsXW5TPw1YUEYiqabgx3uTWu2k6LUfVsxVHTPXCKHhnZ2RWMPeq1t5tFfZcqEvoyj7tJykRRNv8oQsqxQWH4",
  "key7": "2pdpWuMnXvgrnzNRL4By4ep9HroGoyAY6xtVVaA14UNAtmA6cG4VAk1nDsKS8uFBC8yBtD27csvzAR1hx1W1gsLg",
  "key8": "51g9KvW8TEAPZMUSMrZ8PKPaDNiTETiBTWs21VgwXym3Yj3xVL6oRKWLJZPBnhcuGG4brcN96D8bsiyyMQ91wchL",
  "key9": "3npXwx2ArhSBc9vFEafv8whCp9kp68nzcafvSHB4BKJYu9KUVYFQb74B6RNi2MyhahLackNUx2pFoGHbQmmawv5f",
  "key10": "34EF4Qy1eqBQzMSuxrTQywdvMgdS3L4zYoY3vqrrHxkZTdXcPhtR48CegXwFDUCroAuHf64RKPLtUMFmybeumrjP",
  "key11": "2boD62SoXNz4xcexpxBoNs3x24o78gLsC1TZh6zTYKT1VuX5c1S7XPG2bVoasxwe198qxQNRtaBYGwRYFrrPBSue",
  "key12": "4R4NTdsLY4Qe2EjkxDAm1pfME9xZFkaCNcmFAqn24VLXa9RRq7nsLbnYCqMNqS7VCFVQ1eyM2HiDG4AuYtgvKH6Z",
  "key13": "4VEKB75rLAmYrB1FYQGn54eB9mDktEjPjqvifvNPtac2XCLs1SVp4DvNTBJsbw5UEhs4Ti235VE96mD9bVsDsB1Y",
  "key14": "wG2U9kNbsjFxhcwHb2JgGK58Pc6M2gYtf5CrrAf99VZCM3fSnkfEipjUREbvKkzsZGLoWhYNgFx7gkpR8QF7EAv",
  "key15": "437of7Xx2qcKtkE5ByHi3FjNcheJtUCFKnMNfQMxAPHeA6D5SqzJWvNkdndg4pU2dn91SBuyWzX4ZXqaY9HswMoJ",
  "key16": "4bPLFZ3DAhKchT1g9QjYjJwLShJzdfM3GJVJui9F6M41Hr92Br4C6m59dwC7eCVqoNbyBpsW3jy82WespTK4pScU",
  "key17": "4UjCiaUVqVTcq6iNd3tKPV9qNwGtPuA9Fm4tzxHayJ7Zd3rtSsSyiXVpmWHwVD8FqAh3R783cYcfFty9H5Ntuj4S",
  "key18": "2kvzMpD3ZmTNs9r56woZpVxsGSgL3XN4BrWJuyDeDLn99ijR9SAMMiZbDVcN6BNMv5d9FfC9ywpHbza6Zwvbs4X1",
  "key19": "33H9qfC1TdpkDSgvP3ukiQRFzHXZ4E2FVYr4JgnEnbKDinh633vM9NfEhQ4jRwwUMN4qzBhdSnyg896c7mhJ2xqh",
  "key20": "w4oe4tVFp6npGZMAS9FhHe5jHE8cr7afSTg2iyY3skYvTzzs3iqChYhXuPRhgpbDdKR2RAQDafWvVboEjcfgwZm",
  "key21": "3p2bXgVeWJBSdm5mWBLSbYrm7ZY1nSFAyvEAdk8krqezD2eHGZNWj6Tq2MAMjQjhxpmzDhc21vEHHVeVZiZPy5LF",
  "key22": "4jmcfb98nz8xjtPDnrzrzQ8AGhaa6PfZQRghxZbwtTGZnrbY17DAAgxmwsuZvsyToTEG4K4SYYyrwurXd23by4hH",
  "key23": "3vEhcTegdQfA1BZt6yAJ84HnfjKrWxjr81G2D2iV7jdqeBZgsA9g27TDu6V3bt2cQ1w8feQgFV8LqA4qvqyS1rSz",
  "key24": "2rLX9NUsHSNDqLfyg9uw264kPB5iPBCRMoD6MjtyxYuRUzTmoAfdzhaGS5wZSKd1GsJoCkTzHVP6YohuDstybpDY",
  "key25": "5UbCJMaXf4fX8ZUqtMLd5gSPk9fXAKXyrQNxDt1mr6MqF4aKB13aQRVKocpNtqh743yrU6SNKA6RqdgcXY3UCEQY"
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
