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
    "4Gbm5ZswtoDJrcbFPUYUCnyhoazwor6Hk3Sn1JGCJgAEPvw9rn763BkjRYrx4UMTKDZu9n9nR5GZ55aKQ456kRiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58hJiJjd8pyD6orE1bVUDQngV3EYBv1gGAYkyiCYcVE99o8WyZm7emKsjPeycWopgmZ57BmQvVqMPzB3HXHindHx",
  "key1": "2kw3VrP6T6E39JC4rNcQJaepGeoaksidgVKU6YLXJkyaVRT1dXESSjyfHbf5d4PXk1eXxNnMGZXSEKghiz4aEkV3",
  "key2": "3ZBHHw1gsM3i6vbuW7yw7xdsa1E1Qgfonm9pdBxS1qByzfU8zucn7rWDPXeaaoqUCRk3fc5d4XrANJxZBbtJ6P6p",
  "key3": "2y2ZUQuz4Wut8davXMXbLAphzRUkLDxZFVmPCsvoLxVP25LkvMi7SS5rcWF8A4D22vna7zVEqK8nVoB47pR3BiCz",
  "key4": "4uyux4znjnMStxKU3eK3aPaLViiKfaBqKh1J9mhhspNnvPeMpJYRZDcrR1W3LmNAYBgPuDPPB1hwqZZHWFybXubL",
  "key5": "4BeBswvXxeLgvZwXAEYPtbqPRtEpj5RZaiFAGekpChvwoVnGk9ujDzqRWv1vYwyVTsSNNt4jXuSCDqD7LborFaiL",
  "key6": "33jx2PMSqM7xNSbukVQeGY4KjyPKLBLTTUKJME7uEcdCdbrejmzYpfFEU5SjqmcrCnwPaYSM2STTBTQeFPyLv2WS",
  "key7": "ysiaMgRHoPLofV2YDpXo6BoDg8a9USA9etr194SsCAVgK7KRoW9vqy3fqRPTKJBd4MLnFLrSwGwy7aEBxNaBcD4",
  "key8": "2xpFJroMUhkLZFJoMymRKvwY4RM76RTiztSeVQetRirA6akZibC5vKQBq2m3rNK1htyDx557MBnzu6KMB6iZAYnd",
  "key9": "21TcZjhRY8JHwY3xb1MQW5rWrJpoX6wcgwPhK7ahcLPf35PWx9rKePKHMDafGSNCz8XadmtjBmkUo3WdaVzk4XRU",
  "key10": "2avMpcnxFPrnuMeqYguBvxTojsZ6W3YkTfKch2EgoSiNgXDV1B7hoSsjByfqnuaKQvS8XNsW53uQAdzjGgMS48zt",
  "key11": "5XJgyUhELMjdqAV2Eu3iEAVwoMY8szJXpwLbDUmsKnfVLjrbyWSq3jjCLHmhn4PLxqGX2zKieR8bM1b4gsQ6dyLd",
  "key12": "63UMqjnjWJrqav6YyKDqyfFViChsi2wpFKWhSyLtjU5zqJa6Aefn9qJzfqNxVwpad8f43558ud1NMBjZA8fkeHaW",
  "key13": "oq5kiCBsiBWcAPZpG9Ja9vb2QFChhKgGrtZdKX45YPoV11vxYPZoPFXXC9T2dG3iAoXfNyjkgA4CC8juMgSC6BV",
  "key14": "45y3tXa11LQJwBSMuYtRfbDPYhUMb5cNokypZJhziPjgdJCbSs4CJhgPAeKuDYA8e3uHPZ5azki6muhrL7R76FCF",
  "key15": "2sQnAPfgA4kvTw8HWL66z6CrtJrVVPxnyTgbBbPh7ucwgPGjwtkH6yGkWq7X96YnNLfrNCxsHFP4Ah7Bw6QdDVUi",
  "key16": "U7cfULQT4zvuNTo4HiDtS8LRG9dF7PkW4Guv7KGG4f4ZGiiZYyPHDkE53t5mzhDUz3brko7963xWKU2FRzuW36n",
  "key17": "5tXSPPuWsLWLbhSAZmDKmQR9uiW7uofyUSUW2pcQJAariPgcheEQtTds5nkRzLKu1EHGkAe2kQMjgYygRqWhDTFe",
  "key18": "24EihG3QybaPKiVZc4rdLC6oGdTokzRTqEkBX3HEnhj1jk6GP4oriLEui7JKWgYmHf9weQkPoGbTMLGcnvaCBTzE",
  "key19": "3qdNHd3JPqAbUK286uMnBbtZGH2VkQ6mLVeSwBSDYbTyKLZ66LGMXAwzjWiVkxCBgQWnNn3RnNMt5XYAA6V544VL",
  "key20": "5Tst6s3P2AV6g2UB2gTRPSJWgytZYAwLZmLEyoSiLtbd1u2rdZs7CxciAbWvF7vu9DsTwtSnTz56Usa6X6s1E4qo",
  "key21": "4D7eqmgTnFM4jaG379iNnturuw6jc7n94MxfmhLRJnVwzdG5SVf34YaJm6umEzKngK3k7zm267puo6xLi4spgSCQ",
  "key22": "3UYAcgFNyVoHUp6siV6oy6fNASyWMe2zixzbHrj8PEJS4Xf9Do99ovkDXGP5mY6XN3mjn8DhZCgQZfVk77zE7xfT",
  "key23": "4HSrmVe4sQBG5gjWEjVNEqZ6oz4WkS3nDn5n55HHgyRVYnNEEuWLcFUKYkfJPybceRNtffy5eBCqvK8tq2E9Yim4",
  "key24": "2PBXtX7PhUHpWVCfVGMyy4GbLitLdLBKTnhk2R7V2QAJCWy5dTEwLPVDAijj7ZAKnVGeCoBf87yyNCxcFsTGh61G",
  "key25": "5ihwopPpem9tqfLBc83s8oTqmmErNyfbAnN8dYSC2tJeZad1Q5CMkE98hW6Tqu4s41ptxxiSRRooRFbWFQBicBUS",
  "key26": "3GK94Dvev1Mjupw27gfYnzXHzVMv6Gfb1w6UsqwXwcdi7vay9kEFfDh2Rq7KMKchbhptZRPKZX17UicNEAzahJyZ",
  "key27": "5H9UVfiKazUuXsZjRY14v8o2wGuR3d5Kvg5b359NpPAEPgoLpQeyJRU9YnvnpBnFyHSwn4K47QVBmE3AtHN5YYYS",
  "key28": "3EChsqs2PCDajdsy45GbBD7pVJkYrkL6eoWt6iGyTADGEnB7uDRdUwKTjW1UzBMeevUcYB229y58agUSrATrGDRq",
  "key29": "34FLYV726o6FcNeVkbYdNohPe8E9GwHcRxF7uzW6nv3DSeAK98DbSxb4EEZoPo4NtrLjUjBh1yhGVnh45vTgjUmq",
  "key30": "Xyhd6UZJ97hfAXEMAGrEvtcnodMTkCenW8swL1v2g4Vgc7hEXb9uo9B5s5DEH4XrTXVEb6BgqWWRSoQmTyngqNa",
  "key31": "5badqRg5Z8fFrqtJKY2XDLaXJn7dn5bWrpgk3MS9YrfXZbKEocgPZ96PMKMspDMXcdVxaarwrr9PvwpbNL5XWJma",
  "key32": "zt1mJcUYBXg4ZsouyCGskEaCPxawUw36vqY8DaJbzwAeLoQR1Fg3UKTnhGmQ46mYPdKgVPFx7LY12DZ2xix3Ajs",
  "key33": "5XPWWPNKWqftjx3v5W9viEqh7fQRko9EyTb5MJbC8XbySuZ6pWR3odGrVcy94smjQsw26Mz4g1pPLhUXYdJStRGb",
  "key34": "3yxSakXnYqof4wcXMFKWPCRFA8vhk8pge5sefNFLZk9vcLyep83dGWdrSNEG7N6c4MZcLwfvSNCqUiVr3Yez5Psi",
  "key35": "3J92WoEGHG4rLcGsmeB4BUMexfEx2K2ndQRPKtZDvTL9uu1mJuvue6Y5EMfXMwcC1XRFJFNSSLJJfZ6xgwdg6WBq",
  "key36": "4b6pTgUsL85tZwdrLWp97HMn9EqTqvCHQjqnsWpFRvbiBHUopW1zYFj8GovFgrx32rXDP4mgPH4kwXqzRVkUc3bH",
  "key37": "3Tp4QqSA4eFWgJ9sUcbhgArxSjhK2y1HFqPPrA42MLJK5nE95SkYQjja9G1jL5N8S6JEkZnq2thrXykePBQecBPb",
  "key38": "5gTosrzBpRWoH8asohK9EHHsoxbEu8ShQjopqTm85i8qpTkEPzUDbTJNAtpkS25Ykinw6y8Tm7WZMzZ8DP9RnPw1"
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
