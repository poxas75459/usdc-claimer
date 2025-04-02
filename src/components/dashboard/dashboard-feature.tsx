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
    "4gLbjT2taqsnSPtXfBVsXHGoAtzUta5zEfR54sxZ2EZS5JJZjFiiTrcRb8572YVRQfT7Egdw9sCgpxLSMEpFYKfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xQh5BL8NPFZjh89U6ee3HMBDNqMCtfLtSeyFuCHsNFbFfPnX5d7QkkRb5iG8o3HLa8ussJ75zfKb3x8SjRF7Rba",
  "key1": "5er8D6mshZq2aMWZemzjBrnYyzRzwTBMRTzUTNpzLvYUTcnA9KBJTVaAXkGbTq5dobNP1ARK83XwygEDzKnRPhGR",
  "key2": "3jVWEbyKgiDjCs8sx8xaBsLFfkjRXy2FTPRi5KZynGaebwNwF3cXcHALozEp6iY7XFBGaYgMjfwL3xQwBFC8Q4Mq",
  "key3": "4FgQkti44maa75EDFMRJMACGFWQkcvfit63Cycwfaw3MXygQUNhXmYAeohWhKMKsQCUdQbvtnCZBtpCjxob8VmRq",
  "key4": "5jHqKxzsb1sBKwV5D3yjoxYekvkERSEcAMtyuznVyR6U2P9QgCkeLUthHEEhkgi5RWMPnuG71HNNjiEjz5ytGHyd",
  "key5": "c6oAgc98FckigWRSaKzeMLX9cNUD92F7mZ3jcNRFLT8HU5HchkaKUBja5vbBMAGcsuJEURfteEESKNRPu83oLd3",
  "key6": "2QuMgp8qwp46FFSysq1k9QCFRELVqaorNkyJwxZLmTWADzJmKjQnPLUy6sme4mWh9A5gVYLY9hRePCBk9v54YtGS",
  "key7": "DHihPrfamuiA4aQaKxUjiLxboaV9J4xW6pQdTSVe1CnmUM3CP28hskqexsiMjEeX85r6jhCH3AwiN8dpP4StsUp",
  "key8": "4KrAngUBekFjeYx8KwKk3Ne9MhLH3JRiorZoHH6QEfWeSCqmd9a1P9TaxVSwxw4EokgEjEpBgtRsgEPThHceXAXs",
  "key9": "5wS1xNUhhHgyxBMQnHrjfofHvoJzjpYYHWFjenbxsvKqppLdihy5q3oa8ptLRuTTJjLUTA2oww6ZYRmxQodev7EV",
  "key10": "29YRNynCfbEpuLiGZmxCNRCwjh1axCULhF5VyygTWFJL6Rszkb4ZT272Uyxr8xD5WK6FAimnXMdBQUZEAMAF1uBx",
  "key11": "5DYNFkgJ25x3r4yLYVfFcjwZfDVcCc7aD58dwW12M9kuVn8VweukqsWS2nco6SBSprW8zb1hCo3AMrCibpFn1LnA",
  "key12": "5HD1nSyfdRuubdXhW6VMDviWBKphijPZyv7U1QWwdmTLv2ZYMakVKEq4r8qrYLhubyHovrh3UJKZKjM1zabz8Kea",
  "key13": "52e86yQTbKgNayJtCpD8DveTpPqd2qzhe5m6wQFdEbXyiBFw9TZ3ft46Ah6uCdK3JBnfiiBmH8eoz9g6cS5TqQg9",
  "key14": "66mhjWSwEWxgxzudRZxAtWiahEAx5mkYfVMmiuQHwYHkpo5JLfpYr7Yfk1vev6vkUBPbMCvoiEpbq2qQZrzfcZ9M",
  "key15": "4mhWSzXjfPL4QR5AxU33YgcWzb6C31kGeVPPZgX5krvZvz77wyKM7oJaEF1yyPoEXKX6TLeHdcpemrzZFNDDX8MJ",
  "key16": "2NLZqMUN9vUocVsfje6SQBPVZgiq8SvBJYFnQkQcJA3TnnomaZhnigA8XTmXzxyD6HzMsrjrr9fgSsfe2qP5Aq8Z",
  "key17": "52NvCXkZQQqLarxqAPZ2SjxVw6PMx4yQWoyMrqrb2KUUa4RuuNkgTpGgW9NJhxcMcRtABJ5SAAiUoPn7pDGckeRa",
  "key18": "4qWmFKGx6vt7vG6Pjqvcf9o5ycTVQXwimyHU59eQewQ3nnHkBtGiRsJwz45AuengwsqHKaMiqeXcCYrWjhWfBkdm",
  "key19": "3Mr4xNwqKixjwmCRzpZCtLf1TRM81qYp4f4yYqkQD8JGEr2hay2WU9icSibJtASy8NJCu63GBc9uBRGFvXGaAZDZ",
  "key20": "3bEveUiEXa1FgoAtfmVpCp3phdYN8eTznXAWj1duUzM2AWMepjEkoW4BmnYf1fdinfRtmzv52tAPvqNBFkAS9RPi",
  "key21": "qgSvf97GMkef71HseTAj6uXdppY1RLP5N5e2wL4ZAzm9o5A7zpuCusnhgXB2yKAPwSgU7ohZwkQpxGsCacmr3Fo",
  "key22": "m8Vt6DCg8NfHvn2qgj3rDHgEHRp6Gwf37jBRrSmVVPD1F1ur7g91wnB4PmXmDmjQBaVPAgDfC1tQeNhugF9kNfz",
  "key23": "8bEvngEF1Sh1e9qdU5vkvQMWzGGB214faidiUWXULZwrLcVSKxntWCWr7JBFi2NW7oHHpgWxVgSmpyMqVAqwvDH",
  "key24": "5qjC8GXYjRBdyhcJtBQTK4CGwf3gVdyKJZJLMasFCXfA8y2JMJjE6RZkWuxpHmXWm9MbQPpSW1MNhtCrLSvxC9xA",
  "key25": "3TydngNY7Ue7yRSumCKfXmkK23UoAxegGiqgdf74V5mo2imQZdRChN6QH2dVjSkDqnhX6sYhryQA2KTmiWrAPVRt",
  "key26": "4A7kuyyy5fMHUYRsVREEwDomoDb5EcjdkypLh8KBiMaMENxDJvQuVSKF4W52e9FgHt2azN1JQy9zgrRqfUcnJNED",
  "key27": "5uMcrBv8DnLhgUwbv7biTGMfuqw8eybgusCuZz5LwnyHc381ZxZuQDVJcLVguUD5xKcL3jiruyVufPvnpKMZrrpa",
  "key28": "4SbGo3e9Q7DuTR5Q3FCRSVSDXD2T5HTcjbmmdU5u95w5TzNFfis3vYWeqcUGkhPMgBZfimyV3bR7wPJUm618neKs",
  "key29": "3MR3ztbhBQAXPVMXtYTS7LWiceCp8SiavjVVj1DCYvMC9RNVnxrQW3yjPhm2bXW2JKBW24XXHSup7AgYgpaS1vDt",
  "key30": "4EXmRWPFnQqsbHF6Uo2rYaz6QMnkTe97MpiDGkh9k5GEfpQXXGjjed3KPAKwfipQqMEm6KyXnrEi8NU5FpWt9ADe",
  "key31": "36cyzgRH8cgFyZ3UYVGGzT5zkPktbTihdTAgDToG4izWr2Bw9ajjNDQFQ2qgbdz8NhtiurDDe7xW9nSDKb7sHTQ2"
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
