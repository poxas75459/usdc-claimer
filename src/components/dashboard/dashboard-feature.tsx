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
    "3vshrPD4wqscZi83cqs8G5KhjmxD21s9yHjs5D1fidf2yojaMjtLyd69GfEd5PQ9tqcJcEvniiWCsiGViZn29mwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31HdjgQXipaF4wgBi1hpR8MbrvJM4jqPopx4pXAxAkGRPLDmqWVUpKpiQ2C15YoNbvMstRC6gfeVQhdPcmsKxUev",
  "key1": "4kUk8hphswUyrMbMhUJC9AehHddrkKJrqET68W5UpLcpUp2uVz7oNLmxkYASPH4JXB15RC5y6xbZQTXhw1a3jdUw",
  "key2": "2Dr9RREUa2yY83gkQnMqKEyzqLGb4fAc5Sx4qjBoQY42pR7viSnJRBn5KmgAKNXswfsB9Ko22WcByYokmBMbCwMM",
  "key3": "BsGGcghxDwWZbu5iQxyr9AYFZmfQyRQT4eq9G6QPYbNoYs8GopZsAZcLBQDzMAVsZ9FrfuEbBMK7MujifL8tdhG",
  "key4": "5DGNhgN9ACRATpKbDYQHtiVmqqAiWayK3iz4hAXK2axcVWHnuNF2Vsa6FmDhzcTcaEPJE6pnp7LZMCm981vhbNcg",
  "key5": "4cGtyEtoBi73iUHR5Z3vmCdbP4BG8BXjFecaRzjdi5zLucBv5NSZA7JTW8fxXp5ke95uK5VnZ5fieCrKkWDGJ6aM",
  "key6": "44SzjyTAEwy1hWLaW4JMiK7YPMHRESPr28thAWbEddSMMXAaftoUeywkn2674QyE7V5pVdSFWAm9mWQbGFTfFQcp",
  "key7": "EmLbQua4cTd5rnN62iGJoPSdg9Tng8EgaNdu9AWNPcbVJa8QSaHuKX4U7wc8mMMNgKED8YFde6XGhTFyDmZCwyf",
  "key8": "4C68tRgab88qTyV1s8dBu2NnSWG9Gpx6E5cGwM752f4h7d2MiuD4TqrPLeAzKXtyyrYLf8Xc1sHjBuHHnoiCBmg",
  "key9": "CkJXqn5LpJRi7sdvT8WxwVumV6uSE8vnuV8uKary2EdfmKnFA9ma2LWHwMBbqP4VRz7iuTxMo8VSaMqrBcWrmYc",
  "key10": "kozP4KAKWp1KHYXJxkb1xtfeqan8nNfxjnNnaQi4ywd1xWUnTgxvtfHxjMKrCiyM6BqnmmEFrzZLXJ5C31c91zh",
  "key11": "2N6zDKswCs9eRpSW3dV6keZiTZwacU1xnLedn2s5fQdkU95um5sNy1Qtj7zX6vAyfLQGZS1AQ4DjbfDmsPJ3pqNa",
  "key12": "31ncXz9r5SGXVE6Cz6JPQuDXmBie7uxweApDC8yX8Pb8WREuSM5Vr6K5RhJPXCQ8XVbh3MPB7F9FK5kpCMy2MCV7",
  "key13": "33JVLPy89LYUJyRsjcEtABaWFFaQe9LF4v8QTU3745TEYneJrFRhieZfshHWqiSprHgoqJZaFHB9uGxXuh1emtio",
  "key14": "21CjjKK33Eg2RDkW5oEYyutiMybhjyZidxnkw6oG6L91TiNPiuGKwgNRcfT5RKBTjDEBRAkNeYPjX23BW36Pc2rW",
  "key15": "dQbBCW2gRuRSWh6tvVZ4BGgDgX9FRSqE3g3Lvq5bZqCkmQGFsRjpixuXombBiqf3Cesk8af7QWnSGAF2Xez2tP3",
  "key16": "64wCfect2zEb8dirKNF3Xt2n3n5gPLUtgDHPCcreeTppHKMfjQj6ziYsnjMHAoWtnumC7ppWweErnpmiRvDZUhBH",
  "key17": "2w5WcL9wyUwHwy9CuKTDhCSmcZsoik85PW5UvFsUdKSbnv9MWisTrqpd1KawSfNFyfirj1bcmU6QZS4DSLuyft4",
  "key18": "3KTQZsBmTDqZR9G5zr2BjDh1vMk6cTqHhrAdXzWFb7zJUdnCKFm3HxC5QAAmNURKAE7CQdNTW4wKMkd1PDAKaAs",
  "key19": "5rbUDy9QE9fYTbXHAzkeQMKLRaTg55QCftYF52rTzus5tGmR71XRteNJ1TZ9SSEMFDx7HdDMiX5z8objuwPQUHwW",
  "key20": "5HFPSnp9RwS3wDCPRvSFiEbDDhffR9kPYeUf3TtVbKwYb1UmoJfrFEUhFcg4P7KWjCwi7hV3N37gKnrCnystKfQ3",
  "key21": "4cMba7eefJawp3g4rBj4upKuBvzQcX4me3B5DaHznTYWBjQ3fkGEHUMZSrc7rqDmn87fBrmHWrDcqUgpGezmKppn",
  "key22": "TXqdVhj1azbioJeLtGdQfob9qiKRxPYEJnh5yNpz9vLTndoER35u4a6nSQ4CXPtqnjtbFkCkkeVeEkfEyTVvmvg",
  "key23": "9uasjWDKcm5SxrCZiS9T3y1LeZX3d7CGrthbNGUhhh7kUBtj511TNc9biTcEzLeLdep3uVGHrEcXx7FFUFoh8jY",
  "key24": "4WXZwsGpWpXQdSpsxQH1CY4B1aFRVQkYXSBfQeS1kYvWRPJSxiD4woDAjQazmL5ExVeiHpWa7XDjcnjZizS9nax7",
  "key25": "2kd9doCpnfu14xwJXMnUZSiE1SbTnuYf2iMb1HQiBgVN99k1ZjWoMm9V2SEJ1qcbz1JurtMKLb7tdetGm9VyKj2B",
  "key26": "5eREPfFcgyfAdSMFSgwg8A7qW3ChK2tAgq5xhRQDgqteD4L8zk9etfdeGS7m4ZtvbHifuC1azmG7h28FrQvcKDhn",
  "key27": "4UHnsXvWB9GUEd1N9FziGALC9hTS6k9Sq2LJic4iKT9GrqDrHm6i1x1pHb1ai1fSZ5U6RuHvwppdrxrpimNgdm2Y",
  "key28": "4AwdT8MfSdfqKYkY69ZytGF27dxQ7cb3L27KdrBgLvTyYsrreD3v2LKSYx7g5DU9AWxKUPQQZmMA5SxEZGfQbrj9",
  "key29": "Tk6BptFeYW9PpuuhySZeVtJ8xQqjqB5XUMWRiLJyDpRnCAwrZFMtQJgeeLCWCXB3aN44DHmnkbWwiS8EMHKuJy6",
  "key30": "5XF9BuZiUjzo55XkYZjecJf74dNqYpas58bdix4CEByUWhk8EaZqbVC1AJtQGDiYHFmUSFHMkPRbu5mbMQ1Er9Jz",
  "key31": "nx9ZgzoecgMJAG6nkQAWPnXYEdwUkJ9hbyMFBDAveUH5YcDdSQ1UXi55CS4nLFNW4XG4d2F7VHUP3Vo1Cnv52rf",
  "key32": "26LeKqwpVrhtDzx1opknnvs2HtL65nW8vkBLcqQuP442Epcmaaj8agHfWk3FyagstWzh5Yw8UgrQf54LaPRS3eMH",
  "key33": "2EWbZ46SJvYXF59UXMcyHCToia2zzMJD9HDJkActYQ9HTub8w85i9LWrr7kC2p6TFf94FLrDtTzigBUBBaEviy1G",
  "key34": "3nAqL6u2nWrKUmfxKwbNwbK2rEC8Gnceb4QrojMD8QqsoBpb3vCaSr3XhA7TKuQaBJD4ELrLMbhn22tyXexPxye",
  "key35": "5NnhH22gBG8tpXYXg2WypHbrGpQ9sAkX6SPPs4zLXWAa5ac8T8jnRWd8cvPBvma55wT6mnvt7wkiAUbSXPxDhnNk",
  "key36": "3AAFJrk5LuXnAbzMU9NPNsung6Ramrp1mVaP9aSUREP2F16joyCkyBkd63JGbYsJ8xdJuWERs63vuJWX6fSe5wki",
  "key37": "49L59AVooDnnErmCFD9cHeQM6i3LQCovAdN5LbU1DLrj5AqxRwSM3unbi1fRH7yXm2XJwZeqbWZzf79G4sP3oHwv",
  "key38": "3uL4SyPHR9TX4z7jHgSsssEbuvAQysoNDRuvfhAfAAgRow8FchUPwruV2jXjCDkyURmi57C1PTWtb1VgEeLbfhtH",
  "key39": "5oyVXKXYYqXsqtHuhMvTRVeNRTNgCYE4yzCof9HRBFdMt6P1AWsS8nTocdNztESmkVPAjVUuuQAdRPsEqRhJkT1c",
  "key40": "4Dkcmi5ey4i1eW7APXo4XXX64m3DCrSVooo6sxZy1YGqKmxfV7i1229mgEoqcoq7fSaV5at9Mn5KE5rWW4Fowja3",
  "key41": "39TGMoWsQw8RNWFYbC7QeP8iPWJzE8fePySRFig7RNXbzZnpVstD8R2PmPuhzBrBZVX4puRyfsVzsojuCeZ6op2a",
  "key42": "2vmSJECFYmgyTFZJ6aDRRtaUrFJUcSezrCLD9cDaxVjaDAybJ4Swouc7A7UrWssKmqfwAEQHLTsbZTPudyJ9zcps",
  "key43": "2cH7BC4i59A1nTct5dSomzyS3UWrnFETgZoa55DWSCTeV32oqbT4RYdkkWtbrXY3q5QuhpVURNyqkGDCWSqpGVJ8"
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
