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
    "3zAPNp7KVAHaXY3CwPyzeDwmixmYXpJTEHepwdmYMq2Ap1f6xynqqFyfEhzT5ZoqVi2x5xeUN3f2rdiN3A5hmwfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C6VR38hR7bcEDLuSyyVkhkrnnztrNSa95hF8dEMnAECMwNKcgy5EoaTnczMHnxyWWPD83qRXhAC9t2fDn1Euond",
  "key1": "53WLfmh5iamXFB3whhf8PUc6EGDZjn39jZXcAQGDzqgxjn8sdYyYw3TbjZkk3s1cwCDF2bcnFfUY9QvNvgu4skkt",
  "key2": "4qBaaeg5kv8x4XB2XTkG3UXmnj8zSvPAMgMpooiRf9Gj5YM79J9C5xNmCCfEwHfm7oedaqHz7nLtfP2HjrgFRLrT",
  "key3": "2HZq5myvFvCpLP9FJB3B9WxgaMaLAnghNyUrMEPwF4AfXuWtNC6porc9SsnaCQUx8vLRHBDQ8gaQGGZzr9AJ5BB3",
  "key4": "3Z8JtQ2tJSaETqqSygpA7oXT3HP9Vvn3i8xtUAdUqrVBwdwUPUcbLctBdoqqNHCXbCsUrLiszJTzFbYyJsnDteR3",
  "key5": "5Fv3G3ztxbkxfQ8j2uT2aSHwonTY7dNzbpGS5RpYvdCgJ9Rqrx9woaRV9PKTBohrbsVv7Ld5h7tAP9GvSZVgMDDJ",
  "key6": "4fyRKFnD5AdhzSqbLBkmX55ohGcmDzbWYJk5aW9q9qAUn5cWGgKr1FLw8Rns88grMyS6gnnUUTJP7yDGg34tuVB5",
  "key7": "59kgwWfHtoKtNycxLW692ZVJcaDCAE1bTgEGPqBQnhjwvGSDzrn5Y1rzGgYcDGbrZsiNr2KCNWiCvfKqjChm3vKR",
  "key8": "kQ8xZ5tQb6a5EHqsDK7RjTvKQZabzvVagqJPv3rvzQt88fNieYV8x7esSFwUPGgb6WCqbYouNQtaw6Yvxnxd3wt",
  "key9": "2Y4wY7qs1QwNHrb4mrVFxn1dBHDgih7AB83qXCaUd3ogJcdVMm4K4dJCX4mZtJFYMsZZhrVPK6jmNRaUwkpy4BhH",
  "key10": "5uRwX6jbQ8KzaGc9rfo79tzUhyRNFo5Mc9Madc6XPSuBsWVjqCEeYaq16ozRQSQj4SMEiDiHDv3jYwLU2Di3aGZd",
  "key11": "7sDtM81dz9B6UZXVPYEUREFwiUU8YGG6jt3GMD8ZXfsraapJdAj8TABiphrs16C9HSyevgb6EMuG8SnfuB5m2C4",
  "key12": "5tXUv7sscLHonUm3a1UBbTQYrjTtL1DAAv8WkF37RWz6hA3LaEEmQJxeHZkXx3BJWCEJxjtRAgaL1D8geVLbw2rd",
  "key13": "f8JEPhFJCiX83hFf1aDnjLVDL5Svc5Megw9ZFdiq1xCwxZ2Yuz61HbACcic9tQjcu7k4osTHXwnqZmxwc6SBysT",
  "key14": "4P3fcFK5eivvG8unj4kRLijEz63ghyWLfUCapywraJQyBmMq6nU9hGkDf77jhhHUFrQW3dAUcnjPyDWd6v6P5dgM",
  "key15": "29k1G39nHS87o1vtHm5EWFRKiUWY9s2Ex8RjfmMZff1n68ufQHBopEiupdaAiuSyAx2spkSC8kLRr4mjNRVKFZ6D",
  "key16": "2XroPrVvR483oZQ4z28PgdG9ec9hxcMxEYBjTUUrFiHpkjmVfzRxoZZYDYeQmC9L7j5wqopXvEPX1w3pMv7VWJi2",
  "key17": "5v9fiAYcss9Buk5bNbEsK4V3YC2Fdt7iKstfvn4Tn9AcdXbB4V31aqPq2gsDeXwNnWhx8XQPqsJei1Py8JJaPi9m",
  "key18": "5NtWyKxckx1aHPcvzo74ZfDyFPjRpV2qJ9g84Ygpd53eV5orqNxXoikyw7APYLsmaZa4zFA7izra6UHMrcpfWW3C",
  "key19": "pbF8cXkDQLJCVRBUhwLmcmbBGb346sifrhnuvpjVQzxEeaJPJRuNkk5n5Mw6w2Ui3CuCscBXZ2vAoB2fVVuZqYK",
  "key20": "48FBf95Le6eNrWUdXHzH2MnqKHtB4aABwbuu4xkdSLFpL485gNSMQWHWc8YtY6vMgDAhC5SuWySotp4VDPpZhgiw",
  "key21": "XSXCZcd96VV7yYHy89t9AKRsxrPu5iPu6AtZvCRrdvHiXT1DxtcN4aSE5THJPJRHGtuKXTvtZW8MK9qFc2A2jng",
  "key22": "1aTqtRrPdAaQSxwSfDVSWfFvhuR7GQk5AySGELv7CaJQYrQDgfTrrYGF8wpBdKeccQrTa48kAJqvzDj8b4ZfPLM",
  "key23": "sUSY2z5PT8NiZeD5BLG2M1xhdVo3iaJBh8FyVBVBo2eFKoZyeNhgU8AqEABkL4yLPUrHhiT6ocKdj6UX3m1s75y",
  "key24": "3wLMNvqTz5Am5iu9zQj1Y37951xiVScGqYcreTgZitu9rCXrFvfh1S8oZfaDNrrLRcBurAaHPCwyW2fBZw5Ly2hX",
  "key25": "339QwZ2haD4sAhUgtmZUguPB5PTSSjxM75LtuiPAfdqooZuM2CfmUfgdfkih8cXg4DqCkuRizxEJPt7XFwGkmvzo",
  "key26": "5VAcfNSPXDuQ9QYRRVTBwJwxYgA558rwo4Wric8ALfq4dKddndL8k2BjswAhsJWXAU7QGRjHfP5wJM6dE8CvbVsD",
  "key27": "4zUDE8bMvyYpzN6V9rQgEJNZMe1FLGx2uzrNmkoYzVa1AFGUYodvmCgsxjwEzRf2iKorxx5uN5pLZsuVMGcZjsuV",
  "key28": "5e1P3sjgZwKwcLAV7J1UtqBhmkA4dgXRbUno1wW1o43rNkmX4i8TeD8WHoiAm9xK5sgSgAbRHySDDQjusnxGRjbz",
  "key29": "uc7sP6WNgxXvabrHzCWVxqWtr2MkNNxdXu25VBCe43xTG7rH7Gsmb273f39znQ96giVkCGNEh9SSfUtcV3KJJX7",
  "key30": "4oi4w2Q3VYTGioVYLXfhhH3p5he7Mso614wzKnR9JFj6u6pf2ZmzjVcGEr8ZqH6LRubM9fijPurM1eGLAhBYUXnT",
  "key31": "2w7uUyqbXb1UJ7rjsP5LM4st7HVhJhGsVjB4eNuDMd48Ph44rsmphReaW1VJUoqtdEGjGzNqqjHXaQDLP7kC6MCg",
  "key32": "4djCiHJAUbMg1QdkMgwgnoAKJH3NNgxaJVimzqsv2LGG6r6XM7fPaLgofYUS6iff8F1z23TiMftmhNZDjKjHCVrT",
  "key33": "2M3Xf85PEb6HgTBnLX1iSZMkKJ7YZEZL7mNF14hmGFWC5JG7ikdcQ7kSuCLBaoKzkJRSNWbpMDP7tk1MXmJZ2eWK",
  "key34": "56whxpX22pA2RHRPLxcbpKuiQw9YACx2i3h6mecbtNMUnTdc3jbXxMrR6DYbHvFczm1A9deC8GvDp7YjfBM6ApJM",
  "key35": "2BCMNbxmyCfRbU26ekfi3iafBuLyYXo4PvKzKXq3yLQjoZRvJ11zBfn288tf6obQzCgspWLFGsKZuWrcxazmbjmG"
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
