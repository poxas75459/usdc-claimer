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
    "4ivTUTLJdrTNWr2t62sAp3ga3XHiY1nxq8AAJqeZihExmedc3cUyEwQf86sH1MnjtSnfifpmJx2thtyDAjSDE2Tx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37W8evetSP6iBZhszGUEGKMxbQGyBHLxAMYXfsSrDD2iTFb8R7ZvDQWT5Da1Mj73z8hArBCEaiactoSkWNGr3Gkd",
  "key1": "3nghZz9AG79NjmFZpMddj6US7ic13Ze7mB4CG7AfbfkTzus148VRzAn1DDFR4RstAykQxdrZoaKEtAXpTm498BSA",
  "key2": "BXqGqqHTjxGwUpUmEVfcEJpyQCzAQpcnATN4jPzg3BBcgJ7gtDBprAEWeuBfrg7K2GMpNDD2E2YwRvmWHyjG2Rf",
  "key3": "4xpzrky8ibH4LsP5J4XYHs7Qh6c7YwbWJUdxsBeiQJPLgywWpjzVYnQdbKREMAfZQP1fKAB3RDdu23qPR9NyZcva",
  "key4": "2VhHyzssxiBMAW75GS1dhNmpLJEndNquHhJnJEZTD3eyM8F48BJduKUac7JtxESpXrWAMhfkBb7DfhiETCa9a52P",
  "key5": "2bKP8CuL3q2yBD7eJjEd4YFzhgDND4bKjDyvD3gmgHGP9rdhaeXQf8cqgdsJALpTDzW5Tucc3Doh3UTHV6BisNzP",
  "key6": "5JUCgeTwu5fANJtViMc8tdvvYJ9y5mrLtf9Rhcqp5UFazHjhNBgaLJMQRXoZUZwD31wbMA57EbfRYoUEdP7nVaLw",
  "key7": "2DmHMJ9hcmU3FcSoQXmZdQ9nQVNMhakA957D8MgwqsVaWMHQQ9BBefjFhsU2maLnXkKhVFgQFqRL1N491Pf9nAPk",
  "key8": "2JVUEyFCPD8EK7nPpReBKeq8mj41svY15bRJbstKKcAEhckbnru1WxcABeyvK6ynTpzBj5Y7tzFNRc5ovm3FjfvV",
  "key9": "9H2AsacXL8Ma9mSqzjeLGDaSKq5QxDr1NHhrEHkhyoXctU1Few2bX8exWd8jakLetM4xAMsEnVghCiAo1hABooq",
  "key10": "2thzGoHXuJX4FcE7Hvfs76PNtRDbYDZ3NwcrDSavzvAeDcEmSqy9U7EgRKpjEPyuFHVmzZ5vjCc94mJ1t79f6WnS",
  "key11": "4xeqyKN1vHLXqEhTVZLUPCaxPGhEPF8LfeKRwRXmmYCdmVJg9tBzQzibCUAEnqaj6mfMhE3QBbAcMSE8pD1cV7qQ",
  "key12": "4egfg4FoXWZZzwvxJavvSkLsd9n1jhiZ4zpQ6Q83sE1xD1EqzcUzQRp2sqa8uJN9WcNvzoEKSRVUavdbf2MFVjf6",
  "key13": "YydrY5EFgvvkhre8wcHT7WLRTvBZWzpVPvqdBvW4rYMabVb7XbngPXv3YSkx33M5jYJ2b3hTKQ3g8d5LygSe36C",
  "key14": "5JKVqxE8nv53wTVUJw2qgoNJ3jiyRKNwxvZ2SfXdnXUoe7wp3kW3Ey6669VQedqcNhQ65CxS4E45g4biQpd6LE79",
  "key15": "34fGRqso1itbExJqMrJWf4L5vMNEe8EXLLu8UdKhqeJ7hdbgvdwsDK2qUSkub3zN9xQHkSn3EupuUs3fCMvzbQa4",
  "key16": "3sHJraRQhroeAipqMRoJ5Rcr6cwZk5RrcKANnXiKjwNbuobiAM4eQAUAEqdDBXnUaXceYzMVwWpC6cVNiTCqHxC",
  "key17": "61QqfVXh7rvvJC8tP4N6LJLNH6kYvbc2LVw5ateyKMxj7Joc3fAa1jidLpdEuk6CGRgSHuWdtsVKafPkLuYwUs4p",
  "key18": "eGGR9Zm6ktrrX6YzEFyXmTiiF1b4pCEX2WbiVMtXVyUupnm2RB278KY23hyUQhicg9ADf5dPrYhd6x9bX4ZKsKS",
  "key19": "4f7e7w6sPEJSuW1vf2L9rrCSHqi6hUk5WdiUbMP9gqkk6EnJu6GxgVH5PC5RxzEAVCADquexYktgMfZb1BCfMRF1",
  "key20": "ZEkFm79krr46Ti6Sp2ukoGUzGDdMt1VmdXq3FJ4xEPg81WU6YRxmrRNKRnMUXdE4jNSBB3q74dJtFRVeqhChapG",
  "key21": "4jruoUEQ5CoeBCyGA9pK4HkfFsHD38BDrX4JzwHixESnfYYLLE4hmcUBwyw7t7M94eqzGfQvj8e1Ph2hcQM6pAma",
  "key22": "3nRPnauDo81YVEjnj2UqskFwRjfHsCc5sjAc4RBNZk9cReE3gScN1mio1qr7ygsVjZo2Rcb1LnY6EC12GKkqqhao",
  "key23": "4e3ACHzjcDJE6QwHVoRrRWYRbzfuNM8oWxqRoBzwTFMMhaxy2QTEw5z9iymV6MBVSgfKpRCEqZcisyFubVvGsonM",
  "key24": "2gbrxKUYdJuFF9HFq8Fra6YSvj6ieNFCT5pTZVfucmtdMzq3HwK26xCEsksYE2MagnwwkStatuuAxD3uGNLYczeU",
  "key25": "2k46sPA9DU5LWqR2T4ZyGu8euq4vdadXNVJdpFrw5L6dntaDn6uKRwwYzuPyUfZ3mJp3yrhXb9n9yh8G6Bz3YiqP",
  "key26": "2zGm5w1ZCjmYe1W45Pthxazu1gVkaEJH3PCmVC9Uj39DkVkXH6heV5Kkw28kxwUVpeHEksh7ysV3whxjDJXhXTYF",
  "key27": "2YiqLMPWFsX5eVLfsXLgtpibL4V2nEaHr94r2irvzNzepMfHbiJ8XX8x2Muuy9pK6hMsXddADyzixHLGHcDyK9Nc",
  "key28": "2wKsEEifmdB5yu6M7dFoJVkZ248ooYsVRfqeQ2hfvWh7pXxnbzCHathuqUjjt32vqAvZ8y1J2kAZpqv2mitRrux1",
  "key29": "3xGkqMD5AYeqsaBdriwTpn2JTSKbdGcnGTEk69W5W55MG99KTyQ9sMa4NdEiKDDrmAA3gZFFEDYVdjpCjxW2mMok",
  "key30": "26niWLHyUr5ukL9nV1oGu3VDK9ij97nLzyX32A3G8E2Lz8aivasAtuZw3DxMnTcPjpRXpfx77xWv3m7Pxag5ZtMJ",
  "key31": "5mHTH5ib4YSP1DyNhQn9vFxMLWDMykzpGD89bt7dGSMZHvnik94tbKYzyFK2xS5h92ssmEaDCebqBMyeU881UQdf",
  "key32": "5HKtMZsK3XWy2Bi2nXE6pvNzR6Z8iBrhfTRp68CzkKJjkz3BeWpVFEnRYgHDVZCmA5QeSSGXwoyw53q5bJRsx8dM",
  "key33": "utioe5UjmUZroCZACD5oL9dUX1HuErXHxcZ8fWWyQq24R7AjaW97yCNBkmJGc7raRmUrEEE4vHcSfDrDxhszgg1",
  "key34": "3iq65r7AD1yv3xEAZFFBnpXwDets98smSaGgidGJEYYATZaLnDKQECMcRRBZPYabmmBQQ9pdTuZhLczrw8s2UGCY",
  "key35": "3qHCAL5waLGYKdBBzXCgWwRgH7buGsGr3FiJak4b8v7VTfTtXd1mVZCEXzyyLdshZFxh6AdzPZ9pXWPhGeyCry1X",
  "key36": "35ELdWAv29xuD1iHi9jJj9M7LxJyKY8w3QYrZpbMPgJmcLBQiPhXXgea7SjTytzpokDsnHEPZUkqbFh4LPqV62gg",
  "key37": "3csFec42Vx2XNfDvRTEsh4MWdQGbspLLsYLi2sasSvJvC9tTzXXQwij5MrbueF4a2tgHCCKkHQqCrQaSrDDTTPos",
  "key38": "2nvD8KMVG1uFYQBH5TKrY5BKDkyJq6Gyhzgx4BZa5PsLgxTvgRoSfbMDFUY4fYBprh5vES1MAqU9SmRxE89ub8GZ",
  "key39": "5q5tCmuDGK89hQJKjF41oSu8MSrjmXFPA9cvSyGDAkH7is6BnZSrHUMLn9wikGVRREnMFCTTASGGwhpJKpdDLVTw",
  "key40": "CvcBTeWStJSUA4CrrfJpTgohvPnHYDE5QZkEnPWHacZPwoznEC74VLDUNQWVcnE22VNF7C11oxcYb1LuwMELc4d",
  "key41": "2cAo7WJYXdLH2pmnuXnaSrByCghCBrPeqbTd9scwCHP7AeF6VL8PgbQHo13SwxPAZjbNAsKaAawizykA2hmuGmiW",
  "key42": "Kix8yGAA5cEN53nv4LQKqy4PPPs7z8sJwP6MBNBVeHDBW9jaxTgRhwin9To8DaQte818ZDXckzzxwTnu1iyPUA2",
  "key43": "WAHYFt4v2KrjjHkXxYD3i6wFvN1NG6SEJ3DpfiWFKBdxtUaqLBRWdfSMGrYghXbBfrj5F4P2zqhC45ER5asGNMD",
  "key44": "5vtrLcuVaLT8GsmFaZKEWbJu3qqFdD9YXzouRyyi6oabtoU6sbdRcMTdWwUQvdf8RCxtoef7BYtNCs7t6yjwHCwe",
  "key45": "hSzMqFdwwpCUoDLUWgVHqKgCMnQReCA83dEiVhubTjBQ7F8fvJyE2ZAQcgj7XL5dvyvSWYtKjmjGQozMkVXcuoA",
  "key46": "2tUSrbQjMDUQbjtsgjLW8t3bj9mbLn2MFkMMkyxm2LMuQ7AZ8fhCCyiKw7UENp9qJCw9FeW2oMHtvb4xWz3BWqSa",
  "key47": "F4gKPP91BjYhmDF5cwj9HQP87ZN7LXaVzh7gYMV41R5VqEqLUDmCB2B3HbaZu4LCrj5H2gvXdzRce85WPbYGHBo"
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
