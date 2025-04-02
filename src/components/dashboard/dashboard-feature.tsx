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
    "Cc9jUhXSdicTEJFAPqmu4Dosp6NuTpze6CWXMTVGCVzQp7cCcRkptxKdCjm1a1rN84b3u3iaU3UgHstaQgMsxgt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RYiQXawzFGZxNpBftEL4RSrNr7EqeMgiLkYuFX4wjbudQkMUsC5r1ZaGWbeB62cd3mJZ4fSfbMwRMnrS6ZZYKE7",
  "key1": "tWkStkccbdJqHkMcJf8nfMR29gpvDKeUmHt2cpK69wwbU1ohSFc3PGBhCc6dU4jpqg3BgrSrRuijnWibhJAv3Pt",
  "key2": "67WpuF5UbE1Eg4gKXnxWJq9TaxEbWsFiintZPGG541AucLiBFopXmx9PJvCWuktriR2A7JBYRmYjY3xMoqmbW5Rm",
  "key3": "2xvRjz28rX36G5LayZi8Fo3pw65kpih9JUAJZikYyNYDb3zMdmxRtN4w8HydsGHFsEQHxA6GNGhPT4cVRzmzPumZ",
  "key4": "4nXFoLjj56stb9fgCWMK2sqA75JaX3LuNqaXQRgjz8WXExiGJ8dbsN8AsoxMP3FcFWcHb2NXpXjq5Z4W3NtXeqWT",
  "key5": "3XLsJ5Ek9csL845MNX1Tp1dAuU13xM8mUr68UouTkidUBozzVDFKbyuNE1spc1BX8fiH9vGN4yWiYKiX7woBsk5u",
  "key6": "21ivdxXZD2P6Q4HpYzYbv9Zqxs2qSJmhFHLGmNSTWgUVemwMeRQpGMmfZcrA3wiHdvY9badypBhmXku1t2ERDWVB",
  "key7": "24C6brmQGdHpnbNL9cnwqTdESkdFD7zGjUz8kefq6oVL3X1g1Tf1jbciYuP1b19ihjLcb8ihD2c3L6DqxqGLwkbQ",
  "key8": "4uRQsNiC5RA3yP3XeRmtKfYW4Sqrb2UdtEoQmbk3wqS6eXCY9gsFkPNgDxhHf4fisdydyjPbti6e3Co3HecDPPSh",
  "key9": "4tZW1Lv4yvrkTQdzBXUFRFDffMLoz4RUD2oHKof529t6zi9x1LH6MQGmEqHXffeUSZ2yPDEhkfxPkfQPpQZ2WPFw",
  "key10": "3Yg7jL3yj7rrQdgSH33qdAM9LFzx8XbBhierGBiirG2QjeuHqho9rcB1R767LWUwhYvjKoNcYjXdtg2Diad7GvLr",
  "key11": "5XZ5QmMsv3AwVWoCPXjR4swPiFdBejwzAY7337t4N4zZi7eSitShQiV21mJbRD5jezQeSAT7KteaZNEbLuqBqavi",
  "key12": "2pMkcoxmJFgRVLFRRCDfBq9Z2gggTBME83rGFgKdhwGmBMboiveNZh2oWmjRUD7qJCCoxaH5swy44Lj8m5DaU12J",
  "key13": "4QWYbjvJexvSVkVpgy7AJmqAwBXoiZrLeMCvy1hDzfEDjsW7gq8TNN39cY8LtUcLmk94gMbacwG22ot7F5HQd1NZ",
  "key14": "xjXW8eL9J9JdTM8PwjYaGMrww36pVvME8zGsfffmBxks8xSkmrfLgKD6vM1R9aAD7ZEdXyiRNvY44ZHt1eo1jZg",
  "key15": "4rvVFmQTvQAw4S8N4Wj8fAyDKk3W342GubrGeTHYGtQjfiA9qNP5iCzmqE2dgxGqHJK9rym6UwVjF87Wg8aeDcNY",
  "key16": "5sntfUiNK7NwZpHc9duCSyiwJdjzFUyBSsB85DuAe8kysqpRnhuf3CabHU6LkKhmnGaCRQg1PACxyioKPgJGGWSF",
  "key17": "3ettfN7ScZyrnukJAVCeEEMAwvbUeJ2Rbb4iiAY7To7fLth7vz5C33Fg1tWv99D9Sjdb4Je9GM2FLLot2AECzt4H",
  "key18": "3tLaJ4DC34t5hsHsrdW8J8UibaKrED2hUwDP6f7jfvFLm6PibPmYnT1Vyde92jF5uDFpDcHQTKjPYuorCNUnEAzN",
  "key19": "3xS7ih8LqCXVGdLHQGkABTP6SLnpWEUJBuH1FNah9NfWFhVwoChbHm4EE2iHR18DiqKvdVic8gAXyr8Z2YnfwNvp",
  "key20": "4jRg2eAuSPcVfefYrKd6ZbUs6L7Vy1sF8WJMVoCErekJjTroDA79VX9ePW9F45JSxwdR6qiUUyXvbzuo9g9wkcM5",
  "key21": "3z1D8gP2EmpbttiaqVVCQjCbHfMZCd3TQWRzmLfu6ED3dbdCKxLUCYD1JrnkoFqYF117FqqUTN6U5MZDSJV4kD1",
  "key22": "LssRtxjxehoj15pGZJQn6WfK9wRQs1em9Kg7gKEfwipR534FM85xzYXJgn7rb8cM14wRgfwhJ1fbAbzRM4sFfN6",
  "key23": "4M4GV74ka99dfFJXApP7D8v7Az1f4PdZDx7FvA5H1HfpWJAi8HSv18yemRog3fgeJcvcGzdX3szsWqrMtiknfFYP",
  "key24": "MtKeL2s14up1gDbYxoZKRFdBT4twC9YAZvmYdjj8rxvX3z17vL2fyJcoVi3nxe8txswWUEkirUksgBhwfYLkYiy",
  "key25": "2y1LWFY4nA3bLENobtCpfHaP7wLKHUZBaosbWgsH9ZwRsB3LFaRsy4fNPqaaEnA4wRZywug4nEPzMqvfwVRibc6k",
  "key26": "m5sSnP3nU4gzSVu7p8FwdeNhyoaPxWFXTAmTZyMTwJ8MiwxfWFZHv8vrq2yzDTyfveTTXV6hiksQSNQDfhxR4sa",
  "key27": "3aYRpXvanCitkq3QmPaUSUZ6P9wwexqMSNQsgYwJ7VzgqKtJMx3R1FYmJCKxgAx4RbjsCvtPW8putzmsnxax6JZL"
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
