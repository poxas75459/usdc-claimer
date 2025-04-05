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
    "2LddDu8a5JfhcxiM6n9NJdPpTHrXebfLGgNA7jNJtwbp8HER4YPJUJ849CrNPWnXpt8vJamgxWqm2V1gMYCgvwHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vw1prpEmMSyannCBcxtWRGcCCfjdGHfpMLVPMLo4Peetdg7YtDkGwXtnkoZZXSJiqj7jHVWmSBbT1Gvz481aJhV",
  "key1": "5xPQ9R2f4HU5iFvyVR8qnQSerBsDYRt2PLY44sFTY6on5rVKxvhAc4n1PqAQYmR8cmcJTDrRHwnX1C1XzJxLszLp",
  "key2": "9YQnwns6zUgMakTD96V8xUx8zTyuHRHomg1R22jKXjP6o4xXcpjAQ1SuMjSDDBEnaxWW6yhb35PkTtK8D5jQeSD",
  "key3": "4ur15Pe1EdJanXR5j4Wt37ewrzzLVa9rgTaDbGvJAkZuMA5yeyybgn8iAjJxaUtnLrUFZ2WK4GfXLVGpE9PAG6WQ",
  "key4": "4KDmEoZFeUdXbuPEEAK33jmXHFpb7y9yuR9Uazzwy9M6fFBuQSQpnvFWcMnoPgVU7Eogb1SSiLETkRbrziBNFzN3",
  "key5": "3EPhztV2w61sNRWtkNr5bg6cghiPibvJvo1vC1Rk45roHrCd81CmfHGMDWUVmW6PDNWtK3yFsgbBq6f7nz9MELBH",
  "key6": "3qQzTEnCqcMtbgCVMp2zzKxzqLuHaqmWPXR24xyLtTHrjzSTYAipuQuAe9Lb2A72qaZ4GFP3MchFGrYK2dvYxE7A",
  "key7": "52vzdd18bDUTfRsgkayj2KTUJEspU68TEhKCWJPfGJ7GyL8HQcRtguEF6ncREuZgT84p5dm778eVDj3SRYvDAQxQ",
  "key8": "27csabw66XLZucghcVZQ4uHAsEYPctV8HuP2rEDsRWaUw6kuLcSCyQ7vk7GgwREyFn8S1v4w2H7BhCn4A9Mie759",
  "key9": "3TqLVfbMXGFNaRb3EGRnKjNsjwwHShqDbTTyAxFcj6MtrwpuVad1iu1jWd1bVLZRb549JdWJwtbwJg5FQEBB28nR",
  "key10": "4nZEiBnCJdH42igVWoQgpcpcRbjttYaQGm4UZoYXukqR3YnGgS8FjuGfEeHfySFczviB2X51mEmoiiJ8ETBTN2Bn",
  "key11": "2rSemesiYio3j3ztf66uSDo9Av4oGAc6Ab157UwysQbi3YdCZ7e179VfP5YECERcqBV7WLShkxR4a2eqtT3Tcb16",
  "key12": "NwZrPndUxt7M6sQGQUgY7eY54hqT9onEtFRusXfCTZGvRVaa58dsQvEwDbQiWeKtiko3KFnKnC2uRHGLdG1EyQM",
  "key13": "46zhrupyR9HPyzUvjnvaR5L641yNFMR2ATVzgFehXNS8cfSms4og1Cew7wik5jetpGLJyKc21VHg8HMTacNtahUD",
  "key14": "mi23kBaNRq7ioUzd5y8DfpbDB7nkaxGCvbx6S938jM615iTDippwhMJni6iPN68pqX4bjyNe3wxkM6xmWSKo6SQ",
  "key15": "48u9RzG9VfdGqUUpoPYvxNXUNx6sr893DuDBbQLmDHtWqcV1P8kLQ6d1FgGnfBKrpedWpreSStshmiCnsmqz8RM6",
  "key16": "JanWwMfXT9ueWrSVqA1triZpXrMZdRw89f9xPb7Drx4T2gaXG9Pv8c2M4QEBVUd1WvLRWkjr2JBeDkEd5eqB3c6",
  "key17": "2aLTCPsCcvf7pv4Xru3YUBG717Y2dXYTxeDJ7PxCRyfq2CcTUcwsk4jZAfAp5jXyKJCgvKfyQKRSB5p4gMyVLRsL",
  "key18": "AgBShEV5FQeqeCDWagJwdx9Kkgmfw1WboF4R3QftXPZwMEmoE1grKkaRhzWwtNMxUfBdMf8SUYREzdqPPQgZu9E",
  "key19": "4sTgtECmcCAK1uMtRbUSnRv1a4joRdu22iULgHZBVoeipGDhQrecQbViCJBCeyka1jmu1AGmdoVf8NvRNYpBsvcv",
  "key20": "2rBM2yGZLDKVvLhGdP5SXHH2is9HkaQtdQEAsPTCrfJ5csBTcBBdMHgfFyYQSrVLyhvGJ3YGEG2UEkqqgjjCJJNi",
  "key21": "5eJvT9ST26hg1nzuNe1mH6bxAh7uTGCfpsmwTXdCeYyb7zgE1aFcwfxgHYxaagtRL2XnzqRVw4qhLfHvQmbWbncu",
  "key22": "5CHAyz23BmiJn74qzrPuhLcFC18hJpkd6vY73D11MjbpxS3w53tMrgtprbK7p4yM5i1gEZwxLEjefzpf9MwVk1eE",
  "key23": "5qE2kyfV5iGHkVazohyYmpHxDrwwsxVNNQvjzFUTW5CbkTRVF75iZLgPpW1Bwo4Ys1poFuvE1edhtBFKEMVbEMHo",
  "key24": "37PchwUaNqjQkrC4MmN3cJwaxjNK5Bq83c2szNLn3De31qW2wAZJX4PvQ4gbcnZQsWZzTT3gHnLfChRctvMiP8UH",
  "key25": "3i6iurZDdyTsNHEEPJv5avjT7oZopeiif5raSNCnAry1wDMw9R86ijyvJqmNLZai1sJG25XhfHDYwnKTuy5VviuU",
  "key26": "3BbPT9cZJDdp9nqD4PMCzuPpEWNXZpUDi9BWVZtWPtKn4Qw1pxraGBLoW1jRmRqoX6B1utsS4yUzZm5SxNkwbvaa",
  "key27": "27BpuV3WagugCBBX8BNVdHeoL7hF994y8teUKFbZvzZmTgnJVoSqQCnvJM7LntTtM47MqMkY7SA3ecGVyuTxr27Z",
  "key28": "ximymRPj5ZqyDtjUJB7VZ1cvongcAR2P8oXEs22TRr1CMf4KqvoZdabsQzK7HyMe97hAxifrig3bafTW7k4b83F",
  "key29": "krddEza7V8hS3iYidiE8Gz1V1r99wNkwbQZ3mF4ReQyUNf2QVenCn9RuLaVNZ9oKCopvBb1XayqokFHobkhTHXh",
  "key30": "2JF7RgGGJ7u5sZb7fseFvX6BBTNhZFdm6NmaEkmfkV2kFTeomEYLh1VeMNXz8Yp6jqWc1sgXmWrRjYhbHTFG3qmE",
  "key31": "3gzPCCVgNcPwFDVo2SpUmM4HGy5Wb8mz9hMHk8NsFewomzpCd8uDAKEGx1srueMFPvXoScgb2u54cDUQKTruk1SL",
  "key32": "2UB1UdCGLTqGhmd2t6h6Bn56g5oCaPTPLWsmSyjchKP6wyiEfEzjuPKbHn5bdroL2Tmu8tyWP2DqdcAYgkA54TPe",
  "key33": "5b4RRmn5oTEnvF2aDsxYtmdRFG86Emy6z56N6JRic5HMB1mtSnBL2yPRNEHc4CmbpVqUx7Z4rbfhvkBVYyKbBefQ",
  "key34": "Nua9XFroFMsS8TVJK9Mcnjmypp3mZUR1SNrzWLnsmmj3kgAFGDMaskYTYiPmrRb5zgVx2awxBkZZ3nYepa9xzpE",
  "key35": "5hCRK2T8toua2DZZp8D2jyFuB4f6nJ3SfSMnHQFeTtQKDBTxYaKiyBhVp1YVKtnFDW8tQqyhLBaQVktmNxD8i8Zk",
  "key36": "5EQGDgCKhDE2365DH4TiyMUXnRccdzCy2jkBhEfMbLXTM87muWnK1xQiEL2r4a4NHYTaf7C46Gp2ybUMqSsd45Cw",
  "key37": "5izwvVtfdqeiGvCff8kQLggwPrVoLVk5nQbHtBh6KgJMqyvFVi74tZXEMn3U6kCCiucZXov6kkYqgBn9kiUrbpiq",
  "key38": "2EhHG1LhHp5WPBrJGmptzdkuX4Y3zpBNYk1Pg9AuVqyW7MULDnxmc5fH3N3qiePJmhXGEddkLyHogRrCFaomVwSZ",
  "key39": "4Eh4DDMauS5QX3vCZYuswHX7C19DZeKGWWHJivVtPL4UMdgNZBcfBrabn2qbcWh8px7PMbvdhLdGubbkvh6C2S8o",
  "key40": "4QQKczntvCh15Qq8YGzfmZVv3TjEEkWnz1WsxAcnUHXQCsMQjGagbgeu1mUgKk6wmSm1Q61Aq2WUAVnp7JNRAXeB",
  "key41": "3XQiDXGzHpKiaD7D9PuGgQHwgkTtMAATzHwfpepFPGxyD4s9MttrxGYfVkFEhKAdBVyuunV9e8UFU19EowVMZb6r",
  "key42": "34eFx4LEJEHtBJ6zYomHRLLRj8dn8bwLc5TD4CzVANxqZSTYpb8A2ai7QKqSVZQFMh32Ui2R9QC7R5YXoTAhShhx",
  "key43": "5nQNUXPLh3XXpCPq8JxBYx8h7isnBRn2fLrtMHc4NzSnXi1Tqxiu9RNkeaBMPBWJfwqw99yTDpus7aJTxZkCcrJ6",
  "key44": "3qSzCh1g79UTvxv5YrBXxYLLQesh7bCTSULWu975CjwHkcj9d9GmJfGR14J2RDrE2L6eKGaMjxbEHLL8MsxFMQVH"
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
