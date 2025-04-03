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
    "3YmEMP8aZX1PgQpPCfthMosw7iSUnpTR98ZUcDRH6cj3RteiLQdE3zQ4ab928z8meU1wJM3VE23FzL3eCE81dKLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uP3WY5cEDQtFNCuVAUzBSy2pubdtKNHMykDMfb93q5WrDk3JfgFGwHdpwajBmqHixUc35bJuyyBRRaMFWHABYdK",
  "key1": "34JKaF8jF3FAMwZsTstf5dE38d8mhLGyQQ7stP87xkzWPb3ZFztNaLTTSsYMKqukAv7HtD2T6dqRv3HaqTTqFQTR",
  "key2": "48Ybt1VqhFTxLi8hGehEs3g4us6rRESp5vkFu1CzewRaZje5uW4JtMLQsUsyXEXgjnBsikJ8vgLoBAAjUfrCRVS9",
  "key3": "5y4d6u9xozhWFc8E6o41BHAHHoXvWZmuoQqzCvjSZy5a5dXj2ZEXRpL8LgsvegB33cb7co6dgGk5rbCh7BxnPm5Y",
  "key4": "3PwF1Q9YKGg7S8ZfpkquAjFMrWdRoP2wGEUzgvLbwaxzDdxBEpDjU6kk4BhEvDhLk3MmshedWu5NCPvM4FrVQfqx",
  "key5": "2BQrBNiUdEriM226A9dgf6TEpR7V9AnW6VS2REAAwfxg3v8FZp1U7teDnbetWWa9w5kUHG3D8NeiwSwg2wSaZYqF",
  "key6": "fQQ5X89Kkqy49fN58WjcNGV1JYUYtJuGxwcAtjV6GLNYUVLNDFKhbnzBUqE47uyVzXCH9vHpEFkdJ44BZeaWD6u",
  "key7": "5PirvNNiawBpJcdsSoiJ6JoD9GMcijdMB84ASBg8bhwPzegYrHYBLoqAhGrnPr2GPdawWMxHBiAvPdN3vcSxHyXw",
  "key8": "2ZXX2Yx9e17ZQTjAwugB7C5qdewu676JhkYyMJizy4K6B4G1WLxkTHuD7ReW26EiRFcrZDXhZ6cuptbyj6ENJ9mZ",
  "key9": "2sb7cNdV1HsmrhUPGr273fgLajUcyD6xLkbBxVyUoLHwhFjudGNSAHqezv7PAMkgzigwxAJrppaEN78gfSz9GSp7",
  "key10": "2Sab4mwwygGBJMgPgfWmPQRVgxXktdAvkyoGQerkPoxiyECXQXaaLkopjkKYbh5ZT97vEfVr8zFZv8NnJiW22Dfi",
  "key11": "47qjXfC7Vv93menJjTm61Py6rrDga7g9qWCfMriJVsjScqtd4Xue831naPxoUtdCjQEgh8SyibSnCxHXpmLwW9t6",
  "key12": "5HDqrmesgoaNAqhFY38NPmgC2bSLtB1p5UupQXFNb9jyX1EyEkbNFpsiEesFpRCKho4KfS8bRNdhjgMY85u6STeE",
  "key13": "3ZGut4xKBCiZ7KwoMbANxvkeeQok9iMSUUxMAyMDVkeJsC994z2PjPJazqSzhy1UKy8tnWry19ZqyjMRf1G5AN9u",
  "key14": "3KCHiFvqwUPHhic87gbHtkn2rBxadoSND9Q8B42Aj119acf1Uhc24mYAgCwVd6otp6nMvp6WGNUQDNjtuZnWyrzq",
  "key15": "3xyBDbdkaDyiUYQY5Q6ajByUEDhci6RWbo67MV7ETSga5rtjXTsWTXyNNJ8RqU5pkcjzVUYWPgBympraBt6Nc6D4",
  "key16": "3h5aQ8jnWQ2eTLTuQ3QWsD8gAy8X9kYEmHD771C2qRNKQ5jD8NcnRtj8zfnk6UsQ4B7juaoxTn4gxqrMvb88mJDb",
  "key17": "C9tVwoELXnUVUDo3Y8tUfYNXaMaQzfmXLeLKVstf27VpSnEyXqiqSoGEUCoDZd9vxVGRSkCBsXJPua6oYxb2BWK",
  "key18": "FFvu4ZuNXhJpj3QtLjLJw8ckCnfJBWumxHhT4tXCo6F814Rd8U1FrfhYCviiCqSnqLNv5WwtRCYhFp6HWYKXddM",
  "key19": "5upcYA1gNjRQsshXaHpYxCUmyesFg332e8miv8a5sdCofQFD2ruSSeP9eCeDvfS6xiT2KfbJYJVyBoVySBPBqRAE",
  "key20": "5MLjVizJbqgY8EihaG8eYPx9STzBuexmfuvQ3oyF2cMNNq9NRspRAtxXPwz78SuNZkJAAtE8Er7K6U5Jii1o8WiT",
  "key21": "3wy7WidQBeV1uM1zPVUM6yDgJMtrrWVTQFmNbBhqmPNBwKPzqehLxNxn69377Jbgo1sbxKH8Z2Bwjq2nfaMetUtQ",
  "key22": "48MjtUKy8UGVyL4YcCe5Lbd9hgWns1xiUju5DSmLvWNU9aP35dfTsRs1C2TftVZ1Wrt1Bwk65voNYmxq2e9r3AWZ",
  "key23": "5t4FZ3UuwrSRseDcw8bhy54a4tyCci6Wyw1fn25PbUhVC37ppcAT2iKxfgz2PTb58yqv9T5wjeUtuGNPhUdGXQdv",
  "key24": "57g821PNNfy2Gq4pNrbjGFqtVdH7J6RJWEMVixrpuz8LMAFcAn65uxm5jee5CRXwL4xPT5GjBjSuvLpLGDZokjrb",
  "key25": "TKtvdPyLKAxRVBRfpo32n8KFV8D8D5ZqsH99iWmvUYyzYCSLFRFzc1fSdYWuf86tmjrwXHwLXVmEHta3QD9BnZ4",
  "key26": "TqtCYcHwHbCHUNSV4nWZpxMyW4poPvqMVLjRezR62Ngw1MShkW667wtC2Ebvy5RC4StQAv6Ub4wasujkPfzVpsm",
  "key27": "2BrMvoWo1zrZsiVmwRxARe3c42HkcZXdg2tFYQkd4vhMq1A4ug4A9Mn5qgj2wW8fXWvLU3XEPawDquw4UMMntDi8"
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
