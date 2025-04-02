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
    "2epGHL3ijFZiiVzp1b9VCCWSnogyEgtNAgHL8Q596QDHj6egEqcsfZx7ti7Vj1Pm49n3nrXKTGxmSbosURZca4Cg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tzkqdo3uyEPyRvp2tHPg8Jw21bJFcjRAHeCWnMq3cTqvQ5Gz7rmnYLLXLpHQBjqis11EsqCpy7X17gxFCto3vhL",
  "key1": "3BYB6Af9L4sUM6VYFeCZMzaLdfjrkkfPM9pAzqCd9X57rTZfMowP61Tr8Zub5vrwDnP6NDVcWzkHqNAcYstUCZWf",
  "key2": "4mkP3CEgS3V8EvWkEr8sTxc6KUAgox4YNTfSnznxvnP55eVRjDY4f7Zrbk6m2axkzqGCytu9ceKZmz6qfikmHoBs",
  "key3": "6351kN45sfXgUfS9h2rdKXyG6YvtfSpPvfZx2Es5zSqcpr7zBqC1b7UgVS5QmWDcpdudZx7gN64H5C6Zw4c79U35",
  "key4": "3xjF7yRvZzXcxLuhNJcCjSt2wtjKwhd3kGkxVyFUuz3Pe2vYaJA9AeUjmZRJ4SBt8fsTj4Tc4tyEaa8V6VXFSGiD",
  "key5": "5MgJdr5KfHQC9px8YsidcXwueJ62MVgH65ZvVpMjVG8KUXNQJRKT8XcCDzdUHFhFE4RQgU7huuxidZGgWsPNSzBv",
  "key6": "5zcdNbiWDazJTkEpnRTkGemBgWs85CDSA1L9Y5JxzhouuC8RdQsvpVuzH45zoUMhLQBghT46UWMHsXE4gkQG3vCR",
  "key7": "2sVLyRg9ZuvUYKbUt8zmdCePhLoLpsJTnz6o8rhBGseRJyWQeTLbUMe8osb6BFkH4LF8d4XqCgDfWTUMFTSYUU2G",
  "key8": "2N95XyEhyopHB4SG3kvFfo6TYib3gzA3iqAyNwGvyu8ik8YcgrFXfwhdKeSnkQoUUrqEYrPiSTPbYn8XYU4KiPpe",
  "key9": "4wjWLMYdF5tpAp2TY4xPfbxCHBkjaYVWFh4nQRZWEpzHws66XR6EXvR7hS5e6UFrnjpoUMqDoo9ChYxKSHrZ6YmV",
  "key10": "4inaHmJs3onBVWqvi2cnvzZkcp9xFCs2NDGq8AkJohFuFciGbugErKmgHLC4cDqQR3r6LvPrbsfKeCXXrtib8YKw",
  "key11": "52zd4S3tFRa3bbEAgaEiivKd5naZ5h6rL5aAAHgv3XQyisoUvadeaC4MDk7viR2qPNtwJYy1gG3VBg4KaZZ3HrPm",
  "key12": "2agcaHXzfXNtUsFKBPKMTtJ3oCh6Mhf8wv5cjgSurTqPy1z4vf7JYoFe7ZsuBF8Lhi8MZc71YcLagqyJ6T3117if",
  "key13": "28v2SR2WfwHK4BnMNaDwoAHvZURXBQqW7KCNKUyFCvVrTT7huMSYAwvwf8NiengXc8zBUSuuR2dymTXrCxK1sqjS",
  "key14": "mnkVTZjxgs4RjNGqk2Q234MGLxtqrmHWMLtUhTvHNLx19oeKMdoiaebZU5VsuisH66B5r5G6KcDMXcbV8xutRgY",
  "key15": "3g3xZaRQcNMj1wT178iwKgCkHaYgvT7zAM5aiUXiSeKTiKvkFQQ9CWb59rKnZjnYKzUk4q3te7DEBiPaD4ffNHCP",
  "key16": "6a2eoL1rV8Zv7WwfFcwJ1ZLiUzq1vyY8EZ6nR6h4monxQALV5XxqYEd1h3QNV9exdkKodx3USb5WA4CMAtfpmYB",
  "key17": "12Bv612Tt1fqkKDKv45cmYmyeETy4m9FGQMCxvq9WFmHnHGphDdZvuMUUXyCujJEUJoJwcbU8NuEEYZETb1KNYW",
  "key18": "3BqByCP5Y93wrTTWFJorYMbhfq17weH6jENEXPYxYfdzrsxFedH7SokWV1eh8Gr9hHzdwyW5Qh6BXd24ip8kAPKe",
  "key19": "4B8R7iFbVpKRMrXfrZ9beAfeSdtsHy9VL6acmVChrjUkuBwYNmgGjgFmvS7wvuGCxBNS5EmRzxLTJKgM1TYgfekH",
  "key20": "237WhcaGHebmHnDEAp27zvK4YcesW8HqwycF1W4HSYdHSwqnDpouve5sBVQCwNZfZKVugx3rsUv6nLdmJ9CcSEjK",
  "key21": "4ZDhRHM1FnWnAf8joRULwyREcfSDbw8Wv1dy5kWP2ozqzSpy3teVdubywz1gx9TDWBKd3VCtVLtWbyKBQPeCnNhe",
  "key22": "qpyWRJnGpjzUxcFUizLym1oANcZLDyyYP3Z68nFNPTL6iFXaSWyRjDtWPx4oByH8bgHwskuoZAQ9ks3oviQzYBc",
  "key23": "36fvd2cdedxatvt3WoBwhFEUFRvHSDXqsC937Pa9oNpVnHSdtvMLsYZLKBeCVLNPQFkz5puNdU7ioqAGSr7zTRRi",
  "key24": "2A4mhLzEn7WSNgqqFiiK1HCVkzFhvtewpBwbqeQHVAn94Nk6deeiXDHLDxqtyoYVdpGqQNfv6Yr93tzPtYd7nVca",
  "key25": "xFVvPT5m8bT16Yv2muR7fE6iwjXtAqt3K9CBasyrYjV867TQAAS6sQ4kAc1CV1uVGeaqtGxVy5JS8n1mP1zgQah",
  "key26": "2MTVd9Gm7KHp6yvR8qGRnDwWhEGLF5CmHh1qfcEbtdQwnsJAfSS8uLZnzq2XDDKv2Zg1iksKvx2dCFmzDE6WH2eQ",
  "key27": "5s3yd7K2SLZUM3AGbVawdMxybM9xpNTxzWyfomdu54qU1ibQot4f1qPzxiG23NSAEeeF7PH5sy1EN4rfeMYV1wPU",
  "key28": "GQJoBwXs6JmMoCiHt5Rdr61gGiSvfxEZp1xUaB8yiHvPDSNt6nAWpbSsSMXC67qjVMD23ziBaJVLDeDHnFLFWJM",
  "key29": "24DQo19a3ByYAGEQPYTjSbYXj1ffmiUg25ka76vnFqj6iSKT8JQZg1HnxMqbM2cv669cGT8JL5MPVvmqj3owipmc",
  "key30": "4XbCpi5sHA6eMDddEJdXjGd4vzf4KCrBPAQXXawEn2WUb4JJW7K84NZohE7eGT5THtBgzJLbYfJ2GF7JdEj67UUt",
  "key31": "TxWivyeEChVjNNBwN9AUA1d7nwhK7d8xAQ8BDN2XvveZN8CWiQLKdz9QJYcK5NXegdAT6EqmU6FU7UgSy7oQcVZ",
  "key32": "3CAsi4etwJkDVgeugryXVocktiWmDtwWnup9fFuA8wwcU61bgdWMU9Tt5a7qt5Gqaa16yRdsBcN4Pw8eqba75xtY",
  "key33": "5qRPzwhPUn3Uwg3BPX3CG4H4MmUf6Sq1Fvv5JcjcHGKuKjqfzvai2JSVBrkcsXFYVcndkQoeRddrENTTHWhgaUoA",
  "key34": "2dhF8NZCruyzoshNGw74HcavNsfm5u7C4cdA2pzdun4fpFJuYZumEEtYnjofUt5X4c12ozpfeg4W2MevoRTbZhNX",
  "key35": "5ongnD6EHzXTrYreSMS3xARamQ3ZXZ1o3scqzJHoZaf9p1fTSJ1YQkUachmPfycaLgyquJNZWCVp28zq4wz9J3LQ",
  "key36": "c7UDnRJkKaQe88u1nA9rKLTaprWX4QLj8h49WnHC6cbwS7ZoCsLYDPyP8Pce6Fq19izNSjgeLp1n3ZZA6Q5VUcB",
  "key37": "27eRSEjS7zL6ZtsKyaVz3zuz5hCRWBAsM6ip1rjZkgH4U7ufxHttroyo4S3Zp4NWQgUwDvybGmBAfrozasjnJGxs"
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
