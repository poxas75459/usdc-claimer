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
    "AtmWNXUZtbs2cbWqnFjsr3fqArL6rZKJWikuAYNCfSuwWFrk41CoMH7sJq4vfPCgHqdapqdNwY8W65ShFWxAtxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34GjbNG6s2wWFP9NMrpWFgwF8DeYA9NGPrW38HhAQJahDQ4MPPg97YBJqVbsezgZCzSdw2FCXCgCgs269LpqdKxw",
  "key1": "3eaFivdp2VyUHSfNp9Dssk8nDrpXp7mmSBYnVCat51ng15x78VBWebNEQTA6TNndcJMJxJWiiJKoX5Zdo1vRrBhf",
  "key2": "4Q3BpQv5Yq8iVnkne7uaUroRJqLdG9r2wwxV2HM2sWniFEMg6zwAC1w2LYVF78wUYCzdoZGDgGA9St1YoWktjR9b",
  "key3": "2rgsQbKXt4dhxsqdoiFJAFBx1FwKMYzFs316u6gB6JMPph1y4Xzov7tAazZKKousdaJSMG5iYfoJGoqjfCEetzvD",
  "key4": "4RN8PUUXE1EzWFFKSMC75f88Kvy7eWsgfBhFPoVeqdXEZdoDswB79Zfevkecto4DQ91HTEkKgwChesAxbTS6v7GA",
  "key5": "3KFJoZPMCaD6wHkabTkAgF7dEX8C2hWy9yiCf8ZPKE8S4iovVWkx8z7oaF9ckEj1qLC5xS8viKC7gp7rPPPMmfVo",
  "key6": "m1gDDPzrfjdJT1cBJ376jps4wWngJ4ELrp96dB7uaQj2Jd2r4BznMsEgvHeZxjpAN54TmBWvKeHfrMRNk4Nz2ai",
  "key7": "418zicvGk6t6UXcVpLjhZqcuy2KUsQgE5xAd75bSp23DYPCTiYa5TnvwEbTofmBxnrpcV5Y63H2pdCVVPcSoPtR",
  "key8": "EYrrQqLGDdbaHGfpVx7CEQojJr5sCCxqq5h91P15gcaVxXabLtxMbGRamzcF5QYPNT63gftqHVuZF99WCVuvtLp",
  "key9": "3YdZ2N61rC73VgubAWC9LPxJbbP3v5puYmrzCRH1xkSiUamyDVXBMNctzxxX1taeCwvjyQicht3mtF7JFTSVbPpx",
  "key10": "3FZmeEVMQnHGbUCUkvm3eTKw2oVj1f9j5wgYtCg8oC21Mq8dAxGwopuTMADVstogkQBicrJQdq7VLNDWmxF5LCKQ",
  "key11": "5Ubvk53jJ9NHgUnmVs9ectz9xh9u6fdtkd11JJBpN2kuRYNZkm6sDX49SGat4z3h6WkCn7EuQdLPL2MUwYgmW4D2",
  "key12": "3RNJ98VnvYkpuZ1mrbk6hZmNoAm7FixdypoBS6Uic3838osRhkPJd6ijUkfTrQmBwk3hukpUg6rJv4VTQ9iT66T",
  "key13": "vKDqniNnxGA1Xry2Ry2ZoWePbv71wr7CfUr5XNBx6TBJCotsJMbP5G8KMvxzNo9ssAjEtH68S2ucRirDaKoaCqf",
  "key14": "4Mce9CDWH4drguGDHCD5NFCPi6cSYVm3LHpD9f8EaLVknexprZ8PyUSfYsMmSRygxYnMXYQ2K2x1DmJ4b8ag74EN",
  "key15": "5iLtCwsmXJufjagZ5XavqXquTUAANzMe75hP9w163qjwWBnqNxXUWfgoMWPtx27tWLFYBwVUSbhDCuhAotNpG3fS",
  "key16": "7i7ujE8duumoCjn5N8NifRmwZKusnuFUQ9cpZoZRHcjysNciFB72tbgktESTJMFjKkWqmAg7b8ZY5zx24RHaeSV",
  "key17": "3dLFgZY3SEptobxW2dXUiVct1EwsU4TcHCc1kANRvNXRtJ6QiS66UHvS63aWxizY5yeXpXZ9c9HsmD28cU8D9nv2",
  "key18": "5Lupiu4eL7h4pisjGrHFJPdgxzpL9fv4JgPiHtPwu617YHvKmo6QFAV186KCwYjju2Ly8C2LGa87tfwvgpwaNEsx",
  "key19": "5qruWKrQ18Dh1RcU5jaC5Q2hoDQ2dT6kgjAYr6Jcw7mpEqHpdrZJ6CJgu7ySudhPd9PJgJHbFtxxWgbtXEm9kzbe",
  "key20": "4EWkdSDnRBu6QeT6APjo6cvEkRwE52pZVPUGWPUzxodmA5NCtsYqDxTE7iC8mxBaguKsMg1YkoJSQfpVzCq3jTP9",
  "key21": "3WfkbpSaKENCxqVUmkju1NVTShZYJAUDg9QjC4sfoxVDFPKmAicMhWDESAc7x9FJXTsdtFCB1hTx9v8iRhLGw6z8",
  "key22": "4DFtGn98VGaQUsujRoTE2Bw8NyckHG7G7ciczQZtKXqmKmhx7DsxRRN5gbm6UWUcpN2R7KEz2LyqiyBGn8UDYyar",
  "key23": "5YX6GppHiWbH7D9vf6iBy3veBPYymHbVa3WzLfZ9pFzhsMYscGUseoJpmTj55FgkBXJysBCpJrpmubipqFGfLr6s",
  "key24": "35NQ7TBRnexUjkKEzwe3SVaqYnoyTqHNakiaXqQU1Myeiy2boVMEUy7Ab5UQpQoUBP7fioCu5ED1zwGoL4xjwpK",
  "key25": "4bwhnUWEz3wCDPwgUQRuEALpm1ZBQ1DjZkgeQavJfyxYjJAysoM2PTZdgFkfzTGo7BZ1Suou2GfsZ7x4Rn317t6Y",
  "key26": "5jtScQZMpMHhWqoDZDWwNrAZGbyEfWzXLPTB8HhDnaDxjog7T6jKq3RRmpBbFmfjxp1dxmRzsJRNobQuzs19kW3b",
  "key27": "AWH5arR8Mx1tmy7USSRdsZypKBraydRUmLAWNMQs8FPoowafm7xUeMq781imMeC7kgdbhsJozfShUSfsfmjFjuz",
  "key28": "5xZU1fVk5QETmsZ79aXqoMX8PaEYBNScMSL9ecdqaGMP15cnTMD7Aske8gv5rY1fwC9AGompZDHBCiB3eLTdW17w",
  "key29": "2VuCuF8uLNqdmWhU4oGqhZm9AbH8BU7wSGrkzk8YuevLmqrA5KJeXs18zCDdfBUwFJq9BXZH7p5NiXU5GvXr6s3c",
  "key30": "5Ad861aPaR5AnYoM4MWn11fYShaTxXkeGNyjjNMvhDNcAC9f3d5eFDwyLJWFx5BtowFhR37aFD46FbwinkCXRNgs",
  "key31": "5xhhxLXPn3pt2TpiG2HsdS49q6srn8bVS9hAdEYKAqUbCcgAskyy1ZfNzKdgexq7QHKBWBMwJ2UhcNdkmdEdMFLd",
  "key32": "4PMG2XRCWCuZPqKXeGmZ2L9uXJMrtzixWA4kGHGAgBGczDD7pHkT8zBX2WB4d4R53jiEHPwgKvxvSCvmBTmvrKff",
  "key33": "3c2u8rX6LLf1RzF5NL8X8EbTc2EU9SyVB5kxrkT2jYJRwW2oq8fC2GEVjbqRMg2K8RUNZ7Sce4BNCSRgLvbtQUfq",
  "key34": "3G4Er84KvvEVjLkNDRDKGc2yqkLSz8rxibAZY43c3Vq94NrQWRhro5LvTrfQBQ9n9f8gsySP9hp67uEbv14iEwi8",
  "key35": "uPfaTTnT5P2wjZ6LtUCTxAtMiiytjBTAYpjzRypNTEg1Esm8E8BnicXtbuB2iCwsDwVfEas2TxwqaEwxWnk17DN",
  "key36": "hCGGeXEMxFdRt6zZX4ivRhBBkqwdhWgk5tqrneifqbQjojn7KDX6vyzYQ3kWZZhLeJ2G4tY4JVrdco54YTZjHMe",
  "key37": "4GDkFVcvmiQWfHFxYGD8JCBkebsZe9FQb4zZxmTHnnzKRouYiLvkapRZ733erdgDRREpQYHbF4XqaEtzYvffzHrH",
  "key38": "4X55cANswMGnxsfC3GrLbcuqKyrhqrfMWeWywwTx4qRQeF5cVRyFFKpATA6dYY4E7k5UQoxYHSyeSwTD1ZNHy7j3",
  "key39": "3A8nc1LuE5aYv2UWUnKTNxpv2omFpAFGiQZnQcbcVSdgTavoK9vuGUCxTzoq1XuppPJEgJeTxJrWDa5QmBDUD6QF",
  "key40": "3b5nzCsutKKQxiYzVo5mhVGY3WXywBv35SK8QVtRUSoSuHj8bjM7AogDNrFF3uWecg1qF9rmjv9nnmhX88EZH6PP",
  "key41": "3fTkBn28KxzKZbtrGeu68k45cArASdBYgv63ViKja7frbnxQqdw3qDJ1jpjBNdmjtcrghbQkZqhPxWVznPcF7kAs",
  "key42": "3nVZaHEWHAoXJmaHLeTm8qZppMCUWXew56EJkeJFTmCzYi2m3M4JSxnV4ZfbTdrwbzKuYgfjE8qnEsvLvHoSoT5F"
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
