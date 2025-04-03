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
    "5vqjJWDzrsjfTdeZX1NCbeiVCZBmuKJ3EFWRCRzHyZkUVGDUpR2efCrLYsvitewQYnUKRfxLkAYuXvLtyQFMQXQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gCoqX4Mox2nPR1rxbjvBkjyrSYMCTPyPPJgzNPWWjCtuFDAiEH7xKMnXtW1kupUPaGGCs1wQUnXbT2pkyD23FQj",
  "key1": "rkxxR1NeuigHDzVZPMnDGQBs3B94BSaGevVcLUu5bksKkwsRo8ihsabFe77udqxZ4W2zcHPNa1ZWrc7cZbAAbV8",
  "key2": "5i6k3hk48LpE1NJJM7Cr1qGfG7chCycEAgH9PuPmA4uWvYbmq5hF3tM9cEpcVPZJbkmzXKxb2MkYpK9X27HQzaTL",
  "key3": "39reWzSAGAqCN7GYT6ZHM4sRn4KSfqMpEoiTJxwWx2bHRhTMDjoUfSbrYn2v5PfzsH1HwwJWTQyxXVMznpzdAxom",
  "key4": "4wsZ6i13jXWitZ6YJefNafmzXn2P1jaPp1xm9CuRo5eTiExLD2AJ2syCcXvsJNsPuqfb8CKQ2oEXf9vQm1qtXzku",
  "key5": "w6yUSSAebhhCQNZTdoxVYEkrDehC8QjYnE847TMaNN7UbnWx5EYjuspPNCcLZYhsyheSvZWdgFVPHgu8SmuBEwV",
  "key6": "24bY8UcyQwnNCEhyZEuwxiQxF5rxrcmD8d2VjeC4jofSCRDHx73oeQkub9tJ15pFyvAyqqy851hgFxStrYqCHUDN",
  "key7": "CrqFfcv6k6VfU7e11Xum3SwWAcCbLzNjbKNFdL3ohSWn8Myq7tRac2RXmi1kaxWnVCFqpUQ3BABwnVj5tLXTReo",
  "key8": "25RdPWZZL2gs5TFLAPnnmAdtcDBqdNpYrYTGRqieCeZ8tXrY6DVvek6QnEHEhecTCHk9TRzrmVgpgQVWM181GwyA",
  "key9": "4wrjNLJwMXvebWkgAvJnkt3oTC66QwzHoYLvDnCAMdBZnbzmPekuFW985odaUxTYyWS3jWqvxaC1sXFAu6QQ44vs",
  "key10": "a4CwQxGFzq5anf1ZJUzHLV4ZGR5RhkmZPqVSPnMPcF6msnSnMeZBKfwD7mDJL3vJCfvH6bbQESjph5fzBvMLnbj",
  "key11": "2RSzdk4exFyrWRm9TGLr9QbLKXxc7gvhzxN9KW5euY6e8tEiYMuuKYiRkLovJBv1sTAssi3BzQVtK7yzDF7HYN2a",
  "key12": "52CehwbtQ7e7WbCQ9adrGdviTpBM841XdCvUB1NtfHEimqyqfqcCnYAwD2pwWkWLwa2qVRorzhGbk5Bap3NZpB1A",
  "key13": "2hP5QHctg9bVKV7sKTPcoZ6qY455tHwjhU2v4o2LWqMk1rj671ZKDTK5DHQdQ1RFGU6TNucdnX9poMNLgFiQEhL9",
  "key14": "3P7xb1xnQGPVzVjzBK2sRwrnsHunFaCUpRni95pbUfuiVRgzm4d69asYxsNUNarAKAVVckqBowwP38dMiSXfRYKg",
  "key15": "25XZbvT1DHgtj7tfzKaYr7qNzC84AWK7DMuvhY2y4GL912fV7gfnS57BKwAiGJiSPtbX7AFgk3s6hcNAPuYmYcXn",
  "key16": "37fZH7gFpTnQAjFjVovUJFA1h8atDf7mbQzi8tLyT3XG8PLbpcgJuusTbLseRMZxKBa4ShUXhVFsAJAs9HKhR4La",
  "key17": "cWyqy4NgTv1xFM8qbB8yYoSWPVmAtRcvaVh1B9zUY9hYM4CSUuV4r9MhrnhVABZ29Zy7yuqUhMCisfFiAiP5qLV",
  "key18": "5xoSRsGNeR4hrewTCG51jwhLSJ1kGLqozdbvrpamod9jrbom6zy6qVHfGkWAaGtx1t1z59hfttRuHS8TAnezmX2N",
  "key19": "45FVXvbqRzFqQugpBRvVYG4gjWv9omaYtCLhiMWz8J1V18NsXZqRcZ6GeovJhBr5BtV6YvxqRgEErc5iJ5DiePGK",
  "key20": "35fHvC9cGx5TXgXVhdnfF5D8KVuByvdFUwKGfutXNUMpZouRfpeRYNCrimN4beU9LvEmxPeazUMx8NfggVPoyS5Q",
  "key21": "HY5aKSQwKKLuzf1SGjko1FrkLLCK4qYKUNihGYnqVBoQHn93EKMuV2AxFgiXX5vrjakrYqecsPAXuCNFx4gkcyY",
  "key22": "3k7FzhxtebMDFT4cZuXCaPGtbbC2LtjNF3a8eVqYxRFNAJCFjvRnyc7n3nv4BQ2YkmybDsWoiM1yWdD9rev4HwwJ",
  "key23": "64dWZaFtXJ7bBLVHJEL3re2fMTYgksjaCcmUvkKi1XLby6tJuyYZvtssncxkNM3mWmVK7vnGA5EpMCEUHRmpDAiT",
  "key24": "1b84rxewJZUtqRVDC8gQSrGp7FFoPDgLrHeJ6otUFKRCkizbfVpYGUXT5MuFXcLkXATTkWdzEcDPKDN2qZ3tGw3",
  "key25": "4wjJERH3wddPD6Te3xq992TyBCoyDufZboH451ARcQSbVZXSc7JGBJYT3jjjvoawfTriPRufqU7ofR9MHauLKwg1",
  "key26": "4pie2foYLew4Vtggy9wGtQShsK7eczp7gEyRGvEtoZwxgxkZ6xK8LBAjo4qk2P9TkhREzxSfE7qbjWVHFExHWa4T",
  "key27": "5bqHkeH5wTxLL3n2t5rs7xjSSMapMacDB2qJjpqrZvQ6GjRHEBuM6SZbqwgAyVxnofnQVTnyHShNECggxB9sB6ya",
  "key28": "4R79UYLDMw5V74WqhhZn2DtXeEmyVxM4ochA28rPLtY1pS9yGTWVYR2pPUEHKeRJxUZkJzzPgkx9zeUX2XtKRojJ"
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
