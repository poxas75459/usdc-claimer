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
    "2zhGEzH3Z3jFaAfTfnLgQTnCeAUp5QoudjnnCJu5D9bJAcFeoZ52nqPxpZmt8y1TqS7ykK4tphEtUFXQWV2NMJ2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21XQ9phfznHRN5QmXqMkgLcgnP625sDkmWGcxPWxedHiWoc44CtgJD9mPqrdPfWyjcSRpvvk2S4ujzpK8RLYVaMN",
  "key1": "eUj4oxyVgVwQonoUcKEBwSjqoFKDHjxpUFSpdhXVEdpGrdfZbCex1Lw9CzK1wXyYjiBZyQdnnKjjTSUCwaPSiMR",
  "key2": "475vGaY4v3FkJBUayvvKnkWc7m7cq5nQgkRxWdNfjMjM6KTaJWyuqKy8YhXBSkoyjqn8AoNP8o7V2Crj86ZkYMCX",
  "key3": "5r26CnkCu5jZDDoy65ZYsdFWCoDm1NUoQMFTN4uey4mh8Q6jaYtDVNJEE58K3YpgN9JdqHYaSan8rhfyBqiyvSaG",
  "key4": "4N7W8WoXXcLCsZoBX3MdGbGGFzuq29PyKen11NNcLLRY45CbrcoNXKxtgPY3pU6RUzznE3gSMLVzSHtRzALzvWUi",
  "key5": "2JjdEudKcwMA25apADBSWKmLFdkCsUeT4MZdbnjaN2fGu2hVGeMCdfNeg5bYsX12C1TjZ9pDENj5ET7KPqvDnUhc",
  "key6": "2BZkZne7yiksxDuBsraZnowL7gRLnM3idDtCzFRJUybLkKxR5Bks9fL72HGqcabsqZ2M3z4i7VwPZNQw194THuR7",
  "key7": "5bsjj3LnCBwkt9das2CseZJGPv8PDo1u1qdMEYFDp456cTtdkCoN9sP8oMzGwv7TQzRoMNa7aFQSmp1h7j78dF62",
  "key8": "4BRcYwCpGXoLDKyZK7GrhkNVAThBgSmQK2BnQmJWWVQijkww9Ypf2j62zZFaiZiEpynDkBShPxs5NZb9w9yuEgGL",
  "key9": "5QS1fet7WwfJtEV6dcD1mXfa3VHxoJaBy8h9PLobfauRz6XoUpFAGRgeeiNBaAtPyGsb8VNRX5QkAzQaaKq6c2jb",
  "key10": "4YuCdPgRUHZC1vRcpaCBoPYRYp1ifru3DroC9bkog6Vniczg64eucsSq9qeUSDrgQ1E5aJ4vvWNR7dLDhZ4meoDF",
  "key11": "CMt6WNBR38bLTZCaf54V58JaZcnRdRUE4hRaFzRbCzCG5uMkZZHRCwSx3cPJysob1iDoqZbzicgggwTu9Mxi2BT",
  "key12": "2WtNnLTHSZsXzbWtCB6ZdhSHdba1zY4KUp3oddbq4Qnexzc8KHXXWRVPXXB9KeJ5UVwAg8zQ4PW3jekzn6Da9Bdn",
  "key13": "38tmu9f9k81WwnxRNzmdqrscYundDKMCbbDthfsejywj9tbXPvR6avTyobNTdGrnsPqkbNuCzbtYwnkHE6uEhiBo",
  "key14": "FqnAG3oqcf8JN2HPbNCxxUZZiwuKdv6LcPi5oxaPALGpoEVCx96E5q13cD3FD3FJtATvJ5Pkf1ParNPMc6UxEzE",
  "key15": "3BqY171PxFidixZvDYoNHbm3moCRMPKLjqB1LvGNQM588ZonX8YxERHFNNznCsvpZvf4UUMA6ZD9BRwYY2AhHU9J",
  "key16": "v6iLxcjWgnn6eoNkFSM6NaipBwSZFZj1PF5C1f1B4SfeTSGPQ1UfLzGSMmgVHgoNLFUC8JfLa2S9jJrDZnTxDnz",
  "key17": "4ncYtsmHzgNVy1C8TmxcY7sXkx4oZ4FA87vt2KvAUkjbCyCPz7AWjVLtaPvEQk9vUAJqckH2PCHGvRoEKCxe12uC",
  "key18": "65Abt3mpJzgaSPrik1VTdVgrnR4zWfWXwKBBHPXTegLM5p2BKbfpHQeFTDVd7Qg6RAYdKfLf6UraERPppZhpPYx3",
  "key19": "2QhoiBgPAdgdFYdvsBJwWmdPGZkpNNDFPQzSSTZ7S5EkHdpVJUzGXTLoGsKjD9PuQHE1bWwSKgsLq1SF8VYgxAgd",
  "key20": "33p6K2pYBt6nFa1qgB5DbC1w3qj2qiNJdSXJPMsjrzKNk2NKj61GooaThqYbxWpgxnYaFProLehxXvACJshVcsHq",
  "key21": "5L5Nz24LXSQNtBV1iAgRax9JKL2sePvZ7Na6M26TNBNGb58HCta8vjtWu765e275eWTcduryhbX7ZU1V7BpDBGjM",
  "key22": "Y46F87dJxvdfCUfPXg8uNxFV5ZVoCTbDvCJ8dzots9FQAGn4mtFY2Jm3XzYZGZ9z6mQ353TzN1Nie311fF1Vdny",
  "key23": "2GXGduZzFsUcweyZw2Gxt4tKs9ipgHUzRUHUxmxTpvwNXYgxvCWbrYjcL3bMw3TqPm1QZY1HZQj1vZhorZqwtmbp",
  "key24": "iKXxTzyWV6VF8dJhN17DBV3rwCxEz4qrdA5gb34tnFdvmsK2XyTYcYxbJjch4RfibBzo24SFvDF6CbpJpr2TTFX",
  "key25": "4cGKfHTU8yCHYiWHJZ9eB2tq7MiGA98Ue8KDiMGRDYgNUjdKXnsxYwc6Htqdj6TPrj7F1aXjsCkS1VVNbFgDY5ty",
  "key26": "61H46o38kt9DM8MSnjhmDjLQAgD5p7iHBu1kZ2KJUYN96v3krcwcBmUdfdnZHhHJtp2jV9sUW9LKNtsJvZHFzcjK",
  "key27": "22CuATYHDUuhKNKejPWmQWGdd1SCwsUwEzSRpoZUV8xbLHVS981rK3iTDpbM5Jmxi15iPWYoqL4VbNLW7QEDihmE",
  "key28": "6jh38Jfw7NLgjsnnGKaoT4Q7wEGm5126bMtjX3GVh1uZpmKhnhkHozvNfU7WWpUYmU2FgQURyybr8mfKr93Q651",
  "key29": "5DcnhpDjEu6Mj9houXqajppquPrsz9mojReBpDsDATnHkBWd6QbV2yBpe1gt445PJsTqazEHtbdniYqPyNAodpDt",
  "key30": "p8gBKzWWL6f3Zz8BZsgZdFu8SHruzK8nLYT2gWae5ULiDfG5uHTDP5cY63hDug4aPJ8zt7EnxEwoVhFVGuGKvkx",
  "key31": "L8c2VJ7UzEcMiitVGAi5J5PkD2PNrgGY22aVQ1c2peJjZjBEy9FGZ6Q6KoxG4ViM81w9ZaFrW16s8KWv5HYh1Qh",
  "key32": "3MdtSWTeWu34meaGidDrkU9AkBXXtpiqraQFQJFdUroyc6UU7bE27ZDn7QzxGmvvbSnAuKUBzQ5eDHQAqUPN1rJ3",
  "key33": "3Z3CsCYpDBsoTgkyFiiUgR7Psbng3FgSWacQNGjCcp34KJ3AXjCwpNmsLvmT71aTLuMG1k95hzj97zmJL2KRtFZH",
  "key34": "5UtCrkF9aib7Vx296aYKT3vS3Bn7992wScAgtTyhTzgqMNWLLXfkS4gofSkS1gN3iDFu2SaNsYpJeEdjvKtq2wC8",
  "key35": "4XiTf3aHMtVTPWiJN9kLGAToTa6P3maoNx664DY1yeJ6dkfctd9MawFN9p1WNm5jnm2oWFBx2crcVbsVtunKyMuZ",
  "key36": "2HMSAJPXyhWioXPmNSpqg57jHBDYxJ5op8edvXbBihPtYAV5cPidUaks2XPAxSJf78Zp1SRiaAi5F9nQMcxtsskX",
  "key37": "3BDa9j7ybD9vyHNmYUaGDtVKVQFBScPP9aHqVicrq4Hv2ymy88SYxKGLwQ2UiJGvB7UtR4XoiuNzqmSfjsBas2da",
  "key38": "rJrfPz8bkHDHYXTu9QjCbUjiwXRXPTvywg6RW1UBNedptn5neqDqQGxz8Emw85ifWw8NePhNYQ11GdDVnbBBtKi",
  "key39": "8cmPmKYrbfHzr7yeZ4jGeAXTSk2wDEqixd5vczKtQWJwNPk2sKFsaN8hdFYtvKYS7v8Cvff378vkWZnDtSVBw8d",
  "key40": "3QMhTYmgmhBokt2jz9iLc642yn9U6snJJuXSB638715adwshwSDr4nuNMjhxFQYExRfhT4AhZUBR62nkstGnv3fm",
  "key41": "v9izspZfjVxc3yK6YurfLhdHKmXPf2Y5x5d6GnMupy97tFtBriu4JocS6uFg4MTeYScESddiqgei4DzRtfexpGh",
  "key42": "4nLH6KuP5Q5W8LNwVwRXPqn3o1JkePv4WWdTqAomkUvbVEvnfP4iPLb1HfSc6HBFTChnZjkcoSTcWNiMNi2Ros9Q",
  "key43": "6UVPm4MDQ2ZyWM6nwGuWghHXCTwAQXTSMTJ39Hjk8uvDK8GJunCuvBiH2pF53hrNYMcEDujagxvyu1tWgtBwtaK"
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
