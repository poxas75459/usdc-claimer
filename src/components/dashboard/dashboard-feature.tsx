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
    "49cQ2cQFsJBV8nNNScSPar2x3cdizFeUNs13d1NuXNyKPDoNdLq1Mqp66ZEnKPFGEGp6cfDuYyHmxgAud2R3GLuq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RRi22UVZmrNfXATgdYWh8LLZx2tQdd2HiVpwSHxRAcY8EPboa3Rjk8gDFy5unPKpoiYiLkowRXXU557WyHRLv5f",
  "key1": "3UQabmi5R6XNtY2qUWJGfvA8fXpj8QsPtAtYmAMoSMkgqZrnLhwBDMLRdPBDSiCc5XVVM5W8PCabuDNF2jFGHhvM",
  "key2": "5nY9fKVJw2C2vjvnphyeWy3F39x8NJniauqGsfWGWQDy4GGxyXio4qM7yduKxiV4hMnfAsSPAYsWFQEMUqDKHgDe",
  "key3": "49WMERrcR1BVvc4dpCtu3dMKAXQrMTrt6Rsnogd9D1gGxu2pKE9Nf9kpWLDSw2FXCDuXJNQoNqTmkfwJiuB4vXLR",
  "key4": "631GpJ76F8dPWbk324AaQfkYC7bxi2qgtu65L68Za71azimeoyEeZPdkutteMvKksu8e2Zv71o4xK9YqWwwDdp4W",
  "key5": "4eQNyspV6obvoiMGJfLD8p8PV5U84h6cfxSUcUMymTbkk54CrTFk4BRT4Ko2Nz11k2wJQuNFNPFXtWAp1hAvAFmj",
  "key6": "4Wsscf5p7oJWNx2WxBwBgGffxw5RCX9Xi4xhSB89gbXc8HC1BPSivaFhMraFBD3VvEGV1zgfKGXfFnyATDASCihS",
  "key7": "4Q9m5UeWtndTVkP2BtE67GFCQ2Lvd9X4BinDYBymGVG87CmtXU9PvwPR5es9MGXr3NDZMctkMLVraeWYGVTxrVuB",
  "key8": "4rwrxf3f9m42cQFXQwsot76VLojj8NF9ZVdEsyFEanJwqyiyRzVSAcHQayuoL7Dtv5hVkApUyKqiYxmBYYNf1wns",
  "key9": "3v2Z13TvR1LqinYcG3k1XjHRAUDAjcfVDqy8R31XZb3Air21WkGBWQWNmwik4F5xELgcpv1bSrisRojP346A4UPV",
  "key10": "4TWhr9KG5e22mCifviTS8AF75MTxCYcwSrRpNppUiwRFRY951uc8H52AbNiYX45zkZTmZ89zBb5RMpsarAYhrvF4",
  "key11": "RFceyjwtTxQrKFW47E2Nh8Wzv3ecMukMYZJhVSPa3siRUf7pBbjz1fjhBEs6pyUgzifccpJcv41myHWUc6unusQ",
  "key12": "3YzFm8zzYFBYNfmp6DUZMRjBrjeR8QAdQXSNjB71uBRSBDaZkaGkLYDF8Hw1zTF3A8NgwthjmqZVBZ1Uc14QR9Nz",
  "key13": "4gJEazNRCTtTYciMb8hVTS91Mc9MMAaJmdiW1A6ddRfxNtt1h9TtErU5hpoAuY1fAXroW7JSmSGRFGEWtoZV58g6",
  "key14": "2DP1NSrmoorSFkbYNjpwqBWb2SeCwie9DbBcpioFHAFXLqUxJuERB3gR1PeqTvef8474o5gXwg7bTq3UXM4YiDY9",
  "key15": "4FoeeXjGhHBgkG11FeUbZHRUbeVx4P72eaZg7GNvxYWX9YjGbgT3jXQRJsdZepJTRuChvjM8Q3cfWACTY4ePvCfG",
  "key16": "4cKdKFyJda8r76g8hFkuV8QiL5RmXx5bLVvyVdb1Y8VhaiQEihakawzViEyrXDYfoLjjGU28D3HnsNoTiDMC2UU6",
  "key17": "49yixBKz3WWyi8yUnpUdqZujgAHxDZQsj62JN7WoyLHgySstvmfrQsjtxbVXGBdqqXXLYqSU7SsNHhGQbEMvQGVP",
  "key18": "3XsVZe9sw7NqfTW9i2R3rk4iALqpNp8rfc4j75VGrvjGAwb6wQR1Bh92NTzPWhFwj59gy4vRUxuXhU8tgx1moNrn",
  "key19": "5URZD3sQ6K2RUAaY7hqiUq3PdV33z7q7zcekqWa2T6WNKs1Aby6Czr1LLRD61va42f4gkyexwS6aKUkunoa5tLFm",
  "key20": "4ix8VPMhAhXTKVz2zZKqrYEzutusnkDHVcUvqpMcQUB5MtKmAdahEkgut6ptpNRk3g4skwNVC9LrvQ8PvSDSu9et",
  "key21": "3ReYgT8bwV8zqakYAy7xsecnuCLaoav6U1d1yJEYWE9rDuEVYkYGZrrogtgSJV4F8U5PPeH6ZgE62yGjZCEkcXVn",
  "key22": "527L9AEMhx43muV7fzsHc8BrYydqWB5ZjMTpiBgvtKmuajos6rDJte3Ur5wbBpUQCLqgJuib9eA4XooKcAvvigBx",
  "key23": "3KKPApCKrbCnJkqULCQXbzn73CJ7g71cSvQRKa9HHRZAhgxgbFXKqtWp6LbKCJmyqMUwuBFC2qKJyw7pbw7BbssH",
  "key24": "48JDXGvUUris7DW4ibrcw1yxdgRXPSH6dypCVNCEiTecAqoGBWY3iUUvgM9EqKEzN2ET5Pobf5iRQQZ3wdBA32FU"
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
