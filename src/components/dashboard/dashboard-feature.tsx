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
    "3Ck1YNCP2tEtRfqq1s4z3xXmXze9Zic21qFSWspZ6gNxTe6MHXkyk5vUrN33TYBRNY8bK74eEn7frmDGcLmVN4rd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46hbeuhdagM7i8bQhvZXhQx488MM3rXE2Jn6bKufASVY4nWdfNPdoJrGiM3BBtfsZcuzsnQ7XQcpT1LhpsHeSX94",
  "key1": "4DY3dCzFwNoYNR2Bev6KzGNzunX9HLDLPQXkELKUGQUkPDg5wm4qfJZ71tY8ssg9msxMcait8dxGquRxBQp6M2Tq",
  "key2": "4BW4MLBdZnzYYT7HsJx1eL7dpHNC8DGLQvCZUZtTGS8s9NbcZDfzhDCFrZyMshQh6CwneqzzaKyxoj8dMkNy3wpA",
  "key3": "2RbNRpwRBHMRJdyZrKxiYLXKJEZmz8ExRexioAJNf6X1reSLBSUC3Y7UTskKS4XbrpawGNwwdaWD4hWiHoPBwDm4",
  "key4": "2NuXFztcJPZeG6onsq3D5pYARYPwXHELicYzi2uRybLsPMmZJCEDacHTXosBfy3kQqrdp5QFu4b2X1HoUDwQ1rRe",
  "key5": "5jWn2J4iiirxvb6H5pE4hPa44nf5egpgp8pEd6R3jDHLjPHDtPmYvKroPg3c7Set1oc9zG9gT4uvafGbK6Tazzvo",
  "key6": "3oNmVgyxxp95wW6ijeGY7NMLPoMVwSVVKBvipGRzfU7RS5iB7nKBc3JKQ8SHSgTzzzRunAqKKmQVDS7cPqtVVPz8",
  "key7": "3oQM12U5N4FmDLZGAdPogX829njUAzydPis71NPji61Soh5Zg4e5LXhHLSzeiNJWeix2mxhDPmaBmbeWE38KnecE",
  "key8": "3Srz8BZbYTXLLXgbLr2peRQfQDzjzL5oM6cAqwJuY9pvazVRn6R25eLnAJsx5HV1wXNqRZKfW4XJpr1um7KkwyRp",
  "key9": "2i8HKtEQ55eENLTuE9auvA9A7XCk95EqACF9Hye3vdZvc1SaFc2eBrdJvkujXwskDZVbztZj1QcmVHJiWJBheKnQ",
  "key10": "36cEWiskvKibw7cP4uErLjri9MqPhxjzs1jQj4F4tMCQF2qgJ4hoxZar4bx8W6Peq9diRMbWXc6GSSmZiqr1QwHc",
  "key11": "aZiZkXQXf1KuBYwthFCJAxwqRL3yLBvLQJ8fB3QG9jbHSCXCXBHZRjaVGS8SQhRfsBLnTQ517sg65t1oo5Xvdph",
  "key12": "34T4vEKozEx8KB8vDi2GDJ6NJtQqCGkiEs5ehZgBqBFQgkmZconbBTsKwsoospTx4RmypFF34k9LNGR4fw5PXM64",
  "key13": "5pPfGs5S8PN8qfUbAkGn6xaAVJv3oUyTpffMvofgfWJSQe38vxUD7keUekNFEqCMejGmgE42PxfCA2SnfrY4fm8H",
  "key14": "5ghESPJeBVV9qjk3ShpYvqWqsrfWXtpiqFAA2haF5sPnTBixoffyQzDT2nk34WzPAoXHHvKG5bzMQva26ncDRBii",
  "key15": "3thHU1K6zNRaUnb3DaYEzQKYSPXNYvJMUcpW5Qf8HvwZFTrBgEDhYHZ6ju3s5umwNKKzqBW9uZ4xvATg43HzVRHj",
  "key16": "58hRVvzGqDSu7Vvkm7fTSwfWvrSw7wdnKo3edRjtihZzDuVCZBXc6mxqGY9ZNoNYvm5Yf2a5q948fwbzZwcLGFQM",
  "key17": "64CYJcw5BHAiw6L5xaybiPrzmUZhCkov4PL6c5kxBJzENnhTAmGz7zNkpAZgKgfQK7o1jXRit5WTqvPMCnBCpXkP",
  "key18": "3QmDnxE4czfSXoSjA2S54dcWnrvrRUJUi3fsSuPnra1G59xrLyx23zQtqDrNCdHHpbSZRvACQZN1PLkbnoKUFKYB",
  "key19": "4acZJmmqjirWjkNA5GAb4aGhpJJSg292UKJkx32DmAA8HupZg8NriYyGGXZaGurouZ4zNS2dKFkgHfaFAcrbL6bA",
  "key20": "4pjVda7mgkhnQWFAhiAgfsbUFqsVVw4E5mKqzc6gcyeZxz5ot2wGTZfYkiSsX1MqQhyYrwHvVCY5SSDmzLW9z4Fh",
  "key21": "5gLM6HLn2EdaZH7hkLEVAYJwCPSCm3P8RLyJuFXReEkQnzUzxDYms4Ag4r8FjdpMUqKf7DEmEZSoeiikNwzsezD3",
  "key22": "dXyuJ9dgVftgibQUjGkjVBEZH49osURa9HapbeCGGpsP2uCxrDwB7GjbjM7sZWacARTVkzUwjyWYYpicvf6GLhX",
  "key23": "23cy2ao6QRJX9YK4iEJdLStJyHktJu7r9DWXAoj3dtz384QyGcrneWxHH6pdjpyTK8pJSWEvj7cm3H4DL4Taui2W",
  "key24": "FvRbon3uzSwgKJxYzp1VM1TpbEKSR7sEVQswZdo3FVr6yreWkbvrb7W7ChscYbvx2ZoSegQzVpNyWuWKKTJKCWc",
  "key25": "58xSYN1mmmqXy8zmxDXtenuCDC9TAmRuKKByt2pAqzB5Wjhc4beSmMJB46uAesPdL858AQWgesJ1V7Jgw2wU8TLx",
  "key26": "z6F8H1HFRTjbViXvmG8NCWndJ4T83X7g1KHp42b7GJT1ayVM5iPv6FDCWCFSBZtPqdjjTf5FfUCrEZpZ9Hq64YF",
  "key27": "2gGP5xFXhji236ZKjUiQPETAEgFFz4seiAW2jYHC4CSrA1XE3GsYcWX1HKAixKbipXhLa6Xe2iBEvHAE5byf2rYr",
  "key28": "548RoPjmf1ERRXJyTazs9Zi5dz1PxHgBERsJpYHUZkMvNMrkLrxyb6f21vc23j1ZG5Y1qm4kTS9skW4pp6eq4oc",
  "key29": "5FSSnDWbQtFet7Va7WU4HfVvZ3vdFFqKKMPX3H9UtLG2HmmeVaEYbbJvrRxbdRr1713V7bGJYgE2ZPLonvRXtYRX",
  "key30": "5TT3vBjHaHYtCc346Wc8uEJwQm6aVb7MBARYmMpp8at8RMCjw3nduDAzhfaWsD8qU9t9Zsrodw5XJVM5wpBn28oW",
  "key31": "3T4L8RNQZVQ2qi76zcMq7kTT3gaEPw1KQqSycv9Fw6P2T5paAySfBcpifGjdPDu66UXTZRa92UTnbjAZTUkeTmcm",
  "key32": "33BteyGwv1NtC6S1a4Y7EN5cxrieEioFw1Fd52RKcdr9WKeAgQjM2KxTbfiu9roFPdy1vBMCxcgcAsW9LZGo5SRT",
  "key33": "2Gqb63RMHX7gni4aoUrLwjSQYcdgGYCaR612cc2BqZK6z9zkTNzuvaqhMRy4PaxJbBKqRgqKjqTHUA5MFmrfZ4K2",
  "key34": "5tVsepXvjBLM9o6FQmi1dLiK6BJgCJg3eqC78x4gBYf3PV6EZ4q7Znrnzshs6BYeF4bd5P74AJkhVBCTiv5Q5xmX",
  "key35": "5dyHHDUpdMt9ANcurNb3Sdgp62PUXEB7zm75ksta4gDYKVfhG7M6BqJLsHaDf2LjGvH1akgwrCZjfArwn9Xx1Ysv",
  "key36": "5hqHZmHvSxFoPofzoffCsCm5y1WTpe2m7Lmv6LmHhudtAQkLUPaqodNEt8zB4wWXSmv6TX7BkS91BfcspvsMuKCs",
  "key37": "2hAQeW16LXYX6nHe3KgceVCAgcpUwszga3xkwndaANrhnTbtexbB7CVeAY6ZrmsvVEUFN1wQRJjjrcAJRh4G7ebs",
  "key38": "XGVUCVkd3WNoDqA7c14fKQHFrtuETzq3627ZSj9aJm444tA3iz24bgivZKpgeEok7iCfFqzQvJHHmoerPff7d2W",
  "key39": "2UyZbeKU6VkLaRxNcmgQByB9MueqwzXpwuDzpEnhY8ruf3LCM7zfSuP63USx7hfEBAo7viWedgpLgGbtVPJuN9qi",
  "key40": "2SrF4XkWNCvbZCLP6rtZBkqQthwzViYo3GvQT537ca155HngfvYn6xDZoqgq5J1kWH5HPgX2QhNqVyWn9FCcHffZ"
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
