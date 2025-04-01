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
    "dmuriJhDWq8vk3KThE9oHpbEUfaZH9Apa5GfBD6LmXiQMT1shmYW1yQRYbFytg2ExEzUpCqT5QMcL6PJkRS8sT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c7LJabZn6eSRXM6zjiuRLLfWPPYRqRUxmWkhxHH1dnnJ4PrR23jKz58Lq5LfViQD8Jn7RdYF2ohg3yVbJHeCYBc",
  "key1": "2e9QpBcDgeGC6CyJcNCJDLKGkkrCYnhYtTk2m3Ei7XegmHUTM4UgdUZpqiWVwVSk6ZVaxdiPPDwTGSnT7t9B2Gz5",
  "key2": "333biBqdF61rdr5YbgiYaM97RXMNgsqpFgdtfUL8McXiZpbxbUcFadY3fPQ645CWfXAqw2keBkM2oWUXV5oSiM7u",
  "key3": "2BcQ5wULhF8YYG6JoPtHX62PeWEh8Ws8TvmB8BJjASUqT9x4Z4Kkmpz3d1KJhS6M1Tn6LbvYgV6cj4C1TcxoQKF9",
  "key4": "3rchKcMHa8ZF9AjNpkEQcZgKVKy8RhGgUzYNB9geBMDjsYKUaUfH736WsYqoo2PiQzQSBBgPW21uCJPFyHMJvG3e",
  "key5": "2bAYhMFSgBrLPQyj8Fhh2SyCNTPeioPiitPQZv2te3mTym4Hk72K74Qg3yKkRFpDoBr9GxSD52KjQiTBLUHk5CQG",
  "key6": "6oFKuVKd1niqMaCEVY8az2Ts1wpZqdUuY6PGzEcKPMTnqpKjuiUyLwzcqArKeyuoLJ2gn5BnyxNfCTEJU5Eh13X",
  "key7": "2LbSieQ5WrJPNxLAn9cCHHr4qVVwdzDgyC8s2FM89hhhUzhPrsCd45FNUKAqd1iCfkJ8dVtW9N6WX3WzfKkRZYiB",
  "key8": "3Lyj9VNmPKcWQghyLTmfW53nKRiqtv5PC2sbo5M4CAoRkEMKUG7r1WYCKAtmDGF1MzECVkFGLsFauPwvK8m3uNGQ",
  "key9": "k89iUkEeLxdGnpkQVARXAxYRtCCezCT9jm1E2ja1247aMpDsG3iYoUBL3d3vpv2azL1L9mBLcFhYcsKQDzSVANb",
  "key10": "5bKans8cG5jHnBqd4dandFpnJtccP9jPFfj2hZhEEahhijpBdM5isyG2WXgeq8KmKc8skDmYCkBVvxrmPvBnPjpS",
  "key11": "2pGSx32FAQLf7oNrp7LREfqVQKHo2qbombfkgZBCRiZJMUTSpjvsfpx57nxDUJYqUF6oP6UaRieZAJ4zwtNabQMw",
  "key12": "5eRsaGAGdtC4pGQsp5KSpge2st37xWkNUNHdZWjQ9tyJejbG2vB4hau7y99kdxoDT4G99653zyXtT7EVFhg6qZmr",
  "key13": "5Dek4idmjq1JUBNHJRj242dRNsfkWVDfektunaBuHmf6GwZgD65JATntyWUt1UGjXcAGUMGGL47wyKnmgPg8ezfu",
  "key14": "368d5Dkee2sZg15ZtwQAyuLfdtoB3dUMc8nJdcNECEL18YJ7hADvi3cdy1wHhxdNUyuxsCSPYFEAANMpiLgQr617",
  "key15": "3Woqv1KrRMUk47d57CW3bCkmp6ksxec5GpDpURsa4H2uJdCd6dHTTaHbPJMtEbU2BiXbeS9jEkxijoM2MJuEzgvL",
  "key16": "34ATa4Byuy4cV4iRFpyEK3WS6iBPfUZZypC2Z3kHhVptEDoMygkZ1pPTWR42kMo64vB2FRUXZMUJSS5jZ3vtBFQE",
  "key17": "5q9vhLMiYhyB3AThiyYPTGTeFAKcoxs3Cwd5Kq3t73a81Fvg981osBVFu9KM92CVbbcMJBQk3Nt73qt1LtabccUH",
  "key18": "KLqHzrLSuaGoWqh9RWx8ScD9WYPJ2wLDZMpfgHGmubmY5nzgSdDYPa8y9GcazichjRjzX6LC4EPpUGRYb9Y7ZfL",
  "key19": "2f6BwxwAog5rDgp82RBtRKWrV4NYtdz13jKDP3UVcfWmrYsEHWiXhxohsPYuHK6maC85ymMaP4iBbXpzG9Ez9gc8",
  "key20": "33mCjeRU9SgcsPz3M4XP9tKA5Lfqh7vN4ABfqxs6ef8cPKuLxhKr32kBEXLvcHTzfRJ2ua9ZUXbad3kCT11VuReJ",
  "key21": "3skEPVgQ76e5oHs5CueKgnMhQPKJrqN9hpAQYL1RiUDpFN4KjhyEPznRxxSVajnudkHAjT3jUVJZvUP74oJKUSHS",
  "key22": "2T4jUpTK4YMf9Msm4HftrBa7AmivoCKcxcQ1evVwQRgD456dh15Fd8wqGRTQ54tJCamWYAM1SJqnQW9WKE1P7SXe",
  "key23": "24C25GbGwHavQT5BgfxD9FHx3oWw6iP3Ye2Xyw24X2E256obL918FotCgSj5em2jn19skJaPQ4Qzxif4dkRfpzAD",
  "key24": "5jdmTXxL2cxudcZCNs9NyUMfNccksZL3uRmbtfMfKaKAFU5q8gyxRuuea86fBYCLvkBduqTx96QfT2pY8MHuJhBi",
  "key25": "nYcxRVhEcSkbm56YrXva2CCPJCtPK1XbkuAymWD2JRAYwhnrK9s9eH9Nnaa5jAfNqMgsR2X1AsM5CnU1Vd6m7WZ",
  "key26": "3vvYysZfGtJWk8wnwLLzTRmoRG9pguPf7jrmcMH2ubb2QhgPY2anR4Q4CnoGHngoWDjERerUTVjyQyKw5f9WCHVW",
  "key27": "2NSXkJgHkAQgsAMowPuY8RfaPzd24Kf5GT4fXp75TzivUyNAkdrWTUT9kFQxbXn4P8Yxi4kauLhrHn6G5bXTfvRi",
  "key28": "5hgyrKu5SJ5RsL1hEShf4bcPc8RMooZ1me5LVCESjutpKznouRDLzuTD69d5uJwVCKEsDp32V8nvfUWNztXE18Cb",
  "key29": "5RFpxhD8jpErbJd2F1mzMcpgr7bgdFDhYGJnqCmXyornic1uVs1BwsL3sSe8SgePts3FZt1Ffy9LN7PHB21EhER5",
  "key30": "54PoG66cQf9TWxb7LyCpYFZLiAvFe5vhpbWQPQBva1Hs8Kb7hKSfMtdUxxvcv3oGhh8ccfinXGmnY8RCsvaduQRa",
  "key31": "36Xggc2kpyegVAbc83bS4Xid47dpCG4VbGuDnQjA4So9VGJ2oHw8uqTvcBHtaNepe7seZnoHQohWL5NP7gRtLif1",
  "key32": "4FGc66LCt7dK8LmHJcuYTMoQTjGEiX9PtNWE6ereZySQcxjto1JtMYwYhV8gTjaRrGae1enHneGBBHHYPud3iQmJ",
  "key33": "3ZGPhLSaS9zd7PcAkLxq5dPxXWyfnnUqyL3kQZ8KDCcRuXmNkSaXnuhxkNZa2mM2EwTkiDL32fVyo4CjQZJKmFbN",
  "key34": "4h3Rm6tS5qHhAbNLrjVR7WHTm6BhCDQdTwFTzLByEKu5SNdaUvYWbaRjmHjs9z4GnGpEadYu7qGwJ1GpuLq2esx7",
  "key35": "5WRwm4r1HNitPWjQxsz5ymaCQgFithZ3ESfyf7yXVLYgwgezxy2WqKmFkazPSoEZHhoqi8xiDc5Z9PjPBgc6utXk",
  "key36": "23sTyDZAsunJXi43n1KomYa8xgviWBrBDJkinz2NCjAiA1s9L84CfrwvwzCcRUy9qong8gZtnjUHvadb29AZYSxL"
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
