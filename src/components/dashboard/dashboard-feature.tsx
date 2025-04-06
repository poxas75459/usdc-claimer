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
    "2wmDh8pn8734AMKRniz8fvve3itpFvpGGV9HSo3N9nfNKRa5uXWkWQaxDCCc2Dewi4H3CTgXAeFx7yPYPXVJQPZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mKSbbdA6E9827w7PdmZetDcVgftZr3j4XYAg3KqcunUWtgL6EmRNSw3cHRp8u9qJNDsAipBEQjTJZAGXzfbHhDJ",
  "key1": "3Gp7smD98k5w8htLbB3H7UqJAHsXgR7FcK2zLzPzqqsxQpuWUZwQmo3U5528vZi1ezVcm6G9bBg7hnK4Fi2QuL1g",
  "key2": "M55LV8CkZg2QSw1KCUC6ALDvMdhR8z6huiKLYUZFb4SjBi6qJQSih4MQ5yjoxKjFdjYsHLyyD5yiZu9EenrXZ8s",
  "key3": "5kwNXZyUKr5Tbb9aabPgMwCpC5TcpgoqJvbLzhwchcWHToRKguV3d89tPncQoBGWqJYBeeFiSS2muHPNc2jMLY6m",
  "key4": "5HS59bgDurZfqBxWuVaousTTDHWQtnZyFLGsBte2N46tXPrN5X6GtcLU8geedcyTjoRCEKZnc3sGkJbS1Ks1vBFv",
  "key5": "MKVTGf6umMR7pi3aerzWEvsV7L2nD4nHLb8Yjy3zsu6k9nss8iHfBrYrC8PxgrSB5pkpG5kzpobuiGQgvpvD22n",
  "key6": "57QfMSyRoDyKGYQTLgRvbnLSp8kVbS3AQsvq9pkfbwyPMz4zyHqW8BnDkezpTpHQ6YUDV4yQiHkS4FGJzjfnPwcD",
  "key7": "2wR9L1pfRHZ1DhiCCGjwsv4HxYi1FBnHKD1cahbzgSKbxTXZMmRj8G8kCHtpxXUzBYDLEqC3CVyFUMi8hN2n3sKg",
  "key8": "5pK9NPitwKGSmy2VALqDEL4GNK2ciTrEwDnkNdQkx8AoeJjuw9DwH7rkGuveC8wYiDfDLCG3tBZb4Qi8uywa7siv",
  "key9": "5VDoyWPKshbYRPPPtiiMH841DEsVPYWVxWg5ndHBjBdZYMMtFpYgxUuwTEbbmJiyBQTw2mYLJMGUyFXdB2Zy1JpE",
  "key10": "4hG9NQNkiGvgAvWCgf7ifHgai3U332bpZRsnLzc1QNqBDVDDY3xmDo7XXFBW4DnS4i2NCPeJc3d4AeBDkCNKc1HT",
  "key11": "2hh2n9ac9za2XgnAha5C1u8eRnzhKbABqMCD7r7UaSW8HCMRcFoXYH6e2wAeGR5VoRiUDxL3dcp54Ejm621A4bj9",
  "key12": "35mKmpCb6gngMXfGuSTo6gYBm9U3NfeWEfUMzea4nH9QZTxCCvYW1AG3a4gRUw6UBoGxk7ZbHPeXt4rRsfdwHFaK",
  "key13": "4hdmCZFmu1R5qExgmgLvo3Fd77wCRFskHypPhXgZvd5HaFJrUQkBmQue84bTtKRBFhEL1vgRLxW8CbdJYsRjJdZn",
  "key14": "3hAXMoWUEQkDxoDkW4wwPCzCCTSCzQpzCbjpj7ae9fSLkoubSLYd6wFVb26hwZ6e9gwewXVqrwG4EDHnpNQCXXVo",
  "key15": "3K7ojF7TwNMBz97WToPny2aQ6pbDsrX7ta9cu9k3kDozDRQ4kk36aAQ5BtvXkMDb2eUhHWsNW8VYkhH9cZVJUAQJ",
  "key16": "5ubVJ143TvpuRJoHBB7vmD4i2eMnbBxQoi9ngfLBzicbtvuqJUmwwmy95Myu8LE9zsYsxoHVzJ53Q14AYdXfVKax",
  "key17": "cP4i9FimFdhfbip3dnv6ysPfGmDqC11eEwjJy1cC8Ysy88MwBhM8BP2ygMeCB2LCeuZZ6AGFHkowssdA8RoKA51",
  "key18": "3cYopAdyUA6Qn2cUvzb18i5heP3Scb8p8JtWji2kyb7o4EQASBmYMKf2wi2jEPxF4QHKhDjVeNLoFNvF7HZNjHMK",
  "key19": "5TGn5MdkMxjNv9VzHhbtcHFvRwspciU8nfyvXfji29i2oqVZBXYofY6ecYKzRRTbtezFSpMk7AJs3szNSApMYqaz",
  "key20": "5hrB9Pr1robRp9RxNZXrz9o5iRAfmTsM67RcgQ4T6TX1yEcwvFFxUkMAmPX73vkww1AXvHnyafbzkJLpdhrQLv8A",
  "key21": "5dXxViWqSwajuBwLTfdsivW9GF19RCvGLj8JRNhixaMvJ84pUQRTKQyU2axr6U14scUfAJwr27H4eeZzVmec2MPT",
  "key22": "39Mp4Mw7vmy2xY4BW6duoQx9QvNAn3uWGxVDVkJ4fufnkRKDHxyo1CH7VTd5wLVPcuhHNKoiT99b2UqvkKnC3kC",
  "key23": "4fKfQr1t4GiE1kyXZDjDxodqrsuebZAEgPSgJ4pVYHuK2GVz1FwaGjYMAKeFqHRudSSWDYupPLmQjuDht2got4Cy",
  "key24": "5ecdBkmhq5bSQtzXW4rfakK2RrmNZufB5r9Qq5pWfNAmijcMDdw88juVkk3os2vWAeDXmsHcMKbHagaSYi55R5LY",
  "key25": "4MLy7HYuTGY7EJcW87nMCJaKnXgQWVefngxKgS24Qxm6M4otPT1uTmA3GqT7yUJ4AVn2RBnVTWUW7EfdjWUxE9Ea",
  "key26": "3Wty5hAyUCkKc8iuUNCBdaqrB9v3NAV4TJ4oWAJiqLpisKxcHPDnizXxJxuesNXVaojMz1k4stXvqHHYeHGu54Re",
  "key27": "5SETNGpUF3kLeYBYowkEMozbuqaqcCsHrz9Kd8FkWyrAyrc9Z4JpB3JSXTMChvfgYF5CjgD6gwzs9yYPwyy5WwsQ",
  "key28": "2knaAL3RaV16gtiHCtWfqwvnk7ZCNQu4rcrWYha7CrAtVBnT2Y5ZSoHSVuy79ULVLvediKuNJMYRRVdK8VSp8Cad",
  "key29": "2BsYQ1hBFGhLpGQpdXY6QGwotsF9HfwV368bwhMAj4Cq7Wqn1q7hC3bH2U6cFhTTxNZmTgvnJ7F4tLrosJf9PvDE",
  "key30": "3m3EXGqRaYtPQAWkQmn4mB13VjgP9HePCevy2xtbT2aomDk2d4jQzWn1Ysr77adVwGUCX8gRxRE1QN5poYJNec5K",
  "key31": "2dyRdLTJBAzZP9SgfE8rpMnbM6ViRQ59WdiZKWDbKq1tqA9C8K8RFtzNy32WxAfWxXGJP6mBY7N9YBuJzG9MYHTt",
  "key32": "2smsu2m4Doar9BWawHFUiAPH3CtFAo9vJjPC1iPbD2ocfsqKXAC2bWsmiFnuNGfGSfVdvLkh99sTgbXVdSch8TXz"
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
