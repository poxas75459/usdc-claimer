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
    "24eHr6wNhcTAhsBTrG8vwGRDYPV9zSowDjbY3YNfzzoawoNB77gEwLDnmYgXVUK59h6iXbXghGCmbnPz4xfgzEpK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KKjz9kMfJ1tgzigVje5EhxudrUXZo6az8WNJRHthsT3oFHnqKCoayzV3Nsv9NrGVp41TEg4wGNLdBxTTUUrYxRZ",
  "key1": "4sNn1C6B1jgJyLnHeV6rdXPfQsQseGZZoZjok8QTRrQKKUoXBEHp9zcDKCLqMF5w8aW93GPNwmsfdnjMxN2sxVnV",
  "key2": "GkGmgQ2uKQs4vQdCUJhnJ2e9P1L5dXRkihEVkFN6mBoLQuSUXdsi5bhAeK5pUfhA1wUbuxQPMoHf9x1nvVso9oA",
  "key3": "4VUHi8MhvZa916PUxJ5Gug954KbRt1iDY5bB4smc6CGTsFHFxTSo1k2C2ekzdRDg9reaDEEbi656n6Xedtuj3Zcf",
  "key4": "gj4Qk4skTt8fFMz81kkGGEGqngqyya4MkeLoCceMEzjrgtQUc2DrUn3ssXP2DoQ1y2r1yCpKcXe6okdRD5DPDaL",
  "key5": "55mUuPtvj38jw6Mf6drNsZwACjKG68rAVm8a11euPNAZ5dunEPdPBDxE6j29MzrxoAnKxctCqifGRTn4soE5kZdT",
  "key6": "qwjejA5o8cxqSMscj8bsYWdfVTErPrEaGrLkuoY3x5b68uj89FRZNiPRqTigSEAaKsjXb9K4qKqGMZv3uu7Ecmk",
  "key7": "4xRAgpycjkBGzCM9ybwNDdobtwB85m9KPED7mHNfkDNid6UjnmiSqN68Yy2PET9ccKMgW6ZJCmozfPqQdeVGaMGi",
  "key8": "22Uy2R5pDvFvFhX3Pa7u32znP8zg1UyTQWsFS5uKMgdPnA5ij11MmauvR9dDHD56htfSNDteFcXeRRm2sAD8yKvy",
  "key9": "3HW9cH1ogDcDzayiyaE9st9itcNENCArHECYxtgTxUdfFEKqHBpGhfKnFmUTxMB8EXUuBcLNfzeiQ4L8H9JHc2Rf",
  "key10": "4dYzvTv1wMXAfbaZfz6MyyMWXsSGPySaq92GrigEqLASVtH7Jw6gyjgPHoXqLS5cWoV3nkbS6BMVZ6XzghcotwU2",
  "key11": "5Gi6Ku44UU4SZ8VpWrCZoCV3QyYRtM4g7ei2c6GywDghpdDxRDPeL7sQNXCENvu8YYRkPy5cyZnbSXiFQaidF5HA",
  "key12": "2URR6CFb37vGzQe13AMjfDkh1JqyuNZbcyvobUepzgh6hafL9Bs3ZzndDACu1CDptoDr66eP6P7c6QTMVZKSCvqx",
  "key13": "4RyaM6m9NcmwN1UApxCKrroBDevJy9yGNd8VPHiJpMBv5nLHrYgvwnA9Ps5aV6FEvoVFLMp12rVbxMzp1K7UYa9a",
  "key14": "4F5ejGUPDfk6u7ePDpvHkHTiR5cXrQYDxF3Jp8HStZsk8sVJGEjRYcfkWCCt89mPp8JiGaf8xVJMANkD5BDf2vH7",
  "key15": "wcN56zd64Urymp1B1qjdvSJ6Lz8hXYFAvgQkz9CBaQtP6UehKKUaRnnDSc8MdaJRkLjtAPo2rnNmadTz2p7SiEh",
  "key16": "2pKpyj7tJbE2aiyQFYSmi4FN3Xx6VrNn234UwF67Jit2tcuPwzmCR8o2YQg1FPkBekbwrmrJ32DWTziJCCgTD2V8",
  "key17": "tGWxewjjezuyfG94SXnD8vkLuHwNMrEXqNEiTJJ98aoDnyQcapwtVprSwnj68syhRbEd2RzseEDT9cwizCH8ZsK",
  "key18": "3HFu2h9fR6WBVT3GChYcsd9GEFtq25S43SQraLY4Bq1w6CQJy3DsgX3GztoZ4G8QxeBtfVPVeLkLdBiGWV3FMVV7",
  "key19": "2vJ77Z811e6qAX5TVLZkBHMiCQ98jxacL7extP5dN2Ppa4yLSEWLiz1gMM55mQx3EbecH72ekjgQzfTz76faxL3C",
  "key20": "3RypXp3bFiKdVt4wTfz8iiAqf56iQb8iDRW6y1mvJGEyNgxgWCvqaGxLAKuf1W755XwM5Ya7rHDpxuVsWgTk6jvv",
  "key21": "2nDY369Y3wtFaVCaebN5pBiPi6KvQoeyw4yZRb1XKhb8EiZut5vVcEgCdxCY4dWHqx22QFBJQ8goUMqzLjDX1wrr",
  "key22": "4V4vLt2hJvjUW5ZvJgZci9DDSjidnQtCfpDi4d4brXiUEhseF6zyEXWduJmrfSS1bCeVzZndpA15wMyyVRAQiygG",
  "key23": "3j2Xr6fhsdiUPRLZXWpntnuWP8ixpPqhSo3ahTCWtgDjzapCd8ixPg3TJEVao3uuo6jkt6ifTNDU78yrSP2KSn6u",
  "key24": "5w2DZdnuLHmrKqK8GEAHDAhJrzVxAiVGQKDcnZvEHkgUNfcwhMtdSFdjdirco2ey3PcGAnLFFYkif3NGoymjbDQL",
  "key25": "2FU6wVgJUCYNE3nuzRV5bCWUb7ikiFg1HjBtJdfbkRJeqJFULETMDhqruRqJuu6dHxMLxvcieRgEsSNhsrqjNL4x",
  "key26": "2eMdzxZsj112qbqtTA9zqGytHaSSiERB7MDQPSLnPGcvRTuSEFJpEaLBQgagjM9aRPrZ4HEJm58n2mziKxE7CFsd",
  "key27": "3FZXQ98uT3dxV4cRrWJyRZXkxnej1PxNneuWJqk1QLzAqDEymRTLxfVivXhZyhs5nx1hm7CRaTZhToZSAyhbQFsZ",
  "key28": "4Z2SdpsMSbvb2RU51rF9QsPfmi1oEra4Mce4u2uDX91anu8UQcZ12VHRHZZFGwTZVPo7PLTSuX4kwEv32TNqzrWA",
  "key29": "LFTmVpDFRrC4pQjtZynLR1v7RNiwzVEUT8d4ndBuGLLTE6w2FBDzh7urBoWzxnYKrNKkKNYor6DR4uNp3xCzTVG",
  "key30": "2qgUmJjyRWZw52j4wuej96BwqyVgfgHcsbvtSg9xcPyHYbSRnQkxcm2pbusbpedWVE2Q6MwURTPyZYRGGos3oQyt",
  "key31": "2XtosqkKR7tGWMtfgaskMwTGKUyHzoUFazgXv4RnNfS4r4JjRks4oGFyMyWoKfa78RnqNZG4abeqRPHC6aVKtF6v",
  "key32": "2wRJ6x77cNgUKXUHbJxMt5QUTghP4ApvzM7QgYwDY5E8TGnLu3apGbu4bBYubJCLBWEFyAFwFXyj6oJqXX9ZXvVZ",
  "key33": "LxeLdjdXB4UjDoKe4EG5vAbjFxwrQmXKZqG81EwTAmijgRSG69Ue3NnzqKYx66Hgz62XFuRgYwfHKV7rHLYvHbo",
  "key34": "eSVtsLoVJ4hi8Ei5Zdq5814U7UmYVSNjaHGCbDj475vpoMQV3n7kx1hCkP3bkyN2BJXYqorHa6PpzZzPRLmnoGp",
  "key35": "2tNMN7MSURvdNu2qQJcNPcq9qxMck9rPbsg7iKufRoUnczk79NryyGsbpvhBmrtPLi2rgQ1sBfRMZR9uMHjmHBzk",
  "key36": "3MzC29FQ9hTFwD4FDNkw81xQnLpqEMNDkbwi29nWYqmfZrr6zfy9BhdqRqQ6UTq86Vkemipo6S4E34FuzWjAEZvs"
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
