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
    "5Y2AmUyJ2vrAaDwTqcqvbaTrrrgfXi8ea12oxL9BXuzGwa9yZa5FbEjR1J3nS49kWzyqCjVQCdvXyVZ2Zj2bo1Dn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z1mjM4Ga9BGJPm7Jor9MzL553v81zKn1udtnyvuetLKSS56gnxEXGNE9gN9Bc8rDDtM7GEaXsuyZfo2M3K2hYev",
  "key1": "JhsdtBB8L3rAp1zAZ8Z9AHZKJtYm9JxFLCcBDstB3WkqTjBc6jJuN7vH5TpnUa1nWBY8mQi1vKs8XGWsyKBKBaZ",
  "key2": "5nT9i5k6Kb14svNfb1u6GG2K1aa4bUz27dFZQjzz7wW5h2qobpGYveTvxaViP4J2bJK86hsp8NQWdwuz7KNFECSw",
  "key3": "4Yg7qY3vtJ7kkvcqEoAmCddyjLnHoTazF7iBr2t3pSgaZgC21RFyCXHQakr1d8fE5mSeGiQwGmAKt5W24JTbSRHH",
  "key4": "4J1uL5CpsY38EFM4nQBarh1nhxceNRpiTg7SyVpaVSo1Pd6qYLHBcpRc4VLaDpKbvGBSdX25AC86nyxu2wZm7Rf9",
  "key5": "378MuLsKxEfVhvjMuBfTKyMcUtrCdsG3bZMWMY6iygXmZdnxFja8i2Xfh5kNWeCCveeUNmiRc2xQerZLiKieJZXK",
  "key6": "4758XfTuxVoQsz2Zagyvvq6NohT7hXpgFjZtUq3QuKSoQoCHbGNHtWHCxqt648SdxigKNaKPa8bSNHPPaMdP4v1z",
  "key7": "3LnQYPpVYZPjNa7v5XwPe1WfHMuYysXad4k5C89Qq2SpoeV4BSGUPAitAyY7A1z7n4ZLSMbJTA3n5tNbKpF7Hsow",
  "key8": "h3xZuibkUQqSMUrQVxL4UoXa7ckf2EezjEmaHjrS65pt9fhR7zay6kcbayiadcJfjLCfsafe9kjoLctgPqYamF9",
  "key9": "57VX8A2G3oqtucnfWZZqM1X71wZzQX8jhSWPceG1J3GQuYvZuAX2rZX2365zLH9GeABe9jy3txzptun1H7MtfKEz",
  "key10": "4oSb34NjB1jo8WUgQhNs33GPY9JduYBLyxhbAbMrrkpASCtpP2ArfFg2DG9nE2E3Qdtxi7jcoDoqpPkxvtpTrbTT",
  "key11": "2wyHQdbibGkkeJDpf7dBuBqMYVggKWyAFZJ6dCjbFESQGWuaVefoAcmNfSMCwPsT4DM12AznHbg3a8yjNiTagrAi",
  "key12": "51zBNGbiNTKBQSUjZ471nAF6hBpfC21bZwiJjsPTLLwVjKpWkQKfuTaMe9jh2x4SKqB4FYyUaKTzTfWwRhJEPZ2w",
  "key13": "jF3dLfGRMtMHKhkeYe5eyPKsUVKy8g237tUwTZmFtP8tn4EiiHi3PtMYun7aJCoJsACoD7cXxD4oXUUnzS6mK9d",
  "key14": "4v4QNkm8ML4hp3uAq6xeNscWt8Xbch3i2Mo5RBFE64XT3R4qP6nKFq2yrAtDNqeZGRFzinNyBwfMcD3pat7UH48V",
  "key15": "iWUq87Uwc36fuj5X15zDBypEGiKnNVrys2Aew65uRBtBNA1qrRPXRdoXTL1hUY79pwGb27wtVhZP5LR1viKiTtP",
  "key16": "3WP1RZgMKnKSYWsihyRqC4W8H35UvtdGJ1LZ2r69354esv39Qv9oEaZtdH4kEcSbuNx3b4tQLFXhJEXzSXPVGXx3",
  "key17": "4ZuDF4iLdMNJqXhStNQWLQjNB3KxgSYi1u3AZ2dp4FQvtauabA3nr4hYvC6Mu2tB1uJGMDQZ1QhjvCkA7HoqYT2H",
  "key18": "2TUmS59x8QffHJPedxeMxtJiVoNr8xJueAUvxfSugtMQ9EXu5sBLLtkvRGTvDPg6gKhxtHcxUWBu3DnhoEZKoVMG",
  "key19": "5yJF9dpoF4bTYYjPzgmDTipGvkrtCQ2TzLsUhtQmfB39utZiLa1QmUBkNkSYgUcRa41fLRmvGxTSu9zM88BqCxaG",
  "key20": "2MDUVdffYCdSbfsaUW8jtthmfYCcnzxwLfYaY2SQK4BUVtN5VxSVPkqP27tJTkdaV1Cn5XkZZ6Tt5TQCZ4cDCeYU",
  "key21": "5gSaCsqrKaGdsyXoDSZZk6QdQ7c7Dg6ry9Mwnzr8myvsX7NTM2cc1aMuxsm1ShcMEVShAyBiUjC1QYQKEBK2FUvT",
  "key22": "RuDpAULuiqrKeTkmB4ycDc4EfkP6pThHKi6C2wpbEeNfKQ6F9RZRTM8Cq2H3PLVdykgo865AK2XeXNaowTxUipK",
  "key23": "5fNNm4j9RCm3DY5Evo7rqFEXkz1Hbcf6pFFwULvLV3biFvpLZ4suPWbwusLYDzf4ATsh67jrdADJEDJwrdg4Aivy",
  "key24": "bDHhUHudpBCj2BGYKhL9uvveUMtsZdAUazsCLkvgM3HB7g9h9KybxuVAKcyeFwzLCJmAY33pkTSdZTCVVAo6T7L",
  "key25": "oQ29SUxwrNrzjCjc8G2JkAG2ShrTvrDgPm58XfHHtpWeZEPrJUbZyecsDFRgYsMzMjDrusnjb3HH5D623rYdKm9",
  "key26": "FSepxmZy7xFHJKFm7Jp1WUrAZJEVikiofqcmX3dBzLr5DuLoqPXDMdqk1Nxk737eaUAaE7jLfyLD59ympYw8Lg5",
  "key27": "hw2DAX7PyREzEhjFioPYv8Zqc1JSFsndLx7P5xpNpDGeJ9CKKK5dExXydbjgLfY3F72GLZXPAaCqEw6hJMw7MXX",
  "key28": "3zqA7ZiWNKiYPpzzmxVRPBTevpPUnqtwmrG34ceEoaDknggsSX1bYpGGcA2TXLrTY7AgeEFYLXZ68fKyvbJoCXFU",
  "key29": "4RXAMMssdGjL9tSMH6Q5csuXQ8q8WCpVQMeoqaJPmH3eLLJ6dcizhTR1x7N1JNkTXVsAGw4Z1fNcf7aBCReWeSuu",
  "key30": "2wUkeCxghtKdDgDhxvNCaRFEA7RNZZv7gKxRmKLCUctYntcyFFfmEGrfnhFKqeVrWJ9kt1uAy5Mu3VsqRX4LxTFb",
  "key31": "4b4xiPT9Exn2tBFBYVaBbNLmXiYBupBd8jkwkb6JJuV6DZMRXRXimu3udzWwc4x4qgGM7X6fz18XxYBNCwASFCqK",
  "key32": "wQiTAcuZM24tR3TdGEKMb4ryLjicNuanmKySAwv5TrQzGref6bnv7yc3Y9zu63fiRk7kS3ww7MquVhcxoddChwv",
  "key33": "xkEU1TTR7jbAF2riPaw1Bmn4TpeovXSqhYHz8nSiQucQTq1QgEPYg9aRPb1E8hakx2u98Lss71m25ynZL9whjvD"
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
