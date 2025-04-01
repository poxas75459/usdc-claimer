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
    "2vfNA4Tqe9QGyJBT8SG4m8eu1M4zHx9PtJwbUGwZJDuQCvUDtXarzSmec9DnkD966DeEegxAH1Kxy6FcpnPqMy3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bNzcbXPNyoTP81wV7aTfTehvbpoEHzR83o5XCL6S5qknGPbroLJ3hQiSQanrw6mriQqW8vASsMhCjtzA8QXbLJc",
  "key1": "2e6Jq4boii9EMXuA3tQ29fLGzvdFu9LGmg6BxkMGx2HaLi9ZgoKRDCnnhesn7gaqhuJBpRjCGxNpFr9LpFquAM5f",
  "key2": "2ntFugWJejpyMLER8qWptEgbJpeSC4At2aS7RktARRhzzdvbp5i5bVfyQsc81RRrfNXDsKrmxr9zuWFDBR7gPMyM",
  "key3": "34tAXV39bhsFuJ9WLC5iYKSi3Bsyb5YYyvs9njzY53eJuqp4HzuvSiKhEKHT7kP4G81z7ysSDVDuQvPi3ap4GYKT",
  "key4": "5wnzditGaS6T74yQKiVTxfWEWRMhJgnWizqCa14bKfDp5f24fWoa6C2hDYKMy3egPUUUi1yhXrAoPtqazoWdjyyj",
  "key5": "5znSHofRNxKmqNhcfJNdikxU1FXG8QZ89nazy1YpgzLw9zHxMZwNA9t51ecLmq3b26oPmp3YMXiHCGpLT7No8cfa",
  "key6": "2kvVk15KoukpktP2eyhcYL3EBEfHGSc4CsUToWJ8BQfvatjZsuHHj4cK7YoyEFrShAakru3eBS2C9ZT5PBpzC8h8",
  "key7": "2Rg8p9enHj77S4VZ8RwmyQpfkRwJWHtu4gsG7YTsEts9ZKiQr5Uk8ggWXA8RRWJTKtCaD9FoYDdp4CrFq71v1BSJ",
  "key8": "4ugGuRV4KLWRvkPsX98wvEUJyLtQtnQx2tajj1GgHNVXF1cDyCaLwqaZAXhbN6GktK6wbqyPGU4M36Xngt4wagAL",
  "key9": "2q3szCo1DQ587wcNh89Y9tChAiwtwNUWhCjQ8ENhxXameEf4Pjjj5NxMZG8FbPYXQdwde4JCah8usGjDTebZTi37",
  "key10": "3xWH4we6afy69rfq52QxJCPL6eHTTYk5q5RHKkbr7o2KerjDGFfRcdmdDEKUaXmT5wW9tLnKtZVsdZzNFamHBGnc",
  "key11": "Gjtb4VbhyriLtNGgxxvwNnaEEGXW4vfHT5zpcyEU264X9GQ3c1HCBoCSnBPjExSmKnuvZMMVcZDWq8rJY7EEBP3",
  "key12": "2jT56yKxpexL8sb7naS5LFfLX1FSRRv8TRy2hXtV4Xi5dsDvGAsgiFV2AxT36jZcs4hvt8a62CZxvuXWMSgbETkg",
  "key13": "m2NGF3kAsaqTQDGRoi4SBqrSvsU7CSWHsy4zuV2S9uMa2GMQHfvQ7jx9g62cKi3QYNpRDJxrCujVC9QgGBJRrTm",
  "key14": "3tVBPjXxUi4wvHU2ErxE6GtjzxZBD5yPCHmL57NxRLutXZGMw1oSb6okEqArjPDwMSBFmBhLzpVazrKNqJWQ99E4",
  "key15": "3YmoPu5HA1R97EBMLsJPVnHV5BKK9eQfPupPF6kkRzUqZvE7h2Z67j53tDbF7rzqrkwJD5J9nquQfPc2dZ5XJAck",
  "key16": "5H8DX9kXPjBciRM39xwqshCcECKCRRq4XURFbcimmEP5Nk7jvQNZj4QLufSd8gNwmFmGq8u2kxrgXhn63D43Pd3M",
  "key17": "3f7qYubv6V3MR46KAPQhhoUYS1paLprSx8gdhW8MfKY9tmMhAHvsmKjMSMxHDboz6oFSZmGV18X1pUeAygbKu9JC",
  "key18": "5cyjCTvG9z5eeMfGWswDsvNTo5oyagCBQmSjYtGsUtXv9VxB7srs86yem6e74UrwHfeLXBGeQ5LJ2KLGT6MME2yd",
  "key19": "3G9i5wAzrYtJgMJPvk2y65yWon8unJsff4BGH2TX4bsCb7VyFzimsqevutGoeV5v3t1F1rCD6PuuG7aWpBUUE9UF",
  "key20": "37Y6hAEr8GiKzkPbCTC5bZgqzxsoh3kzLFd5U5AgiohLX8VAFHKyYzGLwmHXKWnyXTDCCh4nwirq9KDGRZCyqXKE",
  "key21": "3Etcktd9SXbgMAtB7cJozaNpQoL6gr1QxJ7rRTHXBbk7pESApCcdv9ckwXic7yimQkLUjZGHnhe3xtYw4zxNczff",
  "key22": "hMLBiCKGEo9kMNGRZJwBLukAWQCXtuWuHJiZENNjBa9Kg1JpXVUkL6aBu6VqRacuXgSQ1bSCKEsQ8coAFwaT6sV",
  "key23": "2DXLa5GJRVQtCkGjD5GY8ZpRepzF6nkMfhYvJVGH155a6eqFA4zayEgX5S16j8Tzjpr8BtaJRMF7Vx81n5hARd9y",
  "key24": "4JhPAugLWZ7qy8uAFNjeAP5TYajZ7qrUa7cc7xB3xtqiwJokTwepa8t5Th5H3e6Z6tcgBfcAX8mXJczqJ8zLNTLA",
  "key25": "5Y8G9B55fzkqZ94d3E89DSEyUCd5BWPQc4cnxf8cJkE7HJa6d7NUu2UaiRxfPHDShhiRHrRWmBaCkDwdiEs6c9XG",
  "key26": "2uJ97NrQAPgnmveoBQWvDzNJFBKoX4DoyKHYvK6sx5WKj5xwuMRofMPqxYrbMjw4b5r3FWBcrK8wfLf9LN4uiKB",
  "key27": "3aTkDuwSc9ZHohY92zg9GMu93t3qtfvgefXVsTTDVmtH6xL8NZ6v7Go1xxTcC33fViG12tpHmUyZmnaFisymVstz"
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
