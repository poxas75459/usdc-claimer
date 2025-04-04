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
    "2ykjWWUi1xkWsWwVu9FWvCnZsELEjCa3TgQPnuN69nBUFfcwFLSy51kr8hCV2zqft3UmCNwvvjYKXQvp5NHv3Exm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pC1Z5ipRnQhtnCKgGa9WWjaXARt9cDYM62e1tXzbk5tqg8UggQ6E4V83qSwgLdZtpT8FfRK72K7QDwofjQYjDgt",
  "key1": "4VZVimbatJVhRJyD1aZs1XFEYTmJZsdnbQS49Weqw96Q1ige2neuMpq9J2vUAWjogyKiusMhpBYyhehmDaTuKUYw",
  "key2": "4vZ43CFw2oLyKc6i7p4RBWwEAtQonAbzDNtJgrDDCFFFegv4FyVtmAJqWjwMiyEgK4EivqMWDC5qWz8TfjZKeH7q",
  "key3": "2J73gnh2j4dtYqjFwQg8NWeW1cYCeuzt96xJxaxpV1BL4aZ58C1kJjQSSXZqG7fAVuJbrQEJV5jVKPHzTXNFLy7i",
  "key4": "52KvCEBemrLDZPVaZ9fApKKj7NurGQ1yfga6WWRx4Az3cyqmtA69p8Bmbt4YGVkaKv9d2NwA3nEPjCL6wvQZJQ6W",
  "key5": "3RaNSH589TdAubjpACKsDvugBZTQM9KjNTGF8nudwqPdCSizJXMZAodyAxzFR1Ke8airoRP7c52h72ZfscHsFdSG",
  "key6": "DboxuiLKZZ75E3DdECSFfDzLvNQM2MbvCpegTmHvCbLskGjbJadQqNWQHVrEZwpZfnCtMJZ5gpy6i8PNF8kFGWV",
  "key7": "22k1ZDaBUMnkE1Yzv6a3qWR2VvknDnhhsxd9u15Mce7Qg7sLF2U7mbNajMQfLx1S12FCGziPjYMJyMu5siwv6uEe",
  "key8": "EKuJ7KmpGsdnfEJWkLCNyXCzRsTnoxyurGg6ZfUeEUXuUKJdcUshB3qfDfKALqMUZJWmbJ89zJ1dEX568rdkriF",
  "key9": "5ZHmBn7kuky3vwM2CkMFjtrb9T4emLtXrBptWBtQjG6zrewkwYoAfAieyjubcHEHReNXLuksywziv9xmE89gzmFK",
  "key10": "3BRVFFNu8urzHt7Ct8pTEsQnCjWFwJLT5bXVEECVK69cuGjjxG6zL2LdADhp9DZzNypfq8LVmvDtQ77fKj3vdU2N",
  "key11": "41rtFUMfLR9G3v6Ts9iv5nTgxx9n3zjJfroRYoi4joMnmUBYdBysW9QZk6bbphzdkRvLRZQvWVLiV1hSVRb8kt1c",
  "key12": "sz8HTLn6satUKVeDeXXZ5ABWT5H5jry6ragTtWWoHAYHLDJnPAd6ezcV8Tne4W8MJrZ5LYzQMxhRp1Fn9o2NZn7",
  "key13": "Up7bDs7QSMDqgnERC69ZZcJMq8yapc7SiPprQxTFsRuCUrnvaUYA4Hedhsafo2SqAChA5sA8dFtTkbCMUWxEHLf",
  "key14": "2aN59VmVQZQdVaUba668kcUrwrmxaq744obywsBABqvncgbGa4p7BwX6PNw9evs6oQtwx3Qfx8nNHHg1TwtYucYF",
  "key15": "5MxVZoQy2bREkhGexdaonye1nBN72Y7Vio8GNSxzNrdCufhR5rR9YAyjqC7W7reLHKLYTGxLbJrkbpzJJmVQ1Wbe",
  "key16": "4d9utbQ1fqSeC2EHbVMNbdwSZK9C92gBHqQdUJj81Q8K1B8SgvAXnMQNFvZnBLmCitHhKELSkqYRZkpn94TUJHFc",
  "key17": "5ciMF5o9fUNDhM8MvaLTupNfHNWNGZdRUd8ECA8j8YrZZeocuEmY6g2Xdr85iQZyjpRhmGezUf2zYQbTYC77fj2E",
  "key18": "pzQmcPDfxqeW8TAu5A36t8owc9JVdgPGDsGghkfpLDRHP6LjjcR2jR4D37jz5N3van9DM5kqunwLCWJJiJfC3oL",
  "key19": "39ZiZfiH1ZfLYwgVRn1cWKVJxVpx56Zg6vuyWpeyL6QFNDT37pSs2xK2HTjtiLNk42pCMuLZ5fEmFozy1y3hWyPU",
  "key20": "4VHZh3aB1zZb65qeaLZH4DBVPg2X1TGacXmr7vdr38h8Ct3j5xxBE787CKXe5q4XLnywT8tQ6QGJo5zFEfcdmMGz",
  "key21": "4Pr7hC8YBXkk4yEdhcS3mA9dkNnikZPZxgv171gDojjybqpiYyysRqVHKjJwqD1qUz6vy3HsWLmBruTwmwRu3fo1",
  "key22": "3eKxeLhSwvTB1w1Bfjb3utYd7vsvTxFU84Tn4ez3hgsm73TLd24GNRdV3SvMzRYHdn3o3Cuh3DvMCdrXWaFmar4Y",
  "key23": "SVjNJGDNZB8LqEXqBFa4NgVLkcbP5tsfLv3PeAPazg5YhufsjZiN3HoLiedS9xxbsasDS1wsjb2Gw46hyow72Z2",
  "key24": "PskAkbh6wjfFWxZANWTQFad6RJS2jrxGGcrdk1vjgfUXUEb33ppbzRvv2JijUtU4BAfgSvKAAcwRkvAUQuZXvT8",
  "key25": "4k9BAmfqzJTDazG7kQkMaWLEFyrSs7jQwyTSKwX4P7MEgUSrFxGdt485uA6niE2kJHj3MPpAqDDrEfUpReNpY61h",
  "key26": "3UxPjACb4fvZ5BTXv38Kf4XJPgLgeLZox8sqpU2hgytbjjxyKn8zk5GyVaxdpwfxaN9yPWnCYRgpmezQgx4PztmU",
  "key27": "63SwvU6d779gD74fRsxDUFMP4dPV1Hrqsi1K5QDp8Jye1oZ5f7b56qKrhzzPJWS143ivjY6mWGgPSwipGJjSvpmj",
  "key28": "3fxBKgS4xPqhZSXMVdWpJ6gJ12dNf6VPM9hsM2zqigMGYisob8rkPyLBRJDDZ2yy5pqbdXv9HXHGvfzUb4Dm2HJQ",
  "key29": "4SW56juEy7d4DgkFTTiV8X1T6nF3i5cAn9bbkDYR5NeqT9GtmrBkeUGyY2F5LVJZTfmdWcRRwz7NUsusvzBVKWJw",
  "key30": "2yE39UyxmGQNq5Go4Ey5tqvirdoRadDVxCk7ZWKDG7rAfjRBxNzc5NuQpDTR5Vw28ptGKUYb5tKrmxJJ5KMmka4Y",
  "key31": "2wNRWUkLjxfJ1BViKhiv57k3tBojPQzxSDK8Du9TBrBRLXs9GkrczNRaSJS3kXkffG5hkqY4PBwL4e4yWfxjcPfY",
  "key32": "2zUcDaPCYZQv8V1EKMHRVeiYB7cJ4Qx7vkKRm5tokMp3v6YZNs9FEboHfLF4WA8AwBnHh1deFByb8RXJTeRnykn6",
  "key33": "VkVWAoiwYjjAm2CzTupZYUbLnHSv6isz3v7HT7EWunnvR54kha2ydXztRhYQBjibSPxZYpTPfShqiCcqZoLcWZZ",
  "key34": "5SbzEbfvpv6kYyoGzwVxyS1Db3AhwZtADqvL6XUKM37T7LoyF9xVaYfrqVcpX5iD2pNtVkAY3Wk7971anuVjH6XV",
  "key35": "2vtU6Ct6XqRwHuMc7J36XuFKaLKYUJQe2thKGDMgdrQMehAYkw91bHtAhQ8gdBAtWHR5pumK8nHfuqpxFu5AE2as",
  "key36": "Hm3GtAfEyVRD35tAD4mx8VPm9nhmBugsCg8SVYwRrAz6tioRAPygzKZjcQqo1CRfHcyeGpbv3DC6RzfXeyxgvQA",
  "key37": "21JauwoHxWnNRgjQNaehGtuzH1LpomftSTL4c1Bnd82SxNTBYpYwPAvX68gLKP4Wrhyw7tAG9Q2Qy91T3JsePm6p"
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
