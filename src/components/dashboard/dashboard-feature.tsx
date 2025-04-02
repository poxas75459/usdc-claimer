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
    "sDq15kL9Dadvbb48h1TbwYeb47mXUHx7ptbpy3vd1ZuxFmDauy4RpvCVYP3okJUyDMzQQU7WYZ6ft9iUvTF2uMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61TZSdaZvkfwNzwVKjfNxR9SoQeqwRcKyuvhVwDGQXaEmLTQ9E3vvuidwPTXCtVtPqfkQE8KPh5eBWNVWAPzHXh2",
  "key1": "2eDSq26pfo2KMjsMtR4tJDx8MLYh94Dubcv5H2Nx9wPRVwLeBVHWDwDdbVwLzAXsCrf61QH7PVGWSDhhCFiwmrhz",
  "key2": "2LNgDV32r6YE6nzi3yhDKSPSvHP6SN4w9UKSEaK55PK3HDgaVwodXf8bMDqQ6kjduz9XQ6iyRRrtFfTv234ePt9P",
  "key3": "4WB8eayCRm4B4qpJ4DCQH6deiYvCsP6TwnehC271T3LR2nDPscriNeS6pPMvtR97JTBs5XP8y2xYxYNUBfez5BTo",
  "key4": "5D4TW131ZYZPRULMD9svMZQdBRy3wgojPWcm4jEBeDN88Akc8MrgdQYQvrZDChX9qmmCwBpJ8ibDUrFKcuQ7WTMn",
  "key5": "2j2jti492GuaSTP1TBCJU36YHxMGHJ8D5DDLU2MexVk5KayBWJ8ANBeJ88qhWhZbcTXXW2B5cW1VBRNeVevbGwD3",
  "key6": "2fEYfPeZ99urny6S1kRH2e65oCqGccXvqvxjizqbcc1GJRfdrEodToMg3r9dQWWr5oLCHcRXXunDtBvkoZYVeqhx",
  "key7": "3LuFUA6kBWCZrsDLZJfHStiJvFHwL3Mquv6MfYcTQxeX68fMegtNPSCX6D7Cer4CixLPZaR2qrL3FiXHQT89J1vc",
  "key8": "2JhYAQPu4hHRrctfjcCwcJS1PwtbKse7YtV9zSTb4QdGWwA4FKkQKeUvBnMexa4tKfgRxrAEnoKJ5T3x5iUgJUKN",
  "key9": "3XLGBjXxE9Ym2F7hHx3nGH3HLRYJQ6kuxe9nfBZqSXfxdVKrgd7BnQPx2pz9MTSUssXJyGz7czK7LCkoLhGYgAod",
  "key10": "3XcYfHQbxE6xaLNdneBHPwcCWkWA6QBMeDn1DfQZv8qEWrJSoqrQH64ZHhbfuFkfq7YhWgrmU3Mg2evt4eU9JxSp",
  "key11": "3AdNe6Qq9y2xeSK4yNTBTaotzxNemwLUZpfkSt9yQCpKdEaJ4WqX8WFxiBaP9E4GzTB6SQAWoexAKBCkVfqTnMHb",
  "key12": "vVFh8dUupoPmrxik8BkZJMDT3dDEg1ehKdVGmXrBBieBVFEFuNjPFdnEQtWVxUU9TNi2iTK6k4WfSFkjpqedETw",
  "key13": "3aMmQ6xiy7gBHbzxar2qKtnSJAhdLFhRSD8UufnRhBejoevcfgcibXkrBJJwWmvcC5QjHAbxPh8NxngCtLmiCGi6",
  "key14": "6ftY5qfF8bMUrvGfeacyLnnryye3hUBX3vYq4REdMMm2DCppFZyo8bTvXEE7dQTZt4Csw7TcQ9N5ZCmPNcELbmz",
  "key15": "2CY48y7v3RRen1dcocXDJyegpdhkRkGo2bwh8TjEjHmDjcbXLcf842wEm4YLjYF3KMnyh1nWMafvGuZ2ACzSQMde",
  "key16": "3EHgARX1oC2DuRLRRDrLNbXXtVi3UCSwaGzQRqybnxPWAm4Jx8nFjvbRFVf8nZBpxX2b9T89K3LaS6UoqkSg7VB1",
  "key17": "ndcZMi1LKHnQpRdMtUTgv2qG15Nn1maVHcTnapzh8HSEMsT7KRqe6h1hD7vT66XEMM4VCfDYHvaFauQ8AbgT5sX",
  "key18": "3PHBz1psag4RM83x3sDbhSSb9tKC1zKJ6XbdpCdXWBUKQfFU9rw27qkFF2FivcznsjgNM9NKdqmF25QEeZiatTsR",
  "key19": "5sew9M1Qc5YxMLB59Ydfm5DEEycrrj7KHmtDdYev6c9Xya3RXc6BojKkjXQc6RfsuM2UckMtz1midiY9XBNhefSB",
  "key20": "5wcCc6TMgB1WPXLKDEacG7x3PdMerZLRKxorQDnXUuKvwW6bWJKCYXv375w6yAz1tzXDQmLrrQERurgyQECuSaBe",
  "key21": "Xw5FnWVKsJNUdaLeyhDGpWBhvZTQjDwUojm473nSRwznUHLqiV26bykurGEDsXqjJu6RYtFroMeVtH5fqiMy78c",
  "key22": "5iwXFQWprcHkJbNzYrtsBExMQWcQaNa435A9Z8XkPC1Ur2NBoCsr6hVYtZCENVwKgCRrSP9DPg4uV4ZGmT4AwhfT",
  "key23": "hJjV9tPf3sJrWhxxPDP5PqDys5MCg5LkVa5F8x16UbqzQBsxVMRkWYyVSgpSGkidSDhcMfYqDyxyhNkp77VyATm",
  "key24": "K7nCAar8V83iPaH9fPTjoLTNFnHKuJqNE8Vv6KLKvxsobuDf2H6SFKCtnDUJfH6wWinzVLw73r36QxxjFHGjqKp",
  "key25": "2tD5E7GZEeFofK4FWoGHt4ADMLGFw71FnpkDnoUgUkJXgbhTSimjuW8vhu1wLbKazsAXeqvKQBZAkcmbyQF9G3Uu",
  "key26": "2JBuVxCSwVAakVHFV5U3KTpvNsm6oHAnTimRqL4kEEtWFiJvQbmHyct3XqQ3CEYz9FJgwTof9T7Hy6pNKLRyfrjE",
  "key27": "hqi5r7iBR26JLXMgs8egPKzoHojdS5yWDF9yCgGv6oAXEQJevd1rYF6y5WXkmkZpjtKtHkbqiS887mhT2if1eR2",
  "key28": "46evHpB4vxjkBniN7suKVDkDeSQhhyjJBFnYzDCU3TfSaMcQeRD1KUphoutpG7cR4HdvHaKpwV9riFqvpF9cBKkW",
  "key29": "3wsmeHwLHi9DpxYw6ikk4CL9DJLF8xxVMJm143hAyif6uKg38pK2YoFbf1n8oLUfr6cE9EGjmoZbhgWMX3uVTybC",
  "key30": "5fo9uce9jv71MvPDNVxgYGsNXpNLrBeiHsS1Y3t6NSogMJBG7UZvaqfhmM6on3GW1hv8iD7BBEbjGWAtTsHfeTQt",
  "key31": "YNoWpcvzqCDXwpeuqTkfj9nMuoR7d6iv4CRHc4KyUaiVwScUmSToANF9kvsLzpaV6QPoZ7tmuttXBGvDafeUeDg",
  "key32": "5bq15A8QZo7xagx3EcW5xRkHBczweWVnrcc1Xhrs1YfFNBeafRjeQQVsJ95gWk569uqtBKoT1VDuqoL1GZyNYzBf",
  "key33": "5p5yxG6iunrXcrrV4PLKweQuCyGR3D67H7xzfbLPMa7VJMU591Wn9HS4uRpLKPBSGfTAfHPwttLMS8ALMsBCwm8j",
  "key34": "4eU34fDk5xYMn1XSLkJxNmgGkhuokhtUrqXutGiiSsfoBoCPzRLB4GNK8q74NNiEuRTnGpQTsUNwoeCT9dmdjcd1",
  "key35": "4N9vvbganuAtWDbzZuXipvMKJrGLNPhL1rTb1SNbes8Fxr4gcMzqQgJEjkzSELhXe25iAddCFbNGpsF1zfU1MU9L",
  "key36": "4YLoGg5quzYQtdigSLwbueec1BfM1gztmSBozVK4VZftbNbpFrByyhCy37X46hPgHXse8zurP398dwje3j7SeWdC",
  "key37": "QBN3BHhdvJ44T6T8qt38akAHh8QMHRRYsFjPjLaGY5tZ8CnEGG5b21jHMuTquHNfYzBfQvWmqDm1TLjFAexATz4",
  "key38": "2WwTeaGwNB4zxfJMW3QdbphuyE6zhRFA1wPw1w2LyGNG91CMg6zXhNga8aqLChcNp1bjLWGxwYBc2aEKK8GJBRoh",
  "key39": "6BKwqDEsPforzJrtdmMSXjdof6Ypy73WDDneigsLovtZ7iThvk16sizHy3qvjgGtrbJcpsyvWLSQDqHgvYSXT4v",
  "key40": "4RThz4GA99q3BQvLn6mty3gCPM7u3JhNpN9fsaA219aN3oA1Vy7MLBuQ4DfkwtCZsbRztHWqTG72C41zJNNP5R3q",
  "key41": "25YqYWtMP85WWqMmmBKP9VBm5LMdQzmKNN7VVnRnnaNfiLvMxAHoc3QhPZacL8ZQyfLKE7qwo19evCvMCGxihKfs",
  "key42": "2kasT5HGiMYyg4d8g6HQJYTkdByxSNXU5MDx94mxSDy65qPXiDN4FXy6X9XLW11acBx91zKAa4AG3yHnG88ShvhA"
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
