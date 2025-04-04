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
    "3ixcPSRBYQT5Z6tyWQ6ZZ6hEPBwboNLDW4r4N7KbLaq6cfCtK2pPSYL2mcYGxJiEiHdq5edzHctnSrt6v3koS2NM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wXUNUqvCs6o5BBw9gGJkt3z5qWDzxvh8HmWnLL2qDmXSy31FdRWymQN2RFKRSCeQztu7Ry3hp55ozo9WCkR9kju",
  "key1": "4MZVGUtBASKdu4ru2VWMdb4FtbzRHwDYcyxQCJWCka3b5vsdtRdvzndfvXsfqSPdDegr7EqDbFuNw7oABmTX1xNF",
  "key2": "ra8jQ1VZATazDBfwezanTi681ftYNXyMKcXdSHwppcsMnjUAsJUPHs7QAjahvcRgaADk7fMp2VB9hxzP4QykPXg",
  "key3": "3ou6Waa9sq915tdXT4LascVtPmu8gWgAnGQoukEanCp3mn2LzciSpVFVrGUEFY9YcNhGWa9gMUXwsGCDVXUQJPqi",
  "key4": "3QoTWHA9vzpV8TgJikWV98zkgfJS2dLDGBcKjfYFv5nDBymA6Cm4jEMRswG3mtHDwVH3pAVguo8DRhqRoNxYSf4s",
  "key5": "4aKpq1hcNMbQvYA5CnJTe3DHXFrevmWsZ9erdSp39rKTs42uKTUdADtTXRfQGKzRLKaLsGhaQBEZK2rHknN655Cr",
  "key6": "5Xu1GHdoskmFbEBJLkuBXdVx3BPqEiVNdhqBoa9DrrqFKUku47dHpF8wfPvnDBe17nFRx7YCNcSRm7DqR8ZwPY51",
  "key7": "4LA1T5t2dCWt3FWyGmp2atCBXKwP2gniVYJJbqxLa2Aji24YWhrggBZ1UQMxVtxBmzM5AVRjJ68y4LFw7kVo6cow",
  "key8": "5mbdhYUmiw4LShu9JcWhdbBhuG1zKRh5RZWNAeYd1AfxLn4xc6k4fTCvPnb8o9r3mQ4k1WbKDv3XULpVuraBtvkd",
  "key9": "4WxG8aut1svpLGoxcjP5kvqneMfqQi8xgJoVKMnjD9L3qZuJZYxyDX2Nj7B4E2UHkdhLQof2ygTSZAvULL7YHmES",
  "key10": "2XmR4XKyv7ChMcR6FJXC99VwZAhsNMGqxQpkshfxcXeHiapWsayqWhxvRdCdwyq2UXzwAHcvg3Gqizzd2ah9r1H2",
  "key11": "34tp6hE6bDnLH4kD69Uh75eqtGWeQvCDBi5pJ62pgdu78ue4JawYamMAcFcVZqadKZrWPiDuEeLsmTfkX3AjFpmw",
  "key12": "4QfkqbrWHiTRBFHd8JtQZJ4xAmNuaWhtVkY2qef9xvsqT5b187s78D7RBp9PGiRPHDTwYH77jzQHnggRddsRYFND",
  "key13": "Ln4pCTr7H7c5g31s7JjZmDcXBeBTq6qZex3DBeW2DsumKcaDPU1Z2eh77XDbJPGMjeXiNd2D1zLQhVi4tmhgRCN",
  "key14": "tBxVXJrHikGkdVrRGdA3i9rZenazyHMZoi7ewHeVwm4ryAgpXXGwM4ZtaiL4LwVdaiX7t6Ah3zHfKDcD5dqgEbn",
  "key15": "39r34yywmijr7Qpuf7FKC6j689GsE72cncxYknuCpgc8LG8M2bihjsjH4KYuJqvmq2wgeHBakESqqP7tP7TCcKv6",
  "key16": "5mEQB8UfMpCT8SFdxzmtRgZCjoehsbHqFsDf78V46sNZNpDA8iovA648YHmen8VEg7AisgwcSYZpaaYhyMKiR4tk",
  "key17": "5gmadycHTcQTKL2brRNCLx4JPZu46oH7UBg51ZVBxd9SU3A6wtWasJKhDCvSpn5HLCf7yEs8pJEtB4sbcUdWCWEd",
  "key18": "LpSKexhSnCBZZafeaxtxP1uB6Uc7poSYKC41kjRP2YdJKRLQk1Kxutm6YkA5MiDrGnkPscGXnDjkCJGYj5ARKUn",
  "key19": "3LXfBTdGKetRfPDswukeEVdAjVVXWb4Fzv92yayqwrR29MiYxuA5J2UMbesCHJ7yQJpSoYdte12m4CSbQtzZWAUr",
  "key20": "434Ycp4moqzhjhuCqzpys9CqTZb5Z9wfFvP9AviaXWkSvBo4MssLQDnXVNTK1nj39ZpPi8qGSzxM4fFAQZDEEimM",
  "key21": "5XLGfjuPEvLPE53YUCXHAKWdjsoScMPcpfHePpuwwxdZXaBnQz8Hkfm6frQ8vmNLvwZ6sWmoyR38vkCzvGqL7QW9",
  "key22": "3ZF9qba3XfhYu1esHd77XTh56EB94mn5EgFUzpLTK6A15CciDp3o1hETUNaEp9XEQSPDryqPhfC89nKeUNKku9G5",
  "key23": "61MTGruua1CEJJGNJ6MMB3K7KwDvDqtLtx6agTTUBc5y5hEiQ57FdPwDN93B3QJuG9oJEKcioJAKm4E11AHsF5gb",
  "key24": "5tWAdxxA3jDXpaMQXU4ZuttqXZYEJpUxdD3xpz66wb3odQkJGLx8zVU77vhJQKdiAXhWN14kAA7zPeSMNjiXKKQh",
  "key25": "tSBqspRoaocmebzrh3nkkux5pA4YeMziHAjTm9ery41wxKuqnjzm66wgqYw61RtrUXEfTxitPLUjNwpCK5zqvYj",
  "key26": "5YFWSgFpMLxsSAmTXNt3rCr7cuS5X1iQcksyjCCEXQtWnqMGHQwQieE8gogWNKLqeHQ5Ui97zG6dw6brHtC2te7N",
  "key27": "ZqL7V4FPyjW4owk2eBNswBhGBEXRaUt26WT2b5KkSe6Y22ybq1r4HNfpEEQ77SGT9479qgjRkkgugXDHhr8QXyH",
  "key28": "4Apa9t7SZVtjTJpiisxbEPgZDbFjDkyeguXSqiFGRHxWG2RZT1UNUGLZanM9PkKkqHn9YbjUnAJR8FGa2miDNDkJ",
  "key29": "2bzbR2pMmec9Fi1B1jJ2DmDPUMLzpaBL8GP6s8nRfDDYhRKLR7xyo2haZMF3X8w5c8EnCuRXZjK1DP9mupwk6NUu",
  "key30": "4Qwkt7Mbb4GKmhDzVRJj6Yeq6WXQygLexDjmJeJsBZYQirB8se5dJS3GUpr4nDLUuKwpG7PQ9gWqs54fa2Jsg8gy",
  "key31": "49pyCy5c25mWhcQFic25MKNDFQTScgUaCVqQGpaWhTPg8EPDuNRTSkJE5YNL4iNLb21T1fGeuh1MtGfx44ZmZBcB",
  "key32": "2jQu97BWfiXXYByLTh7D4XGo514KYBDipeT91k9GQPBD9iddXzXXGv4L7BkFKcCntRMtWSvy9GMrZqLWfEk2Xh2b",
  "key33": "4gWHfGrRnuucG9UdgYaCcLKXmjjzWP497t7JYh31yj81mNiSawtvxh9r2c1e9bxNJ4TWQ6GzkZyqRjA99WAnbTuh",
  "key34": "WsnDeUBEFP5eSaPrsFcfaeeAX5d2E6GYuwXShZzB38kwXghFEatxNH4PBUQEkuCtSDdnX5y5zgmNkuoDTsQEQez",
  "key35": "3zCKxHdfneTcAL6HB92DusQCyhG7vamRE3BKj5V5mcmL77bGtagmw5vhcsv1JT8p9ki2L6QZaJtZmMcZ5sM6XR8T"
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
