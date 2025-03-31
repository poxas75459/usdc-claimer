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
    "mKSbuoUrKHvK5CnsdWtfQPyN1BEZmgFcdrk5scyXw2qEVDy3bnaZG1Kevwdo2msVQ3APJRH8NvJEtzyE2zEUkrC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53e72DpHYnMWPzYrTKuH38WZRrFVXttcTh2dUaobuL2YvQuhCkBn4kWeAQRgGjMJjbkM2icBcBMCnDYH7Pv8VmBL",
  "key1": "3x8pr9oQnyHKUFh3ETexFaPGrpfhezedxzNKo6reHwGY8AgaBgM2ohGLeSUUft9i8VK3E72pq8myX3xp7GUB2qf1",
  "key2": "5qu65SxRVoZ8a8565wYyKFs4yqYuJnrKLZTZdMUFXfbaSXN7nZgE5aDCCkTSTjDHfjTkh7YUb5nFr4hunGrCC1Zu",
  "key3": "4gBoZkry2RjFw2y9Xesix3FYoeYogpT2ZJyvhsM8mChfChNvaM1neeSuGEzUNrrZjcCPypHxWEYS4EL4y1xUmETq",
  "key4": "3p1QpCST214LFjpf6Ww5sr7xLyCtBRM4v8WTNJr8TAmrSVocdZGNDa9VRCUE4rvhU3AEPBYRQEhdLedvUnGg9ean",
  "key5": "5oh478jwD2LBDwYyWqbZNPnHbwz8Qqe3uDkNrBQe72YNUMyJqDs85tzw1oTk3z7UXntU19TXPgFAMqCV4RsovP6g",
  "key6": "4asUTJMmxYAzyxPU8jeTsNGAY9LyTauzaFLxzb7cRp2WhoQMtLXfsCh9b5aN6uBbmoJDrWULzP4FyQ37uGC27E8f",
  "key7": "4Un3Ex1bvgTVwD7FTR3NaU5iBrQWsJDbpJUtUWD5ZjfrBap3apDPT3SNzuku5PVZZD6fH4jLQHR7mzeWs6KgAAk5",
  "key8": "4br1ZV8hTducpyFGQFg6qJMdfpw9REejAJVQZUFWRbvDVK84TNyd3LZhatmKtTMDmHRyiUn92RGcohkr1gaGqLk5",
  "key9": "2GiFZXU4GaxbJ13MSbFpE8h2a654LFJE8jXBWQVYi8KDN7XeCFYGbjt8rntXEkpM3Dgf1pKHiNmciNoPQkuMCiMB",
  "key10": "JZGG7tnjLqUg8AxkNcTf6ZiHQ1Zf7HerVUpZkSKtJBi55bBFjmDjJEByRCZmfpE7fFcYY7TbMMQfNBRimwAGKN8",
  "key11": "5iPeAwyiLM4jPpxCnVbLSc3pishBZcoVMrnWzrNVvPnqY1NFHhHQ9KmFdyiCXYmNvdMAkvFLSq5pdntEna4wh4bT",
  "key12": "t5gBepGYEsRA9SUw3guG5bsXM1BrmGSyvKutQy1hSw8fxvcA4rMysW8oDXPWe5R85UeKPDxVEd576tHJVcS3797",
  "key13": "23fUY9TW8KYace3U49qBX1yMenaSuMyf84bGPo5q2kYMQxDVvrLzDqkSyJc7MLBYKMYrgZNd3upkPR17VfE5gw7B",
  "key14": "2z4gkw8c1XQPCZW37EhcDABGq8REww1HPC1YhmtfrbXwxemKE61rqZDgbPpZCwFxYRcXguSELxi7CvraaxpbWdZv",
  "key15": "4jyBFN5yewVq83dTMrY5whABwsGjcHwKmm4Cx5aKeF6JjH6gsQFXpZbbr3RbZ8EK8mSubFDLQpqvfBXGTYXth8e4",
  "key16": "4bcHheaN3yGZCUpgGW6dK3V8YEXPiPfBm6AqN8VwJm5jq1CDr6g4Ugvuu8wqDGz1AY4EREKL6LwcZJExMrAiXB3g",
  "key17": "mpoTrqn2Aohfxxrnpcg4H5Q3XKuc2co7HpKvBeYoDvABFRhLbzsAWoP7MgDiBCBYo3tPczfxrp3Hm7otqusTEHL",
  "key18": "5bpxfVBnCVfgi2k6xtgN2FTB6JCRsvTmxBgTXfXPSHLZoMtgbwJNWM5CPzv3HJdbrmKzne9sMzRUJvFCw1AvbqqA",
  "key19": "gB7ujLJN1T6Fzz81wd4jmyv61bdcTEWe5ZdjwRU11G7aDckT4YSR99VisuCC5u6LwQwLT3VuK3PquC6sXEhSpHQ",
  "key20": "2LRYLpVCUYQLKoEbepbRKU5DYi7JFaFrNmgnvYtHTWE3hA8J1obWJzUef6tQvQD4p6VTBCVaLzcTdbLb2HUCUVfP",
  "key21": "3uR8KbfGQW1onn82AJWeKriLyV8wj1DY7ffY4gbpB243PYJPMWBQPBun3gaB4LWggzNMeiSsTnV3KHwybN6uMLhR",
  "key22": "65EdBNeqbiYWFXpqgvE5U3dZZZcQ6V7ydMv841XdMkuwvhRw71qFgmuwwvTA39oM4iUYue9KNHHXV7B4E2EpEbFA",
  "key23": "Fo4QgMCQXijUcQvSBXq5ZxxzGTgRCFeN4RNszh4fipG5LQ8zgYyjJh6Tso7NGUk5XtxFXndezEF67UsFSomCimk",
  "key24": "VnZVKPRjJ5qPGiSC1pCRZuPmgAtmgKWBUWgpwmZZDcmm5D7ZAjquHKZUHydABeYhjMEJYPwEsNHBzLXq2m91Wjs",
  "key25": "4q3utL9RY8zUd25KMNqextBUgL6z6TwqiVnk8pXaFX6RMzHMMLjbh7EWZMgUmQnVEfWXTUTjd4n3EhWpuvFjvcSa",
  "key26": "2cXTKAxEm76serDNvBY6wRybainD2Sii458s3NdS6DFrdY3znmMJj3TGyVJjHKPqJUw1S1U51xNnYkKkWG9dvE3d",
  "key27": "3SyaoY3aqfsqpfYpyHCnhiXYQdNm23CrMipfV8SedSnZTfAzGmibn5qhTQUPj1SRDB9sUCT5WuNCuQGPFoEy5QEi"
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
