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
    "sGFNAdrkAfeRA1ForYC8Qb7V2v7DAzm4vxYZRDXwkJiEPgPFkyaWBcxmhGkGxmzD7NFQVbjfBX1VQPXu1nmpdBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rs5zZ5Y1w4n9GbvPcnAR9wSHrVyDaswnSZHmPSizDeXjxSpE3joQQ1i2NydsUioPK6nhLnuKDgvA53YJbccp3JL",
  "key1": "5KNotA4Q14Y6Sm5AjfS7HDegErtZbo1PYShKFMWprR2ZzqU5rJZZXQqebMMnE2kDvujH5UYpaiA5tPxFxiLZH5t8",
  "key2": "5hE14JftwT1ZKY3xhAmvwFcqCkYgTGRpeG65p1Aud8My1GZAqg1Nn2VDPazug6CrAk6dXMUzZ3YQabLFvkxNRnzT",
  "key3": "4e5HT7KXNoAFLHJVxCXZmLNbtZojQoK6ho6SBpo4sDbEMgTc3F89xpRxzYXfGJV4srVqtKPE8nkfWAzXwVaUaW2o",
  "key4": "5tSSpTZa7VgiQmsKze6KJkxza5QHThkUMicbhD2exyXojCzAZeqMAGah6Xagbv4vV4sg1atcHMzQy6enK733jB3Q",
  "key5": "4bHUmALsa89S5ciKzNJGSskffzXcjn9LxnaEZu8zAoATmbfJb3BmaYRhm8JzW4pEw2pqepVoPi8bFCgthfGdu75y",
  "key6": "2kYbX4KmFQsavaiV1vw84s2wW29skvnL2tY8WcThYpeaXFH9i99fnL77ZbfWUJKGtjzzW8MsJ17i52PE132hkdgq",
  "key7": "5nCcVxabBHS7tAN7djhbkSUdkwchNgeoLB4h76fAtZn2ihZmiGWGk8ufnHNJxgo336UKVjG7PtKkrH7Z6c9T39Gi",
  "key8": "3qqPVKCa2DJ9uogZ5KFR4YdQ7R1aCnVvrxArDiriAgBNHcHcWqJiMnGUk1pZMaWjhjeG8itsr5ukqLYTSo5EnGxJ",
  "key9": "5er1n31xvCJSfQW2pGtSqPGChZTugjC59cYdWdDShrBehxM3Tz76SMYGKhrjtqMhs4xCj8HUZyrehBPWqW9a2gQ1",
  "key10": "4Eotw9eKdbJg32iUDKWhXeMzkb4wxptPbmFoKRYfPDZDgRajDDcQ6CvCArXd2AHYcSHzpZMLz9Ers2g5yCnHPnbj",
  "key11": "59R3oPGG7c5sjgpQCEmXXthXde6XbYjcjpeu9CUp3m2UGq22UBWnW2qAJVYFA5nPnsUFNGkPKEMP89efBhQv259W",
  "key12": "2JhaohA7yLHevRCuAUGhHC1CAT4RGPy9BdNg3fjEUJSLatEcMEyJHFBAUXHv1A3QCgJ9pemEQBKarnWY3dFcopDW",
  "key13": "3EchgYzxSitDzzi3AEkn5ubNiZriMjfe1naCMvUBLgoFu2JCCw9iqZ3aRcoNYBeoSAyxgWZDhh1ehcMxHVg8fgC9",
  "key14": "3WaMYoWYPxiPboF8yWYuXbj4VLSRqUZ31HgeuicjMyRmN4htyeN3wQXySKqmhak9zPsYMCGLwGnFfqScrqdZtarX",
  "key15": "3rAr72keyL74rG8Ywi63vPnkzu6uBUyaNxirAM9NJFCzBFbvJcefhZzoGP8RjGcdbgWEWY5FV1UEyouLfYcqJrLK",
  "key16": "3jPujNNkYRhiyV2efSGgWQrH3pn6vNrLgWGTMca6ic1YfsFA9KzqLpyxdxgFHA1G3PQXPPaCRbxj1rDSvXcsGkSi",
  "key17": "3RswP1gphK3nQ3aGRpJAaj7GXUHa3dP6bWmJ3QZxbhTrC4BoQHjd6t5Xp3t5WF4qF8VXfSVcv5J4hmZcHNHGURXz",
  "key18": "34JKd4Lxoo9GKZYk3CwmxzLFgszseiP4GT5g56TV2PW32XbeyBzHBWEB45NX8p1Zx2Zq2SQSAG9JSYmk7DYAmy34",
  "key19": "3CkPtGEtASwHUC3sXACd49pgg4qAHGJECv57uKvJd1RgBQumgAw6Q2KFZfwwe44L2jFr3bVPVKKkX6TVv7VxRvnp",
  "key20": "3fTGHy5dp4R5CJ11KTsttgbAgB7CrPTELt2RiJJ7bVnMR5mZX7DU5ZB8g5g6QsABttxwfra7WUqHYi9e3i2JX2xg",
  "key21": "5P76DBSm6gJNrZr1dHiQRwhGicQzPEJ79BgPJqhRMj2AHwiRBfqPeJWzkSk524tTLgbPUc6jADvgVhx81fpj55nX",
  "key22": "3TtfUWDwkBUp1S92q5fYs2M99KCN7C1JHukZzvMVYocRqwCLFiJjXusNwtfFXiRGYKCTdUU5AdzeStiGshKjm6YJ",
  "key23": "QA6FSp7g2CipmS9m1MkmpK6X6eoWqorqwapvbT22mZTxnCjQ5MWMPbCXMcQyFpBvs5hSXSC7rj4oWGXj4mhn1bw",
  "key24": "4oN5TFZ8RUsb9UnZNx1omGamBPTGsqf9mU28TtBEjCkB3Nt1VMrY2TJjVgadvoShMUpLWoZMqUiBiMrD1jjYWSRU",
  "key25": "aw4mdiQdiLW8D8vQbx31oN5Zmzw73QRyj4PdsByLhURCXkqZQZnDLufeRKfXt49Hv6uD6WK9EAybzGh1zMy3PQN",
  "key26": "2xe8s7kgpUF5ekUDgnWdebpNK1gY9tsq97RAuX9TjByDBE9PdVdAzKNsVNvTycKynfMjhTCV3GbZoWpVH7gpkAJU",
  "key27": "2PLuDkPmuw3JFLZxpQ9vFdzS71MX8Sh6995oyGoAqLaaxhXsPLXyvxsm9ULgGEUF28GzAXKzwgzz5BVUtEs19A7h",
  "key28": "5Ahfdxjp8p9Wj8UfeXqfBK4c9uprDw9nZuASSaFhZi8Yyr3XJZkhwxFPSndnzSNf5TYfhXpGnHKcNLAUTTfcXoB2",
  "key29": "5GEkTJ83dmt7xXeuaBiUrRvHgBtmJSeFxG74XUwDK9FRwKeixTtRthuKT8BAL2va1AJ7A8pfTjUAvhTA2xZoR64z",
  "key30": "66WQpqiduHA5H5KVnJQLSRJ7K4yZQnvks87Y1YjJEv3KHnD5yQ2FdxBond4FYxJdh5mNgzw7F12XxtMe6GwrNdpb",
  "key31": "3uQyuxxtf4otsxdqAYgvThjaY2YB1QPFbWAKwS6Y9R1ZMZE4MXvV7TnmUh8XNJBQHcSRaM7f6zPKYEH7PyVrhVSM",
  "key32": "4tMNYTauez2xiMWc1BdGgGRS7aNDvRiYwecTsBRLrDfdAHfUyJ29n2HVG6aMpw9bge7M8hd9L16NqyStuP93ciTL",
  "key33": "33W8C2GRuzn9B4bdyyRNWdiJyn1HdVeBc8p7bC4kU8TbLpgiXZsoHn8jfUdu9v8NQXDWHpGodLaQFQZL3xLPkFpW",
  "key34": "2EV1QP51xraYaZV6JpsrhLhcTu4ZEND5zbS2oJaWwxiecNAt4zT6AyBL6ipKEjhSX742FBgug3aKMBoXEoMQ8Lsq",
  "key35": "YgtFoadSZXEnaG9fx7HLjrLqdGjMBW6dMxcxuZsFxY67NVQTREfv1pbkkzV6KV1zATFmojMNnUAuhUkZJ7eP7Wa",
  "key36": "2bUkCrxmB5oBJkEkZzaMwH7zXEK7PbnM39e25zSwgQ6DHaJ9yum35T9E28ceUJna5FXxzpX3zpZMwHMAUGNnSeRF",
  "key37": "5RBSHARLsDJVCSxYf8Cxs6pfhfn7A3yERZNYPUUnF9rxhHvQdVdkrzFqyKaEHoX8WKGSgjVuMJSmVCMj49LD47Qt"
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
