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
    "venJPr3vksF4dbqMRnNaM4xAPxJkeHgEwoyZnwLdkBPAmrSyQxrmYzJZR7rtKg6in1JdrhNBsCiY7phnBATBQsS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uhETZ2C3zR2xNYY9QWrULRs4Z1yMGWbvzPMCo9nP4wpY18iY6mFk6RgLkXh5Bbscz77ztsFSvkzdcsYGB6odTQZ",
  "key1": "2aB7JAcdDYwfUESxDA8jPR2QmhcNERrLRa9GjX7yDSg4uy8ib2EbG5himjWriwBtpHrHTDNcHMVzzur1fcF5X5a",
  "key2": "3xsvjJruBTg1wRG9Gwnptobh3uzBaDgiEfXiiqKy7vo7TPNQBxoosXKsDe3729xMgBLfUzPQ2eBYFpK4fs6euhhE",
  "key3": "2jBFAkJgkyACty5FYaxYFwerRL3TxK6ymCvgpR7jUmZTauq56tPevZudohUB8SRyVq6BVhfdG72xvLEc7Fph4pte",
  "key4": "5yqZ9Fn3hXStjcm1bp7F3SGHhugNDfMza8xWvreFVvRgZKGiVNaKgm3Ksi3zUeJiRbrW3HnnDqqsE33uZo4whdLh",
  "key5": "219W4AfVnSvcCFJZma8m2TGDTKQnGNUHG4W1BHY5zhRS77mY4HeUPD7EevVrtyGHGNTLgWWWsFzHW4mHB6DrZN16",
  "key6": "4vgjZF8H8ErELJ71LGmVCmCGZ9UZykXFktscFLb2BGk23PrQhkmHc6P8SSnZrnkRM2fNBKa4SF8ejaYLcYGTthaf",
  "key7": "4fbjiWuWzNzXNBnbZcAbTmUzmeLgzDwdjC3jPPVQEgwBKMYFNfbAQ8E257pD8LXg3YZ7bFnRNkQ22j9KS3kJsGPb",
  "key8": "uBLyvGhnp1MQjqmXSxPoyTqHrwTVBcX4mRuaQtJD5HKHT8BbRELkixpCH642FnaiGDjFXuGGUq7Xk6qrJjrTpkq",
  "key9": "58USaiyAyj5niRLw6aiaHHr4pdqeTPDy23ko6DfruxJdBLqciip2CTxByQ4AjoTUduDU1oKzwET3MjEsYGF3nYcq",
  "key10": "3Qn4RFLsmisLk42eHnasH5HQ9kYUnFzk4cwtusFDo1q6fHivgWVs2qY2SiGkJHneXaMLSa2EF6C69pe73kXLKAbz",
  "key11": "2ekQ37L6ZpdfiAjzovYp4RfugtnBvVzVHerGnZN1RpncMTESQ1AduJi2CHJAotH37ffsfV2vpNiaPE3WkadqJrA6",
  "key12": "27jcwC5hJdQqH9FrECg8QMCRkztkUKc2JvgbuaaAzZLcvLPxgsZkcSa8ANEE9434bevyLe8qbn7ghEt1J84zjSth",
  "key13": "5xKBSC14PWKLeEM54bb2UNPCBU46r7FQmRdWhfshUyyCpWkhxgySYvpAVCiQy9yQ9VdkLk3BSZqbLZQTwYqWHGJQ",
  "key14": "3UUokufBba8vUcBcMo4vuSPQis4mDpNRTa4zcu2Brh6qfXBHmD6Am8VZ9Nx7bsBqTEuJ3QjixQ1Qx2Nu5ZWb3xHo",
  "key15": "58zBJYtgkXZ1tjCRCiwviN5V6AyzSyXpxxAy69Lj4hz7zbayiNjKZx8d12BoKbtWyX9QFXHqGzvGtYpQcDMvTwJb",
  "key16": "2kSiiE3jt8giX7UvReC4H1Hesw58oTBPwr3G4sQKvvwvMHHg6rd3tpkaSb4yf6287xmtvJwA2jeUtp1nZQTE1nTM",
  "key17": "EQRbt4bXugzcLgb39vhCuLbpSuh4qcDkKRXdPWvGviEqQ2GKmefMRiQcPAr2z9v2J9KXzrsCe24akoq8vUXrMrn",
  "key18": "5scCy2soiUDCPAr7r9XLLQJKEq6yHgEMCrj9dwUUFrPRbD7L1Ehbz3agYZBSFYa5ucoTGHKUXpB41766zPwzbi2z",
  "key19": "UcAvvAyuSnX1gdaPQCJbHq4h4x7sT5tk8yPAkHt2kGk3LMhfoFQVdNU4jFtf5DHgKeJWcXgGG8ywDZWE2fqb4B9",
  "key20": "373wiWcTbQPddHVVzJQWYiXjHuRakt6cUqZBJLxHgcAGta1oqCismwhHWg38e4vfcP2uwwyynVLLsSvPGD14A7bJ",
  "key21": "c7Nv7KvSoQBvZJCcYAGZVyBKFetqtetPFQYCdQ1CULgZPADdbe9mL1a7brEMvrxVGoHwYD1nDptxf3eHQU6hSXd",
  "key22": "2rLDEcWvj3h8noiYiwQi82So4DabGoTYyeVVGAMe3Fa4NAX2iaMVMy6pRRutXkEwc2fLXmkdX7sua3k65jyEvsYU",
  "key23": "27dd6ZWhXicESEtLctdzkWPjVYzpTadQSqimheRpgwEmuxk1rKQCHwLiVpBRsgcWt6AdJuRGX79aiPSvKiBF8ZnT",
  "key24": "2hf4ZjzymDwFiySTsV8L8ukCHtEn9MdJnauKJitaYn3TYuHVUA96Tp4dPWSXhVkGMWse1kmsnfjdBcdczvKYGAMD",
  "key25": "3mTZyh7agYL2s7qhZnQa9QuQLXSjvbGYerhSu8ijvAVgbwNCHbGGRNcw26hTZkYvbLqTDYkcNjyeWiRGDdmrp7RQ",
  "key26": "zE5oBojwMV256J826bU6RebEfBBz9BfoPoGT7CDBpYPWPqiEsUFmb4uTCE5ShJmFDJ9gtYDJXdPNhw85ntL3XdB",
  "key27": "uvzmCVNtYqY3t1FYakHSAMivbqbqFMyqmSa7rmpEuaFGakmXDVhscnMyWkVcvwire4gXraYXPu5ztubVzjSm3dT",
  "key28": "2Wai4MCB7Gedu1qnSDuj9zDZJv91irCkaUZPzA3qLv6MFYmMbPeMZtQcD8ZxesVWR9boQTH3UpE6VUPNUehuRHV2",
  "key29": "5Vb3z5jYHErThh79UrcuQK5xYmqbxzint4M2pa8cofFecAdDmhBLVTiEJedBvho1ZbaTh6q96jvNGwcG1SSzi4Vj"
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
