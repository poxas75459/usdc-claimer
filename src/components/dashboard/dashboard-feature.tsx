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
    "2LcVZGuTTY5dq7YZYzAKsrMcd3csQLUJq6AcnYu82NH4QEoLSMUKiFSHxEeuWJrALrRiqCb5gMebghsNJGyG6tUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sW3YKAfwvyPYWaGFECBQtPmCNdh1tKJZtsnaJzTMWiqRQQTYUREoij6UEZfFFQCBSQxBC6u6xTDan4RqrXb6Wj1",
  "key1": "56Q6xYyn87Vko2KQQMk7Zfve9tL1XtvDnuv8E36WwKHgEmQ4qz5niky1VxTwf4QhwjJhn6e7BQ31Uu1KuiqC17vy",
  "key2": "4HuM6voJoNTCGbj1ojjE4eBFndoDcHRBhZUcRsrAjKvQoccG66wkUggCo893d74kL9GMnB5Q8HYUaPUq6RkFk52V",
  "key3": "54xiBSvhoRj3nVPjbCzt972NNm4XoDkZsjjfkNjjyCbeCvTBr5R3MZevreNFZ6nFoFeBULRyJKwhy693wedk3NTs",
  "key4": "2QSNp8Nci6st2HkMn4TdWzEzZszd4Epxu1YrZHqihzjT2YBZJXF5NWA2HhqR7BJbm49ALcbbv2dhXosQfpnHj5Hf",
  "key5": "29FHLXyD9XBKMfWoYjkxo16qWSPHBXKdYFffDiAhWK6gTcG96FSMp2KFxsVW3m2yavrGnnuntRVG6YDRjYu2L9v2",
  "key6": "5Tqc8NKoKgJH7JoTkyBJVcoED89qZ6yYFkSWspHyQcDonmhUhYoJQMWokuxkymD5VpRHE2tPMEAfr4TPxVj1rWnX",
  "key7": "ZY7WY3E9BSPCRNxAtyY8n1Zp9etJsSXbRyssBprLr3kogLnAkuAYVwWfqHQbkmrRyc7mk9ZAMJToDhE72aiPPA9",
  "key8": "5aKz93jd4WopHPUJpaeGunxESEyYe5E5JJj7MGuQmr16qdUkHqnh8ody37pz1qKSM5D49U4YiTagoC7q1TSqyRbT",
  "key9": "4LYUsQVtQkuqQhvxBfVkyPgApZ2eHfpSN2LPfmjACkUiNZwSX23VC8GPPuL7cJceSDsx951bGmGsA3wMMWbbphAM",
  "key10": "5H3r3jV4QpFdHWMqN69pNooQfBuXZnkcuMwh7pfLLffKGEW2cVBDw6MN9EkLgCVXWFyUjMgeWc2NyCSgZTKNasAX",
  "key11": "4xrMALYwRJg2WrXBkKrq7ptge9uDHWsqJcxv4EBULCbxTadzBUaovPzgbJEiNUXw5FSLdCZzGhdBZxzy8gQiKRn",
  "key12": "3Bv1ppPUewxUKXfds6rp6bXcKwoQVpDbGyCfDRvWYTJ1jCWdGiAhk8aoENgqvAzQF7GwRaDwvde1d4Y7VwhRJ8ES",
  "key13": "3GrWjAy6oz6V51QNWqVg9TjCjLfRoqb6KMWsFfx6RCnk5jdRV8JU7k6wovmuxz3BcfFsmEgs5pfcoMP9K1NXxZi",
  "key14": "512kxTEwsYyuQ3LDuBhAebedqA6iZih5EgD9gUZWxihiimTUNcmWYNpLvCurL8tTPcnzwZgWaoasJQ8CxhVA55LS",
  "key15": "3QVt6iZoPuUHKJh7Hv16ACeuA3oCtZhaY4yKN4RYDuAaUdf18uiB9rwECrBnU2k3fUPMqNVMyR5oM14CE2EL9sn8",
  "key16": "MGLkmW6qPA8ita8ULj8scxKPksQ1cRMwUBS6d3p3DG2SKTNjnviqZeKQqw5q9M48jRY5HjZvoBZsji8WsYsJxUa",
  "key17": "4BR91m9Lqt6KkrDNZFFbzZg6iLxmHHsV97P2BGjkuJEz2KbpZd7EBuJQSWDYsfCjGmfSGhJyaTvmXub2NjekjAbU",
  "key18": "4PZ4mv5c246a8UZjsMmcbzJx9syNS17z3UvtRSk759YBVeuAbHoxjA5Bj6HUgRGeekRw1CqVJPEMSSXhL2EYJUM5",
  "key19": "4qQq49B951V6LPTZrJVfTTf3hqqghUvpHP5fDgZicV6NUYcjnGZCKFC3HkzaRVQfpFhUtkbPqy6rYqZj8Gucjmz2",
  "key20": "4SrA5nFaatTbUHkSftyYxW2g9fArKvSffbeFkwxMRso5VRQ798PCPN5pMy3ERnTmf46Ji3ezd4JgZQwgKVuq7ae7",
  "key21": "2h6p8UjBFp7ioUWKWpjpavQ95BxxT9uTDiLELhQRU4jQNRXvhQVuKSRYo7STtuoxAbpNNkd8JXtGGLvz7cEhnh4J",
  "key22": "3bjcq6B2XkZ49rzbxQZZir6Bd1E4ndV2j739nVnHND4w84PN5SAsgjs77diDsJqd7T81JSLy3XnNRz4CuvxcjA8W",
  "key23": "4XepjdRBS16zRKijdbCQwmpbf4w7sfkNVjdCvUKUGrLRFnD8SvYxbrH9wWLm77r8D9Rh7edpa66NHgk3gnq6sMyk",
  "key24": "5xENnemFuSELAZUBAYRcobe3qcEAAGZhmWaajCBjqaUU4pwxUXYL5t68RD91YepfCF1ubbv3dKpyLiuhBxBYEsMr",
  "key25": "4DaSVg7CSK5KjNEhTvX63fgFZ2scHS47r1q44cVms3aKV3FDcZVhpDSwxVpwU62AyXfj4EgZtwMt8Aw7dDeJ4RvW",
  "key26": "21NNyUzoFbRQpvjBjMPDMXegPsF5PGLT5gBmJ7arPL983Dh9rbtKAw8Fz9F3gzQfcLTbPUpTiwqLEgurj5iR8iKp",
  "key27": "5R3cohLFFmcPQVWPP3PDiwoQPF2zG1u1X3XZ4EhtoXj4NXosprfcg9XZz1U87dGwXXiUrRr7HcNuj6i9GZX9J9oX",
  "key28": "4rz5VbBGvQvVcoUk7rHTfmE873chNhbUJEYsxBrpbdnsTqNSKcPURFvTnAtRQbz1MdgpcFqw6n4x7SaNGBCfZLJS",
  "key29": "4KH7v1Viqf335iVB8qVa7gcu5Y1VqhVAevVytKZTsYF7DrTftcZXx6JMHrQXCN7ARstvRvaxtyqyPaTfpBtpPGqY",
  "key30": "fpC2mVqUrSNZejbVdQj4UKjKNncyvDNgUhEKZqAixSZHL7ngXgor3TSd3mrkjf2e3nYh82npjmG5WWeU2o6NtYb",
  "key31": "2NiRJpJQzqKhQy9nuZ3n98r2LTADkLsunrGYXsJKZfWTKSjY1kKYqpjUmoXzuYd9sUWB95S9VToJ74Z31LmZNhZ5",
  "key32": "5b5W5MzHRa7W21BQureomvWExLsWkKUNYb563fu69emvjHLyUZprmmED34QGPPwvqWxk2ZypkVFPRc4hjjBwLKmQ",
  "key33": "hfRzY81AHE8qh59ds4DLo1UYjD4tbr9Trji37VBfyw2UqfbZPQHLu6BjNkwJqz2FXSrG2haA39jmbsnHe5oEQXg",
  "key34": "3Vfi6gVEDCgTXwd3gAj3m8ohnCMrWgf8DU39oFrxnJx62kKJHhntdEQ4aGhmd1Tshtv4vnociVXVYeBDX3xjYUg2",
  "key35": "5RuX33XuHPB3VYetFhoWkUMdggsXVPJc2F1t4EJ1KFXfxoWnYtY9eAgG8n9XJ2FQWqYtuVgjGsJZqRVTETmiCMZo",
  "key36": "2igWudtG8bBcmj3D68tDtc9iR4q9Uf4fMyMjWouu5yX4vTHE6n9UgVdStnbyF8fRPsrJiJxYqc8B1RpEgufg429J",
  "key37": "3GXCHaACu8KPEVYpgxucxbAE2AfzfAux6uZRYKvGZ4ygYAHEvWCpA5PJcz8T8sYPVCHGvNWT9k16xJaVGQCaR1cG",
  "key38": "PjzuRE54bs4tqdFyLWThVUz6Kvavp3EtVc7Tu8fwGG7d9v9D7VDNvVwsxeN2UqNSXqUps6eFKhE826CU44mXY1Z"
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
