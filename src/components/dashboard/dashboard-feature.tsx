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
    "5AbhQ2jYuyApW38j63TxKGsV6yxT4Knt5ZbwtAUxvobyCDbPkxD8c5xJYqRF5fSgjsrYc6goV54c7MaYCAmJqqou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HbdLu7J3wtwrBm3nCtfQtsZh7XForAC5nDZ6pHR6PvnzEyKDZUucW79s2CTvghx3C1E7gEaZ7m8idmZic4os7n7",
  "key1": "42YQom7NwfpwTyuAbwjrfdmxdJywJfEcjoRRqp2wJTT4aoXML1HLJGGdxUJvyArRFCUE4ANUDrWsBTeySZxGDd7C",
  "key2": "5PqsdiiUbYakoXZq9J5aHq6mDRiEwYghk236VagUdsavxMSLJMkUhi3jgjnScBJriQXnrk6yUP3k8EQA3e53g2rd",
  "key3": "5we1QQ8WSgZqeBeBXE9AL7iraRvSKVNnTHZD4YuVnpAjyjkWiuafBqZoecscun2qrLxu9KukPtvnQwzv55AuYPqK",
  "key4": "5qTJPa7dQBVJRyd8SiYbcdKmcSsUgkzL5heexy1yiycCFWNaWM7PGRk71ZDaxZ6R1o2Et4Epc2RxzJhS3mR6Pnxr",
  "key5": "5kqiqr3FPaY61phZiJjRP7AyNmGyry7EBxYMvwesxXzPJfXexHhXadpg7e7DiU9LdynQXTcc2zs75MPYu9SJZev2",
  "key6": "3CDd1vKMDvCqA1NC5QeNWEaKFZaRo3btfi2poPk8i2RK4rUhNS5rzDs8ap3vm9gyfDShdrgaPRMMqJ8oCJQ6a935",
  "key7": "3vDKQgvsg1Mu6ymsDFuZtgCMiBRmfsCP15fMg2LMwS55U8xJXgkCCCuYkWF89BUNeFSmkHEdART4KgEda8ptVfB2",
  "key8": "4QQdNEjgEjoVXREKrP3AdkesayCM2K848RwcnRzvmbBY6U8dWBTeCGm6sZx3ee15N1GkfL8WRQMEg4uRsE6cgGhT",
  "key9": "RCDkWYPbegfEBrPkT9Gm8fnYzJvsybV4hNSHqHzc9SFqAYTaxRhKEhAnCMAzxtbgUeic1kp6eqcNvURCsTJVjDn",
  "key10": "4oiniaHkr1gUgJ2cseMhXDpLEk3Embxphv7Z9UzVBezCHo4sq5tBtuYpYvJfA68mHFFFpDY4EPFhUYfKDecrQDnr",
  "key11": "Es9KmAb6bsGpejENebRBFdtamGSoneSgA4FCLYgHzhXjmNWHsHsqooponj3raFA36N6wwEsAB4yeQFGzsJwpE9A",
  "key12": "3Qium3Tzy8r8mZrb9ZJmhAwXZWCNHhjPeBovTPC5314ZWACC3EnNkzCuStu8wtWZXjonD147LoYjfPmRXCat22pY",
  "key13": "5zBS8U3HezDrjAYj5D5CL53DjKQofpYpyaey5w8vorHg857RvwcFy2attPNxw6X8FZVZfroFTBqwj41u7jdDgHKK",
  "key14": "2jgmfGJMcwTKgpBCgSNEr1zWPjQsTfF5UWpbjo5Z728eVMcHZfgxgPqcMmLbCo8VcybNkFFBB6QCxHHhVCxmdRJh",
  "key15": "3p9YaGoAV9ovTvhKXBa5U2f6UzZAY3LQ2cWGWSBMmKvTbx8yvPrqDt4cKybBnGXXdSqeDcFbypQFiCA422pkmfbp",
  "key16": "3zMi76SVqtPronB4whRfDYjKb9BcjWRsvMfD8EibYfMtN983LJezRwV8vKeshsEs2P1zZvPMqpb1Yp5FqFL946h9",
  "key17": "5GtUCDgjDdyc8SWWhYw5g7Bdjc4QyD3VWdiVT2AbZzSGBgifJnKJmhnyASAy5M9g6A18s9VTjrDgKn3pBaTYVByP",
  "key18": "4ro4R8VZ9dzjrCtRmaXYRYR2AyXDhUiMw3Z1r6NQdDrcNRrhWeeSPGBRd3jS1Zo11fMzSQP4nXU9cyu9Pa1cG7D3",
  "key19": "4dkCMb3BKurGUviERMifBmPktEFaDUAzuzT9qd11Dt1UNrGLYeVtjPEe4TXiE2UrgHUmW6n2dt71VDSRPSdaotDq",
  "key20": "g4vomgXEK2ifLEymhi18qQ61PmUXmS678JyWLn539uR1ReP4NHSyFEUTHotFXYDQ5JZP3kVzPu2tbnmPDb3FLPi",
  "key21": "32YBVMYTRoeqWuNePPhSoG7LWY7oifY1g5JvzZgpCubFd7WFhmTgDnxp6G3Z8aToVv6L8BviWzfoDqXCZv16B1Wk",
  "key22": "62bS37zm9J37aACayLorcfeeHBprmcsAGnMn6Lkyyp6e4tM5x65w1EV1a1njfFRB973g1TWz89kghDAJcDDQdGuk",
  "key23": "5Co6vbrnFrJTBATHop73yrzKPJj6KjDVXj2hHKdNJCHRzJCsV3y8T1sJs5JcBzynx84TwdT8WEJuZhM3WVa4b2N1",
  "key24": "3w13egLWZRNxJ7uFpJPuTUVU5NGYMtzy4xvWidmqjih4gtPswPaQYTS1QhCSySKetXvepQiaaAmRHvxjkrxjrKz8"
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
