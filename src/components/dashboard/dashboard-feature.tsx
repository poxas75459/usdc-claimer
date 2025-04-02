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
    "2rxqFmBaFw2DWBtJyKXJzaofJeSgLBQjvKEfzuTj2vU38d29w7fQMi6TTdYLN3Nnz2MJKsLhm8zWFbZCtPau7KmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d3m1JVSt512sTnWXUgT2vn81kpprnrS9qZVxB3BZPtnQE2azG7rdb5g2RefwhzDu997B55KDLmrYKdPUSmCcoXf",
  "key1": "2DXqbw34yLeQf3odoa6Jxdjn4T4VmxBtogcXRXnc5Khrmkr2dvuf8CL2ZKEZft7iwQa2jGqUFjHGHxV7JVLD3vhY",
  "key2": "87oj89zp7aPCm3dxb8Yfc72sFW1PoQ21gMSSnLAuRb5ywygfMwBUXxNBGcfYrgVNrumsfww5h7DebDZM6mn2jip",
  "key3": "PiwLQBMp5DMJ92qfkUmoAh5CCrTe2NdvDJyJBDRkAx1kssczF3zEt32HXwD4TRdSxpwXe3qTdUVDbdaP8nXdgKj",
  "key4": "knN8r3PxVND8N6Yu1qTvvhUMmRkBdsGXQvSZYigpQbN61GbKFDqdzNX5JCtxhnaJ1MkuRQJPzoRK5u2LnLC2Vmb",
  "key5": "2mLoVesACWNiZfx8ETez4PLKMMtDCvxVwM9druDDvk8yyjJS12X3Xp84aNFbRTahdoU2nhqNQ8yimdp7wU1DxtBm",
  "key6": "1kkR7GjxQ4SrfFi6EK79RRRfUMyWurH6Nmr82BBf4xzYAgNqp23pwFWxhMftgzJ3Z83A9vGFYGDkVAq6uFNr185",
  "key7": "2RW28c1EyrntWuAZPyMgn79sCCvWfw2Jqz7NRfQNuh3qaCmvzkscFrRvtZsKrh4yJWkfTbufKommLtXsTYmZroLH",
  "key8": "65tvmqhEuZpduRUYJdvwbE4cWTndEmRrkafuQqRmgHfdXSwSkbf5EdYHPszzP6hMsWTjvcRLBKM917h1zXHu5Xbx",
  "key9": "2buNiAomDB7xvg65bRfu8A7hQQStmqBdVargUTZNWwuWMT7rup7AygDzJZfSuVJzgwQpXAreTnrw4CEsXyqKpzE9",
  "key10": "3Tp9wuTaqvXp2yn5KAxt156HRhLvf3HhAyABkS4DmN6JxSGJ12UKD3VC87C8TRfKqD1rFBQ6pG3KsqCSbcneiCKR",
  "key11": "2U9hx6b5cnGugBS1uu5J2SLs2Stx6Xy5fHimi8oWRjQhdCBfHZt9CLxrU8xZYC8LF41jJQtSNeUVGZ1t8NQmJ3wv",
  "key12": "5fEB9GgB6VyFfbTc6Bb6sfiEpFpLgDeMNcwACUuE2mhPBePQx58bqKCbSCcXi7w3gJEQx86WYWhnrxyZgTeVvfgP",
  "key13": "61CubHmXtcA9aeXKtUtfogmgxbDqgkyGc6WvBZ3dHhhxevaFMhdEr3hfHsFX1bMJzGa6y1HM8RA6s6gfNzDJh3w2",
  "key14": "2YcFxpzUSSu4rzDvApnNHXqEgozE54XwHRSZrfmTC32dR3zsrXEDHYgYbvQp1zbbu33QtHVMiphXSUj5Vz9c8TWV",
  "key15": "2UvD79BVnWp69br7n4TsW4MFEqXs5XdZDxR1sE7fYuEYX6U7hsi7rvFCUL8J9CTKZCkZBYncmK4yzvGgTFyy2D8u",
  "key16": "GfavLz9n3WRbjfkjEj4VXVgK56WDiM9WMMd3aCQmYwdqnS8qmh4T49gvpgMnLvWRRdqhFdMkNZJYPQ4vXXNdN9m",
  "key17": "39Z49VNf91zfkvozDVhBh7deWKf8WHQZgKD7vTtV8UypcfVVkuRbcC3Ujmxnea63QPQoVuiBXEpDrmSvFLVbHqWy",
  "key18": "4AzieA53SPnbNns66yCRKGkEjKTyCtK4GUNbnAmADjkJ8BXpXVtR8mxf5SwvKAmvuwsvNsnJzhTG9xTrvTFsu2Q9",
  "key19": "EftRRNuBVbSWSa66iBSdJCfK7LFBkqRjKv2X3H5usQXwHo2h2ULy83TEaP4wG5rz42UBFuZscr92UkrBE9ZVX84",
  "key20": "4kUUd7ZNQb6HMGFg6W8D27ghe7m2TkWXRhBvEVvUUePPuwdHdTBwCLFfKTmHQsye4xiQXgvbXEHosb6WiobdTuio",
  "key21": "2pbu6fRYg7HkaCSFr3CTjera9vFdStERLKMohL8kDomwEWuachGGhqLQ69KJHmmaXtQvESnWdSntbnyfpbYQ8bxc",
  "key22": "5pNgb9HgpwEJfehPkZxEzrTtNCi1Vwdhst7qeh41utzQbCTVL3kBvrWt68mBYDV8FNgcxYNTn7uJVs3Wjzpfv6xe",
  "key23": "JrRthvhZa5SRxdc1ni42wG1bxf1ure5dczFiSAT84XXLbfArjoA2zgof1dAvVfRnu4TDe5cDGK33CuuDMFMbpZ9",
  "key24": "5n5tXzEpLaJ3jS8HciwutJMjvZGC3hKkbD7gXXk6r2bmrcTCc1iB4fD6r6A6dzLf5cwn3MbF9gC8yAqfycRNNEAo",
  "key25": "hAiEzjc9wzXaMazJU5it7dMtEiRZTig58muotMgqx7zCq3PgdU4phTM5oDNZgqoXmaLRLq687V2ahHfeK5SUoKA",
  "key26": "5KcQVjaQde2tW7zbZxMLHeR4bimgsXgmF4UYMkpC8KBtxrCCUhk1jKEH5QLcSN4a3d6DrRe2unAdQK8vWFXx44nM",
  "key27": "4KqWWScT8Mz5YcD2Yk133rCM7rRr8marYBamRoo7yL7VQK4TSmWrhM45HZgRjWB7ANAgNN8LjGK2BFW9CEsm7wC",
  "key28": "4vnCjn1vZ5JgymDwB5obhrpiT7aRWtvut1WZfNL9g2eFneib3im5zVAsAX2jNABcPfEu2nyTxEsK9soaSJwJYHAm",
  "key29": "4fAJR7abJGbHTbEcA5vmCXirQWRytNJW3i3oAtJPVh2ikXBVL9q1qyu2MTAt6nfyZAB5wgN7Agq7FrqSBZXt7XHJ",
  "key30": "312bFMSUcs4cfoNZRuHimZoJQnrvTWhhu1quYXboSFuEUGNnnoa9fXp4LL6XmXhtN6J6CsAJrRCUxnjGRkR2YiNw",
  "key31": "5YR5nt1pLHJh29aUcaTiTju9DeTsJ1eUEqPa82DmTdmDu455eHE3U94Jenipnx8L72pkBBPS5TEZbzzUvpq4Zj98",
  "key32": "2VnatyUk82KRjUAx7UcAhzHMXjA5Po3zfrh5jKiw9Nspsx4Twnmy3ME1T693VoGZM3MkBW7p2WBCJBHwj1rmJkBE",
  "key33": "485b7tHk7Pb3hXnbc64puxu7KccDsYpuzzgEZ9P8DMxLCVJr1uDa5SicDck2qfxu5e7bdY11YpftTfD6VfdDCVcY",
  "key34": "3d3uVMEYnnfe8gYA52s9BW297Q2NCByoW3Qe8acwXafRa74pjQtdK9CeXCaBv3syhwyVs54fmy3NEjz7AH71nGFT",
  "key35": "5qL7Stwcad2mtrGcbcHSi3b8n6QD5KKsZc6ikgdQrZVofbPWk7vdqaostfQ3oN68k2RWxcnQm7ksPHp3pEhpMZRd",
  "key36": "4wFRkGEco2McaVK5fh6of1ZVQxMRyawQj1Gcrn8RS6Ctt2vuVNHk3ZuuPgQpanyUFGBseAYfnax4Rb3QQdWunSmi",
  "key37": "3oUJ5axnAT9hY8rN1S6KHvHvUSXCTadqGxiTrn2KKUGdrAZfEaXJNYrZXcyAgvqG2Wmf2Bw4Ci3qVf7iPVh9EJKi",
  "key38": "3ixh5wbG1mjyRh6GwUvvZQMLZZgrfPkd9qqMoQd4rFyMJ3gw6wAtLoRhn8hLKzzU5FxiTjG2jwkjqKq1kDp7W3b4",
  "key39": "5Nu97NYwWDdTzqC7eBFFagBGbgUzT9HR66Z2G2AsPoCS32kBUjQRLLbuLFM5GuyQf3LLYApMH3vVt3qAeKgvZJe2"
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
