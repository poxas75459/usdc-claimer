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
    "5KHMWRA74fGXFxT1PvoxJvdwHT6YAcQ2gZW7curLKMukuziZ71foxH1ierY6KTLkRsJ1oC4kpqgRs3NvrVAQaKJt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46EN5MhHNNCtYjkV3Xk3PPid9HPT5dys9xL1i3Gj4GkDnrj7NC3saUDmhVZPwrfZWtECPB4wbVyY8sjZcKr8Bmyg",
  "key1": "zeSi1KAiyAa8aPVbRCtsvH4rDWBxUiuaZkHXQAGq7HAjr2XPqxSiKDW6VUUowUGJ4RMNcBwPsMQY9BuRF2khWHz",
  "key2": "5n4rcZjFrTzapTH5HHUfB2oeMh1BEPZ7P37ogFZC2xaxwXCD6kgYsRYok5Uqpsi9DVUrVH6MGRGhDv1tK39hZoWC",
  "key3": "3nvXfT39JHVUDbX32yDXhZsornTc5WPdgrP87HJgYCzZc9HXx7KuSARJ4VEFjqJiuSWWmWcPrRVRGnWjQZkrHh74",
  "key4": "5mBmdYJhkVsdm8E4h46UntNjKJajHrXx4sTforoYBYLuPHEacvA6eSg5H5ZHnuNP62AUQEzi8KrKmgAizDCefNdZ",
  "key5": "5GXWcrHgLnmBuirToLLGfge4WVQkf4oKgpXZN3CiWaeUB5di349CmtxUDaw3qv9fyK2AErXW377G12TdUyV68wsk",
  "key6": "DANAQe4E4WMzzP3GwGms16Nh7HMH4LT9qpuSnqWYEchv9S9VjCczgDYL24q9pwaLkavpqkHZe68TNFH1YnpoyeC",
  "key7": "GvbV5VP1aF7t8ZpzgRaD7uxc6n27PDcgDJZKUGde5UmeFPbNakv7HMGqzYvMYh6YfGetxtDQhN3rsvmh9JDDBBi",
  "key8": "xLRNxoXiUSsL4E9CCQNN7b2fZmMn36VitiXdAzqWbfZcEhx5qcUfqEmq1MVeQ9FpshfAKYH1eUuZyZrpmnpnm9N",
  "key9": "zV9HPhmhrjoc8PEUq79rUbFJDeXzme65gPWkgQd32eE46sk7iAxwnd6T3rcykCoaiPMP89GBQFKarFaXP4E5T95",
  "key10": "5nAxcVQ9P9NzrjTujY9PKPtwRVS7ts4uzCwvtPpsbFePpx2vcrhuP6V1RHwndErTLPRFywet3Y52FYdmWAPbc1Zj",
  "key11": "HctRzHu9ANfpBPLZ2FTcCiASoibHkCNs2vQ9tS98ZHHG2yJQkJonUonJZikLccXf7LQWxpRhP88sXHsDHAMweUn",
  "key12": "5oG7Bf988ynmQprvUKA6sinnBbtD6Ba4SprR4fNmVYtTQeN8ejGZp6jPPqaKPjrF7D7YH5KcFYS7GAx1ArrrrsdM",
  "key13": "4QJ4XcggVJw15DaSLpUhYhBkg6nzh78HqqCxcCxub5XDieNsu8Zsbf4rQS4ELxqSrELRpPF7pTXYS1vFUQXbBBnH",
  "key14": "tC4J6KDSjDtXKm3a1jToPCe3bHRDLCxkDBUMWzGtV9JwXB4N3V4hQn1CbRoMHNUFtEnpwEjC6fTgBVHXg2HiFpq",
  "key15": "3Hq1AD6UurspafZ36XsiSqDHiuXG5KnKNxtJc6dnybDpU1B58Vco2YAhDyVA9SdaZVBKEv21HEE5pexNS41zgk8Y",
  "key16": "2SipFQZU3owfv9Wg51FsWkcreNWyFVMGnpzVJiEUjUqb9y95equns23ReDQfFf3UXd28ry8FZPnAvPUc2fJ1Nn9j",
  "key17": "2QyyuZJzDV8kahcXXb5deHaAW3ohpMX7D4EmFcqu4uNtJffcuCLJDVBaf695TfhV3Ke2vXCCGH9CnxZpmLcPhMNK",
  "key18": "5MYFXSG6nDtgCGeSGL9NdjF7DWxS6gsLyi8k6tuYqu2NVmo12suFqLdWLrsnWgXPMGqUg2NFjaB7dWu7ueYygvqq",
  "key19": "3kMWFNDW341J75mqVEP8iiy35SuMVAcnpV8ky5mugJEQtoxMSVxSfn2kUuMcvZwRXTghMVhGCH6sv44StcjcNVoB",
  "key20": "2WiDEmokDrsNj23jazjk1bBwitLeSzVPV7MKpdcMzyqV6FDgdwTbXko3AecCy3RFrijhmpzurJHTxC9ETpu4kuUw",
  "key21": "UP1TV5ekzzmjnkaKoobVTPEAXpDW6AcR6cF9WJhoBAfpzEuhLeyMtgq8fyCR63kNj1b4xvQhL2FFhxQvvPwnFFe",
  "key22": "2Z6tMqtNLGZG8BRHicPdm5hDsSUYnvfWNGTeC2C1tSmUKBUxYgy6Adj28jSNLVv5rtyB4bbJ5RttjHuYrPkcJKr8",
  "key23": "3TCRz6Nks1W4QTtZ2wV4WBSQy3Q8BYxrkpsAVt8pr6SzKabkUcfi7k1kkbQNaBPByX73Xkkxvws1Qf2j4BM1RqKJ",
  "key24": "3HokQbB7jmUPKRAozSe7N5fpkyJG9ZmqtDbJJKDXUpCWyeQkBeepsmBQH85MkUCVGPgbfRskSndXXXsozUJaY1ui",
  "key25": "2rNWwHG753ZHAYmQHtp5rCaFnBYWFP5Uswnt3APfpC4hUoukfB2kvnwCA5VQiVKKzNcszEQvzKkwHXCZrhd4Gs8z"
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
