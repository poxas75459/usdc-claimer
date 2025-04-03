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
    "5o9LMFu3QYKw4ifkvr1t34FPgKTTXd1GW6wqEBecWQiCavFHPSzQkd7TLFPXuah8swyRhdvwVgpVK9u21q3MVWnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i56pLYj79Xgyp5EgYC6XPLDNVBvLVdadQzf1bf4QQmEipsa1hopRf8rtu9RwP9qcTZozBKsvv2R7dMcGwC4Vm98",
  "key1": "5jNukvPZKEtGbjbMBEHmp4sp8ghD2LYVG8SgjLp2DZX6f9NMhv9U8h3jnsYZMVvUvnVHDfnF3x28Ai5PF8JWYZiQ",
  "key2": "4KNms9txfxPb9ZApW8GCMjeekQxbiWHFKXmoxytp78zFMdcHfc3sXCf2FwcWid38kEWJs4asRrKq4MFwjXNzntz5",
  "key3": "5rFCD7XkBsSgDL9s7poMjpJ8n6jTxWFBnhrgph3KhtSsLVctJuMiDWcFCW64Soc3sbw981aHfexzz4VGpzqDoJcr",
  "key4": "2oMYXGhgJDngE2ioRLJFxqxoQYG9ZYvGwYgP57oE5633CvZdUUK2zQQxfUKrhXa7FvVY4JgkhvJ5DwBeEaL6r7i2",
  "key5": "3yrCsMfD4sCtukPobTRN2WbjhiuDJtQEFkWoZcgiRJt3jG6rYzwh1qhYzzvRdHhgNhdEmPfcWZsd9p9NWQ44JSHW",
  "key6": "3ZgYp8k9cgNbEsBNqk1pFq5wrmi8yRtFp7quW1BM29MeibVWRUVSpfj38nJ2cgGmENytgir67qfoCDmXoq7ar6x6",
  "key7": "4Y3GJsph9o8YnN7giqebN41SrVo2eiDHL8yYAbRg5seBjuDLyyYgk5Asv7EWHfKKTqGNzLJ7QeUeQMHRinRxhvcu",
  "key8": "2k5LKJt3umaarX285tjhhPm9qvEFht2ki66BiTLyUhgSvdFuvjddZkvkmNwGqbhYVvqkGsCneCdaUTFoJb9MPfnB",
  "key9": "cjtQ9KMotxefj7F7qSywTjE3uDjBnMjDaFyRATdhASadFpLtCuceZ76LfaPH7Q4hxSqz9smgPYrrXQnvi9HP496",
  "key10": "49N1MPQeyjJi94WWiCfMDwQBprQsY1FE24THZjVf71EGpXAiQHBRmJJPxYNJrYAjWV6UUXKrA1Zy6Vm6Udc9N6VZ",
  "key11": "4sW8RMZ7k1AKa5fxgNmJkLYHhXQ9jDahjsAPQB8BJN4inaKdYNS9Z83K3zp1DvtkNvctGmd9mb951pXdWgYdFR3z",
  "key12": "3nAMf9uFywQ1nafR5UCJDeasCNsdhdSQHHfT2R1k7ts7N9rAcAKzFEF52N3AY4ssScjJaFiaxV4nn4q7ak5gggrU",
  "key13": "3UBGzrWJmKAd8Z3qR4FJCKiRnMXWW56pNhsVQnR23xu7B25FFXH43PSL62Ucat7HE25qyQ8hc976ctdUKuoSyApb",
  "key14": "P5oQDTHZDZUYgwLqHVe48HxP4mGvgA726UWA4SZ96tCQjdaCsnyL1RRxRHCEsu1BxCeX4UVDWZojsHictdSsr25",
  "key15": "3Zhab6DeG2j7JhoB5NPtmpW22HqcQJygUsH45EDYkfaMyZF6rwR2pY8Ksh5sLMr84u1bYNc2CyoHzUYMNQnmR9YV",
  "key16": "4qcPRp7ocqoxGiV3mabCf2oEBTkcNwvxk4RuJz8D8T5J5xypDq6V2nqg4DxsFoboduK2neoeTij2pWbwrRqdfaE8",
  "key17": "3h5R7PmWAUcUwCBBj3isJf83mCFvqNunTG9SKymZKA9mdTjH6y2N4c9e5prvTciC7Qids7TWkxCAwTzjErPSk7Cv",
  "key18": "34xjY4TuZsVmUgV9CeYBmAKtfGXYgFraGu4cpd5RPmLNwUD5gD1BwYQEWKW6am94d9kbuhsYT2P6J2trcbgnQTbg",
  "key19": "WLCrWeh26YrPaU22kSDTuMLf4p1oNG2C2xQU2kMmK1gTjowUzK5wrVSpCEAEVjV8bzdP4e8P2X2DJ7PhvFZfnC8",
  "key20": "4Ek1XviQpZsvfd48oeZ4GAacxQdUbX86uc8zqS7QwKTPyZUWo1CQFjd44pr5mceyFSvMkXsZSGW1iWR8McZsEEtF",
  "key21": "4NvugWJebRZG2xWUXmA9E8C6tDyGiB32rbqm8o2RqZ66JaiFvUdafTg3k2Cb65EdLc4fmw6ZM4SxGwSc8mctNBNp",
  "key22": "3ex27R1Mk82m1rvmW3JkAceewYEGGoKxeNsCJ6yExsJmysZ9GUMWPBpdKmX8vw14C2ZMAC9CJn1oZhxgtoWYvX6E",
  "key23": "4vfa5Bui5roT4iwKbBf1xRpr5EWcTnb71kaSbcvhc9q3GTvfzDfdKUo5dTXitHRYShi2mMKVUhXNvhXjBmXzc89Q",
  "key24": "3i1WyXDvLWk1BV5axdRt7Za8KXV4DQieyXvFkVmfeh7HU4JjaJStYUPpMPGrSwTrMoQZEZTETH2ADPE91hETHujw",
  "key25": "RAsbS3Mu8rC6rzFbrNHFhhv7jTEmyjhbjt9nbkhzH7aykocgjBT73PiXSuYxzpG1F8z55XawN1VGF44KHNSD3F5",
  "key26": "2SgmU7jeUjPftdJLQWGauUupnHjXUoMQJyWcCi1q7DhNr3QwXgCTAD827XTVZxEqzgDjdwMGyt5Ge3raWvDqcpDY",
  "key27": "2WJkdc3bRA81BpoxuvBwNH291KggNoxwGcKpPg1SjBzSycpKynE6rQzsuArvty99xigqwovSJLogD6b4BL9yNBUw",
  "key28": "5oXFLFWt8shBBXp9QHRNpp4ocRpGJ87duwGXfxEotZGiSTwChkLExq9QZzTu6uVGvFZ5Tmy7D4X4vbtdcnEX2D8q",
  "key29": "QGMzfZYAsVbR77GJZnNYTbFq9Dgt2s8gE9HbkT89BEP5Fdj2BKMqeysGgF2iHxoe58oRF8KNfVWRaZ7Bi27BAqL",
  "key30": "2swPtTijCbTBaGqDqLGZdv8YA2s35kC3QgCtY2UdErjuj9RXmpH7bkYRquzL8QFtSu8dWyHkXkTcF8duMWmz1MHM",
  "key31": "2NCsngdWHzNNxwSeFiVFcD7HVQcjaaxrnjnwcKn2AQ23sGUE1bGaT2id9BGxkx6SgTxsQcfAC2kL2kv9qVdymbFN"
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
