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
    "3znG5BdwWiAYNEdTwfcp3m3YA4f4k8pi96QeWXcMKLqS9AyB3sbeziPYQae9GF6RVsg79fsq6tqGhVmmfLmoof1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q6jDNixjLFR7CNWJFHnRttZjEc4Qyp4ApYmKyy7buQTFgaz4Kxw5FtgSAoquLTtVnGUDRBsmZhAPbFScKAkSed8",
  "key1": "4u3tc4E87pyba28H5o5NqZuBs79qFDDbGN2o9FPMJBkjNaf36PBs7iVRVC5BcNfszUvJqRHXT29gYV5UmPMhKTRk",
  "key2": "2UzZexZCQMzUsVzmACmyCvbpESAx58DChpEV6sejLBqXLVQnMrannQW6oiDV3hWZ9g22xx6BiZ52tda2kfTV4AiX",
  "key3": "zBsgoA5T2imoGECLfVmAATLpZut3of4xb12ZzGULM26aa7CzbfsKuYSRxGV78DePcdY2z36o2bzNW6RxGA14Lpp",
  "key4": "3E2wjyXpBGiHgoKhARVXSKAK9R4qxqzemZz2ZtPUuKkrra5zXXF69CoMEax9VxqRDggp3s6tEe6AyLABFHgWSuzF",
  "key5": "5nuAsL6AJZPHmepGNDwmNHQbDPs3uhri7k6ckiePMBBkQiRamwm6xe8dPtVMkYU31fg6jX4v6rJEKejPT6PcLU5b",
  "key6": "4rJNsk7hBC8YsfYP6vQ5fkngaJ45cweNxwMofrHPuQFosnrgRUtq1ezQ8tRZuqsU9WKBjPPBRnwwYEjR2U6QXjHq",
  "key7": "2sDB8vHqBxTUzS3wF9KJSy3A81UNFC1zLmPHFdmsoTqhVz8C5C2kP8T3QWJZ93wNebnboMMBZ4z2eVePot66spgz",
  "key8": "2La1gP2rSqhq3bUfeCCZyKR2pfWn6VWr3GZZkY2gxskDwdrB9sGKjftFrHRKDAm1MLHetoCvVGSQqtamwxmUTLTb",
  "key9": "2PM6aR3NAe3Uuyqg1ywM7DJHh4yszCdViGFyXohm9ziV7qRoaMnhjsTYQFPC16LpxzcpB7SVNoiYcGzk8t9ojEW1",
  "key10": "3zv2ofMzQvk4uvV9yXfnfrUfqj4apg8nV8HwckjKkgwqXWfmujzDjyYSYVPmxq6eayEfeHbaFhkSJBrXZ2nEbLos",
  "key11": "kuqoaZB9WFTPrRNG5YghJ6Mnv3nsTgXwv3C6j954SMu8r48JwbfWfRHVR1GrDAa25C4p4uoYaxyqec6reUbpQk2",
  "key12": "5MjgeLzfpyi4smrzVhpWDKLjBfKQUoNivkfd6VcAm8hzdXn9AmxJMf75HC3E7hXfHABw46UWEgRp6tA5tY4vqyPn",
  "key13": "XRm9bEzTz6bqfnBmi5VepYSCUYRAoLdFWyR7DiWprJDuBjsWCKGSkAYwzTXeDigZGZPGKSWBWJfT2MySLetTZRn",
  "key14": "5UdHFxLtFt6bPxiAHXrerr2hMkzankpwsabLv9MFstY4ktF1gujoQshBnzAo3pnTjNHAdVjgm4X9aWjnYFMHXeB2",
  "key15": "5WahVt5cHHXYj5m8X156qzUQ8FP3yDhUPA4pC4YvaAcMB9kX2kbFhpC3un6BydL7ZCTv9KTuotZTRstTkeZY6C4M",
  "key16": "52HTqtrF1v5RxDVZ7SsZW6pFHp5XxPAvxbnYKzjYD6h25Pr2x5aTWmkMUAT19QVTTZSvuq8L21Lb5LoCo2Xzzzvg",
  "key17": "5aagaNtucbEfwtLhwyPW1gN9wj5sVNEfR6QWr2CXfZ76kWwWLLpaQFPcJpV9WcKRpUmfYLPx3AqRmeEWEQQxUc4g",
  "key18": "qQsG6QRLqET1P6RkPuixkVfptjHnupPRgGpeBBbFf2m7Y8ii1xYNxvt6PCVJ3bx4Rntty3R6ZdN37XKsbMPFCst",
  "key19": "2uwkvFTj4AjxftBbfmnmkKFS9tUcQs7MxAYjkDWW7HA13d8ESEvoN5CLvu4cNCcmLKw9ykyoY9r2rfLoyMYBeEu",
  "key20": "3onX3nwccbTw2exdkFHTHp7rhYnd4vA7KUBM9CqmdQMctYQPpmdrQzburDS7cjCqYyrBMtRmmZAWhteXNXYfEEbZ",
  "key21": "ryiUj59GSFY17RikLFbyGVKPasyF9UJyfEwZznosrDsKBA9CXUAyHSCJYBiF8QK2aNDAXzMcUxAguhkgLnqubmM",
  "key22": "2Ub1rCDrAwWuKYZib5spD6sMUpcTWAPmfostPC5SizPM4Ws4ih4P7XEh7mvfQWZwmjD553QMpKrER8jUGGZY4aXr",
  "key23": "2sDpp9841Dx64JEy4GrmTnCe7CWfSL4K3C2NYCzjgg8CiyCWtTU5Tnd9ZM1DNCqd2wcmicN4FPuN6pN1Qy6mCG6Q",
  "key24": "3Eq96Pe3N3KrUwNoPQ8SoFTNcgQLdQ7ArGrWbhwsaBXZoXfXUGuNz9ZPoS2BNtceNmYWXVaaZ25gha6F7kuGAKgC",
  "key25": "4vhw5P2X3aPzXnxqwUj9o5jyWvrR2bktWGwuLpNH9N1KSgCaHCYrx9kvf6nFizcfb8G5p6vzzj6HbNPNgvFkhKyq",
  "key26": "Asp5gdrP21cApEv7v3KZUwDbAyM33BKGgmjkYDCPbrw2M9Zq49eyzVnyMLfHQZpeCMczgmKsTAWndF68mC3qAAV",
  "key27": "2eN4N4i3RnkRYVGeSgLntMYct8E7kgSFssW5ybDYvTGXJserTkkQhNbcLgHK74NZSe6XGNWZfTyjTxjbXJgGjf5y",
  "key28": "2iP2m5iFNe7fqe6Pc1PzTNoD9Zn1oag3YzaTsoGxcs3soTgcEqijQApcrhK5q3nM3TxuCeneqiJDJs5Lz6xSw3nL",
  "key29": "4oxF314E1zwtPGsEbbGAjwixn8LVWpJSvM658dPQg4iJEkG9128k1FmP3mwfAoQs63PM3ooXatmx5BBUzJshQez2",
  "key30": "Y4Gkkg1GiomN9DLhiFPyYgkQPbtN7yZDkKBRWvMPXfrppBfrtfagVBHRQ7ZeADeH96PvwbucQ99Nvr3MbrfZRAf",
  "key31": "4jFZNs3sqRaVe5xw61D7tmhRYDMozQFjtBkKBi1Gm7ghnwBC5LH69jLZbBZyesrpUBuuuZD9XT74Jvfch5msM5W6",
  "key32": "5pueR2PmJesa8HngXLBH7uRAs2H8JUAPoG6HZkRdqM8NhsUxwFaDHqjmtrUBi63aKcjUWSYmXoFxUhBjSZVU8XQH",
  "key33": "2NirBgiGH1zHXAeJgnz5W3jsXNwqXxXCA4wRdASzFhgDA2eQPuVVt9JctwbNMmN8Zn9EMHT2i797XeAaKpKvhQaN"
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
