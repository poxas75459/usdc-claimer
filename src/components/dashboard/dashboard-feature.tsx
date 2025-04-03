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
    "SWyziYgKaNVKKkL61sw1QcyS643gHCzzMFVPg7uiWTvH6QemHWUMKfNtmq6reA5tH5rnSVadkBweQf5hdwXcP1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eXt7Wop9W1wN1qtBcKME7ntD53ikm5rgb7sqST4hnttRUr4mjVXAQuLQyNysMy5zr4Z5reni8WM52PqjQ95XzHE",
  "key1": "otDJfoNeJ9vTuAXQesgNWVYmJGEWFau2NHdp55VQnxeyM3E1bRfzJLfZpto4t2GR7bAC9hwZXe5BGfnR17eL8s4",
  "key2": "62XP1zBEi4HBxtx38kHYayV2LVi2WTrkbfH6Q8N5UV9GUqBKjAttwKqdcVGbAJC8DcQrRz57FoXNBMnW3oTfPbEh",
  "key3": "2ZfhNQYN6hsVLtmAsoSGBEhaFP12baFWAiUmL2ho1XkRcLVC44dmJtbvd2CUwu6P66PhrHDj2hpX2dmn2VLoWFP7",
  "key4": "5Mwi61owWjAsSayw2QrGfmkGCkewPwRqwcUQ4zuWrDC2RHjcFnqAXNrzERWxV4GZ3FV1Rx8Qsih3uxMCVdzDE8fD",
  "key5": "3FQPaHYFdmVdM4NMimYzNpzr9GTaH4BbhGrH9fyHrtmUXWaiJX9ogdZFZ4kNmEmoK58rmocDGNYSbvPPZVmWU5wU",
  "key6": "DV6mZtDoE9XZhqqa8hnDws6PK2hJoLnMfT5uLtuNRBtnUpTF2QyvMMajAd2Xip6i3x75m8zTWCiQThzZsLfD5v2",
  "key7": "3k7QknBiebnkMhAbXHMedX1KnWuh1rD23W7HT5KN8zjvdsVMop6MTzrdxA8BHh1m47siek8d74sbFzMv2eC6kC96",
  "key8": "3dLpMU4cSH1ZjBCWaA1NAyHnu2SWR1jy88tEXA8T6PzrSJhVmb63w3kgyLsvTq3tXx38pwkWUCAxEQjbRTYSeTJq",
  "key9": "3LLz6ouFiNSPVyxDyt9cRcWmYqUonbYow8DMR8yYnu6WbB8MUEf1Z4vANVdW3ALT9fMpuyfs7gAe3RoBuJTzygMR",
  "key10": "fNEUGzX3ABqVERbdEu7NupRTH3yH98cw9HUaLqUwMvkK8HakTiGdJGrnUWnRY5cci5arsXsJY3NPcX77vtzFzZU",
  "key11": "3kfpaT2GZubEmcZ1wVcb9WBSLvd3ymGzY2yikGZwPQfszL33HJrT32VnWg1y6EyBbzE35UAaHngxvgv1Nj9Tq9a9",
  "key12": "4SaSWC5rmKBXe3UiDiHKqRVTdvDUR8YJ6zuCUeQTRCdodNf3YVYrJPg7PqDbqgkxiPeqWAAJsDpDdoF9APgWXfZ3",
  "key13": "4VBT7fiErjuRBJ4K1wQffiRzxvfXTnC97FFqQAZRiLCkSbbCJBnkzQNHeEV7RRgVVk5jdssQ2nTbKR5gCMHuQz7z",
  "key14": "sR8DAJbXRwHGyHx4AKqTRaZSFQoZJ5b6yns2BPuzZG8oxDrFw9KGqrLvNE3vkZ8nue6hhRvMGo245NnYauySHhd",
  "key15": "4KmdgJwGWp85BLKu88FRnSSqXnmtB5YRp5iUFLcbbQxmPFFjN1PTHyJgNoJW6XAZSAN8wtMeveq8xEKZNLs2wzmv",
  "key16": "4w7x5aTiM9AvwxFmNvudfQAVQpYcoRrPMr83NdT8gtdV24gyBZoTWkCDbR81bTeXzRJ4EkZLQh63p3NDxHDzqG6e",
  "key17": "2DguBsJ5jePEPKZqz7YGH7Bh1ZPBbMgxM5MTzEN8aoFYChA2tKJb5ECHsUo377w5Y61bxGpTdzHYyyTr96hqhZo1",
  "key18": "2YXRoSCZY6oR8ae57kszSY7enqXDL7goG4v7GNg3bWxpSDcj49h6AhU4KtxVgLzBHzWPx1vtSUioDSTggRGmPkC3",
  "key19": "FW69zop1WMCvBctKhUvxyJt6ADBnQVgt2gA5kup5JiXjQk3Zb1CKVCzDDQ6cYv1JZbNpN2uhN9Zca6HRLAvy9K4",
  "key20": "iSe55CRZc6RBCzu1zrsZAW7tRVXGdPvyDS6ZaJxp1uV4Zais2AaaFkFvV76mG6dBU7Zki6Hdb5rPGfAA1G49Zb8",
  "key21": "4h9Qc6eHc3VWguGepmjTy6zo7NYGMDFxCiAVmBjnBaCBcj6n8qPXHetJ6nz1AXZB6XDEjya8cKDjvRf1mqfZJPL2",
  "key22": "5hwuXkx7nCmD4sbPxtEF9caUMbKAGqLf8mszD5H2ehtmc5UNzYR4om5ykB2PJkB6jFCMSA9rbQpdyVYtgEW6JSVF",
  "key23": "3zdzuSAHZAFCXy74MmqSr5fsyZs5eoNiSYiMyeqdh6wo2VFRrpTvEMHefiinw3btAe2zLGN2ctPcrCQnQBSbxsiz",
  "key24": "4Vd5KvN67VEUYxUMD8MKVBgvcaMMTPhsFuvaAwBt7R6k11pLdc61cydmwMM6kBxioYqxWoUA7h68Vs9J7zD9Gcq1",
  "key25": "ZhyjCRdZerx7g7REfsT8nN6moZStYYi2FLJHqWZzqeFzB8hdi6wHFHsdKpMnvj1xApRgqcXUpcv4BRrwDFBDrV7",
  "key26": "2jAhK5nG2obFus529vuw5k89TTzsbJ8oPM7bRY9a27wMLacLPwZGVwqgGsMyYMtcsjAY84nDdNByW4cHfHZnAX2a",
  "key27": "3yFWUToW8Xkyops4PiS98YvEiR2nfYysUYiuWf1nhC2sxYss6YBmc5Dh7m7FjjtgpcJjrUoi3eQUVKUdaeHcG8D8",
  "key28": "Tv4iGGYSDRs8yWHCQs1rf6JNxRiWqe9oqp4eg8fDnz5BxuF5mbdKHD9oFaRDVDpbXoRu8XMgTeBioegQQd9i5jG",
  "key29": "3qKzpwq4Z6xX1UYFDHvzmi72eGA2Cdq1UpAdFd942qQDtawvzV7KV9Mnm76jedeWjJJrp16bNsaVhmznAQtcJu7E",
  "key30": "4BWZSCnhfSzu5mzqrSViC3ypVE7WEJ63LyQJoxbVy4irrWc4aG95PeD8f284daKp2a2EYUHH5e3eSfH2C7zNqZFj",
  "key31": "qoGdNzDw9Kbv26ycpQFwhnuTX9bpyAJQnQNqsgVwvrsADXD7Q37J9QuFCDXepJYpevmjfzBipJpGyFQ4K1NdJDz",
  "key32": "3tt8PoYvCWVpHee1Z2s8fZEoeqzsfsA7Wn3EDzgJ1Mjwo9x4Gv5z2hPmDWHGvzGEJSEAM1y4w3NxgvxaBNpnGkup",
  "key33": "4Jt83gUDxBru2qwNVJNF8jbHtfha5boHNLB2mUXAM6HJQbnXH2KJLJ3jgLmqMwuRehLU8PqdA7TdTRRK7NtxjxcV",
  "key34": "41apnRuzP8WS43fX8E9xLNZEX32uGoektH9kg8SmK7NFFQfWgzQ5dZF1gqrPoUt38hWewi574Aiz1Y1aHvt1Qtpn",
  "key35": "5zin3HP1z9FEaK5Rv2MayCsj2VYHftnPxz4RXyY3x9dXnjSspitUR6Eru9eZeDxWshiS9Ws7fDbrvRZSPg81BTa4",
  "key36": "44bAfYkRNXVHofHUD4AWKQRUPYxseMekBBemQsbRa2M8FSboY9bVRCUhykb8ynigiHXFY17yC9BgZvkTCn7cmQxM",
  "key37": "45cwN9K1vKG2sJ4wCiFB5Dk7XP1As9swjUq5UDiabfDpJxBMnMpfuNwztCRs12jMiYWY7TYYTGp6NkhYqwCkkLtR",
  "key38": "4gmDztUySRS2Gi6WboP9un8Pq1JqnntVs7KmMw2HuJy1AQfubUVX1MZqjC5fMTpMTwbCjBv321vKHay4g5dEjGwe",
  "key39": "5pX9zzX438E8itBXrMkrpxKiZhVYaD2gcY6UF7vrbbm2m4o6CCcFTv6HHxLRmH2qKSdJ7kJ5rQeMBMDhWRUYn7R7"
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
