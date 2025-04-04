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
    "5SB4zZpmK83jfkB37XYGBmzco8KGtj2q4644cGcS4PdbBQfmwY16pd1Z4AtDj6uhwHwD7dmXqF39nmV4A73Cp7we"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tV1vutqdCFxnv54WxrWLqrDGEnDFpa755dyPxQ2Y3RsKrs4RZiSS3YTQ6DRWKYtNKF3LwfUvb7D5YvRwpEMsMbF",
  "key1": "gc1rFWYQHyBJ6VZHuH5hiwZNeJKZBFxErwyNEw7smccZ8d6YociLu7rQkruPdBGf6ewtgjVXK7HK7aEggWwV4Ws",
  "key2": "vmCuxWpiw3EHQ6ZwPw9qVDvwJ6SevXFD1ofyUgYKTLDmHaN5XNq7ytK3wbgU47h8FHqFa17dXonxLdKmf3W8kso",
  "key3": "qV68oYUs6xqo729TEMuU38PSpncvrbSnuzXMmJa4L8jd9Zre59MyRAFmbpUXzhp7hA344BdPpHav77PUrYzc5ph",
  "key4": "3mEmVmdWqwM61tDYaKFYi5fhNBf9eK4TBBkc2TctRM6A7XqYXw2UFYHKR33utypNj26XLZxTLJkRHWTfurdJaEda",
  "key5": "4hto4RxHBQeB4cVHSyhtxsqpDhpAcnss5poWAPyQXnWYiNvoucJbsRNbSqH1S1uHdWnaBaGTD55hHCM819HDEKZW",
  "key6": "HdjhcEWGzGHUTvYKHmMNLKabwNPTgjkbdHkug3nQD7Dq4bgAFPtmYYVR88e2A1BebjqEnA9ucHJ46kKfcx9pGgx",
  "key7": "4VF2dYixgvggDS2KxrLFFZs5nKmUL2AdPa4MvFMpWBC7unco8sPMskMv8SWwbDFhQv5W9eVqud2QXXw5SMeR47MZ",
  "key8": "5zKkG3NgknKN6sKRjYrN1rQ2ZT74K3FYCr1GzNzAuygyuRrEB9m11kHyL95BTfraQmaXHJ1QUDw6Z2yoSq6zvECX",
  "key9": "2ETFoMqspkH8wRQVsptuct6VMmwB9PRHkW4RAmsLrydPDfoToDsxFFUhzuxevJbN72AmW5gbFVTGWsHPFwy2LCDZ",
  "key10": "2cyvt6GYyPyQESjKfmo3Egngm9iMQjMkzqXsA4MLkyV5eNF1cJoGB7z5R63UL7Xvx9NovbNAqnFMjoodDoHq8fgk",
  "key11": "Dg6URynjXmfFdyJpqnpb2myKDNDeGf9ekWcjiVtV2xxSdjUbbDt3mgDW8BjXhaj1pgutUooLuGnNLH73q5mjFWW",
  "key12": "5QoJ2cQ7KATBrUJwaJZLVHDsUHMkPpk8ZHtXsiTbNLuYcj5UZfm3sYaLW77GsaHTP5yYGRf5vM6Bm1BSzWrn4r8D",
  "key13": "49XNa8zcvFE8zv5kJBMRv4JgLXygetHhpn7CEb4XPYfm327r6k6YktsnnB4WvQ4T6G71gaZRLa8qdM8DcX2jW8yG",
  "key14": "2JgaewtCnTUtSnQozVA5wGaUuZpzBCC4v5FjBeYyoepaBivMFha8oW8oNTtRu4SNkBZ1RtvqrQ9MHt3kUH1P4YRH",
  "key15": "uh3FwbcnwELqexExk5qzJFUtLE4obUUSfW8qmF2KQH1p9RB7x3gHmbEHXVzEvujdNrrdyi5k69zN565ZqAqtq6s",
  "key16": "43gfaVmzne52qW1QVtF42sKbmg3byXZAv9hw5UmcXMibH2ETtVWARgJJCFtAD1E4KeSFrrjGgx1dkCZcdKjFauce",
  "key17": "oLFDrhAv3GoH6kXyK3zdqjUu4N64m6jGXtLNnRBZBiL3TEb7mqYyRRyHV4CCaiJQZxgpkHKQS4hhcBMgB2Wz62Z",
  "key18": "3Y5CPNXFnuw82LvJUFV51fXg9R4Jkg6DLfXgLCVUeb4M3C2iy5vp4h6Hk6CZhGqwdgK7jKBAc1dC6oSEMPrVnY7Z",
  "key19": "5vfw9jUMFJAD8XRNBWxgVPht6ndHq2BZ2NBf71L6f7okELp5fXjhksbscsowzQkxH8d2AZTU4qe36xe8sYBWJdXJ",
  "key20": "BuhTJAhweYnuZRhQzNzdDi9owBBMUTx6RnuWWB9t2sXCW2nY4yYZonj5DgJYzqCwuUAkUWzDWvLPdnDFkYvQjEw",
  "key21": "3bnJWxZ8Lp21aruqJsGciFhsKR4FZfETJ59Tfi8bnQQ9NDiepWDEqNNyeEdFQHFT5JvTLQnT5HLnzHHhYY6wPPBi",
  "key22": "3Hymc8vVioE7dBNs4wCLexVWKimGML6JDKEHqxSErcFBcrE3mRruiZrh2f13Yr1PWGho3XVfFG2RMiFRtswZTAJg",
  "key23": "2v615L3674ssxKurnrVVhLWi8u9reFP3gioWHFzPT8m94fq5HnQi6xzHUqG5Y1AghPrkik2QvoZVvzQDQBoj1Sa9",
  "key24": "2CJYSJxyPhb5NNHmE7QkHgsDsiLA8VBDJrkZgS4atnJk1Cftmq9p3CK5b4Q8fm6T769RuNgMo2w4P2n5BT5wKbMf",
  "key25": "3aRy7pzmk6Q86ethjZmMqRh7a3b8CJobKnYtoaznDhNdWP48mw5To97r5arkVcYfoSP4SRqQqiScm2FysvrGModR",
  "key26": "2C8Za7jWEMHHPJ2BdbnZPmfNjaUj4ZjsBnHqTnYgSpbRJuMGBLyf8czXUU85j3525tSWJnjbhFaVRDxJvJZCWNsd",
  "key27": "4U3xYQVYm8kXr5HE2dkJpomgpfte6U7J2V6qkQzcgBuKWQH6hCwLcwU6qjsVciEmTHSYsJwdQnKZstePnkdxB5iB",
  "key28": "2PHpwtmqXdY3jGxghbdFpWFoTNgE6odWNdQybS6g7JHsr6iWeVpHn36hmfxjzQbhwdWcY1t9KabZZqBj7h8ZMnUu",
  "key29": "5417F7qPpeLoTWuTjZdey8ryT2bZoHVJYoBhRoh5T2yuvS5DoC5XjQj6BkFs4cq6KB5GHUqdp2b9QgDtXc9A3z2H",
  "key30": "2ReEh829VFgVpmMxjaRbApA1a3qnbw1D2Q8UR6cWQme4rZHHU2oF7UK8SHPgud9SjSWzKJQLtYmTDBDDm3fA3ud6",
  "key31": "5k43zUJvtrmLUrS5MAmeNUJdLvD4UQwHugGVEF4bzcUyf7TsaewRmNS2ad1nqJMnj3k6oSr76GAEMMXYEDxh1ozt"
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
