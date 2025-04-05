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
    "4LfdFkYqiLb6Zg3zeqdSQwYJKL4RkyRuBnD78dP3f1xvrE3E3FaLcA7gFvFdiNJhm7ovDnM6ha2angGWQGtJKBFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5efokG2FoMZsq8yynpbped1yNvNDihfwGwRzuRFdzSbvTKGu3KWzGh7E1KTZQ5JuVJxYXwComyeTSMrHhjfgkVuX",
  "key1": "W6jzaEScuKPNfiEtBt4FfXBCQQLefJpCTwpEPBPpv58usL7gnivyMz2QoAr5VM8yLz1fngj1YwuQgLvEwRyb6hw",
  "key2": "2dMysSsf1P2GJvvCt47wXYqVZdxfMvsnycr5T1uJ5RQkbgc5MdnQPd6Pgipgu3HUs15JVoo5ZEFpCywYvAnrtRZe",
  "key3": "3FH6aoMqq46Sci8R5wgnVvLDUEyK9aXs9xwuaoCc3kEk6HJqZ3oT4pc4wCuBps4W8h6j4PY6zvCebho6qDVwjfA4",
  "key4": "4GBYY1dg4MPKBDJvVJCZsEXxARJiGLuWDqjP9enoGKRa5SBGu6oF6yQEtHyBPd1s8cmBjFo6kkLhuL9AYeKv8kYb",
  "key5": "3GhbXcnunRyG5WTNhPhxtbxg2mNUwjd7LDHQyeG2tiwWciRwvgwTECCkPGey9LDWxiUyW2dbkh6QPm7JGbwWnJPo",
  "key6": "4uiWtKBoLV5wcVSN1PewFh22B49zdLWQmLHcs5orkeeQ4EmQZ51De3ci2Csoe7BNrgajRnnyyCTNQnvvQ522Pd4c",
  "key7": "4oxmT33kdbm9peWkUKYgL366mwP98Z47tPT3BzWXBTPekzoUYwWP4b8JTbXKptVgenf9akp7tWHyGNC5Vdht7JnV",
  "key8": "LaUfvLC8VW1ZY4jcAzGmNchSFZT5Y66Yamm6A4mZoe3F7hr9958LokChQ4FD1yVvdQPa2tXV81oQmQnETcT8sRz",
  "key9": "4ocWuBK2qvbh9X5uc6Bp3RtqfYNySA7zw5p1unHKupWjJEgMXgxpV2APX5VvyNXa2wAEq9wLZPxfjdRvbLVovpgx",
  "key10": "u3WQ44KmHg3wxojrCt54AZ3b5pMn4E14ParYrz1AndoMJH6dvSZCFHEiYwmURV9eUyM2g1ExADmdHNFc9VQpFWu",
  "key11": "2SVwnukhfRoB2M1x9XjWGcG85CXCGwbmPQNfMH8jLWANVxG3THYQZxxon1qMXLdzxPHkp4aeUdegrgzvBD4Gc8y7",
  "key12": "3mLBNCgGnyQU466X8Wk6YtumQHchHTQGNt9MVVASVzwNBWqkSWJzxZ7gPFrZikQAscmAvhZsaKm7rgLcfaFWvqbN",
  "key13": "5krVRsik31maEuicfCuPoWXqCGar5ADuk8DXhLhQgAScPiyrE1XgsprBnUXMm6kqg6Np3UcYbSBoxYrQdnihBbSo",
  "key14": "HjyEd1aWmHogpQE7kVKMxGwbEfDdAUMarBLmvQC18nsGG6i5uVmPaQYt9qtfHW2e3fPTGfAmraLPepA1bRj8uuh",
  "key15": "2YqijHSmFCxXs797BnPn3iVArpbpBSn3nkfoJjaycpmqcSVSGavkXFyhDw6ks2v5qSDopHDQRx9SuwAEhLdHL1uK",
  "key16": "3SnYAbJmVZ4Dy6yKm7P7gCjriJvGRfAkMo1ctsqVdmWzZh1Mhqu3VaZsEB98RufjLH2FMkTY94e5XaMXHHHJ3WHp",
  "key17": "2LuaFBBvsXrECs9PxkBUMMJiRkKfYVxD62K58n9xNak7THFxySVGLd6pDQVR6S6xhFZ5WhxcTJYHTT4t3AC4P3AT",
  "key18": "5DdeTnfXdrbpUdfjphMewcaCneo8k1cHmmNVtsksXgkXwPNDVaEDZ2UoTALWvnuKWDHnfxLceSjHWT1MWpwCNHub",
  "key19": "kH7JaHW9F1zWx1uK9tzPpE29gbCy5C3MvUNeNNVo16VMbhr5ArZ944xVSckfBNj28KKEHFCjQT7aiJHGQGscQQZ",
  "key20": "5y15RmLcH5dM4zzcukM7zLEsWSFjfQrvbj7yuzTcCrtHLFBMuds5CzWWJ5nuac6F4f3bf96tL2bpEr3eSKUyPQPc",
  "key21": "5cQftJoLYxqLf1R2d4XoGMqUXDznnNPwBC8gZTRejzpWBAhRfnLidgErw4CHSLPkH8cDtJX1RviGbh9rFtsp3nbC",
  "key22": "38Vg7P3mNh7rMzfr88ooHLQhWGUcpjDHZtHGHqczTQF4P9uJG9brtEr3hmGxx85J1HH5wqohfGyirweYjhLxtDHQ",
  "key23": "fzmPP2hbxQHVdwQ1LcUypPLwFoePd5QDnNc2PmFvWtcpAVVc3SXx6PgjE8nDvLNGTVYnXg8v8jKfGTrMb4fF9Gh",
  "key24": "KNTxTLmZDDc328XGXM31spGgqB8BKxNTin1GRFk9n6aGg92NEA9KATVy9G9vtxDYHqB1VHEc8EAvoRFX7sb8KzV",
  "key25": "2gYzZexfRCXfTohzoh4eWs6XMm3nqezn6eDopNbST3ouTqCRGRMJNwDmZ9RE9ZuAXsuRRdFshrY29rMbV8nc1Hs6",
  "key26": "2JcqbFZpY4JHcNz9qq6s2WBiYW8C9ryArBCSnViedYJXLZNzdDgcvHBSj6z2z4TQQHM5UfKUDPydZWJvyKfDu5JL",
  "key27": "3f5bP33Ldh1YvuRd4V8F7DXpeRS9CKvJniCEgKLqHEj9pnp2gRs6hCCStKpoivDUyuzZxKDpfgsrqrVPz3dTPGgR",
  "key28": "3bGyyR8EmVVtUECT2DcXQ9kD7ypi8BmB4vowiKQUAr1WuQG3tShLRK3nSYBgfrqVwpng2VTQtkaM3PEcv892TREX",
  "key29": "5ckoVnRS5r6imCfV9ofpNe9q2NRawq79NnLVzsKQGTs1oPWGGVqJAsagj7FJ8sChhQHZu9yChS3gGN3fWBJFRwKS",
  "key30": "32CsLhBLPve8sLnXrp9CX3xZPRkXypes7F73oWqVqPJeYxvpLudttMLBeSNbtzhoGuuhszL7bXNaJssLtBkdh7te"
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
