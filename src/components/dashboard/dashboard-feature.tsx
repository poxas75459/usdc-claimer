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
    "4TRMMgrGi8e6GsQxqMDkQwbMSJHMcNw82PH7QFNMG1aEEE6DuxPWtBMT9xCV6gbBD98BT3QfjNtG1mZU5ubVFmU6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oEkUBB6NhEYutEvfvECgc5emmoAEGmNBzNMnxW6H1hLxM9Bcdwy7Xzn5xhfVC5pMXXw4SY9xtPUDTZdQP62oq8S",
  "key1": "3EYC3hhFR4pYi5ToTxVcarciqdoLvkUUqJ7dwWdySXxkfkwheF2DvbGsMeqk7n4ipPPtaK1QhFzTXu5DvKXcvBTv",
  "key2": "3KqEgQwA8qemo8QzzUUNYQWTi1DFb6GFKocgsHjhd5APBLsgtMSLhy1wP5djGZMxjhbDAesZqA4C7pujssKJT9oT",
  "key3": "RdePmoAYVXkcnyTSGTWfJ8Ay5vYHzeWCw3kvLVZR1DF9AtYAvDwWjqiQgaCn7JiZUjAZveXNAtJgSpCp23wLVDN",
  "key4": "25AyZ8EBD39avGBgsrC8h17J1SRK7E2wX1w9s19GgHKDaLREHy1cXYLpo6WMynm2kRYYBqEW6xEe3pm6VuXx4QUL",
  "key5": "5oTyuhZ8GguapFtuesTxb2r9SogdHn4jwN5p9j3cqxquhAx2buBGWbhoXmeKphuyuM122GRMZ9YreJF5SASnLcTV",
  "key6": "5WbmUQrnfU34oUh4HvDDAjdah2GBgwySQwuAmrcFkhK2Eqo5mMYtfr2fBmx9wxQd8uBaWSoT77PQB3xb1qenJvQo",
  "key7": "3tH7LJ6aTPDqompkjDozGQK9NJqzyQer3mZ5hHovahTucebxobzuYYXgTrQoyHdG4re1aJJnuGrtDmMdAq4idt5A",
  "key8": "252Zwh8RUDueUZJ2fLxGRyiYEud11xtinJZQZypJnQLW2rVRpTeE8QNYrabjcNRNo32TwzrpvmGa6MXBDpzUYxEK",
  "key9": "5HvKpmsE1LvY4tqrkGmr9f73nV1MN1x3BBP7xjwtbYenSMkPwYkSAjbeB3qTj6uXa5VJRJBBn7fHdsWKp5KiBb8S",
  "key10": "4yu37JDr5arAFTVEEsFzz4bT8MLBefet1yKUQ81rAMjnNU5KryzwnktwhK7BYej32ViLL33pSnjuyQgnADbxSPdL",
  "key11": "gJH9448JSP2ayYxKAAe8dfK7P1tvGRrTun6NG68XgYdqQZiZePBpp5Dc3onKTQZgCi7FyLM9o7zCCgU2VECC6HX",
  "key12": "34CJ5yYfui6yEgayy3m88n1Ac2esh6coY1KvKgmWeAm6ws8dm4a62aj7ovZCV5RLEAZV8Kbov8zQP2z87BtMkfrP",
  "key13": "2xA7JpX3wSsoASps7FaXehTugurvvgJacJVSQGU2YSpufXT8Rfvc4Sgjeg9VwLpGmupmoiAkoErTDVagyjFs5HLs",
  "key14": "3d9ARQFN4KqXKq9m3pL1Ue4z43mBPKq3acBkvofFzgnwrKXF8URW5G66Y48ZrwLyrdv1ufGq2QsUDPZtChGEUqsD",
  "key15": "3jztccTNz1PqPbNmETfRsDuK7upxPbx48UHmJNoPmfbohn8LrPi7YjjvCwfDmd8WBvqEa4NwmpAHCJSJiCNbVgU2",
  "key16": "34ScTN9uuUaWBL15tjABJS9dW1oNR7T9KKXnJLjVxcLDQmUZTW4QpCchGxNdoVzeWQhJGeg6UJQjZ6cGd59f3oUh",
  "key17": "2LQB5T4TH9CwfkYeKemAE5WBMmRtDqZjSbCS5ky9pY114WrtcnoyUaAn6jzZYgzdMBpi1vGH2ny1PebRETfhRVnz",
  "key18": "Yg8cLjqHDp1vmPw3ck5D1tBEoWgpp6E2syXJM57if2y9pFbHseEJnDFYd2eXKAjuTxNxH2Pno3pzrH56JQPZYDg",
  "key19": "2VK5TxJunETP5nfxc8y96p5SqYnQy5PZ7EqLSepXfSXrtVuHFvFYzBtohh1n3mueQyxZsEDyL8KNNPdnVZF1QGHD",
  "key20": "3WJZP82EdXrvgUFaupHe8HVJ7RSk7sAyBFQEf2WBJD995oa6B9zoR8CLsZ8nQZzMW53qZY1VAsm2T2eu1QBnwZW4",
  "key21": "2cw83Zgb4XECwgDXCrnA2jP4jwdH85S3FSxgBXFKQ5N4gBPwq4qxHBAkdzCXQAF993yEXKjQzuaJMcuzrBALietU",
  "key22": "2ZEvPewReMJg5LyRmyggVQAsAE2788dKRtbHaM7g9ZZZ2ZgeTAhmoAvXYKkfMkCZ9D6XpyWJGg2YzhSmNqSDwrce",
  "key23": "oQy1Rzpu4t1czvvhPsn6grVY8z8ggrQbtJdZBhdn9M7EYBeKyXiZRJrEAf9hGrV3XAUAVjvcgrEj4ctxnbHC4vA",
  "key24": "2S3QfmLGgv6jETvwmSYqkrtgUrCMVvUdf6YtyBSRz8GQbUt6N7PmWL8GEwbgDrLB4XtDvNAubXj8z6Huqqw8VHdS",
  "key25": "31tSFRymPXbRL8tqhidgfEY9xPYzAHeefJWpi7iQBCxFoTiKWhk5BoFrv9bCefwHdn2LXAzm7SfJuz5BY6ZiEymk"
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
