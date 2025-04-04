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
    "4u47f72XHpWhJACHM9gP5rLwCvkHYwtHFD9Cf5sGFEHr3skwVX9Wsknip4MGrqDU6MxbTgFsyUDmBEZe8M7RhQJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hpt9AvgjJp82tcPGh8fXhhyn1aoRLyE1zBeiWi23FfmSiQQKorKYyNa2257nrWH68eNcjA7Bj71P42GjupHR69t",
  "key1": "2pVumt3hGkidVkh7wUU6dQcFvh66eVHcvVJKsmp8id1nzRELdpt4Hkq2GkXJgDVs2p5wZyTyRppkLDqxhkaD3euB",
  "key2": "4584pDjEUtBKfRV4DvXWZYwWKUoEHw1WB4wQXqioXJKUPZFVVLDLCY9K4DHkS5QqhHSh18ggDg7wfnHNSDwsCG8n",
  "key3": "2drFQGEAMHTEeKWx2UFkdFN24LezR8tz1X4nfVS2PeL2xJJxphMQ8jFxJs8iKtY5rTxwE5nZ5oz1N3fCATQ2qXYJ",
  "key4": "3Bb5pWEkHYSMpaKM3kupRGrueTcTNc7vVD6LihZeW3cyeZ7A8T2MwjwoJmAxDhuAkq3zzfZJ8nCHEayswfA62LnC",
  "key5": "J5j6mxoVuz1wN1xwCdVpnvDRDmxswmgmiSd5h7C9cN9T76cs7GrZpRnkAwZJ1BAFFyAVf9zqcCpRGewTHFMgPja",
  "key6": "3dDf9HvdybyUP7A977zCWcKFBhk1QZA9CH1dk2J6138bKeHaUNZquvtXo9GoU8TnjMjPcVkkFHUBSm34N7DWMz3N",
  "key7": "5tq8mX5ANr4kfmeD4ohe6ZsqTXV9s3eoG2Qsc6tYJNs3RXSGp5sWEZT68D3bZSYqjDeCPMpxmm9TdeP2dytTnBL6",
  "key8": "47pJAZEBYuyokAAspzgAai9THTHUu5hDdED8gyYDyJqEYxDYguU4bR9WKWsxJ5mtpqjeaum7VBe2hcJQUtEsFTWj",
  "key9": "2GLvkVC4DiZm6j5GfpACpCVzSHz8Ng2dycARyJZ6sJKZ8itiQ6fX4EDn5jXqsSjgYG5sKbL6kX4PoY6gRgY8LCzE",
  "key10": "3iHbSv3xscbUVhNRyi3kFauCNwyfHTo5Uex2a5wsdcgse1bT2GEq8w6K7FByNms1MVLxefp4mFXBoNFtLHXzZb8t",
  "key11": "49GwDMoTzt64Nnrd3PrB46tEUwhy2AvMqFGqXNwJ9S1qKEqyhYr1KxqZuX8E5o824rtZ1Bj568Kmphiggaem3Rej",
  "key12": "AE7wwt3EvJbSxtKGkySwAwJRR6nJdCPKE6aZniqt3JqJRDZWuDFgtu63PueXyQpyv6KgZLRuBvfgiBdra9FEdZh",
  "key13": "4EfvFhFEmTQwymx2LKott2ZF2L5xfr77TXBb4GUwCJjRXHuj9n1xb2cDVN6zthJVaGGJWR7XWwnZh8882BXkqHU6",
  "key14": "GQdxYtSZM5Vu21erJW6cVvzMeTF1nVkKCNtycKjtG9S1suwiWP5cn5LuS19hy4dzmPoSwYv9uNy6whg6DuhrVfu",
  "key15": "5TwaPHwCCbx7rqhvdcdMf4tMm3MwPchND4Pt7xWmRbAVXBWe2FxodHEQpEi8bve4fxAz5vXLsYc4NqQdnp452SQQ",
  "key16": "5M4wiPPSjDbEcCFqYAKpfCKeBxtg33RHkcLJuSHG7ZjqJywZsC2GkoQhasDie9Uc3juPZN54i4A3iZzF7NVKLJ12",
  "key17": "5xM3Th5zgcEQxJBbih26AUCVHAPnCMWuDVrsCYFevq9eJ9etWyH84i5tUitZWwragb3qZt7tEceRLzvjEaexew9k",
  "key18": "2juysJPvuYS33hE52qrrmsvBh7wGdmaS6JeJ6qof4Synyr5SDbseJnmhKQpaMGibvX9EeQYJvoW3bBc1CuSZ4Tn3",
  "key19": "PW9WRve4M68KNLBWHhR9U7j46Hg8kyBTX2d1omBm6HKb9NQzyrXAvTFqzm5QssV68eRrYX3NKtv3Cxz7MjVwrE2",
  "key20": "4vrhiBN1jRmXJ2wESQPwSjS1S4vcKXkosBWNReRdSxc58qAdQcGmeRt2HkxuxmpR2nMgcBSGQVQDbR8ahibgsAhN",
  "key21": "aqn7rpcJqLV2b2FdahJKrLKV54373McHsSVRxZr6ZLQVwHXAM42H7UaoDrodefqPUwbTegbB2seVEpYiJcCtByz",
  "key22": "3YnhammrJuTEWRLUHCLGP3YW8pRNVHVd241PxgzPUSDbxgf2bEqgV2BrNw4ocBNtjKW8oe9JehaEemb9sLLMLH47",
  "key23": "4whveDLCihbsUGsyDDeZjAvQoDspge3KPYDsfky9rgTBvAhvpqK41dWQcrSghxmsiAfytio1piBVBHLFJS19wQev",
  "key24": "3d3ugPh6ubGsS7o2oML1UCFJWt9HfmVihs23E3beFhadwQESJmgUW3dR6N7hKSQeRyorGDx9vcbjVtsoB36zTsqh",
  "key25": "L8HB48FhYXmggJkYFTkB3wPhMWfkBCoP4TxuWd1abKjuFaZvojHvmv5yKHJhnG2P6sAF1BbaDQZUby6TN6FeyXR",
  "key26": "2DGx8FajZbxhAgUWVzRaxMNMJo2nRoymfjFz99eej13FkSY6atYn3QVj8a3kqs1UokqA7SS4M2SVjmrbBYiLgWfD",
  "key27": "5BSpZwSQLw1sNoxYY4MxMn6GScRrqaDkrVMKppwP96epbeWskxofDwJGCG2rEwVmRDKXg4RTncP6XSydDyrCogAM",
  "key28": "4hTQNxJsfqPbEbDfP3XW4njG7cnTWFEvnYE3TTMT8bPiCRpqGwezi6oeRvNshmRsAEN3HcXXP8EtroiK8Wu6KnZ6",
  "key29": "fDD4NNZvqdehZ5dim7uWNjDVmkjRrfz3NXLbMdXthXRnc4w5Ua4TicjzKKFnMKmsm5Mjg23yZRSqrp72yTGyThu",
  "key30": "58fsq2NroRSrFr1jSkQ97hY8VyRCK58xCWnX5iFDCe6Axq3WeB4jF7Fsm3tXCdmjcSD4aDuSy5pQk2DrcP2GYjQU",
  "key31": "2XqK7Nc73P5k1znXup1fgwjPtoAXkGkxZRy8BqMrBppGnpDXzg2JU6gse86eydby2VZArrwyqcJCtXNu56PpYS3s",
  "key32": "5S9wiZVv5BvBJKxAuQUtazy5Fnj9Dz54jXc5tifeWtyNms66sCVGX3Ggd7D5TB4xAMekVCQsnETZQxoecyYp1ogu",
  "key33": "36DsGZMeFH9CTU3Zt7S4hSe6D2ExS4ByHQKeBDYkHKKk3vjyUURhsgF8CoRptbu77ekG4dGqdQ9AWGU6uJzsGUPV",
  "key34": "5KPfNjibYgSUqMqt3Guzhp3erxynt5nSfGvdjeXd5Knf5LCWq33aWSwtvyedJqARSfoXda79M2zbHDddEFzihZs9",
  "key35": "3SPhkH9zCJzyxTn7PaXu6e9aYF1a7qDTXuXFDHUuqrmsKSDgQLKHM8C2fJYr5gPMmNST74ANqJoRwbQrA1cf2opf",
  "key36": "bLcpFQhjDjE4ZRzKos48H5zCAyB6zmLxdQpPx5cVh2kMVYhHHK27j7xjvn9EPUDLZp8bQQuCFEDEdkiijxbXQbD",
  "key37": "MUce4XP3MJHEZvaBtHP1k7E1T15vdnddtELg5ncnAekDoc93y9P6LM4q2nXUAGZnZzdhtuWBtLddmXzyTd74YCY",
  "key38": "66sXWPzKgGWjG58guFdDJaHALaj6t9fDtN54cEtZYbUKFur4xmhGTa4LxFSPoNKiBoHZy57raxFioTGyBthbe4rB",
  "key39": "5uuTtmMA9AmHncqiZy25bSCLhuYQ4mKnVcED5hCECu5uunkDp4MC4Mf18PohUk5FYvMYZTpbpmLTTH2Gaw9ws82i",
  "key40": "aPxS23mXyK8Aj9vudWvc9x2nFwVkbUM6BCcuq3L4wQ9fGrGLwdaL8mMBMpG9HPWpjJcvv8nxuvCZYLFJmNkoVvg",
  "key41": "3LyK8d4Z5CpwqeDQTkvFiSCFrNDWRPnrcBSiYrntyAxxMfZosJ5mBLL36zyCejxez398Naz4pKyhHYUDPtDrRFMj",
  "key42": "4Th6Wf9xnkeaKktYfna37ZHob83G42aHH4GGg7TQbZgsHM27yHL6mdXcQvbveDjEBrJJL3htV1x4gN9yu7gUi5ke",
  "key43": "5gsLoVBkwt84aT3NjgUN8SMqqEZjT3LnPRnitS7NQYk6r3RgsBS9fEDT3zSSLNajBnxRzbLtJoq1NYWbKwe9PsEw",
  "key44": "2ccQvU1qmAmdZsaLiv2cLJDysUyf7d15AS3kTypNeYCEwcbyjzXTFkoDfPcHcDDazA5ZHBbqzSPwAbmByBN7oc94",
  "key45": "2yaCJCFrmSEHE9kf7iabUn2vs7CA5fhxp5oGiSbHoPdzv8AjfU71vGoxx1dQUUb8koVxVXwfd9nCqUPq3rke1Z2Q",
  "key46": "4e76M1y6WQ7qjDHwwh8V1s8U1xmQ4fwcSsiHXHBp2iSSJLCcE2MEf1WQY87f4D9nMk2KCfkGRq5dCgtAgWmocbMZ",
  "key47": "bMh5vKber72ACC4wY4Ts35Us2vXU34H4d7CH4HDQ4H3rgSHqLNCtugkek7NLWJtp9HF624vrewGq7bSw7ZX3gTQ"
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
