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
    "2p68EYAGsHcv6X4R8itXeNHKTtGrwBNP8mb2LmTLXYMRzNANcE9wEC8HVutsK9KpojYCc1kgFuDLULwDDrKHmJAo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YfiLzRGMHiHfF614gyLVQtvQLEZzio3aWTdrqUewsXVTkr5vwG7xi2dYJZtD7YEBXfKVBv5oXpGUrjQ5Z1Mc25W",
  "key1": "5B4BCTw9TUyS2skvFzm7jZUU13imQP6YGfKukQFgNTXZVJFkN1R4GXQmKv9LcUjC3CiT6UnauYAbpa7MeZQnav7q",
  "key2": "2i8CaQ8ceyPbANG6XrmdZ79WXKYTdDUNjHb4rbsnE9rA92f8ZgFoNYUuEBf5ckgQ9ZAfG5cSvug4FKrjj7YDAWT2",
  "key3": "2p3DGPbZ1XbexR6Jg8zZh1sNtkAryZK3vp946dQQNHScDcGBdrUfCD2T91eieq22nwWUDM1VLRpGQ3K6uKDEnSs2",
  "key4": "4ciQMMhoWv5axo5a59BhiDQga22ngbqgEXt1kvyFyPYLJQCjKMRpjRY2RQGbAinDNAwZD2AEP3qf5ix6a82ZQNhY",
  "key5": "5W9jVP6SMUyxdzjf27hS7WtmHSREass4fSxFEPFTFdTkv3aFfs3oPPRmN3p1k7wBcQ8KY1JQe66tgRcxyqrB7agX",
  "key6": "5jKubnFSTkJa6xJB7hXd2VxtLuLSSiCsEjsBcQxfY32GTJitcceLn1tQkZrWMWVTW8wTxmpzcwEasmJi9CEZzCSV",
  "key7": "4iSU1z4YwVhUegxdmuxnawYxeg4SnoQhKnTqGYm18dpNX7q94hyt4v3a3W22ypnuJ79SsSTXAKg9NccQLeFkuWqk",
  "key8": "jep6n7JK812PgZmDhmebxHVcrcKT6CbCrY4V9sPk7pWJjysNAxo3nLLH7PSjxUFfaNHD7ygs6JYScnnMuw98nfY",
  "key9": "2FbZuZ6FLaGKVAZngSqEvLW8JmLdJQXQZhQQUMUwiN1EksggmVkrLN68pDKiG1tNXBi66VASHMqQoJQAQcFmnA1L",
  "key10": "B1D8am9Lty1oRdujb1LxUNA4pfDaqb5ztXvb6bPiL8f1jVXGCdJrRepfBQcqZgbgjVjtiREuUVNQt7jXRoV5QAz",
  "key11": "dBNSkmvospebkZc13xgeS6kScfRCyvDspDwHwjuH5XzQTjkdu2MEgSzocy8gwx2mJmoTK9PBEdQVw4j5h1EbR8f",
  "key12": "3hHPMm4dzWuxQVJirw2RuWrTTmSUEC6m7NUrFuMCf2EnSnp6r3SCQYL1Bz3WJuPBAjfTDdL3Cz7fKYZRbJdPj94o",
  "key13": "awZFCDFZAjiU3wYYsDZueeWY3Yq7tW288wduNJQFq15pDA8oTRFfmGiXEJZGgZobtWTKUK9PKLB8zid6FqGKcAv",
  "key14": "4r6m4M4q76t5XtKPZY21M8NQ2CKdfvzPEAkffZtVkFjXKRZgysqMYX6g2NMpe8hzB6fc1SgdYFLj1Af7igZqu8sj",
  "key15": "W7z37rGtRemmMfxgAk19hNZZGCv1WsTAo8HsNFq6kTEyWkcvnbjUb2t9gVfkXnRZiHzGY5qp9RXgNmDX77wRMgf",
  "key16": "4oW5gtpD614jtprLFPphWEaFpwfwezwDnHugtorShQSUu8Md6ru9rXUqKajtQJ3x6EkxLWFjUYy67WgNevcHcoDB",
  "key17": "3gykq7xPtRXffrLgSpqeeL77piGqX3tJNaWgq67UzxwYkv2R4WKLmzKYmBcXoUBjVJKke2sMq8FnL97vT541919z",
  "key18": "4FHCaGnVMy54Dfuv1Jkhw7XvRPHPAUnNzffvEMZkVksJxpQ5nemEdh3RWRxXbfEcSRPdsoY9As1ukMUgda6FnajW",
  "key19": "2okvBZLXQ99ytsTLASFVbPinmKzYnBYEPmBGCkVjKxCiQJKjicvMPpAuqiqntFfD6eg2arsnS6q7F95GFQsEPjTQ",
  "key20": "5M9Q3W74LsxBy1Uwn5HHHSi2MCeyMGJ3kPHbngNiXP4iYKeLvtmR8dgchFPeqbHghZaF2WKXbSig6QfN6fXkCb3",
  "key21": "Y8Ptt2xYFwnk9LWjD85PzTPxMwgNxF7YzLtc1nQyz9PEbhdBGZyvno7vE1vAgRbBNp7V6PzV9MUG7k8eVZpG4z5",
  "key22": "5is6Ag9Hur5fTaUbPbzhuiPG3giUau5R5y7VyGJj7afYyYaebdsKZoQFM66grASQYHS4oj3m9otJYrg16hM1fkV2",
  "key23": "3ibiWx19fGD381QTEM7Gd9ovjXmnxkG1HHRY8mSPC8RF5QpqP8xYxizKLCWm8ocGwsFbj7pykWPe4hpyXfu5P87T",
  "key24": "4HVzTTE3LJi1SS2Z8akQCfx3HB9Ks2vdwxikCTskJ5BEgtn9MRWxSKpy9zWCestsG9XLwLoA7nmfEeUterbTogTN",
  "key25": "3jCwka8DafQ7JsQi2EPfpWBirJ194pQf6tTjqhYTjT6CWzJ17683HpTm3NDRLRSGAaWribo3BJA2TteuHy3zCLHy",
  "key26": "51HekWXDSTFy5VCouh5erQR14MyCzerurgEkjDcWwRFDUssmrNA8RcLqcUuT4t7dXKN1w34k6iVzBCj1WRsNifn1",
  "key27": "4gt5aNcxb1kn2yDktv2vztkkGZdAhkv5vf9XvLCnvaiQunBx1NaAkB5tQPn3QDYnuVbjJBdBuj6MBxz7jtEaNAgt",
  "key28": "54JARNu7QyXEu4pbVwB4yCYybMQXw6XLHyMFJtFHsjwPiVcq9rg8fJWvYT3X4czLXpR7Kd1Sgzp4bsV8HsoQPdDa",
  "key29": "3DyU3Eg2MnzJDemTxdWnN89zcGAUEicvUN4U91ZhjkseCsDAY55ZRSMZmGQTie91Lt6MJB7i1LZEZbgqnazWMFrn",
  "key30": "4WtXuLk4UTGF4hUgBEmGNuojJhdCSiX8MyyEFXC9cF1WyRxnDSbuFhzQeDvVfCNJxMayP5B6ygep3XuQ6CF66Gmi",
  "key31": "3nogPyjDEerXzGJoghWmzvQvm8cVXCUgReRRQ4ngmiFKwTYRwjJTZyVzrfeYHAs9FUncGxtY47ZU4AsP5tN8aTES",
  "key32": "2EbQinx3zi6CQHUs1xV1LLP12TNxLEsDLT3fE8HM69EAd5T7YUV9tGXysZaST4rLaLBBdMHvEhq3P9M4EBi3UyWM",
  "key33": "5X9tDtsLi9b3vH4rcYLheorR2k4fs6DG7yAWC2VsUwDeXLHKCakAycmRYvv9yZDWPVAYD6WV9ZrKBSupg9rWLyqA",
  "key34": "3h84xtxnbcEc6iVbmT4kM2TkUbDKswAL3kZsdhmmESVcVM2ZjyFuEXqkGLvBLWbV6c8y2phaLFjRfLAic6C3ugkc",
  "key35": "5EAPLmhAMzwKFpv5Ndd7nagCurcmqS8QKUGJinABccygWFDTwEnjgPvMCkSSUkqGSXS4EPi5UrMZK2nvtRvvG6M8",
  "key36": "2xZpXFLnnRsaKuez25gtKp7YYyZMuR6Hp3H5d8Q8NcVXUVToJkiTu24LE7xBqoWTVzxDt4ssH9bqFjZGnJeFf2KA",
  "key37": "4buwotoKkusFhPqwGtVv6xdVbhSZzWLmLRodzDPevUtVUg5rHF8n1NRtDjNRHDtvNZ3f7BdomHfDk63pnX1wQa78",
  "key38": "2jT73bzesNMKisJ5eBa4yVD9owN4Du6tCW36j7cruVEECreYs14mEGQ82Dn2jGXkxbqAQaZV8hJDsKFbMPRJsSKh",
  "key39": "23neop77NZX3BcdVxKSgZdFyUrfAsWkmgvCMDyd9ZctwD65cCurT3C6BZaaTeVMASAHnSbFqHbZxEUBMQXa9RWNU",
  "key40": "266V6k1ojbsAYxKfuRW6gp9azLLZKgcHfiNitkHqWZVhdi22NWzKE15ELwNjDoqdrnNDnLU1nbqWTjCH6KSjJbJK",
  "key41": "7iyU9Yf5Jw6RT9vp63WSa6unAK9WPj9FfgowHRBjzi1nyp8zoKsT8vJirLT21JnaSYArMXTE7TZtoVV4dii2rXx",
  "key42": "659Ftj1TxdEfhhQpPq25P7xPQPe1Nwrz4B1VtohjeW6cDgqhiqBHr3nJ6L8Ri41RXmR6eA6oaAj8Zkj9yVv6Ztzk",
  "key43": "46w5DKMMUqaLLup11rbHHFWMFPau11rXUCH5r33L2sjrVjEA26kRxYmJ2zJAYWkHb1mvfMBVQ5HzpgziEhZY57nR",
  "key44": "2EVbdTEp5kDaEreG9gjm3EidvDEiG9gAfU3jhxTJpyhfKCnmNcboahnzww7eb6RCeCePLLTGx3XBpvXY1cLQxety",
  "key45": "mrzAActwBTjhJ8aMGLSuwCpnRuGS1cTa6QXTPdrXz48GFCTxnNrm76LvB2SUUeDWmg4H43cXeHrBwQUpjtPfXov",
  "key46": "QEHiUnutpVxTVSeNrtvj5ZykFmipU1S77PnXuowUci2KXeWpqbnEA8WXxRqLUPRva4zGyMb4b64VfTzR6WJYh4p",
  "key47": "2V2uzzpkJeAPzpxVAT1zAjQhLzn6gHFVjbAdvyqppkiEwjD8MLkZQvcmHMRU9ukHEkmmGfpKDwUiCv2fN1BChAk7",
  "key48": "5UnJEaFGPHP37gLuWgsZqz4BRbXKu2BaiXLpP7SMKs4gLRHNyCX4eMHLb61GJgHKbCKuks5a8v9gMP5DnhjBUFtE"
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
