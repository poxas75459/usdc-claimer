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
    "Qq2NRgEpDiL7diJW7v8uFet9GxvuwXsfjUJ9UCT6kPdj5SnShVSVPtgZuvhmotzozGJuAWKrK5tgTjiNgEyVVrA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sqKgDd9DBmRzPmAvkxHXF4QXCg5vXMNk9MBd4RuM6et9RgSEXr97xFhvSLb2JSJj7oBZfmhszrF2DRczhvictkC",
  "key1": "54TcHvVkz6JZ741PriRbnnRtq8NdDKCX2UNvRRWjPnMdMfm63LWuwKWo7hqh5ZcU4GuWoPzuF8zEu2317n6hmVvt",
  "key2": "wTxk8v4T6ockya6BkGfrdbpAuhsVX1unD7Jn5Nx35ZpvihRbTAiYhyEMjaCjKDPURiFNNGF8BXJ3r1bbVeJEW2X",
  "key3": "2CLS9SLyFpWFfPpVhAdkjK4ymzz5qc3nwPdLrvkRXoow1fwQbmXVM1WcRawfRH8nt72mKMYbSMUWa8hn8ASLC2y7",
  "key4": "5Mj8ycVa4EYRSFomFxFiyMA41HNMdgztTJ49JKyS8nsWbS2V97i3BcDRYz5JMNMt73Ww5or2JBWMv38xLci7ekN2",
  "key5": "NcRiakXBVHqhDiiZ6Bg8UJnzcoo2Vgyqtp8WfWybSR8UfjiMS6BRrkMLrvHNfvFVPKtZeogXUMEM6bs6iE7gRHa",
  "key6": "26R4Lh5wYgzi4X2E6fkyay133duqxxtzhe3KZswV3KiThHmNojyjptpuMAXHBdL8c7gWoWuXzYjGgocVUseEcoHX",
  "key7": "5joVkzAHN3zbdCtKsKNpiHNw9M8obu1Ynn8Qr5uND5Nz9sr3rx8hq15PdghBH4v2Gfo51bthHbSMGWHnvkeu29uv",
  "key8": "2vADxMjbATf41aPnVxVunA8Qxwfafb54e3mqUqWEMqG5RmMcBJeWW8rH5z2DuW8r9FZeFkb21pbwosdYHB62PVvU",
  "key9": "5ze1tYwviCWaUy3DKMFhinLUEciJuNonZybBqk6VRDkeTiWJo3oK8gVsRRXSP3quWbkBDFvyWcxN5sT7RUzECHp9",
  "key10": "3Ptavm36QjSH5HF7MN65W668oths4Pc3QuXTwC7fo9SQye4vt6LjmMZnYSvfWSanevsqbkxQMdSW96pGUnahFjY9",
  "key11": "tdjatdLTb4MQK7oWhZ3QyamcUVP2JbbUeKyc8FAN1Snv8uupLDuiPG6TBnyJsqxhuoBoJtiMqNsmp448ieVTypF",
  "key12": "3EnfxDnvbctZAQasKVDaevFJVXahsq6raebGGkFrYyWQeFXm8owomy53SbmTHadDZUm73SbhK99U9YrwYTQKxjaX",
  "key13": "2UwrDhmmdT9ptKimxXUzKBTMfsEjMENh3tjpJaxyqcXTWG4adV4BRoe7SYr95ph7wEEhpiHQwe7pbboYkzKN1Fjk",
  "key14": "4QMTSR6xHLSV1tozhYmvvDbzAHF9oXkm124eZ4ZaLe7u6bTDgnZPNvZQDoAesVnyXg8N8VfW1vCfVWy1oAA5bpoM",
  "key15": "4nswv37XRYRbXKQ2woNqdMMUFbkgmEeNhK21wHcXzHoMNu2cYnyHcpQGgz6GQg7rsz3vFCTezAqQ8pcvh1zjenge",
  "key16": "5MLVJATGndctMXvzBnMkAVBaaEwaYADPnHHRrYmSzW4DAxcCj1aPzNeT6yLY37hQnrc76CCnfxP2iZddwpRcBErF",
  "key17": "4HVAWwmhVsLLarS3okGD8RMHMrD8GesS9eZyjoE9mPUgQvenowjWBoW8WA6RdcYe6VwpfRU8jXoeFEwS9hGWfsD1",
  "key18": "3tsPr4MJBwWksqLzJWLe4cfXyQeqmuWRJmwZnVDgWm3VwL74ZFRbTyqqz19mNvsJ1qJKkuRdB6arqnkBWPfmK7MU",
  "key19": "2qBAABBkr6B87FsGWjSnoBx3eYRq4zEWPd15KS46nwHJHQED2JMdGywLJxtAE2f6yKBCwi1P2T2eYTqMoxQwBVDg",
  "key20": "2xHSUsgUv94wmXfrbbSPEmUneH48p28WCeb9xHq61g1RiFpw8113fekBmwje9eM2FxR74WzxTfuukWzrYQ98tuMy",
  "key21": "36kUawNMqkYtsSkaTF1YYNeKF3DCop9z8qZWTMfSgp1fuZoYpYVcDMANNZoT6dhjtdhjF6hNi6jnonADupm6aFES",
  "key22": "zVAz5VLsHEBDLYAZJfsD9Czz4KUFuUJ5pDAFtiuDgf7F6vxCjW5LSYuQFctJ9WSEdFcehVNcGaWshw7cQ1qa1iG",
  "key23": "4HGcBVVGULjHY6noyJgmPA1Fhp6FkKA7hWwNs6iHGXNQn6W5Gbd1DJ4eTLEMt5AvetDhHewdvsvwvpiT76PYSYi2",
  "key24": "4dEftPxqeUncSs3pFwuutMPFxBLaUhqQS8zFyhtFW68ceUKgmezPtpDrm8MMUtg2QsP3dJ2KE6nq7beewCJpndwP",
  "key25": "3DUyNCLApPnqDxitmggSY31pFSa3iC5omne3R5XzPMJN3tS8CgyBqUPTGXwVmSnfHxU8KYhoakeFL9mF4b9E5LUS",
  "key26": "48Zohq8k78hpYAAFPXpXx7aPRvuQ6YZtUhBadJ5BZLPmuvckdEhaTRHC7xMSQskDUVNZsocGokhPrHCzS7iTPG1o",
  "key27": "4ZejRUAgTKRPukF13zUzcRT9SynenSfWA1jHohsrH7VNe8avJ87Pk5VAbRkMm8zZoHQgBRPzX9iAYkb6verCQKJ5",
  "key28": "4GAdVhBb2uzDQqLGRQQdw93EnpMCoJYtDXpSGS1Ndsh1L2cXcyGQ2YVnVPC7gKUX52tvsy5XHpj3ZKFrK3KVegvj",
  "key29": "K545azTqTggceXKbQ92hzuTrpSgrwNRvfUWYrGX6YtAVbUGrjK9RDStJUGGSV8J4UWXWoNzBnB4YMHRCTwMCXgc",
  "key30": "3GQf9Pej4hYTZGaxpjYvjeCKUxVD6FdVbcpmZG8gUeky99XfTvXynCQudmGZaxdRQLW3Wq8Eo9q32a9AWrZVQqrC",
  "key31": "5sSBSuZhxM3SEpFnmGVfZMQyvoFnTTgqarReqeTC3sorbWkRXdjPqET88zPnkMJpmGTjqJ3k5u6QW3SFrQzKuLn9",
  "key32": "5vjmvc7QsM5ttPjncP3Re7CgbVw1Y4tc5apuCzCPQc6vfAYdWrWynpvauEnveoR4xpMFo1gf7cgUHun9q9RAF3Gv",
  "key33": "5dpqFhonCfLdbtTagu2gvkhmX3s27Dqb42CwZyuoWhdGc5UorWG4KXpQYN2N36eUUECNPgYYGpKSNv2bamejr5WR",
  "key34": "5TKLD4BgJRPurV6hgBEK3pzEap4oJpvGNL5nWy16XsCeCWrKgFjE4FgTHNW2ccF11Ydfxk9sGr7HmdQ2s3mmeAtm",
  "key35": "5irpvpoSQ6M9X9VnbYUrAFYB6Qj7ky6jTNjSUhKjUJ3hkWcCBi1mUJYGevrL3p25FJapM85AZHQoqGFZA3D1dKYJ",
  "key36": "5g6xGQ96sRQ2FfszaY2fvEgi4WLuBCiGHUcrU9vP2oaeuJ1g6aivwgxHJ86MP53hpcSam1RkuJF7etnSZ8PDHYqe",
  "key37": "3dP43qGVRUq5L1meezfeaJKgJmUkagUtv1DVYsTFqNh9XL5ZCqfsRgCwphRSLX5KPv7rS66vDSRKqq4VHt5wopVt",
  "key38": "MXhkCqtuAqt3yCWuemDLxf6kWkqyEU2dy9nwx5kEY7XoTBDF1VPp5rigBS8kYEHxB9CRV4GkATmA3hSEZqcnGYq",
  "key39": "3yz4Bxzu8sot8uNpRsmoBRPQzTXwumUW6B9EBdKGiebBf8QGZZRbTM3vLgRdEqAf1chyQukKJtSzJ1quq2udxrGh",
  "key40": "5RAmpAsXuSp92BKDgxmjwDnE1xm2geo8T5M3gke2pGxJUgaNQQeoN2krsaFJhrnr1rDmUjnE6Zb41k7nPZDiQ6nv"
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
