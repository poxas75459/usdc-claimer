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
    "4toJP8229X33pCUb2TgZ5kELeoAzHNE128N3kqfEfVFx74xG1Nrjjh8oUoyPY4TJi2hQNq1Gh2yqZGYPk66e3AVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L5bzYsN4DWDXzNmWNGTBziFPx2bPhK272JMnqwxjKfX7mVSVYqtm7y2dgRT8m9o6VXoCZo1XMqQEafuHhh8Kfq3",
  "key1": "28LiaZrPWatYp2N318NTyhDCFXVsBHGRSP7dn3cABU6yrwJLr8D3vvvFsaASEA76X8PjsUa9biDMw3NSTZNv4iek",
  "key2": "5M1FTNUp1CjpydfhvaezZQozbnjSoR8speuLShVr92DRZ5R1TrWLyMXLd5QJW7iW6K6MD6reLXGKfuLkUNDxeyAc",
  "key3": "2BA2tErnuEuvw3DNmQaTk9idoFPKn9C8Kyo2hnjJmcF1sob8oEQPqprg3CSx7sF7ts7NbimQT7eyM9weF5co82k1",
  "key4": "55uCcL3iw1FpNKyVsQYtYQN4zb1HfbXKUx2Hmvadr4X37feMY3hF341XcXR6xQdNMtMcjeytXACc7mg9jWADvSSv",
  "key5": "2gKwZD9Y6qG8j2zLJSxtB9A5Uk91vnBvJgXwa4oLkuSLyckqWTmSLoHMLh1ggKSf7fjFy67DKmY8fW7W3yC14Cwf",
  "key6": "4RhUc4BvgvRUWnfPq28SQqYarWKUGGn2BuZ4J1teWP8arwKEpzw2A5sfxdfn5WAfs1jfVUEPkbncHSu35cCys5Gt",
  "key7": "4oqW4czzwBNzZpPPKCFKvxq8V7BPaLPdo3VZrNiy7muxHrwDZZnqHPkKLLidBiz4drFdCnbGn8eFdd5K31GwPRz4",
  "key8": "3B3uecRFixNiA6j1NXypyVaPUHSneCKyb5s4XdsbGkyfSFESYcPhchAyihj5nz2z7kwYto6UFMDLuaTNtiB8Bvof",
  "key9": "2kjKTQAk2zbDGci1xg2m4mxBKPRe9whXJMhyFWpY6Tx5g3tdFtoWbtAPu6qtDteouzQPcsszqtujtJ1d9gXFa1Wo",
  "key10": "5g6NXYNSoje8PR5cx2QdecZziNrxjRfyBCSWh8SGt77L2jZ1cDejJPeARyKpfcGob97fdw4PFWtyoAUCRSNUWsQo",
  "key11": "2JP6CE7Wxwvj5JmYpJ5zRF2qBPdg5QLW8B17AKWQUnYFU5AnnqVCGRtt8t5xBeMqybcosfbSL4XYNLdWB4BVUCi",
  "key12": "2xByL7BnUMV35tqBfCc4HdUtifCvWqX2VDRn9DCUGHp9VdzBsQaKe9GQ73XVnAzLsToApKEDCfmhzTfzxfJi6thz",
  "key13": "qhZgDbwKeierWCZP3UQK2zUqdvZPxcyUPKv17Q3iDvYiqFSU4sC3LQhN3Russ7yitSxTARw9gdsHBEuRHYfgzZx",
  "key14": "3GR3zyEUkJf1MybnxLuSstecY9EESCBnqxuh5kCFbkXqGGbJkhm39UnXfaUEUuhTAtpb37TMg6ajUjagFygWix8h",
  "key15": "2YwTSGZiojYPRue31MTr4iKYEPcmK9MsXSgBPMgjwHkYRbX9TUjxLAYGa3Q6WbTCeg5MRvNNr575rhF84JH1Lnuo",
  "key16": "QUk1CeaZ5o97mfYHJQcLU2kfqydPq6y4bGTRuj9Xurdn3X49uF1uAQnVkcB47JVt46ie5esHcRrPZHccTvwPzUT",
  "key17": "5KaVDQ8dBu7ZPSGonphWvC28345dzfuq2q6kJC5qyqRpjLnz8ZHKPTFZXUTz6GGMNcwJ7c5W7x1ewaoe8TnJ6Xiz",
  "key18": "5PGiJcVxTFgVW7RCBdTPY6CLPAFcXoRFouUDCoUdy2yieAuX2CbcvucKr1ADQUhHYsXdd3bisBzSrnEvSH1PtfZL",
  "key19": "3UZpJNADai6mmhHxEHFMD2QcsUzipSkfR1Xuybfs8CNVkKZQ5d7hVKP9GBegUx9noDaH6HVSRQYGsR8G963xQ11r",
  "key20": "3W9dixN8UydKFriiLY5CPe3k9gJS29qMMA1wYL9yEs6VDLSGM4dmYpPfzWijgjD7CEQ6nUvAT2VebP3eXuKh1V2m",
  "key21": "4eThP8rM9G3LwmTNv6kbQ5KQVRuDshYyANcnhskCMJJmZ9PQHbW6RNSAtUaiwXEUyhv2SeoTVsaTbfRxRSAwkNwj",
  "key22": "2PNdAw4pwiT88gm3drF94ouGLSk5VPNwCVm4kFjTvjm8cWeidtxuoDEfoY7isoQ9V2XQnfT45tBCV7DyMCqWWrdQ",
  "key23": "5CBFaJHLekd5sXtua21226esaEhAjpxEqJSmLPoLrm4WBraNMcN8dXp95LFeUgWHHEEaPo2RPgwZDzPpkTJ3DdG2",
  "key24": "4iqK5oJSmdkZifrkPHKMv1CQf9vq5kFWr27xj5boPFnywVcQApwRQ8iaAj4e5cE568mTiG6TE6b8zG7aKmeTPxEX",
  "key25": "3KXMttYwefpqK5j3VHzQbGKR5DgsJAx665iMvAZoaBUDXHHaTct6eMfMqjJJyLaikXYkQJ4x7SSPGFSQp7inPpTP",
  "key26": "2FMSvGjH4JzByuSsq9zknT7MkrxEpVsScF2ykXBMX8RviMfQ5LSMpbapAXsANx74grziFiNdJd1Cx1GwH32y6C2c",
  "key27": "5r4UhEL8FNYXSCrvEus1gpRZyYV2kyHb1LFapANzRPxqWiQoUAjE5DxTSBViSiBmT5XTxSY3cCyeUsDAVcNQN9Jw"
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
