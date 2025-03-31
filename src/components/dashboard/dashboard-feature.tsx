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
    "4zM4dh2aoyL2T2oBijGvfzZfkVfPyoL6Va35xYSkft76bZqUbEVo1SG52YjnpiB4QBHmoe3jEWG7WgiUNXpDFBH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EDCc6TVfFhiNBUqdVQAuacTQFXUFqW2WwcxrP25yo24A5LG5LPe9mttL8dU6yo9qVN7o6sLX6pQUCSRKCz3azJH",
  "key1": "673JeuZ6exxUoX4m85EPreF2sV4trUtjgNsXWSi2GbexGzzgb7LTtwpZS3vthJtwfkGqz1k9jCb9ZaeGGhzL2pPE",
  "key2": "3o5odqqec4EjjFGttHTJVWWDXNTwiH9gtbkAzNsJ4yXTsJCza1ZRwkEDu9RgjyyN4eDLJUZkraS3qtppVCRibUQd",
  "key3": "3EbwaKRbc85NGQudCHqTbJR31KqivGHMCm2kMpzuisRQpLiFRrKsDCpJGCvyfgRdaFdTqDsnfZNkiqu1XH6mrajF",
  "key4": "BtCYYoZxYeq3ic3zEyZaTPhumhHiTmSgGMM6jM1BHbGW5r7zkzjNnVooED1ED1tfbnkYMBU7fJDUyoPwMkXetQh",
  "key5": "3PyyARTapDrwf6UuD3h3ocycMbKfpYENzWL4GL5yZSRTpzhE2o9yrXkeVwGEYPNnhoBdXjJXrJQkcuNFyrCVswsB",
  "key6": "4W9N5t4uCvDwWtv2vgbcnfkuhqTfHjVMjEvpw93YZu3hQQqNwpRJW2fEk5LTihuRyfpMAmXFrMo3fTB4vfrq8p9H",
  "key7": "3Zv9ena234H6ZCUnkigDM9CpeeQSZgomJdwSpGrrejMMvUyss2hCidn6LvHVHfpbQXnkXcAHeBUDPrdMJFYtSFP4",
  "key8": "4gx1QkNLdNwu7PB9rnZ9wX6v9zvPqo6PqqkmBpmQWcedGmNF26tZGoTfZDQLMwR6S9PhbBS9PRXc7p8QoxcNkp2L",
  "key9": "aRArHVtVemwwCyQCJA83eBj1on1bykKBTDV1wTKQzBAFYLWCwZYX6g15LsbyyUzbPBVmsMiAQDPMDtwBaLPQtBq",
  "key10": "4xqTkV6THr6T92JQCtDxLhozgrTqULm5ThbkfcCUuWV2GKUH1E23wrLjGnV82yxxB3PFktsdAM68qiHCT2zfaQNr",
  "key11": "3YuexbdnJ7NQv5dchwGJLMcRAgqEhDBBzhKkuqtjgvojTq658eFRUPpRqkGXCcASTVKyiTR9wMnBhfipJqS8vuF5",
  "key12": "4dw6MeEp4386TqamYTceFabRC95fTSLLcigmmqjHCKraDnYCMw9dHa6do1ttLsLrzcZJGFUh7hFFaXUxJchQEpPM",
  "key13": "25hbTNuisiLqWysvCDYb7mVeS6jCwvd5cxUG6MXhbtw52n5LhdFK51k1smUSeroPm5Ljf7D3rTi3MVEmbubDehVB",
  "key14": "5hg7K2mejbtRToM8PSVv534Qn1BndUAyuQ6ePpCm5nm5feKwEq1zZeY2SWZoZA9H37ccuGVi1sUAEpc2G14oLrFE",
  "key15": "3XdT7YnTHDH8zgj4T4Pt4c8ioTXk2MoX3NrFd5gnQZZp5bnZoj8PC5odg2mW2rFZppgU3JvKBNPSdAVZNDtUh5gG",
  "key16": "63gAYpgC4MRbtFrdRKZBDAiBNQYCxXBEhN9fWDzdEXdxemMnyFREq4F3K4d2HjXLfDCCiXByVSzYit2VGz8dwDK6",
  "key17": "51b2qDJhyTEpSrZnQJQTJ5x6k7pvHLrKnKpFRR7dXAXWfKuKj7eTYq996bJ9iB7xSoGakUXWSjzH9o6uZYncXHzX",
  "key18": "RdvVg9zi4adk7edKtieHWxtoJ8ExCVQfV3RsDeYWBAYcBvbCiRp9apvo5QNLc7fxh89Zd11BZmScNWeq16WoGG8",
  "key19": "4KHhX1D3Db1EjaUCJawv9RT7PnM781XEN1QYNs2pYQdMTWc2vHuP88dPATKhxLni7HPwXGbBgwH6Zmx2XtVF9vyq",
  "key20": "4NjcVBTARgSkhtojKyodLAh7whHVkEAXLXSp4AMoSJZz7jh1uZndzdPUCi6h45kKMZEurLyWzty4y4dwmefmPBTj",
  "key21": "tMoQfqtS3eBKMphDGHfT3dHnypBzxtscKBBbvjRGueAAyqzskDxoEHesJW4hbkr5ykZLtyUTCMrpCeySRu8D4rK",
  "key22": "2a6nerFZG4qYM5NMrXuE3iFXFhAmq8Wtkp4bC9dC13XT91ctqYBvB8Cfs8MvwaLM4Q2RfbzysnB1boAsWP5k1qUw",
  "key23": "eCvARCVbWYPEjVPQAWxKZLBYha7kkS7uTGdp5xNNCPo6hkKmkEAFPcZigire9KTFShfgpNKnmtendSGDM6ddNYT",
  "key24": "2y3kWK21ZAwnumwvNYShMES7gvS2VjDk7q1JRCke1ujNZeRU7EjXMfNfXR4m2ARrWPwwrNHaoKojR8aU2TdRgakh",
  "key25": "NKhn9kvftjWz15Gr1Xt3aUw7V91KhNpo3C7L6TpYhq9E5KM6ksvkBBMDaaQpSRLtBzzxm9vkcFrXCGXGTgRMq3G",
  "key26": "4XzDr3GKqYANTWBpzbXWb3ZqfKvL2q5brQW6FhCa7XKodcg5CnRvTNd2B8znX92vptrL45uCLNLzn6amUsXsCxNN",
  "key27": "vYFoJDVsg95ngnnM6ESXVfAV4CTUmtkkMu3ibSLvkohrnkjFUd7nyxvzmjbYNjrmsXp9vNbGGe6bB8xbkXarFjR",
  "key28": "LQUqt1A5KDduxsNJyyYv3nEGj7fVZcH4bat8ZSDg7c6ZW7ZZ7WQbfGBvJ8xhdfDMb3pL4K95VAQTupffDEPg9os",
  "key29": "533Hi8ydwbgvy4EYeny2Jt8Y2uLW4iRPDULDkBnbmf4UThhGLeb4BsNRw2qAGgoFpgwyAVRZEteyyoxbctAZD7fL",
  "key30": "2ipXWV28EzXDz1ksUqy9DZmjiF6Mx9iZoeZKAhQeSJKq2Dstn5qC1T2FyXccwQiCWyC6BqRPYBLRCMdwMaBT7xLx",
  "key31": "4YZig4GFHAs2aLi4W4rNDndvpUcS6y9gT6qdUbRyyfj9dVBniWmwGWuhkQMJ6Ubd9d1dXVEYSNMSwF9ptyLUWNhC",
  "key32": "4azxMD834HuznzsZozo2HbiJ5bZ7TqhnDDSrCfXEFKxDiA9sxG4VXrQhWYBQNRsJ9cuPqYhobG6Ny2ofbsQqT265",
  "key33": "5mVifPzWXBXxcQ78WMRPwn6G9GRQadxxs2Qn3AbbsQJfo2u3NjzwpbeGjRuMa7yBxx1kHsSGH2F3dRN2AYnPPFb6",
  "key34": "3jfXw7HBL5Gb84mAs2oKwj8ADfY5hzzMFjfXZDwroZDzgLi7w652ggggEgmzaM3rxtMm7JSjwk1jrDrFWTEqnyeL",
  "key35": "3HMBeRgGqr51nDQdV2KzQnsWRtQgaXGiYzTkJvfWtGUVnkSfJpi9kBSzo22dJCFapNCfCtASHGpXp3AZQZKoMUfM",
  "key36": "AucwK3ziUacTxPm9PhHoyTSR2C61vqSEU7catx72rmS943bnLb4pjU9h84iZwj5v21g7HW8ZedWdBxrBx3CVBnU",
  "key37": "3GYiyG82rSfomfFkXdTzFn8yayxbAYuoLwp2xYm4LxwUxYDthByubL1baxdKrrCFDcC6mBLwtfCVCBwyyctyoe3f",
  "key38": "58YXuWie8wSB6uRr1bDnkuSjj6L1tknYeVjqhXUCzwdPBqRVugAYauVZGiLc6iSaBuv5YCdjEZaWbw5KTx8a76cP"
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
