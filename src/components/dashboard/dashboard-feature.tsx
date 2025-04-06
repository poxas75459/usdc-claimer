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
    "37TPLuJvWc2rBDik8aNJuoUc4ivov9yzAZb8sv1fNPQbQz1zR7X8nio1KNLx2jBqENPXz3je6BanPfQu8jMvm6vv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xWc56rSodG8hgi4M74sovPUTaa5vFByM2XmVsuUmT8kM1gmTLQY4CkYdydQsyz45MAVJgXst6QB9ttWTuij2pmy",
  "key1": "2sVHfrLM7W3wyDVmKT4ctw6c3wAPPCut2QqM3BawWFizG9PwGZF4EkacKozz2XwGVPN9uX9a62P5kCkJYBQx5u1t",
  "key2": "62q2uGttXi8buG2GGWcFCXVTT2K27vhzSemFCK1jGQDrKhwTj9yB27FwFJbaZwjnDHG3JmfDpA2KXPvV41GpFXGA",
  "key3": "5euSftoTacYPYH8UnCDDiNtoQawxjKTNFxuGzF3xih8oUkMLqTEssQcpyz7vKrTpPKFbTygzz4finLjXYm68R9fK",
  "key4": "4PrkTb8XZAn4ekP4m28ZXLL3K8ZKTbocTEMQ23nQS2BMn1kUxKgvxGKNTSzdpvuq87EvZpYu8bzQe2iBfMGxS1WE",
  "key5": "56uQgmK1MCG6vsnvSQjimgP64VBvFkonQ4YeVciJmvFWQs9fiZJtQUVvUp9gdo6K79Xn3JohAkCBBZiQAVb3r1pH",
  "key6": "5CQcy2RMqX2FhmZUXcX9mLYWXLLsswDj851UtPaNdRaxej9pREiEw2kq29D3WSDjzfLkb79mzAwFM9Yf9ghhVrf9",
  "key7": "5KdwVCRorKgb8zM2ajNE7ZJ1Se6BH7VX5Fj4FtR8ST7GBQTH5MnjBCN9Ug8SSS79AMJDEonZeUiBY7qfYPH18V4i",
  "key8": "5wkygKYtXKvKrFUCQhQeC4pHidiabzHZPBa5GVbHHpUnCTtisKSivnKQtnwhxvhuEK3WskJuBFFyoiHJpDAnBB6y",
  "key9": "3UaBVXGvJE6rC7YqyZRLPVLE2S8oJHAazRxwrinC2bZXbhQT1SkMB8yr8RyNjAWRCEQCkNyLTtA6KsfK7RtQEx29",
  "key10": "2HPzqMmzCxxQtBE16Zyw5jgR9xUPuM9za99JXVWiVrXV1ciGbxWXDqQVH7STUjbFKzXCpbWqvmsLE6eg2hV2PBaZ",
  "key11": "4dvqNyHeLCa4SeXMkdL3uSbVNsZPnZnJUrsw6cP6nZyWKDEX6E5Q6jwWArWc86w7R7XLFmCcfHrjW5NtUFnbq1A7",
  "key12": "4b5uTPuxN5zoWuuwcY6oUBGA2UQ7a55tVBKCNRmLVdkz88FLj7pSpwuXRxWGWzfgjwFzMFRSf3zKVnPVv7q4f9jW",
  "key13": "3R1QFeToAThkmjrT9sNuWVMWBDRccE8SkziWtQtqcfbVcTnMeraRDWZtzqJZNok1iL4HDaWiZn8C15jCSNGmUFLT",
  "key14": "7AH7Z5m6HP8bFEivkfhmc3zr4tg2HqE37sGAqctmrZv9ikKN2oZigaohNBWmQjEvKUtDkGiCGcnFSyS3JfZuS2N",
  "key15": "5wiuZSTwKrPGY5zg82xZ1zGxgycGVcg92NhW6SC6U2awwycjNLhr8PKWvLhU3vDLmZbhNmMPpcCRSmpZwYPhVDqn",
  "key16": "2PRuujQyUShuPtf2ZPapferyfJo2RBvM8DenPhApfguEe8A4mjwgTntg94VyfY6xqQkfH6iSWRsFDvExB752xAbg",
  "key17": "2c8RczMYYwU28A29jViFMz8i8gMSx1vrqQowqBH2HUWJUXKt4cZUGuCTdSPU5jGTceB19DYqFDd4N54EjHZpX6Fx",
  "key18": "2oLsBMui34AfwMauJMRMCqLxGf9iYiE5f81VLPTb5PUXJKUcN4EqYhvTnrs8gC3SsvKQYA7yBnfLgYxdQ8LtUjn9",
  "key19": "5tugyN9EDRCP11qMWrkndvErVjk9Tx3tNC3JtY6HQNhMf8os6bYG4XPSmivXNkDnXqjRXPWJh2i67hJBSxfuxzaL",
  "key20": "DBiRg6P7PezgcAVbbA3iZCXTAiBWqyxt5kvuiKF8r75FmcGdJDJA4kbz5W5tKNW76sDSN57TbGf9XPbtfvgcyy6",
  "key21": "LknSNwZH3SCA2APVcnM8tt8mtffmzHxe3ZDrsEQwGsJvxRxnPUEsxbDcw4Th7cQZo9e2xdm777buJ2RuEfTY1zK",
  "key22": "5ioBY25tfHYFsiqapVQTRchpDb7Fgwvgkf5icaYGQf2V1FRY7Png7BGF54Sw3V7oKom7Weurrgwbo2sTefrQYgBQ",
  "key23": "5duHm9YbziyPCjm6ECPbdL3QzgXJo3dMAub3cMpeB64WBD62srP4av2vR5uwTfEAwubrtbkpr3xbMtrNhGZNz1md",
  "key24": "2NF8ACzw2mR6jHnyBu3QCFRdT2rwenP11MExGXx4L13G59GxCKn7fWykP61t82ZCNjhcfWatXHKsGXBegkQKwGTm",
  "key25": "55gsdT9DFhhBuaFwjpdr2eyDmvgwgaPhZ1bbk1L7i3QTactRXvLUYekRGMN8NMKJpejnmQ2EU5gtDBqZDeBPahsA",
  "key26": "2KNLMbywgHbMdp8ih6rF15RZwSzxoRYHYVje1UTn9hQwPQScoDuD6MPBG6dJ7PWyVUBBGLeXFvm4281hJ2YmkP11",
  "key27": "25wG7539Z56ZTt2Gr9mEYVe1T8mFsw1i9voS1GMXgbKopB4gKjkmQ6a951xptzLVziWsmomLvfnVk1MMF5HEBbns",
  "key28": "2PiRswQmri1a9uxTP1BN2jcjWtJ9CnqmHJXifnB8m3TW6JZkKPvtRzzsSZmgndpvmL2rTmYsTAdGSsMNL6j4BRx",
  "key29": "2P1cpJqgaQAR1x6DbMmXU7YbGavqEyK7Q9LTjutFY3Guo9cU8GTiqQU22ZCoiE5DCjpk786wNL2ZD7txS98AWjs6",
  "key30": "48K7Gw8hsesBn6ruA3dVfC5srwZ79VuR9qK3ymW4AhMpUAfiq2pE4GzbSEdR2XjYacLc4Y4YrNoveBijo3jeVSbf",
  "key31": "3C67aZ2khcRYstt5y7N3a2tfwymgAdmRHtiCAeiB8PE1xaS9ezfdgMHZNvdLHxmnUcxQdoSMKypBEXmbiN2pyukG",
  "key32": "5uA1pFgqhAu9b4NyY4RZb7UdQsGPYbF5YPXYNwjXdxT9DMNGD5VRYQdT2y8QcUdPrzr55L4RHkLR7KLUqA7Bk72A",
  "key33": "4wED2XEgHPw4YNxPSee8RPGHuxU3b7uaDJDcVGJeWkviExvQLf3vaDFc2j4mSbrUHKbMed8Vakihk66TgpzHmWMv",
  "key34": "4qMLXofespbrYAD9eQ8xe9D5icUr3ZMP6fXy6bJqHZZTujkQcrYC6gSY7XUDfqpcfFobb5bVBKjdSm2dByZ6Ydcr",
  "key35": "3W4ZgEjZkWURtXTdnTsj2pzWGBJsco3a6TEgmyiSckTDyfworeCWeS3pk8CW9nrM6RNVuaXfhcW5TMHgUP6ibXH5",
  "key36": "39gqH5xz5hTmnZkS1N8rGQyWcPitjBNVNZSBV38iKVg7bFxHNC4oZEo7JRcqprvWTQdREWPDWXxBAF91Xu89VbYK",
  "key37": "4ZU31DjiVmdDGWdJiQNEeFPz9qFnB8fCkRzHybKR1JCU2KTEf7dgX2Awp1zMgiJXKHYweGipd8nEiTLr2dfvrNtp",
  "key38": "2dp4Tm6tj375Urt5aT3wffCf52u8oVcPKbF2ZejjDsDMb5jir8HCRxEXdvmn6swQBcCGLUxLxQebw8iWHUoVXV3",
  "key39": "4dS6gp7rBTVQeLjh1cW9xwSBNtmXe7UrYBMAKk6ES21KErALM9JdYVEFhRFtQf4KuGX3HR5tUQn5uL5SvzvVNYR",
  "key40": "2LnUk5GjhQruJxYJui9MhEVWYcb3N6bgAXUzGxQieLruGeKv6qSWaZgPvuwx5FrTSCUNp6DaSBjKduTVWr6Fp8k4",
  "key41": "5YDn38Bwgifq8itsFkKqVH9M18S3e7fgn18e1Vbv4JfPyBr7uvTzSEyhnmHkKqNzNEHU62cYmtcQsTneMxUXLUqh",
  "key42": "4sH1hZ4REfgSjp2h1NFE6C6tGdjpgaGakP39V5Xw2wHx3HmQYWLKxCYgeGsw5rbvB7AFByekDnoN22HmmwJEmnqd",
  "key43": "5M7K5kHgVMUNsyrrr1SBP6UNNxBcb4n2zZcoVGy2eP38sJrrYub64SYQeUkm6wi6pLkEVYLRJgmhRJDVer97gaFx",
  "key44": "AXuRXW3LwJ3o7LY9CB2KUiFe1vmL6KtAEMeMK43PhYpL3tLqZyYH5bwZ4yjeEjugNgH3BX2eXJViK5LCQwRXmtE",
  "key45": "5T1Q24GdXBTox6McZ1X845mVmhxvooGDLDY3nouDvoiZY7NXL4Lbg4jjLfSm8Q8ktdBf2rmsDZkzPdohXxe412XR",
  "key46": "51AiK4nB7VxusnwDPvs54VWbTTq3wnaw9JEYEnCyuTzuyVb3mwrV4q78CsCrKa4EgbCa9By4GtnF6AzC6Jp6igy8",
  "key47": "dgj9TCBXvAB9Y5xSGPsLziQtBFdnUUskuUYY7fWX25tJvfAmBWN97tCB33ZiNcEsLc2W9CuFMV27c5DEzMhduEx",
  "key48": "4ZEX8Uch73Lv41Ces4P3GTK86QgntJNmBjPwFLHb8dyxvE8AP1avd6LWDVo2Rh3BANKtGTmJocYVo38tmjKhxHWm"
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
