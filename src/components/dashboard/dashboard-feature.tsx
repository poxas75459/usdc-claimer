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
    "5Gc7ZanUeb2mKmb5RHrY8y3M1t6vWCcx3zfm5r4S4sN2axHbo9fCyPKYHQ9SeqYQqYgdwHW1y8tHHUDkKjNETRYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DLfhP3T7AFgKcjDbjBVSheC2jY45rvE1f48AVQB3j1xLQ1mNJ9saTQnRfR881Y3Y4GHDMLKeeenJsMeC9DD6rfE",
  "key1": "4QnPJKnGzyF9iZbmHSJJSWsb1fgGLyzgLdYDcCKfXPntrTeweCx5wgX2biaqn5m1SmnkmdKPFpWuHypV9usV1ZD4",
  "key2": "5EGqJZQCUvMV38SQTsSMKsf42o9XUMsxWQrbALnb3UPDBjwDxzQscR6xqzB94vfMNuN8v1hifgXgz2TvjE4a293W",
  "key3": "YrPqvbhPUVML8VPCmDuqFd9nLgSBSg2cehP4F5F19mofYNpuHaPdctT7pn8LYUrPWJfBr2ixxwoKgEYPkEAQNoX",
  "key4": "2JGp33uuzPg11oVGfQMG62LforRxJcujNUv2wj3bzY9iJScRb5vE9nCZKJhEUUJhpvR1MGCMRiqRHothHomnsm8T",
  "key5": "UjHPajZV4oBmL7udsf5yzVg3qng68bULLAHoj8pzdho2DieyxvPrW5zKpuiom9Kt2hT5cPUHTWspZ2p4HDeUgw9",
  "key6": "65kWuhmAbWV5uztMpSoMMk2msHE76b2tHqBugvhVAtdo1vQL2TBMG5QfHnf9XKYuxVHEnjWZYtQhttwCvp8PJnf4",
  "key7": "pcJWXSdzDik3Az1Q5Ljjv3kApsT4GppbtJ9qH2VKbRQ9VUXoQ1mSnKCJ6Bf7AGx5Bo1joX6chFBQhGZe88fCDzG",
  "key8": "4GMdFHuxbD3H3zByf2fScPCrPt3Ubs7Y9LrsGauMXSr3kiBmSWCWRGXc7JquLX2jqtEaGoTcHDxbSt39TDJhiUqc",
  "key9": "4vifmxX2Uiz1rQdsrXc5A5B66oTQLi8TAz32HAemZLqRbMr6ZfsFpuhHdUdY5ecXEPNYukAkiUc716XU4r7gNYpv",
  "key10": "4kt35ADvtw8bUL39QKptbBiwNsgsdfk6jcgiWqVGgHrdzTAbv4YkjVoBvFyJJyDvxmLedTdinqSdUgArYNDF4K8w",
  "key11": "4qYr4xgfQbfPggjtcw5WRyDDJXDMbMF4dskqrYxky1axCsFqP5wAJZ8yZQe23HUiQJ3NEPhc5rjJggGBWNmLLP1X",
  "key12": "2itVGtS5DvZMAfxDmihuVqiuBXhkqPiAzxGF3fNtD8BUqKXVSdJKj6Ezi4u7u3Ddd6QqM4Bm9bxLsHxMkLGMqiAy",
  "key13": "8v41TXgxSQaGM7a7KMKu6RkBiq69jAvAm6DEroLnCG7CPxKi6Ca7UDpWnsqjmvQDEFfKZABxHkvugLNwfVgCVJs",
  "key14": "2jXeAm2xafTcRgob9KE8bu9D39youp2bmmCbNF8fqhNZiEZQtoxDzrJkQBbMGprFAkovGwkjaYoFcDjgs5ewYENd",
  "key15": "2v7DiuvuzG8wB6VJkZNyHGLmaj3JEtGs1B9qUNNs5UAvnwzKef25uYC6LK93aCHYiMtPYmLvBz1B3dH8N8uWuA61",
  "key16": "4HRq6jdc6rnVJqfQHCkgy539cxMycTosbsX64wY6iRVuNyjjv1zKKnj4PsYFsv1ZehMp5uQE4xyQUehogGCyEiJg",
  "key17": "4dkC4UDcUujuVcZtT63nhQEt5rd7Ddd7zjrzL9XdwokgJ9idv2wvV211dAy47w3nCUyURQPYC8XmqUs6X7tCjPbN",
  "key18": "48WdNeS7QXeoCkdKpacm3NMmVHfRckkDhLvuKa8oHvoSLLJVtpwhmrK7VmMcmwRHYbyxtMsPkvnX19vFBGoupmDn",
  "key19": "5NcX5DmswoUzNkVP3XLntquZGNVxm1X6ZpZpjGEGDamdNoNYaG32Ls8jDzSGZvpjJefbxD6JcLDNSapRxyM5Ekvm",
  "key20": "3VsB8CZuxjyyGfbVQQsfw2qaaNLHj8REQDu85CR3a4CLbyr41NRe6weLF5EMhmgNiFakkENUz441DqR3RXXxwMWV",
  "key21": "5yjYXjbwYY2fwxUs4NZvXLsK6d4mnRBcJ2mahusYncWuU5VQnztZELV2xFptR2gXjT8yHGWGHA8bsM9VdfHZPw8j",
  "key22": "3Uqqcy5BLjLriyQ46ZMoAZLkdvTXp8L3xhaPHbkK2h9Q1wLU7dQ5ESbazEDZiZy8fQAkyVmBrrWbbnbEfh65kijH",
  "key23": "3capbvsebor2mvUqnoZoVKQrqt2JLok4zzjYJvehBq8yuiof9bmAStYUketxjgy8RNo2kUi65c1bMpJzc8nRVHkw",
  "key24": "571SCfusyAAFGMTCNAnqiKrkztTnBRXztH5QrHCGbNfGWnkg2QmpvtoWGcRU6c78mhYq1MLkqsEZJuig699QiwaB",
  "key25": "3HYp1C1qZYbp4B69HZtaHjwfpPRcZAekYWAkxodoy77t86ZXTZwGRtSpKaSLUQS7kRdVVEv4XqZDkVyK2BqHfLMN",
  "key26": "28vdec1NcSbXCRBF4dSf6uNy5JGEY2ABqpg7DXPUKiNrEEf2MuECAeb6MDAMEKGJ2VXBKNudm97iG2RMx97bS9wf",
  "key27": "2jGYsJg8djixph1r9yKqq8GvijYwxmPJCr1bhsWkvDJggqrNHrkaJiNXEKnVkLuZmfePVaB2LFFLSfpU6NvKoVBC",
  "key28": "4NZmpxePVe4X6Pr3t6352kVFdKKemBRnpKB3iKMEhnKNfdzJzvbRb81oFX5rZNnkNAqPTf6B3M8kSAEk3bJomuNp",
  "key29": "5kfZzUkTCA8GMLHtyYyTyydpvjctDrrEymJCHTP3UrDrUXoPqbp5MKsfJNt6zVZuNH5wGt7HZSDeZT8YFejXKjjV",
  "key30": "42F9RkGfAKYTWL22gT288p3hti467RN2f1Peg18XdsYtDibRK8mvZcpPv27mVp5zhATJr48yFBJYz1yzL2Qw4QQz"
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
