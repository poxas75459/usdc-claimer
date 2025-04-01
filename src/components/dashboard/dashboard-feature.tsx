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
    "YSsGnVDYGPA75rStQquZ4JcmvNghAJjuegKn4M2HoJvASrc3QkR1zZZio9cHm4r2Mf3sY11UDevyNeLQRDwRbQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5snu5Adk4i1LUBvouuoT3VFRAQ4DFCzGR1cFGPxVf1mqat1K1m78ZpRJGcF1wJ6aXuCyqueJmqeA62GWYVKM2gdh",
  "key1": "bq7C7AmDyxwXfJhU6q4XWo1MUrLfkW37Pt73h3ABcoea4R7rPW8n9UphXCF4X4phB4zXFpy8f6yPLsGB6hMNJ6E",
  "key2": "J1R4VcHLAZrVC3KWH9qNRJ3YV3zC4HD8tB9paHT6g63inV3EmLr3qSzPXsUj9PA7ksqcT8z5LNP2zdRxFEKGnKi",
  "key3": "5arhWoEa4Fo3qdeGhLsjS8NVwGNAucESiJNQSruiSK5BfZ3gJ8UfpvjRVMtkfRLHuHnMZAhHTTgiXksuYBjUXH4b",
  "key4": "5AD7mLcsRY4XKzogSMWeWh7P1uPRic7erU15LqDSRbsU59pn1W5zwUZRyiR5vkRqjR2ERjBKm8paNFq7vMRA9EUw",
  "key5": "4STMdiY15cXah5MfyhnFA2akwi5AUuoBpSH19eQArJjDxP9VAPe3nopAPKbzcMgJkxfmGstJGVwaVtG3NGQjSS3c",
  "key6": "kMPWQWP1e64kB2efq8FWyJFwUkgSt5qXa4FgZ9x415jLnTfsHjDyRb2KcYwP6cTPaweA3kX29VATZE1VJUddSDe",
  "key7": "4611kzncRQ6fp36wh78YqB6AYhiBsxYXMRecijEaCKq45APv3c1odYg5AvW7yT8XvY1h6iLhKTGsncFwdTiYn3t4",
  "key8": "5kTqEzftEwV1hV65H3adYL4v5DvNFmWqTdwRWUYUTWnTPquuzPDErDNi3kzVJ1pw7mVmr3w7gFfvW6KAAJbajwFm",
  "key9": "2oxWcpdeogC4FAyCnQw5253hnu1L1P4hhHF9bq7eGoXrojg5GcmpDXJghgj9RvZYKvURKMnbJJJ9HW6cmVjXmaeP",
  "key10": "3n6tV4CFrTVz6eXHcNeJ3vvtJTNBPgPhLqqEMmNQJDSNs1cwrjCqoDoqq6o7J9AmUCTGLJChuNYbTZLX1DSgqRyB",
  "key11": "3WkoAm243e1idm7YQcKC7VRmm18aPmvgbtsMZokzM37HzRaCiJtx2ZiGHWowYuj5gS2Fui8tzSF4SJdJvjQHRnrQ",
  "key12": "PnYwUA7h9tNzHmLLmxyqJJL5qYvMYkpbhfuG15dQoADkrkv5betaPwA9cdJVacasnn3sYCh48ivVuHAEW13rizy",
  "key13": "4uBQ5wXazSpwi4BUkkcGkqVSG6PLNE9RHpd1CYDSRWRtbP9vf1NypGA72dHVqupKNHChmSP4BWoc5EZJ6BYeprCv",
  "key14": "HMqmLb1Aw4ZDZwsjGwuaRozXBoRoHk7kXEkXoo6BJZCdbBE3NFn39rXWXe88ckXMjjyQwV7CfFirukCDEyaZj7D",
  "key15": "2dvPgum8Rd7ge2eVyjXsED9CQostkv88Bg9TwV3LTMPfPQUJT73AWHEnftScdgr49hqxzWKnBVRSBrunsZjESQL5",
  "key16": "3WobHMXujShaTjFEu8MsQ6cYQgC39xRUsTRbdLkvE1FezCww9DG9n5M4oJEChdLZwiFwwjgkLkdywS9mo7pWxNrh",
  "key17": "2zuTh7rm8akK5Ekknyw9QSAfBenhVHwuSE9gi4xDQJj6p4RQykMrkCu79KRDWpguEwfXHAdudFwXLDpaAr6wCDxS",
  "key18": "5CHNzn14hNu6cC64gjKsxMsXc7kUx72TaFqxZWu12hoh1A8414spD7nnnwGvui1FrWeoRzm5EL5b6YDTpHHw7NEh",
  "key19": "3gSa3TDk4DwFeqgV6zGVutG7tzHcdyPGVFjpGn22oVvPgavPVAAXcCUqipSJrYCiLxRGpShWsbDAJSNygyF6uTfN",
  "key20": "4JbHBzd3GFXqsKC7Ay8YEhqTu2L36YLVYiXxrLSGLG12vuhsb3KAsmWWkYQRXcYUqpBdThENZcZYoruSZ68c3FW7",
  "key21": "4CS8HiJTzZAozia22ccEwQu6WAdLr5P8zwcR9y8gEq42gueM8hqH8xj33Dbywzz8D4cP592eMQmQrdZvzAGwi2ZS",
  "key22": "4icdU1SG18BCZ7A547TtFNVsVc5HBp498bxTGcPUvWUtHpJzzitwLtEQD1bjbYoHG8S9e5xZEMRe6biHEHYJ7R7i",
  "key23": "5zGdtDY6vT3gJj5AHEoVwFcppvnaExZFCdhcEvs8wwARgMNorQ9sy59KvgvFdwFhXJr3oeQwEY1yue2PEUyPgEU4",
  "key24": "3hbQPCoxbKbfs1n717krEPVHqEie2cPHsZv5wPDSCin85Thss9NM4Kgm7CZQ9Dm18EvivBKruyioS8vtwJYyrKnA",
  "key25": "23vFgNmy4bXpUL8Y2xw8GstEaFo4rGSD9saxDoGZ2PwaaHHCuwETnQuuuUbEhjMmVq212rZd8j2gWRG13h7ruEKN",
  "key26": "2qgTcPsHrTt1YkaYuBT2iysmPoskB3QAtyJSMTHXnNS4m5xikPdMmoUoYzn4Umay2aG7EwvjW6rFAhvsqTToRNwF",
  "key27": "4B4LkM4xPVE5uMVz4uL9ZVBruPHdfmc7QmC1wBpyKo6z5bKr3FaKRZr8VCcW4wJavCUGHaooSFisC4tiW1hBDr93",
  "key28": "54jMnoc2yDmGnifvPQ1Vrgy4QNXUyp8z6eBNd6RK486xozmMxDNT5g3CbF8BvJkaaNaTuZGFnxpMbz3MK8GJs9jS",
  "key29": "VKX7qLcNSMhLuwwqdmXMiyKjuzK6xGprXD9rRS2Y9MisxgyVjxSrXtkDbs9bjwtw5LyUUmzVbdeVMnxkiB9MNXV"
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
