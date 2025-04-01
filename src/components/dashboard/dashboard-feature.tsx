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
    "3fWi7SFYkWsZZsmeLdvkZ9XiSySL1cscPPDFGBm8mYdxyVAYtnyxqSUmbNpePg3kmqHua2xZCiCNZnUzgcFoVfxo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E3gtPUvZPagTTmRxXsYxxfPaA3aXCnxo5AEGtWdnfRHkeXwFKaCqbhyo4DWJq68mSbJEKUcGV6AjADEZiLatqGP",
  "key1": "4tkKNPFDA1KN7h5B8p3eaYwNPSB2BxEGZ23bCLmEsTRdGykRjK8ibVtjmr6ugJ7eKiNf5wqGbF7Mw9jVEuHPqou7",
  "key2": "5x9eeevNcvYQqz17GJ9Hrp5pdgnS8p8QNGGQzqvZdiV5fwXM89yKwEBVc86ZmPD6EAY5XXdArYufBKHxjbvKS11A",
  "key3": "35uEgtL4DY41jS8g7AAUj9qxFthfkD1CcsrrGrJg4hGjZ46LbEPd28XnmbN5q6UeVUJyNQyra4aRrdKtD5h3ywvL",
  "key4": "3vv5Q1x4JjSbJxgcsNGdCcUrBZv4n9EX9LHG4fEmB172outQHEGSsDKe4UTDjvJevtNx9nUX2GmuepTPs8hHmn72",
  "key5": "2ZXegXrAV8hpfyBw5JQLUsPbFWJ6ZMn89L72DqEXi8jn4RwBYffnMGn9g8vVuGRUiJhGNjxTf4x1HP7pi1UrKfuy",
  "key6": "V4HjPLbjW4EDWkE5V1SLuf9PuGRYuP41Vevy87UKMsU8TzQSigVAYezJQnMexuuSfiJVxbebJxbgiGG7JU28o6n",
  "key7": "wqAKQWhC3bQQKV7zWiN1GrYa4Y5ZaeivLRS5jr7Rr8arc7R6CxeRhc73PS2oKj9TroqVLqH1dWp5i3H7zjPU4ms",
  "key8": "4RBdUvRHJ8VDnGzir4HQvxSbRsxXdaGq9kmFNhzzU89i7PXezKGFyEuBzgMn4X42F3vuJBYwjKczjyi7DrHp9fHK",
  "key9": "5boPna5NWqvZr3fQVWQhrcbLe1QeoQdUuer9uaJoy7PxkemnL5fK43Ax3kxjtwmPf8Kn9xnG433yy8eDVyeWm59a",
  "key10": "CWZRWLdKqRBZgWWs5Q1nndVKs8QhBSZbt3ZEGdkqCQ3fsAXvpadBEY5JpkTJ8HJLX3Nnh7EpkWJXHC3HDkeXpSB",
  "key11": "31TDVVDMFGMqzGsZYhE48tvZtogQREL8u6vnRVgSwDKhzVKQVUJA4HapkwBQLgGTt5eFhSx4uAGj7vAkWQdMzsws",
  "key12": "3QARN8oJa2q18HeRMMXzYk6AoWGeMSXYz1XdAoBmPaz5XiM8aCswmY7bMT6at4HzksfCratg5ofK3FTsuvY18H9R",
  "key13": "57PnDX1LA4bTX1Xf2LMqpEUt1NUGS8BjcLgHopa2ZEahMQpxUvLindm4fijPgvH9bYCmhW5WhQ67ejxpFWS9Q9s9",
  "key14": "67HuKA8c7HbV2bPxq11RgjuktU8kEfA6FjoYg4JSTLagd2J5pPN4QXUmsimicYY8uSEFTfoViYMTtPZ9X7Xs7vex",
  "key15": "3S6hh6R66SAefK7HnQ4zZxo9sB5WZPsVjrKvwiUM4CzCSaLD2P2qeheLNvFA4VZN29H9qFPiGc9ArzHqLbWuBLRA",
  "key16": "5MMdgA4A7CrwdJ4k8416EaSjkcRKqbouesN6JMLTYRj855LvM31Awp9rPic5nwYXyDVyStN98VT192Qfq9KiE886",
  "key17": "2ZHySR5ebUzAA6D5xMzVxZSZDmsgw4BCw2pjbzV7X223ZPame1mKpZ4tyyAQrQFwHgqg9GyEckmyCGYELEatP757",
  "key18": "2XSuxPib4mWHPemGdsEWPmxpqh5oUJyzxj6BdS4d5uqEsPo2k45xpVTTwemzjQktE6Fq6nunNDB2hU3XyVp2CnwE",
  "key19": "4uk3tR8oDPjRvnL6ZnBzjRjBnhnDbDQTsYGtjEDcyd1NHPevBTKECcKHerbPuhpSMFovhDRggae9zB2JYtt1LijA",
  "key20": "44X295dQ6Lap22DMoaQzW4yZiGZhVcWicoghqyUq71Y5RFLZNrw72VMHhZxcsxNoUyFcj3NSiYuaHh7HCZAU4Xn1",
  "key21": "XiDWF7oYKqa78pez4zGDrcoDBGefLmk7s1Po1EVysAZ8ZsVy8GxV4ud4VBYpHbcbBjbLiMzPmk3nMFU3NqEd6wG",
  "key22": "2Jj2zHcXVYZ5HUHccbv9wjKovTmcSDEuKYDTrKYss1nr6ARjMmvpNLQckBd13T159fJkN9vEeMXv1GRi8XtPYL3z",
  "key23": "4vJcqrT2pxQRtvPmUrDcRLfhzwKXvWtxtubwYPVNCEnrCbdtReX4NRSaYitLFsXRzSuUS9c1KEqm7TJGPtjfWxti",
  "key24": "347rWuTy13MZZTuFT37zCssk3WohSzeLg7NEC4UnJ8j2NtumhFvJo58DZVszjda2CCWDy8CSJrDahDNPkFGfW93x",
  "key25": "57rjMsH4ySg8CBVREXnP9kPAkRndhrkgkXLyVkQhT33hLomntMyYj2diwf9SQGLsXHiLCLfZpdqc3iZeEiYStJq4",
  "key26": "21w7JnTwXe3Wmbe3goA5tJcCx31S1FYrqMZXLwgE9AJZ8NXFXXakzCJaLT1gF6ye3J4vHKKCzx4U7xz3GCnhL2JM"
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
