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
    "63V3h8UxP3wo4VpJSiWpVdgUHReTdmeQ4Gz2nWew4Jc1cNpf1vXHBQwF3DUEDJfYk3GbV2h2ozjVTtaauNVKC98n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fqQ6LAGJXsxwKZZFK8hVAcscdLBkYdNADmbAjQaRXU2arFi6Cepim71qgwV8F3Bnn2G2BiKWofwjYLRy7S8fc35",
  "key1": "5xonnhLcQzTBLNpKovA2mTqs5Y1dLKT9jq8PJNQJNvsTzUjpim3CdEFn4acWTTm3BT8EDfnznMR88UBN6Fcwdqmf",
  "key2": "NeoXLQCvLwkoFojZZMi96UjP9pWhGy8MMqzwMkmxMEzQWBgg1RDsP5duDXCw7QmxtptWRCshzAaUzkUu9ZwBx2M",
  "key3": "2kbxJg3SUy3bt2Nmxnpko8YrM1FjkJsgKQHp9Js3VGYLoE61su8hjqNeFYRaXVBbiBRDRRgdvYbVjHXNxtCt1ied",
  "key4": "2WemLxipPc9pHfU16Ky9HMjiWaZDDd5B1ajWR1WuoKWaUpFBHonm8SpebrU68Ai5tJFsR1ocva4YqQ9Mq531jU44",
  "key5": "2CLT9F8bzqREyjFy9uZF8iBAmw6sPYhs5ZbGkVd8tBEbnHeAbYNZ9BpNd1gjHvEFfaWKQmYjZQCqXrnxyBeLQZ49",
  "key6": "5fyMfP7bJuFAUNaPxvmEGEKoUAFy5FBJrtHsYsaej3U1w8Ey4E3zTPSJmLiPk1ggqbptQEsSMBnqgSaQcRqwveC5",
  "key7": "4ispgmFG1bj41eLb8UPT7TZApJNDYjcc6ZZuYExMzoCWztQnH3yptgna3CaqAW5WscpymtnSWSJH9mMqzwVnn36A",
  "key8": "4VHnQuWsMu4G2MMoNNgKy4udBwx59Hx53i5GauJvBrqiK1v8XvmtR18DreT71tngC4pTj1yeNWspZjj3ELQi52oR",
  "key9": "2Tnrd1ePfXGC9Q5VcPw3bRFxfL1sEyU9gbZVpyszRHhXvqYpfB8BWHotXNda8P4wtCw5cMpM5PZK9Fq2sgrqRKmP",
  "key10": "2y41yXdB9eLbYWH1jZ1Z1pvZzAhFzrrEsb6tLVrpoZjTkV9c27e67YPhydG8GtaDLKvk9cEKCKpZFTXDEKr7ZxiV",
  "key11": "4Pt23Z5i9YU9gjyJH7ZQayrTvQF1iPfvnjuRxBCWgNiEqcprbkQDGDPH33NSrnb3cSwP4eFAKGCgNsAmHJ95dEAc",
  "key12": "4Y3PbHNXRdJf2tkfPQkqh7UQdFgYWa4XV92KpKEsQS1Vm5oCL1VbBD99AjNLZDKgG16cuh8RtxYDwgvsbhX8smKt",
  "key13": "2s2tuYzzmHMKkxS3dRCbEQPvdAhGPL96Q25V72wtfBmc8FJpLzrUxNc1TtERD3xH2nDynrQxHS5fzNobK6t4sWM6",
  "key14": "5gkBs9mG98z4RAm7SfbxiVqYdRcXzcboqtwfFXo7zHbhL9gFeD94Mi9hQh7Jg2bTMjriPeYGAEE6DW4VZf6bbJWo",
  "key15": "4ytodgwWNuVwftFfD2JrhfmeCMDTmSde9jc2fpNo9RnJKxosbkoFj3a2kFBRyLTCvA1wv2naXFTpRkewwYFVPnvy",
  "key16": "63EFDAnwEoVfxkkeVtPJB3FCMMfe1FLsTxNXdMXhqzUuhyDzcuJdfrFpgANJfq7hL3jYrXw6DGhS263ntWsVW5KF",
  "key17": "3bMmLYSWLNtBeeQf2KuR5G17bH2qfgWjs34Hs4KMjqPiaTGcfbaMW4rwSX6DbTNWt4bB2Z67t2tNrXsMCvLqPYrA",
  "key18": "5twWVuP8xEgo6orzw8TPRyejbdcQwjjfucqxTHQ7zHGHntDgMgu8dGgySgSzHLqpR3wZVgvBH2aq5yNNL2g8HggP",
  "key19": "5dqRES1hyfznNnhHua3GSJH6kBGdEv43Uo7ZsHmqkcUYwbHDgkWJCLP9h9gpA6o2qAev93jQDRLCux5TN4UY1CFm",
  "key20": "59db22s7AdAZKWfzz8xZmRVvfJoTwUwEh42FDFVsMk5n4v6yKHiVwXzLfSAmqsWntjo1Rai9JNbTLYnD66mQ4ZhD",
  "key21": "4ZZcK5H288o7EdZMvayHSQRxUVen9A3p4EGdvZdoycHwuDLMXGNbxoGXKcHUBPGHXMdpYh5EfjFVqGQXweWQG4KE",
  "key22": "4Rz4kUxx1rBR7YASp3KaqoEMEmSxhyPRppUmPXdDL1HuBSPnTHEFSaSXX8if3oxfe4fQtEkZANpuUzErrkMqfyMA",
  "key23": "48HQtcV6NX6EWnhkAbvTbEtx5Sp27HuQfTvXs3PbXB3fZcyG8D6Avp6f5Q4SLER4hoWhGsNkpMo8DLgNNvzXyjQP",
  "key24": "3crD4UZXs5qrxZBmct7GV1hzspT8Khzdh7xDo6EnaG1DpH6qhKPAiY5Do28FEA5yS4xLcquHc6MtcjumFaHEpaiH",
  "key25": "4ZSdbEVHP169QcfCSY4aQha7dG2EEGbU7qzgzvfpR1rWiwLPDqibkd9nffoL5VM3E74K3iMNkdaSkDnojVbLMRA9",
  "key26": "5Q5bmNtAJ8dA1cFpLfamBPUtgKF99UsnYJhAR6d7wKBJWnMU4LvimQmxsHktGU4FX2apBietkB9SLVQFzBe9RC92",
  "key27": "2fqBaBdN37kotyhiXDcr39Wvu9FYB6mvgoiYnUhai1r2dqFcJPTCHMrc6hCZUEQhgJXLmbsp5UUYLcUC1u3L1GPU",
  "key28": "2f1sf5Gv2PbcnBHi9D841ukyzgRU7USZWZMpdCDSykwVpKQBcTpNjTVb7HiMRHXGaFp7W5FtEz1xatoxe9Gx81py",
  "key29": "nCL7L4FvK4PZeb5SB87WhrCngdfv5pVpqU47BJVjJecTGXjJukH8PbRm4rn5EqPRKZyYtWgxP8ohAd8mKQ8z164"
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
