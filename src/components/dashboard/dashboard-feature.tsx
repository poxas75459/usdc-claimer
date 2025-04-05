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
    "4mXcasg5nHQiKGoJXaxhr1EmY46oFPgYavMY1CTT9PaNF3cW4D3LrT8aDV5Vt46RvBoDRTxymg3yGhPBu3z9Ni2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CG9sBMaFU8JGmLnZiYkokX7zKbaxvygAqY8vkKVT1wdV7hL628KUTePy7yVCcVM8KaM2ob9fLz3U2TaqFte7Kno",
  "key1": "VofKkjNvN3EzYVsPtCqCK1pqoTVfss5xbGjtXVaTDXhkcf7Cfv9McSrELPfEqhKbMfe2ADZRT8MvrQntvhuxS9v",
  "key2": "3ED7sB1UHSUuEwrFxaqzRdmBhx6yTLNCpfsZ5jDLhDybM98vxEdwmNDAxiastwqwfHdJv9S5woxCE5EwniXur2kr",
  "key3": "3BD9tMbAwP68nvsrjSHZbJhikSRkPaRgdij15y5rmzyeqq4nKxLVwZJnPrNqjYLa2ydkGnzif5wyzpFmZsaHawkX",
  "key4": "3mGpMERpJRPoLxTEpvfoVQo6TAhfLdUgbkaHeggBGMEShTYkydvKUmqXtWuxkVWQMjgprvLC9UJyc72Wh3f4RXJg",
  "key5": "38PBJRJNkzMW5MhknWrT7ptprJC98hepVqEPS3eVKqTy7CCDUH2W7uRx6NaviZbiect3kXL8zP86mQhrwJWBjfx7",
  "key6": "3LVDGbrCzNA8Dn5NbgwKEtGcfuxaNWQNQuBQwD97EJw6DVeU9K5SdgRNxPfsyfn9W3C2dYs7eZHDhw6uBajbDsx9",
  "key7": "66pWn56dPybj2CLTXE9VG9xkQ49bStYqjYT9FSWezMhrg2KtbZ2jwBSYCEwK4XhMYDQsr1dXZf22erdGdTJLPzYf",
  "key8": "6taHvtg5Hx4jErkT26mvGy6TCdg6vFULjjDpNJ24jMrLy3w9E9qi73ePiCEp9TbwS8eqMCZh27KxZAwQArwUQqH",
  "key9": "3r3Met49GDJMUK5P8LFGaWXWUFLBxpKP4nGTYLGmdsyPdaKhvVzNxvFxnbHWKQAu9HB7xgRV7w1Dwn3Xy4GEiNdb",
  "key10": "4AHAmbyYZYURPPDcfq4CL45x2uBNbfEQ4pNtV57AzDFDP1yFdiddvCjRAGM5uHuYYnar2GsEbZWcBsNF6qnEcKoN",
  "key11": "3WuFyAUDtp1Bomt6sVd3v4WT4YY7cjDcS5GNAdgdwVPWT5ZxRSSzajehQ7NNr3NwhPPqGa9aH7JmYf6xywKxAffS",
  "key12": "4RrwAecngDf6qczYCbfst3eDCcawtY2pAgBUq6sDzyWwEA4jELHzY5ueyJDC3yiZmbt7yKx4FdH2p5x1XEiGJ357",
  "key13": "5hHAmTWGXfpaZVs8Cps1Ux4yC9zC7Ft8rUqfv21pGH37uRQjNpGvcsjjLcsKEB2CHJuKTX6cFREMfAsxVtoSrtTf",
  "key14": "449E9sYMHYQ9qYSMdz4cAudcsyDRhuPV7ss4KgjWURuri2mK534PdQXBBFfYmjdFGGhdNBFX9qJBZn8P2FwtaHdP",
  "key15": "5yW9s2hhwXLaB7BtqErUvFcUKys3XpnPTJZtGLUjCBuddruZGuBmUBQQ2nZezQ3bdiA6BxhkojJhPqbugec2yWxi",
  "key16": "58vyeTZfupb9atxLgNyS9HS1anG6CjGhmqu1ezDyrogd495Bh9Zihmm7qqFC2TSBYZVUCnstmBeu1TCW8HJCqq1M",
  "key17": "5UhiqsVsLjAf7WT4wB6QroLYXjoLipMVXXEDwCToagjSCNcQMDbQnCeemkmmTKR2ZxjLMBmZAYSb5gUP43YRNSTK",
  "key18": "5d2cv52jH4P9znDy1B5aeUYh3BZhntHbuPCx6c6ScRGhQ83oGFrUpWHM7MXpTURd3Qwpm7qgujZuTNqSS71XiMUu",
  "key19": "3MFWg5Ba5kmmKD8CSThunmeDw7fiMYv3mwAZ2PMGaHVhGG9MNoSG32NUn3fAofjpsL6Y2ay8GtHFHyBi4nAvDfEt",
  "key20": "V9Q67NLUEAxK55W8jqsWXzrTeUpfayfaqfQ9fZ88PMVdFYKEyoCLTcC8DNRczamjPHng6dvNTbuekEtUZHo1rmX",
  "key21": "21NhykTdq49PfUgLeYLL4VExydnKSsjxBCZRJmP6ytLc1H2HDWZgNNKoBrYa31NeRrUNswtMRGn83JAZDNu14sve",
  "key22": "4HBXN2asC6rNxP2LTA9Pkq1DAv27Ts2Vr1nNFGJX1AjnpkKdGEjJPwdaheXuVuSTAaQdFo5x3S1EQdLurRb8RV9S",
  "key23": "44Jxu91Vax3frk1mNswESrc9cLrEUsbymZAD9C3jJVzPGkg74uvHgahnB7MZfLbJQocdAfn2bP2BpKobyoiSWpxp",
  "key24": "47gBJbzb2oRhpRFN6B5fr4ayjMch5cQrYVqTDqSsDwDkowPTkyqNiDyXukKDYfNCEKcoeF6tGMwDdLhAkZZAZMqT",
  "key25": "3Rj7mx1sfSEdcMbsWUC8o6vEhomvydgSGyeqCbq4qPkQmjyZ4RtGCqFEFwStEbMKK5QRUKuWVwYB21Rk5L3fj9Jw",
  "key26": "28vqDrNdHU1YHPhNHF5qoSn1CVeCKyUfYgRvuAtZeA5tpf7y29bP22ZgB2C6EMSSrVvbQoMBDbp2LFX94Qz9uT2r",
  "key27": "3tgysKDwY6rDtUkZE3M6cDj5e1uowxHyRUAsr16kkx5GizDLtpWbUMeBZafvnoazWKqGsPPvVgPrLYU3fApXQUMv",
  "key28": "5qF7JbJcdo1YGA9abJEhNSsGyaVVsEvKQgUZ8aG4e3U7SfiNr7KrodX6hvbioEyBShp7GxtQo9LbMMbtTeLzw5Zh",
  "key29": "5N8KayRGaLo4HjVnm7QP97dTGfJrzzvvQfNBbchriwqjt2DHPhp6q8b45cMqhZekzpzdfbKSU6ZKHuwVN2wG9Msk",
  "key30": "2B5tXUyQWB17NqM69V2FoWh7dkVPpuda4ore6KAW8F2NGVvVJzsUqKXpDsW2ih6VX8ZVBUcX6Hx9pVsyVXDGWvdu",
  "key31": "2ePs69QCKC6n3tyGSbgdZMe8u7wo9CdD5mU5ETw6XS7BrLu9wK6W8npj8CSyof91afdLtcxT42JxCPuvqQhf1HAC",
  "key32": "2onDkNtKdHEMiJGGNLe8wvAgZPe7KwXXXnVimhJmVyRVVvdkL6zMVPAa26tP93huCY7M1f4aF3wJx8xpW3NwwBJV"
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
