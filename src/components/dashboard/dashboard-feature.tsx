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
    "49BGoKmPaGFLgENRjd6L7kWNbM1JUtzsVYvJkEY4tJUxxeN44mGcGUvsSDWaL8Dy3vWKKSPbKixYbQ83eFPQVfF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "374pEA6XSvTcsNpV6FG8U8Epfb714wNK4mT9wrVbhS7sQkn3zUytoYdgL6r2W4KKQPcX3pFucqaz92r4ivjjwQ3i",
  "key1": "4vx9y3MZ4c52xwWNGjUpMvebAohLezG7uBWBZxgTrN5ZkNdSjWyvEXxGcB9JoeDyEfhzraPsqyDsDSNQXyhUwgcA",
  "key2": "6PJD1n7BEDFhY9a4kwZmdooQyjVw2VxrkeuL1tt334VZLCCjFSNMwVQaAHAY95UJ3m81Dwn7TDpxcSqWXdHi2zN",
  "key3": "3Vb3dY6ggRA6CaSw7wNpLAZWSE96KaeXrEKsQj2Q5tBGa8w8KCLNXVQtg1VM7SuEGVeFcXBFnQVdqiWPBAvgpzqm",
  "key4": "1APzpodSWc8CUjWX5EDNf1dzKX5jYR4gEG7XbA2DCnvqyC7c3tpYrkZ5cDRqsVd8hiTCoTpL5pj1ru72YVzJ7qe",
  "key5": "3dCWXNDWHYNUY7jbQ33zNiDYQ1nGTunYgy2rSpeoiu5KpXrek47ce48Rjr9FJzjeudomfuPXmbxohgXgGGWU5qS2",
  "key6": "333qvDtuSHVq5hasyKfcCK4YvWdkZjBw7iS9CpNaAgWJ47Ts3jKh4ax9orCrCGyVgCmiQdzbpCkJ1XtkcCmkPJji",
  "key7": "2YUnEbbSkr6XKFknAWMq7yRyrpUJp1hwMqRS8U1XMSotJBhpvBw7utzE5abrheLVxjhj1JB2s4WeNqBYn6XFMmbr",
  "key8": "3U1NiBhrLZgQ9izy7jWtmvZVxwJ4Z6cri5rUfvtHjdq3kJRydRvzgFwLypTkU2mbzxSm8epfqXeCd3vFpdZv3Wjy",
  "key9": "413C5HSVsdTE9sBApQxBFEC8Muf9VXqwn76hVva3a5KUNTZgfg1tUrYgoj5CkWnegRSfGxUQ3ddtKqSkB1gLx4m2",
  "key10": "28M7pKDKTeNyV1yMdDofz55xLFMk5rscP84eoTifLmYw7ycRfKEkqmmW8wsuE4TsVyrN7Q3jrJNs32Gp47WcEQ2f",
  "key11": "uRRMRucFJGusTccHCGUEocyJnYgUgAP2zLGMz7g3zvoiyftKAPEHppPKAqpzhC5gK8QK4X9wxu43cGpRZ7HHShx",
  "key12": "4JQEXEvNxU9LqG1KZWRCRLVbFghmM8DraWkXrL3hgzUmCcKBvJVs6MFksENheCB6HnUx8KvX4mFUENXL7qX6SwiY",
  "key13": "4Txua2CLHsoFG4ABkxN43W2ceL3SwqkDMJKpeLis77YrAzTCudzjnxMDambo3vCGyFBwobfXKGH5jd7UMir76by6",
  "key14": "5Dz5hrVa9dZ1SbtgbB2fvLxh8GX3169qrqVSAHTyz7jEqBNgAULDpvnDGZAsiQSryoYCXM2q7oBiEK8fUKzT6DuG",
  "key15": "23Hhi6tr8mRwXmJNVHhL7RhnwPuBQBGtPcTVwhynUdZpdfceXAzoqqb4UZ1j91XM8HTHTKvneUU65j2YJnHfdW5L",
  "key16": "5ma4ij5bDhifbkqVHHFSYf2Gdt1aQRNq3J31rPYw7p4ZWD4Nz2wLgRgoB7uoSbPHLHY4NEMA3TQHcenFxKPADenC",
  "key17": "a3qy2sHd1N9sMt1cLt1Cte3urnzKWyo7Lxv4ApMfa918TSnid8xvvS77TKoEkD6cvG7KRaSsy67Pj8dKWYEgfuU",
  "key18": "guzdrEW6AQ1ZFBkokrd3rUZS4qeXgg4YsoiRwsVX8HrEPMX4zXFCsy3xYnH9Wr5uehsvrk7vqGiUtSoYN4eRDX8",
  "key19": "4FFzPxoh2NSJqftoc9EAVFR5iD4r9yYDb1taxnur8sZZRvWodgmXfgaPML6jLT6mCoNDvtZzNu9p9gyRhAHqyhCu",
  "key20": "2b2u6rqJLkCi1rLK92SHTYmKrZvvpqyvRM4EMkdZNvM9CyemDm4BPsHpB7tZ1CnvtynL941CLkwLJMNbiFbkfL8A",
  "key21": "3nza3XR1dnJpM5zHC7U3pnGjZUUF25uNTBqWDf8xRiCqWL9VBhVG3mjVzLDtt4QsyY3zYnKoche7dxdu6oMSiEDv",
  "key22": "VBWKNcu4bJ7wMd18Z6MUUfEEp9Qd9UiV8VxX3c6XHa4CPi9vcZDjv6BVkZxCs3aqfoV18MyEPG7wF2B4jmc1xpm",
  "key23": "4owVBfzUSma5HpDQNd8AkCuUGd526xz4Qbwk3ux4f72qtRU8HcuVPzrVPyRUgw3MYyN9Ykfhvx7brLkfSnfrCZbP",
  "key24": "5Qy4mFAoSmfNVhhL8nc5hZtt5CdTrDt2U8BWYXhrXLTKENQdbKNqEsW5qAR5daE8eS5pAR4vVkMzthkvfcqN2arL",
  "key25": "3FsknQmSPs1Dzr1vx4pfDdKGpwTxGzuB7LGAnX91v988qXhprypm5gMSLrRsqKtuWKDMZrqLkB4UTMooD3Dqj88i",
  "key26": "3yHwkwUYPPN2fcK3YpEnWprzX42ZEMoKyfwVpmkHtR567E15QPKdArWANwY4d3mUAGd7EXjNhnLiHXJvtfNGqdwz"
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
