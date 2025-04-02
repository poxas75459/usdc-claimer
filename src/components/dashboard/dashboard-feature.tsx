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
    "5EE1wLBaX5uMQgcAdsRWYBh9P8Bdi3JEZyexDa6eqGRD2Zf2rYsGHvL8x8MX4WY5TrXVEK5WHSshqxv7GR4hscQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UcKoeGGghF4Tr8dmb8wCsSut9GcNc4JBLpss8pt9XMCaQtc3tDwLAXds2ko5QD91rqe4eYegHGMu2Eg2SG6evcw",
  "key1": "2rETEt44g5qSabCDLfUGvmQpi1bAtaWRrBbf9HwHwMBiP5USgXvj9q9NDqMcSoaZVqiZCub2ip196h89XmsDyfBn",
  "key2": "3HiSb45mfmCoSGBEsBJmDxvzHfoL97fzm5CD6a3UaGHwRfCJC55kKSkB6iyLcSudXE57LAmedCDMuJvGdxfFVBMC",
  "key3": "4iZy8ru8gHxb5kvjaC1zjVeKvzcZXgMwX7gPMcrioJHs8MY2c4yMMc3WkMUJa6WPUgMfgcDruRy8tGUnmaqgEn1g",
  "key4": "4AHkQumzpSbtuQgruz7QCina3kVKGyTLLpWwMpcwBgo3L2RpEdewMPijdbe834NrQZ8fCD4BFn3VsAGUmUBM5mbQ",
  "key5": "59kjrTWNuxn526PootqPqo5Lj7ti2RTf9YfaYnyuVMjXx5A6EREdr7nDf2tKPQ9R3RTK5ZFqSb5XTeZLDDL17GG7",
  "key6": "66WsfwYotvJHT2tViudYnYcQouthLeP6anzFu18wHiDQZ3yBREwrw5KLHNnv476AmFDTtbX9q97w9iAKNUAwLxSF",
  "key7": "2aYoMPAhkAnjdjtatqpF8MgnSz9ducs8h4TMp35tJYb5fJ4bxxRoZoqGSaAesJF1dmhkAoSiq2y985NtrxNZy5uF",
  "key8": "3TDoG9HnPwjvnHb65cPbhw1DLVkfjVvcTkPUJT22bbv3LEANJ94WMHkfTihYYPzLNqfHjr968M6GJuqmXXdnZdKN",
  "key9": "hYkgDuRhA7rdC9fFquazgBW518yTQPYvEpevHQ891GaryRmoxWDSNhjfh9kcfMo4GiXo5j43HxYVv35qh7pthHp",
  "key10": "4Sy7JyKrfCghz2SXigXXr3HR7Nz4yHQoHTmvyzMqPq7Rt8YLjQ4Fgqi9f8BKr29fGXVix71ptShgBRHzjUdF1nQ1",
  "key11": "SBygLGK6yWBmvUMJwF3Xy7G5Q23UpbgpU5gJ7XoURUcwXaQSKA4DXu22FBqfBwyHTS5sJN7RPvT4qjdseSBLAMN",
  "key12": "5iRigj3oEUN1A1FaBwNQp4VMsVE48WRni6DLnSUWfqMJwV65k2bypgK4hG72KZ1UAjvf7kyuPM9mcdQS2DQS4TFZ",
  "key13": "f4RoYyKmQqKzWcKpg9VYy391bDNSf214d3LjFLhQAGfUWeHhALbGmD2nzmwK2hXpPzXcpT53fggyEpi1AAZKhBt",
  "key14": "3RJ5DGP1Vh2EuPnnjCrdyKDiHNrRWPTPz1SrXsswVN14Xfn24DPQPVeEKZeGSCg8gF1q4mDfcQ55qd98yvUy99vH",
  "key15": "4FLKh5NCbrWxbsr5QWjoHd7b56k2rkuSUUUxx4sw1mXhjUpKG477xL4sSTxShzzAsiH1tZv7GXJoSiVcfvCZ2ufv",
  "key16": "5JzgcbWd19FRJjBijqJmhFNDRqP67M7sH87q8B8A7WxifH1DU96LAGAZ2JbRoMQsrBwxx6gn8bRFifMzSwhQ3Nox",
  "key17": "2PHUwpK3NemQaLaHE4bEqCi19oTAvtatS4nyev8YcXNuXttXAC75sXuk9fFqiM8gJcndtbRc2MCZN2HAMN3pLPU2",
  "key18": "5NRm5RtWhDh6pVc5hWUxYxodRn1C43o5akFcekaruxQFmvCFwW1xAp6o7hRrD942eUHnfxi5pUZeeCwqD7vMAHHw",
  "key19": "42zTca9GxtYqzy5sN7ddBJ5e9fh4edmTo19jh9aFwz7KR8hAY9PZ2TaCukpzuSJyzzRgTx3ZZ3G3w7jAVsmh7yGG",
  "key20": "3yDu1YJsh9vZo6jhwjULeUMLtKKUcf6hPLUXoq2LLfMwhCUVK7ME2uNW6JF8caPUtTZ1MsAUceiQnTGdZ4ETK2cW",
  "key21": "2cN1jpwHDten7YZVrwF5rdba2p37sv5ikoMqhTVAaeXPNhaeBQ7wrEv9bGw4E7jWYV7c6XLJz7pnydPvKVU87C15",
  "key22": "2mKXqVMvAct5xV3eE9aM7bHKfP29jsYnovz63STcQ2WQ7vz7FEDaZf7cSJGqDWufHc4zdQRoDrUAx3d8iqq4NHWG",
  "key23": "53r4ppGt5WuLTSquQL8XzPer8XqrUp6gMrDDYxusXUD1cPGRwjH4p6Hyxy5ojUX4arAkX6krqDioBH6cwVyW6LYM",
  "key24": "89wQA2izkeepjZ8ehYNKxoKDAuupUUXV3a45YXeRZgZVnotMnr1BnxnWjTDQBBAvyjNmZsZ3mVo2p8M1fy6Zy8D",
  "key25": "2rt5UEgEQe4s92xj4Y4s13EW9iLzYetQxvLaLpQReV2ds8fBTG5z9LmZAiqt2sJMqueic27692G2mR6ar6Rbt4UU",
  "key26": "3TZm82hqfDBAvrEVK8mmTCqiogofzkiV5qUw1bv4VcYbA5pWAYEUuxsj94NWo7RnKaKXxoALW4Uda65HJNuGxzak",
  "key27": "EZUbc11LyK6igfpNZwCKDu3N5w1E7VnPraaMmUxAddiHJHcdHcyc2dJtzNHYkKc91ywZc9RWj14ax1HQcYRS39L",
  "key28": "wChvQP21SJngrGB4aFCc9LmaYtX4Hx1hWxvW2o5xA7cmrajSELpqMGbeiEN4ZWmDZbeAg2hL4qHu2c3ECT1z7Z5",
  "key29": "4izDV8iSTUcBs4oJwSnnaa7fUczU1GSJA3JoMdsPRXnduQ4wdWvZw9hHXam4Yf9ZWmU5LaCL3smcEtdhCCztr2rH",
  "key30": "32T1dtSQjXnvZGkMwR9SUbvtAXyj3VMAChnFdaaXZNyvX1M5T4rLAfu1jSdy5iiejrzYfrn7CCYaYo3iGuYqR548",
  "key31": "5gZqFWgp7eWrVRJjsg9sMyQ8dzmGumWN7sXXCNvZjfKsdfJrZRgy7FTrFSqafQkDpEKHZzbkwJ7kBLxMxKWGCErE",
  "key32": "5jjn3UdKP4e1Z35PgdDH6EzPoPFmr635stQTFJPKuukQTa3T5WsPpSwpdhR1DkW9c7bdV3uvqLLsAgMXindimc3U",
  "key33": "3qw7mkd4XFzd929d3o8nqhPMWjaCpBVNgYKnze2HN8wiP2Jvfok8MWRyQiF8Xmw4QfhZGgz6oWVG2ek6VzfdhUsN"
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
