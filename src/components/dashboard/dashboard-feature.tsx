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
    "DbKs2JiByTEXQwvKa8Af2y1gvnCDuYXSQc9iBioemrqoUGY33ZLNbgL9A1e4A7XCNC1vabRe9ZksXZwkWTt7ZyU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NkisUNoXGq3sqcWuAnqMeXdd13kkW1jCQL7pHdp4wrMCPFQCCE65pPFEbLyPgd431eD3dpUStyGHtqnUxiTFfcL",
  "key1": "43nnWHYhkup33386cEzoWQMcCHsemNBYRw4gDkFmxCvs7sLuK6NH1d5PNXJNfzzQ2AXfUC9gxfGsNfEBK56ocTXk",
  "key2": "4pT4pZRPHjhL2whgVU4i634XknRP5eBc9Sm2UQyp8bnRio7ZbFPUmPDA5td1efLQrcifKHN5u6qShcBk77noy9ep",
  "key3": "83R97KJuxXCicx3rmbWmMc6ZEUtBLtiwm6G1y6UmfQqKeK3ZLKrDeqc2eiBt2GEDbR61PCvbdWrGK7VbBLJe4qx",
  "key4": "34z3B21qB748KH3Nd7ZYZB1rFP3E3aLJ52Li1ezeV2h3kLtHWgGy3dSqCmbxkB2G8sYsktnoWkALMEBEo5s2n4m3",
  "key5": "bfoyubrm3ouuUJXCDzef2K2wP2FH62pcfT7hkT8rnyXCuSP3YxV5DS4FoBUuYfrvtigRzzwXyWQuBZjVhmbS9Jf",
  "key6": "4ufheiqr94LyiPyoRLgRkeh2sYJhxuwNhivN743m3jkZb2uTxaoSLUB37v9HRxTc5QTKW1EDxMphwpn4tWsmXpyS",
  "key7": "3Wmj54no4sXr2SWCip6sYScALg1PtuxrZEDC4qX3DavTQdz2ee2UFkyoJx9Ya3fz42ZFfF2hxHyLRPZ9DvBVGfiD",
  "key8": "HxG7gRWPVC9os2aV6gKtjEBYeSBudcp13J7nQa5kaor9ehrZNtu1nZdVC4VBLHH9NzXq8hWDfgWVxXunDjyPEWy",
  "key9": "5ppZRBEqR9AHmo9gbjWtG1D7rUJgNMQ5eNP1kXoijnB4aPYFYwBqJqpHoWzLaPP2QuW6WjQhQayB8YNacEMwMcHc",
  "key10": "2SfyLYpC2sCF8qJtdxnPHTcZ24B9qSfgMw6FTYKaGkmmyuSkAbdbQhpN6VPDuPGLpkQPUFkW3vTmvb1jRgVW3HtF",
  "key11": "Pzjrjo2BWSYH6LRN5GyQjS3xbDVvbeDqoraYBF5i9S3Pn7TbHcmynGXfBX2hzxVP2GowXY1cuZTFvx2aw2kzZSy",
  "key12": "2dB3MJ93kurkaet3eNwZYWDLCktUsapkVhZkpMbWKhqgvHZcryKt7WBATCwJasNfsUxB1JVuJZLeC29DDuLL5Len",
  "key13": "7ff48G5YYCYUtXBedjYAQ9aV6S9A2UerpLba8Bfu9GXe13Fnw3Kp6CERG6wFQzXAAG2GmkD3AJb9QwBo9dR1AHY",
  "key14": "5qpJnUCA8FjRg6kGSGywpmZykS7aGHRVhTrUq1ATgCDH4PGAAayM6qs6aV3yM2sGCLShaT8vhizPYUmyWJcrvv64",
  "key15": "75LoG3ST6WR7k8tK3SocuZjM7a42DNSQoJvMdZJQYbEg48C8RqSeG1MLhKeSH1pRjE1EQ3wDaFQanPpktJhegdp",
  "key16": "22qdptjCFSxTdQhBzqyaeHAXeJijButVLBwCKBzoVHmjZSHtqDyftdUiW7qBG6px7QBYDSyzWFHVCuxameUZCt4H",
  "key17": "2BcJpHkSRR8GhW4P2AXXEmfT2Qqhf74uyURsDhzvs12XUWjk4jqhnxBeXvrnbvCRG4cYHUuZWjpu5r9LAXJqWvFb",
  "key18": "GtS6nFDdeQbjVkhLfdF7oPH9Y1UiiLQ6DFkGgxN5Jho9uHPma3HJCmMkGeGCMUG9eeLdoy8kixPcqh2u3izSmn5",
  "key19": "3ygDHt5fGTHUueSwprNuniymutWDJisxZsofxSeqEZGDfPDyrXQCQo5yihgwkbj3qbXjhwdtDdj67nob1jC79icB",
  "key20": "3NgPdukQFMgS51GJsmj3co8SWccNjRZgSxU5y9Q5jbwpn5BbkEfyuQNYRWWr2hv4XjjxdUBgct9rauasSUxE9WMc",
  "key21": "XNY9G3CfUNbstmvxBKDjY9PXjbaaVq3N9F1J42CURAnTngJsbKQs7AEJtutLw7pomJPfkh6fT4u8pPbaoAvCQ3v",
  "key22": "2mCxosG1FWJDzp4a6LKbbjyC7rgSXhuEDDcQvxgvWXGiuK5sKm5eP4svWnt1Le5r743EwzhuPsS8weD385v5Evhz",
  "key23": "pfKPMtuCTpQwdCAhQr4ttpAg1GEcsGb2Hwd6XBQkdEVngHtAYzfAedhik3Nndnb3dDZ1sLw5tKCeCX7KCwPKJjU",
  "key24": "4foygzMTvGyJw2n3heSktyWkexxsFAxTEQogvNKq67hkay8bSmvXNFp15tzqFVqMSQ5Kqr8gUirG5QasXagmQzGV",
  "key25": "5thjFjrKmg8mYEsLGqpd6Zdo7TMbAueMTXzX1Xqatb6GK1J1a77ZtwTNt1fHcKTe6tY5ggoQebyYkyiRuutCt9K6",
  "key26": "2BD6HuMXJ529EcqtRhHcmBhg8evFoqMkWezQhD9Z4MepNgN1QRsHCg6NsLUrvMrAmyrmiRqqtuMvXKJAiuFPfRkg",
  "key27": "2h5aPxzALw1nTPXnT5Yxp8N4AGxYhJKBYRvDsC7gSCqSTy3c2vUbE2V79NQjXpYqz9q4t8vYz4SZ3Q7hPzgC53z6",
  "key28": "3Cso36275Mvb2nB2x37Bwqfwft6vjspS19Kgk7DgsPKBH2tUrSGCHyqnghbt71si9opZ8q1ZjxbfFzioUZVeHo1D",
  "key29": "2oDngNACS62t8HddhmN8DtChaaYfMYzVU74JUcuWkE1gNqdvR99pSGiJGPWPjqkHCftgoNdK7nmF9FZ7sdnX7p55",
  "key30": "3NsuZ9CNPQ3ry7ZyUceVAiiTYMmJCFTT2VXW4VucMGgktoTCJY36CU4T4i1fATWM4mkvEggB9BvewRCXqmfuB3k",
  "key31": "269WxXRgQTwoz16Tp8RvpZhPAhQLan2aLdGFgxFHnCQvHacfmHQLyZnpGqX3phtBscfqWUVim5bWacWciVnSsVVH",
  "key32": "5gVdR3p45zzP5hZojNLbdifvPunLa4kRTeBQwFEJNWk5NHw5jCArGrxkoAkRjU6J8QmVymw7MQQeEddyffvqiNTr",
  "key33": "2tqLK4jaJahKMDNSrff8fbLyC97rGen9macg6FrTM8GJBCYWNg7djj4W9ZQFmbAWixJhvjdGucY2o5sBAeG2bpQX",
  "key34": "24ENUyU3RmNA8XbJVZXJnbYPYpty4FEJqB1RzkgZ2LD5hwY5sT8fFzpasrRJyeQHVfh2aUHW5iKWPrtwHKTY92xC",
  "key35": "BG6Bi7oAcJwPFdjE6cp4JthR4NYQE61PzPvwKwPzcZsT5xSmpYhqM3hDu5nFNLG1AA3J9QeyesnzhVzQUXEwJPs",
  "key36": "4npVry7ySBnF8m3fuWxKRmWA4xiiQjdu4LuXcfaG9aMz4f4w8qsoqVZSzVXRt8qHRTPTumN84s84yiLjaDoKxn8d",
  "key37": "44YR8AX4XW1YBzgNTjPVJULKAknZYDrfgsFa2ksP9dbvEMTjAg2AKBuFRuvR83TBCtci4CVJgW6kdzdZBoJG3jyf",
  "key38": "zMDcpK25YcdWrCQVAead4FGyZGsDZfE5EbdPGiEAe7qCzrxRZybPEvo22jLxM4sLWHuy9yKVrTzwtkKh6wpSXF5",
  "key39": "56zubFy7eqrQMSPt29STK8NjSZ1VF9KbZGY3nqKV7Nu4sRG6SrDZtHmXYj8G5WvoZ6gru5s1eyrUhZZUH1KYK1jR",
  "key40": "5KQY6SYfouZKBjkkCgsFsS3wQwwBSuFtHcUyBVyRoZ48V3i3zrMuKWHQq65tZLhd6U6M3c7M2kpdXmzJmAownMwx",
  "key41": "ok2iQrV38BoFNqyF9YLoucA8sFRVoFtTijpUmBgkhZYRKGYi1FS9E5J4QjRvVeuq35EXjGPjGhzudxQ5dMW1B1K",
  "key42": "3JeC2FK92FTNmEVkyiQb7SJarewjaBLLTHu6KifXEjb6qcStjt9ktqjADqKaHreqP4HKbvNwi3G2eNJzCkRXRZgq",
  "key43": "4qAAe3Zy5dCcKaE7rxnYk5b24wFXSDr3nGTxF7gyTiZ7C7KuUU7wqeRMA4NKCjVTD9wJtoPhs7fpczveMaP8WP51",
  "key44": "324T9qpidNRo8epLMq582Mrb46PF4oUkeMLNRkijmwybpVCSz9XUN1Ee4DJYo5cC3bJ9bHoQY1R88CYj2TqCy3dE",
  "key45": "2bkJjHGyaqFBb6Z9mDBKQgMX2GMKMz6N7T8AaEnoocSkXM623KyxFYEHcAjHaVM2vEtTyvAf49jDR4e9fhunNXeC",
  "key46": "2cjasrAStM3YPoYPs46HRbhGxzpUqcKNX7JtzWsCxsw6CENGV66dyDQPNKqnRqArHgCTC7DPFeCZaSg3DEkGgQpa",
  "key47": "3vaqfPZGnpkJYFMWDpB2FJqRQxiWxVS1yNuBMENtrNZdnhGp1MjshGKqVqYWMwGcGYkfoMxkDnJCVVAzuTvF2vHa",
  "key48": "48JFExicMvddF6J9JEC38zSre1uR8X9ud4tv7NQ4itfBhuA49FjPMSYkS6ZgKRiMnNPnP6kYyAwWYsoESDPN1ioM",
  "key49": "2aVA2jwuFjkwvXMf5Jtxubv83JLUvKYsuegqHoPMveob1MJp7gKMp65LNchnk9xw9Wcwz2XJZ8AnZggznbTsHohG"
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
