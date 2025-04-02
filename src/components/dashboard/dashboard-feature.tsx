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
    "65nY861SebGAnv92ppm8eew8Z7pS3tsWvCnZJmo2Me5hooZrJfQBqxV6X5Q8kKDEZuad2gYZ9XGaTriQczetsv3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nQY1wXtXJBrfFUkjPMrXVtJmqN69PHZzns1jJ6T2L5XTSxi7MsdH9NtbQJGA3RhpGDo3LPru5Gc7aAsw7cHQ6Mi",
  "key1": "4CGpD4628W5ha9hJbrnsYgUnLDrm6qwvdeh5tMUVa85dRFUNgATLM21vz4s941QUHKxraQJzdxKv5cBzZAVLhjmj",
  "key2": "4RxLWCvG42mF9Q1NaGfVkLGQrCgrXKRbeE3op8Zj6R85qWKKytnPUEkS3zSrq57rger4WRLuYZ29QFLbZu9rGbUH",
  "key3": "4mvRtbF6BukGz1BfM9GxQC3cDGoMvzHQsgG51gL26snmrxrYyY6QwEKjx4oeQ8vw63GsCtkEpZDVsDLwzn1RAKam",
  "key4": "31u883z4rkYxPJbZnSDkgDE8UezUB3Py59dSkVKDNbEtekVSNzjKNisDeP1PqkVmWA7u4s1bvD1HkGRdMkUaWXdo",
  "key5": "2ZYwX7BG6xcXZjo2Q3AQbg7vSeXGgxvUPjtGejNTDKU5TpHBfnfk9mx3i1nsn2uW4orRDWDztbQMBnRAxSDKq6LM",
  "key6": "5SmfsTLjDFA1ZsnBk4S2MagKVUVGt6hh2WqJ7JhTHkKyXKJuFxrXVhUgnBYESugA1hdSX38mHZJUjVnMM1gUEL23",
  "key7": "4Rg3SSQo1oK6MDmwGY6KQU6new9kD4pPVdy3Spn4v4xpzmte3Ua4ZTeBUjhreuaJQ29FmKjsWf1FewYowAqQm4MD",
  "key8": "2gGgeZKTU29z8XP7nEYSavUJ1LETEv9iv9xPPRz9aUmHkwpHRPnyqp4XTDem5Zz56UfX51uK6fVDw8orWweQNj3Z",
  "key9": "3F67F4H91yAsAhmUXkJqQAaTSh3Up8xmXz5XYqL13RVAqFvqnWRwowV2i6TYiMc5z8W4WaQdwVvrtkX11uvDhq5b",
  "key10": "2k6sfiuccXsQTuLKnNZR9UABiUqzbaUJWN7fAMeY5a14LYEGzScrVESXZgHzm2EChdeeCTH7yNT7LnWWZrzJsBYR",
  "key11": "5Tb63AFzDnvMuek8BG26GSEhnwTUzvH7eHMuwXc8r4AsjqftS5dSmYoYJzEaXnCMh9saxBgRcRCdWhbczb7JpQ8R",
  "key12": "2TkeKyKw1uz1RPjMS5jNmrHbLVyFC9XKqajNhQ5fg33ByJT55Z6FnTkf6NaycwtwKRhHwzdoffYTJPYtBuSDu3rD",
  "key13": "4bWjgt8AoDtdyuPMzG8qc3hr1QPTU4UkpRYk25peaCCMVP7EMSzNvWmmPLuV6YnFeiKburnRniZYzGZyTxx36QVp",
  "key14": "5dkxJHhFhKYJQ6FxfqtUiucvytgvSvPEECemBiD5E4fSuosdEGTLLYdejJRFb6utZHbPZ9ceSYfvPadibZtYF8kB",
  "key15": "4iKfkwLVkeuYvswFxTdJ3FQYL26brM7A5dLnEEVSFmtSYmoghoDcz4CeHx67ouAQjNyjyzkAaKXZFd7crMwvcbQx",
  "key16": "2FV5NDPPC85epTLeATYpHi3XqGhAL8BbccQXSAaR2YqvtWMqpLCT39tdMVzgZAhBBkvBysbzke2u5NMwT8o2TiTL",
  "key17": "3ckaXQKN1GtMReVgYrz3gkTYH87K843Mb5w7Y7gwyWXcJCbDoBUokdqraJSafQQ4XsPUeNHivj27QDxVRYfnonkW",
  "key18": "4TPi7YotyM1oH2MsFXzysHyFQ2SuFSkAjRScaD8TF2D29wTCQqjuaUeKN8szbbaAz1LtpDwYj7odFeyk88ws9WcM",
  "key19": "5qZFqLkjtPnZsgCGWqnLuqBk2ybSvGrEXfoChB6j35EeRGzzZUN9VyGryLKnXSgNWrzf2pEKuMoAwVwMXByXwkAU",
  "key20": "JZboUSyAzR7DA55FjZTGsK4wv5Sm9KGQgF22JQeJKQbHVakVRXeZDN5aVc92kuAYoKJSBQZw5mj7ZwedNWfLPEN",
  "key21": "3WzVFfeVFNEimawftVWQRfMhLWxZYuSQvb3wVKCwaMc5JEFQwLVJp5697oSftj6xGLtHH15dbnzGqJPy4oMA7Kif",
  "key22": "5URDatQeScCKzTemdy3z8LQy6VMdoM4UfKYEdBpqRCRsiB6QUrha3ykeBDnN5DMWDu6ikMijgmGkCheb99HRcShJ",
  "key23": "3noQURzswn8vvYTyi4BiAeTC1WpBx7sQzeSCrJCHY3LWJcGsmjuHEpYsX32mMEGLD8XVcypjWz36hBAXMcsp74Ea",
  "key24": "5ham95fPEKJwu925mKzyYdP7NjE3DoZeb8TfLqSmSYWF7rDnCnvinfgRUeRsGtHkRPxMs7xankZaJ9VEnkgiNHL9",
  "key25": "tB83cyiTAzMdYv8nCx6xFLftWYHKBUMZPbrLCFdzx9W57a4ZzbtimYJY5RkPdy1LTiKKrfeoBBCGXAKMXWJAq2s",
  "key26": "5o89b4WDn6ZqiuqHp2ekbx7eVeCm8g21SWAGZJpM1boiD1qFjKSnegTznAYvTXmAjGzbqsSYWEo2Zc5HpzXvUsab",
  "key27": "5hFZL5DLYFkQTgDjrL5LSkvXBzyP2QmoaUKaq6CktWSVxSJw3os52S9rSXSvacPhMbMpQVKmGxZJ9PriHuAhULJF"
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
