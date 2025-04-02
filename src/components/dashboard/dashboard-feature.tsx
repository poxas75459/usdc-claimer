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
    "1TmLur2uBczvDkmBz7p6Dx9tCkKy9sfQR8Hngy1VpYBF8LQsfutffk7DGFbr142c6p1p856cVB81tKYhbnyy5KF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u32s8rZWigyF29ZB9M3iWeJgK7vNxkTs2P7tRbDXbKJ4suLNJ2umBwt6HywAeeyHJQS5sHZkzcMYDPqX1kfBRCS",
  "key1": "5vS9r6BGLHarYqMbWwaQiSSngrxfkwASVLpNyrc1vSkLNTXbx7XHsHd6KXfX9BnwKxYJnsUQyrMCbExWH9YX2Nkz",
  "key2": "2c4HXTzkfwJs2wazhUXm11PWuTJbZ1qw6ZvTL8Qyx617nMMQtm6QRmcbRA2dwzWy3s8caUgAMEtS6zp9Zf48Qp4f",
  "key3": "43dfonMrwUqA5dDF6Hc8CQiCjjZUprj2D1sR8kN3xpEMEY6ynFvB12D3bP9dQwNXBs2uYvsnrayUE523eZL6pmJR",
  "key4": "5Z4yNDKfM9hdosMiAHJDrBV6J5iigviXey9LxnEkeWmZzeH8RY4oKGrgWnfW3DFMa77kmRSY3xz3ozoAd4xxYBte",
  "key5": "38sWLdhi4m7Kbkzbyc9nDyYpxekgV5xXkoE1NeTBrCuz6pfjgSMx8Qf1pcapQj6wyEEsRmKA4voKCY4a6RJwnaQi",
  "key6": "2NJSM7tHG3EdCeJxKx25HEV5t9Lhc4ZtmcuZieq2a6XE5Dm3MTLH7MjP4tyoWAqYFMn2upKeWMkUBjMjXHD5Harz",
  "key7": "2tbHWnjjrj2XbTpooCLHZ5Hcd1hkLhL7Pzay88PbBvQTzNFtr892XQHLWrMxn9SfnRbF9cdCSp5K8Vq3XBdhxYst",
  "key8": "Tj8xdtS5LKTHyi2m23cWbiamCjGhvZTjLLmoLw3WuTTDyY4vw9iL3zhxKHfMHsE8Pew5gUGuTKsp3xM9q2KkiaB",
  "key9": "3S33ZPSi5ELgHtTYVLrYpbqy51twLAnLC5Fqor39MExVmvm4DGsU1WeLVcB6Gwm5yudeFKfMVcmTu9X9JkxhuLSP",
  "key10": "636tjspDmtETMqQ7BabsPt3qSjBKaDNS1kryn9WJ66QH2jG23DvgEetK9y8cPzJrt7ijQEpGsTEy7ogxaDHsGpXc",
  "key11": "4XdTj4X3t5aqy38ih8yhGRRYu1Sppf1cGYYySFMtXBktBhToasHpypmnaHemYk3itm4SUtJo9GSt1XTWqYm52x7N",
  "key12": "35bBNZwvMac4gKXUq1PoR3CRjZJAWn4Bk4ckZ3fnPiKo5Rm4AU5GdZTzTD5uArV4jDvpu66X9RMadUYRdN5AqxfP",
  "key13": "5HnN7fPVPb7QSi3PFAwnJMQowT3sLDLesgek1QhZc338QfoToHHB8YpaxAbPe98vmaTNFCiLtup4oiQeejNY1ngT",
  "key14": "jxrHFE9HWGJdM8yPv5mGjkdzANqVvQwgZndRANS6wZnvouRjcEeCDeSD6MUVegyFYVsjTvcxpzwHRJN8mCadK25",
  "key15": "4s7Js5dWe8dGETUGSrefMtgniPm6578MfH9uMfYVCjkogdz9q6Vz9Z9KCzqMs8b9scKu2D3RveLkKeKv6Zmykn9u",
  "key16": "4n7UE8gsJ4e5CJ3DDRYj5BBM67Eh852MzYxc3cKz2fxASa8dSFEKkAoTUYQHzhDnGtyrTwV5ChERwYuNWTGKQ8TS",
  "key17": "5qw9c9DRqWocQJ2M7k2tGYAAwCnFxvAr7WABZCr7xmeYver5R1Yw86oTApYdPMQRYcQAg2NytjjHQV7jDVNvoFtj",
  "key18": "2Bv3gpJvdZmzadCdidJLN2ApYDztvup344brNU1zaFkvFZ2aASp57HVQWw2aN8qvfz8EKSPXryn9ubsrjYyHQj3L",
  "key19": "64Ah6XkN9ypsfnrXypF62h2uz4oLCfadzGPB3PEcyLQJzemvpTULFkc4LCMsNp8Kv7vmVH9omWT9GZYDuofnA3Y8",
  "key20": "anDtVWhtvMEDHUtSc5L3X95Mdyrv8yBAFSV5ZfRm9J55xqQGacQbEzuY5yH3U3CLvmnfEZBtLd8ae51V38YuwcC",
  "key21": "5PqSb2jhDfi5Ufd9bVs9D8HepMKqyHdNaA9jhqkWyzTxVaA1kDqEHVhvS7ew14ifJtDiA3jGGqHPn3RGALVp1Y1Z",
  "key22": "2qTfkzBtrjwrZMtqCfFrwXP6qyGYKjhZ7jWGhJrmQThm4JTzXNYiVrwdNSwTwP7uthduxTciT23APTETFq6gB39L",
  "key23": "3L78Gwp6WLfEoNy6dwKYLQTFJR4BJB9zhAYJpH93a1wmaLKoV77y3eWby1XJGypGJ6cCpE1YxPYSGZLeJTncEqUd",
  "key24": "5yx4GtRmjzvQPB6TzNkyZzDB3xHgPqkJsQFjGqzpBmeujxJqxAUZDZSPMjmdwB392D9hsUX1pf5t1q48neqoz6Qx",
  "key25": "sLH3XGbBHaftLhhx8Bqq8ueMpD5YW8p11iVTTdgoVjd2H5qRPxvtmNymE9wKiPtgQJPaTM6wpmt7cU6E3xLER5R",
  "key26": "53AvwFBuXyNTzn6wcuTx4z1vA57mT178wGd8Jwn9vFZrXDPXuKXzwxFHmiUNC6wBsEh9aKVRHrZ3SgJnEFnoCmrh",
  "key27": "cJbuyfWHwqQrGWs8UmB8pimf5vjrLD5NLrYpH6aCKMZfyZ2yEUSNfBPXqCFd9XmfY6HnToovfsB6dN8iiiuXn96",
  "key28": "5DftPxvbVDmB8jmQJDfMbzpGEQggXg9uJ5HD2noSUYeJoC5z5MBGis5bzB4GMithKuWY9Hxmzxtm9Mk2fDLG7f7K",
  "key29": "35ugu6myXzx6mnLDvR4reYbuZwYdCdZcau4yAr3v2RQrkKaMxyStEWK8L7LSficLV1S9UC4ehQ6c2EuDhiAfuLYr",
  "key30": "415pVkntnze4BDecP3VTbqb6L5xXwqgsCYe5tKiFQNWwnjazKYKhMUcXpdmPkHZcsGjDvzDsfo332M5PuC5BNLyT"
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
