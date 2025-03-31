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
    "2fD5Y5PQCRs1nWgedETTBZEkUxJgcZUGCzyKCHnjxXZ7Q7MwPzogzqj3vftRgxPvkRjRcJ5ry4Vhg5Xqo6zG1Ri9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pmCVsg6NDNdaYWw3jKgKCFUp9kHaHTG2JtRFRqAEqqugtNJJi7j862p5Vv6PzNBxxjc4tiLSwS3vajazyG5xy8n",
  "key1": "4N8ej7uWTUg3puv16jrBxLQ5QfsJNnwmoHUTrjzCe7YRcaSC3jxjJBVMv8cfibs5MuaJUZw34WAN6WopaPBdfXWb",
  "key2": "JeQ1CbXSvNSLNxPbEQH2oubuy2eQJZdmFnVBrqz7Tkzivrrr21SByJX8NEzerscUbndgDV2fUoUhMHSD2a5bpR6",
  "key3": "2Suqjzr5bmYJUtEQ9Ax4yCRFCxDgZgxp2Kj7cm99k6kdioBwTTsy22PFKq9FWQrpj5UB3AeqxyiLcJJ3YzVutFK2",
  "key4": "4GzfXGkWYXv2aUYkC3DrPjdhDqrqqujcuN6CoRFTWL6W1bd7byLyLNjezHYKRvm4gxj6EGJknZ47ear1htrauW7X",
  "key5": "6gBNe3N84rcz3PDN3BUDpavZntk83hpT7BqyR4Ti8j6FUDrAEtjhED95ef5YqRNkMHJMvMpXtfntDs4oqPbLET6",
  "key6": "3cFuY5JDp7k9VWSX8wfgmpapTUMyX3dPeHsiqH58nkvtdhnD5MPEKJXKdqEmm5aBTkW64swsNtYdUaXdxYKBQmj7",
  "key7": "BDpiEnUpS44fGk7En4MHLJzr8VoDHKvoFdz9845H9qhdmdd9CKRFfXw8SmojEJiFhumzu6GD6ZvsUoEqYXkFyvo",
  "key8": "1QZUGv4bDLjXuGhUdAyDoKjzj4EPG64rE8CkPq5Spja9D1AiUn2rFnBrLGKkiFw6wYnFkKVyujEQUcYUs4eR2GU",
  "key9": "odG6kiuBGjUu2GtQEcn8sJi39dDMLDdDmVDtm6tqXeYx1eZxHE9gTLcuV3JHptNxJoxvLc4YkVPxqeYkUruvqwB",
  "key10": "3P5SjHaMxhgoUL8vjNFMf9nStiMvLKpVPVi3FS3wcDDFVtX76HqgJjBYLK7mAtCX4bHkenMHDb4hUjwXHryThN6K",
  "key11": "2rjBfZeZp43jiNbkJ2ggVkp8fRdpd7bAaJWeyzE5VoCLkeEtLAmYww7y1aKJbUsMGgpL6jiCUX25qWe2MUo2TBdz",
  "key12": "3C1PPqumG25E7vAzF1cQUAQXpU18Xb3yMo1Uq1uUxNeTw7VKcNL4NvSxTUuYFV8XdBuhLakmaiHpD5qNxTzdTYdJ",
  "key13": "64dJkd2xUkvuVN3Uc4pnfQzGvM6D6mXwLuytnGzYxN8J2rviQXW8BU8VriXLNS9CfUaCrQyiuVvgb7VR2EgPiJQK",
  "key14": "4zapF26XzWAi4oQC9XoGJKkhdHU91o5sLg7eu1NWvTngyGE9d4rpr2KyEwsNVwaHDdWJDJYzUQvTWeECTpJE9pwT",
  "key15": "5ZasGdkazA9VR9j2mfGns1K1Gzmk5e27BoXWT41B1XRyDNGFscbiMM45ZEPTnP33FNTb3QHfY5zPvHHtny1ZH8CC",
  "key16": "3kRVyR8cSwoeoYot8DdhyaD1q8PYKQ2wCcY7WkJfLgAvdFgNNvSbCZSkEEpSS1WzRCbmErTuG13px5Q6awjVFx8f",
  "key17": "4Zi8N8M9y9eKksAHSsARhRmqoNfJNCCMypjRxBd7BEDQee77eZfZoPcLhx1fWig27Jgev5Up2nh8B6AJpf5fFkdi",
  "key18": "2x7JSigxin5vWYK16ozHY7DihryEp2kcBhgTkQ6dtg74f1SFFqiD4GYq3MLuqWssytFkpLKMHzq2qnDcgt4n3JwG",
  "key19": "J7qwMeaiKePpyVqUQkWyEi8vYnR6SBHihafWAZa7v9e3jSEcnFuDAS19XAy62aYjn8Ydn2dq66pFbmQRGsAYDiF",
  "key20": "3Kz58hqRBMGKwaKjQQm5iaicj1pD9jxB9EyZZ8bszQX71ERe26pvPoURq6VCkK566KQ4ot7UUZ9rFru3BpVNWJuh",
  "key21": "5PxgSr2LTftgHtkphq2Hx8JgU3xjosHjcnk675bGtKnJsyWB2wA1TkGrA3joJaudPmCPyx5jfY8HwmgFrLjM1LRa",
  "key22": "2Wa2irZJKnYzjAXJCEdXMQz5VH51qtBvEdDcgh139HrcvzQsPM5R4khvYKRhkn9ZMHNFqwdNBCsABEVgSz8BdCHk",
  "key23": "5j3yK9Zhxq6PWe5DEtY1WJA7V1YGUyd63VxFA8fvcK7mbDyddm2g8sFBfx3FGojv58MW82fjFSS6Fz76ZwifvVph",
  "key24": "2yGJyGMtAooNg9Vw6jt4RrNAdWjzSbPc2P83obkaDshQNW2PjDjcRk3YRLfXFvjpZiuqeov7TbkKp9JjydVLBK9x",
  "key25": "htPrYAYbjbeQTzia4KF7qSLFgDbYWnteWYhLrDEGeytHTstaiZpme63LYoeUmSnodB7boGLzBbTruNeqdMXVN6P",
  "key26": "2E7EeogHDsf6PWJ3Tv6r7VMZNJMhtmo6bVEdr6CkCmaBksxNGp22RxSztUscWBxBYqdXmQ9pUPKF9ywdBfy2obH2",
  "key27": "5Ms6VFjZDWJK5C2Rmrr8maPNhFdDeutJ2BSHAcHYgMoonKF51zXA3vgKu85JBpquZFHSffqKnrhvueLbmKaUKpfK",
  "key28": "3SeCuisDnfBTDgYqHGi9dXrCTsShJEAXBhUHgpDS7WrbssXHXvo75reycZtDvxTKTh2KSakrKfhFTYmZCHmCwn2N",
  "key29": "2JmG62q7W4RDigzqxRfMLonZWoiY3CMyPSYhSTTWLSkRWwCubykYBf5karPMeggCrhdp7d2rgRPAXw4MTNudAU1x",
  "key30": "4xSdbnNBggLtwSujtiz4Vf21nQj2P3B7mmdZK82u78bFpZB2i8Zz8VFo6aU8GYuiMWG6WYSZ1nmcqX7KQSq4av7v",
  "key31": "31B5cWRSBdiPzBDhxiTw3fzxM5CjYrm8vZvsVVjcyRcZbBgLh3CcbQtShGDN6ZFnqzsTzKUjY2TjMgXWMGESYPZQ",
  "key32": "2EiJrtFrnzbbhdEA6GX4nge3EqMR4uchdM4RyLyqLebuJBpCfzgVEKBDHqZzZ7pBDHpRGhGXSeVwCjFryJtCcryN",
  "key33": "3dCpdFNjf8RXehPPs5s8Lq9yBP6fep8FkpnVMFDM6JAztTExk8tCbzJgkfrrv2tqBmGmPby5xHi9YueLcUJkumdV",
  "key34": "2TsTGca2s8QwhAMtWry7sQqd64VQSxXbmWAmzS9B99GjJu1iSgY2b1NoqyzDXhjybmsJBGoSTuqNofao27YWc3Ng"
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
