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
    "3GRs8yTCkTKj6T6GcnNJUuuFHDxXsjDPTkSxQGVptxwFZBwWRxQ1i1pkDZ1JXcDJUK6pf74x2kRUQfg5R18FsZNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H8LhSdZ6hy1cimqbwVQKdGtcK8Bz1d7rddJpGZHCuWowbRbsDAxGYTg9hxn4pbsQYp79j4a86QY4Zm72kfdZmVb",
  "key1": "3To4D9WVtJ9Rq1LhzjDS2XUE2jktXE38nwDtioWxHSGq5idEJsCovBUHnziUEHH6Jy6AzaQ2KBWt3qsysHSP8Wtq",
  "key2": "3BuTqqbse3UxNfABWLcVRXEDprvVVfyMgrWkMBwkiy1iAWgCvCZyaa8sNZj9TGAmGB75SaUN9N61w5mL9C2MgQyi",
  "key3": "5DGCGN2HbUdFWHfKb3yw4gwujMLiq9yLKPtY9SHWnGoFY45njp2u4apM8kARkk4aQdTBE5fQCD2JfiSAar52XBjX",
  "key4": "54LZJnADkz1f1abSnTae81MmH79CuXYk1rfuFKDxLnQbE7r79vZ7wNVXvaYPdxaL9mrQhj6U9r1cfWW9tVG6Y5c8",
  "key5": "YikpLxh2ESqvJwvVuomjyDFjEGLpgWsM5GBcSm8A8CXVUnSvaxHeXGiuMSn85E7Z5dUheLWRhZ4tZb8xSGCRsyU",
  "key6": "3n82DKSaSu8YrA5RYL1hY3t7vKuXJD7GC5Da5swKr7yk8mi9KdEqG49NF6fkfNmHJQYdVra9Aoankyt5KmFH1mBD",
  "key7": "4uLDC5qW6mz5Hrk3ksBE9QEemovKhHCfWUaJXDLb9SShAUJfZHMKrcHs6Z9fLHhGseXszZMnfbmpR8sVnFNrpzg",
  "key8": "4EzMYhkip3pqiSr1LUY645JV58rFNVnE6MUPjdW5dpr8sbHjFuG3wEoHTE89xv99rZ3c4TLZ6SQyMh8wx4tqMtMS",
  "key9": "3ayCbNsUwWyuyYSe1gMmrXkApGJFCSRDaWDNjMSdtkAhezaemYj16ZJmZFg7jwDp7FeNVPKxPtFcQRqRcw5fYx7D",
  "key10": "2ugs85853ZVZFws4YYtyFR9NHhHdDEFsDsxXnmVbjkNTZdNqNmPgkdK5NtSWKiSBbbLjn9XS7zajJS4wdAkWGySB",
  "key11": "5nKfTTU1M4PfXyKeafa2Mj7DZhLLjCSv5ySxRULmckVdobd2ht8yxFkHEjiZpsEAuWbrDxV1kaJhuzQ3ZSJikvxi",
  "key12": "246zDduCbFUcdsNroy612uKjCMPYfGUSBGoXyTfKYzmXwXEZMBe3tHRdLBzAfHGLiuQECwtXbrdMrJABwgqZGwUU",
  "key13": "nLrgNUf8PWnJFkn3zAQjU9ci632f7VvyQgaTGP9QYUX9DQDWfcJnGhn4YmCVePTPjCUbpJpyr4Zi6oZqrRVFB3X",
  "key14": "4hofryVRLuZTduGHQF3UPh2QRmNzFoLXPbndg9H1LGfzdo8j6aFy7jYrtVb9wdgKU4bGiJGAE1Hm8jkEzhZGD195",
  "key15": "XZkzZ7r3iDtezYnhcoxBD69jAHToAHos2xURubeWFC4J5vG88xy4RrVtoMNrZkd1yQX9ofjsjbRwkv9kRS2rJoQ",
  "key16": "hqGKJmFxXEmV2FVd3qYidULT6qR8oiWNEfoBVp98qAfY2RmSb6CojxwfzjUwi1dhNWwkNrgKAUDha2kcvk3qNwL",
  "key17": "5bE52GFPD66FwAkiqXwaGyYLaYyveMYTTTfv4Hq8Bn9J1jbG6kuaF8AKuGQopnp5RXY1F16EhL1SREiF9j9bJo2r",
  "key18": "3A6oQ8jvn3PVEbGDjyKVfigNTiuJsj2YyXSQwSZaA1Xv9PBwNxXhchkm5BMHSz4bQKw31oVVjCgaiFBV2yHX2uvi",
  "key19": "2A1R8YiSHv71haUreVtMMgGU9CBAjDt1qa5zLHkN9Fpf3MRDh5dKx4EPRY9FBZs2YAE8w9xUAEBacys1PxKCrZNY",
  "key20": "ZHipTmhTWKWPXGgFSgb2gYCA9KDKvuGT7zZV49D9F7482vmRHudzKTFdkLvvK99oT1nQoFym5tY1j6AvBBUovbm",
  "key21": "2tYGdKSav6WZBJpD1Dk9b16no7iLRCYWDXTzxfAJnKmbHtMfUp9agHKyV4q8z7PMy7zJGWvTvKCUTbqvMyF6aodx",
  "key22": "2rizYH8c2zbvWykVLD6Us3gWGwRH9FVT521U6ntkanRr9fePNEfJC7B6NZ7JsuECrHcMWqvF9eGoAWTAL9vZvWdg",
  "key23": "5z53GqfaGmfAoy2T4BCAT7btot9Bv1yLxGHrBKBrHAx3Cgo1Bgoorcf7U6ozJxQz3rtwxPtk1WXMQCZ5K711tFSJ",
  "key24": "4ML56UnesKsdMdGTaqUB4gDK97HihXtH5kvh2BcVdsufwxoU6oy4aS8BULouftQnPgZB8m2JeFSjYRJbT64tZiJ",
  "key25": "fHsSvHP11nvz2rQk4GBX48H1PUm2eRwnPe7EKcr5d4n86rtPrQ71fxY19nrUaWfEFSQAPhgzLiC1UWZ5N4KoFAE",
  "key26": "4GNrgmoTQoTFcfzrFWxXHCPkZJ9Q9QLcWaav6Pbono8FfmuDtdHsL67v89fDVeMMayXjCvALGuyqBT134oLQVPib",
  "key27": "d6JHW5wyTtzKZDejKQ2kN4TySMApRXAA8MBL7vpyVSVsk8XR6FnDRjavEcM1JQ9EkJ1jaTX1Em6dkr43GESnHFs",
  "key28": "5Rq7z7B91eo1phWUoyzqwK5t2CAn2Xy35f9pTZVdDDeFSvVRfHFkXWLwabjWywaVmTaWJ3jWhi9vtpuBA1eqRMt",
  "key29": "27L8Jh5H2AHAfAYkVAuvhziYTVNEZ6FbpRQPyA4YuTvJZTpNQwuw3sZPEeaSTamXQeCSjhxWkYJkwdLjruqzV9TM",
  "key30": "53DnW342n4b965D4C42VmhpdfXKWaT6rGUuVbPAfmejAqwZsYQ9Tg62uSqSjsUSdfjBJk3B2meQCidMjJWD4vUGh",
  "key31": "5mddesXP6PUFEUQ5A6ax3T2R67JCtuXSTmvVp2oR9XKASpCjvRSwcoydycSHhd3m3h6wkgkFEBVFkpjsvk9JcryZ",
  "key32": "4NFqgbcnvTXFPAUv3cyiucDx9m7RJjiYN4oc3RYU1MXAsgExc5sPV9Ucy7pCdZAbkwhuQvjPVwUZPFxDj6iC2Ezc",
  "key33": "dpRmKSwFwnWhCZQuv9PR26aL91Rii6rggXGu7UgvZEYi7YsPtAuFGDanu2H3UyTEYD5KiR49k69dhRTG1f9L2TY",
  "key34": "3AHCXYP8XDYcFtu1UvENMTG45VyB6wU8UkyouQnjfunwze4iot64VBpPhTJkJXSGtbvwjqPMK25HsdQjLYVHLzd9",
  "key35": "5ntwxGhaySXGXH946gH5hRT2FJpGng9R7JjGmS6SYmTkPhrFnkSiugXe5m55fno5UA78TyFj8CRCe3vWf8GpxN8n",
  "key36": "252sGiN1b8igaptkxjT6Zg2p8BEftCZmJEAq4vQruGRAoB68i83pda9wx3hbaZNgVHShBCgWbQ6Yye1ysHfaHM6z",
  "key37": "3Q9LyBZq4W7HSzW42ZXf1WtNfcMPbiXMcyzbQVxaK48yJu2TYgXebtK1n7VhM3ug5UANwGgaoKeKUMRzr66fexE9",
  "key38": "m9Q9rwsRBPki8oWssVFYxPnxwnpu5Urm1ZprhmzAg6MPBDkzHvroYEbETwm3Y7ehL6AdUNLkfryGTSNvZUMH5og",
  "key39": "5JbaZfdQqbuSDATwWfy2kLTpNpWjoqyEof2m6Sh2LajgCEgzVNwsSCvJ3W58yQrjthaiQ4WKTnZjTdBpRFG8Aag7",
  "key40": "5x12zjzhCTz1aYjSSdYEp9HJTyq8AdnEtd2rRuZpRefDiU5xWMC1kxtZWZNBtAKouBurgDZsnhQBtzK8ty1LDRPn",
  "key41": "QGfUVXBZ7xUHXHVtEK25Gge5vFdvrYGLiTRfXAjzrShURE9RguLpS6ewfxQHc3yLDBBVdfJbFgVjifBSAvM6RGc",
  "key42": "3tWCVQfiPhSnCAE5mSCb2PYVzJbwAJLv2Cyk18HVEiwecgbji2xWXmSGap7i1oRaxvgzJhLFkt7yuyBGR1qqBetT",
  "key43": "qfwgFMmioAhv5b3Ht1fhefPimbgLSUUhv9NdEwnQ45Ao8CHYRf4FH6nAiwt4Y5oCDdhahVPyN3Ry5VRmecuoMeg",
  "key44": "2pdgjZwR9Mq8L6NQh3EqJRsUJAzU95jN5irSRdEobbRsankNdaX4NG5oUM2cduFF7NSH5uKwukRAv1jwdMhEJxGp",
  "key45": "Uh2LysVFTLWtqvxB9AFrnTS7QVYZEJgnnN1QEZaQFAnSXDkccYiLCQgC5r9q9jULRLyYCWw5RpqEhNNoANMxMKY",
  "key46": "39ZoRgBiLDrboLL3p7RLie3VWCdEZWzL24HphqCdh8H3X7VGy8pXn3Kr8nyDnTLEHUnY4oMoD9rNorspD7N2X68n",
  "key47": "5Rvse8nNdaBqXK5q1DHT3x1GvNK1nT2PcMBqtJU8AV8V2RWwaN9N6gZphxQmPzHzXm1VVKM1eSJBKAp8oWowXzxp"
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
