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
    "2hiycvQoWnoSTbwyguE6sLLbk8Y2zsxLSWcE2pBT79g31bo6qMu63ZJdZV9erbBCQHrZ52Kv1UUhUj6a7fqVyzau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jxYcPWKhKtarPYjCCS9j5Tf8PKD6xUdXi4A7buZB7kFuKBs62SvwrMVJhR9VfRPbTU46zVz9yn5cZez94ag47e8",
  "key1": "DToqG94Qr73EF3cjZm2dhjh6i8SVpdsezhEZoYu1aTA2j9TDbY44Bv3WfXnXmFiP7fkKK39z2ENXXpPLWSVJu73",
  "key2": "3xfa986R8mXAvSNsDDvzuAL69oC7PJ8mHzUxsK4TXa47kAZjYdUuGWaENPSFRyUDsKxieHqi9dM4zWRfZKZc3VE1",
  "key3": "4GCbBuRouGNm49o4wkNkzKSFJXyuPusjLSkt3NUVhnDRACmL6ioTzyxPgh57wM2UpzvA8wJ1YfXsc1dZvkhCFZBh",
  "key4": "4mhP5yXLHeAme1DpcZvNjfwCZyW4pT94sKjWwE5jhbz16CqpcMNEbZHmCZBuvLcsTwTPLhLnjwkfPpeTcgL3KCUL",
  "key5": "3zkPY652gejWtRNEYh32DUBMKxbLByi3JKFMCB3zn3NzxVkxVrj1HgoGbAVESwwEE3umYojxZv5S3pCgHGydtvVe",
  "key6": "4vunwkcvFGU6iBurYKAnjuWnXUKVPp8rBtX7HXwc9WufaHsHgSLVFzgGbDMA7DvasCuU4dGZaaa9TQzoV6xpToqw",
  "key7": "3ifwEsSWjZWsGdUHn9DWVQeNsQ9uZEtrWZJCtuqjMaemK8TpSnb37qL83VhCdSboXwgAbfGbcgwyyeMgbtaBUxzK",
  "key8": "3KMjQjEVtNiAznqPGmg9qtaRYAwaq8JqEE55FMGr1uFUYYYyxrPNtYH8j3LGx1mEDLCNTVo9hedWcbvW8MtQezMD",
  "key9": "2Cypbik2X17PSeMMoRxTX8JFLz3nvAPDB1y1Eo7CE2LEDb75muCd2XYSRcA8zw9VxcjMNa9su5u6Bai4XopBRtSt",
  "key10": "56rJJDGCna7T2Fy7TnP4xZZiM9f24MxbuERqTvXhnASXbkHeciTBoyVW7sktReuMmKbunAsx9A5BvZKjsN4shjWx",
  "key11": "3MWm3CAcFTZvajAC4qx4MieqeMnxyBSqUT6LsC6xMaWvdK5h6Dg42NmqERaEiQTWA7yqJVCjA95Lkj4ZaLn1gt15",
  "key12": "4hnKQYJqbBHow7yKjSSV1hAzwyBC1MmCHsMJc8hWZZtRm7tTLhWdDpVUt4Hwa3Cbvok3R7kw2xjGqSDykt3whfU2",
  "key13": "3JsAjMpotmc16WFVWwieRbkfcbmW5ACjc8RXa1wPLDs98aQ4kf97uBzMtpiLcrRGbPVU3MbtrYchB3bqzqPTG8b5",
  "key14": "3ZxMzXPhu8wezDC9ajrYRyWUQNbBZpsD9yi47trAyniXfVxLTpHPJe6Hamw4DGTP1okwKQfA9G9Uf6D43dnxXLfk",
  "key15": "4VC6QUCvDeeWx2rPaYceavmUqVydxnWyiSna1AUqemcVQG4WPnQoYgu6p1TLygc3xL6rjsMfZZGt5pfWMeZtApZe",
  "key16": "3jzLSWqUgAcmsyTVnt6pj1PNj7mrb2ttGbFwAcwaTjoSvNBAtewmPXomK7umLLH6PyeTRZeyThpG8KR4XdrSshdo",
  "key17": "49r2wJUXiDRkv8tyykX4JpKdLtd3MuiCzW2ooPoinHXN8NQrsPb2p6bhZs1Fk1Ho8rFeyuVwpTbiYofvcUdXCoS6",
  "key18": "U9VfibePM3jYgWGmuNz4rd18W9gzDjNDaBMwiiSuQXVsJfPUwv61esGDBzSWSWBvtHq4j472wNVR7ziDkSXNYvc",
  "key19": "5GqBwNnKm51DwBurXro6nG2kcHTDwK98nDina3LJsEPDKNrNJnhRyvbf98sa73yra1ZW8AM3SDQHQcUh5kNe4Tsr",
  "key20": "4yeXatMMxDcZSjKPM6d1QPmy7fKoPbVMaGDFHeWfXj5fJkXaJymQTHzaJg986igkryqmBFp4gv5ejTgny7ApCA4x",
  "key21": "42uo94cURG6gFMeq1LaRgeB1mGpuCYVLPiXRpyVjnXRFeZZUFYFwFpahTzFwVUiQPkSc73HUkVAbojyGcSSrpuPj",
  "key22": "5qczG7CbzW4MgtaJrnwX1eKAsaZMtUZvhxWrAnkpAPSSzVeYHsAe9wDy4ZQfNG7MFsHQbp5351jr4YvoF8YYnS3e",
  "key23": "2VyHucGFhPYGRRpfNujCfQwegK2gd4oMAqJMhXzXGJSsVBGiknC7sa7WX3BFT3MMZ3F9YwGJXxZGjGPBs9NkzkAV",
  "key24": "4EDMmd2qNkJZbTBuNoEri71v7P12JRvaQ5JEPVAyjBuM9cuuCAEJB3fTFxNb2qRsEdZRrTj7ooZoh7CV9d66eCBm"
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
