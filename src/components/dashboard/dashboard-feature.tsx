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
    "4vS3yfZMBMtYMHmt95ifGGGA4Mq9YJtktQiLcTYqAqSNKgAaaf6aGqYgLZek7oZEievPsD571469gmCXSoqskHas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jBaSQFQqxsaiaNkz3APt25B3wkcJhR8vqnzWBtuMiMeJjFuh38d2jGKjfL7huj2XwRYNDC5sNzSurkV4LSXcEfY",
  "key1": "547zoYEjcM8bv3ZCVtsTQxp2Lqk2cGkTkeAVfLKVpKTiWB7GGA9zPxkrkCVDpu3ReBYY8parrgLUCFy5Coq76PrN",
  "key2": "55Qm3Q4yqF8EVMBnzXyLA6Njb6B4vWoEsgZUvqiCrBzUj7MPJsFcDdmbDpVG7or17LbdyLVQRc8eYzCtsfz1D2Tm",
  "key3": "4oacQTKpqUSE19Q68gma9ZKU7zSQoVDdgu4FBSnS23NegAm87LrKJd2xum4wLSHCztUB1VY3JcdXXqy8SvSMzsaU",
  "key4": "4kCu8YK6mvWNdUtJPCsEbg7jJGXdUnHcFSQGX15We6GvK9jcrwH5RgyE1C8egh71Ngvno63kGmhqVFPrgz7yd61z",
  "key5": "4L46Lg15BkZM9bBfVoRRgxtNEw5VandywqAgH87tUhV1z3vFUd1XcpvefZxuEW9XV2FfvB6dhGu4nUuSV1aYZxFe",
  "key6": "5wMMA5NFZpzejcq9hjjivMdkaGV3vLn1m9SioTewzmzqWtfWVbMrYzKyo6UiGrgksofX9rRKHhqUsveuPfX1czZT",
  "key7": "5LLxqwqw8Rj7zhNhLakNEz3VvwibjnzgFYu9sUgrt9VCk698Ca3GeaGH6q2o66JMEJZyMa5urtkzeB7k6q6boTx3",
  "key8": "2sTCqocPAsBSu2adpNayDpUEC7eru4h2MqkZfJXj1zAWuDsxze5euTMnLrMydb3jAxmopszQiABXGkmqxw1kq2gE",
  "key9": "3PuSMj8LLSppcjdgHUr9J3GwMutCwVfdVZSr1xWLuFRq3CifALMrz3s4L5ZZfSUspwKRbLJeXLe8Gq9rnp6PixSY",
  "key10": "3ht2mUWSXtJ9KCws4DNpG5nPSgaVnX4Ydm1UqkAkMzxiHZSRwpQxZBsGNxvxmByLWAftCrRmXazzxtWrHBAN881n",
  "key11": "3vrM6MBZcqUCzUn5jW3zk7i7MW33KNj8RPWJJvjzVxo1L74XfEJ9fiWNZzGQP8dCP12AYQuj9sps3CedcM1ogoB4",
  "key12": "4MKokeJw5FUpJkZ4ji3cDW8wgJqW9gWsuR5HuUjNeXrwioXd4hXGDjRZQDi5uu7tNvUNd9QXpT9bEs45XgpddNT",
  "key13": "4JBZ6hTZNJMvEuD1aKpTUcys2gw6gS7D4fcSXp525x2zo5DZtpsgqB5GiapVHp3gvLd4KyCHmRFF1tNNeNfgWsFa",
  "key14": "2Pr48tEpjTn6jAHJbp4VHxF96ZLkXgbYYK57kYGPqAXXh8ec4QKtDNpDomE3DaXePi29Q4r48s3RNisrF6puCY3d",
  "key15": "4MeKw4cDEQ88W6RgS6JZhYMLM774cwgZiRfeXA55i1wtqKbT9srtt8gvXkuVSwnEcXBLQW9467xn7HPg1sATHn6C",
  "key16": "3ZFughefzyNUAEQNcVL9bSrQ5Ajr12uEaaULhYeFaDrWYro5N8npHAUABDxdSN2J3VfxZnfm4pDjdLCJRruEdt8b",
  "key17": "4AP3mq47noxrLLm2KjfYegW8K654hmFo1aazbzsBKF9LXaax4LkWTwwUFXVR2AEkF8EUYwoDEUpMzZnKXEQ3eXYE",
  "key18": "3pLD8BetpHLHAxp4b3zosjm4YMGkZLjJDHgrC66vayvHKd5i1evsH1BKACirmH7i7uhKWEYRUB6TYx4iZo4ba4QT",
  "key19": "2PXAJSCWVFpydJu398biZbV11URptd9Xuhdrvz5ML6ripLyRLEtpYpPe4wz9hpVy26x6zTzgtehoUt5rG5YTTAfp",
  "key20": "3Cnm8tdobmDZZyEX2kT6dwgfsBLira3JJY2cq91Rx9H9Rb37HNBGafZdR2SMT61v7KQAitvLjBZ2VaMaK4STo21E",
  "key21": "4gmw6aVvYHBnUXM5yGivSDcty5d677B3CC3og8DGAnJXCB3KxSYzWL1DTpX6C5DGWmwm3PBAc4Bu5oq9Jyx7bDAW",
  "key22": "5PvFpZkJcNzAhFB5UdTLyb6zeupiYDcuz8dtQeXyKkfXUxm8uKL5PyD3F4hZdx3czqZPHTT62buk18Y4XQsaeYRB",
  "key23": "3reL1j73XABiNp3zu7c4Uv18RyumcFvG6PckZhpcG6cPKSM9PCZ1JPVpd1Hf4tXUmpN6R3q7NVjbZqmBuKh5kDMs",
  "key24": "4tctrELDA3eQqv2CpVtwCvLyMsoiVWZDwZnRG1bd2tSyrLJA7mkB3R8zMrvqDq7tsQbnUbfLz8nCmZfJKkBN8riU",
  "key25": "5mnf5SsePiujoyseqv7kWXwvgrYGPXegusYJccvnbwvJhisdYTEKp7khsMGFrZj5Bpf52cGPjzAbTWTauY25BQdU",
  "key26": "5y4S4U4PLRLzLyNTzZ3ANwLFinego5ztHj9jNt2uhbaWiLUt6FtjXr1s8ZMY1xvGpzL7Uttjutrbz7R2xkhFLZd4",
  "key27": "35ESjfNi1rzEjVWxYFpUdG7ba4gDyoV9MCUji3JYdQPicxTQSoeh1j5zae89EppsYy8wLcUXhUoJBupH83ajtVHs",
  "key28": "4zWCvt8qdLqzEVEkR74hj3b6e8akusNiD7hAFYc692WuiRYncsuXkNRanDCbJaZUkorVohsUv5i6JBqgC1vzY3rF",
  "key29": "4f4qjE3HapzWGZCVRvSey7abWcNJMDuZPWXopDr1BLX1toguuG6RSwdexoeGdLEwJQcC3znmyMP2RHRPhLhJ5xhb",
  "key30": "56Dj7QkeCvAKS7MJQmvUjZRUHNvByZycKb4HY9NqAqLe9pa4qwmCrNHNVo1qGyqG8X4VgwmUTvfna98bwJKzUPW4",
  "key31": "2983LohcZrd6Qzia1epQRnHvCnSBQS584hEGUZp5ihmzZT734iw3aP2HgwTdxgrk57j38t4voV1VvxoemQLV6U1s",
  "key32": "2v6DYc7uvLnp3tPj7BZ7ywvgtNrQ6A7jnahj9BKbashFxUiCkr6zkcMGEh79kqF1JJLyMGJx9ifE4BBTUvtGTRuc",
  "key33": "5dPLvuiqxvZ9wXvgJtnH2gA49psDp6T9p2kVtB9H8N9PGQWvACJ2RFZiyKD2sv3qpgqem6NBbqamW6e61pBvKgyK",
  "key34": "52ao3XgccEsbZbXWkTPcQ8wjgPVCzp5UUCykRwrJoc5kfFYrhWmiuvJv56Xc152XiQS4LfycXkgdPLnY7FxM2Df6",
  "key35": "3uihxBEJ83DLVuk2qyZbm1EfEKobtpkLkyJmgWeig8zwt4BMrj5McX9SGbakoe83HHNyi98Z2z7VXcPchFhkyXcY"
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
