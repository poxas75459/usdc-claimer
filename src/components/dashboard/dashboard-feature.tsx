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
    "3wns2mRiwiUGPVRGLuk422bCqKWwnfwX5r5RnG8Fa3HVMr2RWrikYBwxNS3oR51mwaG7PXBNWqSS36eLw1tKPz7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HLKrMnjiZZ5n7wrhp5HArJpLojT9AXTi92qmHgoxhbbD5nbmWBuR3WS7VjuARxd1s4tESTZudvj1bbquc7vDHyZ",
  "key1": "2cRJJHgv1epgCnMwVNL4dPac3fsSBGRHyeZXska33L2RJaffmnfEEwPbrCrSrLfVAVY8qdFbPMSkGPaAxN9Saa4p",
  "key2": "2Hh76c2BpNeyzpJHSmSB8KwxFvwZfzwEA6HgUoj51S5ZdUDaNzoZHNjaWXXvyK1k1M4dRhWHjB37xmRandEcqCur",
  "key3": "66DrfxnC3h4MnWeHTpEFmfMXnVGAKzDNZbFmaUPqsem27AeBTo1vCu8XXYYbfyxwxjVyR5UZ7t5D1uQBVAZQnos8",
  "key4": "4qhcahE8N8eM1XLGaAFSqT1kWedbsPwGSKnPGt4tYwNW3kAyBoxzqCVgKTzhrMbcFioYzK2YTebevfUP4ctfjcdo",
  "key5": "3jQr3a7A4L9Q9iaAWMQ22r7P8itqJJ7YGxCZLrbKXPHk9f6YbZJK5PW9pc9K7Af4VXqZdMBu4hS7VcuHyMyXosxj",
  "key6": "52yjJdgWDcdZaNewMsxp8tA75TRxRsUJJ8mmep4qQDzBUs5ojfLEwqdjPWAYNp2kXn5pZpV7Z4BWvymgVxbiinEt",
  "key7": "CysHjzR8A6dGFAaFUEFLaiaUTcCbymqrmKcyENg5cwdQtNEa1dNk5cVhEgNVYx5j11zowWUVGb5cfyCFthVM12N",
  "key8": "2X4LQ56XE6dLovfKUuR1YZScNyKfY6fgdSKKHgYDSwjE4gnC76gjvzMSp8R9i2SgcEQhbL6wEudeTjeEMcJUw8tq",
  "key9": "dLyicGc8JHGALbMzGM6sx4STfcjDj9jLmH5xLzoX35ECATEB8tzLh4geujefycaYd2keW9Vf4222TtAbtQwegw4",
  "key10": "48a8eVQ6ktettgQWUSNA4YSTgSGtacZ8Bh5Jw1ESpFNT2q2yBZmQKmJfAZhrMybeaGeVuiuWW1P9ay4yh5ikHSfB",
  "key11": "45gf34fYx4PjLPpofeGS1yXhYpg7BE3DTAWxYsemSR5T7KNDNNzMz1LPC172J2RBc8z1znAaNuvpcSrhxfLtADVW",
  "key12": "3AvZNTcpzSp4ocyNhjLdAttW4ztbPgrwUHRKszeLyDVrQRA4v2Mtp8b2mPeLtDxEsBJ8vKPGSgPCHnz2UQMzLrHN",
  "key13": "3vxhBydjJDYeZCbWd6mT5setPnYs4D1UAxU5mvyJ9ZRdyAPFQkETHHMaxQmqHdx4EBBy2Jm9ZXWYpmWQkxX6APjj",
  "key14": "15WGqKvCBAvFn2wAY1EPijXgmLXAAsT85TaSxwCU5vjskDfj6LyDSe6NJyXwj4gf2c2RnzZPm19KkcLNJgy3N7j",
  "key15": "xdqEFwLgXxnFvV6eGem2cgb6R3uZbpHr5tgSVHCL6C4uokARpvLkxAAwrLKjmju6eQNBwtDA6ZHR595SGMNC6zx",
  "key16": "5Jdj3zpZR1Lr7jDPGvkhsizdgoyRdGpYx6U3CkyzDgmAu1FvnpV49xA1ji815Z8QsU857qsWiXsTEkzSPRuVu8r1",
  "key17": "3hZhu88sM9rdw7YeKUV66jQBGHmDTq18Lh2rMcm8chUUeNGo1wYK5K74ybTws1fhConuxcDTbSMavzNuk3PEjeQ1",
  "key18": "qv5duwSdL3nUYKQhcwuRHZt1isUAeELt9oqYqWttrbMy9Px6zz2aR71fFbYbeox37XfBtu3PyUCR5FHGKD41RWV",
  "key19": "pEnuf1PSuAhN7F5hndEgPC1yB2m1SJkZaKgz3m7A3361xEKnodTT59whQW5mNJDQECUuXybeCNNM6p9QQQXua3M",
  "key20": "21t7ARuVGNAwQcGSFPk9UCFwaqLGf8Gnn6LJS3EmSKGZku6byxAqA1ysS7PaisJUNMabvQUV27qWFB6dKVnGfBFh",
  "key21": "5iJELftnarNKniWcdqrp3dvWZ7wywFDBi7w1Tg8Ti3Y1QHmp8on7GGhhzLvbA8jXMNSnppVSuwS2gBQahc7MgV81",
  "key22": "TxsLp8EN9xJa2eAuujDF2BHMihZ9o9dZHZyhW7ZAQhv49My2SxNetiSZxALaSL5HjsLi2cuXRKaqSkZq4UMXmrK",
  "key23": "5iNvmHYRtd7VfzggwgfMPQBX2J553T2tio8kvsDaVELg1t9VY335HXLLjyukDq9WaudXpQP3wn6jD5dwvXbCd5gw",
  "key24": "jeFkU1tv9UE932PmneE8ALDF9SX1kJE89SdcPo1jwz9ixsCZaV3aLUBEdoroLLHPLephR528xBz5Ma9YoskSw9w",
  "key25": "5NWQGCysrcdgcP6GJS5hYmwHQvsBqrR9kCCrgZuSkAvMS988JyQoi6TFHu4PC9UnGkSZawi2vcegsGp64zq8wb3k",
  "key26": "53582KPEP9Hg8D2euW1juqajFasvDsQ3B7W4LMNuJeYiWt48XEVDtMCXc6kx96xVi91PzfAPLXaoyL6jJsdenM6y",
  "key27": "3uSBQ554FzPJVkvmqLLQecAq9Z6Wq6nLU82mNgVJ5YTxGQdFLeokQo1HjuXLcM52BaANWNLGJuTJRP3xWD8PsYzB",
  "key28": "5RWrY3hA6EbcvdGJNAE4LUhNdtC9cMSRs8zstazBPDu6eLwyecvkwUgKMB5kJ9JqkG7K2uWS9DtEoehPTwjSJWS3",
  "key29": "p7m4bXwn11eWZ6y9XEnYSCK1Fm3VT6NzpkRMtrwVPecAfTxwVffCqPHkaANEy3Mb9kzMKmmiKfe4S4C5ErC3VvA",
  "key30": "3jsdV5gg3nqYohQ6sw4t6Vxxq5AJ1Yqpt8ofgjf2UbHwrVCud5NUkzJgQqLZYLXfwXQqFgP7BvmToH9ChpawQyZn",
  "key31": "2w7DZTScPqwgyZGtn6vmdkqjbDPexj3G5rohL7gXdV8cgni9QWMP85Jk85xRNS7MjGpgcjmgBaeULWY6QLNtnNYj",
  "key32": "56M16Zwr8TL2s7GsWYpUMkziDUPqcTSouCftLg6FAdrttSZwBcbSMSArRZtMqPPCv7M8w6YNVZa8ZbD4JaqABjkm",
  "key33": "fGavAW5cK5MuGkymzLaEhkZYqAtyDZ8b1bayvHfCCmf8ZQyMg1L9XbfNVxMMxArKASPMuqYnPTS54ZL9xXKkBjb",
  "key34": "3CzUnNQhmnwv7VzekG8KNno6rvZvhqq2EtQ9Z2R35i2p7REiqgGruG73WqWm8pLc8d3uN5Q4JPn4tWqizXfW6HHj",
  "key35": "5A2vax6BpLjEvAPi3zWNZHQmDZQvHmSMxgHLry19zio11a8v3wqHAZ6TbPwvia91K5JkKBX56udZuZdbZwdN3PqF",
  "key36": "4PzjY9prr2zpmhvqWXbZx9Egg19sATqPv9QyCEB5PDWXGuk2JaMzuPvoEeg1CvdfNfR7YRcPcM5jrDP3w7D436rN"
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
