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
    "dGhNBBDZ9bsyLKaSRRNHY986Qdhg7eqMzFnagiE5xjHbFdHxrHP5jtbq89Mc2mGcDZFKR7rHCsYPt35CimCX5YS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "15Gyx3SJWsHxMxBdGHpQ2T9b4RPfvAc1zbTtwwG1ZUKfpYqLwbv1ZA5mmuN3votaHfiewNZt45GcPLDNP7qJcA2",
  "key1": "2wLQnDLTvkmeCtA7ZEWPANM5zDpwsUV5rRpu3FYMr3fq8NR2cyPAy6QJHUPm47mGagvqHEkx5ip7StJes1Xx16qp",
  "key2": "3qwaiUEJDFjPLM5kedMaoCVCXZJR5ZjyHR1LcXMCiWqe2zA9zesa8fNARqT1aFfa7cLuyF5eWpL2r8RZ3yNtPNoA",
  "key3": "4Vu8RHisYGvPemZNwrQDrFdv2YuH2fQ9iqKGHxByu3mNwb9drgAA4XXmmjG5wtE9A1LT3wpkzeFzpP1PZkYmQ19R",
  "key4": "FrJh4qg7vXADh6bCZpmthrBGx3cUoeftQ6AsJowU5aqEMXnhkiWo1wjBBpgfygEKvMr4z6aquXfoYn1QZwfbstb",
  "key5": "4YyhpG5rcT6ypRMAj71jWzoRrCwe7NtZgabtW9DTMjxK4UESb7vi229WNsX6L5VZFhuch6kmaQEDHAYEDr73KKcL",
  "key6": "49FuSRJwpqUh5XqKfq4iqVYLaTYUxesFbiXRJzs2S6ECStagGZ9n6rGCQigSUaU2oZA8DWxNgjARAmPVmUCDp3xi",
  "key7": "52RL1WUDRBAgRN2QiEDTkNLcBoqgSytrXM4FuHooLbn6V9ANKQ8duhXRBETkykbKcVPx2Q437yULwo4n7ptQDARc",
  "key8": "3K71AVJxn1XFocUVWm1FAkmAgfn3hZGt1YQ1MQxSa4RqRpnWfsfjT5vyWFuEVwc9DizncDKLVDgCoSNgSVbEnLhX",
  "key9": "4vPf1vWhYunJy5aFk9q31fJArqPFvgF7ceQSxHbGvpQEMX1s61ywwbwwKxnHZpAwRa4QwK1eQTe4VkpxZftYoros",
  "key10": "3LwiRz17HV8EQfHZF8CwfXE9YebfFqM5VbZgjeMn3HT2NV2isRwyEmup2hrYTGtsC3NV5pg77HnQXc6jDjzfDZon",
  "key11": "5uTsw9nZ8DyWj9rAfjjXybKTfXS6PTEmzs2GrKT3bSJ7iqRbXatpHb4ZaEQ8eKkhcqKhw29A7SgLdRUTFvE3QX6w",
  "key12": "3GJr121DKzyMX63f4ZoLuBLRyX7FU7rxQqrTJ5e7pQwQVP38vb2tdY1g8CRdtKQnw6YiVJSY9GBEzsfHVRYEtFrn",
  "key13": "4Z3yNND2m8yvhA1uonF9XuUdF6yxKut1UAVbkVt8YStmVwc77snjdN5tn7q8hQG1LnM7pk2hyP4YBYK16gmhNf3o",
  "key14": "2mHerucu5PsVejVAphnktSv98xKoeda7QguzAyY2wfegipNEDE8ogPFbw3GTsWsFHcnJef8a5YDP7TfxJADcLHYH",
  "key15": "2CSXMCAJV4G1ETiqhcaNmbUpesCrTLB3UPcvXqfo8NGNJZ7jEEwYsUrkgiBJcqV3AwV1dkHYZk6Nye3Qt7RMwEgZ",
  "key16": "2g4XzfEgyc7HGr79WUhF4rLDmWbrVBH3zw9tMHCX9gTqFj5ZLCRKH14UkaDh34KZA5HzYKCmcfTwBYFDiAhzy7g7",
  "key17": "wQqz38MsUtNponM9rRD7UirkRZiNfnbLcqCdUAWSe9NMyZamEar2G8kyPdcbLTrAepxpJ1YiEYx7ztaAPdsXN1a",
  "key18": "2TFWKvXVYmXMQ7c5VvDo7gAUYeFDPwAKk34ySCV4Gnz1wK9vHSKEDbyMNgBTcY8mACvV8hfbMhrsBvnNkff77b6N",
  "key19": "3npCPDcK7J7U6H8r8ZR6Qa7dURZZegJSUjK8ggRU7Y1Vn5Y4DMXfamULAEyheH4bFyVN4oDSLogxK53Ywib7Prck",
  "key20": "31LmsM6xa6md4hwCw8nG6vGaowkk381bsEdQrtjPxYXsw6sNscjQw3V81ZyeBJhP12jpW1kCgksUwnEz2h7vrpQj",
  "key21": "3k8FUWLFXMRxxCskEBCm6mSgv1uGPvfABTFHFiFmDgrZca7gzgvW3dULJZWowiXHa2dweFuiYmj5wvtVRz5vW8hL",
  "key22": "2oFBCLwRJTbnURdEtZCWsCKfn3XbQ18UYSoXVUtmtZiZFbqUCmKP43gXtXTq4JQ4urschPqveu7sGSGFmnpvVQRi",
  "key23": "2AnMAKCZaE6ccmoYUZ8zmkXJUcQZp3zibcEmrAb2xf5zGVHLyJxLZNSshosyWZCStxs2VHFxGP8rvTTDqqFM4Rkz",
  "key24": "5PAtXXZSsw2uZ18zJQYtXqNiRumXs2NvvXZ9rPVUcy16gEPiyMn5gxbpNUk1i4exsWLS6yCHZdYHee8d6MNgYZwe",
  "key25": "5m389JRp3zXnpzwN5ZZDCMpLQTD4FsboRkFwbZn8FR2zZ6UoTyZEEzu3q5baJpSc3oJN5SWCiKA6yErN8cAiK82G",
  "key26": "2rQLAU5WGNTHAAqUn267oSS1DBfk3godNy468P7ZvJKRo8nR3yaqZwAdzA2eZAViTZxaFuYeCobT6CV5KCWhvSgd",
  "key27": "5xD5sAnJd8YKVH8xTpMYPBoxeahkRR47g1WJ88fhFFFXdjb2V3FweUh5KwDFo4VTiyvL2HmSyLozqU2Nw7Sw3g1X",
  "key28": "59DEjLVdBMhZxKjmMrZvN1QhhxVGkHq3viLgSqZekcendnfhUM1uHKq8JM9hXcN3HSTuRwdBKpEea4sXhEs3TzLY",
  "key29": "4jgyMNJmAdsGtHC1Uyk4pyyQpHX9jGZ735ZuCHdavj7xBx78TG65kAp5K3iSgF43C1upPWxQYJPsVGQr6duCGg8q",
  "key30": "GoieptxPP35Q6jgWbryBnwotDmXGpXAWHwGyfABwrAeTedGBBzhVATNFTB2GhrmSS9nfBFgHkLfZY5Rgker6Dv9",
  "key31": "5mMQfvS4nfdE3WNGR6TPRmYGcJxAshNh8edwnvmbZmHJ23NfRuGJ3MDED6dK2XHBbXLGZW9KmDcjkMU9GpktNXK1",
  "key32": "4WoHgTGv3n2XJaiH2nk4sMsMn7khftDrzoCjbLzee64yqTuRzaMdXHZJUCPq1zi19kRL55FCFww4Ry7QMz7uLnDf",
  "key33": "qP1tSHejzm1agEzkvPLRPKLEusdfkerXguDvh4dj6e1uhcYKTnW5NCr7PvSA3L1LfcM7uYAMQTTp3p55NkZ1ypn",
  "key34": "2u9ERWQL1tMUCpckWDekup4KYBg3WARV3xCCrg5PxPajsSekh8CV8JKxf6zbS9hNy1uHnCgU1QweFDdCLmsHEbM2",
  "key35": "2QWjMsHkUPt7b4MtRMPqnKfxdhH58AtskA4zBwcGuc2Hm3gfXwNs7YPQJ5AKwnNT6gZzcGGvTD26EAVzqsDu9Fyi",
  "key36": "2YHgWrP7AUCNTbtj7hEDx8MJffdT2MrZKue47SmWNQs75bpuh9DZL9g9BS9kQtKEc68oBCFAbXpChqw8XwfQmFA4",
  "key37": "4ZycBjfmQi2FXcMQEj3QwPn5Tbj3AXB6wmUqk8SWGooaJg8ikDDoBtE4M6gpMtA4mDwm4DSyaQxAicMDUFeoYFEZ",
  "key38": "qQBeu85tTEStVFnM4aNUDDmSfXckwACzDG51orN2JD4tSjgeEKX4fwYM3RMEFrexHhcowChStphsNVtLKEfdfhz",
  "key39": "4ExFjnqj82L97uN1aMjenqH1jsEfb1DoqJstAJmVqhtpJ6z9i4GuS7Cq4UvTBiumr1C24gtacZ2cLeGBXjzK9C7z"
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
