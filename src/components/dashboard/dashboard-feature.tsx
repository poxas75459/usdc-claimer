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
    "4RbZTD7TsbsGcMbANj5s1k7yTAfXQjFz9ujMyVNwhmffA28TqgJKTeCcRZY1w2iBrq4bVJrsvu2E9Pnaxjr9NBiP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XXigGMNqVwCrEEQX3RHXRS1aZYS5tLoSEcAsutKbhyvF1dXdD85RPuek4aTh1tg4YQUFAEJLcmgqAssyJkTeD4e",
  "key1": "2dF6UEmBJQWfUkNvsLCvyZiTfDRC4BcuEVvCBSxhFRhakMM9iCy4WpsYmoQ5SYCBBTUNXLUijUh5kQoKnLWXot5P",
  "key2": "4KQULTiRKYG8k4SQuF3bbBTwc7HBsC9MKzYVo9MQnsW6dQVh8jGNqksbmy3xjaYjvtwuWg5mwTC3KfkKAHLUVfzh",
  "key3": "4tmy6hfyYXtbgF5MiU3Cs9BZhass5Mo4jT4v11xRvD9Ywdhsn3dGeuYijsAjQ9psk9HZFA2F9HYL9gWUnXuXoJ5q",
  "key4": "4QgEbT2x3oNQLtLsrE7kUwYSvzeGhZyQcmscQs6NEwDM2S6EfPurpyzCV1sLb2nX3pzJvfUBbdYfn77MQU7L9wSq",
  "key5": "5jqfAMdxK1rsBcbqwKcjkjadLncYV7CK1VnqhBcJSmxQAz7VccCqaVgqv16o9hYarmCx431PVFfR4N9dwChwUMPT",
  "key6": "P2iM6CykSt9sxrPhcpBEkvEDshiFQ68Rwx4D1LpZTp91tLV2U9kJZN4nqs2go6j1zyYqKpEyioFze6pwu52zNhw",
  "key7": "58JAoenxXS4aMWFMC2iMwM82qC79t5b8ZDMTWp8AUBKMZgfNz5YmAHH5c1ywFPX2UQoSJPdzEy3ySUYsn9DQGJqM",
  "key8": "2rHwkwAiEhhubTJUUSPTmshdmNKrnihdnoiazKvTG9fwYc24iaVXrxKdxSmTCLJ9CLZickNz5YTqkLZNAkT1Ar9m",
  "key9": "JKVPsBgjKMEDH1VTMQJHHVbTJEteJ7kZ4QSzYWtfKeMGH15ToZsDD8TR1WMPTx8VYZG5HqnTby7EGCQg2qQJDSM",
  "key10": "4DQwqkpb7bB8rJtYY1KnY8DYNAf1oeoP3FRiWwAYFWni3XVkfft78A7BZhcWLgEg9pCU7dzbk3Pc7LcrzpNxo1zs",
  "key11": "peDsndQNtkUzofJCeZ8LaNYEkjua4hkapqvrhbK4GyjH2aesJSBXbcn9ohWmvXZRYtqbHVgFknnAhicyuRjW8gM",
  "key12": "uYUjX1bRxAXtSR6EZqAFS22R2bJMQdZUhgE1UccR1r98qT7fm8MxMtetd4UUyj8cS6LC2hhXimCijsCsA3wYt4k",
  "key13": "5vVrNaE4cJ4gmWtoqqhWY9ATF7RRf2o9A6cma9iz7qTAgE2eZTX8JGAPq47HpKcXvstGFVcZvmzEtHVFn5qdagS1",
  "key14": "2efUXcwr6qtNBsekH2vqaShhbJKdStsfSSLiKCkDw2AkQiC6iWSQTEFv2PRNpjjYXZ2x8SPyPzgHtyU6CVjaVR86",
  "key15": "44wrJ2PwowahApwJDxnmjqxzZam2ygWvQiq2TEm8tG5SrTp4sD36mT7LPrWgXcJhgxXZVQQjY99E1pFjwZeqaVVy",
  "key16": "2LmnrTNdQjWxTrx86naSzhUSjuBqHcajq1fWGfymw3xEnWXzfBK2SyqpbuqjwhkhmCJYdvCTQpeGjaehUdgWzKb5",
  "key17": "2PjyPqWBY3LcBhJemWD4CoNAtm6R2nbjhMStDGPRjt7ezMYqPZLkfhKdrpGxbeqeHNmXMAfEUEj1Wi2UQ8FQxwmp",
  "key18": "2gxxsjxYBazudG3GUBgd394vnBwuRbjzx5SMtgNCS78dCMt3EtdHcu9GqpsCjc4VpEdzE4hxr5cE8hJwEApz12AK",
  "key19": "emLeC2Kddq8ksuhTgu3Z7q6vCJHyBFDBzhWtxcBgRhf9g5WDbqco7PEPecX1hhiKvLL2kVAVR2NjRSUjU37zb4A",
  "key20": "4LwhhC2WkcqrBpkoWH2XF59e2bHQVbEMLMBmmgsJG3smp83ZEpnDRtPQY7P9vhknH62vM6dPvAp4M7WxAGDqFwL3",
  "key21": "56FrbPTcE7WcatS1bd5PE4wLEV3oXHiNfs1R61N6MRKSyKKFKombH9nnzDizSPX89GiXckXH7eeTgEPVEUw7au1W",
  "key22": "2ksKuxfP1nVg8AVVsqXJ2PUt23uUWKWR23HrVc5Q2cxbuz6A1AK6qifnefgbnUnB7Sn3TUduj7HcK4zM69Z8vrRn",
  "key23": "251ekt6sJkt9NM96L7XoeVptoJon3Ee9twGEY1uYAjWVRUCcFnCnFQC95yA5fALy6nZmzRENko8takoxqi6LQGeN",
  "key24": "3LztVj54PQ5touco6WMRkG934sXDEzBToVAvZYrejKj48KfS4utQQP4hiczBb1HVnBAa8NvtvrS9P5siE8tH1rZT",
  "key25": "twRMC5ezpND2VKmQLrTLdAGYchZ5wbkhzMKDZvVY2Hu2rbVgnQ1aNuPWYZoVTFcwW4Zwa4ENfEJLchZ3heqNm3d",
  "key26": "5t1cdgDW9jPnT1eE5FCDG7eJSEHXQMJf8WhFiSWkWCbBwogATRd6DY2nKFobF2rp5K8Eh2LvJFWzbQsZX5RxNFXq",
  "key27": "64FhJsddSowruK5RTcuS4jV4n3NbV2r2jSynR3nmdDwmZgJoV1T5Bj6ptUsKTgEobaWdw3siEoBMbYFi6Rpay53B",
  "key28": "2spRFN8qxC3GNi36YjQ21uoQjnf9CKbEgrCvP31v88UquczkJLysUXpVPGnsJLbZWLpDsVEvjYWhfRhxr1mz6wHd"
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
