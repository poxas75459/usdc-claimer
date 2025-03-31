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
    "2CaHr6CQqMQxogiaPqUc1QxNzYJdtrU4eGb8Qkta6DHigrCq6EWVHRbaqpa3uG8szHb5rNfCaDgJsMQ1DUEGCjQq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57cGX1vok796fc4GEXBwxgDy7Aqx6UitqTqmkPAoLWq5Jfxy7kB9Loky68o4yC3AiWXfHx1p4twdWdRwV9BZGL7y",
  "key1": "5fcc6wcGnMgGzQ4MkkCpkJfP2mBtG41ndZbDANSXJyc8KGJweeruKeWj7QLXtGiENjdJ1mSA2GSr7Lbw9coF4Fc9",
  "key2": "N3sZ2JMVMrZAgXpeGeiZMbvRhmhhXuJX5JGtZ8zkSa3mFMRrk6Qnr8mita7Wqf1pdHEZyVE9NnuYDfLmCbSrZc7",
  "key3": "LpioCQosU2YpzeKwyXTbvj8xLi76z1AyVJCfUPMKXC9wbzVKGhbFPvXscdxFqxZhk8vAcd7P7rgc2uUjFXvfvWH",
  "key4": "65xnShgJpp8UHiqwDrtnREYUBHb9rcQ8P96GtheGRk6EYXAtinBNXEWryZbM8SZbWXd1ALLeFBFe5NykNnYKa5qP",
  "key5": "4Z752QFeGwVLbebtaPF8iMu5stTrZ2S22Pa2dJjaKrBCR9YzFbFxz6WAUPMPTrQ92gTHtktGPitd3DuXQHFfoFHe",
  "key6": "5MMs5jmRBfyL2MD2tirsfhSvhvp3qaj58MxZq2g37arPgNfRTdtamPXJBAb4dDyyqPSYXqoh4YB83Zi1WSD8thGx",
  "key7": "2gtmKtXNaSpLdYgmJLeKATJ473xJEN8qZYCfU5i5tdU9m1ijkzBg3PHKGTkZz2B5oGoHC6zPaDCwwpgQRL5gq6P9",
  "key8": "WAsQquHZ752JLz1GsSDgpfUTJoGn9uR9G3ExEA8mn8KBZeAjz9YHHJFhx9S7LxVyAdL2LBjSoDcaSW9iVypUdnE",
  "key9": "62P6Km8Hr5XaC5A7v8c6LSCSfQz4gATkgqkWLFoMWia9gyDCijnhpi9vB4Tyj6o9kmbt85aTAUVLF3JPU9hsVBYL",
  "key10": "2NRNPhP4YKdAuzdNsjDjZMXF5rY23Yuvsu4CSqzET1XbdGSpVZfGC5vdumkQZ3fkfpysJHkyktsH1DZYBheumPqW",
  "key11": "3VnXbt7uD3bbbM8RX5L2EPay1A9Soh4dJH5LVTwTVydfa2TFnteSAgi1oKqsixfusNS48z33VgfpTnh5VShCmjRX",
  "key12": "ThzMf6aVx6P1gVKAjVh7kDGvr8JcYKwWNqALNogUsFvhsX2MwuvkuVA5QemkqFYi9JMG7K4m1B9nSEydEkGt5R4",
  "key13": "4Vs9JLEeqcupjsdf6L4JNWkKFLkXc6uTA2penER3dGnfWRebg6LWp9GHqE8CLn3HAcB6CoZxKbQt8GfM9M2sDzY5",
  "key14": "2pf3QyvyArmVskBiXSW8tdD3H8MuEJS3nBxv4Z8Kt59YBpdUDgrcSZ5yj2PQtRwTgQcCwnt3hE4d57vjaS2v4uCk",
  "key15": "61H3PE1fEwAK3rBEfCR9rk1S6Gxbuf6Psm8t1go8hspYe9opuKQjak8MUzzdVb9PczY7tUpADfy4djgjMnEqK78p",
  "key16": "4XpY6a8PkSUWZpzFuySft48icmPY5obRhX29Z59NQtczC4CgYzQN9kZEnnrYGTJXCZi7JXAxcAw6w5zxpdmVP3XD",
  "key17": "2JrSvpSZ8H9K11CPgiFJd7bAPd6D29ASWaEswUnbr3JAdavWhTBy7NWZxWowNR3ppNB1qCebXi8d971T1WEnZ9i6",
  "key18": "41T8o1Abpm7frvAz8S28TxqsWkHofZkTZEJwH6PJk3QRzH7ogxxFDnbqrC3PyjpnRE4YtXnBwx1mkKz3dhYemyAa",
  "key19": "5V1QX7Zt2upDz35aBbJ7BdV7eo39YBkDnuWHCueTKonUxHJBY4PLqQtTU6MzsRyPkApBZwirfeDGjPKGGu3TLWBe",
  "key20": "5gWZFZNp3cyWZEo3oiGu5TY7H7Qnp8izZExbRM7YJYryeS1tYmvHGjTLo75gikENWZAQafPdbCtiNZNmCv37Suj3",
  "key21": "4uvKqEB5qKhYgphdjhGaqiA3e1Wgej5T361FcJDWgrbhoS9KSQnJW9WrukFEH7nP5KuuN3unuMKMzP5h5fz3kBef",
  "key22": "4MorF7JUP4Vaqv7y21CGVw6njSedhJs4FNCbvBJtteogw2k3DooejZm62zbb15DmjgrVojn6jhSS8KbsDtwjFjCZ",
  "key23": "4BuEN7mMPXaAY3UGTbfgCuqdAn6Bnngc3rMeL3J3bqKyGFZpKCrhw6qBRRsZJwHvAGmbX3Hx6Ax8NgSMTPXifXxX",
  "key24": "2VVBVxdEAqcNdKQsu11NZMBXdUapVnzZdNeq53zcHa1X4vj9k5voGpw7icetVfQjkNaADJGSJ5DReHJGeFr3Vcj6",
  "key25": "3mHdDsJfwsVazouoi7btKJ1LvTMbJGKecv1Rofa5eoCy8ywvV3RPm1y4UWMageAuP4jCE6XmHKTyxVuh6ZPa7BaP",
  "key26": "Ucq79o2jXSjfHoJVq678Gd3H7gQHx8cwnaGSxMrR68LeuVyU4TcfU4QdGC9wm4DoLWBp5JN3nwQi7TvbQekVPLL",
  "key27": "5M9YFHyzwjquzxc2UhJfAkP8U4uMtV2joXYFWLNteKwRhZZqJmKjU411jkCZKi6q24R1ahSNk1iq56KSA6fGW4WM",
  "key28": "Ly7yPYRjBTmMHboUqPASuw3cxJ2JH6skP3HuUYHLv3gvkEPsGM4RMYPdoeyxQJBxLoeZueCyiiQNRoqzwu47hEP",
  "key29": "3nqbDo6RYcUkSWBqZrivS1HGLu5DvEfAvt4iizL9Lx9jY7a4C9XLr5bYNjzrUTjfAG5HGwf5otrkEi8YG4cXhyhb",
  "key30": "3c4sk6EqgpHqvKqEG2rKTowestoVTmrPTFWx6Lx7vGDZkp5K5Lc7h7aaLDp9pQxAZmZziwj4yb6RCr6EBR4nUiyg",
  "key31": "4ZgyvbjCDQwMFBzafzvAqA8HJsRQLMKKSZuNvqYp5bQmAs73ULtD5UHeLBb9YFTBZRmKGt9M3Jg8MLZnQWZ2uM14",
  "key32": "2TzXVdYoBZATobj1wg9eeCC8kHotLdzLAXebU1KL5nF22hutZLNKyBEPH5T4Z5Z22BFVJCnwF4KkYJukHkrbmAfz",
  "key33": "2y767b4YqyNE4j6TiXBRaVXKqRAMsG9EyDkxRQP7uSmeSULF5mz9ernQApd2JrPQaoEfVdW1uzX5xj36w9yyVLn4",
  "key34": "2kZ9eYpDS6gje58LWhwBb49npBg2Bj4LVPQ9AHg1TjzVFP4W57bZVPbSQzjmu3txRyTyrgcuw1GSM5tqn5xQRRz2",
  "key35": "2LUXeuwKAqk8Cd64kEd4a4xQNba1LfWxGy7P1tnoywSPyCqZUkz9mGqDg9RewX4kPQV6Pr4pHFby3eBkz3QtfEko",
  "key36": "5VQFa53bhL1jqDYw1zp64rYfzo2qM1BPjxuWed7518bFp7GWK8mFA8TjPmHqMMG715JKRLuyXnndKV2AvkmikkAX",
  "key37": "2joMTigycZz9gBmeoYgxnkEMZLmEDVPZe4ZHMh5yBwW1vRFkgxNPe5fKKyVjXtKG9cutXRNpt3M8QdHaRhnLrEyG",
  "key38": "4tzY59XE2nqsMP5mFXBPagWwCNXJ8i9YfdSLZgwTsgv43cGSfvfkLNjsvwaGSTnmWG5N4vihu3sadSsT8z7UtxfF",
  "key39": "5g9bzbmXUsCdni1zPogDwdNfHRK5EKAYo8NeEbWniUWvA9v9hvFt1TaHge8msnpgsZeUxQVLJrnerQX9nvoEmG37",
  "key40": "3CD7T4fi8xsJ6secxKPB4JXgKNCupxCh1mhYGoBXKgULGv3VmyzVoERDnnSHFUJbsRkkfoaK4ZeaJEea8oK5ghPu"
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
