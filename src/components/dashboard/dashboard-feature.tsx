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
    "56iTj292CXVe1pmGqKTUfQsEEjLqZZ8VRLbt8nydfFvV3W2ZZodXmW361Vc44kFpCZzvxEYi8mCbvJTppGXrbVLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nyvzpyFizP2qyZwNafYSo91BeRgQ5kL9cWTyz8AByQkLUDZFvCNGCLDvai7QXofJnJJ7BXWtPzjEoEk1qbDBP8U",
  "key1": "MAwQpt3bRgnLtNZFbVmpSxcS7X2yTE3ABHn5mts4TK1pj3AnyiWXr15zA2HzW2kLMZmqhC2zd8jUhY9pwKK6z8m",
  "key2": "2s6be5jRqMSMzZwKPkZH4qARnKVu4ryR8YMNxfDhP8Lotw6k1Lag8UzvRf6iSTdtHyNg1hMk7WwBnhKcGJwgq55N",
  "key3": "VLPkkZB7t5LAz2H9Q3fJpcbKWKXxjB1msmb7EhFAxfiwzPQWMtfihRA6sJGZNLyuw7fDipfSj35YfcEULkghdsS",
  "key4": "bsQGJUMKRah68erTESq71qa3ENSoDqxNnzZs1r4WgJHb1mDP4YrtdQF9V47STP3vZ4sSKVvuEDQLdM5YTbhUUDb",
  "key5": "2e49DqCyB4eE2Q2R1FNb3E2H3wGphPVqUFocbfSx9vUt9xYidMWsW5fY4N4HgTsZRarcWeMzodKn5cppiEnwvAyZ",
  "key6": "GDkKGcRwTLEJ9v5wBpbvJtwp1iDokf77dLMxKzQmyx7KEm7EiEFcZyhwg4dxqZgCtkXWCAGPHijPfXtCN2vYzhU",
  "key7": "5NqtmgqFeFZcwNT97PR9pM18Jv27JB4xiqiXpo4oK8dH66VpELjdCpDSpB16SE7Ydo3xTQ4PjaZideQH6HygLevN",
  "key8": "cHoohpKkYpUajkbbDD2mj7fEaXTLmTJ7pqfAru7fgYRE8eUSABCncTawuSCd3BdjBzuBdVgLXVXbFb6huGj4yqS",
  "key9": "2Za2B9KrYgtAciXgFNrBAbSKKorRPePw4MnDJidayZN7hQ84pwvydoAusL7P5KWxhJtYF7pgwzkCdKcFgCaTa4Bc",
  "key10": "4WijbBdLzxHj5oNCjeubQXYabvJMR3gSc61fxB8YfHca3KRmv8sjyyZATfw319wNiH38LcE8TtiMNMwcowjULk5W",
  "key11": "o8RKqYue6cv51BJLysUjsEMb84BSn3df2X2CrBSMzHCiQwKHEHfbJse59womevmzkJ7sMRPe8qBsostvSeRoZr5",
  "key12": "4xqbjGbtizon5FDLo5YiNe1WKKMyXLgETDPnLsXWRaqhGnnuBvPQbz5RFEXjJfXTD6aKX6voMxFTu6yWwKxMH8B5",
  "key13": "5KgKBE7FCTpEuE4Y7pHTKwbG7WPBeK76Yj643Qfp4wZDE73iSW5hnTFt2ijkXJfDXML8ajMMNd1EzafJrAfKijb",
  "key14": "583wMiFZQ7hvqVXBgNu6ouJvgC6sgZVHEomVme58ghw5YeLCxuTQbChESA2ywZkKVkAeWzVuXYW5shNPmZDAdQvu",
  "key15": "2tHDVHr5By7gJGxdd4wf4ZLyCyhu4PiiCYKPUFaBKCSHThVMn3N3LFiKje9ZZ6zTgYUNmbZqs1JRtDDsYqQfPThn",
  "key16": "4yGTXWDBjP2YhDQ5i6ZMR1ymZei8DrqSAx8gqLTrq7iSmDJtn65yRynzPUymEWcRfWUfrnMiiaGMjcLJhpDWNCMn",
  "key17": "44zz3gmKt2DWFK1a2xx3oUXJAva7w3AG9s4sw34grLcZcHvQgnSeihNTfapYi93ZTwN5riFqQm4vSU42HuY6v98E",
  "key18": "2NTKs7nL2rvPuEJW6jCQ1CzoRf8DKgZACQheDJWyTgLY4C4MjL3PNxigVvPiRyuzLKqfntNTzow7MyATnPE6QKzj",
  "key19": "36dDoshFkTZMWmY95qTw3XbD7uYqq4d1yURJDUuT6dUcVzPeXGNLVf6iGE6mnm8iKXg4wpaWdTiT9RbGiSF9aHK6",
  "key20": "3CEGTsLR8CJhNEEmQ81nmjgSq4yZWSugFv8mqjByXfyp5mZ3AYPvfjBJT851sY8HgTvJgHWWDYGsi4FV1Mg3KJcb",
  "key21": "d3GJbL4gTL6b7ebUe36nGweyyqNrzeSQN8Ki42bUzNh6bT6LMNVeG6Y4diGSCMnFRBvAsKWM5mi3kfA6yq937ZX",
  "key22": "3z8tM8yKhZAgSocr6t5spPRfCNhssozgRk5X6chQP3mqauALMg7VizSVZp8BsGzT9VndhSGn2B7CptM2omYC51Bq",
  "key23": "3QzQyfwin97gRTXyuRvagzq8eFtxEvffQcXx5wRP4ASfQfYutS8nupBMjFgwKCPwcfsdUARYEMzgy4qbSKxKEXZ4",
  "key24": "5katCKoqBB6cgg4nnpghgZZb8pRBHJhfVKfAX3Ly1SFQ8bYd9Lxj8ZTKu8w4aeshqjZHEAMuHPjEde1sGF4HVRD5",
  "key25": "tFDXuLqN2mLzN1BAZrqMAd1wMoDZkEoUQVHcPxn3NZg1g6LLsGhsp7UWvz9DuX3Rqnqi7NHZ7Qr4Tmmq9XXSUuf",
  "key26": "U3qsjghf9JRRmU39DH8XgWLBK5jT4Ar9R8tZaNnzaeAXJ36dpTey8BVdv8D91D6bcD3afrbFbJL55iHM9tLQ3xY",
  "key27": "5ihvKwc46zETPF4bseWXUXBgnGPCYh61rEe2ank4xEkAqXsgSNBGb4oDYAf7k54TTcXZJTj7sHJFTQbFiHN1WNso",
  "key28": "5KgGnPmb4MZ4WkRgshb89fwm6TBytv3zUB76ejEHWgPcDARVrXEokAL7ZEkmqcK5yuEErwfwj6k6PwWjHiZox7j2"
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
