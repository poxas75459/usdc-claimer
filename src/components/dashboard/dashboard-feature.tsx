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
    "fdiTENC4w45n85VMmbQfVbKuvjk2LC5VpjLrR6HiBh3P9gJ1Ai61Wgpb9V7JY7Ra1ZKSaDP8kZkCotjndK1zbji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xMCJwSt7uGSqVhDo2vEvUfPABttG3nxRJCGT4qXfmhJMyDY7QEcE8bifW3gEXDCQJDz2mBtuQUNAypa8NxQWRpJ",
  "key1": "74U2FEvX8hkjEAq9qkqFxSwDMcYa6V2tdTA5K4qTzvrYbeRYK2f1X6DJbRQKKUw1zhed4AHfdBhBY9ix4Ffo6YM",
  "key2": "2oh2NBSrzbTDyExnb7Q5SQLoerfcz1ssr4RDPUCrMVqMMDRTFnNn1U9CavJLzrtykPexrcCP2PozpntJWjbFesB7",
  "key3": "3VH2aosUTwk7kmi6sRQwCwc37KEvqSvFFKZnBjiBV9mnYHdKspXnLAkJb75p96262QHQprV54RNywcuY6Tzsgw8R",
  "key4": "4vqdWCbPr74briCcpaSKWifUUrimhQowbR3XpKzMnzytj2mpo4fyraY5MDzxiuGXPZcxCCgQba1xMgXNc2YXcGGF",
  "key5": "VdNoFEWh7JqndLt64WuM1RULXXvi5oCTsp2zf2hngz3JCoM97Cy2hx6wz95fSTYdYrPuLKN2VuFuz67PKjyzhN4",
  "key6": "5GKpuXM4pBU8XfNr3WTQxmzHebUmnC2XZqnVCkRiiwLGBStpR68EeQviXmADBhDzwUPwzjXT9nPwz86H2EQLJr7Y",
  "key7": "6395xLQohtteP2ah7t6BWpNqCZrTw4HrjRrZSZVd2oGpTkXT57fYnAb6j9nygzE5e2pGoSs4vygUXchV6jffBh7G",
  "key8": "4R3fuPe3Hexk7grCuGpZ882xx3i8TicbcAu44LaJt6ZNSNacER76upzWbQ5fF9FDzcCnaaxxCdkhRE3KVLQwVteJ",
  "key9": "3QL5c3qKwRhMNqcA2Xix3RfHxxBMwqceVMzn1VTVSBz2wyHGJ78Z9DpLr8y2xwLfjoq6vkDjEAwoYiApRoaE6tdT",
  "key10": "2SAP7ZdZEzZmSeH4daGEaNN2LtWWJoo4rx97pzmeRAW4srK75UYUQAmceAfej4PoFsDmQ3wV3exW2AZupze192vP",
  "key11": "2i2NzB5pMdJ4F7KZVuGDS7FV6Ba9afUvNMpQ7svWPXkfUGUL2YWqiFWcA6NykaYypX45R2qPMfuFzrkTtsVK3L8M",
  "key12": "2EmBCoKGPvgc4dg6pVk8JGa1hTFU3WCN9bdBSe8E81V74UUXqbxs3o3HrYigrFDbLATP2HDo8P4sdxd7o3AgyNvj",
  "key13": "4haFFNbgZc4MDNcZK7NL13YWyPtva3LKhenVogVsuWvAaWiRpRkYtp6cTFpRazSWBk7DBb55Z1CjAQsx74K1PkWJ",
  "key14": "XLzSoUqWQxwR3RRfsWhmM6GVbdT7bSkMPb6u6Bu551PwkSbUgFX3ynG6djVb3tgv5kfHrg7hV4YFkvPh2xbZ1NU",
  "key15": "e8tz7TBp9kMSQyS6XCqpxPeAMtvBZNdM2CfH7Z4tuEDgvB9TzNkQuSyaBjAuCi4496Ydsmz9iJwVhi9EMHrcfp7",
  "key16": "2bjuDPr6SxUXwxxt4c7gXTX1gwBRGLuFJDhLizWFdgngCCrDm3MnfoRzVUcnKsQJbH4bkNNPVPudDHhgZo4H2JzA",
  "key17": "2dviMjxPJNsXRpR3m2tZfw4sfJaUYqQALL6MvBWsXi3BiiXtktmfnrVyY9AoGAoquxaU87gd6uwgRE19WX8e55rX",
  "key18": "2jnZNuB7v3n9UEQ2GajBUzwuGAHbAGAudeE1YjpcU7ZAGtHmPJf9PeDYU8JPPCHzMbxK1pkg3wzP2QwK5SLF11DY",
  "key19": "2P8yL4iwT84v9bBNqbE58VTasxT8j9a1LaXeugdLz9iroMXdeMP6g7HqDo7HxWw5iRnfzZgEs63MyS2bMGKsXBdp",
  "key20": "4xMoXdFxMdzTMj3KJRUvkpbSqnkFsa9ATGHNB16Rjf6XnsbwLDn8jUJFbx237ALda3bwUa1CsYaxHjCt9PrMiaN7",
  "key21": "GiVevYmHzVmKppBmfwMsP8DvBcKWZqvN1xC5gv4P3gzyo4ExgHG5Eo1GeATMLdNSCbJZYpLnDYXSPtPcgrcJXbr",
  "key22": "464AD2KSRwHCXGZrGhWxuWjWNwbXnM5CmABUZCsD1vjLzGRbDqkHcpWz4Qby72ZYrbBZUBit6MiRm4GFZjKCx9Ji",
  "key23": "3DuskHufHhvzjHJHJC4Lon4Fmtm7RRbNRmUABTpzKQ6Raq4t9mw3X5bTcQJwtC5fAb7FrXnAwceS1ATyMqsEEnmr",
  "key24": "waVd9hFVZe2Kou18KF4wKjz84ZHS9oEGvP197kJexfGGMb7NYMphecrjiLFCRTAPDEZ4Qm8eSk67c7QvRTBexsA",
  "key25": "2pZbKEHzrr4dWmJYTY1tkJKYsvmscZHMQDswXBdbjaejtsYLc2PKyDjkXm87mR5FYrTx1XHrXeY8GJRMrtWrZPaf",
  "key26": "3hZEg4L1qN13aapsRUtjQRkKWFYuKREPuZubxg1TngxMEHPSnxex4nypNYFdnUbu5S2W2LYSu12KUy7wK99izXyu",
  "key27": "3W3MnQprqUBv4Y2xmX3CYGaqdCD49vqvDsoLXXaMSEKwqp3CNcAyD5WY6Vhh38VcRsMdV4SawCVSnz9zTDD28PiM",
  "key28": "4TnQMfgThh1YR89rwfYeC4TXoh8qD1anpBsMESMgzs7MxhPe7cAV3vZCVcBkjvZgQwKSjRKozCZedDCkjCGwnJcy",
  "key29": "JFKbNQX9wSiyLndCUXJPrWbuyLX2gpobL8AYvitiD1CLt67Ys89MCY7xeyQpZtb1SgVJKn2AJuLYPiVuWfhehBT",
  "key30": "5hfLD6YhHumpe2J9Bt2VmwFLWwwwqa2Ut2f6Ym18n4JBgStNm3k8fF1GUwnidD6keXB9tm75WTyPF3xtprxXAn4y",
  "key31": "4TFxAXcbMKrWkgjQYsi4Lo7p6YtsuAzuqr3BSBp538FB3MUAkrbN2jCNdXbX5zSp3hVZyfowgenQbGKMjEBhsapi",
  "key32": "5kCpt3WBH7uGQBsh9Nut35taVt7PBeGNmmy9Q2gaEP7Xe2LECq8V6jaTGXp32Pc3nC8zMCr8jdVaK9Wf7CevFZBD",
  "key33": "2AyCbCxapPd2MbmU5FCBhr1v1T1BVHnMXHBTfYKP3bh1yhmVXkaTAN8vk1aUgQHXb39DsmCr41qnEtJRDszYQxkp",
  "key34": "89t9rTv4EbGfggrjWaPQM3EwLxBX96ahVZjrbD2Gv4SR3NuG1kppnVB9zq3u55sG1m5CJQiJ7LkraZf4DVWftXK"
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
