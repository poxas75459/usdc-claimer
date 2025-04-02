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
    "Luqh7ib9brhwhCxx9UBSaxFUNUekJeFHcbFnKVJ5LHcNQJV594MvZWtdybdLSWvPgZDZrmhKGwS7HFhfhiSqshN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WyuLUoxQLvEZqNDzziYWEpbVcBcu4tXux2GXys3Uag8uCXXMC2ATPjcR6vHV5281Zh7V9BLFvLp1ECT6XX2Yjv4",
  "key1": "5DNnCW7ArE1sh77QT2s6Txo95CbEv4Fou7nRJZTPzUnSi4iZXTu158zP2NiCuBexKxpDgGSNBV9AzvuXGU6uNVGZ",
  "key2": "2y9Xh91jm9DY9FS3cmwDiQK1Q2DHpfPAsbM7vhpAuiYfa4bwBWow9bgPvQ4MYjM7sd8ybwt8FDst6vJ7XE67ocyP",
  "key3": "31CEATZyTCoRJcxGu4Svi66Qg9rM4G1mUrmp1DdcfSG2QfyvmShcXQpxyp9kfzrSBbsysJWrCwRV1bPkBjfjs7WQ",
  "key4": "xPPq8ExjM3Fz8sVYxMfD4DBm8tiFk4x6mJGiFQqWtgh6xUvXkthtvZ4VCX1bu7kVjpaqCoqUPGjGz1pcpaR5mL8",
  "key5": "41uE6sihZ2tp9S71JxC5MC1hM6bmf7WxKhvk4FBjqrBH5rJdenkm37i2tMDgceJhtH3zYCf5sCiokYb3ksjzDHFi",
  "key6": "4HArQvdffZ52oJLz2CZcUKE75Kjj6VfS2jUU4XthEH7B2AvSihrdPXM199qg3rS4ig6eBNXRZniGEpJr5t6irfrm",
  "key7": "5DhFtt1yDjyEZLRXWKkFixuqVhkzKQ3vqfEH5iGQu2czZHCah7rXBTfWGYNFaNQM3ocauavuDMKLN6gPAQf5zA5t",
  "key8": "cyyDxC3iKwkcVGY3oNh8ufWGtHGgZ5HDTCk5XNXjJ5ByVwQB58W4HqGgLhvxEQpMpMwnU4ovCUfuHJGvRr97qJq",
  "key9": "2zFzGNqEebbVNFQbbGW2KhRcxTC71Md83vrJSdazY2KRRawLgcbHxWyscVx63s1c1znNE45a5BLMq2X7p4Q6icop",
  "key10": "3fNdWxyRDzaEJvi3dEj4zfrFPDBE8r5K4MUKqatTzXb76PHCpwRqXgUYFcHMyzJ9c6ufahcrzxE5pxpAuUMAoEBM",
  "key11": "21yTKX5qGsYrU8sJ4xAv8cgdAzXHoJdVk8pGLvKvHc1DqkEUjZSRvoCrM6Pi4zYiz6AFWvUyuXYQgyMgFJ9PgoPC",
  "key12": "4bceHazhyHPDkk1Uk58EFyVhXuwRzUiwD3VoXabEJrzEt7mubs2bxNjAcEt38DhS66uXfhiaLNhd9NznkAb2z6hw",
  "key13": "4hL7SySFUdRtHMvGAZMSEFfhKTaQZCmk5VSRzAinPwZ16jBAU6AAtNqcJKHw13TmZt7nDu7DRkysU2kkfuu9tFgh",
  "key14": "4vXABT2uZvatbB5tMSV7QNU7H3RSXQ5YzqKwEP25Zwipc97B25CGUQCZxGbyuoQEFutGBAgdu6MoYCkP5SFSX1HR",
  "key15": "4vxjV1w3Cxt4GaqT6v5z7GN8Gh8JM5ygsDcR5hXw2nncHBwJSkh1L7vRfV5kY23634wdfPGxs753qgWySkLG93Yq",
  "key16": "5xFZTEL7EznkpCkVKuRP7EwDxmoP5YYgS9RMy2MeRABeS8kK3tKKnuzxXpFRjwiFH7fqVdk511S9gtqitPYEKKzf",
  "key17": "2YXLZZqMV9iBvpJrJ8pRkKUw7Z6Y9EAtopnddH2VMKvRd9wn31Rq62QyNu9jSQgb8eJ52ZqFcsAKXYSYdgWDnats",
  "key18": "XEG6aZFoXeEAAwKmMbG4taswXuPiY7ifTyvYSLzt1Wn34F3rK89Rt95Xx1zkDZK9qr8Kf63LwZcuVTtxvNPitKx",
  "key19": "2GpeZVVVoFXb7nCQ7xC3UiC1aK2S5yzjZQnLfQHUbJa6hgxgqTichcaEjNYWwAgxahKPSnLLKnPmV2Y7HeyJmc2g",
  "key20": "4KYp1f86hZGW1eqBURPFy3VWfcjHwwzakUADJSgtvxdfMcvwy3NTLgQp6jcm9infn4hFmxm8Y6Zky1SwFDAFHFyp",
  "key21": "3yodKwvXPwpwX96HM5As8sqDLVjuXidVn1a4BdbbwefJ3uZjJe6CX5xqrmacm9Tszez6TYQgiouT1TNLqVxFCGd1",
  "key22": "5fm1BSjc9taeqMN4u6KscXFupC74Z6ieBj3SumJ7iH3zQbhQfjjJki9kLbmCFZKUZLz48bC4L5SVbat25AxMZyMU",
  "key23": "4hujMvPS55h4ozWoLkUc4aaS1HpwJnvnqBfSqGEtn1DBBVqVZvgprx3SiKZqDQHVfJRMPBSW3oHaV3AUxMJF4RMt",
  "key24": "3qACDJnKtUxNj1hPazgLN88CJBbzQ7gWzrMTzZe42GUTLtqKzmtjvkc9Zm3qoXU8dHXPNgvk4RgGZf89PKYruny5",
  "key25": "4bVGPhTcEME3DXV9nwZo8D8GgafACBFdwwZzy79Eakkds8ASuwgxszL85vcJRBcG4MXS1HZvDBjGDn3PcneLdNPk",
  "key26": "BWniWxCmUiibVaBXM65Ei3aq4THzAnzdnjrJW2rA2T4W93KxgtruMPXxJSd2fzoPncjPBrhmBApLVgetKWQVt5x",
  "key27": "4Nh5ZBs6qHj4s4hSwCoprvQzAYFyc1xwxU74cdyDL9r1S6KpNaarEAs27o1q5Nh1EVe3AJEkY1xFLoZdtY5GnJyb",
  "key28": "3ELnPSMMx4KbL1wTpBVv61jKe2siVfGXEu5wyH6tQFMEmMJ6eD3zDoKrjKbuqFb4dH6rN2LVGxfoH9M63jGMNRFE",
  "key29": "5z8taq8hQ3AsQ3Uq7ruQ2Nc9Mh5KwHbhJyVAUejCc3Zkhfw36aS6i3ZJ8s8QthhXN3ajYg3f9fA7PygFwj14GY52",
  "key30": "ofHmycj6FaC2arFvQhaz8DaSBg3ZVFV8Y8AfLUrRBLj1GmkAqUNS85J7qSu4sYiFQbkJkJXsYGbA9SrsJobsd2z",
  "key31": "4rJixoBmyyEb4ge8M4pDPoBGsNH21Q9Wa4VHrShPoWUdCXRX49n586iKDjknwSLkLDzsd4Dr4twPjKwqkdRFbVc8",
  "key32": "2R42QtSomVcoEZvD5t13uo7ZD24peq21HfMcw8vjRn9uAfoZq4PRHVYxpLDackyoDKVVjjGLS9Y854c3mS3Bty77",
  "key33": "4dDJJXX1aQqwuw4LY4dnzYfMMGF2yg9eSit5oHTLsSCF5SCdY1LM8HVLYpNhkaqWMvioxeUrPB9ojdAAJ6PwK9wg",
  "key34": "vcE66GtXLnvBpaenXJjWJwc464s2Yp9YW3DeAdpHcw2ojaxtUnsYm2rZ6xgmU46uK3Wuc5ZuiX3MX2n7sZXgKhU",
  "key35": "5K8TnEcE8bCMh6r9gEJv75E4usNdtGtfa5YjxZC1Mju5Te5WkqnpJFfZb8kTB58vpxg2Sq53n2DKmxh9v4mGge9V",
  "key36": "4xLY7Lc7T8c5nperaRtNbJqNrSdhdEoqvxzw3M17nFxTUvwibh94cYWk3fHeAForurDynNm6C9BujkkLnnKhRoTw",
  "key37": "4dCjCqkNNjmNjmnQUAGzbUdrVR5rkXnpdV2wJuohXcMgypP4hN4ZJAHHnRgP3art99XjxkfrHYtHDUagzem8XM2x",
  "key38": "P3tZrnrfhKFaZAN4pjRMtjfthp2XNs6HAaijbgG6NBbx8gqXRQJedRMCX5Xv7doAcHW9tM7bkJMYe9C5pjcWhoj",
  "key39": "r4wpzrRSGwTuz4wZLV7o3gVDwozRqQEaDqQCBTjriZQSDwsCv3ZzeEbYeehpucLZsQEqHjz4YEewPUyjZV3bTVQ",
  "key40": "2kZ9MiaN5H5mxm56ihuQbEvZEfYqvCg3KENzu65LarS8Esn9j68umGxJdW11wck6ToUaKG4Z5o9GpUQeEh7TdsqX",
  "key41": "5mEon9MmFdxtjr6jFEDZB1sfvw6Pyttz2MV3Hc5ZkVRhMG7rQrm2us92zQpFyJNbaTEEH3tPPmpi7JG7yHYzUbC9",
  "key42": "549bYhaXiD6g5KqwW16nSpqMRVFyw3c4xCBg9oHva642xeF8Q5o9f1F9jFqLqrKzw7PzEW2doUdFTgjzHenYStKz",
  "key43": "45bUaC6GQkP5dWALLH3QcPGeX5HN1mHTZzaKqE2X45BYS1j7pq3vng9Ai8HK6mVURB5qeYZo2rXqC4fvgxvpSemR",
  "key44": "5ADdqxwfNWjjFKZPPDqf8hhVhv1UAYB4YNh8mULbJD7uVN4hdqC9MpkkDbUGYs3K4GKm4j3WAmDd9zmb4q2L9yAJ",
  "key45": "oPVDebuxMNUd1CMpEeAhmuXTMZLp9XEeDvcvMxeXowPNfyZostztq2zk61o6oL52n6SgdG69E7yZR1Xptjf1eGk",
  "key46": "5SvJ3hvnupFDsbmoVEMYMYUvhxeYmA5j6KQSeanffF6ehzPhsaKR1ioTsQgmXAajyL7RMLCsMVE7tWgayryzm2f5",
  "key47": "43P4kFH6sEA8YcjgNwrKRFCsF4uYs71haLZBsc7L2CvKkGq5gdBV5nMLovXuXN8JESXnuU3L6vxKcYq1UY6u28W3",
  "key48": "36ydE3cLNk5fcgsQuKqQKN5Pcqirs9YrHiAxGmZHikADCJu3RCXcpZdJjxbKvqRL8MFnA1NpoTFPCgoowUe7APxu",
  "key49": "42XqNQh1wCpUvEdk2aUoTWxPLTe7SuoKVnX3mh5b9QjhN7ykhYkmgffG5aBojxs3SN8gVXCuPqW72j7F7iLevnbq"
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
