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
    "49fHCce3derXGAkNUA2F87XHPSc9SKipkyGmdiQhJmKHfZ4ujERY2qJ96V4KnXdu8BZefGp3jHsmPBzpTfbNGA6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vC3pVtnvfi3LsGdtQbKcuGkZx1UkJEEgrFBM5XRhSopTgoB5FBCPwQQHh6aGQzCjaJMurBKWWL8oWNXuTDepBA2",
  "key1": "3sabcuA6CZexQs64Z2PzEszKfZM2KhDRJVcVf7QLZPwuBBDnhXLZ7XFi7ZeST9R3t813vDpkFf1TcMVhhBNW6WkS",
  "key2": "2j99vMwSfzk6fg1sZyLfduyRvFhz4pWz8r7Qcgm3oUhp5p6fqwT7LEes7fvdeSfC7AAHMe35TQonc77aJgw91C3K",
  "key3": "1ZYayM1CACvDSxKSW4HDnbVrEN2iiMxysqjSu8J5RL6scNYhn8NvSBiRbABmc9vGrpgJvwaGWDsK3Zc1LNUZ16H",
  "key4": "4VaHVjmyAGRB6pWak3H9KdhhY5hB3TugXi6nkmrnMZrRgMBDFwckm7TV2tTRcWB7NJDZ8AAmmLfu7YumXHi5hwYS",
  "key5": "3Pe9WYGnwt7tSctQH51YSZfACf4SvLqYkgQxc2eM6R9PQfsEB2uYz1EQtF1Z1vCSyEbmhZAme35MsZpaLb6UH5Zj",
  "key6": "4UwA2Bheahhy3XqPSGqzqBxmdGBUGq96e5MYR1ytPSYSeqEukQQK74tadadVXBPu8JFvLRhfJaHkVt8Hmt1cfa6V",
  "key7": "4RYT2h8TsckUKMwYBvxTRxhi1irUXwvGjGwkDj6AgBRjK4bXGH6RsopeEKUWy1qWdLbAH1H11DYM2vYzE9eEecXN",
  "key8": "MB1R6aFqxsXh6vr3swE4m6u1AgKUQHH86MCBK8NCz3sFbw3fLoeR7cz7JxZdC6TDWx7Ham9u4m1RMMJYJ4zVM5n",
  "key9": "32i6zvGnezydL2MhztwpRG4oYZz6DNuZmU675jRGJdxMExNFJ8Axjn9B857JhHiUWnq1dzkvbmKo3YdeTx1x4ckE",
  "key10": "3aPFPZv2czSrFgzDr4E3HxfxCsWoofxyFUQz6Y8AVknfE9C1wXu2fYpstkSDGMba46HnuWv75aVRFeJm1mKhAcG",
  "key11": "uqa3F5Bx3MCNQs5859BQL7W6CZHDr8DhZ4g7vkGLatYJBrnj7S2u24rXa2kh9J5iLa8cX6tGhgkXRG8M5hwiafy",
  "key12": "2K4u9mFZ1aQxzBWAx9u3k36MEVSpL575RHVPq7cLbTRixkW3LVWuJoJe1gmu4Kzec3jZprFy8Yp3m9QkVCXAGmWV",
  "key13": "2cQ6FsE9ZP7AAi48eiQCVaTyN1TgfuLN41yERLbb6q7M3JiwbGHPszvpMu96QLJLSNz8yegRqeRp2RgspuUhMq5D",
  "key14": "5AkDwMmrP7DQ7RU8V9DCsJafRAijURnQoiPNqVCAv46CYxZyen5FPRTnd4b2ui2xZ7ahtry2TYy2WpPvYofBpRGR",
  "key15": "4yqidN7cPTb2jp9m9UQUiwdPXX6628dvb6ZMnYLVtHnPGNS1qEDZKK9yhoCeLGm6sxTfAyXrdDe9ByJgLacpn1z",
  "key16": "3WPR7NgU1mUhu3CbPshGgzqjwjQmZsjGk1gS7We4BZCYKPkAAUjA9zSB3VQTEzE2toQm47vsNnrd5XHAsCBG3zxj",
  "key17": "bqQUUjhMRAEVeGuH3efV9zR67Y82e6EfNre8HYGAXngmRnyPUA6DeJViasLaGjGUUBXumKDz8hfgeiCGeokEfri",
  "key18": "4Aii86KAsVTLsudWqEezgi63HFayHKPoz7fWjpE4svA4mXz31wEUgw9wWoaPX8ZLcS6XDT4bzFhnn66ZzbNthqE1",
  "key19": "2S22vNJVhwNAXTNXdaZcZNdyDS1M2PmGWroxd7CXkEWxqCjeJq6WsnmoF9eQz6xbMc2qCyDgVob8ZEwhhUR6pfpn",
  "key20": "3nDGJLkEKtgCyQoxvnFCUy2K6FAhJCgepTrHDr15UPU9N6N4qHoWhbHyTK5Zx8oSqBWaD1ZRFBRaiGZtjph3ZoGz",
  "key21": "59uBamfYrYj9BaSwrL3HKtB7T5ZS8q4oQC53ucE8zh7xtdfKRKhNtTpKavgX5iK2oUvgQBfXkAf5sLMgLiAKu2vL",
  "key22": "546MvHJhyDWk8w9A8PdXSj912kfgWs71JeuaxGAGWZPmx63vwspeemCHmR8DGRAAZcNoEZMYM4y6zPqTQMDkwo8P",
  "key23": "26BacSZ1MKDGY4DtNyW9pKUwaPLVMWqEDzPSU6EZm6qqULPUu4KzqexLUEVnKAw54NwxELncRN2RpxbcMzWVfJMc",
  "key24": "4WiYbvMyBRPdKiSTZL8YLr7tyMnWxbAa3M3fCuX6vMQJDbnbW1zztxvoWmzuaFxoRJtj4BvqETVySGFdP71ktXQP",
  "key25": "3YwSnt61hh2PL9oT8YFZbU3NVE5cZouMzzbZ7yHi5EekGV3EpPasuocveUgif7qZ3E6qqGqQk7FK94Z7LHDykfM4",
  "key26": "29bJmMrVqDo1XFGCuzo9d3fAJHaQgaX1PyqvGtPePHiixxNGWqhXrZ96SiEhCKLakCd1DdhFyEjSExMwAPVkmiFh",
  "key27": "5ChuvGxamkkaaEZEWB1pXDo9QPjDNK66Sb8xoob2b6M5nv3QdYwYW43HqSamiv9yQmjn83254Y7LXpSAi4G2ckA5",
  "key28": "xKU2UA3knfTU3XthCt3U7g47QZaaNdo1Lei5HmisEuZxZvvujFLkWB9UQ8F5LnKXf2EmXy5WNc51ZBxkFS9DbQw"
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
