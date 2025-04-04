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
    "3fZY696cPi4k34fhpPKNVHsF7YNPDZ6Tyb5BBZBgRsSUBsaQj4jRH7cfCQYPfiDE3W9GqCEfFkpy592mgDW97gfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oVSKU89EVg6KLUtRjxDoc7UUQpVZhvmbKUDWgsQhMCWNWMXNtrA1z5rjf8jvWQAAwRt28evs7AGyKosk5kznQvs",
  "key1": "3VUrJZpEfw3Y9F48zL4TH8meqxEUnGZWZTsypWdGHVeaHetXUm6h3tmNYuJBTZSgE9gHSbiEZq8yDTnywvHyg9Q4",
  "key2": "EtA6NXQQ5P5pEUeVf25br2uR54kWGunqwWMBJBgp4aXnT7m1vwbFEp6mCL72rpJd9DNwh7jj9RUHD6ApGDtwjcx",
  "key3": "26KQ5QAoMTBr1KnXiH69JSPpZfQNfuANqKVSAiV41jKESdQj7xEkdWF1JcG1MMRxLGRDkhCispvk9YfzrvUfPmnv",
  "key4": "4d43h8ckSjcMySEqcuYQTG11tE4ghrerNc7ULzoDnRt51d51FescT2zLtBWDmZyCjFivzNbQXorEsGmeHauWoVDj",
  "key5": "2a8Lmd4hsuqRWLakA3WgetQVZCKcd4EnmuPv5yqUzXRNaLNJj9uDiBbuBQHjLt2hG4ZMQs68BwzHTS6tpajTtmtV",
  "key6": "2NeHP6QiT5CVpiXSJpS3g6tCip5ZgHzdLbPcYtAVs8snjT89AFXdsd1vW4CkPe5bq1Utk7RDeqWfBtEexnqR8H6L",
  "key7": "2Egh9F181MfBuCCuJpPBJJ9NXN7Nf5CHdBmFAk1FRtYXaf4ZWGqvxxLmAhcygQUmrq6YkSyMpWDPtsTxuJ8MD6To",
  "key8": "3tP8JjejNAXL37vcDutV1cJF2Wf6kBNYgVoXN4RCAqZ8kh6thFok5gWe9vx1zd1pgB5WgC8Z8B3FYx6KDrkEfFub",
  "key9": "UDztVqsYjRHHhsvMtBUfksrPbDDEsW32um7Bfynm4yWVkkkRRu371syMo7zT6PnB4d1ZpYqPkHHqpNp7MsVjn6z",
  "key10": "37cVccz7n96Be7pL46qQWvBp3rZPH1ceGP1nWkbDuZ6y8JakhA6ZvZxzS1w2BLP2ppZDUuPRYG1f5LPa723ArzHX",
  "key11": "Ssq6i1UhzKQCyKtEE9Mfafhpg47Ha7VmWNwJy4vzqELUFxr95kDU2vbtEkQtVhP9YMafn3Dp8scAP5Szk5Hp2gr",
  "key12": "22hNQTJcAxkwvjcUY8iZjaQiAvc15juKYNHEdHdzePZ8i8q25RPG7hozUCL3Li7iCWtY584dF5LTvxGMt9ZZo4Qs",
  "key13": "3Ts3bvQb2Q8zfycmDgAjMc2jaUB6xDXKGbhwteRoJGinHmxQXL5p3zGaf1A6KuFCvowg89RaWh4TM14rZXSdNL1w",
  "key14": "ZjciaoF7RxBNFUkRRGuTbcQQvj264hSL6ZntyhWFR3GVVbFJuduzZArzcdksdKufVL7p6DNyvxbPUtjGshPrw13",
  "key15": "5ZBC8MovVnZFA47c1UVTYAascUPtfjwafqtkfAwZfnDiLeEuSQr8ffS3Ak9xuwNiqpBWAmQut7iVunSwQBgHaEkW",
  "key16": "3dRSENoGFYkaJLM2mFmCnbH98uuyqyCSige8MW3fQgz2CgMYZR88jDDMNn5fZwjvu9NaW1sdyj948CwZQhDSrXnH",
  "key17": "3XaAVeQ1yZQDCQuPsSnnXvv2dHzozmVtBYsMeZ8Dq62yLrRpa4GLYZCwoRcpCP5MwaF4Jh5hdUicRo694mCdJnnc",
  "key18": "4KDxUvC7V9y19o9GKHzSd1wm3ra5bFDiRzy7B5ZHgYDasuJR1mRHtyggomDT91CSokfBYPzxYqw1NCw2sDpbS8iY",
  "key19": "W9sbqfWHmRxDihYKoe5GzbJqr6Wouc8yDw9japVVU2LYStD5x6giLUKrQhfujY2PonATCoLfG3FY7piaKr9pBue",
  "key20": "3czkK1SNLRHqwxFbWFPDuLcurDf4Gu7mKRyYNUm78WsQn4c9vssTMndR8JUUQ45ui34pJb29o1vZFftaDapyw9Ur",
  "key21": "4CdbA7U3vwMwNRuv5pfv6M4GV7W4fL1JsGArNSrUmuhJ3tQYnWZRmEx2tCgfwHPGm4EJ3bvrqczWKcGHekmZmj2L",
  "key22": "54Ut3zFrQQ1wE8bYwVeqNiMpaHU6LDtYQo2SACzMoPyAytNuWZVAwnGBMp3GWmbUTxuGp8feehwm9CCjUYCNtCgW",
  "key23": "4wmsg818hGZbpUPZQWGojYhK9549QgifFjTQxNsiuKm1nhdZXeuaomyx8Qio9jSXEWDwFMajskEMVLvML9914di9",
  "key24": "iAw1GsHpYwz6YAg1ACbHeoconduzcjQJK1WU5TE2NkAVmCBWy18aX1VpBZJH5U7WXcoHh32gMk4nQpi5jgHGQXo",
  "key25": "21weRTFXMTM2G5vx6PXXUnaum8vv1tExu4hyBFb1UbWzeFAtdEpqtz3jnEnRrDPgRxFDLS8gxJV5XeiJaVLd5FUv"
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
