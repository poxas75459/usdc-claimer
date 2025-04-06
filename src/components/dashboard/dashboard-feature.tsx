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
    "3HpBNVVEfVURFdhUkVTutWFi7kn2MEYVhnaGPy5M9p4yPK1wWpysXjjhaV1CEDr2g4zU8F5TmuNdQn2MD48vMr3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4coowKhqYGeMJ8hfsgXpnbcpv2X6RybNy7JQC2xdTnW7y7FV8AxgH2qy6X8N3iLkVNwEs2avHa1nwMBmtkn7Lvou",
  "key1": "52zq9U5yLyVe1E5bEBpJVGDK8d5Qx9MMstzQjZgzhJHxHHopGfeYDbVMTD7WEqtTv7GsAyBDjQvRSrvDHXRLhKpH",
  "key2": "2CVFVa6ZQE8schR3eaw27jTiqfPwTfcrb5WHVhBck9PT8v7WPtcC1rG2RbTu6grtq3QA66REdyJ5wPdiYLcvr8Z2",
  "key3": "3ofGFDACJvPauHP19jhFJLXpo25FD7bWXYXxDMQCoibqcsnBbexSeoMUMwJ49LjwpakdYWhK8DcuBNJaAFZdcfDS",
  "key4": "4a9BTV3J3ax2wDtk9mGjHhNcAR9HnhFsMNqhMRkakqa92SyuWYnhHGDYHMAy4qKcVWhsABA1GCX1mu4yQ8NU513q",
  "key5": "44mSXDVdZVug43bYNwhCzjHsBXSiT7siQfbYNts9yyW6sFKPscSw554kHUqCWsNNiF6CV5CbRQj5WSkC1gSS4y9r",
  "key6": "2pDjKMBXtirX12RZYTTVUNJ4AMjTgRqPmdv7Efj9qvfu1s9ULyEWM7NjPWEZdxND3dZ5LvkXPqYEoAZG6b8nvUPq",
  "key7": "3cSF9THvKexjBhLenKkCu98nHgQWtFNhCNMt6kMjPXXUueQtQAaCGQRJJ9WweJwg4AFQxR8qJvgePeR2AhLFajeS",
  "key8": "2uowivYnj1Xm59A13bQSMYh3Deu997HHvP6zBbJRvsHx8ZTSSqg1kh8tRMSbdxXYCZKVVA3bovJqqJpV1gvffk2",
  "key9": "4FmRgEFohGZujNkfre2pH1HwecGLmXqXm5QmZkLm9tsFMfcC3BdHsnbystRbGMrJAz3Gs9urmR7Hcpin6qwChXgc",
  "key10": "2869CpGQh8FJnTaRGRLg2bNNQ1Hdfuxb72sYM82DYChE26JmnWjQHpSDLctkfa6EuJjxUw6d4mfzrZN5VZyZK2pT",
  "key11": "2M81qm32S4jFWmaVYobsGdkDXHUFZLhYGm4SWVn1jNfZwiN4Wj3RU3XtBkd5mL9NEKZpxD1z1gSMxapNQro23kTk",
  "key12": "2Dz68CRYbEvueMrb1t4veUy3jCFRD3tBC35Uxgg8WBbnGZZnx1epoXtyX8tgoNs1uULT2sgRMharJAjnuzBZmvyf",
  "key13": "2BRjta9wtamije7ggqF7ebkiZC8HSimgUAZNQSUbsnDhwnySCM9ibDEsdD6v2JJUV6eZAaqgksxUCeCCVVkXCiiF",
  "key14": "4j2Lzc9BZDkVhG4v6p2aLGpN7yEhRtdbp4HkcV7V8CfmfgfQu2zZ4HVfFmRWjWh1S8TBqadbZroQUaWtPDtxKqys",
  "key15": "3NJ9M2awBT223jqqEe85eCmYHNcB3BQNC7dZX1vrn7Ly7gAEK8CRaA192r1Wot5iACYKGnsghHYKxrTpAQpwv4w7",
  "key16": "4DtitRJVuEzRuQicVCgF5BhMPfctpXB37rbDqyE7gikpfGn3Lbdv8ar685GvKi5zqza8Ae42q5cpSVDGkRGM7vpG",
  "key17": "5usCtBsL7FCtTH3aBBBcgXu6VKeTfDhXiuvCKGAzdkcNFsFWW6Yd6E4fri21Ut34onf4UGV4h63hsz9pFmzgEEWw",
  "key18": "32LBtkyAhv96irFF6fdDta1Nch5ReDtwGYXE99C8ZdboKPgYDTcqVcbJmGSLFYRb1zypyHZRB9nqipgjRuTpCPHc",
  "key19": "z3J9yFRStueAtzSuFKmub1Wiu7mJzPj3gdgP43aFixYN1uhZhtBNDp7eUHPvUHZ1wZ92B6ZX7p6Q61wMTKwsnmG",
  "key20": "Ry9zo5ckmR6CTm45Wsg5TrexK64bUdkpMhZvBNyY4sG8Myxik6P5gw3nw1iYLUJkmaoMtGsVvRUX6NiwzhTQFy9",
  "key21": "37kvaCCBbNqyNraFXJ7NgVY1q8wCWNhgNEnKK3Qc3yLQ7FyHXJT58PXY5n3ySeu96rcmdxnaiAtAsf7SRfbjuDtN",
  "key22": "4Z9coohpQLYwJGEqZUQ78v5e2Ve7bCqTuMiEBLRZT3NTifp8Zby1q3uWWtaTq665X3b8RXn1MZt2GeHcwB61uxcv",
  "key23": "MneQsk9yWkMdwFcAAygrgmt8B9VpzZFfwsToRaJV9zB5LLGmKqToPgRsoZxGsJBTMVFkwoFyHPUYApu9xxEEuLk",
  "key24": "2hCMSRYGebasb6tCEy9oynLZZoU3C3sVyWMCp1Uo8nt9SqNB7ogUtERyabjJmC9TW8k1o46SUkhUGujy44Kk1pXt",
  "key25": "4yfoknENde3nFx5zvqWvp7rsRzNaU3uAyReRC3cPKzBiQ4EiVYYLGp6HYNR2hPdSyiJEWG6oduhLif3NGgjrdcga",
  "key26": "DnRq8JhpXLUJjw54J2dVMoRxWDJGs8DpqgJ5ZxUeQKbr5RLCQPyaAWTaVwG5s46U39pA7LCjyZHDTHzpAfg6sdX",
  "key27": "42tbC5kVhvva3TWXKwDgFnFpxBc4gHWMqgti2LgVrDkD8CdGrSMoGgTV21WjLkPCQ56DRFfTWdDYPxxjHGSG1Lzc",
  "key28": "4dd6bKS96ocXu6FcEKfKokNWmKU9E5ykcL65DYseSraWSLsu9BKGxajMMrFefkj8bWnmNGUW3jw2QsowytqtexjE",
  "key29": "5TQVSXfViqXZhqe174BVXpS3zgD456sCXCVGqk8NupH77oF2naz2iSqFb5qJbuq2L4LoncXAtjgqM331ijYagkSX",
  "key30": "2qN1apZ6bCAmLQGzmdHAGUALhE6Z4eERK3YvP62UGK3hRKHyMLYvRFcKwqJN82SVLVnFVGHFS9dy5D3UrXN8DN6y",
  "key31": "433ZQAnFoXWYXc96DesxHfGjw26pxhQrVW6DLoKn6xjbTk7P4V754ETy4RJ9LDA8QbhgJujyS5VGTLqoSfRQGauW",
  "key32": "4No5HVrVpPdH65aR1Ze7s2iL9cQBsjHVbQtzFrWhc7drvygypfddv7s97V34yKYwiWZZY63XZ7gWPj3WP7KB8tDA",
  "key33": "aZjHBnwPZ4VUo6TLucMywBGMqdDhwng5WPpiVDKTZkSsiYMw4XKkYHvddWHCf4AKP39rSiNJmJNiUnrReYszhUk",
  "key34": "3GtnSnqLhTExoy1eyvau2qk4foZCLjW9w2SmqvBGynLWoqgL957Gza87X3K4rBJzjd5fRRvg3C45j9jA1xnMd9tK",
  "key35": "32U8BSAk44qUB55YKGNtaecpheKd4kfpi4cLDtkuwTpBiFYMcZNguTQs4Dgyq8NjYzrPutZgUBjBTE6VQ1NhhEPF",
  "key36": "3GAJQC8Zu8yUjVhVLGdZaBPJeMTeM8g8ftxJonAgm7ZumZUWBqzjnSYjD9WwqzpAVaAnzRb8erPGTR2a2R9iWHJN",
  "key37": "vFKobTNpJoobFSBq8mPMJfmZPKz3HfNna27Dxg5LXomEMcsgsN6EUcj2jUJvz6L3bjFGXEuWUGuQk8JGhaanjuT",
  "key38": "62Niio7d9eQRc2xQyrDzRi1oTq5b1YvgrJyMNAEXs5FmaLuWqJ8Bb1KcU11wQezNnPat3e73UTrFYAXdwD7Ms5q5",
  "key39": "4PuK8VHqVRuQY3fugx4AH1SwwQ1A7Q2oPLLAe8wbU3rkxnMreCXNhqFuTEAno38zjqGftjR4xjjoyYfokZ9xvcRQ",
  "key40": "PPbpmCiE2cYofU5H8UKmGFCmELiyoBedCmd4EMMCY4GuENMuwV3gjMCjiqMWpaAJ1PbqRDRxUwbHGtR9y2cV9JW",
  "key41": "4vqwA5ntvdqt3CcDorctVaaCQBTtM1QB56HucZzq3DqtHwaZa8NQ49XJ7ACUAM6EPTMmz4co2gKNpsqAYu9idkCH",
  "key42": "34Uh8S3LcNYV7kUFQTXaXfh8QHD1swJECMQfB53bABsnSPYU6BWEoE6sfcQKk2orwb3hSKaXAcaSJUEDibYs4z3u",
  "key43": "2M4YqGtqGV6C1E6Ckh2ykqgeQj7xHcuzynsHPCvaG31r3u5zkhyMha5HNrBwem8mZfbYkZir3bGZZqQkAyjGfYdy",
  "key44": "5KwhJivGcapMbuwTPaD7rCtX5sfVFxPFU5GXHi7FgGTFabnTjCDPY3VDaQ4EEEJVVpT6CrEF5hU2KUc8cDxXxRJu"
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
