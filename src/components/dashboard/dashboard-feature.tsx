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
    "4kwhpsNcCAfMkP4RWyw3S9VXAuPoZTTCCnPEdoFXYVdhztNdGk2oid3rB8Vwvc64vpp2L6yrciVjjHQCwX1UaHwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N5QBmQvT4Lg9LKK4zTgwh5j8EBfycdFfAvnNBu1VvVnDRHej3TXDdat6tABG7BJfGtggfjudeiGgDgSJ4UPPSqy",
  "key1": "5Xrp1jrvW6XjSrwaVxP8UJa2AgXu1eWroEiw5aQeWXE3vtwF4PwEf1BbNwcB28vNKnBPt81j2cGJFpkhacDW2D5R",
  "key2": "4gQuTbDnByzjh18vaqkyT4aU4iiR2wxFBHFv3zFZa8PstNcRGo86ZidDG9YKeXpNsygSc8wrrbXKFoaKrTZty2B9",
  "key3": "3GrY8K4jLGySMmEt9nqePTVobDZYyH72YWbbnQFnRrQYY5P8KgaTQhRMepUP7XELswcYjVGjnWKuJ6XXFGmJUWkx",
  "key4": "4Bk7DSwk2haNC6u1oaSNhA5AU6VE5Nk7ZE8buih11h75a2iNmPUXdKKuhftASmCqw3WXhVrENN72Nw1jMUsdcq7H",
  "key5": "VoXuqbmE5XcDVvxJb3s9EpqHdVrKhyYSFJ3upFhQCf2ppQJPYpkmVRtAC2ZXw5jYt4PJiLmQk51RanzvrJmcnnF",
  "key6": "Mk46mzX77S8aCzhyp7fzyZRWuRekjKs318btNwEM6R4PYSeHQbTeZDdDy4qJ23hNkXhNCPdZeoMShjVXv4rHtSL",
  "key7": "58sHw1H8RdjP5dZFifhzjYzgvAA9x6A7WVZfJoeGw4EDNCWvtC5Unbw866GYhgU7ueRm9SjuhaugewKkArDkYpd4",
  "key8": "44LSz7ngyaWouZMad6thJ5NsuTrqSPNLDL1YognbSqTjiePuXaDMoSH5z7hgTR1fZt8G8PBp4qwcqtEih2ynbiWR",
  "key9": "4PQXZpPV32mGMKW8b9yGtAiRNoUrCrgefjttdCBkVtKShUK3Svk6q222b8rc7ExDLEYA8p8i1VdcJg3em4hUa3Rx",
  "key10": "2vynKDhuSRHeayDGFvgFkD3or2REuiM67MFFCXfrsrENQazXXHj9c8js1P5CGdyi3MUyhE2UFM7EAp4EgTRBbmfJ",
  "key11": "4MLxHxbFiHWtvbNvxzKk52sVsi9drk2SL9sLx3K95xHejjimwGPcLrjWFNcdNSWD1bqnpeE3qSnPqG7G1an1LXAx",
  "key12": "VdfzimURQHu1Me6bf9FYVGPkrSAso3xC4kNCrWBxSR5qVCGdFQn6J6jw43dceWNA1Y8co74rTLGYRS6AkaQBsb9",
  "key13": "2hgiEvqKD27TJzKkgmfknfrRwBN31oDj6ryqS2VfHjVdzBLnWbpqMVWqWtzv7FFpe8yhCG62U6V7EEDpvzuzY6DK",
  "key14": "4tDdGnDHC9X6k32Q2k2fGQpwYpRpBGPEjzp4E3sPosxfN2gVVzjqGJTjnC4f9tL7mQMD6EZTz3bZr4Zx6yakMPVw",
  "key15": "4EVBvahyZQvNu47yRjfPcJy7BNvz7u28rNYgdqYPQAZ4N2zViThEmcJ9SrRgYBfXTbMuLg1MkgyAwm5vdacgEZch",
  "key16": "QyGHcsmf2DrrEfb8kpX5fnbQyzNN95MrrXGpzfsSRLC2ubeDB7ZTKxgGcVd5KaYqrUK2vV6ox2d6ZPv1AjjSC8k",
  "key17": "5KcwdoyX5yDGXvHtXUj3JaturrPEKdJEt6gwXPnmAcRgY2wQkx4p9KeJR78BKJx13QdSaXQCS2ye5eqo6opePhV6",
  "key18": "wUHrkp6oMjLWqKcy9dctj9PesMTWhapWGV7yQNyxHTu7jU8zb39d4BeeYrzbjJpqGsjVsSamLiP1ECyVKhevk9A",
  "key19": "3aETqoEycG2tbexqvc8rB6v5qBH6mcqRgGk3PcPPerPioAKd4xgVT11qYVSEpHUr5m46ce1iW5scR2B6SjGkWiaj",
  "key20": "5d6cZJhYp6TKQVnkEMKquaZushs3TaUByEVN92tUVXS5mwy1GU1RVkANBgkefUwcJVyuNxxBFF9Vw4CyWiL2uJ4J",
  "key21": "JSffMogA9QKwdUwsbxbjnYXD2n27fz5CKekxJXYqENMH7mGxadEpmvvT6whxpRLnBsJh4c7vYrHLtD8h4cDsxph",
  "key22": "4p9tidQQpKiwFsbdzmC6hrEJSPMHLvyPP67xfCCwEBcQPUbTSGhrjxWtoZJZ81RpJfNnKLjxBtCQkcFTt2DeXS7W",
  "key23": "4JyAtkmn3ntPoWBAN164QKdLWGSSZKbG2BdUG8rYxy2J8eMJMS54BDuRdQWouUSLxJ29UCQU2EEtaxabJ5BVBAH3",
  "key24": "5xHqjEXfG4q5HmLNbuAYbdFPUQTjXLReKNSk6XfLDEpzeB7AV1HtXbv8uc71rNdEorbXbaGFKiDFsPrLVZsyXwwG",
  "key25": "2VUjSpubtkxVVexBHb26mAh4efra8MkBnNMUomjEgXFcKgt1UPHemWBjZP8hAzZVwWsm6FvQBQA5evi1PPiqdPdz",
  "key26": "5uR8s8kFcAB3Pip97XpaELyRYHfBmnAadavS5vxJg8yctkufweUSKtxC6mqw3hgq5dvc2M5YbvrWXSGtVPUyf5NX",
  "key27": "3XdJk92gzeB5LV22xWtC72SMzYbJHGSU6gLRqbwWao1jUw7BY9WJA6c5jHaTzYsrBV65Cxso1Agq2rEcARQWDUhB",
  "key28": "4gkNXeiCdPE39gTjELk9i5E69c7A7Scgdkh38FHhXYzyv2PgCKKtEcRZSKD6h6T9PfqFFAur3J9DmKdkarqRVyju",
  "key29": "5aj9LUigsXcSVt2Vbfgg4qSc8q2xN3xxYAsXt2ddz2nMhAyggsxVNcuLH13W14dw8RRHopbuCgDv7LtawfApFVRW",
  "key30": "4umXxX3JVFJeL6Hf75cWX3QKVPsvA1i9a7do2yG9N5nV6XA1bX8BtDPLBie3jbbNnrmLCT9qZ2oDTkiieXEYNMwS",
  "key31": "21nxtY6bheE2aHR5wzoH3WxZAHWcpXntW49HgH6SxXNER78Qn23Cb7etresQMpp2EhVfPGn3xKwsPZah3skRiucX"
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
