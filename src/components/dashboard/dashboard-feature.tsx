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
    "46nKdncV58gs8iYq5rEfNBzXBjVsg1ZcHfSUgRq8rRNfkNBm7xPiEo4xCDi2DzdTD8RsMxZ5AxvAzU3g5vnR3VaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QYA3q2YyYTqsNw1cSYuhnyhRwRzLWB4B2gaNZhLs1GRKHyvg5D23JXQNN1dsFk9c5i918Fa6cnpp7tP7jmFk8nA",
  "key1": "2GdaqGYrKoFaDP6MsC9mdqQXLr55WaegFbgyHjVBJQrio8E3FCNxDcz98qeJ34f5Py5dDXNtLWQCQ3d5Hzxq7cXn",
  "key2": "4wwdaTox3G9oWWbJ4JudPSqM4h1inwJUTGBXeQYCsQ9un42gt8MEiv8K59CzsauMpJT4ABiQRyqiR5icnvPfXrYZ",
  "key3": "5jfTFfApAY85jXMxmpWQpQWBYw4AKx33Gjg6EPfytcTdU3kJAHiuEWMLkcDRSYLiEJgTyfrNikk8KgC2m2TnFer9",
  "key4": "5dNEKeHKA9Far2MZDtgfzQtSoiXxGKGKDoZPoLGs67S7T9PEC1ZjF4svim2gmFixDBz9m93UNwbEmG7NFYepu7r9",
  "key5": "3FrnDdSoXgUXUZ97vtaCNiNmyTo8kP9R5tD3sA9hMxcey7moXWMdRB5xRCx5RrMJRF8uPqAN5QufpwuN615FrzYb",
  "key6": "2pXZUkxRRBuJHNKiSPTFMFKeRsZSENni4i7K7Noyx85RK5YKRDHaToXoufAB7YXjuigqpvwoXKmX67g3mQEKFMdG",
  "key7": "2dYYWmCWbac7bmYBAa3BpfDDRG8W5bcBG6p68QP8n4mV6NSTGhHXn53imUR4X2tHrpRrwQqQ5h2UjcghYKeVr8xw",
  "key8": "nZ2zKC3iEq8bcVf4DqdTrRJhGmktDUTE1w8q8HtENQMGeMwBcpdHroWU4ohhpardGGdeyzTHjrEn1VT4TBqa6cq",
  "key9": "4BD4LwhE8vs3gUpv9apAjiqhtiFEUdQ8FP7ftUw9BYqTiGug9dafAA1pCvMEni2oJXTgEKUKfbad3F9jihti7Ram",
  "key10": "4TM7dKeri2AtTHaHGcgZVfGeeDaaQQZ1zcUzNqYzQHRcfULgqcYuBg32iD9faJEsWiYyujpzTzrqk498v4uxFfbb",
  "key11": "5m41x8SrtvpYgUzvosjjk2yeKUVCGzD1x2xctWDBejHemQDAm1pyvxru6uA97cGt7dvuJC14b6537Ur85TJnWjRm",
  "key12": "2T5F9bTzgqiie7wBN6Zx8YXjhnAktujsWPGjpyv13xGXXaP3ezuC27vDiek5SxcsCYe1a4V2HLQqZxdCFD8NDhL6",
  "key13": "39d3TEoDiAtQtDWe6JMt1znfnP9zsA49P7mgFi2ETj3UZUGYw5vR6XK9epfLUr5i7zKBwTUqky4uPQmYQCXosGgA",
  "key14": "92NB8xfTKcbF3HhzKgeQAf2yzYfyr6ChxL1eADhQ4JbUhoQW9xWKkG3os9Qbo7JDnNUVpgNckhGHsesNDiPi3Jr",
  "key15": "49jmWwkHNYnD7jWJ7aMdPQuDVdw42GJWvEDzdkgx1zkrcxaQVpbZU16KwvHQUk8PthsxmuDYYKJa5CdQM7KGzVrC",
  "key16": "5WfQGSJASkWopT53GEu3DUtRunuU1yPKb3DRCx8Ypx46SAmuTkPNecr1LjhHqx8cmkTScm91Nmj7gJXpxtPbxa6F",
  "key17": "3J7Qw77zjpYpyer1SM8jJ85C16fVS2anjfR2WRe2zQ5WHQu9QLy8JxeN4YdWbcVSg87L3zVgZ3icbcr7tAHH3fVA",
  "key18": "127HAy12u4hUEY844zrVodGX4jzNSFTSYz2gSzkNCoMtEFZgFdjCUkyAb5qvD4iPMtvBhS8AJCZwS6hEYYcHHGm1",
  "key19": "zqHiCepg1YG7JWGSUqJng4gEjA4PkkoDcvtkBJFitUUCbQgRRHhg5Dqwzt8yaAGbUAK4V3RZf9cooi3Aa1ZupcK",
  "key20": "4jQpVdkeLJurj3tCRYvyeeagLjqGP5ZU9F8Zu8qjafMGgZTmuCXs55B5afA52GMUNVLrL3ZiEgNQnrprbibKer2M",
  "key21": "64WvutLS1MTD4wgEEcbbBmGAeg6VFs3V4AiWuznHdPz3TVyweyb3QNtZAY9kXbtXkKzMC7tNFL21FKe22u5NXp5S",
  "key22": "5GmJuA87VrFYXJdUbQDgbs17jkAdv4HarrARtdjKfPDqMQnQ9ZQtCiidmEosFuLyVjupkZ1jKWUqeT1ujaqaNeeL",
  "key23": "ZNy2qYgCCDFfcfLttCJqifKWmSdZEbX43dRYScd739cStsN4PcFYmLGMdo5MaWu3DGFKcoXDcHLpjaFETze4mEm",
  "key24": "ojo1xTKA4ZGaD3jtoJ6HDGbpGv6soCJSS442pGU4MhaE8u15asNcD9GbvbCKLxtwodqGePV6Q9qndkBqBv4W8RK",
  "key25": "2YKDwX5Tt8WMHn7V98FaNzhCsH1t7GzTxzzQ6MCBhVh67xngmbkh9ZMLNfHKgffbz4st9ywJhB96LKfMYSDkF58q",
  "key26": "2hMn3RFt6qjjVVCPhfuv7rZTQdnK7jNPwVhJ5SHiLDoJLcyU5mwYYhMz4fRMPBmgPouq7UBdSRE1rTeWAWUCKaj3",
  "key27": "57R9KFbG5kzKqHWAxmDL1M3QAg7uSF5uBqj6stdZVSLS1EHk7CJtb7EuPUzxge2XDeKATDeYSoGaEMy5H2ruo5Gf",
  "key28": "2PjFXzA46LUhXYwrjnv4YM2YHZKyXBLY7vZmQ81VWqTeY9k3DbdNh1GrnL9JPAJ3WHvM1b9KyJ2b2aYMQ3TS1qi9",
  "key29": "2PtikXTr4XSSXTQSgfjveuV2YCrRgvvcHjnc5WpVnFBTybh33u28m9fQjTiJYRcX1gembcVZtSgjVhxzhWEoK51b",
  "key30": "3SoC4TBRRFsfaTGNaqxQjzmm2uKiP5egzPtExciNomLC9V9UYQJTYjdpmLpdp5nRmzkaAexkMKpLyp2jXScEnSu8",
  "key31": "2gB7DC2aJwSknVJTDSmnNthyHAAoBNQqNMXXMHQTGqRQaSDeqFVsmRByuJnkAehQ7LzfukgomcSFxYUoGFsmGsFq",
  "key32": "3pVahYtiMd8zg8cAvguoExpgHNe59KfEL9UsGdNwFHCsnJT4kAPrVhCVRRgZ4f1EnS1fTAh7YnQsLh1SkLpPqjKZ",
  "key33": "3i5K9uxzELcBXD4PiRQX9wtsKExLaRQksCUiDTwPFvrs7DSLccRxTi2kAWq8MGc7oqADWEm9F1NyNKWaArrtqXvX",
  "key34": "2MoZqa566scEW2mnAQqFVi92Mn3N7XYD6wvk5w9w4ZuFtkouXFMGMzQG2F1rqnNELfTFJSXzuhWhJpCussTXaYwB",
  "key35": "458Paae8gfwyuKLDTocX3FkZhJwNx3DC8Jd6w3HaYXBx59mGueFw34upeWMahAHpcHpgKPSgtm672msLwur3kYhf",
  "key36": "27RwEsg3uyTNXDBBJQNPYvF8aCz6c5JA5XKJVWdey7uWpN6Mx3GCjSaCU4K7RSs8hvE9herwz5NLaxrqYK73BJ1A",
  "key37": "3r3wKCzKAk2cRS5poCuB1iB2cpoF31oN4mFazsHmjiNYbg9ccWJ3gheebKij83qjNvqG1hUuav2DDsVTht7Rs3QL",
  "key38": "51mxW5NpRERSyYfd4wNwcGtHhvb3eG8E6TkAk65UG561PWuaMUXRc2zV3H8cGKrTuBP3yTgxrVhRQd2HrnEyAk5g",
  "key39": "5NkG78MUcdRLGoFYFyTXp2ELwakLE4JQB3En2mLERXbhjGfA7DHZDMpsFZK7MmLvvWYBH9M95E3CGUsUfFUmw6Hk",
  "key40": "461Jb88Uq2FZ8hpjyB7ydSEkzuLmrVvSVydW6551Umsxwq8H4JQTdRDs422icVRj18nDTUBwnJChCfA2ga1HVaBC",
  "key41": "3ZhBKHgj45G7gfaSxpxfDj7PbXMw7ReuhK4NSAqGvdae5hDuWGpSTto7fcx21YnTLqQK2V62iGcRagPksnrKmmMA",
  "key42": "4LteSpHyYn1hKZ3owPh9GpvVdgHsBHeq81n4kLpRC1dVs6fEBqFduBHyCcF7EQWqZn6NwJorMZkBvCAhjf2JMwHQ",
  "key43": "3gP4NBkWiaPLDZb8VEjWrYJu4QeQecCfcFR9eC9yqQ2MDjiPYfjG1EBDGXRRx9WsjA9ruCnBAFPX9E96groGKCEW",
  "key44": "KvsX8PpsmYux7qwqVhcR8SReq9hcJGJ3VrRG4y5tSnkhRbfEno7G9vv7JSeRh5ZXZdwwhkfzpaekzb1kopyeQsB",
  "key45": "3iobaFuTEw7xx8UHEo9oJr2LKiVcKviRvezaYGUv4hrPCcXJdiwJbQhiUK33dwGrKNi7i7n9neTehgBoSakpU61d",
  "key46": "4TNaaZdMPXPfDthEKUSLkhwXBPt1YDLuknbmwAhBSj1e9KioqSgCUH1ukuUCXjWeNBkw6X1g9XUMjYvkWMZTVmLL",
  "key47": "5sQZPXmjWNdFK8b8Z4k6HJtfYUs9o3t5uTKb8N7iMsz7gtfkyXzv5KPma6bTG65v9iNPPLN8JfsRmuqK7F8xfSNY",
  "key48": "4RLfrFhZEknZ8VpgEDSr4695fRmU6nDJzpe7ddrvAZA2wBSDKN4TnK7Q6dMguspXNyGW751skxdpNPfMuFqgkRsT",
  "key49": "5j6jSANricSJeWSSru3Y7kxu4DQd8zF9zYaD3Y3RoNUFdGmqRGHEVaGR4B99MCVQjRQpX1uaMfmosX9nHf4bNfqj"
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
