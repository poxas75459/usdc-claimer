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
    "4eGfof9TnvRBn6yjoEvwAq3xHLhZzBmTSnRqgmCSvM6CZH89kaRZrraK1nYptFxYeZZUQ7d6NLmfCnxXMXsPCg9E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "312jcyRY7aj9tdShAW8LqqFEvuAoGSG3PUvfWFmAphpanZ9GHq2AihtMCJ4bYXgswMnmAHidvn6uageKyjXE2Ygf",
  "key1": "43wV2s3P12ietL9LWhsvPhEEc6kLN7DVxqgkRYRTyW7AvwJALroUiQdprg4qWrTcNP9a9BKjitVcWiS3h3rdJQSo",
  "key2": "35QPj6hKmKZvtTzSepHb3eWEecoFztcG3U3swUUPEyx93voCqBZ5Vq1Ki67xyqDZ6VHHeuXVPhQRquq7Ns7wL6TF",
  "key3": "2DiPgjdwmkdtijkPQDfANvedXouvxSXqVmMxoQ1Aqq8QSeqYfgpExMkbaqfST646sjsAQpgMe4NSq796Vrosv8Jj",
  "key4": "Abtk3HhUypPeao7ttFCsVAmWJEW68EY38ZUZakoCxWCcD8FHdivEdEhfvW2dLBvZktSM55QCLknhDoV9UHZG2TH",
  "key5": "2HvfSeNjMezj1dNCvr64dupXPG5vM2y8o95nBs4Mb1QwE5ACipQU6yrqPRX3N8AjbKKcAFt7h9Xiz2q1UUKaBBWq",
  "key6": "4Nh1qC3DmABA47zQgoAeXKtZM1QfWeEUceWSR99rbatjJorMPHCzgXdHSrNarxu9HdZx9HkPGE6bxrKN8BhZY1Jg",
  "key7": "roXBsGskVZmLRXBdYNxkHFutwGRMU7nvHHDoB2WLiX1SgcyCHuLG1vNwEepRxguqvig5FQkrGBhcvsxvpVCGoMp",
  "key8": "61WKT9yroeF3L1yjKXqqjY47MKrj3j9H3xPk4r8uRcVtwr67EMk3QKErxRZ6iiSYPrP6pkRibygCJhcNxSh3SykE",
  "key9": "3Ck9ziTndjk76KUphSiosYCV83kbXyzBC6R6REqyfG1VHBdqgYHVZA2JKMFjLpajLNLWrGDTxDUwLN6mz3ecjhLB",
  "key10": "AxiDxnmkYKvvmnR8VhixpqKsoLkQX8RcGk3CUnoPJRVZGWQQFRGHux83GMRCoD9zPhV4HqaqHaxqPtwhBNyU8UL",
  "key11": "3wRSP6LVNoWmFi73eQYTLWFv7ysuELf7y66VCDxA9GwTykZaYiYSQxbBh4UJCST3tTiqKNw1WcyV4HkeRUG2f7qv",
  "key12": "45LjiQmwAaQVGiA2XMYqqmAqPn1vz2wwKMMhkddef9fvcaSsKY4buZr95SQhnGXcg14X2sbVxX6Ety7qa8scq9hk",
  "key13": "aRGttbgej8PKEvc9W4iTz2mzE5UY3fzDBFgKLUuPkdj74u8GvMBJ7jNSfunnDN959u88LFJ13DcTFW78MTKsZAH",
  "key14": "fPVaUwbeLW77xBKvXfrNQpvUXzo1m2WS7zXC6Tv1EoMTJK9fo7g8dRdjVdzKgVmA8XBqcM9W3D36xQnqnR2BLmv",
  "key15": "3eyNRZfPUjdh63MXo4vJmapf1esS2cTcC9h136f8pFPuedsZgaKGP9YGxQ6JJmKPifJ4jcqsazNUoQxLHzU3S7Tx",
  "key16": "34mqMsz267UufmA4vmWUkxvTuq3GyvBHhxwwWsPYqDCnxD7bhwNdf4sLuXJPxaroBG9q3AXjyuJuMqjXM9E1Z5Fk",
  "key17": "3aPneATKRLDXoeGKcxLEgSQFwB8zwrc2Pe3v3iyhUxXprzCELZnGoK69JZDeVNxH3VabDkp5R6Txd66jXinexaLh",
  "key18": "41gt2vgE2rs3YimsKw7gkXYeXSr62TrzD3Agb9iYMbN2ZfsvCzWebT41JXKGAgJ9PqtS8c5KAMeVgDsJq477E3u8",
  "key19": "4bqx2GnvathkUnzDG2V9mr62MX9Ewa6j2iVRqWCuso3QcSQLPQfzzTdrYt45iULGetBjUprscwALFJm46gpc8XJX",
  "key20": "64ddpJvXJcBbsACi3DpBu3vukMi85CySV2WAz5frWHKwJ1V9eFBSxYQQwET1thdLiE3eVTsPLDzNgZVXK6ChHAjG",
  "key21": "3X6JPZgaX68277NaPoqLEfSxmgZKuWdiJbkKDPF8AvkJEZos1FkezRvXZa49i1dWcXpnZPShZWCsPhJaTup1DQ22",
  "key22": "3hrKCudfXp1PbafsM3a2MmrPt9CmVcwRWWG9orximpkvucHLkrw5NJwH2SRyjaPnqJXx3fb9eg8nGYcHWsjnJzG9",
  "key23": "4GfBVi7Xvy8Qybjo6orqABKZHwAHnjB3FbghsGiV96Kmuj42UHD4tN5PseKvFEJPSiXRLyFW9mf5Xz87v1fy3yhB",
  "key24": "5CkNbecvMCP1CpWsfp8MaE5MJ21yWXK9h9zVoxkkRoPc2iXFohVacfN4QALPBxMDB12AZ9YV8YxuY6FzN7Pvvxp9",
  "key25": "CXGqdndE6ApSY84k2V9VkCjpdL7WPtTXvkNdcwgc5XjQXsKg8v78f7omKKKcctbPwsfEV2gy56n3ejaUPp5WnZc",
  "key26": "3kvqZUG5zmBDGzeX6CWcyyGKWsPheCvttf5WpeQgZ3L5pxKDGPtx3kNYGJW6m4tQcJSnvxdRW1JdZiLbLVV6XbVS",
  "key27": "5yauAN5JoJjG7yiHGbNuYPKeLtLYDZ2YVAGWouSxARaYWtwkAoHMLRZPpDjyJBSUcDUE5wXkqYHW8Ky594c6Zgsh",
  "key28": "wDydddrPPLn8B6w4hDCwajLwtRocdBX3BmYjeuysnkZzp5igcNWudgHMSGh8CBU9vhun2swKxyUAoV6764j6Ups",
  "key29": "4nRhbRrXNmCBFqR5FPTD4RUJjhtXNw1uRwY66pTrjUS7CnSEwQuZx4k2uG94t48aeGBXeuQep9izAkEMikbjxawm",
  "key30": "2HwbsXLPi6zzyUBh4nzPG7NBQ5RkN2sRvbTGgtS4ae2xi847Dm8qReYKxe7VPQsd8dq3FVGWAcynHXUC9QzARqnu",
  "key31": "35meQXeV88DQ3P3xWcZe7h8xbpRjwjkfbYbuVpm3YgM8nrGYDYU6bZVRyRALcYZoHZ5y8L1behmS57tHwJrEmfKQ",
  "key32": "2rDdZxR8aHMJJoKFgxZMixaxxSN7aaQgnCi9tc4ikHPKaTQ9gRs4tU34Zko2Co3R1Yg1LSn53m1a4quZ9pRgzyAh",
  "key33": "3tV2oZfrPvV6jpmuwUVUfDjk7NqJjaqpwdBSPmijUtodMjFyRDe31CfvLXPxGgKSMinZHjdr5uPMdzajH9jNDPUY",
  "key34": "29ACgQjRYrQ7kq7Vxgp6eRfsybjm4gnbn58DuiXJooytm4Wzs9tP7CnXF2Dri42W7kxkHvPwq655RvP4R2iA27nn",
  "key35": "3LgaVhLQ6i1ZWiVR3Z1yqetAGRqwNbiDsKmiT5Ets1X1vQKTP7bjhkSFZA3urNUUKWNa1SC2jhx8rtfJADgHbrWY",
  "key36": "2bnQoLWTSAJG5yZJ2pNPS2CyXi8TWvh85xT6t9MffmbBLvRe9GmWwz8unCMcJkaWQGt8cLZCtdzDWXgeKj57Mw5t"
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
