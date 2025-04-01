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
    "5tb887LABDU34AqZwhghJkaSaKNuSLSr7gbVdFfiJ4dMLCtstKWAfQvwjoZ7M56c1NefDzAz2DxQQQT5JyMzMRRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cv4t8r5QiV42WaKPADKQxPooaVTkwtjmDFohKQXWky7MHvnBN6kKT2Es63bAtebPCWKyvEkwrZ8XMmmcXzmPPhU",
  "key1": "34vJPjtNs9bN9K755TFjMCTHf4chxVSk6Vafwm9DZHWZ6b1vVLBvzB6GwoozJ3xf2MAPeXTvMsDtWj9Lpkot5seE",
  "key2": "4KR3NXkDqsV4YmSyUmkgbgFLMK7PDKFTc5awBTRbd1MDMqzKQ6nZPLXFzH3DLZ92rcsNrRTArL8C4eKKz9guBLYr",
  "key3": "2jbL4zGxdd5Z9s4r3UVGJ7DcQRKc7UjeZgXC146JU99WYcKm2ZHSii2cQQy314nWaDVsUwfumcbW3DLB9PcqEgFr",
  "key4": "3mopqJhJbQs5XAbdiCcv7VmFYMbnJR9sRpYcxeQGcpNMCN29x1QTQBYucBandBp8VSowcPtaYbFRf6K7c138Hqz4",
  "key5": "jA32mKBQvHFoSKcmhTzK9JfjaGHqHzSCwwoCenYrREfzCmgceNyJFngg7Adr5FA3Yho1uUhbnJseVVWVtg1t7qG",
  "key6": "5xVy2aBq4DiJfTf1AaCDb7r8yGRsxmHqrvVszhHseGjmoPNV4ZgfdjiNUbbyY9wdFDLMo9EQMYWZWNbiKWspQ6Bi",
  "key7": "4nkjheXd65Qa4nwSBohaJfFQyhzMR6Fc3kwz1qArwPhzMiG6dwoUoHwhbGMVzHqK1rLaBPPa4Za2BEf97WhYn5H6",
  "key8": "3egBJNitvLKkfC94LQ5eqx5y9izX8q8KAE5Lqb8AinojDoFTyUsM6tqznkbSGhW59VxxcZ49QezUvrWx9XEHXtkC",
  "key9": "66PhWDXmnJUM1xXNbqQpScHe9YboT1mTfxfMRPMyS5F3ZSZtrpHmV5iWxB7aWN7xNsgV6nomaGtD5h3pmMAYX9GG",
  "key10": "E4xQkwb79v84JjXWqr8MJWSqotQxetW7tVH61LwggsKBgdv7dN4woNrPVgvivJtEprXXBN7cLZzFfmFufPKJxCD",
  "key11": "3BcqWKzgDHRtaqHavwL9ZFTiC1NUtV8QGgoGAGiXGTqmWrrvufGrEimHaeXASDixeGyvH6knqoPBFgruySq41iVS",
  "key12": "67fx1aq6vbEF47j1jyofmAmTLquMzBchpYNhzgDrkuJzpEccrhtXWdzRsaeTLuZCE3Z3UaRCLMF2wQa3xBRB1EKE",
  "key13": "34XjR8SBzGyVeCyyzLuctVrHQA8Fx65Xtk7dsYBBTk9iu2gEcDhmN7Jtjy2C7xc8BrWWaGdyASEGDStTsB3ejmTJ",
  "key14": "3ehWrarsQFSGW3DgxRiBfCnA9YueSxPFkakgi5RTEtpZTVhVBFvfL7q9o7PrfUfJfaHoLtzsu4YGyf1jmx6LLVgi",
  "key15": "5p6drA6BXFVJz4qGjBHBKhULcpjHWmskgYvoa1Wu86Jfzr2Ucfq2LWLRfYs5i8kLbLi8rZaqUgix7kD8RBP1CvPb",
  "key16": "3DQfieYFeztmqhkfdu4jJSSc5cdBLZA5UUJPqn1Xt81HB7gUgUuu8xq9TibQdMp18qBMRHTWT7FBVgwnLQjkF7J",
  "key17": "8UGceDGpfEei64hBZHEPKxCMQsKnYj6L6QeWjg58ZxVo3fGnGomsPP5DnmUiXGqbamnLjGJYDWjFwCZjxeZ3zHJ",
  "key18": "E6kvy9jZGHJM9fNbuoBMkPatSAbyMkcADVZxVBMt8S7vZndDCHYVy6JgZ1svkx8mM2P49b9rPEAzTAXgqcywUue",
  "key19": "2ir6hAcSikQro4fZ1zuemv65LskxUV8mXJtYjGeVpvro7pWdF3kssc6uBqbC3Ymn677ESkbvPwTEj57xfSeX7HZo",
  "key20": "5w9DUHJQzuvt3SwSi9RNgPzKBKbb3gauveZouXBEsd4wSNB7rxw1Z1Q9yH3qQ6ctcMZrk8EnqtFcLYcq3Usztv9K",
  "key21": "4KGpnJX57PCrfkiqZchHjh8nrbwV4Sy8PDcUJMDrS5uFb1ZhTjSEHArnSP33ThdGDuQ7MxcypUMKGgvccCvxcnuR",
  "key22": "X2Lq2BH4v8tfMFJgMqL6SEbHGyd2HeCxqfwxTzkuxiQkeM7qDmwGyiWrypeUikteps1T4tJ6ye93TF2HyPvid2k",
  "key23": "4kD9Kk7CvrQGWnp86YmKcRUVuiSZkQcfuRepSJoY26AavSYWT5WHwaoHwQFw8239FrdbhWz36Lz3EyVua4ryMkp5",
  "key24": "2uQzE487BMMAozc2hbPPs4GtJV3EKBVq5wF7AXA6dPQKLfNz1DAnGUx3crgYrWuKYwNSPFTfznuhT9GAXJgrSEwN",
  "key25": "5gabwnkrWBM2CioJr8911N7yFsTNT4cz8yn21bKcVALTURcmoros43Uuz5f83DpMMyykFh5WLncctA5sHeGeGVJf",
  "key26": "4Zwy5dioVGDN5D3euMuwXmBS1apyzg52uxhV17AsGx84REVMLP7iHTMiaGsG4sKzX7kKxzFMPF23dh5pmcCoP5oG",
  "key27": "3ELzp6wDbS1rMAoL26as75vEgzoCPyH1PKAFkLmybBfbwZCbm7Qt8wsWN46Mj5j6D5fXFKZGtpZtJafYPUTtt5av",
  "key28": "dsSAfM5oJ9GxusqmYznGpD6Jpp4bQdECHoqvbtwP4YtFMEYGbCsc5FWuwGB948AizJ3rpo9Te1wTUtEziJBDfjr",
  "key29": "QH55fP68WMHiQexqwRmpYFWkt6sjLRT78Tm6mCFw2EZ3QE4cEafKcge9tBR9LFkCxtyMUQoKkwxPcDHratjXZps",
  "key30": "2RVxNwjm2TrCcVuCiGihLYjwUWLs6ByVWhtzLVTXGtYEQjE775CosPGBRaFm5P62d2vngxSoTmLjqELhQ9XWHoVm",
  "key31": "5MzSL176om8CMGvk645zK2veL9iYgeC9QdTZ31wJ5kUPDRjTTrHXQVCMAr4sbqLfTGMZvpEpnKcnMeDvy3FD2CHY",
  "key32": "5zwPgf7h7yr91Xo8gomR4SGJWz8iekLNPaXT1RqkHSfHErda9WCnucpMEi2sGUW1FG8RzVp2pf9Loew7atnkdRPZ",
  "key33": "c8QGngjN1i6tE1cujo9xgzrdAcg8WA1u6W3K7cdJigqGrQAPeLowdkUxuyNffEqrmd1Sexn8VwqRE7VdL5vhnD2",
  "key34": "2wMa4nCN5AvyJnmfyrtHvCDVngWnbhfbGsqgeZW8qEznPuLtFeu75SvMt6ckmxv8J2cY7C27yWBzWP4Cw9XRH1d6",
  "key35": "29dhKzXCEjfxihQuRCaYyj7femrDw1g5eFzxTDRcDAehhhS5orkahXmAetmfue7DX8yKWY7AEUwKC5qBBNTdWgVb",
  "key36": "2o7oow7jEvSUsqtFVBaqBgcQjhMaMXKuy9G6PdrrRMsCE6LKD3qcq2JTjJU3b86ghWvzdqPyAW4qGPHhhhTPS2t2"
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
