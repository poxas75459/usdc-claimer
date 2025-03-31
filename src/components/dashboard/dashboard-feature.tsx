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
    "53KDJMiJiGYFChYXrBN7Nky1PUYnmY1ERZFhzrRjtRgKxgPebxw79Ng3eXc6pdSKKfGZwtaHiBUUzsFQUkkcUBVK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LRDgi98rGE24yoe3b34ZHEB686CSGVBBc28gZGANBXn5xLub3HgJjn6bd9KvnqQX2ePLYNjjisD1bACzAq7n67N",
  "key1": "3SyLHx2H6XBa1xr9z8XUG4Q4aYWrPgkVLpWCkET1tHVKaRuHxmUxvrsiY2qeRGtnEbno91HswURYQ86YNbGGHxQM",
  "key2": "5Me7fq5bGeSkUKDaAg6arS4UotSmAA7NECqTmdFPSJnsK6j3MxaX89xZHT1uAo5Lytwq2Jma3VAwz9Pp4HmKFqvP",
  "key3": "4sJrtBKm9Xy4d9a4GRwmTd1422BXdtus31fvXWLah6X7KXyNfSLFVpasM7HMx67DbBRQYnwGksBzGRhFUHwnFtWy",
  "key4": "3DFQ29se2U1zSZQFXZ4c7BALAWDKEWbDXjgvk7NDjYUtaJ2qWK7ayR5yxYJ6FPXpDuD2u6aYKHpX9oqxxkaXoxpu",
  "key5": "2A85SGPf9qNb459nihsSHdvH7WVHbZ6wVNwPdAqFBo8CGjYTz3Z4BFmX83SBDLfasjXamugCdP2F5xiFicc7t23m",
  "key6": "4Z6ZSYkbqJZMExCCPXYGQrotjiRrMqZL95GKP61RDmpbrJUKpYpFoxefioA5UVbdufZSok7DXTA6gSCX3AneeQq1",
  "key7": "3GY3GyLQ6qpHdHTzYwnxceeUsMtjyAB99Z74S8XpQPqPGS1BpxXPSRGHkyrL9z8ZN87sBDRH1zHUnKEb5weTCf4W",
  "key8": "2GsmPi4RXfUrfhcAR9B32hRyXJJsBEcM2NBSU8Y8Tps2o4ax5Qh2JXdmuqdCqEWb6Wtq4AyjovMkDK7JNyJaDscj",
  "key9": "4jtc96sDXfW4hFX5Eyr3Pf882AgKMq9Ba98PpbeguvpJvoAdePiyHc79Buyt9T8GsaBBhhqiS6XixsLGfDceH2Ak",
  "key10": "2cFLG9r5Mm2fft3SeoZUnpFKS5QfKcRuDuxpQ8eYxm3D13y343QWUCWeaH3MCsJPRTpmfWhZnyzXxh1ecXBYN99J",
  "key11": "3EYZJhDw1fiPFuqwNcXNpVGkArDuRWBoN5K7Lh9bs58BnDWrhnXpRHKFZZRhz7UXvyxnLkyB2ggMYpP5wLUaXNcX",
  "key12": "3ckxkvbiYLWejsUirsrxBrfyWxmJnAAm3FYgUz4cQVq1XcWPjE1sdEUh2oasmmRHLZHd6sPEFygd12uoi4aDKvgM",
  "key13": "2QsAH934y5CGcN4WtSKWFUtpjCgmzGV3pMjVHBQ1zsScyyKDMs1Zk3NCb3VMKMt8C3iuwn79mEWvpN244jXHjX8Z",
  "key14": "3XXbhzj3CcMUihZ1VbCZgGGPQuYqVrbJHDNnWLfcYyCPhtJLj9zGUkoXZTMjp5n6ZWWWEYq7MQxgsaZeWLoZGhe8",
  "key15": "4WDGqbmBAAMB2zPCpYvwZp8h1F4wTY3afM7DYHhCCgk6WNKaHS9GNJYiAxnRZ5QWMsjSpk9J6sT432MB56QVjAkF",
  "key16": "Fhau9uuwhKhKt87PeLATioUvE8xVjPbjNVXm2XnjrwLt2iYCgsKSN4wfUbdNT3gV82FwteikWChqS3Jeo2ABzZ7",
  "key17": "PKEuC5rSffVpgyZSwcHjmmFpqYRwvgdnRSsoReYZ1i6Yisrk5UeZG9f4QE3TAonm8foHJhyfynVV3LuAt1bzM9k",
  "key18": "xRHgkThCR3qUgVHTz8j3HrBCsukjkQeXCMquw2Rb1VTticgpCHWn1WmVMcDmwGnDK1GgbLXthw3BNnaeygZKAFs",
  "key19": "4izX5AkwsQgq4PC56kZtfqvgp8DEX5g8okuAqPqjmzxyubnBV3XYxcdfjsNXicroj8nu42zBvBWFE28JoN3RVWdN",
  "key20": "pik7x91MESwYBtWdtyXZpjKVUpEucRkGZw8SUL5zFjFd6y3nAaV8csyz9XSmK34Wxk3KRo3MBsUYNuCjS5oJfZx",
  "key21": "eePd62EjBHoBDLrhzZ2EUfpCe4DakYP8K7PTi3hb7q8Hss1nSGDDsr3UYV848oDMZjSX1tPFVtSJHmoR6B2Ei4H",
  "key22": "2ZaCpdff1F1kjGdnTo6sPFVmZamsZ1W5qdMJEci9rZ666TEJLvzK3rUqQasCvTKCw6Zp8HxxhPYpBVVqMMF3tNER",
  "key23": "22Drcv69YdnNWXn7KGanQnswctDtb88iCCuumm6VPWj534bWJtwHxNUygiuh7QUEeCfksmKQvJ1BYqPH9Vmnsv8t",
  "key24": "3J5ircQbmStYN5K4W174yFcKpVRxSQZ87Pr64iUN4wFEHdQFHGextm6GJSo26tDbJz8gqbz7DCCNZp4JH3NGzLFn",
  "key25": "4pe5VRtFy8y2SpDUdqEmuNdyjhPVDnqfn5G55NWsENNVmYRkRNSURHAaqL9s5HKqjevGUtwB7pYHLrwE4gLpHSEs",
  "key26": "2qXhHM8YV3kj7kzy7imdpa2o4TDuxvf5fkoU1YsNRH8LMsjQDUvuzu4mPRPRotuztoLDqq91ZHGpAesmDZViiAz",
  "key27": "gtpSrd5bSXbcox5MtXNREqsiy4w6yXm6JkWGy1sN2CCcHBcKwA2T9jfE3FQb1Jdfz2fsJHt3nFgwzZgcB6xcca9",
  "key28": "4Hse6qeuzTMAzYyNSLJxXysCXiWPMVj13h41Q25p2X1W7QKYGhNEowfj69NYeYQbwG6jdf8M3GjUY7iuEkeu7dhQ",
  "key29": "5B8UaC93u4L9aja97dFZV5jHnyhzoX8U6WQ9b3q6erXLo9hthV4Wj8DBUdoRcj4mGVQKFc74Kzbd9DzgUbLXWzJh",
  "key30": "4381qc53eESpYAjqmcAzoFiquPwBRQDt2Zy3JCLtTLGTJZTCMNA7miJCJo24HvzJtvR7YZb5RetWbNL9miAp2dL7",
  "key31": "QaY7HgnYYdWovRGDP94yXteKZhyG4LLfq4VqpTR3oxhYU4YP3iR4YunwdydYu6srJ9sEqUtyKbLHh2mCnkN6XiK",
  "key32": "564ci7ktR7onyQ2bRKSnuVaEYLxqwzUf4ALKzbANU7YvESjW7x4dQijpnA8ouurqmzU7hkLRtDRUpMVmcQP8mx4B",
  "key33": "3KHNbiMpphuE962zToTCpEzGBY7QrSMBGBGkPXARr92rqbAtkPFJDkMx3iY7Lm4AoX3oHy1dvAfxUBojHRRi9ENw",
  "key34": "2zegR13Ng2LBtpis2c9fqpxN4VBMaokoJ1qPppaE9QQFMcJaTuHpJAGYhvj1hgw7mQLRvAjLR8v9PCe2BZD94Y5p",
  "key35": "2kLv8pQrHRaU1838MqJMFHji6qAqNzwuncKESvfJXebRErkpiPzpvfXA23y1uWrDRkXXYNv58tPhW5PKFB7tgPKJ",
  "key36": "34heyKHYwp4cJL7RLFX6Rs591b5uViwJGgVw8uCvqz2c5aB4QWUaAHR1YfzjXKWv4NW6PMD8nrFep3Uy3gTqC4Vj",
  "key37": "4F7wSMkxfQh29CCQphjnXxVinWGwAcxR18b11UgJqQwMJ7io3UKrQGBMx3rvrV9Yd7gEuEo3D6uDYKVvEF77YgFR",
  "key38": "3bvFbM68NxBNsJF9x4RHjhSruQjFzxPG3yNCZceqWfkKUxqG7wckXHZuU7SSGF9RUSsurxeuBFq4WDDNE4WCPmE2",
  "key39": "43sz2bH1xLQAdYxCBBnZBMuGGDkTa5xhXtzfaydtxiao97oDoYefEcRSzJuy4mTAx3PJPZx7363Tzr72E48tjarB",
  "key40": "27mvmc6cpZoxBheKvzuiWDQQZ4yKNgmAzRtX5p936r6QGm8yqE7K1eW86UVWBV4GFjmfwk5mkFSaMu7SPGNXZBw6",
  "key41": "JAYyeG5XxfgprkJEsnVC9LEqz7CZgL48oR6j1Uk5c4RCSyPC4bbWwv2Spf96ZLiAQAy5tQ1z6ra7MB2sBvDrio1",
  "key42": "2asyoXAWtc3Tn5iL2zJedxGd1owizph3DkJJZdNe9SARQAWghsvrNKUUBSAGzQ9WaFe5UNBfhWChxuQkH8KhwLKH",
  "key43": "45DMnNh36zem9C868XZFxfzm2qqLGJoUAvaAZ9q9SF7D8b8fbAoThbZ7D5Zps6ECnUxVB4mWbByxQBqDCDz2C9QG"
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
