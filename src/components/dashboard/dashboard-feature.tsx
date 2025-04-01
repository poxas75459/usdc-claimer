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
    "4GgZGqzCA7GUYosbnSRMecZE3UgLCrmbqMznNpgKY9NnubrUe8YYxPPjL6XS4pap7omgKcNQrDcoqzUVtjQCFxhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L6SSZ7jduuJmEsFAj9J83kuKtxzxC93SSKafywcBkvJNUsVZwV7iPQvLxFsqgQrvdxBk5KMA8Mq3TBXXm6ThAD4",
  "key1": "QuHeUV8pnpnnrp7a5NVJnym6hdEaXh2BNv8NEtL7q6ZbYA7EfuyuVfrsrArVXACG6RbULfJL4cwCQDdULq2qjM4",
  "key2": "4FyaB7qyJtRp6w2KY3GBPP51c5gqZYptBXDHWEcEAUw1Do7VRa3sso3BVtmUKPDbqQScMXxqzydm2H2EyuUexhZG",
  "key3": "4Fvf37uRdCGsu8ENFPsLNPg9XKTisi46uSZHHFupuE94h9BZmPwieY2pi67PgissfoNhD4NDxaBYcbZco6zNomH3",
  "key4": "2wXKjcmpykkeKF3M3k6kzk4osrQxq6uzXu7qnLXGKzqjkTNXNcEqyUFi5vQyFjpRxv26fnb5sbWuX2g6uVnNRko5",
  "key5": "61gBtXrTPTovMkgz6RNBxA94eq8NcSrMQPAE9mrz2Wksrwfy2Dy9rcMtPoSQKqvcNH7UZbk5vQeFPgUYNX6i3nkE",
  "key6": "4wwfzdqNKWAkpXSsnAA5PzpMtY5kCSxTfsz9aj2kg4fkc8SYfpkCi3XZ5BThXdNzD34fF2Z1nVMe3CyHNRWqHh7p",
  "key7": "4s3aPNHYu9hgd6HSNeftWC1zhfxPrD9CYcu2BaxU3j1d56sTLLXQwUBpJzDEskwFfks7QEGWDaQR4k31nr9Nr9W9",
  "key8": "3cpDidFCwKviZN4vBqwZZP7ubx9C7AYyiQci1KJU3iDHQXo14Ur86KsFdvGtbdSHRXNvE82CcjxWqvuZPqSvpnEf",
  "key9": "xTKQysQNBKHmGz4XkYEYYgwGz7g1JV4xjnd5vxJg9k8pz7B7bLs82UwKKVVV98JTxeWyekLbiqmd5vnNvu59B8X",
  "key10": "41V5prEd1BPKbiNStpDdM4roje1dVrpyBCVcjC7kwZ3JX2F2r87uaEaHj5mxQL67DPXxRweQdFitKAk7xS7zojyH",
  "key11": "DWZuBe9BdNJR7P2zSnmoY8GTJkKpXCCuck6ABg5XYdLpJG5HEFmBuvV2AL82GgpqvrPsaUhM8NgYgbAEKqg2GPK",
  "key12": "2RzBhCqGmZ8ZkuYeZgQNEBZwU1rs9z6XzFhrLontaWZtVysM7t9wv1Y1L56v9EjKWhoeEcTqWiHU8adXf1qWCeMG",
  "key13": "tujW3P7Gru1ikVQvqXPkLhVxHNUcSd7NzkA6fJ9pNXLb2K1PBAYp2JNVn7kMoAtaFYeqiFNMSUZr233P4udPRLQ",
  "key14": "3M1Jde7zgiq2jkQFwfqBeKaCczvU5XWCuaheJYFWe8GCMVgTwbgFpXuqDipCnW8qXUX3SpCyjKNM97ufMwaxbbXA",
  "key15": "2zTTcTjyX2HnVf7xCmXsGzrBhbQEfVPrVdaxxFbSPUTv9iDKncxLBR9eD1VjjwtZT81gXYEHUTnqCJqWF2rFHfL7",
  "key16": "4Yz6Su3VcdbsPTpw55wadLRRLdLtpTAExuMp5nDigmvNhjSCEQ4ick4oXAQPGBjzEWfq1WQTfGFPsGZfZDWEKvbE",
  "key17": "3oumics1cYruL2S2CiwDV6iFn5Ph9JfEeMs1QFsYNb8bYVeFUhM4riKJZcnWpeTJxhXeYViasGGWpxszyv3XpR3W",
  "key18": "hLqXFKo1BFKPS1o4Pidt6X7p4iyzHsXGsStsFycrHbTgEvD3dZ5juZ3nE9WAkYtkXmHnPycDDhTZhBH5BZ1jETb",
  "key19": "2dMJ2KTLYoDPvpA24788cqWb4NwQkKgABMhkvRvT75i5vy728TkxWDmdWYBDNW8GG7A8BQvCz2ibwxiWPec55Jco",
  "key20": "5tf8RzigozfkkhftfE1FPssiHFvuQHcb3mq1sQoZMZBDRqFogejXk8SvVHH4gr5iMcDZLgC8mcZHpa1omHkmnVSg",
  "key21": "3kdAzspKEGvYN81TiHwpedf5wwgPBees5jS9pZaRiiSkQXcAFeBL5TJvSgEziqEUCShMDVVBwmeZaLfDANmLw1RY",
  "key22": "43XMWJFqfNhX617fhZtP9gD5PJHAGy25Z7FLaYbzi5X9hkQvByS4NQs8Ycd6y26oAcqo5vn4grRXJVPgseFkg6z4",
  "key23": "HwKc4VtV6RacvVLNunJFVZ4bHZnHpaer2JTMnPyzRN2NX4BcKuwiZK257BwhCg6JD43Jtta979NHLqca8rj8PCu",
  "key24": "5KdAPeoQLa6QKssaTjUsGjUgwQ8sXj7cAZZrBUaMv6MSKLivG7B3zr8TtJR11z943dFZU3cthTXtga1n1PQ486Kj",
  "key25": "2VFr1PQjsuwRYabUb24dghiiENEZoVxX342xPpZvEYVFvAnsSKdyGuK3vexDswj1n7Dd1rh2Ca6JkrBnyuzjPnPB",
  "key26": "4CHmNyqUGUvzxyyTAuLj9CDUVbTvFDPLZULbzshw8q9deDgGVY6xTsjbDcTyPAMGijLvdaaxiAkRmmDqb7429n8o",
  "key27": "4LHb9N8V8iGUq4VE6ye4Am7qHkT3zDqetKS98Uh3XXyVpGc8TcbTQ6euML9Y3itEHZf6n6s8Uaa5kkwd5A4iyLq9",
  "key28": "5ZNxrc5PaEvZDWphC3G66PLXjfbonQgA7PAtrgzmT5ujBGkcmWX5xo5FgfGTRfY87vUXhh3YRy2mY28k8u68FYHa",
  "key29": "4byUKtFxFsPEAnaZW8i4BTMVkoBVW9PGfwQfp9puDorSk8reCoMdjJV25kRdAMQ2ckLfCxWpKgWy6B9gW4FCkRQn",
  "key30": "2q7kmoN6LkYddnxYEDThTftXqUDQArc7ZNYRZUAPi95ePpVNLzxbYUL8JeYwMbpsxMVdYjhXdVGLtgVzb5oQoiZt",
  "key31": "3UDNG3nxH7x1TiVVd9LmyUdHMSPBnvtLX879U6tMd2kjptRKCBfDPoEMrKZNARWw2PiEsK4v3hpD1USAoW3khZPm",
  "key32": "61Ar3UxgZGcK71G9JyGygbjRrHMSePGbfEkqKCCi77Vk3grnN2Yc8GtRaNUN1fHwZGWq85zdUqXG8Ea2PYrG7YG3",
  "key33": "4SBuhg7iNmp88yXiW7Eh5QJRcC3K9atd3CMd8gJZBtp38Hqnza6VcXsFhKrGzn4XfkExQ84swxMW76XpVCT9k6cE",
  "key34": "5zDhbncxMD3a7LjZMhaM672A42PiHEU5hnbirCrDLFFYPXZaM5axAt8e7sN5jDZAVj7RQEPkkQtAPevPgbFF3irc",
  "key35": "5pbqWfGAfDSMdVU5B7eXesBEJym3RE7zM8ef128qLxZusctZfAUWgeQsh8BiQVzzsgSbH5yC4m5ErWmmLvV8J8MK",
  "key36": "5BPKqwm6ixmSZknDijed9X2gZhSjfPssGgv164TT69KDnEsMZ5hDpUmpJipCMS6Cdg56ogQzH8rhL1ZZgcfPRk7J",
  "key37": "23niavetxVBidzgCWvZpU7HoJpzU3rD5bbxGKVND4JjHJGD7haQHFZjXUxoWF6rdKerJTgwsKZJn9UANv3GCUfwJ",
  "key38": "5vi1ens44PbtrfELYZCEpWn4ZpSvGYyveEdexJU1LYPrwukCUFxA9R6yFLhCw2gfEAoXYv596P2pfQjCVwrbGpE5",
  "key39": "3SLc5Jxoqy74oEFeivLaVVvf93s4vhFLQvF3sDpeJLPzeUXvtmxzXsjcEmm7AHxS9rSCMS5ckfLV1Ab1aXUiZon2",
  "key40": "23Zp5umozkqEBEQbZ5SQAKHGwy5iQoKwFP2yXDsBi3QFzHZ1w8GGdEL4E1rDmRZFF9PKCjphEmiuPTjrDbJWyovZ",
  "key41": "3AKAvMoM8JMT8N1cdyhnoDSDL7uer8UsWdrRe9uqppZGtLKYvDsKeDVuxCZMydzKbTPBb7AaabGSDGMpk1StdGVz",
  "key42": "5fK9s11vBgkrWdih1jvbMBiy8WSsX42fMFQcifPzkTENoaaEVudoyM359BdfmssUaZzsgFUJFso5KjkaiCH6rJbi",
  "key43": "uT4G7PHo3c9Yv2mRSGniueWchz3pTpokRCoKKknmv35EMFF4ofkvyXmX64AfGHik9vHvkgRax3arwJidCqztUP8",
  "key44": "rXwP4gWz48qgNMdU2mhUkNNhFUhZP9VDgRjn7zeyKMPgB2m3ZtRHnTo2Jo6gzSopANgicNBHrnd5yfPBcXkfJAy",
  "key45": "4u2zrzBKBL3Wxctgvtyrj5mGzdR2TYNSxj9WjLrxMp72dCgxFgd4erYcYxUhoJcWMSTzS3dnw1vJRv2FZcc75PEH",
  "key46": "66ArLyP667GShHAfDHqiso17rR1xZ3R9mWEMF1oJFwwLWwXRoE8fbvezUkedRZ7LK44ECGcw5XGDBbspqJkYEoZ3"
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
