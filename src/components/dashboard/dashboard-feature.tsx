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
    "212YiHvQnFtvxwEyxcnufeK2ks3zSr3pJKvL2hr8zv39KGWqLhj9JnqPc6S49W8es3mHwLi3VGfb4v7kLGuN33J1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vcZSQSAksFmcFtdGZuCW6dD6Rt7kbgPHr1EuC7qtqEkfJJyBzWPW4cdAEtvNhF3tzveGTrXHWRFvZfu5BCJMiVr",
  "key1": "3cvDgU4FmXKoADC8YN4hcpTJq45L3SGvHBFciKw4xvU7uUArHzw7sXd2Yo5ZciKsdd6bHYYo6nwdga7ZG5DJXLSs",
  "key2": "2Et1ojcjy4M3LHUi7uD4X6HbgQco3KFqsd3JBBwAeTrwDNLmhkexMXdf3rSYRbAFsETz6Qy1WZ5iDuja7wCziEaY",
  "key3": "61vPmqM1e63vEZ9odpRDbSNvH7nt1Bs9znGZ4RCqoSn9b8pYa3di4KxzeveVJ9MSPMr7TEWd1GTXXWrYttEUBjPH",
  "key4": "pghdSbKXLZXYnYxuwc7pcUKVLQcMys3nWEuX6ZiPgiECiMvQVsQ83uysChswVhR7dXMy8rKmxCMmKgj6eSktUsp",
  "key5": "o6gNohsf7XTPJYspZv9LK4DVk6zQb3moU4aUBtdjgrYyCKgqBU5qQVRooGSWRW78KXi8SqrgK9GMCnQP4qVZ9gg",
  "key6": "5orkYTACRwgHysZyQXU45Mj1bECifdrKTvaAQrFpqqFRZ2ji46qc1kTN7sGxAmymy4ThRu9ipaEpmMsCEVfKjQhW",
  "key7": "5kp43q82FArRekD7XBTh93jCo1EWVjJrTvhqyTwfRYyCPEG59we43pmu3phpwPGBvxjCZmLYZ3NmRSnVPBsdGTij",
  "key8": "5NqyJXfYHfKhg5an7zQpTwqexTtb9U5gRstKmMbHV2KsMBF6mbywDKvZXxbGudrekTFM3NBxXjmVxFC7pWoBSWGB",
  "key9": "31N2rPd2HLkQekAjnTcJWyC9buThMEKpVYeZQ1H147rT9VmN9FnFEX9VtgQjkd2oNaKnupqtXKcuni4QfrH2yk4N",
  "key10": "2zCnSmCQLydjaeP4J6ar8RqBUxoA8J32DXLqoUYudC6HdcsCQSUqKykVKjPWpRYYVi7mF1zMgjCoNbNt9kue9qB3",
  "key11": "3MNTccAFTbea4kJd3Y5pLMkkAGuUJK4UQHCoVV2giKZKXkeuRfuigHNS5LoTR8DRMLQ6beYkHR8jNnC2osiNX7F9",
  "key12": "4GZSXCxzR9CSwS5PEucGLRUjm1tM6g5QXzbufcKWdUJZNJWgFpyBR65FqUws9p8zQcfYKPZBb8miX8SWVQaLLHtP",
  "key13": "4C9iLTV5uW5YfGqgZQYaMN4MQGG1jCK2Zc9Yn8rrwsMvHqBFobGBzSmhqHouLydotfscrH6K31TE19vUcjSRomEd",
  "key14": "5X8rJ3W671soBwZYznVjBJp6zNNzfUGf8jD8EEcNkm7qiUAxQdz43n4i8sTxAy2iMs2M6JgF2hy3373nz8FkTHE2",
  "key15": "2JfnjT49TzWLXaLi42h43sFbpQg6A3d2MEg9dgGsCZ2DQxr87QjThmSuE9HCZQeLW3FjeyM2KqjNBv3m67qH6HBB",
  "key16": "45uSff4TezpWCajuDRnT4d7tawYR68ksrpkJyJeoaDZpn74dMoJ4aWDZJpfcd2qgNxvL2T9g4ttNp5RTxrDJfVrA",
  "key17": "aeeBfPn6F2DQUoqia2dDL4SPsCTGC7i3VtQwxNoa6wvTqD4fSikzXxQ88ZHWLiL7LCYXm7f7neJ7Hc69NvEx8y6",
  "key18": "4njMgoJNNmFDpFn8wsZRiXJWBArCFWhafsgMAmdcpREaU36SRkrk6uWL563VbcAWSGxZxAjUus893zt3qrRcXxWZ",
  "key19": "24gJ95Ypfi2U1PXXEBVxETFg7kuQU4cPdYJFJyF2hK2dbGXFaiRgzSNXb6JPvhWRw7zCqx8u5sZNwhDr8EZKyPdJ",
  "key20": "21zPkYTJZA5R5v2UNRwY78vKTmaQo4Gyyp8TJKPh9S3gvQHUivzSWE1JXgPknbapjuL3CVEfpExeV5UodQvnRj79",
  "key21": "Z6kH9GGMqfCVs6aQ6uuiPE8YPh3YnBQyZ5hWRi94aCFRhGb6SEtES2buLScuwbuPQUc2g6TGES4gpicaYXUmbqt",
  "key22": "3BwEv8QNoJdLKtfcY9WiBpi8rNdYqzX15XNLJjhNgu2cbHTSTm9vcUkkjxk4B9ik43H6JHVcZ4nMAXDjofVtPibt",
  "key23": "2BpoPAGfYNF3Puh4Dc6saVTE4GHcod6DQ4wdaESQRZ1e7bU4hyjNvoaAVoVGKRga2Xp8NnFdXbQ65XZX6Nut6b3X",
  "key24": "rSyy3tJY3QUvmGJUfBB535QRLeAkyHBkGBteFRMM28gAZ1dTAd5hXhbpXcFs3pbejbq3zsKkWnHpXLrsDydRQAh",
  "key25": "3M7PWmL9eAhxv73cHuo4xFcy9UVgZi4SocQKAokHDXUPQK9ijxsUNshzs1JShp4cwroQuEko5fUihNnscpxNj8xL",
  "key26": "viRUyGQvMaHLFKHpUQZgznDP2UUEP9aH7xwgsvvCa72gSvgX14WKseQrCGXRSxmhJycWudD79t9mAyuue7WHhEi",
  "key27": "43xeSvEHfvxE15eRpovmvBEfCkm59uaNFfRXZTD9b3k6sHepgRDGgjuAcM8TFRTUR57vH6eufbVTkHUT3L5zhvpz",
  "key28": "2ToFNx4SqDdDaNTkLPfzhPG7KKCfDcVGbF1ZUgK92eUVMQtsVfh9AecN836xvqh5PXmCRT9FVuNncFRZWr95vCo5",
  "key29": "3z6e5q328afa5wLTNPhXA3d62sY83oHJQafQSuiUhydQaFPSuBUW9EPqHJtADMJSbvvMbCnETENdhrR85T5xvF9Z",
  "key30": "3FipqSKvueCUV3qKye1QpuYCk4xPMLdkShQAripAzBaniNqWBJ4aeBMVTZmn5Xakx9mrTDLgG1uhQstNYncWMYhV",
  "key31": "2bLZjaPsPcWYdHS56eTWh5CPdoD1LMwVgUDvNAezqxSqkaY1LV6wKMtLwB45MRQV9kL3npGgKaSJEuSFEFpqfTks",
  "key32": "2CVPaJvr1SHKHHENFh1EaSzD4trg7eyWVZJnwmfAJ7uxVG1DvNMCrwMebChzpocpji9X2zRyrYyDoiX1ahSAMTb8",
  "key33": "5iZNzWPhrKcKpenVSQuMXdG642XX5sMXiotdrzzQCtzbvY57GCVLwTyHEjyUFkYMEKAyVnpPGd1ASEQeXg1j28B4",
  "key34": "7PJMN5k7Djgop5EjZJA1GVJfXSmfQuKBqMQUNsJU1aFeqjBWrwyCZjJ59nU91y3K9186F9kZpBLeVKYmBxWf1e3",
  "key35": "2jqgXgsjHhodwSvZBWAzD2vdF9qNq19Sks7K1RgUXLoB9Bp9kGKJZdUrbUHPHA4v4WS14QiHzfYoNpT3fWpp7Y8r",
  "key36": "5e4UBEMX7JzvrmarXeQY1mCBwYUhwo1g9bm3FC5Tqdz1iSgnZTBNU3TjjM7NcMoc1k3EcxrooBndbVPNnkHyyzLQ",
  "key37": "3v51q3mEq3oRcc52BfCKRcyKtJS9oCnp4s1re9hv1DrNCFkKdVWHxoPYh3GBFA4WR73kDKjoXPxvUebEKXVweLio",
  "key38": "5t3uTju1RDcuRKahZ35PhbASbkHvavZfTjPDWfN46hERu4dyARDWCS2hm8A5MVLhZM2JPGTYb1igzZKcY2wsvmtZ",
  "key39": "3JUjbmbFkmWuoS7wsmuWctSnPPYW3g9AsG9Rqw9nSMQXEEyUwdEeL8BTYQfUNchs1SCM8QECv5W4u6o91hPEiqhT",
  "key40": "2VFCPTZSJ3dBtFdp2fBXARzCSVLqsXmmPvzhWpwPEL3RTEA5nXa6b5dv67qmueB4irtvFopzYm7ECYToNpkCJDN3",
  "key41": "2nfhdrERb34sqijorxNua73XRA9WJ6Y5ZeKa4Ke4mnEMx5M1fcomG8MMg6RtX4gYvRH5eXW48Vt7cTij9yWbaeRd",
  "key42": "2FFw9xSbM49awi52ZVRj6jAD9hanakoEHHxry9JVZ3VoZXQncaEiLxEADQZt4EZNvyUcpbZb5YgNBM7ELMxLb9M1",
  "key43": "3Ewvui8U4iWRsEtMWW1dCjSCk7no2aCrigLfrEjjheUp9WdFmzPTyNuS7swnCqQsZ14tvFkgswkjfjkmSofZSw83",
  "key44": "55sUQmE9SEBnf4vQkF7wwYrv714NNrMn879TjNRFfy3fD5BNbuMCEbkJivTdMfzvCLWtFFqbTofV73oRg3CTCgyf",
  "key45": "3e1n2h9LUfUeBRur8vwKt2ZpTvsAgDcC1BkNzc2aercac9girK4vtmt9w8VmazezUezCrjGkM6Qdo8Q43VsKd9hT",
  "key46": "5qxqn2x5wAtaPaR3Se9T1JvsNTLendKvtTsCQZpm6c15eurDt6BFb3ZzJJmtnjSbb7A9ZmmwNdJnyfGtczvj46Zg",
  "key47": "41GrvPmH5tuU1dWtr4Ngf3BG1UfUUFxNNBKqS1te3nFqCeN3GqucsN5jBULrjwoBkzoG6iFhr3scNqme6v4rHWmX",
  "key48": "2pGPWaraNTCjGVUWn3pcViNBjRDHU7mqwFtaBV4NvyADoAsLLkr5sXVVipPuZgxNU4LdZsdDjiY636UkSPTmDKsp"
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
