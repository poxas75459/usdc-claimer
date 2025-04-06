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
    "4uDLmEybs1a4FFtJkERkAnzk6GYpMrrAEXGdB8zhhWdPa5X9xL29LnCi2urUcZBLLmuvkY6KWy5y7ijrqoNGEbGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rQTaNKDPNQFhwzyk7FkhoHVBPCBijfPshycxGc6sfvjxUuFzeR64NKPpVxBeGa9EhjS38hkw8TJMmt5kVTMu18x",
  "key1": "129StvpPAnqjtreQkJ2dzmjgKQkUxXUEULe5Jpk2oDpU3E8dDKmo55DZxyEVWpWBRmCUJYSfimJ2Mvs1u9y4Qp85",
  "key2": "eoLkbmBzDprazVUEdsPByaVX2QWL7jA1f3T333MHtbZe8irRoyehCFNBfGe7DCDKjJHmGvMwQ7vJ9DnxuuJ62hx",
  "key3": "56twJ5BNbcM8wDJU8L2sPhKx2usLkScSyAKCxBoFsnkfMtQRfZPdHWPmhrSPSeffrsYdeB4asRN9jfMyX6A3Uw9Z",
  "key4": "3JsaXD5po6GB4hnjeWYuWat4PC9Zzf8TaXnVkHzZ1Yipw9JoeMJ8TtecBpZktoE6aZhjZoTygM3GSFnbHL56UGqe",
  "key5": "4mGPwooEQ5CyHADgBRDJ7MWJBTg7qYo9LHPsQmbMobVJ979h68oFk7BrLvXDpYT4UbA8mvv6WQhJi4Jnx93gYti9",
  "key6": "5od6347vGmhQdAihado6LQuLvMxnaypxbGVyhjZNdHfcmVKcYbyZT9hKaQ4QY97YYoLwQPaJoUGKVGczgndtKTgr",
  "key7": "5YPAqTeapyXiY1uFbe53aCUct2jZ5hBrCbZimRZKsmwVui5jS11tVTYKGuvKBAg91TZThrsR9LzNRM1ZBooH4vTu",
  "key8": "3CPMnACV11St4tw5UnbdFN36a93Tn26JHQY7Sjw7KEpmruV8RYXWLiArxQGMM3jVZ8R9KWuZ4FoJTnzxBrSrTu1i",
  "key9": "43mEDcgqnG2y7qKuBXvRDE1FbJuxXAbgFqaXgEGvxSnKvoCsLuqdJ51xBsinGJKGBkn1gVCLosZGE6B9oVfcG5pu",
  "key10": "4JpPb2LKZiyDtXjT1v4oHo5ufNvno6pWNukLibeH39mbchfokvtqYgUHyW15GsVaXNs9sqVebbX3TmTdBVgboygj",
  "key11": "3z4KgJL4i6zSWnNki3AaFszRUhvUCm6XhAoPGckZEMzYUf2idJW8ciszLDtoSDYZ7vvURgvTqNxzzB49SzvE7tzk",
  "key12": "gxeJbG1yRH5t9Ma9Gby4Z4fRGNLzK35dz3EUmt39noBQsc9JqgR6pMf57aRs3xWCdRhbajBqKZxFxE34WeKqF7j",
  "key13": "4EJPDF8zZmBgsHU36qnJkVAtx5cQE2np9cXzJwkEFNhSchxXEfd7LUfyYRjxo92LMNrFP1Cru4DTGancxSZPWU74",
  "key14": "4LJxfAGbpPjx13Ch7UHDCmb7Keuu76TF4zRHZNP4t9z4rR1mZQSqos8EJ8hpVMQ3TCqK8wjS4MxbvaUmxUGdxyZT",
  "key15": "3WEdd3Ry8sVryHWFDJ6eo2o9AEvQob6rN12DT5EAeBQh57B7NkMjF3AFShHijgx5E2fKhvfRBBq5kL1R5iBzeWfN",
  "key16": "4As1g74AjUs5LFDxzCFPRbvK6ht2dUS7bpA5cMQpSf9iXFWmQFCpUGwx1xjnWjxaJaz8eMLHRbsAT2APnnUmtiVf",
  "key17": "p7NEumvdtVsybAohkQwzLeAm77J42S8GmdtDdsaLLv91tyj6JXsfki2qVak8s5tSi8Q1amGN1RvEsobXeH2qyMz",
  "key18": "2tLKPfYbdoh2gRVaVgAmWGcYKpGVKbu5zoS3QdsYRmJZE5BogVnBua7yDpvVuqLHWQrBK4g1F5QRy37ERK53g4LG",
  "key19": "BNE7dNa2sFPvxsTxCmKyTA6H13vzuet51mfXqcK5YJSVBbvsQGj4xLMrSmaCHqrEN3f42HAkC1vVdFTDX2kfKcC",
  "key20": "5LAQdr1cpTPfB87JTf7uSPvV8F6N53Q9bCV1JxFvbdeGTT6vprTSCZ8xB5CoeEaoop2kjM25SgMsUPk8KDHyYpfa",
  "key21": "3EKeaKY7Bui39j3Petmi861zBJzb4j7Y8bSG3KXCUiv1vgZL9FWoi6qELmcNh5vu1MdUy9oj6wTUW56PxqFGKzve",
  "key22": "21Sa1Qx1K7odr7Qw6mbWdw4zqJNctdpq8T2pa8veJqxQbZ59mUMcdGBNWbgLy94fatsaANXP6xEgv7bmdej558zq",
  "key23": "53ZGihQdjaZdB28NnMhsQyXndGUvC8k6QBWqQyT7ZPst4NzB2DeYWptsF56uC1ho9wCE5bchmKd9Z8z8AoniQAV4",
  "key24": "2n8ooh1TNe6QSXgXtMkiGCgbDyysU9PJCYJkaFGRwjPa3KeKLbTwD9Da9hxRYaVUhU3Vc24e23y3ppizuYx6Qfmj",
  "key25": "3S3gKojGvHR2CrakUFEiHYbMow3ALCwnfHrZMpBjJDrbQ3Ak7pCxdjRA2sFzYGzyxSeptZtCiJmswxJa4uhsYTxx",
  "key26": "3VsLbiU7xEWrAgFSTu9sqpSUxGZ8Rqp1LoirFxfW2TtUfTWGRsEHgdbtBwjQ5rt58RY88zUxDMeffqNwhhkxAuAD",
  "key27": "253AVpT2E4fnydrvRmJ18B2GZi5xaxxucxBhKQkVGC2rkrpZHXinHsoQ14gabarYEj8dvMnCx5wypizWpUkRbnVt",
  "key28": "5ZsyNA8jWaZWtzzELdKEyE4hH4CYqWG7fFqNqeQq4xvb55YYoSZqY8kytW3vtiNwWqtiRWj69eaX9qo4Fx7jtxsh",
  "key29": "2moLew1bavnSC1ySkDQdgjpgHPTsqbmFeDqk3g7FeSXwQ9uPmyeqa7PSrVZtoJW4WmMgTYHVNSKGzdVU5BsVWdpE",
  "key30": "65ADvqmtvTFQA6H98ZzjL6wbKtVvNRauYDoYfVd2eJGEn1HRZDmtz6GNNuA8viPpbAjXLqgi8deViFtJTDd9YwpF"
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
