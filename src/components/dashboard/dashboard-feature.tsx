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
    "5hB6NUscfxNbVhfmdB4vjuJ2B6iYwSw3xWBzwNavAnh5nvXrYZLYnLwjUQNbMZ75YyCedbaLRBbVpUKK3ozMbu3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sg8EaNiVxipacMU8wxNPw1cPzmeiYXhLLm1SKwWFTmXLM9cGTdjkqcGhwqZjcXpaiH3sVxYTR8aNPx9rKLbE57R",
  "key1": "33swvoyGL6UM9ethnw177318k3f2pGnWz9qL9cuoW9w8yuRntLa1tsp3szUTr6nqfeyaGxTcMeekhKkE776jR9ZR",
  "key2": "5tnfUmWxHCfZh9NtzoEMF8qD4gtdXrnSuJ1rMt18EMzyVpL8M3yN38SB8QvQCrZw1Kkx8mhP1ARiFkwDzYoGa3yy",
  "key3": "4e5fUZbLDSs89Ls4wXEBCYQN5ywbT6CXf96rmwiQqfPuXtpo4CdtQ6DjHNaRGGftybDD6WFaj5s54Ca81NNrkfNG",
  "key4": "3BEiJiWpJH6HLHWno5syy9Xwg5ntjpt6Fu3Z2rTRd3wb45HADrLN5vTLCzD2r2eZButQCj3piKw5JEcvfr32zbdB",
  "key5": "53tj8XArmFVi2Y1pbSd1S8yfo6dtQSHkzEd16vWfLKirgQrwPd4iPchq7ezfmAfXmhikg1ELchcJGPW8MkY6JScY",
  "key6": "5eEYvDCsK8762AWRxoPCrk6FFh56suXncwQhxDgDDZJG59XGikaAdzen5LF5ZciU7XXVSmxSwnSjUvDKqyZgQD1x",
  "key7": "3viWmPe4wxUyqFdp9NbPRXRS2gvTGoZp6Uwevxt58KGWUU3UxkGo1EahuGmx4zp2VADvBv6UcqAAKtKZdA7Fgk7n",
  "key8": "3D6ZHZUYW3kuUVTwwbC6d58zCirzRArYwL9gpHWaqQhEZ3TVZyKg3EvsGqpD2HAZeCPTfM1HYAe1sNR4Yns1jHFw",
  "key9": "2fkbWRZi3DCCSRh5JDY3gCsvjE54LeDf81wahaBhoQsZtnBMfpBU3BvPWzNNMX5NkLzDmq2hJVq26NxNFr4BPU5r",
  "key10": "emJrzw2Cbx9bf25rodCx6kVaX25joWybSBh97fivQW8vPLsNbdwheTSPhA8w62tUnC6zSBV8CpU69Swrdosi5gr",
  "key11": "54rajKiXrdwUsvJe9jsoHNNzhmLUT8AmQk4U8STok4CGma8gYfcGpzNYXj5q3MsTAytfS678oQ1Jtc3saTtR7VqA",
  "key12": "3oaAH1P8WQmyW98UQpQ9woAuq92jUBPNwdqwYx5dzF7UqroEUf1JBxgrq93zt1p1yThSXXKFmUrBY2iReVHdnrFu",
  "key13": "KhPQqfsZ1rVa2QqX619Lj4Es2dpYcpeua9KfpxBedfHzNphd3nTMQrJpt4MVTcT5yLipqzPXVffYPjbAcPfDCtg",
  "key14": "3WoWFxKS77n85Des4wVh28fz9bL4gWUoneFHkM6ZWeXdRdmgpprg41N5dNUwf4kEUS11AajbSHkyK6muVvfWDDyH",
  "key15": "2RF7gf8P5spugLi2qwdPDRZFmGtCBcPGC8cYzKg15tcqZYM9M1KedQiC7iQKYSQ7v3WkV1HSpnw8LVASDP8wRw5N",
  "key16": "4fzAbr1WuaJcwhJedMk5RYhtHKN32g8CpkpPtCUAQq338hR3ijp4AHC538eyq9B6TuSuvjKny7CxXmd4uEGJthHj",
  "key17": "2pn6bs8fNrMGrjHWjsQh5X7jdRxi332SzNp8BUL4uv3Ce9wvkssS785AHtp2CfPnQjCg8ppb4SQF5H9ukiUXbxK9",
  "key18": "KLC9yUrCcMkFApV7k62DCBtiPu5rz858RV23vQt965utZLagjMJGxCN1ftYrhmYZr54cmgn5E6YMYaxRpFCVESw",
  "key19": "3G7Ae2bhTcLnVkekGN2YvteZiGydD6dWF6tkXiacB61zeiaNT4h8RmR6YgWxXHgi2rr9sVKnBiAUHjkGhBqpUf6Y",
  "key20": "677ccdhSNKiSBmw296cSc6VJz2CRko3jPWf96Cn173C64hp5cM8FGJzemdEvvfU13BpKsGSrzWUSXXQPkMNjSGKE",
  "key21": "5cu8bx6gNDWtCwFs5bcXJuii7X6QjsKopiS9D99QucdNmvTSWGx1CjVaMDvtyPA3h4QGNYxewae8UC8ooRJgYYg1",
  "key22": "4kzCQ26v6igHbGak88mUQu4ewnoiXz5hm9k12FE3xrQxbXFy3qu3f53DtRRfaZ8i1B2doMjoiPpv3U9KYQR9EHqG",
  "key23": "xaoUgsPxqMVvAbcHvhDFNsFVojGsnhfD9KMiuQfDdbnNZis9v1VhZ8GcEeNbtF2YDgschJmhJsjpDXStWUq957U",
  "key24": "2BNfp9ePFs3ZxGGKmBCHHeyBCzn5etntb18QLBvgRjrSgCxXrMxezThJFKdXNLsyNWXJaiXPV1357wcQa6Z5RGoR",
  "key25": "21S4Wv6dWn6tup1ajPaZBgbtonkVu8vAEDLrKdyYiyJK1PGAU7dR1e2KUs4FUhyTbUHW3c4x8PfZH9o9PnmbXNDU",
  "key26": "4TnbZDRDesrbZeY9a4g6mvHepyWJJcbtgnqWez3YdYJhdbchUNptQNUvkiENWHZ4u4bWT2QbiMztnMHmioJYTrk2",
  "key27": "WXNAaovEk7RfEDtEJk2XJTDjP18Ng4bEgCx9zKvZyYwerRRBvEfnA6xVVU9qKwMzik2wXFo7BWFwQPKSGzDJmjB",
  "key28": "2p5CJjPy5fFsnYQi5DvuVq6drt55AFpzoyFkkGDFUiWK5EN7uCUz8NNrq7oCVUn56rCXgDHNmfUhjcoTZVW2kHC",
  "key29": "WM2RuTmQDdusn3JMPxLCEavnVCzMsXrppKPxBo1HTQxUBvZCsK2nWurE24eR8mfMX8nrj6a2pju9PXnjjzpvpH5",
  "key30": "3NjKQbET1FCGcqLCEWzDcYCoA4vNv2YVDvHnfHkX2dLqEQiQaMNjubUyP1iMAFgUAvKDymoxsroj7JjanSHVBbyh",
  "key31": "5CQe5DjvAyBzoQLgpSQUnZK6cxnEzxpPcfSHGAS5RwCzYfdZ3L41DLskGihdfjaqeHNvqJCrfjUR7yE9onyq2EM8",
  "key32": "4Y5WoLoG829wxPgYQc3JJj8bE32iLhR41ukynQiTn16BoiW2DD4RyE6xfoCwpxuJbjndM8Dgw6WJDiC45iqksFjb",
  "key33": "39dGakKWeg6TVMqef1jPkiU3y6Yh7YHHzFSieNSiryX2N4xHWgKetvvdM16NoLtYtpXuCYD66oqdNAuz9RpZTLnb",
  "key34": "3BotJLcDrfsSZfVzy78ZVdF8FLXMm5LikAw8CtMMBm2cwXa6pvCU6xoMjVd5sQ9wPwFG4kmYerbUiMiKkTxRYt1",
  "key35": "353KvHStS8Led9mua9xa6ibCeTQ7RqhS2NYbipwZJVy2CXBaE5XkXCGTTE1uu5YWoWpgBSDwPdU4behzeaGQ2WJT",
  "key36": "2AZn3Bt3TBqPFzeQ7afS6CgXpK2j71UcfyWqEKSyJGJ3876Lg1D8xrk4s1HgTgbKiW2Pm8rafE9VSvcsAMn541Zt",
  "key37": "2sPS3BnCNHPnazzMHY5S6XioafbPuwX5GauSnLwQKv42kXtWeYpb57Y2r41FfKa15cwH3vaNpV9nmt6nTgRdu1Xb",
  "key38": "5PxyFqAnQdTh6Tz7no9ShGAHB2DdynCqzzkipHDiwjPgY3trN6UTqfSBaj6S2W6JyMUWr3udat2oq6X44DEfhCRL",
  "key39": "4opdrtxNTvydu7oJq6FtZ9k5T7csYBvLLfvV6NspkLbs9AR9sESwsqfNPQex6g6v2piAaDW5BAbpHYjHY8obwrZt",
  "key40": "2CGmi8jUcVeYvGK5efpAvd7FaKWo4d3wmca5iyn9MmdAVx3gR6yxWCQuPT66PvCGqcr55q3mpRaWzSshVFPdoxrr",
  "key41": "3RBuZqgUVTu9xn9YU4UEeDxac3CTG9cZx8KK3Z3WFE7CEZEae4sh1znnnGNUJTSL2QRGzeiV21WwjTLaSRCSErGC",
  "key42": "5C3tZqyVrCU5uAUvWPZjp1nJi7JcUKi1mbzMTCm2H4mbJYuNWCD52PXRsFooHLrocxPoFiHUtMTtbR7hASmgayoG",
  "key43": "p5gJm6duyMrC5PDahD6PF3Z7f3Qn4c5NJGr418t2tTpBAe6x3tL5GJKr5GgM6XChxFCuhWAQppLpMVVGZCWdsSg",
  "key44": "2gjVJEmAK6hUtREHM43deLm6xgiyEejnWuxUTgXkbFETzQoJdBEaRSG6wu6JVwnFQeEbodiSg9yy1extqmzaEHvg",
  "key45": "MfKu3BbxHb5AHYAsmJmoWCw7bgqqSHd41cZMtSUyLqzremEFD5PnEcEZ7yTsDrTAc4UajwN2mdJGjmGEqCzLgdt",
  "key46": "XBN3drCGAeq86FCMWLHysyRzVxCEhoHnLDH8r1C6qq6EXRSvSLsJyeCGBZZp8bCo3HZfeeSsjLJvVYWzLSNe4Hj",
  "key47": "65SdjtuTLY54RUGUyLsdxFFsWfd6YFokk9DzFG4ZgLQkgYUdC16mrnhga71xKA4UEg9GDL84YJb5QHc1Z3EDKeZe",
  "key48": "2BBfps5NPi7jDGX5iSXGBiXyUChcTh9joTpZNXNs4fwWpYinwkLuCMHkhZTPJDLb18wCjAir5j8SazoDxjksmaL"
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
