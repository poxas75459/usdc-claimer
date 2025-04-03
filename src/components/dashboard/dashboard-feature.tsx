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
    "DS8RV1WNHKCqPrmd1PTZp2Y3ZTMA5Zg7wfgwcxiWbvBPRazNrGX8Us1yG6WDL6ZDVeRKebomTyfbPKMSTijCqvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vKLrx87KdZC8WaHG22U9XPfmCjkUY2Sx3mCD6aDNP7EAq8Wyn4GE6VQdVksS2XBpEreimupPaGkVZZbojki25bx",
  "key1": "rUsfPxx6gx3VwEYuTmCuiYpkU1gc4B6XnAdRkgwRkNKjvbgLft9XiHbR25nsbc45MtDtDcFqd5rzmgkRsGmRzhm",
  "key2": "Er3fb59VYGWZ5ZJjGq1rqdoATZvc1aT9ivSGHJFuxMoomv9mdU6DWB1QqRZvxc8hTqJA9omHZEuVgjiH8g3uDSG",
  "key3": "315Jr9QDnncQRkVRtWhqf8AMZfEwvsofwetah4hLFQQQ6FUHctqNR1Y6fAyvReac7PexYLfZBpB3EzrtyPm5SkFn",
  "key4": "3aZKZSdhPv7yz1BgSnhUztNaMWYpDEZtCi76Nh6HkkJqnqe8verpayY53SvgvqSK4Zc1o3EiNY6jHMgqDdyundDF",
  "key5": "2o1n1NZwAYs27sXG8ZiQUZC7GwiNNmwXMsuwNMUTJFWLxxUX1UWPchCXMGqFnzHLYy6PZnJjYYV7o8taDwuwHqS5",
  "key6": "4iYFZMvgZe7KKgbJ3W9Akr615aEPBHfT1TYJifZhmHGUWoC2EdFybSEA5uM1fYTFkDizrmCNqvM1Bi47nhAooER5",
  "key7": "ZMSPWgvqUxEk9uqX2gR2Lhkb7pxeMAHbbJ9RKSsewXSBRsPm33gtWq23YXZGE7TTGrxQChRRRngTu4pWKAyJ3CH",
  "key8": "2xwwBHEJnk6CxN42ypiZ8zkPHzymx2bP2ibiNeQR3bAHG4nrADKgcGp5BdEkE86rzBPbzXHix4SExfNecvD64pcj",
  "key9": "46GvLRtZEQPjHJ4sUDxxeaZmte83MRw7hrRSgSGfahbpcDG85o4Wu8NazQ6QM6xaE69HjUh9h6MSytM1nGihz5ee",
  "key10": "2b1QqfZigZYcvhcDNxLjyoRXyBYx27pZsjhenGkbD39LYD82F3csoCbTJ9J3hdojRDZykQQ2DPmK8gnyD4HXhaNz",
  "key11": "B7y2oL8DMoEF3aBiG34mANs7gYBby8iSUSmMrYbGijbu6avKDtGUo62vD1EauuLWeTYRWmNHym6UjfUQfHpKkuD",
  "key12": "2vFZTmU8rAs6K4GpvTbzAZegPAsWLSqYz76MEFyZ8NyzJjFWVa77xwnRpjjkfDo7ZDk2EVkn72GSUNZ4Rwhp8oYU",
  "key13": "2gTQM3dzViLwxEEjpg5Sd8rToz5Nw16dnUrmVV2HXnNqYhvmuwJVxu5T8CMmESqr1cbfs97aXaFgHGGGiGAJFzMx",
  "key14": "2gAme73Xw9ZEFby4TwtkdrT3F3RPz29665tkXr94sTsjcjSj5uGXYpfqfao6pAxELyYut68Yox1yPg1c1WXRdCPA",
  "key15": "3Zo52zFhVXds1WHDtrByjkx1uoBjmMEhXUvv2FhMVAHt7g6YfGhqbqBWkJtzoTKc1A8p9fv3rWhyMimTpwQ9TnoE",
  "key16": "3uSwqkGk74ksh41tp6WBtyzcAoCPgCiv3m9fZvdmsnDktXE5cjLvt5yv623Sq9pHLAfnvN7AWETrFg8qdvwvi21U",
  "key17": "56jMS3awZ3MQvFRJtzEYgBAjjp6oGQYAuYhamjeLmKVB4kpaqcRJw7ih3zZeaVrKW5wuqi6WM8CNbdEwPSTqzJVZ",
  "key18": "4D9WxJCP4JbyfZrKvE9ksdDpPrXLPCFd2mFzAmhvfewGNckYCXr57v5kYeNsVSW9nqSU7USwVbRkxiZoPFrr3LD9",
  "key19": "37mwpGovtmyGK8iZDgYHCm2g1AFJUF5gzEicc6e6tgJbzR1eGUm92jMLKJFBMVorMp8eUnHnSEZzsTGSGhsTEjjJ",
  "key20": "4jmvHZ6ji7cEtX6CwYJZWj4ENzcmhjcWG7Kjy2S2xbJyZ3V9HcanUhaw5Xf9MUFCqmE8r5jEWxV2KwNr87BNjrzc",
  "key21": "cD3YurGzFCzHQaJ2CYmpKiFEJJVXqbyje2q3C1eLaQhXZhHUHpmwLH5PJKyvJodSEAR8p6beu2QCvQCQBSMKmDy",
  "key22": "4kEBug9EtE8JZxNfH8ZFk95q8Yz3FRTcbK1EnMKnXczcnJAiptgs639dKfjmxdHgBnv6exDjatVB9EBcKSXck15C",
  "key23": "4VfipnYW3fbhTCeo6kSZgqEfQHo4CxBo3RKY8YPn3gfRzFB2qcytHdW66qXm4mNR9ArUtD8dANX5XkZUEjUJjCWG",
  "key24": "4WR4WHWkRN1pPq1YfVki7MTCuHNzt8skemxkvJk7DZN2K8rGLgcvRDTNTCEx4AUAge5QNT18jbCGVdhJcYAr8YYK",
  "key25": "3wYF7u4RUZjWwf5N2v7fZbUr56xyGCVW1FGhRpdhn58SAZLppr1toG31MJc4MjhZFzw1sdcmK47D51Fwrf4M2ZFM",
  "key26": "4Nty38dbpkLQYshrBWfsX19cDyYx4VZF8PnMb6PEaHwiBNyqMra2u4LJg1xKoPZHdQ7der9sWQoUiwBRDrxRzBYV"
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
