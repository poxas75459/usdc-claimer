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
    "cRaMZ42ux5iQ72j3nnxG7kRJgfCkL1txGviNswvM5qV7ScmXgeJeLiHuJUvMB8JPSHkTtDvzLj4sYfu7FMkoo1w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PMCqS1iY7r3RRYD1qH6EqgSBY7qRaPtUyArgM4WcsLz2eMsBhXquAgM1qh63Tn437Ce938CkLVwuWZ14dg1dd46",
  "key1": "3DTCQrp7XW9wrEAJqesNdbgogenccXgeAADyPMNenwpgEH3Gn5Y2fJ6Jth2poqup9PJa3oG9wkox4yki1VwubvLU",
  "key2": "2SyNpyLZog1UCVkmrjmeBg7tog7uq8BdCEnJqtrx3WVGSru9bjihnatHGEJ3G9TFAG8YQXfn3qtGDrBBfKGGHAjc",
  "key3": "37CUMfDHFbywsQL48vgaXYuACbW7CaMyRN7wsW3QPckJY21LJfiH48CjV7hnWTpPGcHLnH5Jzfs33kJRw5YASf8w",
  "key4": "dKTX92TJAqFTHLeb8Dk3rvEjfHWZ4bvUNKS95kbjA8B8xVXCnvdccjuZ2QX36jsav5GZqEYtahCd3UMXEURVwFy",
  "key5": "3UKRXhp3xQJPDJy4qQzwqh5y78ikty452wQFeRbv45yQihDZ8MA4DJ6r6vtLzMC7AiHQrErZ4h9BHkD5R6LAmAJm",
  "key6": "2fRrdwxwcsrp1mBH22wZLy13wdMeTdQAfQ7jiSQ6ANw6jw4yNUguQtMeByznZYGizUcMT2inTnacJsMQBpdkV7rB",
  "key7": "5hVvVVRXvDYawHapWiaGi4kTYGKQDQJLcGAzw1YacPjxWGG8x2WzeJBGpfyC32fNP8cZMKLfrhUDzq9TXYuhHPBg",
  "key8": "36tN2uxzLGyFPMTNeuHfHjLvTMPTxBtgSnGS7tbfd3H3JaTXAdajg8Qbar2PVxA1r4HDQvJ6tVHoNvt1AY3fHtQB",
  "key9": "46whcfmL364o4AmRobmXciKWYQoSMxkLz2vK6eoKTtVaQqa5E8CogEj23barYg4DtXKi7rMgfFma593YKVCacsft",
  "key10": "4sq8BacnRbjHLKtw6GsoznYAgQnzjf8VtgYM29mVB44GKzdaayE627biVhDCEyomZJrp8KV6hZpXcm7GfowFb6BE",
  "key11": "3jPR8mzpLsa6daWLmyNU89vZGEfxZ1Bpwb2da1dQqqvguauV8YD1cAH3Css44m7D3vqE8jNGfmqqF9ABiFG64AXA",
  "key12": "374qDtM8G2et7Pn5xmXQwqTUJJDjSrLiYG3oPu3n2s65EERKswgGWk1P99b9iMwssYcdW7hMoXgp9xCMxNHE1npp",
  "key13": "VGLFJW4zHqLfzKJLrpVCzxWxjEp9UzXXKgS1bBwrciNW1CF4kZ9s6EsjaSwUvZE2zsmiGrkh9L2RFx56ryi8JGS",
  "key14": "cvhXTRH4kfMqrVGXC2paFQrfmSxoJ13X32S32jxUubzueEGBTqMuWHYdKNPcqJy6gANGemZ66A82ob42YxfLtvQ",
  "key15": "2yyV1WheNmW5vRs9m4N3pZW121tso7hTEJHZohUcvdBKV4r5DMCSHctxNLCGZEAY3iXyZHToZDha5jWYj7DUtQkP",
  "key16": "66kyzDR3R2WnHYscq4TaC8yuUKcRUTx7pTaFdesEk6aEbcjxVC4GWDnZh8TfCdTt4GUVJUvxVq3XTTZGKfvdcCzC",
  "key17": "3nMuWZxjsRnHLuF2sfDGRgfoWq7p7upAhUDk4vS3wFpPVvj7F5e5HtHS18LWznYPUoyYgApgpeyNDZ17jtJFRXjA",
  "key18": "MxrMGE7TU4eqRkrcgwzM6xAKg6GKSv89kQtc1R7ob2vA1vZQee38CY6KT6kWLpVb3LqijGn3ga9qpNMnYja5JCy",
  "key19": "2gRrN5uJuVSJQaSpxq3pLN8CnTwsZzjKC7Z8pBUGkNeVDGbExgwBguPFiiJWMJ7gaUNrJyg5Lzt44HxtrcDtJy5y",
  "key20": "5vq6HoPdtchEjVHS5W9okyHfcEa1jT9KppDJE91bnHuzrG3kpttDvD6tZbq9TbC8XaaAWrkuYnv3a3YHPZzAJjDx",
  "key21": "55fC16x7LXKNuS1zRm3jVavAsxq9DH6Y27qyhFTEbwANqhz8dx1bUTEPpL4qDtsJTQiM6ETSeoRdytEn3ZaeBzB6",
  "key22": "3XS89N4xxaN9rGtfPNtKgNTkbsonjkzEcPreq73esaDdjbqNy2MUPrnjJKxRKdZayydefeZE7sm9ze9kyMEum22A",
  "key23": "2bCH2nNzNRZZAte1Xmgq4jTja4KbVxYkEnGHpNECkEeihe97hupputeF4URGd1jeE5mmoMjVkXkoV9RDL3PQ6BKR",
  "key24": "4wPJrAvk38M4RBxqZ4pefaWksxbUEnyuWANfzbhFMD4hwFqdvJpVWJzxFEGiJu7eCuuFfyd28shxhaiv3cjsK5gW",
  "key25": "3k8XSoJwSA8TTW9uzXnQ6QgqfMqkRjAZ8wJkFwJdAdDCvAB6FWqprddHPKwQNvdicwem4BVUFMAMGmmTPLm4t41S",
  "key26": "4FrtRB63nasuFExZmDoS1CajKnFDpzNibwWAzcpagxnbhjJ8BKgm76fEGb1SHAToPfN62JcHZLJckdrvqLPLngYb",
  "key27": "3X8FJ2Z9TDmNgh36X4N4pFcdtG3j5rQ2iAMHVMBw9pk7q7QL9kRMUs2sEYBX4a4t4KjPmEEVHxBA47jGjnkKt8G5",
  "key28": "Tafn5ePMMtazcTZ2tXm4dKEJc71hzqCR86QViZ3hMZMAhgFPqEoGAkmbktz4qht76rigJTMSb5k9PQxmLK7dmj1",
  "key29": "3i4smUV8NMB8DQkeDC2FC7zAdvih1NLi84bKffCZuRsDMRV4TKWCVtUCvg1L75gY3Z6QpFRenc335Kt2eJG55KQo",
  "key30": "28r11erDMKYz74GiKVLyXGgdTC2L3cKdNE6bPEmXES8jKP81V6PRogdvnNfBGT9j25MD5AEkmUCc4pQibGGpaTQa",
  "key31": "3yq9DhqDeEwbrpboWtiNG7YyvrNHgfieqoLCkwhewE8Mhfk9R3YARYi1FnbWTRBAoZqcB4NYsufYq1BdzXcjVcpf",
  "key32": "5HjKGBzL5pTWWi9Tbw6DdqahEK6WE3uYizmpnexsUweriQ5X7yUBb8Fxi2PkNWpGw5NMygKzQHcZeDBPhExmQ4md"
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
