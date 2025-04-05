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
    "3rSwye9EHib2z9Lu1mXxmc6WWcZpfA6n2bWoDiZeMXT17SEj4ZyxCNR2dFy1zcTYkN3ZxkbgbNDiNbH73TmjtYPq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mAvKqpJkbM8QYwVBrgXv418CT3NUcLpee7r4iL3XwSQcERwRdggF2159DeSp1JQKSMP9PfZo9JqiQmTswUaMvjZ",
  "key1": "24xKLn9zL4KpXoXf2vQsRKHCjFS4jT8MoooticzyC8KqdSDDq6AZPCxAodA9qQwxWAq397qEqAPahpj4LpdVgX1i",
  "key2": "3AwzoHfQrMGeZiZcveFGthU5PaidMcfdfajZNatGAiJDN8ZVrwbMxEvekooLf1MPyaQUk5s9Q4U36cYMRLY2LE1n",
  "key3": "5SHak1T5u7Q6pf6VNbSvL43jRJYd7bxzaLtDQpASaFxGFdh8NsccaNnKA69f7iAfLczJj65MAXbsGmWVFYAQaB1x",
  "key4": "BaegNmUaJgNR4o7DfxTUgKU8FQeKT7zg5A8v6jawzx84FtTthCp1a5Lc1JMcbmh3vw2PK7LjC1MxkZVujscV38f",
  "key5": "5CDLmu5g9PNSt5Djo6MSQ4YFjmifMCCKknkRZYdgvtRbJnJNLnLftRCDsWaCLxZRYwG8ZNtEfNWNTkwowmNLwEDF",
  "key6": "c5DnJDSL7qf76ohZs6erye9fBFCwbodndxXCwEZpEDjN4X8aJfL4KoFmNG8irzP5qsfthRhMBKeos2s6Uue16V9",
  "key7": "3tfgiJxkC16YTiJPbEyz2DeuZ6mVRgHUkpEwV4FTrWgUd2QEH32HvkK1jKZ5pMVRApZ8ZVa4YJiZfok2At6QGYU2",
  "key8": "hUu5xzQrgWXjBWJMLLXFhcfW5y3qx1kbNHeHfz64djtUwMupKW4u7VuTbjjJsbudRBcGzoEnkVWqD4gz8dBjM9p",
  "key9": "21o6BPuobZXtobtbjyMJgvZrZR2yXo3RyW6j3h5G4qkcuDMBM56zcrbg21mwwkpkpYWPzuPoZV2AxsHPt1MStY2d",
  "key10": "HJKQbVUm8b5iNgkjcNEiD6MVgS8rmd6KjtC4StPmhmC9HNdGeA37SJBKjqfxJQw7vdLDddXd7aSdYC8Tc82KSQX",
  "key11": "5GWtQZfkCuR3g2JnDMaLjqrBg17YkXU2Ciye7sEX8XySz3KCXUrwPnPEbvTauvbasjj7KG9VvzA7rYhkZfLjJnzi",
  "key12": "GqT5uSUEBV8PTbMgvqH8sUmRovwWFxbCypFMpsNANeehqZDAmgMdS4z1fy1Cqz35c4oQbDG2NjPSTakwwJExAzP",
  "key13": "4MXwsWnUsdWcdXCzmv5oyeXLSL6UBVP24X3gw2ZzGcfPy8jr9nYG6UYD8ieRybzErgZp1CZfFdMAwocwqx3uzTis",
  "key14": "2bg2H9jUACsaKSrjHugoozZpju91keyqJkVoiNm6LhcRdaigPc86hyMpzwtm8DwKDYRUjLhwTTLyAXtgVjktddZD",
  "key15": "3mvPHWCV7nzUaSWCogGWMtjfVKy8PhP76m22bZfXJLXjb2NesyBU6mwxSv86txfsNraapwSJdgfqyLEpbUa5Bdz",
  "key16": "KcrJsTgpr9vDRC4S4z82wqmrmZN46BVMFUV2VxJB6yHFm7MoQK7m8jDeC56oFLHAAQXFrGEiD94BwymvRMaMxPL",
  "key17": "4nXaXo6xV7V394bFTbi5cYyt2VW1fStukFEWrBis34qPfu3CKN28jnV9VQUMyL1wT7nc4cP5PACaYrDtdKMJyLnd",
  "key18": "5GRuBBMC5mx6G2zw6uua5rGqfyA5FuUsb4L6kny4s3bfdkq3bMDoCdigEvVqJdTc8q7v1ns7fKfPWFZUWAVxferN",
  "key19": "345SPr1xQxSrE5P72EFFNTQ1VM1vCcXHFUDuVBSS463EsVUeYKrx5SQWYdSuSnjG5qJ8NfaMejr237qj7ZmTL8CQ",
  "key20": "2YZXurAxAYUmsKQjoA3PCJBjbiqFRWt8q3y7b8DVQ4embPvGfbD4ePfB4WCFBQZZdswTMMUiM9aZuiUeArcNRVXH",
  "key21": "2i79CT66bCteW6evgfLbBrWZHsuK8DZam7jKW9psL9TdwzSJCCcCqtzwDuoyq3RwkDLiNHxCXUB1GQLejb4AWGSe",
  "key22": "2eR8KERhm6S2YcbMF5cxMkAWZM5721gDbjWZ1RXeh8dEPaM9tvDce55jLj9TAXhdEiHVM5vwub8EjpFpAmyo4JDQ",
  "key23": "4basb1bpMU5VxstWr2G4abK9j6NXk6HSXfiSALgyJrQ1seSRrqXavs8MiZfkSVpyRQDGcKzukqJPicQbvUQtAL6L",
  "key24": "5KGc8Ao5p7ZrZAjM1XoDt2YfhaGYx4KUY4j3dy3aBqqi2W2DBvwaypvKk8AKABCkaNQyU5zbhHBmidzT9VSunC2j",
  "key25": "kYn5T5DpHGZHCvg5yTjSRr2VBQqVR9DRENUne9C6ohYAawV7AGNAaoZq4ujUfNhnhciT1sDLsYnw4Fky6LFKPWe",
  "key26": "bqbcrjyAUYCwRmwJGC1zLFbyX8hwYu4kywoo2ECpJz2wTPTxAMERQHG4ZzX3CxXY8K3c4EntxmytYL3hdfcXJsj",
  "key27": "2rmJXes2CyCt36kbo5iPBtSToB4eaFS4TstMwrHKfE6KjF96ACKutfqxxYmgx2LN8kHxhS431nLSWVdFmtXURM7r",
  "key28": "2vcNPkg4FifedTg7B9k74RUNpo2LcbM63Jqmy6eMadibHbzL2LBGKdcVxbN7XmezL9TV3wqCtpmixTmvHYwsSQVj",
  "key29": "5eM5ELDHhKiC3xUQsqn8Gf4pLnKqB9z5ZrddjxJfG5ubwqtYJw2T6oAUiucVxfUZP84QNSMexyxpPFyqGrBDvGQm",
  "key30": "96P6a4xT2gVp3EqQVznhJPx7RqD8W8qJRa5uGQuZDYED8RyKaxDPS9SXXzf3DdUe3GukM9BG3SeRvAyuUzbYFxa",
  "key31": "3zxktP2713UMBSsQjkr3KhCJhbVTET92g3xYf1K8fjU5bdoWtD33xtpEQdW1BgyivVy8CaMSY74UqZ8hfXNmKxZb",
  "key32": "6urEkiEGQy3XHfyjzKonWjkDPqpRHProEy8k9qVnCXE6AsbkA2zj9kreV7dwAE35BcSQRDY25o55ngv2ezbwDR7",
  "key33": "49tHJcrmee9bbrn2sPtbuivJKZiFLAxWtNq7qHUqCMq7qytfNoXc8fg4ReLJ59WjeqgE118E5ZsSHUzXr15TWneq",
  "key34": "5FV3fqTuvnENKErDGmS1FjnegKJjKczv7qXv456fotvFPNYsG7LrLJEnvRdnVo9E4bTVfwY1rQNvHu5hwYoarzQo",
  "key35": "Up9mxxE4w7SVaxiug8RqkThKiU4Edc6NuozG16U7pfdRLGCPb2dUEyuhxfCK6zmpCWRiT51cJZit1iEizPeZfx5",
  "key36": "4ZxPpRAxh3C7N9okn4h6TUCfrRwFMYXBEyMXZxNKsQF5LgTSRDohyLv9YTN1DxtBmnNnWN5YPuUwjExJx4pXujXK",
  "key37": "aZfdxaDyJf2nUbjHo7Bg6ddGhNzmJWwXxWc3Ns33aShBqsyUWjzjB5BFZ3Mn1jb6DSN1EonRcm1mfGQsPtL9eX1",
  "key38": "CFDDPUJNzi2MnJH23XbmdCMPJzRTk9XyrRr4C7mLSobWzgqVUcWNCvizyg6WT4cNuG8FC2edM8jM9Yx5cjDPF5h",
  "key39": "4nM7hnXn3JeGkHskz1kdqNgMd4KbnEauqjcw7r8hbPWwCg3dvx6WPRXFHZVgQUANHj9mL3GZ8R15MmBbSDSHLY85",
  "key40": "4hNwXa8Y4Zh52cfdKB6EtMpo3w69UE4syDBvZpBgWbZDLUvEJpLCic1xX1m44VLUaBVAnT1QhiXUSLtn7Jkpyrn9",
  "key41": "4MKcXTjnasoBw5mD7NYNcqzt7xVJbvZLRh6a6Qesqzt5J9MqUQntjkdKVfMiKvhUi9bup2PSmNAfaBaFS5FY5wZk",
  "key42": "4LS579ESTuPQVTUwGuXC5jxU31SgdT3HmyQ2qAahUGzY9riEqEHEGQAQiFK55qm5LGvJE4ZKbQPXcSjko3c8ZP4d",
  "key43": "4psXacE7Z8xErubbUqrJJuSDv9J2JppQJsVriiM5EgnZ6KcrnYjEPYC9UPCJZKV2CQBZbd67oDqBDyrqBsThBCge",
  "key44": "64z2dPvaazzGHQ3NDC2du72ruTRcuDybJCB4NjFkdifTKKmgPoBbdb4uvYrmeAtedKRQ49qiHgnSm4cu7577HXen",
  "key45": "5E5Lhgiutg2GyS765HoYHAE7nDDJwAZakBqzfeSoCVrJ3C4naPuXLUj2XfFSK3CqLvhZNFsn4Tq4wncd9GKyz1Ew"
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
