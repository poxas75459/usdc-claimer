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
    "56QbdjmYjVDEedFfBXYSVApNUJDHXN1okwdQAVHN3AWu84fxJ5cp6yGHuSz3LGByBHWZzMr2ks9eb1g7TZLhujdG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uWRRg2veks7k3TDNrXdbf4VKsVJzwEGMMSnWoNWs1nEc8whZLsvhMoFA6LgPEGnMaHNQnBJ3vxoe6txcFUF76HG",
  "key1": "2cCyeDPP8mGi3Uk41vT5UPNezXfiiHVLz4RKZUg7XRmmxkup8CP3MyHUSSD9aJhcezTis2JzeQu1S3PncWtEPJq1",
  "key2": "61w3LvS5KYQAZ3tWVQWWUYoZsK5nKHAsZEHmJzkvGtwGN9gcFJsWXL4SrkaUMgJufi4bRs5xf3rk84ZX65SQmFRi",
  "key3": "3Bc7cuRS3DnxEjfzbPhEmQemsE43zUEtKUtoNK5gUcvNRmatZoZRqVQWoXZG2vjAefiPSkwWVNjTkYkZFutUXz9c",
  "key4": "45nPQ7Ruhz3j49vcQuQnPELgV4nKnTxF8FyekoCCYHcNGecE6WLuvV9CDw2pXWk2kf598zYQX7TFgf9y8i8W6uKZ",
  "key5": "2j8WBaVxzmf2hGkAZ8qwYqw95tn8Tqu8nTfzaGQWfss1NpVx1eqksFtUF9ZBheQrLVEXc59JN2eYmjNFtYFBWYKt",
  "key6": "33HsUo1UybxVmYfnPkU7jMxGQuL5QDRFumR6UgseSw83p6gCmRcbLTij7tgQpu86m872yzkvvY7ng4NDpqVkm17Z",
  "key7": "5i1U9dZDm7qPRuXDGSSUr1m6sYgmkdMpcPA9RQnNj4t3m1CKAbpzjdmK2gAUVD77z3X6ewpQyXu8M43YmLSujKV2",
  "key8": "5X6BZQTiAfvDaC7dPreKWqvi5oYgZaV8LEDQyue7wybxQ2skFRZpDa52AuwvVVXuSNWtuMTTwvzxW2NPgjWtL6tR",
  "key9": "2GqcHhAiKRezJ1cucLTB8Ajryr8ddpeMXLG6ngzBBw1ktZWsyvDLQLPbQHH6uJw79tAUpUFwW2KNDTJ5kFHcHLn2",
  "key10": "5nc1xHHHyiGLGGEkLWtUa6Jnf6i2uXWLHt4nkjmwUkjQB2KqD9YvXhvZkWbgtw6rknrd6As9oSgmV2NHZXBcEKUj",
  "key11": "LX4pnmAtqYvARyZWLMnNUoPZcofi8keeEzDo42qR8Ux2eDeKwqrJKY8ztoetKJgU7faV23fny9zBJfYUSQJnMmy",
  "key12": "ogkfA4pm9STKrp7uUD7zpbqHvczwCxKnGnXs3wfB2bShFpZH5b5N7FkizDLTr7ge4m5RNJ9joJoNYZyqRfjZCZ2",
  "key13": "4D7rx5PUDkeY6UD6YzUEQT8Mrh3JRawJJNXAMvjoLQCU85i6x7QPmmnYpcjhQXVDKnyQ3icX1tYihbfChoRdT5RY",
  "key14": "41ZzvTNpFNs1jqq1xNLpK2vcg4vckaXuZ59WvnPf1YXEumC8qtDsCuNJRGvGNcgZMdWXoZUxco83RKvZXeWXpDwR",
  "key15": "3GbxS1uyJPwZVf7UGDv7S72VqYwRvqZuGLb9B2oxuTh7xo76NzJJGVs9kq3DZ9JPiepSLSTYuHRHJdE5EGZ6ZVqB",
  "key16": "5rMTY8J66VBPaG7bVpT4jdV11nt2qHWkMfrA6huWhPBHxKYKXtJqLqpZYMeRqg3EBwQCe7vhUbEF1aD1kRTBuJiQ",
  "key17": "5eYTGQQ7BpMc4oSKd6uBxJ9ue2e8j16fT4tfJZ1UwrWYhzW4QfxxTyDZquou15cQFkbAbHHMNpyxKcJFh762BbgF",
  "key18": "DA36N1J9p7u8LGAEB7Lqz4y9wjTJaLcyf46Q5M5d4ZDLNo6CHYjqN6y9c2TmejBW7tuw9MhQ3cYd8PG3eJZueBu",
  "key19": "638f3tCHhBy4uK6EKTfh7Dwr8fw4gsjcvPvmtqRgHLMxbJMaX62MJqebfTZbP5K5xaPM4qcGaZuqJBuqTshNGR1H",
  "key20": "5RDjzAvFe1R73Ee67hmo1bX5wPvwohe6ppkLeKnNT1AsC7x5ysannnLvmkBEGUSt97kykEaxxFFty3kRGdEjZi1R",
  "key21": "5FLroAD9NMNPMckP62aus4AAfy8Wi2NpTNqaoX7e9TG9NivKk4vj7Y9d3yfqwigEDJKA3DcCZwvTHoT9y2qrtRes",
  "key22": "2rqYFdFScQyd4Uw7QSnUhWoHhJx5F8tBhDJgjq1yP9oWS6q55HWEQK2aA1JUi6jwSi2NZHmc7nE95PhAdyrk8NP2",
  "key23": "29Ax4rCe5ZFp1XqbE2meH8PCK4ESExwghDFLnZQg8Z4MAugBF5zcAw7HLaFZVccQeN28fj7Lg2iL3tJMTasZmc1m",
  "key24": "5ViYdr5D9LGLdAcG4ns77eCfk6pt6xKRF2PK749PpQjbbMd9SUFmaqtELhfZvXTjiEx2dcbqBBqt4HrVo93t9ekn",
  "key25": "oBrJZc6YJt3P5q3H5rJqLTFbcnwejWUkTph3cL66CXvDZZwibJutcFgdL9gAYx51yaYhfY6JzYuvpxa78vL7QUZ",
  "key26": "4HfxvPwK9UEa7MGxqFqnQfdtF6QPgkGBQ39FVAFS3f11iJGLKqtqsMsJjmFD38EPcb1Bztp44HUMwCeQL8BCuYYX",
  "key27": "41HN9KcDZcpxS313rPsfRJnWEmmUdQKDWBK6adijyTGQmuvJ8iNv1UPqvB7jG8CYK94HwuzjevXk9qZRtcLzM6tq",
  "key28": "5wgBwknuzppvVU17kB2PLTQQtKBkkbXzdSS62564ds71jAJghHb9mnbn88QfadKFrdZVnBCsEEeYBj2tAnP1f8uu",
  "key29": "4rmnDHCSuxkm41fG3DREqwnJApvHeaREupaXjk9RZmWvMnfT812GbCjCUB3wCamdLgZ7A21HyEBaPSktoodsawZ3"
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
