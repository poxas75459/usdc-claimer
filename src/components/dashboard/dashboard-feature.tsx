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
    "5oNFjj5tv4eNveRJVKpHggBt1Zaf4KPkPkxnfWxT5K8WUe93sdHsC1Tih1tL62KjzGegE84eZfmjxQ6hUA9js9WK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XqU5MN14f1UnZTkttfwCb78pAQewH9sX1i9KJHgmGEUnW7k6ztCq7hAR1ruuFVJQ172CmFBTNsJGtAu4gSUgZFd",
  "key1": "2fET9FGiYwS96zSyzCFSwL2XCpmM4KmUhK63pcYjXNVnzjkUoRCzWztkeXN96jfKqTu3ygtL1csDmbmwp4huV8av",
  "key2": "5jYembwrjxHa8bXaBiEbpBJwNPP7AeC4nU6CkpbMRGcb38LTn83WkFHwQcSfboYVwFNnaSp2QXatBtcF8YJRWTNf",
  "key3": "5A9Qpgt4U2U8jfABb7BcoW6gzk4HGtQ4L73WFh6LY8YkMrprqR7frd9oDC44tDnEt4XaJJFSMyhMDcEEx9JTer3L",
  "key4": "4bT6eCbkxMpcPkG2ZGHEiF3kfSRp3tiobj8S9QFtjo3djRAXVrj7LeLiB1q8FtpP3pSikZFfhzF4BLUzJaafMgs7",
  "key5": "3EB2TLLLbuRKV3jp2kaVYb4aZ3PzasVcrzrMDUvuini9N8VzaoRofBNAAnP92nWbJgpSRWd6H3uXQdPxsAfPp4ho",
  "key6": "23PJFdwYkc8Up3zLpEVBd2HE1FG5gbUKWTzgJq3sNgamHci5XRnanDXfRR1bzqHPjzmywd9d4RTgaX1WEQxUXh1n",
  "key7": "3MhoNRke91QtbBiNMcTLdMTqRm2y4Q1pJCa5gg88MdKmfbZvXEP5pmuty6aTExSS3jMKrV4NYk7VpDRCAfbeeJjf",
  "key8": "538vHNYbUzdekJEfwbnSCEmDfnb2Mcd73nVoWHuGwwZqwLvS3BHrD8LxfxmLz2G3Gf3ZjzKvbWz7D9vte8Ek6eWo",
  "key9": "42rSeYby1wZ4VmbHTaWhqh27yAn69Kdgwk4wDNP3FickKdTrmrhVzgWMUsUZYjtuTpyJSiWSCP37gCKRWsz2Qntr",
  "key10": "5t5QVJXjdDsFN5jPzAacD2g6kkogEfmkSAzthXKmyR3yCNjv6MqxvHcogtHXfm2nDV23dPqPP967cmwEzj9q2HtW",
  "key11": "2ii8Yerfj3P4WPLUc4Ad23Eagms4t8od2s5JambHWendXDegfjpvJNdNjJ1HS5YRbs6MJBjM8cCmBfeZQitELTXR",
  "key12": "5eU9apUj6cNJhNAfuy2nMXtt57xL9EVXxiGqYcRryCYM5DPxWZsE1sudWKVXxPa1KpjXMxSPSkVdq1NM9FBLg3EV",
  "key13": "5wMNsFL5AnTT9SsqM8kUUesQ6Gr6PYPrqULZEymFxqjV8v1g1jYJwdKFW4rW4m7N7ap6vMVAPr5dFvpUxrUsaWdg",
  "key14": "4rTATjCuAxsga62EpQkndKCozget5tPPMXyNHUnVy6aWW6H1jHU3qHKWFA7mTzvdn1y8aoLu2ZnPfG7mq4f5SZES",
  "key15": "5HynjekQ8YceAFAjKLvHBut6X3PbFPkjN3sXcNEEurPRcZQUCyn3ZTY4WTjo9ta2CJ7N2B5GxWi9TBrVmANqKY6K",
  "key16": "5iM85RueT1ycjsc9PNuADU8UCk1a17m2VDW3am9SkYPTL7b3wy8DnWSw4VuVHSj9uEMqh56dvzww834fR4KHTfyW",
  "key17": "733eGnCHUfjTrDVpFbKWFcrBhiP5ND9U3DUkJ2dod3HAfSXCRUgg7jgQmpPfeb1Dd6arnhpRvXe4Cv1DoxVEMJN",
  "key18": "4xHFCPddb4cJX6nQgkx5Lx9GskgT9fDbJ6emd6anJRgDpEWJekb7MQsyP12w8x4yDhbYjHKiE2Dk5UCis19YHBGr",
  "key19": "5TqQKvmrqRs2yQduSBDUh8XQ7CNzb9ERtPAWM3PEMfFWeyrtzvmn5F33Z7syWQiWqXxrvmPUtiNqDGyuZ8DeKbbB",
  "key20": "2fV2gj6P8gY24qLKg6hV3vRwRKKRQgUfDNR6dW2dS1hXJixwkb3jL39q8iaNKgcXxCfkfUjyuV6yMacsm7781iPv",
  "key21": "55fBBn4QJDY8pX9dEM8JcvApkbCctPZMRwpNzV99dwG8rDKDfQwiNSSMWCxPbmvVDMcK3yC22UKy9bszBMoMUTb9",
  "key22": "3sTb8QRKHiwTuKKP6Mze1GXpqHKyuQKkod3NKANUZvEmQKQATYRHv4xak6Hf9hqGBp8mZNLJc7DGRyeLBSszH2C1",
  "key23": "3Himh35Fu4U1FE7odAH4ZvDLKjRTKHoLTM2VMjDgFhh98nVJzQ7FueCN5rz91Qk5hEtjdLhr4w2e2wi1ptRTbSd4",
  "key24": "4RNfAQn2WPHJesYDmv3jiPpbUDrXGRdxDfyjWCYFbpErwjKXtrbcUv9tCSDZ18b77WzvqyB6VNFMism5Z6MkPwjF",
  "key25": "5K5JWH1fTuhMUhjHfT3N9whUj5GnSe1E7pFDqkQv3NxmHto7BKySazR8Dw1yGi853g6q9Rx1eAz6rw2qka5GCWtR",
  "key26": "3haRKbed5qbmwEjyuRe4yG1z3FxZihZgZEyjgWsKdpGWBdwpZKoThwWjPVGL7j3LzwJXBkFyCKwzg8sCHYV6zTix",
  "key27": "3KWcnEfiNC9QUiQoKhC7F2TJ2VfPyN1A3E9Eb2NozYgUJTzcAZ7ktnoK3RGvGvbvUPeur2jUURJR9ztEVtSo7xRJ",
  "key28": "5wHx15DRLgQwviDFCNsRTgB1FDXf2VZ1UFi8FyEFW6rejhiXSXvyNcyemjn37G3uK2TEGqTVMLEnqF6xf9Ck3zGY",
  "key29": "5RGZHdiVRpr2W47DwQoEZc4uVXFNzVbXFMQHKbzVTtFXAtYyn4EuVaSiJ2WaBa5xrEnVwx1Ba3d6e6MCueXUfMbb",
  "key30": "2ZPNLNLjG2De5UrHKmvpDjHC58m7VvauaN79kwvkT6skTfbWyzooqdM85GY5NRD6HAKqczxuKaL3esTDywPEmpE5",
  "key31": "5aU1Ts6KvnheH7LFofN4EUDmiqeDHJ18SUNaDJqsusqBUVdPt563cUqasNPvNqmkCi3vkKuFsiG3HkVVFYkViSQt",
  "key32": "i1YhgmPuSqWH92JkdFEJFB5vDfrdAC6WYb99de51oXJpogZwBqAXnxFaDLLxfMjhZ1cWoct3WwjCNAVP8WBvs7g",
  "key33": "59gBuwAqKupAL4eapNp931Wtpfze8Xo5mveaiUe3sJkDCtcc6HaBxh9ueQQZH4i4g8JBdMHQd7LfKPZp8qUo985N",
  "key34": "EkUdj6CzJDvoAkFwPbVN3C2Gmp54ABbdS9LYBp1bNiHYjURiWuiSgYf75qcYKuUAkrN6giBEUMWMXT9qzWqsZwe",
  "key35": "3G8nVWKj8aivBWvoybyHKhSyM8pvtoiWLJJb6rtcgxQ5AFPEs7C6kXUZt87TrPX4RgMa3WKXJYuoLX4McusHL93S",
  "key36": "48WM7uMNUNQsW2ZenCYLjwegfr8nDCRK6mkcMQa2k5tCj6TqhRVVBBXihKCBAka6ahxMhihgFFTDpbGiXceA33gy",
  "key37": "3ck8TpzN7C1KQTeENcFiYBqMMSiHqnxqxAsqchNyUngP3bkrtUPRZqZEciJYdgN47o5emsa8FB4Us4U7MeFahWu8",
  "key38": "5pDaSJwjKtpanZijre4VttdmPFuS6t6iBwRVHywV3JK1HePHCx3HBqX3ukjEFPhRbupvFZEe8E1R1YCMPLUbiFZo",
  "key39": "2DLpks2afBVJd8D9pSmvGgXvVJ43rQKPURoTmnAita4mTSJGfU9yDfEFVCsTcUXHFQVbYCW6axakEqENQU1hxsHw",
  "key40": "4h8RY7PDkWvh1BGcgaee6RNtwgrA9rn32Kmai1XVnfTWyTRK1rGUvzG35iC5S28UQEf3e7b1VpYs2caxuYKmJTX3",
  "key41": "u5fBUGtPHboBEKX35wWCwPBrNG5e2WuL1b9upN1NYANvyStQwo2LngxqwbUv6SGetQ5RvwH7hnjzK6xFe3V5BUJ",
  "key42": "9se98sF6RDTffQWtAFq7MucHvDXBAKYW9YrGjgje5XszbJWFmvxE8LwN4A7vEMhk6GmctCLQzZ1vjhYGxLTeByF",
  "key43": "2KSpGXJodfaFqNLfS6fWoodtmqecSSFjBa7HkZsALy96hfE2XdaZto5LB7STiGfUQD3VBzpzPEvP9XtPxWwj7bWD",
  "key44": "2nh82SJBzV8SVECj8BYwgaEcYNVgnFkAD7M4PT8W1F1ewhfYVdnzncH9fLeBvDrymRim5La9SSaCJJghaW4tj78m",
  "key45": "2DUAyey4Ko2p5kxtGL3d37pqU2TMEeQGZjsLXvS3a9rRhr1ybJv4jKLddWZz3zHcik3ZsEZGWuSgubchNwcjuJ1r"
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
