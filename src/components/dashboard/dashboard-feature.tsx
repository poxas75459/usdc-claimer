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
    "3ZtKh56Q79btEsvMSsgeT7nYcrDkY3X6zfjp6vYFTJbL4WD5SbJtomymiiaUy51fxozT3zy9gBKo7WNGuqz8WQbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gZ3CuHLgpCFFXRc68zFe5fqN6uJ6tCfTyxAjeDAJYxA996MVo1xGTTWZkfSAAkCo25Xgh5VtKyey3KVuJ9LPFWR",
  "key1": "48TuVpw5UmWTa5gCUsawbZY5G2cNDADnzSKHTGtNg15fojox4U7kedUhMvA1yFzQ8YvG1YywWi2X1mDbumiKbbHZ",
  "key2": "4no9VWnrvmTvHhTQSuBWajrg7SVWRR4ee9BSsQBwzGw3vbR6UdJu5GkfVAX1YX1wBYq6NEj3Bg4hF1mYw8ws1vs3",
  "key3": "5uhrEMH1o5Tv5wERwae4ZLErLeudrEXa8WaX3hYwxhAfbVzUouPJXMc2pbo8qqBKeoNYiAExotVCHXNdao9ibXGw",
  "key4": "tbXHdipDoicoMpwHHpBoxkX5bAo5L6VNENn2A9bpzayLepy4ii3wscijGjZh98FXDro114VQpSK5PrY3WdgotjE",
  "key5": "5x3KPAUFvMugukZGYsiwZkNkf7jdj5LqLAdHy9oLgcBRiCSnckFLzDr2mkC8SHdbyhQxpaFJqF6TBqLFKxkdoCyq",
  "key6": "hh8shp8RBGMnriuMnh9gZteihhgprxxGaQfQmmk21uDuECa1yLe7JzDNQzACfyZtpwuGjVLQ6LjagwpjWm4Mn9D",
  "key7": "36EdpdQ4X5G8x43HhXL5wV3gJ8MSPXMU926hLwDc4pxrLtDxUztLWMMZ9y2MkgDXazRGGFv1H8UF2b4EP8Wt2yEn",
  "key8": "5BmKSp9gJbH3ccFC7tw4rBRb5Z3WYe7k9hBqn5z99ixmfNR3nugQTdRbztwSgek2xCsFBGt1GwMM9nR4MuVNkwCR",
  "key9": "3Qwg4jU7L7oSNaKZLox6Hei5m5sxsnRQ28iAgFndodSCvKC6JUaomVsYTg1xRpFEkTpcy2wjGYS6Sf3xhbdJywW5",
  "key10": "R9qwEb1GL9AVL1o3jDkuqwRYGjbzuT4TijkuT5aLrvYpyQYvTZ8TYa3nn9RN5ZbMXAujkYHFBcUHTL7fuNzueXB",
  "key11": "DV4jjdPriDkLyJKta17y9WWURovcTE9bYM8nKvC5E5Jz1X793ZCiMMLb4Ap78cbcq2DCtA4TpxsyZYF2wMVE9oc",
  "key12": "2DtXgLxF79zwhFekJGMyYerx9KQpSLjJMuhsMK8DXxKxJrZyeTVrjmtmTJzVu3vGXfWA89SBEiz1pVedrBHnuLo6",
  "key13": "4M7w8XqU3b3UdW12VXiiqGELzzGosQaoa5gUzu78ZNbVcPWEMH8phNsqoqJTrj8ZSYgnvJqgqBBoduTTPBM9GmVm",
  "key14": "4hbphbWBZdHU3fTGap6a3KiA1bPfn36DSiHUkf1MSnQGux85cT38DkjijWLoG2d6kqDQozbRRUEQvkrEB1yvo7mT",
  "key15": "3LrtcApb9vwENo8shAiUHzo4Kv2p7kySpTri5hmvUB7ixwe174CGoNzyeNiq5oQPrw9S2KSvM3bZYiejDW85vbBS",
  "key16": "b8ZmGhEvP5GLjMKnVxLLikfCwJcqRuNt7UDfbRRvneTA7162ripdVgL6551KHCcJFVUVHRph4EFTd8jaH22vmoy",
  "key17": "2zBtPtnNBddBjmzvRhysVKXohvg2f5t96L2GwGZRyu9np8RbH8dWzcsC4qMhNPng42CEtRV4MyqzvRN5YmEKgYkP",
  "key18": "DF7CCnbi8wrXNxziWxGcVaM9SiH4U2gGQF1r7XgAzyj3B9WeBiZewnKdpTA1rW3mGmvRw5yCzuJThKSRwMevTgh",
  "key19": "2BVSPmn1gq23AezmVv5fwD824DGvAuB2wNq6oTHsueQn2r28QNLwrJSJaGtGSQ5LCf6gw8DaQfkZRiYk6u9NXRPv",
  "key20": "42VtCLpqQZr1dPRVs7F7Wn4miRnqPUPQATLEjoLveVdmvMET4NzEzJZ1uofkhNsMQNtcUVm5Tjxc6ZpFdVXxAQ1Q",
  "key21": "2fSVuAhQQifHUW2ELLNx4ryPCzR9vJmXmYb9nui32Ffce6yF87f7Vq78MRZNdjwKXf35huA1gkq2HkFULzsR3mB8",
  "key22": "3qCHBVCvDhtPgkmy2x3uVqw4gEaeTX3Kqe64c1WevmEwXFbHgcDdt1RD7Tm4AAgjQa35kMcZMu6Vr3EswrWkZq3E",
  "key23": "M2TAMs9BsNrBT4tpzFc8VpPjLTDxToQvWsMaGfLZcVouZ7uBNEjSDfwHQTLyGk7xA2Mg2NmngqYs7NyrRzaCrne",
  "key24": "5xmyA5SGSF26wNYa2Yj9Tt9kEr3nVYkujUBK35UZZ7RSGHQdv9bPDrK9tkmk64RoP5qZq4TieGv5XPABj2iRB8pC",
  "key25": "25L6yWxou8KsshEAK85HnXHMyU4DmxfdqfXcMhJM5axAUE2GKvQzjHWBd24GErrnzaKA6czvF2qBmD4r3cEDHibL",
  "key26": "dGDC1VgyYab9DX7pjTNyr3td3RRTPU5oz3GJKG5ZJCHM1rYGas8bXvbwQ2RXNctFKAVCA77tvnmEuFXe8PTDcow",
  "key27": "n2iv7fU3NfGc7ufWxe44RQLxkxALham6gaHW4VA1V7TTbJACLTzHkPDgQRa1Bxm7pMLe7GrHocxJSCfwbhYacMt",
  "key28": "4hyUukqqiLndHx2yVBBrFWMKnXC5Drv8jWSsxbhPeWny92p5AxUnAV6HknedAKeP3RN9puApBAXkxMfkfEUjHHY6",
  "key29": "55pvTy4NbMQoZSu1kU5jVuR6LABzugbEbbsCPMJTHVNFTaJUPH2JtDmFBT17A9ocFAyzCHZ8REBRcWoEpo8GEyua",
  "key30": "4mCj6zvnuaBvaN2cngh7CZLuLwbHs5LY3qhcaQ384CSJL1YwC3NZZNDCzpABWDgYtewEAwp3G3VJZwNH3G6TiAGF",
  "key31": "3DBn5hFnQiyD7doRyzBjaPWUxhRHyvJNgaueG9QCPpKAFXbLUGdErvMAmCJndBQcZs4LbmuBx8Q8Tkgg5n4pUst4",
  "key32": "obC3fyTwkimt4dCqPHwCbDeGHsswj7biAntrmGsodokFLHztEFWsp5kxtv2GafrYi2vLVpebLLMbXWRrTJbA9tw",
  "key33": "5FVUzcpvMaVohyDJSAJ85e76QvrDgEtj1VVBjaNHZyc3ELc74TVQsSxPq2hTHda5xNqNKb575GRodARtekWGNC2f",
  "key34": "bKSEzYDFdkUgzBbFZBQQBcvHSQcdQHAeW8MeJPCKUYBqGpU3duaKreLeBMWGhUopfEesuRjCNw5HzQ2kUmbrsgp",
  "key35": "54Kp8Gk5WXDrDyt357bAKZqFxENUEmfuacDcWhV7BH7cgWqeGKuLY9fHBAbtwdR8j6pXUzGQ77yS4y8nT7DxWAAw",
  "key36": "21GL8w1UQjJtCgktQdnFmqkMwdnqZKTtroRf3JhtTQMNz1TwatKWW71jWgb1cmnS3epqLjeBHr3VEfkzUTSz7gDR",
  "key37": "3eQMPPkckTzxugjd8DqPNSbZX9UukRb3Y6mKQMPAKiYt2dcZTUBxW862Ld9tjv7j7xWMbAzpCoQAXTdAp4xzM5ph",
  "key38": "3YjaCjdRNvqGRa8HY4zbpSpRestRWefGUDMHk7JTe37ubZ4ZCjcjWLmru92theCAuYvAaqbtt7rLsfyuSJMTdGAQ",
  "key39": "3Cxe86S2eEaVGpHfMo87A2fAbyUqu9MW2vaGafRUDfKWJXqAKhRWMrQaV9uxSHZexHL9nU6fWGcxYLTdF7Hw4Poe",
  "key40": "eaX785vSGbd3K1dAkzpewaF4yurJYfgWs2BVJzB3BcQBTUy28BJp6ixw94Kgorqz8sxomohzEj866BsPDCyT71y"
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
