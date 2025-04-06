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
    "4uedCKFt7XFB9yN4L7yLup5KJD54cgBqvRynSDhktTeNaghs97jdhP7ZgrQaR6p7xD3WqMP1WnFh3o4aawL98FXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WR9reL78zMqUEhiZMUwrt2kbsJJhJ8BAyrYxPhn72tQkKgA2Q4JGvk8m9F36w8s2VCTSEXjy9HozW1foTC96VPX",
  "key1": "31vjC344Jff8dzyqtqE15Q9aqGAoeUt2rrrfYptBWTB8RUyLUm6dvLmG2zUMHJZquQg9mo6Z5bUR336f8Jn3eUV9",
  "key2": "5e42RRXa2gTc13RR27qJMp4oCPFyf27mbLxa4bjPref3U1GxFXiAiqvrpf4zTRzsUPWBBQUiZ3WwEmhabnPMTnwv",
  "key3": "nt8r4wtPGT9kRHJCdZ8q433NMRP6KEAhnkxtAAXj2Yqg7JcsfheZBw1E8ZfxzK3zhBkqonfvNBozZ3Yz6xfqxUD",
  "key4": "33kyML9qMb5AvEwARss6VJdnnPq1tYdY2Ez4pfCtm154ekA9XSnzPoANtd7zNbMQ4AgZuj5GHpET6CCLsJtknUfF",
  "key5": "ix7t53LuRR2sL84MQEuBGGF3jUjq73sCSptmjD7n2ZRJCjEW8njk8fvxeWD93fRZkgd1bxMTC4w2u6rPEC6nxhz",
  "key6": "3cNYugAp5QhhKcoURRSYy38zj7npS2XobvnJBNahSf399QvNhb8uGdVQfd3UizPWyxmp4e6MvMtBh9Avy4ewV9nk",
  "key7": "4eRMXy5bnMB8iwSmYWVPJzPpoEGAcTj49maDxgQbdbF6VLUjbHJEQW4P89CtShry92deMjiVuJqHdsxsNdFzwR9H",
  "key8": "4hiFpYcPiV32sr4WrB1D6z5mk2kxrMk46jVuhe9P3xfHnRrcAxbxC2pzMr7uKteXRsCWb2arxLPTuqXLYr4Fpifb",
  "key9": "59STxdGg237o36YNDnkiXHruqTEPeRSxSzQ2T6YdR69hDyNXwGzryRS53TGY3PDdSrctoeiqjZdn8TWtzfYyvG3S",
  "key10": "5reUfxoaLt4gxyZ6NxVEwR4eEUTMc6aj6qeDhfR6q3ix686qJM5zn1DXWUCVys6zXn5U2CdhyQkoFHJZQ1A8nqzp",
  "key11": "52gUYVirh7CvhUfASazd6MB6yu7d82mg1gQr44wZ5Bvrp6Lg6ufwm5Zf8Pao4sYp4SozJioqH1qgfsaoHWJgCt9A",
  "key12": "2YJShoSErooG8XvjJtACe2BY7MJwwEVZ3fCyBeZ77ArwSm7bgddcqvC9SttQQ8pP7h34kgvcdK9pNbmGX4taMks9",
  "key13": "3b23saHAiS7CMsbHYMdcWV5ufPsAwHBbhqSo7y7VwpN2u9eHqn3Tg7RhdgmcqsYfhZMQN7zbCkELTYkgXpum6mmi",
  "key14": "53BAEpWuwrnf2Fy6iVcXJioLyaKfic2z5YyAc4kSzbLnw6fT7WiPPqFnRnUfqYzKArbxcgYnhzYP9iD5cRZT6Fhd",
  "key15": "5FBZx2mEefqMdpg6viN22Q79chA1P9KQXDFSad2CW18mph3yKhJGW93vNLQjmgFM48r6Hakx69DWr4n4xVmtNe57",
  "key16": "54Erxt9ctREQiw9KShAP9rsGHaMtcteZQTBVDRhT5UW6JhV7G1Kk52WmfC8n3KKUVYkMvzMNt17tCemidiD3zn6f",
  "key17": "392ADDNQDzk31YXZC245KgetyxrxepNLWFTrGryuhR8MVJKfpU9GzDL7RRkcHYdBexSVV2wJcv2aE74h6yyMDB7S",
  "key18": "5g6EWUhynQ8mvGd4aso6ASQyUeV9zmftbP4V4DUnVZwanhaBc6yY6dJ5Mpt3onCvC2kJqBfr3Zg7MGA93qSSvNzB",
  "key19": "3eAZBAcZUe2QFe8qh7uaxhFinkYgc2sFA8GMaB3kT7Y1Z1E57SG5c6YGrHkDRQrPnTvMqPRU9b5NpJNSBnxJGbyF",
  "key20": "4LqhgzNvmHgWT3i7E169FNaBiSojtTPXyQEbHbGLRrYDfPBQXpafohEEyunLCbafrUyteuubQzUY8mVGA6soDKxK",
  "key21": "4TrfrnsNy7NSx6QsiCdmFgKBgBBqmSM94LFnWf9DbxZwYccZqqppQSm1CbTPZQb9CsBbQZ45gk8EpxNDQVKgRFyK",
  "key22": "5ehSS8G6xeTEUxay4AtANjmZfzMmyk1NjYjZwZXXr8XURVMATnALt1vjhF3vqnmYVdBwnA611HkfQpoTVXC1uYum",
  "key23": "WP5XFSBRyETvjepZPiDZrT8G9xEGavTfCZuj87VoEkpGtbMVFss57cQjDQEcwqwUh73Ei8gpEhHLG4hPRprEYkG",
  "key24": "bttbtRqNsNNJP7iHgQoaKjPR7o6JQFBpVnko8TjQJBMwxYDfYKdrhhMY4Z5LUEhPAXiMvHuZYnLciGK93y2beJF",
  "key25": "3X5XvtH5GSthb8e1q7C9aMr1imZ89uPRNJywE4G9Q5uunXiee8umvpeHPJzcxT81CQbTp5Ly2uHXomiJPb9H96gm",
  "key26": "526gSpimFXFXdM2dfiLVYRqSoqjP2djsNcyES4u3Ur2KKmD4moATyCMEacespEEqUYXw1z11DASEuhr99z3unKcX",
  "key27": "3rYkzY934V71jFYxRv5jDSznU6SjHgMcTkyuwRJRqHeDvJ12AszsdwGkxKpwxdfsLSSYEFLJP5xhpfhKGsaVNTxq",
  "key28": "4rrEbsZQJp3F9FRobz9FB9q8Cy9B2V8AoPtrCbxRZuMQUzTnX8GVHyVqHx7KNEjrNCYCTGEwQuwLzeKqbwJDcQG2",
  "key29": "NMxtu9JtJYW73P5BqW9udjtaN5iaa72gsqxVBBPRM8aDjHVykpWgHFSFHhmc2pN5HUXNFVm9bgGKbrCDX5KLN5J",
  "key30": "KNMgf14ty1DUekGccsCix8ozC2PdteAdEvji1niZBczrBw7uD5Ky4iaJqtHTPyTXpsBKVny6Nm7k4X6x8ody47o",
  "key31": "3DBi3jYpY1F3QUBWuya1A2ruoZNRXYB32JX1eWAiVjgPJxspmFun3wsaAgz1YBrwpNV8Sk9Wsa1t8UjMcgez2ZxK",
  "key32": "2VubgQjudSXh7t7BVazJixBAQUEmuwx26CA14jwo6j7vk19T1fgSfumJNqz57L8oeAoWGasNfrDBtjX7MwZnk3TM",
  "key33": "3MqPWXaAdm8VsxmaUKQwR4FQBMSrRvY36NY8dWhpoLp35HtQkjUHux7NAjcAfGhq7pqFT9KAKubv6jwRcmP1mzBF",
  "key34": "5dyoAjtcxBYRitEw7fG1181JyrbyGSwkZLmpduoJd7JcnXXfBUhXETtK1hUMDv9AG1HV1dQBYcTD6dtLB9pbjKY1",
  "key35": "5npqa2A4GYfacoWGCzGSLofCk7VYU9bbowszjPQSPnJM9jHSi46nTCvbk3QVWWEmXuJRpaV7GoDTnWxamBoaRT7N",
  "key36": "2YYGbLPLhr1hbdDe4gfrFH4QfNR62s515GvWUFu9NEQboypELbkrjqSHFhNj57w6AYVKP3hdqMarnUo9ctknCPo7"
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
