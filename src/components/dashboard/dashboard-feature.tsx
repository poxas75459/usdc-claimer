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
    "5EUoaK1H3pPCWVqEXCX4AzZcvRpvYwmdE3qZ51CKQT8iHTzdkk5yiFmLBR4pYAYCjrEFVWtdJaGUhqiGMuXzugVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kDqMgWegn8infTKtAj6dWDB48nctKDHLR4KcZeB9p3jP9u9jELRXp6z4v4i6hUmneevSqhXqWFomsRJDCLwX3Qf",
  "key1": "4bEZZnoQxtrREBBJwMpPPZMyZjxfyLpV5eGi642RBZWiaBgXmDbDKwNiemdLmQxg9RFiaUii7WHQTaSCCviScyE9",
  "key2": "YZDmjEuYfUxcRsL2nBhwv28mxNNnN8L7UZbFpc7Zw7Tct9WbFB2GvV3LssJMLgjPkjLnTiPmgd648GYDaZSxr3j",
  "key3": "2Si8GiBd5hvHK3asUs4GuTxSbdZCGetokvhYt2rGieUJLsVNyzQ6QnawXXFdDpPTCvFxNFs8t5hKDXVn53Rs5MqV",
  "key4": "4kxhSz8rQQPdBH7xCg7CbWCVEQKNLX2YKKiUwpYGGg1SVLJtwXMCsCK5J8ajvWhV475vRfuJVwhQTdd5c55ikDt4",
  "key5": "3ZdmRC3CqZLvYJz9wumiCqybyNxy5zjnTx5mHTKAwG9SATRqh4gbjovpWZsm9qJR423FZVXET6EDDB8RbJaSdb6e",
  "key6": "5hp2TYJqKmg1cS6ifoRdvvmwQH8r2bddCUc4xnNcQ256Lcw22PZBox56H9d159HMBn41Vuj69dmc9VReF9xxjj8M",
  "key7": "5gkcqfQKgsDJ6FrtR4YPSPrFF5STLpFZshnM1kmci4C26Q5KmNrXzAsfshf6nvNQQip9sb6UJkku9sXCtKK6vJZU",
  "key8": "4ZTKd5JrnMWR9YZtoqyrRSdZ8pb4JUxLbFq3h951uH8LPd2VnvcUCVSEkU6vfJtuREoPFs5sLX6JV6DJ5kXZmTMq",
  "key9": "22FeoxkkzVgEp3DtcvN31w7cJGVbhsngndjWB6v2JRDAhNRgUbpbBENqpCJ4F3cs9ZMJFhgTN6SZx8DTVdn74KYL",
  "key10": "5fxm89gGLvio9mhi3PG2L2UC9tQt4jQGGjMCWLzfhTH6SVzt9cbADSvbDjXVbHQweDEtPbxFkAxcjHdcjjkX7wsH",
  "key11": "JkgUxPHKXdk17yWB8Q6nQSnpPQvNkZT67Q5TJtF2hUzCCQsFKhKszycHRqufa9sJefnN1TMnu6czpwmPgLqrvNS",
  "key12": "2YmYByUzqEL1eoKxLmxpkkTqQ5tohnqPKwLp1tQvSC9UPsZTdjn4fiz5nnGQkx21AdXAMkdRV9WFPxp9M3iL5uZF",
  "key13": "5o2cB51vif7eF8ehCTnDV3qeafa42XJr69PEhtcNBj841cTMkY3Z7jF8JLp9FXd1F9AN1oauJD1i7vzAjKS3ty7q",
  "key14": "3V3Hv4wH1kGtQGdASZKjdqybX9vwQpTNETvU4Dd766Fbbvy2qdZsMd1zH9jwDvPHDZ2q2YF2rGwedtz2qZTL6c1S",
  "key15": "5TaUNyjDr9H37HYieLsSC8cUR3jYcUHBWDDRMQFuCHxRQ6tE7kUH2h7m35YEtN2diK5DtjrWrG6QTNPrNpqJZcAp",
  "key16": "3tVxr6adzctmYjpujkc3TS5QZMG2tgUWSHWqDhUKgrtX21BCdU4gLPokXtgEqAjjWRDMHgFL2cbXyCRWArnU4Hhw",
  "key17": "5zcAiJmgtMVfRVWT41ZECTpwwfWWSyTDFtfCcTA9jqF4hNAqhYuqfnWByfykPRXY6d9eQtQV9jvqrYreW7xb6vQc",
  "key18": "4Mrs4Z1zsUkpJzNGXgfyZz7n9DFkyypG7ybtUCLy3APNck4P9UT9e6CiKLSZXUMr5p8Gkifuk9ndZQ3b7TZFig5A",
  "key19": "5cFGxVHoYoWxiUT2o2mxPngMRgCbZGcMV6AHwcMomZGpt4hErtTvpv5rei8MyQUfD5hkbSWqYjsUniLy2GcoBCZh",
  "key20": "4EF3owxTsbEp39tKoUBchy2noiuF9WjsYVd8Hhx3aU5siCCLWJEaCkQ1qyamhGwHKdTgaJF6hMGfY9qYqWKektBf",
  "key21": "3C86zMveB5giNhy1wRyEk2VBtLghDSC5qEsWCkAYZNfC1JYiW9JKGvkknfYvTUQ6r511Rpn17F1JmHRx8RdHzipG",
  "key22": "27E9ra22L827USBhoBgYCJ3aoBJaRLUsiwXUiX3WYFu2PBgydWXc3hTtUqfNAWgbc4nZk9572SqCGbZ5PGRm7ZX3",
  "key23": "mEukDy2qpeeMv9fLWaFHQWRddx6A2xVwzHzhEKNx6VL3nRNVGsD8119f3AXcGTPE3rpvYnV6HuFXAa8bFQZmFra",
  "key24": "3oYEeGTiuBg5Niu9tcLSWeN6KW5cxvPYzcd8SAk7MZYTjRvP9NmsAfAyhK8TzxgSymngh4HJLD5wQqsAzooXrXcr",
  "key25": "4vHHWbcLPS7Gsmd9bxV3us5drEsDqfFVEuMAKR1AJuNZpDa51bZiapjz2TNwH5baBpcPt139bfYDRp9h5oyFq96",
  "key26": "4cebDDbpqJ32VLWk1eKw6GZi7Lc1tPsQrUDX3D9dyRMW9gzBNZN1gmzoSxR7LQtPXkoHiLxHWErL8esKk2ktiToN",
  "key27": "5VYb37ERHAsqJK7uPsku8EfzoAXtM2LZWma4FF9afWxfczSvEChP8WhWKkp65FEEAtf2Qm9AWaWiykrnL8dcx5sN",
  "key28": "2XDLU5EYRfFtVXWxzBBfqMxE1SKRLiBXB3YbXffNGgqvaq5eLRwWvZSJWxNbCM4jbT5DqPmvnmRwaHPAvFLEZaeW",
  "key29": "5N5XZq5NPKrVdjVPEp23DYA7edgf2CEjeks3csNUaQALNYG8gTdVk9TgrbGmypFaCWYD5W5LHpCpK2ANdasJdMJS",
  "key30": "5Pk2kEshDKWkkxUGPV28axDjBiUzjdA6MsDtE5TNvE5CCcXQkbkMaBShgKiuESxohdjfgMX9R2VhGBybmjA1dmDQ",
  "key31": "2HheWuj2QoedDujh3d21dw5sdAmVm59e1Yh2jEmLtjiJ5T6ticAWAiWfu8Dug1jFnCzUc97rcqhMfoqHsAputDop",
  "key32": "4bZqmKTNM8PRB944B6Lqqnk9s9xnBfteo8nekde7WCNv67nnH2iJjMSr6sknkSUCuNXo3QKNEts23vsr5iCbXvTA",
  "key33": "4jNcNjLSpTyyRXRGgpZtKAYiZZdknTpLRdnPe5bNV4h4LRsosnLJKJ5SDVQWQoaY3qkuEanFTwgLxk7mvmNraLRu",
  "key34": "5PoTz9RBJ9Y8SpU1Cy72rKaXfv8HL7mtX9P5ggdKcojs3RT3iqzA79UnELAAqwtoRFUXouD9xHhvNxJptrAYG2X6",
  "key35": "3hkygD23fdAJw6degtZWDozxFmgnnpJq4ByXN82c54nL2V8G32EUw9Z2UhVJrggJEACc2wMiGq8k5VdnMvmE8p8x",
  "key36": "5rUqp9bAuSJusdGsHvxiAgwAtH9rEaVGVNkRUgszLbA2c6QtPJuEaJuJMXpDpkVKM5qwey5ewrzLUHLUuis5njZQ",
  "key37": "4ccEFnQVLaGM4ZTHeZWi7Zo3ZaSPM53gDB1PjbLn3VQa8fK2z7Pqf1bBxfjh3cJFFTo9Yo2MB8atqouAvJdPa4Mm"
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
