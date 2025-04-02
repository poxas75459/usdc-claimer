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
    "3rzSuQM1w4wzNB3SHRqaJ3pamv5nFfDXw7ANn91n2eTD3i8GHdXNh4DzFwhvUALPj7dWiCaGMjRmHGWoAbsJfbWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n8GojkHNNqGsAAZTfbaew42HX93FWaUXnkaEuxrUwqZZQPiEjsqymUgavDG4ga4RbC77pGEv9KgZsThh492BW2W",
  "key1": "5zDyc5YnrVm1ga7sw73T448swSD8PxNcp9d8ZVDd6EkfwowBFTdhfvVod2VLnrWrv3g36thnvw4ftFvBdQyt2TMu",
  "key2": "4nMpjhLcd7bMHQbEXYKLJh3rd1PWHbzQNd7xJrRDwH1XAJkQrd1V27oUJ2fRKto2CzgSc69cyAAv8ud5ntYd1Th6",
  "key3": "3Nkc9gMjZ8A36ENrcCxcCzpHqn6QUt6jTzCd5QcmCwpgSBc5ZGK56cj2GFWYGT6BHuWsuuzAvYeAFQ8gBb4dN9Ps",
  "key4": "3dgedUJHaaM1bFoRrWxHbTFtweyDVJow4yU9FrV2bJN5moU9hvA47Xo41FTxAgxizKDK7Hb3zituH8aUYFFYjsPf",
  "key5": "2gUmzL14UrFPSHwUy9p9xDy7Y2EqT9623zUUMTgKyx2xXZpyKDtyM4muBs2euDTq9TVbieA66UrSPApzsioiSEcA",
  "key6": "41K7aa6SKjSNwNgqMw6h6NVMvMg1iwaBxXwG77Xq6Fr2RZS4BsgVtp5V4tECvbSmWdQQUrhXGhfdrtDR7phwRbUr",
  "key7": "2NFafWreeizMcdhHysKU4NePn16CLcMJYaprRkhMXwf89JaWojoGjuFPdKJPBmdfTtG1ippyS9AGdh7HtahwZbTa",
  "key8": "3hHM6QawNgpa7CMgDULW8fm4NyJEgqwrprs3oLns4EKWCH68uU7GTpbNQAwEaP2c9YrSdc9BYTCkFybzKyyNzAtg",
  "key9": "2nNGjhn8uud9NGN4a1whnvuNC9a28muojD23ZCUn8RecQMyL3tFMPc6b2suDDmhmGae8oEugQjV2daxXGKw2b4x8",
  "key10": "2MsDGhh1JowaBPvNXVRiLwnNNiVMB2dLh8mT5f92CypHD3MME8cYBp4XbM2skHgDQ2SizsnQNgfcmLCgohBmjL6U",
  "key11": "39x9gVGGd8RtbKzr7Dv6RBKCimwU4vnqufW3udpbHohuxbMqMSiKLNLpzbs6MSn9vSv9czb8gu5MAoAVxHRvPnLj",
  "key12": "3E5XNo28xbTuNTV17ZitSDuT5k3Q2wXLkrMQRw1ABV4M8y6hiuXRbK3KzmJW8E5WFcTRGLDp7bTkjWg4ZC5uotCd",
  "key13": "4Z9wap3VWAjRbNwYFT8DHqw3Ft1ou2YRHnW1fMKGe29Va1wtCKJFGNzVKz8QbEauGc9dDbv8wagKmRzoQ2GYY67P",
  "key14": "5zuE47ypDa9WAyn5NdLxAEhmQ82gRrJbGgX1svUBG3LWkcAQ6QETCqaxiyjLggV6NZ7gQhE7LHmwbLWVhmPdYStY",
  "key15": "2ct5N8o1LCzaDxiFZrT2UbrLCGS2ZGScCfCQLCsuYpumrSshdtVzJnwuA7Ho6o9LZhfPfJRCa6bpLM1azseRBbDu",
  "key16": "2saPHdsGNzkEeRK2o3ekTtXRSYVF4o1mEmC959oED19d6o2Zv9GYyxhqLRMuk7ZP9XahsptAC93pVqxPB3tSwSvg",
  "key17": "57kUirTLe75NpUzvwjeYTdSvi1kTN5KnWgggCByutdKjQ1FQQKiAjQFg24xhPC4hm3ozPG5jLKEjFEdyNusyqsm5",
  "key18": "4xdt6FitrGV5qjTuSgdggBC9kdij66hqGpWu28nuFJyQ7bNS7cBMVA2Z844RWoxTnnq5PnfADk4hEnboT6mc7GSt",
  "key19": "PhMcDxhHMuLwYerEjZTeA1zmCYUTLK8qC9EYQNBFKF1M6VwF5WV5kb2jAnADrvwmCEeL8rjQyPasd6tpiQGdbAt",
  "key20": "2HUERpxqsPkvsdsD2szedayCByvmcpbMEARcQ3EyrSDZvsg7WzcQEnGka8JeVUXCrfNJqNiunNvsD2Xjbkq3JBAN",
  "key21": "5e13HYpdr6v6JWey6ztWPzs6S2UEF2Y98LPYLicMNjUw1CyTvBKNVKB7cczssrUfB8UZDrHByxRULtUehv5AHS1C",
  "key22": "5xSrNDBq8CGWDfkJ6qMsHBq7ZHFUA4BP4gDEdxh71H383Qn1KTrdjyWeqjfPGSbDfroGvYNxzoV2vXMCrWiYRFpV",
  "key23": "2bA8mv7cPqu8DphBVrRE8gQ8VP3BJ4S2uYrEbU8kXKv9AfoJ2zFFDQdaocbo1qyPXMJbEdMq3hxNS9NcqcAgx2Ur",
  "key24": "5LRoJtmJTReQMhHQ9G1ekXtDfyQ3mEHC1xabKbCScvfvGwqw4gpG88rAdN4PfoRay6wUjX7y1iPR8b9bXbnny7U4",
  "key25": "5iAgQisf2GN1scXN3Y2vX73dxxZX4rBqTCvPESRQijeSNnBHNPKMXqR4KFU4LgJfbvwMusVPK5MYNaPZaHAGdsX4",
  "key26": "3aiEHuVJE47DftAJKCs32P2vuufTZittWaTTKWJey8LwgXaH5KqxNiRUv5xhQ18BZYpxjhn6eYHX94A3mTGqged",
  "key27": "3sM5kB7tZCaMjA7Sx1ZsfURswYRGAgmnhuesvGiDvMiuNqMJjLd7imLNEy8Bb1VaJDiQLm53tgrthKYFBJXzuxiS",
  "key28": "3hxzmsbTNYZmAk34soB4obJ41dadPz4aCwkVet2zGSnEV1dvDTntpkqpm9GWrC7X4bbPd399YUbgsESrFUPufB25",
  "key29": "3U6EYdYmUAiuccp7VixthWRqyhxjSMY5T2cnw4oxNqjE4oFhBfpdszJeTEy9JeeseGFHKCJQHXH1kQgwcy76EkiK",
  "key30": "4Xj2Z2c2eyTywossncmSWTahUe3yAaA6YPxKyseWHkeAt9T1RTyTf5mqYspbiP8Fn17FYjr5WEpucewEDvVGgpQU",
  "key31": "55WJ4zi7NbBbHme4sAj8tMcNwu6NxdT82GzSR6vKD4EdMcVV5TfX9CqmtaAJ9Tu57mjuJfgjrJATXhGwWyCmv12Z",
  "key32": "26NRURSA8gNe1jc7pc5VCWt8ota5YkvDvUG458z9eSJ9zxAcT2fcVhx1m2m2RjVawD2ihumQnhp3uA1SB8sZKhMX"
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
