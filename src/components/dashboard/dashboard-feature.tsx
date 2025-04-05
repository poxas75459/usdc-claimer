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
    "3xVCshnxZHtxmbfQ79NnapcEj2t6W9sAmeCPxt6tayYaP6EBagm3WM6vBo5ZkJ2oUvsKpA39PqSCdYgHMCgJrttz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c2tYoNQ2aEwssXShNJoubVpd34tB9xzrjzicpkh1ZyAU8tMTby5oeiFn65TC7hNvrCwF2dVE53puKhyor5dvaSw",
  "key1": "5tRUCHPw9Gm3swxerbQ8YgeEMvRkKLvLVfzGwE25JFyJXGNzsF9GyrLadENLxWvm4heTTTELUqFGUYYZe6EWcddN",
  "key2": "3eGyZ8benPccLZxoauCyCEsSLjQHQ6hxPRJnHcV1YBLQJKoqU3jMhAyiDRKCbPydC2PJnTAfruZAzPrmCunX8ss8",
  "key3": "a6YVhLjAK9yVj4xeWhdkKTsJYjse9o2uPcHhrnr1k8bjjkEswQj3WQfXcQ4gPaKGsC6hbPjGLtiJdMtrYmkoav5",
  "key4": "2BenHUXP5ozdch9m77rQXqHXMhDYD64qvNU1wfSxTbKk6UHj7uYD52eB6zhkAdFDEJWb1vpgrGaDUbo7wNS7CWBL",
  "key5": "5mva1V2zAVJiNXJkfXtbWhK6X3wewA2xdjAmQZ3Gcj1LPwozL4TmpVeXa8fGq8qdfU2V7KfSpZZn5gjrv112rmpJ",
  "key6": "4bFeTJieBXqPUvGGhBpKfWxVbCbrCRoCfDAnY7CL9VXxRP7AJh6oHwQbUCP81Vg1m4p6499fuPbDSN2kQAuU9f2x",
  "key7": "4eAYhFuWALzqKrJD24E5tZ4P2cnvWgBDQXnYNBmGNAJBbPsREMsC18s2WpFbTYGqXhUzAjro7fUqrJWBjuacFHTS",
  "key8": "5BFR1sHxsW7ZT1XqDoYEvFPM3F4vBTWrFUJFLfjq1UyprrNNHZaNxPfsGpNyfTgbL51HCfexJmtkcPu8gLLKkHaR",
  "key9": "4ENXUSYTqbqVMfgetXKiQZ27VB33ozDU8gT65qewi4au8oi82S8UimxbG3HQacPU2g9UKzciWD7FjCEJEfGJS6Jk",
  "key10": "2PCrh6qrqcfSvsgY3XDPTTiPau5vUjVvnkuj9eYdW3FtQnH8CDco6rMxQHu22FDVjFaQqHzXxuCWe7y9am5F6my1",
  "key11": "4Rr1ffqHc6gwkMxj9xmuFmRYT1pTda2fh9pDCv2nRowaxsdrdKjzTdwcYjCfiATH1PGtRym5qiFGZY3ufgkWoAYJ",
  "key12": "3mznKxiRzoVKfr8T5WJmo1GdZuqrmexbLUw6uMG4qyd731yNeqdaPDoJnzqMstNNtinp1S3W2sB4FAZUcgu66SMa",
  "key13": "5KXboXDpsaB7CJkCptMFWLtTCVtXQnb8YANxAp6bsAj7XjMKvEQdXEZbqX3X5pTckJ95UPYYXDE42u65HKG8K8yz",
  "key14": "62FmfDTiKNdKjYteb9RKqodfgDVpTYQnT9ZjBSGonTZ93WVtB9GDH1DDRR8K5DkSjGpysugcMZxEBTPY2t6ZdwDK",
  "key15": "3BNyMpnJwWPSrFufiMde4ckh1nRMmxRpUAtdA2ULLFtnpKgEXVx4wDPU3eFrq9mbu25ByXXdLPe17Y56KSHkKi5A",
  "key16": "FdHetVNBSvbtCsMbeLicRkrjEvKc8bcp4X1qR6fow18gqQrY2tWehfDkPboUBn2hPUqXh1Pg4x7ghv6R6XgUN7Y",
  "key17": "2rSqFdTekF3hT74RH6rEdrcsYYB2MTqJaBdj1LsUSE3s4q6mf2BRdkKJAZ5Hd9FnKvoC8PKjcneYKSaczi84UDuT",
  "key18": "3evHb7AE2gUN3b1FdBFDfgSbaAeLgyAqcySkKLD8bXDH3jyezYdd8TQxYfTG1QUZpHV3heNqKC6zt8Yi9YraX6d7",
  "key19": "5oabrZbPAgEpaSUg4GR7hzBuwN4C6GEJ8b8ym1GtuMYRJE4GiwpXJ43k4rduk5UpHLtJ8rV4rt8Sv62hkwPrTLPw",
  "key20": "2WTuvWVM3C9tfW6BAstyHr1bBmjwdmNXfdX6KmgsLHagwxDnThsTqRH7AhN5p2noFmTnoYmxDe9KBfbn37N1tXXg",
  "key21": "kytDUpg57ysF1m3Ktr2wZFYN9tCuZZhTx7fLz8b47Epxq8FVHUx6oZcssBWeniyaZZFQJnHdotNaeZqR8auyNPA",
  "key22": "2QVfwiy38wY3DthPDq225PtWN6Efd9geMikeoNetmXNGUhEQGUhEnv5zPzqv8C4cZhRk3UDiiX68eq1RsyA8hq9R",
  "key23": "2vjZaYFHvLWWXTKXTeqHzM6jLAJYhUaQxqbDkDAt4t23FKkpo13ski8Bhjwr4JeEpsxzuvQ4W1zXg47SMk1BAkxi",
  "key24": "5VcNXsoRfqY7DWJEuJ4hqUBRoTV1zXrE3PnSUAEPN6v6vmeUXdDjaykZNWnKS9vWPx91j5qVWJvE69zxiaF3K35q",
  "key25": "WkG2MaUiVwo931rvK2HPzXjzk7eSNxTppDsPxiSdpaXD5uHLn4ESEfUi51LwwmYM8Re9KoQieR6XEvEi8NaxpZN",
  "key26": "2X1bjfUcCCNzABULaKXsBmeZAzCqxi6Jprmh42YhcDzUL2V3o4wGJokZ3EiHn8N2ft4ZoDu9eJXXEDG6hhkcSyJ6",
  "key27": "2m12J3hvaZASaaVNvNu44mDUzrqCn7MN6HNjQxqdPKdKrdfnjQprVw18GxbJcPHGb8wnUChhxtoLDLtcdYppkiyu",
  "key28": "Tibu7PpksdqyZzxKdDQLhNjWTG8CCBsNpTKPo9aYSUehXfqUct4nh7SJrfjHXcVVxWa17EFwJ5jDzcHbNgtxcG6",
  "key29": "puCvepwwErfkKp77Hht5tCgKcgY4ZuvfcLHhgSYQ5cpPUzGnKCLnL7EKsc3zhARyCDLKs41dB7SSjRgFJ6fmsks",
  "key30": "43vLtRNZDqbmNtHviBJBqRmQpgS4QBqvfCg5uUw4dCVzZUEQs9MYY3JagoSF9U27JGHU2hNkN1qwFde4Affj2Q9G",
  "key31": "unTbApYAobZtDYGbv66PkU2jDX8v1Z7VBt487f9uRsLGLBUx74ycEYaK4nMYJSsMrHsVnt3UM3ySNLuBFnEmjWR",
  "key32": "nJAC9XC94WCw3rDQjBcamTD2UBhgeC2LMpoekQrEzBxw6P3jMvVcNePFdYfamN6dAfaB6c1y7G22yzDtnZmb9cT",
  "key33": "4FbPgwkwaPNhwpX6MxHAyCxBGWJVfeUHiYiePePmHG5Q2ZLBj2yFDsMJWSpEUNAcL91jysukHCGVksjjWrrjZpmV"
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
