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
    "3naE2QXo5dPRPumhJZQ4CMXiTtdqntKZnTTTydZjCMoEMuM9ket2W8ZMCZArNrnLSeLfQtiM6jTLxHQo15Vaoq1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uPJnHaF8E9UjoLGPAPKdRKXJa8XspjGQPhoBRRFVTd5dV7oci3fYrh4ai5HfvAoz3WaLHG9HZNQAHHaf1qavtXT",
  "key1": "NbAVdSAPLTKDaJBTNP4nZogzE4N8UdJQGf7BvZtdgMXhHe9Kj2pAZjC5ZcEQvmEDVnRyy5McU6EhSbe63UnwxWK",
  "key2": "4FDsCWFxmshKXB71mC2mxNg6w4i3Usm2TWNzdH9Cfzo55sUw7Fs1YXu4HSGVzZE4bAp8VpEMDP8tjysghViZFQMg",
  "key3": "2vNPKiLGVrYZnaeGYSfKaPJirUQQGJre4UeGSSqw2DNtUi4DMd7LsRvRXyDhXQBnLS3JM6vKoaSCDdgEQ5ZdmWVN",
  "key4": "5nfL8uu6SnmBZruCa7fFdTAbPyPMdsPs1tcxDNJh8hjVbNZBUQqiPrgVqSVAQNGRXoqq2QxEUosNsWDf4QkNYdp7",
  "key5": "4E4CHxs2rfDtG8nBAmNRui1rgJvqs5UW9JTCBbYAfc7o5FRRKYfzXWb1znG7udLhuTpyc63JBkSRj8rjCsfJSbD7",
  "key6": "2pLWiyt1NWyJp5jwjTJbdkfwFJXNTATo2wGPPGP9CUEcQ6c1PachUiFVgQ65KBhpHgB36ZFEHPdy3t7KRAJaZdYH",
  "key7": "5df1GjssRMvGEXZuJa4rQSZwKWh5X7WijMrypAnS5LfADPggm23XBW7ExhL21pHz28fuMD2oNyxXGYv1QxefNXsU",
  "key8": "33SqxiZwT4u7JFQ8M2BjqEBs1DEXEyNEzZdYQJFuonk6JXcj3TviBtyKExJRfSuDVr84wxTWYqv6tHvLGCzSKGDC",
  "key9": "436JxxuEVbLg3BNKUeQdYCd5yWFZ38gcu6SRoAWg72ReDR1sPyFBto24QXxpvi2rawV9rtaiUVBNwXRazpwRt3Yp",
  "key10": "5FdDsuMKiruye4HZHuWa7CK3KecMpTzj5iobLG3KfNDUseuqxQz4c9ujG9pwokNgnu7NTqmeE8vuHcinLh7CZxah",
  "key11": "373yF71W4D6SqJj23iQJQmNXGzeKpFJUoQrVQ43ueY3iQXSi8dju1HUG8Qv8A82VkE359iw9UTr9ofPbBHj2qsvH",
  "key12": "4EbCz7Nfa5Nk75FRoohXap7MgDWcS5REd95XxiM1Ygv9MoRW9LjdRGsZnS8hsFm6Z4PJps3BGGibLbBzfxhSKFHz",
  "key13": "2vN3kr8Sqhc5eGSqyCRDjnG5SXABdvQPQZup4gzCrKpb8Qjp2L5RWRpYGa5DEWvEPgKBjooSKXJukEjhWkhRMk4d",
  "key14": "5VdQDg91andMuhs49f2gfRWip4NSCnangHEx72BLfkFQRLgkdkMuCYbV8yJuGpfCG7hzDVY7DrT6bumHbDkAvtCt",
  "key15": "kPgzzZo4efoymAjptAd4mq1RNDg1HwMdah5JhmPCE9osecbQ3h94HRQDtYXpVBmMTFzhiqSfb7s2nzfF9msaEEN",
  "key16": "5UqN4m6x2oxzeKfyqXJgJ5LzqiKJyi1Rwe6gJg8P8Da5ZnWFuq3eiJKoFB8j6A1gqNbWmz3kPnHH5KUnd1BavFag",
  "key17": "X2R4UXAKTNB8SeTU2ESbNkFYwmDdkZx2gLXz5DmzHUjedQhULGVN4S75JMHptQriZw5FD8qv654sediUZscyptv",
  "key18": "3iYhrmMFBkzSu8QLBLLn2Qn9XRMADfH5XvEH5dj1x2HtHZD9SjozLP2fRuUCwjx3Ar2p5Tzb7CVXn7dHwCAdrQJx",
  "key19": "3gxgrtu7mpeabGFb2m5ZRFLyhWmPmHocvJmwz3KgrLHNJVAZ1KgbkiNME2y3nos1TURiSj1TL79aecMUW83bb59b",
  "key20": "WbsfKjX3fhNjusGFFUsFGg2idFXomtFDYXQyfukhsTRfkBXFsFT5DdF6pGY9285qQk6pkwNXo5mYgP75WouiLso",
  "key21": "35V1RTDKZCAHy2LjfNoGmg5cZJMKW2sb8if3otRfR1Lzhq3eaGmgjYvaGMMENj6b8pUeoAFqMSxMypFTEfUJ17Zz",
  "key22": "24CBAFvdpzcJpu3ut6gAkSuVoVdzT32QGcenaQRzWvPuwa8peFReF97Ndk8H5UdRAWRh7m9trx4A1cjyTXdReNHg",
  "key23": "nVSxqKZ8cPzkEnzekRsc7gMK9fxmuGjVBgdwTaofTZG3BUT5uRJTLmyEosJc7TqTpAvQEjtAihr8cqYaUasPNMv",
  "key24": "3Zey29kxdnuYwYxTKpYEZvRJbTuMLzrc4mv8XNZxBPP7rVPXAnfjjUb7p5LV5Aky11s6MF6wGxbt4nbhHqXPmBo9",
  "key25": "2wEyd2d1F4NCPRmUuMH8h3XBxFLwmgx3ScDibsDnUm338H4zW2VAERESKSa7uZ8uoNsaTnY4f89BNmht5Wvb17sL",
  "key26": "2oprNXmNdrcWJAJ8zFEfmFhDiGyi4iMBdg9pKnxqNrgeeG9XmD9Ry7QpCn8KH9KB95n4MKVqdtXHwEBCoigd1R6Z",
  "key27": "2SKMPP56mC3eqUHutRga2GAFJVgTa67h3Rb328EhvZ38neWYBxpmB2Qi5CTNVUMDkR4KTDPruLPwsqkwXvE2X1fx",
  "key28": "2zgETbK5pF86Mqbq3P5LRrveQ3Wg2D4qPXfbX7jfGD6ET4EpCV7k8sNTV12xGND1ZBMBqjgPyXC2QDoxE6NiieRa",
  "key29": "5d3t36VVAugZe6dJcACfL7S7eG3KqohjoahWHaR1YBAEHRzMJsR4Rb8YWmLBxt7cVDab3eK4HrYu4wXJhPviCE83",
  "key30": "388pvHELhy1ecmpRuYyDySggX87mPMV4anTdEUwW3vk1awp3uVdNy2YF9qpyDNmrmPEvBbxittEmLk9RgDU539tr",
  "key31": "ZzPcZ4xkUmYvvu25evMUVToxwB874dxNqvZtLDrqEPwNoXTuxt8He6q1WJeBCxjbATUWTcwke5WEjPnLZovhPSr",
  "key32": "51RdiJemrvZSd91Jm5z6x5rqj2PjywNBNLntbv65MshxiLtr615VTJtMj24PxC637Ak9n3taCTEehgv1D4pej2EQ",
  "key33": "VNAJyzbVF3orpyjcwvDHZRhvY3mBXMjhXvthg7VhTKZeihviLUBCj81F9cmgGiiVmP7iMCJ75pk925VSh7w2kHN",
  "key34": "iF8gbfkoaWWURGoMJzEcEGJznBJWesVPUuzGvooK8tPa1LcRzywJjq7WJk7kaamMVEMJLu5obXMDe7BPPWZGDxL",
  "key35": "4w3KeLczGZfPrqPpZy8psM9AaPzoMZ98UE6naERMGWUNKASg2bKnTHZsc4FW5J2ydVDEsvh1dnysxgvkx2GE1L5M",
  "key36": "397VGZpCgHTeWod9RmqBJTn1J1GPkR8sCWzXdEVTLg8fuyNAYD3wARfp5UHHi71HTCJX3A5KdMgyx8e13961iQF8",
  "key37": "4MsL2uE8o6A7N2PPG5fLU3WpzmPmT7Cq6Ssfqvd6BXa5SvzdTjJVjvFUTLYzf7HUsZJcuHfhDgozifcK2SGmzU28",
  "key38": "3NELwCJXFpsD9XWQLK5aeBfxAPVea2gmEsvvkB8ukF4HWdUtpmqfcXAnouyNaMoWyUdpt3teAvPY3cRgwQAx5omC",
  "key39": "5JsCeSn4cKtnEFBDYFVNxjSZRbQYrD8riFUw4f7VCYGsGQmKjUCVoTC9AJXPoQBQAuNih9DdSrb2TPFnnG89QWzg",
  "key40": "4Q3d9wDDNfcK2AVyjGdcxrHnTUgfYLcyvihAEfzVCdRHSH6rwpHoDsc5yWQEfBb5Cs43NLoAZcg1UF4Te6EfimLe",
  "key41": "4xmtW1mYxeCyahS5czonCry8Ne5xHSvxAq6kU8KNhijMnw4ByKQTSQLYJLqvUhyc42YAUZdhVk3MNBhfUKFVcVhc",
  "key42": "3dww4CRmMA1AknYGHxh5sTGHrtjrHEA3yYTcaQyKftMtHbFePX2GA5ztzu27DyTz3aVAv2ziVZwDR39qDFmzxmE6",
  "key43": "4aqHmfwJiFx76GG1D7Tji8xkEZLTSizfPcBr6s2Y6F5Ywrd4SAMmhmpmhv9z4o2Sen2UJ16T9DHanRmrkM5YYgBt",
  "key44": "3gAxGN8yzS4nSCzK3iBNkY3cfXWCa6SAS1qC9iQ4vt14YG6qruoPfwewBZBpb1dVyzTZVnDvHMuE1DRy5xsPsoiD",
  "key45": "261YZsaFzwLXwvZwz7zMz6FRfoZ1yA3ehB8sQJebrXr12tEHymHobjrQHdVvwSEp4dkq2PtYfxjYizTVDQtLfjgk",
  "key46": "mNs1VXSdNvH6fryPzCaE1wvk4CsZmHTK2vbxwdxJ1No7F7Py6E65KRL4rD5AXdMJVG5LppCbKrsdnag2LaX94E3",
  "key47": "1tsY6SNvSNShPNkrjuLr4meSngagP8UgknJxe77xvDLoFGVpopV3Awsb4xPqWGwjYGgjzTVcSm5wMHSmGuHWZae"
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
