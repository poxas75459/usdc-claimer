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
    "3NZCjkzBtckgf371shJ5yaBW3Ka5w3mg9XjW9nYMfvTdCRStvEBm6GuKPHrFMULTXwnHpbEaXG5FnRApC94PECiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ya5QHbz7Gtexkmu7eL2zevAuMpXBhZ4FkREhgWLWj3YDvV4vzE7QC5yGMWrPcSnWEyeamLSJ8M4CzYAgv7ZUNKu",
  "key1": "5DAZu1N4GALkQcvX5vXmq4SeTkV1m98i5iBKHLKapnt7wHNoKj6Ybtojz3Cu5kMLAymUWgASvyDhubDkMHYLPRGK",
  "key2": "E6yTjDE5y2U9thpTsviG3WpmZJb2KYZAGB5Miuor8esEvjvURyosh9hDN3b9FV35tTXJqfEeVtXPwd2SvB6eF5B",
  "key3": "2UWozwVk7uMLHSKr6EhUhWNAyQ5i6D1JzHS6cyTvuZA5FmLPafDhmTZCURbiyk37hgkz6wpirRcENpdPq2goc4sh",
  "key4": "NbUEB1mW15YEQfDj8ZRX7sBcN8QAiGKH8tpwQUkEYF6hPF1yH85QXsuszps3zUPUAsesZUMXJk3WAr578dK9Vat",
  "key5": "pnMabUZk5m3htqVy6zAXWEcT7qqgDzodmzohAXhFT5ZHjrsA4TCY6VwSUHiQBoLzpE14XejjU9mo89SDPaHUNJG",
  "key6": "25JHjViok4v1XX7dw7N5VckE1LCstG1dbJRmNLvBDfjz6VDNTR1qyUyt1sQTxy6yk9RqLADsTZjepcJkuftBLr5L",
  "key7": "2jJeeQBGWX86rSQsavjUmqGufE78deaE5jUYaiqPvhprHwJcjPE1nKjqys26BGUVqWsb54rNEi8b3WtxwtVL8p54",
  "key8": "3nDe2nDZJd5fLBqGWjhHbt4W8ZPVRbYbVBHRTL9BDJa3qzRqK6hXXaBmSuJz4uEpLmUGd1QZivUGhkbQrw7K1Cdw",
  "key9": "5Px3cxzQqpbwYKYx1zGN3gaZ1nk4Z2vfnvS6CQNu949ukSq9HdUmc5NxWtpUjuGd5sV7LZzWJRHRibxSb2YcGnMk",
  "key10": "2QQF9SG7Etm2XuMeKALBqD7RYZNUUTkdq7PWLs4tLKmyg129N4Z88yKfKPJfSJRgtc6oYA3SVW9AYmrygVh2nKUo",
  "key11": "4VZfJMVYq8hNrvJneKFRVt1JHdHxX7mMztix3wWFJfP1NcW5NgNVeqsktBs5m8Dap9wKPT4naqkot62ofnzXMZg6",
  "key12": "4bZQ1K7QGkhvTQRPNhjsNer7zjERWEc744qPqdWKQhTviDZQkLWnreCRD2gyMfu3nNRzMwbJMx6xV5YyfcyyGZ5H",
  "key13": "3NcSJevkA3n5y25zMDJVvusa3QottfJRU7Z5TYXwqpX9PApNpSm1AB35zP9Zu7KDCeaPmhxcp1xAe32mt5GKekSQ",
  "key14": "391QhixLE1QZ64swjsqX6y1TgZuG8NBZ7HtKXJnopMzy4t3eYNm1sMtbzvAwsaA94RrgDGg2ywFxoDSU8Yp3Vm6V",
  "key15": "3i3RyQVV8jMwxVjrrcVd7kwyD7wS4ekqoJ1N45QpfUVNqxtzzavs66Mtvt8ZiuyFPwbXPZKWdwHwa7rpnCqbH4oX",
  "key16": "4j45e7RsX7GoeuE2JgcB4rcQMUCsN1UmP1HSmCP2t1V7Pu5SreH18CxEkEWz7SWrv3d75FQ2rQjGUuRdgsusfZh2",
  "key17": "2BwR6rG7pUjtn145JFeb5gnsYzbak7wmFpqt9SMJnSGRDL6roc5hthjPh2Ss5J8hkab8tXDUUgCxpHJxvJaHbH6t",
  "key18": "35Cq64o8nNUxjrQUELxBSBa4U7JXaqo8vhvhcBXu4q4PJUzo4Xmyszh1P4ZTN6e9FXp9wMABZTtohJ8BJv28kfRw",
  "key19": "3wtEnTQp8JPJwLHNr5r7PALn9HP1yvwwJogcPQoCDQuW4ySHGfdmNwK39teFbczdQmyZxsFNfTSv1QFpQxBBQnHk",
  "key20": "4ecXRxtFsdb2bpu9px4dosXNVzkkRoJTXaHyMSAcDMsaYgLaRRgujw8Me69Bf7hPf8n2cf4r9hsL8XGs562Zm17q",
  "key21": "4pBMoVCNXVtwZBQqNvwEqYFN4AZdn9z1Hg7CoG9BKTKibpppnzGX92Nd3jKnzqUw7hpCB3gWk2Tp4PDWJfv9WcFp",
  "key22": "2LoJ7Nsmyf4VFMafDYpT8K7MLtxC1spX1kv9TNzAMHfesyLmHBgLiagA3WTbDrGdf7gTuFRQBL2gx5H8FEmB2hCq",
  "key23": "2m1u2CQKBdrDBcbwWUUwwpuBHp5GLZaS5GUWX8u8QZvFtt5RgVVDLLTNXzD24tReARpv3WMzd8SdfjjWopxLCdBp",
  "key24": "4E7CVkWwH14sf5bgrKas1GxjVbpkJtodZKaETS9qQHtDC1cB5YzreNKRM2DBcMhBjjyLeSabrCSmLb1keC4VwYJb",
  "key25": "2R6qVaqQkGMAUt5tbhZAF8ovntb7vPcdVpJjdKgyfHY4iokrs1mySdfGBPHGFBTT6wSdTmi8L82YGzobFtcvRZw",
  "key26": "5YMawmTb1iPEJrNo3Y95xABm7ZJaz47xDSSfLEe5eton13w5U3owRtzGnFBgy6caoN3bQ8GG2NfpAKK62rZrf9sT",
  "key27": "36wUPPCX4JtSvpSW64u3zkM8zcv8SpTinNgRdtPdpjdFL52cwmUnJUdrpjf7nHTH8PKCJD55sw7CHB9TV8CnTEZX",
  "key28": "3oYeyeNDrxTHesda8Fc3Zak8oax6ur5CGapvYzgzpTXHGUKs2PytRzcWqX4pXFxjrYEwpjWYGSzmZ96cVmeYo9nv",
  "key29": "22fv8uQWbhKmvyVCTcUuiNcmVbS3GaNdem1hP7cuMHPaZDyUCY73fBusCwhrFc4PhWLrMyqmNAYY2ocWKWkZejAk",
  "key30": "2nKRQ7s1AtqRL4ECRMx8moQyuPhTcy3DpYHt8oPKoft25XgQx6ZZxf8nqZ3CKqoRNGGWU4HZus73KD17rZif8rha",
  "key31": "Y8PqGiMoK4GQtRFJu6bWS2btysiY4CYckeXZvtKVBgL6jpDR5mobHRna1UNDwH354VDrKsVpkyGJRMdmddvgB3i",
  "key32": "2oZTEZFCSGcmVZBktPHwfLfK2DcHjWhEEvDbkUt5mobUPWfmYUeo1sjjcsSg5XV9qtCxgWDfTPP88E9AtpirWyAk",
  "key33": "n3FMn82TR8qjRvXuJpuif9ybkyg62iASBMj4Cx1YJJDKScs5YxsKT7MSWFqnYkKY2CaMKJDTRLSFNkG9PxFMP2F"
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
