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
    "5KRXndCdVpjE4AtNkPNE9vBEYmHG3knsri2wqLC4jNhkUTyZmtcocj5X39icYRX3xcDJJVGkMKWfuXwFoFyGxqsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JFmt7xJQkZkTsXg4pHVmLjTGcUc1QmSb3FnmCtKwbE3H9xXQZSyfMz7vhegyJxmSjmc1Yew5Q8cjyKwqp4KE2Qr",
  "key1": "3T7FwtdzfJ5XY9MF8sMd7r3aGHamKGKhRKnnuKv52dyoSEmZ3TLgpKKFeMaTUejLw4hvwNkTKbmezU53Z4dHMUYy",
  "key2": "AFi1MSc2kk4fL6d2gYAJdR4XC4cwgVHtLAsTvc4LzyzBcGQcQ65e627bquxk7KSGN44nbKYz9HyU2gzN35oNVuT",
  "key3": "nXKn72hC4Bhegx6juyLuiSHhDYZtLw7pYJnV6FCfhS1UY8wMntXfZE34nCeTwV1PTefvEmd6owZA3SEV9XF7FFX",
  "key4": "3hRDAQvDaLPGvgpDGex9yEE4VKT6wPEhFhY5rWfex2zdkAJT2Y8hB1vFySF2AKfxFa8Vpw8EQKTN5cSheH3RXSyq",
  "key5": "2EcBViuskhGAHyQsM8DG7oiuXSPtnCBrYaXzXsTqVawoopf1CHL7JDgmj1pvCXqbBgeqK6w487f95acAVhevkNmZ",
  "key6": "6KsJxAfvKokzgCSPAysA9oVEh2W4TdnocCTsM2EbdXw1xsZr1MG4Zq6sZ4JMvMTakZtyYDXamZSuMdyqPaZNNRE",
  "key7": "3DrBZ3m5DW93UQrYuNVG5Rc94PZdcJf4jBxzp7pMoTXD12SKE6waNfbqMLETEPx8BzwewwTDSeKQamkeFwMhBRAR",
  "key8": "4VqXSwjU1PKgFnCPpBdtew2kMfkQoDkdVzDU1W8TpVz1SToUrgYMrTgqAK5ZVRZBc9oPnJgzqHSwZctvwrXZxvWU",
  "key9": "2EqXevbSkfpT6bbZ1hL9zEMCTVB63fyeBwjxnCmfbaAiEiTwjLDT4SFnhfKr7j23kvNDeuJ1ktrzAuYEovZWex25",
  "key10": "2wRjaaNz7fXjY12Naaip6pXNvh6gayiPbD4hVV3nxtTgK8PFBUhGzgoToAJ68d3vRu66dzH4D2EuPtug9iG5u1zU",
  "key11": "2NsCKAfmUA4aKifzW6GwJeNTgLpW49R35pVmfG8E8AM7SempXovMyw92ZmQ1ueSD8M5VEBq8WLw1eBHE5dMCBVtA",
  "key12": "kWpbxLwrgjRU6WYdRw27V75askHGYWwQqsoZzERp2PgJis9ttRP68CgLYjgDJAcQsyAggk4R2Hx9QUGN2HstU4i",
  "key13": "2yUWpAZc262gpV9LgPtVWDGG2jNNSypNJvFaTAjys61J7G59U1FGzNgnqwpBdR2szkB4sArf7LTfQ1aM3LZu7ve1",
  "key14": "65tSnHFZwDYcT2d9BjFe4SojwcA1VXdGGVNsN2c7rdsQXSFJ2sPSvztYHnPZ9maiWuDi92aMQWbLLfC2Vo3cgBVr",
  "key15": "4ipgoKVYvpUAEeotRJzrDUD2Kq3p79uQBBzQAryj8N5i6WRWd7J6kXY13NKGLKdfLQwsndQEZEhTgb2FkM4yxrAv",
  "key16": "3WAAgnw2hxXkBxh6wj4yYmiDJp2dKGczzrFuq8vEtFeEQi9vgicF9Tq4LyP1t8HrA1JEpSAC38HLqpJwYUS2sitN",
  "key17": "4KJfGNDASpZL67TPd9VkdPkRCMeygMAigcvC5GesuwYGP1tMpHoGXNwy72oN5sSFBvdJKbXgFk39zeJa9WNo3mm3",
  "key18": "2KEpY2h6yzWTLAGv9c45hGrpRKmTXH4s8G9jj56Rvpbds9VEqKvXMQCyQjmBxvUQ8nn6pXqi8KvvMgFj4n3cXWQv",
  "key19": "5J6DE7pZ9fL12vfW44kAzq5wfN3FscCZZ4PxMkQ7cVgKcu1BtgmQWXtb5o8ocYhnCJdEVNcPD4TKsoRxLLxR9HAM",
  "key20": "32iRdmBLmVcYX7RkGEsCJ4t7yTZFhyBS2ng3WG764FkwCJGc6bQgg7BUPewuZZggagmoqcDSa2qJFTKpYpEjAFUb",
  "key21": "3jYvN9yLL8q1JJW93SUMJPin8cfZ3fFXM7T6CGy2NBZow4CoQamMgNBk8VhqjtSDXyGZCdyCnuEThubQxL1ZEiUn",
  "key22": "62hQ1B6fVSLU4TCBmeyoBd3VvMHuMMpmXuR3XU1kdJToPqkuCmh8xsxwuYUmeXu4HrTr74J3fmRA2JiU18HW4Fyx",
  "key23": "2gBtSPbxYAW6fexbgiasziBQGxFugDhtti26HsELS2QsqTz7baeKTrLsc4hLmhAL8nk6LorWgBCAgwe8d64UmRja",
  "key24": "2STJvRa6j2sPMzigwuQwK9ViiRwWgmBtFXWPWT8UsEN3fUSqmV7KJZFEYKgnciSnK8N5XBsjHUrNSgve6g7VHqzQ",
  "key25": "26z2d6kgWYTbWHCMfNy3RMr1whRLTkucLv3L5UA2ekXjaKnYEnp1XFMxn6tUrpXqEuZ7Sib6Y19RLu3DYVvq4QxZ",
  "key26": "WAi6MVxxtZacZiES2dAB9FW3nhawV4QJZ5vHW7bJXM7PUaLehykCg9L9vVq6jxkD2YdSLhF6XTvsSnhdJSecaGa",
  "key27": "7pv7L7vY3mv86hTXKLD1T5mtAvzQ73Bc7DpgYFUfEimQfw8aboYnYgJWcnKHppvk117yLYgFgt4ddS7hhbbxSiz",
  "key28": "3dVpiTaEuhNEhSqaGmfYnkBWo3Cqf7VEJAbMgcRvNbj7YAth1YCY8BB7xS95AjX6cNRXpXcUACQiKaikUcYokANv",
  "key29": "4Um64cG6Uq92rqkTSkgS9xPMT3cbH7tPcb7UV68Vimrt7MiGU9hdY8Ap6TUxFM1h9gFF9Xu8J6rjhu2uQ5DpkjiX",
  "key30": "2CvijgbkGDxR1C6CiT2WC3Pb5LpCwSZrbSgm9eSAs5d3cmpRRjAj8udhcXbxYu5kCz4cD68Jmd8FztKAxh1AXy6k",
  "key31": "25KctR7dZKhwiKt832mbxPt4DaNa2KhehhQ2k4CEiu72gFkY56PmuiWXzv4CR3D4rsaxbf7kpLJFPP9YES1FqC6L",
  "key32": "4qnU8FEhas9vA86pPvPVQJ9oRJ761bTxWSAJfEF35ACGbf75pFsmaURi8NbVgSxrbbAJ3WoeSzaJHiyjUtWq3ztX"
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
