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
    "437xKw54eoQdojX7pGu6mar1DZw8jWVtAnepuSVQnreabfRxHnKWtavpmZ1b1qejmCYBrXN6mASAiiC9fhVfTxfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4om2DXcoGCsVtPb4KLLSSVhjRL6vHbsQZUJZHhVkiL2oMa4R1LDPobkU7ry6eiCuZCaHrxAdSJieSsp7Tfh53x1T",
  "key1": "2T36xmPhXkoX8igXTZfC9tVzbQcjuLeFDzzVTZKH27WXjCkujdJU11kLige73dhzLJQTWopHE2hBGR9Ysee5JGF2",
  "key2": "38CaGxumMKNJquroXhkWkj3HEC2WuuTJqACz5y2xxQFm1Zqj8Srd31cn5W2sorjFUnxxpYkYAxAJAAMcwTFFsB3E",
  "key3": "3UV1MBAEeKBXpaf67mUNBYi1bnooqMdpHrvAxqGEwYEwg2eqwQBdnvXLquGf5zh8do7PRK83VGrdR5ggVktTQduD",
  "key4": "5MPhkvgHvrX9o29D9EbMXfRCXZnhyFZQDW18zzNBP5NgF7tH3wBtw5oHHfsn3ZnUHNi4i5EiwtVgu9ZhgyVYdttY",
  "key5": "4jZxm2NAdGE5ofBgikAnmquv8DWQf65TzmDH5SP4BCqqZEeAsoN2An2eM7pskb3k6vjZQQueaPzo7Ezzt6nT2e7M",
  "key6": "fY2mLLVHNFgcy1DYM6crV41bYbZLx1WuutNdP6sf84xxYTNDF5rYbGDJ228gaMGhTSQX3uf2Dzz1kANnANTmqE3",
  "key7": "HkXkGreQYP9evMwBJ4TJHvwAFU9r12gNyQZygPaHWxmiSX4g4RtFVveTDzZaH3To6cXEFSj6dFnKcW7a9VGJTtT",
  "key8": "5R25y2nfMt4xRTHw1vzZmpEZ7mfxud6o2b3zudwka9oDpD3y45BALbDUBc4BSPJfh24HFVKGUogPTQYGVjREihPK",
  "key9": "4nLRH4bYiN5CUHtJBf9rewCEnppzY6p3rDbgj5gsbcczK7oW1EN1wJFJJ1iqHqxZoTpSNEpF9CcVddMMhqA4StEX",
  "key10": "3VuiZyo57CyYmKqco13NZx8H2RzFcaKutyydH1BRPQgij5Q2HJCM2j6HZ1YS9PmgkrRik21WU5HFvqRs9JvMhi4X",
  "key11": "2zVJRziortdxWxLaYtRVqkTQaoKAQ5kAFd1v5vK6jrLyh7R1vDE8qQUnntx6wh5ZztyAZfuKPaoAsR4NxRQH2kTL",
  "key12": "4UdP8rrrvzA7T8JLDjLHamYZxaucampfBsGyMo8HKy4pxT2mmVvzgDUxgBkPGxV9ZtARfwN1JGy1DpTnA4hbmJ8Z",
  "key13": "3g8bfp8DncFzraEasPmeYPnZ57Ej3Scq5RcYNzh3SVWSnDMz2GeefMfVPiL8avNJxRUgcyUqnnpvmRb89138m3tQ",
  "key14": "Kzq9qwFcWe8VT9yYeJ7bmu5eHP3r4yFgzzFcxTx2PgKEWjrAkq4LAqHoNRnHH7b9k17Z9E4Lfc6ZrE6qiq6LE6s",
  "key15": "3mGQBtqyydTEg7yk7vSpjpPJS6q7457FXovdQmmDco6q23mxdA1JXN9pP3Ys4LryQGfUJv2uuccGcDN249BkT5Z7",
  "key16": "3mZ6WDrZ6xtb2ncEFB2Hv1K8vvR6aRkkSXZEKAgtx3YhiDm8ApRrpTkrSEtYE2K4xvcoYqp6zFC8uHwdshgkAY2p",
  "key17": "rLdP7aFhFWxfPMVe9dyt29MU9TnXHcU7mf2Bq3UgPXeyMsNMWLX8sw6N4a6hxLTQwNhyjB8nwy7rEp4DcykLN6m",
  "key18": "4Ax76U29RSbcigkBxRAtuub7siYfsk86sy7hP77VnGHXPz5TU5Jr9fs18mAW8iYTDMratUDiQtpnmUj3tKmh9T8c",
  "key19": "4P9oeGu3cptEZnvhdgcojzJ48vP4eNF7pzLzpqdt19WNRxfvLx2MdyvWKj8nK5ULoRCvaAb9ASXjmpVmugmmxW18",
  "key20": "yiiz2wB5ydcU4ioTw1ovRxdTis7Z7qHGaqydwL6aAqfwGK3quMxc41mvG4kRGXs6dVASbtQkiJ2VPk5TWF4j6Co",
  "key21": "3TSKCiHmxKm4iGhYi1sErgGN1UhjRMYsYom6y5AUJGWTrpHrsFhwMQf9PCjqqqQLu8iRdz3qrWojjP8gaFWwPSGR",
  "key22": "3XAjYZXdgqDAc4cCsByc7kHSXKSjdKyPfJQwr2xTa29t77rzZBmxuwgXHqau4v98QrXxMtajEbtSCzKzwiaejnKE",
  "key23": "AkUosx5XQ8tSmtmpP3CKygCkjpNprXckH7DTtGZ2VJGcq88GkwxoqGJsQNqKipjYwZ8fwB26dVNZQXLNVzqfhPr",
  "key24": "5vHVZ5GLJTqn1PL9uPGb9L89LSVo2qZFLeWNsetddWmSTZBhiN6Wye5aZU1JpRQhctTP758nDnRwoTkHEoi8odHi",
  "key25": "2HdaKJF77DXhJ4Kq1WYEAezrDa2ACT4g1W8osGJcYTRJXunaBiDSDn747ZwRiY9z5B5q46WqVUodZNtXp3gM3nJa",
  "key26": "2WGCWZR4LhbRS2V5agwk5kNzEbC3sqoQTtUJ5yxMW2yL83qdeT8hj1BKh66WgdoQcJ6HJK9Tqejc2uS9Nj6w1hBS"
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
