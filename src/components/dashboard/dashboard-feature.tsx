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
    "28ds3664KHi5gNWufBefEtBZT8BkkdMX96jpK6nMRKswAzGdSQBgbSmY5v5H7kUJesn9odP9mmAanv53rADqSxcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35HzqesBGxuGB3tkUyoGkfTjNCtNRqrjHqV6btm8Cz9k5GxS9r9t18fiLdcJzRWhK5qZPymBq22sDsBe7zzACyDR",
  "key1": "5jh4JWHMVtDqUhPPGA178KnK8AzY7GkgBwXDE6s11rjWMPyiRLC2FsHtNNE2Xt7fxzq2By68wipb51gJYawHmEu5",
  "key2": "svLjFUuzENXDK2dyh2LBSTETC85jYhyLoqPJUFyc3vf1cyHL7iVrSBAbdgwF51NqoFtkQ9TCxeQfcJE8rqs4SrV",
  "key3": "n23ykAdjEuu8x8pNDVF7JK6KT6j3CNankMhGy5jZ1M4x1e6qUMDojC2Wq68pybUGr2Q4ZpsCHmU4euUfgcyD5S7",
  "key4": "3qBgnUaGnWaVaehBfVGRo988HYyD1XNArEriMCnptkmJQxhXS7hfo2JyJiYsuimuqr3V7ayj3xK4cNHVFNMLPoHP",
  "key5": "51xBTVcbfLzDyBNQtzViJprFEbavdkk7rWYjfgytS1bYBvPN5gdJCY4Yafx27fGXLb84b9PvWVtsPAce798HJdKx",
  "key6": "5RWti3BtERSdDzckA1gFeWcphytXNiSE9bWwSBsFmPNxEHBxf8H63XwmPa7TuGqyT2pXgQvg3bDZAUpWpC5i2xtc",
  "key7": "4PGg8pCFC8AzLGQaZZQK6RT65jnHXJHMPaAM9uBDJnDVjq6X9qb9qDENoPcgwmWkuypv8YwQq2rpAmxTMXUFKF7G",
  "key8": "V1fFsNYrgXTsuPymSAqiDF4WBnATpFjiBVfYkQwtYoNUcAkZqzUUGGCDd3uCo7ndiU8fsB34nJJQ8ELQrrCpvmY",
  "key9": "jkYeHoSeunknbbZksxHpWYMLZK2tKwTS1RxyC5eChfeR8XzhN4jVerLVHrgMJvYadiAy1FCkwX8fBq51oTQqn3R",
  "key10": "5FUmNqsXUxiuQhqMZf8xuCLMftrG4ueXYNyXpYTjKD6aGtFeNoybCE4GNG4XYFgLuor23GjEdR9zWNr9Egx728rW",
  "key11": "5Q9XfDYiZ5P6GBBzQ4LqdzttBj2RGJmcKDMVHKvSxLmfFAL7MaCpqbQj7ZZEjyUGMep1w6yRVya5VES71imVmiqD",
  "key12": "zwGfkQ9fJPuRYEtwSUgMy3TiwM6wXDXW658LMfuqTRmAV1QbVZUNUAoXThTyd2PFcF9AfHWMfveaZN2gxhTiVwn",
  "key13": "32PSAY37apK5hvyL34jLPo7owx8HCYHRH7EimDZam7jvRV2N6WRHdp6f8B4Ao2vuE8ktsdfdA2JQjkLXWpmXj16s",
  "key14": "5kbZQQYzz37ZgyxYVw7mGbovzPURzHkpAg7zmMNyicgZb7N2WxjixMeTvyozxCzws73xt3Rf7top8ffYftBrvhSU",
  "key15": "4rEGiCG5dimYWN5x4SVnZBzXqwzDNWQW4yXDRvvYNVxQGpFCoMixfcnzokTcMpp3NuuFiFy8wJRS46uL27cttnUm",
  "key16": "36F8qXeDa4yzoBPTZb7nwrVBXLbj3ckgjZNQbcaTCqCNcgSxoy9GBZF2AFhDYTughxzmJgeuKpPvxEFMbELatAvA",
  "key17": "3taZWfb2Mau2SdnA4v5ZdwwdBL6v2htr2NbW7LmCJVQWR7AcbssUH43swK9JfEXwmNknBYDdK5Hjt1ibQnyfUmzF",
  "key18": "2tQJ19XfMZoZbLh1Fmc1WTgmQGLsseJFiSA326KmgFFk22bmjk6YAQY3DHJG28VbpEe2uugrQf95MdbGmqWcjmFk",
  "key19": "4T9Tty8bJFExHCyeTDEXWiH23knViEsCqXn3sacvNES29awcrisaDzUPSc3Dy7S6ANaXT28YV1GYzofEWGak7yZ6",
  "key20": "5CjFxLB9S8QnarnDCyxfs12YNyfkQzJKAGtKRatxQb8uraWbWK6v7Ph9BgRSRPCyuWFxaEPW1gdnVZDyksudTCCZ",
  "key21": "5AhGwjQ2F1a22Gnr1pgvLDFQbK6bUom57ZpsWHDrzfoTZWkphLXgWrKM8eSFUd2eAaa9vRHjXnYD9fkN74dYLvEk",
  "key22": "3qgfcSAdjhN3gPYAqppce5c3ttdY8Gq561xMfEuWDMRbQmhpbb1VuKySK9CZ6QnrpuFHzStPKtFQLDjFEWjmhyyX",
  "key23": "411CaPCELi4jvRGn4kP4ddECNJqZVk6DDPkyqGzxsQkKGuw6G6fuwT1pyc9tiGdPaaPwkAiKnxAADSqHnTwwPwBW",
  "key24": "2KF8Sn3PtFsRZa9brF8sx7hjQViHUPb5Efg2UTJHZDTAB3fhGzoNN5fWNXHuBUaowey9euZWB5qaVJjJyK81xqLk",
  "key25": "5Mvd12ssecJkJmVuYL7f6vGjVJZs8X55Y6wwEoBX72vnkj6BMXDdbhB82EPn88QgKiBxP7oSTURn64VjRwqSvdyb",
  "key26": "ukqBLZhqkjioQYmwJCxBygSHHE1qyDf1VUMXfqrip8VFtFMKStFZZQDZzSPbuuTZiMWrrf5zMdgFs9qkYV6ognX",
  "key27": "bGoTNbDpP8rnSWkQEgFvHEJ3rv1C3E54qz8vmfJs1e2EGUMN1xE1CLqDTfxqhKDgx73sCzgmzC7XL6AjeEBrJCD",
  "key28": "2CEdSLXnRVTj9XFLtddHr7xFf8fMWKziUAZU69U796KEKhT4jz8qvZUx16twBunhzRvSrazVPyaF8frkF61dWKrM",
  "key29": "5f8xBmRAozN1ZXvHCMw2GdUBwjCdUrTwsKjYhJjGGHDAdVJwwnomitZ1rdLNR8kk5A37eBNDhnKmKXvvCf8At3sH",
  "key30": "257uvTn35fFrj5ZwDwfshMEWUAXLsfdjZizd3HKYK2G5hnjckLyj7Q5pcdNnVHN4rDCrZvsw3fM9ZeHdf4VfNtAw",
  "key31": "5cHipU7Pz9oy4SvyJi6NjvMmSoPjzuh134kzwWqrBxykZio24XgYmfVzjfR1PJRER4ZGBoQycaMdasHyYFfSLCaT",
  "key32": "4PEKoFJFzpDKpRjb9noKwKXX8CZ9B2fWtv1WP3fxgwRHnEALxmWc9mzdLkzoB9HJWjvDqCM1N3mwqpoSQd8c7YSM"
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
