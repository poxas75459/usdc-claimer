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
    "fEhygTj8iStauoSQqbeq2Q5jRbF77h8WDe8UaaH9EA3Jn4NsWcE46KXxiJVi8YtG18NUqYKUXX3eWNSMyo9B3yG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JECjRL1cL6WSPw3sasFsnv8NjQMRai2JYHs8AE4N1uNTaVAEbTPp4p4FuCziHBQ9sKGTFyWt39mWvBcSJnd6dft",
  "key1": "49RNxi632mioybWrCEiyNN1ncN8U1CnwMJLU1Q2hyBpDTswpaiBwERywoJUxqWUfwXDpaCaZxP1QhYQYccMoYqfX",
  "key2": "4DSdzxNNHze3YtaR2r8WeQGmHv5eXsKRi7P1PKvr96YPtvMBb7cxqRuEHjRNNPZSuuWEpq1RFrAnKGtYnvXp9Qur",
  "key3": "47Wj1gYy5uD5qq3aqeuNV3y13ySSbxDrcSnB9DuhyLhByYie13KvkDDrP1tWT7ZN1cRFjmL73sQMZv9qamXCaGtD",
  "key4": "862rteFTpN4RPPizHr3FPJ6KCWvQ5itVzkiPd71TUqfutQr31yShTUDEQDSSnD9DMtyfS5XCwyshHDH8BrGLy8J",
  "key5": "22GxUMqc3KJ6RsSVokYQGkCBm4mG5EY62t8GWVTJFFmHZHnPrh1euToXhm3CUWxyHE7nLQZY2v3gC4ryByHordCA",
  "key6": "5VpuRkbeZjZdatBqWoFFmmFbDWrqv52Ckmpu2MVyDszYDyWtKYhbzLSuLbDdpmwKxv9SvJZUyaGrGcZqGqfuGzsH",
  "key7": "27esGb5KB8GDvV5aY9M5inW837A3BDEonezixwLDnCsJXaLM8FnfQKPeuifuDcRmWwnAnrYmVatmB3CGEUZb5yGN",
  "key8": "3yQR3k3j8PpGKa8BCcvYV7BETBeJktuRUFoAwXqnzzwz5mB4cK7J7Cs93stHAytiaaUtyNsM27ZakUU2ZLDGpVoC",
  "key9": "3MFURggEPTvfpJeydvH2BuZoq3LZcDag827u2oJbqE5zxgKhRrYnDsx1cwi8F1kAnomnfjQ2WsGomBtdqKawBJAC",
  "key10": "4kEaNTTPHY4AQ1NGbuZhqoSaDAqMRSFFfLhvdGHuoxvrXgVLR1Jo3CDsmoRMQfHcTAFiu7y3ap3ZQpCvEnaGkTf8",
  "key11": "XEfkyaYpP5QsLwiDTa4AFiRX4treMK6WuzVYdoZ1uYWuuH9fxFuFjFFjup9jEjakxUBEgKhrMQF8jkmiATxPzSo",
  "key12": "X777Ykf8QFRAsPqrHxxbRV5SzbeSMJ7ueFKPiVzh8opPh6SYdZ7ZW8PgnQVu3RGDfC8c9K93WD1Teu4HA6PYSrz",
  "key13": "MDhQisLgaGjJ7rQZjQDxGWGJvbyE9rgM2BmEBfKsQxscuQ9GLizgbbKgDmnXzHq9c9JMXPC5F1cdzc85Z197mkL",
  "key14": "4uuiALL8fuYji7vZKBDU7M6dJpug2aichTrS7qaB6sX9fY2ociqbrvUuA4toXybhjNUjhJgpQPRGGfPrFFuaPgEP",
  "key15": "2aSXimoD9WuyK2WxfvajRTdufy32GmLxtLEuJ81cJzDpT5ismdRo1E7Y4DfXqEhihLogEX55E58hjkhmZ5FTERCD",
  "key16": "4Ys9ptWuFj9AGBaKjG8UyXd9p6LNdzKY7FuAX447yDEYhogq3jJm15y57J2RyPSgsWvFZMHU4pNr5wPCmNypcwVD",
  "key17": "8eWuzzD2sXkswpGbH9WEXKN2LjGCVe2sfHd3bPXyHWM15AgMWAm1TRDTM4qtJCjsunYpxFncBDvBbEzQK9Vfv7G",
  "key18": "WALD2L3PqTaQPhDMetgpk8BeWgzoTK1TaE5JbDHkLpRhfoDzhJF5b7xvLjQgKHLAk9jsYW9TtnbLLJ49rgQkQnK",
  "key19": "NQbJw5FtQMQidiC7x1z1HBqwCdCSGsLrqM5cTg7NbAA1FuBmrSwGN7Ho3RPuDUy1PbK5aw1gWs9KRhchZtR6kmY",
  "key20": "2RhQrCkzM19v4ba15z6HizTCtsj2TGDWaMsc3BSGrbRSgaJ7UB5857Dtus4WMvx8qxGPhAyHwTdRSoUFaZC8aq9a",
  "key21": "2cViFAxFGyEoX4mG4UQrXmFhuWrYN3s1C1ogmL4hXac6S5opMQ1wTLfzZM5KkyGNZDskwi2rWdDvQfNj7dtrQWyY",
  "key22": "52gGMU63C6qyqrb5zFC8k5EreLM4zhZypFUScrmKZNGEUhva6g42LtiGkdSAvwWeaP7TbBwDAnVox8QcRg34vJz3",
  "key23": "5h13vMRr7S7uRbfNWkbwJuZa8qvQVvGk42CwFx6ERpJtCfqqXxLeMsjKgzHJ1TcqifaUSGhmLe4Qu6DFGnjDkYb1",
  "key24": "xPAhMe9WRmMtbQn8eT8YJx2uUzLq3sRdYg5VVMrTgm5CGhjyRimu5rTCXtMbG3rxfbRwbrXkbkSFzvgi52MhY32",
  "key25": "m8K5EtTnvHuTzVj2ehXyk1EYtHxV5ocdrJj34bifRUeUf88Do7quG5N5vcmwKspDXeojaPeWV5hjwCZj7qyQPeR",
  "key26": "5L9XUczaBY9updrJkM32kyKw4hfWC9yfxUj8gbAnekxE2uH2YgLZnGJ7EiSrPmZhK1CyqNuSy6Droe2SWsth68Jy",
  "key27": "3PtvCK54cA9bytUVzneBHDGRsDqZuCc8hF8yVKNnjLQXRbjdEhitfZqL51EWKTmZauwSyKMZJFKYQxRH8e2caLuX",
  "key28": "bwRrNre89CQ9jB5TiFkxVpgREK18BpqqJMfKSzh4QGjsWLvkyNe5mJ8MYyvLu5MrJb4UxkRNicopgyY1fR6Y3WZ",
  "key29": "4ntppiveQZojRr9tWL8ESLbWWQ4YKVKBAucbMW7DgjDqVvdLJDygq6JDQbbHPmXQkwLdgktNM287DeZkXcSNvBEB",
  "key30": "1k3aWQnPCNgy72caRxtZHV6hB3fj8Sqj7oARNEx8GV8Kcc2D317tQ6cNpTE2rDt9iw8MoQ83vYGz9xb7cKMZ6hX",
  "key31": "tiKyUmU2R5JShQ1K7BkZFVoNdoiCCE2WXDv4ZbvRLxWrwTuj5HDj6PvDyCmZJxfwum2SGdPLodxjeHPwR2xSYWX",
  "key32": "3MqVfW1GLasjvYYcFv84RibSeGYN89eEvJUxUnyVsbQxv52o6TP1HgwBEjkMBbq9cdCsJTz1GpkLAJkmtL5eG6VU",
  "key33": "5koLFzgCRs3tsSJgjQq7u2XibBMs3QCY5J8cQTYcHftxBe2S6pZcLXeJxLWKE2PM4YFqxgr1Pp3DeTXjykwzRPzG",
  "key34": "5f8JHyNZhSCYTVbP3nuz5cguMcfrex6UbCzN1181BJdZusbdUK3Q3SRXiZf6RjGQYXaes3Qbur2GmEHoYcJUwXT5",
  "key35": "5NbxpQkVf6H3VBuckTEJSnu8qYXWqVXwELJRJNKVdPh5McJTPVRBnMeeLARtqED74zTpMLBFwwV4iCL3gpGWkFNY",
  "key36": "4pdmA1xKzQZmpaCn1hhrR78bZTGuNarSMQNQDXXfRnnrC37DT7zPz7hcm7fBgHLiPBsgAhpDEo6XE4phJeAd1YUc",
  "key37": "2XgdNzjfbtDPGobinDhbD9XN1mqvW6PywZqcnUeRtSYVEpTyqD1z7deMs75EHiEdGyZSYdnwUGUzg5627w9Vx5BJ",
  "key38": "53hYxW8LkGcs6d1w2BHFbvt3jQ478bfVzuxEjZJnFM4gidDA3YjQRSQGFAbuL3nmtShN7ife7u57A1mP4pvEeVqw",
  "key39": "5behkSXbNVk1u2x67395sLirXRfZghVvDqdQwpYAQDsXSFDvPffkkPEwjiWys1h4AoqZhcKsx5RXmCYpPet7eEmw",
  "key40": "4M3XQCj8QnQBBtbGYLdCrxX566v6NkGwvUXEn2zbauQLWVhtkH3gHbbgDXq7zZ8DtFfPRSemrWRuQyNgDgzi5z53",
  "key41": "4PrjC54X8SrbRudKMvFawFd4aHfVV7d4vfJRPSNWgz5uAUe8bhpuMnUR9kc2tsZP1CgJYKmcbCeo3ctEWyH7Wu6w"
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
