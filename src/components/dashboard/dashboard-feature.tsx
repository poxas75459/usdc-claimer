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
    "oGcX3CVKrKwHeGoJtgBjpR7X3jeHWQmPFDtexEX5qm4GsYW7cKKkfqazKy24uAiZ1uW7jJaz2QTx3if6vN6ce7v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23kC5ZimiEDxMpT2c6y4oh3KHZqd9MtsVncPGo8kKT23d8Xhxn4ibnZSztfpSVY3RfTVga5pcGPUdPDmfH7Gaacz",
  "key1": "64awM9ZURt9qYngK31Jdow4dJwSfPoqmvK5fFde2LxMuqAwXrkSaF3nmEzMBYrx8ff162UsGXChuCexRk3wbqfND",
  "key2": "37QsRawC4ABfLEbtXmSJnEMWbMQZaL9yFZUd3oxZbpEZA7Q3BeRVXrERNd3RBT6PezCqvE2eqGUiTkDDszFSraDi",
  "key3": "3YZF6h4nNRbUaJyoLjYFgkkYTPBWdkezyqfHKdfHMj5nTiE1QvpWiiihSsTKtn9qC5rkZ9e8BkF8KGBeGUE8C8Qa",
  "key4": "5NTHBRTxK4XCLenqTqELkt89S9oGaqTEYNWsYPHPbJKEj7nDUAuWAw9exxJ9wwfRDj9mcCXeJGYF9h121Ea3h7B3",
  "key5": "4fQeJk3utZNV3FdmsgViCPoFv9AzxnECSaxWUEe1Stk7vaL1A6ZRR2FhcDxfzK4T2owPE7dDRARCGk3PFTLHbZRg",
  "key6": "5DjTYgeGwYhC3kfZCq7SQsrdGXDajCVJpK9U9K6d93FUU4gJ1asPHXexA1oLzqQssG6LuoaRB7NoLe6KTrYMWRbE",
  "key7": "2DxvhsiKCTwhJ8QqxQxCpQXdCA7XxybvmzJbmhvfcaMaZHRrepbVtbXo3i8AD5vCGEDkbcxtZAYC914sCio1kVJo",
  "key8": "5AXYNFNq91oNbeYGQUd3aKh1PkcKzg24z5N4MNpA5mNQdCJ2Jwqe6HZTANh6qmpwWYvZGDXduj1zcY4p8sQDoj6N",
  "key9": "shNqaBjmXAmKhKcMWPQ91gSZg2iFcS6w9fugBQ1BAS8LcySjxsvRP1s7PL9ksw4yFxyzMg1aMK2m47h5NJbqWYe",
  "key10": "4yxxA9DqHSoobt3pSgFetXUHVGqSnhcudRFFxLxzSUXLAURwoiyu9cFuPYZpK4nYMnYTQiJznoq5P7eTm1rNZS5t",
  "key11": "5QZLj263xGPjgey5HzgawjKDco95EDhNKxamC4QF349jobauBCaGYiXjMcNowfz39vBiCEcAs1okTso1F59LQobZ",
  "key12": "22pj3Mt1nLRpcJp57C7styaWXVr6c8UsQaMfYc5CTR6P8pHWbDmdEg1uYiMBn877VUZBuXRPsN6UQgaEfZi2x1HG",
  "key13": "4ZrDNE439rKmVQKkt6jDpVuvK4UzRQLQRxNHNnps1qGSrwk5GbQViHevgfSWSbNNogMgwsKsDGceQ7FrpnTsz3E5",
  "key14": "4x47r3BEcFGNDakDMf4Q3PUj2Si2mQG7zrmdTipsH1rxH8nhqxMKGvvTAjuXZyKaxCTLufmKEMCyRuwLHGUDq52s",
  "key15": "Bq8yTr1WDBS1iDQ7pvx7r3ZZrBCuvtpH6pr15QQwSXm6328fRVJftCbNF1qUDZKUsDydGYppdzQAwNu1rZfzcUU",
  "key16": "SfHnURKvYohJjXrxArdcTuTwVij5156Ho7aXQyCiHirE9AfBybrzyXwSQibHkk7KGNRKykBPKUgdNK1uqdMzFoJ",
  "key17": "51G9RRYj7A1cCHHxxUaeUdXobR2NqrGGercapM5fMLiC5PauiE9ZnRMvwxvKzfZNTu6k2oiFvwftEVAcir5s4QEB",
  "key18": "LUnJg3Sp2rYfciJAK3bc6iaxLJXf14wJ1uCZzFCEd1rkMSZC559ndizpZtaDjQ4NAhNUuvijeRLZYn5YrqTKDdz",
  "key19": "4nug6sT8hwijL7yBToN1CWMMLqg576nZrURLu4ueUuficrn7tJMeyZEbXNamdiewmm4q2L69EWGMofRvRPgFH3gM",
  "key20": "5bX1EnkdJXyg4fYzUpjoQm9YDELhWWUoAdL9Zgzy35S2JSJvSA959EMMZFbqvPesUg6fPtPkGfEhZHGTgFZsSK22",
  "key21": "5M5TPQ9MiidrqtWfWd9cxVuFmkoRwFcRhTTXueZ4mfAzEs1BsTFWP7yCkZioQaZZijetXp1TdZYDuZs6y4vSkBdR",
  "key22": "3DDRxhXdq5DaU96rEkx3Me225Tz6FtnhfCEBL6okpzWUzvotXDs2ZCAumnTkqQYNUNXmMqP8FHnqMr8Bv3gGmMTk",
  "key23": "4E2t4sGqokb3YMSHHQcrkbap85SnG32XZdjCvSgXaXz3XdBDHtRjw53x1ccc8N2vQbeR5gujZAefZLZMWG1NS9ZB",
  "key24": "px2Axsmbi6vE2zeEroC5mDZi93sjekbeTTRq7q23pPzwLpF2vBsTV3kuwLuhikbAwF18BQPXChRhoAKf8a1SkGe",
  "key25": "2XYzprK4PoMKByhpEu6v4weaeJLee7LUMP9xLSWtPbrMyDNZCwFzCpJuwseQPfwT85YFv7wEE2gEGbyc5pKN7hLu",
  "key26": "4bJF3HdkjALXxmRt4B9676B9faCd7xQkNyBRtLihA8dCTh8a31FYQAcvkSgHfe15AL6ECVyFAWvFHhTutxwLmDqr",
  "key27": "44GYCPA45DatpztYdpPdQbKk6n3CU1Ldb9byXUgd17bDy4wbVaKWNYs6as9z2EVNtfH5nZPHAKVQ4SiT8yUYZdzH",
  "key28": "4g5CwSfu4CC4pm1ALq1p82TRg2pBqwChtKmBeSfntfp4xv5eUt418acKXqbcpB6HcaYcZHX5wEph6tzeAsqW452c",
  "key29": "QKjvwb3nVNcVEqj7x4Q3wQHHM4bfE6gMsaHeMKLPZ6eX5xXdtSFoRCQNSq8pzYe7Zm5S5MUdwNz5wSZ7PgTLS5c",
  "key30": "41n17W4Ehypzp1Y3DWXaSmR6VdjJ5BpqrKi9gPeY5jk8hQTRRwakUF4VeEuCSs2q7cdUmjW3efBGFVF6D2Vphuqj",
  "key31": "3mMVHRADRsNqPBnpGFCmNf7zcE7cTM1g4E6NF8jG41y24rc7ycn7XVD9sVgj9cxZ2UVj98N1FsNVuwyV3Vb3c3To",
  "key32": "4n8ii5BX59RcT3RUCg2UEVhHhN8mx9qBh5voSXkqdbeqLApwsYkK2kjD2GmEa6WyCqqdMEToMqBKsgoMhEuaJFLV",
  "key33": "49kkuqeMgAaQzyxemJErNhjBy1tqoHxSMTFQjADVKRU1XV5ujLjQH95FP8XpX5pewemYYMjwBJqcrr24wbs5xSa7",
  "key34": "2WZPkxQE1wGZzqEBQXSYuExGcaaqpVnMUVAtrFnJmFGSF7do4Uv1yXLc6CzxoySTpncawXDLJN7jYUvArbPgSCEb",
  "key35": "4bnSDhPHzeu8HSEPUsLSrahbqn3tDx8jVKZCjzRGGbp3ZVi4VBzWJxfqyJBhgUhXDSGshg55fFViAHK6o5GdrzL6",
  "key36": "44nKwLh8dHqzMZQu99Ya4DBPSz7uZzZBy5A3tDtyDEbLYJF1d6ewHoqUC3bqsNtDH6WWPxB6n6EG3ghi8U8K4Mgn",
  "key37": "47U1aDDcHjBpzSQiRZpvczhXDEvz7HecjX2UhSGoK3HwzwKhV6U5EFZxQC3RL2kgDq5idrJNaN87NJLtSGqMdwCZ",
  "key38": "5LgWE2oN9thNw7Sf5SMp4WeTPTdnnjoA6Uj7TKLq2WvdEqaKnrqQwFLDSMLm8NP6MYxz6JzAtSR3zfcRy12sf6gu",
  "key39": "5vcZcfuSJNxvdszjJkZmBQS6pLg3pFqt5kboAiSvph9cpYtkEMNdnubYKZ6GT6YQPYF9oPTojWNQ8kwtEbrZrwUc",
  "key40": "666e45UEQgQaGUfLHdDwuAWwCuzQktCcLCX7zUChaTZtMg2PG1doW1cJPitw2PUj4Kbtv3Xbu6X7aLag3fq54HXn",
  "key41": "5Aa3xB7XG6cgarXdQkZq43MJuC7QJr3132wR83F9HTr6z3MoSTqAwMSjyxnKmmgFDmJGBUv8WRT5VbS7k6b3R2Ck",
  "key42": "Ujh4CFBVx4EXtSdz76BCtvaBKU8rgaPbzb2nKSXLG1mXi5Mf2zaG2b7kZhuH6PvYmoxETHYs62CtimHYfVUsgAf",
  "key43": "3JFFaRc9mYEujU6ULA11Ya89Qrz5g2MoFc7XU8RXXC18JY7jMC8qpXMreP6hpk46ptwhVUPjEsHc2nX9j2fUqBHM"
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
