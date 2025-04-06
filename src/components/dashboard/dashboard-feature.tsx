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
    "4ZVf6cNVL3HbjBaFb2VyrMzYYjGS61u4e9kFnfGHTVFSbVDiuhfoe78w3VjTeky8S6GssEJYgTsceSAf6BkxmK9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "635JZkjLCSBP8vx7h7bQ7of7HXEQVArVM5wV48mNmottaRA6CRJYDdNJHzsv2Q9tNpNwbJkGnNfEUdd1Yvvcgiq1",
  "key1": "44nxda56myQCCZbKsuYf11n4LGV5qZsQe6efZkavhG8R2AYWHSjq4iDKYZhnGr6pMiZHuY12A7JzRiF84QDysfnZ",
  "key2": "2sRCQqDUE6wjuuJB8d7K8n9ikbmhfzwBanYWgu2kRMXqzHuTsipvQaNS9e4mXxNt4pEk53AXNE6fdcX1zYWAfGeL",
  "key3": "3XA4yGhi4sETwVQoH48nY1wqEXAzzBbKNL8bBcSSgWfck5dc2MBCoy4womqEjUdHKhwTxXWMHtABBGcZ4LGj5f5G",
  "key4": "4HxweCU3Xhn2Ws88HNRwLefryvkpSrj4g2TuQVsoNfsLoyfmu1k2cZezBFb6hVCr5QnKe5gRUPWQM6gzVFGZr3gc",
  "key5": "5k9Le1KDPjTGQMbRvxcYMyf9oDD6Xto1t8tBNGTFSH4Ng26A5gdCg1nrZTu1jFqkKtNb9GGpifjZitAmEHMowTTm",
  "key6": "523n8Eey7y3V6utPqS6hFvY494N3uRzs64rRJtBi6AoQCwo7cAoszbFztkhEkiNseYBV1Qywunb7AmoWRsRCc4zr",
  "key7": "2Xpy6LpU4nWhqaQQTx4LGhNGKwvLUT5HYqhSuaEH5PUeBT9Evc7bPSznLyjHbkHbXgjuo4npMtkxYZTB4uJFVoB6",
  "key8": "2mEpSB31rkKcj2hDzZcSMiiVV8GPv2esVv1kW7Pn6dNEMh6jbDdG26cHD7xfFgqbCc6X9MUHgJWCs3vWBo6UhBDj",
  "key9": "5eATVBEqvFQUM4HqWo2Y2PSe1hVRistExAJackfCapiM9m2zNaFpyJ8c1qiuXqonD4bN4mhacE6Yq8nVwvK3eJ57",
  "key10": "5719nH2623ue1qnKwC5VUouAvVadUgh4DeBjzZVkUSgbrh16JAdXdenKgz7gacH5pa5qEhxNux65oFrXxzBqktMh",
  "key11": "59NsRMDxQYo7maSebr7bwet9AVwMSSeqAVAjDeQkQEQJE5NRRaUpyS25J7h1c832zr7ssiVEDkhybgj1ZkAFQs5w",
  "key12": "2FRVRtwfULCBEP3UDtjhX77LDTnkdyFQ8ypChUmaUybiD8UsyQmjV1CFeaE73Cn6Vcgqs7XkN1YkJyD9RKDSN5Xh",
  "key13": "4xzw2wU9igGE9nzgYjVr6pV32t8Qau6xcgq3HUfjuvQKsS5JnQy41keTPCCFfGsQv91Kp5QYCokxeiP6JER3UMYP",
  "key14": "4frfRhgXEv4tgBeUtMbz82DGeP4sJzQ9CT2aQbir3XYE4TwJz7UBjax1YozTnKkRCdfgYiMVYoafGs2X2gV63xha",
  "key15": "cHiH7aZKnAM5kHSUFJrUM9sX9bQcbLsJuYnSQJL51TT8vG7vL2WLLMFE7XgLPyf64HxwTBPm4fDeznasdxsEvWW",
  "key16": "cFXJc8VK2ZEJa4osrgnziYM6scinEHk413J1DWi9YcfN6A1SbY9ZKXKH5eBzEQGHEL15FH8X4BXFdkViEsU1PfT",
  "key17": "4w9heSD9a9XSBW3axgcLrQX9HeFBgb2A8BZ5JNGeQZUMKCbwyL9v1tGUSgrYSJcrwhiKVVBh5Df1xZ4wDjxMNRq9",
  "key18": "54tP2NeDx9SNpWBBmRohYJqeNHVvTFJukzuUixdBpGZ7MSZpiu3ZXGW4ZFm2C865HRuGmfjCP1yeuNWLD3znYx7d",
  "key19": "42FSJhRShXYeDD9WFCaQjpE1NfFcjqEH9Gp4Um6BubM3zmR6kY4aqHMtMu69Jiomd1xTqD1whGJmC6RB8TQ7Q4oP",
  "key20": "4Z845QismGqWpJUQBkhdSYzuS6oiauJfreiJBr9prCh9pcFUELrdChDy47w5skfUAUafW3pT6hpfujLpFD1odNrj",
  "key21": "2gk7BZgTfiSgMAWGW8VkWk4v2Lg9FheUVvDghvde5fc79hhFzixW1W5gCeksGeRxkXxqChZCE4bd4DY7tK7Jz243",
  "key22": "2xnMjuqSPAPnnYxuJdkfaWEqghiJqQpVNSwjUJQsHVDxvEW3hXyHWKQmiao1fLEBoiwmBjrJh73Nj6u51fLQ2Pdg",
  "key23": "21dh3dUt4xmUTP1K9Cx5EEtHfHFCm6fLSgPuw7qeLpc1wGVVbp1crAazXUr16UVw3iPLVNiLVGttUz2GJtPu3HVL",
  "key24": "JtKU7iXpqgAMywepjY4sBcdnZCjgSNzDgi28V7WquDRX4yvQS5Mvoz7BHUyuJNNSV2j4WuEs13cjwfHKXG8rPK7",
  "key25": "6AMbznupRoV8sKMHFbQeEzjMdhC1EUdSHG99nNaRv8TvpJNPHYvLuFrDaUrW6hB9DxL8qKjMaRV1e4TYAFKSoxy",
  "key26": "2mneWam9B5QpsP8BQujys4u4Vb5uzUKtDMEHqY6dHeDyEaoYaNv8DcDk7pFnBDoJWiRMoTxmcYzyqUxHtMEu2g8M",
  "key27": "5gk8KCMpA5MGyV7sHaoCCnorCJTcBhzv6VX3FQmkk7KQqEzQwxi4RanRCvrXNJneTw7Gu9i9KoEXvdPsvCYV9XY9",
  "key28": "CR8y9KHdABZ2Mx4um8DqHNipFEw48VtbJ541pbJTx7jYzxSpDbNAtdDgHB7UTzK5g2C84eKqYMU1wedT2CL9n68",
  "key29": "2VmKQuLck4i314JKrWinvnRJL4e5b2gTGM6FF1HpfqgdP9vbM6pP9bggKdonQykcT4Fft9ZBhkRg9kg2sWbh754s",
  "key30": "4JzCpGumrC7Q9CqCuaKc7Q5hjQ3nmW9mwVKzN3b7pnjrqN6626agJqAHqgW463eAHpk5hm8xrDwYUAxurpkhJkbU",
  "key31": "4dkW4ypFF1ZHHBrDgqKqz7GTApa5dbKLdNxUdbuqwBKEUd141G5J6eperBAABQhgt5qDMBGTnpWPG8PiZYkQiVyR",
  "key32": "3X1ZgZzhHmoANR3sWcNypbV4RNNksdbYadoiWheKHquUx88HxEavXzX6UEixHshVx35MCuNmYZVLXpCYKxtJegsc",
  "key33": "3wtps5EKhTLAL5NgvFbYK4Lbd2ZmpJ8RofkJ6hDN37j4oanC2hQ296czij71pyy8RgcRUYxYsWk9m6CGvxpBLi1G",
  "key34": "9pGtzzuTyGAuTrHPEWE6xEwNmGneupKytoAAEpx7UyvreAqv9uDYzNBjWW5LdgETwHhWctXZncupUXud8xRRU8R",
  "key35": "2VSUtSo4tiA5zYapxu6w3yrBQ1J2rSCCEqLw4FrMhDbd5Ga97K3hjkXS17f65pY1EtsVPFZZNXoW3F8Ngdk1Ld6o",
  "key36": "zeDHDKXVp2uCtRtcWSxkU71cGrdmEnnd3R4WqjEVJGK8LbfmrB7FB87tad965iKdZRLAgQKpWarEFNbrzP3KYf7"
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
