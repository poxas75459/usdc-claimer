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
    "2WBgS6B3HfMYwmtzGWTSZTDjukB4Sg9WEPkK9pBqxwuzM6etojyjr3yCesPGcKynQ3dpXwUtH9DCWnT3Y9Qdp6HE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AVQ2oJvvC5DDjk3dMjqtxk1Ejo17Dy6RwoyYNDcX5L4LbyXoLGbw3ovdKXSJWt3688NB7Eg73djygtKQum6e6WT",
  "key1": "4HTreMyAYqQ4YYsnLzsvYomzZxxbkaJXWFnysejmDBTnz6NVqdZcwS7n2qstAa682T7doRagJhBLPmH6MwN4ky76",
  "key2": "31rK3fbm755HJRfKu7k9f8mWndCpyNzYDXa2V2uc3pA8gecB8cBvMCvnAp9vd7PTbi4YjHZi1aivoiX29K5qE27k",
  "key3": "2wdAwVKzAcGHWwZso5ma2WntzFCHHwgQGEv4XhZqN568BenXKhkGEjCf2EGgW3t7Q8u3nKyqVw8RNDMTA85yorzU",
  "key4": "4tP6HQipzvxfrUQGyoF2QfahvvBqs6XbHrHhco7BWyydFhRKYKfhwCD1ySb7khfrV9aThYJ3ieV5NRYuLrBm67do",
  "key5": "3PgEtmysUFKLHQo3hfqjwbcJDhY82UDw81pAE99XePX6X4rA2kBk1iySPubD9xyjoxRCfLB91BoYzMjFyHcEg2Zm",
  "key6": "368KmvgzUc8GHbmEfBmav64awSVKdME5LRhBaDEZpNoLw56DkFeUxmZTjUJx85ycnpa4unPvk978GsRVjYrnUpXQ",
  "key7": "jLRQxVwBvWD2NGAJbuEZiyqwcu2A8P2pgPpadSkT4oHBYTTLUZ9KSCeVyxDRbLeXw3Ug5x2fY9R6DVr7BXex4Fy",
  "key8": "4Yd7szfoFs7nDBEQcNnMwU8j2QKkm1HA41FEkFXLCvk2Qho6uZNyrRCz4wty2jmJxRFWhVxBdx31orbPNqumzeZT",
  "key9": "5t2jzEbxJNLN1kXeXTkXf3DMFRnW8D8sZTm9DyvcpzwEasVkMABy1fFPJJVCHpy1pGrsFo7X8N65WFgMJMCxbokf",
  "key10": "4JiCFwZT89dWL3jedHkgmykYEc2NAGjHWMRRMtGJfD66yKuVs312C4ENW7E2sB736fwXfJ5vQaZwFN5iW5WrNhEa",
  "key11": "4fnoBms1hGmxZ1uE6VLWf6X3aJW1WEthdDLBVxUKusPoB2vbvSFH6RkZegNtcex51piY6qD5nEtoRfMcev4uNzN3",
  "key12": "erHDMo3e6CUEs9PykS9VyEMFMtKetjZWGxHTW7vWGDKTBUgAgp7KyZgJU539WpKYbWYCHRzeu9zSK33eQYc9Gfj",
  "key13": "2Ce8jJhLRsrQUB4gzA4wAw7TXysH9iwdf9wqCsWejzhTua9n5Ukvmep1dYFAqzZ9UPKjSGg7uFsRtbKLjE61xc5u",
  "key14": "5ymRfawVyz4oCihBzLS376aprkqvZnqHvLyShHQw9HttEq7erxfsEmQzT9MntZXPVySfcdB2q2yHXKqdGjRn8GDz",
  "key15": "2TNJM9vnvRtP9JZS4zuc2yPRpUf6Q8rhhBeK9KtGZSKnAS4vC3hKwaJcLM8YoWfPUWjJHy89AYkonzDcsNcqc7nX",
  "key16": "3R53YZuqVDQMbyzTrMkpE9TBxJp5hGzSzGgXagC8SswVaGLVJqEGBVbQvzwETtrKmFRmqqYqXCcXiEV9JmqmKXEn",
  "key17": "2MBgDEVptrcDWs31pXyWx1L43QkniYRBPhj8q9DHoWjSgLVTA4ReDFqM7G1s532BUq4dJEULSwAf7cxcWZCF54mp",
  "key18": "3gT7AbkCFiSzRgLXVRAiNeQAjC4vU2bdoASoyCXzAxo9k2D6wLSmc2PR8FXvV23bkaWFmmckKTkUgTcP3SqYoSjs",
  "key19": "4z4sEFoKYqx28VuKq24W4LibyUuJFqW9YFSjP4FVTNLJSmUNfoNHcqYoHVCr4cggGf1rXHSvZpjTKA1tuYVTJHsN",
  "key20": "47Q7iQ9MsExnRAE1fJUGWG9ieWFBNt3ZPKpPVKmAxhoEKQq8JgCWAEGRocaFKRhGGL1Uf4qYRS4rZSyh7fGK5nyT",
  "key21": "59ZZGnqq2uze83UbmGcRbfCAuyTgXV4oEyPWCjT1Uq1r3b1AU6gVYrfVBwKybxSFnQaRdGiqKzArPebmnCi3YkTm",
  "key22": "29y1UzfsRQzDkzh5VVqWUu2HnBi3SRpuPA6HVttw7gxzxL2TPUdgU8B3g6K8Xf7RiBMzqLZRAkTNqMHzjWQ8JmSB",
  "key23": "3fFVyGs4QvQcy7Q9zL3ZNfn2juUAkCskm9w8mZYdZFdJJDq7FqVRhn9YQ4vsSHYBvRnreZUePJjXd1VErZfeUVc8",
  "key24": "4HeCYkgd8rueXG2nKEf3LkxArX1MTXgrpp99r2qv1eLU6qcbtjP218ykCCHmVTuY2dLQNQDnTYGjjuefp7VDohMe",
  "key25": "XK5N6FcUWgpiCjyh1dy9shC6TcexxkVXdg1voPyhVHM4Jqw8okHAiYdvKhZNHh2Rnf5XcPsusjUnPhEfPvFXqgN",
  "key26": "2HDDaNjUCMUypWsyrF6iScKMZHHbpLzCbaNbyyMdcXZymtCKHxTbkftExH7xv1hi8uEfP1AV6pGjigC92FMaVwHP",
  "key27": "49KGxNA7qisDvLhowqUTzM26DkWZgoFShuFkxQGbBKMBAqPxo7W64YACmiRN1f6NpRYw7397WbyhCwjX4Ctrdo5Y",
  "key28": "2JE9GJLvy65RL9fdXUwon1vj4xVMzz9wkbNTGEEBW2ppnQ1at6uGJbjrtSwVobNE7weNJ7mRZsArYzyaEHEMNqrU",
  "key29": "3cLWSNHyKhczP4E4NTwZF35wwXrqViPrHgbRDjuUju9vk1U3FCTg3hhtu22NpW9Ja8QEVVA3rj18J2tKACXhQ5yt",
  "key30": "44x9bCBhpJsusjtLP2ktk6tUAZsd4Sc5FVw26C2rTinHzg514BwV7fdtZKYUBA2b12ffq5Q2Ew3UWvYkqxoP7EBs",
  "key31": "3hHfWr39eAEU1NFmHPPypbyN9Mkag3RkizB8ZuJmd1vvresfW4TSUA4Sa8jMs5HUqq3XUQezYoz4hV8a8vYfa5VF",
  "key32": "3L736BUfvBakbth1qdK9evZzdCoW5iWJSfS7UCHKhSuf6885b68sPN9nNfvqwMi3Sc4KRz5TACm65VJk7Qgaj3Yp",
  "key33": "3s4BuvTsyPwx8VLvoma8Zxikh5752oAnbE5pst6e9hhqfY9ADhbWv4GPMe9pThFk8k231baCD7rnHZhYWrwvAqNZ",
  "key34": "2zYX5qtu8gQTgPYcEveG2WUw7EpSit964zZyMCf6Ghb4d9jd43vpPbPYxLYGH6JF2uEQUKotTaefz4tcjaMUXoU3",
  "key35": "26wkggMZH829KepmjVmBfiUuL6CPiWCqkjf27CgyXWyCZaxNSFfqNehyYjAToF7WhuKAnGaAFusLhhArcTkLkn5U",
  "key36": "xHgbbyU6eUX71bZqMjRnemrg6fxHmFcbWGyPWwiK1GAmXwq2qh9Uui4Zfme1KydT3XzJxgNFnzAzmUinAmp7UMB",
  "key37": "3EjpKNEho9yqHHeCaHvwKCd8dQ8MjUxqPQhm1hvzZ4ZmYHCX6sCyjxD3fSK6mGFVvUtesDQCVJBVr1itm7MuDGVe",
  "key38": "3c7G15foUaVyWp3v2oswZRULnYsMDXWVqbYoeDqfak1w88kXw3gD9XUwRiFxUPtcM17CMjpodqJcRXzBe9Lp9mHF",
  "key39": "3y2tiDyzH19sMBbjvKubqQeVRqpxEa55Hu9FuoQG9ZvjTA2kibP2D7JniEa42j3au4N93yHVVBriMwugaJTWLhpD",
  "key40": "4nWJfKc7aLX3r9JY7ezEvosTxBgWxvJHdrcKfSeeQYdLBkpA2PeoNXuuzbZWEvxtvbE4SMEyqre25a1Caj45rzch",
  "key41": "3B1jCBcsChLHuXhmNsSoJUbp5hrbppzaMxNC7ANu6ZE8N6Kn1mocfsXSxipTFfTi4PPNey1Zi69GDcQH7JgvYD9V"
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
