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
    "57V78Pm9EBoEdVejHBk2pVen7qV9vSPNqmJK6MZJ3caq6odxQERephGstRaGsoAxU3rie6VYMmN756TwSfrqDEKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KojoNBLGTthqCbv6Sb5rejRXGZBRafwCWvS5vGo6qoe7FtGQ21UA47qfCqCvUTkAiVnn4xM2wBeAN32AGxkeEQq",
  "key1": "38GJUTgWUAxULqAWcsKNz3UDWc6pQFcPR6yWNS4aBYyAFn5DZcfYxHpbJTuWchEgjEbKjYBDC6CydjmZDxZ7bYt6",
  "key2": "2PXQVyYqBbgfZeSac6SZ9d8gdjX14Q1oZGxW8aD71DPWjWAhHBy8Cm9Lkub7KZwgtAAvGYJNdzrjhRKCSSc6CFVU",
  "key3": "3YyviZSTya4Kmz2YQUqbypsLxZbJwagTrTRqJu5tHujJshGEdyKzAgU9cgZcixM75kZnVyLbeUwfmpXvCcdENQ3B",
  "key4": "2jArjEUGyWw1AQza2j38dPE85rBepamVc9Kta3yk1JQUb26ozJGWMXRkjvdPMADHjbnce575V1iT5t81bUSD213p",
  "key5": "37xuynrNemVTeFnCgWV1GdLc5534TkMb5WGHmQc8K1cy2ptKbfTUx1oJqvwWRPuUPhHrYpJ2oK4TFKB8HnvK6Lmj",
  "key6": "3b5ASi56LCZbBGt7Wm5JzUnYxGQ7sXb34BMiB3WmaADpJcgaidrcm4wLu7qfvKJQwYFujXHCLJfjgaeebBATWDR4",
  "key7": "3n7UveTf8qCP49vRaVZVopx1qojwtz2xhKW55EHfV2fCAdgBN4AkXU6949Rt1mfDFfJL7CUX8DsAsBR99DDiTX3s",
  "key8": "2ZBc18evuUGkVCPoR4EYD94fU2nyfb7W9rKUfUdBdj2Pb6a52Zw9sw8WYDBoTkxGWuCgFon6EU3EEixjy7rksQvj",
  "key9": "2wUCgsjwuWQQAN44M21dQsbif7erWLKkt8kHvWoFyhkndzb8xnYMaxL4ceGdUJk41Twh869Pum1jiTfiQ3KaCPHA",
  "key10": "5p4KbCNFpC97isWEFAtLM5UGLxv3fH5KbtTSRpBsYSzjrxgdwPV8LaaQSQJdXoLKeqEo2YKYR4yyxVDg7YemwK6x",
  "key11": "4HJotxap6QokWvmC2AKWpZXYZ4umdMuvzpix9KhfRFGRFNfwN7uquRsq6ZeMqZS3EhwoAM8rLgng4rpymekVBYEt",
  "key12": "61NmcLLS6ihpDn3jRE8ufTCtYw8izAvtnNhXScb7qKmid8jDdyHNvzHr7BYC8pYNCCcDhHZGm7LKkXWw3BCCE78N",
  "key13": "5eeLnECFn4kobqqo27awK1idGgfXy4P6fu6wXsqPDJcJA7pmBLghb73AvDbtP9SmxtMn2QH5V5C3gHnfDnM7P7jy",
  "key14": "61orjs5WZbVuVDXXX8ajozft6XtJKYcURNUYsDc827CYtJPT1Eeg8xNAZDjUfe5BvrV9Xb5TnqGdahCZknZzSQFL",
  "key15": "3TY7SWGtSL5mDnE5Gji8Xzisoo4ykU5g8LnLykbS4cfTTax6x4fDM1mYXXgMBQkFHnRviQ1h3aR87m9XaBKqwBYz",
  "key16": "4mzSjvPpYuRvcQBqQA3borLCsJYD6WkhATReCoZPyTuaYGJaEXKXiVkEBDo632atNfRvh1TKXKxuoN7ZpoT4hbt3",
  "key17": "5cGzKinvSRb7Khv4M7YuUKybynfCF9bJEE49hKVYCtHUsxt9NSe9SPVAvYwpMX6T8KcN31YqqDoG5D8Uf7iLSaFt",
  "key18": "44WFuViJinMHN99Yqz1nHW1QHFjK9exb5Gjfbud5AXi4gucxb8i4dGuD8sEoh3cb2W8YMN4D4GyUtFxiSyMkB81h",
  "key19": "5oeQ7Vjd5bnEZ4bzDStEQ33ux33YBq2k6ceg6J8MUQ7sM5DnRHtAnQWXwAj8peiunbD7whtARLbq8HdzCfcXQKgL",
  "key20": "4XjQYcbfSLS2JxKbRz27Guu9bRDZ6Zc6Fhj83KLDmTBcD1L9QmcQA8urmDCh6PUKBgkXYNa4hpbcFNXk9QidByyT",
  "key21": "J1BUHEmMo5gznULcgUfAPGXQxRH3mzauBTN75phsfVffaAdaWdFeqLbx8mUpAzLVjaPJ6NrDK35aoiwjwmmzuwK",
  "key22": "5EaHUTGhQyx3kYcKF1q9Wmu58spnjxVDHdneLNz3M3YZgrmE3gSm5hT39ejpx9wSNcPeaiyS49YLZjGPg32daE34",
  "key23": "AHYZxeTE6yZgAKCtot6MqpA9XZvRQBrC3HqfMsYf6zv8aV9BgcThuSuV3oj2qKm9P9fx76QSMjD93LxwF5DhZwr",
  "key24": "2eJVGkDFeU9f7a8pw9qnxCkXtqXiLPLqTBgi8T57PqwCHsDLvVCMoG1BvAbSSuCUASkQ9s2ByRSwx26LCVZYfLkB",
  "key25": "5t2EsFfCkCPCj8RhPdxV22gwwXBC31K7efVmgqFgYhP7iijDZziZqjEv2Xt2Fd5a4UJwJdxtNdDed21CXXsC2Mv6",
  "key26": "4z5bwxE1RzQTJ8F42Lt3Lkv4sXvr5apQhYevT3EYYmhJYBkwnBjBwTYgvAwmnA5vufzEo7XsNRkhW2iFbLiEw5Xi",
  "key27": "3HXEdCGKpLGVaoTUzYcW8TFJDCmyzq3CePGvdqyMuTuZeYjjadqzQwZEDzYSEkM9LVoy4v2tzTJZaHUJqHHveuTr",
  "key28": "2hNGz8c7DkaQQDK29TgZ3NhGDtYLKeGXjwV5hvU3gL4RM7zzJZyNzacShJGPRwxfi5XoxNgfRYwnWm4qsx6rSFrH",
  "key29": "48GLqHPTpjSabEsz5edKSnS4qJ8MPZsJd987g9W7nCk3Fde9avkLQ14sTabKUYZoNS38uwGc7AKVYjMK2x9aWgQn",
  "key30": "3UNHzqegBaNciWVF5WPSbBCJMGLvXE9JMxZSpkSEoN7zoQsqUmc8oZSsNBHDMyoN11SGrYc1YXxkX1HPjHqnbXR1",
  "key31": "2fUP392VdTsuSCz5b62itPTGTyfxfvHpisN3sBWr93FuX8CJNQW2PHkX4kwqMCjLm17uRLLtbGjJAShoscgXe66",
  "key32": "4QPyjRR5h8LvTZ6bJemZjzswTDERz8BfH3YvK8jE2eNn8HqYjifPy3ZF12WYbUVQtpJqknftGmN6v78Qqr5tQsEP"
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
