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
    "2fzgiCkPkn6hDBUAS8bn86BoidT8yupNYj8KCknfoqasWfU7YAXXKGmWLbbNLLaUYwCPkx1SLyothPt8QSaFb3o9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41j5yWo2MWojE8e9WV7deRV91wt8gnqARwYdBzBXHWyLhHaz525EujSYtHFnQeiva7RTyAQZKqX9Q56Johb8nDNd",
  "key1": "5pP7q1VLtZsVHZ43fCZxknrLxBWKp7gar6KCGiUFAGp8Ny7Zsz5xMrwENU581kgqQMRFza3bQSLG8qXEve3YXV9v",
  "key2": "62QjVJhPrTHieiGGaxaUeTzFRyDKzsVDHdhnuWekRv6q8QGJ2jPFmbnqvKdPVkp6kBue4jeWSVZhqrX5TZTFuZb5",
  "key3": "4rqZNwfaX5mvQLvKRtHi3EvLEeKfMnR18m6qKTsw8ezPZVKjPKeWcMKf5PfvQmQT3LuPdLkMoLuRK9ZJhwHhV8hu",
  "key4": "5Mwvcww8xmzRPZvHPzP4SY18tK4k7ASEnyBgWhuumtv8ro2x1yQFrxg8RVCbWVh9qtuueQHZAHon5VqjUaAakVkP",
  "key5": "3kKCjyH8SZNJh8wa949iuVWW7Zy63dG2xCVrtiwyjr1HNAZq3fLM5zXQWcxBxdHBvG5cxnQ1oFp2Dxw3uQoqacrg",
  "key6": "56SqTHb5KbZoR2TTiJAoWZnviYsPb2SJ9wTKvW9Mn9vXdmfyxJgozqsvE6qgiqxzoyC14Lxtj7ZVkQimCP8VgLnK",
  "key7": "4uBUNdSzM34tqLLP79wyckPJnYNkycCSuHXuVWDbw6qvokUxMDUpxCgG67jFFH2BJnreQ1TgkXLYmAsyyzJ5UTDQ",
  "key8": "4Vt4GTNAE9fn543H5qXb9JfnkXTvCuRYp57SYsQSeS57EiX5kdG7mSjLNvvkc2XwnAwbUXNkTzC3T9uYEHxZNRoq",
  "key9": "5rtdtyAZZUUYeLjv9NQxG9Qx166HuBoKH2nsRWoP4ZYtbffDgYLYogVDUYfp8areCAAms6qNWXsDnT7GZK8KJwnY",
  "key10": "4sy8yQFp1L1jGR14whGMQ1Xc8XLD5EUWcfd2eVJAR1n93eeB6YFfXEvJaS3VEDaQvV8F8uzT9VwKMeeDGRc2aJbA",
  "key11": "82fx1vb1MEos7GFtmyGFDjZhc5Q7QeVLc6YNRywprorcLZTYjDQT5uAga2ukRF86CwuV6x1Nv3YqanCAsX3WEMJ",
  "key12": "CjfLX2FTGZoatjnrZEW3pkUfyDNFm7ga3P6QjnxXUTJavsMLEG6joaaDdGj5GanTWL1Nw9KuepTzM8rQ5uE88Zh",
  "key13": "5GbaSaqtTMZQnNEJ1Ummfy5ddzrCbuRyWTqusfvpxzWKYiMfkiLzaRt4vStKRCGtxjvQjeaFBPSBkB4EQKQDEyUw",
  "key14": "2skPb8hGFeLpmLDbm9kieE6dXx5B9eymq7bEbGRmk7ARDMoRPFiJ1SeT7z3eR2gpFSnEWvYYWyvBuZVxLjybntZC",
  "key15": "JHvr75kYnGwY6TTX1K7L2gNvYtDZym9tejyu9pwRcpriJzZbxgst3LtwCVmb5B4ASSpB8y8LNWbSx9ASgGABcNr",
  "key16": "33UeFwoSf7GiDNTcUaMQ7V3FuzXRp25p3pFqUzRTFmZXoenDFfSVkCHktLVfd5ZnHN7aRUKizPHuumwhzR3DX4ha",
  "key17": "5RBdwqyuzTAcz1m9rYdG6J4b4haj4MF5mfwPyE6RyFEWRdMdoKNnh3Y8ADCKtm5NFiHHKSEKSU8cqExmdbMupUba",
  "key18": "4sTS8V6z1VteTesa7a92xgvzjDcEsFKGJ9PKYXkBP7ahGEwNGo15k2zGG4NQwiPqLrsKF3P7vC6oDARMyTzKhcwQ",
  "key19": "3DqKU9cztJe3mfpGnRBjCdikLgeKQ7Gbn1DRFQJFtczf5wume4BzXjaFGm6CBw7PJ5r7ZmQEkFiRR9owuEsVzukR",
  "key20": "vTeuoF25t7K9tsSZp2Hzsw9MCgZX2ZEiCvVqHnRGdcaSv4jNBBZDtyRdTmueWQxkzosdNV9X8K5c4zzdTC1wPoC",
  "key21": "V6hcqkSuJ69mPYvm5pGVC5jmpNpMsrHUKP8QTzuDG2JXQ9565bSL1xGizrkjG3wzSU297J4grmrFkYS9SBbY25f",
  "key22": "VTzo3Y6DPRn6yidJ6yLNHuWDyE4ztS7KHkdo7sAhbyoGS1oJ28A2Y1M5HD19Y2hNdhNK96eio2JoEMMVLNseH5p",
  "key23": "2UwMb3bNXungYfZJNFNrALHiora9Q1CMvH9j1qoVrvFzqnfTaLnRApUnn6YWEzGQmx7HgbAEWeDV6K6UzL7J5RFc",
  "key24": "3aWQmREKZKwvVDKQEFtmKpuwjC6y366FKWK2sKu8Doh3J3MSPF7V8JimEij7gZsYzRBiTeb1y3wBEHWSzKAGiPMv",
  "key25": "3NspFAPs6XW1Y5BwyTzfyVCjdGXWW5ebaXwc7Lks1nFCnLgJdHewWDFKzcDtX6LUi2cmkfQJNnrMsKW56AqUJQxC",
  "key26": "DnMFmf8srQpfwkz2NfL8tMSxMsJV9SxuncKDYYCcN2q9taFVuvnTKGTBun5mARQHEj6MMuwoxtq82ve3EiCUN2u",
  "key27": "C1Tjgzgro41YXCbWyyp8oqVYxB7P6SfEwSvpnuWFbnaR6MZAACRUUnsHZMeix6HmfbKn9QWqLqBmmzJXTR7eATy",
  "key28": "2GEbQvDbLWgnd5AEYeQpXc6vb39GHQ64fkdHuRzvHzjDrTB3SbQaa8UUiaYYzBEL2x7Hj7sD7MWQC5ngnedd2VJn",
  "key29": "5Kxk1RXUqEh2ReDqaAEqpMFMQnUvkxpUAbSSBoWY7wuvLfiQjTEk3DErAnsZn2wrinqRVhMSMKaE2jZAdcyGkyFN",
  "key30": "5hyvg2mGpvTcs4fQFXH1UVScK3mhPpgXaS1wagc1m2pVnppo3CvQV18kXW6BzqgfDKCgYS2Xz5Tt62iYZ7ddybUs",
  "key31": "YhQGGoGbVasTEkZ2qjTAykQ3csUmqdripqVuMwdF3KBSkSzChDXb3rm49BaM9cYpyoj2BRXaUToEJdLhLxVTygm",
  "key32": "4Z581oGszEYKYrzMihsn1DTB72YWZBSK2Yy7DMe5aWNzQEwxefaKKG5dtCUSiKWrzd1CFWHRFsrD5kCiydxtLsm7",
  "key33": "3zmXj9jdHjGEcqVDqbrjHKVhMxhN8vu5SxYf52KXvTqT8YMmgYzivteabsjvUb1bwV5GRLnuLocGGGmFo72nvic9",
  "key34": "2P94GRvUbKurxzLHVjVZEDuHwHkKdJnwNob17KPqAvpBKdnzUwd9Qevty8uP3K5v3wB5f6cWPX5km1MDtvUUizUi",
  "key35": "5xVRdo55aPrZ43ux8U2rzFXXVvpF5zgy17mAQZu4qodSN1pYhVaaCSxPd3m4wX9QYjXKiZyY1Dde2d7Kuxm5vP4G",
  "key36": "5b93rnhsEMXNMinbtMxGUB3f7wkZAb556eTX5xtPciQZtUr56XcVYLGivSuP6qQBjoa6GLXJf9ZXYQJNTZL3QS2Y",
  "key37": "2Q7qbpwvLezzaidoUZn8xpQVWXitJhKb1XnTQoMdiQ4gDagnVGwzgNXHnErouFLpJqS5DseGe86ZVgeiT28wSerK",
  "key38": "5ZoVrJnsgGLSDH41L2xiAkoMegEf24MbHdEusLSDE44BpCFYCfdcHVZPdPrPNNLpoutQ5cZGGpFBUwAWWY9TidZ",
  "key39": "3WiiApfsjNTm4CGmpx45zjjuQccBPm8SJXpp6mH7WgTx24PcT9JA8dFaycB6d2gxXeeptcLZoxzNzMFLJD5gSQDy",
  "key40": "5GgDYrabRkYjyWgxndCseGgY3b5vffAJ6RXyTyyBkHFH6ima1bHSedLUibU1AfyCy7guhdjcwNo1uwAz8vwNg4gL"
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
