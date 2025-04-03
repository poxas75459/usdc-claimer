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
    "3XMstQVLzvE1y2uWQeGyuCoBZYMNQCNGLrGvPAXdgt94LiUBXpdcYf8Y1v5WMMtbwtd84t6JgBUYrqzqccQVwqak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NB45zq3rSq76Zcs57YJwwRgQHPLMY6cY8DRp7vw987b6xUQxCuu8YYLT9PKioCrcSm1aFRmU5zMqgvKdKVBmSWd",
  "key1": "5qvTniZrPJe6WDDx5HwSJA31RgLCaEAJDsrDkWPjNCisyJKwxv5sESHb9szhQd48Loks7rXqXLHuvraNXZBuLPZz",
  "key2": "5KS75sidcrwEs7r8AdgTsfpUj5oCiicY4wGs2xyhJsU1m9XUzAgUcmCh1mkNX4PWH7M5tZjbEuZsNqdQh6BcHsBx",
  "key3": "2Rg4bQjtWXG8BxaSobvDjGRYJFJqJPWGi68XgaZfdkNo7RwB4f2btMMTJjn6tWKNJcarRCCnMaHrS8UqomHwJFsa",
  "key4": "1ruUmWYh25tKRZfd3uNQKtjC7ixnLHdiTsgJocSDG6ico5Q7ZCwaxW7w2bezqmF43MBrgJunWfeeAiw5tTCX4w7",
  "key5": "4uYgGf1LBguVRvpDf9AL8iDiJHpp62FdXaoMmdYLHNc42YRibpCcju4r1exqvrGemersNuGJbHj8b8hfKWpbGy5a",
  "key6": "3hg3VBPNyejTEtrFQ3xqLTK5qbWZhABgAbKECTx8bLPUvsEMqzPPeey2MfYNAhTvhtNDjPqZdtSKrBcC64o6USyP",
  "key7": "tiQmDwTkRenFodSQVUN7fg19Kub1oCr4GMLiJ9fMPuxTiTN3PiJWhqYHbhdTX2gD7ExdwLPbvu7qoWieUt8YryK",
  "key8": "46vL28EQg9HQZUrQj2bPqRRB5v79QgyRyFRaF2Yze1xobTngKXfHsUyeVV38nrgvFABzZ1wj7fQwWhYav6ts4vf6",
  "key9": "26czLf6bAhKMhXJAGGvRJjDUqLMmmq6Sdx9CpAp1qB3UViyMtsqkJc2cSVS5A2q3Wr9ruRxbuZWQEz6QwqjjspaR",
  "key10": "ALPo6LsXwfuivgPQEyLZrBaULZQR7FeneSKMw5TxAP4SY4kJjC2dF4VYS56GshcfGHPa9zyK6xs84dVULyWocec",
  "key11": "2ysAg7CcG3p3e9NchAezi3PkeqQ2Hn3VrsCJ7c38eWSAExg9RXgu9CvLzYKDcER2ERF7F6LetTku7C9kzJYgLV2u",
  "key12": "36RgXd55xqinKbdkGth5BeSgT1RX7tJYTCv9i6SHjPP78g2KGNPtzyAHizsEEjm3tSg2u924o7dHcL46zu8dGyzJ",
  "key13": "4nCqexd16roLdD7dKV9GK6BqRmhY8fFRxacZ7ZwK7GenXisMWCMfTUz6imb1qJPEVs1Bh6q9aSRb4EAPY9xSJxwK",
  "key14": "3XQ4z1MUGJY4WSQ6yUSqd2kCBTyrWwCCH9eUjwru5FqiQr5TvCRQmuu94NoCRo9WGHKSSfuXpfU32mQhDFaW2vvf",
  "key15": "2MJgtdon4YGKHWRU4xaUJZhUKvAy7SuqGCqyuvjA7KSGU9igrjxZFWvcDWddapAsg14psH6nAuXhpsTkgtM7Vted",
  "key16": "2uGRCPhd8j1fhV39WD9Wsi2CjiYFTmPwK4Rckw3WWVSrLJte6Rg2JV27QqFu41qujSGBNvWRQr4iAfJfCNv1Unoe",
  "key17": "4iooKo7wZqYUkmxa56iPeFmr9ovfJyb6YKGPbBKLDbMbM1Mpg5WFXVvnZhTYZVH39Nf8Z2mKXFswoj374zQGU6so",
  "key18": "2eVpHoPUzFSMmSpbTbcQWYQVdxKvj1MAGoJWFCTER9oCJx9xr5bn5WRWb7HYgBKFE2XWiCWsghXvgKBzk3EnJ2Yn",
  "key19": "33J7EomuSPc5b7QoimoPLrC4q35pNnzgwpXERPKUkH7bDUqW54CFCf7KpnAMAEWNHF5JPk8P7gn4tF3LfyLWRZvd",
  "key20": "2ivrB84QRCjptuQgKsKJ5kaS4DDgP3gEDK4u44egwhRuwbcXUAoBaqr9Dv8rX59TnK6PrVfoQtvoaGJdNTGFjBCq",
  "key21": "44nYT28ArULdcNAhFH5dhnqG2tWcbQqCtipEkYB4iXyQCcwzSSQcEvJQPyc3HCC4tVEKr6hWNZztRjvi9FFueNdt",
  "key22": "4Yzx5sedzykxQvgxbSmVL4cHwpbFL2DsKt6PtXD6rA57R2PvMzNZvhiTmdQXm9AB79YT4UerPQTVFkbByQY5TCZy",
  "key23": "2XLoJknnD6kzFngk9gonotCqBMFvRAD5FB7MaSSGZniYzrsVgoEN6Lxt6oMmxD11SiNKy9ik1wbPC3RQyKKp5scU",
  "key24": "415RaFnrUYbDBfrcfsEMkuotV8myP6D9vaKpjGyjGJSsAwZsyPJjZSWGZ79qhTDh4XJzkh16bgCPLYBCMAFYSokB",
  "key25": "2FpeANr8mhf4EMCskxapTVxCBjD2k2KYen2DJaKY6bt4aiaXDtU3xMRcd5Hh1LiBJmSN7WmfMpdKaNdk3ydD93cT",
  "key26": "228dJpFQ3wTVQG7oDgWhDqisFXYshcNWv9HPF4CWYY4SDu4qMePnuQCSDSUiAq2D568vTdGrrp5pnaUgm2DPP9sw",
  "key27": "2a6LLPhgXM2vtEnmWMVC6GXvUbARkXgdzvo6TDGCQCzt6rDzjoE7hU9efH7ebn3EsqYSrnMJe4ecdrSQELgHmaRJ",
  "key28": "USs7GEqyNpf4Z84jzE4MJDFgCN7RSqWG8XoPNQux9Kz7QDidPWmETpQJnfhYHgXzXCn11MwYbxvf3zrsoDNthWP",
  "key29": "2HhQPnnsqp4D9W9ev1CEi83FBeMa92Lf4ksLrGABsMFM9Y3jqEZtx9jmnUnEFbJrbPdKHm18JdkP7Z1BpDp9GJXq",
  "key30": "5awfWwM2m6edx2D8EFwAxfXPe88mCAoW2xkanWKoxbduXKR7KNbCbPHQkE5mjiJ4avXY6e4JnZEvnBgJvruyKT4D",
  "key31": "uUQFJusQaauEF97D1VKNmbbCBNYycu6VX22zUjbUp7upPtRxQqm4Q5qa8zVX8n4Wsb3FBj6ns429JC4ofTLW9sm",
  "key32": "4ZfvNNwQ6T3QpYzspTA2gt3ktTtAx24PEwpe8hYgBxLyaux2GzathTYKEZ7MaQW5PyU5R8hNFazaR43hYoZsSQxy",
  "key33": "3TUqrF1gWvwyDeiNQAEVKRv581yn4dovDkStA7kcwPxDc68Qjhzjam41BQouM7tKWx2buz7qgJ9AogK5Ei1EwhDy",
  "key34": "2PdFPp2A59VDKLeRdLtjhy95NzfWK48snG2FEFETEV3fXnfURUZYkgrRLH1Y4bDwSYyy4PFhyGUoA1dbz9SuAua7",
  "key35": "3h5yfuXRK9Sx9hDLCfv38gUrqZNAmEnZKanGTgkdsS1b6aanb17QcvAEGbXfszaq2e9ZpCyqP3g3awaXbS33Z7fn",
  "key36": "54Awf4Tqf6C5yKqn7WT7nCBJpx5cm9eLbvwvHk3bP58VSo2p8Ybt6di2toAjvRvSfmyd84wPzJtdhT4Uj5FTFoBj",
  "key37": "5LmPrB1cZGPxJ13FQenUHSPj2ubP4WMXkwJjhnGeAGKGqj2KtiXMBaFWNV6F4EEDTSnVs4GrBkUGbrBfnjxUaK3h"
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
