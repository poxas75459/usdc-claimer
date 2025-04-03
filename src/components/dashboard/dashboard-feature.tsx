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
    "3fs1hmcSgtyibRGcxpuFmm7TfWoGav9BHng7ALmc9JWVMaNTt1WTpoU32Fwxgt2ZJeMkeWvx7jTg482T2qnShUBw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rtCDmu673xeqYjd8tukGSGXL4EXfMxrFPmVod8hwrXN3M9VEzQWcNNKPXM12kKMuQdJbeCYA7QHgmJCBn2EUFX",
  "key1": "5KytFtnUZY1xQv66xVaXiyyELpdGzzDHmwFHUw3VXKEex51fsxaTW2sBpNPLngtUEzQTbVTho2c1rnHMBfyZNW5K",
  "key2": "5nXEPsfa3E5SLz31ZEbpRcMGntijLGo4qqnBPkVqpE7kTbbGPHFAjj8auGqYRKLtYNJ9TRGSA5jvUPQeExuuavPy",
  "key3": "5BesR36XZnjfNgpWp1sW9aVU77VE2fANCBx5RmDowHhVcSwGAmkBz3T2Mz7kbmFCxa1kJXHmnkMVhaRmz3aAFTv9",
  "key4": "4542BixLXwam2eUcQwSvTY4L32DAqZkeB24dTLMQjA4ySSaAhvYgkFjyLMEBzaFpRbLWWoLff4kX5kKquBsn9MB3",
  "key5": "2S4fjqu6i881cgK7vQXfZygPksmfUtRtEhTmZqvwgLaCdXbkbEV4tHRKR7yg1R1k2iwdnfDF6Z8RHd6Mtq9fsJox",
  "key6": "uLLEiHMTjh64YAPtx2tERi1i79c6fETwjj7Ryq9Jg6hHwEmxW5WeyxUMARjpeJMpeT5guwoa38ZQPnFF93FHK6E",
  "key7": "2J736Ws3zkutVWKMjYvx762EV5PzN9q7LnUSkjhTEvu1wFJexJZuqYBKFVkHwz7qs76PoJkeBzEvujC3UyJsdr1y",
  "key8": "5E7CYXZMizLi5HdYk8hacNwXNP8Jc67Njiek5dZDQ2eQJuCZ44S7veqY3i5z6X9bpEE2T2GoaCTN3yLZjn4aYk7N",
  "key9": "3wmrXyFgPogL7RnZiw79nmted6JokWmFfboCGg8cUkYd8S9mhUDBUvpB8qpKPzvQjsa555SiF66aXZnDC8UjFM8C",
  "key10": "4aBMitVeEMdid1qxKradA1YfLBppA6xz32TrsyoRFNKCrGroNc7yzYcY4e5txnKBvQzP5gHaDnWDxFzBAFdLnAqm",
  "key11": "3T6gNonrUzkJw8UqW8vT8t4SCqoeewnutQGLXTVnKds1kYhTQX7RUSNXUS1EUKTUPsHiNTCvm7aTKQiVtRcdcjqJ",
  "key12": "2CQWEXfaGwqqSjtnm9FQbpksukdpeDnxVxoNL65vEh8AKLs7dHzWn5tASCoiQfcARkTDghFV9LSi2WewnMTPqvnR",
  "key13": "Tz8Hzf7ehmbyWywMoQi5Y1rqkX53boZGHiyk25yNpnpTQsnWEJJfk7pR9ypK9rVT3fq7JxoDmfBoeg3tvY6aKTe",
  "key14": "mYopRRJNvSJFjzVEusicbTVEyTQWvdnN98z5DP8wGC9RK2An2zcACTiFNV6uZ7k55V8QTNjAp19AKbHumxxR5Nj",
  "key15": "2evji3yCEnJoE4zpJTeXgn66hbCdf5SXbXoSUHWyckbSykZvdf3aDeMrLiroNJG5C37A4Aq5U4h51fbXkrp3dXEh",
  "key16": "4A7yH6ZeXpFmrPBQxj6QoPg6EtV3yvyiX3FZbf7hmeVdKyZxkxG2wMNW5nEmPjHNMXvDEYy59F8Q5KmhU4kW8Hbk",
  "key17": "4xjxnjfpBj6oB1S6RQPPHuccuBn38HYSLsGKu6YDUXVNtg4BYTcrBpwyHnmEtw82XYauGFUR6dJ3fE1bQZhnYh1f",
  "key18": "BjWRMjTkSCoENcgvwWVTgG6gXxpRHCVuVtoGtQnx54bct8S3wzqggTwohaivuohFKsbj1ZrJ58yk6iQtGrEzghc",
  "key19": "NTdfdX4tGAyPVLtAtPu13NXpx7FvN4SumMph4Gh8gzM423pZrNcr5gt6nNvXS1syuTsD2VgK2nEv6Kfi68YZ2P2",
  "key20": "5Uqvez1vTCBddjAYVBMcoHN1W22NUAfS51ZvCT5z7o36SMTF7P1MZBFa3Zop6dbTKLAJkVoqBuWXcRu3ZFmvvoGv",
  "key21": "3EufW3vUEyRVsQZewwLXn3B197RgZVy1YevveF77K9Sa4VHvs5XXjy936ES2PMuRLYcQ3puRFvfJuYDt8rVQvDtA",
  "key22": "4JLb77i4tFCreuKUucp6mZ1NeNkPteHgcnbmwQBimVRqE5vsMgqvNUGcTRJMMaxp6GGnuX6eCJgYJopk4RjpcfPo",
  "key23": "QCZKdRgALkBpRFTF776XiRP5mce6Ve5yMcNdCccq8AckCshCyagppfGfDUMQjBavfeKteaLs1JrLiHHwrqdW5CW",
  "key24": "2wWRseH3D7y3qejkqb8pVR1dGQva4ueRvWRKz4k2F52GsZFqpJvB6cmUQciLBZFvbrbeCd4zCRxo5w1ukKC7WAXd",
  "key25": "4u4GWAMtaQKhEZBpdAM1q4urL7iWy7vWaM8V9UfHNe6x4M8sRg7ULoKCRrhZYUbnMFpgxQv8Ada6Pu7AuPpevkfj",
  "key26": "4Kb5SC8Tsb571JGzYzELac1eCEaquDDg6489hM2Qw8UJ9skqiPxSWkK5mY3LS65TJ6DDrk5HFpAgTiHWEi5unziJ",
  "key27": "4Jyp9ZcUPweWcnpWQwz5YL3515YZn5HvaJi2SqCWypjyAenJi4JRh7SWKxaqMQZd2cCoRj4FMezTitf6E9xMLy5P",
  "key28": "5Lbk5TCqF5KoPkVNLwiJE5JMob8FKvfgAJUbaGBHj71BTg45CZCAni8uDdbuv1yjUYzz57b8SJhKo71Ftn42gefU",
  "key29": "4CXcXK84UHg5JbNLtu23LLLvtp3LEWbRk7iocKsw97LuruFZFB6vuQ7Fq49Du9RcSFF9LYY9yo2RyaX3eFZKVY3R",
  "key30": "64g84PMViF6SstkLbw9xqciqRBuzyBfDAZKATp29UeGAibximQYrnnZQvM6sihqk1eb74ggZzhDVppEofhMas59L",
  "key31": "56m35nRGwNgHj6uVQctPQ5whtFmM7qNNvTRnqqNQG5RVJm9JZA1x6h7kqwEd9586Rp4D2NE83Nhmj6MFKEdc9yEb",
  "key32": "4jRi9UAiXVYVP6LZJVezHXR1aVxRNCpWRvFH4i5bsyabS7WL4ZikUC54xN3dBBy8jDKxG7ZddSoSz1PbascD8xTm",
  "key33": "5hQyGesXEVKi4VjpyXdsvrtpRDY9JYJUwwSN3tZJkVwZ2FN2TUjSCXEbqTyKCHradXDxGkXsH2c1VRyM3m96QQNr",
  "key34": "5VZA7H5mB6oW2ie4aah36AhCnueU9BZUrHL1s4GFhsL3uYbaBUDaXAotpQXmXysBGEwDsE4ZPLvA41kQJGeRWQzc",
  "key35": "37c1VzByBMjVjKdqgCJTTYoz1VGm4YeRfRp1msxjU8MXd669dvMByZFXzwpzrCFtgfheKfZ4oPiTxiFb4CZvZoRp",
  "key36": "5ajP8e4a969yLwxqoZcptCQUvAh2yQF9nKuMUbojfnAntYdDZ8RGcgC5jYV6APUK9EwViyBo5jVifM2Q5yYeQWqx",
  "key37": "2uS9zXQCJgZwGhgx99ArwVvubgJQMammBXqmGkn7K91QV7sQr8Uni8U4mpSyhPXChqfTbjyMQt2k45tGkDmgTctb",
  "key38": "2CS7A3H127n2WwTAXajFVgofgqdcdPg3HAufbCcQdcy3JWiWSYxxY5qcFW1jz4sTqMDnJjQJjNouzBP5s4KTNACA",
  "key39": "47EzH9FHNwrc4Ve5KEGoTg2ALecjBr7WsPLu8fQFiHHqVqfTFDsN6asekvNUVJfnmnh2zCLH6xsxpV6V2GKY6aKT",
  "key40": "4mJ87767daSthR7AYbJbexThnCo5MZFNqyLBRkczHR5HDs6hp5sC13puK1ccZo2fkNp3y8FWuEYmjLnZsBm7YVgW",
  "key41": "5TJ1tvkJsMhdJTSm8MC96udRLmTFumEHhmZ8CNqUiYcp7JyMArPPckcH7ECAQvuVRBzgrN6CMWtyGiLS2hVKnW89",
  "key42": "5GhzbRwykhFugu1c1g7GrCoNjDRVLricXL7ZaefXnXWjZp3GyL5L4Wickre78uESuFVcfMaQ6bXr4HVmGhZyH3h3",
  "key43": "3SsgnaSFrUZdHAHtTb5Q6iMNP2CSgSJGJjZqDLgAG9NXaX81ySiiPkz6xbeGBsMgD5AMagu5Eq6BqwxRzZPq1mPG",
  "key44": "3kfJsZNKqpraAad36TvZQqyFFUf3Q3B84unerBvr4Q8wX1Z967NU9r3ccy9Wqp3U6LZzTaf5EU1A6vR4qtyZh9nB",
  "key45": "3qnBKmdpid62BVyMLrNCR7KSF842wwTCje7JX3QoDNapmEeZ49AyS2vsy6rK9uUSFoR6kRkwCEszRDBRBY3RxprP",
  "key46": "pUXk6vKbCUsVW2QVqtiCMohXUtjBNZaZVbTiCLZ5twC3z7SbctFJnXLikfdXWEB3HKXkC8VVDnhDDYSyahoNQjS"
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
