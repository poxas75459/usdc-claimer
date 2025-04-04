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
    "34XEbxPF5KosaDzZM791KrQ5dvk2A8PNRofcpyAPrzh6Q3mb9MQkv8FCPfaEVvFeC2bC3NZWFwtzLgnGyFMP3ZRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y3TPFsYc9VF6Q93QEM9C6Hb7g1A2nxvENLSje8ip8PRj5uckreRAzJ4jX42RnSJroUshaQD3tMXDT5BgVNTRZ4U",
  "key1": "2U9E4eDn6uFyTeqs6zeQHbVLMwMXoTt5ihbRFPZHsd66f6bXt6Y1cjhH8F9adE1H2v4wY1hvqzqr9hm9BGXk7vmw",
  "key2": "E8KNdfykw56WgWNFV7psKWPqxs4U6Zd5k6mhtWx7t1yGuS4HXPXYkPYJj9Uudd66zyvdwLJEGFjobpPG2M663cs",
  "key3": "4887mqUm4DL9B4nR1snCEyFnYz9JaAok7d1t5dA3g7EgcnCWACLdG1WXyFwYg6AabTy8inEdBJwdNbG8zZkUScDa",
  "key4": "23bYbh5t1AYvEM2MLbiz5Af9u6qvnPPvWRxpU18yHBQB4Q5JuXLhzX9WaFZAZUBS7sMaKeUUrK6xvK2eHXUE2tKQ",
  "key5": "23wjEJhxnREnoQyYUm8NsyL4a9rX3Q3EZe7v97hvKViDeYFS7TQ3cciSCgu94fUGYNauxEJgN7ma4Ud8WDAg2pYQ",
  "key6": "2kfUv1NK1EondaS7DtMYP7v5FoPdpmmLWUXX5KQsfHyUvZSU9QCgwMuQtrH2d6jpcatyfxmWjcpKvfRmiYpgcYfz",
  "key7": "i7TAPxqHdJeY396EeCuc9UXbdc8czNLwqpNciMkm3qTeCwyMDRhVqP4pQBXFj3LCwS56QguJgv7Ag1pftsaMC7Z",
  "key8": "61pAmzAtGX4AapaWvvSVqYEaLaEJBoNvCdttfEFezAdcoqDdNryU3FiZe3B4DGxdhg7RWj1pffHM1brzf3qHDB9n",
  "key9": "2TcJX4Qy9NXzYg7ZyttmNZnMRvwnuhijbWrD5VfUwsfjrpez1RD9GCeEYqt6HWHRsQp9qBvRWuW5zPUov9rkUErR",
  "key10": "52YP6dhoGgVFo13vkCoxCY5p9vehpfSMjKEc5oKhNovqVNbFggtwQNG4Vop4ubXtesW1yxmkLb2rSKEWb5RH15PT",
  "key11": "HFEURRjmMQg4ynzvUZJJpSgZ32TeCEhJuErovpWJNiGNR8YV8cqcLgkgScymS1G3FUktppqHXYatbp7CMhUKaZb",
  "key12": "5wnk3gUBHPARDPiPhukh3nv2UAm94g7JGZgwNkws6NkEry3NNfRAQveGSShT7aBkBqTsuQxYV5fcpiqQVJ3AnqMe",
  "key13": "2dFpJExQ4J7G4HarefM79eip7LhcPBD3bZ6i8j9FPHr1gFQdxRpvcEdQyd34wdzUGgkDKQRS1anBb4EbqG2EjYLu",
  "key14": "9jjoUxHFfS4cDmd3Q8V1pEdb2wzRARN1PMRWyxyJQ8tAKGBQnroyxheNUvF9nYh6WgvodPFRrQGAEunsnDK5WTR",
  "key15": "4ZsdeWWw8chJt6131y6AL34bBmpEArNjpZsAGqgvmhapPd77ue8D8drnuvi4qoSyhMQZED8vBiC9FUU42ycEpXch",
  "key16": "5GW8A8YZtoAHBRLBxrvTY4qbArEJ1fMiPKqcFqYoKW6ByRuPBpdXestmdiJ4SJG4XPWTxYrxZrd6by1o5cmmXfAy",
  "key17": "5RHYt7LkAgxSfWw2fqZ7zpZAzH2xJiz9iyhBjaAAscSnNDJJUogPdAo4NwsuBW2a1buR2xnNHbF8CgEaE83SWDDn",
  "key18": "5vq1ndShtN7kPd67TMqNvMjKK4aW4dTRYc3hmHPTFcMyXEBCURF2MoFqUyPfKtPZEHcEEL6AKNR1eYyhbon1RidA",
  "key19": "2RhRf4a1A3FyY71e6U9eumM5qV6NFtYfrioBccsoj5QP1BHJYZBZErWVhcUNCurfoi9vQLuATV8hYkNtHnKPBkfq",
  "key20": "5CXrxMnUmfjqCY4yt9oTunBaqUik8sHPsLs3uJzmy63ebvPSgvYegC6koDw2a7dEGzWw6BTensm3x3VLKLNdgRUD",
  "key21": "3REVq3WGEikypQKkMagrHVR6M5ozZByQHVPduGM2xcG7PMbK2AdwrdT4KZMFv4eL5v1RTPZdWm4qEYndiwMdrL2R",
  "key22": "ATayS8YfQfKbfNQ9UcvXisa8Lv6akQCuyBYCXkf82HJmqrmq5NmZKgWD63u6hcrVBMmcWK98YRfsLUgPejMnGri",
  "key23": "4TwB3Uh2Bj2Lof7SAyikXBSA75DAjvTLt7vLzscbkBcm24Upiri3vGs4KTbeqbFUxMJLM2HN6jqAHfGkK42pnf7Z",
  "key24": "25f5FFq58TDkCkPd7k18T58JzT4MoZ1HZLtfUa4AeMHqmM3BNgDGsA88r1xV9GGpogbv2hhbemcsnQfEv22t1wUE",
  "key25": "26PASGa8CN2AvtKdE2ypUaqqxCHU4cXdg9qC1stRLC1dw3aeCpQvWARemVGhLtcW4PGWX48qHxU5NVZg9K7bphsv",
  "key26": "u1u3XudtuZQFmEJ6Gqg2M1YKWkhpqkbD1dcb6FJLXHaw59csamKKb6rExdwzfXwmoY8e6tD1tmKHC7GCeftKv7m",
  "key27": "FVQ66aTzjQuz1daa61FF5K1bYzMy83r6boLNmKRMRqY9SGHXrbAjhmjdfT8VUs46kCrTWQp4v2jBMhsmh92TPnp",
  "key28": "FAhyACV4QTjdiRqKSJow3ka3vS2mjGhkzTKmN4drd6JCiyo2VvwHUUjSXpe8bquUJBKJiiriGQps5YK6rrVgJ7X",
  "key29": "5gHWR55ugSn42Xu2g3AQv73WFYcqc4kb6U8yujpcnjJ9uxa8hnoFgcSgctZrQ4h1tEwht8ua7gCfcBKenoaWuRLQ",
  "key30": "2RbxM7LiNhdKGp2u1AzeFLp42cgSg4zFzcV8aDhtTsfC6XZHuFYdfES13ibAqXebLqiYYsbRK9M2CbYLftEbrEwu",
  "key31": "3wjmoUhH23PSt8qs4uNcgbsUmJvQ1E5WHVw7WPrRYq7Z89ZYu9GE81AmG4Yc8XvTqvPW7yC5vz5oD1vLabBHFnRW",
  "key32": "3iF3RxNkWKZT2bz9eU1FxpNi9GJXCzJQ5hrRo38JKzygMEv3Qfk5MBg8tq2FNQBVKLFjhGskhRMUi4zcycRJWUPX",
  "key33": "2edmKh8vpuGfTS47bs65BjAnyS5VadyXAz7VgQEDcFDTpcQGWsvwP93nUi6ABh8kVkubfcugNEHofUMTy8R2qBaM",
  "key34": "5PZmzmV1mEwrM8VkqQF5bPDyRSDAoQzotQZHGXF5saps94UFZbbYGy4tw6kDf9dZEG8WRhy5RbgKeEZKZyT6eRqr"
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
