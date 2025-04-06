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
    "5ARmGC2GeWQ5oX1GLR5Y2kdcpUUyxmSadSDpD3683Vb6kNbPb8dWjy2rckhzxVU1Tw6QF8i3dMqWyxNqNaqx5dgr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p8G9CMDcWY7ij7v2UGBB85GCWKmBa1vY4qPmjPLK1V3wv9vGGr7CR8cE8pacWy8xCkLPneb5SzqV4TERUdmZ9wp",
  "key1": "5N84ScrQahCBkYeXH6utwfrN55fKc1Wz8HNpPDsYwTpQnb64Z9MPDwbqcUvdWmwmymYwc6uWv2fodhWzCSSsy5LD",
  "key2": "3PfnhHCJCR6cxcTNYVbDc1wJCmFJ9nF3j1hkiWxsPynZmh85H5aAoCtsdfd26g7q22PDTsNDsJRMzswUUnFs9GjZ",
  "key3": "jpBBdYKEsN6hNHzNnoXpAjPVWazYdejvXy4har1WD7HiMSW3JpH5APPgtSWR2fuM8Q3ib3kEbCo9BGpj6vMQW2r",
  "key4": "2HcNTHSgTaHCAjsinB7iFY4DPVjvcFypKr59KT5o6fLcs9nrPsLvaMyUnYWXHpc2wJn4Q6Z7nP5P6NnaXZp7FCCp",
  "key5": "ott2kR444NUtc5PB5XUtGaPAh6Crw3jfGYCifZxyuJ41oNmVjfPzjhkG2Rfm5YHiJb6GzaymxuqWuX93EzEjWYQ",
  "key6": "4BpwbkW9tRHdjBP1pNcksu9NEPVf4RFGicUAZ8L8AY2t3CAQCBc34q1ecB1zqvCW4ZnpXoSgy8NgrVDcUjcTDUWm",
  "key7": "4WqYuZtfYVikShxuizvG8VY3Q9nQ72Wq9Yxghx77SUAMzn792Yp81f7BuQYFn6Gr4p12NSFB2rRS2m1VhMrimQ9N",
  "key8": "t36u89vLcddB8t1NX9gnDEzWa9CVMKVe2rGT8q1MMnheVjh7wjNijYdvBv2dmBdeb6P9sThzgkRZJCNVL4jj1Kn",
  "key9": "5E83DsWG2p71BRnwBxQxSr5njmm2MiY8XM1LmoeUuCwqaDMSDf4QesMSQYMK33YdHc1s3ea52tedCh9jSzUwfZyR",
  "key10": "2h2LFfSkuvdWEyeiqhypmwdHuUczQnR9LLPXEAPvxTqq5bv2SBWi8db37NMQwv1TD8gkAJ6K31E8YG5S9HfPb9Nv",
  "key11": "3WjGij6bkF2Yc1xtGAwnNTis8t6EUsVnGXmTuabHP4cuLitGkefWMLb1228GhTkNRVUVMcpcwkKWxJ2TYtrrWUoT",
  "key12": "4mynJMVjJGRkctVZqxZDQrQEQVvp68UWTnDPiHBekgpdzp9siZ3e12F4nopPvfSdDbQ9vgVAXiKDMHwH4P47Q6AY",
  "key13": "5o4ZoYqv7FLFJZQ3KJVoktaQAmVQJrWyoVWeuHj1RCJd9aPY7VwAEykXL5TiX3p7qKjsBBTrTbArfkCNW71mtf4g",
  "key14": "vtKh5Zwipdrd3RTEym6R1TwJUrsJBXJWjcoLjw74ppGWTWVYVx9NBTRoaCKfBLKuTWRymnuJMPLcrT5y1V9Fyus",
  "key15": "hYs1ETnnESLHC1x87krMWMBC2b2hsVvpsmJJbdryksFYQvNHK4i1iYZ1SmckkvCRajFDErGypzHukkuBvKYMCW9",
  "key16": "45Eo3txm9amM7XnGBkYo9jae66xipks1PvjrAkqqrTPBJDNYN6rXCWhRbLYkdWxsmKsg1nULH7ns3CyLxcN5P84N",
  "key17": "DezLSwWKtCsyuseo74pZM41qnd1ZZPpDpcVVqozoGuD43wduuBamnUrBCDiuohPaC1pWAPhDNESFqWVWNDrCcM4",
  "key18": "3ry7Gv8Qitb2q7vrY3gPAF6XTZXedFawNLpYGiSEeiUnCNGvLhFsSz54VumpwzZNeDsmgkEfowD4upLfuaV4VHgt",
  "key19": "RiWFvoSon9ETExC6XvSq9coigR89DYrqQWuaN7M3PPLBe5vU5zPTeYe17vzma1W3Cu48V72mvaCC8YE7ym3JNY3",
  "key20": "5wbsQUw1oMayw6op8D5PKs7PCgCG8w1AiSvKvMgxnWBywUo8Anz5PDMjAty4iTs3Wzyk2cKYpptQepU6RY2tq9dB",
  "key21": "cbMjkhGZjPVegtWn5Mo2iu4GhMxw741zam16D2k89VeFi3U1RUhrafjnR5CWNRvWGZYZmU2PUpxeG3NT2JuyK5G",
  "key22": "28Y7YXXA5UyhyWLPrkGADfp2SY3YeKrdaDAs5DDmsBEuRByprLfSVjfp9zv8pkRNmnnRtRVkrvHBRYmLCh6aVnG9",
  "key23": "2ghfihvGq9XzeFXPiaDf7E6PYe9N5p4fZxVy5pTMX5aFMTxb8zqz8ZdSrbjXi3s8T2kuys5efH52JR6oAi4EdMYg",
  "key24": "4C1FLjuWtLHbxVeZ1aobqBUcHWfVushsntNfX5DHszchRq82t2tpDWBAtPuNMh6DQwTPnb6eP83cmfmMv6xozQoQ",
  "key25": "3WooWXXi4yZZzJrSasUFu6WjaLpxubBMvkBug6fzUuxJtWFDqEgcevLTqrGZrLSJyD4WqfBD8ps5Yh7KqWhdxufx",
  "key26": "4WugtgqWEqBDnirkhisywQ4zFCow64hwyvij9ZiAX8x2uVCgxFfvLKqb1UZDKKnjXK2QbTBGn96EC1zcKtDaXdY4",
  "key27": "3dbhB1HQPLESo69L46vaNZTPt4pkUDXVeQrRCC619DbbDofeqVV9dQiYSD7xfxiH7UTKCQqTtCzodUkXAf2RhowZ",
  "key28": "4bPfCaL5vzVR43ZkMQbS3CVwJmajEh6UKcoA2PDFHh1UfBfbYeeoEMy5D6NpEzyqjUzyzBP8qD3yhdEDsrD8gQpB",
  "key29": "5zGcHdh9NKG1kcm4ZwtwfmmYX6KoEsjST5FTtDPUyAXbFbddVUisAZCvJivn6Z7dcQ3hRgzx2wgyPHE8fqFtG3P9",
  "key30": "3WUpn9MLdmLbwGHUsL5WPGXWwJ52iqiACJzHyjSizaHZG2BhzzxKn3eNBWa4gq38xGRruQ5RNTQnDGYVz9fsL46b",
  "key31": "5RfmTksxfRJyVFvCm9vBMqwwUTHXByXrwfGUfTBGDjLYN2ogAqbmMqGJ7Ldyxsqi6rbYrX2xTDY7uAWbPCGVbEi9",
  "key32": "2YVb8oecDdRLWaA1pMFeNyKdUvHnYZnRue7tKn9aoY6gWv649BDiPsuuMHLeRJBwg7rgBWpiJ7wDEJBM8WJTf6uD",
  "key33": "3b4V8SWdjP1UfPqmsHLh3bmkFCpFSwUE6LeHhGwT4SnXY7HfCgeJVoNfcVCiKK5813BssU4EcXgma3XKkd7stgGy",
  "key34": "5oyFWr6V5zydRUNibDPUQcFjUoZQTNmn2eZ7sJNGBXPGWyvk48SxE69zW8wzuhEZe1ieEyDhi1y1F1eJ8Qi615LZ",
  "key35": "2UwhbYBpVBxae2fAKVSdG1A9MptNdRXPRahmcqZ5hR2QPsDCtF5gaF8E55tFvTvwBUZKMwvKEsj2uPiyFJvE6AC8",
  "key36": "2aqyU2amXGuzG66AzCn87x1oczbWNr44WaoqwRoqApv3pqVpChJuA8xqJzteyHVtBabzfzDUwoBv2Yqk8ZPidWP4"
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
