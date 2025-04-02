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
    "3dRjrt3xrcLTWrPRidvhBVRM7vpcWkkcjadVebUrmRLJj1ccAdQL1tA9sstceM1asumoC9oZiVeqUnVQhR3RBzrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L1xpE3FsCv4fyYETdn9nmAZRZ63r3tMEHjbVYCY1tN4Uh3i8AoM7fY8L4t9FcddVWLmkWS1sxhfzFUPryQgBAKQ",
  "key1": "nzfXPSspi3FZck3MfjFs2FBrktaRbuqomm9HEitrtZTFw81xwCcW3htyZTssh26CMG9wSXBcgJ2GfvjVcvdQj74",
  "key2": "2YZSY9ET4Z1Jvh7DYmwosbbYZUvZbv6Dpdbapaw1HSkf8MKyMaWbmDPi47umti3Z1ZXf3vj9AegizLuViJEshJ2N",
  "key3": "5rXXKNxE1uQ3JB98u58iPokr6SYCktuc1xv7gQCbDq39s286ks3a3k55Bzj4fJnrmQhDCsiQoeSjMtNL94gkLtqF",
  "key4": "4hbwavwKpunGrdp1EXhceHweKTUBxKbHT34exvq5AKrgS7wG4mvkFWR5VPT27Hp1GSZGwhPQq4F7RNbzNf62Jp6H",
  "key5": "5ucvXMojodrmp9TyDrjUocUusAvUa5gJvnH2bt24DyXp6XmFYy7x1r6UzSdcNAjfynpkvD1Wytm2zTYVp6ZoRkR4",
  "key6": "63dhczDoPQKe1otHNARotrC58XeqdXD9jwLeibPTEbgYhaq9QLTtQ3nEHPT7ZjR7XE29T5KuKSLk69mbK9Bb9t1p",
  "key7": "pPBtCPwT6ga4WaXRcLHe6ht9NgkAmdJaAJbzLVpd1FoBCx6kuFVyjk1BkRcLHbG489deTxkuWDo3mQeYYHqWgSM",
  "key8": "3bouySJXMPfCKLJJWC41PmqKWwwnX4z5E52PBKGZ5F1PvAMqK8AmaGZMy1o82s5tskFsGpRgadQea2nQ7nvSLRUh",
  "key9": "3B4tk4GbmCdjBajDYcKGuEbK5oPSJk8yGPY6FdihR6knuuAkZBRixZGYFMBErZfyWbpG6YmdcSAAZV7coG7AaDvB",
  "key10": "5HrtZFkyaQPo47BnNtLZWypLBmchafgR9dQ182UohNi4ebEhvF8ir6t6MwbsjiratQRCDcEJbufCnioyk5sKKwyS",
  "key11": "63ntaWyYHPJwygKUgN3LEwWAaH4RqCFqTST5XeTpdDfj5PSrxJ9w7fB3swVzM294cyFaFCRPfFnYABQ248N3U8nQ",
  "key12": "49z1gK65fq12NrEDZSrEXxTSDHPof2P7wKv3ivC322gGyvwkwsfPmB8SKyawnHDBWL5TiTQKnEbCx2Ujswc1C7Rb",
  "key13": "5cEcJu8ES6zAJ9cjF9xKQwCHv8SJUTqgwoFUgnZ1n5wiyyrFHT8TLMLddAnNFaZdiTsjdSFztBbcNVUhxjfwshmG",
  "key14": "5DAF6nyiPfPXSUsst3rmZeuak7fK5G8GtnJuYqW3x7JdXy14sa12vUxv3VQM4VyBdN9Z43p4maxnP4JsCPNxvX3q",
  "key15": "3dNE2HqoKQgTaV2RbBf5bXUfAwqQHyKZR3rnkFM2zXup3CyXLgBaG3tkpykVwcWCvFhNHaY2kV7MufYMVyyj1ndD",
  "key16": "5DwToiXi7H6xxX1KUF1ZgnP9MC7bsEYbwMpRt8i6xjh2aYM1uhXKFj6nPgVpJnHzMgAdEjR7vr4cy7qbk4E3oHJQ",
  "key17": "3gVX659s84fvYQ6BFg4i18tMUo454sZhE6h1Xa8XwL1Ng5tXhuLCzf883g1AN2fT1V9hzi8Y22HDTy1tJuQr9r48",
  "key18": "3x9TdoiCQ24fGw4EAKRSLoiokfzt2i7spHwZHsmzDoTXxZHEfd92ewoQ2ZgTaM4CmLoduv3MafQ7DiZoq4E1pzNV",
  "key19": "4RxHbpmrvymsrYQgSi9yLKhshBfmsacXjHie86caZykzdcECTzW9aSoPk4fvJ3uYoCYQytBc6vVK7hiJu8p9zKsJ",
  "key20": "3wiD1xms1SmtkX88Fdoh5QepMa8SecT9dMA52y3Zv7ysj7NWqaJXrfhfGC7m4BcJ6M8xRuMzVStrmFsbL5npmYK2",
  "key21": "3wDS4b7pawR3ZBKW2cRniogDkgoaShdQGPTjnziTx3f1nSUM7uR9aau9aDxZ5FxMbrRHrqvrCAsxfMJDxCSbq5Fk",
  "key22": "G4oLNzSxDkPQis4qcrdPZesc9cMtuWViWHfQxunYhSmRNxxm7gFPBufympB9jn9M6n6dyUGNXKRymvvstEttY8S",
  "key23": "3kV87BWJHqmDbrzqis8fpVXqAT3mkRzeW4ZRiTs3BGHy8HArmH9HaJEvaz1XNgT61bvwAh8hKrh6ZD5x3kMjMg7M",
  "key24": "4rB5qyQZQqyCdh5Uf6p5tFGy4YDNXyfG8goQT5UsArRPdVrvq9fpHkFzD53Cx5erAofMEna1xwfbij6yCLL3HuT4",
  "key25": "2NhKTQdUGm6UdZnc1Vm6VDtvyQNKktjXhajbbGtXrZkj94M8MzMdGR9pMWYRk8eUfr95ihVGGfTfZHFoZXTZDhWr",
  "key26": "5LPcC3qos6ZVdJGVoqYyeK6rqjCQwybPgZToT9Kvsmu9MMoskNghrxVdZKLqAQdgEiN19D3pzfqLSCk3fpYNoVT1",
  "key27": "4QC5tnUoG8zzXK3TK1JRzaDPgMKggdGU7Thwy81rP13PozAWA8pK2FiVgAwzW74hMdBwntpR9G3ehhwmsPK7DJnC"
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
