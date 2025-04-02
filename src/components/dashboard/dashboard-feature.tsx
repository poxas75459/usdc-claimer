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
    "3ZgUTMxWMESwgZQoQPf3NM8AisFchBidbMkpywCPbJgWjbT4sYkwcxjiTQ3z4ahZFTQC7GKaSDnahXTK6FpzKncj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mVjxF624aSVvRL5Pkue79bF2Gc4E9bCLx3wLvKBdzsGQ3AJThzcZfx7AkK7GJ92zR4VhX4RdR5xxWqGVGjLTpj7",
  "key1": "5sC4mMWqrvWXVCQFsC6cJ4wzhgXsMXz8PiFUx5oqrekdwUjQ2rQcT24eyo1AKKXSDFqa7Kuo2czVeHG2KuLgc7jR",
  "key2": "2w3awX9HXeP1c8DXMrYYBEggJdCzSrNVnDmx484hZNACqMp38aFBfUGp2tY2yiC6Fbe9w35QmZV9GK5rQiJwY7NM",
  "key3": "3UKHMLNVVzV3j55HHNLAGifvNtjZUn5aYqGgwDPeEg2uTsaJXgLqrKFmjEdNFGEbjhANfDhagYHg5VHZ8BGKjaTM",
  "key4": "4RXMo7SGXet6LWanMYmK1LroaS1ojQgrjrwdAzEVLAffbbNsGdhHUCt1C3Lp71UTaJYidzQS7GPgcf2v4BKLbGGu",
  "key5": "5WqXZsLFV82DCbsDtsLzwH3Q49G8WjjEGUYPPUVri53HBRdavRMeYLPNVrHAAY1r3GXoKF3aSCed7bxKXpw8HCky",
  "key6": "3UCJBfHovtuMnQpSLdDprW4FzAHA6x2NGfQGHgkH6RMDFFdAEM3W8A7yCHancEDpUCZ6KisVuX5WWroYbdx5Qcfp",
  "key7": "2G3QJ9MPtsA2oep56Fogcw8zDwV4dJ6djES5hZeWdxoCVXbmpMS8Ga4tk8Y6PQ8fyNG5gYZAM4wwquRR7ENL3ozC",
  "key8": "58wzXHRgnyVxcuoMMM6194oD1AtCcwRDZb9X6P9ZT1myLRYGLfTZ9JP61DeZQJhh1M5s2ksqfwcCgwmEEGnRJLYb",
  "key9": "4KdxvNGEpRQ5vNsBVvun5XMmaW6YBS2A77ooaCojmdeMKYponUvrEiDmMrEnWzbXHZgUPE6GQVdQy9VjgykQWM7W",
  "key10": "3bckpBEKkNQDYUztJpgpkJJjHMTgJJyHPYr1zQku84Gdjnx5WXSEhJPdDCCh7ByauJB3gekhMVBpJvRyP7JQMCt",
  "key11": "41bs83MTE5FAf8ZHoUKmDBpvoFtRcp7ecCDzn4BcgRrzmg2wrc3oHLX5FUhRZbuHGRznCtanLbqGutDERpHNqYD",
  "key12": "wMEL8ktYq1AiKod3kqWZsy6DTUyjTf5ouiMN4Xgqp1oJoeGAhoZ7BtK2gP2jDdbKqdT9n3hiXopH44GW5sLR94m",
  "key13": "5WcPWxkrSRivyopQMXWVivzosUmRSWmXkCoEiuxYeGTfeN5PvcNLjpgNmQG6wrA1i6jUemkDuU74ZLM7cvQyE73a",
  "key14": "3XUBQSZeZxu5TYk2bMcW8CbyxTDkfBuLDJ4Fbh8vQtmqPyxPk6NVNaKYs1yiGvntv2Wszv8bVb8fwgx46LqTQp1P",
  "key15": "5JhgfkirZP8yUNBFXfkLB9Z9srF96fE636qUao89Q6mgvdZvtBADGksMEq5Z4z1jLQngjaNWQQ8B4VrBK6sF5hah",
  "key16": "3Lvn3nZ5NRgGG5eFhHdXB4BZRYSVhetJXJ19jH9NvPzhG2MpBQxj4CXACifqLNfZs3YVWywsd3rnTPWFgifYs4Ch",
  "key17": "4Q6D6RevarK2Xt6WX3BJq8C2ayk4quunRLegHCYKULJCFD1BZbRXugmsgGDd1zzGBNm4GeAhoq8Bg6Vi77cTD4WE",
  "key18": "2ghPWfBjJLiwijdbfPJYnF8cghgoHRLBK9jLb96j5m6e1DQY1cLEEL49AFg2ZLsBJudqWeXPyngXiGh2WwvhEZLU",
  "key19": "3eHGDy6NTJEppUD48Pdf2gWqHgCFqeptPNkGjjKkpAGfBdzF9KBG3qiFCPd7fZVRdf8vKrZM5UX7GgGSLaD6mvMe",
  "key20": "4u6RQFmgXgBN8BZxCcAnitt7QBxGLBuW1oAVMukC8XJVfTmnXzb3rQgES4zVf1L1zKt4169hTDMzNe7rjmL7hM9J",
  "key21": "2CXfsodK57ievTMmFVYqEoQyAoUNMW7gPJxUjVNUEsF6deeUHHWdtKXZNx6mVK8A7hbsgWLdTbQXMDU32KwvMKvB",
  "key22": "2YeJeGucexxaTPCLPnoHBg9x58EkeqF6qL91Rx1nGivhxJG2poB5Qg4WYzMFrZ5mh9Y59M9yrR2HpRvL6JhXEJr1",
  "key23": "mWrqwqTNMfwAPo3JgNsUmEzaWnWG9P8kFSiEqPMLZCBaBEsQKwJ8LbCrAVvU36qXfBQfDQfce2xiyWqKhWYdVS2",
  "key24": "4tsXReHMy3x3Sv3auRnphT36zZsMwUHLYzK2zk4DEwmqc1brn9Kzvd2DU6V51Xt3nGvasGZ3a73UKSP3Bvx18ZQD",
  "key25": "3eaxS1wmFhyKqdgbu4qig3t3iooSTK5gBJDqJUVjBh5GzjVbqphoJQf1ZTsbbACAxt3ZEpsLM1RFopdWauYbMoui"
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
