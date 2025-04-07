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
    "4hrq7fPcfdFzb2ry2acgPpnJMqeEBuU16D96Lfguc3KeVb9KXAaDmuXj81GTjbTnLfq8adYFBFqYSKaLb96wbVTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eA9fvJUpdYUrqsmUkGAbAAcTrUntT5HWTW7HgaBK28eEopaM5FtszxU2rNKveVW6sz8EW3EpK6aRrpVQCfE2CJi",
  "key1": "45TZFnuWCnfWoJinJw1bF1FnoZ1SDBgmMyQiVrdUMHw8pPrzj8jgaUAs1EHMfmzEbE7mvc49rvNGHfWaNu85gggC",
  "key2": "3D9J8FYc9nqVVG97sYqhgTKSQgweuERbFtUbvxZH4fQSCgLkPdXfoMkY7acA3vva5gMEu9hAXSxr3PArBXpehhjY",
  "key3": "2VnHVxyAwDwFVTj9hb6t2jqKcCCxMMHwcvhEMriqPoYuMVmeGYYrFqohtEThDBCZyjtztuSyjZhke2zYqC8itSAy",
  "key4": "yXziyZR63p1UPnv1tozkW54tLRWDJ3eS9WPGyFBUHQwKikihU7SDLo7v178kAayDyLx8b1mYhBV4hsSmcr6JkbD",
  "key5": "27QBB3WggAGuWqnG8q3UzEwmBKxF7We3wwMeFTmzuTvU2mPBXQD8xJXrdSSqmzjBdG2vm9Enj1fLv5Nj13VT1RrW",
  "key6": "2pw7mxrfh9A8P1n1CGdKQNCZzY7wnUobpVqTFn9LiCST9nLARStFNhMvCvNMefpBRobf5VnM94QgabeMcxBKyV2N",
  "key7": "5ieX7WjVeXxSeejPYhALJ5E54TWxxYHZQw1JX36R51b1nz9N79SRQvthsCK8xAD5tEJUzMuoD7Ffkc55Fs44DKdF",
  "key8": "qAFs9Xyqd48f7dGD3kCdPi1qdDY3XVn1JqBBd4jpxRfimUbf6ATpVELA3Zmk8FF7i8L3BsLuzEgbGxERZVZryxv",
  "key9": "5g7KqBVbZXp8MLx5qeLzVMCMtdVngqVSxFfFvqommmnsqHAn1evvFaSgASsPsJQ73SBv68NGLEiGiZmsv8TqzZSi",
  "key10": "5BmjVipBXu4SXK7KWZ81i4whh5R174FDCyReLBAvQorTvqLnp4h6MEgFg5pxBcPwfxenk9R6zMeLqsWSHeD5h2Jb",
  "key11": "2rf6S6ByKAzPV3eo3AWaG9W5pzmS84CZ9t64mVfgTtCk6AoauTn7iHu1eL9n2BntdWMH7ehXZ9qspicSLtc62zcU",
  "key12": "2dYpJyA52pEVR1gzrh3Q97fMjKoccEmpBcLzxqEF1m8m5ctXEMPPzAGL23SnNmH7ugHXv9Z5gFvdqDb8YuNQGatY",
  "key13": "3r9MadZkgmUWEKwWFP8W8ftYxgd8iFmoagTAXD1gSNbHM52U3ahXGo3ck2fmQnARDi5Nu6oBw7uP1EtrNiYUesNb",
  "key14": "3oEfqBWyL4iX8oujL549uqdG7yzRFrV7h2jh9NQyTHdtk3gE1o4r7QghrtyyUFdR9ZxBcUEGnJGoRok4seeUdZ3g",
  "key15": "5EHAYhyeE4nHvTDALkjQXe1ezKMedr4tkdhAuvXcTYxVFZeWjwZfd7cLVmEr7uEr6Wv5n1pNg8Fz47qvxF1tQGFB",
  "key16": "3erzYVD6QBbMChQ4i8b3eUvxvFFtuwFaa3fhvWsJhJ5aD6QLn6qoBhxWFRQ7pcrNPJPJmYcARp7qYkPtszGwvZCY",
  "key17": "8mnmfjpEZ6px6SS2R1sX7FW64AdfnEtrSnkTJmeJRiMcWvJB7dujJfUP4Tva6GvKmYfWUXXsFrJ59RoSwSGFUry",
  "key18": "33uYRa57NMVGMRdzfwCYxXjzANFDKbUjscg9D5EbMCu4tBJCq7vkANEYjzPb4ZPPQC5kYTZLrwnDyr3E23G3WfKH",
  "key19": "3kGcYJ9DKjuxyyBjKtMkxL7uQCBthc25fD1N7kM6wMU7QhA6tRitjZnePgEhvBsaCD55uqrfPHpp2RNsNSbXkR7T",
  "key20": "5YdcXNCL1KRrjYcwhXGa3k6zABKGnKNXTyJxMsdNJFpZNgcZUGC2pUjsQq6CAGg8dERSvXAJEzHQgKUyjV1WFt8j",
  "key21": "25ExahMP6wcM6RbkFkcaCvTKiPB1ckKSTSeAHq2jqduvrffw9i83UKZ99t6cho7PVuxe7KqqifJATQRo6jAK4e7A",
  "key22": "2tYMxmKuWY1NcSjadcnxYtweH9FBDMKLwJocwgiWfkXnz3knCLU7EVa1DNnx4Tzm2C9ag8YUUT5wrwDxfwfptVg2",
  "key23": "nJ7n9nGjTW6XhUT1AMrX8FceJMh3G5jTGiuRVAX8uqyG5sJUKWHtk4bSsRmG5ZXWTuoG98Kwm5XfTMT4ZQWReyw",
  "key24": "4kkdCof1QScq5srHW7rvuHk6QwTKci31ktqBh4De3LjavGGQ1ucftW71dTmAWZTFp5y6a197QU8V4cLvbk3pgHQ1",
  "key25": "3vpFpnseHC8Et8iSUH497jP77qY4RGh6atVzdX1zPk46iEHWWXnF9q3vAERwrznoZJFtcRPvuNm1cnHT72mEaGn7",
  "key26": "2wp9oz2HdDUF45gLqMQ6KDxqyDLULgqCTie6qsB8A92mXJ7ny7e6mLh2zanzfwKKPTc1CtdujVbzrQt9c4wg6iAV"
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
