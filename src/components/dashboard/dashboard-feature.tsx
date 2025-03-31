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
    "3oW5xYm21U2JVmf5sC8fkvuri6gWp8g1Q5j1tHZWDiE2TGoB912TJTKX18sBZzHLh1ctciND3cS1oRgNqMkiVGfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vHHQWLNVGCJboHs5Z5woVkTqjhidLe6b3PQSZLYSDZ22FdGhMuJkYhY7b8UYTWfqrLQfuo3CMsyA7hFp2CVAxKV",
  "key1": "3Dqy9CbC76E2ApUgXi8UeJG3LX8EyeaDZMgU5udXVN9WmNUior3dPVgTy6BGBvrzwm1YHktLNjvNPpmCAW428KVa",
  "key2": "2iAmbLCDd4dEpbV1sZG72TV6dNZUQjqzKxPYTWe2qyu4BgY64XTKBhL2LYA6xbvWrt7xUeGbHPSzX8mjNcUTAhxe",
  "key3": "C28KD9VDjb3XPJp1xm9gwGEeJdFbHEyC6bGNA68kY343QTs2HaYwXQHWcRBTYpGkXccx8T2qKpSGbJnkLWeVgF7",
  "key4": "66aKsapCQiWpV8ha9oMW7n65Ss7zKkhk9d47ppWFbrJzRdozaAsLYWYMDf5i5v9Z6W9npcsxfXaTmoymDJVRhVbq",
  "key5": "3EDaYoUDPKT3PcsUJQitMngazX182deKa9mYtgMwUaDiAJ15ck1pwwCPcagMzwu4DnQszBwmtHgiLfaFn6b2PU2K",
  "key6": "2fXPY6NqpGrYcKX9SjQLYkqXZB7gkEXM5ZuM87BTYyh7CWVfyvsrSvNgZkFurCZqfaFTSk7uPernbefNYhE5Gcuw",
  "key7": "5nM9Z6f9tGMiQeCu8dATZCCM6ycoEx35U8CNRA7hdxsVrWG4TCVw718y4u3gR3WsrTift6hD46W8DsYgqExKStE3",
  "key8": "3YJW6Ejv1SCs7E55qX6NQuefJXQkijxUaAcQErdkPDyhx5ZLowzcpNV8unJ9YqSeU9UD9cCEHJjzssi64mvM8Ca7",
  "key9": "3hVXogrhEqstt3DFd6XVFNGpbYzRZw4YJ23sg1Gcdf1XqaQc3gtJuWVkxQXoyN2cbR4pSjvwGrFRttcSpueYsNYg",
  "key10": "5K5hkCjuZMkwVmiHFPtRssUChQWJddVUJR4eDqaHKv8xiwQMD1k4wY3YiesXaJ7LgFwkmvct62y4ZsrEnLFNjiH",
  "key11": "66HKdpFZ34cmFCt3Wksb19yCtwAWp8qGzkw6vj64JXZzXzUXewDdju6FBo2wu9XUMrT91CHK2EjdKK24Gdnvv9tN",
  "key12": "4ocwxojieL62FLsanppYUfP1VuRcNBbTZNRMpkMK6C7spFGqbv78hTJENqSH3cSPeDJQF9bqzawx7kUkZZASoZ76",
  "key13": "fvaqozwawxvrZQGRkRoZDQDxYqvPwxWffcm6aVpvuPoZiPr4S9Joz2PyVRezBg2xyBZezNGHckFEGqxFtNsJLZN",
  "key14": "bPU9rfS8AVCs8qPG4adRGGjpb81FNz3STqQsbm5bkjhX6k4H7pyTD4Ug5H2ERvrH3SHcFSuCfVAxFaRhV4UgigD",
  "key15": "27eVArCEA7uQHkpxrfBziNyFe686HX7V2gNaxp9kFmCAjNTtZJFY8gBwM8KprSbKeYFhCuauqauYpcZJAWXd99SF",
  "key16": "3xdbhDaBMM9ScM7P2WgpTBTh7TSExjw3XmNHij6xaqTdTs365d8sNs6R7SCZHFWuvrFgL5KtWh2DDTnkN4VETgCd",
  "key17": "2jNg81WDn2TUx11tNEHHiMh3R81Mc1E2UTDHoLn7jNX2MH7PfejAUrz9UZJuY4N2Q7sUY83bQshjCT7jpWFMHAxu",
  "key18": "2HyzshDVJr4yQn31AtqhqNAqLNvvsTavQL4GQ2s5RCU3ZpYbcLmykWPpGzJ3BR7JFVfivn2WK1NYGYYqR1GYMGgK",
  "key19": "5UojeSp3UMxVuKupopNqzE58TfkJvtjzKsRVVWKaqni11kpmqkcWv95hMHvufCo8WBitcfhK3qGH8G69rCPzWRoh",
  "key20": "2PGipuomgDcygt4HSX1vRfMe1PNDHQQynccYcxHix7pYai4okiBZcMHj3a4dWRrKZZiUVF3dQNASMoyLkhbdbnJw",
  "key21": "WTkke74iRyGRtgM1QTRP6YUP3pBtmKGpBUcV2FS8k7naYyDhashKQTvrknGrYzJSkxVHkdnWqioqZecw2zGjKLa",
  "key22": "2oU4koAPUMhi1HDsNWc4U87mRZu6DQHCKKdJmVfdSvmDM7J9gU33K5HFJ1ksfzaSLtpvRnKUxvND9CdVmfn2ZpCW",
  "key23": "3aWUi7EXFtxZcRoEqJ6BAfqE7AyJ8c5LF1YYYt3pFvw5xohRXez7pZP5h7UKw9aGTxs1RddHDERs9istjyuTbMyd",
  "key24": "44JKs1dDKrTuV679mRZS8jv4KhQDqrmNm6mchfntgkxu2JUYDgvXTvtHPFsqjMctjpTzDGHWx7aLrq5gUgF71bZT",
  "key25": "4aCPNBS4AywKA2ExC3n8Qj5snpNW4dBkMSo8auEcbhGbGp1Y3ZwE4XC8B25aXqRHtHMqhWUSSAmhwaHKCvWdwAy6",
  "key26": "37Du6YK5CjKFo2Zq8cT5EeBao7UmRA2YE5TcnBF3vFpiAWtPb2QEpaUohVkmFCHUredoqgr7UUAipkUewcvZUjhN",
  "key27": "5rzRMRMW5dhamTheQUX4un1q3UdK4AoWE3gGkJsZh1eaCo19weBN94fbwjUxEdGPU48CpmacJe33bTdvG5vEDaPJ",
  "key28": "3Ni5kxZ2RSr7cG4rEF3wycYzjAo7zcUbYanC9JC7kioYzWTa8f5oVbtvvNoEFRPqDrEeiXpFwVK3rMugA1T5PRL2",
  "key29": "2pkPt2NqYbuTmmzrzQ8kaLsKD6iLkzAhzj4ofhrwkBnR5h2H3pNo9WkuJd9yhkGAHYVe7p3SGBAQzSK8BXoyYbH4",
  "key30": "3NoEK3PRtBND4QXDzzDZK5AnTMjibJZUeAoVLTinb5WxU1x6rVVsaegZgzzx81WinT2pp1zq6UEfk5MtQCBZ3pRG",
  "key31": "37kpDZ8xqL6MqwGBJ6Lu361aZvA9rA25wCmK37a1HtRFshkvd16DyPHRwBMdoeYPSyuNjNJMVuLSAg4mZszjc9aV",
  "key32": "3mZh7zropLZDneCLwUzK4p39qTnSaC5BjSUWCygkBqbwcjcu7k8Cr3ur846FyGh6uhexzCFJnJ5XPgF6pxPbMjhA",
  "key33": "4sqfFeYASp6fWjrSCFxPBkcvTwxQ59E8BHyfshietoQkxRMwNQiFHFgHcP4sPsRXxRWHJpBbz9BvFiY1WJK3d5Wz",
  "key34": "4gQSjXXmYxQYMB2NkV6uHK1X87xzAYzdz4B3Ncrdvd9WzF3aYdJoBtpN4cJFQvb14F24y1GsUe1e9AykX3EVaYT7",
  "key35": "5U4wqKzWgYFEzHcpVotSCmbCo8hKXapEA1a7zm3xQ1wquRfNUxT3RC2vVc55qciU4mr11o8oZcQHFj69azP7Wzkv",
  "key36": "4eK4miqcEoD4NqD8TBGRvQeyVxH4BhmvXsFAPHWfqP77FEnjd3u8pvkL9tRXxTgVi97FPdaXynK5oMrAzo3cr7pY",
  "key37": "3UErwTdTGSS9WExdWeUcU3dCifvEJK4CgQArdkar12sXQpnYXDCzjPAqHTt7SxCbsP9gAwMFB5KYDT8XDZh8Xn4g",
  "key38": "31vS2S4fLTe6ZRFnYnVdXC8sDbVmq4wQF7GSdhuK6iDhew15x1WuKFeCBKab34bTAt2tSagUWNMNmu2RmqhySek",
  "key39": "31gnJJjngqZavzHEXBF3VkpWeHV1mQWd7MasmZx1TF4y1g1w6ZbPKbaxRWyWrSyYDyjXQxxUQWBUvamuErEt6TRj",
  "key40": "8uENZFhgzxoFjSHSXJnRpvWbno2w4EgcXgE9sTAnqa6LBJeZemPREfZCQNoFzE6DY7HBH6HPejQ8szgUShzuh8g",
  "key41": "2P8gP8W7nkL28M6ywizEqk5rTBDky7wdi8iTg2MS1kqP9Q9YjjLte3yTw6wUDKNgpg4T6NxwGVJG6FAdznqg2mx8",
  "key42": "5GheQ3UhcEBzCBWT7WM1dEQAbJ4nbdN93VKhJmhrfSYqr9ANexs3cF7Q47ocvbk3oM5kvtFwPSbkCdy6H92STdnV",
  "key43": "125wiY7W8w6K3YGuXS4o7BpMB1aamnAZdPVw9savSEx9pHKjetfzZYRC4DUFMR2kSsJuqGFdbBMmKNqFJDse66Pe",
  "key44": "4asrk5B8hknV38WCRvkzhNsY1gB7Wsy8wpQuuQzRcKTyTQLV2xTDMNxha9Yvfd6bQPAdHRUy7xWZrzpWUceNcC5D",
  "key45": "NHTR3R3mBf2Etm6d67wM61z1m6sT9pHnUa4qrAiGP7U3X73PEQotr5KZhaTXq5vdqaAKW2fZGKW7w8WSBVtT8st",
  "key46": "Q6zBxyg6zEkBrQ1argDrQpMr5gZsyFJ3NfxKdrvoodeEpXck1dMdvW73tmbA7ADFrabiudFgwayWtZy84AxQrco"
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
