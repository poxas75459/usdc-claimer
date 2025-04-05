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
    "2U44ssb49pCvNEyRh2ouXRgSUqfAE4gEZvTg7tuxbiHhtgMQ5bcQhrNYGtbrgg1RB7JTF3hRJZH4yqtbLMPW4Uyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oZofRsWFvWDyhyB9GmjqjuDpx4mWEyzXuQuqSzT8Gi3QbaMAGCmFGvQnC66nogwoAyS68fUjN6vwYTx1J2cQ8on",
  "key1": "3L7ZXTc283GuxWDCwtB5Rw3aSa2rve59UjoA18TiMeYbftfm5EwRhyzx4aLJCpnPyqTrKQnANU3C2KjKXx9uS5Tz",
  "key2": "3kawra4uqJ6Zq6raz7zfcG1SMKM24Had2LRHasWstzmH72Zqj7vvj6FqJHR8urVoJftEq2NhfzzRK9pAhdSfpkAW",
  "key3": "5twD2mFRTXPSFWcTVioDNjLDsrXkgueGvp3ysyjqi4T2JoqLmkFVoAqUKXuF12x43oEAXh7L9SoGr89LtoAQ5N3Z",
  "key4": "MvMofJKSKnyKVE8Q3mfzjYnc1Fu5vEKztfhShcEHXaDq7Q2pqDT48pqAppdFrfYcuKZkJtLNrgUP1BugqpH5QM4",
  "key5": "3nKfYjm2FhLpDzsYhTwo9LdY3pf2naaVHL5DMWXVBqEoi4YTMeXqegRXoWxaEJVdTp7xNCprLF2YpWZTYDoJNxwM",
  "key6": "23sKQn3FPbpcTBCeHU6Wr6kEvLuAyWZJwa2EB6HDHWJm85hSp6GSzLR6qErQv97jK2oMGVCuxiww4yvwZWJRjtxu",
  "key7": "33Y8MsZpceAZW5vE6sarkiMZxvPzgLKoFc4k3AACR6qBkj1xokDDXxnsZEN9cmBfJrWodnRRv26HHdJtAkv6YhDy",
  "key8": "48K3auraAQRTBQAJsbu3xqhuVCk6baZ5ePn5gC7PZxCU6oTQ1wW9A7VeQunJYvGKiM12W9ui5UbMBtHcijT1qcDc",
  "key9": "261QczXihdNZ7jrCv5wG95d51Yo6RkfwoZkXrbnnALK26DRAzHhMhb9SF7XE7mXpYW2jvWpWTDz3zYB6shJYdG5Q",
  "key10": "B688tyiHoU3w2A3gWeJVVkurJ7y614D7ZEMdCXN2sCBgwfsDMfFTPGNFdTMYAL2z8vDM7T27sHv6XcG8m3usjKt",
  "key11": "WQxuNJ4kjfNYAYwpe32fpcjXzyGkpgc95QU5gBLfRrgxhxf9tcX79DoPxoE2FKC6vTDt8n4K1EHh5SNoiPqfgwj",
  "key12": "53qNDHn8sGe75NDV8sLytkvvnV3Sa8hTb8Yz9TtdEnZQLx2CTcaTkcUcaW7oWdTARJ2b2xNEzWSs3PSURkNEKzg2",
  "key13": "5CvV7ta76y23hg7mmGL7dxKtHU7NkAdj7LVL4QEKaxCBzhzu34d1N9CYNgMuhCJCuAHtdh2DeRFbPiTyD4Cc29KV",
  "key14": "8gHcGvVw4swdNkUTwRbgV88YGku4P2QJnSfdEiaNGCSt8caonrm8jLUV6axWiShezScKbDeQCBzwhDFHmUMBx6V",
  "key15": "59TgjcSLvtNDTfU2TRQcugWbnMsHMhKatTV5P65E9HYYHbmDQzzFoUMtxAGE2VPzyN8yfbqxr4gTYgn22AgDzNps",
  "key16": "3C1Cq5vMsrQjpqt5MCyYEBY6W3vbh26EWBtxTQZ8YUcCZzhqE2wzC9oLjoECYTPzG8e6ddBW3zuTutXujA7twQQj",
  "key17": "2HMKzatmZNcWtS85gz9CbQzCktujCwHJx5dCECex7EbVEtRrJ74Aca7RdJfNC3zEAEwbzbWaRz2LGa3MSDf9r23E",
  "key18": "2g6RHXQ2sxLygbiBCPXiGshfuummhyT14mRJ3WZfpugD9HVKH3Ri5yvQcNM1nB1xUYBf63r7ByakPHso9BF9hKVB",
  "key19": "5YtKKHoXMyP1E7dVnyRRViXrMZbt5AztiFLnK3Q8cpsiRnTwzE5tUtUv4gm6LVDthXwSNRMJ99rsMaqMcbxvZnMi",
  "key20": "3peKupCEJ3bftBfoQ5j7HUAnW918asTLy6V5vSYDpndP1xeohbBtn8JqqpQMCnVofLdXvYycFkBjyK2Nq25Uuk58",
  "key21": "2JSJSrmGFyBX7VgStprRzysJ7exoLzvDSZ5BzewUFw1oHKeYeQhLj3Lj4tcJxQdc56GfarqBQp3pv9LHAj7mV5tK",
  "key22": "KEhn3taeZEebsvHE5aco2T72gJNUsVrJgbRaX95LZDYLPZ41Dd2sbG3MTxgizLkwuMyGm6TFbewXLobJyb1GKg4",
  "key23": "5pNbWGidjxYfynPTVdhstbQUoHUV1wrTc6sNbaAQ5F8fPGT99VMNhP9t6Pk8SY68AGACzcM8iAZAMNd767yhFidY",
  "key24": "2PgV3ShZks5X3P6MJDD3yBmRaWLNSDSH2TndhPzGaoUtWgCNDs7StcBqonTfv7oyKNw53RphXtnhpYaWZtEvZYS2",
  "key25": "2JoAxfccuQvPfhiAeUR3VK8n2a5wjDJQxBnVpAMh7LBmijvLWNJhX7uYPNMEQEPVQBQ1BW1cdqTXCpuEaJyZi7b5",
  "key26": "JE5BPwWXu9EZDrcwTjxaa9gHkgSjZLfz9JQDKRU4ajG1c7Bw3eEcYYNGNUwJAJyeXR1xHDKneEVzG4J6858HNji",
  "key27": "7vTdZacxuLvpezQPV1svZKRzXUFuJDwEnGSVefHpKLYo8bVDdMSMRXsvsJziiws1i8sDpPCxsicKW4pQ4uoPd5o",
  "key28": "3cDTiucCVAgBBKH9Q53NzyZJ9WDyDhFjAZQi64VoxwGHN7EQxS8BYKWeHSC3LAaaxaMnK2ciY9zh7rfXxUrt4yLi",
  "key29": "2sxuifNZYYvp9hSRGhHS9TUJP5h81SWftU5DCDgcGhGRgQf4PqrzYwQGK11Pn6H3dxMZ7Q9xZMZWHx6uHdPk9PJo",
  "key30": "2sRbhfW483MS3dEFMNRPz8aBcxBrUWGAjhXVqQQJP6a8JwQWpo52ACf3DkNUY6tt6EmwRqYLtF9ctConkJpwRmgt",
  "key31": "WPALrtonNVvwzekkStzo4E1fCwTuZw1VjtUckzWy4P38wfidMTt6w7rxCrNBVv7tCfsptueRDh84T38obaivq7T",
  "key32": "2ZF5GgYe8QuLmM8EYYkkHrpzKUrU6QK3xTD4AmcG5CUTb4naQoo4CnGu53TiHztUP1E4vneS55ERZF9L5iAgNdkm",
  "key33": "4jghStjGScqghhhM3UzKuw68eSCK7n8MDsD8dTVj4fBoK5KH68QfVUo2Fs75NaAKuNkN1oiBWatpsS9KQfSmZhtU",
  "key34": "8Pjcs1zQKEX5ZSNQ9q5Wucjkzdwh777mhvjKc2hM3JqrjGm5669KS5QTRWuFoGJEQyT8gGt1fMibmDHAikTZJAQ",
  "key35": "YtFdKLxq8W1pxzpTSuKCtZjFLMNCkBTYKrdjH5WPrQ1zAxEdrjvTSTfQ52qCUEswmACqLo19ev11FicCUKMdFsp"
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
