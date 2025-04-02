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
    "472n1qoSFYYcXKV4wBHcAupkGzCh5Jvph6J5P93fxvJp4STuBHgTewR3kqG6JYiquqaArHHDmnXQrLtjBaMYzoEK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iyB9tPQdtm5ShvuY5GqwKCsNtrHHXfSW1MQKCqbcZxpzUb1d3Pu5SveeGWM8LTcTeLGwgkzcQQSo7AgaM4z6rwX",
  "key1": "54ca59VETiyjimHTZkzEoj8nVoZr7fMNM7QXUZXMfoAYMdpsxQcw5cF7AxtQ8f8CKRCpqaMWAGzuudz6GrpeEH9j",
  "key2": "5CGXpJJuqCt6CNBa1aeY6SwDz2tbtyxAjKxSKdzhsGKuibW3nQwCc3X1pkmzxLxDaF4nNmtnERc3mbs4QWSMMMhv",
  "key3": "2aE1kZqJagw6W6y3qATYPTgvG1kV9qyqeaaRZExzHcXowLpMaZCtCAfEqYeoj6AmH8ki95udP6QksdQkDdJ3q6CE",
  "key4": "5z84BFCoR1Fc5gTk5gBB6YgVJGNhVWcPkWsbJm6ePA53xHsDQYNoAWggHmvew3KzGHbMKtCxJrErv7uFA95x8pm8",
  "key5": "4Pf4pcXxFP8LymUUsLsePqAYq5GK8axM8WQsUdnBKmBazVEBEsm83cyZR4zpysttYDi235beAhNc9vFMLff977t4",
  "key6": "2PRiy1BZStJ1amzNMSFqfVmb96trAvxWziN8X3ivNdhg4wm9RkeTWCdJqZRSmwPQVvyeQyniNvnbTqDRE5DzYDW9",
  "key7": "2br8rKzA7zU5u9y1wL8vnA7SfxNA3RgH1MQs8ibiAuqVqgM2RPDLSpcouRGcXnGbZwMHwgtYFedBrgc8Kj9mg2zs",
  "key8": "2tD3zRtEo8cPWvxHXYFLwmTs47NcUWrhVr3NJyyyqwyPxvu9pZPmwAJ2zALeDGrrxWHFPMQrdsLjjJJLdm4m7qtw",
  "key9": "prZRitk1LqkVQkJvW4dctpLwsrzX492v7Em6xyz2YzuCrcvk6MUNUMgDmvJrUtMrTDWZWCBJLBXvVyvMHGiCjCw",
  "key10": "5NT8pZwLtWmtyFCGYUZgWAjTfAWHH2RFqMRtejV6tvq4yPthpAbvC7GJr3eQcoQp61GrYBVwejFSyr2GQJR1aFCh",
  "key11": "3oEGXwry3fCfVpkwphfmcU24YP3j6hmGkmFx72qZPfVHp4im94bkQJgvJ1YQq9tTnT6ac3ZSJVYCLA52qqapmAvi",
  "key12": "49Tf5Gx9fHYuFrAtVJYLzZNZ5mGyhBCiguLk1UF7N6UaHLYFoW6uZ9rWXd4xDaY7THfMubpt4gvYnkiCHef8jnXP",
  "key13": "2YSKyzJ4a74CNbZxS8fmbR8WiwDpqq56EnJc5JVunyd4vq5WsKEcn5gPPTUP5r46CoM1VhdbFjzTgy586igwrTJN",
  "key14": "2hfJHfk49Q7x6GsR7ECfF4tT8wpTu6XNsGHzRvHhMhLmgUdshWppY7kgLbSijpZcYtZ366EfRR8JUQ6xVA3fMQS8",
  "key15": "5K4rM7RnYUhxgPA4iHshhpLeMRm2s4vFV5BGKagrHP3VLi3vujPwHe63t7PKdyYZqLuwcaoMB7RBRHf6s618LJ6n",
  "key16": "31EKvYdhg2pubs9mPjLdZC2vov9JR97rKTSuTZffwnR8P3Dhzm3tJwvixfbiP5Mas9FwEN3KkDCQguwkdFSCU2Cq",
  "key17": "V4ghehaZeM47pFYpuDUZgJe9Gsvj2DuDyZWE4LFY434cv3GnekqsoUrJ9NhkNSX47gpJ1Xon58Hm61NNZuptBmF",
  "key18": "34kQVTJZzuaVXTgUYXAqkwrP4jSeqvxXhn381KPnBUah4QPcKSEy1LtzVjbHVaxBhtN1Ppzo8V4QgiymFDt5wMSK",
  "key19": "3pajDWZdteTPfmrTTq9iYGYSoVKx1pNtiCbMRcCBaVYtXgXoUw9ZBVT584ev8DRuzfBs9K36qYYGegYJRRi8p82k",
  "key20": "2nNtMR8vZJ9vuqc3YntvvNTHmJ1UgbQq2H9s3vLrLATd5zgkHi4HUcQ7T3WKGn5k6PBee6chu46Kev3WetxUH6kr",
  "key21": "4Lr1krs8bbZ2U1vYu43ByL9yLuV4UF5Hczp2Dj5JyJCDYTiRKBKqBRb3DvGm43FFmYbZAxeoGv8sHiB3tSmwErmj",
  "key22": "24nGMXH1iy4P8sLahLo4xPaDiAdQV1dkMBuwYGRr17YFhQPhLNrvuediYrWcpGhAaGhReSe5rFyB8dBTH6N62JC2",
  "key23": "2MMhWQYsPQLkSixwYcfbS9Vp123udawCawSMNADsLf54avJiFj1HekH78ac98oH6XEiGotFsbmVZD7whtbkA9S3j",
  "key24": "4fjHUTQQSej4Z4QHHPz1bV38Wi634ggNSEF1qV7AX1xv3WLVchkSTSJUo146TdzBQLnur8C34CyqPGMv9GUoF9Eg",
  "key25": "4mQdXJBxiHjHbsRDr2Xs3Q2jZ65K1MDSD5jCfT61GX85RAVELESms8UxivwaKM3yji4zUDZVwB9k9pBYiURFoveA",
  "key26": "imt4jWwZHWYgky1D5YnVmMwiqAfCBZwiwgLjoUcvNtkL2s4KbWFdDg7BMJMb8wyHeVghMx8kArYNvvELZxHXqEa",
  "key27": "4FAKs7XDXh5DQ2q8oWPfxA3pX53PePxjucrBLNJmE6cmboxppgK1othnno2f4BNNBxNJmn88WNXjMbk2d1Z9pZWB",
  "key28": "4Kzwe3RUkXkrbaRgAq9ei12GwGJbbgrpXpG6QotVBc2bHL8ffdtTfBheivreAieM39dGsT7WAKUxDSponmWWdUeX",
  "key29": "5s8wyMoh6pxtwxSQGmkWbdA6FSoZgTEhRbGwFDcEJH2ZLKPPUiA1Y5qRYXwNNvgQeJwNuRDfkAK5wvCx7id4GDuP",
  "key30": "9RxXs1ZSWD8h6aV5omcJQaRu1GDEs6V46xAxvr9S2f7SL4UGPZv9pQ32rYKiZCCriDCt2rboxYBWAv858KPjeys",
  "key31": "4PwrurEhH2miCqPP9qbA2QtC6PG4VNmr885nf5rQ1sgBMoAoiCGGxeosUUz8fWgBJDquPC38nTz1Ao3QXcgBwRDs",
  "key32": "3yJjwEvtJ1ie9LdsmkvnbXbjespxwhZUKEb34mFyKmjBeKfdJaqZvsiqAffwNYiNSy62bdQpCzVKQdvmDABhBVpt",
  "key33": "2TGBjfYkwW8pEDqC3RLddwATugJu5ApwHD9MLytBAMnAwYHkZuaqmfLL9sqsu3rarFVcdwkV2S6ooXorbmNhTWqb"
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
