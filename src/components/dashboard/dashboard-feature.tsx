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
    "2w9dFa1mfd7bCsFqENmKG6g9v3aCZ6rqyNQgMYQbbBXgJkfKcy5KT8HZEuT5AAXzEYtKu9TBmBk9MoVmZuUXVqAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZqnSEeshcGoKniJA1ifJf18z8ipKVRk7gqGyYm7rARDWhxGpCTAR3Kj3psVqtXoxEb2axN6pE6HK2GexaHYFRds",
  "key1": "4m7GQQxHD3WYA59sX5pZuJi4JzkQS7Ud33KxaZ4cjm4GfTJZBzAzAzyXxm98hK8VuVcrLxCVBZP6pLCLcCkaniHr",
  "key2": "3xGBuQS9mx5mwvfJw4yL76WvueYfoaiCztSbhHngRQZspgQYH2d8S1Fxfz4QznfJuiovwKxTrwH8LDdQThwmnwv7",
  "key3": "1QvL2vbK3rkoxC73yN46qogFWdYreHujr7wDfWfHL8Z2m3qi3hXoBYgjSvW4nzepagGpafrKtnon39HkjtEGdEu",
  "key4": "2jYuqHnpafRyh7r2WRhNk5XYTBHocu6PbVaNpKDBMiyhu6CRB1JqaujQe19nHxAXehpX3p7vcqeEbzAWLgG8Fr7y",
  "key5": "AbMfLjCfZabXDdL1BCf3CABzGaWX4ZoB1pXKtv9pTSuF95z9sLbZaMsm4pNvRJG3BtYw44yXmiEsw8noAPQMZgz",
  "key6": "3s6LKKyk7rFe7Y1hvfoRRrKGMMdJMW2ULD6PVCQZnzGF12we4RM1av2T71ty8gDxwcD9Ju5bitvne9N7t5dj2vhb",
  "key7": "4jTBPxT62FGZqkjgNRizQLF3YHQZengTntD9XvV7YzNzXAi2VvKoXUu9hdpKyCBbXgCQA43VWwBcaeEZnmKGVrWG",
  "key8": "3CavnzzQL5AcDXrXAnhFYNXUYtyhK6WWRNDDftR9UAWhzqff7dy3CWZCFF9mBjJepLZNj3PkDpgyQMNRUmodvx14",
  "key9": "4ds8ZLVBiTbAVjGF931U5newZTiKNorMD43KZRaTZNBL55ZVYuTktX6VZ7iV5jYnh6DkfqZLtvHf6rvQKbXfpGtN",
  "key10": "29T2a1KXpvVCgxiucuBYoEse2Pdd5Q8TtooaeZAMhdeHUh7AiVqpfq3Ccszxn4utSm6KRvszLxRG96RmReBn1Hz8",
  "key11": "5Qn3UsMbkMyYH73VxBB1w6Mz63BFL7Tq7VMCb58ecFESLpouYPqgHxioYdWDA3Xi9TEwWyjXKkEwftVFhYHeHugL",
  "key12": "2mmYhEaeJp2mkfGECx6YEwqbJsFj91R9cpEVb8gW5akyjBxnhXVNkiLMukTNeWwDE8VhLjRvBGJYGZ3waaJbCQtH",
  "key13": "4EA7S26R9XMRmMtPHK5dQSb4nS4WFBSm8buaWgwSP4ktZK98p2KPe6QeiAu4BEgCsyQGA5pSDDCt62ZFfa9PDcrt",
  "key14": "5HdfdMm6dhV3LdJJXELi6fcHuYc7u6faCx2iBJZDmmN822v3Unb4ds7oxCH7tRJM2C7YkghJug7M5zyV3UoixRah",
  "key15": "DokdaWhQUgZRLb6UVSrS23ZP5PCj4SuQmmK7WmLFP2iE7QwmG3N7Uiygg4n6n7Mkt2d53mkk49x5agzn4BWC6E2",
  "key16": "5Aho2PHWDeDNvQqttibzcCy7LHQcKNHrzR187q6aSg3k5o9PEwCiyF9cc8EftbuifKhRf2soaPdT4mjiHFLYmaSw",
  "key17": "9c8SW39sYQpy7Gdr38qRpuTcdTAv15vhpDYzV6iUHLx16cTx9qV2KLgjrjM7XHbVS7emb12W8EiQaVcpgKYJBxD",
  "key18": "527VQnnSFNzVdwTqBRBpSgvBo5yw5CpsB9KB5946MFGkEy7V1yqVRZUJ6obm9MY6izYxPCu1BAS8dA1o5Pvn59Jc",
  "key19": "3msDPpUkBJxRL4Q3ZFNVPmRrLq5uzoA14iUfd2mnbkFvXWjwswASgdcYUqdT7Uz4xBuwRhsjrgbkcPWPGuuEUFXc",
  "key20": "4r5VA61aWVT9sGXXrMjW9Nc6Qd2fJA6jSXsL2ohQhpbjX2wu7Y3hw3FQie4yv6Ewe1HP5pweb4cHKXbJP32dbwda",
  "key21": "3Q3GAe6bBwD6MdzbzWDvjJayjzPPQBw81fhcSf7aJsyC39DcyWSmYnF3mdmEzJ4EWB5jnPHeymvVcfrehX9LBqUA",
  "key22": "cpZ76k36GQRS1PH5mkZN2e7qxcjfbNz5YGcNAo6TKMEyFmBNkuGTAdXB5z5FShbWPuQ1prr5dFewBUMbKxqfY3n",
  "key23": "3zSC1zb4iQo7NTaZasaR98MqKjvcm5ce7TBtjBicskLnRacEUnp7HVwDfmQc2FxvKYucZujv7HXCRmkHYXnsvQTm",
  "key24": "5b5atueuMFg2htVaUAfu8iwxjCrmHRbYtYewwouo8y6aYycnSE4qg25AMD2AQLhB2e8kv1vi9a9TobvGz9TvLqk5",
  "key25": "4J6BReYfgUWveJWf4cV4nkQ5Znq7YGU46KWQ8kwJvNQeyaSBwh1MYgedVx9fgeHdKUPFAbbzZJndwTNWP1NekaAf",
  "key26": "ftnuanDzoQXQq6d3NDymkk2gLAYyKaMKqLnywhnhXfLwsZFgZF27xuBy6CXWEwMnAN4Fxs6C7rXAgf9DaF144bJ",
  "key27": "45fRYFcQb88TCQdqtKoCqfqJwL5zXXi4h4R8D1suy4pGUwriEYzEPSNVrGvKuhquJQ4tZZxDsezbKpLPf43Qo7Cf",
  "key28": "38P2qo2z35orUP8HAypPqDCVvtBuDrJ3jtGj5D1UMd2tJcM5p4usgKBH2r2wYLZ8koXBPak4RHqHYPykytjPTrRW",
  "key29": "3eW4CMZaYQKcgvb5HPyCL19kN6AvCwRN4eALLTkpN3R6PFhBQxtG6Xcp4zFMZMoA4p6CWkzMzMameVzMXaNhqjrx",
  "key30": "4PxmaAzbhpgYVcDFmxpErVWYDfqiwy398EJcnPJD8P1FRW7PEGrR7GdGzUSETweinFqJs9Nzr56Lj7RTzu8LPNDD",
  "key31": "293TFJcsrwDfzvoP6Fi4ruv9KwTArZT6k2c8VguhZSQB6SiReCQuF51U7rRSqcBBNueXm28AvwdApQQoiCVN274h",
  "key32": "3Hgox7Xmw47hiaNLSRprN8fUVVTtdDkwA17fwmM5Kg776rX7iQcWjcw9WZ2mrYy3NdwqFGQtHEAzMgqadxAWzjy3"
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
