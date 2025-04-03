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
    "2rsfJKnYmWEKNxcCxpbPNdNVFZFkBF3wHpG8TXz4b8sSysqdQhgNTwewPS5VgcNrHR7ALsD5j3AzyKbyL88AcW5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QLKhCLL7q2PA4nmTLNfrTACZ23Rppr8hq5cAyro3KGn9wzZyDs4u2fthXhxZNSUDRF33JVU5ZVmYmTdAYc8Rxf5",
  "key1": "5EZc6yabryK6UaTR1hTojUhRcxfXncdYW5QS1jzMqdh7HswLLcXZcLasoEo4kKaGhux2u25mrWfQRnZHdb73hLth",
  "key2": "5tsCcSDDkxzuaJaPDGah3ECjFLYYJhYfZZfmo2vRoCzHB5U4xGvJdErvYFMYQx6jXw981TrapSpv91femf1dcBE3",
  "key3": "5iLVXzyXRFtbywS3QseUn5m1uuS8LTkjZ9MZpp9G8L68Y23gRVA88ZYKzoh87bnuPLLgM8GxoiFAVVT5JNF8sTim",
  "key4": "5BveMt4fK3KCwsT5bPK74AJHfM2axGEy4rqWZ49cvyTPQtDz5gYbVexy3B3Ex6abYQqcdTVrR1r9htyAjZJLhSAJ",
  "key5": "4f9rN1LXBighY5tbb95t2zr5o1Mthx8jZ2vwwxAGZQw5Pu7fVU5g7RA1Td7zvW9cApdso6Q69fpkGV3aaczkRyCs",
  "key6": "MyriUhWyKFK91uneBwM4ohimtepuGruimTSUWEekgjynRzRNoDKWFvp9Fwg8jpEyoDmZc8sHVy9j76NH1c8ntuS",
  "key7": "5oixAZGYjEbAzLGLfv8YKwNYTagaYaj3wD4Xi9VWtEyjCrA4kPkHLFUgE2xfm8pEMhgLtBTfzX6qByC5B46ZZioE",
  "key8": "2waT3GWBDkHChPCRrRJEVry7LUZchegB9XhvFekZ9d9Wmjvh9Tg7ncokxKz3G65mkzCNKcXFdZQBVWSJtMJQjBHJ",
  "key9": "5F7rTv5n472DL5QemQjnvk9376FMNhy4x1hxA7sRYHhniQwfPNE91KXfunFtSVech8K188Hz9ZdNjauPvyNNeDma",
  "key10": "2Gk9YRZDGwKAUydxZms4mVXcGezWSWW6mx26KVWBZa2kqjpWxMESk8E1GKxhQT2pfUcLezXquYcWxH2SESWpqkF4",
  "key11": "51u91X6n4bUZaYax8FFjr6mNrUG3FvUERzL97fuaqWz1V1j3ggqbm2nHSbnNUDnkkYxBtXs3oDY2tmqKSJF4nLc4",
  "key12": "vKrnGMnGnRAtWWvnWTMT26xP16ucvpkC5ZCrNihQxr62BKQjeCTyFBLZWmEJkxycADBiomqMJWeUogrf12ywx8X",
  "key13": "4Mfd4JB9VwD2nv1Y95FuxTDXV92cAaecCLLLF3srpFS6sLr2Av2XuwcrhcBa1pAZinR1RVdmr7tj8yi9z26fXVsZ",
  "key14": "4Kc7t2tzxpun3GG33WoAfCHQpf78yxxLgXmjFBc2A9CyCfGKnwHZn8U1FHk5954SMNKoXMZwUWsnFCcLDUsqFtbC",
  "key15": "amopnjQcraY5aH6NMWYe7hrXbNM56WxN7iAdVCeHHsUfkvNpaLwWtZ2asLj6KaM9tvm4wiJsS3E26Q7ubUZ1iep",
  "key16": "3uyD21o6hkQ52vDN9YXpJcRaimGeA4fLp3ndKnyLd7S7DRsQszVPmAV6421GnD37jszetteSLTLiRYGE1x2rYcZ7",
  "key17": "y2tic4QwvD6fLFuNJ74y3EA8jdwYwz89RLTrquXEJVdsSHc5noL8N9Wfk4RUv2PfSStN5vYwtZDuGbwUAFHfq1i",
  "key18": "5Ww68DENMLC3FeY4RSu4uCFytWPbXrqEXCM5XSznyrDkNuZkc6vsbtnTRB4asjtEMwaj1qxAo94JRCsABvHb91QZ",
  "key19": "KQVUEP4nxJVXZynfCuxTvuan15ER31hN72EFwJNTdfbSURnVgjrNty3DsGU7K587WVqea12VJ9tgJYhaYyseme6",
  "key20": "2AineMafiWXKDV1kQUrYCVdrMXMZq2FQiTXqqibYEZTg9yn9NkYPB2S3CeQsmiKDDnAY7pS1qpaCtYUbofMA3TjV",
  "key21": "4XVvgYJLe87fZ3xZv8Shfe5mLKPoAMvfxvPSXdi9xtJaHiAUqWvfWyxzv8EYHWscuPeYnGRGEurKn4U9qp7Grh14",
  "key22": "2DkMXJZyd468F6aS2fZVKt1nxDz865U55aaziiDrDugVzmjGJ6WYjSVkybZjmUpy7G4UgVGVipZncrCg8RqPc3Nk",
  "key23": "58tLi1HbrKqe2w9RtFAKTcV4yyKHWFsDZ5hSPZxjHPRJdmW7WQtb8huLCSv6me8cjxAJ2RiFsbXEttBeFvCbFB8M",
  "key24": "dehfU1fVDagJDA85myAX1WLVQoMg7pudx374AXmu3ks9GeCgXptEFSzT5mCgABWZcGgVtp7RjomM3kbD5M9hMA4",
  "key25": "21i5esMGxx4972LfdTzTFDCYZc1XFEPNPQNS19SvGntemSHbhDzVekJrMCAmReSMymddueenYpfyvvf3s1CaHp4X",
  "key26": "2ubFRdtHmETuWY4RFacKwerSTseVonpf9MXWb4rZv7s9Y75mNX3kAc3k9U5nYzkpieD5uzEUv4bukiqjyqkXP7x2",
  "key27": "44tsrgT5BX1MduoFwGExMRkoa4gzgdAzdU2S2Ut9ECNS4spCA7WkC1L6VHmShQJ5P12VHe6mFFikadudf9wRh3k9",
  "key28": "5663TTCFVWxPzF77z9vXneowwomKkJ5hRfKCKaP18XqADygjtxd8fWqdUDPYKqrSgxHaCt3X8i2NSJb7MNmcxCRJ",
  "key29": "3m3zJUXmkztT4sHKSm17rSjsU7ojREV9WLdagd7wb3LnM6s71MxzQtWgr4e7eH2fpZ5QZfW7ep2oqvffvaTgX42S",
  "key30": "3b8xaY8H1xdJC7t3WAJ2rF4qzxkxf8zW499fKbcBGSqfsoNHCeGhGGu5WexiJ8tJamv3HTCjY24TGwxh78tYHW4e",
  "key31": "5nWZUrHXUL1MLbeb8tdCibHipFsoeDAa1bBRrW6rdZ3ckuq42GGzDji1nPMQhroi1K45HeEAaGpdYwPCxPCJMzjt",
  "key32": "kXjhNDvtkuVQs41APrBz5r3CSM5Rj5eu1D35SVPYcBPHuvfMBDczi5XLgMDuN2f1ARAbrs9KeMM6fwZQdUQPoQt",
  "key33": "2vkkuyNtuspf8brDSEgCYhAKSN1hk5xoE4hNFHvj5sf9AuPQpVasiC4dK6EDC99pXJTDM63CeZRZPofxq3tGQWZ3",
  "key34": "5UcuxGLx6qHgfw8XTnzWYytzezVTQhXMhM83FgTvsBZnvchn9KJKfvfraQWupGT6BFX4MHVXFQYRoEDrjEuZ8P5S",
  "key35": "33c7PSLzCi7bDkHVpdVw3cwsw3C1RwECm1jfNZhSLRbhJMfWfYGEAsqj6TLxTi4cJK95QBDHWWBXbNBB1uYQs4S5",
  "key36": "zSQ9Biayuq8VgUVJyycNaUG11dBAjDHfEmyeFMDNdsg97nv2DKgoGduQjnM7go8xpgWKnq1xQz94NMEtVAbzDLD",
  "key37": "4XCarsYrkNLbMwGKDpHBeXg29UfiWMG1zcgz1fcvVB3cYNp7qfVU3LkKo5eDd1kVDwhWwdPdA3mKtr3qzMDdJjAc",
  "key38": "2jzXqGFL1XTkDRRsjoVA3ofq5tNrq8voScTRBfJ4vBveR4N6YVDj1frqerp44dQrC2e2CWSDdyHQUQyjpYTAAH93",
  "key39": "5vLnqCh7BDC9CyBJe82TLFXPQ883QgsRGx19z76sENv2HjpVuWgscyFNpvquLrb6KZTa7wzngXpAvdubsgPrQ4MB",
  "key40": "3As2AhpY23kV7DdR6eRyaChH5hNwZo6mWW47nSxBa7S55Q9yk2u5tmPKW1KFjET3XRS75RsSL8SogAjzzSnMbJU9",
  "key41": "3o4W66vQSfFdRQCiC4NPYhqf1eaznCzFzRVrqJ4Jvaf1Q1mojjdDqwURHTBBhWdDAnGFFEs9XAjPYMLscgGCxuVp",
  "key42": "2FJn9Pft5WnuQE5miFw3P6yZg8ash2tX1vqb15knSztF3nZjUQYoUFnH7m7VHUKXQbbe2JQccjo2cxkjowSx7UaE",
  "key43": "3DDMdM2EBuYajgCfaWdaFWqU6LXjZ9WhX8t3r8HcskRZZrFAxnKAzZY4gTstSZyQ5PtKEGFNyqJKwgTQodB1sVs3",
  "key44": "4boUhttPVVUgGAhwmhopCHkZksFvQj1UjHjaGB61gd4Yrxu6kYfaSgEFkGTsgwbyB5snP2u94XGnwBoCyVYfBLsS",
  "key45": "5aTdShH4ary2K6iUmDhLfo9hhxfGvdzUiVo16hEJnj6XKKFprHxFq6jh6pinxzQRK9kXDYftpUSdnhatG1V8FEyD",
  "key46": "5WJQ5HtswP7EQVVRVs3gP5ScZxzzyqL98y2nBYyktzFJXJ2CGcBLx2uwzJMYWZfthAHFWxcNsdKQALgHn7Zh6N5G",
  "key47": "Bf8t1j1NVp3kDt27s74UoZrSMwg3Y6uNLKmpSx7ujmfUrXjiJVoMbjAeJnhy2EtBzZh9fVVXTNXxULT13CwpwFv"
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
