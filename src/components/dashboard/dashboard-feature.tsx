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
    "4hWhb9QvjnEAdRi9uh8wo5HEA2bZzANwvi5gyjvzYZeh8ZqJKM5BeSrqZe9etMRa34w1nFb9XipNSknx5YkcMmgd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64VdUBZSxpUzHjfwYHNQjD5M5MitibP6FdzXvXGnPyig8VdDEdK4Cv5svjtcodg2couhmu5Xfh9QXZhrMQMyrHDk",
  "key1": "FFFZt4pPfRubjmZpBxr8qjdACtRTJ5h5zHSX723AzRADWy1rhzfEP9Rr6tyy5LWFLui33c7FzsybdqR9hmFnV8F",
  "key2": "sen71NCSAL1yyGPG47oi7mvCqKycbk9VTEBUzKffVmaW1qgaY1sSur7Pd6WavSpCTTVnxCehfkSA5hgahkGfMhc",
  "key3": "32YqJx5qzGGHL6FKYchiPrwDpFEAscVXhunfN6fJXeDcE9KiKP8MrBkk23iq1ufzqkEWE5vgAnVq36vdapgaBGE2",
  "key4": "4dGyeNu3UTQs2BEaeoSuEHjmhUVg85YobiNxw9fkijEPxpbr7LLzR2KD5jQxEUsDwWxfT9ueXvUZutXrzr4xwjTV",
  "key5": "5wJiwVjSzJ4aXD9Bm2m5r4oivfXbTczTfEfTbRGaHPoPRJ2AnbbyzRUNA971ZX8aWNAgiD8jjs4PCt3zsUyc2iSV",
  "key6": "mhAdXSPRaU3T5rMpehFGbPNqgmYiD1TLj7nVu4YzM693fMNEdBEwwtLx2sFTWh2DCVXWdysm9FmQ83QGfXvEMZB",
  "key7": "3RdKAHafo69x53cAF64tHF5KdsgwYXWLQbdTVcLMtzPnVbeLqWg59Uh9QvnBTju37AbyK5U5z7qwZeeBgMQ1Avdm",
  "key8": "24JyFspcuFWpcCTjor7fdLyeWJVbHcm9gSrXwGpBQj4w9z7b8VN2piJoGbYHDYYzRgLLNm2JCGaLXHobLCTUJmnt",
  "key9": "37VYTB9Gwe9YFKP36yRXTCn5mjEA6MPWWk1UGrk4CuR7NFwhCVdbHzDmFG8toKcJPPuSom8CHGJX91Ex86iX95zj",
  "key10": "2ge6VY8gKisdKthbftsYFh2N5ce3SWWQzTaQTo6M3x3ZWbzVmSYEMYfQiPPK1oTxAzpHx9pkKFufWMZGY2NMwjQn",
  "key11": "4GZypuZpUEvb4wEUjrdmS67aQf5DwwDbud5A4ZDwqUQJF6WJ44XsPeMCqkNeF4F4LLhzntztiybdAdUyxsP8YUFT",
  "key12": "2GVfMQtsVmMrf6P2Dv1gzeQKrHEqEbykDjkEJyNiuqjchTWyLcyhUrks9bp5upJ2J6PNSmoEnzDfL5E71wTGLTdG",
  "key13": "hAnw4DdL1Q35z43Z1SJEVhgNKkKk3cSU2Een24Xa4A6f3Sn8j7fidfNW8nm4n27qxj2dfKFNscYhebM5Anb5mQi",
  "key14": "2Hr87UnzDW3wag9SjetQ1RSP5J2L6kv5QcTFr65fgYfAqCVtxRjUmNS1cCyLAaMPoqDRiNvCAqYe585j3iVHrMko",
  "key15": "2L1v5PpHKW6A9fYngWU1p3yvhmDrxZffFS3G7yohNDWz5M5YTqfcyDd5QKT873nETW6k7mkt5iR9iH7qiWyLdke9",
  "key16": "4Q8VSUQagr9vAvAR5Dp9WDiDtskU4tt2Rs3jpT5pdKcosiArFX4636NxovCyEX3BfgqPSodd9xC4sZegLkfaEAYx",
  "key17": "5iewA7KpXGmYVcy7Wa6Qu88vJjvoqCwDo9gG6gAvTECciekULa5uBJwaEtmGTbFGjDFRV1VXgAPnomLxFaXcheiQ",
  "key18": "5CbwBaR8NANfdTtLekb4YBaSb8rA8eLoVucCXfMx1CKQgVoAJR2Aaur8YEVtRRnLHBgBs6XLFv6YhCtp1pLBSFus",
  "key19": "2ht6AtMVXCKCd5h6YG6hJDDb8nakZURbJZQsrDbjw7mp39yDPsqRQmWS1r7rQ59kHxxxHXmuvaD99iijxLBssR6E",
  "key20": "2QsTC2q3JHZxx5bg9g8P7NYnedVwrAcVqjGtaVy1BbaWA9gMwp4ZV5fWeni2fd9WpLmEdvESfcKbMq1S71t2P1yL",
  "key21": "2dxTLAdAEUkA6eJcfiPsYaPPf4SdgcfUk1uFrfnU6KyjPMNGTsYK9dcC3rS3xe3Ct6dEtC1rwWwgdvXF9paYRNco",
  "key22": "5Hd42RbEGq569veEZCLSqfHTYFFd72nx9wJLaW5CTNZxn4A9B9uyEb2E9RTbhGKMH3xXHtARbhnddEb7BXhLzxno",
  "key23": "4NsE3XPTddAgUnAM34bSFxFL48dUnAeV96DB9hDKjWhCSQuuFXV9AadqvCcCAFWgat5Rmgz4Qp9zLV38rGwPWqyh",
  "key24": "5Rhn1t6bpEZMufXQcCJM9Ksbap8kYu4DJuGLujJWaEfLjhjzgK6xdgJM3kCh7PdY3Qwyo8jMqwDc4cxchJzYh5xs"
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
