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
    "9bogabmt3hKHAmTGKsZvbccbvTGB5T8BTPX34s3DXLScYwRHBLgPsTxG53ScsWcoAfiVbp45Wbw6FySo9cfhEhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oojXiTVzH2DU3EP5REFxN9bpvKJrKGtauJityT9sjqMNbguXrSnohWLrN7ccPhgbVv3ZhLCFVHYLUQGFbZtd9yt",
  "key1": "p7cHTc1w8YcbAajFFXt1GQiALf9QEusS1FNynC1b9s5dXVoFVAjHHSYsuZoqW4q9dcuohAA3UJhKuBJGtiKjBPZ",
  "key2": "2PRcKQ5erApFZEgZktm7SAPRT7nyBrreU3jDPMismCUU32Kqkeycg3CMiGeZgDnYuofbXzuFopcZYQoLiDMmPeKv",
  "key3": "4oj2Kgd4rLMwwv92pi5v1SYJFFQnFLfGWuWQHrA4iDg5qxWG5ufVeUGxZu3drMdYLtAxbbZahShnsYrzmMfAH6Fv",
  "key4": "3RfAA2R8qwrvx5dCHumodv3DnfkMD2Bej84B8wiUH8U1D6x8KRcYa5o9ywG3nGB1sAzp4FDnCSwhc46MJWfRRtWv",
  "key5": "5uioSjLoews4dXGWUVpZioR4CxjAVM95SCXZKqwo4MbvLnYdJ6nfFhphgc74MkecZLYTKvKM95LyDUAG7vLNxJu2",
  "key6": "2SZ2okYtNwtD6FXbG1ZThMGGKCpncJmZPLQaKkPRUDYvHfcgn5TxaWwBHTVSmFVpzzFxaNMvJuJ1vLwGdatzkgZW",
  "key7": "3jqpuGEPeqFyjqYUWifRNJ4GB3nTo1sTsREzpv32JtziFQTFM3tajkYrcaqFCniqGh2rqzQ5hpCiQoB3AMwoMURk",
  "key8": "3qNyoJbLAeJyqNhqxMCPLtq9oRe73NcKHSEripC91f3WbrJiorh4rAoenknb9iPVhDCKBZ3c3Q7dvxSJpyGH3coF",
  "key9": "4YScybK53uuA8vz3EkfVBj1P6hwrqzWj3yaNBivf32LmqNYiSAK1fcpqwDgv8coafJEuhJNY992eYLN6CU9bBPeu",
  "key10": "4Xqt2pTtvWNSXEQGfKz5bWx7CwDstkd8XYfFJbADZQANV6xJr7VRoHnQ2zNzJEySdj1bV4a5ZxV3F6PLbLxq1Y6R",
  "key11": "2coxhqg9jKJGfVFhAqvVJm7SpdJjxpgrw6rxDXzuggoxBH1L8AVu3j3wPzcqQwcnMuFZatH6Rhx7tKqK32C9NA15",
  "key12": "CxDqJWfd1RN8q1VsGQdREeundjxEot2ULGrRFQoFsv6Q17Nefw2EbsuySvrED5roTxdhm6AKZ3aYosADo7xDLnD",
  "key13": "5WcP9WZ9urs8iXN2swLLbyeouky7sPDEP77RN97pa9kD25uhZw5cmXUKEtiSirxepgmY8ExHck4FJa4qpdeRhbt5",
  "key14": "4488jyvMQrUHGb7ugfuaNdeM8j28P93R9V5frZgxS7nxQLy3WCE9Uk2xefXW2dgtupTT2jvqgUh3zDa9RJVVQkTR",
  "key15": "34rfPmvBeUx5V7ZUdZnkE3tgo4Fz7kwzi7UbCd4ajUUcpMYtDNNdQ4B5UG7uCD5PoKajke5po3aGnrvhJc9Po5pn",
  "key16": "3Dm8WXF8suj6njYBhS57BCuebDcbe8K55WLhLiehJcyXqd2j69oSTVcczLQPZGUotgxJiacrmCAUbUEuBPE3tpke",
  "key17": "2QZ8rPFukfW1YsxQCZRHavPQsrCMxaNCDG3LSUjp6AfhsW4yC2LCkxxBdngzVcpJ538TnXXrsgsgzLsWwBzG6qxp",
  "key18": "3ydoxqVZjuffR8XpoXQE6QtEnFuQLvLWKfNFfJWbLA1qujPNSWdvZUiAjHvm1M6T1ZvELVSvPHUeqLmmEX7vdF1f",
  "key19": "9r76hnaBCto5KbL7ooLSTeg3CXhSRaRHbqZBvrcXJ7cYP3XMiKfLNEHQLGKYYM5rPkRnT5s4FSnG3xoFky3wFC6",
  "key20": "dH7sC8TysZuWgdLoEtgM3jvKAGKzjUHkAiZcCuLnwnpDPAykteysJGqpWdfYRT4N38gwRgPw6Z7VjP3dktFNHo7",
  "key21": "2sQie8bRvt4D3ZynyFn9ryr3yehNUERb8AVRSkCrx1abcv5apbpVTqQzvr2YBYPeDRr1ApFfL1JJPKDbL7icick7",
  "key22": "4jSTpHNwCyngrXTZgeJMnuv6eJr4v9EGfs5u8gkZf8oKzTTaDF9AgSBoK44X4hbXKr7JjrjnXeCLALDVU5dV6jXB",
  "key23": "5s2Y9y2CF5RKZjuYwxMMAtTocfcnw95wTKpD95Mg4GC3hG5TMYS1JfETFfU62wQhJkbwqMGg2aworrx9u13ArkGj",
  "key24": "3QhT8DRhy246HxBrYx7gU8ZCNaFAaBMFWWWjwtjCgHvZ5GeX4enNkq6Yt6iw7NG1FQzd5y8SLdyFUCBTteDTsZpe",
  "key25": "2yjMVJDheJVz6eQakgyWPuCCDeEusFtn1a5VAQehDAZrXym9REXLMvVxdrBXXrCzs3wPws6nMKQQuR21nFtiG27y",
  "key26": "62NyhyiYc27F6dTLpdm9CWYxWSED9WJ1LTGoqhHtN5VK1vHRrigbFKRL2NPr4xoR2rEFzNevGw6vxYCP1iXw121k",
  "key27": "3nSRbVqsDbGz9wiEoorU55FdWkTjUidfseGLvHH7Zxuhm8gQQPMLFQWCT6ocsND772XFGLScaWEUakJEYVqX8gK8",
  "key28": "3qLz7NWQiCDeZCqGjrNCvTnDxFx1AN5ByaTzdWDD5HXjWPBtKKcJvPWUgdLmYm2kmivRQ6ij8ErvtbcuPmzWBfsk",
  "key29": "5QDhS7di8YXpa4dfKc967HimrJBSSAg2qPfqEVP3PLfMYXjpfM9nHXTcjiJbAFAUe1vR4knuSUGZJ9RQn2GdShMd",
  "key30": "45YuWGj9ygPuELj2Zbvbgpnr4k1ZZZdg6LtdbUAXQZT6oWEWBa6yRqvwUZYrZN3bX19mps2ss9ajF5ctDF6sDgM1",
  "key31": "5SW3HVrLiSLPS5Fg6cHVrrfPiCUjnYG17juoH4tRr3Wnr6naWqaBKZj7oXKqgMSfASb6Jr1oJrsVtPWgEHWkMXyy"
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
