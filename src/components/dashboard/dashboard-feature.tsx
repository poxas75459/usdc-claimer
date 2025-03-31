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
    "5QA3mmEFgP1Q8qJ26mJvnrcrv1eZKmbwZZaC74nL7Dc8xgjioqhZ9qpiMXjNs87gDRzokx9vWh5YMkwuJVQrx8gF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xdXPe3T4it7pVo6HFb31rhrEwn4CSgmwKwZLQ2vQKgbQheKxhvKXzSE9SFx8RpspxiPyDt464bmGX4GgDdMmye6",
  "key1": "3Q4HohaAqpQuZNAw3kgNYcDPpFAU76m8JpqMePhFiYKEk9zsnrfLRaBGGEsFrwLprhNcn8DB2ABUNFVvzs9BxiQi",
  "key2": "VEfjUsFRrHucX76kb1W8y9RbSop5ZdJG5h9AfTA5ujBA54kWMLahcTte1TVmVfpFgXU8aymF2DyXb1JUtHpu4Hn",
  "key3": "3J5VoZkFysvfwJDAE5tXS2GvpEVY99jifefynPQsweBFD4kAY4JaBkDz43aZqpbmH5hgT3kUrRLT6ZFtV5j6Sgkb",
  "key4": "4Q8RRaHemTtGZCzYwMmkncgdn4oHTVj3oUmbizKLJxoa7GHok9c7ehRd11Ef49RjukLdqWFETkrJH94r7p2Fidst",
  "key5": "5hYgPiUv3CSSeVKhQ6Mtuw5o5s7kGAUikduKRF5ZyyiHyGfB4Ru5XQHJz6PhcKJmaq3hKVa9Qon7hrE7BZJ2vbXh",
  "key6": "uey379WV3Phqtb8SoRU9s42QZ8j8WGaQK8QtdjKUdsBggaEAREP2Kk4Fs7Ljpw4aGdi6ZC719bpnnmDn7y8LvCR",
  "key7": "QKkdfzXjJGrNKCd8DZESDfJBheztSHoDrNiG3czhTFeuDiAnjz8o1EzqNLME1W3vE1xwZk1W9mQi8U1XhhDBAZX",
  "key8": "2sFcnk9Je7zHck7ZtAZpXNxaA9m7zbH7oc4dmqBDx8xtSWh1CRWYjaEimeucE4P2dGxTGctgg7NXnxFPDYGGEfvS",
  "key9": "2TA93UnYhHjZKmJ2sKAEXHSZZRe5chQHa7wCiXKQhnbhd7XoPDCrHse8ysYHZYJWHMk8rJXXzEV9HbzEtLA3GqiU",
  "key10": "3ZeMc5a1fKerKQXNK3Z3UMcstVqraC9fdsxfw73b7nXzqVwHLiBE8RUhNPNv6VN2xPcbrgA7LxED8QBBU97HJxfD",
  "key11": "52h1dBZwcgFyWXWsr56uqUS9BxQvrrUPf6WPATRp6RaCqrdDx1YRDAmHiyQzcaBoM98Cn2UJdfQPJ7j2z9ZNryru",
  "key12": "481tCBwrTRX7xLqoAnZb2LKrfT9JRzR3LTjkE8KvzgfEbz8tLrgEWvrA5wXvJEHjBBaRFaCDGRi9848LfVchyJAp",
  "key13": "2ckSLURbdWECm1irk2vBgdGUFidb9mZKk3QK7jPHuh2HnjKy6L2VpcTL337ZnK26oorbSmC2ShFmL7kdjR5Rweh6",
  "key14": "HvXKpjfTPFKb3TFEW56mWU9WEcNqECoWzDiFYbcLvS3AP32b5vEiqTfDDyFviMiHUGWvFfgEEtcqXHJjRQyhVSA",
  "key15": "5Fzfto2YTMbPadBDZ81SBREXRDf3jnd3nJyHrmRip5kB8G5udvP5mCV6bn8YNGNqp6fa321Pg3eNTFH9d2NTf7f7",
  "key16": "h3Ro7AGM1y8rimcEZ6VHV4tf5HFr6AtHE15QmjRAzrr8ybnC2uNZNytQkSsBoFGZy8D66iYN2Lp8ggihdCk3BrG",
  "key17": "2PjvngHPu9DZ33m4EBzzhKKqrGTwBDtvS1bX53X5PtibGbSRGdeRnwY3pS5kzbpCWTrQDfBACD18erqyhDzsGbpu",
  "key18": "DA5Drr7ooaDSJcyY9rdmNSQq4GsuskqoXjKV4MVDF3UhDwK91a2YZ2sANGAzcXhUT4WUCRwm2MQXVpNsWqoqAJF",
  "key19": "3QDBGkDYihkFnoNvMTZyaHaC7vHLrYRJEDEZCtvMud9kWCsvoz9Ax3sbFPGmo59dAaGtsfcj9Kngen86YBezZCtx",
  "key20": "wNE35d9wNF9RDxHrcWm7S2FuRcfhujAdSjjKUakH6okbqRHbVjj6CP4Y1YeUXJKXJbkEsV9RTYjBfcR8Ds3TQ3N",
  "key21": "2MEhbz8atDtqLUc2Z6EhNQQphabGrYsxWVjv1W9GKr66pbiEevikUsbGeEcLVCnun4e4pJvdbbShRLQE7C2J88n4",
  "key22": "5QqcSTV9zhfTkX5a9LeWv194XwwudFUCFrcsj4V5K8gLGcbTm3oq2yawAxigzuPHYLRHqGstAQkhdtmh4h8tcpwy",
  "key23": "3vrQRJjfoaJ24PKsoeCnxrjAP77nCez8i79AHKTFTuYAo8azDzZ2Le4KGVfDFdXBk5mpSKmiWjuaDqs5XCjanp64",
  "key24": "4twH79RhRKxXV4S8eqyVn4qPZTn7FGoy6Cz7cgfJpVhzie1XAvsmq8wm1XqnHYbXC2ubPCCSTcP1PkGGhxWq3U5J",
  "key25": "5RQp4sHoyZTwGaJYqFAWWbM7gx4dpxhdnxPwm5rpBWhVCi6HywLzTcz2yRV41SDSDuyrvXvP5b9xV8JpaBhHVzdQ",
  "key26": "2VCKBx1LhbXXZDFA3WyFxdfZub3hWuXRsjZFKWPxYkuStU6DtX4JTvSU3W6MymZhD5Y9HsziQ848AJyZFSUkqZ97",
  "key27": "3Na6F1YUBZ3hCNkXePjEwUu5JdGAiuvYwj4K8b3aBzCpmRNtc4dAwpyH92C9NB5Ydn81dxRhVmrNexBzCNk92DZC",
  "key28": "3VL2L89RhFaF6Ez9dNg7jue2YgEcGQ7yfspfj2m5fhqCzYAaEJLgVzUYVXYvujBdFfMJv6SaJ6DwVrNZVkAC3wm8",
  "key29": "cTE39yZv9PaW1JLYFmw3RdanRqYWPRQmVKtVt7JvquAAvBqvUG1N5UTY3jaaw7DyTxqj7LaiFjc3UR3sN34pYrD",
  "key30": "4SBkj1jSyxJDbGBM7R2MMf2y1WUFqE2HPwj2nXR6K6P8cz8ZHtnQaYb9J8fjji9C2e1T9ThriAJXwJdLu8KHwk1P",
  "key31": "2kokjbngMXdo5wTLXtGdLZn62dasZyGHoJ9FfkQ9nSS9VhW1sSv7kzFGFF4KpWVwrGkymHQ63zVEfKKvKsEZ8yLj",
  "key32": "66r5D9UiL9QmFbeuk5PkKWodZfmV7f6a4VBmjbENtP98Sm24KSwPsyYT5wiQNT2Ljaga2YXsA3ZemgtGKn8ULKQV",
  "key33": "2WnMGSsBrn1f5ZvD6qnGUZD6eAX51XjAwr1qDn6eCJUW93NsWCS3M83Bfyj9eCtXhQi6MXg8jT4yD2zW2naCxrSZ"
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
