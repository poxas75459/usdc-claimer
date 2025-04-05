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
    "36bJbXjMv3nRJ3rzXR9GogWLCMMZHy1E659qAXbVL76epvgbyZ35FhPKdEyM79CG6GrNetbwMhKxtyz7fGe5gbed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KFcXx9f5nBdwAKD4NJC4HjJcse2Heqsk2Vc5PCWodaUvpEZm7JcNcSQosr76G3SBFBmuxK6Z7mmdoRZ6v5QtJQf",
  "key1": "4pYfnh6DCwxPLpzoEgkRw2Lk6rFrawii8Ty7sRuLz3QpUhY25g7BsvtuGcVeJfAhgu8ZEMtJJnDgPijwtdrWPJ2",
  "key2": "2ZmmHZ3h39bcjhLf7oMDHbWo4LZuFaA9LFf1jC3E1UDf9eN1hWv9wYUmYRtmKZuj9YxuTyf7DVgTR4iZuKzWUAWq",
  "key3": "4msouiNcUjWeqApMCNQMurR1UDncSZNyKq3dHBNuS14PRvh7fNDPspRz36HEeBVZ5RMp5tuVVFjCL9mn8iDEV3oK",
  "key4": "3JgcmeBmftowJbG331Uk4jqzD8Kj99rGRMXABzFDxyuGLZyfjdExsjZvsUNFtDUeppDBakUoS159Szkm1nsexB26",
  "key5": "3sXPLW9mJKBzKyxfmukMgshWDrr62F5ajc7LgDmxgxCnLdESKcKeZtVUwxNRbDjg9cFipJTCjHAAwPhn5MuSAp2p",
  "key6": "38KimLcmZatugXGqxszYh3oHbqcQJPUsDyifwFsRDwwSFZF7m6MFw2C4XJKCWz7my8FJLfsGC8WNPdUbuhevyRGH",
  "key7": "5ddLijJtPLZGCxd1hQPjpeVoYFLi1oR4Ha5ZvaLx9wsU29fcXJz63tAmmBrSPMQoJFxoy2atgqem8iGUwVHpMGge",
  "key8": "5igmBQPmpoKPoXgqL5EFQtHkWpwaNWe1xaXLLgNhKviLtpTgjahVzFkCtBoQ4zb3qPoeszCU8GV36Y2zFqH6Mkq2",
  "key9": "3rnETJKvTicEeo1d1upzH5k9NtoV2ZDBR5b3Mm53MHQzDLKKhUpDSdJN5ypaX4LfPy6DHGgQS7GdAz36gSgY3pDX",
  "key10": "3BFhr5yReLfdMZvYZDuHjojJhdj9W1ijP8PVGH2v2Jx6NcRizmmBMWbpUnXnN2CvqjA8rHQaeTVuq2H2NEspNuNz",
  "key11": "xnLxtUhKEFjywhySd15g1Yz47Kh1pbkhbFAwA1Rts2nBeYZ7a1gWY95tEHJFFcupoHp2EPjDgEhTch9EoyGhdLH",
  "key12": "5Jmk389isLLZbswd93gAZ47eoe8TNmfVscKnRCrSnYxoYzAxhMXiN6AQpEPwxZkWZ5SpTTQQGit1FCw26wkteru6",
  "key13": "4jZSL75zw4fLQBEr9KbFePVZu6HPfYTk3PLX3PKQrZAwVf2VZA7mwACCmq6k9oiQzPvsyyRAKKTb4skz2hbfxoAg",
  "key14": "4VsVrLwQNkBk72yEHPGYD1mhnzNXx1JwXLHzYnzJcU41H1YJqokewRF3yRWh68x9qyBeVArsb5Kf3sKQwDNyJxsg",
  "key15": "3d2cyirLF7ZfLRwbrxpA8oWV1W6diyjRSphEhDUT1tfqRyKjmzuqqLXj2FyoU2eXLJmGyzuccg3f59mUzgeT2ece",
  "key16": "3H8d4yVwWzPoRh5mSKjRSF7XRktBUTGNe7UoTpQdGNNBQJJ8dBZh777JWuBCk9VBfTFGDskNJhmdwJsXnweZtLTY",
  "key17": "4g77Bgn6CKLzyUxHWRDWBy4hrCiWt6NVJhgwJxutMaurh3pfiWdoGYQ9Afj7ZqTa1vRxMBbS966M841GYdftEA1c",
  "key18": "SZYwzgE8mLqm1pxfCNX3KHkvRCLG3WDGGomgZWtPYCfNLgARtseqR5mKqRd9cxbQKjZgzvWHvW4vkDjaWfzoUe3",
  "key19": "5bQHUpyEhdsJbPsGiwnPCp9hg17Ggz9bA6iLJdaMFra7yZq7ochpjFikyRkP3eSuwD1ee4JjNrAqHGmG8JtbTAfg",
  "key20": "5mqgcagJZd9SNstq4UFvVifm1NtF7cJ9QNPyFZBqnV3e1cYoW4BP714PHjj98oTVSju2FjJ2meH2Ev6RG99hoNV9",
  "key21": "4AnmAiRwH9QikHnieprLhVJm78azYVCqEydBQL61f5CkeEaVq9avh4yD8frbz4WZXuzKfYvdYPbqak9pvgjnuKGd",
  "key22": "5Rdxg57Fuw1e3vS9JoXbi6qS1CwAZirDSG5YSAUuY8EeEw6zvD1BPXYvs4DoTsQ2EVqEGBJkmBkrEKgrtqNqf796",
  "key23": "21j9VPek1cV83Y3to5XyjyYqWborL9TtjbapP7fdBnUrbnE3x9Mtor3zfDSsfc9bx2114s8vawmEJFdphyv3LazE",
  "key24": "2KWBUtsTGAHJYbyu5PPXKg8xEX1sEVpeeAu2fGVeNyBPCWZaZux9TsDxLVHjzK7kQhkyPmVwzwHDtBki5w734UiN",
  "key25": "3VgsjbHfjcErRnBfxrHxJD6fvCHcjAqv6J3R4iTcjaWQDjM21fn42vJa8WvSqf2fTSDxGqQtS5eyhT69qqiMZevC",
  "key26": "3scoE5yt2VFcb3Sbnj2KtTPr9GNXy6D9VNUh7CrbxgMKzGjg8s6n3PXghHdmcuZXehJVGHVoLyN5YdGmWJLyTkcy"
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
