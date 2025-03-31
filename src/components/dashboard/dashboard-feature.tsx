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
    "3Z83G6pPZL2ocdZEXgqQpipNLj9cndZoEvE67RM14AGKBrofenjSRBogXeRMBDvVDE5iyu8c8vi7o2BEcfGeTrPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KE7NBJXez4jMmSodZMrhneLSREkbFQUDHsmwBZpzDHMXxJTgMMwzFnSiCxegLMqzWp67EZ5HocQwBzHC5aDo9tx",
  "key1": "3qFhXKbdN2LDeq4Zzi6UHh1hPeo7KEF7C7ynxhhq7MmBedA2sskrsJgYXdBpuXJgY2D1wMpyVGi8deprx6AWGoXu",
  "key2": "28ZJQnaVYB3XXqr3Petm9xsQAz4x9hgfEbzKDj2sZWwwnE7eLEWF1VXaHdQVuw95hCQQjQxf6aKtXqdevgc3h5bg",
  "key3": "5NoN1V6cYPKuCkgaT7RDb571gMiveFGc7XizQPgPTx58FQZzBAqPoH1bXMgcCACMPEfnyV6hhnQhqmorrtFyGFZx",
  "key4": "sYZh8ZjjXf1vGeT4qoYVbdSGXod3exXoWP6Ats265gRBo12DmivtZPoRC7NJaFnfaRTpMDMc6KwEWYq93EuDNFJ",
  "key5": "39EZrAJdyvGamVoDCkzJHYXauQmgmjxBnK2mu7e38iiB8V2jveQLKNFnVzQN5EgdywJd8SBEuMZKPYLXjFFGeM7V",
  "key6": "4cKeefxvXk5SLXPBnAK9QXk3UT8Yn7SSnXfNnqRT4DYpkE5TaVviXeC1sVtq1FyxEdAS7D8i6s9fMSLACuWkibtt",
  "key7": "2kvnRHHWWetEeq5FyrpndaESuWy4mw2mcLPEiiv711YjJY8zsGLFMerm9hXqy1hsPxS67MUVkxzPbETEhMuqXK3b",
  "key8": "2JfjqdVfbqsDGjuSHzsdrs2ux9TyhcJQ9aQac7uQFW1TS1brsf73zMNFEKFW5TULiZhZ8XtN8ntRiGp8G2RTSR6o",
  "key9": "2LvVJ5paPAn8t6NqD2k7yK3hHUpQ5xPLQtbB556CYz9Bf4gW8f5CfT6ABHXUu163rj1i6aeYUaRkmVR7vdzM77Mn",
  "key10": "31CstjwibdgLojJ7wLbjZrvMP7k1sSdENFfTVVDBCsCwPtGsQKi8q42cMrMjnAueP2ZTxg9YxP3qtfkzctfa1CsM",
  "key11": "ySCMRjAgMYkLwbbCsNpwfqV3woStLdRb6n5XMunoLBxPFt5Aiibby8xXUVgDxAsJU2d2Jd9qez4nQm2EsNH2MRt",
  "key12": "51BEPkA2gB7hzNoe9XPDjuQt7ekUNyqv85yC5RAvv7quNLtVGUG5vpgPe5jqjByMgEnBbW7omaxqrwpsJn6BTezd",
  "key13": "2FkYQxtWWwgXZqyiCBSx6fpS6hHQX19K7o8CSPJwvfeUyAsk1nh3G6gT1qayscfFC7gHUf83b7Bb9MG8pxhTuLQ3",
  "key14": "5jS3xpwCuMj2Pr9Hva1ivwTBoE3Di8xNTcRczSPdn4wGMFy173HFHnwosHYxuqduYvaJpFgKW6CAJZAGQZ6PvJcX",
  "key15": "3NZoS3isfxBFxstJg1QP65UDXFdrbFbWvA12dJvrUeTuMjJZXqz3vY6XnbPgr6TM5MenwdcCheWxgxXQwA5CU76b",
  "key16": "2H5RV8gVoQvrhzo6idUaN58Mg4Zeh6f6JrpJWfdwbZPDa7nDFj1JTS2o9eTCL564Tn5E8sndZpPxWj8LSQzfzo1s",
  "key17": "4DgDzVeZuc8qqn1nJk11kSBwQYBbXLLQDWE9dhVygMXBNGUp9AGkaT4E7qDxH7F8WaFWNTbcXhZfAioughtprdKM",
  "key18": "N15SzTvzXg3t1KcnKVouZiymUYEkAGtMTtVrygonqG3jnRs2sPPLimtPPFTGkfsXDSdGFtgA4j16Los97mi9dNq",
  "key19": "4DxHFvKakntztkXSEzQeV2UwnXeXUHKXWNTeNKtj34yjihPYgwkhwPkXVq3atketZurQGHQCMj26eN3s5BtrRMQs",
  "key20": "4JEjTmxGufwUQmxucHjpkHganFwGSgXGNJ21xDr3bvsE3D8rJgHXD185d6dgNXuzmqTkFPjkCvrh8FHmwvWLckXE",
  "key21": "2M8QkoFba7wSGZmLYN6ogL5BJ8ohv7RF64shK9nH1MuHDjYZNdBL9z6sB6JbpgLuBNBXLvQC3f3zpxqxUTsBvyvQ",
  "key22": "59xLmVAaTK4RXAWpUD6Pg3DyXgF3S8DduzrYztyEEgKYukLz71bvDyZQfw9S1zPbk1NrzJiRbCs7X7cLocftrYzL",
  "key23": "RdckWqo3iuo832nezHjcMeUnBPbJxRqVYbi4bUdX6qinmJ8g2qhx9q53CZRq9gmyxU81pPAg8HeDwamXe18BVVR",
  "key24": "5RAmwK5BYyZUd492hvJaV9wbMUooxc91g7z3vABWDpSbJUcXdrihW8tqrbiuyNPF71Am9dFT7PaH22PCwGAj5QCM",
  "key25": "4TQtBr2dQfS2irovzASPLaJD68iaES1ZvjBZfeLQZ7y5NaMBzApjNqRY3WZtA7Yq2ue7SNUqBjNzKp1nfKBapqxL",
  "key26": "YoKY71U6FQLhqWmYXQ37zRfViMbW9Vx1Q316yioUNnAQNUj5sm4hqNmKqE8SEAHdQHF8GYWh3abLTKDLsgBaZKd",
  "key27": "3qeZ1m73oUi8puqqmbVDrEtu5rjbqdLw1JibXXU2zJ8P2iW95iTW4cuAFKQ8veedmAf7TDiWDUBtF1h3j8A4gaqT",
  "key28": "M7QwgKiDwpcWM5L4ComANkwTmDWenr4Emqh8khP2ek8o6s8TLS8v1ryVY23xtbHdWg9xXssYkzrKcqEiri3As14"
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
