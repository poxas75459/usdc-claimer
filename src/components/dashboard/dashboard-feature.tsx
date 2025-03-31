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
    "23DTyKUtCZqEbfgkfigUbQozCEoPTxJ3RN17V4ZQ9YECUZHiMxFZVSQ7inaR5VojCyGUg3XFu72WwyMQZnbwu3Ly"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bUmbv1fpEAw5Tq25b9UvjRY6trhPeNydqfmG4hNP4iyZMt4tbNCqUkDE9iPWL2VDss38ddaL3BcxnsMgRt39s9",
  "key1": "34hKq9vw683TSmdC6NgADiTHSZXSNjudYJVQzYtPFxuhNgFsdaJKYmXdMLgh7mZP6X8PfY4mvJqNzkafEiViaR4v",
  "key2": "2h2muocMBeckVyQ7fc7bD5Y5pS93UBpSucSYDkToQPzQqQ66UVHWMt7J5eD1C41N5GRbe7KzDW2JJ3KMbBcCmrax",
  "key3": "5aevSPS8MPKVMkpne9bJyPXAE2ckJXfqyFf4rbga4qGJiu3XGD6huGR1rPBTq3TxojNDjRKMGmNyvWoCEgNv2kxK",
  "key4": "2DHmV8cFspN34EPy2oqeE5es2HW55eJa7cBbcL83pzbdqR4xAP71cxUKV5xUXoSh2FUzidVxJb4wffkfQYmzMPXS",
  "key5": "3wipdDLJ6khpitvQwJ4m97gUFDswdtsy2sB6f1EPFDkEnbkECQy83g78YbbestHZM4QfPqK1bYKgUMr7gfgkzD4U",
  "key6": "iPr5QiTzgDHqdXLeYKJ4RpiMSTieGM2rFw68oeuhQox17KNfrrN5NEaZQFzUvdV5LNwm4SxMFvSp4W6ggCmZUeA",
  "key7": "33MBTQ3Fw47n81fNrq7rRSoK2DiXTsCzKkeay18ncnmEJnkzp5cWUnuRegyRywNFiJFuf9KufPgagVHdKGGYyvEB",
  "key8": "5mdb8dzqZ2iWcDrQ3nd1C7iCLpg8nwQSYAtnpERNFpaWLHRN4f81fUx1Fy71RHvJY9cLRdEm8bgkrfrkBGgmKhMn",
  "key9": "2ZFMcV8SB4Njt5MjqxUvdsSJzUDU9FYQnE3pdFDEY1pYvpypJoUidQ3BUuncJAKKy6rndCW81mXfugznbdBZpjbu",
  "key10": "567xRUH7YHHhAj4AP3XH1Aj2GZnJb2BdT24QKKcu7qWqSSEA4ne6SArUkWydiJi4u8yNWFLw7a5UikLEipWGu774",
  "key11": "26WEyFJyuxPTpEyn6XF4Gt7jYQ6m4zLHnpVq8xg3juvH7YhSBD4pvF8qy59EunpJpSvKUcEaeNPrfTLERonau1WP",
  "key12": "3rnfepJPthaxzKtaY8bbLmjtsFPJkZH49LksoDx766CvnyA7gACB6qKbs8Kv1vbmxNTVktB5YobR8e1kG11DYCdV",
  "key13": "2qBZr21va3EiszPUKeKBLxzw2tS5xmwRMv5wYYr8eNWH1HjKotZBWeq9LxCpzRg1TLtoVvGS13Nzo8ikSp31v4ea",
  "key14": "4XwuJBudhQToqVacUosMs654ahuct6cmaxftaLQWYWsW72J5XwAxykSj8VBr7WnESzPAPnX87qZKzTYvRNaLimcf",
  "key15": "4SitSgeE156MPFmy8be4NHmrxRAE2qNg3xGCkneGsj4xEApsxoScsKyYH159vhe8F2aGqv4G3S1Nk6nbZDPoLEfh",
  "key16": "WsEheXbRVTibzaviXPscWvUUB8Vnhhs3LnES9EbF4uw1ZmJ9hjzFnrt1EFLum8BNLWUFB6AtLG7AaD23ADdAkze",
  "key17": "njLbBoFytt3BRNVo5ebfbgKpDRaQgrVc36eCM3FS72k46YinoxghESj5Cu6zenc26zLr78sE76TPCaYqEcSNXoj",
  "key18": "36WxtXfeRubqucqDxNqfbrUjhYjS6MUHSGodfy3tkRiMSQGCR8yy221EmYcxREcsTcUnP5kgBb3zdKCtJpDhhh4r",
  "key19": "BS7VVrDj5wbWqYueahUE4J37NhZWSqHjUruWFnXorgRrDPHTzt88pcctUydQypuDM8gcZZ1Xf9dGddpbdgyqaKa",
  "key20": "3F887635bi8NwDMd3rUAVDvg2gZocbVCdVxGFW5vYkEHjh7cDCGpeAqfsSguGgqnGBDSVHd65hC6tVTxUS8fLHTw",
  "key21": "3tupVjWP5eo52bE9w8mGvPzcn8gpEBoUvAqPWiBuv1bxxkBsCwjFLh6JTdKZi9PvZ8XynuDxKrb5nbVHj7ezt6u3",
  "key22": "2WCLYnF32mouBo6cEYifauTiqLfXxnnsTje7c1JfzWfMMxppcQWJeaKKBDJTf93gwxVewDqbjR61DNbdT123j1GV",
  "key23": "3NkVAmq6Q5zgxaxmSf172riihrRDEZgjwY28gXyzK4yD3U7KUa6sFseKsBL5KfiatqpokwZ84Zj2mGzgBfEnRioi",
  "key24": "qcHGhTop69pkhjKk7nCpPEtLaQM1X5m4L7V5A9g7M8EEZ7TU7Qi51sU4GEfnZvzjyehd7mRnB5kXqpF15kARh6c",
  "key25": "3Qim9ameR8onWQwfkhxa48fqicFWQP7hjz6htrYsJ9QMi1SqjvYs5gL3rQ2dCZqFnoazx925XjxX8JC5MLv7f1Kk",
  "key26": "4uqgFUEusZDHbVAqcaR5ryi2FJhUp6mFYuCNYB5eSS8deqcsPNcTa2tMwdM1fDdDzTKMDMaGrhajTz68ggiPgB69",
  "key27": "5ZQRXrMaqnLWX6c28JoXAN15VRvMxy5gY342pKeZakuWcNFF96vmv4nGaVT5i4UYCLpnvP3DxsU4Aun9xMTas5wF",
  "key28": "37Kavtgh8fXVczzSoqVQLfW2649Ec3udigsoJ6YrFgpduaS27WWTFWwtAV5JpVoEJhDk9Rm1XfD4bGR4hegBaJQH",
  "key29": "5Xf769n31nzWTuU5occfFkF14ujXzjp4nnNdhFfGTMM22TbLANEpeQsuR78WBQ5icdEC4gTHsPpqXjiyfGE9im4A",
  "key30": "5Gn2kbZ6irN4Wo5vNH74z4oHLcJYjxAFyXPMDqj8DJ5FGmwFMyqScHmcsg3HG59H8eiCJH8f6K3kq5a8cBjz3cc4",
  "key31": "yUWt94aAdyiYyow9bryszTkPBHpUDw7bY1ZJutqk6rzy357w9vh74scLdSSfAPw9wFwFDd1XAiposfiCT7QwpPo",
  "key32": "2jKFcF6QU691ZNqiBewkamNz7eGEz2ez9fq8ferZCisziK9P6t9oiypvnZL1U3Xn5ECZehLqKuJDTXoEMBMjdjh5",
  "key33": "5jtxz9hri42qKmNcK9rFwDdTQE6WLsoF2BDxp67giCvck9jW1myGrBUHC7W25TMvbpqriZp3MyM9ujXzy3dRzsPY",
  "key34": "3T9FTBUPbfCopTG9gys8WBn6KkqaFaKmbUgm6pJEgedxgfp3Tgp23eSAs2g6LMbt3HwaC1qcQY6a9ZKd1isJaVmQ",
  "key35": "4GgdQxVgciU236F4UKUnRweQd5EX285XZzMoTyYWeP7wnPhZso4wtZxC4FYjKEitrQTqCnSrfiapJijM8SrNu5YV",
  "key36": "pe7ZWC92GEAjSaQbzHyW49Kbca7m2JxsV1xaN2CxCJ78toPC14nvRL4ypySWpNTi3eKgirnMDVWSdJ1vdQQpB7T",
  "key37": "2TjFMHgdYyRt5Qsc4VmCM1VDxSAmZSTy5bmTfsrAJADmSzCKhxFfHaRUGv68d88nybAN6C483BQvo8psqBQxt2DA",
  "key38": "4JwUazvf9Z5Cw6jQbKEezFtww3YkHtsUgEopykyPvjmCnFAQFdkXcajRWpKfAdBFR9Pk4nNuxHy9vWv9Z3W6BtMw",
  "key39": "k8VmP7g8ioQ48GaNGrCH1wdPc1dWPstzSuxdanPKba99YaQkksj6LTBz5QkMGnQZabMqYdf2Fm5WbXuGKzw3bBv",
  "key40": "5TKR18BuGmxaCRwro4DCjcYeAMQbdxYYhT4KQoqchXdiWNZZ1sueosnjwQN38pHiLThnAWhCmptAMgkY1Lzm8pR4",
  "key41": "2ZJZeZ4xXmCpzF34H2Kh73aQ7uyfM6yArUxtJmdoK9XdC19ihhE8FUSP11THDXJPm7qnqTZCEBeLLJFmPrKSqzS7",
  "key42": "dY2CSSDB9yz4p59Hresji4fJopwwGaRM9X5yVP7fiwyRkB7rf9Mx95A64s7rdcTARZ2Bt7q99Zj45P5XprTkfkU",
  "key43": "2t64XEf4SfnB2xbnKFP4tsqwuyHhCgeqDoeire7wyv2cJCkZanoFA1fK5mCBSGJDKFQ3vMb72jxwyQqgXmBbXB1e",
  "key44": "3vaD51B6Kivrx35VKwz8Sgq8LSn2frsRFtrB1NkY5TrYM9SduFcobeYeZq7zZF1PF2SAcHSEQSoknaSE2avZLUSf"
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
