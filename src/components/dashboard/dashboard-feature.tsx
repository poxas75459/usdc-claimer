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
    "5vgxZ5PPAR2o6HXcyVAPVj1KJSRGqtXCkokfLrxhWkvbbVMDh7JemqqydXWpRzUGs2cqLh6w5LZAjttfyvmbeRSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qVecCeEFhUaHhyh8BmVt4dJYh9YH4DBesQZFhErQ2nWmysSeCnDz6MvRvBmgp5Xsu9RS7ouK4CdbzrAbqDFZnBR",
  "key1": "5zN6JPPy7ydXLZZAfs1TvHYGzG8N2XBNBWeTZDeVGDVMK6hy6g9KbaRYWUnsbyDBk6wtJqyXig2cGzPjinwKuXzE",
  "key2": "3L1gNMSSVyp8RHRsD7C6MFG38eU7rCy1CMc6Gjx4pZrrUMToH3xvJQtJcZFg9ZWrQfeFtzBpQnyZ1dtvVGspk2oG",
  "key3": "579N1AZSkzS2eHoQ8YzdNc9nVRF78Rv6tDjkN2wdCnwUne4nMDTdMrgmPSevqXvNmkEFwFQB6stsRfkzAV8KQ8Aj",
  "key4": "4GgH142pk914rFm8AMssGHXucUVdy7kjsDtxNyEAPTyb1DY8WcKuBsFNjfbaXeZg7Xh8WrTmpJMjLyDmVDkDvEge",
  "key5": "5E8iwZeToQ9v2sQDFW3vTafsfgxr5B5jW35Bcwiux5w5ZmEHQR6nMipLxWKkJLzY3HKLXvhsWbT8e76sfZhRkWKJ",
  "key6": "2wNygBaeDQ2sBYyG1NBypVXn2wPfhDRmjPQ3HEVWRJujbyG1uAv8xkJWvoNpnxofXWPZaH1cepyQhqai9WNWRY2D",
  "key7": "5fGi9yM8HhXG64bJQfkDGYX2fwdGTAkbqL5bbm3GbRAFaMcADwCtVXdLi5oHcq7omzhbGGfHirvxBi6yhpwzxuEo",
  "key8": "5eH9RSu9zgmZHcwRG1gb7P8MDzV1gztiBTs1gV4mdvNFuHL1ygBmNLqQRx69varG6FAYcyC84AMtRiTsvNMzf7An",
  "key9": "4tNUHmse1oPhWc2oMPZDJSeVuRkV3YVASUho72vhJHR24fDTQJ44r8QvvHXCCm39gFiLqFQKyZzqiG9hUHsDFBde",
  "key10": "3hdcSjPu4Mkq7ELZbWGiSGvnLECTFzstLqBKdUK6Vfps2RCdyNwhQEujhd87uzGA8MQJYat6rDYDCC1s769h1gyS",
  "key11": "bu7YZmVXSdpwkeYqv6MmTGSQjeqEGYEtQQGs97StwAoHJgd1qrNewKJuCYLWNDfVAv1BcCJpBgzVSMY8NSKtJ2J",
  "key12": "2RdN3dpVuwVEXo1TEKHWV3XYncbV9S58fNxXVQfPwmz4JKE5gT4k7dmau6hB5BLyS7FipweN9H9HkCczxd5oUgBQ",
  "key13": "4jDvDhGc71UAVsBKZKgdSjF86rGkkeFjJQw4FTCarRURWuhqJV64CBtvDNyQnkirZFTcHkdm5X8eTHtT2UWgASdn",
  "key14": "3J51Sur3r2RtsyVbaWyK5XVyj9jZYCnavrR5LuwAKP3b5rAVAcE5zNFWJkE8Z8FjgrsZgwrVV2SFYsG9kXqixe7T",
  "key15": "66cJypFLpRQVPZckeqkCQfSE2MXt5pjX1K1j9i9jqhwef7aoBZz2ydbn7JAJNQwGpA8a87KzJG18wUQmW4iDkeMJ",
  "key16": "3NrxPbraVp5JQLNjNrdnUDGPoiGm9d4y1JtfkPESLHZ3gY663iaStKAQ3pVgxt1iXxVByLEnzpmT95aC4dZ1Pq79",
  "key17": "4BqgpQ6xYEnheMH1Mq5difKCGa84LUiGUm4NcffPjnt9yzZWaSmDX8HALRRhjHFLLgpEtwGEjEvHgMYZFbffxzKd",
  "key18": "3LL18LrWmWSkxjPTriZUJEvu25s5c7BjMKjzrSAUHrmQ6A6RfpjYXdrjn2tZZqXiU4cWcqiUA1eEESYy8s6UkVcH",
  "key19": "3AJJ4HBzTgqf88WSEaDBudu7G7SVxfnfdov8ybYNiXoBUEhqCzjA3NEAdMwb4BeXg4a6To736NuJssGCukEik8Bd",
  "key20": "3iNMwaFEAZSbLoGP5TS8hi6avGaBggqMyKzfnF6KHrs6XfMQzKN7C2FZPgTAfwJPm7mRsqd94UpRfXNdf9K6QYi3",
  "key21": "2U3SPS1qh8u6EUbxDQvF94E6hD2sm31dwR7A8jaRqgTh5BjuA5DWyWkX5bmuz1MyTxvzX7XfpqNcFYQ3eEcAFruv",
  "key22": "5AevsDsq3hDYwrweqE2yvH5VczY2F4k7T3yEYgXBTxJVJgiSuSK1tC7XKohR5Z64x1enDtyNVxZVi6LxsH3uZGB7",
  "key23": "oZjVguTXxe6kQNsUuWL472SokQ8STgxQsSN6csNBYk73WujJE1rDZxFP5ZRLthYdARcRtkoAdKyWw9c9Uxi83L9",
  "key24": "5oKT4nPci3DDJ3e3sw5pwfk3LV7XXEfr9kJnuYj8yvmW6M766tRpHDMhDwegbnbFuLkE1p9iRyvVTUKJ5Qk7CPie",
  "key25": "5exyM4Yk62fBg1wS34HzZmXpA7ZnHecrV2CFmuAi9uooeKQW7CZrHuC4zdEHpH4L7JhCw5uFL3SAtkmhunwZd58A"
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
