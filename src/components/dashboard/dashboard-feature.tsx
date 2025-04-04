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
    "2nkg3Bw3uPN2HhSHrzhhYjcQw8sFSkoQr5puF83QGGe39Q1A381xHZQByzR6wLBKLTwTjrrKjXB5qgWGLQaKz1rT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TC243KgmGZDcPVbVxiZR72PY4qL5FFE8XraYspjnynMSeq2NxvHM6T1WFpkPSZvwJLYfojGZVwfd9wD3bCUdzmk",
  "key1": "1Bkfg4smpvNKVz7TdFUTWizMMLoRVKha8szmw35uZ1ioTiXH43EDFqAYNRiVfLsNJKNrkNxxvds7Bg1ZeruGqwi",
  "key2": "5yWSS8dpLtoBKZ9aL6XsDDGLbMSR97NpqbnFiAnbChEH3bzdQZSn66bqbdWm3W9QDaDZuWHirdNmZBY1riRhay75",
  "key3": "2ejcUJ4LiLYgCNyeLJgRLFQtDm66ntN3ek4dBpa9cW7WBiKnQXCQvHBaVkUwygFcRigbuwmSj4ocZ6LBkJa6x2Am",
  "key4": "425Rj3Ufb1s1kx2afZ4gP7571gpg6Pb7mdST7n8J2CxpHZgHq8uWv5xaaJfmN1JcNiKdXrk5SBwiPSb2wLyejnVu",
  "key5": "jppKDeb7hXp5xdntNWxKiFamHSCrUVNNhZcHfGhixXduBkXrJev7ieWrMGEe2DTymDGPAbVbEVQPVnZPxjguPUX",
  "key6": "5smU6pGPsQTdqAeg5BcV7em9nNhxDi4DYzeALv1ckDfGGUzyHzXRU4Kegbivgq2enCVvUNofdSVsXAjKyMh9eDgE",
  "key7": "3hD3iiBmkoNNo462scBADSk4S53STx43CHA2nP5FLfHEeWWbPxQbD4Xfew2312CgkDnwP246Ue157KFSXekgdNEc",
  "key8": "2PuMys5BEe8PWNnag6gVtBnjsZPAi54PUpSmLtRRuhQiJA5MNTtvkKgE9ZP21hDdqJsfEzzYz8VMiBgxvUeAo8rA",
  "key9": "M81i3MXYsjkViwehCgDUXSSDFZ2KbzcYw3XayG7YTENJg8SeADZGVmzD45QCFJPP9LBJuA58NLTZUGDTSCkWmM5",
  "key10": "4bFeGem7zQKy21Eu4nJMxujNgd8RhWJQG4ektSVmwUB4vygb2UXkk9giqc8XxZDumzGpPFxJngSUanh5wzVpqmpH",
  "key11": "238dqDZg7G3x3k5cgncBFB33FHA2PYPMD9ynJ5ciVEh86d4f852Fq1D8fNA58WMYf4YHQhjCjTyxb7waciXZPEhA",
  "key12": "RbMSi9PAc61xXMMuPRNNxrqGyucFPoVUVyMJ3VfC2DrsSMByHc3iTun6DmEhGLAmF7WgGkmArdaj4SRykQWzAKR",
  "key13": "3kWDNsUDhgVXtk7kXNdKWoWtmoscTUu3uE2NWAVP67SEgraFMppqYhbo5i8AfBxoJQJQYEkX5rDw2cmHtG4TNSF2",
  "key14": "2DhA4FtX62z5qyBFDaxbVyBgt5k4vS15wgMgEqpa3kD8guBYB15LpmtMzKALitkkDRyhYnP2HtLd2vD9UNvxecYn",
  "key15": "5R9UPkfzK8KtY2J8rfuYVQkeUPXNiDAxgAzdxjEomawdoiiuRziaZNZhYT5dQZMwn4f3wXf1xTKKjeB6UJ3kZSop",
  "key16": "2aShsKfNe9r9EqfXBnWDbGLptENX56i6UgUemdRLa3pJsxVxZdHREGD1PdoMZ9qh5yj1BhF6z6uUWj48AWsjkubQ",
  "key17": "sKjy2MBngUeQePC9pW6CVXCvayKnR1xhK6Bz9oCz3f1fDJQfutWUT7LtQv38AgDxoVFZKcUn4SHJaT844poSBQz",
  "key18": "56h4VvZD5KGDf1rsQRzrgAZ71RHBU1tTzuZ7xzjcNYRXVnM88NgTHZZpvJFqEEdb2aB7hrH1NE9PoUrXNFEdiJDC",
  "key19": "4iwB887RSzHmgq5f3yhhGwLPSn13fugqUrpocs2eS6RWhz67W8v9N4TWXa3HRc78LazQEURmckxnP4dcBApgiUdB",
  "key20": "2yeGph6ccrAA3suJikwR2tUnMyTZ3q13tfX4ucHNhggf1ygVmD8vjy5BGjQi2F3pMrxRiN1ennXxjJN8fcDY6JxH",
  "key21": "2eNN2oo5mgVv5pbvzNu45252ji2GYhvAGEtDzR2qMjMJb6AXx9TsexKdZMxTbMAJTxZzPTVSHNzW6NxVtakaNuFW",
  "key22": "4JvGUNHTuZhd8c9ffWepwUSRWDXVbX5nZ6JJhwbBbYbevkcM22nGDPPtKNVXNH3H9y1xz2LVp7aP7YwdiykVSdX7",
  "key23": "4AZG8W3unRVkLnpkeYc5PtBhhVDHbfTxNtXxemDtJ2rX6SccA9kE6xiCTGG3aRDAKB2325HMrzRKDNVh3oJqZ7ya",
  "key24": "36EHMmw5tLZQ1GymvHL8Y79sDkSRcxsDz8GjcRaQGJeRTUoDp1Z69thS76AcXFotzXMBBUexNo9xph9XZ56ChsFY",
  "key25": "46wUwrSNvPyFTK2FnCePm7pB6F4ZhPQS3hQaxzNdR5EbzGAoUHx7QfWiMNNo4HMfkR9pDGhvfHDw6zA8fNpELQpe",
  "key26": "4i2jqoEXwnUB4kFDt9HtaxW5JHHpDbbZVyjjNpY5g3P4rJLgEuh1VS5RQzb5W365LYvyejnUSDYGRko5cCy9rAzF",
  "key27": "214z9azw2CX6UztuyF7euZCMSzdu41hzboe9umEkbUgrveZ3tp8i3CoRXZ32h7jQcAQf9mg1EfsMoW9tRFjoRFeC",
  "key28": "5NqEKgrTk2qvPTJf2KLbyo9PdjgPfcq8Rz8qyGQESTBQVUUzpHKvmMqQYZWsa8f97AEuqH2LynmGxtcm2Pu3MLNA",
  "key29": "5s9DP7QU2PpTq3VyZCtWtQGSQJygwFW3M7ejmdoBVob4FG2bxhXv54vAsX41HC7hV28ejh234FY9rfQaUZq95vgr",
  "key30": "3Xmf1a7ULTvqDmVSPs2no4CPQXdQW2N1NAVhmB8AcsmoUZmXtgjx3qVPhT2sUXaUhZ2xnZU73G3NCrp375PvFyzs",
  "key31": "2GimDgtdMh5t8NJEyhvQW69k9CrdcVpAi6eputWV9eEAVYvXhgSmCmNdZ2U3rsxxf6kuWiyiq8BE1DFerWNQfMHm",
  "key32": "2X9V6wq2kCmRehGWby7tAPGEHKFsA1apJipuN8VoboEfV5NWAX9dCP6jUB6sWdGpLFmY15gVNahwfw47TzU1Knok",
  "key33": "4nERcHEbWxFdcKT2ksXboLpCD2a7SFcSuneieFSr8x2vF9RDsnLXw2XVYfiTfUQBeGxQTFjD7ZSzazVduaLew38i",
  "key34": "5Hv4qengq1RWyTGPXiHdWSfprsWEZrq2YX4D1n6y7MUo5sN24cYfyGhv5wStgk933w8RiNAZ1jfj884PfjzwE2QN",
  "key35": "2x1t1zS7ygRuQLiBGaphhpXLjew3yqhXrqPUVwtP9Xb8Bj8jEGRBqg92v8o1HpcmfMjqwWXdMM36HTwb15BT2xdk",
  "key36": "66SbkomV38e9UxGTZDFKfFReiQtN5Cow5nGBTtxko27sqjANQzMGdTWRDEhQ7dVt1V1Dwtoq8jcrsAaWchX7CJ5L",
  "key37": "5imZ1HGTDCUeznipRBdYWD9oXkFQqzH9qqYToYLdPW2MAZUCDHEjqtJfQqgrjgaQ3ooGP6P29opZpvUrbKzpACrs",
  "key38": "2UP1FCMyhhkEA6s7HJUtCujJDe3x2AGz7kDhpE9eREjkJRzi38pLKQM9BNqRym4e4YMayBzzdw82aCprZBK5oXnK",
  "key39": "mkuBuedS8erwvGdu2isqvtXqcYxebnRnniGNBNRkdKM55GFQ6AfZpNLVmpub27pfacKVepDEtbvJHzfshzdevX4",
  "key40": "WDZAL8ZhLy23cArVT68EryfX87oHDzWt7XCNBaoWVS1LVodb6bFX5C4qF1t1wWHq5GTiUw1EBrxVfLsmnhwA5Tj",
  "key41": "2XBNu2ZLXJ7DYvkc3kUgx4SCKCSscHb7GQgSbA1MssaPtLhZUdnEbF1crSgMcXU2ANDUsdEwcZzPxTtTku59M58c"
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
