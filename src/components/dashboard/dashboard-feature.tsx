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
    "3QDrE4weUsooJZ4gYNo51MCRKQbryabepC1BX3hTLAdM5vvrocycz8Etg2ZfzjB3jjc4g85EQwNTyi7qR2pixGmB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27qnpEFfCJDQwuy3gVJfwBdVAehx3JGgrf1vxjNkL8KQBi23Tpbyo1KET9u8eZZTgbLEnPKX61ZsqEJp8cmzRvBE",
  "key1": "2oAVY3epKP5rioDSRvBSbtynaiS6goTXiQrXPUh1S27ibeH1XbchGmCpFPmxkP4yfz1iSKTFXCjk6rQyWXbXDpmb",
  "key2": "2V3twyfJBGeGwUZC47kisKzN2a4tBkLDSp5WnAbrXtxLKGKo3BKTMvyGnocrqWq1CK2MNvT72gq82YrCc5d38LEm",
  "key3": "338pryGzyzbtq1NA8S6nKtShSR8KtF3uGU76uKci7dYgzwFFF4omQUSh6hzGrkiFv65HCPAyKEHaN76mo898SwgJ",
  "key4": "3eu8qK6oXMcj1EtmSdLUmdhjZG8TdMGyT2hGpHxjBQpU2SsDoAk94pzWiWqmGpTh1iNyFZHtg9zc255pqxpTzMqH",
  "key5": "Xy7LqPZ8XRKCEgeG2WxUoCTnoLP2EcJGt3TmxHjGwraSBCAYd8LsGqLWzetgojLESk339s2qBbmHL1EGtLq8ya8",
  "key6": "34GirWhrqxqshXrEs3PzszmxLxtmdahVztpnApvQtC8S4YFBSzfDrF4nWo69AY62U8TYr8436r7RRHaEiiecR5Vy",
  "key7": "XQUmE55VhredmnCRj7qiQBy9r38tDGNYVp3NtmUYff6iveRrwdB5ZqPK1fGrB4hRQCiQBctNSm8vPHdezzSjWhG",
  "key8": "287dfj2hNGvYSiufqzxT8FwKqqcTN9p2z66pfBvzmDhYfHitLYEgyNtfSpV3nCytwBDMDwkYm2QRP2tbuJem5Dnk",
  "key9": "vwqh2qrVDMEisjR6LgpSqrDyZ3J8YpdeSjJRHcpRmA7EvR2Qgw6G4JvZTdCaD2dfMvpGZtaTWv7P8sujBDbjbNa",
  "key10": "657izDPUy25baPtQHQ1qpLWbjxUbXYBcGbnwzS49Vs9rwNYy6SdNTwfPUBch1Ry9CLfJPPbQMFmns7SYeUHUF1wp",
  "key11": "83zwJJH6tpLSVgz84tCJLTg2ryhLt7A9WzErpzZ39vGtwmj9Nq3yjMPzdMhPqRSY3CGMyFDwrXKVVWrFhYxu5nk",
  "key12": "4eAL6zGuU77d3ipBNfJYZnrw6ZJsN2J54fCsFivsjwJVcWkEHANsP5g5TwpbGkmzFVzjZ3vwWwSVosv375cuF5nw",
  "key13": "3peMU2HBNzQmafy7nbmYd1QDKS3KuVvXRtMAyQWQnLb8ERx6g26B8TLjBZheMNCVfJpArgQuwsapL1d8fJQFucSY",
  "key14": "2aPb56TXerCikMVp4nQcip8wRM5iFbdCcrpoi82WwgPR5ecK29ZF7M8eY2QpsrdAwVc7uCpSf6H4Schjr217wrQA",
  "key15": "2kShNhFSXP1GhkxDHSVcSeqgbgGDim2UgT8mPi6z4QEeUL8mfx4Z1BbPGTdR3uCAF7pcdWHngH7DV8Pn3tJSemEb",
  "key16": "5MgDSvvtY48UkQCoQucHtHeFpCtEtNJ5GfYKHRQfAUrMVkncKZaHRn8imwj3xuudw4bKC7zSGnoKLbpYjzKnBq6g",
  "key17": "3dErJtM8HqhttPDwJJdQDa5H3oEDjEdKeX8w4zfHvmjwQAutPbwLn1BEdWLjWuhi6dSAPPexFJMezGQNwHkrEG7R",
  "key18": "8mu6VTFLykBxxSrekdSeM9YaLHA19KA76eBgJ9sdFy2wKn6m2q9aox6cog4JHim86r4dVS1eJhcA4PqyRy5ZdwF",
  "key19": "4rpoggzrmnAzGvt57QJ8p5VkVCiBsn7kviWQTkXXFwC4uKTCCDHFzoMvByLToGmgLr92hYdxvf1Jd3yotT5K5bkz",
  "key20": "2Z29nUgt7sddHjmRBzjg2ocF6uZvRzpaxCjPCoW2w9NGC2PPqQrt7kHpRg88S9E6TFUPv3YqApqPGXu3k7viEDb4",
  "key21": "3GvDKa5FFxz5LuvYLegPX3RLoNAicUMHNxPzx17zZeFfZQSYZU3DyB8jjfkYCCLmZSEGHtHoJBmHGVocWxUgQ6Bz",
  "key22": "2C2jzP7JTJLuKb7nuypPk2EQxJ6Q7HaotiUxgtfjxGtAWfDw9hX3gxSSTxABPcs6cFJuX9ipyk53CWWDfY8VXQ9J",
  "key23": "3vthwimA3CoYhsw6U1kWGZdMRoPFXc7UPQNJrvu3b18aoKTdqAWZ4FTwQ86DWhy8UyooQJNuGFkWGK8PYyo46LYF",
  "key24": "2FVbcZqDtuh6T4pmpizVjBDKK1sYCobjZ1bpwrtR7wEPRMWNTi5CbM54QtmiSfMMSb8WHpic7zpSvRqSHoFa9hmy",
  "key25": "bktbasBNBVPb1K1HTcgwx1z2rm4h5M5jhq8qMRXBDKm2oVyY6XknEDE2bXmHoB2pFgCwixkmFLqmtx39Rc57YaU",
  "key26": "2m1rdVQWRc85DQPnu2paZ5axvpuW8GmLZ37zuLc8WB5tyqYSRr3w1wPPyTfXf9z1yxC2UZrbkQGUHLwKWDPPZC4m",
  "key27": "GhUxcngZPr4kTm2fE2DcbgvEsKqG55L79KNwKd41c7eaUavosbCGbDrp2wAmiREhBLGgzP22Rgmc43ui81BkDnR",
  "key28": "rfHUWdP3ExMmwjDkELGzdNR7fMBJqyco1F62Feg8K1XMYJbQckCxFvF5t6v7xUspcyYxtR5DoHjHanZPwYyTxKG",
  "key29": "VQ1mevCN6E33sMidMDbjyWWgBxaT3Yd6cco8CCSzFgQ6MK1pfqsGThqasBiB35ajaHmD7UKGobEbaok49QiaYo2",
  "key30": "4fmDr1BD9ddeEzsRbPgAF1RwXrcAHcJzRF1hS1KBovYa1Lo2uxvRqbiESeNS48JvQNsUYvHC6sEU7wNLuDh19mGn",
  "key31": "3SYRcYnQzB7kLmf94fnhx6tp6BKoCZR1VHEm1st8rmrrKLWDwjru9JCeNXM8zEcNMZKt89QLZTtHzR98nVDWRQUz",
  "key32": "5eW17QWbTvPKMhyZ9QgzRNooKSVg4fGypQ9SvGpAE6ophxLCEFwKKecTKp1kea34g33ZoqRbHijwE16DDvMX81KZ",
  "key33": "5kqPUths1DqN94K4h1CdGyk2hVhCLktd3ywykQU5j8Z9a6cWEtsYJ9oitZAyugGnJNjpzAk6WzsDKHT1VC1431Ls",
  "key34": "4ARVADYaRphGUHEM8gGa9o7Dxd1ZiNCXm8fAxTopwPHy387igzequCwsRr7Neiwib4kSzMziVnSgEps82B48pJTG",
  "key35": "2C2nR3XafXQkRT1ibz2nkvYaddEm6pzJGtxYEdLGga3EMWAEb3thqhZuh5N9caEyC4x3V4ZK6q5NAYqwBPcnTk5Z",
  "key36": "5J78B5wZL9h6LSL9VAuH8JdeQ8AHTq8HbDn1gcHKcHq3QGM8QMTgCBsCAEtv2RMCyLjCPWfJHah2Ry1gcmpK7jZe",
  "key37": "2jvA4emeKcQNE8rPfGLQLDJNVK2dKwFm4KeNkw8qjwf9J13FYiE4cZRYXbQ4YQio3ozrYV6gJFhkoqsUy1JeFK1y",
  "key38": "bwMe4Q17Z4cCYrWxKEtqRhVwd574SAWdpT7uBW2bj145KYsuzz3C556qcdnQGUvsjdj6344yZN4sLjS9WmcdTDT",
  "key39": "24GYzgbkQAzuFHukpY5rvJVGtA4Ba578cCNA9GaGrpPrT6Dy5Rvo5PWgdMenCG9Atft4ps7BEDiE5tqHHUp92evE",
  "key40": "Ua4dQRhuU2gusLD61UY5airde6NKLDwFj5QsSKXK1nEDJE4f68P64FgEGL9wXWZuLqEgntHoBREwW9FnXyRVvXU",
  "key41": "4k8vcTNUxqFy38atPeftcn76pPyhRQpZwMQ572GC6npbws2dJ21bYhFBZfrPmAy4L5QuUG5jj9m3cufseeAC8V1e",
  "key42": "M66wqiSMm2b6tyPoUrRBeNKzCbAHbgWm9EzjpGxdF2mhZ5KSAVEgwuChorYpnVoA3t8fNE6ACtxHKgV2Zfs9gd8"
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
