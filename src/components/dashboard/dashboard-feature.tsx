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
    "4u2kriNt5tJfbNLm8jmZmgXx43K6uAnXPkKWa6wzDDEcLzinkYRHvnsgxKUrH1oxN2HkX5uPKD2gR8izwMQdAV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9UAYAi2UqjAvEedawsvmPwcjAMdfpQ1pJAnR5NkRHoN4chXF1QwpYfecVr66ZyjfJ4kr3t8ZGYXa4SDQcvPRmD2",
  "key1": "3o1wRQnKk7UV7ayD4Z4C1rDLo445d6s4HvLDWZfCBuNvyRnfgswfXEbya9b1efaVr9nNgCWTHtYnqWLHwEzPRszB",
  "key2": "4Qga4Qns3w97VfVxZWLPsZhUHUCsjYBboNoREzWgTGsMy6ZuNSMR3jEgzhKH6Q8PYfafLyjNAZ71YnTJqXZ4brjj",
  "key3": "yRnYKZ21RvsrHizJYCbWK9ptJbqnxfEdKkQBNyjLvKFr1zpo6RuPMCo3uB6D97snA7PR3FyDuVf9J2FhhV84srS",
  "key4": "3Zzr4kkh8kzaDGaZwECBBhbJoKq5S9TE1PGXhEz13i6tkyNnydJeuBYrUp1ZD1ZE1NDH8BKgdnR3pVjVebhCbBuk",
  "key5": "3BamFZWcQ7BwQHcKTcn3y7FFtcQkjiboJPSjA9rze6v64zvJFvrjPLRbjtswxGePVfeQCtQW8aeXSUmHcUscU1Zk",
  "key6": "41jXFoPWuWQm7rsJ6Xuo474WHP8dN7nrPomeU1h53Gv5BuP3gmmcuZRzvRdwpLr7AigjpmRPgwVCAps9Rj5Ji7uN",
  "key7": "HfyPUuSGSYCo5fu7Q8RmybaN9VenLRCVViNrLZe1xJuNUgTs2wsNpoX3Szgs4SUqgFTBVQGRfGJuW8nJfU2uavq",
  "key8": "33eiQT7Vpr4uiQeZBgJjfYGZSGNJRbFJTS2VhWnbMDboPUg25KGybLeUkEWwQppCiuBZLu6ui5AyjNqmWMEwkwc9",
  "key9": "bdwrhDb48jfkXifKMFoDeGeV5gz2gD27G9WxMhEyAH6poFdfN9NAtbkjqzgobaPFXLcSzi2ZrAzwYC2kyW8MBhL",
  "key10": "zZuxgR6ABUNv9x3SRaHHLkiZAb6XhNjxZo9KM6yxdmLFrCUdQjYUmaeUzFKyTfuodSu8sjDeoUSyiD571V22VhM",
  "key11": "2pAj4aiW1DcBYDFvmdL1LyeKGYByP89qG1hFaVArAiiSMtcnKJkUcSdWxs6zmpUzLbJcR1pshf6hmY12yB8bD15U",
  "key12": "5eNpeNAA4qBW2zeRbqJwdffyQZtAkMYEJsLG4obFr1ybWKS6g2iDTcB4Emu8azsgA3BWjZbdzYyGq8XdLzyCivCn",
  "key13": "38UiZcvgXTFYyfVGATvk1ziNBtNKjhPHdfNFJGDaUc8nTh59Edv2TQZQCfuY3F54fXipryBPyuiFHRTJgWHiC3rp",
  "key14": "3dYCgGaWKHqBFMX1UgeSGfZhWkCSiGkFZbTv9q3fAtEVtrzYrpfb9de8oxZoLzRNhDwNx2n22of7ov7tMV3vdXfz",
  "key15": "4APts8CgTdzMeC4wouZzCi24LFMnxmaFsqWazWqbs4Yo6G3Wsp3g4DYUS7AqrMc2oaN61D8WFZEAJEVVbs1RSj6q",
  "key16": "5smTYN4k3yjTRTGb7Zcm4brA1cwtKdYerT9bpW1r3Qi8DGYTmiVoNd7w4BKQGTtCBkPfC55yUVWmeGkm12UD9RJn",
  "key17": "2nij1PXBYQ5Tq4SAMC2ssGAYmKVhu64ZFnRzmD96WcVBtP2htA6qDVbrX3PH134ENSwfWQy9QVD3yZz6pYjRmdb7",
  "key18": "4weVvoc4J2LPCU1tZqNZMGjLQHq3ZFj2bMVrjXVacGtTSKmByRXXCGJ4TYp9155rCMKX3vcXZfXBpCd4bfuk8S4G",
  "key19": "6m7RM5KNEhpNfe3raG5MonnqRi2UzWtroVMo2FRCZupoCLqiFAA8c9H74pcemkMUNUjKmPv9yX7vX1NcuH5ZvGZ",
  "key20": "2RcNo3Xs2uj6fC8YTHdamWGPzGS2YRetpmY2s5iR8bAHwdyyGCbZ6Mx7buh2TvtkZ3RLP5dJ3P8op31R6vWVyxDx",
  "key21": "2R9nRjtSC4er2rTkQvAYEZ5qvQ3nGhskjMPjKYjAZfkNKiDFwq8vdQA3SVndtWgmD4DGGiKzewtVf1TKd9mrkg6c",
  "key22": "38XDTvJsR7AFU2FG9ZQK38oWAtzHMnJLE31ncpzNohbNm4pjMT3x6GTE8gAPACiCV8aWSDoTruNEmPWx6MoMAL6o",
  "key23": "5WtyjXxLb9UdLgsE585MeRwKZArtG14i65rYT491kXeW97XpUybK434ndsVjp3vLT532Ej95Rtwv4UhodMn9XLi2",
  "key24": "2X54arCJBmw7AJuRVMeSPimQ2iCbUQVUVxDsSFtkDL7qdmxE9uNQFDFyp4JeWGKPuYbwPv94yEMcifToKvLixfit",
  "key25": "42eTuJeouGukdT63gqk9wUEWfRnnfw4esPsS8Q6mmcvhh2XLXGEY5TZbJX87ioNf6T22XkwGG2XvLLwerWXV8RPm",
  "key26": "3P3jdLaMddXJTvTk3b9LfcwosfBkt7DEunKKCVUFQBYAH6usjGuocYugdCfCwS5uZHdSGTDudxxXnsmxSLYozNk",
  "key27": "2buXqcFpeYLCTUFe1GiFwRWorHcNi3zfHz8kqpM1gFex4epngqw5E7YUq9eDZPwAxcftSbpYC34gAkcPKMuT1pUH",
  "key28": "3Q3VimV4qhqyveC3eNrGrcb9MboVBeiaoarY9cgNxZx7BHRkYutYWJGQ16R4vSSzYb6oYb9PPS4Yz6Wqer6ELMYe",
  "key29": "3Xd4qMAMeotCKmapbvQtLZfhtYgvunnfuxCutb9PTfdjzVDxsguoWiHayRGGzT5KYsJCPepuaCFmzurSfseaobBd",
  "key30": "Ft4SQS4HQM87wk9rj7TuJhFGvKksktBKdwj3vY3fg8y4zSyaXTroXmBQ8potnNnhwQJvCtCpz7wzFjSocBeUKFe",
  "key31": "5wML8FZnVRDBWwdyhPXcu2ee7stme1Mu4KT9U8fGUSR9jejqfrtXaDtrjy3TdveKz814pxT8gU9yGzUTc7jDPQDV",
  "key32": "3oHXg6y1CywagPnWVT6SEyj3bsviNLmz41aXHcrh5h8aJG3WGAdCawQuv7az4pNeEAua8S2QcmA77aeoz3gc4cYK",
  "key33": "2vbPVkqudTBDv7CdnHGbJ8XGdbWgx55k8HpyBaM5mVa2WiFmP5B2AZaMghgXwL5eaJezZqfNbhrbDdsCibr4jYUM",
  "key34": "4KENKPqxdEBiJFJxMuL89QgbRbFSYNv6dVi6aeSwnFc3EC67WiMyRLEYYLUNNFFvsLneVJnMWHFaPbkFPBuVxXzW",
  "key35": "2Lvmw5h2GVk48VeydoUhFvFPZwwiZijhU823QacKbRBc9dniRRAbFr7SyQAPodpAdFdyd2kd3u43r68UTdi3UoF5"
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
