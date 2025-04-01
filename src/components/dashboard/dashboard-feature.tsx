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
    "4f3kNbgB5pPqYPre6J7FHet71dqwv8okGV1eFQkpPzuNGGWjX7ZGE9eNQubnQrnnziQanzcKPBxcnXiEn1ndEQJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tNxC1AMqF5VjJfUUkcdp4mDkfHvCp26UKbeNehmwnLowEDdVvsC8XvLaWPDraxucHnRipYmNCTvrDW4VmEi6tJ7",
  "key1": "46z9cD6mi2kchgVmCbQ4YA9wnSzxqep2w4D6cD77ha1pPSYLBbXMtFyWdSspULxaToC8p5wTfaUTYe6k122MUc3b",
  "key2": "5jBkNJ98ectUJK3i7EsmHUZR1a9WLcjmpS3DPN37eHYQhGHnBW634buWysfAnG76y5pAVe3TvrD2Soanbckh3tDr",
  "key3": "67HDH1D3cz8NGxR3gKMCKZTyM1yz9SURtj7gYM2179ocmGcoho43bK66kN5Nxmn2ks4jkGFSHpUaqTDvBg5G18MY",
  "key4": "Ns7twBmCRhgi36q2f6Ut9feHQnj3pRrx5v5HbtHNCuuPW2KyVCJudbmzGF7UfJfRFUVNQmsDg3FqLMzJBvsWAsi",
  "key5": "ZJLyi2ru1PtZpMBZJ7Z7ZB6aGdjhDmt4QJi4vXh7zYAwgXiyuxAkJKSETA8usF8ttQ7HUWtA6TbPzsX2uWuF9k2",
  "key6": "3U9rvzBkoUCUE5GLvYb57zAXhCVdkgztv1gPQ4jZZ24QwSqpoxHFJRmCYbwPUTjg5iZ9jsa1Zx1XYhgXY3Wyiv8e",
  "key7": "W8XfEihhBMw6FtvCFj7ccoLM9JbNUPQDASyX8MF7VkFGsADCuAUD85AMHeEtzBbnegoAtsBGmsUB1ntkdQmWhMq",
  "key8": "29VmBUYN5GUeCHZxw9wpKmVPyga1gif6DY7qqbttWwCNnm7jawJdPjXQEKuhxmgyHRJNsnER17Ls5hZkoiKWWVv6",
  "key9": "3VHZTpxb9HKxZYh3dXJHuK3cyKp7jU5vkYvcRtmUfxU6VUMQBkBvrrUCdS3TBhm3Jid5kBHcbWPE9UdhsfTdKCnv",
  "key10": "3gktKj5vShzDwqsseQiKhF62RSgSyeQY6KZDZ2QxpZwj1K1hBy53EieGv7CXo5Vzoz6LYevsWjG6fyYPxXhgYvXf",
  "key11": "4CvWrbd4hRzPQbczg3RyLSPULWfZbLFd41JW1PNAwPahbcePEY2eErJFC819jYNzbVjoWKcPZKYbs2gv8JfxLbwZ",
  "key12": "2TYbDzar2xS1CLF1SkoQjftrE17djuWJp9Ba7yF4zDhHbGvRFWy2xGuQ1ZLYLeDncNtRSjRasDTYU3Zp3CiQicKb",
  "key13": "5YsgS7E9Ntx9W99nGa2iSoEmzgK4wKCzdWpLj8AmQLjjkGKHKeFZ9pPeLsWFm9LBDRyZ4XQndXMH2KLu1SBNpzNL",
  "key14": "4W73zTZ1HXkJRe8NG3mSA19eufn5R1kWtY6JMoZrDDK93PrXrLy2LcySVff8qeC7mTG5NZtuXLXKgPtRHUs3KaRx",
  "key15": "4QPKwszs7FhQzvzSXg5ne6RdhLtaiTkJRoj3wsMckznwoe21ric87gA6uNGjtrf7i5Cewj1NcX89qKvSJFwhduoi",
  "key16": "4DGXNBSzbXneiR3biNagLohJGFMAfTGgjPokAJ6UAKq6FdobJHoqoVuD3YqmJvKkCGfxePJN4ny4cc3zn2qz1Mns",
  "key17": "4SqJSfHxRU6pLLTW3dBpt2MVKoDb1tqQiywAww6CSuzFU8x9mg8EjfmvgMSdsnaA94LRsnFRrKsHT2rLh7MN1bgU",
  "key18": "2VwyFxR4CfRuc442i7EG6w25J1FVUDJA2z6xgMVrgQ5vtWx2U6fBCVryH1oXtThhWuVFscFRSRHD7MyJFytniSYv",
  "key19": "4awtiCB7DFrvGEbyEtYmqcMieqqt2Z7ycykD234p8cMdqCqumSxnBs7WF3DFSxVYLuDQFrrHT3nCPS5B8LrpWSi6",
  "key20": "44YBeswXvphgxSeWGwivGWtSkVUAUcCfTrX4FYHbRixy2k54vhgy39D8NmNQ7QVJSm43AiwSzf4a8ggiGb4GFmfg",
  "key21": "4gdStx31LKVinYPnkGBvV4RdCH79qaCkyhPHtKhPiSSZkerrNzjLJdryNWw4yXVEMVJmvTjQBXtEKhegRsgpb1r1",
  "key22": "5YNFiFTPmQipDo349TU4Uu24bqQ4kNM3i6LrcVBkQaiXbTT2bUsXj81sYT79zSzAdLhZQ61GYWUBsxuM4VQspXiD",
  "key23": "3DsmgN9fB3UfewJ5MYpBSHvzZwLdAEn4VeEaLkKrmc6cG7v2uPKEopmctW5PMVPwPa647rRxSCMsjF2VKMG99HXu",
  "key24": "5SCDXYP6sLHTaeU8aixzkjAf3H5H2hBXThxGpD9Ln2CaESGMckgqusGtE8A9QfF137Su39WYj5DWtDSUzAH83pUH",
  "key25": "PkWhzhsKDgSz56dw7AYMzUCRirVUv1zQFXWaVY9EHaVU83iC3iTKuVGBZMtjdAKWUacGEAXrbXMu8XoGCHtaeAd",
  "key26": "3GoYsGaWiJtvs33N7GuD3uvruSgnL6sAS8QuD6Ltva2md4AojA8TbdPJNGLQUR24mbjL59ETLFdfXBRTBJ6g9YsS",
  "key27": "3k6XBEeLiKackobtMLwcShqytNPYd4FgbaSXjPy7ymgH7zckKVDNSeAxCJbvmMFXmbnQtgSFARmy1kPXMvq5d7i8",
  "key28": "DkcA3mChpNRGt5uKpL2oTaWU2kLTQxt6XDW87B9vsuh42hLnAPoRxs9cVZMZMcqung13U5ApzHRSeNaks2ZA5tF",
  "key29": "5y6Cv5n7nrUMYmSe5K4KsjtkV5mEobidYUju267rPQz9E6Hx6xcB2VqjUrJoYiqHoDMRqn8spiLjxj9zW785sxFG",
  "key30": "2fT1ha6A11Hhj45isw16szYUbCCQfJfbe8CTvqPXYYxZamyVA5cBS8DzPwe9qBHYK1HULtNLNpasxaht2ZwCEtoG",
  "key31": "5rdCeqx6KxGVUMVjCcgu3YVhjv5dMBPfFeHVPFykrk3jKX9zqnL94GdGoMTy7Uk9YKD7A7ADvymDTiL1Jjgahoks",
  "key32": "24mCceen7ftAokoiZPFaScZQN1t3c6XH8k3fRsCV2ABhhsTPTMhY8EaNzuZ6yCN1PcxpxbDjbo1KuRJ1jS675VJS",
  "key33": "H5JtmVqUN4HssALPxUcRY7kkGnyh6hYu3VCstiwwY3RAa5A1nEwxmdCD2aXULq4QtZkGvEbBCP379vTaxRtLyqE",
  "key34": "3dnsPx2DhPB9fREzfAasqzZp4ekjASGsMameZszLB5cGHQjAB1VWMTfhR3j9M5uSobNDQmtq2HB8J5g1FaJ8nQLT",
  "key35": "4jATbHducYw3RuTiZgNFcjp9zEui28HKUMx15epLDZ75rL3qMkNYcG7J22pZXo2gppoWoe6gYift9hE4s7imAcxY",
  "key36": "3ZE2EFBvJfVmdiJUqvcuhFKe2n2Uhm13ADwtaxTz7rYUjC5KZ1aKXwhZPpBBaAR7NCFzBZjMpFo8ZmNmGDFfZW3J",
  "key37": "5daneAHnE5U69kNMcJ7roo44X3156F8d2twJPuaYhsn7jCKpj6mzm8j5mf4Xkn1wd9fhujbsvgw9FxDcQ6tshBmr",
  "key38": "5g4zDE1zsTpy3u4zMUv5xJBKanQsQEcnGwiKWTjmTkxQRyDkQa7rHjorwHKFNdAkcNKenX9cUbcXNxtiWG8PYzx5",
  "key39": "5LjGiVmjvjUYWAvW9Fmm36sLuXmrGs6gPQVs2LwnibkfKkwjDGT87i5krveVnBeKH8rN5ech2TkjgiYitnMdbcG7",
  "key40": "2czvubKCRN2aPrkAHumTifyrQtpQ9X8aQ2XhnNQUb6upwkqenDgU1c1EdSsqkTHr7MkUnHJcchtdyyiRSCBYTiRV",
  "key41": "636bXbUNN9JC3ujRYpsmKQux6hBEurxxttiW4CN2KtypNTwPascbxP1oFf1hp1PdWuNs3MeSz2Ho2Zf6uSSL2qqU",
  "key42": "3NyrpmAhGQ9a4RqEnfXixnA69X7QfAyDxVKP3tae1PSGQLbEShmeqiESdttACcHbKxky4w3ktU483pKRDrAWXf5j",
  "key43": "wE9fE26PGc9iy4ZJ56os49uFizEvXLn3EV5y5wbPeDNfLcpEqKmwaGJdVgXK3Bj736xV4nsVpA82yxRM7QKikhr",
  "key44": "3P4NyuobZfnVr8sKYNURZSYwtXdoAcu2bUZi1KTPFBCrFheCNyNCLqcqw7hczaDGvxnZa3B5BWzSqfRZaRkRCaPo",
  "key45": "3qQufnksseGGCPtAhCSnEVcDnG2oZUxoifeQvkZu3cz2MRuxGMSYDrnBgtrY4uDP3pRfMUAq6D7MnPcXeuripA5k",
  "key46": "Q45UDgGyZp3ypktyqPScmF5UhDuxLW2MAcxJDeqrPT6sT2f8Ery2xmiD4zY2i8fuDuCjju4GpAWcYdvRPgVuR1R",
  "key47": "v9nf62PtMvhYhaj8HQaU5ptDCQvCrxLrVjhHzNhScTww9jpXWiCGhfgeYp1W2fo2QUNwh8SNkFzLoWh4Hxc6T8f"
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
