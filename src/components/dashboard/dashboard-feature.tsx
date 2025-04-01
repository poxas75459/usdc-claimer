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
    "2D8sLK29HuaKvXwAkbLdoZ7LfkfhyMmdcWaAskKmUGhhVN9GqxgH1LMYFPwpUF2azAm39swMJyYG5AYjHLUsDwSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jKfR7KbhyguywD8AFGJfPxZDFFSSsCxKvLDDQqofnyF6zVsNr7WJCGqB4KAgL9oMKSrGf7qrYnpWuP6N9SLdWL9",
  "key1": "4mXBsBEEYnpAG1kzUusS7YauiMxUqipX5f9AWv1Q9V3uUEKyDUnSuAwsv4RRpWh97RoLGVFesufwjDvSY5TuCg2V",
  "key2": "2EgGtZX332gh3vuPvwzrqtcQXSFDF4bogWtEijwqDxtP46XT3DapPGDCkzFzJRD4mVb9YiAzaHbKMyRuk1xGL7wH",
  "key3": "5YV29bzGyBGcvgNgewAS4iE3UxAhGnUQnx33pxD4nhM9AyzPgPWVBJSHdhtUjp1ZgNMGfExhsAdLRpPtKTwmWEZv",
  "key4": "4EuwPmYecB4FG6CTRm2aTkiXXiQPPJ16X2A8TVQUnJw1Ja4RLNTz5yg5P1m3FDP8mcyq6VK6NUr4EYQzZ9XjJNZh",
  "key5": "2VYRFk4ULTandmtD4L3AJvWdPVYN3PRt9DwA9M2ND1dUJiNfaVWbB7CyzGmD6BMjrLnJc8dso4ZCtqJewyoXygkP",
  "key6": "4DNPkXj4Prqy6pz6JQryEBzbbojFkEyDNXsx2QphVvhG6247vXsUr41sgETCwmjQWKgVosnyKK2jKn6jj8DPFe6j",
  "key7": "3AjJTGKtbtL47yE93ajZt9F57f7TuueVVB7Gsp9ZspfUog5ushuxMSswJqjbTi6imiXhdNUW5oqQviSbVAjjiMn8",
  "key8": "NsR9DBzzaJdb6taiwVaJeVUje75RrD5dVstYAu6fytiBFXovdZhGtTcbFMvNVgWjz1RkboZAKe1jTTDoXicWYfN",
  "key9": "3ZiffDS5UyG3JWKvNvmpPfHCQrTQ6fQFRUhozT7XADaZHJaUhWYMoKFwmRoY5hNthyP8JxbyNtVeAqzKPojpZoHH",
  "key10": "3C1ui4PVFRiD7asuzA2KyHtfKRUBSugXAgfNyYNiZ3n7NWC8urG4Gvjc9Hri8pxUJg2ruyXswQpJSnEPWaXsztTK",
  "key11": "32GAuPEpAAkhHPSMfkJk5kFRy2qC5pmWuzn6Riiw22VMF9BrAGB4AazC4D7GFx8cTD4L2tTVNYQRHWVagaMYhzTS",
  "key12": "4xhNHiSjQFbx8LCavQe7tozFFaZ8dEFgXyaEG15bqzUDZ5JH2x3oGNmQLmPjt695Yob9toeoGHx1pn1RHGxjMaui",
  "key13": "FtYcxeHkkZEDTXwkgqBHvYnawy4vBCSnRc7rxczoPGrS6gJVfGLhnt1VdRidrogrPQ2UHW6pd2JJtugveieHDby",
  "key14": "3f1DcMBAQ7HaVEri6xgTaDDCY7DHZaqL5Vj7QTeuK2D28fAro4KUmCYSS8HGomRuEKjBxjQ6CpjmvGYgbdqWXiBf",
  "key15": "ANytVSwxoPBKEU7WG2SYKrwaZV688uxwQZGESPrM9KEqMAahg8Sv1eyMRwakKdVHSC6tHezY2SVAJjTQ6ReZRag",
  "key16": "284f6NjnFfUubfzQ4bgt5Hhh5pNzKb452wsKGdscBuJ2NscZWyvbTLpv5dFhpxJ8QFXq7hc9TvjRTNAPqwQYPcwc",
  "key17": "34cekj7qTsC9jUsTVPEbDZTyGgsqSaMLww9XQjaZX2cZzDJvLZ3zzykVDp4W8mxrPL9u65SB4Uoh8hySrubaWPun",
  "key18": "3BMLjTdzv9imtERLSx4Joe4iG8qdiAFZdHSgCHfLjKZp41sw6rGeurFysXNodAF8JwFYLkZQzsR7Fq7w3mZifK8d",
  "key19": "5xVcSVXQqLhuskRVP3KpaKW1ZjrubdTfsTZQx6AK7WHZi46Y3VyYJtB4yrcFoEcTc7MFQyEkaP5dDtcTsyMu7vPi",
  "key20": "zV2SX8UVTECcz4g1dYKdsbFAVX7YyPBRFuETyt7p4AHKp7q5t2YUTvgZZwxJUTDi5kvtryy6X6KJPEgSqsAkCsR",
  "key21": "3XXkykWgFZku47V6nCyJe41frcUs2GRGCNFensHdwUsK71YzSabAM9ifp4kmG9eajzz9MXdSoLoXR4HmYYH3v36g",
  "key22": "5jTtp2YWYFcRecp5f4xGnEtYaUbXsA5tbZRDA4HDkyu6Arri7Qc2mfhhzCzaGfhupH9fi3nsGfP5RwzxcMmGUh2k",
  "key23": "47wv2aktgp5V6YQXBQBwVLni37T6GXr4pUqQ9pMqUndpGYQqYMVc4jJkMyDkkrjEcQMuuomdTkoZQfkpAn94TY8C",
  "key24": "4akQoEdudVPe3iN4HiA5ADm8Do8BYLuta2HuYd7c9P1v2zW6pTCxXtLGeB4wouyKs4JQWQsj71jpcERiX1W2LPxn",
  "key25": "3QtLvXmGiRH4BaDwNFAZELoEePuCKjvVxBByDyqgGnksbNo9nUp22QSayqXR19Bo5rV5yEemAnU9Asvjczn4MyUG",
  "key26": "34726poWvpXWwtRfuHPURZwPh4wMgeFu2zojxtzeCze2g5Q7XEYDsNgSTRHAPQAw7p1am6uvEojHf8DyWDvnBAni"
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
