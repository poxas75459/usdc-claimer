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
    "5wmZkXBaG7QVoiPBEaAvebx6tKehLfezsuce3nGA3NnXEqcwicr39rTHaaLKK83iHA3UzC315VnTSEcsFT8FYNJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JgSFZZs1QCPAfYr7P8hv9T4vSeFeVWmZxXvRQpcbkQgpizNSEWtm413n72Lz6T4FgF5AjrCEHLnpkFqACWdC2Mm",
  "key1": "2ynFz4Trdg24REuXJsCA1phd6d7ubwwHcZyNDvRYrZG9xNzKxkgHuZ98mUCCKshbFUSMoaqH2b36An95LRa2eoP1",
  "key2": "3CEt6KbPbstG6R4fTLiWNGSTGbYMfjYesDMDqT2LJyLJ5hgACAUGDys4Xav23vrons2ua9n8aJCeG2aMHTU16Bqv",
  "key3": "2nCmhueReB8TNAjW2yjJiQgMFMkJNADW1G4svHJy1e26i8Ut8ukWENFUAXohjiQNCxvZPZckueVtcxNdk78NNxCw",
  "key4": "2AL7jXuK1uiU7RnzoLQphob5zVvKYm9QMm8jAzDddEW5g54q3mE726DquVR8YCDJvhiHPezXFr3rS2xzuFakox6R",
  "key5": "4nhBfsw8Cm6J2WyCBtwGgcqv8asTe6akBxqwh48Z8YRZSYhb28PDBmk9mKoNAhCZoUhHb2PUPFh3dpWatFYNQh1T",
  "key6": "tUgu8pKLhAVXmrZoyKx5XdmqmBn4jWk8ww1qJ91Y3DQYgwZTpH6Ns2Y1sYVN9Sn2Sf4JLyKnyxJc6wseoW4kuXY",
  "key7": "qZJA7w2UwqbEdYNuzwVY1zRkXmd91wjrkiGKr1wPVnP3sYYwXpMs6PnznA8bgMLPQeyzpKwjnvki5e5Zvsd6nxL",
  "key8": "59oztvzX7bHGuiKzGXJNNZA1fHdu9tgtNE6TS4hfMZHtnQmwrVoxGcgatDR8Baq7xzZZV7zz8RNVkDXingXqxfF3",
  "key9": "3HJdbQPMPSgBZ5VW6QzsUZJt2HGDxPbZ3R7Bmk4CPEv9iWW4hucEx8uNYDFVbmCCohySdhdKs9EwDfcLK8FcBbLG",
  "key10": "2ZfyTnCTUbmRCta6iyqajDJsT92NiRzw3t6qWrYWVMsMCrSoSEVXwDeYGgTWUHcYkTKsDkgeUdWemmxHwhZXE1G2",
  "key11": "4DfTJR7v667NdyNE9HkcEKP4TyDqMukAdLc5VUtrz5iSeLozCE7AHLK6597YRfSmq4Wq6b84p3xa3Yeo5TZEJp4F",
  "key12": "58rCBHXkZPBHFELBZg68mobFiLeDpwUdS3AcazmnWgRJejkgng6miN4WU1Je2sQfZEHBsQTK8nd21nkwvy2kRowc",
  "key13": "5gAJzcP1UcsseYznWVatWvChghRkgU7ZYLKB8yVvjX6sNV9F66EFsfTkAbwCWazUtGDtw8kLAtoSG34zEpmfRDZh",
  "key14": "22MkgU7DnV9rNuThDaGTegqkAPfouXp5xZJu3vntz7mXXhVoXnoRjUedXCXsd36x8Tnc88FBX5LvGfzSKqnjcQGr",
  "key15": "9afbQgy6263JvxhBDBDrFMRrkMjZthm8bQrne4dyxNi3Es5yaQbXjv5GRJSxkCn1Rxwr1Kg3XACFhLDfWnSBE3h",
  "key16": "4z3Km9e59FsD5foAjTTtY14bd1BPbgjAwVrg5cemVNGje8uAjpn1BxXqgNmbg4bKc7XpAkT9uZhbM1eb2Yoj2FJF",
  "key17": "j3nrNZxokiYd8CnTu4XgXTFfRzvbjGjTGb8RYXUXoQQ3HomXXMoXceca1tcHQ5xdbeeHQR7DKmqEzMso1CqXgHK",
  "key18": "2V9bYjEAhW4MxLSzqT6d2KShB9otfFXifRGeX2XKw4GcxGmH37cTPzgnQME2qezwPvhrxBu3yUWLiAZqDbpMx7pA",
  "key19": "46yD3emwJsuvsExbQsGvxkF6kszK697UUgRwwmLEtngZkJoPdh8uhWa9FuMauoWigUp84H14faoVov9N8ZnerzyQ",
  "key20": "36SAYqWvXkowftLYKMj9ofmJowLxmpDTritm8jkqp8QT2ZEC5LvQqebywe9Bc84DgPPuPGxeHFP6SYDhnb5fQG2y",
  "key21": "2R2d1SDkPTU7zxaS9hsAvS8Yk6mTfXPa44WydCTPvRk8nktWQtLDova5iJpkGifu3zf9rRpXf9jLbppyrGiEazFJ",
  "key22": "38isnuNtKK2nDDt7Vv895uMcrf6pNDjKZuLhbtzonFMk3UZSLngjrs3GZkmLo9xa3jU8UseoRT7m2wtccTPR4cHi",
  "key23": "3fLDAX3aaFLqYhaNGkYAWu2Di8BvMZgvkfpD18CQZAZcLQ1zKxL2Y19KZTrsXkoTj3HhjTxLy8Wn7xCLjAqkHduj",
  "key24": "4WiWMQWH9rAv3mxj9GC1HgMopuZpJRkK7nMPvVmX2qPUgwYZWmXCrKFkz8jiaHzbdpLnzdwSRAiqPvWeocQvF5xn",
  "key25": "4PtqBZ3VGLPqqXG3UwKG7813MDnHJiBPeSYvBiGS4497HNaYEsvcXGncuuMSkoj8zHLWVLFerCPmHfzmAQF9rxk2",
  "key26": "528N4ecyZsN2nxw1UxU9KrCDJbGGV1azhKyr4QfW7TP8KKjCKMVJZnbtUzReEExP7vxtJr3ReSgY9vxagRavqR53",
  "key27": "5qw2dzTL7pwEyrKYXj9B7oGJU6v2hVq6UiBqoq3y234F53Bp6HVD7vGuh5pyyXsSur6Ewwwd19UjxgKekobhzWba",
  "key28": "8DxudVCQ3pT1UvrixtHqMJN61aNcR7AUYQQM4diMnzeY5cZpsDDkta8KKZsQBZtLrvaN8hF7K5SZR1YSwuJc12S",
  "key29": "5YYrzF58VgzyUXeu86N9j34ZURy7sNXWfH15jHP5fuwQ5sBbwBNmHojV7MaUUHibxwDv5XFSjVnxTLdtsMHzhEW",
  "key30": "3YHpFTgSGwFVPk9Cf4dAQ8bTcdrEgYCFsucE7FVsj1djNe8vJKenqJsMgwaFBTgJPEZubqjzK8M9W4dQT4ETNTgj",
  "key31": "5eZ7JpmJqB8owUe3dSW6shTN7BssqLpa9rqc8HP8dE1fS8N96Vo5M2ZGbAAHK3VutVRcidRP3hHcx4Qs8NmskxnA"
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
