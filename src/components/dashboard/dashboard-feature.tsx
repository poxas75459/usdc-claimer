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
    "t42v8oMf3kUGFRszRTzpQJ4ewEqQJYVFFzuoNJAihkXngL41HY5PJXGB2UD7cv1N8HmM1gJiKQvqM75oEGxupQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SLYZ6yLwsp6At3crQf5PzAZwfPh6M89pVa5Lp7GZYKgXA3KJMKdHrk91YBAZVn29A6PyRyBENsAo3SDQAdxkw7P",
  "key1": "Mu9BMAEpaR6NhTokxKgWL5wRhuhqFeCHZ7pwCeYxKx3w6daYFphMVoXFMjhcayZvfX9RC23Zhdx2x6f8ipA6hUE",
  "key2": "315r6oyCuAkgUP7BHCwVbApNq7GpP6yuAVGRiugUQLge9NtSLv8gyNVDYo2ihT3qDdYLsWFjnCUyehUAgKZq2eQU",
  "key3": "ciR9BpCfP9C1x1FcxgQFUWVXhpe79EGpwM13fgcvcsJpX2dF9tDxcYaQ7TPjQB6xkAp7EMQQL2XEZGfXjrujgMn",
  "key4": "2tWj8Uo7MkqWhhqunEntRjtWQQvHVf4pvv4Bdqh8EbgNMvbL69ke8qo7ZgHjU9ZW9JqDs5YYLqLAj5cdGNCSXXgo",
  "key5": "356VRpgkC8peXtzYgrEZMrFfbLMRvKE5mRhZ489gTVQ6zAy933TF2AiH3U3T7XL7jpuTbYHNKC1W13Np7bcPtfZz",
  "key6": "5nHbYXPnxMu4etRbm9RYmsi3EraLZfJA6Nc3rHTNFjNpFNFAgZgg4xUzMt4k3EenHgf2NfjanLieJHX6wT7VyNut",
  "key7": "2Hkkq79fitv2ZuxHbsrMnnEVY8iyT7gAj3kLxwpQwcyxAxg1YXKU3UCaidZw9bhVXjqxghu7HXuzwqwvonyxAdza",
  "key8": "623tCmSKXQBH9ovp3rby7ceXAGgyA1af6U5648TriyKASyNgKnZP3HH8AuLuskCmqGXcVkssVdaJHUyoMR8Qm5Py",
  "key9": "LbpU2ubuH87Md6USdsTnmCkapt2raRgm4GMfAtX3TZmH3H2zCeRmd9AqwFpiGzRSUMZ8nX8fHzTVnEZifEhsU89",
  "key10": "3hS2u5rtBKoeeWSKrU4KByWS7L2rZjTqoSEM195EdrHjjdVPWKkQAtcpsXDRj3hVdJacLMbhzzPWiVDKWauew45H",
  "key11": "riBcTkSxXNbvXA5Uo2weMyAj7L7padUU7Mo6vFDQkfNT3s4jD1GGRDAogBBumFa88jrfon2AjVnpTdTuoiZHSE5",
  "key12": "Tm7okg22YJA4MhE6e77Uv2dLYuK56ckBuuRiqUyv8Tkib7X6F2QfQioWUkL3rjGpmtWtTsT5jJcL833nyhUip4y",
  "key13": "2FJNKD8jAC22Z5AECLRGvuKixsj5ijWKgmndY1xKhkXsti3D49NwYJWPnbp7Gzr7fS8Bemsqy1rhfDWS1Qt2Y1Kn",
  "key14": "5ELFarGfiBa33UKLbuaqUMnowxKpoua2N2B1SBE32NtpAd5we3AyeyYhkGaeTjdLmszjNDqaWcrnueaeYWYAwa4f",
  "key15": "yv5cr8vkDv3KRSBfFfaXKSywejoPmPm8otSwzQhtHXA57CtXzMeGvSKhSRbjzDsVvbgM7niVJDJi3HXshYquR27",
  "key16": "4oEPUXwUsEdaRyGH1vzPxVe3JZ1k6uykWuHmivACLedMxPi6cYmVYot9ZwAG49HhYPCSA1knWePLzyFHBQk7Zzf",
  "key17": "29im7FMa9SYXjS5AYWMh8XEnF7hfr19jSDVSuAvnWHxRSTnDh1weNABW2eyUaGJPYzskM8DCsEK9CpBSRqJ5AFsb",
  "key18": "3p9m4K1WsjCrppJ1kLxwGgFytBo1YbwyM3wukF4yTkHzX5UeuXGoDYaZgTMkwwNGwp2mrjXZ5B35h6bN2P3DBqTP",
  "key19": "2knmLzArUp2NoJJtxJ8f6waf6fg5JW1bFJWJWRcg5cbTqWNQkWAhwQ7J5ft7YN1iLPNvwWEX57sNzHiFehikNdBE",
  "key20": "3XQdphfDVs9KTXSbuMSLAgnL4HrFSo15ZoSWtN5LrwyPLBnG4tEwzHkXU6f4c8E9k3HihaQ2x8oNLmqCztwj9zkc",
  "key21": "4ShKErKeBEQ6Tyv1MzzwCJsWqfeXG1w5zX7k27NeFD7C1yXkcudhUpthXsuz3uZ9UT1Fg3poE4wFiddk8RCsRdsq",
  "key22": "4AWBrJ45PVFRKbs3aUzopMJ9J98A6NbWjMS8CiWN3s44UFUhK8ALbEBobwLjLnLcs9wBoqWFeJEfJumQtfkQkugM",
  "key23": "4EsCwo4qD537GdJXAC8XwyjBTBrKfCUgDUeq5BQ7cJsQpHHppL1au6uH8DWvBA2mGwSgHy4FHrVgKr3QMKExegAX",
  "key24": "4p9aFEd2YTnV7YNiTp2BY9Fa3pzp2mcdK9MrLSQXNZxACCxaEGxST9ySwZ6NzVWR984fSm5MwJtoeqmgP836Si39",
  "key25": "42eWSsmtQgsGgLdxZA6HXf5bXDVtDDYKwiLF1ydXtTNa16BnaBkhHHSX6cRD7J9TF93FHivvZuWd1CqAkDUmESLS",
  "key26": "4YUeLP9b22Aw6txVVdesVTU5EnmZKuC45jMDBNJxdvzpSCYUq7kfWd5YysdmZBi71fhDRMZfhEwAtaAf1AN2QwXu",
  "key27": "3a2bZKWUx25kNqU18khJZZTuyheigDdJg7BSfALRpkGaX5RbEmCsK7xT7v6yjvpmVkKcNzNdUKE5oqAGoMTcF6jU",
  "key28": "YQ1WuRzWyENkGuHztYHJTJ7i6znuPjujx9XjTHuPZCueVV8Pk1Da8nMRuJKLqMS9R3ztqYwnJbNXZmZqBw6BU7o"
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
