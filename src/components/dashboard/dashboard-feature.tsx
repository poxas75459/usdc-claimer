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
    "5scDnKzqqozVxccFCckH4wZLbn4resvbdBCAVgoneuf5yMQgDpxZ11tC3ZEVMsD9NabqJyDzdgrS7245gGdp9v2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MTSBDeDfKqU1jrCsYNw39NWmao258Tg1RRUbLtEwoPG2Xq7ViRf3679dUhHJoxGo4ucK2Gp4rpKjuP1oMC4sFNV",
  "key1": "34iXpNQvKcWUVbw8ncRUxAgfRGdKWDBsfkwhwb42VtpyVvjFHUJ2XMcJLcGBxboBAxW47uGsB6kJZq2RQTPpcxyV",
  "key2": "3NYgXex6mbfTr7byb5pwVS28J328Mc6qD6RguVRvrx7zvXhvWmD91fskH5DbZ3Drcyuws1LL8hVVNPa6vkFNkmJk",
  "key3": "2bdj8aMBG14zfAmedZbwNAvAF8WumEVa8fiTnHyDyihQQhUKLctvtvxv7FhqC2srJ2rAzmwoR7btKk7PdRe7nNK8",
  "key4": "3t8BMSBqNe2h32LWC52dvxJDA7w3vdnGQVFpMk6WzEFky9k371cCW7nxjxFQnrDfxuXK87TALfujzxTrUJjiVJHB",
  "key5": "35CWBKfGBA91mSVvcQYGMjLFCaUzmFkYpxhVJvgbg8QFqha5PJTcvomiyaYU7TvdPH8ogkCoNTkWHdW7VK4wYijy",
  "key6": "4qSXDdF5xX36YfNjnjoWnJVApv23kYwuUNd9s4EXbaSc6kJinLMTb8j1vuUzH5MjEyCZ6wimtV3uyJU2hnPheT3h",
  "key7": "67Yx2g27ugbQnioLrgDWhj9QyqLgiVoGbvogzTENx6BtZKnvmfJs2Ttgy738o1NNPgC71KgcikGTRcWMRGGmFimn",
  "key8": "2EwxnN1TmmRA5TgVwNRQ7VWho2rdp2p5jYtnK354eLgnn3E2tW9P31qZ3KuCsMs4LcbuMTLVSUn22W3UJHacN6Lv",
  "key9": "449L1iViVciiTZgqXdH519jXP64ZwExdXQkfFBPegCncQHzSsQ8S2jd7FQ22YmxGCgwHikBY47FyuCLygj3donTJ",
  "key10": "4rHNgvLGKVkE2k2mtvQa61hL4pSkxzjJysiR882wRECn2SgGvaSFyyFS4pouxtUjhJ3Dju3uNHg4owzUujmzLY2h",
  "key11": "64CNqT54oWaUKAojz4wkxTyxsTKrnTQ79gGie3CqVFpMLXN4ivAqCzcCwKrKgaSbJrgF8QC5h8uE1VjfKvADVde9",
  "key12": "2xauVwkuiSqQUbPoiZ5ACmReBvEjCgGyKKEGLXU5joRGAqNWnApG6PSR5FLhqXQmztGFAzuaxPcC42ugzf7fs8AQ",
  "key13": "3HcNaCDTEmNMRAfUTHHRsCR4PBtHh9VAUiHf6eprSZrGKEaFPRjmSs49stKUxQkQrizxMC7vzMEAfiGboGsZ9ZKF",
  "key14": "h1fRUbHoq6kKfYSdH4wSGcNtGuj9UQYqYw5sC3XyNHymo92whh5o2vPEZMhSU57gbvmav1j5skn8N6QHEQjaJUP",
  "key15": "5yAfx8bQk3mrKQh14DdankH6d7GAZnf7YwJHRTm7Epu2SNpXVWpnoLWpBFjRnBGfPjqMiiqV598Sh8tcL2cxQAfU",
  "key16": "3vDxosSf5MvdfwEeQyVschKfQQJYHyoiRCTKoCHhHxomAa178UKe8fu5vpqsR6bmgqQR65WMZU6BmkBER3Fck33Y",
  "key17": "25eY3VWRwb7bBQjRimU9nAvfHHF3roqCzQBhgtzHy4M8YJEznum1MS8yEuZtntoAvkYbJZiNw9rZxzjKXDj9Yh3x",
  "key18": "GnWAqWfb6Ynedgi9oz8LZ9J1aeewo3zJ35AjPsQFe8g1qMH1VyxfUuSv2BbvPXQH1ZaFW8V6sp9mKwCzRhMyGrd",
  "key19": "sUNpk85gUGqizbjXCKvf2EAQAqLTaCPw5dT9afqQzWtjGk5cq8gu4g4QWh2t84AydKFWCeRbHKt8JBwwzFBLtnf",
  "key20": "2UswNxzAa6eKCcVeXFYxZQoSP3VELEJAKBSDL5inNMmwtWyU8EFYK2tWy9Sdsaoh1vvHVazyqpBPfPscHTMBZrsy",
  "key21": "2QrdcvutV4oRxFC4x8V9cWSJbi25Yesiwu4spL1w5fCws9V4cbbaMhWcBVA6UDSWzkRoq39MZDotrz9NyspdJLGC",
  "key22": "2wiTFUqNp7Qm3YsH3QSiu35Yg3wGzYEPAJ7nzSehF1kBdsJ72pHmW8TPefbJsfQQWMP9Mtc4ageXz4P5TTtCViBs",
  "key23": "AUBcknMEqpEvpznKiCdwUgiXZBSUh3vdqr2TxqZ45q4myRjq8mfeMtCizTqYa9KxBPuZ76zcatxkeXaZZ5c8q3w",
  "key24": "4WoyTq2ivYP5Lq3seNsLRYrTTJahdHthYioxXSr9y4vdHs8zyKjtK9ViCSrPTrG5ZzFdSfd5aaNn7JhPMyRb6UB4",
  "key25": "2Sj8Q6S8iwB4rpD5dVkPWRWQh9J9LgXGeNQd18UBraDVE8RnjXSgwJuYrXeUJehykcBhhzWU4Fy4eLG5C4bMfKxq",
  "key26": "3smyaLartvjCVK38SfRpQYMfuSLnRw3Fbtt8BmBKxjteZnvLfF16MGwFP6p5EuLcD2r8JnLm6ZaGPB4h3NJ62GV"
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
