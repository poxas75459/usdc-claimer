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
    "TchvcqDb1ZkxniRT5VU87J48JxZK3ADFfuD5fkYrNoWve85e926PVGtBxpWfPWEmSPB3HRo44fb6gRkgEdwdzTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dcEAjQnr9jdizhkK2BF3cY5ucG8FcUtTX3w3mMhsgxSnqVVh9gDKWz8NjCAzMEE51xzR5EyAiDP2r1DFShWaoKe",
  "key1": "4nudyeHNRkZwkbnr9YQkYAXcB3zDvEDNG4aRddCEC5bSyKLBvngm1vhXxzW3V6XDnun64W7cjbpQDQCYRfMCgRDX",
  "key2": "48GPapbWmgXumpdvUYQAvePbfasucxnfjfEEpaf2e3qW7V3LMekeRjEvBnZckQnQisQYN9BHvxMXXz74fxDyDoqH",
  "key3": "28u5AJZKpEH5xpkYRQksptU1XYYtmBj2yUvCLDakPeAMyR2rHeqjuG3F9cnNbuymMYeSTxjkGuAo5QM2SM1CKRQK",
  "key4": "5w59AYqNjdnFCokB94vXT1nuzUBJ5XQRik7o7K89R1bS73WX5A5JDb6zz92JaP4ApmodELqDNH8mQvitqJbYJ7ev",
  "key5": "5aWS2pQbXZCvEFUVA6WGurk7RBppAnZUVNarsuCSmDTLv1vwmYghewXbw5Yn1bS14XQ8eUVwziMpY1TtpxsdTmL4",
  "key6": "33tYJ9c62TX6jFV5ryymDzgdh7wahWiJYkMfxNbEhMvt8axpqywMWFPoV17XvtWxa2AuzYyxEXaxefKN4mmcdiEM",
  "key7": "4JHwKxZyPJ2F4A6dv4bAqvUz9bwtHngAbTpPjRiXNQtMKERU94QvJCCeFF97yFZ8XTAt8HKSva9B95YsJV9QxXfR",
  "key8": "kd6mU9yVjYmfxxhBwSitKMSG82aq4r5JazikFst9qVLBZhRCX9Axhpz4XHQo8cCDyFzBV3F7RGS5iFbAoVi9yoJ",
  "key9": "2yKVXszPhRWtnpT9TYHP7siUkZdMSbDkjKUfyzvHZcyqtJpx4sCHDbTyTp2UkzpnpLG7iZNeHthHeBGWa3BcwgEZ",
  "key10": "2zHrQ9eMDEkzLXd9cr6ZscxyQnQim7awoPrfpU1snfVXLqjkbhLVPojWWF2vdzex9zsuJVBPXdhipHz4Zg2vykhW",
  "key11": "5DkcoXhhWdRCT6zkTJpQwzCmvYDVJzjuBW1N4PcLSV4LYUphg6enMB6tbC1m8DViSdZMKgfZAmu8uraftU6WzoyP",
  "key12": "zibpeQUH7WD7VN6vFsCUYgWuRbYfoLuyQDBYP3KZPtee2LaJeKxxj7DYJaR1GC2BDvNcPNZPKvLSEuttaP2cvea",
  "key13": "3B73adAfHj1moPTedztSd3WgH8hhS6MBERcw86Q5XcxQBGiouZWunHv7kBdnQa4DL3MgnXFzCkAg84vyZuYARbeX",
  "key14": "3A4je2a6FEqvowwraJThq2TKjGawYPwR7cRFM4FRok7qExBvitFscwh9UDK12TZtkjJc9kPpUtPaav21135FA1BZ",
  "key15": "5FyDXu68JgLoY2qWkr6PY6gNWKRNSQG7WmN3XgPE7ge767R5BLJ4poia13Yh3iiQ9yLznNdCBH3h8NeXQwMQRyAE",
  "key16": "BRkpZzZGYdgm4RtoeL4oXAsbsJ26RbcrEzbF7XRrtbnVffPwGD5oTVQAgK14BMkd3zuYDrAr431iygyw55EyRAJ",
  "key17": "5gJNYxHSuckY658oVaVEx8qVoDY9UZVP8HPK91SkViCQbaN8qcdGbUi3ee3WgzrwkU1qBdgvo2VRqyuBKd3CKJiF",
  "key18": "Gm2xRQ11SV61ep3u8L8YFDGnw5XRe8jNSoUYjANiALEPiXtVR7gCXCKULHHRAGjeKZdQu36EBiLCtPae1SE2AaS",
  "key19": "5ERp7mvkRwifXRiDsgoWfgCGcRiwEHTs4kZqHbLVJJyFohn2U4s6qjejDW5n1jkwq4krxUirDkwAPYuMhEUpEa3F",
  "key20": "2yXQ3AfUrKZPE6vobN6NEfzFgGnQq17fjsw44HMWbXKNtX2kSVcrGRbonC9BNvnnPxEqVmSiFNoeScV4LShaNbEa",
  "key21": "2KDA76DbfYcCWKUFknqKCAb3aE1viBudgNw4NqbYRLK9K37kpNKt3xZgw93zRgAuc4BohHBEXMhkFP8iqkFebEcX",
  "key22": "64q3TverkouHeLLTBpM3DKtwuFUcoqtSqgXAPvu2Zg2ird5qYosyX7yGtfP392oHTb3Qb4Mw3z1m9dvP8qrNJ9JR",
  "key23": "63D5uBUorK34f5ARwd9uBsjoCdgnmESoacNk84oT8xArLHB4D9YPHqeM3ikbdchFo1icycv7AyoFfc1oFbEHr7T2",
  "key24": "AWJ7QxXNZQWmJE1UQzQ4WRcu6mcKsdsaadRPParkWStRXGFwb8Tmm2FqndLsoWBXGeboLNDWSGdtbA6JB1df9Md",
  "key25": "5hLhVv16BQgGjD7dav6GLLCbYb6aov3XwpVhH5LPJivUNSxPHGQRRHrbrdX8UkkdzJMuHZhg3RJnYtF7KKff3Qmd",
  "key26": "38ZNu21vvQV5vyKczXhVxHzPWK4N5XrTntoA94Hdj57oWHRKrnRTPqhgaQsoYLTQDsdxsRjoGYhViuvF5QM3Te7u",
  "key27": "4KUxb8btTA91bssVk4NshCLJpJPervATGuzTtnqfhdnXcphoSsiC6mEkkG3pg3gXeAZVUxBcAih6HCxcMQ1NrkMQ",
  "key28": "588A7apebCBwXueZosjp6SdGcfMX1Z5iG2BLJmaA5tqSqSMQ7oyjyAsRvYMYSD6qt5oREBctZu6hH4qJDb3P9JPN",
  "key29": "2iSSQjZVXSud5ZgLBu4MFqmmWJGcnbCP4D4itf6wRfJxFy2Xc6khxo6x1HZ8RPVgqkL8c21yGJS69osvNutrj9t4",
  "key30": "3QNBfjb533c1brAsQ16uxdGF17rb5PrNun2pKmQypVvNDap2cCStBeCcw4nHBMioU2jMZ7yTYe8wVSzySVHfbcM",
  "key31": "3WC5qPe77xVTfoEqrN2MXqWN1HXEqf9UEPSi9P8tA8Fg5s9751vszQMFi7uhaCy2fZAw7fdHEV7NPTRyyyNMwVFR",
  "key32": "49X66nEzxhYoqdWBaRZBPb2MDCpP3badV92FNeBfCpV2YiY39LhivWrHCn7NASvYWmEy3VZDoNzLBfYN8zJYLdeW"
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
