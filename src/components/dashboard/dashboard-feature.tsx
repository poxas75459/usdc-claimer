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
    "tqFmsHLA2V573fcnwaBs34mUXGUbwLqetAdPLuZ5a3pLLmyraw98HhZ2uhANXzYwjFRPC3pkuBqGnTxqtEyEQyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64e33fP9nUvp7KjpVbSnUgYJX3LJodxV78kNpHRZMX46FJ5XSkEk7e2iRr8VXYLr25nJGQ1ZkUYVsmer2jMZJPJw",
  "key1": "4sgx5o6r4C7YZz1TYNnSUU63psAGV2e6tk5MhKMYZYu4dbAQAhdEUTYwqpXMuSfkf14GKpiENffE9D6CGwu6wuRF",
  "key2": "2yn6eZFRDDeU9JjhPhJX8bPoziDn1wphrfEbcT8nD2qUDMef7iBxK2hJHQRr5xmE7PENv52fyUUqf8HQP1y78cyz",
  "key3": "4WoM2XpPaCXmbT8s4PHFjMR3HS1asq6eVQge4SqnRmf7tUJ9SaVrsY6PiANkUg34mug2mtVG8Nx9UjQ2GDDy1YbM",
  "key4": "qEcrXB8xRgzQJSHwn6hkCbcGeiqTVfBbFsYg3oru7oc2BbmMRxuP63YWWyALfa4VhhBn8wRViidJom2X8uFB9bx",
  "key5": "4hikbsUKC9E73WiQK3kWy9JNu71VMCxiuWCsK1xwwzneEAwRESrrh5WBXNrpZw9TeLZhFyVfsS6chqgbHgk5vU6n",
  "key6": "2YYy2cFdDFJWrxXzyHd6Vyvu2rV4BMyUfy9NyNjHg2uRibHjrAFoRrBra94P89QNhbiCVDkv5sG3yEY2KMuUXRDP",
  "key7": "5xuLPDGhBge3vKbRYSHT4aeoPvpfVYg1GhQskDRfeT4WT8voHUCSdKoQowYH3KWPkZwRdjcpfBfL9fLttyKMzadN",
  "key8": "5eWKDTd42vSuzUWy8BPJpqna88CzsyTnxobXCC4mRQWpWEVGkuw2Gyv8uBDYnYT3XBjb35bG9nF8ZETHVjuZMupm",
  "key9": "2nJ9hx8dbWWpB1vpJ1vBsXBE18kcp2C3WqEwWrn9zfuPbbje58Ko7hNy4MpEhw6EzJ5FsMZ78QRmzn24fmiz37cd",
  "key10": "4yMKkwMDQD2ARhYUjSYaQGBiA5nTpU6dNLRCEqHxG8b87jmsmrRFupULsKBR65ynRp7M9PMrc6UpnMuCAQguZQWf",
  "key11": "2XizsHAJnjudt9jZHhfj9w8U9psxQrGahScrDVfjhYzGN3wsxfNgpwQiE7nkmJJLeV32qeKtLHhSS8kenzrdbkpA",
  "key12": "nrs9BH6fSsjFq7WFALmSifUXBtzqUqGYTtRm4meRnoxiuFJa5A24jGsEbGBQrs4T9pgFehbt8Rp2GrSo1Lea17N",
  "key13": "9vpXohUHZec7q2BgYDdUDthzXFRSWmMafjEQqFXsMNzrftcD17qSjSRNne38ZmhADjsWvmRAiceuWdzYtzYfbBV",
  "key14": "3vf2Ca6TyMiKsUiTfA12eTaSzSgiYjcizH6C9E81pw5ng3snTEHaUwQYi3XjunBy1DxT32kVzrbmp7NRhyoo5fpk",
  "key15": "3ttoi84tDdcATyEbp1Uf4G8pTJ2x3geYAFBv3aJQo4uVCa2tgrxsBCga5qX3wHB4r56Ub21G3U59QSvcDQYpHZbW",
  "key16": "3xqaC5fwgQdtnAvYHND3K8NodXkYJw3ewPJJqhnFNsFVkA1PxxpQUsrsZNKcFkoWuR2Pr1xmJsBRXunVo3yJWhHb",
  "key17": "4JkpYzrnx1rCXygZfxF4Qk9tri4dZbLsToCT7RNcrNQ5SyNS4c7dBavjbiii56aVKCfgGojGNmPUEhFhas3LjQqU",
  "key18": "22jPjtsTYiurGTmgWHQdqTkW4E5DUmm2pfaSxVwqwFnwdWgu6vPfN9YbCetuJzaL1JXopmmSAELbsbE8HPkSQvC1",
  "key19": "21sbchJ3TCvr4odBCUc4iUp8xKJVvUSvYFkJxdZTc5XYUXv4SwVbzwMrP3GCXuGQwQtNdwDQaixXjpP2nXa7h5z4",
  "key20": "dPVHesa6kSJdzPgJkYQpzT1BswGUXbotHnv1bXae4N39Q4Bmkq7a3s371qXBMfsj3Q8aNtcRkE2TWSKnPECzD6j",
  "key21": "ZpPvccDd2ujnM8d5hsXs8MjzZq3fNfVYvcabA53PgvvP3vxhrJJp1TBFYF4mivafCp21f9NPdkMrw7ajDnEpsbk",
  "key22": "2hxkfctWCm6yrfJZ2d7ypugNm6UH7nQhQH9SRYyvwmj8FAwmwun8jT25vyttBGKTup1drZGGSqoohJi1dJRekYjT",
  "key23": "5a1bpKCiezY61RXkEP3QQHp398wf2Va19FLGCWYMoHdetx1Rh3Mxabcg8RwFz4kfSM1RXHYf11Y25XR3oaZXtjsV",
  "key24": "97wfnUYyCPvHoST6oFNASpHAaFfn7uvpPGeoCZfR47RguDCcniWFdSZcJFn4USBh9878oyf4LJjz4LEMNyyypAd",
  "key25": "2vXzeLSCej8fjrxei1wRkas8zTBYKixbkCZXmKowNMhuoNBEVAmN1mgRWxUUXS7uAGuDvoMN8TvKgXMbpVCDwsDo",
  "key26": "UqAi7suS6kghjRzJTvkeCMjBCGM8mJPPyvbWiqQb48iJKWfEJ7MZ9RJfFexKX6PHY7QgaXitLc4pyCJB9HDuqEW",
  "key27": "Ta9zEXqswhEUqC78rxPfR261EDKMvmDiNBHdfSKd4AndG5CfoP8pc6TByQm7C1775nLNn5e1CwTjhda2cPLN6rr",
  "key28": "4Y3GN6VLue4qAV7hfYjhzoCnprCkvsN6GGkT26DX5rGiMeaWjqhYYiDQHJxgZVEkZnwh6C7tnPa5LAQuR6zH5zCo",
  "key29": "5DPGr8FrWSBFG2n5rcAz4VKsePsbZ3FVSwLxWQidoWZ9CBa72r2US8cq3NLDDfDHmjSQRMPiC5YGb4XBboD7mrc8",
  "key30": "5QzujYdmK24N63J2FMaSXbzJ8oxr3nYomGk7FSJYKVtyd69Khjrn27iETMBK6Ge1JDRQZRYCW5qu53tEKP2W45Go",
  "key31": "6XEKzgFi6dAtLicTRqoxmh9xYDk5n8TqgwTumQD5QzHsbzRNqZQxAVuDyJMnE3eeNF5aauwbpbrBemyvLZcUAgr",
  "key32": "5carJUWor3A2QrEUuX6QZbw8x9YBEAPtCZHygg56fBGMvJQwUvYEB7jf1jqLpR74k2M2N1fTD5s2MsgBLeotCXiX",
  "key33": "4iPgJLJk9tMTcgwkneLaZAGmDF3SbBJPKpVkBeXTEBkTZ9fWKqGuunU7GRZzsEmKowDTWpiBumEvo8qDx1bUJa3Q",
  "key34": "5odnFziiKRqLpamtW5hzkJDYFCysqgGVxyA1sHF2LGbCKdesJZhRuvZi8V2att3pXQ2KXuVnJ4E29qadErUhjexA",
  "key35": "5XmdPwruQrhDvTQz3NeZeSZfx7JSY4qhajrMiGFMJZseMQHT5xh31taVXhUxAQCzwfr29gAECDfDF8hubUEtwpMK",
  "key36": "4e3AUMaz49xq7CvcgqeBRDwLDuEhMk1RQGJ7tQvfhxZMWzxhqRgrhLT3PZGMgsS1RYsytSyXSskDx2ka3q6aU1p4",
  "key37": "41SDnDxHAc4iX28A3jL6mWeikUPWXHkYcspK2jmxjFsJ2sH8WV1GAzZniRmQRvUK157cknKzk4bdDZMwqJ9nRUpq",
  "key38": "2fexQHNaQxv5L4dQfSNoKy2Pk2Jz7RRhdstM8mngoPD3n2ugmyoMHLmfvkEfVRej3xTZUtjviqSU96UCi53TdBDF",
  "key39": "PN352WyHhvvgFueKudu4rpKEaz9NCF2pKLBocSpx2uxVz1d8Pqvz3NGsmHvvQeSFQ8XhAZHGZrWXaLSqxLgy9av"
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
