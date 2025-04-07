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
    "4e7HF4igBwkhRYJtjBjYhRWGSSsKvCxZx9zuhWNPu79dgSmtiX3citmX5g1rdT2xvh9KPPk6vFxatHCdkBnSVNw8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48Z8491fUsWZAjrbWcjzzLbSF245AsGBJtCfvU1QGuoJZpobJ8D3kZ2rJBtre8g89eUegUFJEHZaahcJ9MBV9KPK",
  "key1": "5RzPBDtfQHXGAz2uTYKh9HHPFerzHk46X7LxxMD3jyTEa4XY5SG4adEgycbfAd2HGUpDwn1vrR4BhzVptRegMncz",
  "key2": "5rmSL4agKQriys3jQvaFA7jCF3z8T9NjrydcYsWMyQby1VDSGQuCCTnA6CZboZPrX7WN2TfJ8rnrsevVkEX4SPQ7",
  "key3": "5YVmxwtPdqAiYNb2m1QgXVe3A3JwwraFZLEBRo3Zi69fHBJitNeNjumzfyQYT3uN6GhPJdvCVHwTfspnTBXK9QAR",
  "key4": "2ck6t3VJEUPc87enFFL5k6MjfkTm5vgSGUP2hamTihdFR9hVtB2LWWjUeUMPeV6HX7oAUZA6mKZUmGYnSvckAENs",
  "key5": "3dA1PSxS58oDC3r4U7z4G5aCe8PLNmsgdpBuzuhr9d4SydqozKBGFa83X1qXRnn8ipLwK6Jpfy3RvZj5MxwfttiC",
  "key6": "5w1JeNYkP4vBGz5U5sp4yyzqVdUzM9228a1RzCc9JmVj1FTchdNRz7mQJZNJddWjDZZxbB6tc8LEJeW6qZJKJMNU",
  "key7": "4Vw7Ko5rA4C883SRBAqBcxnpVDdkxvzhrosZmNaAePU19CERuJfcBMzbWikuRAZt2UEGevYfFZPphNq8wPt7WqHb",
  "key8": "459iLUPfQpWXKz5gWcaiZaAGy5DAL5qe3Y2nTwsBguvqkNi5kCnLNxpY7TchZhTCSJ6kfsz8VmYvveejKSptJuew",
  "key9": "51Au1jqRpmyT8T5pAp2hrehSaP4QDWYqMNjTHQDMtuKj7dQeyeRJLouQgqqmgPeiqt2FxTv7QBjKEaAeboxSBg5x",
  "key10": "4NPGva2wZmNaY2Jjh6Rz8CqkBmQP6AQcMFJSMK5ddmF1mkvtfQvv21ZENhgiAQf53Ec16GB8i74uiVhaFXCPAWgf",
  "key11": "C8gL7kWHXGwmikcq9h2T2XEkGcsdmNp1ozVsBqRY5dvU34uruYLMimjGzYdShWxTk3YT2y3DZwFnmdrJv5YFuiW",
  "key12": "6miSGGZS3Q8PWk2Fjx7gJpXVB4VVUDvD1T12mRMi6PynAd5GCNGG4ndaeGrGFALuPvk1kAygADdRgZcrbECjjuf",
  "key13": "8dFFj8RFih6oubeycrx9tqYyH76rutc4jRiP1piTLoRB8dDbFb6UGqwEoYjHET4CJWYTjaATfH9BiTtd8GyVt9D",
  "key14": "2BUwXdvZsWKgjm8e2NvqGcC3Fay6FDWm3YakhHtbdhqGyaTpHN9LavjHdMhrtkAtVcdDM8yUb91KjbuybBj7aipB",
  "key15": "3Q5ThEsoQBfuJdaSNCihLDL41oH96M1ZxHWv4Jwk2hGze7xJzXhTfwtQ7MW3enEtJVADVDdyPxn5mbtyBcJPcmTB",
  "key16": "5LyVyesxfXDRfc27pmgbcSwStUcJTjg9q5fWtH1EdcKiT11CpqKiw3r6QevQ71AjUQmwzfMeJ88j15SF7NcagYuK",
  "key17": "5E3TQyjo5QSFtYbArAUw1g4k6YvNDhAzGXDLJuyq6AD9zYtadzaERnztiXQGzBvRn6ttGC5rEdSjQ7VyqWnKPrHj",
  "key18": "2nuqWdJmk3RnN3PBEfrf3KMmgocjGtuGkcKtmEEBsXo6CPsdNFwya7pD9q7YaUWjtEi2uat5mTaF4ndvA7kr5uka",
  "key19": "ZQ3g3Qqt2Jom6KRyZQL8mjFhjS6ScQu7ibrnbAcGMEibgB8P494G9mtY1f16faJQkFgmZQPPvy13U3eDv9FryKo",
  "key20": "3iJo7tYncLJ6i14b6ykd4WeHSaLDJW9iqEBeQobNaKwL1q9TnpKWJArgQfxPiWn51qLYwseu1QD6RoJ3wbbpPhCW",
  "key21": "2Mpgzg2vxhKeRKtCNR3o8r1vqvnzXrGrSvQFiS6t8Lqrju1o2Yn5ZbqNKoiNBp2Zgh3LMCXeABATATQ9K8idc13",
  "key22": "2aG3otkjpYvs8UtaBpgGQfp3s9ft1JsKSLhaukJsBxr4sGgwnp5oB19zN3F9g38YX6yMAKyheDY6zMkZGrXvpTfx",
  "key23": "5zrUn1uJPdFCVChXDqVcFFpdsoES2ENZo12NxwEUUZzceXK5qywGK5ob9b1SN77Eh1pa24Tq78pZUNZMNo5CFKbY",
  "key24": "3PAiUK7zJt5zcGN3Q9i7Lk313Gi9qcao4S3yePHC3L2ALcKifufsFropWGgw4YGaxeTMNFm2BRhq5nsfdmZscTyU",
  "key25": "5Wveavmfq8UFwL85ujGo17DWVuyKbL2eRsCvVkPuF7vkhNvNhYyjhwAC95EXL1CHgmUH81XJ4NB4PF3FUfmVnK5h",
  "key26": "2PDa9LWVbEiictS3yf5kLAKQKM4WRWZvi3Z2oo8SgCUGUN3K5PphJXztMBdSGrKThGTYgYENpnbwjFCGtn5spU4J",
  "key27": "28QQxPcHBiUyx5JxS3rGPHLdPW8iX7umBWNuGKjPADeH3qCH6aXogKpNHCUMmv9SMJfXcwZYEQACJVDQ4eriX7WE",
  "key28": "3D76vPB7bdKd9sV1eR5qZUFK2MVLjZyWvzb3ordzBqDhG5JoESZKTbdSKVbT36czBR2P5rDMMXvVuR5Zm2UfJAjP",
  "key29": "nW6wZNtGeDvrRLYBEweEa8xgkvsp9ZaeYyFqjGLFF8G4CRZTwW3omjyuZZNjKn56prgX9BrAzC6yUmvrFehjWze",
  "key30": "hb1uuys6YEEa5riXBjbk6ZXt4trNs9cszgqhRomsK6sKFt6R6MayGBq76hC8k9pW5AEawQ9xkfZB3rv94y6YBjg",
  "key31": "2NhX5q7khXvuqEnxzSj7zvxms76Hm815NgQ1fLgHtuoE3SXFXnzWkDtXNZsKKXrSK6uj4bRAifoVDdn6e2Zn3jBa",
  "key32": "637sDvyarHSKFDJ5H4MVN5iyr2HpQpub8hscoewdTmYhZ5CR8AonXFfdNgcS89XQ8rx9QE9gjEgnUao9Hrs8cZLA",
  "key33": "5zbcx664ZoF7T8DVMzQc52MFaWyA7iUXNviiCbZXY4RYKPVF1b8FyuroK9Juf6mysy3G46CBxWBFD5FWLp7Efx8d",
  "key34": "VePRfJdR8nm7KoCU3hB73TBERgGvjcfu5J45qPWYCKdfJBvenKpu3m5qawVtjhKdjTFsrS3JH8kh3mnfPutkxSP",
  "key35": "4RQnmkHLi9wP86uDPS9FqrzWFeXN4CqfHYAi2K4RrBi7PfE9KdmNi74VwARKqT4HgcbZQsckyuandpkgQ49vkLQM",
  "key36": "4JLiaXe2rgTAC5f8HkbXE2Rc7Afp6vh9npwA6cStJHVKGDMUJRqHQJ9SV91sFEvGWDV8a1CTGtwBrcsn6MarXKR7",
  "key37": "4JkRgn2GHas79uQWHx1JK8VY437rVCYunyoRrotgtshfBHCeLDsguxeB9zbELZCH6rz8DDnYpjDNm1PdZFDMXve8",
  "key38": "3kos4yejUfTnhDCR6ys72CERYnm1DjPFMSEqo68XisN8xG1L3Gb1FDL4QxKURWcrTXerL1veVreXJUKNFJsNGVeK",
  "key39": "34pkdewzPNEFayiShhQsNqTeHwWE8pjKc31Dq1EjfB2fEiJvRST3T4XPbwe5AfLhqKAoCjvscmK1nkmAD1daUW32",
  "key40": "39Er43uPbc1PTVk4S87BVNJhZvaSy3r58wsCfK9FDtQaSHM4c8B4pSN8af7EWWu7T6H9Cxtfaqi6J5uy6qMoQYUd",
  "key41": "5vuyyJbcPYZFWmDSkdN4K4UBe6YnyqHPmsFhE1GPndtYPibNp6QZPyyMnFR6YnPC412JMGCLa9TCo5SMmo1aTBBt",
  "key42": "4SSCgMrxvarkTWUGu2sCk1g6xUkKYVaG4XEbWx23oVx1LZSAi8Uf4f9ZJcDE2PY6QE6TTaoQia5DrHCR4PfuEzsd",
  "key43": "5kfWxXqTQMxXxmrKqp16sPbDvbCDjfuXq3nnthzHAyDfbTQAQPc3YW3KkEGMxBNJX7PwxapTYj9i4wuLc7pjQr6J",
  "key44": "3c6pm1qPE5qqrCKVTr1HGYdP2oD5qNBfZxCUGnZ83bjadsZp49ER744ocLUSZrctudqJnVE2D6MP1ZjnSPjKrg2A",
  "key45": "3BJjEro3yxvGXdnHGxxhvpvNiwr9Wn8pMDvZwYFB99mydjgHUa3itrefoReTBipQCjoaq4MA58GzmiKvz7XT7yuX",
  "key46": "4uywXDo2baVFSkP2SxcJactiKrqc9moKTNXbfJA9YNZyWzeTgd2R1Vhg8e9fYp1MKJ3kXhFeNdhtPpcLJL1w4dBm"
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
