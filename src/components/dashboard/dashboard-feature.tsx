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
    "4mwAMH7My9HNoGxdvh29kxeFZPmcfKP5xYjxE1zbyuF6v2mjbh26Y617czt2hAFqKT46R73dWRv3AFDCkRxHiaTr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M8JMKRy8S5F64KotpffWNmYDcUXiyvXJ51X61MkvHGCvAXmJdCv56qDoL5RB5Rd4gzxjj5hmmoDJQrRF5pATczB",
  "key1": "3gVAM8rWU9D8qNoiq17L9ggn9vGwK6PPj1uonLEersS598ZChhmgSNTQ8RsdSJ7MozEbe7LommGwnS1ft71pB9bH",
  "key2": "49rwKpuHYRstGM6n1KirTqkXa4MfFim7387jaj6Ny5BQKgzRTspuTWbec7urXZAM35HBJeYMg8c5EewqCbStGqnc",
  "key3": "4sckwJZUFBoa2wCyC1u8FfkAWEnR27zV1Jwni1Enxa3njNLdwFrPwucxgpToJuyuMT2w8j7AHn1iaihtqZBMGiDN",
  "key4": "4oc5VLznc1FJSj3i8FqCtsSYFTZakybhgv8cJ9jzkGfPW6kSBomTKmfJjPsv2q4bdzVq7fBMAK3Q8yhdMsMVYjUF",
  "key5": "5pGJRC7FQsa895v7MaVTd2tm1Axhudzn1xp2TdeYPz9gwggP9nGtn3w74qKrJmU4YAJsJqg5h3Vw1w1QrEkSQC4T",
  "key6": "5pHVdz7KGhwsj53YLUbJgCLzVFYcBhWYDEP8JNwGvQPZXo4aiGs5bdFFSqL8qKgz2Jpw1GeUkGZuuRutD4pkPzhj",
  "key7": "arn1e7XFyAwkqgaNiBM8oRzULGR1P2hav3iuNaet2oyHJrUk51CyZ8rL8pMK2A43naakhHhaF9SChLbmr7d87Pc",
  "key8": "45E9x2KpLRr2d2gXswwtmUMrv13sjcdrFa9fBZNTF32fkk4UVdFqiLjTPWmPo1cYbTmsqmDXMFFYSEW7WfrUMpfw",
  "key9": "5bVWh7LPi836VP79Y68JXSHFdyTvsSihwUthdv96a3cT9up9kobGsSDALYNsMxugHoXGbywJnoWFQ3NricpvVPSy",
  "key10": "4TDkQix3epPKaxL5bX1E4zGoofaak6wQKuE6BBDHqUt6RByCnS5LBeTzbQCeedKVheJKUYUHuWkNzMyjqiRkT7ns",
  "key11": "pStrTL265XGo7aHmUERAxJm1s5zeQxaLMPmKoU78VoyJZdg371x39voPyA3b8EKPjtoSpkr3pGQHBhqmte9vNvi",
  "key12": "58LAN3x8s5DTgLMdz1cmACUwiF6qKaZifckw3fFT9tYb4bUkr6uSSumCjcrNNind1qa9W8T4wP2u6mkHPa5CVrwN",
  "key13": "2uxPfLYrgyx4zKCatwJen99BHcqnXh1K15baBYVz4NPcwHCsqedoxj4mQ9FvHAwuzmd4wNqELFG21Tf6R2zpLh7G",
  "key14": "3RMgAXBxdPyTFM2qifzCiDnAvS2Z2TLk4uDsfzMDbzV791AZfeTd4kfr2RRpasYm8NkobXnr6Zs2rEuK7m86o8KR",
  "key15": "45eTerFz6Aq3dNDs9mB42XywAufBQJVWtC6XmgqKFyrwEggnoG7KBba2Qa9663YuCqFkBUe2X1CQ5a7f97THTikQ",
  "key16": "2pQ7RTQQgoc136FyxY6mbowN7LsK9ZjMvnsgmoESiUK4xeUsGnBvmoe3eGoNCU3ESpB18dyPavXR1nwGdT1oEXCc",
  "key17": "srUyUPxXdUw7bKkTymGb9WnPqVa6Uikq8WfpkYeCrBEGR2J57LsrkAX9fLxP9W13jxqLoKPrNZrPFh9Gjazrij5",
  "key18": "46JJ5UFLFBRz5dbTvm7Nt6gKSiiU8NZpdK8jDG1cNYA2jTjTveUiA8urx9NvLemJdjVZHEbTueoinPqWB6sEFcqZ",
  "key19": "5PfUviQ8T5QEkuiLiHvvVqBMwaZp35DtBu9QzLtwFj7FSRWi8eQEbdWnM3PxcdUBkWYZxE6Ug6snfKeGjWYhWi3o",
  "key20": "3WcQAryuLhgkuYt6WrztxqMGiSkAhbDPnZ6ZLa2VV2vN7n7F1a3rqxb8wQ4vzJLUoVU6xc9XSBWfbBK2mXXrrN44",
  "key21": "W1LNJC16E9kSSvr4zkGJJxvKsJCeZ5re1jHbuh6BQ6Bkq3qbVhNX5UycNQPqkiGkjPcr5zUSyEzRb7E1vWaR3wc",
  "key22": "3wGaPtxDFQeRGyUNYbHYB9KV746kQaNRVGw3uiWQ4FHrZM8ZHrWeA1QgbochLCYdkeLfyVZbhZez753tKntJABDD",
  "key23": "24fZCL569hN6r75o2ApuL2Ydw9o5RVMwweXk8FDeX8zKAFhbQ7JLyYiwQ77ULpVvCbx3mufHvQLTk5QYmYqrjoai",
  "key24": "54PsVGAxiE74GjDpENzTtGkjDrZyPn1M5YZ68yNrugLyzvKRU3C37Uefb53xaqFn4Qqf24xfqTvFWK9TUuWrocj5",
  "key25": "4gmUcLJXRUSuqUPY8qFpBYT34p7v7FNezrzA2iLrjPXYumoYJUyQR8wsc5cDqGJCKW9UN28sPa7EAgPZcWs4S5pR",
  "key26": "4wWZVcnNRSMFQhwfMSW6XV3erR48E1roqV1FK6mfTmSQRjvtFctktnYJb9dKkbCi3cVhseDGsbUzsFB2qCeEbUcf",
  "key27": "vC3Akwk1st5gh2fN6VvFmCfuRCGRQVFQs2XXwqNCV13WDYBUMxY3aPgnEn7f8m4C4xveHHiYFMt3PL361X2jUuJ",
  "key28": "3HPeufZ27y9xw44hiEE8eoH22rGjr5o4UmcJgnwyCtH1J7ma5dKA1hVswryNA3gzXbx8GkRgjtWrQrPovcrKJWDm",
  "key29": "34KZWnz83aW9gENV1iLt8wq3d88CnVmR5ujiC6yXhby6rAeQ9vsdABfmUUG8xQYgkTwnTGuHChKUY3grzgpEsZzA",
  "key30": "3Q8maGrePY3tWVVM1AJsGSFJyEyBgJWAefWRwmo3ed4KDcetvfkXko1AawWbbwpjBKG3PqHZhoCuecXh8TDAN7qC",
  "key31": "415qTBqQwTLMrf4N6rgBoswGYBqbzTtBbdL7sdcwZaCrLqqWBRPpK6H1wF4eZzEdAUH86KS1wd7mNzzYJYTRPMkV",
  "key32": "41sn2PXbrvz8dG4qGdFNVJN1vrSS1zLx4xhtzvFhdTZEeXjW7ud6n93LoCfQcJBUP82vhSdWXCZbsHVpfyzUcqFD",
  "key33": "3Pf48MgzGai5juPFimWo4ARowoKPzYDfT2ZABqdqHFnRgkN7VTGoJhuzk4NRr7po5e7eb4yYnMGPDG4L2WYw1spS",
  "key34": "s5MhH1rdLyxqVPCoL2x34qFPim1zvWzvMgKTekt7LYe3e5tpmkSDVx8XFZKxSt9MUqe8d3YwRbEmG6W3kr6gWuK",
  "key35": "3YiS4JG7tKoodVEHrWyGHBBaJJr85q3KjviyYRGq1L7cnR9qBFkddBsi17nW9AZWumkdnWkD3V2rTdAbnvwwn4vW",
  "key36": "5sjynJ4VyyKWv9JkbPTkGxrTmcc2ome1ZwhXSmknATbppiZWcU3b1KkcsPMe6btEySKziJjx4PaYmfiyQrsjJMKt",
  "key37": "25BMdBsvKwbaVaTDBYKV6rjkjPwUDSttBXPW1KisuyTcgHDbwfGJ4LVPTP7P832oN9Hg4Hye7XHsHkWZXbGTnDx2",
  "key38": "1M9jUsgDBsAomuLcgBpaBYYPH49vx85eHNAcHu26npBD6XAVPVJ1bhpUpdZeMdq4EkgMGkAnJsRDvymhEk1xCbh",
  "key39": "5xwFjYKK3x5wD3yDCs1W5PHbZnyYFMo6hydD3hH8QsWF8f94Tna1AeKG6276dxHbRSRGW3mctLAVRiz7fvfD9tBR",
  "key40": "Q1zpf21bd2NUdX5L3XG5KJm6No5ishfp3U2wtNxaaTL4XjPdAefL4HMYrmHEFg81AbL1macpytNRDcwMMH8uyNP",
  "key41": "5VYduWUhcpwtavfnfpRMhfcKwTPahpHaubQU2TGigNQu3pVuim9EcLpqp9YiFVtkh5FtNYwmXkaUv8afRXq3bh1r",
  "key42": "5jSKJ7K8Y2ddiCJyV3nANZhdSVdfi4zVX9e6tyxA28FPxzkj8EVs68r5FR1HnFCyMMGEJthbLuwfwxcePcTxdQyq",
  "key43": "5xzj8iQ7bB5TeD8jcnySG7K4RguqzovXZwVBkbCpT4CtoR9PsaofnRGBKwmHkZxtKy7Ecf5t6aaVf7imxdo8BaJc",
  "key44": "3SS6T2frqPDiB3zvnCM8dJznmAn996WbPYn4pizCjQajwFZsNrrAR1jwrmCZexvgbfR3pFT9RS6eX1CoyQjBvPdT",
  "key45": "5JKvBJYKtxSPViJw8cfkjUuvxcbb3C6aVMsPqi3C98UXHTjMRwstPw8gi1Rw3o6PJqcHp4Gn5ycHSwqySLQpQtV5"
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
