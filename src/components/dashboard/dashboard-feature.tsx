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
    "51j1v1GTMuS4cTMy5F29sA5UGE8h5v9pi74UtdFPqgCm5FgdRdbTQng7miNGAa975nb3QQdUWY1d1TmRWwFdNvuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xKaPUyEHX3AWL1WFzZrkFfoLEwsHKmqEJBouVRheuwGgmGfK9Ry46gUtoVReruJpRqoKZozzYhNVqXpanBqjTa7",
  "key1": "2w9NLdq3zq7WWTb45U1Nsufj68BrSqo5Z2fWYpwoQ7xvtyTPdvv6ScoutD6LAuFptd3G2HcnzrHCsUzm9YScTyyJ",
  "key2": "32yHBNTA3Cx8EcHKL13bcv4CqUidGydp1dYKkD7edc7DA9qa81f2XmngzsSvj7kJUC8Dnu2QbE53JYZp99esqSd7",
  "key3": "3Ao2kQGYBwxAuV6KvV66Z6vNyyxzESkMxJt453f5Smu9gCEKdZ81vXd9idHJYYJ7WrqC3wpoDMau4AesaKCSngE1",
  "key4": "9JDeedLHnN1YGoGteZ5Lv8XehQFaY6piD2BGCWYXiaXdStx3MKDz7HwoDES2MDBg7waYsuMLEjLoUPiTq8FD2ZJ",
  "key5": "4VCswMwFq4VqH21TxMtxtjEbThAeSaSx7qgunkra1sNK1yDSxqQfapj4YgfYbpy9fhtYZg4ZABFg1CV2up5mfiXr",
  "key6": "5GegvuMZdKUiQfgTCrL6QFZUXWZjWKchTEALmXJsv41Ermbc75QZ2LY6VToXZ1wWTussZWtk58c56o2gtTWUckMp",
  "key7": "Le4qh8bfsSC9uFHNbg2nXdpD3TAYapyKDKhDzWaajvgRUePryRKrAAEdU2A5hNU7iumjhxb2dLCFkhy2uiFX58C",
  "key8": "5BkVReB7Us7p8UVkoNWm3xd3tRX4Mp2UyEVuRt3nDtNRUj3NeWT3vyqKcPyBmuwiqqQuQouLrxSayvRDZE2vTDpS",
  "key9": "3CK2GpMC6yPuceUkzxQiCoLwa89d8ePXoTfFJyugSa6AZRmBdDCWU5LKmyJUb3n7zXf8Qp399zUs2ogMRGRed7hW",
  "key10": "5VgpHGQDDFpPEProx3NBrho7E4ngDm4e44UMhaA3ueBwAkYwdyaKGz6FLAt71NTEjn99u17JCB6hYVBvpeYVkzno",
  "key11": "3f5jraP91rQSY2yK1Q4Luz9uPpnuMwmtsBBTRxjcXj3mswVtRKuZJv2c2smjMtYDqkv7XhA6msqhqCpxFSW4jKzh",
  "key12": "1jZAQnvwi9BsAjP3wprC9JMeWdgo2euAn4W4p7zDAcZ7ByekPjKka6iM2rvo76Cft3pTJFJ78V929qu41fJ3XaN",
  "key13": "4GNxLcTC2gB5WXQi48kYxsqL4siJSUL7vDEqavwFMzYQDsp6wAaP48mzzdj4b4YkQFhhnPzj3xxC8wJMWvLAJqw9",
  "key14": "3D1i6kuzDBW9zjWKLEdySb5Y19kL7QCjr5vACennVFm2dVR9zPxL9auoof1cnDND9PAQZinQJ7nQ8r9qz7Nw78d9",
  "key15": "4fcQbvjiCsNFcSh6EHj2kk8uYYpR9BSWqP5mxpUf8bRRX7BK5PPHVwnpd1dfHcDCib6R6eCdJrePQ6GR3NdMHbpC",
  "key16": "562ycy1K552o6XgVf64c7SMA2cPwt3mZXsr945W7vQrsW69c5fbsfq6ZBh7WZjWsroXAe4T4juDpDhCWtJGFvdeo",
  "key17": "3jTZJpZgaTWLUk79q76LPudgxpJLjfK1X8vgKtxcZt2Fm3PC65W2ib4hdZcSABkP8T4hGXWedLrvsp5XqfMo4w4Q",
  "key18": "495mW8as3G6ngo68qqkKC8wkdc3mTHPBN53xfFREGLSy7KqA5btpHmGCriEeoXXiSU7d1LNWPT3wv7gNsGGES3Tw",
  "key19": "52QroxdQPCsSwqKeJDsUtgDZsoyKYZX2GBpTw7TLxoD1J1EeqS5oRFvMbsXeu66RGWGHDUPqD8CoMeVxKzMqG15C",
  "key20": "2KuMWb4TXNry87iKWNGa19iPAPm9sYfDp8wTMdNvfkytUywmqxHPufNJPz39vB9GKVUWjaC5Rr1kcuGRM81J2LBe",
  "key21": "4A6eqEHeF1qebVaFfUUeCvUApixTUesrKveCwQc3hpNx62BPbcjrDqCJLaSD9MMZUiu4mFobRFXoNxPxkcnGWkA1",
  "key22": "2DswLQKDsjwXX2cvJ2xF9P9aDit8qcyK3TGmcpECvDqTawP1RSVWVYPXhdvnKhe4wH8WAn7X1F9xB5rFBxL6zKjJ",
  "key23": "4RTBeKpCWoVoVj8jHmgtBiGECxup2qVErW7SxdjaAkcMfeMwTwG9d9LGPU1zrr5Hwa3orZNXpjQpM1JaMFzNEsgv",
  "key24": "584hMGT9Sg7t8eUPqiZwezgKAQ58uefYXQpfMd8zPTqmTg7BHYJEJcEY6K6byCJwdFGSSZoSVirM2FBSnNmd6M3E",
  "key25": "pzXdvU6ELFNQqh1ms4qqP6JX24CArvrqkV3gU4ujef2gVtoTVyMq6ZPKpZNroeQz5EppdQZiAt514g6dZXVvHdM",
  "key26": "4pDFHkCgEBGfs76ydRKxLLfGxMof2jhkLyxnJddHmHLwK1MHtE81DHSxrV9DhRRjdpkJCRXzQsMntHTthqrx5TpK",
  "key27": "54q9sbRrKifrVNRfywGkgvR1cmTQCz51WJNhak8YsCVPPQR7WFz3iT2ggrwGSv76qBbmjwn2WGuQ1382vncgPH9k",
  "key28": "FvstNFWs77Y1XfydM7YYJ55wiWaMWgfBaQGAiNxjwwWzrEEt3ALkFy1QsQ4hhafsJdzr8Zn5L966f8UHjkbS8ha"
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
