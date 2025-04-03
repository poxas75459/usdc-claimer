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
    "2qxQyGgN5hPNEHVKkd74Tvsmxwq3ajnauCbkxFWh9xLE4d2CkTtsmoo8n6peabVMNX3ENMzcyKv3FRpEH6v1VTn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FU8HLiRbHLhFb55jNNjTvcuT4DYc67xXTFZeyqXZ3jgzuSEUFS6xVyaEx6uYhhMjzi7YtTMADv3aXY1tSDgnLge",
  "key1": "pbDDfLRDgCGfvZyF2rgsGkwpyyakbdpExERy3xuJqQJVZ3s7QPoWGgySaPCYMxVB1eeHssKZQSnVa7eEsdvzeff",
  "key2": "8pwjqJsRce3xwffd5HsZmq4QPkmzJZrQmagvnoP1gvrMibKEcf1bgedrF9TF5jwAEDyXAfkU9LvuSggWyUSYG5m",
  "key3": "ppWGEseigpry4c396kzXiumBTFV6Dz12yPz4riaNBHunPSV3yF7HNS6NxL9ArmDQ2ZKBy1KScgFz7yrYt5Wmv4w",
  "key4": "XLuAFPyqTsjmcuvhC84mHPoj33qEo6fH156vgSFSCoCvFz2rP5ikNWnvcmcAELRMLecr3CCgqFrz4V1quDHsZLh",
  "key5": "B2PgaBuWAgW9fb1ZW7Uc4kfgPWD8NBZJxNW99NFSxaVLxvPjoCTvfgG1WuGR4LiTdermxAJaARYKzBNCnqMfBpD",
  "key6": "2buxGotMSPWaoQH3TPDowMRyLRZSjM32ho2vRRXhYb8WiXaVdtr6b58PrqLiQwuPqXxchqHaSDs6RLSEyYNWwUmX",
  "key7": "xciStApr37YbyLXRq3UoH7uEpfsgJmRs9LbXFT9EwVWf4FW52sd2v8r45puk24FxhF5Vp5QNcLK8MXXJ9RcyasR",
  "key8": "5QBm7fa6jjqpmGhg7pj2sC2wkVS9AiGiSM6ny8EcUdY36yB9LSZc8RQuwEWhgkpBFcY4WTvmNUgw1UN8TCUWhuPM",
  "key9": "5pQKNHVR9eZeb4JHFxDpm1YD4EyWRdYhDnonvspkwu9tgC8ka5WNXqdUfFVTxetYM58mpZjpUcrPuzuk1hCkdsiL",
  "key10": "SN1MP3Pe2mxkLccB1pGiVhaweGdXt1JzmuUcURkysPGb99DRbxJJDe8brucqN9o6NUKdC83wbjXALASm1xKSd6L",
  "key11": "QPoFQE4pJJw6VVBHKFyecSVcRQskBmepCBQscVnjgfgC6dLa36Z7AAMjp5Uy3xQUh4XX6igkoLwJcKbwbHoUK5B",
  "key12": "2fE1Sj9W36RbopKug3SAYrAGRzTikFZTo4RR5GPHfo9PbcMLfdwu2Z4Sk7sAMKbzjrSLJZN3ibcYL4mWMfvhJSeY",
  "key13": "4LCiCDMJKvmX3wVieBiSvCTwK2oA2C3rQXNFSRLMdUdn6DFmmAXggXNnUNd7BUDCBqd6KAmgiHhrAhcT6gmWMGAG",
  "key14": "2GRvwa6pxXCsdvwf8YmWt3C1wLGY32SgSkJQwMBNEac819WyNABqnbW3j3uuQFiKrFRbyo3HPgUvpchhpDyKYCvj",
  "key15": "4dux3AwcGWvsY1uvXMqXwHVqBRpqsqu5xKFhqTUbQ5Xd6tVqqwUzBaNmdQ3oNgxWCNE5apK4BANoFAvMEopqiaUC",
  "key16": "5p2kuPZXhFxJMzZhwDhb3xZwYEByczmgbrsJ6JxKeg7iVpuBvvgau8KGg7QE4XtT3f47VeVWFxJFwgyqxf1J4ffM",
  "key17": "5z1q1jukg3dPvELbpwT1k5EgaX9SRkyF16gJ52pVekGFXSjTNKs1jqz3BPGeJ25yAkixXPBwPeAK4oBrR9qufWKH",
  "key18": "2ejfRfKJh9XkhbuordPXAFrAgBQEkCJxRBvwnsS8jLfY2qzf7RTu6WXN8uJmMyGVC15gpDANGPrU65JerUWHN1Mp",
  "key19": "26HLsSewj3VKwUaYwZTbYNHpfrnvvA9fUQgFFRYGUtmKiZhM8Nu33VyFbF23zh5U3d2yFn4TYwSVe1P7ftnX3gGS",
  "key20": "SN7tE57sGSJfTm4eFa5GyS83modvhCpZ9isM1x4BqNUxxNts4ojocB2P1kQa6UnAftnL9jHiaU1ZuQ8YSCNz1g3",
  "key21": "5UpgxQoaDXXsqeGW5qnNTBjNPtYytT7UaY8r1J2BkxaX3ds384XEq1zMHpsao9sq7TFH85YUU2L7twexUcTKhDTB",
  "key22": "32J1Sps66JLg6X1fMPMWur6DaBXVMy8VQ4LEu2FkWmiSdQZSWm8X9EX6iEZRbhcj6GvXAhhw2meD7V1YLM8pkLaT",
  "key23": "5CewxwhLYtGU5y1hHYsK1yrre4EDDxHvvb8fTMNXcDsy41hRKiPD1sovsRVhbLyvczGoUfMi4H3WgAdEi8yWx4aE",
  "key24": "4zaJiQ76vQmRaGE2U8FZqDaZQP7W4o7G553Afa16Kt3XC5qNxVLaiTGehE7wc9siTQx7JtJYtu9xqP7A7ZVSk9w1",
  "key25": "NA2ANtoWLM6jJFR9vguZy2prRxKVxLNcv4FS5v3ExH9zPFLY5HhmtSJ3j9CDrijL4kSGi63UTwuqm5va69zM8Fu",
  "key26": "TLRkhXQ3DQ7BLdczjmuVmCv9g7VjDoHeEbKuRNYqEDnWgjHqVWT19kRxk634MdxgVdHvP5KjfGCdyib9Rwoo4cT",
  "key27": "63VUBBryEzWFiTr7aiCJzaNtD9Dj8VDb9fu2GTVJy5ApygTV6A7K9kYiRuHJNzLNGL7CXtW26xaWLYpGt7tXBVz5",
  "key28": "Dss96pN1Yn8EPQtDFJyNZHCWy6k4A98n9RdTBY4XN8N2eXRdKDmSvZLB1oB2WLLbKVFoCFwA6CfgeWvuiQviGE8",
  "key29": "4yz6mzZqvENaTpix5bK42sTwaWRUrAWUWvdKVDG2xe1Prt7vucG1QW86TqWnzy6isVk1onoPuEt8W8pLm575mCGx",
  "key30": "4r9FvEbdTUjPcvLJWoNUG7phA2yVqfAVJZzFbjKp24xv1N9dfRnoxuGJpL3Ych6DZSJjYuGUjq4SsAX3jmXAhzKA",
  "key31": "3xEScJax992fTU5mF7wkvXenW2ZzouPyU3H1vSQPXGVx7UXeVscfkGUHuEr8o5JVHSQ4WiUM6hdPJkdhQbLrkaDW",
  "key32": "LXJotuRYB8uJRyJB7fwF7EsCBgs8XwcXUo3BGxZAr4oGewPqwVVVTicRR7f9LLZh6NSjtykPyMfBygC4F7W1JeJ"
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
