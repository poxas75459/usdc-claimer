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
    "jzJovc5XkCmV28rpJ3MYS1sHVazJzE6pKiQ4ZFEsaY2DgGBWL1Jcohbq1AzZGEadtB7kXqjqcjVLg5yPB8mmvGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "218JPapNR4wPXSv1jdb5y3qQu4WfxyhXYFpZuFrpfBEbjUcksBx3PRUmZW2H5tCXBkujczChYfbBLji7yhCL4JGT",
  "key1": "2nLN6EBVxuQLLiS5ScFgV1yrn6EahFECa342VWyDPLTifw219ZWDc2Nbf91Z9zVMvMjrMstRGaaxVCmfrRH22iXS",
  "key2": "3Ptmh7vbp5GATkU8e5ezGBU9vFy8ntnX9XfnukkB92GZ993pZMqovTWCMduG97jCoMAZcdvCQbdr9BD96vkN45ak",
  "key3": "3aWq7KCxw3qSyb9wmGCvZKDxeTQMvhHoqisP5Z9LVy9VENK5P4e1Y7fU2MhbhT5oW1im7BsXjeVbjoRWZgxauVgx",
  "key4": "4pd74v5hgFWQimF7131xwz121fby5dWCETpUHPafcdzdnw7YgQBbqAckWQiGMxwTXRM2UR7sM9kzULc9Tig7iZUL",
  "key5": "pRPAKwNFFXNVhJHQmyvYdtc1qPpn3N2fQRdXaRUWW8CwwC714VqgDhyYjgRH8ePBS8Rq66fPUQJ9ny8rxvAJvKc",
  "key6": "2SmaT6X5L486GUEEo5CNtqDJAhNqjp4RKcyepGbhNVBYKRhCtbX4naVduZK1mXrPPFbJKBaHYmBdJXAchvKuJo6D",
  "key7": "2ARwmc1iND16iYsSzFLz78qau8Xf6hVpNKyh8dB1uZ8iiTrmMpdcR2N254JQpNjxwcGDqKr2SBpWmUw9n1rkSRAX",
  "key8": "49zuzSx2VcMVuqTxFcAY15Lk33s3tyo5G9iJqtBP9riNmrmKmW4J3HXj2bPxcyDnLYcUeGgPf3MqKG2eLLh6xywU",
  "key9": "2dj5sJL1WGrmNqLHVY1Gove5zkoYNgE5qPojp53zzNR1jqABFncuYsA12RQWuBKAvc9gEFXBE3w446DWqdxHPqEi",
  "key10": "28BbSywLhiVX4aE2RyzH2Dkp1TAzNjokm6SvudXKC6YvNPYVfZmSA8fqgRChvnzQbPoV3CD7iSWzhGTdPTDLq6ne",
  "key11": "5JB3Xper4GLeQRvJCTZERepgfeBN3s4Sw7no5TFAxCj8Cj7XX5ozr9zwp9HRuEt3z6UA3g4u12XoxqLKpqw61Cit",
  "key12": "5kxPMkMXgxrGkELsT7WYn4UuhUcgCPuz1hx7UNS2mNLbPc3r7KLWMUCymoNx2cPny18cFhaCzox6oN2FKrmAj99F",
  "key13": "3AVcCf2C7qbDddHj855gcs4jkteKc2vb6RL5CqrTUNd7Rc1STqJQwyW2DUhdZi7u25bGokx8YPkSBM5LNn1PwjKp",
  "key14": "2uPVJpHzYNSi8vQvH9rBoDCmgCD5MNRoHpbW7SKg8giSoALWeCAUSfzT9Rmr36NLcogshPm1Pq8iqinMq1VHNEG1",
  "key15": "29wQNrn7LFGHfPirf1YSDqUaDuYfEwV8ytmiWMTkyDhm6mPhCoodLph1ocAU7pZGarZUc2TNfbS8fgrizG1H6ATM",
  "key16": "26jPfeopUU3zbHp4Hmud92kSKkF2X6zeofKrfyK11ZC69HdJ38W9jWyDzoVZfvqJ7XjZisv8JCPQWzHgBF1SFzPv",
  "key17": "2ZECP4XunwqFDbXb1dEyWHqr94ymQV8qEVVVoUiiewsfQBN3LWP8o5HvtpN3AJZjcFunXNPzHFjTS3WquVrQthJp",
  "key18": "cJ75JYqaRcKPN1ciWYZgjraemZqTYeMYv6Eep5MrzXFgXohs3uT66XscT1VRCZuPxSXLfxQpUVfoBHXciprjPrN",
  "key19": "8kHMy1Hev3J7ZakNHdcPoe97QosEqU9phhWk7vFPua3uvnNgHwdbkbfiatiEvfRSWRGB9gd92Vd7STYkXheygAN",
  "key20": "xgiTjaE9YVscQDhYwFuNeyfVao6D2Nvi32epDHpEifdrRhUy1xBBmz6iQ32dFiaQWYTcMqygxGhxTTxQFd2qrf5",
  "key21": "2HUgXXx8sE4AxzhfUEuTuBUru3apGWNRTno3u1mjpzuw1vNJ8r76rFv9nrPaotguoWgFBAd83SBMiQKK6JkzhzDJ",
  "key22": "2Wo1UeeLgmGh8NsiQDsy9xBTRDWgzSiwCWAsbXUQhWndATstULLVqQpw8ZwY7DsBM8PbyrCjGMJAiBHNCr5KNkbq",
  "key23": "5kULXvGaZqhPcL5W5Gxz1sc1ZBWpW9krTC7miybxXuwbe1kcarYvPwa8v3X7ZrhcH7wvx1bjM8LVvJDWJMy3ZFea",
  "key24": "aCihEa1pVfgEbMrnz5CRxBCM3XLRohQSnx6NwxG4bPB7FqGWUMyvFj5oEzQk8JiJcCkbUk9bc39muwLezCC6TJZ",
  "key25": "5yDismWK8ynRK2xPoEQTQ2TpX7ZWP6NAmKYn6y5TSKdMBZypjkDN143w4y1qwJSaQJutNuayNbrKkoGykwREm1mL",
  "key26": "3DyK5KoxvGtw7J3wzvYu8CytN8agZfAnqSkspnjJXe2aC9yQTdB64eECG8trUm3isUZoajQr697GmVSN7uCJVLr9",
  "key27": "2VGP73UkaTiV9bApKVz3pN1uH6cCMbcJeESMq13FvbPMQmRJcfpG7DPGfGPmVrr6S1tnhGe6MWQyN1vASTDqC7nU",
  "key28": "2wp766jHR7PJnmEuDedZK3waRVBskE8R49xFEqd7AYwpspUSisY97D7nZFPFTDquB6rkdgYL9NVTd4LVXmc5xFFe",
  "key29": "5cLK7XFwHYT5yrnWwYkAKSszyGi2W11wmM33RjiyRdreTspoDomsSBZV6o6kuqwhXDGZzrCWnerHsRz1h34jk4Fs",
  "key30": "2aWV7CE3g7nQso3nzKu9h6sALZ6vavZ8zdNREFikbcuRTtRvMoRwoo6suNfajQQAcoPReFNbpXfiovGBNCurF847",
  "key31": "eACuhDzGFxmwXLQTxkE2w8i1FinPZhXYe1AG6F3ecwFdqLuGPZydd4VAgp1XdpTMAZTuZVUjJrVeFVMPUcXMMkQ",
  "key32": "x4YdrmWdzaWKt3awsTMSf7EhvG2HceQ8f35kXHNAjUrLu5GBpX1pQ8QQdNW6St2nF6R1sHxNA75MBThuwZoxBEM",
  "key33": "2HY9pdFaD8KoVEj5MqKSmxtXsUcSMjbMZcKu68k12vQ5RvbnEr4YSC7nTrWfz7cyPs4FUYMKzx3owAZrXWrkUPFT",
  "key34": "5e4vaB6VzFm9yj6sNdZQnx1r1oHJ6ntTPdqMyHbJDu4EtdB5mn6UYeUhobY1Nd4ZsMUX3JQ1JAUY8jRyd68js6ho"
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
