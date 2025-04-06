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
    "46hyhLPejvF7PchqUouH1XQqfMyxx8e8qnsubaY7z8tqKaQWJm7GkUCfhyarAjiTDAwLmYqJtmBQUb8f9BNfG6Mb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lwybb1vFL4YDhMU4iB4urabyPa2dAXMidiMbt4HgoUJ8pLbvXb1aLZjca3YPCW5drJ5bPSKvucDp8qMFLdGJsU1",
  "key1": "4aiSRLUExPqdQFrodXqW3Lc1ac9uvgW5bWU7uLesGqeADfEyHceiTCEpYNUBBZvvmpQVN4wwEVnnFGchUcYTQd9F",
  "key2": "5TkbDUE5SQFD2xZfNrQ3GHoNDckQTAat3aDtcPg6YEiPdqJ3KgXZ5UGSQAGkoLCuUSdvnKL3EgQxQhNLAM4qVZks",
  "key3": "VHJUBTojKLGQ1BH82SJFjVrKw7H6AW7xJVdA6ejCw1gF7DvsDf9EJatgWazRDHDXKTzNVWTcoXD2CjVNvWmdMg7",
  "key4": "TEY92J5ikYNYHVJA6LUaK31bY7uksnSoyZn2dekfqbdW6rJonfuYeArwNK92k7skZPKDCBmuuSXsjav1QqyKXkB",
  "key5": "3e2Gvn4WDyPvPyvnPZrb9pE9QMyeKmM8oKXa5bdU9VfPiBmXiYNsRkERvTspcHbYvAYuxjKt26uFYoczFVM2FL1Q",
  "key6": "3w6gcoXxDa7Q4KKGmj9qV25JhiKHShb6FTf1eDE93NU1QKi8PChiGhEwAbgTd9fsiqwonmQa8dCcVzmr3eHVfTY5",
  "key7": "qzWMG1SzPBr2wrANTStWHmGvV23fi1pVxNufcDHCUShR6Vi6ELW9etV1UtUnmtz36b6mjiZLEkEHihDHHNnKC23",
  "key8": "3zffBbp8GtGR4uRtT8qx7quBgRMmtPE7icmnepWeXvLg5NpiM9UUBV4fUe8JWEMeR61tFGpPU1PxrnRihKDpPuR6",
  "key9": "zZnqm2GQPPb29TMsMVrnNajcPAAk2Ghosi4bHhgA5x9KZD3Yf3f5mg1EW8BjfezYG86CHFSQkEVPwa3mtLSqXec",
  "key10": "5PSbm3432uHqUFXMCqczvNLnXMJV7gjUXoqFtmsJ67BnMzv7diLW2dzrLYR8ddVMU3LMDV94Dj34XcaHHkKezZyY",
  "key11": "2yZiJ6DJtm4tKfEkQLcCkJR1DZ1Q8531hHA1L9RdygP29Luhu9txcgGDWSTPaGG5mWqQKzMPsyihmmG38y2Vx7xE",
  "key12": "3RC8TkBogeBKwRRNjzCiR6rhdQh3avXbTXtpBydxvd9d4zaBzjKsibo4WQMzPJWDVM3oaB3xRrunLCij9kcLnFsf",
  "key13": "6zy15FHYdKMqncBDAnXwZAkiBBTEx29ZDGmqd63tdzpk1KqfZB8FK8JB11eeoWdpYyFCpJgBfDvAf5PAWhB72tv",
  "key14": "ZmtViqpTqhgnuQJpC8nChK7MQjJQ4MwdD9CQCG9nL1DmBWc23TMacgYd72i6KjAXoRttuVxjS7m2Qi1FMBQLMMo",
  "key15": "4br8upmQJ4CWcjWdN5Jvf6qnLCJmWmF7hUyufqrGWhe1fhp7PQ6c4baDPSyF9PUNhgsAkmX3266JkzytRshF1XmN",
  "key16": "5JbXgcV2Ppu2ZNeFSXwXzukTZ5cjYHMQpovss6LuXofjHJSA4LHhUeaJu8rkiqwgiVK5QcztNicRN8AAYsoW3FAq",
  "key17": "5Q7swJQvHRCF7UtqcrQjJEvJN9TDDs2e2L2WqnucNZZTiABvUUvnmnR4AVWvxfR1eStX3URq16UQZacbWNZsxxbb",
  "key18": "3oDWBpzQhAfyaQuiKdHu5LLRBiwLKMJnZCsTpe2AN4GEMCxXjLPXf4ojswD7vm3Dn9fiAYN2TvJLw7dXD6cGrLVU",
  "key19": "2bhNDeCTbBThfFWSqr9CmaAq5y9tAXGCk39XAfGeuhKY1xxmBfzoHog6JfnJBcdVKz1CVivQ3LwUJSr2GJwyJV1B",
  "key20": "ipK9gmWW52hhEVKMbd6X6e9iaLBkkq9XyRF3foDbapuwayGUcNYybdXEmh99uPfwJYJgkn4RoSmxqsg5iWgcNKc",
  "key21": "5HGVSjSJsHrw2Vsmx8SM98QnX5xJoe24ohjWrXcrxWD642XLBZchHhpLgFf5oK3ArdWMbdKpS91Zhvcp4VR9NfV6",
  "key22": "5g2iifYmNR4DpqwpqzJ8eAHxe9skMRfgvQ9YsSq1HUj8idTc6ZGQFnXpJbmbYSyw7Jw69yT2XpVLn7eenbpJWG7w",
  "key23": "4jLpjKnKL42CVvyU6GDzJEJNVSe9E5yruDQaUi4RNTLSFhqC3bU8GdgqYMGPoxDxq1jUoARfZ2CEvRRRZo3XVoFo",
  "key24": "rhTgXRGUYGEEG68S6Bh5GebkYCgS5WhstXfczhFZs673wiNZrN5kqu2m9xzpJMxyshapHaAUsGwL9dQSuGKj6r5",
  "key25": "5vVdzFeJ6LpabEq7A9tEZF1j5dy9qQQEusndQGL6mkxruAnt8hb7xmcHRGMLv8JSNKR66LbJ8XwZLXATPzc9cGeT",
  "key26": "2sfWd4ETqbmCXXK3oSHfhRD4SEu63Z28dCKS2yqWeJTYCGDuKirnddhscVtDpsTpBg2YNbfE5YajiuN1kfMANfRX",
  "key27": "5uDmktdF5m1wSsvYScG7MJSepoTQZLREKJYLbEMsa8CEV4U1MGKjraNj5pg897TEf3LJDUDr3oV6zqCHAfZiNGTW",
  "key28": "3P8pQMsJKT4UMWMmYtbFYdPcPRk3119hvZMnitMHcTQ4qC1jSTkGcNkpD5sFFKX4na25XDtuJrY1iPrs6SCSmwr1",
  "key29": "4SX7yrAP68tB2sj4oBzx4aP8zLkqeFov1WcGEb2pAvqxGi9ErGQjR21n4c13jvci9KLkRE3oqx2RKzrTS1hpx7gE",
  "key30": "4Pzw8cmJFT9SQE1Wfq4DHU67Q6jmkaBjh2h79yLHSTmxWnMngceu5v9rJ3z3ruWkhFAsdbsg4TvSYpJEDc9MC1P4",
  "key31": "2iyh1wn8R6PDtCdRsyiyss9RsQCNii47txg9svhfGu91Aeu3v6HAVBKuEQd4oEo7zwmyN8mDQucJvKwKTWUiXrLm",
  "key32": "4qvhR5T1w2LcYYQAw13ug3cUTZTCzjiHTEfQJbZRzVeRfgzEjK7HTqQduiVSyVMjRoHrpmxu8ourQdo6nLX7DUTb",
  "key33": "5PdmA99AdLrjmwR3gks8AAMDEAqswW2seWehWgx7GjCLnWvQthFBjJz7PKyudYo2Yn4H4cP9R9hwmWyhX8WbrJNu",
  "key34": "4Rdc7xsXDuqdi2seGVjqJaRnspyiw9yQ8stsRpbWHZijyH1pEgNbJR6HWfGd444ten7eiuToRXhxJ3U84t8mKkMt",
  "key35": "5A3jfM7nijvAiXM8RdWcR3kYFg2DdMq5mrbLNz9Bj3RrEw4NXZmgg9tPcvQNZTNj8hrrxyHveQsow3aqgzRVUDa2",
  "key36": "5N2gvkTPjEkBp62HSt4TbeV5rbtCDbnHGKSFYFNwLZD5YRrZH4FQ4nwQW8Bmf6DfR2NjYaYvEyyQhL1ZerpiJpHu",
  "key37": "oYMEKw4KuArmvK28jZzcGPYcTeW4QNZC2rzp7wtNfYbF1E3jrqEKQrnxkr3iEeL83kNo7fmzGXjoTEdmEobk2Rn",
  "key38": "36VAUZpxdmpGN6X3Z5RdSGJZoeNCT9nAKD68WtExAXhPsRpzCkJb2n5ihNxCbSZzpxFNCt6LjExdEmr3uwrqxp31",
  "key39": "2VZ8h2PCyeP1tHuaPWL6TLwHMjkzjQcs9dRjSg9FU9sEQXBjSvZ9wxH9RocCvPepc4Z9tCcA1Xyw46NTBnr69tGg",
  "key40": "6KtpDBRrvcFYPyNVY5KuTdKWFAsVumFgqHXDgWqyAmSUNSAHEzktCEWh5ousoscwadoDgaJdzuFPNdrcmkFB53B"
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
