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
    "4knGCJe7guRRgc4eh6fwwpqE5CQuCyqHp9cP3ePgYncCv52k9kumLWH6EnTUTwAqdwTtzdHTdJvMPiiQ9WM4KzQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33zamMKdiL9UL9sqCUJ3g5dB6BTEJPgQ5ABdB5tZ1Z5HBXhaPqXHdEvhiRh3s6WXDxF34EfqxwyQcFwYDSaUEFNq",
  "key1": "2YzUbRnC5sSfH3jc66Jo6vWCxWV9G9kuZueZ5pXWGrMGifAA1huT5PNHchnSjRtv3KnxdkvWvUgjr5WD4eGbu5yH",
  "key2": "5A8taEGwmvYm1F7dc1bTMq51rPo4k6uqgxghT1HJmM2ciVb8wTG76HuxLhBEs8Y3Q2hC6sbj49sBPY6wvhvrXz8q",
  "key3": "2npiv5QmkxTahjqGry67pr12a9XZVGyXsBBy4qZyPuQVosRK7qh76QX2LomafbYb51iXzDBzmzXbdiiz6371eVMv",
  "key4": "4R1q5b7ZrKcArfoVh386ZgKcZokkbHDXeYDJx73hvWdzicNscLnvxap4J6rNvqEk8ff8o6Mmqy5W8FiQfCB1gA8B",
  "key5": "5M82p2UWtUb5o8YKpeexSgzWWJansKD6Wd79dprZWKRyDjxqc5kXGpr7ehrrD36jXn2pwyKwJXPMUubHFhijGZXu",
  "key6": "2fZikh5s33G9vh52jzfV3cvTmNwCDKezEAszF5sUXAW5DVxo6Y9Lm8p4JVAuanHxyfa62WNsFShgbvfSQ7sZpFdW",
  "key7": "3K4iwuVzvEC826BX2Dbt4BsxRBeYyVQpcJ38PWVBDb3FAZmcZWeNaCxfGKyz2UHpFWVVGcCp3sv3z1QuzCgboXZd",
  "key8": "3a1Redzw2F3Uu9kzSaVez5kBnHL5WM7dfap7YDtRcqSw23JX6yFaXWGPUwS7m8hHwjV79LQv42NTnzakrMtGYFZ6",
  "key9": "4J8UTihLKgKcmESZ3C3naZBgnXe1Mgy92Am5NBpayvELcsnQmHc7WTmRZwgvAxuTXutKpQoVPXXT4C2CniZNmX8x",
  "key10": "Udowyy24ZcVnA3d3CpXUrniWwRyM24371rg2vT7uPYWVfXochcH6FDMK3NocNYdkr7GQkyykNfd1waxmLD2ZzZV",
  "key11": "4Zdkwxh29ENL5zn4fSBrnua977soahgCEf4LF8gwbwGJ4gQ5g4AAPLzPvF7pv5tjz66vDwSKvY6Vs5e1vzcso9ap",
  "key12": "6792m6fZwShsNCHvK8gP8JrNSAiUAKVFpCd41gwcxGVUr277NNdLci6bb7axEPL3gkY8v3WkiwBPxS39xqkWsbUP",
  "key13": "5HwrHwkikv6ba9jog6fAqfghUPiBV6aHEPxjjqg7nCZ6GLEu6ZCHhSJg3ukStuAjbMR9uiQZDmyDeFmcF3HZfKKP",
  "key14": "56sKMUwSjChDmTAvqsC4qts9Mqy9Poy6pcH5Hg5z1bikzvvEsY1Zeg88YpKF6hGyK9Py2VdGSLQKRxweKD4QcPTi",
  "key15": "5gU5sy5LNY9DmSMgUxu2dtoyqRJ3gNTESEoYm8SqqiWTSxn1jfJrHnT6QPvisCLmq9YVSzSDZY416RvVgw7Lmr6T",
  "key16": "5h8iag7d9wnFVuJUC49hU548AUKsm5Ybyb1ZJRdqtqt2uCD8bUm3R8rC9798cjd7h1QjhZzferjE7X3UknZn277f",
  "key17": "1kvbbZzWpjy3FHpcEH5iVBxUDC8FEif9MUKGaMDMGbVseRBYf6ayVaEwF75y6SSKusfJT1atMrV7fqpjc4aDsqj",
  "key18": "2LqC6jqKVj1pjrcJS3hmon2Gd2wSmipgyyKN8buVRo9v52gaRhRdf3D7X11ADQkG4fCJGuMugucnJgwBDMfgpwjv",
  "key19": "3FVXRVPyWS72ibCH4sqsQwd2CD3AL494pejFkZgpsmbRjHuQX1cZzicuvsWzADMR97UBnpJ65TZih4FEJzYGChb6",
  "key20": "3ZhBRnuz29DCawkobMnQBdg2qvdMTjeiWio6jy8fBhDxH4KnWQFNoVXXJbScWWSvBg2euDqKtAqFqxoCmacJomqc",
  "key21": "3oPQvUq8cmVDpQc3fy21EttPZ87fTxH3e14MVKKaLgeFKeP343s7Qoh9isVJidm19xv8vgV6f2hE6FAAMRntQ5Ei",
  "key22": "46qjXWLuiQuH9L5my7GwHAwbE31bhz6Hye5n2kn3Xj3TD2Cm4PoVdoHkgp2ZPZj9ScpH4DCUtf66Zue1A9PGddP5",
  "key23": "5GjfVvZHhwdJDwPuX7paZYSSB5A6Rui8DEnRknBrKG5ZjfSCCJtUR9xNQv1r6nt8cMrpebWRhG9uSZircQN2QzBV",
  "key24": "4JJXoGAkATWqdXxk5NgPGCmJSNuAyRywQ3Cwxn2n9hBvvHcqQm9hTm8nZG8VsTCEV5cMhwNfQPi9Ur34zTqy1MWt",
  "key25": "3CEmP81MKXJTmieaBM2Pir24UamkPxGtBRJx6AiDnJxYpV1Gui5V7uBKxiMirmzT1aosJCdsgLcVWWbFeQvxn1QJ",
  "key26": "5rBk49RV1YeXnVrruUJV4yraPFJKXPi8aDzYb7uVuDhufcWwpwdnRRtfjMQgsJ7ju5Vm4PV5sRXXBoWMuWCCtTw2",
  "key27": "nDjAGEvVpZTXEfXAGCDYumGEZZeBwupdzkhjWFuFc1BmUyinSF1UQuBBLKXjUmH33mtfqeUPNne6f6ycf56uR78",
  "key28": "3Nn6G84CqPqQzT23kyPpVWD4uvYYc1NBEHbUCWhZN3EzsLNNyi3LXtyfhGHSh4rh1UDz1VFRtuPDN26G4Qjavw1C",
  "key29": "5HLBidPVFSBMLDbEPKDToFZXsvwFvjALCJRzfQ4UpVLnPhdBAuiMtEu4664nMv47VQ8Kh711ZF9McPXobaioRyMG",
  "key30": "4neD3u3aWJrpqAYDnDpsRLSEnh3bUGJ3yiL5UGNxnmGFfKqDgwbEAaH3iTAYLfAgUrMx8Q9eUGDng2PiLgyQ2kNe"
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
