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
    "61KEQ7VL8B8JE1JSYMjNXLbQ2agXV8g1Wp7LpqoL7gjQ9pLCXuT9oxQi65cKMe8Mgg8JCwWfx2oPVHznbrG8Zn47"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nb3vKNR8HgGtQN7yo2WA14Ak1uaWWvegNDWPMEyUgbyerWEa4znj8tR1JZfkSrzfmmfG3i41mBdLWFPQCABgFC1",
  "key1": "4KxPvNuX8Nfvr95Z3iM4yWUQ3gvypmu3yP6t24sDBLEA9WJZmskmbRteGAhKCAFqKoU9AvwVEnZYjWgzfqcriGjH",
  "key2": "2Bou8qMwPBoddGP8345rXR3PVoA8nVGWRFUUhyhsTCu4LR4twWFKcYZv2v95u1GzERGV7ZndxwZiXwF1HLBgcRRc",
  "key3": "3Fum4gkLijXx3g233vffEJkQuyq54acx7wXX6yyZpUkH9sCBbgMew4ZHcRJG5B7AC3edVirXDUoXGfyb1TXRaYdv",
  "key4": "3k1uvk3gCsUJs2r31nWkcRiATtCaiYvqaTbpwrKF6UQRg4YpyrYUT6ijjnqZ8vZyLQiVjttePoiQKagMYTRgXkXs",
  "key5": "4mZDr4M4BBubX9S5nCRurB8SnaQW1KNFzX4bXgWYmc6Ch91PiMGYkXAF28xtQJzHjMNUDzdiqH8YnvzoE97y1dCF",
  "key6": "2yky1XUNzqWceoekLroPzJwdmSxuwXLMwUdwviUik2rc22W8AjdS6rtFaSca259o68FMJrvjaFbA6QETZGztZrAc",
  "key7": "8boap7pmFhQPT12dXrAMKZbv6MuxWbBQkSYTKwATa4nUxkCEa84upH7My1Yh6So41ktrXpcpC1qvKFLhYpkL1dQ",
  "key8": "3Mvu6nqm5sBBxRQxh5fgvcbtCnb4exbRSzSXaHEi54Ni2BkrwEBovKTFiy4KZ4e7Pcy4wqZNsVK4uvMSzCsVLD1i",
  "key9": "5zyHjHM4GyVRK5sNiqioJw8TraRCRpB2q4h8eg7KmoyMdGLEMSEHSbp3gQgsgcP17jUcgg3uQvEbNSeBXANFxFeV",
  "key10": "2vSQBcvszwEGaV9ripG7LNc4T76FFbyFEdLUtw5SY9B2J3wHiYAGphSTdd6xpc8j4UDqwu6zxQgCo9zZmXzsnB8M",
  "key11": "3zm4Rocfdnyiwy1cnKxom74KumXjMAAuk15RR6Hxet8ExFF61LqfMiukN6qP8KjMWDdhsfBPmJKCVE4rof3f9ZPT",
  "key12": "5sWXxgBMPvoh9uAtWKoLhdnd5qB9YAfwzzvPCoSc3fY8kNUiH64odwL3hu2doTW7iZge4tro9ymtnbfFmVv7f6DM",
  "key13": "4QcvectyfHVz1b9HHZ1x3dgFLgQPevL3zE8H9VUwnP1TYz4sCn9W6MJ52JqgSBavts8bhRd854XPPt9fRHZn5KFJ",
  "key14": "2uXg9NNwcHqPi8yLUPw5awtzQg29ZX38i6XtWpc434E5d52D48V6b7X141ryJTzs1YXBjxuF1v2cithxtgTRcCMA",
  "key15": "4Kz7iK8i2CLdZz2hdvKwhpjeFbKsef7g3Ssm6oifEYJYGJVpEVywELDt9sbX5hFCEusRijahTQusY7NyJxwWM6mU",
  "key16": "4rxPs3xpQz9ZmNMhWdSQ2YG9M6qxkWsNFoXT2e8kC48qsXRgFk8qP4tWtLxUD4cAdhNaRcojYnjfHNzVSZ6f1o6h",
  "key17": "2ESHw6Q2igvXfJ9dVp896vcLKWoNGBzDgWLnyCtsjgCfyGndmfiQT3oH7QETZkRLzz19yfngKvWF24VX7L5TMWxS",
  "key18": "2R4D558Gm4Tg3mEvg8tHEHf4jmiZKvwA5othx3Uyw1WvzF6A1xnogvpciJwyU9U2ewSb8uXFiZYsVNwSRX5GicCd",
  "key19": "4pj95jwBroCdz2AjeyGGhvnS39KMAtQauGfhhqxsYwyUPU2GJL8pkK8Dozv1xsQNNyZ5Xto2EM9MXjAEn7WVasQz",
  "key20": "3QRYf4mCneDEmX5bUpRwwSxXNr3ULW1AdohfoDZT51Jq7HK91NyJtf8pE9DVzhxmYfUu3M7VxSWXSBdNdopi7H77",
  "key21": "4QTiNNKwmGmyKeXsCmJgEDVWoFYMX49WCMoL9KMeHgJkrBvCv2TMdQa4kuHY3GqziC9o2My4TPTMsaSArneK5S5k",
  "key22": "2kP3Rxg4xgpCU5AH3LCdmmUYdaVhnfpAKU68pXVU8VB7JBx6P6nbzutiDxQTHqUeZo4VTcd7tXk57LqyGXBAycvq",
  "key23": "2p8Dsjj5aNS1HByWGJPLgX3rMCGJ1qhmUzh6hfcF2GVgcHHYdk6irAkdUEsXW9JtxDX3b8xLRuHNpgyDfRrDMkNM",
  "key24": "54pVRy4F1sbtcemJzmxwub5NPMrffgD6xDejsQnd7NTQKokU6Gzj7VmJPHr5imkESjBqBbuNyQZE3Brhg2wYDqC9",
  "key25": "5hxLBpCE6kMJHZH3VCB54qZZWkgTza6842AkEadnS2BZfTWezwivsUTx6DDUqHzqqXQxh9yQchD6m9omvRhQsKE8",
  "key26": "4ivSsvPfSNhMSiRXGz2G1U2oY4QFcw3U1vKo1drLfxg5gE7tj3hGH4d31rkqMB8H1WBGMtv3wfkxjGpXx88i5gM",
  "key27": "3B7QC3tFV7jowvjtHUjm1WnGZ886dqceYJ3VyRdfd5csWjuhcRbBp9NtVjVAUFUHij3Ud4VvLh57C15R43a9g35t",
  "key28": "3sLFMuSAsRYQktxhJS2fbg2cJswFtzxUzZSMWwqv8ozXzck4x3ozYJESgYLTBepvqcnoTtp1xvJEwygiBmyTRt4t",
  "key29": "3dTgu65fzawMN9AFbCMbtSA4kYAdpB3phMi3RPhrLNPXxETW7Gi5EYzRikeZCYreeQGrX4hHF32U2f2PzcuKWvcx",
  "key30": "44f1VazGXdCcWGnqtMy7BLWcZmYPgF71hC482DJU8gvp8GwDvzyScME5wHG9Ag8wZYbzErXSJ3fWrUJnoHQrhHC5",
  "key31": "7QQqveUAxMCovftzMGVzUCXxRabgxquwxmrPjnAE1kBnwpFt8DD9cLnQfKGpL4bddckm6Z9BgwjyrXXkWjKfRE2",
  "key32": "2JDKonNFrHhgdqrxeDH4Kk95dE17png7on3A1ASbnXn14Hno9Ne9839dPYVqwoCmxvFiL1Q2zn213AUpRCGrFCcP",
  "key33": "qbEBXWH2UTLNybQ6cNqTTd6Gf47ZyJNctukEpENkWBrVJGrmVUxA4jr5TkDA1MTj4QdMvfKYfRroEeYEPeEBW9W",
  "key34": "5thXNY7k2J9zwepyoAuGj94LkdKhB8PyNwoSikSjz2PLY4yJC64NDrCCwpLAiNzJMSHeh4C8XvcMAELDQqAVgf3G",
  "key35": "fnZra9D5awno4WJbJMMGuU7a7CRzGxxDkrK5k9nhMv2Xp5mSNZ8VSfFV6HL4YhBSDCekhVLuLUFYrjZcBj5Lmem",
  "key36": "zurWKNMS8f44GUUYUB8fCikebTFNn1As9xqvYRYGKvjdYHLhPaGxnJhQ4RAEYxk6y1E3aESeyhZUNrauYMVMV6o",
  "key37": "VFKn7ZSyqD9CkdfxKrGSTGw91ERpFXiDbeeJgPYGHE4RVyhEubYsVXcbdACGsok1QXMKHcdRkaXWs7TjnQZTeFr",
  "key38": "tH9wA8ohikrG4NPDh399kxUhn8oo9rQKWv2kiuFxzKH4KEsuDJz6yMBSW72Fzhn6FSuHtVPNnr59y8a5tp251rk",
  "key39": "3TMUZSMRU4LKAWkNnUR6e2gLL2jTtVNZeu1ThzTQnqGjuYpTPQ6apYCh9TPaBAJ88y2MXVN5R81iCMSuLyJ3gWGZ",
  "key40": "3Ttfhu2AC1ZVAv3HqpnvQfMuwKWung9rH7Y41Uk6THB74CewX1mSH5hF2k2XkqbNzvAsiVaqRJixjb68PoSkD8K",
  "key41": "35wsYXXTBCs3qLzokRdG71pkfCwhFGaLSd4oWCudkAu3F9KRLuse5PbPkLnvCMkPpXg63FtrG2ukPkPtqe93xNxo"
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
