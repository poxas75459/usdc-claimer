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
    "3xZaW38eqGbs5dSewEERbqFYdTg8RYzey8vroVCQmTFi4x8xSYp62vN5sNnEXdGyzEQHoKyFvUeGv5PEyiZCmuej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QuA4UjirpygSBd48EHHMZicBAVryu7wB8jDJ6swfqXDvRQ5ig7GtHTYmAjSJNP9HZfjUw7B9D82ocJinXaRHJch",
  "key1": "kENb9vSS8jizgWvEzJuYcANh6rnHA94hq8rCETvm5CeRiqhmuMfUSurCd2bWbFHmE9PkAJPNQeL6nXpU7BjDDLi",
  "key2": "2S2DvBUNiirQnEKKDhNai1RzCJxNWr8u2WXLDGbMTVGBMQyCs6fabb3C7wvHKDf2pvdyGQamxJFrwq35nW9oXeR9",
  "key3": "34Z8BXBppUy4bWa4njqLhSpy6nFCXrZdpX84PxPnfRDMJ8MGSLq7H9aDYZSULJ2ktfq4GqTHV1P5ZRHqEzSy3CJX",
  "key4": "54MtaGc2vpUFbir9i4yE7cvL9xnyNqkTSkj3vUfU2eoXHwRu6ZDtt7JdS8Zmu9kiLnJ6RX8Y2pzEqYb2QuNxRCwQ",
  "key5": "2ayQXU8rEQ5w7TM7NYN8j6GpmFovfcabCvo3MWh2JNpZQBaKxjKrzXuUucr77ZFTGKwXiQC7B5adYFvMMNkEqYbs",
  "key6": "2LrxhAbyJzV9For9UtQFKrWYueg8A5GtLwoL6zviUTZ5ydhBtsJh1mPjq5EUA8PfT4ESVvK9NgVSBKohABm4B8tZ",
  "key7": "7vQuRTc3joPY1fbbxEAoUDj45gczNkJMHMrftvztwTJ5nsxabCtFre2zpkfULASoowqbS5tapge9vwCkqP5U8WB",
  "key8": "5C8PgPpoEAF6VuY8DG8tJkfUgfRCrYxD2FZLzSW5ik61iqRq3LaK2xhjdUfqY2R6g2mKqfzJAx5bmkp4MudYNSWS",
  "key9": "5dCmcVeT9UHYYJWVhhBUiWTiJXdDHdVmeWPknLXq2GfHQ9ddoZkUQKwjoFccLf2kohDqsiesGLH1c7Tv3WyCECsR",
  "key10": "3qux8tgj8N6ujmC2YEFf9P6bQafogWq5BaG95GbqEM4ocA7rmQzuwHdwW66BQJ2wfrrqKLYry6txgzFjz4BDex4q",
  "key11": "21fFXD4355sre3yzXMFGbaMgdNpUU1Aq3p1Gn8QdjtHXguwyqM7gK7hWjE5j2AhPHy4YoHfkcdiYGdmfeUMp7Yzb",
  "key12": "2owhjZ7iam7KNG2Ae1TyJL5NzwUyQqAAkmZ7vky1YNrugrUfDsRNoG8W3sBLJWJ7uoLgJJ6SdfUc2SR5W6HufD7N",
  "key13": "62MnKYdw1AkvQTxVtQaiNRWiKYdJCr8XGYJG1e2yXWzmoQdAigV8JjpHM9taPYKbLLgXKc98omKmsKTA1DdPpPX4",
  "key14": "2QFMz2HC5kUAdQgdowuag4TeunNj8dzgHrPopeSSZB9kGRedRSzMCP5ZGVCqREFEoKG98T1rYgkV8FFgQbMiDTvw",
  "key15": "25oBVuHUQdqMenRqmjcGFBaoKLvqLvvCAowW7iNUir14XVZKtSRcFdXd8dCGyh97zHUxX7ax7V3bqD3gNSdxPgAM",
  "key16": "39jBb7438kvgz9GxvVZuxUAdRV5mhH2HMQ1jrggdA317fFEp5afpukMVgRPRV4R77rPi4YS7yeUqMqL5LXjR2wic",
  "key17": "5Hj7xNN4Kk2WHiHzYwupD671HgieT6fVErs2d6CpPYyZKSavphbjWCC9f1RstryAKgk5kqjMbp6sLbNXLkGGRYc7",
  "key18": "2mAbhcBtEPVbTyehz5SVoEjJ8yDdqBfLMGwTxZG1pp44rCkDN4RmqstdnzwKckojUwjfLH3JhkKcD8j7a9pWABGL",
  "key19": "Vep1zwkr6JaLCbpaRSKMSumJkcE1Susm6zuUTGib2uRMMT4sBBvfpgaYtSPfeuHviaX5zJZQtSa1DvxBKjpBq7N",
  "key20": "2YQqfpFL98gdynW5vK2i8a6sJmQM2KbAvteF9htLBazx7Lc7sP9SFNfFUpGDyYbu3nKoEofwcPEodvG6SsV7BViA",
  "key21": "2YFcjxmSVCqw6ckRBmSHsusAWfyEt5bjH3AnK2S117GYiHvt7LQdBLzGVP7gg513TfZGRkeEcoDqyRA3ZASACCnj",
  "key22": "2J2URWQsWdVeMfb4h8mtQEgQFD3J2FxDasdq5Y1kzEeXqA3LSGMCM29xrwdkpuksLDxa4Cvt3scqmAKbV4fEa5t5",
  "key23": "2EpCx4SqHfCxAihye2vrhV5yNMzWg66j89s2jPTvtXU3wEZD4QamLuf4Yuzc3489NQS2vUHt536WVXm5C9GYK977",
  "key24": "4TF6gmXXzgbiAn8oWCN536r8Pb1wGB2H59B3RTf7NDob7cis4xAnTy1ZNn8RL6gpK5ggvr6YZuU7uJdy3ey4ik8P",
  "key25": "2LUxySN8m3koaznxeDB3LA7VBHg19ocY1iDszWutcK7ChWqzCZizZv8WxE63gDTTr6hBYXrnMFjPyku7TNdcNbwi",
  "key26": "2YgegxBHMVtCTUwCgiMxmCg8FjMEU3kE3wuebWiqdAkoYNDupTjPWapiTcADGgiFuFPGKERoZssYGANAKuGiYD58",
  "key27": "2DZviixxLKPSCh6V8z4taAMoQX9SHRysmHm2C9QE8p8EM6RsNSYvQFHLg4xAgx8cynGvJd75NxAbZ8N1ju2LaHyz",
  "key28": "4bYMni1dWEoNGo1gC9D3a32oHzkMZi6Yuq9kZupYRhQfHMyJXjqYWYAnvv92HaaGrf1LfTb7ozmSn7iMYG8txCm5",
  "key29": "5As28Qrcey3NoVFDV1REwk8SUp9eSgGuhKG7XvDNNCrqzAJsig7M5fJ7r44UARNYh9rXXCrGXjtSj7ViUDTdgw2C",
  "key30": "592B9jUZhyJbCFh7JgEBUCYeyuVvDpde7fcvEYuaAY1fy4mvZQtPMx7K8dURRQv5XmoHA3t8umWdDRLcD4ucGNYR",
  "key31": "2n3sBhkgMGxXF6hbhr6P6WRFvYjTZ65E8PHpVs27WjcYuDPSuRkMhFrW3yMsLqvbc9GsT3kh4Ve9Gmw5RPPZfiyN",
  "key32": "3nmADmsk2ZH1QGd6DHqXNAGTDaeazU2uhLZDt5thR2mrecteWMfD16U3ETSTuTMWgjdoRwqWJw4bJNn4jnxkqWdy",
  "key33": "3kUPMgJxxerqoHBJxHJzUpdSdxuDedUqGEHdFixjfGE2xVdTGx8GzzPVxiqziF3hK5gCFms7kpn199oKc6mnLpov",
  "key34": "ZSQtunSuQ9pwnZt95wh3AT7QMKDHThw3aj3x5TsRt7Pv3LZNYuQ4AhCWumMWaa94QpaEBsXcZBimHfZmSfEDhuY",
  "key35": "5j7pLkx6CqmrWXycNj8gNy6nMGHwJLdrg98ncFEkd9HqFGMyW9YqNnQZgTs9WWkWxGAPQzxyJThyU2P4aio8VcLs",
  "key36": "2j22yCyra3as5CoQVqWU9kV5RLPhBUMCGG2ckL5rG7JoZqDMCcvKaJKUzkxhYAEZsb46djm1AKftWqoXFmBq4kMm",
  "key37": "45eq1kyzsxzeHbkbjysfw319NbvenwpV8D5Nbcjk6AX8piwTjjipYXkJECu99r6WNMKCRKLe4BPPRLw6oYxTfxSq",
  "key38": "Jfx3nmqUqJHfbG9dE93Gn9giQPpgSBdqxAY8ksoCiMDCpVLKV7WSWmDsaUuAxjkYKGs6LtRM3zke1rqLe9hUrsW",
  "key39": "5G4DTfPyS8Sv6vEWchVUCEa6H5KRqi9WYYyhSg9sVorSQ971VzWUhrK4ZyQmLyKQSxEpJpkZedNankfYhBMjL1DZ",
  "key40": "3xtL42Ff7pk4CS65xXdMCavr4wUUzh8rad2b6dQhQVMQR4ZJdpSr4KabWQb3TLvL4htKp7QFWajzBDkL4e6eDpZM"
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
