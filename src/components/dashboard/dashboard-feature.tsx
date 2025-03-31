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
    "5351CBdiXYVuy6rrGRgMGJqQfkrKs6DwbcXzZ8oeuWyiv8Zd2ZTz1L62qQyyMY7ExHGYnk1FLtx9GAHZpaGoUUME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vp53cbUCLMQwi319s3RzyRo6Dd2MjA6yZRAGVBLt2dderoH24iM5uMHjSbVtRx4qyG1TuhyJKy3XcV2J3EGsQPi",
  "key1": "3Ydi3TSED87sFLu8jVDqkGz8d1VSsCsWh6giQ3rDKBSSqu5ec14JeonRZqk8aWqyKWBkt7UusRuXnZ7Vc6WTomJy",
  "key2": "4yAMq93xoTnXYjrVrDJ39KsJiRx9bxeeuLGGJBqAgCBBJyDkNTGVK3e1xyfE4rMrXXwP4uKLy26tWttFNLMg68LC",
  "key3": "3W3XuAPLWjDFNQJGDTXY6gUuyipwzr2zMgmRFSvX1aKBVTF8bX38vsKqyKyZpNuLimuWCCTGvGA6eUJPYXLm82QZ",
  "key4": "5pikc1a5DN3DXTLtrubdiEhcdTCQpRPiqw2QDawaVF7SKN5RqH4YCVD9W3xbYqGemrC9vxhqudGCC7ctAMdTtcjD",
  "key5": "26jWWGG4r1nz9FNY5A8JP6V7k1Xpt8UvxMZNu7kYeXYV9Gi2YV9zerFpNEZ1n9Br7Y1H5kxQTCB9VZ6WTPizAsnU",
  "key6": "2xprcuHojYMSUt4F1Btwme2iDgwKLy9LeQnC41nbdstMZ35VaHxDzt1EYNQtseJQvw8GAGA3hekAzLmeT9Tbg4bg",
  "key7": "3mf3nA6EN5bYCehNxmngC1Q2F62tzkmwcnAGLVyJFTdriGA8taXt2ktpFtJkP33MLj9DmBi6rHX2udDqjqbfKtS",
  "key8": "rz7S5Kq1XbicQJgk9jTV2hgsmPRJFZVVQC8qGSxHkTJCzZ42Y8jHsb5TeJcmMrn3y32kjjvvuLC43vKbFWGDEAh",
  "key9": "62qnHZUuVEXB3fzB9cb3LbhbNbUQ8nJ3CcpAQ1ev52JotFGuWyWFwDG53FHT6e25iY6EkU885Ut9jmVo6w8yzVvz",
  "key10": "fLuxwjW7NkrwxWX527uTRYCssrRLvwNtmkyA6SwVMTKSRuknKomZhzdMiGctbHCD2dzJ3BuGiZ8AP2JPUi7aJci",
  "key11": "3PiL1cpYMKYjr7dTVcDSfLroKS5DjavnhV7z5467erUu81NmSyV9VCsH4p6U5rvo7kkP7Uuf8QoS8f87LcMjfZNM",
  "key12": "5f492f3Bu9Mchx792rce9feu54bF86awi7EdNeto49YGdhXT51S2YgCPXRBDFHVPRBnx1zpHXnGyMgQBBTtQgtai",
  "key13": "5EFBPNRyAkHLLD8nApeSgBr8mLNQVRBEyUysyAJUHgPDDtp9VRFSEZpTdbJ6azHcEhLCph2yScbzxACZqsCv3PQ6",
  "key14": "51jbKsJDygAc6RaunY4k746Avdz7XHyoAnoF5pLvthLZiuBbzZ9idef5XMDtB1pwvhMUGK17h2Qfrrx3D8hXaEky",
  "key15": "4ArvavqLZ5EY72AXHrDoRA1CwqbqQ5wZBQVYnfpc5YeH8asZ4imsXYJ9xJw3KwfL39oNzRsEgKjLXQ2FHnTM7aav",
  "key16": "4qLtazZCDHNXnGSeerJBQx87tQjqG6CVS7yuxpggCsY7N3tT5PRZkYvy1JkEAfcqEQNQ1A7D5DzWubyvUvFQ86Ek",
  "key17": "5EympaeQoukEqe3yEQ3rcNGEMiZ8VhEHVz3GdQNeSA9R3fdxHmJq7TmqcqQVF4erpWhXjsufDiPu4HorZGS5DbUo",
  "key18": "CkjMt1PoUBLdYznqvPdr8r7xZQeokXQBuGde29frFFCitrrztF3z3exWShv96BHsYWNDzFxtg6fLzSsMgcX1Tb2",
  "key19": "5DdLvVue8qyg4guRHUdycxEQeLGH3s7nMUu1G6NeTGj4NwvH237JHuJWAKPCaTBpTvNxHthicK9v3Bg9AK6Nhtvi",
  "key20": "4rbk3EYy11mDFtzdbjYFw2Dgi4yGgfGFQaDwSCP99bExN6pQCbjeu6pP3FimMxgWdC2zt4wy3jHwV2CHyBekX1Fx",
  "key21": "5qxJCcGULZ4sBcFvKx6iibmPGmUYbGVpPKcWyAXKojXN9KM9NEiHRjXj4A5VJikgRxYQE9JBRQ5sCBKLgeQHMVnW",
  "key22": "4SQJdoTPhXsqXBuQ77Q8R8Las2BZRK3PKxve64Jg9K76x2CRD5mSByu4LAW4RQ8hHdbKjff4k6rrz2CwP8gwX2NJ",
  "key23": "5sEwjKpbgrPK9kfd8vdMyFpnCtzZCbJGkeHvXt8QCKQfMtRGvD69WwkEKVBCDUSQyHjRJhcUaYq7Wzv6MaMXjzPT",
  "key24": "2igHExAu8rmuTHhC6G5yocBUN3bMNVmXmfSwhKKTsd92fsPrh8wSMQ8Y6WcdiwJkPrdsTXtHMAHnDuxDNhcHho3C",
  "key25": "5voBMPRVvAtVyBNvH1bkdwzYaNUjXwEBBAXA1Dx5JwdnKnsJDE3gXJz5F8UFXbHpmk5HK47eu6JKY8dkVa4LVBNJ",
  "key26": "2T7gxhdxyFQUfMReRtaYoQ4YXxnRbUBDoGzLgXhCpbY2RVRXLmSHSEEXsKoLvVWX1RsZsJ2mmXm3AJFFLDQm4eLU"
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
