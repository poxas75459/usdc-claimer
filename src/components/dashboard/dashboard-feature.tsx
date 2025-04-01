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
    "4RUm8wTE2UJ57QmrMFSGjvhy5Nqdc3FtSeGdGFytMDQiHyXk7PViEW2esdGucfGrU8qC3b3gwExqz2ZTkGSXwHHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gB8wL6Uu573UDFazai9dpx8mn9NmJ6XLzyd1FgBE4KnvDBJhUoMFsVrk3X3jfqf9NKu7TfswR8kVFzWtkLN4aNU",
  "key1": "21GgtAmPiG3L6guZsJt1cDzYv4ZPpF4CqV9CdTY5pLzJMAq29cvT1foK8JgLaJaKnCCWwsYAFBkQihiA4QVQhqQ1",
  "key2": "4kCaTeJni4dMeC1bPEoqGbcGawrkaWfee7krJyrFtSKUTV1ZJGdMyf94Ef2YZAtG1KKwJzVtZryoSUD5XXuaCpQQ",
  "key3": "2TwPVFEYYL4532WGrEWEm7Hu6w6VhU25TrMruB4q3uJ9HiEShwtUC1FhkwjWoKBi1i96Bz8shcq9wJNERutgTyzZ",
  "key4": "AxqyVCHwR4hfitCJwS7qRi6aJEL2CChNc7se1U7TmTur9zaRsYcLsTye58HEuuCKZUfREHuVMmzR8atDdRvi63a",
  "key5": "5kFxjggrkm6Pk3W3Yh6DWWy74bMCGKMLroUiZVw7P9EEwUju5MagKpW7JYR9pH8mJ5tuGVcS6FHQKb8vDR4ur4Nr",
  "key6": "mqmp4hWFrHB2iArjnrTP6HYrRDN4ApXZEZgMzDD3rJRF3ebg2qQ3CWRCEzMx9aaU6uFyJtBKBkbPLD1kaKUEWyw",
  "key7": "3aEc4xZyjz274mfDtrNZ1qqQB1nto651sKoQTPKrR4Zk5Kknh9oshgzMQiyZuGggpJ4gVA6WK75qUTDoLb5Wmf5g",
  "key8": "2EkjzEbED94dwFh4A2wNU9Z48XVronkJ5sP5ujuNPZ51ukaUWiv7NsrtSUPFn8ej5tdWuvRzdV4YZJ2GvvxhD75P",
  "key9": "2gfdchT8ihtpj3uWQvBARDkJAZ6TBQFYj9s8T9eR5hohKBHNgtzPuPQKbQANCm7cj6E7GfieVFeutTuG5G8XNCgd",
  "key10": "27EFxPD5FEUzpPh1sGqoPJhTcuZ3BTWfZvVq4QaopV7oZ5GX7jSyxRWe9wihHMTca8M854M3VN6GKoTS1o49wmXt",
  "key11": "3SXaSW9aaKajchiWz9cVm889nmQ4ghK6mkdaWJe2n7pvt34KbcGGYJ1apkJbDdtCLVWKywYDJ5FGNFNXFZZsAKg6",
  "key12": "2y8di8qU9fJNyj5qPpi4CwNw3jjZzGR2QtVwJF25FVJYuZFjHVrTeCbb9i59ikCZc8QEhhELZviWcaPNiy9LbE5n",
  "key13": "3HDN138M97mrs3mPWnmpkgaVyohfEcZv4nHCt23T94vytvRRU1Noi5cJ5uAkTo7roaAogLGdq2Q1RXDWspf9a3Fc",
  "key14": "2Vt2pVaFm7maR1seCMeVpDgp6rbq2NPTxrxiJ9UcSRFr7GcHagPVzndNKuoUTQSEKvQNZygJvk4FaSeMUCwrYRqm",
  "key15": "3NxnPECirp9FHiQvKdS5q1SAb1BQsPehAT2ejJ6P3HHSfYq27qWLavA8FPpiNPMRFDh8q6oTnAUwdisCRkeWyXNv",
  "key16": "qgEPkZ2rx7jBMyhzJSyvg6uXM4iAcF7HACiP9UZhPscxFaii5dnYqrf3N3mymQ38D1xmwSWcqdcjLcYeP3GGPay",
  "key17": "iL3n1qK1x66cUgBiqNRmpWPD54RwuoCaNAcSgiyHHJ5Tg888bg95H5oYMM1GnMKkWtjkUThGB5nNTifqnGTHwqh",
  "key18": "54KpAr2CmrHH4EDsC4abmqUxDvMy8ssAzbLpa3NUHEhiw1jUHmR2SogQYXD8KY2X2LYbvHZJtgP9NB38VnLTNng9",
  "key19": "4bQMX9ZjGMGr9ZUW95urjhscn5V61KMZRZthes1fkwXaW7rWCnKEip5VUu3EYaqa6PoLWKYqqUKSQFqNgjA141Vw",
  "key20": "vrhbhLV2ujuF69BSVwBsW4Zn9URbe6EjxkFAieimyiXiEnR4odL7bR7r1ncVfZrKVNd1yk2fgM3RdBzACH7EqWq",
  "key21": "5PRqJRYxrkNpeP5mwx28HmZCwj1iG8f2duJEEFuaNBdebzohqtU64cD8e7A4yLhThDwqpfGBio3YaE3F9kN1KSji",
  "key22": "3XBk1ezjndUR587kg3vZP728e9ddKtEyRokvTHKEQxrtPPvg4GYKNDnCxYMpP3trVMmAgu2Aw7rCXgkCoDLa5tcR",
  "key23": "5RGQ1SZNd4hNoQnqLjNfMeqaF2bWQMw847Yg6bf88fZ2uPgmiqWG5678hhAs6uwabatwkuP3HHacPBUFi8sbsWkY",
  "key24": "4pt97U8emVMJQH2wSSKFefsNzqSdpR5DHPLytzHfLxNXCRoB5SzLtY7473JqFovSdczCvJGcQtz3PEKYBqdT6Pw7",
  "key25": "294LMiGbVXho84FPGAPnY7qipKtpFWPyDMpSsbDFvagWZvLGsBAmeF9beq6oq6m2kPsxsHTYedZ9xrqwWPkLVRbo",
  "key26": "2byN5vdRp4NsKvzEpkGMidWRy6E76RRhNw4NeRgRfzUmWUMJrRziVofphF6xAapTpApbmBdgC8ZuSL9efxwneVja",
  "key27": "8xSbKb8nUoVREj9wyM4k7hzNq2hKb6vRjKx8Zjh1xrPKSfoT5hW8tSESi42UQU7VA2ST7TpnBnkZg4VEeipGwYv"
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
