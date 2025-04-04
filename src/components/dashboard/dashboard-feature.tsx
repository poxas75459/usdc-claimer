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
    "4MJwcUizaeiGBBSe9RMVjSw7wAB8BXxSu3UxBa5RRjdhZGvjorNH2aEdELkdgChm6tsRYBqxftsg87B6B5hUuTSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JgHa53pKwszwurY1bGykjywVcSDH5f9HMYYk9FatAGhaVW4H1xLLk5JQLnQtqcbGZN74aaATmRwpe5ZAyDqBeqz",
  "key1": "2Vdf1tSNRBuUhhwaKcXGcrLvsTKN2dXX8ofwZMsTk3KPfibZbDg4Tc5ewwNQ3B81ZnqahBApiegkXCPjTe6y1TQ2",
  "key2": "5EMdd7xktSSTd1awjPGuVPicywG2c6RQNXB4Eu8zScsT57AP58Hdy4NBRwFyhyt3AnDG9d8t3D3Cmfmnx2daTNRU",
  "key3": "2DxaXWf4EjCRZq18sPenUkfFb6Qb4CGmqWjt79UtQ6Exg1LDUD3UWfz1ePftZTVCAB8tLuEJ1Q6V6y7qQh21TVJS",
  "key4": "25B1sroDbNqeWQfHpoP4cLAuSp7Xj5nPat52HyLWZmAqafxJUA6cj2k8KWu3oReaUpG9gE2kWpLuZxtVud6czTLK",
  "key5": "3VDP3jtxVA7e2E8WPdhZgFJCB4aWToYa4Xg46fdjZb1rd5CpC4UXW8YZd2L4GVApVSvAPHKVNbDvqr5KEBNYikVy",
  "key6": "VhjfFMhzhJehF9VuWcjfVFaKwzDHqrHQCRpSQHWupfMjEgkGGuQCCG63u7Z84RDhMbcdubnVYHgwQNk9NjiC4j3",
  "key7": "3B9c8R6JzxbKk7T3QVo9PfhrsUi6hi9QEZBE3Af3MzeFaAPBgoVTRPqE5tmah7CUrFNGY2Fzo6cik1NWma1kEYw6",
  "key8": "2h9etWUdYsivC8B1y1aZa9oxZmVvWCmjBQTGvXxdE5GXdQNZTGiJCbqx1zpfaj75YHFk2d9EvEV8n84Vc4dDQWzx",
  "key9": "1bJ3gSfjufuHHfiU7fer92b6r1okpnR3hZA1SwckP4APs5DRsaisKRqFQqgZNbmNqQMLrd7yj6D86c9byRcKUwo",
  "key10": "sDC811W7JkjMmAW1AJsh3EJeazHksLLps6kkSWm7XRd3GjvxmmQKdBzE81KMc2eMGGiTZhSrtvvZbfp4potxdzT",
  "key11": "32ofomPvqsDUkGNjoQaMgLLnthce7tMsY5q4Yaqf8nzWLwnKwFwVEzNdYWKwZPaq7yQ838GYTux3wVKA28ZPyjHu",
  "key12": "YzVXZqddsCrnG75ygoyJQnf5JC7snu2AtpprJ6b1a4J6Q5Jb1Hv2JuzTi6oBBunYMpNx87Gw35YuwhLPRRrabNU",
  "key13": "4wM35dmuYrJdR6cB8FMX8kJXBXyzLzsXscqjr6SxzBaorLL8ZbMhGkLtH8m3HApYQavxsoFqimeMDQkDGoSn7inJ",
  "key14": "2HUi8CB6ePRy39cinUsMfqLi7EoL13CAYFYVHQmFE3G3Z98L6yUUtsie3znb5fq78UaBXZgEatk2Dde6wa1sWPxD",
  "key15": "3eedjCxoSoaxrjSEjfFifNYqPLWKAXr2hYqFEyNn8HZMFKstwgXqLtniWY3qGRCy9qCqtA81DZxZEoZrP6X4Dzov",
  "key16": "2dhomjn55WeQAUyfvGdCHLg2iD1XRox5fJGbx3BM62ff8Wtiw8iqLw4vHuFWn4Acnr2QRH72e9WXTXjZJtrLbDgW",
  "key17": "Hz2tXYwF17cn4jBR2KNDYvCZ5nKzSpoRxVAJZjF6cnHKB6YfmFRvBUbKSCAwg7nGet4cQHdZ8tzzUHNF5222Zhx",
  "key18": "1UvkbgvoT3zpouFhhQDzJW6tFVM8n9dFmxJZnj83ax7Tov1itLSu1tPwmSxaS4EGyDZuYmwWCVAVthra3rTxpLU",
  "key19": "4aBNRN4AmVjsGkCE2cUfrKjcQjHa2t49iEapDktf1BtUJ3k23d1GoHuJe83b1ZjKBmgvk8CPcgdodcgZ76STwq1p",
  "key20": "3Cfc4C2ri1f5oJkcS5EYc3dB4TMnEpjKQDeK1MqHdkoy7LEMSpouLuQN2XV65LVyWmifUvM3ya7J4ankMFA5ay7y",
  "key21": "WKMcFJGCqqB6xp3aqDdNbW7wSKqnBEBbXuikEdjt6AG6bJrn2AXoapSBDG1KTXgwvndR2pDhTdNeWSRZBCqVegy",
  "key22": "3V5ZKrQzPtWTEB64BtAx8ppbkgvYLzE3kV4bJeSPduoPhaHf4HKXH8F9UVEhxSX8SDvJra2n3WxdMN86pE3QAoux",
  "key23": "2iFGAiEu2UbWFPfW3p1C62qt9NjpPXpcBYCzT2KcjjLVWCtQkCpkU2SMkuJ83ZsRWpn35rV22cghMdVXcbk2MoUt",
  "key24": "44HfGJqTQDpx8SzLRHmY9Bjvr6aumqXyGQTL99begTXoi125B71McNcd2xZm7AhH8XHNUY36gLmHHBgXdBnGqj9f",
  "key25": "4UU3mPupW2RySpJ5xPhn9zDjZffmA9FFgcwR8ggb2UHzwHqxF1r6gwQog4HTyQpHHuwyLWyrPh56Twh9GeB2mD7D",
  "key26": "4MFaECHiNz3WbBJrmGjFedBStF5dXzEKnPTLDNjkJBnUFCzmDTfU7VbVbFx5xYx3tny6W8q1ULoyDKSsnvNRExZX",
  "key27": "2BNki9MEpwRurYVDnEFmPebS13F2mSjsD4g7yYWWaWFGjjJzkj895LtqeYBKy5LyjtptWTUyDSvbmZsW7sYZ7HZf",
  "key28": "55LRXor14LNPxoNpTo8u6ymnf1Y5ydbP2qrWHPKjzayYFAfB3BLetNvU8wkCe7K16i3oCzQ1cbcKCynMssFaFkyW",
  "key29": "4DBgDrWfVSjDBxC7pYBgdpx7G75yAgSR9SkndfVtSFrWgSMWsBfN1FLvosRqBtQDwhvtAibQKUYnkwqDcV8NCreU",
  "key30": "4CZjPHGjkdNeU3VtEQzfRf6k31G7E5EqMwACSS2a3YgV9EMH2Vv7u2Mg3DA3221xK2bZayuLnWdXrVvL3rw8X4qy",
  "key31": "4xJ4DfmtMnx2XixZcNWAucv7LP63ayoGCpnj67iUs4MUgYUAq5CTM44LvcdZ8N9H2KFw9dqWsjc998pLwcQYiY1W"
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
