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
    "vdAL6R9bmFpx5cdDFqpEsHZma67UqWDqbah29rkVqeBBUYFSxofMma1ZCFjVMFmbGSWFgofBTACEcZK6GNSMdBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wHi9nJgcwt7wC1Vn6b2C49eFD3zj9jjvj7qsP1m9Huibqfwwc84evgKUfzuVMo2QxhFfTXBE5ez932wjkJYDdBu",
  "key1": "5qhvBvEvnJ7WVwUamrKh9p5ReKM4naroAB5CrmMmTLCZMQer1a2HRnNjRjoF2wpnAR4TLhBHpWYy4bKRHNoL4N8v",
  "key2": "3AB6rdxfmWKDc2YUdno52QioZq7EhseSM5NssGh7wByCMccJZoCuPJW4q2Sfxp4q3RviDqJTgsgCbaWje1NPWdCu",
  "key3": "4nBMWnJvECqxs7ni5SNDFuet8RJnm7vkfGehgstjAGkP7kF5gqVcwfsSxNk6GDPqk2BRjEEcipKbT7XTLu8q1naW",
  "key4": "63VF5kKbmFb9PS8coxpKA8PFs1AYfkjHYfxa2rn6GEN7Ft91HmM1vjAw646ejJm9FoADi2N283qAdkBy6dNUsMeA",
  "key5": "2aqZqFNrDyCMWYzu5rb1DFMcAgxuGjK1RRPjbtVVwoQRUHxZ1iN6NPH8y7HthsV3egvZCULmJrPqzyZWSMhXuX8f",
  "key6": "2TJgS8mo9vNA34MvFyVCXkwCNky267NFzDCZwpme67mbdWZet6wZsADbqqFShEmadgxA9qiAsXRdAmYBGY9uu5cj",
  "key7": "4J4j72rZMAFaRkLu5TyDk3CsDXaWQ44f1KWrGCWZBxZzQkQhTr85n1MYQfMCH42vP44gcMQuczNAfc7edSKXtAM7",
  "key8": "3LDs6AJ3nASSfb4p49bmawngA3ugkmkDcYHDPqKf9bMrYsJYzZywUoQi3SBLeRkeCqvNF1MWtdfob1h3m8Ynx5vm",
  "key9": "242JvoYy2ao9tvhRXDZiBxbw5aS68mAzMsJ4JtWTFcBZtWDvbABr7TSMnLnBBxegjAr4T6cLsuSfikfqLyofgQF9",
  "key10": "3fB7xTDseVgYHTHV1Ewk8Dqv8cmqUw39f4EyeBiw7kXWGoyvhdSGrrK8MqPgaFDyXoyRHBWyfZSZoobHN1jisfPW",
  "key11": "2BNiixpGsqSoh5JXgffEcLA2t4nRKaP8NZHmtSemCnUPzGzHqecGK7qvBpifAQA2irhFYnQ5bBVN9GmK3gqxYfi8",
  "key12": "5JPUCHrYdBFidwpkWKC8nCAeBp78XSYPfdBt51ZDxviKHR9bPDHP9Tfu8bTVHJmChuzPN8kQGRGZKkbQ5faCRFbU",
  "key13": "2qr6psGYvgSfp73gmzDYq5g5j8jS6K3ckr9dzAqDgzHjgV5GAbTWu6vE9pN3GEjUY9oYvk8xbzhu9awpDWbSmGD6",
  "key14": "5uyMDeveUGSx9PcM14XamHbWTAjmVsXRhkv8P2YyXRPDjtfPbsx33v8ff2BB3G3Fw3Kj9FhueUmkchKpwTB7Uhfs",
  "key15": "4pez9BrvSVq4E3r5cVmSpZ53r7D14RPZXNqFSteMr7HXfW3CyXvjU9E5AnNoEWAzq4cYMPqsBWrd9KTEZS6wWpyG",
  "key16": "4jdkuNWKSQZEBuLUHHoZBzGtEP2kDpMRgLpk1tW8XtPwRFhYFxkcbaRZog2jvJVQU5TcbJY7ve1ZfmrNSc6okC9V",
  "key17": "2iptAwYo7aHh16AFDSRLLrH3FhZeaLcjidpHsCwD4YiR9Wt8J9ixAsTZYHSYP9K4NSLPEgqT9XxRz8uH1CiaXKC2",
  "key18": "toQmnWzg8v86zW8bMczHzQprkcWKB8MCbYQgCh4GiPY5nkvcYZvqYqGtfLVEj8E1xz7vD8hUsseaUex7PTgN2UY",
  "key19": "RgXwjqeJ6P9Yhoe7x3ikSACwENjYar6XA2YRqKDbPFKZeHZBQ9d3LoB88ks1EX6RbGZd1qwytfMqQSZybTuBRvn",
  "key20": "23RVJM8GgTSxgJxMNP5w2ByRtCCKDNi8BSyqQ4AFTB9oNeXGJgLe4ymuc9amR83qS7SECFjVDZ9K58UxjMwsb33S",
  "key21": "665w75Pnmtao2En1KetehpY5JiLuvzgHHxGExHcgYJGEForYntEntuSmTdBrrV69JNxcvUzD2ryvWQ8uMir34TW3",
  "key22": "3PKvgnhKPAUugKyVChPPvNpLNnXNHXZ3EXeaVZLyzFqVrvhE69yo2vFmVzV67HfB2RXVVwAkAfXAn1w9WyWyejXk",
  "key23": "3u4nx3RDEd7JfF6EfAuW7qzMJvTSB8hZuT4j2DrYj1yrAAXBGostE1x79hED3vWrUkXLds1duUt9FpkQmkqvTvQw",
  "key24": "44VTBcM2U9RGaNsSGGJyftQiA93vkwRaczaafGivrBkdDgqy6iBs6TEh2f4Q7gC431987shfhMnxwyWKVncC8mCa",
  "key25": "4GDGPSJETUaxgDi2GUNqN4Wz9C8ABSmFxLSTp2Mc4FhXiXBibs7Ptxid8TkHPBmrtmCjEQnho3UZUUX7xvSAiEoZ",
  "key26": "4Hu54ZcnkqYByMkbCvGNV7d6ph12LsMMspoQ1bsvMn8wic1oWgG9p4EH618Yh34bjkYjp2uHoEc9K25Woda1J8JN",
  "key27": "5VnUSW9duhVkmpUNxhuMJcvX8VHZHGuwRMuiG3fCm47bpQbrTK4L8s25QstQbAdsRPZM273ozUW5ahYvPbjKX7jN",
  "key28": "29jTDXP1L3kgpUEhPyjKEdvLotowkYqkFZGs8QGtQo4QW1s2T54z3PSBLcDMLMVxSrc2vyN1khx6VqoCpaFFDPSU",
  "key29": "2RF3YLDRZ4VfZF5bFzMHjzpf13W1asGcu6FcdcewPcoeAQo3PNxx5hhCQ397ddBWqvuApMGxri8NsJPtmvtGkTUj"
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
