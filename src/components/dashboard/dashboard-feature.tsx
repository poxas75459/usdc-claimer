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
    "KN9gehSwq8LgKKfyWfr3ZGSzk3YMyxRLMWAAQzsFXfVezyKcH4JFxYwqiED4L5PEbe8goTWUxt7ti7sTzjadeCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7RQ26wuyiTxZF9Cr1q6dSqEHduP8DGcw55UE2sNNWB1c3f1j9rd2nG8NhGoXzN2gQA6A16AmMXxepbAYwUBnrHU",
  "key1": "4qsU2ZdBocJCdsoj5e9YBtr6CszYTs5EZmT4CU627urynkUcX6KBVsUf1th25hNKzfvcFLhoM48ErS1NHYeLpaYH",
  "key2": "3brn2sAfBYZr3KxKradQbJyCoNToXkTFkqDE7owPgu2K3RmSKY8oaah3yA5gkvTof49gT3fhC2yyec2jTmTuKoVg",
  "key3": "3uUTK9Mn8eYLpvy8XD2p4tjv42BE6PorxwHEuwqoBjDUiimvTC647H1pdkcwnF2DHBaKn3BvH5bj9NXEozzowGvi",
  "key4": "2FM2bRuj8BbzmBDj46DqJ6x9cG7GUspJ4w3wZmVkNnXpNUmhjRPk4671TFx2GjciCDN1LfxsQbQoENSRUJK5GKGS",
  "key5": "2WtKzHjrLoYE8RMUv6gfG2MJwk7dJW9Lzy4YwrY187zUFqPh67bp4yiP8d3xryBhqE9bKfWYENYHMw1GRaQGrALq",
  "key6": "4ipVU2LXTtnc8nF6hfpJtyhJBgbDGCUrnansUuyxWTZdSQwzyxpH9pgiSdqVe1LuThGmrUPuQiT3hLPK4sBQ84p7",
  "key7": "2F9BFJoJs2TC4P7oBLSaoxwBoaJfoZkyxFYbAatELhnep4fN7CumzpuiTd9AtTGcC9rxZpY2TPFH7KbBQ6hZPK1v",
  "key8": "3h9oHppmP1HnAKt2zQNgWsfhxxAagCwPpYSdssBfTBfZ7x5t2svUTfgJcjYphDvTdb2g7PGG7TzVVuaw6JU6VK5U",
  "key9": "3AsAtrkAqvrHxUcdcqfeRycxhm2jpHGrF4cpGMAwvmtzKQ3CoR4YjgyUYBHmkFb9S6AP9JdzkYMzYBNEFgynL1zD",
  "key10": "5cXUtzq68UkAkLhNxj5f4vRCyS5S4gJ7scdegeuK3aq5xC3qTAJHkVpXC2NUSaoFWJLJsfz4FfRA9C8wWZjNBkjQ",
  "key11": "3aQsTK8xDMHA2Mwcr1A7xVXbcBR415SgB9FonG1SGyDw7nGaqjHWRA6QPf83AS92kgbaQrcRvp98PA1Sg8wjf9ot",
  "key12": "5c7heR5V7VxcpLaNcvAUyW8Qp5HJvW9opfo2sYdcbZGKLezL2FuJUuEsrbvNTQAhfiE8g74eU5b791YQfrBjv4AC",
  "key13": "2Gs7KMvDgzBY6aUrrq5d9xf2CaUmXxKqkh9mhpxnTTm5fQ3qvToK6u6Q3YdULHqqofj6pZK75HzJeJiJ7VGzh2fu",
  "key14": "3hQQBDcBrvk3ti3Xz8kf3LGLW56FAkr7inYsEZjMjrXRuM9FWs5pGE5Cgzq3AuCpFzLG5tXGbEkLsS6yCuAxND84",
  "key15": "24SymvC2xfbvzddUpxyd9A29jCA5JWL3Np7bBGYXMX83PRTXzdNMZ2qet2Ec2EPTZj26QbDACyWvUAQA2DZSdrjd",
  "key16": "5i6we8K5Pc7dsR3fheVPFCeaAgF3KBE2TnhzMb3VmHZPRMGjDyNNdFtHv4QkttHVc7amSFxobZMxnLJK5dHY2H8m",
  "key17": "zAkQSuz98xX2c9AjFV6wiAyit7QUhNTMRo3NG7jD2kTUZkCe5sr4fBojEm4eEDCKGEYS2gJ5VUQUn9h3EM4mrCs",
  "key18": "48b1EoJMgjRJ9TgDpZzX8rsLnDCpTi5WGiZa2VbemTqkTiLWeWMGRJA35P579Qt3qRibwWfxiFWeSBpKqK38dGZB",
  "key19": "28WprPtYwhHTLPAdShMX2nk4LaEdbdzxU965cmsDAmBwYGhcBwGyb5phfVJm2cD8qCM1mJAbRdejJLRubHAcyhaB",
  "key20": "21aPTpamM3Tj6mzezRLmHCSX3nPXARQ2UKhm6XACrwfN2ua1JcKCeMDcdM7gmJ6VJbAWWw5KWwQFfDaZdCfmV2tv",
  "key21": "5P1XWoTfcY4YnzXu7BA8CM5UY2amkxSJpG4Dn4hB8cZ5njPqSkrm8pxm88ZxozNy9X3evn5pwwSHLcy4vVCpmtkW",
  "key22": "2F1LVvGz5KJMommivScshU3UUMjvwhn4yj7JQisWKkxcwp1RCAw6iSvhJZ1AkrEGU5THHTh8EsdQu78z55MpeTq",
  "key23": "e5nNYWeibgZfbFBf6XC9ktNum9gxMoo4cMAn7oVL4ErXJ7hcWQHhtPg4rYum5M4hV4KvhXUE4XFCXNfQhFuaWVs",
  "key24": "5d68MsjW4i3UUcNFuLCa5RaPeUjLhTTXbqne7234V69awn4p6GtJV69WstrJ4ETnjTLRioWYNSZUfbyH6oEBExm2",
  "key25": "56Rct5LQ8cqBqGu1gKwFkXpXky7gQFpzynGKs38GcbZZUZwYNaaHwBQ1SJso2wuYiPbksaQdW9Tsc8MtdR7c3fZa",
  "key26": "26wQV7iN9LLkPst8pNX7MQhhwhdwowjuHvfmBNpaSokRpgoqgY8dS6NjdVrRywzxQCECc6qKewR4UzaNioFy9ChJ",
  "key27": "4vGLkuqoGokkkdfDpmqBu2BdmVpEa8UAmsti145r2c7beJmt2J87iPfhaMJmqgVh5NJzDVfthupLb433aUvtFti3",
  "key28": "r5HmFNrvoP2S9ersnNhCSed8qt8ruppkfRncDL74ghSS6LJeBoxSTxcMNkDLhQyQdRpKHbLSPPfEy4eHe2qV4KR",
  "key29": "hKuuwA3WyNHsqzVb1zzMdE4k9512hLGXgGu1NeAndZtVGZPVbrbxNcuiR3jFFpYxKRJLyfeZk974Y34kTfSUghS",
  "key30": "2aW2yiVRu1Qs5k1ikBxPsSbms3Mb9Yddkpb2LzemDgiXfHbNZJfdBQQ5vNwcA6DMcZAmk2spSGLqSLhBS8mPamPb",
  "key31": "3Zts8PT3Z2hzirbEJjuxekzUqqgmP7vSaqMs73jeqJyFqYMHATjTwV1wBFvJdB2Yzr3hLogA35CayG8AokvKSJBb",
  "key32": "NUycUbKnAwSnbEhaAgMuY7aVdgmvWxsoiXtKsDftccRVHNDVQ8yja9QZdtmDR31MQHwJ77bNnFcYV4eHEiDxPDj",
  "key33": "58N1qV8ZaZMAs6CgQr7ZP5ofNwdrwz9d1FE2cZuav43KkGVrJbv5YpdY2s7LRnkjtkMgVmE9aL4KLkTon8xtAGDP",
  "key34": "HMnfueAFiXyBCnFEvFw1BgXn3oiods6Yamnx7TN3X8brxHXqRHcRqaExzpNuioYCFSYfhDAD54JcDZFA3RKVDFg",
  "key35": "357gPXnahP8xQvAqsoyjQxsrajUf1eXZZ9YfYu1rGPAAyicye6u15JmEz8eJN5wsTtfTZZz2E5NgQiYcbR2wvqzC",
  "key36": "4osAooieSRSJYG16k8GLLxPqMbr67xpwR15HjeiXVfLRagzK2ECg7aB92D4t1KaxJGLr9Focw3w3AWDobUKuXGEf",
  "key37": "5FURqY6hCgYJgqfDX9cT5CAjoGpaukpSD82DRNhJWehCjCq3ZiJwLeSndcA9zwJECP28hnWpMgTxZ3K7Qpjp9VLn",
  "key38": "4i5YKxQYXDeZrVGR79z7XV8k4LLHr8NN2E2tAm2WHi4Nr6R4iiDBESqcRGqzgmz6gSadU1UBGVa3FjfMgtcPy1BZ"
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
