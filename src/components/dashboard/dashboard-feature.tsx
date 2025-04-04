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
    "2VpRmzX1tj4LnGnRrrDi6WaWxeRbhvRFST64H1KZA2a58W9Q3W8hjhM3eLZn5Kz4SXcjG8ebpQouXLkYGp76Zhkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pzFzcjKgN2ve4ezo7Y5wmZKhbxDrEtLXcXspgG5GB26TG3wSnLTgZDzWntoAaByLnrSp1PPAXyBPQRGNsULvLv2",
  "key1": "ZfkCWtVLz3sCErWnrqAWm9Ha6RjTtBzmwNFKKTycdsQ9WQBvYAW6h5ak9BncfVEhEtHKuMaYpAGePFoov1bGZHB",
  "key2": "4C3BP5S6DyDaBPov1thc9A51AWFz8SzTWeMPWmAxpD9Waf4Mdw424g775AydhveRPuMigoWS9nEHNztf13eBusSy",
  "key3": "673pzLtGTGkttrWd9jxsJTpJBjQEEWrQkPhd4Cyb18nwUnMpQUjkHGhqaxD12Uez8Sxh2a4FdBhx3mkzRgFxsHNt",
  "key4": "2g8SoGz91gzoaceqx9Viq9w7wZpeE1Y8UW98BhSgUXfRpNN3B78f9bHZUo8WrE26qc9hbnbPjNBkGcTddVxWonUL",
  "key5": "29UyZA31JweFHG7eetjotpEjUxU2HVCT4RNKswQEuH19eJtvoQsbwwptjn9tJ9wY1tm8igDLamENoRcDFYC79sYu",
  "key6": "6tmKTd1Us2Mj9QzkTPTR4eY4yNMRBPDyEEK5fDyTf9o5nUC2PFqmFoUBkY6CpTMUZB348A3WvwiCWCvYS7LsbAZ",
  "key7": "3oRtu2kVRk1S9n8iTr7N52QrzK6Vv8PWugBaedMsfbf4FBSSKxVqSnsDjgZ7TLTrpGWLzkrtAJFALTVX1tkkTwfu",
  "key8": "5w3Z4KVdu8QV5cdroKCaUNcGMuwvKWKjqmi4Xag8NA7E3VmBM14DKCAWeJm3aiu5fRKdwiUu3Dt6xA3xoNSJ1vLq",
  "key9": "4QDm7C97LRDFTL9FkNiXxEPya9kNcMXBZLkHKrRFh6V19zrkCxVnRkM5mWwpyvV7vVmFogP7ibr2R6ouo6DWFzZG",
  "key10": "34Xzwoqw6YEV2bP4geoJ4B7zAqdGbC2aF92GoBFDFe2nJ9QKdefL6auswmzmJVSFsCzXZhRYCM4TVcYLeHoUBe2n",
  "key11": "LJQ6LwhmYEeQQEpWq47DKL5gsFSxHd7D4Mgah3q5WzWs253Km4T9UypFkiaUFe59YQeBJu9kYuHrc1bPmNXgfMo",
  "key12": "5xT44QRvMM32yR5fqNFf4jCKMYUaducxAKwbftSccz6bw1hkHDqZXo525HNhaYE1mEbWD9xrQonXir9X5HDqUmeu",
  "key13": "37Gde8gHAPASWi9ufHv4pvcoPtpRhy5FFSgMpVP57xkS71p2x4rxrqTfz8M2xz999hwQsSnfuwsuKL5hAzcgeVrc",
  "key14": "2CjAjD8AkLiuk3iaKQ7yvfmDrnvWGwJSmNfJwLrq1FGmgTQ8hZv95ZpmoX7td1rakknVrQMPwt3SLAPSSWo7j58k",
  "key15": "5RD2BfyPLsPHtQzN5jfya4Qr8UbhxHExJWYbqsNEDMojbxUp5eSSTyZhmra26P9N6J9mWT2EN196BYqGARaVJ4Ly",
  "key16": "3jBCchtVc8i4Xn9tWX3syRsbXD5AUJjmWDBuV1TiM3CQqN25Crk8Un264d7LUvGtEG2Z2c3ZFMmPvcZzymWZGrsa",
  "key17": "5zh5cG1596e6uAncicCDBod1Z6fn2yaRssXkfjNMkHPM8hkCHbPrdZjKcj1MzjNoBH4gDgK9pPDxDA32DZPLFcbB",
  "key18": "3NhNzwqGPqnMr6CkeojVhM8xiFHCmYNU156KSvvHNiAVJZqt34pRxHqHXuvk47Ei825XSbvCEWXj46SVPjuaAffW",
  "key19": "5fnfRVta2BC6WZPxYk4bpf8mU8yT6NW3KhGhMKftsYY4FcVr1sKH4axETjQCr4gAvvGc86csQDgetnhUambJ1X9C",
  "key20": "5J44sskMmjNRUrpRq3vaMhRTcg8JG5iog3WTzHfx3SYnTqzXEwPtwXqh3KvCLc942JZq7fRZHhTPpxhgKpkJtcsr",
  "key21": "5tVofTSJX7WG6zP1x93KYo53yreKhy1gmuBkg7jdgovJgthpDb4222oP6JW4mQr5C9RgsTeVnFZVV1uEQUQqq3J2",
  "key22": "WQMnCjArLSMky8wFzDvYxsQkfNtnc5eNxuGjTX6yMgNhh9PgZsbzSKELxU3iFZrqVNF32nGFWy1XfTwH58ScYDp",
  "key23": "2czBNJDp5jGiEUSktebJ6LiLjaxez4DPpriy14wtEgzqrJxVfyDaxqXSf88qPLsN8Jwop1Y1EDGjSaZyqp4CuXEH",
  "key24": "33SFtdVQhdroaj36hCs3SygYZUeQw8KAZjooUP63neoXHo1kdagEeBjbKfnpyu3UA6verYP1djfb93u1mi3Fna8L",
  "key25": "2piDwGRWNjDiDMF2zmxzziYdqbdjenzEALqQALWmZR2Zq3ZprzJctwtKaYZtdt2omyFfC319PidrpY3Zd2Hy6qjd",
  "key26": "5DYVUCZq1ZFt5CVjFWcCcrUUPTtbVPxPn7rodG26ZzXWqvBpCDeHTs1pntxEJvMZjbvZchqH97P6sMi6gNX7vgR5",
  "key27": "5YMh8AGs4hFRMXhHuYBSaRnt9zTS2E2eCEN8VCMjTX6aMhGR7WqaXBLrSGhMSAM91HTb4doJjk5PgcBZYTGD1Tut"
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
