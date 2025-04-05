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
    "278MrmfJftsNcLkri779Q8dhpkgQoA3HjTsBz4UDPTD6zNEWU4TzGWNS1npz8jUXXbUYhsiJvigsbHhSSk3X5ubF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Quykx2JdL5cQK39zk8WyoJtgzwkWT1jSFYbsGeKxjiE9EQfgez1qmej6hpWPDusbhss7x1VjtEjvGa76io7Kjn9",
  "key1": "ixbQq9zst43pEjb2hQ6z3mQ9u8ffEXDXqVb3nZiLn1SEScPXnmYRgNJYDpjFzrkkE2YYTYJe916tp8yV2DVkkfm",
  "key2": "rAZQeM1GA3TMZPY3uLQav2iVuiz9NsyGbDFJppazMUTreG8qPsBCG3XayejJKbCrPk5mdj1cAwcwLXpmV9QyTkN",
  "key3": "3tbG5NC14kcNJBGH7ejbTMuhiJBAwEHxRhyhMFmKjmWTkKMH8o8vuYcbyABp35AbT2adUpfsHpSNBXJXriB7WAi3",
  "key4": "3yoMcB4YV4mp9Vnb1M1iKYGKMukQBfHGLRqT26Q4eE41uRauoAW54iZRse4cL23zXkv8Tu6UoxUeMoxU1MeCv7Pa",
  "key5": "3uEgKMNUaFM4smQZPQdPP8vApjVtgFEjyEBG1kycEPhPh6xQeUYZTPP6oqTNDTXTnTJDrjZy6MtFpb3Bb7uSbdLG",
  "key6": "HXQJXoxXmBTe5Yc7HX6CB84WQfyJiZzCsb5FxdNMi8Djxx1cbZd5o77pxAXe3pqLsfn1pJrttZER9XvWH6koDrf",
  "key7": "M6Bqh3HYnsdfPJeWgQBh2GgacgxS2ug6Y6SHXT7dajVNz9EP46Ry4bj2w8VqUpWV2mrJCjynyp4MrQ2V6ovAsMy",
  "key8": "5bpGiiyidKR9y36CoMRExnfjFp4TVagqvte5oyZRJkcteb3wSufTdWsYrN9CBovKHeawV4nsiX3vEZjJjiub9ybx",
  "key9": "4ioPQGd1qXkUa98LhfpUEgxzALYDiz7e5JELcRmixZSNRZ8xxsQmqJd3ozDUMpU3T6B63oC7mwRX5EfqhYNgKi8Y",
  "key10": "3gp9QX6NHQLneUEPi6VWrRHcHckmoo62bz9TdX3L2yhSZ5SRQhKeanT3WV4Z7prwo56UCDyVaCH1tBM9QuRvm2oE",
  "key11": "5uUzUkibtnWh2ozKU6ASwuU4GsoLvxz92DncFKfeTXs925aJjSHYSE6GsUWJuTwhgWoJPXv9FZ2gDEv1jtZbvgNP",
  "key12": "X6BfZiUgJyVxCCu13QzLz7cMQ9oShjP4hqQUKZEyascZB13SPX7DCpkcSXSANRmPszcn8KepsoApwa9zXzxTsVF",
  "key13": "44fR66kdzHXQxS5qzhQuAXCj15LrdFUkpqN9yWHx41Lg6817rRPrLkEhU8NdWPTe9KBhqe23furjdAbNXsUPcK3s",
  "key14": "4ZM6nyBffXiEV5DqBX7EMCxuyJYrUTquLaPGYZZ8wMLZo8asQo17L3LgL9KqMQ3kGLMMD5xn4iSPj6MMHEdjEn64",
  "key15": "m5jSMiuFAygEmghvsmaX9bUBVbN9qndEvffospH3h9HgvzJgtVuxECBjf74mTo7giEE8oQkAh2Ng9CGCy7RLftc",
  "key16": "4LwTuPGwebXvEqdqfNxNdjNcAwoUVEdMwrf8CZRaMXN7i3E69VYeLoscLCPm2PXjG5oJrJT3ucFowBPxpn78ptBL",
  "key17": "V8AA2HGMHzygQeY4mxsQqK4ZywR7BrBdZ5p5C723cMZ567Wuuer3wYgawy5WbjDniacxU9q7jcJ1TRkazGGYWbf",
  "key18": "4B6xX898icDcmNZEpVYWs1CtdTUJcKyBjBYV6uDQSN57VpEiGhT11DKjB6V1oZ8hSwsVeLBADaySGnbp3SQbZtvi",
  "key19": "2qtd7F4s23GY1TrnEnxEd1ExYeg2SvYpWJ3hDuz3jNVNzZhHQH7c9J63tPKpZRxHvy1NGqZQvviqqYp1Gsk3yxXn",
  "key20": "2Vg3LoJHFFi8ftUHhK1of8qw1X4f1CtwrB6UwP9vyoUZLWPq9aBqVvsxJo52nNvhqaZ4CaFP287BB54U71SunDgT",
  "key21": "2k6KpBRNWgDh2e5q5Qfy3FhJaLW8kqko9YrvHFuwgV6G5eqLmx4Y2vjutnvp7PEzpdmzeFAwrkF2N7VBZKUPHxH7",
  "key22": "JR7z1AaZFfBug3brktBdwxddRjYpAWGs4P3v36wkcY1skiHJ6NYuTCRgPoevQHo92pTzrNjDwJWMsDpUd67swtA",
  "key23": "2RVanjaQbjbDNsGgG5QuXWTYsXnBTamt9pik8S6Hs9Cixr5bhazbU9dGevcPnso5vXm9NEEzL8j7UhUgevUcGBg",
  "key24": "m2X2yfENrywdcgMbCUBfMx8qxduipQwnRAsdn7t26RpjCN2jm6xbXw8CWKGGxCHi9ojzBx9z4ZdcaDj5E28WZry",
  "key25": "5jMLiF9A3MRH8WLuLA3pduJsZLKrhVCN71DzdGptA9cZoQAZ6Yrm4F1tWaXcuLzv6hB1dBE7XoF8Hn4xPj1Tbxvk",
  "key26": "3dGrM3xR8xr8pdDhSKJKr1cgeFuE3TAu8MrWY5JRJnEGAccgVuFcKxVTRM7tqD1ooWMxobfDbof4bD3GBoiLymix",
  "key27": "3fJ4dpDSfb4w9uNojbUfFffEe66QaG8pQ8WfZ8hZuhrfBvij6EhHSS2Bo2m7jAoBszKJt9ZJZ9jkibopt76XzuHh",
  "key28": "5eNCovN82v3Q6ZAGyNqYJNu2eFAqG1L2aW4e1LprMEK48nKRw5ovbwJoUNdV5yuM89Df9y3CCzZx8V8sqzDcsGYz",
  "key29": "5BQo4iERnviUSEW1adaXHQhTP1zWP3jRsW1eXdUCxbmtyVPdj872iiEcDhPPqW9MMD8oY4GXCWYsEGj97WzuFjgs",
  "key30": "4Xogfmu9i21KjmW3bYPZELXudztwaRKR1V7RqFhCLaVS6Jtrc2t4BKBid8epdx6BiizwWyBJa18UG8AXTTWoZjFX",
  "key31": "2VCiuAKr34Ei5RKiHCokoQErofLbDDZY7iMNRN8nVHb4HJC8DwxHa7MWtQ8dePN4vpjnpe1Ximc2LefPTwPmArDg",
  "key32": "3LpLacRTG9QXvcBspnDGuZUu3SDipsPTsNerLs6gh6f7qPQPsJS665iXGdaQH54DAhtw4EpmjodMnCqBCcq1MNXz",
  "key33": "S1t69it3uJdP4ovBPMLJmo1Bv5codGm3xNPFD6YzAym2citSmC3XqwkMi6Nndk9pjQwFrDqJLdiJxUS2o46cqKf",
  "key34": "7TfAfJRxoX6ju9FBZHYobPsbBrkRXUjWGaPefravd2KeDrNz2eAdjSnTcWLXv8KGh33mRtpoQaXfE6QUNp1TwJh",
  "key35": "3F6X77b2VfuQhnxQWyY7XGxGXF62o8AwfucG5Y3vQ5U3cp2hiWrFdNoR6eSrJubE2SQcetHABaHLhLPy6vGus75G",
  "key36": "2nczJnSdRecEc3mv74yA7T78vKKknMfbTNKE6wvpXz1dJYygLUkQtrKYSxjXLwHSCu4AT4H44pVJ49QqsRK14qEG",
  "key37": "35W1xnZWTNe7NBE1bNVQUJVKzYTTWvXLc8EE5AZhtdaNn2izrNDG6JhEg4wo9uKfhxqCUcAdAyhcNGdiPXxMABYS",
  "key38": "3YZFEnzDTsxAHg4gB4ac7kwyyS2okCc9yLzGnUG1o9LRCgqfyp2rXJ5Wwe15C5qidsfhm3ptg8ewSRuMjp3T4jP1",
  "key39": "5gGUVXmWxTZNtogB5fjCELmBg1jrU875kqrh1n4rwB6CnFqEzfBY8yugUdaiPAk6SYjd2ij8nsZanP5K1j8PmpaV",
  "key40": "vUH7AFBtrwpC6exZFsuMMVQGMQyZkyyofAkqNUsnG2xw6dsK969vVfwRE4m1SRJKkmmHw99fkdw7CaCk61K3tWg"
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
