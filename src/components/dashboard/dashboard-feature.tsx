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
    "2ECY6BYLMCDKfCdFRxU4HALQNtU7iMF42u23Z99uMWuuyE7XUh9RhtTUm1ZcJ2nTx4scVN7bua9Q3Q2ARni47rnj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N2JixKSp53ooR7t4EkD9SuaFUNkZbuXSZTCvn5j93YhgnYgo9Fp1j4LuTwYJTt43nxSGyvgkQkRfT4tDn53F3Jd",
  "key1": "24Eoqa6PxHm8qMu2KEHG2Z9Ze7P43eRjpxe6xctcs4PVyYJhDfEhHWsdvUmkWHvm2aAyARLM5SbShjroxqgBsECR",
  "key2": "2CEjxPypKPH5tNsyqhRQhqhd9SPCf9NkyAmDjPGRpfYZLkBiFTd7WfW1C5vjAujFkQSsmjWTiA2Kjqnj3GtBAgzr",
  "key3": "4ff3QNoMggBHYpuThp6JU56p96XSL9WRjwdr7ge58fKF7qRFCvGa47v8i89WR6oBMvcpkCjhdATZLV44f16o2s1s",
  "key4": "2Mu9yVAhktuwg6ny1tYU3XKRWSNk5A7uEisiRKuXwFgcf9bSgprpGecy4UeoCZQB7szJoF7Rm5nL9KmDtzK1MYkA",
  "key5": "3BbvqjkycdJL6QzcVwFuJjUqUZ6wxF9c3b61Caih5akTduHfHTBxZew1yLDyxqe3TYfpUwj8WkvkYPZFS4ZYMzbp",
  "key6": "2eoTexKZV3ocu3aiUaBkYihzyeUFjGeo7cQYdQ4xMRjF61evDjBqAy6PpJLxvSDisVWenik7XHekinU69JHGjQbW",
  "key7": "7CRZhMJhF7im28yqhzsVgXFgWQDyEBD6jrgdqD1p9GnFUoQNQATdgoXT9KhGde2mpYvVEyW7ZehHnfaeMx1rmT3",
  "key8": "63zqqVEX34zEb22ktYHiPWfCZUjWvyqwivRn2dUsqd9rkPhRmpejioAhHkfSHqQzVeqfssoYLVyXciTdgLTtrA2L",
  "key9": "4TPV7QurVfLGdHkTJCU15G2sfHT4efwrx5jzYjgbxNXTADSxs2VQCJet8HmAVRASkGDf94Grqekh1WkFC7D9wsYh",
  "key10": "5kfBp9KQ1NMWE3yG4aZ4Wg8RNPzoA436pgnRGhwg2od46K5bAPrn1PiqCjBgHnpe2niU3S49qSSMMvDrzuZd7dQU",
  "key11": "w27CpWtftX31DaYDN6Cwmv5EAacTNmpzAUxASbV1tASYDKZU9EzrKZGo4CTRc2jUeuvYyFRXyantPze6kwJs1dg",
  "key12": "3Rdert22oiL1KWJm3a5UQh7aj53j2hRRqbWmoMQ6aihWSpqhvNUWWCzG3xrPe5CFkAgeZL4NvZSekq5aQwD5CTKh",
  "key13": "3NDuqXhMNBPVRanBfAvoF37VfeNRpLjV2TWqc7CpCQF1fHRLyqYNEvRHnYNo3f5Zg3rfmaPHgY5ANpHWG3ZbxeRJ",
  "key14": "5Bh6r1SzugBdjqNhiWNsYVkJKijuuSLGNzNAThFQjNeH8c74godXoZ43GKUt6Vk9RvqtJ36swcScNVUEdvm8Gb4i",
  "key15": "2FExmTDYnSuuBb58wC4Kf2od61LF3TrpajLogeX2Nf2uhsN5fo1pcPn3KZMndpsbqdHivLzswJzCPy8g5A8wk1JC",
  "key16": "3pps9XrNSErYaryc6ttcyr33ReHzsXsrrXWMXP7ad7qdNw6t2T3sdkRbQj9mizNwnxtgXYou3SB6CupLqaL3cbHB",
  "key17": "3Jv2TF5N1NCUG6MTCKGRV1ULSEehg6jCHQvKY6dg3A2WfxiPWpNp8LKLYuWdUGQPVsLx5jsMtBHH6JW1DmS9USU2",
  "key18": "2aaWhYDbtMZgKBP28gMoMG7WRbbhu2QsscBYno6mh6SkRvGm17MgMWBNZb4heK5w7oniAjBoqnk1cymsNv7keGb2",
  "key19": "3uDvmCVg3Ry9kvfEhhTnsp5icHq3VAkrhLjVnriu24z6fdHzBsrgY7Z4G17JH2RTYttPpYKqycvj8T4oUNLXUp3F",
  "key20": "MWM3Wvi5BkQW8t3M6YUsL6maJRiRhaKBe8HPgvp3yWjmDz6EhSbGe4fqjGhBuwmsVYKK4JdY8Xbc6A7Er8axh9L",
  "key21": "4USX99JHdVr1M7GDyPA3aEmcQ36PkJTnUdUaqnWKqk5TWfPG2Qm5BAmZtqND4uXvAYYH21VGS7gzUB7XDWArVkNL",
  "key22": "5XVFsWKhQz3uPbuyUDSmSqPqK54dsPLWEu4wuQ9xh9XE9naRh1ktCRqkWzDBFQpcopHWU4pzRCAb5F75dJFYrzjw",
  "key23": "5nkEMrxNjmJEXFhiFjtZ4F8tBEZutTF7XLzKtUbqM4nJZrvZBfeJDZgBUdMAQa6tWoZtaiuiH8cRZKwBJduLRAH5",
  "key24": "3jw4HEPJ734qsapDppQF5t7zRVECiYjQtY4ioGCFGwLJQcQwA98RD6fh64wTXUbRXSN63jyfvmSaYZdyoEPqu3kG",
  "key25": "5KUQCdFTbtboZ7wUgJR4FUcNWjyoAAHzpSEYEtNvEPKeLwG7LVmCmLHsBFSujAzaRpJj1BZeK8XYv7cCpZe3RP5g",
  "key26": "2G9FAWqAqXdF7QwK9mJJhtpn9zEXPMxNeBrrtpfzVW8MzJvXhosYxQFwwhMF5JboNMiLwomu8KXVAbgrTL6oaAbJ",
  "key27": "5tfZzSQuvHofNaVSJnhdHoiUzzQDHKMaHn7Y7LkacDuaB1Yh2HU6vzzyPpxeLKZG7zhxcYg4Q9bXjPzAfJ98D9V4",
  "key28": "4wdBqcQm2PEZh3dH4HdbxBHzA3XZfxmbQqcstE8LBmnN9p7yWR5p4g7XT3At1gqihKwQ4HKBX5An2AkprwKerdZD",
  "key29": "5nyb6eU88JadAWn3rzHaRF9UqyzvsfmidPBTUCrB8wYE1cr7FpThgXLwYVZSscq9SNXuwpHZGDoZ73tpcnnizc6y"
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
