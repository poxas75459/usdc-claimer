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
    "5rHxchfnGrPyqsBohJAJy44qQzfdyCi61SZx4o8wUPRHtnhZa2xXYvVsmcuZWUgxzuWVFTmweub4PUBx83HwqMPf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XFzEr3th6ovfXpRm3ebcu1Bw8FWh4a7BddATXi4qyv3XchTJbF2eGvUG3PXiHxrFP2VpFTbknfMohizWxSidk4n",
  "key1": "mUXbjNN81VuZUXzAFwWf42kxT7sfs1U5Bm3yb4FRTwApc6aboa4uPRiXA35bff2sVvaa18fVomtnSqotQxPac6Q",
  "key2": "4VxmoC4SswX3FtsyPDFVM1SLG52VekAMBk9JJWom9zwCpPhkDBeBsSvR1NzHC8v5tdsp1F6xvpdJbXa5UFv5wKQb",
  "key3": "3A29agdWuj6eRFgoZzUnJXJ2qxQ64NoSUZeNg1nrucNjcor1bV4hxdbSfYS9sEitdns7cSqzmCYqciLPm6kcb6SM",
  "key4": "5KSxyFmzyDBLNpNxiJDmDjNKWVqh1GkmJefeA5L5FaXAXntt18zAB35agoyVxJNW5aUN2Lg3SqhqRe3AHeWZLi3k",
  "key5": "JkPivMN3EWpfkgSbAQ5uCo6w9PDV6xT396xWhzAS3Cam8hRHQhTPL9bL8ab1eKB7xW4fFr3TqrkohHagKakjW8d",
  "key6": "2qg88hAuDJgSh5N6SPiQDP81pT1oG9FaszFT8wPQ1H2n8WLmPaQdojBYHQL3JbpYru5YfuWyFBdrwHk8RaXLCgHU",
  "key7": "w3pKugSRkDzL4hC3agdgF2YVqraJxGFdMVCxpKdyyYoy4F7PAa7NEqBVCyHQ9nahEsFU6uT9XKfhPTX2XCMgVr4",
  "key8": "5tQDmp4zW5Eabsg3izodVJt3iE9HSKW4QnEWC5B8gh5whjA7G5dCLVraQWVxvagzbPeSg2FgSGaZGrdbSj6abQLX",
  "key9": "3P51zmuHQh2LqHX1HbnSRnJNKnpAtFaG9udC23UXmLRhcUUMyzBfdm8rcE8fr8Wm6x9mZQC4U2BfoSJf5CRD6QhG",
  "key10": "3EQYxWCALDxK6VTehoN9jjRZ2ixMuW1VL1FiYeacjKHNbev7S2uks4jrCUx2ehtM1mKhWmfwkbZCyAAsdp64iKwb",
  "key11": "ebD59S1BdemEScst9JYmkvy3XRhPK8HGR9QxrrXraM1rvJU8fajMQP6PSQ4ZNZatfWyguypfsLNhruaEJP4Lf2z",
  "key12": "542HZDdEMpYLXG1y1JZZEvtVqF2JashwbkSuGC3hZ5WzQC5j9SYwbG5QqjThTi4zU69WSSQuH7qfXHixU5NoZGMk",
  "key13": "gWsZgN3oKjqy5BAecro7ndJ6wqxshQn6uESsZZHawz4Jur9GKYH8M43nVfPMBNDsdSpCjSEspqbSyNLUxF9Hpqw",
  "key14": "5nZVmiWTF1WZeXxcyksoTHSFZ9HpFgxJ3af67F6J1qWvmRSZWkxQowQkKqup7peFgqA8XDJSdWN9f4sc1wGZWH8L",
  "key15": "2vwJA5me79tQiVjPf7mH7NHejYW1YPf6PCHCCW67kZ26gmkw2auL2ZGs9zNHSc5sCdrQepfZfwrwmefnXeTRXE55",
  "key16": "66uCUJvX6r3DY2qyPUxh2itnC6Stw8DtRszA9LhDCqXbmbetW9CrDaAEQKNyh3qMVF6Y5DeausZTd5SybJd4bm1X",
  "key17": "3zW6NoWkHwTx4dwMcE2bHCsiPY98LG1P97bWxVe4piQFaq98KxamixPPMrRMhaodEnuZggpjTkPGs1zMGVRYcXdh",
  "key18": "5dSCdd1jNc2nj1sESDiJhUFk91hRVdS3ZGpBPinDqGBVwpZEGiGjKNFY12n4gTaiMuwMtVN6wFefAURDwwKG6vNH",
  "key19": "4zngcRxY4Z7y3iyc5Vdz7VXjnqBgARafF1Y6ks84kUtWn3B8cAyptiHikuT51HQpV5zkxhAU8qN7C3cJ3sUvPU5m",
  "key20": "2UYeXbiAj42oRXmxJeFrbpWTr6FNXiNhXY3qfs12g8P18gg9kGE88BzGuF1C54cQ4ffSxd4ec7Tbmbz4xFmwBZqa",
  "key21": "3jVDiaCttAdFQ6kX5oo2f1kVcM9LtdE7uCy22UBvazZmgyEkA6WXM4PjUGTGEsNGnwAytTRqdyivhjGNBwddpBRK",
  "key22": "3qRiwJKw9Nh47QkBzeA2QB5WvVaPfyXhFEfAFU5V98FsRihWr3Et29HcC2rWFXqm2NkXhEJohFcyY4PmCnfqy3kn",
  "key23": "663jPMeKHuTnWn7tnjsr9Bti1Ab66wix2mA6JrLHL2o4yQL6bgUb8dQyzLtm8ZF3KLpRPpT5yYUFcJrwkFgbEijC",
  "key24": "BV9o1jy3X8pnruWof7gEBjNe39RMuKEcntKCzVvVXKutzPrTv5iWsp9qspxyRi4x2mXGUixHxYqCj4VB979HdBw",
  "key25": "5S1MCa6BZ6F3kS7HTePW1bxT6U9wg8sarXVPVhPjDDhsFti5SWunLaaArcLWvw2fRWL4hvwmPVKjuJuZHasSuYxc",
  "key26": "3dJh9id8DD3vkxEC1pU8iFntVrustn9nTga8HjK9wkmEGmA1r5KREvWg6Ux3cDb9rVComfGMGZ3zZA243qgRdfuY",
  "key27": "K31fqbuWQNPzryh9fxXqyCCxgCNrorvPapFGn4tmA6P98UxAFF7SsahBygWky3AThqdsJAB93E22EDzURBFBADS",
  "key28": "3LETSqM79YSD11VrRz68X6Z1MYPTiecCoT6fETQoG1na1XPytMuFqZgFKxTrNbncXwTxzbojYZ6dLdjGBSCADZTL",
  "key29": "32191TpQFB5Ar7BWy1QKiyqijY4NRmVt1me82VtsbmjgATo7DuX8weaqyqbareAzHThEC42hjF6i1eXYZLotR2H",
  "key30": "66FJykhG52hcEwQBgq3QupC8BKPrnA1ESm7tGe5x5nAFgmEyHC5JCPMTA1btAhqBPQu9wKBbFW14G1iry3eRg1me",
  "key31": "3Ggfp6eRKrJXQkT1fUzfZkzKNHqeayovJmDAPCeHPKJrhRx9S3PZPoWApu2hFybh8F8dZCy4R76xumCZXxSHAFcE",
  "key32": "3af6ciEcwpL6WzP35Uvzw6Js8yXBq1ou6GjEqi3sfcLt4msWxtxbsAnSfiwjdanLpZxkrLCTqqwKP8wLzebkoKPo",
  "key33": "sba9JAYR3yHqZLTvF1bfcbhb15WUnjWADsi2srpjJCYxw3quHMzafBTANiZhky3ENPnAA4TfchRNQ7e6t4gqDeA",
  "key34": "2mRZ4myFpUqFFo7dAqju2jA1AtpchUjN73HjCkp7LTEdtcaW3SXWyBHjdfbGsAnm4QjHQDvmSozTEKbvj29ueE87",
  "key35": "3q2kKasohUuyq36msyFv5DcvsMdU4uS5ZPkanxs64RYbjc9qTnFcDoGiGXpUu8RM25H9V9AdWazFPrc3iDFRf5jH",
  "key36": "2wsvvCwooyWg86BesMRSmeVT9wNeivyYLzgj4eGPuenoDwJioVRF3Ad6XLhUjvrhpeWkKugaB1eGQzTAF9VL4DS6",
  "key37": "57RiYhDNsiHY4S1N9LwcLVCdszdM2bUf1Fpw8tD8WFBzsAt7YTf87bt98GF7BsjUVDWQGkVKFgcf8LcgRiRK5EmX",
  "key38": "5DHKmxhpAXsJtWGmmA91gQRnzS1DQ9YHG2RN1scZXDMk87jiThCxX4vjJYDXzfxf3RUTBibSjPv3cZdzv7JedEVD",
  "key39": "4C4WNTYaZDuRe7AszEVvoPRcPDS2RKaQWmEZn64yBRyRS1Amd2y4pL75CqkjvPCNayFiLJh5hysd9bpogVzPb9ga",
  "key40": "4py3Z3y2uRA2LJxzTPrBSiisBNr7RUDkbgYUqg7hVpQFF9xkecsdfxVEsjyDqWsiCJF9rkcbeYuw5AWYpqiVojgj",
  "key41": "4cB1su9ZxH5BNQtS5B3rjnNs86zsi4ZC4WHBd2PmiXSBD4331d7yF9fYSCwA9rFYJLdj2pQxCwchymaGCNSWxYWi"
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
