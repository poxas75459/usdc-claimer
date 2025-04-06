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
    "3y8iqQNsc7z8Hu6aNMe5Rdit6QuymHxaR8Bc9ndMhyyz4ZKiUwFbdd3eNK8DFDgoEcBkGkixQiRkUYiYDSvu1Bui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4914oZEmAiTQkKXWiKAFfECoD88rzTN5HzUQhCHhzrq1TQQJShFRXSCwAUU1qV4LqkQUawkPv4VXByW52V4X2iU9",
  "key1": "4y1u41SqgCvnhBbRv3EPin1pKkueMSfx99Hdxtc9TcMeVjLETWQqfsfAZUUMWJWbwY6tZrpkW6mVAbvBsoxqn5JH",
  "key2": "2qpytHqsFSzpwJvw87yRjmLjeru8s7PJuxzMcZxH6QM3AymsxyX21Js8ZpRaXcTd3wCdoBku3Z6jLyQjCqZFB6f9",
  "key3": "52uhCGw7quVR3KzBDvPxuMAevMDSUQVsQBbjDoR7aMKhxcvePBHBWVniALLrZj8YShW3J8iyFdz7D4fR8YwW59mZ",
  "key4": "21BAh4UMmk997iJZEbKNAznTWBcYtCLZCSyB6aeXuJrDWcTJzTwo3yGVGDzsNVMKPhpuFni4RSBQx955ai9gk1yf",
  "key5": "4rrTzD3BsREckKrmmCMydRxjnapWHUUQocS1MNBX9VZSEp56DtsBKmRKmu8E5pRLt6e55EU8LnNTxV3rd1aCt8Ln",
  "key6": "ZMpL8L8yr5rWFAgcqYGjHrQybwDVzoNz9GJaKxCeuMiBoNdbbZq5yEZLKWm2D5iBpXY2b92gaQQixkenmF6RKWL",
  "key7": "5Xg33oaAmgqSg9q5y7zBCCfX6s3zVAXdnzbnkodW5uPtVwS6dvmU6xEtAbzVUWVbYrvercrmXr6PyKbWbkMa5pTp",
  "key8": "QyeiYMRRAB7XzFpU1w7tM9FzgzWLpdk4PGCX7TXmfeJ2cy19Cu3RxYYR5hCjRz4Po7yso1QJT5imbwUft9v4Xwi",
  "key9": "9wjKxJqJZyJcTSFqrqPGvL1mmteVuQiGoMM48Uk842Yvni8gV9pbsiJK7ns8TrNvNpV4bC1e6xQatzAm65KYZYB",
  "key10": "5nfJtiLQQ6ESz9oqRJ5j5tn27G6avg3H2A86uu1A4vvTRmDp11Bsxgiz18HjwYBqDoddxgGsciFTwvGZEiJeEyus",
  "key11": "2r4Ds83kZ5YyifJT2nvPRavZPoeJmq3yVVCB2aNipJNBfL5Ay118xpsvtyyrXBvD7vezJLSav6b1H3GA2jN5Sntb",
  "key12": "YYGtzCndZpoQEp5vZUWo3qZ5MLTXUHkJyLP7ZmWWW3UAjrPLQswYcBEajFsrtt2ik3AzvgudT8XXwHX3Q2zBkEg",
  "key13": "5yhKGWMBQpp8HB3azUup8qjqq1aeL4gaB9YuYVAgwp8bigb3UZacLKAnYaJ3q9pghzjgJoro2CBFbXaRRiUzk2Qi",
  "key14": "2RgMJX8Vodfs2pAjGgPbKL1qPcdi6XV2ZHAiQrQNWzbTAhivjvPvqJX4Y6EU5rRS9M4i3Z4fUMiheGG4eCA2GXgb",
  "key15": "xiizGMzuDdQH2mnq4q6MGuYb4yAF4EvFUBqEPuuGiUHLyheGRGrR5TeHFGkDKoUQpeYXtYCJ3ADicScXyscJdhV",
  "key16": "nqxUoknRdFLnyeedMBAhyqjEtwF5jx3fmRBJHmeZARGy9nVazroCcLoxwRD1QzFAmxrjnPQZEPSvzpC12rmD3xA",
  "key17": "55PF3rmzgeEGnzqfDuNKaq4MiSsd7KCRTEXemYxd9YR4GUAqVFwVSmDcRYuGcZyTCRiwt1UUg5C6YgHA5uXk2cbG",
  "key18": "i2gfxrPEcsniax6LJTBk6iSC1iuTnjRb1UNSnGDX5ox34w2utbEQkuiiStVKmhKMkWobGqXNFxH2eivfrGepTNz",
  "key19": "4e7A3Y8bSgbxhSit8otirnYYoBSty2yHJVHidcio2iRzzC1ZHVz8XYtoA6oWGfCJiP5dqWkEq9GANPWSWwSmx9s",
  "key20": "4xnDAf8UnqQmsuDrS31r9enkKGPBwFpZyh34drD3BT3TBhVuLC1yNPGThVcEr9WcLvQAc6AQ49vEcRoENuu642tL",
  "key21": "4z6V1vMF78XTwiEfzMGnho857j2nkhxAvdEEtu11PKnR4jQ5BjFDzdZaPW7y5anStRa1Bg3bsgFA3A1M36HPpcQm",
  "key22": "2heopLXKtteV5FM1sNsqG5DNaH6WTzufknUwbWSLZVTcEuQFsWsddXkroCEMth88DQXsynDWFexS8NuY4dAGyDeB",
  "key23": "PALjUBXGzo4EyH1CpbgEb5tqQsnBKmqWimybRu5YdzDPABVLNgN9jPDJardj17tHqucfExujuhfCmppakuX37fw",
  "key24": "4z1hVsWAsyZULJaLMXCzmFHbnPhd8ja8UXVkpqdB5TFhVbFqUkP9eAnJemZSJJBVCpcLGYjXe33WYmSvLMYSPbJ4",
  "key25": "4fQSv3sFM97vQZbtFzvyJcSYSmo7CuE2zvNetHkM52v6ZoHWKcRcnPZRDmUcJYfEoz9REais4F2kqXdFDjeN11R2",
  "key26": "32x58JABU9RGVphXbDTypBF5nJffpfAfHtPTDXrGoACR37MFGX7Y2DK4K4cjcmoo3yyjrNFPZQBMBA9XmPDMk6mH",
  "key27": "2gb8xWzXJEpZoM8P8cKBhYWJB4FxF3TS8DugrTddzh7kR6SMD2SgJ93ge4VTaBwBnTzhRDsc8NfFYhVnKWM4ZBeQ",
  "key28": "Fn6VBwZU4UhEgQodiB2rb8wXbH9WvQdkLQzis6Re47jvEpt6dC9CZMsDZDd6HSf38RtCiMoz2xXSh9Q7JTjBTfK",
  "key29": "6TCJdSHFx6ye64nSbyYDjYeDfDWPdnTRrCe55y1gBxFvfRYbcK4cryQ9QSkdFtDKEjQeCCnpGbBoSWGZmUXtYiK",
  "key30": "593zF53Kihvgg3fPwETJrMBPjXPdKVsBrufa1PTtnjXXyGn7TRte1hAejonePPRdqcSH13xhxyVxNDcRSrv5FqZv",
  "key31": "2XFPQosNtuDFb4nT2B4a2TdetH4yT3arjW58rhS4TkkanByGdr7JQDayBVpKNqSbaK2KL5fgRTiX5mbtPmmRJ4Sm",
  "key32": "2hnuqvRzMM6cXsCi1KYPthUWUbJEueghWL42xE7grP3aBUe3NhTcNP7oUkBacoFWEDGueYRHzgMBPP2JcvdhSePu",
  "key33": "5GHNFsvqvH48PSbrcRUMkPKa9TExU8dXgSwx1UG1PQMC4YmTZiahGxkVBA875vnCBHfyMmERnVLvUrNtHsuncLjk",
  "key34": "Jca9QJ4JLiHxvxYstS6FiqbQzifhuyX6FEXfnhFweyGWthTe8hUAgAFFLaPpunxGpBZ7pVSGnvLwau5w5X5YCva"
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
