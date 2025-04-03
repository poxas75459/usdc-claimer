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
    "h7Htx79roTV6VHct7vhDQDXJW6z1YBMHDHu6JPYvYmoACvBUw1Hi2qKdG4Ho5CqW2npMpcNMq7DYRjDvnPz6AJM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YbgeJFkEpzE6Hg7GdgCVaYPdLt7QzqxdTa6XpwtC3u9bmpmERWBfLhhpFj8jJDRAHzQXyXruT8wogTGBTk9c51Q",
  "key1": "wRRB96c7dXdugBTkW1JdrJ8Gfzk5drW9ZG42ojLWghKJg5LoKnYHkLDwm8esMHWkXERgHp78gSjRpB8h1K3QzXU",
  "key2": "4gMX4EPLAbdvyiW3p4CiPYjkYf13gLEz2NYnQaSCesKBaM4MH9GpMs1CT9ZpQ96cdsH8YiPJzFSFc8Q1XjkJgDkR",
  "key3": "34BeZQkNbgRtQQuZJSJoCKuDWhHtuNUH23dDQiNf88fpdQsQt7WNy83HGBQHnYuKYn5HD6oZ4vCRqcTCL4ak29rv",
  "key4": "sVVAkgZLgKpyfGBgScaCeaz8Y5Tg45Vqr3G3t85QkmHnERek69YebAzTzLW54r6VvidyJCEyuhv3M117V4qXJ4W",
  "key5": "5oppU71atXHMXtw2RRTMvem86gJRgWtR1Kd8wCVfAm3Lmu7LiYFfTACw2KWG6pXxkEoyPBTvPmzfwZHKUVqpurLq",
  "key6": "5hYKpvndF1BXNr4C7jh8D3tjajpPAXQV4fQasFcqFSCwT9zy4nCWZu5XcWQtTr38jgadzJ2ZyGtgeADVtnyEYZSH",
  "key7": "39a1bkVvQ8TKYK3e9xoqJqYeWnyLptVrPqX1STCUMdYZ1YaZBT5gdx7y7FYtQekfcFVesdVCkBPZNdf5XkAZHxTH",
  "key8": "2BtDgjVFkh2bPaBLibmfMjvyphHJBVKyGQJG4L8KwfwDtuiBuqpxPxXF26fsYgiN2zuYgNEzYJWrgUUB5fxkpmov",
  "key9": "3i68Rnd4mwqYSKunxxvLyh7QJkxN8xD6A9z6nBrVk1KFy9VjonUSym9TTj9mepX7CR8ugfU4ZJRqMAbAc6mSMjT9",
  "key10": "ZocE17L5HcAjz5WE9PHgrzeWqL6V3FquZwgR7KM5mnbZBd352ozooBt1UXHiDgwBWznm5AAqtEdDEDhQCDDXZeb",
  "key11": "24LR1Lk57hENw3nSGEm8VHDzLZ2RFRtAMATJ2f6j1BHq5tdhK2UoxYFfnMVQ9jMdL3xH4d3Pf88vtQMbDWBpESCU",
  "key12": "tznE1kvPcvR7cc7xi59ciQ34EcERUs7RGoV4HeJL2bNApUJRrZLpXiD9k9agYmmBnuJtzBBSBde55oTMB8TjmqL",
  "key13": "5J1UX5Zgwi2nQ45XPVEkfqG297nx7PuHqQR1rm35LtMjKtVquVmYs3uhvaY65Eei2fdKp4EvD5tmFjWA8DdFZspK",
  "key14": "bmG8r9sLshKaCYf7LTm6CxdCicoV6oDCcura5aEDD2JHJkwGBBDVwVdgkPUFzV5zrJ69UmGhUntNNukcGUDkv2b",
  "key15": "5AoaXgBraC35FevKw74Dd1bPzXgizxvToT2k7zVgDQLpR46rx1EKySM27ZtQFZ116uw3SsCwLm1YCC5gZF7oygYy",
  "key16": "5kUkvNriDpR7nK1TqxXRRMhbmSpYgdQQuqhJop9wBBtWzkfFXpa3EaXnjTWczhtVW4X2bqU4kFGA5MWZymhm8K19",
  "key17": "5dAPtwMcfWHVUsRqVBzv54y3GHDSnuHMR133uZPdjeJyWfGhxC4vfzCU6qT6Z3yUS27ZUcsUB3BPpiiNM84mTT6y",
  "key18": "48N9P5iim5fXQKgNhK3XrCPareTdZJAE7ThbZwFA2cC4iigNCH7yxay7Nc68USj1nLyADknw6y5HuyKvKKTnoN94",
  "key19": "5BgUCE1QUiZZfoZdqmRuNUkKPPPHRfmbP1zvKdfB8ekk1VKxnsFXx65Lah88VUfzfqYdL2CPa1r1HiZLsB9izqxd",
  "key20": "4GGcE4NR41k6kXxeNEfdvrLz1EKQUsrwwLXQSRFaHRJkmFcJTa1cQuxV9PQxhchYk5Vv39pFp56bvnewoM3YpJKy",
  "key21": "54M6c8QJ6gZSsyDGXacNfDJ3fzAXMEdpZgmRXwV5VAu3UDLc4BJsLKazXi9V8pzzpDry1sjhzXq781TJLn9mQ1Hz",
  "key22": "5yqZZmnfDXfJkpdZN7JaRQ4WMVYZUH4DGkfofasi1kVGNiEMQmEL2fiyEKArk4xBZ3M5gDQf7VcCJ1gowrtt2W35",
  "key23": "o1uMnsMLyjshc9LmzLm89XrqA2nbJSsrVzvoVb9fbDLQZzUoTSyQYDMh6BuqRSLvQx5HEcw1X1VxUge86xuEAEz",
  "key24": "vzXspFFrmtzsZA8DMPfD8RCwRvQWvyhW8eUJQZ2VTrsP3xUsYmasjpcd8gwDHhKuhRnXjxCRFSGiAuyhjSdpM4K",
  "key25": "3gU2QS7JH5XpAhM8Rm6b9wCWPdVbqSb1y8LKUXrAFEHH8C6VV8aAQS4mHibC1CzvbUe7rghoXWscqesVFFTRszGS",
  "key26": "3qq3WpSFTWuAxSyGccr8raBpiSrdieJMvLeSfyZm4RuS1iogQGdXrhTKt2xQaQ2T2Wbr5UASu87rsNcQwpQ5Jr6S",
  "key27": "PtSxd2XVJ5LhU67kWv1CXSsCTuiCFppdQf7t2gn2aEh8JRrxaLCFHY3mPYW1ABwr8SDFmVGwzgW7JLmnDmCNpa6",
  "key28": "3izrb2fM3tqkkVuJwBhrs8qB9uskjeAM17CTQtPAyGqnzgSdBnueM2Z4khTRD1bt9pRToiJqESpxKb7fc9YUYA61",
  "key29": "5btp8Qm4tMvnoYaE7kMi4wSdWR6qFMuicaMaQ62zxQzZaSBpkJ57bbmGUJrrwuuSZk1hArpE9pj9gnBSZHmp7qyh",
  "key30": "32BtbTyfQdRBYb4QSwadyVju7diewvhnJFw99qzvKWGMXYAWV59U4WYmZtFLGmDHSSnLfrbiHm6vuMAVaKna3xfk",
  "key31": "2Z3Me5FdTLq5zr5gEJu6266nVPQb62kKPifdu77BvkJZS4bFm1UMZCwxaYNzTJVtCT6WgvS6zKP4Cvsqt6FcHSsA",
  "key32": "4LN11G8ntKQfksdGH6Ya8Bar4hEeUxoADWbbic7iANg3gHm5bnUDsrgM18XSbW7G5Z7QLYW3f4xNfWrHVGdGgCvk",
  "key33": "4Z8y7G5CydxaXZjTiXQ5bMmafXbW8XxZDd8xpomBi7xLuV6UYuBfht1KZCaVj3rEmc4S9aN4n26pTZJD4kp5fjJj",
  "key34": "36L6Yfjp5rb4gd9WExwP9fEVYqLxuAE3okoRFVJwKhK46dUth6PLdR6VD6LW7z8YNivixec8RsxEfJ92iccW8Z5s",
  "key35": "2Sgs71NEUh9kQzpjrCzeZBMW1b1LFQjnpcqiXvqQXTt3Y9GyqX5SWFWYi8Yr9fU3acaqc5tvFJBpwqdjBLHWyKLU"
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
