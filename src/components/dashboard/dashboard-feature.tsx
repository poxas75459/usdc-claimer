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
    "Pyb2vDQEE529bXsVZvWQqk4FmDd7aY8g6PNq1q4F9qoRNcVNLGdvHj7YH4g3TP93bZTHD4CKUEWhg9QSjMsm2nt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dAAFbHH4va3WE3XwrRBAym4ME7niUcZH5XoG9mugHS37HM4mYGptgq1qDXCHyEEL9zUiM496SoKS47XHMBGPEdX",
  "key1": "X5ofqG3bThimpDZjSGZa2iVzh4QcFBEePMC7QLpqGdDSmtKCy3sCY1fakKvx4thuVv86c54SXpanjF42ZtEh1tP",
  "key2": "2MBgTTzB6qo82Nx6YRKZW5y85k6UfqrxWXtUbboYEaArRZGZPQMcdgdaVdf2U2nUXGHhHJvUqE3zre4RLkc1xZ9",
  "key3": "642mCHvctLxYSptXYyapnxYJNvTZkK42nGjGyRF3Zad8UbSxx8bBA8KzHBkvzKir7CgvX2xi1XrJFBgQejvBvb3",
  "key4": "3GrNNFJjZHzavmxsY8EPrtirzRsAJfQTy46hXBEmkegEsF7Tbw8qpNK8srgaRx1iLcaQLX3CXvQMzAEgCDFMrHYr",
  "key5": "4JxehQwJbd4vskCyoWdkRNURZvPpPdQ8gksdfQXBvfDeMP8YVoYAtCgntqrsuo4cgkrFvrMWhtS3W9qPfs3ge8kn",
  "key6": "2Qbtyq4VaiFTnj6fFZVRuuX3iWi6muVkkWbiK1kG4NvYwURSGkop4z1V8zZHw9D4DSLMVxhPbGzpvSNnwQq75QTK",
  "key7": "428ZjXs5WkQWzuj3tuLc4LmBqBcRtBqq5K72AwrKoddSqnTzSzt1sWXze2U2KycTFFTTjgE6FpfPKgVx8k79Q5gF",
  "key8": "4NsBd511DV9atrHxnxY55SEE7DQAr9zwuWDZ8JzG7Tg3Rj5xUrtKNvXAXsaJNeqVTy8KfJdAfRyHqPYAAQj1GpHS",
  "key9": "62qBaGmKv9dKVtPwDPFT1jJUcQKkSG6M7gHqbk48TJC8aQ3oMPhs8BhGaWXZ5FCfra39kNH4fjJfFgTZfwPCx5vY",
  "key10": "4QidFMATGrueLUAPS1YZG8hZQNyjK4Tf3XQ1zfWJnRLUMRnH62XEkauc5d78uL8onw9tcLGQvwTYDraEjPbw3yQw",
  "key11": "hpPwsTuazEm2bd2djEtqd2yZMBN2MFvHAJoH8tnzrMXhATma9MtkZ2G6qgL6rqiG1xH4aZZdbDdHgH9jui5FHyV",
  "key12": "4VBSShmRjFdmXTdzyNRktL7p7DYnYuGtdGySDfvYA5WAP9cfRF6ZajRxzRN7TXNUdKhfhJcKGyZHJDrWzNP3sDvW",
  "key13": "uAdL8zbrcZEtmsgoPhSdGEvXjijA1DWo9x7qkQpJ2QhKguD7ECRmN7jAs8DZ5zYrmiZCBEmLeAbUmxgsCJ6qeew",
  "key14": "4pAXvDMHsCXXsCPKqLyBd4LFREtPeS3f5P3FG4sDNxUx39TSwiqK9UjkyFNZNqiGR5cYBp4HvnEqjsnV4VuR2a6U",
  "key15": "3RqAteBhAqm6BwRF4bzhHxPinMDjRy6BDffUHULY5v5QsJ3SvAyoY7TnbirQBY13Bp3GYT896UqM7BnjCaADFjzd",
  "key16": "2DoGnLZs3KoQ3FT5yTsibHPw1J5LaVsjdNq261naeVSt4emX6gKppwFgCYuGBjysAb1Fa1risMow1SnDw9M4VYuG",
  "key17": "5YWNaRASAtnmDyJHbm8kQC9siM2iwdDHCkxZZXgCqoGxaCyy5eMh7Mrx2YXwZ4AX38e279hs7tLYQe6oCLuKofaR",
  "key18": "5hoXioPhswL7oPtszanncgbkU5CCGxXsJzDHrpeFj3n33YQ4P33kQ5MKNzPvseSguuz7Pg5A3RgzVtt3njrUcbzc",
  "key19": "iTmx2otpTgWih4QuGsfFbefujqm4upzjgenwZo55w8aCmfVyYATo2tpNeGqNq2YtjpUHt9HFpt1RiS3C39g7qf5",
  "key20": "4SNSiF7JLnFti6B1LsvSdxdJpiYtLSbLhjvKi41RVxXBf6xfche8smw1my72Ay7qx4eRTYJU7RN7iuTJKfdCaQzK",
  "key21": "2M7EbpoRnErCyBvW6ccTUSKFMhcfpt9nFHfFFDMTw7HGjvzqe6WAoLNJxHCPrdxsSHwoEN7LtGYwdq1PccQa3hCK",
  "key22": "21wZsdmUxXZT2XRm8x8QGUt79CHj6zTrXQswrMuTKRK8AiFwmvsDBTmtPeEPMK8wG7QxwmW8paPXzz3tFgLjSBqh",
  "key23": "283jupVbb61TNz9DimaEbTrscuScrApKqvA4NEjUuTgm3EKkBFSiHkQpQeCv2VKZpE56ZWDxnJQ8UzTy46JogVfy",
  "key24": "5yQkVfPjzcMmmAqgsM9xJHiBC21DHbAn98SnnyLd4MdMXumYBEAeELSUxqBmxXihchYy7YhnLMR44612ixTAFzt7",
  "key25": "5CTihJZsgbS5467fjKU8dFRnCefGZaJBTZwH6sSckD89XMiHZa1pmefB1wbVFe2RZc6MWJzSpVFMPjsJNErnpByW",
  "key26": "2aa87J6evn32bwpzZdPHNyGVQjhE9kynS6FXFichaJzUUv3uFcAPjAiATZpAzXG4yjt1ZmdbqaCLkUx4Q96TQUjm",
  "key27": "8sAzDb2fcShtXS7LA6x4hXFYJLZajN5S8ZPuH1DgfovpqNEfbi9TUorjayCaSGu2eWWA3XhvxqZbDuWuLaUYgK8",
  "key28": "54PSEMp5dRb2BYbkxfhgf3yQLH3JtkR6BLCEsKGrGTmE1F9AzMG7eDSbV4zCd1C3n7p4sKSE45dngAKTzfcNcyxz",
  "key29": "2RoSD3AK1fQF5CcB8LJe4yovtb1zRmY8xRyPnotoLSeUZRsPH9phB3YVeUESk9iUrQzEnvSrGAF2jAH4jYy7QAEa",
  "key30": "LbjjfMEW4EytcVbADjurovixj8hxzgHsUVtgnLcKbYosmoNZ4Y113P7HduWktq8RomkAbUTQBVRmqSBU3FpvKTV",
  "key31": "2w73BQSmzJ8hgpQrxHWAZJL6er32HGfP8T38yPaLsKfj56KLShcX6yhJAJdb2pQhqNQk8ZERRy4mgHRwKB4WQt56",
  "key32": "am1rdtYcsyZpFFQuUUtPeHWVKLHB76i6a4o2wPQjbQymArxswpAiUCSSshy49eJXu16ize8eXDSbKgHBBoTm74i",
  "key33": "3mwwZNy5i3kXYcG6rgUpv5HdGdan7WAJNZ3gngkZhHyg2ZKrxjAXa7DVPXJAtTqHgKbvH1x9gvG2vocbwvdbRT4G",
  "key34": "2EU5jY3ykqz2vJCmyYV4zwnqqc9KLNznaTneybfNBCz2Giibzh5zfb3uvxZZ6eBYNRUrNwnpAo1MHVCvqPnZ35ao",
  "key35": "Asq5RMPi79HGffkr7D1zYq1kvVfZPkvhwKbDta96nBsLZe3CwDUm2L9mouwu6krXV73E5jJsFWiMrKaaULoSSNZ",
  "key36": "2R4GL3Didj43A2ahtkwq25nrYViH8W7QkhgWQgJ2dxMmPBWyvdnS3Cx8y5MkALKX3zg25NcLUc96so4bJXR6Pttp",
  "key37": "48YrjWaLT2w8zkjAmFGmXeQdxhDDiGXkA6ZqG9ibBvAXSXCtTzSJg91hTiZNbkSMNVQwhqwRULK4HRNQLswVLgJe"
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
