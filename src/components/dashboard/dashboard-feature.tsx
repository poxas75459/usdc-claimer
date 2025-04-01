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
    "qbnqExHj7t8VUvv2Xv483DcCBoyYyGCUTtLHS9p1EKeqzAiix285pCD7dBN2A5Snz1rf7AG1PTfgxYwUBcRN6mu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48XbEXcqqkfX7M7K54Wqf5DAepMBzfUYt75YWe9KN6ds8AuEWhDQ5uotuZBNMArRdWshvAeRGNA86Z27tRM4VUa8",
  "key1": "3v8q73M8kaX3fzrPvkjJDfVb832SDqo7hyvxNEaKERPYhQPwvnqLzdUQaMHZYAPiT5nL35MaJHqm1h9W3VgecCVE",
  "key2": "4EL3TvHjGg5wyveau9s5iWLaS1T15TxWzmFLXdBnebktTBJjhxeyyptdQCH8sSupZR725dGTPg9HM7ZfLXE7WDi",
  "key3": "45d22s7ZnwoseR1Zm5dCpf1CKRia41jxxF7jJk7346bxbq6r38DSt6uzD47LhpdcgkqauBiuaKmx6A2RjrongJa2",
  "key4": "4kYLyrjU87iJMjacMJ3RPLj6sn3uJfZ4dbmKVndMWhM4rgkWxEqWfkiCCDDNY5E8wXHUNB1iagkJLkS1uVVsJTey",
  "key5": "572V58NKNXbaztYjtJn3wvzwSnUEzZCiGXGK3QLCFZH6DouRDK7xvKXVsL9TWPrRyR5EAAp1rjRxRgoRzibwcPjh",
  "key6": "21fFoWfdcyJHcGborNpkchJhJjG65FDSkiuJ5Gu4crYsuwUNwVWUtucLLbDbP38q7vXBRg6ys5dwD3iJmHFL9g3D",
  "key7": "3gYZpoNuAENSQtWhAZspStNzCAe4hv19rzzPeSzcRoTLybuFH4297NXn8CKdkBWPJ2fC5i8YXNSE7gPCKv9n7WLJ",
  "key8": "2eLKDBH67Ta15Wjr9oCrpbefmzh1p5DExwZDcjC6TD7ccr4YPg8mj6bt7xypqevYoVfaSuytWQC7wpXJyh6ygmTt",
  "key9": "37qCgXU4RAnwAcCanwdFWueQZkYMjarvD94uLFiMGjWjEKv3jX8NNGjHJZhaoJfMomnpcv8WyhnwUf8Ca8eKL9NU",
  "key10": "5BGHhUzgEM3KF6gySztX5buMMH2CX4Cry6jjG1ZM8kSpYYLRaYXQZMWS7BnUY3U3YvAX52VdqkmvfuDmyfwy1nVr",
  "key11": "4Gvih54uhiitRfk7MYrFeSUnxmqpQ2Bna7TTMKGSnj6vYwuquge9gC476dpZx67TNyRDbcTdeunyU6ZfF3b9eMRw",
  "key12": "2zLBpjyebnuAeq16GS26Pe4JHcPuZtknAfMU5P5rk4WKDW4xwQ1bMUGPYwzCMweyAS5s2w5cFN9vepTNCbFh9gkJ",
  "key13": "5LhHg59b5khg1z6kFjcdXpj5s76rwQjoU2PAd5WfQB8j84XwoTq3MdEHikokrxKx5aXqrJQtjPVUtuG426C7rg3F",
  "key14": "4JZ8YKkNFYFo9pwK7JBvm4msbFzvGy5zoid4Av3f7vUHnvq21qZqfm3RdpdPfTDHw7sjN5HqEHPEzsPntwQ8fMbc",
  "key15": "5viQ9Bd6aqrDPAozrWk8h2fWt5k6u1Jk4AJ3QMWMbXUzLQVh2j7FqiGHSd9bTWzTCacR7MFBovXcLYi2GnvSPxJh",
  "key16": "K1thSDmRDkSKjbckk42YeTVjexb1GoJh64DHNNR49NvpeC4N9ibao7vBKXNxyKXnn9MgCyHbD16rpd1Ks1bQenY",
  "key17": "2GK2urJ2mUDvThR97sSbkuAzE3PYp7uX5mRz1sm9G5AJrREfxHKGz6MRbPPcfS6nqyQkYwssteW1MFY4TRRXMfAi",
  "key18": "WcJcygcvMRDMpZetZUzHYERbf2N6WFDJcPaw8AMddAmCHKbGAUxaV4ugEMnMjhdXhk4QXAXDsyTLV2ZTXwdZhFM",
  "key19": "3u4Lo47xVxBCQFUFqP1jttMGF6ZCC9nnAVZfiLp8nr64hGbcwhj1tF2W1MBVD6FTk3Hifm38ckyfXkJ6DBkRWgBS",
  "key20": "3Wg8e5VzgXeESfzs1meKFvsxbivLfh23uemkeACjikdUMGZdHhbGHHrHuZedKvPJnWRGqCMDw3PEbXgE3DbDtXBW",
  "key21": "rnKcXtBoMoqWYGj77V1R4qM6oestes9sveNySg6YA7TBNC5dSF9kaAfFBhuQCB1hYTS5owekKUGdrZmCgSehmnB",
  "key22": "R1HQnKNHL9sr86W5EaJ9JvLrg7K4KqrUuC7QGaLSk3kLQjdcE4sQEzPCxLhGfibmCZtLAE9u8tyDAACuSmxddDC",
  "key23": "2CYvyyK1Wa51WbJWjkDxLaLPP5JzQJGdao5BZDe3saTssortQzZDVVmLXYoKhCPrdB8gdmnpZmaRy6hpQMPpEaoy",
  "key24": "f4AhCpSaVLhSZiYpFJjQCyVy8KUS5EMpNNrffoiSS8QRPFRFqkeiqPLUDaJeQDxTCRgmoTKqT255HsGMNdmJS8R",
  "key25": "5RCKwnMto6nKNbQZ9vaXcXDkoX536vvAksipQa5hJekTTukUyD9ny7QtiMDbzTXax1MZ7xbo7uyyLZ2XxrNjBmCq",
  "key26": "5AjUA4XTkvYsYzVLA4tXh5STomVMBMhTusUtB8FP9ZeEL4Ewjjh8BFaKUB1ub8hWHnNohnQQbmNRoTRNdQCKxBnf",
  "key27": "3GFkrpGnnx4KK9qr3MXZGkdocLrHY18Mkkj2x85XmM1rsJ9nEU7BkiXyAyp2Tj3iL9Gedh416aJfqWbzhfGid7aK",
  "key28": "2NdPkN9rd1TEx4cHSTg75jCAwwKQqY4F3FVxKpj3SXgz82DNaFEXACBTS6Bacx1KHoyALzh9u2N8EGsLNoWSLXPQ",
  "key29": "3L6x2yie2Qb2Pxf1ZWdRiCbXYddTPQ8ydFwctnUSaimAKm4r9gNdoMJAsec1XHog5pmtNfY55Rf277LDJsCLm7rK",
  "key30": "3nQjmVT2GgHivkrZxQSsPn84SPRdzh1F172gmgohoarqnXKp2tbhe1GNqueMRbXueULW6qf7z1anj47Axn3XBp4q",
  "key31": "37JL5jZwPZqqFDwgMDwsz6W6F1ua3sTFF5DeZtAZgrzbqBkVhYcybKj4aeY67LHiYtiLxSWgTZRoG2tiLVz4SegC",
  "key32": "3ZmpfF5aQfBhhFEW1Xbon6K2k76YDPnqqLkbbaLg9gG4LHEJG2oWmSuaNyXsLevdhdVJuByWoDfTEkKFi3CU8smZ",
  "key33": "48mnH497Rx2PfJrpSah69SAwC3dDrEHiaoacGNuhF5zA8WD8yf58DqnuodKmiv1H1zBNJqzSjtWe1wo5FXoVrWwy",
  "key34": "3J3obgm6L7Ng6EFVXZ7NH3LTTynzyTyWE5dw4ETmqBjMgFXrh9b4nbMqswivguF2etWcLkrNUgmbgfNKBFFowoKB",
  "key35": "24mHpXDrrYD1nXJRiyWpRjaoCj9EmH5qUUiYaA7DPeLZrPNUKQGbEgsbQ2XkwfNHdzQZEZWJwzt9oUKj7gots2Ug",
  "key36": "5VZDpuSwEitkBU8RXDqYgapFQ8o8JoL5n9u9iDE2Kt1cdBP3s64mrhgw746vDXKnkbJEhWrc8m5gfAynDzMNu3Kp"
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
