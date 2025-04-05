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
    "4gS3uUYNpdNxo1C5HqKoCpiCa5oSrvZLY23XuWqr6cU5vMCa19wobXQVRJdUvGfoF6Qi4z2BuPR9tSQ9FKLsBeLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wZL8XgbpJHYpTdBeewTJVRddzdYFyDNtBuAYsbAdxZizXnF8t8dagxy2xf4o1Q63UMf7mLZTv9HWgxAeTxsWEHV",
  "key1": "62MG6HzjMPj9piYyqjakfZQTfV5mjWJ3TxZYRXbfThg2WBM7PH9eUN8iPd8hc8HPBdfovZMNkc5T2FqM1joS33y1",
  "key2": "5ed1y2gj17R8PodaA8PbjZCF6cB2Mujyk2P368He897x9BGuwqZGAoteHBuBpNf6cG5x82D9xWkykzbmKkTLa5Qq",
  "key3": "3YLAQj54gfNCYTBhEobhFLEvsrXpu33NiJryoxDhaQNffHFXY7zVdumrfvnVfqoduHwNtxRFdmmHQyfHjYHDzEHB",
  "key4": "5qcnvYYUTjLV7scVopjhowmLg5oeTYCAW4BF6pURmY3Vkx9uuZuQbuQzfGCKKAXJUjXxTdi7LV2otSRKuRhmUSaG",
  "key5": "5EuqFJy9pr873gcmaB121o4qHZ3sSxpa7Z7MdoNSRkPyLdz5KPyxs4a8k7aWimLcn8NS1mWeFHH2fZXMmLpcD97E",
  "key6": "5wLdFNFH7rPnTQMSwiWWR9bEU3FZBz6QXxkfcsV5QCNEJV7rrTGkUPMLhJnZGsct2JCsxqEyfKrbmauzvfTs74e4",
  "key7": "5SaAZazKVWCAoPBBW1y78GJaeaTTUsDK7bkz7SE5Rok1Rqupz3meey9caSQkrZVnE9oGtBPuBwiiEoriR99FDWkq",
  "key8": "4j4Lbd4GeXMwitXnVivC5hbd3UY32eK5LGiBrvjrDX6Lfao3Z2Qq3pSDL6ijJduCASJBgqcxHM4XooUfaf1krtte",
  "key9": "4Ah7MET3XfNT4bfhdW7D1s9452gyw3V918T5Etz4C5dkEd3jKGPYrL3TYhzMDZkdWYYrd429KP4t42PuxxwWkt5j",
  "key10": "N4MCnx8VAjXuQDNWFLf9aZrJqE27YejGdFMJ1MNmyaxuVrgFHNKZxE8TTwXvAkA4aVudnCQQ7qMVFxvNp9mBf3c",
  "key11": "253YrwdbJKZdMrW95PCz66SbM5BjJM5C5tWJn9pY9dyT5YRuCUuxFicBztpDY3i9m7BcGXw58HaEBQ44yZZ4JxVv",
  "key12": "4XVMZ63cDeEgv2jSVfr1nVvPPrmm3oUH9Wr67jbzcNXF6M5GHrPcuirEpoLjEkGoZoZSV4PS4zAFzu2ttoMg4AEb",
  "key13": "2nwrkcECRjb8eC6wLqAjM3KrsQQXmfDuDs79aUaneUxyUMKtcJhmwrME5TmfCaod1Mv1fLARYemJduYBS3Wfpp4D",
  "key14": "5tRBSyEQW7pNypH9mnUo8KZvVfJJCHeSCVxZQ9eYriDbRpqTcHp3AS17u4fnA6VmnVrbZ1wrr8y8xFHDZ4h5WgYw",
  "key15": "573YasBtRwQgWC38xRLQZE7Kcxhds8JnRKQ9LdWKg1vsamayELZypF1oVwVpyGVnqUA5V1fLHMX2fRvYHHKaBbaD",
  "key16": "5KYv8HwYPz2JJY2eHhgAzXDizAinkLQPG3sVKBvbFiYzBoWM1W4g25x9FkarCoG9CcdsMZCNKgZRKUf3xxrXrgya",
  "key17": "5uQ9o1HVkQZb8kV1ybu9vHYYS7kGpHUsj6YdES47Hi7gda6Rd2NzzdPzsqnbjzMXk5cju5uGhtFzFxTPUXidUoKe",
  "key18": "3kuqjfvkLiSALYmnYivRPQwomeho24Mvd4Sa3MzSdeyQKewNuRzeaRCxcA4b9A6N5QtZrZXFZVBUAtNNtXWy7PyD",
  "key19": "wnkjrAWuoyve3rVGKUYhQMBgUxvr1B75BWu2nFhj4rCpqU1g9gkmkAeWWH6V7hrsWBsrLUoL6H9JFavmzMz6pmY",
  "key20": "3gPXnPHQ4QkibHTrcfr3mQ3ha7dSsk1x7WtZ3SzxsT2huG3cU9N9t1dbtcHR2yEuFM5WrH27tF9MRDMGQcVuVpbQ",
  "key21": "3ouiupAUreaYJatFWtPXVLi8GVPzYR5E7C34EJaTt9WA7voRu4vg8fvfNtYTjXYvKYww9hZjtcqoDC22WhEvd5i9",
  "key22": "4mBjBAAxVhsi2XCptP873mRnktQQ7tYuK5yf8jDkWahxTpkXzWgj2DU4Qw1tpC9162DGPdukXun6754dEZ6Fpzcy",
  "key23": "2jQ52JjjnLrBByG1S1LgE1U3BXcbUXBSU2SkrhyBK6ZV6Lukyt3NP7dYwonENZWUo34GLnL2pwYeg4Bkzv51KqGt",
  "key24": "DnYEvn2HTxnAAgpBXupjR1zL6dWxY6d7taSVMLjFgTfWrgY5kYSnEHyP5zMdATSNiwVjAoSeeKcB9noKyBGtKGx",
  "key25": "4g5CHPgwuGp561a7AKHQ4MD63LfPECsuPWzwsx5TABhUHXH1NmjWUgXgg57BLRwegQXEveA3ZrBvxqxHnZhQbFJ4",
  "key26": "63vJUgztkJiWqUfiEuv1N8rdtvjiWM3hW6gYS1qZV5n21VLyjf3CxNGbHNtsq239eN4ohq8w2mkBiT5d6rvoZbV1",
  "key27": "eVVEeZ3Ssuqod2VQhS5hpbfyfw5Har1fVbcg9LG3ywCrQBuXXuxt6sgT9u65VJVZszvAboQo65i1LExNpg8kWEK",
  "key28": "2qwhe9Vt14tR5fzYuRyXW3rtWMeAnVmP6KgD1KUpfGHTFYnhnQGxnYmD13o7Eh8qxP4WXVNb3mjFqFY1LrDyUWU9",
  "key29": "565cPRA98GjBJNvHnGcvA4iT2pXtP3nMiaWSaUYnZPQtd39crTxmFXqS4ywheotbpGb8yNdsgCHgsjnZrKfUFJTt"
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
