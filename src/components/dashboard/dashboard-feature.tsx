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
    "5WgCAdsm8cgrWHmTi9sM6UwG6LBNim1K4yUUfC6Sx2UH7Fpq3SvzAQ1Qstf2qSxT7ri2xMMNDTyDj9z2KyLKasw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cDnHBMyG5nsBoESCtc1WUUPrgAU8VXro4vEkR4w6AmTikbfRue9zt1yRZChRmhJZtjGXp42QYwEFyMYUC5CXWCG",
  "key1": "2YqsgTUhGnof9GzHRzrUfSJ8vMRQ93v2xsSNUYEdcf3846gCWfuA9zsGw5tHrjDeTmq8V9X5epTLteMXmWPEDjzz",
  "key2": "45Ls7Yi6UAqUo4P4bCcQpEjYk6ad6B9sMBubGw4m3YCCiktRrRu7pMTDhwMSH4YGjBM3j2LWSogteLNs2cP4v8Hg",
  "key3": "3R95iXxbk4tbg2hd8dB1tJbFMBcLKoYw6D5Rx5QpQV9DwpSW6Au2kcC96f9pvJtWVN2ZcB5yCTuaFWzbxLB3Ndbc",
  "key4": "5tm8fCqQ1sFU72yC8Txe7JJLmtiemf3SUDSbPBoijLC693i1KYsUdoPhDDWz2k25VnCsdrQsyTznqjyaSkzEX8Lu",
  "key5": "gyFAwqgXEsNV6N5iA8vJCPveuo71CpwTQY1Q8evwEgBFsJrEHUGYcjZuopZZe6eHf9APL5KM1gTekvyCdtLQXyY",
  "key6": "27Sdehvd7MKCQT3v8cexS2JbfuAYekAsRrfcswYKzM5DwswhSFgQuxRbzSV6YTimkfKkb266pNaLSEyjJz5SUkNL",
  "key7": "8tBNRGsuweAQ8XLDxR8HrM7DTzLjKW9AL7iZUmhRMPC2ftvW4SPXLrF5QRxhQTPDMme7NHonCTs1VXtgZRBJR9J",
  "key8": "5fNoqPcKuq6BhMPwTLn2LPb8e3D3geMhBoSf5GksRDghgeWXwD2rHxpL1KhSL8pzsN1PyAH44379vAwirowc8DX1",
  "key9": "268CU3Yu4QXqwSUsFhMSpnBjJ39m3Pt8ccXSR7vmFzFqAHDj7zZTf25MAR8Jvs5chJ7cWzEzm2Kniu5FGyukFfaS",
  "key10": "4QCprQWJtTFozxC7W8xC8RQqNd9vpbGNXNwW6bw7eUkZBD9CXyiJ7DhbMrpGvj92aZYyLFmQsG6eMpDCabqnj7Jm",
  "key11": "2e1NUb5QX9PGZAfVX5suZ9rP6aMRqYdLJ21LZNnPB8cbDoPq7DTKwMMbDqBDCxPbiP5SH6U2wMe66ukudU1AVUA9",
  "key12": "2CUUgvMLsPw61wCtbNCRS5vRrqCCHK2yEmPMvSRMHyPWiA7wqVYnBFm7HKt7HPjqK4J9iQaLpK7VxC4CLXhNTgBn",
  "key13": "38iztmVeNAqKmXAPXJaZv4xMwFBj3MQPz3S6DaPDKUiWimxb35d4KwTJeVNJZPFEtvBDbbzxAFALF3XuNXUEdbxJ",
  "key14": "3qZscbi64PWj4AyHHpV6ywms2XJcmkRMMkViQq7sxqQt7nGi1BYhc1TVREDMwh9bZX8jPEi8wFfXdxw1W33HxHFw",
  "key15": "5PppvN5MgrEwXajDf5uYYMB5TRbTaT9Hi734HGEv6xkKxYk8x6a58JV9nSiVQ9baQu7UCPpzSVkDNYHvHwoKhqDh",
  "key16": "3WCzjUXwmNQzTS6WXMLeAJZyEmC7hAhVmq8BLteGP47YUowxrbULvUbrPQrTptJWPvyMLWdCq9Nf7FhncYyQfDNx",
  "key17": "5tCPzYZvZ9161xFg5pZrrNGAGHy7SZrYpNfww6RdNvrtV5diRCrxwm5E9WXi8f7p95g4JREms8XDR8eP78745PGX",
  "key18": "3bDszRLRftzhkVuZCKWUZAji7Px3XzACGb6EJmQbYEXLHCwP3f4zit6oQGPLNDrG2vZVHzUJnG2YhVM3U3oWxmx4",
  "key19": "CDe6quJREbp9RmZ3qYPD2ZEPaxkaGihoG5BcbvKVvJtigzuHuGBJc7CgXxtmHm7RnwW8tMS1JskqPruR3a7aWVK",
  "key20": "426Wbyn9y1NSCbzy3LEXFFTrd5uBTbJ3evvhAHypm6zvAknzyx4CexQiZuN42sY4QiCQKNn9NNEBmaqdb7HojGe3",
  "key21": "5DWvKQkb63gfoq7BRGsjyMeMZ7vzzUZaAAfFjH1XpSazETNMu6GyacFZXspz1hvaE7Sq8ota1wWf7xGppRmvSYZG",
  "key22": "2jVa1GVy3PRxUyQLdfHXV1is7EYi7sHypdjC48r4x74dSTnjBBxw7hyB56j3wkrSM5NrqqjPF3kFmVpQ3z564RCj",
  "key23": "T8Fuz1HYBZyzY7nCVn7XVAGLGeRSqc9sLM51keacinsr9J4qQ4wATJkRc46L758gdAYCo4vAfXeDtRr5DTB6pzr",
  "key24": "4o4w9uT9uHWr9K3ehbGY6wWBGwFFdYeGqPTLGbfxtK1QSPKkMfo5Zgxwq6UiFGXvByn8hz7AGEUY1vpnUK7AG96y",
  "key25": "ZsaUV7Tdu2MXhKhYPZftNq1RWnNdEyFWjoYN1cmWtLA7vNJD1tcSpZXta5BQpwfFtKDmERoFYJLY7XzhLD5MHzm",
  "key26": "JNS9eEiUXd9684uhWCvDVWdb2fC5rxsd5ZHVmte1iLFSshowhXvESBYZsLTU1zZMSXxBJ95nGZsr87ccMWxktB2",
  "key27": "5LS4qEjh3DjWU7gqFLFLCwnae13wPsbXtXh7vkogRc9k5Bi5M7cGYWPyRxiv6wmGYMZv1zyQN117ZDKSPYg9zfWU",
  "key28": "4MmbQgw3XEVi84C3XLheZhHnAAS8KbPk31EhWZ7xuUoi6bqyzDPpxudAohScXPHoiuFXAHGZUTaZ84pPXMH1Nv9e",
  "key29": "GtiZfBGd7H9UaF6YAHirELHfSBpXpVzMajQdr6ZvJAkx6mXvd1Kandwo1xkPgTgYWY6zsEFQXErdLfuB4DQ5gk8",
  "key30": "2PpHZWpK3vCv32RU8CtnwSkNZcNNiueTFcp18oLctK2FuXLwvenYxnN9cozcqkPPdnYRQPjuCmBmh17C1ripjxAw",
  "key31": "5TMD6gnnKLgmud4c2SMHnLxgaFeu2aPRCLRkGm1CPpW8ac4csXkZ2rSgT9qCwivEVHJsvbtugZDnh2sanmrQifq2",
  "key32": "45RaMtwvR99L8ispULJc6qqqVqUdxQeVmbpFX2pCjjumf3izzq6kGyVKCdZJuQ4TgdQQYwS3q6oV3tStN5YhSz64",
  "key33": "4o29eRwZhLtPL2CDTwYb77H9BXRJ8GKa9brXUmvH9msMgeA2wAPLVDHFi58dBJDhJEa9RAcdS2Ve1MWmyoZdhMPu"
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
