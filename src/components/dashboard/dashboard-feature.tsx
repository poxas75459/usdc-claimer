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
    "Ka6mhv3bHMrnnKduJuPsZV9rdp486Y3FX7wVVyHSz6PFtQBhoPYpHkBCUhgSPxQ4yHjnq1MTsMNcHB2hjYZ7PeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5euy5XXe1SPW9XjSiBMHAP4WooLcHf7YRNuFN8qvey6RM3X9WSxNr7CZfNG4hGzzc1gSKeS7EJV6tAUZ6eJT4PEU",
  "key1": "5EEkHz2H8QgsdkrSocjgDhj4dUuuHbn6ga2F8Nh2WJP7252JShNgoqftzkSLDzBXs8kdD71Lowb6wVKZmMFySTHP",
  "key2": "55Dce56389uLAtYzK5A5KnJFf883ScnWRvd9C9LiR4owjmVT4oJ1stF3orbCzTqyhYwDnNMSyZcsX3t4NDdgAstE",
  "key3": "5LzxuF1eGKJJJ8HLRCF46tkFy1Vhx6ywaTN7VY72aZgXcHCbWyREKZRMdp4oYfgirivD1Y6jtVMXfGvHhVdjPZJM",
  "key4": "HWrr2XxsYGZYWLD5jrUmfBPCzLXKQN5fidwbEFaxqXxeVPh2sVXv5wMzaqNPJ63TQ5TZwRfNgMmscmcGZqVsnvY",
  "key5": "63rpJ3YPGnJiZkWmCEaUZYfTf19vkVCzvT7nwJZ5VaGmkQ5dipLLmAQagoYH9brqXbUn5rEJSL52Tcj6BoS3sEro",
  "key6": "3kgdAUuqdcJZXGTF4c3PAXqAwfKRCTV1RGEoTRe7zmrduMfCZdqTeVEtq7awJsPUFgk1qtwyunt8fJEYKy7sa4TE",
  "key7": "4hbdJ54m3sKbBa2ZgXjew6dfF47gbRy7XvrrxF2XfVhnBERpH5tKbxxtqGaMjRAWaJ11YdYisLfhSzLxCXpRbQAD",
  "key8": "25JN7vFDwPzUKiManKFkuDQ7V2m7rdgazTcCgXaFmt2LFBbgNWEPHmCmwwenBqcjGX1z6sVPQ5Jg8tD47N6JcEtM",
  "key9": "EPvuaHKCDHqfTAxtkvdPf8iihQGfPTB3pxJq1E8P5oqC2FHNhgavtmMgkcYm2dETjRBCMXgV9h84vqnzaGFPjEj",
  "key10": "5EvBcgxQQTjZuChd4uts7UtnLeVAxtZKCGS5XhxwSoJ86C9pUGcMGMPUWJ1WkDcw89URJUzVBwS1PDMUAazg4SEX",
  "key11": "37uX3gcZqjWkGyFUPouBzGkq7MUxZAQvZJNbNMyycLiz2KQpNY6r2WPxtqy8iQ86w4V3kL5DNgjDNW9Wn96nY6jN",
  "key12": "3QAuuqNc8JmMdrpT1eMyvFdSChLtrJmVNrwh8SgA1AuaoThzBKGiRXHQNgAmTTFe4dF6LUHHfJSs8RjLm8KqRws8",
  "key13": "iupPky9d7wD3tMLVjjatPLXniyh7WidqydTNSNZ6BqUmibmwNpjfbSHP7jd9nHQcJcttvAsMnsscwZqXojUo7Ji",
  "key14": "4QbktrmKu4zLRbjx3yCKwJNevdjxDuBBiHcSa2Ef9hpeHqYuLfioyrpCATSRXESbyUB8SPeL32amhFBcWC3EWWNy",
  "key15": "5N2sW3RE6ihpVGvf4eEgwqmG5i1Uap278XSqj8gH2VxvcgHEu1pUNujeDD36FS3bqeg32N6YjRz9To5Mdn7Ayyrk",
  "key16": "5jdrxvv386N5ESm7NAWx8esb7kBPn6j1Wyv56p7HMTg6Jzu2AMU7unCsboT6P8yUJZuYe8ERemUkJsZeX121bsi1",
  "key17": "33QLWuj4TFXi1iqkHz55VzgjtNgfAD3qX15bmzjaBKxrCocVgpjyXuUaaZAyFtwmuJWM1gmQV1FiLjb6pWfwXu5h",
  "key18": "4jGkaVTKENrjpSMevbwgBL1GokSMWXbYVFDWEy9DwRV7au36Gy2GnoJZtu88bdLpL9W4trJZmaAsvWktsCAwBfQU",
  "key19": "2okfctGQvWSX61AdFnKEwFktQs8Bo8ZymcnYxFXZGV9Cqt6aaNZCDgybXRde3HE46WAskBFhtRiX23SKfnciYBC7",
  "key20": "3jyDNGw8m13Hga8eZFnZhiFM5fGiijxDWVwqYBLhMjaTG9LEirWCvuhcytn33bJTghCkxXr56uHF7643SXC64ZwD",
  "key21": "4H7aX1oncVLJCjSgDbcTKyXTQ2TYekVkFGUToqzA1y7Gcnip78B7dmKjLATqqEo1HbSEyqatAWPzDjg76Fbcd1Vk",
  "key22": "3uzRafSVVrUxp6pfDXsYEGNdQtFmpM3i2KGbNZEuckDAWot2QxzopwhqTTqTXYEhNLLtNns3MioU8aPv1tiNk5Av",
  "key23": "5TsE6g8LmBiZfLCTe8WxvmbF2NKBW5nz5PnQTWLyT5X7ySwMwD4je5YRs6W2o78wbi6sUU5fhG1bTBXPRhRpNE81",
  "key24": "n7FbrZdzgN9oi8sxdevYxC7fNZm6fdgNMfuxQABJjrG5tjNgey32SAaHYo5HrDCvgfWwqWWrqGdMq7tJJBW3Fe1",
  "key25": "4YePhHfXFBbUpbWQxS8PKZMh8VXAhpCf8KzeYCKryoeEJK378fKSq2JwbNvrfnNiGEX9m5YJd7jpnPmYNC1caDDu",
  "key26": "3xBmWwJvFDpR8zi3NRMV8dk7ozTQTpEebKXkSDSDQmVqKaMj9aKrJhYqehHk3t1LZ5JmvbCFUv8U3DFJsidFqzXj",
  "key27": "3r4d7aF4njUTJRVhyt3yuLDLFswQQb2pfyiDy5tJTksZARd56484EHTCwhXtz4abnDNYm4mKAxcBPgBhmNUBR4Mh",
  "key28": "4RFsbnN9gjvtjwjvormgwr9vwe6sT1qhLxMnFChtDGmY6cNxTUmHWwhnMhYSpiX2uNSvGMThRrFnEV9PkPJpEoT",
  "key29": "3t3FLQzBvjQKHj8LppdatrVXeGjHpVbj7yaa5xN1MrjZj4vCqZUAszuTP2SmwvST2xQCRGp85mtxgT63RhZcRm8a",
  "key30": "2i84fB6aSpKZaqpR7Q59KRvNEPzopSautyL3oHYcGLG7DYrFeTC4bWqqfyBor1uCjSyC699BnLTqiCrEPmkoc8a3",
  "key31": "Sts6i2o9qJ55p4GvBuANMpgHscbHrkWqDawXmz7ZHo2MKG7JoC3ajZAzTzMepwx8JBJUqpTWRnoiEFA1ZNTNMni",
  "key32": "ovQmVvpN5rotm1ijdaHf25cU21sq67HpuFvL7gEErvrabctqW9XSjnvx8fv46YqDZYTjjRExGj742ZVZZRu8h63",
  "key33": "4fMMNi2uQ7KEHpBqNNaMgbb3GiLZdngmPBXeDkacE4dwG5JkGFFiPmdV9kgTAJNb5nrbqBBTqcPtmMqK5S4ZhtTj",
  "key34": "41cvU3Y7VyBtSU7qxgfw7oQpEunt75GNPbEvLPu55baXszvUxP7YpLmRbdAk4kYxMPFgYvgYkxp2UQhK815TqdLr",
  "key35": "dWiNawMYpVn8zxVnyttUWLhPF8NvnoRhdoDUvMk6rrD57WuquogpwhTGbfFMPoehm6KTkMf6ZbgjNrwXH3H7Dg4",
  "key36": "4jM6ngWyiMVanbFyYtXj991JMvVaGA2oEzqxJkpMFv5fJbzCToB4v6e3y7xipTj625aZFeFNq3TTr79M95FuTBTk",
  "key37": "4FSdKoMigYzJ1Y5A2zehqiYCosKTizxMETDFJF78y1wJDDX9YMKxUuTTU2KEsiBHmzZqzcX5jL11AvX268bRiX72",
  "key38": "3v9UjiXTW6zsWV3CKU7gXV2JcNyWYEUCRx93m1NCxGfgci8edGFhAjS2HSbc7ecn86t8LtbHj1AuJNRFML9KQrGc",
  "key39": "4My6JvxfP2c2W9siK7EJdD8VYauy2rqcdgzrghR11TduBxLkBP878kzZd2TREfFj8zPJDoZrdv19ZNvGnq1Q61cQ",
  "key40": "PawTckGBuwQVANL4EKMmRZZgtQHRqYepDiXrqn6xLzGbCdLg8XRMUphXnEZsb5m8wvSp6BKc98wNFkaBNKKk7K5"
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
