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
    "258jwcqpbK1pz9FoiU2JGV6oqJMJYBXJBMd3tghtbTSPzWxx8eDFVigSNRKdtx44ARjUJQXTD4TJEs9cWLT1oz3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Csz4nSczLUeLKxxUWYTnTKvmFhus8fxS3bG2LgCSRRdYuxiGH8ZbFfe1QKhFe4WwzHoC5g1dLC5UqLSvB9AqA4x",
  "key1": "hALJ3WKCh6xyMMGLTDF6QcpngUdDNjzod169eAyNJK3LJtGdednXeynWKMAZ4JnXNvRKZ7CittLbm9xe5h5UCZi",
  "key2": "28mBKZxd6zJ74q5mCPmnCnYYKYQ76JNA8MrpXRua7znVGQVWxCUviZbcG26pWJEis9Myx2rgwpzzkkgvUbEt8ezm",
  "key3": "3zHr6PbXwWGCJj9HohheFioBAt1Hk8DmRGihaRU9cCzYeJSCcZHXJfydXXfxtkhjytDsNdqbDtqCnveLDWYBNFns",
  "key4": "4Sof91jteDB4mXrnZmuyjtWKYy8Xns2vHpjbEG12YGP9sANYBh24tgmfcKG4pLYCUvJzGbsi5xGqXrvsdLPChkP7",
  "key5": "5AHvHn8Nnhwf41bZ2wNLuPEb8TxUujwqBc7RaAWd3kwFVk7KSXFpdZiimekzAg6kxk1h4dLocNJygAGUNfJoz3ur",
  "key6": "2hxv3XcYamrAd8tx7LtkDksyTt1crB7JJrEiuBpJtfsJcaYTBWvHyjTEoDrrmmq4ZWgGhkZK5Z23NH2ZfnDGtTth",
  "key7": "2gfnZHSaVo9WsZpPcyo29QeTdFDzB2BdvkiTZpnQaeSePzDpevWhdaPWYHbmmQS1cZNjJqwCnrJryFxivK8o1cxo",
  "key8": "2ATJQegXUWEGbYPHuAE8xf7hq5JzyY7SFMtYk6FNCttkik3Xk8XiMy1cUmR7PxwD3p82c9kRxs2R7qDxbfsAJHyk",
  "key9": "3erqZ7sAxNTbMNPsLZf2Vnex1vHty8g3RoeUS5uZBJfuPwi3Xb2S8SR3BR8zHWmBwjQffQcLD1BBG66W5ACbgeBQ",
  "key10": "2agZLQmWm9NUKZhUBAJLcwpFJVR4K84Hyd2JajsiJ16PUUh68NzDUBCAm5bJRNWBnRZkB61zA1JmyPa5bWdV24rt",
  "key11": "5yyxKK3opuwcLimDrxpNKHaMBZNGgGzerpEpMorUy6WmcEJ229tWRberKttwsQK8kRfQXEXNeDUw8g94Qxbzyuux",
  "key12": "4xbs4AM4G77vpuHTaWV8HMg8RgY5gdDQ1LydEnYcdSsGH5Hstspk8Yk29vEmaMJQ4qWni3JmpmBTxWN6WciJykgy",
  "key13": "4X8wZ8r2soZHaBMR1912NUkJkxMMkisCR1wzR6XZcGEMNJN5VyZVwenk1rnNwDxHH8jAjh3E5rm7vUrigpsGQyMW",
  "key14": "4qS6ivszvuT5aGjPsntfrfREzNAR6kDQvj7AbfunDknJ2Maqf6Qg3qQSmwuXxBrCKdVKDM3SJsoPzMJvUDSRp3N7",
  "key15": "5mnADLJXbop1Hy4ZcJE1P6qs9351YnK8yKq1tiaJWdTdfVDY1F4vE9eCEa9Poz2D6mBvQEWP1utfvmC4tDgpp7h",
  "key16": "4vpUwBX65UK91XoL76FUgg7GRLRtqwFrhJaLTBJQpcixTULMdCyDemS83YoWkL1k3tqsxE8YktkWHWYDS9u46j6C",
  "key17": "4nYctpBCKsapHiZztNK5KW4XGe7cEQhYxhgSRNfuVxKDYvCUJWJAFghBFg9g1M1zZzw7X2cmzmz49hdmXz1f7usJ",
  "key18": "5VgaCbcqn9TxJVdQmG3KfHYbprHee52kyf449owpfViSQGrUEdTm7TgNzSU7firqMymMPnFi3r1YqakJLhcrKzNt",
  "key19": "z7tHyP67hfgDi9swts4cdjg2vAJMvCZkUrFS6A3W1Corkay75TVqcSrnXMXG5hDnTR46QsjTc5HZXgioCoDrSi6",
  "key20": "2YmE9mJLtiKsapF42SVo91sXi2AQBgWwGwS1riUQZuZ1uoenCKXisdAUcAWsL2jAo8NugcnwBwjLPZ9GxuyTJm8j",
  "key21": "5DMATmdPgt88JNrCy4C6xmo2ZJVw4W27FYYgtQLWd3jtSwjkqJFNMdDgT2sZg6hrtKYUu4CoDiD4dbwj2kHXxuid",
  "key22": "2yDZUZjmq1utRG5xwPe6ux1ZJvpVQf8pJDfNLRYZhU7CuHAX2swtfPpNJKgYCDrsnqkrC9yZKdpH1woDQLSYqceo",
  "key23": "4D9PQwAWVKpfqLDXts7aVNjfDq1RXJLPcfWtmNeyTb6RDxinveXUQb1e4hj16t7AQzRQu1s9iQCTERXedRumU5N",
  "key24": "3xd4Dkg1oncBVJ22o73Sbo3uqz1MF3wuqaXdDZVjwJDWStChbb8JQrf7QhWCMGFfu8SCXKYtVZXALrWiMh3NTFrr",
  "key25": "4bVMwqAe84C1b4JMi5dG7grxpWRDr32Y65NZn17eedyqAQQHskVuiCqFeCWb5vMCxLpbpGVjx4JCLNP8BkuviRw4",
  "key26": "4GvHCFmPDrSHRLUkbDNPm5V17FpV7rR6hM4rfVALMLqhJkGFyALiCqzozJ8ss5pbnfh6GifEQ5Y6TpC2RFR6ji5S",
  "key27": "4boH8BEK5HBnocANSFeUCxmsUZVWH5TtxcbqZ3Aq3quQYVLtfdhKpKSh8HD1ieLiuUjWyZBW7rjQ3G3Nyvtyygxi",
  "key28": "4F2MBa9G5kPsE4RzNFH89oeguoC3aY6JYd4sRud6NPU7TMskGTNGsyZ3ZWUf7F6jdnThnpcT632S2an3w7k4a9Lf",
  "key29": "41jzUx4Gf8NpDjPnRoEHe6iy4gBZWF4SXxnR8Sdyix6CXu7coez5WuvhiRWeaqfNhEwDQ4BAf7XV83XyDuxWXMvc",
  "key30": "idJnm4JspjodCd2C746i3c8FwMVr8KwGW4Cp9922UybxAv5AwHq8ghi9A6iDLi3cnbN1pMaZCfh3899ZuvfFiK6",
  "key31": "4N5gDqSVW9RRjTa8GhRefMYXGunPf1HoagefQ6n1Woj5m6vbUQBs5ESULfBbeBaKEKnEQhnfgZ29kmDmQf8KhAKn",
  "key32": "5ngRpmTEQRwSqVXwsNewE2pjUFogXoUZmCstmWkiZTL8cirATYxPukQfu83xuLi26VsBeszRgLCVy391DHGiVhnb",
  "key33": "HBs84rfMixworqFudZVxP1FXrTnN9nZvbzNzf9du2AtMYY8eTLALTBK6ap3rMg54GNDt6bouXHPp7KZRa1D8yGf",
  "key34": "4RpY3xoLdmRpNR9N5W1C8iy7JsiXnRDLgbj6w2QZqaxsmyggMK7GgkB3eKQunnGFTq8B8FmVmLrdP3pweGPGpCpz",
  "key35": "4rrJkdvVm3N9C1PCtF5F1G3Hjc714rexZUjFqf2xiNf6hVdjFTki6wpCWZYypX5oYtRf9qCUksEbtcHofJaZQWCW",
  "key36": "33YVRKAWMTWYFCCxminEPu4211SmBQjSXkzTN5LLXrDJmu5f71LFR3DKQxFrhWExth7ZK1RajpkVZxSoaEfk6A5J",
  "key37": "53yU1B1yD4NPoPSitMdiBinnWkNAUCWocFYdNw6JPAX9cKRT2smWbxA9shc4Q8p6D1hGGUVsBK7Gw3YSxg6aapN1"
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
