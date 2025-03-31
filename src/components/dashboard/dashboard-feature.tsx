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
    "3z8pevFy7R4m8cnwfL5ti3m3yYqAfdsm4a5LHSD6dw2QjZfu9aDCo1wqwuRJSywibKgYymuyLUzQ5zbaJAtYE3f2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tzbQeghbbCwd6H7LKVHYMHDXKfUT8EoU1tj3dDnQBPWKM1padkF5TXhz7CG1MiYsKNNmafHCmGJdfE4CmPsJtyt",
  "key1": "4WVjKnSNN3iVnMAM8X2NmND1s62gFbkGgUVfgo3AKG81dVbKJ4rn1MBVbo5tSoNRr6wfc4tD4RN969cjhbogvPDt",
  "key2": "25En9MJfNvRsEXXR5TxJV4p4j4cwuns3iagf7krdLP7xqF6FKKXFJBB95osKmyksEj66grFFgUjfjP252yAFAp8g",
  "key3": "3rgtsD4DT5uUDjenmRNFntsMhDX51SEtVVzEYo9kjYTVrU769wNDzP9aaXH4o8hdhLxukW45n1mjetqX8vggZcae",
  "key4": "3nqNU6pzcPDbaGnru9t8uFAZeLdPidcibcCiRMS4kqraYhryuLYzaPxNLQEBo95drUFHGCXHJP5CBm8mbex6tgTd",
  "key5": "5NzF9xzNoNWYFhpW6fubX7MxQDbUJBvcmufwNAKspjcy5TH4tM5AZirWJuCmJ23rCv674Sor85uvpsBE11CmLo6h",
  "key6": "454cBZzGf2X8kuxGx7z3hnyspoWefYjJgbnCXGTrs53YzndzdwsDELgU2bMJDLv2FmPQiAXhirLuWacMWeE9wvST",
  "key7": "4BLgGbep8m78zpCy8FkyLhkpaNr2Ge2Kek7kjAAqpdAqR64imvLSkR6zivumKDXvJyXeMTcfFjbFGuf85noLUpvE",
  "key8": "3jB2zYusLEgwb91E22eNnNV47jjsQyYj2CUyUeyFozks63FaFcWgku5DVSZem7PUXgg93vWJrZq4KCmVY7dMA4Uw",
  "key9": "5ebpaNrgM7yFWgcJGGD63Yve3t5dvw6Giw3nFvTHvKa1qGsLSXvpKG2sFjeZ2uDWrPHhZrpneW37N6LSoFBFy3ou",
  "key10": "3qnp13csgaZcPMFQFoRhHm3ihRbzLMBQgiAyoHm9JwFZZWg8fW13HDhpyXMup9asiFurLR49tM4XJxmHmvN9cHkx",
  "key11": "3nvLe76VyiwMRbiuDuR1T5MwZQsWPM1Z2Vo378T5HGC8i6wZoWAqV9fTXxSsrG2at9Hugm8rfAnepgPgYM23euzp",
  "key12": "5vazuS2QiFtNLmRZeX9qSbJgk8H1RMiBRyGTd8r9zxhKq3sQUCJ5iuwEJv8hUzVur4onMSUE5RfPeaeQ873qivg5",
  "key13": "2gP9kxC63iYPVbYLHkr26vUBAaj53NDnDiiPfPfo6Ujp3YK7jLFWMX577f4WogPG3dLruU8fFUh69zRRLQ9YG4ud",
  "key14": "5g8gEy75VtycHFEsX5DTHkqPiPofEApcho3xwNuDU7vfzxxX55nyfqo3VKsP9gwUcTWXC43xiqqzjZ94rS48MntZ",
  "key15": "5kejKEjxKv8t2HdZeV4wRPZrg8fsN58p8CvMM87apBCdbpKwCijgwCGrDVGSrqLUXkbAL2sSJjKLppbH5C3jr354",
  "key16": "5i6hr9ofgmkQpWwTvt9a3JAFX9uMD3ZVNu2hrvwvyWKTjQbmPCaA3A67XDXZyBNNjfbXwu4KwGcNn2MztrPwt7aU",
  "key17": "47tNgkt58TojGJW8E32JvWzaJyZkUwTwFnd9FFVjZccReu9Y9Mg9UUCURGdAQT4YKnBFsq5Xv5ZuidTp7KpNtprp",
  "key18": "RqRxD3xFAaG2XDiJsJdS1q8ApzBkp1Z7tVhNi1PUZtZ8q5NipoGRqaNp8GLododYELeweLqKvr1VU7JxcLvKykP",
  "key19": "3FfLRbJ64NVmGqgkffkkoWUVqEnB1zF9CXaZkKVmgeqBYa9e59kCuaH4gKCwHBPvG7jXgw8A3keFpwvcDnP6wNYR",
  "key20": "61EpGbHhuKRiW2HZxenX6WusNKt4Kbt1V3NKJDYQJBD9i8wEaTQngHzXEwYL423w6fDnv6nfkNUfrzDgs5ZZt7Vd",
  "key21": "4pEfJqkjWXj3Q8PHAe9iMHqXjE9CjFYUKVg1HRAhT4JDwQ7qhvnrsVtwggwtG3FpGmt3cH3gw5rWAhCuYRNs7de6",
  "key22": "2fdisybhrYHdqn6NF6VuVWryD63oKk465W4GUkncZ8JszHCYyzXZZZT5kvvtU25TR5zDT8EkNTtX9HbieRT3zfMv",
  "key23": "4YKLWGLdvhQCfN7QeHUvqwwotbeqD8AUVmhvrWcicSdKMXZDC2jKEzyEUx3zzm93JPRKY7Qwcp3sNSMBrWxSLcD1",
  "key24": "213G994UsfTnkdDZKbzLY5XwjWHfz9TjsNkyVYg8VDgMwHxkpFpPjqoKnkVgASnr2yTH4DaKSeFjCWzxpVrjDC7G",
  "key25": "2xsDXyxtzhc7rM8FH6Fi3zDotxThZJgamPQxBioUfET5LZFhqTHTMhfgW5tuUJj5CYm7stPiE9nHzkR1fdoSvWCA",
  "key26": "63vpyiLqZgfeg22wqRhu3bf7DXGQkrXS4LrZdT3KABZgRaVRfa4xoArSkqyptBNSmbQSYgQQHfJU4kRNYCvsGxt9",
  "key27": "M3poFY4wUPCj6W2UFEgKkshBkn9f8b31HRjpKFvnF6zJuXrN69qUajHR2EQNJuH9WRyTPssKHZJw3EjkzA3n1Nt",
  "key28": "3r4BTzR1rbAEPfCQFipdNrjtNSPgG2QyBzak52j9SatBiHP5UZiE4Gyun8anvoAWidJxmPGmNQtJUrfsNZPgN9JL",
  "key29": "3cXww8xTmBrsow21AvTpc1mkNTuxU3crd3ZrQ7Knu7eiJub776e2GvSq7r2RDtCxWmWaD8z3zsbEmR8FiSBkjGaY",
  "key30": "iTmQFwQX2tfXDZ1nYWCTzuijcebBXA8TpWMddLdHdXunc2cxCT783t4qbSruEAhyqbXNgAeYTe65VsviJwkZPrr",
  "key31": "5KJpB8dQMx883KVAUooHtjDMHECcCc1rLU5jVnFBeAGhYpSvSC3w8qqyhjFckzMdpcUAQr5sQCC4fxh1qR1opgU6"
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
