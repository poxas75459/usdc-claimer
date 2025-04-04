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
    "25AuoQT2ij22AUa9Js11bkmjT79B543XHtMesLJFP5qRGPv58Z3HhkeuLeab2iU3KyKgBBGNpSJeU4VMyN1FDocS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bTtcUsd78p8kbcC2SuVjFpxzwjYjau774kXNGzeKcQcmrc1yNHtr33Rk8sdcSMAZ4ZXXvQ7pLNiPRQXTpR7cPzn",
  "key1": "5EjKkpuJ9LSPFUioxo5986LDzEv8y47eUVX97ACjkBKN3AUY7bFCM1KE8oVhfmsRF5FsCHYWnyirebwKeeRNZCrM",
  "key2": "4v5pWePZR5GboRwL5YzPZvodAuzDhim1ST2mu8mWELeo3q14h8M3dV1dC9CVW7uXHEnbcoATpe42eLMVGJUJ4nmU",
  "key3": "eJLLfYx3hWBsBz6ySJBQYH5vMhS2CnXGLTQQZVx3PqZaMeFaF5PGJXbFH5mJscemhAreCFS6pkJYAHtn4ssXYjJ",
  "key4": "42ETYyhV8nJtT7KHYwpZ6eW92c9GWLj2Ey1QBPoZeo4w2RujUZibwJa2gh6ZkDo17R1w9582Yos26snAdSWKh81K",
  "key5": "3z3mbeAEKsH3PSw7XWQUsyu1XiJEZ7P6LDqnjNvtbtSm1Syz3RteYhLZ4GyCrCMLM5x8K2zBUvy7cCNRso87nBkN",
  "key6": "5pdRuihuAHtL3GMZcV4DeCNa9WDLdBfHeKYRQLokHU2Zhskqo8bf3jMX6JJ7jTeG1HB7uomv6FAH3BjekiSubEt3",
  "key7": "4Khg89UXip2z4MJXTZZd1iju4uCSPj52hwgTNaqRuwXDEG7LRCS2wmnwCaDfDT9HJj9e94WwnXyngovaH1atSNqY",
  "key8": "5QoomppznNuPMRLomuCAKWBVCaGBGatu1dCTo3FHNAKU1mWUJzVBMW1fU93KWjF3eYsKyoVzbYsbetwwr4d7VPyq",
  "key9": "3152FhV6ceyPXomm14behjoQct2JVGNibyXtAkYQPasvEPR6zJXdG4UYfKrW2ev4oCuebwUdzVGB1R6BEqzZbuRX",
  "key10": "D7T7jKJFVzDxDRnjVfYi2ZLq5ZyigG2WoetMfSGaqbgLkeQ5Y7vpEKTpydskL4PSm9AHsy7TLo6T7FW3XzMx2ox",
  "key11": "38vfZezoDSdqpFsQy4iADhFiomgdWndAqeLpdaLcLmjKfDA6JfQv6LJ2bn2yqKKbPCsJxYmE5tjmG6YAMiHm4Wx",
  "key12": "3f6h6NFTAHSYUHUdsLRV8DDxLR74Rp5HNRE4JQekArssqVvEu4HUK4cRLZzbrWqDBwPDMw2aJFL69c1wTP1xvWzu",
  "key13": "3B4r6ismwjpFUv4hNWKicgMPqsvgvBJmhekBMnXgVHqy735iry89GWTP6DuZX97k98NnPpPyT2gNp1Ltbsr2aMEA",
  "key14": "2gEm5BBkEvDgbeMkoV1giir2ePhmaaoWa15LiEtkaZm3ExoSnDefBhHQAvJ53875whdQpBMwG1bpiu4rgGCAVPFe",
  "key15": "uXnzzxCWwqeVW6oHc3gFQVCVdgKgFBppUunWCFjE6q5gCvkFhogjVp3hdKsypgcYf6wAj7PtgpniuhoG4D21asY",
  "key16": "3H737LfecbJqSowbR6A1BYg968ZRChVvqBr5H91uNR4KB2U1PafaPGpXoexcSQDy9grxRwGMHdpp6NRq7tfD4atH",
  "key17": "4qQ4iYTEx75ij6qW59gN2SkR2fs5NLQppRa3xTvwH7ZvRKnN8grFnt2ZesWsmdWtSYF9Kh3VW7yrU2mNnLvsGUeH",
  "key18": "3Fw7e4sFz7Q357stng5rhYM8qWhqbToRCqu8iZ7bgBc2PJNBrXqoZau3aqFD2YfHE4N8y5wf1dj7aT9WbbmzS2Fw",
  "key19": "5wPoAATs5WKLTCZ8cr6L8HQiTPcp5HJ4qGDM4tpf4ApaHmSoUepvEKF2durgrumLsLXgP74e7iZBPJsM8G8cV41t",
  "key20": "3fufSLNmWYFH7bCZ9HmeBjSdUZkFELN881cnWjaFAk8wqFxkDtKbkUunz4Kn1W8QZqWEBu6ABFduho6WY77uABfV",
  "key21": "36sG7n5wpxgf3Hta6ykY4QqHStSAfFuCFkUVpn4CWg5djSEbueKuLqMDUD87ip18SShoJF47gkc7rTK3k3HrLhCv",
  "key22": "4vaCPSeccQB1Yf5EfwpYZvwAXxCyRqWGt624A2wnJf26oz5ZkNSF7BBf1BRsgwBgSqoPRw8iLDykSMFqKTkfBQug",
  "key23": "4y7qUvaSLSq6PcXvx3uJDxpy5c2NfS55XYamuMqPJkqhEGU8AF4bwhVnMcWNisp3xnkRit4oNiBzVrLwqrSX5AGK",
  "key24": "5swBn6jsotzPn4vtVt5BgfUhKdF3XAnK2w4BSdjAzsrfiNvChDVDKXRyqcTM2M9Cu3vStoD5a5LxfxS8eJJixT7x",
  "key25": "26Z2CXJjHgXjbgzTxLRszzwmKiF4hk411gEdoa14RtoSn1JLDJm6EMikzCTWTs3RzoMArfwaqSdYiLSfe2oj5wSS",
  "key26": "sMuVbLnr4bQgebDTGhNwewmymZZSqPZjodZMZcVyCMJv5xmFyJP27k4zgzgbkBhhcRwLhb4X4TuqTpEnR7NCUXt",
  "key27": "25Tg9tEZB7MKtr8pU1dEZWWjsgzhDvApMKHiXV2PP8hWGC2TUgj4RcEK1miYT4KWjitfsFn9DmktddmB1NanvgoD",
  "key28": "4tBFxhP7UXA7xSH8G9yW7W7Rk99AoA3M7pwNVAW2b2EYCP2CKjjEfRgdD5ZqxJb6ZjZKqsd5ctGXuM2u36EhuWen",
  "key29": "2LiZ3FYcSu6ReoL2CAcHRBAUVnEakmkgjqHrN9FzYvWGm6xWBdKoZFUbQqADdHN2ZBJN4LeFkrK4dSfrtZ3rcyRo",
  "key30": "5J5FKc6aPaFjxX71m9piM96mZiwKohfep6kYagfLwsdsxVgYxKSF27EVfMdNASeKs3KCv7dcRTxbQPxXZaCZaSCB",
  "key31": "64zsBLxSX1k6WxgRHeHht6EQ9itXbCXCF698WeXxmNzZYnTPfkEX4QYC2QDZEHiG7R3jVWfNGvkk8N5WEa3CLJuB",
  "key32": "YKBe8vmjmzmyijcT64urw7azvFHSwSTsxhPSXqcUShCPfDAggqeWYhisw7B1vTpMi4f82GNfQaZnmNLfKRgQCbo",
  "key33": "StH2a3RWz2QxEAfGnwnqZPy2AM1sWTYyvi9c7qQTrUHo9VkDHsh5emW2i5ZeZEYjzg8JRBEqV64j78unGaFzReG",
  "key34": "5Lw2gYN4KU2Rp35ebdnKXqbjoDXqTTucBVTQMhakn5GqapMETgS3K6mKZW64Zy3hiwmqHpefT8qe2GXUPbiya3uh",
  "key35": "4vTEZEx4adbZ31zh3n9cyy2qGsvcKvfVBX4jTWLrpNfyR8A8EdnMGcE2yLS5u1eMiN16abXByDkMacpWyLSD6pbo"
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
