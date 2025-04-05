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
    "4zyu1UXs8SUWsBdTSAhYjAKBe6Xm2VtFqGnByirgdvLWwQ9WoinguLZQ7NW2Xafuge33hCgETAAP2zMkAkkK5oVN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mu5CtEvy8sCCn6H55wj9bbEDxwxtmcXRMKVxoeF6Qz3VFrXh4HPkwCDRdQ3JjTicrAJvreYoX5aLmvqy9sxfoG2",
  "key1": "5rG2N6DxyLji8z2eWvWmiJLhEZkrB8F52DrNFuvSQ7stQ3ZL4URqo8ymfe5aY3Xj3YvgiaM9UFBx66GPHzUnvpbT",
  "key2": "4uohykThj5Sw2GpCW36a2eoBXtMLLoxc2VJ8pLcAjFz7xVKXLkNxVcgHihPVEgwCguWFxHhgXmXF1Y5URqY9jKpW",
  "key3": "4QqcxPuWVp7hrEtZ8sHamwwxkyiyYHKskProvwpMZE8H7rwzVxxDM3xJBDHCnyCEpNDRND4KEo7HQrk99sqhoQKh",
  "key4": "2oeW5whqCRVYkdYtnaLDyviV9ih9E59dSLmqWbnAuEVPfCZwUAKCyyAHtVdFbfKPGG7hZoRZM5YpdEyuXmCeHH3v",
  "key5": "21ZqDCmuNzPrZhRuu7Yj5vrpn92NnP3YS6vBM9rFazWiT18jaNU6c9D7fY88Df242j2F3EXj1uj6ZfcmuS8Fsqm2",
  "key6": "4JcAcHhauUSkVqkSWa64ykgJfp6y13A5GGJighAMgmcUQQrccMuiBgbGG5grJPfUrSQR8VYkLaU9mGLSKaXuFYmf",
  "key7": "4thxi4WZLDEKdRBSsKebw4UmG6TVEge1mJEUz6oeqQvnGFUSHtC1VNCaN9DmJYKj7o1eHE8LEagL1sGcVwexus89",
  "key8": "4xVUDhjpRXPMKjiCgYnM3PG1mecAn564H3CG9VCk8pUtehLJS8A1z8e61N3Wd5NLBFVDHoK2Xh6Vd7ngLbXLF9CR",
  "key9": "Jji5K8iz1KpYZnyBeF1wM7gs76Lk9H3aTQ4QgggHLRXjEM86icwiLs75wWcYugMhdY2tbX5rPrEDt9czBN65m6M",
  "key10": "f5g86nBydFaxjd2gCVFFmgSGkcKckogGjHsg6QuB6fziBdNp2Yt5YNwn2wDpGZ2ZwAvkX4KWHnSfnCfyT1585HQ",
  "key11": "4Ky7s3rAx9NSxvLWi5CjcTEV7MGKWotfj7L4VK2cixBhYJcnmgFYM2w1FUjQ1tS3WynGNDnfqFucs2VFQabcSN5T",
  "key12": "2YDMtC6QoGFaYaYnGD22Ygbxs9Ud5MhBzHJL828HA43vibtsJ2eaGMHpEzpDENc1GDviXG6tBcfGsDGDKw4oUywn",
  "key13": "kxaBFzVUhmQTCRPTmbPVYaBTwCZ8UcUfpuCSoiKXb6oGqJvzzVVWaeSXynHF25insn89ySKgt8H7PY1XFxmXTdM",
  "key14": "3B1YWEF46AbCGD7LopXxkzs5oEvJ6JBVcmCazBRekk9TYKxNb6uovWi6jC94zNL1ecjoUPxZKmtHFbBkV2Sscgun",
  "key15": "4Z77p4hMuq1QXaGCuSjAzQr5sgwdXApeZsid1kEhi2dTk6mpScAp3S5aDJ2XezWRfMPKJbKMgCpZtNTQZQJ8oyba",
  "key16": "2Zi7GLz4uPXsUzuqHhNppBkkWbVKwt2Kgfm4N9Uz3G2215wjUWCALjxrRwV3wYcFDRKEWzZ4bdf6AyhjswmtJcPD",
  "key17": "vz5Cv57mx16V4Q2gVu2A6JkP2iiv3oAL2MLWTSnY2Y1Hw5EC9gJZoVV6kyNmvGQ3yt37Beq6GVeuN1hAgHtXokE",
  "key18": "5ThBJoo7QJ7r1c6gvro3oCD3tiUaoasdm7fuCoVFKNqS2U6ubobyMTSeKppuKCNeiU2PX71aA2divoXBWCvo5eMb",
  "key19": "8TYEVzyP5PnJ2qPMaRTVXQRrn2m7gu8XXHMjcH4a9BzQkKc8L8QEATKxviUXRPC8VUjgQwg6wZ9b9jubY47Xyqq",
  "key20": "2o5VeVNuPi34yRk5AR7hZjJQ2RCCvgjF7Sf6VSs4dAwwb58Hw73G2c8eYCjvHpXGmrPEHKXHqEns9GBFtLJfZidZ",
  "key21": "4X8rUhyRAKiH68Eq1h17DUNwteoFuGWEMBCduCeTv1bP1SCMf6C4bME9xVofME5Pbbx3JjQxKgoFcQMsWEHihNwR",
  "key22": "51T2MLr2UCbb5XmnUJpdV7Ggit3SkBHZY5QfZduxsfvPvq1ycWzXnMygw8EoqQgPp34qjNoZA5M2g5sbqDbFEyKc",
  "key23": "3XarJzMbK76jJsB9sacSGS2HJcoXVwfoucsquy1yH2EABXzMLz4pxTJLs8ZViqcRFsM6prWuLNe95fYM2VYTh4Nb",
  "key24": "5Q6FpcW8DxpyL9Fjw2H87HmU1zMrQw3ePAtJJFxsyMdqsnzXaqsYZ4z2snNr4LFd9G2Le7fsg4tu6gQW3nXf3Mi9",
  "key25": "4rt34A3xS98fmDz4BhgHYH6fCVmkmoeayi77T1YpeTZRwX1TgJzuQsypE84k9fAyaNeMgeDBfCNENWPPo8SHmKwQ",
  "key26": "3KU27bKbxGyYeAxTKfQqgftDJ3VWVPtTB8ac1gygd9Rd9yAERa4rpSFpY4GqhAC3U59DeiARE24UK4PtSwCcekM7",
  "key27": "5e3QDkTHXtW1xXj4zFybikiYicwECJjnquMsqKPDPCWQBQ6pp891DtrfVK5j6UXSDAbf4odUP8MZpyX84m8KbYjp",
  "key28": "3daS4ba1iSGmjEfCPYQ6XAYAy1fd4p2i5PH5XnXcnHR8a1c65P6Wyxc4tPFgKoQjU6M1HZ1yPED6JPDLBNB1Mvy",
  "key29": "4udzua1LDLqNRBLPLWeT77tiLAoUBA2d8bzKJ4FypMAai4quxnTbnUk1siQVCPjTMHGLsFstB1gYEpK6x1oJzAiA",
  "key30": "51TycNbGrE3cUgRab3sHZgmw6gf5qLmfx7vkAQAV7qheFmTzey5w3nGA6uvT7sZGbVVZbSxRFrTYUFTij5AM1YC1",
  "key31": "2ppH5XZC1z8J7sid76LuSbcQJYPHAAPVtUDN6Pdai6NeCyqtUDJLgUVvVDZXEDjHRLevTFV8xrdfFCDPra62TyrZ",
  "key32": "3dV3nJfgvWUHHZSKSrJMMkjYR7xNYcAnQaQyS1H6pLyDLuzYkwsZh5FoVxPdQk8NHaV18GTqqgVnqBVAbHKtYfEK",
  "key33": "3yMbJWPKg2GHt6QBfHUMJ9Ctia5VpsR2uNxtNbFCBu6kTZiysyQuG1LJ8yUNocNELozTprD4SdPDpx4mExZz8Ukc",
  "key34": "4GnMnRSv5bzQFnsMUToPz5GwEMWVtxA34CufYwXpdfeG1v8B1pAF9nVubY2wFhLDkdapezM7RaqVPeDLVMNoqHcr",
  "key35": "5UY9jVjZC5vAUvLdAiFZdnqcQV6Tv4ZN5TpycYeUNiXNdyRzPRbvR3nwkBZ9hzZdckojtG5jR6gGGexaZstjZTpG",
  "key36": "3BJKPPVsJerTWm5kCZEEuuuL1j96ZnrhD8eFjV2cT2xtzTQhyAmwqMSc98aA7TafB2KRLievjMH6WgM9bTWHrg4D",
  "key37": "5GUksLavB77YE6xxjBDfVDUN3yMB52egYMujJGcYvV57PmWYd9j4z4dG5Ut2RpSNj6xiqPgpoB6BouuWUaq2FYXf",
  "key38": "FotL3j8NEoSq9r89ojRd6gz9jYreWhMxPCm3XEqWbSgipP6mvCv8vRaXrf56t9SLtCLcQWphY23z2G6QH8AvGQr",
  "key39": "4sw8FA2VnC2kchQXpnru1d37UGPXrYm1qUoiLentTnUTnFziioFNPdVaoaXbYx9stTUuoaUwQ4PCkmUrkH7pD3vN",
  "key40": "CUifFR6hNkCGa6MtLmaqC2Zf9AEb2pkeWgi8NQivX8fyWYpzJyxaxut5dsnusVKMqphXGtvT1pPuCHQU9wSMjP1",
  "key41": "5nv9bRL67gioWrS9BdvcCRGJrX4FjdbDV9EyN5KgctZuZfFJa8jQRnEnjWDSiZAQYx65a1ZKoTnTyLgCQedSa82e",
  "key42": "2Z7dy34zJ4w8FbZFcys8KpPNRr3szAWh333fBFBvi2mGukcw5gsNBta6Ttva444S1NV3Y8N8AwjEV4XRAtGmqCLp",
  "key43": "4H3ChhwBCQ1uL2XsWFxANfQpRXzfS5RW6BAeyr9hVaSrjCgQVSCPZZFQFBPMs6hhBvWs6nvEPkE3bzCiBdb3ptqM"
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
