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
    "41dkYQKrRrD3hNjJMUpgj2kDJdpfyfhjJ3kcgFS4H28Ar6zNNgcQTS7j66fj4NQbwUSC7qBboKhdMfx7X853Eqtv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f2U7qSsmVyxFoiwwovTZXCuXieJGKNQ1YHMZbRxDCSqoCQVqBEj5FszGZofwktwLW2kfsKUKLpTojDzRbc25bra",
  "key1": "2UjfRqEQdvxznEmfdLQooDescdccYYqwxiHSrd1WzSqN9wPFaKmDzGmQhvDqjD8snsc2J6uVb3YpryWzyeW7aYhy",
  "key2": "5xc5nzaMtCpDsq365uHQpg2iaSUJtgy873C7igyVDXmaysgoVwivN4fqdEUn2inkjaAqeAX9xufsc2YuQDnrps35",
  "key3": "2Sn4uYb5f3JkGdRxgSaUjRxPmDWFEExBxVaEVimAder42JXzTCikzToyL8rjm82XrKKd1d94fb5MGJEGA43DnRk3",
  "key4": "2QyV5Rb8QY6Vh4LizSjjttBT9TeXBL2dPvry22QDH2EK1jV6H49XSixNqjAH5gfiCxQTEmPpHb7HhjcWPvsJ218t",
  "key5": "3Mkh8JMAuQ3s1ghrt8xR7GfgKm3Y7UMpkrfEtb9VAz257d73FiynTmiPURtnLu6ZoQSHfqj2rU9Pq5aCgLcvn3er",
  "key6": "3AEXptkE1reEoyxe1SeuTzyJ5rDyTTMNY3yQUPXjMrds1ShtT2j9K1pcKwpmaHAZxCJUJhgEhjL7L3ya8CZQqucA",
  "key7": "Fgkkjm4oPAiLfa6pTB5N6SK5sDGHBFpPq6Lvb6KzipfMk1utoDrjdVHA3Ksu4iUVBnzTPrnx3mffTVoZd59L12B",
  "key8": "3qF7592u15vtv5azgDUmfUtUm5Qk4PNBzAqNVgUhTR2VRd6MVZG1eWwWJsRJ6EpAeayVZciGFhLChLUsNxcXvjTg",
  "key9": "4dABprtSeCnVEwjx8hkSVVMcKqjeb8BhTK8B5nNhnccmJwofYVvBuCejrSXoMLy4TYb6Ju9EjoM5kc56KqiRRniq",
  "key10": "59b8xy7LNqQjxnqN8nr74NMnrNKyTbiMPuV6U4HejYEbsEQyZ7BQiXF36TXmY8kvgEkHSDy2zW4ycFLUKKihMBKM",
  "key11": "27SGB4heVzn6JEYM3YAJ8JyEia8B9rv5N7D6bA6mMfLq6D62jY51qWuiayRYU4bggCfWZbz88b1VK7Rw9Y4ynkEo",
  "key12": "5BbXtSHhNaMFhLNvvff2uXtvkehn22Vss5Cg8uybhXRh3wXta1WZUxhBSQMc1XhKXa3fPXUB9T5b4qB5b7MTGqSp",
  "key13": "25euEmE9pMRk4F29dwcFGmV93pRvF8rFpeQLrWNrpqvhvPvHzMb1PEk21M9AP39YUJvVwRKSfKDqgD4L6Az4EPNc",
  "key14": "2WMGyVd92A9YVDq3M4qFUxH2qZmrWsNH6i2djkzyJtV5K3zPhDPJyYj7vJvCph9ePZXFbtfYXj6z2iSLjC9hcEb9",
  "key15": "4M4qgBYXaTZEAu9GKaQp7Q7qTYLgwX2AADxQiSWFFmVUH1qZgzhBTiSmSTjv4kcPWocK5re1HwY8rfGHoWkMRagh",
  "key16": "4QUBctjPA4boBtdA4nyetkg8NVx4ZQi8umspzkEVdpYgzd25wVndp6cwUMxWZKEAMuhqnuofuV2KHXUmajXKon6t",
  "key17": "4bPquj4cvm6nRR2MCdmjiDsefja6BpoRdTXLoy2RF4azQp6gGZdo5nc8k2ZDxnb7Uto7ctoEVZp7PESVkqHfa74v",
  "key18": "EXXrimBAfoRUj7PJwFdXmXR3RwwdNEtG4MV2DqLLpr8Kr2EkRrUxyXcAgfyEULLEpH7LcKp2ZS3sL3ofU3ECRHA",
  "key19": "54TNpHn3Tzf2snsBnkwGVBrHuJPGSPy3LShpmHjU2dfDp8bUUeS2dL7FmaHjEnYGpqTqL24NsMCZBf2aWZoEcXxQ",
  "key20": "3hcYQq2xUCxX6st5AY5fokBUnwq4cMbY1JS3T58bdTFYpkwiqCzzQvBhw5k9x5HgL5Wys87XnYh29cCZHMkfopHY",
  "key21": "4SvFcqvXozKBVbdVx4dyL3CEag7P25GZmyraAy7a5RDP28XK3tVLTFSPYX88eZCeSaZTmmckhziRhnoabWvL3YBR",
  "key22": "3xPzwff6mQhHYH5R9y8EKXtcFtTkpzwirTiN9JosWMF73NUg3jfWBEXP3MDi8D1EEULpksWd1wqdunXyTbRxnXfU",
  "key23": "2Rb9UL97xDuo4nBMGm2gkqkDgwAtaLYB8XHdAPnqaLB92GmkuxC4i8Ym79fz527NEu3e3pF8JH3DX4t97DwAkYjv",
  "key24": "4GXvjft3kBfFph9eYdiAyynydjB5X97BRcpZrgYt631quJmqzkaZa1B4WZuW8y1rgvtTYhndJyEwe5SVqRGyqkY4",
  "key25": "47xz1fhxKEHqLXB42VK12tYgBYP718FsDrzdXqLMzg2tLMvb2sM3qwNZ7LZByx19dCnkg9VcRz2kTzigv2CSMfrN",
  "key26": "2abpNeF9tPzp3hzK4iUuKYpsF2HC2efb3kXXM1x2929n4eqvpfWXtyjLWS8GSboU6dhjMfX6EoCoF6dfRxUygYTZ",
  "key27": "5WPKCQMo31rp3WYW7EpyyQKn5U17o9epSfcZPne4a7fN4YgnsgRCXsJRNHVkipoyGBvNorRHjgh4FRYMBjNYVixb",
  "key28": "5pZ2pzGMmykDCeHssDCzzqWpQTUwQGXvNmzTvmDRArERQ2VdpmmTG5s3JrvWHKm9DrK6FnHnouwWEKJ5QgUWL8Gu",
  "key29": "2deezTwRfpShu8ZPTNm9pzVWxddUL4B9UUsdiwk4qddiZzvRB2ErSwBXFvNSfvbmHDd1x3grYGTabmRg7XuEX7f8"
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
