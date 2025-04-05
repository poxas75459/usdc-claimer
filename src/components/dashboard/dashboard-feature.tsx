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
    "4XiUxx8oFbopqubVzEcsXkPWSu61MXf48AsUJPmjVvSwkcw2FEZpTKryMo3c2rRBnUmKrpWsE2WJ7tyuUbP9XsFn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KnMb9x11kFAP4shbnosNckejyg5WTqm1jCQu5K4D45G54eTnGtQS5FJj8mZ1oSNhEZSQapr1ER332C1LNspY9T3",
  "key1": "38AJMWWGw7aqvC9Y9poFZWA8k4FA1bFn1RHkk3ZwcszaR8wLiuUrvAbyo7CXuAYuFKmsyLr6kCNszWFasMHywMDp",
  "key2": "3CZSSXjMifnUhh3seBAJ5K5i7d3rDQXwKBQUfAdmeT5pjjncquajbiGGJ3YrZgyA35SCmzogcQmKcEwbGPWga9fj",
  "key3": "G4M1DWKyw8t34wPb8F9vLF5hmV4goQggcmUUrfcCPTLHoCQbozkgvJDzxofHFuu5aooBpiY4CWmzSryfeXygKZo",
  "key4": "6PLey3Pgs3JidPSSdJVJxaQEVmJp8ssiz8uBtpA83a5QKVb93b5mgc5st4zyorLTnSz3XmdRfFWQJRvcpsBJHYi",
  "key5": "4DrcekmvvAaAWRFYYTXLcv5fkPYZaQq5JVgnKzCYpBidUr5kNJzuAGwzxB5bh7EQkNoRNx1voyFfZDCb7HDM3SP5",
  "key6": "4kvzD8iYvnEnUvRbQZjTbBDuGTc1CrrevZ27tk6q7ZBfPFwEa5xgGXHK1W7yZWruq5AXVEYFMLbA7oErZDLSksQu",
  "key7": "47hJku4GFKFZhmaCrM3WAvxbsB1qyYjsSNnz1gg7hroJWavA7JHMnR5QbGhQku5Cj14bwchwSFsXhbsrLiRnBk6n",
  "key8": "2zZhRhLgtbcnSWUDEkFtTHRpg1mX9aLBEHN221XcJYKytQ3WGmdCXJK9Wh2JQqaXC3GSxDLcAMJXvoDTWmYzVKDu",
  "key9": "2d2WRfS6j8n6KPEKNnwwgQVLFkfb1eatyD1QNLE8141hcby2ohutAuEpdhGgZHzW4jjvTB6YVA8qCgMrAmjGjbAQ",
  "key10": "3UsKgxpf1jTidPZ9otp4tYxhikW2Ep9Broa6BqXiy3kuzNpt8tHRB1A8rp8ao2ebzQcHUSsriehFbGMKRKRp9khn",
  "key11": "3dS8rReizH1w2LVpTpAqFmZjD7WJDt1Ao3DgXfBJQm9WwjDtMmZaZ3TiBokogjrCYVzTLRrj6ULBNKnZcVHfjVgp",
  "key12": "kRV5ZcJTbwJcGQHMChmFsXGjniMFToc7zU9P5YSD9JzvvZ1mBNAVrEqdSceKQ5kzz1A4p7ZcRP6y9qEGjXfYnGY",
  "key13": "5d63bAKzy6ZPmb5stJm8FjenEYehVtWG8mXRuRwfofhZTGvQT6QrKEjLtKxBnUR6qjNwvAzMtqNXPh9JLq1vqdTj",
  "key14": "3oDETh8uNhZsn4JSD5AcFfJirbGj9SfnRhbTbA2DcaViGxqTNrTr1dLYkWsVReMQVJzwGxwmfEXHaWbimWpNqsxc",
  "key15": "QhbqKQnX4fjmySn5LVVdPG9Q34pYGXu8CydVDM4Tr6QgbUBFHCgcJBHzQr8j7EVnw3Z4QEafv8hPsqjmFakCyn9",
  "key16": "3rd6iHuAATRZvmaLAVBW2Eau4tiET6LCL8MNi59c11QMKNGBXobsH3P3pdRRRHqfRSCmUYVbNycdiDVi7EsWmfA5",
  "key17": "484ZGGmq27Nm2M4WcZ89o6diRSUc6LPScF4LFcTGMDBJZYNpw9j9kHNowX75uYeCyjv1aYdjRQbRJWLjED1tL8CL",
  "key18": "3QcxCzE9Rw6wiWyJBYa5wiHtEPwLWWAiPoUDwp2mUvFh1bTpQXZYDaaYYo75p4tRaCL5Q1NyoUYzG8ZuYr4UUtH3",
  "key19": "4MtSSmm42JZyXHUH6vHmw45dakxeUYcUFuTXnpv2mhivswyGKSX7bD7a47AF9MgZzhga5UVWb3AwGFTG7uF95Bbx",
  "key20": "41dxRb1JiUdZ29kw8VPVKSkmRdZ653EpgrqfyYma78DUaEzGW4cZGss5FhgxdFvTYknF81a3QxXqjJgmoAdrtjNn",
  "key21": "4Tzy6Urjjs9Kj96GTcqxRUGdJUaCV9nvZEUqDYZePiuWAV5bMd3rWdJiq3Po3rR2KwZgxh6GZ5A5fY64996jbSbU",
  "key22": "3xzhoXYQPZNHtmw6XeEAAxJkaqYUgRNVTny5V9QD5K2zvzR1TMbd7Aci5xZgv3ocZnFpcsp8AK2evKPeeEkuvRez",
  "key23": "5Pk6qYsMeR7oEyqyDjbBGDhhDYDsYtJGcsDrp5k9afaVwtM1MeqotUX9D9X96YpEcgDeqpt6ThNSKK8yopPFb9nP",
  "key24": "2htYuf93p1EtZaoBN95xAcLFWpbRNaNBYpPCkfTYTUMZThprT67YEnibjBbiSRpb26n6N69oXccxRrrwmURQWPLp",
  "key25": "3cC4AraiUE5W34Mmx4ExptbCYfLWyqFcGHSmWreNbHd8y9xQoRTRwXCUBhdwKyDe1yELTJDH8WfyaNX9KEQVm6pq",
  "key26": "hzWzorFMVjgTqgbQpQV5XUH9gPZepJ6SCqsssPrWnevRbBRiNsk5oKwSFDAu9wBBhL3MczvcFt5qMKbcmpdcEEa"
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
