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
    "4AsawE4Y4Us2e1ADHurMabG78TmuRa36wkXTWapxYp6vQ9LhbUMnLgsMm9TtDrgUugBS6dbJgxChz8Rg8tDBNT73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JFcy3UoMim4cjjGmC6U9Co2NrZez1GRDLEa3tTK7qegY4vy3fCmEnDBJPAiTNdzQLyELbCtNoYSE9zAXCG5rkT6",
  "key1": "3CZHhZkqhQXaFojj3HyRPCUmQwU1yvrPEW8CkLtenMq2GFe4eDcEi9odL5JoQ7MXYr5Q81GSvSEvujTzukxbgsNh",
  "key2": "4f1qk7LPwMDMFbG1DKpPAgmMVtEPkkw4B6prXjHGYW3ksXRuxwpqeTSdKdywAKs6qsXHe25SdTVtpjVdr5Ts93g9",
  "key3": "5w8SLy9yeo3diDqCEguF3i8MaKYJmrcrqYHafK5qmiRSSdud1GSaeLa8onNa5WJnDFaUdPNkmqk8L5GevntbE5Ha",
  "key4": "4GqJjMHgFZiiWbPCFzsFb7vXHpr2UpCKWpRSZpX7adyJJH6jUu1vWVihgY42SLEa7vGbA8N97Py3W8PVpEKA4iH6",
  "key5": "zmJjVG8VB7btry8uAjkDfEqvYzYkXj6fw4sLd48ztdPUUdxsDggTtpxebAsvBcpEuW92Lgi874fa7pa1cJmWa2t",
  "key6": "4hKzXGDNtGPGArbxo5UGDSeDF4jzd3y8k1AcbpSxrUuqETmMvBahoimkYAvmQ4sZ5QCnW8drNuhL4ckmirwwmaX5",
  "key7": "29JJQzjZ5s78mdujAu3JycdDoMe5tdGrnxaNvxT7VgcX8rhmHXGjNPtsUBucikqeEu1rp4UJKo2hPRhkcC4GRso4",
  "key8": "4sGGhL5nK8DKxTqv74zDUBhAtg7vZJYix1aoDAdT79hrFaeNczQznBreKrNbfP6oLSY8aBsVsR4uB3dvza3bboti",
  "key9": "2dX45McTWpa7wFJGxjA4AVG2uyzaMUzsoKiTP5U7mGS7kHf8FoefqgAo8UcZBD2TRsXVFBCcncSQN3CXy74cZfZf",
  "key10": "JLSkjmWtkAs2TvDBEVPFwpLAyoQMb8jLJK8w2KSxVr3JJLxWvAe1jtAjn2dGmmrEba1g4x4n9jYPXcoZaagVqFp",
  "key11": "bakxSd2BhcRaetpURSqZqTepZTXT8pZABxSDG3oFqYoEjt4gqAbRKP3vfZZyZi3YY2iJhJ9cP6J6pruLFHUCTEq",
  "key12": "4s9qH7CKgxmNqdt2NEcXo9mkJfuf9ARRSu5ZTbuiHiq7urK8qDdWXPMCPDz1Sg6rwFrDr2abSKfh9ksvyYUcU5Wa",
  "key13": "3u6XiZjbQCiKz4QtenoKvbUzD5YRDqCRkDJAV1ofSLhHJ6r12g8wTT8S8hjGA3CQ8PCxANJSMZkBye2qpReRbZc4",
  "key14": "5qJmGCGVQfpj27vJXfMduUStDxQgkvAWqg9vtkTHkaRWxCtvy89WCErMyfCRoVfo1B1q2T7wqxKVf9JWd9Vnh8UN",
  "key15": "4nHif3imcBmCJg97yWptxrQGGLZUX1vVYk2dHTqZDoWakxgBqB8ZY6Xkqbd1uv8XCdfYa7yXC9cWUzPoRBAPEqkM",
  "key16": "4wBEywSiXrjU6nFsKbZ7Dn2ptLae1zL6bKyqdjJo4juSAoNsG1onajKFfrvWEdyGHMCT3bAGfg2Gm8na1RcDnwwT",
  "key17": "2JnLw7fhkMMtKQVos1VFSPTUCog81i9YWwhYYYvpeQoNiTYNRtrJyZWfB56Tx9MWXXiYTiQs7UhhoNCz6nFDkU8Z",
  "key18": "5hhSGBrLxQFSRoboWqPzQNTNCEbd5ejH1enFdHoRpJNUs2FHsPLFe7CYW2D6jbK2vrQUcbSayYJPfdYDWJVMALT6",
  "key19": "2zhzWDyUyxqnCPKkZK8ojPiDGSx5z88WpmeKiMkKEuRxMDxJLviXjdHZJTDXNJURH2z5eChW6LtUbgcnLDCrfpji",
  "key20": "4UxxNXoXabVp68z2yqk3kFYAaE4h2s72Hdf8Brejw5La9vpRcjn4gmZJUUzjWob8HmxDweF49svZMZmJy1KrwxaC",
  "key21": "oAeyMbTqh5FBQeF3wyZzX5KKgTLXbJJ3yvccdJdTm1pjH1CCyUvitDFQSGtkzwBgic4SwMGhQTpKkBcHcp963ZB",
  "key22": "5nnR4ft8ZANPoZuuVBbHrsrfuFWZ1JnqoE3BUdbiXMHuQovVQTocZoGHgQCM4MCuaq5RLFfLBMsbEYjLcMA1ybWe",
  "key23": "4j71UZ2XQePHQL7pX2EkLUovWDp65xK9SH6wCxPLXPh9wVTprg5KmMn5rBEvXQ1kfkmxckD4oznbpzBTecMwKnX1",
  "key24": "kDcxVkZv9jqkt2a64qtEwzxG51i8z7du51ruQybVzUiRheeCmRn6HtskESVjKiHRz4SyHpPw2vdNVWvpmCN8k75",
  "key25": "3Sj6QACZ1WmU3ZSR4F56mP1spV7WUV83BpNeCHMatg83xDAhL1uVtZSo5HsnGqktwqvCcqxCSyMpQukbBGW84XeG",
  "key26": "h3bykGTMe7LUMhcVSeV9mrsbKSKdhjAQ25anf135VqvvB5VLt8FWTKNKPzqTbnAaJbzWtA4UgnqaHnRecx3vCUY",
  "key27": "3BJVAWgHqQ5ySqsEQE9y19t2TixGkU3BFZvThTeLFVdCQSaRdkdRAGJRpgJRSPgrgqLzoJiVAWvUP9MuwpPRGqyS",
  "key28": "2pfXHRqBMsssGhPwZE4K5yLBCr4WAQKAkaK5bEmZkyJsQTNjgaEMGpCrch3hcG66fGCpTVG72AmESKGE2E4FHTR1",
  "key29": "3Am6T5LuZ1Za6vbnWPxrE5XTKp9NTDsFWhrajAVJ5MdPxTvQXQuZQzapFhfikTZ2k28Xeb6VPjvgMJyYjbeSd5jT",
  "key30": "5U7SXFmeQRgNah6zNmHPd9JY6VRZZv4uZ34ScvffiGjUL6YvorA7NLvw2Ac6oX2UNgaDpFiqtxzZM8aNri8mxbC",
  "key31": "5ffGt2Y4jnxQzDPMgm56qyz4GRd99SCqypzoVcNK5HiJH1YSqZ6y6jMYw6c6eNP4HQNyRgEu1xGvKpmqs4Yqc76n",
  "key32": "zMc8VYccD65dX4pPridGWAZuyueDgjvkvbyfYjSLZNwWcqKkq2KcvZaiD7JSifuQFP645RyKzCMvGzXacFiijUr",
  "key33": "4yscd2TLifzecPkCfH9ABsRKpDqcaWJ1fJttnKPhbBzvxdiKTGDEhr3Qogfxu6wzBWZDKdoTWByy2ZELsaK164Ay",
  "key34": "4m73Gym5UpPxQL3Lv1qHSjo4nT572kPW4hnC84cYjqVw9oHVSLBtowuShrVJud2zUVSAATi7orvZHKSWyK8WSorw",
  "key35": "3XB6H46ELRCE8JzmaboAEs4qWiEuBSFEJr773CUMqDM2nGFbXGRsGFMWLp6pY4s6YrHWZ3vvz1MzxSzoQA66UFED",
  "key36": "42aTLWmfP9qxRqUEzZSWaazUYN7acjnk44VTjc5xQChaZevT48MpxmVuhpnmyLxqp4Gq9ZFdzjYsCUq3GK6ThJJw",
  "key37": "2WeebR8nRgNrM75eJQLHafbGkG8j3dN7TSc7gMPRQXVS1RucKa1j5zJQQekHFqXcsAvhmv5APY7fNjWVnAGWez1T",
  "key38": "3izbKhXeRiAZq14rS7GNHi1e1RXJRMvG2hybUewrxBFrJ2EPsrArNuo5zcgstV1uenQWGSxDPdXvamDHxo8dKhZo",
  "key39": "38TVks69EVgypnuWLApc6L2GqrvR9PPEptwb3tcgAZzhXs31wBQ3FkHGJNW7KeYbXokvrMLQPnjgwry9wbp85fXs",
  "key40": "55J2GKNkMD9tmSGpfZS6AkKtk6bHfF38uVWCSEV4ZM7UZQSBfXwJLee3iv4u66MAWWcztfeBgVgsy4VFHN8F2i7A",
  "key41": "2mbrHxr2VgHjjEhjG8q6FKbEwqgWdabB3DSSMXPCjTCGk4NJEr7k3nDPw13hUBCjfwLQKbnZ6A9C3acnxCTHjNpN"
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
