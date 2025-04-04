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
    "27N8j8Ya2g7GAQjMJrgsPjHDANbEaRs3K2oAsQniVgcxNQWjcQvjmHRpyDyNDXc8C3SYCB9zt5asD5YJrCQ7qayV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MECMKphnHx3TP4m4dUGGHt9Sm1NSBWKH7J6p76HiAtvyMJb3GLuSfHVZPMSfL4VGbLLdZmupf66QAb8HpaoYxaA",
  "key1": "pBgLZrMeZQf2QmFzE3g8KeyX2SYNert5ZCCT3PhTDH36kWMTN2rSg94gK5rUQLZ5oxjpCc9wa6iDj3G55aGoCxA",
  "key2": "UcGxx5VNfoywT9bTcxL3PKoNpBNnfCcTQNvFUPBJfyHYmm9NRTvibmZPLaugw2nnM8EybQTfgNKSANA3R7e9yge",
  "key3": "2ttT94ictAvfYfDaiEvVorHzCUo8koH4vu96erFCmDLuUQLiWY56CpFiTuS6KnBFejbr1uhNbL336g8AWHrRkVgJ",
  "key4": "m2kpYwHvqHgLnfQgcyqmWt7X9uyiSqkJrWwypieJfypb6pgd9ZQK1rCryuYE8GSC6fmVaTHNNztsgEMq4RnkmsE",
  "key5": "2i4vUoNegZc64xMoAKacpK74hnYrQNHKkbTkzApnHrpQg9Sz8UGTyNxAjh62rfFRWPxB9MooH6sjqi6sE3SHxft6",
  "key6": "4quuhxj27XZ1Pr11YrQFZ6goVsxy11tR3jwfmzbx1ShB9sGRLPGUNEFRgTSJ4pVTCftJujmS9Hcu2P9mRxyQeqe3",
  "key7": "25xhCnjLSbsEp8LQTbS3ZEymGUHtA762pDHC8kwEp28NfHWzx1FXzcSDzyMJ5BAY6JLPNrSQuzfaTtfJffyT9mMU",
  "key8": "d7xNSyt6qBDhG7ntrHVWSCkN1abkoVtURuaD5wYTQpmmPKbvLre4C5sNnJdXN8nGpMEshfECU3ZJ1bamhQkPxxB",
  "key9": "2KNfzMZvAnDmvLowQ1d71gDSeYHUBbcwqc2KEddMJWEKwyrEcbcU3Vjp9DoGtpgwK9wX4be49qGbNUckR5vtXJ2t",
  "key10": "3pwFTDxG5Nvb2C8p75n7EYjq61DUmxVnA4QgFmp2hf3LwKtgDNCL87dgWbgiMYZYbde3G963wZcXmmw6gbxvdHNm",
  "key11": "xU3Eyc624XvnPCo5LLECRQwbsquk3J8tEPCWmFHiSf4jVMwQykkwiac15uMJgBwu8dmNq6HWe4KnPbKE6U7zidW",
  "key12": "4mbXJrh51geYqdRKDt1mLm9t47kPEjHB2xCBmcz5jWC2rrvpfHfE4jHDM5jp4VErwKxhJ1ebkAhphAdtVbZXU28w",
  "key13": "3vpTKxrBrQBsTMF4VbpVvoayDzgVp5qSAqFj7KvS3YkNWYaUautYQ7vM8GvkmgKqeYQttb7mQZkpgXAUmRERDjQn",
  "key14": "31RtSbwCxgtDYx2i94JDgAuTcTeFiNKMF5owHm9d7LyboMCjXPjSTMExVmRWhMpj5gXXXF8sUT75XuiCgFjrY2eX",
  "key15": "hByxwiLEm5XewhdQBdQSHjV7HRSqLV5eMj5K3TLtPRzzMtx2W5PpGoe72rGMuESEb443CYZ1tWwf7b2ehbYrBx6",
  "key16": "2dSbNsuGdSQRNCU256fVSxFCCFQaPezeLDvf4wwQp2XdAEskFNjFBpqBq1jDNdSvBFHXHrUPj6VnfLZnwHnknCkz",
  "key17": "39h31pgqTBVDMCnGgvgWamuNR7rrZQsKn7hnZXfeqrTZcXWR8xeHuMF2mRdcu8PXPMsSfHcKgmipGuuZ9J9p2jDH",
  "key18": "MCijgwo4ssCQhnppEHHYiUiDAKAptfeynHJVASmowyHbLhYQ1E3WAJRSwernFdXhCvfSLWLuABXSqQ3VXt5gjZG",
  "key19": "5PGbLaD1WvvgJXjbWcRop3qiVr5MmKSLDMxxCbeNBpyJPDmUa82br2zrDQpwGwyS3DuaLcr62z1Zm9aZjU1sdaSH",
  "key20": "22PA73ndRLvpzjt4Hkv8KiqSPSatCgY2y1vCciAKLyjwJkUJrcDsenQ9NpuhC7AqLn14NykAJD1J3LpxHAQUzS2A",
  "key21": "2sJ7ZjsrSQfJXU9kyt5kSWC5RXbMdcaf7yhMnAahfsfk9ivBBuXE1XZDL4Zbnj2ecmWTEpMKR4Lehu6n8SHHHojH",
  "key22": "3TrCWn5BH9mqjf8TJLPKu7fspRps8adGt2uCHwvodb2thXbgJBV4UUB1KY26ziRRbHgBJJvwK6fyVy9wakv15h54",
  "key23": "NDTsjbovLtwYpTUfhe2QWn3p7GwuaQkrH4Gx1axK6DWkKsRdPBKa8p99ZDPXCRshN735kE4QQjDsYJk4PhP7uV7",
  "key24": "4jk4vb7JfizQPLhiSj5V4N1tcJXZCAUTZ3oycMLpk4jVuXtb3zehsniJvycHQXhqv87uqrN8ySnb4yZegfiyZz2z",
  "key25": "4sZrmFSoDvVnMThfnETKEJLnhSQWiv9JQSXFJqgm1EdDnALwgangmkYRc5CbMmYP4r6N67XwTfhLskqpFks8jMZT",
  "key26": "3WBdUAfjwGuV2CXpHrCiuULHn2xuveuUf7rN9YK2kUucuJ4e5HAFfo1ZVZLEN9hGx6nNtq2ncfNzR4nbZaM2vmrc",
  "key27": "2aZYY5VBZ7hghomuZB3dCoKP3zhx58UwH6sHBcDk5kx3UfM6TJZQjZM1EJ1Jsf28wcpNuMs42Z2uXUAnL1nMYg6W",
  "key28": "4aaHDKoAB65ErZJWPwbaumEZQcnFjkVhH8D87sTSXnEdcVeYba2YWbcCsJe5jeX6HHxmqUAAQr5TLgUHGDmzeju3",
  "key29": "2dghod2Mq7b5swJB16Kiw8fqtmdocgkwC5RvNXY4DJmcb3UWzkN9aRF4ppCpVYDhWb2b71ZXfLG6BodbhMLeaswp",
  "key30": "56iN8hm446KnyeRbTEkxn6hJAy9PTg2xpLwkY4gHHjzxfb4snU2TQMPkwoozSMLJ9KzhnoKLxGjTC9fHZsorN6yu",
  "key31": "5iFYr2Cqz8D6ZAoHetXg9gGXWozCQLmWPMeseJZnaviC4swUGR4duznsbDci6djTzixkm3kaoAmnt7yjMypW9Wza",
  "key32": "5WfK3aU9uRSMM3e3a9TWHTbAfYcpa6LoDdn5dBzuP6Ez8Uxy6vDWndHmLoSjzHWMcjULUiRcWUnCHcEkSjxXTajy",
  "key33": "3bnuKXNzoWRCwZuyaJYY12fF3Xv3TU4PsgGfkA9pmiHSmxDhyeEtMm6az5AY1X7PPJkcTu38ZgWELxS2vw7bw3kT",
  "key34": "57SLqtbmC3WDuAVCBx3Vju8AaFK39ka5sDfB2QjBF5mUUreE3dGraAxjrFbpUGaXprQ6fKnCitmjC4Cwrhz6t7Q4",
  "key35": "4uwFpzLTM6T9JKq93dqxnPMLZZriwWL4aEdR5oPKHfZJeZeU62JSrNz6EXNSzhVGsF43NotFMvXxh48W2rk3N9t",
  "key36": "5diLKhGczgDRViVSK6d9iX4fMxTVT2KAXhrXaqFgMqm9LsJNuxtt2D9qDpGyk1JedeKLSYuxi9Zm6TMr1VXzRvkR",
  "key37": "5PY8ydrYt738wGw3KRvxi3FJYocGk1aRHNHiDbZj9qiNjLSDTxLrB4B1V2uLrQ2zag6ua1cKqRbxvcMrxL2wUvLD",
  "key38": "5yoxqSf7XfkUdP38iBXT1USfXUoXVPSvUfq1sNn1LmG6sCCL5vFqB3MPLtZ1sCf52njjZ76KhEuRkHFQ3FbkLhqG",
  "key39": "arrBx4Lujuaq9wmrDhAZNEW16mwWuHuKhNgV2FLvBd6d14Vh7vuRGffBAtJqELSkSvsfPpq7RbPDdNaVgAWtmGm",
  "key40": "5qtYnHNTxVjei89yJF6bfkmLYvJ2RdNKnpdFwVh2cwxwZDLrG4LzsTPaVG7xXvJvH8fKpXPWv2tyR8AcAugS4H7T",
  "key41": "5HeovqhLmHYmwPU23CqX3xSd6CrRDA6euMnDyYJJA3W56UnqR4biant82Cpn2kEHm4iQovZsj9zhe96Ap33bsv3T",
  "key42": "42FEvXGx5jnuQz9pbd4eTANCHNR1v6BBfFwfSagW73qKHgGWE7FrVDYmvN2fprzKtP3jKQgnWduodhuCgTb9MGFB",
  "key43": "62gxDZpCbasHAQv9VMmyCCAGVei4gyMNKV2RPkYxsFfyD89VmHUC47uSDUnMLMTPtMo5giVQ23udyvnwPJk1i3Gy"
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
