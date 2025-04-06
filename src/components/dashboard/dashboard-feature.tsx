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
    "nqt5nkPF196xvHWLeUkqqQK9ww1krV21aHiGZa91UuiNPDFTTqWssLN3FHrwQwurLspuwJYnzfFYHPbDmAnvxvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e2saf5DzUMsTK25pr2YEMZDNusCopYj5tmb7mtMpx1wjxXoRFq61b4HopGN4xbyodxJivKTwo1uxhMehasCAS4g",
  "key1": "2bCbDUpGdva9LVVnB1gzuuzethTnN5UGW4xninDAevCoPm9ZE8TfJAJ32XnibJW3QiojUAwcArZmrKxrYG9ynACA",
  "key2": "4CuddcBZ2A5EjnYwAxCJyFCqWsLaWWwfeK1KhvRZCrLrHHoMmUCW9CFN79mijHmFhXYjtQmCNi5KrXLdqtQxuVVg",
  "key3": "3fVpSFcGG6t4oJpdcPNM9kDTP2VSNFjJmigyodLbaQ38rEFHzS9uJYkJXpz2Dg61X9DbBWAWN6uvGWKbgrJdER8D",
  "key4": "2EuZxQBM8AgtBgCYqJ5GBk4DtFMrJxfFRBTQEsrq81X2xcmbyKm9fDbnoJgjx2YDbwYPP1AxBBTGVQKh2oceS9Md",
  "key5": "5iM2ddDNiZRPnkYHQocVy5PLnzgDqCgsEEU17mwrv3ikEcykp35hVzC8nQvPVs6rBesFNt6P3mma86LuVMjDoMrw",
  "key6": "Yz1VH8vfSJH9UBmj3U9ZFp1rqCW72L8rX4tkFqjgZ4AJLZGcHutx41EfGexd414EBmppipftEetQVSoJMAwqMUb",
  "key7": "4hZq9NjUssc43H3qAahq5GKpSJtFopSwMHxTdZoFxuoJJYrsrNXrCEqb9K1B8GLbUwVX8cSoigDdXSfdEggY1pyB",
  "key8": "4Q1aKYER3KowaUM7Yti5MXUFvkrGCa9AymZ4McT7t1AGGWm35mWrnWX7abiBUAyftQ3iEPMPcbeQyhckYxNraT8p",
  "key9": "3WehsrZH72FTV8wEW3sBeZZX9gXscpaXX4hw4QMGuTfQ44gQfnhttaZkgRbeSo3fX7Zf7HhhL1FZcgTH6qzCmeZ6",
  "key10": "2KqnWcwt1nNtVrVztsJDd4sMyrC3vrTgMzVE2wG7NXeiDrj6pGhcuaT7U7px8gugZ5QQvALEY79BeeeTB8kK5aNv",
  "key11": "4zJKwbvX1AWbLiUAPLkmy5dp1usfyi37wETTimU2zfcAf8THpVo9ri5mcoRNeiP48mYSDfZHMYxLGxqZRaT8heox",
  "key12": "62a4Q3bcVFoPmUYxtRP8iZAk6nmKADmiaz6nDg7bVHW8QtcQ6z6kZ1k1jtA1aaQdtihNm7QadhF35s8zDZ3DTwF8",
  "key13": "3uBBsewoHx3xn2t2V5uk9XDH4PuTf9QwsuppwBJptZA3nCJharGmfnFzYc3VbcAq8yc8rFkvX99Q6EL2anpukpxe",
  "key14": "4dfHG8TdC4SM3kHYZtMHxeVErWJrgVhyyS9GSHgUr797cDXD3Pfm7dgtE8hLPrwSHedKiTauB25R3ci2JhZdnoW2",
  "key15": "63TpbTCeu3PimpMiUGHoN2HeT24FCy8LNmTxArmPx6yZE3WqMB2GSdFpqo4GqyYDZVLXQfLnj9CqpPauj9syNZ5L",
  "key16": "bj3q3EFeDcb21Pt5tdCA1dzGDLcYN5B6bnLsnAtoHSY9EdNoBZEtF8RKKXEU5DfD2exAeEm7tHnmXtAq2uVAv2G",
  "key17": "5A877uTs4iYB6HeKVk1UetvdPFW38MJtYNqrk5hjxd2r1fe8datmyrugxaTqhQYwd8B1p5vw8Usq6zrRMYMsRg5u",
  "key18": "3b8yyGntXimA8dRxspmVcLV6yE8o5HWonWUqoNVVosWxLtYnBrSLTaDMwdErFQsrRU2YXozgFa77AjuYNmwArtvt",
  "key19": "5Htr6DGjwW8rtGSjGYaCj1pkMPGfaF17fK3GfcUTrs7VH3ogFBwHt6da9Z5sqyeWFNmxpTXXBCkdhvWwbFcxfVWL",
  "key20": "4Z8qRPfaoWHCZt7ec18PugWcjdjXUbnTUuQ7YoWaEB2VYBcfrK9dzZLmQcGAMMvEziw4xd8pmRDyDsLZz5Kw1YoP",
  "key21": "5TMg1JE3Jfm3RV9wPsYivcWR1diojs38Yb39vGLx4oJyR1GfcphxZY4o9qoCmHmcLciWgZrda8xSCj2rnBJ6HeTn",
  "key22": "3YKw3Njon5179TWSEwRjhv8bGirVkXRispbb43xD2pkRTgZyoNqdMC9z17vStVgsPG1qSKa6f9GTFtAK7Dx89WFM",
  "key23": "53G2KKA769rgntipkoJiVZbNCfYXUzFxTb9r6kWeX9erzTnvnWU2Yh217sNpuKoWALch4PjXiC9C3XhBNJ13atpW",
  "key24": "LDcsjNYgaYJg8HaKvt4C1RmruKeWD4xZZjBLpgEWhzKQzpyMddw3Xd7CfskUynwbSQtky97uu5eksqez53M7TRZ",
  "key25": "51gQZeKrM2nnBhYEGEm8JoZk7vJLHad7cjwgtFBc8hnDpjoEYArf4AB4hgux1phHNzS9EQD5SwpvKpxggnvQJtts"
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
