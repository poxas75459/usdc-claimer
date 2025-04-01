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
    "4ogfp7WTwyA9VJyNXjqbEYDZ58JgepzZCaMiMGTy9J1dNdpD65JQrFdSqcq9pbVpG4Bh8pUJFFxhW1UyNN9nzbab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b3Y9kxdjHY1BA1KnswSXLZdTryerUnnMVsPPuWY4Qai9WzymqceQiFsKQ4KRFTGRXcNgF4CoiEMRT6XPf1vDYyD",
  "key1": "hBuw2xz5b7HZTXbXqDhTcwGpeZAUYH2BRce26piL5kM6Md5gUtcdsRWamujNtsyXdWLtnPsFfQ1HBVuaUjGSMFE",
  "key2": "DMSoFcJRHatk6ArCkfVozS258VfN6zQhCi7S2eCQteP6fZi2LcjANYs9fxb4sjw73BWfJ7Kit7Cv2nGEPrtH8sR",
  "key3": "3aPCPdneNkuyYpnhHKbBP1C2ZEt7cb2oPENnRLgKxyfwJKEhoeVp8Mk7nmVk5Q9a52QETFhoaBdWsntwTGEAeWjF",
  "key4": "2jMqFpodsD88UGsZcNDSoKxEEyCNokqe2PMfNVo6QNbWrkTqBEwQh2wXzdARiPcD9xzxZB5QspTB3wSyiHgBUpCd",
  "key5": "35zsCfRSNngtLT4t5M333MMz72PouDBSVr8jaCsfh6wgAk3ji9vHSuRMns1ttmmQit6tyZ4nWU6eVzi4Bw9iSRn1",
  "key6": "3iszzPbM23vakKXvcG9maRDAD7Z4c82LWovu1kiHz3otk43sh83mXmsTMSrjSYWv2yLtdYawhSQhVmY98aFowCLp",
  "key7": "5BGj7xQJWREu6zosNJsH1qp85oZTwxamXA1CVzAaVZohNUdHsk4bLGoA52SJ3UGtREKFuSfe47r17uN5h34hKdp4",
  "key8": "47uyQ3KiyCtKWMWwApeH6rJpSB3bHhrHZZw1DRsKAAHEhjQ9GQ9zfcAtQnuJDB8SEvRFJVzgTtU4Vh2KsfasN6Ra",
  "key9": "5XkXLQXbqvgSKtDcM9Swbj3jU1yrfizqJHgwx5tXM1qaQsw6NX7htqnMFsRJ5qKKvqZReVXVwxJPQhEmQShTfaYb",
  "key10": "59x231DBoyxhhxD1QUJtrsdAaifBadgDG88ko2PiRETuNcD3EDETrD7z398F2UPUU2BNQG45ge9MumR3v2MmSws",
  "key11": "2cQk1C4631R6zKvizw2PD8UurCRWwJBDznwAdY2fuN8ZhVBfjb31fhFExAcQUNiSgEEiCGJHo2EbGoSHeAZi9sH5",
  "key12": "5LMZSzQVYeSNEEEv6X5JJaQis1JhKCXSa8rZxuRWt4Zn8wbvxUyyT5Q58B1XDE1B3fuQe21bu1pasenEyfuhvBLW",
  "key13": "4qtaNXumWnGRujQd8zXPTnUnpa3vLxiztN6t6qPjPbsyuDVDCk5MpEyjRV3KvyJVfSVoFQnjF5NKtiYJQoj24PQz",
  "key14": "3Ch6cJZndnV3T5PhqWkXBBzFRix849JFoetQ4sBav8uxwgkgGB6PbHmm7XrXpSU8bUKH9AwguT1aFuJNLxWhmJRy",
  "key15": "52MnGGTorFJtNR1UpRxYqsucaMWyXmJMhneij8n2WztFqm5JrnfmZh9EcjoKKGWPDY1QzG7bFPQtz1fKcPSgVLXC",
  "key16": "iGBGa4txBHx3nCNXhxDtkEDyEUNmxFNftewV89TYaQTnN6hpyuXqRQtzFerccAby9N9aiDNofnqXAS38B3LRjPL",
  "key17": "648F5djmt84bEXrnSeFRNVweVXMynWPU9KAkhWHiJovy13DzFNaeySFhQmXw1AMAWJcRFeQ26Bh6qKgoWg2yosqU",
  "key18": "2X6qLR5C6Ns37AZgGsnRe4Ro7MiC4PNz3fzbhJi9HDGwXi3Kv9RaNbgemdS5shC48NdcLzZLzgbPuGqn7pyToT76",
  "key19": "3CrjvR7a1ejgTv4wNhLeuhC3P2UccuYpVtU8HY91rPZcAUQaGY1eJttvTW3v4rjUUKCHCvq6gcnXoLoNUepZGtMN",
  "key20": "4iXwDeU5sTwcSzQLCPtw9WcyLMfN3HxKPJgsPXcFkoVKWPMPU44mTCiWgNiaKSNhgGFTk5FrkB6VpBrZUWfcxVUC",
  "key21": "x7qSRs3DhwyrnzXs5MAW2dCut8DMVhSep9VvjrZCqZn3FJRpGN3dtMWeQNnDbkQvBmAYWyLykvuzEAgTDeLnGuL",
  "key22": "pKgJoWyd7u6Pmm2Fz2vGNvUptp5D9TzNvwv5bTcXDuJBM2uWn6W3ftJrWZNgjjHDq2LhQdNekhkpfUjRDtd48kT",
  "key23": "5qcesMkqJq5YXDZN5KmzU4Ejm81BB2ztDyb84SatbHbow6CBdcLKqQJ8J4ZH6yKzkV2CKH1QaDheTJGnnRddB2y1",
  "key24": "4Ey7wEDqVztcM7LCroBXVZBLgnDZhsg2dbM63Abzx4yHnXwK64e91yP313CwYaojNAXxGTRPjLm3a7EYMeudPVxB",
  "key25": "366EqCFZnMeakTuJEktpxP8n9NXyUDWGVNdWczyTwtMnR3goBaydW8phQooDj2GNApsmixx6HSafqREBpMvytn9e",
  "key26": "8fxZUwYMEB3dpt9BAKFR3FuKyj1kVj1cZzmkhq7KP4K9ZVXTaoX7No4uPHPqtMxMQi1YUEMCpEdXUeJeXeTBaPR",
  "key27": "5GHAYeiup7TnRKQWdjuomnJfQmJmZb3ujXv7TVPkdMAWBmDATjDzkkpazKysvTAUW6eH9ompMPc8mEb9PzFvWFWi",
  "key28": "5WyQpsCn6xVoPGLHP8ynr7x9pcM3yQDdwWYAgKensMgJnoQ6HHG4Dd2voa8FMjystC32y8w3U9hDCFHrXzRVo9uV",
  "key29": "5NptBXWtSuXYFGimpZi8TrA2ZRWbjdaPk4kerknCqooCyZtv7Dh6ewWbVAGLrVccGujnLc5G7Q8FvhHQcptc8SJL",
  "key30": "33hYy1RxoC9PjjqQK2xWUKoQQf56KiYimkakEuwrGtFLNQqD8fQqx26EqMR7ssAhrvMH8o2rqzci9XM1DD99yGGf"
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
