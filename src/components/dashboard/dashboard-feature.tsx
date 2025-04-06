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
    "3rude4wrTUwvBUeq9yAuUwJ1MDZ7wyUBoG6LjsP55ygWygUQYPq4KixascnW2EzU429ZGSjxWw7YU5bHrCsm9CdG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oa2UYcLHyKzi9bDTS3F8qtWXabXFMqqwGY7PqJ5fwWJqSBxQffmZW2Bt78DfJV5d9oXjoa7TeHLascZYd3ynyzZ",
  "key1": "bzGrdqTW5yNPM6ag68TdjPYAb3yHiHVBM37wJ24Ks8sYoYSiTx6CN6LHSWoei4fB3HBQKpB3HN6G6WNVH84pmu8",
  "key2": "y5zGSZtBZrAuFJUhB75QKTAPLFoofFjtUScZw69G9NqYGz5AWEme2jKg8DV5hWN6ZUnHEo3LQnAMJbpYVWJscA5",
  "key3": "5cM3cZBpsPuRc4FzfuqZyjVsJvKP2GVzGekTrqZgXbYwz5Vv7igk3tT7ho9b9nNZDwzv53sWRszZR6aVYTcE86UA",
  "key4": "5TmrhsNhWd86Q8H73ChDk4raUZfPeLJv9oFSou4uABYrMf3yW7MzBxkFi3eS8aZ7ZjVyoVs3pUFXkGg9hH5cgag5",
  "key5": "XYNC7Bz9xK3sDkTcKktUrJcYfHMqqhh8BXaCvt8dfgMsduegaDbMWpMxuoABiGnvA7aUHKbcNi8bT6CxG5mbx59",
  "key6": "54uAUg3FhRr3aKa3oM8CvkshDD5oM87ParubJKCo2Dxw5GhEZdAoMajG2oaSGZ8zbLESc18NdLB8wjWvKfHEW9Cw",
  "key7": "3FEdBKaL3xr7mNJukoxS4YXQ1eRZCUX3rQMwkcVLmD4boab2Ppk4zb4vixe7JcDqxSYiAgy7nSvZ71B2sBXXzUE3",
  "key8": "5MU4ryhMNtMqPYZe1mCcLRNW1YvYXH5BYRddG3QJ6agwEDEaKY3wEsWvBUqX47E2jc1wkKfLVUL6ydJZeTEtmWUm",
  "key9": "39m4xza7cMkzeonuQZWCNiknPTgjhbHgdprvmkHvRAw19dwqXzQhKxgCAuRBiStsAGkWJY9z1XyRUZDU1K5vyJRf",
  "key10": "2urZN9XkkVsgRxFA3kbDXfQZx249h2wLrnaRENTpWSpVb4yg2o93P1ubbx8kZoqME3jeAsdxtJfqHx9pD2yHsxVL",
  "key11": "oLWKSvW8nnVWMJSbqgkDRbs799KRVeKjjjpXwzkbrsuPzCKiUDKyThcmHdwjKPYKZV8ArKwcqNfdcmP3u9ToHu3",
  "key12": "3RBm4ikPZcqgePTGhhSiTJL4955cUmu8uY4AL9hccYNhZfzoFhjrb78eGPdnrap52RgiMryta71NHiS5yUvX7LUG",
  "key13": "ipFtufw6ntUNesnquvjt6mW4m8qVHeX9ZTmpNTti59BRjC2YkhiuXAHE4peY2tefMBu4vm5uLvgdSCCEorUdoCt",
  "key14": "4VD1bQJBdqGA2LNanYt8hq4wbzGXrEkPzZonHUVDPGrZBtwJekw2Yn5NQT88yPkYiUruoBXt3rgXd3QJ9NmgiJBx",
  "key15": "3QbqmYadiz8DtCSqRd4ennHhdU2R8yY531VSsHW7xG6oCU7nQToM7arkHs9rNK2r1TBVVUWe6bUs8yGWPSW96zhJ",
  "key16": "5uwTqoYwgqLp3PSBi4fkPSNJTbSjNxGzXyseJdXgChC9G74YEREjUyA8crF5ayaCGEEPdpYC3umctoGu9BTfVfCS",
  "key17": "38yzr84mTYWJeFcmR7d3sCzfb62tp6pGNwRu88EXDy8XeoC9wsj9ahZu8DxwcqyHaG3qAa46kr4hRKVoSajPCMtG",
  "key18": "2jFysuWZsmQmAr2dDTTfJXMPSynABKNP4x46ZnU2BMw6hdA894N5smheM3HxcJXAMToF4XkhiiokEftrvpeH638m",
  "key19": "3s4ojTLcujJfkRaQGjaNa8niNEMXV5BqigCmmCtEABZy117mSMiJG9xHCEqgupyuSmiyF38EE9yR7fndFMZTo9W6",
  "key20": "GmExbGi9PGYUQUsHYFxfVeD4kqheDj4rtM7WzppH9Cs3rvXH6woATpSEYHaUtYW6q7945cMFKV1y71XDa5NybS6",
  "key21": "zsa9JHTsUGbt8HSVcNnNf2PopxK2eY2vqaqgXVkSar7fPopDWRgmKHvCaHjKK9DQTKTXQd61NcsaDdAqe1sy4mZ",
  "key22": "2f2Agm87YAAZXadcJWvtF3fWiSXkrnr235EYu3TMq7oWR63VCDCsP3YeP47kbPqDBmHrkVfKvF6fTk1zs2dogG9m",
  "key23": "3bZnj9Mn3TDrzrXkkknnwxWYWGgu1ajL3FYdew7yQw9M2neF2VoAatbqQ46wDBMcSCePYKQs2LeabEAsPRKm8adN",
  "key24": "54i7nYuWwvnJGtHqntAhRLKxJVZKMZ3D5cZeZngw7RLvqu29iy3xbybma1MMEQxx6pz2Aodc1ut5rmXsNYUPQYoQ",
  "key25": "4wk7HAFonMSzysW76RqneLGfXtctJ3fmcCWS5kx5KS7AbZvCWVKw3sCGD9w5FvUWnbCSgLGFEbhweN1YaQMbE7TZ",
  "key26": "5BpTM6mR8XqFfzGdwqZraAKWctbcqxax1wHi1n1QWyd3Q12G38vrBp3qAq5Eq2nBzgjKeQ1C2qG9FjEdSV5J9pKn",
  "key27": "5QAQx4AujKBCeHVGNbkL8pu9PdTTwxC3guUBjC7E21ht7pp8xDxVPy2zzvKZQZvAPBuzaZKJqyoAjdTFaV1M3E1m",
  "key28": "46v1DG6DXNVCyzvHdctZnBU4A4fej43VAEKy28LAZwuCsP8arGWnHCPurnnmynbLe3gNUpyaSECrac8RSU9c24Z8",
  "key29": "35ffv3CgTafamYVAhj9GogEEFcGzYdfmdmXgN5CyZuwZ6P7cQtYakgmvbfpmbdM7jbPx5ydfMFbBP9URsSMovYK",
  "key30": "2PjfxoTMGif3GgyQzCeJ6D5z5DMjoCqHAKXpF5iHvyvhcfXXEX7WjxcZ2GxC7KSnbTTHymr883oEaD8tkhBerzGb",
  "key31": "42MXWLPUPcvaxWevmynH5hgR2ddiTei5jxHMTUYcL4EiijjWAwJH7bV7Hs1rjkZetuudPhXqasr6weuzJqgBNa9x",
  "key32": "3nAf6GZzZs7qcG2Mxm5nityo1LcEbnUEek6qtkkH88DUjackZyeu88fDxsLBY9QnEd4nHxwCt5Bytdci41wLiucw",
  "key33": "4YGRBC65AxvD9RLDtAuvGKfYV3etnnot8tKMxUkVMWnhh2FLpBc3espSgezaWBAMvSkvBZs6M1U7Ljh4uofqncov",
  "key34": "3WVNpZf54CnuHHDVGkhDqxvUhGuVyvQ7KfJYhmsSFuuwEsBs6ExJDRYF5jGusPxb7ZB8mkAXpDZE9ssU6CKiBjN",
  "key35": "2iAvGAcn39mTJBkadbVUMNcEijo9ujheGb7vttm4PtyVPyTvyPxHLmmT41HgRgSzZukHveCJ69WTcjoNtvWh5uq",
  "key36": "gyNyPmBBtB8911yggkJHxMBWpd6EQqxTU5xYCrXtEFKeobFYBVSbV7UGkXpcogX886KGJ3wMgvKaNLFteGwSnpq",
  "key37": "34vNYEKkFuHoWjwEBiD1hC6XNGdhHGXXKdeX66gb1r6Ezrd6xjVx7qByC3pPQ5QprG7xadLRbR229RM1X8L5BNDC",
  "key38": "2bns16ANRVAq3TJqYxnWftQUoyH4Dy3ZwVq8Xt6e59XXcK96GBGPtEqTRvKkmvG6XpJHYHUSKzfDBVRVSZU5DP6V",
  "key39": "2FVWt7ZqR4sU4Kcf3CVZVq2eDG5G1CAotDQ6w66x7vCr4js2hmcb6kCDaMcKAjnXKyrqi5ENxv8grEqoFfDQe9zp",
  "key40": "3jxrMNf3XwDBcQj2vdx1wwEcXaD5FrKqFW2L48yx1C135t9uofoivQuMvwCBw7qt6QZFTZQwTt51Y2NZXeQ9qZsE",
  "key41": "mwghCeR348P6HWS43UtXN6zK6BXULu3Z2JFgPvJSjM6S8s61tEFbLKJnM1wEgcmPdnfcmoSrvmUzT5ZmujNvQ5z",
  "key42": "2uzKwikgngPfQ5pmWmHV16ECSq8HLoMNSa1wVKoGrfqB9J6zDkFRPFCyCcP6vPJytUdfpcysatafGJeH6MRoPZcd",
  "key43": "3vcn5WSmQ7y7TGcu3sa85LYejBvbJC28vbaAzM9J5E8bVmyfdwcmu9XSjV3EGwiC41nTDyi4U3bupjb3zHSUQpw2",
  "key44": "2cjtBjZHWnePhFeERLeowqSnZ3iA2YxRbKcxsqZZvaUgKMuS4qgqDFY4im1v5dgKn2799jY16xcnN4fg5hkCK6yq",
  "key45": "59jjd2vfKjgwbwYPR3yauYHF7Z4X3YvLf8BMkXbGXUfdDhMa4pcxUagaQBiVM2fboipTQfsuXgwMcfB5BdVi32U9",
  "key46": "5cXCz3wcqvEMwU3E1ytBPsYLD3pfqwYtd1TkZchd64HS7fQzG1BiiD3JKf711vBVzvjSV8NUkyn3xJFE359GYw9B",
  "key47": "5KxhRtgWnY1puyCP1RkdjTA3G9RkSxZJH1x4RzEtc1htG4mUBvPJevXVJeeUWn698Prz6unGyvnFtv7ALp1CZMHV",
  "key48": "4HKzXwf1xDMY77Vp6EMzkHkmPhX2bJbgWNPZd3WbkiNThqGLgWTLKEuWen17Xdqdda1sehNGBeaZhdmeMv8rPvKS",
  "key49": "2uTz5gwFN9A7QhERdjPYcMryuKVkc3KoFKEvfqyjnD5AcHccrU3LqhSq6x5WiykNBqCuDCc6yNAsr45rmr7xPzQa"
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
