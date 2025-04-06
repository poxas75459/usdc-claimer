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
    "5dojpveb5x6ASdUChjznZWk8vU1tCkLf6ixRG7gFbVFXD1zDreAXZpbHr3MKuVHU9XomPyE2DNijfpAmadjbh1dh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zKA8rvKtfv9wR3paoauL6THYJ9ozc6j5wS3yx74gHUiCbL5tA8Fo9q16qPTftqL2RNUnfkVHsHojaiDR1P2GLpj",
  "key1": "2KEuRi3zZnZZhN9sR31Q5xor4ioJckWHHVir8hUCuJLpBSK7n2tbDndSXvVSC2DWX9CMavhByCpto5BdXkgMhsy4",
  "key2": "2nPnk12dCU8Nupi9Ebh2ANTgY55J9KQvmRynEZex98QGboeXbfMLZTDpCD27xVuCZKPK2DY5KsDFB8DXTZeMJxWm",
  "key3": "T13tjsH3md6hYP3JKHMkrmtJ7edqp5qXoBURAoSn682JDbP8waubCFhxcEqR4UukqpUUNZttPJHWBYYAJVmM8hF",
  "key4": "NT3TdZi3KdxvQ9fgGjfhLzGCKPPbfxh32mK3ozT1k2j6NK6KPLmE6wNBvpVkHTPjvWWcAARAmySDXYbmHUYSEon",
  "key5": "NN26s52RwbKV313WcafeFfJAPeA9jhNBdLCLvUFEWDgcNNS5AyWS2y7WNZKaaEJbYCBppeXjvYV161H2eFR62W9",
  "key6": "28PWib4F5P5HxCUNAZL7ZjWZL3hHmuZRP7waXt4Xoe6MKTGyyjsd5AuSxDjBbvSoHXGT4uugjATk5M16SsM3QBqJ",
  "key7": "5y2W6wLMi2aFBF5K2UzuQh4QW2MzRYNKVRjmfKXdUPV2rHtkc3qMJYkxbBifuU3RRV7Hs1RyxgmFHZ1RTja7Vcgr",
  "key8": "G4Qhz9rtntKCcSeoaSxwytVfFhcVbTkhhH5VQHUTr98muGhxESpFUbxzcif7qTpwVjfGqnuzCEELBAfbxRr5Ctj",
  "key9": "3MUotBJQTE8NYdqAurWzhzKSyjMaYaG9ejndH89UU1bGCuW8ph2UzgQYrRughDgHmW1XpvKis9ZdpbBaZMPRNt7B",
  "key10": "4M4DKdgWTA45DLtdVX8x3xfBoZF36R3CcJ6EXj5FE2L7B3vowtLXhpy6rC8ArYxAysm29cEnC2i2mYNr4YfRwPEe",
  "key11": "22Yq8EKXs2NVg8g9Xi25nKxdF6NnfW7CbSapHLx3DnZbNVcviWKw86Vo61cANwDz4svyrS54FaHLi4wdP4wDpfWK",
  "key12": "4qY6MEvsUmJ9XuvvSLXpczFiC5Rc7bEpaMNFdhw5Xmuw5yAJbqYsJ6TT33crj4AXyjGbAqLwG137G15NqttDvtMk",
  "key13": "3AwucpGbVhiAmzQyTiSrqyLK1iAjudcZA2VeqDnvCtNCmZfcULxAgwF6Lve3Ur8Ytn6CK6UHkkjsQC2fjhLfDxfM",
  "key14": "3rU7ayFXreRUDitbiLfsRbvuVU4oimxEVspYxgk59vhd49ZcMFiiNGDX9qGsgAEFCGht5C39i8SVjnKWP35dc9n4",
  "key15": "4oyc7vfPLJ8tiPnNkxfa9BKd7Je2MXLGce7c3onaHBVKbqhzNDy7H3TJu4tsZYie2xPt3GcVejeSP81dKtWLg4qi",
  "key16": "jsdwtoa57ETxsWxxKUuJLxmyxRXhCkx7p9sXa7pALY7KkxvA72zHxNRoxSoAvuTJmiSt57LoWz9erDVujyicxpq",
  "key17": "gpe34GPhFEte2pQDULPMFe5YCHxyLD8NCQq1mjWR5Rz6igNuBgF9VW6Ri2p74MG8DLwUL2tQoTmjNuhCf1J3frJ",
  "key18": "3eRVehJbcdbzdee3KUKAho32Fev5kZcD3mgQWzfFaJKuxq5nKpygxA7dFd9Vgmjsa6QGb5ZK2tT3cvVNrjWh6Q9H",
  "key19": "5s7dFAUY38fw5WtxffZwN8hQU2vHKtrHZQnJagW6hUc7KgLpBjGCRjeYCKS5nnV11EoiPzdV34myKevfDPHUrfYa",
  "key20": "5Wj1mtTzdWNDVeof6DDZdkTm1WbREGoSHrB63jKmvC93AnZgtEHc578d4Djaxs6xRddXAk2B1osMGsdjM4RP7twh",
  "key21": "2dFb8tmxJV9jgDdmGjQo2khoAfLKADeS8nna4HzcYjZ36JhxAKDfyTofzddG7s8JHcn62LqfLUaKL2pW9VgFgJ1V",
  "key22": "X5onpddUGDjbwMpyKSdhJwz9YD4W6ZKoQfZSD1Auzr4uN9mqF5Rbb6r97n52PnNcyDHWGyTRkWHRAV8svrtmivJ",
  "key23": "3Zs662dJzwsj7DRy412rLZPDHJvroHmSF3DxYN9ntFBmG1VKayxgg7mAFySHX3Pn43m4gjxNTeQGS13zaFiGuQhX",
  "key24": "sCHzuhP9jPSzDyf5DftLL1ZiWAj1o5RMyQXTmNQFnPPji7LXHhXud8WsKBnwDsJmDKLxq2SJ21mMbViUJCCW3vv",
  "key25": "2wYdnUgDq8S5i4sRbHsNoFVsHAHag1cKJc8yvzTaJvnTQLCgBwA7bqFrPeb5N7isqyroASqo3n2tzjTSdhZKPhHm"
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
