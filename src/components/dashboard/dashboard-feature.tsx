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
    "37LgfQqYJtBky6ZAeetxjYQspuhMHxDGCZGbPyBDjuFqrdbxMqQyY1E5kJS53abUnejtBpRkKSRLPbtrUpj35v4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lxfb5axCrUu4mUL3QTcwDuqFLtxWj4u3A5C5U8wTX3tCgHMfbeDJsNjgZ8g2x8eSwuCS6FysAzd318Cq4fPisN1",
  "key1": "5sk54CC7WAbn8WPqF8pVZpD1vaVE9Z1DFVWMjoo96rdTE2zZ7kbX5NGyrv12gbi9UtvL9PeS9wPgAexCTWjRqunP",
  "key2": "JBUVrMc4Ud5GxzwuMVkJrKQkVR27b8T7vnDfgXPeqdreNHFJTUD6k7Rjia67HTwRgg6CaFwjttridz3xiPrzoo6",
  "key3": "5i7Svnaba9cd3Mg8xiVoUuh6BmZmJdetMkywoUNu4xFxMAkPfXycGonc1h9vWWsveHkZuFTP7QhMYtqNjzS8DaEJ",
  "key4": "2zqgDqSugo8FdQ9gujKgyM3KqeXzbS7zKJjsgKN3CAFdgSivwZWgDiXxEdaVbkg44Ce9M5MpTv98BZvohZmSw8Xo",
  "key5": "3d1hzXJQWGBcHY5MNAw6A6F5myTbaDJVmEoLngPZ4TATwkHSLfaHQHoonwdHqi5pCK9V9mpfUYyQZZiz746ve6Sh",
  "key6": "ygKvcLZdAqw1vb65BHBy1GufpEoFienYQWFmkpGcfuBXhqV8Dne8ArK3pbnSqCpkWjpriEPyNnisi9XYXMbmwLn",
  "key7": "3EDJpxhwacvJALgJ8Qoip9h5DFknDL3oyL7hrBRyWuJz3yFEcUkhBc8p9p7Q9f1dCz7EjEttG4CWphcW74eJ16f8",
  "key8": "5urFArfYEurLA6rzBXmcHo5zuyzifhcedGk1d6ryWtmYCFHHLTdziRWFzTixoHeEh9oHCfVPRtqMftp15AyuE97V",
  "key9": "5kF8RwGUS6uQHLviuRm26aNG8T3KMaw5oEnhfsxkaBT5XceeBQYK8QgYPqB5VLbNe4en1tCkNYjtWzAYZGbynmh8",
  "key10": "2HZBp6Nhdgzcmmt4WcRTvejy869KUgGg3GgLUnMw1HKLjaToENUyVQV5qoDDrbn4BkCx8V4mF67iNbFjE8FpZUVu",
  "key11": "3a1mG4zhpFPE5EcjLqAbZyc3KrDwKdJgMjfkjN1Ej6j9YkicKXKwaEc4W1xyrC27BYhQX7ALjGoySYv3JMrJd7SX",
  "key12": "26w5KfgVbKDEi8obTx9Ad1Mk5ufiK8K9SX9zioy8fVfQfd9uVD7fg2YVDhkkVKwpuXk1CMk5a4QqsYZzPDRMSAWz",
  "key13": "5NwttW4SEEL4xjRnJRChYtt1YtuHedhEnrdDVd8HKgbX25iV98yHDaYca1FWn1CMP8evmWnmMa9epSyWunQRsYvR",
  "key14": "4XktfZu2BBzjhggB7xpe3qfHkXRJjGdjwJRA2eGgac6bEcPvVgnKWZphdUoqfLAPn7deoM9VbWqVTN9VxmaPbtew",
  "key15": "4fj6yy8yVJ3NtFRLi4oJGwacNgefexmpfTDtuMaL5qQaScdLFd3UDVtFHN9u63KEMeutgoafQQhPvt9GEbkqPspP",
  "key16": "52QnyVKkxbaVnwBx8FzxEaFuYyAffMigasCLcqYWZUAuFx2Y81B54swjf2JXiSrDZ1jDdk2RnRpPVQ9SVnuibnri",
  "key17": "mz1MaAmyci3q8pWUGjPWZcFBiKaNc1T3qnb2CWjtoVTzukpH56Xwd6RMbrvxiTVQdzixraUuYuG9KhvDknzCKnW",
  "key18": "5Rn5BTna3WTM8PchrpF4gMqAReSoa3NNZo3vgHEibbxQtcCWJEwZZxXBjDkP21y1HMkb55TTCMdxJLz4AjHMLpNC",
  "key19": "3GsNrPec4AcKmqwucK3qSy2uj3zKEEBQU4LPzyBW5hDnapKLbqcfkMghTAwtntMnTdPJqQPj6WN3t4CSfowTFBTB",
  "key20": "4CmmfX3qEjrLrs3sh2oSZ8itk8htZJd9dHRHza8yCU918ehzPA3rwAxXHb3MvfwmUpXZnsjUCKwvrkpKXyZHe9rW",
  "key21": "PQe9VUFo65P7kBqepgzzCW1CpDp76XySLQyVE1DZP5xzMZLqd3hshkefgoDUP8Tvc6eYv7cS1dgtXMNqFjnvZnk",
  "key22": "CHFdFRPASsj98KFJUWrPC5QzispRSsFR5U2ahBzeYpjEHSoAZwPznZnZWB7z5B55SpBMaxwS38S85ALiijMUF7t",
  "key23": "5LVTaaD7aXgfLYW4qcHkpQiyCq3tyUTJEadRS6gw7KBwPKJdM9CyT39AdBNe5xxS2GV99FMxwZF5LcuV6oGyLkUv",
  "key24": "2U8pyv96cHQWyB7ytEx3imgw1n6LuzLT8ZfmsGGmq15qCFfvfLXX4Pt2VgTS3pYL1puE65VLhGpMWjQay3mzqugy",
  "key25": "c4pDy5q454RQf3TW9J2US12EQB3XVXzeJbBJcQi73Qkm3hNDUgLia4AnTgRhhEShs7mLauEWjhffX7xWwQcdeHV",
  "key26": "4Tk8XL2WCNm8qTZFwEH5abNkbhgTHaqCWA9JPkYASLNggah7q9hHRyA4YnJaHfyFwYTXtJ9rEWLQRu3xGBLM3LBY",
  "key27": "4J7PHhCqGFDDqbW5aBCv2Z6KDgJaYbdbYmFweptrgjEtgmFGrE63y1fAxBM4B8hY6qZkfbJousb78T6bnGmNqQoy",
  "key28": "3zWZKipXhKgF7xpxke9xFokdRrXA5rXjKHkPxeycXBjFkRbxJCdqSqW9dfKDWQEViyRnMbapcHDf7M8e24CdSGZq",
  "key29": "5LhJGwcowFwn91XAL7y23YZ3MzmuE7ziMcuNLvT56a5nfxY4iYDVYgCwFBGJAye2iqMCxqQrfJBN7zimZDGtbX9f",
  "key30": "QCB8mSwFoEtUP2i8kNVQyRR3Tsba5AA9xvb7GySxpeLLCZ8AyzdzUg26b8Bi3dE91pZFspbEVLMQJ4TwHUQ8TEn",
  "key31": "dkP5c6fUgwj7ycaFVNinncMoNpYWeWaArjSnvSMZPHN386efiYtfTi6K1i1kThqNAPuxkTfNqwwC5pV4XLW74mW",
  "key32": "4AtFKKudUx8hrqMGfrGcBpqLePSSytE69zkCTSLiM3Sc3mWkETLfxB1Cg962S9QqEJbQaBerefCPKnU9aYw14CyB",
  "key33": "RrGSp79kGtCcnp9rnCZHbw7wgUnK63JUyp6mfQfnLy4uD7icVgW24NCfEsmrTAsBNJufom81rmctDofMjXCSYVC",
  "key34": "5VpRTuWG2SXDdNHRCorLcEA4942MZwPAyLbdPmDB3pjf6itcBXM2vGTJKwxcT628FLoMJKSUyhkeiTSay7uSazzx",
  "key35": "57BXHUBedy1bNQZJr8H3exEFPdjoxkTsH8cHSsJtYk8qXU1GZdE1GNjwMmH2spE2YeQBBKPPReh9Dwh8rGLjfMhx",
  "key36": "2k8DTivY3N9E77uud1d1tfc5wPEkYXMDkLVy7t6WCyJ971rFMqomp4zo9VxdrjfLM7wZdrbBADrkZSrqqxxgWwxq",
  "key37": "2b4Ag7fVRpU6daAF1Vt6SvhPo2KJyy3hg6D12GMWX5MmaEa3v9LMqwCMyY23DDLgU28MEYPZLr4BoUA4qmk3GgBY",
  "key38": "4TzQu7Qxd1RpEqS3i9BKcFCVByx9DKdD11TXVdmHqHHe5YhVdhJBviouAPf4wyuK8m4WRb15XhdTfkEuQMuvaujZ",
  "key39": "5TxxRyjMN9UCiQ3LycyCjnzndFZn3a1PZmCQFAZoirxECZiJikD9v2H7UosUeFYn8Aau6xaJ3oYRvTrciV9f65y3",
  "key40": "E3AhGa8DeK9uBVuq8AqjhRfUwzJo1Ud6RLXtazD2rPsqyXWwuP74fdYZwuzdD1QzYxbu7rMMsrTdM4aC44RTpwk",
  "key41": "2ed5p5fDbacLgDVTM72GthW4qXHsvHNz37pDvYuJW9pBgKuUkaddrdET74KVu81mUc5XfsqKfEkAbR1sGCHJXsyL",
  "key42": "27Yqj76Qf34pnq6v6kUT6kUvFQRxYpUdcttLN8vKT7u1xK2EPkmJRqN1yDeAkqUg7SsaRKDvyif1GvdBeik6YxMk",
  "key43": "2cJNRcPrJbNu3yQgPjYTWY5ygxXQWAniQ5rasryPtZLphW5bwapMqWnMaakdjuGMNcZnxyDDbnmEaauDFUVDM8S1",
  "key44": "rDC2gTctqgLePZ1RByYgyzgs7Cw7thiCYB1XxAZka21cfXY4nPNidRARzhVaEuApkSWV3yEEw6sXz7b3ZrBUuk6",
  "key45": "5z8SKsooRXsvSc2QZi2dPanJioqqZe3Mo9QHUVts8bKCicPLSK3gpg3FV391TvJsWxGcQ7rgc5478HFoht4usHh2",
  "key46": "4meine3D8vDMeesSHN1C6rEiEfK4wfC3mQ1oEvuWgS1uYXG4wdpPvCoC7La3qrW6NtjSTHiKGnweALnaaahaZN1V",
  "key47": "3FimXQpJL6GwGCXMby9YuVoZbyiECcdAefXFLXM8eL44qvjFcNBZMLLPWErsVm4uSAXmhVpuRenCbd333ooRqoSd"
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
