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
    "2JYeJJcRnDnthSQ7xv3Sct8KW6mDhWgg51w81ngcxp8PFCUJVBxd3ucsWbcNkADXtf56PYFVL2CgYGSg3FoyKbHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57LRMZZ1k4fSbvr4fqmkM62bECPHhaSHoHs1r3EfDWJsdMqfnbbBM6FoMNvc9BM6stHTEk3x2eWAQqebRiXF2uH1",
  "key1": "3bdQVqACs79tAwuyKmQUmuufzuqC38qX7A6joB9v3DRzRMBoCuPwjfh99fhsAir8X8Y1jHkMxpE7Yg7CcTZhJqnX",
  "key2": "3ttSW3XheeZqmHkPFTUVbt2dZNm1efgwYpb5KLJH8tmH2GCGW1K92xjzZvJRU4CmQXA21wmH7J85Vy8pDy9N7xgB",
  "key3": "cfz26mxWACVfFHt3e3fcr4YDiAHZNACucqTXcD9AV488Uray7YMoPf7ZhMRxFigDyASNXiXkQXJ1f2WFtTBhLWa",
  "key4": "67arEH13d5trBL2qh9zZwKPEA4fVwZBbyuhCBFzzrNbuv7cmJ9jLnBvNuqaQPy8dun9BwpB83UHpPbgt2i6DuHEY",
  "key5": "MuYdSWZgWTCpaMHc8ziW8rcfkawbHhVbQd9RtscsJaYgAtaK9MR7udBd75xCP4mbVeLozTLNCiYmCiZbVu1Vgyp",
  "key6": "4nMrGHSifX4oRqP1bSBrrqC5Pae8p2DRe9cqB7Y2iaU21ngzqPpqwQcWJXnsGmKbrURVSmExjHhprxUJsE3rwMKE",
  "key7": "4arxborUExHNXDoZcn8SQSMkjVQ3NczSqio9Brh8JDLtffoa7snuNZyv4HabS5zoEJfAgEhbsqZ3hQQWhWGyEnqy",
  "key8": "5LBqYdv3aD7fP8w7Xfta5SDNZYGjDWEZfm7q4RNP3gWbimsnSd3B2JJsd1aAsKUiLXuAEFMwRHXKH4LFbFRWYgj3",
  "key9": "6356nL8vHdD6eMfKHszH7qZvqLqQMb8J1pHYJwzSPEbDWFGVahvMWqWXyfTXHB941FDS9Vvjhr98yj5rKwfDN4j1",
  "key10": "2qwGby8Ga9tqLJCm7wZemxWAaWQP7tDDyPzWGUdb6urJEfvDLRBTcQxqZQ136yNPYoTNQsKpzVKFMhb6hsGdEE2F",
  "key11": "9A12hQNsTA1qv4dboEDi1Zibctm3aKm3TNEdqUP6Xtqjs5vH3m1LacihE33QfyXp4ZFpthWetUPuLMZNs2hAgck",
  "key12": "5dtjsFK8WgGiqHEDfkR1E4QZENyRkrUttEfAdxMDd6pR9YzHKeRE6cgUqeSaRR3SyqJMAfTjHkdWmV93P6RX7R6C",
  "key13": "3rmgdqgH5DC5ydPVMmaCzGc4zBm3ftk1YZt4Ugh3tsDAmfQNrABQQFCpZgwG5Rhajckwph47AJ3ani4vNpWMr5jh",
  "key14": "2NaKDzvYCyyVWiCo3zcYTRV8a6vhpg2QB4tRLMXexMaW4GP2cDwjBFBQQTQekFUKW6fZTmjX2jhfnr2bHd5AAAfa",
  "key15": "yCmc5W5r4XudvZtVzebWsUVPuvpRT5YJgABQ6vm8CckMb1nPpDwdfbe44BRWQW9UzbkXrQij8Xoas2WCqBXGV11",
  "key16": "64nZwQLeGodf75gmdgfyXUJyL6FsDHGepxwtc88xzspUQkidSBkg1MMRWRc2sGcsHdweW8Z77aaSGb53peseaWLY",
  "key17": "38KxaYr5oqi7grtQkamcXA5Qr81LdcBsfTD24ZeuMBzbicjfXzJwkZYxNPHqHCe2fj9h4tptnmjvMinVHwWrEKYd",
  "key18": "2FKchKKLG5m3Erz49o2DdM24uiCEjGfrqYghn3q6Khk2SRn8qQAbchJXCt1KrYhKwJJtH8tjxES761iNBJmCM8uN",
  "key19": "5X8Dh2L9dTMjb8nic1rdA8fKqAVSmNHqvefY8E1LKF7VoJHX3yTJUqnnEUkbVjRQLGuPndqSFVHyejzBtHBX1KDs",
  "key20": "4icYfo6cotBfKUxDxwreaeCAXjbc8EfyNou6ZhM8LFWjbuojsxLWpb5nZ9eS27MXt6mupoPSfJMaxRUpokLniV2x",
  "key21": "56asXscVLsMyopCRvLhm4jrNQ6XJ6oLtekZcPRakFaeAGkdr3CVGfqE4TrZzg6mHEUqZY4SxJ3wSeFEZ3ATwuzaX",
  "key22": "3ZJ4Aud5aoF1KZLxwsFaS1Qb1K3RQL8a8CDeU2LzsPK7AL8rTBrf9zrKDMorWpvJmoyw1T8xhkPF2TBpyfBYwoFt",
  "key23": "pXqm9h2QqXgT6ojHFRaFiXGsMcKkFrbt9TWHo6T4izkbsYZzYvUqF3TQENSCvKW5MQi8XHiUECptCZCK7kG9KCa",
  "key24": "QsJ8q3TVr2RJS7uGWq3XKXxVwdUG5KeFtfiJFg8GtwzPyvwKoY9b13kScVyC2E8JesiVzTeEtGFrPv5Y5hPpP4k",
  "key25": "XMj5bgQAanW2Y6CbUJmr2vD1E2o2CLJ2J6Ja7DgxJrp8Xr963YMxtctCoGTHEpQbmj1WpkofdE7jsd1UkVZtxPk",
  "key26": "3YBN8a1ecMfquqwfSneRpdTP6DUNcHJwJMxSJZZ4xViZs5z2W2WxLsJb6QguNj6EKCvdVU77usigLdaNmCmNP8Mg",
  "key27": "vSD3A3TBattZNawXrLCNctn3VNSWgDSAjDw7bz1aZkgj4uEF8qsn5xv6gxDZT17jwgtvxncrTJUsFWhSEePZ8Zh",
  "key28": "5CieeWXPGgXjxvgiPHCpSYh5sN9LjEZyZGoLyudrg2BwKPbeSuvFoENDDnXZUSU5s8DFRwFXJXZnh3QDmGtvCUbR",
  "key29": "3xRULYad6cg1qEPztxpdEYzN9Ep1h52YXqmQQUVQttJiJueX7JPPpGHtScHcKcScv9BsyCU23Aeqqjk2e3hQXhyJ",
  "key30": "9pHWf5EsBfCoBiod6TF8fTykhg4uEvSGmn1zsvtknJJVtnKeYRddM8q1w75iW9M7G2v6ccKzfGREvMiGAJHvH48",
  "key31": "3wXA4x48Jrk2Gh28Pym1BwmJgwz9K8jGQNA7u6H26xy95xLRzFMou11yXJiJsVr84DqJwVfEAxVzwernFDe2PWXD",
  "key32": "3TN4hs3QtJfhapDGJLspF5fWh28UxcriprTNjwNsvvoPnzdqcdi1tmNS4B7mxjE6jTtpKTmZB2ndkBMNzfFr8ARN",
  "key33": "4WcebXNWQUFDGLvZf7oBN7886hwatUmQq12MwqeADoXpJtXX9w2MHienQv89j5CrM4SjmB3cijsGfwxmVucqVREq",
  "key34": "37dcwBrgEDvHLd3wXHBK8LtK7aCqJbniyXhK7NUxPqCe6Q7TADQzx9auGJhUakYbJ5sCDvpj96HRBeGwgUUuduv9",
  "key35": "32kZZyAAGePnrqsh1g282T7ZBagcVDCvZy4xUREYw921NTtD23bpBevmz5TpYJUuVixJ3m2zbywNs8YHY79riMib",
  "key36": "5Zi6qfBzLgmvMyvAecpwJKacTo8qHrrvLaRv3MGyH75C2KJDj2Bp66evyebNyiQZ2jZX4iqLrLNGT9cg9TfHw8Hq",
  "key37": "3QK7Xdd9LHgaSKb6xe9a8CNkb1YcX2qfEYD3HUjktNTByiQxmbmTdVreGjW8tcCyMQHb1b8GwquuUsiujBzqNEsp",
  "key38": "4BT8bJWR2SdNHQ3TvhVXvTqt3qw7AVtCRdwWfydkKqDqBnjmAxguyvkJ4uy99RPUATZ4QKUvuiWoRZPgfsfACXS4"
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
