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
    "3YYQd218TUr8EcUXyrNBE93vG6Z69Qzb6cpsFnuAPPuqQ32HgyLh65Eq6vo12FKgbAarfYPP9mKNuRgNguSMKXso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5btA1mZXnJQQiBJ9mTzYq5FP2FsSH1m5Ew7AzUApneVHifsr3ABD1udmEpuuSsp2nfThVLb8R2zCcENjAKRw1GB6",
  "key1": "WiojcyNoyraKGjyvhq6vJ61ksc3wk9FYFnbLczBzzMqf2RqjGLMHsVP8L3tguPYENc3mUDmFLFcTMGFVR2nQSoG",
  "key2": "JF1NstLcXLc5UmYeKefznaDyu1RntesCMxTJE3vhBuSb8ddoATF9yQCETmnh4p2yZMsd8g5he9Wsy7j1rpde8Qf",
  "key3": "SYnkBffm6p6fiAWrx8jWuxa77pvHf3nHneyw2bsWq3xLU8Fzrr3WwLTSanVUERDRUaczNh9ubLbpPA89LrkB4hd",
  "key4": "3toDpdKBTHDbjHpJQBSSRLHCDqESXdyLerN3ZxiQyBx3WRgi84nLEFPrpVa89rXUPf4AxunDHZTtRU8KeCE3Kjj1",
  "key5": "2kyswLAZrB649uNfNhtHjLgupGSJuh8j5Fa5oFmbPi3xbASLo1NXkgGWwFgNLjvhJnHeZTCSNor6EWhBnKBn4Lmm",
  "key6": "3WYDPYFCQcBuf5SsSSfAFMschsutJTdZ1ZdpY3Knph6Tav3heuHJqGRRfUQBhuKhi3AHyaSuSmubSqE5SHdqWWQX",
  "key7": "67FsnrHm8f83Tw62sjQGRLLmBmAmFHcd9AMWpsF77qVQNavwViFLFRwkAJ7eaxdxUvSsP34grtaiQ47f3UfCKLCi",
  "key8": "3fiRph5NQDeiokeCAFmabjYLDC7rs4VQi6marATT7wDVmWwEVBBcBjS4jiApaKTzznKD1TpcyCu94AUAqJzEzwnq",
  "key9": "2StDaDNj34vjg5BhnHJ551hKCQXVzhdBaUmFBNGtdr9uypc1AqhCoYaYB8SqLRC77gif9FpVjDyXpGsthyUD1hsa",
  "key10": "5Lvq9aPqAHXKrQsXw3ApBJ4GByDN4qUotXjCD9zJdeeQL6WpbXEZ7hzBqLngsRwBg8P6z9sh8rUqEoEtgM6VCcC5",
  "key11": "Kzuh5RD45N68xdHvmDmXaCcQyhgESnN8PnjhzixZ7fFj7LxSdWRV5or4DkeHUtrxuyKzWDyZbJwkLfPaFsnkdje",
  "key12": "5u8HJVANHKcwCz9reuG6SBSyjaSg4As37xzhQEEkzWMjh5DpUdzgGRe761kjhHiyDHxi728XLKc4sk67YCYNcGEs",
  "key13": "3Yjtn4pwoADFQCExbSrdMJJ3oAbomGNiznvc9sNhipCdQycXwbXZ1SduJvzx7cG7qX2U7JFbchA11JcKtC9YBvbN",
  "key14": "5yzpPCUqvwrvVvyRo4TaC9BRdNm5XCLbNvPCZNFkrRzKd6hzrk4m9c7a5cHManCtPFqXUw7TesLkb5Wxoddy5KUg",
  "key15": "24CGRanahwSqiCpEM3PFNvec1QdvirCreo45siWpd4UHcv5ymvbMutY25YkAdg48iTYezCwuStpZdjj43s6REzqT",
  "key16": "47Vs3jyDUriF5QTUcUJtoRB3vckv6CNmwLVTcdfjcSmGREKNXCrC7pGti69ajJtEeSM5hJiYTqALg561TeTxBQ1F",
  "key17": "4nY333BQUEPTi6n954qzPT6iVvH2B4j2U18dZaKT6LPdGYtoojGiYekLjVrtamr85Mbx4YrcozKVazQJXVRiSjik",
  "key18": "4fezLX6gNX293tyjYbAaEpQjtLAivW5JgTG9cQYs976qzHPPm43P4xbapPA7FfozfAw5htwV5rHcuzST6xrQ53C7",
  "key19": "pM1NAUGdidUF2B9vRvNCeg7XmGJSU8cNmcEqQr1ky4jQtSsQRzbCBa5xE48QVX3V23rCRaV2gttbeyh8haQh2FH",
  "key20": "23meKXxoL6Lwp7cLDow2bGxeLnatj8De5foWnrbzk9U3SDrnJWWFK4jMJY8XEGzfwoHLnkzJkXqGhWFv5Dceyw35",
  "key21": "2yrjHAPZFQXVRENVQhtgoYKRZMfxu7dGtwmJ8dB6gY74BrhtwdJpoxsmA5Kqxw1Va8xxf86LCQnpaJa56pyHWQxZ",
  "key22": "2LQYSbu54WMxoJ3xPDpLWeJv6xE6uYotUTekxwT5zCN1XoH2px8VdTMkHNuocSXbjeWidADfNwPHMP3a39Zbv6EB",
  "key23": "4gLEfTBMzvhR2Jqs8LmdmSv3CxscQptDRbwfDdvpLhZthzjZszkPDn8NCd54fkTNbqPQVk6Y4MNFnX7xu8RCMTcW",
  "key24": "8KaJACkwWEHrPx1QTnQj9sPwehDEHFzQDp5LMrASKFYzqEGknHqnSKoYUPAj9P1bSSNKmZRHhn4A9dkCPjtaRkC",
  "key25": "2to8PcAkMuJec2br2v4XbTy5vmuC3rFfgZkGnrMxvZtcxYTPZNWB7np6CvPEbJ7BGKMG9rEkym6ZUzT8NpRrFGhJ",
  "key26": "3PtQKXEUpa9widzmKDQgtGTfw1hM2UxfDjA9BHwZmUMxLKzo2cLVdrkZ8gFffxGxppgK6EfDo4QfPHLmstkFhucW",
  "key27": "5xiLb9yoJzpUnke6UUmfak5dx1SS55J4kfXyDJH7xNCbce84hdXwwUge8nBeXJcsVejgQZyBXK3DmqMHZvCs7KVk"
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
