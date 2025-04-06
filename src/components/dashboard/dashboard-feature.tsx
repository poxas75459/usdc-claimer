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
    "HqHJyx8aMunB5Qp29oymaAUy4mUXM96DFVaRyi3UhiW6k34pBWev9xMAerWk4Zdw2g7L3tNNT2QRVWDP1hCpBVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v9NqSEN1PxpnYkXZm7LnDmqmHe3rWWGhJGUCFoJjTUiUBZWtEtcYPNPnHskPQAsrq5cN6dt67XGa9312wrgq8r5",
  "key1": "4ndDUMfeZrizzn9eddVsgBG16o1WFBm2RtyEBCThWTdfFcQQWzGD6xwx5zWA53TJRXW8ZrAknXqGkpZk9bYcF9vc",
  "key2": "2Zxq2KUKVGfb98zFCfJeowTscJLSHbFdJrx4YY6ggUTJC9VuwDRBHCKf6R9oizKpvgYtBgtcRHz6hAk6KDG4uNQi",
  "key3": "MMZb1gLsa4NgKR9BtMDkqp3ahb2DRHN7QzMofw4ZbbyvodH6Fekmf19y7KL9qQTJKQqKHqAu4FYPPoRRDAiny4o",
  "key4": "4msps2wCVcZrBVuQP6cQZH3UBcphGWpwYjj93psiBmKt78cH3tdy2PXF1Ew1QZdXtEcTTcnrZwrAG98VdAaD3mXN",
  "key5": "5K63PhoeTVhMNRDybMhybF13zeMa8fHCe1junWLn5fSy6AWDhJUPNpUJW6MyKLK37ie1pRBy6FmTEJu5hUFyE3PD",
  "key6": "3PatA4yrUPW6uZ1xKp6D8DWKc2yN5xmWeLTSsacvtHJhneeKN4cUiASxDeLb6mfnjavR2BECCFHX6XkjoF6DuFtz",
  "key7": "57ZWzfrFRGXrMCNbmtww68Xh3JQu4tNJmnTQvCut2EZkHvEdUgFSro9hae95JaPs8jTi9qirtADPzhGEx3RpX7ke",
  "key8": "2C31MCsSfKncuf9hMBEvp9EmAMEd2wVunwJ1sod8RAFb2dQjZ2xAMZ5F2145ytSpMSc1LEZzitHo6Hq9ZMcZRq3R",
  "key9": "4GHoKtrzmGmsvq8EmTt4XKjjD41zaBXjkpH8mmJKSLBji8y9auffsfEBJBDoTnfxGJoZPvJiNNHvC6VwrZBgmhSz",
  "key10": "2bukfiooKJ8Bih38tnqU1gGT45USttWhQoBUshFUJZhfXCXqwhGZgKVRHphk4ahvJWVAYg66tE6JBAyEtACbqm8m",
  "key11": "58Ry61uA3Z6CbxSzFatLf6hJ8uRSVrfpzfDDboKP97uuaxYT15424ynk3Q9b2rsDCR984cF4PnaVv12pRom5zaSo",
  "key12": "2o9DSPgPuTvzqjMcAn53AGSk8cVfMEuuZ4et1QJDyiBbhfDtfLPn1BGpEPfMeNW9eQqmnS9GTf3Dpd1UWtMKbzv4",
  "key13": "5Ze8qR1XKYpg6HUyVNQrh3ntHg4tDcwkbCHZghUWLZGiY24gLXkcCLgP4qUj8svsxwvhP2NUY1geLPBVs1SQHyVa",
  "key14": "5U6pxiEYpG3cgaWrNnuqHJMUhjcVJnWJ9ttBDUZhKk1qRY8sGGsbpejPgK9LeYd5wyiVbZCXvYSzWUpUn35UWSJ3",
  "key15": "4Noj26ULFY7iU97AnSRm63Ybh5LLSkNisjPdjkmvh4wNDhfGvFWL9cz74pisaEoLE91akoffTLQnrqDSChNEjfPM",
  "key16": "5UXJonXudUANifyDBqVcWBuQjJtviXJq3UXm2sAU25e3pnFKv3K9y8MotkVDuCWtfsJTNRbWZu37rYpTdxRnc5Fo",
  "key17": "3z7yxbYRUYkjYUXBrwy27LGeVEp1Jq5HLUyxGo2wZWHPPbAmLcXr5fsYKVZgLxujMeddqajTsSAXpoDGkKRNkFBE",
  "key18": "49NwER6s6nhjrwg37BFcYePxQPxdYvo7ebJf7yraioEkD7v7FY3n6ueJY5rHspyYSaPxjmFrL6QZdK9cQmEqiFBx",
  "key19": "3763EGin2iGgcvLkRoapC52tkFYmSZ44dxwZtNRLjrgP8tsVRxYEPseizaTSNGnrrUvVBT7oCQNFXgW8x27nHLra",
  "key20": "2GrEp46SCUGZ9KWwRaPvE6XEKpByMigmbN8JMzyWp5ApPnve7g617SWK7MiJYSqiqYxLZysZJpbVMKZT13G9eDo3",
  "key21": "42yrNvULZK5agSkjCDxDWMVGa1xqn2XTe9fTDL6frfC9exBwxwtTwKjwy3KdZ9M1GdP11tRKJgWYLoAVoG9nsXGC",
  "key22": "5ujzoVZ5cZGiDQwdoqPnT5pk34abzFy2jbTh2w547TNYwbTG5JkvuKpLqayo68MtAxTxGYhPMMhXZRZ5Xn2rsbyR",
  "key23": "3XoBH1K9oRAkwpFUREamuSf4KWeHaaTU9PGULNLj3srvg2Mbh7PnH5ARrKC43NLiMcB15jNkRyD8sV5YRbyQ8h8N",
  "key24": "5PVwy2Xmr4h4ma66C7jaCVbQbdFmgzJc2BoPZV2wxiL4r5CAGeeSQ5pryD4u2pY13PqkDdMPwQBM3yJ339j7uEub",
  "key25": "5qZWgQmdBAS87waUhDeaFH1v5iw6ynxkRUxy3XwLV4JChiCK6ENSie8ax8cweFNgomcm2TzN2oFYqQ4WdkUWSNRV",
  "key26": "DUPBgoeayDfZRdtYpWgmVA4ePdkmxyn3RQbzq6RgsNp7dkWga1eutz6CHYPL5YFX7arG2hqPy15mqVUy133oJbn"
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
