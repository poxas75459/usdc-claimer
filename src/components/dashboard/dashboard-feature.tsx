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
    "2cCENdaL2Ubc4BAnb97sHTFKhKY6hkSVExoPmdqeU3HtDdnLCdhMnu7VHSxpz1y6aUXUtZv6fXbQwhx3A2QHMrAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wG4W6V4c2eBS6BWwWE6Kc9ZEm4z8c92iHwjmSCs1HZwFe6RKuNbihH1u2axDQB3qjihU9Y7qUA3WSchDfkBNFUf",
  "key1": "4eoDrRLQiXeMzLovS4G89vHQ6wFs2miz6duHcTe4J2eeeS2bYiW2joq3zDeSsm7u6mEayDAdDPoxmPkSyNMCwC4B",
  "key2": "2n9w5RFQiGXKWDxdzPcrWCj8dCwY14h3t8VkXFu8pe2nELWApmDEwU2RiQHXKrh9YbhTj671vdw2UsumYhZzrVy7",
  "key3": "KgcjGCk3ck3phhRbTmt1T8riRd87N1FMi37vLuvWfpHRV59aTbm9YdUryxnTR8GYeTv5qGPwCh24vPu585QeJc6",
  "key4": "3AbLvP2PqPSYuxowPbfcKu4tvh47gtTNij513jAG2s36PeucsurQreu9PvRUgC6Ew2UC7ozECFfUwjrBUFMfD5T8",
  "key5": "4JVhi14YApsHv8epdpYKrSV9bL1QKwgVCvtTSmsUUohMGAtsQeHzqhLzYArRBTsZ2EikPu5V6hiEGd7nUHu2t1pw",
  "key6": "4BSPuSEAwpKnMBAAmrNDhuMBDndMZmXgfNXN4kWm6cyJymUbz6bZcNya6LJXE91wTDf3hdgpWT3Boc8MW3npCqsu",
  "key7": "3ff4w6wvXAThWz5fmzJue4h3xM1vjyF7LtBSr8Aa7uS3o6EiAAob5XxFinghDWgbgAauRNREHTvLhZUY16FTYigt",
  "key8": "2NmNxdGdY2ZYATcFSKhDXSF1MaJGPEyPLvWFqAtWaCkbpURHFkJDfCgeXcqd7549bBsi62yHjRxHegPKcriT5FZA",
  "key9": "5iJnEG3DTz4ANU8ccf4mtVbJkJCkNkSBpiuEQHQkozP6MGQGyYvcHt2aXn4rLG8eR4DcFxMhN8K8TQCUNTamModF",
  "key10": "2nYAc3zo5T4qQJ4uxj9FHdCuiEH8nsXUzPt99T6Jjgyzo6yRYrgtUnLQZAf3xNrUEAMF1pofZkWbfg2t88YASgLx",
  "key11": "4iR2D6EVCT4Nc89p5Hnyym6QzZNqWF5iVF97MEfYQy3AnJEyMHi4GKYURVsU7h4pY436rNtBbx6YxMUGB7c8hRhX",
  "key12": "3Gk1DxskF6zmBxKs3PSStUXT1HieUQnRVfotVZZRPRYwGomfqfrZ9UEhT16XYHUUt35MsLouS9U6vFfWxNq7CfFG",
  "key13": "3epqK9gjzUaaZYPXzLgUHwu9EjCNrkn4EP1s498bkVGfdk11s9XAdTG8Lw8dJNYU3K4qsZRBtNucHyRyC4aVM4Mw",
  "key14": "WKcW7r6F7a8cqvPma8kCbBPL6qJ4n1uSuDF4ujCzxJCkd8dRDqft34Lkgv2FTaZKhvG22nHFfvD2n89FVbmLH5Z",
  "key15": "4BLFhVWuUpQVMJ3npZdZaTFpkyAwktNZ5tbVtPxHgViPBWBNYVWFczikxCJjiwkKuLS6EjQwyDxzLoPXhh8FC2sw",
  "key16": "2SErKrLH6LQ3SCNMXCsTDxHgjaWaBTj8QtRDLkxS3QkhCKQCwPdmCGqKvZUNuF3aeGrMpb7msfpDHVhkGkPzBpun",
  "key17": "2qnxP5MisCsZSUfjwCAUxkkgu6dHbzSDUKrrZvVh95HifxGMy68K8whBzt4xeHNMQy9wun3sYxbEtEvCkYmoDYCs",
  "key18": "5x8eMBzwBhfQPima1RAmEKJfMZcj1CYXRSzoh3dwo4uFP5Emak3hrc9sZ8Qud2xLpx81KxkXwqihb4SmggWoaRJ2",
  "key19": "XsBA3opSyqKXvqvZ3RTjozmK8avQ6tSogijK7oh4xPkiQHjgvFixXFQbSF1gEBGRt8cD8kEDem2HEg5k35Z9RPf",
  "key20": "BpJusNBZx3mC4s3KuJqM8bgxZL6QQrhTifDz6tw4xbnpfthjxnpMSKckb2hWuHNzbzHFHacf1fvNELQCXrZWY9N",
  "key21": "2if9uCw1cTnHPBEEnMiuocZdee5WcFM74aFUFdaMRAK1AcoGcwMLry1eu5QJwRNVoLGUDei2N5tdody9CGCpMFoz",
  "key22": "Fsqn5oDg6A4AJo26nHxsidQGgRLsjnXfiaLc8jmXpBmVfrvxJp7pfLyd2WroaUnZkVnW5v6b5DhAi7ZtkNBk527",
  "key23": "HQ8mYPURQj72UURV4CMj4dvE1vGQxPBjVRp9KAybnJiCdQUce9U8xJDFmAy5ve7xgPgxCv5pZLeQFgPHmjUmtdS",
  "key24": "YfrwG51mdA7eLYhJosjmUNjYtPT82dqv1vc6joWPnJsyKq1yt8KhaodZGyY499r3z8YeKor92NszrdqRT6yrQgS",
  "key25": "Tv7D8rNrreUV95RDDuEb1xpCJAgpqAqXNi3AamJhyzTY83qeVZ1HQbHWRJEQ9qWW6T85USrX92gpQrc7Y9Yt8iH",
  "key26": "4ghFaQHCEMxjRMw14yQKnZgdf14fiCaqQng5E3HNngUEoQaZCwW57tU2uTgmfZafLgTyySVJWjQ2v1QJ9eYWa135",
  "key27": "4kNGZbhjrrLowQsNHxu4EUB37daqW3iJsUmZ4a6TMsCwYDbPXmyGpagABEK5TjUUJoU2w756T2yS5nHr7ahWLrcJ",
  "key28": "4haPD1mTRGEu3bHbe4KvdnqdePYYzNoSAhvUHVmzBRPXag4CNkHHYxx5pVXDVKZN1MnTywFBcFoVVmrSppz6tLUL",
  "key29": "T29HLn5E23ix3ugPYP86PwkPvsAhyNS5Dhvrba6yS6f91vDpBmtTxe1FNiFQ82yRHTT5MKh4rnXKEBFKrstKz7y",
  "key30": "4wX3xvj6wpr1da9c6mwDQRY7vMTqXtvLi9o2hpri6BAo9iFqYuxE9iEuLLQiMhAnYuZukJdckMwFhsgrEjJUwUWW",
  "key31": "274VLR1dzsjNMN18u7MHiWREPzJqNWDQVDNnokqhUJzWXacfH789invCfQbiUrbmXfiME1NxYKEQ3Zh6E1oQn3X7",
  "key32": "45kv1oSPHQtELiFZkZzcPbdXwsZdXeEjrk3zXMPtWS4K9Yd4YWUnAC6dFunuEY6KvkLyvcZ97Dpckr2uWqjWLzqv",
  "key33": "4wRuqGsjQUj3wMnZaunNM9zx7qdZBCCduxFHmugroiyG8nA6nSGFXbw8ZwCRLVtRTLDcrKXqrxx4Rtag67m4LbbV",
  "key34": "Nz9TyZvv65LvzfmNB8Pj86fNbTkrWTzNMqWDxW7K2eWbpnTntghRaSo8bSK9pysqYjJsszeLYpTqfVaeYAA6MU5",
  "key35": "2rHnVzHrZp4HrYWZpZn3i5DYQ8PB2ceot4o1rURfwtSwvBnjM72e7GZdzaoKRUejncNPYfnWadH6ammJEPG1bvez",
  "key36": "7YkdxVwhVsAPMHP5fpAbEfwnpzhVfwwWV6dWVuKhA6PqbgsSQvJ72FqvACW4CCao7TyBT9xp3nGUnnCJnxQzD7d",
  "key37": "3K3Ffynt1n3ahF1ajYFAVGKJnSuNEBbZyaMceP1CvypyxNQtTRanXrxhqEZA7Nx2v6gtzyZ8vym3fyd2BJnRizHj"
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
