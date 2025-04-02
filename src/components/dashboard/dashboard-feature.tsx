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
    "2T4uP6yDJVh4cYiN7cbBZDjLJKaHhxKQUL9owNPuKQKjXkbMRg96eWSCoNSqmxcvUBg1F5t3e93v4LeiVWyr9mjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uVp5oHggGZwASjDRgyyoXLg2nyZiJLUe4VSgFEyKsZm8GwjxDDuBjRrdysiirJigpUXkT2ZWWvWC2joRTfkEadB",
  "key1": "3upT6oEu26bBfyAN6XmirNUcYjyKCSU1SbFW5ZjMYy5DhAhmrGgbE9BVRChyed6NiXwLgybiiFK16vzgwnK2fNK2",
  "key2": "YYJwaZ9FLuCJi5oCjwgyeDLKZXnbpXbC9RHS5cCsTkBsxKZwJNQRKFcYkmjBsnUqHbKeZEh2ixNJWAtfsV2XjtA",
  "key3": "26772THMaqU222R2DfJVivgrdorWuH6sb4WHoKdNJC4kgN7iHQ5b2bnqVCpHqNFWKSBAn2mtWZExrwuYezBtv8La",
  "key4": "2Mfs7QxTKTBdvmQ89VENZYE2crBPVuoza6a2BSTsgnEpAxB2Sh9NpEcUowec7GPAvZYSsRDeFuw7SxjEZd4HRJ1r",
  "key5": "RRVhgieGzpfyA7yoY9SdiWSBizFMVdGsUbw9aKL76HGgDQi11Xm39YnGgfEraVVRA6gjacQGTSq6ksURxcN1TVP",
  "key6": "5sJWzf3sujttrzYgRaYkupp1PBKagdm5Srrbtq25vNb5i2AYGCNhCz3uWf9JyX9Nwm1EcjBB9Uc6SRYJoDgC2c3",
  "key7": "55RAVpUW85RGwV5oTnfi1YB1MdTkB4GgYBEyBukh8YVS8uuoS64EgKTYy7LZtxvtUVS33EDMZW8AkTo8G79DytCX",
  "key8": "2uNhZLtKR7cYN5d5EwYgAdPt4TJeLY8HvrMKXXMyp2Ey6gXmo3z17KuCXFUSqB7AzALfoT749kXKbGcjww9mkyXA",
  "key9": "4f3T6rcrsQYJWU7BWd2Hh6zwPERkmD3JhE9Vc3Je4odacoRSgUUe2jPFWdMbvcNJrX4k5q3ANDMMRRGrYqut5VpJ",
  "key10": "589jLZ3ShyMiDMQnFYDt3bRGAuZ9FnXzEA4RkLbCns2XRAyzY1cTCVyRyydEDy9mffRbatAS5nyD56d7ahwJDDix",
  "key11": "3DJNMM8LgmrxobzthGmMkyfUtaZhXnG1CKMPBK7sBDQFfjCDuWbtvcmDgKswE3kZeqozWL9jTyZwZVX3ANEUgkZn",
  "key12": "3tSjWMD8NMgrjqc3VKqDfFY1zDi5CvrPi78xXdTWqPDoTb6F3yKY8CKS6DXxSJzzMAg2Yy5e8DfyexeUcD1fUbSv",
  "key13": "5uByxvv7cCQ2FtJVAvzLsRV8Kf9iFYvSw3yEStCXjsatvBRN8UbyznmDWgpSBgQXMTB2y1vHvrGHSBAVggpk2Lrq",
  "key14": "b2VLmomkbTzwTvhTcHLqVnPEVoqFWqtaBszk5sDbFLzaBUgybHye4MQEZf3Uqvfqh1fV1Y8Wk1Q7cpshep8VAou",
  "key15": "3k3Z9ohLreAYyHpV6qSk3NU4NVvDsuP5edaKu5A9QAm9MC4jLU4vAWnQ8GmxKpxGiHinyiL9bMHefz2UD8wZ8Khf",
  "key16": "4AcmBdbrSfJjkxknxYNwUjPsLJmvveNHKtL1WvgQy7suv6aKqntDh1YiXiWhvk4V6NJaK75yhNJ8RNnuDHREtUiM",
  "key17": "apUKBd1ttymLka5bQgxhj9YUgiRaY2yeAtv3UK1Eyukxomufm6EL9mvsPpTyVAQp4uuuuwGDN92HTK6mbutGj1r",
  "key18": "4XYvfAtxZXiq6TX4HNpvpeWQ5roHDnyv8zQbPfg4s2Z6TWcgQUgkgaq6z2AAMHmUCZxbjugVP7m4hzRe1BsRBZ7n",
  "key19": "2CXFcgrJGnqpyFo86etsgsnAvJx562TKsNV8gaBHFf9fVCaUGXfDya2hJHZH4tQY36YJd78yyFBoGgyRDMvyaPkG",
  "key20": "4it5MHa8JJCUVZMVq4RcZ93ajmX3aM8Chk6XQQhmrf9V2CvZ23Nz4TE92caT1Xjhd6ELMP7vxTyULigyvYYpCVKb",
  "key21": "3zjJWzqSXhTJCVpkQU2ALMbbj9ZHGvndY9mkhiqimMdhM3jakwDTcwM5zf77JZASZLDPHJAcr2uJutKeQQuXtxJ9",
  "key22": "2CcVC4NsHpdy1RNNGdTu9iGksVcwkHaJ6GGqjj4S51GBRXLefXxSvnWEEC5ZyZoHPwpChfJ8Hwqrsj8Kxo5iec5F",
  "key23": "2J3kmsUWAPYRgwzm1SzQAaQGpVVrPeFMXi18JYq6U9ZCB896rUMgyBf2JWCmKxDrEVpKcr7nZDLWccVyATgMFJLf",
  "key24": "5dYhqgvbWk1LacwS9KMEUtRP6jVHQRED5r6GhubHS1U7fUnWv2ERkR4GpokpsqnvzHKmkgzKXvDiJdtAyrepKbnr",
  "key25": "38K7vzXd4DoiZcn7rLo6cEwLXkNsNSBMrktAc7gcz7oWeVVVLNRwmV19UUkLjxoBz5dNmkPPGpffSXaQzVdBP17Z",
  "key26": "515Nyy3rd8MBHxW42TMERq9Gq1mjKdo1eZawjjyB6ecExYiQuuEVVoHtGeUUhsLDawXP9NaTUwD5Q4tL7jwgeLV",
  "key27": "2qWZsUYPXXBRTCL8qLMxSeJugnBf6PTdShayUjwqdCPqrWcMULTnzcSFRyyMzGFZePNrjdddh2NE1pqk7uU2bTjo",
  "key28": "5vkABib89br3Apq3nuKFfsAkKPhWoBCnKqPhSyXRqkai4CaHpEPC5qx7iyX1nvXNJjzVW4bALrxMeCAGKv6aGUee",
  "key29": "sYekdNGcXBGQZDy2R6vwR5Kar6rDjuyGFu6AGu5rQacmjZyLnreVNm6hU7SNqYr1EHwd8gHzuJRjQMJ4rmJ2mMd",
  "key30": "JBAxtsY7cYNBHYn2wYwNpLnKkyXD1zA2XFu2hLx3uYBg23WrYWxoLJvYb4p7wvR8NPpYGrN6wB2ZTpGn4ZXmR3C",
  "key31": "5Bwv97VxhdSWTDvWviUAc6eDRpqzxcLZNYdwvfKeDd67yhceVZcdoFDZtdVxYbphG3xRXPUD5yKjW3i7YsRP696m",
  "key32": "5zsQXBz3CkhdGWuWBmpqTXERs591JLedXGjxsRXqsZ2W6CzEkosLjbczJTtbG1HzptwRwkKRzzudcGPspiuDZXEu",
  "key33": "26a9EuyyDvPBRgw7qsiVeZj18hyWcLhdoKDrVTUpwVBDZDn9gbcyFASqhfD4PntiFKsyrnt1Xv7D4jvRxvkPccLf",
  "key34": "5VHxbCiKhgQbUWphGSeHjQVy4yY4Mj7hPV2bSJwDe6J3k2KjJJrpTg3puD6hHjho7uaACU7G34QtTWVAcSVZm2yD",
  "key35": "4MuzWRni2RPwRKyg5EyBh91yJd6ckrFjnHpwESGP4icQnZka5ohJdaubBeRLqymZz9hDAiGG5FJNeottjErzFtt8",
  "key36": "5xyVJC8dQJHpgCfsfUfvaZnvWPEcsUsBZmYnNtttxbJqohenfH7AVaTPuAMefpNg6pxKn2KywokBT68Tt5Lkksr8",
  "key37": "2MAjNpePBxG3JuZnqd2jAXV5bd31s1cUn51YWG7etQ1DAvnUgetwmbkY4P6jPjkntzFziGm348q8E2DMduu8pKhD",
  "key38": "4B9Uh1REQAoU3Y3RWp2RbE5roGcJicE4LrBhshhhJSCswzcbBE87CMuTuHciYzrpu4cZjL2cQfN3eiDF2xJ3tdzb"
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
