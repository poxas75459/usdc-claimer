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
    "3C67vEdUh5iQbr1FrpmkPmAfYSVKsRZmenGfRiSz7VURtUv2ZFmtXNqJLKaiqr5RKHhCkUjptchSyEMfVVEqsd49"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GYL8XyZpLoCLjvRAucZb7pRyb9xcSXcmWS5xm9bhxw44CXsN3cVBsnqhSyRjV6KGqfwxUD5pujRd3rHfgJjgK2g",
  "key1": "28r5gQSj9NizApW5Ka4vF6bWeiGyXxBch7qEZyRCShi5ANjKNEtFUsuR4TSoSvx2dy9ivk65zBLrvsRT1tp2g3bP",
  "key2": "2hrM3dJqrnwQ8W6PHz2R5sWftrLtoWB49zyoFXF71a6KHvzR3QanwmvA8pxSpUNn8fKkAbY4k6fgdHgH5VTNMi2n",
  "key3": "4SA3GhiJBMX8btqJYr7da78NsFbcMcdeZVhLHaCNrwM6uAYDCzqi1r4NK1atLKuCFfxUquyYDRUf6ZHNpQ9WjhEK",
  "key4": "4otkgeh9dCUcnhvfNCkAnYCFoYAdPUip6YnpdPggcMgBmoG55DGAkNqfwy9k3HBvEZk7DhdGcEiM5SaAcDrinMWm",
  "key5": "48CXuxjNazB4HCwEBW7qR1T6Wvtr5koPt4se16nh58pkyBZSyFgZsbrJKW6V3tA7e13GvMwBmQNFoQHEpesSWizE",
  "key6": "2JF7YZkhq69tKiKXGyfFQDvA3dnzrqDkooAs85gt5k28tb2hehEdZgNoksSqE7Dib9PVDZkv9G3deYjStd4BGR2L",
  "key7": "5DysTQDYh2eu42o3WHh87vrJU2rhdyLms6t2osqwSXdpShNpexGuUPP6z24eYYbAHA4j8LMK5RGTvLsSWghWpQuk",
  "key8": "2pNzauG2N86sdHbGBpCKXZKPJr7vYNQcjVMzzfV3erPYFHykVN4PAQyXKtXHcxDJxPDZ5yyS5yVwmuACAMrDFhJa",
  "key9": "2oBGyasaWSgHGZgtPKYEquwCbvKiPNRSJqGW9BDX1mUbreAu8x16s4vGvZphBkqXzifUoKKNHjAgcTEKLDDqPMEt",
  "key10": "5b9iN7nk9SDysqo3tpwosJ5WcLSuQrf8sD8VKUZm1vEveBc9pVXwgLDTGqZDhBdhoysVyVBX6X8ZF1cDLN4N6y5o",
  "key11": "2XVW9faxGi4sagNwbY4kib8DGCa9VKqBhJjBJEdmVV79YeyJcvjQP4SC6794Jshpn7WgBHZhXrrAvAmTKx3AjXT9",
  "key12": "2o7cdkEF5t32tmJWiLmfGE73vhP4JNyUQth3kEzabiTzBbuVijgKqRDRePp1anVTmuKSuYnXq1UE6Wf4YrSea51i",
  "key13": "A9MpxYQyjCBhFijmiMczkMTNEvWG4XSqRPnoBE4dDV224eVKs2dajufTsy3kS7iEvwJBV3sg9vYYkx28ATxdXK6",
  "key14": "3k5w8gRCQXcy39Cu498X7vykUbWDyzyFhfSYtfcL6BSN6xmdsGiG3SFkbVfWnnTDmMrBmHCeTJKZ19BrQmuuRcF6",
  "key15": "2EfBYuAhs6jjHKUZpNhgNxuAcJsciWPfsFF4B2yJ3CLsuRCg1anMx7x7AU771dyCJM8pXRLcoPzy6vfUMWb9DSGZ",
  "key16": "4EDvFKR9cZvV1JY7XzFAN9bhcSEMMZ62sj7MfM1u91inibAKNAg4wzzCGuLxeZiECPwPdcmbdxdSKRKDoJQYkTud",
  "key17": "3jU2938mU5K7KPtkut6GHfUoVvM75k8pM9FCxPH8nLcWXhVRyahq97rcbfMkgsZSv92rtes58An2QpLXsVAUfuur",
  "key18": "4NVCbMDrQ5eqh4Urdy8PVH1yeBD8dRcTpbEp8BWrGTJfpvTfHhAryV7K3UTqrvXhRH3bRyqQecx1Su6itXk4ESNU",
  "key19": "2Qa726JvUik2VSW6Eu7QNP2GxXbUkcWtT8tYa3fExNcjFUavFW1eZUsMVrWr9FqCmJojkHMf5kN3zvhHt65HxNvM",
  "key20": "4zuB6PcAMnFNHyXkhHoShJjeDawC3Usuod9YX7pkjW2tBN6NfuBgcgrTUC6KM8ZG25smBGakqfeSF9RWfY2Fv1jr",
  "key21": "8bDK4VYBzCrzbQTH5vqJatGenTxNutTMGKFoidf8BcDrwUSyHzZXzEmLyMdxGYQfmWr3zBBTsCugmegXUD2ZS1e",
  "key22": "3H6WScapGeFJm7ZRTNNQoWoX5VDCZaAgvGtuJmhk6dea9LTQP8GWXthpkXMuJr9BnApyrX5T3PGe1KaePsuvffAS",
  "key23": "4aBeaa3WeKiAx3PocpkkDs3wGYbxm53mrvwYePH1pwfvCD8fzWDJSQvuxEQV8VyRmhjFFCb7wqJvUSG9Wu8haQc",
  "key24": "2HnLPz1d2ijYQjWfcVnuRWgGhar6F9vQLrxWhT42UTuDu9Aqd4VEM3ouMwQzWWUuPShnjeWqk7gVggm87S7GwdVi",
  "key25": "FHSVzJVfBGRem3e8nSxbwkg88CwcVSicTa4J7vua6uX32E39euKvfamdhfqHqSDfwetCB6CjP2JSiwsWLMksjVt",
  "key26": "2zE5FNBF8Jihpjxgr3JSAhxM4kiHEnXDQYyvp7Qf1V8nJpkJmUquWVqsrdzn9MJEGcXAbj7PfAKH24kxtC9u4LEE",
  "key27": "2zKZE7sED6X1rGS2G6GrNDoa3uJkSg2f8bzdfKMhAoww3tECdfNMCWuuqaPftfW8UVof8WHavHceXkf6jeiUhJoJ",
  "key28": "2PKKyHb3eThr4xUK8yeFwecxfTmwpBPue7dT3muLowAGwjsjvnfLXvpGxGiRxhhAjuvnhvBYocgZnsWqk2QJ2C5M",
  "key29": "4VLLkGAGyeXrpxrXUwTAZvmcZfPLZJ3JtdEhNsAZD2R9ApLVrL37deoc8kzTccwFv8wQzEC9jr2BuDCMFSv6rtEL",
  "key30": "5xTay4Z2FdRXvW5cDfmfJiZuAwBqEjCvsdiGSuLqBfVA19yDxh3fKHUaPm1WS9QoVUwqAZZLrGZz2FfwyURLTLRK",
  "key31": "DVNFofK6Q2qZw5vTZtwZqk7HugAmgnu7BpWtsSBRaSV7g55hN43DjYixouphpsQEFcPmdCKAnHf7NBhXBmqXaH7"
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
