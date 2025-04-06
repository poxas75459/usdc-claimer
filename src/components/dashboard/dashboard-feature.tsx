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
    "22XrvLr4raFsnQUqKNgX6mMdn6mUfakvNmNNvEvv5BxGw8VxyTSTYJT7FGAYy3oqWbSn4KYyTs1EBb5h4Y7w2pbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hV2B3twe8HnWi5nxiaXUF8f9hL2NpixeG2QKXiBq3GK8zdohnKMkGb3T358TTtpXDvPMrQ8wZk6ks8fsfmmyqPD",
  "key1": "2uYKosp2XiLwYAtS2YNiEyKUrxqDDdgWyt5PAhNsWrvpteAjGyQQzBrLaU21u9Y6mxBMFk5DA35t1e8QKgDS7gKG",
  "key2": "4ygb7DdhFnaGocranusKw8MQb7QdPmqcZides3XV1Pns9uZcnxUbzp12Nri3LBzwNYSehLWA9VnXe9mhkwuK9pEy",
  "key3": "2JNWZBimfyhXuyKP7E6EZ1mH2pQCEN7DgUwPTLtkxiPrdxwfGchHuPiT2LverbZZyRDu2sSKVthvafz75vbfgj4U",
  "key4": "4dHSUSGBciWjZgC749gHZn51qTa1ouBaY9KQXevhFnYA98yxeYtmPMbsYE5XTNLR9XXbS3aZb5q9F4Gego69NG1u",
  "key5": "28VbcjUkmuBtUeL4UWNr5QUU5goohP99WExcEhM6RUqHu6jKszCwZz7UfQ5BmZ6jfkzc68KLcYmEUYo9jwYuTEnh",
  "key6": "4CQWZjJDUWMBH5qCT9waUnBUj3SzyaDtbbd1SfQRcMkPqMC8mHnhFZE7LULS2HfohCqNTtVXEcVwrmyJmsjCBFd1",
  "key7": "22SP9UjiCF6Czgu54H2aMce93rJ5JBWt93GsfrTMYmgfCJWYPjPvGREGTxYzy7kdz3amNvDaMyYUTMzzgi9qrBKX",
  "key8": "2w57vVKVTz95WjGvdTyPv9WB8A2dtUFw4vH4aGqxXFfAuw25kDU6EYgRPqfyKcs7rTcvjFAn8j4uMXjepDxpsD8S",
  "key9": "Cb52xNpurwKcugSpDJXfKNH3bPN11RRj5zxAKiEVKAe42s4VSLJpxg9axmjpTZDVHV4tFBdkXTF2bePGYLkcMBo",
  "key10": "55JJPjM1k7Bp1iHCUXM2maRZ2DNFNKrdhRbExB9g62yRoBLnjN23pY9ftKjdi8ZiawQYjNE2wRikyLFrQnwzVHPJ",
  "key11": "51BzAbTLdEM4URQNH9ztgjvUV579wNattnDC749PZWFbq7y9mk653ixW8qhGd1QUm2dpLfb2B1kzpZFS6iBjjm2k",
  "key12": "2nwW1QrTMNxoAFTmZbGr61E88SrYUXmtkfZy1jFr3NMQeJMp6XBBsBt75PwL4ckjgmFP98hkVCbDmzA4xgLws78x",
  "key13": "4NyL3PYuThXURyzt96z9WFWS4kEFbBeTAXzH44Z3ZBatAriRUEHqwoEbYDate4fy75ckg5N3GcvxiC1w2PVzwkkg",
  "key14": "3k53jVdLnJbqXiNScnsuswxuXzmni99suqeMUuZgjowDnhinM5dWod7kSjdRNkf1PZSeM1VfDairdtMmj1ycye3t",
  "key15": "5Gcxu6Ug48UqQeA2w3JXbu6J2XaBUMosAJAumQQZcD7upavdKJ3VFZBi4Nbf5hwzRc4Y3u6Lh2rmq8VT4LtfuFij",
  "key16": "3N6o3MTbebdF2TGQJ2q6UZDkkGn8rkfVLnLkHKGQQ6RzafK6s2o6xrM6oxvgPWNY61ectwjsyBF1jaj851yWVY3S",
  "key17": "5kGwci6RoxR3Acn5FzYHmpApXVnKSahrgBRGjYT2rrGoYnE7dBuDWwfs1rrHbYcr5NPmhhDgTnwESxcaL3RRun6G",
  "key18": "5jHTdKik7bWGyM2Z917KVQhmBdPHYYYWrLTW9wDugsTJ7Niq4nTxhFsnxLhn5jJC9FWhpY1KVszLPwZxzvpEz9dh",
  "key19": "4wCr2dzksgyBmmsf381pni44PWL2svShuxTihErjrxtG4EMNHxCpHxCxzr9TRfKsGJ7DAR3BH7ZuM3dYbhqev43V",
  "key20": "5APVQWU5quSnFmxZLra3r59g36QrTsYw1Vdb2RZ8vM4yY3WEjUhGgJK7t6zYvroAfBPq9pjJ1sZMPp8Scjj9GBcM",
  "key21": "4pMtrqyXciqHVton2YubEnyxkC6Z6U2w93AuAxwTnpfMrRyZcZUgMLSxKU8GoUY6piQRRAB3WqmgQn6HpSaoE7iP",
  "key22": "3omGipdn8Zavz293yrPXvDFqvzscuEWYDGtbDzy3YdZMrpJKoa5gsx2Cqhz9bbNeGfetNK9MxVMo9DtczDTcqczd",
  "key23": "3ewV8cHvvZXkmfjdVNWeRwY98XtBeF22Z69ukf4tC8jemSeF7swtojCU3TrAmWkcHnCxii4JhKL4VKUQB8JyV6ff",
  "key24": "5VF88UGL93pkjZuTvdDucaqiiy29w4GxyRvABEyjJ3g7WZCcAsyk5oExDc4pW4pxhRFotsuokvwdevwGKxiAxzrv",
  "key25": "5ymfLtVSRoQQWLieEEriRB3NXje2barDKyYZwUEqxJ2pkoJUFte3GARrko415KAEKHPf7vP6Kr41mwrqqLhEyHnz",
  "key26": "41h1qxtEn5TyNebTRKbWZJD9XTAasxoYSJFnQoAQG8Tr5BgR5D9iMEEZHmBKrhuNykZ1tJRCBxb7BZMAuQQ6Ux9X"
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
