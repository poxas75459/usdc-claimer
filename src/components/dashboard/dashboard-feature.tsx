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
    "KTFwP2SBqtdyfeK8nc1rRbsEo9zuxLQA3JGTJ4wAfi8ADjhBLzPnzKV93Hfi8k28aKUqNResBw9S3DW29Xsp7Fy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pSwakDGvH9gqgmYaxBHtSgaBhEc5gbChQxLEHnBMufDUwcxip6eV5ZRCy53dFtsamykGJAj8YCQCrxQZpBQurzM",
  "key1": "3w6W7HEPWK2dKgZ9f9SeskJYsmwJbVpREJcXyHBNaSPG8f2aBJPiqLM5FWcV9NS1UA2JaoqUeMxBE6dHD1hfXrvu",
  "key2": "3ra7AXvDMj8mw8rB2hPCKDTwXE1tzSVXfjjzDsyGLe2Cg5bii1pT3YJ9PdAsMJg1JQsZkHLwcMcor3zoviCB6QWw",
  "key3": "5JkZh4jwHxPZedDBrqNzsupTmJcRoAPoGLSS4r3BBKk6BwYQJqcnzuCFF8Sf5W3ZFCXpqMYyQsccLCCc9fJrymFx",
  "key4": "3FkuduyLN5RRpF4ceV5DGBrVca6jLC7xBE5qkAteE9gFm31UV8Bt12JnEeiA5gKWiv2TVuhi2cVjHetJj9Z4f9ts",
  "key5": "734xPdomf7XKi1Qm8BGfZkQLTkpPs2EnVG2Ztju41VsP8Cs1rRYKVooqQAj5iWRhrmqWkMTPry6k4hcGo16F2da",
  "key6": "4bjUm2FJr4AsohbYvfZYYwMJjaDvuDjLquV5D4gD1N4tAsTpasSReqBEP6spqy1rJKxS4VaZAdpSVyVKZ2SvJy2J",
  "key7": "3gdkGNWcMKCP4WVUfPk4i22Hy75m2jHpYwCZy57TwppVrgSh5HoDci7Ypf96Cfcsmivt1z74XHJWfwmMYqp7v9Jw",
  "key8": "5289QRXLJbNeLpYxAq8F8jnXrahbqzstNHM4eGFigrbHerDorRvhhvgpor5zwmVB5zFSZgBFQf1bTo8R18z3dFr5",
  "key9": "2aQqTTJEL6J7Z3m41qNLNKdzp5DrwiTieXHMn5A3NEsWReKgL3v6jc7vMJ52b6pm5dph8hrDSz8fusNQ1ynRUCgT",
  "key10": "3XVHQVzYCRZJBZhxrmAtXhnffsye6kx5S5rWE35KaYXWmTQ7YF6x51cMtV8C6ZsYRNFH1y2RdYyyz2dZ5nCh9yAo",
  "key11": "2ocmb7ieYr2N6JvW8VPCjbfV3t2Tvj3HFrwQJWs2UCEFSbe6RdAUNvNwJonqxxZgQzxuekDDGt6NhBgt1YHSDf4C",
  "key12": "4EtT6twYeArQRCUNaYi72Mi4mShLxUBTpEKybHs93zV7VTuJCN9VwEWVgRUdMqnXv2PwwaSPANiHGVKSzMowKfmA",
  "key13": "4tztBiFGinNSfHnoNhKPjUgPN5ZaVh6DiZCoMzMqX1UJvXieDzjtSNfr67ASuLc2pWYbg3f8vitcGnYxmfLpe9Up",
  "key14": "2wCrAcz9Rpzi1ia4JoFE1kGyf4Zk34yXY1hrk6aSxZzprGTggDwrY3dxmbwR1q216atvBEzQo1ibkDtyxf4XYoq4",
  "key15": "3qTajBF7sf9qbYkXzD6R2Y5NWKRyn2yCWP2hfiuuKePgF3Bxvn9Fequ1KC9sTz8LC1GE5XfVX62Tj2jicTty3vhm",
  "key16": "2cbtC1ywivdAUELKFhRN7Hg9Mjpnyo8uQYyKXz23wBp3TWJXrnABLL8gXrt3x4fTc9U7C6fr8UPJ62mQfLC74dTu",
  "key17": "45r1TwXWeQmz6n5sW829o576XyJxQ8ddj7nHRE594uKCtFdic1ja9NcSgLHxHveF7kAHDAGNfRRJWeWfwgZN8KYL",
  "key18": "4GKPqePSADvrF8dVLjqT4kntfs6QiuumxQ6MV2RdA68epEvdDzPinGMEJKCfDaPrPnT8VACAzvtW1aFkzqwxb5uU",
  "key19": "45wvToSp45qfDEQHs87LhinaGTjLAUNoqir72zJTMbDJPeRNjooUGpPQBoSVV3v3LXAdUze3HmDToWn7P2JZ8RLC",
  "key20": "5gLaER1UfknZs9ckLS7QTgDuoxXiuGhqkYLc2GxYrfCGuX4zoZcdwxXQEyX7r46wYZc2Xx8hn8C2Z9zvT3McyCeR",
  "key21": "3VxhdsBzoTddgVnmktpSpWNroUrXbMdihznpR69ZyBgYn1qN3J219CPGkVq2zby37zALaCHsXGvXgGYqMiS8MMQz",
  "key22": "3xCYTNVxxhGjqi6mSgGiZTm9ShjW8N9EcLVkvpAmSwVqL3n58LSrJKKZGwGRS2rA7pJkBUuKiWCQmBu6cdfBgk6b",
  "key23": "44bghMHbwQQtNnKoHJReURne1VagQp41Pkq5kdmp1QHp61ttySPoKJ9K7yD72dJCRHgeRrfed6uUsP98ephMnsv4",
  "key24": "5kEJRG3mEvjscMWB8Hg2M6wmk4PnE2p2HSkE573Nk9NFHdhRo864RRqmzjwfuszLnYucBH2ynVhX9oyrioAYba22",
  "key25": "5LdNuNyzpvBCaVCz1EEizwFJ5ucJmoiCKw58L83bRHq4bPeEGuYvbWXryU7vX5RKBLnMJjXCvvvB7SXi2tfaqJUu",
  "key26": "54ZyvL56T71WozFqDS8WxSD9by1mdxTHdhKBq8MByNw4Bwe8AtwtixF8nYx29RkWuSmN6SkvtejMdrPbXLfxMXR9",
  "key27": "124txxMpsN3ALZzDFoNTgjK1Kkc77hzeL9FvoEkG6LuDN63w54op6hhStyCH15v5jHVcqcWwh9fNEDBDQpUQpsA5",
  "key28": "2GAYiH5KCFr3rGhRZLUWPwAGg8d1bH74XGvqLReVh7dj1TZSB6M5Ej1eHFpYcPtFmnZ4oXYeMLfdW119kKpJQdy3",
  "key29": "2WkNCso7ymEaAwj6LRkmXTRhejJcefeVihz4QcdEGRUbYMioTPaXgjgLNW4iqevA6jqtUFLt3d7CiamYeVjXZDU8",
  "key30": "5KJUjbvjU2vz3uSmNFhUdi5nEXVZy9a2PSghFSNZ3eZFae39tjqggJnVsa4yx2GpLGqYrLK8iJj5xBfc2TXCZsQD",
  "key31": "3ezzZwnSuvvs67pj5pbK2MrADpqMwbHQGzcixwTv2eHLDSA3ymogMX1jK4nET7Ar9bq9z2iiKRGgMLCeJBWPX3r2",
  "key32": "4g2SVYky8Wtzhc18fuVTqncF9c9ZawGkqQv5GJ6dooSKJim7ifLHJ9fE6AofDGcGwdF4hcLGncRXkByQuaqJzCi5",
  "key33": "3GGQGaJsh91P6tuiQGVCmunoR2MZj9XFFwd7Ht8TNadqhuKRrYemLnZMtg8nbyFTWQReLJredjL7iVwMBPLZBdrC",
  "key34": "4E7ixz2LhJ4aRLJFhcgHrQ6nwThb6ZTkrFbbLoy73Y4SW1pqZTHqSMTeUsnjqp8hXAGeUWFrsxZY8roZgfZkbKkk",
  "key35": "3uhp874ybPLJCyZRWUCUqGzCuYfgGz68nkCN4XKFjyy3Hrs3kNH6PYw8QbZCnUvL5jkM4RdVf16dura3gbkW5hqm"
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
