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
    "2ePUF2H59yBvpyaLM9fwjhMUAsCp3yvcDR3pZ8k5h9j2wKgLqWd9BLqD2gWBAjCPyNQDbxusxJGHQsZUWoAz4uaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s1vDgXkVL6YcNeucoeXaUWSU31HLvVnU3S1msFps9mxfPoadRBAxxhDGdtpY27zK6D3fy7rkHEHm4qgBXR4VCvo",
  "key1": "2JCz8TvX7khBkGg3kSDUuTkPk3dNpwHxvvNJBsogoSpa832bPyYgXhK74emsAjHsxazLw2S5ccfBMybbFazDx4H1",
  "key2": "33futoxwGmf5f6vsm9fLUdtxKUywinK4saSqEoRgdWh5Vc4Fewi3R7bpixVJvREmPZGqYhwVxbVnaFfcbGExspC7",
  "key3": "45E3mQRspqMCFwMk5uJVyzRDL5eX1m2kXQfNoTVfoFwqApAEmnGk9VUiUHrjFp6ytstn9Zv7NFLVnyXLhpDZG3Rf",
  "key4": "E6zhw1wADMhntp6RrWPh8yuMYV7Uj4AfAC2HUgpnyJ35vYzx92sfPyGg6utH7pqRptKbvoXUFR9xajmJUmhCvnj",
  "key5": "2risuH8P4yiMQSPc2sAJgN48WtXJ2ir5N82YHSaD3PoN7oh4pDjcpiJt42kt2JwKB6sLvd9avgqPjnc2sw1Mh3Dx",
  "key6": "2tfBuYFrxWbNhZh2ypCL7SGFHQchjB6Qe1QY6b94anaZAEgsUqbzxpWmgAUV1wNNXhoRUgmmNyYotQCwrATFr8zw",
  "key7": "4dvW6ny8H3Z7CnxyHPDegVfZZetEGvMWPLkaa1DtEfTkhQkFqcHroizNb5eFFvTMDqafEhd2wfUqQx6ycvqfc3bJ",
  "key8": "4dKwm9jt1HiosPEJEAZUFTaprsMRdHiGczbS1SYv7s2RLX85vivLEDuWPksDyK2kHFv9YHeovvsGPdJjuqsLTyBD",
  "key9": "5CWHkHof2a9hWxsFqFtcDXzHXSHfQv8ZBxEm519q5bWHYtH2rEYgxdri4hw5ueVxZWuexocEzJuf1Dn4r2vJKcHh",
  "key10": "4Vh6jguxbAKMmfKCqLkkLUGiHfqsjQseztvFCqf9mZKLtqBQdtqxFee394VCVP3gBySiwxJYpvzuv3JCNzD5AKYd",
  "key11": "5PL5VWRVxLNxNf2gedG8pRLX4oiZyMjRKjakMffm1BkKt8i9AhiDfrAWpzCt6LyZ7FckboMQvXM9y137Y3bAimTr",
  "key12": "293oSYXQsyZ42vgngLwxio2XTpm1M9D6TVAAp5iK62as2JHTgN4Z3BCZ1bpkztXohHswiLsdCzEs5LTaSTddEQys",
  "key13": "5XjDXge8BJ5mMKvYsfP4rG2xiiwkPGQKH2gxHpSQeqfm5b7vrVNRGFpWBxBuFBjhcJomkp9Vg14A4o2m9RjZLcDc",
  "key14": "2B4RejNavhL36D7zsW5nbsKudr6nKXoNQWKNdNcgpkaBCzxniRZYuQuoqP1CVbtUffqToDzyyDNB6Pqef9FPn6hZ",
  "key15": "4cohbzUVwM8BMaZkVpjBHnrZu5UgxoNpou4ZvUK1Z6inHLNejbNdE6BKYbPdwNeufACx7FNrVU6EoVFi9a8sCfnQ",
  "key16": "4nDzDHEYokdvUkqbmwETDSvk8KaMEgcRzE19A16m3tpRFRUKbarorzbQmrVLez6wX9YHiS9rFf57GNmnpEJE9qXW",
  "key17": "281reG6SdYqQiZ4J4WcxsJNYKrmKJzsEyonVAYUXzJUwVeRZVSWgwVWgfoRwmedVet4j1t4ekfPqtRgkERHY9v2o",
  "key18": "2Sp7PvLa4qfwn3geTsSshXmZW682VqUtyr6nDYRkH9HKLQhFef6nFAhB4pyNf2ry8N3GwC1fDj91KzTAZ2yQ5Gah",
  "key19": "3n9imEwegZNG9McoUC3PxBTYzYpRu52n5C84SFVwptKUNHDcVwWkpR5VqxQNK1m9h9Gm3vQ4mihJBx582s1x5mrV",
  "key20": "HrGw3L78PgzNJ6RnA3vC7cdsWAybk9dPByn8qPfztunuuFS1ojMUp1WzaYU2aWjhuR8atQNWgv56ur5YL847QNW",
  "key21": "5HRS915qaKipRjwncKcoGm7ebrBkEdvSC2WevvL9oiE4vFVLFhYzYym1JLLF6uLChb6sfybSkg8UWEnCySQRwKQe",
  "key22": "5Q6qWF6Ng7BuzVbSRDyZw6HipHzrUMoPhjGcoPm31cp5jsm3YSExpkoLEG2DUH37xhm7iFuNfD37DVN4SVE4XduS",
  "key23": "3EkkUBGAhBmkk5F5TcKB3GpFxwx4rN4AUMswiJVf7PR5MziyMcdJoXtCCF6xiUUEGcxvD2SdYPAxjbTA6hpLZkR7",
  "key24": "2pGWj6TURpx1wipLvUNEvBxGTXaynzgry4RVGu3VGx8vkXGehJi8sDdHLzEafeCExrkc99NmaxY4gfmGqazjXDaP",
  "key25": "5evvTqXZZYUx7SaJAoodkNxxGCEtTpgxH2YWPtFwhWboPhRwM6tjhY5MbZ9VAiGGBb2XPd48PfJwtRe8KPiH4s1E",
  "key26": "51HTuVrYEFWfmAVEXSf5h5YsVTAErBKw6gBNCYb8my8FCu5nv74YhHMG19RfEjhTxq5TqjWqM8rLKYKj94CGgAYw",
  "key27": "5gNhR4t5qxnUGe9SgFUr7nxyAdB4FHZSwMnTYf7X1hdhq8CrSPrxzxLNac8krwhswSSbQtkqiFhvmN5MD1kfAwkk",
  "key28": "2ePoRsV8HHguJ5aD8M5w3BNee8k6q9meoWUBr34tKoRihZkQFZiLKoKnmLB6unAWDYXmHPcGHzbcELBDfBG7codf",
  "key29": "3KvPm5DoL6FhLWfoyGouRLfmsiJ5pEtym9CJhUw5oPMqRgHjaKrympyn7kBi9NKUz3zAoZiRkRMw57Spy4JxjDUW",
  "key30": "3Edo4ZWkSkFmb5CXyY16uZLAwaWJpi39qrRVkKin1bwJRrT2tAsmthQctTsV2g38biwA7r7SJNtcSBbKCEs91Weu",
  "key31": "4foKLxrpSZPCq2i9mWMt9x97YtjYDz9w4CgKiHbSjS34C9VTFvBA28sCnvNsiemmxRsXfq4qMkWk2dDr9aCSXsXY",
  "key32": "4JFPQ9kC4B3RMsGMa86M39NPz7UxHhMwRET9M6eXUB1f4aWBCFCnWAXpcm8b1Zsfs3hZNus7o1t3v9juL68Mvo3k",
  "key33": "26B5s2aP9Ydps8MnHxZVFMxfPEn2RdivbaYz8gGuwCtEeNMCbsfQXsC9ZXV8yvQ1REJzmSdxLrV7Uyafd53UMLpu",
  "key34": "DSNUx5EvtfwJ5tRWnWWiYyUWmEaAox1FuqouwrBWaXbJz3Q6Empchfsu93b2BwjsSLH1uzUCNXCuDCR2VbDBe3i",
  "key35": "66MqEPyGoerApsf1fBBXt9uMFxpouErzT4n4ZMnvFZQYTp8jg46TuTTZLK76UBRZsjdq9H24Mh4cNBafCWdJAPm5",
  "key36": "xcsDgquUEXZtFTAnauHApi8TF4N2Y8aRDeESeSZrV3wV9Y7Xd9YhJv56NCmPT7fXA5sfFwz3swQG8Tz1zkT3tWL"
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
