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
    "5eErtQwMyyJRPKxC25eis6AnNmRTXtUgU1U1dzJtT7gdUJ7Gwa8kwbCVw6LpgUqfUy85RXAPhkH9eP6qqsBC6sgy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kioQKuHgFUXJnTrZxYpzQHU1ASf8mE4roCipqhXNeNHb5EVUz5bFDB2MBuD2NN27HyGW4qLvRmSFUGmKUusomZE",
  "key1": "V41mPSKrwXFv8KeB9dwghsJVDrqUmXNkkoabVpZkEyPxxPUSAyMq9vkjUxK5u4UVM3i4djQXadxgiW41u3Js9Ts",
  "key2": "5Ext915Kqmmd3si1rj1t9FSgxRPzTzRUnYFA4CzzvoFz2WUSyFobAv9r4z6AfExaJDfAoVpHBHNMRJyKAiLnqBdL",
  "key3": "3tHkaf16mTBvtMHPeR9LGkoCPJk286ArZzf9z37rg8bQgSMKj8yJ7MscvduHV61WkDih9zsUzScR8p2RB6qiDLcg",
  "key4": "K4ktv4zg95oJCwHzm3WqbZKqwuLmL9NPfsBaC9pTXitB85feSBJEztadMFL1ejfyD2h7mc4A7u68hx7Cmj2S1aX",
  "key5": "8t6mr1RZovCm4G8PPvqcj6JJV4HtpJSciuwLpAZBC9iuCh6DQd62vnozeWKK1ZWFmjLPqRgDjDib54p2j4JPs1L",
  "key6": "62EyGKYXhbuGxvT4DVGbyqY1Qpoj9YhQKXVS6DgmAdkGNECiVCisVP44UQUoQTSDvR3ki2tbqDMwUAJubY9cNbJ9",
  "key7": "2NsrdqZRGQA2VdGM89phCGxMj7YdcUy7PVbkPLUBWB2qxp7bUSsy6VUr79aCSe5tedwDiF6gzbR6QcerKF4g7GMz",
  "key8": "4SasYJ9JfWg5oHBHSWHe4it1uUiiT5W6BenCnUifsAy81AnfCwSsuc76TMbxPVRk6WaDoWxGJ9B5YaQKoXuKH94x",
  "key9": "36DeoxziRs3w5PabVmyibgtwJEkrTYuzY2BTT8fNjEAHPN74Lg1uW3g8L3DdBv7XnbH2fNgB7uQq6PvZUPRkToQ6",
  "key10": "2RgMWLTKmwQztdTGaMWbRffX5xWQ27mJozMDvMm3QYcoMVbqRTGrm14YHKh7UGBvtKWDV8jEtNtwHJrcFnoD4uwn",
  "key11": "3uDG3exJuJj6cj714fhZHwXnUySd5ox6UL18j2pBbixaLkuCr18YNVkmDP7FxZ15YSHbRQvhQoGruFqm9yzQ54oC",
  "key12": "3pQArDbbnf4F3CWVDcGGsNWsHfxvmCUGHXFwWQabgYbq5cipceCPwNdNWJyfGjTknpBfRu5JShCSnpc2v1YrFT8B",
  "key13": "XZksi1LVBPnxuGeHATxd6PmQq2XKcmYHKRRgw5gwBV2BoSnc7uWNu4Z45taBZjpjRQQop24hpcVrwgvhTRrVofN",
  "key14": "4UESTx9v1J9WmrMgbxqH3jhCe9cd4QutXuhCKrC5wSkgJbNM6nR31iU45oUuAzSXLF9414j6ju2vt4fSF7tZjTo1",
  "key15": "4u5YgYXVEy92CBZwj5zJNyNTuCEoBjut5b9RPRSB3aHSCbnnk7KQwDoDUTicTXm9WWiSYtvtapW2mEg6wciqL6f1",
  "key16": "2eiJgMFMeT1tFGJeJr448rbCK1q6WVFC6vftAieKJkKBytYM7eTRibg9Des8cKPRQL9F4FGhGBKGnkbxCafT4yKv",
  "key17": "g497BXGtZ61uWzuH57FPWeKgdYzewQBELmTXkT3oYNc7BN1oHjSYVZrJ4AfP4NnDk6T1rEUYYv7X8a7jJpR1S6d",
  "key18": "2P3xovoETUn3to1D7aLiRfiKQG3KZyAe2YGSzTuHMH6zeNKyivQ7AQfzjJg7PMayeMTKzmoreHBPfBj7Qp4YnUXi",
  "key19": "2Wd6THSJkeWNcVBx2nWxRByYbRXbG53RvT6X7TK8Gq5BczPz1ns9o9jATrs78ZvKyVw8ejqjAqZ7PeuRNYyXEHvQ",
  "key20": "9GzXXsGyWDrqngsX1M9ZEhjZ6VsZkRKzxwDa9jaV62whMqCyZeyeq8dJBWhuFsPh5YGtHERVTeDK5Kj7ikWBcxx",
  "key21": "5ouGk13xYhBjF8RMH4Qs6jNbGDc6dZcdCDaRCkEE5E2HCdz49Dcx3zTt7JueVWEGDQ3yJRSLy9GY2vKkT8hmm83c",
  "key22": "5ULjrCuaS58SJvPKGaKdpZHkgrFak7eNzrK36S27HYP6mEM8x7pTPHiWoSY945coiewZQp41MwmkoSk75wJcWpzY",
  "key23": "3q8tzeSAC4UPeq5ELzZ4eXTzifcUaAVyHB2CVtmbt9xiJ8uP9LhPY1C7VDVvPQEMyqPdxxetArjqbbrN5mkURkHu",
  "key24": "4VfKX5qtZUn6cofKNtkKXPjfaR2J6g7co6N5toJBfzT9KqRnuPCrQsYioDfc9xLoh138EJz25eZCAcU48wnJkBQC",
  "key25": "5NHNuFmTmoiFvApSP5zkr8DSMd7WDvLQjfrbcVCwzL6U64TYCCDoRB8XYpT6hb4YXHUPKG2DmtJkRJ1XvajszsZf",
  "key26": "3A5QCBAjXcjtArsJ938Ju3F4Wu3yFRM96m4q4J48UqkofkTKYqHyUj6pw2Lmt4p16Qb2xwfd1spM78jgRrfbLAwt",
  "key27": "2gALetZN9SpuyzKmWPyDbVgkePEpgNdUrgRtGnhLYxTB3KEHbG9ch8CKdTMDCn4i84jiqfAheoscGm5fzTmGrhNH",
  "key28": "5BnWw6D15Xy4LoKMJZrC81tgNfk4d7RF2feCFiznAKNEpWYFRvkmsYmmUyDQnw1TkxLZ8FNTxWTHGWEevuG4sxfN",
  "key29": "BvW61XUuXZs2jR79Nwg1SuWKU4sEsh3znA42gwvr4HNqmsaM9AryV5kLvs2CmJmAo8hSan9Mz9tuLmD7Un2kg6T",
  "key30": "512ZcQ2hZx9YU24PoMa2judnLdJEzjNK2v95z3Ar94d2Ko8N7sRkGqcuZtsGNSn8kdWwkpdrwtB8jWZstbcqNxFf",
  "key31": "3VSxrrGMYkzwMLC1WqDgRHp4ppM8EmjDr6DpW6oAjp1MF6PFkMEk371BkJ1NBahSdFB2NXCz9LXSM8rYUN7dpJC9"
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
