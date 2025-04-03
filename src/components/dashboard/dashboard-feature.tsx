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
    "22Y6S87CBAxRqhYYawVNe1cLFx5jxju5GfSa5aGXyTsN9a44mnmKY1AJdBGEtk6piC5WQPJVrUrfDnZd8eznj4Ew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uBU61DhCiYvpMcd7aF8e66yKM5AUYkRo9EBv2Pfug4Mty2QcazqPdj33AasMx13QixRL6PADi5pKq6sfEsNMgH6",
  "key1": "4nA9tW27vRruCUWKbUwRtWGKQw7Ctw2fUWszS8cWFkPAXxNvD6e8QrcedG4o9hT3ULyGo2MyRZjRMJRShd2enAJu",
  "key2": "3itWrokRBd3TTZrHsq5QPrnLp4EiWzY7q5pBczZR4VG9ZfTJCfssxpPiQqUv8xQ17qQYfmEbUSe2BfvJf5APevwA",
  "key3": "5m9zV5BfaPZmvY5TfvEpfCB7hVCc1QTJHjLprTVh5vChcgjxjQu8927LpgUTjrRwVm6sAneyCReJhhhEGaVKXqzU",
  "key4": "39bZBSC59jfJAc1r67mhiEiSzw6jTPssdwcDiRjU8JnRsGHRdrJr7AgcSiBo8NquDtq5TwVBsBJ1ETmCHoQbbiv1",
  "key5": "5vAdkmPiQ7p8AGahs3znoQWPNvbnMU98GkPoopbmK2DK1Mm6jagy3vv5eyk77RYKYcVBtVhpeQUXQXYo8Liz3YAf",
  "key6": "49h6nmaKhgrBfbpw1n3GgNHRRePV6oLXPWcVR25SuzT8T9q8PKaUMH1L78AFFbyZG6sSzqE8PdyWJhhkWLnxC9f4",
  "key7": "2Qa1bdRG2NS6ZEeQnyQZzdeAFMa9hDnGaudBdv5UkzMogHs5iW8AoaFQ8sovDjpvj9wrLdEPLyQZpmExPSChuVpB",
  "key8": "swwrt23AcdBBRwsehGuaJKdpPcSi9xUoD6Y4sHBcHAouqUbDWF4TKaoWqQeVZoZk8EM5eDevV5an51r7dQCVwL3",
  "key9": "4QBr7a4Ss8m5vHD3HVx67kHLTRQKrB52KUr7Y6FMiMx6gAoxmXitBGkAsFLiVc9ZrxAo9a5qKzjN23tfLg3AR9PS",
  "key10": "2eZABMo3vjPsM1QgYq8yNyN4dxxvAJ3AZpD8t8jPFUV6LoL1yF2BNob87tc1TB3EaohPUfNTSASQ9qLVhtNRfJYV",
  "key11": "6qxVbQa4u5RMsYKP3zuu2YCfrEpX7ujdtc7W2VP5M5uVqsKgRFTWVqH38KLANAbRXMGw5KzxtmQUH7vTeGYjoNb",
  "key12": "2apGv36a61y1KS3YmP648JGJEs5okvehQ1QfFMZynKwHsfPuczGnyRffwpU6K1BacQmwpSk2rn4CauzsMYYhUhGC",
  "key13": "3TdTCMgrM3F2HZLUQGDDBCacDHBV6VkciNADwsvUiaQSfJKkjLjUUH1BEJKC7TWHs7tW5WuXw6hDRPMH2tg2j6fM",
  "key14": "3HYsLX9FFK5gYwmKhGYW3gDTspU8K2DzDbaGBvW6ZSTmxriPb3S74iDytBKQA1cHJKCLZzkgvxdbJJ3HnTUwysFF",
  "key15": "3pW9h3k8U8aUNxdBRLAcDTVokBW8pP324xm9rGHUpZW1FXRCkurUXvtbNJ7bArRcuZETkRbQc6V8aezdLPDkjiyB",
  "key16": "5cpLKPpoGtB2aZHwHYh9FaB8JUrNZxWvkKCtDfjhBM9N9u48i7wJZABQQmbptSSYmh8j8BtCyvhWpgoXyuxZLbsH",
  "key17": "3nfu6Y1LFNDNZCGwBcpnLdhEe3EjSdgvpciqEX76JwwY2bQsrKjHhuBxp98ZkdaPRh8QsQ3aAF9V3z38yZ1jxdhZ",
  "key18": "2tMzaHijUGFvVZNxnU56mTvjs4Tkns9PqMongg4R7Bcf9YtSFwpJug3NxRsfZXDEXiuz4nHAZEoXWazNncXSBLuG",
  "key19": "VJv5pKBHWZN8kcpWQEEM6JfCRJuovAa2wMMkgXvt3CnLLdxB9cqLpfG6F4XQEW8K2X8UU5DWxYCeSapQfEHhiLZ",
  "key20": "2YQ93skSfSRDeZp87h4dRnGCMkR7hkEa9djLJNXWJrndCAWAnYy3FvUSctAy2i1WWwNjGGk4bCzJhD9Z8qKFWU86",
  "key21": "3SihpFjA6tGiF5UYnRVKkpW82moXguuPEGSC456K9x7z5ajGA4qxDGuii3DzBm1w9pNbLT6UiY1wniGHKvAufitQ",
  "key22": "5iz59rMiNThCjF4HjaqBzCwhmkH7icSrv7b1fF7hF5hQJRgoHw4aFgLUeRHXsYEXGDv3oeBQVuwoiY95CnWkp47w",
  "key23": "5GcbhN1xd8hM65c9X8UbFXthQoqgwL76AeYV3FtS6ut8tPKxc2Fx1FBcCTcv5pnD3rXMCakpxyELjcqC2VqRpv4a",
  "key24": "3RAZYw73Acz2Ru4bVhDtYb5V1dxgw3P7VdeRpA6vhTHdHzpnk5hDi6U1nA1vgA1U2b1wWwoU6LRHfGHS4nR6vT5U",
  "key25": "3zEaFw4fj511fDiuzmtby7JWc98GwQ969jPjoHwJ2ayMUpNpE2WDriCQgQPpQpqFKH6YaiNNmrCJqsDkFCan5aEL",
  "key26": "3hdgn624fdkF7iiTDc7Zc7tSa3ZhBEtvjZ2rDk6M2bLT9WbpatCXdZH4zatQxvvkoFuTAor6Vh9c9cVv9QxS8nZh",
  "key27": "4ETjPAYzAEjf6f4yoYQ988tWejeWukQNJwCLyzMbBDrhNwtmDfvv6CMSWeCATwp9p8FPUiUMw3AsVZkbiQewa42Y",
  "key28": "4XwyBAjx91kr2ABHpEEBvhk3fmTnaHp19FEwAEzaDfjFKPqrtNdpBLaKUuGPsYdgrKeRJA9z5XEesECDZHFuJGJ",
  "key29": "5rn8asbre92JVWWmngqFqY711N8qrBJ7YfYDKRm2RihHvWfKNpH2nqs5xUiUe4JHsyvXvF4Y6XKs3jUSNKBf65ha",
  "key30": "2AZgVDPitYnmAh4osfBMcFdoQqB1GzeeLENpg2oWMNiniPYi6AUqWEtntz1xjCYdQyMspcwUTA4mCxBR9y6Z6Pc1",
  "key31": "4PXRhpgK9nj23xy6tX4YCuFw8pp1GjY76c9bGBMwbXTTD8m4qZUH5vjwwnJwLykN1CF777WZZge9ycZn1K527KSc",
  "key32": "5yfXGetAjja3dUo1meRp7rxpqnqVUAouK9RYXHkmXcwsdobarqTSAFpErZGcsiKCUazJFUHjU5khWBTA3q9K3KRD",
  "key33": "3Gdbx273W6ficKhtybcLTYCvww5VpfkQTL3bBcXtNZ8CwYC7C7xuVAm9YaXcJeVoo3vatrtVmrRQ9hpb5ZzKeVMC",
  "key34": "3pFDvAJzo5jrThmLn71BX6ZWEh71UxNokaJku4SvLLTaiWGgwnR8i3HpFaLvg92g9ruT43td4NEEgPGCB5eTiGjo",
  "key35": "5xtcUwt2y4qMhsQYkuG6d95gYnbodCiDTx79xxTwqmbrF4HZoz47CiMraW9MsdNbknEksUYTsNe7pDWiAct8YfMp",
  "key36": "TRbhuU47ew5Nen4scepqvVs2U3QzEkShmtmyECt1xCYrcRY9xZS6vdK1mdzx5tiNxLt6CtbDR7Czj4RPyZ9hEJc",
  "key37": "5AHjFToUVb9i2yXGyGWJgsXxE3vPDSFgpPehcaTwtq9SzFA1uK7Qu5PSUbbqxetR6iQucxh7Ks1TRdLERuaqPsab",
  "key38": "8sPbLTiuBuPVnYUHydWXbHvMZBkVQrngHjAgpgQPkCYjupZ6zsuc6Lw8dbhahou2hpZz2R62tuus7Xocty3rskH",
  "key39": "5isv2gNo13HGbb3fVeQ82GBQEaxXGBR7DE12s3k3B1Zd27cwTRbWxyPyP2Gv8w3YgUnaPWNZwK8VE6hgTRdw3unm",
  "key40": "2Je7Qqyb4k8xGwS96MsenxGwesk8TXJabXdXTn4sQXDb46kHsyYpPGgUxZX8UvfqvrwHv4Wj2YdfangXyUovGxDp",
  "key41": "5UTqwDsz2RzF7ZgoaQXWtZaLPm7oXM3FstqgvQzWqp4Loem7czE2m1FEMxzSycMSQppUCz3svXLZVhhWNYv8HbVR",
  "key42": "515is12iLV62mFpvkCjGrq8sbkv3d6ueNiQADss6ehiBzpCUJLYqG8JJJCo8hqp5j4jeMWJsE6K9aRYx5iqZXi3Y",
  "key43": "2j9FHWnHFa9NzTjQFzgaZLs9wNTr3uNbG3MTAb2JxhL7g1kcup9qJAwsqZuzmHregPrUmFLmMoxvgavMoJwoHaHa"
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
