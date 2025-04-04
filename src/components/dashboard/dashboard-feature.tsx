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
    "5vAgkg83HXiVNBTgerFMzK7iXk5Z91kSFYmS7vgu82iYS9e74fpiZBcy1cKz42kkDgBnvvqTHF1PWu5kWi8pSpDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TWkfpw9xLAwdH1RYcKAhtt4hTYwphDmh132JuZoHa9zZtR8EnyuqXrDG5zDvPukzSk2wf2U5QjW57im2WZNrTT7",
  "key1": "5njr6i5Ag4JQT1TZLQnnk9TpuhyYqpxzbzwfCqvSqfhhKeUnjPrJiwMn5BjFxFFPd8wnysA2XJW7j4QQ55dUDe3",
  "key2": "T8MiGYAgu5fCQHBRdXgzMxGP2GwkG5PueX17sNgyJHFe1KkL7xxREyduX1aF7iWwPrHcfJ5CpjkUTTYfNaPhP3j",
  "key3": "6638J2XyGWuZdAPhbKDfYKWsXyGV4zPUZNcqHgzzNLYaWW7cYEaJ6KAK2rYz7DzhYpW98mkiWM6peQZn33gGL3Zv",
  "key4": "5xaWEQy7eEhDu8f5DirGosPV8aznwvFAXREjpXsT3PjjpXErpzvk1tqrG1mfzdwD8DxwJWqXHLppEUzWq1AdTjkj",
  "key5": "5Ksy1hEsWsscWTsc3tXHbVyyukHF7bTHGSMBRWRYdLbZjoNBbZ1hdzqUeVL9KYUeGmBAhPeU2ZWwPyqiYqKXRLES",
  "key6": "3cbG4xu2bePtzDwsQGkoLyon9UnanFSS8dgN93Vq6TxAyKm758zbFSTuuZEdUiKy82d6bx2Kz7YJTdvUsj8W41MC",
  "key7": "4rPdJsxCvhQ63zT6seFBieYaNsGYCn3Bxv2uLj9WP2ceFQpDVUiccdxjGwx6amtJE3sbpiYkHNYn4M3k2s1oN5dy",
  "key8": "2TqfznY3bi92cVYvNsWJnhAFHgHdPtfbvZtyZoNhNmSRwkKxdxc7zMHLLM3BtNAtN46mKu7p5UsRRj8tvymi6XXS",
  "key9": "4Ep1vY7Tpfppa4RAXLmmHRyzgWp2ReThDPYNQ6A6MUyjZmfgSE4ba5mcLgDhDqPavZATU3p6aEK7qb1uWqCKJNPH",
  "key10": "27ve17oD9AKALie9axQ76oFS8e3AzN3AyYguJUKTspAnD1gfZimTLo5mCgK7gBwaGeLxgLgyqAhctawSeiZCJZQz",
  "key11": "pxCAhKABGPhmqizsYANbNXzcWwqTqMsonVrUmkHzLKUnbjXPjEQWzSu586eQBivZhyAjHNc5WUPpWfsuZUXHCLW",
  "key12": "4BPyMr7mdf4Hzh4Pn6ZaYjrtmJ6raExqy11tB6sCJ13CJNsAFzKu4NVxresg1FzwMU1p8uE2W1VMenhHFQr5dfs",
  "key13": "3t49mBSDk5ycF3u1FE4sXEieiZ7LsqVJYwZLjM8CmHBM4BieP5Mey7xYPCuqKeFKTofSRxLHtRPek4q6MZeKEtBG",
  "key14": "4QoPvEuDMpg65d4ZxvSK85cx8MRVPDqe2hzpbDxnUZQiFuwoC5mtqFW8am28yFoFjLJvK76fTwXmcJ3F6tTk4tyS",
  "key15": "5ARyEpNwLDg8nfqQt8PiDMM9GYwgzoxrUSVSwJ3v3cJMzJq1F493G1EXmTYoK7bpNB6sGecuFT31o5ip41BajvZA",
  "key16": "3KMj8c2DkyH2wKK3rJ94hJRpuUxNh5ibsifQJ6mZossGj15V363xW5n3AdTdLmNbHHk8QPXbMEWKCjRNwLmB91DX",
  "key17": "4T2vo2vK54FwfZSSRCeVkFG9VfJDHPnurKvjzindN1dpvb4yuYAL9qBz6FbfPkSPriKhLwYQFUXZCGZ2J52vt1Rn",
  "key18": "4XKkDRozTNRpzWSFEzeqGjks1R8nunbRKPQRa1cDcHQidMVB9gRkFPtikQKtFNApknDfbPcztZVN4gwCDj85pc1b",
  "key19": "4Xqipsornz9CLV3RLZxfWrWrHVoQY6nkawyFkmaVAT9LAgtHhfLmVMbs8RUxcXPKjo65ofdJucMXsShvTuqwkUPB",
  "key20": "43E6qS2bUEpAJamLT2WCHq7iwGv8KqXPCAzcqBQyDFZB1V19xCKnVHHF21so3ULZvbAmtP2TgFVHJbybdkRm7mwc",
  "key21": "2sX7eDK4cYap2AP6imBtpMyKtHXtEw3NW5jSMAhohNbWzHY4rbfhktobEzYLw5nkagRmDGWGD2mk7J2EUTNzut7S",
  "key22": "ijxcMZcWpkxck9aL5q9ThMnZm84yB6TSWh2HU5G3BPUFDoZMxSTHjURHqwAj9Jf2vUERGtF4DrdPtovVdeBfpcP",
  "key23": "4LyVCkGvvisT5VFgF7C9eE9X4apRMnmf5TdXBAVe6FyH3GKtEVAMGHjY8wppriVRuVLzHaZGsWZ8uRS1eQ66YmjA",
  "key24": "4j2wbQKWLYUWpWMnUgtGckuE6QMibFSJr6W2iqQsDRcPajnviAv3TX2QEbKjg57BsPkj5at5wNSLkBFFpNRktSt",
  "key25": "5tpe1TKLFanxw4gPBuLUL1CEG4DhjwnLFV1qkviScVhGWyeT6fTFa7cyXE5VFe7GrU4ZFfFtuGjoyXqKH7HHDKGq",
  "key26": "GBzwA3J7MncvxZ1haj8sJjM8X3e4eMJbGmH7tMcttL9iyQKUwzNbAnM5Ds2Tg2ZSm7rNTTeT3roLNzUem6zG56G",
  "key27": "5wVMLYTNDn3vgjCVWuqiCJVXPTnSPCewA6FnTXUPJooBFCj84rjduzoq1JgwKQEZiHPu4MzrT3Q3UCQamSmxcihZ",
  "key28": "3EvDwJPQFgoYp5N5QvmxJjg8X9GTU19GGFR4A8Xqj3xub5s6j88bkjQZpZBbbU6H5BcSwHTwTSDeGJUDNkv7PKLa",
  "key29": "4gozZXWvJZGSAPxJVeiUk5jqWzxNHQaKxbMuLHRyRsL9TibJ8jysS1TAxyiPjzCDG8r6tH1QattSyG9LZUx2jYce",
  "key30": "Z1Q263UCRxqEbeZdfTaRHeQqRTLSveuTZmz1KF7jJCnsRAUdGVke3JNQ1iXGrHWT9mvTDoHx291iAdD7P9VF1Ee",
  "key31": "2zJZPS6b7XcPNgbxARibZYjBahdMmgUimmQa8sghvLk3GHX5Mq7KWxQ9V4zZ8AWJnUX1EGbqQwdfyUHsfgS7JDNg",
  "key32": "2oRQnTZYjHJsGFw3qXWWTZhmuBmAkWuEsPoLd1xj7zY8fiJFYqGf76JbLBZijUfdLiAUogicG5qBHzso6rmcUp5x"
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
