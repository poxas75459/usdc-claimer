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
    "H8oL5JbnvtaCZePcad8LdJ6hnG9VsVV3j5kq765pAP3SYh4DmqyDBZftU2Zxo7aZjaGSnXHF6iYCFJ48rdCitet"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kn21HtGtQDWLVmaPhJuDLPuzcKrS9nyikyUtT348CgUAMRrLxddB97Vi4z2QPKaE2vu4xiLY8LDga3atSxVjTxT",
  "key1": "32xofMcyV2CNLyhqQZjbQAvcodFU3AHRWiYJT8VhRYVmL4cmGfTGmgh85cosrGkHNUD83LKbD1vyDkEqG1ThRpnE",
  "key2": "2HxckT5k5rK1pdWA9LYRmUmgm8kYkT56zHqahpB6skWKvxpJgWPDmeMrUfvEpJ7qcu6EXVYdDJjoVnUuL9XRxH3u",
  "key3": "53FWLLZgyf5C8WCi2wPWGe5mo6AxF2M8fXkUyBrsyUbXBfPzotzYwzKNPhv7GAGK8QFjLFRciP48qCRvACN7mrKX",
  "key4": "2qSf9nQLmDb9cCQ6CQGDWZdZweq2SNbGykedC2yRPAAB9d9FzxfxpnizzhWSki9PSn57QqT9mp9xQQiDPPSDTGxV",
  "key5": "5A97YMap2LnAy3PuUHZ5fgfG5qJaezWM5CuTtDximccgKfqBNZCwq19k4WMgz4is4zQid4qdkH5ezgmtZtGs9yGg",
  "key6": "5FyfWu8Hh8P3apPwSAkvmMcHbAwM8TQUuMYruX5N2n5Hxxhey2qR4WV3A6SGaXx23fCihLRVoQgDLTrEVvmyvth4",
  "key7": "5KKEyaSrkNrhajdG3c88EcL3c4wN1UUWYpczpYtFAvfZAa7436YLxckmAiVfdzxdBVSNDaCy19QJdTU9wbBXRNaC",
  "key8": "1HzipWqt9AYKaQKnS1FEZGBtg4QjeuMdHGV1RKaZesUa4qiUMNmQCrSXnVF6nEw3D3dzUiEcWEEqqJwyihnaceD",
  "key9": "5pBJvvEjWxTV89boV5PJBPAKTFiEieuGziw6pJQbgLzDh4zK5dvguxaBsLvGhkfpu3giGza8AycsDGVxFoXi2S3F",
  "key10": "2xkC3Tdci29hu4YpchccuQRwxz5PFfiXH69B77x7okFZCqTn67ovxvawBxYzHo4wXMG87YVE9nmERBgui122QJFp",
  "key11": "3mRegVT9q7vnf7J9qWfP9qfTKoWUkhdP3zdUjiruh2iDmVquKA4A8iRKUjkMgwMXbwtjKbBmohaffJUNuY32Ju9k",
  "key12": "3iuEakFT7DHdm3FQ3c8pqo5NfmjHQdnQr5QfYCHdj4ec8QM1C6rCnAXv6BxbJSKaYR4JhWPNtHEppZvEtidGeynf",
  "key13": "5kLZ9fKeRQiBmoBZ3JojuBSszo2J69hJ8cmU6irwYvvJi6moMipogavFQbUe9EoLRgQBB8hjtzu6emN1FKfcn4Tk",
  "key14": "hL22D45tv86YWxVEeBdUzxkhANzmbgF32hesADp5Gn3hHizu2xCYi6aW6Fc3ePmwrG4emzrmuXrSCPUWmFpbAeM",
  "key15": "5CNW71Td7cJkjn67fG3FGfq8ThTYbmxdKNqqT9nX9sjWAZWFX5fpxK4an2VA7NqzhhYwd8YKpjziwZfGAntorLVE",
  "key16": "4VGWhypjXBmL3KVjL8YevgJ734UD5qsmLaNnH4WCbz2Vb1DMtW7Lf6BN6JthvA5EcYNuoRHiXDRiDqbbyBk5n6fa",
  "key17": "42mm2E3nRkFmYZGwv7ZthW3nmsLH92oj9ta7i8YiX4prYFecwQKZREZ8vSJ33HMYJ7HrYYyUM736mWLZaFFgTC39",
  "key18": "9QbaveJ6PV9ZRnYcPTsPtnHc28dWYK4ndp6hYQfxhk2taHa1kzVShpzw3oYVSjRHRXDduBLwfWgq1BWnf7UXHFk",
  "key19": "577ME6A8kf6KczXL1N56gRfFibihJLDq7bCrAQDpQ7W7eTeqyjuC4fT4psshmP7BN1gF1FmJ28FpdFCzhXk2TDp6",
  "key20": "5WJcUdBYqLTSBiScmkNbAxa9DBaTZuaVfMFRnaNyLwrajTwZMMcGe5DUM8kDvdCWSoai5rs1aA2Dh2os3w9vUh4d",
  "key21": "2oNvuSR16A46j12e9mgEHGPUvi4xirp29dTXRmGiVxhgtCRcE3z6MBrZiJ2Vh6X7dWPSjHnbvUSCKRVz1JLxoMDa",
  "key22": "51wL1xPmyvgpxxMLBpkcYBjViYVA1Ufjdm8Tjf5qFGUoAcryYbuX2FjNifmPcr8MpojiR3mSUtrxfn7EfDqkmWDV",
  "key23": "25Zx9PGHyqcujznPFyepj52rynJQsHkHVbGakh5nCctjK6RS5VRttL7Mz4ZNhuwDhjNTmnTH2cxLpLsP5oMn7yqj",
  "key24": "3uX2MaDJXY9Z5MzoZiZbRnY47xqnFHiSxU8X5rySBKQCRk9gGCu3tfKWni9nXfAeQucMx1nqLQmEamxVXAeeBL4F",
  "key25": "3HW1sS2P2VhnSYyxis1vSPQPVu2Qy4ekvL5mHw2M8CFATY4jiqFRkADzknQ3bpgbtpnW7ZAkLMJGH7ZrgbFoDWaC",
  "key26": "4pSXT7MA16shdmMYB5PG7DACbbCMUvP8o8NhN93usFhXTYssAXRMag5AmaWKAJdtFpugnEFr3ETJUWyhqb3iHCwA",
  "key27": "2UYxRDNhHincQv8XdhucbwUYbDiLxzvoo9GTv9TvaXdJvzv5NVXqLJHxZ9x6EGfSRAnXw1BdvhQNSBEt5fZxEL8E",
  "key28": "4ngtip9rpfUtZ4BZwDdCbVFwBUKsNNKjige9V523SmjCgyVkU53PT7vHLSoLS3GPaULoCNTzTmXJX94XcGMizJhG",
  "key29": "3KK8SVtxznAbQ3szqg9MSpmwncH28amiMViDzNtX34EcqxQ4pXwnYr1kY31xGazDqm96GiTuhha5RGYwsYyhqQYF",
  "key30": "4iofx2NPLR698htJyre2as4qePMM7Ygz2a23MJx2vGTPejx1KtkkNm3ZA8X6CiSwJHKK3g9e3MMdLtqig5hKMja4",
  "key31": "5svioWMq5wuLY5bCruwXwJyYQ9tQKr3ZnwxXJ6k9gzTi1gList9SmL6enZN9JAda7tioTJ9Wd5dPpjEe421u87Yv",
  "key32": "apVfuPaNXF5LgEMcfjogfQ4bkZMkswPoWNb2Z8yNivnYDH1vzT5dWarN3LrytGZ8kMbr4DHtVGE5jopK4vZGz4m",
  "key33": "8MXavSQx5NHqw8MMU88P41dKCiEsnqk2jLV76iEwnetfminxEreEbHGt7P2rGonvpD1ZTDA6HgK3nAsnyfbUFTv",
  "key34": "31RiFk4aekQPhrNrr37jmbVoH6EuhBoJsWsPc2yHfkTeGnwz8bMvx7UtyJSHkq6N8drjNgZW67wN7rwHsHDSN5rd"
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
