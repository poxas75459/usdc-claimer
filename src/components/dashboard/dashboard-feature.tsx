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
    "GrfQWJAGHx8VvcUzJWKFQYWnp6SQ6x1XSQ769cNAZtfvqQTR9bXQPFsUhxCgFAuWmkAc8QUHSvJPS85hiaHtBkf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rDRHVx7MugU6G4apvbYtbNcGwgh9jCVgeXUExDovx3BS8o6YGzonENcPUNJdP3ybEpYd8tMK9EZYN9nPTKQ9cL3",
  "key1": "3WwJWdAVSmCdeYGucPBEQrYvnR23Fz4g1ZnFdcYL7JS2vXWXm1stai2v3tJkBxnJTRAZcJ512RTc2GVP9eraFofU",
  "key2": "2fPxPTnAXy1AfMCdURWjH5wmPCHmCnyyNKMLoiBoZBXWzoDYmFHrSD4tvkhmnT3d7HGhyE6VPhESZFsNwSAR2Tse",
  "key3": "4VH5zHV8pwm6e59eRo33WcTd24AG15emRK71X317Kwx4Z7FxfXZt6UgpQk2a3NJdodSRkYck7c4rRJY7ykMjquFL",
  "key4": "5ZLGr6itwKbo25USanif2gTByFmWLYpb4SzJN2DQy8pJhipwZnMvSg8oLA96igDmcoZtyt4EtMBGtJAj4EpqwdGd",
  "key5": "429MAeLM89Xdvi3v1uAWhTiDzgG3JeqKKVgkeBMiA5omH1QRjoBPGAtGXc2drYNK73tbwLKWvooFgRSaAuf1kg45",
  "key6": "YAZrPxiUwnu5jAdzaYUejWLvhSoqwFhvY7XFwTM6Am2urz4MMfXxnQUUoskQRFWUuqkbRvC72UT8npgg7gCRpVh",
  "key7": "67C8qRkZkJn3Mk7uS8Xf2qe8nrXSfw9QqR5u6LaGdhBERj33xuPdnc97HpH8U5QGmH9M1gJUpSoY9gtaTU9h8xiB",
  "key8": "2JBAMbu6v9JcWeBGURtqJJYYxKDxHZxmEyNHhNCVv65c67oBKFm2wDuWDrpyFpyHWMmxZAcqokmCjvr8PaCkaNgp",
  "key9": "62a1uo4VNjj9tryLbqoWqhK1ND9FJQeMNo2tTfucSNVYevPtgsPG9emVoZDXSvE3p6woFHodXHFJEPs2aFrtsa6r",
  "key10": "3kXUiqjh33EZVpkM1Bov2MmJM6x6PiJeDqdMKw9g88ckTz2rTSNnC9jo2RkPfSZoiJ8DK8tNcTsERBNAEfUNffkG",
  "key11": "5fEpzXDJE9tvY3D42tMZgDcLWJhu4ACAytVLA34ViyvDb9Svg9RuzwKxFmUin8EQ7WqYr37E7RcgpeyN2NK8Hrew",
  "key12": "3nhCnB2CA9vYNthMWdAeyuUGhcxBzeuFz5Pn3N2H24yeX3fSPXgd7uQrHYiZe6fUVojtK6uW7jmbYt1XnmnLqnFo",
  "key13": "5GrfVtc7TkL7GmhDvD4thgi2TyQFcs5B2fcwzZXA2en5VyXnK5Lo4b3UaZ9m8pxzro4dk9s7xNjiPtGQyN5i8XLw",
  "key14": "3f45WdNwM4L43358obibA9CUb1CzZ8M3b6bx4QJbGnoVqkLVQ2R3q61D5jjy6YNcacH1HDLtMmu2Atb3R9zNKjjp",
  "key15": "41cBnbEXAiUaoZz54nUzf38acMHAjQuCBWkxPJNNj44d6X8nsxJScXbGyKQrMin8xK7tEEpa8wXg5hVv1oe3orNV",
  "key16": "2RTp4FQ7XZChJcLPKVp7fhsVCecjxJMvFsFP1U3hfEUi7cjxG5ptzFaueLJdQB2FcL6MwD1f1YaxV87BbLLy6j9",
  "key17": "2hS1UQLGUJvnQx3hPHsqkpQywKYgvHVWv5naGH2mcxuJtqe9sAPiRX272JvPc2WzpZpkFMWavPN2JjuJdz4XQ86j",
  "key18": "QUZJvFtDgnmPYwUm95truivRHhDDkpHPQ4LYLJnVpXCk5tNry8vuy8w1n2KWie3wg7J3fA5rP7ne5VLfLYU2WPG",
  "key19": "6Q4wNWeDZuqNEjaqmzcvsu694m4MEwb82xWpoeM5gyhYTcyerCzxofFxnqzY8FJVr5rYcmTg62hvHCiwYG8LfbA",
  "key20": "zTfgLgLb9U1sv9ma6L9AKqTmNawX2JQwm2nntRUioHrG9HdxCCiuAKNVUaq8vxqnnWGf4wkB7AvcR8LZhRFwSKP",
  "key21": "5xuDaL2R6iwL4aV2YXPfEAYKNf3xngHkMYLjbUpmzGUW6VEdaG6zMm4KcDd9azJXtqnkSdpVxswsES16i7vH3Kft",
  "key22": "5Njpxkxcxpt7vL97XqJGXsE6NdDBSgY4ZRDNGWn33WKUnVyxXfkPmpsAwTfjSEY6FFb1hJJhicLBXTCcaTvWkD6D",
  "key23": "Z8F96beoVZcntuTCdu7KVav2fDSzKQcbhtBpPD9rPtwHt2qjy2QA1rDT5DpGM4uz7N9rmgAWoDkgyxwYUVd8vCT",
  "key24": "2X4XqKrycruU8PaFk44bWoG3fDPu7zw1opAuWYjJjTcsRZubPfgLp6wn7DKJH2bRHu8gE3RoAFaU4ML2ugQBZsx",
  "key25": "9bctkJMVJeM78VprsqHodeN8y5SGbXXAVws3cXh6N12MdWAD79hpzTqTS2TnCeQLA6yoj5MQYUwJBMK6hMVdfir",
  "key26": "4Gzp9T1yePbS9EHQFGzXg7tuRbvtvR1CZmb4vDCmej41HLdNC5ju5AyGFv2fwAAm6dCvjLi5JWnHSYFB76Pt6ZxC",
  "key27": "5FNm6YPkSdhUmvsx1D3g1AJAfpRkxkM6iK3KMsRa7yauaxui4hNHWcNhN9DtmSaYwkPhFFZNQU61eSocHa4yXTej",
  "key28": "5D4SUPoGuYcYwy5BwygrZKGziCKYDDtf4thCUjGMRgiJ1Y5LcAURCRXXbyFCZ1db6LqtPf9jNNqcszzweayscptg",
  "key29": "3hfjXUxSDJwmFYt4YEVfbDK6vS8ee2m1TskDciFy8sUHJJhvQStLmHfmTSoSqEHnJHaPVdSyeQL9PdPSHAjNDqtW",
  "key30": "5LxaT7e23Z7BZVTxtPz1WnH9KYTSVbxiN2RgDweoTUGxqUAVuH12bWWc7VzTN6qYqJo6XpFLLjCtVUZnp1d3817D"
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
