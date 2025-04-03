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
    "29PUBYmSN1Sy68vYb8CucUKEXtXAMFS3Ah3svxyywki86gNGXTZUnmjNCPDhSvfhH4UuTsZY59YWMNwwHCv1agbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wsqksg38jujgTqVbWfmswg1ncU3gBYfQbeXf6ACqggzGGDa99LKDbiRGGNKN1hLKRpHiinh758gJYMpcgyMdmLB",
  "key1": "5wq3oyDbFrnEnSrTrYUYMiJa6VZUgKLR29gvKWzEGfftSuu1biLM6rL3cBMMH2Fkugtk6tbPciyd7b5YYdHp2jiT",
  "key2": "2go22ADbNNDmrSuYkfbbqXoRucZb62n5L68LBBDw5FE9YTfeSceZKmE9FB1SQExdjoobHrGGAZyn78Xdy4TB83S7",
  "key3": "41TJ8bPyXgkGk9EgJgH2rgyvxkq9wWP1zRFQ899k612TAB9PTY2s6jnFXQKxDh4V9RfnDEfr8dy1TqiNtn5hn6xu",
  "key4": "5QRdtx7XitK674vm8YUKLzuaj6sHj1EBK4CyLusooShYvdSKRQmqjvXBzri1iK2RfRgQj2JtqXHAPUu6bvr8MdNC",
  "key5": "5DWJF4dBjsDLspUMTYt96Btb2LSboXgxSGPq2HWiwwadJwZnDpbmBRjao9KX9JdDxZ1cKuZfJdbhbybHzY2KGH8",
  "key6": "3DZf2E5LUE3xTKQNBvo7ozLuSjSTMPq7ovcZvSVfLxp2j7qjFk4KxThXHL5wnAykUztryAvjP5d4NHASgKDHkhsb",
  "key7": "VJEJhsjZALQFCKwEMvx8skWRBRNhWW6ggbgqKzhKgTVQK61DQCnAdLKjK8iC6xfjBcGxJnZDpTZr9i3sTm2zpmq",
  "key8": "4QKpLRW7Wq9MFSkx9YFRYKqkabzD1SrJHWzv9ssKawzCpazNX4xB4WjaakrTNeesExgGxDXPXsbxqnHXGiyWmtzf",
  "key9": "3S4pMYMdo9q9bGGiZkPdCy8e8k8wmH7tDqrp1DdoanERy9dVW9SWmtugQeECdjd9FvGsqKLmxJoYiKCEfD959Evq",
  "key10": "328UG2Uw8KarzNE9uRVp8bxnnqWUpx95eXmipELikCarK25g9cckbVet9eR1PodEtZ8MjyUtY4vEp1QkZ8iML9JE",
  "key11": "36era88FiJYGKr38mNabbgUc48LuX4oLve74wSFYCc7QDMHsGSuvwC3yNmR9wJQZXx19mWyFHe7DfRjkQxaWUhkc",
  "key12": "MivS6tLjbCzwBE9DEquuiEcsrKiBEYZNJX8BdveRN8ujNhEtieqTGey5u5a8vVSx3dopPApMr7po2wcJq12qAWy",
  "key13": "WCdvqj13Kg2oarDUVu6JKiTTWQth2DhxFsXkKixvk7jNtinpLTYj9Vu1CLVG9UhdwvfjWQwNHMFMGyU7zyaJqdc",
  "key14": "oXGoJM4YByPm63FTH7Bji2ghxU1zqbEb8hq1ghyPg5Y48tQXkrgzeZWj1pV9FTr8FBLvzPCTGgprKAd15hffs7E",
  "key15": "VWzhfj96L5iQuZxakTsBbgSxsPsWJkjPGYBa4W1PJBoJgf9GCpuaxXUzerk7A5TAK6zGfPkdDphQJt5DgEVeTqx",
  "key16": "4cbpTUgPWLp4VMfFcUaqEBH3xVybswaUgtbLURaS7UKP9PC9PAzqL9xw553fspe7GkrKYsHwNW6s29d4Tbv23y5d",
  "key17": "SbmA55VeWGzUg8ZbHEqN8bybU8xygLppPtWEAMptVfy1TaT8XtjNQ7TDvaKrpLmZ43mgCVqwYzUKA4qqWbpDdiY",
  "key18": "Epa4UrB86UWDA1h4tjT4qG1SeN6Z6DdBsufRnCKVY3e5Ca1WAmjSKS1pcu9svfL4rv1YGEwr8z1Z3fBdiJZozq3",
  "key19": "4hdnJdGn8Vax8X86ZaZM3tJvxm3CRpKZ9gU1N6EgNJBUNk548x21ugdUXEfJnaoJyY2u31fjddmFMBbXQj2rhLxr",
  "key20": "5LGDQmeTafrDmApDmaxkJuypo5TZzLT2ctE9jo6d7DNkLFEuwo45YgqNtJRt5NbkEsJZpFnujkM83J3Z8duxiAQr",
  "key21": "3Lqj4CW8qoHsjKV9bG1DAx7JHQwTXanvA23uRcpn6TnEG6irtdNL4fwaVYK9W3DKV1sSGtWUyNJNwaPePR99QCT2",
  "key22": "4ZhPTNGMTZ8c7z9YogQHwwDE6LEARbHRc6hQzShCet5wN4MJ8XXSRdtEeLEkcRNkT7V2t9H6WaRN2A3htWHVTGbG",
  "key23": "1UUm13RZDvQF7uqhzarsENwj733uF9vUG9YzfU9oiqXtkWhYKZXxTcnZXDGs61H8hzRK6sraDhz8quSgoSiHFYx",
  "key24": "2U9QvAPwQVbh6xdJ3VDQ5jVoFtkSB92sNK2pFF1uXS1TUEseL1GHFVbUUBeLwVn2sPDKb3eGTNL7YYzHk52GhAXu",
  "key25": "21KagAj6ydfJRnEfSev9xuKKDLAZHipoBhTKJN9Kqq8y3Y7Mtk7UMutCQZn3dVRGnTr3dznmTJdqKigjw4QzDGH3",
  "key26": "44eHwAJPiHJfhVpvvvjQYN3qow1wyKXXfeQJ3jmvxuPNNv7nVkz4SDeQjBV3rvGPgi3nDiP5GGhtn5QSYCmQS2UY",
  "key27": "2dvjAhrEzHvMJWPAkSofd4ymc25NqZ2hawvL8L4PGjae53XkEw8jMNjC8bYbv3RgNWVgcgfEqmNNe9zHcJLpnjuj",
  "key28": "55xKDCQi6QK7N7hsBGksrXtZwN3TQbRuaAyvq66ht6XNwRCrv2JypmbXzJvpQS5bVMJav82Fozv8raPXEugsan4T",
  "key29": "2KZ1FJuYCLqfLhcXCCGz7zGhYgL43fW871aJMhMP955ZPGya1NunKwNt6gt7DznZkcfU9JKt5QvLxxGRAG7q4ScG",
  "key30": "iFvdP3P9ec5ZodCBvHp5EX2rvNJUqNrNBA6gf7x1jSXgc6FDu1kUS6kM4wNDnfNLMVXNGtj57wwtuNodnVH3f3d",
  "key31": "aBM4BU9vmsckkiWVRFziiLurCHJHXtqrGicvE2yPmeuKbZAz8zUCHWjq4Muq5DA7bBvhwuKUVqKhmrQqpbfpKJQ",
  "key32": "2TKq5voh6gAG9VNgobK6nSydX7yRf4WyTHp3EJdZZVab3FLu6z7tKw2SzyTRa2HsgoQ3uQ3T9KH6mVvyrGnVwhMd",
  "key33": "2UbJsDWVUggzbfD1xjABQg4jDgfswV9iqznJVWb62Vue2pYRkxoPLjMXUG6UHCD3irrGWHqPRXtenG85PakbjBQh",
  "key34": "4fxb3V23yxikXXcb6hdPYkMt6aoRKRckvX36AiMvZiyhFDUCFHBaKm2wMR3tUSM2RVmhgM3cGRGQgeCW5MKLSd7F",
  "key35": "6noQiXVZ5fa6uiEAyrAaS7xpYtUEZVUDdxrJejbVKQNXcscPn7QJGf5SMBdtb5GfiV2YKS3aKVGijKYPf5CjANv",
  "key36": "59CaQ4ChMv4E1wRuMVUbg17Vs1QM4E9eUoZX9ARfhXcxBgWRD81ojpGG56ycvGK3Nu4L67xYdwajJdpuHdpXtPCL",
  "key37": "31J6QuE6C5CzTHdUhvvDLvP6WTz66JVJnv8zXQ798wvvXnXoAGPD4647SKmvhYCQZebj8R31yDfcsM6UVBLMyAN4",
  "key38": "4zmRpm7HWkTupU655mU3PbUuFFPK5wTDG5Sc1X9WKjw9ZRo6m2k7Cvtdiwry1sk5pJCKsZ85uqYZ9QMYU2iToFcB",
  "key39": "3rq9ApHCFCqUC7nYM4FM4yxHFQffE9PLnC79mDuVSuuQ13zHPRD2BJXxkNmWFTp57ZjK5HEWEZjzxxAdpnDQ2d2",
  "key40": "5C8AKtLq1MrjoX1kSEEQgU7JMSWRXRfbALvsc5F2ukp8KFQUuRRnhWq6zyJPZGQz4t4McpxsuksDUSdBDAQUuHG",
  "key41": "2hvxnJ8yzTg9KJRc7EaMEcGR5oYF599w5KV7Fhaw6PjBiLQ9i6ryUZN96noqNsX4TBHpaDqb7upkEG5f9ap7pc8p"
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
