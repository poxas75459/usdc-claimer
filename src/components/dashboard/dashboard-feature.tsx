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
    "5vgDrqDW7m1ACpj4T32c7mtm7XhDeogWLMWCwrsSmvESqeWqC7KGKzbL8LoqDaVDdo7nz9ouq87mLFi2SYhPKaR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DFTMSVnThwYSXuR84Ee5sj4RxpVw9XojNXfreu6yxnAc7fF92AXJhSomf3e87sBFR2XqnZ4o9o1zLHiNhdiE9c4",
  "key1": "354mvssjsu32bnGpfcWDbw9JhusUPMq3ePRTzRXqNNCmAWWX91RqQ5DShxo5WZ78E4d3vK4nEzypaT1XZ1pJ3JfV",
  "key2": "6c1hc8S27Uc76mwrQgkCyd1t8eVaqRc7thhzsc85mxCsU3u6WFvojj9oA7y25z5DaBvykR8cdT8CustCGPzz5zK",
  "key3": "2QTNkVTBoZCtji8oahghb6KihNRsjF5cEKJmn8dVDYgLFXVwRvkoULFZgRdYHGi1Vn1X3K5pmPUGmHwZpPop1ZVJ",
  "key4": "WVjnYRhZnyoE2iUuXmzm4DgUqtrpS3g1HkkshW8wqwgidg117FQg2ViZxdkxswUCBrZiJCTwus1y1xL88o2Mb4j",
  "key5": "J2Pe2w9eR6GSx8tTdKYTr9GD7RG16nYUEHfcbrdayGJz4pxbPdjdoU6twzGbqYy5NxwguqZiu2sQujYGasjwBPK",
  "key6": "2S8igidd8AriJRAZWRbfkpp2gJm1PzN3vUVaxj2uCv8ixr37prvf7TTRGxDLYvKjem6k97Rx6Gha2b5jiEyzMqt2",
  "key7": "3L17s64JcvhwMDKGueb2Qbk4Uj4dXw7HxaaEDUQzfKWcMEEzgtgT1WHCoyts9J9GC3Zdiv3HUHQzkVtZzjkzQURU",
  "key8": "3VYk6mJ66tMbGQuH4L34d1qotRPbxKpUjap9cc3FZF2eTAJyvaPZAMWKkMyNaKccgZkyAQybZcTS5U82BF6VEzLf",
  "key9": "3Ufvne9XmZXPwULMpv2K7G6WSxvLp4LX4v7jprvaErMxV9CqV2gmapeNgzLbKVHL3mr2otQHDQuZ2Gin8t6UDGkM",
  "key10": "qfxPfqT7XtiwgSAqdw1T4SGayNCa19PNSVXE7wk5V7ttBtb5LabQBL1mgB8tZ6WQmmS1UTja57E8S5dvGwuvv2q",
  "key11": "4NVJs2XPCj1WhFnUnfds9erY71enfLuqf7uUd3S2sMEVZVuS1rHHfGfqSGENSzmK9GCcnvnAhKDeM9KX82wJtgA1",
  "key12": "2LgRNXfTCsG5H51pJnvR9wcdCafEVipsP9MQrMVeMCW4qmzazKUHyxuLoRzbRWyrRWqQTYDLgTDvN3NjRyzMGB4L",
  "key13": "3q4KegzgkPX27WXSig3MMLYA2XXGsmDFmgam6wG9v5wQWTiDnQwbx4zBskpqNtxnpMuHbAooVCbLAmZn6f9rjZuh",
  "key14": "4h3v7Dd3bJhhjzJwFteirXY8HhDGYtFMLsNVxqiVUE1mk5SwBw3xAykogXiB6rNjAcGJis8Aw9TktjHTKJcknzhW",
  "key15": "3Cjb6sXncHXfUDY162nGvX9zYPRGio461dbMxYUERxBiA2GAz9BbEm9rcxcfPjda16EwRo2pm8nz2uD57WGt5Z1U",
  "key16": "4mTYsJXhVKzQ2FUq4PioPPkQHEfMT2Avae8yA37MErXQr8s8n7bSRnJzY2XQHrXesaUgpTUboWSaS5Pg8oGsS3ZR",
  "key17": "63Zqfb6hUkwrq6wAYsRqQ8y9c5gZ3gWoGGkQ9CPBP7qsVFG9E2FByBFtaEHYijuP517WpEsQ79may4cbCFDYw3po",
  "key18": "WBt7WMtofLnZs3LVhBdNs6j2Vn2VihEzkF5pr9E5XsfDvCebPQESCPesHdGtHfcSpiHC6CxrLEhnR9Ji68Zvyd3",
  "key19": "GbqoBzVo7JLjuQ1boWNcFJB5jVgUSwShiYzwhxCTEVw2BPRkeTrzFGZeocX8YdpRDsdbNEGhtBdz3dkViZEk2Af",
  "key20": "4ksdptji8assnGzCRNmUbbmGistdEyq1gitXxBQ7LNYVceJPctURy2YxBRi3kvQVQv3djbK2jYjMbikHTzyaqrxw",
  "key21": "9vkoSxCERsXdefjhsdXBYvPTRwcWKtUeHi9VCG2wfeFqhJuBnx8bkpN85ymbTRMeZcjL56fXsWbv4rwtgv9pJko",
  "key22": "5cVrLuwKqoU26o8ND5DQZBdGfKWHxSw9Ja369psPfq4eaJaGTvz5qqztDzeSeBivXQnWanQ4o59eMfuqu4VHzuwc",
  "key23": "554aueiGTMR9AsyZz328YfrBM4qhyNfgGk1iWFJarzJt8sK7pBhWrChuAf3tvY9cPyQqfrhyiu7NAq3kjpn9qnCL",
  "key24": "35t3Uz9o2SypHHpYffh4LSzPPGwFzEvW9PN8QcfTci2v7Y2bzSz58PUJ7rPhQjVwB3TY7PBVKXEGHJ6WkuVagoU",
  "key25": "1VrYxZLipKUy8fJUBcPVC4t3pVFJ2MxJ9sSWhCZCmZHG319wGoG4WnZRjTbGTPv7S6QQQwA4ur4wyrFTg6GeW8T",
  "key26": "5fHeyvxtkER1gGi6gessM7xgsybAJtM9BGq1BHQAuiThCFJmepQtwrw9gySZhXiBFjhSqMMQkxBgZfGofKQbA9AU",
  "key27": "64vvAMhvFT2pGqYAwEDQDQhVRp55yckEDFMyKmP4tG5Jda1rqK2ev51pTZgBPv1mH6eGQgVP1RcpHLYXkpM8CQbc",
  "key28": "yRh5RMVAT2YuQqd33dn9NhEEKDPak4isgPPMpKgqvKNsWkgBJX8hVgsczsZ1qubTShq4jr5WSUYvErGfmPzaJxT",
  "key29": "2RezRPoVpi6Wj7NfRPG4ZJYc4tH6sZtLxnPe1MaLw6zUcjF6Nkzp1NRsSWJLXWifTadPM9V41RxQsP8ekwU1s92k",
  "key30": "5cr2PogkLiJzZpP3SEsRGLWW82pFcjDw27MT2gH6F8yGgEqHnx7NeMCS9zEgnCpRmgykiCXfEEVaimSgT6suxsvJ",
  "key31": "3ikBeQRvaSTaBGRA2u16zTcbivfAirn9UCo4MUH6nmMoCq9u5BXNgnH4HMhbysMyW5nMXQZb2WsvoctbYrm6SeeU",
  "key32": "3198331HMHsp2HcQcZmNud6xMksGerkPJbgJMFCgrUF7nS67ZqTJyFsyEwTVmNWVmXui4WkN1qy8oWBbyySVAhfu",
  "key33": "2q6LmDRLDWt7NUiJEhAUzaXc515Qm6LodzVzoURaWzuWiodstSoWSLFLMmaoptVQmvPfXtwVsrA8L2Fv7JjCZZ6b",
  "key34": "4GGHR82xkA5dR1BNGcVfQ6dwFgY581HVYL1iz1MgH1xfHvxTkmZQ9b61cKz4DiQVw4qbmkjEfbSHvtE1n99pqsLH",
  "key35": "2jYoFrkfAPQ7VVd6B3dBpAoM1pwSDAUz6YkFagG25ouhVHxXyoRXSuwyT9fSHBTB4iaENV2QDosZw7vHKJVhFvXZ",
  "key36": "4zSEwUzdSeCphjjviop9KkkddzsLbsgYeWcW32v3fHAKDv8RCc2peJyxCTvktqy8HDTeJW6e6c46KA9LQzmyY8uh",
  "key37": "fGDfPuWJ1wdAKo2K4LSMncntEbg77B1UdWc8Hp3nr9hCKsk42ZHHXF7KWtiELff9J98gY6Av9wBYNYqDz4s2Sxw",
  "key38": "2WECKMRVubHQJZuVSCqCprkazrE29N28k5vip5AgEybv7AeSfucDKaBYrSepoVNfNMewTyqrtHZ6msX2j4814XKs"
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
