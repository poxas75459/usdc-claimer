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
    "5tBrhQ6sGpjhLr1HkHmyAm6SZv6vErDfG6WTAvh42JFMUmhRkd7tcUZJ3Rf6JLZZfAjJ9DWLVjBhQiZSZ8ZuEPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bpDdZLgJ9wEJpAMatjXzaaiWW1jDNP3a5qtsEm7ChoSFx24oNTSjJye4LnCzT9FLdSyacz6S2LehKChMM73Ao6H",
  "key1": "66ZVARBERk3QEvQhMiyXj8brRDA2PFW9s4TwYxxjTtkjM9shMJvVaubtspaUKrbocAbRm983wFCpYnEbBjnbdjEq",
  "key2": "5TRVcwRtNxWKPBWjvmggd11awK4S5VCmqxoR4PVqFSjNgbjN9pR8aDsnRjk2178Pz4ffNVDi1dsuRFqLH5cQ5XDE",
  "key3": "3e6aeV9jJgvh5b1AzdFnnVG5xNATX6jqyuZsmhoB94N9PTuWPkqZh4R5CpmtxLTNE7xoMBZGm33o1yZWxhxLz31N",
  "key4": "5mR7LGnZLbBoEVSbDTMUgf6gA1vS7yyFWnQoPTmnmX57EQf7eJrgrrD5giLowxMX8y6i7fozg4KrPkg4ihR2tuX2",
  "key5": "52hTZvP1K7D3KyumPzVHtpUjxqz6s4JxHZTMW1tp4EiMZ4bEhWWRJZ8oi49LjqWRP91pAxW2AV9mffCmcwNpsASK",
  "key6": "4Y5x1VBz11DbomxMuHjvjPvNPsdPXGVRaQ5rdoXav8CKSPUivCTF85HN6CNueE7e9bAfLwJT7KabUpzfdWxCrDYK",
  "key7": "2CZFvbpLhBK6iMU1Z2ZRbrgjXQvNoXHib3uyJTCeCqTFvi5d9HfrvwcKqZ9yxY3iGnSxm1pBEmowL4eRbBY9M2wP",
  "key8": "KDhtR7EoLBox4sKeaMuLgMydU8X8i3JE97mmeGt1pC7P4BQgAjm7xnsSqreAwRfx61m2KwZ9t6kZpYMXnRTTUdb",
  "key9": "52XTpxtNKukRKrJQTZqzGGdCuiyzr3qTJnzUvFBiShfu9eWLkbZpfYj8gofhJLCgpA1F8XyzrLXbs3n2aBMubfwz",
  "key10": "57q78mi6E8MNMMVkoycSuk83x2Dn9zn1H3yXjvDLPAgxsEFgo4H7YaJjbjpberBGHULs2EVPyf2V5oHWKKRBERpe",
  "key11": "5h1GXqswhyNUjch3qaaxmKPVBNJpuVDdNUAdKYfJida7uHEmvWNqR38wQTkMe9nExPdFF69QzZVJ3oGWg9uSWp2a",
  "key12": "3SGYn7kaLLBnMcg2VbEtPR85ymrJSuuar8a7yNn63zN992cziQXvHkkwQyGnkjRSkHA6C38aWRcaRVJYVtPjwhfL",
  "key13": "4rUBZvgAhAkAzzBdSXwWvMc4ybvDW8Ptb4VSRbEhbZMy8LxkHk4fZ796NPWnzuZPb8hKUBMqgpFAnVFjwFoyioxP",
  "key14": "5h1k2Tft857Y6pUouBamEf8a5y8uUFb9JcQV2KaSMfVAPa73U2ZNGzYPgiLwF8z6a3FxVeHXoXRuJLZ9934nVr1z",
  "key15": "Mod4JHQAfQULQ9q2SN2TAiE4uk9zDiV3ES3JKhC22k7QFzhFN4PbBbPeKwYcD65wcpMd3cKxevaKrzMsS4jv2cT",
  "key16": "e9XSQgP1tteC2Y9ot998FbSMvturfcrw7LoTE6sB8pjNBeHQVfbAaEQD8eRHtF6g4dQBVXQmW4DN5bGG19VSp8L",
  "key17": "258w1vZthanasJ9Txt8gjGjy6iKpwQUiN7rtnFTaBQXNnQyrVJf5BWtpdpQWTeZrv1VAiAoH6BktWQzRXMWJDovs",
  "key18": "VkBLAdTJMk4ZQPgZQBuzizSpM3PjG8iWvCjKpDTRafc4iLTPYrhoFK6ED1EJHeeKM9trA4DE1vXH36HRyBp5WQG",
  "key19": "47mX5PB6dY97Rf2JodZXXYgMWHMJ4b54XxmvKLSVXBo6zhqNJfiVaZ6Kqj79Es48mHw6i35BtSKgj7GbhnBhk92K",
  "key20": "2i8o8Q7BmKmF8nZwujJJyUjEJ9rPYEwcHqCfopkV4EiMRc6dxLELsjSyARmYq6shTtSbRvJgULeAwB77nuQFqU18",
  "key21": "ppZxhoHJL1dNWujbiNxEq43qMVLXp42mZKuHNn4Chwb2Y1L3pweXrbSzyDkSXrCMssvEHoxQp1oJHEvTaf4y3wr",
  "key22": "5xVvDmjgW6D8WDw5REsFNhY2RsSpkPBodwgnpQFPwZ9AvvFHKfKGZQPLwcg8nSYSjUkcBLsjDXbSnX7PKJZmwQn",
  "key23": "2Cwy9YvSvLyA5c7R8Yip23iWFXFURVM6XjnMiDMgfe6sZBXMkz74EPQLLpo1dS9cfK4r6oU7umxYaYqF6W7gKgoD",
  "key24": "MWo72KSHEpzwbKQKojJBzvRX1UKwjvfGA8VobVt7QaCtfkGvYZFS5KK5uHMsc4mJD5C28c9QXpCSYqDByJVGeJr",
  "key25": "5c3agj5eabp5a2QmzVND8QWSHxQH3YPcZXZGk9fFtkbBBhbvtwkGsuSKthcdmoPXftfALshriDHpRAjxmZsvtH5u",
  "key26": "5mokqgbKfeeLr5tcKnqbo2e3dSXondvouq4VX5gHwXqcsPSj9dBKdhVejT5iGZgCixQ2mqFVRMQH6w3QYW8mxngr",
  "key27": "2DQMHFrBELfUr9hYGrAsGzzrPU7E3Fb7j79BoMd8kNySPN46hAS2PRU5mRdpj5NhhXZxwmVXFHY236jJr537eaKK",
  "key28": "boeNVch9m3EjF5U4ZZL1RRUwPpQJSWBZDazwAJqw1ZYqczWE2Bzxwqg3RFUJSMavS2cvqGyGwHKhTaxoQs9mYxd"
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
