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
    "cMcsMJhWL6H8RN39iQ2Nw6Gu9LrikH1DawwwmqnyQY1pqAWavWPL9apmJscmXf7h7GQdR83BekKRUoEEvkvjG7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J1fPR3yAHQzqVTB4WLPXnos1oBuFTGJA9oByi3hEJ7Uh5Wq1pA4Ae9YfvEY46Cxyxyc6jqfrw94mr1GroenPg6f",
  "key1": "2stGeUic3aKP64KzJF4ttJPxvPTRBGYMh1quRaY3F2aYkZ8Ywen3pDKt4GCwbJ4gBQcujpmyS1mBZDGyHM51WkVn",
  "key2": "3QhJPJjMJ2YrqKTeK6kohB4BAQeYbhPheShpVD3bTouuNKVP3d9PvpTm85JJaKJ6UQqzDL27a8eYTrDPbSykLWHP",
  "key3": "3ewyVszmDp5EAkrHsyLteRbj1jXRDK48LX6y5uBPiyTnL97ahJe7yWz1Uup2gdKsBqprDf1GGDaTtzEFpjsdt8EK",
  "key4": "5DYUni7r2onWogHJthreLXU53afu5n1km6aDNCrgxXeeEBq16bgLrkr1Hwev45mhmgDQ93ZVoeezxKvC5AiCKfRg",
  "key5": "66WbSgNpTPQdyF4Un2RtVExUKFuQKmfSXQqGK2mkYrzjfhpvAF5dgZTEA67SrQWLfRmi1AvpYB6swPSKZxBn4wKv",
  "key6": "33TDXVW7Nznt6MMPxZmuSsSE8okCpCg25mbW1kLAyqE5wJk9FLQdSsaX4Yywx8gvU3GPoDih3nZs4kLEWRYgPATf",
  "key7": "4yFGiKV9aLWU8AGArg82jqqEUwHMrRefoaxpoHMSeGmUGiWU3mTgwKiU2MXAo2gT6H3u8GNqiCKw2pgAuS9pXN3B",
  "key8": "2XCQJUSqBkpA8e3mevA8m17Hekh1CReAxb4ymcZvQ2BLbcasht81kyqDveWpzw87zD7WTmeWe5AqL4jrBMrRaywd",
  "key9": "2crxMceTJE5N6CFJ6QEptizGE5PPCw3AWpjuLkY7t8nRv9jHUodN2jbLRwP2JzLAf43Bck1vJLpR6NJ1HQzSQjPY",
  "key10": "54dEjDnhmQTabB7aD3bHgov6s9JhkZmyV421vNbsts736RB6Ku3zG5nixfvZ8X1FSVN1gBSUZwLo7JvCiKyH3gYr",
  "key11": "5Xx5pxK2CgwiMbe7rGaV9jHUr9rXUBMusZSz7mjVx3ueXBrLvXQNC9Jun1sDi4qRZ36JWZ19Pu3vNkXzQmssZqVo",
  "key12": "2R1JBu88eEgZSATQvpYiKLrGxybc8xHnwD2YhaVNWQzCPKfZBMDSLU7tWm1MYUusM2arnoZPVVgbK3pgQMyNQqPu",
  "key13": "RyWeMvYFYdSkrzU9kkzAHgwAciH96JobskB4sMJb31yVEd3h9hSaxQ5unM1xdXyaVwWtsDyDouo5iTrh9o9XHvV",
  "key14": "45WNNxQ1mc4zufZAEtL1o7rzdm3Hdon2kxjTmcF3Zu2tSCpZ7CeMovyZz2D2GjeyVCzGN3RkJn66t1Ywg1ESTDNa",
  "key15": "31aMP28Cx4juM1ZQB7kUu3EAv7A8vBDrqnKUysP6ZYTdEb7HL1rpuQMGrDT4yo65bha72ABQVZTwREPTNNEMoRfQ",
  "key16": "4mdPE1WpB8ysQFZeZhf8dXBXDvjfxPQrysNftem2urcDNXEjxjYQ2eXFbhNk3PJKEEAjcEdLaqxwhdHfyUJAaDoT",
  "key17": "4ukg2nszEcHEkCPgnpTEd8keyzbK4PScz6EXKX7No2nAMUkTkre9xtBMmWkBGpfJ4zrSTEsKAP8P72TEH4t1pvmk",
  "key18": "2S8qA5JvHx5DciyJGy63HB1dPEQ9Gq6x28s3EiLr8CoejKvWb4dgQU9QwLokGhecgXTJWpcUHGT8QtF5MJYKHzS2",
  "key19": "36JDGVCaELwW2MZCN8Hfh5zYmsHKvkvDTVbKSnN5yHtPdbaMwm5zGSm5jYfGdUkxxN3NugH583yk1kGfKwK6Nc7D",
  "key20": "47cYeqUTNXmucauoDey6GdhKGcPngZBDwk1kaTwypQ2uxXi4NkmqsxfGW5akdDbsSN5SCRuvS9Atp72rM118UW32",
  "key21": "35fLRkMTSCecWsJ2Q7uJ8MMujJJiaxx1UxkhWf6oMm5HEyjrMMpLt7dBWq5L7J76sEvjz988euDxqfa9FiFYqL88",
  "key22": "5tGNRN79Re24KeApcBYnhddG6Ly83a2dMesELVKc1CMSQcct4Zxzbdbgb1qtb6kY1su87LmtiKEr78URCJ69LGMW",
  "key23": "47tBdqESYEEmaM1cSPgcSFsNNPDpkC8qKoqysMfyPhFpQ9M251V2thocsZLA1i1qh4iGuLcz6vxbYXwfxFSNMJAC",
  "key24": "bVxkdgwmx4yet8YxTMoEEkZRUhdXVWGP7FaWDu7miSMPJM86MXMVXtetReGWhrxnwJiJuKbRH4KF4KDGc4ohhim"
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
