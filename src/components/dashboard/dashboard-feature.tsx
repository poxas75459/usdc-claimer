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
    "4Lutg27x6h5nG3MLsevW1szD4RkS8qkqNDwf2xjUg4A1VjcE5MtgRfn3851XVTRBhUn3tAHTf8XRvESsY6CGH6zy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iBF7uZum6Mn9C8srrajsEZPiH2j6bm7NoSF92Cs6GUF8ZVLzQYeBNKnYCbzjzcLNnzf6Hw3sHYsNLv6iyFqHyiv",
  "key1": "2f9FYkPWigDoAQ1sx1kZepnsSL2rJ1L2UtpKT4cVAzUDnTRXNQnFVSJigfpwFRfdRAFi8CDph69AdUBhxRivP25X",
  "key2": "eucQy5CsKM9nfBpfCUqvPRgtVH7asxdew8ezFhR3XQ14RmAwo3ffYs95NypxDTzpZPzVi4JmhHy1NWTsGJApteH",
  "key3": "qm7d3fGj16oGMzHg2wsG67f1Gqo4ZoaNGTxzcXmBSEMqsLHjgD87woeNwhnEhavdXFYjCoVvtJTywJddWjEwoJy",
  "key4": "3a3iPHo1x8ztrn7Vs5eqoNE2sjibkouAA1t7fykVNzxvvEpb9Zx4SYCPoR9HVpUPTpQc7zBBnioZHx2iiBMaGhFZ",
  "key5": "5Xo2dSqtC6zwSLLxTySye2KwLEbt5ULpV252iUyYbovNnLyFz77t3gW25SBmk1DtQQk16gBPYcZ44wXzemwrqQ3z",
  "key6": "4QpdcqHJh1z41kpMWJNnjPdAj7BP4Xdt5wxM4AAu4ci5kiXwFL75gp4vjap5fSxqSGnFqehNQ57qT4cyedMQDvtN",
  "key7": "36BetxzkEPzeQYcEeRThmVgUUYtuEwfpFRmCppPrQDzX6BW2L7RN1dMB7e3VGYZpnKHLftQiU35LPjZcGL9bc7hF",
  "key8": "3RjuNKFRyehjRaK7hMHH2HPd9tMtrgXAXopU7tFB1JFnCBDD6UHusYnJ4omUQqecgNc9wYBjjN3G2aaJvTGGKrEn",
  "key9": "3Ny6V4dnEG5pYk7wErpJ1KokjKURRoU4vthuj2PADK9dxaTXPm7mBLKyxWxu4vxom5bQnC6zvvUchWFt9fYeVyov",
  "key10": "61NaPvVYXET876fL1YvY6cVzjzv1fW9wcc1yKc23j4u67cGyx7xtyYASZ6EPY452LYxs1fbsPtKNk56ZYJL4yBNd",
  "key11": "5w8Y2FXyqpowvRviKUzDKAwQa2H7BT3MvSE6UMM3gEXaFVUFaZjMZ4GBVMNecU5oo2PuSWFvVYnaxVgMDy2axvP9",
  "key12": "69Hm53wycLScjd8xZGbiqdsza4xmYVaaNwET86yhDLzppnA3daEf5jHe5mX5HZFNnux1qWJfdciKCbriSuZtHsq",
  "key13": "29e9bpjXnMr4Rp8GoSZv972qdK7P26YyXVVa5po4bfqz7zzvfe9QxiNEMPKhzM5WWCUhQQ7drnbDpHN3fPmK41Aq",
  "key14": "4wDFsdaHznggm41Aaht9tJPnwYfBXqajFESRsavabmymQCUxEETUBDX5LQ1mebGidqmM6tqwsx3V6yFoxj433Kkd",
  "key15": "5k9uaxn14bjxNZtx1fvuaZfYnUVvpAmbBzAorLB4s4bkSVHUvAAareMK2Fd94uPeL6nS1DGBHg1h92RFrpjM8F6A",
  "key16": "4HxphRHVXa2NMrY6Fcj4MkxSDa61ZHxvRoYQU4ek2FigxPcndxwQNB4mT5Mevzo3WFYZ86dFosuDAazHXqjQnYGU",
  "key17": "44Fopp7iCbWdMkyxc3WsaoYgEdoFQjnKRkU3EK8m9tXv9K83bWfjgLdHUomNf6T4khV3P6nXqm7sbbJSMKSjM5iZ",
  "key18": "5stQZFS4zxhHdeKPgUzTgxfLRU3AP7Xcxr273qUsQyR1YJPESR1rdgAaaokdxuzQ7sQDkctZKum1o83mFmow42Rd",
  "key19": "56Mgj1i7sojwrPR7wNDyGgLAmZUdx1yBdoyhJeeJdmhtFuPFqTBsdfuiTxCr5SZR89uDKdnQF9FFqyou2VzV8Bnc",
  "key20": "4pDjwdLiAp6fawC2SQ5ViRZY14Bf7ZmWWcRef4bdM68Hfj4mnPEjffmB76pfzcWNCvUUyf2WsWz5nJRUjEEsYgHc",
  "key21": "35AoksYqXUrYUckhTcuDsEt4DyqtoK6BfYapCzak3BBw3FhCisrSxW5Ck129AemxbkuJfnTJUbW2c1TRyUq3FpLX",
  "key22": "4PhqNkei3SGEev2HeJdc1h6cbuakNLJCdjtNJDXCw8QVojgd566TvgMgkUXsbojzBj5a2RNqKFUVvXs6tzLyiVk7",
  "key23": "4yoiHN8gh3BcqmvoyqxMLeKvwpSFxasw8WzinSu7kfkmgrRcnFqJrTRTd4rDteqTttVMHhmzkndUtEBYeKbFWEfT",
  "key24": "4SHwsJ633VZeSzjmqkSoV1nSLoh37GbKTzYDwVeXJpC8cY7KdRyWaaDVQyGK5g1dySMt625TNyfVRi74t5Xj2NYr",
  "key25": "2wb8WBEdWebHzZDiPMMhJHnKAF4p22PWBt54acLnScj4GFTDJj1ah9SHo9hAcoqBCwCTuZzdeed2miGCHyF39o5Z",
  "key26": "46X9YewUa673p3ZvsCERMUGATMGjBiZUW8N9a8TuTFjteHmsLUCxoKBaT98wRap3gtKyqQLACvYofaotFHiT68Yw"
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
