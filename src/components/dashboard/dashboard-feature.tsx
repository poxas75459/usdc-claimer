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
    "2joo7r29bTwqdAD1Vg3B3K7uCd9Bn52DBNjkuZAUQDGwnhHZFAqh2iPEAsNyGAWRYuRRi9oEjJ23S1uoP3HjhZMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DYpVoW4AayKgaBGYZoET2eXfdgLpUjGMQvGaHhPYsy9ZXmtok9kK9U9es5wg6xXEHpxwwGMzsRuyntGhzDY4tzA",
  "key1": "3ms46GaPb5YRwPZke85WU157KwpterRDW6K3PJSPvv91ndoWC7KNRC1boL4sF9hmGj56rM3aPgpF3tguesq6XqJg",
  "key2": "wV6VKm7t11B1xawBDgQABrT4bhtvmMxdvVtK1vSJbmmTzbFPWiLVruQkfFe1uvaiShnmdoNJFDZmLuS3EM3rvcq",
  "key3": "62JdtqUf2XRMuoR8uNNLnVL1jqnNwGwdGaEFU3RqJSv7jP37oPje8wEMoNWwZ1ehvXS9SRHyZEqMLcEKKxBd6wvb",
  "key4": "5RdFhPrX64f6j1sxef3S37kdyo6bmTpPqp6fc6MYxd3aYZoTjfsSE5UBhBjndJMjEHa44767dHHbUxPJYcm3MjKR",
  "key5": "5VPwkQtBXxE7Km2vTbgGSYkjnux5ubvrE7iZDTYQYUkxdUJmqJKRWujob94GSpdM3ssWGqCkinTQPhqyKnZ42VBD",
  "key6": "2jy46krvdr5QkWy5Qd5gpNQLdazs2zA4YMJtppGHjaV6Bomtgty2caVfyT3AJKxJXdN1g7dCJohgwpZV1M2vR1Ar",
  "key7": "2Qjcq8SkgMRmXEH6HJwLg7eqWn1xQeWGNJ7WFKRhTVLrtVRBMh2rneutJfoMaDW17LJ6Z6BpNcjBpUzbDGrESj3M",
  "key8": "5RAdnDx97tzVtVmJf9CSfzevowDUU2zvH7tmyyDCRtoZCt7AW9uCnmmqGDCaCxpk4hMxjnQPcxE3SVHyJMUgDdgB",
  "key9": "4ARe6yS9NqP7m4tUNXADpX2XSBQuFKNA97wSWSWVUPd7KEtKkVXVLnjY4ZAeKdhVcfg7PcG1qeJVy5vqDhX2NynW",
  "key10": "51izrMPrn9BzuKjK2b4ZN3gPTmrc1fyo5kvodrBRafx3yHeCYv9L1c8whR7mkVmZDLyhBKsBBP6Vg6Vu1JSdzmMd",
  "key11": "5bSPTQLhYrsotrw6kTPpX4g8b7mU6XRNTr5Ni7SzWhCYXDHXgE6RaRjq7Nbhteyn8oMs8i3Jsz6kkAGjvCcbqY2k",
  "key12": "527x1vpxw7RbrmZzgCFVd629FbxLZe29sX3yXx3CtgiLDC671SEcQPB2v3drK3u6wjBwRTSPw1GN8CeaEm8WRBrD",
  "key13": "5tqLDcyYhCsQoFgGHRY6XyRciUtrC1T5A1PamLpSxBWjJtNmLVc9oX2cZ2RqS6RsQKYNzbKJAGRs6PBVjptCgxXa",
  "key14": "3zP5QVjGKxtbGbTEDbPwxFPNphP5G61cZnwnBT56n13ZNvDHhuc57KFNCMPV7wq2ZRFFYLJUTcAu2joRshXR1h4X",
  "key15": "4u4hoNRF8ssUyQfb1ygLySMGyXUzFqXPKujUXXHf2vDBAuHmMmmLXpkn3wZwh8QtaknzdZxuRv6iqsh6ZiNH3Rd3",
  "key16": "3tk9nvEDeQrJ3bXTFRGg6SQaqZuVVT6m39HdZFsn922zBVTHUNpBHQTwu4coBWBTjqbN4ZVyF2YF6SmqY4u3Wx3b",
  "key17": "4vcw5nRZTaMR6Gq5Pxx67H2TMn7MSDfGjsDUufQHBbnRqfa27WW76RJBwLBdTtsiKkG2stmokGZrmH7smEiFXnPR",
  "key18": "2SUfbcS85QsCb7xrhPJvyVfeycKxtADkp39EpH4CYzeC36JzJpSaqkUGm53P6i7h8KPxCZ6LSTufi9AHH27s6seb",
  "key19": "5hC2ZfDyUwf2vmMvWVaAkChB3zr6y5ehZjQfVaFqBzW1FRXtyuySNbknMsNcbWxh6yb9S2U3abA1bsdjxrbGVJs7",
  "key20": "5BCKWHWz26DqcYfbdzuhY5PyUX94Da8C97sCoYh29KYErZrSAuGv9mkhWn4Rb8QuFKdoZkoT2k1ZBm3MsrHZtt5X",
  "key21": "3yLUFJfznt1WHaDLUXGXHc683saH3TTiLsik1LZDx8dsSGj2wjagZfwYHrtoLSPmpMkykeY1LZQyHidyzkDeqxxN",
  "key22": "3HFArRQ45wtbmnERuaK8W1PZUGUxokjCGkp6hp5RnnJcuf1JCkNePsJ4nkFLYL2ThrnFDyZcKg9yQYqtm28R4byx",
  "key23": "4yujVKNd7onfVGCGsx6xThkxnzfNkyQdy3SYDSFPi7xS8pY7b5H5D1v8PAoRgyjzYKShaPyBacwiS7mvvjHDhek4",
  "key24": "5Vi2j4nmUdfTBrJqvSgBhfDgRD4x4P8aehpVrxjHcW7Pos3fFaetRHwhcD6uDaHoKaAH7YupHRTinQUcVaCbc5ab",
  "key25": "tLUqCsfas71JS5btWsMEXAmahzCmSwvNs8wDwycFohF7rXLx7LmsiysSZbJD4KpHiYN6Er6ybg9dGU2qr6q6t4g",
  "key26": "512kkgEGKkCv5tWQTQy6BdMCghujFMFqHNEVMjpAp2wrNRFwgGRyWJJ21Appxu6BygWr9ZPpgYJ32aNXRQFPWs73",
  "key27": "2QSiFpxvn2RBWWfnKhQAR1q8eR7dCf6NT9XGCP2UMVxZDSkepvDVxKGn24NV186GJYqW7r35SYpuc37DYqFK5WsT",
  "key28": "5ks26qKvGkYYuuse6QzRFW8fWX3F9Ni9z4s77CfoNTM8sk6ahkxnP8YiKrRiVKyhjWZ59kXKRZgShzGYykFADJRv",
  "key29": "3fPJcksfvporyYLvskGLcmfqJuVziHXunbZonCs7AiFSWvV1ajZHAzmFAdasv2J1c3QmcmSQ8kf4axu7Ws8TnDWp",
  "key30": "3x3XWR2fskGhzDRC6hE69SJyoRNoGMEuxvEAcuc3ikHioC2k4e9jZuJYBX5KMtzQoLuBpdNC5EAiysE4kmJSRG5A",
  "key31": "4Li7sH525WQPwwXotKDi2UwBTHPTsTiejNK4DM3X7gAy3UDJM6tnUdqvFmrkPFUUSRMyS6dR9nZKTrK3tUwfHoJn",
  "key32": "ESesu1iBivc6M3yzGNn3KjfcNm8eS8HFZFA3ywXXeEHQgzwxB9uYRb9kAy2Co1RrpaMHKMBpiknsJk7gKUqB77f",
  "key33": "1PnQkwq6ZW3ZRuhPHpBQbvVheWV1LgZPANmmhCB24LfUHF7uhQ5Hve6gQQtzponQU21rfhxHqojeGACUwHtnDf"
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
