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
    "4X7vJo51L1WX9YcTNzoDQ93aph3EJzswWyoTqH5ADm4Mc8pbv1xMuDUonSEMof9LMkaNsoxyhM9dWU2xYJxhiqXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZGZE5EhE9Y4tss2EfDPXj3uQfq2ExbGbjWFcZsjfsWFCfJWQZbnV8bGexPAf1gu6TPui4ypYTppkxWYr9rkHcT4",
  "key1": "3pBCW7Nq7A6QwiHPMRXB2aNRXCLRonrxMpqrswfc8QfJAoxRBkEPRjFCeGp8xSUmaUT8GqJ8XDDzYKaon8Xgdhgu",
  "key2": "3Yv66MPyyquRbyDYJ1duvt3EcwFPkhGzXiSpCRa3ujKSMgsHhJXbz9bje16rzzxsJKmPyGhRdxKWDPXfkffNipZD",
  "key3": "4XZsnKJojSC7wXxWwpwLmAxzUCdePLK7Y85dCmw2HLRMXwyCofrNtyxCHqP5zDqdpmDEhC99w29wwvQNu3pWH5EW",
  "key4": "2ETuRnFmuD1iYkzeRDyureiouEvHhe1P8aTqS5GJsRZD8n6AKbBwRuNcyWgEvr8xLw7vvtCmQw9BuVGjNU3Ry5nz",
  "key5": "2kDMNNXqwBTLGD9yQpZxG2nSXgpzzcjmYPjrBxfPp4MoSm8MuMZWLzXKSU6oaeuQWY6mgMSExcNCtcvsCRXveyfy",
  "key6": "547rga9na2GoobQDPYB85VPJFyy4UkjXHB9R2y11U5pkujXDUHhgTEnVmBmezoS8wu2dLb4UCR63zqhwMThZ95YA",
  "key7": "5jyjG1urYN3bgbosGeHwZKTptYQ7tW4vd8Hf6PMTmzPhPPHL5urrKnSUEsWpzApPypCLk1RZRhB77aDExVSaQsGM",
  "key8": "5wB2FERueVKThNdiX8Jy16kPxpMgvHoJWwC2E7EFXBUGuepfGxh3gMvPkgg88KAywpjQ5n4ifNvKjTy7zZqc2D4y",
  "key9": "4MLEPy9kquDxfnraKhce8o1kb9edKAWaMpq4gqdwzJNmCyJ6Pd4kfs31ZKPa8tZKSuzn3XC2EtXAb4QVpTZtfStb",
  "key10": "5S6bkABpFgaDPHBxbHqgHc9UBPtAszKuGA91vhZsjWjmm9MwkECz3oZqpgd3W8jzakoxAgyWoB7nVRrp6KDYw758",
  "key11": "4QBzmqh4oLRw8T5UjuBVzcBaX59pgCgqfzN6hD7wYTMYkUF8aU6wurED4XNnbQ97414XS41FZuxXW8cA2DH6cmXo",
  "key12": "5RQfhD9hG1ptZkmj8EfxXb2m3c7cwPJkBsFKkNKokcew6rjZv7cnHcVG1ZHUiUuTdArCq47A5SS64HVGHnu8z59p",
  "key13": "4ayEDVxmHp8gc61khHfSXzxRm58hV64agkHT5MZ814USVHY9FwGEVhVGi1HHiCkxDaRoMXyBnR65TqkaQGBYQfL5",
  "key14": "3hPF6Fm6MnGSmbRHcd1RpyHKXfgJ33TfJuyw25dF4R5aoDT7y7QWXnQn7byCYtZM9Xfd1vGeUgEBKoGhDizh2Cpz",
  "key15": "WXNKSc8vHhCUd7Q4AkQUFC1Fk6AsDdepGR1SME7m8QFufmRGYXM4xHzp1dEbVTVP8BRBx6pwrU1P8poMfTung2X",
  "key16": "3zmxnpc61Sd7ARLq4AYjxZN9oB4bMDGwVQUGBg9A8bk4xS1GGAvv5xWCsswEsxMvNsSSTTBRPXpjiNy6Ks9abuiZ",
  "key17": "3sL66f1L64MKazBAfDtTdRfZJog5w2q1AQ7EGNPXMhfYsfiFQNf4N9qhube9DYgguBxqrkuHC7TDZCp9Rcttvf8",
  "key18": "41uqZeQmVF4YiZBgzeSP959gyDuH7WpftbF472z8bbAarPkAX69uApagYBQwWiV6FAw9nKoLGhdHodbygqqzPGSz",
  "key19": "64G9H8cNgPJS6yG7G22QwPH7UiZLk16FcYQg7naJSSSWjpfpmpCZdYNu3faKvp3YUMkjmu1kDqJmE8aD24VVmbf1",
  "key20": "3gUrKBPcG9Q1xkPHmJDxw1BDGoxCm7zDLnahN6SiF9qMyYKHFNRPHw7PCW3CoWS52BkjCtrqhNpaZJgEuFyccMVQ",
  "key21": "nrX8nKBPi93M3Qemhxap7yxFefgpWZmZS2gBUwqtThs8euM3VHCGwTo5zZ6YzXDZHTLZGn4HPXZzUHRUCmvDA4E",
  "key22": "CJw3SLaKRUZLrnDfwZERvAAgScShrcrQjLCYbLbDsiZ8pxj4yNphk8wWDgHW47WYEZi3U9miyYVaSCNKea3o7tg",
  "key23": "435MBcjfEb9BENfHohGD5a8vngn2gge2RkN27j6BJTytWgrTbjwhEWFwET1gAgcMBbkqaUU7buX4TGHopwggV9MC",
  "key24": "5PooDvMKsaMMmJ4JerpGMMVtpgPi7t13R773LmUarGxQRFJJK9P5zYVZaBRF32Am8XtWDvCN14z8pigrpQixpWqL",
  "key25": "39XYz3r3nGc4Vyn3Ejp7No9fGCPfSyGrgC39FQASqmgUQpoGwrVsd1RhN8ouAqLREAACVg59BSadsQK1ZbvNhHiu",
  "key26": "3zEEnAjHePKWTBNtirGeDjFPxBMpgGLR3M8Df5DPovdMecMWKVEVfjS9ir6bzEkT6mMEwKvPARySHPYmPQ7Nwrog",
  "key27": "2hCGq3dupKqMbxfwh7NzDS6FYLprZzszFPHak94pBfKGuWu1peKoDAgyAaJW35rNM3BBgR9LDfeHF6jX4wJVVg63",
  "key28": "2oM8rA2hsawbUugHXNgCUBybcVf2FapZyVSfWQfNgcGS3zUJK1DW4pFWiD2RdoL88BPz2Vd5oEFTwtUV7hJh1JVn",
  "key29": "vo7KJWDBr1mzz4WwCaBz94Ecojhy9sS1pv8x36Rfugdg6JdbhqHWa734QKLLzq7kExGvCvowZQxjY6GZawPPobj",
  "key30": "5YhQsw68pgfCLkYufTDrPkFyuKbLxDxK88fgxi1NMx9374LGPjVJnCUob9uP4ZVcDauDgBBRKozr43bxrq6vEfay",
  "key31": "3XNm5Z2aniBS1Jb3rqgQd8D3Jn8zZ7rcY1xuHN2PebMz3HVJbM9EdQFd8wAK6k2c22muWRwyGFuQY73ixotdqjoh",
  "key32": "5LBCpPPY35tUXUtMo5iqSvFR2L17FRSN2dWoTd3zDFNFjR1MjT3TjWaDqbvD8JikkwGyMr4wdVShn1pSiD8vxaWM",
  "key33": "hJ2xh9id3qvWoizL8AnGRcKv4r9WfvijSMgNp118UrY394K1okDjbSSCErWUq37fsQrsk65yJw1ZEFCouZ5iPzc",
  "key34": "4sk6wtGReJubw9WBYHWaQP6T5hJc6C51ZKMtdnrDtTX4zAh5v42RGVshVUyRg3AKaEvjjbDEJSNQHA6FHd8pvBD5",
  "key35": "5kWP4pV1WeBFcCu5JudMSKBGK27ecsNZ16kS5MqAKAUXbUwAHVgb1bew6ZzgnJ8fFQiQAxsajrEMx3XufsXRBW94",
  "key36": "LgDre21NrQREwUGe8UBgVgYz98nFGGw8wT15GbjzkpBG8qjMRgjDdcS8WbnwJW99SBkF2DSLHrekWXGEF5x8X8Z",
  "key37": "5aKmmb6ig5X42uQtVikn221DJZp2NdDZWXhiNaaV9wLtjVx17JwUbAAVa1QWDhNvPjrhEcfH9zm2Fo3nDpG3ixep",
  "key38": "33L2gHviGgDZEeqiKGzcUd618FFYBt4u4a36TfPfqV1TmtPbkXPDFZfBiLFS69E46Hvuj1Aw8ZiMJXYz1UaRQA8t",
  "key39": "5o18h64sfaJD15yeDHDg1VVAAiWu86wgtKMX4RhuSCu62BsMiotdTs3VbMKjXJ8UBodjPZtBxkh5v3ABxnMsxrnd",
  "key40": "5K6SbWAA9ojM5VjweeKt3P2Bu45QiToinMYVQNCtSr1bGC79QV7vgcVZh6wiHmCM43vXoNPAUn1CJzdyEU9tjYCC"
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
