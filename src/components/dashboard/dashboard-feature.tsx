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
    "papHzMJp4sHiga6aK1NDkWMAEJ9KAmxKmquhinLHkr8jWZ5usELCGXBRPnaGdz7dngDzxxNXTNUkZy236i5RSda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dZrQ8HxEBPRNUnr5gw8e9ri3rchdhYdFzECeqGCzvBKVxBJCwvS3U2CknFwqxiXgqpimenoxYSQLm8cbcn1mfRy",
  "key1": "4jhcH7dRS6Ktpk8Qze6DaYJhJhoUbbYBufV8Ne1NeKYVwhF7CHYPwh1ARXrwMbgPKE1ggepuwUao53o8bDuqnLHr",
  "key2": "2V7Rb1mk25KNwBvUX99vBmn3jLWwyNBuHf7ivuZakKQwXdSqeiwNJwoV67hiR7XnEa7Nw8PeshTq5supCgbZsCUt",
  "key3": "LUFwY9nrPWUkTEFFvLfRbYUkYVMDQ1JN7qRkDAfTaVMweYevBonG8K62a8YynqbUxyMHJChBJQ5qd9gaQn17QxQ",
  "key4": "2oqDfnBgXGYJpMZhypNhcKrA44caN9ouXHbYdQiqFsPYfQASE27RNN9dxh7jZbCRPyhU5KqzXYQbqgNRfhhww5qc",
  "key5": "5LKyW4Vh4pYf8TkNb7DBYPMDrMj46GLrBgVqfiMMhuytLzBcFPQ8S5Gqsim4H785hQdeFjQ415dGRdEtgNLerYjm",
  "key6": "5U7UC6GaxQpYhM3nMDnxUeojYa274dUjB78kUBraYzJM6nUHLj5fTiEKQ3Cje7aSp9AqLMBM2MUa2rpzu7ubCGGM",
  "key7": "2mQYCBArqE31UqQvZLPqNNubHmbvCq2CqFXgH4PoFEsZk9oQKsrJNW9P9g9jUKiW8ENji2QCp8hPwCWLi5BL7cX3",
  "key8": "4DnmSRQM1inqAFdHaxTKhedf5UCAF1omx8b5DH7KNsi5pe9HiNzamanZvUGcGfGhuc2HbzMfwJD8NNGCrt7xcsXY",
  "key9": "4bGBRQnqWi2v83uk7bHZKnFdezjYwM6UoyhggRsHzSafy4SaVNdRbK2BnmFZfaEZgxUSmro2UN3Hvh1P23TcidVX",
  "key10": "5z1yz4b3NNTvvSd5DdjfWssiexTBkrSNbRzmHQY3738cBqzix5y3zPi5HuZdeYNnoUBKUbtP9z6eKE9QgsRT7qPk",
  "key11": "2GNYSvzMpDXgn3wKEzNK3ayZZym3buH6pSr82ShrLRAQsDQbyYs7kjMM5p8e6CQVcRRZPeiMGc1ZgYZ5WkTXJ9Ki",
  "key12": "4nabdEYeYS3fC1bNp342ru6nfuTDZJifiHZa3pmEZz9mRpoSsVBuZncC46corKVnVanbbuwzpmNsjYSPEpL7kLQq",
  "key13": "5k4PqNS9GwEnPcXRFAyDZjng4mpPojsSvJ2Ea9qHfiGRH3Uu7THHCT5SHe6gchi1CYioFQZMEaRKBKtvQoqEDVwr",
  "key14": "3qUsoEAphgmxsCm89WTj8hPzKpjK1h8g29eZsonN4ZXZjZMsodMLXTHBkktnPNQwuDm3sivr82DqgKFiwvNuVoY3",
  "key15": "4ardXWMFneeZRDqtcWzomycub1umUiusJ9yg6M8SFKJh76UqArHKdVKJe3zgaNonBvqiRSui7q62vADkz26tyREn",
  "key16": "4h3g4fjsAZyNMKFjc3ZEPJrBz8AfFivXoE3Fdw4k1ooRntv9C9hbndzWvzo9KhvfSSUFBFqT2BsV4gXhLDgnxs6H",
  "key17": "SysUs6WFw2mVQ2wDHZiroZxqbHBXbg8u3D1XgwoSAFvbv9Apg1SANisPnshA7MhXQDUHKK7ZgrL1byfuJnY13p1",
  "key18": "4cM3A6ceuQWjKmKnZD2xQ7vP3JjH6VmkbLXVJEnHHFzPS4CimJg8Kq1Yu3X3EK2Ty2nQfBivh4n94i8mHMDDv68p",
  "key19": "53ghEHKz9TQqGivCpdzguvdGFVjDmN8aHLySoSUVEfHWSH3uhw5HzDLT4ufxmG11GydpeTkj5PpLkEfg25RAoWgR",
  "key20": "cotd78SwjivswSXZt7FBWeZJDLHYC5q7QNAcMisPKydxVMVLdvtuCssLCkXWFJktUvEasPvPchp15LHL9kpjUJL",
  "key21": "31oyh8xcvFkwkdxDPUXS46WaXH5i9SRcwooVPnEDQv4o2Q4GhuXiPcxScqJ4VCjYav83DMEpnX16hyyKkRLWyMg4",
  "key22": "vrgUMauM2P8Jf2f4PLwcSEbqwNJqKcB6ugNbbKmcrvsXZEii4MjCSd6LUUrosGNWVy4zN9zi1uF7mr2Hgc2k9Qz",
  "key23": "PCSiTyeKuHEv9yPhEgjpBnDA31GDvijYyxHc6mHUfYbM2nZnqxsin3TdoM3pQN7Q9s1WJheXv3W5Q7q5jfsTiLe",
  "key24": "gayPJ4BaTXc5pQoR8osC9ZgJ2Qf7ArLaQa3Rs8D8FfvY99izNVCDnGSPo9A9ihY4CQRvWtCyX3HZ65SBUHoRwCQ",
  "key25": "5CxwrdKPnxF89RtjkXji7PsgoCAJ9nCeNYSgEDTyjpzSNrRqZJW3SVrXUhSb8rXWPj1KpGZN8MMkBuN9CiHN3wGw",
  "key26": "4DLPHFRYHWTwtZUtXHNEvfXPQnnBU8BjP8iq1VkNA9yx9Q4Unfsd2nEj8AGGmiteEXUcbdBZ4QsfwHD2W3Akd2YV",
  "key27": "4PaWGJbcTTFGNmPWBjcKxqebYBVp3RGM77J1HwgW86kz4PGSvWiK9fjGKzFq7BJRj5tSMqKpzdbTVGjvQmjWuCJP",
  "key28": "5h9ZzZpvY6UxEUyRX1fmVcUXGVUhyHpJgSBKHDjjVjCYVVRBdGBhRuQEadFGKPNh9kFK8zm88YgS9qZxHx8Sn2za",
  "key29": "2Qb1quCUhDL6EAwGzLxgf6ppRg5ViPu2xjCdVSr8TnwWxcoc5PrUJRmaRGEiujT1i87soufXqTSuGvSkFWE4SpUd",
  "key30": "3e1gVpSQBE3YHEMM8qVpmuccPi6dL47PQpGk9T5Toqs8ux75gvvWQcC9KY7ojM8cbvjsj7g3jxCSLmNv6cciXvNy",
  "key31": "482vd7MTP9eU81ZMCMbw3VMHWUrwwFjx1Rg7ACa4JH38Z3AFZ9VsfkeXmWYUvFyUBM7PGWpf3axf4FicYGv1JSY1",
  "key32": "67EdeZEZkf4SH4aTYPLPDnQgxh6wwEomLTrPT83N5jpSvGzuyaGS89Ljoj1XrywNyEtvMFu5WXHEDaK3s5Zrbhmn",
  "key33": "3rdDzTKpGtMtQy85Z481b6bCb1MUkWYzwGyBQzwNQ3mvxZVGEMbTYqZqygCeydXKCJPnSD6XsBs37u4CEEYC1N9Y",
  "key34": "5Spq2zVN6WyyDuP9sKTifEcRXZajgWNxtdBiXsVq18mpDNNTvkzYCQMsm47uiVHwc5mXwP1AMCKCCtw4aLRyXRre",
  "key35": "2VAaSWRJcnDAJdX6kANcQuLqFXDJ8aDfqVA2JEK6GFNjqrJFTnzNZrvofDYYMNkWeo3mhxaULnWS5ToK5PMmBeZK",
  "key36": "4D91MfFKnjdGYufoguDKFGi8s3ttdDTR8pqScxRezcedchpc3LFXTr5sMQo5SHdDDT9DQggFzJvRJSFXD54RZkr4",
  "key37": "31nnxPbvj8ug5nAT2F8inEeUqgJ8Vm1TbHPAw9iBfeKsfKEEg9EhL3kyw1hYj9QY1LCNRwdXEgauSLy2RyEs3HaK",
  "key38": "2ZvBwYAK98HNayp78p5RDut2gZxsbg8p9UWuCYa1VPQ3kU6AJ7FwMbHMUFVqd8sPF9EFffjff9vbaGNMbQGBXzBo",
  "key39": "PVDTuNAvcwaNv19PDFDMrsEV4YFXupjAwv2muV3diSzUGqWF1enGA57BPhCXxR8QWqdjTh691LurqyXyWFGvrDf",
  "key40": "vDGQDMVihmx4UYxbMBK1KsXaC9r8RTiyJu7HutfNpdgcm6dZdpwdz5X9iEnjRs6zquFGjtbnqbqcsMXYuVm2Gtc",
  "key41": "4jxnhRscAkTyRf33DbJ8R1cFFRr1Bt1ZrzWdtiGYJ2zHeNthCeYz6AFiZZYHj2xYQe6zhYWCSapYZxxRb77LSGz1",
  "key42": "dBwxfq3tBVSCsyWNfeFEj5Zk4h2mon69Z4n5qAH6oHsnokb64rVWLHmbkgwCoazegVLVHmCBjPXkRc43yRCQtnq",
  "key43": "LSCZFciFYJVFVYXcvkfqWbeptTHowjtbQgk9ynCMQRxurnv2D4STpDCB5hb2vY9u6VZdK5yR5GZoaKJf2nFXaLb",
  "key44": "65CD1KRk4qAF3EdDaKhsPe9YnQ2panmLMnV5VmAdgDrL3Ms4HRBw3pY3AXCsav4WJZJkRw93JjMsnZFQJjfkNFwd",
  "key45": "pEGjcmntSHtHwY3roh5kH5cpNykLLqKBNQS3tAW8wieVR2RQwWkWwSujDtvBjFv3YvfdSJXkD4rU8cBU92B3ax6",
  "key46": "4shcaHTbgGSVe9oWjW3WErae2VVS81W17rfarKR7iWEPt7zrH8mGGp9VWCHapHjhgDGnnMG3ikoUcZiFEgtQ6twN",
  "key47": "3VfrRZDVB2pqkkXLEvB5y3nXHo8QSuY9iAtXnBaa32LjLuqodUv5Axsvr4LnUhVFvcsCZfQWJQyGmizFZgvB7RMg",
  "key48": "2ZcH4SQJ4idybBGTd2yBVBNrGi8oW1zotxEyfHkJAvUXXZyKyvgqQUqPw8ibS6TA5kLJNCrUsZFi9JWYmoi4qrVY",
  "key49": "4psZhRB22HMYbaLHtqyQ9PwasqURMzUhkyi6QjpVHWv3qA3SUryRoxbwDaCjQ8w6mGYajFz7pa37PgA8FVFGB1x2"
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
