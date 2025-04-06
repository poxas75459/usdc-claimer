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
    "2yjbXSQLnSU35An6qxnLaJRtLQEW3yhZhZ8kyBy3hEP5XfhpEEae3YMnyy9UyC6Num2sSUFN4S8MnWpAUNxxybEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NA5wtN61MEAqX81TtB7Zi6bWD9AwyjMVKRdejPL4vqymRD1eHSdTGK5d23SbZbKZGLAP2Z2X6Me4rAUsa8S5PQ7",
  "key1": "5obfxur8beSWntVcBBbT8tp8JMwNPMQdUPVXeK38BmviMib1njPuVvEgvP5QFk443M4cEa1zBpTk6ouXUDcsMvhr",
  "key2": "3p1Eg1XMMD4owGMWQaRDvMmgbTBnLFUTAwBqqTfA1yh5gqg3KfFQNjUF6AcEj5UebS8HaZGmMPbf9EgPcN9WkeCU",
  "key3": "1b8yCASNsrBQzX25J7929uxrHyzaU6xZhTv6SUgmE6STYGkSZM1qToSJDZRgfhFdv9QQxtjUMcvehAZBp8JuemJ",
  "key4": "5aErpVP77PgN8x7JMgggZ2sLrqdu6X8jQFDbuQ9SjLWU29pK3JhV8UffTyhBtNNVnBtt4U82SmFy6QB9KUCTzi37",
  "key5": "4bXnxHQ89CdY57vPeX7qJGhYNdfMc6cfacyZ9h8guZPqB7RgJPXJpM99xcqTtM4yju5m37sAcvzsi5uoW5Koxgq2",
  "key6": "2e8vXkDDPpvLGdDmvuKzD4eaNoGDjsdVZV24Gvucte6Bk31YYZVADw37F9CT3QQCGBR2nQBor6BCckyp5qpeWwrj",
  "key7": "3ewKavzNmMjfxTgwP32DmayycZJ3kkLPY9e5Q6JUkiyNaMoxLtQb3MpvpaNixJcsKjckoz4wzkSVGDwJCCu3rNu",
  "key8": "5NhvoQHzvQxb6ZFnPs3Tdn7SMnHb4fwAEB48y3UdAiVKnCV2Pf23bNo26trZVbtjFrL9mJQomPt9efghaowtE16v",
  "key9": "WQA4aErb7gsoCFnKv8RAnF95jniCCWSrV7a2opXucrMyTn4WJr2dsWtH3GAf15rysSbMznu4hGmoKQRoBVuDCbH",
  "key10": "2AhJzGs5f5s686a5dSChn3HeptrkPZqzZky8BrNX5b93bGoJkZFQpsFk4Wfd74gVDfwXiK24GeVRwcwnReV8mcdX",
  "key11": "5NKZuwaotiGcvEMn2V7nyFGF7a12fYSxvuYRGBwrWnNzKEdgyEfPkHe33iQDvTbMUEnFpcsMSRGoGpfPmXMSFWDN",
  "key12": "2KQk5yxU37FaLEqKJnZTaX29nVZjy3zzPXBNgm5bwhRiP6fiDxBexcd3nVQitmcdjqeoBrmXc1Y73o9eFD2BABBz",
  "key13": "3S1Tg1zcBHqQCcPnR2B37reVuyj1Huo25uaCED7TyiVm9Xuqe9pJ5LkNDhzWFNxpzdqhe2afv3oBnkCn6z572s2f",
  "key14": "45jNtFtYup8VERCZ9DrineGUc4ehsBwpEn9S9qYYQadH7EFKH591VeHHQieky9zb1JW4zERn7uz6mC9g7xwEGvVd",
  "key15": "H5EgjDGJF47VzCEPm7iQkY2UriDyY9UUyhp3BykYCFpypXmu1gdJLddqKSEz8sLtuxTd4KaGWMDqdSrh4BTNMyC",
  "key16": "3FmseXFcJ281k2v1odhVpyreoXG9RiBvNCvjuN5trbyBF7Tt9RbjdjVn4XRtnyeAnyCk6ALeavGn31heBa9x2bCi",
  "key17": "5KYYaAvg9cVkHsTmdjPbhyW2VgSjcJMjksSsPcb5FMMHB1yfcT4CTvvkgQT3FH55z2MnP4ZvPTWiEMWZFgkLkkgC",
  "key18": "3gnz4kvj3CFssCWs214cVvUeKtvxCiiUD3bun9X3twFWuAw4SuV9SuncZFbhWUP4PfTByqbuzfv32abFsdGheRro",
  "key19": "4Ed5QnK9XuSeBXxzViKF2KXFug47XZaNxNsrGPVd4jbqSNFE3jj49dU1QP1QxukQWN9DvregCTv7FW5S56PhpzLC",
  "key20": "4ipV2xcfciE7YxDGpdv5WgoK3PMCaX7CwoD8TSzr7p8PXqp4Mjz6917wE9WHEJbJDssLLmmS87JYUUEDEiSCvPsn",
  "key21": "2eHyXvn4xXdqYrVRAH2DJKRXpPe7KaLhfhFCRV5hV7gKCVsEatdapcmznvKrTZBpjEAYARrCkARgQuULRKaQwApN",
  "key22": "5WSat7QtFrygZxXW8kHDGx5KYdknRv155qSLVwKSQ2fqE6pJox6T3bXjYyQzHjneFUF9tu7Pu51kq5dNbPT3B7A2",
  "key23": "36Yw59p7xSUy6mJWDZ2AwXSv2vj9dzcVGQyNey6d5Vi5hDejdg5j13adRihNgBwcNcaNSswdYARCZCDmxgMhUh2M",
  "key24": "4dAsmGUHu6evT1xD3Ch4vvgfTHKTRmEurRM4daE4DG8FzSwXhqAWXec2Se8C3445DNAheye7QR1M7szsBh9sN5Hk",
  "key25": "4qzNDZ7TLm4znNFtar58H56Aqy5xQ6yCUCjqLWcNGDLUbDQ3uN66YadayXTfSAeshQcWiR1grPwGVvQBVj6Cr18a",
  "key26": "5rNxxad9hGHbQhx1j6bJapf8QEdoXEYoeAcwVeqJ4kEGtQw3uxxAnaSvvH44asNccojSzG8kpG5yYFQHsK5Wv3R8",
  "key27": "4EGapqj8qWwaCGumKnBHsQffGBqsz6iMFbPYHqBnHQBpsuHrd5rq6Ea8DNXUtaXVHQsR6oA4y6eXVtB97saqzhSr",
  "key28": "2HzSvEErDK3g27oZRf2RXBe5kjK28EDo7vyDqo4WG53oy6hG4HEt6tPUnUmN8e1UpPeq4XSbqzaFwm4T1YGRuJTz",
  "key29": "4aWXU3noaXBo2P8con39H359wNhbVxww7oaPuxFDq2Z2iXCH3rRtEsenwbBSG9jy7PcCcZSs6RxFnmSf4KMPrwud",
  "key30": "gYBMxQGBx8efGhwiK867mcjBjnGm1Nj1SAnLs83BeS8y1c9XMBtqCEzdEbPEMY1MsFBYWMSGSVHd8QKwfqYxMwB",
  "key31": "2g8fQDQLSKg3CdrqMjiDqBTjg5HPKAp9cHM4vqfQ7QZ5bdeuD4grbPuQqBPbJ7MhWiHt8EhDEzCH9WX1cX16c736",
  "key32": "4MgTCEcQuG6TnspDSsAnMnsTzvkuaQScmXxRYbHUM2H6utK5tWdqeUshKvqgmVetGW2RRA3sGTDJABYhVJ6vfueZ"
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
