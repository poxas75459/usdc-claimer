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
    "2JMH4ZdrfkoaGmUAhesuHGimgP54TdFWMMpR4c4bFRd57V9RUdKxGDYfD3n1oiizR9jVz8x5V8ooscBKLH4aPU1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZVjrmgpXbdYiHdWDBbQTefmHcZszte4sn8jZbtwGgRVkDQQyft31ULqsMsBvB7cSyUL8zzSz9MeQPyE8x51nvnE",
  "key1": "29it2JnCf3Sydn2KmrSD5Jdg91o9CP59Pj3rfezCBLSdokWeErCcx53D1dN8VQEAJG4GEbKfhz85ynK4rpMJCFKk",
  "key2": "49ANWp7mhreY5pnxwQoH7YVFo2ynnVp1s65iQFz7jLnbqto3fxq3VGfeZptdhok8hHCSepM88FSvobNXxUtKk1xD",
  "key3": "3Skcq1YQKeQqD1yHjCFForRn3zyRekDJyRVWaAiTu7hQz8qYVeU5ZPzYeGkcYXDnraWxyXsYayHwHE7QpUP8F2GP",
  "key4": "3k2ZBVT9ptyWSSsNAVy8SLNF4YEqXtWvb75ZLMpEuVwAtrBbgX8VYcPxG5UCmN168kEZXaQkPajKyAmiUfoag88",
  "key5": "2e9mBbYTaYFGbrxHqBkywB7vfNmZfhQk4jJYVPfWkZmmfqotLmZuZYwFxbmDF67svQ9FQm6siKEwvcCWgyr51XTt",
  "key6": "33CDB6KjRmFuHqbjQozgW8FaRG8Jh5FLeWUcBNpBSEeyQmN7HF5qwbSaC3FmEbKLByzTpYE7qFy72PCV1euPfKXQ",
  "key7": "3v1VoHhMp4MsdZeNRQf9x5jJCPc2NTwGX9PTzkzd4CjXc82JwD4c3H82GWPuA93eoQrJYX27CGfx5HCLX5zAoA6j",
  "key8": "5iery27jzPCUowEaZkM97Si5Gpo9osNP2Jx5TQ5jAqz64ZrKgETaRHqcEuPqKBgY99jtXKsvkZ1P1BQvFRB9mpNB",
  "key9": "2cnmJXPEHveXSK8t6xVC9RRq9Jn5vVCi9UTqHexSVNCz4N3MdLHeNQXcYwywqJXH2FxT9RJqUX9jbPmb9ETWPYUc",
  "key10": "42PKzNqqGQXykJ5paCMPohvR3q52GhWbVcNdh22ExYN3aTNp6H6GX3pnCRXdwTnk9YDwfLgoAZFvowBF8B5qcKrB",
  "key11": "5NtdZufiDhyyyG56RKN55sTCMqHNSnYkRzktB3YhJbtgFW7DDNZjEcCf3KR8bf4Py5K21tv8y4cM4pifdCEU4EEZ",
  "key12": "341UDwSArFSCaZwDmTZPKHqg764dVPryEoFfAoXLVpLz8hN2kwwxq2WCPXBADzF1zurJmQAyQHDF43ZcPSM2Eept",
  "key13": "4TyxZy7UVamtU4KjxijDSrAPiDoWymUjsNEsqFkXU3MMDZ82yNBcV1XxJNUdv9xfxmRtyPFcQQQpysP7oa6VbADs",
  "key14": "4C59ExCW1c6UvFd3T3KueL5bWdbSqEnvmUANqvzRAsHSyu6qiBQw7Mr8sp5v6TgH3dgzqohnfftqX1T39tzjn3u2",
  "key15": "5qkfHFXqrzB24z7UTPxWpW6m54TnttFgK12QYNdWkGQa76wNiqhpBbHJD3TcYdVivRekb1HnmZ8NYPiHJSJBHTnw",
  "key16": "4LqZ5pVtsWgC2ocemPTm5LNMnX7TARYT17q6ivjZXhxFASVVxarYshLphZxKX8J7uNJMaT63WegcVfdH1q9ZX5zc",
  "key17": "2fC6pH8tHUt2xd9ELc7y6ADpnratYCJQVopqUyhM9igVbP6SpecrtPwkD2vy1jmJSEmp5UrASN2BQmk1i3SXKAgK",
  "key18": "5apHX5qbyH3KB5kR4BWyUx7EYSVtVKb5RFs4Hny9oScjzpQvtkvTLsHb3MjN2gYqZBQZSECu37gNG8hqdZWVoCX8",
  "key19": "5HvJQLNvfroaT8rxtA3GgX2sYqK3D5Ux4hUHUqmumUbaYmy7PH3BptutVECzYJoXhzVa9e1QoGaXmAYQ98BEVfCR",
  "key20": "34rpUrygQWVTJngDQfN8bSXhFBbGrbyXDgYKELoH82Q99vPZn9btsmDhMk5QsLiQitLeDqZTzXSCpR54Qt9baQMp",
  "key21": "3yRWJDJYtMu3f6hNTPu7xWps8ptR9fHEXTgPk1dkM7BzGmzQhLpQyDhG6D7xwAfUpin8jpwiYnRbtRnbawpLDeVB",
  "key22": "3ESheoLMZkGqH8oKTLpi21smAS5UmUUjyFVY9TZ2NBMgnVs6b3VdXMuP3YeGZjsDzPumNnPwzcZBVpBipwjZhV8G",
  "key23": "24YJ8orErLgCRaszNHgdaa3yW7kEgcw8SVrFMnCqEWG1q1kJgYMmPzAynPuGfVAz7kDjERwLDWubNYc1me7Yd7Dd",
  "key24": "65scKDijz1bCrUw5uoRiZ2RGVmP5DVEpz4oKdPhLLkx3oaL5RrnjFWp8Ztuz1T71PmLrQoS6yxxtJQd2fyf5Xyn9",
  "key25": "5PdFkug3UuxZ1qyYVYF5mpSUVTSZhkdeFLQHSPT8581NfKdrw2NFsfHASiZGtC2tsfhLtWqpvqRGxDzbXgNz52a",
  "key26": "3M1Ynx1bJ3Nc41ehadbHzYeSSaPzcaKyepx3upVGmCaKpzdwFDRv6jEyFZrxVWuK7cUFUthjXxt7sx4xcKuQ22xP",
  "key27": "2LTjG2B46HargriHvXxGGTepukfPtBi3GzR5nVfFBXaWb5eTRm49tFJrDoChF5u9myJhxEzF3DpS9SnGZh2N5w52",
  "key28": "AhF1o45cFouRMC5LtfVombxkwoUjPHuDfDXefbNK1K9kCZhiYL7A3XDXCfM1DULoYpjJouf34J3uFmdy8WHqh1G",
  "key29": "4bfxLn7r8SJ6fd2bTr2DmTVFMbsBPzeTUdasMcgGGQmVqgdN1FVVyeTEGsyViM5j4pyF1XTZFayQ6ns6W3s8Lqe4",
  "key30": "5XQQfnZMXJrSrbgTy7SJBQxeBvg2zZSJ7PV1uXfdcRwMXuMYTTYF9UJ7f4Xkp8MiuftEXEfrabnd9JxvP2hvukq3",
  "key31": "5BgxtuNT7sUDdwocndaxWPZGFwuj1LmpBeejMRGG3RLjgnYqX9yDP4KVcqjv3thBguE9MksBSVhH3nJDcfC5n5Yv",
  "key32": "2QQWvmm5zwn3AY27ZRfnuiaSETJond8QeRgfZjT5hhaMhj9SzFKg7LHt9Q2ppSk4gJKMmDtbGZrUoiFGVqFr6jWC",
  "key33": "3HSSFgBWVgnfFkoLUwKXB73zDFX7aZPdQjD7uLkaFFeFATm8qGFiwmsYxTnvoXste8RqJ6LGSSasmP31JfLd9HZv",
  "key34": "Uti7GN2tdwKsZriyWiUPodkzL3J6h3xvBQCaHUr2zVZ2eqy4rFTc8wmVcAYXHeLEW5XcpbRRHaip3V1cKj5tkUh",
  "key35": "35WcVc69Y1MvUhrdKXqowenpBk7k8Xzsuc7vFQMk5VyKKgki4eUjuw3qKTRtKMnVg4Nm6i4AJ8U6znya6Smhpspm",
  "key36": "5DaCS9raqgnjQXeZZUDdBMeyksmeCFcLR1qjqxt6J6Cn5XAaqZeMhSrWUV4mnug1GJPouvb8rCqLtDTHmiRtyRog",
  "key37": "2HP1sxrKimNdmNWMpgN11Fp12JzjYdwJYU4VrjWvEqnwrMyDdPc2X9sSys5jgFtbbeK6qVrMKeyGsCruw2CzL4Sy",
  "key38": "yUM8dwTaCZNdnzA7TyqB6X5QrizHcDaupLnLmZNHwxeUv6LcrrXFTh7XRsdmSLWk95gTRn72kPTKMpmyQjep9ET",
  "key39": "3QDJ7vjTcJtVAVtNRs1wmFdStMX6Psbp9jnYZrMcryG4v41cEcHrhu6XCAVYKLxtiS6QQpDmagM7MqLQGTjwkWcZ"
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
