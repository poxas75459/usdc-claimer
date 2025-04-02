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
    "2Egsjpn27nTwpQgH15dPdg9tbiThmTVg34gF1S5QbeAaTndcod4fUaCn7mtD6VeGeypKwBpFhSxiXcsxi5Q1jYdn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JNy2oKro4SVK4DZvbRnfuzBPWPZ4XP4kcyhtMYoShFcU3D2tfw7nnwthN1Gbta9hXwSdbZbnCpJ6mfHpfKB8rAM",
  "key1": "2KnhAG1T7Ys5oEC5REfvCavFqmsqqVWjFaxJwELgGAoEoK5R7aq8dC3SFNmaGuuZiM5AW1wVFennti8UeaPoDTEu",
  "key2": "aQiwyJLdSUgMUgcp5tCt5piPjYonip8YXRAcT2k7yDpHxXGXpJjgLAGgf5Rm26W4kzZYNrhRxDdqzRYfkVHWmGn",
  "key3": "3MV3GQDx68EDdZsJAaW5axWaxTxsfTbwbuF84AhuKGLkxhFgX3AnT1NssFnR9RtfPzZBNr5PzMDpv5nvWPkzX5NK",
  "key4": "3KHtTtnHdnRLpXJvxTutmxH6sW2onCuH1i4eqfbzpo1LuU9TYoDcpfammhzpUmXRNbVvYRJsoni7B98pDwHQb7og",
  "key5": "2uLGfP18VaghB3GZSKVw6yKLoWSgEWNykJUKZJSufyrYSNXchUi1Y2F1JKjtNSqVbt4RhAFmjLxVf5v5bSMDucxb",
  "key6": "3nwokMVRAYPm6HUHF1byK1h3WG2GtcEfDMnbdJSwz5iWF6hYdDhpTRj6sSXjNsCeR2SSXwwpsLfSosCyUCW6coeM",
  "key7": "36UL439Xf88uQPvEiFJNaqh2nonrqm6gP1tr4SA1wrCiP755587hBcbAAisWRgu5hBDvem6zGqR6TZWDHttucNGG",
  "key8": "2HWnRNDXpQhKNfbLDtsEgdXDk3ggpULsWqScLBnZZbxZPqSV2sXLc7oY3a3AE3EyX7QvXmtUCGCHiL4fBndXhMCX",
  "key9": "5EAWB7ydbsXiCKEDcg31mn1ReJA9UrxinKpmGdR4Es7AXNpxENCM3dNQs6Fxs47kgfTp5TUmbVnGfsfY6YD3p5Pq",
  "key10": "KiXn76q2XRNR7ah16uHPZoVziPVsQbzQhYaE1SjpyGfFQzeFvPALEeYgNz9wdPJdtXLYKSs8xLMTc8UFJfZ89JD",
  "key11": "3XgXymFuHcHYaoLs3UXy2bio7iBmZQDbwiq7F18iGGzw9a4e7z8oBT4PTAiA8NKdA4PcNqKzqKLwBEuZGGcYrxr5",
  "key12": "2wQ6eCJQhWiJc4jg1jnrhjiJXgKW5eDawU6tdybcCUcQZ1HvJbizMPrp4ZimfCHidi6WLu8ZbpUTUFH3GRtE64h9",
  "key13": "2EiDsTWHFqREg43P5kjw5HihNFxb5jH28kaRZGwZCgHDGvXaSgG6Q5ssN3jpWLwcSS744DN2UTcgCZ5XJpZPuy9u",
  "key14": "2adrd5GWzgvroUVjzRLbBae179k2GkJFjCZz24UJGVkxH2HUeniUR4sGYK2uW7xWuMnJrU8Yv5nTGkTqTVkySHhX",
  "key15": "62JU6tEVh9qsTDbgWjwB7LMGdf6GhaGqR5NZGCQMLPELSKN86PpTrWyuxuZofUjCiAR2VtUqJZmjCdZacYMMcQg1",
  "key16": "62rCxfy6rNbkS4kYsKoVY2jo3jP5C9WWBN9Gjo9U8RgukEr4bxxRB27K83wVSNWuR4R787Uu5uWLiKB6BZ6hx1bh",
  "key17": "2NX6Vv2wpUSXU8VZZeemkX6pUhbskxmonrxgeARpjmFwJhK877MRyZJ5APUC4EeD2krAFx8Cj5R8MtyQnPpc8czG",
  "key18": "5uXMztqoS1GaY3gbwms2HjifN3vs64jTzU9R6yMp3qpnAMjUUWJ9AFp2EBqnySfgVHkTyisfdq1i58WpFDZr6Mts",
  "key19": "NC8VvGk8umNhnDQRLSVgCU7mEp3npJ9CWt9RtE94RPiaoSA2WZGtrjbmKAzF3KKr8KPhpFbk3KcM52LoEYy5JL2",
  "key20": "3sBPfogdJPRrJ465tVA3QxxkDtywVwCM4E7vQCXMAoN3rX66s2CRwgQt4YNLgEZKmVAtX3Ame7pFZrB9UqdnjEKD",
  "key21": "XoRHcXZXibHRz5xfyWreoLWXFqqUBQEXNh8PWfjoDtSGNHZp8pmvECPVELfPaeE7tDW9a1Bkagn6amGP5GAR712",
  "key22": "5ft1vkAz7iU6jCFt2oesZ4iussTmyGtBh7RBU2MYQzXZkvNCe9cSrqMuVLwCmFcwoCPy42fkZGVLK33FEhftcqL2",
  "key23": "41hqptKgXZi56VpxXaNaZcx9D7tk9yfQSAxXys99ynEv97xV91Skf8cd9T6hgTPENYwp9bzjW677ztpmCucdWyFi",
  "key24": "26LCcPkvPpFKdMkXM48iU9iiBE2YCZxYaVdgtdLoPBAdeBDt3ZhEREc8uiFqwtYz6xEjVPQQNNjEHSvhxgXJ8Am6",
  "key25": "bPeYkgsSUCr4kH88BeV1FsoKTj9LXnxiyCx8V4AUXYVftvTK3TsFxWjpaUADM9xWzFjCLcGMBk3xn4GmqnDMNcL",
  "key26": "369QhQ5okbJUVxbsLGiMYVY8MsMLAFQisJHGNCRisPJy7QWw8dVLSxh8Q6MVonsmKNfry8Vn7oojJicpHooLVn56",
  "key27": "3gruDcMACPaWbqciXgWa6PBdaSfSvVZXKvrdW1rPxrkxkeCaFQBzajzNbNoz9U8HbLB4xDR1e2ryFrMVVaBYR8si",
  "key28": "5gUcoBwVaD5voxvtHr8EuaPbm9hx5Edt3qTJteqvSLQ28gcn9oUWy9ujHt49mwFmPwZRb84uti5D84XXytd8xVBd",
  "key29": "4qLPCWqBHa18U9e6KbEpeXVc4JSZYFPtZ1xK1xLLoaXYycaeASys8rgvULgpfgozw4ZDTYVn6u7RMZEe6qcr9skh",
  "key30": "4ViRgjQ8CBohCeU1fZeV2LBctgRnDAd1EZLE5iKhMf9kj4jLxSADFdWaZGtG9muJ8DnhBLHbqenVw7eRKPSFMS7n",
  "key31": "2HPm8MvW9PUANuNsi5WaSHnAAV3rHdddWjU5Sa99CP3PfKCq82Gb258D4K3boV5uZMhV5oGyPm17UVqv2M16xjPG",
  "key32": "2qXUauqQcwNnQzq8cqeaSj3qD8BcQdSwkfoBAqmeUU2pGqLvmJNzKeRRq7nJN51G4rbS89xpVY7xGzc6w8Yqzih1",
  "key33": "3Er2DPeo83mB5rnVrwKAcXec6ZJFdUzMHTi4Q3WJnBgqqUieU72jnWURsM82ZBbpo4WJ46cP3AKymM2TXQw7u9PE",
  "key34": "5NvF5n6qE9msLekQAKrCtTxxo5N6yw9YR86zmyv5WT8nihuBYWBuZihZu6wRLRoLheurTFF6FmNFePYpi98FNd6",
  "key35": "4S43UZRUPG3rE9mU8cBCJBTgYUP6eY6F4jfQrBwDtw3SgcpwC4tXTpMhTKRZxy6gwkaoLY5eS2MyUF77WbD9z9gL",
  "key36": "3CtKZWZuDbCjREJfsdUJvnSd16omjZUmU5uCdEysE6qE5WueqoeSUFG3Rjh4iWzCbPPzCcq8NrSWt9jXorjQEm25",
  "key37": "MNXjQ5wAWz4GX6B4fHANx9DcNjPfa4XoDNPDkBZ9exbQ7f4kZbrVcAmpNj9NV6etDUM33gKCdaGTZ3dBC2B9cvZ",
  "key38": "EhAQcBNSZGUSfw8Ur4bv4SmqGipajzsXB4AvBKV4rrGA3v6fEXDahgPaRtDpNuTL7jDSvQynj8YRZqqHbBbjrxH",
  "key39": "u3GiSpZziULXbu2ajkg5TaeufJHmCW2yiemzLsMuA8PyqT3rx9DcbXfsoRne2d1VopeYNtCRFAgggd6jPoo9beA",
  "key40": "YEmDoxacFU735ajb9xy6RTrKrB2xKRtcVYSwuwmEgAVuwTaAcKECf9RLWkbvuLgn2kpyWSTKe9d7odnLfNmQ38b",
  "key41": "3rzc6h3Er2YqgqDWh2H9vmkSiKCVuCb6D4zyqERbxHnKNKXfewC4Kc2K7Vw4jZGAq7nPDGZYVivsnKsSXAMTtTzt",
  "key42": "3Mn4n9sGkWK2WTUJpboxWBq2ckx5ySz2cvvWX9iNubWLzQZVkkw7U3vWcQq9ExkooimF6PepqGte74AXoPUj88JB",
  "key43": "4jaPKygqqJArMb3KFWupEwEtqxoRYgfdumav1PLSV98gAU32vzsEUdmU73owjSvKvKXcuZcZhWRwZq9xR9dap3p1"
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
