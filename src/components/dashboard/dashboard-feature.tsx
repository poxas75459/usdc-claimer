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
    "33qCjc9VV6gQ6PDsBShjq33ES2xqfn7TxocJafPqKUzqcJRXEHLGyGGJpDyBonVGdAEzh5EjRxZNKr6gT36uYTuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "og25wjCmX9BaKmmfcCYshxuqYSFmjp7fjoYXcPACUkL4i1yDiEeg2W7MjCmUYeUsux2QcaBZjyudnHPHJSJdBKy",
  "key1": "4Gyb586tzr3REhDtEXM4hdvqLAPqBuT3v9JTjQEtPfuLuk63eBgupFwhssQSw8PMwAQwg1o3oEF8qeYkVvnFnhvj",
  "key2": "5coRYXFmGNinp2Tm9DP4yoeTSoLpB6UMpD5EfaVoBDYXZqzDN44RMUPGAKj29hMX5jpghnxUKfyDTxwWjrZUBs6D",
  "key3": "5jsmRYM5kVAzc88hpQTKmarF83ZZ7VZmBd9svpn2aktaTJRgq2vVn2c9VXcGzTLGKUBFjE1aAh4czFqwqjrsgx35",
  "key4": "3STb2KSTT6QYJ8sZFF5CiqoH5Wrr3LTPE7teTfMPRE9mkowGyq9A7RCCMmSHFFjn6XxPtuRkKVR2MvMqAq7yAufF",
  "key5": "U5nDnhn5hWVSK43SMtjogJ9r64svtR76PWn6Gqn9AbvVZ1uaqdoZfEZRobhQGmF9Sng9f8ZBPSAR9ZeZUfGotds",
  "key6": "2M36ajG2KomoxeKGmb5Ca4taWmNx64rnA6GZTtKndZSVck3JgbHv4EksGC7T3oy3SwkZK8qbFWJDmgy9Hxv8Bh7B",
  "key7": "59Dqztxhi3TNZoQ6A6vmpciCaXUd4pzx4DKxszpbyBjoVzQco9p4qf9Fg2bEMynnerzCetsx2EcVU6GhzXeKvgWf",
  "key8": "43rLu7kGGTXDPqLMHvMRpUcweLYEG7uFjPD79ffyaC7c95vxu1jyNYfiMpqMqBuR3zAUnW2uHkha4Rg7hcdVw7gK",
  "key9": "g5uy7GpoXUrq4shfgZLerjKuU7JEfXNJhZf4HNZstGksGjaDsJW5EuZcy3aM24zH1R6trb3ndqjgcanuPqKdYy3",
  "key10": "2j6zjzHmsuTK2fW7vfvNYUR7sHmiXhFQxsgD8m4Jq3KFzeqte2E2DCMm4PuW9odrGsixYAZYKNygX58h2wUD58Uq",
  "key11": "4y3Q4ozaWJ9JEXzsu9ANMrNzmMLPbhupWJE6qkhieaJBSsobJ9xwVccuEEdJmAH4bp663jixjCWoJ923hrJB6rP5",
  "key12": "2wdXJKQpvGvBd4u37PBSzc3yb4gAvmVXtsva6oTEaxdUi7eJmbCW6U5Z1Ed5rvaKgJRGL4Zihsg5gSWCcjWWqtq4",
  "key13": "2FigzNCj4ACTcb8GBFDJYAox7rb3LKJteWv8jkSWqEWTydFrPi1YFiq3Qs5amtjmURWfnjHz54YQ8E4MhyjdwXzY",
  "key14": "5WaSdC4cFykSagwiBCaqugX9Zhq8vHRX6JeuxLZqRFWNiPaFCQoSU4FfBNQP9e91pnrVf6i8Z9GZ9orMaxtfs51V",
  "key15": "4ozTf9LVJmG8tgLw7dYwJu4SvjegdKLcMLK1VntfpJMtZ4qDVSjGSz3vjPc8E89MpwWXXUs3ssCHAyESMkPJbwwD",
  "key16": "mjMwTgb4TqLvJ3xspkj31ChypMc6aYPuKVWhTteDu5zNxAaoyCD3hWJyDKoJvUgGDCLdhKNZpxWJJs6jsLZsjdC",
  "key17": "53DKXZRgHqgnzMtw3NP3kwX9gjWyPCgkq6vASEVMb9mhrnebbMu4e1QnXC3gafSvtHJ6sJz14LGbPdfwAXrQQibE",
  "key18": "4jEzCNaafLh4cXZzm4UKjRkpL6pSVY92cH8mAf81G4Tixwthdd7ZNJoNF3RHizAgg1cVATyrheVyFW4EkSdBBPE1",
  "key19": "w4ZCxDvWzxfAu7GsdXW2ixcfBWDXd56ArN8x8A1GnvjyjkvYDcntNbPezP6ZMqTPz1yFeVHJMhHgSgK4wnyE6Re",
  "key20": "2kKCVdrpZPkUYc8MgDwLkXiNciZTseEthraZaHr8e7g926GFKTHAA3htBhZMGULazb5iTUxPF7VuPdzcnWnPaK4u",
  "key21": "2xJi81zHn3nm5DuC4b6wZu851TGrtQi9qL4qnSRNU3Nia1m822rfj3dsAoDDhQCgxW7w7cEHK31qFQjWMKnoJzKC",
  "key22": "ErdNRHTqG8B82tfseDAMkeRSzuiXJ4ukVDWFqoYrTMbvFbELDwdN4eTz8K8VU2i5RhvWok6m8C7YAwfgDbvgJ6F",
  "key23": "2DYjKKMANf5cgCyKsKS2vYnTcEQp7QXcALFUDfrJHwemQfvwApSMmdTxczsGJtp1C5kaeVctnXeHRdUqMuRVVzgC",
  "key24": "5gXucDbM4jTbgZFhkn5HNw9PQfxfoPEj954Y9rwcedNevbz2hgWeN7qifGyAKMfCipNuMh4QmBMZFVNTFCeUhTuC",
  "key25": "sc4KxdLCxvrCGgzkwrsPEgUqvay1kDZCDidPwVmW6LDvg1yNn5uvsUsbwSfyXToyZFuq3eXFceZKnhpcL9HToHB",
  "key26": "5eX3E7MQZvi3YSZZ2NCarbq2yxuN7JWjwMJH6C7PxFQViZTFJ9TUxdUVuUffgRQ2Wq3bFNcgN5uJJNANNA6ZeLZD",
  "key27": "YPhKmNswGXGMSdPYVXwupRogMuZfQRikjrez3tBfaXqNAdywXevcAbskuhiquDY8Fik5LnFnaXa8mDgv7zKpAMT",
  "key28": "4k2oNsFCrjsva5uJAciauL8SXvK5HrC8pf2Ktw4kFm9yZeQLAaEvmF4Qjq79pkmof6WdTcpRepyD6Xk5RXJ5gfF",
  "key29": "4EejSduwP6LYwqHhtpWeBxzAkVrVJPhmoLhPDnPjRQiwtF1Sywo9SvwEGETcgctDH1R8boKbkHN6vTUAf3RxQNS2",
  "key30": "hJdaBypThmcERiTwVxuHFUMsy1SKYRkLF33eA8GLYfnNHCYwKGLpLehb8eMJw5Nkc3xESjvjA9iocSsiSi5dpun",
  "key31": "2iRi3D9gzErJW29ed3ecmkLc1EktqRHkiAmyQu1K3QuUFhfkxNKr5BrT9GXqPjRcHXimGorZqBJrsAYGWAPHqPpz",
  "key32": "3dwBm1VbifrorZzB7uAY66vMkZ7LQQgZG6pH7euVtFdPdbzvwi8C7wuN4sm9zRVnywNVoSwxa9TugGYUVGkVpuet",
  "key33": "4JFaiRR9VytLuLq63HgaZN8xktyFdaxn8C6DV8UMEE6HHXa3g27bB8gSxW42ARXgbnwEQpveWBmLYdYkMgK64BHX",
  "key34": "VqbxatCuquqa3EG6mbkV9U5v1Gwh56gx1NbqaWYcizkoJ6zxTvfHZFQ68UHc68ZU5K5EH5WW4YWNCSSLe7Mnqs6",
  "key35": "3xHpddveRTYUQmcMGvarKendG47arCeXmMxXNAYkXtUFnFZ18wbCvm6nxNbwJjtDbCYvhAkyyW38btzK75euXG4K"
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
