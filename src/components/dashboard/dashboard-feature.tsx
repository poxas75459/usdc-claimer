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
    "3NtDvn5Ew1ujJ9dkHUJLwBfsUon9vH6iHFoCpexn3AF5jGv54r1tDNauszwEpHoFrXoymGDofKys2WVMCGw7FYyo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b2GxyuSEZLFF3RmCeNewjJSmrtj3rGzZSMcyP4BLvJ9LP6e6wuqf3VpNqAe6bgBYpuRDvCLwnW7gZ7CYrbUarJf",
  "key1": "4mB4brSGicrQZ56iR5wVhx8gETNbTWnB8wiaVEDa36QCFoLpkuBCG6XMjzh97QcwGfcHK6m7emcyqh9U7rDmyNgY",
  "key2": "2ZcuQH8uGAHmXpNRG6T4ocdCSVrR5sTMPkkK3YdWZt5YQcPLuCiNbYW6Bj9jcjTVfb3wY8KCck7hVNmbg3mymZBP",
  "key3": "Dtv5RdUxy6icC5WJeNQNRWqdJMhwUqXngeu97JSKv5icUyaHexrZmbKm2N21ernVisUAqdHhncTnC6StWq1qdGL",
  "key4": "5v1rHKSCAkNqLLh3c3murcapSy9wLmdTuwWGwi9fCcq1ikEt6qsFRNq2nS9MEghViTYBzetbFhzbreCVLByRE1kR",
  "key5": "2sQbzGWtKhYWpvN9RrwuwmpNvEs8pAssHZrbj3tB8S3kKMer5Qop5VxXmBtEjK8YyAyqNM5DFToELUmytCqwXHUy",
  "key6": "58bQ16yva9yRddu91hMZjrMdzXESuEymc3SyaKpKSVB5hR8cRMxT1cqA4kbE1t5K3D2H6pRH1RwkbH1eEwSw8kWv",
  "key7": "4egTMCCLJGMNtoRj5nVVfguSx3Q72Mhuu2F7rgHugU89h97z8m8iE93i3NZHmHmfxUnWw8FCguQH2EgbY2tMT2ox",
  "key8": "2ynWqV7JxJC2BNQT6TjKt8yDpKpaemdXj7dPkWm4YT5kYuRxVNTcaBPJQHz8hfh4tEXXjb9vsuDDni65YXfNueaA",
  "key9": "4m36q331HciCBjssjXxvMKaEFJTNTS6sAa3NVfwSgxhAdyS8WUztg5hBqpLf9zWsasbw7vsbfwzqZeQYcrb3Q5jm",
  "key10": "53fb9cAqkNhCtxLCH997maxPD9Wyw27VhRzWzfx38RSThvGwyfB9PaWezMXfvPR7LGS7JeAYsZPLhNAVptn45wdk",
  "key11": "5uA4nKV13nCYWkvLbtiqCy3Rc9STMxT3dvBvyQSAMbamfktQgFcqYEg9zEu1Bi77kdgRfxfkvNassfGpzCc9X1nH",
  "key12": "XJzLJC7n5xJLYhpdFomigoG47rkfX5ssPSdbPY15iwAABvGMZ7vmgJQrXVTr5oh2wkA54Jngmkcmv5ncY3xjgPW",
  "key13": "5eZFMmbcdLdsuSHG322SgBTfjn5BPG8Xnq48uXTBn9ZCRZHYM4oeTcEruc63TdnnfChR9D3JAysD98UX91Tnz4nN",
  "key14": "fVNmXvbhZjpMwYrjqkbQ9459guXXUien621cNosHbuaDrRWR9z21rjhCzPuq5nbB8dtPbU1YZromHE1DosgvLvU",
  "key15": "2xTwWeAUyqYxZS8XxFCa2sxpf2FwX9QFrPgRm4faXrx2SpzQw9urTgQh3oPE6pEpgCsiT8kfg6Yv7VZ4cMDsCbjq",
  "key16": "5vQcg5ifMjTD8noKFP2geFsrQgLeb2MhMYoShynk2Qy2m3MQ4K425taPjPSKsnbCL3svLH38JQzqQL4ZeLupLEFw",
  "key17": "FVE9mvQit4UqrdA6wQUscRGE8qNfVxKznpMLLc2SQFxiRAiFgcnGuw6quHm42cAiwrR5YvSdboWdmgoqcxfwWgg",
  "key18": "3g99GcpK3WbcsHyAD6wbmoLxNKffBjk6rUrFeystFTfNGjKJaNVaooJdC7ywJbAWxYgwY8mhzLMNmBiSEccQ5uj1",
  "key19": "3UddfrMHDA8L8hcYcczv5sJykjqk42UYFuy5vhzzyac4wMUkctUkmr1LuwmKzhQU6U6C5QoRw9Q8gAUJEnZibz2A",
  "key20": "2B6EGnGMAxRPyhpk1aPaWmtmVzSQ5j1eA6CRyoLydw1iVUHNHqpWGKSZwjJDsoYMA4JePMBGtmNLA9HKqpDcjWKj",
  "key21": "2fDU8uS55Vg2mrikVrPL6Fqt1QGDLn2mF8cZqSwZ4j6ykpNC9SE1snYhpSM8cVScJzCdE82w83YkCdb32wixrMnw",
  "key22": "4jA1ihtS6VvuRSARrTgT7McGLAz2HxgkrFHJqc1TSsxSR9mv3gRvCYgD3yTyiAHNX7KkovApP9UTiWHpNKBEVbYH",
  "key23": "5UwAVQ7J3WBBevaNmxPRLNmymKNUJDSX76tQmdFcpxxMjr3FP9y3f83ZkTURiBWGzWhXXQF3XAouwKuVJCYzJVCn",
  "key24": "5uoNbP3Veq4N8rVxZswWco6ZJHR2uWCrQbALXZ239V4qdaV8AEVAWtsF3azZmp9PMpsBUUzz8zZQEsMR95JwA772",
  "key25": "2j6XXCc1WeNdsXTewR1GLxBdfQGbWzskBK8oF3i4dyrWzhBTqpPuz5Vt46JnCWGZzLrFQyuhzidJqaztUbmr1Eki",
  "key26": "3vLnuxFi7S7YXQvVidwWfWWKPxa5ExUys3S7igGVnawrJBYgixTEfyKTsd3RMoN5rEi188MoH4MDLChBhkpBPmxu",
  "key27": "26uQERk7pL7zxzpivQRvXTExzuB44eQu27XaugF5UrbgqG6fVshJTq8HvWCUFWnNa5YNgvjRkrUeHbFDiFS9MzQ8",
  "key28": "4bs8k4bfGzX6D5LknFX54kpVY1UJqCfP1HrMkrn3JfAE52u8yHv3iZkAGhQZh8BhAzQGDNeuoTmdAUnm8VbtdSpP",
  "key29": "21BaeJXmhxcbnP2xCUnmpsNcwYXSvRTjbW1Kn2xEcUKwGs8dog9Z7poTbMosWXN91Fbd2zgUqCjiq1W8EpheiFKC",
  "key30": "3AG5WhQHghGCUudAmu4zbpWCejMEp2hjZGCrx9oDetpRZLY4bZGmFGZ7asnUNmcg1rpzmu1x67h6nGVHXWNrc3a4",
  "key31": "5aFmTKM359kkDS141hgE36WRmaZLszLK7nfjrZhdoWwoJXp7vppCv3mLQd43jhKYQzKuspPN11mFhuDw7EbWcut3"
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
