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
    "2n9jbmeEyYKayZmrh9u92QVD6JPPrg8YXeiBe5LmurbcPMf1TPn64L6KCT4V8ZVZ64hpDPhfp5zNq3BSPVhYx9q6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yv9DG4hRuqxRhA5h7adDYdfoj1UZwHKxek8eEPSyhsCmaz7PXdMXfYr6WEhpRQBpDBAS9UfC5smiREoX8GnrZEU",
  "key1": "37p7dC8CcJrTrupbbL2w9Gtj1YuVBR5CKUMj6GJUZuQqaHRNQC6H2be2dPmnsyrEm1ZrPNe3tJjUZrcBYkVMm2bx",
  "key2": "3yZvtHWkZWyLW58vMGCZQSDjYL9nFxgpAT5yKuMaHshmUkHmUFrJVsXrsUsFZ2t5T5WvYazUMLQkKV1JUFkEtVw5",
  "key3": "5wXZKBRdWUW6P49EkhS2VPWmy14h1BAFgGh6NtbxeVHZXxdJQLk6QqKhLMFp6X9MBnBeTuZSSTJSbFDCxibJucbm",
  "key4": "3KQYCCD6HHX6SPeVq4aw6JU4bM5eT8592aBjPbsdmy4g3BpAFPtdnZAir85KxFNkqQ1o3pw64yJdcX2xiK9qRqsk",
  "key5": "eKMybh47csozR9LqD6U5b2VJLyG9ybEM3Mg5jD3tAVsQDatcvyvnC5i8ocCSEuBtryVERzGsb2ecFK8LZt5gfMW",
  "key6": "665Kw9Cve7DRRv3a7bwG3jiUavXNkWovGVvaiMTS6Y7oXESNZqRX9ZCcYYm3ePyypke9heZnAASvhhuRdQBEHFRp",
  "key7": "5akmUCwHQXPnoFYbmWY4PpGg5MHRZnbiKqJxTYqyQmE5EJnarMcVSUsnGGauaR1n838PUu8NAXWgepP8fP7a4shp",
  "key8": "ZZsBxwCveaP1KjD6DhjttY7N7JfvwnK8WVdJq6TtGBipmGCtXwRxeS5FifJyu9EMA7kZDU5bqzjBzuFXAwViUmN",
  "key9": "5bdDnF396Kt5Y8G4HWFk3mzGXTBbnvXM1M7sHSAaVAe8SiDF3kRjzK4eeBW3UdqEi8zcqaabf3DB2q6jLS8HNsPg",
  "key10": "pVFn3hq4THMbGp6kBbQa2aU65QviPjAN4PezdaDgpzAVyAfsj1rqUV4XFGM8SG4EgUbBMSibjKVdYg5g2bdF5uT",
  "key11": "2TRwbEHbf12C1GVLeMAj2eLHf12bvoqbtAvNCBG5reKDHpeFQRd3RBhW3997AU41M7CkVWC1M2wpbMzqwJXRTTjJ",
  "key12": "2rggHXaVLuMQ6V3NNXYG38XjrzpXSrSYqV3hxPkVxgtaa4GSVhz8YvsHtEcGb7bngCGRvSqcAQf4dbJuFAsmhuRE",
  "key13": "5HRmda3sSgDhw9LtV8qhS1FNodxytS7xqbhnk8zbwxfD9XGJRjQNTd4jNsEmyXfs41fUPYsQxCyRhzXaPM7CYxuw",
  "key14": "2ZPyVeQKPRdnpY1Qw6E7e8edowNCsrHYAqwsqbjt1Eaky8QXzF1EwtxtUdTXySTTzHTsaPHECT3oncpaGvSEw8n4",
  "key15": "4rSocdXvNUoKbZ7py7npeiK3ifjh3E1APjYsm6LgJGDj1ze9SGX9X4rAwsAwUqYX5sKTRCBJmbZyZr7RoNKUk4B2",
  "key16": "5tB6EqfoQ3Sd6qi1zvzUvVpaih3edT1ZFzLZAWADtcpcJN71KxnQQdabjPJC2yuhVEJiwubBDgFfVZbG963pCGaj",
  "key17": "5avcTjVXJyJH5GhQK9VLbMqEdHozRj6JyAw6AgZV89oCZyeu77pJHcizmtqzXaMYvhBweZ85isEeNert8YFYcwfK",
  "key18": "35CoTP7YSvW7iKMmYugKotngvzoB8XLRjtS8pi3XGzMK3aPuutxgKDsFULzvZQ1T3yykK3p16axqwAjJHQHG6xKk",
  "key19": "4y33jPia4AAtec1ewNpDm9y2dbRnW7oYYeGsGhWRCozkNXZg86YYREHFfnHecFgM6ss6gxTh3YoxPe2FapVu9i46",
  "key20": "34gD16YCFE7eqMkVPYWn6pz6CxRxXaEaXEKLVfaWSAFQ1tnyRusXVZ7KCFCstNdiBfw51SY3NaSbehbcAr1qadfn",
  "key21": "5bp7L4pPcSSDJq5jtmsRyjD2ggj4e6v1bwcQTjc9YMi29HkFTUDEus6weYXRH8JYNfz2foCpazm6KCKFpxY6PmhP",
  "key22": "49yKwjN76S9cRRZs8VAQzcNeVrNYR9235yXZGMQvAPCBqF7Y1Gtud36mcY4r1zrqbDQmEB8R2k2JQHydZ6DtbUs8",
  "key23": "5EdKyzPgwCBuy4DqT72PvZ98woEYEe7MqSaivomMjrdfm6YvxdafTfGEkKNLgHRArjuqVnFJcASVkc3YDVLHbQ7k",
  "key24": "4Z8PEvWzh7QgRT8m9Wnj4HDxU2qKJmnYnjDsckVQ6nwPjkuNSBNEbUAktGeWphc1Hmpru9sH5LpwUqxMBuMxzBrB",
  "key25": "24sB4axYUsXARgCQiuBZ1id7AKeyqCtpHWmU3UKTZS9vZgHhUCYno2SaXqnmwoPEUAoPEuXeuSMW8L1Nboc947wJ",
  "key26": "hQJ6yLCUUwgq89hecDy6GcD5GqVQxh79YiWuQgq6PMnuZpSHq2H2XNXmd4uccGR1XbVqKEwYr6NcgeabYFGGAtt",
  "key27": "3iA3MZ1E9dRzxYpJmSMSsd3GWQooY5qu5AUpx37PUqZBvTKgRrX7n84n9wmqSFomGVU6SyhHCHCniGSS1u3EiDW4",
  "key28": "fhERAhEvUSw23pysQGU6F7KnkDQppT1UA1F6ZU2ih5qAX5S3VCN1kLzEs1uv9CXz6qsv8szQRMLPRSmDGh2hmmw",
  "key29": "5X9cFRp9xDnd83Yp3FerZLCAe1PWfkWcVwnxwEEaGjuKjpboc9VNgivraKsHd1ed5A3Memo6kDSRXJcCFUw5fZAx",
  "key30": "PiP9G9JPjfSWpRyXKp2ZdNRniv9W1XYXxBu5YZjoVm93v2iMAThLLZNEUa2XcyajZsKkpSGGzWDqEfiFQXrCKbD",
  "key31": "2Y9mB87Dc5g46QPRYkGZTDDUyXzXqCBpMGzXotHfwv7PfPGNBve6wVbGau97dZDfpze8rL6Rs25Ms3yS9UHBRmwB",
  "key32": "2uZdD5RuCVW9sVtuRvmJjH3FDVtxUnVahQwWudgg3nFHszHfFEDoRdhMFqiJySW5Jgnhxi27NsthbDPvG8fZW6jc",
  "key33": "46DpxEaCKY9ou5fw4KMKYhVhGAh4furcaJGBm8o5mrm4CV7qnqicL6jbWo2xEmASyBjj6XzFd3GVP7erPG3Qwzgp",
  "key34": "A5uN3PP48oYijDJpvojpHFJ9QWwuyhJUdCUn9LmphJvrCshs4v5TTYLy8FpHP7DsMVLA9VaWfhVxXCtNcVU8nsh",
  "key35": "35eTLkWXiBRvcjtuxAX4E3o4qmLUyuBcksrCEwQKF5sTTiQ5x9CXVk5VgYDA7QhAs7QXy5jt9d6Wus6aWFonPua1",
  "key36": "4EzvvkWCDfrkEVBeTtyMB9iBLngytZLajt9vNAtDoErPR7vfFXoqJRhSPCLEdNW8tGw1XivJoMtFaNyBhGAszPRg",
  "key37": "3yjNzsY7qbvzNXeN5EoiL5NpMBCtgXN6fPj2gsaYtmAdbVTLEzpbdrbVQgqaZRZWz3ixFt9bxzfXgLzvHGeiX996",
  "key38": "2stSChZtahgEg4qqZpr5HstgNDP3PKsfLGxTQwsu7owPjcAoAhgzMpbVCtcFRrcXf1svUsmCFsx1FeRVJMoTJUaV"
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
