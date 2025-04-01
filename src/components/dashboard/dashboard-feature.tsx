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
    "GDGu9mYDGcdJr6JVyMBrGsKHaWdcxSVhzdw7PhqTjuN4kT8Wxq8JHczokiE11Et3EitVM36isVAVeQ6Y5zPLCb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "547AfyuThiRbnxWoEaKr4Uy4aei92KaoStc5B8xQmroCx9KcC27yMNnjsXui1cw7v244hmn3sn33cqkQ4S2zdGrj",
  "key1": "41Serw2hBw21h2JuB8Zj5R7hPb1WZkd1KbPfBtF1KoHvqA6xujwgXh4TMZFnpoo18S98ZBk6znWbbj3gKAdNdhej",
  "key2": "4wrNxezD18sfBvrBMR3akgFJvWJo7YpURaTKcQaWbH993BtfquyJEP46djrsSQWQWnbHk8NPbRDe3owRhQ9fwFxf",
  "key3": "4jJvtgZ6pdzwrkzKpAnXvcNGRLcXs9CJDLKM1Kgbv3HUQesNGaQm4EnWboYwGBCHSoums75d2t6BFwH84mJ2nRnW",
  "key4": "5WStTku4jarwaarrjzWPqmWx5iRyFqEmwoR6LDRtcXKxxKa6kyq9BLr7djvfG3BYo2Us4jWRbbyDD1QFwWndKwWD",
  "key5": "53pukstgxAPavB3GShctVYvap7QWRqJPYPbVwmv5PPQizroR3XMGV4c196GF4pAMGGHZXuJHRuxamhGFge1QDu7u",
  "key6": "3Ujot8vLFeQEF76AXHBDP9kMSbMFbVjvr5sD4JVxGkTx7FLQQ8MVY672Bov9tjXoAn3KA6f898G4oKrqWvUsC1mw",
  "key7": "5vUxBMajDEtrs4mUW3qdR62n6xJDmn86kgcCy8BM8sFYCbwDYyZmT3kLNQoYViSbzEabiLa4exaphs3CQUkk2PSh",
  "key8": "5Pn89a6fQ6PXJDHBgcWnNSZkyFTtjRXjDjWYZsFCXppnQA5845c5anzANiHkLfR4JwqLK5JNT2HUJcMjTGsniT9M",
  "key9": "jVeECUnSRyp4HBn4epbWPF6C97b9DQ4yeDtAaxFXpyVPQaNJ85QPeT26wPpzjeexYoLSaoCK3nhrVcbmjBXPEMo",
  "key10": "3594AJrdEiNmXCEKqNuCfVm28pvJr9DH4pANGMZsw8YSZR47XSMEtGiJQqJ4FXQFmQWiXWD5Y9LmgrmbNmkNBbGs",
  "key11": "QW1NGrQnGfrBFs3YEPUTGTB8hgZyvCt74GsHo32973woDD18rQi2nB9ZjuXRFoi2tYSxbsQSEagAQs6XB1AnRzN",
  "key12": "PNvX4hBe6SCoYDu3KmLNcVqgQ1izgLiBiyDEabTn9YJRswmDdomVxMXp84ptx8B8n3EqKnTazAun7cSPcyj9MxV",
  "key13": "3mZQGwPTy2LHYyyDYwGdJCwr681nBg8FCB7L6vzT6fYBUk3QEJ6ccdJYbeciudpqa6mZLo29vSx1W3X3QEvf7g9M",
  "key14": "4YMJxWHTiH6oMxgcLxu3te42gyPsSUZkTJfP5uB6wRHCRfzGWvqNyG2exxqJTqQJCid7hPuxSvC8actU8C2bVY2F",
  "key15": "2qULdjn7U6vDKDcfmzx8buhhCBe3WjdSD8uArPSv8DfakX2mTk9Vz2ob4po19GFfa9UucKVAUkHzPNh3pJ5R1GeS",
  "key16": "3qjUyQkWWC1YRnXEdXCtwkFsZF5qJ3FGfCFXebT9jkFdUC6hG1Xjq2PefNwjLmEJSsYiNqYZ4ZXSfc4BNK25FfrV",
  "key17": "3EYvNZ2F5PwqygYT4fcbGnZxmj5KAKS4FmUYkaqR52XfmWETQZzWb9g62ADamTcmhrABSSs4vKFcGR31qNBr4nMF",
  "key18": "q4VMPUD3wFmGCrTnUVwtmJX3ePNv6YddVyDNBMozoZqLgmQFjKYc356bHu8XDeWVKPjaH6kdW8bwaaRpKNqwtu6",
  "key19": "3ETtsSyhkaaySmMW5qpoR1mKQKfiJDUu4dZcbUJzRarDme1jEU5oPx8U3WXZdiVszvyWbPXvnLAvC7vSYQZfQUtn",
  "key20": "PoFfSnXm88MPgFWhTEsJTuJcSyvhR7HsnHGQDJXhuZoL2JB1CTKFtPkSWDzccEMbeF27T6x9csrmH5jmi2zLNuN",
  "key21": "5Br4AomQt4wjQmcEQgWZQSHLgZnYMYfQ2Ea8MVQzcHN2hmUn7mfryCuQcwXZxvs3cQrev4b32xHeNLd6ETK8Fq44",
  "key22": "4HyDgmkUzcfm7W9ZggMsg92rcy3CLkGYdo5RGreaFgj6ry1QxYatZg641xDr5xuYovJYUj6iJLrktDZ2qvx8xjyj",
  "key23": "5LxjqavjvhmHs1QexgA7HuAWYaUPHKaTgj7spWnRHbPKngxrq6zHiX9UDaxeNR2e2HRxTp1rpnMAAdk2g8qSjgKr",
  "key24": "2iQbrd3U94BCXcKUouvaMhAcYjhjkoesLNF98Z6fURSLYxHWFFFv9axtAwwHj7koC4wXCedfzeZwjHP4c6JvKKsg",
  "key25": "AkzCi2mPY1LsLEokDexdor323upmEK8ok7NaQ2AUP9mgQaNrgTdRKL6AhTkq8St2PrRm9fdzE8g8cmcMWv1fJHM"
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
