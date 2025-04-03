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
    "4PhqC9muL8QTL7Uf2PjQbnpWQi2mo7yuhTUWakBpbnKhvuWwCUiqD1EiWL4jooeQKynz9APbQZxpdkFcxZQWcqbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35rSJqKbQ7pSX9vwoZDPoLd1D7Nj4iEuaqUNPBX4eGeuynvFvHcTEiK7JP9FbpxSEJrJqKMj6ha95QHoB5FKi6Qz",
  "key1": "2fM95eUzsE9ov7GCJumm2NLwptF5dEJ4CgXB8m5U6GCNGhs8UEfMYyi4CpVeCDpxWruMoBQN3ExRBN9r1mY8emcg",
  "key2": "4pKbBEe5xR9SqrYMVT2hakzNQo8TrDRBNb2itUUUssxmVBX5eXUHaQE2w9i27y9Gfm7oQ6ndLepWmbnmkobGfCws",
  "key3": "2na66PZPA1tjdj3V7t2xgHZ5d5pcorqATpKWCDGJCiUG2MHRVmTmDh8kARaHRvHpp6J5WFvhKSprPR7yVKTV5mof",
  "key4": "3GVNjkKrLxTcsw1VAcoTfVAUiefUquq1SXq6qHupT2enudUrfvpfcj3eryd3PRANoXj1UhoWPn826e8Le2CZiGQX",
  "key5": "49dnsuPT9uxMu8he4uKjpwm5B2peSS9z7NvUmzWa4oJP2oQeC3gSidcQkTakEWrAECvDrCC85vhj2vRoyRxyQGgX",
  "key6": "2SyrdQgAU1JB1Bc54orc3gXT3xNa9m8QKecsou4WPr3YpVgjPaUNBsBVg8aYMGjx7aepTTRDcYFRY14JSxpqSNy6",
  "key7": "4WgUhb4WYRpMhxxkcpzwtAfe8W8pZ3YwK7V8bRVXqhhYuWJTQuUgA2C4Dsspxi4EGjmJk2GzZ2hGc6EhsaXvM1yA",
  "key8": "67dRcjauTcpQjBUo9o8YfynhSiFtTftKqYXYv8LTCfhSfNmRn8yiZnagkFgEQ3M1ND59bYSxipTqrFmPfjiaUNSL",
  "key9": "2mvKatL8NJ3CnwbPFWn7F83oMiySHRKXjgLzxfNNp9pBGd8nPgaJZGyrNMGNonmYJuDouwBfHAfFZAMN7jaG9D5R",
  "key10": "49cxhfQadiTd34nebRm4KoSMHfdMb9oPvT6cNF5Y5ck5VV6zq1GtbW9k8WAYRaRErPPvm8YRqX2rA3K4Do9hcKw6",
  "key11": "3LqzHE2ZcfV2WxQrGvGbDd9uZ18EwUfJGwaZNcQn38AWAAVV31wXKP4UzBouPtr6ZhCSxsXxJpftMgQc4p7HShuk",
  "key12": "4dNZ2ShvdFpNthQVCuPVsEzL21neRLaMEzxhTV7QtMLxm7YfZF8WNphdhP7GgMDQZSP3G723FnaX4YVS1vpJeQEJ",
  "key13": "2EdosHH3oNL7xCbgGvQzxMvwuCbGUfj4STto5f5LuqKuPuiECTMTAZJLNT6uWowuayjEeBTxMMFhpf6xNrKiMuxt",
  "key14": "5JocMM7gP5dQAcKpk5zAQEocForTkaV366HdrQWvurREHUsEQyijvUbuphfHR6L9X8FRxma8wJD6JdHA3t4W3QaW",
  "key15": "26PPaqqRRvuxJVMKv2J7cGwQjMV4bjxDMgb9NZCDT7nA8peeewkKKKCh8uvARA3tySr2SVhSeJ7EpE1G5UTr6Tt9",
  "key16": "645MdgMHnMph2Jutx6yuv862qUYvGccpAJkw6unRitapWHmWn2xaP18SSeZTnJ62Q4QbM38kD5V8mUTdGZVBPu6b",
  "key17": "27xhLZmf4shVbwwWtN5YzJDZr4YQB8jtT2dYLZd3zwNSieKXxFJNH1g232tS4rvzJotLgUMT3U6kn34uBZ3WRvPW",
  "key18": "2WdWuT6U1xwF5yCcbU86LCgj61bsMrWGHVYFc7M3zc7WD9NAFSodb5xxKjVQYH7vpC8ywAcdskBuiSwv2YmB5Dcs",
  "key19": "5nsTrJadwPSncUgCrhF7LhVnxhZKnjoyLWpmMc4WbYf7g58qeXwzaFT5bQfTn6pZhNW9uaaNQiTJbQ3hKcx1U8k6",
  "key20": "3hfs65zwyA5KyRXT6GTpxRZ6fqUMQwCeYgcnUGK8nvixBChhpm5ESuP2pEqWZVTYvZmVjRacgptHnyvHRpNmAqhi",
  "key21": "fNAGtf5kjhUEyHRQqh14mpZUhXnUMMQeRm8pGyuu18uaVJSYF3YXz7DHuH3at3vJuX5tfgdTE1pVidyCGwCDHsu",
  "key22": "2MiLDEzR2NhwpngYsbeVczJT6ukES9PoB1LVqVWahy8LeMbYkR6X39fHQy5YV7dCGXTGZWqCxX8u2S4kvBA64kD5",
  "key23": "wQkGA9swP2aMyzSAimZxXB4tj9gTtcTDzrFYhYwuHJe1J6ynCZPJfmfWWLXaNuSjsTkGmHxc24i368enVs3fH8B",
  "key24": "2u8YvrLbhq7c8VtZkTUpdwnUXgrfsaXbY1a6aDhaHHYtmd5vL19nn9DEsFqrxAQdFg9NG8nUkGnbmksvsCywR2Ky",
  "key25": "3F99ShQBnakST4ZKCZMbZ5yWUWA5Z1eRSBv7jMSWGBaugjBNfqT8bNbKqBfUCi5yE1iVghkTFiYC3tkNTgJtNhhW",
  "key26": "4b5Aqhm9k4ruoMJUn3keZSe91q9EfY44ZQ6WrmcdcwU9cFR3RahG8CdJWj8FopcTC88kgAdNSvMwgc1uAurEoTWi",
  "key27": "3sLirtxAcpDJB6gnXH7YKRjJb8sh7ESARCoEvbbujUz1Vhv3c3g6M7mCL5zm1HZ154XJaUqVRWU359c6vEkC7ufR",
  "key28": "vssB7zJ8XVcMUcr3x14rVnc8eAvG2ZuHsRZhsHABJx8o99VE6vbNtG5JKxATZJN36mwu7gcXSwDVagtrvrFkMBw",
  "key29": "2jyGQiLWmkN49ozrcEV81xdmh7VN5iBJL6ncMy6z1bLibShMeMTwJhBTPUHNfSaT3vYGA18jMKW7gq3ecUmC7G6c",
  "key30": "2JQV4eGkYVUFDTJmk2DJnz2dyeS6roWvc4JotTVp67xH74zjS837sG1YUQmPM2iANadRe35eY3V2Cs2BWQGrX3bi",
  "key31": "2nH64po4ai43HHkHAYhe17gxRT8mSJvqDWe733tp5o4wFksvTdmQycymFEi34UTAPRdFSpM2RizEp5t9oNyfm55d",
  "key32": "3gZFjovw8ikoupyLjYUrFci5J7WhraDjQAdUHvX5BNkrDJnuNPFzVCpJ9MRwE5TJooR7JAjdozM38g4UMvFdJbG6",
  "key33": "46GWZ5SndDMC1qLoYoajdWHVM9RZvLKarXuvQpKuW7eF44y2To3rsmHsrogTU8ia9c32n6ANq5o2HXpDFwFf4Cxy"
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
