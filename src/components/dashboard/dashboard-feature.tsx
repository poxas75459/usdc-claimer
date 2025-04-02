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
    "dSByni8SJoQgfJ1g1MQ5C12buSQQnQq6SHx6UAfaGaXKLj1hEjEAENMpZKgeBwHaAm2KLmW4sVd1cXou6c4XcWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QNxjuivBEkxu2aFUSLQQYkQeAb1ANJEsu2e3DMLjfxGfoVXLLLd4gc1Sf7GjmhCcE6av1cJUg5qFmarAzhVcj6L",
  "key1": "5rtwAY7KoggcnftCkLCbvwzxVPTEnRYvx4SkTg8qDSKgniscXFHpZWYSxmmVPBsYKfvVJNeVpHtT9DJG38MdMpAR",
  "key2": "3PexxFDfnUDuRB77SFMqnqjMbHajHnUzdQmijnMNH2t2btAet7rmoyYBCtEQmNFxkDNVyVexCNdoLJ1vMwLvyi9U",
  "key3": "5pgykKvB1e4VUq5gubXh4BN62r5xx7kBsZSBtU3mqhfPsGibreUjEu6JwhvdreNsovMz7KxWDpuMP1ig7sZVKhos",
  "key4": "xdArPm2yNMNsKFrUS2mtSs6QQwB9bKwbY75HKZge2TWJaai8hXcAxMbA4s4J9mCfd2D2RMFQRSrt1W7D1X9b1zi",
  "key5": "49HeYLBDyLwpqGSrjeGWctaqfw7zenGMpWf65ZZjcAcSLDUfoP9QQHXofzXjxkMmKdMp3aHoLQ7DBkAVT8MjTTHU",
  "key6": "1rT6NW77vGojwx9ktbYgDQtwFtt8djGX83sdvAy5hcb7rqSjeqNxu76vda5dnohZd3WszyFAT9wvWNYeAwtj4fD",
  "key7": "eqAVpP3ujbEmzheCCs1c2MEQSTH9SvHw9cfzS3SUWedgVYQ3Jkyc1FV2Vn7N1Msn5sWoedqtttwotRZLcv8dWaX",
  "key8": "3LM2RFEVqfK2kBvKDZ7Rqa7HNweotyhALWjJ8zRCjbFsYAKfcHGqPiP9d3W1Jpxw1QxSd5va1cW6NBvcesNY4Rxp",
  "key9": "xV8o5o5B74dDFjsKh7CcaggnxoksRjjBkpAeVyGipNtjcxBZ8Vuay7sRFWtZQCDG9tokhvAPWims5fCBoAzy82D",
  "key10": "3V5dQiFNy5axvfiGFpunBxhd56kkuV8LGyfaUA5yRDaQYC78PeyUoYq1mk3bcDHfEwvrLDMu6AqqGcxv4LNfUfMg",
  "key11": "4PzDyuycRZW5EhjdifJgjphb5hxKhvXwzH9fYBhhwaM6u6aJeHjTnoXu7fb4mZES4dghAd97qw1e5VCehMAiGDVX",
  "key12": "818DgbN4AYy5XppXABuwHLZH4JWgHnhkQtvVMDLGbREBczkZTeYyDuopPVbXELHNJnEGaRgrAhL3aqoHL9kwe6H",
  "key13": "4HBhwpqwLXX5RabQskfroNWwrqE6syxhoiqzt1E2seoiGoEffXwN9swqfK7yU7RngekeJzRzDkwHzvMgsgZkfwry",
  "key14": "45MjiHp6nGp3xMAzq2jQtqDokbrwEwyu4mP4tPBjoD2gAakpXzzfniG7QzJMtPaC6gJBG72HUu9XmyzBK8Fcu41X",
  "key15": "S6vQq7nsn3Pd6ZYKvYTX1BiiYi35mVgmwyPmHhm5e8xTuwMPWsKx5svBFXyh7VTeQfPtxiqwzunt3f5xoB6CYN4",
  "key16": "1nQqCFNUtp2ohfb5HxzsQkACwd5dUVu9UzdGz33pBetNG4cjCkr4RYtvpXzKrrXHfuuV9XyBKjo1EUv71ACBHB9",
  "key17": "5h1z1hFzN9vGGX9TQM1Pg3iGRHKwgeuqPhqD5Rf7BJFdHeghUSWyVKFdvVTzcQbQqeX4G1fmppw2h5WLQbM9oLnw",
  "key18": "4H4jc4veu1pMf3SheMS1CrV9cupeBjERGnut2bkAQy5d8V5U7srGUsE4VcgFkfAY5X4U95mKCej9KzVfX7Jpmg6e",
  "key19": "41EH1WQggy79BdA7yeY6cwwfLkAGiAxGaK4agXYHmBj9ySEReL2tgVDpTXvtuRTwf4wBNDhHjKYkmmJXYiCCaLAp",
  "key20": "3owkHk69Mb6jb7JbzQP2AoG6nekTyEBvxHmsA141uFBsY9wZvSL8zU5PQ6Q7N3PXXqUnWZGCPVJFmgwf6uA6amxT",
  "key21": "437AT5gKquUxXhneHYfjhaS1HGN6aYANeffANsy3xrUVqEqaaskgNcWpoezCda6L1ZAAZAyLRADJTUqGGBEKkYHT",
  "key22": "yR2yy84U2Et6LFcpg4LeuMRaKH397zrU9yQD4FJj6in9WRW1FxYSWLBXvGqWLRcLzbALA8oPEx2Tm8vfJJ5WfUw",
  "key23": "4myitW8yK3rbP78UVTaz8h2LCoZM2PR5uKHFxk61oeLwGEriyuXLSnsxRNq8JEa99Ljb6xFUkuNCgzvrSZrshakR",
  "key24": "36wAxUpZu9jgn7qCmCaa9diUSxsbBogs9FNUgjC4154YsSj1XChqDTRJCbzHZx8YrkUMCc64Rmczh88FQ2S7hwbE",
  "key25": "2F8WVxSGoQF3XTAFAYdCCVfJdxjnAG5PqmGiVr52iRdAwu6AAhFp2E3x64Q4zedhzAQZnuz7LQH2Ei8jWC1FZZcK",
  "key26": "47impMuh2R1VpzUN3jWDzFWpGXXuyqFvgkDiqmhuoVDr3pqSU2oMNBv99VcwrLHohXPnB2fZMkZeayMsraMifSto",
  "key27": "2xrhnqnz7jtm4URrDjGk7CLymBujGZu7NBfpxQk9sz7QfhF8dN3PbeqzTresA5p58QYiBE1saDuFT1mDeS1yQuRa",
  "key28": "3ChGHWYu4CN3fzf2NWCYtWBhpk4T6AHFcxbVi2Gm6Rw5pQFmAXGpeg4dcCfk2C4VV5WBqgefjjZFZ7U1iJdNikQp",
  "key29": "3SjQqcvwo3i8n9hFANmXb8eCmVdVqK3AixDm6d6XpyVBHpAVAfdq8Y4tSp5pPKF1Fe82EX8nq8jRcGuztb9Pv2BZ",
  "key30": "5NxaZMMb7LNspEg4pkKZgoHYyQucyMd17QeaWfGpeh5v1Fr9DTqKScriAn55Wp2sLGE3ueouCuqraaS2T6VAgGdq",
  "key31": "2Nooxzk52KeFBJuQgmcXUQVrDoohUSpYdiFrq4uUPXhUrzQu1BaahXetFjPcow67NtBKuqSAD4g76FG4psnWqjRq",
  "key32": "4ehdsrLDCExTs5PKxwVjLedizW7ECPp9V5HuXw7WtQPJ2SxkXr2Ny6bAJ5okdCCigf1bQAXVFj47FMiNScrG2bhU",
  "key33": "5aFd3k6v5yN3RuSUnfgUgCDPfgZ6igm7u2FwL1AEWXeAcCobhcbeyxy8D7gb95zMU3C3sAjKwFJjgnegXA2o8dcU",
  "key34": "NDNAWAiAPbmHtMq7qGHfGnpH38koHX7voCPJLXdAJBjUoJeB8iD2GAEd9JQ8tPzirrR4NwJ4bd19VGEJpXsxqei",
  "key35": "4KRvkKeb71aFKDUu7KPSPhcPaYHWvuCc5hPhstEuuHo3FddJozfcuxRZenLWoqUkf74U4HpwdA957RcpCYGdWf1y",
  "key36": "58E3pqJE8M6QJquKVgX8brrwz3GAgBfM3sFGc8WirjGQChE8R1FW24CKAiTmWMN2JMvQ4rgawbFWCLGK6vMZXQm",
  "key37": "4YxdhuAJJsVZdBpg5vecVoacEK5aDJ2Kesd3eYNSWTs5PszErzx5Csxf7XCQaV2t6jEtRKgSit6syNakH1gC5GMM",
  "key38": "5uFAE8ueR1RBmE57dJxxsUDaXjCNVjnS7sB4gCCQGPm6HDAFNjEjHpBkMPMNSFJunQ2Ez7mqmqvJvMq1KcGcNCYT",
  "key39": "2jAwYVDPM5uT3ZdRzYoX8cioMpCv1xhY2qAHC774CvxLKJhxNGUALCxVJef2XHKgc9fqWaAdyBjpBPki6d5EEAKG",
  "key40": "3uN9YXEmZGrpWAHBPugmhmevTsZgGVpLDuNUsKvyjn7H2b97nRpAyxMSKfkJjuBrbjJPqtpyK1vXj7RzeMiFTw28",
  "key41": "4qonPahXKBMryiXGUQaAEtwj1dbb1Dgk2V2LiirosDx5Sx6uxin2yokeFMTFDRDeBEz5DYvZcRoSQGdceSVAEpMd",
  "key42": "2DfmDmya6LbUQPH6QrgZFa2P7381X7g7jvRgboRACWRu85K2VN4TWdofcbjzpVT7G7gRXvPbLEr6cKpPXaXpZgbW",
  "key43": "5V4uhBWNJvVExgEAB8sNx7wH7hqb7qAPmN2ubo6SAdhZtww6tjZqLfw68SXN4i263FDRfkioEta75aPj9DJhudws",
  "key44": "2qJpMLt1nJBJDCy55hBTy68vnXLi7kyD5UvZV1kfUpF8rZAUZYz8wqGwbTip5aGRPVrL1ikQcJ9YpYtTQLxcYTEL",
  "key45": "2E9gVLuTnhJ7PR7wjzsFGokGeEUetjAGeftBibRz5gue5AVv2svCka8Wm8ZYTRATHzWXmxtj9gdSZfos1UP6YmP8",
  "key46": "4neWqZfdihRa78uR4yEEk4QVNU4bwwkT46sPEWeVtPCax7ord135v7CD9GkJfZJHQkdjrJjZh1Jfr8x8b7MqTfcz",
  "key47": "3HL6vwMuLK6BSciEQJ3snez1yFfrgGEnSjoTepYUZ7PK4TDq2izDF7THbR1YsfZ8QtXS7G44ouXdprjkxXDqTP6K",
  "key48": "5DTFcxkuZ9YWCcp19U4tLFrPcay99YZfmC9Wrev88zVQhDERtZQnZgpVyTX3JSNomwRHNXwTDemDxJQ8xmAUZKyu"
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
