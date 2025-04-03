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
    "4duQdz6e3Qh4DxUBm7Z19Un294Xyqq3RQwRkJGT7RtEdZbN6ZJwcUbwZJaxBQGphNMVgN7ngMfn2cJoNhrVKDFoz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5grW5r5J8Yj4Wum84enW9aVmy9syNT5XYcHmFXBUAesLiDSJRSzX57MRsxp8qayCi7xkc4AwhyUmgpqeyPv1kUQg",
  "key1": "3qJqW1hyQh6ZRPsFaeiYRLieh6zJV1Ne9FArZFvxkLrfRHnkimEqxLhMenEvZo7KKXg1NkKMPQU6zZBVBtUFkWFB",
  "key2": "51ZjxiauDWkiAWYKgdX6ViJt4976Zxhtyt1nYMdHo2uaoaFqvY5cVc2xjpYVLbj7bSDvtLzKtqp36qAXN9rEDRzG",
  "key3": "4VTJXaFupSsgkhFtSbvUWFVKAXw7abaHvhT5Mam5tV716L8rC2MRfTVuL3C4nWs4zqhfzzbGwk8S6rEPPLYAZdfK",
  "key4": "8HAAS9AFu1ZbRRSAf3B47n9q6zQ7vA7wZe45EB2DXSrVz5BeL1T48vgZe7yCZ9rS4K4SXFUr7JH9fwTZtTNikaJ",
  "key5": "4ihoGAjxYkw46hoVC8tGiDc52TVAWLa6mSKRuqM2teUsYzmLavWGp3ws2cccPqstBoB8nihGaiMN1pytebiNzCj8",
  "key6": "4MjxB4jeajAHT1CfVQiigLZtUaALd9XkzEHuuHeATKVkNNxnEx9a6sHEb654CK2ns289PdFZdYF2xdNqLg9eUpPD",
  "key7": "65hx16iBAChqFPGQxwyN2hGEoC9PXabo5KPbuBZbEC7sasyT5mXZL3eiRMNx2Kq9Ypd9QTBDrq1eTREc1vtQ5Bxb",
  "key8": "2QyfaQ5jwPWz7RKo7jxGdoZru2vciXwSAmVBL8nXfKPqBLu3JeXZwjsaGtEbmNtYhwjGtVeFCdkfZnacjnUs1FEb",
  "key9": "4WRbesEhTNGj2i9aQdX8qFkug2T47MLErN6WvvyNSAeKsZwP9263NJpT1DzjuMNVcLaevn6HThxqWoyqxsTxQ3Jv",
  "key10": "2fH4Hy8muAZ2d7LtPUHPPKyFG5hBvQTDpxDdHyEHJZN76p1FK1PgZsji9hb8SccvEhwkexd9XptEbQd82Y6wd1KY",
  "key11": "3tKC6StZ5RZGHhT228aEZbnn1FiVVycd94pH1rTXtep3MubW5tgJgsVqMuxYFWcjBLufToxFhFxgbjyr77sCa7gf",
  "key12": "4iSohnZqK8yYet6f4fDgMdYJ19uT514366XPbz9vwzCuWAhzK8rnmERNv27PPrkRHS9EkttM24secKWf9W13Mrdu",
  "key13": "xoWY79GBMs3VQrcBzbDUBtY4hy6YnxeEX8svJbZDjz2Nis2hJV6Ffs4jo8CEdzo2KggLcDJoTfn1vAvJFx5Qe33",
  "key14": "3A9Ym2ry9kqKASFFweuNZibRCnatrB3DUhBaRpSoKAfDkib3z4LbbR4ZW4t9izE9uewbgoqoKhqSDTT4MaNsk1PC",
  "key15": "5RX9EJD3F4nKN7YjxQ2iL73p4DagArpkGQXYXyN62cVdeFk5Tp16RS4SM57rf8ePd5UVegk2YRLDqmuAXQ7QxhE5",
  "key16": "4dU7psysxtqs4WZKsFqQcNBQSgqJFCmVUcjfoAxmhUM2pie8X66SbuPQgLxv1QbUazYQRaDHm6kmv77Cqvr5UBKK",
  "key17": "2jcaGHPNGTCisCN2bGuUzUBDJ296WZqHQDa312BoL9iYw3vDwEFNkRBSMX2cpfsiobxcic2wbF3ny7GGHLwv3KwK",
  "key18": "2nRtupFzsmqk4x8nmffAMTQY6gcRY7Qzw6WTxxbuGEp9qMQBKhwn7vVkmwyq3cFF68P81Rd8zpVfTF7EJkbxcQ7d",
  "key19": "4wRiAx5mnKPVF6qgirwX74fLXtWxuN9VS5tXxq8NpM8xPyEvvrEF6yvM1rGnC5bUi5YXJ2FrXayZXd59hRBx4a8K",
  "key20": "33RdnJXRn51deQe1Jcc2kCDQKZi2BYeDyA8yMN7D86wiYjeVijJ6mT2pLaU8QXjYEjphimWUWV4BVpWpPKRef6DJ",
  "key21": "46vM7tixEWoegyBeozzri2TRXKv7seer2NLFJU7qnp3dggkW4jh9sAQJ9ZiF1tTanP4sXn6PiqjvKxZSj1iDC8nD",
  "key22": "4LkUvdDyU38KYMqwTPm3SxRUqZG42gEuUVwcbw4gT6RoRKPWUGrYpgXrABmF1iRGRaPHxc7u9ESTJRtajSDh9jct",
  "key23": "5LHNnEkemJL5vPs8MHkeSkrZB59NvvwdQBDD9ZFqAjDSEiMUKe4b2iheUcjKaEzxBDuqv3cCon1aRQ72AiJiLo4P",
  "key24": "4Y4bF8NMr8VE5sGaszwissp55WVvhNgRJrMStvy8HkDWJR1yUQhvXwpnxF3HgYA7j7Aqjy2FaNXhBW2ezxmWbiY8",
  "key25": "5ukby69vBNhJXx86JgMBqCu7WjvM76B6G45su34hGiwoEkJS3xiD9DS38JvUWvaGgPqgh7s2uPAFQRVr2FeWPxS4",
  "key26": "3XJ86kbpDr7A4CvS63AiQA47tY4wRPCwPh2f9bwaY9QCgepf1CcT76cKVqityMH6f2hJ84g75eCVD611A6kPKQdw",
  "key27": "2CQT5kD8aPkuwLX4qPf4JLhdoCUiLWTq7GVRmsJ5ZY64uroHgHoEojbKbNbMYtaDdaQ33YQFUDq6mP2D7ZaqE8ca",
  "key28": "47Unq7VphoUq4HzGgBMoefWCSqykq2mmA7PQKQz4XEpQSR1RhsK8Zsg8AgRmfmn3ZF5ypD67kHZCmKj94qqPkiCE",
  "key29": "KRBWEFnuqDRZci9LWrZjkdnn6urXXengeGun3NkNbPkxXC2uLgN4ZCL59jYTbNzp6GWLAw6WStWqoZeTGtGPgBt",
  "key30": "3TZB3P6F4mnjNborVtFwkXBRgkYznbn6KdaLa8W3pTnR8QrJrPVcJo6LkvhBnDsmh9nzNBRxMRsAKFGsmfSoPiC1",
  "key31": "5qd27mqxDsCriHtp3Ux7oS3bQjH2k1Eeahe1wgNhC66idfuzQer8zygGM73bTF1HjB6Fg6q8dAFw9UAAtPSTeESQ",
  "key32": "5BWujeA3YjprS7jwCzLCQjsHjT6rC4ihFGKEjj3JZPhDjGV8t9gSH4gxqpkMpAgjC6LhmuCgTJXvfaMsLuKNN6L5",
  "key33": "4fsH1xG1xYoJwAT2wC2M1rPboR227dC42XrXkacsEuoZur3MHDPEzzX85wdb8cUe5CYDa6u72QjG7TZjzySeqqVp",
  "key34": "3K1smegSX8q6zt4reE2uctBrADnuJqkiECYz1oLjUBYXYE8USZF4KbDS4bqVZhxc42CE5VSYKvEMNccpqUZ5oy3y",
  "key35": "36TV9Dd8S3TUCfd7gf1t5RzZojZ9XFnPY9EyKJGQtALUdfKdsdmtwt8eFnzFxWVzoXWD1X2JMvWTK5Amo2Fupqn8",
  "key36": "5xg58kdPsk9hU5cinQkZjprBxR1kSDN3wKtwjv2qV4S1mcV41j6jn3ucr63YpCJXRv1gcnv6G7vCniGcqTWYRU6C",
  "key37": "3kKAKbXwrfZ79QCfokeS1Bk6if7bsmMZoux6QrJPELpgEURmBzgJE7hv2ZTtcb5szMmbXxGD6qJP4qS3aNrF6GF9",
  "key38": "mjLXLMn7qtsgrVajA61WACn3MY4wQZXY6k5FGE3ZjQo4PiX5k91C7QGWrCwP1B6mjcmD9RTAh1WkXn6H7V4Ge2q",
  "key39": "31YUepcbJhv5t8iLd75Sy6orFwGyGXM9prKi5DDhWcPiec8TJAqfpu74R2ud7KxhJWhW5h4FdJBX9Nhdjw74PqzL",
  "key40": "2xt1J8eacaTEmzx7He9d9eESUPM2RBTETFPtoS36TBTaWrWEr3zMeCCv2RteY2a42dQmxTEARu9nKnxVFcC4H57R"
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
