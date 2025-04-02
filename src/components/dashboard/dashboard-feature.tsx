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
    "9efWSZs1yqgExTymgd4kpW6tg38VZeeEEY7oDzG2RrUT6gwVpk64Lb7aCe6rLFa7bs2pPwZfwfZWVryxQ9kQ9DL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fiHuC4x3RHW8nYCkjdH3GgNrRWLTrUH4uiT79pWDFmNunwh9QuwMMuqcYE4AA84W2qJS3Kgf3wXioykVct9hKBF",
  "key1": "3DcYAbeVy78wytH9AyMUrQSxskFQBVUMWB3tsRrKoptbKSqTrdZxuXYVpiYbJ93cTPqhUAC1PScEczxmrB76ARkC",
  "key2": "yvQvAaSWnCuBDjznWyQ7Mp4kh6aGVFeWworrx1LQMy6Ap4MFbSFdFn8SnzYEvD8wa5PQASQSbtjjaGv2ghxxHX7",
  "key3": "fcYgDH9tSF5sbWzwCXgMVx7q63sRkM8XzQkRBa2mS19xmcx5w5WjZpe68EGivKpH2v5Nrm3Wkxhp8gK3GtdmgLE",
  "key4": "5e8UjV5DFRZM2TQFibwjwA2dwuJiYz6BTPZJnRFwWn3cjv3TLFzszf5VCChYLUoCRXuCgVjt4m4RdBtiWtAQ1vKB",
  "key5": "XYyvKCKzy8jcNSArJEJNqg6ZaqGYmUFbvYPcMbbMmkghYnuzLyXj2xEvDthFdxHrdttq5kwFkAD6SRBBw48piBW",
  "key6": "4zU6q9GxKpbi8n8X73gEGyj1ErtVcjBNahyZeGCMAmJfMUKxAei4A1VYjySgVYjjHHptC5aYyFnNXbmAaKoDNe4Y",
  "key7": "5QcPfuKaSgF2NDHjapR337wXHywLQ5Wv9TjMU5azNSJrtKF3TgdMG53xuiVnnnGLRSGUr8ckEAhESt177SaS8sad",
  "key8": "61KTmb1XdAJo4hybD3w1wgJPEGkMU2Uok2ySX8WWcmJYE1P4phGrbM4hiyRVMckXu1jzaNUPRYtNeLq3WzoRH1sg",
  "key9": "tXzb9p5fBbvcSjv5Eabgro24m9zjtxBomxnPD75iCC7G93ioE8qxt3KLv7ZVD9s7CN4o649z2FecrPYfSYKe5is",
  "key10": "5awWRBKpQgcfuUhiMyfJ3qVr9zY9jJgeVEYkA4AoLQ93tf38kS3LFdwrd3jbyEMg8P6DLKujYVfT7uH8FnuWpiTP",
  "key11": "4TKgt9etZVbdAXe3vSiKdqrMoVeWabewkMUfipA3irHH71odSAMAPiU89H4Bc21q9E62k2bRNWvv9hDqWx7voxB8",
  "key12": "3gSjjrBhsqpCu2bwnFwhKkf44WRqcXRppfQcvxKdL33TYB7fLsS2u1Hu5s3Xj4mVus8tHVEMqZC2n1MEbz3Qci8y",
  "key13": "2nnVDSZFmHpTE9SCkqtag4u2Vnk9JoM7BywTToLmkbWAK2wo2N8fTWAHwS7Wpbv79fy3pEjaV1zrRACG6s3YFC4Y",
  "key14": "27henoEURXJjrnDsBe5swRjTn9rVaPEc4HWHvvWfCg1wNTBDkGHhpmhiLdBWpJvi2xhemcmyo2dn6GaRfanMHugb",
  "key15": "3gjUhd7cgNJUDs9wsLvBFaGWNH1tkMsSfnLuQY38nwDFuxb8ajVWRAaA7p1cjgrBeEd1BXBSetYQRQEwr3LzT3d8",
  "key16": "5gKsVc3vaU5rAEHg7ae4XjyScz1d63fwPrNWrWoQg8uZeWY1MDYpJThd4pBUSyfqTyBSdXu1Y1Xu89QC2Ye3bokc",
  "key17": "3CEWQsRKknuk9B8ddnFPiGw2gXdgJBgBwGJAEUEon4HwEMwsQGnn6UKdtja5ECDSPtWS7GFFa8VUHLXfLxABxzor",
  "key18": "2oTFUkcfDeHwtpH8xr8FGm9EufTX2VWmnGmhAAnmZDiLviPgMhZda7phLwUHpDbLvdKjFa84PXnXW1GZFovmVPA3",
  "key19": "4QsaV4SkJ3hVdcK4KtJin1YghLgzu4R7mneuFZSWx9e98Cjkuni1Rffhh12xGUZvMjhDfzc95QCesjnLawqcFb2d",
  "key20": "3U7KEdn2NijGPgaPgjGgbS7FSm7NF3XoT8tEFUyK4upeSnhCsrp9MEHvvu8GcdaKvt2qSy9i8bjs5kcbnDM9yp1Z",
  "key21": "3W1reyknKh1vELNRNbgnViWBDTKpC87QrsDhN9HsFNgyhvo8MAMn5uZf3Us4f8bPJJ5XJv59Z9z8wfwvS1NBFXoo",
  "key22": "2KCuXH9hjVh67bWBsoE7TnyHkD4Z85xe2stHXGATGLSQf6FrwNHh4iyjEEgWJ86bnwNJyy5YVkubQXFyFYXfGvu4",
  "key23": "WGFAYg5yzqy9KXariwaKNSbVqnvVcrNmf7FwJutMsBsWVEw6RVFNoLc24oMyHLaTCb8Hr5kVDCFeW5r75FR3Dnb",
  "key24": "EhFmy7CtBUFyrQJv5rHzPrjUpEvj1Ug6rvNWqfzPtW4qJv4chFrTTLak3nrc81GhxPDVdbmiu9r5jdg7WPt8eLJ",
  "key25": "2CCYHgkjwZTGCTYFhegohL2unpzS5DkfPaMwxxm13rjtkdtKKDtJg1j2PN36vT1AhM1hxWWRCRQDA94wxZEEkn3m",
  "key26": "2xrD9VQ6MRrFGmZjvBp3siyVqaed4LHREXVXmk6L9pqvh3ZCcyQg5wr2DkENaAzqczFuUJL9Vcq4edrN9Z1aC8iq",
  "key27": "4FAAtu7Ax6k1bdqFLoRVgN5WpToVdJPuBSvPTrH1b6htnFDw2czFe6rsoTGUgSa1CsSXnwk6uzFpvi1jvccmEojE"
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
