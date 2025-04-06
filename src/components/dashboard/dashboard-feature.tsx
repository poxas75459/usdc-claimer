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
    "6vvBmMHtHVZPrEEmZMq1fqEBRAu6etdzzQNnjYr3bkJ1zNz8aXM9pxpHavC2kFdrAg84KDVgUf1kPBJMikhuHbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vmDy2C9BQh6hprMX7t5Gwj3XQDqj4iufYusCzrVQEDfu2z37hogd4MSjB5bJbPv7yv2PhwhXHJm8pUB2Ue8R6mv",
  "key1": "122TykXJFxfhoqSKRAXmXGYGtuWFW7Vdf6BsC9qCZR26PZHiSJvzxX885yWTiAUuLfSHdsMLZEg74rFZpHb6GPhi",
  "key2": "HYmBrGKQq2dsfemXEF5nRJVfZjTnfaM7fErU8kFk2DiLtvbFLKkbk75YR4erH1DDrhVpWxGQ4qtEVAxbtFRzJgW",
  "key3": "SRcyFB4Wk9qyNMgXzFAmE2dsj4peVHbMjDXYsk5aK1FuAQMGMLgLwFiW1HUGv7F3Q4GocLx7UZR6fFubkKqjVtK",
  "key4": "5yXo9UwyiAEPxgPJAbUhoTwSSSuYLVNw5ujyaTTdpqVjJ3Yk6o2xhDfWEJ3YAcNFxDmX7CYgvKUx9qaxgUWx5LAq",
  "key5": "Uj9HU7LQ6PgSgVBraM52YcwtqjjNJEWNU6Z39CEeHKroXwPswbCJR4GYxSZNHn8w4Ecpxq2C7VwXLsqpN9KT2tE",
  "key6": "5M7nzaY3WEJHBtnngCdtdDGJDMkdBtgmpxQBx9E3uFqzs2AECRAF5s4XR5hvNnJTYXggMbCyXAspVXaKupdqJpdx",
  "key7": "35AwHYJkrMd4yX5KSXmSzUyetzXxWF72gAPzkGhceYByeTjKGx1TifoMFXgvE6VwXp5Ewd9QWHpjFWEXSAVr3hfh",
  "key8": "u2wt3fw47RGNEC2Gz7oiB8zC8DGL4o7iBiYqmRURbVbW1uVzku33eG4WQhxZc1ZgxRko9hB7mrgbbWGTDjBgT5H",
  "key9": "35A7faubpWWnwZQKyE8Y2G6rugrBATH5JZenrttZPxGXzjDDDCVFGoby8bhFwXy2VHvWZQJoZijiWMNuQBMaswRe",
  "key10": "CwarKgpW9hJ6bm7dGqPys1ybmtrPrLuGzWDNGWmNf5iN5HKaWVkf6mBg9TzgmgUsw1Tv34PyHJtL7EatuVsrywh",
  "key11": "3ytNHQxfAHUfahyyUgKDJC1GgdEvJfB7ePKBUbQebYwwBabCrbj42BiatCjx3MHrHkziSnqnWkyZNbkmJeDWPshf",
  "key12": "DGmwoYdHTSJPuPSPci1YuQsSNyYMzzEFjGuJVftaLTCGvEHBEBBRUyaesxFkoxNsq2v2ZbXvtXiBmnQVk4Btuwx",
  "key13": "tE5NH1NqkNdbwcHwQuWUuMotS1cjvQmQwewRfXxdAjUubqYzQ2v9ShCvbAsP55yZRbaiR4h6eFs3RsgnjtXg1f2",
  "key14": "3Z9z8jBntx2HWebtno2QmLmkAhLoK2JdLvRKFxgSw19Rjx9PcAnG8EVuj2RLgdcPG5YXWFyYVzRkZ1YuY45YX6Bq",
  "key15": "4LzQSRbTAdbF9aYpUMp7EEsNQgedV6qzjQnXugqbfgwxYYvuxY41DHYixLq9cJKfkRmE5g5GqeNnDvu6ebufvFfs",
  "key16": "4C6MfhMSwuRfk5p6JDDpYrMh6bAySfjaSGkwGwveZqmCYist568Xf4myjAgj7qUkNUESnNV4Gm3kMktyWumFbvTJ",
  "key17": "2swCwd6XP4CebSZaTYN7rvrZrdX4MZEU2dP7hyKHnKHP4Bvv4idE5AD2YXptfVu1tG4BNBbTs5Ru9NnmRqMvZSWH",
  "key18": "sdCcC3gv9uKMiR2S7AGrSbDKgwrHjoAvRPpxAXhixCDqNSvFYa56jML9SHWkYodhfdpgMkgjAnFyHEKTWSp2YJ4",
  "key19": "GqUtgp9safhBTjznmJHBCSPJCrWHFF4UCqK3sYVJ1ByeHxjgYznuvRLdfknETCdLUVMVNBkbXgs7xaGkdGDVDXX",
  "key20": "2JtcJfxhpGfRG9gPNJGtew7sWFNQg8SfthzRahXbgkmbbygguFaE7XtXZYthJkwjc8Nx28i6dYDSVoMCk4W3rXuA",
  "key21": "47YwD4soykCe7ZQf4p1FhPZGepYsg9opnvq2pp1qtH7Msj2nratqxXgFNsWPFC7VjrnVzxNM9Dd7iUYquDpmfs7K",
  "key22": "51smb79AxBHTKhvAxkmeGAJDi32xZXVq4JWREdDVwx3AMrfs2uFE5bKdfwnkNtWwpuV2HTnAYnvT9fv9yRwBQeiM",
  "key23": "2dYy5iFYUER9FAK1rUfeoj6M25eUqnjzV6NefVZWB5DM6A1F3ec9mPFYzMbyTnRHhqHkgG9HRzKpbJBHsE9UNTQh",
  "key24": "4nh1bKzYt9CBzJrki8JY3si3VH4NLE2kx7R8VYUkKzH78aRR9NWhvkinJmpih3DqXMG9Jk6ErXSxcxEDK8Ahb1sf",
  "key25": "5FSDSQYu5Q2yfRxhfH1oTNr4MrjF1iojnEzyb38S8CoqaTLtAtNVtmztM6W2GaPGW4Ry8aE1iJL8nwmb2hgU5iSN",
  "key26": "5DGreJqt43GQD9GLEW5MdEUar7GFZfBQ84NdbYcJUyow5a4Mt3cQvHLhXuUtsu1EghJJhBywnm9HrrPu1teS9SNS",
  "key27": "3NYZF2xycdEwUws8Q64FLLbm8pNuizBhLbxawJeqcwfFnb6KWoBuufgr7GwDji1mms47UazNNAcD4oeDMU2QpTxn",
  "key28": "MwsKJ226ocFNi29P4zkGKLe9gnVCUGewioPAtJ4FQCggPbmLhMjuTFR6NLbAGeL6Aahx96Y8nMGHmvUaS9rRn6Q",
  "key29": "3S4PNj9cybwM5Xc4x9nQ71uBAradgsm5gwV6sqkSSQRNpKnDjVHKkh7HtA83CsThyKzwK6Jz22XQoAdieLVwvUfM",
  "key30": "5S1Nm64d5Y4JzbJhboniQaUefKxYsQ58XC2KGZPHL8RtKcjYCnatfmHojcXkAKbmr1oUWihE1AtghQXjPkRVtejq",
  "key31": "32yoBuWtEPGjRhkShfTC6tKSUVggZbJd9yjaRXHeDXvg5aZUoPkrqfpWNgKoRX5CHcFLVq71UNthHWhkBmdvpwB6",
  "key32": "5hD4amT7mvbsfjgXjA7qfH4Fp6sY9gscMJdxzDK4E771LjGGyyGqabBagryXyUT2SrGvojae2bQw3BESrj8FxgGz",
  "key33": "4nVnYCv4TaamHicV7JcWYZi4imPTbw1EHfwX5PqLRi16DHFPhuwscz2FyaLS8ss5CwMYfjcgJSuTtVkXZ32wNmM1",
  "key34": "5WFDSuva1edqMsFErv8WUR7c6q4J8gZuy31ntHKCmoZe9DWZY2C3nsxB3hLWuqvWBKp2Mh12zLpqagPsapoVDwJu"
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
