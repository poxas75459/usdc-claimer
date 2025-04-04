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
    "3L4aTXopauYWPym1yGof5gKRg7Vch6cMyW7R6dofWgru9gKowAcLZk5W7YWipo2EH7oWTK9GQrVXo7Hzvvw9GgXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44ngVrCSauV1ZYfLWmzMSNJiSWDxEMURW4ckTnz7DoxoBjfErJvYAx7y2SoGW6rtwmSJH8FN7bQ8RU8LmL1KfxCS",
  "key1": "ARP5tTWJj7zX5WYHwsCFi17Pw6z7p6G2VKWSD8J2aMnoG5J5ssK6YQ8ebzBreejUjwMmh1oVuFc2YEVVhisCkK2",
  "key2": "295E7Gv9Mz9fQxNeosLMCTEWnp87magADBSNb8NmjnR5khhNZ5CwfKG38SzdhF3KX2PGvX6o48Gfwn2YKAXkFq9K",
  "key3": "4T3zeVpe6JmyUqD3oNmaT9jGKewXvmiV3quVT3Aukx7JFpZPjcXRNi7UV3hW9FmWHvqv5T789P2kir53ZbPYnYnX",
  "key4": "5JUs59j9qEXuokCxoHjVxMwv2rq3sWS3QgXa3ps23sbjoYV5YurSdkDiLhb1PJZLJ4dA9nUPgi7j6AqRAi8nYNQ2",
  "key5": "4ntkB1FzHK5JPEnS5sRapHULt1i2MDaEK6xx8JycPMcw6sC6ycEhGF7gnAXfmY1P9gkUEKYfoizuWrL6wgKcgKBv",
  "key6": "4H83Jo5xK12j74VgySxnCQpSf4u3BZHMS8RkDjqYoHvvdNMddmUAyFr3aWb1nFqSPjtwPjJh1cbgRuWSZDXygnix",
  "key7": "aM5HNH4XfBr1nLBKB4aXqConzxc8m1AFRy6jv8veddDz5gp5mswfH8Ut7o55xg2Fmc4BSHaNWK8uMcKD6QiGAJJ",
  "key8": "63Nijm9gxfnHXHkLc8c4zFVoGQkv4WL6N7DaQZeCNrdVBmuQBoGGyGmbJUjTb2ahRPUqHruBAxf2YZ3Fj12MoSzt",
  "key9": "3F4TPJhbscHxM7pxSSXMhxsRuBUe5eGR6jNFNgYCKYXy2rqbXg8ekDBB3RhzLL9iqkJn5FphiFNPcLqM2czhebpJ",
  "key10": "rNJwTDCtD1c5gsDn268zrgd1mXFgELsq1f7KN4kFBAKdMws1Q3BkZV3ezozg1oz2wY5EBuP5c3eygpv5zd6qQRo",
  "key11": "2AWcA4MbLiZg9CoYGHw9fm38CGd4DyTbKcaCSUFMg41JKpGnLpXRnSvv4mCTx7n6NPkhaqi7X2GZyBQhfyBCj89u",
  "key12": "3dXETXxMoxhMvLHhtoR12zPwZA8eKJMMLodJsCRr4LZ89ncJARtkUhJtM7gVMH9cLD9MJyQwsFWUZVF995oVTss7",
  "key13": "5PrHER6zCfQejsZHZt3J5G7Un11AfqfXn3wyc7dBN4maKrFGYu2PqwgC4B57cpJnixyiALBYJHK5nhwj5HXRtEBg",
  "key14": "3SHfUTdsRVoAZU9cjhqVS995MioXj5qyzMreKNCiakP3pSKeMmfRvVDMQtaqxXJUKyJiNxfBDYDhRwKjDZwKeLBE",
  "key15": "5LLyghujfPn9CS3beKqxxszV8PdzKGRoFkR5QmbQ41VHZ2epQGaENPXdnncpKc6984xTZw4Bn95EpsxJfZqsh2gk",
  "key16": "2rVJLtJeZCJd5TX2rxqaJXMsCyPWg4aKLce8NwMf5bpWyywadujsiFsVLbWfcqmoRCmo4A5oPTzrFecHVatpF74h",
  "key17": "5GNhoRLWRuAesnBNnp6Mx4jCA7Mht73Q33UhNDWwBM4zSxmX41qq9owXKG2MQGP7AbjZxshv85KyK5t94az22zCk",
  "key18": "3agCUgPXDqZSncfqzJrxvk5fD1nDoXVaHA86DK6G5eNxMhtw6whz7vn1jeiSV6229YSUqZShG3bEPY7DeLQ1qBTF",
  "key19": "R8DhsuU54WU5mS9s4JdEn2FcN8vNe6cyQ3wnmnmy5Lai3gSEfyfHCXkF95BysRhhVDnFsN4f59Nb1nTddQLD846",
  "key20": "4ynx6uuZq2TXdDYJhnAnJ18DbHtsbWWecCVsYKgsAePQWbBFEjLfjFVJNYNh7qYWhh9iJR7naTevJXgBdaRy5ucz",
  "key21": "4cGp61Mxbx2nQ2WrJxmYcc27a65DtjievjDoqMaAwcSK361WRY7YeVFPoboS1pkL95zCZgpXNrevYfRxEsdRfVEW",
  "key22": "2BjnPFCaTJ9oUPmigJhp5dJNrY3inK31QW5SAnBGhtMG2dzSCNw4nDkSGwwHvPnKXKeTZfzLVugXBizT9efuswys",
  "key23": "4uEPUvHnzxLb6yDsD2BwmsLwF6yVoA61TtaVF5w4CeEmBLs5FcC2dFe5NjGv3N8HVERAN1BGEeobARNYT11bNKZw",
  "key24": "5WkNrVoTofQYDjqi6Dq5sB7gNSmeaLZnJ9bLcx5WAEn8Dyghxjr9JZ1BR4qqc9HkQbS6ES2YvJ629Xcz45LBeaBg",
  "key25": "4zXCa5rsnAeCet1YUATtb5s6aTMS9hwdPFjtc6ijV419ySUsb9tKHU4N8WWPRESNE898nREZrvBrgWkU51Vh8xB9",
  "key26": "2aVjo8nmUdwsYcQEqrB8vdnzCgwgByYgszofiLCWzP7uAr1uVjhEMUAGN9issjaRwWtKY9kNnAyQ5kVRYzZiFPaD",
  "key27": "3uU6Bo9Rop12zT2ZKJFKfhWwU37AhCuQBUiRwLhd5aFhvk6cQzzTafyur6e1w1wE6shpdLFXVWs92APdu2zjVQ5s",
  "key28": "oAp95gvkXV15xGZUYSArtyPkeFuijU4eQfz6XxekJDHbSvKnhRzFQ1vMEBEVxWrYyw1YGTAfeuozPzwjfFe5SmT",
  "key29": "236RnkcJJiZpPQ36Swmm8FjUpn4itmzhPj2Qus9L1aC9yLP1UvfHVw3byyCWkfbpKa6a1Ppmojp3DDsyFoLM6YTt",
  "key30": "5NnVjJmkAgoRS4SRpjVXxJgBwJn3sxbQ3Sd5TNERVTZnfFjncms41m8Xp4ua3iPi7g31jgLZCQEQnMrqDgjGszYM",
  "key31": "5Bh8CAzgeeRVwDu8mv6TEjcUvAdUS5z3pnvRjogdWUUNb9ZKRD1vgWwU1GfGTVNjtb7gNmA7fvJcqCuyBzeMpCrv",
  "key32": "3S1EuzJw9nnRohtDqkB7qZRdpK7YN2tZ98Ge563QUJuYY1aPkKceFBmAQa96KVgBFb4xq6S37gfhrx4tqcapHGE2",
  "key33": "5pqdmwFTakFe8LroaAaJbHRdgob921KLyeEAne5G4qSNQDac3JGyAy7AFAHGJGd61Vuy5pEwTh2DQvLUw8SxdBwU",
  "key34": "5284NVcB2bwWh85A3YawnE6nypWpmjwakSivNYLfojNq2rW66SjFwR1kKyknNV6P39czC5TGXxSTXgsTfcjuX4Pa",
  "key35": "2Tss7toMxeZch8xZ9qjxJ4ogXTwSaUmgLo42UnzkYw84bn38yeE7633bkRcVdDqebcGgKdJ64F7L5wp5XpPArEHo",
  "key36": "Hv5fVYD5nsoofF7ybp53cyFZNfCZ2KeRQBBPNd33d3psYKcpXMJEcS87NCVAmFJDYtQ67ujkCDmFrQiShjTU7kd",
  "key37": "5VRzxsNghvyLFRWtMaJbu4tMGrRQaugwwDgdPQqRwovi6zvKzKEiJkbHyZhXAGdyWHh6UrP6Tf3N8UZx1UfVuvqC",
  "key38": "45FXWbm367L7cRTPSTM7Lr89Sng1iJ4Kg2ofVUncrie66wbXsVsKToyA6UJ4pEKwSnY9m7Tjj8cKY3MFfZZfuck8",
  "key39": "2FWttz8MfhdtRmEN2gSnWPoAwM9h1xGwpkAp73PshwrUkbMn1TRK7jzUZ3vAS21PkZdMRswy7MhujHFKQB81ahe",
  "key40": "2D2jRbVyaVfEmR8nwRrNPcedPCvgV91qfNxrogweyEJDwGZ9AvUforkXqL4Uyn3kN1x6BynmGmZHLpNgUY8ECENJ",
  "key41": "2JsbpYCnCyY74qemaWyGnRHzTYStATTdrr8AZRiRLuxDYWWFhqz87nT2jTtFMmkuaKJZRu1AJkXB7hm6BmiHaVoQ",
  "key42": "51JMbgLyjBuhBJ9FRduzoKNYepgpJumDJ76MVuVX28pzQmsXR1fTy7gfE7zNKf4vKrL3p8FVtcBVP4d3XtxFc3qm",
  "key43": "5Usip98bvEYQn6ChjF5GUkCmTnC9EY14nGF9oVk1c8o7H6btiyMJcyUrFkinfm94oeq3ZQdQdHiKEN7jL9rRou2J",
  "key44": "4UiNcq5sYZPr9G4g8PDcZZqispAVh7LdoXBTLUrQ3JvPL7eCfkFDnmKDcY7j8pqyqxbvzezxtD1rRTRiWDfN2g6m",
  "key45": "36vjS9H3YD3ySXP8gVrfAY4eMQD9tXCqR8cTSUDKHAcYZX3VpTWS58xAL4qqQjPZzfrFU6nPza3E6WmKpJ7V8nQ9",
  "key46": "2GTcPvZTZeXGyQiQzmogyR1dpTv4ni2pq4S2Uyvimb726j9aZCaRjGh1QKYWgr5f62sdYDj2JrpMWz2Th67yMaUr",
  "key47": "5xcTKTXxHK1siGdfShQqTmovbh1hKwmG5JtJEGAk2bYa2UEeP36pkFUZSkK1Dx8S7huXDxGcoe7zetSYvuZbBwEX"
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
