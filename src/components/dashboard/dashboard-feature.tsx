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
    "PFWPZZCm7ZR6emTTbA2JcuMmMWBDX9XcpbJw7YAJovWLKC7AKbwmwSmcitaCxzHpirjn5i7Nynp3rvYXf6Au5Bh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p2jB2DhYJeeXfzfM8nfm63yynU2sQCGzDurFVHwY5ucJS5QXF5qGnUpLguiAHSbkBvoupNY24u159k3jKNmPKcx",
  "key1": "2VcH4NnH7a7TjsM2DYNrz6KvEf6LQFeoCkq3mADGK9AZoN116UJMVT7VzgiJbgv4DD2sfBwBet34mqvZBcrhyRjJ",
  "key2": "3J7pqPQmNesQRbTvxoeDhGc5bGvxZdMNsWsUw4531bg5sTGsnB1R2CKzXhuiXQ3Z48aG6DkiEJ6SqurmqMo21YAB",
  "key3": "5ucPXACoTz1XWmAxuTF2JGqTmv7eNYD75wBZBeFe6V5Ez4mroAR1ywvPvjQBoKK7UMZNahEXrCY7Z5WTUMwKJi72",
  "key4": "2wFmyfDhk8uNzEAGviAC9iTXKnSh4NR7xGMJUHzpwkEEoyAPvb5N82PaK256NBDXV4xp8aUqpWadwCaeo2kNPE9p",
  "key5": "3P8mwRaaGqvJzMsNe5Eiiv2u7TyTr4SxN7azcoKHx84kRpELVtQPpzvJxpj5mBR99ZeDtdGR4duNxQa7w6b5Kw1i",
  "key6": "59s7HZ3usZzMjZDyqg3Wueuc1XwWKHANjfAFXPu8EeW6foaH7Rfch96YDfKpwUcfbypipJnzMXyJN18JtQ4BDZq6",
  "key7": "4xoXdWFM42VrmVbrXjPyi4RBg7XHbc8vHvtgcoaHgokFUzUAJLNo8vaDqFwajqg54DFa69NrQa746ovRfqefmD7C",
  "key8": "3cyTLPv23FojidTC7oJwXnxE6UxTV95XRwrxV7FkjtzQ5gus2hRziBbnzZbqwda9LRgBuqoxzC145494PYyyog6o",
  "key9": "3nE6kGjWt54SNoXhrSWXKxZN5F6jNXU5Nfd93puLBP2gpuFR2PtmgdYpRCUUXBqKAa17YSr7JqVVMbKjwQ5R1hwn",
  "key10": "2pTcNifhBfHyBBGe6e7oDgXyMjZyZq33RgYXswLN3mJBdWmf6SA7aSt6QRUfd76qMbV1iGaKJmiQoWbjGcXvv1Kg",
  "key11": "3ZZsUzJsYiFwmSG4cM2FGEkw42fYepB45sHNhFDNrrrNJAoWc3hFKu27zpiNdcAiyoRMzxCash1Ed4pmAa9vASUj",
  "key12": "58ZvSr4JMbjHFxtGW4tKCivSbZrBXCD5J8tuYmuqxTfZ7hi5kRkaG7WTjgRBA3Kp9G2gx9qAdQ4d4gKnQxiEcbjN",
  "key13": "3m5M63kTJvv6cP34yEhFm2LTztom9ZsuZ9XK6F96LmgmRK6B2JS5j9Sv7N9QJRXvoRL3MQADDtHwaxf2fJDFLPjW",
  "key14": "5GUQZp9wSqhsTgUUENcr8k4tHiGL3viekWpY9GgqY5rkCLKDMFpf1BDoUjmS984QFxv47BnZZqMut537MdRG6H1n",
  "key15": "5uaonTod1mgcjjJFzckcsu1APXqEa7ANHTuBbKaccwQW4FbTePiasT4xjnV1o8dZ7Ua6L7CiABqdtQspD9yzTV87",
  "key16": "TPtadj64WZrFyuwpU2jno5FyjUgf9WrWUYYjrFyUyPEqXxEyjGPYy57u22hSQLz7hzkESdv2A1tZtyMypB7eUah",
  "key17": "4grszAb17Z6BwVRjsvc2LPvhydVAPeQ6EcEBkeSLja9m6YGHfq4VAFqo34FEoZ7HfyG7unmT19pSqAusY2GbT3Fg",
  "key18": "23kLVPTTyjWrrY7WgCujmu1drgebPF8VPp3Z3B5PyJp44v9HFX6qKPHDUjG6CnUp1SeH3ddxdpE9jLr7krL5d7Hm",
  "key19": "4RsEkagT8FBxD5zbXciJyCgNJJ7KndQGrwP6GnnCbYw4e8VF371sdZazaadqbCQG4Ep4jZdsSiPiyk2vCB3nm46h",
  "key20": "4Sm2BACjMqBNEhgwcVhKUY7XnQwEmgYEzoXiCjBxtzj5yHauBSe9c7dAmtG6SgAvZYF4GxYmQHJVHaDx1Nh9c5QE",
  "key21": "9rLfuCUxzYwxajuT3THeCQKmtuNfy29Q1JDku9H564NvZjoTU7xQFqjJDEcJufdvcFmC8qpfELHuc3JEyo4cEWe",
  "key22": "R8xwfs2q5gYkfnjwM5z45GKsQJg11gqeYvCZXNmAJ7HrHebe3smnVGL1pSztg7h4ZA4ET6Mkz5HH8sqvTcPocY1",
  "key23": "3UMpLBCKvnv9xV3GNBD5WKZcbrse9AE49SwdnMRZEMH6GdTeCLHxLSzeAEPBMgKwYZXwqhaTDrUMMUKCtT8vY4W",
  "key24": "2hvxextddRCwBV1HSQSHLY2SM1gQVjKkssxYVSUWLAcJWUiF12AYhCmcRpzJrCC7Eq1ELZzRo3D6Q82Z7KNiAHBC",
  "key25": "3QkFvFkuAXY1eNrVp84WUz6Wc7h5TXW8eLRWyAisT57jtbaUfkc5hgk3xsv2aFXft8c7ggWfCkbdfLBnhqg9Vuhv",
  "key26": "pDh6HApEHM7kkVrdMpLvN6a8VdMsYdc7npB5Z5Fm6Y2AyNh5YomTY5DezkgdSJDGDyHKWAuPVmyRDEWr9oq13wV",
  "key27": "61iqa3tjnmtK7EHAZ58XFm9uDtxhQ7XaLwxc5HjwFfKZKs8CnC5HAUdWqUZCsH7U8n9FTBnCPSGV79cMN6Cpt6Sx",
  "key28": "RhzMeyr6rsztKaHbxNabeeUuE6CFmE74pW7QeDXMShcN6Z48LsZkmGemrmmBNd8QsxidsMSfJxgZLwy371ndcVn",
  "key29": "433CK5Bpd7Wvw8ywsRPABR1eobtroSB7JrV6BSiBjCu6DZ44KVPi6w6s4VPL1mCyMVgmGgwrGKQrM2GJfJcqCc6g",
  "key30": "27V2HYGaBcqHXCiV2kZQTxuyh8qpFLGLD7UNmPF9MU5o9wsday9JobaGEpgB6NG5WEUMBARE1DCmQB6xockc1qba",
  "key31": "bdABwHJaSjZ2SSZNfRTuy61m9bCkEbRNJZDfvXgDVT62M2Hn9r2eccZVdDPVaMXrEyjz1mBMwgcXg4JZBg5yTj8",
  "key32": "4wdoJDcsGkU8a6i1q3FQonq2oi2Gbu2vJsZp1e273kcjoAa2TBFUdgCvZhDUrDAedR1tv2FK85xtjkkTXNt61CBb",
  "key33": "3tgJLi9zo4UPSc5uPXmjASHkEhtRymSoX8bSqBvxwjHxaBi28nc9cZrPmd3v2AEMst4Eo46tXzwFowYFnzd5MCEb",
  "key34": "5yTui2LweXjbvp8M9zso4zcSXdSdbXdmWCsodGuP2kXMVwbjjfUZimSaUShCaSkniwHhauPCNYQZDHCum7M8TWjS",
  "key35": "56XzsVKCEHGpbGkUe7XAHphdjpafdYpJCapP5nEnGUzxGfxbWCssuXWjE47cicyTnxR2pR9rb6LTNQkizYT7UHLY",
  "key36": "3hcwh2ECUrJGQUzkSJ87jhK7Fd8eFk97FSo7uGYvew2WYaMYpLEW4k7BpJAiEfmbkrdpyL8n8zXNQr3UtRM9dvNE",
  "key37": "igbAfXmigc3Y83PFxVPucmhxBm1yw4b7HdDbL6yNdv5vAaJrbPnhidcmrg4ZDtY7w7FsQ79J5HsWku71X487Pop",
  "key38": "77pMDWhojUeWWQxUveVcaK3xWPZhD3cPV4tGiLr6E5Jof8pXuYEAX7aAqj1wJttaw8dMkj22yoFJyCtThE4qYup",
  "key39": "3TaJDDR6wEiRDdHm76XphY2FChTCrgjotTFfLyptt54xB2KhBPVBBwKMozb9eFTZTZz3Z6MCeRayhF7AQyaRqab5",
  "key40": "4kZnPFZkEr5uxdvbynSinJUiioDoCyado2A3uuCK6hpFdBPicwai7YcMx9pJmMEdCjaE5Q37KTQUWfSX2cvrRSVN",
  "key41": "2t7ea8NwHfgJEMxf4k9iP8LD7WkcH1JMsZPo2TmM5LMURqn8VyS6GAESqFfyEcEqCjTwf1Avg8pD4deahtNhKqqy",
  "key42": "3SRPGbqJrdtrfALsQavnniM5yFKWMHsTQp3iHtcC7ohQgxRAKRQZUinP8ApBErFjLpWvopTRnxPhbnTFDmk4qU8C",
  "key43": "3iPdFD8TaLF3ur7y7WiVk6cDpv9aCJHkgwx8ZXB145H1mtsPVj43dVYCRY7LSPsv5NHxsEu4dE3r6aZVQmo5Mmuw",
  "key44": "2JugzMVA3wZXLL2aXSqx4MJG43yzkPN2wLYKjuHYeFpzXJC1R4gQgQDjDMS33zoZdnEwidRerEBTVvb16dwV3Zw2"
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
