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
    "uH4CjHKnR6ywcFh72kuVVHEUBmvWrVBxycTyi749ohdSapYq9iz9k4hwarrLasKicu6vAVagPfajmFebzJkupd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y7WkJVwu7P7kSFkGNHxdNaozZX89FFChvHJKkM6AoUrLY78jfMnmbBNU2bLDM93YxxnmswWRZLJU3ySt4ph4NVX",
  "key1": "3cwpxhtXf4roPHD7p8wMFrxiKMfyuqiZzC2GYtMHUgsDry94947GcrX4PZ5tAkbVkPeZkwyLx9NSippBojNA9dzy",
  "key2": "4C6VSWDWPiGSFXFrLkff4EpuUyGKrETQ8ZDYAtjxQxdyNTYqp965Wnss5MYD2HdM2Xukw8zhd2WavVtTxaHGWFbk",
  "key3": "22NnwNJqzs9MJVUyi4CXaoWnmCmPXY1T7Hdh62EgvBiBL8N4D9tbyfY6w5dzH8qkF1Zk11nREQejnUWD82FyHeKd",
  "key4": "3NesaUwY3gn8MuV5K9XWx8LcXivMbnrW8jREoQhP1CMC932UPJ7YQenro56N9FgfjdxpMCnRRK5TUmAxd2jWFZbD",
  "key5": "cqgp1iRFW9UAzK33GB22rySNER4UkVtouGDiC6FhuH4SsX8o6uXsvse1FTR74gM9iMArtpJKdnyZLLEXvQ3eDYx",
  "key6": "3THmXvhxWgvFqkAn3u9pDa4Nxm4tGUPL31upLp3RdTXyFWuSdjhiEU1NJ4gnWqqWBVkv2SC4qjNqtvCLrM6fXruc",
  "key7": "3R2Dd44dntBD8wPaTJcq8vuCah777m2njvhZYTKjq2M2Z1a3B3U18BpZYacHGCsb5CKJr6MZ5jmn4r7UDJh7C8FC",
  "key8": "2E5H9TMxixwfmQdP8dMLzdmMRmxtQg9DodmQx9hieTUxPUx8xwttC8jTaEtKiNoQykJnfMofqFvhJAp25BkqPgcL",
  "key9": "624h2GTrWCZBuGvD6DtEaEjKQxBcjV3T9V11xQbyQ86wfwMje3biJ7CiJobiPW2TQLP8syYg45bd492LZbyb9w8D",
  "key10": "5JPHdoLjNEkebmZVfxLCCe9aDRpx1K3QjamdP21zH3wMZDvnkMusDGvnryGK6SWuL3kWzkgNRzhzDLcGuYhEtPgA",
  "key11": "37EGbNGa8asDXDAu1GGxjsQqRTug6cG6oqYwYaPTdQgJASeZqpANga1Sp1oaoNSpsnJpPpu9vHB4yaXhUovioG9Y",
  "key12": "4FdcbB2YnRQ9rVagUKZ3BkGySXaP8dTecN1CfWo1sAuBBQaijVPzCAUHU5VGyVtnkJUcKwjJ56qPzR6iiBRSvCkE",
  "key13": "5awQfWHJqH2LYdasfmZuYYdJVvPAY97uN1WgwkbyKYqMTw6GASRphw5ZktKg8pAtcMrFtrvEfjo2a1PQHwTU3Nb5",
  "key14": "nyEBecwaFd5uVzCD3G4ykzfyxfT9Kr2Es4Et1V6BbmHNCB4sHP4nhj9UrFzJGzJpbU8MbHEcjYYUDWFKLvw7aVC",
  "key15": "2bAvu63hJVycbQ27ndHPxt4kQWTohDvQvWpKpkCDbhhtK3bDU85tinJKVL2CYnMmVofSALHFLctzhQ2vUKQLMxZp",
  "key16": "5yVrERfYoehu3nZY1nz18qgcZ1pMNZqa4T3GjHb87v2uhmNnZLFL4jeFUn9SvgRhV3hQvwNaNqRN1XHNFNrAg2SA",
  "key17": "4hWNhkdL8ht2zhs8rhEvKrEXWeEsnygzMHmYYZSDoYyzvAPTHLcQ5HSSytQHmiGJ66hgSRbRPjQy2mRCAKRy3hqc",
  "key18": "PAZiznzxzpzXDHDspMGgQGDC3TJtsECdQiZ4wJQJtScPLv9uhPFq5wRYieBq6f6WrByWR4h8bjtCzpxAtxbGX1e",
  "key19": "5JAm4wgp2P6CJriSypCSc5g4rvAXAgo5viZZRxtdcjoZuaLHXAP5a8HDQ9BqFjsYAWb9A6M7h5bpsqj5upv1CQaD",
  "key20": "38GH1YYCgLTETjbzVeQ9BTAYL7mijaJi8c5nL3fBJuW51RaGiWwowvUynh8QHwW9Gx911uPaY2WWgwNWFANMGhD6",
  "key21": "2pYFYjSgaTcR55jBDYyVhaW6yD7sXnERNMWorRFDm84ALisKigYXqF15Ct7AxzXiaeYUAQY7EWrKsb4m8Gpr5cNz",
  "key22": "ug8UEzzvMwpYHrHsK9qHfwKPwLNGpTk354gTiXKiiDBTkzm7NQoz8KiZehVnaWxUMmo17AubXDtgWcyJiyqxyUN",
  "key23": "5K7qrm3J9WTbVu7AM1apckMyYe6Bf8BmTMTYbV4GSFTumNbdVPwPL9jJQ7YHPU5a5z2PHtSPuRQPx9SUDzKQzL1f",
  "key24": "4p97bz5uFkKSCGyQkW36eEQhG3ZsrPuKcEhKaq6W4fwRhBboANiXpGx1mNckeGqYwtcmKfcpNMhCqvmDJjh4gSNH"
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
