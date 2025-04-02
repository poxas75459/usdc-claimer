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
    "429SUAFQe1a6EvZbfvonmaLvKhLiHmwKXCAYH56AVYc4qbVLRP7JvYqGX9Hk8zdyrPm2Nh6yiQwBmi3hMfjz9sKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xcwQoAkWLqYWCguGoys4MEmvTcdYbnJzAbAz6NjVYLrgETmvrrDdREqHPuSRFkUigyLh7qmiVbiyJw42UriuAfU",
  "key1": "4R5fDUMKuW3hhSgX9bp1avD44Ceec2sdKSDxKuWw94JZkEcquNqppj3BNam9ZhtXmCyR6Hhhu8AEuu9kMGYmmMj7",
  "key2": "3Fy2qYqywn3C4CaCxiaG4Y9dJ2D44Un4nmijA4zQx573nsfqqabS9B8TCZfUJtejWtkxC92YYqwwkU4BKacNH4NF",
  "key3": "ScjFHvquhwrXA6b13v8RiviV7Wp2Bp8WfFJSfC6xEzXbMTNFukjTGm7NLUGdmuc88UfcwQT4ZVMSX264FEQtGqe",
  "key4": "5iUFFdMrbiP22JY2L2xMM5UjjiznE3FQ1jb2HTZqNbQRNAB4FsCWskPehhzsANJj2oHxXkQBzkcsT31ECCvfzpBN",
  "key5": "5mbtWvCaSokQ9xP1GVWcGoC7uFmdi41JFQ6fdLqrKXNZkxPx8a35pxnwuWjJN83ZiMSc2jLnqnKo5oaXFvWZEDYz",
  "key6": "3iCW6Fq2f8KXaunkjM75R9ASF7HqVawKgyxLrhZfwrSzRqokPB4AUGwJgYHmAjCSZgvDeAsyJaWP959vVtF2mcHJ",
  "key7": "Qpk2242Nie8jB2KM6krmJaKJGPx176G4bRSnjnF9Hw5dQuzyqbHZmpTUzvvXr6DXc9otpvGAs4umDFgwFwbn7Ht",
  "key8": "3QLivW6yuqMNizWvFFpuRk8EJBc2QbV3bU7rKJTSyTDrD89g4Fewhoc4y9tAqz8HJzqBu3FWDX5y5UNB6ACBRj4Q",
  "key9": "39FhoSLZQ49N5xJSCib3PXe2FgrUf7wjQV7ndUszMhFo1HJcxPLPjhNbH6NV4CTiEgEtCeMxamDZsZGCJjL3Tj8s",
  "key10": "5TUsnW1DLZD2NBF51urKzgjACoVS2b3mCP4yNpxht2RuEJtHbJR2H9fAfb1QT8bCFAwwd6zUWqrNHE1sPvxnKUBB",
  "key11": "KKFVMvNf7QNWkxs7Um5r9QomE8y5DAY4FogyAhAwrgBbqVJH9ctL4Stz8Mq9V7Sur3CpzaxzHyMcXigMG15mDit",
  "key12": "n6YAdD3GTZjs6qjZNRUsgDUpUxb7dFahGHQmYemqeWM3LiF7LpYUCHagizJG5uVkDGqor11ZuSPcSw4GzG7nycY",
  "key13": "2CWXgACuq69uEWC5veaj6ELbCKgBsb4TQKWCMzmENbr6oefMeLoxFGSHemaebVdADdhKSBfQW95BJzAXHHH6rha8",
  "key14": "4Gwr23C8TgAZxbsA5XdXGX5btDmHiBm7rE72UgAvQkxJVdhXY2kUqUvJZdHc1qBwxtWbSprjS1dAJUqGnVY4Qq7p",
  "key15": "3QnUntXWC9iJDTYUzsowvdwPMiBYBGFkUcRH3Mei5nLCpzyfBGEzZLYmimGYt51GBLUYaZ3ACuDobNLz1U9s4CTR",
  "key16": "5RmJdNZTVFqqkNkNtEA9BBuR6JgqrbxbntAefBsiqZvXU7jtaUJUaeaqLcXsQFiL9GZt7eqv8dw1okHLsufGGiQy",
  "key17": "5EmhwnYqKmqcQRfmiRAaeJkS3ZEzHoeUDViouqKPFqHPqePrP8UpWNCeuhiqzSoyzZV5umEp93e6mrAHC2xUBCqy",
  "key18": "52k8Pw3rZaKK13hpxbXtYK4zQQgG7LqZ22kKNKXpwRkfzPZUWdtBFrHPZZT536BXJtwHt7qrTg2FGpkjRE7Xtxg9",
  "key19": "3gxQ3SqSdnBH2xEnHyRYHV2xroXprXBVQBMoYGxgppLKknMkcfS3PUwQPDxTs2NVRS2bceEnaymfMkeu8xmQssZm",
  "key20": "5BtadZuMxdUPGs7eMQaZCvuHHhykTmexnDJi5FZ6BthLpz77jUqKFCkvS5EErnviFsjBCwQQWVW2Ricnt2iSYcxj",
  "key21": "ghvMRB1feP7PgkP9BHX3aWTVPBPaZopt7PWmV4qbHHmtwSHgYxRS2t66d5b1k9mEE8ka9binbqMHWgvuYfxScK5",
  "key22": "4H6xifk99fCob6aNn3GwNAcrUWFBFGJEJmnv9ebw59n2n7x2dhQiwLCvgnhpUvmpE33Nvz2ArzpMXoaKXz8bfPf2",
  "key23": "31rVKc9H2fvJTohT4jswQV3DAgVGNKZyjBV6swJB2kWXvvY8CFTf4DMZAd2iEAKsemKk2tQn7CneHrWLYWSpZaor",
  "key24": "4mirghRwzsAbGbMDDrZM8XbvxeegPzBfGpZxAss5KedLekdw3Zp3wpMPKkqdAdKU2zFNb6FyaAh8QuwsHC5EesdP",
  "key25": "5SWm8vy6yMi4vAEgkJwHbP1VtWL42HxMvQFLCh37Aq6LUoHYo2cw2NA8ErgRLXXpfnmi47NyhPQ94SvH3Qd2ywG2",
  "key26": "4sVZsPaKehGTPeYk7qx9LanWj1pjDwuPtywvUpEgSYbSBioDxgyNzqDQFk1crzEy6PsqotEnyTsWibQnDq8T3KUi",
  "key27": "2crCpQMRSNzVUFJLW6cjh8KBSx4Aku8LwGUGPeRdM4s3k9Ati46GD5bRGfSeqWm21zx8hcPek8icDxEd7QVgM77v",
  "key28": "2Z8BzWz6ZWxbhDPaMLrCx7SVVk9JLpfBJqGCGb7XCBWuUWrNjuXLRKey3hjF2sHT2ZS4NSxvUpRbSyQCfyCvLhcT",
  "key29": "41CJknN8DR7gvpZZu9ghpSsbzmH9WtgLBPuaBRRLkzn2gBwutyNeQNQWJ5UcZmhV6YCRbBACY6HYeUh13oHXE3wZ",
  "key30": "5hPa1L9WvnRgpXiQceFWqxeZL4a5VPkubrRpEj7sKMseff2pMtsGqCYHyyfnkwsAYvCr7wrUkMTdE9sqVoMKFCG6",
  "key31": "MeDB75tVPwFC6zbimSKUUpLhXNRLpSoNLovzbfwRMrPEGmWsXA5psPpm4zpv85x7Zq2VN2MZ326Ks7EkHBT5qxj",
  "key32": "4FrrSz34MonySmzdNk68ExBTewkMqKNV2cfxMqVmoD9vQ1QChEgboJKBGQ2mj4Je3W1Z1vuEg56MMhQiQpHnh3C5",
  "key33": "s2dbCp5mEFqnaxYs2HfgkgSEGiyFRhGhiQtNW5Fbks8Eb2TKp4xcJFCxo82Cga5sor92rdGstxfPFJxQw6vRiYc",
  "key34": "3uJkc7Dyo7NuyC1DUsGpLySp57mqSTQTRbDS2oSX6BUWSVgj6TFKDQdmoVjnt5gJ858jScVJjDd5AwwBvtDd3YmY",
  "key35": "47ugxGc1CxUrbzF99Aat6q7rLH1xhuJPbxCNXeVVgzcCatQMYCjZqNfcgeAWwTMggcdpGfFW4PZYGGuaRbiuqeCn",
  "key36": "2PFN1XozWEWcgpj1ywQvHRJzoSRztWR4ePda8vqnkhPG5zrwMqYRvVmoCDGhRQ6BJzDREXsgzZmatudts8eruRta",
  "key37": "2PSJ8j1Y5h1Q9UCNptMNUq6N23nbiYm5syH7QE7gvbqSzZ7ZfcPDGwjxeYMKdeTGKGVqEHtaJUhrNEev69CRLDgZ"
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
