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
    "38EfNnP6E9tGEhAKKyn9U2fhdzZrCqd3NL9xX1ztfv3AQw3Nq6SmeycGKzHsEBdtRePd3rtQJSJVnYif8MTA7Rj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3USDMvRRL85tCriA5y6fhwJNjBmt4Dhp1h3J1BLhgCF5FgmAcysvkupiQTvjEh9CWkCPGjDbWXMpQuSD6uG38on1",
  "key1": "41ZaBU3JtgUDewiNap9D5XmqKBiWqxiFp4HPMRHHE2NRU8YF4LKRcUq9vc5rGpqJwteQAbz7V73owEUrX6W1ZshQ",
  "key2": "5tHmbwLtGhPUTPi6iJABeRniL8LfmwdFU2fQUxPErrveVLARkKzyXERJmqTy5KLZsmKNKRxrDzU6jHGdDBsKAQGt",
  "key3": "3AJ9wfQx7xB3h5SWdzRTYguSUUueBFXGpAtSDgcDWfaovWM48C2ZZo8wN9SpQu3Lsi8bqgs4vz8kxDZ74cLXMaVJ",
  "key4": "36wo8pbGRNydbvSWnxDGCTdxUEnXZTmKszhd9iGY6ehbFDN3TmuKGVcddvoPRuidy5W2AysPkENh2frNEZBVjToB",
  "key5": "5L49Z73yRqRcBbpXfGQXWLK5ezGxj9pLNZLfJ2HxGnke3YF86fcXBGHhnCzyDfBAbyqfBvQMinzq3bcjhiVhdTAi",
  "key6": "27KU3PP4LfudJtrC1qeQqP48u2XM7bJgMc8bsEuu9av5dJjodUAp8xWYtT1FRVHKgrZgYPR6vu72whGgNZ9LCi3M",
  "key7": "5z1H5XS9WeY8oGYPjoP9yzXPMmLydohxCGoy4D1qgmzp2DVGAf5YYFrtCZ87vzDEfqvAyt1XHG3D3fuDkk3wzYKi",
  "key8": "5y8gzStjmVFjkA3YP12V7B18U7WpEfNMYWCHYVFeavDmDgqXqxwBLr74K2rUBDcvz4WPM87ZiQbTucvX38RLSePo",
  "key9": "22Yyr5cbyfpkJhMkYixctK1wt5Y1vUD6N56F48iAZddBHeGj5eJVKqp7d6HWcxgwos1MwZTtatLGwXuq2nbi6JX1",
  "key10": "36CEoFWA1Wg57KGEEtkcYKTtjcwLG1Ec3DmjCcpApKbTW46hYBW28cGcVG6B1fjE7WYT33zkGy1LPo8dmNxCxnXe",
  "key11": "3JCYmLHVg8wnBuVPR2C6wYVCdhNqyMdkz4iRg4Ekqiy5aAnyQnnhBwsBL3vmSBkK6QPKdmnyCZR5oHs4wjC5x2Pv",
  "key12": "2jrWAZtnjVna62afgQPKcrFhrv7DCXbGdWoikSdxsWe2QKzYb9a1i97Nov9igccSycUY5JsUie98KuFGHaFuiF4f",
  "key13": "f2Fbb3p1ww1MAK9c81TABg3TEaMzuqYrQpwDcFrxN7Gs4cZ9hTBkGXddLvuDQKtNCC9YQb8srMrM8nKQGTPbRFK",
  "key14": "3AgVLjA1ddqXZMp1qXMEQVcpCgbRPhAmA2oHxtxpSTVzjAmPEDDcu6C4P2eFED3vHTDWBN15pMggK9ySvBJ22yDg",
  "key15": "2ex4WBa7Ttgg1r63APMUbhMfCBPXTRH8os3dvKpBwXMtXx57akzSuYiFAhLBe2xcasA1ZWtDrPvLeRc6mUbejqP6",
  "key16": "4raTdhu18Ac6Wuf9U981LtDsux5mZsKywdtUXwKQhZLxpobWvPfQqQrnViqiLaW3gYCXjp3FXdiqjh4u8eavExJs",
  "key17": "5wRxq9AeMyjRQ9Vbuy2GqQjZj8AM7H5vMFHFJuFeYdEo291h12gGKa62DmMvUyyFC1RJaoz1CGpkpkuyExybiVxw",
  "key18": "YPN78MTRfoyLufwjWDaqMXzwZpxm3oAbMucrCraLt6w4KjFh1jn4PzGBxmePgNzpp9AzFf3TrvzHGvNh9832p7j",
  "key19": "5dZ5RoZaQv8g8yEDbuxwvtdnMU4Vu3XkpgL7caU4ysT4FzVUkaXN8cnbXcQJxnLx6LteEWToroj45jhFF1stBT34",
  "key20": "2CMfQdgKDpU1C1gf545FH1s6xB7awzDB8GqD486DvEMZEd55eBtuk3htRd1h2AxymKBwtsy6SS2N7LswEnPjjz8C",
  "key21": "7xfvzD2wmSc4Z5e8HoaGsKAkwHDKyAWmvNopTekT9Yd2FG5SJh9SKjPTWmCzt3c6BAmp418DL8C9N7EkVXv1bNG",
  "key22": "59sTaRGD6QsT57jq9G6Sb3TmnihdguBHyYv1SyqhvS4DDiiV2YUn2ZRw7sppYprSx8X2Risz6a11cNbsTXmtcMLU",
  "key23": "5z4hDZSRE5MuuyQstgdWsmKf36Bm1wdkJYKtdPgxDKdRWawYWwX4K6jBQ5vsnpXuWfaiPRDR7yUdVDyifTV1anYF",
  "key24": "395Erkk6idnhNDk7SDYibrER9WPViTWHupkE8MSwv9m87EouQJqE2iAvd5gD9yVczjgCunuLnUYtobWfuoBpSZph",
  "key25": "51npfXQ59eE3juArhZ35yssKpdgLi9iKDV3wA2a7mFQJZpxqaTHZ2foM21KyKtk24ZX9r5d54c1vgjUv367hPYdH",
  "key26": "3mJw5aZhDgZSz5FD9SwqRV5YdG6hi9pAthHyMRq6W8zsQaJZVEG3ijJenX882FxUXUmWj9QbYR7jLNWgKPfpeJnU",
  "key27": "2qD78sme86zzifRu6tfku9eUXP6dfH856xTYFf1MR8g1XZXTdNRK2UNNsu9q9v43g7XVA3cMRsfCrWJG4KkiGKPA",
  "key28": "5WURAGWvgtJr4R8e2HKN7thSpS3L2oVf3Hnw2oqUkcUhVmuaY6DK8AjeMK2cE5ZPdmr7ZQLD5ebHbzztU1vxJxwD",
  "key29": "5Eb6XDEiBd3qufkxNHcjKuEu3A3kgPMSRnZPYvz3VQA4sDC2SwFqswpzWrUGvGyqVSFZLA2aVYfuiCufoqAgYJxY",
  "key30": "1oEtUMRby961DgxadsQUxrpQuSGxudRPSiAUz9nXbGEtUUKmDKhyusxU6Ge4RWDJuTBEmqvAmy7SbqmxQmfWHh5",
  "key31": "57G3ie1xdheKuD1YoaXcjLvLnk4mudzphUfg1YHfvdDpsKjwuY289oFuHgzWnQAkUHLdL73Nwpci78FLfD5L69eh",
  "key32": "2ercD8zNaG1SesvCDxBsunDx2KgxH4e5PDQSTSR8wsETotMhUJhkN7zaeXhYFmxBPZu32werbe5ejvxkcS2etzpd"
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
