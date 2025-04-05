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
    "5RZhAoKEhPqgu8co81qi1eocjjUiWdijSarBYhnoiMUrRGTPzaZpC22xouDug6eZuweX3ia6krrdBrkEpkPGDAU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P8gKWMpecYvFYJDwp8eegrbeE5VSGuUq9f9wven4kCNuN4do2XNSbrVv45ASoVSnySYTVhcJapzHuVH1oiFX2Nm",
  "key1": "SCA6kZqzb5Xqfhn2e4uGyuX3fCrH5uJarPUJ6tmrknKg9mDGfySFA8rdyuReefHboybKk4ZWv5DZiXQacffT1dH",
  "key2": "271ARiNA3NABQZ8N4LuqL7JhNhoWdqCMKrnbKFk1N6XqKjQ3stHY6keLHRXdupcrB67FxyLKCoZh2K9uaBEEVitp",
  "key3": "3U324ZutmiW2R9vhP7fU64LYytcbscmnYxtUznaa2iqvU1sejPnrRZMXLnkiuSS4q3qHRaSy3u6145CPev4oyf2a",
  "key4": "3vFZWCL1ydMeGSNHJ9jBRKcsTALnANepGEpWnje456ffXBwZq8Ux11MNzPfdV3pxxsZuCciZQUsbeu3KNRsJqCWK",
  "key5": "4C1KR586qJETU2TnDcNnTQzSCGMYtpHBCSHAgTsbAFBvpwDMhGL3XEPhVcmsKQwgVvAXJ9N2tL5dSFjj1j9VggCs",
  "key6": "4eH6t72VMAndNycQxH6EpLGA6CgT6ZE5FNAh8BcbQJSRttxbCScgDcjYBkp39f2adzgjnNFFk9gqeHLySTdGXjsn",
  "key7": "49brYrsZixJE6gkw9vK6YLS8nku1psDrT9FKribRQ8L5jeWwr1mk1CpbuoMnPk6PwwBMVTtEn495Chh5oc3K3it8",
  "key8": "2P1nTTo1DahgVdsdGLDg5NLmR63kNK7u7KUKAhieu3EhotNw5dPJdhQcTtrFvC7zTEf98AsZ93jzSujD6gUhag51",
  "key9": "4PNWqadgx42wjY7jatfDN6ydkBwHHz6nuzwjY9cJuscEg9pp2ahhex2YX7CzRhWjW6CFgtLyqf1WLMJWTFTM4Hnv",
  "key10": "5wJxChXZhNNJ5stqXYEsMAB8K2F2PYhafCpLPK2UL8K6F6239yYup5ib9iJZ4jSvXdETDLmVN4G3Hc3bQmUjBbiR",
  "key11": "iDyL5aYacqK1epaDTC1jXeGVebYnwL2h3YUHpLp2DdBeW1NyR4wyeT9WAKh9dWwcB31jXAPdD5bW3JPqiRUVtor",
  "key12": "5PLkpXyxNcUw6HujLbXWVboP2oW9ktMgPYYTUtmbJ2M668UfG27EeCB6mi8uFJQMA3S4jjP72L4NUKiVdvqSdVDb",
  "key13": "3NsREt6WnojuwemdAE5PK7dWgqNzDL8vtGeaMqnYqgT62xCiCYbkHiUGnpEwGyqw5gq1a8GErq2857uRS9S4x8YG",
  "key14": "5mz8TH7EovDaZssWzbCkABGgFxdiTG8yxnZBR43C8Zv1dCnCTGxawpKhKcEp7EeGApj6swYLXRBE6oYxZbvazUd",
  "key15": "2TSG4GSU5vzYJoJAwvCYicoRivHxcYjwmh5bPkQ1yBXjcaASGni4B3LFtHd3UbVcD8ioowewALNJBVVr7gzvTdUW",
  "key16": "2XACgJqjahTbKiG87UwaaGT5QHwbj1QhiLZ549tXL1tCnF9RP5ZEWiXVD8FnzfwEwhrWWBjEcKUMfDxVXHQXevc8",
  "key17": "5vwuYSGMqdhv6xVP9G1GSBM3k314ZYBP5o5EjqBQH3s3XFKKYoEHkBu1WB1kZuEYYvbmWRndprgmDo5fG7RDxK9U",
  "key18": "mtMaAx54Ku3KZ9w2hrnZSaiy26W4eysHzXDg2UYxBEvrRkmYCXZAxTNfysm3n4C3uhR7J3qjkQcvGf5gLKzTSkb",
  "key19": "329qjKNj5RxjZroTGqYRZkrTNMr11HY6wseaHS7JWNbvgs7mA2yMWShsnyYCrYo7ABjHMRzfYpxUT3X8A3GHkbaS",
  "key20": "4ZN7ZPzixro7HKfWVEqrM5CQoCmewEyCpvuEyPfv8RNpb6craY3aYnunW9zH4hEhLuuBhJAx9jqBDtvXScDzXGVd",
  "key21": "2LGBcqYvCNbcXJSQGicb5xDRkpZtwgt7HN7YkBTPACEM2xoff5v7hPZzaR8QxceZvXkJ1YCdfY2kz497kd4xxj9V",
  "key22": "3ibCzAdaPg5TZCZ5Bo9AkKEUnQwHh52Mg3MkLJo2CQfBcn71Nx38c4uZxJuLawGXr4HGvRJjsJiz9RtPdsDKBsk5",
  "key23": "56KMSwbJz7MMJtNqBhTtVCtgPAmRbTSt7JHRX1V1xfjYHbzU2nqQmVH4qmvcA8xQTLHjBhB7pABhcRcLNXoicueH",
  "key24": "2iXix72StzQ849bWA7RzAzoV7vv5EZGCVketFm7gytzN3S5vqrgmu7Le5aYhrb6XQ5x3pDHyuG5amews27kvtRSL",
  "key25": "38ZA8r7EyqAKJU36BVEJN7nCtZiRBwFtbcxrV9miPMNxF8cGrfxAgfe5v4Zu7bPdAqrWcUxZsLnzpF4htA5nQMvk",
  "key26": "2jrAzGLJh3vcd8ZYcFZ4nK5CJaxqbg8qWtR8LkZXf3gEffpNp9vnmekqdAsFWeqJ6hUqNkid5qvHHdJkYvJGnZQ9",
  "key27": "3npq8KJfRUPtQPtngX5sZZ4grP9j4FpEVUtUFHuhSUq3Ccd3LUKpbisVfwuGbXcfncdWj347dNDSvjfRsxw252yu",
  "key28": "2fLYba2xqvbLNShUwe7sqRKY5rfcGmho7ScxFqCEXAnRVUDqthmL7Lz4FLma6B7mEbtmoK9p1539AZ5h48DkskiN",
  "key29": "5GQgJD2HTC3KmL9ACChTbX7opCJGcpL2ZxRfqLrkbroz4XKEY6sRW6aAawEmb5St675EZXonwjvmaULT26kcFgpF",
  "key30": "5hDxM3QY5Gn4JM7hzmLHgeDGckpfPEe361EqbRxT8jWWyDqkzV9FrJajRi2oRBEVsqaeFNyN81K56eMCdCJsAi55",
  "key31": "49E4krSD1tsiHuES8h8eicpBUVjKwZuWMip9GADuogL9eZLV9uJM7fhqd4hd214Gnhfx6ugP384KFmWKeRpLpfyq",
  "key32": "vZvLzbtgt1iWzqPhyz1QsRxXE2sQrmPdRWR1u39upREQdTNjvCYaeog7FR9oCo2Pg3R5uLGqnp4SPjZ4YairyZh"
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
