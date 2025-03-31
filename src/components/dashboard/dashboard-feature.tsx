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
    "3Fq9kJn1RGBSpjriy8btnCQ8rVAERsV8oLJg5Woj5rhKUgE8QYxHo2wVu92CYgGReH2YUN2nD6YauuPQ7yUxhaP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K2V1p2aNxszvt1r5AWkMnUZ3q1ieNjN3xVEaW3wqKQx9beLyD7uwgPW9aJqx6QWBKP3De4geG6csh9nVwipVYgx",
  "key1": "5o1j6pjaF4Cq59U8yCPASBA5KytsC3EPYW5viMCBdSkHNAVkLRE2fr2AazXngakRFhvM4ch1vhYopUL3LJA8LZBZ",
  "key2": "2AqbKsvFC5Cchd2siNL9461D9Kn6Ly8wMiADK66SqW9JovKA8qffRxdpJesku5wQkm9Wp3eX5iasZd4boJnb96v7",
  "key3": "iWKwSvemzkCiNgHk1UvW5wAHzbcXJQwJdPGR1CrwZw2nFyuRgyikwCvwJX9LXWbBRStC4Lvpvkcjx2NYKF59Wrb",
  "key4": "3eNy4hFyyNXSHrHvQ8VqBGftUQdgPa8arB9CFQak61EFmEAWM4AD41EJh9vfBiBtZUERLwKPBNsTmwpPWnxQXtXs",
  "key5": "3To4guPQEoqnAZXatViZh3KKn25PoxPsJd8yNuaGf2FnPjkFGCsR5KZ7CfPHeHrgkedR9wB2GuSyRkKbP5qRs51k",
  "key6": "4bSPiFDtf5mKWuHGZ9TNocPsZisGnUFrDKgoQo8TW7ogHbZ59zfhEnxDDzzWqDS4CjNyZVGeYF9RALUxnG2tEt1",
  "key7": "mXDKD9WidTQnDbhYBuw2cKnqqjufjpBs2p4ewwAMCVyKQcmM2fUPqBGDyQYymNLLmNUJyDricDE585kNcj7uDQu",
  "key8": "4ZguSyRWjT9anY7mo2Fs7rRJY15Eb9G9gvQL7KiaLkfoWfX1iaCUo4mbomHwR1Xa8NHyNkZSJ2uLXrzc5eqXDCg8",
  "key9": "4f1qm8FMxRQsU5P8KyjikpsBCVgcvsgapvzY8z79qzAV6mmsd7UgwhJCCLmcVYs2qZSH2bxob8KBukNUxU44VFLM",
  "key10": "23n33yF4WAYqyVo8m5A3pkG7wYcD1DV6xkRsTiu1FNdM3Dknspi4nxdRkkWzGh4ERYnWMnvRd7nN1vtoS9XTTRcn",
  "key11": "43Q5sfZaRrUnVuka59CNfPJR8e5a82JAiCLSuVqgi2Yp4NqxAnHm6DR2k9kYpuK2TFL4GLJxpN23TuHAGJXELHcU",
  "key12": "5XkAeXa6S3b62dhm2atxGiS5qp3M7fNS3WPP1gNLHXNSntqJYneaCKUWfgrUKLePJKJBvc3oZbRZRNZqGiECqnp1",
  "key13": "3hdXmBUsTxq2LAzG5ibvtBYoG2KGJfPjsmUdCZHHvtb3adEMXHFU5snPuDwfb4xxxHrfxpMf9Kjg5Mc8DLwRvZEJ",
  "key14": "3wqRhkGbtMByMoLT1SwpFP2c8CkYKyJb7H2JYaHdn7BuUte5noHaGQeWvNQRjA5bxiympe9BMpEJEKorREN1PanM",
  "key15": "36dan1xztzGJzSAkYMJK6xhrLQF2wjygKYCjq3Gf5AKiHHcpnuZddmJ4Jufg8ztiRvamyHsVRiMhYEjczgrks6Mv",
  "key16": "Tnrp3vDMJwiaP4zUpqcyiHwmvhXEZu5Z1meXWauUHQUyV4QMzctWCvJucMZ4tnR8KWYyRR7Nh5zapPu5srqaFDR",
  "key17": "3vopFR1iPhT4qikdg2qPv3JYUteC1EMuFQvUzW78hD15e591wDmk1TUY5tybhMjKsRFb3XoAwzZKeoeBVAFwrPnV",
  "key18": "3GUGEXmJEtyowE9f8GmsdWfaThBdfsgagEFvuWRWE4R7ZrcX3HXKtGCHrxeTDtaVzJSDLKiHr5nmrskVZ9wcS6ax",
  "key19": "2jKazh1HPscntL26y2VVzeh9MFKMpSYUhKHUEBacuf1gmm9Nvet1bUJWWxCf8GEe6iVGqiPwCrvKLEMKP2qfBPQM",
  "key20": "G7ksUv3RP62nzso34pwgPnZ6drkz8sVLv7uVtpedJDRF8f9f9SQxitXywJ6UgSCpQTFxsKrq6oHjtDNaLzbdduA",
  "key21": "32BytYpQaAVohBKKwgcQmMekjaRzGBNDuniyyF4TyeMWLfoqBgpzDdu6KnxBHjwsJEaQckv1bxWBYBnhtcpA8pA",
  "key22": "4P9xyzpQFZHZaGDFATuC6MAPgmkyW5pR6XuVtu628wFPb71Lucmt81ETMeCn1HaheAZjg4fMTp7dHV3B3G8adW9H",
  "key23": "nwhwevtibXCtHjwRS96RguA9du3FCy5rxNAPM4tVqHyrZfmC1LcQnLmJ54mHYKpJTq2jCn9ZWf7e7FYtEZP16Tf",
  "key24": "2ia8JqbD7oLReSYiDmkaQPuz9D8rg83yZkttjaLtKiwatbvmuuNCs1ypPAS8YQQrizqBLzeCygb2T7nYizvgfS9y",
  "key25": "47EP78WkQGC6S9NDVVjHJhxUAvThmAz38X8thcXpf7QriTF2NuJP4x1hdMV8dTRk6LXEHt67EMphiDDe51fbqMq3",
  "key26": "hx8AqNvj6qntwgfBRM3yQUzoPLfUUFtkEhoGmLjFXVxECYraVVLqCgY16w1aukqgJxxFqJpu4yqm6UKn56JjozU",
  "key27": "3Fjb5j553zpJ2VHkubjJNfA3RP6eYxpLQ3yd5Y75Smvjg6BZVdaf1VdmbvWpZiYJh9Zvo7fipYXbTJGDJ3C8MmqL",
  "key28": "2nyvQUKr1WAbbk3oUtQhSiePwAouPyDa5vE3qNF5FHD55C3U6vQuSs84wXtcjt8QuBB1rFdw3AVVfwoRdsQPhGge",
  "key29": "2HT2GqUEoVjhEDmPjjGGook9nHQX3P8EXtmYAUJMGn2pqFDmKRNYVEykGUyV72aCprA69QarUhZ4Y1RxJCh6s3tt",
  "key30": "4Uz7rTZmwGFkNAdSk1nRULfqQ33weApaPVW4PVYsWya4Ne8WtQTGu92PTM1Z4hz2x9LonxwX7pNbhfiNGrTdnT89",
  "key31": "4PoCxNVpwVZ3QRijCE7bVw8XuBBSEZZvRpxUaFdc1UbhMWNZyzfdHvTESExvFMnnAh5w5gG8rd4ZFqy2GGpsEuoS",
  "key32": "5Lnp6by2ecigwM5crwby243PqZwsK6M6dgodx94E8Ui5FvygzMaFCCH3T5Us6dCyMR9nHgc5uAfZ8gPhwF3MGLnD",
  "key33": "2UpATnrSbvVUJV96zxpYzYDukj1uXMEUvzJcwqjjc4QEADjqBjVLp7J8oQfiBuZ9wDWBzSGXRLwDNz4FBNrhh7Uj",
  "key34": "4ZoknkFfGTrw7Mv38AyoKULEFwW6Q2sUzeHL57rEkdf8zsM7wWiLoZWVnBicsVojBnsdFFcih3YkSnmpcf4xQK1A",
  "key35": "69bpSHgYJqJ4E7gctMXhHanystVrGvYzV2UfARbQwr4oRH6C6gjA3LtywXtF3Yz3kLpbqrPuo4pAwiTtggPTv1H",
  "key36": "2i4cNr7YjD15nADQW56oMc3sQWQkYfmPLzFHgZGAuB13WvKDG38gV45E4YqkWqZRtDnmGsYFxSQvZjFUDe7f9V4k",
  "key37": "5GzrTLaeCav87t38N269V4MAkpvEz8EbEsSWTS7ixn3pqvdimrmovGgCpHkyW7yrjwPdNBi4QjJq3BibJkmQbMj4",
  "key38": "25wAAjUCudxwnH67STaUZUCYbuog2YD3HkGXWYYAyyyEAKbJkyDuMujK7skBvogd5sW2r3T6mwKEjrRi6HZ6wNhL",
  "key39": "2TwjGha5XgFirBf4C2tMbjCcwYPPRVtDYLWrD4h16xnSChYfyPJQFgtqBWtYG7vDzSpiW8v5HMhzjgVfPc7EfiDi",
  "key40": "3NZYPvbHXUivwiyjWL2Ps5TiLYAf2wTVb9AkFwxCBZCvN3XNKiFGCnc25cqpfjtUPfTHiWPJoWRsz4PkA6X3h2ZE",
  "key41": "3KFv6hJBdtQBs6oSrFfVQehC6GDbCV4KpGbdHh4w9yLtbtSagtGx3uTG7iGjukPhy2Ahj32Kej3kQQQ3xazJuML5",
  "key42": "4NzrzTR2Lt8suMcNR88n2MEVYqAFGwJm3LWpZKMSz8Bkt2ujcSnomw1wVgENppuQvxfJ6nGbCRSsmp4dWQdoJDWw",
  "key43": "4m69ejha5YAdXBKhfB4L4ZbXhtn4KBVFypjYh6vH5SLRQZA2S6goobgH2UvB1kT5YEhh7orGX2y3zH3cMqZ6yvqw",
  "key44": "3yvsCiiHnZKGQXipSG37HvSFSbrwPdMsR3eyXfrL9vkNwqHevThK998KTTWqhGZbWzFtDhyqAKZzYUvbE7GKzGDK",
  "key45": "5jvERVSYquPg8HU3iJiqUXbr8GpNPSrtbsyozXMf2HF4KYQwGoGC4JxLjeJX99z2TYwitW3hkUK71wuErziyGBR6",
  "key46": "y2D7xsm1HLNTEk6pU52fQo3XAvJ7qypYUWqrASM2r3KFFyKTztaGNWEstvfTNbicZmi47jbEUKZzGNTRjoPgCM6",
  "key47": "4eye26ammDbmCbA8zLkspmkFWnZfAq8eFbsHpiZHtU4jvdQvGPH8BtjsFSUKyaz1icPjgjkw8XrrAysG1A8aW8fQ"
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
