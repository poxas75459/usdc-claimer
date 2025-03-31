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
    "5cYfawWcqDfzBPye8dAYp1NMk7C1vVBCwbtBUwDN7o2vk1WSqT9XzU7bzpgBoRBvCibB5fGFFZGSTueDVkyskrAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26EZkExwiJa6dBh68KNExtCehKDKwRJvkhVGTi3VA7GrByH1KwADoFHsw1PGfWavfH6aTwFcuRi9qHAH2do37sys",
  "key1": "4D96bLFX2o6wJRQ8U6x4um9sCDRv1V4ThFLr7s3QR5WDzegwRcrBDJqXZ83TQDemLrKSMBWfLLpU3DL1pDhWoGTm",
  "key2": "4dxPdTW2waWiCk99utK69xWxLwj5DQDVF2woeAx2Fq5adbBMFmw3RhfJyeJHk1dwyo4mGmrL3ToyGe771yXomfTU",
  "key3": "4v7iAvYK1pfwGxVqDAxnNumey21PNzSuJXZUQxyhhS61ohxzxRh6amcG6HJNq7WsHDo4zpv4gwWB47vRBoCwr1Ma",
  "key4": "5cXLhJtFGLX5pqyddRnhsYpvyRUJxyP8X1NRY4aF8HtpmTbkBpXmwpfwpdprdbehEjbNqanFa6F8YJonuwTUh9YD",
  "key5": "4tfM8QQMH48h1WCBUvq36kaUn6GtaB1GrmsGnAjJwKXXuVsdN48vpD7jZUyQzGdXAAcgc2SWpUPtMPNRdnfMSGKE",
  "key6": "NUr2hKw2qs9fuoFCXreCs91uUmpcPyg1GnzroPRFB5QwJQRiz7qjn7KULAiLnd3jsSMVtU1WhmKjYCTWn7N3SJX",
  "key7": "dagTVYb2kQyzrxAtXeZ3Nmtt5dCw7yJUUuLnDKsZKtVrSQ2vd38aKjxAe8cMXivKRtZNyMgEF9po4DF8vgKZ8oV",
  "key8": "3c3WarMmP9dMU8QJSPCkHC3CvZkYkCiN3MVoewDB8THPTkMTw6VkgLMNzht2beUVAucxagC2mZ6Xpo4qy9idyCsB",
  "key9": "41oM8iQBnUNhjtYggP5ZoAxj99NWuDah9nE24NpJd6EtnXmf6vxE8w83bZ9HZjydgEb3ysL1gwZbH4Zk4warxM6Q",
  "key10": "3Yb92PCJtgK1fdZvqdvkj39MwB7SGAWTTZ4DH4Mjm8rZ5QYcgsEHHy7TakLghRoosgFtwt8E4pEoqjCYPrwanoLc",
  "key11": "5xc5zT8ayyPY78UiPhvc6QQLv7yPYiUYZrebXdSrE8ZyRTcFDgRuDtNfSfeGSAxS1B5VXWVZa7YKXy9QNnEYVJNB",
  "key12": "4ySK57dBgoUBvoC5YirTCHF74LKjXxQ1nSUoiGbE5mCu6D7C5kwuc5YDJGnxMF8icauuBiVbKeWvJUGoCGpNR5Rf",
  "key13": "5dQR31cZ8nPoD27HW6WFes671ALNWVHJgrBAMPoWwiUgksmW3srtHkGFfaJHNwgGG6sHEqcTtyLuKEMgKQMczCAa",
  "key14": "39p2ixeK4indLNcrdYxAmxA18vkUpQpTELqL1aQkYvhJS7vptKnchfnCQ8KLaZz8iKNULVSAgNXVgBrChP7cA6VH",
  "key15": "4JpZLAcxuP5XHRUy1wYyKut1HVvvFqTMJgXbnHgk2A73MaVUGvYawB8jEWD926uUVP3j9Le9ttZnu9cB6HT7yyj",
  "key16": "3BYoE72kotE6U4bcTpBs655TF7JxqQJ1N82hfPPs6dmyDSgssVuisspsPHKFWEc3rNF7JLCbezdvqxEG6aZK3z6C",
  "key17": "3AEeSFXFWPyouBQUnbtWmh1iFGnvhHTT1tuFiqgQmqdNR8KFXem7uQ3pFKjjUcFEJ64Aodcf8tEEcL2wZkthjdHT",
  "key18": "34ELW1Qi3tsrD95E1xyxS96GXCLJTrfBQgwRjjVkmvjDGxr4fCGQFfkjCevBCGD86dbqXmZiCNTrDargnpkCmcx1",
  "key19": "FWsvgD9k4v21hoK5j6g8zCRabQpWSQV6gyiJk9oYXx1umuTGvv6rc85ucLfanL6A8dbYEDLSxmatyhaEjyAXQ63",
  "key20": "3irafkfpfTkMcV6LVZgX1CWW7m3g7hiqo7DcS8w1hxT4dktT5a3b63ZYXqt8yBuXMqkWPf2Wg3w72rTxa5THQMfx",
  "key21": "28AvFQAzgVmRHm36DHGyieoqP543QCww3Kv2wi4JsQ56xH5KZPyowYmjgJ4YcQtTv8FbYgfw5niJrnuwZiFsUhd4",
  "key22": "2Xg4QEwv53Wfp846SwUUwD5NKZo8WpzZWieCLrrrR9frPs19VPv8NUEbmcZfH4YZAVyaxSjioB8QQQYtudsmLzeq",
  "key23": "4m5JfFjDi5jMGiCwTmYujfmVPPi13eE3xMxZmSsVfyi1anb18FwxP7gcw3H7kkPGCnf1puwA6kcM94o7t1V3xskE",
  "key24": "64nP6aAuoz9M8KcZvrfGADe1gY7oYEcWHJFwjndUwLjT8i7NoPApQajjzxjbkfnd8qszRh7i4HxA4ziNfJzQX7jp",
  "key25": "5YDvATdnvKkCbXNXDkWJDYyGn34HzTWMwhrh4PXmdd4cQNhfVwJR1Sxo6WFWaaNmu5cbmRmtJpdpZ68KKrjazC5H",
  "key26": "3ddKM8d9AvPUC881QvNG675337vaeFgobDk7Fo4jjDxjwvE5hDBf6GBHYF7XNPhUVQjtzHAeY1TQhVpPFWXW7LgH",
  "key27": "YFswMZufYzWUBmtybRsQco64qibrzCK8wBfiC3StVtbvEs7LnFG43xG5HzSmw4GeQeNH4Z6RVn8fCWGp8aiFJGx",
  "key28": "2kJpBFRVFVt61ZGNgdUq97gR9J7KaTQEUZpv2meY6KevcuwaY15z7BJNywbAEwUZSBhdFQ9CeTxJjS8LETy2uxPZ",
  "key29": "5JNoAsSEARAD65iXikWuH7QeKY45NfRxRTJpusdt3H8fCNiPaHo6cUyAsyDB1z6qPGZxa1xbwTtEy8HNeWTtKyt6",
  "key30": "5SQ68aVkZgCoSBKSWrUau9dv9jNangHQ81NTkxVtQHj1bRTWpvKXCT1vvXamPU9Hueo8LYbxVhoeNS2qag9uEi1H",
  "key31": "wiQvCuGg355tDBx7QdTgof5foSQd5rZwji1uqw1GGuHF5P1N8kVF3a1nThZpPvuh8PvxmQfPEB7m7N44oXETwsN"
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
