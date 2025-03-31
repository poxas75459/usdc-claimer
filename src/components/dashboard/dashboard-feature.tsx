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
    "3DRn6Hbi8fKavTkn7SZKt4jm85wxxzghgNG8ktR61oJP2ZDNtb9jPnvZofayeSrYmHZNrZzEvK5KFY1isWS6Gj1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GNEZEN1VTKQGcGDVmyMFJqFgq8smujUDPCHPTtaDnVLKSdjMhEr6TumPgRzzqV9DfodnZSmDxdtSHazKnUTP4CB",
  "key1": "4xoEZus8QcQZxAGgRXd9ApzS6d9uBouvurFpBnvJFnVZPV2aEWtW3SB3Rt9eUxWvQLn1ryGLQbvALwzEvxBiyC88",
  "key2": "3UKNfpNyEVmG8gudXNPtRSa1sBWimZFct3nZcugzfBjJkGpPTdN9Jp5nQSFSwFFDihDrEbWWfggZEh3kHv8aSxMs",
  "key3": "5Lshc4C8rmVcb3ef4TEtb3iEzWg9XbEHioF4MTBRtTQ2cn8gfheCjFHfZKDTXopvgTLYScoQPGYboPVfQznqcVA7",
  "key4": "3Afzd4TXB6MgKf3qUwEBMzwsMj3rmXL2zCE7W7in6V82pXEQCj2MM8Y4xm5uWuNAqJbYbyBxJE9o2B7uyW997N53",
  "key5": "5F9a5VLF9BsmZ4HL2xAUDu2GRL9Ch6Hcu1ZxPZhXWUKPYNcai43i6yZNqEcXKFzsQnzjVcMYoHU6P3vfPtb1EcoJ",
  "key6": "5XtDi4F2hQLDGtZZF9tH3myfFtBvL6A78sgMRqmFYo8VFTKzPnK8qPvdmBmVoT6hyxWfBAyU8hoCnvuYCBzbn6tF",
  "key7": "Du1u9AoJFKnVUCXxfA88QgvcA2zbrxSFmuZeLwVF4HHRwFe6cEtY5yoVWHLrVtgxHvqbUBLNv65xcr4W7FMLne4",
  "key8": "4uitcRmuZpWVHyqvpUAkbHUw7enPMX4YJPpj2HLVkjHzj3R5rwkX7WJ5dzAjpDZpAgzWPaL8jtUHy2MeKaBpR2rk",
  "key9": "2vyd1uLhhyApi91GUePAwzhwuCTheB9uYHxVMvXX3S73iFQhF4DuxKN3yNR6oTvE9yHrZureYbUnfH8ijtCy1nKn",
  "key10": "5NGEoUUmkAv1HARVJQ6krrkM3GMdkP7QPxa1yQs3n75x7w8WoTgQ9Xnfv5S829Vvg1n1f2cDveitiN7aEGrZzmJR",
  "key11": "4bj6UwXc9PViWiVyLkDW1os4jaFhVs3piGYkXfuT9Tc7TxnYEiVNyDuG3RczmYS2MDbKeyZEmCEFDiRa3Nm51Boz",
  "key12": "3HMn4m4qjn6BNUDvCkY4BM2aFGMdqLZHHDKNzAxyCfzproqugF7qnMiY1eJPcYNFRsTu9CGoXuAeUrU42C6hrtWi",
  "key13": "64DznsoSeE97Zf1ovpYvEoj61DqDq38s9xKym6TYyywYHE4iyYVkAtmp6NRzd8hRgDo7ErVdvvqCmpC56buapXK7",
  "key14": "2sCyyQ4jTySHmLovCMa6iWcC8ixZVHZX3dvsSNxFy4VmWCAoysgqw2qm9BReZ1PqUNJ4YqArVpRmEE8bpgKGVtyD",
  "key15": "62wLBeoLBNRhaR9SeSpyBzJA1RX8kBUTKRRahNBQup9sBTTmWy7TXxS25CaRNEMnzKB4YjRxaUrsUbmyVE2JSDMp",
  "key16": "FG6GARfm1KvofDUjLpyYFMQaF29keV8Cv2F3cNL7mq2kpxmf7XMxjrWxe61WxKgnKc3Dw5wrdLgTtkM2Az2VYsF",
  "key17": "a6tayiPERiBMSCCvBdyurXHeej2hczBczMXmGvpcNQxd5MPuqxyLVedd39zZNJYDp4odCMVgzypbYUZzwb4qq9Y",
  "key18": "4QBQsn39uLbZJGJLYYeXh8bEWq2RPFYxBXRgcAcv5Fkh3hCvSoecuW5NPhqk2q871WwJRS6LWTb4WkfXf32ruEN8",
  "key19": "iNtLjMw69iw6GqMy1go7tiT9oFBcjjwXWC88qLz1UHi21vktDDw522CkYeHe66G8MTfUwaKVBBPctx6QMAd6VGA",
  "key20": "5GjdicR5Sc121969Jz3VA6kPykrTZza9L3LPaLtbBfuMoHzXW4n499EVTmBPxe261sq4H3Rkg9xkxDb4MeUF8MUk",
  "key21": "4GWG8AV7T7QbXipXPcSUEGx6anFBP91bFqpXCUBZkLppBea3fajboerachW6Yr13KtVBY3sF59wt3L1TZvy9a1mQ",
  "key22": "3iCUtMYFJj6boy67ezZZUmv8KxkRk5h9zZ5FYHepo7bX58AhEf8Rf7KA6ihSheyzavBd7Lm5LULDhnHa11CYMueT",
  "key23": "3zF5xB4w9gTaUxJSs1Gck6QxPrBmdRS81yHhAoDjm1vt8ESyYipeHyNBakCUaH7RGdfQyviWywowDVuugZeZpx7z",
  "key24": "4AdpkWfoMsbHHw4MkRTj6bDHgdpG7KUFEJktbbFXZebnay8ezaYphEAxoy2wXYeaHM4o1z2JRQDYnWaCPsm9FzQ9",
  "key25": "5h23dBSucfvj2SbG5okiGJHQGghhm19H1weZVXsmfH85p5P5tp6W8DVKNnakzyQ1d75MGLQ4vHy8jXdxVUitMXuc",
  "key26": "5jj4cN9DtG7gk2pUZJmnY1UcUqQhEKqtWKCtFCcHWFErCPCS9WdT8VTZFTnBnkNuXGfhRqhqvF2erv6D4JRmuw4x",
  "key27": "4m4Beh9nfL2WbPtE1cuaUr1GkXKqtSge3FVEXEwGqC6yHbHDcYGaGYVNRW7vGpsVvZX6bfsEUVMjBxyheMefBSqW",
  "key28": "ecKvSPiFnnAogczhY8xYwp4SwssxiAWbjjD1D1Eqt8J68GrwpmJwFdtZ3GvCoy2CPAgvFBEeAhXwpKipY8NFna3",
  "key29": "qx7csbv9ayzAg8uoC92PxKA2FVnDP7WbzhV4skQsStZy3sPt4GMmiRYKuPNEhNA9hCTBy2P4ok8cToSkg6GW8tk",
  "key30": "4VDHWcJ6C9Eo1gW23DNZ5PKxwP3ZMZMjJk1q62JqVEkwrgA6Ux6yX6JxfxjjfpfLDJ4kbowT5k4FzJpLp97jSan7"
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
