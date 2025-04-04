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
    "5pS7XDM2eE4CzNGDippSZPkAjxRfmJhg16orxfA6J1hpcfzrQvjBmDcgyYdv59s37QNtGrgx2sxkrWRBP1THTEWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28WKneuhYPcXukH2Dn76a8RJpEsVyuSUrjXZQNP33qc3idhMr4zxQts4Z2d5RueBBRWNyHzGyNpfJ6ayyiMxR93p",
  "key1": "2iCrtbkPQBspHE2A7ii669o2sxuF95zrZafoEdTNY9pyRxuS2ZnN6QFFfX6Dpvo3SRv84A9AfKVp9hsE3cD9mtaH",
  "key2": "4nqqdgu9zXMSJiv2K3EtnB8w6gNGnFse6XAft5ai9GotT1YdJJJnLNNxTgKeZ2LLMZGSnyhFK778vVEmaU2VB7wN",
  "key3": "4BKuaYvuy8DBGn98QHxfNHSQcvg6vAC2Noq8HEdM9zFgoMxDYNeHgiH7Ed3YGMnzWU6isDW2cRMebnRgyvuhQHZe",
  "key4": "PsRHunrxyNXugaZ2sTtZQg6PQhZTH5XGWdqsxZbtAMpjLTjYDXG9HsRBLCJKVT3SEZCUn6t52pSPJGPwPJAHVFc",
  "key5": "3EEX4LmRUgEqEYUXwsYW7qGjGBkraaGSJQyDzn9Nyb394R6t1mr2KpRFcQzLR7UUG6hKrXCC8kVQuqH1VsxYatfK",
  "key6": "5HixZmBLtptwvjdPxxaN7hkv8tJN5AxfnjjCny4YogCrnqosMGfyPJsCteBCE4toxLAoamxmj1TJd6oiPDQe1pAp",
  "key7": "28xLkMUysi67qz6EQCGyiFr1dACyz1RPRFyn1Rh6oSf6kS7BjgpHsoUEa52BuWczmWmDkhp9dy5BAV2SGF79xb8Z",
  "key8": "5Gqg8f2ahayHcoA35UXG2qk4WeQK3gdMMdNE11cPBFBkqnbMLZGiFEAqbzV8ughzoCFzoYqAcgXHGbzQfHdKK8df",
  "key9": "Ek4KfxRLsqVsbYWsoZEwVKNCKzqMT77sQMoWV7eWT4oHiuRrZKVAX9K1tdTnW7xMgaNCbDdchxr9Pp4L5tqnEZ6",
  "key10": "5hL43Kfawx5AMi2X1APV6VthWXt6PkLoavBYdkdQeCYksSrouN1MSyGBfqRfB7u2aFsHeDL42vcNxYCpUJrxGmfi",
  "key11": "2XgXBJvzETSvK34pKuqW8AUbvR1Yrvcia24AhyoBr1TrRxYp9V7UmJfe5xdaRhgyx6gmJQ6wZk7BRXVrp7XfSWQy",
  "key12": "5kNC3HKBWL7auXgi1Sz8Swt6va2cA5uRHbfP95AxJyGbUvBo2UPLMZFKYtfRf8xxFCY247fXh7vHBTjFU4sxQm1X",
  "key13": "37bZxDp7NY8uwo7dfQLhMNgrnFfjcLbfLwikozeuHSAKHW9QaH82tigNKhrzfVBiNpdtjELPC1W38kwvWcaiK1wY",
  "key14": "3NGhnAAi2EQw7fBtyf5mLBCqjnhKLzoCcfhG982vvc4XYaS9hj8kC35sAZhjZgJXMAN3mT5jf6gkAeZAUZRf5p38",
  "key15": "259ye7G1Lj8RSq31kkaVkSfcNujpox9nzTFPJC33ki3eVuih7pHpgcapJmmGWcRVTbaR7MRbEnTDcARcLdz6yBkz",
  "key16": "4Nj989dxGz2VuA5cvK3SrL7PGnQkLZLV5CDz5YhmnGdP84sakHkXbxifWWA38ffetnmoHuXDanryttkqJMUKxANz",
  "key17": "3goFXVryY63BwWs28oDk1wkJQ47PZUyJ2mu53TDCjFf9Rc7coK6eRTbHz9GGBiWMYmZfEewMmq4sHAuM8gfxzrPd",
  "key18": "4yXtP57UTNSjLnQxQHJ41PaD4H1vV2ucVNC9rK9JBsCkvgM1eF4XrEwXHRkzFnnBM5PzFfAvHKHru4cHoQqTid7s",
  "key19": "4P91LqB82FVJatZewxT9QE5F3c3zra3rFi9z4twDZCBZr57k9Fw5HKXC58zGb4eoNpCzQNJ5bqcYPx1GQeoNXhNE",
  "key20": "2JrcjuApQ8g6q4USYrr1Ayr4d4saKPdLh9R6q3asqNgRJYvM7tjUpMDNNDixrN8mXQerUYpLXMHQFUzxHE4pNQkX",
  "key21": "5ggWtrPMDvRZXFcwMqggj9ooQyLrkaj5iafWbNDhExKjgWGv4CQcj7vXHxXt6H2qaQNfbD6Q1PRKsFaGUcKBFMPx",
  "key22": "MbH3bQyPPNHEBtmewmW3JENhP62A4H7KRro1kE5yoqGNr6SXC2Wr1PUbXeM6ZXmQ8Beyc74Jb5D3p7fwfXfeaCC",
  "key23": "5NPFxWEGAaQvdmfNBzUESm6ssQYFiT5qdqFhpzG8gsCCL9djm3N4SNACuSAeG5Z2kZb3yw92mjn2uGX9v9KCJMUs",
  "key24": "5HsRW3rA3Sumh4erRcK8pGGqjufKuXiPywYdaGetAn5JNDw9BSk2TtSVFaTYBwiZryH7DYHc8D9hEhoWBDcugLoA",
  "key25": "5gWqBEpCaD6fwrBpeiEhQdd4WwBFCjFi9xzNeRqpCJeryW9gdYtEwq5Lj6oaurhT2WoPFgS58m8mjG9UDutPVqdy",
  "key26": "4jZogS7DhqvrvWSFmgv2nsnv9z6KjZ2rYDFcfDJJzQP6CbWBRvtVVn6umskXnBSmppC2v85vnudvD7Lxe5bjsdZa",
  "key27": "5FmeP5QTJWk2i6kDT13Eqhmx6aY2e3Sz2D3DdofLp5REwYB5keTDZNuwTZsiAhUbYLyKwMFUKrweBL9JZT5DZ43m",
  "key28": "5seexa9jaRNH9KAzURL46EdKrkW1uW3KrgcSC7XydnzuVma8QEebsHXmHsrAa42kHkHbhuMsRFfemXjjkqPQ67jA",
  "key29": "3crQVzyQmUPubPnSp2sw7WwbJpsA3ZuewwM2sHuVhD5yNL9Cem2raEGB8mQjVviMjLa7T56MFgUsw6q1ePFLjTxL",
  "key30": "McKDu5tZWB5gPsQbTL7XviH2q4aZTouaa7KeZveeHekxCKCGm1C4s5GeCn6EEnHnjUY9LBr8qndeN8GAtjdn3ih"
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
