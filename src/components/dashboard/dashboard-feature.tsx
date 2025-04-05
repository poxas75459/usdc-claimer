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
    "4A2vcayRJAUhX3vNmqpaJNoK65BV8JopxErXF5azXRMQpqunfxNyLT7TtF3KiPktmUfxUFM6NTJnSfUnmyHLSd3b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SZmioqRx3msNYZxBZjUS8eBx1USKpZtSKz3fQxa5pERqreiE4SwVs9b54qYehnuukpbVgwtd47miykabNTx3ofU",
  "key1": "3AGtRYXovjn8QV9WciSP3HRuidKBFxaxsLiNeC6rtvYLEV3SfH7GFXVxymifL1zmxZ2AbE6PvsAK6BCK4SGK8Ued",
  "key2": "8oY3tjgqxyToTxwsJ2fCNVk2LzYEQMvT1mot22vT8M7Y21oyK22eHTRvjk1f4Fr7payPcHHLxuUHJJm9taRZpUz",
  "key3": "3k89G6nvYQLmFjpSzmYCKzx39CxFNsuCfciFK84jAr9JaHLkcESwVCGbqqZx17HQJ74f9bnuxG6iY4YJsotrjPU",
  "key4": "LjCN26b6BNtVmn9bVrxa2tDz39sozxeQG9sr8k4Yp94dtPhMT3J8DdxkECXvbtcZ8oLXtP38yYcyHURSMrZEmzp",
  "key5": "3dK29uk6coQhBRbzf7qngGgzvMqsem9ZvW8EcGNfjUfdro6jeQuEthhAsb4KVbKd217ozLXUdi9AyCKqCMBiMVTB",
  "key6": "2jxMcJPma5ThymhJZLeGUFhr6qD6qnvs7brkMUhkvHX5aPYi3xiGrGWFvianFDJ15X8RwA9j3UP3Qxfzr3Tem44C",
  "key7": "5bGRckDqEL9jeqg8ZGB6nZtqLo5ZwtiWcWKt7xrxniZdDn2APM7oQ7x7KPyV7zh5b1dhnYEW7s3DvH2Bme23pbSH",
  "key8": "5t4wXnmRKa9A17m6r751KDsUfBA3gnx2tcedP8RNRTNxcee1ia582hScz4x24Q3x8jbUbCGb4jGcVpNZC9YNQZQK",
  "key9": "5bJhgXnLMcdXZ7FcJ5oBsYTgNVehrB56kv2351h9GFkkSADdPAs8Zompf73EGYDBXgHcLY4gusAHQx7ggWFzhEoE",
  "key10": "3LdA7DEvetSCS3TEgKuWBUoAbaxG6NBXZXWfZbaATBSM4BGYKYJbs2PJV1wfb1i521iBVT9WcMDNUxTf2qHBZEFF",
  "key11": "2X7SskjEaLMXM82hJPjUyejVmwu3rxW1UrwDRkTpwo5L3t6yBv5UX9H5BLkgsCe7WvPot9P9FDAYpVy13d6VG7iR",
  "key12": "5NHpkQ8Syw1S3XtzKn8i4XiQSpg5gvNjDVxZ59DquUyuq8oyEGDKmwG6bef6S6QSweeY6FY7RJ9fQDJ5nkjAkaic",
  "key13": "pa8GRNAgEzosj29Epo4kNfnTyfevRDygZsr8yS4HWBS8nHPXMUZCyjP2AmWM1aKDfm8tzstqbBKsiZBhUS8Ddpo",
  "key14": "5Zt84JBE2Bvki3YdhPNPkoYbidXTJZPHttdsEiyykoGVzxgLsv7HoiUu68DXECre9THPMMrZA1ErheGWve4Pbf2G",
  "key15": "49jUz8DGNtYygAGsydB57WcfheGkSZZBjKfXEkd2rwJT2WVXviGySSQmrLzDKHKNgvMoDHQ7b2cksADJPpsL4ofN",
  "key16": "4bc2X8HfY4ZDVtRz2AyoZtWPniN8i1FiWrpx453AfRvSiPHvtKKymHhgrG17vofgP7xgWfUDESGDxLDE3tWsv12P",
  "key17": "5N62XPqLfTeb9du68MYT8uTQHGqrPcfDfn4QnvqCMxURgaPzQ39iXRVS9DtxGL8yvG2unb6khsDmDVvrWUFYC8aN",
  "key18": "4CxTzqBsi7ZK25KbsdAVbbZHjMjnyjpqyZbbtGfCKXoyQFeQgFtw93Vz8mYs6SXVsg66vWuNej1qYypZQi8uRL1H",
  "key19": "53grsYZAf1jntFpUuKZtANoawpGNF2qqwr2LTT6zCi2s1ZRQ5NNYbzKuaoULigyCiaV1i53kgXAABTrmxmMYTKtW",
  "key20": "2ucXfb1wTdynYHwZEq6v4s8LMvDm4wj7qquJNwRtKM53RPQpk28KqbeHn6fi5LzQnuskMARiWQ5S1MEbMQJYKECA",
  "key21": "2NWo9L6z3D8uyD45VWXRxg8MHLdqwuZvQfxQSkFaTXgeuEbK39z7j8Yyt36cJJTLyzVyDGTCKifcis5jzX5MU1CX",
  "key22": "3sk5AFZ2UuGCznD8Gyh9rSFoh5zvHvK46JNVjaGrVsDBft9T9WZ47peRu2ErmMpbUzFozGj4bhGupkbSy2UcbBPj",
  "key23": "RMWiZUXBB96Zd8TU6pRffMUCFyqPUUSJdw4Ctiw5n9XqppusLATTRXCTbZYFSrJeX7TdoBnjp8yzSyUFLPkAqNp",
  "key24": "EjhA8Wwhy5BGz59eZBdJgCe2Y6HcpwgRhsMF8b2HhJMW6XVocogg7rCuLLGgqnhto8SrhXf91L4EHaEQ4Jt8Cav",
  "key25": "5apwY9m8JKuEFzdoz4LPJg6oor1sgmcaM5NKbe8vSNGz6V84585mTrPrEf4V1bK6w15CW62mXPkCF2tqNkkt1cgV",
  "key26": "3ZbcZjs8zow1CZFYkKDUeYZ5NMyuLSwbiLHa5juJNaikVWfnCZdLRngve51Sjws8hLMaNEfkZprU1PbU9CkaaLn4",
  "key27": "4EPn3v8mfiirk5eCMn35DBMJNZrJEMvHzL2uJLFPb7TjLnLQdTcn3RHrB9JEc7AjQ7PEjit9eYDBpWc7bscUAYW1",
  "key28": "4CRec3MjW2mZMCarqQkk97BTpsjcx1Ypx4jdhMt6VvZ8JpoBDEpcQ8SS3pdaDFhDXxTv9VSwXxs7XGb5qTzBUb6m",
  "key29": "2DKb2ebDkdXfB8XwGTyKaYx41VmSstvb3iaAEJE8R7Mixv8C4ohfVzdZwhg1cmvL6BXAvBSCZ7AAKtV1NnLJgQpJ",
  "key30": "4fmceCJsJ8FUwNtWVek878r3fiWis15cMKeFS8KnzkB9MkmH19TLLc1w5D9h1NLwXQrjjWmi1xWkifx3wTGFsLgT",
  "key31": "B9gDzB2o8mPAE94vQYCL3pK2BLMHVU3xKcw3cp4ERda8ewFKMPF3QXXw6UkgYreMLj26STx6kQS6p2nWgmuZbzz",
  "key32": "5bNEteGBYWhYjnmpGRfMZ7ESeqvYsGCg2wEdd1EEjzoauScHBDK7Sp3sYjhT86wDMUGucWGzSPWufGK5jDvM65aD",
  "key33": "52cUKHZ97tnTbTkD1wbwrkpkCan6QSAW4TQPyVc4NB3BAgi68x9KqSRNg46uyZPmHk5TPToL2Ne5QNkVW1sW44JW",
  "key34": "3jWgF4NJwLhmdJcBALUcJtME5Yfd4BmH3uNnCeTEZ9rMhnaEtSS6UxNmRbJS5x5PKLLudWw4JXgxdxS4SsTuj7Cv",
  "key35": "5xDApttaoH8Znu7urEJv1LDqyNLSVWxB5gEgibjxP2pWacHxSwuioxCNm9q3QjfFw1dLkgazwqZApzYVc2P7UFq8",
  "key36": "4P4k8YkrmPgo61CWX5FVMGhZ2x9yAE42CGMQH9hte72nBh2hvZqzp3UL9YzdpH8UgAP5zx1aDZxnhPMrzmt65d5n",
  "key37": "keeBXdzyhLfd1Xd4vn84CMi3PAwAFYWQz9hKy5LmT8CfKh3VmuhENws4EBg7ywYNuawsn47R1CUKBnhM2nbvTTV",
  "key38": "PofWhwKvVTyXTcLixRq9A4by1kbyV8LXuRpRbj5K9VBSQGnXkcVh9vEbFKPjLB3WWk7U2iYsNevNdMSwJYDvpXN",
  "key39": "4vz7Mfa6RMTjHc5tvE24xBmx7X8iA6KpjiWz4qwc2K7TKvL3Wv9rsAZyMiUh6kLHryqCnwXuuA5gbQLz6mP2k3v1",
  "key40": "3rXdw4cazqgtUEH8RvD3bK9vN2LDfPxo2WT1RPajmkfefQz3HgdwfGVeLuXMWRbQDAntWpY7rHzj4sQxFMh64TW7",
  "key41": "5DVHYqRC6zprhCGxe19GYZY8TBNkYB6agnodVS4DxhyS7cjpem2479g5o9tH2ASCUrbRQBHRsNpoDtjBs7Q6j8Bd",
  "key42": "34sJ2sGn4nas31mQHNbu89XuzvoSVY6Xp8fM4fu7rGPZ2eohdahPz4B39ZDpXBtN2Ko9kZYwHhRApKBTQcD8Xbss",
  "key43": "AmiKZBPfPE1M2aRNv6EQQ1qYofmUJaKKDrgPms6PxwSk3X3vRC7vLgD1DM4Ca4pFrncc6jvNpPwXVvVCJ16UhMY",
  "key44": "4yWH6tYKphUpuEG8oEKLDQFADAH1oQcNBAgp3eddg7Hb3mK86HHgPphpHPJeUMde8d717QuXBMWdAKvHxGCt2YEC"
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
