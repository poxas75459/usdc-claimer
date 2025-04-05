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
    "2uj5rx2YDRytBV7d7CcJhiy3TXJJNcCTk1ezW82ePgLYFeHiuDKzc9isHyCsNnrhmBeRYKKrnNwMykhfoCJL7JKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "352mJyuvEWQiXKXT2Tr8GNSUwkv7LUgqV8QN7AimS6Fpz5SxQLJpRBXpzzsaWmGwwNavzP1E8SZgVycExs8zj7Tz",
  "key1": "Eq6yhzQYTfBvNQaHHgMMYc85UisCbpF9EPUEie7egvUjec7mfzEwF2D4TuHsKaDexHZwStkHLpujw52EdMSEEjK",
  "key2": "2neoi2dPVogLbTGxDF2sB7WgfDNkXsMJgmxsgm1soWMDhrpmGtqhgDLKSUqB848cEBFG7MPYhaen1rzN52oh4aQj",
  "key3": "4P7uNfTKiVyaaUgTN1D1jHdrLomSgZbGMeeqtbK8Rw6eUzALg44MH9WiLjusAXxPJb9UDeL26YzLj6u3URF5Byja",
  "key4": "58BouDv5A7GNYqznrW5kLocfSpfCjEFjuwULkrSWRv7zj7wECoSLHrPfg1LgEx4PWarQ57Wtvw9KaWhHpHjYqB9e",
  "key5": "4xXognVkMCvGjn9fZXAfp7HXm1NzsJ1HyD7Twz9uprNNy7vJVPWfG48sCsRf9qZUbLRdv1TvsBf88rVnBugBPCxJ",
  "key6": "4yYD129edTh4j5TMH6o4m7qM2mm4hFN8tf6XsaEjZZEAYxf2pZ5STLNdCJ7isWBzXXeLWvwT8imRvcgnE5NT2CJY",
  "key7": "3QBPstzUbL45DBaR77DmF5a7Mnvrw2t3ryBmsN4n6HvziYxPvzWn8jLjXK4XYJaDFjTFjsXiohjQNqrGeE1HwLKV",
  "key8": "3RUnt8KGSpwzfXFLuHEPyT7mEVadAL8BJk6zZx4rxgWMxBp6AR7cakT22EnNrt5mTUF3HDfqLVG4RPjvfJo7XV37",
  "key9": "4pAUgmxKZ2n6vfums5h2SaAZpf5LcR8NkV4D1JgrZq5KUpGD6zvbjoMuNYCgPGBqnNFpU6PNYgRFq7KTE2vrHrwX",
  "key10": "3mikvy4979SZT2YMd414kEHUpXijAhkHwe6sBM8nGSAow85T3xY2YLU54vhF37npb7XaLswsZ2yrV7hZydBCjV1x",
  "key11": "Y7p8TBxm5oNdNkxZw2jwKmWWQN4KZLw16C6UJm6W68axxAqnJd73r75CKR2aVMatjTs4MTY5wgg44rH9Q8GWxDk",
  "key12": "28oxDfrWvaV4jysU8tr1dMGivqPoSdttafANGKAzoJjeR9GsCoz3aDsjNFiKLtc3dh4djJAbAvnyADy5pHfNzqAx",
  "key13": "5PYpjCS9s4hh2ev3bXJCGYkF2YVYcJphhFGnChwnXdTYiTPsugQW8H9Twc1mviuxktm4vcDPNvZKxPcPT9VRNaDk",
  "key14": "2yM14yvYJSjfw4DMrtwwdL5zWu4vKcohWm2JuBZn3B52fjndUFyaE7GyvXvYK75aKjkAq1JgTwT5BmeD1aNZ9BjL",
  "key15": "5Bw3ZjLPAXJUfPF8fdQ13n5E94SCqvkhBPaonNAF3WUzu92wZtQtt29Rwokyfy45GGyYNfLqxbp4fj2cbBq45VgP",
  "key16": "4wjyaM6eMh9V6aza5LPeUoZEubRQvYhaGJNWpxjFESo26dJCuf4XNBRmmpxGyc3H6mwpY3QSyoW7FC2xEGrryb5h",
  "key17": "2ejfpQciT1DAGzq9cyGtrsVWBnUvvDsGQrRLirA4kbQJLdBnkq98FUmLinmvMz5uYRn9VtG2CYCWPZpHM8cWnH9L",
  "key18": "3o7pS4dfULKqbKoJ3FL8ohrz6P72u9yrvHRhzoz3yDvTAJYtEyb14WREFymKzc6aK7MpFF3xVATXJyVAyaANyGa7",
  "key19": "63TLPQrMRC9iBUV5dpkDKFjaJq9LFLAD2fE2AbkvQwWpqu2ML3ted88PS6cjRhnEMqVWRY7wZycsQyScX5er6nU9",
  "key20": "4D3M8SB7PExmyW6KDgVSwfQqeF6uGhapvcvjTigcM15bVAHXpXEDxX3uat8VrMv2fEPVVSHaKqgs3qZnuAtQrisA",
  "key21": "3C33v6HQGiWvt7hJDzXcHLKvsE41DbnZdn9n2ud457YBFQQN8rrubPmhy4FxfNcdYBa6U1NJdwX9WtEyGFRwj3Wq",
  "key22": "4bUepVqo7o5wvaV1kCdwxihWtDN2UZQ7YRukhayUHWScxRKBmARzWtRH2jh9kSHK3suGqtACpNybYJoZutKQbnUN",
  "key23": "5e7Dp3Dh8kHjSDxxosj9Zti8tpaPti76YWcds1TK2mCCFJX9W6yZzDV58n2xCpuxM6HBew3dWqLSEarqDzJ7iKUV",
  "key24": "5jmp9dMYsU1rnGT4yEpqQoAHL2Ak4KXQTeMLbQh3J47ecnW2wBAijgEfYMxU9FAgzWAKNm63DhM2rvaedPm9iHca",
  "key25": "2zH89Sui9Py4Jz3bxfACrq1Bs9oc4GbTozW2kVNRgy42veBGj32YANk9NsV6seP7QQtHhXaGpPnzPZYvSBC2BHxN",
  "key26": "4runkLambiRGEAUsMxYhzcGzfLH59YRDWt8awiiuqnpRwJ3qUaSeK6MTv1yP55tLBCUskkEBmYtNiyHcgdfLrUED",
  "key27": "Prx9Z4XPHyBxxyL9mn2yQKgHsvTn7ERtLti9XfBBbiHhCPPbfJmREXq4kgKLGVPzsVNFZVLKWtnBfpmafn8omaV",
  "key28": "3CkH5MuAtrFWexNaUyYS4H1ekX8GQ9edemTVHAF4vZn4YkwyuwaqGHa1NyZvHaCF9rjo9P62JJ6fhB2xuinZcd94",
  "key29": "4Z4F9yCwQGNTaoKsckyLGYkzzRpQ63CtZhGAZqG34Ldtpv1meWUKmMKnLxn8vTvBvmnvzk7qUYrJGGQ8zHE6HVr6",
  "key30": "421vB9mAH3fBHCsreLKa1ZP6pKqM3HGJQoWm86CyW6HgHVKWxWr2eT4kw9pw8oK7c2UY6zuF7iK9nagjyPgkjB8z",
  "key31": "2bEBno5VJWkzw1bjnVttVLknQQLjSekKL2KootBnAUyjnwGXAqVfpBZ8eGNZmcWYjUQ4Ad4v3Uah9kY3uQHnK54E",
  "key32": "rTmH7YMxiMvqKTdsQh2bm1EQki3URkUCvDR968t3uif5PDESsF1XvC53RyuwQWvFSuiSWXQx7HugkocxGVk2hij",
  "key33": "EWVcqQa234Awd9LAZ8HB68AEuTqxrwWcgS7D6z6HmdiC9ryWsuQQatwtWZSzcRoVGXPS7R3eUL2ETdh8Py3qYcY",
  "key34": "4Aa6myK4XByMRZAEKgqAw7kA2XR1JhKtwzpgysGpKpBLxPC5944HU7RCsKthdUwyYy4bjy1dFamVCYNMY6C1pv1U"
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
