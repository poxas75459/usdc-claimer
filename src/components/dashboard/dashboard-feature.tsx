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
    "2cr3HsDuwUCTfJX5VyjrDgxGHuGmhF96Gg6ofYLmyQjHsRBQDgMM1hNV9JG963TLfsFR79HoWJMfhESG5cDDKTjg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33LLi2aSTmfgSPCZvUyF9JFfJMnWzSX1kbbebevv1Z6VWs1cLc3K6XpPzDA7XfCp1RXuy4jqC3kdJikR8d9NnKJm",
  "key1": "36Fzj3jwLzd4vQy1qD9BDWZbcQVdta1QRRxzEPs2KJjMPtRaMNjmvS1GoBRavJEtwuHEkKqZBpPP8SZQeoSvXyXE",
  "key2": "miA5FVAs7nLjXD7guEPZh8LPfcEz15cyzUZKMpeQC3ikbrfUJyCmoqKdficN299i2EA49KQrnomVirx87LPG5Zz",
  "key3": "YMbTGan4Qh5mRCeoonYExVZ1AHDMmVnUjy5azMBxHxwvyXBGBNMxUYn3Kd6DgjXZfnKa6dyr213QuMwRPDQkrgH",
  "key4": "4WGa8DDRqP1q66vHxhZxVerQ5Ev7qgQMJWfdsMivRouU4fZhpieYwCYZyjpsZ25Ef6iMXx6FK66qP6uKEfxRv3BE",
  "key5": "2BHaEZkghmdjFs4KoMzSWxEHjM5BTVUkFCAu3ACsyHnAkWHddXM9hwhmBH2GC1GyfFgPwbtCjVZ3LquwKj7NXsZC",
  "key6": "smRGJh7k81xbbNTC1Jos8DqBc4yMamTyMFWgPjiNBsvMRYmxwwHfQgh6fF5XXBxMXFmAxkqx4tcDpQdFPQ7owQN",
  "key7": "4M5DNwWc2iX63rzPef9oXhSXmLxfM6BkiKB96fFfoJofM4QfXwaizndRTtaNgeRx8BRogd6yL5zENKXFu7D7iYos",
  "key8": "rBh8k4KNhAkURENbcftVy4YurBigC6nUmPpU1RVXZe8oP3yHrxkamAMBd6MrMYBg3anMTG7U4CVjRbTPMADPSEE",
  "key9": "Es5YehaZAmneAvTUqfV1Ed1zSBAquJuepKFFyHpRddrBGqfq4U3u17n9zUYr6o2dGLZsVUcF7abfG5go1aMAzJa",
  "key10": "25v54wD9ijVNLkELwUNw9BpYaqvSR2HXzSjsniv1b35DjW64V2Vh2hKqmcTnCcLADzRD4hVJmQvbczkU2cZov7vz",
  "key11": "2Hoyptqby5TsLPhVHv3QV5nbXkErbqJMbVntbjGzhvMokpBvWcsE24Jn9FRkukkSk2sdmLBp6kcHsvnWpFxJT6qN",
  "key12": "fPvxZMVMuwWijLYLYSvcMpamnHu1kAD7jrFUG92DiEmFMducQgQ89dKGLgHQUTUiMAVUSW15qMh2FnihZDs4BGT",
  "key13": "46ACAtLW61aFmVhttEFuaF62aW9mednWuLJRAKiwyYTgfv87WkbVM99oX49gyG8cUgT2R5ZcF6wZJLxfJHy6XLtp",
  "key14": "xhVAnhNNGngVKozYmCNwrUnwstufGXx5TmTWt8Jz49kzw2CXVwidYnTQ63rXiDmCgXTASaMb6KC5xANx7brtAdj",
  "key15": "2UPR7zA6Xep48YLdYkeNuQ16PxYAm29bJvcmu6MMcBUKbb89TvJGDJVt11ggys2Xix5SUm9V1W6X2CBFkCoY4qVn",
  "key16": "5gNdC2ShoDXw6yZrBVbU9fweaYezgd5DxwDwm2HuxMPhEZXK9SUrYW48zzKzpvSEYMyWmKH28Zb3FA5reN75VP17",
  "key17": "4KQibiPwDLKde5tb7uqoAauYxYjw6nvbeS5FoSybkHs5Vg8wFbYah6yGFP5Fy8r4vZMmjoB4VGcwR84WZgaWBFRJ",
  "key18": "5nFybrN6UWukM42icwYUZbaSfgBM4A825iGoWACnLBw5VRP8fbUCmwWDoD9KVFSc5wJGG2GjvCJWaveWG7GT1vbj",
  "key19": "2KqDf1UUNHLo4gNLBsTQVtgmzb7d3uEAznB878oRjRoqk5YkUnwdNri1WQ47i5VdAAJQeckMX6WMzLT4SHKP5FPC",
  "key20": "4oJFi32jfa6KrpH2F1dTpMA4J8wgPqsfLMV9xMH14iuWLyva8H9pYXhmHmaHTFNrt4XzNrxAw1nwzyE6cvUPHrPj",
  "key21": "4PZzgKKmtyMzph8FwFZNg4LXUScoDRyxAhBfzYyzJpFnhHDunrnq171gUrA4fFPMtQGQhYTgVHufpFcAPQSSfdfb",
  "key22": "4dPvn5GyxeS6p54kdqNdTowxj4ZBJqCrewYPjWTGehdKWCkW7gubkZSMnG4gxKVg42CZugxZcApyiFf7Wq16EQ5n",
  "key23": "5TKGg9CDYv16Y739yue9HYVuTr5Vpku37JFhxu36GqhcT6QYGvDTjmGxzEf2qXNu9Czq3kt3YRry5FW5pgyko2QV",
  "key24": "34bN5swP7bujvcgqCNba8EUaxSLPY1SN5jrUkcS76N6gMjCntvyphaB9RRYRRBWeFsmqECmkj6vrYHus3tLoGTpz",
  "key25": "3e476pQCeW9Qq6barq1npzUFf2afsqhrtWaMznzzh9GPjGBW9ByYqrzN38gJnUzkGCnwJbBCRSTKzBk5DtApqixf",
  "key26": "5P15PP79niChJwFfw5vuSGV9ewbZtm3s2Qo71tvgHfR7PKD3ZfuEh2nZ4edHK9b8byD3hhBaFjtki8SNeCEP7JFW",
  "key27": "4CeMMLhmJE5sfEY5fd1Zp2Wnfp3iCSkxgWijiwLgXn8WRnbRrFvFooN7ob9ym3btmCbsd6F6vKJYRBFybvMW8iLC",
  "key28": "239ZuSNmZLNLmL1qCrAZ1oNscEmG9DR7crHKBfgefBjiaJnTKFQjzzPrEq4csoBkxotqaVU4pUHanAfEZ52BSpJs",
  "key29": "3CJMdBhUu6xKxVVeXjw4ZFT294Yh43FqGBwXt7eaTJ2kHBj2N2v4PmrhDMwiQPSXChmiK4jC9bz74mbjNigddBL7",
  "key30": "3kX3CrbiDVNAA5iPzrBHZzu8xXENUEkd1nmDUhQgGsjecpFH8R6tWyBiaS69VM73GutLuLb1XbT26S5SzedzrGAn",
  "key31": "3cNdx8vCa7Giz931pThrEb5k4QHN2BuhoAs9eSThHgj4yCbTpFsb2akq9nHWFnzQiZTqFRtjNDeUv5fdKn82DAPT",
  "key32": "2ppg1Cnoomz6VbizXKvfxMC8TjsjkEuszoxx8LYWJfFYMNmo8gSCZtfYAiC9Qzi2YCzYGF7jUfnW8o1J6hkqducC",
  "key33": "3eaRjg3La9uZapvwxjauW6M1GpXHYUDhMjrDrAbS5ADs2unb2Z3Bd1SZUEyyeZWY4AjMQw4CY5qyzLDbNepqFaUL",
  "key34": "4zMViiej2ygHkstE2Sc9BWLj71nDLUBFiJduUaZ48oDRaz8r64V9g86mN2G3Fg7qrXRniUi2HnUkvNGi8zYmK5Fk"
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
