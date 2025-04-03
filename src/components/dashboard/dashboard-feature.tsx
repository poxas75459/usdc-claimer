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
    "2u1zLyyyWHgguinDARwJXR5w1BizRVWxq2rwPuUxSRM4v45pJXGofzE9588Dpd1GBnB1tTq3YZSv6XvE4g2MAgDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xNxZzTKccLYqXGGZsXTJeumTmY7mwEXswz2LsSbNwW4noknuUnJ2FMuQXoAWFhcQd6BFT9yQJJr76uzU8zykPiE",
  "key1": "291u4rXgP5WM24CPgaWhnHMzkyH38MFVXVUoyeNjhy7fNGJe6QMXXPvPHXhKqJPWCt47CU8XHAbYS7z8rkYVaXfQ",
  "key2": "2EyqJmU9zX8Nj2XCoEbuDkBhkPrDRsnNv7LNTeCSmVqbsM6Cn23mMjyGfvThTWk1NzyAwgWXqLUXNkeboV6KZBFX",
  "key3": "59Gb9oDKWYPZQf7NUo5LbQbeC5WC5zy1ZPDTqezgUmGVeHaG1wQp4Vm8xzhDngVJLzfdTxsMdn16MJL6EjnWnSJL",
  "key4": "5Em4DUZRm9yC8DFVMArNkcbbnWcPJpwLCPoLASCMtcFRP3zyzEeGyTu8Yu5zpDNfof4rYbhqsirnXPgXrL3WCmNz",
  "key5": "NCU7gQpA3u8iFBZpFoNd6xczZKyhHH9CsAoHrumx58koHZoyjCpiYwamBLhNXdKVseeZtY2VKr2zVECjewEz5Sk",
  "key6": "GRs6Esa434TW6dNi12CKe49qs84vEexx1C7yqx2uJa9NDWEP86WwadmESbedGQVxDjHer4NhUSzH9zVDSSARAKD",
  "key7": "T2SByGuN2scCPxgMNyyNVKexWdqzDjeWXMUrGrGL2iyqW78FJfVqwk7QGGiErszkbEXRAi7VqkJcpXGQZtJqKz1",
  "key8": "5fmY9Ecba7qcgsaaHbfuxsFyWmNh3X2Sm9s2MaY49fsR4WMSvEJKmJbpRoFUTp7Y5iXRqCBj67AnrEn575mNyXrN",
  "key9": "5VxCHEbxtsDmNPH9zM7nttbreqC2NiWSzfovfBcFDctDMrjNgioprLjJEjcsgnKtBywKQK4TmCYJsD8w3CFjubx6",
  "key10": "5voXjqhPAiqLkFfwNibqJKtfnRErNic6VcMvUUnK2nMu784EoWtmHWcADetczH6gYrCJsVTa5Mh8WRgL9TTsXfDZ",
  "key11": "5KD6ioh2gREUeXNbKc2x9Eui8pNiazk6Mo1VuGS6CqWViDn3dBsZocEVfn9k2KMUbJnvBCNG5zdvv1g6VUZDBbVD",
  "key12": "AKGPB5sWYtgTWVSnUdm3UUAptx2BhJFRrdZgo6FzomSTn8xJcbcfLfjVJKvFeQbb8xV7Gg8b7nbjQWPZma8AxTP",
  "key13": "38JJqo4WBZ7jtaQVHcSJ4Y47kxjAanZyeFeKaYeAF6kmtnm8xs96vt92am5TbbyT8hnia95xFB89S6BrvghY1WaC",
  "key14": "2M9e4WHTT3h7LYmYnkQ7sd8MMRJYkhQdsBBr3gV3vM9LnWHpJcvbshxM3TzT4Sm3Ys2Q4KikkkAZYLu9L8wRCdrd",
  "key15": "Bx3ZxbBsPPaB3TNbXP672ic5HLDeTXTgPK79fVeNAU63FptHzq9Kd7VTmxd4Bk65URE6or1S1W7qysHaVQjScKF",
  "key16": "3fFohwQ1NsV3HQJ1jFts2Hrrc2dYvw16kTgpqhoozLdP8FtaTPaw8wZGLQqdkeQRKhKxwveSfJeA52KjfKvirbbT",
  "key17": "2pXrdf2DBNVs55DmwKW1SddSdjEBiSWjRYsxBvHumvsrKqEA77SRF5L3GoL86EXwsMUjbnxvJGs5ENPjEe8YTgUu",
  "key18": "4zDnMbRGNoGNZWx9yhQNoBjLHbU5HJWBRzf3isxeT5vtbLsifGjzBYEbGLkQ2uqc9g6G22uByVEUyddo2CXGSpdh",
  "key19": "aPWvk8sYWDf7ZvMeNnLY6iome73Ex64vWpTFfY2fAhmVDnV6oGrWBCXLMA1xQVmYPDvoQPEtemSoegbGWdhNeuK",
  "key20": "67ow5Vi76FtidQGw4R8YdtvVJYRRCSZG8r15kQFGfCQogrTrsHgJEe29cKU9H8LWGzi6LfQparVtMrJQrkU5WoVL",
  "key21": "5o38VWN8EjSYLkKd4Pm8stA7SWZT6cufgth6ZcGVoBK1AKvZ4z3rcBrFGwCdiYJvSEuRyRMptjT9hfLnCEC5HsCY",
  "key22": "59rCR4UPX8TsmHPYXir4fyK6LXFQFfbfpAGsK4N9TD4cFk6xTvVBohYycaWQjbgTKFvEVTvNukqdN2FtJHYaKKkf",
  "key23": "4V9sbLHq19LBVFsFKUimttYc3PEmYwuU5PyMVyMGbcJt7KM9HXzLuojbiZ7yRkRdhgNmdXTqMki1Tk7aWUceicEp",
  "key24": "58QAWhRLid7cW9d2hxr1roLa64SUEiJANXorKCTCiDVio6ZURkuNv45QM5rZJzFszsTEAeuVtdc9vYSQfTWTMFm4"
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
