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
    "2B7a6nMHsrcM4yHUDNUgeS9oVeahKiJhGNkbS7jMFczJYsNQRxGVxshCRA8AzsS3AfNg5KDRTXT7HYXuLQp2Lavi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zQ16YqyzPw9ESatp9yYr2c9EFyv2yH6H3j6BEenwLPQxfbbTdfFDFbY1tm1eZyxoEYmWrPK9LgU2sxqJb99UySS",
  "key1": "Xrjgx87TtM9DntC4zM2jKjavHTg1s3AvzhWHiemjTpCJSqkiN7JYMHbV9hyRwGTAfav56Hkub9hdJGV5ZX7SJoc",
  "key2": "5Ky3jFj5sxtYaE7HEpJixs2rLRMfsSqRbZX4zLXaPoMNezGxtE1Zax4Ap7qmoxwRyBbUBZNW9YK8C3wyNzkhSzkp",
  "key3": "4MM5ifYhDHR9KBDkL2KQdsfj2q7c54Xa62GQXViY4VryFqVeSrGjGfPst9K27GcCxfVTbUorkWDFuSyuwhbPi6ds",
  "key4": "5NhgHg1qJxhhCznVG8nohDDEXhhJQ5a3pMuEp5oVF8YTrtR2JtNR94hzTgejm3WfGNW4AjYgfhjS1STAJNbwXsQQ",
  "key5": "3ywX3wriuA24dA5YD7YGQ9sFC2sqBitQ8PgeQstZoiByYokp3yorhgckeGYSyqhZ7iQSEQS7VjdL9uDgN6iHNJR9",
  "key6": "4Cf2TBmdhBwhKksU8WrRMbiY4HAabLBR5pwqTTXSTjhnGRpM2iVYcsGAs3PdwgmsenTa1RBX2KEseKQ3itfh299X",
  "key7": "55qXmhPb88VwoAsGEqmWXAb3q3LctPTcezmRia85yLSRR1NbLBUjTXtwW81gr8xy2cr7jYNcaZ5wD3zJy8KLezqZ",
  "key8": "4a19rDWERJrcRGspf89xTedgGm51fvy5ATh3ShGH3NPp5JXvWUPrx38ZZrkHj3sRgZQPxL3QAD1wPwwkbp4fcRru",
  "key9": "2wRdtqzacL1awETXFLQzpA8SCPV4Sww1BL725YxYbw955MMFJc4ANZc37HEpWsepGhqc2qRS6Rek3upbKKcb6qMs",
  "key10": "4dChVwrG3nYmb9Bxawms5Bu13mK6HweYvTHrhZWhC6H8rZr3cxEB3DUA7CGiJLhCFpH36QpovFQMwTWGkRUr9RXD",
  "key11": "4yr81vnqw3HRMXkg3YyUn9MzwZ91d8s7vrhubv24hV5ef49tTG3cCm81RrKeRZk55pqNrYBgH2m8YcAJTvL4SHkH",
  "key12": "32Civ3bTRzYyt3MCTSfbLoxMjZUZ3DsAuib3k6uP2K6G2rxAyM2bPyAJLgFxWf1VW3epoZJTYK3DjWpm8n1HMhnH",
  "key13": "KkyePMBXoijazqgQQ79anBycQBYPj6uTn3aVvQBpxus2gEkUwK1SDe6CgQ7arozcsrcLX8RAmQGB6RgqEEFiAi3",
  "key14": "3YgQ8sHfwPLSepZVBA4fnxUxE4vXXtLBx1jByu4PeBc6LDJKMCESNLbEWR9M7dNyQhwpegMLueB71CGGqsaGYWUe",
  "key15": "2a2gNGPLk5qpQS1LroUfJVwLZqo1M4MDE1UbpSy2tqxahdnbVevFQPbrg7yM6Zpe4kHdoK6w9zyxWscquw1v7CGC",
  "key16": "GeH7bre94C9RBZgBwUwyWPTBquo6uFtwHUoSu5A5wrGkZK3291JzkFBqq79Sc5sLvhHV4JaQ9bGarMSAJx81j7A",
  "key17": "2VDzPG7vUrfJCnGpsMasgY7BH5rucvGwR2oC3fu2F8BwtqYbnyXRNF2qAN8NFJrjCRuMkHaxkP6iPShLjuGj8pCY",
  "key18": "2AQdzc2J3RXdSvtyGPi6FSVhiHuD7ne7MMzSVJ3jhD9AWgvut1rUZ1wXN6LcvtRZbKzMKkru4rMURcLQ6HbxKWPj",
  "key19": "39fqjSD6qyTmtDNjetBRxWrKSr2W8r7BdPTUBwVCMyUHyLjZED9RtyYcBahbk4V8SFgYqCwGNsELV41sT7vdPyFW",
  "key20": "5VLTUYedGj7C2KX1TT8Hhxc4eN7ELWAeeWiP1bVQwASLBbnnXMhggYKNehRksSyECmr923MzMDsbdSNbGDFaxE4m",
  "key21": "4H4yZqeftvhmuL1oJMZv9AKYr7C2aKfUd8gykNxHzGjU6bTj8WcCuaeKQF72BPTvafv3AMmEoDP1xCD3siK6SMsv",
  "key22": "47xW516aEpPua7ESZLinJyAgP9FasvRFV8bJtrwp5ZgGM4aW7YFmm7kaWVkyhjB6Uiq43ypaUGfknyUKZvpJn2AC",
  "key23": "4ovGoG8XoPM3cCW8y2UyUx1DAEjKW73aGVE7on3RuefQ3gsdVT9wV7mUzphFtSnB9WcKxZ6HbsnJeiXAArrLLZ6J",
  "key24": "5cQULSABFwzhideVsuACdNTcxhFeejKJ9rEiMgnHC4i1RU38d9vzZ5XnoUmDwrt3HnWSk3WkcN6D7yTLZKXen113",
  "key25": "58BH4jzGEnGVfg3JxoxQhzqPcXTcqwsXJnf4dzs64MPJgFJzcJAAqH3jb5xp9GexCAcGCJ3ffXM8U1g9f6oWazP6",
  "key26": "67Ba2owaASpecB45XtsJFYQ2Pz59VJe1dDWY3M17CJjqyFGBuNJxQe1Ni56zsCbNXuMNmkoUAgTN4PS1JhWVaBNn",
  "key27": "4DYQexeawBWBb7sFnXJsbQZgQYsdR7rj9D2qgoN85cxQsbpvCnH7upTQ5FqWDJTteutxA8A6sccBkDGAhq4ofUSS",
  "key28": "aRP8HTYz3jT36fab2GHcBkti28noMjDWfJj43jHdVTfNPeQXLtubphNgiDoLgpYd4ZFnCF5hGtJjxekpC3DFjJ4",
  "key29": "2FtaaiEHCn9HGkWMg6ZwLRGzCb7aU94ivJJUjywC4fDPUK2iaoPW1nCnKrHCE54c4XHFJkPDSB7YLoMCGF5ZNyTG",
  "key30": "5g69SWqQ5mVAeZKhx94DCTASi8n666RvbuJRdu5gvK7B8VB6X3akrfEJYtqbZvXUkceh9aiPse5MwSCx1tsrsEXS",
  "key31": "3e2X8ELXFykDM75GbbEpdALZ3X4ffDsgv7xrfm1z7HZ7Ph22UF42avM2rWk5zXCbQdoaFa8YSCfmLSMkHG9VmpmW",
  "key32": "3zq5xUXU2MhHgch9NuPbDATZbAgF6tKZyaBwNkVjBR5Ld9JtGHGQMMyXfgGy2nG4KnSVkrVWL1sPGvLj1cCeoDcr",
  "key33": "3UDUz3rgjSscTc1w9QhqZQGJYYr846g5mB6yUmtKaXYYRSSs5dvy6NfQ2VWe1FVAR4uaCDULvspq41jysaS96abb",
  "key34": "3n67VVseeTJ84DMQuwqkZiUmJg8n7T5JQgz21B1MwCApFtp29ffdf8n6a3PpxmKdStMzQmRrwpNeoYvr7gq4y3io",
  "key35": "4zoT7nzZHL4WV9XxQfHBR7hqs95t9AzQv3XihgW3LTv1KXzjFPiBDt8xxbU4rJYGYmrz9Z4f3kWGDST14VMdiJFt",
  "key36": "3n712B8zKtVh381mkFjFw5UdKFGUFquPBZi2gpvzsin8qis8wKy48yGfm4v13VEExNus1MtjrKXxrc1cJN3WPatA",
  "key37": "dQJCHzAHJBmEQtFE11eW8Q2cab5xF8KEc1LxnPjEUrvJGoAWJmPQBekWTeoX3nXJtedGdAKJSjehNK4MUjh1wyN"
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
