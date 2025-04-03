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
    "32n4hvuAWYNFkAgk2etui5jRraEwY5MsyMRE7G9yC1aMfUwKgp8r58nta4XjRRz71rcbw9MeXNAe4zJwRpeFwgW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WwCErpxzvyWY1jxoiDc4ihamQDDYN1yMKTYBVsYA9eHnS5Srjx1zp8v7rbLxNe2BogxDEweoVu8i9AugvAWKBEM",
  "key1": "39Puy2CSxZQwxsuPzDsZs5PibdtSWtQvmbZTbDQcwT28ovm5o3NJW62ySE3nAoDeaTBH1iaXuVJbe9xr3xxfKDxo",
  "key2": "2YKYgDFAmS7e4DjPUZsWPkYQuZWUgYZJHxojza4fT7dPsakm7jioM2Abr8HgVDeQFn8hiKk8QKpDnQz66yfc7qWz",
  "key3": "3px7zpszRgjaLssy7mrtRrzbBZRVvZURKEtWTxRMeyWjNuJ5dWBsvgpW7R9Fkqb46HG5rpYxfioUPerwhZQjhi9K",
  "key4": "5rhir5mqqjGkXan3VD3k2NcPWpoTZ9N6eTLsWcusN9vLStEFCY8fNPefJVZqQPpDgFhGt1B5noC3h9f7tJRk3Vyt",
  "key5": "3ZTdqEvLFGQvsXePLBFt7kxwzuKeeM3WcBzUaLExy9YxDaZf1pKjRJAADnbS1tiShBv5xn6zmyrukk2oSQk8AJtN",
  "key6": "5PRXFtRSoVBrmckXn5CjxiAEzQwGwzL5GzGVRXXW16pQtNiX3kB7o4cugo3wkbGMUdDVA1EKE7wFp5cmP8QEcL5Y",
  "key7": "NQZyotqizzCXU9GfLPgk8kjabEAWxFNWPjnnbWmWcaH9vAN6MdABm1QsZkzXW2DRGcviakEPaCDSDvKjp1YKyKV",
  "key8": "g9dPEcwvqJ93z2C2obaDh2uSXyYV1XqzcuPYgBwJLPjKrxTaHq5sGRNrppJAAPV1AYMQwQDwfmfbc3DV6DrTnhM",
  "key9": "zGJWTXEHwhn68z4zW4nCGsomn7jtQzsHqAK3W5XNpH8dHyrT3FXQPikhkeETCu7fbNSxDj2xncbsrP1aiUcgDca",
  "key10": "4AQL4CRYt3y3bEKXHAapoJJ7vQxAwQmnor5ufk6ofCCzRpfB3xP7jkHtNRkRbvxa9BoauPzjJvxcwaremUv3hKCp",
  "key11": "4yJhLpehU7m6FK1tNJQoseUdVRPSKRbY2Ucb5k2FD3EsAUNNtsqHdqpE5tNnU4fJJJZHBwrCjUp42HfpngB3S3V9",
  "key12": "VTH2LSWJNWCwsNokkAzCW8irW9zqQ7UwWi41Xn8Zg24L3cvNW8Em6BM5UztWG6uXUaa7b1TLymqTFPrjdiLjYrk",
  "key13": "2VrEhdZsNTCGsR9LB8zft2dXWN6izEUCjzcyzyT78sJgHoFH5yY5jcESgUDBxXLQda9vYL8UxP6ZSM1YhP6ayDC1",
  "key14": "4FPpvgLsMz6xj5nLu3T16tSseNuUXp2gqK9QzGSjYXgAKYmV2NhNgurkyzey2kRaHscHZJPw3pTvB4NYnsvAS9jz",
  "key15": "4Vky67HUkuQHp7YtrkUbY7auxm6TGHjUv5w7X7vXzokXa3DCzF1zM6PvH7Mhd2WXaauJHuX1Wy9xTDeHyX5DhnD5",
  "key16": "63FNimdGCRo1eMyVC9ZYndxFojvfwiNbRrK57g5CvwTF98AbDiwUogiRthUbCKG6X7YVyap6gTxNe9dBKd9czbvK",
  "key17": "2HWcif1nspNAwBHckvGEpwmurXDu2wSur5LVxm9udtvt2Jt96SjJeppfXDgSpbrCW7Mg6cBfHcqaZTmBsSoxsJ4C",
  "key18": "WSNssSGL6uZRX7ZhmKvttvpR8aMeuTpgvUQVRBNEdy9wkJFjXx7fB9JuwhjvKbnNH9zAXeoc7vU3Pfg8vX71bJe",
  "key19": "4RWQJK9Ze8M31ADMksQVggC9go3eVxzzWvphxrvuWPoz5No73qErY9PjG75gDkmK2aeFRdE5YPRLPL7ZDdb8xd3E",
  "key20": "5b9ViYnQZsp7d141V3Gjr3vAb8ky8vBTFs9BpRZxzWYxh4Q5LSNBmb8GwvyT7artJRCZybDyE9vGkFJsCGvmacLR",
  "key21": "44X9fL9Ar6og3apWsPVSjw38NGMcbEypbRzTdkUhmH7VUVNKgeDdXTJXtMPiJuL6dKsij7CSLdzxngwdsRRaY6vd",
  "key22": "bwzFA4AeEwPac6jF94Lss53eqfkG8xtNwS98Vwc1KcTmQyqeGv1zWJrF6zTscUCgjr7urXLXqPVMqvShDfYyAaf",
  "key23": "Z2iNnDLacUBH1JTUheT26ymiCgCNaXWj5SccJjRifqvY3RUUNH1b5WpYowt4LELVejQwVDaWbZFqSSL9ghNDs9P",
  "key24": "2QWbZaiB6hH4LsdJt5tkf5RFjBTsPaeSqMiffJ1mLWaidCWJpZc5yimQV7MNGkFzQrdroEuR8AALr5CfW4pkUF5b",
  "key25": "3u1G559efrhpNv3wTrR3gk9oLBtX5n46mvXk9Zt5TimLL2KLjVLBoBTgEtBgo252jDaDXQXe62p5V6W9pw6je4Nc"
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
