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
    "3V4t8Mt6xaQc7UtiJhndWPDevqq1BT19gy6kTgvUbdPrPUL8K1ezPQmNBr3SZZGkdXZgVBvE1hs5RF4WSWmGiWkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CYrMEfbDhAfoPdwBXjeNtxkrkJWx4UUB2se9R9f51RgKJLuxF8Z4F4dS55qw1yRVJHkTjwi5J9fEqz2XDzSmkwX",
  "key1": "x3T9Repn9PG2GANzvTCo4v8zuVXAAMKvhZYBKv49Nh6E6mAvEx7XnMPjHAKiTnUaxu4HoRVYFWykoE2Lgx1gKAo",
  "key2": "wQNDH9geWqU6DXE9S1Pa3Ykuhoza4ZabLdb31xPf1ijnYkF6EpntGg5yYuSEs9BFZ3Y69yGtfBLZXy1GginaRRU",
  "key3": "4vpeqzBbKbJkk717cocHYk4xaRDKGdF2iPxGppBeDXNs4nfbAqphRf9TtgkHe4Z7ANTfntang1PKPL47W4oL4r7j",
  "key4": "v3VhomcbiJMgcWuAKPnt2Wewi59XjFJu3u1ENHf8iAathSzs2NKmMyjrSswEwt4zUCu8RzfGzzPsfdVjw7eTEr8",
  "key5": "xG5k3KdGgbGfWJ5nYMo2c5eWzbg5FGUd2BHqqh8fdjQBRE3akNkVzsqvMR1NML9LBDqhzWcNzMkHTuRHrwyfbNX",
  "key6": "53SMtrRjJwjYkFbkeonapBd1gPW4SaKynLZLTQ6zGWmKSryVoLvkng9iJFLTyaJSqVxYEvERy8iX9xoCa7xVFAph",
  "key7": "J6GUEUR6pjykZRCpyTThDexpqSF1TRTKfr8xys8iEqFny5ZUL3BvD6ka3io7srRKdvL9o4D5PDnv1sPmT6926cq",
  "key8": "2pDk5YwXpQn4YE7b3LkerDAN1Xbnbs1mtKtxUsNHDjcj6NFDq1bN6Kj2TtR2bCdnwHDum1WP6AQggknawWU9qQJn",
  "key9": "2W6cik5296nArUNSZem9vk6FGaP6SvaNT8Zwa14GEmx7Xd33ZmTbJy3F6yqoNhFYdrZrhwLa4erqYpK4SjNkGYfN",
  "key10": "5ziBpw1kXbxSy7Kwf5cow41oQSL96VkpsRRMBCecEHK3RCZ9tfSStBXR7nBhmjVjwh9hC7wqfTUuq3nLc2AQiizH",
  "key11": "4boxhHUgsb4MKMfyvL2dx9QYL3qjM3iJ3DB6UfJ1GowJkC3dmZGEpCfduXMWVbSpDhQhwDr1anCKsLg1JrM3XcHo",
  "key12": "5rpAhHKrWDmYFb5wHAAfSPbL3UfR8JXENH9YxUfkpeFDQKfLCr3vrZy58d4Z7UDrt4H1Lai7PAHUVh9NNGGfKV9U",
  "key13": "nQAaawC4zAScRQZeRgJUuNtgYZpK1jxwjLqHVE9Afr8kQJu1gkN9aCZ7AHqa6kEaBNru1zHmXZe8u9wXoZJmLzP",
  "key14": "39YEArY88bdaT9C2NWV7X3JVcZRtmF1MLEfTrTm4E4EyMGUkRdNJUpNezxvBb8W4r8PHssaM37ViMSSNXg1S6qXw",
  "key15": "22m4FaFq3vsRB4PzFgoTT89vkRH9AZMih7hxJd58wkes5rPigWks67rRLrub71wtrTwB7QWESnztMcTqQyPnmny4",
  "key16": "3qVF8SPF2nXd47gqafEpcqQLhe1oCqQ8QBUNjm64kL2cMQg2uLLexkib71nn1gGDnBzU4sAD8Y9NF6AHdofbaEvh",
  "key17": "4HZ4ZWJeBXq846DB1x75AQVhQFHG6pYLqtYxKfRJ6VacXVJfvncsvp1E35MKpi1PGtXzddzSMUHB94k7WbPhgW2d",
  "key18": "61tXjFCRuzF38AWiXxPEYEjkQMt2tG4oaLBYtkBWJNRrpZ35Mst3zwZysBAqdTQ21yQHnNXDHka7Yfip7AmVmNSe",
  "key19": "2crSnSgHjkhxU226X3XoVEPmZ6K6WXq3dm1ZCYcJTG89NmD62RDVPieN8pkBtegeXkPZzWqnith7VwRFnHXP3v9Y",
  "key20": "VHXFFsad3tL7CUa6NjU6RLFkiaoNjPUPqSQqAroVJefk5WEEX1eigAMuUm1m6a2kqtPEAwMvgx3KG1Mtuek1MiC",
  "key21": "3gxBr5HG32aDkhkptd6gWcGG7PTqGvqhWjtdKc7spkSuo8zcpmVLE9uukKNAUHtxCe6jDWpT237pRqkkeoc3rqbB",
  "key22": "38Jsdo3nTeEapm2eojyzEU8mhYaSytcyEFiwYvFJ21tyKGwCKK5coeUs7KabGePQx7n96Kj2dMpPi8C13SM8AT9c",
  "key23": "2fU2zkzXtiFmfnt1P1E8ScTYuUA9fZHhPkCftzyBHBqxTrZp2MqEuk7FRbrfFMjEXasZKsvfyEZDCLyfMvsQvffi",
  "key24": "2pBM9mgwyKx55kfW6QUpYEvdsbJU9JEP2qnpCzVWyujEsRyMz3sKVJhwbTYoH4HPfQzrPbDUwdLiYu1Xk47WBejq"
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
