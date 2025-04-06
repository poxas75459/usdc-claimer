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
    "2oZFSS8cBA8UaFLQZedHcQLPtjndSBrSV5Twsxb7xVdCAQsuGs1eb9fpJqd9bJ21NUJ44vnG9aTXCcVb9JLEw3FE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oJ6Jwfbeg7Dyh5zYY3kjCXu2hqvCqtpEM66aTTXbwpBVvffU1PpMG28Kme9yLhRVAjFH7CafAsGsw8U3Exb9Kj3",
  "key1": "SiWHBe3RZrTkxiU3a7iLjNTjx6DJfauCJyr9whDwXNdrgxzowote3ixtukBsZfsZ6VnvJs49jKB2EDfLZYynB9W",
  "key2": "Kb62a2efkvCRcUqQrW1vTGVAKghWgW5MTzoc8oHsfFN7GzXk2bvymQvKSLm1BgSKVj7LqLjLJED52A7eZwm9nV1",
  "key3": "eqJmbScBvsrVUc9hpzZ8yBnnyCHX4p8yLT9aqPRwMnSDt12s6pGuwmxRBFTn1GAmpcd83WLKAR1J7ehNJtNFXJq",
  "key4": "3qmDjun423U3noWGvmXLCA43b4Yypw8P7jELHFghDocqyoRxw7R3efssQGVew1YdBEUvhLfp3wTXMxQoP5g3j7kL",
  "key5": "3gZpH5qoCkxPEMWtAzCrkTH6pWqEvLUHQwHtM61aPkqkCKMobQmCrbdV3ZJwV8Y4n8g19DBH7EC7iJjmaHzo2Cyx",
  "key6": "F8VYn6LGD4vWcjdD8RHtEt9hjizaZNpjqtX9p6iupSXA6ckEDWCfPSUQwqnEZxp39pqrfa5fEXg8hnzFUwJerrs",
  "key7": "2LEpqGevQ8ZBiQp47VA8EqkkanDqNisD9J7N3oY4geL7nn9N4astS6EoE9ATVQrKgHuHW5Y8AUrXnpkL1JqMo2MN",
  "key8": "2RGNEi5pr9MAfupd6c1zw7VrVG46bMYoRAvoEXzhZD43NfYs1kmk6Lwyfntvt8U1A8yTMrTYM6KkGLZvJLzqPRbi",
  "key9": "4mP7oCcbCohugKrdtFH7as2CfdnvhPm5ocq6zzDdWz3KTpWKKf7vvse3pNPeEzLKx5Yb8udB3C1NDdYZULx2fL2a",
  "key10": "2vnFRPLzG64dknoz8L2tkpphjhttcpYSU6jxB2kX8ycEiJgntLrsxtexMkEZJbHkvQZHfMV9nvBsPc3HvxtfrF5k",
  "key11": "347ifbDuS2fwnDdhik1RiMiWHsmyFXkd2LcEwfrZjx45JfdzogEWQuQ3qWboZrcQKwcLxvfEQ8TKrgfDp3MEhXqG",
  "key12": "4FhpBG9Mj1LAGfXhcEb2uGb1QgS9TQ7jyrLcrr7XDeVGGiMTd95jGA2LfZVidBfhB5wcTg19dNzvhuLY13cifhaU",
  "key13": "4nUEHHy5sUHRqGtpfAC9b8AuGS4F1YR6KSSb6JGsqh1bviMB4Jypp8c3Vm7FFKnNBegvg2YPqiUC5F26fqLNpAr3",
  "key14": "PnHdXhQ1DhxguSnbCFmuXu6Q2y5Ysk9Ki26uFkuwL7jaKHE4f1A7t4UpgebH1jSmv1nt7wpEBKLTBKxcUBiSaXu",
  "key15": "4TV7hoDKBVkdrfxBNMrzHZpedpixRVwjCNusEmzp2u9ed5wZAToL6cVVa6miY1f5Ybo47ujMA8ZnvygQEcgprD83",
  "key16": "3i4yDTfyQtzmbNeJKDrMr4RePUjD72Ra4moJprLpQTkhvo3EVb7iPcAWY9MFQUmujkvCVNWFg99Yvsbw4Ya3jkMj",
  "key17": "498ZyXRPHSSjPqLhBcbsw61vbGK4rQTz5GdwcDFbpSmiHMYwfMSPtfQ2cMp9Re8pcyU4JaxqoW7xSw9EJfX83y7d",
  "key18": "agi1morW5cJfuR7TD2cvp4iZ9jLKjp7ypeGUJj9fwqLjyxbvrduhGYVCk1siRnM6zr1Lsp5A9BCY59VxCw3RCun",
  "key19": "5KTGX2sdt2Sw1RKiGa5FnwvJhBobM3Mtnwmf6pf29EuUTvsEnUtBCnihvy8bkSgS77WbeKGYyZGT5VtfKo5KvdDf",
  "key20": "5QpG3Rnp5pMwgnH61bukGGVyarEu5iUDFjeMY74fDWq8sWDmrTjKtqrf9Ug8XmUaPuD4gRTBRHYq5B8uZpQUqm7W",
  "key21": "4wZsEFbCGp5tGTyhfLqDLYQWKwEJJK8Pobje3gXVTu6F9TWdyKF7jKs7R6NFgayheBNzAy19YMFaFkwuHomoeeDf",
  "key22": "4gWxSD5XsBNbGvZ8tV3W7bP1ajgGuKtxB1RBUJdqjCA4R9hGsTjizQUAy3G9x79Q1SvQMqxcc49CCQ3fJP5dpY2P",
  "key23": "8ps6fCKryLEmGPY3E4Bp1PQ84MWB88KXrUSq4J2TkXUmBHJsRuMZHp86temoXkdXS6EgK72Yh6sqaeDuBnwW3KW",
  "key24": "2hEcVL8wfNTRsnTcVoEDGKwdexKUdvPFUuHWHUnm8znZTkzsSvt6bmi7adPKqTDxWgyywuZhX7ztmkDgGSsip1gj"
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
