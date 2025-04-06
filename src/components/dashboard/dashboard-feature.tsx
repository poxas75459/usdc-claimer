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
    "3LUrTGP7ATuqZgAaXP2SC6Edt6EJksVyqYhZ9CCknE3PzxZnJxm2qjsPoEnLuzZFpvNhQXY5wSVFG7tWpmNTPS7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zKJ9b1joFDF18VRzSj76GCUpUxgk3ULSqF5UgAZHFkdom9hhRvBnXdGxWsFPapU3RVUwnGsR3RJZkk4wK7xwj2K",
  "key1": "xJPMiRDmV57KkjPc6X659y8L1mxtQMzL6D3AMFrmMcBzqgRyetFHXmWRwYSNRg2q3nUJ8soViA7VKWHi1ANgfbu",
  "key2": "euFsj7YchZtnoVFAb7S25C3raS1Mo8z1hYatg1jbeEnPT7aHGehUwohehVxZQM4VjFivhCvbzNMviJtktimBdhh",
  "key3": "5Qkmh52kHaEPj6vnyDzqWZFwfK1qnLRQEbsPQLL2uxfRBkqMnYbjYnMAdMCo22pUbB5t7z1o3YeW3dRkuiSENgiL",
  "key4": "3B55j5YSuXtHDLiPjDP5oH5z7x8HayAUNvqJUKCcfMCtjrrQoXDgPPGMZxjigcQYxudZ86VYLwxiLaXdbbCQW5wW",
  "key5": "26jTw2jwFzdiRKgnEdjheYPLnAw12Rg7boh6p9ieKZVW9LwGFLnc5kVj7bVT4S9YeQ6g94i1G9KauU7vkz4EqmgM",
  "key6": "4jPGDNzLAENtuFkgyhasz9QnAqdfijwQxckhpBchPnomkyCkE1UsitGjsiTp4rM7HbepFkgCkKBZuVDfZaJNyWFG",
  "key7": "4Jwo9o97WeZBzzNMwbQcF64JUN9mjUyWsuksFMvXYcjUWAscmDUEErytRcd6BbWW6Y69aiMGZnczpAEeYL4gSeeb",
  "key8": "3kKJZzgnn4Sjhm1VFhUKMLUfRtTp9PAKBhQsVgmtsMS97HxhwdWMKjpu6Cv71w4QzraB6oiFGvZVCThaCA1nvkGJ",
  "key9": "fipW1mCebFaYcuU1ToKrDtpPD7cEcqBzaihghPFFQ8mCCaHPLyw6gshHYzcFzjSLeumUpwhgrxtocpWiViztYjr",
  "key10": "5D2v4RLaNY3yCb2zKxwWH5WHa4cMjyiegk1JPqviZdMzbjP8dAnLfPEM6e5VpnuLH3SZ3GnCGKjJK371iCmdasLn",
  "key11": "35PQgatfxoBfFxqSQkJUGqZmzFoEL3s19PmrtKCzMWparWpHtapdNh1B1LVC9b4nvJDDh9iHaRfev3ooUSe479hX",
  "key12": "2x34J1y4rBAt3NL4pVwhEji5eYP24aEJfZWPiBKF9TZuhoniBuGQJ9wPthSDMJjmmf1jL9fCyNGfVtT7DcsY7SYz",
  "key13": "KywK1Dt9cyxEsF2HFnrkMUStUVrmbGUfLDg2V6djiVfe91h4srQCkZe7wuYenzmC2eJRih2qcW2yF7jRYnHMsPo",
  "key14": "3QGe2uBpsNr7HWC3m3f3drPFNA1MWRJqXH4qT92jeubE7uwSSqjA1LSWdjAuiRG9rREErYNxEpUxeEcdQDraZZ3H",
  "key15": "4ufaAHggCRnoV2ZgQSYUZvvdHCQ7rqpBWTXZaDPMGrhvJyFFgep9zAvCo8KCwxP1WeU9gTo3FpBLhWky6W2F7tu5",
  "key16": "3EUGVJE8MfKTzD4NLqr2xCxbmfZnEhVkHi5Kz4mrKLb9ubnMSTKdF1BzETqjh2WbNq62vCGKVS3LqYYHfAyohDDw",
  "key17": "4rqM9uDd2nqtZ5KHE57kjB6rB4bTcoa7GMQpKQjGhgxvNp6zXSCgun4q2QaD8qMtDPyzuX9gkM3tLLykVEHT2mE8",
  "key18": "bDjpT89FTG3QXCZJG979JG8A94a1UfR5YfaqHfqkYfJQtuoZ4zTLen2CUmBk7CPRP74eFz6j393cQXygAHryK4E",
  "key19": "3t6uuq8bEjH5kz5dpT9AAGpGqMiRurkTi9JSG7PRbe1gr2rXtYSaCUmtEuuYnU42ea8f937hitcFdRyRdLj68XKE",
  "key20": "2zJoqEnk31Y1cxyziw68Fk2hsAeC7QRHuH1tC1n3sSuTVcszFyu5rE42e2DfZxxBDoG472GQeXBh9Ftw4xCjCAe5",
  "key21": "4Q2QBFmBaLUChHMoV6fYiRH92iouvNUeYETmSv4t1bQMVZXF6HaiJCSFQZ1cj6GCXrDhfbP7Dz5shUosujmnEhs6",
  "key22": "37Q4MVd8iZpt5rU2k8ei31UsmahNBiPkK3qEmHwY3ouccGKE43cWaETYnfAwaL3b6YQvQir9oiyqoY8K9ZAn1gMg",
  "key23": "2XLPc2to7q2UZY7YPRoCiBxXj8josQ6KHKsm936AeND9Sa239neAYtK1uicRSz6iAXLQdrqNbwhaQgaUAWLAYp3m",
  "key24": "64XYDNjpjLXzNNiogQMt4DXutjXa8ysgTUnPgQfXuJhjYzh1F5pm5QdpeWbtxRRGfuBsG7X59511AS5AqmtSXjx6",
  "key25": "44VvC53J4HpS75FjjkbsHiQPSSkE7EysQPSmYkA2G2FVnpcQS9FqP8q5ntP2NqePwThmy2XmK89HKWq8RK8DNfAz",
  "key26": "5Tm4rbuVkZroNi9kYimoGAiYaV1ALhE7MLD3Fg9QiiEqqey51HPX7jx9f6egMaDBsVLdkiYTQMaxvaRMVsTWXHXo",
  "key27": "1btBqx2ReYEu82H9Lv3ME3aNSv7b8tbusHHMethRiCCYWwrqb1qNmgZRM3q3F8FDXdNkCncQhKeAoQeSAPq2REP",
  "key28": "2qeY9B5UnJkpj6ngr8np9eEZwMWhmHNoo3z9aJgm8itwXUvyyTPNA5AYkt4aZj8vsJfwgEBWntBx7Lv7uUXiHdog",
  "key29": "PqAEsd6VJWB2HTFmmmUEot74W56M74pLPHQta4Sg22UrpVce452nxmFAybg33sJ3ibDQus5HP2usj6xaLZg96aS",
  "key30": "2wWNEJZtBzByVqB9sM4tWbEVRpnfphHJUZai8H8naspnqCcbnc52mv8wJtPAW1e6jdJCV5eygkoMYcxwzX7fUMnh",
  "key31": "334Nw4zQRNBEExZQ63EHSSE2TUvDvttkPYd286UEvRBQNBPiy1RevuHTQ4WgZNaduJ7CrTk5oJqofM44ZMuPfNL8",
  "key32": "4hrP1xrgfxjSxc2ztXoewQBXbCt9UV9sU1iZCvNNasJvbECVKn3eGRNCvMtpB38LJeiktwJ6tynMya5JFvitKsZj",
  "key33": "4xXrq4xBfAqJk4e661dMqdoCaBhNnD2uFqBMknDUEVqA7nYFzbrK8pcQH6Vmi9oV3PuV2KSmfTu3Z3UM9eYNiS3g",
  "key34": "xv29iH3N6yPBNbtHu7Umszd9UUyfQb6cmYoPTmpUYG8HnY1nxuPauARf1F6FNDbW7E4T31tpGDtMkHa5cTdZiBy",
  "key35": "2umdAGdQK3EuY7SXUwev4pMdVGxr26bwhCQK8fNM8tXpQ5woML6CLchSMeG5C8i1sULo6ktcAFFx9N9aMdvfbGtv",
  "key36": "ALNUuf4EGT52qQhaGCU2ndJZmJ1EhhokQCyJxEt5X5EW17pqUboQr9EeSQzVbjiR88NfANLHToLvwn8YFuQikSJ",
  "key37": "2Z9DzsqPpcenwHvxHYL2e2qJBhkdjxzdwCa2MQesJRdk23M8TdexkGc6Zs4CGX5vY3kseaqJ7KiBAFdNM7bKLmyZ",
  "key38": "3odTCG4ZM3CdTogm1AXqv1CnmZQ36SMRLP9zUd8p37RLYb1UagGmFuWWXt9rtYQ6Lz4xtexfbVpoTfvWSQVtocE1",
  "key39": "4rYRRXRL3DKrhi2462HNgPXQp9RNcwZvmJieJHKwrgrFkYzFJA3jH9Hw2jD2AvVTHVGfTE31oBeeRe6Wn4ES2zNw",
  "key40": "48s2Q7ftXVQixVw2b9UqYfaDVpQUdGfzCcB3cbESjjZtfnYCL2rNgr61PKHNHFQ4kGSRTXQpYyFvWztBW5MQ4xs5",
  "key41": "4Dv6odGjcvXLBYniMLwssTa2QQJXsaJnZbPiayMb2qsdt6dRwCFnx4Sf93vBNAiF9mbveqww29kDRD4SVfvwQCRD",
  "key42": "3YV4gibJ7cz5zUzu22MjR4mWo8HRcHQCTBAXfnWNcqGY2FxCFJaD1WticGzYc8NKLFRJEScYjxUWcr7S6yevrq8k",
  "key43": "2raRp47LW7PCWFtMZTAeLUx5Vpmz3ifCSTPdUDvgWc5qr6xVXKt7UaTKMWoqSBPZWY2KGJWKXLxrQCrH4tR6W9Cp"
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
