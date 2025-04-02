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
    "5ubY4xxP4anktqAePRvBA5svYrYpYKEzi3v5ADoUYHn5CiiEBSi9X2qxmUKqcd4xqxefScRHDREcUDSpx4wQGuaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VzJa8WPr7M1SD2nnhAvkvBjMtAJ8JgfTtUb6RVDXxxfvar6oGPX88m5BXtRvdm2w9wzfpxKQoaCrhMkdnAkYSuV",
  "key1": "2vfXJWd1QxqDkcfV7zDoRHPZGaqyA3DmNXgkuuxmYPMjfF2RwRQ63d7zWZgUMd4zwwHEuBWraJSQ7CPvWAinkWeN",
  "key2": "vNZpMmJp4rGudAK6Es8hhK4HvFUa7jGwzMtWyRFLqS8KZz2D3sZzKnY2YVXbrMkH4dutuqZ4vXESHFx6426bNSf",
  "key3": "2ofQLJNk4iUo7kSD7qSajYqzzjHjTHknjvFLbGopQqBEcnT964FM9YwM6D15qBGnwN1DbUxBkDoWbyBcXF4Bhbyc",
  "key4": "iFpxVNT3ZwUudiJcAj35Kp3DD18TbvJcYwb6nzd1SoqLxdNQ2owTYQW17DJXNHJ7QYN6o6thSfjTHS98czSZf7H",
  "key5": "4H7sbSvUdtup83J59FerYTXRC3yoHAMBbHB5r2eVGTSBsby5uphnomBQALbNmS7tRKaorQxQGiJyqdrqYaRsZQVn",
  "key6": "4yBA7fTQkzgQ7wgc8Xqj615LmTHtyRyRU55FvWHWfQVr54ivWzHx3Dj7W1xzEVgxS3UCgvz2N4sCPgipqEmwyXSK",
  "key7": "4Zzs1ehq8vyFMk4qVcGskbYrfzKvRGyystQywEjCaqfD5XnBx7GqQBavYpoPKfmiAaxXBs2dZX3U2pgVzpcMyfXP",
  "key8": "5g5oW4rjswatPdnbDyh49AHeXHMkjNxuWih7x13njQZTwK3Ha6qrWWLfg8SPnUdanefksHTgSuEYwysfUC7D69q9",
  "key9": "4shihiePw4GUujoa3HyKKadmTt4tAphd5JUwSYSriJ3KZEe25yEYtqiQUzPSDMxwarLfLbSedubfJbJE6z9EsvJ9",
  "key10": "2JDnKeKEGCHG4T4JQ13rxeNxdAdAtu1i466sP23SPgLXvQ63b9zq92GjfCn8TuwP12ay23RhJPdSqYkSQGDzXKcC",
  "key11": "5Jd9dVfeiuxkqJN1KTBZyUuko8USEqyDQV4JBCVcJMtmphK3ZZ56xHD1tC1xnD8rJ3LjupETvjLCtL1z17QYLsQW",
  "key12": "3XW9Wt7BZCyavqFAdjd6rw4rvzRjvqVrCCm3XbWxgvsjkeRiXPNQ5vqmZZMTxUmpbTzWnNhDh3jw5Crq8RDwTLEV",
  "key13": "odewaskZXYohDrcVPYzGH9sZ7JpdFJBRWQkg6jgJ3HxGFe9DdHAkAHnDFgXocbg9KAbycCfwDWDL1P53YckmtuH",
  "key14": "2GEpyo81FmFR23uPh4zp9KXbpsLP9nVJwCEscyTkb2swgfCxUcKpMcs8AY9Q5BqA3CvuZEbQAQbdMji1gYZXLnfZ",
  "key15": "2Q8kJZZsz2Dc9JvNjx8AnXb7mCtFRRQGgy48NGJmazpFt7xFyMn88J86VGZpTDQudJaQ43ED27o1NyNWg2dGp8Ah",
  "key16": "5dy9XK7ZbBpbAEPDXxpKrtHh4f7CcB5LW7h5stJaRRUrkDnd318DnNWmsPfb5SumvH2vv7HCEmQdUbJyL5pA3tqf",
  "key17": "5NW8Zb6bzkALWeTd9MxyjUhWtJDyKnChgJKA5qumn4YWZruJps4VSCpbuUR5j4t4aHeDbLCd691xmjp5SSbbBEXP",
  "key18": "3iRDPTXp2Pb9RQDqg3fChoiWmA2Nv3in3hkieCtVq2kYv21PBc3rb51GhvuNy6H1aFNmEzYpeqrQnm3ju5zSzRGp",
  "key19": "5WN3Y9oWHoGPJTU51QfbLJSqiGFDTTecLnkmfYLDDfKcJyiMPCJwcAkFaDuG499tAhPrYE6YGQgD5KwQqAiHM8SU",
  "key20": "26mH1wXG577K5sxQUyuQxAYXQwLQMrcjZkzfMTcneMEWcymYY99SFaDHdHaTCkceFeMA99StyiDQ91YLRX7SfjtJ",
  "key21": "65e6kahcCu9diQNNqRndPQs9zaZW3WuiXZSSKLiSGWYF59fpDFpU931hPXHnCSEj5mgGahribPANQTpyRgGo6186",
  "key22": "5pUBsDb9faP8RqTE1G43G2atzcdMqWsVJQxc6UwbLSWuqVpwH8u1dS2QZEXBHQehiDM6BWs7rbrt3QDFMWR7jphh",
  "key23": "5xLSgsEpLvuAAFSK63MH1Tp15D23X4pi4htWLkXETbi5zmgEnpSGnL25Awv1y7xNSuHggQz4PbWEQ68uu9EsrHLe",
  "key24": "5eK77j8xwiE4SpCgfqNJMKwCvP276Zhs9iNPhzic6LFMkHtQ5dvrZMu5VrepLmQBpvMazuzuNhpYNsmAJFnct5CG",
  "key25": "5hGpchAohHPxBqAMHQ7MWKYz4rVu5nBT9k81ie5GBsNrgJcJx6FdThoCJn5Q3KNoCVRE3WUnJ5WW7rtF8NtPR5dn",
  "key26": "5povQE6pqHU8PKo27F2uKvTA2qeQt2cb12Dh3LBDpaMDGzSmP3dzRRaD8wFGiQFZgq6wg9tJ4zK2WJmhhPaUFWDx",
  "key27": "3HhXV5kaLRPXz5NChpQVqEeBboiSYSErvWc2s7T9CCFfNxnDjkUgrV9i3KUa1jxBcufDtqr9hbbSSmbUM7ibw1rd",
  "key28": "4tZAv2b6CVdDWP3gGaAoxBYXbhFe2btVzCk8kfA5X6FyymBeVqFPkwM7uXNfHLKic3Yq9ereDT4JBksDnYJ7J7iS",
  "key29": "NV7WaZCzDNieSXf96kMvV8z4BLayLshmKKA6PnpX5zADWBqNN1Mcwba4aqQQFrhfstgD1tLNmbtvDrPBsf7ueKa",
  "key30": "5ehtWSnzsxbuoDD8FqVCEvTqasszvv3rmf9hokbbmGgKnUebnCAM7U94w53ajrj9qrMLuvGv8vN2fnGDRubrqDjA",
  "key31": "FBHaFfSjD17VHHV275oGWrW4dFpWcnH1ztd6Mj1t8S8nGc3ppCytNVNdygFho1JYNWN6xFqgjns47BjBinn26bV",
  "key32": "5aF3mmHKEmJsdASZjRyYHV2JBGm3xRFQ2THDReL1cZy1PEJJk5vgUCAsvHd1uupxQJxkfpXTVApiD7mn32r8ArtE",
  "key33": "5W8BBEqS4SYraS97Tg6XR6okkcDKogHexuXPoxdxuH69rLNwJr5pDQTJRwUHgFBTN8tLaGhK7XzPr4YRnGmR2qMJ"
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
