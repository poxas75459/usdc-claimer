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
    "3J8zWoBbxpgvQmnH9Gm1nt8Eu2YDEEYA1rTdM6u9egwRVfKjs6kBUmtzLvAZ3M4BsUrbA5TCQYCRid5MK7niGHfs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FWjXQDjdgTGwPnc6Z7pLrY7tpYPQAd8fs7oaKp4sorxkvAApEj1P2Bqk3A6SRQAZnf2LLaETyAgi1Hd7pAZMGEu",
  "key1": "XGRu9WiRTJ7z4572imjz4R6ves8P4hd651GKnAbsu7EnEpxUbhpgvKFe3tsxjQH7ywuzewdz2AqokfB2A9nS6Em",
  "key2": "n4izCUAp9nCpJg4dbzPMA3XzNmagLJzCWiySaVWNqczS7FMTtKuCPJLmiw4ofg9Y86doaVBYB7bgyEnpVLLejR4",
  "key3": "2V5inS8yTpzuE2YTdnWjBT4z7RYYgQsTN4GQD8fsyFesef3tBWaJrZXJYR4CNsXoKLmCgKqq2b2jQpx3W4i9zjir",
  "key4": "3QSFxCbEWPT6LgfkvyPi5MomWW2an2U9GeVeqobQK7Yh8Q1iAnXRyiL3rBX2wB78n3UAUZTZPBXgorESBqjM8zQv",
  "key5": "662TXmhSBoaxnp1CTiTgAYUyRpbEfELsTSZ8izK5CaLMEcK9TdnXhj5CrmVU6tZt3uYD9KAeBNZbWPHVJyrnHETE",
  "key6": "2SKeyT3tDbjpRbRW1JbRmyRyGeGYKEzQKqqFQNmfqTTBuNrfDn7T5FgyMtCxCgZ6RXox7Xo6L5h385V3pqyvPonB",
  "key7": "2Jn4wYhuSytom5THZfyYbHR1e1nvakEiicict3PyKcaWZ5LMu4wZsPQW7PdcoZdnzv3PrRdkfb6FKcomqoVRUFrM",
  "key8": "4vDxyciBQVBL5zvDb2Va6abdWfZqwZxPqdFFxijs7hvAkFh3jMoKgVdgbPVHbvCeEqc14yhckMwBbjHhuBVmB9q",
  "key9": "2fR6j3VejQC3JzyWRrc8q5cPirJz8jTPhkAoitMpQMknVf3dSpNKnirNJBcwjEx9HCU9ip71H1HVY5PCkgYmqHPR",
  "key10": "u91wt75AsTPj9scfktr5QBNjDRxM5dn94SHzGcAdvEF8Ypxo5J2T4dDGCjiJ3mTM5ZmnW1QeBL6bZYe9773te2h",
  "key11": "3tpzjjNETZbgvNaxQprbQ5PonvE36LgQjRsvxJtWbTVCjhR3iAnfj2yqzfZ6SvNgJSda8kyD5vVsFwfcrAKLiPDA",
  "key12": "X8C6VNvkZXYrLaHY8dRcjKAAYwzUDjZkmbKfgbAG3DgqnGuZ7AUm35Le8Qt87sP2e3YiTpB8pUTxumybsc9CS3E",
  "key13": "5xRynm9JbasC7FtVWZvbZkMRri28x52yCbJiNpZf2J4TfyedWJWW3U6jtSDCXtSfWLLYgPcAAc4gweTcLxbckcxh",
  "key14": "635xZgrRsKUYtKnR4rmu9YM7RsGqZs1cNBvtcJM7FMgSLVgvJAxirHrYocgbqJkJmAgBqowPLmjT3gD5vQMmQfCN",
  "key15": "5gqSD53F8JGFU5nMgHuFKdGRUBhiiYKcuJ548tRMkAzXEH7oiWJBjDG4sKaFE1rwxmfxefV1FB1mxFBFHM4n4dxS",
  "key16": "ZayE2GjMcez5nUaB2zSB2yJG5V8YBGmcM1ju6MCiUs4VsiYXoRnVcKfnCnDG2gFqL9SWwsAbFFNvXi7oJFgZ3UJ",
  "key17": "58TGDAC9bCjwt5KtL3cEgcrrJMPHoeo9B2jMrW82o2qfmiaduWZn8fFKNqxnsLnXxizQ5d6dHGkBd7w7ZSgthz9Q",
  "key18": "WzVGG12CDcm58ik1sPQ6CVBX1D2gWSUEWXZ7YA8CqzUnzb49EsTBZR2P2JRCdXTkVZvnTZAbid5oY5wRpsofApN",
  "key19": "62UJ2XZJ9DQBaiYuYw95x11NB5paMMpDxtFMV8eU4L9zCpTaRH5YDQJ39NamiTNFrNHuA4FFWdneKo2BT37Est53",
  "key20": "5sCooipFfGcPUUut1HGvDaYD1yLpr8DZJDqYdGJgUkxfMtv3vsJAUheDTmpjXRNpULL3fMESbsSemcxEGK6V3b2D",
  "key21": "3HvK3NuKgemRLGQu4kkxsfv82yqRpEBVWK8MUb8ZRFhoCmxPeJD7aa9kZeGeCcHimnHELUV1f4tGA43ZnCE5GJ7i",
  "key22": "2AYswFx7LhYkh1Ai9zJQprbAXhTCfXXMMnYedgWSHXHYZggSpj9NAFp5EvKooW7tSV9W81SiJhWsmu9WKJpz7m1j",
  "key23": "2ckSArLpJN9LHyKYJP3cY79jqqAzGhskFXwdM2Y4TPbyneD1wnHANzXJiaKBa8zQLnivtLyGur4W33CbeyF9oAmu",
  "key24": "4X8Xy2kTNVGYEwU72hANLhvK2tco1HspCPjZPkwUWqc29m5J3FRxLr3bkKk4X3oX5KSi3i7U4tKVchEmnK8MSaRb",
  "key25": "2MdAHPoHUuFuxmiTE5cDVMtnZ3PDDZEVp4uePzjJVtvCW2jS8KnktTcem3tKvqdkdmn7Cz3rWck7KqTXa4mbqyei",
  "key26": "4okqVrHyaPbYHD1R3MwonwdcPEH67H8HP1bb2ZzjbANgWFH2ahSUAcPSWCRVxPbL7eRYBwKLQLNd6neNYqdyQNyJ",
  "key27": "deT87xAiXfVPW4wjRtHBSrHpCRunKx2RnKxwsUfbUfvAAtFm9y2XVC22FSTGA88QAaepHCPe1w8nU3eBqimaRp7",
  "key28": "2T7Ei4QEhmFc2ekm28tS8RKQCDSWPmMaqaUrx7WKNvGPdRv5374RLUV9CJ38svVJjqAAyzUvpoUtjn7tcsyMXBwU",
  "key29": "3tDrbNBXodwozUNqTaHz99q21SGfyBfvpqbteMqD3UDkWs2tdy94K7hX6rRVD8eZrwZkc5BF1ume4EHt6hZ4GFZE",
  "key30": "2fTC4fxN3vsfpnc2aFxzvFFrZETkrkPMNaTKrG3WGZdzc8Jkp3X5AqwRKs9dtzxeBLLSf71P9ojVSSW84qpj1HLf",
  "key31": "2bxe9jWNjWomKpEbRRsK6AGVZTaWzyJxwFqnFGuqnAUDUxfU7H7ZU9fXidaA16jkP9N6Rn1ZKjFoNXistJpxyNsV",
  "key32": "YsTGnJgqQKokjXFP1MicBaVhAFFJ9PRoisxUJoRE3v1Cm9T5DFZWCarXjAEGEruSyyoRMTGkmAYLmUQsn7zh2NV",
  "key33": "5QjDb3FsJTSWwoS6Fw7YVxaknq67dRcEr851E9fdzwt2xy55HnSD9or4Dsj4qjyKEDsMe1tUDNiDUJwhFUuCRt2m",
  "key34": "5VJbT6Y4oKAapSDqLNJFyWmf5QbWPxbQqgrETfjpdvfVF13u1EVnzevnS2wG73wMgDpKcBiay3cS8eAc3q8VJB9r",
  "key35": "2EVCmx1AEHg9AbCCgzXLXaHapD9VZGWrRhZCtRpfR6QWuqCfcPsjUQofpbjqAhfCBTpN5HsXe96Wk7Bo4ZpwS5PY",
  "key36": "Y4TnTN7uf4c2m4684ujQNDQqhX8wye8fwniawPN85TdJ2idGCcRqsEz3Q1V2AB3Nm1vquyYATYEdrKYVXrucnR4",
  "key37": "3n9kB6HT6WSnaq4FXy8qDVRjG3Ys8WZXTr2txLFHHtXX3Y9244Zdvu7TYL24LEdt7WHYWHP6XroUjLN5D73HGZce",
  "key38": "2Hyyns2N2xCSWpaMqrWWDdWhXMnLysyJyqyyMdkkr1DFF6gk8jCuDDxnoLLyrVSvCZLZ36iUfqXnBhKbBCgBkkrN",
  "key39": "5QJmfewof2RKmWiPPneze8rSAf6fKUwRcERXfwt3eo233JqC8Pi9bsLjrbYMCbb31yUePai3V7jg8uoe7xmGQ3Eg",
  "key40": "6xpYgeweQp6Q7MNFYMWNpgSwWH61rkHP4faxFAyHAwKyEFwE2cLRTmSVqKU5oF9we1bgmhgqXFtLP1etrSuLPqP",
  "key41": "2oRAgfsregqwDFnpHsDUCmPgBXvo3KRwMAKr3V9464TU1DxCXzqciuSqAEHbdP7VxYf5ntgedQa27CgD25u3BuiB",
  "key42": "37XH56ipTSzgRRaTrxLVpHXHakN1Co6NXuF4JHwLLbz4Rm7j3sFkXQ7cLSC8UGwZcJPUHtYUPhTrwpjKjZ1PGhVF",
  "key43": "2AudhbGGUdmXED8iWVsJ5ZC4pzk5mEKL1gXwwFaD22VAfK9ziggJYUXdJD8agbK57av9KV1s4sgGA6oVzAcLsqto",
  "key44": "jjAyu1VAakyt1AmFefwW8i4MUM31Lh6sqYsWchTRHStmeQjXFqgrTEuFqgdkk2RcKwWziq3sGCVBYnDFYYWX54q"
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
