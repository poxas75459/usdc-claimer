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
    "2Ro6SdCXm3E2y8A5aXMhWuiXrLbYPCKp7XapDoTxJBG89b7gjX35pmpo8ZGi1YTyzA6dzbPrpW94aqwX4bZVdfKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AMZgmHu9p57Aqa2RM6UYdLrbMzbjxNYJDVXAW8QGBNEGRmkV9tQF1pS7aeaqQfPNrjdgfERdHqVZCHVuwEbJCua",
  "key1": "4omyrZSdfp3pYaNp38C14jAw6fxFvNoyLEbEKy8HwoCjuyXrZ92UBtTUbLBdZnRpkKb4ucBinDFyrBmXij5zAan2",
  "key2": "2eir2F63cjcj2YCGGzL6U1y8QEYRrgQuo9by3zk986cVExQ5XyWC3spoDSC4q2PZ6wtPGcGgXNpgSvFmwPau7vkR",
  "key3": "4Kxdys38A41kXmRfzxeFFZW16p2uHqcqBDCePEqF7RN1HdqUrobit9FZHXdQGoTLDkiANZd74SwMHHDrbDeMhuqi",
  "key4": "2hEwM8uiAgcWvMdHumDjyKgRa41XJkh6xy7XERSqNrPvaAGyE4UHy4Zs3J9eCnVcDZEuQY61jHD5kST4Nv7Kgvju",
  "key5": "C7rwRLQm3vjee7XcLNzTMvpxCczqKzXt9aBeBXTyvB7ddiYP3Hr2yaDwBgZEqk7bpdjf6UAnc9HBWLDpYUNCPe9",
  "key6": "2AmnkoXQeiH1gTLo5WiuoWGsM4BpR4BA327XoGbYdcRoNTo7EKPEVS6LK6iRRdDyTbdowsJWUugmvGF1upQfhXW5",
  "key7": "64NskSuyEKmVdQzf7VhPS7Ugrc3qGtW38ffWGphbg9VLsGbVwEicAjxjPArGhJfE1dv33QZm5TBzJVVsWe348rVe",
  "key8": "MgoLPEjYFgFXP7Ybnw5Gv7HHSW8SGCpeNXAp7zY6dyvGqLX7RXSeBQoSv68BnXzvSdE3PKHWgfJ3z8sjFoTUSZU",
  "key9": "2AFuATGiSBuLMhv7K3SkCgTMU1ayb3omm5vJce7paAKeFQm9Ef4Aozzer11YnWtR2TcDLxdzSA5aAjNF9Gb3Q5cS",
  "key10": "ynduWL2NwctSWGmM8fmUeHG3o94kfuQTLZhm4Jpu2XcE4unkNzbXizKWngi6wB9SS21TZ8tc2ENfduorxGifQze",
  "key11": "5kPuvdoyZV3TxPfxNFSUQPJT4J482PVuA3wqr3VVsNUzqCj1gACT7X2J6SqpCQqZiBCFiXgZnHPSegqCE33zzsaV",
  "key12": "2HjocmWhQtBdpfdHBHjBcexeUMgaVUHLKbRHEWCcLnFaEWt3tw8v7Cjk8o7xdw67VB4GV3tRZWas6vAry65wdXiV",
  "key13": "4N1pSXHQoUmUrUF7ZNpvA8HH1Mz3dpYQoWFfkQKAZjE1hgkoJ2rZQHbq4WCRRi143jQSXP6LjASPPU9fysB6SASi",
  "key14": "4HAhiNnSZ1EJ8fc4ySE7MKi7j3v9TsVxc7Tidkguhm36zZs8qpim7frhSZEjDt5Wfu2mseWzDio1sDbuDg9Gw959",
  "key15": "2mrpaETQwbzD8J7d7QzfNtQjyhFvVjeXDyA9mnVZsEwZJFBicqF4Hiu6nuDdJAcV8WeebhGoeK3dVMq4ME2EDCgM",
  "key16": "4DEiyMRoBbVBvLD4mEDKowZKLv1L4HpwP48NJbdFYsENpTxJsW86Xdv34rKQJ7Uu8RA1XsUo5bUzipYZ7f6HJPN6",
  "key17": "4qr9g3ahzjGhmF8x9C5Un9sNbCf7KSA9bFHk2d4SyDqAjahSFnPhk4cPPmnba2QqztxiDdMG97FzhjkZe5Ndaqpb",
  "key18": "2sLiekX71K6iyjgyoXrpHuV9oxSKReUug5B2BC2mSJKFRCB1wWYG8Sv7DAmLJKFKjxhPMaSiYjDiTVfEtmFYZNUi",
  "key19": "3ZxYqrWTtL8vkH2uCKvzhUD5WEe6p7NTC3boxuWUTVJjGExay9u1eChHA8qBqaB1mfQqeon9QuyotxWABTa6buzD",
  "key20": "2fY6xtTUrvGbwZz7vvPDTEwcW3oBEm2EbwgD9GSWtwH6bMMyAHpCByuRxmdwZqoE9uUiCoKFfVGSZL2pYa2R6oSE",
  "key21": "2tXVaRLGTD2ZoupK43QiBmvGFwVLiRP2ZoYQXTQHHWR9rprJYMD1LfpNCY8dgWDZ9b14Cq28EfM5hsk4rWATSjQq",
  "key22": "2r8gXJ4duKqn7BNL1RUxypawEKzsBAmVpGW455fHB9Gacmp54Ev4ZAbwVXXwno395F3AXU55woqMjBoziiG1tmm2",
  "key23": "5BM758uMdSFmuyGgEZ2hcgo6JTGnWQ1gG7WskZUYiK9Sbgfj9ktYMMbCiy4sECzjwKsZQRTQxbdmPTK9oenTNNWV",
  "key24": "apQSMXbWwkRMCAeCXZFwWeg4Pv3p6Lvpu4E3simiQ2nNjwGQ2aiXtsG2FeLsEwRkvf6VyJqe5MdQ1hFsgRyGUzi",
  "key25": "3KgyEqXdgB4zexZANsPNgMp543kJWqGTrCSgYrjKPxKHaX9MDChF6qzgj4MKRGHXumrt52id4FLaYaFqFRmcdBVe",
  "key26": "4bghV96BcEiGxaPyXwNY7WD5B9JcNDrdNj7BGKG841cRBuRtYue1kCF7RN4N88YL78JoM5S4eHuPN6qSGYbVqXr8",
  "key27": "5WyfDasbfVUWyK69QBjz5MwDUUBEoHZPQgxxTzCtidhvrb7qmbe5wSYp9Nf9GovzDetcfuvG4BX89f5piyUwqM5g",
  "key28": "6eo9psSRnropMmricNoNkQAAiRvpTeHTdEiJ7nDX8ZtLHHwjsURJ7s1ELo3USLaWqNfCAEtxLdieTJgQUheQngz",
  "key29": "2DwzBH1yLQ8zkefWYTvLt719AbXynKMQQj1bdF8GprvGY9ZWhsPzLEMS11j1n7MvtTV6owHMKRUsawaRAjSRZmyS",
  "key30": "5D2rdwEQJaUP5yMGFvPZSQ7DFfNE9kRoHWdgXfnRg9NgfQGLfei3NEqR4o4b7Cx3jZSbu2QaUUGhE7BSbLoqJATo",
  "key31": "9bZBhhHHKa9wNFCNQxhyFnDJD9Dzpj7PDoi558dNJtrvixGJr21xsunQEQtgWZGbVdQy5L4AwMj1PwQNhFQEQbS",
  "key32": "66VtLHM4HgV4cDvbmnNYBFu31uhKW1ccBnCmBA3MuVqvZjGK1PEjZveMc3RopedXWNueQPEbGD5Cqe8JBKTZvGCM",
  "key33": "2k3GkRFewCJVpfXTvtrECfaLB2qynhTYiFUMs3hRjaBwbjYNHLeQBbe5V68zoksvzu5pvN8fMDZxKhfvLikbJ1nF",
  "key34": "iXEPpN8wPUiTauR7LqcRWYyELXEG9b7MnG4H4tmTwCkrHZmBQpuuvGsu3sCcYEfmNeqGQDjj2iBhN9d57wBHoMc",
  "key35": "2omPHp2Hz5toUhTY3yDg4ydEGmgeg7Umnyc5cLuKUMThcLe49XKtdvnm79CZ9GiZwrcb2HVi2J679fSYD6Y5mZbc",
  "key36": "jrdSuQvyY73FS8Q61g2owJbSyZ6U8m4qdCFSNquCwU4LY7yDLyzyoMhMf6Afq9aZSfTdMSQzxFBekxkdfKooNjP",
  "key37": "Ym1JnhLHHhwJqtqnNGMujZsqgCfaz5BUim3UDXA7oTG6gt9xoxBmt6MywzuUPknaYAsSAWrVWokazdAL7hNn3tr",
  "key38": "3KFcuq95hU9uXhBCyWsCB1JtZanFEeS4NT9RfWn23YgvjG9hpLmdFtuTKEq8hRMDjK3ruCbTyJcWNggGy4bt29aw",
  "key39": "29rgXE23zbCMTa5g5zfjdbjnJzmabYDnJX9YAqxeGLZPV44uwMjTaHwTQ2uWXvSHi5XDwNxTb9Yk5hLm3DhuryeY",
  "key40": "2fgWYb34S75LhAWsj3MpRhRc8j8XpKqV3JCA9bFH5g8wbgr1NbnnkgWZZiY2Je4V9sHYxhDdeG4AAs82kVh7eEPn",
  "key41": "oV6WT8rpJWYUHYJkX1fSj8YgC1cDAeg4Xd3JQAmFLfMmiUGKixCMDyCjErKRijbsygcGqAZikSCiFv264fcZeTF",
  "key42": "ckr6j6rbnvhLpmiPmZtrfSbyHbfVzJ2WGQy3ZYSu5fLBSXxvXqQLMM4qff3DKdJhDZdU6en6S6ybKDCV17cfHEE"
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
