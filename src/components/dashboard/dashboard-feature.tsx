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
    "27gorUZfNNeuxNgb7tGmZmjJtJB9nFHQzwukgpijszVzhiHjpgMKbbf8w1r3DbzWXpfP2gqGs7db7nPEMdXroyZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NaKuURDSrvLoAC9iQJ9KWxLGgtLNqFJT3HUHk5SLiE9LC1VbjVzBiCXnjgi9TYQwEjhPEKWTy68WZFVF4UqU8NV",
  "key1": "4Zi5UTiQqgzJ3nZNciCFUuPtTfdVpwMrsdKBXdDZak1TB959SkU4rewMFexsJ7HayQdnyTfnKqu48jFLivw2kPpa",
  "key2": "2xHs8KWCyFB9vH5nmJPfwBcJ7kaoTmX1rXdmvmqZLiU3g3cxvmxyaistxSbkhhw6hxN275SzzrG6yRQ8X1UXvbei",
  "key3": "2MoUPEEXXwTWPge2EpbWPtdsDK986RRAnCA1B9RfM6mL86nEv8ooURo7y6b7oqSiiDiv8Jfih3VrZqJrQyJc7pZo",
  "key4": "3Lhi98j9Z8R29HUsT2mtW3CKYiipvFZ5sN1mPbhBY6vt32fShbXbLatu4AJRTKwDDmz59ZbrVQWghrsAzzY7x3Xc",
  "key5": "5FKacgVNDxNwFuxi7Vtbjrn8Tz7akAupxSN7Qp7LZocz2aff4fAvDHWFxanGKfxQWHo1hRTY5Kd5BERfnVKCg6x4",
  "key6": "5TxLwUDDnDUp1TM1osQNtAMLhzjycE5K3NyhbL5BNEPNWzhPjkkxx1eyVNmeHN19xN1yBHNM8nuY5PwJWoZgDRXo",
  "key7": "3wBKbrAvdBZveqmLbbzbP1suVnJkyGYppXZDn7jxuSM1Dgu35wWXT65w32sFzwdAqexashgGUdTDu58EeGaFBeoK",
  "key8": "3o56EViwiMziSRneLz9mp8FTJUA6sLmPFmpLAqWMmvDADuytWQFB9NBBw7W6W6hj6GjRXAsmSx3oFhtQr2zJevng",
  "key9": "UJgRunLEhgZurQ3d9eEd2Wb2ENAJ8LUEn1XshUfh719oqee7Yu1E7FbbDtkNczbakYr2ZptFpxAuLRfJ1snhSEt",
  "key10": "4Hrxm7Dxvan9ce82qpQB2qkyARRtWMoKjwqhtHoBsrTxfxJPVSLqXYFBHkJvvAXRqvLdFZaXim3kut71y34vsZJW",
  "key11": "4zybZhXszzuCHSLGNJGGy92hr41v5S1q3YVC5sSieD3VWqM2ZMak3pRKLF7kiHJf7MTTdAeYrVzQHT8v5W91no8T",
  "key12": "5huGN7D4hw81q8CWbNHR2VP6AHKhdtLLmSZwtKdwJS2KyD42mncENMZVRiYZkgyzagGtenqZ1foyenXwuagWGiNs",
  "key13": "4ef9ieLf5XoYGiC2w6k9CtS3QjRFLCcyeXJQUq5xzQo3v8og52th5oxAsHHqQKeBgLLnpTAuMYCereSfEUjzwWLE",
  "key14": "2Jf2vFF6QRHQ3zGmPJrbxi6GvxUwsTYhsLq3wYkuG6yVjSr5wiPYBcEta5evtTbdPYjWHqDvkxyVTU3p5eb15BUQ",
  "key15": "3dbfdoUBeKNy9u5PfBCXSNv5CihtSBUMczPMQ86S4GWpNfUig5qpoyavSUjSDRDMx8HCvXkwYJRgHKUNwnyUrVxB",
  "key16": "4KajmiqB4zK6vtALig4cWp1h8moHnqFB6X2iFpMfc2ZvnaLHhWzdAy4DXzkQbDcZg26M37QwHcbkuKaxhGXtUCgs",
  "key17": "2LhjDoeZRRcaGJ87PjCnHWJmLUi81vr9qMXuvBLWuujCp55C86jXQ8SX4H6jTxgYUH97CYcJ9RPZUicmUVJUBhQ7",
  "key18": "2BhH2c7zCZveaeWiMJGzKs76k4FiefbpNWmXzM7P1sAAM8fstbD3uUrTy7aKYeLkdUWNBQNWr93YKEiKXU9sNmFu",
  "key19": "5y3voYYdWwkDgB3WT5pxPxYq4BqMh9srFREqXm63cNYVRbGLF5FXjXypxGHL2bvV67QENHpLiyHyyDtigzjrYsR8",
  "key20": "4FwjcajaDpVQf1KtJJnbhr6kmrtLKQhcq6ncU2MfcK7SacGq1ME2UqBUTXjHL93gX97rA9caKhkvJWyuASvy7dzm",
  "key21": "3ywBvH1NTDVYkcmnCQGRuRGr7Vgrok3xYh6JAccU2VvyBoTAXRw7hqpq9Cw6epT56c43qisiLw7ia1mdiihMEMi2",
  "key22": "4jPEupFKjmKFgtp7Dc6F6gaKRwbYka1FEiumeBRCcWVxroJ2kAWkQLh6QK5uf1X7he8FAoKEJAcdnCoDEZozrotk",
  "key23": "4A8JpX5v7F43gJ3cv2E6AEn5yCsPEMeFwUCarfVEaqnJMSJqSckEcDsft8odEfZALjNbWrz6z4ZXwKysbvoCWrQp",
  "key24": "49JdSAqy2mUmPMAPEw1YcfLp7r3B965Sn5GbaNQf9vCvjHCGaU4QX263GHsAzhhKidKHGr6RfYSoxTESoxG4C4nP",
  "key25": "2ZP2zxs2Ch9Kr3uYJUuPVasNMqAGE29RuBoBeHrd4nBdAMXW3Jkf3cqqvHyELQhuMPvPmmB45YbhfsZ7n9bGZjQ8",
  "key26": "2KwVbG2cLDYVnckh55Vj14dEQhwTfydKaWy8iDkXxVy2eNxbiVkNGqpAxYuFsXEez5LRyt59SFiyQSYeBPzpdVcd",
  "key27": "54pWjfaHCYQt94P9yQr9Yg6JZfsm58DhTKkU3RkyyYEUGE9HLWE3SQZDb2PMQkw3kiCjnGeVTA13AprpeXjagGx7",
  "key28": "5ym95MBJBbQ51vsWmLJ6AZxfNmSMi3P9oeGLNaZHMLSA1HK3UpWHkF7BESKFRrk3SbxGtHTeqAE6dU3Wn1tJc95n",
  "key29": "3p3bhyPuzUNQKJeqSJ69jpYGHXCu4xiAnBsRXM7PckuA4eA3yifFmG2tqBJyQdxpYkQjTwaknoRAB7aBWxf6Q16j",
  "key30": "35buCbirQwz6cRxLDyFH3UFxTG2MNhKePzoXdneTLZcBz4HPX31Z3eYpdHp7MNRhMRPZenxNj4Dh6NXivyNioVMH",
  "key31": "5NemuidqQzvjm1RLRn6R82WkZCstttC3kaVq5Bu741PDz1nrPkneAKzh9SkD53m15qjrSSsw2YaGUehfjXgTSSKj",
  "key32": "tQJNrKKu4xXHWepGB6sf6HzYhamWQ3SQdLNsTw3PkaUspKaJ2ExzyabzAN437SySpgb5dHt1ixp5u1pi2YKgjfa",
  "key33": "3WfmgXe5uzUKKke97LTJnmndS6DzbMZvyKcVKRMiVKtQVLHXyLC1EdYSX3upo4XqMgL4KmMbMdW2LC4bd8oU6iMZ",
  "key34": "5PL7xSad5XQ5fPb6Ys48Si16BZ1LWtBZSMG98ZC2xVCCdH38W3z5y5pfMxzgk75QgTRX833zPqnrdTMVqWYPBjr5",
  "key35": "5cQnHnYha7vDmmDx35R2uxAmNLZXTsXaEF83cz5eidgiw4o8uiN75YxojXDmQkG5zqVCQAFtQC565D5m8iZHQxbg",
  "key36": "5thrQQipJehGJQKALxx7Vid7sHPdTAWHKKSAEjuDsDzPBGb7HDsKzSziQS9EjGhoiTBvSadFoR3BkVvmUXM79jDv",
  "key37": "2eoE83pYDUXhTKBb94K3vygWSfaxC2N8kbX5Swao2KE281JvsGcJSsMxxYS8f2z8hdi4kExiA6Sio9UQBJVyxBHr",
  "key38": "4VLDLiF7H6P8STmjrkyFjRAEZ9UsxTCTK9ZKSeemJUk5mNTaBJR3jfd32ZJb6AUn4uP26okWNAFcLdcLDA4YpY2i",
  "key39": "5XuY4aUzi8DsCoCuQ6LZZAjoRkmcg7yj5z5YsgBtWzzTKcRiN7mFGt4htkRwX6c4Ss7LauC94QGtTwsriXExMV6s",
  "key40": "2TPg4cEeDPadoHPmdY8BFFyL9Ah42b1GkT4E2wN9hpoc1XCNoPjYLNCfLxioVriA4UDyKBv3RP76DPeseor5Qbvo",
  "key41": "7YBEQL9iNcyFJAj8tvAUGpm4dwvDAa1ttX4q6MczZq12UqG82GB5TfPN7LEnyhmSM5Ye5EakCbwLUJLTDDMMJjm",
  "key42": "25e2rtFyA9ztdfdhF5PwbgFJEM8fa8CrAXys6ZRwiqC2xaaUgMbPe163AJSTe55ruuoiFWLvoTzFnAsLN21QGMgr",
  "key43": "63Ly13vrXADkcEETGw9GTp7EvebhdTJ6BZy9ugUepHmNJUGdCoMFDvEQzRnk5uX7YLLU4vybtLaBK7VW9tgUxaWv",
  "key44": "66UmEm1tByvEkG4qqvuLAJK5QF5hynLehFajGumK9cXBzZsHU657QQ6Lg91bvJ1yTY95487Uf45GE4eTULnzdFJT",
  "key45": "r5Lp6FrhRmnRyXhuPUsYXbvQWsRZvawrx2ywx4bg21M2jN9sQVFhpyUziz4ZS9EwvteQvb4rPQ3ZyWFdw7hYSXg",
  "key46": "2LNDPDA7Z6eyLEbP3mehEXAxSpDG4wCiQup6YZQmcEm6XA2sw52vReEZseQBUwhZbMmubi1rxAN8o48ft1zs5ZzC",
  "key47": "3SPRCXgd93uV9rrCD44oirRASobfxQAc4Y7FeyRanxaToxZhV9mr3tKwensGQzVqJxGVuA7EgD17HegHYgDd92d5"
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
