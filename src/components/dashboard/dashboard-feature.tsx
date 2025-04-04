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
    "uV4zFZaeRqRLs5tw2fKoZYEHFfy6oBmvnhvp6jve4WhCjCMgaTb9hpm9Ljf8FnkrDdMEuvSuyo3WFKAJNt4fM7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nYqguX6adGuFZUu5dQxjWfx5xvwzWd9xCigPakYbHb5bzd2qUQ7m1FcWXeK2koGMDZZNHmZX5fMrFSw1qqaYh2Z",
  "key1": "9t8a4CPuJzVFiFncgmfcgu4EE6cSU5LbPv6CWcDZY81B1RC2fendN7DacdE6NBTBnitjTgPMQ9cfPvwPSJBLnZ1",
  "key2": "WoumMeUmWW6aLGPcYuosYSqzgNXV986CQzMgtBNdp6dGM6wxvrvGT7r1yU5C91MztFyd1U98zoCKCdfFg1QHHwR",
  "key3": "9dFV3NzEE9k9ks6VoJfbUNLz6crwnnmEPZpHec5bnEK7tHY45FBrYjNQBjnLchrnTuMM3pB6xJm8W35Xv79BMec",
  "key4": "3r9NMkk44fB5MWnreZxqSxdfzyp8qY51J5xC4fnCZ11twKxyRtWpgvi7KuExLA6tWPjxKtL1seS1kdJS8nrseVYF",
  "key5": "3HPotcmnJpAX6E4KXeFfH2Zuq5vr8BfkRixYFnDZmYAFGpiN8YUHSQJk9eKPSxYLpkDSZjfuhEUn4JehLGzcFx5V",
  "key6": "Hv5JTdpdewqjA5Z85tBCVw7Dbze9XDBasAbmJ4SptJ2PkGrN7AwXGtSL2bt35R44MxSpdST5jd8GEmuvriJQgss",
  "key7": "4ZSGiyFTUxZfvkMcJ7JJLzoTDXxsBfPbPzMG6jCwicsCtnd7QQ7Az7qHEXCQHeYtJvaeZno8vaFAusFgz8mmqygr",
  "key8": "3S4cqwFTRcckNbcp4fbHFRZnmLFUdWt2NXynF9exbXt4HMMZnStndkCuEpJipiFsGCHDa5FgfdSyxpHHPeXLr7Yf",
  "key9": "552ZLV1qkM2aZn142cn5kfjfbVngmUrecfs8MZQDwdfTdEPWzhHnmY1XxWhKn4pNrUEPgfxeLq3Pwj9oVBPk2S7R",
  "key10": "2XE6cThLZdSCZFuAzSqqaZiPHPk6SvRXGnkopmZa5x86f455ri7ohQzmZwGV2z4foKqyYzSDDLnaSDBd7AvK96fu",
  "key11": "PUmKz41VRvgRoB9o9B2vqKqYwTJs3UfwjAp1WQutqUBuLWPym6EMKLKSZbcZHLLr2iQ2r9rJZLDphhu1hfowkcj",
  "key12": "tfemgmnEpULWorp6JndwbrEJWZqEkewkyvAoZyT9LRixyZ2LZA51m6Wdf5GxpauG2HtoAEGPygXt8rCAyRnpNMN",
  "key13": "21ZrEGexpqbhR4sSwM7Up5m8sWC1qfXaYgbf7ovXBch8zkBYejH4PMrZNxYRyputSoAfbzht9b2VDhpTtLaAM6AY",
  "key14": "oJWgF4LzJoFfa62VfsZy86wbx1RQwdXnuHtFxGd8zHJuVrJ9reayKyPoVmK1H4UKM7V8JHUBJhJuC5QkN5fN4zh",
  "key15": "iZpwMYyVVkRohWaX1Q7sFTXXbV8Lx6meuycb3GvPezmBVhVsyF92B3useosrL26U4pxm5cuiCSaP9tK5v9bXTCM",
  "key16": "4x3TE9KBiUNcMyJ7U9S32ndnPU7zYmzm2gU9Aybr7Qi3eJ5zrZwKZr1QuhuaznfAA4zcV6iXnVRw9UyKEDoXiyvt",
  "key17": "56yfwpSsqCTRDUU2fDTrnrjgPNiQcBNJ4wuhPbQgejAv7Nm7yr3NXKUFA5wZPFPuPXwD4vWEv2U7QCCiB1X7g8yQ",
  "key18": "2fvtsit1wofjiBofuPfC2pr1HCbdY2FgWAxwsDYYkqTxCuNJR21aofB7bUsRURHbUcfHPKd8Xc3HEr8KvwhCLe5P",
  "key19": "3FxBpoYLEevvD2teHMrjxZH6Gncjnn9h5sHcBhgbEKfQyKmtnEC1koVwdEAjKd88VWfH65LLKZnx34oqN2XFk6mW",
  "key20": "4S8MVa1ohDGAWQw1e3VbCQqHobeS4wQewYSyw98Q8CyTEdNp6nLKsWyFgzSJ81Y7PPk96aBLkK2JhZJLZaQ5tvcP",
  "key21": "2JbC3tJZeGLhrbS5r7yiUFc85U6N56kqgSvGW5xaFvmeJTTcTtwUAXLS2XsFsUrvAuwXxoMF7JuMWUFNa5QAwY89",
  "key22": "3YWvjZf8sV7t2W5avj99BZfSrZSdKKdAgdJMCYydG6CsUf5ZUW19axexQuLeN4hZPGGbdcEmTwctDUGrDiz2zv9R",
  "key23": "5UZzpz3ktqx1Vn1aWHd4rErBDFR7vJTbNm2whCFamFvUk3Fdw6J5sWCe59VVMc6YQDjoSGn4F52yQYy5v1QxYB18",
  "key24": "43mjrBnXyqCMkFtt9SRbmNJmUQ47XPfW1qgPW4PMgY8Fvy93rvvQv6TNkkqah92f5D6e3Fwok5CDiCUxtbgsTysq",
  "key25": "3UdcJgb5Go2ZGcHHrhT7apdopTBLzhchwTQxyiV6r2iKzkb93i8Q93dszwh5BeTxCruTPZFDWYRfs91dq9h7dbCF",
  "key26": "5abTziQ14KJqRL2NrLWXtG2au9CwtSiEZ9mqEgv1nxyKy7obco7aNUWAT7jD9ad3kU6Z42GqyvFggxJwS5q3zg1h",
  "key27": "5vubqtTiq1njgXbwmnR4Ztw9335FCMRB5F2YbgucJP22PyeyHYjTqQyDGNqeoBWoLDkXzQ9jR4EV5oVqXa3Y8Kvn",
  "key28": "3ZHH3qrngU2WwWgHUaENq8FTdf5Gid4tQ8yfE19v4vez4Y9UpJ3wxwB8iE6ojYfSUYZ2JgofPm5ruh6cU3N8fAst",
  "key29": "3QWYqctdh3aoaDFdrLyNb5Nge14GfkFZL1mZGZzuLXahycMZohG84HQLg2KaBqLu4XUUvZZnU7xEU57HvUWvyhu",
  "key30": "5fDyt9g68zTYjjFckfCX4cbkzuty9j1fJxeSRTBLA4251tTu4tBTKAGAboSY1USg7Yj64JbPupySj7nvZJdzEryJ",
  "key31": "4sf355d6PYJZGWXqzAKJnJygoxaFMFKJ9W39v8VBji4UPQ5xq3kXvbU6nGtm85DZfhmG8Ez4cmwXQAggKaxUaw8G",
  "key32": "2aBXnr1aPTKBRtHVh4qyq46k9859jgVmPwvy4bLAEzQFBw3tjgPKSdnFrGEU7ZDRK2tXmFWtF6aGYBBBMYdAbjwj",
  "key33": "5GihmewPyWQr9RDUvcTax6APLd5K22kqPCigVSTrvB8tZvGfbiiWESzfpbDFrPWzDPsQh8fDXePwTDP1o8yAH1bQ"
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
