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
    "GhJqV7dM4hgz81hCRA2BBguoCcsACmJDzepfA4ssJW8WKiRFXSvdbbH482tjARQVtmm4xmNth5QfVWKKVYbTGdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38gx8FeeXHGmT2337vU1izZGFQMKcCqrNFucUfCWERuLdFDX8TGvbvoUz5XDJYNy9pdE6ieLqrLBDBJ8bhp8m3n",
  "key1": "4L9TeSLQiQwyiW6RQkbWszdjdfYRPpfdTU6Fdj7o1vZmMee65m1utVBeYk2wppRedJi2SErj4yzSr7q7LqJRcUiV",
  "key2": "BWiYhgxjdByPPVpj9ans2k3LWDJ8eUYbW7s8fNytxh2wS3TbyKBMu831Ct6Vv9T64JeWDPfkc627iZJDpYrzCz2",
  "key3": "33EJQWtTvTL11v8FQGTvDz8snysrXfHb3189MnRcay6q1i8VqLKLqAh32YaNrGRz3PVTf7gSA3aSLtysnecKjdY2",
  "key4": "KEf2oa8VQLWBjfeaVgW6CjGjUeZghcNiijQasXmNt6yYXLVETvDWFfwKhwUkYPPB9CVsU9iZBf6MqEyW1m9z2RU",
  "key5": "4jsbDJWtBWuXFb2ZMxrSkH9KcxkDD81YkjKfKpwyTasrCDfFp2GhLDbNarQufzopkiC2ZKphWmnooCWnPhqHvidw",
  "key6": "63Z9z1pYxnZgRPzotkbXruVqGr9b7nki3GPAkPybPBxNhVxar3es83WaUf6dDTCxQwEvJLVYmFRv7HXZyVEowoPb",
  "key7": "2vfL8HDmV9G8Mp1KLNwvAQ5umJmp88i53RKkkMur6hvaBe5Tmca95yK9uYKpGPRaXAhHR1j17FL8SnaDJxZHgWqc",
  "key8": "id7CiLa7pkcffsd6Xn7o4mGCZYq8egMV1jusLHRSctFUwsPUsMJaA1VJF7vTxNhYfJYERB1zMhe4UceC7rVpXus",
  "key9": "5J2UjSSRGSsjRSNvtE8j71jCf8XfW4NYZzvQfDknLTF6tYd6nqLxve1NBEenwxMV2FMJ3ee2guBSABYcCXXtqnQV",
  "key10": "66nmj6akaTCwQiMd9vzJkgkHKJf4YbdL95hgKrU26yQ2Wh7BGCJa4uCgB6rrQamTT3hXyPevctu63oyyZ8cGp8fp",
  "key11": "65Fkdtj45KEfmQC6cZbUvMN6hh1zF9G92yXGxCAgYCeuchNBcStohDQueB7bWXgUovdMj5kgqNhWaVwZV62zUCXh",
  "key12": "WjtMCdakqSApNfyghgLknPPnawn9JgJG9RZJErj7YEm2q5EhnAxPgz52pAAXbimJRiPoffEyTt2DqUiP7KtUGAR",
  "key13": "3VkwCAZSPcYy1F7ZG2EbYvaWvwVL7wGg9mwKwUgfDWtePqpw4utEuQb6f8FPydT4hF1Mh5iQffmHgAMrXCVjThhf",
  "key14": "4UfwkLcP3MpzhVpBx14pcYGaiPGsh3qF9MyUuouX1jbrAkNn3EPGaTnLUDjVBYvhXgxy4hnkmUqzYe9GDiVivAeZ",
  "key15": "2D5CjwGjFfkLe38VMPuJrNacCzTgauQkn1ysxTLyU9WHPg4ci5PKSGGmc9BuN4rZ4zxx45UDaqHpSJDrRZDrEn3W",
  "key16": "GM5KaSC6XTvYe9kAan6mNiNSK4HUa55CaCRrj75yUunvK1bxabqxk8ZZCZse8T377E8XKC9S2FtJBw8eZWKWULp",
  "key17": "411PLaD99jtjNJd6F5ALZfbm4WQ7TzxfWV76oa297tNcRDZvG39a47CoT6Fozi1N8s6woP6WvMxX73H8aYMuqEXv",
  "key18": "3TbeYmr4WPSQHxtbHmAWQRSaV9YZYXEiki25xsm1jEgaXCiq3trLDNPDVf81gtTunjCeEDU9rAMGRQkDu73bs9TR",
  "key19": "64eGp96RgQhhA8hbTY2b3xe6D7sJpKZyXNQUvDEWuQ6JgLs6f4NzapjRoZ14iaH2LrH2XXmq7kRUeAPsdpHNZvkt",
  "key20": "5HSYg9e1Fs5vJ28pHbciERrMgNvGJToFFLgzR3HHrGHw4WkN353gzdVGxum7BiRXQtJKNcv1DcuCCcaDfjVQvYjA",
  "key21": "5fBofAKNq8qizwzmka6m2kN2wXRh3kBS82TCELQc9MzoLYbEvzP7bp63sqpSobf3YfYCsL6N8pXFBw2U5aG9EtTY",
  "key22": "4pXCaySjvXe4NnUJrsqby4P6GG6wh7JFyEYjwMeGh5L7CMte3d62AC8iPD2PKdxyG4Gy1JaJQQwBUoGJHzh3gLtg",
  "key23": "3XVyZCWHKPaGqrTd9z2vLRMboM86fixifKREoE8sy3D59M4ESqdK3kk2VH8c7GcaprMukoqMWL9DHTShy2LVnC6u",
  "key24": "5SzfDj5sehiPWzZV44d5a6tyCoXot8AoVRNPj3qFnFZt2CTjUiYgt3F2cvf5jzTq4Tp6gzTC1Xm2EUgDq7Bj2EE8",
  "key25": "5wpQtiVjwkGLTqhXvUd8tR59xusSnsicMsWgGv2CcZYPj3s4Z2qYxiC9nwM19Q8yzRubGtAwgjba4Dwr5swcXYnq",
  "key26": "4999vmBP6S1R5L5ETnAv3DXvpL5nFXgketsCMmg9YipsAgLE7HYgUP71makpEkUzEoYLTt8Q6SKcn88eZiF1T1mw",
  "key27": "3YGUean2VU2YJw4c9P1fzqKjMtcJQiRjugLnUy3o7EQHq3cN8UmqbW1HMRjtpcbjqC6Vk4xVyKBbfsbhfgtFvs8m",
  "key28": "YVqwMcws1haj5iqX2XgWPs8KgRqsh9YW9c33x5p6R5sXKfWXmbXuj2Gfg7KXHu9m3PZ8ia8DkvRRaCj5wjjE5KT",
  "key29": "5z516ZJ5Uner9h6ego6rcnqo633BxHH1MvZp7UQa9rigujK347DbVUVotuYXefjMoKRPizYYha5t2TvYAZFwTrLz",
  "key30": "3dMe3ebBtSkzRcEEsXGLY9gtFyPpJrVw5xWgTkcdXXDEiyruXoYkoPVtJVAzqkgk5YWDneAYNRWZXVGirCKvPSDV",
  "key31": "61NJybpQMkuRLBm9B298Uq4yYVFRDMCCseJTnxCGDUMzykkpubQekfjn8wZBvdj4gBTkAdsEhzJET7t2CN21WZie",
  "key32": "5npWKujJzroXVhwKKNE4NdgsiyafC1BYboJbS8sbsChdbeSoVZbqRxFjaSD4jhYU4pPaKuGiQWucRn78eVjyuZoP"
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
