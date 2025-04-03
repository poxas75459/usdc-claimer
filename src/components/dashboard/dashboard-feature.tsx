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
    "5QUTYYefE4ywv7iW8f3JYEr5jkaXbD9XCj5UzCEG8ruwvty1gDVibBvY3H5e2h3tW8h1rPEUzufTNL2FQS8YxjBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Q5TYFsug8SHXfajGukUkoCtdArVqwE3RYs3SfkrDwSbsWeC1nHmw1U96CMkZLdBU8FC5WTfJP5EfJJMcLzsgnM",
  "key1": "3qXZHg8hMo9x1hjSB2PnZAdhX8YazcVsdn5GjDpQiZhefb4isvXRtVprKjNjJ33YUTwBTA4G63j5meetrnk4qR7w",
  "key2": "4nvWrjbStPyHLnDog6eFMN45APjcSHfzNULVkoDGUYrgjArPNd5wAXcKhwf58PA7NVwfrRm1BYSwWDc4UbjZtGqy",
  "key3": "477XTjViRUK43gSWeC1oMYKm9AGB4JUu34QgHHtxR1YDEvFKK7Tkhbf9Hp41eqckKwe37fsqaDKkVmr9ZbALkRBG",
  "key4": "2osjZojao7T2YRxsMkA8WYgbmgcofASCHKiUEChaJPwsJn7cVbvvihyTLskBFREPNmZpkerFWFaUqafbJLo8YAgv",
  "key5": "54BmiR4XQNft8C9rzoahw48PBqjUqb2eB9fsYFS6nKvTxjJpvdMqUd7XKWkLDNbUB6ShPDPVE55rNG18JCmACghP",
  "key6": "4WybJEityN85PpEKd4yRMEt5psezki5SpQFptS43eJbN41Tta5T5SNcNPubNaYvoR4uc8jVGFuK1zmKPM96gjoWy",
  "key7": "5rBVbb6kj3XZz7KjDqihJBswipQNJZJvnJX1XYJJWuaqPsEREb4wwEztjqAgTapoZbAwBEdAAQVvkXu35enT5NYM",
  "key8": "j4Usi2xeUeHN6w8xksGq59P3jHQxZo6zBgKQRkZdK8eD3hyNLCSHwUuDVwdCPxP2exsa3FgGhB4YLut3dLbB4H9",
  "key9": "tnAfx3iVSsyF8oKKqbAaXvN3YiNzVWafgLDrNNYGGANweqa7fsokdsf2k6hRvsJ7NnabueGasD3x7U7zCThkb3Q",
  "key10": "3kCmSZqYeTs8YoT7SJA1eBAK2RSbMeipDYQHWeHf8gSxXLSDNER2yrV7RqBvbhSJnivt12MYvQqCbNQ9aKEUgZFq",
  "key11": "2QkqEkLqJq4yjPmX9sRyFA6J4uA6CAqPymoq5o3tgbRKjRteivGCnnjRA3qLGxZCscgmQmjB5nbq12UttwwtFKiC",
  "key12": "37qgg5e1wSbUwQzd1vSquNU9JdBPtHMmoRrmwVqabcD5qeLo8DXASFWZrLAdodgqc8fH5xSKzi8mYuWzT5J8E8na",
  "key13": "VrcDpS5r6pEYrRHpszTYoiw7wsykisiCeax89SxAiQTQoroVQMmx7VtavBbJb75cdnAwjEUze4Sj79EAZpH78EE",
  "key14": "2jReTm8Hhxp3qZn4SmvTmJW2MS5m2rNvDPnh1Hw73znb6jDKRvNYwL9m3bQXPSxF9Pxp9P9MVToFfm6QCAmiCkB5",
  "key15": "4iGWRKxLWf7r5tkrDYrMcn5XJNvKRUpCeNbPuoE2dxqq1vDPFyMvoXdu9HMp5rdiZCjDRNTcqgWKmVxiboV7QFZc",
  "key16": "2hiSuWZHPtm1DLwoG527iSysiUg3Y7iNrwqvUXYpdp5WVF7RQ8GQUrKJoT1wSi1BTAC25nWpJgUavqxYgUXR2AiW",
  "key17": "5DpNqhTq29NEJnjwiMpYoDxagRAmJPgJPV25JXkDBcHr5ZQPgtwJK1p4oUhUENbr8g5PUoz1NkZkVFQZf6TeZfTG",
  "key18": "4bb1FHKPfVPVjWvhn8ikEBvtQbJCgoBFm119k9mNS4ZiiRHGiUCbQXZBG4qhvP5s5x36K1z6hJkYSvDGfpiSM7Le",
  "key19": "4mUxZww3pzKaoF5SE9w5mgQB8pQpGQeCX4WCmZULKQFWcwkkeLzgbQGYn2eqGVKDSh1bH9nwipTdj6zRf3Srg12P",
  "key20": "2EAng7efAxyujfYSNejuM6YecXjWsNUvsT8PJLdVKT5fXJqwryddHRRGs1HdmLVtUvSo4TiiWtBCi6VCLnU62heL",
  "key21": "2hSwSLmSciCrQ5XAnpCkhmtz2B17Chxyt2bPudmgwe956vE1bqPfAxq16FibpZvUXrNdk767irb2Uwj75QWRSGDW",
  "key22": "5Qzt7Zz1t3EWUQ5ZYUBBebNosfwtrLwkUYzgiEc7F26Y49FDXKkNFcf3AuC9sJbobi9YtbSaU3GQEpydag6jv52M",
  "key23": "3mSZ5rgymTLG9zgQXD2qVgXgyggCUN9Ah7PCNzCN44EQ5ss722qMDey25hZqtV6gFNDzh2GQUXRobdkrm2A1m1NT",
  "key24": "3wjhZnYpwfvqPmPr8PjnMTzXVmcVB2Fk63vBKhaej6YsCF4fXLA2qUQ3huRpHGz8yjL1WJn81ud3sRi2Ypxwm71N",
  "key25": "3HCZYLFYqzHjatht6xGLUBbvvjkWfdTXSnY8g8MEmHtaaVLUdjHyscbQ9Ji1ANeiHAaooV6jk6aGqWtww5qXxEw5",
  "key26": "5zLj2ajKyucon1LHtx3r7D9dquFxXiW5nctmLfra2FXyH17qwt1AN8K5p3VFmDRu7t9xnqcByonNHYLh2EW3dMnx",
  "key27": "3kyTebAF7QXFCNvUgdzgfdrrj9nWc9KVAnKaEFsQH1RgcpBQkR7B8JPexwzf29dUch8i3NMAWCBKRNSnoWh7C8EM",
  "key28": "32xhXjUwnDTDLcD5UqMeddnWr8pmRFoFwSZu5XGHvCBF1gUKrMQyoxgXJQjxJeW88dN5C2RZPm9kVdAgcPhYidCk",
  "key29": "AG7bKPBiVL1x6xhdh2vweim93YgTLAiavXK3AhM2yJKb4iDiKeNh8YqWZ7HMcpBtx7bUajupyMpVT64LMh9ZtcY",
  "key30": "mtP6zYthSYu8JZ4KcMukZZBLKHGWEw15JGP4BLp2Q9djdtLdYGLskgaXUUPWWz8vhYJWa3UgzsevPzB8PFDwXnV",
  "key31": "5eULtjCKS4U8nbh3awr9mfYmokmEoP6JnL5PURnvZqoCtEfEevegK3MNNF1bkkTsPPTbVwUafh1Nanxy1Lze2Gai",
  "key32": "2eKtiqXtVVZY9A2PNx9pgRBCjx63bm4x41fGoqGnqAFA313H8RKfqc5Zq4vMPs3Yh18Ywbmjwu2jaonqrVWjaads",
  "key33": "5htCfS8SZppRhhX6GyU5aQeS3G19Eb68vu8GekDjHHU43m7SP7W8fxqi2dEgVawEmv8sYodtnwPor7ErS5hHRj2E",
  "key34": "6fjubogETMhSwjW478kXDDWXZj51YqmT3FSkCVoV5T64FB4CV9cHMqQvWEkg5HVQLzCGRb4osBwasyrRcnJ3QJu",
  "key35": "36emkcM8j1kuVpRsQsb6LtfbZn34mNxQvQNsaKdLVqq1hpH1LcBwt87UTtn7Srsc9YxSmHyKzY8HEVALXTrucbkq",
  "key36": "627ngKL7XVU2cDBv4PK3HvX7Lrri2raprPNaK6vG3LLtcEJtoJJB29Afn8PsU5Q6imPpxwZwnEC1zhZ9JtGUdr7p",
  "key37": "X5wCcdBwm4JrupCyH6GqxMY6fsJH1dUqXg9XHAPoRxQZkoi92jTL8oyQyQBMbuaJVp3ZURfsMg7bnLFj3kpqAku",
  "key38": "4qsSk3RAihqvtiWv7WrVLLGFxmtdF399wkmHmYbs3DxRJM1wMp7aoMVHRdwcZTYXJRS23M4CG8mcsw3x99ZCYZNi",
  "key39": "DPwSgX4YpV6Z8q9QM3ysXXFppaFETVKF37gmRj6vq9JdshtXnnHoFXxJncLV5HaQs4DTtzMPv2GvuEgjePd5xwK",
  "key40": "52rsB7UL94B4GbEuKacqhx4dCE7n5Ab2NQn6Pckaeoj22ZpGfFKtCMX41aofJv2tpgF7oqv1EwQ1ewiiPPuA8KGD",
  "key41": "2Spq5YbCyJKfFSDma5zqDZU8nQZ6zFGF9DiNTeSY7hR4Lwcjwm1yc252j6dh9cHZX6wayffmpz1C3V5zXe1A9HJ4",
  "key42": "2kzbiY15Grsnb5AwDbNsHjKaBbfRqwcgRicGjJhejA1XfHhp8z8k4wyiyySsy6zGgH1mMNnXDP8iTgNhy2qvckTN",
  "key43": "29j9n3Po2VCtSPPLRKREJqUYxc4bTnvkfGsJoMaKxSb1BRbXdbSKMZFmwovbAN8izjiikjQbXAL332ir9XxsmA8E"
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
