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
    "2wXoWBrUSpnRyuLLZQdsydHicXg3361jBP1WhX6d8RDfwmWYyM7SEb2SWriHSPWMo6odUibYXQR8vwJvfdZxAJJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39wuAxS5VaMKrX1Us6GSnDpTvheoqhH1qhnZSAbpg8ag4LjYZbuRPUtuvav65cD7pWVYrjQz3NAeQg34tAw7FqGA",
  "key1": "3ToahAFMNvv1yxAxcGSyS1Rw5ydEUUHeETcR9op1Vb9WnCzhU7q2Qry8f3Kqaj8n5cPbFhvvwUuJbDMQ8W18adH9",
  "key2": "BXcJcfbSXxaujwNFqHJrvNM9SrT7gwKEMhYATDoZ3eNniLu8SnXT5vbJwowxepMK1kephUTBKiGJfdSUbG1yKKy",
  "key3": "3kkTNtfutgbHWYcL1wnwW1KKJ8tGwN6JKJ2G9YGnmzFfAVNpz7UbentZKddTsqpQFb8oahYQsyMtFVR2BeKNhFfK",
  "key4": "2C7MVrH1vtnQpEmLfcErxnYhVXNtYQRmYHHacxu5ykWGJKEd9Be5kth3f7T6Zme2g3GBqMmfNhzyM7JKBBGUHuz3",
  "key5": "56BRXt5k17P83kibBVK12gA283FyDFUXsHorWJa7PLhMZSxvohgraioKfGbWB6qxm2DT74N9bMBu3frms9tpYd7E",
  "key6": "4hnbSzvFSdPDLE5J4LXrUKGauJGzUpsaTiro784dKsvXSd2XoiD6BzzALime5kK4L4yD53QN2TDGQPNRVjFJHzCW",
  "key7": "44DJ3QDrURSTESKCLCQdJ7xL6vCm3cTKHALWs6f5W8UBkTR53vWKtK5Tp6apfeNjNLXre1ZSM1kZQbYt1wGxwaNs",
  "key8": "33HYQ1XQJ42DvWvWFkPXKFHgtv3KYaMDXAm1XxuZPsxGPapX4LP2DPJm1E3wskMMMf9YvJE4oKLGNe4g2n76oqV7",
  "key9": "4h84Yoo8Yc9yR1RvJyG1jx9dZA93hG5mxinfMHjyGaXHG5HcmfHpMqwZpwMHaq61VgBX8LpFwf1PhXYLCgPCeumq",
  "key10": "4s69wTHFWLa7hSZweTAJUayg5qYioyZJ9q4p3nLmTpy7X5WQEzovodTHBQV25JFWUGcLCmnk83tbqwuwHpnUrKiS",
  "key11": "4uUocgnVxnTi5NszWfp4phukZHxJaM9dSmGtER5CtYqBTCDu1YHLMtfM795rahXATfMztMh5TA59WJL8cGEUmhyW",
  "key12": "4emWKAecvWNQV4NMSJrJQ7gTDpHTpbEEX9SUU5RpGKpjoamSZaqk9Uh69dr3xKMYL6J7aopY7m2mdxe2pyAkVAry",
  "key13": "2Ub6NAWoBvKPAzM9VUG5jbcA5sAMTJDKu5gkyJkcExwsmN3PqaMskefAVDZmArL7bqRsW95GQyyErQfmPbNABiHy",
  "key14": "615hGkrUrJcLFtn3dmKzpm7rQDHDY31EzJo3wxtDR2oHaCmJy6i2aABaNBypnZfPwM3aSTiXsBzHquuQT2o1WsgQ",
  "key15": "3CXmNeLh81AnWxXFtsJxrAHbNRTkX7KVggrvNV7zvfpfWoskWiGZ59M7PS4DjGdfzTBKZbeecrUiZjLponBPHQcE",
  "key16": "5MpTJHoS4o8SANDfCWCu6RjK8RKgKaoaictvWvSw1MYre7koXgo1Kk92hEoiS7eutyt3A8Ytet1M3TqRmrWRaZ1k",
  "key17": "3D83o52XZNrqJEiQ9GJNKMz26DmrPt6UvxDFZJwk47QzuQVCzNzdKPSi6R9xdSkV9jVGmPaw39MRm5gGajR92v3U",
  "key18": "3A8gQy77dDh7Jru6DCpzw9z6VCr79akxMAbv7hfCHGh1gRF5idBSHgdK1Ff5srCnZzuwuJkdpdBmJYEefxKzMP7h",
  "key19": "3Z9aiGhPyKH9uuA2yZNwCZqHXYKxdqDAkJbUwduorSEZPTxw3SJEW9qaoyUnmBPNc6rx4b1UL5qwe2J8fGjUejnb",
  "key20": "5LfehFb3dpR3Y8kdPPbeJZJ6EmeGSnuBfL3z8mMdFYaRNZfGDTCu7jdjfqH3q3H3cfMdcBqPHJvgS5NcZ7oWNDgc",
  "key21": "3x29xjJspLuzT5V4N5U5mzHqMmf4pP5qFVmo4tefjqMaD7qXjeXp3C5Psi9M4NQKgWeyzpZZe3HfVaD3zD3apx4h",
  "key22": "5YDybQFeBHrxLfpoU6SWYFZDbUtfZzLVG4uJnaF8JBmwTgGURCR9TFY6nJQGdwFY5Vh1oN1oBmn6S6iM6Vd3B5Qm",
  "key23": "9wxcCRCVwkBoSqKYQr6cEppmnToGt5eqU7bkvStcgL6fRjziLnKFcTPAcnE2LWq2NdDc4CnenXGfEDoWjAgL8gZ",
  "key24": "2KPACBKVTHJohKeQZdS73NBCR4ZMfEpnddfbD2QcvJLxLZVAd4xsbrPhWVYFN1vHqUsLQuX733pDqTZYWmmzc7VM",
  "key25": "57HY2FEAQkM25nGceNd5UxKAm2JJcZkfmXuYfMYvk1v97xbTbQQ5svoKUfMN84tFobE6gCagH6PFfiaFnivZ5JCZ",
  "key26": "2XBHBmbWyHF4XWXpbNfRu2JMMwXPb6veg7D3sDyjBmD9xN3huiqTggh6rbYyDzyR2Ae8hwaWPDTXXCdb7MrHY4GJ",
  "key27": "4QQcxH74F7WCM59ojC86H6XYnhMoUc7xLsY49gKyPa6mYEdrDy4Y9H7x9NfKN5MNoYQewzCqjQRPd5gitdgZUJpy",
  "key28": "4DezhBkDZN8S9p4raJUWNYY8tv3b1NJKFnKsQt9R5NhCp252zGHCD6RpQ3BHfjQYNpn4JJfCGE2BNruTojt1XjgA",
  "key29": "2ZEF26ogWVwfg91GyWv3NDiqjTk7RVp7y15zacGnFNSazGPBp1zRfAkAPb5TGdYGX5pJYooPiAszdMQyqJZiiqKY",
  "key30": "oBv1UmvZuVivZzEtTTSE4TL5VUcJ842hMbTZpuzR82T57tNQGvGwCMArNa6JWm1hopgXcZDV1ymZDjhTww9DdsW",
  "key31": "54dHEU2hzMeFUQfJ7bjjtd7VjzN67YDAYBbmc81spMtz8ygWPLqRz7sB5qQjncFAeGqy3zxQdN7XcaRim9cUDhTq",
  "key32": "3UCgdPRLL6NmmN7eKeWM58niYV7ugAoaRMVNoJqGswia2mYJwffbV1UESGbVAeBm6iqxSvZMryqYQsJ2WPC2KTWw",
  "key33": "3jZh1N4HLCdGKBP9waLNugT5iqiMYGnyQwgcVCeAifHp8PJeP6CyAcQjFt8BbwSsBHUpB15iJkarU24bE7Y8V9Ec",
  "key34": "2y151RtRt7wXyVZBRdp7P2drHS85d7NM8ga5vTDba6wx11hXnuaDeqceH4rWnT3EWViYswUhoG814EeXWUaxiaMJ",
  "key35": "49Wwa8jjXxXtvAPCr35EBx363g4vmNVkFG3hzFGf3LMiteVvfKxhL2fFnjgB9gUcAaCJjhkSfcxqFNz3JesqMRGY",
  "key36": "64oLZ9uqB1P8Kw88SP9E6u579J8tt8aJxES8jhHGSKSF6HB5YmkFNNFgN3KPLGN3USP95UfaqeMmKGZBp5KQi22v",
  "key37": "yYENeoWoz5pXkAiqozGXnqMmVPXqbJE79ksy1a7rmrDYQwmKV4XdRM68aU4zvE6NY9VF9Q7fWQCTfVhDaUScE3n",
  "key38": "2ybEyUQ8VtCJULmvVmk6HyFP9KeTU8CDSHgxZWFiTCwTiHUDmWC8vtbN3JLxc1WS2NypnwpGPkXQzMuLWR1P4VTt",
  "key39": "5KdnJUukfg3GbDnebe6o8sKTRbbPVuDnLfLZ8oaDa6HikSAMiUBgiMscDFwvVxmzrMdb9KHaFgwx8k81WeNEEF5m",
  "key40": "54bCkLGu6W2h1g4NbfSk11tj8kW5xkFrBpDb1y7mnUNmBbj37jsQoymUBqWPRC4VNaXLrsTDpwsEeUcDjaNBsMTe",
  "key41": "2wXwJ9qvfcf314sR2gjbdeAhu82jYeRnd1b293qRTTE4ZwqYAxNcMC37VuV5394mMfzGaoFWPjtDs6GEqncUYXmG"
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
