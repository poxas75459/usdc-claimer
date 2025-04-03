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
    "3otjPFJDTXMCYzUosiWU44TYkBy1wEGBXDmhwpAR5ZY8vQ7B9zWQEcDGWhMJYxKpU11y3eFHBdzBn51dxmRanyHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WM47QMa8wWUjRY5fBtVCrpLPcbeCnNt7H2H1pRo6zBeXPvJKvE6p2LKHZwzVR5EgFkfC7v2LZRfJnJ8bf2Zzo2m",
  "key1": "42vjsR15cr9i4HZzywEjG6NYdhtnaampmAUZRgqZVhbmudq1uNp3ncVJeHqRGzyFYeEvNvbyouJhLLUuGD8ASs3w",
  "key2": "61onRt2s8s2aFVmPWBpcDi3sYmjVffsnXLMD2uTsNsYnkMFxeXmHPpBmrWJycUs4G31u1ABYXmD86bB93HcnvnGe",
  "key3": "3mKEUhTMjZ1ahknBGDYRKPZBV4b6NSr2mr9vySU5gKgB7dvi67jpntw766YiiNvUpX4U78Zt8sRuZW99GrBrXcwi",
  "key4": "2QYMCzpdRsbSACcvtKdArX8sA2nxLMqfKkwqKJyg7XijJ1S5gLLCWidWWrGRUoEPuZ7mwvn9ciHqe4ZXMcQ8bB2W",
  "key5": "mZZTDajeckASQmZMbzQAtzxWNLhYqxNKwm1JxdoaZGy5Ad8SdswzVEt1R664CVTe4fq3eUZLuCwaZnJFEAtDULX",
  "key6": "3ZUDsrjFqERckehajaNRv8K517FBwfSVohdnTQPFZvkKJknzkw6YCGa3pL9vY9HEqi8EdWFsYPCSBPfG6d9v1ifq",
  "key7": "6Kv3qv7EYVcaksd2eqcK8MLLFomgJu7VYJu94fNURBZGvR6egKspg4FbxgwBrFGTBKkCmtJiWzwFzKdSfxLYx2G",
  "key8": "3ipxR6AgjrDBWbqnUbrjayoVfP25TEqbH9Wtoq6EgFz7oXMDyuNPC38vz8c4VurHyj8cwgb2XcP4zW73t9R26sDc",
  "key9": "3MQihoR8AMVbRtbyZG3xUxP4m8X1Bn6L12UxEsMcGSjghuAcCmYGuESxUYPL6A8d2pnaWxDhpkosigACzHxiAXJZ",
  "key10": "2wh1JgaidjKyWt3sqxn4fKr3jaoWNe3aKmQfkDHMGyXF7VTE4cXM3iYpWATwfudLoiThNVBQSYRDmzjn1MJcuhac",
  "key11": "3VHo4nz91DGYz5myRoHzgcTLkR43vNUJaEDajqFjTqLHoeUS1WGmNQhKMcLCYfqzdSgoWjZgVqafhsrr3hVZit5H",
  "key12": "66YeqnQxm1VPzZom34Lhp6atCL59XpXE3mNNWSFnixx6U1fszvVKgKNx8gv6yBkKTBZicHjU615mc28Co4HXUoyV",
  "key13": "qYhpzu9Daa5c7WJpjsFsUsz3kPMmbCb2i1c2ggrrBcA91u7ULDhWVPaGrYgjr7fdF5nC3apr6LcXBt7YsXEdSFo",
  "key14": "HKJopfqCcitCRfmu6fvkE75Y5Wug9meEs1zrp4QEqb58xtFT5P2rwW3UT2rA79qJZTeiwSGXGkvUX4v1RGaMjMF",
  "key15": "evigW7oha39UsyKYuoe2jscRtE2DDe8hW72XH5up4CtV1DB3fEYX7cfvb8sKdFTcxrj6VzPS75r7A3zVQ1qytsf",
  "key16": "5etjnFgmjDocPnCErm2oyYB9KL9kVqh6yXF6zm46uHFKnf6JuqeKGjoVtJLgynV94MDXNxcDhYz3dp8TrQk39r9V",
  "key17": "3exrHXjF7HsmNNxnn1eueg59U3mFNGuV8jdSy8VEsGofiABHVwpLRgSpuB6GyEJLywtBUhvphb4NoNr6ECBeRrih",
  "key18": "65Md2dxhNw1rGsUZJvbBxinCiLdstHKpPi2GFjGb3cFibNfuKUPfVQ7ZudBfJVuQm6KGDH4YC5cLDasn5FPbKUsp",
  "key19": "4pTSCAuxha3Ewch3A5VF5WM4yUjMbGHjP7Pnfuoy55XuDhZY8tXhimBvUEwe5Y5gw13dat59jVyMY4EgFFqrvP4c",
  "key20": "SFsTis9Zd4TtD6ZKkyJSNawXrmPAipEb8cz1DjSYArmpC7ts2EPUQmQ2Hoj9E4RLPRYGoLJdZ4V7ypf8ygDDz6s",
  "key21": "4MHCBg172HMT9F4gv1j3NUFvA4mvNxUcT6bcNvZasUD5vX2CaXsy5hF9rhK2zqmvLr5snVyi9wwrSHerNzV6qqgc",
  "key22": "3uohNGcAATAdzeWPkfBMTx1VECHhrHYcS8G7Ckn4pv31db23WJux7vW1DwvrpnML53sPEbEYy691xrk4M27Knmxe",
  "key23": "ghGtKSo9SVRRv2UDvuhp7W89NCYFNigbJPjpVrG2AtioWdSng5Rmiov4iFhBjuaP8RM5SdBf6Nqfyb7qJH7fYgJ",
  "key24": "Dcu4WqMBRiRyojGV25tHdFgRH9jeyNehkK9DsR6tnK1QJDA3AEaYXXjAyJHDuEs7Lhp5aJY6Swm8xcFEMUGn3rb",
  "key25": "oUAcR75as3LQ2PQeCBRxQwofcYTv3mkTFR2dc3j1rkutEqSajbHjVUmcDGRMKTPH5nmdmuHHf9Dq5nuGTL89ReE",
  "key26": "2TvUKGwtf8QRfC7cAZ5ekbbHCvMTEatywn1cFgpj5nXNGTjYWnKobepaUmzHXj6mb5gdNCDxHN1Bt9mtheumDzs",
  "key27": "4avYCr4Ci2AWxsYGDa1A18NM5s3U6cNUNr2Rc8wcszGvBWHF7ora1b3EnfWsXVTbSUXM376cyjusJ7Hn9vbeXTh8",
  "key28": "3yLgonnpNMHBdpVvKBeS3FZFhWsDxiaT73DgsUkoV7L5jun5xRfWaYHWk3KiZom2HiHL3DtG13yVisQUwBn7CGDK"
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
