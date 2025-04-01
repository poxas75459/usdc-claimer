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
    "h5sMUa92XW3JpvmZkQC5QnUnbzKRbbFWeaEzNpVzRStWn9YYeVeQ3jmFicj8dHzEupCJHh9xYm7wr2iUgsyVesd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vUsXG936qGLCfpFg2g6SKgs7ViMMaZ4Ph31wZwzPneu91i4boazW8MGLWFxWpjDqfbbiRF3EdHucBqgc7s22LDu",
  "key1": "3T79bY7QuTnnNdyXMfMW4c4QC5ajRXsDPktFqG6pDTAnLUZfBqicpHjfF5rR5BELn3PZFxf9rPbsakoD8eCW4Se",
  "key2": "21wy5EwH5JAizsDfSBAPKVfzLCrnbKXzxciCT68QZKiDarVKLx4m63qhJ316Z1sKmu4K5Lstk8KbGutjETceTBHq",
  "key3": "2VeKxdpH2mR2MrHXKdznzvc8PYCPpVwWk4nQdEezs3xtXSq9guzMdcmbqcJ9fH1YKH9agVQzLG2pNTKNLhZ2mBWo",
  "key4": "4GcWGp97hcBegBEVyCLJ6fj2Hm9WXCBsUKUTvZorVbEWj8EUDdUK8inzZijesXzA5smZeG5fx8oMNN8VrfKEeZqc",
  "key5": "3cz9tfkP8RMsw9iqPBcobP1YzozLffxCmwdbSUgyWU71nMhM5myQyDSXYkVguatv5zwEvzwNdipCGiWWFRETKVsj",
  "key6": "5Z1xMfpc4pCLYMDDz2V8t6EzXgb3pGJWYcYV4RSM7315u68QZoS2g9cQZn3u9HvFnXHG6PwQgGfdqpjaMGkbPAjb",
  "key7": "2Hrdd66G4uxFSL31BV4amNCG97JAMLGLkVSFpNXKKSk7XDXroq2DSPqS86bBe99wyYnoSEW3J5fgqy9A5sszCMto",
  "key8": "3xCbFtrTVjPFp4VNjXdoTBdSAAUd8nXDGDT5xzcu16oGVzxJMHj1rETTSXHV7a65pyZcJS3uQ9CK2a1yUBuAAU4r",
  "key9": "651igwr3SnzdmW62itgVs2CY6vGk4F23VZmnX1mM1hNq6ouLEH4uavvyo7YHmMT49odQa7bxyzByKzLHjVngQFnm",
  "key10": "4fjVbqf2zQdKdoeCuMJDfihBrqPRQ7Cbk7isYcrKPazj5anKfRXcuvErNoZTHJ9iRwjf6BTBLN1vnN7ciQBUqZk5",
  "key11": "65Yi6LBQFFgBKWaL6XDZP4tcmeX7Z1F7e15bUGBZUzdcnBDYvHJwMrae4GJquCnnqv88QuHy8ChdvQxv48qXEjoo",
  "key12": "54E1c9HuiJgBExsNJJu4iZPdwHdiWXmtFuf47xEXAnnmxYzuZeKWgfatAg3hAVWaXGmPVWd3pvVXSkQTLzjmYTGe",
  "key13": "5NRVAX4nSpmtoGSyy5XEGbHXANg4DUuB8ptb4wxGYED7FKmgUBNNHF29gR2Md6ETNYTF8VZMFz8kdPW7rcM2N6FT",
  "key14": "2QVQMHofjxDsrfZm8sKwL8tsHyuP3Xo1PYuVd2WGaDABKsZyDb8ch9v7ZVaScXU3Q45fhcs3Y3XnSiCB7grkmNGG",
  "key15": "4EReRPD35XzSeV8TS9jYqcSqrfoRbKojamK7jBZAQCSa5dwVqqtmK9moDvZ77N9rRLFeisibekQoRrZt4JXqtvYc",
  "key16": "4sB2vp6S5k2o5F3oy1k58AXSaLYsitp7KjwFVKuubsJ4kMJWZsDuC92UzSm2sLAZPmUMDU41XBP6R4ArJazFkTr1",
  "key17": "2GVXP3kucSyDWgyaKNhivSj3sf7RxSCYV8QDBnbvcVSzKjFui4UoZqcsAxhB3wrgdNJWAgJDjScjV2PdPWnBVyJE",
  "key18": "3hJxebK3aASmUYfpxV8y5QU8aiaKW12cDzH6e4i1Ph2aCbFB7wAFEgUvXbGeWDQ3YwvV8AGea61V2JV43skhhLb2",
  "key19": "27otTWT1CM9E3KAizdpsz6xdukVZH8KjkuMLGHRiqEWQXjL45Pcj6guEbDYbW6zkg2YkP5LCCNEQ9hs5n43VFdkG",
  "key20": "2KLdCMuk3AtCvKqejarihRUbP8xis9j8hG89szxkiwcLopsK5nY5kKZSmY3BoVm8rhNCLFyQ4ZAzkFU1SLiRiBBH",
  "key21": "3YMQT8jGkDrCFJn2JZdi4RXL5Uj13wJmRdkivt5fLizoZbR3rQ32ujeh3SnNpVf4cB24bmhHKmzjj5gFoBSFkHdL",
  "key22": "2FhxNHyNy3bgdJ19XeaBqxRp37YmKk5KeN2KATTAHFsKp928GW72Fh8y1KbcT8a384ALH5kEjtP6GQMWEUkKGT8U",
  "key23": "3KpbMTEcSaie22yaVrU8ovogWbF7UmEffKJkdJMNoGsRaCqE25UT7D794hL8ZRuMAVZeRxwJ3cGNoT1KtR7XEso3",
  "key24": "5c3T8715ofPWgvam2cr77GDYcicwFsvjM9NBrc8wE4xUAMgYJPYDtbV1JqJB6ttyYordETqqzTxnB92uGb6MGogg",
  "key25": "3Jaci1bvjbxp36U6Mg2BRDVdd1L9o9uVUCWjgjHpHNT8UM1ChnxJdx4JYNoYXp8ovviDJoFdaGtXLNuW9FoU9zrn",
  "key26": "5FyErDCnC5CbrTfRqv8EdyBqnQ3mATAq2KQbj6twhKDZxWxmwNnEFtpjh8X8DvxYEYyhAaw3hoqdGg3KEqgSPYbn"
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
