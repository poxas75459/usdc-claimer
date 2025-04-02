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
    "2LUtJC6UMEAQqE5hmrzpnUmy4vpucnjiFvWpJcCEmxDca7txDgEhy2TUMnASw5zL2wXMV7s2PW3HoeKK3C79vVPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UL8GPywRvtBkTtgzSq4cUyu6ckUihRtLKQDhz5tgZFtKhX58GyzTpMttYQJr7LKzGRtXAcUZLouFavBj8V9zMsR",
  "key1": "5WansdWThDmg3Y3oCXThUUTHNbifqEh9M3DLtEVPuHKGfYYrdMEJBWAEEUUSiasgapkUMYpAKNZuEk5XPdN6dzrs",
  "key2": "3faJ25sBv4WFRspFzAaBwhZQFUbaiR99su7bg1dGPmWg7BcfCaAHtKKSmLRCWoov2245dHZuFqmENkjj6PonfUtr",
  "key3": "2T7q2QzqTzJPvxPU17TyUGNvGfZ5XhK1GKQmdZ9fu68sH7V2mpW123xRjsLV8PSnzxPvjHrSQsJYAM4zdKPbTgyA",
  "key4": "5wsCZamps1PHApYegFruYrmdmtGjYjrRJbYn8eA2vsQMp7wbAez7myXYoaH7366HSSHLKKDFJBj7ggxuUjyZZ4CQ",
  "key5": "3QYe2pJHNdANQnNnfSCF4eJ7hXTJoszhmSZy18n5reBTj5mgH1CwvHe3rybL2Lyeif9FvEmjhVDeQKL6aJQnjxjn",
  "key6": "4JNU8zxF2Wdh2bAozTyH95jA1PJCMahdr9ASHCaDB92RFCXyujQVz2SGEtjJpUBMaviLU6TLW8A7FnmUGmk1GyH",
  "key7": "4DSUdWCz6ckhGvWhNqKa8FEZK5fwFWxWW3Fbc4aWptLjTgWNs5JCLCR1FvqhzZXaZtBA5naDXtKdjx9vznonsd7o",
  "key8": "3naHkr1Dvj2JazTTAnkXkzYWqTzRM84ufniTrwALe3cj9VXTAZqNuhPjyPDYbis8WKVzwPP9Ph9rN6jmzqdmhdQT",
  "key9": "2tA8waWAB1PFA5xvPddaM4DfemJAvUZRo6WR1Dt77N6Vwk1gtxsDjRoH2P7c2KY1RXZWwwUNEAYJXYiy54enP4ho",
  "key10": "3uptGYEP2fcjvfk6XJWPaoFXcUMvadWtNXxe36GaQAhqNRM3xdBRANE2RyHcLGveKnvqtNYbsJ2Q234VYy9gmRY",
  "key11": "2Q9pJVhrPsaCeibtrMrStaTyUrcxx8zPueCmznmPxn5ECbHGTeAY1uwEstBbsUmy5ztRUj3a42mrjEniKc8858kx",
  "key12": "33fbZWjbbhwsoBM7sPXf73EWeosVMnPYcuKq7k2fSpAa9NpMqBPaCC7eZ72NX4uWD2jZTJJShnj3GSUZU9nuWoHW",
  "key13": "4dqpmjg4y6VCmn9a43RwLUqkAREquMEbEbzTmZPJJPgCVZieW3uryNVpFagH6wPq58DxfM9ft2bcP8i1CGCJkCZ9",
  "key14": "5De4KAyEuVf883TfKjFphcbEMd3vtnDZGQyStXjJysvm21bxhphJ7FzWzR8WqnxDYQQhMDe6TXZS594JTrdxN7U6",
  "key15": "mmMFsYCPtpN2JX2P3FYRuskq1LttiYNw7DVqXsSAcNM3NZ84BNv4322yRxQzeSJ8tT3ML98YqkhozKcidF1SmgP",
  "key16": "26MzzYbb1yyY5XhRexEKGvEum8MkyWS7ThdCZrX6ZGZzZ5bNqh9u1DoYf2YuXiaiiUhs5azBX9WDdDuU2V6NZb2c",
  "key17": "3NPcZFweDbCfCrWDz4jTrbtco3puWtFiaycFWb6iqWkt55rvZ6qJBb5Dd3AmwXyyWuTna3JhqtfPREyDcAaUSj1L",
  "key18": "5LUVRiwBbiiPGPbE7yoDVzhx6PAQAsi7zJ39xc859XpWUGw8o6nMitje3VFLFrCQxNyP9GBjLPX5hsXVQJ5vnxDH",
  "key19": "472XeN5Q6wnWCMf8FmFsbxEtyr5rQUN1LWJqbtD9d4c6FGLLPb7YjiuiG3gEhbMQj6d9S2KAAmGBMJpNzuDNrtQc",
  "key20": "3L4cUTnohizzmSYsafKNDWAiwijo8Gqcm9SuX9QUyFQUBjWKNqbZbToqYGwHk2qV6D6xZrLeGLkMZ7GDSV6w6Ujg",
  "key21": "JBoEHPmow3uReaa1Z1onjWGn7y3abYoVepQ7JJjWrdk289k3rVdV7cKifmW2nx3vgKjR99iWKYwBREvnHFRois5",
  "key22": "5EhSTiQKFt6jdYLfYzyyWLJ4LZjdYp95q5nMDk6o9k5i6pkJPyv4VTZRu87SWSTC9NmBNeiw6kEPM9TYMoUizU5P",
  "key23": "64vGqe2hgnRWvMwhkgV9i2UDE8rkcj9XA7uTPfHSqq1ysdmxUdSW98ZNu8dkVwPD5EaF26ddBLsRUp4pr1Xj8CJB",
  "key24": "ALNjg44twVPFcDnom3hNSpbAHdvG8L5NE6vQinaZr6zgxgUigR6sFGsCyEVaBVmypmH2nUfPFseiFppzosSqvh9",
  "key25": "44YSeba6LBx1RvCQPrzCEc1Q2NyM2vJ3ikc4KyumGZScEqUSoaN3Ah44ojhuTTrBYa21LUDyRtCbCUm5cjdLA3qF",
  "key26": "4mXUx7DDkvqu4Vu3vRunuQyW1ue387WjQci2wnSvoT2AGjM6EDnnZKnmFZ12MkLNsNqzTsctZ27xfqDRsMV2xgtQ",
  "key27": "n9jJvkiZax7fsaQTAhCpNoJ2G6S5FDaYErm3eUY2CWh2BNqRMC8Xj7GGprZqizEqfZ3f5KaBMKcXBnaqEoCP72Z"
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
