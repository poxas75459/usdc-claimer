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
    "548YErsMMAJjDnqv66EunUMfTHsdDxCfAJhAoHcX1CdDx5Z2HfiwyWbY5DJPkXJ2HryPjw4CywuU1L5DvwsbDJ5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ieww5nYgUDFgrqM7c2iSyFvZwEF3zBqXpzsqdmzT353QSEGNBkoWMXZFdvUbuEmrFiWrh2iyN8tpwu2BD31UJi9",
  "key1": "2737DGhDmmv7DPBaUYfEb45CAwq4RtKzXkDSqem8HjM6HEz5T6imua6AEfT7fb5proXB21rvi7cuxb786FSBaeFS",
  "key2": "3CWkNjdhjVxTGPktJ7QVYXYSaiNBnWKFok6LtZfYbLWQWjckk9axgfed8ok6LFfL9c2ejmSu8YYKH7ndY3ezm4iU",
  "key3": "451qSzm6Dpf3iJkA2sAHwmWcRa4j2GLXZGxcXWuwkXqh725qCS6DiCMcdKUs4LfL7i4PR6poGdpoJa4712wnzCJq",
  "key4": "3qPhu53mi1vtbTJ7yM6K16Qn7UEsHMe2DNnQ2cyyERzzHgk9xYthfrmhPk1e268NZQoacXxWgoWF28HVgpqme74A",
  "key5": "gTeNCHJ5vg75kyN2RKEvjtffQBDtjjmaPHP9zDaYxHRJmtDkmZkppEp6NXzDNYE2XYQ3FiQvxXirNTuFa6mvEag",
  "key6": "jbr4rcgFCxGZgC72UnWoKok26nNegoYPM1kQKhjz9tkcEZbkDeAWYv5o5M8TgD3o2YZUtMryF6feuj7DFLHLZmg",
  "key7": "4zDZy82Ap4uvhLVfKSvuCSdNHXF8ykJPUoMS2a9AJZxBCcUZKRqYk6suS7HYwDXv4U5JNG3kmUnjbodDxRSfjzum",
  "key8": "2SizyeyXvVFAugT1QxTBNgGYeX2cKbtgLUqaNhnmk26GN4b9KtUwvJZbVKarpZc2BFa2x75kJmLvkoxZUtWk6x32",
  "key9": "bWYusxKK5bnaVgt1dgsvyiDXm3R55LLr9nydvMA383trf7jGApw9ASDyd5HW8YGHCAnQrMpBNe8kKvZbqytQ1X5",
  "key10": "9KNNkyKe3gbNZZC9hNSZCDP4nYPMRKnKCyAe35Yub4ZbHVa1y7hZ8pfUycFPfrjcduAcx32eQGAzvbPGRMDY6TX",
  "key11": "5q1GQoygYgZ4HdQZymeba6rFgVB2533YHwzNKxZ5VKTWff3oh62EJVWrGx1zsVK1ga648vVUwRnQozhauip1y9zq",
  "key12": "3dkPTgSe2jZatmNBN6TSMgywGYqej2QMWoUA9RdLz79pR2Q79Ssd7xzSmqvZrtaXc3TyXD4b8uzBwdMzefbnaEHv",
  "key13": "fvS8fMj5kj7ryYUAXjxPiEgJv7CsPhSahdTn79x4osERyZJHULXbf3jvMesDzsFNxcsqsiQ3vYA1UZDVP8hxCGE",
  "key14": "4CtNokmPq5L7qjBsbEjg42QVAwPSjbXTwij6Y5TkxmXNqGtcrisaJDi8UrE7VxedySBg57dG9zV8Dqbo94TLhFX8",
  "key15": "3JivZJSbdjpND8FgPW7mU5esrhiS2ViEG29hTDAT2ymzbQiEopFbw5cp8LznjMSFCFF5HuhMTgwsVoEE4QvJS122",
  "key16": "4dvWcYnvbgNVTBeMR3LSBMEcpRupV9GXsLvU3wcbhnK6JMygwV89aRcLupAPspLcXkyxH1gcebtwdjTuxrjcZX9W",
  "key17": "4Koax5JYuR4RPiAXhbPwksqMGLMqyGHcSyFqzi2vT8AEFCxRDEqaf8JwnaUtsAqjSYAPBXKbEKH2zMXCHAq78Tqs",
  "key18": "SAkfC1BCbv8d6Jn2cKPi6K7gfj53Wsaxy4cNEqcxEdk6pnzSRdC92iMPzdRnZsn586osUZsbde7X1GGuBGE1QDt",
  "key19": "5Ksy5RSfQ6TC2xj2RTLQPL2ycS25Zbgr4TSvnDc7ZnsuHH5sYi9AqZAbL1cgjvMoeaxeQQUhgtTPtMBYpcjgjzLY",
  "key20": "3yC1hj88qLSpUAxQM2vj67r4ETk1PUAk7o466WuBKKAmkkUHn9A3y2QvkykS2Cr8rRFutTNKr1C4mg1YMzkn5SXS",
  "key21": "2bvvLWMD2QzH9727b2zZcPANyPdDPwtmngh5Y4BaMwjSrMrn1cztmU1hQwcwWGWNM96w5ntmv5RXaNyuHorFhCkh",
  "key22": "3iAnoDnTz3ELFfj4BbA6XUgmo9FSLSNo21cb1LM7iq91gAUo3kzui66cMwGKtXNAYTxx3MoKqqJLrxWsJaFgFfD3",
  "key23": "53oYwRBmBht6qyLhYfh6vhswbit5tdAUS2rq18t6ntJLniRCyHPA5D4rYBYswjhozkeXsUvsPbG4AK9YmGxcWi3w",
  "key24": "2NNYrFGbRaRm4A9EDvsuSNBr9mwWw89wLrtZFR2ycPsEFnWKdxD1nTkHYgYVA77UaqX5Mh5NYVp73kNK8EuU2PZD",
  "key25": "2MUcvycqepTkFK884Qvw5WPpsST6e3S2CYGwgwBGHmi2KGNxV4YmoKKfqq73cxyrcAHMmZszRTDHL2BvamxBjpWz",
  "key26": "9MAg8fVz6BdTnGbKmreGUr8H8rjvW5CSyGZsQa1yptLj1MHtb8iFiyc68joY7irUx1vWFjhk3Hy7MSRb6fDjEHi",
  "key27": "zvHaMhiJmedkwUS4A2QNhybiUHoDmTYK3GNvbHa7ioCA5Wr4t21NzZSrh9CSUdvYrrdTbnf6G3hvDP3TBdDvLNG",
  "key28": "4FCXLXnWXuXJpBpsjahRbW4nFaNt6sR9Qba3SicmxJh97aevBXnP2vy925KPYmK1nS24e9hiessEMB3QvphBP8mG",
  "key29": "3ykUzP2eLZpS3WeLxgyPxrPNrWPSsQ3EcyuwnDrEuU8eKHWExCL6UYcqwSuL64BJnmkMXnoEbQofos5iEeriVhgy",
  "key30": "2PdchiecYABUHSFBLSnsiWynfMR6x7uvCc499b7FHfkbt9cLTpNobxySr7Bq2ynB6GiUdoosHyJdxMLU91JJxrqC",
  "key31": "2bwETzk1UgAPLA1poBwjDdV9rQ6JcgJ8NKAq17ZP3S5YC9Bw7eT3ridWpwrU765nAN89N9vWGJXyA34EcRRKxZuN",
  "key32": "4Ye9Y7egZUUuvVVFKStoBswhWoHXXxeLbFyM2yzp23hHWGiEaR9oZHG87oTcWYjS1N81ohguBJmq2Ep9teQKx1rr"
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
