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
    "2DtcFJRDZTN6CouetiicDiqWAjVwNkiVWTSv6kf6K96Wkz7bo6aaubqqJJTR46iQXSEuxczoADbYr17gUKa4ppys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "79Vf5r6A9ZVxwiGrEbBNNVf7GDBeL7EW1BLnfZV1soGoRFB7ZRGunbQ1Zj9CkzckXNBcQT7eKrSQyEQrEsBrkmp",
  "key1": "4Pj7jzj1NR3SWqsqBMqTD9rwD2ZQQCeZHhnZfqS4dYuHYHMq2fiFGgoXsucWdcSjkLDnqHjGMqQQQgVzyi96BDXQ",
  "key2": "3af1YFTQhw56n7WLDqv32BWsVT6EJeFag5nWHjeXtyz4CkQYVNuCnWSQYeYZqturHRUuYziB8rk8iTk9y2qAAaGx",
  "key3": "4AjZwKMfssPsfZVtCWG1hHo8vbukZPf767Kks8t1JS6CWzMoK8GMtrnNfSpe34sUKhys4JiqmFeVUrGLZdcLBFKD",
  "key4": "52BfjTBvjrP7vBzngYQ3m2eqXmBuN3Z7vfvLg72WrahzyjENnqTQwY7GVm24pvZY3wA7vHUB8MiUJ3K3hjbbWDnW",
  "key5": "2BVMEmDgwd4Q1YHczLW4fm8zcMuwXevpDQGG8rVVmWhuYNMMRywNLrsWsivD2mjdKCD1XZqoPBgzV96M4bTjymyD",
  "key6": "2yKEVFL8L3RCTg6JMUeGHRmvFT3xtuuy2P4Gnz58JjJeZSUQ7T5LumKNo8mv2B5YekTFtLaRmh78WCV5yBPBgofb",
  "key7": "52Wx18BjE9m6mrdkBGrerXQ5qy4VqbKW3xqyjW8edJNPUhadvX4DzMG8LSWnGW1WE4hYW96EY3KCzTXQLizE3u9",
  "key8": "4zS7SZUyW7FjM3pY9LVmtAVG5LhnxuH4tXpiNmgYKyMJ8DZ84zLpt3akMNzpspvw5DWSkz3D9zY5VZ66ywYy1t4W",
  "key9": "3FHQHaENBHFxcbwEkTKuZBhy8uSFe5jAuydhu1yVeCx177ebARubdsyVyEgZguDkQCXmuZJBgkVfHCmk42YfG3WT",
  "key10": "4PD3t8KZJNvadNM8CbZAFZjKNUqLGp3fo781b9FprkSh53kdGM7AJgmwwFQb1WC8BuCtA1kvXhseeAn7VE7z6aGS",
  "key11": "4gDpJaBxpqg66qJtmkC3YocHJhQGXc5eZuvU7dx6vXL3RpdexiTDuXa3axeuivhUJqucxnte6944JQWXmtWazUzZ",
  "key12": "5bbJqo83E6Rqkfi1BnCvYi8znqsq7qvtdrR8ZfPtk7VZUKkG91eugSMTsD2WhFtTrNQEU1mo5PYntoBcarryymcR",
  "key13": "5FgqFKoU1AghRcS9zXmfQCqVVYAUB4qoBKbR2tj7Bf4L4CrNSn9XjFiBHhdux5dvRjVtw8auFkN7FtxmiSYufxvx",
  "key14": "5csUDirYQh6ypaUz2G7Pp3nxkCe8J3ABrQS2m7QGWvH2Usp9zHJejcTLxJ3XB3iirWmdVdnZ4bw7DtW2pJbaoYav",
  "key15": "56tfUe9RPUwUezF4PvDbn9Bak1Lned13QWbSScBYywKgYF2GPhyagVV7wykt3mcoUy8YNmZbhciwqmnVnFv4whGg",
  "key16": "3xaHnAfNgseW3Aikc2kdM8Fr12AW91HeU1PF7aknYsggr74FAF2aGqxfzZmJbhBuv8HfnFjvNqkcFXGc6hopejDe",
  "key17": "3Byyxg9VBRQg3DzRRJiTeQLzvA5PYgAit6mstwnxJEBmv7qGMbYrJkGUYaaamV17r5ncfLMDRFLoLV1buwsh4hg5",
  "key18": "3JYej2HinScmFx3nX5wP1pFR4Chsb5pzdAuVBAhjh2NDTK1aN9kTmL1HKXFxhJvZFwzZexjPcP4pzvDh2rAxssCE",
  "key19": "2hSFqrtJSMB7W6SrZUDLFtHfp6QGxX4ANFRZDtJmwSv7BU5QFtwHd6cDQNPijTM7eP5CzfLZLQnYhabqLfE69khu",
  "key20": "5WyxA8KofWjQiy7uDNWjDERmQKYYfT7VHKD1xwdjn78PWiQayCfAV343jnWaYQVavAQ5dSpRRUgMwPn2fojoHQaW",
  "key21": "4E53FnTwqwtZVxbmaBb4qkd49hggTpt6jH85ipPamSNy2Fcrz4oAcQnP3u3zsSWs8pmwqty1hWCikE9brykogP6F",
  "key22": "5LcQj3CecqzG4hDAJ34SoHsLMFxNXbRhHMVfsejtdc9EJP9viSHvDeFHGJXG8L5o3zU2ScY7RDVPe2u6xd4gkGkZ",
  "key23": "37KZ5d7VovAFAwdbocLXDBKeucNNQroRMNGQdSsRXBogwVwQi5myKUSNwKbJ4A2U7SjD9caRCcPBjAx9Ygx8Q7dC",
  "key24": "2tJxWdcJeHJoETExG7pKkU5SMWx4KG7s81764X3QAXxenDJmdQ4CpRMJhHSwejHF99hEdw56LiL16Nmwb27c2mU1",
  "key25": "5Er9odo5UioubYEVspbfsYgrNpbhEutd2ghiW2JEnhciuMKtz18WQYmi1oy1ej4QxmKSDyzDXCjCS8GNMH8FwUwh",
  "key26": "3Dg5o5rf69TRUeo7eT8ZHRYXiTBadU5hSoK5keW9D5JYE5uH5atQRVsJn81AHiqhHBrykJe85mXVj45C8nwfooEq",
  "key27": "5cRbnvi6P3Nq8TefwQTSNULdnYYnZbtX5Ez5mKE5S1tpZZ3UenH3dcvorznnU8hxUwyAKkntgCDpxAcmUaiUo5R6",
  "key28": "2RQGcXzTVzA45vm7JGn5QgH5AVvg9XZVQcuMxv8SpPQxzS5Pgjr12UPemSzS3LRWPuMSbG6DPijx5MtRKZqqbahD",
  "key29": "QBoABu6Yr1rDzeec5Yav7SBWnjmLMie5JfhFfnUUsDJtUy82pGbLKJyUB7AAkprJBciESt1GTfQq2iRN1TZoshk",
  "key30": "a3zmYg8Q8Sihk6kU4vuZrV3pn6p8waav8m58h6tqDpjHgbvFgakahB7r1en2kCyNqkwvmJhZLVr7T7GTSzGq5ph",
  "key31": "4iqv6WKPbWVrfynX5eEwZGnDKx4WEyw278W8znWBJMxLinZ7Xqcjzv7NkvhgYh7KPAAKJQSs97Cqz4h8SoiYV8uG",
  "key32": "4LFCPDZEFq2Lxev48NEPu99XdWLraFveoYA8V9sPqHcbnmXdP9Nirw7uPMVy4kYauh1kDmMHdzMxxYAyUsHHrQ6u",
  "key33": "ftw4caoH5gtiwynxzAmnQxMvJjewt126kjUzBLrA4WFZZzdikpXvU3qohKcUapcWKWQPwysk8iNs1JJVVHVb6mT"
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
