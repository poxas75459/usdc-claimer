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
    "5Kty3713Hp5x5z6by5CdDpMcHUgFj8TTx93LBESn7XS3R2qczb61sRW7CZBpgR9WaeSY3ir1ePeiQcGJHHKsUAEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DkFKXaVBez3Gh8GNBPFemu1qtsVTe4qdsQNJeeqtNjQaeWCf9uCVKWFFrkG4Vez1PT6W6EGA1LdhBUn5bEqA9Vp",
  "key1": "3hjEXSx1tgZvLYfstd5g4cwYuevv1f1bYL3jy6PnbnEdMD9W9Bj4hDFd8TRKMbnVsitbRnF8KTHD2nAWHsDrhCLw",
  "key2": "476HG9qdaBPMN7mTgbxQdn2SE1wmAj1yZoF4DjxotyDootfSAnyz2hbuusRmkS2zdztgAVSnuGECpZKq31zDGJgK",
  "key3": "3kfoeNFGbhCwDCQu2CYsCUnDRuHCDstmFA6eFCKXwGWqq4izHYJd1mAnHV5wow1MjHtSmqthmBEazTxLtxMcXJhW",
  "key4": "8DYpnUpPnenfw6sV1GwksshGG5QFcbWcaGuhb9AvDaT3gYMTKNq97piExjLoXdftgwEDDHAxGABUxqsaaeG1LDi",
  "key5": "3bcBXKUPf9yBuUYopHtzdR1Lx3QQ9zAh37jF8NTXxJKqk5HqcvFHgXaUTJhk4GxGbfWs64MVsTvV7KiTHVipnUMP",
  "key6": "2FgACoHPh24xtA4YodPfGQaNryJuhLKamNZaWZBJxNSv7Bz5FVtMcg28DpR9iKh6d6rwhFbycrYYieSoE1uDKW1X",
  "key7": "37DrrgsXkHecJQi55sRLo7Xe3esP4tWPTymN3NiXjdsCmS7Wg8yFoosLaBkTB8HfkAc2mmsbpKBgU2vycbCBysDL",
  "key8": "22cdK9B9Ua483rWoEya6Toki3DMckstWbHRH6PFT23fF4xvKJgTVMhwpXTRvwuJfepPfBqUydXMDVRcP66mHwUiK",
  "key9": "4czJ3okHfd3Q4GXyBTw1EtCWwWtuTKsezVoayuo7TppR5e9RUBceGU1mBp6KiRcpbAofPLos7PVaSXvM2cKyaYZ",
  "key10": "4217J368GYmiiSqZbZtMjWrqtdSNLhgJ6nFoMZMrsF4b8DnfrLrER7crfWbPnmnujMHrdzbAS3gTdgzYNmWjdf62",
  "key11": "3c4XrvU3PuYDvqU5ZXvA917GycZFGK556t6f2Qi4aMKZZumrjZztuEfoqWnQyX3AbehUy5hBM7GxVsNbXdHroAmC",
  "key12": "31pYsLiiFk9578KLBbBpSQXLiFCb79kk8CUyW8eCkCJqVv2AkSyhv9VtoPdc1ZSYVBD8u8thzs7gNw8RXdwsftqF",
  "key13": "2Y7cTSBSdPmDRzQeB189cxbeVUuVGdnitn8tBCRbxyKJqkqxTwM8pBbegQSPzsAMgvLtcmfTtQL4SJiY69pKBb58",
  "key14": "rNu9Pn3mFADCHqM1mEP1F1v6dWBPDioiM6d8qizJAut8NMVYmDaZH9Roiw4bsTY9Psm9crek6tSSEx6k4Hyo2eD",
  "key15": "7wRscjkYCaD2BYomGYtzxpeeK5zRE53ukk7KdmfH6hqeFYdd8TLhFruj7hQYi3ah56wAQHyy5oFQi2UcQ8Lm8N5",
  "key16": "5vqhDvde1JNnVYCY6G7XbgSTojeK8Y17zM9K1qRsuXzp2nDBHq5HCaGfbPFtVdpvY46ZFHjDiCRY3uP9gddCbcBB",
  "key17": "5A51XpZbJtYFVuTRXH1VRYZ1xvP42UveQCVr3HrDX7spW6Ye5ywfyDt2z537ty9AmACiGBAhSc1qYJbXPyNeP3PM",
  "key18": "5B8N6RE7igKdUa84AgZrbwCneVJpzNkeCeqcJEPCg7f9QbNNtrtt3d76Za4TgrUxoJKwW4E99CYBoevku4vQdAte",
  "key19": "zToXrnwiqMycC3dC9Vo9M1ncypawgvVCo4dWM7gJf4giprKGXN3i8QVJQFHUz1Rof1EXqWuyUMdw9DeHKxkyjLr",
  "key20": "4ZZ3uQNbUgmTkPGXBSu2TcevnsVZ8DSsEoG83DaF5t7fRna6Xfm9Fg8xHRL2TnuZsT8AtZzE1hQCoxv8vxMhGMYM",
  "key21": "5QiRtZhhqSS2UuHaQUXGhrA5C5SgXjpxLFzgdmCWzs5JtKmsAnZGBdhNxf923Aau4QbN8LKKUmRdu19ppeak3y1D",
  "key22": "3ZPtmfcb4kHHVjWet5KUU29m556reuMMk2Hf2LHXeYp4NjFjdSqFiWViKEwAXTLprjHbB4oTrir8F6dgMNpjTdqU",
  "key23": "d9MkAoFQYtFTnJA7Ju2aZRKbtNJcAtyYT1u59NTFRpw5WXYBkGmgMKFmPr8TVa7JMRu8wKiKcFdtQjMm3nDEdN2",
  "key24": "58ncmrzy5exqf1BrfebtmENhg56sdWGHydbH6jBE9o8mwE2zjTYpnxVmJ6V4vyJzXCHPEzendbvDQiMkG9n2qmDo",
  "key25": "4hX1rQG3eMAqSrcHqtHAfF6zqxZMcRNkVT8ZZ4wbeVs5fF9rxSJmYK2PHSCx7epDDsJs3wkPyj5Ez1WdSEgkG8jc",
  "key26": "5VxLPmu9pUMLEjLV7Mx5AULzam6v4BxDnvmtSna4uVQC5DjwJDR56JzdSU7vGkcsAVWsG7Bt8YiTYPiGurgKnVJ5",
  "key27": "3BSbuvRZyNQ4PR9PfvEu9r5kR5THuGZFKSCLFpDzjbrcwf3fhyKAq9ApM5R2t9AXQrwhJifsLKM3BvsP3mrwfsjB",
  "key28": "HzSGQ2STGUa6GCuCbfF5HuiqBsVCymt6ApauhY5ADRdFMBVXQW14SF6bqURy2ZRsX8pkqLk9ULpyF1noq7JZFsH"
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
