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
    "3fhNHqCxjhSnBRV7hZBd4ps7fKXjiEk9yqYeiDb6rT9sP7jVGPszuhVrCk3eYNSiC8T7xGEsQ3jgtBT7aeyzixYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cUr4t7Cn1QXcipAC8pcQAmYB6JmHT37RaNRgdhUxXVrmyQEoYMUuy7uMx9j4XFUdKC1ehq667Ejc8Wv2fjezZUu",
  "key1": "qGRca7oDvEa4mzoBsgJu5M3XYQ9tXAf6QEV3CzuxsEbbH2bkqfNWUT4Z2g9KtKfVZ7Aznqr3uxyWK2sRGLhiHr5",
  "key2": "2iPXeQichq1n8EAQtmgKv1WAXiTvnwsSs2cNpNCrdUT8KwdnBMss8p23hXZVSJwYiDaZzKd29YqKEWt4oT7RfuBB",
  "key3": "5UCMzWmJnZyWrFJmCzQz5wn7zYV2ZtBUKziYK9NmSrHg9NXsrxRXo4G4DrYWaQFsmRqDqQwXD5yaiUZFSnNQKj9q",
  "key4": "3fEQDVEAo7gcgJHij2wzqMfwKPGp6FvQVXF6Nu6aeionW9nXcHEUmD8FsH8eu2zBH9QyZHbTiYebvWLdDSgndn4H",
  "key5": "5R4eTnWMK2MhU9uvHnHCRxWTRzYxuPNNpyyBuEiEbq1oFBjjPu7789sAe6E5XGicMwJZ5ezCM5u4R59xc5r3kTzz",
  "key6": "4jG5DxTwcJDzwPEXBahm1QHC3xXuFft477i4jwLm1VU1irwBKEiZ99tJBKBxypPAnMyCUY3xzsyw9VzQceDLihic",
  "key7": "5mVc6zpcaeuC6NA25mTzAHsRPyyiA1LHfUHq9htfm3EtkPTgArXDc8nXw1BCZJoq8gdYZXyut8VMcWWyrB2gaahj",
  "key8": "3DJFdABFEduwBLymbiQprCXaq5sRjrLFL5FV99ukcwNTgonDVaRZTWFrrn44jfyRSBNKrZgaJ9WsN4RNfEsPNJX7",
  "key9": "5w9CT7BsEpPRxN66xHicqTTfNNBsXbhXofouJtoN4T3wnmCVPZznHebfutPtpujevNWrKCdp5n5hbFU3L4nEcbv7",
  "key10": "4fdKg3USXsYqZB5sjkbyAgKmQvtvXn3VWzZqoSDbHEmTRsUJ1QeiKJ1NgYAb1Ga8NzrCFVq28NRgdoUu8qpsbbnv",
  "key11": "FYENaZ4qXeuDSMnxSNtgPWYGib87HpFsbVZLmZwCPetYe9CJxmghAUD7MRzu3jmFUNNVHhEVd2omPBAyoL5t5LZ",
  "key12": "3Ta5NaKf8UDDdcHEHqWgWSdaVf1XHSQ7EQYe1UoMPyKxQZy2T7ySHHsBZju8oVEgtzfsNgQzrcntm3WboU5yaFaA",
  "key13": "3QNmxw89xVKhVCh5Tu6ccUoDUuUpqaJv42orm3SVtxFFq57Y5Zxewj9C2Tvw1niLf4sKrVHW1rfB1V796cS6dZMu",
  "key14": "5ncaEdga3tGpptYZcHPnQKfmXyQJmjx87WkgrxUNy3barvH5h2LusfNMCpgUu9GvpByKiMdWjmDKfZcBbCNWqy9Z",
  "key15": "4Gecd4FSwNAk4fUpAPkTTfahyAkTi7c2yNrAHMK56hV5Ru8jdxJs7FVHfhi7NSwo6e7uAP1vYoxioAwSm8cM7NgS",
  "key16": "63mcQaqArZ1rJx25GzACKn4cgcddMJjFUqjhKcbm1Bys92Cq7ibWGkuJUHtGW1YedfsghgUZo18XrBDa6pUWvg37",
  "key17": "3dnGe36VEqunsskZqiDcojkKxYGJohE8ksuhUnxLjdWYDmaM8uVN5RuyfncTm31iFdLnMcA7L9p1ZoPumtGbpgxW",
  "key18": "61bLUTYvMeVu4VtbQ5omVN9LMurVCjipYBy1SJNTVyxtLD3SfHp8LHqu7zgZVBuE8zgpZQimrJspxrUG7sdEJWKJ",
  "key19": "5TkQ6ruAmAT59AbT8wLwHNV9VqfvgiTw2iDtzsaTGFgAjECoGCFJRebL38b9HgJpA2LmgfUTEv4nQbBszrAG4CRw",
  "key20": "47UTSgvcKwUdpYyEeWtBA8Zag1i8nebQzEJxatsPsZmJ4aLAuSAkcv3srQNcNMTG7WVQyQ6Fz6VgVGhjFZwkS6KV",
  "key21": "3ZPbgMQUv2bSbxGzAw8d7zaXbMG99XjiM6VMP2NyfyjGXyTUv1K1kCgqTfJHzEDz6E2PLCjbRDf4em26UNqkGqHS",
  "key22": "4HRfkbiVxis1jnJaTPnUC4gA4EQt9HK7UhBEzAfCBoG1LDL8cAhk3MBpnqtfKP9dhfuBUqd984Xa6GRa2GmwwSdg",
  "key23": "2KH6WP1RJkG4kV1H1V7R1aXhWK616ceDD8FLSVE3gmYXhZ5SpvfkzLJ5JG36TwM7uQr5hamuBayXJdyKg4HUnpsR",
  "key24": "5mgX9UHfNJqbdNiKKpsCvwdvMNnbhRV3KgGLgEXW498wfDUQ6a6LjcfnQs6UwYTH8ZhEDSNUtagYxieUnF6FUJVA",
  "key25": "4PRdtKqkN3TwioHrGw4UURH8QGQhcW1gKcTm1fitGjB7DcMF16jNAzjmVC9gF1a75UsEePeK4W1DZz91TdNJFDJc",
  "key26": "5uAysK1cGvmV5ajRiMVNxEAGTA37wdSPGksUqt6Txq9t8jrMAjiK6KGeRC9D1CfDXFcgLZe2GjQoovAn5KufKUkT",
  "key27": "8PDywmc3DRYgsPfpJN6TGGyenjUv6m5T2HfZNSZPXeFWc2kzwZCQg5EiPi3dJCfFsS9HdjruBBJgDeKD9Kr8AgZ",
  "key28": "5KEzW4JtiUujmsncTzPZYoMoQQd8cJ9QENn5LCd4754QTYAmSEXgaZBBuLKM5W93vv3DZWVfLyx8h7ddHp2QAH6n",
  "key29": "2FY21s5Pbon5Zj9k8sBzWP2fXeSq4UWLBq6hsZvQUZSczoBJYawccnvuGFX6UyurrzGTTCecD8S9ah1BwKycUxqj",
  "key30": "2H7ymRnYw8XqYGTZXs7NgQb8kUJHMqLazHZtX4UU26pyFGrzzjYEjDjKjf3djvaCFTpb9gv7o6vgKu6J2xLYcttG",
  "key31": "2gzrtvsriAxqfqxihSdMU38mQF9uNKyaVV9w1ohZiMx45UC5bqsSUXYMZ7AHvY5MSSnzJPj7K4a5ATNjbJstMXk8",
  "key32": "5WmQVHYW9v8v2gpdfW21Dk9s8GnPodxegh8gtsmLeiJYTLENMoYgAbXzDNmnthPkzw797qCSP2PnsEEhJuJuFx8V",
  "key33": "2x4WP62ZpdQb1Hw1XidZ3UDNeLzP1p4uwdWWgKtdQq7brhgBv9jsgeR2J8ZcYiL4Dgx3DBvop3qmp6twY1K4hUv6",
  "key34": "hBQP3Di2DnP599mtxdCTQCB3Y8ET3DYzDkV2gQAcydDM7X7615sYMWSfTTDhv7mev1FRzy66G5FifQTatU6uqsw",
  "key35": "5ruYhuvQ5R1krT1HbgdknuScH3gh6xraiKuLLAeV73AsBonV1z43ygWGLwhFY3a5YLJFKrGvHcSfA17jW1f7gz3A",
  "key36": "8cx3WNSQTFdxpfNFC8uoeZNbzTs75tyHPRgbgiXVdz7eLDxqHfhniHuFZXXfBi1eQtaDg3tGuzC5Y3JLvtveZoS",
  "key37": "5RcL1SEQd6bgV56D2vQPU6PQmjq7w4mm5qwo6RrtFXoBNcxBb1Q9FEikmVEuT1cYmne5zxmDB5PpsJq3MJm2ENVN",
  "key38": "3NAQo3aS5sa6GruSPR6CgJeaisij6vDW8nsxvLmkWE8hhrvodEftwS3Furhgy5DRCQXDfRvS2JPwMb76TToSi77c",
  "key39": "4SzUoAJgnDqgBnNcTTx8ZcPpUDKgyAGQFnVtxLLifF2TRrvQoDkQM5otFUA3jh7Gz5A4b37VUkAHnio2TFgq5rD",
  "key40": "3ebcc537cA7NjzrhPRd6B1i8DbWAagj1w7bUjvvsPV7Aiok2rXqKXLHWiQNAEtxCnfR8S4q94dDGLTjmRu3ZFUs5",
  "key41": "2D2uJEgjPT1UE6Wau1RJQARN4iXSqM7u6AQeQCseGW5ncVxK1f16b1pkUTCuzQWxNg61LPgvjRGus4xR2J9yde4s",
  "key42": "2MjUSZT4ToqUKSa5ekvLuo2kDFhKRGYMxuAUYQa7ikzy1j2noaqpwRSwEd28h9DHE1MmWqT2ziTLym813ZABq21n",
  "key43": "4sCpgQ1F9rL67cUTv5UzCgYyu1NXX7fNTbMnYmW5bgk1Wigwy8LK2vat9BXkzoFJecmjh8G7kmgwo51zpEzxb8Nc",
  "key44": "Fv3oYgnYzwp1F6CCifGkn7yz1em41cy9KwGRi2TbuX5sMug5ob1qQxtggMmBEDeLs5KT5ruDDMJLYTvgNrDdyTK",
  "key45": "3jet7ZGqpFjLWq2ta6KJbc8R3wQQ1nkLxPdd8zderoBdRERxeJ4rvwHxvfUUirAfSno6M1Vb9siU9hnsS4MogmFV",
  "key46": "3eSSf4K2u1ykkz5nSdj9c2TV3vyM3gHYkXB9KnMWKuraVk2XRENQXcxAp11c2Ea9M4hbDFarcGk2WjonBkkqEcxy",
  "key47": "2aNwzz58hxFmGAvCSMdjj2EdcZRuSoY69YHniesFpgFfkaqNXcjzJvweP9fyWtJXoiddRYcqbuEToU7jUBVNFj3K",
  "key48": "3ETZhQjcCm9eLcyr47ygLG34S2sCJioUmvNn3GtyWusY5UuUbmuJ9DALz2KsQDdVTLRrAykGJLrYYpviBY6wnknz",
  "key49": "26zC3fgShtq8QskHsC98zmvcyc7jVMGAZ1LfSfrdUbv8PYi2arnT2iH5t6cQQhi71Zx3xUAwetNdb1Npa5e7zKvm"
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
