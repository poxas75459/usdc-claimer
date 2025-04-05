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
    "4frMJWNiVBFe1qeMufDJTo8gFQ5jgYpCtSdtCPq1bpwmGoynXZW568zY1DyQjZXLaS4rHVdiUbPDsSTf1zECCpZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zZHBmzMaciP7s897fKQVpLTVv36LeVaWKi73u1NRYhosVvorLLzYG3tx9mCzA1rFMzac3udmbQMX8Sx6DQoScsv",
  "key1": "2KEcQrx3g1WwZwnYjHDK15rna8edhB3LfTajzqoQfgTLynxVhyaFW74gEWxexMvVyDoR3PP7hFxmraPb7ozUiPDe",
  "key2": "4Pfh58TEbb7u9CMt4LFjei1w7NhywQ58KFZUvJPaVkpoDaB91DuzDAtH7WKJ2yXx5QHEqBLxfhkTbUNRcMmxpDvP",
  "key3": "5SZToE4bEB21MpnVN8cdXw8z7LzGR7qph3naWo96thd3LYDFVPBsCoNZ74rbz8YNXC9k7JwB2FjU2FdiCiMA93z",
  "key4": "318NthECN4fCqTQQ5Skoa8AAoxvZnUCcvtAuDHUW3i2WVCAbEz5jesGnSQ9vnJjusAJrAR7Ajq6T7Az6NSdWc1KC",
  "key5": "2Xc7Xg9uvddyaAjWVjg5ctxkb6WG3P2WjjwyYhN6soVGEQVBCGXi9i4w7xzSyMs6fxiJHTnWAuSkvckvyXWFLf1o",
  "key6": "ouChgghaxWWadtpyY9HyGGfXyAES45nEiJFbNdcQgHJ8A8Bk8DLV7sUJdRQM22rGeN3RW1nfX7NZjrboi7xcvvs",
  "key7": "5EeUC6fr9HHz42wZfb1CVcR8oqr6KBiNorQYAR8PjmosJCzhXrFccoHJPe98nD3sazNsRkXSpaCbqW4Drfn42rXN",
  "key8": "5oqjrx1wFW7L4VqENDudwLsF6rcYkv2QmCMSrqS3kqGvauctdp5JMNei9K71BSr9qvUaFbrmus3p9RPy21CFjqJJ",
  "key9": "4DAQWokVuUMutfzy8hrFPhxuw2z4B3Q9E2cRMqsHKuadV8JGfDQzLrKgR9DyDfGuKCcL3S8S987Cut6VrTpV3wbU",
  "key10": "49BdtEa7NzGBSfjnQCgDctGKG9UktnnhD4o95x2aqoDbRpBEH2dNZDBG6yPqw2d2toxAwmm8e5jk7r5JpXvmvQD5",
  "key11": "3EBC76Ykqik2EBzeiB5NiMbbdmtokZC2V4wRAEBCPkKPyAZ9UNZiN4GMqSvm6gHVxSg1qHA8LqrEjX4jZgdwNtnp",
  "key12": "5JHUszX58Y56aayYBnE117LJXq8nKkLeHzuh6tu5LBKHgqV1nxX6HipRcaLZGgs3qf2ij9pdCC1XsqSy6a5uSDXe",
  "key13": "4RWCvNUy2md5iF9GZMizm1s1E1j5hXkMEoMGodJuC9ZYXmRXY8szyQ9seJKNtpBRLqYSSizWiZ25su2WMPSLwJ4A",
  "key14": "24ZiFweEGyYm4WwoXmFFQ6n9qZTQwfuvFEe41BpECxt1kbamcPRzvAsQEV3A51znfFkJWt7fUNVKR1QeBfWgcVqn",
  "key15": "288jruU3KJJ8N8NpqrPvK27mrwY65ZMGUMoCGjLgXLTJMAG5qsdYhewQ4X7oFesxUq47ASFwf9Ar7AHW55gXTFd3",
  "key16": "3DJmL8iqxonMkEtjjApNN1TeyXVEFZyMrU2jnW6TuQ2MXUjQFTcYRvkB1FwN5nv82oFxfpibnx2uRJ37VRmMbmuB",
  "key17": "5wmmJSHrYe2FNwMjyLmALQuC9B3gamqzkabPS1txQkGQNSt6m1FvVLfSRRnxT35ENjQnna1VQiVRVvSrngKuS1WL",
  "key18": "46zBdHfGGCxRNdaKURLSn8VjjPXHkdttsPbfZqLAQigmiHmiS7E6UsHUgDa1oscaHjc7aEe9hQVTrq5zHuaBHJwW",
  "key19": "2SpbzdRxRvcnN8PF4aXE9G3tik1B8Zms4DPr88pPR6zN8QoD6dEYMw7AjVhxWbDAao6aKo6Px3LbWhFcf6hqTjG2",
  "key20": "qhp7dLvEHdmcm2nmwXQsNMDBBMSGRHdYGoLJAiA1EJQanh4gH12Vjn1sHA7B6vkLDYqFxy4HgB1hVzVM9zr44hV",
  "key21": "3JxchJZUnysAF7mBVYxPsFzbwRRuG4S53E4SZHs2xs5MYfVAXcoyo2gpJQxYQzbevqznVD46jpN1zG7YwrDZzEUq",
  "key22": "2akEt1rd8ducNFVYkNSLWKLRD8KYPfKKNN5a7bMxkWMFVJFGNNeYDm2ji9Wm9oWBzfS8WZA3TqXdhqUr796xkrca",
  "key23": "3BCSzsiqhqK5pD73yR9G47GZXdPqQKfiaTcG1fuvSVgWBQhS5MzVekWVcY8Zh8BjwZrdTQPw9QnYEkNB5H4MKW1G",
  "key24": "2cmVnswEBtDRhP5sBgW2Z4iR38kdbCxnkhpFV7wmW2B7ft8uoZUncRiNWgat3AJhwk334uY7LefcgNjDUNWsRCSz",
  "key25": "3xCkZeyVFUrzFwxELEP7VwwtFnpAYPhUdvD1DTJUGqRHb2HHawcncrQXpKcopR7M4S6XDuApiB3ZZ7naJJdUeX2a",
  "key26": "3YSJf1sb8NAo4jnURFM7PL5UR3d2hdikHjupeDTtYbaNk6XeLsG4fZgcBJPEFJBTjjKB6C2xMNr2Wq1jFiF38T3V",
  "key27": "5nfYKYC5QALBaMuMLkWy2G37uwsJS2xixQtH1mVVbQ5zxpYXh4PmKzysof5GGmRFnqHv53vjMs5GhFTu7tugwft9",
  "key28": "5ZzHowohYYkUDjkN4EkAE4PVLjF5QLAUUsokS4pjjmaPL3wxmFSxNUAK8ec5qchVpKS3ckLGRq41zanHXJRNngFF",
  "key29": "EtNzisk6pPEDkvizKfc5acJdgsgMahQcppBSy59pYffG1iyjfXRjZMDr9sTytkPvXWAwdpiYsBpX2weK4PsYkGb",
  "key30": "5Wk4qTDWuRByJnxfZaVEueHC9N65uAuh1B9cd2RWLisiDyqFFd3fYcusZVtZrrwjALeYSUBdh8nY9zo5YwXauu75",
  "key31": "4oWC67ZQQ1tqkJspb9zuxkVBBCC9X8thCHXZ4K2wexwgrMdk3uoxrScudADkDMJNBzWu1m77CfdDf1JcEv85Yubr",
  "key32": "5wXhSEiGgbJNjzHfREtoc4yRy6nzCFPPtxxBwuHPPpj4vnDYGs8XWoGUzr5wzAqzUpNQnxKFqURJgiq98AMWSAQK",
  "key33": "2H56tejrSAQ2YfxwhtWBTm5ojfGnZoeCuKREd5P9jT4MTCkrEkizUGQTPBSytLYSr45cLMFwrqc5jviJAW6VkL52",
  "key34": "5xuSE5euyeKWGVR4zAYEVXyg9n1o6d1MabjLb4KLCtUoNhtmG5NhvpGhLKRRZSoFoS457RfcY95hE8T8RbLuyhdu",
  "key35": "ft4dycJukDtRt9mp581Wymj52eKFHmS2tTBhaTmhbWhsb4RTK8Zmz4omx7SPBGocYLijPbgS9oyByptoXkyBj7n"
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
