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
    "UvxParCswvN4AGuPo3vZqFKoACLxhn3NBqjcJ78NRrLC2t9eK4jDYnHSjoPXGGZ9o2wrL5HLvp4bc9f7xYXCH6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41vBDKrzXNhqyVJ9SqfJRmr4jzpNcHzoJCsoyA26Mntwau3U8HKtANt3DEMQmesmQTC7V9DVvBSp7ewcctg6Ea43",
  "key1": "3hSpnLqvj8gmaooP5kwyH2PtGbP6qDZyg36TyLqjQ1ntpgU6GLVLLEtJSm1SRWyerJNt8iZAfHd2NPHqB8aZVAkS",
  "key2": "53YJFGgYG9spwdstVVYdCfV296jDhJiXB5nohRHHbBPsBtjnX9r8KiW8H9vmURPh4spkooXzLEtK1iUWs6s4iBmZ",
  "key3": "4L36roRMdAN6Pq9zBqzxc5dyaN4TmHSHAmUZ32tpu2PNrnUwkeunFmK8d7ebTBGJLxxgdtDcxznjbSRU1RPiawxc",
  "key4": "5ixbxdozbRur8iqep1SQGhF4mvFcmfNRPdU2a3HXJWCbNSgC4HFUyH3skPk5pQ8YUrbwpFJ6GnBJhpyTA5aLkhJe",
  "key5": "5nMwWjuByy7qgEA9WtE2VQTDGaUDwcCnZST2LpHG22eejupYb4imkS35k4tg67mpExWerhmYWxg5dY8W49SfMQT",
  "key6": "9sv9GogQvn3t2Zjo5cSG5X8ofnNDfPTzspPH3BstWS5MTY2zZVbx1v9XN71BNgEPAptLmX4gXYhbKndFUdVSNq6",
  "key7": "3YwyEzgoTaPrZdPb4S3VApW2hsPgBd4PrBhAz38YggzDmACxUwLTNcbnreEE9Lc8jx6sMHLYzFnJWyeQPkJLPbBN",
  "key8": "2G1u9cQCf3UgJJNuAQDDzxpg4zmumrDw4qkvv2gTPwgPNggz8DHHs2VUnHZBvWwkG9YZ8rDxqGQNxCCxwkALDexg",
  "key9": "stYj5uk4cvxsgyALSkevvizCNafnd75q5ACJaDLUdTVNn8QJY2jSmFrwEpaFnch3jXPdoddM92s4YuSTNEKveSp",
  "key10": "5md7HjZweQViJT4q3ufy1jjvwXsvHjWamWTWnW4q62YmvEtKA31ur6KnXpxVn4Ghj7Pybg7k52GQoZZBvjUjBa6d",
  "key11": "23D9GnEuqTVydh2VVVyjaS2hgdikRxCGbjb9Aj7eNy2y4fk7uyXuFqc11kQD75jSqHSnUsM1mrjzcKcMf3nN1yNi",
  "key12": "46XpeTREnq29nYRysN8XYcLTLisPWRgoSshm7H8UbMUpj8AywZkKbPhALgDxKX3kcfqijsmguU9jSMry7W2PAgCD",
  "key13": "3omdhM4kALVjxq91hBG2aQ5Aexnox8pPGkPP5oAUHmUWn4zbJS7vhcCYAyWwU4yEMDzbDjLRbwZCG1yg8EuZFSVv",
  "key14": "3WPno2VcYKdYQE5qudfvEB4zFStBsjpRuzKPaZTQZffudiWogHPrkF9zG3LeFuudv86g44APrbBuvczko31ckpGs",
  "key15": "4f78MPxFnUmQGM1g9M7SgL7ip2k2mHygNGmLQQGmHePSExh5XFFcLzc67TsfabJAzt8D3GYsnkfRawhofyG3JuqB",
  "key16": "36fPYTC4yN2s2GorCvWtzGook8dmXCZP1XLJKGB987E9FtkLvF1TwHXsfsTjiAPgfPnSB8Hva8FhDusSpGLHFLCh",
  "key17": "2dPXf4bbzJK7ThVkLbhTUHBNLDXmfJSjeDwCE4ceqqMU2LFho4c7wYSWJo8DDma9AXHVCnRgKYRfpAWDpLStaosL",
  "key18": "4ZiA1bjqjuRNUGgffhUi5rf9tS5QxskovZpWxTG43uRYdHbFoddThnvHfKrwtf35emJ9kunr9ns72hMtawy3Jemp",
  "key19": "57ue7FSJrzXZPE3rt31STcxU52rnxAcqJBxHNoSfRWYi2E6GyMYSeWxxZge5zWE3EAtjhNYosLKDdhxTXBpASh3f",
  "key20": "3zT7NagwRYwyQxihj2ZGyaU4VMeYkBD1KqvcqQwxYDcijX7B8VrP6dTYkQvjbPf1HPPNBpgQRL19oXc5Sth8kfx6",
  "key21": "2JfURsVyeU8DUdr8RfJJV3oEP8yyU9sgy6DdXjrQFxm4nALqbT9hLiHQxjmN9Eo865piQzLQQhjL17M8VxAXssMz",
  "key22": "4CUkWnqKrPdUbHKMJYP5VgNMpB9zmDxgDGyq6qbyReFsvejuoymHReP6eB74iZia3iou7kkPbRDDkwCK9U4uJdQA",
  "key23": "2XXodTNFEHufEAQ4xHJ8xohPJt2GduoALQRjqPZ3GzFx1yP9kmC5iwTUNQJfrNWUEtWcjL8QnEnTQxuYeyxxwhQT",
  "key24": "25c796dnJ61EnfDe2rJu44xiYWXGbsRMHcpNhRohtvctUN9s7BmN2hAkmPMgXjTomGiHzJAg3pno72FB2HRuZJ13",
  "key25": "457uXfkktHtoDHk19wxQBEy1zMZZek3Ke93f56H2FFa4KobsvJyouoasrLTfYCPpKUmq2mypxE6pdZ273cvvE8fe",
  "key26": "2zVsyXpsjZmP2pcBH2gdF1rp4NEbTME3f81B7rWq235Fv8mfmKJ8UkLjWpvWrT1mjG8whzZWhcxdKugfi763zQR",
  "key27": "4DXZWrGVBcd7RxwLrVakXpo6vDAvXZN9rmeqnQftdUrjfM1qVaJEkRNNwBcMBFzUpLT6m1WK7dK58yLQTbzoMpVt",
  "key28": "2Re176bUu8LpGcKGCvz5vQy3UXhXpE9SwsjAo4saAVHqVFNs4r68tphyuF95Ud8cZJDStcPsEsgQnUi6K1FcJcqs",
  "key29": "58EKrjYFvUYt2KgtmBdeTf9KQKnz3TaVj1G6YxayFTRQxJehzLjSwHQcgm1uLp49vneFMhX5WohRZ9iSoc22zXfV",
  "key30": "4tip5ff7DXbi1iNnDvxJFG5RNKTpT9uH5ayMwBbTtS9NeMCt1W2EzyKW2NqKEkV6mtGs6b4GcLgZqV6tVXRUQw2L",
  "key31": "PR8zktAQNpSSmBqmrU1sJVQ6bzZ5WYv9rTY84WPVu7xZYYsAqoKKbtbuGfDJkPjws9o4RCTMunkaEg8HjcXDNh5",
  "key32": "3azyppC5i4Pn6FUgnMLwdHXHhi21maDXQgnmAE54sSZrXuyvLtX95jzQzSBTtFP1FPxD6vCJhJVqhMZ3a562Vr19",
  "key33": "dnEjtU4KQHec2nRWjJgDG3X4XHefM2bYyZCstEqc6inzy6wzKb5zTKozAzcXNW1u7yDS8dKWdJaJuhkkz6Y1Su2",
  "key34": "3bPqaQypLe5n2PxbgKJCTiY7vHV9oapwhUiHDvvg8b3ra4qchvDumrBuvPcW9m1ndGqAfarDeeEueR6ngYD1YDuy"
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
