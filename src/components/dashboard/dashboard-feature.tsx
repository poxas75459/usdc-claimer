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
    "2hAN7mBJPF9GDix1Y3pJ2A64v42dWhKdX8QVQWxUFaPpKT8ZsuLt7YWtJWSe9bxHKks5BjeVobsmfqDckFi6nyse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iqSXypbng3rF1jEU5oJSqovaZcG2FKcCUbFHzzThe7CC15XemBxo3PUTjC3en5e5fh4jjQHYtFHGixp96KUQwz1",
  "key1": "3bxQfBERerVp5qKWTuAy8GnSnV6HboWQoQNwXZQT743r94r8jaDsKwoAPYjboi4izsGFvicS1HC9aVF9gzMUFvcV",
  "key2": "2FJd5dainLKmKzu7knFZyFfEPd9ptER2e4nDJFyQRdNktDDA2TMks2qvjLsnxckBXyG2L8ALdstWyxie78jxFei1",
  "key3": "2dvoQLjfNJjS76yrrqVEF3jcex1fZtSj8vJqRN8E363kj3FrwXJmmSKuYwzwXv3RkwwRQcmEYNk5zYuj6iFLULZD",
  "key4": "5Sy6QYTnkSLhpS1Qr25BEk4nAGneQoV9BdQJfS4uXqaE9HGtrJR8y22kKb6Ppe8K2Ftdd1H15YdNvoSJHY6xvkbb",
  "key5": "28mEdNSExi71dQo3QQJNtiSpGNg1CZvxDH4BWmS6dAWDLeUvASygygahtftdxBBa1znM8wTWXHFzXhshE1AoMtth",
  "key6": "2YQ4gazNi1TQs2fkwCKxM9ecytgiv7ukzSDgCHXPeKm7DXaozxiHsYZkjZGoKUZMAPFCBnsr8G9JVY5i44LtCMmx",
  "key7": "3mGhejAnxVnbGpKzJV19GKsFCfp1kF8PqnBcbeoRYe6ZsM3q97bYz1NnNZyogc5HK7HreFAXKoJtDQ3dQmSviqrd",
  "key8": "nU8PeSnamQT8wJtR1GUgwdWXHAZPttkkXYHpASE2TBc1Ed66BeMXvkZFdWhiCk7UDh7KEXRLD9wuakzC1wtbp5q",
  "key9": "51Ctck5H58usgsPGajk8TDS6p6MmGc2HeLFuv54riPLosefjL3XnnkdFmVTjZ4CC2Sk9k4hDRt2XSo7RvU8v31qa",
  "key10": "4pCVNA2CuKv2Ca1njEYD1ZM3vKJmfPVcqiV4LmryZDvWHHRGicqAYk3iNTucKD3HP8TtuENocyKCp2bmTbKtm362",
  "key11": "4Y7EbXGDyqhZ2qaAKqDYojFJnrBJWf1Vc8wynUe894xzTQF1ntkqn3yfaDmStwHZL8kdMgsZZ2tftUPQpmoFRopy",
  "key12": "5f7hyjfoBaGK4yMxTexcrGPZFA97B14ZiDbp8J6MQuz7CidHSmQbHyujWmvsCondNGstudxx9eGJ6Wvi9aZuyq49",
  "key13": "3Rd7dPzmHY6cHrBmKrzxPheJ8X3sECpWuGhwfb91UdQSp1HeRCvrsFLYYdpVEizdiCp41MSscxzi1mtP4G9MMgLT",
  "key14": "21FrpkwXTDLqnyjzEckXPUoaSrTkupA87Tayzy1DQT75PC6aBW7FZq6iyVooDCHmg7FxffzfkVbYpye77azYNvEC",
  "key15": "BiYnLoSNrrn27kgbvEvpiC23kTDkHRWtwdrcCetDqM3YcWLT9k1MjwuornuEksiDm1c84mLHtTYVSaxUZqHmEoi",
  "key16": "5TH8RdZywDzLZGLR8vzNTymg8ZEVJV4KzzWiLJsiTPwJ7Us6wwrT1fyiH6zZZ2hfpBaR8kYxSBt2vMEfbzWFhVoS",
  "key17": "LYabvDUg3duC5FA2PmkoXWroZMoWKV4wA9AaAjTCD5Hx97iiECvXwf1j6D6quBbUbdYDrnrfRaW42HKe441nXqn",
  "key18": "5KbBW81zYVSxpcyeTRWLowxuU2BP3U6yTFYp87uXohJEdr9oFAg2UTpzt1kmBKeqS2V1a1zQF47i3EVRc6ZP9zhA",
  "key19": "Ds7JTtpkoQEoqxybd1hr75w4tnmg74xV8fCWnLwGn7BrQNTsvpv2RXWxL174h2jvJTPXQsdzqh5G9NYjqUrhJER",
  "key20": "3nm3SzMCnzHJxk24fy1Xr5WgmnauWfNvtEoJPv8t2qDYEXLL3Se9qcZnRZDmw2oJwZpj6fxL3PYmWJMXYBNYnmLH",
  "key21": "2pXRgU25uCi4Jzf5CYPGpB9okJcrPhShJqCUtz8jMW6hoZynT5As8sdVaQkxU7CoFu5wnzDVbCDe5qDSyektjKjS",
  "key22": "2UD7KDWSuweUCRBN86eYB2DQmEQiLMMCWYu3pfRxMMdepTFGe86yRiwE4knQk7yvYACRxCmDYZxhQUXdnJZKFmDC",
  "key23": "5uwUNBTzTqcprXASbHQZMaznFb7JAdkfgJLkYBtiaZ1yWWoSEEbTbhbjyfCj9mLdaT81JJYhu8CwFy43cuWeKLhJ",
  "key24": "32B7cxVufCJ2MGb8btPRJFK2gKP6QoaCd3XmRTCHmTpcq4GzArmyeh7nmLsj7YRmpZAFy4W64ag8AGhJuihVdmiw",
  "key25": "fSaGr3BAikSMFU69AE1A9Dq8ginkoQGMhB1zaCJna45mvo52nsZidFJ55Ti3r9K9Fc2P6VzEUBWyX1N3ioZFa9r",
  "key26": "xDFPnAFdr7aYtG3EgS5UU47Mb2Lq71rL2mpqGs6d4nuxYPU7fszY3mvY1NuniR1oKxHqrMwXycZuR61quZvqq9h",
  "key27": "rVrydjY2PgsKCsvaAAVuDou9nnwLzCsff9gk7iqoM3CfNJqW5ACsDouGLCMNN2thYd9Q8KjQJgxhFc2RBvAuQN1",
  "key28": "4pLBY4bq4fdGNFLKdjZzXkevdYUp3Rw3wUsYzdP8NsuNyKxw1H3JFUjhCB6Y2iDQdbshGFQdtaH1QT5CobUyUM9b",
  "key29": "ucCbu6afYEs1mJhHLm6G2gcKEZu2qfC4w1zWTumkA1dZJ9VrhieQ8QLS2V3K1MqFFFf17XyVhHQbDipBQeLuUvD",
  "key30": "3pyQuKwdTmvP6YEa3fUegMbP1Uc9xmzmAk3RBGWjqmDeFyyNPjbakc6tjHqFVd6c7PL5sH4bMVpVdPTFsdL6RAyu",
  "key31": "5zTU2aQggNhPfrBBnUM8LXEfmhR6rZUMPLv5KRBtw1fL1x3wY1mAQmdifKSMjAbiSia149BALPcDgAcBnvR8qjvS",
  "key32": "tNXQyRJ3CGMMCDe5Y7v6xuXcRX1WFbN8mskwv51dJytqm3h1GVUciwGLmtzMznTxG8XpwyMmKshK6bHqaoJtt4P",
  "key33": "zKwbH7gkgqMv2a2n2oKjbf6ri9kgbnzFK1EkRHA9GyHYFXGhQBZY1YATnjP3AhGxNdPfm4SgZ5bwtGzFZMLnsLa",
  "key34": "U5H9AtbgqhNDvocnp5eYnrD4sEGryE2Bp23ctv3NLju9ZUWmyFHs7C4WuaGe6N99ZmJofwxtkx79sSbM9UQz4Kx",
  "key35": "4FCfne6kz2XdR5xacyhW3EQvDtzTitVQ8YAAcpnCuVVzo4LQeg2QDEgpWTkyp4qy7279oHACUNEuPowxHNRvP9Xj",
  "key36": "4wQJZ6C1iayCmQ9Wnr3e2TeXYxFiYeBsfHrZZaMR5a7zHp4UxLJyjcnYa6bETpx6XFWLm9yRmvAAt8JYJmr8socn"
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
