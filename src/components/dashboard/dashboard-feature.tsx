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
    "67fPuSWYGPQTgwHdrqfHWoeMpzPiwBF6sHu74MY1HYKHFtz52BThpynB2wGXHhkU7F5t68MH9YoXaBewacxNnK2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HP5zFSDpMvL17JEkoWFpiuXmN6pcRABUvTfSbUXAADq5mE5RjtNXhiQELR4x8tdG77DEjdAo23fAKBrZdY2aXaB",
  "key1": "Py1ozcAMuFUvhfnQxz8HWSQx8BgjvdrzGmzav4eHP1vzR3YaQyFAB2K7jZWRpX9CDKwFbTmwrMCAubgEjBm7CrL",
  "key2": "5uKiojHU3YZXNiSyYVDQ3qPs5LgSWPcWTfLSkMUbVM4gNYowTURXSakFGKrKCnPsU3GGHYRfkWRRBdohkqJP4QwP",
  "key3": "Y4Wq4Twjo91QZPES91J9BgMtvYb3chsFE49teZQvW27pwk3pbCzkgnsuKFHJBWeVrU38cLhFZsWZEGr6xWHLUuW",
  "key4": "baY2cdCLyhB8TgSayqmns9s9cMG24hzWcprRCpPwrCwxweGBmxpyKPwhmxjtcnd4pbE6gN1waXrJcJoTWfYtmXX",
  "key5": "4QjMAjDcUGoacUSC4vkLVDEExybAgaFNumJsMv4GNtn6GEt9cBG4qgP6L8d97Y9uUneiywTEPGbPFTcbq7sDtVyX",
  "key6": "2dShLCHNtFh2coiP5sfsynoqAHnsGi8NuiRCn5TkbErZUMCqJtzGWrDKqNdeyJQkAw6Qga2QG9kSh43zPBgtSFv",
  "key7": "5qTBCCA4jBfMc3PC2fkMdHac21bswheiWT1B4hTjQpH9uKiqYuNy3c8PA3pNiCc1JL7PM1cBs2g1t6CLWDAXwdtR",
  "key8": "5MFNamjzppUcEsxPCLFyYqtEFS6qX4kT2gSLaKTu85srScxaNz9rSbDQwWHuoh114oDmFH4eQE34mYtHykmteXhp",
  "key9": "5T5y8uHcn1hvWTJZ6NMAdC6vbssrF33UrXu4otGATCB6yhnMERiiVRF2Zni7ZpjRXwRzRmdE7bnJb2KsRfi42GhR",
  "key10": "4dqrwLf2MiKC71Sb3R8VMzfjDYdocR72UveAsrkERsJNPJSLEyaYnKEyNp7VDaoRchWmyafLbNGoUzHq4HuPq4J5",
  "key11": "2LGRE7vZ8x7FoMBpt5UFpDNGvujXnYszoYwRr4wykRKhbxWzoimNFULGXPvJc7g6j6USpBDs1rW1BvFuAbcjKuhp",
  "key12": "zjJcntd9527xqHyqy3b4xWv3mjzvxDHiYXasGo95xNhgtkdZzXJEnXCpSka9bcijnALg2emKXBJ44sEtB26EULZ",
  "key13": "4VUwiR5cacNVDtsD6nz4SD9jxkPxkizHEigWDYRkWyHuyEdc8jwwpetzamRbmHq9s2aTRzdkzdjLgNadydp5C8Mt",
  "key14": "5c57dwKTN4RNVmd5ahMS1Redpny57g59kZP2VAuUCc1Uqosp59yom5ZBdLhRnoW5C6gYkhBgk5cfML74TcAnZBSL",
  "key15": "3k8g6TdHA462Qr4UvGt8C5rq5Y8fgU5BfJhucybxps2K1GxLvHG4i2sVBP8zcvHHUr2Ne5i7jJayB7nczQqcvDrk",
  "key16": "R7Wkk2pTU17hBv924LicsLyyVsYcmbsZiippZYJmtYvWb2RwZPNjXQoEkdHnX2WQGgY6XYiCbnawPeS7ak1Zn5i",
  "key17": "XHgktqwxCLXSxqMdZySSaXFDXb9Ye8Q663qeHkChShBNJRpRdkLc4eoPC919t6omxN8oervuTHeGqhCKXpMrgx3",
  "key18": "2gbPRN1zqzmppxdMUBPHxABzthvLLrNRtBmiRWbCUF4rRHZxHUprXwbDHi34cGpo4ZstLgKCVhiMfdXnWx2J6KnY",
  "key19": "4tS7HHSnHUeJJnR4Wu3WzpE6HoUgJfQ1eTM1ubeEsRyKzsZ6LkTiuyq6P74pxQs62PYa1EctYi81EP6NLw9nHixJ",
  "key20": "4NMPto88ABbKUyFTGvj5Kp9khdTqcLe199Z48Nu9BKCshfJjv3RYbe5GRW9gfe9mbwvwcXYeeqo7Js5ppGWZXAxr",
  "key21": "2rRTfBeee3oFyJ6QF33YVamNpAUjP8GZ8dUaGrYRQf5d5NinLiQP7inxk31Fa5HQ3ShBH5ttwPvwSm2nmWwdDW4j",
  "key22": "3H9HJg9BmbqV398swy1YbAShetsBeJe8ufLxm3ukZMNHh4cPutPbXyP7ygBCFsULox62fPypTcQpC9tKNihKYwD1",
  "key23": "5b614sY9Q2wg8kFvcnEYgKt1Py66CGtEENA1gLhh6M3VfbHFdtEZdqJXDRrLsjPB2mmtYRfj6YJHrxksxbpWPwFa",
  "key24": "5GEQBmvAvLKLXNVLD7FB9A8pKp3XXbyq5G7tYUqDxRDH3XxVpS3r2PQBEGWZYuJR8omzBHffnU7gZYWHMxSZck2V",
  "key25": "31znpcUrLVzUpnyC6NnHwkbRiC4ZSXAS4b9TgQULPGybDPa13v74RqtQoZoW9sK9jQnkGM9bEqCRmAjim4wFpNoU",
  "key26": "2pWiaChTHRm7mvmfmvLPeJb52yoFeBMMhf6FZFCqDNePVgiqux9zNhtDez3a8hekYG86dQDFfywQMXiQPy17nWA7",
  "key27": "4BmnrqUsrdNZDgBaKEpQnxMUn5Fo24CNTmg5Benstdoe3usadD8pTWAMAZG3531UEuhnke3ocYjxa9VEGqQNffdu",
  "key28": "Btx2dyCaZukF5bh8UHbJb5RnR3fbY3NYfx9rJXqpiRDsXYZ861AkBPsYrAchJ34bTwTSZd9jsxYuo1wsSmBUTrv"
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
