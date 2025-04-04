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
    "NAEmLkuwxf12Vbv4KpDkFPPKNtXHFJsBqPRrHVsnQtS5UN8MNeAJ7PnpCqVXDMxLok3E8obvuXvG1j3P5vN9PtF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ey9yt29DdojLYD1ZUBoqbxAbxT1KYTpuJjX8xUg6RDhA6jutaKe4G9mzrmoNRdrqitV357tTMKiUXiqEvDgdKvS",
  "key1": "2s3PTbFuicANDykKPS1n8BBzBNuXX48pjtWkYp8WnWD3jE1PYSgEPN2Ubgfu94T2iuVUZXss5Xjh7XAfzxfGbXcn",
  "key2": "61rp6zDYX1j9DTg8XvnB9cS1drghaUHcmKUQ3x7vyvfwqEutpAszcv4HnSpxNc9LdQntWuWvAejL7J7FjiaNVw9u",
  "key3": "5PxEqUtXVydKotmoFmxcTTnT22txs2ffkaibfWTJ99FirYzwamvhSVkEw5JqhCXdbhdrh3RDbhCHyqoPxeKCN8LG",
  "key4": "3qRhz32MTAGY1jPtj2Qu6rzqpSPJqy97L8Wp8rypKu1y65rd9qoHByPQzLWSEpLXqQXRWECZTAmUATWosVa2EGrx",
  "key5": "2D4oAAeeGtZepiun7eS5fPbeqNgamvqzfmS8Cq6u7Gp1v3ew5PFmpqyyGTzRvbBSRiCkm98wFizkQLggUJ3PUNy9",
  "key6": "3j82R5ggGPeby5xL5XsbwrdZKxaLnbwfoVCMAg3uR4b9DJN545D39QpwxCJeg4Mk7WeN2qjdyrvcFNV2Gb5jDRTq",
  "key7": "5FwKgKHQGiQRM4JPi8RdFt7H1FKb5T8q3aSkUsWBKq98yMUwarxTLfyADsCdUB3kZQq7wPueekHDwPprsJJfG6gM",
  "key8": "2R8CNK6r7QdnFwgRdj5s4udUWS5dwTzngo6BC4zaoismdzxmKVwQ2eNveNyXSU75VZ3CkLuFjkDoX933jCrQLr2b",
  "key9": "2oR2f71boCkeMpiLJqmScA1m5w8bbkx2yU8LcDttyymexoqdpDVW7SE3ZKVaxSFG6yGYnmQUkmFYoAjCkBaoN1BE",
  "key10": "2LuHRtwZGCHk28iS71jwEMDhzj7zvk7bJoUun98mM9EjzJR7cDnkKpu1rBckvtr4miZ1bZkEMuv31VCrf28YtzGD",
  "key11": "4H9kYcUppJpXoQqjnm4Js5RVfsigEYQwMy7bVPCE5aK4nUzUBZjjg1gdfT1w1kgfkDCyAuBGkhijeW52zifakCWE",
  "key12": "3NiLzKydFTcmTdu3yZAN9RK9okrbNgqXoKaWJtqLXRmfutY23fWkbcqzTV513DvDGdu83bsECNmCNU8F9CJ5DzCA",
  "key13": "3Tv59ot3QLtinqYGYtnpP8uxhQLXwoVH1RswruyAY84YVK8JX6WR9gBvLXk2NcwHfuBkuChhXZ52n7XWAsJKBkXK",
  "key14": "45p4ZRJVkxULaxKk56HA8MDjTdXWt9sPLjasfLLsvapHuaza4EaVrEyDUr6CPpMJ9Q5mJ2xTqEtdg8dVF6N7znZ4",
  "key15": "3K5jh8YBtGSBa9vwDXELyaLCUhEbcMZjGJYiWKh9npZqij6mdtJrmNbNYqXrqyg83FwemLS8T2ZddWeHyGdUjPea",
  "key16": "4jgW2gR7kLsCzzDntCH7X2YurCr7zqKFqfRzyJE6BFeRPALcx3hfdNW1PYyVxWihL79vZB272oS46JJHeopzYECV",
  "key17": "5dsq68dkWcQ4nqnUit776T3MVJhgMtmC2H819PdSZT8pHw9BFLi7k4SUqopxDAiiqjeytmgL2i8vpK4NLNmXxsaA",
  "key18": "5bduEBUJ2nRYNuhJBTP29hQb9wX5coMTLjuoun3qKhEzcYLqKB5id7kRKQd2kq3WxxfwY3Dh2Ztm3P52P3RCkRT3",
  "key19": "5tbedf9cn91D1UXksVWgvs4GWC8QuqZjCZ4SnSbKy6oeLjvEahVn9cNhAzBSk7a6PyT43LS4PW9YozKxSiz9KnMn",
  "key20": "48QUVw75MeGcAEAoF7ojpWyGCBxDJ4UGa6eY5Torr4fmSqHjWnjxXN7ZoZim4WojxDEEgrQY1Ftf74nTZnLaBjSN",
  "key21": "3o3LzyZnHWYRJnubAj7dJSrphxM1fqZBYi2vWiuqgEbsNeR7vAKiTSdWhMWBwHE8zkUnCYGeY9j4r77PAbtJZRBb",
  "key22": "kY7uodPSwA9gUXe3Tu3gXUABWx873rSkgg2m5cFgsoNWj1vzPUJB1c7sYU3Br9Aw6mfuMq3tYy3j8GTxBACNHjy",
  "key23": "3Bv4xR2FHFvoTgZ3ijqAzFCfc6Z2dGsRZUhgacgBMejSXKBuNmyL1yd683EMj2yNnr4KssBgnastdDkubALqiS3g",
  "key24": "BCAqb9zuXzCV6EP9iafJtiRiiAvctGR7uSZtwQM1dwF5QrNhnDnVT3ai662QpJRPa3aYgbvLjfXpQht7d1VxGHs",
  "key25": "b6PFs2yz1YvnEi5gt46h7YoiF35QVjvggCyE6PkaH22SW3DWkjvXDkHKWeFAVWSbK1nVi7ZLLN6A8V9t6VJdnPY",
  "key26": "4F4rPjoYPnEdj53eLCTkmRx8jSC4treTM6yS7ERWEGRgVVGwNqYTd8Yd4Hg9fnYNRtrNvov1VuBS6wYkVku69mzg",
  "key27": "2DwLLCVGH8cSYAPhazZ19waKYqJd14ejjWTdqRiFH4cHH1NGSNZFMqgb2T3mtD4pUNSzyC3UtdorsKvDzQNY2Ruy"
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
