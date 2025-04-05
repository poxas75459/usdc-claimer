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
    "5HRb1B5HFR4tduWwhnHf5SxdnVsetxr2bopL2ibw5YSLK3ctAnMLPxHvSkf6p2Tn9K2yFN1uCe56dLfb8VjqXwoj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ofpE4ZLk7cof8xDEfAMmrKVTNNBXWojuzJJUc7ZFtv5xcrF7C6a7h1YNFwFPSJWCj3PzxV5BBSEo5h29Yk9U7fs",
  "key1": "cr2ZzgpNWvYLw1b6ZchB7kncTC4VGoQkdx7242kqPmYmQkZbxj4tHtTC6PQximYtv5zLUsbpreceE6CqB9fvovG",
  "key2": "2PuZru7ZF15MiXvkN15i9SW3tmGargPdUgTqvoaQPQn2m2T3Fc4mXKNCc2rqgx2beTwXoyB2P688F6wZqppbT9fC",
  "key3": "3pWcpUaieGpzwC28GyoYLVD8HCwd1M4kgt5tpU9mNC8BrtwbeHXGZvZ65CfkBx1jkgrtqkCPgQ83tjmK1s29VXtR",
  "key4": "4hpcJZi8Q8gHyQWKpVU5hzVoaz5fXMhAXaFvagZP9nY4YJKJAspKBpNW5ZmknziGCyMxC5v9kmhiiJLs5nF9FHJg",
  "key5": "5BMqn3Ky44CPpN8atNwSUYEs7KQujj74Be2C6xw2gpuDD2WkCFeLvE7o414y63W6HcDLuPpeAgHGxhZtq13yMgfZ",
  "key6": "32M2Hfgv5FNTTGUaknCibxE7iuZGwWbvrGQGHakFtNv9NAakvm7goByeVBbuFKy1W9Yu53YUHSfExFK6rW7NuLM7",
  "key7": "2y6WEVHaK4Wf9UHyvrXZkQppJ7GiNF7GS7KzH39H3ivKJsqwhpXwCaW59DnXD8Pz2jWpbKMfQ6pwZddLdgxumnD6",
  "key8": "48Jz6w7PHqvcPrcDo1KMhDDpkHDyvCN6DzUHgBA9mJj4QGyFEnvKQBtJ1oAAQHGs9QnniqAxapRwuiqfNBaTcEYT",
  "key9": "4tSxt7zmgqoSdoBNF8DR9gC5VCQ1BYWW56iBAUjoF8pFccfUsVVfNuxz5GiUpkHEDrvJzxoUQSpqMN1BeV3YmsYo",
  "key10": "27Gyco4emb68Pcer49awo9PYiGY9UbgD4J6EuQzTQmFW3JDX9P7W8qkKYZvU8EPkyQFxyvxeopwKCbThSs3PAvsW",
  "key11": "2LUWxFRE46FH4b1LiCzfwLPjWHJbwfEQ5DDWAzReSYSp9j4cDiQnH66omytxnoYTxMakxab8jVvMtzFRKz74Tpgi",
  "key12": "5B8PM5ntYU9B1bwXWegeL1YvhP8TjTadAWvPkF4tsm2PKn45MUEL4fyzMzvV5dfZCXknhVN6rG523oFRKoYQ67U1",
  "key13": "HPsCoERzYXJ28caCBNVZvx4e141G4x7vcxivz8evMFW4Fju8vL2roeHLVhTf4G6eURtG4BLU12J6Er9aPgphgeC",
  "key14": "5xsyerviCBdQmr1NpBuXGWKRKbstfxqgtMG3TdZv1iTt3rpunHHM5v5r9VCMzUjwPzYZko2xgTDag1NdbY1S2fmq",
  "key15": "48MemBTucZHerT1Cj1HdbMVy9WAFfNsMjfxiUk9dVghbxQuGoPydCifA2hZcRPZCLugzYkqSBBbtz9LkanjVJYUg",
  "key16": "4H41qUt5XVuTUwuPhXJFVhjHstm5MufFLDoEzpxJs7fGewQYkydBCCSJxY7oAHsFa1i8dUNCNvhsAk6ddG5Bb2Nd",
  "key17": "4tRTaWCihSgEG3AoM8UkUiTcdU1hJwwvDAf5Q4gb1yFeb3U6t2Jphgap9zf3Bf1cmhDn2dLzbF4Co6dcJKeSPJRM",
  "key18": "rVqVfHSk7Lqr9cYrQAmDnbyvkXFcCGomSN8Y2RPNuGRcDBWHFJ1dgqgb8tiaSWX8QypfkgHSNfxhyYHY87R7zFo",
  "key19": "27PNv2acLvJaV3M1GiJtxVFfBqeoxWWSvW4LqXp53maUrE5hekHwJqggtYU4C17ssfSAmgH8nM5s4LhvFWWvVg2T",
  "key20": "5mN5sxRRKqJXMJNP7sRnzJeSBx6oyUZtHQHaaAdxVkMWBafG3R134KN5rUZELWmGxhmh7ksFeo2BN2xo5SeKeHpj",
  "key21": "4SkxBQYxk6G3EHVzEmSkTzHBdiFMudaqsRJVjPkgpZXYrDQwWaTrtGEA2x99kbDPLmATQVhQXSW47mZFgRWVGPMa",
  "key22": "2yzsrMkQpnnaTrvBTH6gnBLA1FCsCariT424VCoy9Y3E64N2qjTRcxgVFcSJidwbjjyJQQC88FumpVBeofzh5oeQ",
  "key23": "61g1DYdnGp1oxFGx88pgguA1ZC3AAci4HFKkFWkau65VsWhXFNCAkr45hreUKKai7L47PTCtM1HTfko5ce7qH5ib",
  "key24": "2UeMck7XBx7aui4UP5Ja1YUXNgumjwKbHFvpa7MU9nf487PzgjGFG7C9ERW6Z1jYd7QMFF9FfCVP8eVyM1KGUeWB",
  "key25": "48YV4L1kesQrQT12QhEgHeL1iM8P2XUruLNcYT9SXk7tMnkGwqkuaWG6hbhxobTu9p5xj61JLXsNGAxRsvHjZbzt",
  "key26": "34buQKT8bXWf8r7Ldp2yC2RXuF9MC9RxreR6B8WahCmTnLDpX1s3iruS7JEuMREzRwRk6T8hqK8upFE5YrRJpAHV",
  "key27": "4F88BfP3RUxysTsNFWjZiwbxL1KrueqnKSWLuQvCyFd7s39MNPbw1pem8ooHdRhd7e2mmDRyaDWTX1DenCJxyfGL",
  "key28": "9e4xPSEszCnUNvEyD92eTQBhRm4EcVXy1XTdDY6TKuDhRghJcbSabP526kEG1jmMi5ywzZNYTRDyWThtXszmaoB",
  "key29": "5bjqaWANDchhDxLFaTf5YVqCkebBHt17JxYBXRYHedk2MRoziuTwoN3M1pJa2wnKMpW96NsM4ePxjpWiWvZ8kh3V",
  "key30": "3snGFZM5CjRKyJfXKLQxTP5skRp6ttR2iA1X1SWF9vaXp9fjcohKdk1Hz13CtSm6VFBz16kxfAWs5D8JzgHyc9Ap",
  "key31": "4maiGR4HVb4umXr8McMyyUW1HLsVvoaCvT4nozDA6Sn6WvvrLupqAP6ZPy6y8DhKoVCbqR43L5avHYKH83qmaSq",
  "key32": "3WfwZFvQiRziQw7bEp1hBvsPBHDKGjM8Eigdsq3vKKnWt3fFXa1GPHP2hss7jHALQdRJmWkqee5btSjza9qqy6RG",
  "key33": "3o4mLykgCfVvaHXsrZV9q23irsjwoKTPb1Z2XYVsdkF2vDmiaSMbTbheQwHtfN6gamgKbHDkPamQ1TXx3PiY8wXi",
  "key34": "2M2GX2mnLm7Ks8keYKCXdvDBaXUeRFuArVQB8WDFkC819ePdKsg2vhdALPB11m6snBtG2nW2C7u9wAZN4viS9b6h"
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
