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
    "6EBkWKsEm5govNvfzEJKENRFYw8w6uCtZfwuGv3KpFU4kUxoYMxHNkqSRfPUfEZ28Yckr4FwMURoGz8h57SK5qy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4452XiCsj5WD2QHTsr8ATR3a3NKnfgNcsZqzimFWbyg2q4NmUi3DXRf7cK5CTzGZpPJ96CDqbHMgv1p2pBgit8xX",
  "key1": "QS8mqawHQQcngVFXuw2uxX8yRFnZLnFbhn3vPCGDbwkybWxqE5y3QmmVEJynCCkurxtJiWBia7Dwf1LSz5A4Mjp",
  "key2": "ydmhwL6qQv2Tx1bVqrtH7571T7hrNm5TDX4aBxwoLyGPuRca3s3sJScd63iMLP63Cxp4DP4bLbsgw4gmSAkNKqN",
  "key3": "5byms4redpZCx2MFDtK3V4xpPy2WpmjZPXs6H2Hsw8exa24NkM4YDPQibjo9TQ3zsHqsY4WTgGUdH1fJfCfd8aWE",
  "key4": "58oV4gXX89owLrnhsT1kkBJ11k1HAQkaUC5bTr2iZ5fAmuUCoKDgzLrwXtaqjW9k1NhjtEDt2gLnXGGoUdZF5aNT",
  "key5": "5Myjdwb7X1uutVGS4vnraTUeZScbWNApQGbMeqequgKMB2wgxMTw1WNpFxnKBrjER35fHzSKjxmsreRewKFtcUZs",
  "key6": "36GbbeayH4DbmyVmj61oeVLmmYeNvYZ4Ryb2Z5PKqHv6yZncmMX9bszZuZdnVakkBqhnNuf3JSefCmdheU2qZwMv",
  "key7": "2XFMUUVnC7KW1uFZGpcu35t5rC9grLRikNJ8tNWWGFABZ6kdT2uhyXWHbUZ8wtTpCbaDycvQPweLATguovCtAjx6",
  "key8": "5xGD9Zte2w1DgRjQoSUJAdWybN5HNiZNJiAAbh8wGeRWfx2JKKQg83EzAAbqoEQLqUGVN6WgSKx4HBrPePJ3Jgim",
  "key9": "2d5o5Pe9g7FmishWyc6Cp6JiaifgL9wAt95ghCLn76WFnsZ8KJowEykXATfs5opz2ungdR2nVAjTdYFmxRmmfup4",
  "key10": "TGYr9fWezNt7GhZk6TSZQ6HBxRT8p2hTGiSuToMBVoEGR49pMkVdrdm4USvVzax4tHMZvEQdjdd3H9KY6i873zM",
  "key11": "48VUSHYAMSQPZAJXtdarpLdSG4JZHNwYg18u5VcJuW8hS5vFLdnhkYbMvYvPGy14HwE7KfopqGDwedm3aUyFUrfz",
  "key12": "3NCUMaxwJ1SCd9AaYFvEPuejndUxBB58PtSjRLkFsNbZFGSz8sjKowPgPfoojqtQHWuUxR1hqF74pD4yE9iy8JvX",
  "key13": "zmTzsuorcV3WEN65LcC7AZNDwyYQZwePFXCYaQsnpi5aaDvg9NBHanTXw4yPKL4SjMU7J2BBJSo9y9zXnmSCaxk",
  "key14": "576eQh75qVVN1eswKRqSdTTa6cykoUKzhVn9bXqSFgny2dCVe4UCBNAi2WSembpuJqbut33QfXUq1SvPuKSnSB5q",
  "key15": "5TwrdvYrubgontY5hPZMKKw3sB61iPSvWAL4SsqwBvCwz5ANvWs52WGL1JpCVeZ7FS2JBe9qKzaBcEaQcCvkFK8H",
  "key16": "qqDWfqKXNbcjcV98hmqZ8oqYPKpk3agcpPmyRZ5iJr337xa3pGZRrcmxkxBVss8Lh24wKj85D2df8NfgVWX4hrN",
  "key17": "2ktiPFwZXRhFAYdJScN1ghGh5LpHipBwGyx3Ch9vm4Z3G1jabZK4GX8AiJtQFCK4ajBTpVTbEMqHevMgUCyZCKH9",
  "key18": "38ZaiJX3NNi7aPmS9DxdNBRbyCtJtkm6vAtab2WB2YtBXCr2jRNe56CU1ugMti19eZwYTm1Gdhsm2wZL8QJYvcxk",
  "key19": "4LbPCZVA8c6eRXdChaJQ5vZ7itkfkZEZcyD6Y5YZn8Pvt6tgLCzyTT7LNX8s1wxWGT1AJQNSu7FHQwTCYortB2BX",
  "key20": "5UTff7ijr8Brqvyr4VEaEZ3GVvpbV14426HNPesYhqikQPCHPTdCzBARGMiMSkEoYgaSbZxKrZykePXf9aVniYRn",
  "key21": "2KxbUeJnZ4xFWhgPpfzh5PEWhYq4RxyaDKTFv5TLwx3B5JJHH436HbSeyFHRnnmnjXrLx9RWuwJWi4opPiUdhw1C",
  "key22": "5XfEiU3G7ZFYk5uu8TqsG438fjFxMovjiUqKERpWME6aksiXjnZAqVfuGiGNafbL7S92h4i6AaPQfpSfNmqqSR2t",
  "key23": "3qChqmaJLzxSwE4VXvkFCChUsdJBoZkABphmF82T6v84cvnoCwqKZZiZgKhn6T4Qw5karSoEf3sEsec2TYNiSGps",
  "key24": "59CQHLuD85mNANKi4KgpESCD8ukkKTogHA4n7uq3RztQvEQpbEgCBmjGDCTSWX1Us1rdB4HmLNPJGtNdygkw699k",
  "key25": "2xYSdj97sD3n3NxYKsfNbr3erXShk8nZu1qD9ePzKxZywNsPjnpsQFNVnrnXYCP8s3HKWxCHboeesgZr8smaTpV7",
  "key26": "7jPokWbSojinadb5iCaBiK3tyVY7xNAEByz6vCsAUMxDQDHrtjQztmCp9NkJ1ZEGMFDjzJcpcjfJjxXj1FVdj2b",
  "key27": "25sbzewdZpocD98H5wuJHNG91Gq8NviTRUxfHfJ1HGzy4VkLSxRHxoNWmdj3LmwC6ap7thjUfFKmxkDtcK9rF5Xm",
  "key28": "uBeAgXuLq4cqciNHQA2scsTPGXEAi1q8uyLnsNd9v9XgFDXX6uFVUNqK8uPsHZcadSXCEQ7q4YakaeQwwJ3PMRk"
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
