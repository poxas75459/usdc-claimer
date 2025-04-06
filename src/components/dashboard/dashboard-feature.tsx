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
    "3QVt7qhcLDiqfqcZBcGskjwYMKCoL5pqM2CyhgBBZYKttHdLYEDA9UYg7nrNRUiyhkQ46B442NqYhhFYC31mEFxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4weWfSXYmF8K8AGiWaN57E9qLwUptLGw81i8yc3FrHjuQ6XzXpuaZcfMB1bnX1pMuMNaFqZz4ErSyxXk1gPpdHXD",
  "key1": "397PJ83cnrhajz3nvtY7XivYGcp2noQVmFDcsTjq9ofrqZRuE11SdxT6oMqyJCZCoY1AWFrapwyxq6W4roeh8yM2",
  "key2": "M1VKCRpU85Bkyh2hyfsdzuvcDWc4JrXmQ5C1mbYSWvkPMpf4rNPwg8wKWJEtFHCk8js4yGTomCNH7WAF14yXg3r",
  "key3": "2SjZieukeVcXwUCAJm9se9pEdMRrq131qXByLR2vH9zKrDvnMgfjDQWK29gKFdqTfBL6JgGgLMnc4eNh6zGV63YN",
  "key4": "v4SCpLD7xrLRzWEodYGiXAnjoA1HCTHDKuxJqnXuDE3u2FpVGwwKCSCt4JETrk8A2c2pKi3FhHLNhnx81T5fqBU",
  "key5": "Nntf8hnJqe6CWhVnCCrfHJZ1LV8TzrUn38e5gjH1ygYzRf6dPSmKmozZvGcCS9B8rDmyKMLLqoQqzyyL2G87TiD",
  "key6": "6bBcu9sgR1baSjVzWGCQyURX3VAqJNe6UquampreUzqDwYNBxWD4gegB7eueuJRmvysBn8QNyBVM3VDAkGYicjx",
  "key7": "4u411MYCGQyUZECG5NxcUcCvUdmbpQrsCrkX5ju5Td5rhvbe12aM9hBmRRFRj4qP9RgVaRemVtahZFLjPspjxDK7",
  "key8": "GAY6t4X2VLvkEcVn8ENTXufnjUj1K2zkfEupRhCEQEh7gWd8UZMLCDHEEEjiLoFnuRmFV6NXWUWrjL3WZ1EU9jB",
  "key9": "3BTECRND8c5gi9Kbusa6oZDYTBQ9MQzmXrypGUdongFqDeM25bxt3tGM5ruLomW7x2PPtHzgDTfpdJ5g6GEQrDeu",
  "key10": "4A5wUpSz5yvUjMBmq31huKb4fQbSbfQvBuse9v9x8ugzFAGXJX1DnMXZbxjHqehH3BSTxWc6dVDkdvBYTKKMsKkP",
  "key11": "3HMoKfxE9gdKxcFkD4XbE65aL2wRDB6N41RNWMbaz8kW2G2siB2eNVuCb7uQS7yG1TVkvcXaRf7RmKLxwf5gzEJY",
  "key12": "5Ak56nMVTwiTRUErqgqAEgmyRdsZ24dQUPsGi7YwMz55yC3o2iyXRiDvsi2PaqoyeJZW6aaybZsyRWvKfkmjzRxz",
  "key13": "5YYPckDRrwD2XYeUeiNYg1bB8JL9ArPWTMNMdn8FvmxXNu7CrRgc1KwCRjjAFRktxzizG52uDYnFTbL4E4G8FaGd",
  "key14": "5s2aF6oNx3fTthjKt1HBigGobSoLLbAf9PpXR3n6sAU4zFQVbsdYzcxFY9MxzWhKj1bMLRrNrnQNxX32h2PTUCxy",
  "key15": "2P15182G8DhD8QysrpQDKBVnHcdcTxT5tRuMzmpm1ve6eawFVrqtvZSF9hQWVyi5gNEqrqqeRGsczR6x2sno5peb",
  "key16": "MRQ8DvuT9tq5s2wq86SBiBUnxrXeaWkpEXipyd2DDDTMQwgpRo6T7SivYHJKn8ZjNBcQo6g2NCYAZNPQVPYiRxN",
  "key17": "2hucKPEJe9kY1Yx1nnfsbPNiszpZETYEzw4wxjQQgkJGgCTf5hXQWBhZ8gpckY8BJ3nsmEtp1534RJL8xd7XNofw",
  "key18": "23HfLjJoLLTGJMfjCeLRkEtcbXbpmQ3Unu4dtz9QbSNQBDtbvbxGakMpVrmbtX7D8UoZynq3YVnd29r59o6dAvBY",
  "key19": "4u9ZqJ95J2Z6zKJGtge7iYx6hDSo2JX4LxtRkWfBosT125Njv9B71izrsrgWEiquXgd16ASp4zzdwbhiB71i98rv",
  "key20": "6ck2Kkrmmw5KVcNw3wS7qN23ftUyDZ4uDccNgUpmTQEoDro2DbTZwkaxuy2AbimV3tx99CHi9d1QMWCCy9NLv7B",
  "key21": "4ifd3mfgSgdQ3GsiTsLeB1mw9XvirZQ3UP7KYfWeSWVZa3y2GPZZ8uy9kstQwpZeS5uFp1HsoTHL94MuAxEphZ5J",
  "key22": "4RTCynrdPhzKm5y6JjWsUj5MX9tZC9MkhhqmiwdDKu5UNk7nh8w573CSt5i1anvxv5PHqeESwXhyAVNbvfVmYQnP",
  "key23": "3jUruJVdtPQNi7JUQa1n4fLZDDD5ZU7V8DYoNXpvfCGHVYsiVfBLmgJ1kAs5sBwStENEtseqDfmmu4efXwMKUTnv",
  "key24": "2ER5KBm3CPE9g4BBGWjvvKtfQZYQTZeQUv2GujYSaFMXbhLRvKRqQ6FMVnufF4J63LVswGvvVay7SZtS2vQKYVa7",
  "key25": "it3mPjJj92xLdvU1vT9LX8ZQcyVy4xshAWtNGbZ8QB3eyB9B856dJcGPodt5xaFovah9yw2exWfM82UrgzzDyc1",
  "key26": "2qCap3zXMZJWdm5zH52uNJsJw6BnaZc9Cramnb4XXShmJw4M16tCLP6UdejfPeG3dYM14MVxYYcSx3Z4XdrWLxGh",
  "key27": "2uyZSyLfPbJmTqhijvVicGnH6zHnYdXPETdnNNKVdjQiF5SFamDHsUWHGopQPNnXVbaGRBqj6Bqy4xzeqH2NNA2S",
  "key28": "4DesX3u2X5fiHZDnTP5jCBZnYNdqnTLuAnNFHz8WbtGyaivR7d6dvASV8TZjicdwNmmfZ5fjLWNY1Cw9Gz9NAtb1",
  "key29": "4PkHfLe9e5Ygx38uDKNVppqYqUrrTKJfk4akw8AKGKNdXCLX3dbqbznG56cQ21b7xKuQ3YdYuhT2bNwWPH3rQzca",
  "key30": "3uzm28p4BotWJT2NsdJGTXLDFcKKq1bUBDJcGaaS5gGxWufzYTM5vpGL6XVqpDeF5qeRvHoajDxwi2UtaR8tNrNS",
  "key31": "3C6uuP7jCsVzH4gEvdjs3i2gQZ7NGdFtGHAuhpuvPsSZ6bigz4rQwyfewzsjPw8841jrzeoGq8XZie4ood2TbRjS",
  "key32": "5MXohSf1M51tocLmisM4GPx7X58fffqGWxVxW2kUuC6ZmbmRmZAy8P8tBvSNLQ9qXiYVnBL3vApZGezgix9q4Eu6",
  "key33": "3Ee5D4XSm1H5fmNGSg5BgwWJJsQJSwF3noTrKgFNeqpvuV6dkevmMwgmaxxz8DvoiHk6cnrq6hndci65Y2P3VGYV"
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
